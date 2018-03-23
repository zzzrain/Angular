import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { HeroService } from './hero.service'
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
