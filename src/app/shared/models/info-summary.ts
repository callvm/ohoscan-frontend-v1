export interface InfoSummary{
  gasPrice: string;
  averageBlockTime: string;
  transactionCount: string;
  contractCount: string;
  addressCount: string;
  price: string;
  marketCap: string;
}

export interface InfoSummaryHttp{
  gasPrice: string;
  averageBlockTime: number;
  transactionCount: number;
  contractCount: number;
  addressCount: number;
  price: number;
  marketCap: number;
}
