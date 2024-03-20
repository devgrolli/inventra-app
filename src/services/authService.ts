import api from "./api";
import { CommonString } from "@core/constants/strings";

interface registerPayload {
  fullName: string;
  cpf: string;
  birthDate: string;
  phone: string;
  email: string;
  password: string;
}

const endpoints = {
  login: "/auth/login",
  signUp: "/auth/signUp",
  forgotPassword: "/auth/forgotPassword",
  validateRecoveryCode: "/auth/validateRecoveryCode",
  updatePassword: "/auth/updatePassword",
  getAllUsers: "/auth/getAllUsers",
};

const validateHasError = (error: any) => {
  console.log("ERROR.SERVICE.ERROR", error);
  console.log("ERROR.SERVICE.ERROR.MESSAGE", error?.message);

  if (CommonString.errors.errorMessagesLogin.includes(error.message)) {
    throw new Error("Erro de conexão, tente mais tarde");
  }
  throw error?.response?.data;
};

const login = async (cpf: string, password: string) => {
  try {
    const response = await api.post(endpoints.login, {
      cpf,
      password,
    });

    const statusCode = response.status;
    const data = response.data;
    return { data, statusCode };
  } catch (error: any) {
    validateHasError(error);
  }
};

const signUp = async (body: registerPayload) => {
  try {
    const response = await api.post(endpoints.signUp, body);
    const statusCode = response.status;
    const data = response.data;
    return { data, statusCode };
  } catch (error: any) {
    validateHasError(error);
  }
};

const forgotPassword = async (email: string): Promise<any> => {
  try {
    const response = await api.post(endpoints.forgotPassword, { email });
    console.log("E-mail enviado com sucesso!");
    return response;
  } catch (error: any) {
    console.error("service.forgotPassword.error", error);
    validateHasError(error);
  }
};

const validateRecoveryCode = async (
  email: string,
  code: string
): Promise<any> => {
  try {
    const response = await api.post(endpoints.validateRecoveryCode, {
      email,
      code,
    });
    return response?.data;
  } catch (error: any) {
    validateHasError(error);
  }
};

const updatePassword = async (
  token: string,
  email: string,
  newPassword: string
): Promise<any> => {
  try {
    const response = await api.post(endpoints.updatePassword, {
      token,
      email,
      newPassword,
    });
    return response?.data;
  } catch (error: any) {
    validateHasError(error);
  }
};

const getAllUsers = async () => {
  try {
    const response = await api.get(endpoints.getAllUsers);
    const statusCode = response.status;
    const data = response.data;
    return { data, statusCode };
  } catch (error: any) {
    throw error?.response?.data;
  }
};

export default {
  login,
  signUp,
  getAllUsers,
  updatePassword,
  forgotPassword,
  validateRecoveryCode,
};
