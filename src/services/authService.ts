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

const login = async (cpf: string, password: string) => {
  try {
    const response = await api.post("/auth/login", {
      cpf,
      password,
    });

    const statusCode = response.status;
    const data = response.data;
    return { data, statusCode };

  } catch (error: any) {
    console.log("ERROR.SERVICE.ERROR", error);
    console.log("ERROR.SERVICE.ERROR.MESSAGE", error?.message);

    if (CommonString.errors.errorMessagesLogin.includes(error.message)) {
      throw new Error("Erro de conexão, tente mais tarde");
    }
    throw error?.response?.data;
  }
};

const signUp = async (body: registerPayload) => {
  try {
    const response = await api.post("/auth/signUp", body);
    const statusCode = response.status;
    const data = response.data;
    return { data, statusCode };

  } catch (error: any) {
    console.log("ERROR.SERVICE.ERROR", error);
    console.log("ERROR.SERVICE.ERROR.MESSAGE", error?.message);

    if (CommonString.errors.errorMessagesLogin.includes(error.message)) {
      throw new Error("Erro de conexão, tente mais tarde");
    }
    throw error?.response?.data;
  }
};

const forgotPassword = async (email: string): Promise<any> => {
  try {
    const response = await api.post('/auth/forgotPassword', { email });
    console.log('E-mail enviado com sucesso!');
    return response;
  } catch (error: any) {
    console.error('service.forgotPassword.error', error);
    throw error;
  }
};

const getAllUsers = async () => {
  try {
    const response = await api.get("/auth/getAllUsers");
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
  forgotPassword,
};
