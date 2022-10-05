import { UserState } from "./User";

export type RootState = Readonly<{
  user: UserState;
}>;
