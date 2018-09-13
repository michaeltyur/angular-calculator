import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import {OneWayComponent} from '../app/one-way/one-way.component';
import {TwoWayComponent} from '../app/two-way/two-way.component';
import {TwoWayServiceComponent} from '../app/two-way-service/two-way-service.component';

const routes: Routes = [
  { path: '', redirectTo: '/app-one-way', pathMatch: 'full' },
  { path: 'app-one-way', component: OneWayComponent },
  { path: 'app-two-way', component: TwoWayComponent },
  { path: 'two-way-service', component: TwoWayServiceComponent }]
  
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
