// src/hooks/useBodyClassOnPath.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useBodyClassOnPath = (pathStart, className) => {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.startsWith(pathStart)) {
      document.body.classList.add(className);
    } else {
      document.body.classList.remove(className);
    }

    return () => {
      document.body.classList.remove(className);
    };
  }, [location.pathname, pathStart, className]);
};
