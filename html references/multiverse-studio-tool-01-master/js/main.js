// Main Initialization
// This file initializes all components when the DOM is ready

document.addEventListener('DOMContentLoaded', () => {
    // Initialize interface scaling
    scaleInterface();

    // Initialize sliders
    initSliders();

    // Initialize color buttons
    initColorButtons();

    // Initialize panel middle (tabs and horizontal sliders)
    initPanelMiddle();

    // Initialize typography controls (alignment, width, uppercase)
    if (window.initTypographyControls) {
        initTypographyControls();
    }

    // Initialize text inputs
    initInputs();

    // Show interface after all initializations (prevents flash of uninitialized values)
    requestAnimationFrame(() => {
        const container = document.querySelector('.scalable-container');
        if (container) {
            container.classList.add('ready');
        }
    });
});
