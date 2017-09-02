import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-index',
  templateUrl: 'index.html'
})
export class IndexPage {

  constructor(public navCtrl: NavController) {

  }

  ionViewCanEnter() {
  	console.log("ionViewCanEnter");
  }

  ionViewDidLoad() {
  	console.log("home: loaded");
  }

  ionViewWillEnter() {
  	console.log("ionViewWillEnter");
  }

  ionViewDidEnter() {
  	console.log("ionViewDidEnter");
  }

  ionViewWillLeave() {
  	console.log("ionViewWillLeave");
  }

  ionViewDidLeave() {
  	console.log("ionViewDidLeave");
  }

  ionViewWillUnload() {
  	console.log("ionViewWillUnload");
  }

  ionViewCanLeave() {
  	console.log("ionViewCanLeave");
  }

}
