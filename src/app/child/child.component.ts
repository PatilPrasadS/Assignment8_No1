import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  
  @Output() public sendTextEmitter = new EventEmitter;
  
  public text : any;
  
  public sendText(text : any) {
    this.sendTextEmitter.emit(text);
  }
}
