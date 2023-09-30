import rss, { pagesGlobToRssItems } from '@astrojs/rss';

async function GET(context) {
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: context.site,
    items: await pagesGlobToRssItems(/* #__PURE__ */ Object.assign({"./posts/post-1.md": () => import('./post-1_8b0f115a.mjs').then(n => n.p),"./posts/post-2.md": () => import('./post-2_5f9cbfd2.mjs'),"./posts/post-3.md": () => import('./post-3_0a8d40b9.mjs'),"./posts/post-4.md": () => import('./post-4_1c258af5.mjs')})),
    customData: `<language>en-us</language>`
  });
}

export { GET };
