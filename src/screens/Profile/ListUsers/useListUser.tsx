import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import authService from "services/authService";
import { User } from "./type";

export const useListUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorFetch, setErrorFetch] = useState(false);
  const snapPoints = useMemo(() => ["50%", "75%"], []);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = async () => {
    try {
      const allUsers = await authService.getAllUsers();
      setUsers(allUsers.data);
    } catch (error) {
      setErrorFetch(true);
      console.error("ERROR.getAllUsers", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateUser = async (item: any) => {};

  const onChangeDetails = (value: boolean) => {
    if (selectedUser) {
      setSelectedUser({ ...selectedUser, isValidated: value });
    }
  };

  const handlePresentModalPress = useCallback((item: any) => {
    setSelectedUser(item);
    bottomSheetModalRef.current?.present();
  }, []);

  return {
    users,
    loading,
    snapPoints,
    errorFetch,
    selectedUser,
    bottomSheetModalRef,
    getAllUsers,
    onChangeDetails,
    handleUpdateUser,
    handlePresentModalPress,
  };
};
