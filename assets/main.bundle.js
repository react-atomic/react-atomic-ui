/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/ 	var parentHotUpdateCallback = window["webpackHotUpdate"];
/******/ 	window["webpackHotUpdate"] = // eslint-disable-next-line no-unused-vars
/******/ 	function webpackHotUpdateCallback(chunkId, moreModules) {
/******/ 		hotAddUpdateChunk(chunkId, moreModules);
/******/ 		if (parentHotUpdateCallback) parentHotUpdateCallback(chunkId, moreModules);
/******/ 	} ;
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var script = document.createElement("script");
/******/ 		script.charset = "utf-8";
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot-update.js";
/******/ 		if (null) script.crossOrigin = null;
/******/ 		document.head.appendChild(script);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest(requestTimeout) {
/******/ 		requestTimeout = requestTimeout || 10000;
/******/ 		return new Promise(function(resolve, reject) {
/******/ 			if (typeof XMLHttpRequest === "undefined") {
/******/ 				return reject(new Error("No browser support"));
/******/ 			}
/******/ 			try {
/******/ 				var request = new XMLHttpRequest();
/******/ 				var requestPath = __webpack_require__.p + "" + hotCurrentHash + ".hot-update.json";
/******/ 				request.open("GET", requestPath, true);
/******/ 				request.timeout = requestTimeout;
/******/ 				request.send(null);
/******/ 			} catch (err) {
/******/ 				return reject(err);
/******/ 			}
/******/ 			request.onreadystatechange = function() {
/******/ 				if (request.readyState !== 4) return;
/******/ 				if (request.status === 0) {
/******/ 					// timeout
/******/ 					reject(
/******/ 						new Error("Manifest request to " + requestPath + " timed out.")
/******/ 					);
/******/ 				} else if (request.status === 404) {
/******/ 					// no update available
/******/ 					resolve();
/******/ 				} else if (request.status !== 200 && request.status !== 304) {
/******/ 					// other failure
/******/ 					reject(new Error("Manifest request to " + requestPath + " failed."));
/******/ 				} else {
/******/ 					// success
/******/ 					try {
/******/ 						var update = JSON.parse(request.responseText);
/******/ 					} catch (e) {
/******/ 						reject(e);
/******/ 						return;
/******/ 					}
/******/ 					resolve(update);
/******/ 				}
/******/ 			};
/******/ 		});
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "a984a7c81a490c6dea72";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_selfInvalidated: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 			invalidate: function() {
/******/ 				this._selfInvalidated = true;
/******/ 				switch (hotStatus) {
/******/ 					case "idle":
/******/ 						hotUpdate = {};
/******/ 						hotUpdate[moduleId] = modules[moduleId];
/******/ 						hotSetStatus("ready");
/******/ 						break;
/******/ 					case "ready":
/******/ 						hotApplyInvalidatedModule(moduleId);
/******/ 						break;
/******/ 					case "prepare":
/******/ 					case "check":
/******/ 					case "dispose":
/******/ 					case "apply":
/******/ 						(hotQueuedInvalidatedModules =
/******/ 							hotQueuedInvalidatedModules || []).push(moduleId);
/******/ 						break;
/******/ 					default:
/******/ 						// ignore requests in error states
/******/ 						break;
/******/ 				}
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash, hotQueuedInvalidatedModules;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus(hotApplyInvalidatedModules() ? "ready" : "idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			for(var chunkId in installedChunks)
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 		return hotApplyInternal(options);
/******/ 	}
/******/
/******/ 	function hotApplyInternal(options) {
/******/ 		hotApplyInvalidatedModules();
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (
/******/ 					!module ||
/******/ 					(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 				)
/******/ 					continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire &&
/******/ 				// when called invalidate self-accepting is not possible
/******/ 				!installedModules[moduleId].hot._selfInvalidated
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					parents: installedModules[moduleId].parents.slice(),
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		if (hotUpdateNewHash !== undefined) {
/******/ 			hotCurrentHash = hotUpdateNewHash;
/******/ 			hotUpdateNewHash = undefined;
/******/ 		}
/******/ 		hotUpdate = undefined;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = item.parents;
/******/ 			hotCurrentChildModule = moduleId;
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			return hotApplyInternal(options).then(function(list) {
/******/ 				outdatedModules.forEach(function(moduleId) {
/******/ 					if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 				});
/******/ 				return list;
/******/ 			});
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModules() {
/******/ 		if (hotQueuedInvalidatedModules) {
/******/ 			if (!hotUpdate) hotUpdate = {};
/******/ 			hotQueuedInvalidatedModules.forEach(hotApplyInvalidatedModule);
/******/ 			hotQueuedInvalidatedModules = undefined;
/******/ 			return true;
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApplyInvalidatedModule(moduleId) {
/******/ 		if (!Object.prototype.hasOwnProperty.call(hotUpdate, moduleId))
/******/ 			hotUpdate[moduleId] = modules[moduleId];
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".bundle.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/
/******/ 		let cleanup = function NoOp() {};
/******/
/******/ 		if ('undefined' !== typeof window && window.$RefreshSetup$) {
/******/ 		  cleanup = window.$RefreshSetup$(module.i);
/******/ 		}
/******/
/******/ 		try {
/******/
/******/ 			modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		} finally {
/******/ 		  cleanup();
/******/ 		}
/******/
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./assets/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([1,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "../react-atomic-organism/packages/organism-react-popup/build/es/src/index.js":
/*!************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/build/es/src/index.js ***!
  \************************************************************************************/
/*! exports provided: AlertsNotifier, DisplayPopupEl, FullScreen, PopupPool, Dialog, PopupModal, PopupOverlay, PopupFloatEl, BasePopup, PopupHover, PopupClick, PopupMonitor, popupStore, popupDispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_organisms_AlertsNotifier__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/organisms/AlertsNotifier */ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/organisms/AlertsNotifier.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AlertsNotifier", function() { return _ui_organisms_AlertsNotifier__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ui_organisms_DisplayPopupEl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/organisms/DisplayPopupEl */ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/organisms/DisplayPopupEl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DisplayPopupEl", function() { return _ui_organisms_DisplayPopupEl__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _ui_organisms_FullScreen__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/organisms/FullScreen */ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/organisms/FullScreen.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FullScreen", function() { return _ui_organisms_FullScreen__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ui_organisms_PopupPool__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/organisms/PopupPool */ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/organisms/PopupPool.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopupPool", function() { return _ui_organisms_PopupPool__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _ui_organisms_Dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/organisms/Dialog */ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/organisms/Dialog.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return _ui_organisms_Dialog__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _ui_molecules_PopupModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/molecules/PopupModal */ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/molecules/PopupModal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopupModal", function() { return _ui_molecules_PopupModal__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _ui_molecules_PopupOverlay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ui/molecules/PopupOverlay */ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/molecules/PopupOverlay.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopupOverlay", function() { return _ui_molecules_PopupOverlay__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _ui_molecules_PopupFloatEl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ui/molecules/PopupFloatEl */ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/molecules/PopupFloatEl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopupFloatEl", function() { return _ui_molecules_PopupFloatEl__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _ui_molecules_BasePopup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ui/molecules/BasePopup */ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/molecules/BasePopup.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BasePopup", function() { return _ui_molecules_BasePopup__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _ui_organisms_PopupHover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ui/organisms/PopupHover */ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/organisms/PopupHover.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopupHover", function() { return _ui_organisms_PopupHover__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _ui_organisms_PopupClick__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../ui/organisms/PopupClick */ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/organisms/PopupClick.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopupClick", function() { return _ui_organisms_PopupClick__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _ui_organisms_PopupMonitor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../ui/organisms/PopupMonitor */ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/organisms/PopupMonitor.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PopupMonitor", function() { return _ui_organisms_PopupMonitor__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _stores_popupStore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./stores/popupStore */ "../react-atomic-organism/packages/organism-react-popup/build/es/src/stores/popupStore.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popupStore", function() { return _stores_popupStore__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _popupDispatcher__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./popupDispatcher */ "../react-atomic-organism/packages/organism-react-popup/build/es/src/popupDispatcher.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "popupDispatch", function() { return _popupDispatcher__WEBPACK_IMPORTED_MODULE_13__["popupDispatch"]; });

// Organisms




 // Molecule




 //event



 // Stores

 // Dispatch



/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/build/es/src/popupDispatcher.js":
/*!**********************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/build/es/src/popupDispatcher.js ***!
  \**********************************************************************************************/
/*! exports provided: default, popupDispatch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popupDispatch", function() { return popupDispatch; });
/* harmony import */ var reshow_flux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-flux */ "./node_modules/reshow-flux/build/es/index.js");

var instance = new reshow_flux__WEBPACK_IMPORTED_MODULE_0__["Dispatcher"]();
/* harmony default export */ __webpack_exports__["default"] = (instance);
var popupDispatch = instance.dispatch.bind(instance);

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/build/es/src/stores/popupStore.js":
/*!************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/build/es/src/stores/popupStore.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/typeof */ "./node_modules/reshow-runtime/es/helpers/typeof.js");
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "./node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "./node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/possibleConstructorReturn */ "./node_modules/reshow-runtime/es/helpers/possibleConstructorReturn.js");
/* harmony import */ var reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/getPrototypeOf */ "./node_modules/reshow-runtime/es/helpers/getPrototypeOf.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "./node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reshow_flux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reshow-flux */ "./node_modules/reshow-flux/build/es/index.js");
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! get-object-value */ "./node_modules/get-object-value/build/es/src/index.js");
/* harmony import */ var set_object_value__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! set-object-value */ "./node_modules/set-object-value/build/es/src/index.js");
/* harmony import */ var _popupDispatcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../popupDispatcher */ "../react-atomic-organism/packages/organism-react-popup/build/es/src/popupDispatcher.js");









function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}






var groups = {};
var SHOW_KEY = 'shows';
var NODE_KEY = 'nodes';
var keys = Object.keys;
var isArray = Array.isArray;

var PopupStore = /*#__PURE__*/function (_ReduceStore) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(PopupStore, _ReduceStore);

  var _super = _createSuper(PopupStore);

  function PopupStore() {
    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PopupStore);

    return _super.apply(this, arguments);
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(PopupStore, [{
    key: "getInitialState",
    value: function getInitialState() {
      return Object(immutable__WEBPACK_IMPORTED_MODULE_6__["Map"])({
        shows: Object(immutable__WEBPACK_IMPORTED_MODULE_6__["Map"])(),
        nodes: Object(immutable__WEBPACK_IMPORTED_MODULE_6__["Map"])()
      });
    }
  }, {
    key: "updateDom",
    value: function updateDom(state, action) {
      var popupNode = Object(get_object_value__WEBPACK_IMPORTED_MODULE_8__["default"])(action, ['params', 'popup']);
      var key = Object(get_object_value__WEBPACK_IMPORTED_MODULE_8__["default"])(popupNode, ['props', 'name'], 'default');

      if (key !== Object(get_object_value__WEBPACK_IMPORTED_MODULE_8__["default"])(popupNode, ['props', 'name'])) {
        console.warn({
          Warn: 'Popup Key not consistence, you use a default key. you should assign name to each specific popup element.',
          PopUpKey: Object(get_object_value__WEBPACK_IMPORTED_MODULE_8__["default"])(popupNode, ['props', 'name']),
          ActualKey: key
        });
      }

      var shows = state.get(SHOW_KEY).set(key, true);
      var nodes = state.get(NODE_KEY).set(key, popupNode);
      var nodeGroups = Object(get_object_value__WEBPACK_IMPORTED_MODULE_8__["default"])(popupNode, ['props', 'group']);

      if (nodeGroups) {
        if (!isArray(nodeGroups)) {
          nodeGroups = [nodeGroups];
        }

        nodeGroups.forEach(function (nodegroup) {
          return Object(set_object_value__WEBPACK_IMPORTED_MODULE_9__["default"])(groups, [nodegroup, key], true);
        });
      }

      return state.set(SHOW_KEY, shows).set(NODE_KEY, nodes);
    }
  }, {
    key: "getKey",
    value: function getKey(action) {
      var popup = Object(get_object_value__WEBPACK_IMPORTED_MODULE_8__["default"])(action, ['params', 'popup'], 'default');
      var key;

      if ('object' === Object(reshow_runtime_es_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(popup)) {
        key = Object(get_object_value__WEBPACK_IMPORTED_MODULE_8__["default"])(popup, ['props', 'name'], popup);
      } else {
        key = popup;
      }

      return key;
    }
  }, {
    key: "closeAll",
    value: function closeAll(state, action) {
      return state.set(SHOW_KEY, Object(immutable__WEBPACK_IMPORTED_MODULE_6__["Map"])());
    }
  }, {
    key: "closeOne",
    value: function closeOne(state, action) {
      var key = this.getKey(action);
      var shows = state.get(SHOW_KEY)["delete"](key);
      return state.set(SHOW_KEY, shows);
    }
  }, {
    key: "closeGroup",
    value: function closeGroup(state, action) {
      var groupKey = Object(get_object_value__WEBPACK_IMPORTED_MODULE_8__["default"])(action, ['params', 'group']);
      var group = Object(get_object_value__WEBPACK_IMPORTED_MODULE_8__["default"])(groups, [groupKey]);
      var shows = state.get(SHOW_KEY);

      if (group) {
        keys(group).forEach(function (key) {
          shows = shows["delete"](key);
        });
      }

      return state.set(SHOW_KEY, shows);
    }
  }, {
    key: "cleanAll",
    value: function cleanAll(state, action) {
      return state.set(SHOW_KEY, Object(immutable__WEBPACK_IMPORTED_MODULE_6__["Map"])()).set(NODE_KEY, Object(immutable__WEBPACK_IMPORTED_MODULE_6__["Map"])());
    }
  }, {
    key: "cleanOne",
    value: function cleanOne(state, action) {
      var key = this.getKey(action);
      var nodes = state.get(NODE_KEY)["delete"](key);
      var shows = state.get(SHOW_KEY)["delete"](key);
      return state.set(NODE_KEY, nodes).set(SHOW_KEY, shows);
    }
  }, {
    key: "cleanGroup",
    value: function cleanGroup(state, action) {
      var groupKey = Object(get_object_value__WEBPACK_IMPORTED_MODULE_8__["default"])(action, ['params', 'group']);
      var group = Object(get_object_value__WEBPACK_IMPORTED_MODULE_8__["default"])(groups, [groupKey]);

      if (group) {
        var nodes = state.get(NODE_KEY);
        var shows = state.get(SHOW_KEY);
        keys(group).forEach(function (key) {
          nodes = nodes["delete"](key);
          shows = shows["delete"](key);
        });
        return state.set(NODE_KEY, nodes).set(SHOW_KEY, shows);
      } else {
        return state;
      }
    }
  }, {
    key: "reduce",
    value: function reduce(state, action) {
      switch (action.type) {
        case 'dom/update':
          return this.updateDom(state, action);

        case 'dom/closeAll':
          return this.closeAll(state, action);

        case 'dom/cleanAll':
          return this.cleanAll(state, action);

        case 'dom/closeOne':
          return this.closeOne(state, action);

        case 'dom/cleanOne':
          return this.cleanOne(state, action);

        case 'dom/closeGroup':
          return this.closeGroup(state, action);

        case 'dom/cleanGroup':
          return this.cleanGroup(state, action);

        case 'config/set':
          return state.merge(action.params);

        default:
          return state;
      }
    }
  }]);

  return PopupStore;
}(reshow_flux__WEBPACK_IMPORTED_MODULE_7__["ReduceStore"]); // Export a singleton instance of the store, could do this some other way if
// you want to avoid singletons.


var instance = new PopupStore(_popupDispatcher__WEBPACK_IMPORTED_MODULE_10__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/molecules/BasePopup.js":
/*!*************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/build/es/ui/molecules/BasePopup.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "./node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "./node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/possibleConstructorReturn */ "./node_modules/reshow-runtime/es/helpers/possibleConstructorReturn.js");
/* harmony import */ var reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/getPrototypeOf */ "./node_modules/reshow-runtime/es/helpers/getPrototypeOf.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "./node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);








function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}



var BasePopup = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(BasePopup, _PureComponent);

  var _super = _createSuper(BasePopup);

  function BasePopup() {
    var _this;

    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, BasePopup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      hasError: false
    });

    return _this;
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(BasePopup, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      var onError = this.props.onError;

      if (onError) {
        callfunc(onError, [error, info]);
      } else {
        console.error([error, info]);
      }

      this.setState({
        hasError: true
      });
    }
  }], [{
    key: "getDerivedStateFromError",
    value: function getDerivedStateFromError(error) {
      return {
        hasError: true
      };
    }
  }]);

  return BasePopup;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(BasePopup, "defaultProps", {
  name: 'default'
});

/* harmony default export */ __webpack_exports__["default"] = (BasePopup);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../../../../react-atomic-ui/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/molecules/PopupFloatEl.js":
/*!****************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/build/es/ui/molecules/PopupFloatEl.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "./node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "./node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/possibleConstructorReturn */ "./node_modules/reshow-runtime/es/helpers/possibleConstructorReturn.js");
/* harmony import */ var reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/getPrototypeOf */ "./node_modules/reshow-runtime/es/helpers/getPrototypeOf.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "./node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var get_window_offset__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! get-window-offset */ "./node_modules/get-window-offset/build/es/src/index.js");
/* harmony import */ var to_percent_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! to-percent-js */ "./node_modules/to-percent-js/build/es/src/index.js");
/* harmony import */ var _molecules_PopupOverlay__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../molecules/PopupOverlay */ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/molecules/PopupOverlay.js");









function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}







var PopupFloatEl = /*#__PURE__*/function (_PopupOverlay) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(PopupFloatEl, _PopupOverlay);

  var _super = _createSuper(PopupFloatEl);

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(PopupFloatEl, [{
    key: "getFloatEl",

    /**
     * For monitor window resize
     */

    /**
     * For extend class
     */
    value: function getFloatEl() {
      return this.floatEl;
    }
  }]);

  function PopupFloatEl(props) {
    var _this;

    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, PopupFloatEl);

    _this = _super.call(this, props); // Need exted state form parent class (PopupOverlay)

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "_mount", false);

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleResize", function () {
      _this.handleMoveTo();
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleMoveTo", function () {
      if (!_this.floatEl || !_this._mount) {
        return;
      }

      var targetEl = _this.props.targetEl;

      if (!document.body.contains(targetEl)) {
        return;
      }

      var pos = _this.calPos();

      if (!pos) {
        return;
      }

      var diffTop = Math.abs(pos.top - Object(to_percent_js__WEBPACK_IMPORTED_MODULE_11__["toInt"])(_this.floatTop));
      var diffLeft = Math.abs(pos.left - Object(to_percent_js__WEBPACK_IMPORTED_MODULE_11__["toInt"])(_this.floatLeft));

      if (1 >= diffTop && 1 >= diffLeft && pos.width === _this.floatWidth && pos.height === _this.floatHeight && pos.className === _this.floatClassName) {
        return;
      }

      _this.floatTop = pos.top;
      _this.floatLeft = pos.left;
      _this.floatWidth = pos.width;
      _this.floatHeight = pos.height;
      _this.floatClassName = pos.className;

      _this.setState(pos);
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "calPos", function () {
      var _this$props = _this.props,
          targetEl = _this$props.targetEl,
          alignParams = _this$props.alignParams;
      var winInfo = Object(get_window_offset__WEBPACK_IMPORTED_MODULE_10__["default"])(targetEl);

      if (!_this.floatEl || !targetEl || !winInfo) {
        return false;
      }

      var info = Object(get_window_offset__WEBPACK_IMPORTED_MODULE_10__["alignUI"])(targetEl, _this.floatEl, alignParams, winInfo);

      if (!info) {
        console.error('can not get alignUI info');
        return;
      }

      var move = info.move,
          loc = info.loc;
      var result = {
        top: move[1],
        left: move[0],
        className: Object(get_window_offset__WEBPACK_IMPORTED_MODULE_10__["getPositionString"])(loc)
      };
      return result;
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "setFloatEl", function (el) {
      if (el) {
        _this.floatEl = el;
      }

      setTimeout(function () {
        return _this.handleMoveTo();
      });
    });

    _this.state = Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _this.state, {
      refCb: _this.setFloatEl
    });
    return _this;
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(PopupFloatEl, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this._mount = true;
      window.addEventListener('resize', this.handleResize);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      this.handleMoveTo();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._mount = false;
      window.removeEventListener('resize', this.handleResize);
    }
  }]);

  return PopupFloatEl;
}(_molecules_PopupOverlay__WEBPACK_IMPORTED_MODULE_12__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(PopupFloatEl, "defaultProps", {
  style: {
    position: 'absolute',
    right: 'auto'
  },
  name: 'float',
  className: 'popup'
});

/* harmony default export */ __webpack_exports__["default"] = (PopupFloatEl);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../../../../react-atomic-ui/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/molecules/PopupModal.js":
/*!**************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/build/es/ui/molecules/PopupModal.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/extends */ "./node_modules/reshow-runtime/es/helpers/extends.js");
/* harmony import */ var reshow_runtime_es_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/typeof */ "./node_modules/reshow-runtime/es/helpers/typeof.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutProperties */ "./node_modules/reshow-runtime/es/helpers/objectWithoutProperties.js");
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "./node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "./node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reshow-runtime/es/helpers/possibleConstructorReturn */ "./node_modules/reshow-runtime/es/helpers/possibleConstructorReturn.js");
/* harmony import */ var reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reshow-runtime/es/helpers/getPrototypeOf */ "./node_modules/reshow-runtime/es/helpers/getPrototypeOf.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "./node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var organism_react_animate__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! organism-react-animate */ "./node_modules/organism-react-animate/build/es/src/index.js");
/* harmony import */ var get_scroll_info__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! get-scroll-info */ "./node_modules/get-scroll-info/build/es/src/index.js");
/* harmony import */ var getoffset__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! getoffset */ "./node_modules/getoffset/build/es/src/index.js");
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! get-object-value */ "./node_modules/get-object-value/build/es/src/index.js");
/* harmony import */ var array_merge__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! array.merge */ "./node_modules/array.merge/build/es/src/index.js");
/* harmony import */ var class_lib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! class-lib */ "./node_modules/class-lib/build/src/index.js");
/* harmony import */ var class_lib__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(class_lib__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var call_func__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! call-func */ "./node_modules/call-func/build/es/src/index.js");
/* harmony import */ var win_doc__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! win-doc */ "./node_modules/win-doc/build/es/src/index.js");
/* harmony import */ var reshow_constant__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! reshow-constant */ "./node_modules/reshow-constant/build/es/index.js");
/* harmony import */ var _molecules_PopupOverlay__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../molecules/PopupOverlay */ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/molecules/PopupOverlay.js");
/* harmony import */ var _src_popupDispatcher__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../src/popupDispatcher */ "../react-atomic-organism/packages/organism-react-popup/build/es/src/popupDispatcher.js");












function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_8__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_7__["default"])(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}














/**
 * 1. if you need trace show: true
 * it extend from PopupOverlay
 *
 * 2. if you don't auto append Content component
 * you could pass center or content to equla false
 */

var PopupModal = /*#__PURE__*/function (_PopupOverlay) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__["default"])(PopupModal, _PopupOverlay);

  var _super = _createSuper(PopupModal);

  function PopupModal() {
    var _this;

    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__["default"])(this, PopupModal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_timer", null);

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "_mount", false);

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleClick", function () {
      return _this.close();
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleModalRefCb", function (el) {
      return _this.el = el;
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "handleModalClick", function (cb) {
      return function (e) {
        e.stopPropagation();
        Object(call_func__WEBPACK_IMPORTED_MODULE_19__["default"])(cb, [e]);
      };
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "reCalculate", function () {
      _this._timer = setTimeout(function () {
        if (_this.el) {
          var domInfo = Object(getoffset__WEBPACK_IMPORTED_MODULE_15__["default"])(_this.el);

          if (domInfo) {
            var domHalfHeight = domInfo.h / 2;
            var marginTop = Math.floor(1 - domHalfHeight);

            var _getScrollInfo = Object(get_scroll_info__WEBPACK_IMPORTED_MODULE_14__["default"])(),
                scrollNodeHeight = _getScrollInfo.scrollNodeHeight;

            var maskStyle = {};

            if (domInfo.h * 3 > scrollNodeHeight) {
              marginTop = 0;
            }

            if (domInfo.h + 30 > scrollNodeHeight) {
              maskStyle = Styles.flexAlignTop;
            }

            var _this$state = _this.state,
                orgModalStyle = _this$state.modalStyle,
                orgMaskStyle = _this$state.maskStyle;

            if (_this._mount && (Object(get_object_value__WEBPACK_IMPORTED_MODULE_16__["default"])(orgModalStyle, ['marginTop']) !== marginTop || Object(get_object_value__WEBPACK_IMPORTED_MODULE_16__["default"])(orgMaskStyle, ['justifyContent']) !== maskStyle.justifyContent)) {
              _this.setState(function (_ref) {
                var modalStyle = _ref.modalStyle;
                modalStyle = Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, modalStyle, {
                  marginTop: marginTop
                });
                return {
                  maskStyle: maskStyle,
                  modalStyle: modalStyle
                };
              });
            }
          }
        }
      });
    });

    return _this;
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__["default"])(PopupModal, [{
    key: "close",
    value: function close() {
      Object(_src_popupDispatcher__WEBPACK_IMPORTED_MODULE_23__["popupDispatch"])({
        type: 'dom/closeOne',
        params: {
          popup: this
        }
      });
    }
  }, {
    key: "lockScreen",
    value: function lockScreen() {
      var _this$props = this.props,
          modal = _this$props.modal,
          toPool = _this$props.toPool;
      var oDoc = Object(win_doc__WEBPACK_IMPORTED_MODULE_20__["doc"])();
      Object(win_doc__WEBPACK_IMPORTED_MODULE_20__["win"])().addEventListener('resize', this.reCalculate);
      var body = oDoc.body;
      var addBodyClass = Object(class_lib__WEBPACK_IMPORTED_MODULE_18__["mixClass"])(body.className, {
        scrolling: this.props.maskScroll
      }, 'dimmable', 'dimmed');

      if (!toPool) {
        body.className = addBodyClass;
      }
    }
  }, {
    key: "resetBodyClassName",
    value: function resetBodyClassName() {
      var toPool = this.props.toPool;
      var body = Object(win_doc__WEBPACK_IMPORTED_MODULE_20__["doc"])().body;

      if (!toPool && body) {
        var bodyClass = body.className;
        bodyClass = Object(class_lib__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(bodyClass, 'dimmable');
        bodyClass = Object(class_lib__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(bodyClass, 'scrolling');
        bodyClass = Object(class_lib__WEBPACK_IMPORTED_MODULE_18__["removeClass"])(bodyClass, 'dimmed');
        body.className = bodyClass;
      }
    }
  }, {
    key: "detach",
    value: function detach() {
      /**
       * closeCallback will deprecate
       */
      if (Object(class_lib__WEBPACK_IMPORTED_MODULE_18__["hasClass"])(Object(get_object_value__WEBPACK_IMPORTED_MODULE_16__["default"])(Object(win_doc__WEBPACK_IMPORTED_MODULE_20__["doc"])(), ['body', 'className']), 'dimmed')) {
        var _this$props2 = this.props,
            closeCallback = _this$props2.closeCallback,
            onClose = _this$props2.onClose; //settimeout is for fixed cant setstate during render error

        setTimeout(function () {
          return Object(call_func__WEBPACK_IMPORTED_MODULE_19__["default"])(onClose || closeCallback);
        });
      } // do detach (need put after onClose else will make modal can't appear again)


      clearTimeout(this._timer);
      this.resetBodyClassName();
      Object(win_doc__WEBPACK_IMPORTED_MODULE_20__["win"])().removeEventListener('resize', this.reCalculate);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this._mount = true;
      setTimeout(function () {
        return _this2.reCalculate();
      }, 300);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      var _this3 = this;

      setTimeout(function () {
        return _this3.reCalculate();
      }, 300);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._mount = false;
      this.detach();
    }
  }, {
    key: "shouldShow",
    value: function shouldShow(show) {
      var _this$state2 = this.state,
          stateModalStyle = _this$state2.modalStyle,
          stateMaskStyle = _this$state2.maskStyle;

      var _this$props3 = this.props,
          disableClose = _this$props3.disableClose,
          scrolling = _this$props3.scrolling,
          appear = _this$props3.appear,
          enter = _this$props3.enter,
          leave = _this$props3.leave,
          style = _this$props3.style,
          styles = _this$props3.styles,
          contentStyle = _this$props3.contentStyle,
          modal = _this$props3.modal,
          modalClassName = _this$props3.modalClassName,
          modalStyle = _this$props3.modalStyle,
          mask = _this$props3.mask,
          maskScroll = _this$props3.maskScroll,
          toPool = _this$props3.toPool,
          closeEl = _this$props3.closeEl,
          closeCallback = _this$props3.closeCallback,
          onClose = _this$props3.onClose,
          className = _this$props3.className,
          contentClassName = _this$props3.contentClassName,
          name = _this$props3.name,
          id = _this$props3.id,
          others = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$props3, ["disableClose", "scrolling", "appear", "enter", "leave", "style", "styles", "contentStyle", "modal", "modalClassName", "modalStyle", "mask", "maskScroll", "toPool", "closeEl", "closeCallback", "onClose", "className", "contentClassName", "name", "id"]);

      var containerClick = null;
      var thisCloseEl;
      var content = '';

      if (show) {
        this.lockScreen();

        if (!closeEl) {
          if (!disableClose) {
            containerClick = this.handleClick;
          }
        } else {
          thisCloseEl = Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_12__["build"])(closeEl)({
            onClick: this.handleClick,
            key: 'close',
            style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({
              zIndex: 1001,
              position: 'fixed'
            }, closeEl.props.style)
          });
        }

        var thisModal = modal;

        if (reshow_constant__WEBPACK_IMPORTED_MODULE_21__["UNDEFINED"] === Object(reshow_runtime_es_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__["default"])(thisModal)) {
          thisModal = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_12__["Dimmer"], Object(reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, others, {
            isModal: "true",
            className: Object(class_lib__WEBPACK_IMPORTED_MODULE_18__["mixClass"])({
              scrolling: scrolling
            }, modalClassName),
            show: show,
            contentStyle: contentStyle
          }));
        }

        if (Object(react__WEBPACK_IMPORTED_MODULE_11__["isValidElement"])(thisModal)) {
          var orgModalOnClick = Object(get_object_value__WEBPACK_IMPORTED_MODULE_16__["default"])(thisModal, ['props', 'onClick']);
          thisModal = Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_12__["build"])(thisModal)({
            refCb: this.handleModalRefCb,
            onClick: this.handleModalClick(orgModalOnClick),
            styles: Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_12__["reactStyle"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, Styles.modal, {}, modalStyle, {}, stateModalStyle), false, false)
          });
        }

        if (mask) {
          var thisStyles = Object(array_merge__WEBPACK_IMPORTED_MODULE_17__["default"])(Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_12__["reactStyle"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_3__["default"])({}, Styles.background, {}, style, {}, stateMaskStyle), false, false), styles);
          content = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_12__["Dimmer"], {
            className: Object(class_lib__WEBPACK_IMPORTED_MODULE_18__["mixClass"])('page modals', contentClassName),
            show: show,
            center: false,
            styles: thisStyles,
            styleOrder: 1,
            onClick: containerClick,
            key: "modals"
          }, thisModal);
        } else {
          content = thisModal;
        }
      } else {
        this.detach();
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_12__["SemanticUI"], {
        ui: false,
        className: className,
        name: name,
        id: id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement(organism_react_animate__WEBPACK_IMPORTED_MODULE_13__["default"], {
        appear: appear,
        enter: enter,
        leave: leave
      }, content), thisCloseEl);
    }
  }]);

  return PopupModal;
}(_molecules_PopupOverlay__WEBPACK_IMPORTED_MODULE_22__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_10__["default"])(PopupModal, "defaultProps", {
  mask: true,
  maskScroll: false,
  scrolling: false,
  name: 'modal',
  disableClose: false
});

/* harmony default export */ __webpack_exports__["default"] = (PopupModal);
var Styles = {
  flexAlignTop: {
    justifyContent: 'flex-start',
    WebkitBoxPack: 'start',
    MsFlexPack: 'start'
  },
  background: {
    overflow: 'auto',
    boxSizing: 'border-box'
  },
  modal: {
    boxSizing: 'border-box',
    right: 'auto',
    bottom: 'auto',
    transition: ['all 500ms ease']
  }
};

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../../../../react-atomic-ui/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/molecules/PopupOverlay.js":
/*!****************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/build/es/ui/molecules/PopupOverlay.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/extends */ "./node_modules/reshow-runtime/es/helpers/extends.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutProperties */ "./node_modules/reshow-runtime/es/helpers/objectWithoutProperties.js");
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "./node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "./node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/possibleConstructorReturn */ "./node_modules/reshow-runtime/es/helpers/possibleConstructorReturn.js");
/* harmony import */ var reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reshow-runtime/es/helpers/getPrototypeOf */ "./node_modules/reshow-runtime/es/helpers/getPrototypeOf.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "./node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var reshow_return__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reshow-return */ "./node_modules/reshow-return/build/es/src/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! get-object-value */ "./node_modules/get-object-value/build/es/src/index.js");
/* harmony import */ var get_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! get-style */ "./node_modules/get-style/build/src/index.js");
/* harmony import */ var get_style__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(get_style__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _molecules_BasePopup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../molecules/BasePopup */ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/molecules/BasePopup.js");
/* harmony import */ var _src_stores_popupStore__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../src/stores/popupStore */ "../react-atomic-organism/packages/organism-react-popup/build/es/src/stores/popupStore.js");









function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}









var PopupOverlay = /*#__PURE__*/function (_BasePopup) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(PopupOverlay, _BasePopup);

  var _super = _createSuper(PopupOverlay);

  function PopupOverlay() {
    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, PopupOverlay);

    return _super.apply(this, arguments);
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(PopupOverlay, [{
    key: "resetStyle",
    value: function resetStyle(key, thisStyle) {
      var _this = this;

      var value = Object(get_object_value__WEBPACK_IMPORTED_MODULE_11__["default"])(this.state, [key], function () {
        return Object(get_object_value__WEBPACK_IMPORTED_MODULE_11__["default"])(_this.props, [key]);
      });

      if ('undefined' !== typeof value) {
        thisStyle[key] = value + 'px';
      }
    }
  }, {
    key: "renderOverlay",
    value: function renderOverlay(props) {
      var className = props.className,
          others = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["className"]);

      var classes = Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_10__["mixClass"])('popup', className);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_10__["SemanticUI"], Object(reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, others, {
        className: classes
      }));
    }
  }, {
    key: "shouldShow",
    value: function shouldShow(show) {
      var _this2 = this;

      if (!show) {
        return null;
      }

      var _this$props = this.props,
          targetEl = _this$props.targetEl,
          toPool = _this$props.toPool,
          alignParams = _this$props.alignParams,
          isFollowTransform = _this$props.isFollowTransform,
          className = _this$props.className,
          style = _this$props.style,
          group = _this$props.group,
          others = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$props, ["targetEl", "toPool", "alignParams", "isFollowTransform", "className", "style", "group"]);
      /* <!-- Handle Style */


      var thisStyle = Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style);

      this.resetStyle('top', thisStyle);
      this.resetStyle('left', thisStyle);
      this.resetStyle('width', thisStyle);
      this.resetStyle('height', thisStyle);

      if (targetEl && isFollowTransform) {
        thisStyle.transform = get_style__WEBPACK_IMPORTED_MODULE_12___default()(targetEl, 'transform');
      }

      others.style = thisStyle;
      /*  Handle Style --> */

      var refCb = Object(get_object_value__WEBPACK_IMPORTED_MODULE_11__["default"])(this.state, ['refCb'], function () {
        return Object(get_object_value__WEBPACK_IMPORTED_MODULE_11__["default"])(_this2.props, ['refCb']);
      });

      if (refCb) {
        others.refCb = refCb;
      }

      others.className = Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_10__["mixClass"])(className, Object(get_object_value__WEBPACK_IMPORTED_MODULE_11__["default"])(this, ['state', 'className']), 'visible');
      return this.renderOverlay(others);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      if (this.state.hasError) {
        return null;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(reshow_return__WEBPACK_IMPORTED_MODULE_9__["default"], {
        stores: [_src_stores_popupStore__WEBPACK_IMPORTED_MODULE_14__["default"]],
        initStates: ['shows']
      }, function (_ref) {
        var shows = _ref.shows;
        var show = Object(get_object_value__WEBPACK_IMPORTED_MODULE_11__["default"])(shows, [_this3.props.name]);
        return _this3.shouldShow(show);
      });
    }
  }]);

  return PopupOverlay;
}(_molecules_BasePopup__WEBPACK_IMPORTED_MODULE_13__["default"]);

/* harmony default export */ __webpack_exports__["default"] = (PopupOverlay);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../../../../react-atomic-ui/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/organisms/AlertsNotifier.js":
/*!******************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/build/es/ui/organisms/AlertsNotifier.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/extends */ "./node_modules/reshow-runtime/es/helpers/extends.js");
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "./node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "./node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/possibleConstructorReturn */ "./node_modules/reshow-runtime/es/helpers/possibleConstructorReturn.js");
/* harmony import */ var reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reshow-runtime/es/helpers/getPrototypeOf */ "./node_modules/reshow-runtime/es/helpers/getPrototypeOf.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "./node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! immutable */ "./node_modules/immutable/dist/immutable.js");
/* harmony import */ var immutable__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(immutable__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var organism_react_animate__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! organism-react-animate */ "./node_modules/organism-react-animate/build/es/src/index.js");
/* harmony import */ var ricon_X__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ricon/X */ "./node_modules/ricon/X.js");
/* harmony import */ var ricon_X__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ricon_X__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var call_func__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! call-func */ "./node_modules/call-func/build/es/src/index.js");










function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}








var messageTypes = ['success', 'info', 'warning', 'error'];

var Alert = /*#__PURE__*/function (_Component) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Alert, _Component);

  var _super = _createSuper(Alert);

  function Alert() {
    var _this;

    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Alert);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      hoverStyle: null
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleMouseEnter", function () {
      _this.setState({
        hoverStyle: {
          opacity: '.9'
        }
      });
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleMouseLeave", function () {
      _this.setState({
        hoverStyle: null
      });
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClick", function () {
      var onClick = _this.props.onClick;
      onClick();
    });

    return _this;
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Alert, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          duration = _this$props.duration,
          onClick = _this$props.onClick;

      if (duration * 1 > 0) {
        setTimeout(function () {
          return onClick();
        }, duration);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          messageType = _this$props2.messageType,
          header = _this$props2.header,
          message = _this$props2.message,
          onClick = _this$props2.onClick;
      var hoverStyle = this.state.hoverStyle;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_14__["Message"], {
        messageType: messageType,
        header: header
      }, message, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(ricon_X__WEBPACK_IMPORTED_MODULE_13___default.a, {
        style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Styles.xicon, {}, hoverStyle),
        weight: ".1rem",
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        onClick: this.handleClick
      }));
    }
  }]);

  return Alert;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

var AlertsNotifier = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(AlertsNotifier, _PureComponent);

  var _super2 = _createSuper(AlertsNotifier);

  function AlertsNotifier() {
    var _this2;

    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AlertsNotifier);

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    _this2 = _super2.call.apply(_super2, [this].concat(args));

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this2), "state", {
      dismissedAlerts: Object(immutable__WEBPACK_IMPORTED_MODULE_11__["Set"])()
    });

    return _this2;
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(AlertsNotifier, [{
    key: "dismiss",
    value: function dismiss(item) {
      var onDismiss = this.props.onDismiss;
      var isContinue = Object(call_func__WEBPACK_IMPORTED_MODULE_15__["default"])(onDismiss, [item]);

      if (false !== isContinue) {
        // if no callback for dismissal, just update our state
        this.setState(function (_ref) {
          var dismissedAlerts = _ref.dismissedAlerts;
          return {
            dismissedAlerts: dismissedAlerts.add(item)
          };
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props3 = this.props,
          ani = _this$props3.ani,
          alerts = _this$props3.alerts,
          position = _this$props3.position,
          duration = _this$props3.duration;
      var dismissedAlerts = this.state.dismissedAlerts;
      var alertArr = [];

      if (alerts && alerts.length) {
        alerts.forEach(function (item, key) {
          var thisItem = 'string' === typeof item ? {
            message: item
          } : item;

          if (!dismissedAlerts.has(item)) {
            if (-1 === messageTypes.indexOf(thisItem.type)) {
              thisItem.type = 'info';
            }

            var oAlert = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(Alert, {
              key: key,
              duration: duration,
              messageType: thisItem.type,
              message: thisItem.message,
              header: thisItem.header,
              onClick: _this3.dismiss.bind(_this3, item)
            });
            alertArr.push(oAlert);
          }
        });
      }

      var positionStyle = {};

      if ('top' === position) {
        positionStyle.top = 5;
      } else {
        positionStyle.bottom = 5;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(organism_react_animate__WEBPACK_IMPORTED_MODULE_12__["default"], Object(reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, ani, {
        style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Styles.container, {}, positionStyle)
      }), alertArr);
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      var alerts = nextProps.alerts;

      if (alerts !== prevState.prevPropsAlerts) {
        return {
          prevPropsAlerts: alerts,
          dismissedAlerts: Object(immutable__WEBPACK_IMPORTED_MODULE_11__["Set"])()
        };
      } else {
        return null;
      }
    }
  }]);

  return AlertsNotifier;
}(react__WEBPACK_IMPORTED_MODULE_9__["PureComponent"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(AlertsNotifier, "defaultProps", {
  ani: {
    appear: 'fadeIn',
    enter: 'fadeIn',
    leave: 'fadeOut'
  },
  position: 'top',
  name: 'alerts',
  duration: 3000
});

AlertsNotifier.propTypes =  true ? {
  alerts: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array,
  onDismiss: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (AlertsNotifier);
var Styles = {
  container: {
    position: 'fixed',
    left: 10,
    right: 10,
    zIndex: 9999
  },
  xicon: {
    top: 20,
    right: 10,
    opacity: '.5'
  }
};

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../../../../react-atomic-ui/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/organisms/Dialog.js":
/*!**********************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/build/es/ui/organisms/Dialog.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/extends */ "./node_modules/reshow-runtime/es/helpers/extends.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutProperties */ "./node_modules/reshow-runtime/es/helpers/objectWithoutProperties.js");
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "./node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "./node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/possibleConstructorReturn */ "./node_modules/reshow-runtime/es/helpers/possibleConstructorReturn.js");
/* harmony import */ var reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/getPrototypeOf */ "./node_modules/reshow-runtime/es/helpers/getPrototypeOf.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "./node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var _molecules_PopupModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../molecules/PopupModal */ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/molecules/PopupModal.js");
/* harmony import */ var _molecules_BasePopup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../molecules/BasePopup */ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/molecules/BasePopup.js");









function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}





var isArray = Array.isArray;

var Dialog = /*#__PURE__*/function (_BasePopup) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(Dialog, _BasePopup);

  var _super = _createSuper(Dialog);

  function Dialog() {
    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Dialog);

    return _super.apply(this, arguments);
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(Dialog, [{
    key: "handleClick",
    value: function handleClick(button, e) {
      var onClick = this.props.onClick;

      if ('function' === typeof onClick) {
        // Locate befor this.popup.close()
        // because need trigger befor onClose
        onClick(e, button);
      }

      this.popup.close();
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          size = _this$props.size,
          className = _this$props.className,
          name = _this$props.name,
          buttons = _this$props.buttons,
          header = _this$props.header,
          children = _this$props.children,
          i18nNegativeBtn = _this$props.i18nNegativeBtn,
          i18nPositiveBtn = _this$props.i18nPositiveBtn,
          onClick = _this$props.onClick,
          props = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["size", "className", "name", "buttons", "header", "children", "i18nNegativeBtn", "i18nPositiveBtn", "onClick"]);

      var thisHeader = null;
      var thisButtons = buttons;

      if (header) {
        thisHeader = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_9__["Header"], null, header);
      }

      if (!isArray(thisButtons) || !thisButtons.length) {
        thisButtons = [/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_9__["Button"], {
          value: false,
          className: "negative",
          key: "b-negative"
        }, i18nNegativeBtn), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_9__["Button"], {
          value: true,
          className: "positive",
          key: "b-positive"
        }, i18nPositiveBtn)];
      }

      thisButtons = thisButtons.map(function (button) {
        return Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_9__["build"])(button)({
          onClick: _this.handleClick.bind(_this, button)
        });
      });
      var classes = Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_9__["mixClass"])(className, 'dialog', size);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_molecules_PopupModal__WEBPACK_IMPORTED_MODULE_10__["default"], Object(reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        modalClassName: classes,
        name: name,
        content: false,
        ref: function ref(el) {
          return _this.popup = el;
        }
      }, props), thisHeader, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_9__["Content"], null, children), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_9__["List"], {
        type: "actions"
      }, thisButtons));
    }
  }]);

  return Dialog;
}(_molecules_BasePopup__WEBPACK_IMPORTED_MODULE_11__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Dialog, "defaultProps", {
  name: 'dialog',
  i18nNegativeBtn: 'No',
  i18nPositiveBtn: 'Yes',
  size: 'mini',
  disableClose: true
});

/* harmony default export */ __webpack_exports__["default"] = (Dialog);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../../../../react-atomic-ui/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/organisms/DisplayPopupEl.js":
/*!******************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/build/es/ui/organisms/DisplayPopupEl.js ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "./node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "./node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/possibleConstructorReturn */ "./node_modules/reshow-runtime/es/helpers/possibleConstructorReturn.js");
/* harmony import */ var reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/getPrototypeOf */ "./node_modules/reshow-runtime/es/helpers/getPrototypeOf.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "./node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _src_popupDispatcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../src/popupDispatcher */ "../react-atomic-organism/packages/organism-react-popup/build/es/src/popupDispatcher.js");








function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}



var isArray = Array.isArray;

var DisplayPopupEl = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(DisplayPopupEl, _PureComponent);

  var _super = _createSuper(DisplayPopupEl);

  function DisplayPopupEl() {
    var _this;

    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, DisplayPopupEl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "_mount", false);

    return _this;
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(DisplayPopupEl, [{
    key: "getChildren",
    value: function getChildren() {
      return this.props.children;
    }
  }, {
    key: "setFloat",
    value: function setFloat() {
      var _this2 = this;

      setTimeout(function () {
        if (_this2._mount) {
          Object(_src_popupDispatcher__WEBPACK_IMPORTED_MODULE_8__["popupDispatch"])({
            type: 'dom/update',
            params: {
              popup: _this2.getChildren()
            }
          });
        }
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._mount = true;
      this.setFloat();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      this.setFloat();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._mount = false;
      Object(_src_popupDispatcher__WEBPACK_IMPORTED_MODULE_8__["popupDispatch"])({
        type: 'dom/cleanOne',
        params: {
          popup: this.getChildren()
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return DisplayPopupEl;
}(react__WEBPACK_IMPORTED_MODULE_7__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (DisplayPopupEl);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../../../../react-atomic-ui/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/organisms/FullScreen.js":
/*!**************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/build/es/ui/organisms/FullScreen.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "./node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "./node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/possibleConstructorReturn */ "./node_modules/reshow-runtime/es/helpers/possibleConstructorReturn.js");
/* harmony import */ var reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/getPrototypeOf */ "./node_modules/reshow-runtime/es/helpers/getPrototypeOf.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "./node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ricon_X__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ricon/X */ "./node_modules/ricon/X.js");
/* harmony import */ var ricon_X__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ricon_X__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! get-object-value */ "./node_modules/get-object-value/build/es/src/index.js");
/* harmony import */ var call_func__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! call-func */ "./node_modules/call-func/build/es/src/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var _molecules_PopupModal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../molecules/PopupModal */ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/molecules/PopupModal.js");
/* harmony import */ var _organisms_DisplayPopupEl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../organisms/DisplayPopupEl */ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/organisms/DisplayPopupEl.js");
/* harmony import */ var _src_popupDispatcher__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../src/popupDispatcher */ "../react-atomic-organism/packages/organism-react-popup/build/es/src/popupDispatcher.js");









function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}










var FullScreen = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__["default"])(FullScreen, _PureComponent);

  var _super = _createSuper(FullScreen);

  function FullScreen() {
    var _this;

    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, FullScreen);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "xIcoEnter", function () {
      setTimeout(function () {
        if (!_this._mounted) {
          return null;
        }

        _this.setState({
          xIcoHoverStyle: Styles.xIcoHover
        });
      });
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "xIcoLeave", function () {
      if (!_this._mounted) {
        return null;
      }

      _this.setState({
        xIcoHoverStyle: null
      });
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "handleClose", function () {
      var _this$props = _this.props,
          onClose = _this$props.onClose,
          removeOnClose = _this$props.removeOnClose;
      Object(call_func__WEBPACK_IMPORTED_MODULE_11__["default"])(onClose);

      if (removeOnClose) {
        // use setTimeout to avoid call setState druing render 
        setTimeout(function () {
          return Object(_src_popupDispatcher__WEBPACK_IMPORTED_MODULE_15__["popupDispatch"])({
            type: 'dom/cleanOne',
            params: {
              popup: Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this)
            }
          });
        });
      }
    });

    return _this;
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(FullScreen, [{
    key: "getDefaultXIcon",
    value: function getDefaultXIcon() {
      var _get = Object(get_object_value__WEBPACK_IMPORTED_MODULE_10__["default"])(this, ['state'], {}),
          xIcoHoverStyle = _get.xIcoHoverStyle;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(ricon_X__WEBPACK_IMPORTED_MODULE_9___default.a, {
        onMouseEnter: this.xIcoEnter,
        onMouseLeave: this.xIcoLeave,
        style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Styles.x, {}, xIcoHoverStyle),
        size: "75px",
        weight: ".1rem"
      });
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._mounted = true;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._mounted = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          style = _this$props2.style,
          onClose = _this$props2.onClose,
          toPool = _this$props2.toPool;
      var xico = this.getDefaultXIcon();
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_organisms_DisplayPopupEl__WEBPACK_IMPORTED_MODULE_14__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_molecules_PopupModal__WEBPACK_IMPORTED_MODULE_13__["default"], {
        appear: "fadeIn-500",
        enter: "fadeIn-500",
        className: Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_12__["mixClass"])('full-screen', className),
        scrolling: true,
        style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Styles.container, {}, style),
        modalClassName: "basic",
        modalStyle: Styles.modal,
        modal: children,
        closeEl: xico,
        onClose: this.handleClose,
        toPool: toPool
      }));
    }
  }]);

  return FullScreen;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(FullScreen, "defaultProps", {
  name: 'fullscreen'
});

/* harmony default export */ __webpack_exports__["default"] = (FullScreen);
var Styles = {
  container: {
    background: '#fff',
    textAlign: 'left',
    padding: 0
  },
  x: {
    width: '70px',
    height: '75px',
    borderRadius: '8px',
    backgroundColor: 'rgba(190,190,190,.39)',
    top: '20px',
    right: '20px',
    opacity: '.3'
  },
  xIcoHover: {
    opacity: '.9'
  }
};

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../../../../react-atomic-ui/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/organisms/PopupClick.js":
/*!**************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/build/es/ui/organisms/PopupClick.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutProperties */ "./node_modules/reshow-runtime/es/helpers/objectWithoutProperties.js");
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "./node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "./node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/possibleConstructorReturn */ "./node_modules/reshow-runtime/es/helpers/possibleConstructorReturn.js");
/* harmony import */ var reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reshow-runtime/es/helpers/getPrototypeOf */ "./node_modules/reshow-runtime/es/helpers/getPrototypeOf.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "./node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var _molecules_PopupOverlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../molecules/PopupOverlay */ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/molecules/PopupOverlay.js");
/* harmony import */ var _src_popupDispatcher__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../src/popupDispatcher */ "../react-atomic-organism/packages/organism-react-popup/build/es/src/popupDispatcher.js");










function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}






var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_10__["SemanticUI"], null);

var PopupClick = /*#__PURE__*/function (_Component) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(PopupClick, _Component);

  var _super = _createSuper(PopupClick);

  function PopupClick() {
    var _this;

    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, PopupClick);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleClick", function () {
      var _this$props = _this.props,
          propsPopup = _this$props.popup,
          callback = _this$props.callback;
      var popup;

      if (react__WEBPACK_IMPORTED_MODULE_9___default.a.isValidElement(propsPopup)) {
        popup = propsPopup;
      } else if (typeof propsPopup === 'function') {
        popup = propsPopup();
      } else {
        popup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_molecules_PopupOverlay__WEBPACK_IMPORTED_MODULE_11__["default"], null, propsPopup);
      }

      Object(_src_popupDispatcher__WEBPACK_IMPORTED_MODULE_12__["popupDispatch"])({
        type: 'dom/update',
        params: {
          popup: popup
        }
      });

      if (typeof callback === 'function') {
        callback(popup);
      }
    });

    return _this;
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(PopupClick, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          style = _this$props2.style,
          className = _this$props2.className,
          container = _this$props2.container,
          popup = _this$props2.popup,
          callback = _this$props2.callback,
          reset = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props2, ["style", "className", "container", "popup", "callback"]);

      if (!react__WEBPACK_IMPORTED_MODULE_9___default.a.isValidElement(container)) {
        container = _ref;
      }

      style = Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, style, {}, Styles.container);
      className = Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_10__["mixClass"])(className, 'popup-click');

      var props = Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, reset, {
        onClick: this.handleClick,
        className: className,
        style: style
      });

      return Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_10__["build"])(container)(props);
    }
  }]);

  return PopupClick;
}(react__WEBPACK_IMPORTED_MODULE_9__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PopupClick);
var Styles = {
  container: {
    cursor: 'pointer'
  }
};

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../../../../react-atomic-ui/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/organisms/PopupHover.js":
/*!**************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/build/es/ui/organisms/PopupHover.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutProperties */ "./node_modules/reshow-runtime/es/helpers/objectWithoutProperties.js");
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "./node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "./node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/possibleConstructorReturn */ "./node_modules/reshow-runtime/es/helpers/possibleConstructorReturn.js");
/* harmony import */ var reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reshow-runtime/es/helpers/getPrototypeOf */ "./node_modules/reshow-runtime/es/helpers/getPrototypeOf.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "./node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var _src_popupDispatcher__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../src/popupDispatcher */ "../react-atomic-organism/packages/organism-react-popup/build/es/src/popupDispatcher.js");
/* harmony import */ var _molecules_PopupFloatEl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../molecules/PopupFloatEl */ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/molecules/PopupFloatEl.js");










function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}





var closeTimer = {};

var PopupHover = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(PopupHover, _PureComponent);

  var _super = _createSuper(PopupHover);

  function PopupHover() {
    var _this;

    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, PopupHover);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "popup", null);

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "floatMouseOver", function () {
      _this.isKeep = true;
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "floatMouseOut", function () {
      _this.isKeep = false;

      _this.close();
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "mouseOver", function () {
      var name = _this.props.name;
      clearTimeout(closeTimer[name]);
      _this.popup = Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_10__["build"])(_this.popup)({
        targetEl: _this.dom
      });
      Object(_src_popupDispatcher__WEBPACK_IMPORTED_MODULE_11__["popupDispatch"])({
        type: 'dom/update',
        params: {
          popup: _this.popup
        }
      });
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "mouseOut", function () {
      var name = _this.props.name;
      clearTimeout(closeTimer[name]);
      closeTimer[name] = setTimeout(function () {
        _this.close();
      }, 100);
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "close", function () {
      var isKeep = _this.props.isKeep;

      if (_this.isKeep || isKeep) {
        return;
      }

      Object(_src_popupDispatcher__WEBPACK_IMPORTED_MODULE_11__["popupDispatch"])({
        type: 'dom/closeOne',
        params: {
          popup: _this.popup
        }
      });
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleDom", function (dom) {
      return _this.dom = dom;
    });

    return _this;
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(PopupHover, [{
    key: "update",
    value: function update(props) {
      var popup = props.popup,
          name = props.name,
          toPool = props.toPool,
          alignParams = props.alignParams;
      this.popup = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_molecules_PopupFloatEl__WEBPACK_IMPORTED_MODULE_12__["default"], {
        toPool: toPool,
        name: name,
        alignParams: alignParams,
        onMouseEnter: this.floatMouseOver,
        onMouseLeave: this.floatMouseOut
      }, popup);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.update(this.props);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, snapshot) {
      this.update(this.props);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      Object(_src_popupDispatcher__WEBPACK_IMPORTED_MODULE_11__["popupDispatch"])({
        type: 'dom/cleanOne',
        params: {
          popup: this.popup
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          popup = _this$props.popup,
          isKeep = _this$props.isKeep,
          toPool = _this$props.toPool,
          alignParams = _this$props.alignParams,
          component = _this$props.component,
          others = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_this$props, ["popup", "isKeep", "toPool", "alignParams", "component"]);

      return Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_10__["build"])(component)(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
        refCb: this.handleDom,
        onMouseEnter: this.mouseOver,
        onMouseLeave: this.mouseOut
      }, others));
    }
  }]);

  return PopupHover;
}(react__WEBPACK_IMPORTED_MODULE_9__["PureComponent"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(PopupHover, "defaultProps", {
  name: 'popup-hover',
  component: react_atomic_molecule__WEBPACK_IMPORTED_MODULE_10__["SemanticUI"]
});

/* harmony default export */ __webpack_exports__["default"] = (PopupHover);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../../../../react-atomic-ui/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/organisms/PopupMonitor.js":
/*!****************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/build/es/ui/organisms/PopupMonitor.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutProperties */ "./node_modules/reshow-runtime/es/helpers/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src_popupDispatcher__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/popupDispatcher */ "../react-atomic-organism/packages/organism-react-popup/build/es/src/popupDispatcher.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var call_func__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! call-func */ "./node_modules/call-func/build/es/src/index.js");
var _s = $RefreshSig$();







var PopupMonitor = function PopupMonitor(_ref) {
  _s();

  var children = _ref.children,
      className = _ref.className,
      getPopupKey = _ref.getPopupKey,
      PopupElement = _ref.PopupElement,
      otherProps = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, ["children", "className", "getPopupKey", "PopupElement"]);

  var popupKey = Object(call_func__WEBPACK_IMPORTED_MODULE_4__["default"])(getPopupKey, [otherProps]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var myPopupElement = Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["build"])(PopupElement, [otherProps]);

    if (popupKey) {
      Object(_src_popupDispatcher__WEBPACK_IMPORTED_MODULE_2__["popupDispatch"])('dom/update', {
        popup: myPopupElement
      });
    } else {
      Object(_src_popupDispatcher__WEBPACK_IMPORTED_MODULE_2__["popupDispatch"])('dom/closeAll', {
        popup: myPopupElement
      });
    }
  }, [getPopupKey, PopupElement]);
  otherProps.className = Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["mixClass"])(className, 'popup-monitor');

  if (popupKey) {
    delete otherProps[popupKey];
  }

  return Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["build"])(children)(otherProps);
};

_s(PopupMonitor, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = PopupMonitor;
/* harmony default export */ __webpack_exports__["default"] = (PopupMonitor);

var _c;

$RefreshReg$(_c, "PopupMonitor");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../../../../react-atomic-ui/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-popup/build/es/ui/organisms/PopupPool.js":
/*!*************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-popup/build/es/ui/organisms/PopupPool.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutProperties */ "./node_modules/reshow-runtime/es/helpers/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! get-object-value */ "./node_modules/get-object-value/build/es/src/index.js");
/* harmony import */ var reshow_return__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-return */ "./node_modules/reshow-return/build/es/src/index.js");
/* harmony import */ var _src_stores_popupStore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/stores/popupStore */ "../react-atomic-organism/packages/organism-react-popup/build/es/src/stores/popupStore.js");







var keys = Object.keys;

var getPops = function getPops(nodes, name) {
  nodes = Object(get_object_value__WEBPACK_IMPORTED_MODULE_4__["default"])(nodes) || {};
  var pops = [];
  keys(nodes).map(function (key) {
    var node = nodes[key];
    var nodeProps = Object(get_object_value__WEBPACK_IMPORTED_MODULE_4__["default"])(node, ["props"], {});
    var toPool = nodeProps.toPool;

    if ((name || toPool) && toPool !== name) {
      return;
    }

    pops.push(Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["build"])(node)({
      key: key
    }));
  });
  return pops;
};

var PopupPool = function PopupPool(_ref) {
  var name = _ref.name,
      component = _ref.component,
      otherProps = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["name", "component"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reshow_return__WEBPACK_IMPORTED_MODULE_5__["default"], {
    stores: [_src_stores_popupStore__WEBPACK_IMPORTED_MODULE_6__["default"]],
    initStates: ["nodes"]
  }, function (_ref2) {
    var nodes = _ref2.nodes;
    var pops = getPops(nodes, name);

    if (pops.length) {
      return Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["build"])(component)(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
        'data-name': name,
        className: "popup-pool",
        ui: false
      }, otherProps), pops);
    } else {
      return null;
    }
  });
};

_c = PopupPool;
PopupPool.defaultProps = {
  component: react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["SemanticUI"]
};
/* harmony default export */ __webpack_exports__["default"] = (PopupPool);

var _c;

$RefreshReg$(_c, "PopupPool");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../../../../react-atomic-ui/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-spotlight/build/es/src/cleanClass.js":
/*!*********************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-spotlight/build/es/src/cleanClass.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var class_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-lib */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/class-lib/build/src/index.js");
/* harmony import */ var class_lib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(class_lib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var css_query_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-query-selector */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/css-query-selector/build/es/src/index.js");



var cleanClass = function cleanClass(className) {
  var allEl = css_query_selector__WEBPACK_IMPORTED_MODULE_1__["default"].all('.' + className);
  allEl.forEach(function (el) {
    if (el instanceof SVGElement) {
      el.setAttribute('class', Object(class_lib__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(el.getAttribute('class'), className));
    } else {
      el.className = Object(class_lib__WEBPACK_IMPORTED_MODULE_0__["removeClass"])(el.className, className);
    }
  });
};

/* harmony default export */ __webpack_exports__["default"] = (cleanClass);

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-spotlight/build/es/src/cleanZIndex.js":
/*!**********************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-spotlight/build/es/src/cleanZIndex.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var get_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! get-style */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/get-style/build/src/index.js");
/* harmony import */ var get_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(get_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setClass */ "../react-atomic-organism/packages/organism-react-spotlight/build/es/src/setClass.js");



var cleanZIndex = function cleanZIndex(node) {
  var classCleanZIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'react-spotlight-clean-zindex';
  var classShowEl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var thisParent = node.parentNode;

  if (!thisParent) {
    return;
  }

  var isFindFixedParent;

  while (thisParent && thisParent.nodeName != 'BODY') {
    var zIndex = get_style__WEBPACK_IMPORTED_MODULE_0___default()(thisParent, 'z-index');

    if (zIndex && 'auto' !== zIndex) {
      var position = get_style__WEBPACK_IMPORTED_MODULE_0___default()(thisParent, 'position');

      if ('fixed' !== position || !classShowEl) {
        Object(_setClass__WEBPACK_IMPORTED_MODULE_1__["default"])(thisParent, [classCleanZIndex]);
      } else if ('fixed' === position) {
        if (!isFindFixedParent) {
          isFindFixedParent = true;
          Object(_setClass__WEBPACK_IMPORTED_MODULE_1__["default"])(thisParent, [classShowEl]);
        }
      }
    }

    thisParent = thisParent.parentNode;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (cleanZIndex);

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-spotlight/build/es/src/index.js":
/*!****************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-spotlight/build/es/src/index.js ***!
  \****************************************************************************************/
/*! exports provided: default, LightBox, cleanClass, cleanZIndex, setClass, showEl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_organisms_Spotlight__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/organisms/Spotlight */ "../react-atomic-organism/packages/organism-react-spotlight/build/es/ui/organisms/Spotlight.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ui_organisms_Spotlight__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ui_molecules_LightBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/molecules/LightBox */ "../react-atomic-organism/packages/organism-react-spotlight/build/es/ui/molecules/LightBox.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LightBox", function() { return _ui_molecules_LightBox__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _cleanClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cleanClass */ "../react-atomic-organism/packages/organism-react-spotlight/build/es/src/cleanClass.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cleanClass", function() { return _cleanClass__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _cleanZIndex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cleanZIndex */ "../react-atomic-organism/packages/organism-react-spotlight/build/es/src/cleanZIndex.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cleanZIndex", function() { return _cleanZIndex__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _setClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./setClass */ "../react-atomic-organism/packages/organism-react-spotlight/build/es/src/setClass.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setClass", function() { return _setClass__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _showEl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./showEl */ "../react-atomic-organism/packages/organism-react-spotlight/build/es/src/showEl.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "showEl", function() { return _showEl__WEBPACK_IMPORTED_MODULE_5__["default"]; });


 // library






/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-spotlight/build/es/src/setClass.js":
/*!*******************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-spotlight/build/es/src/setClass.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var class_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-lib */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/class-lib/build/src/index.js");
/* harmony import */ var class_lib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(class_lib__WEBPACK_IMPORTED_MODULE_0__);


var setClass = function setClass(node, classes) {
  if (node instanceof SVGElement) {
    var thisClass = Object(class_lib__WEBPACK_IMPORTED_MODULE_0__["mixClass"])(node.getAttribute('class'), classes);
    node.setAttribute('class', thisClass);
  } else {
    node.className = Object(class_lib__WEBPACK_IMPORTED_MODULE_0__["mixClass"])(node.className, classes);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (setClass);

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-spotlight/build/es/src/showEl.js":
/*!*****************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-spotlight/build/es/src/showEl.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var get_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! get-style */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/get-style/build/src/index.js");
/* harmony import */ var get_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(get_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setClass */ "../react-atomic-organism/packages/organism-react-spotlight/build/es/src/setClass.js");



var addSvgClass = function addSvgClass(node, classes) {
  Object(_setClass__WEBPACK_IMPORTED_MODULE_1__["default"])(node, classes);
  var thisParent = node.parentNode;

  if (!thisParent) {
    return;
  }

  while (thisParent.nodeName != "BODY") {
    // svg always in lower case
    if (thisParent.nodeName.toLowerCase() === "svg") {
      Object(_setClass__WEBPACK_IMPORTED_MODULE_1__["default"])(thisParent, classes);
      break;
    }

    thisParent = thisParent.parentNode;

    if (!thisParent) {
      break;
    }
  }
};

var showEl = function showEl(node) {
  var classShowEl = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "react-spotlight-show-el";
  var classRelative = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "react-spotlight-relative";
  var position = get_style__WEBPACK_IMPORTED_MODULE_0___default()(node, "position");
  var classes = [classShowEl];

  if ("static" === position) {
    classes.push(classRelative);
  }

  addSvgClass(node, classes);

  if (node && node instanceof SVGElement) {
    addSvgClass(node, classes);
  } else {
    Object(_setClass__WEBPACK_IMPORTED_MODULE_1__["default"])(node, classes);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (showEl);

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-spotlight/build/es/ui/molecules/LightBox.js":
/*!****************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-spotlight/build/es/ui/molecules/LightBox.js ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/extends */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/reshow-runtime/es/helpers/extends.js");
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutProperties */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/reshow-runtime/es/helpers/objectWithoutProperties.js");
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reshow-runtime/es/helpers/possibleConstructorReturn */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/reshow-runtime/es/helpers/possibleConstructorReturn.js");
/* harmony import */ var reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reshow-runtime/es/helpers/getPrototypeOf */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/reshow-runtime/es/helpers/getPrototypeOf.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-atomic-molecule */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var organism_react_popup__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! organism-react-popup */ "../react-atomic-organism/packages/organism-react-popup/build/es/src/index.js");
/* harmony import */ var getoffset__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! getoffset */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/getoffset/build/es/src/index.js");
/* harmony import */ var get_window_offset__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! get-window-offset */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/get-window-offset/build/es/src/index.js");
/* harmony import */ var array_merge__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! array.merge */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/array.merge/build/es/src/index.js");











function _createSuper(Derived) {
  return function () {
    var Super = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__["default"])(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}








var LightBox = /*#__PURE__*/function (_PopupFloatEl) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__["default"])(LightBox, _PopupFloatEl);

  var _super = _createSuper(LightBox);

  function LightBox() {
    var _this;

    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, LightBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this), "calPos", function () {
      var _this$props = _this.props,
          targetEl = _this$props.targetEl,
          padding = _this$props.padding;
      var pos = Object(getoffset__WEBPACK_IMPORTED_MODULE_13__["default"])(targetEl, Object(get_window_offset__WEBPACK_IMPORTED_MODULE_14__["isFixed"])(targetEl));
      var width = pos.right - pos.left + padding * 2;
      var height = pos.bottom - pos.top + padding * 2;
      var top = pos.top - padding;
      var left = pos.left - padding;
      return {
        top: top,
        left: left,
        width: width,
        height: height
      };
    });

    return _this;
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(LightBox, [{
    key: "renderOverlay",
    value: function renderOverlay(props) {
      var wh = props.wh,
          styles = props.styles,
          style = props.style,
          className = props.className,
          others = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["wh", "styles", "style", "className"]);

      var thisStyles = Object(array_merge__WEBPACK_IMPORTED_MODULE_15__["default"])(Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_11__["reactStyle"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, Styles.container, {}, style), null, false), styles);
      var classes = Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_11__["mixClass"])(props.name, className, 'react-spotlight-box');
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_11__["SemanticUI"], Object(reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, others, {
        className: classes,
        styles: thisStyles
      }));
    }
  }]);

  return LightBox;
}(organism_react_popup__WEBPACK_IMPORTED_MODULE_12__["PopupFloatEl"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(LightBox, "defaultProps", {
  padding: 5
});

LightBox.displayName = 'LightBox';
var Styles = {
  container: {
    borderRadius: 4,
    position: 'absolute',
    boxShadow: ['0 2px 15px rgba(0,0,0,.4)'],
    zIndex: 99998,
    backgroundColor: 'rgba(255,255,255,.9)'
  }
};
/* harmony default export */ __webpack_exports__["default"] = (LightBox);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../../../../react-atomic-ui/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-spotlight/build/es/ui/organisms/Spotlight.js":
/*!*****************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-spotlight/build/es/ui/organisms/Spotlight.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/extends */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/reshow-runtime/es/helpers/extends.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutProperties */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/reshow-runtime/es/helpers/objectWithoutProperties.js");
/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/possibleConstructorReturn */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/reshow-runtime/es/helpers/possibleConstructorReturn.js");
/* harmony import */ var reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reshow-runtime/es/helpers/getPrototypeOf */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/reshow-runtime/es/helpers/getPrototypeOf.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-atomic-molecule */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var getoffset__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! getoffset */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/getoffset/build/es/src/index.js");
/* harmony import */ var organism_react_popup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! organism-react-popup */ "../react-atomic-organism/packages/organism-react-popup/build/es/src/index.js");
/* harmony import */ var get_window_offset__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! get-window-offset */ "../react-atomic-organism/packages/organism-react-spotlight/node_modules/get-window-offset/build/es/src/index.js");
/* harmony import */ var _molecules_LightBox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../molecules/LightBox */ "../react-atomic-organism/packages/organism-react-spotlight/build/es/ui/molecules/LightBox.js");
/* harmony import */ var _src_cleanZIndex__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../src/cleanZIndex */ "../react-atomic-organism/packages/organism-react-spotlight/build/es/src/cleanZIndex.js");
/* harmony import */ var _src_cleanClass__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../src/cleanClass */ "../react-atomic-organism/packages/organism-react-spotlight/build/es/src/cleanClass.js");
/* harmony import */ var _src_showEl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../src/showEl */ "../react-atomic-organism/packages/organism-react-spotlight/build/es/src/showEl.js");









function _createSuper(Derived) {
  return function () {
    var Super = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived),
        result;

    if (_isNativeReflectConstruct()) {
      var NewTarget = Object(reshow_runtime_es_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return Object(reshow_runtime_es_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}










var injects;
var nodeId = 0;

var SpotlightEl = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(SpotlightEl, _PureComponent);

  var _super = _createSuper(SpotlightEl);

  function SpotlightEl() {
    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, SpotlightEl);

    return _super.apply(this, arguments);
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(SpotlightEl, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      Object(_src_cleanClass__WEBPACK_IMPORTED_MODULE_15__["default"])('react-spotlight-show-el');
      Object(_src_cleanClass__WEBPACK_IMPORTED_MODULE_15__["default"])('react-spotlight-relative');
      Object(_src_cleanClass__WEBPACK_IMPORTED_MODULE_15__["default"])('react-spotlight-clean-zindex');
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          name = _this$props.name,
          targetEl = _this$props.targetEl,
          props = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$props, ["name", "targetEl"]);

      Object(_src_cleanZIndex__WEBPACK_IMPORTED_MODULE_14__["default"])(targetEl);
      var thisStyles = [injects.lightBox];
      var isFixedNode = Object(get_window_offset__WEBPACK_IMPORTED_MODULE_12__["isFixed"])(targetEl);
      Object(_src_showEl__WEBPACK_IMPORTED_MODULE_16__["default"])(targetEl);

      if (isFixedNode) {
        thisStyles.push(injects.fixed);
      }

      var nodePos = Object(getoffset__WEBPACK_IMPORTED_MODULE_10__["default"])(targetEl, isFixedNode);
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_9__["SemanticUI"], {
        key: name,
        name: name
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_11__["PopupModal"], Object(reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({}, props, {
        name: name,
        modal: null,
        styles: injects.modal
      })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_molecules_LightBox__WEBPACK_IMPORTED_MODULE_13__["default"], {
        wh: [nodePos.w, nodePos.h],
        targetEl: targetEl,
        name: name,
        styles: thisStyles
      }));
    }
  }]);

  return SpotlightEl;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

var Spotlight = /*#__PURE__*/function (_PureComponent2) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Spotlight, _PureComponent2);

  var _super2 = _createSuper(Spotlight);

  function Spotlight(props) {
    var _this;

    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Spotlight);

    _this = _super2.call(this, props);
    injects = Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_9__["lazyInject"])(injects, InjectStyles);
    return _this;
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Spotlight, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          targetEl = _this$props2.targetEl,
          props = Object(reshow_runtime_es_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(_this$props2, ["targetEl"]);

      if (!targetEl) {
        console.warn(['Need assign targetEl', targetEl]);
        return null;
      }

      if (!targetEl.id) {
        targetEl.id = 'spotlight-el-' + nodeId;
        nodeId++;
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_11__["DisplayPopupEl"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(SpotlightEl, Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        targetEl: targetEl,
        name: targetEl.id
      })));
    }
  }]);

  return Spotlight;
}(react__WEBPACK_IMPORTED_MODULE_8__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (Spotlight);
var InjectStyles = {
  lightBox: [{
    transitionDuration: '500ms',
    transitionProperty: 'all'
  }],
  modal: [{
    background: ['-webkit-radial-gradient(center,ellipse cover,rgba(0,0,0,0.4) 0,rgba(0,0,0,0.9) 100%)', 'radial-gradient(center,ellipse cover,rgba(0,0,0,0.4) 0,rgba(0,0,0,0.9) 100%)'],
    height: '200%'
  }],
  fixed: [{
    position: 'fixed !important'
  }, '.react-spotlight-fixed', 'react-spotlight-fixed'],
  showEl: [{
    zIndex: '99999 !important'
  }, '.react-spotlight-show-el', 'react-spotlight-show-el'],
  relative: [{
    position: 'relative !important'
  }, '.react-spotlight-relative', 'react-spotlight-relative']
};

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../../../../react-atomic-ui/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/src/client.js":
/*!*****************************!*\
  !*** ./build/src/client.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_app_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-app/client */ "./node_modules/reshow-app/client.js");
/* harmony import */ var _ui_pages_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/pages/index */ "./build/ui/pages/index.js");
/* harmony import */ var _i13n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i13n */ "./build/src/i13n.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(reshow_app_client__WEBPACK_IMPORTED_MODULE_0__["default"])(_ui_pages_index__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./build/src/i13n.js":
/*!***************************!*\
  !*** ./build/src/i13n.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var organism_react_i13n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! organism-react-i13n */ "./node_modules/organism-react-i13n/build/es/src/index.js");


var actionHandler = function actionHandler(state, action) {
  console.log('action', action);
  return state;
};

var impressionHandler = function impressionHandler(state, action) {
  console.log('view', state.get('pvid'));
  return state;
};

var initHandler = function initHandler(state, action) {
  console.log('init', state);
  return state;
};

Object(organism_react_i13n__WEBPACK_IMPORTED_MODULE_0__["i13nDispatch"])('config/set', {
  initHandler: initHandler,
  actionHandler: actionHandler,
  impressionHandler: impressionHandler
});

/***/ }),

/***/ "./build/ui/organisms/AjaxDownload.example.js":
/*!****************************************************!*\
  !*** ./build/ui/organisms/AjaxDownload.example.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-progress */ "./node_modules/organism-react-progress/build/es/src/index.js");
/* harmony import */ var organism_react_ajax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-ajax */ "./node_modules/organism-react-ajax/build/es/src/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var ajax_save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ajax-save */ "./node_modules/ajax-save/build/es/src/index.js");






var AjaxDownloadExample = function AjaxDownloadExample(props) {
  var url = 'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: function onClick() {
      Object(organism_react_ajax__WEBPACK_IMPORTED_MODULE_2__["ajaxDispatch"])('ajaxGet', {
        responseType: ['blob'],
        url: url,
        callback: function callback(json, text, o) {
          Object(ajax_save__WEBPACK_IMPORTED_MODULE_4__["download"])(o.body, url.split('/').splice(-1)[0]);
        }
      });
    }
  }, "Ajax Download");
};

_c = AjaxDownloadExample;
/* harmony default export */ __webpack_exports__["default"] = (AjaxDownloadExample);

var _c;

$RefreshReg$(_c, "AjaxDownloadExample");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/AlertsNotifier.example.js":
/*!******************************************************!*\
  !*** ./build/ui/organisms/AlertsNotifier.example.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var organism_react_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-popup */ "../react-atomic-organism/packages/organism-react-popup/build/es/src/index.js");




var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null);

var AlertsNotifierExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AlertsNotifierExample, _PureComponent);

  function AlertsNotifierExample() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = AlertsNotifierExample.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_2__["PopupClick"], {
      style: Styles.click,
      popup: function popup() {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_2__["AlertsNotifier"], {
          position: "bottom",
          alerts: [{
            type: 'info',
            message: 'test'
          }]
        });
      },
      container: _ref
    }, "alert");
  };

  return AlertsNotifierExample;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (AlertsNotifierExample);
var Styles = {
  click: {
    color: 'blue',
    textDecoration: 'underline'
  }
};

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/Animation.example.js":
/*!*************************************************!*\
  !*** ./build/ui/organisms/Animation.example.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var organism_react_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-animate */ "./node_modules/organism-react-animate/build/es/src/index.js");



var hello = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Hello world!!");

var AnimationExample = /*#__PURE__*/function (_Component) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AnimationExample, _Component);

  function AnimationExample(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    _this.state = {
      dom: hello
    };
    return _this;
  }

  var _proto = AnimationExample.prototype;

  _proto.render = function render() {
    var _this2 = this;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(organism_react_animate__WEBPACK_IMPORTED_MODULE_2__["default"], {
      appear: "fadeInRight-3000",
      enter: "fadeInRight-3000",
      leave: "fadeOutRight-1000"
    }, this.state.dom), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#",
      style: {
        marginLeft: '10px'
      },
      onClick: function (e) {
        e.preventDefault();

        _this2.setState({
          dom: null
        });
      }.bind(this)
    }, "leave"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#",
      style: {
        marginLeft: '10px'
      },
      onClick: function (e) {
        e.preventDefault();

        _this2.setState({
          dom: hello
        });
      }.bind(this)
    }, "enter"));
  };

  return AnimationExample;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AnimationExample);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/AnimationDelay.example.js":
/*!******************************************************!*\
  !*** ./build/ui/organisms/AnimationDelay.example.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var organism_react_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-animate */ "./node_modules/organism-react-animate/build/es/src/index.js");



var foo = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "Hello");
var bar = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "world!!");

var AnimationDelayExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AnimationDelayExample, _PureComponent);

  function AnimationDelayExample(props) {
    var _this;

    _this = _PureComponent.call(this, props) || this;
    _this.state = {
      foo: foo,
      bar: bar
    };
    return _this;
  }

  var _proto = AnimationDelayExample.prototype;

  _proto.render = function render() {
    var _this2 = this;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(organism_react_animate__WEBPACK_IMPORTED_MODULE_2__["default"], {
      appear: "fadeInRight-3000",
      enter: "fadeInRight-3000",
      leave: "fadeOutRight-1000"
    }, this.state.foo), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(organism_react_animate__WEBPACK_IMPORTED_MODULE_2__["default"], {
      appear: "fadeInRight-3000-500",
      enter: "fadeInRight-3000-500",
      leave: "fadeOutRight-1000-500"
    }, this.state.bar), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#",
      style: {
        marginLeft: '10px'
      },
      onClick: function (e) {
        e.preventDefault();

        _this2.setState({
          foo: null,
          bar: null
        });
      }.bind(this)
    }, "leave"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#",
      style: {
        marginLeft: '10px'
      },
      onClick: function (e) {
        e.preventDefault();

        _this2.setState({
          foo: foo,
          bar: bar
        });
      }.bind(this)
    }, "enter"));
  };

  return AnimationDelayExample;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (AnimationDelayExample);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/AnimationReplace.example.js":
/*!********************************************************!*\
  !*** ./build/ui/organisms/AnimationReplace.example.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var organism_react_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-animate */ "./node_modules/organism-react-animate/build/es/src/index.js");


/**
 * Production please use
 * import Animate from "organism-react-animate"
 */



var AnimationReplaceExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AnimationReplaceExample, _PureComponent);

  function AnimationReplaceExample() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = AnimationReplaceExample.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(organism_react_animate__WEBPACK_IMPORTED_MODULE_2__["Replace"], {
      enter: "fadeInRight-2000",
      leave: "fadeOutRight-1000",
      style: {
        minHeight: 30,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        background: "#f4cc70"
      }
    }, "1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        background: "#de7a22"
      }
    }, "2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        background: "#20948b"
      }
    }, "3"));
  };

  return AnimationReplaceExample;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (AnimationReplaceExample);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/AsciiDoc.example.js":
/*!************************************************!*\
  !*** ./build/ui/organisms/AsciiDoc.example.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var organism_react_asciidoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-asciidoc */ "./node_modules/organism-react-asciidoc/build/es/src/index.js");



var adoc = "\n:toc:\n:toc-placement!:\ntoc::[]\n\n= h1 - test\ntest\n\n== h2 - test2\n* Hello *world*\n\n== h2 - test3\n- [ ] option1\n- [*] option1\n";

var AsciidocDemo = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AsciidocDemo, _PureComponent);

  function AsciidocDemo() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = AsciidocDemo.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(organism_react_asciidoc__WEBPACK_IMPORTED_MODULE_2__["default"], {
      options: {
        doctype: "book"
      }
    }, adoc);
  };

  return AsciidocDemo;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (AsciidocDemo);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/CarouselAnimation.example.js":
/*!*********************************************************!*\
  !*** ./build/ui/organisms/CarouselAnimation.example.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-carousel */ "./node_modules/organism-react-carousel/build/es/src/index.js");



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], null, "2");

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], null, "3");

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], null, "4");

var _ref4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], null, "5");

var CarouselAnimationExample = function CarouselAnimationExample(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselAnimation"], {
    carouselAttr: {
      style: Styles.carousel
    },
    style: Styles.container
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: Styles.img,
    src: "https://c1.staticflickr.com/9/8567/16584613141_d984a3680a_b.jpg"
  })), _ref, _ref2, _ref3, _ref4);
};

_c = CarouselAnimationExample;
/* harmony default export */ __webpack_exports__["default"] = (CarouselAnimationExample);
var Styles = {
  container: {
    margin: '0 10%'
  },
  carousel: {
    width: '100%',
    height: 300,
    background: '#00558B'
  },
  img: {
    maxWidth: '100%',
    verticalAlign: 'bottom'
  }
};

var _c;

$RefreshReg$(_c, "CarouselAnimationExample");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/CarouselAnimationHideThumb.example.js":
/*!******************************************************************!*\
  !*** ./build/ui/organisms/CarouselAnimationHideThumb.example.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-carousel */ "./node_modules/organism-react-carousel/build/es/src/index.js");



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], null, "2");

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], null, "3");

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], null, "4");

var _ref4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], null, "5");

var CarouselAnimationExample = function CarouselAnimationExample(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselAnimation"], {
    carouselAttr: {
      style: Styles.carousel
    },
    style: Styles.container,
    hideThumb: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: Styles.img,
    src: "https://c1.staticflickr.com/9/8567/16584613141_d984a3680a_b.jpg"
  })), _ref, _ref2, _ref3, _ref4);
};

_c = CarouselAnimationExample;
/* harmony default export */ __webpack_exports__["default"] = (CarouselAnimationExample);
var Styles = {
  container: {
    margin: '0 10%'
  },
  carousel: {
    width: '100%',
    height: 300,
    background: '#00558B'
  },
  img: {
    maxWidth: '100%',
    verticalAlign: 'bottom'
  }
};

var _c;

$RefreshReg$(_c, "CarouselAnimationExample");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/CarouselSlide.example.js":
/*!*****************************************************!*\
  !*** ./build/ui/organisms/CarouselSlide.example.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-carousel */ "./node_modules/organism-react-carousel/build/es/src/index.js");



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], null, "2");

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], null, "3");

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], null, "4");

var _ref4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], null, "5");

var CarouselSlideExample = function CarouselSlideExample(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselSlide"], {
    carouselAttr: {
      style: Styles.carousel
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: Styles.img,
    src: "https://c1.staticflickr.com/9/8567/16584613141_d984a3680a_b.jpg"
  })), _ref, _ref2, _ref3, _ref4);
};

_c = CarouselSlideExample;
/* harmony default export */ __webpack_exports__["default"] = (CarouselSlideExample);
var Styles = {
  carousel: {
    width: 300,
    height: 300,
    background: '#00558B'
  }
};

var _c;

$RefreshReg$(_c, "CarouselSlideExample");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/Checkbox.example.js":
/*!************************************************!*\
  !*** ./build/ui/organisms/Checkbox.example.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var react_atomic_organism__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-atomic-organism */ "./node_modules/react-atomic-organism/build/es/src/index.js");





var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_atomic_organism__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_atomic_organism__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
  type: "radio"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_atomic_organism__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
  toggle: true
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_atomic_organism__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
  slider: true
}));

var CheckboxExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CheckboxExample, _PureComponent);

  function CheckboxExample() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = CheckboxExample.prototype;

  _proto.render = function render() {
    return _ref;
  };

  return CheckboxExample;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (CheckboxExample);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/CodeEditor.example.js":
/*!**************************************************!*\
  !*** ./build/ui/organisms/CodeEditor.example.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_codeeditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-codeeditor */ "./node_modules/organism-react-codeeditor/build/es/src/index.js");



var CodeEditorExample = function CodeEditorExample(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: function onClick() {
      return Object(organism_react_codeeditor__WEBPACK_IMPORTED_MODULE_1__["openCodeEditor"])();
    }
  }, "open");
};

_c = CodeEditorExample;
/* harmony default export */ __webpack_exports__["default"] = (CodeEditorExample);

var _c;

$RefreshReg$(_c, "CodeEditorExample");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/CodeExample.example.js":
/*!***************************************************!*\
  !*** ./build/ui/organisms/CodeExample.example.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-code */ "./node_modules/organism-react-code/build/es/src/index.js");
/* harmony import */ var _raw_loader_ui_organisms_CodeExample_example__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/CodeExample.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CodeExample.example.jsx");

/**
 * Production please use
 * import CodeExample from 'organism-react-code'
 */


/**
 * Your source code.
 * npm i raw-loader
 */



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_1__["default"], {
  code: _raw_loader_ui_organisms_CodeExample_example__WEBPACK_IMPORTED_MODULE_2__["default"],
  header: "Test Header",
  git: "react-atomic/react-atomic-organism/tree/master/packages/organism-react-code/",
  npm: "organism-react-code"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Test Demo Area"));

var CodeExampleExample = function CodeExampleExample(props) {
  return _ref;
};

_c = CodeExampleExample;
/* harmony default export */ __webpack_exports__["default"] = (CodeExampleExample);

var _c;

$RefreshReg$(_c, "CodeExampleExample");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/D3AreaChart.example.js":
/*!***************************************************!*\
  !*** ./build/ui/organisms/D3AreaChart.example.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_d3_axis_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-d3-axis-chart */ "./node_modules/organism-react-d3-axis-chart/build/es/src/index.js");


var data = [{
  values: [{
    x: '2019-01',
    y: 100
  }, {
    x: '2019-02',
    y: 450
  }, {
    x: '2019-03',
    y: 450
  }, {
    x: '2019-04',
    y: 0
  }, {
    x: '2019-05',
    y: 0
  }]
}];

var D3AreaChart = function D3AreaChart(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_d3_axis_chart__WEBPACK_IMPORTED_MODULE_1__["AreaChart"], {
    data: data,
    style: {
      maxHeight: 450
    }
  });
};

_c = D3AreaChart;
/* harmony default export */ __webpack_exports__["default"] = (D3AreaChart);

var _c;

$RefreshReg$(_c, "D3AreaChart");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/D3BarChart.example.js":
/*!**************************************************!*\
  !*** ./build/ui/organisms/D3BarChart.example.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_d3_axis_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-d3-axis-chart */ "./node_modules/organism-react-d3-axis-chart/build/es/src/index.js");



var D3BarChart = function D3BarChart(props) {
  var data = {
    values: [{
      x: '2013-01',
      y: 53
    }, {
      x: '2013-02',
      y: 165
    }, {
      x: '2013-03',
      y: 269
    }]
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_d3_axis_chart__WEBPACK_IMPORTED_MODULE_1__["BarChart"], {
    data: data,
    style: {
      maxHeight: 450
    }
  });
};

_c = D3BarChart;
/* harmony default export */ __webpack_exports__["default"] = (D3BarChart);

var _c;

$RefreshReg$(_c, "D3BarChart");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/D3LineChart.example.js":
/*!***************************************************!*\
  !*** ./build/ui/organisms/D3LineChart.example.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_d3_axis_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-d3-axis-chart */ "./node_modules/organism-react-d3-axis-chart/build/es/src/index.js");



var D3LineChart = function D3LineChart(props) {
  var data = [{
    values: [{
      x: '2013-01',
      y: 100
    }, {
      x: '2013-02',
      y: 450
    }, {
      x: '2013-01',
      y: 450
    }]
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_d3_axis_chart__WEBPACK_IMPORTED_MODULE_1__["LineChart"], {
    data: data,
    style: {
      maxHeight: 450
    },
    hideAxis: true,
    thresholds: [200]
  });
};

_c = D3LineChart;
/* harmony default export */ __webpack_exports__["default"] = (D3LineChart);

var _c;

$RefreshReg$(_c, "D3LineChart");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/D3PieChart.example.js":
/*!**************************************************!*\
  !*** ./build/ui/organisms/D3PieChart.example.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_d3_piechart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-d3-piechart */ "./node_modules/organism-react-d3-piechart/build/es/src/index.js");



var D3PieChartExample = function D3PieChartExample(props) {
  var data = [{
    value: 10,
    label: 'xxx'
  }, {
    value: 30,
    label: 'yyy'
  }];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_d3_piechart__WEBPACK_IMPORTED_MODULE_1__["default"], {
    data: data,
    style: {
      maxWidth: 300
    },
    unit: ""
  });
};

_c = D3PieChartExample;
/* harmony default export */ __webpack_exports__["default"] = (D3PieChartExample);

var _c;

$RefreshReg$(_c, "D3PieChartExample");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/D3Uml.example.js":
/*!*********************************************!*\
  !*** ./build/ui/organisms/D3Uml.example.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var organism_react_d3_uml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-d3-uml */ "./node_modules/organism-react-d3-uml/build/es/src/index.js");



var data = {
  tables: [{
    name: 'table1',
    cols: ['t1-col1', 't1-col2']
  }, {
    name: 'table2',
    cols: ['t2-col1', 't2-col2']
  }],
  conns: [{
    from: {
      table: 'table1',
      col: 't1-col1'
    },
    to: {
      table: 'table2',
      col: 't2-col2'
    }
  }]
};

var D3UmlExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(D3UmlExample, _PureComponent);

  function D3UmlExample() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = D3UmlExample.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(organism_react_d3_uml__WEBPACK_IMPORTED_MODULE_2__["UMLGraph"], {
      data: data,
      connsLocator: function connsLocator(d) {
        return d.conns;
      },
      connFromBoxGroupLocator: function connFromBoxGroupLocator(d) {
        return d.from.table;
      },
      connFromBoxLocator: function connFromBoxLocator(d) {
        return d.from.col;
      },
      connToBoxGroupLocator: function connToBoxGroupLocator(d) {
        return d.to.table;
      },
      connToBoxLocator: function connToBoxLocator(d) {
        return d.to.col;
      }
    });
  };

  return D3UmlExample;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (D3UmlExample);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/Dropzone.example.js":
/*!************************************************!*\
  !*** ./build/ui/organisms/Dropzone.example.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var organism_react_dropzone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! organism-react-dropzone */ "./node_modules/organism-react-dropzone/build/es/src/index.js");
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! get-object-value */ "./node_modules/get-object-value/build/es/src/index.js");







var DropzoneExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(DropzoneExample, _PureComponent);

  function DropzoneExample() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "state", {
      urls: []
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "handleClick", function () {
      _this.dropzone.openDialog();
    });

    return _this;
  }

  var _proto = DropzoneExample.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var urls = this.state.urls;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(organism_react_dropzone__WEBPACK_IMPORTED_MODULE_4__["default"], {
      ref: function ref(el) {
        return _this2.dropzone = el;
      },
      acceptedFiles: ".png, .jpg",
      showFiletypeIcon: true,
      postUrl: "https://file.io",
      djsConfig: {
        addRemoveLinks: true
      },
      eventHandlers: {
        success: function success(file) {
          _this2.setState(function (_ref) {
            var urls = _ref.urls;
            var req = Object(get_object_value__WEBPACK_IMPORTED_MODULE_5__["default"])(file, ['xhr', 'response']);

            if (req) {
              var json = JSON.parse(req);
              urls.push(json.link);
            }

            return urls;
          });
        }
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("ul", null, urls.map(function (url, key) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("li", {
        key: key
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("a", {
        href: url,
        target: "_blank"
      }, url));
    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("button", {
      onClick: this.handleClick
    }, "open"));
  };

  return DropzoneExample;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (DropzoneExample);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/FBLike.example.js":
/*!**********************************************!*\
  !*** ./build/ui/organisms/FBLike.example.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_facebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-facebook */ "./node_modules/organism-react-facebook/build/src/index.js");
/* harmony import */ var organism_react_facebook__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(organism_react_facebook__WEBPACK_IMPORTED_MODULE_1__);



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_facebook__WEBPACK_IMPORTED_MODULE_1__["FBLike"], {
  page: "https://www.facebook.com/react"
});

var FBLikeExample = function FBLikeExample(props) {
  return _ref;
};

_c = FBLikeExample;
/* harmony default export */ __webpack_exports__["default"] = (FBLikeExample);

var _c;

$RefreshReg$(_c, "FBLikeExample");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/FBPage.example.js":
/*!**********************************************!*\
  !*** ./build/ui/organisms/FBPage.example.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_facebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-facebook */ "./node_modules/organism-react-facebook/build/src/index.js");
/* harmony import */ var organism_react_facebook__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(organism_react_facebook__WEBPACK_IMPORTED_MODULE_1__);



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_facebook__WEBPACK_IMPORTED_MODULE_1__["FBPage"], {
  page: "react"
});

var FBPageExample = function FBPageExample(props) {
  return _ref;
};

_c = FBPageExample;
/* harmony default export */ __webpack_exports__["default"] = (FBPageExample);

var _c;

$RefreshReg$(_c, "FBPageExample");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/FixedDataTableList.example.js":
/*!**********************************************************!*\
  !*** ./build/ui/organisms/FixedDataTableList.example.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pmvc_react_list */ "./node_modules/pmvc_react_list/build/es/src/index.js");
/* harmony import */ var pmvc_react_list_fixedDataTable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pmvc_react_list/fixedDataTable */ "./node_modules/pmvc_react_list/fixedDataTable.js");
/* harmony import */ var pmvc_react_list_fixedDataTable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pmvc_react_list_fixedDataTable__WEBPACK_IMPORTED_MODULE_3__);




var rows = [['a1', 'b1', 'c1'], ['a2', 'b2', 'c2'], ['a3', 'b3', 'c3'], ['a4', 'b4', 'c4'], ['a5', 'b5', 'c5'], ['a6', 'b6', 'c6']];

var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Cell"], null, "h1");

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Cell"], null, "h2");

var _ref5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Cell"], null, "h3");

var FixedDataTableListExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(FixedDataTableListExample, _PureComponent);

  function FixedDataTableListExample() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = FixedDataTableListExample.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        width: 350
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(pmvc_react_list_fixedDataTable__WEBPACK_IMPORTED_MODULE_3___default.a, {
      rows: rows,
      getColWidth: function getColWidth() {
        return 150;
      },
      height: 150
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Column"], {
      header: _ref,
      cell: function cell(_ref2) {
        var rowIndex = _ref2.rowIndex,
            columnIndex = _ref2.columnKey;
        return rows[rowIndex][columnIndex];
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Column"], {
      header: _ref3,
      cell: function cell(_ref4) {
        var rowIndex = _ref4.rowIndex,
            columnIndex = _ref4.columnKey;
        return rows[rowIndex][columnIndex];
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Column"], {
      header: _ref5,
      cell: function cell(_ref6) {
        var rowIndex = _ref6.rowIndex,
            columnIndex = _ref6.columnKey;
        return rows[rowIndex][columnIndex];
      }
    })));
  };

  return FixedDataTableListExample;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (FixedDataTableListExample);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/FullScreen.example.js":
/*!**************************************************!*\
  !*** ./build/ui/organisms/FullScreen.example.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! get-object-value */ "./node_modules/get-object-value/build/es/src/index.js");
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-code */ "./node_modules/organism-react-code/build/es/src/index.js");





var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["FullScreenExample"], {
  id: "full-screen-example",
  button: "open full screen"
}, "test");

var FullScreenExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(FullScreenExample, _PureComponent);

  function FullScreenExample() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = FullScreenExample.prototype;

  _proto.render = function render() {
    return _ref;
  };

  return FullScreenExample;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (FullScreenExample);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/GrapesJs.example.js":
/*!************************************************!*\
  !*** ./build/ui/organisms/GrapesJs.example.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_grapesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-grapesjs */ "./node_modules/organism-react-grapesjs/build/es/src/index.js");



var GrapesJsExample = function GrapesJsExample() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_grapesjs__WEBPACK_IMPORTED_MODULE_1__["GrapesJsController"], {
    style: Styles.container
  });
};

_c = GrapesJsExample;
/* harmony default export */ __webpack_exports__["default"] = (GrapesJsExample);
var Styles = {
  container: {
    minHeight: 600
  }
};

var _c;

$RefreshReg$(_c, "GrapesJsExample");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/GridList.example.js":
/*!************************************************!*\
  !*** ./build/ui/organisms/GridList.example.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




var rows = [['a1', 'b1', 'c1'], ['a2', 'b2', 'c2'], ['a3', 'b3', 'c3'], ['a4', 'b4', 'c4'], ['a5', 'b5', 'c5'], ['a6', 'b6', 'c6']];
var RVGrid = null;

var GridListExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(GridListExample, _PureComponent);

  function GridListExample() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "state", {
      isLoad: false
    });

    return _this;
  }

  var _proto = GridListExample.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! pmvc_react_list/rv */ "./node_modules/pmvc_react_list/rv.js", 7)).then(function (_ref) {
      var rvGrid = _ref.RVGrid;
      RVGrid = rvGrid;

      _this2.setState({
        isLoad: true
      });
    });
  };

  _proto.render = function render() {
    var isLoad = this.state.isLoad;
    var grid = null;

    if (RVGrid && isLoad) {
      var className = 'grid'; // hack for disable const element

      grid = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(RVGrid, {
        className: className,
        width: 200,
        height: 100,
        rows: rows,
        style: Styles.container
      });
    }

    return grid;
  };

  return GridListExample;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (GridListExample);
var Styles = {
  container: {
    border: '1px solid #000'
  }
};

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/HtmlTableList.example.js":
/*!*****************************************************!*\
  !*** ./build/ui/organisms/HtmlTableList.example.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pmvc_react_list */ "./node_modules/pmvc_react_list/build/es/src/index.js");



var rows = [['a1', 'b1', 'c1'], ['a2', 'b2', 'c2'], ['a3', 'b3', 'c3'], ['a1', 'b1', 'c1'], ['a2', 'b2', 'c2'], ['a3', 'b3', 'c3']];

var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Cell"], null, "h1");

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Cell"], null, "h2");

var _ref5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Cell"], null, "h3");

var HtmlTableListExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlTableListExample, _PureComponent);

  function HtmlTableListExample() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = HtmlTableListExample.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Table"], {
      rows: rows
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Column"], {
      header: _ref,
      cell: function cell(_ref2) {
        var rowIndex = _ref2.rowIndex,
            columnIndex = _ref2.columnIndex;
        return rows[rowIndex][columnIndex];
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Column"], {
      header: _ref3,
      cell: function cell(_ref4) {
        var rowIndex = _ref4.rowIndex,
            columnIndex = _ref4.columnIndex;
        return rows[rowIndex][columnIndex];
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Column"], {
      header: _ref5,
      cell: function cell(_ref6) {
        var rowIndex = _ref6.rowIndex,
            columnIndex = _ref6.columnIndex;
        return rows[rowIndex][2];
      }
    }));
  };

  return HtmlTableListExample;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (HtmlTableListExample);
var Styles = {
  col: {
    height: 40
  }
};

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/Menu.js":
/*!************************************!*\
  !*** ./build/ui/organisms/Menu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pmvc_react_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pmvc_react_admin */ "./node_modules/pmvc_react_admin/build/src/index.js");
/* harmony import */ var pmvc_react_admin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(pmvc_react_admin__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var organism_react_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-navigation */ "./node_modules/organism-react-navigation/build/es/src/index.js");
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! get-object-value */ "./node_modules/get-object-value/build/es/src/index.js");
/* harmony import */ var reshow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow */ "./node_modules/reshow/build/es/src/index.js");





var keys = Object.keys;

var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(pmvc_react_admin__WEBPACK_IMPORTED_MODULE_1__["VerticalMenu"], null);

var Menu = function Menu(props) {
  var thisMenus = {};
  var themes = reshow__WEBPACK_IMPORTED_MODULE_4__["pageStore"].getMap('themes');
  keys(themes).forEach(function (item) {
    thisMenus[item] = {
      text: item,
      href: '#/' + item
    };
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_navigation__WEBPACK_IMPORTED_MODULE_2__["SideMenu"], {
    menus: thisMenus,
    linkComponent: reshow__WEBPACK_IMPORTED_MODULE_4__["ReLink"],
    component: _ref
  });
};

_c = Menu;
/* harmony default export */ __webpack_exports__["default"] = (Menu);

var _c;

$RefreshReg$(_c, "Menu");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/PageLoadProgressHandler.example.js":
/*!***************************************************************!*\
  !*** ./build/ui/organisms/PageLoadProgressHandler.example.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-progress */ "./node_modules/organism-react-progress/build/es/src/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");




var PageLoadProgressHandlerExample = function PageLoadProgressHandlerExample(props) {
  var oLoad;
  var dInput;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_progress__WEBPACK_IMPORTED_MODULE_1__["PageLoadProgressHandler"], {
    ref: function ref(o) {
      return oLoad = o;
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: Styles.button,
    onClick: function onClick() {
      oLoad.start(100, 800);
    }
  }, "Start"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: Styles.button,
    onClick: function onClick() {
      oLoad.pause();
    }
  }, "Pause"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: Styles.button,
    onClick: function onClick() {
      oLoad.complete();
    }
  }, "Complete"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    style: Styles.button,
    onClick: function onClick() {
      oLoad.reset();
    }
  }, "Reset")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["InputBox"], {
    leftLabel: "Pause @",
    rightLabel: "%",
    refCb: function refCb(o) {
      return dInput = o;
    },
    button: 'Go',
    buttonProps: {
      onClick: function onClick() {
        oLoad.start(dInput.value);
      }
    },
    style: Styles.input
  })));
};

_c = PageLoadProgressHandlerExample;
/* harmony default export */ __webpack_exports__["default"] = (PageLoadProgressHandlerExample);
var Styles = {
  input: {
    width: 20
  },
  button: {
    marginBottom: 10
  }
};

var _c;

$RefreshReg$(_c, "PageLoadProgressHandlerExample");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/PageLoadProgressHandlerWithAjax.example.js":
/*!***********************************************************************!*\
  !*** ./build/ui/organisms/PageLoadProgressHandlerWithAjax.example.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-progress */ "./node_modules/organism-react-progress/build/es/src/index.js");
/* harmony import */ var organism_react_ajax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-ajax */ "./node_modules/organism-react-ajax/build/es/src/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");





var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_progress__WEBPACK_IMPORTED_MODULE_1__["PageLoadProgressHandler"], {
  ajax: true
});

var PageLoadProgressHandlerExample = function PageLoadProgressHandlerExample(props) {
  var url = 'https://raw.githubusercontent.com/react-atomic/react-atomic-ui/master/README.md';
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, _ref, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: function onClick() {
      Object(organism_react_ajax__WEBPACK_IMPORTED_MODULE_2__["ajaxDispatch"])({
        type: 'ajaxGet',
        params: {
          url: url,
          callback: function callback(json, text, o) {
            alert(text);
          }
        }
      });
    }
  }, "Call Ajax"));
};

_c = PageLoadProgressHandlerExample;
/* harmony default export */ __webpack_exports__["default"] = (PageLoadProgressHandlerExample);

var _c;

$RefreshReg$(_c, "PageLoadProgressHandlerExample");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/Pagination.example.js":
/*!**************************************************!*\
  !*** ./build/ui/organisms/Pagination.example.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var organism_react_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! organism-react-navigation */ "./node_modules/organism-react-navigation/build/es/src/index.js");






var PaginationExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(PaginationExample, _PureComponent);

  function PaginationExample() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "handlePageChange", function (_ref) {
      var begin = _ref.begin;

      _this.setState({
        begin: begin
      });
    });

    return _this;
  }

  var _proto = PaginationExample.prototype;

  _proto.render = function render() {
    var _ref2 = this.state || {},
        begin = _ref2.begin;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(organism_react_navigation__WEBPACK_IMPORTED_MODULE_4__["PaginationController"], {
      style: Styles.container,
      onPageChange: this.handlePageChange,
      total: 500,
      begin: begin
    });
  };

  return PaginationExample;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (PaginationExample);
var Styles = {
  container: {
    textAlign: 'center'
  }
};

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/ParallaxBackgroundImage.example.js":
/*!***************************************************************!*\
  !*** ./build/ui/organisms/ParallaxBackgroundImage.example.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-parallax */ "./node_modules/organism-react-parallax/build/es/src/index.js");



var ParallaxBackgroundImageExample = function ParallaxBackgroundImageExample() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_parallax__WEBPACK_IMPORTED_MODULE_1__["ParallaxBackgroundImage"], {
    style: Styles.container,
    backgroundImage: "https://c1.staticflickr.com/9/8621/16732897815_4705c08fe6_h.jpg"
  }, "test");
};

_c = ParallaxBackgroundImageExample;
/* harmony default export */ __webpack_exports__["default"] = (ParallaxBackgroundImageExample);
var Styles = {
  container: {
    height: 300,
    color: '#fff',
    textAlign: 'center',
    paddingTop: 200
  }
};

var _c;

$RefreshReg$(_c, "ParallaxBackgroundImageExample");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/Popup.example.js":
/*!*********************************************!*\
  !*** ./build/ui/organisms/Popup.example.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-popup */ "../react-atomic-organism/packages/organism-react-popup/build/es/src/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");

/**
 * Production please use
 * import {...xxx} from "organism-react-popup"
 */




var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_1__["PopupModal"], null, "xxx");

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null);

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_1__["Dialog"], {
  header: "Test Header"
}, "Test Dialog");

var _ref4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Button"], null);

var PopupExample = function PopupExample() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_1__["PopupClick"], {
    style: Styles.click,
    popup: function popup() {
      return _ref;
    },
    container: _ref2
  }, "show modal"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_1__["PopupClick"], {
    style: {
      marginLeft: 5
    },
    popup: _ref3,
    container: _ref4
  }, "show dialog"));
};

_c = PopupExample;
/* harmony default export */ __webpack_exports__["default"] = (PopupExample);
var Styles = {
  click: {
    color: 'blue',
    textDecoration: 'underline'
  }
};

var _c;

$RefreshReg$(_c, "PopupExample");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/QQVideo.example.js":
/*!***********************************************!*\
  !*** ./build/ui/organisms/QQVideo.example.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_qq_video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-qq-video */ "./node_modules/organism-react-qq-video/build/es/src/index.js");



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_qq_video__WEBPACK_IMPORTED_MODULE_1__["default"], {
  videoId: "j0792wzb6v8"
});

var QQVideoExample = function QQVideoExample() {
  return _ref;
};

_c = QQVideoExample;
/* harmony default export */ __webpack_exports__["default"] = (QQVideoExample);

var _c;

$RefreshReg$(_c, "QQVideoExample");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/RadioGroup.example.js":
/*!**************************************************!*\
  !*** ./build/ui/organisms/RadioGroup.example.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var react_atomic_organism__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-atomic-organism */ "./node_modules/react-atomic-organism/build/es/src/index.js");






var options = [{
  label: 'Boy',
  value: 'boy'
}, {
  label: 'Girl',
  value: 'girl'
}];

var RadioGroupExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(RadioGroupExample, _PureComponent);

  function RadioGroupExample() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "state", {
      value: ''
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "handleChange", function () {
      _this.setState({
        value: _this.radio.getValue()
      });
    });

    return _this;
  }

  var _proto = RadioGroupExample.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var value = this.state.value;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_atomic_organism__WEBPACK_IMPORTED_MODULE_5__["RadioGroup"], {
      ref: function ref(el) {
        return _this2.radio = el;
      },
      inline: false,
      label: "Sex: ",
      name: "sex",
      value: value,
      options: options,
      onChange: this.handleChange
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, "Current: ", value), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      onClick: function onClick() {
        return _this2.setState({
          value: 'boy'
        });
      }
    }, "Set to Boy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      onClick: function onClick() {
        return _this2.setState({
          value: 'girl'
        });
      }
    }, "Set to Girl"));
  };

  return RadioGroupExample;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (RadioGroupExample);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/ReactVirtualizedTableList.example.js":
/*!*****************************************************************!*\
  !*** ./build/ui/organisms/ReactVirtualizedTableList.example.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var pmvc_react_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pmvc_react_list */ "./node_modules/pmvc_react_list/build/es/src/index.js");
/* harmony import */ var pmvc_react_list_rv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pmvc_react_list/rv */ "./node_modules/pmvc_react_list/rv.js");
/* harmony import */ var pmvc_react_list_rv__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pmvc_react_list_rv__WEBPACK_IMPORTED_MODULE_5__);






var rows = [['a1', 'b1', 'c1'], ['a2', 'b2', 'c2'], ['a3', 'b3', 'c3'], ['a1', 'b1', 'c1'], ['a2', 'b2', 'c2'], ['a3', 'b3', 'c3']];

var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_4__["Cell"], null, "h1");

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_4__["Cell"], null, "h2");

var _ref5 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_4__["Cell"], null, "h3");

var ReactVirtualizedTableListExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ReactVirtualizedTableListExample, _PureComponent);

  function ReactVirtualizedTableListExample() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "handleClick", function (rowIndex) {
      return function (ev) {
        alert(rowIndex);
      };
    });

    return _this;
  }

  var _proto = ReactVirtualizedTableListExample.prototype;

  _proto.render = function render() {
    var _this2 = this;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      style: {
        width: '40%',
        height: 150
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(pmvc_react_list_rv__WEBPACK_IMPORTED_MODULE_5___default.a, {
      rows: rows
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_4__["Column"], {
      header: _ref,
      cell: function cell(_ref2) {
        var rowIndex = _ref2.rowIndex,
            columnIndex = _ref2.columnIndex,
            style = _ref2.style;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          style: style,
          onClick: _this2.handleClick(rowIndex)
        }, rows[rowIndex][columnIndex]);
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_4__["Column"], {
      header: _ref3,
      cell: function cell(_ref4) {
        var rowIndex = _ref4.rowIndex,
            columnIndex = _ref4.columnIndex,
            style = _ref4.style;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          style: style,
          onClick: _this2.handleClick(rowIndex)
        }, rows[rowIndex][columnIndex]);
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(pmvc_react_list__WEBPACK_IMPORTED_MODULE_4__["Column"], {
      header: _ref5,
      cell: function cell(_ref6) {
        var rowIndex = _ref6.rowIndex,
            columnIndex = _ref6.columnIndex,
            style = _ref6.style;
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
          style: style,
          onClick: _this2.handleClick(rowIndex)
        }, rows[rowIndex][columnIndex]);
      }
    })));
  };

  return ReactVirtualizedTableListExample;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (ReactVirtualizedTableListExample);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/ReshowMessage.example.js":
/*!*****************************************************!*\
  !*** ./build/ui/organisms/ReshowMessage.example.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var reshow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow */ "./node_modules/reshow/build/es/src/index.js");







var DialogResult = function DialogResult(_ref) {
  var dialogReturn = _ref.dialogReturn;
  return 'undefined' !== typeof dialogReturn ? 'Dialog: ' + dialogReturn : null;
};

_c = DialogResult;

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(DialogResult, null);

var ReshowMessageExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ReshowMessageExample, _PureComponent);

  function ReshowMessageExample() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "handleAddAlert", function (e) {
      Object(reshow__WEBPACK_IMPORTED_MODULE_5__["dispatch"])('alert/add', {
        message: 'test'
      });
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "handleResetAlert", function (e) {
      Object(reshow__WEBPACK_IMPORTED_MODULE_5__["dispatch"])('alert/reset', {
        alerts: [1, 2, 3]
      });
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "handleCleanAlert", function (e) {
      Object(reshow__WEBPACK_IMPORTED_MODULE_5__["dispatch"])('alert/reset', {
        alerts: null
      });
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "handleOpenDialog", function (e) {
      Object(reshow__WEBPACK_IMPORTED_MODULE_5__["dispatch"])('dialog/start', {
        dialog: 'how are u'
      });
    });

    return _this;
  }

  var _proto = ReshowMessageExample.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      onClick: this.handleAddAlert
    }, "Add alert"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      onClick: this.handleResetAlert
    }, "Reset alert"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      onClick: this.handleCleanAlert
    }, "Clean all alerts")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      onClick: this.handleOpenDialog
    }, "Open Dialog"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(reshow__WEBPACK_IMPORTED_MODULE_5__["Return"], {
      initStates: ['dialogReturn']
    }, _ref2)));
  };

  return ReshowMessageExample;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (ReshowMessageExample);

var _c;

$RefreshReg$(_c, "DialogResult");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/Spotlight.example.js":
/*!*************************************************!*\
  !*** ./build/ui/organisms/Spotlight.example.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var organism_react_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! organism-react-popup */ "../react-atomic-organism/packages/organism-react-popup/build/es/src/index.js");
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! organism-react-code */ "./node_modules/organism-react-code/build/es/src/index.js");
/* harmony import */ var organism_react_spotlight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! organism-react-spotlight */ "../react-atomic-organism/packages/organism-react-spotlight/build/es/src/index.js");









var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_5__["PopupPool"], {
  name: "spotlight-pool"
});

var SpotlightExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(SpotlightExample, _PureComponent);

  function SpotlightExample() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "state", {
      spotlight: false
    });

    return _this;
  }

  var _proto = SpotlightExample.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var spotlight = this.state.spotlight;
    var thisSpotlight = null;

    if (spotlight) {
      thisSpotlight = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(organism_react_spotlight__WEBPACK_IMPORTED_MODULE_7__["default"], {
        toPool: "spotlight-pool",
        targetEl: this.spot,
        onClose: function onClose() {
          _this2.setState({
            spotlight: null
          });
        }
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_6__["FullScreenExample"], {
      button: "open full screen",
      onClose: function onClose() {
        return _this2.setState({
          spotlight: null
        });
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      ref: function ref(el) {
        return _this2.spot = el;
      },
      style: Styles.el
    }, "Spotlight"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      onClick: function onClick() {
        _this2.setState({
          spotlight: true
        });
      }
    }, "Try it.")), thisSpotlight, _ref);
  };

  return SpotlightExample;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (SpotlightExample);
var Styles = {
  el: {
    display: 'inline-block',
    width: 100,
    height: 200,
    margin: 10
  }
};

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/StockChart.example.js":
/*!**************************************************!*\
  !*** ./build/ui/organisms/StockChart.example.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! organism-react-code */ "./node_modules/organism-react-code/build/es/src/index.js");
/* harmony import */ var organism_react_stockcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! organism-react-stockcharts */ "./node_modules/organism-react-stockcharts/build/es/src/index.js");
/* harmony import */ var organism_react_ajax__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! organism-react-ajax */ "./node_modules/organism-react-ajax/build/es/src/index.js");








var StockChartExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(StockChartExample, _PureComponent);

  function StockChartExample() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "state", {
      data: null
    });

    return _this;
  }

  var _proto = StockChartExample.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this2 = this;

    Object(organism_react_ajax__WEBPACK_IMPORTED_MODULE_6__["ajaxDispatch"])({
      type: 'ajaxGet',
      params: {
        url: '//raw.githubusercontent.com/react-atomic/react-atomic-ui/master/data/stock.json',
        callback: function callback(json) {
          _this2.setState({
            data: {
              trades: json
            }
          });
        }
      }
    });
  };

  _proto.render = function render() {
    var data = this.state.data;

    if (!data) {
      return null;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_4__["FullScreenExample"], {
      id: "full-page-stock-chart",
      button: "open full screen"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(organism_react_stockcharts__WEBPACK_IMPORTED_MODULE_5__["StockChartCompute"], {
      data: data,
      tradeRowsLocator: function tradeRowsLocator(d) {
        return d.trades;
      },
      tradeHighLocator: function tradeHighLocator(d) {
        return d.h;
      },
      tradeLowLocator: function tradeLowLocator(d) {
        return d.l;
      },
      tradeOpenLocator: function tradeOpenLocator(d) {
        return d.o;
      },
      tradeCloseLocator: function tradeCloseLocator(d) {
        return d.c;
      },
      tradeVolumeLocator: function tradeVolumeLocator(d) {
        return d.v;
      },
      tradeDateLocator: function tradeDateLocator(d) {
        return d.t;
      }
    }));
  };

  return StockChartExample;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (StockChartExample);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/Suggestion.example.js":
/*!**************************************************!*\
  !*** ./build/ui/organisms/Suggestion.example.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var react_atomic_organism__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-atomic-organism */ "./node_modules/react-atomic-organism/build/es/src/index.js");






var data = ['abc', 'abb', 'acc'];

var SuggestionExample1 = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(SuggestionExample1, _PureComponent);

  function SuggestionExample1() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "state", {
      results: []
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "handleChange", function (e, value) {
      if (!value.length) {
        _this.setState({
          results: data
        });

        return;
      }

      var results = [];
      data.forEach(function (v, k) {
        if (value.length && -1 !== v.indexOf(value)) {
          results.push(v);
        }
      });

      _this.setState({
        results: results
      });
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "handleItemClick", function (e, item) {
      _this.suggestion.setValue(item);
    });

    return _this;
  }

  var _proto = SuggestionExample1.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$state = this.state,
        results = _this$state.results,
        myValue = _this$state.myValue;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["SemanticUI"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_atomic_organism__WEBPACK_IMPORTED_MODULE_5__["Suggestion"], {
      ref: function ref(el) {
        return _this2.suggestion = el;
      },
      onChange: this.handleChange,
      results: results,
      onItemClick: this.handleItemClick,
      value: myValue
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      onClick: function onClick() {
        return _this2.setState({
          myValue: myValue ? myValue + 1 : 123
        });
      }
    }, "set"));
  };

  return SuggestionExample1;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);

var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["SemanticUI"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(SuggestionExample1, null), "couldCreate: false", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_atomic_organism__WEBPACK_IMPORTED_MODULE_5__["Suggestion"], {
  results: data,
  couldCreate: false,
  filter: true,
  preview: true
}));

var SuggestionExample = function SuggestionExample() {
  return _ref;
};

_c = SuggestionExample;
/* harmony default export */ __webpack_exports__["default"] = (SuggestionExample);

var _c;

$RefreshReg$(_c, "SuggestionExample");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/TabView.example.js":
/*!***********************************************!*\
  !*** ./build/ui/organisms/TabView.example.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var ricon_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ricon/Search */ "./node_modules/ricon/Search.js");
/* harmony import */ var ricon_Search__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ricon_Search__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var organism_react_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! organism-react-navigation */ "./node_modules/organism-react-navigation/build/es/src/index.js");






var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["InputBox"], {
  icon: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ricon_Search__WEBPACK_IMPORTED_MODULE_3___default.a, null),
  transparent: true,
  placeholder: "Search..."
});

var RightMenu = function RightMenu() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    className: "right",
    ui: false
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Item"], {
    style: {
      boxSizing: 'border-box'
    }
  }, _ref));
};

_c = RightMenu;

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(organism_react_navigation__WEBPACK_IMPORTED_MODULE_4__["TabView"], {
  rightMenu: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RightMenu, null)
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(organism_react_navigation__WEBPACK_IMPORTED_MODULE_4__["Tab"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "content1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "menu1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(organism_react_navigation__WEBPACK_IMPORTED_MODULE_4__["Tab"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "content2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, "menu2")));

var TabViewExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(TabViewExample, _PureComponent);

  function TabViewExample() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = TabViewExample.prototype;

  _proto.render = function render() {
    return _ref2;
  };

  return TabViewExample;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (TabViewExample);

var _c;

$RefreshReg$(_c, "RightMenu");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/TagInput.example.js":
/*!************************************************!*\
  !*** ./build/ui/organisms/TagInput.example.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var organism_react_tag_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-tag-input */ "./node_modules/organism-react-tag-input/build/es/src/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");





var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["SemanticUI"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(organism_react_tag_input__WEBPACK_IMPORTED_MODULE_2__["TagsField"], null));

var TagInputExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(TagInputExample, _PureComponent);

  function TagInputExample() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = TagInputExample.prototype;

  _proto.render = function render() {
    return _ref;
  };

  return TagInputExample;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (TagInputExample);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/WindowOffset.example.js":
/*!****************************************************!*\
  !*** ./build/ui/organisms/WindowOffset.example.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var organism_react_popup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! organism-react-popup */ "../react-atomic-organism/packages/organism-react-popup/build/es/src/index.js");




function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}




var WindowOffsetExample = /*#__PURE__*/function (_Component) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(WindowOffsetExample, _Component);

  function WindowOffsetExample() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "handleClick", function (e) {
      var target = e.currentTarget;
      Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! get-window-offset */ "./node_modules/get-window-offset/build/es/src/index.js")).then(function (_ref) {
        var getWindowOffset = _ref["default"];
        var info = getWindowOffset(target);
        console.log(info);
      });
    });

    return _this;
  }

  var _proto = WindowOffsetExample.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      style: Styles.row
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_4__["PopupHover"], {
      popup: "1",
      isKeep: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      style: _objectSpread(_objectSpread({}, Styles.col), Styles.col1),
      onClick: this.handleClick
    }, "1")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_4__["PopupHover"], {
      popup: "2",
      isKeep: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      style: _objectSpread(_objectSpread({}, Styles.col), Styles.col2),
      onClick: this.handleClick
    }, "2")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_4__["PopupHover"], {
      popup: "3",
      isKeep: true
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      style: _objectSpread(_objectSpread({}, Styles.col), Styles.col3),
      onClick: this.handleClick
    }, "3"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      style: Styles.row
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_4__["PopupHover"], {
      popup: "4"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      style: _objectSpread(_objectSpread({}, Styles.col), Styles.col1),
      onClick: this.handleClick
    }, "4")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_4__["PopupHover"], {
      popup: "5"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      style: _objectSpread(_objectSpread({}, Styles.col), Styles.col2),
      onClick: this.handleClick
    }, "5")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_4__["PopupHover"], {
      popup: "6"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      style: _objectSpread(_objectSpread({}, Styles.col), Styles.col3),
      onClick: this.handleClick
    }, "6"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      style: {
        width: 60
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_4__["PopupHover"], {
      popup: "7"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      style: _objectSpread(_objectSpread({}, Styles.col), Styles.col1),
      onClick: this.handleClick
    }, "7")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_4__["PopupHover"], {
      popup: "8"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      style: _objectSpread(_objectSpread({}, Styles.col), Styles.col2),
      onClick: this.handleClick
    }, "8")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_4__["PopupHover"], {
      popup: "9"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      style: _objectSpread(_objectSpread({}, Styles.col), Styles.col3),
      onClick: this.handleClick
    }, "9"))));
  };

  return WindowOffsetExample;
}(react__WEBPACK_IMPORTED_MODULE_3__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (WindowOffsetExample);
var Styles = {
  row: {
    justifyContent: 'space-around',
    display: 'flex',
    marginBottom: 100
  },
  col: {
    width: 60,
    height: 60,
    lineHeight: '60px',
    textAlign: 'center',
    color: '#fff'
  },
  col1: {
    background: '#c00'
  },
  col2: {
    background: '#095'
  },
  col3: {
    background: '#059'
  }
};

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/organisms/YouTubeRWD.example.js":
/*!**************************************************!*\
  !*** ./build/ui/organisms/YouTubeRWD.example.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-video */ "./node_modules/organism-react-video/build/es/src/index.js");



var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(organism_react_video__WEBPACK_IMPORTED_MODULE_1__["YoutubeRWD"], {
  videoId: "_2i6CmKjN3E"
});

var YouTubeRWDExample = function YouTubeRWDExample() {
  return _ref;
};

_c = YouTubeRWDExample;
/* harmony default export */ __webpack_exports__["default"] = (YouTubeRWDExample);

var _c;

$RefreshReg$(_c, "YouTubeRWDExample");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/pages/Animation.js":
/*!*************************************!*\
  !*** ./build/ui/pages/Animation.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-code */ "./node_modules/organism-react-code/build/es/src/index.js");
/* harmony import */ var _pages_BasePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/BasePage */ "./build/ui/pages/BasePage.js");
/* harmony import */ var _templates_Doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Doc */ "./build/ui/templates/Doc.js");
/* harmony import */ var _organisms_Animation_example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/Animation.example */ "./build/ui/organisms/Animation.example.js");
/* harmony import */ var _raw_loader_ui_organisms_Animation_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/Animation.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Animation.example.jsx");
/* harmony import */ var _organisms_AnimationReplace_example__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../organisms/AnimationReplace.example */ "./build/ui/organisms/AnimationReplace.example.js");
/* harmony import */ var _raw_loader_ui_organisms_AnimationReplace_example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/AnimationReplace.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AnimationReplace.example.jsx");
/* harmony import */ var _organisms_AnimationDelay_example__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../organisms/AnimationDelay.example */ "./build/ui/organisms/AnimationDelay.example.js");
/* harmony import */ var _raw_loader_ui_organisms_AnimationDelay_example__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/AnimationDelay.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AnimationDelay.example.jsx");



/*Base*/




/*Sample*/








var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_templates_Doc__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_Animation_example__WEBPACK_IMPORTED_MODULE_7__["default"],
  header: "Animation Sample"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_Animation_example__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_AnimationReplace_example__WEBPACK_IMPORTED_MODULE_9__["default"],
  header: "Animation Replace Sample"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_AnimationReplace_example__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_AnimationDelay_example__WEBPACK_IMPORTED_MODULE_11__["default"],
  header: "Animation Delay Sample"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_AnimationDelay_example__WEBPACK_IMPORTED_MODULE_10__["default"], null)));

var Animation = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Animation, _BasePage);

  function Animation() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = Animation.prototype;

  _proto.render = function render() {
    return _ref;
  };

  return Animation;
}(_pages_BasePage__WEBPACK_IMPORTED_MODULE_4__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Animation, "defaultProps", {
  pageName: 'animation'
});

/* harmony default export */ __webpack_exports__["default"] = (Animation);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/pages/AsciiDoc.js":
/*!************************************!*\
  !*** ./build/ui/pages/AsciiDoc.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-code */ "./node_modules/organism-react-code/build/es/src/index.js");
/* harmony import */ var _pages_BasePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/BasePage */ "./build/ui/pages/BasePage.js");
/* harmony import */ var _templates_Doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Doc */ "./build/ui/templates/Doc.js");
/* harmony import */ var _organisms_AsciiDoc_example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/AsciiDoc.example */ "./build/ui/organisms/AsciiDoc.example.js");
/* harmony import */ var _raw_loader_ui_organisms_AsciiDoc_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/AsciiDoc.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AsciiDoc.example.jsx");



/*Base*/




/*Sample*/




var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_templates_Doc__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_AsciiDoc_example__WEBPACK_IMPORTED_MODULE_7__["default"],
  header: "Ascii Doc",
  edit: "https://codesandbox.io/s/8vj7x3m82",
  git: "react-atomic/react-atomic-organism/tree/master/packages/organism-react-asciidoc/"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_AsciiDoc_example__WEBPACK_IMPORTED_MODULE_6__["default"], null)));

var AsciiDocPage = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AsciiDocPage, _BasePage);

  function AsciiDocPage() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = AsciiDocPage.prototype;

  _proto.render = function render() {
    return _ref;
  };

  return AsciiDocPage;
}(_pages_BasePage__WEBPACK_IMPORTED_MODULE_4__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(AsciiDocPage, "defaultProps", {
  pageName: 'AsciiDoc'
});

/* harmony default export */ __webpack_exports__["default"] = (AsciiDocPage);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/pages/Atoms.js":
/*!*********************************!*\
  !*** ./build/ui/pages/Atoms.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _templates_Doc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../templates/Doc */ "./build/ui/templates/Doc.js");
/* harmony import */ var _pages_BasePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/BasePage */ "./build/ui/pages/BasePage.js");






var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_templates_Doc__WEBPACK_IMPORTED_MODULE_3__["default"], null, "This is atom");

var Atoms = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Atoms, _BasePage);

  function Atoms() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = Atoms.prototype;

  _proto.render = function render() {
    return _ref;
  };

  return Atoms;
}(_pages_BasePage__WEBPACK_IMPORTED_MODULE_4__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Atoms, "defaultProps", {
  pageName: 'atoms'
});

/* harmony default export */ __webpack_exports__["default"] = (Atoms);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/pages/BasePage.js":
/*!************************************!*\
  !*** ./build/ui/pages/BasePage.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var organism_react_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-navigation */ "./node_modules/organism-react-navigation/build/es/src/index.js");




var BasePage = /*#__PURE__*/function (_Component) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BasePage, _Component);

  function BasePage() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = BasePage.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this = this;

    setTimeout(function () {
      Object(organism_react_navigation__WEBPACK_IMPORTED_MODULE_2__["navigationDispatch"])({
        params: {
          activeMenu: _this.props.pageName
        }
      });
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    setTimeout(function () {
      Object(organism_react_navigation__WEBPACK_IMPORTED_MODULE_2__["navigationDispatch"])({
        params: {
          activeMenu: null
        }
      });
    });
  };

  return BasePage;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (BasePage);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/pages/Carousel.js":
/*!************************************!*\
  !*** ./build/ui/pages/Carousel.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-code */ "./node_modules/organism-react-code/build/es/src/index.js");
/* harmony import */ var _pages_BasePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/BasePage */ "./build/ui/pages/BasePage.js");
/* harmony import */ var _templates_Doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Doc */ "./build/ui/templates/Doc.js");
/* harmony import */ var _organisms_CarouselAnimation_example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/CarouselAnimation.example */ "./build/ui/organisms/CarouselAnimation.example.js");
/* harmony import */ var _raw_loader_ui_organisms_CarouselAnimation_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/CarouselAnimation.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CarouselAnimation.example.jsx");
/* harmony import */ var _organisms_CarouselAnimationHideThumb_example__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../organisms/CarouselAnimationHideThumb.example */ "./build/ui/organisms/CarouselAnimationHideThumb.example.js");
/* harmony import */ var _raw_loader_ui_organisms_CarouselAnimationHideThumb_example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/CarouselAnimationHideThumb.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CarouselAnimationHideThumb.example.jsx");
/* harmony import */ var _organisms_CarouselSlide_example__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../organisms/CarouselSlide.example */ "./build/ui/organisms/CarouselSlide.example.js");
/* harmony import */ var _raw_loader_ui_organisms_CarouselSlide_example__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/CarouselSlide.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CarouselSlide.example.jsx");






/*example*/








var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_templates_Doc__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_CarouselAnimation_example__WEBPACK_IMPORTED_MODULE_7__["default"],
  header: "Carousel Animation",
  git: "react-atomic/react-atomic-organism/blob/master/packages/organism-react-carousel/",
  npm: "organism-react-carousel"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_CarouselAnimation_example__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_CarouselAnimationHideThumb_example__WEBPACK_IMPORTED_MODULE_9__["default"],
  header: "Carousel Animation Hide Thumb",
  git: "react-atomic/react-atomic-organism/blob/master/packages/organism-react-carousel/",
  npm: "organism-react-carousel"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_CarouselAnimationHideThumb_example__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_CarouselSlide_example__WEBPACK_IMPORTED_MODULE_11__["default"],
  header: "Carousel Slide (WIP)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_CarouselSlide_example__WEBPACK_IMPORTED_MODULE_10__["default"], null)));

var CarouselPage = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CarouselPage, _BasePage);

  function CarouselPage() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = CarouselPage.prototype;

  _proto.render = function render() {
    return _ref;
  };

  return CarouselPage;
}(_pages_BasePage__WEBPACK_IMPORTED_MODULE_4__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(CarouselPage, "defaultProps", {
  pageName: 'carousel'
});

/* harmony default export */ __webpack_exports__["default"] = (CarouselPage);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/pages/Code.js":
/*!********************************!*\
  !*** ./build/ui/pages/Code.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! organism-react-code */ "./node_modules/organism-react-code/build/es/src/index.js");
/* harmony import */ var _pages_BasePage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/BasePage */ "./build/ui/pages/BasePage.js");
/* harmony import */ var _templates_Doc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../templates/Doc */ "./build/ui/templates/Doc.js");
/* harmony import */ var _organisms_CodeExample_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../organisms/CodeExample.example */ "./build/ui/organisms/CodeExample.example.js");
/* harmony import */ var _organisms_CodeEditor_example__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../organisms/CodeEditor.example */ "./build/ui/organisms/CodeEditor.example.js");
/* harmony import */ var _raw_loader_ui_organisms_CodeEditor_example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/CodeEditor.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CodeEditor.example.jsx");




/*Base*/








var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_templates_Doc__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_organisms_CodeExample_example__WEBPACK_IMPORTED_MODULE_7__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_4__["default"], {
  code: _raw_loader_ui_organisms_CodeEditor_example__WEBPACK_IMPORTED_MODULE_9__["default"],
  header: "Codemirror Example"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_organisms_CodeEditor_example__WEBPACK_IMPORTED_MODULE_8__["default"], null)));

var Code = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Code, _BasePage);

  function Code() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _BasePage.call.apply(_BasePage, [this].concat(args)) || this;

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "state", {});

    return _this;
  }

  var _proto = Code.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.setState({
      value: null
    });
  };

  _proto.render = function render() {
    return _ref;
  };

  return Code;
}(_pages_BasePage__WEBPACK_IMPORTED_MODULE_5__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Code, "defaultProps", {
  pageName: 'Code'
});

/* harmony default export */ __webpack_exports__["default"] = (Code);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/pages/D3.js":
/*!******************************!*\
  !*** ./build/ui/pages/D3.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-code */ "./node_modules/organism-react-code/build/es/src/index.js");
/* harmony import */ var _pages_BasePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/BasePage */ "./build/ui/pages/BasePage.js");
/* harmony import */ var _templates_Doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Doc */ "./build/ui/templates/Doc.js");
/* harmony import */ var _organisms_D3PieChart_example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/D3PieChart.example */ "./build/ui/organisms/D3PieChart.example.js");
/* harmony import */ var _raw_loader_ui_organisms_D3PieChart_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/D3PieChart.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3PieChart.example.jsx");
/* harmony import */ var _organisms_D3BarChart_example__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../organisms/D3BarChart.example */ "./build/ui/organisms/D3BarChart.example.js");
/* harmony import */ var _raw_loader_ui_organisms_D3BarChart_example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/D3BarChart.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3BarChart.example.jsx");
/* harmony import */ var _organisms_D3LineChart_example__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../organisms/D3LineChart.example */ "./build/ui/organisms/D3LineChart.example.js");
/* harmony import */ var _raw_loader_ui_organisms_D3LineChart_example__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/D3LineChart.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3LineChart.example.jsx");
/* harmony import */ var _organisms_D3AreaChart_example__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../organisms/D3AreaChart.example */ "./build/ui/organisms/D3AreaChart.example.js");
/* harmony import */ var _raw_loader_ui_organisms_D3AreaChart_example__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/D3AreaChart.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3AreaChart.example.jsx");
/* harmony import */ var _organisms_D3Uml_example__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../organisms/D3Uml.example */ "./build/ui/organisms/D3Uml.example.js");
/* harmony import */ var _raw_loader_ui_organisms_D3Uml_example__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/D3Uml.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3Uml.example.jsx");
/* harmony import */ var _organisms_StockChart_example__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../organisms/StockChart.example */ "./build/ui/organisms/StockChart.example.js");
/* harmony import */ var _raw_loader_ui_organisms_StockChart_example__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/StockChart.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/StockChart.example.jsx");



/*Base*/




/*Sample*/














var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_templates_Doc__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_D3LineChart_example__WEBPACK_IMPORTED_MODULE_11__["default"],
  header: "D3 Line Chart"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_D3LineChart_example__WEBPACK_IMPORTED_MODULE_10__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_D3AreaChart_example__WEBPACK_IMPORTED_MODULE_13__["default"],
  header: "D3 Area Chart"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_D3AreaChart_example__WEBPACK_IMPORTED_MODULE_12__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_D3BarChart_example__WEBPACK_IMPORTED_MODULE_9__["default"],
  header: "D3 Bar Chart"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_D3BarChart_example__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_D3PieChart_example__WEBPACK_IMPORTED_MODULE_7__["default"],
  header: "D3 Pie Chart"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_D3PieChart_example__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_D3Uml_example__WEBPACK_IMPORTED_MODULE_15__["default"],
  header: "D3 Uml",
  id: "d3-uml"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_D3Uml_example__WEBPACK_IMPORTED_MODULE_14__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_StockChart_example__WEBPACK_IMPORTED_MODULE_17__["default"],
  header: "Stock Chart"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_StockChart_example__WEBPACK_IMPORTED_MODULE_16__["default"], null)));

var D3 = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(D3, _BasePage);

  function D3() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = D3.prototype;

  _proto.render = function render() {
    return _ref;
  };

  return D3;
}(_pages_BasePage__WEBPACK_IMPORTED_MODULE_4__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(D3, "defaultProps", {
  pageName: 'd3'
});

/* harmony default export */ __webpack_exports__["default"] = (D3);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/pages/GrapesJs.js":
/*!************************************!*\
  !*** ./build/ui/pages/GrapesJs.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-code */ "./node_modules/organism-react-code/build/es/src/index.js");
/* harmony import */ var _pages_BasePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/BasePage */ "./build/ui/pages/BasePage.js");
/* harmony import */ var _templates_Doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Doc */ "./build/ui/templates/Doc.js");
/* harmony import */ var _organisms_GrapesJs_example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/GrapesJs.example */ "./build/ui/organisms/GrapesJs.example.js");
/* harmony import */ var _raw_loader_ui_organisms_GrapesJs_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/GrapesJs.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/GrapesJs.example.jsx");



/*Base*/




/*Sample*/




var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_templates_Doc__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_GrapesJs_example__WEBPACK_IMPORTED_MODULE_7__["default"],
  header: "GrapesJs Example",
  edit: "https://codesandbox.io/s/iframegrapejs-g40gq",
  git: "react-atomic/react-atomic-organism/tree/master/packages/organism-react-grapesjs/"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_GrapesJs_example__WEBPACK_IMPORTED_MODULE_6__["default"], null)));

var GrapesJsPage = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(GrapesJsPage, _BasePage);

  function GrapesJsPage() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = GrapesJsPage.prototype;

  _proto.render = function render() {
    return _ref;
  };

  return GrapesJsPage;
}(_pages_BasePage__WEBPACK_IMPORTED_MODULE_4__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(GrapesJsPage, "defaultProps", {
  pageName: 'GrapesJs'
});

/* harmony default export */ __webpack_exports__["default"] = (GrapesJsPage);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/pages/Icons.js":
/*!*********************************!*\
  !*** ./build/ui/pages/Icons.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ricon_Account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ricon/Account */ "./node_modules/ricon/Account.js");
/* harmony import */ var ricon_Account__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ricon_Account__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ricon_AccessTime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ricon/AccessTime */ "./node_modules/ricon/AccessTime.js");
/* harmony import */ var ricon_AccessTime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ricon_AccessTime__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ricon_Add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ricon/Add */ "./node_modules/ricon/Add.js");
/* harmony import */ var ricon_Add__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ricon_Add__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ricon_BarChart__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ricon/BarChart */ "./node_modules/ricon/BarChart.js");
/* harmony import */ var ricon_BarChart__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ricon_BarChart__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ricon_Build__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ricon/Build */ "./node_modules/ricon/Build.js");
/* harmony import */ var ricon_Build__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ricon_Build__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ricon_Blur__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ricon/Blur */ "./node_modules/ricon/Blur.js");
/* harmony import */ var ricon_Blur__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ricon_Blur__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ricon_Calendar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ricon/Calendar */ "./node_modules/ricon/Calendar.js");
/* harmony import */ var ricon_Calendar__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ricon_Calendar__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ricon_ChevronRight__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ricon/ChevronRight */ "./node_modules/ricon/ChevronRight.js");
/* harmony import */ var ricon_ChevronRight__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ricon_ChevronRight__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ricon_Code__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ricon/Code */ "./node_modules/ricon/Code.js");
/* harmony import */ var ricon_Code__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ricon_Code__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ricon_CircleLoading__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ricon/CircleLoading */ "./node_modules/ricon/CircleLoading.js");
/* harmony import */ var ricon_CircleLoading__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ricon_CircleLoading__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ricon_Dashboard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ricon/Dashboard */ "./node_modules/ricon/Dashboard.js");
/* harmony import */ var ricon_Dashboard__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ricon_Dashboard__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var ricon_Description__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ricon/Description */ "./node_modules/ricon/Description.js");
/* harmony import */ var ricon_Description__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ricon_Description__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var ricon_Device__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ricon/Device */ "./node_modules/ricon/Device.js");
/* harmony import */ var ricon_Device__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ricon_Device__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var ricon_Dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ricon/Dropdown */ "./node_modules/ricon/Dropdown.js");
/* harmony import */ var ricon_Dropdown__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ricon_Dropdown__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var ricon_Download__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ricon/Download */ "./node_modules/ricon/Download.js");
/* harmony import */ var ricon_Download__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ricon_Download__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var ricon_Delete__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ricon/Delete */ "./node_modules/ricon/Delete.js");
/* harmony import */ var ricon_Delete__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ricon_Delete__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var ricon_Edit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ricon/Edit */ "./node_modules/ricon/Edit.js");
/* harmony import */ var ricon_Edit__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(ricon_Edit__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var ricon_Email__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ricon/Email */ "./node_modules/ricon/Email.js");
/* harmony import */ var ricon_Email__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(ricon_Email__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var ricon_Exit__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ricon/Exit */ "./node_modules/ricon/Exit.js");
/* harmony import */ var ricon_Exit__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(ricon_Exit__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var ricon_File__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ricon/File */ "./node_modules/ricon/File.js");
/* harmony import */ var ricon_File__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(ricon_File__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var ricon_Facebook__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ricon/Facebook */ "./node_modules/ricon/Facebook.js");
/* harmony import */ var ricon_Facebook__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(ricon_Facebook__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var ricon_FacebookMessage__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ricon/FacebookMessage */ "./node_modules/ricon/FacebookMessage.js");
/* harmony import */ var ricon_FacebookMessage__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(ricon_FacebookMessage__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var ricon_FeaturedPlayList__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ricon/FeaturedPlayList */ "./node_modules/ricon/FeaturedPlayList.js");
/* harmony import */ var ricon_FeaturedPlayList__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(ricon_FeaturedPlayList__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var ricon_Git__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ricon/Git */ "./node_modules/ricon/Git.js");
/* harmony import */ var ricon_Git__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(ricon_Git__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var ricon_Help__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ricon/Help */ "./node_modules/ricon/Help.js");
/* harmony import */ var ricon_Help__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(ricon_Help__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var ricon_Hamburger__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ricon/Hamburger */ "./node_modules/ricon/Hamburger.js");
/* harmony import */ var ricon_Hamburger__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(ricon_Hamburger__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var ricon_HamburgerToArrow__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ricon/HamburgerToArrow */ "./node_modules/ricon/HamburgerToArrow.js");
/* harmony import */ var ricon_HamburgerToArrow__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(ricon_HamburgerToArrow__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var ricon_HamburgerToX__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ricon/HamburgerToX */ "./node_modules/ricon/HamburgerToX.js");
/* harmony import */ var ricon_HamburgerToX__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(ricon_HamburgerToX__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var ricon_Home__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ricon/Home */ "./node_modules/ricon/Home.js");
/* harmony import */ var ricon_Home__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(ricon_Home__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var ricon_Link__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ricon/Link */ "./node_modules/ricon/Link.js");
/* harmony import */ var ricon_Link__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(ricon_Link__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var ricon_Monetization__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ricon/Monetization */ "./node_modules/ricon/Monetization.js");
/* harmony import */ var ricon_Monetization__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(ricon_Monetization__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var ricon_MyLocation__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ricon/MyLocation */ "./node_modules/ricon/MyLocation.js");
/* harmony import */ var ricon_MyLocation__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(ricon_MyLocation__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var ricon_Npm__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ricon/Npm */ "./node_modules/ricon/Npm.js");
/* harmony import */ var ricon_Npm__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(ricon_Npm__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var ricon_Notification__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ricon/Notification */ "./node_modules/ricon/Notification.js");
/* harmony import */ var ricon_Notification__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(ricon_Notification__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var ricon_Person__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ricon/Person */ "./node_modules/ricon/Person.js");
/* harmony import */ var ricon_Person__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(ricon_Person__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var ricon_Phone__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ricon/Phone */ "./node_modules/ricon/Phone.js");
/* harmony import */ var ricon_Phone__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(ricon_Phone__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var ricon_Pin__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ricon/Pin */ "./node_modules/ricon/Pin.js");
/* harmony import */ var ricon_Pin__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(ricon_Pin__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var ricon_Play__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ricon/Play */ "./node_modules/ricon/Play.js");
/* harmony import */ var ricon_Play__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(ricon_Play__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var ricon_PlayListAdd__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ricon/PlayListAdd */ "./node_modules/ricon/PlayListAdd.js");
/* harmony import */ var ricon_PlayListAdd__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(ricon_PlayListAdd__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var ricon_Pulse__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ricon/Pulse */ "./node_modules/ricon/Pulse.js");
/* harmony import */ var ricon_Pulse__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(ricon_Pulse__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var ricon_Refresh__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ricon/Refresh */ "./node_modules/ricon/Refresh.js");
/* harmony import */ var ricon_Refresh__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(ricon_Refresh__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var ricon_Reply__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ricon/Reply */ "./node_modules/ricon/Reply.js");
/* harmony import */ var ricon_Reply__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(ricon_Reply__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var ricon_Search__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ricon/Search */ "./node_modules/ricon/Search.js");
/* harmony import */ var ricon_Search__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(ricon_Search__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var ricon_Settings__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ricon/Settings */ "./node_modules/ricon/Settings.js");
/* harmony import */ var ricon_Settings__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(ricon_Settings__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var ricon_ShoppingCart__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ricon/ShoppingCart */ "./node_modules/ricon/ShoppingCart.js");
/* harmony import */ var ricon_ShoppingCart__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(ricon_ShoppingCart__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var ricon_Sort__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ricon/Sort */ "./node_modules/ricon/Sort.js");
/* harmony import */ var ricon_Sort__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(ricon_Sort__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var ricon_Shopee__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ricon/Shopee */ "./node_modules/ricon/Shopee.js");
/* harmony import */ var ricon_Shopee__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(ricon_Shopee__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var ricon_Sync__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ricon/Sync */ "./node_modules/ricon/Sync.js");
/* harmony import */ var ricon_Sync__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(ricon_Sync__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var ricon_Timer__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ricon/Timer */ "./node_modules/ricon/Timer.js");
/* harmony import */ var ricon_Timer__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(ricon_Timer__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var ricon_VerifiedUser__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ricon/VerifiedUser */ "./node_modules/ricon/VerifiedUser.js");
/* harmony import */ var ricon_VerifiedUser__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(ricon_VerifiedUser__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var ricon_Video__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ricon/Video */ "./node_modules/ricon/Video.js");
/* harmony import */ var ricon_Video__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(ricon_Video__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var ricon_Wifi__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ricon/Wifi */ "./node_modules/ricon/Wifi.js");
/* harmony import */ var ricon_Wifi__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(ricon_Wifi__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var ricon_Wallet__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ricon/Wallet */ "./node_modules/ricon/Wallet.js");
/* harmony import */ var ricon_Wallet__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(ricon_Wallet__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var ricon_X__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ricon/X */ "./node_modules/ricon/X.js");
/* harmony import */ var ricon_X__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(ricon_X__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var ricon_ZoomIn__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ricon/ZoomIn */ "./node_modules/ricon/ZoomIn.js");
/* harmony import */ var ricon_ZoomIn__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(ricon_ZoomIn__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var ricon_Error__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ricon/Error */ "./node_modules/ricon/Error.js");
/* harmony import */ var ricon_Error__WEBPACK_IMPORTED_MODULE_58___default = /*#__PURE__*/__webpack_require__.n(ricon_Error__WEBPACK_IMPORTED_MODULE_58__);
/* harmony import */ var ricon_Warning__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ricon/Warning */ "./node_modules/ricon/Warning.js");
/* harmony import */ var ricon_Warning__WEBPACK_IMPORTED_MODULE_59___default = /*#__PURE__*/__webpack_require__.n(ricon_Warning__WEBPACK_IMPORTED_MODULE_59__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var _pages_BasePage__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ../pages/BasePage */ "./build/ui/pages/BasePage.js");
/* harmony import */ var _templates_Doc__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../templates/Doc */ "./build/ui/templates/Doc.js");

























































 // Alert






var icons = [['Account', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Account__WEBPACK_IMPORTED_MODULE_3___default.a, null)], ['Account (circle)', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Account__WEBPACK_IMPORTED_MODULE_3___default.a, {
  type: "circle"
})], ['Account (supervisor)', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Account__WEBPACK_IMPORTED_MODULE_3___default.a, {
  type: "supervisor"
})], ['Add', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Add__WEBPACK_IMPORTED_MODULE_5___default.a, null)], ['Add (box)', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Add__WEBPACK_IMPORTED_MODULE_5___default.a, {
  type: "box"
})], ['Add (circle)', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Add__WEBPACK_IMPORTED_MODULE_5___default.a, {
  type: "circle"
})], ['Add (circleOutline)', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Add__WEBPACK_IMPORTED_MODULE_5___default.a, {
  type: "circleOutline"
})], ['AccessTime', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_AccessTime__WEBPACK_IMPORTED_MODULE_4___default.a, null)], ['AccessTime (fill)', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_AccessTime__WEBPACK_IMPORTED_MODULE_4___default.a, {
  type: "fill"
})], ['AccessTime (update)', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_AccessTime__WEBPACK_IMPORTED_MODULE_4___default.a, {
  type: "update"
})], ['BarChart', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_BarChart__WEBPACK_IMPORTED_MODULE_6___default.a, null)], ['Build', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Build__WEBPACK_IMPORTED_MODULE_7___default.a, null)], ['Blur', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Blur__WEBPACK_IMPORTED_MODULE_8___default.a, null)], ['Calendar', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Calendar__WEBPACK_IMPORTED_MODULE_9___default.a, null)], ['ChevronRight', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_ChevronRight__WEBPACK_IMPORTED_MODULE_10___default.a, null)], ['Code', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Code__WEBPACK_IMPORTED_MODULE_11___default.a, null)], ['CircleLoading', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_CircleLoading__WEBPACK_IMPORTED_MODULE_12___default.a, null)], ['Dashboard', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Dashboard__WEBPACK_IMPORTED_MODULE_13___default.a, null)], ['Delete', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Delete__WEBPACK_IMPORTED_MODULE_18___default.a, null)], ['Delete (forever)', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Delete__WEBPACK_IMPORTED_MODULE_18___default.a, {
  type: "forever"
})], ['Delete (sweep)', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Delete__WEBPACK_IMPORTED_MODULE_18___default.a, {
  type: "sweep"
})], ['Device (desktop)', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Device__WEBPACK_IMPORTED_MODULE_15___default.a, {
  type: "desktop"
})], ['Device (tablet)', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Device__WEBPACK_IMPORTED_MODULE_15___default.a, {
  type: "tablet"
})], ['Device (phone)', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Device__WEBPACK_IMPORTED_MODULE_15___default.a, {
  type: "phone"
})], ['Download', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Download__WEBPACK_IMPORTED_MODULE_17___default.a, null)], ['Download (file)', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Download__WEBPACK_IMPORTED_MODULE_17___default.a, {
  type: "file"
})], ['Dropdown', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Dropdown__WEBPACK_IMPORTED_MODULE_16___default.a, null)], ['Dropdown (up)', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Dropdown__WEBPACK_IMPORTED_MODULE_16___default.a, {
  type: "up"
})], ['Dropdown (right)', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Dropdown__WEBPACK_IMPORTED_MODULE_16___default.a, {
  type: "right"
})], ['Dropdown (left)', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Dropdown__WEBPACK_IMPORTED_MODULE_16___default.a, {
  type: "left"
})], ['Description', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Description__WEBPACK_IMPORTED_MODULE_14___default.a, null)], ['Edit', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Edit__WEBPACK_IMPORTED_MODULE_19___default.a, null)], ['Email', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Email__WEBPACK_IMPORTED_MODULE_20___default.a, null)], ['Exit', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Exit__WEBPACK_IMPORTED_MODULE_21___default.a, null)], ['File', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_File__WEBPACK_IMPORTED_MODULE_22___default.a, null, ".js")], ['Facebook', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Facebook__WEBPACK_IMPORTED_MODULE_23___default.a, null)], ['FacebookMessage', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_FacebookMessage__WEBPACK_IMPORTED_MODULE_24___default.a, null)], ['FeaturedPlayList', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_FeaturedPlayList__WEBPACK_IMPORTED_MODULE_25___default.a, null)], ['Git', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Git__WEBPACK_IMPORTED_MODULE_26___default.a, null)], ['Help', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Help__WEBPACK_IMPORTED_MODULE_27___default.a, null)], ['Home', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Home__WEBPACK_IMPORTED_MODULE_31___default.a, null)], ['Hamburger', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Hamburger__WEBPACK_IMPORTED_MODULE_28___default.a, null)], ['HamburgerToArrow', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_HamburgerToArrow__WEBPACK_IMPORTED_MODULE_29___default.a, {
  on: true
})], ['HamburgerToX', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_HamburgerToX__WEBPACK_IMPORTED_MODULE_30___default.a, {
  on: true
})], ['Link', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Link__WEBPACK_IMPORTED_MODULE_32___default.a, null)], ['Monetization', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Monetization__WEBPACK_IMPORTED_MODULE_33___default.a, null)], ['Monetization', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Monetization__WEBPACK_IMPORTED_MODULE_33___default.a, {
  type: "sign"
})], ['MyLocation (fixed)', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_MyLocation__WEBPACK_IMPORTED_MODULE_34___default.a, null)], ['MyLocation (off)', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_MyLocation__WEBPACK_IMPORTED_MODULE_34___default.a, {
  type: "off"
})], ['MyLocation (on)', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_MyLocation__WEBPACK_IMPORTED_MODULE_34___default.a, {
  type: "on"
})], ['MyLocation (loading)', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_MyLocation__WEBPACK_IMPORTED_MODULE_34___default.a, {
  loading: true,
  type: "on"
})], ['Npm', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Npm__WEBPACK_IMPORTED_MODULE_35___default.a, null)], ['Notification', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Notification__WEBPACK_IMPORTED_MODULE_36___default.a, null)], ['Notification (active)', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Notification__WEBPACK_IMPORTED_MODULE_36___default.a, {
  type: "active"
})], ['Notification (none)', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Notification__WEBPACK_IMPORTED_MODULE_36___default.a, {
  type: "none"
})], ['Notification (off)', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Notification__WEBPACK_IMPORTED_MODULE_36___default.a, {
  type: "off"
})], ['Notification (paused)', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Notification__WEBPACK_IMPORTED_MODULE_36___default.a, {
  type: "paused"
})], ['Person', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Person__WEBPACK_IMPORTED_MODULE_37___default.a, null)], ['Person (add)', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Person__WEBPACK_IMPORTED_MODULE_37___default.a, {
  type: "add"
})], ['Phone', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Phone__WEBPACK_IMPORTED_MODULE_38___default.a, null)], ['Pin', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Pin__WEBPACK_IMPORTED_MODULE_39___default.a, null)], ['Pulse', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Pulse__WEBPACK_IMPORTED_MODULE_42___default.a, null)], ['Pulse (breath)', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Pulse__WEBPACK_IMPORTED_MODULE_42___default.a, {
  animation: "breath"
})], ['Play', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Play__WEBPACK_IMPORTED_MODULE_40___default.a, null)], ['PlayListAdd', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_PlayListAdd__WEBPACK_IMPORTED_MODULE_41___default.a, null)], ['Refresh', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Refresh__WEBPACK_IMPORTED_MODULE_43___default.a, null)], ['Reply', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Reply__WEBPACK_IMPORTED_MODULE_44___default.a, null)], ['Reply (right)', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Reply__WEBPACK_IMPORTED_MODULE_44___default.a, {
  type: "right"
})], ['Search', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Search__WEBPACK_IMPORTED_MODULE_45___default.a, null)], ['Settings', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Settings__WEBPACK_IMPORTED_MODULE_46___default.a, null)], ['Settings', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Settings__WEBPACK_IMPORTED_MODULE_46___default.a, {
  type: "square"
})], ['ShoppingCart', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_ShoppingCart__WEBPACK_IMPORTED_MODULE_47___default.a, null)], ['Sort', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Sort__WEBPACK_IMPORTED_MODULE_48___default.a, null)], ['Shopee', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Shopee__WEBPACK_IMPORTED_MODULE_49___default.a, null)], ['Sync', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Sync__WEBPACK_IMPORTED_MODULE_50___default.a, null)], ['Sync (disabled)', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Sync__WEBPACK_IMPORTED_MODULE_50___default.a, {
  type: "disabled"
})], ['Sync (problem)', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Sync__WEBPACK_IMPORTED_MODULE_50___default.a, {
  type: "problem"
})], ['Timer', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Timer__WEBPACK_IMPORTED_MODULE_51___default.a, null)], ['Timer (off)', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Timer__WEBPACK_IMPORTED_MODULE_51___default.a, {
  type: "off"
})], ['VerifiedUser', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_VerifiedUser__WEBPACK_IMPORTED_MODULE_52___default.a, null)], ['Video', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Video__WEBPACK_IMPORTED_MODULE_53___default.a, null)], ['Wifi', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Wifi__WEBPACK_IMPORTED_MODULE_54___default.a, null)], ['Wallet', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Wallet__WEBPACK_IMPORTED_MODULE_55___default.a, null)], ['X', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_X__WEBPACK_IMPORTED_MODULE_56___default.a, {
  style: {
    position: 'static'
  }
})], ['ZoomIn', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_ZoomIn__WEBPACK_IMPORTED_MODULE_57___default.a, null)], // Alert
['Error', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Error__WEBPACK_IMPORTED_MODULE_58___default.a, null)], ['Warning', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ricon_Warning__WEBPACK_IMPORTED_MODULE_59___default.a, null)]];

var Icons = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Icons, _BasePage);

  function Icons() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = Icons.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_templates_Doc__WEBPACK_IMPORTED_MODULE_62__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "pure-g"
    }, icons.map(function (v, k) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        key: k,
        className: "pure-u-1 pure-u-md-1-3 pure-u-lg-1-5",
        style: Styles.grid
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: Styles.icon
      }, v[1]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, v[0]));
    })));
  };

  return Icons;
}(_pages_BasePage__WEBPACK_IMPORTED_MODULE_61__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Icons, "defaultProps", {
  pageName: 'icons'
});

/* harmony default export */ __webpack_exports__["default"] = (Icons);
var Styles = {
  grid: {
    textAlign: 'center'
  },
  icon: {
    maxWidth: 30,
    minHeight: 30,
    maxHeight: 30,
    margin: '0 auto 10px',
    position: 'relative'
  }
};

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/pages/List.js":
/*!********************************!*\
  !*** ./build/ui/pages/List.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-code */ "./node_modules/organism-react-code/build/es/src/index.js");
/* harmony import */ var _pages_BasePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/BasePage */ "./build/ui/pages/BasePage.js");
/* harmony import */ var _templates_Doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Doc */ "./build/ui/templates/Doc.js");
/* harmony import */ var _organisms_GridList_example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/GridList.example */ "./build/ui/organisms/GridList.example.js");
/* harmony import */ var _raw_loader_ui_organisms_GridList_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/GridList.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/GridList.example.jsx");
/* harmony import */ var _organisms_HtmlTableList_example__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../organisms/HtmlTableList.example */ "./build/ui/organisms/HtmlTableList.example.js");
/* harmony import */ var _raw_loader_ui_organisms_HtmlTableList_example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/HtmlTableList.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/HtmlTableList.example.jsx");
/* harmony import */ var _organisms_ReactVirtualizedTableList_example__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../organisms/ReactVirtualizedTableList.example */ "./build/ui/organisms/ReactVirtualizedTableList.example.js");
/* harmony import */ var _raw_loader_ui_organisms_ReactVirtualizedTableList_example__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/ReactVirtualizedTableList.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/ReactVirtualizedTableList.example.jsx");
/* harmony import */ var _organisms_FixedDataTableList_example__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../organisms/FixedDataTableList.example */ "./build/ui/organisms/FixedDataTableList.example.js");
/* harmony import */ var _raw_loader_ui_organisms_FixedDataTableList_example__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/FixedDataTableList.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FixedDataTableList.example.jsx");
/* harmony import */ var _organisms_Pagination_example__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../organisms/Pagination.example */ "./build/ui/organisms/Pagination.example.js");
/* harmony import */ var _raw_loader_ui_organisms_Pagination_example__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/Pagination.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Pagination.example.jsx");



/*Base*/




/*Sample*/












var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_templates_Doc__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_GridList_example__WEBPACK_IMPORTED_MODULE_7__["default"],
  header: "Grid List"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_GridList_example__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_HtmlTableList_example__WEBPACK_IMPORTED_MODULE_9__["default"],
  header: "Html Table"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_HtmlTableList_example__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_ReactVirtualizedTableList_example__WEBPACK_IMPORTED_MODULE_11__["default"],
  header: "React Virgualized Table"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_ReactVirtualizedTableList_example__WEBPACK_IMPORTED_MODULE_10__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_FixedDataTableList_example__WEBPACK_IMPORTED_MODULE_13__["default"],
  header: "Fixed Data Table"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_FixedDataTableList_example__WEBPACK_IMPORTED_MODULE_12__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_Pagination_example__WEBPACK_IMPORTED_MODULE_15__["default"],
  header: "Fixed Data Table"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_Pagination_example__WEBPACK_IMPORTED_MODULE_14__["default"], null)));

var List = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(List, _BasePage);

  function List() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = List.prototype;

  _proto.render = function render() {
    return _ref;
  };

  return List;
}(_pages_BasePage__WEBPACK_IMPORTED_MODULE_4__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(List, "defaultProps", {
  pageName: 'list'
});

/* harmony default export */ __webpack_exports__["default"] = (List);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/pages/Molecules.js":
/*!*************************************!*\
  !*** ./build/ui/pages/Molecules.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _pages_BasePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pages/BasePage */ "./build/ui/pages/BasePage.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var react_atomic_organism__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-atomic-organism */ "./node_modules/react-atomic-organism/build/es/src/index.js");
/* harmony import */ var _templates_Doc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../templates/Doc */ "./build/ui/templates/Doc.js");








var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_templates_Doc__WEBPACK_IMPORTED_MODULE_6__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["DividingHeader"], null, "Input box"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "Inputbox"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["Form"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["Field"], {
  atom: "input"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "Inputbox with button"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["InputBox"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, "Search Box"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_atomic_organism__WEBPACK_IMPORTED_MODULE_5__["SearchBox"], null));

var Molecules = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Molecules, _BasePage);

  function Molecules() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = Molecules.prototype;

  _proto.render = function render() {
    return _ref;
  };

  return Molecules;
}(_pages_BasePage__WEBPACK_IMPORTED_MODULE_3__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Molecules, "defaultProps", {
  pageName: 'molecules'
});

/* harmony default export */ __webpack_exports__["default"] = (Molecules);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/pages/Organisms.js":
/*!*************************************!*\
  !*** ./build/ui/pages/Organisms.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-code */ "./node_modules/organism-react-code/build/es/src/index.js");
/* harmony import */ var _pages_BasePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/BasePage */ "./build/ui/pages/BasePage.js");
/* harmony import */ var _templates_Doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Doc */ "./build/ui/templates/Doc.js");
/* harmony import */ var _organisms_PageLoadProgressHandler_example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/PageLoadProgressHandler.example */ "./build/ui/organisms/PageLoadProgressHandler.example.js");
/* harmony import */ var _raw_loader_ui_organisms_PageLoadProgressHandler_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/PageLoadProgressHandler.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/PageLoadProgressHandler.example.jsx");
/* harmony import */ var _organisms_PageLoadProgressHandlerWithAjax_example__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../organisms/PageLoadProgressHandlerWithAjax.example */ "./build/ui/organisms/PageLoadProgressHandlerWithAjax.example.js");
/* harmony import */ var _raw_loader_ui_organisms_PageLoadProgressHandlerWithAjax_example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/PageLoadProgressHandlerWithAjax.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/PageLoadProgressHandlerWithAjax.example.jsx");
/* harmony import */ var _organisms_AjaxDownload_example__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../organisms/AjaxDownload.example */ "./build/ui/organisms/AjaxDownload.example.js");
/* harmony import */ var _raw_loader_ui_organisms_AjaxDownload_example__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/AjaxDownload.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AjaxDownload.example.jsx");
/* harmony import */ var _organisms_Dropzone_example__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../organisms/Dropzone.example */ "./build/ui/organisms/Dropzone.example.js");
/* harmony import */ var _raw_loader_ui_organisms_Dropzone_example__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/Dropzone.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Dropzone.example.jsx");
/* harmony import */ var _organisms_FBLike_example__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../organisms/FBLike.example */ "./build/ui/organisms/FBLike.example.js");
/* harmony import */ var _raw_loader_ui_organisms_FBLike_example__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/FBLike.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FBLike.example.jsx");
/* harmony import */ var _organisms_FBPage_example__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../organisms/FBPage.example */ "./build/ui/organisms/FBPage.example.js");
/* harmony import */ var _raw_loader_ui_organisms_FBPage_example__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/FBPage.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FBPage.example.jsx");
/* harmony import */ var _organisms_TabView_example__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../organisms/TabView.example */ "./build/ui/organisms/TabView.example.js");
/* harmony import */ var _raw_loader_ui_organisms_TabView_example__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/TabView.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/TabView.example.jsx");
/* harmony import */ var _organisms_RadioGroup_example__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../organisms/RadioGroup.example */ "./build/ui/organisms/RadioGroup.example.js");
/* harmony import */ var _raw_loader_ui_organisms_RadioGroup_example__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/RadioGroup.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/RadioGroup.example.jsx");
/* harmony import */ var _organisms_Checkbox_example__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../organisms/Checkbox.example */ "./build/ui/organisms/Checkbox.example.js");
/* harmony import */ var _raw_loader_ui_organisms_Checkbox_example__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/Checkbox.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Checkbox.example.jsx");
/* harmony import */ var _organisms_Suggestion_example__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../organisms/Suggestion.example */ "./build/ui/organisms/Suggestion.example.js");
/* harmony import */ var _raw_loader_ui_organisms_Suggestion_example__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/Suggestion.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Suggestion.example.jsx");
/* harmony import */ var _organisms_TagInput_example__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../organisms/TagInput.example */ "./build/ui/organisms/TagInput.example.js");
/* harmony import */ var _raw_loader_ui_organisms_TagInput_example__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/TagInput.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/TagInput.example.jsx");





 // example
























var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_templates_Doc__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_PageLoadProgressHandler_example__WEBPACK_IMPORTED_MODULE_7__["default"],
  header: "Page Load Progress",
  git: "react-atomic/react-atomic-organism/blob/master/packages/organism-react-progress/",
  npm: "organism-react-progress"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_PageLoadProgressHandler_example__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_PageLoadProgressHandlerWithAjax_example__WEBPACK_IMPORTED_MODULE_9__["default"],
  header: "Page Load Progress With Ajax"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_PageLoadProgressHandlerWithAjax_example__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_AjaxDownload_example__WEBPACK_IMPORTED_MODULE_11__["default"],
  id: "ajax-save",
  header: "Ajax Save (Downloader)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_AjaxDownload_example__WEBPACK_IMPORTED_MODULE_10__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_Dropzone_example__WEBPACK_IMPORTED_MODULE_13__["default"],
  header: "Dropzone"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_Dropzone_example__WEBPACK_IMPORTED_MODULE_12__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_FBLike_example__WEBPACK_IMPORTED_MODULE_15__["default"],
  header: "Facebook Like Button",
  git: "react-atomic/react-atomic-organism/blob/master/packages/organism-react-facebook/",
  npm: "organism-react-facebook",
  id: "organism-react-facebook"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_FBLike_example__WEBPACK_IMPORTED_MODULE_14__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_FBPage_example__WEBPACK_IMPORTED_MODULE_17__["default"],
  header: "Facebook Page Plugin"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_FBPage_example__WEBPACK_IMPORTED_MODULE_16__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_Suggestion_example__WEBPACK_IMPORTED_MODULE_25__["default"],
  header: "Suggestion",
  id: "suggestion"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_Suggestion_example__WEBPACK_IMPORTED_MODULE_24__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_TagInput_example__WEBPACK_IMPORTED_MODULE_27__["default"],
  header: "Tag input",
  id: "tag-input"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_TagInput_example__WEBPACK_IMPORTED_MODULE_26__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_TabView_example__WEBPACK_IMPORTED_MODULE_19__["default"],
  header: "Tab View",
  id: "tab"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_TabView_example__WEBPACK_IMPORTED_MODULE_18__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_RadioGroup_example__WEBPACK_IMPORTED_MODULE_21__["default"],
  header: "Radio Group",
  id: "radioGroup",
  edit: "https://codesandbox.io/embed/jjq8ko2krv?module=%2Fsrc%2FradioGroup.js&moduleview=1"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_RadioGroup_example__WEBPACK_IMPORTED_MODULE_20__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_Checkbox_example__WEBPACK_IMPORTED_MODULE_23__["default"],
  header: "Checkbox",
  id: "checkbox"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_Checkbox_example__WEBPACK_IMPORTED_MODULE_22__["default"], null)));

var Organisms = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Organisms, _BasePage);

  function Organisms() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = Organisms.prototype;

  _proto.render = function render() {
    return _ref;
  };

  return Organisms;
}(_pages_BasePage__WEBPACK_IMPORTED_MODULE_4__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Organisms, "defaultProps", {
  pageName: 'organisms'
});

/* harmony default export */ __webpack_exports__["default"] = (Organisms);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/pages/Parallax.js":
/*!************************************!*\
  !*** ./build/ui/pages/Parallax.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-code */ "./node_modules/organism-react-code/build/es/src/index.js");
/* harmony import */ var _pages_BasePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/BasePage */ "./build/ui/pages/BasePage.js");
/* harmony import */ var _templates_Doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Doc */ "./build/ui/templates/Doc.js");
/* harmony import */ var _organisms_ParallaxBackgroundImage_example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/ParallaxBackgroundImage.example */ "./build/ui/organisms/ParallaxBackgroundImage.example.js");
/* harmony import */ var _raw_loader_ui_organisms_ParallaxBackgroundImage_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/ParallaxBackgroundImage.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/ParallaxBackgroundImage.example.jsx");



/*Base*/







var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_ParallaxBackgroundImage_example__WEBPACK_IMPORTED_MODULE_7__["default"],
  header: "YouTube RWD player"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_ParallaxBackgroundImage_example__WEBPACK_IMPORTED_MODULE_6__["default"], null));

var Parallax = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Parallax, _BasePage);

  function Parallax() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = Parallax.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_templates_Doc__WEBPACK_IMPORTED_MODULE_5__["default"], {
      style: Styles.page
    }, _ref);
  };

  return Parallax;
}(_pages_BasePage__WEBPACK_IMPORTED_MODULE_4__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Parallax, "defaultProps", {
  pageName: 'parallax'
});

/* harmony default export */ __webpack_exports__["default"] = (Parallax);
var Styles = {
  page: {
    padding: '100vh 0 100vh'
  }
};

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/pages/Popup.js":
/*!*********************************!*\
  !*** ./build/ui/pages/Popup.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-code */ "./node_modules/organism-react-code/build/es/src/index.js");
/* harmony import */ var _pages_BasePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/BasePage */ "./build/ui/pages/BasePage.js");
/* harmony import */ var _templates_Doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Doc */ "./build/ui/templates/Doc.js");
/* harmony import */ var _organisms_Popup_example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/Popup.example */ "./build/ui/organisms/Popup.example.js");
/* harmony import */ var _raw_loader_ui_organisms_Popup_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/Popup.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Popup.example.jsx");
/* harmony import */ var _organisms_FullScreen_example__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../organisms/FullScreen.example */ "./build/ui/organisms/FullScreen.example.js");
/* harmony import */ var _raw_loader_ui_organisms_FullScreen_example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/FullScreen.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FullScreen.example.jsx");
/* harmony import */ var _organisms_Spotlight_example__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../organisms/Spotlight.example */ "./build/ui/organisms/Spotlight.example.js");
/* harmony import */ var _raw_loader_ui_organisms_Spotlight_example__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/Spotlight.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Spotlight.example.jsx");
/* harmony import */ var _organisms_AlertsNotifier_example__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../organisms/AlertsNotifier.example */ "./build/ui/organisms/AlertsNotifier.example.js");
/* harmony import */ var _raw_loader_ui_organisms_AlertsNotifier_example__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/AlertsNotifier.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AlertsNotifier.example.jsx");
/* harmony import */ var _organisms_WindowOffset_example__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../organisms/WindowOffset.example */ "./build/ui/organisms/WindowOffset.example.js");
/* harmony import */ var _raw_loader_ui_organisms_WindowOffset_example__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/WindowOffset.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/WindowOffset.example.jsx");
/* harmony import */ var _organisms_ReshowMessage_example__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../organisms/ReshowMessage.example */ "./build/ui/organisms/ReshowMessage.example.js");
/* harmony import */ var _raw_loader_ui_organisms_ReshowMessage_example__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/ReshowMessage.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/ReshowMessage.example.jsx");



/*Base*/




/*Sample*/














var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_templates_Doc__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_Popup_example__WEBPACK_IMPORTED_MODULE_7__["default"],
  header: "Popup Example"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_Popup_example__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_FullScreen_example__WEBPACK_IMPORTED_MODULE_9__["default"],
  header: "Full Screen Example"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_FullScreen_example__WEBPACK_IMPORTED_MODULE_8__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_AlertsNotifier_example__WEBPACK_IMPORTED_MODULE_13__["default"],
  header: "Alerts Notifier Example"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_AlertsNotifier_example__WEBPACK_IMPORTED_MODULE_12__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_WindowOffset_example__WEBPACK_IMPORTED_MODULE_15__["default"],
  header: "Detect Window Offset Example",
  id: "get-window-offset"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_WindowOffset_example__WEBPACK_IMPORTED_MODULE_14__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_Spotlight_example__WEBPACK_IMPORTED_MODULE_11__["default"],
  header: "Spotlight Example"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_Spotlight_example__WEBPACK_IMPORTED_MODULE_10__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_ReshowMessage_example__WEBPACK_IMPORTED_MODULE_17__["default"],
  header: "Reshow Message Example"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_ReshowMessage_example__WEBPACK_IMPORTED_MODULE_16__["default"], null)));

var Popup = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Popup, _BasePage);

  function Popup() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = Popup.prototype;

  _proto.render = function render() {
    return _ref;
  };

  return Popup;
}(_pages_BasePage__WEBPACK_IMPORTED_MODULE_4__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Popup, "defaultProps", {
  pageName: 'popup'
});

/* harmony default export */ __webpack_exports__["default"] = (Popup);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/pages/Video.js":
/*!*********************************!*\
  !*** ./build/ui/pages/Video.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-code */ "./node_modules/organism-react-code/build/es/src/index.js");
/* harmony import */ var _pages_BasePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/BasePage */ "./build/ui/pages/BasePage.js");
/* harmony import */ var _templates_Doc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../templates/Doc */ "./build/ui/templates/Doc.js");
/* harmony import */ var _organisms_YouTubeRWD_example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/YouTubeRWD.example */ "./build/ui/organisms/YouTubeRWD.example.js");
/* harmony import */ var _raw_loader_ui_organisms_YouTubeRWD_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/YouTubeRWD.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/YouTubeRWD.example.jsx");
/* harmony import */ var _organisms_QQVideo_example__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../organisms/QQVideo.example */ "./build/ui/organisms/QQVideo.example.js");
/* harmony import */ var _raw_loader_ui_organisms_QQVideo_example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! raw-loader!../../../ui/organisms/QQVideo.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/QQVideo.example.jsx");



/*Base*/









var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_templates_Doc__WEBPACK_IMPORTED_MODULE_5__["default"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_YouTubeRWD_example__WEBPACK_IMPORTED_MODULE_7__["default"],
  header: "YouTube RWD player"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_YouTubeRWD_example__WEBPACK_IMPORTED_MODULE_6__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
  code: _raw_loader_ui_organisms_QQVideo_example__WEBPACK_IMPORTED_MODULE_9__["default"],
  header: "v.qq.com player"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_QQVideo_example__WEBPACK_IMPORTED_MODULE_8__["default"], null)));

var Video = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Video, _BasePage);

  function Video() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = Video.prototype;

  _proto.render = function render() {
    return _ref;
  };

  return Video;
}(_pages_BasePage__WEBPACK_IMPORTED_MODULE_4__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Video, "defaultProps", {
  pageName: 'video'
});

/* harmony default export */ __webpack_exports__["default"] = (Video);

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/pages/index.js":
/*!*********************************!*\
  !*** ./build/ui/pages/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/extends */ "./node_modules/reshow-runtime/es/helpers/extends.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutPropertiesLoose */ "./node_modules/reshow-runtime/es/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var reshow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow */ "./node_modules/reshow/build/es/src/index.js");
/* harmony import */ var reshow_url__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-url */ "./node_modules/reshow-url/build/es/src/index.js");
/* harmony import */ var organism_react_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! organism-react-popup */ "../react-atomic-organism/packages/organism-react-popup/build/es/src/index.js");
/* harmony import */ var organism_react_progress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! organism-react-progress */ "./node_modules/organism-react-progress/build/es/src/index.js");
/* harmony import */ var organism_react_i13n__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! organism-react-i13n */ "./node_modules/organism-react-i13n/build/es/src/index.js");
/* harmony import */ var _pages_Atoms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/Atoms */ "./build/ui/pages/Atoms.js");
/* harmony import */ var _pages_Molecules__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/Molecules */ "./build/ui/pages/Molecules.js");
/* harmony import */ var _pages_Organisms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/Organisms */ "./build/ui/pages/Organisms.js");
/* harmony import */ var _pages_Icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/Icons */ "./build/ui/pages/Icons.js");
/* harmony import */ var _pages_List__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pages/List */ "./build/ui/pages/List.js");
/* harmony import */ var _pages_Carousel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pages/Carousel */ "./build/ui/pages/Carousel.js");
/* harmony import */ var _pages_D3__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../pages/D3 */ "./build/ui/pages/D3.js");
/* harmony import */ var _pages_Animation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../pages/Animation */ "./build/ui/pages/Animation.js");
/* harmony import */ var _pages_Popup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../pages/Popup */ "./build/ui/pages/Popup.js");
/* harmony import */ var _pages_Video__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../pages/Video */ "./build/ui/pages/Video.js");
/* harmony import */ var _pages_Parallax__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../pages/Parallax */ "./build/ui/pages/Parallax.js");
/* harmony import */ var _pages_Code__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../pages/Code */ "./build/ui/pages/Code.js");
/* harmony import */ var _pages_AsciiDoc__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../pages/AsciiDoc */ "./build/ui/pages/AsciiDoc.js");
/* harmony import */ var _pages_GrapesJs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../pages/GrapesJs */ "./build/ui/pages/GrapesJs.js");






















var themes = {
  atoms: _pages_Atoms__WEBPACK_IMPORTED_MODULE_8__["default"],
  molecules: _pages_Molecules__WEBPACK_IMPORTED_MODULE_9__["default"],
  organisms: _pages_Organisms__WEBPACK_IMPORTED_MODULE_10__["default"],
  d3: _pages_D3__WEBPACK_IMPORTED_MODULE_14__["default"],
  icons: _pages_Icons__WEBPACK_IMPORTED_MODULE_11__["default"],
  list: _pages_List__WEBPACK_IMPORTED_MODULE_12__["default"],
  carousel: _pages_Carousel__WEBPACK_IMPORTED_MODULE_13__["default"],
  animation: _pages_Animation__WEBPACK_IMPORTED_MODULE_15__["default"],
  popup: _pages_Popup__WEBPACK_IMPORTED_MODULE_16__["default"],
  parallax: _pages_Parallax__WEBPACK_IMPORTED_MODULE_18__["default"],
  video: _pages_Video__WEBPACK_IMPORTED_MODULE_17__["default"],
  Code: _pages_Code__WEBPACK_IMPORTED_MODULE_19__["default"],
  AsciiDoc: _pages_AsciiDoc__WEBPACK_IMPORTED_MODULE_20__["default"],
  GrapesJs: _pages_GrapesJs__WEBPACK_IMPORTED_MODULE_21__["default"]
};

var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_5__["PopupPool"], null);

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_progress__WEBPACK_IMPORTED_MODULE_6__["PageLoadProgressHandler"], {
  ajax: true
});

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(organism_react_i13n__WEBPACK_IMPORTED_MODULE_7__["I13nElement"], null);

var _ref4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reshow__WEBPACK_IMPORTED_MODULE_3__["ReshowMessage"], null);

var Index = function Index(props) {
  var themePath = props.themePath,
      others = Object(reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["themePath"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(reshow_url__WEBPACK_IMPORTED_MODULE_4__["ClientRoute"], Object(reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, others, {
    themes: themes,
    defaultThemePath: "atoms"
  })), _ref, _ref2, _ref3, _ref4);
};

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/ui/templates/Doc.js":
/*!***********************************!*\
  !*** ./build/ui/templates/Doc.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/extends */ "./node_modules/reshow-runtime/es/helpers/extends.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutPropertiesLoose */ "./node_modules/reshow-runtime/es/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var pmvc_react_admin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pmvc_react_admin */ "./node_modules/pmvc_react_admin/build/src/index.js");
/* harmony import */ var pmvc_react_admin__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pmvc_react_admin__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _organisms_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../organisms/Menu */ "./build/ui/organisms/Menu.js");





var DocTemplate = Object(pmvc_react_admin__WEBPACK_IMPORTED_MODULE_3__["getDocTemplate"])({}, true, {
  sideWidth: 160
});
_c = DocTemplate;

var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_organisms_Menu__WEBPACK_IMPORTED_MODULE_4__["default"], null);

var Doc = function Doc(_ref) {
  var children = _ref.children,
      props = Object(reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["children"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DocTemplate, Object(reshow_runtime_es_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    body: children,
    menu: _ref2
  }));
};

_c2 = Doc;
/* harmony default export */ __webpack_exports__["default"] = (Doc);

var _c, _c2;

$RefreshReg$(_c, "DocTemplate");
$RefreshReg$(_c2, "Doc");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AjaxDownload.example.jsx":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AjaxDownload.example.jsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React from 'react';\nimport {PageLoadProgressHandler} from 'organism-react-progress';\nimport {ajaxDispatch} from 'organism-react-ajax';\nimport {Button} from 'react-atomic-molecule';\nimport {download} from 'ajax-save';\n\nconst AjaxDownloadExample = props => {\n  const url =\n    'https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg';\n  return (\n    <Button\n      onClick={() => {\n        ajaxDispatch('ajaxGet', {\n          responseType: ['blob'],\n          url,\n          callback: (json, text, o) => {\n            download(o.body, url.split('/').splice(-1)[0]);\n          },\n        });\n      }}>\n      Ajax Download\n    </Button>\n  );\n};\n\nexport default AjaxDownloadExample;\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AlertsNotifier.example.jsx":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AlertsNotifier.example.jsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React, {PureComponent} from 'react'; \n\nimport {\n    AlertsNotifier,\n    PopupClick\n} from \"organism-react-popup\"\n\nclass AlertsNotifierExample extends PureComponent\n{\n    render()\n    {\n        return (\n        <PopupClick\n            style={Styles.click}\n            popup={()=>\n                <AlertsNotifier \n                    position=\"bottom\"\n                    alerts={[\n                        {\n                            type: 'info',\n                            message: 'test'\n                        }\n                    ]}\n                />\n            }\n            container={<a />}\n        >\n            alert\n        </PopupClick>\n        );\n    }\n}\n\nexport default AlertsNotifierExample;\n\nconst Styles = {\n    click: {\n        color: 'blue',\n        textDecoration: 'underline'\n    }\n};\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Animation.example.jsx":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Animation.example.jsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React,{Component, cloneElement} from 'react'; \nimport Animate from \"organism-react-animate\"\n\nconst hello = (<div>Hello world!!</div>);\n\nclass AnimationExample extends Component\n{\n    constructor(props) \n    {\n        super(props);\n        this.state = {\n             dom: hello \n        };\n    }\n\n\n    render()\n    {\n        return (\n            <div>\n                <Animate\n                    appear=\"fadeInRight-3000\"\n                    enter=\"fadeInRight-3000\"\n                    leave=\"fadeOutRight-1000\"\n                >\n                {this.state.dom}\n                </Animate>\n                <a href=\"#\"\n                    style={{marginLeft:'10px'}}\n                    onClick={((e)=>{\n                        e.preventDefault();\n                        this.setState({\n                            dom: null \n                        });\n                    }).bind(this)}\n                >leave</a>\n\n                <a href=\"#\" \n                    style={{marginLeft:'10px'}}\n                    onClick={((e)=>{\n                        e.preventDefault();\n                        this.setState({\n                           dom: hello \n                        });\n                    }).bind(this)}\n                >enter</a>\n            </div>\n        );\n    }\n}\n\nexport default AnimationExample;\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AnimationDelay.example.jsx":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AnimationDelay.example.jsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React,{PureComponent} from 'react'; \nimport Animate from \"organism-react-animate\"\n\nconst foo = (<div>Hello</div>);\nconst bar = (<div>world!!</div>);\n\nclass AnimationDelayExample extends PureComponent\n{\n    constructor(props) \n    {\n        super(props);\n        this.state = {\n            foo, bar \n        };\n    }\n\n    render()\n    {\n        return (\n            <div>\n                <Animate\n                    appear=\"fadeInRight-3000\"\n                    enter=\"fadeInRight-3000\"\n                    leave=\"fadeOutRight-1000\"\n                >\n                    {this.state.foo}\n                </Animate>\n                <Animate\n                    appear=\"fadeInRight-3000-500\"\n                    enter=\"fadeInRight-3000-500\"\n                    leave=\"fadeOutRight-1000-500\"\n                >\n                    {this.state.bar}\n                </Animate>\n                <a href=\"#\"\n                    style={{marginLeft:'10px'}}\n                    onClick={((e)=>{\n                        e.preventDefault();\n                        this.setState({\n                            foo: null,\n                            bar: null\n                        });\n                    }).bind(this)}\n                >leave</a>\n\n                <a href=\"#\" \n                    style={{marginLeft:'10px'}}\n                    onClick={((e)=>{\n                        e.preventDefault();\n                        this.setState({\n                            foo,\n                            bar\n                        });\n                    }).bind(this)}\n                >enter</a>\n            </div>\n        );\n    }\n}\n\nexport default AnimationDelayExample;\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AnimationReplace.example.jsx":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AnimationReplace.example.jsx ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React,{PureComponent} from 'react'; \n\n/**\n * Production please use\n * import Animate from \"organism-react-animate\"\n */\nimport {Replace} from \"organism-react-animate\"\n\nclass AnimationReplaceExample extends PureComponent\n{\n\n    render()\n    {\n        return (\n            <Replace \n                enter=\"fadeInRight-2000\"\n                leave=\"fadeOutRight-1000\"\n                style={{minHeight: 30, overflow: 'hidden'}}\n            >\n                <div style={{background:\"#f4cc70\"}}>1</div>\n                <div style={{background:\"#de7a22\"}}>2</div>\n                <div style={{background:\"#20948b\"}}>3</div>\n            </Replace>\n        );\n    }\n}\n\nexport default AnimationReplaceExample;\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AsciiDoc.example.jsx":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AsciiDoc.example.jsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { PureComponent } from \"react\";\n\nimport Asciidoc from \"organism-react-asciidoc\";\n\nconst adoc = `\n:toc:\n:toc-placement!:\ntoc::[]\n\n= h1 - test\ntest\n\n== h2 - test2\n* Hello *world*\n\n== h2 - test3\n- [ ] option1\n- [*] option1\n`;\n\nclass AsciidocDemo extends PureComponent {\n  render() {\n    return <Asciidoc options={{ doctype: \"book\" }}>{adoc}</Asciidoc>;\n  }\n}\n\nexport default AsciidocDemo;\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CarouselAnimation.example.jsx":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CarouselAnimation.example.jsx ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React from 'react';\nimport {Carousel, CarouselAnimation} from 'organism-react-carousel';\n\nconst CarouselAnimationExample = (props)=>\n{\n    return (\n        <CarouselAnimation \n            carouselAttr={{\n                style: Styles.carousel\n            }}\n            style={Styles.container}\n        >\n            <Carousel>\n                <img\n                    style={Styles.img}\n                    src=\"https://c1.staticflickr.com/9/8567/16584613141_d984a3680a_b.jpg\"\n                />\n            </Carousel>\n            <Carousel>2</Carousel>\n            <Carousel>3</Carousel>\n            <Carousel>4</Carousel>\n            <Carousel>5</Carousel>\n        </CarouselAnimation>\n    );\n};\n\nexport default CarouselAnimationExample;\n\nconst Styles = {\n    container: {\n        margin: '0 10%'\n    },\n    carousel: {\n        width: '100%',\n        height: 300,\n        background: '#00558B'\n    },\n    img: {\n        maxWidth: '100%',\n        verticalAlign: 'bottom'\n    }\n};\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CarouselAnimationHideThumb.example.jsx":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CarouselAnimationHideThumb.example.jsx ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React from 'react';\nimport {Carousel, CarouselAnimation} from 'organism-react-carousel';\n\nconst CarouselAnimationExample = (props)=>\n{\n    return (\n        <CarouselAnimation \n            carouselAttr={{\n                style: Styles.carousel\n            }}\n            style={Styles.container}\n            hideThumb\n        >\n            <Carousel>\n                <img\n                    style={Styles.img}\n                    src=\"https://c1.staticflickr.com/9/8567/16584613141_d984a3680a_b.jpg\"\n                />\n            </Carousel>\n            <Carousel>2</Carousel>\n            <Carousel>3</Carousel>\n            <Carousel>4</Carousel>\n            <Carousel>5</Carousel>\n        </CarouselAnimation>\n    );\n};\n\nexport default CarouselAnimationExample;\n\nconst Styles = {\n    container: {\n        margin: '0 10%'\n    },\n    carousel: {\n        width: '100%',\n        height: 300,\n        background: '#00558B'\n    },\n    img: {\n        maxWidth: '100%',\n        verticalAlign: 'bottom'\n    }\n};\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CarouselSlide.example.jsx":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CarouselSlide.example.jsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React from 'react';\nimport {Carousel, CarouselSlide} from 'organism-react-carousel';\n\nconst CarouselSlideExample = (props) =>\n{\n    return ( \n        <CarouselSlide \n            carouselAttr={{\n                style: Styles.carousel\n            }}\n        >\n            <Carousel>\n                <img\n                    style={Styles.img}\n                    src=\"https://c1.staticflickr.com/9/8567/16584613141_d984a3680a_b.jpg\"\n                />\n            </Carousel>\n            <Carousel>2</Carousel>\n            <Carousel>3</Carousel>\n            <Carousel>4</Carousel>\n            <Carousel>5</Carousel>\n        </CarouselSlide>\n    );\n}\n\nexport default CarouselSlideExample;\n\nconst Styles = {\n    carousel: {\n        width: 300,\n        height: 300,\n        background: '#00558B'\n    },\n};\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Checkbox.example.jsx":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Checkbox.example.jsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React, {PureComponent} from 'react';\n\nimport {Form} from 'react-atomic-molecule';\nimport {Checkbox} from 'react-atomic-organism';\n\nclass CheckboxExample extends PureComponent {\n  render() {\n    return (\n      <Form>\n        <Checkbox />\n        <Checkbox type=\"radio\" />\n        <Checkbox toggle />\n        <Checkbox slider />\n      </Form>\n    );\n  }\n}\n\nexport default CheckboxExample;\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CodeEditor.example.jsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CodeEditor.example.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React from 'react'; \n\nimport {\n   openCodeEditor \n} from \"organism-react-codeeditor\";\n\nconst CodeEditorExample = props => {\n  return ( \n    <button onClick={()=>openCodeEditor()}>\n      open\n    </button>\n  );\n}\n\nexport default CodeEditorExample;\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CodeExample.example.jsx":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CodeExample.example.jsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React from 'react'; \n\n/**\n * Production please use\n * import CodeExample from 'organism-react-code'\n */\nimport CodeExample from 'organism-react-code';\n\n/**\n * Your source code.\n * npm i raw-loader\n */\nimport code from '!raw-loader!../../../ui/organisms/CodeExample.example';\n\nconst CodeExampleExample = props => (\n    <CodeExample\n        code={code}\n        header=\"Test Header\"\n        git=\"react-atomic/react-atomic-organism/tree/master/packages/organism-react-code/\"\n        npm=\"organism-react-code\"\n    >\n        <div>Test Demo Area</div>\n    </CodeExample>\n);\n\nexport default CodeExampleExample;\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3AreaChart.example.jsx":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3AreaChart.example.jsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React from 'react';\nimport {AreaChart} from 'organism-react-d3-axis-chart';\n\nconst data = [\n  {\n    values: [\n      {\n        x: '2019-01',\n        y: 100,\n      },\n      {\n        x: '2019-02',\n        y: 450,\n      },\n      {\n        x: '2019-03',\n        y: 450,\n      },\n      {\n        x: '2019-04',\n        y: 0,\n      },\n      {\n        x: '2019-05',\n        y: 0,\n      },\n    ],\n  },\n];\n\nconst D3AreaChart = props => {\n  return <AreaChart data={data} style={{maxHeight: 450}} />;\n};\n\nexport default D3AreaChart;\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3BarChart.example.jsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3BarChart.example.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React from 'react';\nimport {BarChart} from 'organism-react-d3-axis-chart';\n\nconst D3BarChart = (props) =>\n{\n    let data = \n    { \n        values: [\n            {\n                x: '2013-01',\n                y: 53\n            },\n            {\n                x: '2013-02',\n                y: 165 \n            },\n            {\n                x: '2013-03',\n                y: 269 \n            },\n        ]\n    };\n    \n    return (\n        <BarChart\n            data={data}\n            style={{maxHeight: 450}}\n        />\n    );\n}\n\nexport default D3BarChart;\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3LineChart.example.jsx":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3LineChart.example.jsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React from 'react';\nimport {LineChart} from 'organism-react-d3-axis-chart';\n\nconst D3LineChart = (props) =>\n{\n    let data = [ \n        {\n            values: [\n                {\n                    x: '2013-01',\n                    y: 100 \n                },\n                {\n                    x: '2013-02',\n                    y: 450\n                },\n                {\n                    x: '2013-01',\n                    y: 450\n                },\n            ]\n        }\n    ];\n    return (\n        <LineChart\n            data={data}\n            style={{maxHeight: 450}}\n            hideAxis={true}\n            thresholds={[200]}\n        />\n    );\n}\n\nexport default D3LineChart;\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3PieChart.example.jsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3PieChart.example.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React from 'react';\nimport PieChart from 'organism-react-d3-piechart';\n\nconst D3PieChartExample = (props) =>\n{\n    let data = [\n        {value: 10, label: 'xxx'},\n        {value: 30, label: 'yyy'},\n    ];\n    return (\n    <PieChart\n       data={data} \n       style={{maxWidth:300}}\n       unit=''\n    />\n    );\n}\n\nexport default D3PieChartExample;\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3Uml.example.jsx":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3Uml.example.jsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React, {PureComponent} from 'react'\n\nimport {UMLGraph} from 'organism-react-d3-uml'\n\nconst data = {\n    tables: [\n        {\n            name: 'table1',\n            cols: [\n                't1-col1',\n                't1-col2',\n            ]\n        },\n        {\n            name: 'table2',\n            cols: [\n                't2-col1',\n                't2-col2',\n            ]\n        },\n    ],\n    conns: [\n        {\n            from: {\n                table: 'table1',\n                col: 't1-col1'\n            },\n            to: {\n                table: 'table2',\n                col: 't2-col2'\n            }\n        }\n    ]\n}\n\n\nclass D3UmlExample extends PureComponent\n{\n    render()\n    {\n        return <UMLGraph\n            data={data}\n            connsLocator={d => d.conns} \n            connFromBoxGroupLocator={d => d.from.table}\n            connFromBoxLocator={d => d.from.col}\n            connToBoxGroupLocator={d => d.to.table}\n            connToBoxLocator={d => d.to.col}\n        /> \n    }\n}\n\nexport default D3UmlExample\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Dropzone.example.jsx":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Dropzone.example.jsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React, {PureComponent} from 'react'\nimport Dropzone from 'organism-react-dropzone'\nimport get from 'get-object-value'\n\nclass DropzoneExample extends PureComponent\n{\n    state = {\n        urls: []\n    }\n\n    handleClick = () => \n    {\n        this.dropzone.openDialog();\n    }\n\n    render()\n    {\n        const {urls} = this.state;\n        return (\n            <div>\n            <Dropzone \n                ref={el=>this.dropzone=el}\n                acceptedFiles=\".png, .jpg\"\n                showFiletypeIcon={true}\n                postUrl=\"https://file.io\"\n                djsConfig={{\n                    addRemoveLinks: true\n                }}\n                eventHandlers={{\n                    success: file => \n                    {\n                        this.setState(({urls})=>{\n                            const req = get(file, ['xhr', 'response']); \n                            if (req) {\n                                const json = JSON.parse(req);    \n                                urls.push(json.link);\n                            }\n                            return urls;\n                        });\n                    }\n                }}\n            />\n            <ul>\n                {\n                    urls.map( (url, key) =>\n                        <li key={key}><a href={url} target=\"_blank\">{url}</a></li>\n                    )\n                }\n            </ul>\n            <button onClick={this.handleClick}>open</button>\n            </div>\n        );\n    }\n\n}\n\nexport default DropzoneExample;\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FBLike.example.jsx":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FBLike.example.jsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React from 'react';\nimport {FBLike} from 'organism-react-facebook';\n\nconst FBLikeExample = props =>\n  <FBLike page=\"https://www.facebook.com/react\" />\n\nexport default FBLikeExample;\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FBPage.example.jsx":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FBPage.example.jsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React from 'react';\nimport {FBPage} from 'organism-react-facebook';\n\nconst FBPageExample = (props) =>\n{\n    return <FBPage page=\"react\" />;\n}\n\nexport default FBPageExample;\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FixedDataTableList.example.jsx":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FixedDataTableList.example.jsx ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React, {PureComponent} from 'react'\n\nimport {Cell, Column} from 'pmvc_react_list'\nimport Table from 'pmvc_react_list/fixedDataTable'\n\nconst rows = [\n  ['a1', 'b1', 'c1'],\n  ['a2', 'b2', 'c2'],\n  ['a3', 'b3', 'c3'],\n  ['a4', 'b4', 'c4'],\n  ['a5', 'b5', 'c5'],\n  ['a6', 'b6', 'c6'],\n];\n\nclass FixedDataTableListExample extends PureComponent\n{\n    render()\n    {\n        return (\n            <div style={{width:350}}>\n            <Table\n                rows={rows}\n                getColWidth={()=>150}\n                height={150}\n            >\n                <Column\n                    header={<Cell>h1</Cell>}\n                    cell={({rowIndex, columnKey:columnIndex})=>{\n                        return rows[rowIndex][columnIndex] \n                    }}\n                />\n                <Column\n                    header={<Cell>h2</Cell>}\n                    cell={({rowIndex, columnKey:columnIndex})=>{\n                        return rows[rowIndex][columnIndex] \n                    }}\n                />\n                <Column\n                    header={<Cell>h3</Cell>}\n                    cell={({rowIndex, columnKey:columnIndex})=>{\n                        return rows[rowIndex][columnIndex] \n                    }}\n                />\n            </Table>\n            </div>\n        )\n    }\n}\n\nexport default FixedDataTableListExample;\n\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FullScreen.example.jsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FullScreen.example.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React,{PureComponent} from 'react'; \nimport get from 'get-object-value';\n\nimport {\n    FullScreenExample as FullScreen\n} from \"organism-react-code\";\n\nclass FullScreenExample extends PureComponent\n{\n    render()\n    {\n        return ( \n            <FullScreen id=\"full-screen-example\" button=\"open full screen\">\n            test\n            </FullScreen>\n        );\n    }\n}\n\n\nexport default FullScreenExample;\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/GrapesJs.example.jsx":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/GrapesJs.example.jsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\nimport {GrapesJsController} from 'organism-react-grapesjs';\n\nconst GrapesJsExample = () => <GrapesJsController style={Styles.container}/>\n\nexport default GrapesJsExample;\n\nconst Styles = {\n  container: {\n    minHeight: 600\n  }\n};  \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/GridList.example.jsx":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/GridList.example.jsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React, {PureComponent} from 'react';\n\nconst rows = [\n  ['a1', 'b1', 'c1'],\n  ['a2', 'b2', 'c2'],\n  ['a3', 'b3', 'c3'],\n  ['a4', 'b4', 'c4'],\n  ['a5', 'b5', 'c5'],\n  ['a6', 'b6', 'c6'],\n];\n\nlet RVGrid = null;\n\nclass GridListExample extends PureComponent\n{\n    state = {\n        isLoad : false\n    }\n\n    componentDidMount()\n    {\n        import ('pmvc_react_list/rv').then(({RVGrid: rvGrid})=>{\n            RVGrid = rvGrid; \n            this.setState({isLoad: true});\n        });\n    }\n    \n    render()\n    {\n        const {isLoad} = this.state;\n        let grid = null; \n        if (RVGrid && isLoad) {\n            const className ='grid'; // hack for disable const element\n            grid = <RVGrid\n                className={className}\n                width={200}\n                height={100}\n                rows={rows}\n                style={Styles.container}\n            />\n        }\n        return grid;\n    }\n}\n\nexport default GridListExample;\n\nconst Styles = {\n    container: {\n        border: '1px solid #000'\n    }\n}\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/HtmlTableList.example.jsx":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/HtmlTableList.example.jsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React, {PureComponent} from 'react';\n\nimport {Table, Cell, Column} from 'pmvc_react_list';\n\nconst rows = [\n  ['a1', 'b1', 'c1'],\n  ['a2', 'b2', 'c2'],\n  ['a3', 'b3', 'c3'],\n  ['a1', 'b1', 'c1'],\n  ['a2', 'b2', 'c2'],\n  ['a3', 'b3', 'c3'],\n];\n\nclass HtmlTableListExample extends PureComponent\n{\n    render()\n    {\n        return (\n            <Table rows={rows}>\n                <Column\n                    header={<Cell>h1</Cell>}\n                    cell={({rowIndex,columnIndex})=>{\n                        return rows[rowIndex][columnIndex] \n                    }}\n                />\n                <Column\n                    header={<Cell>h2</Cell>}\n                    cell={({rowIndex,columnIndex})=>{\n                        return rows[rowIndex][columnIndex] \n                    }}\n                />\n                <Column\n                    header={<Cell>h3</Cell>}\n                    cell={({rowIndex,columnIndex})=>{\n                        return rows[rowIndex][2] \n                    }}\n                />\n            </Table>\n        );\n    }\n}\n\nexport default HtmlTableListExample;\n\nconst Styles = {\n    col: {\n        height: 40\n    }\n};\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/PageLoadProgressHandler.example.jsx":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/PageLoadProgressHandler.example.jsx ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React from 'react';\nimport {PageLoadProgressHandler} from 'organism-react-progress'; \nimport {\n    Button,\n    InputBox\n} from 'react-atomic-molecule';\n\nconst PageLoadProgressHandlerExample = (props) =>\n{\n    let oLoad;\n    let dInput;\n    return (\n        <div>\n\n            <PageLoadProgressHandler ref={o=>oLoad=o}/>\n\n            <div>\n                <Button style={Styles.button} onClick={()=>{\n                    oLoad.start(100, 800);\n                }}>Start</Button>\n                <Button style={Styles.button} onClick={()=>{\n                    oLoad.pause();\n                }}>Pause</Button>\n                <Button style={Styles.button} onClick={()=>{\n                    oLoad.complete();\n                }}>Complete</Button>\n                <Button style={Styles.button} onClick={()=>{\n                    oLoad.reset();\n                }}>Reset</Button>\n            </div>\n\n            <div>\n                <InputBox\n                    leftLabel=\"Pause @\"\n                    rightLabel=\"%\"\n                    refCb={o=>dInput=o} \n                    button={'Go'}\n                    buttonProps={{\n                        onClick: ()=>\n                        {\n                            oLoad.start(dInput.value);\n                        }\n                    }}\n                    style={Styles.input}\n                />\n            </div>\n        </div>\n    );\n};\n\nexport default PageLoadProgressHandlerExample;\n\nconst Styles = {\n    input: {\n        width: 20\n    },\n    button: {\n        marginBottom: 10\n    }\n};\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/PageLoadProgressHandlerWithAjax.example.jsx":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/PageLoadProgressHandlerWithAjax.example.jsx ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React from 'react';\nimport {PageLoadProgressHandler} from 'organism-react-progress'; \nimport {ajaxDispatch} from 'organism-react-ajax';\nimport {\n    Button,\n} from 'react-atomic-molecule';\n\nconst PageLoadProgressHandlerExample = (props) =>\n{\n    let url = 'https://raw.githubusercontent.com/react-atomic/react-atomic-ui/master/README.md';\n    return (\n        <div>\n\n            <PageLoadProgressHandler ajax={true}/>\n\n            <Button onClick={()=>{\n                ajaxDispatch({\n                    type: 'ajaxGet',\n                    params: {\n                        url: url,\n                        callback: (json,text,o)=>\n                        {\n                            alert(text);\n                        }\n                    }\n                });\n            }}>\n                Call Ajax\n            </Button>\n\n        </div>\n    );\n};\n\nexport default PageLoadProgressHandlerExample;\n\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Pagination.example.jsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Pagination.example.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React, {PureComponent} from 'react'; \n\nimport {PaginationController} from 'organism-react-navigation';\n\nclass PaginationExample extends PureComponent\n{\n\n  handlePageChange = ({begin}) => {\n    this.setState({begin});\n  }\n\n  render()\n  {\n    const {begin} = this.state || {};\n    return (\n      <PaginationController style={Styles.container} onPageChange={this.handlePageChange} total={500} begin={begin} />\n    );\n  }\n}\n\nexport default PaginationExample;\n\nconst Styles = {\n  container: {\n    textAlign: 'center'\n  }\n};\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/ParallaxBackgroundImage.example.jsx":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/ParallaxBackgroundImage.example.jsx ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React from 'react'; \nimport {ParallaxBackgroundImage} from 'organism-react-parallax';\n\nconst ParallaxBackgroundImageExample = () =>\n<ParallaxBackgroundImage\n    style={Styles.container}\n    backgroundImage=\"https://c1.staticflickr.com/9/8621/16732897815_4705c08fe6_h.jpg\"\n>\ntest\n</ParallaxBackgroundImage>\n\nexport default ParallaxBackgroundImageExample;\n\nconst Styles = {\n    container: {\n        height: 300,\n        color: '#fff',\n        textAlign: 'center',\n        paddingTop: 200,\n    }\n};\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Popup.example.jsx":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Popup.example.jsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React from 'react'; \n\n/**\n * Production please use\n * import {...xxx} from \"organism-react-popup\"\n */\nimport {\n    Dialog,\n    PopupModal,\n    PopupClick\n} from \"organism-react-popup\";\n\nimport {Button} from 'react-atomic-molecule'\n\nconst PopupExample = () =>\n{\n    return (\n      <div>\n        <PopupClick\n            style={Styles.click}\n            popup={()=>{\n                return <PopupModal>\n                    xxx\n                </PopupModal>;\n            }}\n            container={<a />}\n        >\n            show modal\n        </PopupClick>\n\n        <PopupClick\n            style={{marginLeft:5}}\n            popup={(\n              <Dialog header=\"Test Header\">\n                Test Dialog\n              </Dialog>\n            )}\n            container={<Button />}\n        >\n            show dialog \n        </PopupClick>\n      </div>\n    );\n}\n\nexport default PopupExample;\n\nconst Styles = {\n    click: {\n        color: 'blue',\n        textDecoration: 'underline'\n    }\n};\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/QQVideo.example.jsx":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/QQVideo.example.jsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React from 'react'; \nimport QQVideo from 'organism-react-qq-video';\n\nconst QQVideoExample = () =>\n  <QQVideo videoId=\"j0792wzb6v8\" />\n\nexport default QQVideoExample;\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/RadioGroup.example.jsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/RadioGroup.example.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React, {PureComponent} from 'react'; \n\nimport {Form, Button} from 'react-atomic-molecule'\nimport {RadioGroup} from 'react-atomic-organism'\n\nconst options = [\n    {\n        label: 'Boy',\n        value: 'boy'\n    },\n    {\n        label: 'Girl',\n        value: 'girl'\n    },\n]\n\nclass RadioGroupExample extends PureComponent\n{\n    state = {\n        value: ''\n    }\n    handleChange = () =>\n    {\n        this.setState({value: this.radio.getValue()})\n    }\n\n    render()\n    {\n        const {value} = this.state\n        return (\n            <Form>\n                <RadioGroup\n                    ref={el=>this.radio=el}\n                    inline={false}\n                    label=\"Sex: \"\n                    name=\"sex\"\n                    value={value}\n                    options={options}\n                    onChange={this.handleChange}\n                />\n                <div>Current: {value}</div>\n                <Button onClick={()=>this.setState({value: 'boy'})}>Set to Boy</Button>\n                <Button onClick={()=>this.setState({value: 'girl'})}>Set to Girl</Button>\n            </Form>\n        )\n    }\n}\n\nexport default RadioGroupExample\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/ReactVirtualizedTableList.example.jsx":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/ReactVirtualizedTableList.example.jsx ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React, {PureComponent} from 'react'\n\nimport {Cell, Column} from 'pmvc_react_list'\nimport Table from 'pmvc_react_list/rv'\n\nconst rows = [\n  ['a1', 'b1', 'c1'],\n  ['a2', 'b2', 'c2'],\n  ['a3', 'b3', 'c3'],\n  ['a1', 'b1', 'c1'],\n  ['a2', 'b2', 'c2'],\n  ['a3', 'b3', 'c3'],\n];\n\nclass ReactVirtualizedTableListExample extends PureComponent\n{\n    handleClick = rowIndex => ev =>\n    {\n        alert(rowIndex)\n    }\n\n    render()\n    {\n        return (\n            <div style={{width:'40%', height:150}}>\n            <Table\n                rows={rows}\n            >\n                <Column\n                    header={<Cell>h1</Cell>}\n                    cell={({rowIndex, columnIndex, style})=>\n                        <div style={style} onClick={this.handleClick(rowIndex)}>\n                            {rows[rowIndex][columnIndex]}\n                        </div> \n                    }\n                />\n                <Column\n                    header={<Cell>h2</Cell>}\n                    cell={({rowIndex, columnIndex, style})=>\n                        <div style={style} onClick={this.handleClick(rowIndex)}>\n                            {rows[rowIndex][columnIndex]}\n                        </div> \n                    }\n                />\n                <Column\n                    header={<Cell>h3</Cell>}\n                    cell={({rowIndex, columnIndex, style})=>\n                        <div style={style} onClick={this.handleClick(rowIndex)}>\n                            {rows[rowIndex][columnIndex]}\n                        </div> \n                    }\n                />\n            </Table>\n            </div>\n        )\n    }\n}\n\nexport default ReactVirtualizedTableListExample;\n\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/ReshowMessage.example.jsx":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/ReshowMessage.example.jsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React, {PureComponent} from 'react';\n\nimport {Button} from 'react-atomic-molecule';\nimport {dispatch, Return} from 'reshow';\n\nconst DialogResult = ({dialogReturn}) =>\n  'undefined' !== typeof dialogReturn ? 'Dialog: ' + dialogReturn : null;\n\nclass ReshowMessageExample extends PureComponent {\n  handleAddAlert = e => {\n    dispatch('alert/add', {\n      message: 'test',\n    });\n  };\n\n  handleResetAlert = e => {\n    dispatch('alert/reset', {\n      alerts: [1, 2, 3],\n    });\n  };\n\n  handleCleanAlert = e => {\n    dispatch('alert/reset', {\n      alerts: null,\n    });\n  };\n\n  handleOpenDialog = e => {\n    dispatch('dialog/start', {\n      dialog: 'how are u',\n    });\n  };\n\n  render() {\n    return (\n      <div>\n        <p>\n          <Button onClick={this.handleAddAlert}>Add alert</Button>\n          <Button onClick={this.handleResetAlert}>Reset alert</Button>\n          <Button onClick={this.handleCleanAlert}>Clean all alerts</Button>\n        </p>\n        <p>\n          <Button onClick={this.handleOpenDialog}>Open Dialog</Button>\n          <Return initStates={['dialogReturn']}>\n            <DialogResult />\n          </Return>\n        </p>\n      </div>\n    );\n  }\n}\n\nexport default ReshowMessageExample;\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Spotlight.example.jsx":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Spotlight.example.jsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React,{PureComponent} from 'react'; \n\nimport { Button } from 'react-atomic-molecule';\n\nimport {\n    PopupPool\n} from \"organism-react-popup\";\n\nimport {\n    FullScreenExample\n} from \"organism-react-code\";\n\nimport Spotlight from \"organism-react-spotlight\";\n\nclass SpotlightExample extends PureComponent\n{\n    state = {\n        spotlight: false\n    };\n\n    render()\n    {\n        const {spotlight} = this.state;\n        let thisSpotlight = null;\n        if (spotlight) {\n            thisSpotlight = (\n                <Spotlight\n                    toPool=\"spotlight-pool\"\n                    targetEl={this.spot}\n                    onClose={()=>{\n                        this.setState({spotlight: null});\n                    }}\n                />\n            );\n        }\n        return ( \n            <FullScreenExample\n                button=\"open full screen\"\n                onClose={()=>this.setState({spotlight: null})}\n            >\n                <div ref={el=>this.spot=el} style={Styles.el}>Spotlight</div> \n                <div>\n                    <Button onClick={()=>{\n                        this.setState({\n                            spotlight: true \n                        });\n                    }}>Try it.</Button>\n                </div>\n                {thisSpotlight}\n                <PopupPool name=\"spotlight-pool\" />\n            </FullScreenExample>\n        );\n    }\n}\n\nexport default SpotlightExample;\n\nconst Styles = {\n    el: {\n        display: 'inline-block',\n        width: 100,\n        height: 200,\n        margin: 10\n    }\n};\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/StockChart.example.jsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/StockChart.example.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React, {PureComponent} from 'react';\nimport {\n    FullScreenExample as FullScreen\n} from \"organism-react-code\";\nimport {\n    StockChartCompute\n} from 'organism-react-stockcharts';\nimport {\n    ajaxDispatch\n} from 'organism-react-ajax';\n\n\nclass StockChartExample extends PureComponent\n{\n    state = {\n        data: null\n    };\n\n    componentDidMount()\n    {\n        ajaxDispatch({\n            type: 'ajaxGet',\n            params: {\n                url: '//raw.githubusercontent.com/react-atomic/react-atomic-ui/master/data/stock.json',\n                callback: (json) => {\n                    this.setState({data: {trades: json}});\n                }\n            }\n        });\n    }\n\n    render()\n    {\n        const {data} = this.state;\n        if (!data) {\n            return null;\n        }\n        return (\n            <FullScreen\n                id=\"full-page-stock-chart\"\n                button=\"open full screen\"\n            >\n                <StockChartCompute\n                    data={data}\n                    tradeRowsLocator={d => d.trades}\n                    tradeHighLocator={d => d.h}\n                    tradeLowLocator={d => d.l}\n                    tradeOpenLocator={d => d.o}\n                    tradeCloseLocator={d => d.c}\n                    tradeVolumeLocator={d => d.v}\n                    tradeDateLocator={d => d.t}\n                />\n            </FullScreen>\n        );\n    }\n}\n\nexport default StockChartExample;\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Suggestion.example.jsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Suggestion.example.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React, {PureComponent} from 'react';\n\nimport {Button, SemanticUI} from 'react-atomic-molecule';\n\nimport {Suggestion} from 'react-atomic-organism';\n\nconst data = ['abc', 'abb', 'acc'];\n\nclass SuggestionExample1 extends PureComponent {\n  state = {\n    results: [],\n  };\n\n  handleChange = (e, value) => {\n    if (!value.length) {\n      this.setState({results: data});\n      return;\n    }\n    const results = [];\n    data.forEach((v, k) => {\n      if (value.length && -1 !== v.indexOf(value)) {\n        results.push(v);\n      }\n    });\n    this.setState({results});\n  };\n\n  handleItemClick = (e, item) => {\n    this.suggestion.setValue(item);\n  };\n\n  render() {\n    const {results, myValue} = this.state;\n    return (\n      <SemanticUI>\n        <Suggestion\n          ref={el => (this.suggestion = el)}\n          onChange={this.handleChange}\n          results={results}\n          onItemClick={this.handleItemClick}\n          value={myValue}\n        />\n        <Button\n          onClick={() => this.setState({myValue: myValue ? myValue + 1 : 123})}>\n          set\n        </Button>\n      </SemanticUI>\n    );\n  }\n}\n\nconst SuggestionExample = () => (\n  <SemanticUI>\n    <SuggestionExample1 />\n    couldCreate: false\n    <Suggestion results={data} couldCreate={false} filter preview />\n  </SemanticUI>\n);\n\nexport default SuggestionExample;\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/TabView.example.jsx":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/TabView.example.jsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React, {PureComponent} from 'react';\n\nimport {Menu, Item, InputBox} from 'react-atomic-molecule'\nimport SearchIcon from 'ricon/Search'\n\n\nimport {TabView, Tab} from 'organism-react-navigation'\n\nconst RightMenu = () =>\n<Menu className=\"right\" ui={false}>\n    <Item style={{boxSizing: 'border-box'}}>\n        <InputBox icon={<SearchIcon />} transparent placeholder=\"Search...\" />\n    </Item>\n</Menu>\n\n\nclass TabViewExample extends PureComponent\n{\n    render()\n    {\n        return (\n            <TabView\n                rightMenu={<RightMenu />}\n            >\n                <Tab>\n                    <div>content1</div>\n                    <div>menu1</div>\n                </Tab>\n                <Tab>\n                    <div>content2</div>\n                    <div>menu2</div>\n                </Tab>\n            </TabView>\n        )\n    }\n}\n\nexport default TabViewExample\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/TagInput.example.jsx":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/TagInput.example.jsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React, {PureComponent} from 'react';\nimport {TagsField} from 'organism-react-tag-input';\nimport {SemanticUI} from 'react-atomic-molecule';\n\nclass TagInputExample extends PureComponent {\n  render() {\n    return (\n      <SemanticUI>\n        <TagsField />\n      </SemanticUI>\n    );\n  }\n}\n\nexport default TagInputExample;\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/WindowOffset.example.jsx":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/WindowOffset.example.jsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React, {Component} from 'react'; \nimport { PopupHover, PopupOverlay } from 'organism-react-popup';\n\nclass WindowOffsetExample extends Component\n{\n    handleClick = (e) =>\n    {\n        const target = e.currentTarget;\n        import('get-window-offset').then(({default: getWindowOffset})=>{\n            const info = getWindowOffset(target);\n            console.log(info);\n        });\n    }\n\n    render()\n    {\n        return (\n            <div>\n                <div style={Styles.row}>\n                    <PopupHover popup=\"1\" isKeep={true}>\n                        <div style={{...Styles.col, ...Styles.col1}} onClick={this.handleClick}>1</div>\n                    </PopupHover>\n                    <PopupHover popup=\"2\" isKeep={true}>\n                        <div style={{...Styles.col, ...Styles.col2}} onClick={this.handleClick}>2</div>\n                    </PopupHover>\n                    <PopupHover popup=\"3\" isKeep={true}>\n                        <div style={{...Styles.col, ...Styles.col3}} onClick={this.handleClick}>3</div>\n                    </PopupHover>\n                </div>\n                <div style={Styles.row}>\n                    <PopupHover popup=\"4\">\n                        <div style={{...Styles.col, ...Styles.col1}} onClick={this.handleClick}>4</div>\n                    </PopupHover>\n                    <PopupHover popup=\"5\">\n                        <div style={{...Styles.col, ...Styles.col2}} onClick={this.handleClick}>5</div>\n                    </PopupHover>\n                    <PopupHover popup=\"6\">\n                        <div style={{...Styles.col, ...Styles.col3}} onClick={this.handleClick}>6</div>\n                    </PopupHover>\n                </div>\n                <div style={{width:60}}>\n                    <PopupHover popup=\"7\">\n                        <div style={{...Styles.col, ...Styles.col1}} onClick={this.handleClick}>7</div>\n                    </PopupHover>\n                    <PopupHover popup=\"8\">\n                        <div style={{...Styles.col, ...Styles.col2}} onClick={this.handleClick}>8</div>\n                    </PopupHover>\n                    <PopupHover popup=\"9\">\n                        <div style={{...Styles.col, ...Styles.col3}} onClick={this.handleClick}>9</div>\n                    </PopupHover>\n                </div>\n            </div>\n        );\n    }\n}\n\nexport default WindowOffsetExample;\n\nconst Styles = {\n    row: {\n        justifyContent: 'space-around',\n        display: 'flex',\n        marginBottom: 100,\n    },\n    col: {\n        width: 60,\n        height: 60,\n        lineHeight: '60px',\n        textAlign: 'center',\n        color: '#fff'\n    },\n    col1: {\n        background: '#c00'\n    },\n    col2: {\n        background: '#095'\n    },\n    col3: {\n        background: '#059'\n    }\n};\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/YouTubeRWD.example.jsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/YouTubeRWD.example.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony default export */ __webpack_exports__["default"] = ("import React from 'react'; \nimport {YoutubeRWD} from 'organism-react-video';\n\nconst YouTubeRWDExample = () =>\n<YoutubeRWD videoId=\"_2i6CmKjN3E\" />\n\nexport default YouTubeRWDExample;\n");

__react_refresh_utils__.registerExportsForReactRefresh(module);

if ( true && __react_refresh_utils__.isReactRefreshBoundary(module)) {
  module.hot.dispose(__react_refresh_utils__.createHotDisposeCallback(module));
  module.hot.accept(__react_refresh_utils__.createHotErrorHandler(module.i));

  if (!!module.hot.data && !!Object.keys(module.hot.data).length) {
    if (!module.hot.data.module || __react_refresh_utils__.shouldInvalidateReactRefreshBoundary(module.hot.data.module, module)) {
      window.location.reload();
    }

    __react_refresh_utils__.enqueueUpdate();
  }
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ }),

/***/ 1:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://0.0.0.0:8080 (webpack)/hot/dev-server.js ./node_modules/reshow-app/webpack/refresh/runtime/ReactRefreshEntry.js ./node_modules/reshow-app/webpack/refresh/runtime/ErrorOverlayEntry.js ./node_modules/reshow-app/webpack/refresh/runtime/BabelDetectComponent.js ./build/src/client.js ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/hill/git/react-atomic-ui/node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:8080 */"./node_modules/webpack-dev-server/client/index.js?http://0.0.0.0:8080");
__webpack_require__(/*! /Users/hill/git/react-atomic-ui/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/hill/git/react-atomic-ui/node_modules/reshow-app/webpack/refresh/runtime/ReactRefreshEntry.js */"./node_modules/reshow-app/webpack/refresh/runtime/ReactRefreshEntry.js");
__webpack_require__(/*! /Users/hill/git/react-atomic-ui/node_modules/reshow-app/webpack/refresh/runtime/ErrorOverlayEntry.js */"./node_modules/reshow-app/webpack/refresh/runtime/ErrorOverlayEntry.js");
__webpack_require__(/*! /Users/hill/git/react-atomic-ui/node_modules/reshow-app/webpack/refresh/runtime/BabelDetectComponent.js */"./node_modules/reshow-app/webpack/refresh/runtime/BabelDetectComponent.js");
module.exports = __webpack_require__(/*! ./build/src/client.js */"./build/src/client.js");


/***/ }),

/***/ 2:
/*!*********************************!*\
  !*** readable-stream (ignored) ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "d3":
/*!*********************!*\
  !*** external "d3" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = d3;

/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map