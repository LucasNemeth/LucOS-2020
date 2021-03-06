$(function() {
    $('#text').on('keyup', function () {
        let content = $(this).val();
        setTitle(content);
        setLineNumber(content);
    });

    $('#text').on('focus click', function () {
        let content = $(this).val();
        setLineNumber(content);
    });
});

function setTitle(content) {
    var lines = content.split('\n');

    for (i = 0; i < lines.length; i++) {
        if (lines[i].trim().length > 0) {
            document.title = lines[i];
            return 0;
        }
    }

    document.title = "Notepad";
}

function setLineNumber(content) {
    var lineNumber = content.substr(0, $('#text').prop('selectionStart')).split("\n").length;
    $('#lineNumber').html(lineNumber);
}


currentTime = () => {
    let date = new Date();
    let day = date.getDay();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let midday = "AM";
    // console.log(sec)
    midday = (hour >= 12) ? "PM" : "AM";

    hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12) : hour);
    day = updateTime(day);
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    $(".txt").text(hour + " : " + min + " " + midday);
    let timeOut = setTimeout(function () {
        currentTime()
    }, 1000);


}

 updateTime = (k) => {
    if (k < 10) {
        return "0" + k;
    } else {
        return k;
    }
}

currentTime();

$(function () {
    $(".icon").draggable();
    $(".window").draggable();
});



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

$(".icon").dblclick(function(){
    if ($(this).hasClass("recycle")){
        $(".window-recycle").addClass("active");
    }else if($(this).hasClass("folder")){
        $(".window-folder").addClass("active");
    }else if ($(this).hasClass("website")){
        $(".window-website").addClass("active");
    }else if($(this).hasClass("notes")){
        $(".window-notes").addClass("active");
    }else{
        $(".window-games").addClass("active");
    }
})

$(".close-window").on('click', (function(){
    if($(this).hasClass("recycle")){
        $(".window-recycle").removeClass("active")
    } else if ($(this).hasClass("folder")) {
        $(".window-folder").removeClass("active");
    } else if ($(this).hasClass("website")) {
        $(".window-website").removeClass("active");
    } else if ($(this).hasClass("notes")) {
        $(".window-notes").removeClass("active");
    } else {
        $(".window-games").removeClass("active");
    
    }
}))