import * as adapter from '@astrojs/netlify/netlify-functions.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_b5f7c763.mjs';
import 'preact';
import 'preact-render-to-string';
import 'cookie';
import 'kleur/colors';
import 'string-width';
import '@astrojs/internal-helpers/path';
import './chunks/astro_fbdab50d.mjs';
import 'clsx';
import 'html-escaper';
import 'mime';
import 'path-to-regexp';

const _page0  = () => import('./chunks/image-endpoint_7ded47cd.mjs');
const _page1  = () => import('./chunks/index_d0ecdced.mjs');
const _page2  = () => import('./chunks/rss_2cd8897b.mjs');
const _page3  = () => import('./chunks/index_612df5bf.mjs');
const _page4  = () => import('./chunks/about_3524a3f4.mjs');
const _page5  = () => import('./chunks/post-1_38b276f2.mjs');
const _page6  = () => import('./chunks/post-2_c905e082.mjs');
const _page7  = () => import('./chunks/post-3_dc188934.mjs');
const _page8  = () => import('./chunks/post-4_cbb355ad.mjs');
const _page9  = () => import('./chunks/blog_fcf09e8a.mjs');
const _page10  = () => import('./chunks/index_f166b16e.mjs');
const _page11  = () => import('./chunks/_tag__f27e7917.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/image-endpoint.js", _page0],["src/pages/index.astro", _page1],["src/pages/rss.xml.js", _page2],["src/pages/folder/index.astro", _page3],["src/pages/about.astro", _page4],["src/pages/posts/post-1.md", _page5],["src/pages/posts/post-2.md", _page6],["src/pages/posts/post-3.md", _page7],["src/pages/posts/post-4.md", _page8],["src/pages/blog.astro", _page9],["src/pages/tags/index.astro", _page10],["src/pages/tags/[tag].astro", _page11]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {};

const _exports = adapter.createExports(_manifest, _args);
const handler = _exports['handler'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { handler, pageMap };
