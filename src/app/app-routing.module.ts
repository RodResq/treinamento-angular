import { SignInComponent } from './home/signin/signin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './erros/not-found/not-found.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoListaResolver } from './photos/photo-list/photo-lista.resolver';
import { PhotosFormComponent } from './photos/photos-form/photos-form.component';


const routes: Routes = [
  {
    path: '',
    component: SignInComponent
  },
  { path: 'user/:userName', 
    component: PhotoListComponent,
    resolve: { photos: PhotoListaResolver } },
  { path: 'p/add', component: PhotosFormComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
/**continuar na aula 04 -> lidando com rotas inexistentes */