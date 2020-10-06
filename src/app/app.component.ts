import {Component, InjectionToken, OnInit} from '@angular/core';
import {FormControl, Validators, FormsModule} from '@angular/forms';
// declare var THREE: any;
import * as THREE from 'three';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  MAT_INPUT_VALUE_ACCESSOR: InjectionToken<{ value: any; }>;
  title = 'kalkulator';
  active_type = null;

  active_type_3 = null;
  form_type_0 = {
    type: null,
    depthPlate: 0.5,
    diametr: 500,
    wPlate: 500,
    hPlate: 600,
    lPlate: 6,
    countS: 3,
    outputH: 100,
    isHeater: false,
    isVibration: false,
  };
  depthPlate = [0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.9, 1, 1.1, 1.2, 1.5, 2, 2.5];
  rateControl_wPlate = new FormControl('', [Validators.max(2000), Validators.min(50)]);
  rateControl_diametr = new FormControl('', [Validators.max(2000), Validators.min(50)]);
  rateControl_hPlate = new FormControl('', [Validators.max(2000), Validators.min(50)]);
  rateControl_lPlate = new FormControl('', [Validators.max(5000), Validators.min(1)]);
  rateControl_countS = new FormControl('', [Validators.max(100), Validators.min(1)]);
  rateControl_outputH = new FormControl('', [Validators.max(5000), Validators.min(0)]);
  constructor() {

  }
  ngOnInit() {
    this.init();
  }
  setValueIs(v, e){
    if (e.checked){
      v = true;
    }else{
      v = false;
    }
  }
  init(){
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000);

    let renderer = new THREE.WebGLRenderer();

    renderer.setSize( 700, 500 );
    renderer.setClearColor(new THREE.Color(0xEEEEEE));
    renderer.shadowMapEnabled = true;
    let canvas = document.getElementById('canvas1');
    canvas.appendChild(renderer.domElement);

    var spotLight = new THREE.SpotLight( 0xffffff );
    spotLight.position.set( -40, 60, -10 );
    spotLight.castShadow = true;
    scene.add(spotLight );

    var planeGeometry = new THREE.PlaneGeometry(60,20);
    var planeMaterial = new THREE.MeshLambertMaterial(
      {color: 0xffffff});
    var plane = new THREE.Mesh(planeGeometry,planeMaterial);
    plane.rotation.x=-0.5*Math.PI;
    plane.position.x = 15;
    plane.position.y = 0;
    plane.position.z = 0;
    plane.receiveShadow = true;
    scene.add(plane);

    var cubeGeometry = new THREE.BoxBufferGeometry(4,4,4);
    var cubeMaterial = new THREE.MeshLambertMaterial(
      {color: 0xff0000});
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.x = -4;
    cube.position.y = 3;
    cube.position.z = 0;
    cube.castShadow = true;
    scene.add(cube);
    var sphereGeometry = new THREE.SphereGeometry(4,20,20);
    var sphereMaterial = new THREE.MeshLambertMaterial(
      {color: 0x7777ff});
    var sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
    sphere.position.x = 20;
    sphere.position.y = 4;
    sphere.position.z = 2;
    sphere.castShadow = true;
    scene.add(sphere);
    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 30;
    camera.lookAt(scene.position);
    let renderScene = function() {
      requestAnimationFrame( renderScene );
      renderer.render( scene, camera );
    };

    renderScene()
  }
}
