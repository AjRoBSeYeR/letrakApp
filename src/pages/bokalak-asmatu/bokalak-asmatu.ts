import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Comun } from '../../app/comun';

@IonicPage()
@Component({
  selector: 'page-bokalak-asmatu',
  templateUrl: 'bokalak-asmatu.html',
})
export class BokalakAsmatuPage {

  letra:string;
  aBokalak = ['a','e','i','o','u'];
  ondo:number;
  txarto:number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.letra = "a";
    this.ondo=0;
    this.txarto=0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BokalakAsmatuPage');
  }

  bezteBat(){
    this.letra = this.aBokalak[Comun.getRandomInt(0,4)];
  }

  ondoGehitu(){
    this.ondo++;
  }

  txartoGehitu(){
    this.txarto++;
  }

}
