import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ZenbakiErrazakPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zenbaki-errazak',
  templateUrl: 'zenbaki-errazak.html',
})
export class ZenbakiErrazakPage {

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
    console.log('ionViewDidLoad ZenbakiErrazakPage');
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  sound(){
    this.zenbakia = this.aZenbakiak[this.getRandomInt(0,10)];
    var audio = new Audio('sounds/'+this.zenbakia+'.wav');
    audio.play();       
  }


  check( numSelected ){    
      let soundFile;    
      if ( numSelected == this.zenbakia ){
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
