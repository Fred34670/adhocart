'use client';

import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}

export default function PaginationControls({ currentPage, totalPages, setCurrentPage }: PaginationControlsProps) {
  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="mt-8 flex justify-center items-center space-x-4">
      <Button
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
        variant="outline"
        size="icon"
        className="bg-white shadow-sm"
      >
        <span className="sr-only">Précédent</span>
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <span className="text-gray-700 text-sm">
        Page {currentPage} sur {totalPages}
      </span>
      <Button
        onClick={() => setCurrentPage(currentPage + 1)}
        disabled={currentPage === totalPages}
        variant="outline"
        size="icon"
        className="bg-white shadow-sm"
      >
        <span className="sr-only">Suivant</span>
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}