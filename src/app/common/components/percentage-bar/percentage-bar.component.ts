import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-percentage-bar',
  templateUrl: './percentage-bar.component.html',
  styleUrls: ['./percentage-bar.component.scss']
})
export class PercentageBarComponent implements OnInit {

  @Input() countCup: number = 0
  @Input() totalCups: number = 0
  @Input() colorCups: string = "WHITE"

  ngOnInit(): void {}

  calcul() : number {
    if (this.totalCups === 0) {
      return 0
    } else {
      return this.countCup/this.totalCups
    }
  }

  getColor() : string {
    if (this.colorCups === "BLUE") {
      return "bar--bleu";
    } else if  (this.colorCups === "RED") {
      return "bar--rouge"
    } else if (this.colorCups === "GREEN") {
      return "bar--vert"
    } else {
      return "bar--blanc"
    }
  }



}


