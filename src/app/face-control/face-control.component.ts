import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-control',
  templateUrl: './face-control.component.html',
  styleUrls: ['./face-control.component.styl']
})
export class FaceControlComponent implements OnInit {

  constructor() { }



  public selectPart = -1;
  public parts = [
    {id: 'eye-l', alt: 'Eye', img: 'olho', select: false},
    {id: 'eye-r', alt: 'Eye', img: 'olho-r', select: false},
    {id: 'eyebrow-l', alt: 'Eyebrow', img: 'so', select: false},
    {id: 'eyebrow-r', alt: 'Eyebrow', img: 'so-r', select: false},
    {id: 'mouth', alt: 'Mouth', img: 'boca', select: false},
    {id: 'noise', alt: 'Noise', img: 'nariz', select: false},
  ];
  ngOnInit() {}

  changeSelect(type, numberSelect) {
    const parts = document.querySelectorAll('.face-part');
    const rangers = document.querySelector('#rangers');
    const funtionsCall = {
      duplo : () => { this.changeDuplo(numberSelect); },
      unico : () => { this.changeUnico(numberSelect); },
    };
    funtionsCall[type]();
    parts.forEach((e, i) => { (i !== this.selectPart) ? e.classList.remove('select') : e.classList.add('select'); });
    this.parts.forEach((e, i) => { (i !== this.selectPart) ? e.select = false : e.select = true; });
    (this.selectPart !== -1) ? rangers.classList.add('select') : rangers.classList.remove('select');
  }

  changeDuplo(numberSelect) {
    if (this.selectPart === numberSelect) {
      this.selectPart = (numberSelect + 1);
    } else if (this.selectPart === (numberSelect + 1)) {
      this.selectPart = -1;
    } else {
      this.selectPart = numberSelect;
    }
  }
  changeUnico(numberSelect) {
    if (this.selectPart === numberSelect) {
      this.selectPart = -1;
    } else {
      this.selectPart = numberSelect;
    }
  }


}
