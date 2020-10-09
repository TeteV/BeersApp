import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { AddBicyclePageRoutingModule } from './add-bicycle-routing.module';

import { AddBicyclePage } from './add-bicycle.page';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AddBicyclePageRoutingModule
  ],
  declarations: [AddBicyclePage]
})
export class AddBicyclePageModule {}
