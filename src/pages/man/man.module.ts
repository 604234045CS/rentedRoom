import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManPage } from './man';

@NgModule({
  declarations: [
    ManPage,
  ],
  imports: [
    IonicPageModule.forChild(ManPage),
  ],
})
export class ManPageModule {}
