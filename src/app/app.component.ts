import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {
  parts = [
    {id: 'eyebrow-l', alt: 'Eyebrow', img: 'so'},
    {id: 'eyebrow-r', alt: 'Eyebrow', img: 'so-r'},
    {id: 'eye-l', alt: 'Eye', img: 'olho'},
    {id: 'eye-r', alt: 'Eye', img: 'olho-r'},
    {id: 'noise', alt: 'Noise', img: 'nariz'},
    {id: 'mouth', alt: 'Mouth', img: 'boca'},
  ];
  ngOnInit() { }
}
