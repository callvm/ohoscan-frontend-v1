import { Component, OnInit } from '@angular/core';
import { LatestInfoMapping } from '../shared/models/latest-info-mapping';
import { BlockService } from '../shared/services/http/block.service';
import { Socket } from 'ngx-socket-io';
import { TransactionsService } from '../shared/services/http/transactions.service';
import { FormatterService } from '../shared/services/utils/formatter.service';
import { faDollarSign, faChartLine, faCoins, faExchangeAlt, faGasPump } from '@fortawesome/free-solid-svg-icons';
import { faClock, faAddressBook } from '@fortawesome/free-regular-svg-icons';
import { InfoService } from '../shared/services/http/info.service';
import { InfoSummary } from '../shared/models/info-summary';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  // Summary icons
  faDollarSign = faDollarSign
  faChartLine = faChartLine
  faClock = faClock
  faAddressBook = faAddressBook
  faCoins = faCoins
  faExchange = faExchangeAlt
  faGasPump = faGasPump

  blockMappings: LatestInfoMapping[] = [
    { title: 'Height', property: 'height' },
    { title: 'Time', property: 'time' },
    { title: 'Validator', property: 'validator' },
    { title: 'TXs', property: 'transactions' },
  ];
  transactionMappings: LatestInfoMapping[] = [
    { title: 'TX ID', property: 'hash' },
    { title: 'From', property: 'from' },
    { title: 'To', property: 'to' },
    { title: 'Amount', property: 'value' },
    { title: 'Time', property: 'time' },
  ];
  blockData: any[] = [];
  transactionData: any[] = [];
  summary: InfoSummary;
  relativeTimeInterval: any

  constructor(
    private transactionService: TransactionsService,
    private formatter: FormatterService,
    private blockService: BlockService,
    private infoService: InfoService,
    private socket: Socket
  ) { }

  ngOnInit(): void {
    this.getLatestBlocks();
    this.getLatestTransactions();
    this.getSummary()
    this.socket.connect();
    this.socket.on('blocks', (blocks: any[]) => this.onWebsocketBlocks(blocks));
    this.socket.on('transactions', (transactions: any[]) => this.onWebsocketTransactions(transactions));

    this.relativeTimeInterval = setInterval(() => {
      this.formatter.updateRelativeTime(this.transactionData)
    }, 1000)
  }

  getLatestBlocks() {
    this.blockService
      .getLatestBlocks(7)
      .subscribe((blocks) => (this.blockData = this.formatBlocks(blocks)));
  }

  getLatestTransactions() {
    this.transactionService
      .getLatestTransactions(7)
      .subscribe(
        (transactions) =>
          (this.transactionData = this.formatTransactions(transactions))
      );
  }

  getSummary() {
    this.infoService
      .getSummary()
      .subscribe(
        (summary) =>
          (this.summary = this.formatter.formatSummary(summary))
      );
  }

  formatBlocks(blocks: any[]) {
    return blocks.map((block) => {
      return {
        height: { data: block.number.toLocaleString(), link: "test" },
        time: {
          data: this.formatter.getRelativeTime(block.timestamp),
        },
        validator: { data: `${block.miner.substr(0, 7)}...`, link: "test" },
        transactions: { data: block.transactions.length },
        timestamp: block.timestamp,
      };
    });
  }

  formatTransactions(transactions: any[]) {
    return transactions.map((transaction) => {
      return {
        hash: { data: `${transaction.hash.substr(0, 6)}...`, link: "test" },
        from: { data: `${transaction.from.substr(0, 7)}...`, link: "test" },
        to: { data: `${transaction.to.substr(0, 7)}...`, link: "test" },
        value: {
          data: (parseInt(transaction.value, 16) / 10 ** 18).toLocaleString(
            undefined,
            { maximumFractionDigits: 2, minimumFractionDigits: 2 }
          ),
        },
        time: {
          data: this.formatter.getRelativeTime(transaction.timestamp),
        },
        timestamp: transaction.timestamp,
      };
    });
  }


  onWebsocketBlocks(blocks: any[]) {
    let formattedBlocks = this.formatBlocks(blocks);
    this.blockData = formattedBlocks.concat(this.blockData);
    this.blockData.length = 7;
    this.formatter.updateRelativeTime(this.blockData)
  }

  onWebsocketTransactions(transactions: any[]) {
    let formattedTransactions = this.formatTransactions(transactions);
    this.transactionData = formattedTransactions.concat(this.transactionData);
    this.transactionData.length = 7;
  }

}
