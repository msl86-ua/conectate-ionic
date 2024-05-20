import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearPlanPageRoutingModule } from './crear-plan-routing.module';

import { CrearPlanPage } from './crear-plan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearPlanPageRoutingModule
  ],
  declarations: [CrearPlanPage]
})
export class CrearPlanPageModule {}
