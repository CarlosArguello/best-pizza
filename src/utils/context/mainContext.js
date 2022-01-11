import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { request } from 'utils/request';

export const MainCtx = createContext();

export const useValueMainCtx = () => {
  const [users, setUsers] = useState([]);
  const [stores, setStores] = useState([]);

  useEffect(() => {
    request.get('/RH.json').then(({ users: _users, stores: _stores }) => {
      setUsers(_users);
      setStores(_stores);
    });
  }, []);

  return useMemo(() => ({ users, stores }), [users, stores]);
};

export const useMainCtx = () => {
  const context = useContext(MainCtx);

  if (!context) {
    return {};
  }

  return context;
};
