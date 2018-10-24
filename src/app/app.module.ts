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
import { Cover2Page } from '../pages/cover2/cover2';
import { Bio2Page } from '../pages/bio2/bio2';
import { Tracks2Page } from '../pages/tracks2/tracks2';
import { Review2Page } from '../pages/review2/review2';
import { Cover3Page } from '../pages/cover3/cover3';
import { Biog3Page } from '../pages/biog3/biog3';
import { Tracks3Page } from '../pages/tracks3/tracks3';
import { Review3Page } from '../pages/review3/review3';
import { Cover4Page } from '../pages/cover4/cover4';
import { Bio4Page } from '../pages/bio4/bio4';
import { Tracks4Page } from '../pages/tracks4/tracks4';
import { Review4Page } from '../pages/review4/review4';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Cover1Page,
    Bio1Page,
    Tracks1Page,
    Review1Page,
    Bio2Page,
    Cover2Page,
    Tracks2Page,
    Review2Page,
    Cover3Page,
    Biog3Page,
    Tracks3Page,
    Review3Page,
    Cover4Page,
    Bio4Page,
    Tracks4Page,
    Review4Page
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
    Review1Page,
    Bio2Page,
    Cover2Page,
    Tracks2Page,
    Review2Page,
    Cover3Page,
    Biog3Page,
    Tracks3Page,
    Review3Page,
    Cover4Page,
    Bio4Page,
    Tracks4Page,
    Review4Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
