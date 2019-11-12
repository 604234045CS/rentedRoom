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
    this.insertdata.address = "";
    this.insertdata.price = "";
    this.insertdata.sex_c = "";
    this.insertdata.numphone = "";
    this.insertdata.catagory = "";
    this.insertdata.facilities = "";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InsertDormPage');
  }

  insert(){
    if(this.insertdata.dorm_name !=""&& this.insertdata.address !="" 
    && this.insertdata.price != ""&& this.insertdata.sex_c != "" && this.insertdata.numphone != "" 
    && this.insertdata.catagory != "" && this.insertdata.facilities != ""){
      console.log("dorm_name:",this.insertdata.dorm_name);
      console.log("address:",this.insertdata.address);
      console.log("price:",this.insertdata.price);
      console.log("sex_c:",this.insertdata.sex_c);
      console.log("numphone:",this.insertdata.numphone);
      console.log("catagory:",this.insertdata.catagory);
      console.log("facilities:",this.insertdata.facilities);

      let url = 'http://10.8.8.198/ranted/addroom.php';
      let dataPost = JSON.stringify({
        dorm_name: this.insertdata.dorm_name,
        address: this.insertdata.address,
        price: this.insertdata.price,
        sex_c: this.insertdata.sex_c,
        numphone: this.insertdata.numphone,
        catagory: this.insertdata.catagory,
        facilities: this.insertdata.facilities
      });
      this.http.post(url,dataPost)
      .subscribe(data =>{
      console.log(data);
      });
      
      alert('ยืนยันการเพิ่มห้องเช่า');

    }
  }

}
