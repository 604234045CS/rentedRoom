import { Http } from '@angular/http';
import { ApikeyProvider } from './../../providers/apikey/apikey';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, Note } from 'ionic-angular';
import "rxjs/add/operator/map";
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {
  data_room : any= [];
  score : any ;
  member : any = {};
  datacom : any ;
  constructor(public navCtrl: NavController, public navParams: NavParams,public  keyAPI:ApikeyProvider,private socialSharing: SocialSharing,public http:Http,public event : Events) {
    
    this.event.subscribe('star-rating:changed',(note)=> {
      this.score =note;
    });
    this.member.text = "";

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
    this.data_room = this.navParams.data;
    console.log(this.data_room);

    this.keyAPI.show_com(this.data_room).subscribe(data=>{
        this.datacom = data;
    });
  }

  
  shareFace(){
    let name = this.data_room.dorm_name;
    let address = this.data_room.address;
    let catagory_name = this.data_room.catagory_name;
    let price = this.data_room.price;
    let facilities = this.data_room.facilities;
    let sex_c = this.data_room.sex_c;
    this.socialSharing.shareViaFacebook('หอพัก :'+name +':'+address +':'+catagory_name +':'+price +':'+facilities +':'+sex_c +':');
  }

  scoreview(dorm_id){
    if(this.score != ''){
      console.log(this.score);
      console.log(dorm_id);
      let url = 'http://10.8.8.198/ranted/upscore.php';
      let datapost = JSON.stringify({
        score : this.score,
        dorm_id :dorm_id
      });
      this.http.post(url,datapost).subscribe(data=>{
        console.log(data);
      })
    }else{
      console.log("FOUND");
    }
  }


  textroom(dorm_id){
    console.log(this.member.text);
    if(this.member.text != ""){
      let url = 'http://10.8.8.198/ranted/review.php';
      let datapost = JSON.stringify({
        text : this.member.text,
        dorm_id : dorm_id
      });
      this.http.post(url,datapost).subscribe(data=>{
        console.log(data);
      })
    }else{
      console.log("ไม่สามารถแสดงความคิดเห็นได้");
    }

  }

}
