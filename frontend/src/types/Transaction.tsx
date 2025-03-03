export interface Transaction {
  id: number;
  title: string;
  amount: string;
  transactionType: string;
  date: string;
}

export interface TransactionsResponse {
  success: boolean;
  data: Transaction[];
}
