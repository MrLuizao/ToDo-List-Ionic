import { NgModule } from '@angular/core';
import { FilterCompletesPipe } from './filter-completes.pipe';


@NgModule({
  declarations: [FilterCompletesPipe],
  exports: [FilterCompletesPipe]
})

export class PipesModule { }
