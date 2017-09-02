import { Component } from '@angular/core';

import { IndexPage } from '../index/index';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = IndexPage;
  tab2Root = ContactPage;
  tab3Root = HomePage;

  constructor() {

  }

}
