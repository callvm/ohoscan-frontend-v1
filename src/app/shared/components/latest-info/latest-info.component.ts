import { Component, Input, OnInit } from '@angular/core';
import { LatestInfoMapping } from '../../models/latest-info-mapping';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-latest-info',
  templateUrl: './latest-info.component.html',
  styleUrls: ['./latest-info.component.css']
})
export class LatestInfoComponent implements OnInit {

  @Input() heading: string | undefined
  @Input() mappings: LatestInfoMapping[]  = []
  @Input() data: any[] = []

  order: any[] = []

  constructor() {

  }

  ngOnInit(): void {
    this.mappings.forEach(mapping => this.order.push(mapping.property))
    console.log(this.mappings)
    console.log(this.order)
  }

}
