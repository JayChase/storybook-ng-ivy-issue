import { CommonModule } from '@angular/common';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { Comp2Component } from '../lib/comp2/comp2.component';
import { LibTwoModule } from '../lib/lib-two.module';

storiesOf('test comp2', module)
  .addDecorator(
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, LibTwoModule],
      providers: []
    })
  )
  .add('test works', () => {
    return {
      component: Comp2Component
    };
  });
