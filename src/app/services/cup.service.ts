import { Injectable } from '@angular/core';
import { Observable, delay, interval, map, of } from 'rxjs';
import { SearchCup } from '../model/search-cup.model';
import { HttpClient } from '@angular/common/http';
import { newCup } from '../model/new-cup.model';

@Injectable({
  providedIn: 'root'
})
export class CupService {

  cups: SearchCup[] = []

  constructor(private client: HttpClient) { }

  createCup(cup: newCup): Observable<void> {
    return this.client.post<void>("http://localhost:3000/cups",cup)
  }

  readCups(): Observable<SearchCup[]> {
    return this.client.get<SearchCup[]>("http://localhost:3000/cups")
  }

  deleteCup(id: string): Observable<void> {
    return this.client.delete<void>("http://localhost:3000/cups/"+id)
  } 
  

}
