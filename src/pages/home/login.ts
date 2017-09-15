import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController, ModalController} from 'ionic-angular';
import { Register } from './subPages/register';
import { NativeStorage } from '@ionic-native/native-storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class HomePage {
	username: any;
	password: any;
  constructor(
  	public navCtrl: NavController,
  	public LoadingCtrl: LoadingController,
  	private ToastCtrl: ToastController,
  	public modalCtrl: ModalController,
    private nativeStorage: NativeStorage) {

  	this.username = '';
  	this.password = '';
  }

  showFill() {
  	
  	if(this.username == '' || this.password == '')
  	{
  		let ToastUserName = this.ToastCtrl.create({
  			duration: 3000,
  			message: 'username and password should not be null',
  			position: 'top'
  		});

  		ToastUserName.present();
  	}else {
  		let loading = this.LoadingCtrl.create({
	  		content: "please wait...",
	  		spinner: 'dots',
	  		duration: 5000
	  	});

	  	loading.present();
  	}

  }

  openRegisterForm() {
  	let modal = this.modalCtrl.create(Register);
  	modal.present();
  }

}
