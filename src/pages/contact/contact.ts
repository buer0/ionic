import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from './subPages/detail';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
	contacts: [
	{name: "ergou", sign: "ergou go go go"},
	{name: "ergou", sign: "ergou go go go"},
	{name: "ergou", sign: "ergou go go go"},
	{name: "ergou", sign: "ergou go go go"},
	{name: "ergou", sign: "ergou go go go"},
	{name: "ergou", sign: "ergou go go go"},
	{name: "ergou", sign: "ergou go go go"},
	{name: "ergou", sign: "ergou go go go"},
	{name: "ergou", sign: "ergou go go go"},
	{name: "ergou", sign: "ergou go go go"}
	]

  constructor(public navCtrl: NavController) {
  	this.contacts = [
	{name: "ergou", sign: "ergou go go go"},
	{name: "ergou", sign: "ergou go go go"},
	{name: "ergou", sign: "ergou go go go"},
	{name: "ergou", sign: "ergou go go go"},
	{name: "ergou", sign: "ergou go go go"},
	{name: "ergou", sign: "ergou go go go"},
	{name: "ergou", sign: "ergou go go go"},
	{name: "ergou", sign: "ergou go go go"},
	{name: "ergou", sign: "ergou go go go"},
	{name: "ergou", sign: "ergou go go go"}
	];
  }

  itemShow(contact) {
  	this.navCtrl.push(DetailPage, {name: contact.name, sign: contact.sign});
  }

}
