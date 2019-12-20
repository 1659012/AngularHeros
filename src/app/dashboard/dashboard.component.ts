import { Component, OnInit } from "@angular/core";
import { Hero } from "../hero";
import { HeroService } from "../hero.service";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.sass"]
})
export class DashboardComponent implements OnInit {
  topHeroes: Hero[];

  getTopHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => (this.topHeroes = heroes.slice(1, 5)));
  }

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getTopHeroes();
  }
}
