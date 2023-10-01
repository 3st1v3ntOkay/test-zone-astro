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

				const html = await updateImageReferences("<p>It wasn’t always smooth sailing, but I’m enjoying building with Astro. And, the <a href=\"https://astro.build/chat\">Discord community</a> is really friendly and helpful!</p>");

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"My Third Blog Post","author":"Astro Learner","description":"I had some challenges, but asking in the community really helped!","image":{"url":"https://astro.build/assets/blog/community-day/cover.jpg","alt":"The word community with a heart."},"pubDate":"2022-07-15T00:00:00.000Z","tags":["astro","learning in public","setbacks","community"]};
				const file = "C:/Users/Propietario/Desktop/PC/Prog22s/test-zone-astro/src/pages/posts/post-3.md";
				const url = "/posts/post-3";
				function rawContent() {
					return "\r\nIt wasn't always smooth sailing, but I'm enjoying building with Astro. And, the [Discord community](https://astro.build/chat) is really friendly and helpful!\r\n";
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
