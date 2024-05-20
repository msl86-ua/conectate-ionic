import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-plan',
  templateUrl: './crear-plan.page.html',
  styleUrls: ['./crear-plan.page.scss'],
})
export class CrearPlanPage implements OnInit {
  pills = ['Noche', 'Juvenil'];
  constructor() { }

  ngOnInit() {
  }
}
