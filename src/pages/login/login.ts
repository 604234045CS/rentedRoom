import { HomePage } from './../home/home';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import 'rxjs/add/operator/map';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  logindata:any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public http:Http,public event : Events) {
    this.logindata.username = "";
    this.logindata.password = "";
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad LoginPage');
  // }

  register(){
    this.navCtrl.push('RegisterPage');
  }
 
 
  Login(){

    if(this.logindata.username != "" && this.logindata.password != "" && this.logindata){
      console.log("username:",this.logindata.username);
    console.log("password:",this.logindata.password);

    let url:string = "http://10.8.8.198/ranted/login.php";
    let dataPost = JSON.stringify({
      username:this.logindata.username,
      password:this.logindata.password
    });
    this.http.post(url,dataPost)
    .map(res=>res.json())
    .subscribe(data =>{
      console.log(data);
      if(data != null){
        this.event.publish('username:Login');
        this.navCtrl.setRoot(HomePage);
      }

    });

    
    }else{
      console.log("Enter Password");
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
    }
    
  }

}
