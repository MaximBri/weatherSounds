export interface weatherItemInterface {
  id: number;
  imagePath: string;
  iconPath: string;
  audioPath: string;
}

const weatherList: weatherItemInterface[] = [
  {
    id: 1,
    imagePath: 'summer-bg.jpg',
    iconPath: 'sun.svg',
    audioPath: 'summer.mp3',
  },
  {
    id: 2,
    imagePath: 'rainy-bg.jpg',
    iconPath: 'cloud-rain.svg',
    audioPath: 'rain.mp3',
  },
  {
    id: 3,
    imagePath: 'winter-bg.jpg',
    iconPath: 'cloud-snow.svg',
    audioPath: 'winter.mp3',
  },
];

export default weatherList;
