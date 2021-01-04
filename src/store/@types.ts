import { DucksType as auth } from "./modules/auth/@types";
import { DucksType as main } from "./modules/main/@types";

export default interface DefaultRootState {
  auth: auth;
  main: main;
}
