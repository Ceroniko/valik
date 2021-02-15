let previous = document.querySelector('.player-control__prev');
let play = document.querySelector('.player-control__play');
let next = document.querySelector('.player-control__next');
let songName = document.querySelector('.player__song-name');
let present = document.querySelector('.player-counter__present');
let total = document.querySelector('.player-counter__total');
let swiperList = document.querySelector('.swiper-wrapper');

let index = 0;
let playingSong = false;

let track = document.createElement('audio');

let allSong = [
    {
        name: 'Крокодил гена - День Рождения ( GACHI RIGHT VERSION )',
        path: 'assets/music/song2.mp3',
    },
    {
        name: 'Чай вдвоем - День рождения (right version) | G-man',
        path: 'assets/music/song3.mp3',
    },
    {
        name: '♂Ирина Аллегрова♂-♂Happy Birthday Brother♂ [right version ♂]',
        path: 'assets/music/song1.mp3',
    },
    {
        name: 'Юрий Шатунов - С днём рождения (♂right version♂) Gachi Remix',
        path: 'assets/music/song4.mp3',
    },
];

const loadTrack = (index) => {
    track.src = allSong[index].path;
    songName.innerHTML = allSong[index].name;
    track.load();
    total.innerHTML = allSong.length;
    present.innerHTML = index + 1;
};

loadTrack(index);

const playSong = () => {
    track.play();
    playingSong = true;
    play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
};

const pauseSong = () => {
    track.pause();
    playingSong = false;
    play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
};

const justPlay = () => {
    if (playingSong === false) {
        playSong();
    } else {
        pauseSong();
    }
};

play.addEventListener('click', justPlay);

const nextSong = () => {
    if (index < allSong.length - 1) {
        index += 1;
        loadTrack(index);
        playSong();
    } else {
        index = 0;
        loadTrack(index);
        playSong();
    }
};

next.addEventListener('click', nextSong);

const previousSong = () => {
    if (index > 0) {
        index -= 1;
        loadTrack(index);
        playSong();
    } else {
        index = allSong.length;
        loadTrack(index);
        playSong();
    }
};

previous.addEventListener('click', previousSong);

for (let i = 1; i <= 17; i++) {
    let sliderItem = document.createElement('div');
    let bg = document.createElement('div');
    sliderItem.className = 'swiper-slide';
    bg.className = 'bg';
    sliderItem.style.textAlign = 'center';
    bg.style.background = `url(assets/img/${i}.jpg) center / cover no-repeat`;
    sliderItem.style.backdropFilter = 'blur(5px)';
    let sliderImg = document.createElement('img');
    sliderImg.src = `assets/img/${i}.jpg`;
    sliderImg.style.height = '100%';
    sliderItem.append(bg);
    sliderItem.append(sliderImg);
    swiperList.append(sliderItem);
}

const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3500,
    },
    pagination: {
        el: '.swiper-pagination',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
