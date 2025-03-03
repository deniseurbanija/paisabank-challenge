export interface Card {
  id: number;
  issuer: string;
  name: string;
  expDate: string;
  lastDigits: number;
  balance: string;
  currency: string;
}

export interface CardsResponse {
  success: boolean;
  data: Card[];
}
