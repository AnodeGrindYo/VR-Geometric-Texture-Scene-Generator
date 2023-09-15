# Creative Coding: 3D VR Scene Generator

Dive into a mesmerizing 3D world of floating cubes and spheres adorned with handcrafted black and white geometric patterns. This code sets up an animated 3D VR scene using web components. By default, it showcases a vast expanse of spheres and cubes, each with a unique texture derived from years of intricate designs.

![VR Scene Screenshot]([your-screenshot-link-here.png](https://cdn.discordapp.com/attachments/932672918859702355/1152158034857042030/image.png))

## Demo

Experience the VR scene live [here](https://codepen.io/Adr_G/full/MWZJPoz).

## Features

- **Dynamic Sky**: The sky changes its texture randomly from a collection of over 34 handcrafted designs.
- **Animated Objects**: Witness the beauty of cubes and spheres with unique textures rotating continuously in the vastness of VR space.
- **Full-screen VR**: Dive into a full-screen VR experience with a single click.
- **Loading Experience**: Ensures assets load smoothly with an integrated loading screen.

## Configuration

You can customize the VR scene using the `config` object:

```javascript
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
```

## Usage

1. **Integration**: To embed this in your project, ensure you have the required assets and then incorporate the provided JS code.
2. **Textures**: These are your handcrafted geometric designs. Store them with the IDs in the format `#textureX` where X ranges from 0 to 33.
3. **HTML Structure**: The code expects elements with specific IDs and classes. Ensure the required scene, sky, and loading screen elements are present in your HTML.
4. **Styling & Assets**: This README doesn't detail CSS or other assets. Style them for the desired VR experience.
5. **Execution**: Open your browser, wear your VR headset if available, and immerse yourself!

## Contribution

Forks, enhancements, and pull requests are welcome. Let's take this VR journey further together!

## License

MIT

---

Designed with :heart: by [AnodeGrindYo](https://codepen.io/Adr_G) from years of calming geometric artistry.
