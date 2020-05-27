import SomeComponent from "./Widget.svelte";

// do we need to make this global?
window.MyComponent = options => new SomeComponent(options);
