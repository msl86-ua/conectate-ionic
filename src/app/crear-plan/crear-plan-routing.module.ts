import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearPlanPage } from './crear-plan.page';

const routes: Routes = [
  {
    path: '',
    component: CrearPlanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearPlanPageRoutingModule {}
