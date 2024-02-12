import React, { ReactNode, createContext, useContext, useState } from 'react';

interface AuthContextProps {
  isAuthenticated: boolean;
  login: () => void;
  logout: () => void;
}
interface AuthProviderProps {
    children: ReactNode;
  }

export const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div></div>
  );
};


