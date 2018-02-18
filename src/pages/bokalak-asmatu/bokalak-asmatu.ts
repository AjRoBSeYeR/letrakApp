import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BokalakAsmatuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bokalak-asmatu',
  templateUrl: 'bokalak-asmatu.html',
})
export class BokalakAsmatuPage {

  letra:string;
  aBokalak = ['a','e','i','o','u'];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.letra = "a";
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

}
