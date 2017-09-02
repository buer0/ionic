import { Component } from '@angular/core';
import { NavController, ViewController, NavParams} from 'ionic-angular';

@Component({
  templateUrl: 'detail.html'
})

export class DetailPage {
	name: any;
  constructor(
  	public navCtrl: NavController,
  	public viewCtrl: ViewController,
  	private navParams: NavParams) {

  	this.name = navParams.get('name');

  }

  dismiss() {
  	this.viewCtrl.dismiss();
  }

}