import { Colors } from "./colors";

export const CommonString = {
  fonts: {
    openSans: "OpenSans",
    openSansBold: "OpenSans-Bold",
    openSansLight: "OpenSans-Light",
  },
  dimension: {
    searchBarHeight: 100,
    productDetailFooterHeight: 72,
    navigationTitleHeight: 44,
  },
  sizeIcons: {
    footer: 22,
  },
  optionsHeader: {
    headerShown: false,
    gestureEnabled: true,
  },
  optionsHeaderBack: {
    headerStyle: { backgroundColor: Colors.white },
    headerShadowVisible: false,
  },
  errors: {
    errorMessagesLogin: ["Network Error", "Request Timeout", "timeout of 7000ms exceeded"],
    fieldsRequiredRegister: {
      fullName: "Nome completo é obrigatório.",
      cpf: "CPF é obrigatório.",
      birthDate: "Data de Nascimento é obrigtória.",
      email: "E-mail é obrigatório.",
      phone: "Telefone é obrigatório.",
      password: "Senha é obrigatória.",
    },
  },
};
