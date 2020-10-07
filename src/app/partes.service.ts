import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PartesService {

  constructor() { }

  public parts = [
    {id: 'eye-l', alt: 'Eye', img: 'olho', sizeX: 1, sizeY: 1, rotate: 0, select: false},
    {id: 'eye-r', alt: 'Eye', img: 'olho-r', sizeX: 1, sizeY: 1, rotate: 0, select: false},
    {id: 'eyebrow-l', alt: 'Eyebrow', img: 'so', sizeX: 1, sizeY: 1, rotate: 0, select: false},
    {id: 'eyebrow-r', alt: 'Eyebrow', img: 'so-r', sizeX: 1, sizeY: 1, rotate: 0, select: false},
    {id: 'noise', alt: 'Noise', img: 'nariz', sizeX: 1, sizeY: 1, rotate: 0, select: false},
    {id: 'mouth', alt: 'Mouth', img: 'boca', sizeX: 1, sizeY: 1, rotate: 0, select: false},
  ];
}
