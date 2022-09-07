import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FloorplanListComponent } from './floorplan-list/floorplan-list.component';
import { JubliaFloorplanLibModule } from 'jublia-floorplan-lib';
import { IonicModule } from '@ionic/angular';

export const routes: Routes = [
  {
    path: '',
    component: FloorplanListComponent,
  },
  {
    path: 'detail/:origin/:id',
    loadChildren: () =>
      import('jublia-floorplan-lib').then((m) => m.JubliaFloorplanLibModule),
  },
];

@NgModule({
  declarations: [FloorplanListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    JubliaFloorplanLibModule,
    IonicModule,
  ],
})
export class FloorplanModule {}
