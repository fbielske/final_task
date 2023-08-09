import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  children: ReactNode;
}

const PortalComponent: React.FC<PortalProps> = ({ children }) => {
  const portalContainer = document.getElementById('portal-container');

  if (!portalContainer) {
    console.error("Couldn't find portal container element");
    return null;
  }

  return createPortal(children, portalContainer);
};

export default PortalComponent;
