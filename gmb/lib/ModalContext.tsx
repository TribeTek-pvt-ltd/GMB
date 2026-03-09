'use client';

import React, { createContext, useContext, useState } from 'react';
import TrackOrderModal from '@/components/TrackOrderModal';

interface ModalContextType {
  openTrackModal: () => void;
  closeTrackModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);

  const openTrackModal = () => setIsTrackModalOpen(true);
  const closeTrackModal = () => setIsTrackModalOpen(false);

  return (
    <ModalContext.Provider value={{ openTrackModal, closeTrackModal }}>
      {children}
      <TrackOrderModal isOpen={isTrackModalOpen} onClose={closeTrackModal} />
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
