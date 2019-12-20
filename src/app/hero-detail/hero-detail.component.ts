import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { HeroService } from "../hero.service";
import { Hero } from "../hero";
@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.sass"]
})
export class HeroDetailComponent implements OnInit {
  // @Input() hero: Hero;
  hero: Hero;

  getHeroDetail(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.heroService.getHeroDetail(id).subscribe(hero => (this.hero = hero));
  }

  goBack(): void {
    this.location.back();
  }

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getHeroDetail();
  }
}
