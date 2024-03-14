import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import authService from "services/authService";

interface User {
  fullName: string;
  email: string;
}

export const useListUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const snapPoints = useMemo(() => ["50%", "75%"], []);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      setLoading(true);
      const allUsers = await authService.getAllUsers();
      console.log("allUsers", allUsers);
      setUsers(allUsers.data);
      setLoading(false);
    } catch (error) {
      console.log("ERROR.getAllUsers", error);
      // setTimeout(() => {
      //   setLoading(false);
      // }, 2000);
      // setErrorFetch(true);
    }
  };

  const handleUpdateUser = async (item: any) => {};

  const handlePresentModalPress = useCallback((item: any) => {
    setSelectedUser(item);
    bottomSheetModalRef.current?.present();
  }, []);

  const handleFullNameChange = (text: string) => {
    setSelectedUser((prevUser) => ({ ...prevUser, fullName: text }));
  };

  const handleEmailChange = (text: string) => {
    setSelectedUser((prevUser) => ({ ...prevUser, email: text }));
  };

  return {
    users,
    snapPoints,
    selectedUser,
    bottomSheetModalRef,
    setSelectedUser,
    getAllUsers,
    handleUpdateUser,
    handlePresentModalPress,
    handleFullNameChange,
    handleEmailChange,
  };
};
