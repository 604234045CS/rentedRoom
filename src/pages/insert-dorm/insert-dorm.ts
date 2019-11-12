import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-insert-dorm',
  templateUrl: 'insert-dorm.html',
})
export class InsertDormPage {

  insertdata : any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public alertCtrl : AlertController) {
   
    this.insertdata.dorm_name = "";
    this.insertdata.price = "";
    this.insertdata.catagory = "";
    this.insertdata.sex_c = "";
    this.insertdata.numphone = "";
    this.insertdata.facilities = "";
    this.insertdata.address = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsertDormPage');
  }

  insert(){
    if(this.insertdata.dorm_name !=""&& this.insertdata.address !="" 
    && this.insertdata.price != ""&& this.insertdata.sex_c != "" && this.insertdata.numphone != "" 
    && this.insertdata.catagory != "" && this.insertdata.facilities != ""){
      console.log("dorm_name:",this.insertdata.dorm_name);
      console.log("address:",this.insertdata.price);
      console.log("price:",this.insertdata.catagory);
      console.log("sex_c:",this.insertdata.sex_c);
      console.log("numphone:",this.insertdata.numphone);
      console.log("catagory:",this.insertdata.facilities);
      console.log("facilities:",this.insertdata.address);

      let url = 'http://10.8.8.198/ranted/addroom.php';
      let dataPost = JSON.stringify({
        dorm_name: this.insertdata.dorm_name,
        address: this.insertdata.price,
        price: this.insertdata.catagory,
        sex_c: this.insertdata.sex_c,
        numphone: this.insertdata.numphone,
        catagory: this.insertdata.facilities,
        facilities: this.insertdata.address
      });
      this.http.post(url,dataPost)
      .subscribe(data =>{
      console.log(data);
      });
      
      alert('ยืนยันการเพิ่มห้องเช่า');

    }
  }

}
