import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';

/*
  Generated class for the Notas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-notas',
  templateUrl: 'notas.html'
})
export class NotasPage {
  notas: string = "primeiroSemestre";
  isAndroid: boolean = false;

  constructor(public platform: Platform) {
    this.isAndroid = platform.is('android');
  }

  ionViewDidLoad() {
    console.log('Hello Notas Page');
  }

}
