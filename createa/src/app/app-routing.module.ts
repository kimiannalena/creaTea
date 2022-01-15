import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { StartComponent } from './start/start.component';
import { TeaFinderComponent } from './tea-finder/tea-finder.component';
import { TeaResultComponent } from './tea-result/tea-result.component';

const routes: Routes = [
  { path: '', component: StartComponent },
  { path: 'info', component: InfoComponent },
  { path: 'teefinder', component: TeaFinderComponent},
  { path: 'tee/:id', component: TeaResultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
