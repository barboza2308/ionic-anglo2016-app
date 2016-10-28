import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { NotasPage } from '../pages/notas/notas';
import { CalendarioProvasPage } from '../pages/calendario-provas/calendario-provas';
import { DisciplinasPage } from '../pages/disciplinas/disciplinas';
import { TabsPage } from '../pages/tabs/tabs';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    DisciplinasPage,
    NotasPage,
    CalendarioProvasPage,
    TabsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    DisciplinasPage,
    NotasPage,
    CalendarioProvasPage,
    TabsPage
  ],
  providers: []
})
export class AppModule {}
