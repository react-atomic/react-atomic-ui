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
/******/ 		script.src = __webpack_require__.p + "" + chunkId + "." + hotCurrentHash + ".hot.js";
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
/******/ 	var hotCurrentHash = "92ae906073888e6ae571";
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

/***/ "../react-atomic-organism/packages/organism-react-code/build/es/src/index.js":
/*!***********************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-code/build/es/src/index.js ***!
  \***********************************************************************************/
/*! exports provided: default, FullScreenExample */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ui_organisms_CodeExample__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/organisms/CodeExample */ "../react-atomic-organism/packages/organism-react-code/build/es/ui/organisms/CodeExample.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ui_organisms_CodeExample__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _ui_organisms_FullScreenExample__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/organisms/FullScreenExample */ "../react-atomic-organism/packages/organism-react-code/build/es/ui/organisms/FullScreenExample.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FullScreenExample", function() { return _ui_organisms_FullScreenExample__WEBPACK_IMPORTED_MODULE_1__["default"]; });

// Default




/***/ }),

/***/ "../react-atomic-organism/packages/organism-react-code/build/es/ui/organisms/CodeBlock.js":
/*!************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-code/build/es/ui/organisms/CodeBlock.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ "../react-atomic-organism/packages/organism-react-code/node_modules/marked/lib/marked.umd.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-atomic-molecule */ "../react-atomic-organism/packages/organism-react-code/node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var syntax_colorer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! syntax-colorer */ "../react-atomic-organism/packages/organism-react-code/node_modules/syntax-colorer/build/es/src/index.js");




var DEFAULT_LANG = "js";
marked__WEBPACK_IMPORTED_MODULE_1__["marked"].setOptions({
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: syntax_colorer__WEBPACK_IMPORTED_MODULE_3__["default"]
});

var CodeBlock = function CodeBlock(props) {
  var text = "```".concat(DEFAULT_LANG, "\n").concat(props.children, "\n```");
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Unsafe"], null, Object(marked__WEBPACK_IMPORTED_MODULE_1__["marked"])(text));
};

_c = CodeBlock;
/* harmony default export */ __webpack_exports__["default"] = (CodeBlock);

var _c;

$RefreshReg$(_c, "CodeBlock");

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

/***/ "../react-atomic-organism/packages/organism-react-code/build/es/ui/organisms/CodeExample.js":
/*!**************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-code/build/es/ui/organisms/CodeExample.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var reshow_runtime_es_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/createSuper */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/createSuper.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-atomic-molecule */ "../react-atomic-organism/packages/organism-react-code/node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var ricon_Code__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ricon/Code */ "../react-atomic-organism/packages/organism-react-code/node_modules/ricon/Code.js");
/* harmony import */ var ricon_Code__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ricon_Code__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ricon_Git__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ricon/Git */ "../react-atomic-organism/packages/organism-react-code/node_modules/ricon/Git.js");
/* harmony import */ var ricon_Git__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ricon_Git__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ricon_Npm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ricon/Npm */ "../react-atomic-organism/packages/organism-react-code/node_modules/ricon/Npm.js");
/* harmony import */ var ricon_Npm__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ricon_Npm__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ricon_Edit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ricon/Edit */ "../react-atomic-organism/packages/organism-react-code/node_modules/ricon/Edit.js");
/* harmony import */ var ricon_Edit__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ricon_Edit__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _organisms_CodeBlock__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../organisms/CodeBlock */ "../react-atomic-organism/packages/organism-react-code/build/es/ui/organisms/CodeBlock.js");
/* harmony import */ var _organisms_CodeReadme__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../organisms/CodeReadme */ "../react-atomic-organism/packages/organism-react-code/build/es/ui/organisms/CodeReadme.js");







var _GitIcon, _NpmIcon, _EditIcon, _CodeIcon;










var CodeExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(CodeExample, _PureComponent);

  var _super = Object(reshow_runtime_es_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(CodeExample);

  function CodeExample(props) {
    var _this;

    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CodeExample);

    _this = _super.call(this, props);

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleClick", function () {
      _this.setState({
        on: !_this.state.on
      });
    });

    _this.state = {
      on: false
    };
    injects = Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_7__["lazyInject"])(injects, InjectStyles);
    return _this;
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CodeExample, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          header = _this$props.header,
          children = _this$props.children,
          code = _this$props.code,
          git = _this$props.git,
          npm = _this$props.npm,
          edit = _this$props.edit,
          id = _this$props.id;
      var state = this.state;
      var codeStyle = {};
      var thisCode;
      var thisReadme;
      var thisGit;
      var thisNpm;
      var thisEdit;

      if (!state.on) {
        codeStyle = Styles.hidden;
      } else {
        thisCode = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_organisms_CodeBlock__WEBPACK_IMPORTED_MODULE_12__["default"], null, code);
      }

      if (git) {
        var readmeUrl = "https://raw.githubusercontent.com/" + git.replace(/(\/(blob|tree)\/master\/)/, "/master/") + "README.md";
        var gitUrl = "https://github.com/" + git;
        thisReadme = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_organisms_CodeReadme__WEBPACK_IMPORTED_MODULE_13__["default"], {
          url: readmeUrl
        });
        thisGit = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
          atom: "a",
          target: "_blank",
          href: gitUrl,
          style: Styles.icon
        }, _GitIcon || (_GitIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ricon_Git__WEBPACK_IMPORTED_MODULE_9___default.a, null)));
      }

      if (npm) {
        var npmUrl = "https://www.npmjs.com/package/" + npm;
        thisNpm = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
          atom: "a",
          target: "_blank",
          href: npmUrl,
          style: Styles.icon
        }, _NpmIcon || (_NpmIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ricon_Npm__WEBPACK_IMPORTED_MODULE_10___default.a, null)));
      }

      if (edit) {
        thisEdit = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
          atom: "a",
          target: "_blank",
          href: edit,
          style: Styles.icon
        }, _EditIcon || (_EditIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ricon_Edit__WEBPACK_IMPORTED_MODULE_11___default.a, null)));
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_7__["List"], {
        type: "segments",
        id: id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_7__["Segment"], {
        className: "tertiary"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_7__["Header"], {
        style: Styles.header,
        className: "grey"
      }, header), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_7__["SemanticUI"], {
        style: Styles.iconBlock
      }, thisEdit, thisNpm, thisGit, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
        onClick: this.handleClick,
        style: Styles.icon
      }, _CodeIcon || (_CodeIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(ricon_Code__WEBPACK_IMPORTED_MODULE_8___default.a, null))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_7__["Segment"], {
        className: "secondary",
        style: codeStyle,
        styles: injects.code
      }, thisCode), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_7__["Segment"], null, children), thisReadme);
    }
  }]);

  return CodeExample;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (CodeExample);
var Styles = {
  header: {
    margin: 0
  },
  hidden: {
    maxHeight: 0,
    padding: "0 16px",
    margin: 0,
    ovarflow: "hidden"
  },
  iconBlock: {
    position: "absolute",
    top: 16,
    right: 6
  },
  icon: {
    maxWidth: 24,
    cursor: "pointer",
    marginRight: 10
  }
};
var injects;
var InjectStyles = {
  code: [{
    transition: ["padding 500ms ease"]
  }]
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

/***/ "../react-atomic-organism/packages/organism-react-code/build/es/ui/organisms/CodeReadme.js":
/*!*************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-code/build/es/ui/organisms/CodeReadme.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var reshow_runtime_es_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/createSuper */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/createSuper.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! marked */ "../react-atomic-organism/packages/organism-react-code/node_modules/marked/lib/marked.umd.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var organism_react_ajax__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! organism-react-ajax */ "./node_modules/organism-react-ajax/build/es/src/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-atomic-molecule */ "../react-atomic-organism/packages/organism-react-code/node_modules/react-atomic-molecule/build/es/src/index.js");











var CodeReadme = /*#__PURE__*/function (_Component) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(CodeReadme, _Component);

  var _super = Object(reshow_runtime_es_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(CodeReadme);

  function CodeReadme(props) {
    var _this;

    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CodeReadme);

    _this = _super.call(this, props);

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "_isMount", true);

    _this.state = {
      text: ""
    };
    return _this;
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CodeReadme, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var self = this;
      Object(organism_react_ajax__WEBPACK_IMPORTED_MODULE_8__["ajaxDispatch"])({
        type: "ajaxGet",
        params: {
          url: this.props.url,
          callback: function callback(json, text, o) {
            if (!_this2._isMount) {
              return false;
            }

            if (200 === o.status) {
              self.setState({
                text: text.replace(/(\<\!\-\-hidden\-\-\>)([\s\S]*?)(\<\!\-\-\/hidden\-\-\>)/g, "")
              });
            }
          }
        }
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._isMount = false;
    }
  }, {
    key: "render",
    value: function render() {
      var text = this.state.text;

      if (text) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_9__["Segment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_9__["Unsafe"], null, Object(marked__WEBPACK_IMPORTED_MODULE_7__["marked"])(text)));
      } else {
        return null;
      }
    }
  }]);

  return CodeReadme;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CodeReadme);

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

/***/ "../react-atomic-organism/packages/organism-react-code/build/es/ui/organisms/FullScreenExample.js":
/*!********************************************************************************************************!*\
  !*** ../react-atomic-organism/packages/organism-react-code/build/es/ui/organisms/FullScreenExample.js ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/classCallCheck */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/classCallCheck.js");
/* harmony import */ var reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/createClass */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/createClass.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/inherits */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/inherits.js");
/* harmony import */ var reshow_runtime_es_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow-runtime/es/helpers/createSuper */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/createSuper.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "../react-atomic-organism/packages/organism-react-code/node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var organism_react_popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! organism-react-popup */ "./node_modules/organism-react-popup/build/es/src/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-atomic-molecule */ "../react-atomic-organism/packages/organism-react-code/node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var call_func__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! call-func */ "../react-atomic-organism/packages/organism-react-code/node_modules/call-func/build/es/src/index.js");











var getLastHash = function getLastHash() {
  var urls = document.URL.split("#");
  var lastIndex = urls.length - 1;
  var last = urls[lastIndex];
  return last;
};

var updateUrl = function updateUrl(url) {
  return history.pushState("", "", url);
};

var FullScreenExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(FullScreenExample, _PureComponent);

  var _super = Object(reshow_runtime_es_helpers_createSuper__WEBPACK_IMPORTED_MODULE_4__["default"])(FullScreenExample);

  function FullScreenExample() {
    var _this;

    Object(reshow_runtime_es_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, FullScreenExample);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "state", {
      showFullScreen: false
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleClick", function () {
      var id = _this.props.id;
      var last = getLastHash();

      if (id && id !== last) {
        updateUrl(document.URL + "#" + id);
      }

      _this.setState({
        showFullScreen: true
      });
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleClose", function () {
      var _this$props = _this.props,
          id = _this$props.id,
          onClose = _this$props.onClose;
      var url = document.URL;
      var idIndex = url.lastIndexOf("#" + id);

      if (-1 !== idIndex) {
        updateUrl(url.substring(0, idIndex));
      }

      Object(call_func__WEBPACK_IMPORTED_MODULE_9__["default"])(onClose);

      _this.setState({
        showFullScreen: false
      });
    });

    return _this;
  }

  Object(reshow_runtime_es_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(FullScreenExample, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var id = this.props.id;
      var last = getLastHash();

      if (id === last) {
        this.setState({
          showFullScreen: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          button = _this$props2.button,
          children = _this$props2.children;
      var showFullScreen = this.state.showFullScreen;
      var thisFullScreen = null;

      if (showFullScreen) {
        thisFullScreen = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(organism_react_popup__WEBPACK_IMPORTED_MODULE_7__["FullScreen"], {
          onClose: this.handleClose
        }, children);
      }

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_8__["SemanticUI"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        onClick: this.handleClick
      }, button), thisFullScreen);
    }
  }]);

  return FullScreenExample;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])(FullScreenExample, "defaultProps", {
  button: "Open full screen"
});

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../../../../react-atomic-ui/node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/src/client.js":
/*!********************************!*\
  !*** ./build/es/src/client.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_app_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-app/client */ "./node_modules/reshow-app/client.js");
/* harmony import */ var _ui_pages_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/pages/index */ "./build/es/ui/pages/index.js");
/* harmony import */ var _i13n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i13n */ "./build/es/src/i13n.js");



/* harmony default export */ __webpack_exports__["default"] = (Object(reshow_app_client__WEBPACK_IMPORTED_MODULE_0__["default"])(_ui_pages_index__WEBPACK_IMPORTED_MODULE_1__["default"]));

/***/ }),

/***/ "./build/es/src/i13n.js":
/*!******************************!*\
  !*** ./build/es/src/i13n.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var organism_react_i13n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! organism-react-i13n */ "./node_modules/organism-react-i13n/build/es/src/index.js");


var actionHandler = function actionHandler(state, action) {
  console.log("action", action);
  return state;
};

var impressionHandler = function impressionHandler(state, action) {
  console.log("view", state.get("pvid"));
  return state;
};

var initHandler = function initHandler(state, action) {
  console.log("init", state);
  return state;
};

Object(organism_react_i13n__WEBPACK_IMPORTED_MODULE_0__["i13nDispatch"])("config/set", {
  initHandler: initHandler,
  actionHandler: actionHandler,
  impressionHandler: impressionHandler
});

/***/ }),

/***/ "./build/es/ui/molecules/BasePage.js":
/*!*******************************************!*\
  !*** ./build/es/ui/molecules/BasePage.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reshow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow */ "./node_modules/reshow/build/es/src/index.js");
/* harmony import */ var organism_react_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-navigation */ "./node_modules/organism-react-navigation/build/es/src/index.js");
/* harmony import */ var organism_react_ajax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! organism-react-ajax */ "./node_modules/organism-react-ajax/build/es/src/index.js");






var BasePage = /*#__PURE__*/function (_Component) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(BasePage, _Component);

  function BasePage() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = BasePage.prototype;

  _proto.componentDidMount = function componentDidMount() {
    var _this = this;

    setTimeout(function () {
      Object(organism_react_navigation__WEBPACK_IMPORTED_MODULE_3__["navigationDispatch"])({
        params: {
          activeMenu: _this.props.pageName
        }
      });

      if (_this.props.tplProps) {
        Object(reshow__WEBPACK_IMPORTED_MODULE_2__["dispatch"])({
          tplProps: _this.props.tplProps
        });
      }
    });
    Object(organism_react_ajax__WEBPACK_IMPORTED_MODULE_4__["ajaxDispatch"])('ajaxGet', {
      url: '/data/env',
      ini: true
    });
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    setTimeout(function () {
      Object(organism_react_navigation__WEBPACK_IMPORTED_MODULE_3__["navigationDispatch"])({
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/molecules/Menu.js":
/*!***************************************!*\
  !*** ./build/es/ui/molecules/Menu.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var pmvc_react_admin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! pmvc_react_admin */ "./node_modules/pmvc_react_admin/build/es/src/index.js");
/* harmony import */ var organism_react_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-navigation */ "./node_modules/organism-react-navigation/build/es/src/index.js");
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! get-object-value */ "./node_modules/get-object-value/build/es/src/index.js");
/* harmony import */ var reshow__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! reshow */ "./node_modules/reshow/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _VerticalMenu;







var keys = Object.keys;

var Menu = function Menu(props) {
  var thisMenus = {};
  var themes = reshow__WEBPACK_IMPORTED_MODULE_4__["pageStore"].getMap("themes");
  keys(themes).forEach(function (item) {
    thisMenus[item] = {
      text: item,
      href: "#/" + item
    };
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(organism_react_navigation__WEBPACK_IMPORTED_MODULE_2__["SideMenu"], {
    menus: thisMenus,
    linkComponent: reshow__WEBPACK_IMPORTED_MODULE_4__["ReLink"],
    component: _VerticalMenu || (_VerticalMenu = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(pmvc_react_admin__WEBPACK_IMPORTED_MODULE_1__["VerticalMenu"], {}))
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/AjaxDownload.example.js":
/*!*******************************************************!*\
  !*** ./build/es/ui/organisms/AjaxDownload.example.js ***!
  \*******************************************************/
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







var AjaxDownloadExample = function AjaxDownloadExample(props) {
  var url = "https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg";
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    onClick: function onClick() {
      Object(organism_react_ajax__WEBPACK_IMPORTED_MODULE_2__["ajaxDispatch"])("ajaxGet", {
        responseType: ["blob"],
        url: url,
        callback: function callback(json, text, o) {
          Object(ajax_save__WEBPACK_IMPORTED_MODULE_4__["download"])(o.body, url.split("/").splice(-1)[0]);
        }
      });
    },
    children: "Ajax Download"
  });
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/AlertsNotifier.example.js":
/*!*********************************************************!*\
  !*** ./build/es/ui/organisms/AlertsNotifier.example.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var organism_react_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-popup */ "./node_modules/organism-react-popup/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);


var _a;





var AlertsNotifierExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AlertsNotifierExample, _PureComponent);

  function AlertsNotifierExample() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = AlertsNotifierExample.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(organism_react_popup__WEBPACK_IMPORTED_MODULE_2__["PopupClick"], {
      style: Styles.click,
      popup: function popup() {
        return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(organism_react_popup__WEBPACK_IMPORTED_MODULE_2__["AlertsNotifier"], {
          position: "bottom",
          alerts: [{
            type: "info",
            message: "test"
          }]
        });
      },
      component: _a || (_a = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {})),
      children: "alert"
    });
  };

  return AlertsNotifierExample;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (AlertsNotifierExample);
var Styles = {
  click: {
    color: "blue",
    textDecoration: "underline"
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/Animation.example.js":
/*!****************************************************!*\
  !*** ./build/es/ui/organisms/Animation.example.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var organism_react_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-animate */ "./node_modules/organism-react-animate/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






var hello = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
  children: "Hello world!!"
});

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

    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(organism_react_animate__WEBPACK_IMPORTED_MODULE_2__["default"], {
        appear: "fadeInRight-3000",
        enter: "fadeInRight-3000",
        leave: "fadeOutRight-1000",
        children: this.state.dom
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
        href: "#",
        style: {
          marginLeft: "10px"
        },
        onClick: function (e) {
          e.preventDefault();

          _this2.setState({
            dom: null
          });
        }.bind(this),
        children: "leave"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
        href: "#",
        style: {
          marginLeft: "10px"
        },
        onClick: function (e) {
          e.preventDefault();

          _this2.setState({
            dom: hello
          });
        }.bind(this),
        children: "enter"
      })]
    });
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/AnimationDelay.example.js":
/*!*********************************************************!*\
  !*** ./build/es/ui/organisms/AnimationDelay.example.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var organism_react_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-animate */ "./node_modules/organism-react-animate/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






var foo = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
  children: "Hello"
});

var bar = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
  children: "world!!"
});

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

    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(organism_react_animate__WEBPACK_IMPORTED_MODULE_2__["default"], {
        appear: "fadeInRight-3000",
        enter: "fadeInRight-3000",
        leave: "fadeOutRight-1000",
        children: this.state.foo
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(organism_react_animate__WEBPACK_IMPORTED_MODULE_2__["default"], {
        appear: "fadeInRight-3000-500",
        enter: "fadeInRight-3000-500",
        leave: "fadeOutRight-1000-500",
        children: this.state.bar
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
        href: "#",
        style: {
          marginLeft: "10px"
        },
        onClick: function (e) {
          e.preventDefault();

          _this2.setState({
            foo: null,
            bar: null
          });
        }.bind(this),
        children: "leave"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("a", {
        href: "#",
        style: {
          marginLeft: "10px"
        },
        onClick: function (e) {
          e.preventDefault();

          _this2.setState({
            foo: foo,
            bar: bar
          });
        }.bind(this),
        children: "enter"
      })]
    });
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/AnimationReplace.example.js":
/*!***********************************************************!*\
  !*** ./build/es/ui/organisms/AnimationReplace.example.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var organism_react_animate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-animate */ "./node_modules/organism-react-animate/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);


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
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(organism_react_animate__WEBPACK_IMPORTED_MODULE_2__["Replace"], {
      enter: "fadeInRight-2000",
      leave: "fadeOutRight-1000",
      style: {
        minHeight: 30,
        overflow: "hidden"
      },
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
        style: {
          background: "#f4cc70"
        },
        children: "1"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
        style: {
          background: "#de7a22"
        },
        children: "2"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
        style: {
          background: "#20948b"
        },
        children: "3"
      })]
    });
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/AsciiDoc.example.js":
/*!***************************************************!*\
  !*** ./build/es/ui/organisms/AsciiDoc.example.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var organism_react_asciidoc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-asciidoc */ "./node_modules/organism-react-asciidoc/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




var adoc = "\n:toc:\n:toc-placement!:\ntoc::[]\n\n= h1 - test\ntest\n\n== h2 - test2\n* Hello *world*\n\n== h2 - test3\n- [ ] option1\n- [*] option1\n";

var AsciidocDemo = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AsciidocDemo, _PureComponent);

  function AsciidocDemo() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = AsciidocDemo.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(organism_react_asciidoc__WEBPACK_IMPORTED_MODULE_2__["default"], {
      options: {
        doctype: "book"
      },
      children: adoc
    });
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/CarouselAnimation.example.js":
/*!************************************************************!*\
  !*** ./build/es/ui/organisms/CarouselAnimation.example.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-carousel */ "./node_modules/organism-react-carousel/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _Carousel, _Carousel2, _Carousel3;







var CarouselAnimationExample = function CarouselAnimationExample(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__["CarouselAnimation"], {
    carouselAttr: {
      style: Styles.carousel
    },
    carouselListStyle: Styles.carouselList,
    style: Styles.container,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("img", {
        style: Styles.img,
        src: "https://c1.staticflickr.com/9/8567/16584613141_d984a3680a_b.jpg"
      })
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_1__["Image"], {
        style: Styles.img,
        src: "https://source.unsplash.com/random"
      })
    }), _Carousel || (_Carousel = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
      children: "3"
    })), _Carousel2 || (_Carousel2 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
      children: "4"
    })), _Carousel3 || (_Carousel3 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(organism_react_carousel__WEBPACK_IMPORTED_MODULE_2__["Carousel"], {
      children: "5"
    }))]
  });
};

_c = CarouselAnimationExample;
/* harmony default export */ __webpack_exports__["default"] = (CarouselAnimationExample);
var height = 300;
var Styles = {
  container: {
    margin: "0 10%"
  },
  carouselList: {
    minHeight: height + 5
  },
  carousel: {
    width: "100%",
    height: height,
    background: "#00558B"
  },
  img: {
    maxWidth: "100%",
    maxHeight: "100%",
    verticalAlign: "bottom"
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/CarouselAnimationHideThumb.example.js":
/*!*********************************************************************!*\
  !*** ./build/es/ui/organisms/CarouselAnimationHideThumb.example.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-carousel */ "./node_modules/organism-react-carousel/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _Carousel, _Carousel2, _Carousel3, _Carousel4;






var CarouselAnimationExample = function CarouselAnimationExample(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselAnimation"], {
    carouselAttr: {
      style: Styles.carousel
    },
    carouselListStyle: Styles.carouselList,
    style: Styles.container,
    hideThumb: true,
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("img", {
        style: Styles.img,
        src: "https://c1.staticflickr.com/9/8567/16584613141_d984a3680a_b.jpg"
      })
    }), _Carousel || (_Carousel = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
      children: "2"
    })), _Carousel2 || (_Carousel2 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
      children: "3"
    })), _Carousel3 || (_Carousel3 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
      children: "4"
    })), _Carousel4 || (_Carousel4 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
      children: "5"
    }))]
  });
};

_c = CarouselAnimationExample;
/* harmony default export */ __webpack_exports__["default"] = (CarouselAnimationExample);
var height = 300;
var Styles = {
  container: {
    margin: "0 10%"
  },
  carouselList: {
    minHeight: height + 5
  },
  carousel: {
    width: "100%",
    height: height,
    background: "#00558B"
  },
  img: {
    maxWidth: "100%",
    verticalAlign: "bottom"
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/CarouselSlide.example.js":
/*!********************************************************!*\
  !*** ./build/es/ui/organisms/CarouselSlide.example.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-carousel */ "./node_modules/organism-react-carousel/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _Carousel, _Carousel2, _Carousel3, _Carousel4;






var CarouselSlideExample = function CarouselSlideExample(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxs"])(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["CarouselSlide"], {
    carouselAttr: {
      style: Styles.carousel
    },
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("img", {
        style: Styles.img,
        src: "https://c1.staticflickr.com/9/8567/16584613141_d984a3680a_b.jpg"
      })
    }), _Carousel || (_Carousel = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
      children: "2"
    })), _Carousel2 || (_Carousel2 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
      children: "3"
    })), _Carousel3 || (_Carousel3 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
      children: "4"
    })), _Carousel4 || (_Carousel4 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(organism_react_carousel__WEBPACK_IMPORTED_MODULE_1__["Carousel"], {
      children: "5"
    }))]
  });
};

_c = CarouselSlideExample;
/* harmony default export */ __webpack_exports__["default"] = (CarouselSlideExample);
var Styles = {
  carousel: {
    width: 300,
    height: 300,
    background: "#00558B"
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/Checkbox.example.js":
/*!***************************************************!*\
  !*** ./build/es/ui/organisms/Checkbox.example.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var react_atomic_organism__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-atomic-organism */ "./node_modules/react-atomic-organism/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);


var _Form;







var CheckboxExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CheckboxExample, _PureComponent);

  function CheckboxExample() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = CheckboxExample.prototype;

  _proto.render = function render() {
    return _Form || (_Form = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_atomic_organism__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {}), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_atomic_organism__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
        type: "radio"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_atomic_organism__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
        toggle: true
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_atomic_organism__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
        slider: true
      })]
    }));
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/CodeEditor.example.js":
/*!*****************************************************!*\
  !*** ./build/es/ui/organisms/CodeEditor.example.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_codeeditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-codeeditor */ "./node_modules/organism-react-codeeditor/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




var CodeEditorExample = function CodeEditorExample(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])("button", {
    onClick: function onClick() {
      return Object(organism_react_codeeditor__WEBPACK_IMPORTED_MODULE_1__["openCodeEditor"])();
    },
    children: "open"
  });
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/CodeExample.example.js":
/*!******************************************************!*\
  !*** ./build/es/ui/organisms/CodeExample.example.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-code */ "../react-atomic-organism/packages/organism-react-code/build/es/src/index.js");
/* harmony import */ var _raw_loader_ui_organisms_CodeExample_example__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/CodeExample.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CodeExample.example.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _CodeExample;


/**
 * Production please use
 * import CodeExample from 'organism-react-code'
 */


/**
 * Your source code.
 * npm i raw-loader
 */




var CodeExampleExample = function CodeExampleExample(props) {
  return _CodeExample || (_CodeExample = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_1__["default"], {
    code: _raw_loader_ui_organisms_CodeExample_example__WEBPACK_IMPORTED_MODULE_2__["default"],
    header: "Test Header",
    git: "react-atomic/react-atomic-organism/tree/master/packages/organism-react-code/",
    npm: "organism-react-code",
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
      children: "Test Demo Area"
    })
  }));
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/D3AreaChart.example.js":
/*!******************************************************!*\
  !*** ./build/es/ui/organisms/D3AreaChart.example.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_d3_axis_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-d3-axis-chart */ "./node_modules/organism-react-d3-axis-chart/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



var data = [{
  values: [{
    x: "2019-01",
    y: 100
  }, {
    x: "2019-02",
    y: 450
  }, {
    x: "2019-03",
    y: 450
  }, {
    x: "2019-04",
    y: 0
  }, {
    x: "2019-05",
    y: 0
  }]
}];

var D3AreaChart = function D3AreaChart(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(organism_react_d3_axis_chart__WEBPACK_IMPORTED_MODULE_1__["AreaChart"], {
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/D3BarChart.example.js":
/*!*****************************************************!*\
  !*** ./build/es/ui/organisms/D3BarChart.example.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_d3_axis_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-d3-axis-chart */ "./node_modules/organism-react-d3-axis-chart/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




var D3BarChart = function D3BarChart(props) {
  var data = [{
    values: [{
      x: "2013-01",
      y: 53
    }, {
      x: "2013-02",
      y: 165
    }, {
      x: "2013-03",
      y: 269
    }]
  }];
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(organism_react_d3_axis_chart__WEBPACK_IMPORTED_MODULE_1__["BarChart"], {
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/D3LineChart.example.js":
/*!******************************************************!*\
  !*** ./build/es/ui/organisms/D3LineChart.example.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_d3_axis_chart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-d3-axis-chart */ "./node_modules/organism-react-d3-axis-chart/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




var D3LineChart = function D3LineChart(props) {
  var data = [{
    values: [{
      x: "2013-01",
      y: 100
    }, {
      x: "2013-02",
      y: 450
    }, {
      x: "2013-01",
      y: 450
    }]
  }];
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(organism_react_d3_axis_chart__WEBPACK_IMPORTED_MODULE_1__["LineChart"], {
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/D3PieChart.example.js":
/*!*****************************************************!*\
  !*** ./build/es/ui/organisms/D3PieChart.example.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_d3_piechart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-d3-piechart */ "./node_modules/organism-react-d3-piechart/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




var D3PieChartExample = function D3PieChartExample(props) {
  var data = [{
    value: 10,
    label: "xxx"
  }, {
    value: 30,
    label: "yyy"
  }];
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(organism_react_d3_piechart__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/D3Uml.example.js":
/*!************************************************!*\
  !*** ./build/es/ui/organisms/D3Uml.example.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_d3_uml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-d3-uml */ "./node_modules/organism-react-d3-uml/build/es/src/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var react_atomic_organism__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-atomic-organism */ "./node_modules/react-atomic-organism/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _s = $RefreshSig$();

var _Field;







var data = {
  tables: [{
    name: "table1",
    cols: ["t1-col1", "t1-col2"]
  }, {
    name: "table2",
    cols: ["t2-col1", "t2-col2"]
  }],
  conns: [{
    from: {
      table: "table1",
      col: "t1-col1"
    },
    to: {
      table: "table2",
      col: "t2-col2"
    }
  }]
};

var D3UmlExample = function D3UmlExample() {
  _s();

  var uml = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isDisableCurve = _useState[0],
      setIsDisableCurve = _useState[1];

  var handleUml = function handleUml(el) {
    return uml.current = el;
  };

  var handleUpdate = function handleUpdate(e) {
    var t = e.currentTarget || {};
    var fm = t.form;
    uml.current.zoom.setXYK({
      x: fm.x.value || null,
      y: fm.y.value || null,
      k: fm.k.value || null
    });
  };

  var handleZoom = function handleZoom(e) {//  console.log(e.zoom.getXYK());
  };

  var isDisableDel;
  var isDisableMove;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(organism_react_d3_uml__WEBPACK_IMPORTED_MODULE_1__["UMLGraph"], {
      onZoom: handleZoom,
      ref: handleUml,
      data: data,
      lineDefaultProps: {
        curve: !isDisableCurve
      },
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
      },
      onBoxWillDrag: function onBoxWillDrag(e) {
        return !isDisableMove.getChecked().input;
      },
      onLineDel: function onLineDel(e) {
        console.log({
          e: e
        });
        return !isDisableDel.getChecked().input;
      }
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      style: {
        boxSizing: "border-box"
      },
      className: "equal width",
      children: [_Field || (_Field = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Field"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Field"], {
          atom: "input",
          label: "x",
          name: "x"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Field"], {
          atom: "input",
          label: "y",
          name: "y"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Field"], {
          atom: "input",
          label: "k",
          name: "k"
        })]
      })), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Field"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_atomic_organism__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
          toggle: true,
          label: "disable curve",
          onChange: function onChange(_ref) {
            var checked = _ref.checked;
            setIsDisableCurve(checked);
          }
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_atomic_organism__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
          label: "disable line delete",
          ref: function ref(el) {
            return isDisableDel = el;
          }
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_atomic_organism__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
          label: "disable node move",
          ref: function ref(el) {
            return isDisableMove = el;
          }
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: handleUpdate,
        children: "update"
      })]
    })]
  });
};

_s(D3UmlExample, "tEAIIFOuhvUbGk2zBQLwllaeXvU=");

_c = D3UmlExample;
/* harmony default export */ __webpack_exports__["default"] = (D3UmlExample);

var _c;

$RefreshReg$(_c, "D3UmlExample");

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/D3UmlPerf.example.js":
/*!****************************************************!*\
  !*** ./build/es/ui/organisms/D3UmlPerf.example.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_d3_uml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-d3-uml */ "./node_modules/organism-react-d3-uml/build/es/src/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var react_atomic_organism__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-atomic-organism */ "./node_modules/react-atomic-organism/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _s = $RefreshSig$();

var _Field;







var data = {
  tables: [],
  conns: [{
    from: {
      table: "table1",
      col: "t1-col1"
    },
    to: {
      table: "table2",
      col: "t2-col2"
    }
  }]
};

for (var i = 1; i < 300; i++) {
  data.tables.push({
    name: "table" + i,
    cols: ["t" + i + "-col1", "t" + i + "-col2"]
  });
}

var D3UmlPerfExample = function D3UmlPerfExample() {
  _s();

  var uml = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isDisableCurve = _useState[0],
      setIsDisableCurve = _useState[1];

  var handleUml = function handleUml(el) {
    return uml.current = el;
  };

  var handleUpdate = function handleUpdate(e) {
    var t = e.currentTarget || {};
    var fm = t.form;
    uml.current.zoom.setXYK({
      x: fm.x.value || null,
      y: fm.y.value || null,
      k: fm.k.value || null
    });
  };

  var handleZoom = function handleZoom(e) {//  console.log(e.zoom.getXYK());
  };

  var isDisableDel;
  var isDisableMove;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(organism_react_d3_uml__WEBPACK_IMPORTED_MODULE_1__["UMLGraph"], {
      style: {
        height: "50vh"
      },
      onZoom: handleZoom,
      ref: handleUml,
      data: data,
      lineDefaultProps: {
        curve: !isDisableCurve
      },
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
      },
      onBoxWillDrag: function onBoxWillDrag(e) {
        return !isDisableMove.getChecked().input;
      },
      onLineDel: function onLineDel(e) {
        console.log({
          e: e
        });
        return !isDisableDel.getChecked().input;
      }
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      style: {
        boxSizing: "border-box"
      },
      className: "equal width",
      children: [_Field || (_Field = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Field"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Field"], {
          atom: "input",
          label: "x",
          name: "x"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Field"], {
          atom: "input",
          label: "y",
          name: "y"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Field"], {
          atom: "input",
          label: "k",
          name: "k"
        })]
      })), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Field"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_atomic_organism__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
          toggle: true,
          label: "disable curve",
          onChange: function onChange(_ref) {
            var checked = _ref.checked;
            setIsDisableCurve(checked);
          }
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_atomic_organism__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
          label: "disable line delete",
          ref: function ref(el) {
            return isDisableDel = el;
          }
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_atomic_organism__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
          label: "disable node move",
          ref: function ref(el) {
            return isDisableMove = el;
          }
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        onClick: handleUpdate,
        children: "update"
      })]
    })]
  });
};

_s(D3UmlPerfExample, "tEAIIFOuhvUbGk2zBQLwllaeXvU=");

_c = D3UmlPerfExample;
/* harmony default export */ __webpack_exports__["default"] = (D3UmlPerfExample);

var _c;

$RefreshReg$(_c, "D3UmlPerfExample");

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/Dropzone.example.js":
/*!***************************************************!*\
  !*** ./build/es/ui/organisms/Dropzone.example.js ***!
  \***************************************************/
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









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
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(organism_react_dropzone__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
              var req = Object(get_object_value__WEBPACK_IMPORTED_MODULE_5__["default"])(file, ["xhr", "response"]);

              if (req) {
                var json = JSON.parse(req);
                urls.push(json.link);
              }

              return urls;
            });
          }
        }
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("ul", {
        children: urls.map(function (url, key) {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("li", {
            children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("a", {
              href: url,
              target: "_blank",
              children: url
            })
          }, key);
        })
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("button", {
        onClick: this.handleClick,
        children: "open"
      })]
    });
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/ErrorForm.example.js":
/*!****************************************************!*\
  !*** ./build/es/ui/organisms/ErrorForm.example.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var organism_react_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-navigation */ "./node_modules/organism-react-navigation/build/es/src/index.js");
/* harmony import */ var react_atomic_organism__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-atomic-organism */ "./node_modules/react-atomic-organism/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _s = $RefreshSig$(),
    _s2 = $RefreshSig$();








var options = [{
  label: "Boy",
  value: "boy"
}, {
  label: "Girl",
  value: "girl"
}];

var DropdownExample = function DropdownExample(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      value = _useState[0],
      setValue = _useState[1];

  var MyList = function MyList(props) {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Menu"], Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props), {}, {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Item"], {
        onClick: function onClick() {
          return setValue("Boy");
        },
        children: "Boy"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Item"], {
        onClick: function onClick() {
          return setValue("Girl");
        },
        children: "Girl"
      })]
    }));
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Field"], Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props), {}, {
    inputComponent: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(organism_react_navigation__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], {
      style: Styles.dropdown,
      list: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(MyList, {}),
      children: ["You-select ", value]
    })
  }));
};

_s(DropdownExample, "CDdVB7UR1cv35CpWaINw2pfP1XI=");

_c = DropdownExample;

var ErrorFormExample = function ErrorFormExample() {
  _s2();

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isError = _useState2[0],
      setIsError = _useState2[1];

  var handleChange = function handleChange(e) {
    setIsError(e.checked ? true : false);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["SemanticUI"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Form"], {
      messageType: isError ? "error" : "",
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(DropdownExample, {
        messageType: isError ? "error" : "",
        label: "Dropdown: "
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(organism_react_navigation__WEBPACK_IMPORTED_MODULE_3__["SelectField"], {
        messageType: isError ? "error" : "",
        label: "Selection: ",
        options: options,
        placeholder: "not-select-yet"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Field"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_atomic_organism__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
          label: "Error Style",
          toggle: true,
          onChange: handleChange
        })
      })]
    })
  });
};

_s2(ErrorFormExample, "oo3zdhP1a5TpTZfOlouc4fJrVzQ=");

_c2 = ErrorFormExample;
/* harmony default export */ __webpack_exports__["default"] = (ErrorFormExample);
var Styles = {
  dropdown: {
    marginLeft: 10
  }
};

var _c, _c2;

$RefreshReg$(_c, "DropdownExample");
$RefreshReg$(_c2, "ErrorFormExample");

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/FBLike.example.js":
/*!*************************************************!*\
  !*** ./build/es/ui/organisms/FBLike.example.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_facebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-facebook */ "./node_modules/organism-react-facebook/build/src/index.js");
/* harmony import */ var organism_react_facebook__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(organism_react_facebook__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _FBLike;





var FBLikeExample = function FBLikeExample(props) {
  return _FBLike || (_FBLike = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(organism_react_facebook__WEBPACK_IMPORTED_MODULE_1__["FBLike"], {
    page: "https://www.facebook.com/react"
  }));
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/FBPage.example.js":
/*!*************************************************!*\
  !*** ./build/es/ui/organisms/FBPage.example.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_facebook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-facebook */ "./node_modules/organism-react-facebook/build/src/index.js");
/* harmony import */ var organism_react_facebook__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(organism_react_facebook__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _FBPage;





var FBPageExample = function FBPageExample(props) {
  return _FBPage || (_FBPage = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(organism_react_facebook__WEBPACK_IMPORTED_MODULE_1__["FBPage"], {
    page: "react"
  }));
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/FixedDataTableList.example.js":
/*!*************************************************************!*\
  !*** ./build/es/ui/organisms/FixedDataTableList.example.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pmvc_react_list */ "./node_modules/pmvc_react_list/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);


var _Cell, _Cell2, _Cell3;





var Table = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_1__["lazy"])(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.t.bind(null, /*! pmvc_react_list/fixedDataTable */ "./node_modules/pmvc_react_list/fixedDataTable.js", 7));
});
_c2 = Table;
var rows = [["a1", "b1", "c1"], ["a2", "b2", "c2"], ["a3", "b3", "c3"], ["a4", "b4", "c4"], ["a5", "b5", "c5"], ["a6", "b6", "c6"]];

var FixedDataTableListExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(FixedDataTableListExample, _PureComponent);

  function FixedDataTableListExample() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = FixedDataTableListExample.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
      style: {
        width: 350
      },
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(Table, {
        rows: rows,
        getColWidth: function getColWidth() {
          return 150;
        },
        height: 150,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Column"], {
          header: _Cell || (_Cell = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Cell"], {
            children: "h1"
          })),
          cell: function cell(_ref) {
            var rowIndex = _ref.rowIndex,
                columnIndex = _ref.columnKey;
            return rows[rowIndex][columnIndex];
          }
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Column"], {
          header: _Cell2 || (_Cell2 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Cell"], {
            children: "h2"
          })),
          cell: function cell(_ref2) {
            var rowIndex = _ref2.rowIndex,
                columnIndex = _ref2.columnKey;
            return rows[rowIndex][columnIndex];
          }
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Column"], {
          header: _Cell3 || (_Cell3 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Cell"], {
            children: "h3"
          })),
          cell: function cell(_ref3) {
            var rowIndex = _ref3.rowIndex,
                columnIndex = _ref3.columnKey;
            return rows[rowIndex][columnIndex];
          }
        })]
      })
    });
  };

  return FixedDataTableListExample;
}(react__WEBPACK_IMPORTED_MODULE_1__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (FixedDataTableListExample);

var _c, _c2;

$RefreshReg$(_c, "Table$lazy");
$RefreshReg$(_c2, "Table");

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/FullScreen.example.js":
/*!*****************************************************!*\
  !*** ./build/es/ui/organisms/FullScreen.example.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! get-object-value */ "./node_modules/get-object-value/build/es/src/index.js");
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-code */ "../react-atomic-organism/packages/organism-react-code/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);


var _FullScreen;






var FullScreenExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(FullScreenExample, _PureComponent);

  function FullScreenExample() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = FullScreenExample.prototype;

  _proto.render = function render() {
    return _FullScreen || (_FullScreen = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["FullScreenExample"], {
      id: "full-screen-example",
      button: "open full screen",
      children: "test"
    }));
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/GrapesJs.example.js":
/*!***************************************************!*\
  !*** ./build/es/ui/organisms/GrapesJs.example.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_grapesjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-grapesjs */ "./node_modules/organism-react-grapesjs/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




var GrapesJsExample = function GrapesJsExample() {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(organism_react_grapesjs__WEBPACK_IMPORTED_MODULE_1__["GrapesJsController"], {
    style: Styles.container,
    debug: true
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/GridList.example.js":
/*!***************************************************!*\
  !*** ./build/es/ui/organisms/GridList.example.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





var rows = [["a1", "b1", "c1"], ["a2", "b2", "c2"], ["a3", "b3", "c3"], ["a4", "b4", "c4"], ["a5", "b5", "c5"], ["a6", "b6", "c6"]];
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
      var className = "grid"; // hack for disable const element

      grid = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(RVGrid, {
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
    border: "1px solid #000"
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/HTMLToCanvans.example.js":
/*!********************************************************!*\
  !*** ./build/es/ui/organisms/HTMLToCanvans.example.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var organism_react_html2canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-html2canvas */ "./node_modules/organism-react-html2canvas/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _s = $RefreshSig$();







var HTMLToCanvansExample = function HTMLToCanvansExample(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      html = _useState[0],
      setHtml = _useState[1];

  var pdf = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var handleInput = function handleInput(e) {
    var v = e.currentTarget.value;
    setHtml(v);
  };

  var handleClick = function handleClick(e) {
    if (pdf && pdf.current) {
      pdf.current.download();
    }
  };

  var handlePdf = function handlePdf(el) {
    return pdf.current = el;
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      className: "equal width",
      style: {
        boxSizing: "border-box"
      },
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_1__["Field"], {
        atom: "textarea",
        onInput: handleInput
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        onClick: handleClick,
        children: "Download"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(organism_react_html2canvas__WEBPACK_IMPORTED_MODULE_2__["HTMLToPDF"], {
      preview: true,
      autoGenCanvas: true,
      ref: handlePdf,
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_1__["Unsafe"], {
        children: html
      })
    })]
  });
};

_s(HTMLToCanvansExample, "qwgI/FUJ7aSFRrX6MwErXUcFW9E=");

_c = HTMLToCanvansExample;
/* harmony default export */ __webpack_exports__["default"] = (HTMLToCanvansExample);

var _c;

$RefreshReg$(_c, "HTMLToCanvansExample");

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/HtmlTableList.example.js":
/*!********************************************************!*\
  !*** ./build/es/ui/organisms/HtmlTableList.example.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pmvc_react_list */ "./node_modules/pmvc_react_list/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);


var _Cell, _Cell2, _Cell3;





var rows = [["a1", "b1", "c1"], ["a2", "b2", "c2"], ["a3", "b3", "c3"], ["a1", "b1", "c1"], ["a2", "b2", "c2"], ["a3", "b3", "c3"]];

var HtmlTableListExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(HtmlTableListExample, _PureComponent);

  function HtmlTableListExample() {
    return _PureComponent.apply(this, arguments) || this;
  }

  var _proto = HtmlTableListExample.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Table"], {
      rows: rows,
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Column"], {
        header: _Cell || (_Cell = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Cell"], {
          children: "h1"
        })),
        cell: function cell(_ref) {
          var rowIndex = _ref.rowIndex,
              columnIndex = _ref.columnIndex;
          return rows[rowIndex][columnIndex];
        }
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Column"], {
        header: _Cell2 || (_Cell2 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Cell"], {
          children: "h2"
        })),
        cell: function cell(_ref2) {
          var rowIndex = _ref2.rowIndex,
              columnIndex = _ref2.columnIndex;
          return rows[rowIndex][columnIndex];
        }
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Column"], {
        header: _Cell3 || (_Cell3 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(pmvc_react_list__WEBPACK_IMPORTED_MODULE_2__["Cell"], {
          children: "h3"
        })),
        cell: function cell(_ref3) {
          var rowIndex = _ref3.rowIndex,
              columnIndex = _ref3.columnIndex;
          return rows[rowIndex][2];
        }
      })]
    });
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/PageLoadProgressHandler.example.js":
/*!******************************************************************!*\
  !*** ./build/es/ui/organisms/PageLoadProgressHandler.example.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-progress */ "./node_modules/organism-react-progress/build/es/src/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






var PageLoadProgressHandlerExample = function PageLoadProgressHandlerExample(props) {
  var oLoad;
  var dInput;
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(organism_react_progress__WEBPACK_IMPORTED_MODULE_1__["PageLoadProgressHandler"], {
      ref: function ref(o) {
        return oLoad = o;
      }
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxs"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        style: Styles.button,
        onClick: function onClick() {
          oLoad.start(100, 800);
        },
        children: "Start"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        style: Styles.button,
        onClick: function onClick() {
          oLoad.pause();
        },
        children: "Pause"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        style: Styles.button,
        onClick: function onClick() {
          oLoad.complete();
        },
        children: "Complete"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        style: Styles.button,
        onClick: function onClick() {
          oLoad.reset();
        },
        children: "Reset"
      })]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])("div", {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["InputBox"], {
        leftLabel: "Pause @",
        rightLabel: "%",
        refCb: function refCb(o) {
          return dInput = o;
        },
        button: "Go",
        actionProps: {
          onClick: function onClick() {
            oLoad.start(dInput.value);
          }
        },
        style: Styles.input
      })
    })]
  });
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/PageLoadProgressHandlerWithAjax.example.js":
/*!**************************************************************************!*\
  !*** ./build/es/ui/organisms/PageLoadProgressHandlerWithAjax.example.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_progress__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-progress */ "./node_modules/organism-react-progress/build/es/src/index.js");
/* harmony import */ var organism_react_ajax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-ajax */ "./node_modules/organism-react-ajax/build/es/src/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _PageLoadProgressHand;








var PageLoadProgressHandlerExample = function PageLoadProgressHandlerExample(props) {
  var url = "https://raw.githubusercontent.com/react-atomic/react-atomic-ui/master/README.md";
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])("div", {
    children: [_PageLoadProgressHand || (_PageLoadProgressHand = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(organism_react_progress__WEBPACK_IMPORTED_MODULE_1__["PageLoadProgressHandler"], {
      ajax: true
    })), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["Button"], {
      onClick: function onClick() {
        Object(organism_react_ajax__WEBPACK_IMPORTED_MODULE_2__["ajaxDispatch"])({
          type: "ajaxGet",
          params: {
            url: url,
            callback: function callback(json, text, o) {
              alert(text);
            }
          }
        });
      },
      children: "Call Ajax"
    })]
  });
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/Pagination.example.js":
/*!*****************************************************!*\
  !*** ./build/es/ui/organisms/Pagination.example.js ***!
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
/* harmony import */ var organism_react_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! organism-react-navigation */ "./node_modules/organism-react-navigation/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);







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

    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(organism_react_navigation__WEBPACK_IMPORTED_MODULE_4__["PaginationController"], {
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
    textAlign: "center"
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/ParallaxBackgroundImage.example.js":
/*!******************************************************************!*\
  !*** ./build/es/ui/organisms/ParallaxBackgroundImage.example.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_parallax__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-parallax */ "./node_modules/organism-react-parallax/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);




var ParallaxBackgroundImageExample = function ParallaxBackgroundImageExample() {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(organism_react_parallax__WEBPACK_IMPORTED_MODULE_1__["ParallaxBackgroundImage"], {
    style: Styles.container,
    backgroundImage: "https://c1.staticflickr.com/9/8621/16732897815_4705c08fe6_h.jpg",
    children: "test"
  });
};

_c = ParallaxBackgroundImageExample;
/* harmony default export */ __webpack_exports__["default"] = (ParallaxBackgroundImageExample);
var Styles = {
  container: {
    height: 600,
    color: "#fff",
    textAlign: "center",
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/Popup.example.js":
/*!************************************************!*\
  !*** ./build/es/ui/organisms/Popup.example.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_atomic_organism__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-atomic-organism */ "./node_modules/react-atomic-organism/build/es/src/index.js");
/* harmony import */ var organism_react_popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-popup */ "./node_modules/organism-react-popup/build/es/src/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _s = $RefreshSig$();

var _a, _Button;



/**
 * Production please use
 * import {...xxx} from "organism-react-popup"
 */






var PopupExample = function PopupExample() {
  _s();

  var _PopupModal;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      backgroundScrollAble = _useState[0],
      setBackgroundScrollAble = _useState[1];

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(organism_react_popup__WEBPACK_IMPORTED_MODULE_2__["PopupClick"], {
      style: Styles.click,
      popup: function popup() {
        return _PopupModal || (_PopupModal = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(organism_react_popup__WEBPACK_IMPORTED_MODULE_2__["PopupModal"], {
          backgroundScroll: backgroundScrollAble,
          children: "xxx"
        }));
      },
      component: _a || (_a = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("a", {})),
      children: "show modal"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(organism_react_popup__WEBPACK_IMPORTED_MODULE_2__["PopupClick"], {
      style: {
        marginLeft: 5
      },
      popup: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(organism_react_popup__WEBPACK_IMPORTED_MODULE_2__["Dialog"], {
        backgroundScroll: backgroundScrollAble,
        header: "Test Header",
        children: "Test Dialog"
      }),
      component: _Button || (_Button = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["Button"], {})),
      children: "show dialog"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_atomic_organism__WEBPACK_IMPORTED_MODULE_1__["Checkbox"], {
      toggle: true,
      label: "Background scrollable",
      onChange: function onChange(_ref) {
        var checked = _ref.checked;
        setBackgroundScrollAble(checked);
      }
    })]
  });
};

_s(PopupExample, "GH2udnDFCwOymihpi1Aydex4hN0=");

_c = PopupExample;
/* harmony default export */ __webpack_exports__["default"] = (PopupExample);
var Styles = {
  click: {
    color: "blue",
    textDecoration: "underline"
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/QQVideo.example.js":
/*!**************************************************!*\
  !*** ./build/es/ui/organisms/QQVideo.example.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_qq_video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-qq-video */ "./node_modules/organism-react-qq-video/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _QQVideo;





var QQVideoExample = function QQVideoExample() {
  return _QQVideo || (_QQVideo = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(organism_react_qq_video__WEBPACK_IMPORTED_MODULE_1__["default"], {
    videoId: "j0792wzb6v8"
  }));
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/QueryToJSON.js":
/*!**********************************************!*\
  !*** ./build/es/ui/organisms/QueryToJSON.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/toConsumableArray */ "./node_modules/reshow-runtime/es/helpers/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prettyjson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prettyjson */ "./node_modules/prettyjson/lib/prettyjson.js");
/* harmony import */ var prettyjson__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prettyjson__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var react_atomic_organism__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-atomic-organism */ "./node_modules/react-atomic-organism/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _s = $RefreshSig$();









var QueryToJSON = function QueryToJSON(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      json = _useState[0],
      setJson = _useState[1];

  var handleInput = function handleInput(e) {
    var v = e.currentTarget.value;

    var vArr = Object(reshow_runtime_es_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(new URLSearchParams(v));

    var nextArr = [];
    vArr.forEach(function (item) {
      var _nextArr$push;

      nextArr.push((_nextArr$push = {}, _nextArr$push[item[0]] = item[1], _nextArr$push));
    });
    setJson(nextArr);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["Form"], {
      className: "equal width",
      style: {
        boxSizing: "border-box"
      },
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["Field"], {
        ui: true,
        atom: "textarea",
        onInput: handleInput
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_atomic_organism__WEBPACK_IMPORTED_MODULE_4__["FormattedJSON"], {
        atom: "div",
        children: prettyjson__WEBPACK_IMPORTED_MODULE_2___default.a.render(json)
      })]
    })
  });
};

_s(QueryToJSON, "vhtv/Z44cg7dIRWt725S7ogBJg8=");

_c = QueryToJSON;
/* harmony default export */ __webpack_exports__["default"] = (QueryToJSON);

var _c;

$RefreshReg$(_c, "QueryToJSON");

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/RTE.example.js":
/*!**********************************************!*\
  !*** ./build/es/ui/organisms/RTE.example.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _div, _Editor;

 // import { Editor } from "organism-react-rte-writer";



var Editor = function Editor() {
  return _div || (_div = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {}));
};

_c = Editor;

var RTEExample = function RTEExample() {
  return _Editor || (_Editor = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Editor, {}));
};

_c2 = RTEExample;
/* harmony default export */ __webpack_exports__["default"] = (RTEExample);
var Styles = {};

var _c, _c2;

$RefreshReg$(_c, "Editor");
$RefreshReg$(_c2, "RTEExample");

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/RadioGroup.example.js":
/*!*****************************************************!*\
  !*** ./build/es/ui/organisms/RadioGroup.example.js ***!
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
/* harmony import */ var react_atomic_organism__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-atomic-organism */ "./node_modules/react-atomic-organism/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);








var options = [{
  label: "Boy",
  value: "boy"
}, {
  label: "Girl",
  value: "girl"
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
      value: ""
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
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["Form"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_atomic_organism__WEBPACK_IMPORTED_MODULE_5__["RadioGroup"], {
        ref: function ref(el) {
          return _this2.radio = el;
        },
        inline: false,
        label: "Sex: ",
        name: "sex",
        value: value,
        options: options,
        onChange: this.handleChange
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])("div", {
        children: ["Current: ", value]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        onClick: function onClick() {
          return _this2.setState({
            value: "boy"
          });
        },
        children: "Set to Boy"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        onClick: function onClick() {
          return _this2.setState({
            value: "girl"
          });
        },
        children: "Set to Girl"
      })]
    });
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/ReactVirtualizedTableList.example.js":
/*!********************************************************************!*\
  !*** ./build/es/ui/organisms/ReactVirtualizedTableList.example.js ***!
  \********************************************************************/
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);




var _Cell, _Cell2, _Cell3;






var rows = [["a1", "b1", "c1"], ["a2", "b2", "c2"], ["a3", "b3", "c3"], ["a1", "b1", "c1"], ["a2", "b2", "c2"], ["a3", "b3", "c3"]];

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

    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
      style: {
        width: "40%",
        height: 150
      },
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(pmvc_react_list_rv__WEBPACK_IMPORTED_MODULE_5___default.a, {
        rows: rows,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(pmvc_react_list__WEBPACK_IMPORTED_MODULE_4__["Column"], {
          header: _Cell || (_Cell = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(pmvc_react_list__WEBPACK_IMPORTED_MODULE_4__["Cell"], {
            children: "h1"
          })),
          cell: function cell(_ref) {
            var rowIndex = _ref.rowIndex,
                columnIndex = _ref.columnIndex,
                style = _ref.style;
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
              style: style,
              onClick: _this2.handleClick(rowIndex),
              children: rows[rowIndex][columnIndex]
            });
          }
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(pmvc_react_list__WEBPACK_IMPORTED_MODULE_4__["Column"], {
          header: _Cell2 || (_Cell2 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(pmvc_react_list__WEBPACK_IMPORTED_MODULE_4__["Cell"], {
            children: "h2"
          })),
          cell: function cell(_ref2) {
            var rowIndex = _ref2.rowIndex,
                columnIndex = _ref2.columnIndex,
                style = _ref2.style;
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
              style: style,
              onClick: _this2.handleClick(rowIndex),
              children: rows[rowIndex][columnIndex]
            });
          }
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(pmvc_react_list__WEBPACK_IMPORTED_MODULE_4__["Column"], {
          header: _Cell3 || (_Cell3 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(pmvc_react_list__WEBPACK_IMPORTED_MODULE_4__["Cell"], {
            children: "h3"
          })),
          cell: function cell(_ref3) {
            var rowIndex = _ref3.rowIndex,
                columnIndex = _ref3.columnIndex,
                style = _ref3.style;
            return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
              style: style,
              onClick: _this2.handleClick(rowIndex),
              children: rows[rowIndex][columnIndex]
            });
          }
        })]
      })
    });
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/ReshowMessage.example.js":
/*!********************************************************!*\
  !*** ./build/es/ui/organisms/ReshowMessage.example.js ***!
  \********************************************************/
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);




var _DialogResult;







var DialogResult = function DialogResult(_ref) {
  var dialogReturn = _ref.dialogReturn;
  return "undefined" !== typeof dialogReturn ? "Dialog: " + dialogReturn : null;
};

_c = DialogResult;

var ReshowMessageExample = /*#__PURE__*/function (_PureComponent) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(ReshowMessageExample, _PureComponent);

  function ReshowMessageExample() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _PureComponent.call.apply(_PureComponent, [this].concat(args)) || this;

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "handleAddAlert", function (e) {
      Object(reshow__WEBPACK_IMPORTED_MODULE_5__["dispatch"])("alert/add", {
        message: "test"
      });
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "handleResetAlert", function (e) {
      Object(reshow__WEBPACK_IMPORTED_MODULE_5__["dispatch"])("alert/reset", {
        alerts: [1, 2, 3]
      });
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "handleCleanAlert", function (e) {
      Object(reshow__WEBPACK_IMPORTED_MODULE_5__["dispatch"])("alert/reset", {
        alerts: null
      });
    });

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__["default"])(_this), "handleOpenDialog", function (e) {
      Object(reshow__WEBPACK_IMPORTED_MODULE_5__["dispatch"])("dialog/start", {
        dialog: "how are u"
      });
    });

    return _this;
  }

  var _proto = ReshowMessageExample.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          onClick: this.handleAddAlert,
          children: "Add alert"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          onClick: this.handleResetAlert,
          children: "Reset alert"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          onClick: this.handleCleanAlert,
          children: "Clean all alerts"
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])("p", {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          onClick: this.handleOpenDialog,
          children: "Open Dialog"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(reshow__WEBPACK_IMPORTED_MODULE_5__["Return"], {
          initStates: ["dialogReturn"],
          children: _DialogResult || (_DialogResult = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(DialogResult, {}))
        })]
      })]
    });
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/Sortable.js":
/*!*******************************************!*\
  !*** ./build/es/ui/organisms/Sortable.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutPropertiesLoose */ "./node_modules/reshow-runtime/es/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var organism_react_graph__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-graph */ "./node_modules/organism-react-graph/build/es/src/index.js");
/* harmony import */ var css_query_selector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! css-query-selector */ "./node_modules/css-query-selector/build/es/src/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var call_func__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! call-func */ "./node_modules/call-func/build/es/src/index.js");
/* harmony import */ var get_window_offset__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! get-window-offset */ "./node_modules/get-window-offset/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$(),
    _s4 = $RefreshSig$();



var _excluded = ["children", "setSortElement", "style"];









var keys = Object.keys;

var useSortable = function useSortable(props) {
  _s();

  var setSortElement = props.setSortElement;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      isDraging = _useState[0],
      setIsDraging = _useState[1];

  var comp = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();

  var handleTarget = function handleTarget(targetEl, floatXY) {
    var _targetEl$nextSibling, _targetEl$previousSib;

    var near = Object(get_window_offset__WEBPACK_IMPORTED_MODULE_7__["nearWhere"])(targetEl, floatXY);
    var sortEl = comp.current;
    var nextId = (_targetEl$nextSibling = targetEl.nextSibling) === null || _targetEl$nextSibling === void 0 ? void 0 : _targetEl$nextSibling.getAttribute("name");
    var prevId = (_targetEl$previousSib = targetEl.previousSibling) === null || _targetEl$previousSib === void 0 ? void 0 : _targetEl$previousSib.getAttribute("name");
    var sortId = sortEl === null || sortEl === void 0 ? void 0 : sortEl.getAttribute("name");
    var reverse = (nextId === sortId || prevId === sortId) && near.top;

    if (targetEl.getAttribute("data-first")) {
      reverse = false;
    } else if (targetEl.getAttribute("data-last")) {
      reverse = near.top ? false : true;
    }

    setSortElement({
      targetEl: targetEl,
      targetId: targetEl.getAttribute("name"),
      sortEl: sortEl,
      sortId: sortId,
      reverse: reverse
    });
  };

  var handler = {
    drag: function drag(e) {
      if (!comp.current) {
        return;
      }

      setIsDraging(true);
      var destTarget = e.destTarget,
          clientX = e.clientX,
          clientY = e.clientY;
      var sortTarget;
      var floatXY = {
        x: clientX,
        y: clientY
      };
      var type = destTarget === null || destTarget === void 0 ? void 0 : destTarget.getAttribute("data-type");

      if (!type) {
        sortTarget = css_query_selector__WEBPACK_IMPORTED_MODULE_4__["default"].ancestor(destTarget, '[data-type="sortable"]');

        if (sortTarget) {
          handleTarget(sortTarget, floatXY);
        }
      } else {
        if ("sortable" === type) {
          handleTarget(destTarget, floatXY);
        }
      }
    },
    dragEnd: function dragEnd(e) {
      setIsDraging(false);
    }
  };
  return {
    isDraging: isDraging,
    handler: handler,
    comp: comp
  };
};

_s(useSortable, "yItlYn3mYZhUy6hE1h/p8+a/948=");

var Sort = /*#__PURE__*/_s2(Object(react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"])(_c = _s2(function (props, ref) {
  _s2();

  var _useSortable = useSortable(props),
      handler = _useSortable.handler,
      isDraging = _useSortable.isDraging,
      comp = _useSortable.comp;

  var children = props.children,
      setSortElement = props.setSortElement,
      propsStyle = props.style,
      otherProps = Object(reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(props, _excluded);

  var mergeStyle = function mergeStyle(style) {
    var _children$props;

    return Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, propsStyle), (_children$props = children.props) === null || _children$props === void 0 ? void 0 : _children$props.style), style);
  };

  var item = Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_5__["build"])(Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_5__["build"])(children)(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, otherProps), {}, {
    "data-type": "sortable"
  })));
  var activeStyle = isDraging ? Styles.active : null;
  var shadowEl = isDraging ? item({
    style: mergeStyle(activeStyle)
  }) : null;
  var dragEl = item({
    style: mergeStyle(),
    refCb: function refCb(el) {
      return comp.current = el;
    }
  });
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(organism_react_graph__WEBPACK_IMPORTED_MODULE_3__["DDWrapper"], {
      onDrag: handler.drag,
      onDragEnd: handler.dragEnd,
      children: dragEl
    }), shadowEl]
  });
}, "KHRdNr+Z10voaUu26KoeJhFV+9s=", false, function () {
  return [useSortable];
})), "KHRdNr+Z10voaUu26KoeJhFV+9s=", false, function () {
  return [useSortable];
});

_c2 = Sort;

var useSortList = function useSortList(_ref) {
  _s3();

  var children = _ref.children;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(),
      sortElement = _useState2[0],
      setSortElement = _useState2[1];

  var childList = Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_5__["getChildMapping"])(children, function (child, key) {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(Sort, {
      name: key,
      setSortElement: setSortElement,
      children: child
    }, key);
  });

  var _ref2 = sortElement || {},
      sortId = _ref2.sortId,
      targetId = _ref2.targetId,
      reverse = _ref2.reverse;

  var lastSortOrder = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(function () {
    return keys(childList).map(function (key) {
      return childList[key];
    });
  }());
  var sortOrder = [];
  var bFirst;
  var bLast;

  var arrPush = function arrPush(item) {
    if (!bFirst) {
      bFirst = true;
      sortOrder.push(Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_5__["build"])(item)({
        "data-first": true
      }));
    } else {
      sortOrder.push(item);
    }
  };

  lastSortOrder.current.forEach(function (item) {
    var key = item.props.name;

    if (sortId === key) {
      if (sortId === targetId) {
        sortOrder.push(childList[key]);
      }
    } else if (targetId === key) {
      if (reverse) {
        arrPush(childList[key]);
        arrPush(childList[sortId]);
      } else {
        arrPush(childList[sortId]);
        arrPush(childList[key]);
      }
    } else {
      arrPush(childList[key]);
    }
  });
  var lastIndex = sortOrder.length - 1;
  sortOrder[lastIndex] = Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_5__["build"])(sortOrder[lastIndex])({
    "data-last": true
  });
  lastSortOrder.current = sortOrder;
  return {
    sortOrder: sortOrder,
    setSortElement: setSortElement
  };
};

_s3(useSortList, "0dMg3dIDmKeS0QkogTQKUes4orQ=");

var SortList = function SortList(props) {
  _s4();

  var _useSortList = useSortList(props),
      sortOrder = _useSortList.sortOrder;

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_5__["SemanticUI"], {
    style: Styles.itemList,
    children: sortOrder
  });
};

_s4(SortList, "3dcFBAqwxSVODtVptveia+cpGYc=", false, function () {
  return [useSortList];
});

_c3 = SortList;

var Sortable = function Sortable(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(SortList, {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_5__["Item"], {
      style: Styles.item,
      children: "list 1"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_5__["Item"], {
      style: Styles.item,
      children: "list 2"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_5__["Item"], {
      style: Styles.item,
      children: "list 3"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_5__["Item"], {
      style: Styles.item,
      children: "list 4"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_5__["Item"], {
      style: Styles.item,
      children: "list 5"
    })]
  });
};

_c4 = Sortable;
/* harmony default export */ __webpack_exports__["default"] = (Sortable);
var Styles = {
  move: {
    position: "absolute",
    pointerEvents: "none"
  },
  active: {
    border: "2px dashed rgba(0, 0, 0, 0.2)"
  },
  itemList: {
    margin: "0 auto",
    width: 100
  },
  item: {
    width: 100,
    height: 50,
    border: "1px solid rgba(0, 0, 0, 0.5)"
  }
};

var _c, _c2, _c3, _c4;

$RefreshReg$(_c, "Sort$forwardRef");
$RefreshReg$(_c2, "Sort");
$RefreshReg$(_c3, "SortList");
$RefreshReg$(_c4, "Sortable");

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/Spotlight.example.js":
/*!****************************************************!*\
  !*** ./build/es/ui/organisms/Spotlight.example.js ***!
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
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var organism_react_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! organism-react-popup */ "./node_modules/organism-react-popup/build/es/src/index.js");
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! organism-react-code */ "../react-atomic-organism/packages/organism-react-code/build/es/src/index.js");
/* harmony import */ var organism_react_spotlight__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! organism-react-spotlight */ "./node_modules/organism-react-spotlight/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);




var _PopupPool;









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
      thisSpotlight = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(organism_react_spotlight__WEBPACK_IMPORTED_MODULE_7__["default"], {
        toPool: "spotlight-pool",
        targetEl: this.spot,
        onClose: function onClose() {
          _this2.setState({
            spotlight: null
          });
        }
      });
    }

    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(organism_react_code__WEBPACK_IMPORTED_MODULE_6__["FullScreenExample"], {
      button: "open full screen",
      onClose: function onClose() {
        return _this2.setState({
          spotlight: null
        });
      },
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
        ref: function ref(el) {
          return _this2.spot = el;
        },
        style: Styles.el,
        children: "Spotlight"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])("div", {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["Button"], {
          onClick: function onClick() {
            _this2.setState({
              spotlight: true
            });
          },
          children: "Try it."
        })
      }), thisSpotlight, _PopupPool || (_PopupPool = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(organism_react_popup__WEBPACK_IMPORTED_MODULE_5__["PopupPool"], {
        name: "spotlight-pool"
      }))]
    });
  };

  return SpotlightExample;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (SpotlightExample);
var Styles = {
  el: {
    display: "inline-block",
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/StockChart.example.js":
/*!*****************************************************!*\
  !*** ./build/es/ui/organisms/StockChart.example.js ***!
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
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! organism-react-code */ "../react-atomic-organism/packages/organism-react-code/build/es/src/index.js");
/* harmony import */ var organism_react_stockcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! organism-react-stockcharts */ "./node_modules/organism-react-stockcharts/build/es/src/index.js");
/* harmony import */ var organism_react_ajax__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! organism-react-ajax */ "./node_modules/organism-react-ajax/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);









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
      type: "ajaxGet",
      params: {
        url: "//raw.githubusercontent.com/react-atomic/react-atomic-ui/master/data/stock.json",
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

    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_4__["FullScreenExample"], {
      id: "full-page-stock-chart",
      button: "open full screen",
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(organism_react_stockcharts__WEBPACK_IMPORTED_MODULE_5__["StockChartCompute"], {
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
      })
    });
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/Suggestion.example.js":
/*!*****************************************************!*\
  !*** ./build/es/ui/organisms/Suggestion.example.js ***!
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
/* harmony import */ var react_atomic_organism__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-atomic-organism */ "./node_modules/react-atomic-organism/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);




var _SemanticUI;






var data = ["abc", "abb", "acc"];

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
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["SemanticUI"], {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_atomic_organism__WEBPACK_IMPORTED_MODULE_5__["Suggestion"], {
        ref: function ref(el) {
          return _this2.suggestion = el;
        },
        onChange: this.handleChange,
        results: results,
        onItemClick: this.handleItemClick,
        value: myValue
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        onClick: function onClick() {
          return _this2.setState({
            myValue: myValue ? myValue + 1 : 123
          });
        },
        children: "set"
      })]
    });
  };

  return SuggestionExample1;
}(react__WEBPACK_IMPORTED_MODULE_3__["PureComponent"]);

var SuggestionExample = function SuggestionExample() {
  return _SemanticUI || (_SemanticUI = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_4__["SemanticUI"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(SuggestionExample1, {}), "couldCreate: false", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_atomic_organism__WEBPACK_IMPORTED_MODULE_5__["Suggestion"], {
      results: data,
      couldCreate: false,
      filter: true,
      preview: true
    })]
  }));
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/TabView.example.js":
/*!**************************************************!*\
  !*** ./build/es/ui/organisms/TabView.example.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var ricon_Search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ricon/Search */ "./node_modules/ricon/Search.js");
/* harmony import */ var ricon_Search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ricon_Search__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var organism_react_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-navigation */ "./node_modules/organism-react-navigation/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _s = $RefreshSig$();

var _InputBox, _RightMenu, _Tab, _Tab2;








var RightMenu = function RightMenu() {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    className: "right",
    ui: false,
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_1__["Item"], {
      style: {
        boxSizing: "border-box"
      },
      children: _InputBox || (_InputBox = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_1__["InputBox"], {
        icon: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(ricon_Search__WEBPACK_IMPORTED_MODULE_2___default.a, {}),
        transparent: true,
        placeholder: "Search..."
      }))
    })
  });
};

_c = RightMenu;

var TabViewExample = function TabViewExample(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      selected = _useState[0],
      setSelected = _useState[1];

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_1__["SemanticUI"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(organism_react_navigation__WEBPACK_IMPORTED_MODULE_3__["TabView"], {
      selected: selected,
      rightMenu: _RightMenu || (_RightMenu = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(RightMenu, {})),
      children: [_Tab || (_Tab = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(organism_react_navigation__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
          children: "content1"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
          children: "menu1"
        })]
      })), _Tab2 || (_Tab2 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(organism_react_navigation__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
          children: "content2"
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])("div", {
          children: "menu2"
        })]
      }))]
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: function onClick() {
        return setSelected(0);
      },
      children: "to tab1"
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      onClick: function onClick() {
        return setSelected(1);
      },
      children: "to tab2"
    })]
  });
};

_s(TabViewExample, "CDdVB7UR1cv35CpWaINw2pfP1XI=");

_c2 = TabViewExample;
/* harmony default export */ __webpack_exports__["default"] = (TabViewExample);

var _c, _c2;

$RefreshReg$(_c, "RightMenu");
$RefreshReg$(_c2, "TabViewExample");

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/TagInput.example.js":
/*!***************************************************!*\
  !*** ./build/es/ui/organisms/TagInput.example.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_tag_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-tag-input */ "./node_modules/organism-react-tag-input/build/es/src/index.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var react_atomic_organism__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-atomic-organism */ "./node_modules/react-atomic-organism/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _s = $RefreshSig$();








var TagInputExample = function TagInputExample(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      isDisable = _useState[0],
      setIsDisable = _useState[1];

  var handleDisable = function handleDisable(e) {
    setIsDisable(e.checked ? true : false);
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsxs"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Form"], {
    children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(organism_react_tag_input__WEBPACK_IMPORTED_MODULE_1__["TagsField"], {
      disabled: isDisable
    }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["Field"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__["jsx"])(react_atomic_organism__WEBPACK_IMPORTED_MODULE_3__["Checkbox"], {
        label: "Disable",
        toggle: true,
        onChange: handleDisable
      })
    })]
  });
};

_s(TagInputExample, "GH2udnDFCwOymihpi1Aydex4hN0=");

_c = TagInputExample;
/* harmony default export */ __webpack_exports__["default"] = (TagInputExample);

var _c;

$RefreshReg$(_c, "TagInputExample");

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/TomatoApp.js":
/*!********************************************!*\
  !*** ./build/es/ui/organisms/TomatoApp.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutPropertiesLoose */ "./node_modules/reshow-runtime/es/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var organism_react_progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! organism-react-progress */ "./node_modules/organism-react-progress/build/es/src/index.js");
/* harmony import */ var to_percent_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! to-percent-js */ "./node_modules/to-percent-js/build/es/src/index.js");
/* harmony import */ var reshow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! reshow */ "./node_modules/reshow/build/es/src/index.js");
/* harmony import */ var organism_react_popup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! organism-react-popup */ "./node_modules/organism-react-popup/build/es/src/index.js");
/* harmony import */ var get_random_id__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! get-random-id */ "./node_modules/get-random-id/build/es/src/index.js");
/* harmony import */ var get_object_value__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! get-object-value */ "./node_modules/get-object-value/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);
var _s = $RefreshSig$(),
    _s2 = $RefreshSig$();




var _Tip;

var _excluded = ["col1", "col2"],
    _excluded2 = ["sec"];










var POMODORO = "POMODORO";
var SHORT_BREAK = "SHORT_BREAK";
var LONG_BREAK = "LONG_BREAK";
var keys = Object.keys;

var secToMin = function secToMin(sec) {
  var min = Math.floor(sec / 60);
  var remainSec = sec % 60;
  return min + ":" + (10 > remainSec ? "0" + remainSec : remainSec);
};

var Tip = function Tip() {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(reshow__WEBPACK_IMPORTED_MODULE_6__["Return"], {
    initStates: ["pomodoro"],
    children: function children(_ref) {
      var pomodoro = _ref.pomodoro;

      if (!pomodoro) {
        return null;
      }

      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["List"], {
        atom: "ol",
        children: pomodoro.tip.map(function (item, key) {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["Item"], {
            children: item
          }, key);
        })
      });
    }
  });
};

_c = Tip;

var ActionSegment = function ActionSegment(_ref2) {
  var col1 = _ref2.col1,
      col2 = _ref2.col2,
      props = Object(reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref2, _excluded);

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
    children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["Row"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["Column"], {
        className: "pure-u-md-1-2",
        children: col1
      })
    })
  });
};

_c2 = ActionSegment;

var useTomato = function useTomato(countdown) {
  _s();

  var TotalMin = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(25);
  var TotalSec = TotalMin.current * 60;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    activeType: POMODORO,
    sec: TotalSec
  }),
      state = _useState[0],
      setState = _useState[1];

  var sec = state.sec,
      preview = state.preview,
      active = state.active,
      activeType = state.activeType;
  var timer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var modal = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var resetInput = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var lastActive = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var resetState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    return function () {
      handler.stop();
    };
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var now = Object(get_random_id__WEBPACK_IMPORTED_MODULE_8__["getTimestamp"])();
    lastActive.current = {
      active: active,
      activeType: activeType,
      now: now,
      sec: sec
    };
  }, [active, activeType, sec]);

  var updateClock = function updateClock(setToMinute, totalSec, more) {
    if (setToMinute) {
      var _totalSec;

      totalSec = (_totalSec = totalSec) != null ? _totalSec : setToMinute * 60;
      setState(function (prev) {
        return Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prev), more), {}, {
          sec: totalSec
        });
      });
      TotalMin.current = setToMinute;
    }
  };

  var updateAndRestore = function updateAndRestore(countdownKey, nextMinute, more) {
    var _resetState$current;

    var activeType = (_resetState$current = resetState.current) === null || _resetState$current === void 0 ? void 0 : _resetState$current.activeType;

    if (countdownKey && activeType === countdownKey) {
      if (resetState.current.sec) {
        updateClock(nextMinute, resetState.current.sec, more);
      } else {
        updateClock(nextMinute, null, more);
      }
    } else {
      updateClock(nextMinute, null, more);
    }
  };

  var handler = {
    btnMouseIn: function btnMouseIn(e) {
      var _lastActive$current, _e$currentTarget, _countdown$id;

      if ((_lastActive$current = lastActive.current) !== null && _lastActive$current !== void 0 && _lastActive$current.active) {
        return;
      }

      if (!resetState.current) {
        resetState.current = Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, lastActive.current);
      }

      var id = e === null || e === void 0 ? void 0 : (_e$currentTarget = e.currentTarget) === null || _e$currentTarget === void 0 ? void 0 : _e$currentTarget.id;
      var setToMinute = (_countdown$id = countdown[id]) === null || _countdown$id === void 0 ? void 0 : _countdown$id.minute;
      updateAndRestore(id, setToMinute, {
        activeType: id,
        preview: true
      });
    },
    btnMouseOut: function btnMouseOut(e) {
      var _lastActive$current2, _e$currentTarget2;

      if ((_lastActive$current2 = lastActive.current) !== null && _lastActive$current2 !== void 0 && _lastActive$current2.active) {
        return;
      }

      var target = e.currentTarget;
      var id = e === null || e === void 0 ? void 0 : (_e$currentTarget2 = e.currentTarget) === null || _e$currentTarget2 === void 0 ? void 0 : _e$currentTarget2.id;
      var origActiveType = resetState.current.activeType;

      if (origActiveType) {
        updateAndRestore(origActiveType, countdown[origActiveType].minute, {
          activeType: origActiveType,
          preview: false
        });
      } else {
        setState(function (prev) {
          return Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prev), {}, {
            activeType: origActiveType,
            preview: false
          });
        });
      }
    },
    clickProgress: function clickProgress() {
      if (lastActive.current) {
        if (lastActive.current.active) {
          handler.stop();
        } else {
          var countdownKey = lastActive.current.activeType;

          if (countdownKey) {
            handler.start({
              countdownKey: countdownKey
            })();
          }
        }
      }
    },
    start: function start(_temp) {
      var _ref3 = _temp === void 0 ? {} : _temp,
          countdownKey = _ref3.countdownKey,
          getModal = _ref3.getModal;

      return function (e) {
        var _countdown$countdownK;

        countdownKey = (e === null || e === void 0 ? void 0 : e.currentTarget.id) || countdownKey;
        var setToMinute = (_countdown$countdownK = countdown[countdownKey]) === null || _countdown$countdownK === void 0 ? void 0 : _countdown$countdownK.minute;

        if (!timer.current) {
          lastActive.current = null;
          updateAndRestore(countdownKey, setToMinute, {
            active: true,
            activeType: countdownKey
          });
          setTimeout(function () {
            resetState.current = Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, lastActive.current);
            timer.current = setInterval(function () {
              setState(function (_ref4) {
                var sec = _ref4.sec,
                    prev = Object(reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref4, _excluded2);

                var lastTime = Object(get_object_value__WEBPACK_IMPORTED_MODULE_9__["default"])(lastActive.current, ["now"]);

                if (lastTime) {
                  var now = Object(get_random_id__WEBPACK_IMPORTED_MODULE_8__["getTimestamp"])();
                  var queue = now - lastTime;

                  if (queue > 1000) {
                    var queueSec = Math.floor(queue / 1000);
                    sec -= queueSec;
                  }
                }

                if (sec <= 0 || isNaN(sec)) {
                  handler.stop();
                  sec = 0;
                }

                return Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prev), {}, {
                  sec: sec
                });
              });
            }, 100);
          }, 200);
        } else {
          console.warn("Timer already running");

          if (getModal) {
            Object(organism_react_popup__WEBPACK_IMPORTED_MODULE_7__["popupDispatch"])("dom/update", {
              popup: getModal(setToMinute)
            });
          }
        }
      };
    },
    stop: function stop() {
      resetState.current = Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, lastActive.current);

      if (modal.current) {
        modal.current.close();
      }

      if (timer.current) {
        clearInterval(timer.current);
        timer.current = null;
      }

      setState(function (prev) {
        return Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, prev), {}, {
          active: false,
          preview: false
        });
      });
    },
    reset: function reset() {
      lastActive.current = null;
      handler.stop();
      updateClock(resetInput.current.value);
    }
  };
  return {
    sec: sec,
    active: active,
    preview: preview,
    activeType: activeType,
    TotalSec: TotalSec,
    handler: handler,
    modal: modal,
    resetInput: resetInput
  };
};

_s(useTomato, "iBJAgy0YsNyJzd1KXOMYwWQh07E=");

var TomatoApp = function TomatoApp(props) {
  _s2();

  var countdown = props.countdown,
      useTomato = props.useTomato;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    injects = Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["lazyInject"])(injects, InjectStyles);
  }, []);

  var _useTomato = useTomato(countdown),
      sec = _useTomato.sec,
      active = _useTomato.active,
      preview = _useTomato.preview,
      activeType = _useTomato.activeType,
      handler = _useTomato.handler,
      modal = _useTomato.modal,
      resetInput = _useTomato.resetInput,
      TotalSec = _useTomato.TotalSec;

  var getModal = function getModal(defaultValue) {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(organism_react_popup__WEBPACK_IMPORTED_MODULE_7__["PopupModal"], {
      basic: true,
      ref: modal,
      contentStyle: {
        textAlign: "center"
      },
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["Button"], {
        className: "inverted",
        onClick: handler.stop,
        children: "Pause"
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["InputBox"], {
        refCb: resetInput,
        style: Styles.resetInput,
        defaultValue: defaultValue,
        inputStyle: Styles.reset,
        className: "inverted transparent",
        leftLabel: "Resst to:",
        rightLabel: "min",
        button: "Reset",
        actionProps: {
          className: "inverted",
          onClick: handler.reset
        }
      })]
    });
  };

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["SemanticUI"], {
    children: [Object(react__WEBPACK_IMPORTED_MODULE_2__["useMemo"])(function () {
      var _countdown$activeType, _mixClass;

      var percentNum = Object(to_percent_js__WEBPACK_IMPORTED_MODULE_5__["percent"])(sec / TotalSec);
      var classes = Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["mixClass"])("big Pomodoro", (_mixClass = {}, _mixClass[(_countdown$activeType = countdown[activeType]) === null || _countdown$activeType === void 0 ? void 0 : _countdown$activeType.colorName] = active || preview, _mixClass));
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(organism_react_progress__WEBPACK_IMPORTED_MODULE_4__["ProgressBar"], {
        onClick: handler.clickProgress,
        className: classes,
        style: Styles.progress,
        percent: percentNum,
        barLabel: secToMin(sec),
        barLabelProps: {
          styles: Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["reactStyle"])({
            transform: "translate(" + (100 - percentNum) + "%, 0)"
          }, false, false)
        }
      });
    }, [sec, active, preview]), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(ActionSegment, {
      col1: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["List"], {
        style: Styles.buttonList,
        children: keys(countdown).map(function (key) {
          var count = countdown[key];
          var thisClass = null;

          if (key === activeType) {
            thisClass = count.colorName;
          } else {
            if (active) {
              return null;
            }
          }

          var handleStart = handler.start({
            getModal: getModal
          });
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["Button"], {
            id: key,
            className: thisClass,
            onClick: handleStart,
            onMouseEnter: handler.btnMouseIn,
            onMouseLeave: handler.btnMouseOut,
            children: count.label
          }, key);
        })
      })
    }), _Tip || (_Tip = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(Tip, {}))]
  });
};

_s2(TomatoApp, "skKQcTMgsBdVswfGFj6z3yHMIms=", false, function () {
  return [useTomato];
});

_c3 = TomatoApp;
TomatoApp.defaultProps = {
  countdown: {
    POMODORO: {
      minute: 25,
      label: "Pomodoro",
      colorName: "red"
    },
    SHORT_BREAK: {
      minute: 5,
      label: "Short Break",
      colorName: "teal"
    },
    LONG_BREAK: {
      minute: 15,
      label: "Long Break",
      colorName: "blue"
    }
  },
  useTomato: useTomato
};
/* harmony default export */ __webpack_exports__["default"] = (TomatoApp);
var Styles = {
  progress: {
    cursor: "pointer"
  },
  buttonList: {
    textAlign: "center"
  },
  resetInput: {
    marginLeft: 20
  },
  reset: {
    width: 20
  }
};
var injects;
var InjectStyles = {
  barLabel: [{
    fontSize: "7rem"
  }, ".ui.progress.Pomodoro .bar>.progress"]
};

var _c, _c2, _c3;

$RefreshReg$(_c, "Tip");
$RefreshReg$(_c2, "ActionSegment");
$RefreshReg$(_c3, "TomatoApp");

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/WindowOffset.example.js":
/*!*******************************************************!*\
  !*** ./build/es/ui/organisms/WindowOffset.example.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/assertThisInitialized */ "./node_modules/reshow-runtime/es/helpers/assertThisInitialized.js");
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var organism_react_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! organism-react-popup */ "./node_modules/organism-react-popup/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);









var WindowOffsetExample = /*#__PURE__*/function (_Component) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_2__["default"])(WindowOffsetExample, _Component);

  function WindowOffsetExample() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _Component.call.apply(_Component, [this].concat(args)) || this;

    Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(Object(reshow_runtime_es_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(_this), "handleClick", function (e) {
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
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])("div", {
        style: Styles.row,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(organism_react_popup__WEBPACK_IMPORTED_MODULE_5__["PopupHover"], {
          popup: "1",
          isKeep: true,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
            style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Styles.col), Styles.col1),
            onClick: this.handleClick,
            children: "1"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(organism_react_popup__WEBPACK_IMPORTED_MODULE_5__["PopupHover"], {
          popup: "2",
          isKeep: true,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
            style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Styles.col), Styles.col2),
            onClick: this.handleClick,
            children: "2"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(organism_react_popup__WEBPACK_IMPORTED_MODULE_5__["PopupHover"], {
          popup: "3",
          isKeep: true,
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
            style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Styles.col), Styles.col3),
            onClick: this.handleClick,
            children: "3"
          })
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])("div", {
        style: Styles.row,
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(organism_react_popup__WEBPACK_IMPORTED_MODULE_5__["PopupHover"], {
          popup: "4",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
            style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Styles.col), Styles.col1),
            onClick: this.handleClick,
            children: "4"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(organism_react_popup__WEBPACK_IMPORTED_MODULE_5__["PopupHover"], {
          popup: "5",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
            style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Styles.col), Styles.col2),
            onClick: this.handleClick,
            children: "5"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(organism_react_popup__WEBPACK_IMPORTED_MODULE_5__["PopupHover"], {
          popup: "6",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
            style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Styles.col), Styles.col3),
            onClick: this.handleClick,
            children: "6"
          })
        })]
      }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsxs"])("div", {
        style: {
          width: 60
        },
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(organism_react_popup__WEBPACK_IMPORTED_MODULE_5__["PopupHover"], {
          popup: "7",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
            style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Styles.col), Styles.col1),
            onClick: this.handleClick,
            children: "7"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(organism_react_popup__WEBPACK_IMPORTED_MODULE_5__["PopupHover"], {
          popup: "8",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
            style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Styles.col), Styles.col2),
            onClick: this.handleClick,
            children: "8"
          })
        }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(organism_react_popup__WEBPACK_IMPORTED_MODULE_5__["PopupHover"], {
          popup: "9",
          children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])("div", {
            style: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Styles.col), Styles.col3),
            onClick: this.handleClick,
            children: "9"
          })
        })]
      })]
    });
  };

  return WindowOffsetExample;
}(react__WEBPACK_IMPORTED_MODULE_4__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (WindowOffsetExample);
var Styles = {
  row: {
    justifyContent: "space-around",
    display: "flex",
    marginBottom: 100
  },
  col: {
    width: 60,
    height: 60,
    lineHeight: "60px",
    textAlign: "center",
    color: "#fff"
  },
  col1: {
    background: "#c00"
  },
  col2: {
    background: "#095"
  },
  col3: {
    background: "#059"
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/organisms/YouTubeRWD.example.js":
/*!*****************************************************!*\
  !*** ./build/es/ui/organisms/YouTubeRWD.example.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var organism_react_video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! organism-react-video */ "./node_modules/organism-react-video/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _YoutubeRWD;





var YouTubeRWDExample = function YouTubeRWDExample() {
  return _YoutubeRWD || (_YoutubeRWD = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__["jsx"])(organism_react_video__WEBPACK_IMPORTED_MODULE_1__["YoutubeRWD"], {
    videoId: "CjxugyZCfuw"
  }));
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./build/es/ui/pages/Animation.js":
/*!****************************************!*\
  !*** ./build/es/ui/pages/Animation.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-code */ "../react-atomic-organism/packages/organism-react-code/build/es/src/index.js");
/* harmony import */ var _molecules_BasePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../molecules/BasePage */ "./build/es/ui/molecules/BasePage.js");
/* harmony import */ var _organisms_Animation_example__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../organisms/Animation.example */ "./build/es/ui/organisms/Animation.example.js");
/* harmony import */ var _raw_loader_ui_organisms_Animation_example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/Animation.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Animation.example.jsx");
/* harmony import */ var _organisms_AnimationReplace_example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/AnimationReplace.example */ "./build/es/ui/organisms/AnimationReplace.example.js");
/* harmony import */ var _raw_loader_ui_organisms_AnimationReplace_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/AnimationReplace.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AnimationReplace.example.jsx");
/* harmony import */ var _organisms_AnimationDelay_example__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../organisms/AnimationDelay.example */ "./build/es/ui/organisms/AnimationDelay.example.js");
/* harmony import */ var _raw_loader_ui_organisms_AnimationDelay_example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/AnimationDelay.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AnimationDelay.example.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);



var _CodeExample, _CodeExample2, _CodeExample3;
/*Base*/




/*Sample*/











var Animation = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Animation, _BasePage);

  function Animation() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = Animation.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
      children: [_CodeExample || (_CodeExample = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_Animation_example__WEBPACK_IMPORTED_MODULE_5__["default"],
        header: "Animation Sample",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_organisms_Animation_example__WEBPACK_IMPORTED_MODULE_4__["default"], {})
      })), _CodeExample2 || (_CodeExample2 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_AnimationReplace_example__WEBPACK_IMPORTED_MODULE_7__["default"],
        header: "Animation Replace Sample",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_organisms_AnimationReplace_example__WEBPACK_IMPORTED_MODULE_6__["default"], {})
      })), _CodeExample3 || (_CodeExample3 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_AnimationDelay_example__WEBPACK_IMPORTED_MODULE_9__["default"],
        header: "Animation Delay Sample",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_organisms_AnimationDelay_example__WEBPACK_IMPORTED_MODULE_8__["default"], {})
      }))]
    });
  };

  return Animation;
}(_molecules_BasePage__WEBPACK_IMPORTED_MODULE_3__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Animation, "defaultProps", {
  pageName: "Animation"
});

/* harmony default export */ __webpack_exports__["default"] = (Animation);

/***/ }),

/***/ "./build/es/ui/pages/AsciiDoc.js":
/*!***************************************!*\
  !*** ./build/es/ui/pages/AsciiDoc.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-code */ "../react-atomic-organism/packages/organism-react-code/build/es/src/index.js");
/* harmony import */ var _molecules_BasePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../molecules/BasePage */ "./build/es/ui/molecules/BasePage.js");
/* harmony import */ var _organisms_AsciiDoc_example__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../organisms/AsciiDoc.example */ "./build/es/ui/organisms/AsciiDoc.example.js");
/* harmony import */ var _raw_loader_ui_organisms_AsciiDoc_example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/AsciiDoc.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AsciiDoc.example.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);



var _CodeExample;
/*Base*/




/*Sample*/






var AsciiDocPage = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(AsciiDocPage, _BasePage);

  function AsciiDocPage() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = AsciiDocPage.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
      children: _CodeExample || (_CodeExample = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_AsciiDoc_example__WEBPACK_IMPORTED_MODULE_5__["default"],
        header: "Ascii Doc",
        edit: "https://codesandbox.io/s/8vj7x3m82",
        git: "react-atomic/react-atomic-organism/tree/master/packages/organism-react-asciidoc/",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_organisms_AsciiDoc_example__WEBPACK_IMPORTED_MODULE_4__["default"], {})
      }))
    });
  };

  return AsciiDocPage;
}(_molecules_BasePage__WEBPACK_IMPORTED_MODULE_3__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(AsciiDocPage, "defaultProps", {
  pageName: "AsciiDoc"
});

/* harmony default export */ __webpack_exports__["default"] = (AsciiDocPage);

/***/ }),

/***/ "./build/es/ui/pages/Atoms.js":
/*!************************************!*\
  !*** ./build/es/ui/pages/Atoms.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var _molecules_BasePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../molecules/BasePage */ "./build/es/ui/molecules/BasePage.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






var Atoms = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Atoms, _BasePage);

  function Atoms() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = Atoms.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
      children: "This is atom"
    });
  };

  return Atoms;
}(_molecules_BasePage__WEBPACK_IMPORTED_MODULE_2__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Atoms, "defaultProps", {
  pageName: "Atoms"
});

/* harmony default export */ __webpack_exports__["default"] = (Atoms);

/***/ }),

/***/ "./build/es/ui/pages/Carousel.js":
/*!***************************************!*\
  !*** ./build/es/ui/pages/Carousel.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-code */ "../react-atomic-organism/packages/organism-react-code/build/es/src/index.js");
/* harmony import */ var _molecules_BasePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../molecules/BasePage */ "./build/es/ui/molecules/BasePage.js");
/* harmony import */ var _organisms_CarouselAnimation_example__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../organisms/CarouselAnimation.example */ "./build/es/ui/organisms/CarouselAnimation.example.js");
/* harmony import */ var _raw_loader_ui_organisms_CarouselAnimation_example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/CarouselAnimation.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CarouselAnimation.example.jsx");
/* harmony import */ var _organisms_CarouselAnimationHideThumb_example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/CarouselAnimationHideThumb.example */ "./build/es/ui/organisms/CarouselAnimationHideThumb.example.js");
/* harmony import */ var _raw_loader_ui_organisms_CarouselAnimationHideThumb_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/CarouselAnimationHideThumb.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CarouselAnimationHideThumb.example.jsx");
/* harmony import */ var _organisms_CarouselSlide_example__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../organisms/CarouselSlide.example */ "./build/es/ui/organisms/CarouselSlide.example.js");
/* harmony import */ var _raw_loader_ui_organisms_CarouselSlide_example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/CarouselSlide.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CarouselSlide.example.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);



var _CodeExample, _CodeExample2, _CodeExample3;



/*example*/











var CarouselPage = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(CarouselPage, _BasePage);

  function CarouselPage() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = CarouselPage.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["Fragment"], {
      children: [_CodeExample || (_CodeExample = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_CarouselAnimation_example__WEBPACK_IMPORTED_MODULE_5__["default"],
        header: "Carousel Animation",
        git: "react-atomic/react-atomic-organism/blob/master/packages/organism-react-carousel/",
        npm: "organism-react-carousel",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_organisms_CarouselAnimation_example__WEBPACK_IMPORTED_MODULE_4__["default"], {})
      })), _CodeExample2 || (_CodeExample2 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_CarouselAnimationHideThumb_example__WEBPACK_IMPORTED_MODULE_7__["default"],
        header: "Carousel Animation Hide Thumb",
        git: "react-atomic/react-atomic-organism/blob/master/packages/organism-react-carousel/",
        npm: "organism-react-carousel",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_organisms_CarouselAnimationHideThumb_example__WEBPACK_IMPORTED_MODULE_6__["default"], {})
      })), _CodeExample3 || (_CodeExample3 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_CarouselSlide_example__WEBPACK_IMPORTED_MODULE_9__["default"],
        header: "Carousel Slide (WIP)",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__["jsx"])(_organisms_CarouselSlide_example__WEBPACK_IMPORTED_MODULE_8__["default"], {})
      }))]
    });
  };

  return CarouselPage;
}(_molecules_BasePage__WEBPACK_IMPORTED_MODULE_3__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(CarouselPage, "defaultProps", {
  pageName: "Carousel"
});

/* harmony default export */ __webpack_exports__["default"] = (CarouselPage);

/***/ }),

/***/ "./build/es/ui/pages/Code.js":
/*!***********************************!*\
  !*** ./build/es/ui/pages/Code.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-code */ "../react-atomic-organism/packages/organism-react-code/build/es/src/index.js");
/* harmony import */ var _molecules_BasePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../molecules/BasePage */ "./build/es/ui/molecules/BasePage.js");
/* harmony import */ var _organisms_CodeExample_example__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../organisms/CodeExample.example */ "./build/es/ui/organisms/CodeExample.example.js");
/* harmony import */ var _organisms_CodeEditor_example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../organisms/CodeEditor.example */ "./build/es/ui/organisms/CodeEditor.example.js");
/* harmony import */ var _raw_loader_ui_organisms_CodeEditor_example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/CodeEditor.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CodeEditor.example.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);



var _CodeExampleExample, _CodeExample;
/*Base*/











var Code = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Code, _BasePage);

  function Code() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = Code.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
      children: [_CodeExampleExample || (_CodeExampleExample = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_organisms_CodeExample_example__WEBPACK_IMPORTED_MODULE_4__["default"], {})), _CodeExample || (_CodeExample = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_CodeEditor_example__WEBPACK_IMPORTED_MODULE_6__["default"],
        header: "Codemirror Example",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_organisms_CodeEditor_example__WEBPACK_IMPORTED_MODULE_5__["default"], {})
      }))]
    });
  };

  return Code;
}(_molecules_BasePage__WEBPACK_IMPORTED_MODULE_3__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Code, "defaultProps", {
  pageName: "Code"
});

/* harmony default export */ __webpack_exports__["default"] = (Code);

/***/ }),

/***/ "./build/es/ui/pages/D3.js":
/*!*********************************!*\
  !*** ./build/es/ui/pages/D3.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-code */ "../react-atomic-organism/packages/organism-react-code/build/es/src/index.js");
/* harmony import */ var _molecules_BasePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../molecules/BasePage */ "./build/es/ui/molecules/BasePage.js");
/* harmony import */ var _organisms_D3PieChart_example__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../organisms/D3PieChart.example */ "./build/es/ui/organisms/D3PieChart.example.js");
/* harmony import */ var _raw_loader_ui_organisms_D3PieChart_example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/D3PieChart.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3PieChart.example.jsx");
/* harmony import */ var _organisms_D3BarChart_example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/D3BarChart.example */ "./build/es/ui/organisms/D3BarChart.example.js");
/* harmony import */ var _raw_loader_ui_organisms_D3BarChart_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/D3BarChart.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3BarChart.example.jsx");
/* harmony import */ var _organisms_D3LineChart_example__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../organisms/D3LineChart.example */ "./build/es/ui/organisms/D3LineChart.example.js");
/* harmony import */ var _raw_loader_ui_organisms_D3LineChart_example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/D3LineChart.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3LineChart.example.jsx");
/* harmony import */ var _organisms_D3AreaChart_example__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../organisms/D3AreaChart.example */ "./build/es/ui/organisms/D3AreaChart.example.js");
/* harmony import */ var _raw_loader_ui_organisms_D3AreaChart_example__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/D3AreaChart.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3AreaChart.example.jsx");
/* harmony import */ var _organisms_D3Uml_example__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../organisms/D3Uml.example */ "./build/es/ui/organisms/D3Uml.example.js");
/* harmony import */ var _raw_loader_ui_organisms_D3Uml_example__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/D3Uml.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3Uml.example.jsx");
/* harmony import */ var _organisms_StockChart_example__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../organisms/StockChart.example */ "./build/es/ui/organisms/StockChart.example.js");
/* harmony import */ var _raw_loader_ui_organisms_StockChart_example__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/StockChart.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/StockChart.example.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);



var _CodeExample, _CodeExample2, _CodeExample3, _CodeExample4, _CodeExample5, _CodeExample6;
/*Base*/




/*Sample*/

















var D3 = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(D3, _BasePage);

  function D3() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = D3.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["Fragment"], {
      children: [_CodeExample || (_CodeExample = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_D3Uml_example__WEBPACK_IMPORTED_MODULE_13__["default"],
        header: "D3 Uml",
        id: "d3-uml",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_organisms_D3Uml_example__WEBPACK_IMPORTED_MODULE_12__["default"], {})
      })), _CodeExample2 || (_CodeExample2 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_D3LineChart_example__WEBPACK_IMPORTED_MODULE_9__["default"],
        header: "D3 Line Chart",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_organisms_D3LineChart_example__WEBPACK_IMPORTED_MODULE_8__["default"], {})
      })), _CodeExample3 || (_CodeExample3 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_D3BarChart_example__WEBPACK_IMPORTED_MODULE_7__["default"],
        header: "D3 Bar Chart",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_organisms_D3BarChart_example__WEBPACK_IMPORTED_MODULE_6__["default"], {})
      })), _CodeExample4 || (_CodeExample4 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_D3AreaChart_example__WEBPACK_IMPORTED_MODULE_11__["default"],
        header: "D3 Area Chart",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_organisms_D3AreaChart_example__WEBPACK_IMPORTED_MODULE_10__["default"], {})
      })), _CodeExample5 || (_CodeExample5 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_D3PieChart_example__WEBPACK_IMPORTED_MODULE_5__["default"],
        header: "D3 Pie Chart",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_organisms_D3PieChart_example__WEBPACK_IMPORTED_MODULE_4__["default"], {})
      })), _CodeExample6 || (_CodeExample6 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_StockChart_example__WEBPACK_IMPORTED_MODULE_15__["default"],
        header: "Stock Chart",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_organisms_StockChart_example__WEBPACK_IMPORTED_MODULE_14__["default"], {})
      }))]
    });
  };

  return D3;
}(_molecules_BasePage__WEBPACK_IMPORTED_MODULE_3__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(D3, "defaultProps", {
  pageName: "D3"
});

/* harmony default export */ __webpack_exports__["default"] = (D3);

/***/ }),

/***/ "./build/es/ui/pages/D3UmlPerf.js":
/*!****************************************!*\
  !*** ./build/es/ui/pages/D3UmlPerf.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-code */ "../react-atomic-organism/packages/organism-react-code/build/es/src/index.js");
/* harmony import */ var _molecules_BasePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../molecules/BasePage */ "./build/es/ui/molecules/BasePage.js");
/* harmony import */ var _organisms_D3UmlPerf_example__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../organisms/D3UmlPerf.example */ "./build/es/ui/organisms/D3UmlPerf.example.js");
/* harmony import */ var _raw_loader_ui_organisms_D3UmlPerf_example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/D3UmlPerf.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3UmlPerf.example.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);



var _CodeExample;
/*Base*/




/*Sample*/






var D3UmlPerf = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(D3UmlPerf, _BasePage);

  function D3UmlPerf() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = D3UmlPerf.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
      children: _CodeExample || (_CodeExample = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_D3UmlPerf_example__WEBPACK_IMPORTED_MODULE_5__["default"],
        header: "D3 Uml",
        id: "d3-uml",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_organisms_D3UmlPerf_example__WEBPACK_IMPORTED_MODULE_4__["default"], {})
      }))
    });
  };

  return D3UmlPerf;
}(_molecules_BasePage__WEBPACK_IMPORTED_MODULE_3__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(D3UmlPerf, "defaultProps", {
  pageName: "D3UmlPerf"
});

/* harmony default export */ __webpack_exports__["default"] = (D3UmlPerf);

/***/ }),

/***/ "./build/es/ui/pages/GrapesJs.js":
/*!***************************************!*\
  !*** ./build/es/ui/pages/GrapesJs.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-code */ "../react-atomic-organism/packages/organism-react-code/build/es/src/index.js");
/* harmony import */ var _molecules_BasePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../molecules/BasePage */ "./build/es/ui/molecules/BasePage.js");
/* harmony import */ var _organisms_GrapesJs_example__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../organisms/GrapesJs.example */ "./build/es/ui/organisms/GrapesJs.example.js");
/* harmony import */ var _raw_loader_ui_organisms_GrapesJs_example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/GrapesJs.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/GrapesJs.example.jsx");
/* harmony import */ var _organisms_RTE_example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/RTE.example */ "./build/es/ui/organisms/RTE.example.js");
/* harmony import */ var _raw_loader_ui_organisms_RTE_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/RTE.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/RTE.example.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);



var _CodeExample, _CodeExample2;
/*Base*/




/*Sample*/









var GrapesJsPage = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(GrapesJsPage, _BasePage);

  function GrapesJsPage() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = GrapesJsPage.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
      children: [_CodeExample || (_CodeExample = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_GrapesJs_example__WEBPACK_IMPORTED_MODULE_5__["default"],
        header: "GrapesJs Example",
        edit: "https://codesandbox.io/s/organism-react-grapesjs-04mo7",
        git: "react-atomic/react-atomic-organism/tree/master/packages/organism-react-grapesjs/",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_organisms_GrapesJs_example__WEBPACK_IMPORTED_MODULE_4__["default"], {})
      })), _CodeExample2 || (_CodeExample2 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_RTE_example__WEBPACK_IMPORTED_MODULE_7__["default"],
        header: "RTE Example",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_organisms_RTE_example__WEBPACK_IMPORTED_MODULE_6__["default"], {})
      }))]
    });
  };

  return GrapesJsPage;
}(_molecules_BasePage__WEBPACK_IMPORTED_MODULE_3__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(GrapesJsPage, "defaultProps", {
  pageName: "GrapesJs"
});

/* harmony default export */ __webpack_exports__["default"] = (GrapesJsPage);

/***/ }),

/***/ "./build/es/ui/pages/Icons.js":
/*!************************************!*\
  !*** ./build/es/ui/pages/Icons.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var ricon_Account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ricon/Account */ "./node_modules/ricon/Account.js");
/* harmony import */ var ricon_Account__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ricon_Account__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var ricon_AccessTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ricon/AccessTime */ "./node_modules/ricon/AccessTime.js");
/* harmony import */ var ricon_AccessTime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(ricon_AccessTime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ricon_Add__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ricon/Add */ "./node_modules/ricon/Add.js");
/* harmony import */ var ricon_Add__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ricon_Add__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ricon_BarChart__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ricon/BarChart */ "./node_modules/ricon/BarChart.js");
/* harmony import */ var ricon_BarChart__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ricon_BarChart__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ricon_Build__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ricon/Build */ "./node_modules/ricon/Build.js");
/* harmony import */ var ricon_Build__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ricon_Build__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ricon_Blur__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ricon/Blur */ "./node_modules/ricon/Blur.js");
/* harmony import */ var ricon_Blur__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(ricon_Blur__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ricon_Calendar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ricon/Calendar */ "./node_modules/ricon/Calendar.js");
/* harmony import */ var ricon_Calendar__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ricon_Calendar__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var ricon_ChevronRight__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ricon/ChevronRight */ "./node_modules/ricon/ChevronRight.js");
/* harmony import */ var ricon_ChevronRight__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ricon_ChevronRight__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ricon_Code__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ricon/Code */ "./node_modules/ricon/Code.js");
/* harmony import */ var ricon_Code__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(ricon_Code__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var ricon_CircleLoading__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ricon/CircleLoading */ "./node_modules/ricon/CircleLoading.js");
/* harmony import */ var ricon_CircleLoading__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ricon_CircleLoading__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ricon_Dashboard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ricon/Dashboard */ "./node_modules/ricon/Dashboard.js");
/* harmony import */ var ricon_Dashboard__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(ricon_Dashboard__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var ricon_Description__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ricon/Description */ "./node_modules/ricon/Description.js");
/* harmony import */ var ricon_Description__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(ricon_Description__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var ricon_Device__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ricon/Device */ "./node_modules/ricon/Device.js");
/* harmony import */ var ricon_Device__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(ricon_Device__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var ricon_Dropdown__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ricon/Dropdown */ "./node_modules/ricon/Dropdown.js");
/* harmony import */ var ricon_Dropdown__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ricon_Dropdown__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var ricon_Download__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ricon/Download */ "./node_modules/ricon/Download.js");
/* harmony import */ var ricon_Download__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ricon_Download__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var ricon_Delete__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ricon/Delete */ "./node_modules/ricon/Delete.js");
/* harmony import */ var ricon_Delete__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(ricon_Delete__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var ricon_Edit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ricon/Edit */ "./node_modules/ricon/Edit.js");
/* harmony import */ var ricon_Edit__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(ricon_Edit__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var ricon_Email__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ricon/Email */ "./node_modules/ricon/Email.js");
/* harmony import */ var ricon_Email__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(ricon_Email__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var ricon_Exit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ricon/Exit */ "./node_modules/ricon/Exit.js");
/* harmony import */ var ricon_Exit__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(ricon_Exit__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var ricon_File__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ricon/File */ "./node_modules/ricon/File.js");
/* harmony import */ var ricon_File__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(ricon_File__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var ricon_Facebook__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ricon/Facebook */ "./node_modules/ricon/Facebook.js");
/* harmony import */ var ricon_Facebook__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(ricon_Facebook__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var ricon_FacebookMessage__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ricon/FacebookMessage */ "./node_modules/ricon/FacebookMessage.js");
/* harmony import */ var ricon_FacebookMessage__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(ricon_FacebookMessage__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var ricon_FeaturedPlayList__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ricon/FeaturedPlayList */ "./node_modules/ricon/FeaturedPlayList.js");
/* harmony import */ var ricon_FeaturedPlayList__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(ricon_FeaturedPlayList__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var ricon_Git__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ricon/Git */ "./node_modules/ricon/Git.js");
/* harmony import */ var ricon_Git__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(ricon_Git__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var ricon_Help__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ricon/Help */ "./node_modules/ricon/Help.js");
/* harmony import */ var ricon_Help__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(ricon_Help__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var ricon_Hamburger__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ricon/Hamburger */ "./node_modules/ricon/Hamburger.js");
/* harmony import */ var ricon_Hamburger__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(ricon_Hamburger__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var ricon_HamburgerToArrow__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ricon/HamburgerToArrow */ "./node_modules/ricon/HamburgerToArrow.js");
/* harmony import */ var ricon_HamburgerToArrow__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(ricon_HamburgerToArrow__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var ricon_HamburgerToX__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ricon/HamburgerToX */ "./node_modules/ricon/HamburgerToX.js");
/* harmony import */ var ricon_HamburgerToX__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(ricon_HamburgerToX__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var ricon_Home__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ricon/Home */ "./node_modules/ricon/Home.js");
/* harmony import */ var ricon_Home__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(ricon_Home__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var ricon_Link__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ricon/Link */ "./node_modules/ricon/Link.js");
/* harmony import */ var ricon_Link__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(ricon_Link__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var ricon_Monetization__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ricon/Monetization */ "./node_modules/ricon/Monetization.js");
/* harmony import */ var ricon_Monetization__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(ricon_Monetization__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var ricon_MyLocation__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ricon/MyLocation */ "./node_modules/ricon/MyLocation.js");
/* harmony import */ var ricon_MyLocation__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(ricon_MyLocation__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var ricon_Npm__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ricon/Npm */ "./node_modules/ricon/Npm.js");
/* harmony import */ var ricon_Npm__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(ricon_Npm__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var ricon_Notification__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ricon/Notification */ "./node_modules/ricon/Notification.js");
/* harmony import */ var ricon_Notification__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(ricon_Notification__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var ricon_Person__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ricon/Person */ "./node_modules/ricon/Person.js");
/* harmony import */ var ricon_Person__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(ricon_Person__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var ricon_Phone__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ricon/Phone */ "./node_modules/ricon/Phone.js");
/* harmony import */ var ricon_Phone__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(ricon_Phone__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var ricon_Pin__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ricon/Pin */ "./node_modules/ricon/Pin.js");
/* harmony import */ var ricon_Pin__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(ricon_Pin__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var ricon_Play__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ricon/Play */ "./node_modules/ricon/Play.js");
/* harmony import */ var ricon_Play__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(ricon_Play__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var ricon_PlayListAdd__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ricon/PlayListAdd */ "./node_modules/ricon/PlayListAdd.js");
/* harmony import */ var ricon_PlayListAdd__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(ricon_PlayListAdd__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var ricon_Pulse__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ricon/Pulse */ "./node_modules/ricon/Pulse.js");
/* harmony import */ var ricon_Pulse__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(ricon_Pulse__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var ricon_Refresh__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ricon/Refresh */ "./node_modules/ricon/Refresh.js");
/* harmony import */ var ricon_Refresh__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(ricon_Refresh__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var ricon_Reply__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ricon/Reply */ "./node_modules/ricon/Reply.js");
/* harmony import */ var ricon_Reply__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(ricon_Reply__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var ricon_Search__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ricon/Search */ "./node_modules/ricon/Search.js");
/* harmony import */ var ricon_Search__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(ricon_Search__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var ricon_Settings__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ricon/Settings */ "./node_modules/ricon/Settings.js");
/* harmony import */ var ricon_Settings__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(ricon_Settings__WEBPACK_IMPORTED_MODULE_45__);
/* harmony import */ var ricon_ShoppingCart__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ricon/ShoppingCart */ "./node_modules/ricon/ShoppingCart.js");
/* harmony import */ var ricon_ShoppingCart__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(ricon_ShoppingCart__WEBPACK_IMPORTED_MODULE_46__);
/* harmony import */ var ricon_Sort__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ricon/Sort */ "./node_modules/ricon/Sort.js");
/* harmony import */ var ricon_Sort__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(ricon_Sort__WEBPACK_IMPORTED_MODULE_47__);
/* harmony import */ var ricon_Shopee__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ricon/Shopee */ "./node_modules/ricon/Shopee.js");
/* harmony import */ var ricon_Shopee__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(ricon_Shopee__WEBPACK_IMPORTED_MODULE_48__);
/* harmony import */ var ricon_Sync__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ricon/Sync */ "./node_modules/ricon/Sync.js");
/* harmony import */ var ricon_Sync__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(ricon_Sync__WEBPACK_IMPORTED_MODULE_49__);
/* harmony import */ var ricon_TouchApp__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ricon/TouchApp */ "./node_modules/ricon/TouchApp.js");
/* harmony import */ var ricon_TouchApp__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(ricon_TouchApp__WEBPACK_IMPORTED_MODULE_50__);
/* harmony import */ var ricon_Timer__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ricon/Timer */ "./node_modules/ricon/Timer.js");
/* harmony import */ var ricon_Timer__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(ricon_Timer__WEBPACK_IMPORTED_MODULE_51__);
/* harmony import */ var ricon_VerifiedUser__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ricon/VerifiedUser */ "./node_modules/ricon/VerifiedUser.js");
/* harmony import */ var ricon_VerifiedUser__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(ricon_VerifiedUser__WEBPACK_IMPORTED_MODULE_52__);
/* harmony import */ var ricon_Video__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ricon/Video */ "./node_modules/ricon/Video.js");
/* harmony import */ var ricon_Video__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(ricon_Video__WEBPACK_IMPORTED_MODULE_53__);
/* harmony import */ var ricon_Visibility__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ricon/Visibility */ "./node_modules/ricon/Visibility.js");
/* harmony import */ var ricon_Visibility__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(ricon_Visibility__WEBPACK_IMPORTED_MODULE_54__);
/* harmony import */ var ricon_ViewModule__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ricon/ViewModule */ "./node_modules/ricon/ViewModule.js");
/* harmony import */ var ricon_ViewModule__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(ricon_ViewModule__WEBPACK_IMPORTED_MODULE_55__);
/* harmony import */ var ricon_Wifi__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ricon/Wifi */ "./node_modules/ricon/Wifi.js");
/* harmony import */ var ricon_Wifi__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(ricon_Wifi__WEBPACK_IMPORTED_MODULE_56__);
/* harmony import */ var ricon_Wallet__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ricon/Wallet */ "./node_modules/ricon/Wallet.js");
/* harmony import */ var ricon_Wallet__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(ricon_Wallet__WEBPACK_IMPORTED_MODULE_57__);
/* harmony import */ var ricon_X__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ricon/X */ "./node_modules/ricon/X.js");
/* harmony import */ var ricon_X__WEBPACK_IMPORTED_MODULE_58___default = /*#__PURE__*/__webpack_require__.n(ricon_X__WEBPACK_IMPORTED_MODULE_58__);
/* harmony import */ var ricon_ZoomIn__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ricon/ZoomIn */ "./node_modules/ricon/ZoomIn.js");
/* harmony import */ var ricon_ZoomIn__WEBPACK_IMPORTED_MODULE_59___default = /*#__PURE__*/__webpack_require__.n(ricon_ZoomIn__WEBPACK_IMPORTED_MODULE_59__);
/* harmony import */ var ricon_Error__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ricon/Error */ "./node_modules/ricon/Error.js");
/* harmony import */ var ricon_Error__WEBPACK_IMPORTED_MODULE_60___default = /*#__PURE__*/__webpack_require__.n(ricon_Error__WEBPACK_IMPORTED_MODULE_60__);
/* harmony import */ var ricon_Warning__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ricon/Warning */ "./node_modules/ricon/Warning.js");
/* harmony import */ var ricon_Warning__WEBPACK_IMPORTED_MODULE_61___default = /*#__PURE__*/__webpack_require__.n(ricon_Warning__WEBPACK_IMPORTED_MODULE_61__);
/* harmony import */ var _molecules_BasePage__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ../molecules/BasePage */ "./build/es/ui/molecules/BasePage.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__);



























































 // Alert







var icons = [["Account", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Account__WEBPACK_IMPORTED_MODULE_2___default.a, {})], ["Account (circle)", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Account__WEBPACK_IMPORTED_MODULE_2___default.a, {
  type: "circle"
})], ["Account (supervisor)", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Account__WEBPACK_IMPORTED_MODULE_2___default.a, {
  type: "supervisor"
})], ["Add", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Add__WEBPACK_IMPORTED_MODULE_4___default.a, {})], ["Add (box)", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Add__WEBPACK_IMPORTED_MODULE_4___default.a, {
  type: "box"
})], ["Add (circle)", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Add__WEBPACK_IMPORTED_MODULE_4___default.a, {
  type: "circle"
})], ["Add (circleOutline)", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Add__WEBPACK_IMPORTED_MODULE_4___default.a, {
  type: "circleOutline"
})], ["AccessTime", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_AccessTime__WEBPACK_IMPORTED_MODULE_3___default.a, {})], ["AccessTime (fill)", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_AccessTime__WEBPACK_IMPORTED_MODULE_3___default.a, {
  type: "fill"
})], ["AccessTime (update)", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_AccessTime__WEBPACK_IMPORTED_MODULE_3___default.a, {
  type: "update"
})], ["BarChart", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_BarChart__WEBPACK_IMPORTED_MODULE_5___default.a, {})], ["Build", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Build__WEBPACK_IMPORTED_MODULE_6___default.a, {})], ["Blur", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Blur__WEBPACK_IMPORTED_MODULE_7___default.a, {})], ["Calendar", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Calendar__WEBPACK_IMPORTED_MODULE_8___default.a, {})], ["ChevronRight", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_ChevronRight__WEBPACK_IMPORTED_MODULE_9___default.a, {})], ["Code", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Code__WEBPACK_IMPORTED_MODULE_10___default.a, {})], ["CircleLoading", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_CircleLoading__WEBPACK_IMPORTED_MODULE_11___default.a, {})], ["Dashboard", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Dashboard__WEBPACK_IMPORTED_MODULE_12___default.a, {})], ["Delete", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Delete__WEBPACK_IMPORTED_MODULE_17___default.a, {})], ["Delete (forever)", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Delete__WEBPACK_IMPORTED_MODULE_17___default.a, {
  type: "forever"
})], ["Delete (sweep)", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Delete__WEBPACK_IMPORTED_MODULE_17___default.a, {
  type: "sweep"
})], ["Device (desktop)", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Device__WEBPACK_IMPORTED_MODULE_14___default.a, {
  type: "desktop"
})], ["Device (tablet)", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Device__WEBPACK_IMPORTED_MODULE_14___default.a, {
  type: "tablet"
})], ["Device (phone)", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Device__WEBPACK_IMPORTED_MODULE_14___default.a, {
  type: "phone"
})], ["Download", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Download__WEBPACK_IMPORTED_MODULE_16___default.a, {})], ["Download (file)", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Download__WEBPACK_IMPORTED_MODULE_16___default.a, {
  type: "file"
})], ["Dropdown", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Dropdown__WEBPACK_IMPORTED_MODULE_15___default.a, {})], ["Dropdown (up)", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Dropdown__WEBPACK_IMPORTED_MODULE_15___default.a, {
  type: "up"
})], ["Dropdown (right)", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Dropdown__WEBPACK_IMPORTED_MODULE_15___default.a, {
  type: "right"
})], ["Dropdown (left)", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Dropdown__WEBPACK_IMPORTED_MODULE_15___default.a, {
  type: "left"
})], ["Description", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Description__WEBPACK_IMPORTED_MODULE_13___default.a, {})], ["Edit", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Edit__WEBPACK_IMPORTED_MODULE_18___default.a, {})], ["Email", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Email__WEBPACK_IMPORTED_MODULE_19___default.a, {})], ["Exit", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Exit__WEBPACK_IMPORTED_MODULE_20___default.a, {})], ["File", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_File__WEBPACK_IMPORTED_MODULE_21___default.a, {
  children: ".js"
})], ["Facebook", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Facebook__WEBPACK_IMPORTED_MODULE_22___default.a, {})], ["FacebookMessage", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_FacebookMessage__WEBPACK_IMPORTED_MODULE_23___default.a, {})], ["FeaturedPlayList", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_FeaturedPlayList__WEBPACK_IMPORTED_MODULE_24___default.a, {})], ["Git", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Git__WEBPACK_IMPORTED_MODULE_25___default.a, {})], ["Help", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Help__WEBPACK_IMPORTED_MODULE_26___default.a, {})], ["Home", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Home__WEBPACK_IMPORTED_MODULE_30___default.a, {})], ["Hamburger", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Hamburger__WEBPACK_IMPORTED_MODULE_27___default.a, {})], ["HamburgerToArrow", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_HamburgerToArrow__WEBPACK_IMPORTED_MODULE_28___default.a, {
  on: true
})], ["HamburgerToX", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_HamburgerToX__WEBPACK_IMPORTED_MODULE_29___default.a, {
  on: true
})], ["Link", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Link__WEBPACK_IMPORTED_MODULE_31___default.a, {})], ["Monetization", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Monetization__WEBPACK_IMPORTED_MODULE_32___default.a, {})], ["Monetization", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Monetization__WEBPACK_IMPORTED_MODULE_32___default.a, {
  type: "sign"
})], ["MyLocation (fixed)", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_MyLocation__WEBPACK_IMPORTED_MODULE_33___default.a, {})], ["MyLocation (off)", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_MyLocation__WEBPACK_IMPORTED_MODULE_33___default.a, {
  type: "off"
})], ["MyLocation (on)", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_MyLocation__WEBPACK_IMPORTED_MODULE_33___default.a, {
  type: "on"
})], ["MyLocation (loading)", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_MyLocation__WEBPACK_IMPORTED_MODULE_33___default.a, {
  loading: true,
  type: "on"
})], ["Npm", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Npm__WEBPACK_IMPORTED_MODULE_34___default.a, {})], ["Notification", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Notification__WEBPACK_IMPORTED_MODULE_35___default.a, {})], ["Notification (active)", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Notification__WEBPACK_IMPORTED_MODULE_35___default.a, {
  type: "active"
})], ["Notification (none)", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Notification__WEBPACK_IMPORTED_MODULE_35___default.a, {
  type: "none"
})], ["Notification (off)", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Notification__WEBPACK_IMPORTED_MODULE_35___default.a, {
  type: "off"
})], ["Notification (paused)", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Notification__WEBPACK_IMPORTED_MODULE_35___default.a, {
  type: "paused"
})], ["Person", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Person__WEBPACK_IMPORTED_MODULE_36___default.a, {})], ["Person (add)", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Person__WEBPACK_IMPORTED_MODULE_36___default.a, {
  type: "add"
})], ["Phone", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Phone__WEBPACK_IMPORTED_MODULE_37___default.a, {})], ["Pin", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Pin__WEBPACK_IMPORTED_MODULE_38___default.a, {})], ["Pulse", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Pulse__WEBPACK_IMPORTED_MODULE_41___default.a, {})], ["Pulse (breath)", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Pulse__WEBPACK_IMPORTED_MODULE_41___default.a, {
  animation: "breath"
})], ["Play", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Play__WEBPACK_IMPORTED_MODULE_39___default.a, {})], ["PlayListAdd", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_PlayListAdd__WEBPACK_IMPORTED_MODULE_40___default.a, {})], ["Refresh", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Refresh__WEBPACK_IMPORTED_MODULE_42___default.a, {})], ["Reply", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Reply__WEBPACK_IMPORTED_MODULE_43___default.a, {})], ["Reply (right)", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Reply__WEBPACK_IMPORTED_MODULE_43___default.a, {
  type: "right"
})], ["Search", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Search__WEBPACK_IMPORTED_MODULE_44___default.a, {})], ["Settings", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Settings__WEBPACK_IMPORTED_MODULE_45___default.a, {})], ["Settings", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Settings__WEBPACK_IMPORTED_MODULE_45___default.a, {
  type: "square"
})], ["ShoppingCart", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_ShoppingCart__WEBPACK_IMPORTED_MODULE_46___default.a, {})], ["Sort", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Sort__WEBPACK_IMPORTED_MODULE_47___default.a, {})], ["Shopee", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Shopee__WEBPACK_IMPORTED_MODULE_48___default.a, {})], ["Sync", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Sync__WEBPACK_IMPORTED_MODULE_49___default.a, {})], ["Sync (disabled)", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Sync__WEBPACK_IMPORTED_MODULE_49___default.a, {
  type: "disabled"
})], ["Sync (problem)", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Sync__WEBPACK_IMPORTED_MODULE_49___default.a, {
  type: "problem"
})], ["TouchApp", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_TouchApp__WEBPACK_IMPORTED_MODULE_50___default.a, {})], ["Timer", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Timer__WEBPACK_IMPORTED_MODULE_51___default.a, {})], ["Timer (off)", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Timer__WEBPACK_IMPORTED_MODULE_51___default.a, {
  type: "off"
})], ["VerifiedUser", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_VerifiedUser__WEBPACK_IMPORTED_MODULE_52___default.a, {})], ["Video", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Video__WEBPACK_IMPORTED_MODULE_53___default.a, {})], ["Visibility", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Visibility__WEBPACK_IMPORTED_MODULE_54___default.a, {})], ["ViewModule", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_ViewModule__WEBPACK_IMPORTED_MODULE_55___default.a, {})], ["Wifi", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Wifi__WEBPACK_IMPORTED_MODULE_56___default.a, {})], ["Wallet", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Wallet__WEBPACK_IMPORTED_MODULE_57___default.a, {})], ["X", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_X__WEBPACK_IMPORTED_MODULE_58___default.a, {
  style: {
    position: "static"
  }
})], ["ZoomIn", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_ZoomIn__WEBPACK_IMPORTED_MODULE_59___default.a, {})], // Alert
["Error", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Error__WEBPACK_IMPORTED_MODULE_60___default.a, {})], ["Warning", /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(ricon_Warning__WEBPACK_IMPORTED_MODULE_61___default.a, {})]];

var Icons = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Icons, _BasePage);

  function Icons() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = Icons.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["Fragment"], {
      children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])("div", {
        className: "pure-g",
        children: icons.map(function (v, k) {
          return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsxs"])("div", {
            className: "pure-u-1 pure-u-md-1-3 pure-u-lg-1-5",
            style: Styles.grid,
            children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])("div", {
              style: Styles.icon,
              children: v[1]
            }), /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_63__["jsx"])("div", {
              children: v[0]
            })]
          }, k);
        })
      })
    });
  };

  return Icons;
}(_molecules_BasePage__WEBPACK_IMPORTED_MODULE_62__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Icons, "defaultProps", {
  pageName: "Icons"
});

/* harmony default export */ __webpack_exports__["default"] = (Icons);
var Styles = {
  grid: {
    textAlign: "center"
  },
  icon: {
    maxWidth: 30,
    minHeight: 30,
    maxHeight: 30,
    margin: "0 auto 10px",
    position: "relative"
  }
};

/***/ }),

/***/ "./build/es/ui/pages/JSON.js":
/*!***********************************!*\
  !*** ./build/es/ui/pages/JSON.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-code */ "../react-atomic-organism/packages/organism-react-code/build/es/src/index.js");
/* harmony import */ var _molecules_BasePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../molecules/BasePage */ "./build/es/ui/molecules/BasePage.js");
/* harmony import */ var _organisms_QueryToJSON__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../organisms/QueryToJSON */ "./build/es/ui/organisms/QueryToJSON.js");
/* harmony import */ var _raw_loader_ui_organisms_QueryToJSON__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/QueryToJSON */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/QueryToJSON.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);



var _CodeExample;
/*Base*/




/*Sample*/






var JSON = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(JSON, _BasePage);

  function JSON() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = JSON.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
      children: _CodeExample || (_CodeExample = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_QueryToJSON__WEBPACK_IMPORTED_MODULE_5__["default"],
        header: "Query To JSON",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_organisms_QueryToJSON__WEBPACK_IMPORTED_MODULE_4__["default"], {})
      }))
    });
  };

  return JSON;
}(_molecules_BasePage__WEBPACK_IMPORTED_MODULE_3__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(JSON, "defaultProps", {
  pageName: "JSON"
});

/* harmony default export */ __webpack_exports__["default"] = (JSON);

/***/ }),

/***/ "./build/es/ui/pages/List.js":
/*!***********************************!*\
  !*** ./build/es/ui/pages/List.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-code */ "../react-atomic-organism/packages/organism-react-code/build/es/src/index.js");
/* harmony import */ var _molecules_BasePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../molecules/BasePage */ "./build/es/ui/molecules/BasePage.js");
/* harmony import */ var _organisms_GridList_example__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../organisms/GridList.example */ "./build/es/ui/organisms/GridList.example.js");
/* harmony import */ var _raw_loader_ui_organisms_GridList_example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/GridList.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/GridList.example.jsx");
/* harmony import */ var _organisms_HtmlTableList_example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/HtmlTableList.example */ "./build/es/ui/organisms/HtmlTableList.example.js");
/* harmony import */ var _raw_loader_ui_organisms_HtmlTableList_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/HtmlTableList.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/HtmlTableList.example.jsx");
/* harmony import */ var _organisms_ReactVirtualizedTableList_example__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../organisms/ReactVirtualizedTableList.example */ "./build/es/ui/organisms/ReactVirtualizedTableList.example.js");
/* harmony import */ var _raw_loader_ui_organisms_ReactVirtualizedTableList_example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/ReactVirtualizedTableList.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/ReactVirtualizedTableList.example.jsx");
/* harmony import */ var _organisms_FixedDataTableList_example__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../organisms/FixedDataTableList.example */ "./build/es/ui/organisms/FixedDataTableList.example.js");
/* harmony import */ var _raw_loader_ui_organisms_FixedDataTableList_example__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/FixedDataTableList.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FixedDataTableList.example.jsx");
/* harmony import */ var _organisms_Pagination_example__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../organisms/Pagination.example */ "./build/es/ui/organisms/Pagination.example.js");
/* harmony import */ var _raw_loader_ui_organisms_Pagination_example__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/Pagination.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Pagination.example.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__);



var _CodeExample, _CodeExample2, _CodeExample3, _CodeExample4, _CodeExample5;
/*Base*/




/*Sample*/















var List = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(List, _BasePage);

  function List() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = List.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["Fragment"], {
      children: [_CodeExample || (_CodeExample = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_GridList_example__WEBPACK_IMPORTED_MODULE_5__["default"],
        header: "Grid List",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_organisms_GridList_example__WEBPACK_IMPORTED_MODULE_4__["default"], {})
      })), _CodeExample2 || (_CodeExample2 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_HtmlTableList_example__WEBPACK_IMPORTED_MODULE_7__["default"],
        header: "Html Table",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_organisms_HtmlTableList_example__WEBPACK_IMPORTED_MODULE_6__["default"], {})
      })), _CodeExample3 || (_CodeExample3 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_ReactVirtualizedTableList_example__WEBPACK_IMPORTED_MODULE_9__["default"],
        header: "React Virgualized Table",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_organisms_ReactVirtualizedTableList_example__WEBPACK_IMPORTED_MODULE_8__["default"], {})
      })), _CodeExample4 || (_CodeExample4 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_FixedDataTableList_example__WEBPACK_IMPORTED_MODULE_11__["default"],
        header: "Fixed Data Table",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_organisms_FixedDataTableList_example__WEBPACK_IMPORTED_MODULE_10__["default"], {})
      })), _CodeExample5 || (_CodeExample5 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_Pagination_example__WEBPACK_IMPORTED_MODULE_13__["default"],
        header: "Pagination",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_14__["jsx"])(_organisms_Pagination_example__WEBPACK_IMPORTED_MODULE_12__["default"], {})
      }))]
    });
  };

  return List;
}(_molecules_BasePage__WEBPACK_IMPORTED_MODULE_3__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(List, "defaultProps", {
  pageName: "List"
});

/* harmony default export */ __webpack_exports__["default"] = (List);

/***/ }),

/***/ "./build/es/ui/pages/Molecules.js":
/*!****************************************!*\
  !*** ./build/es/ui/pages/Molecules.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var _molecules_BasePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../molecules/BasePage */ "./build/es/ui/molecules/BasePage.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var react_atomic_organism__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-atomic-organism */ "./node_modules/react-atomic-organism/build/es/src/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);



var _DividingHeader, _div, _Form, _div2, _InputBox, _div3, _SearchBox;








var Molecules = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Molecules, _BasePage);

  function Molecules() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = Molecules.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
      children: [_DividingHeader || (_DividingHeader = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["DividingHeader"], {
        children: "Input box"
      })), _div || (_div = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
        children: "Inputbox"
      })), _Form || (_Form = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["Form"], {
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["Field"], {
          atom: "input"
        })
      })), _div2 || (_div2 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
        children: "Inputbox with button"
      })), _InputBox || (_InputBox = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_3__["InputBox"], {})), _div3 || (_div3 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])("div", {
        children: "Search Box"
      })), _SearchBox || (_SearchBox = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(react_atomic_organism__WEBPACK_IMPORTED_MODULE_4__["SearchBox"], {}))]
    });
  };

  return Molecules;
}(_molecules_BasePage__WEBPACK_IMPORTED_MODULE_2__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Molecules, "defaultProps", {
  pageName: "Molecules"
});

/* harmony default export */ __webpack_exports__["default"] = (Molecules);

/***/ }),

/***/ "./build/es/ui/pages/Organisms.js":
/*!****************************************!*\
  !*** ./build/es/ui/pages/Organisms.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-code */ "../react-atomic-organism/packages/organism-react-code/build/es/src/index.js");
/* harmony import */ var _molecules_BasePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../molecules/BasePage */ "./build/es/ui/molecules/BasePage.js");
/* harmony import */ var _organisms_PageLoadProgressHandler_example__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../organisms/PageLoadProgressHandler.example */ "./build/es/ui/organisms/PageLoadProgressHandler.example.js");
/* harmony import */ var _raw_loader_ui_organisms_PageLoadProgressHandler_example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/PageLoadProgressHandler.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/PageLoadProgressHandler.example.jsx");
/* harmony import */ var _organisms_PageLoadProgressHandlerWithAjax_example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/PageLoadProgressHandlerWithAjax.example */ "./build/es/ui/organisms/PageLoadProgressHandlerWithAjax.example.js");
/* harmony import */ var _raw_loader_ui_organisms_PageLoadProgressHandlerWithAjax_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/PageLoadProgressHandlerWithAjax.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/PageLoadProgressHandlerWithAjax.example.jsx");
/* harmony import */ var _organisms_AjaxDownload_example__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../organisms/AjaxDownload.example */ "./build/es/ui/organisms/AjaxDownload.example.js");
/* harmony import */ var _raw_loader_ui_organisms_AjaxDownload_example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/AjaxDownload.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AjaxDownload.example.jsx");
/* harmony import */ var _organisms_Dropzone_example__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../organisms/Dropzone.example */ "./build/es/ui/organisms/Dropzone.example.js");
/* harmony import */ var _raw_loader_ui_organisms_Dropzone_example__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/Dropzone.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Dropzone.example.jsx");
/* harmony import */ var _organisms_FBLike_example__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../organisms/FBLike.example */ "./build/es/ui/organisms/FBLike.example.js");
/* harmony import */ var _raw_loader_ui_organisms_FBLike_example__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/FBLike.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FBLike.example.jsx");
/* harmony import */ var _organisms_FBPage_example__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../organisms/FBPage.example */ "./build/es/ui/organisms/FBPage.example.js");
/* harmony import */ var _raw_loader_ui_organisms_FBPage_example__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/FBPage.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FBPage.example.jsx");
/* harmony import */ var _organisms_TabView_example__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../organisms/TabView.example */ "./build/es/ui/organisms/TabView.example.js");
/* harmony import */ var _raw_loader_ui_organisms_TabView_example__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/TabView.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/TabView.example.jsx");
/* harmony import */ var _organisms_RadioGroup_example__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../organisms/RadioGroup.example */ "./build/es/ui/organisms/RadioGroup.example.js");
/* harmony import */ var _raw_loader_ui_organisms_RadioGroup_example__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/RadioGroup.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/RadioGroup.example.jsx");
/* harmony import */ var _organisms_Checkbox_example__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../organisms/Checkbox.example */ "./build/es/ui/organisms/Checkbox.example.js");
/* harmony import */ var _raw_loader_ui_organisms_Checkbox_example__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/Checkbox.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Checkbox.example.jsx");
/* harmony import */ var _organisms_Suggestion_example__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../organisms/Suggestion.example */ "./build/es/ui/organisms/Suggestion.example.js");
/* harmony import */ var _raw_loader_ui_organisms_Suggestion_example__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/Suggestion.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Suggestion.example.jsx");
/* harmony import */ var _organisms_TagInput_example__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../organisms/TagInput.example */ "./build/es/ui/organisms/TagInput.example.js");
/* harmony import */ var _raw_loader_ui_organisms_TagInput_example__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/TagInput.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/TagInput.example.jsx");
/* harmony import */ var _organisms_ErrorForm_example__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../organisms/ErrorForm.example */ "./build/es/ui/organisms/ErrorForm.example.js");
/* harmony import */ var _raw_loader_ui_organisms_ErrorForm_example__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/ErrorForm.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/ErrorForm.example.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__);



var _CodeExample, _CodeExample2, _CodeExample3, _CodeExample4, _CodeExample5, _CodeExample6, _CodeExample7, _CodeExample8, _CodeExample9, _CodeExample10, _CodeExample11, _CodeExample12;


 // example





























var Organisms = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Organisms, _BasePage);

  function Organisms() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = Organisms.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["Fragment"], {
      children: [_CodeExample || (_CodeExample = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_TagInput_example__WEBPACK_IMPORTED_MODULE_25__["default"],
        header: "Tag input",
        id: "tag-input",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_organisms_TagInput_example__WEBPACK_IMPORTED_MODULE_24__["default"], {})
      })), _CodeExample2 || (_CodeExample2 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_ErrorForm_example__WEBPACK_IMPORTED_MODULE_27__["default"],
        header: "Error Form",
        id: "errorForm",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_organisms_ErrorForm_example__WEBPACK_IMPORTED_MODULE_26__["default"], {})
      })), _CodeExample3 || (_CodeExample3 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_PageLoadProgressHandler_example__WEBPACK_IMPORTED_MODULE_5__["default"],
        header: "Page Load Progress",
        git: "react-atomic/react-atomic-organism/blob/master/packages/organism-react-progress/",
        npm: "organism-react-progress",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_organisms_PageLoadProgressHandler_example__WEBPACK_IMPORTED_MODULE_4__["default"], {})
      })), _CodeExample4 || (_CodeExample4 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_PageLoadProgressHandlerWithAjax_example__WEBPACK_IMPORTED_MODULE_7__["default"],
        header: "Page Load Progress With Ajax",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_organisms_PageLoadProgressHandlerWithAjax_example__WEBPACK_IMPORTED_MODULE_6__["default"], {})
      })), _CodeExample5 || (_CodeExample5 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_AjaxDownload_example__WEBPACK_IMPORTED_MODULE_9__["default"],
        id: "ajax-save",
        header: "Ajax Save (Downloader)",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_organisms_AjaxDownload_example__WEBPACK_IMPORTED_MODULE_8__["default"], {})
      })), _CodeExample6 || (_CodeExample6 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_Dropzone_example__WEBPACK_IMPORTED_MODULE_11__["default"],
        header: "Dropzone",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_organisms_Dropzone_example__WEBPACK_IMPORTED_MODULE_10__["default"], {})
      })), _CodeExample7 || (_CodeExample7 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_FBLike_example__WEBPACK_IMPORTED_MODULE_13__["default"],
        header: "Facebook Like Button",
        git: "react-atomic/react-atomic-organism/blob/master/packages/organism-react-facebook/",
        npm: "organism-react-facebook",
        id: "organism-react-facebook",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_organisms_FBLike_example__WEBPACK_IMPORTED_MODULE_12__["default"], {})
      })), _CodeExample8 || (_CodeExample8 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_FBPage_example__WEBPACK_IMPORTED_MODULE_15__["default"],
        header: "Facebook Page Plugin",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_organisms_FBPage_example__WEBPACK_IMPORTED_MODULE_14__["default"], {})
      })), _CodeExample9 || (_CodeExample9 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_Suggestion_example__WEBPACK_IMPORTED_MODULE_23__["default"],
        header: "Suggestion",
        id: "suggestion",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_organisms_Suggestion_example__WEBPACK_IMPORTED_MODULE_22__["default"], {})
      })), _CodeExample10 || (_CodeExample10 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_TabView_example__WEBPACK_IMPORTED_MODULE_17__["default"],
        header: "Tab View",
        id: "tab",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_organisms_TabView_example__WEBPACK_IMPORTED_MODULE_16__["default"], {})
      })), _CodeExample11 || (_CodeExample11 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_RadioGroup_example__WEBPACK_IMPORTED_MODULE_19__["default"],
        header: "Radio Group",
        id: "radioGroup",
        edit: "https://codesandbox.io/embed/jjq8ko2krv?module=%2Fsrc%2FradioGroup.js&moduleview=1",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_organisms_RadioGroup_example__WEBPACK_IMPORTED_MODULE_18__["default"], {})
      })), _CodeExample12 || (_CodeExample12 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_Checkbox_example__WEBPACK_IMPORTED_MODULE_21__["default"],
        header: "Checkbox",
        id: "checkbox",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_28__["jsx"])(_organisms_Checkbox_example__WEBPACK_IMPORTED_MODULE_20__["default"], {})
      }))]
    });
  };

  return Organisms;
}(_molecules_BasePage__WEBPACK_IMPORTED_MODULE_3__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Organisms, "defaultProps", {
  pageName: "Organisms"
});

/* harmony default export */ __webpack_exports__["default"] = (Organisms);

/***/ }),

/***/ "./build/es/ui/pages/PDF.js":
/*!**********************************!*\
  !*** ./build/es/ui/pages/PDF.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-code */ "../react-atomic-organism/packages/organism-react-code/build/es/src/index.js");
/* harmony import */ var _molecules_BasePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../molecules/BasePage */ "./build/es/ui/molecules/BasePage.js");
/* harmony import */ var _organisms_HTMLToCanvans_example__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../organisms/HTMLToCanvans.example */ "./build/es/ui/organisms/HTMLToCanvans.example.js");
/* harmony import */ var _raw_loader_ui_organisms_HTMLToCanvans_example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/HTMLToCanvans.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/HTMLToCanvans.example.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);



var _CodeExample;
/*Base*/




/*Sample*/






var PDF = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(PDF, _BasePage);

  function PDF() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = PDF.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["Fragment"], {
      children: _CodeExample || (_CodeExample = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_HTMLToCanvans_example__WEBPACK_IMPORTED_MODULE_5__["default"],
        header: "PDF Example",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__["jsx"])(_organisms_HTMLToCanvans_example__WEBPACK_IMPORTED_MODULE_4__["default"], {})
      }))
    });
  };

  return PDF;
}(_molecules_BasePage__WEBPACK_IMPORTED_MODULE_3__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(PDF, "defaultProps", {
  pageName: "PDF"
});

/* harmony default export */ __webpack_exports__["default"] = (PDF);

/***/ }),

/***/ "./build/es/ui/pages/Parallax.js":
/*!***************************************!*\
  !*** ./build/es/ui/pages/Parallax.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-atomic-molecule */ "./node_modules/react-atomic-molecule/build/es/src/index.js");
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-code */ "../react-atomic-organism/packages/organism-react-code/build/es/src/index.js");
/* harmony import */ var _molecules_BasePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../molecules/BasePage */ "./build/es/ui/molecules/BasePage.js");
/* harmony import */ var _organisms_ParallaxBackgroundImage_example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../organisms/ParallaxBackgroundImage.example */ "./build/es/ui/organisms/ParallaxBackgroundImage.example.js");
/* harmony import */ var _raw_loader_ui_organisms_ParallaxBackgroundImage_example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/ParallaxBackgroundImage.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/ParallaxBackgroundImage.example.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);



var _CodeExample;


/*Base*/








var Parallax = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Parallax, _BasePage);

  function Parallax(props) {
    var _this;

    _this = _BasePage.call(this, props) || this;
    injects = Object(react_atomic_molecule__WEBPACK_IMPORTED_MODULE_2__["lazyInject"])(injects, InjectStyles);
    return _this;
  }

  var _proto = Parallax.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["Fragment"], {
      children: _CodeExample || (_CodeExample = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_3__["default"], {
        code: _raw_loader_ui_organisms_ParallaxBackgroundImage_example__WEBPACK_IMPORTED_MODULE_6__["default"],
        header: "Parallax Example",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__["jsx"])(_organisms_ParallaxBackgroundImage_example__WEBPACK_IMPORTED_MODULE_5__["default"], {})
      }))
    });
  };

  return Parallax;
}(_molecules_BasePage__WEBPACK_IMPORTED_MODULE_4__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Parallax, "defaultProps", {
  pageName: "Parallax",
  tplProps: {
    className: "Parallax"
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Parallax);
var injects;
var InjectStyles = {
  doc: [{
    paddingBottom: "150vh !important"
  }, "div#doc.Parallax"]
};

/***/ }),

/***/ "./build/es/ui/pages/Popup.js":
/*!************************************!*\
  !*** ./build/es/ui/pages/Popup.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-code */ "../react-atomic-organism/packages/organism-react-code/build/es/src/index.js");
/* harmony import */ var _molecules_BasePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../molecules/BasePage */ "./build/es/ui/molecules/BasePage.js");
/* harmony import */ var _organisms_Popup_example__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../organisms/Popup.example */ "./build/es/ui/organisms/Popup.example.js");
/* harmony import */ var _raw_loader_ui_organisms_Popup_example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/Popup.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Popup.example.jsx");
/* harmony import */ var _organisms_FullScreen_example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/FullScreen.example */ "./build/es/ui/organisms/FullScreen.example.js");
/* harmony import */ var _raw_loader_ui_organisms_FullScreen_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/FullScreen.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FullScreen.example.jsx");
/* harmony import */ var _organisms_Spotlight_example__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../organisms/Spotlight.example */ "./build/es/ui/organisms/Spotlight.example.js");
/* harmony import */ var _raw_loader_ui_organisms_Spotlight_example__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/Spotlight.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Spotlight.example.jsx");
/* harmony import */ var _organisms_AlertsNotifier_example__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../organisms/AlertsNotifier.example */ "./build/es/ui/organisms/AlertsNotifier.example.js");
/* harmony import */ var _raw_loader_ui_organisms_AlertsNotifier_example__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/AlertsNotifier.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AlertsNotifier.example.jsx");
/* harmony import */ var _organisms_WindowOffset_example__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../organisms/WindowOffset.example */ "./build/es/ui/organisms/WindowOffset.example.js");
/* harmony import */ var _raw_loader_ui_organisms_WindowOffset_example__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/WindowOffset.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/WindowOffset.example.jsx");
/* harmony import */ var _organisms_ReshowMessage_example__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../organisms/ReshowMessage.example */ "./build/es/ui/organisms/ReshowMessage.example.js");
/* harmony import */ var _raw_loader_ui_organisms_ReshowMessage_example__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/ReshowMessage.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/ReshowMessage.example.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__);



var _CodeExample, _CodeExample2, _CodeExample3, _CodeExample4, _CodeExample5, _CodeExample6;
/*Base*/




/*Sample*/

















var Popup = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Popup, _BasePage);

  function Popup() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = Popup.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["Fragment"], {
      children: [_CodeExample || (_CodeExample = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_Popup_example__WEBPACK_IMPORTED_MODULE_5__["default"],
        header: "Popup Example",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_organisms_Popup_example__WEBPACK_IMPORTED_MODULE_4__["default"], {})
      })), _CodeExample2 || (_CodeExample2 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_FullScreen_example__WEBPACK_IMPORTED_MODULE_7__["default"],
        header: "Full Screen Example",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_organisms_FullScreen_example__WEBPACK_IMPORTED_MODULE_6__["default"], {})
      })), _CodeExample3 || (_CodeExample3 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_AlertsNotifier_example__WEBPACK_IMPORTED_MODULE_11__["default"],
        header: "Alerts Notifier Example",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_organisms_AlertsNotifier_example__WEBPACK_IMPORTED_MODULE_10__["default"], {})
      })), _CodeExample4 || (_CodeExample4 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_WindowOffset_example__WEBPACK_IMPORTED_MODULE_13__["default"],
        header: "Detect Window Offset Example",
        id: "get-window-offset",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_organisms_WindowOffset_example__WEBPACK_IMPORTED_MODULE_12__["default"], {})
      })), _CodeExample5 || (_CodeExample5 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_Spotlight_example__WEBPACK_IMPORTED_MODULE_9__["default"],
        header: "Spotlight Example",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_organisms_Spotlight_example__WEBPACK_IMPORTED_MODULE_8__["default"], {})
      })), _CodeExample6 || (_CodeExample6 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_ReshowMessage_example__WEBPACK_IMPORTED_MODULE_15__["default"],
        header: "Reshow Message Example",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_16__["jsx"])(_organisms_ReshowMessage_example__WEBPACK_IMPORTED_MODULE_14__["default"], {})
      }))]
    });
  };

  return Popup;
}(_molecules_BasePage__WEBPACK_IMPORTED_MODULE_3__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Popup, "defaultProps", {
  pageName: "Popup"
});

/* harmony default export */ __webpack_exports__["default"] = (Popup);

/***/ }),

/***/ "./build/es/ui/pages/Tomato.js":
/*!*************************************!*\
  !*** ./build/es/ui/pages/Tomato.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var _molecules_BasePage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../molecules/BasePage */ "./build/es/ui/molecules/BasePage.js");
/* harmony import */ var _organisms_TomatoApp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../organisms/TomatoApp */ "./build/es/ui/organisms/TomatoApp.js");
/* harmony import */ var _organisms_Sortable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../organisms/Sortable */ "./build/es/ui/organisms/Sortable.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);



var _TomatoApp, _Sortable;
/*Base*/



/*Sample*/







var Tomato = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Tomato, _BasePage);

  function Tomato() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = Tomato.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
      children: [_TomatoApp || (_TomatoApp = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_organisms_TomatoApp__WEBPACK_IMPORTED_MODULE_3__["default"], {})), _Sortable || (_Sortable = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_organisms_Sortable__WEBPACK_IMPORTED_MODULE_4__["default"], {}))]
    });
  };

  return Tomato;
}(_molecules_BasePage__WEBPACK_IMPORTED_MODULE_2__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Tomato, "defaultProps", {
  pageName: "Tomato"
});

/* harmony default export */ __webpack_exports__["default"] = (Tomato);

/***/ }),

/***/ "./build/es/ui/pages/Video.js":
/*!************************************!*\
  !*** ./build/es/ui/pages/Video.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/inheritsLoose */ "./node_modules/reshow-runtime/es/helpers/inheritsLoose.js");
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");
/* harmony import */ var organism_react_code__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! organism-react-code */ "../react-atomic-organism/packages/organism-react-code/build/es/src/index.js");
/* harmony import */ var _molecules_BasePage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../molecules/BasePage */ "./build/es/ui/molecules/BasePage.js");
/* harmony import */ var _organisms_YouTubeRWD_example__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../organisms/YouTubeRWD.example */ "./build/es/ui/organisms/YouTubeRWD.example.js");
/* harmony import */ var _raw_loader_ui_organisms_YouTubeRWD_example__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/YouTubeRWD.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/YouTubeRWD.example.jsx");
/* harmony import */ var _organisms_QQVideo_example__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisms/QQVideo.example */ "./build/es/ui/organisms/QQVideo.example.js");
/* harmony import */ var _raw_loader_ui_organisms_QQVideo_example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! raw-loader!../../../../ui/organisms/QQVideo.example */ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/QQVideo.example.jsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);



var _CodeExample, _CodeExample2;
/*Base*/












var Video = /*#__PURE__*/function (_BasePage) {
  Object(reshow_runtime_es_helpers_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(Video, _BasePage);

  function Video() {
    return _BasePage.apply(this, arguments) || this;
  }

  var _proto = Video.prototype;

  _proto.render = function render() {
    return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxs"])(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["Fragment"], {
      children: [_CodeExample || (_CodeExample = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_YouTubeRWD_example__WEBPACK_IMPORTED_MODULE_5__["default"],
        header: "YouTube RWD player",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_organisms_YouTubeRWD_example__WEBPACK_IMPORTED_MODULE_4__["default"], {})
      })), _CodeExample2 || (_CodeExample2 = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(organism_react_code__WEBPACK_IMPORTED_MODULE_2__["default"], {
        code: _raw_loader_ui_organisms_QQVideo_example__WEBPACK_IMPORTED_MODULE_7__["default"],
        header: "v.qq.com player",
        children: /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__["jsx"])(_organisms_QQVideo_example__WEBPACK_IMPORTED_MODULE_6__["default"], {})
      }))]
    });
  };

  return Video;
}(_molecules_BasePage__WEBPACK_IMPORTED_MODULE_3__["default"]);

Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(Video, "defaultProps", {
  pageName: "Video"
});

/* harmony default export */ __webpack_exports__["default"] = (Video);

/***/ }),

/***/ "./build/es/ui/pages/index.js":
/*!************************************!*\
  !*** ./build/es/ui/pages/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow */ "./node_modules/reshow/build/es/src/index.js");
/* harmony import */ var reshow_url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reshow-url */ "./node_modules/reshow-url/build/es/src/index.js");
/* harmony import */ var organism_react_popup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-popup */ "./node_modules/organism-react-popup/build/es/src/index.js");
/* harmony import */ var organism_react_progress__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! organism-react-progress */ "./node_modules/organism-react-progress/build/es/src/index.js");
/* harmony import */ var organism_react_i13n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! organism-react-i13n */ "./node_modules/organism-react-i13n/build/es/src/index.js");
/* harmony import */ var _templates_Doc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../templates/Doc */ "./build/es/ui/templates/Doc.js");
/* harmony import */ var _pages_Atoms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/Atoms */ "./build/es/ui/pages/Atoms.js");
/* harmony import */ var _pages_Molecules__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pages/Molecules */ "./build/es/ui/pages/Molecules.js");
/* harmony import */ var _pages_Organisms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../pages/Organisms */ "./build/es/ui/pages/Organisms.js");
/* harmony import */ var _pages_Icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../pages/Icons */ "./build/es/ui/pages/Icons.js");
/* harmony import */ var _pages_List__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../pages/List */ "./build/es/ui/pages/List.js");
/* harmony import */ var _pages_Carousel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pages/Carousel */ "./build/es/ui/pages/Carousel.js");
/* harmony import */ var _pages_D3__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pages/D3 */ "./build/es/ui/pages/D3.js");
/* harmony import */ var _pages_D3UmlPerf__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../pages/D3UmlPerf */ "./build/es/ui/pages/D3UmlPerf.js");
/* harmony import */ var _pages_Animation__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../pages/Animation */ "./build/es/ui/pages/Animation.js");
/* harmony import */ var _pages_Popup__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../pages/Popup */ "./build/es/ui/pages/Popup.js");
/* harmony import */ var _pages_Video__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../pages/Video */ "./build/es/ui/pages/Video.js");
/* harmony import */ var _pages_Parallax__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../pages/Parallax */ "./build/es/ui/pages/Parallax.js");
/* harmony import */ var _pages_Code__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../pages/Code */ "./build/es/ui/pages/Code.js");
/* harmony import */ var _pages_AsciiDoc__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../pages/AsciiDoc */ "./build/es/ui/pages/AsciiDoc.js");
/* harmony import */ var _pages_GrapesJs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../pages/GrapesJs */ "./build/es/ui/pages/GrapesJs.js");
/* harmony import */ var _pages_PDF__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../pages/PDF */ "./build/es/ui/pages/PDF.js");
/* harmony import */ var _pages_JSON__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../pages/JSON */ "./build/es/ui/pages/JSON.js");
/* harmony import */ var _pages_Tomato__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../pages/Tomato */ "./build/es/ui/pages/Tomato.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__);


var _PageLoadProgressHand, _I13nElement, _ReshowMessage, _PopupPool;



























var themes = {
  Atoms: _pages_Atoms__WEBPACK_IMPORTED_MODULE_7__["default"],
  Molecules: _pages_Molecules__WEBPACK_IMPORTED_MODULE_8__["default"],
  Organisms: _pages_Organisms__WEBPACK_IMPORTED_MODULE_9__["default"],
  D3: _pages_D3__WEBPACK_IMPORTED_MODULE_13__["default"],
  D3UmlPerf: _pages_D3UmlPerf__WEBPACK_IMPORTED_MODULE_14__["default"],
  Icons: _pages_Icons__WEBPACK_IMPORTED_MODULE_10__["default"],
  List: _pages_List__WEBPACK_IMPORTED_MODULE_11__["default"],
  Carousel: _pages_Carousel__WEBPACK_IMPORTED_MODULE_12__["default"],
  Animation: _pages_Animation__WEBPACK_IMPORTED_MODULE_15__["default"],
  Popup: _pages_Popup__WEBPACK_IMPORTED_MODULE_16__["default"],
  Parallax: _pages_Parallax__WEBPACK_IMPORTED_MODULE_18__["default"],
  Video: _pages_Video__WEBPACK_IMPORTED_MODULE_17__["default"],
  Code: _pages_Code__WEBPACK_IMPORTED_MODULE_19__["default"],
  AsciiDoc: _pages_AsciiDoc__WEBPACK_IMPORTED_MODULE_20__["default"],
  GrapesJs: _pages_GrapesJs__WEBPACK_IMPORTED_MODULE_21__["default"],
  PDF: _pages_PDF__WEBPACK_IMPORTED_MODULE_22__["default"],
  JSON: _pages_JSON__WEBPACK_IMPORTED_MODULE_23__["default"],
  Tomato: _pages_Tomato__WEBPACK_IMPORTED_MODULE_24__["default"]
};

var Index = function Index(props) {
  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__["jsx"])(reshow__WEBPACK_IMPORTED_MODULE_1__["Return"], {
    initStates: ['tplProps'],
    children: function children(props) {
      var tplProps = props.tplProps;
      return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__["jsxs"])(_templates_Doc__WEBPACK_IMPORTED_MODULE_6__["default"], Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, tplProps), {}, {
        children: [/*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__["jsx"])(reshow_url__WEBPACK_IMPORTED_MODULE_2__["ClientRoute"], Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props), {}, {
          themes: themes,
          defaultThemePath: "Atoms"
        })), _PageLoadProgressHand || (_PageLoadProgressHand = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__["jsx"])(organism_react_progress__WEBPACK_IMPORTED_MODULE_4__["PageLoadProgressHandler"], {
          ajax: true
        })), _I13nElement || (_I13nElement = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__["jsx"])(organism_react_i13n__WEBPACK_IMPORTED_MODULE_5__["I13nElement"], {})), _ReshowMessage || (_ReshowMessage = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__["jsx"])(reshow__WEBPACK_IMPORTED_MODULE_1__["ReshowMessage"], {})), _PopupPool || (_PopupPool = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_25__["jsx"])(organism_react_popup__WEBPACK_IMPORTED_MODULE_3__["PopupPool"], {}))]
      }));
    }
  });
};

_c = Index;
/* harmony default export */ __webpack_exports__["default"] = (Index);

var _c;

$RefreshReg$(_c, "Index");

/***/ }),

/***/ "./build/es/ui/templates/Doc.js":
/*!**************************************!*\
  !*** ./build/es/ui/templates/Doc.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__react_refresh_utils__, module) {/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectWithoutPropertiesLoose */ "./node_modules/reshow-runtime/es/helpers/objectWithoutPropertiesLoose.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var organism_react_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! organism-react-navigation */ "./node_modules/organism-react-navigation/build/es/src/index.js");
/* harmony import */ var _molecules_Menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../molecules/Menu */ "./build/es/ui/molecules/Menu.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);



var _Menu;

var _excluded = ["children"];




var DocTemplate = Object(organism_react_navigation__WEBPACK_IMPORTED_MODULE_3__["getDocTemplate"])({
  sideWidth: 160,
  active: true
});

var Doc = function Doc(_ref) {
  var children = _ref.children,
      props = Object(reshow_runtime_es_helpers_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, _excluded);

  return /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(DocTemplate, Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props), {}, {
    body: children,
    menu: _Menu || (_Menu = /*#__PURE__*/Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__["jsx"])(_molecules_Menu__WEBPACK_IMPORTED_MODULE_4__["default"], {}))
  }));
};

_c = Doc;
/* harmony default export */ __webpack_exports__["default"] = (Doc);

var _c;

$RefreshReg$(_c, "Doc");

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/reshow-app/webpack/refresh/runtime/utils.js */ "./node_modules/reshow-app/webpack/refresh/runtime/utils.js"), __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AjaxDownload.example.jsx":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AjaxDownload.example.jsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\nimport { PageLoadProgressHandler } from \"organism-react-progress\";\nimport { ajaxDispatch } from \"organism-react-ajax\";\nimport { Button } from \"react-atomic-molecule\";\nimport { download } from \"ajax-save\";\n\nconst AjaxDownloadExample = (props) => {\n  const url =\n    \"https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg\";\n  return (\n    <Button\n      onClick={() => {\n        ajaxDispatch(\"ajaxGet\", {\n          responseType: [\"blob\"],\n          url,\n          callback: (json, text, o) => {\n            download(o.body, url.split(\"/\").splice(-1)[0]);\n          },\n        });\n      }}\n    >\n      Ajax Download\n    </Button>\n  );\n};\n\nexport default AjaxDownloadExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AlertsNotifier.example.jsx":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AlertsNotifier.example.jsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { PureComponent } from \"react\";\n\nimport { AlertsNotifier, PopupClick } from \"organism-react-popup\";\n\nclass AlertsNotifierExample extends PureComponent {\n  render() {\n    return (\n      <PopupClick\n        style={Styles.click}\n        popup={() => (\n          <AlertsNotifier\n            position=\"bottom\"\n            alerts={[\n              {\n                type: \"info\",\n                message: \"test\",\n              },\n            ]}\n          />\n        )}\n        component={<a />}\n      >\n        alert\n      </PopupClick>\n    );\n  }\n}\n\nexport default AlertsNotifierExample;\n\nconst Styles = {\n  click: {\n    color: \"blue\",\n    textDecoration: \"underline\",\n  },\n};\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Animation.example.jsx":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Animation.example.jsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { Component, cloneElement } from \"react\";\nimport Animate from \"organism-react-animate\";\n\nconst hello = <div>Hello world!!</div>;\n\nclass AnimationExample extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      dom: hello,\n    };\n  }\n\n  render() {\n    return (\n      <div>\n        <Animate\n          appear=\"fadeInRight-3000\"\n          enter=\"fadeInRight-3000\"\n          leave=\"fadeOutRight-1000\"\n        >\n          {this.state.dom}\n        </Animate>\n        <a\n          href=\"#\"\n          style={{ marginLeft: \"10px\" }}\n          onClick={((e) => {\n            e.preventDefault();\n            this.setState({\n              dom: null,\n            });\n          }).bind(this)}\n        >\n          leave\n        </a>\n\n        <a\n          href=\"#\"\n          style={{ marginLeft: \"10px\" }}\n          onClick={((e) => {\n            e.preventDefault();\n            this.setState({\n              dom: hello,\n            });\n          }).bind(this)}\n        >\n          enter\n        </a>\n      </div>\n    );\n  }\n}\n\nexport default AnimationExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AnimationDelay.example.jsx":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AnimationDelay.example.jsx ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { PureComponent } from \"react\";\nimport Animate from \"organism-react-animate\";\n\nconst foo = <div>Hello</div>;\nconst bar = <div>world!!</div>;\n\nclass AnimationDelayExample extends PureComponent {\n  constructor(props) {\n    super(props);\n    this.state = {\n      foo,\n      bar,\n    };\n  }\n\n  render() {\n    return (\n      <div>\n        <Animate\n          appear=\"fadeInRight-3000\"\n          enter=\"fadeInRight-3000\"\n          leave=\"fadeOutRight-1000\"\n        >\n          {this.state.foo}\n        </Animate>\n        <Animate\n          appear=\"fadeInRight-3000-500\"\n          enter=\"fadeInRight-3000-500\"\n          leave=\"fadeOutRight-1000-500\"\n        >\n          {this.state.bar}\n        </Animate>\n        <a\n          href=\"#\"\n          style={{ marginLeft: \"10px\" }}\n          onClick={((e) => {\n            e.preventDefault();\n            this.setState({\n              foo: null,\n              bar: null,\n            });\n          }).bind(this)}\n        >\n          leave\n        </a>\n\n        <a\n          href=\"#\"\n          style={{ marginLeft: \"10px\" }}\n          onClick={((e) => {\n            e.preventDefault();\n            this.setState({\n              foo,\n              bar,\n            });\n          }).bind(this)}\n        >\n          enter\n        </a>\n      </div>\n    );\n  }\n}\n\nexport default AnimationDelayExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AnimationReplace.example.jsx":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AnimationReplace.example.jsx ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { PureComponent } from \"react\";\n\n/**\n * Production please use\n * import Animate from \"organism-react-animate\"\n */\nimport { Replace } from \"organism-react-animate\";\n\nclass AnimationReplaceExample extends PureComponent {\n  render() {\n    return (\n      <Replace\n        enter=\"fadeInRight-2000\"\n        leave=\"fadeOutRight-1000\"\n        style={{ minHeight: 30, overflow: \"hidden\" }}\n      >\n        <div style={{ background: \"#f4cc70\" }}>1</div>\n        <div style={{ background: \"#de7a22\" }}>2</div>\n        <div style={{ background: \"#20948b\" }}>3</div>\n      </Replace>\n    );\n  }\n}\n\nexport default AnimationReplaceExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AsciiDoc.example.jsx":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/AsciiDoc.example.jsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { PureComponent } from \"react\";\n\nimport Asciidoc from \"organism-react-asciidoc\";\n\nconst adoc = `\n:toc:\n:toc-placement!:\ntoc::[]\n\n= h1 - test\ntest\n\n== h2 - test2\n* Hello *world*\n\n== h2 - test3\n- [ ] option1\n- [*] option1\n`;\n\nclass AsciidocDemo extends PureComponent {\n  render() {\n    return <Asciidoc options={{ doctype: \"book\" }}>{adoc}</Asciidoc>;\n  }\n}\n\nexport default AsciidocDemo;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CarouselAnimation.example.jsx":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CarouselAnimation.example.jsx ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\nimport { Image } from \"react-atomic-molecule\";\nimport { Carousel, CarouselAnimation } from \"organism-react-carousel\";\n\nconst CarouselAnimationExample = (props) => {\n  return (\n    <CarouselAnimation\n      carouselAttr={{\n        style: Styles.carousel,\n      }}\n      carouselListStyle={Styles.carouselList}\n      style={Styles.container}\n    >\n      <Carousel>\n        <img\n          style={Styles.img}\n          src=\"https://c1.staticflickr.com/9/8567/16584613141_d984a3680a_b.jpg\"\n        />\n      </Carousel>\n      <Carousel>\n        <Image\n          style={Styles.img}\n          src=\"https://source.unsplash.com/random\"\n        />\n      </Carousel>\n      <Carousel>3</Carousel>\n      <Carousel>4</Carousel>\n      <Carousel>5</Carousel>\n    </CarouselAnimation>\n  );\n};\n\nexport default CarouselAnimationExample;\n\nconst height = 300;\n\nconst Styles = {\n  container: {\n    margin: \"0 10%\",\n  },\n  carouselList: {\n    minHeight: height + 5,\n  },\n  carousel: {\n    width: \"100%\",\n    height,\n    background: \"#00558B\",\n  },\n  img: {\n    maxWidth: \"100%\",\n    maxHeight: \"100%\",\n    verticalAlign: \"bottom\",\n  },\n};\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CarouselAnimationHideThumb.example.jsx":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CarouselAnimationHideThumb.example.jsx ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\nimport { Carousel, CarouselAnimation } from \"organism-react-carousel\";\n\nconst CarouselAnimationExample = (props) => {\n  return (\n    <CarouselAnimation\n      carouselAttr={{\n        style: Styles.carousel,\n      }}\n      carouselListStyle={Styles.carouselList}\n      style={Styles.container}\n      hideThumb\n    >\n      <Carousel>\n        <img\n          style={Styles.img}\n          src=\"https://c1.staticflickr.com/9/8567/16584613141_d984a3680a_b.jpg\"\n        />\n      </Carousel>\n      <Carousel>2</Carousel>\n      <Carousel>3</Carousel>\n      <Carousel>4</Carousel>\n      <Carousel>5</Carousel>\n    </CarouselAnimation>\n  );\n};\n\nexport default CarouselAnimationExample;\n\nconst height = 300;\n\nconst Styles = {\n  container: {\n    margin: \"0 10%\",\n  },\n  carouselList: {\n    minHeight: height + 5,\n  },\n  carousel: {\n    width: \"100%\",\n    height,\n    background: \"#00558B\",\n  },\n  img: {\n    maxWidth: \"100%\",\n    verticalAlign: \"bottom\",\n  },\n};\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CarouselSlide.example.jsx":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CarouselSlide.example.jsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\nimport { Carousel, CarouselSlide } from \"organism-react-carousel\";\n\nconst CarouselSlideExample = (props) => {\n  return (\n    <CarouselSlide\n      carouselAttr={{\n        style: Styles.carousel,\n      }}\n    >\n      <Carousel>\n        <img\n          style={Styles.img}\n          src=\"https://c1.staticflickr.com/9/8567/16584613141_d984a3680a_b.jpg\"\n        />\n      </Carousel>\n      <Carousel>2</Carousel>\n      <Carousel>3</Carousel>\n      <Carousel>4</Carousel>\n      <Carousel>5</Carousel>\n    </CarouselSlide>\n  );\n};\n\nexport default CarouselSlideExample;\n\nconst Styles = {\n  carousel: {\n    width: 300,\n    height: 300,\n    background: \"#00558B\",\n  },\n};\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Checkbox.example.jsx":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Checkbox.example.jsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { PureComponent } from \"react\";\n\nimport { Form } from \"react-atomic-molecule\";\nimport { Checkbox } from \"react-atomic-organism\";\n\nclass CheckboxExample extends PureComponent {\n  render() {\n    return (\n      <Form>\n        <Checkbox />\n        <Checkbox type=\"radio\" />\n        <Checkbox toggle />\n        <Checkbox slider />\n      </Form>\n    );\n  }\n}\n\nexport default CheckboxExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CodeEditor.example.jsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CodeEditor.example.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\n\nimport { openCodeEditor } from \"organism-react-codeeditor\";\n\nconst CodeEditorExample = (props) => {\n  return <button onClick={() => openCodeEditor()}>open</button>;\n};\n\nexport default CodeEditorExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CodeExample.example.jsx":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/CodeExample.example.jsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\n\n/**\n * Production please use\n * import CodeExample from 'organism-react-code'\n */\nimport CodeExample from \"organism-react-code\";\n\n/**\n * Your source code.\n * npm i raw-loader\n */\nimport code from \"!raw-loader!../../../../ui/organisms/CodeExample.example\";\n\nconst CodeExampleExample = (props) => (\n  <CodeExample\n    code={code}\n    header=\"Test Header\"\n    git=\"react-atomic/react-atomic-organism/tree/master/packages/organism-react-code/\"\n    npm=\"organism-react-code\"\n  >\n    <div>Test Demo Area</div>\n  </CodeExample>\n);\n\nexport default CodeExampleExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3AreaChart.example.jsx":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3AreaChart.example.jsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\nimport { AreaChart } from \"organism-react-d3-axis-chart\";\n\nconst data = [\n  {\n    values: [\n      {\n        x: \"2019-01\",\n        y: 100,\n      },\n      {\n        x: \"2019-02\",\n        y: 450,\n      },\n      {\n        x: \"2019-03\",\n        y: 450,\n      },\n      {\n        x: \"2019-04\",\n        y: 0,\n      },\n      {\n        x: \"2019-05\",\n        y: 0,\n      },\n    ],\n  },\n];\n\nconst D3AreaChart = (props) => {\n  return <AreaChart data={data} style={{ maxHeight: 450 }} />;\n};\n\nexport default D3AreaChart;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3BarChart.example.jsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3BarChart.example.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\nimport { BarChart } from \"organism-react-d3-axis-chart\";\n\nconst D3BarChart = (props) => {\n  let data = [\n    {\n      values: [\n        {\n          x: \"2013-01\",\n          y: 53,\n        },\n        {\n          x: \"2013-02\",\n          y: 165,\n        },\n        {\n          x: \"2013-03\",\n          y: 269,\n        },\n      ],\n    },\n  ];\n\n  return <BarChart data={data} style={{ maxHeight: 450 }} />;\n};\n\nexport default D3BarChart;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3LineChart.example.jsx":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3LineChart.example.jsx ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\nimport { LineChart } from \"organism-react-d3-axis-chart\";\n\nconst D3LineChart = (props) => {\n  let data = [\n    {\n      values: [\n        {\n          x: \"2013-01\",\n          y: 100,\n        },\n        {\n          x: \"2013-02\",\n          y: 450,\n        },\n        {\n          x: \"2013-01\",\n          y: 450,\n        },\n      ],\n    },\n  ];\n  return (\n    <LineChart\n      data={data}\n      style={{ maxHeight: 450 }}\n      hideAxis={true}\n      thresholds={[200]}\n    />\n  );\n};\n\nexport default D3LineChart;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3PieChart.example.jsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3PieChart.example.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\nimport PieChart from \"organism-react-d3-piechart\";\n\nconst D3PieChartExample = (props) => {\n  let data = [\n    { value: 10, label: \"xxx\" },\n    { value: 30, label: \"yyy\" },\n  ];\n  return <PieChart data={data} style={{ maxWidth: 300 }} unit=\"\" />;\n};\n\nexport default D3PieChartExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3Uml.example.jsx":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3Uml.example.jsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { useRef, useState } from \"react\";\n\nimport { UMLGraph } from \"organism-react-d3-uml\";\nimport { Form, Field, Button } from \"react-atomic-molecule\";\nimport { Checkbox } from \"react-atomic-organism\";\n\nconst data = {\n  tables: [\n    {\n      name: \"table1\",\n      cols: [\"t1-col1\", \"t1-col2\"],\n    },\n    {\n      name: \"table2\",\n      cols: [\"t2-col1\", \"t2-col2\"],\n    },\n  ],\n  conns: [\n    {\n      from: {\n        table: \"table1\",\n        col: \"t1-col1\",\n      },\n      to: {\n        table: \"table2\",\n        col: \"t2-col2\",\n      },\n    },\n  ],\n};\n\nconst D3UmlExample = () => {\n  const uml = useRef();\n  const [isDisableCurve, setIsDisableCurve] = useState(false);\n  const handleUml = (el) => (uml.current = el);\n  const handleUpdate = (e) => {\n    const t = e.currentTarget || {};\n    const fm = t.form;\n    uml.current.zoom.setXYK({\n      x: fm.x.value || null,\n      y: fm.y.value || null,\n      k: fm.k.value || null,\n    });\n  };\n  const handleZoom = (e) => {\n    //  console.log(e.zoom.getXYK());\n  };\n  let isDisableDel;\n  let isDisableMove;\n  return (\n    <div>\n      <UMLGraph\n        onZoom={handleZoom}\n        ref={handleUml}\n        data={data}\n        lineDefaultProps={{curve: !isDisableCurve}}\n        connsLocator={(d) => d.conns}\n        connFromBoxGroupLocator={(d) => d.from.table}\n        connFromBoxLocator={(d) => d.from.col}\n        connToBoxGroupLocator={(d) => d.to.table}\n        connToBoxLocator={(d) => d.to.col}\n        onBoxWillDrag={(e) => {\n          return !isDisableMove.getChecked().input;\n        }}\n        onLineDel={(e) => {\n          console.log({ e });\n          return !isDisableDel.getChecked().input;\n        }}\n      />\n      <Form style={{ boxSizing: \"border-box\" }} className=\"equal width\">\n        <Field>\n          <Field atom=\"input\" label=\"x\" name=\"x\" />\n          <Field atom=\"input\" label=\"y\" name=\"y\" />\n          <Field atom=\"input\" label=\"k\" name=\"k\" />\n        </Field>\n        <Field>\n          <Checkbox\n            toggle\n            label=\"disable curve\"\n            onChange={({checked}) => {setIsDisableCurve(checked)}}\n          />\n          <Checkbox\n            label=\"disable line delete\"\n            ref={(el) => (isDisableDel = el)}\n          />\n          <Checkbox\n            label=\"disable node move\"\n            ref={(el) => (isDisableMove = el)}\n          />\n        </Field>\n        <Button onClick={handleUpdate}>update</Button>\n      </Form>\n    </div>\n  );\n};\n\nexport default D3UmlExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3UmlPerf.example.jsx":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/D3UmlPerf.example.jsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { useRef, useState } from \"react\";\n\nimport { UMLGraph } from \"organism-react-d3-uml\";\nimport { Form, Field, Button } from \"react-atomic-molecule\";\nimport { Checkbox } from \"react-atomic-organism\";\n\nconst data = {\n  tables: [\n  ],\n  conns: [\n    {\n      from: {\n        table: \"table1\",\n        col: \"t1-col1\",\n      },\n      to: {\n        table: \"table2\",\n        col: \"t2-col2\",\n      },\n    },\n  ],\n};\n\nfor (let i = 1; i < 300; i++) {\n  data.tables.push(\n    {\n      name: `table${i}`,\n      cols: [`t${i}-col1`, `t${i}-col2`],\n    },\n  );\n}\n\nconst D3UmlPerfExample = () => {\n  const uml = useRef();\n  const [isDisableCurve, setIsDisableCurve] = useState(false);\n  const handleUml = (el) => (uml.current = el);\n  const handleUpdate = (e) => {\n    const t = e.currentTarget || {};\n    const fm = t.form;\n    uml.current.zoom.setXYK({\n      x: fm.x.value || null,\n      y: fm.y.value || null,\n      k: fm.k.value || null,\n    });\n  };\n  const handleZoom = (e) => {\n    //  console.log(e.zoom.getXYK());\n  };\n  let isDisableDel;\n  let isDisableMove;\n  return (\n    <div>\n      <UMLGraph\n        style={{height: \"50vh\"}}\n        onZoom={handleZoom}\n        ref={handleUml}\n        data={data}\n        lineDefaultProps={{curve: !isDisableCurve}}\n        connsLocator={(d) => d.conns}\n        connFromBoxGroupLocator={(d) => d.from.table}\n        connFromBoxLocator={(d) => d.from.col}\n        connToBoxGroupLocator={(d) => d.to.table}\n        connToBoxLocator={(d) => d.to.col}\n        onBoxWillDrag={(e) => {\n          return !isDisableMove.getChecked().input;\n        }}\n        onLineDel={(e) => {\n          console.log({ e });\n          return !isDisableDel.getChecked().input;\n        }}\n      />\n      <Form style={{ boxSizing: \"border-box\" }} className=\"equal width\">\n        <Field>\n          <Field atom=\"input\" label=\"x\" name=\"x\" />\n          <Field atom=\"input\" label=\"y\" name=\"y\" />\n          <Field atom=\"input\" label=\"k\" name=\"k\" />\n        </Field>\n        <Field>\n          <Checkbox\n            toggle\n            label=\"disable curve\"\n            onChange={({checked}) => {setIsDisableCurve(checked)}}\n          />\n          <Checkbox\n            label=\"disable line delete\"\n            ref={(el) => (isDisableDel = el)}\n          />\n          <Checkbox\n            label=\"disable node move\"\n            ref={(el) => (isDisableMove = el)}\n          />\n        </Field>\n        <Button onClick={handleUpdate}>update</Button>\n      </Form>\n    </div>\n  );\n};\n\nexport default D3UmlPerfExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Dropzone.example.jsx":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Dropzone.example.jsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { PureComponent } from \"react\";\nimport Dropzone from \"organism-react-dropzone\";\nimport get from \"get-object-value\";\n\nclass DropzoneExample extends PureComponent {\n  state = {\n    urls: [],\n  };\n\n  handleClick = () => {\n    this.dropzone.openDialog();\n  };\n\n  render() {\n    const { urls } = this.state;\n    return (\n      <div>\n        <Dropzone\n          ref={(el) => (this.dropzone = el)}\n          acceptedFiles=\".png, .jpg\"\n          showFiletypeIcon={true}\n          postUrl=\"https://file.io\"\n          djsConfig={{\n            addRemoveLinks: true,\n          }}\n          eventHandlers={{\n            success: (file) => {\n              this.setState(({ urls }) => {\n                const req = get(file, [\"xhr\", \"response\"]);\n                if (req) {\n                  const json = JSON.parse(req);\n                  urls.push(json.link);\n                }\n                return urls;\n              });\n            },\n          }}\n        />\n        <ul>\n          {urls.map((url, key) => (\n            <li key={key}>\n              <a href={url} target=\"_blank\">\n                {url}\n              </a>\n            </li>\n          ))}\n        </ul>\n        <button onClick={this.handleClick}>open</button>\n      </div>\n    );\n  }\n}\n\nexport default DropzoneExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/ErrorForm.example.jsx":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/ErrorForm.example.jsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { useState } from \"react\";\nimport { SemanticUI, Form, Field, Menu, Item } from \"react-atomic-molecule\";\n\nimport { Dropdown, Select, SelectField } from \"organism-react-navigation\";\nimport { Checkbox } from \"react-atomic-organism\";\n\nconst options = [\n  {\n    label: \"Boy\",\n    value: \"boy\",\n  },\n  {\n    label: \"Girl\",\n    value: \"girl\",\n  },\n];\n\nconst DropdownExample = (props) => {\n  const [value, setValue] = useState();\n\n  const MyList = (props) => (\n    <Menu {...props}>\n      <Item onClick={() => setValue(\"Boy\")}>Boy</Item>\n      <Item onClick={() => setValue(\"Girl\")}>Girl</Item>\n    </Menu>\n  );\n\n  return (\n    <Field\n      {...props}\n      inputComponent={\n        <Dropdown style={Styles.dropdown} list={<MyList />}>\n          You-select {value}\n        </Dropdown>\n      }\n    />\n  );\n};\n\nconst ErrorFormExample = () => {\n  const [isError, setIsError] = useState(false);\n\n  const handleChange = (e) => {\n    setIsError(e.checked ? true : false);\n  };\n\n  return (\n    <SemanticUI>\n      <Form messageType={isError ? \"error\" : \"\"}>\n        <DropdownExample\n          messageType={isError ? \"error\" : \"\"}\n          label=\"Dropdown: \"\n        />\n        <SelectField\n          messageType={isError ? \"error\" : \"\"}\n          label=\"Selection: \"\n          options={options}\n          placeholder={\"not-select-yet\"}\n        />\n        <Field>\n          <Checkbox label=\"Error Style\" toggle onChange={handleChange} />\n        </Field>\n      </Form>\n    </SemanticUI>\n  );\n};\n\nexport default ErrorFormExample;\n\nconst Styles = {\n  dropdown: {\n    marginLeft: 10,\n  },\n};\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FBLike.example.jsx":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FBLike.example.jsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\nimport { FBLike } from \"organism-react-facebook\";\n\nconst FBLikeExample = (props) => (\n  <FBLike page=\"https://www.facebook.com/react\" />\n);\n\nexport default FBLikeExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FBPage.example.jsx":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FBPage.example.jsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\nimport { FBPage } from \"organism-react-facebook\";\n\nconst FBPageExample = (props) => {\n  return <FBPage page=\"react\" />;\n};\n\nexport default FBPageExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FixedDataTableList.example.jsx":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FixedDataTableList.example.jsx ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { lazy, PureComponent } from \"react\";\n\nimport { Cell, Column } from \"pmvc_react_list\";\nconst Table = lazy(() => import('pmvc_react_list/fixedDataTable'));\n\nconst rows = [\n  [\"a1\", \"b1\", \"c1\"],\n  [\"a2\", \"b2\", \"c2\"],\n  [\"a3\", \"b3\", \"c3\"],\n  [\"a4\", \"b4\", \"c4\"],\n  [\"a5\", \"b5\", \"c5\"],\n  [\"a6\", \"b6\", \"c6\"],\n];\n\nclass FixedDataTableListExample extends PureComponent {\n  render() {\n    return (\n      <div style={{ width: 350 }}>\n        <Table rows={rows} getColWidth={() => 150} height={150}>\n          <Column\n            header={<Cell>h1</Cell>}\n            cell={({ rowIndex, columnKey: columnIndex }) => {\n              return rows[rowIndex][columnIndex];\n            }}\n          />\n          <Column\n            header={<Cell>h2</Cell>}\n            cell={({ rowIndex, columnKey: columnIndex }) => {\n              return rows[rowIndex][columnIndex];\n            }}\n          />\n          <Column\n            header={<Cell>h3</Cell>}\n            cell={({ rowIndex, columnKey: columnIndex }) => {\n              return rows[rowIndex][columnIndex];\n            }}\n          />\n        </Table>\n      </div>\n    );\n  }\n}\n\nexport default FixedDataTableListExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FullScreen.example.jsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/FullScreen.example.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { PureComponent } from \"react\";\nimport get from \"get-object-value\";\n\nimport { FullScreenExample as FullScreen } from \"organism-react-code\";\n\nclass FullScreenExample extends PureComponent {\n  render() {\n    return (\n      <FullScreen id=\"full-screen-example\" button=\"open full screen\">\n        test\n      </FullScreen>\n    );\n  }\n}\n\nexport default FullScreenExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/GrapesJs.example.jsx":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/GrapesJs.example.jsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\nimport { GrapesJsController } from \"organism-react-grapesjs\";\n\nconst GrapesJsExample = () => (\n  <GrapesJsController style={Styles.container} debug />\n);\n\nexport default GrapesJsExample;\n\nconst Styles = {\n  container: {\n    minHeight: 600,\n  },\n};\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/GridList.example.jsx":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/GridList.example.jsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { PureComponent } from \"react\";\n\nconst rows = [\n  [\"a1\", \"b1\", \"c1\"],\n  [\"a2\", \"b2\", \"c2\"],\n  [\"a3\", \"b3\", \"c3\"],\n  [\"a4\", \"b4\", \"c4\"],\n  [\"a5\", \"b5\", \"c5\"],\n  [\"a6\", \"b6\", \"c6\"],\n];\n\nlet RVGrid = null;\n\nclass GridListExample extends PureComponent {\n  state = {\n    isLoad: false,\n  };\n\n  componentDidMount() {\n    import(\"pmvc_react_list/rv\").then(({ RVGrid: rvGrid }) => {\n      RVGrid = rvGrid;\n      this.setState({ isLoad: true });\n    });\n  }\n\n  render() {\n    const { isLoad } = this.state;\n    let grid = null;\n    if (RVGrid && isLoad) {\n      const className = \"grid\"; // hack for disable const element\n      grid = (\n        <RVGrid\n          className={className}\n          width={200}\n          height={100}\n          rows={rows}\n          style={Styles.container}\n        />\n      );\n    }\n    return grid;\n  }\n}\n\nexport default GridListExample;\n\nconst Styles = {\n  container: {\n    border: \"1px solid #000\",\n  },\n};\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/HTMLToCanvans.example.jsx":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/HTMLToCanvans.example.jsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { useState, useRef } from \"react\";\nimport { Unsafe, Field, Form, Button } from \"react-atomic-molecule\";\n\nimport { HTMLToPDF } from \"organism-react-html2canvas\";\n\nconst HTMLToCanvansExample = (props) => {\n  const [html, setHtml] = useState(\"\");\n\n  const pdf = useRef();\n\n  const handleInput = (e) => {\n    const v = e.currentTarget.value;\n    setHtml(v);\n  };\n\n  const handleClick = (e) => {\n    if (pdf && pdf.current) {\n      pdf.current.download();\n    }\n  };\n\n  const handlePdf = (el) => (pdf.current = el);\n  return (\n    <div>\n      <Form className=\"equal width\" style={{ boxSizing: \"border-box\" }}>\n        <Field atom=\"textarea\" onInput={handleInput} />\n        <Button onClick={handleClick}>Download</Button>\n      </Form>\n      <HTMLToPDF preview autoGenCanvas ref={handlePdf}>\n        <Unsafe>{html}</Unsafe>\n      </HTMLToPDF>\n    </div>\n  );\n};\n\nexport default HTMLToCanvansExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/HtmlTableList.example.jsx":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/HtmlTableList.example.jsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { PureComponent } from \"react\";\n\nimport { Table, Cell, Column } from \"pmvc_react_list\";\n\nconst rows = [\n  [\"a1\", \"b1\", \"c1\"],\n  [\"a2\", \"b2\", \"c2\"],\n  [\"a3\", \"b3\", \"c3\"],\n  [\"a1\", \"b1\", \"c1\"],\n  [\"a2\", \"b2\", \"c2\"],\n  [\"a3\", \"b3\", \"c3\"],\n];\n\nclass HtmlTableListExample extends PureComponent {\n  render() {\n    return (\n      <Table rows={rows}>\n        <Column\n          header={<Cell>h1</Cell>}\n          cell={({ rowIndex, columnIndex }) => {\n            return rows[rowIndex][columnIndex];\n          }}\n        />\n        <Column\n          header={<Cell>h2</Cell>}\n          cell={({ rowIndex, columnIndex }) => {\n            return rows[rowIndex][columnIndex];\n          }}\n        />\n        <Column\n          header={<Cell>h3</Cell>}\n          cell={({ rowIndex, columnIndex }) => {\n            return rows[rowIndex][2];\n          }}\n        />\n      </Table>\n    );\n  }\n}\n\nexport default HtmlTableListExample;\n\nconst Styles = {\n  col: {\n    height: 40,\n  },\n};\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/PageLoadProgressHandler.example.jsx":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/PageLoadProgressHandler.example.jsx ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\nimport { PageLoadProgressHandler } from \"organism-react-progress\";\nimport { Button, InputBox } from \"react-atomic-molecule\";\n\nconst PageLoadProgressHandlerExample = (props) => {\n  let oLoad;\n  let dInput;\n  return (\n    <div>\n      <PageLoadProgressHandler ref={(o) => (oLoad = o)} />\n\n      <div>\n        <Button\n          style={Styles.button}\n          onClick={() => {\n            oLoad.start(100, 800);\n          }}\n        >\n          Start\n        </Button>\n        <Button\n          style={Styles.button}\n          onClick={() => {\n            oLoad.pause();\n          }}\n        >\n          Pause\n        </Button>\n        <Button\n          style={Styles.button}\n          onClick={() => {\n            oLoad.complete();\n          }}\n        >\n          Complete\n        </Button>\n        <Button\n          style={Styles.button}\n          onClick={() => {\n            oLoad.reset();\n          }}\n        >\n          Reset\n        </Button>\n      </div>\n\n      <div>\n        <InputBox\n          leftLabel=\"Pause @\"\n          rightLabel=\"%\"\n          refCb={(o) => (dInput = o)}\n          button={\"Go\"}\n          actionProps={{\n            onClick: () => {\n              oLoad.start(dInput.value);\n            },\n          }}\n          style={Styles.input}\n        />\n      </div>\n    </div>\n  );\n};\n\nexport default PageLoadProgressHandlerExample;\n\nconst Styles = {\n  input: {\n    width: 20,\n  },\n  button: {\n    marginBottom: 10,\n  },\n};\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/PageLoadProgressHandlerWithAjax.example.jsx":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/PageLoadProgressHandlerWithAjax.example.jsx ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\nimport { PageLoadProgressHandler } from \"organism-react-progress\";\nimport { ajaxDispatch } from \"organism-react-ajax\";\nimport { Button } from \"react-atomic-molecule\";\n\nconst PageLoadProgressHandlerExample = (props) => {\n  let url =\n    \"https://raw.githubusercontent.com/react-atomic/react-atomic-ui/master/README.md\";\n  return (\n    <div>\n      <PageLoadProgressHandler ajax={true} />\n\n      <Button\n        onClick={() => {\n          ajaxDispatch({\n            type: \"ajaxGet\",\n            params: {\n              url: url,\n              callback: (json, text, o) => {\n                alert(text);\n              },\n            },\n          });\n        }}\n      >\n        Call Ajax\n      </Button>\n    </div>\n  );\n};\n\nexport default PageLoadProgressHandlerExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Pagination.example.jsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Pagination.example.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { PureComponent } from \"react\";\n\nimport { PaginationController } from \"organism-react-navigation\";\n\nclass PaginationExample extends PureComponent {\n  handlePageChange = ({ begin }) => {\n    this.setState({ begin });\n  };\n\n  render() {\n    const { begin } = this.state || {};\n    return (\n      <PaginationController\n        style={Styles.container}\n        onPageChange={this.handlePageChange}\n        total={500}\n        begin={begin}\n      />\n    );\n  }\n}\n\nexport default PaginationExample;\n\nconst Styles = {\n  container: {\n    textAlign: \"center\",\n  },\n};\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/ParallaxBackgroundImage.example.jsx":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/ParallaxBackgroundImage.example.jsx ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\nimport { ParallaxBackgroundImage } from \"organism-react-parallax\";\n\nconst ParallaxBackgroundImageExample = () => (\n  <ParallaxBackgroundImage\n    style={Styles.container}\n    backgroundImage=\"https://c1.staticflickr.com/9/8621/16732897815_4705c08fe6_h.jpg\"\n  >\n    test\n  </ParallaxBackgroundImage>\n);\n\nexport default ParallaxBackgroundImageExample;\n\nconst Styles = {\n  container: {\n    height: 600,\n    color: \"#fff\",\n    textAlign: \"center\",\n    paddingTop: 200,\n  },\n};\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Popup.example.jsx":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Popup.example.jsx ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { useState } from \"react\";\nimport { Checkbox } from \"react-atomic-organism\";\n\n/**\n * Production please use\n * import {...xxx} from \"organism-react-popup\"\n */\nimport { Dialog, PopupModal, PopupClick } from \"organism-react-popup\";\n\nimport { Button } from \"react-atomic-molecule\";\n\nconst PopupExample = () => {\n  const [backgroundScrollAble, setBackgroundScrollAble] = useState(false);\n  return (\n    <div>\n      <PopupClick\n        style={Styles.click}\n        popup={() => {\n          return <PopupModal backgroundScroll={backgroundScrollAble}>xxx</PopupModal>;\n        }}\n        component={<a />}\n      >\n        show modal\n      </PopupClick>\n\n      <PopupClick\n        style={{ marginLeft: 5 }}\n        popup={<Dialog backgroundScroll={backgroundScrollAble} header=\"Test Header\">Test Dialog</Dialog>}\n        component={<Button />}\n      >\n        show dialog\n      </PopupClick>\n      <Checkbox\n        toggle\n        label=\"Background scrollable\"\n        onChange={({ checked }) => {\n          setBackgroundScrollAble(checked);\n        }}\n      />\n    </div>\n  );\n};\n\nexport default PopupExample;\n\nconst Styles = {\n  click: {\n    color: \"blue\",\n    textDecoration: \"underline\",\n  },\n};\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/QQVideo.example.jsx":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/QQVideo.example.jsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\nimport QQVideo from \"organism-react-qq-video\";\n\nconst QQVideoExample = () => <QQVideo videoId=\"j0792wzb6v8\" />;\n\nexport default QQVideoExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/QueryToJSON.jsx":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/QueryToJSON.jsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { useState } from \"react\";\nimport prettyjson from \"prettyjson\";\n\nimport { Field, Form } from \"react-atomic-molecule\";\n\nimport { FormattedJSON } from \"react-atomic-organism\";\n\nconst QueryToJSON = (props) => {\n  const [json, setJson] = useState(\"\");\n\n  const handleInput = (e) => {\n    const v = e.currentTarget.value;\n    const vArr = [...new URLSearchParams(v)];\n    const nextArr = [];\n    vArr.forEach((item) => {\n      nextArr.push({ [item[0]]: item[1] });\n    });\n    setJson(nextArr);\n  };\n\n  return (\n    <div>\n      <Form className=\"equal width\" style={{ boxSizing: \"border-box\" }}>\n        <Field ui atom=\"textarea\" onInput={handleInput} />\n        <FormattedJSON atom=\"div\">{prettyjson.render(json)}</FormattedJSON>\n      </Form>\n    </div>\n  );\n};\n\nexport default QueryToJSON;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/RTE.example.jsx":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/RTE.example.jsx ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\n// import { Editor } from \"organism-react-rte-writer\";\nconst Editor = () => <div />;\n\nconst RTEExample = () => {\n  return <Editor />;\n};\n\nexport default RTEExample;\n\nconst Styles = {};\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/RadioGroup.example.jsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/RadioGroup.example.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { PureComponent } from \"react\";\n\nimport { Form, Button } from \"react-atomic-molecule\";\nimport { RadioGroup } from \"react-atomic-organism\";\n\nconst options = [\n  {\n    label: \"Boy\",\n    value: \"boy\",\n  },\n  {\n    label: \"Girl\",\n    value: \"girl\",\n  },\n];\n\nclass RadioGroupExample extends PureComponent {\n  state = {\n    value: \"\",\n  };\n  handleChange = () => {\n    this.setState({ value: this.radio.getValue() });\n  };\n\n  render() {\n    const { value } = this.state;\n    return (\n      <Form>\n        <RadioGroup\n          ref={(el) => (this.radio = el)}\n          inline={false}\n          label=\"Sex: \"\n          name=\"sex\"\n          value={value}\n          options={options}\n          onChange={this.handleChange}\n        />\n        <div>Current: {value}</div>\n        <Button onClick={() => this.setState({ value: \"boy\" })}>\n          Set to Boy\n        </Button>\n        <Button onClick={() => this.setState({ value: \"girl\" })}>\n          Set to Girl\n        </Button>\n      </Form>\n    );\n  }\n}\n\nexport default RadioGroupExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/ReactVirtualizedTableList.example.jsx":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/ReactVirtualizedTableList.example.jsx ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { PureComponent } from \"react\";\n\nimport { Cell, Column } from \"pmvc_react_list\";\nimport Table from \"pmvc_react_list/rv\";\n\nconst rows = [\n  [\"a1\", \"b1\", \"c1\"],\n  [\"a2\", \"b2\", \"c2\"],\n  [\"a3\", \"b3\", \"c3\"],\n  [\"a1\", \"b1\", \"c1\"],\n  [\"a2\", \"b2\", \"c2\"],\n  [\"a3\", \"b3\", \"c3\"],\n];\n\nclass ReactVirtualizedTableListExample extends PureComponent {\n  handleClick = (rowIndex) => (ev) => {\n    alert(rowIndex);\n  };\n\n  render() {\n    return (\n      <div style={{ width: \"40%\", height: 150 }}>\n        <Table rows={rows}>\n          <Column\n            header={<Cell>h1</Cell>}\n            cell={({ rowIndex, columnIndex, style }) => (\n              <div style={style} onClick={this.handleClick(rowIndex)}>\n                {rows[rowIndex][columnIndex]}\n              </div>\n            )}\n          />\n          <Column\n            header={<Cell>h2</Cell>}\n            cell={({ rowIndex, columnIndex, style }) => (\n              <div style={style} onClick={this.handleClick(rowIndex)}>\n                {rows[rowIndex][columnIndex]}\n              </div>\n            )}\n          />\n          <Column\n            header={<Cell>h3</Cell>}\n            cell={({ rowIndex, columnIndex, style }) => (\n              <div style={style} onClick={this.handleClick(rowIndex)}>\n                {rows[rowIndex][columnIndex]}\n              </div>\n            )}\n          />\n        </Table>\n      </div>\n    );\n  }\n}\n\nexport default ReactVirtualizedTableListExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/ReshowMessage.example.jsx":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/ReshowMessage.example.jsx ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { PureComponent } from \"react\";\n\nimport { Button } from \"react-atomic-molecule\";\nimport { dispatch, Return } from \"reshow\";\n\nconst DialogResult = ({ dialogReturn }) =>\n  \"undefined\" !== typeof dialogReturn ? \"Dialog: \" + dialogReturn : null;\n\nclass ReshowMessageExample extends PureComponent {\n  handleAddAlert = (e) => {\n    dispatch(\"alert/add\", {\n      message: \"test\",\n    });\n  };\n\n  handleResetAlert = (e) => {\n    dispatch(\"alert/reset\", {\n      alerts: [1, 2, 3],\n    });\n  };\n\n  handleCleanAlert = (e) => {\n    dispatch(\"alert/reset\", {\n      alerts: null,\n    });\n  };\n\n  handleOpenDialog = (e) => {\n    dispatch(\"dialog/start\", {\n      dialog: \"how are u\",\n    });\n  };\n\n  render() {\n    return (\n      <div>\n        <p>\n          <Button onClick={this.handleAddAlert}>Add alert</Button>\n          <Button onClick={this.handleResetAlert}>Reset alert</Button>\n          <Button onClick={this.handleCleanAlert}>Clean all alerts</Button>\n        </p>\n        <p>\n          <Button onClick={this.handleOpenDialog}>Open Dialog</Button>\n          <Return initStates={[\"dialogReturn\"]}>\n            <DialogResult />\n          </Return>\n        </p>\n      </div>\n    );\n  }\n}\n\nexport default ReshowMessageExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Spotlight.example.jsx":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Spotlight.example.jsx ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { PureComponent } from \"react\";\n\nimport { Button } from \"react-atomic-molecule\";\n\nimport { PopupPool } from \"organism-react-popup\";\n\nimport { FullScreenExample } from \"organism-react-code\";\n\nimport Spotlight from \"organism-react-spotlight\";\n\nclass SpotlightExample extends PureComponent {\n  state = {\n    spotlight: false,\n  };\n\n  render() {\n    const { spotlight } = this.state;\n    let thisSpotlight = null;\n    if (spotlight) {\n      thisSpotlight = (\n        <Spotlight\n          toPool=\"spotlight-pool\"\n          targetEl={this.spot}\n          onClose={() => {\n            this.setState({ spotlight: null });\n          }}\n        />\n      );\n    }\n    return (\n      <FullScreenExample\n        button=\"open full screen\"\n        onClose={() => this.setState({ spotlight: null })}\n      >\n        <div ref={(el) => (this.spot = el)} style={Styles.el}>\n          Spotlight\n        </div>\n        <div>\n          <Button\n            onClick={() => {\n              this.setState({\n                spotlight: true,\n              });\n            }}\n          >\n            Try it.\n          </Button>\n        </div>\n        {thisSpotlight}\n        <PopupPool name=\"spotlight-pool\" />\n      </FullScreenExample>\n    );\n  }\n}\n\nexport default SpotlightExample;\n\nconst Styles = {\n  el: {\n    display: \"inline-block\",\n    width: 100,\n    height: 200,\n    margin: 10,\n  },\n};\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/StockChart.example.jsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/StockChart.example.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { PureComponent } from \"react\";\nimport { FullScreenExample as FullScreen } from \"organism-react-code\";\nimport { StockChartCompute } from \"organism-react-stockcharts\";\nimport { ajaxDispatch } from \"organism-react-ajax\";\n\nclass StockChartExample extends PureComponent {\n  state = {\n    data: null,\n  };\n\n  componentDidMount() {\n    ajaxDispatch({\n      type: \"ajaxGet\",\n      params: {\n        url:\n          \"//raw.githubusercontent.com/react-atomic/react-atomic-ui/master/data/stock.json\",\n        callback: (json) => {\n          this.setState({ data: { trades: json } });\n        },\n      },\n    });\n  }\n\n  render() {\n    const { data } = this.state;\n    if (!data) {\n      return null;\n    }\n    return (\n      <FullScreen id=\"full-page-stock-chart\" button=\"open full screen\">\n        <StockChartCompute\n          data={data}\n          tradeRowsLocator={(d) => d.trades}\n          tradeHighLocator={(d) => d.h}\n          tradeLowLocator={(d) => d.l}\n          tradeOpenLocator={(d) => d.o}\n          tradeCloseLocator={(d) => d.c}\n          tradeVolumeLocator={(d) => d.v}\n          tradeDateLocator={(d) => d.t}\n        />\n      </FullScreen>\n    );\n  }\n}\n\nexport default StockChartExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Suggestion.example.jsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/Suggestion.example.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { PureComponent } from \"react\";\n\nimport { Button, SemanticUI } from \"react-atomic-molecule\";\n\nimport { Suggestion } from \"react-atomic-organism\";\n\nconst data = [\"abc\", \"abb\", \"acc\"];\n\nclass SuggestionExample1 extends PureComponent {\n  state = {\n    results: [],\n  };\n\n  handleChange = (e, value) => {\n    if (!value.length) {\n      this.setState({ results: data });\n      return;\n    }\n    const results = [];\n    data.forEach((v, k) => {\n      if (value.length && -1 !== v.indexOf(value)) {\n        results.push(v);\n      }\n    });\n    this.setState({ results });\n  };\n\n  handleItemClick = (e, item) => {\n    this.suggestion.setValue(item);\n  };\n\n  render() {\n    const { results, myValue } = this.state;\n    return (\n      <SemanticUI>\n        <Suggestion\n          ref={(el) => (this.suggestion = el)}\n          onChange={this.handleChange}\n          results={results}\n          onItemClick={this.handleItemClick}\n          value={myValue}\n        />\n        <Button\n          onClick={() =>\n            this.setState({ myValue: myValue ? myValue + 1 : 123 })\n          }\n        >\n          set\n        </Button>\n      </SemanticUI>\n    );\n  }\n}\n\nconst SuggestionExample = () => (\n  <SemanticUI>\n    <SuggestionExample1 />\n    couldCreate: false\n    <Suggestion results={data} couldCreate={false} filter preview />\n  </SemanticUI>\n);\n\nexport default SuggestionExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/TabView.example.jsx":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/TabView.example.jsx ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, {useState} from \"react\";\n\nimport {\n  SemanticUI,\n  Menu,\n  Item,\n  InputBox,\n  Button,\n} from \"react-atomic-molecule\";\nimport SearchIcon from \"ricon/Search\";\n\nimport { TabView, Tab } from \"organism-react-navigation\";\n\nconst RightMenu = () => (\n  <Menu className=\"right\" ui={false}>\n    <Item style={{ boxSizing: \"border-box\" }}>\n      <InputBox icon={<SearchIcon />} transparent placeholder=\"Search...\" />\n    </Item>\n  </Menu>\n);\n\nconst TabViewExample = (props) => {\n  const [selected, setSelected] = useState();\n  return (\n    <SemanticUI>\n      <TabView selected={selected} rightMenu={<RightMenu />}>\n        <Tab>\n          <div>content1</div>\n          <div>menu1</div>\n        </Tab>\n        <Tab>\n          <div>content2</div>\n          <div>menu2</div>\n        </Tab>\n      </TabView>\n      <Button onClick={()=>setSelected(0)}>to tab1</Button>\n      <Button onClick={()=>setSelected(1)}>to tab2</Button>\n    </SemanticUI>\n  );\n};\n\nexport default TabViewExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/TagInput.example.jsx":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/TagInput.example.jsx ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { useState } from \"react\";\nimport { TagsField } from \"organism-react-tag-input\";\nimport { Form, Field, SemanticUI } from \"react-atomic-molecule\";\nimport { Checkbox } from \"react-atomic-organism\";\n\nconst TagInputExample = (props) => {\n  const [isDisable, setIsDisable] = useState(false);\n\n  const handleDisable = (e) => {\n    setIsDisable(e.checked ? true : false);\n  };\n\n  return (\n    <Form>\n      <TagsField disabled={isDisable} />\n      <Field>\n        <Checkbox label=\"Disable\" toggle onChange={handleDisable} />\n      </Field>\n    </Form>\n  );\n};\n\nexport default TagInputExample;\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/WindowOffset.example.jsx":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/WindowOffset.example.jsx ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React, { Component } from \"react\";\nimport { PopupHover, PopupOverlay } from \"organism-react-popup\";\n\nclass WindowOffsetExample extends Component {\n  handleClick = (e) => {\n    const target = e.currentTarget;\n    import(\"get-window-offset\").then(({ default: getWindowOffset }) => {\n      const info = getWindowOffset(target);\n      console.log(info);\n    });\n  };\n\n  render() {\n    return (\n      <div>\n        <div style={Styles.row}>\n          <PopupHover popup=\"1\" isKeep={true}>\n            <div\n              style={{ ...Styles.col, ...Styles.col1 }}\n              onClick={this.handleClick}\n            >\n              1\n            </div>\n          </PopupHover>\n          <PopupHover popup=\"2\" isKeep={true}>\n            <div\n              style={{ ...Styles.col, ...Styles.col2 }}\n              onClick={this.handleClick}\n            >\n              2\n            </div>\n          </PopupHover>\n          <PopupHover popup=\"3\" isKeep={true}>\n            <div\n              style={{ ...Styles.col, ...Styles.col3 }}\n              onClick={this.handleClick}\n            >\n              3\n            </div>\n          </PopupHover>\n        </div>\n        <div style={Styles.row}>\n          <PopupHover popup=\"4\">\n            <div\n              style={{ ...Styles.col, ...Styles.col1 }}\n              onClick={this.handleClick}\n            >\n              4\n            </div>\n          </PopupHover>\n          <PopupHover popup=\"5\">\n            <div\n              style={{ ...Styles.col, ...Styles.col2 }}\n              onClick={this.handleClick}\n            >\n              5\n            </div>\n          </PopupHover>\n          <PopupHover popup=\"6\">\n            <div\n              style={{ ...Styles.col, ...Styles.col3 }}\n              onClick={this.handleClick}\n            >\n              6\n            </div>\n          </PopupHover>\n        </div>\n        <div style={{ width: 60 }}>\n          <PopupHover popup=\"7\">\n            <div\n              style={{ ...Styles.col, ...Styles.col1 }}\n              onClick={this.handleClick}\n            >\n              7\n            </div>\n          </PopupHover>\n          <PopupHover popup=\"8\">\n            <div\n              style={{ ...Styles.col, ...Styles.col2 }}\n              onClick={this.handleClick}\n            >\n              8\n            </div>\n          </PopupHover>\n          <PopupHover popup=\"9\">\n            <div\n              style={{ ...Styles.col, ...Styles.col3 }}\n              onClick={this.handleClick}\n            >\n              9\n            </div>\n          </PopupHover>\n        </div>\n      </div>\n    );\n  }\n}\n\nexport default WindowOffsetExample;\n\nconst Styles = {\n  row: {\n    justifyContent: \"space-around\",\n    display: \"flex\",\n    marginBottom: 100,\n  },\n  col: {\n    width: 60,\n    height: 60,\n    lineHeight: \"60px\",\n    textAlign: \"center\",\n    color: \"#fff\",\n  },\n  col1: {\n    background: \"#c00\",\n  },\n  col2: {\n    background: \"#095\",\n  },\n  col3: {\n    background: \"#059\",\n  },\n};\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./ui/organisms/YouTubeRWD.example.jsx":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./ui/organisms/YouTubeRWD.example.jsx ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("import React from \"react\";\nimport { YoutubeRWD } from \"organism-react-video\";\n\nconst YouTubeRWDExample = () => <YoutubeRWD videoId=\"CjxugyZCfuw\" />;\n\nexport default YouTubeRWDExample;\n");

/***/ }),

/***/ 1:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** multi (webpack)-dev-server/client?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info&reconnect=10 (webpack)/hot/dev-server.js ./node_modules/reshow-app/webpack/refresh/runtime/ReactRefreshEntry.js ./node_modules/reshow-app/webpack/refresh/runtime/ErrorOverlayEntry.js ./node_modules/reshow-app/webpack/refresh/runtime/BabelDetectComponent.js ./build/es/src/client.js ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/hill/git/react-atomic-ui/node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info&reconnect=10 */"./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info&reconnect=10");
__webpack_require__(/*! /Users/hill/git/react-atomic-ui/node_modules/webpack/hot/dev-server.js */"./node_modules/webpack/hot/dev-server.js");
__webpack_require__(/*! /Users/hill/git/react-atomic-ui/node_modules/reshow-app/webpack/refresh/runtime/ReactRefreshEntry.js */"./node_modules/reshow-app/webpack/refresh/runtime/ReactRefreshEntry.js");
__webpack_require__(/*! /Users/hill/git/react-atomic-ui/node_modules/reshow-app/webpack/refresh/runtime/ErrorOverlayEntry.js */"./node_modules/reshow-app/webpack/refresh/runtime/ErrorOverlayEntry.js");
__webpack_require__(/*! /Users/hill/git/react-atomic-ui/node_modules/reshow-app/webpack/refresh/runtime/BabelDetectComponent.js */"./node_modules/reshow-app/webpack/refresh/runtime/BabelDetectComponent.js");
module.exports = __webpack_require__(/*! ./build/es/src/client.js */"./build/es/src/client.js");


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