import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {

  friends = [
    { id: 1, name: 'Pablo', img: 'assets/img/persona1.jpg' },
    { id: 2, name: 'Lucia', img: 'assets/img/persona2.jpg' },
    { id: 3, name: 'Antonio', img: 'assets/img/persona3.jpg' },
    { id: 4, name: 'Manolo', img: 'assets/img/persona4.jpg' }
  ];

  constructor(private router: Router) {}

  ngOnInit() {
  }

  openChat(friendId: number) {
    this.router.navigate(['/chat', friendId]);
  }

}
