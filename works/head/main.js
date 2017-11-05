import $ from "jquery"
import * as THREE from 'three'
import OBJMTLLoader from 'obj-mtl-loader'
import * as d3 from 'd3'



$(function () {
    // create scene
    const scene = new THREE.Scene()
    
    // create camera and set it in front of the center of the scene
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.set(0, 0, 200)
    camera.lookAt(scene.position)

    // create webglrenderer
    const renderer = new THREE.WebGLRenderer()
    renderer.setClearColor(0xeeeeee)
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.shadowMap.enabled = true

    // add an ambientLight
    const ambientLight = new THREE.AmbientLight(0xffffff)
    scene.add(ambientLight)

    const mapTexture = new THREE.ImageUtils.loadTexture('../../resource/map.png')
    const planeGeo = new THREE.PlaneGeometry(100, 100)
    const planeMat = new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        color: 0xffffff,
        map: mapTexture
    })
    const plane = new THREE.Mesh(planeGeo, planeMat)
    scene.add(plane)



    // render the scene
    const render = () => {
        requestAnimationFrame(render)
        renderer.render(scene, camera)
    }

    $('.canvas').append(renderer.domElement)

    render()

})

