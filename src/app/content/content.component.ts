import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  buttonClicked = false;
  
  @Input() colorItem: string;
  @Output() clicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeColor(colorItem: string) {
      this.clicked.emit(this.colorItem);
      this.buttonClicked = true;
  }

}
