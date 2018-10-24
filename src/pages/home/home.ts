import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Cover1Page } from '../cover1/cover1';
import { Bio1Page } from '../bio1/bio1';
import { Tracks1Page } from '../tracks1/tracks1';
import { Review1Page } from '../review1/review1';
import { Cover2Page } from '../cover2/cover2';
import { Bio2Page } from '../bio2/bio2';
import { Tracks2Page } from '../tracks2/tracks2';
import { Review2Page } from '../review2/review2';
import { Biog3Page } from '../biog3/biog3';
import { Cover3Page } from '../cover3/cover3';
import { Tracks3Page } from '../tracks3/tracks3';
import { Review3Page } from '../review3/review3';
import { Cover4Page } from '../cover4/cover4';
import { Bio4Page } from '../bio4/bio4';
import { Tracks4Page } from '../tracks4/tracks4';
import { Review4Page } from '../review4/review4';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  cover1 = Cover1Page;
  bio1 = Bio1Page;
  tracks1 = Tracks1Page;
  review1 = Review1Page;
  bio2 = Bio2Page;
  cover2 = Cover2Page;
  tracks2 = Tracks2Page;
  review2 = Review2Page;
  cover3 = Cover3Page;
  biog3 = Biog3Page;
  tracks3 = Tracks3Page;
  review3 = Review3Page;
  cover4 = Cover4Page;
  bio4 = Bio4Page;
  tracks4 = Tracks4Page;
  review4 = Review4Page;

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
  clickbio2()
  {
    this.navCtrl.push(this.bio2);
  }
  clickcover2()
  {
    this.navCtrl.push(this.cover2);
  }
  clicktracks2()
  {
    this.navCtrl.push(this.tracks2);
  }
  clickreview2()
  {
    this.navCtrl.push(this.review2);
  }
  clickcover3()
  {
    this.navCtrl.push(this.cover3);
  }
  clickbiog3()
  {
    this.navCtrl.push(this.biog3);
  }
  clicktracks3()
  {
    this.navCtrl.push(this.tracks3);
  }
  clickreview3()
  {
    this.navCtrl.push(this.review3);
  }
  clickcover4()
  {
    this.navCtrl.push(this.cover4);
  }
  clickbio4()
  {
    this.navCtrl.push(this.bio4);
  }
  clicktracks4()
  {
    this.navCtrl.push(this.tracks4);
  }
  clickreview4()
  {
    this.navCtrl.push(this.review4);
  }
}
