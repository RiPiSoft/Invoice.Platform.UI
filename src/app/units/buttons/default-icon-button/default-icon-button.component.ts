import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'inv-default-icon-button',
  templateUrl: './default-icon-button.component.html',
  styleUrls: ['./default-icon-button.component.scss']
})
export class DefaultIconButtonComponent implements OnInit {
  @Input() title: string;
  @Input() icon: string;
  @Input() color: string;
  constructor() { }

  public ngOnInit(): void {
  }

  public event(): void{
    console.log("here we go !!!")
  }
}
