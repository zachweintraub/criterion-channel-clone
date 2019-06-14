import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  @Input() bgImg: string;

  constructor() { }

  ngOnInit() {
    console.log(this.bgImg);
  }

}
