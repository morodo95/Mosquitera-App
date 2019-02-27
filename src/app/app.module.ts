import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';

import { OneSignal } from '@ionic-native/onesignal';
import { WelcomePage } from '../pages/welcome/welcome';
import { AuthServiceProvider } from '../providers/authservice/authservice';
import { NoticiasPage } from '../pages/noticias/noticias';
import {HttpClientModule} from '@angular/common/http';
import { NoticiaPage } from '../pages/noticia/noticia';
import { SocialesPage } from '../pages/sociales/sociales';
import { FacebookPage } from '../pages/facebook/facebook';
import { InstagramPage } from '../pages/instagram/instagram';
import { WebPage } from '../pages/web/web';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage,
    NoticiasPage,
    NoticiaPage,
    SocialesPage,
    FacebookPage,
    InstagramPage,
    WebPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    WelcomePage,
    NoticiasPage,
    NoticiaPage,
    SocialesPage,
    FacebookPage,
    InstagramPage,
    WebPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    OneSignal,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    
  ]
})
export class AppModule {}
