import PropTypes from 'prop-types';
import { createContext, useContext, useState } from 'react';

const ModalContext = createContext();

ModalProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
export function ModalProvider({ children }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null)
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider value={{ isModalOpen, selectedProject, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}


// eslint-disable-next-line react-refresh/only-export-components
export function useModalContext() {
  return useContext(ModalContext);
}
