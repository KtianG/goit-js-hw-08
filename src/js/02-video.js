import Player from '@vimeo/player';

console.log('cokolwiek');
const iframe = document.querySelector('iframe#vimeo-player');
console.log(iframe);
const player = new Player(iframe);

player.on('play', function () {
  console.log('played the video!');
});

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
