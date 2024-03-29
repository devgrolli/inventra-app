import { storage } from "@utils/storage";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Context,
} from "react";
import authService from "services/authService";
interface User {
  id: string;
  name: string;
  cpf: string;
  isValidated: boolean;
  disableNotify: boolean;
}

interface AuthContextType {
  user: User | null;
  signIn: (userData: User) => void;
  signOut: () => void;
  updateUser: (userData: Partial<User>) => void;
}

const AuthContext: Context<AuthContextType> = createContext<AuthContextType>({
  user: null,
  signIn: () => {},
  signOut: () => {},
  updateUser: () => {},
});
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = async (userData: User) => {
    console.log("userData", userData);
    setUser(userData);
    await storage.setItem("userInfo", userData);
  };

  const updateUser = async (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      await Promise.all([
        setUser(updatedUser),
        authService.updateDisableNotify(
          updatedUser.cpf,
          updatedUser.disableNotify
        ),
        storage.setItem("userInfo", JSON.stringify(updatedUser)),
      ]);
    }
  };

  const signOut = async () => {
    setUser(null);
    await storage.removeItem("userInfo");
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
