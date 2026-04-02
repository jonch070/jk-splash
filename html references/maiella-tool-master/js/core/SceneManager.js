import * as THREE from 'three';

export class SceneManager {
    constructor(app) {
        this.app = app;
    }

    setupPreview() {
        const canvas = document.getElementById('canvas-preview');
        if (!canvas) return;

        this.app.scenePreview = new THREE.Scene();
        this.app.scenePreview.background = new THREE.Color(0x000000);

        const aspect = canvas.clientWidth / canvas.clientHeight;
        this.app.cameraPreview = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000);
        this.app.cameraPreview.position.set(0, 0, 4);
        this.app.cameraPreview.lookAt(0, 0, 0);

        this.app.rendererPreview = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
        this.app.rendererPreview.setSize(canvas.clientWidth, canvas.clientHeight);
        // Use pixelRatio 1 to match CSS container size exactly
        this.app.rendererPreview.setPixelRatio(1);

        // Initial sphere creation is handled by App calling SphereGenerator, 
        // but we need to ensure lights are added.

        const lightTop = new THREE.DirectionalLight(0xffffff, 1.2);
        lightTop.position.set(0, 5, 3);
        this.app.scenePreview.add(lightTop);

        const lightSide = new THREE.DirectionalLight(0xffffff, 0.8);
        lightSide.position.set(-3, 2, 2);
        this.app.scenePreview.add(lightSide);

        const lightFill = new THREE.DirectionalLight(0xffffff, 0.3);
        lightFill.position.set(2, -2, -2);
        this.app.scenePreview.add(lightFill);

        const ambient = new THREE.AmbientLight(0xffffff, 0.4);
        this.app.scenePreview.add(ambient);
    }

    setupMain() {
        const canvas = document.getElementById('canvas-main');
        if (!canvas) return;

        this.app.sceneMain = new THREE.Scene();
        this.app.sceneMain.background = new THREE.Color(0xffffff);

        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        const aspect = canvas.clientWidth / canvas.clientHeight;
        this.app.cameraMain = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000);
        this.app.cameraMain.position.set(0, 0, 5.5);
        this.app.cameraMain.lookAt(0, 0, 0);

        const offscreenCanvas = document.createElement('canvas');
        offscreenCanvas.width = canvas.width;
        offscreenCanvas.height = canvas.height;

        this.app.rendererMain = new THREE.WebGLRenderer({
            canvas: offscreenCanvas,
            antialias: true,
            preserveDrawingBuffer: true
        });
        this.app.rendererMain.setSize(canvas.clientWidth, canvas.clientHeight);
        // Use pixelRatio 1 for offscreen rendering to match display canvas exactly
        this.app.rendererMain.setPixelRatio(1);

        this.app.tempCanvasMain = offscreenCanvas;
        this.app.displayCanvas = canvas;
        this.app.tempCtx = canvas.getContext('2d', { willReadFrequently: true });

        const lightTop = new THREE.DirectionalLight(0xffffff, 1.5);
        lightTop.position.set(0, 5, 3);
        this.app.sceneMain.add(lightTop);

        const lightSide = new THREE.DirectionalLight(0xffffff, 0.6);
        lightSide.position.set(-3, 2, 2);
        this.app.sceneMain.add(lightSide);

        const ambient = new THREE.AmbientLight(0xffffff, 0.3);
        this.app.sceneMain.add(ambient);
    }

    debounce(fn, wait) {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => fn.apply(this, args), wait);
        };
    }

    onResize() {
        // Guard against zero dimensions during layout transition
        const canvasPreview = document.getElementById('canvas-preview');
        const previewBox = document.querySelector('.preview-box');

        if (previewBox && this.app.cameraPreview && this.app.rendererPreview) {
            // Use parent container dimensions minus border offset
            const width = previewBox.clientWidth - 2;
            const height = previewBox.clientHeight - 2;

            if (width <= 0 || height <= 0) return;

            this.app.cameraPreview.aspect = width / height;
            this.app.cameraPreview.updateProjectionMatrix();
            this.app.rendererPreview.setSize(width, height);

            // Force immediate re-render of preview scene
            if (this.app.scenePreview) {
                this.app.rendererPreview.render(this.app.scenePreview, this.app.cameraPreview);
            }
        }

        if (this.app.displayCanvas && this.app.cameraMain && this.app.rendererMain) {
            const width = this.app.displayCanvas.clientWidth;
            const height = this.app.displayCanvas.clientHeight;

            // Guard against invalid dimensions
            if (width <= 0 || height <= 0) return;

            // Update display canvas dimensions to match CSS size
            this.app.displayCanvas.width = width;
            this.app.displayCanvas.height = height;

            // Update camera aspect ratio
            const aspect = width / height;
            this.app.cameraMain.aspect = aspect;
            this.app.cameraMain.updateProjectionMatrix();

            // Update renderer size
            this.app.rendererMain.setSize(width, height);

            // Update offscreen canvas to match display canvas exactly
            if (this.app.tempCanvasMain) {
                this.app.tempCanvasMain.width = width;
                this.app.tempCanvasMain.height = height;
            }

            // Clear display canvas
            if (this.app.tempCtx) {
                this.app.tempCtx.clearRect(0, 0, width, height);
            }

            // Force immediate re-render of 3D scene and post-processing
            if (this.app.sceneMain && this.app.cameraMain) {
                this.app.rendererMain.render(this.app.sceneMain, this.app.cameraMain);

                // Apply post-processing immediately
                if (this.app.postProcessor) {
                    this.app.postProcessor.applyPostProcessing();
                }
            }
        }
    }
}
