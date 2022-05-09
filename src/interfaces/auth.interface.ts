export interface IAuth {
  id: string;
  username: string;
  role?: string;
}

export interface IAuthCredentials {
  username: string;
  password: string;
}
