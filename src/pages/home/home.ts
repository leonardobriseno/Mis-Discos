import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Cover1Page } from '../cover1/cover1';
import { Bio1Page } from '../bio1/bio1';
import { Tracks1Page } from '../tracks1/tracks1';
import { Review1Page } from '../review1/review1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cover1 = Cover1Page;
  bio1 = Bio1Page;
  tracks1 = Tracks1Page;
  review1 = Review1Page;

  constructor(public navCtrl: NavController) {

  }
  clickcover1()
  {
    this.navCtrl.push(this.cover1);
  }
  clickbio1()
  {
    this.navCtrl.push(this.bio1);
  }
  clicktracks1()
  {
    this.navCtrl.push(this.tracks1);
  }
  clickreview1()
  {
    this.navCtrl.push(this.review1);
  }
  
}
