import { NgModule } from '@angular/core';
import { LibOneModule } from 'lib-one';
import { Comp2Component } from './comp2/comp2.component';

@NgModule({
  declarations: [Comp2Component],
  imports: [LibOneModule],
  exports: [Comp2Component]
})
export class LibTwoModule {}
