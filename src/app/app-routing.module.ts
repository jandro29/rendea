import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './views/index/index.component';
import { Page2Component } from './views/page2/page2.component';

const routes: Routes = [

  { path: 'index', component: IndexComponent},
  { path: 'page2', component: Page2Component },
  { path: '', redirectTo: '/index', pathMatch: 'full' }

]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppRoutingModule { }
