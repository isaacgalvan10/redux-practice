(function(modules) {
    function webpackJsonpCallback(data) {
        var chunkIds = data[0];
        var moreModules = data[1];
        var executeModules = data[2];
        var moduleId, chunkId, i = 0, resolves = [];
        for (;i < chunkIds.length; i++) {
            chunkId = chunkIds[i];
            if (Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) resolves.push(installedChunks[chunkId][0]);
            installedChunks[chunkId] = 0;
        }
        for (moduleId in moreModules) if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) modules[moduleId] = moreModules[moduleId];
        if (parentJsonpFunction) parentJsonpFunction(data);
        while (resolves.length) resolves.shift()();
        deferredModules.push.apply(deferredModules, executeModules || []);
        return checkDeferredModules();
    }
    function checkDeferredModules() {
        var result;
        for (var i = 0; i < deferredModules.length; i++) {
            var deferredModule = deferredModules[i];
            var fulfilled = true;
            for (var j = 1; j < deferredModule.length; j++) {
                var depId = deferredModule[j];
                if (0 !== installedChunks[depId]) fulfilled = false;
            }
            if (fulfilled) {
                deferredModules.splice(i--, 1);
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
            }
        }
        return result;
    }
    var installedModules = {};
    var installedChunks = {
        BooksApp: 0
    };
    var deferredModules = [];
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    jsonpArray.push = webpackJsonpCallback;
    jsonpArray = jsonpArray.slice();
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    var parentJsonpFunction = oldJsonpFunction;
    deferredModules.push([ "./assets/js/index.js", "vendors~BooksApp" ]);
    return checkDeferredModules();
})({
    "./assets/js/actions/allActions.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return addBook; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"f\", function() { return removeBook; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"d\", function() { return openInfoBook; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"b\", function() { return closeInfoBook; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"e\", function() { return openMyList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"c\", function() { return closeMyList; });\nconst addBook = bookTitle => {\n  return {\n    type: 'ADD_BOOK',\n    payload: bookTitle\n  };\n};\nconst removeBook = book => {\n  return {\n    type: 'REMOVE_BOOK',\n    payload: book\n  };\n};\nconst openInfoBook = book => {\n  return {\n    type: 'OPEN_INFO_BOOK',\n    payload: book\n  };\n};\nconst closeInfoBook = book => {\n  return {\n    type: 'CLOSE_INFO_BOOK',\n    payload: book\n  };\n};\nconst openMyList = () => {\n  return {\n    type: 'OPEN_MY_LIST'\n  };\n};\nconst closeMyList = () => {\n  return {\n    type: 'CLOSE_MY_LIST'\n  };\n};\n\n//# sourceURL=webpack:///./assets/js/actions/allActions.js?");
    },
    "./assets/js/components/AllBooks.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");\n/* harmony import */ var _actions_allActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../actions/allActions */ "./assets/js/actions/allActions.js");\n\n\n\n\nclass AllBooks extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n\n    this.showAllBooks = () => {\n      return this.props.booksData.map(book => {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          className: "book-container",\n          key: book.id\n        }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n          onClick: this.props.openInfoBook.bind(null, book),\n          className: "book",\n          style: {\n            backgroundImage: "url(\'".concat(book.coverURL, "\')")\n          }\n        }));\n      });\n    };\n\n    this.state = {};\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "all-books"\n    }, this.showAllBooks());\n  }\n\n}\n\nconst mapStateToProps = state => {\n  return state;\n};\n\n/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[/* connect */ "b"])(mapStateToProps, {\n  openInfoBook: _actions_allActions__WEBPACK_IMPORTED_MODULE_2__[/* openInfoBook */ "d"]\n})(AllBooks));\n\n//# sourceURL=webpack:///./assets/js/components/AllBooks.js?');
    },
    "./assets/js/components/App.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _AllBooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AllBooks */ "./assets/js/components/AllBooks.js");\n/* harmony import */ var _MyList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MyList */ "./assets/js/components/MyList.js");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");\n/* harmony import */ var _actions_allActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../actions/allActions */ "./assets/js/actions/allActions.js");\n\n\n\n\n\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super();\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      id: "approot",\n      className: this.props.globalState.popupOpen === true ? \'popupOpen\' : \'\'\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "container"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "open-list",\n      onClick: this.props.openMyList\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fas fa-bars"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AllBooks__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_MyList__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null));\n  }\n\n}\n\nconst mapStateToProps = state => {\n  return state;\n};\n\n/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__[/* connect */ "b"])(mapStateToProps, {\n  openMyList: _actions_allActions__WEBPACK_IMPORTED_MODULE_4__[/* openMyList */ "e"]\n})(App));\n\n//# sourceURL=webpack:///./assets/js/components/App.js?');
    },
    "./assets/js/components/Modal.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");\n/* harmony import */ var _actions_allActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/allActions */ "./assets/js/actions/allActions.js");\n\n\n\n\n\nclass Modal extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  render() {\n    const book = this.props.globalState.openInfoBook;\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      id: "modal",\n      className: this.props.globalState.popupOpen === true ? \'active\' : \'\'\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "modal-container"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "close-modal",\n      onClick: this.props.closeInfoBook\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {\n      className: "fas fa-times"\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "modal-grid"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "images"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "cover",\n      style: {\n        backgroundImage: "url(\'".concat(book.coverURL === undefined ? \'\' : book.coverURL, "\')")\n      }\n    })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "info"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, book.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "info-line"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n      className: "bold"\n    }, "Author: "), book.author), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "info-line"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n      className: "bold"\n    }, "Category: "), book.category), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "info-line"\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n      className: "bold"\n    }, "Published: "), book.published), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {\n      className: "review"\n    }, book.review), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "add-btn",\n      onClick: this.props.addBook.bind(null, book.title)\n    }, "Add To My List")))));\n  }\n\n}\n\nconst mapStateToProps = state => {\n  return state;\n};\n\n/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[/* connect */ "b"])(mapStateToProps, {\n  closeInfoBook: _actions_allActions__WEBPACK_IMPORTED_MODULE_2__[/* closeInfoBook */ "b"],\n  addBook: _actions_allActions__WEBPACK_IMPORTED_MODULE_2__[/* addBook */ "a"]\n})(Modal));\n\n//# sourceURL=webpack:///./assets/js/components/Modal.js?');
    },
    "./assets/js/components/MyList.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");\n/* harmony import */ var _actions_allActions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/allActions */ "./assets/js/actions/allActions.js");\n\n\n\n\nclass MyList extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {\n  constructor() {\n    super(...arguments);\n\n    this.showListOfBooks = () => {\n      return this.props.globalState.myList.map(book => {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {\n          key: book\n        }, book, \' \', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {\n          className: "delete-btn",\n          onClick: this.props.removeBook.bind(null, book)\n        }, "Delete"));\n      });\n    };\n  }\n\n  render() {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {\n      id: "myList",\n      className: this.props.globalState.listOpen === true ? \'active\' : \'\'\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "My List of Books"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, this.showListOfBooks()), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {\n      className: "close-list",\n      onClick: this.props.closeMyList\n    }, "Close List"));\n  }\n\n}\n\nconst mapStateToProps = state => {\n  return state;\n};\n\n/* harmony default export */ __webpack_exports__["a"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__[/* connect */ "b"])(mapStateToProps, {\n  closeMyList: _actions_allActions__WEBPACK_IMPORTED_MODULE_2__[/* closeMyList */ "c"],\n  removeBook: _actions_allActions__WEBPACK_IMPORTED_MODULE_2__[/* removeBook */ "f"]\n})(MyList));\n\n//# sourceURL=webpack:///./assets/js/components/MyList.js?');
    },
    "./assets/js/index.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");\n/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/App */ "./assets/js/components/App.js");\n/* harmony import */ var _components_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Modal */ "./assets/js/components/Modal.js");\n/* harmony import */ var _reducers_allReducers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reducers/allReducers */ "./assets/js/reducers/allReducers.js");\n\n\n\n\n\n\n\nconst store = Object(redux__WEBPACK_IMPORTED_MODULE_3__[/* createStore */ "c"])(_reducers_allReducers__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]);\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__[/* Provider */ "a"], {\n  store: store\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null)), document.getElementById(\'app\'));\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_2__[/* Provider */ "a"], {\n  store: store\n}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Modal__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null)), document.getElementById(\'modalroot\'));\n\n//# sourceURL=webpack:///./assets/js/index.js?');
    },
    "./assets/js/reducers/allReducers.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval('/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");\n/* harmony import */ var _appStateReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appStateReducer */ "./assets/js/reducers/appStateReducer.js");\n/* harmony import */ var _booksDataReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booksDataReducer */ "./assets/js/reducers/booksDataReducer.js");\n\n\n\n/* harmony default export */ __webpack_exports__["a"] = (Object(redux__WEBPACK_IMPORTED_MODULE_0__[/* combineReducers */ "b"])({\n  globalState: _appStateReducer__WEBPACK_IMPORTED_MODULE_1__[/* appStateReducer */ "a"],\n  booksData: _booksDataReducer__WEBPACK_IMPORTED_MODULE_2__[/* booksDataReducer */ "a"]\n}));\n\n//# sourceURL=webpack:///./assets/js/reducers/allReducers.js?');
    },
    "./assets/js/reducers/appStateReducer.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return appStateReducer; });\nconst initialState = {\n  myList: [],\n  openInfoBook: {},\n  popupOpen: false,\n  listOpen: false\n};\nlet newState;\nlet myList;\nconst appStateReducer = function appStateReducer() {\n  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;\n  let action = arguments.length > 1 ? arguments[1] : undefined;\n\n  switch (action.type) {\n    case 'ADD_BOOK':\n      myList = [...state.myList, action.payload];\n      newState = Object.assign({}, state, {\n        myList: myList\n      });\n      return newState;\n      break;\n\n    case 'REMOVE_BOOK':\n      myList = state.myList.filter(book => book !== action.payload);\n      newState = Object.assign({}, state, {\n        myList: myList\n      });\n      return newState;\n      break;\n\n    case 'OPEN_INFO_BOOK':\n      newState = Object.assign({}, state, {\n        openInfoBook: action.payload,\n        popupOpen: true\n      });\n      console.log('NEW STATE');\n      console.log(newState);\n      return newState;\n      break;\n\n    case 'CLOSE_INFO_BOOK':\n      newState = Object.assign({}, state, {\n        popupOpen: false\n      });\n      return newState;\n      break;\n\n    case 'OPEN_MY_LIST':\n      newState = Object.assign({}, state, {\n        listOpen: true\n      });\n      console.log('OPEN LIST');\n      console.log(newState);\n      return newState;\n      break;\n\n    case 'CLOSE_MY_LIST':\n      newState = Object.assign({}, state, {\n        listOpen: false\n      });\n      return newState;\n      break;\n\n    default:\n      return state;\n      break;\n  }\n};\n\n//# sourceURL=webpack:///./assets/js/reducers/appStateReducer.js?");
    },
    "./assets/js/reducers/booksDataReducer.js": function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        eval("/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"a\", function() { return booksDataReducer; });\nconst booksDataReducer = () => {\n  return [{\n    id: 1,\n    title: 'Dragon Ball Z',\n    author: 'Akira Toriyama',\n    category: 'Manga',\n    published: 1984,\n    coverURL: 'https://images-na.ssl-images-amazon.com/images/I/81zhvsP+fGL.jpg',\n    review: 'Dragon Ball introduces a young monkey-tailed boy named Goku (a wry update of the classic Chinese \"Monkey King\" legend), whose quiet life changes when he meets a girl named Bulma who is on a quest to collect seven \"Dragon Balls.\" If she gathers them all, an incredibly powerful dragon will appear and grant her one wish. But the precious orbs are scattered all over the world, and Bulma could use the help of a certain super-strong boy.'\n  }, {\n    id: 2,\n    title: 'Akira',\n    author: 'Katsuhiro Otomo',\n    category: 'Manga',\n    published: 1982,\n    coverURL: 'https://media.kitsu.io/manga/poster_images/1500/large.jpg?1453082671',\n    review: 'Welcome to Neo-Tokyo, built on the ashes of a Tokyo annihilated by a blast of unknown origin that triggered World War III. The lives of two streetwise teenage friends, Tetsuo and Kaneda, change forever when paranormal abilities begin to waken in Tetsuo, making him a target for a shadowy agency that will stop at nothing to prevent another catastrophe like the one that leveled Tokyo. At the core of the agency’s motivation is a raw, all-consuming fear of an unthinkable, monstrous power known only as Akira.'\n  }, {\n    id: 3,\n    title: 'Inuyasha',\n    author: 'Rumiko Takahashi',\n    category: 'Manga',\n    published: 1996,\n    coverURL: 'https://images-na.ssl-images-amazon.com/images/I/51R6ViVa3ML._SX335_BO1,204,203,200_.jpg',\n    review: \"After falling into an old well and into ancient Japan, Kagome discovers that her destiny is linked to the dog-like half demon called Inuyasha! As Kagome learns more about her connection to the past and to Inuyasha, she comes into conflict with the terrible demons that are drawn to the Shikon Jewel, including Inuyasha's own half brother, Sesshomaru.\"\n  }, {\n    id: 4,\n    title: 'Naruto',\n    author: 'Masashi Kishimoto',\n    category: 'Manga',\n    published: 1999,\n    coverURL: 'https://prodimage.images-bn.com/pimages/9781569319000_p0_v1_s550x406.jpg',\n    review: 'Dragon Ball introduces a young monkey-tailed boy named Goku (a wry update of the classic Chinese \"Monkey King\" legend), whose quiet life changes when he meets a girl named Bulma who is on a quest to collect seven \"Dragon Balls.\" If she gathers them all, an incredibly powerful dragon will appear and grant her one wish. But the precious orbs are scattered all over the world, and Bulma could use the help of a certain super-strong boy.'\n  }, {\n    id: 5,\n    title: 'Attack On Titan',\n    author: 'Hajime Isayama',\n    category: 'Manga',\n    published: 2009,\n    coverURL: 'https://images-na.ssl-images-amazon.com/images/I/51ywmxi7JVL._SX331_BO1,204,203,200_.jpg',\n    review: 'A century ago, the grotesque giants known as Titans appeared and consumed all but a few thousand humans. The survivors took refuge behind giant walls. Today, the threat of the Titans is a distant memory, and a boy named Eren yearns to explore the world beyond Wall Maria. But what began as a childish dream will become an all-too-real nightmare when the Titans return and humanity is once again on the brink of extinction'\n  }, {\n    id: 6,\n    title: 'My Hero Academia',\n    author: 'Kohei Horikoshi',\n    category: 'Manga',\n    published: 2016,\n    coverURL: 'https://vignette.wikia.nocookie.net/bokunoheroacademia/images/b/ba/US_Volume_1.png/revision/latest?cb=20180827060623',\n    review: \"In a world where those with powers are known as Quirks, Izuku Midoriya has aspirations to one day become a hero but there's a catch -- he isn't a Quirk. After a tragic accident involving his friend Katuski Bakugo; Midoriya is the only one to have stepped forward to help protect Bakugo from a villain, because of his acts, he is given a gift by the world's greatest hero, All Might. Now, Midoriya attends U.A. School--a school that cultivates the next generation of superheroes.\"\n  }];\n};\n\n//# sourceURL=webpack:///./assets/js/reducers/booksDataReducer.js?");
    }
});