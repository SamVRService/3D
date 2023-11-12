var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,320/240,1,500);
camera.position.set( 0,2,2 );
camera.lookAt( scene.position );
var lightIntensity = 1;
var lightDistance = 10;
var light = new THREE.AmbientLight( 0xFFFFFF, lightIntensity, lightDistance );
light.position.set( 0, 5, 0 );
scene.add( light );
var grid = new THREE.GridHelper(10,10);
scene.add( grid );
var renderer = new THREE.WebGLRenderer({});
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( 320,240 );
renderer.domElement.style.margin = '0 auto';
renderer.domElement.style.display = 'block';
renderer.domElement.style.backgroundColor = '#dddddd';
$(document.body).append(renderer.domElement);
function update(){
  renderer.render( scene, camera );
  requestAnimationFrame( update );
}
update();
mtl_loader = new THREE.MTLLoader();
mtl_loader.load("assets/doughnut.mtl",
    function(materials) {
        materials.preload()
            var obj_loader = new THREE.OBJLoader();
            obj_loader.setMaterials(materials)
            obj_loader.load("assets/doughnut.obj",
            function(object) {
                let mesh = object.children[0]
                scene.add(mesh);
            }, null, function(error) {alert(error)}
        )
    }, null, function(error) {alert(error)}
);
