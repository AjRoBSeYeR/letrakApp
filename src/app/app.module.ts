import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';


import { MyApp } from './app.component';
//import { Comun } from '../comun';
import { HomePage } from '../pages/home/home';
import { BokalakAsmatuPage } from '../pages/bokalak-asmatu/bokalak-asmatu';
import { BokalaErrazaPage } from '../pages/bokala-erraza/bokala-erraza';
import { AboutPage } from '../pages/about/about';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,    
    HomePage,
    BokalakAsmatuPage,
    BokalaErrazaPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,    
    HomePage,
    BokalakAsmatuPage,
    BokalaErrazaPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
