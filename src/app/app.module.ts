import { LogoutPage } from './../pages/logout/logout';
import { HomePage } from './../pages/home/home';
import { ComparePage } from './../pages/compare/compare';
import { LoginPage } from './../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { ApikeyProvider } from '../providers/apikey/apikey';
import { InsertDormPage } from '../pages/insert-dorm/insert-dorm';
import { SocialSharing } from '@ionic-native/social-sharing';
import { StarRatingModule } from 'ionic3-star-rating';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ComparePage,
    LoginPage,
    InsertDormPage,
    LogoutPage
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ComparePage,
    LoginPage,
    InsertDormPage,
    LogoutPage
   
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApikeyProvider,
    ApikeyProvider,
    SocialSharing,
    StarRatingModule
   
  ]
})
export class AppModule {}
