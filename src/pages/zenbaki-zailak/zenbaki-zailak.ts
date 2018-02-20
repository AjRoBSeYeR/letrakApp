import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';

import { Comun } from '../../app/comun';

@IonicPage()
@Component({
  selector: 'page-zenbaki-zailak',
  templateUrl: 'zenbaki-zailak.html',
})
export class ZenbakiZailakPage {

  zenbakia:number;
  aZenbakiak = [0,1,2,3,4,5,6,7,8,9,10];
  ondo:number;
  txarto:number;
  isEnabled:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.zenbakia = 0;
    this.ondo = 0;
    this.txarto = 0;
    this.isEnabled = true;
    this.aZenbakiak = Comun.shuffleArray(this.aZenbakiak);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZenbakiErrazakPage');
  }

  sound(){
    $("#czz").css('pointerEvents','none');  
    this.isEnabled = false;

    this.aZenbakiak = Comun.shuffleArray(this.aZenbakiak);
    this.zenbakia = this.aZenbakiak[Comun.getRandomInt(0,10)];
    var audio = new Audio('sounds/'+this.zenbakia+'.wav');
    audio.play(); 
    console.log('start reproduccion');
    audio.addEventListener("ended",  (e:Event) => this.fin() );
  }

  fin() {
    console.log('fin reproduccion');
    this.isEnabled = true; 
    $("#czz").css('pointerEvents','auto');     
  }

  check( numSelected ){  
      $("#czz").css('pointerEvents','none');    
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
      audio.addEventListener("ended",  (e:Event) => this.fin() );
  }



}
