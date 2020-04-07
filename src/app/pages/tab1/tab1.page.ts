import { Component } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor( public wishlistService: WishlistService,
               private router: Router,
               private alertCtrl: AlertController) {}

  async goToAddList(){

    const alert = await this.alertCtrl.create({
      header: 'New List',
      inputs: [
        {
          name:'title',
          type: 'text',
          placeholder: 'List Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('CANCEL ALERT BTN');
          }
        },
        {
          text: 'Create',
          handler: ( data ) => {
            console.log(data);
            if(data.title.length === 0){
              console.log('NO SE PUEDE CREAR UNA LISTA SIN NOMBRE');
              return;
            }
            const listID = this.wishlistService.createList(data.title);
          
           this.router.navigateByUrl(`/tabs/tab1/append/${listID}`);
          }
        }
      ]
    });

    alert.present();
    
  }

}
