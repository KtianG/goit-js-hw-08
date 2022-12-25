import Player from '@vimeo/player';

//Dodaj do projektu bibliotekę lodash.throttle i zrób tak,
//aby czas odtwarzania aktualizował się w storage nie częściej niż raz na sekundę.
import _ from 'lodash';

//Inicjalizuj odtwarzacz w pliku skryptu tak,
//jak opisano w sekcji pre-existing player,
const iframe = document.querySelector('iframe#vimeo-player');
const player = new Player(iframe);

///Do przeładowywania strony używaj metody setCurrentTime()
//aby wznowić odtwarzanie od zapisanego momentu.
if (localStorage.getItem('videoplayer-current-time')) {
  player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
}

//Zapisuj czas odtwarzania w local storage.
//Niech kluczem do storage będzie "videoplayer-current-time".
const updateTime = event => {
  localStorage.setItem('videoplayer-current-time', event.seconds);
  console.log(localStorage.getItem('videoplayer-current-time'));
};

//Zbadaj dokumentację metody on()
//i zacznij śledzić zdarzenie timeupdate - aktualizacja czasu odtwarzania.
player.on('timeupdate', _.throttle(updateTime, 1000));
