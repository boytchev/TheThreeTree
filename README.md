# The Tree of Three.js classes

A tree-like visualization of Three.js classes and its addons. Click on the tree to view it live:

[<img src="https://boytchev.github.io/TheThreeTree/images/all.png">](https://boytchev.github.io/TheThreeTree/src)





### How to use

Use mouse or touch to pan the tree or zoom it in/out.

Add URL parameter `name=<string>` mark all classes with the
given string in their names; or `name=<string>*` to also
mark their child classes. String matching is case insensitive.



### Examples

Show a close-up of the Three.js class root:

[https://boytchev.github.io/TheThreeTree/src](https://boytchev.github.io/TheThreeTree/src)

Show a close-up of the `Material` class and mark all other classes that has `material` in their names:

[https://boytchev.github.io/TheThreeTree/src?name=material](https://boytchev.github.io/TheThreeTree/src?name=material)

Mark all `addons` branches and show a close-up of the root of the largest one:

[https://boytchev.github.io/TheThreeTree/src?name=addons*](https://boytchev.github.io/TheThreeTree/src?name=addons*)



### Legend


| Image | Description |
| --- | --- |
| <img src="https://boytchev.github.io/TheThreeTree/images/node-core.png" height="80" style="border: solid 1px gray"> &nbsp; <img src="https://boytchev.github.io/TheThreeTree/images/node-addon.png" height="80" style="border: solid 1px gray"> | A class from Three.js (black) or its addons (blue) |
| <img src="https://boytchev.github.io/TheThreeTree/images/node-core-undocumented.png" height="80" style="border: solid 1px gray"> &nbsp; <img src="https://boytchev.github.io/TheThreeTree/images/node-addon-undocumented.png" height="80" style="border: solid 1px gray"> | A class without documentation in a dedicated webpage |
| <img src="https://boytchev.github.io/TheThreeTree/images/node-important.png" height="80" style="border: solid 1px gray"> | An important or highly used class |
| <img src="https://boytchev.github.io/TheThreeTree/images/node-folder-file.png" height="80" style="border: solid 1px gray"> | A folder or a Javascript file containing classes |


### Disclamers

<small>
* This is a work in progress
* No guarantee that all classes are corectly extracted
* Performance issues when viewing from a mobile device
* The tree alignment is neither the best, nor the cutest
</small>