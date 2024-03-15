export type FormData = {
  fullName: string;
  cpf: string;
  birthDate: string;
  email: string;
  phone: string;
  password: string;
  generic?: string;
};

export interface InputInterface {
  control?: any;
  name: string;
  type?: string;
  placeholder?: string;
  error?: any;
  secureTextEntry?: boolean;
  options?: any;
  msgError?: string;
};