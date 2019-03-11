webpackJsonp([0],{

/***/ 1069:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_toConsumableArray__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_get_object_value__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_array_dedup__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_array_dedup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_array_dedup__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_dagre__ = __webpack_require__(1091);






var keys = Object.keys;

var toInt = function toInt(d) {
    return parseInt(d, 10);
};

var dagreAutoLayout = function dagreAutoLayout(nodes) {
    var conns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var graph = new __WEBPACK_IMPORTED_MODULE_4__lib_dagre__["a" /* graphlib */].Graph().setGraph({ rankdir: 'LR' }).setDefaultEdgeLabel(function () {
        return {};
    });
    var nodeKeys = keys(nodes);
    if (!nodeKeys || !nodeKeys.length) {
        console.warn('[Dagre] empty node');
    }
    var nodeConns = [];
    Object(__WEBPACK_IMPORTED_MODULE_2_get_object_value__["default"])(keys(conns), null, {}).forEach(function (key) {
        var _nodeConns;

        graph.setEdge.apply(graph, Object(__WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_toConsumableArray__["a" /* default */])(conns[key]));
        (_nodeConns = nodeConns).push.apply(_nodeConns, Object(__WEBPACK_IMPORTED_MODULE_1_reshow_runtime_es_helpers_toConsumableArray__["a" /* default */])(conns[key]));
    });
    nodeConns = __WEBPACK_IMPORTED_MODULE_3_array_dedup___default()(nodeConns);
    var nodeNoConns = [];
    nodeKeys.forEach(function (key) {
        if (-1 !== nodeConns.indexOf(toInt(key))) {
            graph.setNode(key, Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_extends__["a" /* default */])({
                label: key
            }, nodes[key].obj.getWH()));
        } else {
            nodeNoConns.push(key);
        }
    });
    __WEBPACK_IMPORTED_MODULE_4__lib_dagre__["b" /* layout */](graph);
    var newWH = {};
    graph.nodes().forEach(function (key) {
        return newWH[key] = graph.node(key);
    });
    if (nodeNoConns.length) {
        var noConnStart = 0;
        nodeNoConns.forEach(function (key) {
            newWH[key] = { x: 10, y: noConnStart * 20 };
            noConnStart++;
        });
    }
    return newWH;
};

/* harmony default export */ __webpack_exports__["default"] = (dagreAutoLayout);

/***/ }),

/***/ 1070:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addDummyNode", function() { return addDummyNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "simplify", function() { return simplify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "asNonCompoundGraph", function() { return asNonCompoundGraph; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successorWeights", function() { return successorWeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "predecessorWeights", function() { return predecessorWeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "intersectRect", function() { return intersectRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildLayerMatrix", function() { return buildLayerMatrix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "normalizeRanks", function() { return normalizeRanks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEmptyRanks", function() { return removeEmptyRanks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addBorderNode", function() { return addBorderNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "maxRank", function() { return maxRank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "partition", function() { return partition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "time", function() { return time; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notime", function() { return notime; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_toConsumableArray__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lodash_lite__ = __webpack_require__(1071);





var Graph = __webpack_require__(1072).Graph;



/*
 * Adds a dummy node to the graph and return v.
 */
function addDummyNode(g, type, attrs, name) {
  var v;
  do {
    v = Object(__WEBPACK_IMPORTED_MODULE_1__lodash_lite__["i" /* uniqueId */])(name);
  } while (g.hasNode(v));

  attrs.dummy = type;
  g.setNode(v, attrs);
  return v;
}

/*
 * Returns a new graph with only simple edges. Handles aggregation of data
 * associated with multi-edges.
 */
function simplify(g) {
  var simplified = new Graph().setGraph(g.graph());
  g.nodes().forEach(function (v) {
    simplified.setNode(v, g.node(v));
  });
  g.edges().forEach(function (e) {
    var simpleLabel = simplified.edge(e.v, e.w) || { weight: 0, minlen: 1 },
        label = g.edge(e);
    simplified.setEdge(e.v, e.w, {
      weight: simpleLabel.weight + label.weight,
      minlen: Math.max(simpleLabel.minlen, label.minlen)
    });
  });
  return simplified;
}

function asNonCompoundGraph(g) {
  var simplified = new Graph({ multigraph: g.isMultigraph() }).setGraph(g.graph());
  g.nodes().forEach(function (v) {
    if (!g.children(v).length) {
      simplified.setNode(v, g.node(v));
    }
  });
  g.edges().forEach(function (e) {
    simplified.setEdge(e, g.edge(e));
  });
  return simplified;
}

function successorWeights(g) {
  var weightMap = g.nodes().map(function (v) {
    var sucs = {};
    g.outEdges(v).forEach(function (e) {
      sucs[e.w] = (sucs[e.w] || 0) + g.edge(e).weight;
    });
    return sucs;
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1__lodash_lite__["j" /* zipObject */])(g.nodes(), weightMap);
}

function predecessorWeights(g) {
  var weightMap = g.nodes().map(function (v) {
    var preds = {};
    g.inEdges(v).forEach(function (e) {
      preds[e.v] = (preds[e.v] || 0) + g.edge(e).weight;
    });
    return preds;
  });
  return Object(__WEBPACK_IMPORTED_MODULE_1__lodash_lite__["j" /* zipObject */])(g.nodes(), weightMap);
}

/*
 * Finds where a line starting at point ({x, y}) would intersect a rectangle
 * ({x, y, width, height}) if it were pointing at the rectangle's center.
 */
function intersectRect(rect, point) {
  var x = rect.x;
  var y = rect.y;

  // Rectangle intersection algorithm from:
  // http://math.stackexchange.com/questions/108113/find-edge-between-two-boxes
  var dx = point.x - x;
  var dy = point.y - y;
  var w = rect.width / 2;
  var h = rect.height / 2;

  if (!dx && !dy) {
    throw new Error("Not possible to find intersection inside of the rectangle");
  }

  var sx, sy;
  if (Math.abs(dy) * w > Math.abs(dx) * h) {
    // Intersection is top or bottom of rect.
    if (dy < 0) {
      h = -h;
    }
    sx = h * dx / dy;
    sy = h;
  } else {
    // Intersection is left or right of rect.
    if (dx < 0) {
      w = -w;
    }
    sx = w;
    sy = w * dy / dx;
  }

  return { x: x + sx, y: y + sy };
}

/*
 * Given a DAG with each node assigned "rank" and "order" properties, this
 * function will produce a matrix with the ids of each node.
 */
function buildLayerMatrix(g) {
  var layering = Object(__WEBPACK_IMPORTED_MODULE_1__lodash_lite__["g" /* range */])(maxRank(g) + 1).map(function () {
    return [];
  });
  g.nodes().forEach(function (v) {
    var node = g.node(v),
        rank = node.rank;
    if ("undefined" !== typeof rank) {
      layering[rank][node.order] = v;
    }
  });
  return layering;
}

/*
 * Adjusts the ranks for all nodes in the graph such that all nodes v have
 * rank(v) >= 0 and at least one node w has rank(w) = 0.
 */
function normalizeRanks(g) {
  var min = Math.min.apply(Math, Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_toConsumableArray__["a" /* default */])(g.nodes().map(function (v) {
    return g.node(v).rank;
  })));
  g.nodes().forEach(function (v) {
    var node = g.node(v);
    if ('undefined' !== typeof node.rank) {
      node.rank -= min;
    }
  });
}

function removeEmptyRanks(g) {
  // Ranks may not start at 0, so we need to offset them
  var offset = Math.min.apply(Math, Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_toConsumableArray__["a" /* default */])(g.nodes().map(function (v) {
    return g.node(v).rank;
  })));

  var layers = [];
  g.nodes().forEach(function (v) {
    var rank = g.node(v).rank - offset;
    if (!layers[rank]) {
      layers[rank] = [];
    }
    layers[rank].push(v);
  });

  var delta = 0,
      nodeRankFactor = g.graph().nodeRankFactor;
  layers.forEach(function (vs, i) {
    if ('undefined' === typeof vs && i % nodeRankFactor !== 0) {
      --delta;
    } else if (delta) {
      vs.forEach(function (v) {
        g.node(v).rank += delta;
      });
    }
  });
}

function addBorderNode(g, prefix, rank, order) {
  var node = {
    width: 0,
    height: 0
  };
  if (arguments.length >= 4) {
    node.rank = rank;
    node.order = order;
  }
  return addDummyNode(g, "border", node, prefix);
}

function maxRank(g, nodes) {
  if (!nodes) {
    nodes = g.nodes();
  }
  var arr = nodes.map(function (v) {
    var rank = g.node(v).rank;
    if ('undefined' !== typeof rank) {
      return rank;
    }
  });
  if (!arr.length) {
    return 0;
  }
  return Math.max.apply(Math, Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_toConsumableArray__["a" /* default */])(arr));
}

/*
 * Partition a collection into two groups: `lhs` and `rhs`. If the supplied
 * function returns true for an entry it goes into `lhs`. Otherwise it goes
 * into `rhs.
 */
function partition(collection, fn) {
  var result = { lhs: [], rhs: [] };
  collection.forEach(function (value) {
    if (fn(value)) {
      result.lhs.push(value);
    } else {
      result.rhs.push(value);
    }
  });
  return result;
}

/*
 * Returns a new function that wraps `fn` with a timer. The wrapper logs the
 * time it takes to execute the function.
 */
function time(name, fn) {
  var start = Object(__WEBPACK_IMPORTED_MODULE_1__lodash_lite__["e" /* now */])();
  try {
    return fn();
  } finally {
    console.log(name + " time: " + (Object(__WEBPACK_IMPORTED_MODULE_1__lodash_lite__["e" /* now */])() - start) + "ms");
  }
}

function notime(name, fn) {
  return fn();
}

/***/ }),

/***/ 1071:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return rangeStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return flattenDownDepth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return minBy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return pick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return mapValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return uniqueId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return zipObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return now; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_get_object_value__ = __webpack_require__(7);


var keys = Object.keys;

var range = function range(n) {
  return Array.from(Array(n).keys());
};

var rangeStep = function rangeStep(start, end, step, fromRight) {
  var index = -1;
  var length = Math.max(Math.ceil((end - start) / (step || 1)), 0);
  var result = Array(length);

  while (length--) {
    result[fromRight ? length : ++index] = start;
    start += step;
  }
  return result;
};

var flattenDownDepth = function flattenDownDepth(array, result, depth) {
  depth--;

  for (var i = 0; i < array.length; i++) {
    var value = array[i];

    if (depth > -1 && Array.isArray(value)) {
      flattenDownDepth(value, result, depth);
    } else {
      result.push(value);
    }
  }

  return result;
};

var minBy = function minBy(obj, func) {
  var arrMin = {};
  var oKeys = keys(obj);
  oKeys.forEach(function (key) {
    return arrMin[key] = func(obj[key], key);
  });
  var min = Math.min(oKeys.map(function (key) {
    return arrMin[key];
  }));
  var result = null;
  oKeys.some(function (key) {
    if (min === arrMin[key]) {
      result = obj[key];
      return true;
    } else {
      return false;
    }
  });
  return result;
};

var find = function find(obj, func) {
  var result = void 0;
  keys(obj).some(function (key) {
    if (func(obj[key], key)) {
      result = obj[key];
      return true;
    } else {
      return false;
    }
  });
  return result;
};

var pick = function pick(obj, arr) {
  var results = {};
  var oKeys = keys(obj);
  if (!oKeys || !oKeys.length) {
    return results;
  }
  arr.forEach(function (key) {
    if ('undefined' !== typeof obj[key]) {
      results[key] = obj[key];
    }
  });
  return results;
};

var mapValues = function mapValues(obj, func) {
  var results = {};
  keys(obj).forEach(function (key) {
    return results[key] = func(obj[key], key);
  });
  return results;
};

var uniqueIdCount = 0;
var uniqueId = function uniqueId(name) {
  var id = name + '_' + uniqueIdCount;
  uniqueIdCount++;
  return id;
};

var zipObject = function zipObject(a1, a2) {
  var result = {};
  a1.forEach(function (a, k) {
    result[a] = a2[k];
  });
  return result;
};

var now = function now() {
  return window.Date.now();
};



/***/ }),

/***/ 1072:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__graphlib__ = __webpack_require__(1092);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Graph", function() { return __WEBPACK_IMPORTED_MODULE_0__graphlib__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "alg", function() { return __WEBPACK_IMPORTED_MODULE_0__graphlib__["b"]; });



/***/ }),

/***/ 1073:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  longestPath: longestPath,
  slack: slack
};

/*
 * Initializes ranks for the input graph using the longest path algorithm. This
 * algorithm scales well and is fast in practice, it yields rather poor
 * solutions. Nodes are pushed to the lowest layer possible, leaving the bottom
 * ranks wide and leaving edges longer than necessary. However, due to its
 * speed, this algorithm is good for getting an initial ranking that can be fed
 * into other algorithms.
 *
 * This algorithm does not normalize layers because it will be used by other
 * algorithms in most cases. If using this algorithm directly, be sure to
 * run normalize at the end.
 *
 * Pre-conditions:
 *
 *    1. Input graph is a DAG.
 *    2. Input graph node labels can be assigned properties.
 *
 * Post-conditions:
 *
 *    1. Each node will be assign an (unnormalized) "rank" property.
 */
function longestPath(g) {
  var visited = {};

  function dfs(v) {
    var label = g.node(v);
    if (visited.v) {
      return label.rank;
    }
    visited[v] = true;

    var rank = Math.min(g.outEdges(v).map(function (e) {
      return dfs(e.w) - g.edge(e).minlen;
    }));

    if (rank === Number.POSITIVE_INFINITY || // return value of _.map([]) for Lodash 3
    rank === undefined || // return value of _.map([]) for Lodash 4
    rank === null) {
      // return value of _.map([null])
      rank = 0;
    }

    return label.rank = rank;
  }

  g.sources().forEach(dfs);
}

/*
 * Returns the amount of slack for the given edge. The slack is defined as the
 * difference between the length of the edge and its minimum length.
 */
function slack(g, e) {
  return g.node(e.w).rank - g.node(e.v).rank - g.edge(e).minlen;
}

/***/ }),

/***/ 1074:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_typeof__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_array_dedup__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_array_dedup___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_array_dedup__);




var keys = Object.keys;

/* harmony default export */ __webpack_exports__["a"] = (Graph);

var DEFAULT_EDGE_NAME = "\x00",
    GRAPH_NODE = "\x00",
    EDGE_KEY_DELIM = "\x01";

// Implementation notes:
//
//  * Node id query functions should return string ids for the nodes
//  * Edge id query functions should return an "edgeObj", edge object, that is
//    composed of enough information to uniquely identify an edge: {v, w, name}.
//  * Internally we use an "edgeId", a stringified form of the edgeObj, to
//    reference edges. This is because we need a performant way to look these
//    edges up and, object properties, which have string keys, are the closest
//    we're going to get to a performant hashtable in JavaScript.

function Graph() {
  var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  this._isDirected = 'undefined' !== typeof opts.directed ? opts.directed : true;
  this._isMultigraph = 'undefined' !== typeof opts.multigraph ? opts.multigraph : false;
  this._isCompound = 'undefined' !== typeof opts.compound ? opts.compound : false;

  // Label for the graph itself
  this._label = undefined;

  // Defaults to be set when creating a new node
  this._defaultNodeLabelFn = function () {
    return undefined;
  };

  // Defaults to be set when creating a new edge
  this._defaultEdgeLabelFn = function () {
    return undefined;
  };

  // v -> label
  this._nodes = {};

  if (this._isCompound) {
    // v -> parent
    this._parent = {};

    // v -> children
    this._children = {};
    this._children[GRAPH_NODE] = {};
  }

  // v -> edgeObj
  this._in = {};

  // u -> v -> Number
  this._preds = {};

  // v -> edgeObj
  this._out = {};

  // v -> w -> Number
  this._sucs = {};

  // e -> edgeObj
  this._edgeObjs = {};

  // e -> label
  this._edgeLabels = {};
}

/* Number of nodes in the graph. Should only be changed by the implementation. */
Graph.prototype._nodeCount = 0;

/* Number of edges in the graph. Should only be changed by the implementation. */
Graph.prototype._edgeCount = 0;

/* === Graph functions ========= */

Graph.prototype.isDirected = function () {
  return this._isDirected;
};

Graph.prototype.isMultigraph = function () {
  return this._isMultigraph;
};

Graph.prototype.isCompound = function () {
  return this._isCompound;
};

Graph.prototype.setGraph = function (label) {
  this._label = label;
  return this;
};

Graph.prototype.graph = function () {
  return this._label;
};

/* === Node functions ========== */

Graph.prototype.setDefaultNodeLabel = function (_newDefault) {
  if ('function' !== typeof _newDefault) {
    _newDefault = function newDefault() {
      return _newDefault;
    };
  }
  this._defaultNodeLabelFn = _newDefault;
  return this;
};

Graph.prototype.nodeCount = function () {
  return this._nodeCount;
};

Graph.prototype.nodes = function () {
  return keys(this._nodes);
};

Graph.prototype.sources = function () {
  var self = this;
  return this.nodes().filter(function (v) {
    var arrKeys = keys(self._in[v]);
    return !arrKeys || !arrKeys.length;
  });
};

Graph.prototype.sinks = function () {
  var self = this;
  return this.nodes().filter(function (v) {
    var arrKeys = keys(self._out[v]);
    return !arrKeys || !arrKeys.length;
  });
};

Graph.prototype.setNodes = function (vs, value) {
  var args = arguments;
  var self = this;
  vs.forEach(function (v) {
    if (args.length > 1) {
      self.setNode(v, value);
    } else {
      self.setNode(v);
    }
  });
  return this;
};

Graph.prototype.setNode = function (v, value) {
  if ('undefined' !== typeof this._nodes[v]) {
    if (arguments.length > 1) {
      this._nodes[v] = value;
    }
    return this;
  }

  this._nodes[v] = arguments.length > 1 ? value : this._defaultNodeLabelFn(v);
  if (this._isCompound) {
    this._parent[v] = GRAPH_NODE;
    this._children[v] = {};
    this._children[GRAPH_NODE][v] = true;
  }
  this._in[v] = {};
  this._preds[v] = {};
  this._out[v] = {};
  this._sucs[v] = {};
  ++this._nodeCount;
  return this;
};

Graph.prototype.node = function (v) {
  return this._nodes[v];
};

Graph.prototype.hasNode = function (v) {
  return 'undefined' !== typeof this._nodes[v];
};

Graph.prototype.removeNode = function (v) {
  var self = this;
  if (this.hasNode(v)) {
    var removeEdge = function removeEdge(e) {
      self.removeEdge(self._edgeObjs[e]);
    };
    delete this._nodes[v];
    if (this._isCompound) {
      this._removeFromParentsChildList(v);
      delete this._parent[v];
      this.children(v).forEach(function (child) {
        self.setParent(child);
      });
      delete this._children[v];
    }
    keys(this._in[v]).forEach(removeEdge);
    delete this._in[v];
    delete this._preds[v];
    keys(this._out[v]).forEach(removeEdge);
    delete this._out[v];
    delete this._sucs[v];
    --this._nodeCount;
  }
  return this;
};

Graph.prototype.setParent = function (v, parent) {
  if (!this._isCompound) {
    throw new Error("Cannot set parent in a non-compound graph");
  }

  if ('undefined' === typeof parent) {
    parent = GRAPH_NODE;
  } else {
    // Coerce parent to string
    parent += "";
    for (var ancestor = parent; 'undefined' !== typeof ancestor; ancestor = this.parent(ancestor)) {
      if (ancestor === v) {
        throw new Error("Setting " + parent + " as parent of " + v + " would create a cycle");
      }
    }

    this.setNode(parent);
  }

  this.setNode(v);
  this._removeFromParentsChildList(v);
  this._parent[v] = parent;
  this._children[parent][v] = true;
  return this;
};

Graph.prototype._removeFromParentsChildList = function (v) {
  delete this._children[this._parent[v]][v];
};

Graph.prototype.parent = function (v) {
  if (this._isCompound) {
    var parent = this._parent[v];
    if (parent !== GRAPH_NODE) {
      return parent;
    }
  }
};

Graph.prototype.children = function (v) {
  if ('undefined' === typeof v) {
    v = GRAPH_NODE;
  }

  if (this._isCompound) {
    var children = this._children[v];
    if (children) {
      return keys(children);
    }
  } else if (v === GRAPH_NODE) {
    return this.nodes();
  } else if (this.hasNode(v)) {
    return [];
  }
};

Graph.prototype.predecessors = function (v) {
  var predsV = this._preds[v];
  if (predsV) {
    return keys(predsV);
  }
};

Graph.prototype.successors = function (v) {
  var sucsV = this._sucs[v];
  if (sucsV) {
    return keys(sucsV);
  }
};

Graph.prototype.neighbors = function (v) {
  var preds = this.predecessors(v);
  if (preds) {
    return __WEBPACK_IMPORTED_MODULE_1_array_dedup___default()(preds.concat(this.successors(v)));
  }
};

Graph.prototype.isLeaf = function (v) {
  var neighbors;
  if (this.isDirected()) {
    neighbors = this.successors(v);
  } else {
    neighbors = this.neighbors(v);
  }
  return neighbors.length === 0;
};

Graph.prototype.filterNodes = function (filter) {
  var copy = new this.constructor({
    directed: this._isDirected,
    multigraph: this._isMultigraph,
    compound: this._isCompound
  });

  copy.setGraph(this.graph());

  var self = this;
  this._nodes.forEach(function (value, v) {
    if (filter(v)) {
      copy.setNode(v, value);
    }
  });

  this._edgeObjs.forEach(function (e) {
    if (copy.hasNode(e.v) && copy.hasNode(e.w)) {
      copy.setEdge(e, self.edge(e));
    }
  });

  var parents = {};
  function findParent(v) {
    var parent = self.parent(v);
    if (parent === undefined || copy.hasNode(parent)) {
      parents[v] = parent;
      return parent;
    } else if (parent in parents) {
      return parents[parent];
    } else {
      return findParent(parent);
    }
  }

  if (this._isCompound) {
    copy.nodes().forEach(function (v) {
      copy.setParent(v, findParent(v));
    });
  }

  return copy;
};

/* === Edge functions ========== */

Graph.prototype.setDefaultEdgeLabel = function (_newDefault2) {
  if ('function' !== typeof _newDefault2) {
    _newDefault2 = function newDefault() {
      return _newDefault2;
    };
  }
  this._defaultEdgeLabelFn = _newDefault2;
  return this;
};

Graph.prototype.edgeCount = function () {
  return this._edgeCount;
};

Graph.prototype.edges = function () {
  var _this = this;

  return keys(this._edgeObjs).map(function (key) {
    return _this._edgeObjs[key];
  });
};

Graph.prototype.setPath = function (vs, value) {
  var self = this,
      args = arguments;
  vs.reduce(function (v, w) {
    if (args.length > 1) {
      self.setEdge(v, w, value);
    } else {
      self.setEdge(v, w);
    }
    return w;
  });
  return this;
};

/*
 * setEdge(v, w, [value, [name]])
 * setEdge({ v, w, [name] }, [value])
 */
Graph.prototype.setEdge = function () {
  var v,
      w,
      name,
      value,
      valueSpecified = false,
      arg0 = arguments[0];

  if ((typeof arg0 === "undefined" ? "undefined" : Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_typeof__["a" /* default */])(arg0)) === "object" && arg0 !== null && "v" in arg0) {
    v = arg0.v;
    w = arg0.w;
    name = arg0.name;
    if (arguments.length === 2) {
      value = arguments[1];
      valueSpecified = true;
    }
  } else {
    v = arg0;
    w = arguments[1];
    name = arguments[3];
    if (arguments.length > 2) {
      value = arguments[2];
      valueSpecified = true;
    }
  }

  v = "" + v;
  w = "" + w;
  if ('undefined' !== typeof name) {
    name = "" + name;
  }

  var e = edgeArgsToId(this._isDirected, v, w, name);
  if ('undefined' !== typeof this._edgeLabels[e]) {
    if (valueSpecified) {
      this._edgeLabels[e] = value;
    }
    return this;
  }

  if ('undefined' !== typeof name && !this._isMultigraph) {
    throw new Error("Cannot set a named edge when isMultigraph = false");
  }

  // It didn't exist, so we need to create it.
  // First ensure the nodes exist.
  this.setNode(v);
  this.setNode(w);

  this._edgeLabels[e] = valueSpecified ? value : this._defaultEdgeLabelFn(v, w, name);

  var edgeObj = edgeArgsToObj(this._isDirected, v, w, name);
  // Ensure we add undirected edges in a consistent way.
  v = edgeObj.v;
  w = edgeObj.w;

  Object.freeze(edgeObj);
  this._edgeObjs[e] = edgeObj;
  incrementOrInitEntry(this._preds[w], v);
  incrementOrInitEntry(this._sucs[v], w);
  this._in[w][e] = edgeObj;
  this._out[v][e] = edgeObj;
  this._edgeCount++;
  return this;
};

Graph.prototype.edge = function (v, w, name) {
  var e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name);
  return this._edgeLabels[e];
};

Graph.prototype.hasEdge = function (v, w, name) {
  var e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name);
  return 'undefined' !== typeof this._edgeLabels[e];
};

Graph.prototype.removeEdge = function (v, w, name) {
  var e = arguments.length === 1 ? edgeObjToId(this._isDirected, arguments[0]) : edgeArgsToId(this._isDirected, v, w, name),
      edge = this._edgeObjs[e];
  if (edge) {
    v = edge.v;
    w = edge.w;
    delete this._edgeLabels[e];
    delete this._edgeObjs[e];
    decrementOrRemoveEntry(this._preds[w], v);
    decrementOrRemoveEntry(this._sucs[v], w);
    delete this._in[w][e];
    delete this._out[v][e];
    this._edgeCount--;
  }
  return this;
};

Graph.prototype.inEdges = function (v, u) {
  var inV = this._in[v];
  if (inV) {
    var edges = keys(inV).map(function (key) {
      return inV[key];
    });
    if (!u) {
      return edges;
    }
    return edges.filter(function (edge) {
      return edge.v === u;
    });
  }
};

Graph.prototype.outEdges = function (v, w) {
  var outV = this._out[v];
  if (outV) {
    var edges = keys(outV).map(function (key) {
      return outV[key];
    });
    if (!w) {
      return edges;
    }
    return edges.filter(function (edge) {
      return edge.w === w;
    });
  }
};

Graph.prototype.nodeEdges = function (v, w) {
  var inEdges = this.inEdges(v, w);
  if (inEdges) {
    return inEdges.concat(this.outEdges(v, w));
  }
};

function incrementOrInitEntry(map, k) {
  if (map[k]) {
    map[k]++;
  } else {
    map[k] = 1;
  }
}

function decrementOrRemoveEntry(map, k) {
  if (! --map[k]) {
    delete map[k];
  }
}

function edgeArgsToId(isDirected, v_, w_, name) {
  var v = "" + v_;
  var w = "" + w_;
  if (!isDirected && v > w) {
    var tmp = v;
    v = w;
    w = tmp;
  }
  return v + EDGE_KEY_DELIM + w + EDGE_KEY_DELIM + ('undefined' === typeof name ? DEFAULT_EDGE_NAME : name);
}

function edgeArgsToObj(isDirected, v_, w_, name) {
  var v = "" + v_;
  var w = "" + w_;
  if (!isDirected && v > w) {
    var tmp = v;
    v = w;
    w = tmp;
  }
  var edgeObj = { v: v, w: w };
  if (name) {
    edgeObj.name = name;
  }
  return edgeObj;
}

function edgeObjToId(isDirected, edgeObj) {
  return edgeArgsToId(isDirected, edgeObj.v, edgeObj.w, edgeObj.name);
}

/***/ }),

/***/ 1076:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_priority_queue__ = __webpack_require__(1077);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_priority_queue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__data_priority_queue__);


var DEFAULT_WEIGHT_FUNC = function DEFAULT_WEIGHT_FUNC() {
  return 1;
};

var dijkstra = function dijkstra(g, source, weightFn, edgeFn) {
  return runDijkstra(g, String(source), weightFn || DEFAULT_WEIGHT_FUNC, edgeFn || function (v) {
    return g.outEdges(v);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (dijkstra);

function runDijkstra(g, source, weightFn, edgeFn) {
  var results = {},
      pq = new __WEBPACK_IMPORTED_MODULE_0__data_priority_queue___default.a(),
      v,
      vEntry;

  var updateNeighbors = function updateNeighbors(edge) {
    var w = edge.v !== v ? edge.v : edge.w,
        wEntry = results[w],
        weight = weightFn(edge),
        distance = vEntry.distance + weight;

    if (weight < 0) {
      throw new Error("dijkstra does not allow negative edge weights. " + "Bad edge: " + edge + " Weight: " + weight);
    }

    if (distance < wEntry.distance) {
      wEntry.distance = distance;
      wEntry.predecessor = v;
      pq.decrease(w, distance);
    }
  };

  g.nodes().forEach(function (v) {
    var distance = v === source ? 0 : Number.POSITIVE_INFINITY;
    results[v] = { distance: distance };
    pq.add(v, distance);
  });

  while (pq.size() > 0) {
    v = pq.removeMin();
    vEntry = results[v];
    if (vEntry.distance === Number.POSITIVE_INFINITY) {
      break;
    }

    edgeFn(v).forEach(updateNeighbors);
  }

  return results;
}

/***/ }),

/***/ 1077:
/***/ (function(module, exports) {


module.exports = PriorityQueue;

/**
 * A min-priority queue data structure. This algorithm is derived from Cormen,
 * et al., "Introduction to Algorithms". The basic idea of a min-priority
 * queue is that you can efficiently (in O(1) time) get the smallest key in
 * the queue. Adding and removing elements takes O(log n) time. A key can
 * have its priority decreased in O(log n) time.
 */
function PriorityQueue() {
  this._arr = [];
  this._keyIndices = {};
}

/**
 * Returns the number of elements in the queue. Takes `O(1)` time.
 */
PriorityQueue.prototype.size = function () {
  return this._arr.length;
};

/**
 * Returns the keys that are in the queue. Takes `O(n)` time.
 */
PriorityQueue.prototype.keys = function () {
  return this._arr.map(function (x) {
    return x.key;
  });
};

/**
 * Returns `true` if **key** is in the queue and `false` if not.
 */
PriorityQueue.prototype.has = function (key) {
  return 'undefined' !== this._keyIndices[key];
};

/**
 * Returns the priority for **key**. If **key** is not present in the queue
 * then this function returns `undefined`. Takes `O(1)` time.
 *
 * @param {Object} key
 */
PriorityQueue.prototype.priority = function (key) {
  var index = this._keyIndices[key];
  if (index !== undefined) {
    return this._arr[index].priority;
  }
};

/**
 * Returns the key for the minimum element in this queue. If the queue is
 * empty this function throws an Error. Takes `O(1)` time.
 */
PriorityQueue.prototype.min = function () {
  if (this.size() === 0) {
    throw new Error("Queue underflow");
  }
  return this._arr[0].key;
};

/**
 * Inserts a new key into the priority queue. If the key already exists in
 * the queue this function returns `false`; otherwise it will return `true`.
 * Takes `O(n)` time.
 *
 * @param {Object} key the key to add
 * @param {Number} priority the initial priority for the key
 */
PriorityQueue.prototype.add = function (key, priority) {
  key = String(key);
  if (!this.has(key)) {
    var arr = this._arr;
    var index = arr.length;
    this._keyIndices[key] = index;
    arr.push({ key: key, priority: priority });
    this._decrease(index);
    return true;
  }
  return false;
};

/**
 * Removes and returns the smallest key in the queue. Takes `O(log n)` time.
 */
PriorityQueue.prototype.removeMin = function () {
  this._swap(0, this._arr.length - 1);
  var min = this._arr.pop();
  delete this._keyIndices[min.key];
  this._heapify(0);
  return min.key;
};

/**
 * Decreases the priority for **key** to **priority**. If the new priority is
 * greater than the previous priority, this function will throw an Error.
 *
 * @param {Object} key the key for which to raise priority
 * @param {Number} priority the new priority for the key
 */
PriorityQueue.prototype.decrease = function (key, priority) {
  var index = this._keyIndices[key];
  if (priority > this._arr[index].priority) {
    throw new Error("New priority is greater than current priority. " + "Key: " + key + " Old: " + this._arr[index].priority + " New: " + priority);
  }
  this._arr[index].priority = priority;
  this._decrease(index);
};

PriorityQueue.prototype._heapify = function (i) {
  var arr = this._arr;
  var l = 2 * i,
      r = l + 1,
      largest = i;
  if (l < arr.length) {
    largest = arr[l].priority < arr[largest].priority ? l : largest;
    if (r < arr.length) {
      largest = arr[r].priority < arr[largest].priority ? r : largest;
    }
    if (largest !== i) {
      this._swap(i, largest);
      this._heapify(largest);
    }
  }
};

PriorityQueue.prototype._decrease = function (index) {
  var arr = this._arr;
  var priority = arr[index].priority;
  var parent;
  while (index !== 0) {
    parent = index >> 1;
    if (arr[parent].priority < priority) {
      break;
    }
    this._swap(index, parent);
    index = parent;
  }
};

PriorityQueue.prototype._swap = function (i, j) {
  var arr = this._arr;
  var keyIndices = this._keyIndices;
  var origArrI = arr[i];
  var origArrJ = arr[j];
  arr[i] = origArrJ;
  arr[j] = origArrI;
  keyIndices[origArrJ.key] = i;
  keyIndices[origArrI.key] = j;
};

/***/ }),

/***/ 1078:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var tarjan = function tarjan(g) {
  var index = 0,
      stack = [],
      visited = {},
      // node id -> { onStack, lowlink, index }
  results = [];

  function dfs(v) {
    var entry = visited[v] = {
      onStack: true,
      lowlink: index,
      index: index++
    };
    stack.push(v);

    g.successors(v).forEach(function (w) {
      if ('undefined' === typeof visited[w]) {
        dfs(w);
        entry.lowlink = Math.min(entry.lowlink, visited[w].lowlink);
      } else if (visited[w].onStack) {
        entry.lowlink = Math.min(entry.lowlink, visited[w].index);
      }
    });

    if (entry.lowlink === entry.index) {
      var cmpt = [],
          w;
      do {
        w = stack.pop();
        visited[w].onStack = false;
        cmpt.push(w);
      } while (v !== w);
      results.push(cmpt);
    }
  }

  g.nodes().forEach(function (v) {
    if (!_.has(visited, v)) {
      dfs(v);
    }
  });

  return results;
};

/* harmony default export */ __webpack_exports__["a"] = (tarjan);

/***/ }),

/***/ 1079:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

function topsort(g) {
  var visited = {},
      stack = {},
      results = [];

  function visit(node) {
    if ('undefined' !== typeof stack[node]) {
      throw new CycleException();
    }

    if ('undefined' === typeof visited[node]) {
      stack[node] = true;
      visited[node] = true;
      g.predecessors(node).forEach(visit);
      delete stack[node];
      results.push(node);
    }
  }

  g.sinks().forEach(visit);

  if (keys(visited).length !== g.nodeCount()) {
    throw new CycleException();
  }

  return results;
}

function CycleException() {}
CycleException.prototype = new Error(); // must be an instance of Error to pass testing
topsort.CycleException = CycleException;

/* harmony default export */ __webpack_exports__["default"] = (topsort);

/***/ }),

/***/ 1080:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var isArray = Array.isArray;

/*
 * A helper that preforms a pre- or post-order traversal on the input graph
 * and returns the nodes in the order they were visited. If the graph is
 * undirected then this algorithm will navigate using neighbors. If the graph
 * is directed then this algorithm will navigate using successors.
 *
 * Order must be one of "pre" or "post".
 */
var dfs = function dfs(g, vs, order) {
  if (!isArray(vs)) {
    vs = [vs];
  }

  var navigation = (g.isDirected() ? g.successors : g.neighbors).bind(g);

  var acc = [],
      visited = {};
  vs.forEach(function (v) {
    if (!g.hasNode(v)) {
      throw new Error("Graph does not have node: " + v);
    }

    doDfs(g, v, order === "post", visited, navigation, acc);
  });
  return acc;
};

function doDfs(g, v, postorder, visited, navigation, acc) {
  if ('undefined' === typeof visited[v]) {
    visited[v] = true;

    if (!postorder) {
      acc.push(v);
    }
    navigation(v).forEach(function (w) {
      doDfs(g, w, postorder, visited, navigation, acc);
    });
    if (postorder) {
      acc.push(v);
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (dfs);

/***/ }),

/***/ 1081:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Graph = __webpack_require__(1072).Graph,
    slack = __webpack_require__(1073).slack;

module.exports = feasibleTree;

/*
 * Constructs a spanning tree with tight edges and adjusted the input node's
 * ranks to achieve this. A tight edge is one that is has a length that matches
 * its "minlen" attribute.
 *
 * The basic structure for this function is derived from Gansner, et al., "A
 * Technique for Drawing Directed Graphs."
 *
 * Pre-conditions:
 *
 *    1. Graph must be a DAG.
 *    2. Graph must be connected.
 *    3. Graph must have at least one node.
 *    5. Graph nodes must have been previously assigned a "rank" property that
 *       respects the "minlen" property of incident edges.
 *    6. Graph edges must have a "minlen" property.
 *
 * Post-conditions:
 *
 *    - Graph nodes will have their rank adjusted to ensure that all edges are
 *      tight.
 *
 * Returns a tree (undirected graph) that is constructed using only "tight"
 * edges.
 */
function feasibleTree(g) {
  var t = new Graph({ directed: false });

  // Choose arbitrary node from which to start our tree
  var start = g.nodes()[0],
      size = g.nodeCount();
  t.setNode(start, {});

  var edge, delta;
  while (tightTree(t, g) < size) {
    edge = findMinSlackEdge(t, g);
    delta = t.hasNode(edge.v) ? slack(g, edge) : -slack(g, edge);
    shiftRanks(t, g, delta);
  }

  return t;
}

/*
 * Finds a maximal tree of tight edges and returns the number of nodes in the
 * tree.
 */
function tightTree(t, g) {
  function dfs(v) {
    g.nodeEdges(v).forEach(function (e) {
      var edgeV = e.v,
          w = v === edgeV ? e.w : edgeV;
      if (!t.hasNode(w) && !slack(g, e)) {
        t.setNode(w, {});
        t.setEdge(v, w, {});
        dfs(w);
      }
    });
  }

  t.nodes().forEach(dfs);
  return t.nodeCount();
}

/*
 * Finds the edge with the smallest slack that is incident on tree and returns
 * it.
 */
function findMinSlackEdge(t, g) {
  var a = g.edges().map(function (e) {
    if (t.hasNode(e.v) !== t.hasNode(e.w)) {
      return slack(g, e);
    }
  }).filter(function (e) {
    return 'undefined' !== typeof e;
  });
  return Math.min(a);
}

function shiftRanks(t, g, delta) {
  t.nodes().forEach(function (v) {
    g.node(v).rank += delta;
  });
}

/***/ }),

/***/ 1091:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_graphlib__ = __webpack_require__(1072);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__lib_graphlib__; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_layout__ = __webpack_require__(1105);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__lib_layout__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_debug__ = __webpack_require__(1127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_debug___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__lib_debug__);
/* unused harmony reexport debug */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_util__ = __webpack_require__(1070);
/* unused harmony reexport time */
/* unused harmony reexport notime */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_version__ = __webpack_require__(1128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_version___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__lib_version__);
/* unused harmony reexport version */
/*
Copyright (c) 2012-2014 Chris Pettitt

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/









/***/ }),

/***/ 1092:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Graph; });
/* unused harmony export version */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib__ = __webpack_require__(1093);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_json__ = __webpack_require__(1095);
/* unused harmony reexport json */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_alg__ = __webpack_require__(1096);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__lib_alg__; });
/**
 * Copyright (c) 2014, Chris Pettitt
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * 1. Redistributions of source code must retain the above copyright notice, this
 * list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright notice,
 * this list of conditions and the following disclaimer in the documentation
 * and/or other materials provided with the distribution.
 *
 * 3. Neither the name of the copyright holder nor the names of its contributors
 * may be used to endorse or promote products derived from this software without
 * specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
 * FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
 * DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
 * SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 * CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */


var Graph = __WEBPACK_IMPORTED_MODULE_0__lib__["a" /* Graph */];
var version = __WEBPACK_IMPORTED_MODULE_0__lib__["b" /* version */];






/***/ }),

/***/ 1093:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__graph__ = __webpack_require__(1074);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__graph__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__version__ = __webpack_require__(1094);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__version___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__version__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__version___default.a; });
// Includes only the "core" of graphlib




/***/ }),

/***/ 1094:
/***/ (function(module, exports) {

module.exports = '2.1.6-pre';

/***/ }),

/***/ 1095:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export write */
/* unused harmony export read */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__graph__ = __webpack_require__(1074);





function write(g) {
  var json = {
    options: {
      directed: g.isDirected(),
      multigraph: g.isMultigraph(),
      compound: g.isCompound()
    },
    nodes: writeNodes(g),
    edges: writeEdges(g)
  };
  if ('undefined' !== typeof g.graph()) {
    json.value = Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_extends__["a" /* default */])({}, g.graph());
  }
  return json;
}

function writeNodes(g) {
  return g.nodes().map(function (v) {
    var nodeValue = g.node(v),
        parent = g.parent(v),
        node = { v: v };
    if ('undefined' !== typeof nodeValue) {
      node.value = nodeValue;
    }
    if ('undefined' !== typeof parent) {
      node.parent = parent;
    }
    return node;
  });
}

function writeEdges(g) {
  return g.edges().map(function (e) {
    var edgeValue = g.edge(e),
        edge = { v: e.v, w: e.w };
    if ('undefined' !== typeof e.name) {
      edge.name = e.name;
    }
    if ('undefined' !== typeof edgeValue) {
      edge.value = edgeValue;
    }
    return edge;
  });
}

function read(json) {
  var g = new __WEBPACK_IMPORTED_MODULE_1__graph__["a" /* default */](json.options).setGraph(json.value);
  json.nodes.forEach(function (entry) {
    g.setNode(entry.v, entry.value);
    if (entry.parent) {
      g.setParent(entry.v, entry.parent);
    }
  });
  json.edges.forEach(function (entry) {
    g.setEdge({ v: entry.v, w: entry.w, name: entry.name }, entry.value);
  });
  return g;
}

/***/ }),

/***/ 1096:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components__ = __webpack_require__(1097);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return __WEBPACK_IMPORTED_MODULE_0__components__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dijkstra__ = __webpack_require__(1076);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dijkstra", function() { return __WEBPACK_IMPORTED_MODULE_1__dijkstra__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dijkstra_all__ = __webpack_require__(1098);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "dijkstraAll", function() { return __WEBPACK_IMPORTED_MODULE_2__dijkstra_all__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__find_cycles__ = __webpack_require__(1099);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "findCycles", function() { return __WEBPACK_IMPORTED_MODULE_3__find_cycles__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__floyd_warshall__ = __webpack_require__(1100);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "floydWarshall", function() { return __WEBPACK_IMPORTED_MODULE_4__floyd_warshall__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__is_acyclic__ = __webpack_require__(1101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__is_acyclic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__is_acyclic__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "isAcyclic", function() { return __WEBPACK_IMPORTED_MODULE_5__is_acyclic___default.a; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__postorder__ = __webpack_require__(1102);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "postorder", function() { return __WEBPACK_IMPORTED_MODULE_6__postorder__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__preorder__ = __webpack_require__(1103);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "preorder", function() { return __WEBPACK_IMPORTED_MODULE_7__preorder__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__prim__ = __webpack_require__(1104);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "prim", function() { return __WEBPACK_IMPORTED_MODULE_8__prim__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tarjan__ = __webpack_require__(1078);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "tarjan", function() { return __WEBPACK_IMPORTED_MODULE_9__tarjan__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__topsort__ = __webpack_require__(1079);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "topsort", function() { return __WEBPACK_IMPORTED_MODULE_10__topsort__["default"]; });












/***/ }),

/***/ 1097:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

var components = function components(g) {
  var visited = {},
      cmpts = [],
      cmpt;

  function dfs(v) {
    if ('undefined' !== typeof visited[v]) {
      return;
    }
    visited[v] = true;
    cmpt.push(v);
    g.successors(v).forEach(dfs);
    g.predecessors(v).forEach(dfs);
  }

  g.nodes().forEach(function (v) {
    cmpt = [];
    dfs(v);
    if (cmpt.length) {
      cmpts.push(cmpt);
    }
  });

  return cmpts;
};

/* harmony default export */ __webpack_exports__["a"] = (components);

/***/ }),

/***/ 1098:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dijkstra__ = __webpack_require__(1076);


var keys = Object.keys;

var dijkstraAll = function dijkstraAll(g, weightFunc, edgeFunc) {
  var result = {};
  var nodes = g.nodes();
  keys(nodes).forEach(function (key) {
    var value = nodes[key];
    result[value] = Object(__WEBPACK_IMPORTED_MODULE_0__dijkstra__["a" /* default */])(g, value, weightFunc, edgeFunc);
  });
  return result;
};

/* harmony default export */ __webpack_exports__["a"] = (dijkstraAll);

/***/ }),

/***/ 1099:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tarjan__ = __webpack_require__(1078);


var findCycles = function findCycles(g) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__tarjan__["a" /* default */])(g).filter(function (cmpt) {
    return cmpt.length > 1 || cmpt.length === 1 && g.hasEdge(cmpt[0], cmpt[0]);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (findCycles);

/***/ }),

/***/ 1100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var DEFAULT_WEIGHT_FUNC = function DEFAULT_WEIGHT_FUNC() {
  return 1;
};

var floydWarshall = function floydWarshall(g, weightFn, edgeFn) {
  return runFloydWarshall(g, weightFn || DEFAULT_WEIGHT_FUNC, edgeFn || function (v) {
    return g.outEdges(v);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (floydWarshall);

var runFloydWarshall = function runFloydWarshall(g, weightFn, edgeFn) {
  var results = {},
      nodes = g.nodes();

  nodes.forEach(function (v) {
    results[v] = {};
    results[v][v] = { distance: 0 };
    nodes.forEach(function (w) {
      if (v !== w) {
        results[v][w] = { distance: Number.POSITIVE_INFINITY };
      }
    });
    edgeFn(v).forEach(function (edge) {
      var w = edge.v === v ? edge.w : edge.v,
          d = weightFn(edge);
      results[v][w] = { distance: d, predecessor: v };
    });
  });

  nodes.forEach(function (k) {
    var rowK = results[k];
    nodes.forEach(function (i) {
      var rowI = results[i];
      nodes.forEach(function (j) {
        var ik = rowI[k];
        var kj = rowK[j];
        var ij = rowI[j];
        var altDistance = ik.distance + kj.distance;
        if (altDistance < ij.distance) {
          ij.distance = altDistance;
          ij.predecessor = kj.predecessor;
        }
      });
    });
  });

  return results;
};

/***/ }),

/***/ 1101:
/***/ (function(module, exports, __webpack_require__) {

var topsort = __webpack_require__(1079);

module.exports = isAcyclic;

function isAcyclic(g) {
  try {
    topsort(g);
  } catch (e) {
    if (e instanceof topsort.CycleException) {
      return false;
    }
    throw e;
  }
  return true;
}

/***/ }),

/***/ 1102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dfs__ = __webpack_require__(1080);


var postorder = function postorder(g, vs) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__dfs__["a" /* default */])(g, vs, "post");
};

/* harmony default export */ __webpack_exports__["a"] = (postorder);

/***/ }),

/***/ 1103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dfs__ = __webpack_require__(1080);


var preorder = function preorder(g, vs) {
  return Object(__WEBPACK_IMPORTED_MODULE_0__dfs__["a" /* default */])(g, vs, "pre");
};

/* harmony default export */ __webpack_exports__["a"] = (preorder);

/***/ }),

/***/ 1104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__graph__ = __webpack_require__(1074);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_priority_queue__ = __webpack_require__(1077);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_priority_queue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__data_priority_queue__);



var prim = function prim(g, weightFunc) {
  var result = new __WEBPACK_IMPORTED_MODULE_0__graph__["a" /* default */](),
      parents = {},
      pq = new __WEBPACK_IMPORTED_MODULE_1__data_priority_queue___default.a(),
      v;

  function updateNeighbors(edge) {
    var w = edge.v === v ? edge.w : edge.v,
        pri = pq.priority(w);
    if (pri !== undefined) {
      var edgeWeight = weightFunc(edge);
      if (edgeWeight < pri) {
        parents[w] = v;
        pq.decrease(w, edgeWeight);
      }
    }
  }

  if (g.nodeCount() === 0) {
    return result;
  }

  g.nodes().forEach(function (v) {
    pq.add(v, Number.POSITIVE_INFINITY);
    result.setNode(v);
  });

  // Start from an arbitrary node
  pq.decrease(g.nodes()[0], 0);

  var init = false;
  while (pq.size() > 0) {
    v = pq.removeMin();
    if ('undefined' !== typeof parents[v]) {
      result.setEdge(v, parents[v]);
    } else if (init) {
      throw new Error("Input graph is not connected: " + g);
    } else {
      init = true;
    }

    g.nodeEdges(v).forEach(updateNeighbors);
  }

  return result;
};

/* harmony default export */ __webpack_exports__["a"] = (prim);

/***/ }),

/***/ 1105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rank__ = __webpack_require__(1106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order__ = __webpack_require__(1108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lodash_lite__ = __webpack_require__(1071);






var keys = Object.keys;

var acyclic = __webpack_require__(1117),
    normalize = __webpack_require__(1120),
    normalizeRanks = __webpack_require__(1070).normalizeRanks,
    parentDummyChains = __webpack_require__(1121),
    removeEmptyRanks = __webpack_require__(1070).removeEmptyRanks,
    nestingGraph = __webpack_require__(1122),
    addBorderSegments = __webpack_require__(1123),
    coordinateSystem = __webpack_require__(1124),
    position = __webpack_require__(1125),
    util = __webpack_require__(1070),
    Graph = __webpack_require__(1072).Graph;

/* harmony default export */ __webpack_exports__["a"] = (layout);

function layout(g, opts) {
  var time = opts && opts.debugTiming ? util.time : util.notime;
  time("layout", function () {
    var layoutGraph = time("  buildLayoutGraph", function () {
      return buildLayoutGraph(g);
    });
    time("  runLayout", function () {
      runLayout(layoutGraph, time);
    });
    time("  updateInputGraph", function () {
      updateInputGraph(g, layoutGraph);
    });
  });
}

function runLayout(g, time) {
  time("    makeSpaceForEdgeLabels", function () {
    makeSpaceForEdgeLabels(g);
  });
  time("    removeSelfEdges", function () {
    removeSelfEdges(g);
  });
  time("    acyclic", function () {
    acyclic.run(g);
  });
  time("    nestingGraph.run", function () {
    nestingGraph.run(g);
  });
  time("    rank", function () {
    Object(__WEBPACK_IMPORTED_MODULE_1__rank__["a" /* default */])(util.asNonCompoundGraph(g));
  });
  time("    injectEdgeLabelProxies", function () {
    injectEdgeLabelProxies(g);
  });
  time("    removeEmptyRanks", function () {
    removeEmptyRanks(g);
  });
  time("    nestingGraph.cleanup", function () {
    nestingGraph.cleanup(g);
  });
  time("    normalizeRanks", function () {
    normalizeRanks(g);
  });
  time("    assignRankMinMax", function () {
    assignRankMinMax(g);
  });
  time("    removeEdgeLabelProxies", function () {
    removeEdgeLabelProxies(g);
  });
  time("    normalize.run", function () {
    normalize.run(g);
  });
  time("    parentDummyChains", function () {
    parentDummyChains(g);
  });
  time("    addBorderSegments", function () {
    addBorderSegments(g);
  });
  time("    order", function () {
    Object(__WEBPACK_IMPORTED_MODULE_2__order__["a" /* default */])(g);
  });
  time("    insertSelfEdges", function () {
    insertSelfEdges(g);
  });
  time("    adjustCoordinateSystem", function () {
    coordinateSystem.adjust(g);
  });
  time("    position", function () {
    position(g);
  });
  time("    positionSelfEdges", function () {
    positionSelfEdges(g);
  });
  time("    removeBorderNodes", function () {
    removeBorderNodes(g);
  });
  time("    normalize.undo", function () {
    normalize.undo(g);
  });
  time("    fixupEdgeLabelCoords", function () {
    fixupEdgeLabelCoords(g);
  });
  time("    undoCoordinateSystem", function () {
    coordinateSystem.undo(g);
  });
  time("    translateGraph", function () {
    translateGraph(g);
  });
  time("    assignNodeIntersects", function () {
    assignNodeIntersects(g);
  });
  time("    reversePoints", function () {
    reversePointsForReversedEdges(g);
  });
  time("    acyclic.undo", function () {
    acyclic.undo(g);
  });
}

/*
 * Copies final layout information from the layout graph back to the input
 * graph. This process only copies whitelisted attributes from the layout graph
 * to the input graph, so it serves as a good place to determine what
 * attributes can influence layout.
 */
function updateInputGraph(inputGraph, layoutGraph) {
  inputGraph.nodes().forEach(function (v) {
    var inputLabel = inputGraph.node(v),
        layoutLabel = layoutGraph.node(v);

    if (inputLabel) {
      inputLabel.x = layoutLabel.x;
      inputLabel.y = layoutLabel.y;

      if (layoutGraph.children(v).length) {
        inputLabel.width = layoutLabel.width;
        inputLabel.height = layoutLabel.height;
      }
    }
  });

  inputGraph.edges().forEach(function (e) {
    var inputLabel = inputGraph.edge(e),
        layoutLabel = layoutGraph.edge(e);

    inputLabel.points = layoutLabel.points;
    if (layoutLabel.x) {
      inputLabel.x = layoutLabel.x;
      inputLabel.y = layoutLabel.y;
    }
  });

  inputGraph.graph().width = layoutGraph.graph().width;
  inputGraph.graph().height = layoutGraph.graph().height;
}

var graphNumAttrs = ["nodesep", "edgesep", "ranksep", "marginx", "marginy"],
    graphDefaults = { ranksep: 50, edgesep: 20, nodesep: 50, rankdir: "tb" },
    graphAttrs = ["acyclicer", "ranker", "rankdir", "align"],
    nodeNumAttrs = ["width", "height"],
    nodeDefaults = { width: 0, height: 0 },
    edgeNumAttrs = ["minlen", "weight", "width", "height", "labeloffset"],
    edgeDefaults = {
  minlen: 1, weight: 1, width: 0, height: 0,
  labeloffset: 10, labelpos: "r"
},
    edgeAttrs = ["labelpos"];

/*
 * Constructs a new graph from the input graph, which can be used for layout.
 * This process copies only whitelisted attributes from the input graph to the
 * layout graph. Thus this function serves as a good place to determine what
 * attributes can influence layout.
 */
function buildLayoutGraph(inputGraph) {
  var g = new Graph({ multigraph: true, compound: true }),
      graph = canonicalize(inputGraph.graph());

  g.setGraph(Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_extends__["a" /* default */])({}, graphDefaults, selectNumberAttrs(graph, graphNumAttrs), Object(__WEBPACK_IMPORTED_MODULE_3__lodash_lite__["f" /* pick */])(graph, graphAttrs)));

  inputGraph.nodes().forEach(function (v) {
    var node = canonicalize(inputGraph.node(v));
    g.setNode(v, Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_extends__["a" /* default */])({}, nodeDefaults, selectNumberAttrs(node, nodeNumAttrs)));
    g.setParent(v, inputGraph.parent(v));
  });
  inputGraph.edges().forEach(function (e) {
    var edge = canonicalize(inputGraph.edge(e));
    g.setEdge(e, Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_extends__["a" /* default */])({}, edgeDefaults, selectNumberAttrs(edge, edgeNumAttrs), Object(__WEBPACK_IMPORTED_MODULE_3__lodash_lite__["f" /* pick */])(edge, edgeAttrs)));
  });

  return g;
}

/*
 * This idea comes from the Gansner paper: to account for edge labels in our
 * layout we split each rank in half by doubling minlen and halving ranksep.
 * Then we can place labels at these mid-points between nodes.
 *
 * We also add some minimal padding to the width to push the label for the edge
 * away from the edge itself a bit.
 */
function makeSpaceForEdgeLabels(g) {
  var graph = g.graph();
  graph.ranksep /= 2;
  g.edges().forEach(function (e) {
    var edge = g.edge(e);
    edge.minlen *= 2;
    if (edge.labelpos.toLowerCase() !== "c") {
      if (graph.rankdir === "TB" || graph.rankdir === "BT") {
        edge.width += edge.labeloffset;
      } else {
        edge.height += edge.labeloffset;
      }
    }
  });
}

/*
 * Creates temporary dummy nodes that capture the rank in which each edge's
 * label is going to, if it has one of non-zero width and height. We do this
 * so that we can safely remove empty ranks while preserving balance for the
 * label's position.
 */
function injectEdgeLabelProxies(g) {
  g.edges().forEach(function (e) {
    var edge = g.edge(e);
    if (edge.width && edge.height) {
      var v = g.node(e.v),
          w = g.node(e.w),
          label = { rank: (w.rank - v.rank) / 2 + v.rank, e: e };
      util.addDummyNode(g, "edge-proxy", label, "_ep");
    }
  });
}

function assignRankMinMax(g) {
  var maxRank = 0;
  g.nodes().forEach(function (v) {
    var node = g.node(v);
    if (node.borderTop) {
      node.minRank = g.node(node.borderTop).rank;
      node.maxRank = g.node(node.borderBottom).rank;
      maxRank = Math.max(maxRank, node.maxRank);
    }
  });
  g.graph().maxRank = maxRank;
}

function removeEdgeLabelProxies(g) {
  g.nodes().forEach(function (v) {
    var node = g.node(v);
    if (node.dummy === "edge-proxy") {
      g.edge(node.e).labelRank = node.rank;
      g.removeNode(v);
    }
  });
}

function translateGraph(g) {
  var minX = Number.POSITIVE_INFINITY,
      maxX = 0,
      minY = Number.POSITIVE_INFINITY,
      maxY = 0,
      graphLabel = g.graph(),
      marginX = graphLabel.marginx || 0,
      marginY = graphLabel.marginy || 0;

  function getExtremes(attrs) {
    var x = attrs.x,
        y = attrs.y,
        w = attrs.width,
        h = attrs.height;
    minX = Math.min(minX, x - w / 2);
    maxX = Math.max(maxX, x + w / 2);
    minY = Math.min(minY, y - h / 2);
    maxY = Math.max(maxY, y + h / 2);
  }

  g.nodes().forEach(function (v) {
    getExtremes(g.node(v));
  });
  g.edges().forEach(function (e) {
    var edge = g.edge(e);
    if (edge && edge.x) {
      getExtremes(edge);
    }
  });

  minX -= marginX;
  minY -= marginY;

  g.nodes().forEach(function (v) {
    var node = g.node(v);
    node.x -= minX;
    node.y -= minY;
  });

  g.edges().forEach(function (e) {
    var edge = g.edge(e);
    edge.points.forEach(function (p) {
      p.x -= minX;
      p.y -= minY;
    });
    if (edge.x) {
      edge.x -= minX;
    }
    if (edge.y) {
      edge.y -= minY;
    }
  });

  graphLabel.width = maxX - minX + marginX;
  graphLabel.height = maxY - minY + marginY;
}

function assignNodeIntersects(g) {
  g.edges().forEach(function (e) {
    var edge = g.edge(e),
        nodeV = g.node(e.v),
        nodeW = g.node(e.w),
        p1,
        p2;
    if (!edge.points) {
      edge.points = [];
      p1 = nodeW;
      p2 = nodeV;
    } else {
      p1 = edge.points[0];
      p2 = edge.points[edge.points.length - 1];
    }
    edge.points.unshift(util.intersectRect(nodeV, p1));
    edge.points.push(util.intersectRect(nodeW, p2));
  });
}

function fixupEdgeLabelCoords(g) {
  g.edges().forEach(function (e) {
    var edge = g.edge(e);
    if (edge.x) {
      if (edge.labelpos === "l" || edge.labelpos === "r") {
        edge.width -= edge.labeloffset;
      }
      switch (edge.labelpos) {
        case "l":
          edge.x -= edge.width / 2 + edge.labeloffset;break;
        case "r":
          edge.x += edge.width / 2 + edge.labeloffset;break;
      }
    }
  });
}

function reversePointsForReversedEdges(g) {
  g.edges().forEach(function (e) {
    var edge = g.edge(e);
    if (edge.reversed) {
      edge.points.reverse();
    }
  });
}

function removeBorderNodes(g) {
  g.nodes().forEach(function (v) {
    if (g.children(v).length) {
      var node = g.node(v),
          t = g.node(node.borderTop),
          b = g.node(node.borderBottom),
          l = g.node(node.borderLeft.slice(-1)[0]),
          r = g.node(node.borderRight.slice(-1)[0]);

      node.width = Math.abs(r.x - l.x);
      node.height = Math.abs(b.y - t.y);
      node.x = l.x + node.width / 2;
      node.y = t.y + node.height / 2;
    }
  });

  g.nodes().forEach(function (v) {
    if (g.node(v).dummy === "border") {
      g.removeNode(v);
    }
  });
}

function removeSelfEdges(g) {
  g.edges().forEach(function (e) {
    if (e.v === e.w) {
      var node = g.node(e.v);
      if (!node.selfEdges) {
        node.selfEdges = [];
      }
      node.selfEdges.push({ e: e, label: g.edge(e) });
      g.removeEdge(e);
    }
  });
}

function insertSelfEdges(g) {
  var layers = util.buildLayerMatrix(g);
  layers.forEach(function (layer) {
    var orderShift = 0;
    layer.forEach(function (v, i) {
      var node = g.node(v);
      node.order = i + orderShift;
      if (node.selfEdges) {
        node.selfEdges.forEach(function (selfEdge) {
          util.addDummyNode(g, "selfedge", {
            width: selfEdge.label.width,
            height: selfEdge.label.height,
            rank: node.rank,
            order: i + ++orderShift,
            e: selfEdge.e,
            label: selfEdge.label
          }, "_se");
        });
      }
      delete node.selfEdges;
    });
  });
}

function positionSelfEdges(g) {
  g.nodes().forEach(function (v) {
    var node = g.node(v);
    if (node.dummy === "selfedge") {
      var selfNode = g.node(node.e.v),
          x = selfNode.x + selfNode.width / 2,
          y = selfNode.y,
          dx = node.x - x,
          dy = selfNode.height / 2;
      g.setEdge(node.e, node.label);
      g.removeNode(v);
      node.label.points = [{ x: x + 2 * dx / 3, y: y - dy }, { x: x + 5 * dx / 6, y: y - dy }, { x: x + dx, y: y }, { x: x + 5 * dx / 6, y: y + dy }, { x: x + 2 * dx / 3, y: y + dy }];
      node.label.x = node.x;
      node.label.y = node.y;
    }
  });
}

function selectNumberAttrs(obj, attrs) {
  return Object(__WEBPACK_IMPORTED_MODULE_3__lodash_lite__["c" /* mapValues */])(Object(__WEBPACK_IMPORTED_MODULE_3__lodash_lite__["f" /* pick */])(obj, attrs), Number);
}

function canonicalize(attrs) {
  var newAttrs = {};
  keys(attrs).forEach(function (key) {
    return newAttrs[key.toLowerCase()] = attrs[key];
  });
  return newAttrs;
}

/***/ }),

/***/ 1106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__network_simplex__ = __webpack_require__(1107);




var rankUtil = __webpack_require__(1073),
    longestPath = rankUtil.longestPath,
    feasibleTree = __webpack_require__(1081);

/* harmony default export */ __webpack_exports__["a"] = (rank);

/*
 * Assigns a rank to each node in the input graph that respects the "minlen"
 * constraint specified on edges between nodes.
 *
 * This basic structure is derived from Gansner, et al., "A Technique for
 * Drawing Directed Graphs."
 *
 * Pre-conditions:
 *
 *    1. Graph must be a connected DAG
 *    2. Graph nodes must be objects
 *    3. Graph edges must have "weight" and "minlen" attributes
 *
 * Post-conditions:
 *
 *    1. Graph nodes will have a "rank" attribute based on the results of the
 *       algorithm. Ranks can start at any index (including negative), we'll
 *       fix them up later.
 */
function rank(g) {
  switch (g.graph().ranker) {
    case "network-simplex":
      networkSimplexRanker(g);break;
    case "tight-tree":
      tightTreeRanker(g);break;
    case "longest-path":
      longestPathRanker(g);break;
    default:
      networkSimplexRanker(g);
  }
}

// A fast and simple ranker, but results are far from optimal.
var longestPathRanker = longestPath;

function tightTreeRanker(g) {
  longestPath(g);
  feasibleTree(g);
}

function networkSimplexRanker(g) {
  Object(__WEBPACK_IMPORTED_MODULE_0__network_simplex__["a" /* default */])(g);
}

/***/ }),

/***/ 1107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initLowLimValues */
/* unused harmony export initCutValues */
/* unused harmony export calcCutValue */
/* unused harmony export leaveEdge */
/* unused harmony export enterEdge */
/* unused harmony export exchangeEdges */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lodash_lite__ = __webpack_require__(1071);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__graphlib__ = __webpack_require__(1072);





var feasibleTree = __webpack_require__(1081),
    slack = __webpack_require__(1073).slack,
    initRank = __webpack_require__(1073).longestPath,
    preorder = __WEBPACK_IMPORTED_MODULE_1__graphlib__["alg"].preorder,
    postorder = __WEBPACK_IMPORTED_MODULE_1__graphlib__["alg"].postorder,
    simplify = __webpack_require__(1070).simplify;

var keys = Object.keys;

/* harmony default export */ __webpack_exports__["a"] = (networkSimplex);


/*
 * The network simplex algorithm assigns ranks to each node in the input graph
 * and iteratively improves the ranking to reduce the length of edges.
 *
 * Preconditions:
 *
 *    1. The input graph must be a DAG.
 *    2. All nodes in the graph must have an object value.
 *    3. All edges in the graph must have "minlen" and "weight" attributes.
 *
 * Postconditions:
 *
 *    1. All nodes in the graph will have an assigned "rank" attribute that has
 *       been optimized by the network simplex algorithm. Ranks start at 0.
 *
 *
 * A rough sketch of the algorithm is as follows:
 *
 *    1. Assign initial ranks to each node. We use the longest path algorithm,
 *       which assigns ranks to the lowest position possible. In general this
 *       leads to very wide bottom ranks and unnecessarily long edges.
 *    2. Construct a feasible tight tree. A tight tree is one such that all
 *       edges in the tree have no slack (difference between length of edge
 *       and minlen for the edge). This by itself greatly improves the assigned
 *       rankings by shorting edges.
 *    3. Iteratively find edges that have negative cut values. Generally a
 *       negative cut value indicates that the edge could be removed and a new
 *       tree edge could be added to produce a more compact graph.
 *
 * Much of the algorithms here are derived from Gansner, et al., "A Technique
 * for Drawing Directed Graphs." The structure of the file roughly follows the
 * structure of the overall algorithm.
 */
function networkSimplex(g) {
  g = simplify(g);
  initRank(g);
  var t = feasibleTree(g);
  initLowLimValues(t);
  initCutValues(t, g);

  var e, f;
  while (e = leaveEdge(t)) {
    f = enterEdge(t, g, e);
    exchangeEdges(t, g, e, f);
  }
}

/*
 * Initializes cut values for all edges in the tree.
 */
function initCutValues(t, g) {
  var vs = postorder(t, t.nodes());
  vs = vs.slice(0, vs.length - 1);
  vs.forEach(function (v) {
    assignCutValue(t, g, v);
  });
}

function assignCutValue(t, g, child) {
  var childLab = t.node(child),
      parent = childLab.parent;
  t.edge(child, parent).cutvalue = calcCutValue(t, g, child);
}

/*
 * Given the tight tree, its graph, and a child in the graph calculate and
 * return the cut value for the edge between the child and its parent.
 */
function calcCutValue(t, g, child) {
  var childLab = t.node(child),
      parent = childLab.parent,

  // True if the child is on the tail end of the edge in the directed graph
  childIsTail = true,

  // The graph's view of the tree edge we're inspecting
  graphEdge = g.edge(child, parent),

  // The accumulated cut value for the edge between this node and its parent
  cutValue = 0;

  if (!graphEdge) {
    childIsTail = false;
    graphEdge = g.edge(parent, child);
  }

  cutValue = graphEdge.weight;

  g.nodeEdges(child).forEach(function (e) {
    var isOutEdge = e.v === child,
        other = isOutEdge ? e.w : e.v;

    if (other !== parent) {
      var pointsToHead = isOutEdge === childIsTail,
          otherWeight = g.edge(e).weight;

      cutValue += pointsToHead ? otherWeight : -otherWeight;
      if (isTreeEdge(t, child, other)) {
        var otherCutValue = t.edge(child, other).cutvalue;
        cutValue += pointsToHead ? -otherCutValue : otherCutValue;
      }
    }
  });

  return cutValue;
}

function initLowLimValues(tree, root) {
  if (arguments.length < 2) {
    root = tree.nodes()[0];
  }
  dfsAssignLowLim(tree, {}, 1, root);
}

function dfsAssignLowLim(tree, visited, nextLim, v, parent) {
  var low = nextLim,
      label = tree.node(v);

  visited[v] = true;
  tree.neighbors(v).forEach(function (w) {
    if (!visited[w]) {
      nextLim = dfsAssignLowLim(tree, visited, nextLim, w, v);
    }
  });

  label.low = low;
  label.lim = nextLim++;
  if (parent) {
    label.parent = parent;
  } else {
    // TODO should be able to remove this when we incrementally update low lim
    delete label.parent;
  }

  return nextLim;
}

function leaveEdge(tree) {
  var result = null;
  tree.edges().some(function (e) {
    if (tree.edge(e).cutvalue < 0) {
      result = e;
      return true;
    } else {
      return false;
    }
  });
  return result;
}

function enterEdge(t, g, edge) {
  var v = edge.v,
      w = edge.w;

  // For the rest of this function we assume that v is the tail and w is the
  // head, so if we don't have this edge in the graph we should flip it to
  // match the correct orientation.
  if (!g.hasEdge(v, w)) {
    v = edge.w;
    w = edge.v;
  }

  var vLabel = t.node(v),
      wLabel = t.node(w),
      tailLabel = vLabel,
      flip = false;

  // If the root is in the tail of the edge then we need to flip the logic that
  // checks for the head and tail nodes in the candidates function below.
  if (vLabel.lim > wLabel.lim) {
    tailLabel = wLabel;
    flip = true;
  }

  var candidates = g.edges().filter(function (edge) {
    return flip === isDescendant(t, t.node(edge.v), tailLabel) && flip !== isDescendant(t, t.node(edge.w), tailLabel);
  });

  return Object(__WEBPACK_IMPORTED_MODULE_0__lodash_lite__["d" /* minBy */])(candidates, function (edge) {
    return slack(g, edge);
  });
}

function exchangeEdges(t, g, e, f) {
  var v = e.v,
      w = e.w;
  t.removeEdge(v, w);
  t.setEdge(f.v, f.w, {});
  initLowLimValues(t);
  initCutValues(t, g);
  updateRanks(t, g);
}

function updateRanks(t, g) {
  var root = Object(__WEBPACK_IMPORTED_MODULE_0__lodash_lite__["a" /* find */])(t.nodes(), function (v) {
    return !g.node(v).parent;
  }),
      vs = preorder(t, root);
  vs = vs.slice(1);
  vs.forEach(function (v) {
    var parent = t.node(v).parent,
        edge = g.edge(v, parent),
        flipped = false;

    if (!edge) {
      edge = g.edge(parent, v);
      flipped = true;
    }

    g.node(v).rank = g.node(parent).rank + (flipped ? edge.minlen : -edge.minlen);
  });
}

/*
 * Returns true if the edge is in the tree.
 */
function isTreeEdge(tree, u, v) {
  return tree.hasEdge(u, v);
}

/*
 * Returns true if the specified node is descendant of the root node per the
 * assigned low and lim attributes in the tree.
 */
function isDescendant(tree, vLabel, rootLabel) {
  return rootLabel.low <= vLabel.lim && vLabel.lim <= rootLabel.lim;
}

/***/ }),

/***/ 1108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__build_layer_graph__ = __webpack_require__(1109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sort_subgraph__ = __webpack_require__(1110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__add_subgraph_constraints__ = __webpack_require__(1114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__init_order__ = __webpack_require__(1115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cross_count__ = __webpack_require__(1116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lodash_lite__ = __webpack_require__(1071);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__util__ = __webpack_require__(1070);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__graphlib__ = __webpack_require__(1072);












var keys = Object.keys;

/* harmony default export */ __webpack_exports__["a"] = (order);

/*
 * Applies heuristics to minimize edge crossings in the graph and sets the best
 * order solution as an order attribute on each node.
 *
 * Pre-conditions:
 *
 *    1. Graph must be DAG
 *    2. Graph nodes must be objects with a "rank" attribute
 *    3. Graph edges must have the "weight" attribute
 *
 * Post-conditions:
 *
 *    1. Graph nodes will have an "order" attribute based on the results of the
 *       algorithm.
 */
function order(g) {
  var maxRank = __WEBPACK_IMPORTED_MODULE_7__util__["maxRank"](g);
  var downLayerGraphs = buildLayerGraphs(g, Object(__WEBPACK_IMPORTED_MODULE_6__lodash_lite__["g" /* range */])(maxRank + 1).slice(1), "inEdges");
  var upLayerGraphs = buildLayerGraphs(g, Object(__WEBPACK_IMPORTED_MODULE_6__lodash_lite__["h" /* rangeStep */])(maxRank - 1, -1, -1), "outEdges");

  var layering = Object(__WEBPACK_IMPORTED_MODULE_4__init_order__["a" /* default */])(g);
  assignOrder(g, layering);

  var bestCC = Number.POSITIVE_INFINITY,
      best;

  for (var i = 0, lastBest = 0; lastBest < 4; ++i, ++lastBest) {
    sweepLayerGraphs(i % 2 ? downLayerGraphs : upLayerGraphs, i % 4 >= 2);

    layering = __WEBPACK_IMPORTED_MODULE_7__util__["buildLayerMatrix"](g);
    var cc = Object(__WEBPACK_IMPORTED_MODULE_5__cross_count__["a" /* default */])(g, layering);
    if (cc < bestCC) {
      lastBest = 0;
      best = Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_extends__["a" /* default */])({}, layering);
      bestCC = cc;
    }
  }

  assignOrder(g, best);
}

function buildLayerGraphs(g, ranks, relationship) {
  return ranks.map(function (rank) {
    return Object(__WEBPACK_IMPORTED_MODULE_1__build_layer_graph__["a" /* default */])(g, rank, relationship);
  });
}

function sweepLayerGraphs(layerGraphs, biasRight) {
  var cg = new __WEBPACK_IMPORTED_MODULE_8__graphlib__["Graph"]();
  layerGraphs.forEach(function (lg) {
    var root = lg.graph().root;
    var sorted = Object(__WEBPACK_IMPORTED_MODULE_2__sort_subgraph__["a" /* default */])(lg, root, cg, biasRight);
    sorted.vs.forEach(function (v, i) {
      lg.node(v).order = i;
    });
    Object(__WEBPACK_IMPORTED_MODULE_3__add_subgraph_constraints__["a" /* default */])(lg, cg, sorted.vs);
  });
}

function assignOrder(g, layering) {
  keys(layering).forEach(function (key) {
    layering[key].forEach(function (v, i) {
      return g.node(v).order = i;
    });
  });
}

/***/ }),

/***/ 1109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lodash_lite__ = __webpack_require__(1071);


var Graph = __webpack_require__(1072).Graph;

/* harmony default export */ __webpack_exports__["a"] = (buildLayerGraph);

/*
 * Constructs a graph that can be used to sort a layer of nodes. The graph will
 * contain all base and subgraph nodes from the request layer in their original
 * hierarchy and any edges that are incident on these nodes and are of the type
 * requested by the "relationship" parameter.
 *
 * Nodes from the requested rank that do not have parents are assigned a root
 * node in the output graph, which is set in the root graph attribute. This
 * makes it easy to walk the hierarchy of movable nodes during ordering.
 *
 * Pre-conditions:
 *
 *    1. Input graph is a DAG
 *    2. Base nodes in the input graph have a rank attribute
 *    3. Subgraph nodes in the input graph has minRank and maxRank attributes
 *    4. Edges have an assigned weight
 *
 * Post-conditions:
 *
 *    1. Output graph has all nodes in the movable rank with preserved
 *       hierarchy.
 *    2. Root nodes in the movable layer are made children of the node
 *       indicated by the root attribute of the graph.
 *    3. Non-movable nodes incident on movable nodes, selected by the
 *       relationship parameter, are included in the graph (without hierarchy).
 *    4. Edges incident on movable nodes, selected by the relationship
 *       parameter, are added to the output graph.
 *    5. The weights for copied edges are aggregated as need, since the output
 *       graph is not a multi-graph.
 */
function buildLayerGraph(g, rank, relationship) {
  var root = createRootNode(g),
      result = new Graph({ compound: true }).setGraph({ root: root }).setDefaultNodeLabel(function (v) {
    return g.node(v);
  });

  g.nodes().forEach(function (v) {
    var node = g.node(v),
        parent = g.parent(v);

    if (node.rank === rank || node.minRank <= rank && rank <= node.maxRank) {
      result.setNode(v);
      result.setParent(v, parent || root);

      // This assumes we have only short edges!
      g[relationship](v).forEach(function (e) {
        var u = e.v === v ? e.w : e.v,
            edge = result.edge(u, v),
            weight = "undefined" !== typeof edge ? edge.weight : 0;
        result.setEdge(u, v, { weight: g.edge(e).weight + weight });
      });

      if ('undefined' !== typeof node.minRank) {
        result.setNode(v, {
          borderLeft: node.borderLeft[rank],
          borderRight: node.borderRight[rank]
        });
      }
    }
  });

  return result;
}

function createRootNode(g) {
  var v;
  while (g.hasNode(v = Object(__WEBPACK_IMPORTED_MODULE_0__lodash_lite__["i" /* uniqueId */])("_root"))) {}
  return v;
}

/***/ }),

/***/ 1110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lodash_lite__ = __webpack_require__(1071);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resolve_conflicts__ = __webpack_require__(1111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sort__ = __webpack_require__(1112);




var barycenter = __webpack_require__(1113);

/* harmony default export */ __webpack_exports__["a"] = (sortSubgraph);

function sortSubgraph(g, v, cg, biasRight) {
  var movable = g.children(v),
      node = g.node(v),
      bl = node ? node.borderLeft : undefined,
      br = node ? node.borderRight : undefined,
      subgraphs = {};

  if (bl) {
    movable = movable.filter(function (w) {
      return w !== bl && w !== br;
    });
  }

  var barycenters = barycenter(g, movable);
  barycenters.forEach(function (entry) {
    if (g.children(entry.v).length) {
      var subgraphResult = sortSubgraph(g, entry.v, cg, biasRight);
      subgraphs[entry.v] = subgraphResult;
      if (subgraphResult.barycenter) {
        mergeBarycenters(entry, subgraphResult);
      }
    }
  });

  var entries = Object(__WEBPACK_IMPORTED_MODULE_1__resolve_conflicts__["a" /* default */])(barycenters, cg);
  expandSubgraphs(entries, subgraphs);

  var result = Object(__WEBPACK_IMPORTED_MODULE_2__sort__["a" /* default */])(entries, biasRight);

  if (bl) {
    result.vs = Object(__WEBPACK_IMPORTED_MODULE_0__lodash_lite__["b" /* flattenDownDepth */])([bl, result.vs, br], [], 1);
    if (g.predecessors(bl).length) {
      var blPred = g.node(g.predecessors(bl)[0]),
          brPred = g.node(g.predecessors(br)[0]);
      if ('undefined' === typeof result.barycenter) {
        result.barycenter = 0;
        result.weight = 0;
      }
      result.barycenter = (result.barycenter * result.weight + blPred.order + brPred.order) / (result.weight + 2);
      result.weight += 2;
    }
  }

  return result;
}

function expandSubgraphs(entries, subgraphs) {
  entries.forEach(function (entry) {
    entry.vs = Object(__WEBPACK_IMPORTED_MODULE_0__lodash_lite__["b" /* flattenDownDepth */])(entry.vs.map(function (v) {
      if (subgraphs[v]) {
        return subgraphs[v].vs;
      }
      return v;
    }), [], 1);
  });
}

function mergeBarycenters(target, other) {
  if ('undefined' !== typeof target.barycenter) {
    target.barycenter = (target.barycenter * target.weight + other.barycenter * other.weight) / (target.weight + other.weight);
    target.weight += other.weight;
  } else {
    target.barycenter = other.barycenter;
    target.weight = other.weight;
  }
}

/***/ }),

/***/ 1111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lodash_lite__ = __webpack_require__(1071);




/* harmony default export */ __webpack_exports__["a"] = (resolveConflicts);

var keys = Object.keys;

/*
 * Given a list of entries of the form {v, barycenter, weight} and a
 * constraint graph this function will resolve any conflicts between the
 * constraint graph and the barycenters for the entries. If the barycenters for
 * an entry would violate a constraint in the constraint graph then we coalesce
 * the nodes in the conflict into a new node that respects the contraint and
 * aggregates barycenter and weight information.
 *
 * This implementation is based on the description in Forster, "A Fast and
 * Simple Hueristic for Constrained Two-Level Crossing Reduction," thought it
 * differs in some specific details.
 *
 * Pre-conditions:
 *
 *    1. Each entry has the form {v, barycenter, weight}, or if the node has
 *       no barycenter, then {v}.
 *
 * Returns:
 *
 *    A new list of entries of the form {vs, i, barycenter, weight}. The list
 *    `vs` may either be a singleton or it may be an aggregation of nodes
 *    ordered such that they do not violate constraints from the constraint
 *    graph. The property `i` is the lowest original index of any of the
 *    elements in `vs`.
 */
function resolveConflicts(entries, cg) {
  var mappedEntries = {};
  entries.forEach(function (entry, i) {
    var tmp = mappedEntries[entry.v] = {
      indegree: 0,
      "in": [],
      out: [],
      vs: [entry.v],
      i: i
    };
    if ('undefined' !== typeof entry.barycenter) {
      tmp.barycenter = entry.barycenter;
      tmp.weight = entry.weight;
    }
  });

  cg.edges().forEach(function (e) {
    var entryV = mappedEntries[e.v],
        entryW = mappedEntries[e.w];
    if ('undefined' !== typeof entryV && 'undefined' !== typeof entryW) {
      entryW.indegree++;
      entryV.out.push(mappedEntries[e.w]);
    }
  });

  var sourceSet = keys(mappedEntries).filter(function (key) {
    return !mappedEntries[key].indegree;
  }).map(function (key) {
    return mappedEntries[key];
  });

  return doResolveConflicts(sourceSet);
}

function doResolveConflicts(sourceSet) {
  var entries = [];

  function handleIn(vEntry) {
    return function (uEntry) {
      if (uEntry.merged) {
        return;
      }
      if ('undefined' === typeof uEntry.barycenter || 'undefined' === typeof vEntry.barycenter || uEntry.barycenter >= vEntry.barycenter) {
        mergeEntries(vEntry, uEntry);
      }
    };
  }

  function handleOut(vEntry) {
    return function (wEntry) {
      wEntry["in"].push(vEntry);
      if (--wEntry.indegree === 0) {
        sourceSet.push(wEntry);
      }
    };
  }

  while (sourceSet.length) {
    var entry = sourceSet.pop();
    entries.push(entry);
    entry["in"].reverse().forEach(handleIn(entry));
    entry.out.forEach(handleOut(entry));
  }

  return entries.filter(function (entry) {
    return !entry.merged;
  }).map(function (entry) {
    return Object(__WEBPACK_IMPORTED_MODULE_0__lodash_lite__["f" /* pick */])(entry, ["vs", "i", "barycenter", "weight"]);
  }).map(function (value) {
    return value;
  });
}

function mergeEntries(target, source) {
  var sum = 0,
      weight = 0;

  if (target.weight) {
    sum += target.barycenter * target.weight;
    weight += target.weight;
  }

  if (source.weight) {
    sum += source.barycenter * source.weight;
    weight += source.weight;
  }

  target.vs = source.vs.concat(target.vs);
  target.barycenter = sum / weight;
  target.weight = weight;
  target.i = Math.min(source.i, target.i);
  source.merged = true;
}

/***/ }),

/***/ 1112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lodash_lite__ = __webpack_require__(1071);


var util = __webpack_require__(1070);

/* harmony default export */ __webpack_exports__["a"] = (sort);

function sort(entries, biasRight) {
  var parts = util.partition(entries, function (entry) {
    return 'undefined' !== typeof entry.barycenter;
  });
  var sortable = parts.lhs,
      unsortable = parts.rhs.sort(function (entry) {
    return -entry.i;
  }),
      vs = [],
      sum = 0,
      weight = 0,
      vsIndex = 0;

  sortable.sort(compareWithBias(!!biasRight));

  vsIndex = consumeUnsortable(vs, unsortable, vsIndex);

  sortable.forEach(function (entry) {
    vsIndex += entry.vs.length;
    vs.push(entry.vs);
    sum += entry.barycenter * entry.weight;
    weight += entry.weight;
    vsIndex = consumeUnsortable(vs, unsortable, vsIndex);
  });

  var result = { vs: Object(__WEBPACK_IMPORTED_MODULE_0__lodash_lite__["b" /* flattenDownDepth */])(vs, [], 1) };
  if (weight) {
    result.barycenter = sum / weight;
    result.weight = weight;
  }
  return result;
}

function consumeUnsortable(vs, unsortable, index) {
  var last;
  while (unsortable.length && (last = unsortable.slice(-1)[0]).i <= index) {
    unsortable.pop();
    vs.push(last.vs);
    index++;
  }
  return index;
}

function compareWithBias(bias) {
  return function (entryV, entryW) {
    if (entryV.barycenter < entryW.barycenter) {
      return -1;
    } else if (entryV.barycenter > entryW.barycenter) {
      return 1;
    }

    return !bias ? entryV.i - entryW.i : entryW.i - entryV.i;
  };
}

/***/ }),

/***/ 1113:
/***/ (function(module, exports) {


module.exports = barycenter;

function barycenter(g, movable) {
  return movable.map(function (v) {
    var inV = g.inEdges(v);
    if (!inV.length) {
      return { v: v };
    } else {
      var result = inV.reduce(function (acc, e) {
        var edge = g.edge(e),
            nodeU = g.node(e.v);
        return {
          sum: acc.sum + edge.weight * nodeU.order,
          weight: acc.weight + edge.weight
        };
      }, { sum: 0, weight: 0 });

      return {
        v: v,
        barycenter: result.sum / result.weight,
        weight: result.weight
      };
    }
  });
}

/***/ }),

/***/ 1114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";


var addSubgraphConstraints = function addSubgraphConstraints(g, cg, vs) {
  var prev = {},
      rootPrev;

  vs.forEach(function (v) {
    var child = g.parent(v),
        parent,
        prevChild;
    while (child) {
      parent = g.parent(child);
      if (parent) {
        prevChild = prev[parent];
        prev[parent] = child;
      } else {
        prevChild = rootPrev;
        rootPrev = child;
      }
      if (prevChild && prevChild !== child) {
        cg.setEdge(prevChild, child);
        return;
      }
      child = parent;
    }
  });
};

/* harmony default export */ __webpack_exports__["a"] = (addSubgraphConstraints);

/***/ }),

/***/ 1115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lodash_lite__ = __webpack_require__(1071);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1070);





/* harmony default export */ __webpack_exports__["a"] = (initOrder);

/*
 * Assigns an initial order value for each node by performing a DFS search
 * starting from nodes in the first rank. Nodes are assigned an order in their
 * rank as they are first visited.
 *
 * This approach comes from Gansner, et al., "A Technique for Drawing Directed
 * Graphs."
 *
 * Returns a layering matrix with an array per layer and each layer sorted by
 * the order of its nodes.
 */
function initOrder(g) {
  var visited = {},
      simpleNodes = g.nodes().filter(function (v) {
    return !g.children(v).length;
  });
  var maxRank = Object(__WEBPACK_IMPORTED_MODULE_1__util__["maxRank"])(g, simpleNodes);
  var layers = Object(__WEBPACK_IMPORTED_MODULE_0__lodash_lite__["g" /* range */])(maxRank + 1).map(function () {
    return [];
  });

  function dfs(v) {
    if (visited[v]) return;
    visited[v] = true;
    var node = g.node(v);
    layers[node.rank].push(v);
    g.successors(v).forEach(dfs);
  }

  var orderedVs = simpleNodes.sort(function (v) {
    return g.node(v).rank;
  });
  orderedVs.forEach(dfs);

  return layers;
}

/***/ }),

/***/ 1116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lodash_lite__ = __webpack_require__(1071);




/* harmony default export */ __webpack_exports__["a"] = (crossCount);

/*
 * A function that takes a layering (an array of layers, each with an array of
 * ordererd nodes) and a graph and returns a weighted crossing count.
 *
 * Pre-conditions:
 *
 *    1. Input graph must be simple (not a multigraph), directed, and include
 *       only simple edges.
 *    2. Edges in the input graph must have assigned weights.
 *
 * Post-conditions:
 *
 *    1. The graph and layering matrix are left unchanged.
 *
 * This algorithm is derived from Barth, et al., "Bilayer Cross Counting."
 */
function crossCount(g, layering) {
  var cc = 0;
  for (var i = 1; i < layering.length; ++i) {
    cc += twoLayerCrossCount(g, layering[i - 1], layering[i]);
  }
  return cc;
}

function twoLayerCrossCount(g, northLayer, southLayer) {
  // Sort all of the edges between the north and south layers by their position
  // in the north layer and then the south. Map these edges to the position of
  // their head in the south layer.
  var southPos = Object(__WEBPACK_IMPORTED_MODULE_0__lodash_lite__["j" /* zipObject */])(southLayer, southLayer.map(function (v, i) {
    return i;
  }));
  var southEntries = Object(__WEBPACK_IMPORTED_MODULE_0__lodash_lite__["b" /* flattenDownDepth */])(northLayer.map(function (v) {
    return g.outEdges(v).map(function (e) {
      return { pos: southPos[e.w], weight: g.edge(e).weight };
    }).sort(function (d) {
      return d.pos;
    }).map(function (d) {
      return d;
    });
  }), [], 1);

  // Build the accumulator tree
  var firstIndex = 1;
  while (firstIndex < southLayer.length) {
    firstIndex <<= 1;
  }var treeSize = 2 * firstIndex - 1;
  firstIndex -= 1;
  var tree = Object(__WEBPACK_IMPORTED_MODULE_0__lodash_lite__["g" /* range */])(treeSize).map(function () {
    return 0;
  });

  // Calculate the weighted crossings
  var cc = 0;
  southEntries.forEach(function (entry) {
    var index = entry.pos + firstIndex;
    tree[index] += entry.weight;
    var weightSum = 0;
    while (index > 0) {
      if (index % 2) {
        weightSum += tree[index + 1];
      }
      index = index - 1 >> 1;
      tree[index] += entry.weight;
    }
    cc += entry.weight * weightSum;
  });

  return cc;
}

/***/ }),

/***/ 1117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "undo", function() { return undo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lodash_lite__ = __webpack_require__(1071);




var greedyFAS = __webpack_require__(1118);



function run(g) {
  var fas = g.graph().acyclicer === "greedy" ? greedyFAS(g, weightFn(g)) : dfsFAS(g);
  fas.forEach(function (e) {
    var label = g.edge(e);
    g.removeEdge(e);
    label.forwardName = e.name;
    label.reversed = true;
    g.setEdge(e.w, e.v, label, Object(__WEBPACK_IMPORTED_MODULE_0__lodash_lite__["i" /* uniqueId */])("rev"));
  });

  function weightFn(g) {
    return function (e) {
      return g.edge(e).weight;
    };
  }
}

function dfsFAS(g) {
  var fas = [],
      stack = {},
      visited = {};

  function dfs(v) {
    if (visited[v]) {
      return;
    }
    visited[v] = true;
    stack[v] = true;
    g.outEdges(v).forEach(function (e) {
      if (stack[e.w]) {
        fas.push(e);
      } else {
        dfs(e.w);
      }
    });
    delete stack[v];
  }

  g.nodes().forEach(dfs);
  return fas;
}

function undo(g) {
  g.edges().forEach(function (e) {
    var label = g.edge(e);
    if (label.reversed) {
      g.removeEdge(e);

      var forwardName = label.forwardName;
      delete label.reversed;
      delete label.forwardName;
      g.setEdge(e.w, e.v, label, forwardName);
    }
  });
}

/***/ }),

/***/ 1118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lodash_lite__ = __webpack_require__(1071);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__graphlib__ = __webpack_require__(1072);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_list__ = __webpack_require__(1119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_list___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__data_list__);




/*
 * A greedy heuristic for finding a feedback arc set for a graph. A feedback
 * arc set is a set of edges that can be removed to make a graph acyclic.
 * The algorithm comes from: P. Eades, X. Lin, and W. F. Smyth, "A fast and
 * effective heuristic for the feedback arc set problem." This implementation
 * adjusts that from the paper to allow for weighted edges.
 */
/* harmony default export */ __webpack_exports__["default"] = (greedyFAS);

var DEFAULT_WEIGHT_FN = function DEFAULT_WEIGHT_FN() {
  return 1;
};

function greedyFAS(g, weightFn) {
  if (g.nodeCount() <= 1) {
    return [];
  }
  var state = buildState(g, weightFn || DEFAULT_WEIGHT_FN);
  var results = doGreedyFAS(state.graph, state.buckets, state.zeroIdx);

  // Expand multi-edges
  return Object(__WEBPACK_IMPORTED_MODULE_0__lodash_lite__["b" /* flattenDownDepth */])(results.map(function (e) {
    return g.outEdges(e.v, e.w);
  }), [], 1);
}

function doGreedyFAS(g, buckets, zeroIdx) {
  var results = [],
      sources = buckets[buckets.length - 1],
      sinks = buckets[0];

  var entry;
  while (g.nodeCount()) {
    while (entry = sinks.dequeue()) {
      removeNode(g, buckets, zeroIdx, entry);
    }
    while (entry = sources.dequeue()) {
      removeNode(g, buckets, zeroIdx, entry);
    }
    if (g.nodeCount()) {
      for (var i = buckets.length - 2; i > 0; --i) {
        entry = buckets[i].dequeue();
        if (entry) {
          results = results.concat(removeNode(g, buckets, zeroIdx, entry, true));
          break;
        }
      }
    }
  }

  return results;
}

function removeNode(g, buckets, zeroIdx, entry, collectPredecessors) {
  var results = collectPredecessors ? [] : undefined;

  g.inEdges(entry.v).forEach(function (edge) {
    var weight = g.edge(edge),
        uEntry = g.node(edge.v);

    if (collectPredecessors) {
      results.push({ v: edge.v, w: edge.w });
    }

    uEntry.out -= weight;
    assignBucket(buckets, zeroIdx, uEntry);
  });

  g.outEdges(entry.v).forEach(function (edge) {
    var weight = g.edge(edge),
        w = edge.w,
        wEntry = g.node(w);
    wEntry["in"] -= weight;
    assignBucket(buckets, zeroIdx, wEntry);
  });

  g.removeNode(entry.v);

  return results;
}

function buildState(g, weightFn) {
  var fasGraph = new __WEBPACK_IMPORTED_MODULE_1__graphlib__["Graph"](),
      maxIn = 0,
      maxOut = 0;

  g.nodes().forEach(function (v) {
    fasGraph.setNode(v, { v: v, "in": 0, out: 0 });
  });

  // Aggregate weights on nodes, but also sum the weights across multi-edges
  // into a single edge for the fasGraph.
  g.edges().forEach(function (e) {
    var prevWeight = fasGraph.edge(e.v, e.w) || 0,
        weight = weightFn(e),
        edgeWeight = prevWeight + weight;
    fasGraph.setEdge(e.v, e.w, edgeWeight);
    maxOut = Math.max(maxOut, fasGraph.node(e.v).out += weight);
    maxIn = Math.max(maxIn, fasGraph.node(e.w)["in"] += weight);
  });

  var buckets = Object(__WEBPACK_IMPORTED_MODULE_0__lodash_lite__["g" /* range */])(maxOut + maxIn + 3).map(function () {
    return new __WEBPACK_IMPORTED_MODULE_2__data_list___default.a();
  });
  var zeroIdx = maxIn + 1;

  fasGraph.nodes().forEach(function (v) {
    assignBucket(buckets, zeroIdx, fasGraph.node(v));
  });

  return { graph: fasGraph, buckets: buckets, zeroIdx: zeroIdx };
}

function assignBucket(buckets, zeroIdx, entry) {
  if (!entry.out) {
    buckets[0].enqueue(entry);
  } else if (!entry["in"]) {
    buckets[buckets.length - 1].enqueue(entry);
  } else {
    buckets[entry.out - entry["in"] + zeroIdx].enqueue(entry);
  }
}

/***/ }),

/***/ 1119:
/***/ (function(module, exports) {

/*
 * Simple doubly linked list implementation derived from Cormen, et al.,
 * "Introduction to Algorithms".
 */

module.exports = List;

function List() {
  var sentinel = {};
  sentinel._next = sentinel._prev = sentinel;
  this._sentinel = sentinel;
}

List.prototype.dequeue = function () {
  var sentinel = this._sentinel,
      entry = sentinel._prev;
  if (entry !== sentinel) {
    unlink(entry);
    return entry;
  }
};

List.prototype.enqueue = function (entry) {
  var sentinel = this._sentinel;
  if (entry._prev && entry._next) {
    unlink(entry);
  }
  entry._next = sentinel._next;
  sentinel._next._prev = entry;
  sentinel._next = entry;
  entry._prev = sentinel;
};

List.prototype.toString = function () {
  var strs = [],
      sentinel = this._sentinel,
      curr = sentinel._prev;
  while (curr !== sentinel) {
    strs.push(JSON.stringify(curr, filterOutLinks));
    curr = curr._prev;
  }
  return "[" + strs.join(", ") + "]";
};

function unlink(entry) {
  entry._prev._next = entry._next;
  entry._next._prev = entry._prev;
  delete entry._next;
  delete entry._prev;
}

function filterOutLinks(k, v) {
  if (k !== "_next" && k !== "_prev") {
    return v;
  }
}

/***/ }),

/***/ 1120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(1070);

module.exports = {
  run: run,
  undo: undo
};

/*
 * Breaks any long edges in the graph into short segments that span 1 layer
 * each. This operation is undoable with the denormalize function.
 *
 * Pre-conditions:
 *
 *    1. The input graph is a DAG.
 *    2. Each node in the graph has a "rank" property.
 *
 * Post-condition:
 *
 *    1. All edges in the graph have a length of 1.
 *    2. Dummy nodes are added where edges have been split into segments.
 *    3. The graph is augmented with a "dummyChains" attribute which contains
 *       the first dummy in each chain of dummy nodes produced.
 */
function run(g) {
  g.graph().dummyChains = [];
  g.edges().forEach(function (edge) {
    normalizeEdge(g, edge);
  });
}

function normalizeEdge(g, e) {
  var v = e.v,
      vRank = g.node(v).rank,
      w = e.w,
      wRank = g.node(w).rank,
      name = e.name,
      edgeLabel = g.edge(e),
      labelRank = edgeLabel.labelRank;

  if (wRank === vRank + 1) return;

  g.removeEdge(e);

  var dummy, attrs, i;
  for (i = 0, ++vRank; vRank < wRank; ++i, ++vRank) {
    edgeLabel.points = [];
    attrs = {
      width: 0, height: 0,
      edgeLabel: edgeLabel, edgeObj: e,
      rank: vRank
    };
    dummy = util.addDummyNode(g, "edge", attrs, "_d");
    if (vRank === labelRank) {
      attrs.width = edgeLabel.width;
      attrs.height = edgeLabel.height;
      attrs.dummy = "edge-label";
      attrs.labelpos = edgeLabel.labelpos;
    }
    g.setEdge(v, dummy, { weight: edgeLabel.weight }, name);
    if (i === 0) {
      g.graph().dummyChains.push(dummy);
    }
    v = dummy;
  }

  g.setEdge(v, w, { weight: edgeLabel.weight }, name);
}

function undo(g) {
  g.graph().dummyChains.forEach(function (v) {
    var node = g.node(v),
        origLabel = node.edgeLabel,
        w;
    g.setEdge(node.edgeObj, origLabel);
    while (node.dummy) {
      w = g.successors(v)[0];
      g.removeNode(v);
      origLabel.points.push({ x: node.x, y: node.y });
      if (node.dummy === "edge-label") {
        origLabel.x = node.x;
        origLabel.y = node.y;
        origLabel.width = node.width;
        origLabel.height = node.height;
      }
      v = w;
      node = g.node(v);
    }
  });
}

/***/ }),

/***/ 1121:
/***/ (function(module, exports) {


module.exports = parentDummyChains;

function parentDummyChains(g) {
  var postorderNums = postorder(g);

  g.graph().dummyChains.forEach(function (v) {
    var node = g.node(v),
        edgeObj = node.edgeObj,
        pathData = findPath(g, postorderNums, edgeObj.v, edgeObj.w),
        path = pathData.path,
        lca = pathData.lca,
        pathIdx = 0,
        pathV = path[pathIdx],
        ascending = true;

    while (v !== edgeObj.w) {
      node = g.node(v);

      if (ascending) {
        while ((pathV = path[pathIdx]) !== lca && g.node(pathV).maxRank < node.rank) {
          pathIdx++;
        }

        if (pathV === lca) {
          ascending = false;
        }
      }

      if (!ascending) {
        while (pathIdx < path.length - 1 && g.node(pathV = path[pathIdx + 1]).minRank <= node.rank) {
          pathIdx++;
        }
        pathV = path[pathIdx];
      }

      g.setParent(v, pathV);
      v = g.successors(v)[0];
    }
  });
}

// Find a path from v to w through the lowest common ancestor (LCA). Return the
// full path and the LCA.
function findPath(g, postorderNums, v, w) {
  var vPath = [],
      wPath = [],
      low = Math.min(postorderNums[v].low, postorderNums[w].low),
      lim = Math.max(postorderNums[v].lim, postorderNums[w].lim),
      parent,
      lca;

  // Traverse up from v to find the LCA
  parent = v;
  do {
    parent = g.parent(parent);
    vPath.push(parent);
  } while (parent && (postorderNums[parent].low > low || lim > postorderNums[parent].lim));
  lca = parent;

  // Traverse from w to LCA
  parent = w;
  while ((parent = g.parent(parent)) !== lca) {
    wPath.push(parent);
  }

  return { path: vPath.concat(wPath.reverse()), lca: lca };
}

function postorder(g) {
  var result = {},
      lim = 0;

  function dfs(v) {
    var low = lim;
    g.children(v).forEach(dfs);
    result[v] = { low: low, lim: lim++ };
  }
  g.children().forEach(dfs);

  return result;
}

/***/ }),

/***/ 1122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "run", function() { return run; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cleanup", function() { return cleanup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_toConsumableArray__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__util__ = __webpack_require__(1070);





var keys = Object.keys;

/*
 * A nesting graph creates dummy nodes for the tops and bottoms of subgraphs,
 * adds appropriate edges to ensure that all cluster nodes are placed between
 * these boundries, and ensures that the graph is connected.
 *
 * In addition we ensure, through the use of the minlen property, that nodes
 * and subgraph border nodes to not end up on the same rank.
 *
 * Preconditions:
 *
 *    1. Input graph is a DAG
 *    2. Nodes in the input graph has a minlen attribute
 *
 * Postconditions:
 *
 *    1. Input graph is connected.
 *    2. Dummy nodes are added for the tops and bottoms of subgraphs.
 *    3. The minlen attribute for nodes is adjusted to ensure nodes do not
 *       get placed on the same rank as subgraph border nodes.
 *
 * The nesting graph idea comes from Sander, "Layout of Compound Directed
 * Graphs."
 */
function run(g) {
  var root = __WEBPACK_IMPORTED_MODULE_1__util__["addDummyNode"](g, "root", {}, "_root");
  var depths = treeDepths(g);
  var height = Math.max.apply(Math, Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_toConsumableArray__["a" /* default */])(keys(depths).map(function (key) {
    return depths[key];
  }))) - 1; // Note: depths is an Object not an array
  var nodeSep = 2 * height + 1;

  g.graph().nestingRoot = root;

  // Multiply minlen by nodeSep to align nodes on non-border ranks.
  g.edges().forEach(function (e) {
    g.edge(e).minlen *= nodeSep;
  });

  // Calculate a weight that is sufficient to keep subgraphs vertically compact
  var weight = sumWeights(g) + 1;

  // Create border nodes and link them up
  g.children().forEach(function (child) {
    dfs(g, root, nodeSep, weight, height, depths, child);
  });

  // Save the multiplier for node layers for later removal of empty border
  // layers.
  g.graph().nodeRankFactor = nodeSep;
}

function dfs(g, root, nodeSep, weight, height, depths, v) {
  var children = g.children(v);
  if (!children.length) {
    if (v !== root) {
      g.setEdge(root, v, { weight: 0, minlen: nodeSep });
    }
    return;
  }

  var top = __WEBPACK_IMPORTED_MODULE_1__util__["addBorderNode"](g, "_bt"),
      bottom = __WEBPACK_IMPORTED_MODULE_1__util__["addBorderNode"](g, "_bb"),
      label = g.node(v);

  g.setParent(top, v);
  label.borderTop = top;
  g.setParent(bottom, v);
  label.borderBottom = bottom;

  children.forEach(function (child) {
    dfs(g, root, nodeSep, weight, height, depths, child);

    var childNode = g.node(child),
        childTop = childNode.borderTop ? childNode.borderTop : child,
        childBottom = childNode.borderBottom ? childNode.borderBottom : child,
        thisWeight = childNode.borderTop ? weight : 2 * weight,
        minlen = childTop !== childBottom ? 1 : height - depths[v] + 1;

    g.setEdge(top, childTop, {
      weight: thisWeight,
      minlen: minlen,
      nestingEdge: true
    });

    g.setEdge(childBottom, bottom, {
      weight: thisWeight,
      minlen: minlen,
      nestingEdge: true
    });
  });

  if (!g.parent(v)) {
    g.setEdge(root, top, { weight: 0, minlen: height + depths[v] });
  }
}

function treeDepths(g) {
  var depths = {};
  function dfs(v, depth) {
    var children = g.children(v);
    if (children && children.length) {
      children.forEach(function (child) {
        dfs(child, depth + 1);
      });
    }
    depths[v] = depth;
  }
  g.children().forEach(function (v) {
    dfs(v, 1);
  });
  return depths;
}

function sumWeights(g) {
  return g.edges().reduce(function (acc, e) {
    return acc + g.edge(e).weight;
  }, 0);
}

function cleanup(g) {
  var graphLabel = g.graph();
  g.removeNode(graphLabel.nestingRoot);
  delete graphLabel.nestingRoot;
  g.edges().forEach(function (e) {
    var edge = g.edge(e);
    if (edge.nestingEdge) {
      g.removeEdge(e);
    }
  });
}

/***/ }),

/***/ 1123:
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(1070);

module.exports = addBorderSegments;

function addBorderSegments(g) {
  function dfs(v) {
    var children = g.children(v),
        node = g.node(v);
    if (children.length) {
      children.forEach(dfs);
    }

    if (node.minRank) {
      node.borderLeft = [];
      node.borderRight = [];
      for (var rank = node.minRank, maxRank = node.maxRank + 1; rank < maxRank; ++rank) {
        addBorderNode(g, "borderLeft", "_bl", v, node, rank);
        addBorderNode(g, "borderRight", "_br", v, node, rank);
      }
    }
  }

  g.children().forEach(dfs);
}

function addBorderNode(g, prop, prefix, sg, sgNode, rank) {
  var label = { width: 0, height: 0, rank: rank, borderType: prop },
      prev = sgNode[prop][rank - 1],
      curr = util.addDummyNode(g, "border", label, prefix);
  sgNode[prop][rank] = curr;
  g.setParent(curr, sg);
  if (prev) {
    g.setEdge(prev, curr, { weight: 1 });
  }
}

/***/ }),

/***/ 1124:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  adjust: adjust,
  undo: undo
};

function adjust(g) {
  var rankDir = g.graph().rankdir.toLowerCase();
  if (rankDir === "lr" || rankDir === "rl") {
    swapWidthHeight(g);
  }
}

function undo(g) {
  var rankDir = g.graph().rankdir.toLowerCase();
  if (rankDir === "bt" || rankDir === "rl") {
    reverseY(g);
  }

  if (rankDir === "lr" || rankDir === "rl") {
    swapXY(g);
    swapWidthHeight(g);
  }
}

function swapWidthHeight(g) {
  g.nodes().forEach(function (v) {
    swapWidthHeightOne(g.node(v));
  });
  g.edges().forEach(function (e) {
    swapWidthHeightOne(g.edge(e));
  });
}

function swapWidthHeightOne(attrs) {
  var w = attrs.width;
  attrs.width = attrs.height;
  attrs.height = w;
}

function reverseY(g) {
  g.nodes().forEach(function (v) {
    reverseYOne(g.node(v));
  });

  g.edges().forEach(function (e) {
    var edge = g.edge(e);
    edge.points.forEach(reverseYOne);
    if (edge.y) {
      reverseYOne(edge);
    }
  });
}

function reverseYOne(attrs) {
  attrs.y = -attrs.y;
}

function swapXY(g) {
  g.nodes().forEach(function (v) {
    swapXYOne(g.node(v));
  });

  g.edges().forEach(function (e) {
    var edge = g.edge(e);
    edge.points.forEach(swapXYOne);
    if (edge.x) {
      swapXYOne(edge);
    }
  });
}

function swapXYOne(attrs) {
  var x = attrs.x;
  attrs.x = attrs.y;
  attrs.y = x;
}

/***/ }),

/***/ 1125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var util = __webpack_require__(1070),
    positionX = __webpack_require__(1126).positionX;

module.exports = position;
var keys = Object.keys;

function position(g) {
  g = util.asNonCompoundGraph(g);

  positionY(g);
  var arrPositionX = positionX(g);
  keys(arrPositionX).forEach(function (key) {
    return g.node(key).x = arrPositionX[key];
  });
}

function positionY(g) {
  var layering = util.buildLayerMatrix(g),
      rankSep = g.graph().ranksep,
      prevY = 0;
  layering.forEach(function (layer) {
    var maxHeight = Math.max(layer.map(function (v) {
      return g.node(v).height;
    }));
    layer.forEach(function (v) {
      g.node(v).y = prevY + maxHeight / 2;
    });
    prevY += maxHeight + rankSep;
  });
}

/***/ }),

/***/ 1126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "positionX", function() { return positionX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findType1Conflicts", function() { return findType1Conflicts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findType2Conflicts", function() { return findType2Conflicts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addConflict", function() { return addConflict; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasConflict", function() { return hasConflict; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verticalAlignment", function() { return verticalAlignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "horizontalCompaction", function() { return horizontalCompaction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "alignCoordinates", function() { return alignCoordinates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findSmallestWidthAlignment", function() { return findSmallestWidthAlignment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "balance", function() { return balance; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_extends__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lodash_lite__ = __webpack_require__(1071);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_get_object_value__ = __webpack_require__(7);






var Graph = __webpack_require__(1072).Graph,
    util = __webpack_require__(1070);

var keys = Object.keys;

/*
 * This module provides coordinate assignment based on Brandes and Köpf, "Fast
 * and Simple Horizontal Coordinate Assignment."
 */


/*
 * Marks all edges in the graph with a type-1 conflict with the "type1Conflict"
 * property. A type-1 conflict is one where a non-inner segment crosses an
 * inner segment. An inner segment is an edge with both incident nodes marked
 * with the "dummy" property.
 *
 * This algorithm scans layer by layer, starting with the second, for type-1
 * conflicts between the current layer and the previous layer. For each layer
 * it scans the nodes from left to right until it reaches one that is incident
 * on an inner segment. It then scans predecessors to determine if they have
 * edges that cross that inner segment. At the end a final scan is done for all
 * nodes on the current rank to see if they cross the last visited inner
 * segment.
 *
 * This algorithm (safely) assumes that a dummy node will only be incident on a
 * single node in the layers being scanned.
 */
function findType1Conflicts(g, layering) {
  var conflicts = {};

  function visitLayer(prevLayer, layer) {
    var
    // last visited node in the previous layer that is incident on an inner
    // segment.
    k0 = 0,

    // Tracks the last node in this layer scanned for crossings with a type-1
    // segment.
    scanPos = 0,
        prevLayerLength = prevLayer.length,
        lastNode = layer.slice(-1)[0];

    layer.forEach(function (v, i) {
      var w = findOtherInnerSegmentNode(g, v),
          k1 = w ? g.node(w).order : prevLayerLength;

      if (w || v === lastNode) {
        layer.slice(scanPos, i + 1).forEach(function (scanNode) {
          g.predecessors(scanNode).forEach(function (u) {
            var uLabel = g.node(u),
                uPos = uLabel.order;
            if ((uPos < k0 || k1 < uPos) && !(uLabel.dummy && g.node(scanNode).dummy)) {
              addConflict(conflicts, u, scanNode);
            }
          });
        });
        scanPos = i + 1;
        k0 = k1;
      }
    });

    return layer;
  }

  layering.reduce(visitLayer);
  return conflicts;
}

function findType2Conflicts(g, layering) {
  var conflicts = {};

  function scan(south, southPos, southEnd, prevNorthBorder, nextNorthBorder) {
    var v;
    Object(__WEBPACK_IMPORTED_MODULE_1__lodash_lite__["g" /* range */])(southEnd).slice(southPos).forEach(function (i) {
      v = south[i];
      if (g.node(v).dummy) {
        g.predecessors(v).forEach(function (u) {
          var uNode = g.node(u);
          if (uNode.dummy && (uNode.order < prevNorthBorder || uNode.order > nextNorthBorder)) {
            addConflict(conflicts, u, v);
          }
        });
      }
    });
  }

  function visitLayer(north, south) {
    var prevNorthPos = -1,
        nextNorthPos,
        southPos = 0;

    south.forEach(function (v, southLookahead) {
      if (g.node(v).dummy === "border") {
        var predecessors = g.predecessors(v);
        if (predecessors.length) {
          nextNorthPos = g.node(predecessors[0]).order;
          scan(south, southPos, southLookahead, prevNorthPos, nextNorthPos);
          southPos = southLookahead;
          prevNorthPos = nextNorthPos;
        }
      }
      scan(south, southPos, south.length, nextNorthPos, north.length);
    });

    return south;
  }

  layering.reduce(visitLayer);
  return conflicts;
}

function findOtherInnerSegmentNode(g, v) {
  if (g.node(v).dummy) {
    var result = void 0;
    g.predecessors(v).some(function (u) {
      if (g.node(u).dummy) {
        result = u;
        return true;
      } else {
        return false;
      }
    });
    return result;
  }
}

function addConflict(conflicts, v, w) {
  if (v > w) {
    var tmp = v;
    v = w;
    w = tmp;
  }

  var conflictsV = conflicts[v];
  if (!conflictsV) {
    conflicts[v] = conflictsV = {};
  }
  conflictsV[w] = true;
}

function hasConflict(conflicts, v, w) {
  if (v > w) {
    var tmp = v;
    v = w;
    w = tmp;
  }
  return !!Object(__WEBPACK_IMPORTED_MODULE_2_get_object_value__["default"])(conflicts, ['v', 'w']);
}

/*
 * Try to align nodes into vertical "blocks" where possible. This algorithm
 * attempts to align a node with one of its median neighbors. If the edge
 * connecting a neighbor is a type-1 conflict then we ignore that possibility.
 * If a previous node has already formed a block with a node after the node
 * we're trying to form a block with, we also ignore that possibility - our
 * blocks would be split in that scenario.
 */
function verticalAlignment(g, layering, conflicts, neighborFn) {
  var root = {},
      align = {},
      pos = {};

  // We cache the position here based on the layering because the graph and
  // layering may be out of sync. The layering matrix is manipulated to
  // generate different extreme alignments.
  layering.forEach(function (layer) {
    layer.forEach(function (v, order) {
      root[v] = v;
      align[v] = v;
      pos[v] = order;
    });
  });

  layering.forEach(function (layer) {
    var prevIdx = -1;
    layer.forEach(function (v) {
      var ws = neighborFn(v);
      if (ws.length) {
        ws.sort(function (w) {
          return pos[w];
        });
        var mp = (ws.length - 1) / 2;
        for (var i = Math.floor(mp), il = Math.ceil(mp); i <= il; ++i) {
          var w = ws[i];
          if (align[v] === v && prevIdx < pos[w] && !hasConflict(conflicts, v, w)) {
            align[w] = v;
            align[v] = root[v] = root[w];
            prevIdx = pos[w];
          }
        }
      }
    });
  });

  return { root: root, align: align };
}

function horizontalCompaction(g, layering, root, align, reverseSep) {
  // This portion of the algorithm differs from BK due to a number of problems.
  // Instead of their algorithm we construct a new block graph and do two
  // sweeps. The first sweep places blocks with the smallest possible
  // coordinates. The second sweep removes unused space by moving blocks to the
  // greatest coordinates without violating separation.
  var xs = {},
      blockG = buildBlockGraph(g, layering, root, reverseSep),
      borderType = reverseSep ? "borderLeft" : "borderRight";

  function iterate(setXsFunc, nextNodesFunc) {
    var stack = blockG.nodes();
    var elem = stack.pop();
    var visited = {};
    while (elem) {
      if (visited[elem]) {
        setXsFunc(elem);
      } else {
        visited[elem] = true;
        stack.push(elem);
        stack = stack.concat(nextNodesFunc(elem));
      }

      elem = stack.pop();
    }
  }

  // First pass, assign smallest coordinates
  function pass1(elem) {
    xs[elem] = blockG.inEdges(elem).reduce(function (acc, e) {
      return Math.max(acc, xs[e.v] + blockG.edge(e));
    }, 0);
  }

  // Second pass, assign greatest coordinates
  function pass2(elem) {
    var min = blockG.outEdges(elem).reduce(function (acc, e) {
      return Math.min(acc, xs[e.w] - blockG.edge(e));
    }, Number.POSITIVE_INFINITY);

    var node = g.node(elem);
    if (min !== Number.POSITIVE_INFINITY && node.borderType !== borderType) {
      xs[elem] = Math.max(xs[elem], min);
    }
  }

  iterate(pass1, blockG.predecessors.bind(blockG));
  iterate(pass2, blockG.successors.bind(blockG));

  // Assign x coordinates to all nodes
  keys(align).map(function (key) {
    return align[key];
  }).forEach(function (v) {
    return xs[v] = xs[root[v]];
  });

  return xs;
}

function buildBlockGraph(g, layering, root, reverseSep) {
  var blockGraph = new Graph(),
      graphLabel = g.graph(),
      sepFn = sep(graphLabel.nodesep, graphLabel.edgesep, reverseSep);

  layering.forEach(function (layer) {
    var u;
    layer.forEach(function (v) {
      var vRoot = root[v];
      blockGraph.setNode(vRoot);
      if (u) {
        var uRoot = root[u],
            prevMax = blockGraph.edge(uRoot, vRoot);
        blockGraph.setEdge(uRoot, vRoot, Math.max(sepFn(g, v, u), prevMax || 0));
      }
      u = v;
    });
  });

  return blockGraph;
}

/*
 * Returns the alignment that has the smallest width of the given alignments.
 */
function findSmallestWidthAlignment(g, xss) {

  var arr = keys(xss).map(function (key) {
    return xss[key];
  }).map(function (xs) {
    var max = Number.NEGATIVE_INFINITY;
    var min = Number.POSITIVE_INFINITY;
    keys(xs).forEach(function (key1) {
      var x = xs[key1];
      var v = key1;
      var halfWidth = width(g, v) / 2;

      max = Math.max(x + halfWidth, max);
      min = Math.min(x - halfWidth, min);
    });
    return max - min;
  });
  return Math.min(arr);
}

/*
 * Align the coordinates of each of the layout alignments such that
 * left-biased alignments have their minimum coordinate at the same point as
 * the minimum coordinate of the smallest width alignment and right-biased
 * alignments have their maximum coordinate at the same point as the maximum
 * coordinate of the smallest width alignment.
 */
function alignCoordinates(xss, alignTo) {
  var alignToVals = keys(alignTo).map(function (key) {
    return alignTo[key];
  }),
      alignToMin = Math.min(alignToVals),
      alignToMax = Math.max(alignToVals);

  ["u", "d"].forEach(function (vert) {
    ["l", "r"].forEach(function (horiz) {
      var alignment = vert + horiz,
          xs = xss[alignment],
          delta;
      if (xs === alignTo) return;

      var xsVals = keys(xs).map(function (key) {
        return xs[key];
      });
      delta = horiz === "l" ? alignToMin - Math.min(xsVals) : alignToMax - Math.max(xsVals);

      if (delta) {
        xss[alignment] = keys(xs).map(function (key) {
          return xs[key];
        }).map(function (x) {
          return x + delta;
        });
      }
    });
  });
}

function balance(xss, align) {
  var callback = function callback(ignore, v) {
    if (align) {
      return xss[align.toLowerCase()][v];
    } else {
      var xs = keys(xss).map(function (key) {
        return xss[key][v];
      }).sort();
      return (xs[1] + xs[2]) / 2;
    }
  };
  var result = {};
  keys(xss.ul).forEach(function (key) {
    return result[key] = callback(xss.ul[key], key);
  });
  return result;
}

function positionX(g) {
  var layering = util.buildLayerMatrix(g);
  var conflicts = Object(__WEBPACK_IMPORTED_MODULE_0_reshow_runtime_es_helpers_extends__["a" /* default */])({}, findType1Conflicts(g, layering), findType2Conflicts(g, layering));

  var xss = {},
      adjustedLayering;
  ["u", "d"].forEach(function (vert) {
    adjustedLayering = vert === "u" ? layering : keys(layering).map(function (key) {
      return layering[key];
    }).reverse();
    ["l", "r"].forEach(function (horiz) {
      if (horiz === "r") {
        adjustedLayering = adjustedLayering.map(function (inner) {
          return keys(inner).map(function (key) {
            return inner[key];
          }).reverse();
        });
      }

      var neighborFn = (vert === "u" ? g.predecessors : g.successors).bind(g);
      var align = verticalAlignment(g, adjustedLayering, conflicts, neighborFn);
      var xs = horizontalCompaction(g, adjustedLayering, align.root, align.align, horiz === "r");
      if (horiz === "r") {
        keys(xs).forEach(function (key) {
          xs[key] = -1 * xs[key];
        });
      }
      xss[vert + horiz] = xs;
    });
  });

  var smallestWidth = findSmallestWidthAlignment(g, xss);
  alignCoordinates(xss, smallestWidth);
  return balance(xss, g.graph().align);
}

function sep(nodeSep, edgeSep, reverseSep) {
  return function (g, v, w) {
    var vLabel = g.node(v),
        wLabel = g.node(w),
        sum = 0,
        delta;

    sum += vLabel.width / 2;
    if (vLabel.labelpos) {
      switch (vLabel.labelpos.toLowerCase()) {
        case "l":
          delta = -vLabel.width / 2;break;
        case "r":
          delta = vLabel.width / 2;break;
      }
    }
    if (delta) {
      sum += reverseSep ? delta : -delta;
    }
    delta = 0;

    sum += (vLabel.dummy ? edgeSep : nodeSep) / 2;
    sum += (wLabel.dummy ? edgeSep : nodeSep) / 2;

    sum += wLabel.width / 2;
    if (wLabel.labelpos) {
      switch (wLabel.labelpos.toLowerCase()) {
        case "l":
          delta = wLabel.width / 2;break;
        case "r":
          delta = -wLabel.width / 2;break;
      }
    }
    if (delta) {
      sum += reverseSep ? delta : -delta;
    }
    delta = 0;

    return sum;
  };
}

function width(g, v) {
  return g.node(v).width;
}

/***/ }),

/***/ 1127:
/***/ (function(module, exports, __webpack_require__) {

var util = __webpack_require__(1070),
    Graph = __webpack_require__(1072).Graph;

module.exports = {
  debugOrdering: debugOrdering
};

/* istanbul ignore next */
function debugOrdering(g) {
  var layerMatrix = util.buildLayerMatrix(g);

  var h = new Graph({ compound: true, multigraph: true }).setGraph({});

  g.nodes().forEach(function (v) {
    h.setNode(v, { label: v });
    h.setParent(v, "layer" + g.node(v).rank);
  });

  g.edges().forEach(function (e) {
    h.setEdge(e.v, e.w, {}, e.name);
  });

  layerMatrix.forEach(function (layer, i) {
    var layerV = "layer" + i;
    h.setNode(layerV, { rank: "same" });
    layer.reduce(function (u, v) {
      h.setEdge(u, v, { style: "invis" });
      return v;
    });
  });

  return h;
}

/***/ }),

/***/ 1128:
/***/ (function(module, exports) {

module.exports = "0.8.3-pre";

/***/ })

});
//# sourceMappingURL=0.b1fc8d529cece94a2ed9.bundle.js.map