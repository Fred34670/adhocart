// src/components/admin/archivages/ArchivageForm.tsx
import React, { useState, useEffect } from 'react';
import { Archivage } from '@/types';

interface ArchivageFormProps {
  initialData?: Archivage | null;
  onSubmit: (data: Omit<Archivage, 'id'>) => void;
  onCancel: () => void;
  loading?: boolean;
}

const ArchivageForm: React.FC<ArchivageFormProps> = ({ initialData, onSubmit, onCancel, loading }) => {
  const [nom_archivage, setNomArchivage] = useState(initialData?.nom_archivage || '');

  useEffect(() => {
    setNomArchivage(initialData?.nom_archivage || '');
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nom_archivage.trim()) return;
    onSubmit({ nom_archivage });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block mb-1 font-semibold">Nom</label>
        <input
          type="text"
          className="border rounded px-3 py-2 w-full"
          value={nom_archivage}
          onChange={(e) => setNomArchivage(e.target.value)}
          required
        />
      </div>
      <div className="flex space-x-2">
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          disabled={loading}
        >{initialData ? 'Enregistrer' : 'Ajouter'}</button>
        <button
          type="button"
          className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          onClick={onCancel}
          disabled={loading}
        >Annuler</button>
      </div>
    </form>
  );
};

export default ArchivageForm;