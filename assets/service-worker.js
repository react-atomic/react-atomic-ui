/**
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// If the loader is already loaded, just stop.
if (!self.define) {
  let registry = {};

  // Used for `eval` and `importScripts` where we can't get script URL by other means.
  // In both cases, it's safe to use a global var because those functions are synchronous.
  let nextDefineUri;

  const singleRequire = (uri, parentUri) => {
    uri = new URL(uri + ".js", parentUri).href;
    return registry[uri] || (
      
        new Promise(resolve => {
          if ("document" in self) {
            const script = document.createElement("script");
            script.src = uri;
            script.onload = resolve;
            document.head.appendChild(script);
          } else {
            nextDefineUri = uri;
            importScripts(uri);
            resolve();
          }
        })
      
      .then(() => {
        let promise = registry[uri];
        if (!promise) {
          throw new Error(`Module ${uri} didn’t register its module`);
        }
        return promise;
      })
    );
  };

  self.define = (depsNames, factory) => {
    const uri = nextDefineUri || ("document" in self ? document.currentScript.src : "") || location.href;
    if (registry[uri]) {
      // Module is already loading or loaded.
      return;
    }
    let exports = {};
    const require = depUri => singleRequire(depUri, uri);
    const specialDeps = {
      module: { uri },
      exports,
      require
    };
    registry[uri] = Promise.all(depsNames.map(
      depName => specialDeps[depName] || require(depName)
    )).then(deps => {
      factory(...deps);
      return exports;
    });
  };
}
define(['./workbox-37481be9'], (function (workbox) { 'use strict';

  /**
  * Welcome to your Workbox-powered service worker!
  *
  * You'll need to register this file in your web app.
  * See https://goo.gl/nhQhGp
  *
  * The rest of the code is auto-generated. Please don't update this file
  * directly; instead, make changes to your Workbox build configuration
  * and re-run your build process.
  * See https://goo.gl/2aRDsh
  */

  self.skipWaiting();
  workbox.clientsClaim();
  /**
   * The precacheAndRoute() method efficiently caches and responds to
   * requests for URLs in the manifest.
   * See https://goo.gl/S9QRab
   */

  workbox.precacheAndRoute([{
    "url": "/assets/0.e406804eac1268bd2517.bundle.js",
    "revision": null
  }, {
    "url": "/assets/1.e406804eac1268bd2517.bundle.js",
    "revision": null
  }, {
    "url": "/assets/10.e406804eac1268bd2517.bundle.js",
    "revision": null
  }, {
    "url": "/assets/11.e406804eac1268bd2517.bundle.js",
    "revision": null
  }, {
    "url": "/assets/12.e406804eac1268bd2517.bundle.js",
    "revision": null
  }, {
    "url": "/assets/13.e406804eac1268bd2517.bundle.js",
    "revision": null
  }, {
    "url": "/assets/14.e406804eac1268bd2517.bundle.js",
    "revision": null
  }, {
    "url": "/assets/15.e406804eac1268bd2517.bundle.js",
    "revision": null
  }, {
    "url": "/assets/16.e406804eac1268bd2517.bundle.js",
    "revision": null
  }, {
    "url": "/assets/17.e406804eac1268bd2517.bundle.js",
    "revision": null
  }, {
    "url": "/assets/18.e406804eac1268bd2517.bundle.js",
    "revision": null
  }, {
    "url": "/assets/2.e406804eac1268bd2517.bundle.js",
    "revision": null
  }, {
    "url": "/assets/3.e406804eac1268bd2517.bundle.js",
    "revision": null
  }, {
    "url": "/assets/4.e406804eac1268bd2517.bundle.js",
    "revision": null
  }, {
    "url": "/assets/5.e406804eac1268bd2517.bundle.js",
    "revision": null
  }, {
    "url": "/assets/6.e406804eac1268bd2517.bundle.js",
    "revision": null
  }, {
    "url": "/assets/7.e406804eac1268bd2517.bundle.js",
    "revision": null
  }, {
    "url": "/assets/8.e406804eac1268bd2517.bundle.js",
    "revision": null
  }, {
    "url": "/assets/9.e406804eac1268bd2517.bundle.js",
    "revision": null
  }, {
    "url": "/assets/main.bundle.js",
    "revision": "13b3de96a03fd7468283a4e6fbf0f54a"
  }, {
    "url": "/assets/vendor.bundle.js",
    "revision": "ee5b413b4caebe3fed179b303b37391a"
  }, {
    "url": "/assets/worker.bundle.worker.js",
    "revision": "adddb0deb6e415fe28193ef15bec5243"
  }], {});

}));
//# sourceMappingURL=service-worker.js.map
