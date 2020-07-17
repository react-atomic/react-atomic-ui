(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/blocks.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/blocks.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");

/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var bm = editor.BlockManager;
  var allBlocks = {
    category: opt.categoryLabel
  };
  opt.resetBlocks && bm.getAll().reset();
  bm.add('mj-1-column', Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: '1 Column',
    content: "<mj-section>\n        <mj-column><mj-text>Content 1</mj-text></mj-column>\n      </mj-section>",
    attributes: {
      "class": 'gjs-fonts gjs-f-b1'
    }
  }, allBlocks));
  bm.add('mj-2-columns', Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: '2 Columns',
    content: "<mj-section>\n        <mj-column><mj-text>Content 1</mj-text></mj-column>\n        <mj-column><mj-text>Content 2</mj-text></mj-column>\n      </mj-section>",
    attributes: {
      "class": 'gjs-fonts gjs-f-b2'
    }
  }, allBlocks));
  bm.add('mj-3-columns', Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: '3 Columns',
    content: "<mj-section>\n        <mj-column><mj-text>Content 1</mj-text></mj-column>\n        <mj-column><mj-text>Content 2</mj-text></mj-column>\n        <mj-column><mj-text>Content 3</mj-text></mj-column>\n      </mj-section>",
    attributes: {
      "class": 'gjs-fonts gjs-f-b3'
    }
  }, allBlocks));
  bm.add('mj-text', Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: 'Text',
    content: '<mj-text>Insert text here</mj-text>',
    attributes: {
      "class": 'gjs-fonts gjs-f-text'
    }
  }, allBlocks));
  bm.add('mj-button', Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: 'Button',
    content: '<mj-button>Button</mj-button>',
    attributes: {
      "class": 'gjs-fonts gjs-f-button'
    }
  }, allBlocks));
  bm.add('mj-image', Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: 'Image',
    content: '<mj-image src="http://placehold.it/350x250/78c5d6/fff">',
    attributes: {
      "class": 'fa fa-image'
    }
  }, allBlocks));
  bm.add('mj-divider', Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: 'Divider',
    content: '<mj-divider/>',
    attributes: {
      "class": 'gjs-fonts gjs-f-divider'
    }
  }, allBlocks));
  bm.add('mj-social-group', Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: 'Group Social',
    content: "<mj-social font-size=\"12px\" icon-size=\"24px\" border-radius=\"12px\" mode=\"horizontal\">\n        <mj-social-element name=\"facebook\"></mj-social-element>\n        <mj-social-element name=\"google\"></mj-social-element>\n        <mj-social-element name=\"twitter\"></mj-social-element>\n      </mj-social>",
    attributes: {
      "class": 'fa fa-share-alt'
    }
  }, allBlocks));
  bm.add('mj-social-element', Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: 'Social Element',
    content: '<mj-social-element name="facebook" />',
    attributes: {
      "class": 'fa fa-share-alt'
    }
  }, allBlocks));
  bm.add('mj-spacer', Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: 'Spacer',
    content: '<mj-spacer/>',
    attributes: {
      "class": 'fa fa-arrows-v'
    }
  }, allBlocks));
  bm.add('mj-navbar', Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: 'NavBar',
    content: "<mj-navbar>\n    <mj-navbar-link>Getting started</mj-navbar-link>\n    <mj-navbar-link>Try it live</mj-navbar-link>\n    <mj-navbar-link>Templates</mj-navbar-link>\n    <mj-navbar-link>Components</mj-navbar-link>\n    </mj-navbar>",
    attributes: {
      "class": 'fa fa-bars'
    }
  }, allBlocks));
  bm.add('mj-navbar-link', Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    label: 'NavBar Link',
    content: "<mj-navbar-link>Link 1</mj-navbar-link>",
    attributes: {
      "class": 'gjs-fonts gjs-f-button'
    }
  }, allBlocks));
});

/***/ }),

/***/ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/buttons.js":
/*!************************************************************************************!*\
  !*** ./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/buttons.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/defineProperty */ "./node_modules/reshow-runtime/es/helpers/defineProperty.js");

/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var tltAttr = 'title';
  var tltPosAttr = 'data-tooltip-pos';
  var pnm = editor.Panels;
  var optPanel = pnm.getPanel('options');
  var cmdPanel = pnm.getPanel('options');

  var updateTooltip = function updateTooltip(coll) {
    coll.each(function (item) {
      var attrs = item.get('attributes');
      attrs[tltPosAttr] = 'bottom';
      item.set('attributes', attrs);
    });
  };

  pnm.addButton('options', {
    id: 'mjml-import',
    className: 'fa fa-download',
    command: 'mjml-import'
  });

  if (optPanel) {
    // Fix tooltip position
    var cmdBtns = optPanel.get('buttons');
    cmdBtns.each(function (btn) {
      var attrs = btn.get('attributes');
      attrs[tltPosAttr] = 'bottom';
      btn.set('attributes', attrs);
    }); // Remove preview

    var prvBtn = pnm.addButton('options', 'preview');
    prvBtn && cmdBtns.remove(prvBtn);
  } // Clean commands panel


  if (cmdPanel) {
    var _cmdBtns = cmdPanel.get('buttons'); // cmdBtns.reset();


    _cmdBtns.add([{
      id: 'undo',
      className: 'fa fa-undo',
      command: 'undo',
      attributes: Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, tltAttr, opt.cmdBtnUndoLabel)
    }, {
      id: 'redo',
      className: 'fa fa-repeat',
      command: 'redo',
      attributes: Object(reshow_runtime_es_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, tltAttr, opt.cmdBtnRedoLabel)
    }]);

    updateTooltip(_cmdBtns);
  } // Turn off default devices select and create new one


  editor.getConfig().showDevices = 0;
  var devicePanel = pnm.addPanel({
    id: 'devices-c'
  });
  var deviceBtns = devicePanel.get('buttons');
  devicePanel.get('buttons').add([{
    id: 'deviceDesktop',
    command: 'set-device-desktop',
    className: 'fa fa-desktop'
  }, {
    id: 'deviceTablet',
    command: 'set-device-tablet',
    className: 'fa fa-tablet'
  }, {
    id: 'deviceMobile',
    command: 'set-device-mobile',
    className: 'fa fa-mobile'
  }]);
  updateTooltip(deviceBtns);
});

/***/ }),

/***/ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/command-export-mjml.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/command-export-mjml.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mjml2html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mjml2html */ "./node_modules/organism-react-grapesjs/build/es/src/mjml2html.js");

/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var config = editor.getConfig();
  var codeViewer = editor.CodeManager.getViewer('CodeMirror').clone();
  var container = document.createElement('div');
  var cmdm = editor.Commands;
  container.style = 'display: flex; justify-content: space-between;'; // Init code viewer

  codeViewer.set({
    codeName: 'htmlmixed',
    theme: opt.codeViewerTheme
  });

  var getMjml = function getMjml() {
    var mjml = opt.preMjml + editor.getHtml() + opt.postMjml;
    return Object(_mjml2html__WEBPACK_IMPORTED_MODULE_0__["default"])(mjml);
  }; // Set the command which could be used outside


  cmdm.add('mjml-get-code', {
    run: function run() {
      return getMjml();
    }
  });
  var mjmlCode;
  var htmlCode;
  return {
    buildEditor: function buildEditor(label) {
      var ecm = editor.CodeManager;
      var cm = ecm.getViewer('CodeMirror').clone();
      var txtarea = document.createElement('textarea');
      var el = document.createElement('div');
      el.style = 'flex:1 0 auto; padding:5px; max-width:50%; box-sizing:border-box;';
      var codeEditor = cm.set({
        label: label,
        codeName: 'htmlmixed',
        theme: opt.codeViewerTheme,
        input: txtarea
      });
      var elEditor = new ecm.EditorView({
        model: codeEditor,
        config: config
      }).render().el;
      el.appendChild(elEditor);
      codeEditor.init(txtarea);
      return {
        codeEditor: codeEditor,
        el: el
      };
    },
    run: function run(editor) {
      var sender = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var modal = editor.Modal;
      modal.setTitle(opt.modalTitleExport);
      modal.setContent('');
      modal.setContent(container);

      if (!mjmlCode) {
        var _codeViewer = this.buildEditor('MJML');

        mjmlCode = _codeViewer.codeEditor;
        container.appendChild(_codeViewer.el);
      }

      if (!htmlCode) {
        var _codeViewer2 = this.buildEditor('HTML');

        htmlCode = _codeViewer2.codeEditor;
        container.appendChild(_codeViewer2.el);
      }

      modal.open();

      if (mjmlCode) {
        mjmlCode.setContent(opt.preMjml + editor.getHtml() + opt.postMjml); //mjmlCode.editor.setOption('lineWrapping', 1);

        mjmlCode.editor.refresh();
      }

      if (htmlCode) {
        var mjml = getMjml();

        if (mjml.errors.length) {
          mjml.errors.forEach(function (err) {
            console.warn(err.formattedMessage);
          });
        }

        htmlCode.setContent(mjml.html); //htmlCode.editor.setOption('lineWrapping', 1);

        htmlCode.editor.refresh();
      }

      sender.set && sender.set('active', 0);
    }
  };
});

/***/ }),

/***/ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/command-import-mjml.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/command-import-mjml.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var config = editor.getConfig();
  var codeViewer = editor.CodeManager.getViewer('CodeMirror').clone();
  var btnImp = document.createElement('button');
  var container = document.createElement('div');
  var pfx = config.stylePrefix || ''; // Init import button

  btnImp.innerHTML = opt.modalBtnImport;
  btnImp.className = "".concat(pfx, "btn-prim ").concat(pfx, "btn-import");

  btnImp.onclick = function () {
    var code = codeViewer.editor.getValue();
    editor.DomComponents.getWrapper().set('content', '');
    editor.setComponents(code.trim());
    editor.Modal.close();
  }; // Init code viewer


  codeViewer.set({
    codeName: 'htmlmixed',
    theme: opt.codeViewerTheme,
    readOnly: 0
  });
  return {
    run: function run(editor) {
      var sender = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var modal = editor.Modal;
      var viewer = codeViewer.editor;
      modal.setTitle(opt.modalTitleImport); // Init code viewer if not yet instantiated

      if (!viewer) {
        var txtarea = document.createElement('textarea');
        var labelImport = opt.modalLabelImport;

        if (labelImport) {
          var labelEl = document.createElement('div');
          labelEl.className = pfx + 'import-label';
          labelEl.innerHTML = labelImport;
          container.appendChild(labelEl);
        }

        container.appendChild(txtarea);
        container.appendChild(btnImp);
        codeViewer.init(txtarea);
        viewer = codeViewer.editor;
      }

      modal.setContent('');
      modal.setContent(container);
      codeViewer.setContent(opt.importPlaceholder);
      modal.open();
      viewer.refresh();
      sender.set && sender.set('active', 0);
    }
  };
});

/***/ }),

/***/ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/commands.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/commands.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _toggleImagesCommand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toggleImagesCommand */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/toggleImagesCommand.js");
/* harmony import */ var _command_import_mjml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./command-import-mjml */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/command-import-mjml.js");
/* harmony import */ var _command_export_mjml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./command-export-mjml */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/command-export-mjml.js");



/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var cmd = editor.Commands;
  var exportName = opt.overwriteExport ? 'export-template' : 'mjml-export';
  cmd.add('mjml-import', Object(_command_import_mjml__WEBPACK_IMPORTED_MODULE_1__["default"])(editor, opt));
  cmd.add(exportName, Object(_command_export_mjml__WEBPACK_IMPORTED_MODULE_2__["default"])(editor, opt));
  cmd.add(opt.cmdTglImages, Object(_toggleImagesCommand__WEBPACK_IMPORTED_MODULE_0__["default"])(opt));
  cmd.add('undo', {
    run: function run(editor, sender) {
      sender.set('active', 0);
      editor.UndoManager.undo(1);
    }
  });
  cmd.add('redo', {
    run: function run(editor, sender) {
      sender.set('active', 0);
      editor.UndoManager.redo(1);
    }
  });
  cmd.add('set-device-desktop', {
    run: function run(editor) {
      editor.setDevice('Desktop');
    }
  });
  cmd.add('set-device-tablet', {
    run: function run(editor) {
      editor.setDevice('Tablet');
    }
  });
  cmd.add('set-device-mobile', {
    run: function run(editor) {
      editor.setDevice('Mobile portrait');
    }
  });
});

/***/ }),

/***/ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Body.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Body.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/index.js");

// Specs https://mjml.io/documentation/#mj-body

/* harmony default export */ __webpack_exports__["default"] = (function (editor, _ref) {
  var dc = _ref.dc,
      coreMjmlModel = _ref.coreMjmlModel,
      coreMjmlView = _ref.coreMjmlView;
  var type = 'mj-body';
  var droppable = ['mj-section'].map(function (tag) {
    return "[data-gjs-type=".concat(tag, "]");
  }).join(', ');
  dc.addType(type, {
    isComponent: Object(_index_js__WEBPACK_IMPORTED_MODULE_1__["isComponentType"])(type),
    model: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coreMjmlModel, {
      defaults: {
        droppable: droppable,
        draggable: false,
        copyable: false,
        removable: false,
        'style-default': {
          width: '600px'
        },
        stylable: [// Currently the UX sucks too much with the heavy rendering approach
        'width', 'background-color']
      }
    }),
    view: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coreMjmlView, {
      tagName: 'div',
      attributes: {
        style: 'width: 100%; min-height: 100%',
        'data-type': 'mj-body'
      },
      getChildrenSelector: function getChildrenSelector() {
        return 'div';
      },
      getInnerMjmlTemplate: function getInnerMjmlTemplate() {
        var orig = coreMjmlView.getInnerMjmlTemplate.call(this);
        return {
          start: "".concat(orig.start, "<mj-section></mj-section>"),
          end: "".concat(orig.end)
        };
      },
      renderStyle: function renderStyle() {
        this.el.style = this.el.getAttribute('style') + this.attributes.style;
      },
      renderContent: function renderContent() {
        this.getChildrenContainer().innerHTML = this.model.get('content');
      },
      rerender: function rerender() {
        coreMjmlView.rerender.call(this);
        this.model.components().models.forEach(function (item) {
          if (item.attributes.type != "mj-section") {
            return;
          }

          item.view.rerender();
        });
      }
    })
  });
});

/***/ }),

/***/ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Button.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Button.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/index.js");

// Specs: https://mjml.io/documentation/#mjml-button

/* harmony default export */ __webpack_exports__["default"] = (function (editor, _ref) {
  var dc = _ref.dc,
      coreMjmlModel = _ref.coreMjmlModel,
      coreMjmlView = _ref.coreMjmlView;
  var type = 'mj-button';
  dc.addType(type, {
    isComponent: Object(_index_js__WEBPACK_IMPORTED_MODULE_1__["isComponentType"])(type),
    extend: 'link',
    extendFnView: ['onActive', 'disableEditing'],
    model: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coreMjmlModel, {
      defaults: {
        name: 'Button',
        draggable: '[data-gjs-type=mj-column]',
        highlightable: false,
        stylable: ['width', 'height', 'background-color', 'container-background-color', 'font-style', 'font-size', 'font-weight', 'font-family', 'color', 'text-decoration', 'align', 'vertical-align', 'text-transform', 'padding', 'padding-top', 'padding-left', 'padding-right', 'padding-bottom', 'border-radius', 'border-top-left-radius', 'border-top-right-radius', 'border-bottom-left-radius', 'border-bottom-right-radius', 'border', 'border-width', 'border-style', 'border-color'],
        'style-default': {
          'background-color': '#414141',
          'border-radius': '3px',
          'font-size': '13px',
          'font-weight': '400',
          'color': '#ffffff',
          'vertical-align': 'middle',
          'padding-bottom': '10px',
          'padding-right': '25px',
          'padding-left': '25px',
          'align': 'center'
        },
        traits: ['href'] // 'container-background-color', 'inner-padding'

      }
    }),
    view: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coreMjmlView, {
      tagName: 'tr',
      attributes: {
        style: 'pointer-events: all; display: table; width: 100%'
      },
      getMjmlTemplate: function getMjmlTemplate() {
        return {
          start: "<mjml><mj-body><mj-column>",
          end: "</mj-column></mj-body></mjml>"
        };
      },
      getTemplateFromEl: function getTemplateFromEl(sandboxEl) {
        return sandboxEl.querySelector('tr').innerHTML;
      },
      getChildrenSelector: function getChildrenSelector() {
        return 'a,p';
      },

      /**
       * Prevent content repeating
       */
      renderChildren: function renderChildren() {
        coreMjmlView.renderChildren.call(this);
      },

      /**
       * Need to make text selectable.
       */
      onActive: function onActive() {
        this.getChildrenContainer().style.pointerEvents = 'all';
      },
      disableEditing: function disableEditing() {
        this.getChildrenContainer().style.pointerEvents = 'none';
      }
    })
  });
});

/***/ }),

/***/ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Column.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Column.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var _mjml2html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mjml2html */ "./node_modules/organism-react-grapesjs/build/es/src/mjml2html.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/index.js");

// Specs: https://mjml.io/documentation/#mjml-column


/* harmony default export */ __webpack_exports__["default"] = (function (editor, _ref) {
  var dc = _ref.dc,
      opt = _ref.opt,
      coreMjmlModel = _ref.coreMjmlModel,
      coreMjmlView = _ref.coreMjmlView,
      sandboxEl = _ref.sandboxEl;
  var type = 'mj-column';
  var clmPadd = opt.columnsPadding;
  dc.addType(type, {
    isComponent: Object(_index_js__WEBPACK_IMPORTED_MODULE_2__["isComponentType"])(type),
    model: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coreMjmlModel, {
      defaults: {
        name: 'Column',
        draggable: '[data-gjs-type=mj-section]',
        stylable: ['background-color', 'vertical-align', 'width', 'border-radius', 'border-top-left-radius', 'border-top-right-radius', 'border-bottom-left-radius', 'border-bottom-right-radius', 'border', 'border-width', 'border-style', 'border-color']
      }
    }),
    view: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coreMjmlView, {
      tagName: 'div',
      attributes: {
        style: 'pointer-events: all;' + (clmPadd ? "padding: ".concat(clmPadd, ";") : '')
      },
      getTemplateFromMjml: function getTemplateFromMjml() {
        var mjmlTmpl = this.getMjmlTemplate();
        var innerMjml = this.getInnerMjmlTemplate();
        var htmlOutput = Object(_mjml2html__WEBPACK_IMPORTED_MODULE_1__["default"])("".concat(mjmlTmpl.start, "\n          ").concat(innerMjml.start).concat(innerMjml.end).concat(mjmlTmpl.end));
        var html = htmlOutput.html; // I need styles for responsive columns

        var styles = [];
        sandboxEl.innerHTML = html;
        var styleArr = Array.from(sandboxEl.querySelectorAll('style'));
        styleArr.forEach(function (item) {
          styles.push(item.innerHTML);
        });
        var content = html.replace(/<body(.*)>/, '<body>');
        var start = content.indexOf('<body>') + 6;
        var end = content.indexOf('</body>');
        sandboxEl.innerHTML = content.substring(start, end).trim();
        var componentEl = this.getTemplateFromEl(sandboxEl); // Copy all rendered attributes (TODO need for all)

        var attributes = {};
        var elAttrs = componentEl.attributes;

        for (var elAttr, i = 0, len = elAttrs.length; i < len; i++) {
          elAttr = elAttrs[i];
          attributes[elAttr.name] = elAttr.value;
        }

        return {
          attributes: attributes,
          content: componentEl.innerHTML,
          style: styles.join(' ')
        };
      },
      render: function render() {
        this.renderAttributes();
        var mjmlResult = this.getTemplateFromMjml();
        this.el.innerHTML = mjmlResult.content;
        this.$el.attr(mjmlResult.attributes);
        editor.addComponents("<style>".concat(mjmlResult.style, "</style>"));
        this.getChildrenContainer().innerHTML = this.model.get('content');
        this.renderChildren();
        this.renderStyle();
        return this;
      },
      renderStyle: function renderStyle() {
        this.el.style = this.el.getAttribute('style') + this.attributes.style;
      },
      getMjmlTemplate: function getMjmlTemplate() {
        // Need it for responsive columns
        var cols = this.model.collection.length - 1;
        cols = cols ? cols : 0;
        var addColmn = Array(cols).fill('<mj-column></mj-column>').join('');
        return {
          start: "<mjml><mj-body><mj-section>",
          end: "".concat(addColmn, "</mj-section></mj-body></mjml>")
        };
      },
      getTemplateFromEl: function getTemplateFromEl(sandboxEl) {
        return sandboxEl.firstChild.querySelector('div > table > tbody > tr > td > div');
      },
      getChildrenSelector: function getChildrenSelector() {
        return 'table';
      }
    })
  });
});

/***/ }),

/***/ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Divider.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Divider.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/index.js");

// Specs: https://mjml.io/documentation/#mjml-divider

/* harmony default export */ __webpack_exports__["default"] = (function (editor, _ref) {
  var dc = _ref.dc,
      coreMjmlModel = _ref.coreMjmlModel,
      coreMjmlView = _ref.coreMjmlView;
  var type = 'mj-divider';
  dc.addType(type, {
    isComponent: Object(_index_js__WEBPACK_IMPORTED_MODULE_1__["isComponentType"])(type),
    model: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coreMjmlModel, {
      defaults: {
        name: 'Divider',
        draggable: '[data-gjs-type=mj-column]',
        droppable: false,
        'style-default': {
          'width': '100%',
          'border-width': '4px',
          'border-style': 'solid',
          'border-color': '#000000',
          'padding-top': '10px',
          'padding-bottom': '10px',
          'padding-right': '25px',
          'padding-left': '25px'
        },
        stylable: ['padding', 'padding-top', 'padding-left', 'padding-right', 'padding-bottom', 'width', 'container-background-color', 'border-detached', 'border-width', 'border-style', 'border-color']
      }
    }),
    view: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coreMjmlView, {
      tagName: 'tr',
      attributes: {
        style: 'pointer-events: all; display: table; width: 100%; user-select: none;'
      },
      getMjmlTemplate: function getMjmlTemplate() {
        return {
          start: "<mjml><mj-body><mj-column>",
          end: "</mj-column></mj-body></mjml>"
        };
      },
      getTemplateFromEl: function getTemplateFromEl(sandboxEl) {
        return sandboxEl.querySelector('tr').innerHTML;
      },
      getChildrenSelector: function getChildrenSelector() {
        return 'p';
      }
    })
  });
});

/***/ }),

/***/ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Font.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Font.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var _mjml2html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mjml2html */ "./node_modules/organism-react-grapesjs/build/es/src/mjml2html.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/index.js");

// Specs: https://mjml.io/documentation/#mj-font


/* harmony default export */ __webpack_exports__["default"] = (function (editor, _ref) {
  var dc = _ref.dc,
      coreMjmlModel = _ref.coreMjmlModel,
      coreMjmlView = _ref.coreMjmlView,
      sandboxEl = _ref.sandboxEl;
  var type = 'mj-font';
  dc.addType(type, {
    isComponent: Object(_index_js__WEBPACK_IMPORTED_MODULE_2__["isComponentType"])(type),
    model: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coreMjmlModel, {
      defaults: {
        draggable: '[data-gjs-type=mj-head]',
        "void": true
      }
    }),
    view: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coreMjmlView, {
      tagName: "style",
      getMjmlTemplate: function getMjmlTemplate() {
        var name = this.model.get('attributes').name;
        /*
         * mjml will omit `<mj-font> definitions which are not actually used.
         * Therefore we need to have an mj-text that uses our font
         */

        return {
          start: "<mjml><mj-head>",
          end: "</mj-head><mj-body><mj-text font-family=\"".concat(name, "\"></mj-text></mj-body></mjml>")
        };
      },
      getTemplateFromEl: function getTemplateFromEl(sandboxEl) {
        return sandboxEl.querySelectorAll('style')[1].innerHTML;
      },
      renderStyle: function renderStyle() {},
      renderContent: function renderContent() {},
      getTemplateFromMjml: function getTemplateFromMjml() {
        var mjmlTmpl = this.getMjmlTemplate();
        var innerMjml = this.getInnerMjmlTemplate();
        var htmlOutput = Object(_mjml2html__WEBPACK_IMPORTED_MODULE_1__["default"])("".concat(mjmlTmpl.start, "\n          ").concat(innerMjml.start).concat(innerMjml.end).concat(mjmlTmpl.end));
        var html = htmlOutput.html;
        var start = html.indexOf('<head>') + 6;
        var end = html.indexOf('</head>');
        html = html.substring(start, end).trim();
        sandboxEl.innerHTML = html;
        return this.getTemplateFromEl(sandboxEl);
      }
    })
  });
});

/***/ }),

/***/ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Group.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Group.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/index.js");

// Specs: https://mjml.io/documentation/#mjml-group

/* harmony default export */ __webpack_exports__["default"] = (function (editor, _ref) {
  var dc = _ref.dc,
      coreMjmlModel = _ref.coreMjmlModel,
      coreMjmlView = _ref.coreMjmlView;
  var type = 'mj-group';
  dc.addType(type, {
    isComponent: Object(_index_js__WEBPACK_IMPORTED_MODULE_1__["isComponentType"])(type),
    model: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coreMjmlModel, {
      defaults: {
        name: 'Group',
        draggable: '[data-gjs-type=mj-section]',
        droppable: '[data-gjs-type=mj-column]'
      }
    }),
    view: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coreMjmlView, {
      tagName: 'div',
      attributes: {
        style: 'pointer-events: all; display: table; width: 100%'
      },
      getMjmlTemplate: function getMjmlTemplate() {
        return {
          start: "<mjml><mj-body>",
          end: "</mj-body></mjml>"
        };
      }
    })
  });
});

/***/ }),

/***/ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Head.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Head.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/index.js");
// Specs: https://mjml.io/documentation/#mj-head

/* harmony default export */ __webpack_exports__["default"] = (function (editor, _ref) {
  var dc = _ref.dc;
  var type = 'mj-head';
  var droppable = ['mj-preview', 'mj-attributes', 'mj-style', 'mj-font', 'mj-title'].map(function (tag) {
    return "[data-gjs-type=".concat(tag, "]");
  }).join(', ');
  dc.addType(type, {
    isComponent: Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["isComponentType"])(type),
    model: {
      defaults: {
        droppable: droppable,
        draggable: false
      }
    }
  });
});

/***/ }),

/***/ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Image.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Image.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/index.js");

// Specs: https://mjml.io/documentation/#mjml-image

/* harmony default export */ __webpack_exports__["default"] = (function (editor, _ref) {
  var dc = _ref.dc,
      coreMjmlModel = _ref.coreMjmlModel,
      coreMjmlView = _ref.coreMjmlView;
  var type = 'mj-image';
  dc.addType(type, {
    isComponent: Object(_index_js__WEBPACK_IMPORTED_MODULE_1__["isComponentType"])(type),
    extend: 'image',
    model: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coreMjmlModel, {
      defaults: {
        name: 'Image',
        resizable: false,
        highlightable: false,
        draggable: '[data-gjs-type=mj-column],[data-gjs-type=mj-section]',
        stylable: ['width', 'height', 'padding', 'padding-top', 'padding-left', 'padding-right', 'padding-bottom', 'border-radius', 'border-top-left-radius', 'border-top-right-radius', 'border-bottom-left-radius', 'border-bottom-right-radius', 'border', 'border-width', 'border-style', 'border-color', 'container-background-color', 'align'],
        'style-default': {
          'padding-top': '10px',
          'padding-bottom': '10px',
          'padding-right': '25px',
          'padding-left': '25px',
          'align': 'center'
        },
        traits: ['href', 'rel', 'alt', 'title'],
        "void": true
      }
    }),
    view: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coreMjmlView, {
      tagName: 'tr',
      attributes: {
        style: 'pointer-events: all; display: table; width: 100%; user-select: none;'
      },
      getMjmlTemplate: function getMjmlTemplate() {
        return {
          start: "<mjml><mj-body><mj-column>",
          end: "</mj-column></mj-body></mjml>"
        };
      },
      getTemplateFromEl: function getTemplateFromEl(sandboxEl) {
        return sandboxEl.querySelector('tr').innerHTML;
      },
      getChildrenSelector: function getChildrenSelector() {
        return 'img';
      }
    })
  });
});

/***/ }),

/***/ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/NavBar.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/NavBar.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var _mjml2html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mjml2html */ "./node_modules/organism-react-grapesjs/build/es/src/mjml2html.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/index.js");



/* harmony default export */ __webpack_exports__["default"] = (function (editor, _ref) {
  var dc = _ref.dc,
      coreMjmlModel = _ref.coreMjmlModel,
      coreMjmlView = _ref.coreMjmlView,
      sandboxEl = _ref.sandboxEl;
  var type = 'mj-navbar';
  dc.addType(type, {
    isComponent: Object(_index_js__WEBPACK_IMPORTED_MODULE_2__["isComponentType"])(type),
    model: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coreMjmlModel, {
      defaults: {
        name: 'NavBar',
        draggable: '[data-gjs-type=mj-column]',
        droppable: '[data-gjs-type=mj-navbar-link]',
        'style-default': {// TODO
        },
        stylable: [// TODO
        ],
        traits: [{
          type: 'select',
          label: 'Hamburger',
          name: 'hamburger',
          options: [{
            value: 'hamburger',
            name: 'ON'
          }, {
            value: '',
            name: 'OFF'
          }]
        }]
      }
    }),
    view: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coreMjmlView, {
      tagName: 'tr',
      attributes: {
        style: 'pointer-events: all; display: table; width: 100%'
      },
      init: function init() {
        coreMjmlView.init.call(this);
        this.listenTo(this.model.get('components'), 'add remove', this.render);
      },
      getTemplateFromMjml: function getTemplateFromMjml() {
        var mjmlTmpl = this.getMjmlTemplate();
        var innerMjml = this.getInnerMjmlTemplate();
        var htmlOutput = Object(_mjml2html__WEBPACK_IMPORTED_MODULE_1__["default"])("".concat(mjmlTmpl.start, "\n          ").concat(innerMjml.start).concat(innerMjml.end).concat(mjmlTmpl.end));
        var html = htmlOutput.html; // I need styles for hamburger

        var styles = [];
        sandboxEl.innerHTML = html;
        var styleArr = Array.from(sandboxEl.querySelectorAll('style'));
        styleArr.forEach(function (item) {
          styles.push(item.innerHTML);
        });
        var content = html.replace(/<body(.*)>/, '<body>');
        var start = content.indexOf('<body>') + 6;
        var end = content.indexOf('</body>');
        sandboxEl.innerHTML = content.substring(start, end).trim();
        var componentEl = this.getTemplateFromEl(sandboxEl); // Copy all rendered attributes (TODO need for all)

        var attributes = {};
        var elAttrs = componentEl.attributes;

        for (var elAttr, i = 0, len = elAttrs.length; i < len; i++) {
          elAttr = elAttrs[i];
          attributes[elAttr.name] = elAttr.value;
        }

        return {
          attributes: attributes,
          content: componentEl.innerHTML,
          style: styles.join(' ')
        };
      },
      render: function render() {
        this.renderAttributes();
        var mjmlResult = this.getTemplateFromMjml();
        this.el.innerHTML = mjmlResult.content;
        this.$el.attr(mjmlResult.attributes);
        editor.addComponents("<style>".concat(mjmlResult.style, "</style>"));
        this.getChildrenContainer().innerHTML = this.model.get('content');
        this.renderChildren();
        this.renderStyle();
        return this;
      },
      getMjmlTemplate: function getMjmlTemplate() {
        return {
          start: "<mjml><mj-body><mj-column>",
          end: "</mj-column></mj-body></mjml>"
        };
      },
      getTemplateFromEl: function getTemplateFromEl(sandboxEl) {
        return sandboxEl.firstChild.querySelector('tr');
      },
      getChildrenSelector: function getChildrenSelector() {
        return 'div.mj-inline-links';
      },
      rerender: function rerender() {
        coreMjmlView.rerender.call(this);
        this.model.components().models.forEach(function (item) {
          if (item.attributes.type != "mj-navbar-link") {
            return;
          }

          item.view.rerender();
        });
      }
    })
  });
});

/***/ }),

/***/ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/NavBarLink.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/NavBarLink.js ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/index.js");


/* harmony default export */ __webpack_exports__["default"] = (function (editor, _ref) {
  var dc = _ref.dc,
      coreMjmlModel = _ref.coreMjmlModel,
      coreMjmlView = _ref.coreMjmlView;
  var type = 'mj-navbar-link';
  dc.addType(type, {
    isComponent: Object(_index_js__WEBPACK_IMPORTED_MODULE_1__["isComponentType"])(type),
    extend: 'link',
    extendFnView: ['onActive', 'disableEditing'],
    model: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coreMjmlModel, {
      defaults: {
        name: 'NavBarLink',
        draggable: '[data-gjs-type=mj-navbar]',
        highlightable: false,
        stylable: ['font-style', 'font-size', 'font-weight', 'font-family', 'color', 'text-decoration', 'text-transform', 'padding', 'padding-top', 'padding-left', 'padding-right', 'padding-bottom'],
        'style-default': {
          'font-size': '13px',
          'padding-top': '25px',
          'padding-bottom': '25px',
          'padding-left': '10px',
          'padding-right': '10px',
          'text-transform': 'uppercase'
        },
        traits: ['href']
      }
    }),
    view: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coreMjmlView, {
      tagName: 'a',
      attributes: {
        style: 'pointer-events: all; float: none; display: inline-table;'
      },
      getMjmlTemplate: function getMjmlTemplate() {
        var parentView = this.model.parent().view;

        if (parentView.getInnerMjmlTemplate) {
          var mjmlNavBar = coreMjmlView.getInnerMjmlTemplate.call(parentView);
          return {
            start: "<mjml><mj-body><mj-column>".concat(mjmlNavBar.start),
            end: "".concat(mjmlNavBar.end, "</mj-column></mj-body></mjml>")
          };
        } else {
          return {
            start: "<mjml><mj-body><mj-column><mj-navbar>",
            end: "</mj-navbar></mj-column></mj-body></mjml"
          };
        }
      },
      getTemplateFromEl: function getTemplateFromEl(sandboxEl) {
        return sandboxEl.querySelector('div').innerHTML;
      },
      getChildrenSelector: function getChildrenSelector() {
        return 'a,p';
      },

      /**
       * Prevent content repeating
       */
      renderChildren: function renderChildren() {
        coreMjmlView.renderChildren.call(this);
      },

      /**
       * Need to make text selectable.
       */
      onActive: function onActive() {
        this.getChildrenContainer().style.pointerEvents = 'all';
      },
      disableEditing: function disableEditing() {
        this.getChildrenContainer().style.pointerEvents = 'none';
      }
    })
  });
});

/***/ }),

/***/ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Section.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Section.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/index.js");

// Specs: https://mjml.io/documentation/#mjml-section

/* harmony default export */ __webpack_exports__["default"] = (function (editor, _ref) {
  var dc = _ref.dc,
      coreMjmlModel = _ref.coreMjmlModel,
      coreMjmlView = _ref.coreMjmlView;
  var type = 'mj-section';
  dc.addType(type, {
    isComponent: Object(_index_js__WEBPACK_IMPORTED_MODULE_1__["isComponentType"])(type),
    model: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coreMjmlModel, {
      defaults: {
        name: 'Section',
        draggable: '[data-gjs-type=mj-body]',
        droppable: '[data-gjs-type=mj-column]',
        'style-default': {
          'padding-top': '10px',
          'padding-bottom': '10px',
          'vertical-align': 'top',
          'text-align': 'center'
        },
        stylable: ['vertical-align', 'text-align', 'padding', 'padding-top', 'padding-left', 'padding-right', 'padding-bottom', 'background-color', 'background-url', 'background-repeat', 'background-size', 'border-radius', 'border-top-left-radius', 'border-top-right-radius', 'border-bottom-left-radius', 'border-bottom-right-radius', 'border', 'border-width', 'border-style', 'border-color']
      }
    }),
    view: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coreMjmlView, {
      tagName: 'div',
      attributes: {
        style: 'pointer-events: all;',
        'data-type': 'mj-section'
      },
      getMjmlTemplate: function getMjmlTemplate() {
        var parentView = this.model.parent().view;

        if (parentView.getInnerMjmlTemplate) {
          var mjmlBody = coreMjmlView.getInnerMjmlTemplate.call(parentView);
          return {
            start: "<mjml><mj-body>".concat(mjmlBody.start),
            end: "".concat(mjmlBody.end, "</mj-body></mjml>")
          };
        } else {
          return {
            start: "<mjml><mj-body>",
            end: "</mj-body></mjml>"
          };
        }
      },
      getChildrenSelector: function getChildrenSelector() {
        return 'table > tbody > tr > td';
      },
      init: function init() {
        coreMjmlView.init.call(this);
        this.listenTo(this.model.get('components'), 'add remove', this.render);
      }
    })
  });
});

/***/ }),

/***/ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Social.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Social.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/index.js");

// Specs: https://mjml.io/documentation/#mjml-social

/* harmony default export */ __webpack_exports__["default"] = (function (editor, _ref) {
  var dc = _ref.dc,
      coreMjmlModel = _ref.coreMjmlModel,
      coreMjmlView = _ref.coreMjmlView;
  var type = 'mj-social';
  dc.addType(type, {
    isComponent: Object(_index_js__WEBPACK_IMPORTED_MODULE_1__["isComponentType"])(type),
    model: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coreMjmlModel, {
      defaults: {
        name: 'Social',
        draggable: '[data-gjs-type=mj-column]',
        droppable: '[data-gjs-type=mj-social-element]',
        stylable: ['icon-size', 'text-decoration', 'align', 'font-family', 'font-size', 'line-height', 'padding', 'padding-top', 'padding-left', 'padding-right', 'padding-bottom', 'border-radius', 'border-top-left-radius', 'border-top-right-radius', 'border-bottom-left-radius', 'border-bottom-right-radius', 'container-background-color', 'color'],
        'style-default': {
          'align': 'center',
          'icon-size': '20px',
          'font-size': '13px',
          'line-height': '22px'
        },
        traits: [{
          type: 'select',
          label: 'Mode',
          name: 'mode',
          options: [{
            value: 'horizontal',
            name: 'Horizontal'
          }, {
            value: 'vertical',
            name: 'Vertical'
          }]
        }]
      }
    }),
    view: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coreMjmlView, {
      tagName: 'tr',
      attributes: {
        style: 'pointer-events: all; display: table; width: 100%'
      },
      getMjmlTemplate: function getMjmlTemplate() {
        return {
          start: "<mjml><mj-body><mj-column>",
          end: "</mj-column></mj-body></mjml>"
        };
      },
      getTemplateFromEl: function getTemplateFromEl(sandboxEl) {
        return sandboxEl.querySelector('tr').innerHTML;
      },
      getChildrenSelector: function getChildrenSelector() {
        return 'td';
      },
      rerender: function rerender() {
        coreMjmlView.rerender.call(this);
        this.model.components().models.forEach(function (item) {
          if (item.attributes.type != "mj-social-element") {
            return;
          }

          item.view.rerender();
        });
      },
      init: function init() {
        coreMjmlView.init.call(this);
        this.listenTo(this.model.get('components'), 'add remove', this.render);
      }
    })
  });
});

/***/ }),

/***/ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/SocialElement.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/SocialElement.js ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/index.js");

// Specs: https://mjml.io/documentation/#mjml-social

/* harmony default export */ __webpack_exports__["default"] = (function (editor, _ref) {
  var dc = _ref.dc,
      coreMjmlModel = _ref.coreMjmlModel,
      coreMjmlView = _ref.coreMjmlView;
  var type = 'mj-social-element';
  dc.addType(type, {
    isComponent: Object(_index_js__WEBPACK_IMPORTED_MODULE_1__["isComponentType"])(type),
    model: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coreMjmlModel, JSON.parse('{"defaults":{"name":"SocialElement","draggable":"[data-gjs-type=mj-social]","stylable":["text-decoration","align","font-family","font-size","line-height","padding","padding-top","padding-left","padding-right","padding-bottom","border-radius","border-top-left-radius","border-top-right-radius","border-bottom-left-radius","border-bottom-right-radius","background-color","color"],"style-default":{"align":"center","icon-size":"20px","font-size":"13px","line-height":"22px"},"traits":[{"type":"select","label":"Icon","name":"name","options":[{"value":"","name":"Custom"},{"value":"facebook","name":"Facebook"},{"value":"twitter","name":"Twitter"},{"value":"google","name":"Google"},{"value":"instagram","name":"Instagram"},{"value":"web","name":"Web"},{"value":"youtube","name":"Youtube"},{"value":"pinterest","name":"Pinterest"},{"value":"linkedin","name":"Linkedin"},{"value":"snapchat","name":"Snapchat"},{"value":"vimeo","name":"Vimeo"},{"value":"tumblr","name":"Tumblr"},{"value":"github","name":"Github"},{"value":"soundcloud","name":"SoundCloud"},{"value":"medium","name":"Medium"},{"value":"dribbble","name":"Dribbble"},{"value":"xing","name":"Xing"}]},{"name":"src"},{"name":"href"}]}}')),
    view: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coreMjmlView, {
      tagName: 'table',
      attributes: {
        style: 'pointer-events: all; float: none; display: inline-table;'
      },
      getMjmlTemplate: function getMjmlTemplate() {
        var parentView = this.model.parent().view;

        if (parentView.getInnerMjmlTemplate) {
          var mjmlSocial = coreMjmlView.getInnerMjmlTemplate.call(parentView);
          return {
            start: "<mjml><mj-body><mj-column>".concat(mjmlSocial.start),
            end: "".concat(mjmlSocial.end, "</mj-column></mj-body></mjml>")
          };
        } else {
          return {
            start: "<mjml><mj-body><mj-column><mj-social>",
            end: "</mj-social></mj-column></mj-body></mjml"
          };
        }
      },
      getTemplateFromEl: function getTemplateFromEl(sandboxEl) {
        return sandboxEl.querySelector('tr > td > table').innerHTML;
      },
      getChildrenSelector: function getChildrenSelector() {
        return 'img';
      }
    })
  });
});

/***/ }),

/***/ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Spacer.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Spacer.js ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/index.js");

// Specs: https://mjml.io/documentation/#mjml-spacer

/* harmony default export */ __webpack_exports__["default"] = (function (editor, _ref) {
  var dc = _ref.dc,
      coreMjmlModel = _ref.coreMjmlModel,
      coreMjmlView = _ref.coreMjmlView;
  var type = 'mj-spacer';
  dc.addType(type, {
    isComponent: Object(_index_js__WEBPACK_IMPORTED_MODULE_1__["isComponentType"])(type),
    model: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coreMjmlModel, {
      defaults: {
        name: 'Spacer',
        draggable: '[data-gjs-type=mj-column]',
        droppable: false,
        'style-default': {
          height: '20px'
        },
        stylable: ['height', 'container-background-color'],
        "void": true
      }
    }),
    view: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coreMjmlView, {
      tagName: 'tr',
      attributes: {
        style: 'pointer-events: all; display: table; width: 100%;user-select: none;'
      },
      getMjmlTemplate: function getMjmlTemplate() {
        return {
          start: "<mjml><mj-body><mj-column>",
          end: "</mj-column></mj-body></mjml"
        };
      },
      getTemplateFromEl: function getTemplateFromEl(sandboxEl) {
        return sandboxEl.querySelector('tr').innerHTML;
      },
      getChildrenSelector: function getChildrenSelector() {
        return 'td';
      },
      renderChildren: function renderChildren() {
        coreMjmlView.renderChildren.call(this);
      }
    })
  });
});

/***/ }),

/***/ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Style.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Style.js ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var _mjml2html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../mjml2html */ "./node_modules/organism-react-grapesjs/build/es/src/mjml2html.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/index.js");

// Specs: https://mjml.io/documentation/#mj-style


/* harmony default export */ __webpack_exports__["default"] = (function (editor, _ref) {
  var dc = _ref.dc,
      coreMjmlModel = _ref.coreMjmlModel,
      coreMjmlView = _ref.coreMjmlView,
      sandboxEl = _ref.sandboxEl;
  var type = 'mj-style';
  dc.addType(type, {
    isComponent: Object(_index_js__WEBPACK_IMPORTED_MODULE_2__["isComponentType"])(type),
    model: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coreMjmlModel, {
      defaults: {
        draggable: '[data-gjs-type=mj-head]'
      }
    }),
    view: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coreMjmlView, {
      tagName: "style",
      getMjmlTemplate: function getMjmlTemplate() {
        return {
          start: "<mjml><mj-head>",
          end: "</mj-head></mjml>"
        };
      },
      getTemplateFromEl: function getTemplateFromEl(sandboxEl) {
        return sandboxEl.querySelector('style').innerHTML;
      },
      renderStyle: function renderStyle() {},
      getTemplateFromMjml: function getTemplateFromMjml() {
        var mjmlTmpl = this.getMjmlTemplate();
        var innerMjml = this.getInnerMjmlTemplate();
        var htmlOutput = Object(_mjml2html__WEBPACK_IMPORTED_MODULE_1__["default"])("".concat(mjmlTmpl.start, "\n          ").concat(innerMjml.start).concat(innerMjml.end).concat(mjmlTmpl.end));
        var html = htmlOutput.html;
        var start = html.indexOf('<head>') + 6;
        var end = html.indexOf('</head>');
        html = html.substring(start, end).trim();
        sandboxEl.innerHTML = html;
        return this.getTemplateFromEl(sandboxEl);
      }
    })
  });
});

/***/ }),

/***/ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Text.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Text.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");

// Specs: https://mjml.io/documentation/#mjml-text
/* harmony default export */ __webpack_exports__["default"] = (function (editor, _ref) {
  var dc = _ref.dc,
      coreMjmlModel = _ref.coreMjmlModel,
      coreMjmlView = _ref.coreMjmlView;
  var type = 'mj-text';
  dc.addType(type, {
    extend: 'text',
    extendFnView: ['onActive', 'disableEditing'],
    isComponent: function isComponent(el) {
      if (el.tagName === type.toUpperCase()) {
        return {
          type: type,
          content: el.innerHTML,
          components: []
        };
      }
    },
    model: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coreMjmlModel, {
      defaults: {
        name: 'Text',
        draggable: '[data-gjs-type=mj-column]',
        highlightable: false,
        stylable: ['height', 'font-style', 'font-size', 'font-weight', 'font-family', 'color', 'line-height', 'letter-spacing', 'text-decoration', 'align', 'text-transform', 'padding', 'padding-top', 'padding-left', 'padding-right', 'padding-bottom', 'container-background-color'],
        'style-default': {
          'padding-top': '10px',
          'padding-bottom': '10px',
          'padding-right': '25px',
          'padding-left': '25px',
          'font-size': '13px',
          'line-height': '22px',
          'align': 'left'
        }
      }
    }),
    view: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coreMjmlView, {
      tagName: 'tr',
      attributes: {
        style: 'pointer-events: all; display: table; width: 100%'
      },
      getMjmlTemplate: function getMjmlTemplate() {
        return {
          start: "<mjml><mj-body><mj-column>",
          end: "</mj-column></mj-body></mjml>"
        };
      },
      getTemplateFromEl: function getTemplateFromEl(sandboxEl) {
        return sandboxEl.querySelector('tr').innerHTML;
      },
      getChildrenSelector: function getChildrenSelector() {
        return 'td > div';
      },

      /**
       * Prevent content repeating
       */
      renderChildren: function renderChildren() {
        coreMjmlView.renderChildren.call(this);
      },

      /**
       * Need to make text selectable.
       */
      onActive: function onActive() {
        this.getChildrenContainer().style.pointerEvents = 'all';
      },
      disableEditing: function disableEditing() {
        this.getChildrenContainer().style.pointerEvents = 'none';
      }
    })
  });
});

/***/ }),

/***/ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Wrapper.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Wrapper.js ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.js */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/index.js");

// Specs: https://mjml.io/documentation/#mjml-group

/* harmony default export */ __webpack_exports__["default"] = (function (editor, _ref) {
  var dc = _ref.dc,
      coreMjmlModel = _ref.coreMjmlModel,
      coreMjmlView = _ref.coreMjmlView;
  var type = 'mj-wrapper';
  dc.addType(type, {
    isComponent: Object(_index_js__WEBPACK_IMPORTED_MODULE_1__["isComponentType"])(type),
    model: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coreMjmlModel, {
      defaults: {
        name: 'Wrapper',
        draggable: '[data-gjs-type=mj-body]',
        droppable: '[data-gjs-type=mj-wrapper]'
      }
    }),
    view: Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({}, coreMjmlView, {
      tagName: 'div',
      attributes: {
        style: 'pointer-events: all; display: table; width: 100%'
      },
      getMjmlTemplate: function getMjmlTemplate() {
        return {
          start: "<mjml><mj-body>",
          end: "</mj-body></mjml>"
        };
      },
      getChildrenSelector: function getChildrenSelector() {
        return 'table tr td';
      }
    })
  });
});

/***/ }),

/***/ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/index.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/index.js ***!
  \*********************************************************************************************/
/*! exports provided: isComponentType, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComponentType", function() { return isComponentType; });
/* harmony import */ var reshow_runtime_es_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/typeof */ "./node_modules/reshow-runtime/es/helpers/typeof.js");
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var _mjml2html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mjml2html */ "./node_modules/organism-react-grapesjs/build/es/src/mjml2html.js");
/* harmony import */ var _mjml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mjml */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/mjml.js");
/* harmony import */ var _Head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Head */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Head.js");
/* harmony import */ var _Style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Style */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Style.js");
/* harmony import */ var _Font__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Font */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Font.js");
/* harmony import */ var _Body__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Body */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Body.js");
/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Wrapper */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Wrapper.js");
/* harmony import */ var _Section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Section */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Section.js");
/* harmony import */ var _Group__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Group */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Group.js");
/* harmony import */ var _Column__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Column */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Column.js");
/* harmony import */ var _Text__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Text */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Text.js");
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Button */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Button.js");
/* harmony import */ var _Image__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Image */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Image.js");
/* harmony import */ var _Social__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Social */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Social.js");
/* harmony import */ var _SocialElement__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./SocialElement */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/SocialElement.js");
/* harmony import */ var _Divider__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Divider */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Divider.js");
/* harmony import */ var _Spacer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Spacer */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/Spacer.js");
/* harmony import */ var _NavBar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./NavBar */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/NavBar.js");
/* harmony import */ var _NavBarLink__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./NavBarLink */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/NavBarLink.js");





















var isComponentType = function isComponentType(type) {
  return function (el) {
    return el.tagName === type.toUpperCase();
  };
};
/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var domc = editor.DomComponents;
  var defaultType = domc.getType('default');
  var textType = domc.getType('text');
  var imageType = domc.getType('image');
  var linkType = domc.getType('link');
  var defaultModel = defaultType.model;
  var defaultView = defaultType.view;
  var textModel = textType.model;
  var textView = textType.view;
  var imageModel = imageType.model;
  var imageView = imageType.view;
  var linkModel = linkType.model;
  var linkView = linkType.view;
  var dc = domc;
  var ComponentsView = domc.ComponentsView;
  var sandboxEl = document.createElement('div'); // MJML Core model

  var coreMjmlModel = {
    init: function init() {
      var attrs = Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.get('attributes'));

      var style = Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.get('style'));

      for (var prop in style) {
        if (!(prop in attrs)) {
          attrs[prop] = style[prop];
        }
      }

      this.set('attributes', attrs);
      this.set('style', attrs);
      this.listenTo(this, 'change:style', this.handleStyleChange);
    },
    handleStyleChange: function handleStyleChange() {
      var style = Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.get('attributes'), {}, this.get('style'));

      this.set('attributes', style);
    },
    getMjmlAttributes: function getMjmlAttributes() {
      var attr = this.get('attributes') || {};
      delete attr.style;
      var src = this.get('src');
      if (src) attr.src = src;
      return attr;
    },

    /**
     * This will avoid rendering default attributes
     * @return {Object}
     */
    getAttrToHTML: function getAttrToHTML() {
      var attr = Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.get('attributes'));

      var style = Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_1__["default"])({}, this.get('style-default'));

      delete attr.style;

      for (var prop in attr) {
        var value = attr[prop];

        if (value && value === style[prop]) {
          delete attr[prop];
        }
      }

      return attr;
    },

    /**
     * Rhave to change few things for hte MJML's xml (no id, style, class)
     */
    toHTML: function toHTML() {
      var code = '';
      var model = this;
      var tag = model.get('tagName'),
          sTag = model.get('void'); // Build the string of attributes

      var strAttr = '';
      var attr = this.getAttrToHTML();

      for (var prop in attr) {
        var val = attr[prop];
        strAttr += Object(reshow_runtime_es_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(val) !== undefined && val !== '' ? ' ' + prop + '="' + val + '"' : '';
      }

      code += "<".concat(tag).concat(strAttr).concat(sTag ? '/' : '', ">") + model.get('content');
      model.get('components').each(function (model) {
        code += model.toHTML();
      });
      if (!sTag) code += "</".concat(tag, ">");
      return code;
    }
  }; // MJML Core view

  var coreMjmlView = {
    init: function init() {
      this.stopListening(this.model, 'change:style');
      this.listenTo(this.model, 'change:attributes change:src', this.rerender);
    },
    rerender: function rerender() {
      this.render(null, null, {}, 1);
    },
    getMjmlTemplate: function getMjmlTemplate() {
      return {
        start: "<mjml>",
        end: "</mjml>"
      };
    },
    getInnerMjmlTemplate: function getInnerMjmlTemplate() {
      var model = this.model;
      var tagName = model.get('tagName');
      var attr = model.getMjmlAttributes();
      var strAttr = '';

      for (var prop in attr) {
        var val = attr[prop];
        strAttr += Object(reshow_runtime_es_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(val) !== undefined && val !== '' ? ' ' + prop + '="' + val + '"' : '';
      }

      return {
        start: "<".concat(tagName).concat(strAttr, ">"),
        end: "</".concat(tagName, ">")
      };
    },
    getTemplateFromEl: function getTemplateFromEl(sandboxEl) {
      return sandboxEl && sandboxEl.firstChild && sandboxEl.firstChild.innerHTML;
    },
    getTemplateFromMjml: function getTemplateFromMjml() {
      var mjmlTmpl = this.getMjmlTemplate();
      var innerMjml = this.getInnerMjmlTemplate();
      var mjmlCode = mjmlTmpl.start + innerMjml.start + innerMjml.end + mjmlTmpl.end;
      var htmlOutput = Object(_mjml2html__WEBPACK_IMPORTED_MODULE_2__["default"])(mjmlCode);
      var html = htmlOutput.html;
      html = html.replace(/<body(.*)>/, '<body>');
      var start = html.indexOf('<body>') + 6;
      var end = html.indexOf('</body>');
      html = html.substring(start, end).trim();
      sandboxEl.innerHTML = html;
      return this.getTemplateFromEl(sandboxEl);
    },

    /**
     * Render children components
     * @private
     */
    renderChildren: function renderChildren(appendChildren) {
      var container = this.getChildrenContainer(); // This trick will help perfs by caching children

      if (!appendChildren) {
        this.componentsView = new ComponentsView({
          collection: this.model.get('components'),
          config: this.config,
          defaultTypes: this.opts.defaultTypes,
          componentTypes: this.opts.componentTypes
        });
        this.childNodes = this.componentsView.render(container).el.childNodes;
      } else {
        this.componentsView.parentEl = container;
      }

      var childNodes = Array.prototype.slice.call(this.childNodes);

      for (var i = 0, len = childNodes.length; i < len; i++) {
        container.appendChild(childNodes.shift());
      }

      if (container !== this.el) {
        var disableNode = function disableNode(el) {
          var children = Array.prototype.slice.call(el.children);
          children.forEach(function (el) {
            el.style['pointer-events'] = 'none';

            if (container !== el) {
              disableNode(el);
            }
          });
        };

        disableNode(this.el);
      }
    },
    renderStyle: function renderStyle() {
      this.el.style = this.attributes.style;
    },
    renderContent: function renderContent() {
      var content = this.model.get('content');

      if (content) {
        this.getChildrenContainer().innerHTML = content;
      }
    },
    render: function render(p, c, opts, appendChildren) {
      this.renderAttributes();
      this.el.innerHTML = this.getTemplateFromMjml();
      this.renderContent();
      this.renderChildren(appendChildren);
      this.childNodes = this.getChildrenContainer().childNodes;
      this.renderStyle();
      return this;
    }
  }; // MJML Internal view (for elements inside mj-columns)

  var compOpts = {
    dc: dc,
    coreMjmlModel: coreMjmlModel,
    coreMjmlView: coreMjmlView,
    opt: opt,
    sandboxEl: sandboxEl,
    defaultModel: defaultModel,
    defaultView: defaultView,
    textModel: textModel,
    textView: textView,
    linkModel: linkModel,
    linkView: linkView,
    imageModel: imageModel,
    imageView: imageView
  };
  Object(_mjml__WEBPACK_IMPORTED_MODULE_3__["default"])(editor, compOpts);
  Object(_Head__WEBPACK_IMPORTED_MODULE_4__["default"])(editor, compOpts);
  Object(_Style__WEBPACK_IMPORTED_MODULE_5__["default"])(editor, compOpts);
  Object(_Font__WEBPACK_IMPORTED_MODULE_6__["default"])(editor, compOpts);
  Object(_Body__WEBPACK_IMPORTED_MODULE_7__["default"])(editor, compOpts);
  Object(_Wrapper__WEBPACK_IMPORTED_MODULE_8__["default"])(editor, compOpts);
  Object(_Section__WEBPACK_IMPORTED_MODULE_9__["default"])(editor, compOpts);
  Object(_Group__WEBPACK_IMPORTED_MODULE_10__["default"])(editor, compOpts);
  Object(_Column__WEBPACK_IMPORTED_MODULE_11__["default"])(editor, compOpts);
  Object(_Button__WEBPACK_IMPORTED_MODULE_13__["default"])(editor, compOpts);
  Object(_Text__WEBPACK_IMPORTED_MODULE_12__["default"])(editor, compOpts);
  Object(_Image__WEBPACK_IMPORTED_MODULE_14__["default"])(editor, compOpts);
  Object(_Social__WEBPACK_IMPORTED_MODULE_15__["default"])(editor, compOpts);
  Object(_SocialElement__WEBPACK_IMPORTED_MODULE_16__["default"])(editor, compOpts);
  Object(_Divider__WEBPACK_IMPORTED_MODULE_17__["default"])(editor, compOpts);
  Object(_Spacer__WEBPACK_IMPORTED_MODULE_18__["default"])(editor, compOpts);
  Object(_NavBar__WEBPACK_IMPORTED_MODULE_19__["default"])(editor, compOpts);
  Object(_NavBarLink__WEBPACK_IMPORTED_MODULE_20__["default"])(editor, compOpts);
});

/***/ }),

/***/ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/mjml.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/mjml.js ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/index.js");
// Specs: https://mjml.io/documentation/#mjml

/* harmony default export */ __webpack_exports__["default"] = (function (editor, _ref) {
  var dc = _ref.dc;
  var type = 'mjml';
  dc.addType(type, {
    isComponent: Object(_index_js__WEBPACK_IMPORTED_MODULE_0__["isComponentType"])(type),
    model: {
      defaults: {
        droppable: '[data-gjs-type=mj-head], [data-gjs-type=mj-body]',
        draggable: false
      }
    }
  });
});

/***/ }),

/***/ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/index.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/index.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! reshow-runtime/es/helpers/objectSpread2 */ "./node_modules/reshow-runtime/es/helpers/objectSpread2.js");
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/blocks.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/components/index.js");
/* harmony import */ var _commands__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./commands */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/commands.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./buttons */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/buttons.js");
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/style.js");






/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var config = editor.getConfig();

  var opts = Object(reshow_runtime_es_helpers_objectSpread2__WEBPACK_IMPORTED_MODULE_0__["default"])({
    editor: editor,
    cmdBtnMoveLabel: 'Move',
    cmdBtnUndoLabel: 'Undo',
    cmdBtnRedoLabel: 'Redo',
    cmdBtnDesktopLabel: 'Desktop',
    cmdBtnTabletLabel: 'Tablet',
    cmdBtnMobileLabel: 'Mobile',
    expTplBtnTitle: 'View Code',
    fullScrBtnTitle: 'FullScreen',
    swichtVwBtnTitle: 'View Components',
    defaultTemplate: '',
    // Default template in case the canvas is empty
    categoryLabel: '',
    // Code viewer theme
    codeViewerTheme: 'hopscotch',
    // Import placeholder MJML
    importPlaceholder: '',
    // Title for the import modal
    modalTitleImport: 'Import MJML',
    // Test for the import button
    modalBtnImport: 'Import',
    // Description for the import modal
    modalLabelImport: '',
    // Title for the export modal
    modalTitleExport: 'Export MJML',
    // Description for the export modal
    modalLabelExport: '',
    // Overwrite default export command
    overwriteExport: 1,
    // String before the MJML in export code
    preMjml: '',
    // String after the MJML in export code
    postMjml: '',
    // Export 'mjml', 'html' or both (leave empty) TODO
    exportOnly: '',
    // Clean all previous blocks if true
    resetBlocks: 1,
    // Reset the Style Manager and add new properties for MJML
    resetStyleManager: 1,
    // Column padding (this way it's easier select columns)
    columnsPadding: '10px 0'
  }, opt); // Change some config


  config.devicePreviewMode = 1; // I need to prevent forced class creation as classes aren't working
  // at the moment

  config.forceClass = 0; // Don't need to create css rules with media

  config.devicePreviewMode = 1; // Doesn't work without inline styling

  config.avoidInlineStyle = 0;
  [_blocks__WEBPACK_IMPORTED_MODULE_1__["default"], _components__WEBPACK_IMPORTED_MODULE_2__["default"], _commands__WEBPACK_IMPORTED_MODULE_3__["default"], _buttons__WEBPACK_IMPORTED_MODULE_4__["default"], _style__WEBPACK_IMPORTED_MODULE_5__["default"]].forEach(function (module) {
    return module(editor, opts);
  }); // Update devices

  if (opts.resetDevices) {
    var dm = editor.DeviceManager;
    dm.getAll().reset();
    dm.add('Desktop', '');
    dm.add('Mobile', '320px');
    dm.add('Tablet', '820px');
  }
});

/***/ }),

/***/ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/style.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/style.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (editor) {
  var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (opt.resetStyleManager) {
    var sectors = editor.StyleManager.getSectors();
    editor.on('load', function () {
      sectors.reset();
      sectors.add(JSON.parse('[{"name":"Dimension","open":false,"buildProps":["width","height","max-width","min-height","margin","padding"],"properties":[{"property":"margin","properties":[{"name":"Top","property":"margin-top"},{"name":"Right","property":"margin-right"},{"name":"Bottom","property":"margin-bottom"},{"name":"Left","property":"margin-left"}]},{"property":"padding","detached":true,"properties":[{"name":"Top","property":"padding-top"},{"name":"Right","property":"padding-right"},{"name":"Bottom","property":"padding-bottom"},{"name":"Left","property":"padding-left"}]},{"property":"icon-size","type":"integer","defaults":"20px","units":["px","%"]}]},{"name":"Typography","open":false,"buildProps":["font-family","font-size","font-weight","letter-spacing","color","line-height","text-align","align","text-decoration"],"properties":[{"name":"Font","property":"font-family"},{"name":"Weight","property":"font-weight"},{"name":"Font color","property":"color"},{"property":"text-align","type":"radio","defaults":"left","list":[{"value":"left","name":"Left","className":"fa fa-align-left"},{"value":"center","name":"Center","className":"fa fa-align-center"},{"value":"right","name":"Right","className":"fa fa-align-right"},{"value":"justify","name":"Justify","className":"fa fa-align-justify"}]},{"property":"align","type":"radio","defaults":"left","list":[{"value":"left","name":"Left","className":"fa fa-align-left"},{"value":"center","name":"Center","className":"fa fa-align-center"},{"value":"right","name":"Right","className":"fa fa-align-right"},{"value":"justify","name":"Justify","className":"fa fa-align-justify"}]},{"property":"text-decoration","type":"radio","defaults":"none","list":[{"value":"none","name":"None","className":"fa fa-times"},{"value":"underline","name":"underline","className":"fa fa-underline"},{"value":"line-through","name":"Line-through","className":"fa fa-strikethrough"}]}]},{"name":"Decorations","open":false,"buildProps":["background-color","container-background-color","background-url","background-repeat","background-size","border-radius","border"],"properties":[{"name":"Background color","property":"container-background-color","type":"color"},{"property":"background-url","type":"file"},{"property":"border-radius","properties":[{"name":"Top","property":"border-top-left-radius"},{"name":"Right","property":"border-top-right-radius"},{"name":"Bottom","property":"border-bottom-left-radius"},{"name":"Left","property":"border-bottom-right-radius"}]},{"property":"border-detached","name":"Border detached","type":"composite","detached":true,"properties":[{"name":"Width","property":"border-width","type":"integer"},{"name":"Style","property":"border-style","type":"select","list":[{"value":"none"},{"value":"solid"},{"value":"dotted"},{"value":"dashed"},{"value":"double"},{"value":"groove"},{"value":"ridge"},{"value":"inset"},{"value":"outset"}]},{"name":"Color","property":"border-color","type":"color"}]}]}]'));
    });
  }
});

/***/ }),

/***/ "./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/toggleImagesCommand.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/organism-react-grapesjs/build/es/src/grapesjs-mjml/toggleImagesCommand.js ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var toggleImages = function toggleImages(components, on) {
    var srcPlh = '##';
    components.each(function (component) {
      if (component.get('type') === 'image') {
        var source = component.get('src');

        if (on) {
          if (source === srcPlh) {
            component.set('src', component.get('src_bkp'));
          }
        } else if (source !== srcPlh) {
          component.set('src_bkp', component.get('src'));
          component.set('src', srcPlh);
        }
      }

      toggleImages(component.get('components'), on);
    });
  };

  return {
    run: function run(editor) {
      var components = editor.getComponents();
      toggleImages(components);
    },
    stop: function stop(editor) {
      var components = editor.getComponents();
      toggleImages(components, 1);
    }
  };
});

/***/ })

}]);
//# sourceMappingURL=1.a19077262da9e383a818.bundle.js.map