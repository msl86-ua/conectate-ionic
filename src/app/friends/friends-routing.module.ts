import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FriendsPage } from './friends.page';
import { ChatPage } from '../chat/chat.page';

const routes: Routes = [
  {
    path: '',
    component: FriendsPage
  },
  {
    path: 'chat/:friendId',
    component: ChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FriendsPageRoutingModule {}
