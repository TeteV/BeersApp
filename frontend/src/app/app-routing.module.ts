import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'add-bicycle',
    loadChildren: () => import('./add-bicycle/add-bicycle.module').then( m => m.AddBicyclePageModule)
  },
  {
    path: 'search-bicycle',
    loadChildren: () => import('./search-bicycle/search-bicycle.module').then( m => m.SearchBicyclePageModule)
  },
  {
    path: 'update-bicycle',
    loadChildren: () => import('./update-bicycle/update-bicycle.module').then( m => m.UpdateBicyclePageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
