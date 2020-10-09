import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { Bicycle } from '../models/bicycle';
import { BicycleService } from '../services/bicycle.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  bicycles: Bicycle[];

  constructor(
    private bicycleService: BicycleService,
    private router: Router,
    public actionSheetController: ActionSheetController
  ) { }

  ngOnInit() {
    this.getAllBicycles();
  }

  async presentActionSheet(id: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Beer',
      cssClass: 'present-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.deleteBicycle(id);
        }
      }, {
        text: 'Edit',
        icon: 'create',
        handler: () => {
          this.updateBicycle(id);
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();
  }

  getAllBicycles() {
    this.bicycleService.getBicycles().subscribe(bicycles => {
      this.bicycles = bicycles;
      console.log(bicycles)
    });
  }

  deleteBicycle(id: number) {
    this.bicycleService.deleteBicycle(id).subscribe(() => {
      this.getAllBicycles();
    })
    
  }

  addBicycle() {
    this.router.navigateByUrl("/add-bicycle");
  }

  searchBicycle() {
    this.router.navigateByUrl("/search-bicycle");
  }

  updateBicycle(id) {
    this.bicycleService.setCurrentBicyleId(id);
    console.log("Estoy en updateBID aqui en lsit: " + id);
    this.router.navigateByUrl("/update-bicycle");
  }

}
