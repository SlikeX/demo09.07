import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './main/first/first.component';
import { SecondComponent } from './main/second/second.component';
import { ThirdComponent } from './main/third/third.component';

const routes: Routes = [
  {path:'',component: FirstComponent},
  {path:'second',component: SecondComponent},
  {path:'third',component: ThirdComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
