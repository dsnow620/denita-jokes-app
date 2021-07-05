import { Component, OnInit } from '@angular/core';
import { JokesService } from './jokes.service';
import {Jokes } from './Jokes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class JokesComponent implements OnInit {
  title = 'List of jokes';
  jokes: Jokes[] = [];
  

  constructor(private jokesService: JokesService) { }

  ngOnInit() {
    this.getJokes();
  }

  getJokes(): void {
    this.jokesService.getJokes()
    .subscribe(jokes => this.jokes = jokes);
  }

  add(setup: string, punchline: string): void {
    punchline = punchline.trim();
    if (!punchline || !setup) { return; }

    let newJoke: Jokes = new Jokes();
    
    newJoke.id = 1, 
    newJoke.type = "general";
    newJoke.setup = setup;
    newJoke.punchline = punchline;

    this.jokes.push(newJoke);
     
  }

}