import { Http } from '@angular/http';
import { ApikeyProvider } from './../../providers/apikey/apikey';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-compare',
  templateUrl: 'compare.html',
})
export class ComparePage {
  room : any = [];
  result : any = {};
  show1 : any = [];
  show2 : any = [];
  value;
  constructor(public navCtrl: NavController, public navParams: NavParams,public keyAPI : ApikeyProvider,public http : Http ) {
    this.getdata_dorm();
    this.result.room1 ="";
    this.result.room2 ="";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ComparePage');
  }

  getdata_dorm(){
    this.keyAPI.data_dorm().subscribe(data=>{
      this.room = data;
      console.log(data);
    });
  }

  getvs(){
    if(this.result.room1 !==""){
      this.keyAPI.showroom(this.result.room1).subscribe(data=>{
        this.show1 = data;
        console.log(this.show1);
      });
    }if(this.result.room1 !==""){
      this.keyAPI.showroom(this.result.room2).subscribe(data=>{
        this.show2 = data;
        console.log(this.show2);
      });
    }
  }
   

}
