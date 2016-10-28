import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';

/*
  Generated class for the CalendarioProvas page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-calendario-provas',
  templateUrl: 'calendario-provas.html'
})
export class CalendarioProvasPage {
  calendario: string = "primeiroSemestre";
  isAndroid: boolean = false;

  constructor(public platform: Platform) {
    this.isAndroid = platform.is('android');
  }
  ionViewDidLoad() {
    console.log('Hello CalendarioProvas Page');
  }

}
