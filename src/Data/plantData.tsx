import plant01 from '../assets/Plants/plant01.png'
import plant02 from '../assets/Plants/plant02.png'
import plant03 from '../assets/Plants/plant03.png'

type Plants = {
  id: number,
  name: string,
  picture: string,
}

export const plantData : Plants[] = [
  {
    id: 1,
    name: 'Arecaceae',
    picture: plant01,
  },

  {
    id: 2,
    name: 'Arecaceae',
    picture: plant02,
  },

  {
    id: 3,
    name: 'Arecaceae',
    picture: plant03,
  }
];

