import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salespitch',
  templateUrl: './salespitch.component.html',
  styleUrls: ['./salespitch.component.css']
})
export class SalespitchComponent implements OnInit {

  selectedDisplay: string = 'left';

  constructor() { }

  ngOnInit() {
  }

}
