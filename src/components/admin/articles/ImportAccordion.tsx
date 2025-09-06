'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Papa from 'papaparse';
import { Loader2, CheckCircle2 } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function ImportAccordion() {
  const [file, setFile] = useState<File | null>(null);
  const [headers, setHeaders] = useState<string[]>([]);
  const [data, setData] = useState<any[]>([]);
  const [mapping, setMapping] = useState<Record<string, string>>({});
  const [error, setError] = useState<string | null>(null);
  const [isParsing, setIsParsing] = useState(false);
  const [previewData, setPreviewData] = useState<any[]>([]);
  const [isImporting, setIsImporting] = useState(false);
  const [importResult, setImportResult] = useState<string | null>(null);
  const [activeStep, setActiveStep] = useState("");


  const dbFields = [
    { value: 'titre', label: 'Titre' },
    { value: 'description', label: 'Description' },
    { value: 'nom_auteur', label: 'Nom Auteur' },
    { value: 'prenom_auteur', label: 'Prénom Auteur' },
    { value: 'nom_complet', label: 'Nom Complet (Auteur/Artiste)' },
    { value: 'illustrations', label: 'Illustrations' },
    { value: 'editeur', label: 'Editeur' },
    { value: 'date_impression', label: 'Date d\'impression' },
    { value: 'nombre_pages', label: 'Nombre de pages' },
    { value: 'prix_achat', label: 'Prix d\'achat' },
    { value: 'valeur_marche_min', label: 'Valeur marché min.' },
    { value: 'prix_vente_internet', label: 'Prix de vente Internet' },
    { value: 'quantite_volume', label: 'Quantité/Volume' },
    { value: 'poids_net_kg', label: 'Poids (kg)' },
    { value: 'frais_postaux', label: 'Frais postaux' },
    { value: 'pseudo_titre', label: 'Pseudo-titre' },
    { value: 'collection', label: 'Collection' },
    { value: 'justification', label: 'Justification' },
    { value: 'date_EO', label: 'Date E.O.' },
    { value: 'estimation', label: 'Estimation' },
    { value: 'prix_reserve', label: 'Prix de réserve' },
    { value: 'disponible', label: 'Disponible (Oui/Non)' },
    { value: 'envoi_possible', label: 'Envoi possible (Oui/Non)' },
    { value: 'categorie_id', label: 'ID Catégorie' },
    { value: 'archivage_id', label: 'ID Archivage' },
    { value: 'edition_papier_id', label: 'ID Édition Papier' },
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setHeaders([]);
    setData([]);
    setPreviewData([]);
    setImportResult(null);
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      if (!selectedFile.name.toLowerCase().endsWith('.csv')) {
        setError('Veuillez sélectionner un fichier avec l\'extension .csv');
        setFile(null);
        return;
      }
      setFile(selectedFile);
      setMapping({});
    }
  };

  const handleParseFile = () => {
    if (!file) {
      setError('Veuillez d\'abord sélectionner un fichier.');
      return;
    }
    setIsParsing(true);
    setPreviewData([]);
    Papa.parse(file, {
      header: true,
      skipEmptyLines: true,
      encoding: 'ISO-8859-1',
      complete: (results) => {
        if (results.errors.length) {
          setError('Erreur lors de la lecture du fichier CSV.');
          console.error("CSV Errors:", results.errors);
        } else {
          setHeaders(results.meta.fields || []);
          setData(results.data);
          setActiveStep("step-2");
        }
        setIsParsing(false);
      },
    });
  };

  const handleMappingChange = (csvHeader: string, dbField: string) => {
    setMapping(prev => ({ ...prev, [csvHeader]: dbField }));
    setPreviewData([]);
  };

  const handlePreview = () => {
    const articlesToPreview = data.map((row: any) => {
      const articleData: any = {};
      for (const csvHeader in mapping) {
        const dbField = mapping[csvHeader];
        if (dbField && row[csvHeader] !== undefined) {
          articleData[dbField] = row[csvHeader];
        }
      }
      return articleData;
    }).filter(article => article.titre);

    setPreviewData(articlesToPreview);
    if (articlesToPreview.length > 0) {
        setActiveStep("step-3");
    }
  };

  const handleFinalImport = async () => {
    setIsImporting(true);
    setError(null);
    setImportResult(null);

    try {
      const response = await fetch('/api/admin/articles/import', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: previewData }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Une erreur est survenue lors de l\'importation.');
      }

      setImportResult(result.message);
      setPreviewData([]);
      setHeaders([]);
      setFile(null);
      setActiveStep("step-1");

    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsImporting(false);
    }
  };

  return (
    <div className="p-6 border rounded-lg bg-white shadow-md space-y-2">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">Importer des articles depuis un fichier CSV</h3>
        <Accordion type="single" value={activeStep} onValueChange={setActiveStep} collapsible className="w-full">
            <AccordionItem value="step-1">
                <AccordionTrigger>
                    <div className="flex items-center justify-start w-full">
                        <span className="text-gray-700">Étape 1 : Sélectionner un fichier</span>
                        {headers.length > 0 && <CheckCircle2 className="ml-2 h-5 w-5 text-green-500" />}
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <div className="grid w-full max-w-sm items-center gap-2 pt-4">
                        <Label htmlFor="csv-file" className="text-gray-700">Fichier CSV</Label>
                        <Input id="csv-file" type="file" accept=".csv" onChange={handleFileChange} />
                    </div>
                    {file && (
                        <Button onClick={handleParseFile} disabled={isParsing} className="mt-4" variant="secondary">
                        {isParsing ? (
                            <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Lecture du fichier...
                            </>
                        ) : (
                            'Lire le fichier et préparer le mappage'
                        )}
                        </Button>
                    )}
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="step-2" disabled={headers.length === 0}>
                <AccordionTrigger>
                    <div className="flex items-center justify-start w-full">
                        <span className="text-gray-700">Étape 2 : Mappage des colonnes</span>
                        {previewData.length > 0 && <CheckCircle2 className="ml-2 h-5 w-5 text-green-500" />}
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <p className="text-sm text-gray-700 mb-4">Faites correspondre les colonnes de votre fichier CSV aux champs de la base de données.</p>
                    <div className="space-y-3">
                        {headers.map(header => (
                        <div key={header} className="grid grid-cols-2 gap-4 items-center">
                            <Label htmlFor={`map-${header}`} className="font-mono text-sm text-right">{header}</Label>
                            <select
                            id={`map-${header}`}
                            value={mapping[header] || ''}
                            onChange={(e) => handleMappingChange(header, e.target.value)}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2"
                            >
                            <option value="">-- Ignorer cette colonne --</option>
                            {dbFields.map(field => (
                                <option key={field.value} value={field.value}>{field.label}</option>
                            ))}
                            </select>
                        </div>
                        ))}
                    </div>
                    <Button onClick={handlePreview} className="mt-6">
                        Prévisualiser les données
                    </Button>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="step-3" disabled={previewData.length === 0}>
                <AccordionTrigger>
                    <div className="flex items-center justify-start w-full">
                        <span className="text-gray-700">Étape 3 : Prévisualisation et Confirmation</span>
                        {importResult && <CheckCircle2 className="ml-2 h-5 w-5 text-green-500" />}
                    </div>
                </AccordionTrigger>
                <AccordionContent>
                    <p className="text-sm text-gray-700 mb-4">{previewData.length} articles seront importés. Veuillez vérifier les données ci-dessous.</p>
                    <div className="max-h-96 overflow-y-auto border rounded-lg p-4 space-y-2 bg-gray-50">
                        {previewData.map((article: any, index: number) => (
                        <div key={index} className="text-xs p-2 border-b">
                            <p><strong>Titre:</strong> {article.titre || 'N/A'}</p>
                            <p><strong>Auteur:</strong> {article.nom_complet || 'N/A'}</p>
                            <p><strong>Prix:</strong> {article.prix_vente_internet || 'N/A'}</p>
                        </div>
                        ))}
                    </div>
                    <Button onClick={handleFinalImport} className="mt-6 bg-green-600 hover:bg-green-700" disabled={isImporting}>
                        {isImporting ? 'Importation en cours...' : 'Confirmer et Importer'}
                    </Button>
                    {importResult && <p className="text-green-600 text-sm mt-4">{importResult}</p>}
                    {error && <p className="text-red-500 text-sm mt-4">{error}</p>}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>
  );
}