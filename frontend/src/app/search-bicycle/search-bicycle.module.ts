import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchBicyclePageRoutingModule } from './search-bicycle-routing.module';

import { SearchBicyclePage } from './search-bicycle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchBicyclePageRoutingModule
  ],
  declarations: [SearchBicyclePage]
})
export class SearchBicyclePageModule {}
