import pf from "../assets/pf2.webp";
import olastore from "../assets/olastore.webp";
import gmail from "../assets/gmail.webp";
import howbodi from "../assets/howbodi.webp";
import portfolio from "../assets/pf.webp";
import sf from "../assets/sf.webp";
import cashalat from "../assets/cashalat.webp";
import github from "../assets/github.webp";
import calculator from "../assets/calc.webp";

export const portfolioData = [
  {
    thumbnail: pf,
    name: "PropertyFinder",
    description: "A Next JS application built with the Bayut API from RapidAPI functioning as a UAE-based property search engine with advanced filtering options and authentications.",
    link: "https://uaepropertyfinder.vercel.app/",
    tools: ["Next.js", "Tailwind", "Typescript", "Mongo DB", "Express", "Recoil"],
    fade: "fade-right"
  },
  {
    thumbnail: olastore,
    name: "olastore",
    description: "A simple e-commerce app built with commerce js API and stripe for card payment.",
    link: "https://olastore.netlify.app/",
    tools: ["React", "Material UI", "Styled-components", "Commerce.js", "Stripe.js"],
    fade: "fade-left"
  },
  {
    thumbnail: cashalat,
    name: "cashalat",
    description:
      "Landing pages for a FinTech website that help people invest, save, make payments and take loans.",
    link: "https://cashalat.netlify.app/",
    tools: ["React", "Styled-components"],
    fade: "fade-right"
  },
  {
    thumbnail: gmail,
    name: "gmail inboxpage clone",
    description: "A static cloned version of Gmail showing the inbox page.",
    drive: "https://drive.google.com/file/d/1LU6T_Dr0bFePvwZWH9Z9V6jI6u1abi8k/view?usp=share_link",
    tools: ["HTML", "CSS", "Vanilla JS"],
    fade: "fade-left"
  },
  {
    thumbnail: howbodi,
    name: "MHA tests",
    description:
      "Landing page for a website that help people take mental health assessment tests.",
    link: "https://mhatests.netlify.app/",
    tools: ["React", "Styled-components"],
    fade: "fade-right"
  },
  {
    thumbnail: sf,
    name: "Help",
    description:
      "Landing page for HELP, an application that help users find qualified and reliable local helpers for everything from assembling and installing furniture to moving and cleaning and other everyday tasks.",
    link: "https://servicesfinder.vercel.app/",
    tools: ["Typescript", "Next.js", "Tailwind"],
    fade: "fade-left"
  },  
  {
    thumbnail: portfolio,
    name: "portfolio website",
    description:
      "My portfolio website showcasing my relevant skills and projects.",
    link: "https://olasunkanmi-dev.netlify.app/",
    tools: ["React", "Styled-components", "Formik"],
    fade: "fade-right"
  },
  {
    thumbnail: calculator,
    name: "calculator",
    description: "A simple calculator for mobile that performs basic calculations. Also with dark and light theme.",
    link: "https://olas-calculator.netlify.app/",
    tools: ["HTML", "CSS", "Vanilla JS"],
    fade: "fade-left"
  },
  {
    thumbnail: github,
    name: "github user search",
    description:
      "A simple coding challenge. Allow users to search for people github username and automatically generate the profile picture and link to the profile.",
    link: "https://github-usernamesearch.netlify.app/",
    tools: ["HTML", "CSS", "Vanilla JS"],
    fade: "fade-right"
  },
  // {
  //   thumbnail: property,
  //   name: "property finder v1",
  //   description:
  //     "Real estate agency website where users can see properties available for sale and for rent in Lagos.",
  //   link: "https://propertyfinder.netlify.app/",
  //   tools: ["React", "Axios", "Styled-components", "Redux"],
  //   fade: "fade-left"
  // },
];
