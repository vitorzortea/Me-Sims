import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-part',
  templateUrl: './face-part.component.html',
  styleUrls: ['./face-part.component.styl']
})
export class FacePartComponent implements OnInit {
  @Input() part;
  public mousey = 0;
  public mousex = 0;
  public sizey = 1;

  public styleFinal = 'style="transform: translate(0, 0) scaleX(1) scaleY(' + this.sizey + ') rotate(0deg);"';

  constructor() { }

  ngOnInit() {
  }

  test(eve) {
    eve.path[0].position = 'fixed';
    eve.path[0].classList.add('select');
    console.log(eve.path[0]);
    console.log(eve.path[0].id);
  }
  testFim(eve) {
    console.log('fim');
    eve.path[0].classList.remove('select');
  }

}
