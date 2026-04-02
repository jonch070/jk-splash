export class UIManager {
    constructor(app) {
        this.app = app;
    }

    init() {
        this.initSliders();
        this.initFileInput();
        this.initExportPopup();
        console.log('✅ UI Managers initialized');
    }

    initFileInput() {
        const fileInput = document.getElementById('loadModel');
        const modelName = document.getElementById('modelName');

        if (fileInput) {
            fileInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (file && this.app) {
                    const url = URL.createObjectURL(file);
                    this.app.loadCustomModel(url, file.name);
                    if (modelName) {
                        modelName.textContent = file.name;
                    }
                }
            });
        }
    }

    initSliders() {
        const sliders = document.querySelectorAll('input[type="range"]');

        sliders.forEach(slider => {
            const valueDisplay = slider.nextElementSibling;

            // Initialize display value
            if (valueDisplay) {
                valueDisplay.textContent = slider.value;
            }

            slider.addEventListener('input', (e) => {
                const target = e.target;
                if (valueDisplay) {
                    valueDisplay.textContent = target.value;
                }

                if (!this.app) return;

                const val = parseFloat(target.value);
                const id = target.id;

                switch (id) {
                    case 'lateralScale':
                        this.app.updateLateralScale(val / 100);
                        break;
                    case 'rotationX':
                        this.app.updateRotation('x', val);
                        break;
                    case 'rotationY':
                        this.app.updateRotation('y', val);
                        break;
                    case 'rotationZ':
                        this.app.updateRotation('z', val);
                        break;
                    case 'zoom':
                        this.app.updateZoom(val);
                        break;
                    case 'peakCount':
                        this.app.updatePeakCount(parseInt(val));
                        break;
                    case 'loadModel':
                        break;
                    case 'roughness':
                        this.app.updateDisplacement('roughness', val);
                        break;
                    case 'displacementScale':
                        this.app.updateDisplacement('scale', val);
                        break;
                    case 'detail':
                        this.app.updateDisplacement('detail', val);
                        break;
                    case 'contrast':
                        this.app.updatePostProcessing('contrast', val);
                        break;
                    case 'blur':
                        this.app.updatePostProcessing('blur', val);
                        break;
                    case 'threshold':
                        this.app.updatePostProcessing('threshold', val);
                        break;
                }
            });
        });
    }

    initExportPopup() {
        const exportBtn = document.getElementById('exportBtn');
        const exportOverlay = document.getElementById('exportOverlay');
        const exportPNG = document.getElementById('exportPNG');
        const closeExportPopup = document.getElementById('closeExportPopup');

        if (exportBtn) {
            exportBtn.addEventListener('click', () => {
                if (exportOverlay) exportOverlay.style.display = 'flex';
            });
        }

        if (exportPNG) {
            exportPNG.addEventListener('click', () => {
                if (this.app) this.app.exportPNG();
                if (exportOverlay) exportOverlay.style.display = 'none';
            });
        }

        if (closeExportPopup) {
            closeExportPopup.addEventListener('click', () => {
                if (exportOverlay) exportOverlay.style.display = 'none';
            });
        }

        if (exportOverlay) {
            exportOverlay.addEventListener('click', (e) => {
                if (e.target === exportOverlay) {
                    exportOverlay.style.display = 'none';
                }
            });
        }
    }
}
