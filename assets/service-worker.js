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
    "url": "/assets/0.55a43fd7cecfc011d4b7.bundle.js",
    "revision": null
  }, {
    "url": "/assets/1.55a43fd7cecfc011d4b7.bundle.js",
    "revision": null
  }, {
    "url": "/assets/10.55a43fd7cecfc011d4b7.bundle.js",
    "revision": null
  }, {
    "url": "/assets/11.55a43fd7cecfc011d4b7.bundle.js",
    "revision": null
  }, {
    "url": "/assets/12.55a43fd7cecfc011d4b7.bundle.js",
    "revision": null
  }, {
    "url": "/assets/13.55a43fd7cecfc011d4b7.bundle.js",
    "revision": null
  }, {
    "url": "/assets/14.55a43fd7cecfc011d4b7.bundle.js",
    "revision": null
  }, {
    "url": "/assets/15.55a43fd7cecfc011d4b7.bundle.js",
    "revision": null
  }, {
    "url": "/assets/16.55a43fd7cecfc011d4b7.bundle.js",
    "revision": null
  }, {
    "url": "/assets/17.55a43fd7cecfc011d4b7.bundle.js",
    "revision": null
  }, {
    "url": "/assets/18.55a43fd7cecfc011d4b7.bundle.js",
    "revision": null
  }, {
    "url": "/assets/2.55a43fd7cecfc011d4b7.bundle.js",
    "revision": null
  }, {
    "url": "/assets/3.55a43fd7cecfc011d4b7.bundle.js",
    "revision": null
  }, {
    "url": "/assets/4.55a43fd7cecfc011d4b7.bundle.js",
    "revision": null
  }, {
    "url": "/assets/5.55a43fd7cecfc011d4b7.bundle.js",
    "revision": null
  }, {
    "url": "/assets/6.55a43fd7cecfc011d4b7.bundle.js",
    "revision": null
  }, {
    "url": "/assets/7.55a43fd7cecfc011d4b7.bundle.js",
    "revision": null
  }, {
    "url": "/assets/8.55a43fd7cecfc011d4b7.bundle.js",
    "revision": null
  }, {
    "url": "/assets/9.55a43fd7cecfc011d4b7.bundle.js",
    "revision": null
  }, {
    "url": "/assets/main.bundle.js",
    "revision": "23462ac99bcfb6bfed23e43525417717"
  }, {
    "url": "/assets/vendor.bundle.js",
    "revision": "32c952f6cc668284937969c6e49c743e"
  }, {
    "url": "/assets/worker.bundle.worker.js",
    "revision": "adddb0deb6e415fe28193ef15bec5243"
  }], {});

}));
