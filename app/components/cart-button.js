import Component from '@glimmer/component';
import { service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class CartButtonComponent extends Component {
  @service cart;
  @service currency;
  @tracked groups = this.cart.getGroups();
  @tracked group = this.args.prodId
    ? this.groups.filter((g) => g.item.id == this.args.prodId)[0]
    : this.args.group;
  @tracked quantity = this.group ? this.group.amount : 0;
  @tracked item = this.group.item;
  /***
   *
   * check if cart contains oly one item
   *
   * @returns {boolean}
   */
  get one() {
    return this.group.amount == 1 ? true : false;
  }

  /***
   *
   * plus one to cart
   *
   * @param e
   */
  @action
  addToCart(e) {
    e.preventDefault();

    this.group.amount++;
    this.quantity = this.group.amount;
    this.cart.add(this.item, this.group.amount);
  }

  /****
   *
   * minus one from cart
   *
   * @param e
   */
  @action
  removeFromCart(e) {
    e.preventDefault();
    this.group.amount--;
    this.quantity = this.group.amount;
    this.cart.add(this.item, this.group.amount);
  }
}
