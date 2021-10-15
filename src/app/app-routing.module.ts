import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChatEngComponent } from './chat-eng/chat-eng.component';
import { ChatArbComponent } from './chat-arb/chat-arb.component'

const routes: Routes = [
  {path:'english',component:ChatEngComponent},
  {path:'arabic',component:ChatArbComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
