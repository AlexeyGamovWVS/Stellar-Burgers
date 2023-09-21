export interface IUser {
  email: string | undefined;
  name: string | undefined;
}

export interface IOwner extends IUser {
  createdAt: string;
  updatedAt: string;
}
export interface IUserWithPass extends IUser {
  password: string | undefined;
}

export type TUserLoginData = Omit<IUser, "name"> & { password: string | undefined };

export interface IUserResponse {
  status?: string;
  success?: boolean;
  user: IUserWithPass;
  accessToken: string;
  refreshToken: string;
}

export type TTokenResponse = Omit<IUserResponse, "user">;