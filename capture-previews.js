// One-time screenshot capture for all linked nodes
// Run: npm install playwright && npx playwright install chromium && node capture-previews.js
// Re-run any time you want fresher shots.

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const PREVIEWS_DIR = path.join(__dirname, 'previews');
if (!fs.existsSync(PREVIEWS_DIR)) fs.mkdirSync(PREVIEWS_DIR);

// Must match the toPreviewPath() function in index.html
function toPreviewPath(key) {
  return key.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') + '.jpg';
}

// Keys must exactly match the node names in graph.md
const targets = [
  { key: 'Narwhal Article',        url: 'https://thenarwhal.ca/protecting-quiet-spaces-natural-sounds/' },
  { key: 'Quiet Parks International', url: 'https://www.quietparks.org/team' },
  { key: 'Hunt for the Oldest DNA',url: 'https://play.reelcrafter.com/COSlb0PsRdWZ8v-mTQevfw' },
  { key: 'Film Score Reel',        url: 'https://emp.disco.ac/playlist-new/18442280?date=20240821&user_id=188042&signature=Hd2IqQansjJK2Iu9NEdQ12Vm8ts:IWvvdJ3Q' },
  { key: 'Insta',                  url: 'https://www.instagram.com/jonathankawchuk/' },
  { key: 'Bandcamp',               url: 'https://jonathankawchuk.bandcamp.com/' },
  { key: 'IMDB',                   url: 'https://www.imdb.com/name/nm5129258/' },
  { key: 'Everywhen',              url: 'https://jonathankawchuk.com/everywhen' },
  { key: 'North',                  url: 'https://jonathankawchuk.com/north' },
];

const VIEWPORT = { width: 1280, height: 800 };

async function capture(browser, { key, url }) {
  const file = toPreviewPath(key);
  const page = await browser.newPage();
  await page.setViewportSize(VIEWPORT);
  try {
    console.log(`Capturing "${key}" → previews/${file}`);
    await page.goto(url, { waitUntil: 'networkidle', timeout: 20000 });

    // Attempt to dismiss cookie banners
    await page.evaluate(() => {
      const selectors = [
        '[id*="cookie"] button', '[class*="cookie"] button',
        '[id*="consent"] button', '[class*="consent"] button',
        '[aria-label*="Accept"]', '[aria-label*="accept"]',
      ];
      for (const s of selectors) {
        const el = document.querySelector(s);
        if (el) { el.click(); break; }
      }
    });
    await page.waitForTimeout(800);

    await page.screenshot({
      path: path.join(PREVIEWS_DIR, file),
      clip: { x: 0, y: 0, width: VIEWPORT.width, height: VIEWPORT.height },
      type: 'jpeg',
      quality: 85,
    });
    console.log(`  ✓ done`);
  } catch (err) {
    console.warn(`  ✗ failed: ${err.message}`);
  } finally {
    await page.close();
  }
}

(async () => {
  const browser = await chromium.launch();
  for (const t of targets) await capture(browser, t);
  await browser.close();
  console.log('\nAll done. Run: bash deploy.sh');
})();
