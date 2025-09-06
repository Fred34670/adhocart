// src/components/admin/themes/ThemeForm.tsx
import React, { useState, useEffect } from 'react';
import { Theme } from '@/types';

interface ThemeFormProps {
  initialData?: Theme | null;
  onSubmit: (data: Omit<Theme, 'id'>) => void;
  onCancel: () => void;
  loading?: boolean;
}

const ThemeForm: React.FC<ThemeFormProps> = ({ initialData, onSubmit, onCancel, loading }) => {
  const [libelle_theme, setLibelleTheme] = useState(initialData?.libelle_theme || '');

  useEffect(() => {
    setLibelleTheme(initialData?.libelle_theme || '');
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!libelle_theme.trim()) return;
    onSubmit({ libelle_theme });
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label className="block mb-1 font-semibold">Nom</label>
        <input
          type="text"
          className="border rounded px-3 py-2 w-full"
          value={libelle_theme}
          onChange={(e) => setLibelleTheme(e.target.value)}
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

export default ThemeForm;