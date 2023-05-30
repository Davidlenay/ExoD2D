import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom2-badge',
  templateUrl: './custom2-badge.component.html',
  styleUrls: ['./custom2-badge.component.scss']
})
export class Custom2BadgeComponent {
 @Input()
 color: string = "WHITE"

  getClass() : string {
     if (this.color === "BLUE") {
      return "badge--bleu";
    } else if (this.color === "RED") {
      return "badge--rouge";
    } else if (this.color === "GREEN") {
      return "badge--vert"
    } else {
      return "badge--blanc"; 
    }

    }
  }