import { useCallback, useState } from "react";
import { navigate } from "@core/navigation/navigator";
import { useAuth } from "context/AuthContext";

export const useProfile = () => {
  const { signOut, user, updateUser } = useAuth();
  const [onNotify, setOnNofify] = useState(false);
  const [notifiction, setNotification] = useState(user?.disableNotify);
  const navigateToEditProfile = useCallback(() => navigate("EditProfile"), []);
  const navigateToListUsers = useCallback(() => navigate("ListUsers"), []);

  const onChangeNotification = useCallback((value: boolean) => {
    setNotification(value);
    updateUser({ disableNotify: value });
    if (value) {
      setOnNofify(value);
    }
  }, []);

  return {
    notifiction,
    onNotify,
    signOut,
    setOnNofify,
    navigateToListUsers,
    onChangeNotification,
    navigateToEditProfile,
  };
};
