import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ProductsComponent extends Component {
  @tracked quantity = 0;

  @action
  addToCart() {
    this.quantity++;
  }
}
