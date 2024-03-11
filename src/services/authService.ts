import api from "./api";

const errorMessage = [{
  network: "Network Error",
  timeout: "Request Timeout"
}]

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
    console.log('ERROR.SERVICE.ERROR', error);
    errorMessage.find((msg) => {
      if (msg.network === error.message) {
        throw (error = { message: "Erro de conexão, tente mais tarde" });
      }
    });
    throw error?.response?.data
  }
};

const getAllUsers = async () => {
  try {
    const response = await api.get("/auth/getAllUsers");
    const statusCode = response.status;
    const data = response.data;
    return { data, statusCode };
  } catch (error: any) {
    throw error?.response?.data
  }
}

export default {
  login,
  getAllUsers,
};
