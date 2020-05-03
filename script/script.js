$(function () {
    $("#icon").draggable();
});
$(function () {
    $("#icon2").draggable();
});
$(function () {
    $("#icon3").draggable();
});
$(function () {
    $("#icon4").draggable();
});
$(function () {
    $("#icon5").draggable();
});


function startTime() {
    let today = new Date();
    const h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(100, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry();
var material = new THREE.MeshBasicMaterial({ color: 0x19afb4});
var color = new THREE.Color('skyblue');
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

var animate = function () {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.06;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
};

animate();