import { ColumnType, Generated } from "kysely";

import type { GeneratedAlways } from "kysely";

interface User {
  id: GeneratedAlways<string>;
  name: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string;
  emailVerified: Date | null;
  image: string | null;
}
interface Account {
  id: GeneratedAlways<string>;
  userId: string;
  type: string;
  provider: string;
  providerAccountId: string;
  refresh_token: string | null;
  access_token: string | null;
  expires_at: number | null;
  token_type: string | null;
  scope: string | null;
  id_token: string | null;
  session_state: string | null;
}
interface Session {
  id: GeneratedAlways<string>;
  userId: string;
  sessionToken: string;
  expires: Date;
}
interface VerificationToken {
  identifier: string;
  token: string;
  expires: Date;
}

interface Todo {
  id: GeneratedAlways<string>;
  /** ID of the user it belongs to */
  userId: string;
  title: string;
  disappearAt: Date;
  createdAt: Date;
}

export interface Database {
  User;
  Account;
  Session;
  VerificationToken;
  Todo;
}
