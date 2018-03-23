import { Injectable } from '@angular/core';
import { Hero } from './heroes'
import { Heroes } from './heroes-mock'
import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of'

@Injectable()
export class HeroService {
  // getHeroes(): Hero[] {  
  //   return Heroes
  // }

  getHeroes(): Observable<Hero[]> {
    return of(Heroes)
  }

  constructor() { }

}
