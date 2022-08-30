import { WEBGL } from './webgl';
import renderer from './render';
import scene from './scene';
import camera from './camera';
import './shapes';
import './lights';

if (WEBGL.isWebGLAvailable()) {
  const animate = () => {
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  };

  animate();

  // Handle window resize event
  window.addEventListener('resize', onWindowResize, false);
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }
} else {
  const warning = WEBGL.getWebGLErrorMessage();
  document.body.appendChild(warning);
}
