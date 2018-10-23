import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Cover1Page } from '../pages/cover1/cover1';
import { Bio1Page } from '../pages/bio1/bio1';
import { Tracks1Page } from '../pages/tracks1/tracks1';
import { Review1Page } from '../pages/review1/review1';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Cover1Page,
    Bio1Page,
    Tracks1Page,
    Review1Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Cover1Page,
    Bio1Page,
    Tracks1Page,
    Review1Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
