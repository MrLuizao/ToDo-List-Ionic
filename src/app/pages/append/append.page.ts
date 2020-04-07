import { Component, OnInit } from '@angular/core';
import { WishlistService } from 'src/app/services/wishlist.service';
import { ActivatedRoute } from '@angular/router';
import { ListItem } from 'src/app/models/list-item.model';
import { List } from 'src/app/models/list.model';

@Component({
  selector: 'app-append',
  templateUrl: './append.page.html',
  styleUrls: ['./append.page.scss'],
})
export class AppendPage implements OnInit {

  list: List;
  itemName = '';

  constructor(  private wishlistService: WishlistService,
                private route: ActivatedRoute) {    
                  
    const listID = this.route.snapshot.paramMap.get('listID');

    this.list = this.wishlistService.gettingList(listID);
    console.log(this.list);
        
  }

  ngOnInit() {
  }

  addingItem(){
    if( this.itemName.length === 0){
      console.log('NO SE CAPTURARON VALORES');
      return;
    }

    const NEWITEM = new ListItem( this.itemName );
    this.list.items.push(NEWITEM);

    this.itemName = '';
    this.wishlistService.saveStorage();
  }

  changeCheck( item: ListItem){

    // console.log(item);
    
    const pendings= this.list.items
      .filter(itemData => !itemData.completed)
      .length;
      console.log({pendings});

    if( pendings === 0){
      this.list.finishDate = new Date();
      this.list.finished = true;

    }else{
      this.list.finishDate = null;
      this.list.finished = false;
    }
    
    this.wishlistService.saveStorage();
    console.log(this.wishlistService.lists);
    
  }

  deleteItemSlide( index: number){
    this.list.items.splice( index, 1);
    this.wishlistService.saveStorage();
  }

}
