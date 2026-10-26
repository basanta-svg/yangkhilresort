/** Prefix a root-relative path with the site's base path (needed on GitHub Pages). */
export const url = (path: string) => import.meta.env.BASE_URL.replace(/\/$/, '') + path;
