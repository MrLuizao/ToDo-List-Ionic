import { Component, ViewChild, SimpleChange } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

import {IonSlides} from '@ionic/angular';


@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.page.html',
  styleUrls: ['./tutorial.page.scss'],
})
export class TutorialPage{

  constructor( private storage: Storage, private router: Router ) { }

  @ViewChild(IonSlides, {static: false})
  slides: IonSlides;

  async finish(){
    await this.storage.set('tutorialComplete', true);
    // this.router.navigateByUrl('https://lkyco-2a58b.web.app/home');
    this.router.navigateByUrl('/');
  }

  next(){
    this.slides.slideNext();
  }

}
