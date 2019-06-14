import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-salespitch-display',
  templateUrl: './salespitch-display.component.html',
  styleUrls: ['./salespitch-display.component.css']
})
export class SalespitchDisplayComponent implements OnInit {

  @Input() selectedDisplay: string;

  constructor() { }

  ngOnInit() {
    console.log(this.selectedDisplay);
  }

}
