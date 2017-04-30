import React from "react";
import { render } from "react-dom";

import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/fromEvent";
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/delay';

import starWarsService from './assets/services/starWarsService';
import SearchResults from './demos/typeahead';

const input = document.getElementById('tbSearch');

const searches$ = Observable.fromEvent(input, 'keyup')
  .map(e => e.target.value)
  .filter(search => search.length >= 2)
  .debounceTime(500)
  .distinctUntilChanged();

searches$
.do(() => {
  renderResults([],true);
})
.switchMap(
  search => Observable.forkJoin(
    starWarsService.findCharacters(search),
    starWarsService.findVehicles(search),
    starWarsService.findStarships(search)
  )
)
.delay(2000)
.subscribe(([characters, vehicles, starships]) => {
  renderResults({characters, vehicles, starships});
});

function renderResults(results, searching = false){
  const searchResults = <SearchResults {...results} searching={searching} />;
  render(searchResults, document.getElementById("search-results"));
}
