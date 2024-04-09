import {useContext} from 'react';

// PROJECT IMPORT
import {AuthContext} from './AuthProvider';

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('You are accessing context outside of wrapper');
  return context;
};

export {useAuth};
