import { Component, OnInit } from '@angular/core';
// import { Hero } from '../heroes'
// import { Heroes } from '../heroes-mock'
import { HeroService } from '../hero.service'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero

  // hero : Hero = {
  //   id: 1,
  //   name: 'Sakura'
  // }

  // Heroes = [
  //   { id: 11, name: 'Mr. Nice' },
  //   { id: 12, name: 'Narco' },
  //   { id: 13, name: 'Bombasto' },
  //   { id: 14, name: 'Celeritas' },
  //   { id: 15, name: 'Magneta' },
  //   { id: 16, name: 'RubberMan' },
  //   { id: 17, name: 'Dynama' },
  //   { id: 18, name: 'Dr IQ' },
  //   { id: 19, name: 'Magma' },
  //   { id: 20, name: 'Tornado' }
  // ]

  Heroes

  constructor(private HeroService: HeroService) {  }

  ngOnInit() {
    this.getHeros()
  }

  onSelect(opt): void {
    this.selectedHero = opt
  }

  getHeros(): void {
    // this.Heroes = this.HeroService.getHeroes()
    this.HeroService.getHeroes().subscribe(xxx => this.Heroes = xxx)
  }
}
