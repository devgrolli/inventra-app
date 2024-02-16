import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Context,
} from "react";

// Definindo a tipagem para os dados do usuário (ajuste conforme necessário)
interface User {
  id: string;
  name: string;
  // Adicione quaisquer outras propriedades necessária
}

// Definindo a tipagem para o contexto
interface AuthContextType {
  user: User | null;
  signIn: (userData: User) => void;
  signOut: () => void;
}

// Criação do contexto com tipagem
const AuthContext: Context<AuthContextType> = createContext<AuthContextType>({
  user: null, // valor inicial para user
  signIn: () => {}, // função de exemplo para signIn
  signOut: () => {}, // função de exemplo para signOut
});

// Definindo a tipagem para as props do componente AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

// Componente provedor com tipagem
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Função para simular login
  const signIn = async (userData: User) => {
    // Aqui você pode adicionar a lógica de autenticação
    setUser(userData);
  };

  // Função para simular logout
  const signOut = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
