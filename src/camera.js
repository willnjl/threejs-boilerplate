import { PerspectiveCamera } from 'three';
import scene from './scene';
// create the camera
const camera = new PerspectiveCamera(
  45, // degrees of view
  window.innerWidth / window.innerHeight, // aspect ratio
  0.1, // how near can we get
  5000 // how far can we get
);

// move the camera back a bit
camera.position.z = -50;
// point the camera at the scene
camera.lookAt(scene.position);

export default camera;
