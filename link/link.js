// root.js
import {CihuyAppendBody} from "https://c-craftjs.github.io/element/element.js";
export function CihuyRootLink(href, text) {
    const rootLink = document.createElement('a');
    rootLink.href = href;
    rootLink.textContent = text;
    CihuyAppendBody(rootLink);
  }
  