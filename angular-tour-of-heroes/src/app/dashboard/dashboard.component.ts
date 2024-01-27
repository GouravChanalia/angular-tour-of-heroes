import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../interfaces';
import { HeroService } from '../hero.service';
import { RouterModule } from '@angular/router';
import { HeroSearchComponent } from '../hero-search/hero-search.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule, HeroSearchComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  constructor(private heroService: HeroService){}
  heroes: Hero[] = [];
  getTopHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => {
      this.heroes = heroes.slice(0,4);
    })
  }
  ngOnInit(): void{
    this.getTopHeroes();
  }
}
