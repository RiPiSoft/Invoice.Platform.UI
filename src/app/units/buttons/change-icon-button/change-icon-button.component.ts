import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'inv-change-icon-button',
  templateUrl: './change-icon-button.component.html',
  styleUrls: ['./change-icon-button.component.scss']
})
export class ChangeIconButtonComponent implements OnInit {

  @Input() primaryIcon: string;
  @Input() secondaryIcon: string;
  @Input() condition: boolean;
  @Output() toggle = new EventEmitter();

  constructor() { }

  public ngOnInit(): void {

  }

}
