import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-control',
  templateUrl: './face-control.component.html',
  styleUrls: ['./face-control.component.styl']
})
export class FaceControlComponent implements OnInit {

  parts = [
    {id: 'eye-l', alt: 'Eye', img: 'olho', select: false},
    {id: 'eye-r', alt: 'Eye', img: 'olho-r', select: false},
    {id: 'eyebrow-l', alt: 'Eyebrow', img: 'so', select: false},
    {id: 'eyebrow-r', alt: 'Eyebrow', img: 'so-r', select: false},
    {id: 'mouth', alt: 'Mouth', img: 'boca', select: false},
    {id: 'noise', alt: 'Noise', img: 'nariz', select: false},
  ];

  constructor() { }
  ngOnInit() { }

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


}
