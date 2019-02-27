import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { WelcomePage } from '../welcome/welcome';
import { NoticiasPage } from '../noticias/noticias';
import { SocialesPage } from '../sociales/sociales';
import { FacebookPage } from '../facebook/facebook';
import { InstagramPage } from '../instagram/instagram';
import { WebPage } from '../web/web';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = WelcomePage;
  tab2Root = NoticiasPage
  tab3Root = ContactPage;
  tab4Root = SocialesPage;
  tab5Root = FacebookPage;
  tab6Root = InstagramPage;
  tab7Root = WebPage;

  constructor() {

  }
}
