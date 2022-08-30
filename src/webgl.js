export const WEBGL = {
  isWebGLAvailable: function () {
    try {
      const canvas = document.createElement('canvas');
      return !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
    } catch (e) {
      return false;
    }
  },

  isWebGL2Available: function () {
    try {
      const canvas = document.createElement('canvas');
      return !!(window.WebGL2RenderingContext && canvas.getContext('webgl2'));
    } catch (e) {
      return false;
    }
  },

  getWebGLErrorMessage: function () {
    return this.getErrorMessage(1);
  },

  getWebGL2ErrorMessage: function () {
    return this.getErrorMessage(2);
  },

  getErrorMessage: function (version) {
    const names = {
      1: 'WebGL',
      2: 'WebGL 2',
    };

    const contexts = {
      1: window.WebGLRenderingContext,
      2: window.WebGL2RenderingContext,
    };

    const message =
      'Your $0 does not seem to support <a href="http://khronos.org/webgl/wiki/Getting_a_WebGL_Implementation" style="color:#000">$1</a>';

    const element = document.createElement('div');
    element.id = 'webgl-error-message';

    if (contexts[version]) {
      message = message.replace('$0', 'graphics card');
    } else {
      message = message.replace('$0', 'browser');
    }

    message = message.replace('$1', names[version]);

    element.innerHTML = message;

    return element;
  },
};
