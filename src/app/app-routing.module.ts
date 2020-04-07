import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';
import { LoginGuard } from './services/guards/login.guard';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    component: PagesComponent,
    canActivate: [ LoginGuard ],
    loadChildren: './pages/pages.module#PagesModule'
  },
  { path: '**', component: NopagefoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
