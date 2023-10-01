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

				const html = await updateImageReferences("<p>This post should show up with my other blog posts, because <code>Astro.glob()</code> is returning a list of all my posts in order to create my list.</p>");

				const frontmatter = {"layout":"../../layouts/MarkdownPostLayout.astro","title":"My Fourth Blog Post","author":"Astro Learner","description":"This post will show up on its own!","image":{"url":"https://docs.astro.build/default-og-image.png","alt":"The word astro against an illustration of planets and stars."},"pubDate":"2022-08-08T00:00:00.000Z","tags":["astro","successes"]};
				const file = "C:/Users/Propietario/Desktop/PC/Prog22s/test-zone-astro/src/pages/posts/post-4.md";
				const url = "/posts/post-4";
				function rawContent() {
					return "This post should show up with my other blog posts, because `Astro.glob()` is returning a list of all my posts in order to create my list.";
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
