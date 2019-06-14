import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-salespitch-display',
  templateUrl: './salespitch-display.component.html',
  styleUrls: ['./salespitch-display.component.css']
})
export class SalespitchDisplayComponent implements OnInit {

  @Input() selectedDisplay: string;
  @Input() leftOptionClass: string;
  @Input() middleOptionClass: string;
  @Input() rightOptionClass: string;

  constructor() { }

  ngOnInit() {
    console.log(this.selectedDisplay);
  }

}
