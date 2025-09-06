'use client';

interface DeleteConversationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isDeleting: boolean;
}

export default function DeleteConversationModal({ isOpen, onClose, onConfirm, isDeleting }: DeleteConversationModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-xl">
        <h2 className="text-lg font-bold mb-4">Confirmer la suppression</h2>
        <p>Êtes-vous sûr de vouloir supprimer cette conversation ? Cette action est irréversible.</p>
        <div className="mt-6 flex justify-end gap-4">
          <button onClick={onClose} disabled={isDeleting} className="px-4 py-2 rounded-md text-gray-700 bg-gray-200 hover:bg-gray-300">
            Annuler
          </button>
          <button onClick={onConfirm} disabled={isDeleting} className="px-4 py-2 rounded-md text-white bg-red-600 hover:bg-red-700">
            {isDeleting ? 'Suppression...' : 'Supprimer'}
          </button>
        </div>
      </div>
    </div>
  );
}