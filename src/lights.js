import { DirectionalLight } from 'three';
import scene from './scene';

const light = new DirectionalLight(0xffffff, 0.5);
scene.add(light);
