import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CartFullComponent extends Component {
  @service cart;
  @service currency;
  get total() {
    return this.cart.getAmount();
  }

  /****
   * for animating dropdown
   *
   *
   *
   */
  @action
  toggleOpen() {
    if (!this.isOpen) {
      document.getElementById('drop').className =
        'px-8 drop grid grid-cols-12 gap-4 drop open';
      document.getElementById('but').className = 'but open';
    } else {
      document.getElementById('but').className = 'but';
      document.getElementById('drop').className =
        'px-8 drop grid grid-cols-12 gap-4 drop ';
    }

    this.isOpen = this.isOpen ? false : true;
  }
  @tracked isOpen = false;
  get groups() {
    return this.cart.getGroups().filter((g) => g.amount > 0);
  }
  get discount() {
    return this.cart.summTotal - this.cart.summ > 0
      ? (this.cart.summTotal - this.cart.summ).toFixed(2)
      : 0;
  }
  get shipping() {
    /***
     *
     *
     *
     */
    return 0;
  }
  get subTotal() {
    return this.cart.summTotal.toFixed(2);
  }
}
