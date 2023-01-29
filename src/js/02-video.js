import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const player = new Player(iframe);

// player.on(
//   'timeupdate',
//   throttle(function (e) {
//     localStorage.setItem('videoplayer-current-time', e.seconds);
//   }, 1000)
// );

// player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
//

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem('videoplayer-current-time', seconds);
}

player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
