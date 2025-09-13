// @/components/admin/users/UserForm.tsx
'use client';

import { useState, useEffect } from 'react';
import type { User } from '@/interfaces';

interface UserFormProps {
  userToEdit: User | null;
  onFormSubmit: (user: Omit<User, 'id'> & { id?: string; password?: string }) => void;
  onCancel: () => void;
}

export default function UserForm({ userToEdit, onFormSubmit, onCancel }: UserFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'USER',
  });

  useEffect(() => {
    if (userToEdit) {
      setFormData({
        name: userToEdit.name || '',
        email: userToEdit.email || '',
        password: '', // Ne pas pré-remplir le mot de passe
        role: userToEdit.role,
      });
    } else {
      setFormData({
        name: '',
        email: '',
        password: '',
        role: 'USER',
      });
    }
  }, [userToEdit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const userData: Omit<User, 'id'> & { id?: string; password?: string } = {
        ...formData,
    };
    if (userToEdit) {
        userData.id = userToEdit.id;
    }
    // Ne soumettre le mot de passe que s'il a été modifié
    if (!formData.password) {
        delete userData.password;
    }
    onFormSubmit(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block text-sm font-medium text-gray-900">Nom</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-gray-900"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-900">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-gray-900"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-sm font-medium text-gray-900">
          Mot de passe {userToEdit ? '(laisser vide pour ne pas changer)' : ''}
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-gray-900"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="role" className="block text-sm font-medium text-gray-900">Rôle</label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-gray-900"
        >
          <option value="USER">Utilisateur</option>
          <option value="ADMIN">Administrateur</option>
        </select>
      </div>
      <div className="flex justify-end">
        <button type="button" onClick={onCancel} className="mr-2 bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded">
          Annuler
        </button>
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          {userToEdit ? 'Mettre à jour' : 'Créer'}
        </button>
      </div>
    </form>
  );
}