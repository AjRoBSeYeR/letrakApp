import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { COMUN } from '../../app/comun';

@IonicPage()
@Component({
  selector: 'page-bokala-erraza',
  templateUrl: 'bokala-erraza.html',
})
export class BokalaErrazaPage {


  numero:number;
  letra:string;
  ondo:number;
  txarto:number;
  aBokalak = ['a','e','i','o','u'];
 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ondo=0;
    this.txarto=0;
    this.numero=0;

    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BokalaErrazaPage');
  }

  /*
  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  */

  sound(){
    this.letra = this.aBokalak[COMUN.getRandomInt(0,4)];
    var audio = new Audio('sounds/'+this.letra+'.wav');
    audio.play();       
  }


  check( letraSelected ){    
      let soundFile;    
      if ( letraSelected == this.letra ){
          soundFile = 'sounds/ondo.wav';
          this.ondo++;          
      }else{
          soundFile = 'sounds/txarto.wav';
          this.txarto++;        
      }
      var audio = new Audio(soundFile);
      audio.play();
  }


 

}
