import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#000',
  isLogoTexture:false ,
  isFullTexture: false,
  logoDecal: './logo.png',
  fullDecal: './logo.png',
});

export default state;