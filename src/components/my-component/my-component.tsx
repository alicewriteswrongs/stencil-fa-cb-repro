import { Component, Prop, h, State } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
  formAssociated: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @State() showWords: boolean = false;

  formAssociatedCallback(form: any) {
    console.log('formAssociated called');
    console.log(this.showWords);
    form.ariaLabel = 'formAssociated called';
  }

  formDisabledCallback(disabled: boolean) {
    console.log('ive been', disabled);
    this.showWords = disabled;
  }

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    console.log('render');
    return this.showWords ?
      <div>Hello, World! I'm {this.getText()}</div>
        : <div>no show</div>;
  }
}
