import MediaPlayer from './MediaPlayer';
import AutoPlay from './plugins/AutoPlay';
import AutoPause from './plugins/AutoPause';
import Ads from './plugins/Ads';

const video = document.querySelector('video');
const player = new MediaPlayer({ 
    el: video, 
    //plugins: [] 
    plugins: [new AutoPlay(), new AutoPause(), new Ads()] 
});

const buttonPlay: HTMLElement = document.getElementById('btn-play');
const buttonMute: HTMLElement = document.getElementById('btn-mute');

buttonPlay.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log(error.message);
    });
}