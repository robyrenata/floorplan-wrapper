import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { FloorplanListComponent } from './floorplan-list/floorplan-list.component';
import { FloorplanDetailComponent } from './floorplan-detail/floorplan-detail.component';
import { JubliaFloorplanLibModule } from 'jublia-floorplan-lib';
import { IonicModule } from '@ionic/angular';

export const routes: Routes = [
  {
    path: '',
    component: FloorplanListComponent,
  },
  {
    path: 'detail/:id',
    component: FloorplanDetailComponent,
  },
];

@NgModule({
  declarations: [FloorplanListComponent, FloorplanDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    JubliaFloorplanLibModule,
    IonicModule,
  ],
})
export class FloorplanModule {}
