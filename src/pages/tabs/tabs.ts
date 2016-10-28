import { Component } from '@angular/core';

import { DisciplinasPage } from '../disciplinas/disciplinas';
import { NotasPage } from '../notas/notas';
import { CalendarioProvasPage } from '../calendario-provas/calendario-provas';
import { AboutPage } from '../about/about';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = DisciplinasPage;
  tab2Root: any = NotasPage;
  tab3Root: any = CalendarioProvasPage;
  tab4Root: any = AboutPage;

  constructor() {

  }
}
