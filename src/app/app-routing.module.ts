import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { UserComponent } from './components/user/user.component';


const routes: Routes = [
  {
    path: 'user/:id',
    component: UserComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: SearchComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
