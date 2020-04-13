import { Component, OnInit } from '@angular/core';
import { NavParams, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popovers',
  templateUrl: './popovers.component.html',
  styleUrls: ['./popovers.component.scss'],
})
export class PopoversComponent implements OnInit {

  dataPassed = null;
  constructor( private navParams: NavParams, private popOverCrtl: PopoverController) { }

  ngOnInit() {
    this.dataPassed = this.navParams.get('sendData')
    console.log(this.dataPassed);
    
  }

}
