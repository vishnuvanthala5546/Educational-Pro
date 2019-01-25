import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {ContactComponent} from './contact/contact.component';
import {GalleryComponent} from './gallery/gallery.component';
import {IndexComponent} from './index/index.component';
import {DataEntryComponent} from './data-entry/data-entry.component';

const routes: Routes = [
  { path: 'index', redirectTo: '/index', pathMatch: 'full' },
  { path: '', component: IndexComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'data-entry', component: DataEntryComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
