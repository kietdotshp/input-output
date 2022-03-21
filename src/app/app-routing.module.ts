import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { Parent2Component } from './parent2/parent2.component';

const routes: Routes = [
  {
    path: 'parent',
    component: ParentComponent,
  },
  {
    path: 'child',
    component: ChildComponent,
  },
  {
    path: 'parent2',
    component: Parent2Component,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
