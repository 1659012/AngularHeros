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

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

  removeHero(id: Number): void {
    this.heroService.removeHero(id);
  }

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHeroes();
  }
}
