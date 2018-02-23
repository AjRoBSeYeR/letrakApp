import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

//i18n
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule, Http } from '@angular/http';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BokalakAsmatuPage } from '../pages/bokalak-asmatu/bokalak-asmatu';
import { BokalaErrazaPage } from '../pages/bokala-erraza/bokala-erraza';
import { ZenbakiErrazakPage } from '../pages/zenbaki-errazak/zenbaki-errazak';
import { ZenbakiZailakPage } from '../pages/zenbaki-zailak/zenbaki-zailak';
import { ZenbakiAsmatuPage } from '../pages/zenbaki-asmatu/zenbaki-asmatu';
import { AboutPage } from '../pages/about/about';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {HttpClientModule, HttpClient} from '@angular/common/http';

export function createTranslateLoader(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    MyApp,    
    HomePage,    
    BokalakAsmatuPage,
    BokalaErrazaPage,    
    BokalakAsmatuPage,
    BokalaErrazaPage,
    ZenbakiErrazakPage,
    ZenbakiZailakPage,
    ZenbakiAsmatuPage,
    AboutPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    TranslateModule.forChild(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,    
    HomePage,    
    BokalakAsmatuPage,
    BokalaErrazaPage,    
    BokalakAsmatuPage,
    BokalaErrazaPage,
    ZenbakiErrazakPage,
    ZenbakiZailakPage,
    ZenbakiAsmatuPage,
    AboutPage
  ],
  providers: [
    StatusBar,
    SplashScreen,   
    HttpClient, 
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
