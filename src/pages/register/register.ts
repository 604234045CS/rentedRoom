import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  sigupdata:any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public alertCtrl : AlertController) {
    this.sigupdata.name = "";
    this.sigupdata.surname = "";
    this.sigupdata.email = "";
    this.sigupdata.username = "";
    this.sigupdata.password = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  regis(){
    if(this.sigupdata.name != "" &&this.sigupdata.surname !=""&& this.sigupdata.username !="" && this.sigupdata.email != ""&& this.sigupdata.password != "" ){
      console.log("name:",this.sigupdata.name);
      console.log("surname:",this.sigupdata.surname);
      console.log("email:",this.sigupdata.email);
      console.log("username:",this.sigupdata.username);
      console.log("password:",this.sigupdata.password);
     
      let url:string = "http://10.8.8.198/ranted/register.php";
      let dataPost = JSON.stringify({
        name:this.sigupdata.name,
        surname:this.sigupdata.surname,
        email:this.sigupdata.email,
        username:this.sigupdata.username,
        password:this.sigupdata.password
      });
      this.http.post(url,dataPost)
      .subscribe(data =>{
      console.log(data);
      });
      
      alert('ยืนยันการสมัคร');
      
    }
}


Login(){
  this.navCtrl.pop();
}

back(){
  this.navCtrl.setRoot("RegisterPage");
}
}