import { action, reducer } from "~/store/modules/@types";

export type DucksType = {
  token: string;
  isLogged: boolean;
  loadingButton: boolean;
};

export interface singIN extends reducer {
  email: string;
  password: string;
}

export interface signUP extends reducer {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

export interface updateToken extends action {
  readonly token: string;
}

export interface updateIsLogged extends action {
  readonly isLogged: boolean;
}
