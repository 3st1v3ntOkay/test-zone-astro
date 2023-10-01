import { c as createAstro, d as createComponent, r as renderTemplate, e as renderComponent, m as maybeRenderHead, f as addAttribute, h as renderSlot, s as spreadAttributes, u as unescapeHTML } from '../astro_fbdab50d.mjs';
import { $ as $$BaseLayout } from './_tag__b0ea9be4.mjs';
/* empty css                            */import '@astrojs/internal-helpers/path';
import './image-endpoint_98e33938.mjs';
import 'clsx';

const $$Astro = createAstro("https://example.com");
const $$MarkdownPostLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MarkdownPostLayout;
  const { frontmatter } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": frontmatter.title, "data-astro-cid-5grsw2hi": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<p data-astro-cid-5grsw2hi><em data-astro-cid-5grsw2hi>${frontmatter.description}</em></p><p data-astro-cid-5grsw2hi>${frontmatter.pubDate.slice(0, 10)}</p><p data-astro-cid-5grsw2hi>Written by: ${frontmatter.author}</p><img${addAttribute(frontmatter.image.url, "src")} width="300"${addAttribute(frontmatter.image.alt, "alt")} data-astro-cid-5grsw2hi><div class="tags" data-astro-cid-5grsw2hi>${frontmatter.map((tag) => renderTemplate`<p class="tag" data-astro-cid-5grsw2hi><a${addAttribute(`/tags/${tag}`, "href")} data-astro-cid-5grsw2hi>${tag}</a></p>`)}</div>${renderSlot($$result2, $$slots["default"])}` })}`;
}, "C:/Users/Propietario/Desktop/PC/Prog22s/test-zone-astro/src/layouts/MarkdownPostLayout.astro", void 0);

const images = async function() {
					return {
						
					}
				};

				async function updateImageReferences(html) {
					return images().then((images) => {
						return html.replaceAll(/__ASTRO_IMAGE_="([^"]+)"/gm, (full, imagePath) =>
							spreadAttributes({
								src: images[imagePath].src,
								...images[imagePath].attributes,
							})
						);
					});
				}

				const html = await updateImageReferences("<h1 id=\"my-first-blog-post\">My First Blog Post</h1>\n<p>Published on: 2022-07-01</p>\n<p>Welcome to my <em>new blog</em> about learning Astro! Here, I will share my learning journey as I build a new website.</p>\n<h2 id=\"what-ive-accomplished\">What I’ve accomplished</h2>\n<ol>\n<li>\n<p><strong>Installing Astro</strong>: First, I created a new Astro project and set up my online accounts.</p>\n</li>\n<li>\n<p><strong>Making Pages</strong>: I then learned how to make pages by creating new <code>.astro</code> files and placing them in the <code>src/pages/</code> folder.</p>\n</li>\n<li>\n<p><strong>Making Blog Posts</strong>: This is my first blog post! I now have Astro pages and Markdown posts!</p>\n</li>\n</ol>\n<h2 id=\"whats-next\">What’s next</h2>\n<p>I will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.</p>");

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"My First Blog Post","pubDate":"2022-07-01T00:00:00.000Z","description":"This is the first post of my new Astro blog.","author":"Astro Learner","image":{"url":"https://astro.build/assets/blog/astro-1-release-update/cover.jpeg","alt":"The Astro logo with the word One."},"tags":["astro","blogging","learning in public"]};
				const file = "C:/Users/Propietario/Desktop/PC/Prog22s/test-zone-astro/src/pages/posts/post-1.md";
				const url = "/posts/post-1";
				function rawContent() {
					return "\r\n# My First Blog Post\r\n\r\nPublished on: 2022-07-01\r\n\r\nWelcome to my _new blog_ about learning Astro! Here, I will share my learning journey as I build a new website.\r\n\r\n## What I've accomplished\r\n\r\n1. **Installing Astro**: First, I created a new Astro project and set up my online accounts.\r\n\r\n2. **Making Pages**: I then learned how to make pages by creating new `.astro` files and placing them in the `src/pages/` folder.\r\n\r\n3. **Making Blog Posts**: This is my first blog post! I now have Astro pages and Markdown posts!\r\n\r\n## What's next\r\n\r\nI will finish the Astro tutorial, and then keep adding more posts. Watch this space for more to come.\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":1,"slug":"my-first-blog-post","text":"My First Blog Post"},{"depth":2,"slug":"what-ive-accomplished","text":"What I’ve accomplished"},{"depth":2,"slug":"whats-next","text":"What’s next"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${renderComponent(result, 'Layout', $$MarkdownPostLayout, {
								file,
								url,
								content,
								frontmatter: content,
								headings: getHeadings(),
								rawContent,
								compiledContent,
								'server:root': true,
							}, {
								'default': () => renderTemplate`${unescapeHTML(html)}`
							})}`;
				});

const post1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Content,
  compiledContent,
  default: Content,
  file,
  frontmatter,
  getHeadings,
  rawContent,
  url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$MarkdownPostLayout as $, post1 as p };
