import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
// import { HeroList } from "../mock-heroes";
import { HeroService } from "../hero.service";
// import * as _ from "lodash";
@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.sass"]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    document.title="Hero "+ hero.name;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }
}
