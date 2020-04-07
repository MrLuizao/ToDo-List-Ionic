import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  lists: List[] = [];

  constructor( ) {
    this.loadStorage();
  }

  createList( title: string ){
    const newList = new List(title);
    this.lists.push( newList );
    this.saveStorage();

    return newList.id;
  }

  gettingList( id: string | number ){

    id = Number(id);

    return this.lists.find(  dataList => dataList.id === id );

  }

  deleteListSlide( list: List){
    this.lists = this.lists.filter(dataList => dataList.id !== list.id);
    this.saveStorage();
  }

  saveStorage(){
    localStorage.setItem('dataStorage', JSON.stringify(this.lists) );
  }

  loadStorage(){

    if(localStorage.getItem('dataStorage')){
      this.lists = JSON.parse( localStorage.getItem('dataStorage') );
    }
    else{
      this.lists = [];
    }
  }
}