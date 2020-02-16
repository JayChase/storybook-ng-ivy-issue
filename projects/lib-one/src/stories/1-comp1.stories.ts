import { CommonModule } from '@angular/common';
import { moduleMetadata, storiesOf } from '@storybook/angular';
import { Comp1Component } from '../lib/comp1/comp1.component';
import { LibOneModule } from '../lib/lib-one.module';

storiesOf('test comp1', module)
  .addDecorator(
    moduleMetadata({
      declarations: [],
      imports: [CommonModule, LibOneModule],
      providers: []
    })
  )
  .add('test works', () => {
    return {
      component: Comp1Component
    };
  });
