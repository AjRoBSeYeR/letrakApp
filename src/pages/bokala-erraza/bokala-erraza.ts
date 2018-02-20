import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as $ from 'jquery';
import { Comun } from '../../app/comun';

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
  isEnabled: boolean;
 

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.ondo=0;
    this.txarto=0;
    this.numero=0;    
    this.isEnabled = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BokalaErrazaPage');    
  }
 
  sound(){
    $("#cbe").css('pointerEvents','none');     
    this.isEnabled = false;
    this.letra = this.aBokalak[Comun.getRandomInt(0,4)];
    var audio = new Audio('sounds/'+this.letra+'.wav');
    audio.play();   
    audio.addEventListener("ended",  (e:Event) => this.fin() );
  }


  check( letraSelected ){    
      $("#cbe").css('pointerEvents','none');     
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
      audio.addEventListener("ended",  (e:Event) => this.fin() );
  }


  fin() {
    console.log('fin reproduccion');
    this.isEnabled = true; 
    $("#cbe").css('pointerEvents','auto');     
  }

 

}
