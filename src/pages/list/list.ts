import { HttpClient } from '@angular/common/http';

import { ApikeyProvider } from './../../providers/apikey/apikey';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  data_rented : string;
  room:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams ,private keyAPI : ApikeyProvider,private http : HttpClient) {
   
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListPage');
  }

nextCon(){
this.navCtrl.push("CondoPage");
}
nextApart(){
  this.navCtrl.push("ApartPage");
}
nextMan(){
  this.navCtrl.push("ManPage");
}
nextDorm(){
  this.navCtrl.push("DormPage");
}


}
