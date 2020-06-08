require("source-map-support").install();
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("library", [], factory);
	else if(typeof exports === 'object')
		exports["library"] = factory();
	else
		root["library"] = factory();
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  sql: {
    queryFormat: /:([\w_.()]+)/g,
    stringifyObjects: false,
    timezone: false
  },
  log: {
    level: 'info',
    // 'fatal', 'error', 'warn', 'info', 'debug', 'trace'
    traceLinenumber: true,
    timeFormat: 'YYYY-MM-DD A hh:mm:ss',
    pretty: true,
    map: {
      mybatis3: 'fatal',
      '*': 'trace'
    }
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "@babel/runtime/helpers/defineProperty");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "@babel/runtime/helpers/asyncToGenerator");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "@babel/runtime/helpers/classCallCheck");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "@babel/runtime/helpers/createClass");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! xml2js */ "xml2js");
/* harmony import */ var xml2js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(xml2js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var node_eval__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! node-eval */ "node-eval");
/* harmony import */ var node_eval__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(node_eval__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! bluebird */ "bluebird");
/* harmony import */ var bluebird__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(bluebird__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./config */ "./src/config/index.js");
/* harmony import */ var sqlstring__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sqlstring */ "sqlstring");
/* harmony import */ var sqlstring__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sqlstring__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_12__);












 // import $log from './log'

var parser = new xml2js__WEBPACK_IMPORTED_MODULE_5___default.a.Parser({
  trim: true,
  normalize: true,
  preserveChildrenOrder: true,
  explicitChildren: true,
  explicitCharkey: true,
  charsAsChildren: true
}); // const log = $log.getInstance('mybatis3')

var Mybatis3 = /*#__PURE__*/function () {
  function Mybatis3() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Mybatis3);

    this.tablesRaw = [];
    this.tables = [];
    this.lastQuery = {};
    this.sqlData = {}; // xml raw query

    this.references = []; // include가 정의된 array
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Mybatis3, [{
    key: "setConnection",
    value: function setConnection(pool) {
      this.pool = pool;
      this.pool.getConnectionAsync = bluebird__WEBPACK_IMPORTED_MODULE_9___default.a.promisify(this.pool.getConnection);
    }
  }, {
    key: "getConnection",
    value: function getConnection() {
      if (Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(this.pool)) {
        return this.pool();
      } else {
        return this.pool;
      }
    }
  }, {
    key: "fnModel",
    value: function fnModel(name, conn) {
      var ctx = {};
      var table = this.getQuery(name);
      var self = this;
      Object(lodash__WEBPACK_IMPORTED_MODULE_8__["forEach"])(table, function (fn, key) {
        if (key === 'lastQuery') {
          Object.defineProperty(ctx, key, {
            get: function get() {
              return self.lastQuery[name];
            }
          });
        } else {
          ctx[key] = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["partialRight"])(fn, conn);
        }
      });
      return ctx;
    }
  }, {
    key: "transaction",
    value: function () {
      var _transaction = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(execQuery) {
        var connection, rst;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.pool.getConnectionAsync();

              case 3:
                connection = _context.sent;
                connection.table = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["partialRight"])(this.fnModel, connection).bind(this);
                _context.next = 7;
                return connection.beginTransaction();

              case 7:
                _context.next = 9;
                return execQuery(connection);

              case 9:
                rst = _context.sent;
                _context.next = 12;
                return connection.commit();

              case 12:
                connection.release();
                _context.next = 21;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](0);
                _context.next = 19;
                return connection.rollback();

              case 19:
                connection.release();
                throw _context.t0;

              case 21:
                return _context.abrupt("return", rst);

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 15]]);
      }));

      function transaction(_x) {
        return _transaction.apply(this, arguments);
      }

      return transaction;
    }() // loadQuery(path, idx) {

  }, {
    key: "loadQuery",
    value: function loadQuery(tableName, path, xmlFilenames) {
      var _this = this;

      Object(lodash__WEBPACK_IMPORTED_MODULE_8__["forEach"])(xmlFilenames, function (filename, idx) {
        _this.sqlData = idx === 0 ? {} : _this.sqlData;
        var ext = Object(path__WEBPACK_IMPORTED_MODULE_12__["extname"])(filename);
        var dir = ext ? Object(path__WEBPACK_IMPORTED_MODULE_12__["join"])(path, filename) : Object(path__WEBPACK_IMPORTED_MODULE_12__["join"])(path, filename + '.xml');
        var xml = Object(fs__WEBPACK_IMPORTED_MODULE_7__["readFileSync"])(dir, 'utf-8'); // log.debug('xmls', xml)

        parser.parseString(xml, function (err, data) {
          if (err) {
            return console.error(err.stack || err);
          }

          var jsonData = data.query;
          _this.references = jsonData.sql;
          var commands = ['select', 'update', 'insert', 'delete'];
          Object(lodash__WEBPACK_IMPORTED_MODULE_8__["chain"])(commands).map(function (cmd) {
            return jsonData[cmd] || [];
          }).flatten().map(function (item) {
            return _this.sqlData[item.$.id] = item;
          }).value();
        });
      });
      this.tablesRaw[tableName] = this.sqlData;
      delete this.tables[tableName]; // log.debug(this.sqlData)
    }
  }, {
    key: "table",
    value: function table(tableName, dir, xmls) {
      if (xmls) {
        this.loadQuery(tableName, dir, xmls);
      } else {
        return this.getQuery(tableName);
      }
    }
  }, {
    key: "model",
    value: function model() {}
    /**
     * query에 대한 function으로 반환 받기
     */

  }, {
    key: "getQuery",
    value: function getQuery(tableName) {
      var _this2 = this;

      if (this.tables[tableName]) return this.tables[tableName];
      var self = this;
      var sqlData = this.tablesRaw[tableName];
      var rst = {
        get lastQuery() {
          return self.lastQuery[tableName];
        }

      };
      Object(lodash__WEBPACK_IMPORTED_MODULE_8__["forEach"])(sqlData, function (sql, key) {
        rst[key] = /*#__PURE__*/function () {
          var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(params, conn) {
            var qry, _conn;

            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return _this2.process(sqlData[key], params).then(function (xml) {
                      return _this2.processVariable(xml._, params);
                    })["catch"](function (err) {
                      return console.error(err.stack);
                    });

                  case 2:
                    qry = _context2.sent;
                    self.lastQuery[tableName] = qry;

                    if (!conn) {
                      _context2.next = 8;
                      break;
                    }

                    return _context2.abrupt("return", conn.query(qry)["finally"](function () {
                      return conn.release();
                    }));

                  case 8:
                    _conn = _this2.getConnection();

                    if (!_conn) {
                      _context2.next = 13;
                      break;
                    }

                    return _context2.abrupt("return", _conn.query(qry));

                  case 13:
                    return _context2.abrupt("return", qry);

                  case 14:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          return function (_x2, _x3) {
            return _ref.apply(this, arguments);
          };
        }();
      });
      this.tables[tableName] = rst;
      return rst;
    }
  }, {
    key: "process",
    value: function () {
      var _process = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(xml, params) {
        var _this3 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", bluebird__WEBPACK_IMPORTED_MODULE_9___default.a.resolve(xml).then( /*#__PURE__*/function () {
                  var _ref2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(xml) {
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            // process xml.$$
                            xml._ = '';
                            _context4.next = 3;
                            return bluebird__WEBPACK_IMPORTED_MODULE_9___default.a.each(xml.$$, /*#__PURE__*/function () {
                              var _ref3 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(item) {
                                var proc;
                                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
                                  while (1) {
                                    switch (_context3.prev = _context3.next) {
                                      case 0:
                                        if (!(item['#name'] === '__text__')) {
                                          _context3.next = 3;
                                          break;
                                        }

                                        _context3.next = 6;
                                        break;

                                      case 3:
                                        proc = "process".concat(_this3.capitalizeFirstLetter(item['#name']));
                                        _context3.next = 6;
                                        return _this3[proc](item, params);

                                      case 6:
                                      case "end":
                                        return _context3.stop();
                                    }
                                  }
                                }, _callee3);
                              }));

                              return function (_x7) {
                                return _ref3.apply(this, arguments);
                              };
                            }());

                          case 3:
                            // xml -> xml.$$ -> xml._ build
                            _this3.merge_(xml); // log.debug(xml, 'processed')
                            // log.debug(xml['$$'][1], 'processed')


                            return _context4.abrupt("return", xml);

                          case 5:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4);
                  }));

                  return function (_x6) {
                    return _ref2.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }));

      function process(_x4, _x5) {
        return _process.apply(this, arguments);
      }

      return process;
    }()
  }, {
    key: "processInclude",
    value: function () {
      var _processInclude = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(item, params) {
        var id, t;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                // log.info('--- process include')
                id = item.$.refid;
                t = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["find"])(this.references, {
                  $: {
                    id: id
                  }
                });

                if (t) {
                  _context6.next = 4;
                  break;
                }

                throw new Error("There is no include id: ".concat(id));

              case 4:
                _context6.next = 6;
                return this.processDeep(t, params);

              case 6:
                item._ = t._;

              case 7:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function processInclude(_x8, _x9) {
        return _processInclude.apply(this, arguments);
      }

      return processInclude;
    }()
  }, {
    key: "processDeep",
    value: function () {
      var _processDeep = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7(xml, params) {
        var keys;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                // log.info('--- process deep')
                // log.debug(xml)
                keys = Object.keys(xml).filter(function (key) {
                  return !/_|\${1,2}|#name/.test(key);
                });

                if (!(keys.length !== 0)) {
                  _context7.next = 4;
                  break;
                }

                _context7.next = 4;
                return this.process(xml, params);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function processDeep(_x10, _x11) {
        return _processDeep.apply(this, arguments);
      }

      return processDeep;
    }()
  }, {
    key: "processIf",
    value: function () {
      var _processIf = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee8(item, params) {
        var test;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return this.processVariable(item.$.test, params).then(this.changeAndOr);

              case 2:
                test = _context8.sent;

                if (!node_eval__WEBPACK_IMPORTED_MODULE_6___default()(test)) {
                  _context8.next = 11;
                  break;
                }

                _context8.next = 6;
                return this.processDeep(item, params);

              case 6:
                _context8.next = 8;
                return this.processVariable(item._, params);

              case 8:
                item._ = _context8.sent;
                _context8.next = 12;
                break;

              case 11:
                item._ = '';

              case 12:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      function processIf(_x12, _x13) {
        return _processIf.apply(this, arguments);
      }

      return processIf;
    }()
  }, {
    key: "processChoose",
    value: function () {
      var _processChoose = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee10(item, params) {
        var _this4 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return bluebird__WEBPACK_IMPORTED_MODULE_9___default.a.each(item.$$, /*#__PURE__*/function () {
                  var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee9(_case) {
                    var testStr, test;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee9$(_context9) {
                      while (1) {
                        switch (_context9.prev = _context9.next) {
                          case 0:
                            // log.debug(_case, '_case')
                            testStr = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(_case, '$.test');

                            if (!testStr) {
                              _context9.next = 15;
                              break;
                            }

                            _context9.next = 4;
                            return _this4.processVariable(testStr, params).then(_this4.changeAndOr);

                          case 4:
                            test = _context9.sent;

                            if (!node_eval__WEBPACK_IMPORTED_MODULE_6___default()(test)) {
                              _context9.next = 14;
                              break;
                            }

                            _context9.next = 8;
                            return _this4.processDeep(_case, params);

                          case 8:
                            _context9.next = 10;
                            return _this4.processVariable(_case._, params);

                          case 10:
                            _case._ = _context9.sent;
                            throw new bluebird__WEBPACK_IMPORTED_MODULE_9___default.a.CancellationError('matched');

                          case 14:
                            _case._ = '';

                          case 15:
                          case "end":
                            return _context9.stop();
                        }
                      }
                    }, _callee9);
                  }));

                  return function (_x16) {
                    return _ref4.apply(this, arguments);
                  };
                }())["catch"](bluebird__WEBPACK_IMPORTED_MODULE_9___default.a.CancellationError, function () {
                  return '';
                });

              case 2:
                this.merge_(item, true); // log.debug(item, 'item')

              case 3:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      function processChoose(_x14, _x15) {
        return _processChoose.apply(this, arguments);
      }

      return processChoose;
    }()
  }, {
    key: "processTrim",
    value: function () {
      var _processTrim = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee12(item, params) {
        var _this5 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return bluebird__WEBPACK_IMPORTED_MODULE_9___default.a.each(item.$$, /*#__PURE__*/function () {
                  var _ref5 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee11(_case) {
                    var testStr, test;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee11$(_context11) {
                      while (1) {
                        switch (_context11.prev = _context11.next) {
                          case 0:
                            // log.debug(_case, '_case')
                            testStr = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(_case, '$.test');

                            if (!testStr) {
                              _context11.next = 14;
                              break;
                            }

                            _context11.next = 4;
                            return _this5.processVariable(testStr, params).then(_this5.changeAndOr);

                          case 4:
                            test = _context11.sent;

                            if (!node_eval__WEBPACK_IMPORTED_MODULE_6___default()(test)) {
                              _context11.next = 13;
                              break;
                            }

                            _context11.next = 8;
                            return _this5.processDeep(_case, params);

                          case 8:
                            _context11.next = 10;
                            return _this5.processVariable(_case._, params);

                          case 10:
                            _case._ = _context11.sent;
                            _context11.next = 14;
                            break;

                          case 13:
                            _case._ = '';

                          case 14:
                          case "end":
                            return _context11.stop();
                        }
                      }
                    }, _callee11);
                  }));

                  return function (_x19) {
                    return _ref5.apply(this, arguments);
                  };
                }());

              case 2:
                this.merge_(item);
                this.processFix(item, item);

              case 4:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function processTrim(_x17, _x18) {
        return _processTrim.apply(this, arguments);
      }

      return processTrim;
    }()
  }, {
    key: "processWhere",
    value: function () {
      var _processWhere = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee14(item, params) {
        var _this6 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return bluebird__WEBPACK_IMPORTED_MODULE_9___default.a.each(item.$$, /*#__PURE__*/function () {
                  var _ref6 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee13(_case) {
                    var testStr, test;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee13$(_context13) {
                      while (1) {
                        switch (_context13.prev = _context13.next) {
                          case 0:
                            // log.debug(_case, '_case')
                            testStr = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(_case, '$.test');

                            if (!testStr) {
                              _context13.next = 14;
                              break;
                            }

                            _context13.next = 4;
                            return _this6.processVariable(testStr, params).then(_this6.changeAndOr);

                          case 4:
                            test = _context13.sent;

                            if (!node_eval__WEBPACK_IMPORTED_MODULE_6___default()(test)) {
                              _context13.next = 13;
                              break;
                            }

                            _context13.next = 8;
                            return _this6.processDeep(_case, params);

                          case 8:
                            _context13.next = 10;
                            return _this6.processVariable(_case._, params);

                          case 10:
                            _case._ = _context13.sent;
                            _context13.next = 14;
                            break;

                          case 13:
                            _case._ = '';

                          case 14:
                          case "end":
                            return _context13.stop();
                        }
                      }
                    }, _callee13);
                  }));

                  return function (_x22) {
                    return _ref6.apply(this, arguments);
                  };
                }());

              case 2:
                this.merge_(item);
                this.processFix(item, {
                  $: {
                    prefixOverrides: 'and |or ',
                    prefix: 'WHERE'
                  }
                }); // log.debug(item, 'item')

              case 4:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      function processWhere(_x20, _x21) {
        return _processWhere.apply(this, arguments);
      }

      return processWhere;
    }()
  }, {
    key: "processSet",
    value: function () {
      var _processSet = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee16(item, params) {
        var _this7 = this;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return bluebird__WEBPACK_IMPORTED_MODULE_9___default.a.each(item.$$, /*#__PURE__*/function () {
                  var _ref7 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee15(_case) {
                    var testStr, test;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee15$(_context15) {
                      while (1) {
                        switch (_context15.prev = _context15.next) {
                          case 0:
                            // log.debug(_case, '_case')
                            testStr = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(_case, '$.test');

                            if (!testStr) {
                              _context15.next = 14;
                              break;
                            }

                            _context15.next = 4;
                            return _this7.processVariable(testStr, params).then(_this7.changeAndOr);

                          case 4:
                            test = _context15.sent;

                            if (!node_eval__WEBPACK_IMPORTED_MODULE_6___default()(test)) {
                              _context15.next = 13;
                              break;
                            }

                            _context15.next = 8;
                            return _this7.processDeep(_case, params);

                          case 8:
                            _context15.next = 10;
                            return _this7.processVariable(_case._, params);

                          case 10:
                            _case._ = _context15.sent;
                            _context15.next = 14;
                            break;

                          case 13:
                            _case._ = '';

                          case 14:
                          case "end":
                            return _context15.stop();
                        }
                      }
                    }, _callee15);
                  }));

                  return function (_x25) {
                    return _ref7.apply(this, arguments);
                  };
                }());

              case 2:
                this.merge_(item);
                this.processFix(item, {
                  $: {
                    suffixOverrides: ',',
                    prefix: 'SET'
                  }
                }); // log.debug(item, 'item')

              case 4:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      function processSet(_x23, _x24) {
        return _processSet.apply(this, arguments);
      }

      return processSet;
    }()
  }, {
    key: "processForeach",
    value: function () {
      var _processForeach = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee18(item, params) {
        var _this8 = this;

        var collection, processedArr;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.next = 2;
                return this.processDeep(item, params);

              case 2:
                collection = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(params, item.$.collection) || [];
                processedArr = []; // log.debug(collection, 'collection')

                _context18.next = 6;
                return bluebird__WEBPACK_IMPORTED_MODULE_9___default.a.each(collection, /*#__PURE__*/function () {
                  var _ref8 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee17(col, idx) {
                    var _this8$processVariabl;

                    var qry;
                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee17$(_context17) {
                      while (1) {
                        switch (_context17.prev = _context17.next) {
                          case 0:
                            _context17.next = 2;
                            return _this8.processVariable(item._, (_this8$processVariabl = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_this8$processVariabl, item.$.item, col), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_this8$processVariabl, item.$.index, idx), _this8$processVariabl));

                          case 2:
                            qry = _context17.sent;
                            processedArr.push(qry);

                          case 4:
                          case "end":
                            return _context17.stop();
                        }
                      }
                    }, _callee17);
                  }));

                  return function (_x28, _x29) {
                    return _ref8.apply(this, arguments);
                  };
                }());

              case 6:
                item._ = processedArr.join(item.$.separator);
                item.$.suffixOverrides = item.$.separator;
                item.$.prefix = item.$.open;
                item.$.suffix = item.$.close;
                this.processFix(item, item); // log.debug(item, 'item')

              case 11:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      function processForeach(_x26, _x27) {
        return _processForeach.apply(this, arguments);
      }

      return processForeach;
    }()
  }, {
    key: "processBind",
    value: function () {
      var _processBind = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee19(item, params) {
        var s;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _context19.next = 2;
                return this.processVariable(item.$.value, params).then(this.changeAndOr);

              case 2:
                s = _context19.sent;
                params[item.$.name] = node_eval__WEBPACK_IMPORTED_MODULE_6___default()(s);

              case 4:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      function processBind(_x30, _x31) {
        return _processBind.apply(this, arguments);
      }

      return processBind;
    }()
  }, {
    key: "processVariable",
    value: function () {
      var _processVariable = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee20(qry, params) {
        var rst, escape, reg;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                if (!params) {
                  rst = qry;
                }

                escape = sqlstring__WEBPACK_IMPORTED_MODULE_11___default.a.escape;
                reg = _config__WEBPACK_IMPORTED_MODULE_10__["default"].sql.queryFormat ? new RegExp(_config__WEBPACK_IMPORTED_MODULE_10__["default"].sql.queryFormat, 'g') : /#{([\w_.]+)}/g;
                rst = qry.replace(/\)/g, ' )').replace(/\( \)/g, '()').replace(reg, function (txt, key) {
                  key = key.replace(/\(\)/g, '');
                  var val = Object(lodash__WEBPACK_IMPORTED_MODULE_8__["get"])(params, key);

                  if (Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isFunction"])(val)) {
                    val = val();
                  } else if (Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isObject"])(val) || Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isArray"])(val)) {
                    val = true;
                  }

                  return escape(val, _config__WEBPACK_IMPORTED_MODULE_10__["default"].sql.stringifyObjects, _config__WEBPACK_IMPORTED_MODULE_10__["default"].sql.timezone);
                });
                return _context20.abrupt("return", rst.replace(/^\s+|\s+$/g, '').replace(/\s+/g, ' ').replace(/NULL/g, 'undefined'));

              case 5:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20);
      }));

      function processVariable(_x32, _x33) {
        return _processVariable.apply(this, arguments);
      }

      return processVariable;
    }()
  }, {
    key: "changeAndOr",
    value: function () {
      var _changeAndOr = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee21(str) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                return _context21.abrupt("return", str.replace(/ and /gi, ' && ').replace(/ or /gi, ' || '));

              case 1:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21);
      }));

      function changeAndOr(_x34) {
        return _changeAndOr.apply(this, arguments);
      }

      return changeAndOr;
    }()
  }, {
    key: "processFix",
    value: function processFix(item, xml) {
      if (xml.$.prefixOverrides) {
        var reg = new RegExp("^".concat(xml.$.prefixOverrides), 'gi');
        item._ = item._.replace(reg, '');
      } // log.debug('fix', item._)


      if (xml.$.suffixOverrides) {
        var _reg = new RegExp("".concat(xml.$.suffixOverrides, "$"), 'gi');

        item._ = item._.replace(_reg, '');
      } // log.debug('fix', '|' + item._ + '|')


      if (!Object(lodash__WEBPACK_IMPORTED_MODULE_8__["isEmpty"])(item._)) {
        item._ = "".concat(xml.$.prefix || '', " ").concat(item._, " ").concat(xml.$.suffix || '');
      } // log.debug('fix', item._)

    }
  }, {
    key: "capitalizeFirstLetter",
    value: function capitalizeFirstLetter(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
  }, {
    key: "merge_",
    value: function merge_(xml, choose) {
      var processedArr = [];
      Object(lodash__WEBPACK_IMPORTED_MODULE_8__["forEach"])(xml.$$, function (item) {
        if (item._) {
          processedArr.push(item._);

          if (choose) {
            return false;
          }
        } // item._ && processedArr.push(item._)

      });
      xml._ = processedArr.join(' ');
    }
  }]);

  return Mybatis3;
}();

/* harmony default export */ __webpack_exports__["default"] = (new Mybatis3());

/***/ }),

/***/ "@babel/runtime/helpers/asyncToGenerator":
/*!**********************************************************!*\
  !*** external "@babel/runtime/helpers/asyncToGenerator" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ "@babel/runtime/helpers/classCallCheck":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/classCallCheck" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),

/***/ "@babel/runtime/helpers/createClass":
/*!*****************************************************!*\
  !*** external "@babel/runtime/helpers/createClass" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),

/***/ "@babel/runtime/helpers/defineProperty":
/*!********************************************************!*\
  !*** external "@babel/runtime/helpers/defineProperty" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "bluebird":
/*!***************************!*\
  !*** external "bluebird" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bluebird");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "node-eval":
/*!****************************!*\
  !*** external "node-eval" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("node-eval");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "sqlstring":
/*!****************************!*\
  !*** external "sqlstring" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sqlstring");

/***/ }),

/***/ "xml2js":
/*!*************************!*\
  !*** external "xml2js" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("xml2js");

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIndlYnBhY2s6Ly9saWJyYXJ5L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvY29uZmlnL2luZGV4LmpzIiwid2VicGFjazovL2xpYnJhcnkvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbGlicmFyeS9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiIiwid2VicGFjazovL2xpYnJhcnkvZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIiLCJ3ZWJwYWNrOi8vbGlicmFyeS9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIiIsIndlYnBhY2s6Ly9saWJyYXJ5L2V4dGVybmFsIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiIiwid2VicGFjazovL2xpYnJhcnkvZXh0ZXJuYWwgXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiIiwid2VicGFjazovL2xpYnJhcnkvZXh0ZXJuYWwgXCJibHVlYmlyZFwiIiwid2VicGFjazovL2xpYnJhcnkvZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovL2xpYnJhcnkvZXh0ZXJuYWwgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly9saWJyYXJ5L2V4dGVybmFsIFwibm9kZS1ldmFsXCIiLCJ3ZWJwYWNrOi8vbGlicmFyeS9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly9saWJyYXJ5L2V4dGVybmFsIFwic3Fsc3RyaW5nXCIiLCJ3ZWJwYWNrOi8vbGlicmFyeS9leHRlcm5hbCBcInhtbDJqc1wiIl0sIm5hbWVzIjpbInNxbCIsInF1ZXJ5Rm9ybWF0Iiwic3RyaW5naWZ5T2JqZWN0cyIsInRpbWV6b25lIiwibG9nIiwibGV2ZWwiLCJ0cmFjZUxpbmVudW1iZXIiLCJ0aW1lRm9ybWF0IiwicHJldHR5IiwibWFwIiwibXliYXRpczMiLCJwYXJzZXIiLCJ4bWwyanMiLCJQYXJzZXIiLCJ0cmltIiwibm9ybWFsaXplIiwicHJlc2VydmVDaGlsZHJlbk9yZGVyIiwiZXhwbGljaXRDaGlsZHJlbiIsImV4cGxpY2l0Q2hhcmtleSIsImNoYXJzQXNDaGlsZHJlbiIsIk15YmF0aXMzIiwidGFibGVzUmF3IiwidGFibGVzIiwibGFzdFF1ZXJ5Iiwic3FsRGF0YSIsInJlZmVyZW5jZXMiLCJwb29sIiwiZ2V0Q29ubmVjdGlvbkFzeW5jIiwiUHJvbWlzZSIsInByb21pc2lmeSIsImdldENvbm5lY3Rpb24iLCJpc0Z1bmN0aW9uIiwibmFtZSIsImNvbm4iLCJjdHgiLCJ0YWJsZSIsImdldFF1ZXJ5Iiwic2VsZiIsImZvckVhY2giLCJmbiIsImtleSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0IiwicGFydGlhbFJpZ2h0IiwiZXhlY1F1ZXJ5IiwiY29ubmVjdGlvbiIsImZuTW9kZWwiLCJiaW5kIiwiYmVnaW5UcmFuc2FjdGlvbiIsInJzdCIsImNvbW1pdCIsInJlbGVhc2UiLCJyb2xsYmFjayIsInRhYmxlTmFtZSIsInBhdGgiLCJ4bWxGaWxlbmFtZXMiLCJmaWxlbmFtZSIsImlkeCIsImV4dCIsImV4dG5hbWUiLCJkaXIiLCJqb2luIiwieG1sIiwicmVhZEZpbGVTeW5jIiwicGFyc2VTdHJpbmciLCJlcnIiLCJkYXRhIiwiY29uc29sZSIsImVycm9yIiwic3RhY2siLCJqc29uRGF0YSIsInF1ZXJ5IiwiY29tbWFuZHMiLCJjaGFpbiIsImNtZCIsImZsYXR0ZW4iLCJpdGVtIiwiJCIsImlkIiwidmFsdWUiLCJ4bWxzIiwibG9hZFF1ZXJ5IiwicGFyYW1zIiwicHJvY2VzcyIsInRoZW4iLCJwcm9jZXNzVmFyaWFibGUiLCJfIiwicXJ5IiwiX2Nvbm4iLCJyZXNvbHZlIiwiZWFjaCIsIiQkIiwicHJvYyIsImNhcGl0YWxpemVGaXJzdExldHRlciIsIm1lcmdlXyIsInJlZmlkIiwidCIsImZpbmQiLCJFcnJvciIsInByb2Nlc3NEZWVwIiwia2V5cyIsImZpbHRlciIsInRlc3QiLCJsZW5ndGgiLCJjaGFuZ2VBbmRPciIsIm5vZGVFdmFsIiwiX2Nhc2UiLCJ0ZXN0U3RyIiwiQ2FuY2VsbGF0aW9uRXJyb3IiLCJwcm9jZXNzRml4IiwicHJlZml4T3ZlcnJpZGVzIiwicHJlZml4Iiwic3VmZml4T3ZlcnJpZGVzIiwiY29sbGVjdGlvbiIsInByb2Nlc3NlZEFyciIsImNvbCIsImluZGV4IiwicHVzaCIsInNlcGFyYXRvciIsIm9wZW4iLCJzdWZmaXgiLCJjbG9zZSIsInMiLCJlc2NhcGUiLCJzcWxzdHJpbmciLCJyZWciLCJjb25maWciLCJSZWdFeHAiLCJyZXBsYWNlIiwidHh0IiwidmFsIiwiaXNPYmplY3QiLCJpc0FycmF5Iiwic3RyIiwiaXNFbXB0eSIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic2xpY2UiLCJjaG9vc2UiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztRQ1ZBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFlO0FBQ2JBLEtBQUcsRUFBRTtBQUNIQyxlQUFXLEVBQUUsZUFEVjtBQUVIQyxvQkFBZ0IsRUFBRSxLQUZmO0FBR0hDLFlBQVEsRUFBRTtBQUhQLEdBRFE7QUFNYkMsS0FBRyxFQUFFO0FBQ0hDLFNBQUssRUFBRSxNQURKO0FBQ1k7QUFDZkMsbUJBQWUsRUFBRSxJQUZkO0FBR0hDLGNBQVUsRUFBRSx1QkFIVDtBQUlIQyxVQUFNLEVBQUUsSUFKTDtBQUtIQyxPQUFHLEVBQUU7QUFDSEMsY0FBUSxFQUFFLE9BRFA7QUFFSCxXQUFLO0FBRkY7QUFMRjtBQU5RLENBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0EsSUFBTUMsTUFBTSxHQUFHLElBQUlDLDZDQUFNLENBQUNDLE1BQVgsQ0FBa0I7QUFDL0JDLE1BQUksRUFBRSxJQUR5QjtBQUUvQkMsV0FBUyxFQUFFLElBRm9CO0FBRy9CQyx1QkFBcUIsRUFBRSxJQUhRO0FBSS9CQyxrQkFBZ0IsRUFBRSxJQUphO0FBSy9CQyxpQkFBZSxFQUFFLElBTGM7QUFNL0JDLGlCQUFlLEVBQUU7QUFOYyxDQUFsQixDQUFmLEMsQ0FRQTs7SUFFTUMsUTtBQUNKLHNCQUFjO0FBQUE7O0FBQ1osU0FBS0MsU0FBTCxHQUFpQixFQUFqQjtBQUNBLFNBQUtDLE1BQUwsR0FBYyxFQUFkO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixFQUFqQjtBQUNBLFNBQUtDLE9BQUwsR0FBZSxFQUFmLENBSlksQ0FJTTs7QUFDbEIsU0FBS0MsVUFBTCxHQUFrQixFQUFsQixDQUxZLENBS1M7QUFDdEI7Ozs7a0NBRWFDLEksRUFBTTtBQUNsQixXQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxXQUFLQSxJQUFMLENBQVVDLGtCQUFWLEdBQStCQywrQ0FBTyxDQUFDQyxTQUFSLENBQWtCLEtBQUtILElBQUwsQ0FBVUksYUFBNUIsQ0FBL0I7QUFDRDs7O29DQUVlO0FBQ2QsVUFBSUMseURBQVUsQ0FBQyxLQUFLTCxJQUFOLENBQWQsRUFBMkI7QUFDekIsZUFBTyxLQUFLQSxJQUFMLEVBQVA7QUFDRCxPQUZELE1BRU87QUFDTCxlQUFPLEtBQUtBLElBQVo7QUFDRDtBQUNGOzs7NEJBRU9NLEksRUFBTUMsSSxFQUFNO0FBQ2xCLFVBQU1DLEdBQUcsR0FBRyxFQUFaO0FBQ0EsVUFBTUMsS0FBSyxHQUFHLEtBQUtDLFFBQUwsQ0FBY0osSUFBZCxDQUFkO0FBQ0EsVUFBTUssSUFBSSxHQUFHLElBQWI7QUFDQUMsNERBQU8sQ0FBQ0gsS0FBRCxFQUFRLFVBQUNJLEVBQUQsRUFBS0MsR0FBTCxFQUFhO0FBQzFCLFlBQUlBLEdBQUcsS0FBSyxXQUFaLEVBQXlCO0FBQ3ZCQyxnQkFBTSxDQUFDQyxjQUFQLENBQXNCUixHQUF0QixFQUEyQk0sR0FBM0IsRUFBZ0M7QUFDOUJHLGVBQUcsRUFBRTtBQUFBLHFCQUFNTixJQUFJLENBQUNkLFNBQUwsQ0FBZVMsSUFBZixDQUFOO0FBQUE7QUFEeUIsV0FBaEM7QUFHRCxTQUpELE1BSU87QUFDTEUsYUFBRyxDQUFDTSxHQUFELENBQUgsR0FBV0ksMkRBQVksQ0FBQ0wsRUFBRCxFQUFLTixJQUFMLENBQXZCO0FBQ0Q7QUFDRixPQVJNLENBQVA7QUFTQSxhQUFPQyxHQUFQO0FBQ0Q7Ozs7OE1BRWlCVyxTOzs7Ozs7Ozt1QkFHSyxLQUFLbkIsSUFBTCxDQUFVQyxrQkFBVixFOzs7QUFBbkJtQiwwQjtBQUNBQSwwQkFBVSxDQUFDWCxLQUFYLEdBQW1CUywyREFBWSxDQUFDLEtBQUtHLE9BQU4sRUFBZUQsVUFBZixDQUFaLENBQXVDRSxJQUF2QyxDQUE0QyxJQUE1QyxDQUFuQjs7dUJBQ01GLFVBQVUsQ0FBQ0csZ0JBQVgsRTs7Ozt1QkFDTUosU0FBUyxDQUFDQyxVQUFELEM7OztBQUFyQkksbUI7O3VCQUNNSixVQUFVLENBQUNLLE1BQVgsRTs7O0FBQ05MLDBCQUFVLENBQUNNLE9BQVg7Ozs7Ozs7O3VCQUVNTixVQUFVLENBQUNPLFFBQVgsRTs7O0FBQ05QLDBCQUFVLENBQUNNLE9BQVg7Ozs7aURBR0tGLEc7Ozs7Ozs7Ozs7Ozs7OztRQUdUOzs7OzhCQUNVSSxTLEVBQVdDLEksRUFBTUMsWSxFQUFjO0FBQUE7O0FBQ3ZDbEIsNERBQU8sQ0FBQ2tCLFlBQUQsRUFBZSxVQUFDQyxRQUFELEVBQVdDLEdBQVgsRUFBbUI7QUFDdkMsYUFBSSxDQUFDbEMsT0FBTCxHQUFla0MsR0FBRyxLQUFLLENBQVIsR0FBWSxFQUFaLEdBQWlCLEtBQUksQ0FBQ2xDLE9BQXJDO0FBQ0EsWUFBTW1DLEdBQUcsR0FBR0MscURBQU8sQ0FBQ0gsUUFBRCxDQUFuQjtBQUNBLFlBQU1JLEdBQUcsR0FBR0YsR0FBRyxHQUFHRyxrREFBSSxDQUFDUCxJQUFELEVBQU9FLFFBQVAsQ0FBUCxHQUEwQkssa0RBQUksQ0FBQ1AsSUFBRCxFQUFPRSxRQUFRLEdBQUcsTUFBbEIsQ0FBN0M7QUFDQSxZQUFNTSxHQUFHLEdBQUdDLHVEQUFZLENBQUNILEdBQUQsRUFBTSxPQUFOLENBQXhCLENBSnVDLENBS3ZDOztBQUNBbEQsY0FBTSxDQUFDc0QsV0FBUCxDQUFtQkYsR0FBbkIsRUFBd0IsVUFBQ0csR0FBRCxFQUFNQyxJQUFOLEVBQWU7QUFDckMsY0FBSUQsR0FBSixFQUFTO0FBQ1AsbUJBQU9FLE9BQU8sQ0FBQ0MsS0FBUixDQUFjSCxHQUFHLENBQUNJLEtBQUosSUFBYUosR0FBM0IsQ0FBUDtBQUNEOztBQUNELGNBQU1LLFFBQVEsR0FBR0osSUFBSSxDQUFDSyxLQUF0QjtBQUNBLGVBQUksQ0FBQy9DLFVBQUwsR0FBa0I4QyxRQUFRLENBQUN2RSxHQUEzQjtBQUNBLGNBQU15RSxRQUFRLEdBQUcsQ0FBQyxRQUFELEVBQVcsUUFBWCxFQUFxQixRQUFyQixFQUErQixRQUEvQixDQUFqQjtBQUNBQyw4REFBSyxDQUFDRCxRQUFELENBQUwsQ0FDR2hFLEdBREgsQ0FDTyxVQUFBa0UsR0FBRztBQUFBLG1CQUFJSixRQUFRLENBQUNJLEdBQUQsQ0FBUixJQUFpQixFQUFyQjtBQUFBLFdBRFYsRUFFR0MsT0FGSCxHQUdHbkUsR0FISCxDQUdPLFVBQUFvRSxJQUFJO0FBQUEsbUJBQUssS0FBSSxDQUFDckQsT0FBTCxDQUFhcUQsSUFBSSxDQUFDQyxDQUFMLENBQU9DLEVBQXBCLElBQTBCRixJQUEvQjtBQUFBLFdBSFgsRUFJR0csS0FKSDtBQUtELFNBWkQ7QUFhRCxPQW5CTSxDQUFQO0FBb0JBLFdBQUszRCxTQUFMLENBQWVpQyxTQUFmLElBQTRCLEtBQUs5QixPQUFqQztBQUNBLGFBQU8sS0FBS0YsTUFBTCxDQUFZZ0MsU0FBWixDQUFQLENBdEJ1QyxDQXVCdkM7QUFDRDs7OzBCQUVLQSxTLEVBQVdPLEcsRUFBS29CLEksRUFBTTtBQUMxQixVQUFJQSxJQUFKLEVBQVU7QUFDUixhQUFLQyxTQUFMLENBQWU1QixTQUFmLEVBQTBCTyxHQUExQixFQUErQm9CLElBQS9CO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsZUFBTyxLQUFLN0MsUUFBTCxDQUFja0IsU0FBZCxDQUFQO0FBQ0Q7QUFDRjs7OzRCQUVPLENBQUc7QUFFWDs7Ozs7OzZCQUdTQSxTLEVBQVc7QUFBQTs7QUFDbEIsVUFBSSxLQUFLaEMsTUFBTCxDQUFZZ0MsU0FBWixDQUFKLEVBQTRCLE9BQU8sS0FBS2hDLE1BQUwsQ0FBWWdDLFNBQVosQ0FBUDtBQUM1QixVQUFNakIsSUFBSSxHQUFHLElBQWI7QUFDQSxVQUFNYixPQUFPLEdBQUcsS0FBS0gsU0FBTCxDQUFlaUMsU0FBZixDQUFoQjtBQUNBLFVBQU1KLEdBQUcsR0FBRztBQUNWLFlBQUkzQixTQUFKLEdBQWdCO0FBQ2QsaUJBQU9jLElBQUksQ0FBQ2QsU0FBTCxDQUFlK0IsU0FBZixDQUFQO0FBQ0Q7O0FBSFMsT0FBWjtBQUtBaEIsNERBQU8sQ0FBQ2QsT0FBRCxFQUFVLFVBQUN4QixHQUFELEVBQU13QyxHQUFOLEVBQWM7QUFDN0JVLFdBQUcsQ0FBQ1YsR0FBRCxDQUFIO0FBQUEseUxBQVcsa0JBQU8yQyxNQUFQLEVBQWVsRCxJQUFmO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUNTLE1BQUksQ0FBQ21ELE9BQUwsQ0FBYTVELE9BQU8sQ0FBQ2dCLEdBQUQsQ0FBcEIsRUFBMkIyQyxNQUEzQixFQUNmRSxJQURlLENBQ1YsVUFBQXRCLEdBQUc7QUFBQSw2QkFBSSxNQUFJLENBQUN1QixlQUFMLENBQXFCdkIsR0FBRyxDQUFDd0IsQ0FBekIsRUFBNEJKLE1BQTVCLENBQUo7QUFBQSxxQkFETyxXQUVULFVBQUFqQixHQUFHO0FBQUEsNkJBQUlFLE9BQU8sQ0FBQ0MsS0FBUixDQUFjSCxHQUFHLENBQUNJLEtBQWxCLENBQUo7QUFBQSxxQkFGTSxDQURUOztBQUFBO0FBQ0hrQix1QkFERztBQUtUbkQsd0JBQUksQ0FBQ2QsU0FBTCxDQUFlK0IsU0FBZixJQUE0QmtDLEdBQTVCOztBQUxTLHlCQU9MdkQsSUFQSztBQUFBO0FBQUE7QUFBQTs7QUFBQSxzREFRQUEsSUFBSSxDQUFDdUMsS0FBTCxDQUFXZ0IsR0FBWCxhQUF3QjtBQUFBLDZCQUFNdkQsSUFBSSxDQUFDbUIsT0FBTCxFQUFOO0FBQUEscUJBQXhCLENBUkE7O0FBQUE7QUFVRHFDLHlCQVZDLEdBVU8sTUFBSSxDQUFDM0QsYUFBTCxFQVZQOztBQUFBLHlCQVdIMkQsS0FYRztBQUFBO0FBQUE7QUFBQTs7QUFBQSxzREFZRUEsS0FBSyxDQUFDakIsS0FBTixDQUFZZ0IsR0FBWixDQVpGOztBQUFBO0FBQUEsc0RBY0VBLEdBZEY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBWDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWtCRCxPQW5CTSxDQUFQO0FBcUJBLFdBQUtsRSxNQUFMLENBQVlnQyxTQUFaLElBQXlCSixHQUF6QjtBQUNBLGFBQU9BLEdBQVA7QUFDRDs7OzsyTUFFYWEsRyxFQUFLb0IsTTs7Ozs7OztrREFFVnZELCtDQUFPLENBQUM4RCxPQUFSLENBQWdCM0IsR0FBaEIsRUFBcUJzQixJQUFyQjtBQUFBLGtNQUEwQixrQkFBTXRCLEdBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUMvQjtBQUNBQSwrQkFBRyxDQUFDd0IsQ0FBSixHQUFRLEVBQVI7QUFGK0I7QUFBQSxtQ0FHekIzRCwrQ0FBTyxDQUFDK0QsSUFBUixDQUFhNUIsR0FBRyxDQUFDNkIsRUFBakI7QUFBQSw4TUFBcUIsa0JBQU1mLElBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBRXJCQSxJQUFJLENBQUMsT0FBRCxDQUFKLEtBQWtCLFVBRkc7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTs7QUFBQTtBQUlqQmdCLDRDQUppQixvQkFJQSxNQUFJLENBQUNDLHFCQUFMLENBQTJCakIsSUFBSSxDQUFDLE9BQUQsQ0FBL0IsQ0FKQTtBQUFBO0FBQUEsK0NBS2pCLE1BQUksQ0FBQ2dCLElBQUQsQ0FBSixDQUFXaEIsSUFBWCxFQUFpQk0sTUFBakIsQ0FMaUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBQXJCOztBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUh5Qjs7QUFBQTtBQVkvQjtBQUNBLGtDQUFJLENBQUNZLE1BQUwsQ0FBWWhDLEdBQVosRUFiK0IsQ0FjL0I7QUFDQTs7O0FBZitCLDhEQWdCeEJBLEdBaEJ3Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBMUI7O0FBQUE7QUFBQTtBQUFBO0FBQUEsb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a05Bb0JZYyxJLEVBQU1NLE07Ozs7OztBQUN6QjtBQUNNSixrQixHQUFLRixJQUFJLENBQUNDLENBQUwsQ0FBT2tCLEs7QUFDWkMsaUIsR0FBSUMsbURBQUksQ0FBQyxLQUFLekUsVUFBTixFQUFrQjtBQUFFcUQsbUJBQUMsRUFBRTtBQUFFQyxzQkFBRSxFQUFFQTtBQUFOO0FBQUwsaUJBQWxCLEM7O29CQUNUa0IsQzs7Ozs7c0JBQ0csSUFBSUUsS0FBSixtQ0FBcUNwQixFQUFyQyxFOzs7O3VCQUdGLEtBQUtxQixXQUFMLENBQWlCSCxDQUFqQixFQUFvQmQsTUFBcEIsQzs7O0FBQ05OLG9CQUFJLENBQUNVLENBQUwsR0FBU1UsQ0FBQyxDQUFDVixDQUFYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OytNQUdnQnhCLEcsRUFBS29CLE07Ozs7OztBQUNyQjtBQUNBO0FBQ01rQixvQixHQUFPNUQsTUFBTSxDQUFDNEQsSUFBUCxDQUFZdEMsR0FBWixFQUFpQnVDLE1BQWpCLENBQXdCLFVBQUE5RCxHQUFHO0FBQUEseUJBQUksQ0FBQyxrQkFBa0IrRCxJQUFsQixDQUF1Qi9ELEdBQXZCLENBQUw7QUFBQSxpQkFBM0IsQzs7c0JBQ1Q2RCxJQUFJLENBQUNHLE1BQUwsS0FBZ0IsQzs7Ozs7O3VCQUNaLEtBQUtwQixPQUFMLENBQWFyQixHQUFiLEVBQWtCb0IsTUFBbEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2TUFJTU4sSSxFQUFNTSxNOzs7Ozs7O3VCQUVELEtBQUtHLGVBQUwsQ0FBcUJULElBQUksQ0FBQ0MsQ0FBTCxDQUFPeUIsSUFBNUIsRUFBa0NwQixNQUFsQyxFQUEwQ0UsSUFBMUMsQ0FBK0MsS0FBS29CLFdBQXBELEM7OztBQUFiRixvQjs7cUJBQ0ZHLGdEQUFRLENBQUNILElBQUQsQzs7Ozs7O3VCQUNKLEtBQUtILFdBQUwsQ0FBaUJ2QixJQUFqQixFQUF1Qk0sTUFBdkIsQzs7Ozt1QkFDUyxLQUFLRyxlQUFMLENBQXFCVCxJQUFJLENBQUNVLENBQTFCLEVBQTZCSixNQUE3QixDOzs7QUFBZk4sb0JBQUksQ0FBQ1UsQzs7Ozs7QUFFTFYsb0JBQUksQ0FBQ1UsQ0FBTCxHQUFTLEVBQVQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a05BSWdCVixJLEVBQU1NLE07Ozs7Ozs7O3VCQUdsQnZELCtDQUFPLENBQUMrRCxJQUFSLENBQWFkLElBQUksQ0FBQ2UsRUFBbEI7QUFBQSxrTUFBc0Isa0JBQU1lLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzFCO0FBQ01DLG1DQUZvQixHQUVWakUsa0RBQUcsQ0FBQ2dFLEtBQUQsRUFBUSxRQUFSLENBRk87O0FBQUEsaUNBR3RCQyxPQUhzQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1DQUlMLE1BQUksQ0FBQ3RCLGVBQUwsQ0FBcUJzQixPQUFyQixFQUE4QnpCLE1BQTlCLEVBQXNDRSxJQUF0QyxDQUEyQyxNQUFJLENBQUNvQixXQUFoRCxDQUpLOztBQUFBO0FBSWxCRixnQ0FKa0I7O0FBQUEsaUNBTXBCRyxnREFBUSxDQUFDSCxJQUFELENBTlk7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQ0FPaEIsTUFBSSxDQUFDSCxXQUFMLENBQWlCTyxLQUFqQixFQUF3QnhCLE1BQXhCLENBUGdCOztBQUFBO0FBQUE7QUFBQSxtQ0FRTixNQUFJLENBQUNHLGVBQUwsQ0FBcUJxQixLQUFLLENBQUNwQixDQUEzQixFQUE4QkosTUFBOUIsQ0FSTTs7QUFBQTtBQVF0QndCLGlDQUFLLENBQUNwQixDQVJnQjtBQUFBLGtDQVNoQixJQUFJM0QsK0NBQU8sQ0FBQ2lGLGlCQUFaLENBQThCLFNBQTlCLENBVGdCOztBQUFBO0FBV3RCRixpQ0FBSyxDQUFDcEIsQ0FBTixHQUFVLEVBQVY7O0FBWHNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUF0Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFlRzNELCtDQUFPLENBQUNpRixpQkFmWCxFQWU4QjtBQUFBLHlCQUFNLEVBQU47QUFBQSxpQkFmOUIsQzs7O0FBZ0JOLHFCQUFLZCxNQUFMLENBQVlsQixJQUFaLEVBQWtCLElBQWxCLEUsQ0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnTkFHZ0JBLEksRUFBTU0sTTs7Ozs7Ozs7dUJBR2hCdkQsK0NBQU8sQ0FBQytELElBQVIsQ0FBYWQsSUFBSSxDQUFDZSxFQUFsQjtBQUFBLGtNQUFzQixtQkFBTWUsS0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDMUI7QUFDTUMsbUNBRm9CLEdBRVZqRSxrREFBRyxDQUFDZ0UsS0FBRCxFQUFRLFFBQVIsQ0FGTzs7QUFBQSxpQ0FHdEJDLE9BSHNCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUNBSUwsTUFBSSxDQUFDdEIsZUFBTCxDQUFxQnNCLE9BQXJCLEVBQThCekIsTUFBOUIsRUFBc0NFLElBQXRDLENBQTJDLE1BQUksQ0FBQ29CLFdBQWhELENBSks7O0FBQUE7QUFJbEJGLGdDQUprQjs7QUFBQSxpQ0FNcEJHLGdEQUFRLENBQUNILElBQUQsQ0FOWTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1DQU9oQixNQUFJLENBQUNILFdBQUwsQ0FBaUJPLEtBQWpCLEVBQXdCeEIsTUFBeEIsQ0FQZ0I7O0FBQUE7QUFBQTtBQUFBLG1DQVFOLE1BQUksQ0FBQ0csZUFBTCxDQUFxQnFCLEtBQUssQ0FBQ3BCLENBQTNCLEVBQThCSixNQUE5QixDQVJNOztBQUFBO0FBUXRCd0IsaUNBQUssQ0FBQ3BCLENBUmdCO0FBQUE7QUFBQTs7QUFBQTtBQVV0Qm9CLGlDQUFLLENBQUNwQixDQUFOLEdBQVUsRUFBVjs7QUFWc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXRCOztBQUFBO0FBQUE7QUFBQTtBQUFBLG9COzs7QUFlTixxQkFBS1EsTUFBTCxDQUFZbEIsSUFBWjtBQUNBLHFCQUFLaUMsVUFBTCxDQUFnQmpDLElBQWhCLEVBQXNCQSxJQUF0Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztpTkFHaUJBLEksRUFBTU0sTTs7Ozs7Ozs7dUJBR2pCdkQsK0NBQU8sQ0FBQytELElBQVIsQ0FBYWQsSUFBSSxDQUFDZSxFQUFsQjtBQUFBLGtNQUFzQixtQkFBTWUsS0FBTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDMUI7QUFDTUMsbUNBRm9CLEdBRVZqRSxrREFBRyxDQUFDZ0UsS0FBRCxFQUFRLFFBQVIsQ0FGTzs7QUFBQSxpQ0FHdEJDLE9BSHNCO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsbUNBSUwsTUFBSSxDQUFDdEIsZUFBTCxDQUFxQnNCLE9BQXJCLEVBQThCekIsTUFBOUIsRUFBc0NFLElBQXRDLENBQTJDLE1BQUksQ0FBQ29CLFdBQWhELENBSks7O0FBQUE7QUFJbEJGLGdDQUprQjs7QUFBQSxpQ0FNcEJHLGdEQUFRLENBQUNILElBQUQsQ0FOWTtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1DQU9oQixNQUFJLENBQUNILFdBQUwsQ0FBaUJPLEtBQWpCLEVBQXdCeEIsTUFBeEIsQ0FQZ0I7O0FBQUE7QUFBQTtBQUFBLG1DQVFOLE1BQUksQ0FBQ0csZUFBTCxDQUFxQnFCLEtBQUssQ0FBQ3BCLENBQTNCLEVBQThCSixNQUE5QixDQVJNOztBQUFBO0FBUXRCd0IsaUNBQUssQ0FBQ3BCLENBUmdCO0FBQUE7QUFBQTs7QUFBQTtBQVV0Qm9CLGlDQUFLLENBQUNwQixDQUFOLEdBQVUsRUFBVjs7QUFWc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXRCOztBQUFBO0FBQUE7QUFBQTtBQUFBLG9COzs7QUFlTixxQkFBS1EsTUFBTCxDQUFZbEIsSUFBWjtBQUNBLHFCQUFLaUMsVUFBTCxDQUFnQmpDLElBQWhCLEVBQXNCO0FBQUVDLG1CQUFDLEVBQUU7QUFBRWlDLG1DQUFlLEVBQUUsVUFBbkI7QUFBK0JDLDBCQUFNLEVBQUU7QUFBdkM7QUFBTCxpQkFBdEIsRSxDQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OytNQUdlbkMsSSxFQUFNTSxNOzs7Ozs7Ozt1QkFHZnZELCtDQUFPLENBQUMrRCxJQUFSLENBQWFkLElBQUksQ0FBQ2UsRUFBbEI7QUFBQSxrTUFBc0IsbUJBQU1lLEtBQU47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQzFCO0FBQ01DLG1DQUZvQixHQUVWakUsa0RBQUcsQ0FBQ2dFLEtBQUQsRUFBUSxRQUFSLENBRk87O0FBQUEsaUNBR3RCQyxPQUhzQjtBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBLG1DQUlMLE1BQUksQ0FBQ3RCLGVBQUwsQ0FBcUJzQixPQUFyQixFQUE4QnpCLE1BQTlCLEVBQXNDRSxJQUF0QyxDQUEyQyxNQUFJLENBQUNvQixXQUFoRCxDQUpLOztBQUFBO0FBSWxCRixnQ0FKa0I7O0FBQUEsaUNBTXBCRyxnREFBUSxDQUFDSCxJQUFELENBTlk7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQSxtQ0FPaEIsTUFBSSxDQUFDSCxXQUFMLENBQWlCTyxLQUFqQixFQUF3QnhCLE1BQXhCLENBUGdCOztBQUFBO0FBQUE7QUFBQSxtQ0FRTixNQUFJLENBQUNHLGVBQUwsQ0FBcUJxQixLQUFLLENBQUNwQixDQUEzQixFQUE4QkosTUFBOUIsQ0FSTTs7QUFBQTtBQVF0QndCLGlDQUFLLENBQUNwQixDQVJnQjtBQUFBO0FBQUE7O0FBQUE7QUFVdEJvQixpQ0FBSyxDQUFDcEIsQ0FBTixHQUFVLEVBQVY7O0FBVnNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUF0Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQjs7O0FBZU4scUJBQUtRLE1BQUwsQ0FBWWxCLElBQVo7QUFDQSxxQkFBS2lDLFVBQUwsQ0FBZ0JqQyxJQUFoQixFQUFzQjtBQUFFQyxtQkFBQyxFQUFFO0FBQUVtQyxtQ0FBZSxFQUFFLEdBQW5CO0FBQXdCRCwwQkFBTSxFQUFFO0FBQWhDO0FBQUwsaUJBQXRCLEUsQ0FDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttTkFHbUJuQyxJLEVBQU1NLE07Ozs7Ozs7Ozt1QkFHbkIsS0FBS2lCLFdBQUwsQ0FBaUJ2QixJQUFqQixFQUF1Qk0sTUFBdkIsQzs7O0FBQ0ErQiwwQixHQUFhdkUsa0RBQUcsQ0FBQ3dDLE1BQUQsRUFBU04sSUFBSSxDQUFDQyxDQUFMLENBQU9vQyxVQUFoQixDQUFILElBQWtDLEU7QUFDL0NDLDRCLEdBQWUsRSxFQUNyQjs7O3VCQUNNdkYsK0NBQU8sQ0FBQytELElBQVIsQ0FBYXVCLFVBQWI7QUFBQSxrTUFBeUIsbUJBQU9FLEdBQVAsRUFBWTFELEdBQVo7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FDWCxNQUFJLENBQUM0QixlQUFMLENBQXFCVCxJQUFJLENBQUNVLENBQTFCLG1JQUNmVixJQUFJLENBQUNDLENBQUwsQ0FBT0QsSUFEUSxFQUNEdUMsR0FEQyx1R0FFZnZDLElBQUksQ0FBQ0MsQ0FBTCxDQUFPdUMsS0FGUSxFQUVBM0QsR0FGQSwwQkFEVzs7QUFBQTtBQUN2QjhCLCtCQUR1QjtBQUs3QjJCLHdDQUFZLENBQUNHLElBQWIsQ0FBa0I5QixHQUFsQjs7QUFMNkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQXpCOztBQUFBO0FBQUE7QUFBQTtBQUFBLG9COzs7QUFPTlgsb0JBQUksQ0FBQ1UsQ0FBTCxHQUFTNEIsWUFBWSxDQUFDckQsSUFBYixDQUFrQmUsSUFBSSxDQUFDQyxDQUFMLENBQU95QyxTQUF6QixDQUFUO0FBQ0ExQyxvQkFBSSxDQUFDQyxDQUFMLENBQU9tQyxlQUFQLEdBQXlCcEMsSUFBSSxDQUFDQyxDQUFMLENBQU95QyxTQUFoQztBQUNBMUMsb0JBQUksQ0FBQ0MsQ0FBTCxDQUFPa0MsTUFBUCxHQUFnQm5DLElBQUksQ0FBQ0MsQ0FBTCxDQUFPMEMsSUFBdkI7QUFDQTNDLG9CQUFJLENBQUNDLENBQUwsQ0FBTzJDLE1BQVAsR0FBZ0I1QyxJQUFJLENBQUNDLENBQUwsQ0FBTzRDLEtBQXZCO0FBQ0EscUJBQUtaLFVBQUwsQ0FBZ0JqQyxJQUFoQixFQUFzQkEsSUFBdEIsRSxDQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dOQUdnQkEsSSxFQUFNTSxNOzs7Ozs7O3VCQUdOLEtBQUtHLGVBQUwsQ0FBcUJULElBQUksQ0FBQ0MsQ0FBTCxDQUFPRSxLQUE1QixFQUFtQ0csTUFBbkMsRUFBMkNFLElBQTNDLENBQWdELEtBQUtvQixXQUFyRCxDOzs7QUFBVmtCLGlCO0FBQ054QyxzQkFBTSxDQUFDTixJQUFJLENBQUNDLENBQUwsQ0FBTzlDLElBQVIsQ0FBTixHQUFzQjBFLGdEQUFRLENBQUNpQixDQUFELENBQTlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O29OQUdvQm5DLEcsRUFBS0wsTTs7Ozs7O0FBRXpCLG9CQUFJLENBQUNBLE1BQUwsRUFBYTtBQUNYakMscUJBQUcsR0FBR3NDLEdBQU47QUFDRDs7QUFFS29DLHNCLEdBQVNDLGlEQUFTLENBQUNELE07QUFDbkJFLG1CLEdBQU1DLGdEQUFNLENBQUMvSCxHQUFQLENBQVdDLFdBQVgsR0FBeUIsSUFBSStILE1BQUosQ0FBV0QsZ0RBQU0sQ0FBQy9ILEdBQVAsQ0FBV0MsV0FBdEIsRUFBbUMsR0FBbkMsQ0FBekIsR0FBbUUsZTtBQUMvRWlELG1CQUFHLEdBQUdzQyxHQUFHLENBQ055QyxPQURHLENBQ0ssS0FETCxFQUNZLElBRFosRUFFSEEsT0FGRyxDQUVLLFFBRkwsRUFFZSxJQUZmLEVBR0hBLE9BSEcsQ0FHS0gsR0FITCxFQUdVLFVBQUNJLEdBQUQsRUFBTTFGLEdBQU4sRUFBYztBQUMxQkEscUJBQUcsR0FBR0EsR0FBRyxDQUFDeUYsT0FBSixDQUFZLE9BQVosRUFBcUIsRUFBckIsQ0FBTjtBQUNBLHNCQUFJRSxHQUFHLEdBQUd4RixrREFBRyxDQUFDd0MsTUFBRCxFQUFTM0MsR0FBVCxDQUFiOztBQUNBLHNCQUFJVCx5REFBVSxDQUFDb0csR0FBRCxDQUFkLEVBQXFCO0FBQ25CQSx1QkFBRyxHQUFHQSxHQUFHLEVBQVQ7QUFDRCxtQkFGRCxNQUVPLElBQUlDLHVEQUFRLENBQUNELEdBQUQsQ0FBUixJQUFpQkUsc0RBQU8sQ0FBQ0YsR0FBRCxDQUE1QixFQUFtQztBQUN4Q0EsdUJBQUcsR0FBRyxJQUFOO0FBQ0Q7O0FBQ0QseUJBQU9QLE1BQU0sQ0FBQ08sR0FBRCxFQUFNSixnREFBTSxDQUFDL0gsR0FBUCxDQUFXRSxnQkFBakIsRUFBbUM2SCxnREFBTSxDQUFDL0gsR0FBUCxDQUFXRyxRQUE5QyxDQUFiO0FBQ0QsaUJBWkcsQ0FBTjttREFhTytDLEdBQUcsQ0FDUCtFLE9BREksQ0FDSSxZQURKLEVBQ2tCLEVBRGxCLEVBRUpBLE9BRkksQ0FFSSxNQUZKLEVBRVksR0FGWixFQUdKQSxPQUhJLENBR0ksT0FISixFQUdhLFdBSGIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnTkFNU0ssRzs7Ozs7bURBQ1RBLEdBQUcsQ0FBQ0wsT0FBSixDQUFZLFNBQVosRUFBdUIsTUFBdkIsRUFBK0JBLE9BQS9CLENBQXVDLFFBQXZDLEVBQWlELE1BQWpELEM7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQkFHRXBELEksRUFBTWQsRyxFQUFLO0FBQ3BCLFVBQUlBLEdBQUcsQ0FBQ2UsQ0FBSixDQUFNaUMsZUFBVixFQUEyQjtBQUN6QixZQUFNZSxHQUFHLEdBQUcsSUFBSUUsTUFBSixZQUFlakUsR0FBRyxDQUFDZSxDQUFKLENBQU1pQyxlQUFyQixHQUF3QyxJQUF4QyxDQUFaO0FBQ0FsQyxZQUFJLENBQUNVLENBQUwsR0FBU1YsSUFBSSxDQUFDVSxDQUFMLENBQU8wQyxPQUFQLENBQWVILEdBQWYsRUFBb0IsRUFBcEIsQ0FBVDtBQUNELE9BSm1CLENBS3BCOzs7QUFDQSxVQUFJL0QsR0FBRyxDQUFDZSxDQUFKLENBQU1tQyxlQUFWLEVBQTJCO0FBQ3pCLFlBQU1hLElBQUcsR0FBRyxJQUFJRSxNQUFKLFdBQWNqRSxHQUFHLENBQUNlLENBQUosQ0FBTW1DLGVBQXBCLFFBQXdDLElBQXhDLENBQVo7O0FBQ0FwQyxZQUFJLENBQUNVLENBQUwsR0FBU1YsSUFBSSxDQUFDVSxDQUFMLENBQU8wQyxPQUFQLENBQWVILElBQWYsRUFBb0IsRUFBcEIsQ0FBVDtBQUNELE9BVG1CLENBVXBCOzs7QUFDQSxVQUFJLENBQUNTLHNEQUFPLENBQUMxRCxJQUFJLENBQUNVLENBQU4sQ0FBWixFQUFzQjtBQUNwQlYsWUFBSSxDQUFDVSxDQUFMLGFBQVl4QixHQUFHLENBQUNlLENBQUosQ0FBTWtDLE1BQU4sSUFBZ0IsRUFBNUIsY0FBa0NuQyxJQUFJLENBQUNVLENBQXZDLGNBQTRDeEIsR0FBRyxDQUFDZSxDQUFKLENBQU0yQyxNQUFOLElBQWdCLEVBQTVEO0FBQ0QsT0FibUIsQ0FjcEI7O0FBQ0Q7OzswQ0FFcUJhLEcsRUFBSztBQUN6QixhQUFPQSxHQUFHLENBQUNFLE1BQUosQ0FBVyxDQUFYLEVBQWNDLFdBQWQsS0FBOEJILEdBQUcsQ0FBQ0ksS0FBSixDQUFVLENBQVYsQ0FBckM7QUFDRDs7OzJCQUVNM0UsRyxFQUFLNEUsTSxFQUFRO0FBQ2xCLFVBQU14QixZQUFZLEdBQUcsRUFBckI7QUFDQTdFLDREQUFPLENBQUN5QixHQUFHLENBQUM2QixFQUFMLEVBQVMsVUFBQWYsSUFBSSxFQUFJO0FBQ3RCLFlBQUlBLElBQUksQ0FBQ1UsQ0FBVCxFQUFZO0FBQ1Y0QixzQkFBWSxDQUFDRyxJQUFiLENBQWtCekMsSUFBSSxDQUFDVSxDQUF2Qjs7QUFFQSxjQUFJb0QsTUFBSixFQUFZO0FBQ1YsbUJBQU8sS0FBUDtBQUNEO0FBQ0YsU0FQcUIsQ0FRdEI7O0FBQ0QsT0FUTSxDQUFQO0FBVUE1RSxTQUFHLENBQUN3QixDQUFKLEdBQVE0QixZQUFZLENBQUNyRCxJQUFiLENBQWtCLEdBQWxCLENBQVI7QUFDRDs7Ozs7O0FBR1ksbUVBQUkxQyxRQUFKLEVBQWYsRTs7Ozs7Ozs7Ozs7QUNoWkEsb0U7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7O0FDQUEsdUQ7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsK0I7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsaUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUMiLCJmaWxlIjoibGlicmFyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwibGlicmFyeVwiLCBbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJsaWJyYXJ5XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImxpYnJhcnlcIl0gPSBmYWN0b3J5KCk7XG59KShnbG9iYWwsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBzcWw6IHtcbiAgICBxdWVyeUZvcm1hdDogLzooW1xcd18uKCldKykvZyxcbiAgICBzdHJpbmdpZnlPYmplY3RzOiBmYWxzZSxcbiAgICB0aW1lem9uZTogZmFsc2VcbiAgfSxcbiAgbG9nOiB7XG4gICAgbGV2ZWw6ICdpbmZvJywgLy8gJ2ZhdGFsJywgJ2Vycm9yJywgJ3dhcm4nLCAnaW5mbycsICdkZWJ1ZycsICd0cmFjZSdcbiAgICB0cmFjZUxpbmVudW1iZXI6IHRydWUsXG4gICAgdGltZUZvcm1hdDogJ1lZWVktTU0tREQgQSBoaDptbTpzcycsXG4gICAgcHJldHR5OiB0cnVlLFxuICAgIG1hcDoge1xuICAgICAgbXliYXRpczM6ICdmYXRhbCcsXG4gICAgICAnKic6ICd0cmFjZSdcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB4bWwyanMgZnJvbSAneG1sMmpzJ1xuaW1wb3J0IG5vZGVFdmFsIGZyb20gJ25vZGUtZXZhbCdcbmltcG9ydCB7IHJlYWRGaWxlU3luYyB9IGZyb20gJ2ZzJ1xuaW1wb3J0IHtcbiAgZm9yRWFjaCxcbiAgZmluZCxcbiAgY2hhaW4sXG4gIGlzRW1wdHksXG4gIHBhcnRpYWxSaWdodCxcbiAgZ2V0LFxuICBpc0FycmF5LFxuICBpc09iamVjdCxcbiAgaXNGdW5jdGlvblxufSBmcm9tICdsb2Rhc2gnXG5pbXBvcnQgUHJvbWlzZSBmcm9tICdibHVlYmlyZCdcbmltcG9ydCBjb25maWcgZnJvbSAnLi9jb25maWcnXG5pbXBvcnQgc3Fsc3RyaW5nIGZyb20gJ3NxbHN0cmluZydcbmltcG9ydCB7IGpvaW4sIGV4dG5hbWUgfSBmcm9tICdwYXRoJ1xuLy8gaW1wb3J0ICRsb2cgZnJvbSAnLi9sb2cnXG5jb25zdCBwYXJzZXIgPSBuZXcgeG1sMmpzLlBhcnNlcih7XG4gIHRyaW06IHRydWUsXG4gIG5vcm1hbGl6ZTogdHJ1ZSxcbiAgcHJlc2VydmVDaGlsZHJlbk9yZGVyOiB0cnVlLFxuICBleHBsaWNpdENoaWxkcmVuOiB0cnVlLFxuICBleHBsaWNpdENoYXJrZXk6IHRydWUsXG4gIGNoYXJzQXNDaGlsZHJlbjogdHJ1ZVxufSlcbi8vIGNvbnN0IGxvZyA9ICRsb2cuZ2V0SW5zdGFuY2UoJ215YmF0aXMzJylcblxuY2xhc3MgTXliYXRpczMge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnRhYmxlc1JhdyA9IFtdXG4gICAgdGhpcy50YWJsZXMgPSBbXVxuICAgIHRoaXMubGFzdFF1ZXJ5ID0ge31cbiAgICB0aGlzLnNxbERhdGEgPSB7fSAvLyB4bWwgcmF3IHF1ZXJ5XG4gICAgdGhpcy5yZWZlcmVuY2VzID0gW10gLy8gaW5jbHVkZeqwgCDsoJXsnZjrkJwgYXJyYXlcbiAgfVxuXG4gIHNldENvbm5lY3Rpb24ocG9vbCkge1xuICAgIHRoaXMucG9vbCA9IHBvb2xcbiAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbkFzeW5jID0gUHJvbWlzZS5wcm9taXNpZnkodGhpcy5wb29sLmdldENvbm5lY3Rpb24pXG4gIH1cblxuICBnZXRDb25uZWN0aW9uKCkge1xuICAgIGlmIChpc0Z1bmN0aW9uKHRoaXMucG9vbCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnBvb2woKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5wb29sXG4gICAgfVxuICB9XG5cbiAgZm5Nb2RlbChuYW1lLCBjb25uKSB7XG4gICAgY29uc3QgY3R4ID0ge31cbiAgICBjb25zdCB0YWJsZSA9IHRoaXMuZ2V0UXVlcnkobmFtZSlcbiAgICBjb25zdCBzZWxmID0gdGhpc1xuICAgIGZvckVhY2godGFibGUsIChmbiwga2V5KSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnbGFzdFF1ZXJ5Jykge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoY3R4LCBrZXksIHtcbiAgICAgICAgICBnZXQ6ICgpID0+IHNlbGYubGFzdFF1ZXJ5W25hbWVdXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjdHhba2V5XSA9IHBhcnRpYWxSaWdodChmbiwgY29ubilcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBjdHhcbiAgfVxuXG4gIGFzeW5jIHRyYW5zYWN0aW9uKGV4ZWNRdWVyeSkge1xuICAgIGxldCBjb25uZWN0aW9uLCByc3RcbiAgICB0cnkge1xuICAgICAgY29ubmVjdGlvbiA9IGF3YWl0IHRoaXMucG9vbC5nZXRDb25uZWN0aW9uQXN5bmMoKVxuICAgICAgY29ubmVjdGlvbi50YWJsZSA9IHBhcnRpYWxSaWdodCh0aGlzLmZuTW9kZWwsIGNvbm5lY3Rpb24pLmJpbmQodGhpcylcbiAgICAgIGF3YWl0IGNvbm5lY3Rpb24uYmVnaW5UcmFuc2FjdGlvbigpXG4gICAgICByc3QgPSBhd2FpdCBleGVjUXVlcnkoY29ubmVjdGlvbilcbiAgICAgIGF3YWl0IGNvbm5lY3Rpb24uY29tbWl0KClcbiAgICAgIGNvbm5lY3Rpb24ucmVsZWFzZSgpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgYXdhaXQgY29ubmVjdGlvbi5yb2xsYmFjaygpXG4gICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKVxuICAgICAgdGhyb3cgZVxuICAgIH1cbiAgICByZXR1cm4gcnN0XG4gIH1cblxuICAvLyBsb2FkUXVlcnkocGF0aCwgaWR4KSB7XG4gIGxvYWRRdWVyeSh0YWJsZU5hbWUsIHBhdGgsIHhtbEZpbGVuYW1lcykge1xuICAgIGZvckVhY2goeG1sRmlsZW5hbWVzLCAoZmlsZW5hbWUsIGlkeCkgPT4ge1xuICAgICAgdGhpcy5zcWxEYXRhID0gaWR4ID09PSAwID8ge30gOiB0aGlzLnNxbERhdGFcbiAgICAgIGNvbnN0IGV4dCA9IGV4dG5hbWUoZmlsZW5hbWUpXG4gICAgICBjb25zdCBkaXIgPSBleHQgPyBqb2luKHBhdGgsIGZpbGVuYW1lKSA6IGpvaW4ocGF0aCwgZmlsZW5hbWUgKyAnLnhtbCcpXG4gICAgICBjb25zdCB4bWwgPSByZWFkRmlsZVN5bmMoZGlyLCAndXRmLTgnKVxuICAgICAgLy8gbG9nLmRlYnVnKCd4bWxzJywgeG1sKVxuICAgICAgcGFyc2VyLnBhcnNlU3RyaW5nKHhtbCwgKGVyciwgZGF0YSkgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoZXJyLnN0YWNrIHx8IGVycilcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBqc29uRGF0YSA9IGRhdGEucXVlcnlcbiAgICAgICAgdGhpcy5yZWZlcmVuY2VzID0ganNvbkRhdGEuc3FsXG4gICAgICAgIGNvbnN0IGNvbW1hbmRzID0gWydzZWxlY3QnLCAndXBkYXRlJywgJ2luc2VydCcsICdkZWxldGUnXVxuICAgICAgICBjaGFpbihjb21tYW5kcylcbiAgICAgICAgICAubWFwKGNtZCA9PiBqc29uRGF0YVtjbWRdIHx8IFtdKVxuICAgICAgICAgIC5mbGF0dGVuKClcbiAgICAgICAgICAubWFwKGl0ZW0gPT4gKHRoaXMuc3FsRGF0YVtpdGVtLiQuaWRdID0gaXRlbSkpXG4gICAgICAgICAgLnZhbHVlKClcbiAgICAgIH0pXG4gICAgfSlcbiAgICB0aGlzLnRhYmxlc1Jhd1t0YWJsZU5hbWVdID0gdGhpcy5zcWxEYXRhXG4gICAgZGVsZXRlIHRoaXMudGFibGVzW3RhYmxlTmFtZV1cbiAgICAvLyBsb2cuZGVidWcodGhpcy5zcWxEYXRhKVxuICB9XG5cbiAgdGFibGUodGFibGVOYW1lLCBkaXIsIHhtbHMpIHtcbiAgICBpZiAoeG1scykge1xuICAgICAgdGhpcy5sb2FkUXVlcnkodGFibGVOYW1lLCBkaXIsIHhtbHMpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmdldFF1ZXJ5KHRhYmxlTmFtZSlcbiAgICB9XG4gIH1cblxuICBtb2RlbCgpIHsgfVxuXG4gIC8qKlxuICAgKiBxdWVyeeyXkCDrjIDtlZwgZnVuY3Rpb27snLzroZwg67CY7ZmYIOuwm+q4sFxuICAgKi9cbiAgZ2V0UXVlcnkodGFibGVOYW1lKSB7XG4gICAgaWYgKHRoaXMudGFibGVzW3RhYmxlTmFtZV0pIHJldHVybiB0aGlzLnRhYmxlc1t0YWJsZU5hbWVdXG4gICAgY29uc3Qgc2VsZiA9IHRoaXNcbiAgICBjb25zdCBzcWxEYXRhID0gdGhpcy50YWJsZXNSYXdbdGFibGVOYW1lXVxuICAgIGNvbnN0IHJzdCA9IHtcbiAgICAgIGdldCBsYXN0UXVlcnkoKSB7XG4gICAgICAgIHJldHVybiBzZWxmLmxhc3RRdWVyeVt0YWJsZU5hbWVdXG4gICAgICB9XG4gICAgfVxuICAgIGZvckVhY2goc3FsRGF0YSwgKHNxbCwga2V5KSA9PiB7XG4gICAgICByc3Rba2V5XSA9IGFzeW5jIChwYXJhbXMsIGNvbm4pID0+IHtcbiAgICAgICAgY29uc3QgcXJ5ID0gYXdhaXQgdGhpcy5wcm9jZXNzKHNxbERhdGFba2V5XSwgcGFyYW1zKVxuICAgICAgICAgIC50aGVuKHhtbCA9PiB0aGlzLnByb2Nlc3NWYXJpYWJsZSh4bWwuXywgcGFyYW1zKSlcbiAgICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyLnN0YWNrKSlcblxuICAgICAgICBzZWxmLmxhc3RRdWVyeVt0YWJsZU5hbWVdID0gcXJ5XG5cbiAgICAgICAgaWYgKGNvbm4pIHtcbiAgICAgICAgICByZXR1cm4gY29ubi5xdWVyeShxcnkpLmZpbmFsbHkoKCkgPT4gY29ubi5yZWxlYXNlKCkpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgX2Nvbm4gPSB0aGlzLmdldENvbm5lY3Rpb24oKVxuICAgICAgICAgIGlmIChfY29ubikge1xuICAgICAgICAgICAgcmV0dXJuIF9jb25uLnF1ZXJ5KHFyeSlcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHFyeVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG5cbiAgICB0aGlzLnRhYmxlc1t0YWJsZU5hbWVdID0gcnN0XG4gICAgcmV0dXJuIHJzdFxuICB9XG5cbiAgYXN5bmMgcHJvY2Vzcyh4bWwsIHBhcmFtcykge1xuICAgIC8vIGxvZy5kZWJ1Zyh4bWwpXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh4bWwpLnRoZW4oYXN5bmMgeG1sID0+IHtcbiAgICAgIC8vIHByb2Nlc3MgeG1sLiQkXG4gICAgICB4bWwuXyA9ICcnXG4gICAgICBhd2FpdCBQcm9taXNlLmVhY2goeG1sLiQkLCBhc3luYyBpdGVtID0+IHtcbiAgICAgICAgLy8gbG9nLmRlYnVnKGl0ZW0pXG4gICAgICAgIGlmIChpdGVtWycjbmFtZSddID09PSAnX190ZXh0X18nKSB7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc3QgcHJvYyA9IGBwcm9jZXNzJHt0aGlzLmNhcGl0YWxpemVGaXJzdExldHRlcihpdGVtWycjbmFtZSddKX1gXG4gICAgICAgICAgYXdhaXQgdGhpc1twcm9jXShpdGVtLCBwYXJhbXMpXG4gICAgICAgIH1cbiAgICAgICAgLy8gbG9nLmRlYnVnKGl0ZW0pXG4gICAgICB9KVxuICAgICAgLy8geG1sIC0+IHhtbC4kJCAtPiB4bWwuXyBidWlsZFxuICAgICAgdGhpcy5tZXJnZV8oeG1sKVxuICAgICAgLy8gbG9nLmRlYnVnKHhtbCwgJ3Byb2Nlc3NlZCcpXG4gICAgICAvLyBsb2cuZGVidWcoeG1sWyckJCddWzFdLCAncHJvY2Vzc2VkJylcbiAgICAgIHJldHVybiB4bWxcbiAgICB9KVxuICB9XG5cbiAgYXN5bmMgcHJvY2Vzc0luY2x1ZGUoaXRlbSwgcGFyYW1zKSB7XG4gICAgLy8gbG9nLmluZm8oJy0tLSBwcm9jZXNzIGluY2x1ZGUnKVxuICAgIGNvbnN0IGlkID0gaXRlbS4kLnJlZmlkXG4gICAgY29uc3QgdCA9IGZpbmQodGhpcy5yZWZlcmVuY2VzLCB7ICQ6IHsgaWQ6IGlkIH0gfSlcbiAgICBpZiAoIXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgaXMgbm8gaW5jbHVkZSBpZDogJHtpZH1gKVxuICAgIH1cbiAgICAvLyBsb2cuZGVidWcodCwgJ3QnKVxuICAgIGF3YWl0IHRoaXMucHJvY2Vzc0RlZXAodCwgcGFyYW1zKVxuICAgIGl0ZW0uXyA9IHQuX1xuICB9XG5cbiAgYXN5bmMgcHJvY2Vzc0RlZXAoeG1sLCBwYXJhbXMpIHtcbiAgICAvLyBsb2cuaW5mbygnLS0tIHByb2Nlc3MgZGVlcCcpXG4gICAgLy8gbG9nLmRlYnVnKHhtbClcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoeG1sKS5maWx0ZXIoa2V5ID0+ICEvX3xcXCR7MSwyfXwjbmFtZS8udGVzdChrZXkpKVxuICAgIGlmIChrZXlzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgYXdhaXQgdGhpcy5wcm9jZXNzKHhtbCwgcGFyYW1zKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHByb2Nlc3NJZihpdGVtLCBwYXJhbXMpIHtcbiAgICAvLyBsb2cuaW5mbygnLS0tIHByb2Nlc3MgaWYnKVxuICAgIGNvbnN0IHRlc3QgPSBhd2FpdCB0aGlzLnByb2Nlc3NWYXJpYWJsZShpdGVtLiQudGVzdCwgcGFyYW1zKS50aGVuKHRoaXMuY2hhbmdlQW5kT3IpXG4gICAgaWYgKG5vZGVFdmFsKHRlc3QpKSB7XG4gICAgICBhd2FpdCB0aGlzLnByb2Nlc3NEZWVwKGl0ZW0sIHBhcmFtcylcbiAgICAgIGl0ZW0uXyA9IGF3YWl0IHRoaXMucHJvY2Vzc1ZhcmlhYmxlKGl0ZW0uXywgcGFyYW1zKVxuICAgIH0gZWxzZSB7XG4gICAgICBpdGVtLl8gPSAnJ1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHByb2Nlc3NDaG9vc2UoaXRlbSwgcGFyYW1zKSB7XG4gICAgLy8gbG9nLmluZm8oJy0tLSBwcm9jZXNzIENob29zZScpXG4gICAgLy8gbG9nLmRlYnVnKGl0ZW0sICdpdGVtJylcbiAgICBhd2FpdCBQcm9taXNlLmVhY2goaXRlbS4kJCwgYXN5bmMgX2Nhc2UgPT4ge1xuICAgICAgLy8gbG9nLmRlYnVnKF9jYXNlLCAnX2Nhc2UnKVxuICAgICAgY29uc3QgdGVzdFN0ciA9IGdldChfY2FzZSwgJyQudGVzdCcpXG4gICAgICBpZiAodGVzdFN0cikge1xuICAgICAgICBjb25zdCB0ZXN0ID0gYXdhaXQgdGhpcy5wcm9jZXNzVmFyaWFibGUodGVzdFN0ciwgcGFyYW1zKS50aGVuKHRoaXMuY2hhbmdlQW5kT3IpXG4gICAgICAgIC8vIC8vIGxvZy5kZWJ1ZyhwYXJhbXMsIHRlc3QpXG4gICAgICAgIGlmIChub2RlRXZhbCh0ZXN0KSkge1xuICAgICAgICAgIGF3YWl0IHRoaXMucHJvY2Vzc0RlZXAoX2Nhc2UsIHBhcmFtcylcbiAgICAgICAgICBfY2FzZS5fID0gYXdhaXQgdGhpcy5wcm9jZXNzVmFyaWFibGUoX2Nhc2UuXywgcGFyYW1zKVxuICAgICAgICAgIHRocm93IG5ldyBQcm9taXNlLkNhbmNlbGxhdGlvbkVycm9yKCdtYXRjaGVkJylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBfY2FzZS5fID0gJydcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gbG9nLmRlYnVnKF9jYXNlKVxuICAgIH0pLmNhdGNoKFByb21pc2UuQ2FuY2VsbGF0aW9uRXJyb3IsICgpID0+ICcnKVxuICAgIHRoaXMubWVyZ2VfKGl0ZW0sIHRydWUpXG4gICAgLy8gbG9nLmRlYnVnKGl0ZW0sICdpdGVtJylcbiAgfVxuXG4gIGFzeW5jIHByb2Nlc3NUcmltKGl0ZW0sIHBhcmFtcykge1xuICAgIC8vIGxvZy5pbmZvKCctLS0gcHJvY2VzcyB0cmltJylcbiAgICAvLyBsb2cuZGVidWcoaXRlbSwgJ2l0ZW0nKVxuICAgIGF3YWl0IFByb21pc2UuZWFjaChpdGVtLiQkLCBhc3luYyBfY2FzZSA9PiB7XG4gICAgICAvLyBsb2cuZGVidWcoX2Nhc2UsICdfY2FzZScpXG4gICAgICBjb25zdCB0ZXN0U3RyID0gZ2V0KF9jYXNlLCAnJC50ZXN0JylcbiAgICAgIGlmICh0ZXN0U3RyKSB7XG4gICAgICAgIGNvbnN0IHRlc3QgPSBhd2FpdCB0aGlzLnByb2Nlc3NWYXJpYWJsZSh0ZXN0U3RyLCBwYXJhbXMpLnRoZW4odGhpcy5jaGFuZ2VBbmRPcilcbiAgICAgICAgLy8gLy8gbG9nLmRlYnVnKHBhcmFtcywgdGVzdClcbiAgICAgICAgaWYgKG5vZGVFdmFsKHRlc3QpKSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wcm9jZXNzRGVlcChfY2FzZSwgcGFyYW1zKVxuICAgICAgICAgIF9jYXNlLl8gPSBhd2FpdCB0aGlzLnByb2Nlc3NWYXJpYWJsZShfY2FzZS5fLCBwYXJhbXMpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX2Nhc2UuXyA9ICcnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGxvZy5kZWJ1ZyhfY2FzZSlcbiAgICB9KVxuICAgIHRoaXMubWVyZ2VfKGl0ZW0pXG4gICAgdGhpcy5wcm9jZXNzRml4KGl0ZW0sIGl0ZW0pXG4gIH1cblxuICBhc3luYyBwcm9jZXNzV2hlcmUoaXRlbSwgcGFyYW1zKSB7XG4gICAgLy8gbG9nLmluZm8oJy0tLSBwcm9jZXNzIHdoZXJlJylcbiAgICAvLyBsb2cuZGVidWcoaXRlbSwgJ2l0ZW0nKVxuICAgIGF3YWl0IFByb21pc2UuZWFjaChpdGVtLiQkLCBhc3luYyBfY2FzZSA9PiB7XG4gICAgICAvLyBsb2cuZGVidWcoX2Nhc2UsICdfY2FzZScpXG4gICAgICBjb25zdCB0ZXN0U3RyID0gZ2V0KF9jYXNlLCAnJC50ZXN0JylcbiAgICAgIGlmICh0ZXN0U3RyKSB7XG4gICAgICAgIGNvbnN0IHRlc3QgPSBhd2FpdCB0aGlzLnByb2Nlc3NWYXJpYWJsZSh0ZXN0U3RyLCBwYXJhbXMpLnRoZW4odGhpcy5jaGFuZ2VBbmRPcilcbiAgICAgICAgLy8gLy8gbG9nLmRlYnVnKHBhcmFtcywgdGVzdClcbiAgICAgICAgaWYgKG5vZGVFdmFsKHRlc3QpKSB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5wcm9jZXNzRGVlcChfY2FzZSwgcGFyYW1zKVxuICAgICAgICAgIF9jYXNlLl8gPSBhd2FpdCB0aGlzLnByb2Nlc3NWYXJpYWJsZShfY2FzZS5fLCBwYXJhbXMpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgX2Nhc2UuXyA9ICcnXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGxvZy5kZWJ1ZyhfY2FzZSlcbiAgICB9KVxuICAgIHRoaXMubWVyZ2VfKGl0ZW0pXG4gICAgdGhpcy5wcm9jZXNzRml4KGl0ZW0sIHsgJDogeyBwcmVmaXhPdmVycmlkZXM6ICdhbmQgfG9yICcsIHByZWZpeDogJ1dIRVJFJyB9IH0pXG4gICAgLy8gbG9nLmRlYnVnKGl0ZW0sICdpdGVtJylcbiAgfVxuXG4gIGFzeW5jIHByb2Nlc3NTZXQoaXRlbSwgcGFyYW1zKSB7XG4gICAgLy8gbG9nLmluZm8oJy0tLSBwcm9jZXNzIHNldCcpXG4gICAgLy8gbG9nLmRlYnVnKGl0ZW0sICdpdGVtJylcbiAgICBhd2FpdCBQcm9taXNlLmVhY2goaXRlbS4kJCwgYXN5bmMgX2Nhc2UgPT4ge1xuICAgICAgLy8gbG9nLmRlYnVnKF9jYXNlLCAnX2Nhc2UnKVxuICAgICAgY29uc3QgdGVzdFN0ciA9IGdldChfY2FzZSwgJyQudGVzdCcpXG4gICAgICBpZiAodGVzdFN0cikge1xuICAgICAgICBjb25zdCB0ZXN0ID0gYXdhaXQgdGhpcy5wcm9jZXNzVmFyaWFibGUodGVzdFN0ciwgcGFyYW1zKS50aGVuKHRoaXMuY2hhbmdlQW5kT3IpXG4gICAgICAgIC8vIC8vIGxvZy5kZWJ1ZyhwYXJhbXMsIHRlc3QpXG4gICAgICAgIGlmIChub2RlRXZhbCh0ZXN0KSkge1xuICAgICAgICAgIGF3YWl0IHRoaXMucHJvY2Vzc0RlZXAoX2Nhc2UsIHBhcmFtcylcbiAgICAgICAgICBfY2FzZS5fID0gYXdhaXQgdGhpcy5wcm9jZXNzVmFyaWFibGUoX2Nhc2UuXywgcGFyYW1zKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIF9jYXNlLl8gPSAnJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBsb2cuZGVidWcoX2Nhc2UpXG4gICAgfSlcbiAgICB0aGlzLm1lcmdlXyhpdGVtKVxuICAgIHRoaXMucHJvY2Vzc0ZpeChpdGVtLCB7ICQ6IHsgc3VmZml4T3ZlcnJpZGVzOiAnLCcsIHByZWZpeDogJ1NFVCcgfSB9KVxuICAgIC8vIGxvZy5kZWJ1ZyhpdGVtLCAnaXRlbScpXG4gIH1cblxuICBhc3luYyBwcm9jZXNzRm9yZWFjaChpdGVtLCBwYXJhbXMpIHtcbiAgICAvLyBsb2cuaW5mbygnLS0tIHByb2Nlc3MgZm9yZWFjaCcpXG4gICAgLy8gbG9nLmRlYnVnKGl0ZW0sICdpdGVtJylcbiAgICBhd2FpdCB0aGlzLnByb2Nlc3NEZWVwKGl0ZW0sIHBhcmFtcylcbiAgICBjb25zdCBjb2xsZWN0aW9uID0gZ2V0KHBhcmFtcywgaXRlbS4kLmNvbGxlY3Rpb24pIHx8IFtdXG4gICAgY29uc3QgcHJvY2Vzc2VkQXJyID0gW11cbiAgICAvLyBsb2cuZGVidWcoY29sbGVjdGlvbiwgJ2NvbGxlY3Rpb24nKVxuICAgIGF3YWl0IFByb21pc2UuZWFjaChjb2xsZWN0aW9uLCBhc3luYyAoY29sLCBpZHgpID0+IHtcbiAgICAgIGNvbnN0IHFyeSA9IGF3YWl0IHRoaXMucHJvY2Vzc1ZhcmlhYmxlKGl0ZW0uXywge1xuICAgICAgICBbaXRlbS4kLml0ZW1dOiBjb2wsXG4gICAgICAgIFtpdGVtLiQuaW5kZXhdOiBpZHhcbiAgICAgIH0pXG4gICAgICBwcm9jZXNzZWRBcnIucHVzaChxcnkpXG4gICAgfSlcbiAgICBpdGVtLl8gPSBwcm9jZXNzZWRBcnIuam9pbihpdGVtLiQuc2VwYXJhdG9yKVxuICAgIGl0ZW0uJC5zdWZmaXhPdmVycmlkZXMgPSBpdGVtLiQuc2VwYXJhdG9yXG4gICAgaXRlbS4kLnByZWZpeCA9IGl0ZW0uJC5vcGVuXG4gICAgaXRlbS4kLnN1ZmZpeCA9IGl0ZW0uJC5jbG9zZVxuICAgIHRoaXMucHJvY2Vzc0ZpeChpdGVtLCBpdGVtKVxuICAgIC8vIGxvZy5kZWJ1ZyhpdGVtLCAnaXRlbScpXG4gIH1cblxuICBhc3luYyBwcm9jZXNzQmluZChpdGVtLCBwYXJhbXMpIHtcbiAgICAvLyBsb2cuaW5mbygnLS0tIHByb2Nlc3MgYmluZCcpXG4gICAgLy8gbG9nLmRlYnVnKGl0ZW0sICdpdGVtJylcbiAgICBjb25zdCBzID0gYXdhaXQgdGhpcy5wcm9jZXNzVmFyaWFibGUoaXRlbS4kLnZhbHVlLCBwYXJhbXMpLnRoZW4odGhpcy5jaGFuZ2VBbmRPcilcbiAgICBwYXJhbXNbaXRlbS4kLm5hbWVdID0gbm9kZUV2YWwocylcbiAgfVxuXG4gIGFzeW5jIHByb2Nlc3NWYXJpYWJsZShxcnksIHBhcmFtcykge1xuICAgIGxldCByc3RcbiAgICBpZiAoIXBhcmFtcykge1xuICAgICAgcnN0ID0gcXJ5XG4gICAgfVxuXG4gICAgY29uc3QgZXNjYXBlID0gc3Fsc3RyaW5nLmVzY2FwZVxuICAgIGNvbnN0IHJlZyA9IGNvbmZpZy5zcWwucXVlcnlGb3JtYXQgPyBuZXcgUmVnRXhwKGNvbmZpZy5zcWwucXVlcnlGb3JtYXQsICdnJykgOiAvI3soW1xcd18uXSspfS9nXG4gICAgcnN0ID0gcXJ5XG4gICAgICAucmVwbGFjZSgvXFwpL2csICcgKScpXG4gICAgICAucmVwbGFjZSgvXFwoIFxcKS9nLCAnKCknKVxuICAgICAgLnJlcGxhY2UocmVnLCAodHh0LCBrZXkpID0+IHtcbiAgICAgICAga2V5ID0ga2V5LnJlcGxhY2UoL1xcKFxcKS9nLCAnJylcbiAgICAgICAgbGV0IHZhbCA9IGdldChwYXJhbXMsIGtleSlcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24odmFsKSkge1xuICAgICAgICAgIHZhbCA9IHZhbCgpXG4gICAgICAgIH0gZWxzZSBpZiAoaXNPYmplY3QodmFsKSB8fCBpc0FycmF5KHZhbCkpIHtcbiAgICAgICAgICB2YWwgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVzY2FwZSh2YWwsIGNvbmZpZy5zcWwuc3RyaW5naWZ5T2JqZWN0cywgY29uZmlnLnNxbC50aW1lem9uZSlcbiAgICAgIH0pXG4gICAgcmV0dXJuIHJzdFxuICAgICAgLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKVxuICAgICAgLnJlcGxhY2UoL1xccysvZywgJyAnKVxuICAgICAgLnJlcGxhY2UoL05VTEwvZywgJ3VuZGVmaW5lZCcpXG4gIH1cblxuICBhc3luYyBjaGFuZ2VBbmRPcihzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyBhbmQgL2dpLCAnICYmICcpLnJlcGxhY2UoLyBvciAvZ2ksICcgfHwgJylcbiAgfVxuXG4gIHByb2Nlc3NGaXgoaXRlbSwgeG1sKSB7XG4gICAgaWYgKHhtbC4kLnByZWZpeE92ZXJyaWRlcykge1xuICAgICAgY29uc3QgcmVnID0gbmV3IFJlZ0V4cChgXiR7eG1sLiQucHJlZml4T3ZlcnJpZGVzfWAsICdnaScpXG4gICAgICBpdGVtLl8gPSBpdGVtLl8ucmVwbGFjZShyZWcsICcnKVxuICAgIH1cbiAgICAvLyBsb2cuZGVidWcoJ2ZpeCcsIGl0ZW0uXylcbiAgICBpZiAoeG1sLiQuc3VmZml4T3ZlcnJpZGVzKSB7XG4gICAgICBjb25zdCByZWcgPSBuZXcgUmVnRXhwKGAke3htbC4kLnN1ZmZpeE92ZXJyaWRlc30kYCwgJ2dpJylcbiAgICAgIGl0ZW0uXyA9IGl0ZW0uXy5yZXBsYWNlKHJlZywgJycpXG4gICAgfVxuICAgIC8vIGxvZy5kZWJ1ZygnZml4JywgJ3wnICsgaXRlbS5fICsgJ3wnKVxuICAgIGlmICghaXNFbXB0eShpdGVtLl8pKSB7XG4gICAgICBpdGVtLl8gPSBgJHt4bWwuJC5wcmVmaXggfHwgJyd9ICR7aXRlbS5ffSAke3htbC4kLnN1ZmZpeCB8fCAnJ31gXG4gICAgfVxuICAgIC8vIGxvZy5kZWJ1ZygnZml4JywgaXRlbS5fKVxuICB9XG5cbiAgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyKHN0cikge1xuICAgIHJldHVybiBzdHIuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBzdHIuc2xpY2UoMSlcbiAgfVxuXG4gIG1lcmdlXyh4bWwsIGNob29zZSkge1xuICAgIGNvbnN0IHByb2Nlc3NlZEFyciA9IFtdXG4gICAgZm9yRWFjaCh4bWwuJCQsIGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0uXykge1xuICAgICAgICBwcm9jZXNzZWRBcnIucHVzaChpdGVtLl8pXG5cbiAgICAgICAgaWYgKGNob29zZSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBpdGVtLl8gJiYgcHJvY2Vzc2VkQXJyLnB1c2goaXRlbS5fKVxuICAgIH0pXG4gICAgeG1sLl8gPSBwcm9jZXNzZWRBcnIuam9pbignICcpXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbmV3IE15YmF0aXMzKClcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvY3JlYXRlQ2xhc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJibHVlYmlyZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1ldmFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3Fsc3RyaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInhtbDJqc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9