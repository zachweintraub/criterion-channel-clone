import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-salespitch-nav',
  templateUrl: './salespitch-nav.component.html',
  styleUrls: ['./salespitch-nav.component.css']
})
export class SalespitchNavComponent implements OnInit {

  @Input() leftOptionClass: string;
  @Input() middleOptionClass: string;
  @Input() rightOptionClass: string;
  @Output() selectDisplaySender = new EventEmitter();

  displayOptionClicked(display: string) {
    this.selectDisplaySender.emit(display);
  }



  constructor() { }

  ngOnInit() {
  }

}
