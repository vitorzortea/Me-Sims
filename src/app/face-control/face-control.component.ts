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
    {id: 'noise', alt: 'Noise', img: 'nariz', select: false},
    {id: 'mouth', alt: 'Mouth', img: 'boca', select: false},
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



  move(eve, id) {
    const clicado = document.querySelector('#' + id) as HTMLElement;
    const faceCoordenadas = document.querySelector('#main-face>img').getBoundingClientRect();
    clicado.addEventListener('mousemove', mouseMove);
    clicado.addEventListener( 'mouseup', mouseUp);

    function mouseMove(e) {
      clicado.style.width = clicado.clientWidth + 'px';
      clicado.style.position = 'fixed';
      clicado.style.zIndex = '10000';
      clicado.style.top = (e.clientY - (eve.path[2].clientHeight / 2)) + 'px';
      clicado.style.left = (e.clientX - (eve.path[2].clientWidth / 2)) + 'px';
    }

    function mouseUp(e) {
      const partCoordenadas = clicado.getBoundingClientRect();
      let pxY = partCoordenadas.top - faceCoordenadas.top + .1;
      let pxX = partCoordenadas.left - faceCoordenadas.left + .1;
      if (pxY < 0) { pxY = 0; }
      if (pxX < 0) { pxX = 0; }
      if (pxY > (faceCoordenadas.height - partCoordenadas.height)) { pxX = faceCoordenadas.height - partCoordenadas.height; }
      if (pxX > (faceCoordenadas.width - partCoordenadas.width)) { pxX = faceCoordenadas.width - partCoordenadas.width; }
      const porcentY = (pxY * 100) / faceCoordenadas.height;
      const porcentX = (pxX * 100) / faceCoordenadas.width;

      clicado.removeAttribute('style');
      clicado.style.top = porcentY + '%';
      clicado.style.left = porcentX + '%';

      clicado.removeEventListener('mousemove', mouseMove);
      clicado.removeEventListener( 'mouseup', mouseUp);
    }


  }


}
