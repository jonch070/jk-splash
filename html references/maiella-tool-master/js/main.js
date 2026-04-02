import { app } from './core/App.js';

const enterBtn = document.getElementById('enterBtn');
const splashOverlay = document.getElementById('splashOverlay');

if (enterBtn && splashOverlay) {
    enterBtn.addEventListener('click', () => {
        splashOverlay.classList.add('hidden');
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                app.init();
            });
        } else {
            app.init();
        }
    });
} else {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            app.init();
        });
    } else {
        app.init();
    }
}
