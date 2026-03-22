document.addEventListener("DOMContentLoaded", function(){

function showMessage(){
alert("Спасибо за интерес к моему портфолио!");
}

const counters = document.querySelectorAll(".number");

counters.forEach(counter => {

counter.innerText = "0";

const updateCounter = () => {

const target = +counter.getAttribute("data-target");

const current = +counter.innerText;

const increment = target / 100;

if(current < target){

counter.innerText = Math.ceil(current + increment);

setTimeout(updateCounter, 20);

}else{

counter.innerText = target;

}

};

updateCounter();

});

});

function showMessage(){
alert("Спасибо за интерес к моему портфолио!");
}

document.addEventListener("DOMContentLoaded", function(){

const counters = document.querySelectorAll(".number");

counters.forEach(counter => {

counter.innerText = "0";

const updateCounter = () => {

const target = +counter.getAttribute("data-target");

const current = +counter.innerText;

const increment = target / 100;

if(current < target){

counter.innerText = Math.ceil(current + increment);

setTimeout(updateCounter, 20);

}else{

counter.innerText = target;

}

};

updateCounter();

});

});

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

});

document.querySelectorAll(".fade-in").forEach(section => {

observer.observe(section);

});

function toggleMenu(){

let menu = document.getElementById("sidebar");
let button = document.getElementById("menuButton");

menu.classList.toggle("active");

if(menu.classList.contains("active")){
button.innerHTML = "✖";
}else{
button.innerHTML = "☰";
}

}

document.addEventListener("DOMContentLoaded", function(){

// тут твои счетчики
// тут анимации

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
75,
window.innerWidth / 500,
0.1,
1000
);

const renderer = new THREE.WebGLRenderer({antialias:true});

renderer.setSize(window.innerWidth,500);

document.getElementById("car-container").appendChild(renderer.domElement);

const light = new THREE.HemisphereLight(0xffffff,0x444444,2);
scene.add(light);

const loader = new THREE.GLTFLoader();

loader.load(
'models/ferrari_sf90_spider.glb',
function(gltf){
scene.add(gltf.scene);
gltf.scene.scale.set(2,2,2);
}
);

camera.position.set(0,2,5);

const controls = new THREE.OrbitControls(camera,renderer.domElement);

function animate(){
requestAnimationFrame(animate);
controls.update();
renderer.render(scene,camera);
}

animate();

});