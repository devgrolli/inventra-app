export const snackMessageRoute = (route: any) => {
  const params = route.params as {
    signupSuccess?: boolean;
    passwordChangedSuccess?: boolean;
  };

  if (params?.signupSuccess) {
    return {
      visible: true,
      message: "Cadastro realizado com sucesso",
    };
  }

  if (params?.passwordChangedSuccess) {
    return {
      visible: true,
      message: "Senha alterada com sucesso",
    };
  }

  return {
    visible: false,
    message: "",
  };
};
