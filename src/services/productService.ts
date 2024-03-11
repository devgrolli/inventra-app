import api from "./api";

const getProduct = async () => {
  try {
    const response = await api.get("/product/getAllProducts");
    const statusCode = response.status;
    const data = response.data;
    return { data, statusCode };
  } catch (error) {
    throw { error: error, status: 400, msg: 'Erro ao buscar produtos'};
  }
};

export default {
  getProduct,
};
