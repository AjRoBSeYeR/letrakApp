import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//import { Comun } from '../comun';

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

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  bezteBat(){
    this.letra = this.aBokalak[this.getRandomInt(0,4)];
  }

  ondoGehitu(){
    this.ondo++;
  }

  txartoGehitu(){
    this.txarto++;
  }

}
