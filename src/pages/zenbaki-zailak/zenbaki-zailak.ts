import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
    this.aZenbakiak = this.shuffleArray(this.aZenbakiak);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ZenbakiErrazakPage');
  }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }

  sound(){
    this.isEnabled = false;
    this.aZenbakiak = this.shuffleArray(this.aZenbakiak);
    this.zenbakia = this.aZenbakiak[this.getRandomInt(0,10)];
    var audio = new Audio('sounds/'+this.zenbakia+'.wav');
    audio.play(); 
    console.log('start reproduccion');
    audio.addEventListener("ended",  (e:Event) => this.fin() );
  }

  fin() {
    console.log('fin reproduccion');
    this.isEnabled = true;    
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
