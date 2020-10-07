import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-face-control',
  templateUrl: './face-control.component.html',
  styleUrls: ['./face-control.component.styl']
})
export class FaceControlComponent implements OnInit {
  public control: FormGroup;
  public selectPart = -1;
  public parts = [
    {id: 'eye-l', alt: 'Eye', img: 'olho', sizeX: 1, sizeY: 1, rotate: 1, select: false},
    {id: 'eye-r', alt: 'Eye', img: 'olho-r', sizeX: 1, sizeY: 1, rotate: 1, select: false},
    {id: 'eyebrow-l', alt: 'Eyebrow', img: 'so', sizeX: 1, sizeY: 1, rotate: 1, select: false},
    {id: 'eyebrow-r', alt: 'Eyebrow', img: 'so-r', sizeX: 1, sizeY: 1, rotate: 1, select: false},
    {id: 'noise', alt: 'Noise', img: 'nariz', sizeX: 1, sizeY: 1, rotate: 1, select: false},
    {id: 'mouth', alt: 'Mouth', img: 'boca', sizeX: 1, sizeY: 1, rotate: 1, select: false},
  ];
  constructor(
    public fb: FormBuilder,
  ) { }
  ngOnInit() {
    this.control = this.fb.group({
      sizeY: new FormControl(1000),
      sizeX: new FormControl(1000),
      rotate: new FormControl(1000),
    });
  }

  changeSelect(type, numberSelect) {
    const parts = document.querySelectorAll('.face-part');
    const rangers = document.querySelector('#rangers');
    const funtionsCall = {
      duplo : () => { this.changeDuplo(numberSelect); },
      unico : () => { this.changeUnico(numberSelect); },
    };
    funtionsCall[type]();
    if (this.selectPart >= 0) {
      this.control.controls.sizeX.setValue(this.parts[this.selectPart].sizeX * 1000);
      this.control.controls.sizeY.setValue(this.parts[this.selectPart].sizeY * 1000);
      this.control.controls.rotate.setValue(this.parts[this.selectPart].rotate * 1000);
    }
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

  move(eve, part) {
    const clicado = document.querySelector('#' + part.id) as HTMLElement;
    const transformBack = this.takeStyle(part);
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
      clicado.style.transform = '';
      const partCoordenadas = clicado.getBoundingClientRect();

      const AbsolutePxY = partCoordenadas.top - faceCoordenadas.top;
      const AbsolutePxX =  partCoordenadas.left - faceCoordenadas.left;

      const porcentY = (AbsolutePxY * 100) / faceCoordenadas.height;
      const porcentX = (AbsolutePxX * 100) / faceCoordenadas.width;

      clicado.removeAttribute('style');
      clicado.style.transform = transformBack;
      clicado.style.top = porcentY + '%';
      clicado.style.left = porcentX + '%';

      clicado.removeEventListener('mousemove', mouseMove);
      clicado.removeEventListener( 'mouseup', mouseUp);
    }
  }

  takeStyle(element) {
    return 'scaleX(' + element.sizeX + ') scaleY(' + element.sizeY + ') rotate(' + element.rotate + 'deg)';
  }
  changeSizeX() {
    if (this.selectPart !== -1) {
      this.parts[this.selectPart].sizeX = this.control.controls.sizeX.value / 1000;
      const elementSelect = document.querySelector('#' + this.parts[this.selectPart].id) as HTMLElement;
      elementSelect.style.transform = this.takeStyle(this.parts[this.selectPart]);
    }
  }


}
