import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Comun } from '../../app/comun';

@IonicPage()
@Component({
  selector: 'page-zenbaki-asmatu',
  templateUrl: 'zenbaki-asmatu.html',
})
export class ZenbakiAsmatuPage {

  zenbakia:number;
  aZenbakiak = [0,1,2,3,4,5,6,7,8,9,10];
  ondo:number;
  txarto:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.zenbakia = 0;
    this.ondo = 0;
    this.txarto = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZenbakiAsmatuPage');
  }

  bezteBat(){
    this.zenbakia = this.aZenbakiak[Comun.getRandomInt(0,10)];
  }

  ondoGehitu(){
    this.ondo++;
  }

  txartoGehitu(){
    this.txarto++;
  }


}
