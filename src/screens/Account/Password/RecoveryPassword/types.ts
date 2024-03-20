export const ERROR_MSG = "Erro com o código de recuperação";
export const CELL_COUNT = 4;

export interface FormData {
  passwordOne: string;
  passwordTwo: string;
}

export interface RecoveryRouteParams {
  emailRecovery: string;
  messageSnack?: {
    visible: boolean;
    msg: string;
  };
  expiryTime: number;
}

export interface SnackbarState {
  visible: boolean;
  message: string;
}

export interface CodeValidationViewProps {
  ref: any;
  value: string;
  errors: any;
  styles: any;
  expiry: number;
  control: any;
  loading: boolean;
  password: string;
  CELL_COUNT: number;
  onChangeCode: (text: string) => void;
  getCellOnLayoutHandler: (index: number) => any;
  resendMail: () => Promise<void>;
  handleTokenPassword: () => Promise<void>;
}

export interface NewPasswordViewProps {
  errors: any;
  control: any;
  loading: boolean;
  password: string;
  handleSubmit: any;
  handleNewPassword: (data: FormData) => Promise<void>;
}
