import { Observable } from 'rxjs/Observable';
import * as _ from 'lodash';
import starWarsService from '../../services/starWarsService';

const episodes$ =
  Observable.interval(500)
    .skip(1).take(7);

episodes$
  .let(onlyTheGoodOnes)
  .let(log())
  .mergeMap(id => starWarsService.getEpisode(id))
  .mergeMap(mov => Observable.from(mov.characters))
  .mergeMap(id => starWarsService.getCharacter(id))
  .retryWhen(errors =>
    errors
      .do(() => {
        console.log('retrying in 5 seconds...');
      })
      .delay(5000)
  )
  .filter(char => char.gender === "male")
  .groupBy(char => char.name)
  .mergeMap(g =>
    g.reduce((acc, curr) => [...acc, curr], []))
  .map(arr => ({
    name: arr[0].name,
    movieCount: arr.length
  }))
  .subscribe(char => {
    console.stream('Male Characters')
      .log(`${char.name} [${char.movieCount}]`);
  });

function onlyTheGoodOnes(obs) {
  return obs.filter(
    v => _.some([4, 5, 6], id => id === v));
}



