import * as THREE from 'three';
import { WEBGL } from './webgl';

if (WEBGL.isWebGLAvailable()) {
  const renderer = new THREE.WebGLRenderer({
    antialias: true, //increases sharpness and quality
  });
  // set renderer size
  renderer.setSize(window.innerWidth, window.innerHeight);
  // set pixel ratio for device.
  renderer.setPixelRatio(window.devicePixelRatio);
  // 0x333333 === #333
  renderer.setClearColor(0x333333, 1);

  // add the renderer to the page
  const section = document.querySelector('section');
  section.appendChild(renderer.domElement);

  // create the scene
  const scene = new THREE.Scene();

  // create the camera
  const camera = new THREE.PerspectiveCamera(
    45, // degrees of view
    window.innerWidth / window.innerHeight, // aspect ratio
    0.1, // how near can we get
    5000 // how far can we get
  );

  // move the camera back a bit
  camera.position.z = -50;
  // point the camera at the scene
  camera.lookAt(scene.position);

  // create animation loop
  const animate = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };

  animate();
} else {
  var warning = WEBGL.getWebGLErrorMessage();
  document.body.appendChild(warning);
}
