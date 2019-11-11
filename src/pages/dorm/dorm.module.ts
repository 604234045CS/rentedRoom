import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DormPage } from './dorm';

@NgModule({
  declarations: [
    DormPage,
  ],
  imports: [
    IonicPageModule.forChild(DormPage),
  ],
  exports:[
    DormPage,
  ]
})
export class DormPageModule {}
