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
  conversations: any[] = [];
  newMessage: string = '';

  friends = [
    { id: 1, name: 'Pablo', img: 'assets/img/persona1.jpg', conversation: [{ sender: 'Pablo', message: '¡Hola! ¿Cómo estás?' }, { sender: 'You', message: 'Hola Pablo! Estoy bien, gracias ¿y tú?' }, { sender: 'Pablo', message: 'Genial también, ¿quieres hacer algo este fin de semana?' }] },
    { id: 2, name: 'Lucia', img: 'assets/img/persona2.jpg', conversation: [{ sender: 'Lucia', message: '¡Hola! ¿Cómo estás?' }, { sender: 'You', message: 'Hola Lucia! Estoy bien, gracias ¿y tú?' }, { sender: 'Lucia', message: 'Genial también, ¿quieres hacer algo este fin de semana?' }] },
    { id: 3, name: 'Antonio', img: 'assets/img/persona3.jpg', conversation: [{ sender: 'Antonio', message: '¡Hola! ¿Cómo estás?' }, { sender: 'You', message: 'Hola Antonio! Estoy bien, gracias ¿y tú?' }, { sender: 'Antonio', message: 'Genial también, ¿quieres hacer algo este fin de semana?' }] },
    { id: 4, name: 'Manolo', img: 'assets/img/persona4.jpg', conversation: [{ sender: 'Manolo', message: '¡Hola! ¿Cómo estás?' }, { sender: 'You', message: 'Hola Manolo! Estoy bien, gracias ¿y tú?' }, { sender: 'Manolo', message: 'Genial también, ¿quieres hacer algo este fin de semana?' }] }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.friendId = +(this.route.snapshot.paramMap.get('friendId') ?? 0);
    this.friend = this.friends.find(f => f.id === this.friendId);
    this.conversations = this.friend?.conversation || [];
  }

  sendMessage() {
    if (this.newMessage.trim()) {
      this.conversations.push({ sender: 'You', message: this.newMessage });
      this.newMessage = '';
    }
  }
  
}
