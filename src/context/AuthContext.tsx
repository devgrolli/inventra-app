import React, { useContext, useState, useEffect } from "react";
import authService from "services/authService";
import { storage } from "@utils/storage";
import { navigate } from "@core/navigation/navigator";
import { AuthContext, AuthProviderProps, User } from "./types";

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthentication = async () => {
      const userInfoString = await storage.getItem("userInfo");
      if (userInfoString) {
        const userInfo = JSON.parse(userInfoString);
        const validation = await authService.validateToken(userInfo.id);
        setIsAuthenticated(validation.valid);
        if (validation.valid) {
          setUser(userInfo);
        }
      } else {
        setIsAuthenticated(false);
      }
      setIsLoading(false);
    };

    checkAuthentication();
  }, []);

  const signIn = async (userData: User) => {
    await storage.setItem("userInfo", JSON.stringify(userData));
    setUser(userData);
    const validation = await authService.validateToken(userData.id);
    setIsAuthenticated(validation.valid);
  };

  const updateUser = async (userData: Partial<User>) => {
    if (user) {
      const updatedUser = { ...user, ...userData };
      await storage.setItem("userInfo", JSON.stringify(updatedUser));
      setUser(updatedUser);
      authService.updateDisableNotify(
        updatedUser.cpf,
        updatedUser.disableNotify
      );
    }
  };

  const signOut = async () => {
    await storage.removeItem("userInfo");
    setUser(null);
    setIsAuthenticated(false);
    navigate("Login");
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isLoading, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
