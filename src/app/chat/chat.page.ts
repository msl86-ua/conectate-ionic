import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  friendId: number = 0;
  friend: any;

  friends = [
    { id: 1, name: 'Pablo', img: 'assets/img/persona1.jpg' },
    { id: 2, name: 'Lucia', img: 'assets/img/persona2.jpg' },
    { id: 3, name: 'Antonio', img: 'assets/img/persona3.jpg' },
    { id: 4, name: 'Manolo', img: 'assets/img/persona4.jpg' }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.friendId = +(this.route.snapshot.paramMap.get('friendId') ?? 0);
    this.friend = this.friends.find(f => f.id === this.friendId);
  }
}
