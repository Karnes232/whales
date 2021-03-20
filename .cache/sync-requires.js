const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/karnes/coding/personal/franklin/whales/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/karnes/coding/personal/franklin/whales/src/pages/404.js"))),
  "component---src-pages-boat-js": hot(preferDefault(require("/home/karnes/coding/personal/franklin/whales/src/pages/boat.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/karnes/coding/personal/franklin/whales/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/karnes/coding/personal/franklin/whales/src/pages/index.js"))),
  "component---src-pages-package-js": hot(preferDefault(require("/home/karnes/coding/personal/franklin/whales/src/pages/package.js"))),
  "component---src-pages-photo-gallery-js": hot(preferDefault(require("/home/karnes/coding/personal/franklin/whales/src/pages/PhotoGallery.js")))
}

