import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { List } from 'src/app/models/list.model';
import { Router } from '@angular/router';
import { WishlistService } from 'src/app/services/wishlist.service';
import { AlertController, IonList } from '@ionic/angular';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {

  @ViewChild(IonList, {static: false}) list: IonList;
  
  @Input() finished = true;

  constructor( public wishlistService: WishlistService,
               private router: Router,
               private alertCtrl: AlertController ) { }

  ngOnInit() {}

  selectedtList(listName: List){

    if(this.finished){
      this.router.navigateByUrl(`/tabs/tab2/append/${listName.id}`);      
    }else{
      this.router.navigateByUrl(`/tabs/tab1/append/${listName.id}`);      
    }
  }

  deleteList(list: List){
    this.wishlistService.deleteListSlide(list);
  }

  async editList(list: List){

    const alert = await this.alertCtrl.create({
      header: 'Edit List',
      inputs: [
        {
          name:'title',
          type: 'text',
          value: list.title,
          placeholder: 'Item Name'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('CANCEL ALERT BTN');
            this.list.closeSlidingItems();
          }
        },
        {
          text: 'Update',
          handler: ( data ) => {
            console.log(data);
            if(data.title.length === 0){
              console.log('NO SE PUEDE CREAR UNA LISTA SIN NOMBRE');
              return;
            }
            list.title = data.title;
            this.wishlistService.saveStorage();
            this.list.closeSlidingItems();
          }
        }
      ]
    });

    alert.present();
    
  }

}
