import React from 'react';
import Modal from 'react-modal';

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  children: React.ReactNode;
};

const ItemModal: React.FC<Props> = ({
  isModalOpen,
  setIsModalOpen,
  children,
}) => (
  <Modal
    isOpen={isModalOpen}
    onRequestClose={() => setIsModalOpen(false)}
    contentLabel="Edit Post"
    className="mt-12 w-[380px] scale-100 transform items-center justify-center rounded-lg bg-white p-8 shadow-xl transition-transform duration-300"
    overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
    {children}
  </Modal>
);
export default ItemModal;
