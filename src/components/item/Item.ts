import { weatherItemInterface } from 'src/data/weatherList';

export interface ItemInterface
  extends weatherItemInterface {
  activeSoundId: number;
  changeActiveSound: (id: number) => void;
}

export const Item = ({
  iconPath,
  imagePath,
  audioPath,
  activeSoundId,
  id,
  changeActiveSound,
}: ItemInterface) => {
  const isActive = (): boolean => activeSoundId === id;

  const audioPause = (): void => {
    audio.pause();
    icon.src = 'assets/icons/pause.svg';
  };

  const audioPlay = ():void => {
    audio.play();
    icon.src = `assets/icons/${iconPath}`;
  };

  const listItem = document.createElement('li');
  listItem.className = 'list-item';

  const item = document.createElement('button');
  item.style.backgroundImage = `url(assets/${imagePath})`;
  listItem.append(item);

  const icon = document.createElement('img');
  icon.src = `assets/icons/${iconPath}`;
  icon.alt = 'icon';

  const audio = document.createElement('audio');
  audio.src = `assets/sounds/${audioPath}`;
  audio.preload = 'auto';

  const volumeControl = document.createElement('input');
  volumeControl.type = 'range';
  volumeControl.value = "50";
  volumeControl.min = "0";
  volumeControl.max = "100";

  volumeControl.addEventListener('input', () => {
    audio.volume = +volumeControl.value / 100;
  });

  if (isActive()) {
    listItem.append(volumeControl);
    const playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise.catch();
    }
  }
  item.append(icon, audio);

  item.addEventListener('click', () => {
    if (!isActive()) {
      changeActiveSound(id);
    } else {
      audio.paused ? audioPlay() : audioPause();
    }
  });

  return listItem;
};
