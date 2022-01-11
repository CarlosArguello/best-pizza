import { useMemo, useState } from 'react';

export const useAuth = () => {
  const [hasAuth, setHasAuth] = useState(localStorage.getItem('hasAuth'));

  const enterAuth = () => {
    localStorage.setItem('hasAuth', true);
    setHasAuth(true);
  };
  const cleanAuth = () => {
    localStorage.removeItem('hasAuth');
    setHasAuth(false);
  };

  return useMemo(
    () => ({
      enterAuth,
      cleanAuth,
      hasAuth,
    }),
    [hasAuth]
  );
};
