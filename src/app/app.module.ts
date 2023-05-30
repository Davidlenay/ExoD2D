import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WcsAngularModule } from 'wcs-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/pages/home/home.component';
import { CreateCupComponent } from './cup/pages/create-cup/create-cup.component';
import { SearchCupsComponent } from './cup/pages/search-cups/search-cups.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';
import { LiterPipe } from './common/pipes/liter.pipe';
import { Custom2BadgeComponent } from './common/components/custom2-badge/custom2-badge.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonDeleteComponent } from './common/components/button-delete/button-delete.component';
import { PercentageBarComponent } from './common/components/percentage-bar/percentage-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgxsModule } from '@ngxs/store';
import { CupState } from './store/cup/cup.state';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateCupComponent,
    SearchCupsComponent,
    LiterPipe,
    Custom2BadgeComponent,
    ButtonDeleteComponent,
    PercentageBarComponent
  ],
  imports: [
    NgxsModule.forRoot([], {      
    }),
    BrowserModule,
    AppRoutingModule,
    WcsAngularModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-full-width',
      progressBar: true,
      preventDuplicates: true,
      }),
      // ngxs
    NgxsModule.forRoot(
      [CupState],
      {developmentMode: true}
    ),
    NgxsReduxDevtoolsPluginModule.forRoot(),  
      
  ],
  providers: [
    {provide: DATE_PIPE_DEFAULT_OPTIONS, useValue: { dateFormat:"dd/MM/yyyy"}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
