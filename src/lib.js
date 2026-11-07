// Shared helpers for all pages.
// Works with base "/anuragtiwari.cse.github.io" today and with base "/" after a repo rename.
export const base = import.meta.env.BASE_URL.replace(/\/$/, "");
export const url = (path = "") => `${base}/${path}`;

const scholarSearch = (t) => `https://scholar.google.com/scholar?q=${encodeURIComponent(`"${t}"`)}`;
export const linkFor = (p) => (p.doi ? `https://doi.org/${p.doi}` : p.pdf || scholarSearch(p.title));
export const boldAuthor = (authors) => authors.replace(/A\. Tiwari/g, "<strong>A. Tiwari</strong>");
