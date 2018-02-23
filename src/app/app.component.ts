import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TranslateService } from '@ngx-translate/core';

import { GLOBAL } from '../app/global';
import { HomePage } from '../pages/home/home';
import { BokalakAsmatuPage } from '../pages/bokalak-asmatu/bokalak-asmatu';
import { BokalaErrazaPage } from '../pages/bokala-erraza/bokala-erraza';
import { AboutPage } from '../pages/about/about';
import { ZenbakiErrazakPage } from '../pages/zenbaki-errazak/zenbaki-errazak';
import { ZenbakiZailakPage } from '../pages/zenbaki-zailak/zenbaki-zailak';
import { ZenbakiAsmatuPage } from '../pages/zenbaki-asmatu/zenbaki-asmatu';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(
      public platform: Platform, 
      public statusBar: StatusBar, 
      public splashScreen: SplashScreen,
      public translate : TranslateService
    ) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'menu.menu1', component: HomePage },
      { title: 'menu.menu2' , component: BokalaErrazaPage },
      { title: 'menu.menu3', component: BokalakAsmatuPage },
      { title: 'menu.menu4', component: ZenbakiErrazakPage },
      { title: 'menu.menu5', component: ZenbakiZailakPage },
      { title: 'Zenbakia Asmatu', component: ZenbakiAsmatuPage },
      { title: 'Kredituak', component: AboutPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.translate.setDefaultLang( GLOBAL.idioma );
      console.log( `idioma por defecto ${GLOBAL.idioma}` );

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  switchLanguage( lang : string ){
    this.translate.use(lang);

  }

}
