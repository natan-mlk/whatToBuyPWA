import { Component, Inject, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
// import { SHOPPING_LIST } from 'src/assets/database-mockup';
import { PopoverMenuComponent } from '../popover-menu/popover-menu.component';
import { ListModel } from './list.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {

  localShoppingList: ListModel[];
  displayShoppingList: ListModel[];

  constructor(
    public popoverController: PopoverController,
    @Inject('SHOPPING_LIST') readonly shoppingList: ListModel[]
  ) { 
    this.localShoppingList = shoppingList;
    this.displayShoppingList = this.localShoppingList;
  }

  ngOnInit() { }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverMenuComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: false,
      componentProps: {
        site: 'closeME'
      },
    });
    await popover.present();

    popover.onDidDismiss().then((result) => {
      console.log(result);
    });
  }

  setColor(priority){
    switch(priority) {
      case 0:
        return 'primary';
      case 1:
        return 'warning';
      case 2:
        return 'danger';
    }
  }

  getIconName(kind) {
    switch(kind) {
      case 'cosmetics':
        return 'sparkles-outline';
      case 'food':
        return 'basket-outline';
      case 'other':
        return 'apps-outline';
    }
  }

  segmentKindChanged(event){
    const sortingKey = event.detail.value;
    console.log(event)
    this.filterByKind(sortingKey);
  }

  private filterByKind(sortingKey) {
    this.displayShoppingList = this.localShoppingList.filter(
      (arrayItem)=> {
        if(sortingKey === arrayItem.kind) {
          return arrayItem;
        } else if (sortingKey === 'all') {
          return arrayItem;
        }
      }
    )
  }

}
