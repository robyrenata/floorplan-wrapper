import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./floorplan/floorplan.module').then((m) => m.FloorplanModule),
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes), IonicModule],
})
export class PagesModule {}
