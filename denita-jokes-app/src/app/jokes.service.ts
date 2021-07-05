import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Jokes } from './Jokes';

@Injectable({ providedIn: 'root' })
export class JokesService {

  private jokesUrl = 'https://official-joke-api.appspot.com/jokes/ten'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient
    ) { }


  getJokes(): Observable<Jokes[]> {
    return this.http.get<Jokes[]>(this.jokesUrl)
      .pipe(
        catchError(this.handleError<Jokes[]>('getJokes', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error); 
  
      // return empty result
      return of(result as T);
    };
  }

}