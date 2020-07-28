import { p as patchBrowser, g as globals, b as bootstrapLazy } from './core-0c0d2802.js';

patchBrowser().then(options => {
  globals();
  return bootstrapLazy([["lvl-avatar",[[1,"lvl-avatar",{"user":[8]}]]],["lvl-list-item",[[1,"lvl-list-item",{"user":[8]}]]],["lvl-mention",[[1,"lvl-mention",{"mention":[8]}]]],["avatar-component",[[1,"avatar-component",{"avatar":[1],"topRight":[1,"top-right"],"bottomRight":[1,"bottom-right"],"bottomLeft":[1,"bottom-left"],"topLeft":[1,"top-left"],"online":[4]}]]]], options);
});
