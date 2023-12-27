document.addEventListener("DOMContentLoaded", function () {
  // Get the canvas
  var canvas = document.getElementById("renderCanvas");

  // Create Babylon.js engine
  var engine = new BABYLON.Engine(canvas, true);

  // Create a scene
  var scene = new BABYLON.Scene(engine);

  // Create a camera
  var camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 5, -10), scene);
  camera.setTarget(BABYLON.Vector3.Zero());

  // Create a light
  var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

  // Create a sphere
  var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2 }, scene);

  // Run the render loop
  engine.runRenderLoop(function () {
      scene.render();
  });

  // Handle window resize
  window.addEventListener("resize", function () {
      engine.resize();
  });
});