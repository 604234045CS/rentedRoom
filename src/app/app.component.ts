import { LogoutPage } from './../pages/logout/logout';
import { InsertDormPage } from './../pages/insert-dorm/insert-dorm';
import { LoginPage } from './../pages/login/login';
import { ComparePage } from './../pages/compare/compare';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public event : Events) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'ประเภทห้องเช่า', component: ListPage },
      { title: 'เปรียบเทียบราคาห้องเช่า', component: ComparePage },
      { title: 'ลงชื่อเข้าใช้', component: LoginPage }
    ];
    event.subscribe('username:Login',()=>{
      this.pages = [
      { title: 'ประเภทห้องเช่า', component: ListPage },
      { title: 'เปรียบเทียบราคาห้องเช่า', component: ComparePage },
      { title: 'ลงชื่อเข้าใช้', component: LoginPage },
      { title: 'เพิ่มห้องเช่า', component: InsertDormPage },
      { title: 'ออกจากระบบ', component: LogoutPage  }
      ];
    });
    event.subscribe('username:Loguot',()=>{
      this.pages = [
        { title: 'ประเภทห้องเช่า', component: ListPage },
        { title: 'เปรียบเทียบราคาห้องเช่า', component: ComparePage },
        { title: 'ลงชื่อเข้าใช้', component: LoginPage }
        ];
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
