import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button-delete',
  templateUrl: './button-delete.component.html',
  styleUrls: ['./button-delete.component.scss']
})
export class ButtonDeleteComponent {

  @Output()
  toto = new EventEmitter<void>();

 
   onClick() : void {
     this.toto.emit()
   }
}



  


