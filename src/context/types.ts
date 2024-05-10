import { ReactNode, createContext } from "react";

export interface User {
  id: string;
  name: string;
  cpf: string;
  isValidated: boolean;
  disableNotify: boolean;
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: (userData: User) => void;
  signOut: () => void;
  updateUser: (userData: Partial<User>) => void;
}

export interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
  signIn: () => {},
  signOut: () => {},
  updateUser: () => {},
});
