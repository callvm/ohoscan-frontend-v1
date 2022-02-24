import { Component, Input, OnInit } from '@angular/core';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-summary-item',
  templateUrl: './home-summary-item.component.html',
  styleUrls: ['./home-summary-item.component.css']
})
export class HomeSummaryItemComponent implements OnInit {

  @Input() icon: IconDefinition;
  @Input() heading: string;
  @Input() data: any;
  @Input() border: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

}
