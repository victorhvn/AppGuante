import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HistorialPage } from './historial.page';

const routes: Routes = [
  {
    path: '',
    component: HistorialPage
  }
];
import { NgCalendarModule  } from 'ionic2-calendar';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NgCalendarModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HistorialPage]
})
export class HistorialPageModule {}
