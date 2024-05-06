import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/native-federation';

const routes: Routes = [
  {
    path:'',
    loadChildren:() => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'login',
    loadChildren:() => loadRemoteModule('auth', './authModule').then((m) => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
