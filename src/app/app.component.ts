import { FunctionCall } from '@angular/compiler';
import { Component, OnInit, Query } from '@angular/core';
import { PartesService } from './partes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  constructor(
    public partes: PartesService
  ) { }
  ngOnInit() {
  }

  changeSelect(type) {
    const parts = document.querySelectorAll('.face-part');
    const funtionsCall = {
      eyebrow : () => { callEyebrow(); },
      eye : () => { callEye(); },
      noise: () => { callNoise(); },
      mouth: () => { callMouth(); }
    };

    funtionsCall[type]();


    function deselect(inter) {
      parts.forEach((e, i) => {
        if (i !== inter) {
          e.classList.remove('select');
        }
      });
    }
    function callEyebrow() {
      if (!parts[2].classList.contains('select') && !parts[3].classList.contains('select')) {
        deselect(-1);
        parts[2].classList.add('select');
      } else if (!parts[3].classList.contains('select') && parts[2].classList.contains('select')) {
        deselect(-1);
        parts[3].classList.add('select');
      } else {
        deselect(-1);
      }
    }
    function callEye() {
      if (!parts[0].classList.contains('select') && !parts[1].classList.contains('select')) {
        deselect(-1);
        parts[0].classList.add('select');
      } else if (!parts[1].classList.contains('select') && parts[0].classList.contains('select')) {
        deselect(-1);
        parts[1].classList.add('select');
      } else {
        deselect(-1);
      }
    }
    function callNoise() {
      deselect(5);
      parts[5].classList.toggle('select');
    }
    function callMouth() {
      deselect(4);
      parts[4].classList.toggle('select');
    }
  }

  resetface() {
    this.partes.parts.forEach(e => {
      e.sizeX = 1;
      e.sizeY = 1;
      e.rotate = 0;
      const elementDom = document.querySelector('#' + e.id) as HTMLElement;
      elementDom.removeAttribute('style');
    });
  }
}
