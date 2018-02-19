import { Component } from '@angular/core';
//import { PayPal, PayPalPayment, PayPalConfiguration } from '@ionic-native/paypal';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GLOBAL } from '../../app/global';


@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage {

  precio: string;
  email:  string;
  nombre: string;
  version: string;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams
    /*public payPal: PayPal */) {

      this.precio = '1';
      this.email = GLOBAL.email;
      this.nombre = GLOBAL.name;
      this.version = GLOBAL.version;

      /*
      this.payPal.init({
        PayPalEnvironmentProduction: 'YOUR_PRODUCTION_CLIENT_ID',
        PayPalEnvironmentSandbox: 'YOUR_SANDBOX_CLIENT_ID'
      }).then(() => {
        // Environments: PayPalEnvironmentNoNetwork, PayPalEnvironmentSandbox, PayPalEnvironmentProduction
        this.payPal.prepareToRender('PayPalEnvironmentProduction', new PayPalConfiguration({
          // Only needed if you get an "Internal Service Error" after PayPal login!
          //payPalShippingAddressOption: 2 // PayPalShippingAddressOptionPayPal
        })).then(() => {
          let payment = new PayPalPayment( this.precio , 'EUR', 'Eskerrik asko', 'sale');
          this.payPal.renderSinglePaymentUI(payment).then(() => {
            // Successfully paid
      
            // Example sandbox response
            //
            // {
            //   "client": {
            //     "environment": "sandbox",
            //     "product_name": "PayPal iOS SDK",
            //     "paypal_sdk_version": "2.16.0",
            //     "platform": "iOS"
            //   },
            //   "response_type": "payment",
            //   "response": {
            //     "id": "PAY-1AB23456CD789012EF34GHIJ",
            //     "state": "approved",
            //     "create_time": "2016-10-03T13:33:33Z",
            //     "intent": "sale"
            //   }
            // }
          }, () => {
            // Error or render dialog closed without being successful
          });
        }, () => {
          // Error in configuration
        });
      }, () => {
        // Error in initialization, maybe PayPal isn't supported or something else
      });
     */ 

  }//constructor

  changePrize( _precio ){
    this.precio = _precio;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }


  

}
