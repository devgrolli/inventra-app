import { storage } from "@utils/storage";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Context,
} from "react";
interface User {
  id: string;
  name: string;
  cpf: string;
}

interface AuthContextType {
  user: User | null;
  signIn: (userData: User) => void;
  signOut: () => void;
}

const AuthContext: Context<AuthContextType> = createContext<AuthContextType>({
  user: null,
  signIn: () => {},
  signOut: () => {},
});
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = async (userData: User) => {
    setUser(userData);
    await storage.setItem("userInfo", userData);
  };

  const signOut = async () => {
    setUser(null);
    await storage.removeItem("userInfo");
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
