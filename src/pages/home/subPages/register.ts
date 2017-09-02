import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, LoadingController, ToastController, ModalController} from 'ionic-angular';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class Register {
	user: {};
	avatar: '/images/avatar.jpg';

  constructor(
  	public viewCtrl: ViewController
  ) {
  	this.avatar = '/images/avatar.jpg';
  }

  dismiss() {
  	this.viewCtrl.dismiss();
  }

  uploadAvatar() {
  	
  }

}
