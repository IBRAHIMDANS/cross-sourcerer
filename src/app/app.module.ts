import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GraphQLModule } from './graphql.module';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import {ChartModule} from 'primeng/chart';

import { UserComponent } from './pages/user/user.component';
import { SearchComponent } from './pages/search/search.component';
import { HeaderComponent } from './components/header/header.component';
import { OverviewComponent } from './components/overview/overview.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { FunFactsComponent } from './components/fun-facts/fun-facts.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { DataViewModule } from 'primeng';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    UserComponent,
    HeaderComponent,
    OverviewComponent,
    RepositoriesComponent,
    FunFactsComponent,
    TechnologiesComponent,
    LanguagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    ChartModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
