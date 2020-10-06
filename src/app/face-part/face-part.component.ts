import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-part',
  templateUrl: './face-part.component.html',
  styleUrls: ['./face-part.component.styl']
})
export class FacePartComponent implements OnInit {
  @Input() part;

  constructor() { }

  ngOnInit() {
  }



}
