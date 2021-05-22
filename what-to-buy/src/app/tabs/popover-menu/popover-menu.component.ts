import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-menu',
  templateUrl: './popover-menu.component.html',
  styleUrls: ['./popover-menu.component.scss'],
})
export class PopoverMenuComponent implements OnInit {

  site: string;

  constructor(
    private popoverController: PopoverController
  ) { }

  ngOnInit() {}

  close() {
    this.popoverController.dismiss('close ME', 'some role');
  }

}
