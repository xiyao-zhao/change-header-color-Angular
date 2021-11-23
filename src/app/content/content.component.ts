import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../card.interface';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() data: Card;
  @Output() clicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  changeColor() {
      this.clicked.emit(this.data.color);
  }

}
