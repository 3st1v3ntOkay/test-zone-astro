import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, f as addAttribute } from '../astro_fbdab50d.mjs';
import 'clsx';
import { $ as $$BaseLayout } from './_tag__b0ea9be4.mjs';
import { useState } from 'preact/hooks';
import { jsxs, jsx } from 'preact/jsx-runtime';
/* empty css                           */
function Greeting({
  messages
}) {
  const randomMessage = () => messages[Math.floor(Math.random() * messages.length)];
  const [greeting, setGreeting] = useState(messages[0]);
  return jsxs("div", {
    children: [jsxs("h3", {
      children: [greeting, "! Thank you for visiting!"]
    }), jsx("button", {
      onClick: () => setGreeting(randomMessage()),
      children: "New Greeting"
    })]
  });
}

const $$Astro$2 = createAstro("https://example.com");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  const pageTitle = "Home Page";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<h2>My awesome blog subtitle</h2>${renderComponent($$result2, "Greeting", Greeting, { "client:load": true, "messages": ["Hi", "Hello", "Howdy", "Hey there"], "client:component-hydration": "load", "client:component-path": "C:/Users/Propietario/Desktop/PC/Prog22s/test-zone-astro/src/components/Greeting.jsx", "client:component-export": "default" })}` })}`;
}, "C:/Users/Propietario/Desktop/PC/Prog22s/test-zone-astro/src/pages/index.astro", void 0);

const $$file$2 = "C:/Users/Propietario/Desktop/PC/Prog22s/test-zone-astro/src/pages/index.astro";
const $$url$2 = "";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://example.com");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const pageTitle = "File";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle })}`;
}, "C:/Users/Propietario/Desktop/PC/Prog22s/test-zone-astro/src/pages/folder/index.astro", void 0);

const $$file$1 = "C:/Users/Propietario/Desktop/PC/Prog22s/test-zone-astro/src/pages/folder/index.astro";
const $$url$1 = "/folder";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://example.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const allPosts = await Astro2.glob(/* #__PURE__ */ Object.assign({"../posts/post-1.md": () => import('./post-1_8b0f115a.mjs').then(n => n.p),"../posts/post-2.md": () => import('./post-2_5f9cbfd2.mjs'),"../posts/post-3.md": () => import('./post-3_0a8d40b9.mjs'),"../posts/post-4.md": () => import('./post-4_1c258af5.mjs')}), () => "../posts/*.md");
  const tags = [...new Set(allPosts.map((post) => post.frontmatter.tags).flat())];
  const pageTitle = "Tag Index";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "data-astro-cid-os4i7owy": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<div class="tags" data-astro-cid-os4i7owy>${tags.map((tag) => renderTemplate`<p data-astro-cid-os4i7owy><a class="tag"${addAttribute(`/tags/${tag}`, "href")} data-astro-cid-os4i7owy>${tag}</a></p>`)}</div>` })}`;
}, "C:/Users/Propietario/Desktop/PC/Prog22s/test-zone-astro/src/pages/tags/index.astro", void 0);

const $$file = "C:/Users/Propietario/Desktop/PC/Prog22s/test-zone-astro/src/pages/tags/index.astro";
const $$url = "/tags";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$1 as a, index as b, index$2 as i };
