# firefox-addon-garmin

Firefox Add-on to bridge Garmin Connect with Trail-Passion.

Built with **TypeScript**, **React**, and **Rspack**.

## Prerequisites

- [Node.js](https://nodejs.org/) ≥ 18
- npm

## Install dependencies

```bash
npm install
```

## Build

```bash
npm run build        # production build → dist/
npm start            # development build with watch mode
```

## Debug the Add-on

### Firefox

1. Run `npm start` to build and watch for changes.
2. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`.
3. Click **"Load Temporary Add-on…"**.
4. Select the file `dist/firefox/manifest.json` from this project.
5. The add-on is now loaded. Click the extension icon in the toolbar to open the popup.
6. To see background script logs, click **"Inspect"** next to the extension on the `about:debugging` page.
7. When you edit source files, rspack rebuilds automatically. Click **"Reload"** on the `about:debugging` page to pick up changes.

### Chrome

1. Run `npm start` to build and watch for changes.
2. Open Chrome and navigate to `chrome://extensions`.
3. Enable **"Developer mode"** (top-right toggle).
4. Click **"Load unpacked"** and select the `dist/chrome` folder.
5. The extension is now loaded. Click the extension icon in the toolbar to open the popup.
6. To see background script logs, click **"Inspect views: service worker"** on the extension card.
7. When you edit source files, rspack rebuilds automatically. Click the reload icon on the extension card to pick up changes.

## Install the Add-on permanently

### Firefox

Temporary add-ons are removed when Firefox restarts. To install permanently:

1. Build

   ```bash
   npm run package
   ```

   This builds the project and creates `garmin-trail-passion.xpi` in the project root.
2. Deploy
    - **Option A — Signed distribution (recommended):**
     Submit the `.xpi` to [addons.mozilla.org](https://addons.mozilla.org/) for signing, then install the signed `.xpi` in Firefox.
    - **Option B — Unsigned (development only):**
     In Firefox **Developer Edition** or **Nightly**, set `xpinstall.signatures.required` to `false` in `about:config`, then drag-and-drop the `.xpi` into Firefox or use _File → Open File_.

### Chrome

1. Build

   ```bash
   npm run package
   ```

   This builds the project and creates `garmin-trail-passion.crx` in the project root.
2. Deploy
    - **Option A — Chrome Web Store (recommended):**
     Upload the `.crx` to the [Chrome Web Store](https://chrome.google.com/webstore/devconsole) for distribution.
    - **Option B — Unpacked (development only):**
     Load the `dist/chrome` folder as an unpacked extension via `chrome://extensions` with Developer mode enabled.
