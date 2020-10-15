import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {DataService} from '../-data.service';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import * as OBJLoader from 'three-obj-loader';
OBJLoader(THREE);


@Component({
  selector: 'app-type0',
  templateUrl: './type0.component.html',
  styleUrls: ['./type0.component.css']
})
export class Type0Component implements OnInit {
  active_type_0 = null
  scene = new THREE.Scene();
  THREE
  ventilation = null
  form_type_0 = {

    type: null,
    depthPlate: 0.5,
    diametr: 500,
    wPlate: 500,
    hPlate: 500,
    lPlate: 5,
    countS: 2,
    outputH: 100,
    isHeater: false,
    isVibration: false,
    directionFixture: 0,
    materialAttachment: 0,
    materialExecution: 0,
    mountingOptions:0,
    materialAttachmentFerm:{
      type:0,
      type1:0,
      type1_val:0,
    }
  };

  rateControl_wPlate = new FormControl('', [Validators.max(2000), Validators.min(50)]);
  rateControl_diametr = new FormControl('', [Validators.max(2000), Validators.min(50)]);
  rateControl_hPlate = new FormControl('', [Validators.max(2000), Validators.min(50)]);
  rateControl_lPlate = new FormControl('', [Validators.max(5000), Validators.min(1)]);
  rateControl_countS = new FormControl('', [Validators.max(100), Validators.min(1)]);
  rateControl_outputH = new FormControl('', [Validators.max(5000), Validators.min(0)]);
  constructor(public dS:DataService) { }
  setValueIs(v, e){
    if (e.checked){
      v = true;
    }else{
      v = false;
    }
  }
  ngOnInit(): void {
    this.init()
  }
  init(){
    let canvas = document.getElementById('canvas1');


    this.scene.background = new THREE.Color('black');
    const fov = 45;
    const aspect =  window.innerWidth / window.innerHeight;  // the canvas default
    const near = 0.1;
    const far = 1000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(30, 25, -10);

    let renderer = new THREE.WebGLRenderer();
    let controls = new OrbitControls( camera, renderer.domElement );
    controls.enableDamping = false
    controls.dampingFactor = 1
    // controls.enableZoom = false
    renderer.setSize( 700, 500 );
    renderer.setClearColor(new THREE.Color(0xEEEEEE));
    renderer.shadowMapEnabled = true;

    canvas.appendChild(renderer.domElement);
    const color = 0xFFFFFF;
    const intensity = 1;
    const light = new THREE.DirectionalLight(color, intensity);
    light.position.set(450, 1000, 500);
    light.target.position.set(-5, 50, 50);
    light.castShadow = true;
    this.scene.add(light);
    this.scene.add(light.target);

    const planeSize = 400;

    const loader = new THREE.TextureLoader();
    const texture = loader.load('assets/img/145769.jpg');
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.magFilter = THREE.NearestFilter;
    const repeats = planeSize / 2;
    texture.repeat.set(repeats, repeats);

    const planeGeo = new THREE.PlaneBufferGeometry(planeSize, planeSize);
    const planeMat = new THREE.MeshPhongMaterial({
      map: texture,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(planeGeo, planeMat);
    mesh.rotation.x = Math.PI * -.5;
    this.scene.add(mesh);
    let someTexture =  loader.load('assets/img/brick_31.jpg')
    someTexture.repeat.set(4,8);
    someTexture.wrapT = THREE.RepeatWrapping;
    someTexture.wrapS = THREE.RepeatWrapping;
    var material = new THREE.MeshBasicMaterial({
      map: someTexture
    });

    var geometryLateral = new THREE.BoxGeometry(0.2, 25, 30);
    var wall1 = new THREE.Mesh(geometryLateral, material);

    wall1.rotateY(Math.PI/2)
    wall1.position.z = 2
    this.scene.add(wall1);

    this.THREE = THREE;
    const objLoader = new this.THREE.OBJLoader();

    objLoader.load('assets/obj/3D_P.obj', (object) => {
      // object.x = 1000
      // object.y = 0
      // object.width = 5
      object.position.x = 500
      object.position.z = 0
      object.position.y = 500
      console.log('object',object)
      object.traverse( ( child ) =>{



          // child.material.map = texture;



      });

      object.position.y =  5;
      this.scene.add( object );
    });
    // this.updateCylinder()
    let renderScene = () =>{
      requestAnimationFrame( renderScene );

      if (camera.position.y<1){camera.position.y = 1}
      // cylinder.parameters.radialSegments = this.active_type_0==0?4:20
      renderer.render( this.scene, camera );

      // console.log(camera.position.x,camera.position.y,camera.position.z)
    };

    renderScene()
  }
  updateCylinder(){
    this.scene.remove(this.ventilation)
    const loader = new THREE.TextureLoader();
    var geometry = new THREE.CylinderGeometry(2, 2, 20, this.active_type_0==0?4:20);
    var material = new THREE.MeshBasicMaterial({
      map: loader.load('https://static6.depositphotos.com/1020917/658/i/950/depositphotos_6587257-stock-photo-seamless-photo-realistic-metal-texture.jpg'),
    });
    var cylinder = new THREE.Mesh(geometry, material);
    cylinder.position.y = 10
    cylinder.rotateZ(Math.PI/2)
    cylinder.rotateY(Math.PI/4)
    this.ventilation = cylinder
    this.scene.add(this.ventilation);
  }
}
