import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salespitch',
  templateUrl: './salespitch.component.html',
  styleUrls: ['./salespitch.component.css']
})
export class SalespitchComponent implements OnInit {

  selectedDisplay: string = 'left';
  leftOptionClass: string = 'selected';
  middleOptionClass: string = 'muted';
  rightOptionClass: string = 'muted';


  setDisplay(display: string) {
    this.selectedDisplay = display;
    if (display == 'left') {
      this.leftOptionClass = 'selected';
      this.middleOptionClass = 'muted';
      this.rightOptionClass = 'muted';
    } else if (display == 'middle') {
      this.leftOptionClass = 'muted';
      this.middleOptionClass = 'selected';
      this.rightOptionClass = 'muted';
    } else if (display == 'right') {
      this.leftOptionClass = 'muted';
      this.middleOptionClass = 'muted';
      this.rightOptionClass = 'selected';
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
