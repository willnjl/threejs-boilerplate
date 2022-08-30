import { WebGLRenderer } from 'three';

const renderer = new WebGLRenderer({
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

export default renderer;
