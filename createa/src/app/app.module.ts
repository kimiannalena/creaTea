import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment.prod'
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { InfoComponent } from './info/info.component';
import { StartComponent } from './start/start.component';
import { TeaFinderComponent } from './tea-finder/tea-finder.component';
import { TeaResultComponent } from './tea-result/tea-result.component';


@NgModule({
  declarations: [
    AppComponent,
    InfoComponent,
    StartComponent,
    TeaFinderComponent,
    TeaResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
