import type { Account } from "../domain/Account";
import type { Credit } from "../domain/Credit";
import type { Customer } from "../domain/Customer";
import type { Debit } from "../domain/Debit";

export type PostTransferInput = {
  value: number;
  recipientAccountNumber: number;
};

export type GetBalanceOutput = {
  balance: number;
};

export type GetAccountsOutput = {
  accounts: AccountOutput[];
};

export type AccountOutput = {
  accountNumber: number;
  name: string;
};

export type PostAccountOutput = {
  accountNumber: number;
};

export type GetTransactionsOutput = {
  transactions: TransactionOutput[];
};

export type TransactionOutput = {
  type: TransactionType;
  value: number;
  createdAt: Date;
  sender?: AccountOutput;
  recipient?: AccountOutput;
};

export type GetTransactionsOutputApi = {
  statement: {
    transactions: TransactionOutputApi[]
  }
}

export type TransactionOutputApi = {
  type: TransactionType
  creditDto?: {
    value: number
    createdAt: Date
    account: AccountOutput
  }
  debitDto?: {
    value: number
    createdAt: Date
    account: AccountOutput
  }
  transferDto?: {
    value: number
    createdAt: Date
    sender: AccountOutput
    recipient: AccountOutput
  }
}

type TransactionType = "credit" | "debit" | "transfer";

export interface IHttpGateway {
  postAccount(input: Customer): Promise<PostAccountOutput>;
  getAccount(accountNumber: number): Promise<Account>;
  getAccounts(): Promise<AccountOutput[]>;
  putAccount(accountNumber: number, input: Customer): Promise<void>;
  deleteAccount(accountNumber: number): Promise<void>;
  postCredit(accountNumber: number, input: Credit): Promise<void>;
  postDebit(accountNumber: number, input: Debit): Promise<void>;
  postTransfer(accountNumber: number, input: PostTransferInput): Promise<void>;
  getBalance(accountNumber: number): Promise<GetBalanceOutput>;
  getTransactions(accountNumber: number): Promise<GetTransactionsOutput>;
}
