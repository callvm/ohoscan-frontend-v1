import { Injectable } from '@angular/core';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import { InfoSummary, InfoSummaryHttp } from '../../models/info-summary';

@Injectable({
  providedIn: 'root',
})
export class FormatterService {
  timeAgo: TimeAgo;

  constructor() {
    TimeAgo.addDefaultLocale(en);
    this.timeAgo = new TimeAgo('en-US');
  }

  getRelativeTime(timestamp: number) {
    return this.timeAgo.format(new Date(timestamp * 1000), 'mini-now');
  }

  updateRelativeTime(data: any[]) {
    data.forEach((item) => {
      item.time = {
        data: this.timeAgo.format(new Date(item.timestamp * 1000), 'mini-now'),
      };
    });
  }

  formatNumber(num: number) {
    if (num > 999 && num < 1000000) {
      return (num / 1000).toLocaleString(undefined, { minimumFractionDigits: 2 }) + ' K';
    } else if (num > 1000000 && num < 1000000000) {
      return (num / 1000000).toLocaleString(undefined, { minimumFractionDigits: 2 }) + ' M';
    } else if (num > 1000000000) {
      return (num / 1000000000).toLocaleString(undefined, { minimumFractionDigits: 2 }) + ' B';
    } else {
      return num;
    }
  }

  formatSummary(summary: InfoSummaryHttp): InfoSummary {
    let result: InfoSummary = {
      gasPrice: summary.gasPrice + " Gwei",
      averageBlockTime: summary.averageBlockTime + " s",
      transactionCount: summary.transactionCount.toLocaleString(),
      contractCount: summary.contractCount.toLocaleString(),
      addressCount: summary.addressCount.toLocaleString(),
      price: "$ " + summary.price,
      marketCap: "$ " + this.formatNumber(summary.marketCap)
    }
    return result
  }

}
