import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'inv-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  value: string = 'Clear me';
  
  constructor() { }

  ngOnInit(): void {
  }

}
