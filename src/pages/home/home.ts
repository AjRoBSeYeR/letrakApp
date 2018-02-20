import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import * as $ from 'jquery';
import { Comun } from '../../app/comun';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  numero:number;
  letra:string;
  ondo:number;
  txarto:number;
  aBokalak = ['a','e','i','o','u'];
  aPosicion = [1,2,3,4,5];
  isEnabled: boolean;

  constructor(public navCtrl: NavController) {
    this.ondo=0;
    this.txarto=0;
    this.numero=0;
    this.isEnabled=true;
  }


  sound(){
    $("#cbz").css('pointerEvents','none');     
    this.isEnabled = false;

    this.letra = this.aBokalak[Comun.getRandomInt(0,4)];
    var audio = new Audio('sounds/'+this.letra+'.wav');
    audio.play();
    audio.addEventListener("ended",  (e:Event) => this.fin() );

    this.aPosicion = Comun.shuffleArray(this.aPosicion);
    this.margotu();
  }


  check( letraSelected ){    
      $("#cbz").css('pointerEvents','none');     
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

  margotu(){
    var kartak = $("#bokalak div");
    for( let i=1; i <= this.aPosicion.length ; i++){
        kartak[i-1].style.order = this.aPosicion[i]; 
    }
  }

  fin() {
    console.log('fin reproduccion');
    this.isEnabled = true; 
    $("#cbz").css('pointerEvents','auto');     
  }

}
