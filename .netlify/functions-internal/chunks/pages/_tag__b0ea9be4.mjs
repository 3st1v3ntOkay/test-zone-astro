import { c as createAstro, d as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, f as addAttribute, g as renderHead, h as renderSlot } from '../astro_fbdab50d.mjs';
import 'clsx';
/* empty css                            */
const $$Astro$8 = createAstro("https://example.com");
const $$Navigation = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$Navigation;
  return renderTemplate`${maybeRenderHead()}<div class="nav-links"><a href="/">Home</a><a href="/about">About</a><a href="/blog">Blog</a><a href="/tags/">Tags</a></div>`;
}, "C:/Users/Propietario/Desktop/PC/Prog22s/test-zone-astro/src/components/Navigation.astro", void 0);

const $$Astro$7 = createAstro("https://example.com");
const $$Hamburger = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$Hamburger;
  return renderTemplate`${maybeRenderHead()}<div class="hamburger"><span class="line"></span><span class="line"></span><span class="line"></span></div>`;
}, "C:/Users/Propietario/Desktop/PC/Prog22s/test-zone-astro/src/components/Hamburger.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$6 = createAstro("https://example.com");
const $$ThemeIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$ThemeIcon;
  return renderTemplate(_a || (_a = __template(["", '<button id="themeToggle" data-astro-cid-oemx5le4><svg width="30px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-astro-cid-oemx5le4><path class="sun" fill-rule="evenodd" d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z" data-astro-cid-oemx5le4></path><path class="moon" fill-rule="evenodd" d="M16.5 6A10.5 10.5 0 0 1 4.7 16.4 8.5 8.5 0 1 0 16.4 4.7l.1 1.3zm-1.7-2a9 9 0 0 1 .2 2 9 9 0 0 1-11 8.8 9.4 9.4 0 0 1-.8-.3c-.4 0-.8.3-.7.7a10 10 0 0 0 .3.8 10 10 0 0 0 9.2 6 10 10 0 0 0 4-19.2 9.7 9.7 0 0 0-.9-.3c-.3-.1-.7.3-.6.7a9 9 0 0 1 .3.8z" data-astro-cid-oemx5le4></path></svg></button><script>\nconst theme = (() => {\n  if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {\n    return localStorage.getItem("theme");\n  }\n  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {\n    return "dark";\n  }\n  return "light";\n})();\n\nif (theme === "light") {\n  document.documentElement.classList.remove("dark");\n} else {\n  document.documentElement.classList.add("dark");\n}\n\nwindow.localStorage.setItem("theme", theme);\n\nconst handleToggleClick = () => {\n  const element = document.documentElement;\n  element.classList.toggle("dark");\n\n  const isDark = element.classList.contains("dark");\n  localStorage.setItem("theme", isDark ? "dark" : "light");\n};\n\ndocument\n  .getElementById("themeToggle")\n  .addEventListener("click", handleToggleClick);\n<\/script>'])), maybeRenderHead());
}, "C:/Users/Propietario/Desktop/PC/Prog22s/test-zone-astro/src/components/ThemeIcon.astro", void 0);

const $$Astro$5 = createAstro("https://example.com");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header><nav>${renderComponent($$result, "ThemeIcon", $$ThemeIcon, {})}${renderComponent($$result, "Hamburger", $$Hamburger, {}, { "default": ($$result2) => renderTemplate`${renderComponent($$result2, "Navigation", $$Navigation, {})}` })}</nav></header>`;
}, "C:/Users/Propietario/Desktop/PC/Prog22s/test-zone-astro/src/components/Header.astro", void 0);

const $$Astro$4 = createAstro("https://example.com");
const $$Social = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Social;
  const { platform, username } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`https://www.${platform}.com/${username}`, "href")} data-astro-cid-yxtifmrq>${platform}</a>`;
}, "C:/Users/Propietario/Desktop/PC/Prog22s/test-zone-astro/src/components/Social.astro", void 0);

const $$Astro$3 = createAstro("https://example.com");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer data-astro-cid-sz7xmlte>${renderComponent($$result, "Social", $$Social, { "platform": "twitter", "username": "astrodotbuild", "data-astro-cid-sz7xmlte": true })}${renderComponent($$result, "Social", $$Social, { "platform": "github", "username": "withastro", "data-astro-cid-sz7xmlte": true })}${renderComponent($$result, "Social", $$Social, { "platform": "youtube", "username": "astrodotbuild", "data-astro-cid-sz7xmlte": true })}</footer>`;
}, "C:/Users/Propietario/Desktop/PC/Prog22s/test-zone-astro/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro("https://example.com");
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="en"><head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head><body>${renderComponent($$result, "Header", $$Header, {})}${renderComponent($$result, "Navigation", $$Navigation, {})}<h1>${pageTitle}</h1>${renderSlot($$result, $$slots["default"])}${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "C:/Users/Propietario/Desktop/PC/Prog22s/test-zone-astro/src/layouts/BaseLayout.astro", void 0);

const $$Astro$1 = createAstro("https://example.com");
const $$BlogPost = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { url, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<li><a${addAttribute(url, "href")}>${title}</a></li>`;
}, "C:/Users/Propietario/Desktop/PC/Prog22s/test-zone-astro/src/components/BlogPost.astro", void 0);

const $$Astro = createAstro("https://example.com");
const Astro = $$Astro;
async function getStaticPaths() {
  const allPosts = await Astro.glob(/* #__PURE__ */ Object.assign({"../posts/post-1.md": () => import('./post-1_8b0f115a.mjs').then(n => n.p),"../posts/post-2.md": () => import('./post-2_5f9cbfd2.mjs'),"../posts/post-3.md": () => import('./post-3_0a8d40b9.mjs'),"../posts/post-4.md": () => import('./post-4_1c258af5.mjs')}), () => "../posts/*.md");
  const uniqueTags = [
    ...new Set(allPosts.map((post) => post.frontmatter.tags).flat())
  ];
  const arrayTags = uniqueTags.map((tag) => {
    const filteredPosts = allPosts.filter(
      (post) => post.frontmatter.tags.includes(tag)
    );
    return {
      params: { tag },
      props: { posts: filteredPosts }
    };
  });
  return arrayTags;
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const { posts } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": tag }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<p>Posts tagged with ${tag}</p><ul>${posts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { "url": post.url, "title": post.frontmatter.title })}`)}</ul>` })}`;
}, "C:/Users/Propietario/Desktop/PC/Prog22s/test-zone-astro/src/pages/tags/[tag].astro", void 0);

const $$file = "C:/Users/Propietario/Desktop/PC/Prog22s/test-zone-astro/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag]";

const _tag_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$BaseLayout as $, _tag_ as _, $$BlogPost as a };
