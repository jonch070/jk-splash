// Typography Controls
// Handles alignment dots and uppercase toggle

// Initialize typography controls
function initTypographyControls() {
    initAlignmentDots();
    initUppercaseToggle();
}

// Initialize alignment dots (L, C, R, J)
function initAlignmentDots() {
    const dots = document.querySelectorAll('.alignment-dot[data-align]');

    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const align = dot.dataset.align;

            // Update UI - remove active from all, add to clicked
            dots.forEach(d => d.classList.remove('active'));
            dot.classList.add('active');

            // Update PARAMS
            const layer = PARAMS.typography.layers[PARAMS.typography.selectedLayer];
            if (layer) {
                layer.textAlign = align;
                layer.alignH = align === 'justify' ? 'left' : align; // justify uses left for base alignment
            }

            // Redraw
            if (window.optimizedRedraw) {
                window.optimizedRedraw();
            }
        });
    });
}

// Initialize uppercase toggle (AA dot)
function initUppercaseToggle() {
    const uppercaseDot = document.getElementById('uppercase-dot');
    if (!uppercaseDot) return;

    // Set initial state from PARAMS
    const layer = PARAMS.typography.layers[PARAMS.typography.selectedLayer];
    if (layer && layer.uppercase) {
        uppercaseDot.classList.add('active');
    }

    uppercaseDot.addEventListener('click', () => {
        const layer = PARAMS.typography.layers[PARAMS.typography.selectedLayer];
        if (!layer) return;

        layer.uppercase = !layer.uppercase;

        if (layer.uppercase) {
            uppercaseDot.classList.add('active');
        } else {
            uppercaseDot.classList.remove('active');
        }

        if (window.optimizedRedraw) {
            window.optimizedRedraw();
        }
    });
}

// Make init function globally available
window.initTypographyControls = initTypographyControls;

