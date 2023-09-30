import { c as createAstro, d as createComponent, r as renderTemplate, f as addAttribute, g as renderHead, e as renderComponent } from '../astro_fbdab50d.mjs';
import { a as $$BlogPost, $ as $$BaseLayout } from './_tag__b0ea9be4.mjs';
import 'clsx';
import 'html-escaper';
/* empty css                            */
const $$Astro = createAstro("https://example.com");
const $$Blog = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Blog;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"./posts/post-1.md": () => import('./post-1_8b0f115a.mjs').then(n => n.p),"./posts/post-2.md": () => import('./post-2_5f9cbfd2.mjs'),"./posts/post-3.md": () => import('./post-3_0a8d40b9.mjs'),"./posts/post-4.md": () => import('./post-4_1c258af5.mjs')}), () => "../pages/posts/*.md");
  const pageTitle = "Astro Blog";
  return renderTemplate`<html lang="en"><head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head><body>${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate`<p>This is where I will post about my journey learning Astro.</p><ul>${allPosts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": post.url, "title": post.frontmatter.title })}`)}</ul>` })}</body></html>`;
}, "C:/Users/Propietario/Desktop/PC/Prog22s/test-zone-astro/src/pages/blog.astro", void 0);

const $$file = "C:/Users/Propietario/Desktop/PC/Prog22s/test-zone-astro/src/pages/blog.astro";
const $$url = "/blog";

export { $$Blog as default, $$file as file, $$url as url };
