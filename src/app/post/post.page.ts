import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {
  planId: number = 0; // ID del plan, por ahora solo para demostración
  plan: any;
  comments: any[] = [];
  newComment: string = '';

  plans = [
    {
      id: 1,
      creatorName: 'Juan',
      creationDate: new Date(),
      creatorAvatar: 'assets/img/persona1.jpg',
      title: 'Plan de viaje a Europa',
      description: 'Visitar París, Roma y Madrid.',
      comments: [
        {
          author: 'Juan',
          content: '¡Vamos a disfrutar!',
          createdAt: new Date()
        }
      ]
    },
    {
      id: 2,
      creatorName: 'Ana',
      creationDate: new Date(),
      creatorAvatar: 'assets/img/persona2.jpg',
      title: 'Plan de estudio intensivo',
      description: 'Aprender inglés y programación, y todo el resto de asignaturas impartidas por el excelentísimo cuerpo de profesores y profesores del país español.',
      comments: [
        {
          author: 'Ana',
          content: 'Estoy emocionada con este plan.',
          createdAt: new Date()
        }
      ]
    }
  ];

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.planId = +(this.route.snapshot.paramMap.get('postId') ?? 0);
    this.plan = this.plans.find(p => p.id === this.planId);
    this.comments = this.plan?.comments || [];
  }

  addComment() {
    if (this.newComment.trim()) {
      const newComment = {
        author: 'You',
        content: this.newComment,
        createdAt: new Date()
      };
      this.comments.push(newComment);
      this.newComment = '';
    }
  }
}
