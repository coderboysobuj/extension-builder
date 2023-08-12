import type { Browser } from 'webextension-polyfill';

declare global {
  const BUILD_TARGET: "chromium" | "firefox" | "web";
  const DEV: boolean;
  const VERSION: string;
  const browser: Browser
}
