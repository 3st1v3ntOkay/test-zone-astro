import { d as createComponent, s as spreadAttributes, r as renderTemplate, e as renderComponent, u as unescapeHTML } from '../astro_fbdab50d.mjs';
import { $ as $$MarkdownPostLayout } from './post-1_8b0f115a.mjs';
import '@astrojs/internal-helpers/path';
import './image-endpoint_98e33938.mjs';
import 'clsx';
import 'html-escaper';
import './_tag__b0ea9be4.mjs';
/* empty css                            *//* empty css                            */import 'mime/lite.js';
import '../astro-assets-services_16daaefe.mjs';

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

				const html = await updateImageReferences("<p>After a successful first week learning Astro, I decided to try some more. I wrote and imported a small component from memory!</p>");

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"My Second Blog Post","author":"Astro Learner","description":"After learning some Astro, I couldn't stop!","image":null,"url":"https://astro.build/assets/blog/astro-showcase/astro-showcase-screenshot.jpg","alt":"Thumbnails of websites from the Astro Showcase site.","pubDate":"2022-07-08T00:00:00.000Z","tags":["astro","blogging","learning in public","successes"]};
				const file = "C:/Users/Propietario/Desktop/PC/Prog22s/test-zone-astro/src/pages/posts/post-2.md";
				const url = "/posts/post-2";
				function rawContent() {
					return "\r\nAfter a successful first week learning Astro, I decided to try some more. I wrote and imported a small component from memory!\r\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
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

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, rawContent, url };
