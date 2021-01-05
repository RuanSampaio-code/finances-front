import { ImmutableArray } from "seamless-immutable";
import { action, reducer } from "~/store/modules/@types";

type month = {
  name: string;
  amount: number;
};

export type DucksType = {
  months: month[];
  loading: boolean;
};

export interface updateMonthsAction extends action {
  months: ImmutableArray<month>;
}

export interface updateLoadingAction extends action {
  loading: boolean;
}

export interface spedingReducer extends reducer {
  name: string;
  amount: number;
  date: string;
  installment: number;
}
