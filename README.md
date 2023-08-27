# FBX Loader for babylon js

This repo is a browser port of the [Babylonjs Editor FBXLoader](https://github.com/BabylonJS/Editor/tree/master/src/renderer/editor/loaders/fbx)

# Update log (by GoatGirl98)

### Added

a testcase of glb animation

### Todo

transfer to fbx, add `public async loadAssetContainer` to enable `ImportAnimationsAsync` and etc.

# Installation

### CDN

[https://metameta-libs.s3.eu-central-1.amazonaws.com/FBXLoader.js](https://metameta-libs.s3.eu-central-1.amazonaws.com/FBXLoader.js)

After the import you can access to FBXLoaderModule global object and use it like this

```bash
BABYLON.SceneLoader.RegisterPlugin(new FBXLoaderModule.FBXLoader());

...

await BABYLON.SceneLoader.ImportMeshAsync(null, 'path/to', 'filename.fbx', scene);
```

### NPM

To install va npm package manager use:

```bash
npm i babylon-fbx-loader
```

This will allow you to import it using:

```bash
import { FBXLoader } from 'babylon-fbx-loader';
import { SceneLoader } from "@babylonjs/core";

SceneLoader.RegisterPlugin(new FBXLoader());

...

await SceneLoader.ImportMeshAsync(null, 'path/to', 'filename.fbx', scene);
```

### YARN

Additionally, you can install with yarn:

```bash
yarn add babylon-fbx-loader
```

# Known issues:
* mainly supports geometries, bones
* partially supports materials (only standard material and no video support at the moment)
* issues with animations
* no support of morph targets
* no support of cameras and lights

The loader is in the pretty raw state, but if you need static meshes rather than dynamic it can give pretty decent results:

<img src="https://metameta-libs.s3.eu-central-1.amazonaws.com/carriage.png" alt="Carriage image" width="300"/>
<img src="https://metameta-libs.s3.eu-central-1.amazonaws.com/formula-1.png" alt="Formula 1 image" width="300"/>
