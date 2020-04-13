import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './lists/lists.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { PopoversComponent } from './popovers/popovers.component';


@NgModule({
  declarations: [
    ListsComponent,
    PopoversComponent
  ],
  exports: [
    ListsComponent,
    PopoversComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  entryComponents: [
    PopoversComponent
  ]
})
export class ComponentsModule { }
