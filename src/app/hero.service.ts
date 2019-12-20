import { Injectable } from "@angular/core";
import { Hero } from "./hero";
import { HeroList } from "./mock-heroes";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";
@Injectable({
  providedIn: "root"
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    this.messageService.add("HeroService: fetched heroes");
    return of(HeroList);
  }

  getHeroDetail(id: Number): Observable<Hero> {    
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HeroList.find(hero => hero.id === id));
  }

  removeHero(id:Number): void{
    var hero:Hero;
    this.getHeroDetail(id).subscribe(response => (hero= response));
    if(hero){
      HeroList.splice(HeroList.indexOf(hero), 1 );
      this.messageService.add(`HeroService: removed hero id=${id}`);
    }
  }

  constructor(private messageService: MessageService) {}
}
