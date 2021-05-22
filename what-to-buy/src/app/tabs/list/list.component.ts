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

  constructor(
    public popoverController: PopoverController,
    @Inject('SHOPPING_LIST') readonly shoppingList: ListModel[]
  ) { }

  ngOnInit() {}

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

}
