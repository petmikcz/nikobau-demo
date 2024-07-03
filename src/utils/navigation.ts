// An array of links for navigation bar
const navBarLinks = [
  { name: "Domů", url: "/" },
  // { name: "Realizace", url: "/#" },
  { name: "Služby", url: "/#" },
  { name: "O nás", url: "/contact" },
];
// An array of links for footer
const footerLinks = [
    {
    section: "Společnost",
    links: [
      { name: "O nás", url: "#" },
      // { name: "Blog", url: "/blog" },
      { name: "Kontakt", url: "#" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  github: "https://github.com/mearashadowfax/ScrewFast",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};