import { ImmutableArray } from "seamless-immutable";
import { action, reducer } from "~/store/modules/@types";

type month = {
  name: string;
  amount: number;
};

export type DucksType = {
  months: month[];
};

export interface updateMonthsAction extends action {
  months: ImmutableArray<month>;
}
