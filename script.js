// just random stuff I've made to see how different textures I've made are rendering in a 3D scene context


const config = {
  loadingScreenId: "loadingScreen",
  skySelector: "#sky",
  sceneSelector: "#scene",
  textureRepeatValue: "10 10",
  numberOfCubes: 800,
  cubeSize: 10,
  cubeSpacing: 160,
  numberOfSpheres: 400,
  sphereSize: 8,
  sphereSpacing: 140,
};

let audioAnalyzer;

/**
 * Represents the loading screen.
 */
class LoadingScreen {
  constructor(elementId) {
    this.loadingScreen = document.getElementById(elementId);
  }

  /**
   * Hides the loading screen.
   */
  hide() {
    this.loadingScreen.style.display = "none";
  }
}

/**
 * Represents the sky.
 */
class Sky {
  constructor(element, textureRepeatValue) {
    this.sky = element;
    this.textureRepeatValue = textureRepeatValue;
  }

  /**
   * Sets a random texture for the sky.
   */
  setRandomTexture() {
    const randomSkyTextureID = `#texture${Math.floor(Math.random() * 34)}`;
    this.sky.setAttribute("material", "src", randomSkyTextureID);
    this.sky.setAttribute("material", "repeat", this.textureRepeatValue);
  }
}

/**
 * Factory for creating cubes.
 */
class CubeFactory {
  static createCube(scene, cubeSize, cubeSpacing) {
    const cube = document.createElement("a-box");
    const randomCubeTextureID = `#texture${Math.floor(Math.random() * 34)}`;
    cube.setAttribute("height", cubeSize);
    cube.setAttribute("width", cubeSize);
    cube.setAttribute("depth", cubeSize);
    cube.setAttribute(
      "position",
      `${(Math.random() - 0.5) * cubeSpacing} ${
        (Math.random() - 0.5) * cubeSpacing
      } ${(Math.random() - 0.5) * cubeSpacing}`
    );
    cube.setAttribute("material", "src", randomCubeTextureID);
    cube.setAttribute("material", "metalness", "0");
    cube.setAttribute("material", "roughness", "1");
    cube.setAttribute(
      "animation",
      `property: rotation; to: 0 360 0; loop: true; dur: ${
        Math.random() * 50000 + 5000
      }`
    );
    scene.appendChild(cube);
  }
}

/**
 * Factory for creating spheres.
 */
class SphereFactory {
  static createSphere(scene, sphereSize, sphereSpacing) {
    const sphere = document.createElement("a-sphere");
    const randomSphereTextureID = `#texture${Math.floor(Math.random() * 34)}`;
    sphere.setAttribute("radius", sphereSize);
    sphere.setAttribute(
      "position",
      `${(Math.random() - 0.5) * sphereSpacing} ${
        (Math.random() - 0.5) * sphereSpacing
      } ${(Math.random() - 0.5) * sphereSpacing}`
    );
    sphere.setAttribute("material", "src", randomSphereTextureID);
    sphere.setAttribute("material", "metalness", "0");
    sphere.setAttribute("material", "roughness", "1");
    sphere.setAttribute(
      "animation",
      `property: rotation; to: 0 360 0; loop: true; dur: ${
        Math.random() * 50000 + 5000
      }`
    );
    scene.appendChild(sphere);
  }
}


document.addEventListener("DOMContentLoaded", function () {
  const scene = document.querySelector(config.sceneSelector);
  const skyElement = document.querySelector(config.skySelector);
  const sky = new Sky(skyElement, config.textureRepeatValue);
  sky.setRandomTexture();

  // CReates cubes
  for (let i = 0; i < config.numberOfCubes; i++) {
    CubeFactory.createCube(scene, config.cubeSize, config.cubeSpacing);
  }

  // Create spheres
  for (let i = 0; i < config.numberOfSpheres; i++) {
    SphereFactory.createSphere(scene, config.sphereSize, config.sphereSpacing);
  }

  scene.addEventListener("click", function () {
    
    
        if (scene.requestFullscreen) {
      scene.requestFullscreen();
    } else if (scene.webkitRequestFullscreen) {
      scene.webkitRequestFullscreen();
    } else if (scene.mozRequestFullScreen) {
      scene.mozRequestFullScreen();
    } else if (scene.msRequestFullscreen) {
      scene.msRequestFullscreen();
    }

  });

  scene.addEventListener("loaded", function () {
    const loadingScreen = new LoadingScreen(config.loadingScreenId);
    loadingScreen.hide();
  });
});












let audioPlayer = new Audio(config.audioUrl); 
audioPlayer.loop = true;
audioPlayer.crossOrigin = "anonymous";

let audioContext, analyser, dataArray;
function initAudio() {
  // Initialisation de l'API Web Audio
  let ctx2 = window.AudioContext || window.webkitAudioContext;
  audioContext = new ctx2();
  analyser = audioContext.createAnalyser();
  source = audioContext.createMediaElementSource(audioPlayer);
  source.connect(analyser);

  analyser.connect(audioContext.destination);

  analyser.fftSize = 256; // Définit la taille du tableau de fréquences
  const bufferLength = analyser.frequencyBinCount;
  dataArray = new Uint8Array(bufferLength);

  audioPlayer
    .play()
    .then(() => {
      console.log("Audio played successfully");
    })
    .catch((error) => {
      console.error("Error playing audio:", error);
    });
}

// function animateAudio() {
//   requestAnimationFrame(animateAudio);

//   if (analyser && dataArray) {
//     analyser.getByteFrequencyData(dataArray);

//     // Prend la moyenne des premières valeurs du tableau pour représenter les basses
//     let bass = 0;
//     for (let i = 0; i < 10; i++) {
//       bass += dataArray[i];
//     }
//     bass = bass / 10;
//     const scale = 1 + bass / 512; // Ajuster le dénominateur pour contrôler l'intensité de la pulsation

//     const spheres = scene.querySelectorAll("a-sphere");
//     spheres.forEach((sphere) => {
//       sphere.object3D.scale.set(scale, scale, scale);
//     });

//     // Invert colors of all textures
//     const elements = scene.querySelectorAll("a-box, a-sphere");
//     elements.forEach(async (element) => {
//       const material = element.getAttribute("material");
//       const invertedTextureURL = await invertTextureColors(material.src);
//       element.setAttribute("material", "src", invertedTextureURL);
//     });
//   }
// }
