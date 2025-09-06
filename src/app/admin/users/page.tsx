// src/app/admin/users/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import type { User } from '@/interfaces';
import UserList from '@/components/admin/users/UserList';
import UserForm from '@/components/admin/users/UserForm';

export default function AdminUsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [userToEdit, setUserToEdit] = useState<User | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/users');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setUsers(data);
    } catch (err: any) {
      console.error('Erreur lors de la récupération des utilisateurs:', err);
      setError(err.message || 'Impossible de charger les utilisateurs.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleFormSubmit = async (userData: Omit<User, 'id'> & { id?: string; password?: string }) => {
    const method = userData.id ? 'PUT' : 'POST';
    const url = '/api/admin/users';

    try {
      const response = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erreur lors de la soumission du formulaire');
      }

      await fetchUsers(); // Recharger la liste des utilisateurs
      setIsFormVisible(false);
      setUserToEdit(null);
    } catch (err: any) {
      console.error('Erreur de soumission:', err);
      setError(err.message);
    }
  };

  const handleEdit = (user: User) => {
    setUserToEdit(user);
    setIsFormVisible(true);
  };

  const handleDelete = async (userId: string) => {
    try {
      const response = await fetch('/api/admin/users', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: userId }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erreur lors de la suppression');
      }

      await fetchUsers(); // Recharger la liste
    } catch (err: any) {
      console.error('Erreur de suppression:', err);
      setError(err.message);
    }
  };

  const handleAddNew = () => {
    setUserToEdit(null);
    setIsFormVisible(true);
  };

  const handleCancelForm = () => {
    setIsFormVisible(false);
    setUserToEdit(null);
  };

  if (loading) {
    return <div>Chargement des utilisateurs...</div>;
  }

  if (error) {
    return <div className="text-red-500">Erreur: {error}</div>;
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-800">Gestion des Utilisateurs</h1>
        <button onClick={handleAddNew} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Ajouter un utilisateur
        </button>
      </div>

      <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />

      {isFormVisible && (
        <UserForm
          userToEdit={userToEdit}
          onFormSubmit={handleFormSubmit}
          onCancel={handleCancelForm}
        />
      )}
    </div>
  );
}