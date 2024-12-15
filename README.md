# TheThreeTree

A tree-like visualization of Three.js classes.

Beware, this is a work-in-progress.

[current state](https://boytchev.github.io/TheThreeTree/src)

## How to use

Use mouse or touch to pan the tree or zoom it in/out.

Add URL parameter `name=<string>` mark all classes with the
given string in their names; or `name=<string>*` to also
mark their child classes. String matching is case insensitive.

Example:

[https://boytchev.github.io/TheThreeTree/src?name=material](https://boytchev.github.io/TheThreeTree/src?name=material)

[https://boytchev.github.io/TheThreeTree/src?name=node*](https://boytchev.github.io/TheThreeTree/src?name=node)

## Legend


| Image | Description |
| --- | --- |
| <img src="https://boytchev.github.io/TheThreeTree/images/node-core.png" height="100"> <img src="https://boytchev.github.io/TheThreeTree/images/node-addon.png" height="100"> | A class from Three.js (black) or its addons (blue) |
| <img src="https://boytchev.github.io/TheThreeTree/images/node-core-undocumented.png" height="100"> <img src="https://boytchev.github.io/TheThreeTree/images/node-addon-undocumented.png" height="100"> | A class without documentation in a dedicated webpage |
| <img src="https://boytchev.github.io/TheThreeTree/images/node-important.png" height="100"> | An important or highly used class |
| <img src="https://boytchev.github.io/TheThreeTree/images/node-folder-file.png" height="100"> | A folder or a Javascript file containing classes |