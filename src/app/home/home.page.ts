import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  posts = [
    {id: 1, img: 'assets/img/persona1.jpg', name: 'Pablo', title: 'Acampada en Alicante', description: 'Ir de acampada todo el fin de semana en las cercanías de Alicante.'},
    {id: 2, img: 'assets/img/persona2.jpg', name: 'Lucia', title: 'Juegos de mesay charla', description: 'Quedada en mi casa para jugar a juegos de mesa y charlar toda la tarde.'},
    {id: 3, img: 'assets/img/persona3.jpg', name: 'Antoni', title: 'Soy nuevo en la ciudad y quiero conocer el sitio', description: 'Quedada en el centro de Alicante para hacer un poco de turisteo y conocer el lugar.'}
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openPost(id: number) {
    this.router.navigate(['/post', id]);
  }
}
