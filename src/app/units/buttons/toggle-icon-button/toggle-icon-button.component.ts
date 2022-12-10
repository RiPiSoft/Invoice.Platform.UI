import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'inv-toggle-icon-button',
  templateUrl: './toggle-icon-button.component.html',
  styleUrls: ['./toggle-icon-button.component.scss']
})
export class ToggleIconButtonComponent implements OnInit {

  @Input() primaryIcon: string;
  @Input() secondaryIcon: string;
  @Input() condition: boolean;
  @Output() toggle = new EventEmitter();

  constructor() { }

  public ngOnInit(): void {

  }

}
