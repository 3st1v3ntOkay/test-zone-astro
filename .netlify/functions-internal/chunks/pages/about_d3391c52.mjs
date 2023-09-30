import { c as createAstro, d as createComponent, i as defineStyleVars, r as renderTemplate, f as addAttribute, g as renderHead, e as renderComponent } from '../astro_fbdab50d.mjs';
import { $ as $$BaseLayout } from './_tag__b0ea9be4.mjs';
/* empty css                           */import 'clsx';
import 'html-escaper';
/* empty css                            */
const $$Astro = createAstro("https://example.com");
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const pageTitle = "About Me";
  const identity = {
    firstName: "Sarah",
    country: "Canada",
    occupation: "Technical Writer",
    hobbies: ["photography", "birdwatching", "baseball"]
  };
  const skills = ["HTML", "CSS", "JavaScript", "React", "Astro", "Writing Docs"];
  const skillColor = "navy";
  const fontWeight = "bold";
  const textCase = "uppercase";
  const configAstroVars = {
    skillColor,
    fontWeight,
    textCase
  };
  const $$definedVars = defineStyleVars([configAstroVars]);
  return renderTemplate`<html lang="en" data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}><head><meta charset="utf-8"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${pageTitle}</title>${renderHead()}</head><body data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>${renderComponent($$result, "BaseLayout", $$BaseLayout, { "pageTitle": pageTitle, "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate`<h2 data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>... and my new Astro site!</h2><p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>
I am working through Astro's introductory tutorial. This is the second
        page on my website, and it's the first one I built myself!
</p><p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>
This site will update as I complete more of the tutorial, so keep
        checking back and see how my journey is going!
</p><p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>Here are a few facts about me:</p><ul data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}><li data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>My name is ${identity.firstName}.</li><li data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>
I live in ${identity.country} and I work as a ${identity.occupation}.
</li>${identity.hobbies.length >= 2 && renderTemplate`<li data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>
Two of my hobbies are: ${identity.hobbies[0]} and${" "}${identity.hobbies[1]}</li>`}</ul><p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>My skills are:</p><ul data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>${skills.map((skill) => renderTemplate`<li class="skill" data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>${skill}</li>`)}</ul>${renderTemplate`<p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>I am happy to be learning Astro!</p>` }${renderTemplate`<p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>I finished this tutorial!</p>` }${renderTemplate`<p data-astro-cid-kh7btl4r${addAttribute($$definedVars, "style")}>My goal is to finish in 3 days.</p>` }` })}</body></html>`;
}, "C:/Users/Propietario/Desktop/PC/Prog22s/test-zone-astro/src/pages/about.astro", void 0);

const $$file = "C:/Users/Propietario/Desktop/PC/Prog22s/test-zone-astro/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
