import {
  __commonJS,
  __esm,
  __export,
  __name,
  __require,
  __toCommonJS,
  __toESM,
  init_esm
} from "./chunk-OOYLPNSB.mjs";

// node_modules/@opentelemetry/api-logs/build/src/types/LogRecord.js
var require_LogRecord = __commonJS({
  "node_modules/@opentelemetry/api-logs/build/src/types/LogRecord.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SeverityNumber = void 0;
    var SeverityNumber;
    (function(SeverityNumber2) {
      SeverityNumber2[SeverityNumber2["UNSPECIFIED"] = 0] = "UNSPECIFIED";
      SeverityNumber2[SeverityNumber2["TRACE"] = 1] = "TRACE";
      SeverityNumber2[SeverityNumber2["TRACE2"] = 2] = "TRACE2";
      SeverityNumber2[SeverityNumber2["TRACE3"] = 3] = "TRACE3";
      SeverityNumber2[SeverityNumber2["TRACE4"] = 4] = "TRACE4";
      SeverityNumber2[SeverityNumber2["DEBUG"] = 5] = "DEBUG";
      SeverityNumber2[SeverityNumber2["DEBUG2"] = 6] = "DEBUG2";
      SeverityNumber2[SeverityNumber2["DEBUG3"] = 7] = "DEBUG3";
      SeverityNumber2[SeverityNumber2["DEBUG4"] = 8] = "DEBUG4";
      SeverityNumber2[SeverityNumber2["INFO"] = 9] = "INFO";
      SeverityNumber2[SeverityNumber2["INFO2"] = 10] = "INFO2";
      SeverityNumber2[SeverityNumber2["INFO3"] = 11] = "INFO3";
      SeverityNumber2[SeverityNumber2["INFO4"] = 12] = "INFO4";
      SeverityNumber2[SeverityNumber2["WARN"] = 13] = "WARN";
      SeverityNumber2[SeverityNumber2["WARN2"] = 14] = "WARN2";
      SeverityNumber2[SeverityNumber2["WARN3"] = 15] = "WARN3";
      SeverityNumber2[SeverityNumber2["WARN4"] = 16] = "WARN4";
      SeverityNumber2[SeverityNumber2["ERROR"] = 17] = "ERROR";
      SeverityNumber2[SeverityNumber2["ERROR2"] = 18] = "ERROR2";
      SeverityNumber2[SeverityNumber2["ERROR3"] = 19] = "ERROR3";
      SeverityNumber2[SeverityNumber2["ERROR4"] = 20] = "ERROR4";
      SeverityNumber2[SeverityNumber2["FATAL"] = 21] = "FATAL";
      SeverityNumber2[SeverityNumber2["FATAL2"] = 22] = "FATAL2";
      SeverityNumber2[SeverityNumber2["FATAL3"] = 23] = "FATAL3";
      SeverityNumber2[SeverityNumber2["FATAL4"] = 24] = "FATAL4";
    })(SeverityNumber = exports.SeverityNumber || (exports.SeverityNumber = {}));
  }
});

// node_modules/@opentelemetry/api-logs/build/src/NoopLogger.js
var require_NoopLogger = __commonJS({
  "node_modules/@opentelemetry/api-logs/build/src/NoopLogger.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NOOP_LOGGER = exports.NoopLogger = void 0;
    var NoopLogger = class {
      static {
        __name(this, "NoopLogger");
      }
      emit(_logRecord) {
      }
    };
    exports.NoopLogger = NoopLogger;
    exports.NOOP_LOGGER = new NoopLogger();
  }
});

// node_modules/@opentelemetry/api-logs/build/src/NoopLoggerProvider.js
var require_NoopLoggerProvider = __commonJS({
  "node_modules/@opentelemetry/api-logs/build/src/NoopLoggerProvider.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NOOP_LOGGER_PROVIDER = exports.NoopLoggerProvider = void 0;
    var NoopLogger_1 = require_NoopLogger();
    var NoopLoggerProvider = class {
      static {
        __name(this, "NoopLoggerProvider");
      }
      getLogger(_name, _version, _options) {
        return new NoopLogger_1.NoopLogger();
      }
    };
    exports.NoopLoggerProvider = NoopLoggerProvider;
    exports.NOOP_LOGGER_PROVIDER = new NoopLoggerProvider();
  }
});

// node_modules/@opentelemetry/api-logs/build/src/ProxyLogger.js
var require_ProxyLogger = __commonJS({
  "node_modules/@opentelemetry/api-logs/build/src/ProxyLogger.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProxyLogger = void 0;
    var NoopLogger_1 = require_NoopLogger();
    var ProxyLogger = class {
      static {
        __name(this, "ProxyLogger");
      }
      constructor(_provider, name2, version, options) {
        this._provider = _provider;
        this.name = name2;
        this.version = version;
        this.options = options;
      }
      /**
       * Emit a log record. This method should only be used by log appenders.
       *
       * @param logRecord
       */
      emit(logRecord) {
        this._getLogger().emit(logRecord);
      }
      /**
       * Try to get a logger from the proxy logger provider.
       * If the proxy logger provider has no delegate, return a noop logger.
       */
      _getLogger() {
        if (this._delegate) {
          return this._delegate;
        }
        const logger2 = this._provider.getDelegateLogger(this.name, this.version, this.options);
        if (!logger2) {
          return NoopLogger_1.NOOP_LOGGER;
        }
        this._delegate = logger2;
        return this._delegate;
      }
    };
    exports.ProxyLogger = ProxyLogger;
  }
});

// node_modules/@opentelemetry/api-logs/build/src/ProxyLoggerProvider.js
var require_ProxyLoggerProvider = __commonJS({
  "node_modules/@opentelemetry/api-logs/build/src/ProxyLoggerProvider.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ProxyLoggerProvider = void 0;
    var NoopLoggerProvider_1 = require_NoopLoggerProvider();
    var ProxyLogger_1 = require_ProxyLogger();
    var ProxyLoggerProvider = class {
      static {
        __name(this, "ProxyLoggerProvider");
      }
      getLogger(name2, version, options) {
        var _a;
        return (_a = this.getDelegateLogger(name2, version, options)) !== null && _a !== void 0 ? _a : new ProxyLogger_1.ProxyLogger(this, name2, version, options);
      }
      getDelegate() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : NoopLoggerProvider_1.NOOP_LOGGER_PROVIDER;
      }
      /**
       * Set the delegate logger provider
       */
      setDelegate(delegate) {
        this._delegate = delegate;
      }
      getDelegateLogger(name2, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getLogger(name2, version, options);
      }
    };
    exports.ProxyLoggerProvider = ProxyLoggerProvider;
  }
});

// node_modules/@opentelemetry/api-logs/build/src/platform/node/globalThis.js
var require_globalThis = __commonJS({
  "node_modules/@opentelemetry/api-logs/build/src/platform/node/globalThis.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports._globalThis = void 0;
    exports._globalThis = typeof globalThis === "object" ? globalThis : global;
  }
});

// node_modules/@opentelemetry/api-logs/build/src/platform/node/index.js
var require_node = __commonJS({
  "node_modules/@opentelemetry/api-logs/build/src/platform/node/index.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports._globalThis = void 0;
    var globalThis_1 = require_globalThis();
    Object.defineProperty(exports, "_globalThis", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return globalThis_1._globalThis;
    }, "get") });
  }
});

// node_modules/@opentelemetry/api-logs/build/src/platform/index.js
var require_platform = __commonJS({
  "node_modules/@opentelemetry/api-logs/build/src/platform/index.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports._globalThis = void 0;
    var node_1 = require_node();
    Object.defineProperty(exports, "_globalThis", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return node_1._globalThis;
    }, "get") });
  }
});

// node_modules/@opentelemetry/api-logs/build/src/internal/global-utils.js
var require_global_utils = __commonJS({
  "node_modules/@opentelemetry/api-logs/build/src/internal/global-utils.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.API_BACKWARDS_COMPATIBILITY_VERSION = exports.makeGetter = exports._global = exports.GLOBAL_LOGS_API_KEY = void 0;
    var platform_1 = require_platform();
    exports.GLOBAL_LOGS_API_KEY = Symbol.for("io.opentelemetry.js.api.logs");
    exports._global = platform_1._globalThis;
    function makeGetter(requiredVersion, instance, fallback) {
      return (version) => version === requiredVersion ? instance : fallback;
    }
    __name(makeGetter, "makeGetter");
    exports.makeGetter = makeGetter;
    exports.API_BACKWARDS_COMPATIBILITY_VERSION = 1;
  }
});

// node_modules/@opentelemetry/api-logs/build/src/api/logs.js
var require_logs = __commonJS({
  "node_modules/@opentelemetry/api-logs/build/src/api/logs.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LogsAPI = void 0;
    var global_utils_1 = require_global_utils();
    var NoopLoggerProvider_1 = require_NoopLoggerProvider();
    var ProxyLoggerProvider_1 = require_ProxyLoggerProvider();
    var LogsAPI = class _LogsAPI {
      static {
        __name(this, "LogsAPI");
      }
      constructor() {
        this._proxyLoggerProvider = new ProxyLoggerProvider_1.ProxyLoggerProvider();
      }
      static getInstance() {
        if (!this._instance) {
          this._instance = new _LogsAPI();
        }
        return this._instance;
      }
      setGlobalLoggerProvider(provider) {
        if (global_utils_1._global[global_utils_1.GLOBAL_LOGS_API_KEY]) {
          return this.getLoggerProvider();
        }
        global_utils_1._global[global_utils_1.GLOBAL_LOGS_API_KEY] = (0, global_utils_1.makeGetter)(global_utils_1.API_BACKWARDS_COMPATIBILITY_VERSION, provider, NoopLoggerProvider_1.NOOP_LOGGER_PROVIDER);
        this._proxyLoggerProvider.setDelegate(provider);
        return provider;
      }
      /**
       * Returns the global logger provider.
       *
       * @returns LoggerProvider
       */
      getLoggerProvider() {
        var _a, _b;
        return (_b = (_a = global_utils_1._global[global_utils_1.GLOBAL_LOGS_API_KEY]) === null || _a === void 0 ? void 0 : _a.call(global_utils_1._global, global_utils_1.API_BACKWARDS_COMPATIBILITY_VERSION)) !== null && _b !== void 0 ? _b : this._proxyLoggerProvider;
      }
      /**
       * Returns a logger from the global logger provider.
       *
       * @returns Logger
       */
      getLogger(name2, version, options) {
        return this.getLoggerProvider().getLogger(name2, version, options);
      }
      /** Remove the global logger provider */
      disable() {
        delete global_utils_1._global[global_utils_1.GLOBAL_LOGS_API_KEY];
        this._proxyLoggerProvider = new ProxyLoggerProvider_1.ProxyLoggerProvider();
      }
    };
    exports.LogsAPI = LogsAPI;
  }
});

// node_modules/@opentelemetry/api-logs/build/src/index.js
var require_src = __commonJS({
  "node_modules/@opentelemetry/api-logs/build/src/index.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.logs = exports.ProxyLoggerProvider = exports.ProxyLogger = exports.NoopLoggerProvider = exports.NOOP_LOGGER_PROVIDER = exports.NoopLogger = exports.NOOP_LOGGER = exports.SeverityNumber = void 0;
    var LogRecord_1 = require_LogRecord();
    Object.defineProperty(exports, "SeverityNumber", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return LogRecord_1.SeverityNumber;
    }, "get") });
    var NoopLogger_1 = require_NoopLogger();
    Object.defineProperty(exports, "NOOP_LOGGER", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return NoopLogger_1.NOOP_LOGGER;
    }, "get") });
    Object.defineProperty(exports, "NoopLogger", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return NoopLogger_1.NoopLogger;
    }, "get") });
    var NoopLoggerProvider_1 = require_NoopLoggerProvider();
    Object.defineProperty(exports, "NOOP_LOGGER_PROVIDER", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return NoopLoggerProvider_1.NOOP_LOGGER_PROVIDER;
    }, "get") });
    Object.defineProperty(exports, "NoopLoggerProvider", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return NoopLoggerProvider_1.NoopLoggerProvider;
    }, "get") });
    var ProxyLogger_1 = require_ProxyLogger();
    Object.defineProperty(exports, "ProxyLogger", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return ProxyLogger_1.ProxyLogger;
    }, "get") });
    var ProxyLoggerProvider_1 = require_ProxyLoggerProvider();
    Object.defineProperty(exports, "ProxyLoggerProvider", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return ProxyLoggerProvider_1.ProxyLoggerProvider;
    }, "get") });
    var logs_1 = require_logs();
    exports.logs = logs_1.LogsAPI.getInstance();
  }
});

// node_modules/@google-cloud/precise-date/build/src/index.js
var require_src2 = __commonJS({
  "node_modules/@google-cloud/precise-date/build/src/index.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PreciseDate = void 0;
    var FULL_ISO_REG = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d{4,9}Z/;
    var NO_BIG_INT = "BigInt only available in Node >= v10.7. Consider using getFullTimeString instead.";
    var Sign;
    (function(Sign2) {
      Sign2[Sign2["NEGATIVE"] = -1] = "NEGATIVE";
      Sign2[Sign2["POSITIVE"] = 1] = "POSITIVE";
      Sign2[Sign2["ZERO"] = 0] = "ZERO";
    })(Sign || (Sign = {}));
    var PreciseDate2 = class _PreciseDate extends Date {
      static {
        __name(this, "PreciseDate");
      }
      constructor(time) {
        super();
        this._micros = 0;
        this._nanos = 0;
        if (time && typeof time !== "number" && !(time instanceof Date)) {
          this.setFullTime(_PreciseDate.parseFull(time));
          return;
        }
        const args = Array.from(arguments);
        const dateFields = args.slice(0, 7);
        const date = new Date(...dateFields);
        const nanos = args.length === 9 ? args.pop() : 0;
        const micros = args.length === 8 ? args.pop() : 0;
        this.setTime(date.getTime());
        this.setMicroseconds(micros);
        this.setNanoseconds(nanos);
      }
      /**
       * Returns the specified date represented in nanoseconds according to
       * universal time.
       *
       * **NOTE:** Because this method returns a `BigInt` it requires Node >= v10.7.
       * Use {@link PreciseDate#getFullTimeString} to get the time as a string.
       *
       * @see {@link https://github.com/tc39/proposal-bigint|BigInt}
       *
       * @throws {error} If `BigInt` is unavailable.
       * @returns {bigint}
       *
       * @example
       * const date = new PreciseDate('2019-02-08T10:34:29.481145231Z');
       *
       * console.log(date.getFullTime());
       * // expected output: 1549622069481145231n
       */
      getFullTime() {
        if (typeof BigInt !== "function") {
          throw new Error(NO_BIG_INT);
        }
        return BigInt(this.getFullTimeString());
      }
      /**
       * Returns a string of the specified date represented in nanoseconds according
       * to universal time.
       *
       * @returns {string}
       *
       * @example
       * const date = new PreciseDate('2019-02-08T10:34:29.481145231Z');
       *
       * console.log(date.getFullTimeString());
       * // expected output: "1549622069481145231"
       */
      getFullTimeString() {
        const seconds = this._getSeconds();
        let nanos = this._getNanos();
        if (nanos && Math.sign(seconds) === Sign.NEGATIVE) {
          nanos = 1e9 - nanos;
        }
        return `${seconds}${padLeft(nanos, 9)}`;
      }
      /**
       * Returns the microseconds in the specified date according to universal time.
       *
       * @returns {number}
       *
       * @example
       * const date = new PreciseDate('2019-02-08T10:34:29.481145Z');
       *
       * console.log(date.getMicroseconds());
       * // expected output: 145
       */
      getMicroseconds() {
        return this._micros;
      }
      /**
       * Returns the nanoseconds in the specified date according to universal time.
       *
       * @returns {number}
       *
       * @example
       * const date = new PreciseDate('2019-02-08T10:34:29.481145231Z');
       *
       * console.log(date.getNanoseconds());
       * // expected output: 231
       */
      getNanoseconds() {
        return this._nanos;
      }
      /**
       * Sets the microseconds for a specified date according to universal time.
       *
       * @param {number} microseconds A number representing the microseconds.
       * @returns {string} Returns a string representing the nanoseconds in the
       *     specified date according to universal time.
       *
       * @example
       * const date = new PreciseDate();
       *
       * date.setMicroseconds(149);
       *
       * console.log(date.getMicroseconds());
       * // expected output: 149
       */
      setMicroseconds(micros) {
        const abs = Math.abs(micros);
        let millis = this.getUTCMilliseconds();
        if (abs >= 1e3) {
          millis += Math.floor(abs / 1e3) * Math.sign(micros);
          micros %= 1e3;
        }
        if (Math.sign(micros) === Sign.NEGATIVE) {
          millis -= 1;
          micros += 1e3;
        }
        this._micros = micros;
        this.setUTCMilliseconds(millis);
        return this.getFullTimeString();
      }
      /**
       * Sets the nanoseconds for a specified date according to universal time.
       *
       * @param {number} nanoseconds A number representing the nanoseconds.
       * @returns {string} Returns a string representing the nanoseconds in the
       *     specified date according to universal time.
       *
       * @example
       * const date = new PreciseDate();
       *
       * date.setNanoseconds(231);
       *
       * console.log(date.getNanoseconds());
       * // expected output: 231
       */
      setNanoseconds(nanos) {
        const abs = Math.abs(nanos);
        let micros = this._micros;
        if (abs >= 1e3) {
          micros += Math.floor(abs / 1e3) * Math.sign(nanos);
          nanos %= 1e3;
        }
        if (Math.sign(nanos) === Sign.NEGATIVE) {
          micros -= 1;
          nanos += 1e3;
        }
        this._nanos = nanos;
        return this.setMicroseconds(micros);
      }
      /**
       * Sets the PreciseDate object to the time represented by a number of
       * nanoseconds since January 1, 1970, 00:00:00 UTC.
       *
       * @param {bigint|number|string} time Value representing the number of
       *     nanoseconds since January 1, 1970, 00:00:00 UTC.
       * @returns {string} Returns a string representing the nanoseconds in the
       *     specified date according to universal time (effectively, the value of
       *     the argument).
       *
       * @see {@link https://github.com/tc39/proposal-bigint|BigInt}
       *
       * @example <caption>With a nanosecond string.</caption>
       * const date = new PreciseDate();
       * date.setFullTime('1549622069481145231');
       *
       * @example <caption>With a BigInt</caption>
       * date.setFullTime(1549622069481145231n);
       */
      setFullTime(time) {
        if (typeof time !== "string") {
          time = time.toString();
        }
        const sign = Math.sign(Number(time));
        time = time.replace(/^-/, "");
        const seconds = Number(time.substr(0, time.length - 9)) * sign;
        const nanos = Number(time.substr(-9)) * sign;
        this.setTime(seconds * 1e3);
        return this.setNanoseconds(nanos);
      }
      /**
       * Sets the PreciseDate object to the time represented by a number of
       * milliseconds since January 1, 1970, 00:00:00 UTC. Calling this method will
       * reset both the microseconds and nanoseconds to 0.
       *
       * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setTime|Date#setTime}
       *
       * @param {number} time Value representing the number of milliseconds since
       *     January 1, 1970, 00:00:00 UTC.
       * @returns {string} The number of milliseconds between January 1, 1970,
       *     00:00:00 UTC and the updated date (effectively, the value of the
       *     argument).
       */
      setTime(time) {
        this._micros = 0;
        this._nanos = 0;
        return super.setTime(time);
      }
      /**
       * Returns a string in RFC 3339 format. Unlike the native `Date#toISOString`,
       * this will return 9 digits to represent sub-second precision.
       *
       * @see {@link https://tools.ietf.org/html/rfc3339|RFC 3339}
       *
       * @returns {string}
       *
       * @example
       * const date = new PreciseDate(1549622069481145231n);
       *
       * console.log(date.toISOString());
       * // expected output: "2019-02-08T10:34:29.481145231Z"
       */
      toISOString() {
        const micros = padLeft(this._micros, 3);
        const nanos = padLeft(this._nanos, 3);
        return super.toISOString().replace(/z$/i, `${micros}${nanos}Z`);
      }
      /**
       * Returns an object representing the specified date according to universal
       * time.
       *
       * @see {@link https://developers.google.com/protocol-buffers/docs/reference/google.protobuf#timestamp|google.protobuf.Timestamp}
       *
       * @returns {DateStruct}
       *
       * @example
       * const date = new PreciseDate('2019-02-08T10:34:29.481145231Z');
       *
       * console.log(date.toStruct());
       * // expected output: {seconds: 1549622069, nanos: 481145231}
       */
      toStruct() {
        let seconds = this._getSeconds();
        const nanos = this._getNanos();
        const sign = Math.sign(seconds);
        if (sign === Sign.NEGATIVE && nanos) {
          seconds -= 1;
        }
        return { seconds, nanos };
      }
      /**
       * Returns a tuple representing the specified date according to universal
       * time.
       *
       * @returns {DateTuple}
       *
       * @example
       * const date = new PreciseDate('2019-02-08T10:34:29.481145231Z');
       *
       * console.log(date.toTuple());
       * // expected output: [1549622069, 481145231]
       */
      toTuple() {
        const { seconds, nanos } = this.toStruct();
        return [seconds, nanos];
      }
      /**
       * Returns the total number of seconds in the specified date since Unix epoch.
       * Numbers representing < epoch will be negative.
       *
       * @private
       *
       * @returns {number}
       */
      _getSeconds() {
        const time = this.getTime();
        const sign = Math.sign(time);
        return Math.floor(Math.abs(time) / 1e3) * sign;
      }
      /**
       * Returns the sub-second precision of the specified date. This will always be
       * a positive number.
       *
       * @private
       *
       * @returns {number}
       */
      _getNanos() {
        const msInNanos = this.getUTCMilliseconds() * 1e6;
        const microsInNanos = this._micros * 1e3;
        return this._nanos + msInNanos + microsInNanos;
      }
      /**
       * Parses a precise time.
       *
       * @static
       *
       * @param {string|bigint|DateTuple|DateStruct} time The precise time value.
       * @returns {string} Returns a string representing the nanoseconds in the
       *     specified date according to universal time.
       *
       * @example <caption>From a RFC 3339 formatted string.</caption>
       * const time = PreciseDate.parseFull('2019-02-08T10:34:29.481145231Z');
       * console.log(time); // expected output: "1549622069481145231"
       *
       * @example <caption>From a nanosecond timestamp string.</caption>
       * const time = PreciseDate.parseFull('1549622069481145231');
       * console.log(time); // expected output: "1549622069481145231"
       *
       * @example <caption>From a BigInt (requires Node >= v10.7)</caption>
       * const time = PreciseDate.parseFull(1549622069481145231n);
       * console.log(time); // expected output: "1549622069481145231"
       *
       * @example <caption>From a tuple.</caption>
       * const time = PreciseDate.parseFull([1549622069, 481145231]);
       * console.log(time); // expected output: "1549622069481145231"
       *
       * @example <caption>From an object.</caption>
       * const struct = {seconds: 1549622069, nanos: 481145231};
       * const time = PreciseDate.parseFull(struct);
       * console.log(time); // expected output: "1549622069481145231"
       */
      static parseFull(time) {
        const date = new _PreciseDate();
        if (Array.isArray(time)) {
          const [seconds, nanos] = time;
          time = { seconds, nanos };
        }
        if (isFullTime(time)) {
          date.setFullTime(time);
        } else if (isStruct(time)) {
          const { seconds, nanos } = parseProto(time);
          date.setTime(seconds * 1e3);
          date.setNanoseconds(nanos);
        } else if (isFullISOString(time)) {
          date.setFullTime(parseFullISO(time));
        } else {
          date.setTime(new Date(time).getTime());
        }
        return date.getFullTimeString();
      }
      /**
       * Accepts the same number parameters as the PreciseDate constructor, but
       * treats them as UTC. It returns a string that represents the number of
       * nanoseconds since January 1, 1970, 00:00:00 UTC.
       *
       * **NOTE:** Because this method returns a `BigInt` it requires Node >= v10.7.
       *
       * @see {@link https://github.com/tc39/proposal-bigint|BigInt}
       *
       * @static
       *
       * @throws {error} If `BigInt` is unavailable.
       *
       * @param {...number} [dateFields] The date fields.
       * @returns {bigint}
       *
       * @example
       * const time = PreciseDate.fullUTC(2019, 1, 8, 10, 34, 29, 481, 145, 231);
       * console.log(time); // expected output: 1549622069481145231n
       */
      static fullUTC(...args) {
        if (typeof BigInt !== "function") {
          throw new Error(NO_BIG_INT);
        }
        return BigInt(_PreciseDate.fullUTCString(...args));
      }
      /**
       * Accepts the same number parameters as the PreciseDate constructor, but
       * treats them as UTC. It returns a string that represents the number of
       * nanoseconds since January 1, 1970, 00:00:00 UTC.
       *
       * @static
       *
       * @param {...number} [dateFields] The date fields.
       * @returns {string}
       *
       * @example
       * const time = PreciseDate.fullUTCString(2019, 1, 8, 10, 34, 29, 481, 145,
       * 231); console.log(time); // expected output: '1549622069481145231'
       */
      static fullUTCString(...args) {
        const milliseconds = Date.UTC(...args.slice(0, 7));
        const date = new _PreciseDate(milliseconds);
        if (args.length === 9) {
          date.setNanoseconds(args.pop());
        }
        if (args.length === 8) {
          date.setMicroseconds(args.pop());
        }
        return date.getFullTimeString();
      }
    };
    exports.PreciseDate = PreciseDate2;
    function parseFullISO(time) {
      let digits = "0";
      time = time.replace(/\.(\d+)/, ($0, $1) => {
        digits = $1;
        return ".000";
      });
      const nanos = Number(padRight(digits, 9));
      const date = new PreciseDate2(time);
      return date.setNanoseconds(nanos);
    }
    __name(parseFullISO, "parseFullISO");
    function parseProto({ seconds = 0, nanos = 0 }) {
      if (typeof seconds.toNumber === "function") {
        seconds = seconds.toNumber();
      }
      seconds = Number(seconds);
      nanos = Number(nanos);
      return { seconds, nanos };
    }
    __name(parseProto, "parseProto");
    function isFullTime(time) {
      return typeof time === "bigint" || typeof time === "string" && /^\d+$/.test(time);
    }
    __name(isFullTime, "isFullTime");
    function isStruct(time) {
      return typeof time === "object" && typeof time.seconds !== "undefined" || typeof time.nanos === "number";
    }
    __name(isStruct, "isStruct");
    function isFullISOString(time) {
      return typeof time === "string" && FULL_ISO_REG.test(time);
    }
    __name(isFullISOString, "isFullISOString");
    function padLeft(n2, min) {
      const padding = getPadding(n2, min);
      return `${padding}${n2}`;
    }
    __name(padLeft, "padLeft");
    function padRight(n2, min) {
      const padding = getPadding(n2, min);
      return `${n2}${padding}`;
    }
    __name(padRight, "padRight");
    function getPadding(n2, min) {
      const size = Math.max(min - n2.toString().length, 0);
      return "0".repeat(size);
    }
    __name(getPadding, "getPadding");
  }
});

// node_modules/@opentelemetry/api/build/esm/platform/node/globalThis.js
var _globalThis2;
var init_globalThis = __esm({
  "node_modules/@opentelemetry/api/build/esm/platform/node/globalThis.js"() {
    init_esm();
    _globalThis2 = typeof globalThis === "object" ? globalThis : global;
  }
});

// node_modules/@opentelemetry/api/build/esm/platform/node/index.js
var init_node = __esm({
  "node_modules/@opentelemetry/api/build/esm/platform/node/index.js"() {
    init_esm();
    init_globalThis();
  }
});

// node_modules/@opentelemetry/api/build/esm/platform/index.js
var init_platform = __esm({
  "node_modules/@opentelemetry/api/build/esm/platform/index.js"() {
    init_esm();
    init_node();
  }
});

// node_modules/@opentelemetry/api/build/esm/version.js
var VERSION;
var init_version = __esm({
  "node_modules/@opentelemetry/api/build/esm/version.js"() {
    init_esm();
    VERSION = "1.9.0";
  }
});

// node_modules/@opentelemetry/api/build/esm/internal/semver.js
function _makeCompatibilityCheck(ownVersion) {
  var acceptedVersions = /* @__PURE__ */ new Set([ownVersion]);
  var rejectedVersions = /* @__PURE__ */ new Set();
  var myVersionMatch = ownVersion.match(re);
  if (!myVersionMatch) {
    return function() {
      return false;
    };
  }
  var ownVersionParsed = {
    major: +myVersionMatch[1],
    minor: +myVersionMatch[2],
    patch: +myVersionMatch[3],
    prerelease: myVersionMatch[4]
  };
  if (ownVersionParsed.prerelease != null) {
    return /* @__PURE__ */ __name(function isExactmatch(globalVersion) {
      return globalVersion === ownVersion;
    }, "isExactmatch");
  }
  function _reject(v2) {
    rejectedVersions.add(v2);
    return false;
  }
  __name(_reject, "_reject");
  function _accept(v2) {
    acceptedVersions.add(v2);
    return true;
  }
  __name(_accept, "_accept");
  return /* @__PURE__ */ __name(function isCompatible2(globalVersion) {
    if (acceptedVersions.has(globalVersion)) {
      return true;
    }
    if (rejectedVersions.has(globalVersion)) {
      return false;
    }
    var globalVersionMatch = globalVersion.match(re);
    if (!globalVersionMatch) {
      return _reject(globalVersion);
    }
    var globalVersionParsed = {
      major: +globalVersionMatch[1],
      minor: +globalVersionMatch[2],
      patch: +globalVersionMatch[3],
      prerelease: globalVersionMatch[4]
    };
    if (globalVersionParsed.prerelease != null) {
      return _reject(globalVersion);
    }
    if (ownVersionParsed.major !== globalVersionParsed.major) {
      return _reject(globalVersion);
    }
    if (ownVersionParsed.major === 0) {
      if (ownVersionParsed.minor === globalVersionParsed.minor && ownVersionParsed.patch <= globalVersionParsed.patch) {
        return _accept(globalVersion);
      }
      return _reject(globalVersion);
    }
    if (ownVersionParsed.minor <= globalVersionParsed.minor) {
      return _accept(globalVersion);
    }
    return _reject(globalVersion);
  }, "isCompatible");
}
var re, isCompatible;
var init_semver = __esm({
  "node_modules/@opentelemetry/api/build/esm/internal/semver.js"() {
    init_esm();
    init_version();
    re = /^(\d+)\.(\d+)\.(\d+)(-(.+))?$/;
    __name(_makeCompatibilityCheck, "_makeCompatibilityCheck");
    isCompatible = _makeCompatibilityCheck(VERSION);
  }
});

// node_modules/@opentelemetry/api/build/esm/internal/global-utils.js
function registerGlobal2(type, instance, diag3, allowOverride) {
  var _a;
  if (allowOverride === void 0) {
    allowOverride = false;
  }
  var api = _global2[GLOBAL_OPENTELEMETRY_API_KEY] = (_a = _global2[GLOBAL_OPENTELEMETRY_API_KEY]) !== null && _a !== void 0 ? _a : {
    version: VERSION
  };
  if (!allowOverride && api[type]) {
    var err = new Error("@opentelemetry/api: Attempted duplicate registration of API: " + type);
    diag3.error(err.stack || err.message);
    return false;
  }
  if (api.version !== VERSION) {
    var err = new Error("@opentelemetry/api: Registration of version v" + api.version + " for " + type + " does not match previously registered API v" + VERSION);
    diag3.error(err.stack || err.message);
    return false;
  }
  api[type] = instance;
  diag3.debug("@opentelemetry/api: Registered a global for " + type + " v" + VERSION + ".");
  return true;
}
function getGlobal2(type) {
  var _a, _b;
  var globalVersion = (_a = _global2[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _a === void 0 ? void 0 : _a.version;
  if (!globalVersion || !isCompatible(globalVersion)) {
    return;
  }
  return (_b = _global2[GLOBAL_OPENTELEMETRY_API_KEY]) === null || _b === void 0 ? void 0 : _b[type];
}
function unregisterGlobal2(type, diag3) {
  diag3.debug("@opentelemetry/api: Unregistering a global for " + type + " v" + VERSION + ".");
  var api = _global2[GLOBAL_OPENTELEMETRY_API_KEY];
  if (api) {
    delete api[type];
  }
}
var major, GLOBAL_OPENTELEMETRY_API_KEY, _global2;
var init_global_utils = __esm({
  "node_modules/@opentelemetry/api/build/esm/internal/global-utils.js"() {
    init_esm();
    init_platform();
    init_version();
    init_semver();
    major = VERSION.split(".")[0];
    GLOBAL_OPENTELEMETRY_API_KEY = Symbol.for("opentelemetry.js.api." + major);
    _global2 = _globalThis2;
    __name(registerGlobal2, "registerGlobal");
    __name(getGlobal2, "getGlobal");
    __name(unregisterGlobal2, "unregisterGlobal");
  }
});

// node_modules/@opentelemetry/api/build/esm/diag/ComponentLogger.js
function logProxy(funcName, namespace, args) {
  var logger2 = getGlobal2("diag");
  if (!logger2) {
    return;
  }
  args.unshift(namespace);
  return logger2[funcName].apply(logger2, __spreadArray([], __read(args), false));
}
var __read, __spreadArray, DiagComponentLogger;
var init_ComponentLogger = __esm({
  "node_modules/@opentelemetry/api/build/esm/diag/ComponentLogger.js"() {
    init_esm();
    init_global_utils();
    __read = function(o2, n2) {
      var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
      if (!m2) return o2;
      var i2 = m2.call(o2), r2, ar = [], e;
      try {
        while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done) ar.push(r2.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r2 && !r2.done && (m2 = i2["return"])) m2.call(i2);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    };
    __spreadArray = function(to, from, pack) {
      if (pack || arguments.length === 2) for (var i2 = 0, l2 = from.length, ar; i2 < l2; i2++) {
        if (ar || !(i2 in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i2);
          ar[i2] = from[i2];
        }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    DiagComponentLogger = /** @class */
    function() {
      function DiagComponentLogger2(props) {
        this._namespace = props.namespace || "DiagComponentLogger";
      }
      __name(DiagComponentLogger2, "DiagComponentLogger");
      DiagComponentLogger2.prototype.debug = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return logProxy("debug", this._namespace, args);
      };
      DiagComponentLogger2.prototype.error = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return logProxy("error", this._namespace, args);
      };
      DiagComponentLogger2.prototype.info = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return logProxy("info", this._namespace, args);
      };
      DiagComponentLogger2.prototype.warn = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return logProxy("warn", this._namespace, args);
      };
      DiagComponentLogger2.prototype.verbose = function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        return logProxy("verbose", this._namespace, args);
      };
      return DiagComponentLogger2;
    }();
    __name(logProxy, "logProxy");
  }
});

// node_modules/@opentelemetry/api/build/esm/diag/types.js
var DiagLogLevel;
var init_types = __esm({
  "node_modules/@opentelemetry/api/build/esm/diag/types.js"() {
    init_esm();
    (function(DiagLogLevel2) {
      DiagLogLevel2[DiagLogLevel2["NONE"] = 0] = "NONE";
      DiagLogLevel2[DiagLogLevel2["ERROR"] = 30] = "ERROR";
      DiagLogLevel2[DiagLogLevel2["WARN"] = 50] = "WARN";
      DiagLogLevel2[DiagLogLevel2["INFO"] = 60] = "INFO";
      DiagLogLevel2[DiagLogLevel2["DEBUG"] = 70] = "DEBUG";
      DiagLogLevel2[DiagLogLevel2["VERBOSE"] = 80] = "VERBOSE";
      DiagLogLevel2[DiagLogLevel2["ALL"] = 9999] = "ALL";
    })(DiagLogLevel || (DiagLogLevel = {}));
  }
});

// node_modules/@opentelemetry/api/build/esm/diag/internal/logLevelLogger.js
function createLogLevelDiagLogger(maxLevel, logger2) {
  if (maxLevel < DiagLogLevel.NONE) {
    maxLevel = DiagLogLevel.NONE;
  } else if (maxLevel > DiagLogLevel.ALL) {
    maxLevel = DiagLogLevel.ALL;
  }
  logger2 = logger2 || {};
  function _filterFunc(funcName, theLevel) {
    var theFunc = logger2[funcName];
    if (typeof theFunc === "function" && maxLevel >= theLevel) {
      return theFunc.bind(logger2);
    }
    return function() {
    };
  }
  __name(_filterFunc, "_filterFunc");
  return {
    error: _filterFunc("error", DiagLogLevel.ERROR),
    warn: _filterFunc("warn", DiagLogLevel.WARN),
    info: _filterFunc("info", DiagLogLevel.INFO),
    debug: _filterFunc("debug", DiagLogLevel.DEBUG),
    verbose: _filterFunc("verbose", DiagLogLevel.VERBOSE)
  };
}
var init_logLevelLogger = __esm({
  "node_modules/@opentelemetry/api/build/esm/diag/internal/logLevelLogger.js"() {
    init_esm();
    init_types();
    __name(createLogLevelDiagLogger, "createLogLevelDiagLogger");
  }
});

// node_modules/@opentelemetry/api/build/esm/api/diag.js
var __read2, __spreadArray2, API_NAME3, DiagAPI;
var init_diag = __esm({
  "node_modules/@opentelemetry/api/build/esm/api/diag.js"() {
    init_esm();
    init_ComponentLogger();
    init_logLevelLogger();
    init_types();
    init_global_utils();
    __read2 = function(o2, n2) {
      var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
      if (!m2) return o2;
      var i2 = m2.call(o2), r2, ar = [], e;
      try {
        while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done) ar.push(r2.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r2 && !r2.done && (m2 = i2["return"])) m2.call(i2);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    };
    __spreadArray2 = function(to, from, pack) {
      if (pack || arguments.length === 2) for (var i2 = 0, l2 = from.length, ar; i2 < l2; i2++) {
        if (ar || !(i2 in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i2);
          ar[i2] = from[i2];
        }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    API_NAME3 = "diag";
    DiagAPI = /** @class */
    function() {
      function DiagAPI2() {
        function _logProxy(funcName) {
          return function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            var logger2 = getGlobal2("diag");
            if (!logger2)
              return;
            return logger2[funcName].apply(logger2, __spreadArray2([], __read2(args), false));
          };
        }
        __name(_logProxy, "_logProxy");
        var self = this;
        var setLogger = /* @__PURE__ */ __name(function(logger2, optionsOrLogLevel) {
          var _a, _b, _c;
          if (optionsOrLogLevel === void 0) {
            optionsOrLogLevel = { logLevel: DiagLogLevel.INFO };
          }
          if (logger2 === self) {
            var err = new Error("Cannot use diag as the logger for itself. Please use a DiagLogger implementation like ConsoleDiagLogger or a custom implementation");
            self.error((_a = err.stack) !== null && _a !== void 0 ? _a : err.message);
            return false;
          }
          if (typeof optionsOrLogLevel === "number") {
            optionsOrLogLevel = {
              logLevel: optionsOrLogLevel
            };
          }
          var oldLogger = getGlobal2("diag");
          var newLogger = createLogLevelDiagLogger((_b = optionsOrLogLevel.logLevel) !== null && _b !== void 0 ? _b : DiagLogLevel.INFO, logger2);
          if (oldLogger && !optionsOrLogLevel.suppressOverrideMessage) {
            var stack = (_c = new Error().stack) !== null && _c !== void 0 ? _c : "<failed to generate stacktrace>";
            oldLogger.warn("Current logger will be overwritten from " + stack);
            newLogger.warn("Current logger will overwrite one already registered from " + stack);
          }
          return registerGlobal2("diag", newLogger, self, true);
        }, "setLogger");
        self.setLogger = setLogger;
        self.disable = function() {
          unregisterGlobal2(API_NAME3, self);
        };
        self.createComponentLogger = function(options) {
          return new DiagComponentLogger(options);
        };
        self.verbose = _logProxy("verbose");
        self.debug = _logProxy("debug");
        self.info = _logProxy("info");
        self.warn = _logProxy("warn");
        self.error = _logProxy("error");
      }
      __name(DiagAPI2, "DiagAPI");
      DiagAPI2.instance = function() {
        if (!this._instance) {
          this._instance = new DiagAPI2();
        }
        return this._instance;
      };
      return DiagAPI2;
    }();
  }
});

// node_modules/@opentelemetry/api/build/esm/baggage/internal/baggage-impl.js
var __read3, __values, BaggageImpl;
var init_baggage_impl = __esm({
  "node_modules/@opentelemetry/api/build/esm/baggage/internal/baggage-impl.js"() {
    init_esm();
    __read3 = function(o2, n2) {
      var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
      if (!m2) return o2;
      var i2 = m2.call(o2), r2, ar = [], e;
      try {
        while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done) ar.push(r2.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r2 && !r2.done && (m2 = i2["return"])) m2.call(i2);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    };
    __values = function(o2) {
      var s = typeof Symbol === "function" && Symbol.iterator, m2 = s && o2[s], i2 = 0;
      if (m2) return m2.call(o2);
      if (o2 && typeof o2.length === "number") return {
        next: /* @__PURE__ */ __name(function() {
          if (o2 && i2 >= o2.length) o2 = void 0;
          return { value: o2 && o2[i2++], done: !o2 };
        }, "next")
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    BaggageImpl = /** @class */
    function() {
      function BaggageImpl2(entries) {
        this._entries = entries ? new Map(entries) : /* @__PURE__ */ new Map();
      }
      __name(BaggageImpl2, "BaggageImpl");
      BaggageImpl2.prototype.getEntry = function(key) {
        var entry = this._entries.get(key);
        if (!entry) {
          return void 0;
        }
        return Object.assign({}, entry);
      };
      BaggageImpl2.prototype.getAllEntries = function() {
        return Array.from(this._entries.entries()).map(function(_a) {
          var _b = __read3(_a, 2), k = _b[0], v2 = _b[1];
          return [k, v2];
        });
      };
      BaggageImpl2.prototype.setEntry = function(key, entry) {
        var newBaggage = new BaggageImpl2(this._entries);
        newBaggage._entries.set(key, entry);
        return newBaggage;
      };
      BaggageImpl2.prototype.removeEntry = function(key) {
        var newBaggage = new BaggageImpl2(this._entries);
        newBaggage._entries.delete(key);
        return newBaggage;
      };
      BaggageImpl2.prototype.removeEntries = function() {
        var e_1, _a;
        var keys = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          keys[_i] = arguments[_i];
        }
        var newBaggage = new BaggageImpl2(this._entries);
        try {
          for (var keys_1 = __values(keys), keys_1_1 = keys_1.next(); !keys_1_1.done; keys_1_1 = keys_1.next()) {
            var key = keys_1_1.value;
            newBaggage._entries.delete(key);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (keys_1_1 && !keys_1_1.done && (_a = keys_1.return)) _a.call(keys_1);
          } finally {
            if (e_1) throw e_1.error;
          }
        }
        return newBaggage;
      };
      BaggageImpl2.prototype.clear = function() {
        return new BaggageImpl2();
      };
      return BaggageImpl2;
    }();
  }
});

// node_modules/@opentelemetry/api/build/esm/baggage/internal/symbol.js
var baggageEntryMetadataSymbol;
var init_symbol = __esm({
  "node_modules/@opentelemetry/api/build/esm/baggage/internal/symbol.js"() {
    init_esm();
    baggageEntryMetadataSymbol = Symbol("BaggageEntryMetadata");
  }
});

// node_modules/@opentelemetry/api/build/esm/baggage/utils.js
function createBaggage(entries) {
  if (entries === void 0) {
    entries = {};
  }
  return new BaggageImpl(new Map(Object.entries(entries)));
}
function baggageEntryMetadataFromString(str) {
  if (typeof str !== "string") {
    diag.error("Cannot create baggage metadata from unknown type: " + typeof str);
    str = "";
  }
  return {
    __TYPE__: baggageEntryMetadataSymbol,
    toString: /* @__PURE__ */ __name(function() {
      return str;
    }, "toString")
  };
}
var diag;
var init_utils = __esm({
  "node_modules/@opentelemetry/api/build/esm/baggage/utils.js"() {
    init_esm();
    init_diag();
    init_baggage_impl();
    init_symbol();
    diag = DiagAPI.instance();
    __name(createBaggage, "createBaggage");
    __name(baggageEntryMetadataFromString, "baggageEntryMetadataFromString");
  }
});

// node_modules/@opentelemetry/api/build/esm/context/context.js
function createContextKey(description) {
  return Symbol.for(description);
}
var BaseContext, ROOT_CONTEXT;
var init_context = __esm({
  "node_modules/@opentelemetry/api/build/esm/context/context.js"() {
    init_esm();
    __name(createContextKey, "createContextKey");
    BaseContext = /** @class */
    /* @__PURE__ */ function() {
      function BaseContext2(parentContext) {
        var self = this;
        self._currentContext = parentContext ? new Map(parentContext) : /* @__PURE__ */ new Map();
        self.getValue = function(key) {
          return self._currentContext.get(key);
        };
        self.setValue = function(key, value) {
          var context2 = new BaseContext2(self._currentContext);
          context2._currentContext.set(key, value);
          return context2;
        };
        self.deleteValue = function(key) {
          var context2 = new BaseContext2(self._currentContext);
          context2._currentContext.delete(key);
          return context2;
        };
      }
      __name(BaseContext2, "BaseContext");
      return BaseContext2;
    }();
    ROOT_CONTEXT = new BaseContext();
  }
});

// node_modules/@opentelemetry/api/build/esm/diag/consoleLogger.js
var consoleMap, DiagConsoleLogger;
var init_consoleLogger = __esm({
  "node_modules/@opentelemetry/api/build/esm/diag/consoleLogger.js"() {
    init_esm();
    consoleMap = [
      { n: "error", c: "error" },
      { n: "warn", c: "warn" },
      { n: "info", c: "info" },
      { n: "debug", c: "debug" },
      { n: "verbose", c: "trace" }
    ];
    DiagConsoleLogger = /** @class */
    /* @__PURE__ */ function() {
      function DiagConsoleLogger2() {
        function _consoleFunc(funcName) {
          return function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            if (console) {
              var theFunc = console[funcName];
              if (typeof theFunc !== "function") {
                theFunc = console.log;
              }
              if (typeof theFunc === "function") {
                return theFunc.apply(console, args);
              }
            }
          };
        }
        __name(_consoleFunc, "_consoleFunc");
        for (var i2 = 0; i2 < consoleMap.length; i2++) {
          this[consoleMap[i2].n] = _consoleFunc(consoleMap[i2].c);
        }
      }
      __name(DiagConsoleLogger2, "DiagConsoleLogger");
      return DiagConsoleLogger2;
    }();
  }
});

// node_modules/@opentelemetry/api/build/esm/metrics/NoopMeter.js
function createNoopMeter() {
  return NOOP_METER;
}
var __extends, NoopMeter, NoopMetric, NoopCounterMetric, NoopUpDownCounterMetric, NoopGaugeMetric, NoopHistogramMetric, NoopObservableMetric, NoopObservableCounterMetric, NoopObservableGaugeMetric, NoopObservableUpDownCounterMetric, NOOP_METER, NOOP_COUNTER_METRIC, NOOP_GAUGE_METRIC, NOOP_HISTOGRAM_METRIC, NOOP_UP_DOWN_COUNTER_METRIC, NOOP_OBSERVABLE_COUNTER_METRIC, NOOP_OBSERVABLE_GAUGE_METRIC, NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
var init_NoopMeter = __esm({
  "node_modules/@opentelemetry/api/build/esm/metrics/NoopMeter.js"() {
    init_esm();
    __extends = /* @__PURE__ */ function() {
      var extendStatics = /* @__PURE__ */ __name(function(d2, b2) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
          d3.__proto__ = b3;
        } || function(d3, b3) {
          for (var p2 in b3) if (Object.prototype.hasOwnProperty.call(b3, p2)) d3[p2] = b3[p2];
        };
        return extendStatics(d2, b2);
      }, "extendStatics");
      return function(d2, b2) {
        if (typeof b2 !== "function" && b2 !== null)
          throw new TypeError("Class extends value " + String(b2) + " is not a constructor or null");
        extendStatics(d2, b2);
        function __() {
          this.constructor = d2;
        }
        __name(__, "__");
        d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
      };
    }();
    NoopMeter = /** @class */
    function() {
      function NoopMeter2() {
      }
      __name(NoopMeter2, "NoopMeter");
      NoopMeter2.prototype.createGauge = function(_name, _options) {
        return NOOP_GAUGE_METRIC;
      };
      NoopMeter2.prototype.createHistogram = function(_name, _options) {
        return NOOP_HISTOGRAM_METRIC;
      };
      NoopMeter2.prototype.createCounter = function(_name, _options) {
        return NOOP_COUNTER_METRIC;
      };
      NoopMeter2.prototype.createUpDownCounter = function(_name, _options) {
        return NOOP_UP_DOWN_COUNTER_METRIC;
      };
      NoopMeter2.prototype.createObservableGauge = function(_name, _options) {
        return NOOP_OBSERVABLE_GAUGE_METRIC;
      };
      NoopMeter2.prototype.createObservableCounter = function(_name, _options) {
        return NOOP_OBSERVABLE_COUNTER_METRIC;
      };
      NoopMeter2.prototype.createObservableUpDownCounter = function(_name, _options) {
        return NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC;
      };
      NoopMeter2.prototype.addBatchObservableCallback = function(_callback, _observables) {
      };
      NoopMeter2.prototype.removeBatchObservableCallback = function(_callback) {
      };
      return NoopMeter2;
    }();
    NoopMetric = /** @class */
    /* @__PURE__ */ function() {
      function NoopMetric2() {
      }
      __name(NoopMetric2, "NoopMetric");
      return NoopMetric2;
    }();
    NoopCounterMetric = /** @class */
    function(_super) {
      __extends(NoopCounterMetric2, _super);
      function NoopCounterMetric2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      __name(NoopCounterMetric2, "NoopCounterMetric");
      NoopCounterMetric2.prototype.add = function(_value, _attributes) {
      };
      return NoopCounterMetric2;
    }(NoopMetric);
    NoopUpDownCounterMetric = /** @class */
    function(_super) {
      __extends(NoopUpDownCounterMetric2, _super);
      function NoopUpDownCounterMetric2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      __name(NoopUpDownCounterMetric2, "NoopUpDownCounterMetric");
      NoopUpDownCounterMetric2.prototype.add = function(_value, _attributes) {
      };
      return NoopUpDownCounterMetric2;
    }(NoopMetric);
    NoopGaugeMetric = /** @class */
    function(_super) {
      __extends(NoopGaugeMetric2, _super);
      function NoopGaugeMetric2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      __name(NoopGaugeMetric2, "NoopGaugeMetric");
      NoopGaugeMetric2.prototype.record = function(_value, _attributes) {
      };
      return NoopGaugeMetric2;
    }(NoopMetric);
    NoopHistogramMetric = /** @class */
    function(_super) {
      __extends(NoopHistogramMetric2, _super);
      function NoopHistogramMetric2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      __name(NoopHistogramMetric2, "NoopHistogramMetric");
      NoopHistogramMetric2.prototype.record = function(_value, _attributes) {
      };
      return NoopHistogramMetric2;
    }(NoopMetric);
    NoopObservableMetric = /** @class */
    function() {
      function NoopObservableMetric2() {
      }
      __name(NoopObservableMetric2, "NoopObservableMetric");
      NoopObservableMetric2.prototype.addCallback = function(_callback) {
      };
      NoopObservableMetric2.prototype.removeCallback = function(_callback) {
      };
      return NoopObservableMetric2;
    }();
    NoopObservableCounterMetric = /** @class */
    function(_super) {
      __extends(NoopObservableCounterMetric2, _super);
      function NoopObservableCounterMetric2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      __name(NoopObservableCounterMetric2, "NoopObservableCounterMetric");
      return NoopObservableCounterMetric2;
    }(NoopObservableMetric);
    NoopObservableGaugeMetric = /** @class */
    function(_super) {
      __extends(NoopObservableGaugeMetric2, _super);
      function NoopObservableGaugeMetric2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      __name(NoopObservableGaugeMetric2, "NoopObservableGaugeMetric");
      return NoopObservableGaugeMetric2;
    }(NoopObservableMetric);
    NoopObservableUpDownCounterMetric = /** @class */
    function(_super) {
      __extends(NoopObservableUpDownCounterMetric2, _super);
      function NoopObservableUpDownCounterMetric2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      __name(NoopObservableUpDownCounterMetric2, "NoopObservableUpDownCounterMetric");
      return NoopObservableUpDownCounterMetric2;
    }(NoopObservableMetric);
    NOOP_METER = new NoopMeter();
    NOOP_COUNTER_METRIC = new NoopCounterMetric();
    NOOP_GAUGE_METRIC = new NoopGaugeMetric();
    NOOP_HISTOGRAM_METRIC = new NoopHistogramMetric();
    NOOP_UP_DOWN_COUNTER_METRIC = new NoopUpDownCounterMetric();
    NOOP_OBSERVABLE_COUNTER_METRIC = new NoopObservableCounterMetric();
    NOOP_OBSERVABLE_GAUGE_METRIC = new NoopObservableGaugeMetric();
    NOOP_OBSERVABLE_UP_DOWN_COUNTER_METRIC = new NoopObservableUpDownCounterMetric();
    __name(createNoopMeter, "createNoopMeter");
  }
});

// node_modules/@opentelemetry/api/build/esm/metrics/Metric.js
var ValueType;
var init_Metric = __esm({
  "node_modules/@opentelemetry/api/build/esm/metrics/Metric.js"() {
    init_esm();
    (function(ValueType2) {
      ValueType2[ValueType2["INT"] = 0] = "INT";
      ValueType2[ValueType2["DOUBLE"] = 1] = "DOUBLE";
    })(ValueType || (ValueType = {}));
  }
});

// node_modules/@opentelemetry/api/build/esm/propagation/TextMapPropagator.js
var defaultTextMapGetter, defaultTextMapSetter;
var init_TextMapPropagator = __esm({
  "node_modules/@opentelemetry/api/build/esm/propagation/TextMapPropagator.js"() {
    init_esm();
    defaultTextMapGetter = {
      get: /* @__PURE__ */ __name(function(carrier, key) {
        if (carrier == null) {
          return void 0;
        }
        return carrier[key];
      }, "get"),
      keys: /* @__PURE__ */ __name(function(carrier) {
        if (carrier == null) {
          return [];
        }
        return Object.keys(carrier);
      }, "keys")
    };
    defaultTextMapSetter = {
      set: /* @__PURE__ */ __name(function(carrier, key, value) {
        if (carrier == null) {
          return;
        }
        carrier[key] = value;
      }, "set")
    };
  }
});

// node_modules/@opentelemetry/api/build/esm/context/NoopContextManager.js
var __read4, __spreadArray3, NoopContextManager;
var init_NoopContextManager = __esm({
  "node_modules/@opentelemetry/api/build/esm/context/NoopContextManager.js"() {
    init_esm();
    init_context();
    __read4 = function(o2, n2) {
      var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
      if (!m2) return o2;
      var i2 = m2.call(o2), r2, ar = [], e;
      try {
        while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done) ar.push(r2.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r2 && !r2.done && (m2 = i2["return"])) m2.call(i2);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    };
    __spreadArray3 = function(to, from, pack) {
      if (pack || arguments.length === 2) for (var i2 = 0, l2 = from.length, ar; i2 < l2; i2++) {
        if (ar || !(i2 in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i2);
          ar[i2] = from[i2];
        }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    NoopContextManager = /** @class */
    function() {
      function NoopContextManager2() {
      }
      __name(NoopContextManager2, "NoopContextManager");
      NoopContextManager2.prototype.active = function() {
        return ROOT_CONTEXT;
      };
      NoopContextManager2.prototype.with = function(_context, fn, thisArg) {
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
          args[_i - 3] = arguments[_i];
        }
        return fn.call.apply(fn, __spreadArray3([thisArg], __read4(args), false));
      };
      NoopContextManager2.prototype.bind = function(_context, target) {
        return target;
      };
      NoopContextManager2.prototype.enable = function() {
        return this;
      };
      NoopContextManager2.prototype.disable = function() {
        return this;
      };
      return NoopContextManager2;
    }();
  }
});

// node_modules/@opentelemetry/api/build/esm/api/context.js
var __read5, __spreadArray4, API_NAME4, NOOP_CONTEXT_MANAGER, ContextAPI;
var init_context2 = __esm({
  "node_modules/@opentelemetry/api/build/esm/api/context.js"() {
    init_esm();
    init_NoopContextManager();
    init_global_utils();
    init_diag();
    __read5 = function(o2, n2) {
      var m2 = typeof Symbol === "function" && o2[Symbol.iterator];
      if (!m2) return o2;
      var i2 = m2.call(o2), r2, ar = [], e;
      try {
        while ((n2 === void 0 || n2-- > 0) && !(r2 = i2.next()).done) ar.push(r2.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r2 && !r2.done && (m2 = i2["return"])) m2.call(i2);
        } finally {
          if (e) throw e.error;
        }
      }
      return ar;
    };
    __spreadArray4 = function(to, from, pack) {
      if (pack || arguments.length === 2) for (var i2 = 0, l2 = from.length, ar; i2 < l2; i2++) {
        if (ar || !(i2 in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i2);
          ar[i2] = from[i2];
        }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    API_NAME4 = "context";
    NOOP_CONTEXT_MANAGER = new NoopContextManager();
    ContextAPI = /** @class */
    function() {
      function ContextAPI2() {
      }
      __name(ContextAPI2, "ContextAPI");
      ContextAPI2.getInstance = function() {
        if (!this._instance) {
          this._instance = new ContextAPI2();
        }
        return this._instance;
      };
      ContextAPI2.prototype.setGlobalContextManager = function(contextManager) {
        return registerGlobal2(API_NAME4, contextManager, DiagAPI.instance());
      };
      ContextAPI2.prototype.active = function() {
        return this._getContextManager().active();
      };
      ContextAPI2.prototype.with = function(context2, fn, thisArg) {
        var _a;
        var args = [];
        for (var _i = 3; _i < arguments.length; _i++) {
          args[_i - 3] = arguments[_i];
        }
        return (_a = this._getContextManager()).with.apply(_a, __spreadArray4([context2, fn, thisArg], __read5(args), false));
      };
      ContextAPI2.prototype.bind = function(context2, target) {
        return this._getContextManager().bind(context2, target);
      };
      ContextAPI2.prototype._getContextManager = function() {
        return getGlobal2(API_NAME4) || NOOP_CONTEXT_MANAGER;
      };
      ContextAPI2.prototype.disable = function() {
        this._getContextManager().disable();
        unregisterGlobal2(API_NAME4, DiagAPI.instance());
      };
      return ContextAPI2;
    }();
  }
});

// node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js
var TraceFlags;
var init_trace_flags = __esm({
  "node_modules/@opentelemetry/api/build/esm/trace/trace_flags.js"() {
    init_esm();
    (function(TraceFlags2) {
      TraceFlags2[TraceFlags2["NONE"] = 0] = "NONE";
      TraceFlags2[TraceFlags2["SAMPLED"] = 1] = "SAMPLED";
    })(TraceFlags || (TraceFlags = {}));
  }
});

// node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js
var INVALID_SPANID, INVALID_TRACEID, INVALID_SPAN_CONTEXT;
var init_invalid_span_constants = __esm({
  "node_modules/@opentelemetry/api/build/esm/trace/invalid-span-constants.js"() {
    init_esm();
    init_trace_flags();
    INVALID_SPANID = "0000000000000000";
    INVALID_TRACEID = "00000000000000000000000000000000";
    INVALID_SPAN_CONTEXT = {
      traceId: INVALID_TRACEID,
      spanId: INVALID_SPANID,
      traceFlags: TraceFlags.NONE
    };
  }
});

// node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js
var NonRecordingSpan;
var init_NonRecordingSpan = __esm({
  "node_modules/@opentelemetry/api/build/esm/trace/NonRecordingSpan.js"() {
    init_esm();
    init_invalid_span_constants();
    NonRecordingSpan = /** @class */
    function() {
      function NonRecordingSpan2(_spanContext) {
        if (_spanContext === void 0) {
          _spanContext = INVALID_SPAN_CONTEXT;
        }
        this._spanContext = _spanContext;
      }
      __name(NonRecordingSpan2, "NonRecordingSpan");
      NonRecordingSpan2.prototype.spanContext = function() {
        return this._spanContext;
      };
      NonRecordingSpan2.prototype.setAttribute = function(_key, _value) {
        return this;
      };
      NonRecordingSpan2.prototype.setAttributes = function(_attributes) {
        return this;
      };
      NonRecordingSpan2.prototype.addEvent = function(_name, _attributes) {
        return this;
      };
      NonRecordingSpan2.prototype.addLink = function(_link) {
        return this;
      };
      NonRecordingSpan2.prototype.addLinks = function(_links) {
        return this;
      };
      NonRecordingSpan2.prototype.setStatus = function(_status) {
        return this;
      };
      NonRecordingSpan2.prototype.updateName = function(_name) {
        return this;
      };
      NonRecordingSpan2.prototype.end = function(_endTime) {
      };
      NonRecordingSpan2.prototype.isRecording = function() {
        return false;
      };
      NonRecordingSpan2.prototype.recordException = function(_exception, _time) {
      };
      return NonRecordingSpan2;
    }();
  }
});

// node_modules/@opentelemetry/api/build/esm/trace/context-utils.js
function getSpan(context2) {
  return context2.getValue(SPAN_KEY) || void 0;
}
function getActiveSpan() {
  return getSpan(ContextAPI.getInstance().active());
}
function setSpan(context2, span) {
  return context2.setValue(SPAN_KEY, span);
}
function deleteSpan(context2) {
  return context2.deleteValue(SPAN_KEY);
}
function setSpanContext(context2, spanContext) {
  return setSpan(context2, new NonRecordingSpan(spanContext));
}
function getSpanContext(context2) {
  var _a;
  return (_a = getSpan(context2)) === null || _a === void 0 ? void 0 : _a.spanContext();
}
var SPAN_KEY;
var init_context_utils = __esm({
  "node_modules/@opentelemetry/api/build/esm/trace/context-utils.js"() {
    init_esm();
    init_context();
    init_NonRecordingSpan();
    init_context2();
    SPAN_KEY = createContextKey("OpenTelemetry Context Key SPAN");
    __name(getSpan, "getSpan");
    __name(getActiveSpan, "getActiveSpan");
    __name(setSpan, "setSpan");
    __name(deleteSpan, "deleteSpan");
    __name(setSpanContext, "setSpanContext");
    __name(getSpanContext, "getSpanContext");
  }
});

// node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js
function isValidTraceId(traceId) {
  return VALID_TRACEID_REGEX.test(traceId) && traceId !== INVALID_TRACEID;
}
function isValidSpanId(spanId) {
  return VALID_SPANID_REGEX.test(spanId) && spanId !== INVALID_SPANID;
}
function isSpanContextValid(spanContext) {
  return isValidTraceId(spanContext.traceId) && isValidSpanId(spanContext.spanId);
}
function wrapSpanContext(spanContext) {
  return new NonRecordingSpan(spanContext);
}
var VALID_TRACEID_REGEX, VALID_SPANID_REGEX;
var init_spancontext_utils = __esm({
  "node_modules/@opentelemetry/api/build/esm/trace/spancontext-utils.js"() {
    init_esm();
    init_invalid_span_constants();
    init_NonRecordingSpan();
    VALID_TRACEID_REGEX = /^([0-9a-f]{32})$/i;
    VALID_SPANID_REGEX = /^[0-9a-f]{16}$/i;
    __name(isValidTraceId, "isValidTraceId");
    __name(isValidSpanId, "isValidSpanId");
    __name(isSpanContextValid, "isSpanContextValid");
    __name(wrapSpanContext, "wrapSpanContext");
  }
});

// node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js
function isSpanContext(spanContext) {
  return typeof spanContext === "object" && typeof spanContext["spanId"] === "string" && typeof spanContext["traceId"] === "string" && typeof spanContext["traceFlags"] === "number";
}
var contextApi, NoopTracer;
var init_NoopTracer = __esm({
  "node_modules/@opentelemetry/api/build/esm/trace/NoopTracer.js"() {
    init_esm();
    init_context2();
    init_context_utils();
    init_NonRecordingSpan();
    init_spancontext_utils();
    contextApi = ContextAPI.getInstance();
    NoopTracer = /** @class */
    function() {
      function NoopTracer2() {
      }
      __name(NoopTracer2, "NoopTracer");
      NoopTracer2.prototype.startSpan = function(name2, options, context2) {
        if (context2 === void 0) {
          context2 = contextApi.active();
        }
        var root = Boolean(options === null || options === void 0 ? void 0 : options.root);
        if (root) {
          return new NonRecordingSpan();
        }
        var parentFromContext = context2 && getSpanContext(context2);
        if (isSpanContext(parentFromContext) && isSpanContextValid(parentFromContext)) {
          return new NonRecordingSpan(parentFromContext);
        } else {
          return new NonRecordingSpan();
        }
      };
      NoopTracer2.prototype.startActiveSpan = function(name2, arg2, arg3, arg4) {
        var opts;
        var ctx;
        var fn;
        if (arguments.length < 2) {
          return;
        } else if (arguments.length === 2) {
          fn = arg2;
        } else if (arguments.length === 3) {
          opts = arg2;
          fn = arg3;
        } else {
          opts = arg2;
          ctx = arg3;
          fn = arg4;
        }
        var parentContext = ctx !== null && ctx !== void 0 ? ctx : contextApi.active();
        var span = this.startSpan(name2, opts, parentContext);
        var contextWithSpanSet = setSpan(parentContext, span);
        return contextApi.with(contextWithSpanSet, fn, void 0, span);
      };
      return NoopTracer2;
    }();
    __name(isSpanContext, "isSpanContext");
  }
});

// node_modules/@opentelemetry/api/build/esm/trace/ProxyTracer.js
var NOOP_TRACER, ProxyTracer;
var init_ProxyTracer = __esm({
  "node_modules/@opentelemetry/api/build/esm/trace/ProxyTracer.js"() {
    init_esm();
    init_NoopTracer();
    NOOP_TRACER = new NoopTracer();
    ProxyTracer = /** @class */
    function() {
      function ProxyTracer2(_provider, name2, version, options) {
        this._provider = _provider;
        this.name = name2;
        this.version = version;
        this.options = options;
      }
      __name(ProxyTracer2, "ProxyTracer");
      ProxyTracer2.prototype.startSpan = function(name2, options, context2) {
        return this._getTracer().startSpan(name2, options, context2);
      };
      ProxyTracer2.prototype.startActiveSpan = function(_name, _options, _context, _fn) {
        var tracer2 = this._getTracer();
        return Reflect.apply(tracer2.startActiveSpan, tracer2, arguments);
      };
      ProxyTracer2.prototype._getTracer = function() {
        if (this._delegate) {
          return this._delegate;
        }
        var tracer2 = this._provider.getDelegateTracer(this.name, this.version, this.options);
        if (!tracer2) {
          return NOOP_TRACER;
        }
        this._delegate = tracer2;
        return this._delegate;
      };
      return ProxyTracer2;
    }();
  }
});

// node_modules/@opentelemetry/api/build/esm/trace/NoopTracerProvider.js
var NoopTracerProvider;
var init_NoopTracerProvider = __esm({
  "node_modules/@opentelemetry/api/build/esm/trace/NoopTracerProvider.js"() {
    init_esm();
    init_NoopTracer();
    NoopTracerProvider = /** @class */
    function() {
      function NoopTracerProvider2() {
      }
      __name(NoopTracerProvider2, "NoopTracerProvider");
      NoopTracerProvider2.prototype.getTracer = function(_name, _version, _options) {
        return new NoopTracer();
      };
      return NoopTracerProvider2;
    }();
  }
});

// node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js
var NOOP_TRACER_PROVIDER, ProxyTracerProvider;
var init_ProxyTracerProvider = __esm({
  "node_modules/@opentelemetry/api/build/esm/trace/ProxyTracerProvider.js"() {
    init_esm();
    init_ProxyTracer();
    init_NoopTracerProvider();
    NOOP_TRACER_PROVIDER = new NoopTracerProvider();
    ProxyTracerProvider = /** @class */
    function() {
      function ProxyTracerProvider2() {
      }
      __name(ProxyTracerProvider2, "ProxyTracerProvider");
      ProxyTracerProvider2.prototype.getTracer = function(name2, version, options) {
        var _a;
        return (_a = this.getDelegateTracer(name2, version, options)) !== null && _a !== void 0 ? _a : new ProxyTracer(this, name2, version, options);
      };
      ProxyTracerProvider2.prototype.getDelegate = function() {
        var _a;
        return (_a = this._delegate) !== null && _a !== void 0 ? _a : NOOP_TRACER_PROVIDER;
      };
      ProxyTracerProvider2.prototype.setDelegate = function(delegate) {
        this._delegate = delegate;
      };
      ProxyTracerProvider2.prototype.getDelegateTracer = function(name2, version, options) {
        var _a;
        return (_a = this._delegate) === null || _a === void 0 ? void 0 : _a.getTracer(name2, version, options);
      };
      return ProxyTracerProvider2;
    }();
  }
});

// node_modules/@opentelemetry/api/build/esm/trace/SamplingResult.js
var SamplingDecision;
var init_SamplingResult = __esm({
  "node_modules/@opentelemetry/api/build/esm/trace/SamplingResult.js"() {
    init_esm();
    (function(SamplingDecision2) {
      SamplingDecision2[SamplingDecision2["NOT_RECORD"] = 0] = "NOT_RECORD";
      SamplingDecision2[SamplingDecision2["RECORD"] = 1] = "RECORD";
      SamplingDecision2[SamplingDecision2["RECORD_AND_SAMPLED"] = 2] = "RECORD_AND_SAMPLED";
    })(SamplingDecision || (SamplingDecision = {}));
  }
});

// node_modules/@opentelemetry/api/build/esm/trace/span_kind.js
var SpanKind;
var init_span_kind = __esm({
  "node_modules/@opentelemetry/api/build/esm/trace/span_kind.js"() {
    init_esm();
    (function(SpanKind2) {
      SpanKind2[SpanKind2["INTERNAL"] = 0] = "INTERNAL";
      SpanKind2[SpanKind2["SERVER"] = 1] = "SERVER";
      SpanKind2[SpanKind2["CLIENT"] = 2] = "CLIENT";
      SpanKind2[SpanKind2["PRODUCER"] = 3] = "PRODUCER";
      SpanKind2[SpanKind2["CONSUMER"] = 4] = "CONSUMER";
    })(SpanKind || (SpanKind = {}));
  }
});

// node_modules/@opentelemetry/api/build/esm/trace/status.js
var SpanStatusCode;
var init_status = __esm({
  "node_modules/@opentelemetry/api/build/esm/trace/status.js"() {
    init_esm();
    (function(SpanStatusCode2) {
      SpanStatusCode2[SpanStatusCode2["UNSET"] = 0] = "UNSET";
      SpanStatusCode2[SpanStatusCode2["OK"] = 1] = "OK";
      SpanStatusCode2[SpanStatusCode2["ERROR"] = 2] = "ERROR";
    })(SpanStatusCode || (SpanStatusCode = {}));
  }
});

// node_modules/@opentelemetry/api/build/esm/trace/internal/tracestate-validators.js
function validateKey(key) {
  return VALID_KEY_REGEX.test(key);
}
function validateValue(value) {
  return VALID_VALUE_BASE_REGEX.test(value) && !INVALID_VALUE_COMMA_EQUAL_REGEX.test(value);
}
var VALID_KEY_CHAR_RANGE, VALID_KEY, VALID_VENDOR_KEY, VALID_KEY_REGEX, VALID_VALUE_BASE_REGEX, INVALID_VALUE_COMMA_EQUAL_REGEX;
var init_tracestate_validators = __esm({
  "node_modules/@opentelemetry/api/build/esm/trace/internal/tracestate-validators.js"() {
    init_esm();
    VALID_KEY_CHAR_RANGE = "[_0-9a-z-*/]";
    VALID_KEY = "[a-z]" + VALID_KEY_CHAR_RANGE + "{0,255}";
    VALID_VENDOR_KEY = "[a-z0-9]" + VALID_KEY_CHAR_RANGE + "{0,240}@[a-z]" + VALID_KEY_CHAR_RANGE + "{0,13}";
    VALID_KEY_REGEX = new RegExp("^(?:" + VALID_KEY + "|" + VALID_VENDOR_KEY + ")$");
    VALID_VALUE_BASE_REGEX = /^[ -~]{0,255}[!-~]$/;
    INVALID_VALUE_COMMA_EQUAL_REGEX = /,|=/;
    __name(validateKey, "validateKey");
    __name(validateValue, "validateValue");
  }
});

// node_modules/@opentelemetry/api/build/esm/trace/internal/tracestate-impl.js
var MAX_TRACE_STATE_ITEMS, MAX_TRACE_STATE_LEN, LIST_MEMBERS_SEPARATOR, LIST_MEMBER_KEY_VALUE_SPLITTER, TraceStateImpl;
var init_tracestate_impl = __esm({
  "node_modules/@opentelemetry/api/build/esm/trace/internal/tracestate-impl.js"() {
    init_esm();
    init_tracestate_validators();
    MAX_TRACE_STATE_ITEMS = 32;
    MAX_TRACE_STATE_LEN = 512;
    LIST_MEMBERS_SEPARATOR = ",";
    LIST_MEMBER_KEY_VALUE_SPLITTER = "=";
    TraceStateImpl = /** @class */
    function() {
      function TraceStateImpl2(rawTraceState) {
        this._internalState = /* @__PURE__ */ new Map();
        if (rawTraceState)
          this._parse(rawTraceState);
      }
      __name(TraceStateImpl2, "TraceStateImpl");
      TraceStateImpl2.prototype.set = function(key, value) {
        var traceState = this._clone();
        if (traceState._internalState.has(key)) {
          traceState._internalState.delete(key);
        }
        traceState._internalState.set(key, value);
        return traceState;
      };
      TraceStateImpl2.prototype.unset = function(key) {
        var traceState = this._clone();
        traceState._internalState.delete(key);
        return traceState;
      };
      TraceStateImpl2.prototype.get = function(key) {
        return this._internalState.get(key);
      };
      TraceStateImpl2.prototype.serialize = function() {
        var _this = this;
        return this._keys().reduce(function(agg, key) {
          agg.push(key + LIST_MEMBER_KEY_VALUE_SPLITTER + _this.get(key));
          return agg;
        }, []).join(LIST_MEMBERS_SEPARATOR);
      };
      TraceStateImpl2.prototype._parse = function(rawTraceState) {
        if (rawTraceState.length > MAX_TRACE_STATE_LEN)
          return;
        this._internalState = rawTraceState.split(LIST_MEMBERS_SEPARATOR).reverse().reduce(function(agg, part) {
          var listMember = part.trim();
          var i2 = listMember.indexOf(LIST_MEMBER_KEY_VALUE_SPLITTER);
          if (i2 !== -1) {
            var key = listMember.slice(0, i2);
            var value = listMember.slice(i2 + 1, part.length);
            if (validateKey(key) && validateValue(value)) {
              agg.set(key, value);
            } else {
            }
          }
          return agg;
        }, /* @__PURE__ */ new Map());
        if (this._internalState.size > MAX_TRACE_STATE_ITEMS) {
          this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, MAX_TRACE_STATE_ITEMS));
        }
      };
      TraceStateImpl2.prototype._keys = function() {
        return Array.from(this._internalState.keys()).reverse();
      };
      TraceStateImpl2.prototype._clone = function() {
        var traceState = new TraceStateImpl2();
        traceState._internalState = new Map(this._internalState);
        return traceState;
      };
      return TraceStateImpl2;
    }();
  }
});

// node_modules/@opentelemetry/api/build/esm/trace/internal/utils.js
function createTraceState(rawTraceState) {
  return new TraceStateImpl(rawTraceState);
}
var init_utils2 = __esm({
  "node_modules/@opentelemetry/api/build/esm/trace/internal/utils.js"() {
    init_esm();
    init_tracestate_impl();
    __name(createTraceState, "createTraceState");
  }
});

// node_modules/@opentelemetry/api/build/esm/context-api.js
var context;
var init_context_api = __esm({
  "node_modules/@opentelemetry/api/build/esm/context-api.js"() {
    init_esm();
    init_context2();
    context = ContextAPI.getInstance();
  }
});

// node_modules/@opentelemetry/api/build/esm/diag-api.js
var diag2;
var init_diag_api = __esm({
  "node_modules/@opentelemetry/api/build/esm/diag-api.js"() {
    init_esm();
    init_diag();
    diag2 = DiagAPI.instance();
  }
});

// node_modules/@opentelemetry/api/build/esm/metrics/NoopMeterProvider.js
var NoopMeterProvider, NOOP_METER_PROVIDER;
var init_NoopMeterProvider = __esm({
  "node_modules/@opentelemetry/api/build/esm/metrics/NoopMeterProvider.js"() {
    init_esm();
    init_NoopMeter();
    NoopMeterProvider = /** @class */
    function() {
      function NoopMeterProvider2() {
      }
      __name(NoopMeterProvider2, "NoopMeterProvider");
      NoopMeterProvider2.prototype.getMeter = function(_name, _version, _options) {
        return NOOP_METER;
      };
      return NoopMeterProvider2;
    }();
    NOOP_METER_PROVIDER = new NoopMeterProvider();
  }
});

// node_modules/@opentelemetry/api/build/esm/api/metrics.js
var API_NAME5, MetricsAPI;
var init_metrics = __esm({
  "node_modules/@opentelemetry/api/build/esm/api/metrics.js"() {
    init_esm();
    init_NoopMeterProvider();
    init_global_utils();
    init_diag();
    API_NAME5 = "metrics";
    MetricsAPI = /** @class */
    function() {
      function MetricsAPI2() {
      }
      __name(MetricsAPI2, "MetricsAPI");
      MetricsAPI2.getInstance = function() {
        if (!this._instance) {
          this._instance = new MetricsAPI2();
        }
        return this._instance;
      };
      MetricsAPI2.prototype.setGlobalMeterProvider = function(provider) {
        return registerGlobal2(API_NAME5, provider, DiagAPI.instance());
      };
      MetricsAPI2.prototype.getMeterProvider = function() {
        return getGlobal2(API_NAME5) || NOOP_METER_PROVIDER;
      };
      MetricsAPI2.prototype.getMeter = function(name2, version, options) {
        return this.getMeterProvider().getMeter(name2, version, options);
      };
      MetricsAPI2.prototype.disable = function() {
        unregisterGlobal2(API_NAME5, DiagAPI.instance());
      };
      return MetricsAPI2;
    }();
  }
});

// node_modules/@opentelemetry/api/build/esm/metrics-api.js
var metrics;
var init_metrics_api = __esm({
  "node_modules/@opentelemetry/api/build/esm/metrics-api.js"() {
    init_esm();
    init_metrics();
    metrics = MetricsAPI.getInstance();
  }
});

// node_modules/@opentelemetry/api/build/esm/propagation/NoopTextMapPropagator.js
var NoopTextMapPropagator;
var init_NoopTextMapPropagator = __esm({
  "node_modules/@opentelemetry/api/build/esm/propagation/NoopTextMapPropagator.js"() {
    init_esm();
    NoopTextMapPropagator = /** @class */
    function() {
      function NoopTextMapPropagator2() {
      }
      __name(NoopTextMapPropagator2, "NoopTextMapPropagator");
      NoopTextMapPropagator2.prototype.inject = function(_context, _carrier) {
      };
      NoopTextMapPropagator2.prototype.extract = function(context2, _carrier) {
        return context2;
      };
      NoopTextMapPropagator2.prototype.fields = function() {
        return [];
      };
      return NoopTextMapPropagator2;
    }();
  }
});

// node_modules/@opentelemetry/api/build/esm/baggage/context-helpers.js
function getBaggage(context2) {
  return context2.getValue(BAGGAGE_KEY) || void 0;
}
function getActiveBaggage() {
  return getBaggage(ContextAPI.getInstance().active());
}
function setBaggage(context2, baggage) {
  return context2.setValue(BAGGAGE_KEY, baggage);
}
function deleteBaggage(context2) {
  return context2.deleteValue(BAGGAGE_KEY);
}
var BAGGAGE_KEY;
var init_context_helpers = __esm({
  "node_modules/@opentelemetry/api/build/esm/baggage/context-helpers.js"() {
    init_esm();
    init_context2();
    init_context();
    BAGGAGE_KEY = createContextKey("OpenTelemetry Baggage Key");
    __name(getBaggage, "getBaggage");
    __name(getActiveBaggage, "getActiveBaggage");
    __name(setBaggage, "setBaggage");
    __name(deleteBaggage, "deleteBaggage");
  }
});

// node_modules/@opentelemetry/api/build/esm/api/propagation.js
var API_NAME6, NOOP_TEXT_MAP_PROPAGATOR, PropagationAPI;
var init_propagation = __esm({
  "node_modules/@opentelemetry/api/build/esm/api/propagation.js"() {
    init_esm();
    init_global_utils();
    init_NoopTextMapPropagator();
    init_TextMapPropagator();
    init_context_helpers();
    init_utils();
    init_diag();
    API_NAME6 = "propagation";
    NOOP_TEXT_MAP_PROPAGATOR = new NoopTextMapPropagator();
    PropagationAPI = /** @class */
    function() {
      function PropagationAPI2() {
        this.createBaggage = createBaggage;
        this.getBaggage = getBaggage;
        this.getActiveBaggage = getActiveBaggage;
        this.setBaggage = setBaggage;
        this.deleteBaggage = deleteBaggage;
      }
      __name(PropagationAPI2, "PropagationAPI");
      PropagationAPI2.getInstance = function() {
        if (!this._instance) {
          this._instance = new PropagationAPI2();
        }
        return this._instance;
      };
      PropagationAPI2.prototype.setGlobalPropagator = function(propagator) {
        return registerGlobal2(API_NAME6, propagator, DiagAPI.instance());
      };
      PropagationAPI2.prototype.inject = function(context2, carrier, setter) {
        if (setter === void 0) {
          setter = defaultTextMapSetter;
        }
        return this._getGlobalPropagator().inject(context2, carrier, setter);
      };
      PropagationAPI2.prototype.extract = function(context2, carrier, getter) {
        if (getter === void 0) {
          getter = defaultTextMapGetter;
        }
        return this._getGlobalPropagator().extract(context2, carrier, getter);
      };
      PropagationAPI2.prototype.fields = function() {
        return this._getGlobalPropagator().fields();
      };
      PropagationAPI2.prototype.disable = function() {
        unregisterGlobal2(API_NAME6, DiagAPI.instance());
      };
      PropagationAPI2.prototype._getGlobalPropagator = function() {
        return getGlobal2(API_NAME6) || NOOP_TEXT_MAP_PROPAGATOR;
      };
      return PropagationAPI2;
    }();
  }
});

// node_modules/@opentelemetry/api/build/esm/propagation-api.js
var propagation;
var init_propagation_api = __esm({
  "node_modules/@opentelemetry/api/build/esm/propagation-api.js"() {
    init_esm();
    init_propagation();
    propagation = PropagationAPI.getInstance();
  }
});

// node_modules/@opentelemetry/api/build/esm/api/trace.js
var API_NAME7, TraceAPI;
var init_trace = __esm({
  "node_modules/@opentelemetry/api/build/esm/api/trace.js"() {
    init_esm();
    init_global_utils();
    init_ProxyTracerProvider();
    init_spancontext_utils();
    init_context_utils();
    init_diag();
    API_NAME7 = "trace";
    TraceAPI = /** @class */
    function() {
      function TraceAPI2() {
        this._proxyTracerProvider = new ProxyTracerProvider();
        this.wrapSpanContext = wrapSpanContext;
        this.isSpanContextValid = isSpanContextValid;
        this.deleteSpan = deleteSpan;
        this.getSpan = getSpan;
        this.getActiveSpan = getActiveSpan;
        this.getSpanContext = getSpanContext;
        this.setSpan = setSpan;
        this.setSpanContext = setSpanContext;
      }
      __name(TraceAPI2, "TraceAPI");
      TraceAPI2.getInstance = function() {
        if (!this._instance) {
          this._instance = new TraceAPI2();
        }
        return this._instance;
      };
      TraceAPI2.prototype.setGlobalTracerProvider = function(provider) {
        var success = registerGlobal2(API_NAME7, this._proxyTracerProvider, DiagAPI.instance());
        if (success) {
          this._proxyTracerProvider.setDelegate(provider);
        }
        return success;
      };
      TraceAPI2.prototype.getTracerProvider = function() {
        return getGlobal2(API_NAME7) || this._proxyTracerProvider;
      };
      TraceAPI2.prototype.getTracer = function(name2, version) {
        return this.getTracerProvider().getTracer(name2, version);
      };
      TraceAPI2.prototype.disable = function() {
        unregisterGlobal2(API_NAME7, DiagAPI.instance());
        this._proxyTracerProvider = new ProxyTracerProvider();
      };
      return TraceAPI2;
    }();
  }
});

// node_modules/@opentelemetry/api/build/esm/trace-api.js
var trace;
var init_trace_api = __esm({
  "node_modules/@opentelemetry/api/build/esm/trace-api.js"() {
    init_esm();
    init_trace();
    trace = TraceAPI.getInstance();
  }
});

// node_modules/@opentelemetry/api/build/esm/index.js
var esm_exports = {};
__export(esm_exports, {
  DiagConsoleLogger: () => DiagConsoleLogger,
  DiagLogLevel: () => DiagLogLevel,
  INVALID_SPANID: () => INVALID_SPANID,
  INVALID_SPAN_CONTEXT: () => INVALID_SPAN_CONTEXT,
  INVALID_TRACEID: () => INVALID_TRACEID,
  ProxyTracer: () => ProxyTracer,
  ProxyTracerProvider: () => ProxyTracerProvider,
  ROOT_CONTEXT: () => ROOT_CONTEXT,
  SamplingDecision: () => SamplingDecision,
  SpanKind: () => SpanKind,
  SpanStatusCode: () => SpanStatusCode,
  TraceFlags: () => TraceFlags,
  ValueType: () => ValueType,
  baggageEntryMetadataFromString: () => baggageEntryMetadataFromString,
  context: () => context,
  createContextKey: () => createContextKey,
  createNoopMeter: () => createNoopMeter,
  createTraceState: () => createTraceState,
  default: () => esm_default,
  defaultTextMapGetter: () => defaultTextMapGetter,
  defaultTextMapSetter: () => defaultTextMapSetter,
  diag: () => diag2,
  isSpanContextValid: () => isSpanContextValid,
  isValidSpanId: () => isValidSpanId,
  isValidTraceId: () => isValidTraceId,
  metrics: () => metrics,
  propagation: () => propagation,
  trace: () => trace
});
var esm_default;
var init_esm2 = __esm({
  "node_modules/@opentelemetry/api/build/esm/index.js"() {
    init_esm();
    init_utils();
    init_context();
    init_consoleLogger();
    init_types();
    init_NoopMeter();
    init_Metric();
    init_TextMapPropagator();
    init_ProxyTracer();
    init_ProxyTracerProvider();
    init_SamplingResult();
    init_span_kind();
    init_status();
    init_trace_flags();
    init_utils2();
    init_spancontext_utils();
    init_invalid_span_constants();
    init_context_api();
    init_diag_api();
    init_metrics_api();
    init_propagation_api();
    init_trace_api();
    esm_default = {
      context,
      diag: diag2,
      metrics,
      propagation,
      trace
    };
  }
});

// node_modules/zod/v3/helpers/util.cjs
var require_util = __commonJS({
  "node_modules/zod/v3/helpers/util.cjs"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getParsedType = exports.ZodParsedType = exports.objectUtil = exports.util = void 0;
    var util2;
    (function(util3) {
      util3.assertEqual = (_2) => {
      };
      function assertIs(_arg) {
      }
      __name(assertIs, "assertIs");
      util3.assertIs = assertIs;
      function assertNever(_x) {
        throw new Error();
      }
      __name(assertNever, "assertNever");
      util3.assertNever = assertNever;
      util3.arrayToEnum = (items) => {
        const obj = {};
        for (const item of items) {
          obj[item] = item;
        }
        return obj;
      };
      util3.getValidEnumValues = (obj) => {
        const validKeys = util3.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
        const filtered = {};
        for (const k of validKeys) {
          filtered[k] = obj[k];
        }
        return util3.objectValues(filtered);
      };
      util3.objectValues = (obj) => {
        return util3.objectKeys(obj).map(function(e) {
          return obj[e];
        });
      };
      util3.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
        const keys = [];
        for (const key in object) {
          if (Object.prototype.hasOwnProperty.call(object, key)) {
            keys.push(key);
          }
        }
        return keys;
      };
      util3.find = (arr, checker) => {
        for (const item of arr) {
          if (checker(item))
            return item;
        }
        return void 0;
      };
      util3.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
      function joinValues(array, separator = " | ") {
        return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
      }
      __name(joinValues, "joinValues");
      util3.joinValues = joinValues;
      util3.jsonStringifyReplacer = (_2, value) => {
        if (typeof value === "bigint") {
          return value.toString();
        }
        return value;
      };
    })(util2 || (exports.util = util2 = {}));
    var objectUtil2;
    (function(objectUtil3) {
      objectUtil3.mergeShapes = (first, second) => {
        return {
          ...first,
          ...second
          // second overwrites first
        };
      };
    })(objectUtil2 || (exports.objectUtil = objectUtil2 = {}));
    exports.ZodParsedType = util2.arrayToEnum([
      "string",
      "nan",
      "number",
      "integer",
      "float",
      "boolean",
      "date",
      "bigint",
      "symbol",
      "function",
      "undefined",
      "null",
      "array",
      "object",
      "unknown",
      "promise",
      "void",
      "never",
      "map",
      "set"
    ]);
    var getParsedType2 = /* @__PURE__ */ __name((data) => {
      const t2 = typeof data;
      switch (t2) {
        case "undefined":
          return exports.ZodParsedType.undefined;
        case "string":
          return exports.ZodParsedType.string;
        case "number":
          return Number.isNaN(data) ? exports.ZodParsedType.nan : exports.ZodParsedType.number;
        case "boolean":
          return exports.ZodParsedType.boolean;
        case "function":
          return exports.ZodParsedType.function;
        case "bigint":
          return exports.ZodParsedType.bigint;
        case "symbol":
          return exports.ZodParsedType.symbol;
        case "object":
          if (Array.isArray(data)) {
            return exports.ZodParsedType.array;
          }
          if (data === null) {
            return exports.ZodParsedType.null;
          }
          if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
            return exports.ZodParsedType.promise;
          }
          if (typeof Map !== "undefined" && data instanceof Map) {
            return exports.ZodParsedType.map;
          }
          if (typeof Set !== "undefined" && data instanceof Set) {
            return exports.ZodParsedType.set;
          }
          if (typeof Date !== "undefined" && data instanceof Date) {
            return exports.ZodParsedType.date;
          }
          return exports.ZodParsedType.object;
        default:
          return exports.ZodParsedType.unknown;
      }
    }, "getParsedType");
    exports.getParsedType = getParsedType2;
  }
});

// node_modules/zod/v3/ZodError.cjs
var require_ZodError = __commonJS({
  "node_modules/zod/v3/ZodError.cjs"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ZodError = exports.quotelessJson = exports.ZodIssueCode = void 0;
    var util_js_1 = require_util();
    exports.ZodIssueCode = util_js_1.util.arrayToEnum([
      "invalid_type",
      "invalid_literal",
      "custom",
      "invalid_union",
      "invalid_union_discriminator",
      "invalid_enum_value",
      "unrecognized_keys",
      "invalid_arguments",
      "invalid_return_type",
      "invalid_date",
      "invalid_string",
      "too_small",
      "too_big",
      "invalid_intersection_types",
      "not_multiple_of",
      "not_finite"
    ]);
    var quotelessJson2 = /* @__PURE__ */ __name((obj) => {
      const json = JSON.stringify(obj, null, 2);
      return json.replace(/"([^"]+)":/g, "$1:");
    }, "quotelessJson");
    exports.quotelessJson = quotelessJson2;
    var ZodError2 = class _ZodError extends Error {
      static {
        __name(this, "ZodError");
      }
      get errors() {
        return this.issues;
      }
      constructor(issues) {
        super();
        this.issues = [];
        this.addIssue = (sub) => {
          this.issues = [...this.issues, sub];
        };
        this.addIssues = (subs = []) => {
          this.issues = [...this.issues, ...subs];
        };
        const actualProto = new.target.prototype;
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(this, actualProto);
        } else {
          this.__proto__ = actualProto;
        }
        this.name = "ZodError";
        this.issues = issues;
      }
      format(_mapper) {
        const mapper = _mapper || function(issue) {
          return issue.message;
        };
        const fieldErrors = { _errors: [] };
        const processError = /* @__PURE__ */ __name((error) => {
          for (const issue of error.issues) {
            if (issue.code === "invalid_union") {
              issue.unionErrors.map(processError);
            } else if (issue.code === "invalid_return_type") {
              processError(issue.returnTypeError);
            } else if (issue.code === "invalid_arguments") {
              processError(issue.argumentsError);
            } else if (issue.path.length === 0) {
              fieldErrors._errors.push(mapper(issue));
            } else {
              let curr = fieldErrors;
              let i2 = 0;
              while (i2 < issue.path.length) {
                const el = issue.path[i2];
                const terminal = i2 === issue.path.length - 1;
                if (!terminal) {
                  curr[el] = curr[el] || { _errors: [] };
                } else {
                  curr[el] = curr[el] || { _errors: [] };
                  curr[el]._errors.push(mapper(issue));
                }
                curr = curr[el];
                i2++;
              }
            }
          }
        }, "processError");
        processError(this);
        return fieldErrors;
      }
      static assert(value) {
        if (!(value instanceof _ZodError)) {
          throw new Error(`Not a ZodError: ${value}`);
        }
      }
      toString() {
        return this.message;
      }
      get message() {
        return JSON.stringify(this.issues, util_js_1.util.jsonStringifyReplacer, 2);
      }
      get isEmpty() {
        return this.issues.length === 0;
      }
      flatten(mapper = (issue) => issue.message) {
        const fieldErrors = {};
        const formErrors = [];
        for (const sub of this.issues) {
          if (sub.path.length > 0) {
            const firstEl = sub.path[0];
            fieldErrors[firstEl] = fieldErrors[firstEl] || [];
            fieldErrors[firstEl].push(mapper(sub));
          } else {
            formErrors.push(mapper(sub));
          }
        }
        return { formErrors, fieldErrors };
      }
      get formErrors() {
        return this.flatten();
      }
    };
    exports.ZodError = ZodError2;
    ZodError2.create = (issues) => {
      const error = new ZodError2(issues);
      return error;
    };
  }
});

// node_modules/zod/v3/locales/en.cjs
var require_en = __commonJS({
  "node_modules/zod/v3/locales/en.cjs"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    var ZodError_js_1 = require_ZodError();
    var util_js_1 = require_util();
    var errorMap2 = /* @__PURE__ */ __name((issue, _ctx) => {
      let message;
      switch (issue.code) {
        case ZodError_js_1.ZodIssueCode.invalid_type:
          if (issue.received === util_js_1.ZodParsedType.undefined) {
            message = "Required";
          } else {
            message = `Expected ${issue.expected}, received ${issue.received}`;
          }
          break;
        case ZodError_js_1.ZodIssueCode.invalid_literal:
          message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util_js_1.util.jsonStringifyReplacer)}`;
          break;
        case ZodError_js_1.ZodIssueCode.unrecognized_keys:
          message = `Unrecognized key(s) in object: ${util_js_1.util.joinValues(issue.keys, ", ")}`;
          break;
        case ZodError_js_1.ZodIssueCode.invalid_union:
          message = `Invalid input`;
          break;
        case ZodError_js_1.ZodIssueCode.invalid_union_discriminator:
          message = `Invalid discriminator value. Expected ${util_js_1.util.joinValues(issue.options)}`;
          break;
        case ZodError_js_1.ZodIssueCode.invalid_enum_value:
          message = `Invalid enum value. Expected ${util_js_1.util.joinValues(issue.options)}, received '${issue.received}'`;
          break;
        case ZodError_js_1.ZodIssueCode.invalid_arguments:
          message = `Invalid function arguments`;
          break;
        case ZodError_js_1.ZodIssueCode.invalid_return_type:
          message = `Invalid function return type`;
          break;
        case ZodError_js_1.ZodIssueCode.invalid_date:
          message = `Invalid date`;
          break;
        case ZodError_js_1.ZodIssueCode.invalid_string:
          if (typeof issue.validation === "object") {
            if ("includes" in issue.validation) {
              message = `Invalid input: must include "${issue.validation.includes}"`;
              if (typeof issue.validation.position === "number") {
                message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
              }
            } else if ("startsWith" in issue.validation) {
              message = `Invalid input: must start with "${issue.validation.startsWith}"`;
            } else if ("endsWith" in issue.validation) {
              message = `Invalid input: must end with "${issue.validation.endsWith}"`;
            } else {
              util_js_1.util.assertNever(issue.validation);
            }
          } else if (issue.validation !== "regex") {
            message = `Invalid ${issue.validation}`;
          } else {
            message = "Invalid";
          }
          break;
        case ZodError_js_1.ZodIssueCode.too_small:
          if (issue.type === "array")
            message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
          else if (issue.type === "string")
            message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
          else if (issue.type === "number")
            message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
          else if (issue.type === "bigint")
            message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
          else if (issue.type === "date")
            message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
          else
            message = "Invalid input";
          break;
        case ZodError_js_1.ZodIssueCode.too_big:
          if (issue.type === "array")
            message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
          else if (issue.type === "string")
            message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
          else if (issue.type === "number")
            message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
          else if (issue.type === "bigint")
            message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
          else if (issue.type === "date")
            message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
          else
            message = "Invalid input";
          break;
        case ZodError_js_1.ZodIssueCode.custom:
          message = `Invalid input`;
          break;
        case ZodError_js_1.ZodIssueCode.invalid_intersection_types:
          message = `Intersection results could not be merged`;
          break;
        case ZodError_js_1.ZodIssueCode.not_multiple_of:
          message = `Number must be a multiple of ${issue.multipleOf}`;
          break;
        case ZodError_js_1.ZodIssueCode.not_finite:
          message = "Number must be finite";
          break;
        default:
          message = _ctx.defaultError;
          util_js_1.util.assertNever(issue);
      }
      return { message };
    }, "errorMap");
    exports.default = errorMap2;
  }
});

// node_modules/zod/v3/errors.cjs
var require_errors = __commonJS({
  "node_modules/zod/v3/errors.cjs"(exports) {
    "use strict";
    init_esm();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultErrorMap = void 0;
    exports.setErrorMap = setErrorMap2;
    exports.getErrorMap = getErrorMap2;
    var en_js_1 = __importDefault(require_en());
    exports.defaultErrorMap = en_js_1.default;
    var overrideErrorMap2 = en_js_1.default;
    function setErrorMap2(map) {
      overrideErrorMap2 = map;
    }
    __name(setErrorMap2, "setErrorMap");
    function getErrorMap2() {
      return overrideErrorMap2;
    }
    __name(getErrorMap2, "getErrorMap");
  }
});

// node_modules/zod/v3/helpers/parseUtil.cjs
var require_parseUtil = __commonJS({
  "node_modules/zod/v3/helpers/parseUtil.cjs"(exports) {
    "use strict";
    init_esm();
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isAsync = exports.isValid = exports.isDirty = exports.isAborted = exports.OK = exports.DIRTY = exports.INVALID = exports.ParseStatus = exports.EMPTY_PATH = exports.makeIssue = void 0;
    exports.addIssueToContext = addIssueToContext2;
    var errors_js_1 = require_errors();
    var en_js_1 = __importDefault(require_en());
    var makeIssue2 = /* @__PURE__ */ __name((params) => {
      const { data, path, errorMaps, issueData } = params;
      const fullPath = [...path, ...issueData.path || []];
      const fullIssue = {
        ...issueData,
        path: fullPath
      };
      if (issueData.message !== void 0) {
        return {
          ...issueData,
          path: fullPath,
          message: issueData.message
        };
      }
      let errorMessage = "";
      const maps = errorMaps.filter((m2) => !!m2).slice().reverse();
      for (const map of maps) {
        errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
      }
      return {
        ...issueData,
        path: fullPath,
        message: errorMessage
      };
    }, "makeIssue");
    exports.makeIssue = makeIssue2;
    exports.EMPTY_PATH = [];
    function addIssueToContext2(ctx, issueData) {
      const overrideMap = (0, errors_js_1.getErrorMap)();
      const issue = (0, exports.makeIssue)({
        issueData,
        data: ctx.data,
        path: ctx.path,
        errorMaps: [
          ctx.common.contextualErrorMap,
          // contextual error map is first priority
          ctx.schemaErrorMap,
          // then schema-bound map if available
          overrideMap,
          // then global override map
          overrideMap === en_js_1.default ? void 0 : en_js_1.default
          // then global default map
        ].filter((x) => !!x)
      });
      ctx.common.issues.push(issue);
    }
    __name(addIssueToContext2, "addIssueToContext");
    var ParseStatus2 = class _ParseStatus {
      static {
        __name(this, "ParseStatus");
      }
      constructor() {
        this.value = "valid";
      }
      dirty() {
        if (this.value === "valid")
          this.value = "dirty";
      }
      abort() {
        if (this.value !== "aborted")
          this.value = "aborted";
      }
      static mergeArray(status, results) {
        const arrayValue = [];
        for (const s of results) {
          if (s.status === "aborted")
            return exports.INVALID;
          if (s.status === "dirty")
            status.dirty();
          arrayValue.push(s.value);
        }
        return { status: status.value, value: arrayValue };
      }
      static async mergeObjectAsync(status, pairs) {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value
          });
        }
        return _ParseStatus.mergeObjectSync(status, syncPairs);
      }
      static mergeObjectSync(status, pairs) {
        const finalObject = {};
        for (const pair of pairs) {
          const { key, value } = pair;
          if (key.status === "aborted")
            return exports.INVALID;
          if (value.status === "aborted")
            return exports.INVALID;
          if (key.status === "dirty")
            status.dirty();
          if (value.status === "dirty")
            status.dirty();
          if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
            finalObject[key.value] = value.value;
          }
        }
        return { status: status.value, value: finalObject };
      }
    };
    exports.ParseStatus = ParseStatus2;
    exports.INVALID = Object.freeze({
      status: "aborted"
    });
    var DIRTY2 = /* @__PURE__ */ __name((value) => ({ status: "dirty", value }), "DIRTY");
    exports.DIRTY = DIRTY2;
    var OK2 = /* @__PURE__ */ __name((value) => ({ status: "valid", value }), "OK");
    exports.OK = OK2;
    var isAborted2 = /* @__PURE__ */ __name((x) => x.status === "aborted", "isAborted");
    exports.isAborted = isAborted2;
    var isDirty2 = /* @__PURE__ */ __name((x) => x.status === "dirty", "isDirty");
    exports.isDirty = isDirty2;
    var isValid2 = /* @__PURE__ */ __name((x) => x.status === "valid", "isValid");
    exports.isValid = isValid2;
    var isAsync2 = /* @__PURE__ */ __name((x) => typeof Promise !== "undefined" && x instanceof Promise, "isAsync");
    exports.isAsync = isAsync2;
  }
});

// node_modules/zod/v3/helpers/typeAliases.cjs
var require_typeAliases = __commonJS({
  "node_modules/zod/v3/helpers/typeAliases.cjs"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/zod/v3/helpers/errorUtil.cjs
var require_errorUtil = __commonJS({
  "node_modules/zod/v3/helpers/errorUtil.cjs"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.errorUtil = void 0;
    var errorUtil2;
    (function(errorUtil3) {
      errorUtil3.errToObj = (message) => typeof message === "string" ? { message } : message || {};
      errorUtil3.toString = (message) => typeof message === "string" ? message : message?.message;
    })(errorUtil2 || (exports.errorUtil = errorUtil2 = {}));
  }
});

// node_modules/zod/v3/types.cjs
var require_types = __commonJS({
  "node_modules/zod/v3/types.cjs"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.discriminatedUnion = exports.date = exports.boolean = exports.bigint = exports.array = exports.any = exports.coerce = exports.ZodFirstPartyTypeKind = exports.late = exports.ZodSchema = exports.Schema = exports.ZodReadonly = exports.ZodPipeline = exports.ZodBranded = exports.BRAND = exports.ZodNaN = exports.ZodCatch = exports.ZodDefault = exports.ZodNullable = exports.ZodOptional = exports.ZodTransformer = exports.ZodEffects = exports.ZodPromise = exports.ZodNativeEnum = exports.ZodEnum = exports.ZodLiteral = exports.ZodLazy = exports.ZodFunction = exports.ZodSet = exports.ZodMap = exports.ZodRecord = exports.ZodTuple = exports.ZodIntersection = exports.ZodDiscriminatedUnion = exports.ZodUnion = exports.ZodObject = exports.ZodArray = exports.ZodVoid = exports.ZodNever = exports.ZodUnknown = exports.ZodAny = exports.ZodNull = exports.ZodUndefined = exports.ZodSymbol = exports.ZodDate = exports.ZodBoolean = exports.ZodBigInt = exports.ZodNumber = exports.ZodString = exports.ZodType = void 0;
    exports.NEVER = exports.void = exports.unknown = exports.union = exports.undefined = exports.tuple = exports.transformer = exports.symbol = exports.string = exports.strictObject = exports.set = exports.record = exports.promise = exports.preprocess = exports.pipeline = exports.ostring = exports.optional = exports.onumber = exports.oboolean = exports.object = exports.number = exports.nullable = exports.null = exports.never = exports.nativeEnum = exports.nan = exports.map = exports.literal = exports.lazy = exports.intersection = exports.instanceof = exports.function = exports.enum = exports.effect = void 0;
    exports.datetimeRegex = datetimeRegex2;
    exports.custom = custom2;
    var ZodError_js_1 = require_ZodError();
    var errors_js_1 = require_errors();
    var errorUtil_js_1 = require_errorUtil();
    var parseUtil_js_1 = require_parseUtil();
    var util_js_1 = require_util();
    var ParseInputLazyPath2 = class {
      static {
        __name(this, "ParseInputLazyPath");
      }
      constructor(parent, value, path, key) {
        this._cachedPath = [];
        this.parent = parent;
        this.data = value;
        this._path = path;
        this._key = key;
      }
      get path() {
        if (!this._cachedPath.length) {
          if (Array.isArray(this._key)) {
            this._cachedPath.push(...this._path, ...this._key);
          } else {
            this._cachedPath.push(...this._path, this._key);
          }
        }
        return this._cachedPath;
      }
    };
    var handleResult2 = /* @__PURE__ */ __name((ctx, result) => {
      if ((0, parseUtil_js_1.isValid)(result)) {
        return { success: true, data: result.value };
      } else {
        if (!ctx.common.issues.length) {
          throw new Error("Validation failed but no issues detected.");
        }
        return {
          success: false,
          get error() {
            if (this._error)
              return this._error;
            const error = new ZodError_js_1.ZodError(ctx.common.issues);
            this._error = error;
            return this._error;
          }
        };
      }
    }, "handleResult");
    function processCreateParams2(params) {
      if (!params)
        return {};
      const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
      if (errorMap2 && (invalid_type_error || required_error)) {
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
      }
      if (errorMap2)
        return { errorMap: errorMap2, description };
      const customMap = /* @__PURE__ */ __name((iss, ctx) => {
        const { message } = params;
        if (iss.code === "invalid_enum_value") {
          return { message: message ?? ctx.defaultError };
        }
        if (typeof ctx.data === "undefined") {
          return { message: message ?? required_error ?? ctx.defaultError };
        }
        if (iss.code !== "invalid_type")
          return { message: ctx.defaultError };
        return { message: message ?? invalid_type_error ?? ctx.defaultError };
      }, "customMap");
      return { errorMap: customMap, description };
    }
    __name(processCreateParams2, "processCreateParams");
    var ZodType2 = class {
      static {
        __name(this, "ZodType");
      }
      get description() {
        return this._def.description;
      }
      _getType(input) {
        return (0, util_js_1.getParsedType)(input.data);
      }
      _getOrReturnCtx(input, ctx) {
        return ctx || {
          common: input.parent.common,
          data: input.data,
          parsedType: (0, util_js_1.getParsedType)(input.data),
          schemaErrorMap: this._def.errorMap,
          path: input.path,
          parent: input.parent
        };
      }
      _processInputParams(input) {
        return {
          status: new parseUtil_js_1.ParseStatus(),
          ctx: {
            common: input.parent.common,
            data: input.data,
            parsedType: (0, util_js_1.getParsedType)(input.data),
            schemaErrorMap: this._def.errorMap,
            path: input.path,
            parent: input.parent
          }
        };
      }
      _parseSync(input) {
        const result = this._parse(input);
        if ((0, parseUtil_js_1.isAsync)(result)) {
          throw new Error("Synchronous parse encountered promise.");
        }
        return result;
      }
      _parseAsync(input) {
        const result = this._parse(input);
        return Promise.resolve(result);
      }
      parse(data, params) {
        const result = this.safeParse(data, params);
        if (result.success)
          return result.data;
        throw result.error;
      }
      safeParse(data, params) {
        const ctx = {
          common: {
            issues: [],
            async: params?.async ?? false,
            contextualErrorMap: params?.errorMap
          },
          path: params?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: (0, util_js_1.getParsedType)(data)
        };
        const result = this._parseSync({ data, path: ctx.path, parent: ctx });
        return handleResult2(ctx, result);
      }
      "~validate"(data) {
        const ctx = {
          common: {
            issues: [],
            async: !!this["~standard"].async
          },
          path: [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: (0, util_js_1.getParsedType)(data)
        };
        if (!this["~standard"].async) {
          try {
            const result = this._parseSync({ data, path: [], parent: ctx });
            return (0, parseUtil_js_1.isValid)(result) ? {
              value: result.value
            } : {
              issues: ctx.common.issues
            };
          } catch (err) {
            if (err?.message?.toLowerCase()?.includes("encountered")) {
              this["~standard"].async = true;
            }
            ctx.common = {
              issues: [],
              async: true
            };
          }
        }
        return this._parseAsync({ data, path: [], parent: ctx }).then((result) => (0, parseUtil_js_1.isValid)(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        });
      }
      async parseAsync(data, params) {
        const result = await this.safeParseAsync(data, params);
        if (result.success)
          return result.data;
        throw result.error;
      }
      async safeParseAsync(data, params) {
        const ctx = {
          common: {
            issues: [],
            contextualErrorMap: params?.errorMap,
            async: true
          },
          path: params?.path || [],
          schemaErrorMap: this._def.errorMap,
          parent: null,
          data,
          parsedType: (0, util_js_1.getParsedType)(data)
        };
        const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
        const result = await ((0, parseUtil_js_1.isAsync)(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
        return handleResult2(ctx, result);
      }
      refine(check, message) {
        const getIssueProperties = /* @__PURE__ */ __name((val) => {
          if (typeof message === "string" || typeof message === "undefined") {
            return { message };
          } else if (typeof message === "function") {
            return message(val);
          } else {
            return message;
          }
        }, "getIssueProperties");
        return this._refinement((val, ctx) => {
          const result = check(val);
          const setError = /* @__PURE__ */ __name(() => ctx.addIssue({
            code: ZodError_js_1.ZodIssueCode.custom,
            ...getIssueProperties(val)
          }), "setError");
          if (typeof Promise !== "undefined" && result instanceof Promise) {
            return result.then((data) => {
              if (!data) {
                setError();
                return false;
              } else {
                return true;
              }
            });
          }
          if (!result) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      refinement(check, refinementData) {
        return this._refinement((val, ctx) => {
          if (!check(val)) {
            ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
            return false;
          } else {
            return true;
          }
        });
      }
      _refinement(refinement) {
        return new ZodEffects2({
          schema: this,
          typeName: ZodFirstPartyTypeKind2.ZodEffects,
          effect: { type: "refinement", refinement }
        });
      }
      superRefine(refinement) {
        return this._refinement(refinement);
      }
      constructor(def) {
        this.spa = this.safeParseAsync;
        this._def = def;
        this.parse = this.parse.bind(this);
        this.safeParse = this.safeParse.bind(this);
        this.parseAsync = this.parseAsync.bind(this);
        this.safeParseAsync = this.safeParseAsync.bind(this);
        this.spa = this.spa.bind(this);
        this.refine = this.refine.bind(this);
        this.refinement = this.refinement.bind(this);
        this.superRefine = this.superRefine.bind(this);
        this.optional = this.optional.bind(this);
        this.nullable = this.nullable.bind(this);
        this.nullish = this.nullish.bind(this);
        this.array = this.array.bind(this);
        this.promise = this.promise.bind(this);
        this.or = this.or.bind(this);
        this.and = this.and.bind(this);
        this.transform = this.transform.bind(this);
        this.brand = this.brand.bind(this);
        this.default = this.default.bind(this);
        this.catch = this.catch.bind(this);
        this.describe = this.describe.bind(this);
        this.pipe = this.pipe.bind(this);
        this.readonly = this.readonly.bind(this);
        this.isNullable = this.isNullable.bind(this);
        this.isOptional = this.isOptional.bind(this);
        this["~standard"] = {
          version: 1,
          vendor: "zod",
          validate: /* @__PURE__ */ __name((data) => this["~validate"](data), "validate")
        };
      }
      optional() {
        return ZodOptional2.create(this, this._def);
      }
      nullable() {
        return ZodNullable2.create(this, this._def);
      }
      nullish() {
        return this.nullable().optional();
      }
      array() {
        return ZodArray2.create(this);
      }
      promise() {
        return ZodPromise2.create(this, this._def);
      }
      or(option) {
        return ZodUnion2.create([this, option], this._def);
      }
      and(incoming) {
        return ZodIntersection2.create(this, incoming, this._def);
      }
      transform(transform) {
        return new ZodEffects2({
          ...processCreateParams2(this._def),
          schema: this,
          typeName: ZodFirstPartyTypeKind2.ZodEffects,
          effect: { type: "transform", transform }
        });
      }
      default(def) {
        const defaultValueFunc = typeof def === "function" ? def : () => def;
        return new ZodDefault2({
          ...processCreateParams2(this._def),
          innerType: this,
          defaultValue: defaultValueFunc,
          typeName: ZodFirstPartyTypeKind2.ZodDefault
        });
      }
      brand() {
        return new ZodBranded2({
          typeName: ZodFirstPartyTypeKind2.ZodBranded,
          type: this,
          ...processCreateParams2(this._def)
        });
      }
      catch(def) {
        const catchValueFunc = typeof def === "function" ? def : () => def;
        return new ZodCatch2({
          ...processCreateParams2(this._def),
          innerType: this,
          catchValue: catchValueFunc,
          typeName: ZodFirstPartyTypeKind2.ZodCatch
        });
      }
      describe(description) {
        const This = this.constructor;
        return new This({
          ...this._def,
          description
        });
      }
      pipe(target) {
        return ZodPipeline2.create(this, target);
      }
      readonly() {
        return ZodReadonly2.create(this);
      }
      isOptional() {
        return this.safeParse(void 0).success;
      }
      isNullable() {
        return this.safeParse(null).success;
      }
    };
    exports.ZodType = ZodType2;
    exports.Schema = ZodType2;
    exports.ZodSchema = ZodType2;
    var cuidRegex2 = /^c[^\s-]{8,}$/i;
    var cuid2Regex2 = /^[0-9a-z]+$/;
    var ulidRegex2 = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
    var uuidRegex2 = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
    var nanoidRegex2 = /^[a-z0-9_-]{21}$/i;
    var jwtRegex2 = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
    var durationRegex2 = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
    var emailRegex2 = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
    var _emojiRegex2 = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
    var emojiRegex2;
    var ipv4Regex2 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
    var ipv4CidrRegex2 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
    var ipv6Regex2 = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
    var ipv6CidrRegex2 = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
    var base64Regex2 = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
    var base64urlRegex2 = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
    var dateRegexSource2 = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
    var dateRegex2 = new RegExp(`^${dateRegexSource2}$`);
    function timeRegexSource2(args) {
      let secondsRegexSource = `[0-5]\\d`;
      if (args.precision) {
        secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
      } else if (args.precision == null) {
        secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
      }
      const secondsQuantifier = args.precision ? "+" : "?";
      return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
    }
    __name(timeRegexSource2, "timeRegexSource");
    function timeRegex2(args) {
      return new RegExp(`^${timeRegexSource2(args)}$`);
    }
    __name(timeRegex2, "timeRegex");
    function datetimeRegex2(args) {
      let regex = `${dateRegexSource2}T${timeRegexSource2(args)}`;
      const opts = [];
      opts.push(args.local ? `Z?` : `Z`);
      if (args.offset)
        opts.push(`([+-]\\d{2}:?\\d{2})`);
      regex = `${regex}(${opts.join("|")})`;
      return new RegExp(`^${regex}$`);
    }
    __name(datetimeRegex2, "datetimeRegex");
    function isValidIP2(ip, version) {
      if ((version === "v4" || !version) && ipv4Regex2.test(ip)) {
        return true;
      }
      if ((version === "v6" || !version) && ipv6Regex2.test(ip)) {
        return true;
      }
      return false;
    }
    __name(isValidIP2, "isValidIP");
    function isValidJWT2(jwt, alg) {
      if (!jwtRegex2.test(jwt))
        return false;
      try {
        const [header] = jwt.split(".");
        if (!header)
          return false;
        const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
        const decoded = JSON.parse(atob(base64));
        if (typeof decoded !== "object" || decoded === null)
          return false;
        if ("typ" in decoded && decoded?.typ !== "JWT")
          return false;
        if (!decoded.alg)
          return false;
        if (alg && decoded.alg !== alg)
          return false;
        return true;
      } catch {
        return false;
      }
    }
    __name(isValidJWT2, "isValidJWT");
    function isValidCidr2(ip, version) {
      if ((version === "v4" || !version) && ipv4CidrRegex2.test(ip)) {
        return true;
      }
      if ((version === "v6" || !version) && ipv6CidrRegex2.test(ip)) {
        return true;
      }
      return false;
    }
    __name(isValidCidr2, "isValidCidr");
    var ZodString2 = class _ZodString extends ZodType2 {
      static {
        __name(this, "ZodString");
      }
      _parse(input) {
        if (this._def.coerce) {
          input.data = String(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== util_js_1.ZodParsedType.string) {
          const ctx2 = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx2, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.string,
            received: ctx2.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        const status = new parseUtil_js_1.ParseStatus();
        let ctx = void 0;
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            if (input.data.length < check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.too_small,
                minimum: check.value,
                type: "string",
                inclusive: true,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            if (input.data.length > check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.too_big,
                maximum: check.value,
                type: "string",
                inclusive: true,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "length") {
            const tooBig = input.data.length > check.value;
            const tooSmall = input.data.length < check.value;
            if (tooBig || tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              if (tooBig) {
                (0, parseUtil_js_1.addIssueToContext)(ctx, {
                  code: ZodError_js_1.ZodIssueCode.too_big,
                  maximum: check.value,
                  type: "string",
                  inclusive: true,
                  exact: true,
                  message: check.message
                });
              } else if (tooSmall) {
                (0, parseUtil_js_1.addIssueToContext)(ctx, {
                  code: ZodError_js_1.ZodIssueCode.too_small,
                  minimum: check.value,
                  type: "string",
                  inclusive: true,
                  exact: true,
                  message: check.message
                });
              }
              status.dirty();
            }
          } else if (check.kind === "email") {
            if (!emailRegex2.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "email",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "emoji") {
            if (!emojiRegex2) {
              emojiRegex2 = new RegExp(_emojiRegex2, "u");
            }
            if (!emojiRegex2.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "emoji",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "uuid") {
            if (!uuidRegex2.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "uuid",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "nanoid") {
            if (!nanoidRegex2.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "nanoid",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "cuid") {
            if (!cuidRegex2.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "cuid",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "cuid2") {
            if (!cuid2Regex2.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "cuid2",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "ulid") {
            if (!ulidRegex2.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "ulid",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "url") {
            try {
              new URL(input.data);
            } catch {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "url",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "regex") {
            check.regex.lastIndex = 0;
            const testResult = check.regex.test(input.data);
            if (!testResult) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "regex",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "trim") {
            input.data = input.data.trim();
          } else if (check.kind === "includes") {
            if (!input.data.includes(check.value, check.position)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                validation: { includes: check.value, position: check.position },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "toLowerCase") {
            input.data = input.data.toLowerCase();
          } else if (check.kind === "toUpperCase") {
            input.data = input.data.toUpperCase();
          } else if (check.kind === "startsWith") {
            if (!input.data.startsWith(check.value)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                validation: { startsWith: check.value },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "endsWith") {
            if (!input.data.endsWith(check.value)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                validation: { endsWith: check.value },
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "datetime") {
            const regex = datetimeRegex2(check);
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                validation: "datetime",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "date") {
            const regex = dateRegex2;
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                validation: "date",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "time") {
            const regex = timeRegex2(check);
            if (!regex.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                validation: "time",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "duration") {
            if (!durationRegex2.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "duration",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "ip") {
            if (!isValidIP2(input.data, check.version)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "ip",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "jwt") {
            if (!isValidJWT2(input.data, check.alg)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "jwt",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "cidr") {
            if (!isValidCidr2(input.data, check.version)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "cidr",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "base64") {
            if (!base64Regex2.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "base64",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "base64url") {
            if (!base64urlRegex2.test(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                validation: "base64url",
                code: ZodError_js_1.ZodIssueCode.invalid_string,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util_js_1.util.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      _regex(regex, validation, message) {
        return this.refinement((data) => regex.test(data), {
          validation,
          code: ZodError_js_1.ZodIssueCode.invalid_string,
          ...errorUtil_js_1.errorUtil.errToObj(message)
        });
      }
      _addCheck(check) {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      email(message) {
        return this._addCheck({ kind: "email", ...errorUtil_js_1.errorUtil.errToObj(message) });
      }
      url(message) {
        return this._addCheck({ kind: "url", ...errorUtil_js_1.errorUtil.errToObj(message) });
      }
      emoji(message) {
        return this._addCheck({ kind: "emoji", ...errorUtil_js_1.errorUtil.errToObj(message) });
      }
      uuid(message) {
        return this._addCheck({ kind: "uuid", ...errorUtil_js_1.errorUtil.errToObj(message) });
      }
      nanoid(message) {
        return this._addCheck({ kind: "nanoid", ...errorUtil_js_1.errorUtil.errToObj(message) });
      }
      cuid(message) {
        return this._addCheck({ kind: "cuid", ...errorUtil_js_1.errorUtil.errToObj(message) });
      }
      cuid2(message) {
        return this._addCheck({ kind: "cuid2", ...errorUtil_js_1.errorUtil.errToObj(message) });
      }
      ulid(message) {
        return this._addCheck({ kind: "ulid", ...errorUtil_js_1.errorUtil.errToObj(message) });
      }
      base64(message) {
        return this._addCheck({ kind: "base64", ...errorUtil_js_1.errorUtil.errToObj(message) });
      }
      base64url(message) {
        return this._addCheck({
          kind: "base64url",
          ...errorUtil_js_1.errorUtil.errToObj(message)
        });
      }
      jwt(options) {
        return this._addCheck({ kind: "jwt", ...errorUtil_js_1.errorUtil.errToObj(options) });
      }
      ip(options) {
        return this._addCheck({ kind: "ip", ...errorUtil_js_1.errorUtil.errToObj(options) });
      }
      cidr(options) {
        return this._addCheck({ kind: "cidr", ...errorUtil_js_1.errorUtil.errToObj(options) });
      }
      datetime(options) {
        if (typeof options === "string") {
          return this._addCheck({
            kind: "datetime",
            precision: null,
            offset: false,
            local: false,
            message: options
          });
        }
        return this._addCheck({
          kind: "datetime",
          precision: typeof options?.precision === "undefined" ? null : options?.precision,
          offset: options?.offset ?? false,
          local: options?.local ?? false,
          ...errorUtil_js_1.errorUtil.errToObj(options?.message)
        });
      }
      date(message) {
        return this._addCheck({ kind: "date", message });
      }
      time(options) {
        if (typeof options === "string") {
          return this._addCheck({
            kind: "time",
            precision: null,
            message: options
          });
        }
        return this._addCheck({
          kind: "time",
          precision: typeof options?.precision === "undefined" ? null : options?.precision,
          ...errorUtil_js_1.errorUtil.errToObj(options?.message)
        });
      }
      duration(message) {
        return this._addCheck({ kind: "duration", ...errorUtil_js_1.errorUtil.errToObj(message) });
      }
      regex(regex, message) {
        return this._addCheck({
          kind: "regex",
          regex,
          ...errorUtil_js_1.errorUtil.errToObj(message)
        });
      }
      includes(value, options) {
        return this._addCheck({
          kind: "includes",
          value,
          position: options?.position,
          ...errorUtil_js_1.errorUtil.errToObj(options?.message)
        });
      }
      startsWith(value, message) {
        return this._addCheck({
          kind: "startsWith",
          value,
          ...errorUtil_js_1.errorUtil.errToObj(message)
        });
      }
      endsWith(value, message) {
        return this._addCheck({
          kind: "endsWith",
          value,
          ...errorUtil_js_1.errorUtil.errToObj(message)
        });
      }
      min(minLength, message) {
        return this._addCheck({
          kind: "min",
          value: minLength,
          ...errorUtil_js_1.errorUtil.errToObj(message)
        });
      }
      max(maxLength, message) {
        return this._addCheck({
          kind: "max",
          value: maxLength,
          ...errorUtil_js_1.errorUtil.errToObj(message)
        });
      }
      length(len, message) {
        return this._addCheck({
          kind: "length",
          value: len,
          ...errorUtil_js_1.errorUtil.errToObj(message)
        });
      }
      /**
       * Equivalent to `.min(1)`
       */
      nonempty(message) {
        return this.min(1, errorUtil_js_1.errorUtil.errToObj(message));
      }
      trim() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "trim" }]
        });
      }
      toLowerCase() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "toLowerCase" }]
        });
      }
      toUpperCase() {
        return new _ZodString({
          ...this._def,
          checks: [...this._def.checks, { kind: "toUpperCase" }]
        });
      }
      get isDatetime() {
        return !!this._def.checks.find((ch) => ch.kind === "datetime");
      }
      get isDate() {
        return !!this._def.checks.find((ch) => ch.kind === "date");
      }
      get isTime() {
        return !!this._def.checks.find((ch) => ch.kind === "time");
      }
      get isDuration() {
        return !!this._def.checks.find((ch) => ch.kind === "duration");
      }
      get isEmail() {
        return !!this._def.checks.find((ch) => ch.kind === "email");
      }
      get isURL() {
        return !!this._def.checks.find((ch) => ch.kind === "url");
      }
      get isEmoji() {
        return !!this._def.checks.find((ch) => ch.kind === "emoji");
      }
      get isUUID() {
        return !!this._def.checks.find((ch) => ch.kind === "uuid");
      }
      get isNANOID() {
        return !!this._def.checks.find((ch) => ch.kind === "nanoid");
      }
      get isCUID() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid");
      }
      get isCUID2() {
        return !!this._def.checks.find((ch) => ch.kind === "cuid2");
      }
      get isULID() {
        return !!this._def.checks.find((ch) => ch.kind === "ulid");
      }
      get isIP() {
        return !!this._def.checks.find((ch) => ch.kind === "ip");
      }
      get isCIDR() {
        return !!this._def.checks.find((ch) => ch.kind === "cidr");
      }
      get isBase64() {
        return !!this._def.checks.find((ch) => ch.kind === "base64");
      }
      get isBase64url() {
        return !!this._def.checks.find((ch) => ch.kind === "base64url");
      }
      get minLength() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min;
      }
      get maxLength() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max;
      }
    };
    exports.ZodString = ZodString2;
    ZodString2.create = (params) => {
      return new ZodString2({
        checks: [],
        typeName: ZodFirstPartyTypeKind2.ZodString,
        coerce: params?.coerce ?? false,
        ...processCreateParams2(params)
      });
    };
    function floatSafeRemainder2(val, step) {
      const valDecCount = (val.toString().split(".")[1] || "").length;
      const stepDecCount = (step.toString().split(".")[1] || "").length;
      const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
      const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
      const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
      return valInt % stepInt / 10 ** decCount;
    }
    __name(floatSafeRemainder2, "floatSafeRemainder");
    var ZodNumber2 = class _ZodNumber extends ZodType2 {
      static {
        __name(this, "ZodNumber");
      }
      constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
        this.step = this.multipleOf;
      }
      _parse(input) {
        if (this._def.coerce) {
          input.data = Number(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== util_js_1.ZodParsedType.number) {
          const ctx2 = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx2, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.number,
            received: ctx2.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        let ctx = void 0;
        const status = new parseUtil_js_1.ParseStatus();
        for (const check of this._def.checks) {
          if (check.kind === "int") {
            if (!util_js_1.util.isInteger(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.invalid_type,
                expected: "integer",
                received: "float",
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "min") {
            const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
            if (tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.too_small,
                minimum: check.value,
                type: "number",
                inclusive: check.inclusive,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
            if (tooBig) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.too_big,
                maximum: check.value,
                type: "number",
                inclusive: check.inclusive,
                exact: false,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "multipleOf") {
            if (floatSafeRemainder2(input.data, check.value) !== 0) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.not_multiple_of,
                multipleOf: check.value,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "finite") {
            if (!Number.isFinite(input.data)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.not_finite,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util_js_1.util.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      gte(value, message) {
        return this.setLimit("min", value, true, errorUtil_js_1.errorUtil.toString(message));
      }
      gt(value, message) {
        return this.setLimit("min", value, false, errorUtil_js_1.errorUtil.toString(message));
      }
      lte(value, message) {
        return this.setLimit("max", value, true, errorUtil_js_1.errorUtil.toString(message));
      }
      lt(value, message) {
        return this.setLimit("max", value, false, errorUtil_js_1.errorUtil.toString(message));
      }
      setLimit(kind, value, inclusive, message) {
        return new _ZodNumber({
          ...this._def,
          checks: [
            ...this._def.checks,
            {
              kind,
              value,
              inclusive,
              message: errorUtil_js_1.errorUtil.toString(message)
            }
          ]
        });
      }
      _addCheck(check) {
        return new _ZodNumber({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      int(message) {
        return this._addCheck({
          kind: "int",
          message: errorUtil_js_1.errorUtil.toString(message)
        });
      }
      positive(message) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: false,
          message: errorUtil_js_1.errorUtil.toString(message)
        });
      }
      negative(message) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: false,
          message: errorUtil_js_1.errorUtil.toString(message)
        });
      }
      nonpositive(message) {
        return this._addCheck({
          kind: "max",
          value: 0,
          inclusive: true,
          message: errorUtil_js_1.errorUtil.toString(message)
        });
      }
      nonnegative(message) {
        return this._addCheck({
          kind: "min",
          value: 0,
          inclusive: true,
          message: errorUtil_js_1.errorUtil.toString(message)
        });
      }
      multipleOf(value, message) {
        return this._addCheck({
          kind: "multipleOf",
          value,
          message: errorUtil_js_1.errorUtil.toString(message)
        });
      }
      finite(message) {
        return this._addCheck({
          kind: "finite",
          message: errorUtil_js_1.errorUtil.toString(message)
        });
      }
      safe(message) {
        return this._addCheck({
          kind: "min",
          inclusive: true,
          value: Number.MIN_SAFE_INTEGER,
          message: errorUtil_js_1.errorUtil.toString(message)
        })._addCheck({
          kind: "max",
          inclusive: true,
          value: Number.MAX_SAFE_INTEGER,
          message: errorUtil_js_1.errorUtil.toString(message)
        });
      }
      get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min;
      }
      get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max;
      }
      get isInt() {
        return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util_js_1.util.isInteger(ch.value));
      }
      get isFinite() {
        let max = null;
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
            return true;
          } else if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          } else if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return Number.isFinite(min) && Number.isFinite(max);
      }
    };
    exports.ZodNumber = ZodNumber2;
    ZodNumber2.create = (params) => {
      return new ZodNumber2({
        checks: [],
        typeName: ZodFirstPartyTypeKind2.ZodNumber,
        coerce: params?.coerce || false,
        ...processCreateParams2(params)
      });
    };
    var ZodBigInt2 = class _ZodBigInt extends ZodType2 {
      static {
        __name(this, "ZodBigInt");
      }
      constructor() {
        super(...arguments);
        this.min = this.gte;
        this.max = this.lte;
      }
      _parse(input) {
        if (this._def.coerce) {
          try {
            input.data = BigInt(input.data);
          } catch {
            return this._getInvalidInput(input);
          }
        }
        const parsedType = this._getType(input);
        if (parsedType !== util_js_1.ZodParsedType.bigint) {
          return this._getInvalidInput(input);
        }
        let ctx = void 0;
        const status = new parseUtil_js_1.ParseStatus();
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
            if (tooSmall) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.too_small,
                type: "bigint",
                minimum: check.value,
                inclusive: check.inclusive,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
            if (tooBig) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.too_big,
                type: "bigint",
                maximum: check.value,
                inclusive: check.inclusive,
                message: check.message
              });
              status.dirty();
            }
          } else if (check.kind === "multipleOf") {
            if (input.data % check.value !== BigInt(0)) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.not_multiple_of,
                multipleOf: check.value,
                message: check.message
              });
              status.dirty();
            }
          } else {
            util_js_1.util.assertNever(check);
          }
        }
        return { status: status.value, value: input.data };
      }
      _getInvalidInput(input) {
        const ctx = this._getOrReturnCtx(input);
        (0, parseUtil_js_1.addIssueToContext)(ctx, {
          code: ZodError_js_1.ZodIssueCode.invalid_type,
          expected: util_js_1.ZodParsedType.bigint,
          received: ctx.parsedType
        });
        return parseUtil_js_1.INVALID;
      }
      gte(value, message) {
        return this.setLimit("min", value, true, errorUtil_js_1.errorUtil.toString(message));
      }
      gt(value, message) {
        return this.setLimit("min", value, false, errorUtil_js_1.errorUtil.toString(message));
      }
      lte(value, message) {
        return this.setLimit("max", value, true, errorUtil_js_1.errorUtil.toString(message));
      }
      lt(value, message) {
        return this.setLimit("max", value, false, errorUtil_js_1.errorUtil.toString(message));
      }
      setLimit(kind, value, inclusive, message) {
        return new _ZodBigInt({
          ...this._def,
          checks: [
            ...this._def.checks,
            {
              kind,
              value,
              inclusive,
              message: errorUtil_js_1.errorUtil.toString(message)
            }
          ]
        });
      }
      _addCheck(check) {
        return new _ZodBigInt({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      positive(message) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: false,
          message: errorUtil_js_1.errorUtil.toString(message)
        });
      }
      negative(message) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: false,
          message: errorUtil_js_1.errorUtil.toString(message)
        });
      }
      nonpositive(message) {
        return this._addCheck({
          kind: "max",
          value: BigInt(0),
          inclusive: true,
          message: errorUtil_js_1.errorUtil.toString(message)
        });
      }
      nonnegative(message) {
        return this._addCheck({
          kind: "min",
          value: BigInt(0),
          inclusive: true,
          message: errorUtil_js_1.errorUtil.toString(message)
        });
      }
      multipleOf(value, message) {
        return this._addCheck({
          kind: "multipleOf",
          value,
          message: errorUtil_js_1.errorUtil.toString(message)
        });
      }
      get minValue() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min;
      }
      get maxValue() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max;
      }
    };
    exports.ZodBigInt = ZodBigInt2;
    ZodBigInt2.create = (params) => {
      return new ZodBigInt2({
        checks: [],
        typeName: ZodFirstPartyTypeKind2.ZodBigInt,
        coerce: params?.coerce ?? false,
        ...processCreateParams2(params)
      });
    };
    var ZodBoolean2 = class extends ZodType2 {
      static {
        __name(this, "ZodBoolean");
      }
      _parse(input) {
        if (this._def.coerce) {
          input.data = Boolean(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== util_js_1.ZodParsedType.boolean) {
          const ctx = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.boolean,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        return (0, parseUtil_js_1.OK)(input.data);
      }
    };
    exports.ZodBoolean = ZodBoolean2;
    ZodBoolean2.create = (params) => {
      return new ZodBoolean2({
        typeName: ZodFirstPartyTypeKind2.ZodBoolean,
        coerce: params?.coerce || false,
        ...processCreateParams2(params)
      });
    };
    var ZodDate2 = class _ZodDate extends ZodType2 {
      static {
        __name(this, "ZodDate");
      }
      _parse(input) {
        if (this._def.coerce) {
          input.data = new Date(input.data);
        }
        const parsedType = this._getType(input);
        if (parsedType !== util_js_1.ZodParsedType.date) {
          const ctx2 = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx2, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.date,
            received: ctx2.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        if (Number.isNaN(input.data.getTime())) {
          const ctx2 = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx2, {
            code: ZodError_js_1.ZodIssueCode.invalid_date
          });
          return parseUtil_js_1.INVALID;
        }
        const status = new parseUtil_js_1.ParseStatus();
        let ctx = void 0;
        for (const check of this._def.checks) {
          if (check.kind === "min") {
            if (input.data.getTime() < check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.too_small,
                message: check.message,
                inclusive: true,
                exact: false,
                minimum: check.value,
                type: "date"
              });
              status.dirty();
            }
          } else if (check.kind === "max") {
            if (input.data.getTime() > check.value) {
              ctx = this._getOrReturnCtx(input, ctx);
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.too_big,
                message: check.message,
                inclusive: true,
                exact: false,
                maximum: check.value,
                type: "date"
              });
              status.dirty();
            }
          } else {
            util_js_1.util.assertNever(check);
          }
        }
        return {
          status: status.value,
          value: new Date(input.data.getTime())
        };
      }
      _addCheck(check) {
        return new _ZodDate({
          ...this._def,
          checks: [...this._def.checks, check]
        });
      }
      min(minDate, message) {
        return this._addCheck({
          kind: "min",
          value: minDate.getTime(),
          message: errorUtil_js_1.errorUtil.toString(message)
        });
      }
      max(maxDate, message) {
        return this._addCheck({
          kind: "max",
          value: maxDate.getTime(),
          message: errorUtil_js_1.errorUtil.toString(message)
        });
      }
      get minDate() {
        let min = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "min") {
            if (min === null || ch.value > min)
              min = ch.value;
          }
        }
        return min != null ? new Date(min) : null;
      }
      get maxDate() {
        let max = null;
        for (const ch of this._def.checks) {
          if (ch.kind === "max") {
            if (max === null || ch.value < max)
              max = ch.value;
          }
        }
        return max != null ? new Date(max) : null;
      }
    };
    exports.ZodDate = ZodDate2;
    ZodDate2.create = (params) => {
      return new ZodDate2({
        checks: [],
        coerce: params?.coerce || false,
        typeName: ZodFirstPartyTypeKind2.ZodDate,
        ...processCreateParams2(params)
      });
    };
    var ZodSymbol2 = class extends ZodType2 {
      static {
        __name(this, "ZodSymbol");
      }
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== util_js_1.ZodParsedType.symbol) {
          const ctx = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.symbol,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        return (0, parseUtil_js_1.OK)(input.data);
      }
    };
    exports.ZodSymbol = ZodSymbol2;
    ZodSymbol2.create = (params) => {
      return new ZodSymbol2({
        typeName: ZodFirstPartyTypeKind2.ZodSymbol,
        ...processCreateParams2(params)
      });
    };
    var ZodUndefined2 = class extends ZodType2 {
      static {
        __name(this, "ZodUndefined");
      }
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== util_js_1.ZodParsedType.undefined) {
          const ctx = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.undefined,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        return (0, parseUtil_js_1.OK)(input.data);
      }
    };
    exports.ZodUndefined = ZodUndefined2;
    ZodUndefined2.create = (params) => {
      return new ZodUndefined2({
        typeName: ZodFirstPartyTypeKind2.ZodUndefined,
        ...processCreateParams2(params)
      });
    };
    var ZodNull2 = class extends ZodType2 {
      static {
        __name(this, "ZodNull");
      }
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== util_js_1.ZodParsedType.null) {
          const ctx = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.null,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        return (0, parseUtil_js_1.OK)(input.data);
      }
    };
    exports.ZodNull = ZodNull2;
    ZodNull2.create = (params) => {
      return new ZodNull2({
        typeName: ZodFirstPartyTypeKind2.ZodNull,
        ...processCreateParams2(params)
      });
    };
    var ZodAny2 = class extends ZodType2 {
      static {
        __name(this, "ZodAny");
      }
      constructor() {
        super(...arguments);
        this._any = true;
      }
      _parse(input) {
        return (0, parseUtil_js_1.OK)(input.data);
      }
    };
    exports.ZodAny = ZodAny2;
    ZodAny2.create = (params) => {
      return new ZodAny2({
        typeName: ZodFirstPartyTypeKind2.ZodAny,
        ...processCreateParams2(params)
      });
    };
    var ZodUnknown2 = class extends ZodType2 {
      static {
        __name(this, "ZodUnknown");
      }
      constructor() {
        super(...arguments);
        this._unknown = true;
      }
      _parse(input) {
        return (0, parseUtil_js_1.OK)(input.data);
      }
    };
    exports.ZodUnknown = ZodUnknown2;
    ZodUnknown2.create = (params) => {
      return new ZodUnknown2({
        typeName: ZodFirstPartyTypeKind2.ZodUnknown,
        ...processCreateParams2(params)
      });
    };
    var ZodNever2 = class extends ZodType2 {
      static {
        __name(this, "ZodNever");
      }
      _parse(input) {
        const ctx = this._getOrReturnCtx(input);
        (0, parseUtil_js_1.addIssueToContext)(ctx, {
          code: ZodError_js_1.ZodIssueCode.invalid_type,
          expected: util_js_1.ZodParsedType.never,
          received: ctx.parsedType
        });
        return parseUtil_js_1.INVALID;
      }
    };
    exports.ZodNever = ZodNever2;
    ZodNever2.create = (params) => {
      return new ZodNever2({
        typeName: ZodFirstPartyTypeKind2.ZodNever,
        ...processCreateParams2(params)
      });
    };
    var ZodVoid2 = class extends ZodType2 {
      static {
        __name(this, "ZodVoid");
      }
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== util_js_1.ZodParsedType.undefined) {
          const ctx = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.void,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        return (0, parseUtil_js_1.OK)(input.data);
      }
    };
    exports.ZodVoid = ZodVoid2;
    ZodVoid2.create = (params) => {
      return new ZodVoid2({
        typeName: ZodFirstPartyTypeKind2.ZodVoid,
        ...processCreateParams2(params)
      });
    };
    var ZodArray2 = class _ZodArray extends ZodType2 {
      static {
        __name(this, "ZodArray");
      }
      _parse(input) {
        const { ctx, status } = this._processInputParams(input);
        const def = this._def;
        if (ctx.parsedType !== util_js_1.ZodParsedType.array) {
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.array,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        if (def.exactLength !== null) {
          const tooBig = ctx.data.length > def.exactLength.value;
          const tooSmall = ctx.data.length < def.exactLength.value;
          if (tooBig || tooSmall) {
            (0, parseUtil_js_1.addIssueToContext)(ctx, {
              code: tooBig ? ZodError_js_1.ZodIssueCode.too_big : ZodError_js_1.ZodIssueCode.too_small,
              minimum: tooSmall ? def.exactLength.value : void 0,
              maximum: tooBig ? def.exactLength.value : void 0,
              type: "array",
              inclusive: true,
              exact: true,
              message: def.exactLength.message
            });
            status.dirty();
          }
        }
        if (def.minLength !== null) {
          if (ctx.data.length < def.minLength.value) {
            (0, parseUtil_js_1.addIssueToContext)(ctx, {
              code: ZodError_js_1.ZodIssueCode.too_small,
              minimum: def.minLength.value,
              type: "array",
              inclusive: true,
              exact: false,
              message: def.minLength.message
            });
            status.dirty();
          }
        }
        if (def.maxLength !== null) {
          if (ctx.data.length > def.maxLength.value) {
            (0, parseUtil_js_1.addIssueToContext)(ctx, {
              code: ZodError_js_1.ZodIssueCode.too_big,
              maximum: def.maxLength.value,
              type: "array",
              inclusive: true,
              exact: false,
              message: def.maxLength.message
            });
            status.dirty();
          }
        }
        if (ctx.common.async) {
          return Promise.all([...ctx.data].map((item, i2) => {
            return def.type._parseAsync(new ParseInputLazyPath2(ctx, item, ctx.path, i2));
          })).then((result2) => {
            return parseUtil_js_1.ParseStatus.mergeArray(status, result2);
          });
        }
        const result = [...ctx.data].map((item, i2) => {
          return def.type._parseSync(new ParseInputLazyPath2(ctx, item, ctx.path, i2));
        });
        return parseUtil_js_1.ParseStatus.mergeArray(status, result);
      }
      get element() {
        return this._def.type;
      }
      min(minLength, message) {
        return new _ZodArray({
          ...this._def,
          minLength: { value: minLength, message: errorUtil_js_1.errorUtil.toString(message) }
        });
      }
      max(maxLength, message) {
        return new _ZodArray({
          ...this._def,
          maxLength: { value: maxLength, message: errorUtil_js_1.errorUtil.toString(message) }
        });
      }
      length(len, message) {
        return new _ZodArray({
          ...this._def,
          exactLength: { value: len, message: errorUtil_js_1.errorUtil.toString(message) }
        });
      }
      nonempty(message) {
        return this.min(1, message);
      }
    };
    exports.ZodArray = ZodArray2;
    ZodArray2.create = (schema, params) => {
      return new ZodArray2({
        type: schema,
        minLength: null,
        maxLength: null,
        exactLength: null,
        typeName: ZodFirstPartyTypeKind2.ZodArray,
        ...processCreateParams2(params)
      });
    };
    function deepPartialify2(schema) {
      if (schema instanceof ZodObject2) {
        const newShape = {};
        for (const key in schema.shape) {
          const fieldSchema = schema.shape[key];
          newShape[key] = ZodOptional2.create(deepPartialify2(fieldSchema));
        }
        return new ZodObject2({
          ...schema._def,
          shape: /* @__PURE__ */ __name(() => newShape, "shape")
        });
      } else if (schema instanceof ZodArray2) {
        return new ZodArray2({
          ...schema._def,
          type: deepPartialify2(schema.element)
        });
      } else if (schema instanceof ZodOptional2) {
        return ZodOptional2.create(deepPartialify2(schema.unwrap()));
      } else if (schema instanceof ZodNullable2) {
        return ZodNullable2.create(deepPartialify2(schema.unwrap()));
      } else if (schema instanceof ZodTuple2) {
        return ZodTuple2.create(schema.items.map((item) => deepPartialify2(item)));
      } else {
        return schema;
      }
    }
    __name(deepPartialify2, "deepPartialify");
    var ZodObject2 = class _ZodObject extends ZodType2 {
      static {
        __name(this, "ZodObject");
      }
      constructor() {
        super(...arguments);
        this._cached = null;
        this.nonstrict = this.passthrough;
        this.augment = this.extend;
      }
      _getCached() {
        if (this._cached !== null)
          return this._cached;
        const shape = this._def.shape();
        const keys = util_js_1.util.objectKeys(shape);
        this._cached = { shape, keys };
        return this._cached;
      }
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== util_js_1.ZodParsedType.object) {
          const ctx2 = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx2, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.object,
            received: ctx2.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        const { status, ctx } = this._processInputParams(input);
        const { shape, keys: shapeKeys } = this._getCached();
        const extraKeys = [];
        if (!(this._def.catchall instanceof ZodNever2 && this._def.unknownKeys === "strip")) {
          for (const key in ctx.data) {
            if (!shapeKeys.includes(key)) {
              extraKeys.push(key);
            }
          }
        }
        const pairs = [];
        for (const key of shapeKeys) {
          const keyValidator = shape[key];
          const value = ctx.data[key];
          pairs.push({
            key: { status: "valid", value: key },
            value: keyValidator._parse(new ParseInputLazyPath2(ctx, value, ctx.path, key)),
            alwaysSet: key in ctx.data
          });
        }
        if (this._def.catchall instanceof ZodNever2) {
          const unknownKeys = this._def.unknownKeys;
          if (unknownKeys === "passthrough") {
            for (const key of extraKeys) {
              pairs.push({
                key: { status: "valid", value: key },
                value: { status: "valid", value: ctx.data[key] }
              });
            }
          } else if (unknownKeys === "strict") {
            if (extraKeys.length > 0) {
              (0, parseUtil_js_1.addIssueToContext)(ctx, {
                code: ZodError_js_1.ZodIssueCode.unrecognized_keys,
                keys: extraKeys
              });
              status.dirty();
            }
          } else if (unknownKeys === "strip") {
          } else {
            throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
          }
        } else {
          const catchall = this._def.catchall;
          for (const key of extraKeys) {
            const value = ctx.data[key];
            pairs.push({
              key: { status: "valid", value: key },
              value: catchall._parse(
                new ParseInputLazyPath2(ctx, value, ctx.path, key)
                //, ctx.child(key), value, getParsedType(value)
              ),
              alwaysSet: key in ctx.data
            });
          }
        }
        if (ctx.common.async) {
          return Promise.resolve().then(async () => {
            const syncPairs = [];
            for (const pair of pairs) {
              const key = await pair.key;
              const value = await pair.value;
              syncPairs.push({
                key,
                value,
                alwaysSet: pair.alwaysSet
              });
            }
            return syncPairs;
          }).then((syncPairs) => {
            return parseUtil_js_1.ParseStatus.mergeObjectSync(status, syncPairs);
          });
        } else {
          return parseUtil_js_1.ParseStatus.mergeObjectSync(status, pairs);
        }
      }
      get shape() {
        return this._def.shape();
      }
      strict(message) {
        errorUtil_js_1.errorUtil.errToObj;
        return new _ZodObject({
          ...this._def,
          unknownKeys: "strict",
          ...message !== void 0 ? {
            errorMap: /* @__PURE__ */ __name((issue, ctx) => {
              const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
              if (issue.code === "unrecognized_keys")
                return {
                  message: errorUtil_js_1.errorUtil.errToObj(message).message ?? defaultError
                };
              return {
                message: defaultError
              };
            }, "errorMap")
          } : {}
        });
      }
      strip() {
        return new _ZodObject({
          ...this._def,
          unknownKeys: "strip"
        });
      }
      passthrough() {
        return new _ZodObject({
          ...this._def,
          unknownKeys: "passthrough"
        });
      }
      // const AugmentFactory =
      //   <Def extends ZodObjectDef>(def: Def) =>
      //   <Augmentation extends ZodRawShape>(
      //     augmentation: Augmentation
      //   ): ZodObject<
      //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
      //     Def["unknownKeys"],
      //     Def["catchall"]
      //   > => {
      //     return new ZodObject({
      //       ...def,
      //       shape: () => ({
      //         ...def.shape(),
      //         ...augmentation,
      //       }),
      //     }) as any;
      //   };
      extend(augmentation) {
        return new _ZodObject({
          ...this._def,
          shape: /* @__PURE__ */ __name(() => ({
            ...this._def.shape(),
            ...augmentation
          }), "shape")
        });
      }
      /**
       * Prior to zod@1.0.12 there was a bug in the
       * inferred type of merged objects. Please
       * upgrade if you are experiencing issues.
       */
      merge(merging) {
        const merged = new _ZodObject({
          unknownKeys: merging._def.unknownKeys,
          catchall: merging._def.catchall,
          shape: /* @__PURE__ */ __name(() => ({
            ...this._def.shape(),
            ...merging._def.shape()
          }), "shape"),
          typeName: ZodFirstPartyTypeKind2.ZodObject
        });
        return merged;
      }
      // merge<
      //   Incoming extends AnyZodObject,
      //   Augmentation extends Incoming["shape"],
      //   NewOutput extends {
      //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
      //       ? Augmentation[k]["_output"]
      //       : k extends keyof Output
      //       ? Output[k]
      //       : never;
      //   },
      //   NewInput extends {
      //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
      //       ? Augmentation[k]["_input"]
      //       : k extends keyof Input
      //       ? Input[k]
      //       : never;
      //   }
      // >(
      //   merging: Incoming
      // ): ZodObject<
      //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
      //   Incoming["_def"]["unknownKeys"],
      //   Incoming["_def"]["catchall"],
      //   NewOutput,
      //   NewInput
      // > {
      //   const merged: any = new ZodObject({
      //     unknownKeys: merging._def.unknownKeys,
      //     catchall: merging._def.catchall,
      //     shape: () =>
      //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
      //     typeName: ZodFirstPartyTypeKind.ZodObject,
      //   }) as any;
      //   return merged;
      // }
      setKey(key, schema) {
        return this.augment({ [key]: schema });
      }
      // merge<Incoming extends AnyZodObject>(
      //   merging: Incoming
      // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
      // ZodObject<
      //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
      //   Incoming["_def"]["unknownKeys"],
      //   Incoming["_def"]["catchall"]
      // > {
      //   // const mergedShape = objectUtil.mergeShapes(
      //   //   this._def.shape(),
      //   //   merging._def.shape()
      //   // );
      //   const merged: any = new ZodObject({
      //     unknownKeys: merging._def.unknownKeys,
      //     catchall: merging._def.catchall,
      //     shape: () =>
      //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
      //     typeName: ZodFirstPartyTypeKind.ZodObject,
      //   }) as any;
      //   return merged;
      // }
      catchall(index) {
        return new _ZodObject({
          ...this._def,
          catchall: index
        });
      }
      pick(mask) {
        const shape = {};
        for (const key of util_js_1.util.objectKeys(mask)) {
          if (mask[key] && this.shape[key]) {
            shape[key] = this.shape[key];
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: /* @__PURE__ */ __name(() => shape, "shape")
        });
      }
      omit(mask) {
        const shape = {};
        for (const key of util_js_1.util.objectKeys(this.shape)) {
          if (!mask[key]) {
            shape[key] = this.shape[key];
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: /* @__PURE__ */ __name(() => shape, "shape")
        });
      }
      /**
       * @deprecated
       */
      deepPartial() {
        return deepPartialify2(this);
      }
      partial(mask) {
        const newShape = {};
        for (const key of util_js_1.util.objectKeys(this.shape)) {
          const fieldSchema = this.shape[key];
          if (mask && !mask[key]) {
            newShape[key] = fieldSchema;
          } else {
            newShape[key] = fieldSchema.optional();
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: /* @__PURE__ */ __name(() => newShape, "shape")
        });
      }
      required(mask) {
        const newShape = {};
        for (const key of util_js_1.util.objectKeys(this.shape)) {
          if (mask && !mask[key]) {
            newShape[key] = this.shape[key];
          } else {
            const fieldSchema = this.shape[key];
            let newField = fieldSchema;
            while (newField instanceof ZodOptional2) {
              newField = newField._def.innerType;
            }
            newShape[key] = newField;
          }
        }
        return new _ZodObject({
          ...this._def,
          shape: /* @__PURE__ */ __name(() => newShape, "shape")
        });
      }
      keyof() {
        return createZodEnum2(util_js_1.util.objectKeys(this.shape));
      }
    };
    exports.ZodObject = ZodObject2;
    ZodObject2.create = (shape, params) => {
      return new ZodObject2({
        shape: /* @__PURE__ */ __name(() => shape, "shape"),
        unknownKeys: "strip",
        catchall: ZodNever2.create(),
        typeName: ZodFirstPartyTypeKind2.ZodObject,
        ...processCreateParams2(params)
      });
    };
    ZodObject2.strictCreate = (shape, params) => {
      return new ZodObject2({
        shape: /* @__PURE__ */ __name(() => shape, "shape"),
        unknownKeys: "strict",
        catchall: ZodNever2.create(),
        typeName: ZodFirstPartyTypeKind2.ZodObject,
        ...processCreateParams2(params)
      });
    };
    ZodObject2.lazycreate = (shape, params) => {
      return new ZodObject2({
        shape,
        unknownKeys: "strip",
        catchall: ZodNever2.create(),
        typeName: ZodFirstPartyTypeKind2.ZodObject,
        ...processCreateParams2(params)
      });
    };
    var ZodUnion2 = class extends ZodType2 {
      static {
        __name(this, "ZodUnion");
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const options = this._def.options;
        function handleResults(results) {
          for (const result of results) {
            if (result.result.status === "valid") {
              return result.result;
            }
          }
          for (const result of results) {
            if (result.result.status === "dirty") {
              ctx.common.issues.push(...result.ctx.common.issues);
              return result.result;
            }
          }
          const unionErrors = results.map((result) => new ZodError_js_1.ZodError(result.ctx.common.issues));
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_union,
            unionErrors
          });
          return parseUtil_js_1.INVALID;
        }
        __name(handleResults, "handleResults");
        if (ctx.common.async) {
          return Promise.all(options.map(async (option) => {
            const childCtx = {
              ...ctx,
              common: {
                ...ctx.common,
                issues: []
              },
              parent: null
            };
            return {
              result: await option._parseAsync({
                data: ctx.data,
                path: ctx.path,
                parent: childCtx
              }),
              ctx: childCtx
            };
          })).then(handleResults);
        } else {
          let dirty = void 0;
          const issues = [];
          for (const option of options) {
            const childCtx = {
              ...ctx,
              common: {
                ...ctx.common,
                issues: []
              },
              parent: null
            };
            const result = option._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: childCtx
            });
            if (result.status === "valid") {
              return result;
            } else if (result.status === "dirty" && !dirty) {
              dirty = { result, ctx: childCtx };
            }
            if (childCtx.common.issues.length) {
              issues.push(childCtx.common.issues);
            }
          }
          if (dirty) {
            ctx.common.issues.push(...dirty.ctx.common.issues);
            return dirty.result;
          }
          const unionErrors = issues.map((issues2) => new ZodError_js_1.ZodError(issues2));
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_union,
            unionErrors
          });
          return parseUtil_js_1.INVALID;
        }
      }
      get options() {
        return this._def.options;
      }
    };
    exports.ZodUnion = ZodUnion2;
    ZodUnion2.create = (types, params) => {
      return new ZodUnion2({
        options: types,
        typeName: ZodFirstPartyTypeKind2.ZodUnion,
        ...processCreateParams2(params)
      });
    };
    var getDiscriminator2 = /* @__PURE__ */ __name((type) => {
      if (type instanceof ZodLazy2) {
        return getDiscriminator2(type.schema);
      } else if (type instanceof ZodEffects2) {
        return getDiscriminator2(type.innerType());
      } else if (type instanceof ZodLiteral2) {
        return [type.value];
      } else if (type instanceof ZodEnum2) {
        return type.options;
      } else if (type instanceof ZodNativeEnum2) {
        return util_js_1.util.objectValues(type.enum);
      } else if (type instanceof ZodDefault2) {
        return getDiscriminator2(type._def.innerType);
      } else if (type instanceof ZodUndefined2) {
        return [void 0];
      } else if (type instanceof ZodNull2) {
        return [null];
      } else if (type instanceof ZodOptional2) {
        return [void 0, ...getDiscriminator2(type.unwrap())];
      } else if (type instanceof ZodNullable2) {
        return [null, ...getDiscriminator2(type.unwrap())];
      } else if (type instanceof ZodBranded2) {
        return getDiscriminator2(type.unwrap());
      } else if (type instanceof ZodReadonly2) {
        return getDiscriminator2(type.unwrap());
      } else if (type instanceof ZodCatch2) {
        return getDiscriminator2(type._def.innerType);
      } else {
        return [];
      }
    }, "getDiscriminator");
    var ZodDiscriminatedUnion2 = class _ZodDiscriminatedUnion extends ZodType2 {
      static {
        __name(this, "ZodDiscriminatedUnion");
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== util_js_1.ZodParsedType.object) {
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.object,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        const discriminator = this.discriminator;
        const discriminatorValue = ctx.data[discriminator];
        const option = this.optionsMap.get(discriminatorValue);
        if (!option) {
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [discriminator]
          });
          return parseUtil_js_1.INVALID;
        }
        if (ctx.common.async) {
          return option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
        } else {
          return option._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
        }
      }
      get discriminator() {
        return this._def.discriminator;
      }
      get options() {
        return this._def.options;
      }
      get optionsMap() {
        return this._def.optionsMap;
      }
      /**
       * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
       * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
       * have a different value for each object in the union.
       * @param discriminator the name of the discriminator property
       * @param types an array of object schemas
       * @param params
       */
      static create(discriminator, options, params) {
        const optionsMap = /* @__PURE__ */ new Map();
        for (const type of options) {
          const discriminatorValues = getDiscriminator2(type.shape[discriminator]);
          if (!discriminatorValues.length) {
            throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
          }
          for (const value of discriminatorValues) {
            if (optionsMap.has(value)) {
              throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
            }
            optionsMap.set(value, type);
          }
        }
        return new _ZodDiscriminatedUnion({
          typeName: ZodFirstPartyTypeKind2.ZodDiscriminatedUnion,
          discriminator,
          options,
          optionsMap,
          ...processCreateParams2(params)
        });
      }
    };
    exports.ZodDiscriminatedUnion = ZodDiscriminatedUnion2;
    function mergeValues2(a2, b2) {
      const aType = (0, util_js_1.getParsedType)(a2);
      const bType = (0, util_js_1.getParsedType)(b2);
      if (a2 === b2) {
        return { valid: true, data: a2 };
      } else if (aType === util_js_1.ZodParsedType.object && bType === util_js_1.ZodParsedType.object) {
        const bKeys = util_js_1.util.objectKeys(b2);
        const sharedKeys = util_js_1.util.objectKeys(a2).filter((key) => bKeys.indexOf(key) !== -1);
        const newObj = { ...a2, ...b2 };
        for (const key of sharedKeys) {
          const sharedValue = mergeValues2(a2[key], b2[key]);
          if (!sharedValue.valid) {
            return { valid: false };
          }
          newObj[key] = sharedValue.data;
        }
        return { valid: true, data: newObj };
      } else if (aType === util_js_1.ZodParsedType.array && bType === util_js_1.ZodParsedType.array) {
        if (a2.length !== b2.length) {
          return { valid: false };
        }
        const newArray = [];
        for (let index = 0; index < a2.length; index++) {
          const itemA = a2[index];
          const itemB = b2[index];
          const sharedValue = mergeValues2(itemA, itemB);
          if (!sharedValue.valid) {
            return { valid: false };
          }
          newArray.push(sharedValue.data);
        }
        return { valid: true, data: newArray };
      } else if (aType === util_js_1.ZodParsedType.date && bType === util_js_1.ZodParsedType.date && +a2 === +b2) {
        return { valid: true, data: a2 };
      } else {
        return { valid: false };
      }
    }
    __name(mergeValues2, "mergeValues");
    var ZodIntersection2 = class extends ZodType2 {
      static {
        __name(this, "ZodIntersection");
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const handleParsed = /* @__PURE__ */ __name((parsedLeft, parsedRight) => {
          if ((0, parseUtil_js_1.isAborted)(parsedLeft) || (0, parseUtil_js_1.isAborted)(parsedRight)) {
            return parseUtil_js_1.INVALID;
          }
          const merged = mergeValues2(parsedLeft.value, parsedRight.value);
          if (!merged.valid) {
            (0, parseUtil_js_1.addIssueToContext)(ctx, {
              code: ZodError_js_1.ZodIssueCode.invalid_intersection_types
            });
            return parseUtil_js_1.INVALID;
          }
          if ((0, parseUtil_js_1.isDirty)(parsedLeft) || (0, parseUtil_js_1.isDirty)(parsedRight)) {
            status.dirty();
          }
          return { status: status.value, value: merged.data };
        }, "handleParsed");
        if (ctx.common.async) {
          return Promise.all([
            this._def.left._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            }),
            this._def.right._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            })
          ]).then(([left, right]) => handleParsed(left, right));
        } else {
          return handleParsed(this._def.left._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }), this._def.right._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          }));
        }
      }
    };
    exports.ZodIntersection = ZodIntersection2;
    ZodIntersection2.create = (left, right, params) => {
      return new ZodIntersection2({
        left,
        right,
        typeName: ZodFirstPartyTypeKind2.ZodIntersection,
        ...processCreateParams2(params)
      });
    };
    var ZodTuple2 = class _ZodTuple extends ZodType2 {
      static {
        __name(this, "ZodTuple");
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== util_js_1.ZodParsedType.array) {
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.array,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        if (ctx.data.length < this._def.items.length) {
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.too_small,
            minimum: this._def.items.length,
            inclusive: true,
            exact: false,
            type: "array"
          });
          return parseUtil_js_1.INVALID;
        }
        const rest = this._def.rest;
        if (!rest && ctx.data.length > this._def.items.length) {
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.too_big,
            maximum: this._def.items.length,
            inclusive: true,
            exact: false,
            type: "array"
          });
          status.dirty();
        }
        const items = [...ctx.data].map((item, itemIndex) => {
          const schema = this._def.items[itemIndex] || this._def.rest;
          if (!schema)
            return null;
          return schema._parse(new ParseInputLazyPath2(ctx, item, ctx.path, itemIndex));
        }).filter((x) => !!x);
        if (ctx.common.async) {
          return Promise.all(items).then((results) => {
            return parseUtil_js_1.ParseStatus.mergeArray(status, results);
          });
        } else {
          return parseUtil_js_1.ParseStatus.mergeArray(status, items);
        }
      }
      get items() {
        return this._def.items;
      }
      rest(rest) {
        return new _ZodTuple({
          ...this._def,
          rest
        });
      }
    };
    exports.ZodTuple = ZodTuple2;
    ZodTuple2.create = (schemas, params) => {
      if (!Array.isArray(schemas)) {
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
      }
      return new ZodTuple2({
        items: schemas,
        typeName: ZodFirstPartyTypeKind2.ZodTuple,
        rest: null,
        ...processCreateParams2(params)
      });
    };
    var ZodRecord2 = class _ZodRecord extends ZodType2 {
      static {
        __name(this, "ZodRecord");
      }
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== util_js_1.ZodParsedType.object) {
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.object,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        const pairs = [];
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        for (const key in ctx.data) {
          pairs.push({
            key: keyType._parse(new ParseInputLazyPath2(ctx, key, ctx.path, key)),
            value: valueType._parse(new ParseInputLazyPath2(ctx, ctx.data[key], ctx.path, key)),
            alwaysSet: key in ctx.data
          });
        }
        if (ctx.common.async) {
          return parseUtil_js_1.ParseStatus.mergeObjectAsync(status, pairs);
        } else {
          return parseUtil_js_1.ParseStatus.mergeObjectSync(status, pairs);
        }
      }
      get element() {
        return this._def.valueType;
      }
      static create(first, second, third) {
        if (second instanceof ZodType2) {
          return new _ZodRecord({
            keyType: first,
            valueType: second,
            typeName: ZodFirstPartyTypeKind2.ZodRecord,
            ...processCreateParams2(third)
          });
        }
        return new _ZodRecord({
          keyType: ZodString2.create(),
          valueType: first,
          typeName: ZodFirstPartyTypeKind2.ZodRecord,
          ...processCreateParams2(second)
        });
      }
    };
    exports.ZodRecord = ZodRecord2;
    var ZodMap2 = class extends ZodType2 {
      static {
        __name(this, "ZodMap");
      }
      get keySchema() {
        return this._def.keyType;
      }
      get valueSchema() {
        return this._def.valueType;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== util_js_1.ZodParsedType.map) {
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.map,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        const keyType = this._def.keyType;
        const valueType = this._def.valueType;
        const pairs = [...ctx.data.entries()].map(([key, value], index) => {
          return {
            key: keyType._parse(new ParseInputLazyPath2(ctx, key, ctx.path, [index, "key"])),
            value: valueType._parse(new ParseInputLazyPath2(ctx, value, ctx.path, [index, "value"]))
          };
        });
        if (ctx.common.async) {
          const finalMap = /* @__PURE__ */ new Map();
          return Promise.resolve().then(async () => {
            for (const pair of pairs) {
              const key = await pair.key;
              const value = await pair.value;
              if (key.status === "aborted" || value.status === "aborted") {
                return parseUtil_js_1.INVALID;
              }
              if (key.status === "dirty" || value.status === "dirty") {
                status.dirty();
              }
              finalMap.set(key.value, value.value);
            }
            return { status: status.value, value: finalMap };
          });
        } else {
          const finalMap = /* @__PURE__ */ new Map();
          for (const pair of pairs) {
            const key = pair.key;
            const value = pair.value;
            if (key.status === "aborted" || value.status === "aborted") {
              return parseUtil_js_1.INVALID;
            }
            if (key.status === "dirty" || value.status === "dirty") {
              status.dirty();
            }
            finalMap.set(key.value, value.value);
          }
          return { status: status.value, value: finalMap };
        }
      }
    };
    exports.ZodMap = ZodMap2;
    ZodMap2.create = (keyType, valueType, params) => {
      return new ZodMap2({
        valueType,
        keyType,
        typeName: ZodFirstPartyTypeKind2.ZodMap,
        ...processCreateParams2(params)
      });
    };
    var ZodSet2 = class _ZodSet extends ZodType2 {
      static {
        __name(this, "ZodSet");
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.parsedType !== util_js_1.ZodParsedType.set) {
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.set,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        const def = this._def;
        if (def.minSize !== null) {
          if (ctx.data.size < def.minSize.value) {
            (0, parseUtil_js_1.addIssueToContext)(ctx, {
              code: ZodError_js_1.ZodIssueCode.too_small,
              minimum: def.minSize.value,
              type: "set",
              inclusive: true,
              exact: false,
              message: def.minSize.message
            });
            status.dirty();
          }
        }
        if (def.maxSize !== null) {
          if (ctx.data.size > def.maxSize.value) {
            (0, parseUtil_js_1.addIssueToContext)(ctx, {
              code: ZodError_js_1.ZodIssueCode.too_big,
              maximum: def.maxSize.value,
              type: "set",
              inclusive: true,
              exact: false,
              message: def.maxSize.message
            });
            status.dirty();
          }
        }
        const valueType = this._def.valueType;
        function finalizeSet(elements2) {
          const parsedSet = /* @__PURE__ */ new Set();
          for (const element of elements2) {
            if (element.status === "aborted")
              return parseUtil_js_1.INVALID;
            if (element.status === "dirty")
              status.dirty();
            parsedSet.add(element.value);
          }
          return { status: status.value, value: parsedSet };
        }
        __name(finalizeSet, "finalizeSet");
        const elements = [...ctx.data.values()].map((item, i2) => valueType._parse(new ParseInputLazyPath2(ctx, item, ctx.path, i2)));
        if (ctx.common.async) {
          return Promise.all(elements).then((elements2) => finalizeSet(elements2));
        } else {
          return finalizeSet(elements);
        }
      }
      min(minSize, message) {
        return new _ZodSet({
          ...this._def,
          minSize: { value: minSize, message: errorUtil_js_1.errorUtil.toString(message) }
        });
      }
      max(maxSize, message) {
        return new _ZodSet({
          ...this._def,
          maxSize: { value: maxSize, message: errorUtil_js_1.errorUtil.toString(message) }
        });
      }
      size(size, message) {
        return this.min(size, message).max(size, message);
      }
      nonempty(message) {
        return this.min(1, message);
      }
    };
    exports.ZodSet = ZodSet2;
    ZodSet2.create = (valueType, params) => {
      return new ZodSet2({
        valueType,
        minSize: null,
        maxSize: null,
        typeName: ZodFirstPartyTypeKind2.ZodSet,
        ...processCreateParams2(params)
      });
    };
    var ZodFunction2 = class _ZodFunction extends ZodType2 {
      static {
        __name(this, "ZodFunction");
      }
      constructor() {
        super(...arguments);
        this.validate = this.implement;
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== util_js_1.ZodParsedType.function) {
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.function,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        function makeArgsIssue(args, error) {
          return (0, parseUtil_js_1.makeIssue)({
            data: args,
            path: ctx.path,
            errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, (0, errors_js_1.getErrorMap)(), errors_js_1.defaultErrorMap].filter((x) => !!x),
            issueData: {
              code: ZodError_js_1.ZodIssueCode.invalid_arguments,
              argumentsError: error
            }
          });
        }
        __name(makeArgsIssue, "makeArgsIssue");
        function makeReturnsIssue(returns, error) {
          return (0, parseUtil_js_1.makeIssue)({
            data: returns,
            path: ctx.path,
            errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, (0, errors_js_1.getErrorMap)(), errors_js_1.defaultErrorMap].filter((x) => !!x),
            issueData: {
              code: ZodError_js_1.ZodIssueCode.invalid_return_type,
              returnTypeError: error
            }
          });
        }
        __name(makeReturnsIssue, "makeReturnsIssue");
        const params = { errorMap: ctx.common.contextualErrorMap };
        const fn = ctx.data;
        if (this._def.returns instanceof ZodPromise2) {
          const me = this;
          return (0, parseUtil_js_1.OK)(async function(...args) {
            const error = new ZodError_js_1.ZodError([]);
            const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
              error.addIssue(makeArgsIssue(args, e));
              throw error;
            });
            const result = await Reflect.apply(fn, this, parsedArgs);
            const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
              error.addIssue(makeReturnsIssue(result, e));
              throw error;
            });
            return parsedReturns;
          });
        } else {
          const me = this;
          return (0, parseUtil_js_1.OK)(function(...args) {
            const parsedArgs = me._def.args.safeParse(args, params);
            if (!parsedArgs.success) {
              throw new ZodError_js_1.ZodError([makeArgsIssue(args, parsedArgs.error)]);
            }
            const result = Reflect.apply(fn, this, parsedArgs.data);
            const parsedReturns = me._def.returns.safeParse(result, params);
            if (!parsedReturns.success) {
              throw new ZodError_js_1.ZodError([makeReturnsIssue(result, parsedReturns.error)]);
            }
            return parsedReturns.data;
          });
        }
      }
      parameters() {
        return this._def.args;
      }
      returnType() {
        return this._def.returns;
      }
      args(...items) {
        return new _ZodFunction({
          ...this._def,
          args: ZodTuple2.create(items).rest(ZodUnknown2.create())
        });
      }
      returns(returnType) {
        return new _ZodFunction({
          ...this._def,
          returns: returnType
        });
      }
      implement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
      }
      strictImplement(func) {
        const validatedFunc = this.parse(func);
        return validatedFunc;
      }
      static create(args, returns, params) {
        return new _ZodFunction({
          args: args ? args : ZodTuple2.create([]).rest(ZodUnknown2.create()),
          returns: returns || ZodUnknown2.create(),
          typeName: ZodFirstPartyTypeKind2.ZodFunction,
          ...processCreateParams2(params)
        });
      }
    };
    exports.ZodFunction = ZodFunction2;
    var ZodLazy2 = class extends ZodType2 {
      static {
        __name(this, "ZodLazy");
      }
      get schema() {
        return this._def.getter();
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const lazySchema = this._def.getter();
        return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
      }
    };
    exports.ZodLazy = ZodLazy2;
    ZodLazy2.create = (getter, params) => {
      return new ZodLazy2({
        getter,
        typeName: ZodFirstPartyTypeKind2.ZodLazy,
        ...processCreateParams2(params)
      });
    };
    var ZodLiteral2 = class extends ZodType2 {
      static {
        __name(this, "ZodLiteral");
      }
      _parse(input) {
        if (input.data !== this._def.value) {
          const ctx = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            received: ctx.data,
            code: ZodError_js_1.ZodIssueCode.invalid_literal,
            expected: this._def.value
          });
          return parseUtil_js_1.INVALID;
        }
        return { status: "valid", value: input.data };
      }
      get value() {
        return this._def.value;
      }
    };
    exports.ZodLiteral = ZodLiteral2;
    ZodLiteral2.create = (value, params) => {
      return new ZodLiteral2({
        value,
        typeName: ZodFirstPartyTypeKind2.ZodLiteral,
        ...processCreateParams2(params)
      });
    };
    function createZodEnum2(values, params) {
      return new ZodEnum2({
        values,
        typeName: ZodFirstPartyTypeKind2.ZodEnum,
        ...processCreateParams2(params)
      });
    }
    __name(createZodEnum2, "createZodEnum");
    var ZodEnum2 = class _ZodEnum extends ZodType2 {
      static {
        __name(this, "ZodEnum");
      }
      _parse(input) {
        if (typeof input.data !== "string") {
          const ctx = this._getOrReturnCtx(input);
          const expectedValues = this._def.values;
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            expected: util_js_1.util.joinValues(expectedValues),
            received: ctx.parsedType,
            code: ZodError_js_1.ZodIssueCode.invalid_type
          });
          return parseUtil_js_1.INVALID;
        }
        if (!this._cache) {
          this._cache = new Set(this._def.values);
        }
        if (!this._cache.has(input.data)) {
          const ctx = this._getOrReturnCtx(input);
          const expectedValues = this._def.values;
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            received: ctx.data,
            code: ZodError_js_1.ZodIssueCode.invalid_enum_value,
            options: expectedValues
          });
          return parseUtil_js_1.INVALID;
        }
        return (0, parseUtil_js_1.OK)(input.data);
      }
      get options() {
        return this._def.values;
      }
      get enum() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      get Values() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      get Enum() {
        const enumValues = {};
        for (const val of this._def.values) {
          enumValues[val] = val;
        }
        return enumValues;
      }
      extract(values, newDef = this._def) {
        return _ZodEnum.create(values, {
          ...this._def,
          ...newDef
        });
      }
      exclude(values, newDef = this._def) {
        return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
          ...this._def,
          ...newDef
        });
      }
    };
    exports.ZodEnum = ZodEnum2;
    ZodEnum2.create = createZodEnum2;
    var ZodNativeEnum2 = class extends ZodType2 {
      static {
        __name(this, "ZodNativeEnum");
      }
      _parse(input) {
        const nativeEnumValues = util_js_1.util.getValidEnumValues(this._def.values);
        const ctx = this._getOrReturnCtx(input);
        if (ctx.parsedType !== util_js_1.ZodParsedType.string && ctx.parsedType !== util_js_1.ZodParsedType.number) {
          const expectedValues = util_js_1.util.objectValues(nativeEnumValues);
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            expected: util_js_1.util.joinValues(expectedValues),
            received: ctx.parsedType,
            code: ZodError_js_1.ZodIssueCode.invalid_type
          });
          return parseUtil_js_1.INVALID;
        }
        if (!this._cache) {
          this._cache = new Set(util_js_1.util.getValidEnumValues(this._def.values));
        }
        if (!this._cache.has(input.data)) {
          const expectedValues = util_js_1.util.objectValues(nativeEnumValues);
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            received: ctx.data,
            code: ZodError_js_1.ZodIssueCode.invalid_enum_value,
            options: expectedValues
          });
          return parseUtil_js_1.INVALID;
        }
        return (0, parseUtil_js_1.OK)(input.data);
      }
      get enum() {
        return this._def.values;
      }
    };
    exports.ZodNativeEnum = ZodNativeEnum2;
    ZodNativeEnum2.create = (values, params) => {
      return new ZodNativeEnum2({
        values,
        typeName: ZodFirstPartyTypeKind2.ZodNativeEnum,
        ...processCreateParams2(params)
      });
    };
    var ZodPromise2 = class extends ZodType2 {
      static {
        __name(this, "ZodPromise");
      }
      unwrap() {
        return this._def.type;
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        if (ctx.parsedType !== util_js_1.ZodParsedType.promise && ctx.common.async === false) {
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.promise,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        const promisified = ctx.parsedType === util_js_1.ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
        return (0, parseUtil_js_1.OK)(promisified.then((data) => {
          return this._def.type.parseAsync(data, {
            path: ctx.path,
            errorMap: ctx.common.contextualErrorMap
          });
        }));
      }
    };
    exports.ZodPromise = ZodPromise2;
    ZodPromise2.create = (schema, params) => {
      return new ZodPromise2({
        type: schema,
        typeName: ZodFirstPartyTypeKind2.ZodPromise,
        ...processCreateParams2(params)
      });
    };
    var ZodEffects2 = class extends ZodType2 {
      static {
        __name(this, "ZodEffects");
      }
      innerType() {
        return this._def.schema;
      }
      sourceType() {
        return this._def.schema._def.typeName === ZodFirstPartyTypeKind2.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        const effect = this._def.effect || null;
        const checkCtx = {
          addIssue: /* @__PURE__ */ __name((arg) => {
            (0, parseUtil_js_1.addIssueToContext)(ctx, arg);
            if (arg.fatal) {
              status.abort();
            } else {
              status.dirty();
            }
          }, "addIssue"),
          get path() {
            return ctx.path;
          }
        };
        checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
        if (effect.type === "preprocess") {
          const processed = effect.transform(ctx.data, checkCtx);
          if (ctx.common.async) {
            return Promise.resolve(processed).then(async (processed2) => {
              if (status.value === "aborted")
                return parseUtil_js_1.INVALID;
              const result = await this._def.schema._parseAsync({
                data: processed2,
                path: ctx.path,
                parent: ctx
              });
              if (result.status === "aborted")
                return parseUtil_js_1.INVALID;
              if (result.status === "dirty")
                return (0, parseUtil_js_1.DIRTY)(result.value);
              if (status.value === "dirty")
                return (0, parseUtil_js_1.DIRTY)(result.value);
              return result;
            });
          } else {
            if (status.value === "aborted")
              return parseUtil_js_1.INVALID;
            const result = this._def.schema._parseSync({
              data: processed,
              path: ctx.path,
              parent: ctx
            });
            if (result.status === "aborted")
              return parseUtil_js_1.INVALID;
            if (result.status === "dirty")
              return (0, parseUtil_js_1.DIRTY)(result.value);
            if (status.value === "dirty")
              return (0, parseUtil_js_1.DIRTY)(result.value);
            return result;
          }
        }
        if (effect.type === "refinement") {
          const executeRefinement = /* @__PURE__ */ __name((acc) => {
            const result = effect.refinement(acc, checkCtx);
            if (ctx.common.async) {
              return Promise.resolve(result);
            }
            if (result instanceof Promise) {
              throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
            }
            return acc;
          }, "executeRefinement");
          if (ctx.common.async === false) {
            const inner = this._def.schema._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (inner.status === "aborted")
              return parseUtil_js_1.INVALID;
            if (inner.status === "dirty")
              status.dirty();
            executeRefinement(inner.value);
            return { status: status.value, value: inner.value };
          } else {
            return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
              if (inner.status === "aborted")
                return parseUtil_js_1.INVALID;
              if (inner.status === "dirty")
                status.dirty();
              return executeRefinement(inner.value).then(() => {
                return { status: status.value, value: inner.value };
              });
            });
          }
        }
        if (effect.type === "transform") {
          if (ctx.common.async === false) {
            const base = this._def.schema._parseSync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (!(0, parseUtil_js_1.isValid)(base))
              return parseUtil_js_1.INVALID;
            const result = effect.transform(base.value, checkCtx);
            if (result instanceof Promise) {
              throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
            }
            return { status: status.value, value: result };
          } else {
            return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
              if (!(0, parseUtil_js_1.isValid)(base))
                return parseUtil_js_1.INVALID;
              return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
                status: status.value,
                value: result
              }));
            });
          }
        }
        util_js_1.util.assertNever(effect);
      }
    };
    exports.ZodEffects = ZodEffects2;
    exports.ZodTransformer = ZodEffects2;
    ZodEffects2.create = (schema, effect, params) => {
      return new ZodEffects2({
        schema,
        typeName: ZodFirstPartyTypeKind2.ZodEffects,
        effect,
        ...processCreateParams2(params)
      });
    };
    ZodEffects2.createWithPreprocess = (preprocess, schema, params) => {
      return new ZodEffects2({
        schema,
        effect: { type: "preprocess", transform: preprocess },
        typeName: ZodFirstPartyTypeKind2.ZodEffects,
        ...processCreateParams2(params)
      });
    };
    var ZodOptional2 = class extends ZodType2 {
      static {
        __name(this, "ZodOptional");
      }
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === util_js_1.ZodParsedType.undefined) {
          return (0, parseUtil_js_1.OK)(void 0);
        }
        return this._def.innerType._parse(input);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    exports.ZodOptional = ZodOptional2;
    ZodOptional2.create = (type, params) => {
      return new ZodOptional2({
        innerType: type,
        typeName: ZodFirstPartyTypeKind2.ZodOptional,
        ...processCreateParams2(params)
      });
    };
    var ZodNullable2 = class extends ZodType2 {
      static {
        __name(this, "ZodNullable");
      }
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType === util_js_1.ZodParsedType.null) {
          return (0, parseUtil_js_1.OK)(null);
        }
        return this._def.innerType._parse(input);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    exports.ZodNullable = ZodNullable2;
    ZodNullable2.create = (type, params) => {
      return new ZodNullable2({
        innerType: type,
        typeName: ZodFirstPartyTypeKind2.ZodNullable,
        ...processCreateParams2(params)
      });
    };
    var ZodDefault2 = class extends ZodType2 {
      static {
        __name(this, "ZodDefault");
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        let data = ctx.data;
        if (ctx.parsedType === util_js_1.ZodParsedType.undefined) {
          data = this._def.defaultValue();
        }
        return this._def.innerType._parse({
          data,
          path: ctx.path,
          parent: ctx
        });
      }
      removeDefault() {
        return this._def.innerType;
      }
    };
    exports.ZodDefault = ZodDefault2;
    ZodDefault2.create = (type, params) => {
      return new ZodDefault2({
        innerType: type,
        typeName: ZodFirstPartyTypeKind2.ZodDefault,
        defaultValue: typeof params.default === "function" ? params.default : () => params.default,
        ...processCreateParams2(params)
      });
    };
    var ZodCatch2 = class extends ZodType2 {
      static {
        __name(this, "ZodCatch");
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const newCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          }
        };
        const result = this._def.innerType._parse({
          data: newCtx.data,
          path: newCtx.path,
          parent: {
            ...newCtx
          }
        });
        if ((0, parseUtil_js_1.isAsync)(result)) {
          return result.then((result2) => {
            return {
              status: "valid",
              value: result2.status === "valid" ? result2.value : this._def.catchValue({
                get error() {
                  return new ZodError_js_1.ZodError(newCtx.common.issues);
                },
                input: newCtx.data
              })
            };
          });
        } else {
          return {
            status: "valid",
            value: result.status === "valid" ? result.value : this._def.catchValue({
              get error() {
                return new ZodError_js_1.ZodError(newCtx.common.issues);
              },
              input: newCtx.data
            })
          };
        }
      }
      removeCatch() {
        return this._def.innerType;
      }
    };
    exports.ZodCatch = ZodCatch2;
    ZodCatch2.create = (type, params) => {
      return new ZodCatch2({
        innerType: type,
        typeName: ZodFirstPartyTypeKind2.ZodCatch,
        catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
        ...processCreateParams2(params)
      });
    };
    var ZodNaN2 = class extends ZodType2 {
      static {
        __name(this, "ZodNaN");
      }
      _parse(input) {
        const parsedType = this._getType(input);
        if (parsedType !== util_js_1.ZodParsedType.nan) {
          const ctx = this._getOrReturnCtx(input);
          (0, parseUtil_js_1.addIssueToContext)(ctx, {
            code: ZodError_js_1.ZodIssueCode.invalid_type,
            expected: util_js_1.ZodParsedType.nan,
            received: ctx.parsedType
          });
          return parseUtil_js_1.INVALID;
        }
        return { status: "valid", value: input.data };
      }
    };
    exports.ZodNaN = ZodNaN2;
    ZodNaN2.create = (params) => {
      return new ZodNaN2({
        typeName: ZodFirstPartyTypeKind2.ZodNaN,
        ...processCreateParams2(params)
      });
    };
    exports.BRAND = Symbol("zod_brand");
    var ZodBranded2 = class extends ZodType2 {
      static {
        __name(this, "ZodBranded");
      }
      _parse(input) {
        const { ctx } = this._processInputParams(input);
        const data = ctx.data;
        return this._def.type._parse({
          data,
          path: ctx.path,
          parent: ctx
        });
      }
      unwrap() {
        return this._def.type;
      }
    };
    exports.ZodBranded = ZodBranded2;
    var ZodPipeline2 = class _ZodPipeline extends ZodType2 {
      static {
        __name(this, "ZodPipeline");
      }
      _parse(input) {
        const { status, ctx } = this._processInputParams(input);
        if (ctx.common.async) {
          const handleAsync = /* @__PURE__ */ __name(async () => {
            const inResult = await this._def.in._parseAsync({
              data: ctx.data,
              path: ctx.path,
              parent: ctx
            });
            if (inResult.status === "aborted")
              return parseUtil_js_1.INVALID;
            if (inResult.status === "dirty") {
              status.dirty();
              return (0, parseUtil_js_1.DIRTY)(inResult.value);
            } else {
              return this._def.out._parseAsync({
                data: inResult.value,
                path: ctx.path,
                parent: ctx
              });
            }
          }, "handleAsync");
          return handleAsync();
        } else {
          const inResult = this._def.in._parseSync({
            data: ctx.data,
            path: ctx.path,
            parent: ctx
          });
          if (inResult.status === "aborted")
            return parseUtil_js_1.INVALID;
          if (inResult.status === "dirty") {
            status.dirty();
            return {
              status: "dirty",
              value: inResult.value
            };
          } else {
            return this._def.out._parseSync({
              data: inResult.value,
              path: ctx.path,
              parent: ctx
            });
          }
        }
      }
      static create(a2, b2) {
        return new _ZodPipeline({
          in: a2,
          out: b2,
          typeName: ZodFirstPartyTypeKind2.ZodPipeline
        });
      }
    };
    exports.ZodPipeline = ZodPipeline2;
    var ZodReadonly2 = class extends ZodType2 {
      static {
        __name(this, "ZodReadonly");
      }
      _parse(input) {
        const result = this._def.innerType._parse(input);
        const freeze = /* @__PURE__ */ __name((data) => {
          if ((0, parseUtil_js_1.isValid)(data)) {
            data.value = Object.freeze(data.value);
          }
          return data;
        }, "freeze");
        return (0, parseUtil_js_1.isAsync)(result) ? result.then((data) => freeze(data)) : freeze(result);
      }
      unwrap() {
        return this._def.innerType;
      }
    };
    exports.ZodReadonly = ZodReadonly2;
    ZodReadonly2.create = (type, params) => {
      return new ZodReadonly2({
        innerType: type,
        typeName: ZodFirstPartyTypeKind2.ZodReadonly,
        ...processCreateParams2(params)
      });
    };
    function cleanParams2(params, data) {
      const p2 = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
      const p22 = typeof p2 === "string" ? { message: p2 } : p2;
      return p22;
    }
    __name(cleanParams2, "cleanParams");
    function custom2(check, _params = {}, fatal) {
      if (check)
        return ZodAny2.create().superRefine((data, ctx) => {
          const r2 = check(data);
          if (r2 instanceof Promise) {
            return r2.then((r3) => {
              if (!r3) {
                const params = cleanParams2(_params, data);
                const _fatal = params.fatal ?? fatal ?? true;
                ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
              }
            });
          }
          if (!r2) {
            const params = cleanParams2(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
          return;
        });
      return ZodAny2.create();
    }
    __name(custom2, "custom");
    exports.late = {
      object: ZodObject2.lazycreate
    };
    var ZodFirstPartyTypeKind2;
    (function(ZodFirstPartyTypeKind3) {
      ZodFirstPartyTypeKind3["ZodString"] = "ZodString";
      ZodFirstPartyTypeKind3["ZodNumber"] = "ZodNumber";
      ZodFirstPartyTypeKind3["ZodNaN"] = "ZodNaN";
      ZodFirstPartyTypeKind3["ZodBigInt"] = "ZodBigInt";
      ZodFirstPartyTypeKind3["ZodBoolean"] = "ZodBoolean";
      ZodFirstPartyTypeKind3["ZodDate"] = "ZodDate";
      ZodFirstPartyTypeKind3["ZodSymbol"] = "ZodSymbol";
      ZodFirstPartyTypeKind3["ZodUndefined"] = "ZodUndefined";
      ZodFirstPartyTypeKind3["ZodNull"] = "ZodNull";
      ZodFirstPartyTypeKind3["ZodAny"] = "ZodAny";
      ZodFirstPartyTypeKind3["ZodUnknown"] = "ZodUnknown";
      ZodFirstPartyTypeKind3["ZodNever"] = "ZodNever";
      ZodFirstPartyTypeKind3["ZodVoid"] = "ZodVoid";
      ZodFirstPartyTypeKind3["ZodArray"] = "ZodArray";
      ZodFirstPartyTypeKind3["ZodObject"] = "ZodObject";
      ZodFirstPartyTypeKind3["ZodUnion"] = "ZodUnion";
      ZodFirstPartyTypeKind3["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
      ZodFirstPartyTypeKind3["ZodIntersection"] = "ZodIntersection";
      ZodFirstPartyTypeKind3["ZodTuple"] = "ZodTuple";
      ZodFirstPartyTypeKind3["ZodRecord"] = "ZodRecord";
      ZodFirstPartyTypeKind3["ZodMap"] = "ZodMap";
      ZodFirstPartyTypeKind3["ZodSet"] = "ZodSet";
      ZodFirstPartyTypeKind3["ZodFunction"] = "ZodFunction";
      ZodFirstPartyTypeKind3["ZodLazy"] = "ZodLazy";
      ZodFirstPartyTypeKind3["ZodLiteral"] = "ZodLiteral";
      ZodFirstPartyTypeKind3["ZodEnum"] = "ZodEnum";
      ZodFirstPartyTypeKind3["ZodEffects"] = "ZodEffects";
      ZodFirstPartyTypeKind3["ZodNativeEnum"] = "ZodNativeEnum";
      ZodFirstPartyTypeKind3["ZodOptional"] = "ZodOptional";
      ZodFirstPartyTypeKind3["ZodNullable"] = "ZodNullable";
      ZodFirstPartyTypeKind3["ZodDefault"] = "ZodDefault";
      ZodFirstPartyTypeKind3["ZodCatch"] = "ZodCatch";
      ZodFirstPartyTypeKind3["ZodPromise"] = "ZodPromise";
      ZodFirstPartyTypeKind3["ZodBranded"] = "ZodBranded";
      ZodFirstPartyTypeKind3["ZodPipeline"] = "ZodPipeline";
      ZodFirstPartyTypeKind3["ZodReadonly"] = "ZodReadonly";
    })(ZodFirstPartyTypeKind2 || (exports.ZodFirstPartyTypeKind = ZodFirstPartyTypeKind2 = {}));
    var instanceOfType2 = /* @__PURE__ */ __name((cls, params = {
      message: `Input not instance of ${cls.name}`
    }) => custom2((data) => data instanceof cls, params), "instanceOfType");
    exports.instanceof = instanceOfType2;
    var stringType2 = ZodString2.create;
    exports.string = stringType2;
    var numberType2 = ZodNumber2.create;
    exports.number = numberType2;
    var nanType2 = ZodNaN2.create;
    exports.nan = nanType2;
    var bigIntType2 = ZodBigInt2.create;
    exports.bigint = bigIntType2;
    var booleanType2 = ZodBoolean2.create;
    exports.boolean = booleanType2;
    var dateType2 = ZodDate2.create;
    exports.date = dateType2;
    var symbolType2 = ZodSymbol2.create;
    exports.symbol = symbolType2;
    var undefinedType2 = ZodUndefined2.create;
    exports.undefined = undefinedType2;
    var nullType2 = ZodNull2.create;
    exports.null = nullType2;
    var anyType2 = ZodAny2.create;
    exports.any = anyType2;
    var unknownType2 = ZodUnknown2.create;
    exports.unknown = unknownType2;
    var neverType2 = ZodNever2.create;
    exports.never = neverType2;
    var voidType2 = ZodVoid2.create;
    exports.void = voidType2;
    var arrayType2 = ZodArray2.create;
    exports.array = arrayType2;
    var objectType2 = ZodObject2.create;
    exports.object = objectType2;
    var strictObjectType2 = ZodObject2.strictCreate;
    exports.strictObject = strictObjectType2;
    var unionType2 = ZodUnion2.create;
    exports.union = unionType2;
    var discriminatedUnionType2 = ZodDiscriminatedUnion2.create;
    exports.discriminatedUnion = discriminatedUnionType2;
    var intersectionType2 = ZodIntersection2.create;
    exports.intersection = intersectionType2;
    var tupleType2 = ZodTuple2.create;
    exports.tuple = tupleType2;
    var recordType2 = ZodRecord2.create;
    exports.record = recordType2;
    var mapType2 = ZodMap2.create;
    exports.map = mapType2;
    var setType2 = ZodSet2.create;
    exports.set = setType2;
    var functionType2 = ZodFunction2.create;
    exports.function = functionType2;
    var lazyType2 = ZodLazy2.create;
    exports.lazy = lazyType2;
    var literalType2 = ZodLiteral2.create;
    exports.literal = literalType2;
    var enumType2 = ZodEnum2.create;
    exports.enum = enumType2;
    var nativeEnumType2 = ZodNativeEnum2.create;
    exports.nativeEnum = nativeEnumType2;
    var promiseType2 = ZodPromise2.create;
    exports.promise = promiseType2;
    var effectsType2 = ZodEffects2.create;
    exports.effect = effectsType2;
    exports.transformer = effectsType2;
    var optionalType2 = ZodOptional2.create;
    exports.optional = optionalType2;
    var nullableType2 = ZodNullable2.create;
    exports.nullable = nullableType2;
    var preprocessType2 = ZodEffects2.createWithPreprocess;
    exports.preprocess = preprocessType2;
    var pipelineType2 = ZodPipeline2.create;
    exports.pipeline = pipelineType2;
    var ostring2 = /* @__PURE__ */ __name(() => stringType2().optional(), "ostring");
    exports.ostring = ostring2;
    var onumber2 = /* @__PURE__ */ __name(() => numberType2().optional(), "onumber");
    exports.onumber = onumber2;
    var oboolean2 = /* @__PURE__ */ __name(() => booleanType2().optional(), "oboolean");
    exports.oboolean = oboolean2;
    exports.coerce = {
      string: /* @__PURE__ */ __name((arg) => ZodString2.create({ ...arg, coerce: true }), "string"),
      number: /* @__PURE__ */ __name((arg) => ZodNumber2.create({ ...arg, coerce: true }), "number"),
      boolean: /* @__PURE__ */ __name((arg) => ZodBoolean2.create({
        ...arg,
        coerce: true
      }), "boolean"),
      bigint: /* @__PURE__ */ __name((arg) => ZodBigInt2.create({ ...arg, coerce: true }), "bigint"),
      date: /* @__PURE__ */ __name((arg) => ZodDate2.create({ ...arg, coerce: true }), "date")
    };
    exports.NEVER = parseUtil_js_1.INVALID;
  }
});

// node_modules/zod/v3/external.cjs
var require_external = __commonJS({
  "node_modules/zod/v3/external.cjs"(exports) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m2, k);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m2[k];
        }, "get") };
      }
      Object.defineProperty(o2, k2, desc);
    } : function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m2[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
      for (var p2 in m2) if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2)) __createBinding(exports2, m2, p2);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_errors(), exports);
    __exportStar(require_parseUtil(), exports);
    __exportStar(require_typeAliases(), exports);
    __exportStar(require_util(), exports);
    __exportStar(require_types(), exports);
    __exportStar(require_ZodError(), exports);
  }
});

// node_modules/zod/index.cjs
var require_zod = __commonJS({
  "node_modules/zod/index.cjs"(exports) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m2, k);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m2[k];
        }, "get") };
      }
      Object.defineProperty(o2, k2, desc);
    } : function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m2[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o2, v2) {
      Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
    } : function(o2, v2) {
      o2["default"] = v2;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __exportStar = exports && exports.__exportStar || function(m2, exports2) {
      for (var p2 in m2) if (p2 !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p2)) __createBinding(exports2, m2, p2);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.z = void 0;
    var z = __importStar(require_external());
    exports.z = z;
    __exportStar(require_external(), exports);
    exports.default = z;
  }
});

// node_modules/zod-validation-error/dist/cjs/utils/joinPath.js
var require_joinPath = __commonJS({
  "node_modules/zod-validation-error/dist/cjs/utils/joinPath.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.joinPath = void 0;
    var identifierRegex = /[$_\p{ID_Start}][$\u200c\u200d\p{ID_Continue}]*/u;
    function joinPath(path) {
      if (path.length === 1) {
        return path[0].toString();
      }
      return path.reduce((acc, item) => {
        if (typeof item === "number") {
          return acc + "[" + item.toString() + "]";
        }
        if (item.includes('"')) {
          return acc + '["' + escapeQuotes(item) + '"]';
        }
        if (!identifierRegex.test(item)) {
          return acc + '["' + item + '"]';
        }
        const separator = acc.length === 0 ? "" : ".";
        return acc + separator + item;
      }, "");
    }
    __name(joinPath, "joinPath");
    exports.joinPath = joinPath;
    function escapeQuotes(str) {
      return str.replace(/"/g, '\\"');
    }
    __name(escapeQuotes, "escapeQuotes");
  }
});

// node_modules/zod-validation-error/dist/cjs/utils/NonEmptyArray.js
var require_NonEmptyArray = __commonJS({
  "node_modules/zod-validation-error/dist/cjs/utils/NonEmptyArray.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isNonEmptyArray = void 0;
    function isNonEmptyArray(value) {
      return value.length !== 0;
    }
    __name(isNonEmptyArray, "isNonEmptyArray");
    exports.isNonEmptyArray = isNonEmptyArray;
  }
});

// node_modules/zod-validation-error/dist/cjs/ValidationError.js
var require_ValidationError = __commonJS({
  "node_modules/zod-validation-error/dist/cjs/ValidationError.js"(exports) {
    "use strict";
    init_esm();
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m2, k);
      if (!desc || ("get" in desc ? !m2.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: /* @__PURE__ */ __name(function() {
          return m2[k];
        }, "get") };
      }
      Object.defineProperty(o2, k2, desc);
    } : function(o2, m2, k, k2) {
      if (k2 === void 0) k2 = k;
      o2[k2] = m2[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o2, v2) {
      Object.defineProperty(o2, "default", { enumerable: true, value: v2 });
    } : function(o2, v2) {
      o2["default"] = v2;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.errorMap = exports.isValidationErrorLike = exports.isValidationError = exports.toValidationError = exports.fromZodError = exports.fromZodIssue = exports.ValidationError = void 0;
    var zod = __importStar(require_zod());
    var joinPath_1 = require_joinPath();
    var NonEmptyArray_1 = require_NonEmptyArray();
    var MAX_ISSUES_IN_MESSAGE = 99;
    var ISSUE_SEPARATOR = "; ";
    var UNION_SEPARATOR = ", or ";
    var PREFIX = "Validation error";
    var PREFIX_SEPARATOR = ": ";
    var ValidationError2 = class extends Error {
      static {
        __name(this, "ValidationError");
      }
      details;
      name;
      constructor(message, details = []) {
        super(message);
        this.details = details;
        this.name = "ZodValidationError";
      }
      toString() {
        return this.message;
      }
    };
    exports.ValidationError = ValidationError2;
    function getMessageFromZodIssue(issue, issueSeparator, unionSeparator) {
      if (issue.code === "invalid_union") {
        return issue.unionErrors.reduce((acc, zodError) => {
          const newIssues = zodError.issues.map((issue2) => getMessageFromZodIssue(issue2, issueSeparator, unionSeparator)).join(issueSeparator);
          if (!acc.includes(newIssues)) {
            acc.push(newIssues);
          }
          return acc;
        }, []).join(unionSeparator);
      }
      if ((0, NonEmptyArray_1.isNonEmptyArray)(issue.path)) {
        if (issue.path.length === 1) {
          const identifier = issue.path[0];
          if (typeof identifier === "number") {
            return `${issue.message} at index ${identifier}`;
          }
        }
        return `${issue.message} at "${(0, joinPath_1.joinPath)(issue.path)}"`;
      }
      return issue.message;
    }
    __name(getMessageFromZodIssue, "getMessageFromZodIssue");
    function conditionallyPrefixMessage(reason, prefix, prefixSeparator) {
      if (prefix !== null) {
        if (reason.length > 0) {
          return [prefix, reason].join(prefixSeparator);
        }
        return prefix;
      }
      if (reason.length > 0) {
        return reason;
      }
      return PREFIX;
    }
    __name(conditionallyPrefixMessage, "conditionallyPrefixMessage");
    function fromZodIssue(issue, options = {}) {
      const { issueSeparator = ISSUE_SEPARATOR, unionSeparator = UNION_SEPARATOR, prefixSeparator = PREFIX_SEPARATOR, prefix = PREFIX } = options;
      const reason = getMessageFromZodIssue(issue, issueSeparator, unionSeparator);
      const message = conditionallyPrefixMessage(reason, prefix, prefixSeparator);
      return new ValidationError2(message, [issue]);
    }
    __name(fromZodIssue, "fromZodIssue");
    exports.fromZodIssue = fromZodIssue;
    function fromZodError2(zodError, options = {}) {
      const { maxIssuesInMessage = MAX_ISSUES_IN_MESSAGE, issueSeparator = ISSUE_SEPARATOR, unionSeparator = UNION_SEPARATOR, prefixSeparator = PREFIX_SEPARATOR, prefix = PREFIX } = options;
      const reason = zodError.errors.slice(0, maxIssuesInMessage).map((issue) => getMessageFromZodIssue(issue, issueSeparator, unionSeparator)).join(issueSeparator);
      const message = conditionallyPrefixMessage(reason, prefix, prefixSeparator);
      return new ValidationError2(message, zodError.errors);
    }
    __name(fromZodError2, "fromZodError");
    exports.fromZodError = fromZodError2;
    var toValidationError = /* @__PURE__ */ __name((options = {}) => (err) => {
      if (err instanceof zod.ZodError) {
        return fromZodError2(err, options);
      }
      if (err instanceof Error) {
        return err;
      }
      return new Error("Unknown error");
    }, "toValidationError");
    exports.toValidationError = toValidationError;
    function isValidationError(err) {
      return err instanceof ValidationError2;
    }
    __name(isValidationError, "isValidationError");
    exports.isValidationError = isValidationError;
    function isValidationErrorLike(err) {
      return err instanceof Error && err.name === "ZodValidationError";
    }
    __name(isValidationErrorLike, "isValidationErrorLike");
    exports.isValidationErrorLike = isValidationErrorLike;
    var errorMap2 = /* @__PURE__ */ __name((issue, ctx) => {
      const error = fromZodIssue({
        ...issue,
        message: issue.message ?? ctx.defaultError
      });
      return {
        message: error.message
      };
    }, "errorMap");
    exports.errorMap = errorMap2;
  }
});

// node_modules/zod-validation-error/dist/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/zod-validation-error/dist/cjs/index.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.errorMap = exports.fromZodIssue = exports.fromZodError = exports.isValidationErrorLike = exports.isValidationError = exports.toValidationError = exports.ValidationError = void 0;
    var ValidationError_1 = require_ValidationError();
    Object.defineProperty(exports, "ValidationError", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return ValidationError_1.ValidationError;
    }, "get") });
    Object.defineProperty(exports, "toValidationError", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return ValidationError_1.toValidationError;
    }, "get") });
    Object.defineProperty(exports, "isValidationError", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return ValidationError_1.isValidationError;
    }, "get") });
    Object.defineProperty(exports, "isValidationErrorLike", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return ValidationError_1.isValidationErrorLike;
    }, "get") });
    Object.defineProperty(exports, "fromZodError", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return ValidationError_1.fromZodError;
    }, "get") });
    Object.defineProperty(exports, "fromZodIssue", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return ValidationError_1.fromZodIssue;
    }, "get") });
    Object.defineProperty(exports, "errorMap", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return ValidationError_1.errorMap;
    }, "get") });
  }
});

// node_modules/@opentelemetry/core/build/src/trace/suppress-tracing.js
var require_suppress_tracing = __commonJS({
  "node_modules/@opentelemetry/core/build/src/trace/suppress-tracing.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isTracingSuppressed = exports.unsuppressTracing = exports.suppressTracing = void 0;
    var api_1 = (init_esm2(), __toCommonJS(esm_exports));
    var SUPPRESS_TRACING_KEY = (0, api_1.createContextKey)("OpenTelemetry SDK Context Key SUPPRESS_TRACING");
    function suppressTracing2(context2) {
      return context2.setValue(SUPPRESS_TRACING_KEY, true);
    }
    __name(suppressTracing2, "suppressTracing");
    exports.suppressTracing = suppressTracing2;
    function unsuppressTracing(context2) {
      return context2.deleteValue(SUPPRESS_TRACING_KEY);
    }
    __name(unsuppressTracing, "unsuppressTracing");
    exports.unsuppressTracing = unsuppressTracing;
    function isTracingSuppressed(context2) {
      return context2.getValue(SUPPRESS_TRACING_KEY) === true;
    }
    __name(isTracingSuppressed, "isTracingSuppressed");
    exports.isTracingSuppressed = isTracingSuppressed;
  }
});

// node_modules/@opentelemetry/core/build/src/baggage/constants.js
var require_constants = __commonJS({
  "node_modules/@opentelemetry/core/build/src/baggage/constants.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BAGGAGE_MAX_TOTAL_LENGTH = exports.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS = exports.BAGGAGE_MAX_NAME_VALUE_PAIRS = exports.BAGGAGE_HEADER = exports.BAGGAGE_ITEMS_SEPARATOR = exports.BAGGAGE_PROPERTIES_SEPARATOR = exports.BAGGAGE_KEY_PAIR_SEPARATOR = void 0;
    exports.BAGGAGE_KEY_PAIR_SEPARATOR = "=";
    exports.BAGGAGE_PROPERTIES_SEPARATOR = ";";
    exports.BAGGAGE_ITEMS_SEPARATOR = ",";
    exports.BAGGAGE_HEADER = "baggage";
    exports.BAGGAGE_MAX_NAME_VALUE_PAIRS = 180;
    exports.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS = 4096;
    exports.BAGGAGE_MAX_TOTAL_LENGTH = 8192;
  }
});

// node_modules/@opentelemetry/core/build/src/baggage/utils.js
var require_utils = __commonJS({
  "node_modules/@opentelemetry/core/build/src/baggage/utils.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseKeyPairsIntoRecord = exports.parsePairKeyValue = exports.getKeyPairs = exports.serializeKeyPairs = void 0;
    var api_1 = (init_esm2(), __toCommonJS(esm_exports));
    var constants_1 = require_constants();
    function serializeKeyPairs(keyPairs) {
      return keyPairs.reduce((hValue, current) => {
        const value = `${hValue}${hValue !== "" ? constants_1.BAGGAGE_ITEMS_SEPARATOR : ""}${current}`;
        return value.length > constants_1.BAGGAGE_MAX_TOTAL_LENGTH ? hValue : value;
      }, "");
    }
    __name(serializeKeyPairs, "serializeKeyPairs");
    exports.serializeKeyPairs = serializeKeyPairs;
    function getKeyPairs(baggage) {
      return baggage.getAllEntries().map(([key, value]) => {
        let entry = `${encodeURIComponent(key)}=${encodeURIComponent(value.value)}`;
        if (value.metadata !== void 0) {
          entry += constants_1.BAGGAGE_PROPERTIES_SEPARATOR + value.metadata.toString();
        }
        return entry;
      });
    }
    __name(getKeyPairs, "getKeyPairs");
    exports.getKeyPairs = getKeyPairs;
    function parsePairKeyValue(entry) {
      const valueProps = entry.split(constants_1.BAGGAGE_PROPERTIES_SEPARATOR);
      if (valueProps.length <= 0)
        return;
      const keyPairPart = valueProps.shift();
      if (!keyPairPart)
        return;
      const separatorIndex = keyPairPart.indexOf(constants_1.BAGGAGE_KEY_PAIR_SEPARATOR);
      if (separatorIndex <= 0)
        return;
      const key = decodeURIComponent(keyPairPart.substring(0, separatorIndex).trim());
      const value = decodeURIComponent(keyPairPart.substring(separatorIndex + 1).trim());
      let metadata2;
      if (valueProps.length > 0) {
        metadata2 = (0, api_1.baggageEntryMetadataFromString)(valueProps.join(constants_1.BAGGAGE_PROPERTIES_SEPARATOR));
      }
      return { key, value, metadata: metadata2 };
    }
    __name(parsePairKeyValue, "parsePairKeyValue");
    exports.parsePairKeyValue = parsePairKeyValue;
    function parseKeyPairsIntoRecord(value) {
      const result = {};
      if (typeof value === "string" && value.length > 0) {
        value.split(constants_1.BAGGAGE_ITEMS_SEPARATOR).forEach((entry) => {
          const keyPair = parsePairKeyValue(entry);
          if (keyPair !== void 0 && keyPair.value.length > 0) {
            result[keyPair.key] = keyPair.value;
          }
        });
      }
      return result;
    }
    __name(parseKeyPairsIntoRecord, "parseKeyPairsIntoRecord");
    exports.parseKeyPairsIntoRecord = parseKeyPairsIntoRecord;
  }
});

// node_modules/@opentelemetry/core/build/src/baggage/propagation/W3CBaggagePropagator.js
var require_W3CBaggagePropagator = __commonJS({
  "node_modules/@opentelemetry/core/build/src/baggage/propagation/W3CBaggagePropagator.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.W3CBaggagePropagator = void 0;
    var api_1 = (init_esm2(), __toCommonJS(esm_exports));
    var suppress_tracing_1 = require_suppress_tracing();
    var constants_1 = require_constants();
    var utils_1 = require_utils();
    var W3CBaggagePropagator = class {
      static {
        __name(this, "W3CBaggagePropagator");
      }
      inject(context2, carrier, setter) {
        const baggage = api_1.propagation.getBaggage(context2);
        if (!baggage || (0, suppress_tracing_1.isTracingSuppressed)(context2))
          return;
        const keyPairs = (0, utils_1.getKeyPairs)(baggage).filter((pair) => {
          return pair.length <= constants_1.BAGGAGE_MAX_PER_NAME_VALUE_PAIRS;
        }).slice(0, constants_1.BAGGAGE_MAX_NAME_VALUE_PAIRS);
        const headerValue = (0, utils_1.serializeKeyPairs)(keyPairs);
        if (headerValue.length > 0) {
          setter.set(carrier, constants_1.BAGGAGE_HEADER, headerValue);
        }
      }
      extract(context2, carrier, getter) {
        const headerValue = getter.get(carrier, constants_1.BAGGAGE_HEADER);
        const baggageString = Array.isArray(headerValue) ? headerValue.join(constants_1.BAGGAGE_ITEMS_SEPARATOR) : headerValue;
        if (!baggageString)
          return context2;
        const baggage = {};
        if (baggageString.length === 0) {
          return context2;
        }
        const pairs = baggageString.split(constants_1.BAGGAGE_ITEMS_SEPARATOR);
        pairs.forEach((entry) => {
          const keyPair = (0, utils_1.parsePairKeyValue)(entry);
          if (keyPair) {
            const baggageEntry = { value: keyPair.value };
            if (keyPair.metadata) {
              baggageEntry.metadata = keyPair.metadata;
            }
            baggage[keyPair.key] = baggageEntry;
          }
        });
        if (Object.entries(baggage).length === 0) {
          return context2;
        }
        return api_1.propagation.setBaggage(context2, api_1.propagation.createBaggage(baggage));
      }
      fields() {
        return [constants_1.BAGGAGE_HEADER];
      }
    };
    exports.W3CBaggagePropagator = W3CBaggagePropagator;
  }
});

// node_modules/@opentelemetry/core/build/src/common/anchored-clock.js
var require_anchored_clock = __commonJS({
  "node_modules/@opentelemetry/core/build/src/common/anchored-clock.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AnchoredClock = void 0;
    var AnchoredClock = class {
      static {
        __name(this, "AnchoredClock");
      }
      _monotonicClock;
      _epochMillis;
      _performanceMillis;
      /**
       * Create a new AnchoredClock anchored to the current time returned by systemClock.
       *
       * @param systemClock should be a clock that returns the number of milliseconds since January 1 1970 such as Date
       * @param monotonicClock should be a clock that counts milliseconds monotonically such as window.performance or perf_hooks.performance
       */
      constructor(systemClock, monotonicClock) {
        this._monotonicClock = monotonicClock;
        this._epochMillis = systemClock.now();
        this._performanceMillis = monotonicClock.now();
      }
      /**
       * Returns the current time by adding the number of milliseconds since the
       * AnchoredClock was created to the creation epoch time
       */
      now() {
        const delta = this._monotonicClock.now() - this._performanceMillis;
        return this._epochMillis + delta;
      }
    };
    exports.AnchoredClock = AnchoredClock;
  }
});

// node_modules/@opentelemetry/core/build/src/common/attributes.js
var require_attributes = __commonJS({
  "node_modules/@opentelemetry/core/build/src/common/attributes.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isAttributeValue = exports.isAttributeKey = exports.sanitizeAttributes = void 0;
    var api_1 = (init_esm2(), __toCommonJS(esm_exports));
    function sanitizeAttributes(attributes) {
      const out = {};
      if (typeof attributes !== "object" || attributes == null) {
        return out;
      }
      for (const [key, val] of Object.entries(attributes)) {
        if (!isAttributeKey(key)) {
          api_1.diag.warn(`Invalid attribute key: ${key}`);
          continue;
        }
        if (!isAttributeValue(val)) {
          api_1.diag.warn(`Invalid attribute value set for key: ${key}`);
          continue;
        }
        if (Array.isArray(val)) {
          out[key] = val.slice();
        } else {
          out[key] = val;
        }
      }
      return out;
    }
    __name(sanitizeAttributes, "sanitizeAttributes");
    exports.sanitizeAttributes = sanitizeAttributes;
    function isAttributeKey(key) {
      return typeof key === "string" && key.length > 0;
    }
    __name(isAttributeKey, "isAttributeKey");
    exports.isAttributeKey = isAttributeKey;
    function isAttributeValue(val) {
      if (val == null) {
        return true;
      }
      if (Array.isArray(val)) {
        return isHomogeneousAttributeValueArray(val);
      }
      return isValidPrimitiveAttributeValue(val);
    }
    __name(isAttributeValue, "isAttributeValue");
    exports.isAttributeValue = isAttributeValue;
    function isHomogeneousAttributeValueArray(arr) {
      let type;
      for (const element of arr) {
        if (element == null)
          continue;
        if (!type) {
          if (isValidPrimitiveAttributeValue(element)) {
            type = typeof element;
            continue;
          }
          return false;
        }
        if (typeof element === type) {
          continue;
        }
        return false;
      }
      return true;
    }
    __name(isHomogeneousAttributeValueArray, "isHomogeneousAttributeValueArray");
    function isValidPrimitiveAttributeValue(val) {
      switch (typeof val) {
        case "number":
        case "boolean":
        case "string":
          return true;
      }
      return false;
    }
    __name(isValidPrimitiveAttributeValue, "isValidPrimitiveAttributeValue");
  }
});

// node_modules/@opentelemetry/core/build/src/common/logging-error-handler.js
var require_logging_error_handler = __commonJS({
  "node_modules/@opentelemetry/core/build/src/common/logging-error-handler.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.loggingErrorHandler = void 0;
    var api_1 = (init_esm2(), __toCommonJS(esm_exports));
    function loggingErrorHandler() {
      return (ex) => {
        api_1.diag.error(stringifyException(ex));
      };
    }
    __name(loggingErrorHandler, "loggingErrorHandler");
    exports.loggingErrorHandler = loggingErrorHandler;
    function stringifyException(ex) {
      if (typeof ex === "string") {
        return ex;
      } else {
        return JSON.stringify(flattenException(ex));
      }
    }
    __name(stringifyException, "stringifyException");
    function flattenException(ex) {
      const result = {};
      let current = ex;
      while (current !== null) {
        Object.getOwnPropertyNames(current).forEach((propertyName) => {
          if (result[propertyName])
            return;
          const value = current[propertyName];
          if (value) {
            result[propertyName] = String(value);
          }
        });
        current = Object.getPrototypeOf(current);
      }
      return result;
    }
    __name(flattenException, "flattenException");
  }
});

// node_modules/@opentelemetry/core/build/src/common/global-error-handler.js
var require_global_error_handler = __commonJS({
  "node_modules/@opentelemetry/core/build/src/common/global-error-handler.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.globalErrorHandler = exports.setGlobalErrorHandler = void 0;
    var logging_error_handler_1 = require_logging_error_handler();
    var delegateHandler = (0, logging_error_handler_1.loggingErrorHandler)();
    function setGlobalErrorHandler(handler) {
      delegateHandler = handler;
    }
    __name(setGlobalErrorHandler, "setGlobalErrorHandler");
    exports.setGlobalErrorHandler = setGlobalErrorHandler;
    function globalErrorHandler(ex) {
      try {
        delegateHandler(ex);
      } catch {
      }
    }
    __name(globalErrorHandler, "globalErrorHandler");
    exports.globalErrorHandler = globalErrorHandler;
  }
});

// node_modules/@opentelemetry/core/build/src/platform/node/environment.js
var require_environment = __commonJS({
  "node_modules/@opentelemetry/core/build/src/platform/node/environment.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getStringListFromEnv = exports.getBooleanFromEnv = exports.getStringFromEnv = exports.getNumberFromEnv = void 0;
    var api_1 = (init_esm2(), __toCommonJS(esm_exports));
    var util_1 = __require("util");
    function getNumberFromEnv(key) {
      const raw = process.env[key];
      if (raw == null || raw.trim() === "") {
        return void 0;
      }
      const value = Number(raw);
      if (isNaN(value)) {
        api_1.diag.warn(`Unknown value ${(0, util_1.inspect)(raw)} for ${key}, expected a number, using defaults`);
        return void 0;
      }
      return value;
    }
    __name(getNumberFromEnv, "getNumberFromEnv");
    exports.getNumberFromEnv = getNumberFromEnv;
    function getStringFromEnv(key) {
      const raw = process.env[key];
      if (raw == null || raw.trim() === "") {
        return void 0;
      }
      return raw;
    }
    __name(getStringFromEnv, "getStringFromEnv");
    exports.getStringFromEnv = getStringFromEnv;
    function getBooleanFromEnv(key) {
      const raw = process.env[key]?.trim().toLowerCase();
      if (raw == null || raw === "") {
        return false;
      }
      if (raw === "true") {
        return true;
      } else if (raw === "false") {
        return false;
      } else {
        api_1.diag.warn(`Unknown value ${(0, util_1.inspect)(raw)} for ${key}, expected 'true' or 'false', falling back to 'false' (default)`);
        return false;
      }
    }
    __name(getBooleanFromEnv, "getBooleanFromEnv");
    exports.getBooleanFromEnv = getBooleanFromEnv;
    function getStringListFromEnv(key) {
      return getStringFromEnv(key)?.split(",").map((v2) => v2.trim()).filter((s) => s !== "");
    }
    __name(getStringListFromEnv, "getStringListFromEnv");
    exports.getStringListFromEnv = getStringListFromEnv;
  }
});

// node_modules/@opentelemetry/core/build/src/platform/node/globalThis.js
var require_globalThis2 = __commonJS({
  "node_modules/@opentelemetry/core/build/src/platform/node/globalThis.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports._globalThis = void 0;
    exports._globalThis = typeof globalThis === "object" ? globalThis : global;
  }
});

// node_modules/@opentelemetry/core/build/src/platform/node/performance.js
var require_performance = __commonJS({
  "node_modules/@opentelemetry/core/build/src/platform/node/performance.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.otperformance = void 0;
    var perf_hooks_1 = __require("perf_hooks");
    exports.otperformance = perf_hooks_1.performance;
  }
});

// node_modules/@opentelemetry/core/build/src/version.js
var require_version = __commonJS({
  "node_modules/@opentelemetry/core/build/src/version.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VERSION = void 0;
    exports.VERSION = "2.0.1";
  }
});

// node_modules/@opentelemetry/semantic-conventions/build/esm/internal/utils.js
// @__NO_SIDE_EFFECTS__
function createConstMap(values) {
  let res = {};
  const len = values.length;
  for (let lp = 0; lp < len; lp++) {
    const val = values[lp];
    if (val) {
      res[String(val).toUpperCase().replace(/[-.]/g, "_")] = val;
    }
  }
  return res;
}
var init_utils3 = __esm({
  "node_modules/@opentelemetry/semantic-conventions/build/esm/internal/utils.js"() {
    init_esm();
    __name(createConstMap, "createConstMap");
  }
});

// node_modules/@opentelemetry/semantic-conventions/build/esm/trace/SemanticAttributes.js
var TMP_AWS_LAMBDA_INVOKED_ARN, TMP_DB_SYSTEM, TMP_DB_CONNECTION_STRING, TMP_DB_USER, TMP_DB_JDBC_DRIVER_CLASSNAME, TMP_DB_NAME, TMP_DB_STATEMENT, TMP_DB_OPERATION, TMP_DB_MSSQL_INSTANCE_NAME, TMP_DB_CASSANDRA_KEYSPACE, TMP_DB_CASSANDRA_PAGE_SIZE, TMP_DB_CASSANDRA_CONSISTENCY_LEVEL, TMP_DB_CASSANDRA_TABLE, TMP_DB_CASSANDRA_IDEMPOTENCE, TMP_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT, TMP_DB_CASSANDRA_COORDINATOR_ID, TMP_DB_CASSANDRA_COORDINATOR_DC, TMP_DB_HBASE_NAMESPACE, TMP_DB_REDIS_DATABASE_INDEX, TMP_DB_MONGODB_COLLECTION, TMP_DB_SQL_TABLE, TMP_EXCEPTION_TYPE, TMP_EXCEPTION_MESSAGE, TMP_EXCEPTION_STACKTRACE, TMP_EXCEPTION_ESCAPED, TMP_FAAS_TRIGGER, TMP_FAAS_EXECUTION, TMP_FAAS_DOCUMENT_COLLECTION, TMP_FAAS_DOCUMENT_OPERATION, TMP_FAAS_DOCUMENT_TIME, TMP_FAAS_DOCUMENT_NAME, TMP_FAAS_TIME, TMP_FAAS_CRON, TMP_FAAS_COLDSTART, TMP_FAAS_INVOKED_NAME, TMP_FAAS_INVOKED_PROVIDER, TMP_FAAS_INVOKED_REGION, TMP_NET_TRANSPORT, TMP_NET_PEER_IP, TMP_NET_PEER_PORT, TMP_NET_PEER_NAME, TMP_NET_HOST_IP, TMP_NET_HOST_PORT, TMP_NET_HOST_NAME, TMP_NET_HOST_CONNECTION_TYPE, TMP_NET_HOST_CONNECTION_SUBTYPE, TMP_NET_HOST_CARRIER_NAME, TMP_NET_HOST_CARRIER_MCC, TMP_NET_HOST_CARRIER_MNC, TMP_NET_HOST_CARRIER_ICC, TMP_PEER_SERVICE, TMP_ENDUSER_ID, TMP_ENDUSER_ROLE, TMP_ENDUSER_SCOPE, TMP_THREAD_ID, TMP_THREAD_NAME, TMP_CODE_FUNCTION, TMP_CODE_NAMESPACE, TMP_CODE_FILEPATH, TMP_CODE_LINENO, TMP_HTTP_METHOD, TMP_HTTP_URL, TMP_HTTP_TARGET, TMP_HTTP_HOST, TMP_HTTP_SCHEME, TMP_HTTP_STATUS_CODE, TMP_HTTP_FLAVOR, TMP_HTTP_USER_AGENT, TMP_HTTP_REQUEST_CONTENT_LENGTH, TMP_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED, TMP_HTTP_RESPONSE_CONTENT_LENGTH, TMP_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED, TMP_HTTP_SERVER_NAME, TMP_HTTP_ROUTE, TMP_HTTP_CLIENT_IP, TMP_AWS_DYNAMODB_TABLE_NAMES, TMP_AWS_DYNAMODB_CONSUMED_CAPACITY, TMP_AWS_DYNAMODB_ITEM_COLLECTION_METRICS, TMP_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY, TMP_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY, TMP_AWS_DYNAMODB_CONSISTENT_READ, TMP_AWS_DYNAMODB_PROJECTION, TMP_AWS_DYNAMODB_LIMIT, TMP_AWS_DYNAMODB_ATTRIBUTES_TO_GET, TMP_AWS_DYNAMODB_INDEX_NAME, TMP_AWS_DYNAMODB_SELECT, TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES, TMP_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES, TMP_AWS_DYNAMODB_EXCLUSIVE_START_TABLE, TMP_AWS_DYNAMODB_TABLE_COUNT, TMP_AWS_DYNAMODB_SCAN_FORWARD, TMP_AWS_DYNAMODB_SEGMENT, TMP_AWS_DYNAMODB_TOTAL_SEGMENTS, TMP_AWS_DYNAMODB_COUNT, TMP_AWS_DYNAMODB_SCANNED_COUNT, TMP_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS, TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES, TMP_MESSAGING_SYSTEM, TMP_MESSAGING_DESTINATION, TMP_MESSAGING_DESTINATION_KIND, TMP_MESSAGING_TEMP_DESTINATION, TMP_MESSAGING_PROTOCOL, TMP_MESSAGING_PROTOCOL_VERSION, TMP_MESSAGING_URL, TMP_MESSAGING_MESSAGE_ID, TMP_MESSAGING_CONVERSATION_ID, TMP_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES, TMP_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES, TMP_MESSAGING_OPERATION, TMP_MESSAGING_CONSUMER_ID, TMP_MESSAGING_RABBITMQ_ROUTING_KEY, TMP_MESSAGING_KAFKA_MESSAGE_KEY, TMP_MESSAGING_KAFKA_CONSUMER_GROUP, TMP_MESSAGING_KAFKA_CLIENT_ID, TMP_MESSAGING_KAFKA_PARTITION, TMP_MESSAGING_KAFKA_TOMBSTONE, TMP_RPC_SYSTEM, TMP_RPC_SERVICE, TMP_RPC_METHOD, TMP_RPC_GRPC_STATUS_CODE, TMP_RPC_JSONRPC_VERSION, TMP_RPC_JSONRPC_REQUEST_ID, TMP_RPC_JSONRPC_ERROR_CODE, TMP_RPC_JSONRPC_ERROR_MESSAGE, TMP_MESSAGE_TYPE, TMP_MESSAGE_ID, TMP_MESSAGE_COMPRESSED_SIZE, TMP_MESSAGE_UNCOMPRESSED_SIZE, SEMATTRS_AWS_LAMBDA_INVOKED_ARN, SEMATTRS_DB_SYSTEM, SEMATTRS_DB_CONNECTION_STRING, SEMATTRS_DB_USER, SEMATTRS_DB_JDBC_DRIVER_CLASSNAME, SEMATTRS_DB_NAME, SEMATTRS_DB_STATEMENT, SEMATTRS_DB_OPERATION, SEMATTRS_DB_MSSQL_INSTANCE_NAME, SEMATTRS_DB_CASSANDRA_KEYSPACE, SEMATTRS_DB_CASSANDRA_PAGE_SIZE, SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL, SEMATTRS_DB_CASSANDRA_TABLE, SEMATTRS_DB_CASSANDRA_IDEMPOTENCE, SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT, SEMATTRS_DB_CASSANDRA_COORDINATOR_ID, SEMATTRS_DB_CASSANDRA_COORDINATOR_DC, SEMATTRS_DB_HBASE_NAMESPACE, SEMATTRS_DB_REDIS_DATABASE_INDEX, SEMATTRS_DB_MONGODB_COLLECTION, SEMATTRS_DB_SQL_TABLE, SEMATTRS_EXCEPTION_TYPE, SEMATTRS_EXCEPTION_MESSAGE, SEMATTRS_EXCEPTION_STACKTRACE, SEMATTRS_EXCEPTION_ESCAPED, SEMATTRS_FAAS_TRIGGER, SEMATTRS_FAAS_EXECUTION, SEMATTRS_FAAS_DOCUMENT_COLLECTION, SEMATTRS_FAAS_DOCUMENT_OPERATION, SEMATTRS_FAAS_DOCUMENT_TIME, SEMATTRS_FAAS_DOCUMENT_NAME, SEMATTRS_FAAS_TIME, SEMATTRS_FAAS_CRON, SEMATTRS_FAAS_COLDSTART, SEMATTRS_FAAS_INVOKED_NAME, SEMATTRS_FAAS_INVOKED_PROVIDER, SEMATTRS_FAAS_INVOKED_REGION, SEMATTRS_NET_TRANSPORT, SEMATTRS_NET_PEER_IP, SEMATTRS_NET_PEER_PORT, SEMATTRS_NET_PEER_NAME, SEMATTRS_NET_HOST_IP, SEMATTRS_NET_HOST_PORT, SEMATTRS_NET_HOST_NAME, SEMATTRS_NET_HOST_CONNECTION_TYPE, SEMATTRS_NET_HOST_CONNECTION_SUBTYPE, SEMATTRS_NET_HOST_CARRIER_NAME, SEMATTRS_NET_HOST_CARRIER_MCC, SEMATTRS_NET_HOST_CARRIER_MNC, SEMATTRS_NET_HOST_CARRIER_ICC, SEMATTRS_PEER_SERVICE, SEMATTRS_ENDUSER_ID, SEMATTRS_ENDUSER_ROLE, SEMATTRS_ENDUSER_SCOPE, SEMATTRS_THREAD_ID, SEMATTRS_THREAD_NAME, SEMATTRS_CODE_FUNCTION, SEMATTRS_CODE_NAMESPACE, SEMATTRS_CODE_FILEPATH, SEMATTRS_CODE_LINENO, SEMATTRS_HTTP_METHOD, SEMATTRS_HTTP_URL, SEMATTRS_HTTP_TARGET, SEMATTRS_HTTP_HOST, SEMATTRS_HTTP_SCHEME, SEMATTRS_HTTP_STATUS_CODE, SEMATTRS_HTTP_FLAVOR, SEMATTRS_HTTP_USER_AGENT, SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH, SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED, SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH, SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED, SEMATTRS_HTTP_SERVER_NAME, SEMATTRS_HTTP_ROUTE, SEMATTRS_HTTP_CLIENT_IP, SEMATTRS_AWS_DYNAMODB_TABLE_NAMES, SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY, SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS, SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY, SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY, SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ, SEMATTRS_AWS_DYNAMODB_PROJECTION, SEMATTRS_AWS_DYNAMODB_LIMIT, SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET, SEMATTRS_AWS_DYNAMODB_INDEX_NAME, SEMATTRS_AWS_DYNAMODB_SELECT, SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES, SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES, SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE, SEMATTRS_AWS_DYNAMODB_TABLE_COUNT, SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD, SEMATTRS_AWS_DYNAMODB_SEGMENT, SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS, SEMATTRS_AWS_DYNAMODB_COUNT, SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT, SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS, SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES, SEMATTRS_MESSAGING_SYSTEM, SEMATTRS_MESSAGING_DESTINATION, SEMATTRS_MESSAGING_DESTINATION_KIND, SEMATTRS_MESSAGING_TEMP_DESTINATION, SEMATTRS_MESSAGING_PROTOCOL, SEMATTRS_MESSAGING_PROTOCOL_VERSION, SEMATTRS_MESSAGING_URL, SEMATTRS_MESSAGING_MESSAGE_ID, SEMATTRS_MESSAGING_CONVERSATION_ID, SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES, SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES, SEMATTRS_MESSAGING_OPERATION, SEMATTRS_MESSAGING_CONSUMER_ID, SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY, SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY, SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP, SEMATTRS_MESSAGING_KAFKA_CLIENT_ID, SEMATTRS_MESSAGING_KAFKA_PARTITION, SEMATTRS_MESSAGING_KAFKA_TOMBSTONE, SEMATTRS_RPC_SYSTEM, SEMATTRS_RPC_SERVICE, SEMATTRS_RPC_METHOD, SEMATTRS_RPC_GRPC_STATUS_CODE, SEMATTRS_RPC_JSONRPC_VERSION, SEMATTRS_RPC_JSONRPC_REQUEST_ID, SEMATTRS_RPC_JSONRPC_ERROR_CODE, SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE, SEMATTRS_MESSAGE_TYPE, SEMATTRS_MESSAGE_ID, SEMATTRS_MESSAGE_COMPRESSED_SIZE, SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE, SemanticAttributes, TMP_DBSYSTEMVALUES_OTHER_SQL, TMP_DBSYSTEMVALUES_MSSQL, TMP_DBSYSTEMVALUES_MYSQL, TMP_DBSYSTEMVALUES_ORACLE, TMP_DBSYSTEMVALUES_DB2, TMP_DBSYSTEMVALUES_POSTGRESQL, TMP_DBSYSTEMVALUES_REDSHIFT, TMP_DBSYSTEMVALUES_HIVE, TMP_DBSYSTEMVALUES_CLOUDSCAPE, TMP_DBSYSTEMVALUES_HSQLDB, TMP_DBSYSTEMVALUES_PROGRESS, TMP_DBSYSTEMVALUES_MAXDB, TMP_DBSYSTEMVALUES_HANADB, TMP_DBSYSTEMVALUES_INGRES, TMP_DBSYSTEMVALUES_FIRSTSQL, TMP_DBSYSTEMVALUES_EDB, TMP_DBSYSTEMVALUES_CACHE, TMP_DBSYSTEMVALUES_ADABAS, TMP_DBSYSTEMVALUES_FIREBIRD, TMP_DBSYSTEMVALUES_DERBY, TMP_DBSYSTEMVALUES_FILEMAKER, TMP_DBSYSTEMVALUES_INFORMIX, TMP_DBSYSTEMVALUES_INSTANTDB, TMP_DBSYSTEMVALUES_INTERBASE, TMP_DBSYSTEMVALUES_MARIADB, TMP_DBSYSTEMVALUES_NETEZZA, TMP_DBSYSTEMVALUES_PERVASIVE, TMP_DBSYSTEMVALUES_POINTBASE, TMP_DBSYSTEMVALUES_SQLITE, TMP_DBSYSTEMVALUES_SYBASE, TMP_DBSYSTEMVALUES_TERADATA, TMP_DBSYSTEMVALUES_VERTICA, TMP_DBSYSTEMVALUES_H2, TMP_DBSYSTEMVALUES_COLDFUSION, TMP_DBSYSTEMVALUES_CASSANDRA, TMP_DBSYSTEMVALUES_HBASE, TMP_DBSYSTEMVALUES_MONGODB, TMP_DBSYSTEMVALUES_REDIS, TMP_DBSYSTEMVALUES_COUCHBASE, TMP_DBSYSTEMVALUES_COUCHDB, TMP_DBSYSTEMVALUES_COSMOSDB, TMP_DBSYSTEMVALUES_DYNAMODB, TMP_DBSYSTEMVALUES_NEO4J, TMP_DBSYSTEMVALUES_GEODE, TMP_DBSYSTEMVALUES_ELASTICSEARCH, TMP_DBSYSTEMVALUES_MEMCACHED, TMP_DBSYSTEMVALUES_COCKROACHDB, DBSYSTEMVALUES_OTHER_SQL, DBSYSTEMVALUES_MSSQL, DBSYSTEMVALUES_MYSQL, DBSYSTEMVALUES_ORACLE, DBSYSTEMVALUES_DB2, DBSYSTEMVALUES_POSTGRESQL, DBSYSTEMVALUES_REDSHIFT, DBSYSTEMVALUES_HIVE, DBSYSTEMVALUES_CLOUDSCAPE, DBSYSTEMVALUES_HSQLDB, DBSYSTEMVALUES_PROGRESS, DBSYSTEMVALUES_MAXDB, DBSYSTEMVALUES_HANADB, DBSYSTEMVALUES_INGRES, DBSYSTEMVALUES_FIRSTSQL, DBSYSTEMVALUES_EDB, DBSYSTEMVALUES_CACHE, DBSYSTEMVALUES_ADABAS, DBSYSTEMVALUES_FIREBIRD, DBSYSTEMVALUES_DERBY, DBSYSTEMVALUES_FILEMAKER, DBSYSTEMVALUES_INFORMIX, DBSYSTEMVALUES_INSTANTDB, DBSYSTEMVALUES_INTERBASE, DBSYSTEMVALUES_MARIADB, DBSYSTEMVALUES_NETEZZA, DBSYSTEMVALUES_PERVASIVE, DBSYSTEMVALUES_POINTBASE, DBSYSTEMVALUES_SQLITE, DBSYSTEMVALUES_SYBASE, DBSYSTEMVALUES_TERADATA, DBSYSTEMVALUES_VERTICA, DBSYSTEMVALUES_H2, DBSYSTEMVALUES_COLDFUSION, DBSYSTEMVALUES_CASSANDRA, DBSYSTEMVALUES_HBASE, DBSYSTEMVALUES_MONGODB, DBSYSTEMVALUES_REDIS, DBSYSTEMVALUES_COUCHBASE, DBSYSTEMVALUES_COUCHDB, DBSYSTEMVALUES_COSMOSDB, DBSYSTEMVALUES_DYNAMODB, DBSYSTEMVALUES_NEO4J, DBSYSTEMVALUES_GEODE, DBSYSTEMVALUES_ELASTICSEARCH, DBSYSTEMVALUES_MEMCACHED, DBSYSTEMVALUES_COCKROACHDB, DbSystemValues, TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ALL, TMP_DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM, TMP_DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM, TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM, TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ONE, TMP_DBCASSANDRACONSISTENCYLEVELVALUES_TWO, TMP_DBCASSANDRACONSISTENCYLEVELVALUES_THREE, TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE, TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ANY, TMP_DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL, TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL, DBCASSANDRACONSISTENCYLEVELVALUES_ALL, DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM, DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM, DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM, DBCASSANDRACONSISTENCYLEVELVALUES_ONE, DBCASSANDRACONSISTENCYLEVELVALUES_TWO, DBCASSANDRACONSISTENCYLEVELVALUES_THREE, DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE, DBCASSANDRACONSISTENCYLEVELVALUES_ANY, DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL, DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL, DbCassandraConsistencyLevelValues, TMP_FAASTRIGGERVALUES_DATASOURCE, TMP_FAASTRIGGERVALUES_HTTP, TMP_FAASTRIGGERVALUES_PUBSUB, TMP_FAASTRIGGERVALUES_TIMER, TMP_FAASTRIGGERVALUES_OTHER, FAASTRIGGERVALUES_DATASOURCE, FAASTRIGGERVALUES_HTTP, FAASTRIGGERVALUES_PUBSUB, FAASTRIGGERVALUES_TIMER, FAASTRIGGERVALUES_OTHER, FaasTriggerValues, TMP_FAASDOCUMENTOPERATIONVALUES_INSERT, TMP_FAASDOCUMENTOPERATIONVALUES_EDIT, TMP_FAASDOCUMENTOPERATIONVALUES_DELETE, FAASDOCUMENTOPERATIONVALUES_INSERT, FAASDOCUMENTOPERATIONVALUES_EDIT, FAASDOCUMENTOPERATIONVALUES_DELETE, FaasDocumentOperationValues, TMP_FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD, TMP_FAASINVOKEDPROVIDERVALUES_AWS, TMP_FAASINVOKEDPROVIDERVALUES_AZURE, TMP_FAASINVOKEDPROVIDERVALUES_GCP, FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD, FAASINVOKEDPROVIDERVALUES_AWS, FAASINVOKEDPROVIDERVALUES_AZURE, FAASINVOKEDPROVIDERVALUES_GCP, FaasInvokedProviderValues, TMP_NETTRANSPORTVALUES_IP_TCP, TMP_NETTRANSPORTVALUES_IP_UDP, TMP_NETTRANSPORTVALUES_IP, TMP_NETTRANSPORTVALUES_UNIX, TMP_NETTRANSPORTVALUES_PIPE, TMP_NETTRANSPORTVALUES_INPROC, TMP_NETTRANSPORTVALUES_OTHER, NETTRANSPORTVALUES_IP_TCP, NETTRANSPORTVALUES_IP_UDP, NETTRANSPORTVALUES_IP, NETTRANSPORTVALUES_UNIX, NETTRANSPORTVALUES_PIPE, NETTRANSPORTVALUES_INPROC, NETTRANSPORTVALUES_OTHER, NetTransportValues, TMP_NETHOSTCONNECTIONTYPEVALUES_WIFI, TMP_NETHOSTCONNECTIONTYPEVALUES_WIRED, TMP_NETHOSTCONNECTIONTYPEVALUES_CELL, TMP_NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE, TMP_NETHOSTCONNECTIONTYPEVALUES_UNKNOWN, NETHOSTCONNECTIONTYPEVALUES_WIFI, NETHOSTCONNECTIONTYPEVALUES_WIRED, NETHOSTCONNECTIONTYPEVALUES_CELL, NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE, NETHOSTCONNECTIONTYPEVALUES_UNKNOWN, NetHostConnectionTypeValues, TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GPRS, TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EDGE, TMP_NETHOSTCONNECTIONSUBTYPEVALUES_UMTS, TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA, TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0, TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A, TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT, TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA, TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA, TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPA, TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IDEN, TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B, TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE, TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD, TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP, TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GSM, TMP_NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA, TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN, TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NR, TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA, TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA, NETHOSTCONNECTIONSUBTYPEVALUES_GPRS, NETHOSTCONNECTIONSUBTYPEVALUES_EDGE, NETHOSTCONNECTIONSUBTYPEVALUES_UMTS, NETHOSTCONNECTIONSUBTYPEVALUES_CDMA, NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0, NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A, NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT, NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA, NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA, NETHOSTCONNECTIONSUBTYPEVALUES_HSPA, NETHOSTCONNECTIONSUBTYPEVALUES_IDEN, NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B, NETHOSTCONNECTIONSUBTYPEVALUES_LTE, NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD, NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP, NETHOSTCONNECTIONSUBTYPEVALUES_GSM, NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA, NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN, NETHOSTCONNECTIONSUBTYPEVALUES_NR, NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA, NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA, NetHostConnectionSubtypeValues, TMP_HTTPFLAVORVALUES_HTTP_1_0, TMP_HTTPFLAVORVALUES_HTTP_1_1, TMP_HTTPFLAVORVALUES_HTTP_2_0, TMP_HTTPFLAVORVALUES_SPDY, TMP_HTTPFLAVORVALUES_QUIC, HTTPFLAVORVALUES_HTTP_1_0, HTTPFLAVORVALUES_HTTP_1_1, HTTPFLAVORVALUES_HTTP_2_0, HTTPFLAVORVALUES_SPDY, HTTPFLAVORVALUES_QUIC, HttpFlavorValues, TMP_MESSAGINGDESTINATIONKINDVALUES_QUEUE, TMP_MESSAGINGDESTINATIONKINDVALUES_TOPIC, MESSAGINGDESTINATIONKINDVALUES_QUEUE, MESSAGINGDESTINATIONKINDVALUES_TOPIC, MessagingDestinationKindValues, TMP_MESSAGINGOPERATIONVALUES_RECEIVE, TMP_MESSAGINGOPERATIONVALUES_PROCESS, MESSAGINGOPERATIONVALUES_RECEIVE, MESSAGINGOPERATIONVALUES_PROCESS, MessagingOperationValues, TMP_RPCGRPCSTATUSCODEVALUES_OK, TMP_RPCGRPCSTATUSCODEVALUES_CANCELLED, TMP_RPCGRPCSTATUSCODEVALUES_UNKNOWN, TMP_RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT, TMP_RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED, TMP_RPCGRPCSTATUSCODEVALUES_NOT_FOUND, TMP_RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS, TMP_RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED, TMP_RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED, TMP_RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION, TMP_RPCGRPCSTATUSCODEVALUES_ABORTED, TMP_RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE, TMP_RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED, TMP_RPCGRPCSTATUSCODEVALUES_INTERNAL, TMP_RPCGRPCSTATUSCODEVALUES_UNAVAILABLE, TMP_RPCGRPCSTATUSCODEVALUES_DATA_LOSS, TMP_RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED, RPCGRPCSTATUSCODEVALUES_OK, RPCGRPCSTATUSCODEVALUES_CANCELLED, RPCGRPCSTATUSCODEVALUES_UNKNOWN, RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT, RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED, RPCGRPCSTATUSCODEVALUES_NOT_FOUND, RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS, RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED, RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED, RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION, RPCGRPCSTATUSCODEVALUES_ABORTED, RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE, RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED, RPCGRPCSTATUSCODEVALUES_INTERNAL, RPCGRPCSTATUSCODEVALUES_UNAVAILABLE, RPCGRPCSTATUSCODEVALUES_DATA_LOSS, RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED, RpcGrpcStatusCodeValues, TMP_MESSAGETYPEVALUES_SENT, TMP_MESSAGETYPEVALUES_RECEIVED, MESSAGETYPEVALUES_SENT, MESSAGETYPEVALUES_RECEIVED, MessageTypeValues;
var init_SemanticAttributes = __esm({
  "node_modules/@opentelemetry/semantic-conventions/build/esm/trace/SemanticAttributes.js"() {
    init_esm();
    init_utils3();
    TMP_AWS_LAMBDA_INVOKED_ARN = "aws.lambda.invoked_arn";
    TMP_DB_SYSTEM = "db.system";
    TMP_DB_CONNECTION_STRING = "db.connection_string";
    TMP_DB_USER = "db.user";
    TMP_DB_JDBC_DRIVER_CLASSNAME = "db.jdbc.driver_classname";
    TMP_DB_NAME = "db.name";
    TMP_DB_STATEMENT = "db.statement";
    TMP_DB_OPERATION = "db.operation";
    TMP_DB_MSSQL_INSTANCE_NAME = "db.mssql.instance_name";
    TMP_DB_CASSANDRA_KEYSPACE = "db.cassandra.keyspace";
    TMP_DB_CASSANDRA_PAGE_SIZE = "db.cassandra.page_size";
    TMP_DB_CASSANDRA_CONSISTENCY_LEVEL = "db.cassandra.consistency_level";
    TMP_DB_CASSANDRA_TABLE = "db.cassandra.table";
    TMP_DB_CASSANDRA_IDEMPOTENCE = "db.cassandra.idempotence";
    TMP_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT = "db.cassandra.speculative_execution_count";
    TMP_DB_CASSANDRA_COORDINATOR_ID = "db.cassandra.coordinator.id";
    TMP_DB_CASSANDRA_COORDINATOR_DC = "db.cassandra.coordinator.dc";
    TMP_DB_HBASE_NAMESPACE = "db.hbase.namespace";
    TMP_DB_REDIS_DATABASE_INDEX = "db.redis.database_index";
    TMP_DB_MONGODB_COLLECTION = "db.mongodb.collection";
    TMP_DB_SQL_TABLE = "db.sql.table";
    TMP_EXCEPTION_TYPE = "exception.type";
    TMP_EXCEPTION_MESSAGE = "exception.message";
    TMP_EXCEPTION_STACKTRACE = "exception.stacktrace";
    TMP_EXCEPTION_ESCAPED = "exception.escaped";
    TMP_FAAS_TRIGGER = "faas.trigger";
    TMP_FAAS_EXECUTION = "faas.execution";
    TMP_FAAS_DOCUMENT_COLLECTION = "faas.document.collection";
    TMP_FAAS_DOCUMENT_OPERATION = "faas.document.operation";
    TMP_FAAS_DOCUMENT_TIME = "faas.document.time";
    TMP_FAAS_DOCUMENT_NAME = "faas.document.name";
    TMP_FAAS_TIME = "faas.time";
    TMP_FAAS_CRON = "faas.cron";
    TMP_FAAS_COLDSTART = "faas.coldstart";
    TMP_FAAS_INVOKED_NAME = "faas.invoked_name";
    TMP_FAAS_INVOKED_PROVIDER = "faas.invoked_provider";
    TMP_FAAS_INVOKED_REGION = "faas.invoked_region";
    TMP_NET_TRANSPORT = "net.transport";
    TMP_NET_PEER_IP = "net.peer.ip";
    TMP_NET_PEER_PORT = "net.peer.port";
    TMP_NET_PEER_NAME = "net.peer.name";
    TMP_NET_HOST_IP = "net.host.ip";
    TMP_NET_HOST_PORT = "net.host.port";
    TMP_NET_HOST_NAME = "net.host.name";
    TMP_NET_HOST_CONNECTION_TYPE = "net.host.connection.type";
    TMP_NET_HOST_CONNECTION_SUBTYPE = "net.host.connection.subtype";
    TMP_NET_HOST_CARRIER_NAME = "net.host.carrier.name";
    TMP_NET_HOST_CARRIER_MCC = "net.host.carrier.mcc";
    TMP_NET_HOST_CARRIER_MNC = "net.host.carrier.mnc";
    TMP_NET_HOST_CARRIER_ICC = "net.host.carrier.icc";
    TMP_PEER_SERVICE = "peer.service";
    TMP_ENDUSER_ID = "enduser.id";
    TMP_ENDUSER_ROLE = "enduser.role";
    TMP_ENDUSER_SCOPE = "enduser.scope";
    TMP_THREAD_ID = "thread.id";
    TMP_THREAD_NAME = "thread.name";
    TMP_CODE_FUNCTION = "code.function";
    TMP_CODE_NAMESPACE = "code.namespace";
    TMP_CODE_FILEPATH = "code.filepath";
    TMP_CODE_LINENO = "code.lineno";
    TMP_HTTP_METHOD = "http.method";
    TMP_HTTP_URL = "http.url";
    TMP_HTTP_TARGET = "http.target";
    TMP_HTTP_HOST = "http.host";
    TMP_HTTP_SCHEME = "http.scheme";
    TMP_HTTP_STATUS_CODE = "http.status_code";
    TMP_HTTP_FLAVOR = "http.flavor";
    TMP_HTTP_USER_AGENT = "http.user_agent";
    TMP_HTTP_REQUEST_CONTENT_LENGTH = "http.request_content_length";
    TMP_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = "http.request_content_length_uncompressed";
    TMP_HTTP_RESPONSE_CONTENT_LENGTH = "http.response_content_length";
    TMP_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED = "http.response_content_length_uncompressed";
    TMP_HTTP_SERVER_NAME = "http.server_name";
    TMP_HTTP_ROUTE = "http.route";
    TMP_HTTP_CLIENT_IP = "http.client_ip";
    TMP_AWS_DYNAMODB_TABLE_NAMES = "aws.dynamodb.table_names";
    TMP_AWS_DYNAMODB_CONSUMED_CAPACITY = "aws.dynamodb.consumed_capacity";
    TMP_AWS_DYNAMODB_ITEM_COLLECTION_METRICS = "aws.dynamodb.item_collection_metrics";
    TMP_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY = "aws.dynamodb.provisioned_read_capacity";
    TMP_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY = "aws.dynamodb.provisioned_write_capacity";
    TMP_AWS_DYNAMODB_CONSISTENT_READ = "aws.dynamodb.consistent_read";
    TMP_AWS_DYNAMODB_PROJECTION = "aws.dynamodb.projection";
    TMP_AWS_DYNAMODB_LIMIT = "aws.dynamodb.limit";
    TMP_AWS_DYNAMODB_ATTRIBUTES_TO_GET = "aws.dynamodb.attributes_to_get";
    TMP_AWS_DYNAMODB_INDEX_NAME = "aws.dynamodb.index_name";
    TMP_AWS_DYNAMODB_SELECT = "aws.dynamodb.select";
    TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES = "aws.dynamodb.global_secondary_indexes";
    TMP_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES = "aws.dynamodb.local_secondary_indexes";
    TMP_AWS_DYNAMODB_EXCLUSIVE_START_TABLE = "aws.dynamodb.exclusive_start_table";
    TMP_AWS_DYNAMODB_TABLE_COUNT = "aws.dynamodb.table_count";
    TMP_AWS_DYNAMODB_SCAN_FORWARD = "aws.dynamodb.scan_forward";
    TMP_AWS_DYNAMODB_SEGMENT = "aws.dynamodb.segment";
    TMP_AWS_DYNAMODB_TOTAL_SEGMENTS = "aws.dynamodb.total_segments";
    TMP_AWS_DYNAMODB_COUNT = "aws.dynamodb.count";
    TMP_AWS_DYNAMODB_SCANNED_COUNT = "aws.dynamodb.scanned_count";
    TMP_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS = "aws.dynamodb.attribute_definitions";
    TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES = "aws.dynamodb.global_secondary_index_updates";
    TMP_MESSAGING_SYSTEM = "messaging.system";
    TMP_MESSAGING_DESTINATION = "messaging.destination";
    TMP_MESSAGING_DESTINATION_KIND = "messaging.destination_kind";
    TMP_MESSAGING_TEMP_DESTINATION = "messaging.temp_destination";
    TMP_MESSAGING_PROTOCOL = "messaging.protocol";
    TMP_MESSAGING_PROTOCOL_VERSION = "messaging.protocol_version";
    TMP_MESSAGING_URL = "messaging.url";
    TMP_MESSAGING_MESSAGE_ID = "messaging.message_id";
    TMP_MESSAGING_CONVERSATION_ID = "messaging.conversation_id";
    TMP_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES = "messaging.message_payload_size_bytes";
    TMP_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES = "messaging.message_payload_compressed_size_bytes";
    TMP_MESSAGING_OPERATION = "messaging.operation";
    TMP_MESSAGING_CONSUMER_ID = "messaging.consumer_id";
    TMP_MESSAGING_RABBITMQ_ROUTING_KEY = "messaging.rabbitmq.routing_key";
    TMP_MESSAGING_KAFKA_MESSAGE_KEY = "messaging.kafka.message_key";
    TMP_MESSAGING_KAFKA_CONSUMER_GROUP = "messaging.kafka.consumer_group";
    TMP_MESSAGING_KAFKA_CLIENT_ID = "messaging.kafka.client_id";
    TMP_MESSAGING_KAFKA_PARTITION = "messaging.kafka.partition";
    TMP_MESSAGING_KAFKA_TOMBSTONE = "messaging.kafka.tombstone";
    TMP_RPC_SYSTEM = "rpc.system";
    TMP_RPC_SERVICE = "rpc.service";
    TMP_RPC_METHOD = "rpc.method";
    TMP_RPC_GRPC_STATUS_CODE = "rpc.grpc.status_code";
    TMP_RPC_JSONRPC_VERSION = "rpc.jsonrpc.version";
    TMP_RPC_JSONRPC_REQUEST_ID = "rpc.jsonrpc.request_id";
    TMP_RPC_JSONRPC_ERROR_CODE = "rpc.jsonrpc.error_code";
    TMP_RPC_JSONRPC_ERROR_MESSAGE = "rpc.jsonrpc.error_message";
    TMP_MESSAGE_TYPE = "message.type";
    TMP_MESSAGE_ID = "message.id";
    TMP_MESSAGE_COMPRESSED_SIZE = "message.compressed_size";
    TMP_MESSAGE_UNCOMPRESSED_SIZE = "message.uncompressed_size";
    SEMATTRS_AWS_LAMBDA_INVOKED_ARN = TMP_AWS_LAMBDA_INVOKED_ARN;
    SEMATTRS_DB_SYSTEM = TMP_DB_SYSTEM;
    SEMATTRS_DB_CONNECTION_STRING = TMP_DB_CONNECTION_STRING;
    SEMATTRS_DB_USER = TMP_DB_USER;
    SEMATTRS_DB_JDBC_DRIVER_CLASSNAME = TMP_DB_JDBC_DRIVER_CLASSNAME;
    SEMATTRS_DB_NAME = TMP_DB_NAME;
    SEMATTRS_DB_STATEMENT = TMP_DB_STATEMENT;
    SEMATTRS_DB_OPERATION = TMP_DB_OPERATION;
    SEMATTRS_DB_MSSQL_INSTANCE_NAME = TMP_DB_MSSQL_INSTANCE_NAME;
    SEMATTRS_DB_CASSANDRA_KEYSPACE = TMP_DB_CASSANDRA_KEYSPACE;
    SEMATTRS_DB_CASSANDRA_PAGE_SIZE = TMP_DB_CASSANDRA_PAGE_SIZE;
    SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL = TMP_DB_CASSANDRA_CONSISTENCY_LEVEL;
    SEMATTRS_DB_CASSANDRA_TABLE = TMP_DB_CASSANDRA_TABLE;
    SEMATTRS_DB_CASSANDRA_IDEMPOTENCE = TMP_DB_CASSANDRA_IDEMPOTENCE;
    SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT = TMP_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT;
    SEMATTRS_DB_CASSANDRA_COORDINATOR_ID = TMP_DB_CASSANDRA_COORDINATOR_ID;
    SEMATTRS_DB_CASSANDRA_COORDINATOR_DC = TMP_DB_CASSANDRA_COORDINATOR_DC;
    SEMATTRS_DB_HBASE_NAMESPACE = TMP_DB_HBASE_NAMESPACE;
    SEMATTRS_DB_REDIS_DATABASE_INDEX = TMP_DB_REDIS_DATABASE_INDEX;
    SEMATTRS_DB_MONGODB_COLLECTION = TMP_DB_MONGODB_COLLECTION;
    SEMATTRS_DB_SQL_TABLE = TMP_DB_SQL_TABLE;
    SEMATTRS_EXCEPTION_TYPE = TMP_EXCEPTION_TYPE;
    SEMATTRS_EXCEPTION_MESSAGE = TMP_EXCEPTION_MESSAGE;
    SEMATTRS_EXCEPTION_STACKTRACE = TMP_EXCEPTION_STACKTRACE;
    SEMATTRS_EXCEPTION_ESCAPED = TMP_EXCEPTION_ESCAPED;
    SEMATTRS_FAAS_TRIGGER = TMP_FAAS_TRIGGER;
    SEMATTRS_FAAS_EXECUTION = TMP_FAAS_EXECUTION;
    SEMATTRS_FAAS_DOCUMENT_COLLECTION = TMP_FAAS_DOCUMENT_COLLECTION;
    SEMATTRS_FAAS_DOCUMENT_OPERATION = TMP_FAAS_DOCUMENT_OPERATION;
    SEMATTRS_FAAS_DOCUMENT_TIME = TMP_FAAS_DOCUMENT_TIME;
    SEMATTRS_FAAS_DOCUMENT_NAME = TMP_FAAS_DOCUMENT_NAME;
    SEMATTRS_FAAS_TIME = TMP_FAAS_TIME;
    SEMATTRS_FAAS_CRON = TMP_FAAS_CRON;
    SEMATTRS_FAAS_COLDSTART = TMP_FAAS_COLDSTART;
    SEMATTRS_FAAS_INVOKED_NAME = TMP_FAAS_INVOKED_NAME;
    SEMATTRS_FAAS_INVOKED_PROVIDER = TMP_FAAS_INVOKED_PROVIDER;
    SEMATTRS_FAAS_INVOKED_REGION = TMP_FAAS_INVOKED_REGION;
    SEMATTRS_NET_TRANSPORT = TMP_NET_TRANSPORT;
    SEMATTRS_NET_PEER_IP = TMP_NET_PEER_IP;
    SEMATTRS_NET_PEER_PORT = TMP_NET_PEER_PORT;
    SEMATTRS_NET_PEER_NAME = TMP_NET_PEER_NAME;
    SEMATTRS_NET_HOST_IP = TMP_NET_HOST_IP;
    SEMATTRS_NET_HOST_PORT = TMP_NET_HOST_PORT;
    SEMATTRS_NET_HOST_NAME = TMP_NET_HOST_NAME;
    SEMATTRS_NET_HOST_CONNECTION_TYPE = TMP_NET_HOST_CONNECTION_TYPE;
    SEMATTRS_NET_HOST_CONNECTION_SUBTYPE = TMP_NET_HOST_CONNECTION_SUBTYPE;
    SEMATTRS_NET_HOST_CARRIER_NAME = TMP_NET_HOST_CARRIER_NAME;
    SEMATTRS_NET_HOST_CARRIER_MCC = TMP_NET_HOST_CARRIER_MCC;
    SEMATTRS_NET_HOST_CARRIER_MNC = TMP_NET_HOST_CARRIER_MNC;
    SEMATTRS_NET_HOST_CARRIER_ICC = TMP_NET_HOST_CARRIER_ICC;
    SEMATTRS_PEER_SERVICE = TMP_PEER_SERVICE;
    SEMATTRS_ENDUSER_ID = TMP_ENDUSER_ID;
    SEMATTRS_ENDUSER_ROLE = TMP_ENDUSER_ROLE;
    SEMATTRS_ENDUSER_SCOPE = TMP_ENDUSER_SCOPE;
    SEMATTRS_THREAD_ID = TMP_THREAD_ID;
    SEMATTRS_THREAD_NAME = TMP_THREAD_NAME;
    SEMATTRS_CODE_FUNCTION = TMP_CODE_FUNCTION;
    SEMATTRS_CODE_NAMESPACE = TMP_CODE_NAMESPACE;
    SEMATTRS_CODE_FILEPATH = TMP_CODE_FILEPATH;
    SEMATTRS_CODE_LINENO = TMP_CODE_LINENO;
    SEMATTRS_HTTP_METHOD = TMP_HTTP_METHOD;
    SEMATTRS_HTTP_URL = TMP_HTTP_URL;
    SEMATTRS_HTTP_TARGET = TMP_HTTP_TARGET;
    SEMATTRS_HTTP_HOST = TMP_HTTP_HOST;
    SEMATTRS_HTTP_SCHEME = TMP_HTTP_SCHEME;
    SEMATTRS_HTTP_STATUS_CODE = TMP_HTTP_STATUS_CODE;
    SEMATTRS_HTTP_FLAVOR = TMP_HTTP_FLAVOR;
    SEMATTRS_HTTP_USER_AGENT = TMP_HTTP_USER_AGENT;
    SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH = TMP_HTTP_REQUEST_CONTENT_LENGTH;
    SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED = TMP_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED;
    SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH = TMP_HTTP_RESPONSE_CONTENT_LENGTH;
    SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED = TMP_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED;
    SEMATTRS_HTTP_SERVER_NAME = TMP_HTTP_SERVER_NAME;
    SEMATTRS_HTTP_ROUTE = TMP_HTTP_ROUTE;
    SEMATTRS_HTTP_CLIENT_IP = TMP_HTTP_CLIENT_IP;
    SEMATTRS_AWS_DYNAMODB_TABLE_NAMES = TMP_AWS_DYNAMODB_TABLE_NAMES;
    SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY = TMP_AWS_DYNAMODB_CONSUMED_CAPACITY;
    SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS = TMP_AWS_DYNAMODB_ITEM_COLLECTION_METRICS;
    SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY = TMP_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY;
    SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY = TMP_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY;
    SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ = TMP_AWS_DYNAMODB_CONSISTENT_READ;
    SEMATTRS_AWS_DYNAMODB_PROJECTION = TMP_AWS_DYNAMODB_PROJECTION;
    SEMATTRS_AWS_DYNAMODB_LIMIT = TMP_AWS_DYNAMODB_LIMIT;
    SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET = TMP_AWS_DYNAMODB_ATTRIBUTES_TO_GET;
    SEMATTRS_AWS_DYNAMODB_INDEX_NAME = TMP_AWS_DYNAMODB_INDEX_NAME;
    SEMATTRS_AWS_DYNAMODB_SELECT = TMP_AWS_DYNAMODB_SELECT;
    SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES = TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES;
    SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES = TMP_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES;
    SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE = TMP_AWS_DYNAMODB_EXCLUSIVE_START_TABLE;
    SEMATTRS_AWS_DYNAMODB_TABLE_COUNT = TMP_AWS_DYNAMODB_TABLE_COUNT;
    SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD = TMP_AWS_DYNAMODB_SCAN_FORWARD;
    SEMATTRS_AWS_DYNAMODB_SEGMENT = TMP_AWS_DYNAMODB_SEGMENT;
    SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS = TMP_AWS_DYNAMODB_TOTAL_SEGMENTS;
    SEMATTRS_AWS_DYNAMODB_COUNT = TMP_AWS_DYNAMODB_COUNT;
    SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT = TMP_AWS_DYNAMODB_SCANNED_COUNT;
    SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS = TMP_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS;
    SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES = TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES;
    SEMATTRS_MESSAGING_SYSTEM = TMP_MESSAGING_SYSTEM;
    SEMATTRS_MESSAGING_DESTINATION = TMP_MESSAGING_DESTINATION;
    SEMATTRS_MESSAGING_DESTINATION_KIND = TMP_MESSAGING_DESTINATION_KIND;
    SEMATTRS_MESSAGING_TEMP_DESTINATION = TMP_MESSAGING_TEMP_DESTINATION;
    SEMATTRS_MESSAGING_PROTOCOL = TMP_MESSAGING_PROTOCOL;
    SEMATTRS_MESSAGING_PROTOCOL_VERSION = TMP_MESSAGING_PROTOCOL_VERSION;
    SEMATTRS_MESSAGING_URL = TMP_MESSAGING_URL;
    SEMATTRS_MESSAGING_MESSAGE_ID = TMP_MESSAGING_MESSAGE_ID;
    SEMATTRS_MESSAGING_CONVERSATION_ID = TMP_MESSAGING_CONVERSATION_ID;
    SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES = TMP_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES;
    SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES = TMP_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES;
    SEMATTRS_MESSAGING_OPERATION = TMP_MESSAGING_OPERATION;
    SEMATTRS_MESSAGING_CONSUMER_ID = TMP_MESSAGING_CONSUMER_ID;
    SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY = TMP_MESSAGING_RABBITMQ_ROUTING_KEY;
    SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY = TMP_MESSAGING_KAFKA_MESSAGE_KEY;
    SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP = TMP_MESSAGING_KAFKA_CONSUMER_GROUP;
    SEMATTRS_MESSAGING_KAFKA_CLIENT_ID = TMP_MESSAGING_KAFKA_CLIENT_ID;
    SEMATTRS_MESSAGING_KAFKA_PARTITION = TMP_MESSAGING_KAFKA_PARTITION;
    SEMATTRS_MESSAGING_KAFKA_TOMBSTONE = TMP_MESSAGING_KAFKA_TOMBSTONE;
    SEMATTRS_RPC_SYSTEM = TMP_RPC_SYSTEM;
    SEMATTRS_RPC_SERVICE = TMP_RPC_SERVICE;
    SEMATTRS_RPC_METHOD = TMP_RPC_METHOD;
    SEMATTRS_RPC_GRPC_STATUS_CODE = TMP_RPC_GRPC_STATUS_CODE;
    SEMATTRS_RPC_JSONRPC_VERSION = TMP_RPC_JSONRPC_VERSION;
    SEMATTRS_RPC_JSONRPC_REQUEST_ID = TMP_RPC_JSONRPC_REQUEST_ID;
    SEMATTRS_RPC_JSONRPC_ERROR_CODE = TMP_RPC_JSONRPC_ERROR_CODE;
    SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE = TMP_RPC_JSONRPC_ERROR_MESSAGE;
    SEMATTRS_MESSAGE_TYPE = TMP_MESSAGE_TYPE;
    SEMATTRS_MESSAGE_ID = TMP_MESSAGE_ID;
    SEMATTRS_MESSAGE_COMPRESSED_SIZE = TMP_MESSAGE_COMPRESSED_SIZE;
    SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE = TMP_MESSAGE_UNCOMPRESSED_SIZE;
    SemanticAttributes = /* @__PURE__ */ createConstMap([
      TMP_AWS_LAMBDA_INVOKED_ARN,
      TMP_DB_SYSTEM,
      TMP_DB_CONNECTION_STRING,
      TMP_DB_USER,
      TMP_DB_JDBC_DRIVER_CLASSNAME,
      TMP_DB_NAME,
      TMP_DB_STATEMENT,
      TMP_DB_OPERATION,
      TMP_DB_MSSQL_INSTANCE_NAME,
      TMP_DB_CASSANDRA_KEYSPACE,
      TMP_DB_CASSANDRA_PAGE_SIZE,
      TMP_DB_CASSANDRA_CONSISTENCY_LEVEL,
      TMP_DB_CASSANDRA_TABLE,
      TMP_DB_CASSANDRA_IDEMPOTENCE,
      TMP_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT,
      TMP_DB_CASSANDRA_COORDINATOR_ID,
      TMP_DB_CASSANDRA_COORDINATOR_DC,
      TMP_DB_HBASE_NAMESPACE,
      TMP_DB_REDIS_DATABASE_INDEX,
      TMP_DB_MONGODB_COLLECTION,
      TMP_DB_SQL_TABLE,
      TMP_EXCEPTION_TYPE,
      TMP_EXCEPTION_MESSAGE,
      TMP_EXCEPTION_STACKTRACE,
      TMP_EXCEPTION_ESCAPED,
      TMP_FAAS_TRIGGER,
      TMP_FAAS_EXECUTION,
      TMP_FAAS_DOCUMENT_COLLECTION,
      TMP_FAAS_DOCUMENT_OPERATION,
      TMP_FAAS_DOCUMENT_TIME,
      TMP_FAAS_DOCUMENT_NAME,
      TMP_FAAS_TIME,
      TMP_FAAS_CRON,
      TMP_FAAS_COLDSTART,
      TMP_FAAS_INVOKED_NAME,
      TMP_FAAS_INVOKED_PROVIDER,
      TMP_FAAS_INVOKED_REGION,
      TMP_NET_TRANSPORT,
      TMP_NET_PEER_IP,
      TMP_NET_PEER_PORT,
      TMP_NET_PEER_NAME,
      TMP_NET_HOST_IP,
      TMP_NET_HOST_PORT,
      TMP_NET_HOST_NAME,
      TMP_NET_HOST_CONNECTION_TYPE,
      TMP_NET_HOST_CONNECTION_SUBTYPE,
      TMP_NET_HOST_CARRIER_NAME,
      TMP_NET_HOST_CARRIER_MCC,
      TMP_NET_HOST_CARRIER_MNC,
      TMP_NET_HOST_CARRIER_ICC,
      TMP_PEER_SERVICE,
      TMP_ENDUSER_ID,
      TMP_ENDUSER_ROLE,
      TMP_ENDUSER_SCOPE,
      TMP_THREAD_ID,
      TMP_THREAD_NAME,
      TMP_CODE_FUNCTION,
      TMP_CODE_NAMESPACE,
      TMP_CODE_FILEPATH,
      TMP_CODE_LINENO,
      TMP_HTTP_METHOD,
      TMP_HTTP_URL,
      TMP_HTTP_TARGET,
      TMP_HTTP_HOST,
      TMP_HTTP_SCHEME,
      TMP_HTTP_STATUS_CODE,
      TMP_HTTP_FLAVOR,
      TMP_HTTP_USER_AGENT,
      TMP_HTTP_REQUEST_CONTENT_LENGTH,
      TMP_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED,
      TMP_HTTP_RESPONSE_CONTENT_LENGTH,
      TMP_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED,
      TMP_HTTP_SERVER_NAME,
      TMP_HTTP_ROUTE,
      TMP_HTTP_CLIENT_IP,
      TMP_AWS_DYNAMODB_TABLE_NAMES,
      TMP_AWS_DYNAMODB_CONSUMED_CAPACITY,
      TMP_AWS_DYNAMODB_ITEM_COLLECTION_METRICS,
      TMP_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY,
      TMP_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY,
      TMP_AWS_DYNAMODB_CONSISTENT_READ,
      TMP_AWS_DYNAMODB_PROJECTION,
      TMP_AWS_DYNAMODB_LIMIT,
      TMP_AWS_DYNAMODB_ATTRIBUTES_TO_GET,
      TMP_AWS_DYNAMODB_INDEX_NAME,
      TMP_AWS_DYNAMODB_SELECT,
      TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES,
      TMP_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES,
      TMP_AWS_DYNAMODB_EXCLUSIVE_START_TABLE,
      TMP_AWS_DYNAMODB_TABLE_COUNT,
      TMP_AWS_DYNAMODB_SCAN_FORWARD,
      TMP_AWS_DYNAMODB_SEGMENT,
      TMP_AWS_DYNAMODB_TOTAL_SEGMENTS,
      TMP_AWS_DYNAMODB_COUNT,
      TMP_AWS_DYNAMODB_SCANNED_COUNT,
      TMP_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS,
      TMP_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES,
      TMP_MESSAGING_SYSTEM,
      TMP_MESSAGING_DESTINATION,
      TMP_MESSAGING_DESTINATION_KIND,
      TMP_MESSAGING_TEMP_DESTINATION,
      TMP_MESSAGING_PROTOCOL,
      TMP_MESSAGING_PROTOCOL_VERSION,
      TMP_MESSAGING_URL,
      TMP_MESSAGING_MESSAGE_ID,
      TMP_MESSAGING_CONVERSATION_ID,
      TMP_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES,
      TMP_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES,
      TMP_MESSAGING_OPERATION,
      TMP_MESSAGING_CONSUMER_ID,
      TMP_MESSAGING_RABBITMQ_ROUTING_KEY,
      TMP_MESSAGING_KAFKA_MESSAGE_KEY,
      TMP_MESSAGING_KAFKA_CONSUMER_GROUP,
      TMP_MESSAGING_KAFKA_CLIENT_ID,
      TMP_MESSAGING_KAFKA_PARTITION,
      TMP_MESSAGING_KAFKA_TOMBSTONE,
      TMP_RPC_SYSTEM,
      TMP_RPC_SERVICE,
      TMP_RPC_METHOD,
      TMP_RPC_GRPC_STATUS_CODE,
      TMP_RPC_JSONRPC_VERSION,
      TMP_RPC_JSONRPC_REQUEST_ID,
      TMP_RPC_JSONRPC_ERROR_CODE,
      TMP_RPC_JSONRPC_ERROR_MESSAGE,
      TMP_MESSAGE_TYPE,
      TMP_MESSAGE_ID,
      TMP_MESSAGE_COMPRESSED_SIZE,
      TMP_MESSAGE_UNCOMPRESSED_SIZE
    ]);
    TMP_DBSYSTEMVALUES_OTHER_SQL = "other_sql";
    TMP_DBSYSTEMVALUES_MSSQL = "mssql";
    TMP_DBSYSTEMVALUES_MYSQL = "mysql";
    TMP_DBSYSTEMVALUES_ORACLE = "oracle";
    TMP_DBSYSTEMVALUES_DB2 = "db2";
    TMP_DBSYSTEMVALUES_POSTGRESQL = "postgresql";
    TMP_DBSYSTEMVALUES_REDSHIFT = "redshift";
    TMP_DBSYSTEMVALUES_HIVE = "hive";
    TMP_DBSYSTEMVALUES_CLOUDSCAPE = "cloudscape";
    TMP_DBSYSTEMVALUES_HSQLDB = "hsqldb";
    TMP_DBSYSTEMVALUES_PROGRESS = "progress";
    TMP_DBSYSTEMVALUES_MAXDB = "maxdb";
    TMP_DBSYSTEMVALUES_HANADB = "hanadb";
    TMP_DBSYSTEMVALUES_INGRES = "ingres";
    TMP_DBSYSTEMVALUES_FIRSTSQL = "firstsql";
    TMP_DBSYSTEMVALUES_EDB = "edb";
    TMP_DBSYSTEMVALUES_CACHE = "cache";
    TMP_DBSYSTEMVALUES_ADABAS = "adabas";
    TMP_DBSYSTEMVALUES_FIREBIRD = "firebird";
    TMP_DBSYSTEMVALUES_DERBY = "derby";
    TMP_DBSYSTEMVALUES_FILEMAKER = "filemaker";
    TMP_DBSYSTEMVALUES_INFORMIX = "informix";
    TMP_DBSYSTEMVALUES_INSTANTDB = "instantdb";
    TMP_DBSYSTEMVALUES_INTERBASE = "interbase";
    TMP_DBSYSTEMVALUES_MARIADB = "mariadb";
    TMP_DBSYSTEMVALUES_NETEZZA = "netezza";
    TMP_DBSYSTEMVALUES_PERVASIVE = "pervasive";
    TMP_DBSYSTEMVALUES_POINTBASE = "pointbase";
    TMP_DBSYSTEMVALUES_SQLITE = "sqlite";
    TMP_DBSYSTEMVALUES_SYBASE = "sybase";
    TMP_DBSYSTEMVALUES_TERADATA = "teradata";
    TMP_DBSYSTEMVALUES_VERTICA = "vertica";
    TMP_DBSYSTEMVALUES_H2 = "h2";
    TMP_DBSYSTEMVALUES_COLDFUSION = "coldfusion";
    TMP_DBSYSTEMVALUES_CASSANDRA = "cassandra";
    TMP_DBSYSTEMVALUES_HBASE = "hbase";
    TMP_DBSYSTEMVALUES_MONGODB = "mongodb";
    TMP_DBSYSTEMVALUES_REDIS = "redis";
    TMP_DBSYSTEMVALUES_COUCHBASE = "couchbase";
    TMP_DBSYSTEMVALUES_COUCHDB = "couchdb";
    TMP_DBSYSTEMVALUES_COSMOSDB = "cosmosdb";
    TMP_DBSYSTEMVALUES_DYNAMODB = "dynamodb";
    TMP_DBSYSTEMVALUES_NEO4J = "neo4j";
    TMP_DBSYSTEMVALUES_GEODE = "geode";
    TMP_DBSYSTEMVALUES_ELASTICSEARCH = "elasticsearch";
    TMP_DBSYSTEMVALUES_MEMCACHED = "memcached";
    TMP_DBSYSTEMVALUES_COCKROACHDB = "cockroachdb";
    DBSYSTEMVALUES_OTHER_SQL = TMP_DBSYSTEMVALUES_OTHER_SQL;
    DBSYSTEMVALUES_MSSQL = TMP_DBSYSTEMVALUES_MSSQL;
    DBSYSTEMVALUES_MYSQL = TMP_DBSYSTEMVALUES_MYSQL;
    DBSYSTEMVALUES_ORACLE = TMP_DBSYSTEMVALUES_ORACLE;
    DBSYSTEMVALUES_DB2 = TMP_DBSYSTEMVALUES_DB2;
    DBSYSTEMVALUES_POSTGRESQL = TMP_DBSYSTEMVALUES_POSTGRESQL;
    DBSYSTEMVALUES_REDSHIFT = TMP_DBSYSTEMVALUES_REDSHIFT;
    DBSYSTEMVALUES_HIVE = TMP_DBSYSTEMVALUES_HIVE;
    DBSYSTEMVALUES_CLOUDSCAPE = TMP_DBSYSTEMVALUES_CLOUDSCAPE;
    DBSYSTEMVALUES_HSQLDB = TMP_DBSYSTEMVALUES_HSQLDB;
    DBSYSTEMVALUES_PROGRESS = TMP_DBSYSTEMVALUES_PROGRESS;
    DBSYSTEMVALUES_MAXDB = TMP_DBSYSTEMVALUES_MAXDB;
    DBSYSTEMVALUES_HANADB = TMP_DBSYSTEMVALUES_HANADB;
    DBSYSTEMVALUES_INGRES = TMP_DBSYSTEMVALUES_INGRES;
    DBSYSTEMVALUES_FIRSTSQL = TMP_DBSYSTEMVALUES_FIRSTSQL;
    DBSYSTEMVALUES_EDB = TMP_DBSYSTEMVALUES_EDB;
    DBSYSTEMVALUES_CACHE = TMP_DBSYSTEMVALUES_CACHE;
    DBSYSTEMVALUES_ADABAS = TMP_DBSYSTEMVALUES_ADABAS;
    DBSYSTEMVALUES_FIREBIRD = TMP_DBSYSTEMVALUES_FIREBIRD;
    DBSYSTEMVALUES_DERBY = TMP_DBSYSTEMVALUES_DERBY;
    DBSYSTEMVALUES_FILEMAKER = TMP_DBSYSTEMVALUES_FILEMAKER;
    DBSYSTEMVALUES_INFORMIX = TMP_DBSYSTEMVALUES_INFORMIX;
    DBSYSTEMVALUES_INSTANTDB = TMP_DBSYSTEMVALUES_INSTANTDB;
    DBSYSTEMVALUES_INTERBASE = TMP_DBSYSTEMVALUES_INTERBASE;
    DBSYSTEMVALUES_MARIADB = TMP_DBSYSTEMVALUES_MARIADB;
    DBSYSTEMVALUES_NETEZZA = TMP_DBSYSTEMVALUES_NETEZZA;
    DBSYSTEMVALUES_PERVASIVE = TMP_DBSYSTEMVALUES_PERVASIVE;
    DBSYSTEMVALUES_POINTBASE = TMP_DBSYSTEMVALUES_POINTBASE;
    DBSYSTEMVALUES_SQLITE = TMP_DBSYSTEMVALUES_SQLITE;
    DBSYSTEMVALUES_SYBASE = TMP_DBSYSTEMVALUES_SYBASE;
    DBSYSTEMVALUES_TERADATA = TMP_DBSYSTEMVALUES_TERADATA;
    DBSYSTEMVALUES_VERTICA = TMP_DBSYSTEMVALUES_VERTICA;
    DBSYSTEMVALUES_H2 = TMP_DBSYSTEMVALUES_H2;
    DBSYSTEMVALUES_COLDFUSION = TMP_DBSYSTEMVALUES_COLDFUSION;
    DBSYSTEMVALUES_CASSANDRA = TMP_DBSYSTEMVALUES_CASSANDRA;
    DBSYSTEMVALUES_HBASE = TMP_DBSYSTEMVALUES_HBASE;
    DBSYSTEMVALUES_MONGODB = TMP_DBSYSTEMVALUES_MONGODB;
    DBSYSTEMVALUES_REDIS = TMP_DBSYSTEMVALUES_REDIS;
    DBSYSTEMVALUES_COUCHBASE = TMP_DBSYSTEMVALUES_COUCHBASE;
    DBSYSTEMVALUES_COUCHDB = TMP_DBSYSTEMVALUES_COUCHDB;
    DBSYSTEMVALUES_COSMOSDB = TMP_DBSYSTEMVALUES_COSMOSDB;
    DBSYSTEMVALUES_DYNAMODB = TMP_DBSYSTEMVALUES_DYNAMODB;
    DBSYSTEMVALUES_NEO4J = TMP_DBSYSTEMVALUES_NEO4J;
    DBSYSTEMVALUES_GEODE = TMP_DBSYSTEMVALUES_GEODE;
    DBSYSTEMVALUES_ELASTICSEARCH = TMP_DBSYSTEMVALUES_ELASTICSEARCH;
    DBSYSTEMVALUES_MEMCACHED = TMP_DBSYSTEMVALUES_MEMCACHED;
    DBSYSTEMVALUES_COCKROACHDB = TMP_DBSYSTEMVALUES_COCKROACHDB;
    DbSystemValues = /* @__PURE__ */ createConstMap([
      TMP_DBSYSTEMVALUES_OTHER_SQL,
      TMP_DBSYSTEMVALUES_MSSQL,
      TMP_DBSYSTEMVALUES_MYSQL,
      TMP_DBSYSTEMVALUES_ORACLE,
      TMP_DBSYSTEMVALUES_DB2,
      TMP_DBSYSTEMVALUES_POSTGRESQL,
      TMP_DBSYSTEMVALUES_REDSHIFT,
      TMP_DBSYSTEMVALUES_HIVE,
      TMP_DBSYSTEMVALUES_CLOUDSCAPE,
      TMP_DBSYSTEMVALUES_HSQLDB,
      TMP_DBSYSTEMVALUES_PROGRESS,
      TMP_DBSYSTEMVALUES_MAXDB,
      TMP_DBSYSTEMVALUES_HANADB,
      TMP_DBSYSTEMVALUES_INGRES,
      TMP_DBSYSTEMVALUES_FIRSTSQL,
      TMP_DBSYSTEMVALUES_EDB,
      TMP_DBSYSTEMVALUES_CACHE,
      TMP_DBSYSTEMVALUES_ADABAS,
      TMP_DBSYSTEMVALUES_FIREBIRD,
      TMP_DBSYSTEMVALUES_DERBY,
      TMP_DBSYSTEMVALUES_FILEMAKER,
      TMP_DBSYSTEMVALUES_INFORMIX,
      TMP_DBSYSTEMVALUES_INSTANTDB,
      TMP_DBSYSTEMVALUES_INTERBASE,
      TMP_DBSYSTEMVALUES_MARIADB,
      TMP_DBSYSTEMVALUES_NETEZZA,
      TMP_DBSYSTEMVALUES_PERVASIVE,
      TMP_DBSYSTEMVALUES_POINTBASE,
      TMP_DBSYSTEMVALUES_SQLITE,
      TMP_DBSYSTEMVALUES_SYBASE,
      TMP_DBSYSTEMVALUES_TERADATA,
      TMP_DBSYSTEMVALUES_VERTICA,
      TMP_DBSYSTEMVALUES_H2,
      TMP_DBSYSTEMVALUES_COLDFUSION,
      TMP_DBSYSTEMVALUES_CASSANDRA,
      TMP_DBSYSTEMVALUES_HBASE,
      TMP_DBSYSTEMVALUES_MONGODB,
      TMP_DBSYSTEMVALUES_REDIS,
      TMP_DBSYSTEMVALUES_COUCHBASE,
      TMP_DBSYSTEMVALUES_COUCHDB,
      TMP_DBSYSTEMVALUES_COSMOSDB,
      TMP_DBSYSTEMVALUES_DYNAMODB,
      TMP_DBSYSTEMVALUES_NEO4J,
      TMP_DBSYSTEMVALUES_GEODE,
      TMP_DBSYSTEMVALUES_ELASTICSEARCH,
      TMP_DBSYSTEMVALUES_MEMCACHED,
      TMP_DBSYSTEMVALUES_COCKROACHDB
    ]);
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ALL = "all";
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM = "each_quorum";
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM = "quorum";
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM = "local_quorum";
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ONE = "one";
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_TWO = "two";
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_THREE = "three";
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE = "local_one";
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ANY = "any";
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL = "serial";
    TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL = "local_serial";
    DBCASSANDRACONSISTENCYLEVELVALUES_ALL = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ALL;
    DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM;
    DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM;
    DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM;
    DBCASSANDRACONSISTENCYLEVELVALUES_ONE = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ONE;
    DBCASSANDRACONSISTENCYLEVELVALUES_TWO = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_TWO;
    DBCASSANDRACONSISTENCYLEVELVALUES_THREE = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_THREE;
    DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE;
    DBCASSANDRACONSISTENCYLEVELVALUES_ANY = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ANY;
    DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL;
    DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL = TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL;
    DbCassandraConsistencyLevelValues = /* @__PURE__ */ createConstMap([
      TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ALL,
      TMP_DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM,
      TMP_DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM,
      TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM,
      TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ONE,
      TMP_DBCASSANDRACONSISTENCYLEVELVALUES_TWO,
      TMP_DBCASSANDRACONSISTENCYLEVELVALUES_THREE,
      TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE,
      TMP_DBCASSANDRACONSISTENCYLEVELVALUES_ANY,
      TMP_DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL,
      TMP_DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL
    ]);
    TMP_FAASTRIGGERVALUES_DATASOURCE = "datasource";
    TMP_FAASTRIGGERVALUES_HTTP = "http";
    TMP_FAASTRIGGERVALUES_PUBSUB = "pubsub";
    TMP_FAASTRIGGERVALUES_TIMER = "timer";
    TMP_FAASTRIGGERVALUES_OTHER = "other";
    FAASTRIGGERVALUES_DATASOURCE = TMP_FAASTRIGGERVALUES_DATASOURCE;
    FAASTRIGGERVALUES_HTTP = TMP_FAASTRIGGERVALUES_HTTP;
    FAASTRIGGERVALUES_PUBSUB = TMP_FAASTRIGGERVALUES_PUBSUB;
    FAASTRIGGERVALUES_TIMER = TMP_FAASTRIGGERVALUES_TIMER;
    FAASTRIGGERVALUES_OTHER = TMP_FAASTRIGGERVALUES_OTHER;
    FaasTriggerValues = /* @__PURE__ */ createConstMap([
      TMP_FAASTRIGGERVALUES_DATASOURCE,
      TMP_FAASTRIGGERVALUES_HTTP,
      TMP_FAASTRIGGERVALUES_PUBSUB,
      TMP_FAASTRIGGERVALUES_TIMER,
      TMP_FAASTRIGGERVALUES_OTHER
    ]);
    TMP_FAASDOCUMENTOPERATIONVALUES_INSERT = "insert";
    TMP_FAASDOCUMENTOPERATIONVALUES_EDIT = "edit";
    TMP_FAASDOCUMENTOPERATIONVALUES_DELETE = "delete";
    FAASDOCUMENTOPERATIONVALUES_INSERT = TMP_FAASDOCUMENTOPERATIONVALUES_INSERT;
    FAASDOCUMENTOPERATIONVALUES_EDIT = TMP_FAASDOCUMENTOPERATIONVALUES_EDIT;
    FAASDOCUMENTOPERATIONVALUES_DELETE = TMP_FAASDOCUMENTOPERATIONVALUES_DELETE;
    FaasDocumentOperationValues = /* @__PURE__ */ createConstMap([
      TMP_FAASDOCUMENTOPERATIONVALUES_INSERT,
      TMP_FAASDOCUMENTOPERATIONVALUES_EDIT,
      TMP_FAASDOCUMENTOPERATIONVALUES_DELETE
    ]);
    TMP_FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD = "alibaba_cloud";
    TMP_FAASINVOKEDPROVIDERVALUES_AWS = "aws";
    TMP_FAASINVOKEDPROVIDERVALUES_AZURE = "azure";
    TMP_FAASINVOKEDPROVIDERVALUES_GCP = "gcp";
    FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD = TMP_FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD;
    FAASINVOKEDPROVIDERVALUES_AWS = TMP_FAASINVOKEDPROVIDERVALUES_AWS;
    FAASINVOKEDPROVIDERVALUES_AZURE = TMP_FAASINVOKEDPROVIDERVALUES_AZURE;
    FAASINVOKEDPROVIDERVALUES_GCP = TMP_FAASINVOKEDPROVIDERVALUES_GCP;
    FaasInvokedProviderValues = /* @__PURE__ */ createConstMap([
      TMP_FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD,
      TMP_FAASINVOKEDPROVIDERVALUES_AWS,
      TMP_FAASINVOKEDPROVIDERVALUES_AZURE,
      TMP_FAASINVOKEDPROVIDERVALUES_GCP
    ]);
    TMP_NETTRANSPORTVALUES_IP_TCP = "ip_tcp";
    TMP_NETTRANSPORTVALUES_IP_UDP = "ip_udp";
    TMP_NETTRANSPORTVALUES_IP = "ip";
    TMP_NETTRANSPORTVALUES_UNIX = "unix";
    TMP_NETTRANSPORTVALUES_PIPE = "pipe";
    TMP_NETTRANSPORTVALUES_INPROC = "inproc";
    TMP_NETTRANSPORTVALUES_OTHER = "other";
    NETTRANSPORTVALUES_IP_TCP = TMP_NETTRANSPORTVALUES_IP_TCP;
    NETTRANSPORTVALUES_IP_UDP = TMP_NETTRANSPORTVALUES_IP_UDP;
    NETTRANSPORTVALUES_IP = TMP_NETTRANSPORTVALUES_IP;
    NETTRANSPORTVALUES_UNIX = TMP_NETTRANSPORTVALUES_UNIX;
    NETTRANSPORTVALUES_PIPE = TMP_NETTRANSPORTVALUES_PIPE;
    NETTRANSPORTVALUES_INPROC = TMP_NETTRANSPORTVALUES_INPROC;
    NETTRANSPORTVALUES_OTHER = TMP_NETTRANSPORTVALUES_OTHER;
    NetTransportValues = /* @__PURE__ */ createConstMap([
      TMP_NETTRANSPORTVALUES_IP_TCP,
      TMP_NETTRANSPORTVALUES_IP_UDP,
      TMP_NETTRANSPORTVALUES_IP,
      TMP_NETTRANSPORTVALUES_UNIX,
      TMP_NETTRANSPORTVALUES_PIPE,
      TMP_NETTRANSPORTVALUES_INPROC,
      TMP_NETTRANSPORTVALUES_OTHER
    ]);
    TMP_NETHOSTCONNECTIONTYPEVALUES_WIFI = "wifi";
    TMP_NETHOSTCONNECTIONTYPEVALUES_WIRED = "wired";
    TMP_NETHOSTCONNECTIONTYPEVALUES_CELL = "cell";
    TMP_NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE = "unavailable";
    TMP_NETHOSTCONNECTIONTYPEVALUES_UNKNOWN = "unknown";
    NETHOSTCONNECTIONTYPEVALUES_WIFI = TMP_NETHOSTCONNECTIONTYPEVALUES_WIFI;
    NETHOSTCONNECTIONTYPEVALUES_WIRED = TMP_NETHOSTCONNECTIONTYPEVALUES_WIRED;
    NETHOSTCONNECTIONTYPEVALUES_CELL = TMP_NETHOSTCONNECTIONTYPEVALUES_CELL;
    NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE = TMP_NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE;
    NETHOSTCONNECTIONTYPEVALUES_UNKNOWN = TMP_NETHOSTCONNECTIONTYPEVALUES_UNKNOWN;
    NetHostConnectionTypeValues = /* @__PURE__ */ createConstMap([
      TMP_NETHOSTCONNECTIONTYPEVALUES_WIFI,
      TMP_NETHOSTCONNECTIONTYPEVALUES_WIRED,
      TMP_NETHOSTCONNECTIONTYPEVALUES_CELL,
      TMP_NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE,
      TMP_NETHOSTCONNECTIONTYPEVALUES_UNKNOWN
    ]);
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GPRS = "gprs";
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EDGE = "edge";
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_UMTS = "umts";
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA = "cdma";
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 = "evdo_0";
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A = "evdo_a";
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT = "cdma2000_1xrtt";
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA = "hsdpa";
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA = "hsupa";
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPA = "hspa";
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IDEN = "iden";
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B = "evdo_b";
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE = "lte";
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD = "ehrpd";
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP = "hspap";
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GSM = "gsm";
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA = "td_scdma";
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN = "iwlan";
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NR = "nr";
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA = "nrnsa";
    TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA = "lte_ca";
    NETHOSTCONNECTIONSUBTYPEVALUES_GPRS = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GPRS;
    NETHOSTCONNECTIONSUBTYPEVALUES_EDGE = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EDGE;
    NETHOSTCONNECTIONSUBTYPEVALUES_UMTS = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_UMTS;
    NETHOSTCONNECTIONSUBTYPEVALUES_CDMA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA;
    NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0 = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0;
    NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A;
    NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT;
    NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA;
    NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA;
    NETHOSTCONNECTIONSUBTYPEVALUES_HSPA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPA;
    NETHOSTCONNECTIONSUBTYPEVALUES_IDEN = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IDEN;
    NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B;
    NETHOSTCONNECTIONSUBTYPEVALUES_LTE = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE;
    NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD;
    NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP;
    NETHOSTCONNECTIONSUBTYPEVALUES_GSM = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GSM;
    NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA;
    NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN;
    NETHOSTCONNECTIONSUBTYPEVALUES_NR = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NR;
    NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA;
    NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA = TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA;
    NetHostConnectionSubtypeValues = /* @__PURE__ */ createConstMap([
      TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GPRS,
      TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EDGE,
      TMP_NETHOSTCONNECTIONSUBTYPEVALUES_UMTS,
      TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA,
      TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0,
      TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A,
      TMP_NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT,
      TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA,
      TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA,
      TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPA,
      TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IDEN,
      TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B,
      TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE,
      TMP_NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD,
      TMP_NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP,
      TMP_NETHOSTCONNECTIONSUBTYPEVALUES_GSM,
      TMP_NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA,
      TMP_NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN,
      TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NR,
      TMP_NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA,
      TMP_NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA
    ]);
    TMP_HTTPFLAVORVALUES_HTTP_1_0 = "1.0";
    TMP_HTTPFLAVORVALUES_HTTP_1_1 = "1.1";
    TMP_HTTPFLAVORVALUES_HTTP_2_0 = "2.0";
    TMP_HTTPFLAVORVALUES_SPDY = "SPDY";
    TMP_HTTPFLAVORVALUES_QUIC = "QUIC";
    HTTPFLAVORVALUES_HTTP_1_0 = TMP_HTTPFLAVORVALUES_HTTP_1_0;
    HTTPFLAVORVALUES_HTTP_1_1 = TMP_HTTPFLAVORVALUES_HTTP_1_1;
    HTTPFLAVORVALUES_HTTP_2_0 = TMP_HTTPFLAVORVALUES_HTTP_2_0;
    HTTPFLAVORVALUES_SPDY = TMP_HTTPFLAVORVALUES_SPDY;
    HTTPFLAVORVALUES_QUIC = TMP_HTTPFLAVORVALUES_QUIC;
    HttpFlavorValues = {
      HTTP_1_0: TMP_HTTPFLAVORVALUES_HTTP_1_0,
      HTTP_1_1: TMP_HTTPFLAVORVALUES_HTTP_1_1,
      HTTP_2_0: TMP_HTTPFLAVORVALUES_HTTP_2_0,
      SPDY: TMP_HTTPFLAVORVALUES_SPDY,
      QUIC: TMP_HTTPFLAVORVALUES_QUIC
    };
    TMP_MESSAGINGDESTINATIONKINDVALUES_QUEUE = "queue";
    TMP_MESSAGINGDESTINATIONKINDVALUES_TOPIC = "topic";
    MESSAGINGDESTINATIONKINDVALUES_QUEUE = TMP_MESSAGINGDESTINATIONKINDVALUES_QUEUE;
    MESSAGINGDESTINATIONKINDVALUES_TOPIC = TMP_MESSAGINGDESTINATIONKINDVALUES_TOPIC;
    MessagingDestinationKindValues = /* @__PURE__ */ createConstMap([
      TMP_MESSAGINGDESTINATIONKINDVALUES_QUEUE,
      TMP_MESSAGINGDESTINATIONKINDVALUES_TOPIC
    ]);
    TMP_MESSAGINGOPERATIONVALUES_RECEIVE = "receive";
    TMP_MESSAGINGOPERATIONVALUES_PROCESS = "process";
    MESSAGINGOPERATIONVALUES_RECEIVE = TMP_MESSAGINGOPERATIONVALUES_RECEIVE;
    MESSAGINGOPERATIONVALUES_PROCESS = TMP_MESSAGINGOPERATIONVALUES_PROCESS;
    MessagingOperationValues = /* @__PURE__ */ createConstMap([
      TMP_MESSAGINGOPERATIONVALUES_RECEIVE,
      TMP_MESSAGINGOPERATIONVALUES_PROCESS
    ]);
    TMP_RPCGRPCSTATUSCODEVALUES_OK = 0;
    TMP_RPCGRPCSTATUSCODEVALUES_CANCELLED = 1;
    TMP_RPCGRPCSTATUSCODEVALUES_UNKNOWN = 2;
    TMP_RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT = 3;
    TMP_RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED = 4;
    TMP_RPCGRPCSTATUSCODEVALUES_NOT_FOUND = 5;
    TMP_RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS = 6;
    TMP_RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED = 7;
    TMP_RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED = 8;
    TMP_RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION = 9;
    TMP_RPCGRPCSTATUSCODEVALUES_ABORTED = 10;
    TMP_RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE = 11;
    TMP_RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED = 12;
    TMP_RPCGRPCSTATUSCODEVALUES_INTERNAL = 13;
    TMP_RPCGRPCSTATUSCODEVALUES_UNAVAILABLE = 14;
    TMP_RPCGRPCSTATUSCODEVALUES_DATA_LOSS = 15;
    TMP_RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED = 16;
    RPCGRPCSTATUSCODEVALUES_OK = TMP_RPCGRPCSTATUSCODEVALUES_OK;
    RPCGRPCSTATUSCODEVALUES_CANCELLED = TMP_RPCGRPCSTATUSCODEVALUES_CANCELLED;
    RPCGRPCSTATUSCODEVALUES_UNKNOWN = TMP_RPCGRPCSTATUSCODEVALUES_UNKNOWN;
    RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT = TMP_RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT;
    RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED = TMP_RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED;
    RPCGRPCSTATUSCODEVALUES_NOT_FOUND = TMP_RPCGRPCSTATUSCODEVALUES_NOT_FOUND;
    RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS = TMP_RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS;
    RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED = TMP_RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED;
    RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED = TMP_RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED;
    RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION = TMP_RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION;
    RPCGRPCSTATUSCODEVALUES_ABORTED = TMP_RPCGRPCSTATUSCODEVALUES_ABORTED;
    RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE = TMP_RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE;
    RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED = TMP_RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED;
    RPCGRPCSTATUSCODEVALUES_INTERNAL = TMP_RPCGRPCSTATUSCODEVALUES_INTERNAL;
    RPCGRPCSTATUSCODEVALUES_UNAVAILABLE = TMP_RPCGRPCSTATUSCODEVALUES_UNAVAILABLE;
    RPCGRPCSTATUSCODEVALUES_DATA_LOSS = TMP_RPCGRPCSTATUSCODEVALUES_DATA_LOSS;
    RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED = TMP_RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED;
    RpcGrpcStatusCodeValues = {
      OK: TMP_RPCGRPCSTATUSCODEVALUES_OK,
      CANCELLED: TMP_RPCGRPCSTATUSCODEVALUES_CANCELLED,
      UNKNOWN: TMP_RPCGRPCSTATUSCODEVALUES_UNKNOWN,
      INVALID_ARGUMENT: TMP_RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT,
      DEADLINE_EXCEEDED: TMP_RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED,
      NOT_FOUND: TMP_RPCGRPCSTATUSCODEVALUES_NOT_FOUND,
      ALREADY_EXISTS: TMP_RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS,
      PERMISSION_DENIED: TMP_RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED,
      RESOURCE_EXHAUSTED: TMP_RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED,
      FAILED_PRECONDITION: TMP_RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION,
      ABORTED: TMP_RPCGRPCSTATUSCODEVALUES_ABORTED,
      OUT_OF_RANGE: TMP_RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE,
      UNIMPLEMENTED: TMP_RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED,
      INTERNAL: TMP_RPCGRPCSTATUSCODEVALUES_INTERNAL,
      UNAVAILABLE: TMP_RPCGRPCSTATUSCODEVALUES_UNAVAILABLE,
      DATA_LOSS: TMP_RPCGRPCSTATUSCODEVALUES_DATA_LOSS,
      UNAUTHENTICATED: TMP_RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED
    };
    TMP_MESSAGETYPEVALUES_SENT = "SENT";
    TMP_MESSAGETYPEVALUES_RECEIVED = "RECEIVED";
    MESSAGETYPEVALUES_SENT = TMP_MESSAGETYPEVALUES_SENT;
    MESSAGETYPEVALUES_RECEIVED = TMP_MESSAGETYPEVALUES_RECEIVED;
    MessageTypeValues = /* @__PURE__ */ createConstMap([
      TMP_MESSAGETYPEVALUES_SENT,
      TMP_MESSAGETYPEVALUES_RECEIVED
    ]);
  }
});

// node_modules/@opentelemetry/semantic-conventions/build/esm/trace/index.js
var init_trace2 = __esm({
  "node_modules/@opentelemetry/semantic-conventions/build/esm/trace/index.js"() {
    init_esm();
    init_SemanticAttributes();
  }
});

// node_modules/@opentelemetry/semantic-conventions/build/esm/resource/SemanticResourceAttributes.js
var TMP_CLOUD_PROVIDER, TMP_CLOUD_ACCOUNT_ID, TMP_CLOUD_REGION, TMP_CLOUD_AVAILABILITY_ZONE, TMP_CLOUD_PLATFORM, TMP_AWS_ECS_CONTAINER_ARN, TMP_AWS_ECS_CLUSTER_ARN, TMP_AWS_ECS_LAUNCHTYPE, TMP_AWS_ECS_TASK_ARN, TMP_AWS_ECS_TASK_FAMILY, TMP_AWS_ECS_TASK_REVISION, TMP_AWS_EKS_CLUSTER_ARN, TMP_AWS_LOG_GROUP_NAMES, TMP_AWS_LOG_GROUP_ARNS, TMP_AWS_LOG_STREAM_NAMES, TMP_AWS_LOG_STREAM_ARNS, TMP_CONTAINER_NAME, TMP_CONTAINER_ID, TMP_CONTAINER_RUNTIME, TMP_CONTAINER_IMAGE_NAME, TMP_CONTAINER_IMAGE_TAG, TMP_DEPLOYMENT_ENVIRONMENT, TMP_DEVICE_ID, TMP_DEVICE_MODEL_IDENTIFIER, TMP_DEVICE_MODEL_NAME, TMP_FAAS_NAME, TMP_FAAS_ID, TMP_FAAS_VERSION, TMP_FAAS_INSTANCE, TMP_FAAS_MAX_MEMORY, TMP_HOST_ID, TMP_HOST_NAME, TMP_HOST_TYPE, TMP_HOST_ARCH, TMP_HOST_IMAGE_NAME, TMP_HOST_IMAGE_ID, TMP_HOST_IMAGE_VERSION, TMP_K8S_CLUSTER_NAME, TMP_K8S_NODE_NAME, TMP_K8S_NODE_UID, TMP_K8S_NAMESPACE_NAME, TMP_K8S_POD_UID, TMP_K8S_POD_NAME, TMP_K8S_CONTAINER_NAME, TMP_K8S_REPLICASET_UID, TMP_K8S_REPLICASET_NAME, TMP_K8S_DEPLOYMENT_UID, TMP_K8S_DEPLOYMENT_NAME, TMP_K8S_STATEFULSET_UID, TMP_K8S_STATEFULSET_NAME, TMP_K8S_DAEMONSET_UID, TMP_K8S_DAEMONSET_NAME, TMP_K8S_JOB_UID, TMP_K8S_JOB_NAME, TMP_K8S_CRONJOB_UID, TMP_K8S_CRONJOB_NAME, TMP_OS_TYPE, TMP_OS_DESCRIPTION, TMP_OS_NAME, TMP_OS_VERSION, TMP_PROCESS_PID, TMP_PROCESS_EXECUTABLE_NAME, TMP_PROCESS_EXECUTABLE_PATH, TMP_PROCESS_COMMAND, TMP_PROCESS_COMMAND_LINE, TMP_PROCESS_COMMAND_ARGS, TMP_PROCESS_OWNER, TMP_PROCESS_RUNTIME_NAME, TMP_PROCESS_RUNTIME_VERSION, TMP_PROCESS_RUNTIME_DESCRIPTION, TMP_SERVICE_NAME, TMP_SERVICE_NAMESPACE, TMP_SERVICE_INSTANCE_ID, TMP_SERVICE_VERSION, TMP_TELEMETRY_SDK_NAME, TMP_TELEMETRY_SDK_LANGUAGE, TMP_TELEMETRY_SDK_VERSION, TMP_TELEMETRY_AUTO_VERSION, TMP_WEBENGINE_NAME, TMP_WEBENGINE_VERSION, TMP_WEBENGINE_DESCRIPTION, SEMRESATTRS_CLOUD_PROVIDER, SEMRESATTRS_CLOUD_ACCOUNT_ID, SEMRESATTRS_CLOUD_REGION, SEMRESATTRS_CLOUD_AVAILABILITY_ZONE, SEMRESATTRS_CLOUD_PLATFORM, SEMRESATTRS_AWS_ECS_CONTAINER_ARN, SEMRESATTRS_AWS_ECS_CLUSTER_ARN, SEMRESATTRS_AWS_ECS_LAUNCHTYPE, SEMRESATTRS_AWS_ECS_TASK_ARN, SEMRESATTRS_AWS_ECS_TASK_FAMILY, SEMRESATTRS_AWS_ECS_TASK_REVISION, SEMRESATTRS_AWS_EKS_CLUSTER_ARN, SEMRESATTRS_AWS_LOG_GROUP_NAMES, SEMRESATTRS_AWS_LOG_GROUP_ARNS, SEMRESATTRS_AWS_LOG_STREAM_NAMES, SEMRESATTRS_AWS_LOG_STREAM_ARNS, SEMRESATTRS_CONTAINER_NAME, SEMRESATTRS_CONTAINER_ID, SEMRESATTRS_CONTAINER_RUNTIME, SEMRESATTRS_CONTAINER_IMAGE_NAME, SEMRESATTRS_CONTAINER_IMAGE_TAG, SEMRESATTRS_DEPLOYMENT_ENVIRONMENT, SEMRESATTRS_DEVICE_ID, SEMRESATTRS_DEVICE_MODEL_IDENTIFIER, SEMRESATTRS_DEVICE_MODEL_NAME, SEMRESATTRS_FAAS_NAME, SEMRESATTRS_FAAS_ID, SEMRESATTRS_FAAS_VERSION, SEMRESATTRS_FAAS_INSTANCE, SEMRESATTRS_FAAS_MAX_MEMORY, SEMRESATTRS_HOST_ID, SEMRESATTRS_HOST_NAME, SEMRESATTRS_HOST_TYPE, SEMRESATTRS_HOST_ARCH, SEMRESATTRS_HOST_IMAGE_NAME, SEMRESATTRS_HOST_IMAGE_ID, SEMRESATTRS_HOST_IMAGE_VERSION, SEMRESATTRS_K8S_CLUSTER_NAME, SEMRESATTRS_K8S_NODE_NAME, SEMRESATTRS_K8S_NODE_UID, SEMRESATTRS_K8S_NAMESPACE_NAME, SEMRESATTRS_K8S_POD_UID, SEMRESATTRS_K8S_POD_NAME, SEMRESATTRS_K8S_CONTAINER_NAME, SEMRESATTRS_K8S_REPLICASET_UID, SEMRESATTRS_K8S_REPLICASET_NAME, SEMRESATTRS_K8S_DEPLOYMENT_UID, SEMRESATTRS_K8S_DEPLOYMENT_NAME, SEMRESATTRS_K8S_STATEFULSET_UID, SEMRESATTRS_K8S_STATEFULSET_NAME, SEMRESATTRS_K8S_DAEMONSET_UID, SEMRESATTRS_K8S_DAEMONSET_NAME, SEMRESATTRS_K8S_JOB_UID, SEMRESATTRS_K8S_JOB_NAME, SEMRESATTRS_K8S_CRONJOB_UID, SEMRESATTRS_K8S_CRONJOB_NAME, SEMRESATTRS_OS_TYPE, SEMRESATTRS_OS_DESCRIPTION, SEMRESATTRS_OS_NAME, SEMRESATTRS_OS_VERSION, SEMRESATTRS_PROCESS_PID, SEMRESATTRS_PROCESS_EXECUTABLE_NAME, SEMRESATTRS_PROCESS_EXECUTABLE_PATH, SEMRESATTRS_PROCESS_COMMAND, SEMRESATTRS_PROCESS_COMMAND_LINE, SEMRESATTRS_PROCESS_COMMAND_ARGS, SEMRESATTRS_PROCESS_OWNER, SEMRESATTRS_PROCESS_RUNTIME_NAME, SEMRESATTRS_PROCESS_RUNTIME_VERSION, SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION, SEMRESATTRS_SERVICE_NAME, SEMRESATTRS_SERVICE_NAMESPACE, SEMRESATTRS_SERVICE_INSTANCE_ID, SEMRESATTRS_SERVICE_VERSION, SEMRESATTRS_TELEMETRY_SDK_NAME, SEMRESATTRS_TELEMETRY_SDK_LANGUAGE, SEMRESATTRS_TELEMETRY_SDK_VERSION, SEMRESATTRS_TELEMETRY_AUTO_VERSION, SEMRESATTRS_WEBENGINE_NAME, SEMRESATTRS_WEBENGINE_VERSION, SEMRESATTRS_WEBENGINE_DESCRIPTION, SemanticResourceAttributes, TMP_CLOUDPROVIDERVALUES_ALIBABA_CLOUD, TMP_CLOUDPROVIDERVALUES_AWS, TMP_CLOUDPROVIDERVALUES_AZURE, TMP_CLOUDPROVIDERVALUES_GCP, CLOUDPROVIDERVALUES_ALIBABA_CLOUD, CLOUDPROVIDERVALUES_AWS, CLOUDPROVIDERVALUES_AZURE, CLOUDPROVIDERVALUES_GCP, CloudProviderValues, TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS, TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC, TMP_CLOUDPLATFORMVALUES_AWS_EC2, TMP_CLOUDPLATFORMVALUES_AWS_ECS, TMP_CLOUDPLATFORMVALUES_AWS_EKS, TMP_CLOUDPLATFORMVALUES_AWS_LAMBDA, TMP_CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK, TMP_CLOUDPLATFORMVALUES_AZURE_VM, TMP_CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES, TMP_CLOUDPLATFORMVALUES_AZURE_AKS, TMP_CLOUDPLATFORMVALUES_AZURE_FUNCTIONS, TMP_CLOUDPLATFORMVALUES_AZURE_APP_SERVICE, TMP_CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE, TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_RUN, TMP_CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE, TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS, TMP_CLOUDPLATFORMVALUES_GCP_APP_ENGINE, CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS, CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC, CLOUDPLATFORMVALUES_AWS_EC2, CLOUDPLATFORMVALUES_AWS_ECS, CLOUDPLATFORMVALUES_AWS_EKS, CLOUDPLATFORMVALUES_AWS_LAMBDA, CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK, CLOUDPLATFORMVALUES_AZURE_VM, CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES, CLOUDPLATFORMVALUES_AZURE_AKS, CLOUDPLATFORMVALUES_AZURE_FUNCTIONS, CLOUDPLATFORMVALUES_AZURE_APP_SERVICE, CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE, CLOUDPLATFORMVALUES_GCP_CLOUD_RUN, CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE, CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS, CLOUDPLATFORMVALUES_GCP_APP_ENGINE, CloudPlatformValues, TMP_AWSECSLAUNCHTYPEVALUES_EC2, TMP_AWSECSLAUNCHTYPEVALUES_FARGATE, AWSECSLAUNCHTYPEVALUES_EC2, AWSECSLAUNCHTYPEVALUES_FARGATE, AwsEcsLaunchtypeValues, TMP_HOSTARCHVALUES_AMD64, TMP_HOSTARCHVALUES_ARM32, TMP_HOSTARCHVALUES_ARM64, TMP_HOSTARCHVALUES_IA64, TMP_HOSTARCHVALUES_PPC32, TMP_HOSTARCHVALUES_PPC64, TMP_HOSTARCHVALUES_X86, HOSTARCHVALUES_AMD64, HOSTARCHVALUES_ARM32, HOSTARCHVALUES_ARM64, HOSTARCHVALUES_IA64, HOSTARCHVALUES_PPC32, HOSTARCHVALUES_PPC64, HOSTARCHVALUES_X86, HostArchValues, TMP_OSTYPEVALUES_WINDOWS, TMP_OSTYPEVALUES_LINUX, TMP_OSTYPEVALUES_DARWIN, TMP_OSTYPEVALUES_FREEBSD, TMP_OSTYPEVALUES_NETBSD, TMP_OSTYPEVALUES_OPENBSD, TMP_OSTYPEVALUES_DRAGONFLYBSD, TMP_OSTYPEVALUES_HPUX, TMP_OSTYPEVALUES_AIX, TMP_OSTYPEVALUES_SOLARIS, TMP_OSTYPEVALUES_Z_OS, OSTYPEVALUES_WINDOWS, OSTYPEVALUES_LINUX, OSTYPEVALUES_DARWIN, OSTYPEVALUES_FREEBSD, OSTYPEVALUES_NETBSD, OSTYPEVALUES_OPENBSD, OSTYPEVALUES_DRAGONFLYBSD, OSTYPEVALUES_HPUX, OSTYPEVALUES_AIX, OSTYPEVALUES_SOLARIS, OSTYPEVALUES_Z_OS, OsTypeValues, TMP_TELEMETRYSDKLANGUAGEVALUES_CPP, TMP_TELEMETRYSDKLANGUAGEVALUES_DOTNET, TMP_TELEMETRYSDKLANGUAGEVALUES_ERLANG, TMP_TELEMETRYSDKLANGUAGEVALUES_GO, TMP_TELEMETRYSDKLANGUAGEVALUES_JAVA, TMP_TELEMETRYSDKLANGUAGEVALUES_NODEJS, TMP_TELEMETRYSDKLANGUAGEVALUES_PHP, TMP_TELEMETRYSDKLANGUAGEVALUES_PYTHON, TMP_TELEMETRYSDKLANGUAGEVALUES_RUBY, TMP_TELEMETRYSDKLANGUAGEVALUES_WEBJS, TELEMETRYSDKLANGUAGEVALUES_CPP, TELEMETRYSDKLANGUAGEVALUES_DOTNET, TELEMETRYSDKLANGUAGEVALUES_ERLANG, TELEMETRYSDKLANGUAGEVALUES_GO, TELEMETRYSDKLANGUAGEVALUES_JAVA, TELEMETRYSDKLANGUAGEVALUES_NODEJS, TELEMETRYSDKLANGUAGEVALUES_PHP, TELEMETRYSDKLANGUAGEVALUES_PYTHON, TELEMETRYSDKLANGUAGEVALUES_RUBY, TELEMETRYSDKLANGUAGEVALUES_WEBJS, TelemetrySdkLanguageValues;
var init_SemanticResourceAttributes = __esm({
  "node_modules/@opentelemetry/semantic-conventions/build/esm/resource/SemanticResourceAttributes.js"() {
    init_esm();
    init_utils3();
    TMP_CLOUD_PROVIDER = "cloud.provider";
    TMP_CLOUD_ACCOUNT_ID = "cloud.account.id";
    TMP_CLOUD_REGION = "cloud.region";
    TMP_CLOUD_AVAILABILITY_ZONE = "cloud.availability_zone";
    TMP_CLOUD_PLATFORM = "cloud.platform";
    TMP_AWS_ECS_CONTAINER_ARN = "aws.ecs.container.arn";
    TMP_AWS_ECS_CLUSTER_ARN = "aws.ecs.cluster.arn";
    TMP_AWS_ECS_LAUNCHTYPE = "aws.ecs.launchtype";
    TMP_AWS_ECS_TASK_ARN = "aws.ecs.task.arn";
    TMP_AWS_ECS_TASK_FAMILY = "aws.ecs.task.family";
    TMP_AWS_ECS_TASK_REVISION = "aws.ecs.task.revision";
    TMP_AWS_EKS_CLUSTER_ARN = "aws.eks.cluster.arn";
    TMP_AWS_LOG_GROUP_NAMES = "aws.log.group.names";
    TMP_AWS_LOG_GROUP_ARNS = "aws.log.group.arns";
    TMP_AWS_LOG_STREAM_NAMES = "aws.log.stream.names";
    TMP_AWS_LOG_STREAM_ARNS = "aws.log.stream.arns";
    TMP_CONTAINER_NAME = "container.name";
    TMP_CONTAINER_ID = "container.id";
    TMP_CONTAINER_RUNTIME = "container.runtime";
    TMP_CONTAINER_IMAGE_NAME = "container.image.name";
    TMP_CONTAINER_IMAGE_TAG = "container.image.tag";
    TMP_DEPLOYMENT_ENVIRONMENT = "deployment.environment";
    TMP_DEVICE_ID = "device.id";
    TMP_DEVICE_MODEL_IDENTIFIER = "device.model.identifier";
    TMP_DEVICE_MODEL_NAME = "device.model.name";
    TMP_FAAS_NAME = "faas.name";
    TMP_FAAS_ID = "faas.id";
    TMP_FAAS_VERSION = "faas.version";
    TMP_FAAS_INSTANCE = "faas.instance";
    TMP_FAAS_MAX_MEMORY = "faas.max_memory";
    TMP_HOST_ID = "host.id";
    TMP_HOST_NAME = "host.name";
    TMP_HOST_TYPE = "host.type";
    TMP_HOST_ARCH = "host.arch";
    TMP_HOST_IMAGE_NAME = "host.image.name";
    TMP_HOST_IMAGE_ID = "host.image.id";
    TMP_HOST_IMAGE_VERSION = "host.image.version";
    TMP_K8S_CLUSTER_NAME = "k8s.cluster.name";
    TMP_K8S_NODE_NAME = "k8s.node.name";
    TMP_K8S_NODE_UID = "k8s.node.uid";
    TMP_K8S_NAMESPACE_NAME = "k8s.namespace.name";
    TMP_K8S_POD_UID = "k8s.pod.uid";
    TMP_K8S_POD_NAME = "k8s.pod.name";
    TMP_K8S_CONTAINER_NAME = "k8s.container.name";
    TMP_K8S_REPLICASET_UID = "k8s.replicaset.uid";
    TMP_K8S_REPLICASET_NAME = "k8s.replicaset.name";
    TMP_K8S_DEPLOYMENT_UID = "k8s.deployment.uid";
    TMP_K8S_DEPLOYMENT_NAME = "k8s.deployment.name";
    TMP_K8S_STATEFULSET_UID = "k8s.statefulset.uid";
    TMP_K8S_STATEFULSET_NAME = "k8s.statefulset.name";
    TMP_K8S_DAEMONSET_UID = "k8s.daemonset.uid";
    TMP_K8S_DAEMONSET_NAME = "k8s.daemonset.name";
    TMP_K8S_JOB_UID = "k8s.job.uid";
    TMP_K8S_JOB_NAME = "k8s.job.name";
    TMP_K8S_CRONJOB_UID = "k8s.cronjob.uid";
    TMP_K8S_CRONJOB_NAME = "k8s.cronjob.name";
    TMP_OS_TYPE = "os.type";
    TMP_OS_DESCRIPTION = "os.description";
    TMP_OS_NAME = "os.name";
    TMP_OS_VERSION = "os.version";
    TMP_PROCESS_PID = "process.pid";
    TMP_PROCESS_EXECUTABLE_NAME = "process.executable.name";
    TMP_PROCESS_EXECUTABLE_PATH = "process.executable.path";
    TMP_PROCESS_COMMAND = "process.command";
    TMP_PROCESS_COMMAND_LINE = "process.command_line";
    TMP_PROCESS_COMMAND_ARGS = "process.command_args";
    TMP_PROCESS_OWNER = "process.owner";
    TMP_PROCESS_RUNTIME_NAME = "process.runtime.name";
    TMP_PROCESS_RUNTIME_VERSION = "process.runtime.version";
    TMP_PROCESS_RUNTIME_DESCRIPTION = "process.runtime.description";
    TMP_SERVICE_NAME = "service.name";
    TMP_SERVICE_NAMESPACE = "service.namespace";
    TMP_SERVICE_INSTANCE_ID = "service.instance.id";
    TMP_SERVICE_VERSION = "service.version";
    TMP_TELEMETRY_SDK_NAME = "telemetry.sdk.name";
    TMP_TELEMETRY_SDK_LANGUAGE = "telemetry.sdk.language";
    TMP_TELEMETRY_SDK_VERSION = "telemetry.sdk.version";
    TMP_TELEMETRY_AUTO_VERSION = "telemetry.auto.version";
    TMP_WEBENGINE_NAME = "webengine.name";
    TMP_WEBENGINE_VERSION = "webengine.version";
    TMP_WEBENGINE_DESCRIPTION = "webengine.description";
    SEMRESATTRS_CLOUD_PROVIDER = TMP_CLOUD_PROVIDER;
    SEMRESATTRS_CLOUD_ACCOUNT_ID = TMP_CLOUD_ACCOUNT_ID;
    SEMRESATTRS_CLOUD_REGION = TMP_CLOUD_REGION;
    SEMRESATTRS_CLOUD_AVAILABILITY_ZONE = TMP_CLOUD_AVAILABILITY_ZONE;
    SEMRESATTRS_CLOUD_PLATFORM = TMP_CLOUD_PLATFORM;
    SEMRESATTRS_AWS_ECS_CONTAINER_ARN = TMP_AWS_ECS_CONTAINER_ARN;
    SEMRESATTRS_AWS_ECS_CLUSTER_ARN = TMP_AWS_ECS_CLUSTER_ARN;
    SEMRESATTRS_AWS_ECS_LAUNCHTYPE = TMP_AWS_ECS_LAUNCHTYPE;
    SEMRESATTRS_AWS_ECS_TASK_ARN = TMP_AWS_ECS_TASK_ARN;
    SEMRESATTRS_AWS_ECS_TASK_FAMILY = TMP_AWS_ECS_TASK_FAMILY;
    SEMRESATTRS_AWS_ECS_TASK_REVISION = TMP_AWS_ECS_TASK_REVISION;
    SEMRESATTRS_AWS_EKS_CLUSTER_ARN = TMP_AWS_EKS_CLUSTER_ARN;
    SEMRESATTRS_AWS_LOG_GROUP_NAMES = TMP_AWS_LOG_GROUP_NAMES;
    SEMRESATTRS_AWS_LOG_GROUP_ARNS = TMP_AWS_LOG_GROUP_ARNS;
    SEMRESATTRS_AWS_LOG_STREAM_NAMES = TMP_AWS_LOG_STREAM_NAMES;
    SEMRESATTRS_AWS_LOG_STREAM_ARNS = TMP_AWS_LOG_STREAM_ARNS;
    SEMRESATTRS_CONTAINER_NAME = TMP_CONTAINER_NAME;
    SEMRESATTRS_CONTAINER_ID = TMP_CONTAINER_ID;
    SEMRESATTRS_CONTAINER_RUNTIME = TMP_CONTAINER_RUNTIME;
    SEMRESATTRS_CONTAINER_IMAGE_NAME = TMP_CONTAINER_IMAGE_NAME;
    SEMRESATTRS_CONTAINER_IMAGE_TAG = TMP_CONTAINER_IMAGE_TAG;
    SEMRESATTRS_DEPLOYMENT_ENVIRONMENT = TMP_DEPLOYMENT_ENVIRONMENT;
    SEMRESATTRS_DEVICE_ID = TMP_DEVICE_ID;
    SEMRESATTRS_DEVICE_MODEL_IDENTIFIER = TMP_DEVICE_MODEL_IDENTIFIER;
    SEMRESATTRS_DEVICE_MODEL_NAME = TMP_DEVICE_MODEL_NAME;
    SEMRESATTRS_FAAS_NAME = TMP_FAAS_NAME;
    SEMRESATTRS_FAAS_ID = TMP_FAAS_ID;
    SEMRESATTRS_FAAS_VERSION = TMP_FAAS_VERSION;
    SEMRESATTRS_FAAS_INSTANCE = TMP_FAAS_INSTANCE;
    SEMRESATTRS_FAAS_MAX_MEMORY = TMP_FAAS_MAX_MEMORY;
    SEMRESATTRS_HOST_ID = TMP_HOST_ID;
    SEMRESATTRS_HOST_NAME = TMP_HOST_NAME;
    SEMRESATTRS_HOST_TYPE = TMP_HOST_TYPE;
    SEMRESATTRS_HOST_ARCH = TMP_HOST_ARCH;
    SEMRESATTRS_HOST_IMAGE_NAME = TMP_HOST_IMAGE_NAME;
    SEMRESATTRS_HOST_IMAGE_ID = TMP_HOST_IMAGE_ID;
    SEMRESATTRS_HOST_IMAGE_VERSION = TMP_HOST_IMAGE_VERSION;
    SEMRESATTRS_K8S_CLUSTER_NAME = TMP_K8S_CLUSTER_NAME;
    SEMRESATTRS_K8S_NODE_NAME = TMP_K8S_NODE_NAME;
    SEMRESATTRS_K8S_NODE_UID = TMP_K8S_NODE_UID;
    SEMRESATTRS_K8S_NAMESPACE_NAME = TMP_K8S_NAMESPACE_NAME;
    SEMRESATTRS_K8S_POD_UID = TMP_K8S_POD_UID;
    SEMRESATTRS_K8S_POD_NAME = TMP_K8S_POD_NAME;
    SEMRESATTRS_K8S_CONTAINER_NAME = TMP_K8S_CONTAINER_NAME;
    SEMRESATTRS_K8S_REPLICASET_UID = TMP_K8S_REPLICASET_UID;
    SEMRESATTRS_K8S_REPLICASET_NAME = TMP_K8S_REPLICASET_NAME;
    SEMRESATTRS_K8S_DEPLOYMENT_UID = TMP_K8S_DEPLOYMENT_UID;
    SEMRESATTRS_K8S_DEPLOYMENT_NAME = TMP_K8S_DEPLOYMENT_NAME;
    SEMRESATTRS_K8S_STATEFULSET_UID = TMP_K8S_STATEFULSET_UID;
    SEMRESATTRS_K8S_STATEFULSET_NAME = TMP_K8S_STATEFULSET_NAME;
    SEMRESATTRS_K8S_DAEMONSET_UID = TMP_K8S_DAEMONSET_UID;
    SEMRESATTRS_K8S_DAEMONSET_NAME = TMP_K8S_DAEMONSET_NAME;
    SEMRESATTRS_K8S_JOB_UID = TMP_K8S_JOB_UID;
    SEMRESATTRS_K8S_JOB_NAME = TMP_K8S_JOB_NAME;
    SEMRESATTRS_K8S_CRONJOB_UID = TMP_K8S_CRONJOB_UID;
    SEMRESATTRS_K8S_CRONJOB_NAME = TMP_K8S_CRONJOB_NAME;
    SEMRESATTRS_OS_TYPE = TMP_OS_TYPE;
    SEMRESATTRS_OS_DESCRIPTION = TMP_OS_DESCRIPTION;
    SEMRESATTRS_OS_NAME = TMP_OS_NAME;
    SEMRESATTRS_OS_VERSION = TMP_OS_VERSION;
    SEMRESATTRS_PROCESS_PID = TMP_PROCESS_PID;
    SEMRESATTRS_PROCESS_EXECUTABLE_NAME = TMP_PROCESS_EXECUTABLE_NAME;
    SEMRESATTRS_PROCESS_EXECUTABLE_PATH = TMP_PROCESS_EXECUTABLE_PATH;
    SEMRESATTRS_PROCESS_COMMAND = TMP_PROCESS_COMMAND;
    SEMRESATTRS_PROCESS_COMMAND_LINE = TMP_PROCESS_COMMAND_LINE;
    SEMRESATTRS_PROCESS_COMMAND_ARGS = TMP_PROCESS_COMMAND_ARGS;
    SEMRESATTRS_PROCESS_OWNER = TMP_PROCESS_OWNER;
    SEMRESATTRS_PROCESS_RUNTIME_NAME = TMP_PROCESS_RUNTIME_NAME;
    SEMRESATTRS_PROCESS_RUNTIME_VERSION = TMP_PROCESS_RUNTIME_VERSION;
    SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION = TMP_PROCESS_RUNTIME_DESCRIPTION;
    SEMRESATTRS_SERVICE_NAME = TMP_SERVICE_NAME;
    SEMRESATTRS_SERVICE_NAMESPACE = TMP_SERVICE_NAMESPACE;
    SEMRESATTRS_SERVICE_INSTANCE_ID = TMP_SERVICE_INSTANCE_ID;
    SEMRESATTRS_SERVICE_VERSION = TMP_SERVICE_VERSION;
    SEMRESATTRS_TELEMETRY_SDK_NAME = TMP_TELEMETRY_SDK_NAME;
    SEMRESATTRS_TELEMETRY_SDK_LANGUAGE = TMP_TELEMETRY_SDK_LANGUAGE;
    SEMRESATTRS_TELEMETRY_SDK_VERSION = TMP_TELEMETRY_SDK_VERSION;
    SEMRESATTRS_TELEMETRY_AUTO_VERSION = TMP_TELEMETRY_AUTO_VERSION;
    SEMRESATTRS_WEBENGINE_NAME = TMP_WEBENGINE_NAME;
    SEMRESATTRS_WEBENGINE_VERSION = TMP_WEBENGINE_VERSION;
    SEMRESATTRS_WEBENGINE_DESCRIPTION = TMP_WEBENGINE_DESCRIPTION;
    SemanticResourceAttributes = /* @__PURE__ */ createConstMap([
      TMP_CLOUD_PROVIDER,
      TMP_CLOUD_ACCOUNT_ID,
      TMP_CLOUD_REGION,
      TMP_CLOUD_AVAILABILITY_ZONE,
      TMP_CLOUD_PLATFORM,
      TMP_AWS_ECS_CONTAINER_ARN,
      TMP_AWS_ECS_CLUSTER_ARN,
      TMP_AWS_ECS_LAUNCHTYPE,
      TMP_AWS_ECS_TASK_ARN,
      TMP_AWS_ECS_TASK_FAMILY,
      TMP_AWS_ECS_TASK_REVISION,
      TMP_AWS_EKS_CLUSTER_ARN,
      TMP_AWS_LOG_GROUP_NAMES,
      TMP_AWS_LOG_GROUP_ARNS,
      TMP_AWS_LOG_STREAM_NAMES,
      TMP_AWS_LOG_STREAM_ARNS,
      TMP_CONTAINER_NAME,
      TMP_CONTAINER_ID,
      TMP_CONTAINER_RUNTIME,
      TMP_CONTAINER_IMAGE_NAME,
      TMP_CONTAINER_IMAGE_TAG,
      TMP_DEPLOYMENT_ENVIRONMENT,
      TMP_DEVICE_ID,
      TMP_DEVICE_MODEL_IDENTIFIER,
      TMP_DEVICE_MODEL_NAME,
      TMP_FAAS_NAME,
      TMP_FAAS_ID,
      TMP_FAAS_VERSION,
      TMP_FAAS_INSTANCE,
      TMP_FAAS_MAX_MEMORY,
      TMP_HOST_ID,
      TMP_HOST_NAME,
      TMP_HOST_TYPE,
      TMP_HOST_ARCH,
      TMP_HOST_IMAGE_NAME,
      TMP_HOST_IMAGE_ID,
      TMP_HOST_IMAGE_VERSION,
      TMP_K8S_CLUSTER_NAME,
      TMP_K8S_NODE_NAME,
      TMP_K8S_NODE_UID,
      TMP_K8S_NAMESPACE_NAME,
      TMP_K8S_POD_UID,
      TMP_K8S_POD_NAME,
      TMP_K8S_CONTAINER_NAME,
      TMP_K8S_REPLICASET_UID,
      TMP_K8S_REPLICASET_NAME,
      TMP_K8S_DEPLOYMENT_UID,
      TMP_K8S_DEPLOYMENT_NAME,
      TMP_K8S_STATEFULSET_UID,
      TMP_K8S_STATEFULSET_NAME,
      TMP_K8S_DAEMONSET_UID,
      TMP_K8S_DAEMONSET_NAME,
      TMP_K8S_JOB_UID,
      TMP_K8S_JOB_NAME,
      TMP_K8S_CRONJOB_UID,
      TMP_K8S_CRONJOB_NAME,
      TMP_OS_TYPE,
      TMP_OS_DESCRIPTION,
      TMP_OS_NAME,
      TMP_OS_VERSION,
      TMP_PROCESS_PID,
      TMP_PROCESS_EXECUTABLE_NAME,
      TMP_PROCESS_EXECUTABLE_PATH,
      TMP_PROCESS_COMMAND,
      TMP_PROCESS_COMMAND_LINE,
      TMP_PROCESS_COMMAND_ARGS,
      TMP_PROCESS_OWNER,
      TMP_PROCESS_RUNTIME_NAME,
      TMP_PROCESS_RUNTIME_VERSION,
      TMP_PROCESS_RUNTIME_DESCRIPTION,
      TMP_SERVICE_NAME,
      TMP_SERVICE_NAMESPACE,
      TMP_SERVICE_INSTANCE_ID,
      TMP_SERVICE_VERSION,
      TMP_TELEMETRY_SDK_NAME,
      TMP_TELEMETRY_SDK_LANGUAGE,
      TMP_TELEMETRY_SDK_VERSION,
      TMP_TELEMETRY_AUTO_VERSION,
      TMP_WEBENGINE_NAME,
      TMP_WEBENGINE_VERSION,
      TMP_WEBENGINE_DESCRIPTION
    ]);
    TMP_CLOUDPROVIDERVALUES_ALIBABA_CLOUD = "alibaba_cloud";
    TMP_CLOUDPROVIDERVALUES_AWS = "aws";
    TMP_CLOUDPROVIDERVALUES_AZURE = "azure";
    TMP_CLOUDPROVIDERVALUES_GCP = "gcp";
    CLOUDPROVIDERVALUES_ALIBABA_CLOUD = TMP_CLOUDPROVIDERVALUES_ALIBABA_CLOUD;
    CLOUDPROVIDERVALUES_AWS = TMP_CLOUDPROVIDERVALUES_AWS;
    CLOUDPROVIDERVALUES_AZURE = TMP_CLOUDPROVIDERVALUES_AZURE;
    CLOUDPROVIDERVALUES_GCP = TMP_CLOUDPROVIDERVALUES_GCP;
    CloudProviderValues = /* @__PURE__ */ createConstMap([
      TMP_CLOUDPROVIDERVALUES_ALIBABA_CLOUD,
      TMP_CLOUDPROVIDERVALUES_AWS,
      TMP_CLOUDPROVIDERVALUES_AZURE,
      TMP_CLOUDPROVIDERVALUES_GCP
    ]);
    TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS = "alibaba_cloud_ecs";
    TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC = "alibaba_cloud_fc";
    TMP_CLOUDPLATFORMVALUES_AWS_EC2 = "aws_ec2";
    TMP_CLOUDPLATFORMVALUES_AWS_ECS = "aws_ecs";
    TMP_CLOUDPLATFORMVALUES_AWS_EKS = "aws_eks";
    TMP_CLOUDPLATFORMVALUES_AWS_LAMBDA = "aws_lambda";
    TMP_CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK = "aws_elastic_beanstalk";
    TMP_CLOUDPLATFORMVALUES_AZURE_VM = "azure_vm";
    TMP_CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES = "azure_container_instances";
    TMP_CLOUDPLATFORMVALUES_AZURE_AKS = "azure_aks";
    TMP_CLOUDPLATFORMVALUES_AZURE_FUNCTIONS = "azure_functions";
    TMP_CLOUDPLATFORMVALUES_AZURE_APP_SERVICE = "azure_app_service";
    TMP_CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE = "gcp_compute_engine";
    TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_RUN = "gcp_cloud_run";
    TMP_CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE = "gcp_kubernetes_engine";
    TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS = "gcp_cloud_functions";
    TMP_CLOUDPLATFORMVALUES_GCP_APP_ENGINE = "gcp_app_engine";
    CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS = TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS;
    CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC = TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC;
    CLOUDPLATFORMVALUES_AWS_EC2 = TMP_CLOUDPLATFORMVALUES_AWS_EC2;
    CLOUDPLATFORMVALUES_AWS_ECS = TMP_CLOUDPLATFORMVALUES_AWS_ECS;
    CLOUDPLATFORMVALUES_AWS_EKS = TMP_CLOUDPLATFORMVALUES_AWS_EKS;
    CLOUDPLATFORMVALUES_AWS_LAMBDA = TMP_CLOUDPLATFORMVALUES_AWS_LAMBDA;
    CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK = TMP_CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK;
    CLOUDPLATFORMVALUES_AZURE_VM = TMP_CLOUDPLATFORMVALUES_AZURE_VM;
    CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES = TMP_CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES;
    CLOUDPLATFORMVALUES_AZURE_AKS = TMP_CLOUDPLATFORMVALUES_AZURE_AKS;
    CLOUDPLATFORMVALUES_AZURE_FUNCTIONS = TMP_CLOUDPLATFORMVALUES_AZURE_FUNCTIONS;
    CLOUDPLATFORMVALUES_AZURE_APP_SERVICE = TMP_CLOUDPLATFORMVALUES_AZURE_APP_SERVICE;
    CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE = TMP_CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE;
    CLOUDPLATFORMVALUES_GCP_CLOUD_RUN = TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_RUN;
    CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE = TMP_CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE;
    CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS = TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS;
    CLOUDPLATFORMVALUES_GCP_APP_ENGINE = TMP_CLOUDPLATFORMVALUES_GCP_APP_ENGINE;
    CloudPlatformValues = /* @__PURE__ */ createConstMap([
      TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS,
      TMP_CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC,
      TMP_CLOUDPLATFORMVALUES_AWS_EC2,
      TMP_CLOUDPLATFORMVALUES_AWS_ECS,
      TMP_CLOUDPLATFORMVALUES_AWS_EKS,
      TMP_CLOUDPLATFORMVALUES_AWS_LAMBDA,
      TMP_CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK,
      TMP_CLOUDPLATFORMVALUES_AZURE_VM,
      TMP_CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES,
      TMP_CLOUDPLATFORMVALUES_AZURE_AKS,
      TMP_CLOUDPLATFORMVALUES_AZURE_FUNCTIONS,
      TMP_CLOUDPLATFORMVALUES_AZURE_APP_SERVICE,
      TMP_CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE,
      TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_RUN,
      TMP_CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE,
      TMP_CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS,
      TMP_CLOUDPLATFORMVALUES_GCP_APP_ENGINE
    ]);
    TMP_AWSECSLAUNCHTYPEVALUES_EC2 = "ec2";
    TMP_AWSECSLAUNCHTYPEVALUES_FARGATE = "fargate";
    AWSECSLAUNCHTYPEVALUES_EC2 = TMP_AWSECSLAUNCHTYPEVALUES_EC2;
    AWSECSLAUNCHTYPEVALUES_FARGATE = TMP_AWSECSLAUNCHTYPEVALUES_FARGATE;
    AwsEcsLaunchtypeValues = /* @__PURE__ */ createConstMap([
      TMP_AWSECSLAUNCHTYPEVALUES_EC2,
      TMP_AWSECSLAUNCHTYPEVALUES_FARGATE
    ]);
    TMP_HOSTARCHVALUES_AMD64 = "amd64";
    TMP_HOSTARCHVALUES_ARM32 = "arm32";
    TMP_HOSTARCHVALUES_ARM64 = "arm64";
    TMP_HOSTARCHVALUES_IA64 = "ia64";
    TMP_HOSTARCHVALUES_PPC32 = "ppc32";
    TMP_HOSTARCHVALUES_PPC64 = "ppc64";
    TMP_HOSTARCHVALUES_X86 = "x86";
    HOSTARCHVALUES_AMD64 = TMP_HOSTARCHVALUES_AMD64;
    HOSTARCHVALUES_ARM32 = TMP_HOSTARCHVALUES_ARM32;
    HOSTARCHVALUES_ARM64 = TMP_HOSTARCHVALUES_ARM64;
    HOSTARCHVALUES_IA64 = TMP_HOSTARCHVALUES_IA64;
    HOSTARCHVALUES_PPC32 = TMP_HOSTARCHVALUES_PPC32;
    HOSTARCHVALUES_PPC64 = TMP_HOSTARCHVALUES_PPC64;
    HOSTARCHVALUES_X86 = TMP_HOSTARCHVALUES_X86;
    HostArchValues = /* @__PURE__ */ createConstMap([
      TMP_HOSTARCHVALUES_AMD64,
      TMP_HOSTARCHVALUES_ARM32,
      TMP_HOSTARCHVALUES_ARM64,
      TMP_HOSTARCHVALUES_IA64,
      TMP_HOSTARCHVALUES_PPC32,
      TMP_HOSTARCHVALUES_PPC64,
      TMP_HOSTARCHVALUES_X86
    ]);
    TMP_OSTYPEVALUES_WINDOWS = "windows";
    TMP_OSTYPEVALUES_LINUX = "linux";
    TMP_OSTYPEVALUES_DARWIN = "darwin";
    TMP_OSTYPEVALUES_FREEBSD = "freebsd";
    TMP_OSTYPEVALUES_NETBSD = "netbsd";
    TMP_OSTYPEVALUES_OPENBSD = "openbsd";
    TMP_OSTYPEVALUES_DRAGONFLYBSD = "dragonflybsd";
    TMP_OSTYPEVALUES_HPUX = "hpux";
    TMP_OSTYPEVALUES_AIX = "aix";
    TMP_OSTYPEVALUES_SOLARIS = "solaris";
    TMP_OSTYPEVALUES_Z_OS = "z_os";
    OSTYPEVALUES_WINDOWS = TMP_OSTYPEVALUES_WINDOWS;
    OSTYPEVALUES_LINUX = TMP_OSTYPEVALUES_LINUX;
    OSTYPEVALUES_DARWIN = TMP_OSTYPEVALUES_DARWIN;
    OSTYPEVALUES_FREEBSD = TMP_OSTYPEVALUES_FREEBSD;
    OSTYPEVALUES_NETBSD = TMP_OSTYPEVALUES_NETBSD;
    OSTYPEVALUES_OPENBSD = TMP_OSTYPEVALUES_OPENBSD;
    OSTYPEVALUES_DRAGONFLYBSD = TMP_OSTYPEVALUES_DRAGONFLYBSD;
    OSTYPEVALUES_HPUX = TMP_OSTYPEVALUES_HPUX;
    OSTYPEVALUES_AIX = TMP_OSTYPEVALUES_AIX;
    OSTYPEVALUES_SOLARIS = TMP_OSTYPEVALUES_SOLARIS;
    OSTYPEVALUES_Z_OS = TMP_OSTYPEVALUES_Z_OS;
    OsTypeValues = /* @__PURE__ */ createConstMap([
      TMP_OSTYPEVALUES_WINDOWS,
      TMP_OSTYPEVALUES_LINUX,
      TMP_OSTYPEVALUES_DARWIN,
      TMP_OSTYPEVALUES_FREEBSD,
      TMP_OSTYPEVALUES_NETBSD,
      TMP_OSTYPEVALUES_OPENBSD,
      TMP_OSTYPEVALUES_DRAGONFLYBSD,
      TMP_OSTYPEVALUES_HPUX,
      TMP_OSTYPEVALUES_AIX,
      TMP_OSTYPEVALUES_SOLARIS,
      TMP_OSTYPEVALUES_Z_OS
    ]);
    TMP_TELEMETRYSDKLANGUAGEVALUES_CPP = "cpp";
    TMP_TELEMETRYSDKLANGUAGEVALUES_DOTNET = "dotnet";
    TMP_TELEMETRYSDKLANGUAGEVALUES_ERLANG = "erlang";
    TMP_TELEMETRYSDKLANGUAGEVALUES_GO = "go";
    TMP_TELEMETRYSDKLANGUAGEVALUES_JAVA = "java";
    TMP_TELEMETRYSDKLANGUAGEVALUES_NODEJS = "nodejs";
    TMP_TELEMETRYSDKLANGUAGEVALUES_PHP = "php";
    TMP_TELEMETRYSDKLANGUAGEVALUES_PYTHON = "python";
    TMP_TELEMETRYSDKLANGUAGEVALUES_RUBY = "ruby";
    TMP_TELEMETRYSDKLANGUAGEVALUES_WEBJS = "webjs";
    TELEMETRYSDKLANGUAGEVALUES_CPP = TMP_TELEMETRYSDKLANGUAGEVALUES_CPP;
    TELEMETRYSDKLANGUAGEVALUES_DOTNET = TMP_TELEMETRYSDKLANGUAGEVALUES_DOTNET;
    TELEMETRYSDKLANGUAGEVALUES_ERLANG = TMP_TELEMETRYSDKLANGUAGEVALUES_ERLANG;
    TELEMETRYSDKLANGUAGEVALUES_GO = TMP_TELEMETRYSDKLANGUAGEVALUES_GO;
    TELEMETRYSDKLANGUAGEVALUES_JAVA = TMP_TELEMETRYSDKLANGUAGEVALUES_JAVA;
    TELEMETRYSDKLANGUAGEVALUES_NODEJS = TMP_TELEMETRYSDKLANGUAGEVALUES_NODEJS;
    TELEMETRYSDKLANGUAGEVALUES_PHP = TMP_TELEMETRYSDKLANGUAGEVALUES_PHP;
    TELEMETRYSDKLANGUAGEVALUES_PYTHON = TMP_TELEMETRYSDKLANGUAGEVALUES_PYTHON;
    TELEMETRYSDKLANGUAGEVALUES_RUBY = TMP_TELEMETRYSDKLANGUAGEVALUES_RUBY;
    TELEMETRYSDKLANGUAGEVALUES_WEBJS = TMP_TELEMETRYSDKLANGUAGEVALUES_WEBJS;
    TelemetrySdkLanguageValues = /* @__PURE__ */ createConstMap([
      TMP_TELEMETRYSDKLANGUAGEVALUES_CPP,
      TMP_TELEMETRYSDKLANGUAGEVALUES_DOTNET,
      TMP_TELEMETRYSDKLANGUAGEVALUES_ERLANG,
      TMP_TELEMETRYSDKLANGUAGEVALUES_GO,
      TMP_TELEMETRYSDKLANGUAGEVALUES_JAVA,
      TMP_TELEMETRYSDKLANGUAGEVALUES_NODEJS,
      TMP_TELEMETRYSDKLANGUAGEVALUES_PHP,
      TMP_TELEMETRYSDKLANGUAGEVALUES_PYTHON,
      TMP_TELEMETRYSDKLANGUAGEVALUES_RUBY,
      TMP_TELEMETRYSDKLANGUAGEVALUES_WEBJS
    ]);
  }
});

// node_modules/@opentelemetry/semantic-conventions/build/esm/resource/index.js
var init_resource = __esm({
  "node_modules/@opentelemetry/semantic-conventions/build/esm/resource/index.js"() {
    init_esm();
    init_SemanticResourceAttributes();
  }
});

// node_modules/@opentelemetry/semantic-conventions/build/esm/stable_attributes.js
var ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT, ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED, ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED, ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED, ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED, ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE, ATTR_ASPNETCORE_RATE_LIMITING_POLICY, ATTR_ASPNETCORE_RATE_LIMITING_RESULT, ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED, ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER, ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER, ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED, ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED, ATTR_ASPNETCORE_ROUTING_IS_FALLBACK, ATTR_ASPNETCORE_ROUTING_MATCH_STATUS, ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE, ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS, ATTR_CLIENT_ADDRESS, ATTR_CLIENT_PORT, ATTR_CODE_COLUMN_NUMBER, ATTR_CODE_FILE_PATH, ATTR_CODE_FUNCTION_NAME, ATTR_CODE_LINE_NUMBER, ATTR_CODE_STACKTRACE, ATTR_DB_COLLECTION_NAME, ATTR_DB_NAMESPACE, ATTR_DB_OPERATION_BATCH_SIZE, ATTR_DB_OPERATION_NAME, ATTR_DB_QUERY_SUMMARY, ATTR_DB_QUERY_TEXT, ATTR_DB_RESPONSE_STATUS_CODE, ATTR_DB_STORED_PROCEDURE_NAME, ATTR_DB_SYSTEM_NAME, DB_SYSTEM_NAME_VALUE_MARIADB, DB_SYSTEM_NAME_VALUE_MICROSOFT_SQL_SERVER, DB_SYSTEM_NAME_VALUE_MYSQL, DB_SYSTEM_NAME_VALUE_POSTGRESQL, ATTR_DOTNET_GC_HEAP_GENERATION, DOTNET_GC_HEAP_GENERATION_VALUE_GEN0, DOTNET_GC_HEAP_GENERATION_VALUE_GEN1, DOTNET_GC_HEAP_GENERATION_VALUE_GEN2, DOTNET_GC_HEAP_GENERATION_VALUE_LOH, DOTNET_GC_HEAP_GENERATION_VALUE_POH, ATTR_ERROR_TYPE, ERROR_TYPE_VALUE_OTHER, ATTR_EXCEPTION_ESCAPED, ATTR_EXCEPTION_MESSAGE, ATTR_EXCEPTION_STACKTRACE, ATTR_EXCEPTION_TYPE, ATTR_HTTP_REQUEST_HEADER, ATTR_HTTP_REQUEST_METHOD, HTTP_REQUEST_METHOD_VALUE_OTHER, HTTP_REQUEST_METHOD_VALUE_CONNECT, HTTP_REQUEST_METHOD_VALUE_DELETE, HTTP_REQUEST_METHOD_VALUE_GET, HTTP_REQUEST_METHOD_VALUE_HEAD, HTTP_REQUEST_METHOD_VALUE_OPTIONS, HTTP_REQUEST_METHOD_VALUE_PATCH, HTTP_REQUEST_METHOD_VALUE_POST, HTTP_REQUEST_METHOD_VALUE_PUT, HTTP_REQUEST_METHOD_VALUE_TRACE, ATTR_HTTP_REQUEST_METHOD_ORIGINAL, ATTR_HTTP_REQUEST_RESEND_COUNT, ATTR_HTTP_RESPONSE_HEADER, ATTR_HTTP_RESPONSE_STATUS_CODE, ATTR_HTTP_ROUTE, ATTR_JVM_GC_ACTION, ATTR_JVM_GC_NAME, ATTR_JVM_MEMORY_POOL_NAME, ATTR_JVM_MEMORY_TYPE, JVM_MEMORY_TYPE_VALUE_HEAP, JVM_MEMORY_TYPE_VALUE_NON_HEAP, ATTR_JVM_THREAD_DAEMON, ATTR_JVM_THREAD_STATE, JVM_THREAD_STATE_VALUE_BLOCKED, JVM_THREAD_STATE_VALUE_NEW, JVM_THREAD_STATE_VALUE_RUNNABLE, JVM_THREAD_STATE_VALUE_TERMINATED, JVM_THREAD_STATE_VALUE_TIMED_WAITING, JVM_THREAD_STATE_VALUE_WAITING, ATTR_NETWORK_LOCAL_ADDRESS, ATTR_NETWORK_LOCAL_PORT, ATTR_NETWORK_PEER_ADDRESS, ATTR_NETWORK_PEER_PORT, ATTR_NETWORK_PROTOCOL_NAME, ATTR_NETWORK_PROTOCOL_VERSION, ATTR_NETWORK_TRANSPORT, NETWORK_TRANSPORT_VALUE_PIPE, NETWORK_TRANSPORT_VALUE_QUIC, NETWORK_TRANSPORT_VALUE_TCP, NETWORK_TRANSPORT_VALUE_UDP, NETWORK_TRANSPORT_VALUE_UNIX, ATTR_NETWORK_TYPE, NETWORK_TYPE_VALUE_IPV4, NETWORK_TYPE_VALUE_IPV6, ATTR_OTEL_SCOPE_NAME, ATTR_OTEL_SCOPE_VERSION, ATTR_OTEL_STATUS_CODE, OTEL_STATUS_CODE_VALUE_ERROR, OTEL_STATUS_CODE_VALUE_OK, ATTR_OTEL_STATUS_DESCRIPTION, ATTR_SERVER_ADDRESS, ATTR_SERVER_PORT, ATTR_SERVICE_NAME, ATTR_SERVICE_VERSION, ATTR_SIGNALR_CONNECTION_STATUS, SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN, SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE, SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT, ATTR_SIGNALR_TRANSPORT, SIGNALR_TRANSPORT_VALUE_LONG_POLLING, SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS, SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS, ATTR_TELEMETRY_SDK_LANGUAGE, TELEMETRY_SDK_LANGUAGE_VALUE_CPP, TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET, TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG, TELEMETRY_SDK_LANGUAGE_VALUE_GO, TELEMETRY_SDK_LANGUAGE_VALUE_JAVA, TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS, TELEMETRY_SDK_LANGUAGE_VALUE_PHP, TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON, TELEMETRY_SDK_LANGUAGE_VALUE_RUBY, TELEMETRY_SDK_LANGUAGE_VALUE_RUST, TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT, TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS, ATTR_TELEMETRY_SDK_NAME, ATTR_TELEMETRY_SDK_VERSION, ATTR_URL_FRAGMENT, ATTR_URL_FULL, ATTR_URL_PATH, ATTR_URL_QUERY, ATTR_URL_SCHEME, ATTR_USER_AGENT_ORIGINAL;
var init_stable_attributes = __esm({
  "node_modules/@opentelemetry/semantic-conventions/build/esm/stable_attributes.js"() {
    init_esm();
    ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT = "aspnetcore.diagnostics.exception.result";
    ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED = "aborted";
    ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED = "handled";
    ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED = "skipped";
    ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED = "unhandled";
    ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE = "aspnetcore.diagnostics.handler.type";
    ATTR_ASPNETCORE_RATE_LIMITING_POLICY = "aspnetcore.rate_limiting.policy";
    ATTR_ASPNETCORE_RATE_LIMITING_RESULT = "aspnetcore.rate_limiting.result";
    ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED = "acquired";
    ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER = "endpoint_limiter";
    ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER = "global_limiter";
    ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED = "request_canceled";
    ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED = "aspnetcore.request.is_unhandled";
    ATTR_ASPNETCORE_ROUTING_IS_FALLBACK = "aspnetcore.routing.is_fallback";
    ATTR_ASPNETCORE_ROUTING_MATCH_STATUS = "aspnetcore.routing.match_status";
    ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE = "failure";
    ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS = "success";
    ATTR_CLIENT_ADDRESS = "client.address";
    ATTR_CLIENT_PORT = "client.port";
    ATTR_CODE_COLUMN_NUMBER = "code.column.number";
    ATTR_CODE_FILE_PATH = "code.file.path";
    ATTR_CODE_FUNCTION_NAME = "code.function.name";
    ATTR_CODE_LINE_NUMBER = "code.line.number";
    ATTR_CODE_STACKTRACE = "code.stacktrace";
    ATTR_DB_COLLECTION_NAME = "db.collection.name";
    ATTR_DB_NAMESPACE = "db.namespace";
    ATTR_DB_OPERATION_BATCH_SIZE = "db.operation.batch.size";
    ATTR_DB_OPERATION_NAME = "db.operation.name";
    ATTR_DB_QUERY_SUMMARY = "db.query.summary";
    ATTR_DB_QUERY_TEXT = "db.query.text";
    ATTR_DB_RESPONSE_STATUS_CODE = "db.response.status_code";
    ATTR_DB_STORED_PROCEDURE_NAME = "db.stored_procedure.name";
    ATTR_DB_SYSTEM_NAME = "db.system.name";
    DB_SYSTEM_NAME_VALUE_MARIADB = "mariadb";
    DB_SYSTEM_NAME_VALUE_MICROSOFT_SQL_SERVER = "microsoft.sql_server";
    DB_SYSTEM_NAME_VALUE_MYSQL = "mysql";
    DB_SYSTEM_NAME_VALUE_POSTGRESQL = "postgresql";
    ATTR_DOTNET_GC_HEAP_GENERATION = "dotnet.gc.heap.generation";
    DOTNET_GC_HEAP_GENERATION_VALUE_GEN0 = "gen0";
    DOTNET_GC_HEAP_GENERATION_VALUE_GEN1 = "gen1";
    DOTNET_GC_HEAP_GENERATION_VALUE_GEN2 = "gen2";
    DOTNET_GC_HEAP_GENERATION_VALUE_LOH = "loh";
    DOTNET_GC_HEAP_GENERATION_VALUE_POH = "poh";
    ATTR_ERROR_TYPE = "error.type";
    ERROR_TYPE_VALUE_OTHER = "_OTHER";
    ATTR_EXCEPTION_ESCAPED = "exception.escaped";
    ATTR_EXCEPTION_MESSAGE = "exception.message";
    ATTR_EXCEPTION_STACKTRACE = "exception.stacktrace";
    ATTR_EXCEPTION_TYPE = "exception.type";
    ATTR_HTTP_REQUEST_HEADER = /* @__PURE__ */ __name((key) => `http.request.header.${key}`, "ATTR_HTTP_REQUEST_HEADER");
    ATTR_HTTP_REQUEST_METHOD = "http.request.method";
    HTTP_REQUEST_METHOD_VALUE_OTHER = "_OTHER";
    HTTP_REQUEST_METHOD_VALUE_CONNECT = "CONNECT";
    HTTP_REQUEST_METHOD_VALUE_DELETE = "DELETE";
    HTTP_REQUEST_METHOD_VALUE_GET = "GET";
    HTTP_REQUEST_METHOD_VALUE_HEAD = "HEAD";
    HTTP_REQUEST_METHOD_VALUE_OPTIONS = "OPTIONS";
    HTTP_REQUEST_METHOD_VALUE_PATCH = "PATCH";
    HTTP_REQUEST_METHOD_VALUE_POST = "POST";
    HTTP_REQUEST_METHOD_VALUE_PUT = "PUT";
    HTTP_REQUEST_METHOD_VALUE_TRACE = "TRACE";
    ATTR_HTTP_REQUEST_METHOD_ORIGINAL = "http.request.method_original";
    ATTR_HTTP_REQUEST_RESEND_COUNT = "http.request.resend_count";
    ATTR_HTTP_RESPONSE_HEADER = /* @__PURE__ */ __name((key) => `http.response.header.${key}`, "ATTR_HTTP_RESPONSE_HEADER");
    ATTR_HTTP_RESPONSE_STATUS_CODE = "http.response.status_code";
    ATTR_HTTP_ROUTE = "http.route";
    ATTR_JVM_GC_ACTION = "jvm.gc.action";
    ATTR_JVM_GC_NAME = "jvm.gc.name";
    ATTR_JVM_MEMORY_POOL_NAME = "jvm.memory.pool.name";
    ATTR_JVM_MEMORY_TYPE = "jvm.memory.type";
    JVM_MEMORY_TYPE_VALUE_HEAP = "heap";
    JVM_MEMORY_TYPE_VALUE_NON_HEAP = "non_heap";
    ATTR_JVM_THREAD_DAEMON = "jvm.thread.daemon";
    ATTR_JVM_THREAD_STATE = "jvm.thread.state";
    JVM_THREAD_STATE_VALUE_BLOCKED = "blocked";
    JVM_THREAD_STATE_VALUE_NEW = "new";
    JVM_THREAD_STATE_VALUE_RUNNABLE = "runnable";
    JVM_THREAD_STATE_VALUE_TERMINATED = "terminated";
    JVM_THREAD_STATE_VALUE_TIMED_WAITING = "timed_waiting";
    JVM_THREAD_STATE_VALUE_WAITING = "waiting";
    ATTR_NETWORK_LOCAL_ADDRESS = "network.local.address";
    ATTR_NETWORK_LOCAL_PORT = "network.local.port";
    ATTR_NETWORK_PEER_ADDRESS = "network.peer.address";
    ATTR_NETWORK_PEER_PORT = "network.peer.port";
    ATTR_NETWORK_PROTOCOL_NAME = "network.protocol.name";
    ATTR_NETWORK_PROTOCOL_VERSION = "network.protocol.version";
    ATTR_NETWORK_TRANSPORT = "network.transport";
    NETWORK_TRANSPORT_VALUE_PIPE = "pipe";
    NETWORK_TRANSPORT_VALUE_QUIC = "quic";
    NETWORK_TRANSPORT_VALUE_TCP = "tcp";
    NETWORK_TRANSPORT_VALUE_UDP = "udp";
    NETWORK_TRANSPORT_VALUE_UNIX = "unix";
    ATTR_NETWORK_TYPE = "network.type";
    NETWORK_TYPE_VALUE_IPV4 = "ipv4";
    NETWORK_TYPE_VALUE_IPV6 = "ipv6";
    ATTR_OTEL_SCOPE_NAME = "otel.scope.name";
    ATTR_OTEL_SCOPE_VERSION = "otel.scope.version";
    ATTR_OTEL_STATUS_CODE = "otel.status_code";
    OTEL_STATUS_CODE_VALUE_ERROR = "ERROR";
    OTEL_STATUS_CODE_VALUE_OK = "OK";
    ATTR_OTEL_STATUS_DESCRIPTION = "otel.status_description";
    ATTR_SERVER_ADDRESS = "server.address";
    ATTR_SERVER_PORT = "server.port";
    ATTR_SERVICE_NAME = "service.name";
    ATTR_SERVICE_VERSION = "service.version";
    ATTR_SIGNALR_CONNECTION_STATUS = "signalr.connection.status";
    SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN = "app_shutdown";
    SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE = "normal_closure";
    SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT = "timeout";
    ATTR_SIGNALR_TRANSPORT = "signalr.transport";
    SIGNALR_TRANSPORT_VALUE_LONG_POLLING = "long_polling";
    SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS = "server_sent_events";
    SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS = "web_sockets";
    ATTR_TELEMETRY_SDK_LANGUAGE = "telemetry.sdk.language";
    TELEMETRY_SDK_LANGUAGE_VALUE_CPP = "cpp";
    TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET = "dotnet";
    TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG = "erlang";
    TELEMETRY_SDK_LANGUAGE_VALUE_GO = "go";
    TELEMETRY_SDK_LANGUAGE_VALUE_JAVA = "java";
    TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS = "nodejs";
    TELEMETRY_SDK_LANGUAGE_VALUE_PHP = "php";
    TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON = "python";
    TELEMETRY_SDK_LANGUAGE_VALUE_RUBY = "ruby";
    TELEMETRY_SDK_LANGUAGE_VALUE_RUST = "rust";
    TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT = "swift";
    TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS = "webjs";
    ATTR_TELEMETRY_SDK_NAME = "telemetry.sdk.name";
    ATTR_TELEMETRY_SDK_VERSION = "telemetry.sdk.version";
    ATTR_URL_FRAGMENT = "url.fragment";
    ATTR_URL_FULL = "url.full";
    ATTR_URL_PATH = "url.path";
    ATTR_URL_QUERY = "url.query";
    ATTR_URL_SCHEME = "url.scheme";
    ATTR_USER_AGENT_ORIGINAL = "user_agent.original";
  }
});

// node_modules/@opentelemetry/semantic-conventions/build/esm/stable_metrics.js
var METRIC_ASPNETCORE_DIAGNOSTICS_EXCEPTIONS, METRIC_ASPNETCORE_RATE_LIMITING_ACTIVE_REQUEST_LEASES, METRIC_ASPNETCORE_RATE_LIMITING_QUEUED_REQUESTS, METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_TIME_IN_QUEUE, METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_LEASE_DURATION, METRIC_ASPNETCORE_RATE_LIMITING_REQUESTS, METRIC_ASPNETCORE_ROUTING_MATCH_ATTEMPTS, METRIC_DB_CLIENT_OPERATION_DURATION, METRIC_DOTNET_ASSEMBLY_COUNT, METRIC_DOTNET_EXCEPTIONS, METRIC_DOTNET_GC_COLLECTIONS, METRIC_DOTNET_GC_HEAP_TOTAL_ALLOCATED, METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_FRAGMENTATION_SIZE, METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_SIZE, METRIC_DOTNET_GC_LAST_COLLECTION_MEMORY_COMMITTED_SIZE, METRIC_DOTNET_GC_PAUSE_TIME, METRIC_DOTNET_JIT_COMPILATION_TIME, METRIC_DOTNET_JIT_COMPILED_IL_SIZE, METRIC_DOTNET_JIT_COMPILED_METHODS, METRIC_DOTNET_MONITOR_LOCK_CONTENTIONS, METRIC_DOTNET_PROCESS_CPU_COUNT, METRIC_DOTNET_PROCESS_CPU_TIME, METRIC_DOTNET_PROCESS_MEMORY_WORKING_SET, METRIC_DOTNET_THREAD_POOL_QUEUE_LENGTH, METRIC_DOTNET_THREAD_POOL_THREAD_COUNT, METRIC_DOTNET_THREAD_POOL_WORK_ITEM_COUNT, METRIC_DOTNET_TIMER_COUNT, METRIC_HTTP_CLIENT_REQUEST_DURATION, METRIC_HTTP_SERVER_REQUEST_DURATION, METRIC_JVM_CLASS_COUNT, METRIC_JVM_CLASS_LOADED, METRIC_JVM_CLASS_UNLOADED, METRIC_JVM_CPU_COUNT, METRIC_JVM_CPU_RECENT_UTILIZATION, METRIC_JVM_CPU_TIME, METRIC_JVM_GC_DURATION, METRIC_JVM_MEMORY_COMMITTED, METRIC_JVM_MEMORY_LIMIT, METRIC_JVM_MEMORY_USED, METRIC_JVM_MEMORY_USED_AFTER_LAST_GC, METRIC_JVM_THREAD_COUNT, METRIC_KESTREL_ACTIVE_CONNECTIONS, METRIC_KESTREL_ACTIVE_TLS_HANDSHAKES, METRIC_KESTREL_CONNECTION_DURATION, METRIC_KESTREL_QUEUED_CONNECTIONS, METRIC_KESTREL_QUEUED_REQUESTS, METRIC_KESTREL_REJECTED_CONNECTIONS, METRIC_KESTREL_TLS_HANDSHAKE_DURATION, METRIC_KESTREL_UPGRADED_CONNECTIONS, METRIC_SIGNALR_SERVER_ACTIVE_CONNECTIONS, METRIC_SIGNALR_SERVER_CONNECTION_DURATION;
var init_stable_metrics = __esm({
  "node_modules/@opentelemetry/semantic-conventions/build/esm/stable_metrics.js"() {
    init_esm();
    METRIC_ASPNETCORE_DIAGNOSTICS_EXCEPTIONS = "aspnetcore.diagnostics.exceptions";
    METRIC_ASPNETCORE_RATE_LIMITING_ACTIVE_REQUEST_LEASES = "aspnetcore.rate_limiting.active_request_leases";
    METRIC_ASPNETCORE_RATE_LIMITING_QUEUED_REQUESTS = "aspnetcore.rate_limiting.queued_requests";
    METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_TIME_IN_QUEUE = "aspnetcore.rate_limiting.request.time_in_queue";
    METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_LEASE_DURATION = "aspnetcore.rate_limiting.request_lease.duration";
    METRIC_ASPNETCORE_RATE_LIMITING_REQUESTS = "aspnetcore.rate_limiting.requests";
    METRIC_ASPNETCORE_ROUTING_MATCH_ATTEMPTS = "aspnetcore.routing.match_attempts";
    METRIC_DB_CLIENT_OPERATION_DURATION = "db.client.operation.duration";
    METRIC_DOTNET_ASSEMBLY_COUNT = "dotnet.assembly.count";
    METRIC_DOTNET_EXCEPTIONS = "dotnet.exceptions";
    METRIC_DOTNET_GC_COLLECTIONS = "dotnet.gc.collections";
    METRIC_DOTNET_GC_HEAP_TOTAL_ALLOCATED = "dotnet.gc.heap.total_allocated";
    METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_FRAGMENTATION_SIZE = "dotnet.gc.last_collection.heap.fragmentation.size";
    METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_SIZE = "dotnet.gc.last_collection.heap.size";
    METRIC_DOTNET_GC_LAST_COLLECTION_MEMORY_COMMITTED_SIZE = "dotnet.gc.last_collection.memory.committed_size";
    METRIC_DOTNET_GC_PAUSE_TIME = "dotnet.gc.pause.time";
    METRIC_DOTNET_JIT_COMPILATION_TIME = "dotnet.jit.compilation.time";
    METRIC_DOTNET_JIT_COMPILED_IL_SIZE = "dotnet.jit.compiled_il.size";
    METRIC_DOTNET_JIT_COMPILED_METHODS = "dotnet.jit.compiled_methods";
    METRIC_DOTNET_MONITOR_LOCK_CONTENTIONS = "dotnet.monitor.lock_contentions";
    METRIC_DOTNET_PROCESS_CPU_COUNT = "dotnet.process.cpu.count";
    METRIC_DOTNET_PROCESS_CPU_TIME = "dotnet.process.cpu.time";
    METRIC_DOTNET_PROCESS_MEMORY_WORKING_SET = "dotnet.process.memory.working_set";
    METRIC_DOTNET_THREAD_POOL_QUEUE_LENGTH = "dotnet.thread_pool.queue.length";
    METRIC_DOTNET_THREAD_POOL_THREAD_COUNT = "dotnet.thread_pool.thread.count";
    METRIC_DOTNET_THREAD_POOL_WORK_ITEM_COUNT = "dotnet.thread_pool.work_item.count";
    METRIC_DOTNET_TIMER_COUNT = "dotnet.timer.count";
    METRIC_HTTP_CLIENT_REQUEST_DURATION = "http.client.request.duration";
    METRIC_HTTP_SERVER_REQUEST_DURATION = "http.server.request.duration";
    METRIC_JVM_CLASS_COUNT = "jvm.class.count";
    METRIC_JVM_CLASS_LOADED = "jvm.class.loaded";
    METRIC_JVM_CLASS_UNLOADED = "jvm.class.unloaded";
    METRIC_JVM_CPU_COUNT = "jvm.cpu.count";
    METRIC_JVM_CPU_RECENT_UTILIZATION = "jvm.cpu.recent_utilization";
    METRIC_JVM_CPU_TIME = "jvm.cpu.time";
    METRIC_JVM_GC_DURATION = "jvm.gc.duration";
    METRIC_JVM_MEMORY_COMMITTED = "jvm.memory.committed";
    METRIC_JVM_MEMORY_LIMIT = "jvm.memory.limit";
    METRIC_JVM_MEMORY_USED = "jvm.memory.used";
    METRIC_JVM_MEMORY_USED_AFTER_LAST_GC = "jvm.memory.used_after_last_gc";
    METRIC_JVM_THREAD_COUNT = "jvm.thread.count";
    METRIC_KESTREL_ACTIVE_CONNECTIONS = "kestrel.active_connections";
    METRIC_KESTREL_ACTIVE_TLS_HANDSHAKES = "kestrel.active_tls_handshakes";
    METRIC_KESTREL_CONNECTION_DURATION = "kestrel.connection.duration";
    METRIC_KESTREL_QUEUED_CONNECTIONS = "kestrel.queued_connections";
    METRIC_KESTREL_QUEUED_REQUESTS = "kestrel.queued_requests";
    METRIC_KESTREL_REJECTED_CONNECTIONS = "kestrel.rejected_connections";
    METRIC_KESTREL_TLS_HANDSHAKE_DURATION = "kestrel.tls_handshake.duration";
    METRIC_KESTREL_UPGRADED_CONNECTIONS = "kestrel.upgraded_connections";
    METRIC_SIGNALR_SERVER_ACTIVE_CONNECTIONS = "signalr.server.active_connections";
    METRIC_SIGNALR_SERVER_CONNECTION_DURATION = "signalr.server.connection.duration";
  }
});

// node_modules/@opentelemetry/semantic-conventions/build/esm/index.js
var esm_exports2 = {};
__export(esm_exports2, {
  ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED: () => ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_ABORTED,
  ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED: () => ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_HANDLED,
  ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED: () => ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_SKIPPED,
  ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED: () => ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT_VALUE_UNHANDLED,
  ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED: () => ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ACQUIRED,
  ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER: () => ASPNETCORE_RATE_LIMITING_RESULT_VALUE_ENDPOINT_LIMITER,
  ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER: () => ASPNETCORE_RATE_LIMITING_RESULT_VALUE_GLOBAL_LIMITER,
  ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED: () => ASPNETCORE_RATE_LIMITING_RESULT_VALUE_REQUEST_CANCELED,
  ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE: () => ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_FAILURE,
  ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS: () => ASPNETCORE_ROUTING_MATCH_STATUS_VALUE_SUCCESS,
  ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT: () => ATTR_ASPNETCORE_DIAGNOSTICS_EXCEPTION_RESULT,
  ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE: () => ATTR_ASPNETCORE_DIAGNOSTICS_HANDLER_TYPE,
  ATTR_ASPNETCORE_RATE_LIMITING_POLICY: () => ATTR_ASPNETCORE_RATE_LIMITING_POLICY,
  ATTR_ASPNETCORE_RATE_LIMITING_RESULT: () => ATTR_ASPNETCORE_RATE_LIMITING_RESULT,
  ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED: () => ATTR_ASPNETCORE_REQUEST_IS_UNHANDLED,
  ATTR_ASPNETCORE_ROUTING_IS_FALLBACK: () => ATTR_ASPNETCORE_ROUTING_IS_FALLBACK,
  ATTR_ASPNETCORE_ROUTING_MATCH_STATUS: () => ATTR_ASPNETCORE_ROUTING_MATCH_STATUS,
  ATTR_CLIENT_ADDRESS: () => ATTR_CLIENT_ADDRESS,
  ATTR_CLIENT_PORT: () => ATTR_CLIENT_PORT,
  ATTR_CODE_COLUMN_NUMBER: () => ATTR_CODE_COLUMN_NUMBER,
  ATTR_CODE_FILE_PATH: () => ATTR_CODE_FILE_PATH,
  ATTR_CODE_FUNCTION_NAME: () => ATTR_CODE_FUNCTION_NAME,
  ATTR_CODE_LINE_NUMBER: () => ATTR_CODE_LINE_NUMBER,
  ATTR_CODE_STACKTRACE: () => ATTR_CODE_STACKTRACE,
  ATTR_DB_COLLECTION_NAME: () => ATTR_DB_COLLECTION_NAME,
  ATTR_DB_NAMESPACE: () => ATTR_DB_NAMESPACE,
  ATTR_DB_OPERATION_BATCH_SIZE: () => ATTR_DB_OPERATION_BATCH_SIZE,
  ATTR_DB_OPERATION_NAME: () => ATTR_DB_OPERATION_NAME,
  ATTR_DB_QUERY_SUMMARY: () => ATTR_DB_QUERY_SUMMARY,
  ATTR_DB_QUERY_TEXT: () => ATTR_DB_QUERY_TEXT,
  ATTR_DB_RESPONSE_STATUS_CODE: () => ATTR_DB_RESPONSE_STATUS_CODE,
  ATTR_DB_STORED_PROCEDURE_NAME: () => ATTR_DB_STORED_PROCEDURE_NAME,
  ATTR_DB_SYSTEM_NAME: () => ATTR_DB_SYSTEM_NAME,
  ATTR_DOTNET_GC_HEAP_GENERATION: () => ATTR_DOTNET_GC_HEAP_GENERATION,
  ATTR_ERROR_TYPE: () => ATTR_ERROR_TYPE,
  ATTR_EXCEPTION_ESCAPED: () => ATTR_EXCEPTION_ESCAPED,
  ATTR_EXCEPTION_MESSAGE: () => ATTR_EXCEPTION_MESSAGE,
  ATTR_EXCEPTION_STACKTRACE: () => ATTR_EXCEPTION_STACKTRACE,
  ATTR_EXCEPTION_TYPE: () => ATTR_EXCEPTION_TYPE,
  ATTR_HTTP_REQUEST_HEADER: () => ATTR_HTTP_REQUEST_HEADER,
  ATTR_HTTP_REQUEST_METHOD: () => ATTR_HTTP_REQUEST_METHOD,
  ATTR_HTTP_REQUEST_METHOD_ORIGINAL: () => ATTR_HTTP_REQUEST_METHOD_ORIGINAL,
  ATTR_HTTP_REQUEST_RESEND_COUNT: () => ATTR_HTTP_REQUEST_RESEND_COUNT,
  ATTR_HTTP_RESPONSE_HEADER: () => ATTR_HTTP_RESPONSE_HEADER,
  ATTR_HTTP_RESPONSE_STATUS_CODE: () => ATTR_HTTP_RESPONSE_STATUS_CODE,
  ATTR_HTTP_ROUTE: () => ATTR_HTTP_ROUTE,
  ATTR_JVM_GC_ACTION: () => ATTR_JVM_GC_ACTION,
  ATTR_JVM_GC_NAME: () => ATTR_JVM_GC_NAME,
  ATTR_JVM_MEMORY_POOL_NAME: () => ATTR_JVM_MEMORY_POOL_NAME,
  ATTR_JVM_MEMORY_TYPE: () => ATTR_JVM_MEMORY_TYPE,
  ATTR_JVM_THREAD_DAEMON: () => ATTR_JVM_THREAD_DAEMON,
  ATTR_JVM_THREAD_STATE: () => ATTR_JVM_THREAD_STATE,
  ATTR_NETWORK_LOCAL_ADDRESS: () => ATTR_NETWORK_LOCAL_ADDRESS,
  ATTR_NETWORK_LOCAL_PORT: () => ATTR_NETWORK_LOCAL_PORT,
  ATTR_NETWORK_PEER_ADDRESS: () => ATTR_NETWORK_PEER_ADDRESS,
  ATTR_NETWORK_PEER_PORT: () => ATTR_NETWORK_PEER_PORT,
  ATTR_NETWORK_PROTOCOL_NAME: () => ATTR_NETWORK_PROTOCOL_NAME,
  ATTR_NETWORK_PROTOCOL_VERSION: () => ATTR_NETWORK_PROTOCOL_VERSION,
  ATTR_NETWORK_TRANSPORT: () => ATTR_NETWORK_TRANSPORT,
  ATTR_NETWORK_TYPE: () => ATTR_NETWORK_TYPE,
  ATTR_OTEL_SCOPE_NAME: () => ATTR_OTEL_SCOPE_NAME,
  ATTR_OTEL_SCOPE_VERSION: () => ATTR_OTEL_SCOPE_VERSION,
  ATTR_OTEL_STATUS_CODE: () => ATTR_OTEL_STATUS_CODE,
  ATTR_OTEL_STATUS_DESCRIPTION: () => ATTR_OTEL_STATUS_DESCRIPTION,
  ATTR_SERVER_ADDRESS: () => ATTR_SERVER_ADDRESS,
  ATTR_SERVER_PORT: () => ATTR_SERVER_PORT,
  ATTR_SERVICE_NAME: () => ATTR_SERVICE_NAME,
  ATTR_SERVICE_VERSION: () => ATTR_SERVICE_VERSION,
  ATTR_SIGNALR_CONNECTION_STATUS: () => ATTR_SIGNALR_CONNECTION_STATUS,
  ATTR_SIGNALR_TRANSPORT: () => ATTR_SIGNALR_TRANSPORT,
  ATTR_TELEMETRY_SDK_LANGUAGE: () => ATTR_TELEMETRY_SDK_LANGUAGE,
  ATTR_TELEMETRY_SDK_NAME: () => ATTR_TELEMETRY_SDK_NAME,
  ATTR_TELEMETRY_SDK_VERSION: () => ATTR_TELEMETRY_SDK_VERSION,
  ATTR_URL_FRAGMENT: () => ATTR_URL_FRAGMENT,
  ATTR_URL_FULL: () => ATTR_URL_FULL,
  ATTR_URL_PATH: () => ATTR_URL_PATH,
  ATTR_URL_QUERY: () => ATTR_URL_QUERY,
  ATTR_URL_SCHEME: () => ATTR_URL_SCHEME,
  ATTR_USER_AGENT_ORIGINAL: () => ATTR_USER_AGENT_ORIGINAL,
  AWSECSLAUNCHTYPEVALUES_EC2: () => AWSECSLAUNCHTYPEVALUES_EC2,
  AWSECSLAUNCHTYPEVALUES_FARGATE: () => AWSECSLAUNCHTYPEVALUES_FARGATE,
  AwsEcsLaunchtypeValues: () => AwsEcsLaunchtypeValues,
  CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS: () => CLOUDPLATFORMVALUES_ALIBABA_CLOUD_ECS,
  CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC: () => CLOUDPLATFORMVALUES_ALIBABA_CLOUD_FC,
  CLOUDPLATFORMVALUES_AWS_EC2: () => CLOUDPLATFORMVALUES_AWS_EC2,
  CLOUDPLATFORMVALUES_AWS_ECS: () => CLOUDPLATFORMVALUES_AWS_ECS,
  CLOUDPLATFORMVALUES_AWS_EKS: () => CLOUDPLATFORMVALUES_AWS_EKS,
  CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK: () => CLOUDPLATFORMVALUES_AWS_ELASTIC_BEANSTALK,
  CLOUDPLATFORMVALUES_AWS_LAMBDA: () => CLOUDPLATFORMVALUES_AWS_LAMBDA,
  CLOUDPLATFORMVALUES_AZURE_AKS: () => CLOUDPLATFORMVALUES_AZURE_AKS,
  CLOUDPLATFORMVALUES_AZURE_APP_SERVICE: () => CLOUDPLATFORMVALUES_AZURE_APP_SERVICE,
  CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES: () => CLOUDPLATFORMVALUES_AZURE_CONTAINER_INSTANCES,
  CLOUDPLATFORMVALUES_AZURE_FUNCTIONS: () => CLOUDPLATFORMVALUES_AZURE_FUNCTIONS,
  CLOUDPLATFORMVALUES_AZURE_VM: () => CLOUDPLATFORMVALUES_AZURE_VM,
  CLOUDPLATFORMVALUES_GCP_APP_ENGINE: () => CLOUDPLATFORMVALUES_GCP_APP_ENGINE,
  CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS: () => CLOUDPLATFORMVALUES_GCP_CLOUD_FUNCTIONS,
  CLOUDPLATFORMVALUES_GCP_CLOUD_RUN: () => CLOUDPLATFORMVALUES_GCP_CLOUD_RUN,
  CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE: () => CLOUDPLATFORMVALUES_GCP_COMPUTE_ENGINE,
  CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE: () => CLOUDPLATFORMVALUES_GCP_KUBERNETES_ENGINE,
  CLOUDPROVIDERVALUES_ALIBABA_CLOUD: () => CLOUDPROVIDERVALUES_ALIBABA_CLOUD,
  CLOUDPROVIDERVALUES_AWS: () => CLOUDPROVIDERVALUES_AWS,
  CLOUDPROVIDERVALUES_AZURE: () => CLOUDPROVIDERVALUES_AZURE,
  CLOUDPROVIDERVALUES_GCP: () => CLOUDPROVIDERVALUES_GCP,
  CloudPlatformValues: () => CloudPlatformValues,
  CloudProviderValues: () => CloudProviderValues,
  DBCASSANDRACONSISTENCYLEVELVALUES_ALL: () => DBCASSANDRACONSISTENCYLEVELVALUES_ALL,
  DBCASSANDRACONSISTENCYLEVELVALUES_ANY: () => DBCASSANDRACONSISTENCYLEVELVALUES_ANY,
  DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM: () => DBCASSANDRACONSISTENCYLEVELVALUES_EACH_QUORUM,
  DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE: () => DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_ONE,
  DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM: () => DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_QUORUM,
  DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL: () => DBCASSANDRACONSISTENCYLEVELVALUES_LOCAL_SERIAL,
  DBCASSANDRACONSISTENCYLEVELVALUES_ONE: () => DBCASSANDRACONSISTENCYLEVELVALUES_ONE,
  DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM: () => DBCASSANDRACONSISTENCYLEVELVALUES_QUORUM,
  DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL: () => DBCASSANDRACONSISTENCYLEVELVALUES_SERIAL,
  DBCASSANDRACONSISTENCYLEVELVALUES_THREE: () => DBCASSANDRACONSISTENCYLEVELVALUES_THREE,
  DBCASSANDRACONSISTENCYLEVELVALUES_TWO: () => DBCASSANDRACONSISTENCYLEVELVALUES_TWO,
  DBSYSTEMVALUES_ADABAS: () => DBSYSTEMVALUES_ADABAS,
  DBSYSTEMVALUES_CACHE: () => DBSYSTEMVALUES_CACHE,
  DBSYSTEMVALUES_CASSANDRA: () => DBSYSTEMVALUES_CASSANDRA,
  DBSYSTEMVALUES_CLOUDSCAPE: () => DBSYSTEMVALUES_CLOUDSCAPE,
  DBSYSTEMVALUES_COCKROACHDB: () => DBSYSTEMVALUES_COCKROACHDB,
  DBSYSTEMVALUES_COLDFUSION: () => DBSYSTEMVALUES_COLDFUSION,
  DBSYSTEMVALUES_COSMOSDB: () => DBSYSTEMVALUES_COSMOSDB,
  DBSYSTEMVALUES_COUCHBASE: () => DBSYSTEMVALUES_COUCHBASE,
  DBSYSTEMVALUES_COUCHDB: () => DBSYSTEMVALUES_COUCHDB,
  DBSYSTEMVALUES_DB2: () => DBSYSTEMVALUES_DB2,
  DBSYSTEMVALUES_DERBY: () => DBSYSTEMVALUES_DERBY,
  DBSYSTEMVALUES_DYNAMODB: () => DBSYSTEMVALUES_DYNAMODB,
  DBSYSTEMVALUES_EDB: () => DBSYSTEMVALUES_EDB,
  DBSYSTEMVALUES_ELASTICSEARCH: () => DBSYSTEMVALUES_ELASTICSEARCH,
  DBSYSTEMVALUES_FILEMAKER: () => DBSYSTEMVALUES_FILEMAKER,
  DBSYSTEMVALUES_FIREBIRD: () => DBSYSTEMVALUES_FIREBIRD,
  DBSYSTEMVALUES_FIRSTSQL: () => DBSYSTEMVALUES_FIRSTSQL,
  DBSYSTEMVALUES_GEODE: () => DBSYSTEMVALUES_GEODE,
  DBSYSTEMVALUES_H2: () => DBSYSTEMVALUES_H2,
  DBSYSTEMVALUES_HANADB: () => DBSYSTEMVALUES_HANADB,
  DBSYSTEMVALUES_HBASE: () => DBSYSTEMVALUES_HBASE,
  DBSYSTEMVALUES_HIVE: () => DBSYSTEMVALUES_HIVE,
  DBSYSTEMVALUES_HSQLDB: () => DBSYSTEMVALUES_HSQLDB,
  DBSYSTEMVALUES_INFORMIX: () => DBSYSTEMVALUES_INFORMIX,
  DBSYSTEMVALUES_INGRES: () => DBSYSTEMVALUES_INGRES,
  DBSYSTEMVALUES_INSTANTDB: () => DBSYSTEMVALUES_INSTANTDB,
  DBSYSTEMVALUES_INTERBASE: () => DBSYSTEMVALUES_INTERBASE,
  DBSYSTEMVALUES_MARIADB: () => DBSYSTEMVALUES_MARIADB,
  DBSYSTEMVALUES_MAXDB: () => DBSYSTEMVALUES_MAXDB,
  DBSYSTEMVALUES_MEMCACHED: () => DBSYSTEMVALUES_MEMCACHED,
  DBSYSTEMVALUES_MONGODB: () => DBSYSTEMVALUES_MONGODB,
  DBSYSTEMVALUES_MSSQL: () => DBSYSTEMVALUES_MSSQL,
  DBSYSTEMVALUES_MYSQL: () => DBSYSTEMVALUES_MYSQL,
  DBSYSTEMVALUES_NEO4J: () => DBSYSTEMVALUES_NEO4J,
  DBSYSTEMVALUES_NETEZZA: () => DBSYSTEMVALUES_NETEZZA,
  DBSYSTEMVALUES_ORACLE: () => DBSYSTEMVALUES_ORACLE,
  DBSYSTEMVALUES_OTHER_SQL: () => DBSYSTEMVALUES_OTHER_SQL,
  DBSYSTEMVALUES_PERVASIVE: () => DBSYSTEMVALUES_PERVASIVE,
  DBSYSTEMVALUES_POINTBASE: () => DBSYSTEMVALUES_POINTBASE,
  DBSYSTEMVALUES_POSTGRESQL: () => DBSYSTEMVALUES_POSTGRESQL,
  DBSYSTEMVALUES_PROGRESS: () => DBSYSTEMVALUES_PROGRESS,
  DBSYSTEMVALUES_REDIS: () => DBSYSTEMVALUES_REDIS,
  DBSYSTEMVALUES_REDSHIFT: () => DBSYSTEMVALUES_REDSHIFT,
  DBSYSTEMVALUES_SQLITE: () => DBSYSTEMVALUES_SQLITE,
  DBSYSTEMVALUES_SYBASE: () => DBSYSTEMVALUES_SYBASE,
  DBSYSTEMVALUES_TERADATA: () => DBSYSTEMVALUES_TERADATA,
  DBSYSTEMVALUES_VERTICA: () => DBSYSTEMVALUES_VERTICA,
  DB_SYSTEM_NAME_VALUE_MARIADB: () => DB_SYSTEM_NAME_VALUE_MARIADB,
  DB_SYSTEM_NAME_VALUE_MICROSOFT_SQL_SERVER: () => DB_SYSTEM_NAME_VALUE_MICROSOFT_SQL_SERVER,
  DB_SYSTEM_NAME_VALUE_MYSQL: () => DB_SYSTEM_NAME_VALUE_MYSQL,
  DB_SYSTEM_NAME_VALUE_POSTGRESQL: () => DB_SYSTEM_NAME_VALUE_POSTGRESQL,
  DOTNET_GC_HEAP_GENERATION_VALUE_GEN0: () => DOTNET_GC_HEAP_GENERATION_VALUE_GEN0,
  DOTNET_GC_HEAP_GENERATION_VALUE_GEN1: () => DOTNET_GC_HEAP_GENERATION_VALUE_GEN1,
  DOTNET_GC_HEAP_GENERATION_VALUE_GEN2: () => DOTNET_GC_HEAP_GENERATION_VALUE_GEN2,
  DOTNET_GC_HEAP_GENERATION_VALUE_LOH: () => DOTNET_GC_HEAP_GENERATION_VALUE_LOH,
  DOTNET_GC_HEAP_GENERATION_VALUE_POH: () => DOTNET_GC_HEAP_GENERATION_VALUE_POH,
  DbCassandraConsistencyLevelValues: () => DbCassandraConsistencyLevelValues,
  DbSystemValues: () => DbSystemValues,
  ERROR_TYPE_VALUE_OTHER: () => ERROR_TYPE_VALUE_OTHER,
  FAASDOCUMENTOPERATIONVALUES_DELETE: () => FAASDOCUMENTOPERATIONVALUES_DELETE,
  FAASDOCUMENTOPERATIONVALUES_EDIT: () => FAASDOCUMENTOPERATIONVALUES_EDIT,
  FAASDOCUMENTOPERATIONVALUES_INSERT: () => FAASDOCUMENTOPERATIONVALUES_INSERT,
  FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD: () => FAASINVOKEDPROVIDERVALUES_ALIBABA_CLOUD,
  FAASINVOKEDPROVIDERVALUES_AWS: () => FAASINVOKEDPROVIDERVALUES_AWS,
  FAASINVOKEDPROVIDERVALUES_AZURE: () => FAASINVOKEDPROVIDERVALUES_AZURE,
  FAASINVOKEDPROVIDERVALUES_GCP: () => FAASINVOKEDPROVIDERVALUES_GCP,
  FAASTRIGGERVALUES_DATASOURCE: () => FAASTRIGGERVALUES_DATASOURCE,
  FAASTRIGGERVALUES_HTTP: () => FAASTRIGGERVALUES_HTTP,
  FAASTRIGGERVALUES_OTHER: () => FAASTRIGGERVALUES_OTHER,
  FAASTRIGGERVALUES_PUBSUB: () => FAASTRIGGERVALUES_PUBSUB,
  FAASTRIGGERVALUES_TIMER: () => FAASTRIGGERVALUES_TIMER,
  FaasDocumentOperationValues: () => FaasDocumentOperationValues,
  FaasInvokedProviderValues: () => FaasInvokedProviderValues,
  FaasTriggerValues: () => FaasTriggerValues,
  HOSTARCHVALUES_AMD64: () => HOSTARCHVALUES_AMD64,
  HOSTARCHVALUES_ARM32: () => HOSTARCHVALUES_ARM32,
  HOSTARCHVALUES_ARM64: () => HOSTARCHVALUES_ARM64,
  HOSTARCHVALUES_IA64: () => HOSTARCHVALUES_IA64,
  HOSTARCHVALUES_PPC32: () => HOSTARCHVALUES_PPC32,
  HOSTARCHVALUES_PPC64: () => HOSTARCHVALUES_PPC64,
  HOSTARCHVALUES_X86: () => HOSTARCHVALUES_X86,
  HTTPFLAVORVALUES_HTTP_1_0: () => HTTPFLAVORVALUES_HTTP_1_0,
  HTTPFLAVORVALUES_HTTP_1_1: () => HTTPFLAVORVALUES_HTTP_1_1,
  HTTPFLAVORVALUES_HTTP_2_0: () => HTTPFLAVORVALUES_HTTP_2_0,
  HTTPFLAVORVALUES_QUIC: () => HTTPFLAVORVALUES_QUIC,
  HTTPFLAVORVALUES_SPDY: () => HTTPFLAVORVALUES_SPDY,
  HTTP_REQUEST_METHOD_VALUE_CONNECT: () => HTTP_REQUEST_METHOD_VALUE_CONNECT,
  HTTP_REQUEST_METHOD_VALUE_DELETE: () => HTTP_REQUEST_METHOD_VALUE_DELETE,
  HTTP_REQUEST_METHOD_VALUE_GET: () => HTTP_REQUEST_METHOD_VALUE_GET,
  HTTP_REQUEST_METHOD_VALUE_HEAD: () => HTTP_REQUEST_METHOD_VALUE_HEAD,
  HTTP_REQUEST_METHOD_VALUE_OPTIONS: () => HTTP_REQUEST_METHOD_VALUE_OPTIONS,
  HTTP_REQUEST_METHOD_VALUE_OTHER: () => HTTP_REQUEST_METHOD_VALUE_OTHER,
  HTTP_REQUEST_METHOD_VALUE_PATCH: () => HTTP_REQUEST_METHOD_VALUE_PATCH,
  HTTP_REQUEST_METHOD_VALUE_POST: () => HTTP_REQUEST_METHOD_VALUE_POST,
  HTTP_REQUEST_METHOD_VALUE_PUT: () => HTTP_REQUEST_METHOD_VALUE_PUT,
  HTTP_REQUEST_METHOD_VALUE_TRACE: () => HTTP_REQUEST_METHOD_VALUE_TRACE,
  HostArchValues: () => HostArchValues,
  HttpFlavorValues: () => HttpFlavorValues,
  JVM_MEMORY_TYPE_VALUE_HEAP: () => JVM_MEMORY_TYPE_VALUE_HEAP,
  JVM_MEMORY_TYPE_VALUE_NON_HEAP: () => JVM_MEMORY_TYPE_VALUE_NON_HEAP,
  JVM_THREAD_STATE_VALUE_BLOCKED: () => JVM_THREAD_STATE_VALUE_BLOCKED,
  JVM_THREAD_STATE_VALUE_NEW: () => JVM_THREAD_STATE_VALUE_NEW,
  JVM_THREAD_STATE_VALUE_RUNNABLE: () => JVM_THREAD_STATE_VALUE_RUNNABLE,
  JVM_THREAD_STATE_VALUE_TERMINATED: () => JVM_THREAD_STATE_VALUE_TERMINATED,
  JVM_THREAD_STATE_VALUE_TIMED_WAITING: () => JVM_THREAD_STATE_VALUE_TIMED_WAITING,
  JVM_THREAD_STATE_VALUE_WAITING: () => JVM_THREAD_STATE_VALUE_WAITING,
  MESSAGETYPEVALUES_RECEIVED: () => MESSAGETYPEVALUES_RECEIVED,
  MESSAGETYPEVALUES_SENT: () => MESSAGETYPEVALUES_SENT,
  MESSAGINGDESTINATIONKINDVALUES_QUEUE: () => MESSAGINGDESTINATIONKINDVALUES_QUEUE,
  MESSAGINGDESTINATIONKINDVALUES_TOPIC: () => MESSAGINGDESTINATIONKINDVALUES_TOPIC,
  MESSAGINGOPERATIONVALUES_PROCESS: () => MESSAGINGOPERATIONVALUES_PROCESS,
  MESSAGINGOPERATIONVALUES_RECEIVE: () => MESSAGINGOPERATIONVALUES_RECEIVE,
  METRIC_ASPNETCORE_DIAGNOSTICS_EXCEPTIONS: () => METRIC_ASPNETCORE_DIAGNOSTICS_EXCEPTIONS,
  METRIC_ASPNETCORE_RATE_LIMITING_ACTIVE_REQUEST_LEASES: () => METRIC_ASPNETCORE_RATE_LIMITING_ACTIVE_REQUEST_LEASES,
  METRIC_ASPNETCORE_RATE_LIMITING_QUEUED_REQUESTS: () => METRIC_ASPNETCORE_RATE_LIMITING_QUEUED_REQUESTS,
  METRIC_ASPNETCORE_RATE_LIMITING_REQUESTS: () => METRIC_ASPNETCORE_RATE_LIMITING_REQUESTS,
  METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_LEASE_DURATION: () => METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_LEASE_DURATION,
  METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_TIME_IN_QUEUE: () => METRIC_ASPNETCORE_RATE_LIMITING_REQUEST_TIME_IN_QUEUE,
  METRIC_ASPNETCORE_ROUTING_MATCH_ATTEMPTS: () => METRIC_ASPNETCORE_ROUTING_MATCH_ATTEMPTS,
  METRIC_DB_CLIENT_OPERATION_DURATION: () => METRIC_DB_CLIENT_OPERATION_DURATION,
  METRIC_DOTNET_ASSEMBLY_COUNT: () => METRIC_DOTNET_ASSEMBLY_COUNT,
  METRIC_DOTNET_EXCEPTIONS: () => METRIC_DOTNET_EXCEPTIONS,
  METRIC_DOTNET_GC_COLLECTIONS: () => METRIC_DOTNET_GC_COLLECTIONS,
  METRIC_DOTNET_GC_HEAP_TOTAL_ALLOCATED: () => METRIC_DOTNET_GC_HEAP_TOTAL_ALLOCATED,
  METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_FRAGMENTATION_SIZE: () => METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_FRAGMENTATION_SIZE,
  METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_SIZE: () => METRIC_DOTNET_GC_LAST_COLLECTION_HEAP_SIZE,
  METRIC_DOTNET_GC_LAST_COLLECTION_MEMORY_COMMITTED_SIZE: () => METRIC_DOTNET_GC_LAST_COLLECTION_MEMORY_COMMITTED_SIZE,
  METRIC_DOTNET_GC_PAUSE_TIME: () => METRIC_DOTNET_GC_PAUSE_TIME,
  METRIC_DOTNET_JIT_COMPILATION_TIME: () => METRIC_DOTNET_JIT_COMPILATION_TIME,
  METRIC_DOTNET_JIT_COMPILED_IL_SIZE: () => METRIC_DOTNET_JIT_COMPILED_IL_SIZE,
  METRIC_DOTNET_JIT_COMPILED_METHODS: () => METRIC_DOTNET_JIT_COMPILED_METHODS,
  METRIC_DOTNET_MONITOR_LOCK_CONTENTIONS: () => METRIC_DOTNET_MONITOR_LOCK_CONTENTIONS,
  METRIC_DOTNET_PROCESS_CPU_COUNT: () => METRIC_DOTNET_PROCESS_CPU_COUNT,
  METRIC_DOTNET_PROCESS_CPU_TIME: () => METRIC_DOTNET_PROCESS_CPU_TIME,
  METRIC_DOTNET_PROCESS_MEMORY_WORKING_SET: () => METRIC_DOTNET_PROCESS_MEMORY_WORKING_SET,
  METRIC_DOTNET_THREAD_POOL_QUEUE_LENGTH: () => METRIC_DOTNET_THREAD_POOL_QUEUE_LENGTH,
  METRIC_DOTNET_THREAD_POOL_THREAD_COUNT: () => METRIC_DOTNET_THREAD_POOL_THREAD_COUNT,
  METRIC_DOTNET_THREAD_POOL_WORK_ITEM_COUNT: () => METRIC_DOTNET_THREAD_POOL_WORK_ITEM_COUNT,
  METRIC_DOTNET_TIMER_COUNT: () => METRIC_DOTNET_TIMER_COUNT,
  METRIC_HTTP_CLIENT_REQUEST_DURATION: () => METRIC_HTTP_CLIENT_REQUEST_DURATION,
  METRIC_HTTP_SERVER_REQUEST_DURATION: () => METRIC_HTTP_SERVER_REQUEST_DURATION,
  METRIC_JVM_CLASS_COUNT: () => METRIC_JVM_CLASS_COUNT,
  METRIC_JVM_CLASS_LOADED: () => METRIC_JVM_CLASS_LOADED,
  METRIC_JVM_CLASS_UNLOADED: () => METRIC_JVM_CLASS_UNLOADED,
  METRIC_JVM_CPU_COUNT: () => METRIC_JVM_CPU_COUNT,
  METRIC_JVM_CPU_RECENT_UTILIZATION: () => METRIC_JVM_CPU_RECENT_UTILIZATION,
  METRIC_JVM_CPU_TIME: () => METRIC_JVM_CPU_TIME,
  METRIC_JVM_GC_DURATION: () => METRIC_JVM_GC_DURATION,
  METRIC_JVM_MEMORY_COMMITTED: () => METRIC_JVM_MEMORY_COMMITTED,
  METRIC_JVM_MEMORY_LIMIT: () => METRIC_JVM_MEMORY_LIMIT,
  METRIC_JVM_MEMORY_USED: () => METRIC_JVM_MEMORY_USED,
  METRIC_JVM_MEMORY_USED_AFTER_LAST_GC: () => METRIC_JVM_MEMORY_USED_AFTER_LAST_GC,
  METRIC_JVM_THREAD_COUNT: () => METRIC_JVM_THREAD_COUNT,
  METRIC_KESTREL_ACTIVE_CONNECTIONS: () => METRIC_KESTREL_ACTIVE_CONNECTIONS,
  METRIC_KESTREL_ACTIVE_TLS_HANDSHAKES: () => METRIC_KESTREL_ACTIVE_TLS_HANDSHAKES,
  METRIC_KESTREL_CONNECTION_DURATION: () => METRIC_KESTREL_CONNECTION_DURATION,
  METRIC_KESTREL_QUEUED_CONNECTIONS: () => METRIC_KESTREL_QUEUED_CONNECTIONS,
  METRIC_KESTREL_QUEUED_REQUESTS: () => METRIC_KESTREL_QUEUED_REQUESTS,
  METRIC_KESTREL_REJECTED_CONNECTIONS: () => METRIC_KESTREL_REJECTED_CONNECTIONS,
  METRIC_KESTREL_TLS_HANDSHAKE_DURATION: () => METRIC_KESTREL_TLS_HANDSHAKE_DURATION,
  METRIC_KESTREL_UPGRADED_CONNECTIONS: () => METRIC_KESTREL_UPGRADED_CONNECTIONS,
  METRIC_SIGNALR_SERVER_ACTIVE_CONNECTIONS: () => METRIC_SIGNALR_SERVER_ACTIVE_CONNECTIONS,
  METRIC_SIGNALR_SERVER_CONNECTION_DURATION: () => METRIC_SIGNALR_SERVER_CONNECTION_DURATION,
  MessageTypeValues: () => MessageTypeValues,
  MessagingDestinationKindValues: () => MessagingDestinationKindValues,
  MessagingOperationValues: () => MessagingOperationValues,
  NETHOSTCONNECTIONSUBTYPEVALUES_CDMA: () => NETHOSTCONNECTIONSUBTYPEVALUES_CDMA,
  NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT: () => NETHOSTCONNECTIONSUBTYPEVALUES_CDMA2000_1XRTT,
  NETHOSTCONNECTIONSUBTYPEVALUES_EDGE: () => NETHOSTCONNECTIONSUBTYPEVALUES_EDGE,
  NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD: () => NETHOSTCONNECTIONSUBTYPEVALUES_EHRPD,
  NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0: () => NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_0,
  NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A: () => NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_A,
  NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B: () => NETHOSTCONNECTIONSUBTYPEVALUES_EVDO_B,
  NETHOSTCONNECTIONSUBTYPEVALUES_GPRS: () => NETHOSTCONNECTIONSUBTYPEVALUES_GPRS,
  NETHOSTCONNECTIONSUBTYPEVALUES_GSM: () => NETHOSTCONNECTIONSUBTYPEVALUES_GSM,
  NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA: () => NETHOSTCONNECTIONSUBTYPEVALUES_HSDPA,
  NETHOSTCONNECTIONSUBTYPEVALUES_HSPA: () => NETHOSTCONNECTIONSUBTYPEVALUES_HSPA,
  NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP: () => NETHOSTCONNECTIONSUBTYPEVALUES_HSPAP,
  NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA: () => NETHOSTCONNECTIONSUBTYPEVALUES_HSUPA,
  NETHOSTCONNECTIONSUBTYPEVALUES_IDEN: () => NETHOSTCONNECTIONSUBTYPEVALUES_IDEN,
  NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN: () => NETHOSTCONNECTIONSUBTYPEVALUES_IWLAN,
  NETHOSTCONNECTIONSUBTYPEVALUES_LTE: () => NETHOSTCONNECTIONSUBTYPEVALUES_LTE,
  NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA: () => NETHOSTCONNECTIONSUBTYPEVALUES_LTE_CA,
  NETHOSTCONNECTIONSUBTYPEVALUES_NR: () => NETHOSTCONNECTIONSUBTYPEVALUES_NR,
  NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA: () => NETHOSTCONNECTIONSUBTYPEVALUES_NRNSA,
  NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA: () => NETHOSTCONNECTIONSUBTYPEVALUES_TD_SCDMA,
  NETHOSTCONNECTIONSUBTYPEVALUES_UMTS: () => NETHOSTCONNECTIONSUBTYPEVALUES_UMTS,
  NETHOSTCONNECTIONTYPEVALUES_CELL: () => NETHOSTCONNECTIONTYPEVALUES_CELL,
  NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE: () => NETHOSTCONNECTIONTYPEVALUES_UNAVAILABLE,
  NETHOSTCONNECTIONTYPEVALUES_UNKNOWN: () => NETHOSTCONNECTIONTYPEVALUES_UNKNOWN,
  NETHOSTCONNECTIONTYPEVALUES_WIFI: () => NETHOSTCONNECTIONTYPEVALUES_WIFI,
  NETHOSTCONNECTIONTYPEVALUES_WIRED: () => NETHOSTCONNECTIONTYPEVALUES_WIRED,
  NETTRANSPORTVALUES_INPROC: () => NETTRANSPORTVALUES_INPROC,
  NETTRANSPORTVALUES_IP: () => NETTRANSPORTVALUES_IP,
  NETTRANSPORTVALUES_IP_TCP: () => NETTRANSPORTVALUES_IP_TCP,
  NETTRANSPORTVALUES_IP_UDP: () => NETTRANSPORTVALUES_IP_UDP,
  NETTRANSPORTVALUES_OTHER: () => NETTRANSPORTVALUES_OTHER,
  NETTRANSPORTVALUES_PIPE: () => NETTRANSPORTVALUES_PIPE,
  NETTRANSPORTVALUES_UNIX: () => NETTRANSPORTVALUES_UNIX,
  NETWORK_TRANSPORT_VALUE_PIPE: () => NETWORK_TRANSPORT_VALUE_PIPE,
  NETWORK_TRANSPORT_VALUE_QUIC: () => NETWORK_TRANSPORT_VALUE_QUIC,
  NETWORK_TRANSPORT_VALUE_TCP: () => NETWORK_TRANSPORT_VALUE_TCP,
  NETWORK_TRANSPORT_VALUE_UDP: () => NETWORK_TRANSPORT_VALUE_UDP,
  NETWORK_TRANSPORT_VALUE_UNIX: () => NETWORK_TRANSPORT_VALUE_UNIX,
  NETWORK_TYPE_VALUE_IPV4: () => NETWORK_TYPE_VALUE_IPV4,
  NETWORK_TYPE_VALUE_IPV6: () => NETWORK_TYPE_VALUE_IPV6,
  NetHostConnectionSubtypeValues: () => NetHostConnectionSubtypeValues,
  NetHostConnectionTypeValues: () => NetHostConnectionTypeValues,
  NetTransportValues: () => NetTransportValues,
  OSTYPEVALUES_AIX: () => OSTYPEVALUES_AIX,
  OSTYPEVALUES_DARWIN: () => OSTYPEVALUES_DARWIN,
  OSTYPEVALUES_DRAGONFLYBSD: () => OSTYPEVALUES_DRAGONFLYBSD,
  OSTYPEVALUES_FREEBSD: () => OSTYPEVALUES_FREEBSD,
  OSTYPEVALUES_HPUX: () => OSTYPEVALUES_HPUX,
  OSTYPEVALUES_LINUX: () => OSTYPEVALUES_LINUX,
  OSTYPEVALUES_NETBSD: () => OSTYPEVALUES_NETBSD,
  OSTYPEVALUES_OPENBSD: () => OSTYPEVALUES_OPENBSD,
  OSTYPEVALUES_SOLARIS: () => OSTYPEVALUES_SOLARIS,
  OSTYPEVALUES_WINDOWS: () => OSTYPEVALUES_WINDOWS,
  OSTYPEVALUES_Z_OS: () => OSTYPEVALUES_Z_OS,
  OTEL_STATUS_CODE_VALUE_ERROR: () => OTEL_STATUS_CODE_VALUE_ERROR,
  OTEL_STATUS_CODE_VALUE_OK: () => OTEL_STATUS_CODE_VALUE_OK,
  OsTypeValues: () => OsTypeValues,
  RPCGRPCSTATUSCODEVALUES_ABORTED: () => RPCGRPCSTATUSCODEVALUES_ABORTED,
  RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS: () => RPCGRPCSTATUSCODEVALUES_ALREADY_EXISTS,
  RPCGRPCSTATUSCODEVALUES_CANCELLED: () => RPCGRPCSTATUSCODEVALUES_CANCELLED,
  RPCGRPCSTATUSCODEVALUES_DATA_LOSS: () => RPCGRPCSTATUSCODEVALUES_DATA_LOSS,
  RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED: () => RPCGRPCSTATUSCODEVALUES_DEADLINE_EXCEEDED,
  RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION: () => RPCGRPCSTATUSCODEVALUES_FAILED_PRECONDITION,
  RPCGRPCSTATUSCODEVALUES_INTERNAL: () => RPCGRPCSTATUSCODEVALUES_INTERNAL,
  RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT: () => RPCGRPCSTATUSCODEVALUES_INVALID_ARGUMENT,
  RPCGRPCSTATUSCODEVALUES_NOT_FOUND: () => RPCGRPCSTATUSCODEVALUES_NOT_FOUND,
  RPCGRPCSTATUSCODEVALUES_OK: () => RPCGRPCSTATUSCODEVALUES_OK,
  RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE: () => RPCGRPCSTATUSCODEVALUES_OUT_OF_RANGE,
  RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED: () => RPCGRPCSTATUSCODEVALUES_PERMISSION_DENIED,
  RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED: () => RPCGRPCSTATUSCODEVALUES_RESOURCE_EXHAUSTED,
  RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED: () => RPCGRPCSTATUSCODEVALUES_UNAUTHENTICATED,
  RPCGRPCSTATUSCODEVALUES_UNAVAILABLE: () => RPCGRPCSTATUSCODEVALUES_UNAVAILABLE,
  RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED: () => RPCGRPCSTATUSCODEVALUES_UNIMPLEMENTED,
  RPCGRPCSTATUSCODEVALUES_UNKNOWN: () => RPCGRPCSTATUSCODEVALUES_UNKNOWN,
  RpcGrpcStatusCodeValues: () => RpcGrpcStatusCodeValues,
  SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET: () => SEMATTRS_AWS_DYNAMODB_ATTRIBUTES_TO_GET,
  SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS: () => SEMATTRS_AWS_DYNAMODB_ATTRIBUTE_DEFINITIONS,
  SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ: () => SEMATTRS_AWS_DYNAMODB_CONSISTENT_READ,
  SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY: () => SEMATTRS_AWS_DYNAMODB_CONSUMED_CAPACITY,
  SEMATTRS_AWS_DYNAMODB_COUNT: () => SEMATTRS_AWS_DYNAMODB_COUNT,
  SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE: () => SEMATTRS_AWS_DYNAMODB_EXCLUSIVE_START_TABLE,
  SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES: () => SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEXES,
  SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES: () => SEMATTRS_AWS_DYNAMODB_GLOBAL_SECONDARY_INDEX_UPDATES,
  SEMATTRS_AWS_DYNAMODB_INDEX_NAME: () => SEMATTRS_AWS_DYNAMODB_INDEX_NAME,
  SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS: () => SEMATTRS_AWS_DYNAMODB_ITEM_COLLECTION_METRICS,
  SEMATTRS_AWS_DYNAMODB_LIMIT: () => SEMATTRS_AWS_DYNAMODB_LIMIT,
  SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES: () => SEMATTRS_AWS_DYNAMODB_LOCAL_SECONDARY_INDEXES,
  SEMATTRS_AWS_DYNAMODB_PROJECTION: () => SEMATTRS_AWS_DYNAMODB_PROJECTION,
  SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY: () => SEMATTRS_AWS_DYNAMODB_PROVISIONED_READ_CAPACITY,
  SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY: () => SEMATTRS_AWS_DYNAMODB_PROVISIONED_WRITE_CAPACITY,
  SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT: () => SEMATTRS_AWS_DYNAMODB_SCANNED_COUNT,
  SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD: () => SEMATTRS_AWS_DYNAMODB_SCAN_FORWARD,
  SEMATTRS_AWS_DYNAMODB_SEGMENT: () => SEMATTRS_AWS_DYNAMODB_SEGMENT,
  SEMATTRS_AWS_DYNAMODB_SELECT: () => SEMATTRS_AWS_DYNAMODB_SELECT,
  SEMATTRS_AWS_DYNAMODB_TABLE_COUNT: () => SEMATTRS_AWS_DYNAMODB_TABLE_COUNT,
  SEMATTRS_AWS_DYNAMODB_TABLE_NAMES: () => SEMATTRS_AWS_DYNAMODB_TABLE_NAMES,
  SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS: () => SEMATTRS_AWS_DYNAMODB_TOTAL_SEGMENTS,
  SEMATTRS_AWS_LAMBDA_INVOKED_ARN: () => SEMATTRS_AWS_LAMBDA_INVOKED_ARN,
  SEMATTRS_CODE_FILEPATH: () => SEMATTRS_CODE_FILEPATH,
  SEMATTRS_CODE_FUNCTION: () => SEMATTRS_CODE_FUNCTION,
  SEMATTRS_CODE_LINENO: () => SEMATTRS_CODE_LINENO,
  SEMATTRS_CODE_NAMESPACE: () => SEMATTRS_CODE_NAMESPACE,
  SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL: () => SEMATTRS_DB_CASSANDRA_CONSISTENCY_LEVEL,
  SEMATTRS_DB_CASSANDRA_COORDINATOR_DC: () => SEMATTRS_DB_CASSANDRA_COORDINATOR_DC,
  SEMATTRS_DB_CASSANDRA_COORDINATOR_ID: () => SEMATTRS_DB_CASSANDRA_COORDINATOR_ID,
  SEMATTRS_DB_CASSANDRA_IDEMPOTENCE: () => SEMATTRS_DB_CASSANDRA_IDEMPOTENCE,
  SEMATTRS_DB_CASSANDRA_KEYSPACE: () => SEMATTRS_DB_CASSANDRA_KEYSPACE,
  SEMATTRS_DB_CASSANDRA_PAGE_SIZE: () => SEMATTRS_DB_CASSANDRA_PAGE_SIZE,
  SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT: () => SEMATTRS_DB_CASSANDRA_SPECULATIVE_EXECUTION_COUNT,
  SEMATTRS_DB_CASSANDRA_TABLE: () => SEMATTRS_DB_CASSANDRA_TABLE,
  SEMATTRS_DB_CONNECTION_STRING: () => SEMATTRS_DB_CONNECTION_STRING,
  SEMATTRS_DB_HBASE_NAMESPACE: () => SEMATTRS_DB_HBASE_NAMESPACE,
  SEMATTRS_DB_JDBC_DRIVER_CLASSNAME: () => SEMATTRS_DB_JDBC_DRIVER_CLASSNAME,
  SEMATTRS_DB_MONGODB_COLLECTION: () => SEMATTRS_DB_MONGODB_COLLECTION,
  SEMATTRS_DB_MSSQL_INSTANCE_NAME: () => SEMATTRS_DB_MSSQL_INSTANCE_NAME,
  SEMATTRS_DB_NAME: () => SEMATTRS_DB_NAME,
  SEMATTRS_DB_OPERATION: () => SEMATTRS_DB_OPERATION,
  SEMATTRS_DB_REDIS_DATABASE_INDEX: () => SEMATTRS_DB_REDIS_DATABASE_INDEX,
  SEMATTRS_DB_SQL_TABLE: () => SEMATTRS_DB_SQL_TABLE,
  SEMATTRS_DB_STATEMENT: () => SEMATTRS_DB_STATEMENT,
  SEMATTRS_DB_SYSTEM: () => SEMATTRS_DB_SYSTEM,
  SEMATTRS_DB_USER: () => SEMATTRS_DB_USER,
  SEMATTRS_ENDUSER_ID: () => SEMATTRS_ENDUSER_ID,
  SEMATTRS_ENDUSER_ROLE: () => SEMATTRS_ENDUSER_ROLE,
  SEMATTRS_ENDUSER_SCOPE: () => SEMATTRS_ENDUSER_SCOPE,
  SEMATTRS_EXCEPTION_ESCAPED: () => SEMATTRS_EXCEPTION_ESCAPED,
  SEMATTRS_EXCEPTION_MESSAGE: () => SEMATTRS_EXCEPTION_MESSAGE,
  SEMATTRS_EXCEPTION_STACKTRACE: () => SEMATTRS_EXCEPTION_STACKTRACE,
  SEMATTRS_EXCEPTION_TYPE: () => SEMATTRS_EXCEPTION_TYPE,
  SEMATTRS_FAAS_COLDSTART: () => SEMATTRS_FAAS_COLDSTART,
  SEMATTRS_FAAS_CRON: () => SEMATTRS_FAAS_CRON,
  SEMATTRS_FAAS_DOCUMENT_COLLECTION: () => SEMATTRS_FAAS_DOCUMENT_COLLECTION,
  SEMATTRS_FAAS_DOCUMENT_NAME: () => SEMATTRS_FAAS_DOCUMENT_NAME,
  SEMATTRS_FAAS_DOCUMENT_OPERATION: () => SEMATTRS_FAAS_DOCUMENT_OPERATION,
  SEMATTRS_FAAS_DOCUMENT_TIME: () => SEMATTRS_FAAS_DOCUMENT_TIME,
  SEMATTRS_FAAS_EXECUTION: () => SEMATTRS_FAAS_EXECUTION,
  SEMATTRS_FAAS_INVOKED_NAME: () => SEMATTRS_FAAS_INVOKED_NAME,
  SEMATTRS_FAAS_INVOKED_PROVIDER: () => SEMATTRS_FAAS_INVOKED_PROVIDER,
  SEMATTRS_FAAS_INVOKED_REGION: () => SEMATTRS_FAAS_INVOKED_REGION,
  SEMATTRS_FAAS_TIME: () => SEMATTRS_FAAS_TIME,
  SEMATTRS_FAAS_TRIGGER: () => SEMATTRS_FAAS_TRIGGER,
  SEMATTRS_HTTP_CLIENT_IP: () => SEMATTRS_HTTP_CLIENT_IP,
  SEMATTRS_HTTP_FLAVOR: () => SEMATTRS_HTTP_FLAVOR,
  SEMATTRS_HTTP_HOST: () => SEMATTRS_HTTP_HOST,
  SEMATTRS_HTTP_METHOD: () => SEMATTRS_HTTP_METHOD,
  SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH: () => SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH,
  SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED: () => SEMATTRS_HTTP_REQUEST_CONTENT_LENGTH_UNCOMPRESSED,
  SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH: () => SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH,
  SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED: () => SEMATTRS_HTTP_RESPONSE_CONTENT_LENGTH_UNCOMPRESSED,
  SEMATTRS_HTTP_ROUTE: () => SEMATTRS_HTTP_ROUTE,
  SEMATTRS_HTTP_SCHEME: () => SEMATTRS_HTTP_SCHEME,
  SEMATTRS_HTTP_SERVER_NAME: () => SEMATTRS_HTTP_SERVER_NAME,
  SEMATTRS_HTTP_STATUS_CODE: () => SEMATTRS_HTTP_STATUS_CODE,
  SEMATTRS_HTTP_TARGET: () => SEMATTRS_HTTP_TARGET,
  SEMATTRS_HTTP_URL: () => SEMATTRS_HTTP_URL,
  SEMATTRS_HTTP_USER_AGENT: () => SEMATTRS_HTTP_USER_AGENT,
  SEMATTRS_MESSAGE_COMPRESSED_SIZE: () => SEMATTRS_MESSAGE_COMPRESSED_SIZE,
  SEMATTRS_MESSAGE_ID: () => SEMATTRS_MESSAGE_ID,
  SEMATTRS_MESSAGE_TYPE: () => SEMATTRS_MESSAGE_TYPE,
  SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE: () => SEMATTRS_MESSAGE_UNCOMPRESSED_SIZE,
  SEMATTRS_MESSAGING_CONSUMER_ID: () => SEMATTRS_MESSAGING_CONSUMER_ID,
  SEMATTRS_MESSAGING_CONVERSATION_ID: () => SEMATTRS_MESSAGING_CONVERSATION_ID,
  SEMATTRS_MESSAGING_DESTINATION: () => SEMATTRS_MESSAGING_DESTINATION,
  SEMATTRS_MESSAGING_DESTINATION_KIND: () => SEMATTRS_MESSAGING_DESTINATION_KIND,
  SEMATTRS_MESSAGING_KAFKA_CLIENT_ID: () => SEMATTRS_MESSAGING_KAFKA_CLIENT_ID,
  SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP: () => SEMATTRS_MESSAGING_KAFKA_CONSUMER_GROUP,
  SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY: () => SEMATTRS_MESSAGING_KAFKA_MESSAGE_KEY,
  SEMATTRS_MESSAGING_KAFKA_PARTITION: () => SEMATTRS_MESSAGING_KAFKA_PARTITION,
  SEMATTRS_MESSAGING_KAFKA_TOMBSTONE: () => SEMATTRS_MESSAGING_KAFKA_TOMBSTONE,
  SEMATTRS_MESSAGING_MESSAGE_ID: () => SEMATTRS_MESSAGING_MESSAGE_ID,
  SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES: () => SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_COMPRESSED_SIZE_BYTES,
  SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES: () => SEMATTRS_MESSAGING_MESSAGE_PAYLOAD_SIZE_BYTES,
  SEMATTRS_MESSAGING_OPERATION: () => SEMATTRS_MESSAGING_OPERATION,
  SEMATTRS_MESSAGING_PROTOCOL: () => SEMATTRS_MESSAGING_PROTOCOL,
  SEMATTRS_MESSAGING_PROTOCOL_VERSION: () => SEMATTRS_MESSAGING_PROTOCOL_VERSION,
  SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY: () => SEMATTRS_MESSAGING_RABBITMQ_ROUTING_KEY,
  SEMATTRS_MESSAGING_SYSTEM: () => SEMATTRS_MESSAGING_SYSTEM,
  SEMATTRS_MESSAGING_TEMP_DESTINATION: () => SEMATTRS_MESSAGING_TEMP_DESTINATION,
  SEMATTRS_MESSAGING_URL: () => SEMATTRS_MESSAGING_URL,
  SEMATTRS_NET_HOST_CARRIER_ICC: () => SEMATTRS_NET_HOST_CARRIER_ICC,
  SEMATTRS_NET_HOST_CARRIER_MCC: () => SEMATTRS_NET_HOST_CARRIER_MCC,
  SEMATTRS_NET_HOST_CARRIER_MNC: () => SEMATTRS_NET_HOST_CARRIER_MNC,
  SEMATTRS_NET_HOST_CARRIER_NAME: () => SEMATTRS_NET_HOST_CARRIER_NAME,
  SEMATTRS_NET_HOST_CONNECTION_SUBTYPE: () => SEMATTRS_NET_HOST_CONNECTION_SUBTYPE,
  SEMATTRS_NET_HOST_CONNECTION_TYPE: () => SEMATTRS_NET_HOST_CONNECTION_TYPE,
  SEMATTRS_NET_HOST_IP: () => SEMATTRS_NET_HOST_IP,
  SEMATTRS_NET_HOST_NAME: () => SEMATTRS_NET_HOST_NAME,
  SEMATTRS_NET_HOST_PORT: () => SEMATTRS_NET_HOST_PORT,
  SEMATTRS_NET_PEER_IP: () => SEMATTRS_NET_PEER_IP,
  SEMATTRS_NET_PEER_NAME: () => SEMATTRS_NET_PEER_NAME,
  SEMATTRS_NET_PEER_PORT: () => SEMATTRS_NET_PEER_PORT,
  SEMATTRS_NET_TRANSPORT: () => SEMATTRS_NET_TRANSPORT,
  SEMATTRS_PEER_SERVICE: () => SEMATTRS_PEER_SERVICE,
  SEMATTRS_RPC_GRPC_STATUS_CODE: () => SEMATTRS_RPC_GRPC_STATUS_CODE,
  SEMATTRS_RPC_JSONRPC_ERROR_CODE: () => SEMATTRS_RPC_JSONRPC_ERROR_CODE,
  SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE: () => SEMATTRS_RPC_JSONRPC_ERROR_MESSAGE,
  SEMATTRS_RPC_JSONRPC_REQUEST_ID: () => SEMATTRS_RPC_JSONRPC_REQUEST_ID,
  SEMATTRS_RPC_JSONRPC_VERSION: () => SEMATTRS_RPC_JSONRPC_VERSION,
  SEMATTRS_RPC_METHOD: () => SEMATTRS_RPC_METHOD,
  SEMATTRS_RPC_SERVICE: () => SEMATTRS_RPC_SERVICE,
  SEMATTRS_RPC_SYSTEM: () => SEMATTRS_RPC_SYSTEM,
  SEMATTRS_THREAD_ID: () => SEMATTRS_THREAD_ID,
  SEMATTRS_THREAD_NAME: () => SEMATTRS_THREAD_NAME,
  SEMRESATTRS_AWS_ECS_CLUSTER_ARN: () => SEMRESATTRS_AWS_ECS_CLUSTER_ARN,
  SEMRESATTRS_AWS_ECS_CONTAINER_ARN: () => SEMRESATTRS_AWS_ECS_CONTAINER_ARN,
  SEMRESATTRS_AWS_ECS_LAUNCHTYPE: () => SEMRESATTRS_AWS_ECS_LAUNCHTYPE,
  SEMRESATTRS_AWS_ECS_TASK_ARN: () => SEMRESATTRS_AWS_ECS_TASK_ARN,
  SEMRESATTRS_AWS_ECS_TASK_FAMILY: () => SEMRESATTRS_AWS_ECS_TASK_FAMILY,
  SEMRESATTRS_AWS_ECS_TASK_REVISION: () => SEMRESATTRS_AWS_ECS_TASK_REVISION,
  SEMRESATTRS_AWS_EKS_CLUSTER_ARN: () => SEMRESATTRS_AWS_EKS_CLUSTER_ARN,
  SEMRESATTRS_AWS_LOG_GROUP_ARNS: () => SEMRESATTRS_AWS_LOG_GROUP_ARNS,
  SEMRESATTRS_AWS_LOG_GROUP_NAMES: () => SEMRESATTRS_AWS_LOG_GROUP_NAMES,
  SEMRESATTRS_AWS_LOG_STREAM_ARNS: () => SEMRESATTRS_AWS_LOG_STREAM_ARNS,
  SEMRESATTRS_AWS_LOG_STREAM_NAMES: () => SEMRESATTRS_AWS_LOG_STREAM_NAMES,
  SEMRESATTRS_CLOUD_ACCOUNT_ID: () => SEMRESATTRS_CLOUD_ACCOUNT_ID,
  SEMRESATTRS_CLOUD_AVAILABILITY_ZONE: () => SEMRESATTRS_CLOUD_AVAILABILITY_ZONE,
  SEMRESATTRS_CLOUD_PLATFORM: () => SEMRESATTRS_CLOUD_PLATFORM,
  SEMRESATTRS_CLOUD_PROVIDER: () => SEMRESATTRS_CLOUD_PROVIDER,
  SEMRESATTRS_CLOUD_REGION: () => SEMRESATTRS_CLOUD_REGION,
  SEMRESATTRS_CONTAINER_ID: () => SEMRESATTRS_CONTAINER_ID,
  SEMRESATTRS_CONTAINER_IMAGE_NAME: () => SEMRESATTRS_CONTAINER_IMAGE_NAME,
  SEMRESATTRS_CONTAINER_IMAGE_TAG: () => SEMRESATTRS_CONTAINER_IMAGE_TAG,
  SEMRESATTRS_CONTAINER_NAME: () => SEMRESATTRS_CONTAINER_NAME,
  SEMRESATTRS_CONTAINER_RUNTIME: () => SEMRESATTRS_CONTAINER_RUNTIME,
  SEMRESATTRS_DEPLOYMENT_ENVIRONMENT: () => SEMRESATTRS_DEPLOYMENT_ENVIRONMENT,
  SEMRESATTRS_DEVICE_ID: () => SEMRESATTRS_DEVICE_ID,
  SEMRESATTRS_DEVICE_MODEL_IDENTIFIER: () => SEMRESATTRS_DEVICE_MODEL_IDENTIFIER,
  SEMRESATTRS_DEVICE_MODEL_NAME: () => SEMRESATTRS_DEVICE_MODEL_NAME,
  SEMRESATTRS_FAAS_ID: () => SEMRESATTRS_FAAS_ID,
  SEMRESATTRS_FAAS_INSTANCE: () => SEMRESATTRS_FAAS_INSTANCE,
  SEMRESATTRS_FAAS_MAX_MEMORY: () => SEMRESATTRS_FAAS_MAX_MEMORY,
  SEMRESATTRS_FAAS_NAME: () => SEMRESATTRS_FAAS_NAME,
  SEMRESATTRS_FAAS_VERSION: () => SEMRESATTRS_FAAS_VERSION,
  SEMRESATTRS_HOST_ARCH: () => SEMRESATTRS_HOST_ARCH,
  SEMRESATTRS_HOST_ID: () => SEMRESATTRS_HOST_ID,
  SEMRESATTRS_HOST_IMAGE_ID: () => SEMRESATTRS_HOST_IMAGE_ID,
  SEMRESATTRS_HOST_IMAGE_NAME: () => SEMRESATTRS_HOST_IMAGE_NAME,
  SEMRESATTRS_HOST_IMAGE_VERSION: () => SEMRESATTRS_HOST_IMAGE_VERSION,
  SEMRESATTRS_HOST_NAME: () => SEMRESATTRS_HOST_NAME,
  SEMRESATTRS_HOST_TYPE: () => SEMRESATTRS_HOST_TYPE,
  SEMRESATTRS_K8S_CLUSTER_NAME: () => SEMRESATTRS_K8S_CLUSTER_NAME,
  SEMRESATTRS_K8S_CONTAINER_NAME: () => SEMRESATTRS_K8S_CONTAINER_NAME,
  SEMRESATTRS_K8S_CRONJOB_NAME: () => SEMRESATTRS_K8S_CRONJOB_NAME,
  SEMRESATTRS_K8S_CRONJOB_UID: () => SEMRESATTRS_K8S_CRONJOB_UID,
  SEMRESATTRS_K8S_DAEMONSET_NAME: () => SEMRESATTRS_K8S_DAEMONSET_NAME,
  SEMRESATTRS_K8S_DAEMONSET_UID: () => SEMRESATTRS_K8S_DAEMONSET_UID,
  SEMRESATTRS_K8S_DEPLOYMENT_NAME: () => SEMRESATTRS_K8S_DEPLOYMENT_NAME,
  SEMRESATTRS_K8S_DEPLOYMENT_UID: () => SEMRESATTRS_K8S_DEPLOYMENT_UID,
  SEMRESATTRS_K8S_JOB_NAME: () => SEMRESATTRS_K8S_JOB_NAME,
  SEMRESATTRS_K8S_JOB_UID: () => SEMRESATTRS_K8S_JOB_UID,
  SEMRESATTRS_K8S_NAMESPACE_NAME: () => SEMRESATTRS_K8S_NAMESPACE_NAME,
  SEMRESATTRS_K8S_NODE_NAME: () => SEMRESATTRS_K8S_NODE_NAME,
  SEMRESATTRS_K8S_NODE_UID: () => SEMRESATTRS_K8S_NODE_UID,
  SEMRESATTRS_K8S_POD_NAME: () => SEMRESATTRS_K8S_POD_NAME,
  SEMRESATTRS_K8S_POD_UID: () => SEMRESATTRS_K8S_POD_UID,
  SEMRESATTRS_K8S_REPLICASET_NAME: () => SEMRESATTRS_K8S_REPLICASET_NAME,
  SEMRESATTRS_K8S_REPLICASET_UID: () => SEMRESATTRS_K8S_REPLICASET_UID,
  SEMRESATTRS_K8S_STATEFULSET_NAME: () => SEMRESATTRS_K8S_STATEFULSET_NAME,
  SEMRESATTRS_K8S_STATEFULSET_UID: () => SEMRESATTRS_K8S_STATEFULSET_UID,
  SEMRESATTRS_OS_DESCRIPTION: () => SEMRESATTRS_OS_DESCRIPTION,
  SEMRESATTRS_OS_NAME: () => SEMRESATTRS_OS_NAME,
  SEMRESATTRS_OS_TYPE: () => SEMRESATTRS_OS_TYPE,
  SEMRESATTRS_OS_VERSION: () => SEMRESATTRS_OS_VERSION,
  SEMRESATTRS_PROCESS_COMMAND: () => SEMRESATTRS_PROCESS_COMMAND,
  SEMRESATTRS_PROCESS_COMMAND_ARGS: () => SEMRESATTRS_PROCESS_COMMAND_ARGS,
  SEMRESATTRS_PROCESS_COMMAND_LINE: () => SEMRESATTRS_PROCESS_COMMAND_LINE,
  SEMRESATTRS_PROCESS_EXECUTABLE_NAME: () => SEMRESATTRS_PROCESS_EXECUTABLE_NAME,
  SEMRESATTRS_PROCESS_EXECUTABLE_PATH: () => SEMRESATTRS_PROCESS_EXECUTABLE_PATH,
  SEMRESATTRS_PROCESS_OWNER: () => SEMRESATTRS_PROCESS_OWNER,
  SEMRESATTRS_PROCESS_PID: () => SEMRESATTRS_PROCESS_PID,
  SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION: () => SEMRESATTRS_PROCESS_RUNTIME_DESCRIPTION,
  SEMRESATTRS_PROCESS_RUNTIME_NAME: () => SEMRESATTRS_PROCESS_RUNTIME_NAME,
  SEMRESATTRS_PROCESS_RUNTIME_VERSION: () => SEMRESATTRS_PROCESS_RUNTIME_VERSION,
  SEMRESATTRS_SERVICE_INSTANCE_ID: () => SEMRESATTRS_SERVICE_INSTANCE_ID,
  SEMRESATTRS_SERVICE_NAME: () => SEMRESATTRS_SERVICE_NAME,
  SEMRESATTRS_SERVICE_NAMESPACE: () => SEMRESATTRS_SERVICE_NAMESPACE,
  SEMRESATTRS_SERVICE_VERSION: () => SEMRESATTRS_SERVICE_VERSION,
  SEMRESATTRS_TELEMETRY_AUTO_VERSION: () => SEMRESATTRS_TELEMETRY_AUTO_VERSION,
  SEMRESATTRS_TELEMETRY_SDK_LANGUAGE: () => SEMRESATTRS_TELEMETRY_SDK_LANGUAGE,
  SEMRESATTRS_TELEMETRY_SDK_NAME: () => SEMRESATTRS_TELEMETRY_SDK_NAME,
  SEMRESATTRS_TELEMETRY_SDK_VERSION: () => SEMRESATTRS_TELEMETRY_SDK_VERSION,
  SEMRESATTRS_WEBENGINE_DESCRIPTION: () => SEMRESATTRS_WEBENGINE_DESCRIPTION,
  SEMRESATTRS_WEBENGINE_NAME: () => SEMRESATTRS_WEBENGINE_NAME,
  SEMRESATTRS_WEBENGINE_VERSION: () => SEMRESATTRS_WEBENGINE_VERSION,
  SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN: () => SIGNALR_CONNECTION_STATUS_VALUE_APP_SHUTDOWN,
  SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE: () => SIGNALR_CONNECTION_STATUS_VALUE_NORMAL_CLOSURE,
  SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT: () => SIGNALR_CONNECTION_STATUS_VALUE_TIMEOUT,
  SIGNALR_TRANSPORT_VALUE_LONG_POLLING: () => SIGNALR_TRANSPORT_VALUE_LONG_POLLING,
  SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS: () => SIGNALR_TRANSPORT_VALUE_SERVER_SENT_EVENTS,
  SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS: () => SIGNALR_TRANSPORT_VALUE_WEB_SOCKETS,
  SemanticAttributes: () => SemanticAttributes,
  SemanticResourceAttributes: () => SemanticResourceAttributes,
  TELEMETRYSDKLANGUAGEVALUES_CPP: () => TELEMETRYSDKLANGUAGEVALUES_CPP,
  TELEMETRYSDKLANGUAGEVALUES_DOTNET: () => TELEMETRYSDKLANGUAGEVALUES_DOTNET,
  TELEMETRYSDKLANGUAGEVALUES_ERLANG: () => TELEMETRYSDKLANGUAGEVALUES_ERLANG,
  TELEMETRYSDKLANGUAGEVALUES_GO: () => TELEMETRYSDKLANGUAGEVALUES_GO,
  TELEMETRYSDKLANGUAGEVALUES_JAVA: () => TELEMETRYSDKLANGUAGEVALUES_JAVA,
  TELEMETRYSDKLANGUAGEVALUES_NODEJS: () => TELEMETRYSDKLANGUAGEVALUES_NODEJS,
  TELEMETRYSDKLANGUAGEVALUES_PHP: () => TELEMETRYSDKLANGUAGEVALUES_PHP,
  TELEMETRYSDKLANGUAGEVALUES_PYTHON: () => TELEMETRYSDKLANGUAGEVALUES_PYTHON,
  TELEMETRYSDKLANGUAGEVALUES_RUBY: () => TELEMETRYSDKLANGUAGEVALUES_RUBY,
  TELEMETRYSDKLANGUAGEVALUES_WEBJS: () => TELEMETRYSDKLANGUAGEVALUES_WEBJS,
  TELEMETRY_SDK_LANGUAGE_VALUE_CPP: () => TELEMETRY_SDK_LANGUAGE_VALUE_CPP,
  TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET: () => TELEMETRY_SDK_LANGUAGE_VALUE_DOTNET,
  TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG: () => TELEMETRY_SDK_LANGUAGE_VALUE_ERLANG,
  TELEMETRY_SDK_LANGUAGE_VALUE_GO: () => TELEMETRY_SDK_LANGUAGE_VALUE_GO,
  TELEMETRY_SDK_LANGUAGE_VALUE_JAVA: () => TELEMETRY_SDK_LANGUAGE_VALUE_JAVA,
  TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS: () => TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS,
  TELEMETRY_SDK_LANGUAGE_VALUE_PHP: () => TELEMETRY_SDK_LANGUAGE_VALUE_PHP,
  TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON: () => TELEMETRY_SDK_LANGUAGE_VALUE_PYTHON,
  TELEMETRY_SDK_LANGUAGE_VALUE_RUBY: () => TELEMETRY_SDK_LANGUAGE_VALUE_RUBY,
  TELEMETRY_SDK_LANGUAGE_VALUE_RUST: () => TELEMETRY_SDK_LANGUAGE_VALUE_RUST,
  TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT: () => TELEMETRY_SDK_LANGUAGE_VALUE_SWIFT,
  TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS: () => TELEMETRY_SDK_LANGUAGE_VALUE_WEBJS,
  TelemetrySdkLanguageValues: () => TelemetrySdkLanguageValues
});
var init_esm3 = __esm({
  "node_modules/@opentelemetry/semantic-conventions/build/esm/index.js"() {
    init_esm();
    init_trace2();
    init_resource();
    init_stable_attributes();
    init_stable_metrics();
  }
});

// node_modules/@opentelemetry/core/build/src/semconv.js
var require_semconv = __commonJS({
  "node_modules/@opentelemetry/core/build/src/semconv.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ATTR_PROCESS_RUNTIME_NAME = void 0;
    exports.ATTR_PROCESS_RUNTIME_NAME = "process.runtime.name";
  }
});

// node_modules/@opentelemetry/core/build/src/platform/node/sdk-info.js
var require_sdk_info = __commonJS({
  "node_modules/@opentelemetry/core/build/src/platform/node/sdk-info.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SDK_INFO = void 0;
    var version_1 = require_version();
    var semantic_conventions_1 = (init_esm3(), __toCommonJS(esm_exports2));
    var semconv_1 = require_semconv();
    exports.SDK_INFO = {
      [semantic_conventions_1.ATTR_TELEMETRY_SDK_NAME]: "opentelemetry",
      [semconv_1.ATTR_PROCESS_RUNTIME_NAME]: "node",
      [semantic_conventions_1.ATTR_TELEMETRY_SDK_LANGUAGE]: semantic_conventions_1.TELEMETRY_SDK_LANGUAGE_VALUE_NODEJS,
      [semantic_conventions_1.ATTR_TELEMETRY_SDK_VERSION]: version_1.VERSION
    };
  }
});

// node_modules/@opentelemetry/core/build/src/platform/node/timer-util.js
var require_timer_util = __commonJS({
  "node_modules/@opentelemetry/core/build/src/platform/node/timer-util.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.unrefTimer = void 0;
    function unrefTimer(timer) {
      timer.unref();
    }
    __name(unrefTimer, "unrefTimer");
    exports.unrefTimer = unrefTimer;
  }
});

// node_modules/@opentelemetry/core/build/src/platform/node/index.js
var require_node2 = __commonJS({
  "node_modules/@opentelemetry/core/build/src/platform/node/index.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.unrefTimer = exports.SDK_INFO = exports.otperformance = exports._globalThis = exports.getStringListFromEnv = exports.getNumberFromEnv = exports.getBooleanFromEnv = exports.getStringFromEnv = void 0;
    var environment_1 = require_environment();
    Object.defineProperty(exports, "getStringFromEnv", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return environment_1.getStringFromEnv;
    }, "get") });
    Object.defineProperty(exports, "getBooleanFromEnv", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return environment_1.getBooleanFromEnv;
    }, "get") });
    Object.defineProperty(exports, "getNumberFromEnv", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return environment_1.getNumberFromEnv;
    }, "get") });
    Object.defineProperty(exports, "getStringListFromEnv", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return environment_1.getStringListFromEnv;
    }, "get") });
    var globalThis_1 = require_globalThis2();
    Object.defineProperty(exports, "_globalThis", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return globalThis_1._globalThis;
    }, "get") });
    var performance_1 = require_performance();
    Object.defineProperty(exports, "otperformance", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return performance_1.otperformance;
    }, "get") });
    var sdk_info_1 = require_sdk_info();
    Object.defineProperty(exports, "SDK_INFO", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return sdk_info_1.SDK_INFO;
    }, "get") });
    var timer_util_1 = require_timer_util();
    Object.defineProperty(exports, "unrefTimer", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return timer_util_1.unrefTimer;
    }, "get") });
  }
});

// node_modules/@opentelemetry/core/build/src/platform/index.js
var require_platform2 = __commonJS({
  "node_modules/@opentelemetry/core/build/src/platform/index.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getStringListFromEnv = exports.getNumberFromEnv = exports.getStringFromEnv = exports.getBooleanFromEnv = exports.unrefTimer = exports.otperformance = exports._globalThis = exports.SDK_INFO = void 0;
    var node_1 = require_node2();
    Object.defineProperty(exports, "SDK_INFO", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return node_1.SDK_INFO;
    }, "get") });
    Object.defineProperty(exports, "_globalThis", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return node_1._globalThis;
    }, "get") });
    Object.defineProperty(exports, "otperformance", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return node_1.otperformance;
    }, "get") });
    Object.defineProperty(exports, "unrefTimer", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return node_1.unrefTimer;
    }, "get") });
    Object.defineProperty(exports, "getBooleanFromEnv", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return node_1.getBooleanFromEnv;
    }, "get") });
    Object.defineProperty(exports, "getStringFromEnv", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return node_1.getStringFromEnv;
    }, "get") });
    Object.defineProperty(exports, "getNumberFromEnv", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return node_1.getNumberFromEnv;
    }, "get") });
    Object.defineProperty(exports, "getStringListFromEnv", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return node_1.getStringListFromEnv;
    }, "get") });
  }
});

// node_modules/@opentelemetry/core/build/src/common/time.js
var require_time = __commonJS({
  "node_modules/@opentelemetry/core/build/src/common/time.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.addHrTimes = exports.isTimeInput = exports.isTimeInputHrTime = exports.hrTimeToMicroseconds = exports.hrTimeToMilliseconds = exports.hrTimeToNanoseconds = exports.hrTimeToTimeStamp = exports.hrTimeDuration = exports.timeInputToHrTime = exports.hrTime = exports.getTimeOrigin = exports.millisToHrTime = void 0;
    var platform_1 = require_platform2();
    var NANOSECOND_DIGITS = 9;
    var NANOSECOND_DIGITS_IN_MILLIS = 6;
    var MILLISECONDS_TO_NANOSECONDS = Math.pow(10, NANOSECOND_DIGITS_IN_MILLIS);
    var SECOND_TO_NANOSECONDS = Math.pow(10, NANOSECOND_DIGITS);
    function millisToHrTime(epochMillis) {
      const epochSeconds = epochMillis / 1e3;
      const seconds = Math.trunc(epochSeconds);
      const nanos = Math.round(epochMillis % 1e3 * MILLISECONDS_TO_NANOSECONDS);
      return [seconds, nanos];
    }
    __name(millisToHrTime, "millisToHrTime");
    exports.millisToHrTime = millisToHrTime;
    function getTimeOrigin() {
      let timeOrigin = platform_1.otperformance.timeOrigin;
      if (typeof timeOrigin !== "number") {
        const perf = platform_1.otperformance;
        timeOrigin = perf.timing && perf.timing.fetchStart;
      }
      return timeOrigin;
    }
    __name(getTimeOrigin, "getTimeOrigin");
    exports.getTimeOrigin = getTimeOrigin;
    function hrTime(performanceNow) {
      const timeOrigin = millisToHrTime(getTimeOrigin());
      const now = millisToHrTime(typeof performanceNow === "number" ? performanceNow : platform_1.otperformance.now());
      return addHrTimes(timeOrigin, now);
    }
    __name(hrTime, "hrTime");
    exports.hrTime = hrTime;
    function timeInputToHrTime(time) {
      if (isTimeInputHrTime(time)) {
        return time;
      } else if (typeof time === "number") {
        if (time < getTimeOrigin()) {
          return hrTime(time);
        } else {
          return millisToHrTime(time);
        }
      } else if (time instanceof Date) {
        return millisToHrTime(time.getTime());
      } else {
        throw TypeError("Invalid input type");
      }
    }
    __name(timeInputToHrTime, "timeInputToHrTime");
    exports.timeInputToHrTime = timeInputToHrTime;
    function hrTimeDuration(startTime, endTime) {
      let seconds = endTime[0] - startTime[0];
      let nanos = endTime[1] - startTime[1];
      if (nanos < 0) {
        seconds -= 1;
        nanos += SECOND_TO_NANOSECONDS;
      }
      return [seconds, nanos];
    }
    __name(hrTimeDuration, "hrTimeDuration");
    exports.hrTimeDuration = hrTimeDuration;
    function hrTimeToTimeStamp(time) {
      const precision = NANOSECOND_DIGITS;
      const tmp = `${"0".repeat(precision)}${time[1]}Z`;
      const nanoString = tmp.substring(tmp.length - precision - 1);
      const date = new Date(time[0] * 1e3).toISOString();
      return date.replace("000Z", nanoString);
    }
    __name(hrTimeToTimeStamp, "hrTimeToTimeStamp");
    exports.hrTimeToTimeStamp = hrTimeToTimeStamp;
    function hrTimeToNanoseconds(time) {
      return time[0] * SECOND_TO_NANOSECONDS + time[1];
    }
    __name(hrTimeToNanoseconds, "hrTimeToNanoseconds");
    exports.hrTimeToNanoseconds = hrTimeToNanoseconds;
    function hrTimeToMilliseconds(time) {
      return time[0] * 1e3 + time[1] / 1e6;
    }
    __name(hrTimeToMilliseconds, "hrTimeToMilliseconds");
    exports.hrTimeToMilliseconds = hrTimeToMilliseconds;
    function hrTimeToMicroseconds(time) {
      return time[0] * 1e6 + time[1] / 1e3;
    }
    __name(hrTimeToMicroseconds, "hrTimeToMicroseconds");
    exports.hrTimeToMicroseconds = hrTimeToMicroseconds;
    function isTimeInputHrTime(value) {
      return Array.isArray(value) && value.length === 2 && typeof value[0] === "number" && typeof value[1] === "number";
    }
    __name(isTimeInputHrTime, "isTimeInputHrTime");
    exports.isTimeInputHrTime = isTimeInputHrTime;
    function isTimeInput(value) {
      return isTimeInputHrTime(value) || typeof value === "number" || value instanceof Date;
    }
    __name(isTimeInput, "isTimeInput");
    exports.isTimeInput = isTimeInput;
    function addHrTimes(time1, time2) {
      const out = [time1[0] + time2[0], time1[1] + time2[1]];
      if (out[1] >= SECOND_TO_NANOSECONDS) {
        out[1] -= SECOND_TO_NANOSECONDS;
        out[0] += 1;
      }
      return out;
    }
    __name(addHrTimes, "addHrTimes");
    exports.addHrTimes = addHrTimes;
  }
});

// node_modules/@opentelemetry/core/build/src/ExportResult.js
var require_ExportResult = __commonJS({
  "node_modules/@opentelemetry/core/build/src/ExportResult.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ExportResultCode = void 0;
    var ExportResultCode;
    (function(ExportResultCode2) {
      ExportResultCode2[ExportResultCode2["SUCCESS"] = 0] = "SUCCESS";
      ExportResultCode2[ExportResultCode2["FAILED"] = 1] = "FAILED";
    })(ExportResultCode = exports.ExportResultCode || (exports.ExportResultCode = {}));
  }
});

// node_modules/@opentelemetry/core/build/src/propagation/composite.js
var require_composite = __commonJS({
  "node_modules/@opentelemetry/core/build/src/propagation/composite.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CompositePropagator = void 0;
    var api_1 = (init_esm2(), __toCommonJS(esm_exports));
    var CompositePropagator = class {
      static {
        __name(this, "CompositePropagator");
      }
      _propagators;
      _fields;
      /**
       * Construct a composite propagator from a list of propagators.
       *
       * @param [config] Configuration object for composite propagator
       */
      constructor(config = {}) {
        this._propagators = config.propagators ?? [];
        this._fields = Array.from(new Set(this._propagators.map((p2) => typeof p2.fields === "function" ? p2.fields() : []).reduce((x, y2) => x.concat(y2), [])));
      }
      /**
       * Run each of the configured propagators with the given context and carrier.
       * Propagators are run in the order they are configured, so if multiple
       * propagators write the same carrier key, the propagator later in the list
       * will "win".
       *
       * @param context Context to inject
       * @param carrier Carrier into which context will be injected
       */
      inject(context2, carrier, setter) {
        for (const propagator of this._propagators) {
          try {
            propagator.inject(context2, carrier, setter);
          } catch (err) {
            api_1.diag.warn(`Failed to inject with ${propagator.constructor.name}. Err: ${err.message}`);
          }
        }
      }
      /**
       * Run each of the configured propagators with the given context and carrier.
       * Propagators are run in the order they are configured, so if multiple
       * propagators write the same context key, the propagator later in the list
       * will "win".
       *
       * @param context Context to add values to
       * @param carrier Carrier from which to extract context
       */
      extract(context2, carrier, getter) {
        return this._propagators.reduce((ctx, propagator) => {
          try {
            return propagator.extract(ctx, carrier, getter);
          } catch (err) {
            api_1.diag.warn(`Failed to extract with ${propagator.constructor.name}. Err: ${err.message}`);
          }
          return ctx;
        }, context2);
      }
      fields() {
        return this._fields.slice();
      }
    };
    exports.CompositePropagator = CompositePropagator;
  }
});

// node_modules/@opentelemetry/core/build/src/internal/validators.js
var require_validators = __commonJS({
  "node_modules/@opentelemetry/core/build/src/internal/validators.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validateValue = exports.validateKey = void 0;
    var VALID_KEY_CHAR_RANGE2 = "[_0-9a-z-*/]";
    var VALID_KEY2 = `[a-z]${VALID_KEY_CHAR_RANGE2}{0,255}`;
    var VALID_VENDOR_KEY2 = `[a-z0-9]${VALID_KEY_CHAR_RANGE2}{0,240}@[a-z]${VALID_KEY_CHAR_RANGE2}{0,13}`;
    var VALID_KEY_REGEX2 = new RegExp(`^(?:${VALID_KEY2}|${VALID_VENDOR_KEY2})$`);
    var VALID_VALUE_BASE_REGEX2 = /^[ -~]{0,255}[!-~]$/;
    var INVALID_VALUE_COMMA_EQUAL_REGEX2 = /,|=/;
    function validateKey2(key) {
      return VALID_KEY_REGEX2.test(key);
    }
    __name(validateKey2, "validateKey");
    exports.validateKey = validateKey2;
    function validateValue2(value) {
      return VALID_VALUE_BASE_REGEX2.test(value) && !INVALID_VALUE_COMMA_EQUAL_REGEX2.test(value);
    }
    __name(validateValue2, "validateValue");
    exports.validateValue = validateValue2;
  }
});

// node_modules/@opentelemetry/core/build/src/trace/TraceState.js
var require_TraceState = __commonJS({
  "node_modules/@opentelemetry/core/build/src/trace/TraceState.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TraceState = void 0;
    var validators_1 = require_validators();
    var MAX_TRACE_STATE_ITEMS2 = 32;
    var MAX_TRACE_STATE_LEN2 = 512;
    var LIST_MEMBERS_SEPARATOR2 = ",";
    var LIST_MEMBER_KEY_VALUE_SPLITTER2 = "=";
    var TraceState = class _TraceState {
      static {
        __name(this, "TraceState");
      }
      _internalState = /* @__PURE__ */ new Map();
      constructor(rawTraceState) {
        if (rawTraceState)
          this._parse(rawTraceState);
      }
      set(key, value) {
        const traceState = this._clone();
        if (traceState._internalState.has(key)) {
          traceState._internalState.delete(key);
        }
        traceState._internalState.set(key, value);
        return traceState;
      }
      unset(key) {
        const traceState = this._clone();
        traceState._internalState.delete(key);
        return traceState;
      }
      get(key) {
        return this._internalState.get(key);
      }
      serialize() {
        return this._keys().reduce((agg, key) => {
          agg.push(key + LIST_MEMBER_KEY_VALUE_SPLITTER2 + this.get(key));
          return agg;
        }, []).join(LIST_MEMBERS_SEPARATOR2);
      }
      _parse(rawTraceState) {
        if (rawTraceState.length > MAX_TRACE_STATE_LEN2)
          return;
        this._internalState = rawTraceState.split(LIST_MEMBERS_SEPARATOR2).reverse().reduce((agg, part) => {
          const listMember = part.trim();
          const i2 = listMember.indexOf(LIST_MEMBER_KEY_VALUE_SPLITTER2);
          if (i2 !== -1) {
            const key = listMember.slice(0, i2);
            const value = listMember.slice(i2 + 1, part.length);
            if ((0, validators_1.validateKey)(key) && (0, validators_1.validateValue)(value)) {
              agg.set(key, value);
            } else {
            }
          }
          return agg;
        }, /* @__PURE__ */ new Map());
        if (this._internalState.size > MAX_TRACE_STATE_ITEMS2) {
          this._internalState = new Map(Array.from(this._internalState.entries()).reverse().slice(0, MAX_TRACE_STATE_ITEMS2));
        }
      }
      _keys() {
        return Array.from(this._internalState.keys()).reverse();
      }
      _clone() {
        const traceState = new _TraceState();
        traceState._internalState = new Map(this._internalState);
        return traceState;
      }
    };
    exports.TraceState = TraceState;
  }
});

// node_modules/@opentelemetry/core/build/src/trace/W3CTraceContextPropagator.js
var require_W3CTraceContextPropagator = __commonJS({
  "node_modules/@opentelemetry/core/build/src/trace/W3CTraceContextPropagator.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.W3CTraceContextPropagator = exports.parseTraceParent = exports.TRACE_STATE_HEADER = exports.TRACE_PARENT_HEADER = void 0;
    var api_1 = (init_esm2(), __toCommonJS(esm_exports));
    var suppress_tracing_1 = require_suppress_tracing();
    var TraceState_1 = require_TraceState();
    exports.TRACE_PARENT_HEADER = "traceparent";
    exports.TRACE_STATE_HEADER = "tracestate";
    var VERSION4 = "00";
    var VERSION_PART = "(?!ff)[\\da-f]{2}";
    var TRACE_ID_PART = "(?![0]{32})[\\da-f]{32}";
    var PARENT_ID_PART = "(?![0]{16})[\\da-f]{16}";
    var FLAGS_PART = "[\\da-f]{2}";
    var TRACE_PARENT_REGEX = new RegExp(`^\\s?(${VERSION_PART})-(${TRACE_ID_PART})-(${PARENT_ID_PART})-(${FLAGS_PART})(-.*)?\\s?$`);
    function parseTraceParent(traceParent) {
      const match = TRACE_PARENT_REGEX.exec(traceParent);
      if (!match)
        return null;
      if (match[1] === "00" && match[5])
        return null;
      return {
        traceId: match[2],
        spanId: match[3],
        traceFlags: parseInt(match[4], 16)
      };
    }
    __name(parseTraceParent, "parseTraceParent");
    exports.parseTraceParent = parseTraceParent;
    var W3CTraceContextPropagator = class {
      static {
        __name(this, "W3CTraceContextPropagator");
      }
      inject(context2, carrier, setter) {
        const spanContext = api_1.trace.getSpanContext(context2);
        if (!spanContext || (0, suppress_tracing_1.isTracingSuppressed)(context2) || !(0, api_1.isSpanContextValid)(spanContext))
          return;
        const traceParent = `${VERSION4}-${spanContext.traceId}-${spanContext.spanId}-0${Number(spanContext.traceFlags || api_1.TraceFlags.NONE).toString(16)}`;
        setter.set(carrier, exports.TRACE_PARENT_HEADER, traceParent);
        if (spanContext.traceState) {
          setter.set(carrier, exports.TRACE_STATE_HEADER, spanContext.traceState.serialize());
        }
      }
      extract(context2, carrier, getter) {
        const traceParentHeader = getter.get(carrier, exports.TRACE_PARENT_HEADER);
        if (!traceParentHeader)
          return context2;
        const traceParent = Array.isArray(traceParentHeader) ? traceParentHeader[0] : traceParentHeader;
        if (typeof traceParent !== "string")
          return context2;
        const spanContext = parseTraceParent(traceParent);
        if (!spanContext)
          return context2;
        spanContext.isRemote = true;
        const traceStateHeader = getter.get(carrier, exports.TRACE_STATE_HEADER);
        if (traceStateHeader) {
          const state = Array.isArray(traceStateHeader) ? traceStateHeader.join(",") : traceStateHeader;
          spanContext.traceState = new TraceState_1.TraceState(typeof state === "string" ? state : void 0);
        }
        return api_1.trace.setSpanContext(context2, spanContext);
      }
      fields() {
        return [exports.TRACE_PARENT_HEADER, exports.TRACE_STATE_HEADER];
      }
    };
    exports.W3CTraceContextPropagator = W3CTraceContextPropagator;
  }
});

// node_modules/@opentelemetry/core/build/src/trace/rpc-metadata.js
var require_rpc_metadata = __commonJS({
  "node_modules/@opentelemetry/core/build/src/trace/rpc-metadata.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getRPCMetadata = exports.deleteRPCMetadata = exports.setRPCMetadata = exports.RPCType = void 0;
    var api_1 = (init_esm2(), __toCommonJS(esm_exports));
    var RPC_METADATA_KEY = (0, api_1.createContextKey)("OpenTelemetry SDK Context Key RPC_METADATA");
    var RPCType;
    (function(RPCType2) {
      RPCType2["HTTP"] = "http";
    })(RPCType = exports.RPCType || (exports.RPCType = {}));
    function setRPCMetadata(context2, meta) {
      return context2.setValue(RPC_METADATA_KEY, meta);
    }
    __name(setRPCMetadata, "setRPCMetadata");
    exports.setRPCMetadata = setRPCMetadata;
    function deleteRPCMetadata(context2) {
      return context2.deleteValue(RPC_METADATA_KEY);
    }
    __name(deleteRPCMetadata, "deleteRPCMetadata");
    exports.deleteRPCMetadata = deleteRPCMetadata;
    function getRPCMetadata(context2) {
      return context2.getValue(RPC_METADATA_KEY);
    }
    __name(getRPCMetadata, "getRPCMetadata");
    exports.getRPCMetadata = getRPCMetadata;
  }
});

// node_modules/@opentelemetry/core/build/src/utils/lodash.merge.js
var require_lodash_merge = __commonJS({
  "node_modules/@opentelemetry/core/build/src/utils/lodash.merge.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isPlainObject = void 0;
    var objectTag = "[object Object]";
    var nullTag = "[object Null]";
    var undefinedTag = "[object Undefined]";
    var funcProto = Function.prototype;
    var funcToString = funcProto.toString;
    var objectCtorString = funcToString.call(Object);
    var getPrototypeOf = Object.getPrototypeOf;
    var objectProto = Object.prototype;
    var hasOwnProperty = objectProto.hasOwnProperty;
    var symToStringTag = Symbol ? Symbol.toStringTag : void 0;
    var nativeObjectToString = objectProto.toString;
    function isPlainObject(value) {
      if (!isObjectLike(value) || baseGetTag(value) !== objectTag) {
        return false;
      }
      const proto = getPrototypeOf(value);
      if (proto === null) {
        return true;
      }
      const Ctor = hasOwnProperty.call(proto, "constructor") && proto.constructor;
      return typeof Ctor == "function" && Ctor instanceof Ctor && funcToString.call(Ctor) === objectCtorString;
    }
    __name(isPlainObject, "isPlainObject");
    exports.isPlainObject = isPlainObject;
    function isObjectLike(value) {
      return value != null && typeof value == "object";
    }
    __name(isObjectLike, "isObjectLike");
    function baseGetTag(value) {
      if (value == null) {
        return value === void 0 ? undefinedTag : nullTag;
      }
      return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
    }
    __name(baseGetTag, "baseGetTag");
    function getRawTag(value) {
      const isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
      let unmasked = false;
      try {
        value[symToStringTag] = void 0;
        unmasked = true;
      } catch (e) {
      }
      const result = nativeObjectToString.call(value);
      if (unmasked) {
        if (isOwn) {
          value[symToStringTag] = tag;
        } else {
          delete value[symToStringTag];
        }
      }
      return result;
    }
    __name(getRawTag, "getRawTag");
    function objectToString(value) {
      return nativeObjectToString.call(value);
    }
    __name(objectToString, "objectToString");
  }
});

// node_modules/@opentelemetry/core/build/src/utils/merge.js
var require_merge = __commonJS({
  "node_modules/@opentelemetry/core/build/src/utils/merge.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.merge = void 0;
    var lodash_merge_1 = require_lodash_merge();
    var MAX_LEVEL = 20;
    function merge(...args) {
      let result = args.shift();
      const objects = /* @__PURE__ */ new WeakMap();
      while (args.length > 0) {
        result = mergeTwoObjects(result, args.shift(), 0, objects);
      }
      return result;
    }
    __name(merge, "merge");
    exports.merge = merge;
    function takeValue(value) {
      if (isArray(value)) {
        return value.slice();
      }
      return value;
    }
    __name(takeValue, "takeValue");
    function mergeTwoObjects(one, two, level = 0, objects) {
      let result;
      if (level > MAX_LEVEL) {
        return void 0;
      }
      level++;
      if (isPrimitive(one) || isPrimitive(two) || isFunction(two)) {
        result = takeValue(two);
      } else if (isArray(one)) {
        result = one.slice();
        if (isArray(two)) {
          for (let i2 = 0, j = two.length; i2 < j; i2++) {
            result.push(takeValue(two[i2]));
          }
        } else if (isObject(two)) {
          const keys = Object.keys(two);
          for (let i2 = 0, j = keys.length; i2 < j; i2++) {
            const key = keys[i2];
            result[key] = takeValue(two[key]);
          }
        }
      } else if (isObject(one)) {
        if (isObject(two)) {
          if (!shouldMerge(one, two)) {
            return two;
          }
          result = Object.assign({}, one);
          const keys = Object.keys(two);
          for (let i2 = 0, j = keys.length; i2 < j; i2++) {
            const key = keys[i2];
            const twoValue = two[key];
            if (isPrimitive(twoValue)) {
              if (typeof twoValue === "undefined") {
                delete result[key];
              } else {
                result[key] = twoValue;
              }
            } else {
              const obj1 = result[key];
              const obj2 = twoValue;
              if (wasObjectReferenced(one, key, objects) || wasObjectReferenced(two, key, objects)) {
                delete result[key];
              } else {
                if (isObject(obj1) && isObject(obj2)) {
                  const arr1 = objects.get(obj1) || [];
                  const arr2 = objects.get(obj2) || [];
                  arr1.push({ obj: one, key });
                  arr2.push({ obj: two, key });
                  objects.set(obj1, arr1);
                  objects.set(obj2, arr2);
                }
                result[key] = mergeTwoObjects(result[key], twoValue, level, objects);
              }
            }
          }
        } else {
          result = two;
        }
      }
      return result;
    }
    __name(mergeTwoObjects, "mergeTwoObjects");
    function wasObjectReferenced(obj, key, objects) {
      const arr = objects.get(obj[key]) || [];
      for (let i2 = 0, j = arr.length; i2 < j; i2++) {
        const info = arr[i2];
        if (info.key === key && info.obj === obj) {
          return true;
        }
      }
      return false;
    }
    __name(wasObjectReferenced, "wasObjectReferenced");
    function isArray(value) {
      return Array.isArray(value);
    }
    __name(isArray, "isArray");
    function isFunction(value) {
      return typeof value === "function";
    }
    __name(isFunction, "isFunction");
    function isObject(value) {
      return !isPrimitive(value) && !isArray(value) && !isFunction(value) && typeof value === "object";
    }
    __name(isObject, "isObject");
    function isPrimitive(value) {
      return typeof value === "string" || typeof value === "number" || typeof value === "boolean" || typeof value === "undefined" || value instanceof Date || value instanceof RegExp || value === null;
    }
    __name(isPrimitive, "isPrimitive");
    function shouldMerge(one, two) {
      if (!(0, lodash_merge_1.isPlainObject)(one) || !(0, lodash_merge_1.isPlainObject)(two)) {
        return false;
      }
      return true;
    }
    __name(shouldMerge, "shouldMerge");
  }
});

// node_modules/@opentelemetry/core/build/src/utils/timeout.js
var require_timeout = __commonJS({
  "node_modules/@opentelemetry/core/build/src/utils/timeout.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.callWithTimeout = exports.TimeoutError = void 0;
    var TimeoutError = class _TimeoutError extends Error {
      static {
        __name(this, "TimeoutError");
      }
      constructor(message) {
        super(message);
        Object.setPrototypeOf(this, _TimeoutError.prototype);
      }
    };
    exports.TimeoutError = TimeoutError;
    function callWithTimeout(promise, timeout3) {
      let timeoutHandle;
      const timeoutPromise = new Promise(/* @__PURE__ */ __name(function timeoutFunction(_resolve, reject) {
        timeoutHandle = setTimeout(/* @__PURE__ */ __name(function timeoutHandler() {
          reject(new TimeoutError("Operation timed out."));
        }, "timeoutHandler"), timeout3);
      }, "timeoutFunction"));
      return Promise.race([promise, timeoutPromise]).then((result) => {
        clearTimeout(timeoutHandle);
        return result;
      }, (reason) => {
        clearTimeout(timeoutHandle);
        throw reason;
      });
    }
    __name(callWithTimeout, "callWithTimeout");
    exports.callWithTimeout = callWithTimeout;
  }
});

// node_modules/@opentelemetry/core/build/src/utils/url.js
var require_url = __commonJS({
  "node_modules/@opentelemetry/core/build/src/utils/url.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isUrlIgnored = exports.urlMatches = void 0;
    function urlMatches(url, urlToMatch) {
      if (typeof urlToMatch === "string") {
        return url === urlToMatch;
      } else {
        return !!url.match(urlToMatch);
      }
    }
    __name(urlMatches, "urlMatches");
    exports.urlMatches = urlMatches;
    function isUrlIgnored(url, ignoredUrls) {
      if (!ignoredUrls) {
        return false;
      }
      for (const ignoreUrl of ignoredUrls) {
        if (urlMatches(url, ignoreUrl)) {
          return true;
        }
      }
      return false;
    }
    __name(isUrlIgnored, "isUrlIgnored");
    exports.isUrlIgnored = isUrlIgnored;
  }
});

// node_modules/@opentelemetry/core/build/src/utils/promise.js
var require_promise = __commonJS({
  "node_modules/@opentelemetry/core/build/src/utils/promise.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Deferred = void 0;
    var Deferred = class {
      static {
        __name(this, "Deferred");
      }
      _promise;
      _resolve;
      _reject;
      constructor() {
        this._promise = new Promise((resolve, reject) => {
          this._resolve = resolve;
          this._reject = reject;
        });
      }
      get promise() {
        return this._promise;
      }
      resolve(val) {
        this._resolve(val);
      }
      reject(err) {
        this._reject(err);
      }
    };
    exports.Deferred = Deferred;
  }
});

// node_modules/@opentelemetry/core/build/src/utils/callback.js
var require_callback = __commonJS({
  "node_modules/@opentelemetry/core/build/src/utils/callback.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BindOnceFuture = void 0;
    var promise_1 = require_promise();
    var BindOnceFuture = class {
      static {
        __name(this, "BindOnceFuture");
      }
      _callback;
      _that;
      _isCalled = false;
      _deferred = new promise_1.Deferred();
      constructor(_callback, _that) {
        this._callback = _callback;
        this._that = _that;
      }
      get isCalled() {
        return this._isCalled;
      }
      get promise() {
        return this._deferred.promise;
      }
      call(...args) {
        if (!this._isCalled) {
          this._isCalled = true;
          try {
            Promise.resolve(this._callback.call(this._that, ...args)).then((val) => this._deferred.resolve(val), (err) => this._deferred.reject(err));
          } catch (err) {
            this._deferred.reject(err);
          }
        }
        return this._deferred.promise;
      }
    };
    exports.BindOnceFuture = BindOnceFuture;
  }
});

// node_modules/@opentelemetry/core/build/src/utils/configuration.js
var require_configuration = __commonJS({
  "node_modules/@opentelemetry/core/build/src/utils/configuration.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.diagLogLevelFromString = void 0;
    var api_1 = (init_esm2(), __toCommonJS(esm_exports));
    var logLevelMap = {
      ALL: api_1.DiagLogLevel.ALL,
      VERBOSE: api_1.DiagLogLevel.VERBOSE,
      DEBUG: api_1.DiagLogLevel.DEBUG,
      INFO: api_1.DiagLogLevel.INFO,
      WARN: api_1.DiagLogLevel.WARN,
      ERROR: api_1.DiagLogLevel.ERROR,
      NONE: api_1.DiagLogLevel.NONE
    };
    function diagLogLevelFromString(value) {
      if (value == null) {
        return void 0;
      }
      const resolvedLogLevel = logLevelMap[value.toUpperCase()];
      if (resolvedLogLevel == null) {
        api_1.diag.warn(`Unknown log level "${value}", expected one of ${Object.keys(logLevelMap)}, using default`);
        return api_1.DiagLogLevel.INFO;
      }
      return resolvedLogLevel;
    }
    __name(diagLogLevelFromString, "diagLogLevelFromString");
    exports.diagLogLevelFromString = diagLogLevelFromString;
  }
});

// node_modules/@opentelemetry/core/build/src/internal/exporter.js
var require_exporter = __commonJS({
  "node_modules/@opentelemetry/core/build/src/internal/exporter.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports._export = void 0;
    var api_1 = (init_esm2(), __toCommonJS(esm_exports));
    var suppress_tracing_1 = require_suppress_tracing();
    function _export(exporter, arg) {
      return new Promise((resolve) => {
        api_1.context.with((0, suppress_tracing_1.suppressTracing)(api_1.context.active()), () => {
          exporter.export(arg, (result) => {
            resolve(result);
          });
        });
      });
    }
    __name(_export, "_export");
    exports._export = _export;
  }
});

// node_modules/@opentelemetry/core/build/src/index.js
var require_src3 = __commonJS({
  "node_modules/@opentelemetry/core/build/src/index.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.internal = exports.diagLogLevelFromString = exports.BindOnceFuture = exports.urlMatches = exports.isUrlIgnored = exports.callWithTimeout = exports.TimeoutError = exports.merge = exports.TraceState = exports.unsuppressTracing = exports.suppressTracing = exports.isTracingSuppressed = exports.setRPCMetadata = exports.getRPCMetadata = exports.deleteRPCMetadata = exports.RPCType = exports.parseTraceParent = exports.W3CTraceContextPropagator = exports.TRACE_STATE_HEADER = exports.TRACE_PARENT_HEADER = exports.CompositePropagator = exports.unrefTimer = exports.otperformance = exports.getStringListFromEnv = exports.getNumberFromEnv = exports.getBooleanFromEnv = exports.getStringFromEnv = exports._globalThis = exports.SDK_INFO = exports.parseKeyPairsIntoRecord = exports.ExportResultCode = exports.timeInputToHrTime = exports.millisToHrTime = exports.isTimeInputHrTime = exports.isTimeInput = exports.hrTimeToTimeStamp = exports.hrTimeToNanoseconds = exports.hrTimeToMilliseconds = exports.hrTimeToMicroseconds = exports.hrTimeDuration = exports.hrTime = exports.getTimeOrigin = exports.addHrTimes = exports.loggingErrorHandler = exports.setGlobalErrorHandler = exports.globalErrorHandler = exports.sanitizeAttributes = exports.isAttributeValue = exports.AnchoredClock = exports.W3CBaggagePropagator = void 0;
    var W3CBaggagePropagator_1 = require_W3CBaggagePropagator();
    Object.defineProperty(exports, "W3CBaggagePropagator", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return W3CBaggagePropagator_1.W3CBaggagePropagator;
    }, "get") });
    var anchored_clock_1 = require_anchored_clock();
    Object.defineProperty(exports, "AnchoredClock", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return anchored_clock_1.AnchoredClock;
    }, "get") });
    var attributes_1 = require_attributes();
    Object.defineProperty(exports, "isAttributeValue", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return attributes_1.isAttributeValue;
    }, "get") });
    Object.defineProperty(exports, "sanitizeAttributes", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return attributes_1.sanitizeAttributes;
    }, "get") });
    var global_error_handler_1 = require_global_error_handler();
    Object.defineProperty(exports, "globalErrorHandler", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return global_error_handler_1.globalErrorHandler;
    }, "get") });
    Object.defineProperty(exports, "setGlobalErrorHandler", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return global_error_handler_1.setGlobalErrorHandler;
    }, "get") });
    var logging_error_handler_1 = require_logging_error_handler();
    Object.defineProperty(exports, "loggingErrorHandler", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return logging_error_handler_1.loggingErrorHandler;
    }, "get") });
    var time_1 = require_time();
    Object.defineProperty(exports, "addHrTimes", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return time_1.addHrTimes;
    }, "get") });
    Object.defineProperty(exports, "getTimeOrigin", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return time_1.getTimeOrigin;
    }, "get") });
    Object.defineProperty(exports, "hrTime", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return time_1.hrTime;
    }, "get") });
    Object.defineProperty(exports, "hrTimeDuration", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return time_1.hrTimeDuration;
    }, "get") });
    Object.defineProperty(exports, "hrTimeToMicroseconds", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return time_1.hrTimeToMicroseconds;
    }, "get") });
    Object.defineProperty(exports, "hrTimeToMilliseconds", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return time_1.hrTimeToMilliseconds;
    }, "get") });
    Object.defineProperty(exports, "hrTimeToNanoseconds", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return time_1.hrTimeToNanoseconds;
    }, "get") });
    Object.defineProperty(exports, "hrTimeToTimeStamp", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return time_1.hrTimeToTimeStamp;
    }, "get") });
    Object.defineProperty(exports, "isTimeInput", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return time_1.isTimeInput;
    }, "get") });
    Object.defineProperty(exports, "isTimeInputHrTime", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return time_1.isTimeInputHrTime;
    }, "get") });
    Object.defineProperty(exports, "millisToHrTime", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return time_1.millisToHrTime;
    }, "get") });
    Object.defineProperty(exports, "timeInputToHrTime", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return time_1.timeInputToHrTime;
    }, "get") });
    var ExportResult_1 = require_ExportResult();
    Object.defineProperty(exports, "ExportResultCode", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return ExportResult_1.ExportResultCode;
    }, "get") });
    var utils_1 = require_utils();
    Object.defineProperty(exports, "parseKeyPairsIntoRecord", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return utils_1.parseKeyPairsIntoRecord;
    }, "get") });
    var platform_1 = require_platform2();
    Object.defineProperty(exports, "SDK_INFO", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return platform_1.SDK_INFO;
    }, "get") });
    Object.defineProperty(exports, "_globalThis", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return platform_1._globalThis;
    }, "get") });
    Object.defineProperty(exports, "getStringFromEnv", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return platform_1.getStringFromEnv;
    }, "get") });
    Object.defineProperty(exports, "getBooleanFromEnv", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return platform_1.getBooleanFromEnv;
    }, "get") });
    Object.defineProperty(exports, "getNumberFromEnv", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return platform_1.getNumberFromEnv;
    }, "get") });
    Object.defineProperty(exports, "getStringListFromEnv", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return platform_1.getStringListFromEnv;
    }, "get") });
    Object.defineProperty(exports, "otperformance", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return platform_1.otperformance;
    }, "get") });
    Object.defineProperty(exports, "unrefTimer", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return platform_1.unrefTimer;
    }, "get") });
    var composite_1 = require_composite();
    Object.defineProperty(exports, "CompositePropagator", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return composite_1.CompositePropagator;
    }, "get") });
    var W3CTraceContextPropagator_1 = require_W3CTraceContextPropagator();
    Object.defineProperty(exports, "TRACE_PARENT_HEADER", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return W3CTraceContextPropagator_1.TRACE_PARENT_HEADER;
    }, "get") });
    Object.defineProperty(exports, "TRACE_STATE_HEADER", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return W3CTraceContextPropagator_1.TRACE_STATE_HEADER;
    }, "get") });
    Object.defineProperty(exports, "W3CTraceContextPropagator", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return W3CTraceContextPropagator_1.W3CTraceContextPropagator;
    }, "get") });
    Object.defineProperty(exports, "parseTraceParent", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return W3CTraceContextPropagator_1.parseTraceParent;
    }, "get") });
    var rpc_metadata_1 = require_rpc_metadata();
    Object.defineProperty(exports, "RPCType", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return rpc_metadata_1.RPCType;
    }, "get") });
    Object.defineProperty(exports, "deleteRPCMetadata", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return rpc_metadata_1.deleteRPCMetadata;
    }, "get") });
    Object.defineProperty(exports, "getRPCMetadata", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return rpc_metadata_1.getRPCMetadata;
    }, "get") });
    Object.defineProperty(exports, "setRPCMetadata", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return rpc_metadata_1.setRPCMetadata;
    }, "get") });
    var suppress_tracing_1 = require_suppress_tracing();
    Object.defineProperty(exports, "isTracingSuppressed", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return suppress_tracing_1.isTracingSuppressed;
    }, "get") });
    Object.defineProperty(exports, "suppressTracing", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return suppress_tracing_1.suppressTracing;
    }, "get") });
    Object.defineProperty(exports, "unsuppressTracing", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return suppress_tracing_1.unsuppressTracing;
    }, "get") });
    var TraceState_1 = require_TraceState();
    Object.defineProperty(exports, "TraceState", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return TraceState_1.TraceState;
    }, "get") });
    var merge_1 = require_merge();
    Object.defineProperty(exports, "merge", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return merge_1.merge;
    }, "get") });
    var timeout_1 = require_timeout();
    Object.defineProperty(exports, "TimeoutError", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return timeout_1.TimeoutError;
    }, "get") });
    Object.defineProperty(exports, "callWithTimeout", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return timeout_1.callWithTimeout;
    }, "get") });
    var url_1 = require_url();
    Object.defineProperty(exports, "isUrlIgnored", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return url_1.isUrlIgnored;
    }, "get") });
    Object.defineProperty(exports, "urlMatches", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return url_1.urlMatches;
    }, "get") });
    var callback_1 = require_callback();
    Object.defineProperty(exports, "BindOnceFuture", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return callback_1.BindOnceFuture;
    }, "get") });
    var configuration_1 = require_configuration();
    Object.defineProperty(exports, "diagLogLevelFromString", { enumerable: true, get: /* @__PURE__ */ __name(function() {
      return configuration_1.diagLogLevelFromString;
    }, "get") });
    var exporter_1 = require_exporter();
    exports.internal = {
      _export: exporter_1._export
    };
  }
});

// node_modules/@jsonhero/path/lib/path/query-result.js
var require_query_result = __commonJS({
  "node_modules/@jsonhero/path/lib/path/query-result.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    var QueryResult = (
      /** @class */
      function() {
        function QueryResult2(depth, path, object) {
          this.depth = 0;
          this.depth = depth;
          this.path = path;
          this.object = object;
        }
        __name(QueryResult2, "QueryResult");
        QueryResult2.prototype.flatten = function() {
          var flattenedObject = this.object;
          if (typeof this.object === "object" && Array.isArray(this.object) && this.depth > 0) {
            flattenedObject = this.object.flat(this.depth);
          }
          return new QueryResult2(0, this.path, flattenedObject);
        };
        return QueryResult2;
      }()
    );
    exports.default = QueryResult;
  }
});

// node_modules/@jsonhero/path/lib/path/simple-key-path-component.js
var require_simple_key_path_component = __commonJS({
  "node_modules/@jsonhero/path/lib/path/simple-key-path-component.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SimpleKeyPathComponent = void 0;
    var query_result_1 = require_query_result();
    var SimpleKeyPathComponent = (
      /** @class */
      function() {
        function SimpleKeyPathComponent2(keyName) {
          this.isArray = false;
          this.keyName = keyName;
          var keyAsInteger = parseInt(this.keyName, 10);
          if (isNaN(keyAsInteger)) {
            return;
          }
          var isInteger = Number.isInteger(keyAsInteger);
          if (!isInteger) {
            return;
          }
          if (keyAsInteger < 0) {
            return;
          }
          this.isArray = true;
        }
        __name(SimpleKeyPathComponent2, "SimpleKeyPathComponent");
        SimpleKeyPathComponent2.fromString = function(string) {
          var keyName = string;
          SimpleKeyPathComponent2.unescapeExpressions.forEach(function(unescapePair) {
            keyName = keyName.replace(unescapePair.search, unescapePair.replacement);
          });
          return new SimpleKeyPathComponent2(keyName);
        };
        SimpleKeyPathComponent2.prototype.toString = function() {
          var escapedString = this.keyName;
          SimpleKeyPathComponent2.escapeExpressions.forEach(function(escapePair) {
            escapedString = escapedString.replace(escapePair.search, escapePair.replacement);
          });
          return escapedString;
        };
        SimpleKeyPathComponent2.prototype.jsonPointer = function() {
          var escapedString = this.keyName;
          escapedString = escapedString.replace(/(\~)/g, "~0");
          escapedString = escapedString.replace(/(\/)/g, "~1");
          return escapedString;
        };
        SimpleKeyPathComponent2.prototype.query = function(results) {
          var newResults = [];
          for (var i2 = 0; i2 < results.length; i2++) {
            var result = results[i2];
            var object = result.object;
            if (typeof object !== "object") {
              continue;
            }
            var newObject = object[this.keyName];
            if (newObject === null) {
              continue;
            }
            var newResult = new query_result_1.default(result.depth, result.path.child(this.keyName), newObject);
            newResults.push(newResult);
          }
          return newResults;
        };
        SimpleKeyPathComponent2.escapeExpressions = [
          { search: new RegExp(/(\\)/g), replacement: "\\" },
          { search: new RegExp(/(\.)/g), replacement: "\\." }
        ];
        SimpleKeyPathComponent2.unescapeExpressions = [
          { search: new RegExp(/(\\\.)/g), replacement: "." },
          { search: new RegExp(/(\\\\)/g), replacement: "\\" },
          { search: "~1", replacement: "/" }
        ];
        return SimpleKeyPathComponent2;
      }()
    );
    exports.SimpleKeyPathComponent = SimpleKeyPathComponent;
  }
});

// node_modules/@jsonhero/path/lib/path/wildcard-path-component.js
var require_wildcard_path_component = __commonJS({
  "node_modules/@jsonhero/path/lib/path/wildcard-path-component.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WildcardPathComponent = void 0;
    var query_result_1 = require_query_result();
    var WildcardPathComponent = (
      /** @class */
      function() {
        function WildcardPathComponent2() {
          this.keyName = "*";
          this.isArray = true;
        }
        __name(WildcardPathComponent2, "WildcardPathComponent");
        WildcardPathComponent2.fromString = function(string) {
          if (string === "*") {
            return new WildcardPathComponent2();
          }
          return null;
        };
        WildcardPathComponent2.prototype.toString = function() {
          return this.keyName;
        };
        WildcardPathComponent2.prototype.jsonPointer = function() {
          throw Error("JSON Pointers don't work with wildcards");
        };
        WildcardPathComponent2.prototype.query = function(results) {
          var newResults = [];
          for (var i2 = 0; i2 < results.length; i2++) {
            var result = results[i2];
            var object = result.object;
            if (typeof object !== "object") {
              continue;
            }
            for (var key in object) {
              var newObject = object[key];
              var newResult = new query_result_1.default(result.depth + 1, result.path.child(key), newObject);
              newResults.push(newResult);
            }
          }
          return newResults;
        };
        return WildcardPathComponent2;
      }()
    );
    exports.WildcardPathComponent = WildcardPathComponent;
  }
});

// node_modules/@jsonhero/path/lib/path/start-path-component.js
var require_start_path_component = __commonJS({
  "node_modules/@jsonhero/path/lib/path/start-path-component.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    var StartPathComponent = (
      /** @class */
      function() {
        function StartPathComponent2() {
          this.keyName = "$";
          this.isArray = false;
        }
        __name(StartPathComponent2, "StartPathComponent");
        StartPathComponent2.fromString = function(string) {
          if (string === "$") {
            return new StartPathComponent2();
          }
          return null;
        };
        StartPathComponent2.prototype.toString = function() {
          return this.keyName;
        };
        StartPathComponent2.prototype.jsonPointer = function() {
          return "";
        };
        StartPathComponent2.prototype.query = function(objects) {
          return objects;
        };
        return StartPathComponent2;
      }()
    );
    exports.default = StartPathComponent;
  }
});

// node_modules/@jsonhero/path/lib/path/slice-path-component.js
var require_slice_path_component = __commonJS({
  "node_modules/@jsonhero/path/lib/path/slice-path-component.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SlicePathComponent = void 0;
    var query_result_1 = require_query_result();
    var SlicePathComponent = (
      /** @class */
      function() {
        function SlicePathComponent2(startIndex, endIndex) {
          this.endIndex = null;
          this.isArray = true;
          this.startIndex = startIndex;
          this.endIndex = endIndex;
        }
        __name(SlicePathComponent2, "SlicePathComponent");
        SlicePathComponent2.fromString = function(string) {
          if (!SlicePathComponent2.regex.test(string)) {
            return null;
          }
          SlicePathComponent2.regex.lastIndex = 0;
          var result = SlicePathComponent2.regex.exec(string);
          if (result == null || result.groups == null) {
            return null;
          }
          var startResult = result.groups.startIndex;
          var endResult = result.groups.endIndex;
          var startIndex = startResult == null || startResult === "" ? 0 : parseInt(startResult, 10);
          var endIndex = endResult == null ? null : parseInt(endResult, 10);
          if (startIndex == null && endIndex == null) {
            return null;
          }
          var isStartInteger = Number.isInteger(startIndex);
          if (!isStartInteger) {
            return null;
          }
          return new SlicePathComponent2(startIndex, endIndex);
        };
        SlicePathComponent2.prototype.toString = function() {
          return "[".concat(this.startIndex).concat(this.endIndex == null ? "" : ":" + this.endIndex, "]");
        };
        SlicePathComponent2.prototype.jsonPointer = function() {
          throw Error("JSON Pointers don't work with wildcards");
        };
        SlicePathComponent2.prototype.query = function(results) {
          var newResults = [];
          for (var i2 = 0; i2 < results.length; i2++) {
            var result = results[i2];
            var object = result.object;
            if (typeof object !== "object")
              continue;
            if (!Array.isArray(object))
              continue;
            var slicedItems = void 0;
            if (this.endIndex == null) {
              slicedItems = object.slice(this.startIndex);
            } else {
              slicedItems = object.slice(this.startIndex, this.endIndex);
            }
            for (var j = 0; j < slicedItems.length; j++) {
              var slicedItem = slicedItems[j];
              newResults.push(new query_result_1.default(result.depth + 1, result.path.child("".concat(j + this.startIndex)), slicedItem));
            }
          }
          return newResults;
        };
        SlicePathComponent2.regex = /^\[(?<startIndex>[0-9]*):(?<endIndex>\-?[0-9]*)?\]$/g;
        return SlicePathComponent2;
      }()
    );
    exports.SlicePathComponent = SlicePathComponent;
  }
});

// node_modules/@jsonhero/path/lib/path/path-builder.js
var require_path_builder = __commonJS({
  "node_modules/@jsonhero/path/lib/path/path-builder.js"(exports) {
    "use strict";
    init_esm();
    Object.defineProperty(exports, "__esModule", { value: true });
    var simple_key_path_component_1 = require_simple_key_path_component();
    var wildcard_path_component_1 = require_wildcard_path_component();
    var start_path_component_1 = require_start_path_component();
    var slice_path_component_1 = require_slice_path_component();
    var PathBuilder = (
      /** @class */
      function() {
        function PathBuilder2() {
        }
        __name(PathBuilder2, "PathBuilder");
        PathBuilder2.prototype.parse = function(path) {
          PathBuilder2.pathPattern.lastIndex = 0;
          var subPaths = path.match(PathBuilder2.pathPattern);
          var components = [new start_path_component_1.default()];
          if (subPaths == null || subPaths.length == 0 || subPaths.length == 1 && subPaths[0] == "") {
            return components;
          }
          var startIndex = 0;
          if (subPaths[0] == "$") {
            startIndex = 1;
          }
          for (var i2 = startIndex; i2 < subPaths.length; i2++) {
            var subPath = subPaths[i2];
            var pathComponent = this.parseComponent(subPath);
            components.push(pathComponent);
          }
          return components;
        };
        PathBuilder2.prototype.parsePointer = function(pointer) {
          PathBuilder2.pathPattern.lastIndex = 0;
          var subPaths = pointer.match(PathBuilder2.pointerPattern);
          var components = [new start_path_component_1.default()];
          if (subPaths == null || subPaths.length == 0 || subPaths.length == 1 && subPaths[0] == "") {
            return components;
          }
          for (var _i = 0, subPaths_1 = subPaths; _i < subPaths_1.length; _i++) {
            var subPath = subPaths_1[_i];
            components.push(this.parseComponent(subPath));
          }
          return components;
        };
        PathBuilder2.prototype.parseComponent = function(string) {
          var wildcardComponent = wildcard_path_component_1.WildcardPathComponent.fromString(string);
          if (wildcardComponent != null) {
            return wildcardComponent;
          }
          if (string == null) {
            throw new SyntaxError("Cannot create a path from null");
          }
          if (string == "") {
            throw new SyntaxError("Cannot create a path from an empty string");
          }
          var sliceComponent = slice_path_component_1.SlicePathComponent.fromString(string);
          if (sliceComponent != null) {
            return sliceComponent;
          }
          return simple_key_path_component_1.SimpleKeyPathComponent.fromString(string);
        };
        PathBuilder2.pathPattern = /(?:[^\.\\]|\\.)+/g;
        PathBuilder2.pointerPattern = /(?:[^\/\\]|\\\/)+/g;
        return PathBuilder2;
      }()
    );
    exports.default = PathBuilder;
  }
});

// node_modules/@jsonhero/path/lib/index.js
var require_lib = __commonJS({
  "node_modules/@jsonhero/path/lib/index.js"(exports) {
    "use strict";
    init_esm();
    var __spreadArray5 = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2) for (var i2 = 0, l2 = from.length, ar; i2 < l2; i2++) {
        if (ar || !(i2 in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i2);
          ar[i2] = from[i2];
        }
      }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.JSONHeroPath = void 0;
    var path_builder_1 = require_path_builder();
    var query_result_1 = require_query_result();
    var start_path_component_1 = require_start_path_component();
    var JSONHeroPath3 = (
      /** @class */
      function() {
        function JSONHeroPath4(components) {
          if (typeof components == "string") {
            var pathBuilder = new path_builder_1.default();
            this.components = pathBuilder.parse(components);
            return;
          }
          if (components.length == 0) {
            components.push(new start_path_component_1.default());
          }
          if (!(components[0] instanceof start_path_component_1.default)) {
            components.unshift(new start_path_component_1.default());
          }
          this.components = components;
        }
        __name(JSONHeroPath4, "JSONHeroPath");
        JSONHeroPath4.fromPointer = function(pointer) {
          var pathBuilder = new path_builder_1.default();
          return new JSONHeroPath4(pathBuilder.parsePointer(pointer));
        };
        Object.defineProperty(JSONHeroPath4.prototype, "root", {
          get: /* @__PURE__ */ __name(function() {
            return new JSONHeroPath4(this.components.slice(0, 1));
          }, "get"),
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(JSONHeroPath4.prototype, "isRoot", {
          get: /* @__PURE__ */ __name(function() {
            if (this.components.length > 1)
              return false;
            return this.components[0] instanceof start_path_component_1.default;
          }, "get"),
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(JSONHeroPath4.prototype, "parent", {
          get: /* @__PURE__ */ __name(function() {
            if (this.components.length == 1) {
              return null;
            }
            return new JSONHeroPath4(this.components.slice(0, -1));
          }, "get"),
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(JSONHeroPath4.prototype, "lastComponent", {
          get: /* @__PURE__ */ __name(function() {
            if (this.components.length === 0)
              return;
            return this.components[this.components.length - 1];
          }, "get"),
          enumerable: false,
          configurable: true
        });
        JSONHeroPath4.prototype.child = function(key) {
          var string = this.toString();
          return new JSONHeroPath4(string.concat(".".concat(key)));
        };
        JSONHeroPath4.prototype.replaceComponent = function(index, newKey) {
          var pathBuilder = new path_builder_1.default();
          var newComponent = pathBuilder.parseComponent(newKey);
          var newComponents = __spreadArray5([], this.components, true);
          newComponents[index] = newComponent;
          return new JSONHeroPath4(newComponents);
        };
        JSONHeroPath4.prototype.toString = function() {
          return this.components.map(function(component) {
            return component.toString();
          }).join(".");
        };
        JSONHeroPath4.prototype.jsonPointer = function() {
          if (this.components.length === 1)
            return "";
          return this.components.map(function(component) {
            return component.jsonPointer();
          }).join("/");
        };
        JSONHeroPath4.prototype.first = function(object, options) {
          if (options === void 0) {
            options = { includePath: false };
          }
          var results = this.all(object, options);
          if (results === null || results.length === 0) {
            return null;
          }
          return results[0];
        };
        JSONHeroPath4.prototype.all = function(object, options) {
          if (options === void 0) {
            options = { includePath: false };
          }
          if (this.components.length == 0)
            return [object];
          if (this.components.length == 1 && this.components[0] instanceof start_path_component_1.default)
            return [object];
          var results = [];
          var firstResult = new query_result_1.default(0, this.root, object);
          results.push(firstResult);
          for (var i2 = 0; i2 < this.components.length; i2++) {
            var component = this.components[i2];
            results = component.query(results);
            if (results === null || results.length === 0) {
              return [];
            }
          }
          var flattenedResults = results.map(function(result) {
            return result.flatten();
          });
          if (!options.includePath) {
            return flattenedResults.map(function(result) {
              return result.object;
            });
          }
          var all = [];
          for (var i2 = 0; i2 < flattenedResults.length; i2++) {
            var flattenedResult = flattenedResults[i2];
            var object_1 = {
              value: flattenedResult.object
            };
            if (options.includePath) {
              object_1.path = flattenedResult.path;
            }
            all.push(object_1);
          }
          return all;
        };
        JSONHeroPath4.prototype.set = function(object, newValue) {
          var allResults = this.all(object, { includePath: true });
          allResults.forEach(function(_a) {
            var path = _a.path;
            var parentPath = path.parent;
            var parentObject = parentPath === null || parentPath === void 0 ? void 0 : parentPath.first(object);
            if (!path.lastComponent)
              return;
            parentObject[path.lastComponent.toString()] = newValue;
          });
        };
        JSONHeroPath4.prototype.merge = function(object, mergeValue) {
          var allResults = this.all(object, { includePath: true });
          allResults.forEach(function(_a) {
            var path = _a.path;
            var parentPath = path.parent;
            var parentObject = parentPath === null || parentPath === void 0 ? void 0 : parentPath.first(object);
            if (!path.lastComponent)
              return;
            var existingValue = parentObject[path.lastComponent.toString()];
            if (Array.isArray(existingValue)) {
              parentObject[path.lastComponent.toString()] = existingValue.concat([mergeValue].flat());
            } else {
              if (typeof mergeValue != "object" || Array.isArray(mergeValue))
                return;
              for (var key in mergeValue) {
                existingValue[key] = mergeValue[key];
              }
            }
          });
        };
        return JSONHeroPath4;
      }()
    );
    exports.JSONHeroPath = JSONHeroPath3;
  }
});

// node_modules/humanize-duration/humanize-duration.js
var require_humanize_duration = __commonJS({
  "node_modules/humanize-duration/humanize-duration.js"(exports, module) {
    init_esm();
    (function() {
      var assign = Object.assign || /** @param {...any} destination */
      function(destination) {
        var source;
        for (var i2 = 1; i2 < arguments.length; i2++) {
          source = arguments[i2];
          for (var prop in source) {
            if (has(source, prop)) {
              destination[prop] = source[prop];
            }
          }
        }
        return destination;
      };
      var isArray = Array.isArray || function(arg) {
        return Object.prototype.toString.call(arg) === "[object Array]";
      };
      var GREEK = language(
        function(c2) {
          return c2 === 1 ? "χρόνος" : "χρόνια";
        },
        function(c2) {
          return c2 === 1 ? "μήνας" : "μήνες";
        },
        function(c2) {
          return c2 === 1 ? "εβδομάδα" : "εβδομάδες";
        },
        function(c2) {
          return c2 === 1 ? "μέρα" : "μέρες";
        },
        function(c2) {
          return c2 === 1 ? "ώρα" : "ώρες";
        },
        function(c2) {
          return c2 === 1 ? "λεπτό" : "λεπτά";
        },
        function(c2) {
          return c2 === 1 ? "δευτερόλεπτο" : "δευτερόλεπτα";
        },
        function(c2) {
          return (c2 === 1 ? "χιλιοστό" : "χιλιοστά") + " του δευτερολέπτου";
        },
        ","
      );
      var LANGUAGES = {
        af: language(
          "jaar",
          function(c2) {
            return "maand" + (c2 === 1 ? "" : "e");
          },
          function(c2) {
            return c2 === 1 ? "week" : "weke";
          },
          function(c2) {
            return c2 === 1 ? "dag" : "dae";
          },
          function(c2) {
            return c2 === 1 ? "uur" : "ure";
          },
          function(c2) {
            return c2 === 1 ? "minuut" : "minute";
          },
          function(c2) {
            return "sekonde" + (c2 === 1 ? "" : "s");
          },
          function(c2) {
            return "millisekonde" + (c2 === 1 ? "" : "s");
          },
          ","
        ),
        am: language("ዓመት", "ወር", "ሳምንት", "ቀን", "ሰዓት", "ደቂቃ", "ሰከንድ", "ሚሊሰከንድ"),
        ar: assign(
          language(
            function(c2) {
              return ["سنة", "سنتان", "سنوات"][getArabicForm(c2)];
            },
            function(c2) {
              return ["شهر", "شهران", "أشهر"][getArabicForm(c2)];
            },
            function(c2) {
              return ["أسبوع", "أسبوعين", "أسابيع"][getArabicForm(c2)];
            },
            function(c2) {
              return ["يوم", "يومين", "أيام"][getArabicForm(c2)];
            },
            function(c2) {
              return ["ساعة", "ساعتين", "ساعات"][getArabicForm(c2)];
            },
            function(c2) {
              return ["دقيقة", "دقيقتان", "دقائق"][getArabicForm(c2)];
            },
            function(c2) {
              return ["ثانية", "ثانيتان", "ثواني"][getArabicForm(c2)];
            },
            function(c2) {
              return ["جزء من الثانية", "جزآن من الثانية", "أجزاء من الثانية"][getArabicForm(c2)];
            },
            ","
          ),
          {
            delimiter: " ﻭ ",
            _hideCountIf2: true,
            _digitReplacements: ["۰", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"]
          }
        ),
        bg: language(
          function(c2) {
            return ["години", "година", "години"][getSlavicForm(c2)];
          },
          function(c2) {
            return ["месеца", "месец", "месеца"][getSlavicForm(c2)];
          },
          function(c2) {
            return ["седмици", "седмица", "седмици"][getSlavicForm(c2)];
          },
          function(c2) {
            return ["дни", "ден", "дни"][getSlavicForm(c2)];
          },
          function(c2) {
            return ["часа", "час", "часа"][getSlavicForm(c2)];
          },
          function(c2) {
            return ["минути", "минута", "минути"][getSlavicForm(c2)];
          },
          function(c2) {
            return ["секунди", "секунда", "секунди"][getSlavicForm(c2)];
          },
          function(c2) {
            return ["милисекунди", "милисекунда", "милисекунди"][getSlavicForm(c2)];
          },
          ","
        ),
        bn: language(
          "বছর",
          "মাস",
          "সপ্তাহ",
          "দিন",
          "ঘন্টা",
          "মিনিট",
          "সেকেন্ড",
          "মিলিসেকেন্ড"
        ),
        ca: language(
          function(c2) {
            return "any" + (c2 === 1 ? "" : "s");
          },
          function(c2) {
            return "mes" + (c2 === 1 ? "" : "os");
          },
          function(c2) {
            return "setman" + (c2 === 1 ? "a" : "es");
          },
          function(c2) {
            return "di" + (c2 === 1 ? "a" : "es");
          },
          function(c2) {
            return "hor" + (c2 === 1 ? "a" : "es");
          },
          function(c2) {
            return "minut" + (c2 === 1 ? "" : "s");
          },
          function(c2) {
            return "segon" + (c2 === 1 ? "" : "s");
          },
          function(c2) {
            return "milisegon" + (c2 === 1 ? "" : "s");
          },
          ","
        ),
        ckb: language(
          "ساڵ",
          "مانگ",
          "هەفتە",
          "ڕۆژ",
          "کاژێر",
          "خولەک",
          "چرکە",
          "میلی چرکە",
          "."
        ),
        cs: language(
          function(c2) {
            return ["rok", "roku", "roky", "let"][getCzechOrSlovakForm(c2)];
          },
          function(c2) {
            return ["měsíc", "měsíce", "měsíce", "měsíců"][getCzechOrSlovakForm(c2)];
          },
          function(c2) {
            return ["týden", "týdne", "týdny", "týdnů"][getCzechOrSlovakForm(c2)];
          },
          function(c2) {
            return ["den", "dne", "dny", "dní"][getCzechOrSlovakForm(c2)];
          },
          function(c2) {
            return ["hodina", "hodiny", "hodiny", "hodin"][getCzechOrSlovakForm(c2)];
          },
          function(c2) {
            return ["minuta", "minuty", "minuty", "minut"][getCzechOrSlovakForm(c2)];
          },
          function(c2) {
            return ["sekunda", "sekundy", "sekundy", "sekund"][getCzechOrSlovakForm(c2)];
          },
          function(c2) {
            return ["milisekunda", "milisekundy", "milisekundy", "milisekund"][getCzechOrSlovakForm(c2)];
          },
          ","
        ),
        cy: language(
          "flwyddyn",
          "mis",
          "wythnos",
          "diwrnod",
          "awr",
          "munud",
          "eiliad",
          "milieiliad"
        ),
        da: language(
          "år",
          function(c2) {
            return "måned" + (c2 === 1 ? "" : "er");
          },
          function(c2) {
            return "uge" + (c2 === 1 ? "" : "r");
          },
          function(c2) {
            return "dag" + (c2 === 1 ? "" : "e");
          },
          function(c2) {
            return "time" + (c2 === 1 ? "" : "r");
          },
          function(c2) {
            return "minut" + (c2 === 1 ? "" : "ter");
          },
          function(c2) {
            return "sekund" + (c2 === 1 ? "" : "er");
          },
          function(c2) {
            return "millisekund" + (c2 === 1 ? "" : "er");
          },
          ","
        ),
        de: language(
          function(c2) {
            return "Jahr" + (c2 === 1 ? "" : "e");
          },
          function(c2) {
            return "Monat" + (c2 === 1 ? "" : "e");
          },
          function(c2) {
            return "Woche" + (c2 === 1 ? "" : "n");
          },
          function(c2) {
            return "Tag" + (c2 === 1 ? "" : "e");
          },
          function(c2) {
            return "Stunde" + (c2 === 1 ? "" : "n");
          },
          function(c2) {
            return "Minute" + (c2 === 1 ? "" : "n");
          },
          function(c2) {
            return "Sekunde" + (c2 === 1 ? "" : "n");
          },
          function(c2) {
            return "Millisekunde" + (c2 === 1 ? "" : "n");
          },
          ","
        ),
        el: GREEK,
        en: language(
          function(c2) {
            return "year" + (c2 === 1 ? "" : "s");
          },
          function(c2) {
            return "month" + (c2 === 1 ? "" : "s");
          },
          function(c2) {
            return "week" + (c2 === 1 ? "" : "s");
          },
          function(c2) {
            return "day" + (c2 === 1 ? "" : "s");
          },
          function(c2) {
            return "hour" + (c2 === 1 ? "" : "s");
          },
          function(c2) {
            return "minute" + (c2 === 1 ? "" : "s");
          },
          function(c2) {
            return "second" + (c2 === 1 ? "" : "s");
          },
          function(c2) {
            return "millisecond" + (c2 === 1 ? "" : "s");
          }
        ),
        eo: language(
          function(c2) {
            return "jaro" + (c2 === 1 ? "" : "j");
          },
          function(c2) {
            return "monato" + (c2 === 1 ? "" : "j");
          },
          function(c2) {
            return "semajno" + (c2 === 1 ? "" : "j");
          },
          function(c2) {
            return "tago" + (c2 === 1 ? "" : "j");
          },
          function(c2) {
            return "horo" + (c2 === 1 ? "" : "j");
          },
          function(c2) {
            return "minuto" + (c2 === 1 ? "" : "j");
          },
          function(c2) {
            return "sekundo" + (c2 === 1 ? "" : "j");
          },
          function(c2) {
            return "milisekundo" + (c2 === 1 ? "" : "j");
          },
          ","
        ),
        es: language(
          function(c2) {
            return "año" + (c2 === 1 ? "" : "s");
          },
          function(c2) {
            return "mes" + (c2 === 1 ? "" : "es");
          },
          function(c2) {
            return "semana" + (c2 === 1 ? "" : "s");
          },
          function(c2) {
            return "día" + (c2 === 1 ? "" : "s");
          },
          function(c2) {
            return "hora" + (c2 === 1 ? "" : "s");
          },
          function(c2) {
            return "minuto" + (c2 === 1 ? "" : "s");
          },
          function(c2) {
            return "segundo" + (c2 === 1 ? "" : "s");
          },
          function(c2) {
            return "milisegundo" + (c2 === 1 ? "" : "s");
          },
          ","
        ),
        et: language(
          function(c2) {
            return "aasta" + (c2 === 1 ? "" : "t");
          },
          function(c2) {
            return "kuu" + (c2 === 1 ? "" : "d");
          },
          function(c2) {
            return "nädal" + (c2 === 1 ? "" : "at");
          },
          function(c2) {
            return "päev" + (c2 === 1 ? "" : "a");
          },
          function(c2) {
            return "tund" + (c2 === 1 ? "" : "i");
          },
          function(c2) {
            return "minut" + (c2 === 1 ? "" : "it");
          },
          function(c2) {
            return "sekund" + (c2 === 1 ? "" : "it");
          },
          function(c2) {
            return "millisekund" + (c2 === 1 ? "" : "it");
          },
          ","
        ),
        eu: language(
          "urte",
          "hilabete",
          "aste",
          "egun",
          "ordu",
          "minutu",
          "segundo",
          "milisegundo",
          ","
        ),
        fa: language(
          "سال",
          "ماه",
          "هفته",
          "روز",
          "ساعت",
          "دقیقه",
          "ثانیه",
          "میلی ثانیه"
        ),
        fi: language(
          function(c2) {
            return c2 === 1 ? "vuosi" : "vuotta";
          },
          function(c2) {
            return c2 === 1 ? "kuukausi" : "kuukautta";
          },
          function(c2) {
            return "viikko" + (c2 === 1 ? "" : "a");
          },
          function(c2) {
            return "päivä" + (c2 === 1 ? "" : "ä");
          },
          function(c2) {
            return "tunti" + (c2 === 1 ? "" : "a");
          },
          function(c2) {
            return "minuutti" + (c2 === 1 ? "" : "a");
          },
          function(c2) {
            return "sekunti" + (c2 === 1 ? "" : "a");
          },
          function(c2) {
            return "millisekunti" + (c2 === 1 ? "" : "a");
          },
          ","
        ),
        fo: language(
          "ár",
          function(c2) {
            return c2 === 1 ? "mánaður" : "mánaðir";
          },
          function(c2) {
            return c2 === 1 ? "vika" : "vikur";
          },
          function(c2) {
            return c2 === 1 ? "dagur" : "dagar";
          },
          function(c2) {
            return c2 === 1 ? "tími" : "tímar";
          },
          function(c2) {
            return c2 === 1 ? "minuttur" : "minuttir";
          },
          "sekund",
          "millisekund",
          ","
        ),
        fr: language(
          function(c2) {
            return "an" + (c2 >= 2 ? "s" : "");
          },
          "mois",
          function(c2) {
            return "semaine" + (c2 >= 2 ? "s" : "");
          },
          function(c2) {
            return "jour" + (c2 >= 2 ? "s" : "");
          },
          function(c2) {
            return "heure" + (c2 >= 2 ? "s" : "");
          },
          function(c2) {
            return "minute" + (c2 >= 2 ? "s" : "");
          },
          function(c2) {
            return "seconde" + (c2 >= 2 ? "s" : "");
          },
          function(c2) {
            return "milliseconde" + (c2 >= 2 ? "s" : "");
          },
          ","
        ),
        gr: GREEK,
        he: language(
          function(c2) {
            return c2 === 1 ? "שנה" : "שנים";
          },
          function(c2) {
            return c2 === 1 ? "חודש" : "חודשים";
          },
          function(c2) {
            return c2 === 1 ? "שבוע" : "שבועות";
          },
          function(c2) {
            return c2 === 1 ? "יום" : "ימים";
          },
          function(c2) {
            return c2 === 1 ? "שעה" : "שעות";
          },
          function(c2) {
            return c2 === 1 ? "דקה" : "דקות";
          },
          function(c2) {
            return c2 === 1 ? "שניה" : "שניות";
          },
          function(c2) {
            return c2 === 1 ? "מילישנייה" : "מילישניות";
          }
        ),
        hr: language(
          function(c2) {
            if (c2 % 10 === 2 || c2 % 10 === 3 || c2 % 10 === 4) {
              return "godine";
            }
            return "godina";
          },
          function(c2) {
            if (c2 === 1) {
              return "mjesec";
            } else if (c2 === 2 || c2 === 3 || c2 === 4) {
              return "mjeseca";
            }
            return "mjeseci";
          },
          function(c2) {
            if (c2 % 10 === 1 && c2 !== 11) {
              return "tjedan";
            }
            return "tjedna";
          },
          function(c2) {
            return c2 === 1 ? "dan" : "dana";
          },
          function(c2) {
            if (c2 === 1) {
              return "sat";
            } else if (c2 === 2 || c2 === 3 || c2 === 4) {
              return "sata";
            }
            return "sati";
          },
          function(c2) {
            var mod10 = c2 % 10;
            if ((mod10 === 2 || mod10 === 3 || mod10 === 4) && (c2 < 10 || c2 > 14)) {
              return "minute";
            }
            return "minuta";
          },
          function(c2) {
            var mod10 = c2 % 10;
            if (mod10 === 5 || Math.floor(c2) === c2 && c2 >= 10 && c2 <= 19) {
              return "sekundi";
            } else if (mod10 === 1) {
              return "sekunda";
            } else if (mod10 === 2 || mod10 === 3 || mod10 === 4) {
              return "sekunde";
            }
            return "sekundi";
          },
          function(c2) {
            if (c2 === 1) {
              return "milisekunda";
            } else if (c2 % 10 === 2 || c2 % 10 === 3 || c2 % 10 === 4) {
              return "milisekunde";
            }
            return "milisekundi";
          },
          ","
        ),
        hi: language(
          "साल",
          function(c2) {
            return c2 === 1 ? "महीना" : "महीने";
          },
          function(c2) {
            return c2 === 1 ? "हफ़्ता" : "हफ्ते";
          },
          "दिन",
          function(c2) {
            return c2 === 1 ? "घंटा" : "घंटे";
          },
          "मिनट",
          "सेकंड",
          "मिलीसेकंड"
        ),
        hu: language(
          "év",
          "hónap",
          "hét",
          "nap",
          "óra",
          "perc",
          "másodperc",
          "ezredmásodperc",
          ","
        ),
        id: language(
          "tahun",
          "bulan",
          "minggu",
          "hari",
          "jam",
          "menit",
          "detik",
          "milidetik"
        ),
        is: language(
          "ár",
          function(c2) {
            return "mánuð" + (c2 === 1 ? "ur" : "ir");
          },
          function(c2) {
            return "vik" + (c2 === 1 ? "a" : "ur");
          },
          function(c2) {
            return "dag" + (c2 === 1 ? "ur" : "ar");
          },
          function(c2) {
            return "klukkutím" + (c2 === 1 ? "i" : "ar");
          },
          function(c2) {
            return "mínút" + (c2 === 1 ? "a" : "ur");
          },
          function(c2) {
            return "sekúnd" + (c2 === 1 ? "a" : "ur");
          },
          function(c2) {
            return "millisekúnd" + (c2 === 1 ? "a" : "ur");
          }
        ),
        it: language(
          function(c2) {
            return "ann" + (c2 === 1 ? "o" : "i");
          },
          function(c2) {
            return "mes" + (c2 === 1 ? "e" : "i");
          },
          function(c2) {
            return "settiman" + (c2 === 1 ? "a" : "e");
          },
          function(c2) {
            return "giorn" + (c2 === 1 ? "o" : "i");
          },
          function(c2) {
            return "or" + (c2 === 1 ? "a" : "e");
          },
          function(c2) {
            return "minut" + (c2 === 1 ? "o" : "i");
          },
          function(c2) {
            return "second" + (c2 === 1 ? "o" : "i");
          },
          function(c2) {
            return "millisecond" + (c2 === 1 ? "o" : "i");
          },
          ","
        ),
        ja: language("年", "ヶ月", "週間", "日", "時間", "分", "秒", "ミリ秒"),
        km: language(
          "ឆ្នាំ",
          "ខែ",
          "សប្តាហ៍",
          "ថ្ងៃ",
          "ម៉ោង",
          "នាទី",
          "វិនាទី",
          "មិល្លីវិនាទី"
        ),
        kn: language(
          function(c2) {
            return c2 === 1 ? "ವರ್ಷ" : "ವರ್ಷಗಳು";
          },
          function(c2) {
            return c2 === 1 ? "ತಿಂಗಳು" : "ತಿಂಗಳುಗಳು";
          },
          function(c2) {
            return c2 === 1 ? "ವಾರ" : "ವಾರಗಳು";
          },
          function(c2) {
            return c2 === 1 ? "ದಿನ" : "ದಿನಗಳು";
          },
          function(c2) {
            return c2 === 1 ? "ಗಂಟೆ" : "ಗಂಟೆಗಳು";
          },
          function(c2) {
            return c2 === 1 ? "ನಿಮಿಷ" : "ನಿಮಿಷಗಳು";
          },
          function(c2) {
            return c2 === 1 ? "ಸೆಕೆಂಡ್" : "ಸೆಕೆಂಡುಗಳು";
          },
          function(c2) {
            return c2 === 1 ? "ಮಿಲಿಸೆಕೆಂಡ್" : "ಮಿಲಿಸೆಕೆಂಡುಗಳು";
          }
        ),
        ko: language("년", "개월", "주일", "일", "시간", "분", "초", "밀리 초"),
        ku: language(
          "sal",
          "meh",
          "hefte",
          "roj",
          "seet",
          "deqe",
          "saniye",
          "mîlîçirk",
          ","
        ),
        lo: language(
          "ປີ",
          "ເດືອນ",
          "ອາທິດ",
          "ມື້",
          "ຊົ່ວໂມງ",
          "ນາທີ",
          "ວິນາທີ",
          "ມິນລິວິນາທີ",
          ","
        ),
        lt: language(
          function(c2) {
            return c2 % 10 === 0 || c2 % 100 >= 10 && c2 % 100 <= 20 ? "metų" : "metai";
          },
          function(c2) {
            return ["mėnuo", "mėnesiai", "mėnesių"][getLithuanianForm(c2)];
          },
          function(c2) {
            return ["savaitė", "savaitės", "savaičių"][getLithuanianForm(c2)];
          },
          function(c2) {
            return ["diena", "dienos", "dienų"][getLithuanianForm(c2)];
          },
          function(c2) {
            return ["valanda", "valandos", "valandų"][getLithuanianForm(c2)];
          },
          function(c2) {
            return ["minutė", "minutės", "minučių"][getLithuanianForm(c2)];
          },
          function(c2) {
            return ["sekundė", "sekundės", "sekundžių"][getLithuanianForm(c2)];
          },
          function(c2) {
            return ["milisekundė", "milisekundės", "milisekundžių"][getLithuanianForm(c2)];
          },
          ","
        ),
        lv: language(
          function(c2) {
            return getLatvianForm(c2) ? "gads" : "gadi";
          },
          function(c2) {
            return getLatvianForm(c2) ? "mēnesis" : "mēneši";
          },
          function(c2) {
            return getLatvianForm(c2) ? "nedēļa" : "nedēļas";
          },
          function(c2) {
            return getLatvianForm(c2) ? "diena" : "dienas";
          },
          function(c2) {
            return getLatvianForm(c2) ? "stunda" : "stundas";
          },
          function(c2) {
            return getLatvianForm(c2) ? "minūte" : "minūtes";
          },
          function(c2) {
            return getLatvianForm(c2) ? "sekunde" : "sekundes";
          },
          function(c2) {
            return getLatvianForm(c2) ? "milisekunde" : "milisekundes";
          },
          ","
        ),
        mk: language(
          function(c2) {
            return c2 === 1 ? "година" : "години";
          },
          function(c2) {
            return c2 === 1 ? "месец" : "месеци";
          },
          function(c2) {
            return c2 === 1 ? "недела" : "недели";
          },
          function(c2) {
            return c2 === 1 ? "ден" : "дена";
          },
          function(c2) {
            return c2 === 1 ? "час" : "часа";
          },
          function(c2) {
            return c2 === 1 ? "минута" : "минути";
          },
          function(c2) {
            return c2 === 1 ? "секунда" : "секунди";
          },
          function(c2) {
            return c2 === 1 ? "милисекунда" : "милисекунди";
          },
          ","
        ),
        mn: language(
          "жил",
          "сар",
          "долоо хоног",
          "өдөр",
          "цаг",
          "минут",
          "секунд",
          "миллисекунд"
        ),
        mr: language(
          function(c2) {
            return c2 === 1 ? "वर्ष" : "वर्षे";
          },
          function(c2) {
            return c2 === 1 ? "महिना" : "महिने";
          },
          function(c2) {
            return c2 === 1 ? "आठवडा" : "आठवडे";
          },
          "दिवस",
          "तास",
          function(c2) {
            return c2 === 1 ? "मिनिट" : "मिनिटे";
          },
          "सेकंद",
          "मिलिसेकंद"
        ),
        ms: language(
          "tahun",
          "bulan",
          "minggu",
          "hari",
          "jam",
          "minit",
          "saat",
          "milisaat"
        ),
        nl: language(
          "jaar",
          function(c2) {
            return c2 === 1 ? "maand" : "maanden";
          },
          function(c2) {
            return c2 === 1 ? "week" : "weken";
          },
          function(c2) {
            return c2 === 1 ? "dag" : "dagen";
          },
          "uur",
          function(c2) {
            return c2 === 1 ? "minuut" : "minuten";
          },
          function(c2) {
            return c2 === 1 ? "seconde" : "seconden";
          },
          function(c2) {
            return c2 === 1 ? "milliseconde" : "milliseconden";
          },
          ","
        ),
        no: language(
          "år",
          function(c2) {
            return "måned" + (c2 === 1 ? "" : "er");
          },
          function(c2) {
            return "uke" + (c2 === 1 ? "" : "r");
          },
          function(c2) {
            return "dag" + (c2 === 1 ? "" : "er");
          },
          function(c2) {
            return "time" + (c2 === 1 ? "" : "r");
          },
          function(c2) {
            return "minutt" + (c2 === 1 ? "" : "er");
          },
          function(c2) {
            return "sekund" + (c2 === 1 ? "" : "er");
          },
          function(c2) {
            return "millisekund" + (c2 === 1 ? "" : "er");
          },
          ","
        ),
        pl: language(
          function(c2) {
            return ["rok", "roku", "lata", "lat"][getPolishForm(c2)];
          },
          function(c2) {
            return ["miesiąc", "miesiąca", "miesiące", "miesięcy"][getPolishForm(c2)];
          },
          function(c2) {
            return ["tydzień", "tygodnia", "tygodnie", "tygodni"][getPolishForm(c2)];
          },
          function(c2) {
            return ["dzień", "dnia", "dni", "dni"][getPolishForm(c2)];
          },
          function(c2) {
            return ["godzina", "godziny", "godziny", "godzin"][getPolishForm(c2)];
          },
          function(c2) {
            return ["minuta", "minuty", "minuty", "minut"][getPolishForm(c2)];
          },
          function(c2) {
            return ["sekunda", "sekundy", "sekundy", "sekund"][getPolishForm(c2)];
          },
          function(c2) {
            return ["milisekunda", "milisekundy", "milisekundy", "milisekund"][getPolishForm(c2)];
          },
          ","
        ),
        pt: language(
          function(c2) {
            return "ano" + (c2 === 1 ? "" : "s");
          },
          function(c2) {
            return c2 === 1 ? "mês" : "meses";
          },
          function(c2) {
            return "semana" + (c2 === 1 ? "" : "s");
          },
          function(c2) {
            return "dia" + (c2 === 1 ? "" : "s");
          },
          function(c2) {
            return "hora" + (c2 === 1 ? "" : "s");
          },
          function(c2) {
            return "minuto" + (c2 === 1 ? "" : "s");
          },
          function(c2) {
            return "segundo" + (c2 === 1 ? "" : "s");
          },
          function(c2) {
            return "milissegundo" + (c2 === 1 ? "" : "s");
          },
          ","
        ),
        ro: language(
          function(c2) {
            return c2 === 1 ? "an" : "ani";
          },
          function(c2) {
            return c2 === 1 ? "lună" : "luni";
          },
          function(c2) {
            return c2 === 1 ? "săptămână" : "săptămâni";
          },
          function(c2) {
            return c2 === 1 ? "zi" : "zile";
          },
          function(c2) {
            return c2 === 1 ? "oră" : "ore";
          },
          function(c2) {
            return c2 === 1 ? "minut" : "minute";
          },
          function(c2) {
            return c2 === 1 ? "secundă" : "secunde";
          },
          function(c2) {
            return c2 === 1 ? "milisecundă" : "milisecunde";
          },
          ","
        ),
        ru: language(
          function(c2) {
            return ["лет", "год", "года"][getSlavicForm(c2)];
          },
          function(c2) {
            return ["месяцев", "месяц", "месяца"][getSlavicForm(c2)];
          },
          function(c2) {
            return ["недель", "неделя", "недели"][getSlavicForm(c2)];
          },
          function(c2) {
            return ["дней", "день", "дня"][getSlavicForm(c2)];
          },
          function(c2) {
            return ["часов", "час", "часа"][getSlavicForm(c2)];
          },
          function(c2) {
            return ["минут", "минута", "минуты"][getSlavicForm(c2)];
          },
          function(c2) {
            return ["секунд", "секунда", "секунды"][getSlavicForm(c2)];
          },
          function(c2) {
            return ["миллисекунд", "миллисекунда", "миллисекунды"][getSlavicForm(c2)];
          },
          ","
        ),
        sq: language(
          function(c2) {
            return c2 === 1 ? "vit" : "vjet";
          },
          "muaj",
          "javë",
          "ditë",
          "orë",
          function(c2) {
            return "minut" + (c2 === 1 ? "ë" : "a");
          },
          function(c2) {
            return "sekond" + (c2 === 1 ? "ë" : "a");
          },
          function(c2) {
            return "milisekond" + (c2 === 1 ? "ë" : "a");
          },
          ","
        ),
        sr: language(
          function(c2) {
            return ["години", "година", "године"][getSlavicForm(c2)];
          },
          function(c2) {
            return ["месеци", "месец", "месеца"][getSlavicForm(c2)];
          },
          function(c2) {
            return ["недељи", "недеља", "недеље"][getSlavicForm(c2)];
          },
          function(c2) {
            return ["дани", "дан", "дана"][getSlavicForm(c2)];
          },
          function(c2) {
            return ["сати", "сат", "сата"][getSlavicForm(c2)];
          },
          function(c2) {
            return ["минута", "минут", "минута"][getSlavicForm(c2)];
          },
          function(c2) {
            return ["секунди", "секунда", "секунде"][getSlavicForm(c2)];
          },
          function(c2) {
            return ["милисекунди", "милисекунда", "милисекунде"][getSlavicForm(c2)];
          },
          ","
        ),
        sr_Latn: language(
          function(c2) {
            return ["godini", "godina", "godine"][getSlavicForm(c2)];
          },
          function(c2) {
            return ["meseci", "mesec", "meseca"][getSlavicForm(c2)];
          },
          function(c2) {
            return ["nedelji", "nedelja", "nedelje"][getSlavicForm(c2)];
          },
          function(c2) {
            return ["dani", "dan", "dana"][getSlavicForm(c2)];
          },
          function(c2) {
            return ["sati", "sat", "sata"][getSlavicForm(c2)];
          },
          function(c2) {
            return ["minuta", "minut", "minuta"][getSlavicForm(c2)];
          },
          function(c2) {
            return ["sekundi", "sekunda", "sekunde"][getSlavicForm(c2)];
          },
          function(c2) {
            return ["milisekundi", "milisekunda", "milisekunde"][getSlavicForm(c2)];
          },
          ","
        ),
        ta: language(
          function(c2) {
            return c2 === 1 ? "வருடம்" : "ஆண்டுகள்";
          },
          function(c2) {
            return c2 === 1 ? "மாதம்" : "மாதங்கள்";
          },
          function(c2) {
            return c2 === 1 ? "வாரம்" : "வாரங்கள்";
          },
          function(c2) {
            return c2 === 1 ? "நாள்" : "நாட்கள்";
          },
          function(c2) {
            return c2 === 1 ? "மணி" : "மணிநேரம்";
          },
          function(c2) {
            return "நிமிட" + (c2 === 1 ? "ம்" : "ங்கள்");
          },
          function(c2) {
            return "வினாடி" + (c2 === 1 ? "" : "கள்");
          },
          function(c2) {
            return "மில்லி விநாடி" + (c2 === 1 ? "" : "கள்");
          }
        ),
        te: language(
          function(c2) {
            return "సంవత్స" + (c2 === 1 ? "రం" : "రాల");
          },
          function(c2) {
            return "నెల" + (c2 === 1 ? "" : "ల");
          },
          function(c2) {
            return c2 === 1 ? "వారం" : "వారాలు";
          },
          function(c2) {
            return "రోజు" + (c2 === 1 ? "" : "లు");
          },
          function(c2) {
            return "గంట" + (c2 === 1 ? "" : "లు");
          },
          function(c2) {
            return c2 === 1 ? "నిమిషం" : "నిమిషాలు";
          },
          function(c2) {
            return c2 === 1 ? "సెకను" : "సెకన్లు";
          },
          function(c2) {
            return c2 === 1 ? "మిల్లీసెకన్" : "మిల్లీసెకన్లు";
          }
        ),
        uk: language(
          function(c2) {
            return ["років", "рік", "роки"][getSlavicForm(c2)];
          },
          function(c2) {
            return ["місяців", "місяць", "місяці"][getSlavicForm(c2)];
          },
          function(c2) {
            return ["тижнів", "тиждень", "тижні"][getSlavicForm(c2)];
          },
          function(c2) {
            return ["днів", "день", "дні"][getSlavicForm(c2)];
          },
          function(c2) {
            return ["годин", "година", "години"][getSlavicForm(c2)];
          },
          function(c2) {
            return ["хвилин", "хвилина", "хвилини"][getSlavicForm(c2)];
          },
          function(c2) {
            return ["секунд", "секунда", "секунди"][getSlavicForm(c2)];
          },
          function(c2) {
            return ["мілісекунд", "мілісекунда", "мілісекунди"][getSlavicForm(c2)];
          },
          ","
        ),
        ur: language(
          "سال",
          function(c2) {
            return c2 === 1 ? "مہینہ" : "مہینے";
          },
          function(c2) {
            return c2 === 1 ? "ہفتہ" : "ہفتے";
          },
          "دن",
          function(c2) {
            return c2 === 1 ? "گھنٹہ" : "گھنٹے";
          },
          "منٹ",
          "سیکنڈ",
          "ملی سیکنڈ"
        ),
        sk: language(
          function(c2) {
            return ["rok", "roky", "roky", "rokov"][getCzechOrSlovakForm(c2)];
          },
          function(c2) {
            return ["mesiac", "mesiace", "mesiace", "mesiacov"][getCzechOrSlovakForm(c2)];
          },
          function(c2) {
            return ["týždeň", "týždne", "týždne", "týždňov"][getCzechOrSlovakForm(c2)];
          },
          function(c2) {
            return ["deň", "dni", "dni", "dní"][getCzechOrSlovakForm(c2)];
          },
          function(c2) {
            return ["hodina", "hodiny", "hodiny", "hodín"][getCzechOrSlovakForm(c2)];
          },
          function(c2) {
            return ["minúta", "minúty", "minúty", "minút"][getCzechOrSlovakForm(c2)];
          },
          function(c2) {
            return ["sekunda", "sekundy", "sekundy", "sekúnd"][getCzechOrSlovakForm(c2)];
          },
          function(c2) {
            return ["milisekunda", "milisekundy", "milisekundy", "milisekúnd"][getCzechOrSlovakForm(c2)];
          },
          ","
        ),
        sl: language(
          function(c2) {
            if (c2 % 10 === 1) {
              return "leto";
            } else if (c2 % 100 === 2) {
              return "leti";
            } else if (c2 % 100 === 3 || c2 % 100 === 4 || Math.floor(c2) !== c2 && c2 % 100 <= 5) {
              return "leta";
            } else {
              return "let";
            }
          },
          function(c2) {
            if (c2 % 10 === 1) {
              return "mesec";
            } else if (c2 % 100 === 2 || Math.floor(c2) !== c2 && c2 % 100 <= 5) {
              return "meseca";
            } else if (c2 % 10 === 3 || c2 % 10 === 4) {
              return "mesece";
            } else {
              return "mesecev";
            }
          },
          function(c2) {
            if (c2 % 10 === 1) {
              return "teden";
            } else if (c2 % 10 === 2 || Math.floor(c2) !== c2 && c2 % 100 <= 4) {
              return "tedna";
            } else if (c2 % 10 === 3 || c2 % 10 === 4) {
              return "tedne";
            } else {
              return "tednov";
            }
          },
          function(c2) {
            return c2 % 100 === 1 ? "dan" : "dni";
          },
          function(c2) {
            if (c2 % 10 === 1) {
              return "ura";
            } else if (c2 % 100 === 2) {
              return "uri";
            } else if (c2 % 10 === 3 || c2 % 10 === 4 || Math.floor(c2) !== c2) {
              return "ure";
            } else {
              return "ur";
            }
          },
          function(c2) {
            if (c2 % 10 === 1) {
              return "minuta";
            } else if (c2 % 10 === 2) {
              return "minuti";
            } else if (c2 % 10 === 3 || c2 % 10 === 4 || Math.floor(c2) !== c2 && c2 % 100 <= 4) {
              return "minute";
            } else {
              return "minut";
            }
          },
          function(c2) {
            if (c2 % 10 === 1) {
              return "sekunda";
            } else if (c2 % 100 === 2) {
              return "sekundi";
            } else if (c2 % 100 === 3 || c2 % 100 === 4 || Math.floor(c2) !== c2) {
              return "sekunde";
            } else {
              return "sekund";
            }
          },
          function(c2) {
            if (c2 % 10 === 1) {
              return "milisekunda";
            } else if (c2 % 100 === 2) {
              return "milisekundi";
            } else if (c2 % 100 === 3 || c2 % 100 === 4 || Math.floor(c2) !== c2) {
              return "milisekunde";
            } else {
              return "milisekund";
            }
          },
          ","
        ),
        sv: language(
          "år",
          function(c2) {
            return "månad" + (c2 === 1 ? "" : "er");
          },
          function(c2) {
            return "veck" + (c2 === 1 ? "a" : "or");
          },
          function(c2) {
            return "dag" + (c2 === 1 ? "" : "ar");
          },
          function(c2) {
            return "timm" + (c2 === 1 ? "e" : "ar");
          },
          function(c2) {
            return "minut" + (c2 === 1 ? "" : "er");
          },
          function(c2) {
            return "sekund" + (c2 === 1 ? "" : "er");
          },
          function(c2) {
            return "millisekund" + (c2 === 1 ? "" : "er");
          },
          ","
        ),
        sw: assign(
          language(
            function(c2) {
              return c2 === 1 ? "mwaka" : "miaka";
            },
            function(c2) {
              return c2 === 1 ? "mwezi" : "miezi";
            },
            "wiki",
            function(c2) {
              return c2 === 1 ? "siku" : "masiku";
            },
            function(c2) {
              return c2 === 1 ? "saa" : "masaa";
            },
            "dakika",
            "sekunde",
            "milisekunde"
          ),
          { _numberFirst: true }
        ),
        tr: language(
          "yıl",
          "ay",
          "hafta",
          "gün",
          "saat",
          "dakika",
          "saniye",
          "milisaniye",
          ","
        ),
        th: language(
          "ปี",
          "เดือน",
          "สัปดาห์",
          "วัน",
          "ชั่วโมง",
          "นาที",
          "วินาที",
          "มิลลิวินาที"
        ),
        uz: language(
          "yil",
          "oy",
          "hafta",
          "kun",
          "soat",
          "minut",
          "sekund",
          "millisekund"
        ),
        uz_CYR: language(
          "йил",
          "ой",
          "ҳафта",
          "кун",
          "соат",
          "минут",
          "секунд",
          "миллисекунд"
        ),
        vi: language(
          "năm",
          "tháng",
          "tuần",
          "ngày",
          "giờ",
          "phút",
          "giây",
          "mili giây",
          ","
        ),
        zh_CN: language("年", "个月", "周", "天", "小时", "分钟", "秒", "毫秒"),
        zh_TW: language("年", "個月", "周", "天", "小時", "分鐘", "秒", "毫秒")
      };
      function language(y2, mo, w, d2, h, m2, s, ms, decimal) {
        var result = { y: y2, mo, w, d: d2, h, m: m2, s, ms };
        if (typeof decimal !== "undefined") {
          result.decimal = decimal;
        }
        return result;
      }
      __name(language, "language");
      function getArabicForm(c2) {
        if (c2 === 2) {
          return 1;
        }
        if (c2 > 2 && c2 < 11) {
          return 2;
        }
        return 0;
      }
      __name(getArabicForm, "getArabicForm");
      function getPolishForm(c2) {
        if (c2 === 1) {
          return 0;
        }
        if (Math.floor(c2) !== c2) {
          return 1;
        }
        if (c2 % 10 >= 2 && c2 % 10 <= 4 && !(c2 % 100 > 10 && c2 % 100 < 20)) {
          return 2;
        }
        return 3;
      }
      __name(getPolishForm, "getPolishForm");
      function getSlavicForm(c2) {
        if (Math.floor(c2) !== c2) {
          return 2;
        }
        if (c2 % 100 >= 5 && c2 % 100 <= 20 || c2 % 10 >= 5 && c2 % 10 <= 9 || c2 % 10 === 0) {
          return 0;
        }
        if (c2 % 10 === 1) {
          return 1;
        }
        if (c2 > 1) {
          return 2;
        }
        return 0;
      }
      __name(getSlavicForm, "getSlavicForm");
      function getCzechOrSlovakForm(c2) {
        if (c2 === 1) {
          return 0;
        }
        if (Math.floor(c2) !== c2) {
          return 1;
        }
        if (c2 % 10 >= 2 && c2 % 10 <= 4 && c2 % 100 < 10) {
          return 2;
        }
        return 3;
      }
      __name(getCzechOrSlovakForm, "getCzechOrSlovakForm");
      function getLithuanianForm(c2) {
        if (c2 === 1 || c2 % 10 === 1 && c2 % 100 > 20) {
          return 0;
        }
        if (Math.floor(c2) !== c2 || c2 % 10 >= 2 && c2 % 100 > 20 || c2 % 10 >= 2 && c2 % 100 < 10) {
          return 1;
        }
        return 2;
      }
      __name(getLithuanianForm, "getLithuanianForm");
      function getLatvianForm(c2) {
        return c2 % 10 === 1 && c2 % 100 !== 11;
      }
      __name(getLatvianForm, "getLatvianForm");
      function has(obj, key) {
        return Object.prototype.hasOwnProperty.call(obj, key);
      }
      __name(has, "has");
      function getLanguage(options) {
        var possibleLanguages = [options.language];
        if (has(options, "fallbacks")) {
          if (isArray(options.fallbacks) && options.fallbacks.length) {
            possibleLanguages = possibleLanguages.concat(options.fallbacks);
          } else {
            throw new Error("fallbacks must be an array with at least one element");
          }
        }
        for (var i2 = 0; i2 < possibleLanguages.length; i2++) {
          var languageToTry = possibleLanguages[i2];
          if (has(options.languages, languageToTry)) {
            return options.languages[languageToTry];
          }
          if (has(LANGUAGES, languageToTry)) {
            return LANGUAGES[languageToTry];
          }
        }
        throw new Error("No language found.");
      }
      __name(getLanguage, "getLanguage");
      function renderPiece(piece, language2, options) {
        var unitName = piece.unitName;
        var unitCount = piece.unitCount;
        var spacer = options.spacer;
        var maxDecimalPoints = options.maxDecimalPoints;
        var decimal;
        if (has(options, "decimal")) {
          decimal = options.decimal;
        } else if (has(language2, "decimal")) {
          decimal = language2.decimal;
        } else {
          decimal = ".";
        }
        var digitReplacements;
        if ("digitReplacements" in options) {
          digitReplacements = options.digitReplacements;
        } else if ("_digitReplacements" in language2) {
          digitReplacements = language2._digitReplacements;
        }
        var formattedCount;
        var normalizedUnitCount = maxDecimalPoints === void 0 ? unitCount : Math.floor(unitCount * Math.pow(10, maxDecimalPoints)) / Math.pow(10, maxDecimalPoints);
        var countStr = normalizedUnitCount.toString();
        if (language2._hideCountIf2 && unitCount === 2) {
          formattedCount = "";
          spacer = "";
        } else {
          if (digitReplacements) {
            formattedCount = "";
            for (var i2 = 0; i2 < countStr.length; i2++) {
              var character = countStr[i2];
              if (character === ".") {
                formattedCount += decimal;
              } else {
                formattedCount += digitReplacements[
                  /** @type {"0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"} */
                  character
                ];
              }
            }
          } else {
            formattedCount = countStr.replace(".", decimal);
          }
        }
        var languageWord = language2[unitName];
        var word;
        if (typeof languageWord === "function") {
          word = languageWord(unitCount);
        } else {
          word = languageWord;
        }
        if (language2._numberFirst) {
          return word + spacer + formattedCount;
        }
        return formattedCount + spacer + word;
      }
      __name(renderPiece, "renderPiece");
      function getPieces(ms, options) {
        var unitName;
        var i2;
        var unitCount;
        var msRemaining;
        var units = options.units;
        var unitMeasures = options.unitMeasures;
        var largest = "largest" in options ? options.largest : Infinity;
        if (!units.length) return [];
        var unitCounts = {};
        msRemaining = ms;
        for (i2 = 0; i2 < units.length; i2++) {
          unitName = units[i2];
          var unitMs = unitMeasures[unitName];
          var isLast = i2 === units.length - 1;
          unitCount = isLast ? msRemaining / unitMs : Math.floor(msRemaining / unitMs);
          unitCounts[unitName] = unitCount;
          msRemaining -= unitCount * unitMs;
        }
        if (options.round) {
          var unitsRemainingBeforeRound = largest;
          for (i2 = 0; i2 < units.length; i2++) {
            unitName = units[i2];
            unitCount = unitCounts[unitName];
            if (unitCount === 0) continue;
            unitsRemainingBeforeRound--;
            if (unitsRemainingBeforeRound === 0) {
              for (var j = i2 + 1; j < units.length; j++) {
                var smallerUnitName = units[j];
                var smallerUnitCount = unitCounts[smallerUnitName];
                unitCounts[unitName] += smallerUnitCount * unitMeasures[smallerUnitName] / unitMeasures[unitName];
                unitCounts[smallerUnitName] = 0;
              }
              break;
            }
          }
          for (i2 = units.length - 1; i2 >= 0; i2--) {
            unitName = units[i2];
            unitCount = unitCounts[unitName];
            if (unitCount === 0) continue;
            var rounded = Math.round(unitCount);
            unitCounts[unitName] = rounded;
            if (i2 === 0) break;
            var previousUnitName = units[i2 - 1];
            var previousUnitMs = unitMeasures[previousUnitName];
            var amountOfPreviousUnit = Math.floor(
              rounded * unitMeasures[unitName] / previousUnitMs
            );
            if (amountOfPreviousUnit) {
              unitCounts[previousUnitName] += amountOfPreviousUnit;
              unitCounts[unitName] = 0;
            } else {
              break;
            }
          }
        }
        var result = [];
        for (i2 = 0; i2 < units.length && result.length < largest; i2++) {
          unitName = units[i2];
          unitCount = unitCounts[unitName];
          if (unitCount) {
            result.push({ unitName, unitCount });
          }
        }
        return result;
      }
      __name(getPieces, "getPieces");
      function formatPieces(pieces, options) {
        var language2 = getLanguage(options);
        if (!pieces.length) {
          var units = options.units;
          var smallestUnitName = units[units.length - 1];
          return renderPiece(
            { unitName: smallestUnitName, unitCount: 0 },
            language2,
            options
          );
        }
        var conjunction = options.conjunction;
        var serialComma = options.serialComma;
        var delimiter;
        if (has(options, "delimiter")) {
          delimiter = options.delimiter;
        } else if (has(language2, "delimiter")) {
          delimiter = language2.delimiter;
        } else {
          delimiter = ", ";
        }
        var renderedPieces = [];
        for (var i2 = 0; i2 < pieces.length; i2++) {
          renderedPieces.push(renderPiece(pieces[i2], language2, options));
        }
        if (!conjunction || pieces.length === 1) {
          return renderedPieces.join(delimiter);
        }
        if (pieces.length === 2) {
          return renderedPieces.join(conjunction);
        }
        return renderedPieces.slice(0, -1).join(delimiter) + (serialComma ? "," : "") + conjunction + renderedPieces.slice(-1);
      }
      __name(formatPieces, "formatPieces");
      function humanizer(passedOptions) {
        var result = /* @__PURE__ */ __name(function humanizer2(ms, humanizerOptions) {
          ms = Math.abs(ms);
          var options = assign({}, result, humanizerOptions || {});
          var pieces = getPieces(ms, options);
          return formatPieces(pieces, options);
        }, "humanizer");
        return assign(
          result,
          {
            language: "en",
            spacer: " ",
            conjunction: "",
            serialComma: true,
            units: ["y", "mo", "w", "d", "h", "m", "s"],
            languages: {},
            round: false,
            unitMeasures: {
              y: 315576e5,
              mo: 26298e5,
              w: 6048e5,
              d: 864e5,
              h: 36e5,
              m: 6e4,
              s: 1e3,
              ms: 1
            }
          },
          passedOptions
        );
      }
      __name(humanizer, "humanizer");
      var humanizeDuration2 = assign(humanizer({}), {
        getSupportedLanguages: /* @__PURE__ */ __name(function getSupportedLanguages() {
          var result = [];
          for (var language2 in LANGUAGES) {
            if (has(LANGUAGES, language2) && language2 !== "gr") {
              result.push(language2);
            }
          }
          return result;
        }, "getSupportedLanguages"),
        humanizer
      });
      if (typeof define === "function" && define.amd) {
        define(function() {
          return humanizeDuration2;
        });
      } else if (typeof module !== "undefined" && module.exports) {
        module.exports = humanizeDuration2;
      } else {
        this.humanizeDuration = humanizeDuration2;
      }
    })();
  }
});

// node_modules/@trigger.dev/core/dist/esm/v3/logger-api.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/logger/index.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/logger/taskLogger.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/icons.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/semanticInternalAttributes.js
init_esm();
var SemanticInternalAttributes = {
  ENVIRONMENT_ID: "ctx.environment.id",
  ENVIRONMENT_TYPE: "ctx.environment.type",
  ORGANIZATION_ID: "ctx.organization.id",
  ORGANIZATION_SLUG: "ctx.organization.slug",
  ORGANIZATION_NAME: "ctx.organization.name",
  PROJECT_ID: "ctx.project.id",
  PROJECT_REF: "ctx.project.ref",
  PROJECT_NAME: "ctx.project.title",
  PROJECT_DIR: "project.dir",
  ATTEMPT_ID: "ctx.attempt.id",
  ATTEMPT_NUMBER: "ctx.attempt.number",
  RUN_ID: "ctx.run.id",
  RUN_IS_TEST: "ctx.run.isTest",
  ORIGINAL_RUN_ID: "$original_run_id",
  BATCH_ID: "ctx.batch.id",
  TASK_SLUG: "ctx.task.id",
  TASK_PATH: "ctx.task.filePath",
  TASK_EXPORT_NAME: "ctx.task.exportName",
  QUEUE_NAME: "ctx.queue.name",
  QUEUE_ID: "ctx.queue.id",
  MACHINE_PRESET_NAME: "ctx.machine.name",
  MACHINE_PRESET_CPU: "ctx.machine.cpu",
  MACHINE_PRESET_MEMORY: "ctx.machine.memory",
  MACHINE_PRESET_CENTS_PER_MS: "ctx.machine.centsPerMs",
  SKIP_SPAN_PARTIAL: "$span.skip_partial",
  SPAN_PARTIAL: "$span.partial",
  SPAN_ID: "$span.span_id",
  ENTITY_TYPE: "$entity.type",
  ENTITY_ID: "$entity.id",
  OUTPUT: "$output",
  OUTPUT_TYPE: "$mime_type_output",
  STYLE: "$style",
  STYLE_ICON: "$style.icon",
  STYLE_VARIANT: "$style.variant",
  STYLE_ACCESSORY: "$style.accessory",
  COLLAPSED: "$collapsed",
  METADATA: "$metadata",
  TRIGGER: "$trigger",
  PAYLOAD: "$payload",
  PAYLOAD_TYPE: "$mime_type_payload",
  SHOW: "$show",
  SHOW_ACTIONS: "$show.actions",
  WORKER_ID: "worker.id",
  WORKER_VERSION: "worker.version",
  CLI_VERSION: "cli.version",
  SDK_VERSION: "sdk.version",
  SDK_LANGUAGE: "sdk.language",
  RETRY_AT: "retry.at",
  RETRY_DELAY: "retry.delay",
  RETRY_COUNT: "retry.count",
  LINK_TITLE: "$link.title",
  IDEMPOTENCY_KEY: "ctx.run.idempotencyKey",
  USAGE_DURATION_MS: "$usage.durationMs",
  USAGE_COST_IN_CENTS: "$usage.costInCents",
  RATE_LIMIT_LIMIT: "response.rateLimit.limit",
  RATE_LIMIT_REMAINING: "response.rateLimit.remaining",
  RATE_LIMIT_RESET: "response.rateLimit.reset",
  SPAN_ATTEMPT: "$span.attempt",
  METRIC_EVENTS: "$metrics.events",
  EXECUTION_ENVIRONMENT: "exec_env",
  WARM_START: "warm_start",
  ATTEMPT_EXECUTION_COUNT: "$trigger.executionCount"
};

// node_modules/@trigger.dev/core/dist/esm/v3/utils/flattenAttributes.js
init_esm();
var NULL_SENTINEL = "$@null((";
var CIRCULAR_REFERENCE_SENTINEL = "$@circular((";
function flattenAttributes(obj, prefix, maxAttributeCount) {
  const flattener = new AttributeFlattener(maxAttributeCount);
  flattener.doFlatten(obj, prefix);
  return flattener.attributes;
}
__name(flattenAttributes, "flattenAttributes");
var AttributeFlattener = class {
  static {
    __name(this, "AttributeFlattener");
  }
  maxAttributeCount;
  seen = /* @__PURE__ */ new WeakSet();
  attributeCounter = 0;
  result = {};
  constructor(maxAttributeCount) {
    this.maxAttributeCount = maxAttributeCount;
  }
  get attributes() {
    return this.result;
  }
  canAddMoreAttributes() {
    return this.maxAttributeCount === void 0 || this.attributeCounter < this.maxAttributeCount;
  }
  addAttribute(key, value) {
    if (!this.canAddMoreAttributes()) {
      return false;
    }
    this.result[key] = value;
    this.attributeCounter++;
    return true;
  }
  doFlatten(obj, prefix) {
    if (!this.canAddMoreAttributes()) {
      return;
    }
    if (obj === void 0) {
      return;
    }
    if (obj === null) {
      this.addAttribute(prefix || "", NULL_SENTINEL);
      return;
    }
    if (typeof obj === "string") {
      this.addAttribute(prefix || "", obj);
      return;
    }
    if (typeof obj === "number") {
      this.addAttribute(prefix || "", obj);
      return;
    }
    if (typeof obj === "boolean") {
      this.addAttribute(prefix || "", obj);
      return;
    }
    if (obj instanceof Date) {
      this.addAttribute(prefix || "", obj.toISOString());
      return;
    }
    if (obj instanceof Error) {
      this.addAttribute(`${prefix || "error"}.name`, obj.name);
      this.addAttribute(`${prefix || "error"}.message`, obj.message);
      if (obj.stack) {
        this.addAttribute(`${prefix || "error"}.stack`, obj.stack);
      }
      return;
    }
    if (typeof obj === "function") {
      const funcName = obj.name || "anonymous";
      this.addAttribute(prefix || "", `[Function: ${funcName}]`);
      return;
    }
    if (obj instanceof Set) {
      let index = 0;
      for (const item of obj) {
        if (!this.canAddMoreAttributes())
          break;
        this.#processValue(item, `${prefix || "set"}.[${index}]`);
        index++;
      }
      return;
    }
    if (obj instanceof Map) {
      for (const [key, value] of obj) {
        if (!this.canAddMoreAttributes())
          break;
        const keyStr = typeof key === "string" ? key : String(key);
        this.#processValue(value, `${prefix || "map"}.${keyStr}`);
      }
      return;
    }
    if (typeof File !== "undefined" && obj instanceof File) {
      this.addAttribute(`${prefix || "file"}.name`, obj.name);
      this.addAttribute(`${prefix || "file"}.size`, obj.size);
      this.addAttribute(`${prefix || "file"}.type`, obj.type);
      this.addAttribute(`${prefix || "file"}.lastModified`, obj.lastModified);
      return;
    }
    if (typeof ReadableStream !== "undefined" && obj instanceof ReadableStream) {
      this.addAttribute(`${prefix || "stream"}.type`, "ReadableStream");
      this.addAttribute(`${prefix || "stream"}.locked`, obj.locked);
      return;
    }
    if (typeof WritableStream !== "undefined" && obj instanceof WritableStream) {
      this.addAttribute(`${prefix || "stream"}.type`, "WritableStream");
      this.addAttribute(`${prefix || "stream"}.locked`, obj.locked);
      return;
    }
    if (obj instanceof Promise) {
      this.addAttribute(prefix || "promise", "[Promise object]");
      return;
    }
    if (obj instanceof RegExp) {
      this.addAttribute(`${prefix || "regexp"}.source`, obj.source);
      this.addAttribute(`${prefix || "regexp"}.flags`, obj.flags);
      return;
    }
    if (typeof URL !== "undefined" && obj instanceof URL) {
      this.addAttribute(`${prefix || "url"}.href`, obj.href);
      this.addAttribute(`${prefix || "url"}.protocol`, obj.protocol);
      this.addAttribute(`${prefix || "url"}.host`, obj.host);
      this.addAttribute(`${prefix || "url"}.pathname`, obj.pathname);
      return;
    }
    if (obj instanceof ArrayBuffer) {
      this.addAttribute(`${prefix || "arraybuffer"}.byteLength`, obj.byteLength);
      return;
    }
    if (ArrayBuffer.isView(obj)) {
      const typedArray = obj;
      this.addAttribute(`${prefix || "typedarray"}.constructor`, typedArray.constructor.name);
      this.addAttribute(`${prefix || "typedarray"}.length`, typedArray.length);
      this.addAttribute(`${prefix || "typedarray"}.byteLength`, typedArray.byteLength);
      this.addAttribute(`${prefix || "typedarray"}.byteOffset`, typedArray.byteOffset);
      return;
    }
    if (obj !== null && typeof obj === "object" && this.seen.has(obj)) {
      this.addAttribute(prefix || "", CIRCULAR_REFERENCE_SENTINEL);
      return;
    }
    if (obj !== null && typeof obj === "object") {
      this.seen.add(obj);
    }
    for (const [key, value] of Object.entries(obj)) {
      if (!this.canAddMoreAttributes()) {
        break;
      }
      const newPrefix = `${prefix ? `${prefix}.` : ""}${Array.isArray(obj) ? `[${key}]` : key}`;
      if (Array.isArray(value)) {
        for (let i2 = 0; i2 < value.length; i2++) {
          if (!this.canAddMoreAttributes()) {
            break;
          }
          this.#processValue(value[i2], `${newPrefix}.[${i2}]`);
        }
      } else {
        this.#processValue(value, newPrefix);
      }
    }
  }
  #processValue(value, prefix) {
    if (!this.canAddMoreAttributes()) {
      return;
    }
    if (value === void 0) {
      return;
    }
    if (value === null) {
      this.addAttribute(prefix, NULL_SENTINEL);
      return;
    }
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      this.addAttribute(prefix, value);
      return;
    }
    if (typeof value === "object" || typeof value === "function") {
      this.doFlatten(value, prefix);
    } else {
      this.addAttribute(prefix, String(value));
    }
  }
};

// node_modules/@trigger.dev/core/dist/esm/v3/clock-api.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/clock/index.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/utils/globals.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/utils/platform.js
init_esm();
var _globalThis = typeof globalThis === "object" ? globalThis : global;

// node_modules/@trigger.dev/core/dist/esm/v3/utils/globals.js
var GLOBAL_TRIGGER_DOT_DEV_KEY = Symbol.for(`dev.trigger.ts.api`);
var _global = _globalThis;
function registerGlobal(type, instance, allowOverride = false) {
  const api = _global[GLOBAL_TRIGGER_DOT_DEV_KEY] = _global[GLOBAL_TRIGGER_DOT_DEV_KEY] ?? {};
  if (!allowOverride && api[type]) {
    const err = new Error(`trigger.dev: Attempted duplicate registration of API: ${type}`);
    return false;
  }
  api[type] = instance;
  return true;
}
__name(registerGlobal, "registerGlobal");
function getGlobal(type) {
  return _global[GLOBAL_TRIGGER_DOT_DEV_KEY]?.[type];
}
__name(getGlobal, "getGlobal");
function unregisterGlobal(type) {
  const api = _global[GLOBAL_TRIGGER_DOT_DEV_KEY];
  if (api) {
    delete api[type];
  }
}
__name(unregisterGlobal, "unregisterGlobal");

// node_modules/@trigger.dev/core/dist/esm/v3/clock/simpleClock.js
init_esm();
var import_precise_date = __toESM(require_src2(), 1);
var SimpleClock = class {
  static {
    __name(this, "SimpleClock");
  }
  preciseNow() {
    const now = new import_precise_date.PreciseDate();
    const nowStruct = now.toStruct();
    return [nowStruct.seconds, nowStruct.nanos];
  }
  reset() {
  }
};

// node_modules/@trigger.dev/core/dist/esm/v3/clock/index.js
var API_NAME = "clock";
var SIMPLE_CLOCK = new SimpleClock();
var ClockAPI = class _ClockAPI {
  static {
    __name(this, "ClockAPI");
  }
  static _instance;
  constructor() {
  }
  static getInstance() {
    if (!this._instance) {
      this._instance = new _ClockAPI();
    }
    return this._instance;
  }
  setGlobalClock(clock2) {
    return registerGlobal(API_NAME, clock2);
  }
  preciseNow() {
    return this.#getClock().preciseNow();
  }
  reset() {
    this.#getClock().reset();
  }
  #getClock() {
    return getGlobal(API_NAME) ?? SIMPLE_CLOCK;
  }
};

// node_modules/@trigger.dev/core/dist/esm/v3/clock-api.js
var clock = ClockAPI.getInstance();

// node_modules/@trigger.dev/core/dist/esm/v3/logger/taskLogger.js
var NoopTaskLogger = class {
  static {
    __name(this, "NoopTaskLogger");
  }
  debug() {
  }
  log() {
  }
  info() {
  }
  warn() {
  }
  error() {
  }
  trace(name2, fn) {
    return fn({});
  }
  startSpan() {
    return {};
  }
};

// node_modules/@trigger.dev/core/dist/esm/v3/logger/index.js
var API_NAME2 = "logger";
var NOOP_TASK_LOGGER = new NoopTaskLogger();
var LoggerAPI = class _LoggerAPI {
  static {
    __name(this, "LoggerAPI");
  }
  static _instance;
  constructor() {
  }
  static getInstance() {
    if (!this._instance) {
      this._instance = new _LoggerAPI();
    }
    return this._instance;
  }
  disable() {
    unregisterGlobal(API_NAME2);
  }
  setGlobalTaskLogger(taskLogger) {
    return registerGlobal(API_NAME2, taskLogger);
  }
  debug(message, metadata2) {
    this.#getTaskLogger().debug(message, metadata2);
  }
  log(message, metadata2) {
    this.#getTaskLogger().log(message, metadata2);
  }
  info(message, metadata2) {
    this.#getTaskLogger().info(message, metadata2);
  }
  warn(message, metadata2) {
    this.#getTaskLogger().warn(message, metadata2);
  }
  error(message, metadata2) {
    this.#getTaskLogger().error(message, metadata2);
  }
  trace(name2, fn, options) {
    return this.#getTaskLogger().trace(name2, fn, options);
  }
  startSpan(name2, options) {
    return this.#getTaskLogger().startSpan(name2, options);
  }
  #getTaskLogger() {
    return getGlobal(API_NAME2) ?? NOOP_TASK_LOGGER;
  }
};

// node_modules/@trigger.dev/core/dist/esm/v3/logger-api.js
var logger = LoggerAPI.getInstance();

// node_modules/@trigger.dev/sdk/dist/esm/v3/config.js
init_esm();
function defineConfig(config) {
  return config;
}
__name(defineConfig, "defineConfig");

// node_modules/@trigger.dev/sdk/dist/esm/v3/wait.js
init_esm();
init_esm2();

// node_modules/@trigger.dev/core/dist/esm/v3/index.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/apiClient/index.js
init_esm();

// node_modules/zod/index.js
init_esm();

// node_modules/zod/v3/external.js
var external_exports = {};
__export(external_exports, {
  BRAND: () => BRAND,
  DIRTY: () => DIRTY,
  EMPTY_PATH: () => EMPTY_PATH,
  INVALID: () => INVALID,
  NEVER: () => NEVER,
  OK: () => OK,
  ParseStatus: () => ParseStatus,
  Schema: () => ZodType,
  ZodAny: () => ZodAny,
  ZodArray: () => ZodArray,
  ZodBigInt: () => ZodBigInt,
  ZodBoolean: () => ZodBoolean,
  ZodBranded: () => ZodBranded,
  ZodCatch: () => ZodCatch,
  ZodDate: () => ZodDate,
  ZodDefault: () => ZodDefault,
  ZodDiscriminatedUnion: () => ZodDiscriminatedUnion,
  ZodEffects: () => ZodEffects,
  ZodEnum: () => ZodEnum,
  ZodError: () => ZodError,
  ZodFirstPartyTypeKind: () => ZodFirstPartyTypeKind,
  ZodFunction: () => ZodFunction,
  ZodIntersection: () => ZodIntersection,
  ZodIssueCode: () => ZodIssueCode,
  ZodLazy: () => ZodLazy,
  ZodLiteral: () => ZodLiteral,
  ZodMap: () => ZodMap,
  ZodNaN: () => ZodNaN,
  ZodNativeEnum: () => ZodNativeEnum,
  ZodNever: () => ZodNever,
  ZodNull: () => ZodNull,
  ZodNullable: () => ZodNullable,
  ZodNumber: () => ZodNumber,
  ZodObject: () => ZodObject,
  ZodOptional: () => ZodOptional,
  ZodParsedType: () => ZodParsedType,
  ZodPipeline: () => ZodPipeline,
  ZodPromise: () => ZodPromise,
  ZodReadonly: () => ZodReadonly,
  ZodRecord: () => ZodRecord,
  ZodSchema: () => ZodType,
  ZodSet: () => ZodSet,
  ZodString: () => ZodString,
  ZodSymbol: () => ZodSymbol,
  ZodTransformer: () => ZodEffects,
  ZodTuple: () => ZodTuple,
  ZodType: () => ZodType,
  ZodUndefined: () => ZodUndefined,
  ZodUnion: () => ZodUnion,
  ZodUnknown: () => ZodUnknown,
  ZodVoid: () => ZodVoid,
  addIssueToContext: () => addIssueToContext,
  any: () => anyType,
  array: () => arrayType,
  bigint: () => bigIntType,
  boolean: () => booleanType,
  coerce: () => coerce,
  custom: () => custom,
  date: () => dateType,
  datetimeRegex: () => datetimeRegex,
  defaultErrorMap: () => en_default,
  discriminatedUnion: () => discriminatedUnionType,
  effect: () => effectsType,
  enum: () => enumType,
  function: () => functionType,
  getErrorMap: () => getErrorMap,
  getParsedType: () => getParsedType,
  instanceof: () => instanceOfType,
  intersection: () => intersectionType,
  isAborted: () => isAborted,
  isAsync: () => isAsync,
  isDirty: () => isDirty,
  isValid: () => isValid,
  late: () => late,
  lazy: () => lazyType,
  literal: () => literalType,
  makeIssue: () => makeIssue,
  map: () => mapType,
  nan: () => nanType,
  nativeEnum: () => nativeEnumType,
  never: () => neverType,
  null: () => nullType,
  nullable: () => nullableType,
  number: () => numberType,
  object: () => objectType,
  objectUtil: () => objectUtil,
  oboolean: () => oboolean,
  onumber: () => onumber,
  optional: () => optionalType,
  ostring: () => ostring,
  pipeline: () => pipelineType,
  preprocess: () => preprocessType,
  promise: () => promiseType,
  quotelessJson: () => quotelessJson,
  record: () => recordType,
  set: () => setType,
  setErrorMap: () => setErrorMap,
  strictObject: () => strictObjectType,
  string: () => stringType,
  symbol: () => symbolType,
  transformer: () => effectsType,
  tuple: () => tupleType,
  undefined: () => undefinedType,
  union: () => unionType,
  unknown: () => unknownType,
  util: () => util,
  void: () => voidType
});
init_esm();

// node_modules/zod/v3/errors.js
init_esm();

// node_modules/zod/v3/locales/en.js
init_esm();

// node_modules/zod/v3/ZodError.js
init_esm();

// node_modules/zod/v3/helpers/util.js
init_esm();
var util;
(function(util2) {
  util2.assertEqual = (_2) => {
  };
  function assertIs(_arg) {
  }
  __name(assertIs, "assertIs");
  util2.assertIs = assertIs;
  function assertNever(_x) {
    throw new Error();
  }
  __name(assertNever, "assertNever");
  util2.assertNever = assertNever;
  util2.arrayToEnum = (items) => {
    const obj = {};
    for (const item of items) {
      obj[item] = item;
    }
    return obj;
  };
  util2.getValidEnumValues = (obj) => {
    const validKeys = util2.objectKeys(obj).filter((k) => typeof obj[obj[k]] !== "number");
    const filtered = {};
    for (const k of validKeys) {
      filtered[k] = obj[k];
    }
    return util2.objectValues(filtered);
  };
  util2.objectValues = (obj) => {
    return util2.objectKeys(obj).map(function(e) {
      return obj[e];
    });
  };
  util2.objectKeys = typeof Object.keys === "function" ? (obj) => Object.keys(obj) : (object) => {
    const keys = [];
    for (const key in object) {
      if (Object.prototype.hasOwnProperty.call(object, key)) {
        keys.push(key);
      }
    }
    return keys;
  };
  util2.find = (arr, checker) => {
    for (const item of arr) {
      if (checker(item))
        return item;
    }
    return void 0;
  };
  util2.isInteger = typeof Number.isInteger === "function" ? (val) => Number.isInteger(val) : (val) => typeof val === "number" && Number.isFinite(val) && Math.floor(val) === val;
  function joinValues(array, separator = " | ") {
    return array.map((val) => typeof val === "string" ? `'${val}'` : val).join(separator);
  }
  __name(joinValues, "joinValues");
  util2.joinValues = joinValues;
  util2.jsonStringifyReplacer = (_2, value) => {
    if (typeof value === "bigint") {
      return value.toString();
    }
    return value;
  };
})(util || (util = {}));
var objectUtil;
(function(objectUtil2) {
  objectUtil2.mergeShapes = (first, second) => {
    return {
      ...first,
      ...second
      // second overwrites first
    };
  };
})(objectUtil || (objectUtil = {}));
var ZodParsedType = util.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]);
var getParsedType = /* @__PURE__ */ __name((data) => {
  const t2 = typeof data;
  switch (t2) {
    case "undefined":
      return ZodParsedType.undefined;
    case "string":
      return ZodParsedType.string;
    case "number":
      return Number.isNaN(data) ? ZodParsedType.nan : ZodParsedType.number;
    case "boolean":
      return ZodParsedType.boolean;
    case "function":
      return ZodParsedType.function;
    case "bigint":
      return ZodParsedType.bigint;
    case "symbol":
      return ZodParsedType.symbol;
    case "object":
      if (Array.isArray(data)) {
        return ZodParsedType.array;
      }
      if (data === null) {
        return ZodParsedType.null;
      }
      if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
        return ZodParsedType.promise;
      }
      if (typeof Map !== "undefined" && data instanceof Map) {
        return ZodParsedType.map;
      }
      if (typeof Set !== "undefined" && data instanceof Set) {
        return ZodParsedType.set;
      }
      if (typeof Date !== "undefined" && data instanceof Date) {
        return ZodParsedType.date;
      }
      return ZodParsedType.object;
    default:
      return ZodParsedType.unknown;
  }
}, "getParsedType");

// node_modules/zod/v3/ZodError.js
var ZodIssueCode = util.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
var quotelessJson = /* @__PURE__ */ __name((obj) => {
  const json = JSON.stringify(obj, null, 2);
  return json.replace(/"([^"]+)":/g, "$1:");
}, "quotelessJson");
var ZodError = class _ZodError extends Error {
  static {
    __name(this, "ZodError");
  }
  get errors() {
    return this.issues;
  }
  constructor(issues) {
    super();
    this.issues = [];
    this.addIssue = (sub) => {
      this.issues = [...this.issues, sub];
    };
    this.addIssues = (subs = []) => {
      this.issues = [...this.issues, ...subs];
    };
    const actualProto = new.target.prototype;
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(this, actualProto);
    } else {
      this.__proto__ = actualProto;
    }
    this.name = "ZodError";
    this.issues = issues;
  }
  format(_mapper) {
    const mapper = _mapper || function(issue) {
      return issue.message;
    };
    const fieldErrors = { _errors: [] };
    const processError = /* @__PURE__ */ __name((error) => {
      for (const issue of error.issues) {
        if (issue.code === "invalid_union") {
          issue.unionErrors.map(processError);
        } else if (issue.code === "invalid_return_type") {
          processError(issue.returnTypeError);
        } else if (issue.code === "invalid_arguments") {
          processError(issue.argumentsError);
        } else if (issue.path.length === 0) {
          fieldErrors._errors.push(mapper(issue));
        } else {
          let curr = fieldErrors;
          let i2 = 0;
          while (i2 < issue.path.length) {
            const el = issue.path[i2];
            const terminal = i2 === issue.path.length - 1;
            if (!terminal) {
              curr[el] = curr[el] || { _errors: [] };
            } else {
              curr[el] = curr[el] || { _errors: [] };
              curr[el]._errors.push(mapper(issue));
            }
            curr = curr[el];
            i2++;
          }
        }
      }
    }, "processError");
    processError(this);
    return fieldErrors;
  }
  static assert(value) {
    if (!(value instanceof _ZodError)) {
      throw new Error(`Not a ZodError: ${value}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, util.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(mapper = (issue) => issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of this.issues) {
      if (sub.path.length > 0) {
        const firstEl = sub.path[0];
        fieldErrors[firstEl] = fieldErrors[firstEl] || [];
        fieldErrors[firstEl].push(mapper(sub));
      } else {
        formErrors.push(mapper(sub));
      }
    }
    return { formErrors, fieldErrors };
  }
  get formErrors() {
    return this.flatten();
  }
};
ZodError.create = (issues) => {
  const error = new ZodError(issues);
  return error;
};

// node_modules/zod/v3/locales/en.js
var errorMap = /* @__PURE__ */ __name((issue, _ctx) => {
  let message;
  switch (issue.code) {
    case ZodIssueCode.invalid_type:
      if (issue.received === ZodParsedType.undefined) {
        message = "Required";
      } else {
        message = `Expected ${issue.expected}, received ${issue.received}`;
      }
      break;
    case ZodIssueCode.invalid_literal:
      message = `Invalid literal value, expected ${JSON.stringify(issue.expected, util.jsonStringifyReplacer)}`;
      break;
    case ZodIssueCode.unrecognized_keys:
      message = `Unrecognized key(s) in object: ${util.joinValues(issue.keys, ", ")}`;
      break;
    case ZodIssueCode.invalid_union:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_union_discriminator:
      message = `Invalid discriminator value. Expected ${util.joinValues(issue.options)}`;
      break;
    case ZodIssueCode.invalid_enum_value:
      message = `Invalid enum value. Expected ${util.joinValues(issue.options)}, received '${issue.received}'`;
      break;
    case ZodIssueCode.invalid_arguments:
      message = `Invalid function arguments`;
      break;
    case ZodIssueCode.invalid_return_type:
      message = `Invalid function return type`;
      break;
    case ZodIssueCode.invalid_date:
      message = `Invalid date`;
      break;
    case ZodIssueCode.invalid_string:
      if (typeof issue.validation === "object") {
        if ("includes" in issue.validation) {
          message = `Invalid input: must include "${issue.validation.includes}"`;
          if (typeof issue.validation.position === "number") {
            message = `${message} at one or more positions greater than or equal to ${issue.validation.position}`;
          }
        } else if ("startsWith" in issue.validation) {
          message = `Invalid input: must start with "${issue.validation.startsWith}"`;
        } else if ("endsWith" in issue.validation) {
          message = `Invalid input: must end with "${issue.validation.endsWith}"`;
        } else {
          util.assertNever(issue.validation);
        }
      } else if (issue.validation !== "regex") {
        message = `Invalid ${issue.validation}`;
      } else {
        message = "Invalid";
      }
      break;
    case ZodIssueCode.too_small:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `more than`} ${issue.minimum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? "exactly" : issue.inclusive ? `at least` : `over`} ${issue.minimum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "bigint")
        message = `Number must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${issue.minimum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly equal to ` : issue.inclusive ? `greater than or equal to ` : `greater than `}${new Date(Number(issue.minimum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.too_big:
      if (issue.type === "array")
        message = `Array must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `less than`} ${issue.maximum} element(s)`;
      else if (issue.type === "string")
        message = `String must contain ${issue.exact ? `exactly` : issue.inclusive ? `at most` : `under`} ${issue.maximum} character(s)`;
      else if (issue.type === "number")
        message = `Number must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "bigint")
        message = `BigInt must be ${issue.exact ? `exactly` : issue.inclusive ? `less than or equal to` : `less than`} ${issue.maximum}`;
      else if (issue.type === "date")
        message = `Date must be ${issue.exact ? `exactly` : issue.inclusive ? `smaller than or equal to` : `smaller than`} ${new Date(Number(issue.maximum))}`;
      else
        message = "Invalid input";
      break;
    case ZodIssueCode.custom:
      message = `Invalid input`;
      break;
    case ZodIssueCode.invalid_intersection_types:
      message = `Intersection results could not be merged`;
      break;
    case ZodIssueCode.not_multiple_of:
      message = `Number must be a multiple of ${issue.multipleOf}`;
      break;
    case ZodIssueCode.not_finite:
      message = "Number must be finite";
      break;
    default:
      message = _ctx.defaultError;
      util.assertNever(issue);
  }
  return { message };
}, "errorMap");
var en_default = errorMap;

// node_modules/zod/v3/errors.js
var overrideErrorMap = en_default;
function setErrorMap(map) {
  overrideErrorMap = map;
}
__name(setErrorMap, "setErrorMap");
function getErrorMap() {
  return overrideErrorMap;
}
__name(getErrorMap, "getErrorMap");

// node_modules/zod/v3/helpers/parseUtil.js
init_esm();
var makeIssue = /* @__PURE__ */ __name((params) => {
  const { data, path, errorMaps, issueData } = params;
  const fullPath = [...path, ...issueData.path || []];
  const fullIssue = {
    ...issueData,
    path: fullPath
  };
  if (issueData.message !== void 0) {
    return {
      ...issueData,
      path: fullPath,
      message: issueData.message
    };
  }
  let errorMessage = "";
  const maps = errorMaps.filter((m2) => !!m2).slice().reverse();
  for (const map of maps) {
    errorMessage = map(fullIssue, { data, defaultError: errorMessage }).message;
  }
  return {
    ...issueData,
    path: fullPath,
    message: errorMessage
  };
}, "makeIssue");
var EMPTY_PATH = [];
function addIssueToContext(ctx, issueData) {
  const overrideMap = getErrorMap();
  const issue = makeIssue({
    issueData,
    data: ctx.data,
    path: ctx.path,
    errorMaps: [
      ctx.common.contextualErrorMap,
      // contextual error map is first priority
      ctx.schemaErrorMap,
      // then schema-bound map if available
      overrideMap,
      // then global override map
      overrideMap === en_default ? void 0 : en_default
      // then global default map
    ].filter((x) => !!x)
  });
  ctx.common.issues.push(issue);
}
__name(addIssueToContext, "addIssueToContext");
var ParseStatus = class _ParseStatus {
  static {
    __name(this, "ParseStatus");
  }
  constructor() {
    this.value = "valid";
  }
  dirty() {
    if (this.value === "valid")
      this.value = "dirty";
  }
  abort() {
    if (this.value !== "aborted")
      this.value = "aborted";
  }
  static mergeArray(status, results) {
    const arrayValue = [];
    for (const s of results) {
      if (s.status === "aborted")
        return INVALID;
      if (s.status === "dirty")
        status.dirty();
      arrayValue.push(s.value);
    }
    return { status: status.value, value: arrayValue };
  }
  static async mergeObjectAsync(status, pairs) {
    const syncPairs = [];
    for (const pair of pairs) {
      const key = await pair.key;
      const value = await pair.value;
      syncPairs.push({
        key,
        value
      });
    }
    return _ParseStatus.mergeObjectSync(status, syncPairs);
  }
  static mergeObjectSync(status, pairs) {
    const finalObject = {};
    for (const pair of pairs) {
      const { key, value } = pair;
      if (key.status === "aborted")
        return INVALID;
      if (value.status === "aborted")
        return INVALID;
      if (key.status === "dirty")
        status.dirty();
      if (value.status === "dirty")
        status.dirty();
      if (key.value !== "__proto__" && (typeof value.value !== "undefined" || pair.alwaysSet)) {
        finalObject[key.value] = value.value;
      }
    }
    return { status: status.value, value: finalObject };
  }
};
var INVALID = Object.freeze({
  status: "aborted"
});
var DIRTY = /* @__PURE__ */ __name((value) => ({ status: "dirty", value }), "DIRTY");
var OK = /* @__PURE__ */ __name((value) => ({ status: "valid", value }), "OK");
var isAborted = /* @__PURE__ */ __name((x) => x.status === "aborted", "isAborted");
var isDirty = /* @__PURE__ */ __name((x) => x.status === "dirty", "isDirty");
var isValid = /* @__PURE__ */ __name((x) => x.status === "valid", "isValid");
var isAsync = /* @__PURE__ */ __name((x) => typeof Promise !== "undefined" && x instanceof Promise, "isAsync");

// node_modules/zod/v3/types.js
init_esm();

// node_modules/zod/v3/helpers/errorUtil.js
init_esm();
var errorUtil;
(function(errorUtil2) {
  errorUtil2.errToObj = (message) => typeof message === "string" ? { message } : message || {};
  errorUtil2.toString = (message) => typeof message === "string" ? message : message?.message;
})(errorUtil || (errorUtil = {}));

// node_modules/zod/v3/types.js
var ParseInputLazyPath = class {
  static {
    __name(this, "ParseInputLazyPath");
  }
  constructor(parent, value, path, key) {
    this._cachedPath = [];
    this.parent = parent;
    this.data = value;
    this._path = path;
    this._key = key;
  }
  get path() {
    if (!this._cachedPath.length) {
      if (Array.isArray(this._key)) {
        this._cachedPath.push(...this._path, ...this._key);
      } else {
        this._cachedPath.push(...this._path, this._key);
      }
    }
    return this._cachedPath;
  }
};
var handleResult = /* @__PURE__ */ __name((ctx, result) => {
  if (isValid(result)) {
    return { success: true, data: result.value };
  } else {
    if (!ctx.common.issues.length) {
      throw new Error("Validation failed but no issues detected.");
    }
    return {
      success: false,
      get error() {
        if (this._error)
          return this._error;
        const error = new ZodError(ctx.common.issues);
        this._error = error;
        return this._error;
      }
    };
  }
}, "handleResult");
function processCreateParams(params) {
  if (!params)
    return {};
  const { errorMap: errorMap2, invalid_type_error, required_error, description } = params;
  if (errorMap2 && (invalid_type_error || required_error)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  if (errorMap2)
    return { errorMap: errorMap2, description };
  const customMap = /* @__PURE__ */ __name((iss, ctx) => {
    const { message } = params;
    if (iss.code === "invalid_enum_value") {
      return { message: message ?? ctx.defaultError };
    }
    if (typeof ctx.data === "undefined") {
      return { message: message ?? required_error ?? ctx.defaultError };
    }
    if (iss.code !== "invalid_type")
      return { message: ctx.defaultError };
    return { message: message ?? invalid_type_error ?? ctx.defaultError };
  }, "customMap");
  return { errorMap: customMap, description };
}
__name(processCreateParams, "processCreateParams");
var ZodType = class {
  static {
    __name(this, "ZodType");
  }
  get description() {
    return this._def.description;
  }
  _getType(input) {
    return getParsedType(input.data);
  }
  _getOrReturnCtx(input, ctx) {
    return ctx || {
      common: input.parent.common,
      data: input.data,
      parsedType: getParsedType(input.data),
      schemaErrorMap: this._def.errorMap,
      path: input.path,
      parent: input.parent
    };
  }
  _processInputParams(input) {
    return {
      status: new ParseStatus(),
      ctx: {
        common: input.parent.common,
        data: input.data,
        parsedType: getParsedType(input.data),
        schemaErrorMap: this._def.errorMap,
        path: input.path,
        parent: input.parent
      }
    };
  }
  _parseSync(input) {
    const result = this._parse(input);
    if (isAsync(result)) {
      throw new Error("Synchronous parse encountered promise.");
    }
    return result;
  }
  _parseAsync(input) {
    const result = this._parse(input);
    return Promise.resolve(result);
  }
  parse(data, params) {
    const result = this.safeParse(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  safeParse(data, params) {
    const ctx = {
      common: {
        issues: [],
        async: params?.async ?? false,
        contextualErrorMap: params?.errorMap
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const result = this._parseSync({ data, path: ctx.path, parent: ctx });
    return handleResult(ctx, result);
  }
  "~validate"(data) {
    const ctx = {
      common: {
        issues: [],
        async: !!this["~standard"].async
      },
      path: [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    if (!this["~standard"].async) {
      try {
        const result = this._parseSync({ data, path: [], parent: ctx });
        return isValid(result) ? {
          value: result.value
        } : {
          issues: ctx.common.issues
        };
      } catch (err) {
        if (err?.message?.toLowerCase()?.includes("encountered")) {
          this["~standard"].async = true;
        }
        ctx.common = {
          issues: [],
          async: true
        };
      }
    }
    return this._parseAsync({ data, path: [], parent: ctx }).then((result) => isValid(result) ? {
      value: result.value
    } : {
      issues: ctx.common.issues
    });
  }
  async parseAsync(data, params) {
    const result = await this.safeParseAsync(data, params);
    if (result.success)
      return result.data;
    throw result.error;
  }
  async safeParseAsync(data, params) {
    const ctx = {
      common: {
        issues: [],
        contextualErrorMap: params?.errorMap,
        async: true
      },
      path: params?.path || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data,
      parsedType: getParsedType(data)
    };
    const maybeAsyncResult = this._parse({ data, path: ctx.path, parent: ctx });
    const result = await (isAsync(maybeAsyncResult) ? maybeAsyncResult : Promise.resolve(maybeAsyncResult));
    return handleResult(ctx, result);
  }
  refine(check, message) {
    const getIssueProperties = /* @__PURE__ */ __name((val) => {
      if (typeof message === "string" || typeof message === "undefined") {
        return { message };
      } else if (typeof message === "function") {
        return message(val);
      } else {
        return message;
      }
    }, "getIssueProperties");
    return this._refinement((val, ctx) => {
      const result = check(val);
      const setError = /* @__PURE__ */ __name(() => ctx.addIssue({
        code: ZodIssueCode.custom,
        ...getIssueProperties(val)
      }), "setError");
      if (typeof Promise !== "undefined" && result instanceof Promise) {
        return result.then((data) => {
          if (!data) {
            setError();
            return false;
          } else {
            return true;
          }
        });
      }
      if (!result) {
        setError();
        return false;
      } else {
        return true;
      }
    });
  }
  refinement(check, refinementData) {
    return this._refinement((val, ctx) => {
      if (!check(val)) {
        ctx.addIssue(typeof refinementData === "function" ? refinementData(val, ctx) : refinementData);
        return false;
      } else {
        return true;
      }
    });
  }
  _refinement(refinement) {
    return new ZodEffects({
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "refinement", refinement }
    });
  }
  superRefine(refinement) {
    return this._refinement(refinement);
  }
  constructor(def) {
    this.spa = this.safeParseAsync;
    this._def = def;
    this.parse = this.parse.bind(this);
    this.safeParse = this.safeParse.bind(this);
    this.parseAsync = this.parseAsync.bind(this);
    this.safeParseAsync = this.safeParseAsync.bind(this);
    this.spa = this.spa.bind(this);
    this.refine = this.refine.bind(this);
    this.refinement = this.refinement.bind(this);
    this.superRefine = this.superRefine.bind(this);
    this.optional = this.optional.bind(this);
    this.nullable = this.nullable.bind(this);
    this.nullish = this.nullish.bind(this);
    this.array = this.array.bind(this);
    this.promise = this.promise.bind(this);
    this.or = this.or.bind(this);
    this.and = this.and.bind(this);
    this.transform = this.transform.bind(this);
    this.brand = this.brand.bind(this);
    this.default = this.default.bind(this);
    this.catch = this.catch.bind(this);
    this.describe = this.describe.bind(this);
    this.pipe = this.pipe.bind(this);
    this.readonly = this.readonly.bind(this);
    this.isNullable = this.isNullable.bind(this);
    this.isOptional = this.isOptional.bind(this);
    this["~standard"] = {
      version: 1,
      vendor: "zod",
      validate: /* @__PURE__ */ __name((data) => this["~validate"](data), "validate")
    };
  }
  optional() {
    return ZodOptional.create(this, this._def);
  }
  nullable() {
    return ZodNullable.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ZodArray.create(this);
  }
  promise() {
    return ZodPromise.create(this, this._def);
  }
  or(option) {
    return ZodUnion.create([this, option], this._def);
  }
  and(incoming) {
    return ZodIntersection.create(this, incoming, this._def);
  }
  transform(transform) {
    return new ZodEffects({
      ...processCreateParams(this._def),
      schema: this,
      typeName: ZodFirstPartyTypeKind.ZodEffects,
      effect: { type: "transform", transform }
    });
  }
  default(def) {
    const defaultValueFunc = typeof def === "function" ? def : () => def;
    return new ZodDefault({
      ...processCreateParams(this._def),
      innerType: this,
      defaultValue: defaultValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodDefault
    });
  }
  brand() {
    return new ZodBranded({
      typeName: ZodFirstPartyTypeKind.ZodBranded,
      type: this,
      ...processCreateParams(this._def)
    });
  }
  catch(def) {
    const catchValueFunc = typeof def === "function" ? def : () => def;
    return new ZodCatch({
      ...processCreateParams(this._def),
      innerType: this,
      catchValue: catchValueFunc,
      typeName: ZodFirstPartyTypeKind.ZodCatch
    });
  }
  describe(description) {
    const This = this.constructor;
    return new This({
      ...this._def,
      description
    });
  }
  pipe(target) {
    return ZodPipeline.create(this, target);
  }
  readonly() {
    return ZodReadonly.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
};
var cuidRegex = /^c[^\s-]{8,}$/i;
var cuid2Regex = /^[0-9a-z]+$/;
var ulidRegex = /^[0-9A-HJKMNP-TV-Z]{26}$/i;
var uuidRegex = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i;
var nanoidRegex = /^[a-z0-9_-]{21}$/i;
var jwtRegex = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/;
var durationRegex = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
var emailRegex = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i;
var _emojiRegex = `^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$`;
var emojiRegex;
var ipv4Regex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
var ipv4CidrRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/;
var ipv6Regex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/;
var ipv6CidrRegex = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
var base64Regex = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/;
var base64urlRegex = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/;
var dateRegexSource = `((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))`;
var dateRegex = new RegExp(`^${dateRegexSource}$`);
function timeRegexSource(args) {
  let secondsRegexSource = `[0-5]\\d`;
  if (args.precision) {
    secondsRegexSource = `${secondsRegexSource}\\.\\d{${args.precision}}`;
  } else if (args.precision == null) {
    secondsRegexSource = `${secondsRegexSource}(\\.\\d+)?`;
  }
  const secondsQuantifier = args.precision ? "+" : "?";
  return `([01]\\d|2[0-3]):[0-5]\\d(:${secondsRegexSource})${secondsQuantifier}`;
}
__name(timeRegexSource, "timeRegexSource");
function timeRegex(args) {
  return new RegExp(`^${timeRegexSource(args)}$`);
}
__name(timeRegex, "timeRegex");
function datetimeRegex(args) {
  let regex = `${dateRegexSource}T${timeRegexSource(args)}`;
  const opts = [];
  opts.push(args.local ? `Z?` : `Z`);
  if (args.offset)
    opts.push(`([+-]\\d{2}:?\\d{2})`);
  regex = `${regex}(${opts.join("|")})`;
  return new RegExp(`^${regex}$`);
}
__name(datetimeRegex, "datetimeRegex");
function isValidIP(ip, version) {
  if ((version === "v4" || !version) && ipv4Regex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6Regex.test(ip)) {
    return true;
  }
  return false;
}
__name(isValidIP, "isValidIP");
function isValidJWT(jwt, alg) {
  if (!jwtRegex.test(jwt))
    return false;
  try {
    const [header] = jwt.split(".");
    if (!header)
      return false;
    const base64 = header.replace(/-/g, "+").replace(/_/g, "/").padEnd(header.length + (4 - header.length % 4) % 4, "=");
    const decoded = JSON.parse(atob(base64));
    if (typeof decoded !== "object" || decoded === null)
      return false;
    if ("typ" in decoded && decoded?.typ !== "JWT")
      return false;
    if (!decoded.alg)
      return false;
    if (alg && decoded.alg !== alg)
      return false;
    return true;
  } catch {
    return false;
  }
}
__name(isValidJWT, "isValidJWT");
function isValidCidr(ip, version) {
  if ((version === "v4" || !version) && ipv4CidrRegex.test(ip)) {
    return true;
  }
  if ((version === "v6" || !version) && ipv6CidrRegex.test(ip)) {
    return true;
  }
  return false;
}
__name(isValidCidr, "isValidCidr");
var ZodString = class _ZodString extends ZodType {
  static {
    __name(this, "ZodString");
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = String(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.string) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.string,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.length < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.length > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "string",
            inclusive: true,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "length") {
        const tooBig = input.data.length > check.value;
        const tooSmall = input.data.length < check.value;
        if (tooBig || tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          if (tooBig) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_big,
              maximum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          } else if (tooSmall) {
            addIssueToContext(ctx, {
              code: ZodIssueCode.too_small,
              minimum: check.value,
              type: "string",
              inclusive: true,
              exact: true,
              message: check.message
            });
          }
          status.dirty();
        }
      } else if (check.kind === "email") {
        if (!emailRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "email",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "emoji") {
        if (!emojiRegex) {
          emojiRegex = new RegExp(_emojiRegex, "u");
        }
        if (!emojiRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "emoji",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "uuid") {
        if (!uuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "uuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "nanoid") {
        if (!nanoidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "nanoid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid") {
        if (!cuidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cuid2") {
        if (!cuid2Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cuid2",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ulid") {
        if (!ulidRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ulid",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "url") {
        try {
          new URL(input.data);
        } catch {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "regex") {
        check.regex.lastIndex = 0;
        const testResult = check.regex.test(input.data);
        if (!testResult) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "regex",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "trim") {
        input.data = input.data.trim();
      } else if (check.kind === "includes") {
        if (!input.data.includes(check.value, check.position)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { includes: check.value, position: check.position },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "toLowerCase") {
        input.data = input.data.toLowerCase();
      } else if (check.kind === "toUpperCase") {
        input.data = input.data.toUpperCase();
      } else if (check.kind === "startsWith") {
        if (!input.data.startsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { startsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "endsWith") {
        if (!input.data.endsWith(check.value)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: { endsWith: check.value },
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "datetime") {
        const regex = datetimeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "datetime",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "date") {
        const regex = dateRegex;
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "date",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "time") {
        const regex = timeRegex(check);
        if (!regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_string,
            validation: "time",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "duration") {
        if (!durationRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "duration",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "ip") {
        if (!isValidIP(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "ip",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "jwt") {
        if (!isValidJWT(input.data, check.alg)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "jwt",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "cidr") {
        if (!isValidCidr(input.data, check.version)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "cidr",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64") {
        if (!base64Regex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "base64url") {
        if (!base64urlRegex.test(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            validation: "base64url",
            code: ZodIssueCode.invalid_string,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _regex(regex, validation, message) {
    return this.refinement((data) => regex.test(data), {
      validation,
      code: ZodIssueCode.invalid_string,
      ...errorUtil.errToObj(message)
    });
  }
  _addCheck(check) {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  email(message) {
    return this._addCheck({ kind: "email", ...errorUtil.errToObj(message) });
  }
  url(message) {
    return this._addCheck({ kind: "url", ...errorUtil.errToObj(message) });
  }
  emoji(message) {
    return this._addCheck({ kind: "emoji", ...errorUtil.errToObj(message) });
  }
  uuid(message) {
    return this._addCheck({ kind: "uuid", ...errorUtil.errToObj(message) });
  }
  nanoid(message) {
    return this._addCheck({ kind: "nanoid", ...errorUtil.errToObj(message) });
  }
  cuid(message) {
    return this._addCheck({ kind: "cuid", ...errorUtil.errToObj(message) });
  }
  cuid2(message) {
    return this._addCheck({ kind: "cuid2", ...errorUtil.errToObj(message) });
  }
  ulid(message) {
    return this._addCheck({ kind: "ulid", ...errorUtil.errToObj(message) });
  }
  base64(message) {
    return this._addCheck({ kind: "base64", ...errorUtil.errToObj(message) });
  }
  base64url(message) {
    return this._addCheck({
      kind: "base64url",
      ...errorUtil.errToObj(message)
    });
  }
  jwt(options) {
    return this._addCheck({ kind: "jwt", ...errorUtil.errToObj(options) });
  }
  ip(options) {
    return this._addCheck({ kind: "ip", ...errorUtil.errToObj(options) });
  }
  cidr(options) {
    return this._addCheck({ kind: "cidr", ...errorUtil.errToObj(options) });
  }
  datetime(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "datetime",
        precision: null,
        offset: false,
        local: false,
        message: options
      });
    }
    return this._addCheck({
      kind: "datetime",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      offset: options?.offset ?? false,
      local: options?.local ?? false,
      ...errorUtil.errToObj(options?.message)
    });
  }
  date(message) {
    return this._addCheck({ kind: "date", message });
  }
  time(options) {
    if (typeof options === "string") {
      return this._addCheck({
        kind: "time",
        precision: null,
        message: options
      });
    }
    return this._addCheck({
      kind: "time",
      precision: typeof options?.precision === "undefined" ? null : options?.precision,
      ...errorUtil.errToObj(options?.message)
    });
  }
  duration(message) {
    return this._addCheck({ kind: "duration", ...errorUtil.errToObj(message) });
  }
  regex(regex, message) {
    return this._addCheck({
      kind: "regex",
      regex,
      ...errorUtil.errToObj(message)
    });
  }
  includes(value, options) {
    return this._addCheck({
      kind: "includes",
      value,
      position: options?.position,
      ...errorUtil.errToObj(options?.message)
    });
  }
  startsWith(value, message) {
    return this._addCheck({
      kind: "startsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  endsWith(value, message) {
    return this._addCheck({
      kind: "endsWith",
      value,
      ...errorUtil.errToObj(message)
    });
  }
  min(minLength, message) {
    return this._addCheck({
      kind: "min",
      value: minLength,
      ...errorUtil.errToObj(message)
    });
  }
  max(maxLength, message) {
    return this._addCheck({
      kind: "max",
      value: maxLength,
      ...errorUtil.errToObj(message)
    });
  }
  length(len, message) {
    return this._addCheck({
      kind: "length",
      value: len,
      ...errorUtil.errToObj(message)
    });
  }
  /**
   * Equivalent to `.min(1)`
   */
  nonempty(message) {
    return this.min(1, errorUtil.errToObj(message));
  }
  trim() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new _ZodString({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((ch) => ch.kind === "datetime");
  }
  get isDate() {
    return !!this._def.checks.find((ch) => ch.kind === "date");
  }
  get isTime() {
    return !!this._def.checks.find((ch) => ch.kind === "time");
  }
  get isDuration() {
    return !!this._def.checks.find((ch) => ch.kind === "duration");
  }
  get isEmail() {
    return !!this._def.checks.find((ch) => ch.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((ch) => ch.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((ch) => ch.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((ch) => ch.kind === "uuid");
  }
  get isNANOID() {
    return !!this._def.checks.find((ch) => ch.kind === "nanoid");
  }
  get isCUID() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((ch) => ch.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((ch) => ch.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((ch) => ch.kind === "ip");
  }
  get isCIDR() {
    return !!this._def.checks.find((ch) => ch.kind === "cidr");
  }
  get isBase64() {
    return !!this._def.checks.find((ch) => ch.kind === "base64");
  }
  get isBase64url() {
    return !!this._def.checks.find((ch) => ch.kind === "base64url");
  }
  get minLength() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxLength() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodString.create = (params) => {
  return new ZodString({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodString,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
function floatSafeRemainder(val, step) {
  const valDecCount = (val.toString().split(".")[1] || "").length;
  const stepDecCount = (step.toString().split(".")[1] || "").length;
  const decCount = valDecCount > stepDecCount ? valDecCount : stepDecCount;
  const valInt = Number.parseInt(val.toFixed(decCount).replace(".", ""));
  const stepInt = Number.parseInt(step.toFixed(decCount).replace(".", ""));
  return valInt % stepInt / 10 ** decCount;
}
__name(floatSafeRemainder, "floatSafeRemainder");
var ZodNumber = class _ZodNumber extends ZodType {
  static {
    __name(this, "ZodNumber");
  }
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
    this.step = this.multipleOf;
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Number(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.number) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.number,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "int") {
        if (!util.isInteger(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.invalid_type,
            expected: "integer",
            received: "float",
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            minimum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            maximum: check.value,
            type: "number",
            inclusive: check.inclusive,
            exact: false,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (floatSafeRemainder(input.data, check.value) !== 0) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "finite") {
        if (!Number.isFinite(input.data)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_finite,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodNumber({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodNumber({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  int(message) {
    return this._addCheck({
      kind: "int",
      message: errorUtil.toString(message)
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  finite(message) {
    return this._addCheck({
      kind: "finite",
      message: errorUtil.toString(message)
    });
  }
  safe(message) {
    return this._addCheck({
      kind: "min",
      inclusive: true,
      value: Number.MIN_SAFE_INTEGER,
      message: errorUtil.toString(message)
    })._addCheck({
      kind: "max",
      inclusive: true,
      value: Number.MAX_SAFE_INTEGER,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
  get isInt() {
    return !!this._def.checks.find((ch) => ch.kind === "int" || ch.kind === "multipleOf" && util.isInteger(ch.value));
  }
  get isFinite() {
    let max = null;
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "finite" || ch.kind === "int" || ch.kind === "multipleOf") {
        return true;
      } else if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      } else if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return Number.isFinite(min) && Number.isFinite(max);
  }
};
ZodNumber.create = (params) => {
  return new ZodNumber({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodNumber,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodBigInt = class _ZodBigInt extends ZodType {
  static {
    __name(this, "ZodBigInt");
  }
  constructor() {
    super(...arguments);
    this.min = this.gte;
    this.max = this.lte;
  }
  _parse(input) {
    if (this._def.coerce) {
      try {
        input.data = BigInt(input.data);
      } catch {
        return this._getInvalidInput(input);
      }
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.bigint) {
      return this._getInvalidInput(input);
    }
    let ctx = void 0;
    const status = new ParseStatus();
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        const tooSmall = check.inclusive ? input.data < check.value : input.data <= check.value;
        if (tooSmall) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            type: "bigint",
            minimum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        const tooBig = check.inclusive ? input.data > check.value : input.data >= check.value;
        if (tooBig) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            type: "bigint",
            maximum: check.value,
            inclusive: check.inclusive,
            message: check.message
          });
          status.dirty();
        }
      } else if (check.kind === "multipleOf") {
        if (input.data % check.value !== BigInt(0)) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.not_multiple_of,
            multipleOf: check.value,
            message: check.message
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return { status: status.value, value: input.data };
  }
  _getInvalidInput(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.bigint,
      received: ctx.parsedType
    });
    return INVALID;
  }
  gte(value, message) {
    return this.setLimit("min", value, true, errorUtil.toString(message));
  }
  gt(value, message) {
    return this.setLimit("min", value, false, errorUtil.toString(message));
  }
  lte(value, message) {
    return this.setLimit("max", value, true, errorUtil.toString(message));
  }
  lt(value, message) {
    return this.setLimit("max", value, false, errorUtil.toString(message));
  }
  setLimit(kind, value, inclusive, message) {
    return new _ZodBigInt({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind,
          value,
          inclusive,
          message: errorUtil.toString(message)
        }
      ]
    });
  }
  _addCheck(check) {
    return new _ZodBigInt({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  positive(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  negative(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: false,
      message: errorUtil.toString(message)
    });
  }
  nonpositive(message) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  nonnegative(message) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: true,
      message: errorUtil.toString(message)
    });
  }
  multipleOf(value, message) {
    return this._addCheck({
      kind: "multipleOf",
      value,
      message: errorUtil.toString(message)
    });
  }
  get minValue() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min;
  }
  get maxValue() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max;
  }
};
ZodBigInt.create = (params) => {
  return new ZodBigInt({
    checks: [],
    typeName: ZodFirstPartyTypeKind.ZodBigInt,
    coerce: params?.coerce ?? false,
    ...processCreateParams(params)
  });
};
var ZodBoolean = class extends ZodType {
  static {
    __name(this, "ZodBoolean");
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = Boolean(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.boolean) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.boolean,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodBoolean.create = (params) => {
  return new ZodBoolean({
    typeName: ZodFirstPartyTypeKind.ZodBoolean,
    coerce: params?.coerce || false,
    ...processCreateParams(params)
  });
};
var ZodDate = class _ZodDate extends ZodType {
  static {
    __name(this, "ZodDate");
  }
  _parse(input) {
    if (this._def.coerce) {
      input.data = new Date(input.data);
    }
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.date) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.date,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    if (Number.isNaN(input.data.getTime())) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_date
      });
      return INVALID;
    }
    const status = new ParseStatus();
    let ctx = void 0;
    for (const check of this._def.checks) {
      if (check.kind === "min") {
        if (input.data.getTime() < check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_small,
            message: check.message,
            inclusive: true,
            exact: false,
            minimum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else if (check.kind === "max") {
        if (input.data.getTime() > check.value) {
          ctx = this._getOrReturnCtx(input, ctx);
          addIssueToContext(ctx, {
            code: ZodIssueCode.too_big,
            message: check.message,
            inclusive: true,
            exact: false,
            maximum: check.value,
            type: "date"
          });
          status.dirty();
        }
      } else {
        util.assertNever(check);
      }
    }
    return {
      status: status.value,
      value: new Date(input.data.getTime())
    };
  }
  _addCheck(check) {
    return new _ZodDate({
      ...this._def,
      checks: [...this._def.checks, check]
    });
  }
  min(minDate, message) {
    return this._addCheck({
      kind: "min",
      value: minDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  max(maxDate, message) {
    return this._addCheck({
      kind: "max",
      value: maxDate.getTime(),
      message: errorUtil.toString(message)
    });
  }
  get minDate() {
    let min = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "min") {
        if (min === null || ch.value > min)
          min = ch.value;
      }
    }
    return min != null ? new Date(min) : null;
  }
  get maxDate() {
    let max = null;
    for (const ch of this._def.checks) {
      if (ch.kind === "max") {
        if (max === null || ch.value < max)
          max = ch.value;
      }
    }
    return max != null ? new Date(max) : null;
  }
};
ZodDate.create = (params) => {
  return new ZodDate({
    checks: [],
    coerce: params?.coerce || false,
    typeName: ZodFirstPartyTypeKind.ZodDate,
    ...processCreateParams(params)
  });
};
var ZodSymbol = class extends ZodType {
  static {
    __name(this, "ZodSymbol");
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.symbol) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.symbol,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodSymbol.create = (params) => {
  return new ZodSymbol({
    typeName: ZodFirstPartyTypeKind.ZodSymbol,
    ...processCreateParams(params)
  });
};
var ZodUndefined = class extends ZodType {
  static {
    __name(this, "ZodUndefined");
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.undefined,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodUndefined.create = (params) => {
  return new ZodUndefined({
    typeName: ZodFirstPartyTypeKind.ZodUndefined,
    ...processCreateParams(params)
  });
};
var ZodNull = class extends ZodType {
  static {
    __name(this, "ZodNull");
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.null) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.null,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodNull.create = (params) => {
  return new ZodNull({
    typeName: ZodFirstPartyTypeKind.ZodNull,
    ...processCreateParams(params)
  });
};
var ZodAny = class extends ZodType {
  static {
    __name(this, "ZodAny");
  }
  constructor() {
    super(...arguments);
    this._any = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodAny.create = (params) => {
  return new ZodAny({
    typeName: ZodFirstPartyTypeKind.ZodAny,
    ...processCreateParams(params)
  });
};
var ZodUnknown = class extends ZodType {
  static {
    __name(this, "ZodUnknown");
  }
  constructor() {
    super(...arguments);
    this._unknown = true;
  }
  _parse(input) {
    return OK(input.data);
  }
};
ZodUnknown.create = (params) => {
  return new ZodUnknown({
    typeName: ZodFirstPartyTypeKind.ZodUnknown,
    ...processCreateParams(params)
  });
};
var ZodNever = class extends ZodType {
  static {
    __name(this, "ZodNever");
  }
  _parse(input) {
    const ctx = this._getOrReturnCtx(input);
    addIssueToContext(ctx, {
      code: ZodIssueCode.invalid_type,
      expected: ZodParsedType.never,
      received: ctx.parsedType
    });
    return INVALID;
  }
};
ZodNever.create = (params) => {
  return new ZodNever({
    typeName: ZodFirstPartyTypeKind.ZodNever,
    ...processCreateParams(params)
  });
};
var ZodVoid = class extends ZodType {
  static {
    __name(this, "ZodVoid");
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.undefined) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.void,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return OK(input.data);
  }
};
ZodVoid.create = (params) => {
  return new ZodVoid({
    typeName: ZodFirstPartyTypeKind.ZodVoid,
    ...processCreateParams(params)
  });
};
var ZodArray = class _ZodArray extends ZodType {
  static {
    __name(this, "ZodArray");
  }
  _parse(input) {
    const { ctx, status } = this._processInputParams(input);
    const def = this._def;
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (def.exactLength !== null) {
      const tooBig = ctx.data.length > def.exactLength.value;
      const tooSmall = ctx.data.length < def.exactLength.value;
      if (tooBig || tooSmall) {
        addIssueToContext(ctx, {
          code: tooBig ? ZodIssueCode.too_big : ZodIssueCode.too_small,
          minimum: tooSmall ? def.exactLength.value : void 0,
          maximum: tooBig ? def.exactLength.value : void 0,
          type: "array",
          inclusive: true,
          exact: true,
          message: def.exactLength.message
        });
        status.dirty();
      }
    }
    if (def.minLength !== null) {
      if (ctx.data.length < def.minLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.minLength.message
        });
        status.dirty();
      }
    }
    if (def.maxLength !== null) {
      if (ctx.data.length > def.maxLength.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxLength.value,
          type: "array",
          inclusive: true,
          exact: false,
          message: def.maxLength.message
        });
        status.dirty();
      }
    }
    if (ctx.common.async) {
      return Promise.all([...ctx.data].map((item, i2) => {
        return def.type._parseAsync(new ParseInputLazyPath(ctx, item, ctx.path, i2));
      })).then((result2) => {
        return ParseStatus.mergeArray(status, result2);
      });
    }
    const result = [...ctx.data].map((item, i2) => {
      return def.type._parseSync(new ParseInputLazyPath(ctx, item, ctx.path, i2));
    });
    return ParseStatus.mergeArray(status, result);
  }
  get element() {
    return this._def.type;
  }
  min(minLength, message) {
    return new _ZodArray({
      ...this._def,
      minLength: { value: minLength, message: errorUtil.toString(message) }
    });
  }
  max(maxLength, message) {
    return new _ZodArray({
      ...this._def,
      maxLength: { value: maxLength, message: errorUtil.toString(message) }
    });
  }
  length(len, message) {
    return new _ZodArray({
      ...this._def,
      exactLength: { value: len, message: errorUtil.toString(message) }
    });
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodArray.create = (schema, params) => {
  return new ZodArray({
    type: schema,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: ZodFirstPartyTypeKind.ZodArray,
    ...processCreateParams(params)
  });
};
function deepPartialify(schema) {
  if (schema instanceof ZodObject) {
    const newShape = {};
    for (const key in schema.shape) {
      const fieldSchema = schema.shape[key];
      newShape[key] = ZodOptional.create(deepPartialify(fieldSchema));
    }
    return new ZodObject({
      ...schema._def,
      shape: /* @__PURE__ */ __name(() => newShape, "shape")
    });
  } else if (schema instanceof ZodArray) {
    return new ZodArray({
      ...schema._def,
      type: deepPartialify(schema.element)
    });
  } else if (schema instanceof ZodOptional) {
    return ZodOptional.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodNullable) {
    return ZodNullable.create(deepPartialify(schema.unwrap()));
  } else if (schema instanceof ZodTuple) {
    return ZodTuple.create(schema.items.map((item) => deepPartialify(item)));
  } else {
    return schema;
  }
}
__name(deepPartialify, "deepPartialify");
var ZodObject = class _ZodObject extends ZodType {
  static {
    __name(this, "ZodObject");
  }
  constructor() {
    super(...arguments);
    this._cached = null;
    this.nonstrict = this.passthrough;
    this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const shape = this._def.shape();
    const keys = util.objectKeys(shape);
    this._cached = { shape, keys };
    return this._cached;
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.object) {
      const ctx2 = this._getOrReturnCtx(input);
      addIssueToContext(ctx2, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx2.parsedType
      });
      return INVALID;
    }
    const { status, ctx } = this._processInputParams(input);
    const { shape, keys: shapeKeys } = this._getCached();
    const extraKeys = [];
    if (!(this._def.catchall instanceof ZodNever && this._def.unknownKeys === "strip")) {
      for (const key in ctx.data) {
        if (!shapeKeys.includes(key)) {
          extraKeys.push(key);
        }
      }
    }
    const pairs = [];
    for (const key of shapeKeys) {
      const keyValidator = shape[key];
      const value = ctx.data[key];
      pairs.push({
        key: { status: "valid", value: key },
        value: keyValidator._parse(new ParseInputLazyPath(ctx, value, ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (this._def.catchall instanceof ZodNever) {
      const unknownKeys = this._def.unknownKeys;
      if (unknownKeys === "passthrough") {
        for (const key of extraKeys) {
          pairs.push({
            key: { status: "valid", value: key },
            value: { status: "valid", value: ctx.data[key] }
          });
        }
      } else if (unknownKeys === "strict") {
        if (extraKeys.length > 0) {
          addIssueToContext(ctx, {
            code: ZodIssueCode.unrecognized_keys,
            keys: extraKeys
          });
          status.dirty();
        }
      } else if (unknownKeys === "strip") {
      } else {
        throw new Error(`Internal ZodObject error: invalid unknownKeys value.`);
      }
    } else {
      const catchall = this._def.catchall;
      for (const key of extraKeys) {
        const value = ctx.data[key];
        pairs.push({
          key: { status: "valid", value: key },
          value: catchall._parse(
            new ParseInputLazyPath(ctx, value, ctx.path, key)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: key in ctx.data
        });
      }
    }
    if (ctx.common.async) {
      return Promise.resolve().then(async () => {
        const syncPairs = [];
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          syncPairs.push({
            key,
            value,
            alwaysSet: pair.alwaysSet
          });
        }
        return syncPairs;
      }).then((syncPairs) => {
        return ParseStatus.mergeObjectSync(status, syncPairs);
      });
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get shape() {
    return this._def.shape();
  }
  strict(message) {
    errorUtil.errToObj;
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strict",
      ...message !== void 0 ? {
        errorMap: /* @__PURE__ */ __name((issue, ctx) => {
          const defaultError = this._def.errorMap?.(issue, ctx).message ?? ctx.defaultError;
          if (issue.code === "unrecognized_keys")
            return {
              message: errorUtil.errToObj(message).message ?? defaultError
            };
          return {
            message: defaultError
          };
        }, "errorMap")
      } : {}
    });
  }
  strip() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new _ZodObject({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(augmentation) {
    return new _ZodObject({
      ...this._def,
      shape: /* @__PURE__ */ __name(() => ({
        ...this._def.shape(),
        ...augmentation
      }), "shape")
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(merging) {
    const merged = new _ZodObject({
      unknownKeys: merging._def.unknownKeys,
      catchall: merging._def.catchall,
      shape: /* @__PURE__ */ __name(() => ({
        ...this._def.shape(),
        ...merging._def.shape()
      }), "shape"),
      typeName: ZodFirstPartyTypeKind.ZodObject
    });
    return merged;
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(key, schema) {
    return this.augment({ [key]: schema });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(index) {
    return new _ZodObject({
      ...this._def,
      catchall: index
    });
  }
  pick(mask) {
    const shape = {};
    for (const key of util.objectKeys(mask)) {
      if (mask[key] && this.shape[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: /* @__PURE__ */ __name(() => shape, "shape")
    });
  }
  omit(mask) {
    const shape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (!mask[key]) {
        shape[key] = this.shape[key];
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: /* @__PURE__ */ __name(() => shape, "shape")
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return deepPartialify(this);
  }
  partial(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      const fieldSchema = this.shape[key];
      if (mask && !mask[key]) {
        newShape[key] = fieldSchema;
      } else {
        newShape[key] = fieldSchema.optional();
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: /* @__PURE__ */ __name(() => newShape, "shape")
    });
  }
  required(mask) {
    const newShape = {};
    for (const key of util.objectKeys(this.shape)) {
      if (mask && !mask[key]) {
        newShape[key] = this.shape[key];
      } else {
        const fieldSchema = this.shape[key];
        let newField = fieldSchema;
        while (newField instanceof ZodOptional) {
          newField = newField._def.innerType;
        }
        newShape[key] = newField;
      }
    }
    return new _ZodObject({
      ...this._def,
      shape: /* @__PURE__ */ __name(() => newShape, "shape")
    });
  }
  keyof() {
    return createZodEnum(util.objectKeys(this.shape));
  }
};
ZodObject.create = (shape, params) => {
  return new ZodObject({
    shape: /* @__PURE__ */ __name(() => shape, "shape"),
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.strictCreate = (shape, params) => {
  return new ZodObject({
    shape: /* @__PURE__ */ __name(() => shape, "shape"),
    unknownKeys: "strict",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
ZodObject.lazycreate = (shape, params) => {
  return new ZodObject({
    shape,
    unknownKeys: "strip",
    catchall: ZodNever.create(),
    typeName: ZodFirstPartyTypeKind.ZodObject,
    ...processCreateParams(params)
  });
};
var ZodUnion = class extends ZodType {
  static {
    __name(this, "ZodUnion");
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const options = this._def.options;
    function handleResults(results) {
      for (const result of results) {
        if (result.result.status === "valid") {
          return result.result;
        }
      }
      for (const result of results) {
        if (result.result.status === "dirty") {
          ctx.common.issues.push(...result.ctx.common.issues);
          return result.result;
        }
      }
      const unionErrors = results.map((result) => new ZodError(result.ctx.common.issues));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
    __name(handleResults, "handleResults");
    if (ctx.common.async) {
      return Promise.all(options.map(async (option) => {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await option._parseAsync({
            data: ctx.data,
            path: ctx.path,
            parent: childCtx
          }),
          ctx: childCtx
        };
      })).then(handleResults);
    } else {
      let dirty = void 0;
      const issues = [];
      for (const option of options) {
        const childCtx = {
          ...ctx,
          common: {
            ...ctx.common,
            issues: []
          },
          parent: null
        };
        const result = option._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: childCtx
        });
        if (result.status === "valid") {
          return result;
        } else if (result.status === "dirty" && !dirty) {
          dirty = { result, ctx: childCtx };
        }
        if (childCtx.common.issues.length) {
          issues.push(childCtx.common.issues);
        }
      }
      if (dirty) {
        ctx.common.issues.push(...dirty.ctx.common.issues);
        return dirty.result;
      }
      const unionErrors = issues.map((issues2) => new ZodError(issues2));
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union,
        unionErrors
      });
      return INVALID;
    }
  }
  get options() {
    return this._def.options;
  }
};
ZodUnion.create = (types, params) => {
  return new ZodUnion({
    options: types,
    typeName: ZodFirstPartyTypeKind.ZodUnion,
    ...processCreateParams(params)
  });
};
var getDiscriminator = /* @__PURE__ */ __name((type) => {
  if (type instanceof ZodLazy) {
    return getDiscriminator(type.schema);
  } else if (type instanceof ZodEffects) {
    return getDiscriminator(type.innerType());
  } else if (type instanceof ZodLiteral) {
    return [type.value];
  } else if (type instanceof ZodEnum) {
    return type.options;
  } else if (type instanceof ZodNativeEnum) {
    return util.objectValues(type.enum);
  } else if (type instanceof ZodDefault) {
    return getDiscriminator(type._def.innerType);
  } else if (type instanceof ZodUndefined) {
    return [void 0];
  } else if (type instanceof ZodNull) {
    return [null];
  } else if (type instanceof ZodOptional) {
    return [void 0, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodNullable) {
    return [null, ...getDiscriminator(type.unwrap())];
  } else if (type instanceof ZodBranded) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodReadonly) {
    return getDiscriminator(type.unwrap());
  } else if (type instanceof ZodCatch) {
    return getDiscriminator(type._def.innerType);
  } else {
    return [];
  }
}, "getDiscriminator");
var ZodDiscriminatedUnion = class _ZodDiscriminatedUnion extends ZodType {
  static {
    __name(this, "ZodDiscriminatedUnion");
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const discriminator = this.discriminator;
    const discriminatorValue = ctx.data[discriminator];
    const option = this.optionsMap.get(discriminatorValue);
    if (!option) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_union_discriminator,
        options: Array.from(this.optionsMap.keys()),
        path: [discriminator]
      });
      return INVALID;
    }
    if (ctx.common.async) {
      return option._parseAsync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    } else {
      return option._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
    }
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(discriminator, options, params) {
    const optionsMap = /* @__PURE__ */ new Map();
    for (const type of options) {
      const discriminatorValues = getDiscriminator(type.shape[discriminator]);
      if (!discriminatorValues.length) {
        throw new Error(`A discriminator value for key \`${discriminator}\` could not be extracted from all schema options`);
      }
      for (const value of discriminatorValues) {
        if (optionsMap.has(value)) {
          throw new Error(`Discriminator property ${String(discriminator)} has duplicate value ${String(value)}`);
        }
        optionsMap.set(value, type);
      }
    }
    return new _ZodDiscriminatedUnion({
      typeName: ZodFirstPartyTypeKind.ZodDiscriminatedUnion,
      discriminator,
      options,
      optionsMap,
      ...processCreateParams(params)
    });
  }
};
function mergeValues(a2, b2) {
  const aType = getParsedType(a2);
  const bType = getParsedType(b2);
  if (a2 === b2) {
    return { valid: true, data: a2 };
  } else if (aType === ZodParsedType.object && bType === ZodParsedType.object) {
    const bKeys = util.objectKeys(b2);
    const sharedKeys = util.objectKeys(a2).filter((key) => bKeys.indexOf(key) !== -1);
    const newObj = { ...a2, ...b2 };
    for (const key of sharedKeys) {
      const sharedValue = mergeValues(a2[key], b2[key]);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newObj[key] = sharedValue.data;
    }
    return { valid: true, data: newObj };
  } else if (aType === ZodParsedType.array && bType === ZodParsedType.array) {
    if (a2.length !== b2.length) {
      return { valid: false };
    }
    const newArray = [];
    for (let index = 0; index < a2.length; index++) {
      const itemA = a2[index];
      const itemB = b2[index];
      const sharedValue = mergeValues(itemA, itemB);
      if (!sharedValue.valid) {
        return { valid: false };
      }
      newArray.push(sharedValue.data);
    }
    return { valid: true, data: newArray };
  } else if (aType === ZodParsedType.date && bType === ZodParsedType.date && +a2 === +b2) {
    return { valid: true, data: a2 };
  } else {
    return { valid: false };
  }
}
__name(mergeValues, "mergeValues");
var ZodIntersection = class extends ZodType {
  static {
    __name(this, "ZodIntersection");
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const handleParsed = /* @__PURE__ */ __name((parsedLeft, parsedRight) => {
      if (isAborted(parsedLeft) || isAborted(parsedRight)) {
        return INVALID;
      }
      const merged = mergeValues(parsedLeft.value, parsedRight.value);
      if (!merged.valid) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.invalid_intersection_types
        });
        return INVALID;
      }
      if (isDirty(parsedLeft) || isDirty(parsedRight)) {
        status.dirty();
      }
      return { status: status.value, value: merged.data };
    }, "handleParsed");
    if (ctx.common.async) {
      return Promise.all([
        this._def.left._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        }),
        this._def.right._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        })
      ]).then(([left, right]) => handleParsed(left, right));
    } else {
      return handleParsed(this._def.left._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }), this._def.right._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      }));
    }
  }
};
ZodIntersection.create = (left, right, params) => {
  return new ZodIntersection({
    left,
    right,
    typeName: ZodFirstPartyTypeKind.ZodIntersection,
    ...processCreateParams(params)
  });
};
var ZodTuple = class _ZodTuple extends ZodType {
  static {
    __name(this, "ZodTuple");
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.array) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.array,
        received: ctx.parsedType
      });
      return INVALID;
    }
    if (ctx.data.length < this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_small,
        minimum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      return INVALID;
    }
    const rest = this._def.rest;
    if (!rest && ctx.data.length > this._def.items.length) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.too_big,
        maximum: this._def.items.length,
        inclusive: true,
        exact: false,
        type: "array"
      });
      status.dirty();
    }
    const items = [...ctx.data].map((item, itemIndex) => {
      const schema = this._def.items[itemIndex] || this._def.rest;
      if (!schema)
        return null;
      return schema._parse(new ParseInputLazyPath(ctx, item, ctx.path, itemIndex));
    }).filter((x) => !!x);
    if (ctx.common.async) {
      return Promise.all(items).then((results) => {
        return ParseStatus.mergeArray(status, results);
      });
    } else {
      return ParseStatus.mergeArray(status, items);
    }
  }
  get items() {
    return this._def.items;
  }
  rest(rest) {
    return new _ZodTuple({
      ...this._def,
      rest
    });
  }
};
ZodTuple.create = (schemas, params) => {
  if (!Array.isArray(schemas)) {
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  }
  return new ZodTuple({
    items: schemas,
    typeName: ZodFirstPartyTypeKind.ZodTuple,
    rest: null,
    ...processCreateParams(params)
  });
};
var ZodRecord = class _ZodRecord extends ZodType {
  static {
    __name(this, "ZodRecord");
  }
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.object) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.object,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const pairs = [];
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    for (const key in ctx.data) {
      pairs.push({
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, key)),
        value: valueType._parse(new ParseInputLazyPath(ctx, ctx.data[key], ctx.path, key)),
        alwaysSet: key in ctx.data
      });
    }
    if (ctx.common.async) {
      return ParseStatus.mergeObjectAsync(status, pairs);
    } else {
      return ParseStatus.mergeObjectSync(status, pairs);
    }
  }
  get element() {
    return this._def.valueType;
  }
  static create(first, second, third) {
    if (second instanceof ZodType) {
      return new _ZodRecord({
        keyType: first,
        valueType: second,
        typeName: ZodFirstPartyTypeKind.ZodRecord,
        ...processCreateParams(third)
      });
    }
    return new _ZodRecord({
      keyType: ZodString.create(),
      valueType: first,
      typeName: ZodFirstPartyTypeKind.ZodRecord,
      ...processCreateParams(second)
    });
  }
};
var ZodMap = class extends ZodType {
  static {
    __name(this, "ZodMap");
  }
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.map) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.map,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const keyType = this._def.keyType;
    const valueType = this._def.valueType;
    const pairs = [...ctx.data.entries()].map(([key, value], index) => {
      return {
        key: keyType._parse(new ParseInputLazyPath(ctx, key, ctx.path, [index, "key"])),
        value: valueType._parse(new ParseInputLazyPath(ctx, value, ctx.path, [index, "value"]))
      };
    });
    if (ctx.common.async) {
      const finalMap = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const pair of pairs) {
          const key = await pair.key;
          const value = await pair.value;
          if (key.status === "aborted" || value.status === "aborted") {
            return INVALID;
          }
          if (key.status === "dirty" || value.status === "dirty") {
            status.dirty();
          }
          finalMap.set(key.value, value.value);
        }
        return { status: status.value, value: finalMap };
      });
    } else {
      const finalMap = /* @__PURE__ */ new Map();
      for (const pair of pairs) {
        const key = pair.key;
        const value = pair.value;
        if (key.status === "aborted" || value.status === "aborted") {
          return INVALID;
        }
        if (key.status === "dirty" || value.status === "dirty") {
          status.dirty();
        }
        finalMap.set(key.value, value.value);
      }
      return { status: status.value, value: finalMap };
    }
  }
};
ZodMap.create = (keyType, valueType, params) => {
  return new ZodMap({
    valueType,
    keyType,
    typeName: ZodFirstPartyTypeKind.ZodMap,
    ...processCreateParams(params)
  });
};
var ZodSet = class _ZodSet extends ZodType {
  static {
    __name(this, "ZodSet");
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.set) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.set,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const def = this._def;
    if (def.minSize !== null) {
      if (ctx.data.size < def.minSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_small,
          minimum: def.minSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.minSize.message
        });
        status.dirty();
      }
    }
    if (def.maxSize !== null) {
      if (ctx.data.size > def.maxSize.value) {
        addIssueToContext(ctx, {
          code: ZodIssueCode.too_big,
          maximum: def.maxSize.value,
          type: "set",
          inclusive: true,
          exact: false,
          message: def.maxSize.message
        });
        status.dirty();
      }
    }
    const valueType = this._def.valueType;
    function finalizeSet(elements2) {
      const parsedSet = /* @__PURE__ */ new Set();
      for (const element of elements2) {
        if (element.status === "aborted")
          return INVALID;
        if (element.status === "dirty")
          status.dirty();
        parsedSet.add(element.value);
      }
      return { status: status.value, value: parsedSet };
    }
    __name(finalizeSet, "finalizeSet");
    const elements = [...ctx.data.values()].map((item, i2) => valueType._parse(new ParseInputLazyPath(ctx, item, ctx.path, i2)));
    if (ctx.common.async) {
      return Promise.all(elements).then((elements2) => finalizeSet(elements2));
    } else {
      return finalizeSet(elements);
    }
  }
  min(minSize, message) {
    return new _ZodSet({
      ...this._def,
      minSize: { value: minSize, message: errorUtil.toString(message) }
    });
  }
  max(maxSize, message) {
    return new _ZodSet({
      ...this._def,
      maxSize: { value: maxSize, message: errorUtil.toString(message) }
    });
  }
  size(size, message) {
    return this.min(size, message).max(size, message);
  }
  nonempty(message) {
    return this.min(1, message);
  }
};
ZodSet.create = (valueType, params) => {
  return new ZodSet({
    valueType,
    minSize: null,
    maxSize: null,
    typeName: ZodFirstPartyTypeKind.ZodSet,
    ...processCreateParams(params)
  });
};
var ZodFunction = class _ZodFunction extends ZodType {
  static {
    __name(this, "ZodFunction");
  }
  constructor() {
    super(...arguments);
    this.validate = this.implement;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.function) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.function,
        received: ctx.parsedType
      });
      return INVALID;
    }
    function makeArgsIssue(args, error) {
      return makeIssue({
        data: args,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_arguments,
          argumentsError: error
        }
      });
    }
    __name(makeArgsIssue, "makeArgsIssue");
    function makeReturnsIssue(returns, error) {
      return makeIssue({
        data: returns,
        path: ctx.path,
        errorMaps: [ctx.common.contextualErrorMap, ctx.schemaErrorMap, getErrorMap(), en_default].filter((x) => !!x),
        issueData: {
          code: ZodIssueCode.invalid_return_type,
          returnTypeError: error
        }
      });
    }
    __name(makeReturnsIssue, "makeReturnsIssue");
    const params = { errorMap: ctx.common.contextualErrorMap };
    const fn = ctx.data;
    if (this._def.returns instanceof ZodPromise) {
      const me = this;
      return OK(async function(...args) {
        const error = new ZodError([]);
        const parsedArgs = await me._def.args.parseAsync(args, params).catch((e) => {
          error.addIssue(makeArgsIssue(args, e));
          throw error;
        });
        const result = await Reflect.apply(fn, this, parsedArgs);
        const parsedReturns = await me._def.returns._def.type.parseAsync(result, params).catch((e) => {
          error.addIssue(makeReturnsIssue(result, e));
          throw error;
        });
        return parsedReturns;
      });
    } else {
      const me = this;
      return OK(function(...args) {
        const parsedArgs = me._def.args.safeParse(args, params);
        if (!parsedArgs.success) {
          throw new ZodError([makeArgsIssue(args, parsedArgs.error)]);
        }
        const result = Reflect.apply(fn, this, parsedArgs.data);
        const parsedReturns = me._def.returns.safeParse(result, params);
        if (!parsedReturns.success) {
          throw new ZodError([makeReturnsIssue(result, parsedReturns.error)]);
        }
        return parsedReturns.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...items) {
    return new _ZodFunction({
      ...this._def,
      args: ZodTuple.create(items).rest(ZodUnknown.create())
    });
  }
  returns(returnType) {
    return new _ZodFunction({
      ...this._def,
      returns: returnType
    });
  }
  implement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  strictImplement(func) {
    const validatedFunc = this.parse(func);
    return validatedFunc;
  }
  static create(args, returns, params) {
    return new _ZodFunction({
      args: args ? args : ZodTuple.create([]).rest(ZodUnknown.create()),
      returns: returns || ZodUnknown.create(),
      typeName: ZodFirstPartyTypeKind.ZodFunction,
      ...processCreateParams(params)
    });
  }
};
var ZodLazy = class extends ZodType {
  static {
    __name(this, "ZodLazy");
  }
  get schema() {
    return this._def.getter();
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const lazySchema = this._def.getter();
    return lazySchema._parse({ data: ctx.data, path: ctx.path, parent: ctx });
  }
};
ZodLazy.create = (getter, params) => {
  return new ZodLazy({
    getter,
    typeName: ZodFirstPartyTypeKind.ZodLazy,
    ...processCreateParams(params)
  });
};
var ZodLiteral = class extends ZodType {
  static {
    __name(this, "ZodLiteral");
  }
  _parse(input) {
    if (input.data !== this._def.value) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_literal,
        expected: this._def.value
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
  get value() {
    return this._def.value;
  }
};
ZodLiteral.create = (value, params) => {
  return new ZodLiteral({
    value,
    typeName: ZodFirstPartyTypeKind.ZodLiteral,
    ...processCreateParams(params)
  });
};
function createZodEnum(values, params) {
  return new ZodEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodEnum,
    ...processCreateParams(params)
  });
}
__name(createZodEnum, "createZodEnum");
var ZodEnum = class _ZodEnum extends ZodType {
  static {
    __name(this, "ZodEnum");
  }
  _parse(input) {
    if (typeof input.data !== "string") {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(this._def.values);
    }
    if (!this._cache.has(input.data)) {
      const ctx = this._getOrReturnCtx(input);
      const expectedValues = this._def.values;
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Values() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  get Enum() {
    const enumValues = {};
    for (const val of this._def.values) {
      enumValues[val] = val;
    }
    return enumValues;
  }
  extract(values, newDef = this._def) {
    return _ZodEnum.create(values, {
      ...this._def,
      ...newDef
    });
  }
  exclude(values, newDef = this._def) {
    return _ZodEnum.create(this.options.filter((opt) => !values.includes(opt)), {
      ...this._def,
      ...newDef
    });
  }
};
ZodEnum.create = createZodEnum;
var ZodNativeEnum = class extends ZodType {
  static {
    __name(this, "ZodNativeEnum");
  }
  _parse(input) {
    const nativeEnumValues = util.getValidEnumValues(this._def.values);
    const ctx = this._getOrReturnCtx(input);
    if (ctx.parsedType !== ZodParsedType.string && ctx.parsedType !== ZodParsedType.number) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        expected: util.joinValues(expectedValues),
        received: ctx.parsedType,
        code: ZodIssueCode.invalid_type
      });
      return INVALID;
    }
    if (!this._cache) {
      this._cache = new Set(util.getValidEnumValues(this._def.values));
    }
    if (!this._cache.has(input.data)) {
      const expectedValues = util.objectValues(nativeEnumValues);
      addIssueToContext(ctx, {
        received: ctx.data,
        code: ZodIssueCode.invalid_enum_value,
        options: expectedValues
      });
      return INVALID;
    }
    return OK(input.data);
  }
  get enum() {
    return this._def.values;
  }
};
ZodNativeEnum.create = (values, params) => {
  return new ZodNativeEnum({
    values,
    typeName: ZodFirstPartyTypeKind.ZodNativeEnum,
    ...processCreateParams(params)
  });
};
var ZodPromise = class extends ZodType {
  static {
    __name(this, "ZodPromise");
  }
  unwrap() {
    return this._def.type;
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    if (ctx.parsedType !== ZodParsedType.promise && ctx.common.async === false) {
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.promise,
        received: ctx.parsedType
      });
      return INVALID;
    }
    const promisified = ctx.parsedType === ZodParsedType.promise ? ctx.data : Promise.resolve(ctx.data);
    return OK(promisified.then((data) => {
      return this._def.type.parseAsync(data, {
        path: ctx.path,
        errorMap: ctx.common.contextualErrorMap
      });
    }));
  }
};
ZodPromise.create = (schema, params) => {
  return new ZodPromise({
    type: schema,
    typeName: ZodFirstPartyTypeKind.ZodPromise,
    ...processCreateParams(params)
  });
};
var ZodEffects = class extends ZodType {
  static {
    __name(this, "ZodEffects");
  }
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ZodFirstPartyTypeKind.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    const effect = this._def.effect || null;
    const checkCtx = {
      addIssue: /* @__PURE__ */ __name((arg) => {
        addIssueToContext(ctx, arg);
        if (arg.fatal) {
          status.abort();
        } else {
          status.dirty();
        }
      }, "addIssue"),
      get path() {
        return ctx.path;
      }
    };
    checkCtx.addIssue = checkCtx.addIssue.bind(checkCtx);
    if (effect.type === "preprocess") {
      const processed = effect.transform(ctx.data, checkCtx);
      if (ctx.common.async) {
        return Promise.resolve(processed).then(async (processed2) => {
          if (status.value === "aborted")
            return INVALID;
          const result = await this._def.schema._parseAsync({
            data: processed2,
            path: ctx.path,
            parent: ctx
          });
          if (result.status === "aborted")
            return INVALID;
          if (result.status === "dirty")
            return DIRTY(result.value);
          if (status.value === "dirty")
            return DIRTY(result.value);
          return result;
        });
      } else {
        if (status.value === "aborted")
          return INVALID;
        const result = this._def.schema._parseSync({
          data: processed,
          path: ctx.path,
          parent: ctx
        });
        if (result.status === "aborted")
          return INVALID;
        if (result.status === "dirty")
          return DIRTY(result.value);
        if (status.value === "dirty")
          return DIRTY(result.value);
        return result;
      }
    }
    if (effect.type === "refinement") {
      const executeRefinement = /* @__PURE__ */ __name((acc) => {
        const result = effect.refinement(acc, checkCtx);
        if (ctx.common.async) {
          return Promise.resolve(result);
        }
        if (result instanceof Promise) {
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        }
        return acc;
      }, "executeRefinement");
      if (ctx.common.async === false) {
        const inner = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inner.status === "aborted")
          return INVALID;
        if (inner.status === "dirty")
          status.dirty();
        executeRefinement(inner.value);
        return { status: status.value, value: inner.value };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((inner) => {
          if (inner.status === "aborted")
            return INVALID;
          if (inner.status === "dirty")
            status.dirty();
          return executeRefinement(inner.value).then(() => {
            return { status: status.value, value: inner.value };
          });
        });
      }
    }
    if (effect.type === "transform") {
      if (ctx.common.async === false) {
        const base = this._def.schema._parseSync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (!isValid(base))
          return INVALID;
        const result = effect.transform(base.value, checkCtx);
        if (result instanceof Promise) {
          throw new Error(`Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.`);
        }
        return { status: status.value, value: result };
      } else {
        return this._def.schema._parseAsync({ data: ctx.data, path: ctx.path, parent: ctx }).then((base) => {
          if (!isValid(base))
            return INVALID;
          return Promise.resolve(effect.transform(base.value, checkCtx)).then((result) => ({
            status: status.value,
            value: result
          }));
        });
      }
    }
    util.assertNever(effect);
  }
};
ZodEffects.create = (schema, effect, params) => {
  return new ZodEffects({
    schema,
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    effect,
    ...processCreateParams(params)
  });
};
ZodEffects.createWithPreprocess = (preprocess, schema, params) => {
  return new ZodEffects({
    schema,
    effect: { type: "preprocess", transform: preprocess },
    typeName: ZodFirstPartyTypeKind.ZodEffects,
    ...processCreateParams(params)
  });
};
var ZodOptional = class extends ZodType {
  static {
    __name(this, "ZodOptional");
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.undefined) {
      return OK(void 0);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodOptional.create = (type, params) => {
  return new ZodOptional({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodOptional,
    ...processCreateParams(params)
  });
};
var ZodNullable = class extends ZodType {
  static {
    __name(this, "ZodNullable");
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType === ZodParsedType.null) {
      return OK(null);
    }
    return this._def.innerType._parse(input);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodNullable.create = (type, params) => {
  return new ZodNullable({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodNullable,
    ...processCreateParams(params)
  });
};
var ZodDefault = class extends ZodType {
  static {
    __name(this, "ZodDefault");
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    let data = ctx.data;
    if (ctx.parsedType === ZodParsedType.undefined) {
      data = this._def.defaultValue();
    }
    return this._def.innerType._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
};
ZodDefault.create = (type, params) => {
  return new ZodDefault({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodDefault,
    defaultValue: typeof params.default === "function" ? params.default : () => params.default,
    ...processCreateParams(params)
  });
};
var ZodCatch = class extends ZodType {
  static {
    __name(this, "ZodCatch");
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const newCtx = {
      ...ctx,
      common: {
        ...ctx.common,
        issues: []
      }
    };
    const result = this._def.innerType._parse({
      data: newCtx.data,
      path: newCtx.path,
      parent: {
        ...newCtx
      }
    });
    if (isAsync(result)) {
      return result.then((result2) => {
        return {
          status: "valid",
          value: result2.status === "valid" ? result2.value : this._def.catchValue({
            get error() {
              return new ZodError(newCtx.common.issues);
            },
            input: newCtx.data
          })
        };
      });
    } else {
      return {
        status: "valid",
        value: result.status === "valid" ? result.value : this._def.catchValue({
          get error() {
            return new ZodError(newCtx.common.issues);
          },
          input: newCtx.data
        })
      };
    }
  }
  removeCatch() {
    return this._def.innerType;
  }
};
ZodCatch.create = (type, params) => {
  return new ZodCatch({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodCatch,
    catchValue: typeof params.catch === "function" ? params.catch : () => params.catch,
    ...processCreateParams(params)
  });
};
var ZodNaN = class extends ZodType {
  static {
    __name(this, "ZodNaN");
  }
  _parse(input) {
    const parsedType = this._getType(input);
    if (parsedType !== ZodParsedType.nan) {
      const ctx = this._getOrReturnCtx(input);
      addIssueToContext(ctx, {
        code: ZodIssueCode.invalid_type,
        expected: ZodParsedType.nan,
        received: ctx.parsedType
      });
      return INVALID;
    }
    return { status: "valid", value: input.data };
  }
};
ZodNaN.create = (params) => {
  return new ZodNaN({
    typeName: ZodFirstPartyTypeKind.ZodNaN,
    ...processCreateParams(params)
  });
};
var BRAND = Symbol("zod_brand");
var ZodBranded = class extends ZodType {
  static {
    __name(this, "ZodBranded");
  }
  _parse(input) {
    const { ctx } = this._processInputParams(input);
    const data = ctx.data;
    return this._def.type._parse({
      data,
      path: ctx.path,
      parent: ctx
    });
  }
  unwrap() {
    return this._def.type;
  }
};
var ZodPipeline = class _ZodPipeline extends ZodType {
  static {
    __name(this, "ZodPipeline");
  }
  _parse(input) {
    const { status, ctx } = this._processInputParams(input);
    if (ctx.common.async) {
      const handleAsync = /* @__PURE__ */ __name(async () => {
        const inResult = await this._def.in._parseAsync({
          data: ctx.data,
          path: ctx.path,
          parent: ctx
        });
        if (inResult.status === "aborted")
          return INVALID;
        if (inResult.status === "dirty") {
          status.dirty();
          return DIRTY(inResult.value);
        } else {
          return this._def.out._parseAsync({
            data: inResult.value,
            path: ctx.path,
            parent: ctx
          });
        }
      }, "handleAsync");
      return handleAsync();
    } else {
      const inResult = this._def.in._parseSync({
        data: ctx.data,
        path: ctx.path,
        parent: ctx
      });
      if (inResult.status === "aborted")
        return INVALID;
      if (inResult.status === "dirty") {
        status.dirty();
        return {
          status: "dirty",
          value: inResult.value
        };
      } else {
        return this._def.out._parseSync({
          data: inResult.value,
          path: ctx.path,
          parent: ctx
        });
      }
    }
  }
  static create(a2, b2) {
    return new _ZodPipeline({
      in: a2,
      out: b2,
      typeName: ZodFirstPartyTypeKind.ZodPipeline
    });
  }
};
var ZodReadonly = class extends ZodType {
  static {
    __name(this, "ZodReadonly");
  }
  _parse(input) {
    const result = this._def.innerType._parse(input);
    const freeze = /* @__PURE__ */ __name((data) => {
      if (isValid(data)) {
        data.value = Object.freeze(data.value);
      }
      return data;
    }, "freeze");
    return isAsync(result) ? result.then((data) => freeze(data)) : freeze(result);
  }
  unwrap() {
    return this._def.innerType;
  }
};
ZodReadonly.create = (type, params) => {
  return new ZodReadonly({
    innerType: type,
    typeName: ZodFirstPartyTypeKind.ZodReadonly,
    ...processCreateParams(params)
  });
};
function cleanParams(params, data) {
  const p2 = typeof params === "function" ? params(data) : typeof params === "string" ? { message: params } : params;
  const p22 = typeof p2 === "string" ? { message: p2 } : p2;
  return p22;
}
__name(cleanParams, "cleanParams");
function custom(check, _params = {}, fatal) {
  if (check)
    return ZodAny.create().superRefine((data, ctx) => {
      const r2 = check(data);
      if (r2 instanceof Promise) {
        return r2.then((r3) => {
          if (!r3) {
            const params = cleanParams(_params, data);
            const _fatal = params.fatal ?? fatal ?? true;
            ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
          }
        });
      }
      if (!r2) {
        const params = cleanParams(_params, data);
        const _fatal = params.fatal ?? fatal ?? true;
        ctx.addIssue({ code: "custom", ...params, fatal: _fatal });
      }
      return;
    });
  return ZodAny.create();
}
__name(custom, "custom");
var late = {
  object: ZodObject.lazycreate
};
var ZodFirstPartyTypeKind;
(function(ZodFirstPartyTypeKind2) {
  ZodFirstPartyTypeKind2["ZodString"] = "ZodString";
  ZodFirstPartyTypeKind2["ZodNumber"] = "ZodNumber";
  ZodFirstPartyTypeKind2["ZodNaN"] = "ZodNaN";
  ZodFirstPartyTypeKind2["ZodBigInt"] = "ZodBigInt";
  ZodFirstPartyTypeKind2["ZodBoolean"] = "ZodBoolean";
  ZodFirstPartyTypeKind2["ZodDate"] = "ZodDate";
  ZodFirstPartyTypeKind2["ZodSymbol"] = "ZodSymbol";
  ZodFirstPartyTypeKind2["ZodUndefined"] = "ZodUndefined";
  ZodFirstPartyTypeKind2["ZodNull"] = "ZodNull";
  ZodFirstPartyTypeKind2["ZodAny"] = "ZodAny";
  ZodFirstPartyTypeKind2["ZodUnknown"] = "ZodUnknown";
  ZodFirstPartyTypeKind2["ZodNever"] = "ZodNever";
  ZodFirstPartyTypeKind2["ZodVoid"] = "ZodVoid";
  ZodFirstPartyTypeKind2["ZodArray"] = "ZodArray";
  ZodFirstPartyTypeKind2["ZodObject"] = "ZodObject";
  ZodFirstPartyTypeKind2["ZodUnion"] = "ZodUnion";
  ZodFirstPartyTypeKind2["ZodDiscriminatedUnion"] = "ZodDiscriminatedUnion";
  ZodFirstPartyTypeKind2["ZodIntersection"] = "ZodIntersection";
  ZodFirstPartyTypeKind2["ZodTuple"] = "ZodTuple";
  ZodFirstPartyTypeKind2["ZodRecord"] = "ZodRecord";
  ZodFirstPartyTypeKind2["ZodMap"] = "ZodMap";
  ZodFirstPartyTypeKind2["ZodSet"] = "ZodSet";
  ZodFirstPartyTypeKind2["ZodFunction"] = "ZodFunction";
  ZodFirstPartyTypeKind2["ZodLazy"] = "ZodLazy";
  ZodFirstPartyTypeKind2["ZodLiteral"] = "ZodLiteral";
  ZodFirstPartyTypeKind2["ZodEnum"] = "ZodEnum";
  ZodFirstPartyTypeKind2["ZodEffects"] = "ZodEffects";
  ZodFirstPartyTypeKind2["ZodNativeEnum"] = "ZodNativeEnum";
  ZodFirstPartyTypeKind2["ZodOptional"] = "ZodOptional";
  ZodFirstPartyTypeKind2["ZodNullable"] = "ZodNullable";
  ZodFirstPartyTypeKind2["ZodDefault"] = "ZodDefault";
  ZodFirstPartyTypeKind2["ZodCatch"] = "ZodCatch";
  ZodFirstPartyTypeKind2["ZodPromise"] = "ZodPromise";
  ZodFirstPartyTypeKind2["ZodBranded"] = "ZodBranded";
  ZodFirstPartyTypeKind2["ZodPipeline"] = "ZodPipeline";
  ZodFirstPartyTypeKind2["ZodReadonly"] = "ZodReadonly";
})(ZodFirstPartyTypeKind || (ZodFirstPartyTypeKind = {}));
var instanceOfType = /* @__PURE__ */ __name((cls, params = {
  message: `Input not instance of ${cls.name}`
}) => custom((data) => data instanceof cls, params), "instanceOfType");
var stringType = ZodString.create;
var numberType = ZodNumber.create;
var nanType = ZodNaN.create;
var bigIntType = ZodBigInt.create;
var booleanType = ZodBoolean.create;
var dateType = ZodDate.create;
var symbolType = ZodSymbol.create;
var undefinedType = ZodUndefined.create;
var nullType = ZodNull.create;
var anyType = ZodAny.create;
var unknownType = ZodUnknown.create;
var neverType = ZodNever.create;
var voidType = ZodVoid.create;
var arrayType = ZodArray.create;
var objectType = ZodObject.create;
var strictObjectType = ZodObject.strictCreate;
var unionType = ZodUnion.create;
var discriminatedUnionType = ZodDiscriminatedUnion.create;
var intersectionType = ZodIntersection.create;
var tupleType = ZodTuple.create;
var recordType = ZodRecord.create;
var mapType = ZodMap.create;
var setType = ZodSet.create;
var functionType = ZodFunction.create;
var lazyType = ZodLazy.create;
var literalType = ZodLiteral.create;
var enumType = ZodEnum.create;
var nativeEnumType = ZodNativeEnum.create;
var promiseType = ZodPromise.create;
var effectsType = ZodEffects.create;
var optionalType = ZodOptional.create;
var nullableType = ZodNullable.create;
var preprocessType = ZodEffects.createWithPreprocess;
var pipelineType = ZodPipeline.create;
var ostring = /* @__PURE__ */ __name(() => stringType().optional(), "ostring");
var onumber = /* @__PURE__ */ __name(() => numberType().optional(), "onumber");
var oboolean = /* @__PURE__ */ __name(() => booleanType().optional(), "oboolean");
var coerce = {
  string: /* @__PURE__ */ __name((arg) => ZodString.create({ ...arg, coerce: true }), "string"),
  number: /* @__PURE__ */ __name((arg) => ZodNumber.create({ ...arg, coerce: true }), "number"),
  boolean: /* @__PURE__ */ __name((arg) => ZodBoolean.create({
    ...arg,
    coerce: true
  }), "boolean"),
  bigint: /* @__PURE__ */ __name((arg) => ZodBigInt.create({ ...arg, coerce: true }), "bigint"),
  date: /* @__PURE__ */ __name((arg) => ZodDate.create({ ...arg, coerce: true }), "date")
};
var NEVER = INVALID;

// node_modules/zod/index.js
var zod_default = external_exports;

// node_modules/@trigger.dev/core/dist/esm/version.js
init_esm();
var VERSION2 = "4.0.1";

// node_modules/@trigger.dev/core/dist/esm/v3/jwt.js
init_esm();
var JWT_ALGORITHM = "HS256";
var JWT_ISSUER = "https://id.trigger.dev";
var JWT_AUDIENCE = "https://api.trigger.dev";
async function generateJWT(options) {
  const { SignJWT } = await import("./esm-SYFXI6CJ.mjs");
  const secret = new TextEncoder().encode(options.secretKey);
  return new SignJWT(options.payload).setIssuer(JWT_ISSUER).setAudience(JWT_AUDIENCE).setProtectedHeader({ alg: JWT_ALGORITHM }).setIssuedAt().setExpirationTime(options.expirationTime ?? "15m").sign(secret);
}
__name(generateJWT, "generateJWT");

// node_modules/@trigger.dev/core/dist/esm/v3/schemas/index.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/schemas/tokens.js
init_esm();
var CreateAuthorizationCodeResponseSchema = external_exports.object({
  url: external_exports.string().url(),
  authorizationCode: external_exports.string()
});
var GetPersonalAccessTokenRequestSchema = external_exports.object({
  authorizationCode: external_exports.string()
});
var GetPersonalAccessTokenResponseSchema = external_exports.object({
  token: external_exports.object({
    token: external_exports.string(),
    obfuscatedToken: external_exports.string()
  }).nullable()
});

// node_modules/@trigger.dev/core/dist/esm/v3/schemas/api.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/schemas/json.js
init_esm();
var LiteralSchema = external_exports.union([external_exports.string(), external_exports.number(), external_exports.boolean(), external_exports.null()]);
var DeserializedJsonSchema = external_exports.lazy(() => external_exports.union([LiteralSchema, external_exports.array(DeserializedJsonSchema), external_exports.record(DeserializedJsonSchema)]));
var SerializableSchema = external_exports.union([
  external_exports.string(),
  external_exports.number(),
  external_exports.boolean(),
  external_exports.null(),
  external_exports.date(),
  external_exports.undefined(),
  external_exports.symbol()
]);
var SerializableJsonSchema = external_exports.lazy(() => external_exports.union([SerializableSchema, external_exports.array(SerializableJsonSchema), external_exports.record(SerializableJsonSchema)]));

// node_modules/@trigger.dev/core/dist/esm/v3/schemas/common.js
init_esm();
var RunMetadataUpdateOperation = external_exports.object({
  type: external_exports.literal("update"),
  value: external_exports.record(external_exports.unknown())
});
var RunMetadataSetKeyOperation = external_exports.object({
  type: external_exports.literal("set"),
  key: external_exports.string(),
  value: DeserializedJsonSchema
});
var RunMetadataDeleteKeyOperation = external_exports.object({
  type: external_exports.literal("delete"),
  key: external_exports.string()
});
var RunMetadataAppendKeyOperation = external_exports.object({
  type: external_exports.literal("append"),
  key: external_exports.string(),
  value: DeserializedJsonSchema
});
var RunMetadataRemoveFromKeyOperation = external_exports.object({
  type: external_exports.literal("remove"),
  key: external_exports.string(),
  value: DeserializedJsonSchema
});
var RunMetadataIncrementKeyOperation = external_exports.object({
  type: external_exports.literal("increment"),
  key: external_exports.string(),
  value: external_exports.number()
});
var RunMetadataChangeOperation = external_exports.discriminatedUnion("type", [
  RunMetadataUpdateOperation,
  RunMetadataSetKeyOperation,
  RunMetadataDeleteKeyOperation,
  RunMetadataAppendKeyOperation,
  RunMetadataRemoveFromKeyOperation,
  RunMetadataIncrementKeyOperation
]);
var FlushedRunMetadata = external_exports.object({
  metadata: external_exports.record(DeserializedJsonSchema).optional(),
  operations: external_exports.array(RunMetadataChangeOperation).optional(),
  parentOperations: external_exports.array(RunMetadataChangeOperation).optional(),
  rootOperations: external_exports.array(RunMetadataChangeOperation).optional()
});
var MachineCpu = external_exports.union([
  external_exports.literal(0.25),
  external_exports.literal(0.5),
  external_exports.literal(1),
  external_exports.literal(2),
  external_exports.literal(4)
]);
var MachineMemory = external_exports.union([
  external_exports.literal(0.25),
  external_exports.literal(0.5),
  external_exports.literal(1),
  external_exports.literal(2),
  external_exports.literal(4),
  external_exports.literal(8)
]);
var MachinePresetName = external_exports.enum([
  "micro",
  "small-1x",
  "small-2x",
  "medium-1x",
  "medium-2x",
  "large-1x",
  "large-2x"
]);
var MachineConfig = external_exports.object({
  cpu: MachineCpu.optional(),
  memory: MachineMemory.optional(),
  preset: MachinePresetName.optional()
});
var MachinePreset = external_exports.object({
  name: MachinePresetName,
  /** unit: vCPU */
  cpu: external_exports.number(),
  /** unit: GB */
  memory: external_exports.number(),
  centsPerMs: external_exports.number()
});
var TaskRunBuiltInError = external_exports.object({
  type: external_exports.literal("BUILT_IN_ERROR"),
  name: external_exports.string(),
  message: external_exports.string(),
  stackTrace: external_exports.string()
});
var TaskRunCustomErrorObject = external_exports.object({
  type: external_exports.literal("CUSTOM_ERROR"),
  raw: external_exports.string()
});
var TaskRunStringError = external_exports.object({
  type: external_exports.literal("STRING_ERROR"),
  raw: external_exports.string()
});
var TaskRunInternalError = external_exports.object({
  type: external_exports.literal("INTERNAL_ERROR"),
  code: external_exports.enum([
    "COULD_NOT_FIND_EXECUTOR",
    "COULD_NOT_FIND_TASK",
    "COULD_NOT_IMPORT_TASK",
    "CONFIGURED_INCORRECTLY",
    "TASK_ALREADY_RUNNING",
    "TASK_EXECUTION_FAILED",
    "TASK_EXECUTION_ABORTED",
    "TASK_PROCESS_EXITED_WITH_NON_ZERO_CODE",
    "TASK_PROCESS_SIGKILL_TIMEOUT",
    "TASK_PROCESS_SIGSEGV",
    "TASK_PROCESS_SIGTERM",
    "TASK_PROCESS_OOM_KILLED",
    "TASK_PROCESS_MAYBE_OOM_KILLED",
    "TASK_RUN_CANCELLED",
    "TASK_INPUT_ERROR",
    "TASK_OUTPUT_ERROR",
    "TASK_MIDDLEWARE_ERROR",
    "HANDLE_ERROR_ERROR",
    "GRACEFUL_EXIT_TIMEOUT",
    "TASK_RUN_HEARTBEAT_TIMEOUT",
    "TASK_RUN_CRASHED",
    "MAX_DURATION_EXCEEDED",
    "DISK_SPACE_EXCEEDED",
    "POD_EVICTED",
    "POD_UNKNOWN_ERROR",
    "TASK_HAS_N0_EXECUTION_SNAPSHOT",
    "TASK_DEQUEUED_INVALID_STATE",
    "TASK_DEQUEUED_QUEUE_NOT_FOUND",
    "TASK_RUN_DEQUEUED_MAX_RETRIES",
    "TASK_RUN_STALLED_EXECUTING",
    "TASK_RUN_STALLED_EXECUTING_WITH_WAITPOINTS",
    "OUTDATED_SDK_VERSION",
    "TASK_DID_CONCURRENT_WAIT",
    "RECURSIVE_WAIT_DEADLOCK"
  ]),
  message: external_exports.string().optional(),
  stackTrace: external_exports.string().optional()
});
var TaskRunErrorCodes = TaskRunInternalError.shape.code.enum;
var TaskRunError = external_exports.discriminatedUnion("type", [
  TaskRunBuiltInError,
  TaskRunCustomErrorObject,
  TaskRunStringError,
  TaskRunInternalError
]);
var TaskRun = external_exports.object({
  id: external_exports.string(),
  payload: external_exports.string(),
  payloadType: external_exports.string(),
  tags: external_exports.array(external_exports.string()),
  isTest: external_exports.boolean().default(false),
  createdAt: external_exports.coerce.date(),
  startedAt: external_exports.coerce.date().default(() => /* @__PURE__ */ new Date()),
  idempotencyKey: external_exports.string().optional(),
  maxAttempts: external_exports.number().optional(),
  version: external_exports.string().optional(),
  metadata: external_exports.record(DeserializedJsonSchema).optional(),
  maxDuration: external_exports.number().optional(),
  /** The priority of the run. Wih a value of 10 it will be dequeued before runs that were triggered 9 seconds before it (assuming they had no priority set).  */
  priority: external_exports.number().optional(),
  baseCostInCents: external_exports.number().optional(),
  parentTaskRunId: external_exports.string().optional(),
  rootTaskRunId: external_exports.string().optional(),
  // These are only used during execution, not in run.ctx
  durationMs: external_exports.number().optional(),
  costInCents: external_exports.number().optional(),
  region: external_exports.string().optional()
});
var GitMeta = external_exports.object({
  provider: external_exports.string().optional(),
  source: external_exports.enum(["trigger_github_app", "github_actions", "local"]).optional(),
  ghUsername: external_exports.string().optional(),
  ghUserAvatarUrl: external_exports.string().optional(),
  commitAuthorName: external_exports.string().optional(),
  commitMessage: external_exports.string().optional(),
  commitRef: external_exports.string().optional(),
  commitSha: external_exports.string().optional(),
  dirty: external_exports.boolean().optional(),
  remoteUrl: external_exports.string().optional(),
  pullRequestNumber: external_exports.number().optional(),
  pullRequestTitle: external_exports.string().optional(),
  pullRequestState: external_exports.enum(["open", "closed", "merged"]).optional()
});
var TaskRunExecutionTask = external_exports.object({
  id: external_exports.string(),
  filePath: external_exports.string()
});
var TaskRunExecutionAttempt = external_exports.object({
  number: external_exports.number(),
  startedAt: external_exports.coerce.date()
});
var TaskRunExecutionEnvironment = external_exports.object({
  id: external_exports.string(),
  slug: external_exports.string(),
  type: external_exports.enum(["PRODUCTION", "STAGING", "DEVELOPMENT", "PREVIEW"]),
  branchName: external_exports.string().optional(),
  git: GitMeta.optional()
});
var TaskRunExecutionOrganization = external_exports.object({
  id: external_exports.string(),
  slug: external_exports.string(),
  name: external_exports.string()
});
var TaskRunExecutionProject = external_exports.object({
  id: external_exports.string(),
  ref: external_exports.string(),
  slug: external_exports.string(),
  name: external_exports.string()
});
var TaskRunExecutionQueue = external_exports.object({
  id: external_exports.string(),
  name: external_exports.string()
});
var TaskRunExecutionBatch = external_exports.object({
  id: external_exports.string()
});
var TaskRunExecutionDeployment = external_exports.object({
  id: external_exports.string(),
  shortCode: external_exports.string(),
  version: external_exports.string(),
  runtime: external_exports.string(),
  runtimeVersion: external_exports.string(),
  git: GitMeta.optional()
});
var StaticTaskRunExecutionShape = {
  // Passthrough needed for backwards compatibility
  task: TaskRunExecutionTask.passthrough(),
  queue: TaskRunExecutionQueue,
  environment: TaskRunExecutionEnvironment,
  organization: TaskRunExecutionOrganization,
  project: TaskRunExecutionProject,
  machine: MachinePreset,
  batch: TaskRunExecutionBatch.optional(),
  deployment: TaskRunExecutionDeployment.optional()
};
var StaticTaskRunExecution = external_exports.object(StaticTaskRunExecutionShape);
var TaskRunExecution = external_exports.object({
  // Passthrough needed for backwards compatibility
  attempt: TaskRunExecutionAttempt.passthrough(),
  run: TaskRun.and(external_exports.object({
    traceContext: external_exports.record(external_exports.unknown()).optional()
  })),
  ...StaticTaskRunExecutionShape
});
var V3TaskRunExecutionTask = external_exports.object({
  id: external_exports.string(),
  filePath: external_exports.string(),
  exportName: external_exports.string().optional()
});
var V3TaskRunExecutionAttempt = external_exports.object({
  number: external_exports.number(),
  startedAt: external_exports.coerce.date(),
  id: external_exports.string(),
  backgroundWorkerId: external_exports.string(),
  backgroundWorkerTaskId: external_exports.string(),
  status: external_exports.string()
});
var V3TaskRun = external_exports.object({
  id: external_exports.string(),
  payload: external_exports.string(),
  payloadType: external_exports.string(),
  tags: external_exports.array(external_exports.string()),
  isTest: external_exports.boolean().default(false),
  createdAt: external_exports.coerce.date(),
  startedAt: external_exports.coerce.date().default(() => /* @__PURE__ */ new Date()),
  idempotencyKey: external_exports.string().optional(),
  maxAttempts: external_exports.number().optional(),
  version: external_exports.string().optional(),
  metadata: external_exports.record(DeserializedJsonSchema).optional(),
  maxDuration: external_exports.number().optional(),
  context: external_exports.unknown(),
  durationMs: external_exports.number(),
  costInCents: external_exports.number(),
  baseCostInCents: external_exports.number()
});
var V3TaskRunExecution = external_exports.object({
  task: V3TaskRunExecutionTask,
  attempt: V3TaskRunExecutionAttempt,
  run: V3TaskRun.and(external_exports.object({
    traceContext: external_exports.record(external_exports.unknown()).optional()
  })),
  queue: TaskRunExecutionQueue,
  environment: TaskRunExecutionEnvironment,
  organization: TaskRunExecutionOrganization,
  project: TaskRunExecutionProject,
  machine: MachinePreset,
  batch: TaskRunExecutionBatch.optional()
});
var TaskRunContext = external_exports.object({
  attempt: TaskRunExecutionAttempt,
  run: TaskRun.omit({
    payload: true,
    payloadType: true,
    metadata: true,
    durationMs: true,
    costInCents: true
  }),
  ...StaticTaskRunExecutionShape
});
var V3TaskRunExecutionEnvironment = external_exports.object({
  id: external_exports.string(),
  slug: external_exports.string(),
  type: external_exports.enum(["PRODUCTION", "STAGING", "DEVELOPMENT", "PREVIEW"])
});
var V3TaskRunContext = external_exports.object({
  attempt: V3TaskRunExecutionAttempt.omit({
    backgroundWorkerId: true,
    backgroundWorkerTaskId: true
  }),
  run: V3TaskRun.omit({
    payload: true,
    payloadType: true,
    metadata: true
  }),
  task: V3TaskRunExecutionTask,
  queue: TaskRunExecutionQueue,
  environment: V3TaskRunExecutionEnvironment,
  organization: TaskRunExecutionOrganization,
  project: TaskRunExecutionProject,
  batch: TaskRunExecutionBatch.optional(),
  machine: MachinePreset.optional()
});
var TaskRunExecutionRetry = external_exports.object({
  timestamp: external_exports.number(),
  /** Retry delay in milliseconds */
  delay: external_exports.number(),
  error: external_exports.unknown().optional()
});
var TaskRunExecutionUsage = external_exports.object({
  durationMs: external_exports.number()
});
var TaskRunFailedExecutionResult = external_exports.object({
  ok: external_exports.literal(false),
  id: external_exports.string(),
  error: TaskRunError,
  retry: TaskRunExecutionRetry.optional(),
  skippedRetrying: external_exports.boolean().optional(),
  usage: TaskRunExecutionUsage.optional(),
  // Optional for now for backwards compatibility
  taskIdentifier: external_exports.string().optional(),
  // This is deprecated, use flushedMetadata instead
  metadata: FlushedRunMetadata.optional(),
  // This is the new way to flush metadata
  flushedMetadata: external_exports.object({
    data: external_exports.string().optional(),
    dataType: external_exports.string()
  }).optional()
});
var TaskRunSuccessfulExecutionResult = external_exports.object({
  ok: external_exports.literal(true),
  id: external_exports.string(),
  output: external_exports.string().optional(),
  outputType: external_exports.string(),
  usage: TaskRunExecutionUsage.optional(),
  // Optional for now for backwards compatibility
  taskIdentifier: external_exports.string().optional(),
  // This is deprecated, use flushedMetadata instead
  metadata: FlushedRunMetadata.optional(),
  // This is the new way to flush metadata
  flushedMetadata: external_exports.object({
    data: external_exports.string().optional(),
    dataType: external_exports.string()
  }).optional()
});
var TaskRunExecutionResult = external_exports.discriminatedUnion("ok", [
  TaskRunSuccessfulExecutionResult,
  TaskRunFailedExecutionResult
]);
var BatchTaskRunExecutionResult = external_exports.object({
  id: external_exports.string(),
  items: TaskRunExecutionResult.array()
});
var WaitpointTokenResult = external_exports.object({
  ok: external_exports.boolean(),
  output: external_exports.string().optional(),
  outputType: external_exports.string().optional()
});
var SerializedError = external_exports.object({
  message: external_exports.string(),
  name: external_exports.string().optional(),
  stackTrace: external_exports.string().optional()
});
var RuntimeEnvironmentType = {
  PRODUCTION: "PRODUCTION",
  STAGING: "STAGING",
  DEVELOPMENT: "DEVELOPMENT",
  PREVIEW: "PREVIEW"
};
var RuntimeEnvironmentTypeSchema = external_exports.enum(Object.values(RuntimeEnvironmentType));

// node_modules/@trigger.dev/core/dist/esm/v3/schemas/resources.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/schemas/schemas.js
init_esm();
var EnvironmentType = external_exports.enum(["PRODUCTION", "STAGING", "DEVELOPMENT", "PREVIEW"]);
var RunEngineVersionSchema = external_exports.enum(["V1", "V2"]);
var TaskRunExecutionMetric = external_exports.object({
  name: external_exports.string(),
  event: external_exports.string(),
  timestamp: external_exports.number(),
  duration: external_exports.number()
});
var TaskRunExecutionMetrics = external_exports.array(TaskRunExecutionMetric);
var TaskRunExecutionPayload = external_exports.object({
  execution: TaskRunExecution,
  traceContext: external_exports.record(external_exports.unknown()),
  environment: external_exports.record(external_exports.string()).optional(),
  metrics: TaskRunExecutionMetrics.optional()
});
var V3ProdTaskRunExecution = V3TaskRunExecution.extend({
  worker: external_exports.object({
    id: external_exports.string(),
    contentHash: external_exports.string(),
    version: external_exports.string(),
    type: RunEngineVersionSchema.optional()
  }),
  machine: MachinePreset.default({ name: "small-1x", cpu: 1, memory: 1, centsPerMs: 0 })
});
var V3ProdTaskRunExecutionPayload = external_exports.object({
  execution: V3ProdTaskRunExecution,
  traceContext: external_exports.record(external_exports.unknown()),
  environment: external_exports.record(external_exports.string()).optional(),
  metrics: TaskRunExecutionMetrics.optional()
});
var FixedWindowRateLimit = external_exports.object({
  type: external_exports.literal("fixed-window"),
  limit: external_exports.number(),
  window: external_exports.union([
    external_exports.object({
      seconds: external_exports.number()
    }),
    external_exports.object({
      minutes: external_exports.number()
    }),
    external_exports.object({
      hours: external_exports.number()
    })
  ])
});
var SlidingWindowRateLimit = external_exports.object({
  type: external_exports.literal("sliding-window"),
  limit: external_exports.number(),
  window: external_exports.union([
    external_exports.object({
      seconds: external_exports.number()
    }),
    external_exports.object({
      minutes: external_exports.number()
    }),
    external_exports.object({
      hours: external_exports.number()
    })
  ])
});
var RateLimitOptions = external_exports.discriminatedUnion("type", [
  FixedWindowRateLimit,
  SlidingWindowRateLimit
]);
var RetryOptions = external_exports.object({
  /** The number of attempts before giving up */
  maxAttempts: external_exports.number().int().optional(),
  /** The exponential factor to use when calculating the next retry time.
   *
   * Each subsequent retry will be calculated as `previousTimeout * factor`
   */
  factor: external_exports.number().optional(),
  /** The minimum time to wait before retrying */
  minTimeoutInMs: external_exports.number().int().optional(),
  /** The maximum time to wait before retrying */
  maxTimeoutInMs: external_exports.number().int().optional(),
  /** Randomize the timeout between retries.
   *
   * This can be useful to prevent the thundering herd problem where all retries happen at the same time.
   */
  randomize: external_exports.boolean().optional(),
  /** If a run fails with an Out Of Memory (OOM) error and you have this set, it will retry with the machine you specify.
   * Note: it will not default to this [machine](https://trigger.dev/docs/machines) for new runs, only for failures caused by OOM errors.
   * So if you frequently have attempts failing with OOM errors, you should set the [default machine](https://trigger.dev/docs/machines) to be higher.
   */
  outOfMemory: external_exports.object({
    machine: MachinePresetName.optional()
  }).optional()
});
var QueueManifest = external_exports.object({
  /** You can define a shared queue and then pass the name in to your task.
     *
     * @example
     *
     * ```ts
     * const myQueue = queue({
        name: "my-queue",
        concurrencyLimit: 1,
      });
  
      export const task1 = task({
        id: "task-1",
        queue: {
          name: "my-queue",
        },
        run: async (payload: { message: string }) => {
          // ...
        },
      });
  
      export const task2 = task({
        id: "task-2",
        queue: {
          name: "my-queue",
        },
        run: async (payload: { message: string }) => {
          // ...
        },
      });
     * ```
     */
  name: external_exports.string(),
  /** An optional property that specifies the maximum number of concurrent run executions.
   *
   * If this property is omitted, the task can potentially use up the full concurrency of an environment */
  concurrencyLimit: external_exports.number().int().min(0).max(1e5).optional().nullable()
});
var ScheduleMetadata = external_exports.object({
  cron: external_exports.string(),
  timezone: external_exports.string(),
  environments: external_exports.array(EnvironmentType).optional()
});
var taskMetadata = {
  id: external_exports.string(),
  description: external_exports.string().optional(),
  queue: QueueManifest.extend({ name: external_exports.string().optional() }).optional(),
  retry: RetryOptions.optional(),
  machine: MachineConfig.optional(),
  triggerSource: external_exports.string().optional(),
  schedule: ScheduleMetadata.optional(),
  maxDuration: external_exports.number().optional(),
  payloadSchema: external_exports.unknown().optional()
};
var TaskMetadata = external_exports.object(taskMetadata);
var TaskFile = external_exports.object({
  entry: external_exports.string(),
  out: external_exports.string()
});
var taskFileMetadata = {
  filePath: external_exports.string(),
  exportName: external_exports.string().optional(),
  entryPoint: external_exports.string()
};
var TaskFileMetadata = external_exports.object(taskFileMetadata);
var TaskManifest = external_exports.object({
  ...taskMetadata,
  ...taskFileMetadata
});
var PostStartCauses = external_exports.enum(["index", "create", "restore"]);
var PreStopCauses = external_exports.enum(["terminate"]);
var RegexSchema = external_exports.custom((val) => {
  try {
    return typeof val.test === "function";
  } catch {
    return false;
  }
});
var Config = external_exports.object({
  project: external_exports.string(),
  triggerDirectories: external_exports.string().array().optional(),
  triggerUrl: external_exports.string().optional(),
  projectDir: external_exports.string().optional(),
  tsconfigPath: external_exports.string().optional(),
  retries: external_exports.object({
    enabledInDev: external_exports.boolean().default(true),
    default: RetryOptions.optional()
  }).optional(),
  additionalPackages: external_exports.string().array().optional(),
  additionalFiles: external_exports.string().array().optional(),
  dependenciesToBundle: external_exports.array(external_exports.union([external_exports.string(), RegexSchema])).optional(),
  logLevel: external_exports.string().optional(),
  enableConsoleLogging: external_exports.boolean().optional(),
  postInstall: external_exports.string().optional(),
  extraCACerts: external_exports.string().optional()
});
var WaitReason = external_exports.enum(["WAIT_FOR_DURATION", "WAIT_FOR_TASK", "WAIT_FOR_BATCH"]);
var TaskRunExecutionLazyAttemptPayload = external_exports.object({
  runId: external_exports.string(),
  attemptCount: external_exports.number().optional(),
  messageId: external_exports.string(),
  isTest: external_exports.boolean(),
  traceContext: external_exports.record(external_exports.unknown()),
  environment: external_exports.record(external_exports.string()).optional(),
  metrics: TaskRunExecutionMetrics.optional()
});
var ManualCheckpointMetadata = external_exports.object({
  /** NOT a friendly ID */
  attemptId: external_exports.string(),
  previousRunStatus: external_exports.string(),
  previousAttemptStatus: external_exports.string()
});
var RunChainState = external_exports.object({
  concurrency: external_exports.object({
    queues: external_exports.array(external_exports.object({ id: external_exports.string(), name: external_exports.string(), holding: external_exports.number() })),
    environment: external_exports.number().optional()
  }).optional()
});
var TriggerTraceContext = external_exports.object({
  traceparent: external_exports.string().optional(),
  tracestate: external_exports.string().optional(),
  external: external_exports.object({
    traceparent: external_exports.string().optional(),
    tracestate: external_exports.string().optional()
  }).optional()
});

// node_modules/@trigger.dev/core/dist/esm/v3/schemas/resources.js
var TaskResource = external_exports.object({
  id: external_exports.string(),
  description: external_exports.string().optional(),
  filePath: external_exports.string(),
  exportName: external_exports.string().optional(),
  queue: QueueManifest.extend({ name: external_exports.string().optional() }).optional(),
  retry: RetryOptions.optional(),
  machine: MachineConfig.optional(),
  triggerSource: external_exports.string().optional(),
  schedule: ScheduleMetadata.optional(),
  maxDuration: external_exports.number().optional(),
  // JSONSchema type - using z.unknown() for runtime validation to accept JSONSchema7
  payloadSchema: external_exports.unknown().optional()
});
var BackgroundWorkerSourceFileMetadata = external_exports.object({
  filePath: external_exports.string(),
  contents: external_exports.string(),
  contentHash: external_exports.string(),
  taskIds: external_exports.array(external_exports.string())
});
var BackgroundWorkerMetadata = external_exports.object({
  packageVersion: external_exports.string(),
  contentHash: external_exports.string(),
  cliPackageVersion: external_exports.string().optional(),
  tasks: external_exports.array(TaskResource),
  queues: external_exports.array(QueueManifest).optional(),
  sourceFiles: external_exports.array(BackgroundWorkerSourceFileMetadata).optional(),
  runtime: external_exports.string().optional(),
  runtimeVersion: external_exports.string().optional()
});
var ImageDetailsMetadata = external_exports.object({
  contentHash: external_exports.string(),
  imageTag: external_exports.string()
});

// node_modules/@trigger.dev/core/dist/esm/v3/schemas/runEngine.js
init_esm();
var TaskRunExecutionStatus = {
  RUN_CREATED: "RUN_CREATED",
  QUEUED: "QUEUED",
  QUEUED_EXECUTING: "QUEUED_EXECUTING",
  PENDING_EXECUTING: "PENDING_EXECUTING",
  EXECUTING: "EXECUTING",
  EXECUTING_WITH_WAITPOINTS: "EXECUTING_WITH_WAITPOINTS",
  SUSPENDED: "SUSPENDED",
  PENDING_CANCEL: "PENDING_CANCEL",
  FINISHED: "FINISHED"
};
var TaskRunStatus = {
  DELAYED: "DELAYED",
  PENDING: "PENDING",
  PENDING_VERSION: "PENDING_VERSION",
  WAITING_FOR_DEPLOY: "WAITING_FOR_DEPLOY",
  DEQUEUED: "DEQUEUED",
  EXECUTING: "EXECUTING",
  WAITING_TO_RESUME: "WAITING_TO_RESUME",
  RETRYING_AFTER_FAILURE: "RETRYING_AFTER_FAILURE",
  PAUSED: "PAUSED",
  CANCELED: "CANCELED",
  INTERRUPTED: "INTERRUPTED",
  COMPLETED_SUCCESSFULLY: "COMPLETED_SUCCESSFULLY",
  COMPLETED_WITH_ERRORS: "COMPLETED_WITH_ERRORS",
  SYSTEM_FAILURE: "SYSTEM_FAILURE",
  CRASHED: "CRASHED",
  EXPIRED: "EXPIRED",
  TIMED_OUT: "TIMED_OUT"
};
var WaitpointType = {
  RUN: "RUN",
  DATETIME: "DATETIME",
  MANUAL: "MANUAL",
  BATCH: "BATCH"
};
var WaitpointStatusValues = {
  PENDING: "PENDING",
  COMPLETED: "COMPLETED"
};
var WaitpointStatus = external_exports.enum(Object.values(WaitpointStatusValues));
var CompletedWaitpoint = external_exports.object({
  id: external_exports.string(),
  index: external_exports.number().optional(),
  friendlyId: external_exports.string(),
  type: external_exports.enum(Object.values(WaitpointType)),
  completedAt: external_exports.coerce.date(),
  idempotencyKey: external_exports.string().optional(),
  /** For type === "RUN" */
  completedByTaskRun: external_exports.object({
    id: external_exports.string(),
    friendlyId: external_exports.string(),
    /** If the run has an associated batch */
    batch: external_exports.object({
      id: external_exports.string(),
      friendlyId: external_exports.string()
    }).optional()
  }).optional(),
  /** For type === "DATETIME" */
  completedAfter: external_exports.coerce.date().optional(),
  /** For type === "BATCH" */
  completedByBatch: external_exports.object({
    id: external_exports.string(),
    friendlyId: external_exports.string()
  }).optional(),
  output: external_exports.string().optional(),
  outputType: external_exports.string().optional(),
  outputIsError: external_exports.boolean()
});
var ExecutionSnapshot = external_exports.object({
  id: external_exports.string(),
  friendlyId: external_exports.string(),
  executionStatus: external_exports.enum(Object.values(TaskRunExecutionStatus)),
  description: external_exports.string(),
  createdAt: external_exports.coerce.date()
});
var BaseRunMetadata = external_exports.object({
  id: external_exports.string(),
  friendlyId: external_exports.string(),
  status: external_exports.enum(Object.values(TaskRunStatus)),
  attemptNumber: external_exports.number().nullish()
});
var ExecutionResult = external_exports.object({
  snapshot: ExecutionSnapshot,
  run: BaseRunMetadata
});
var StartRunAttemptResult = ExecutionResult.and(external_exports.object({
  execution: TaskRunExecution
}));
var CompleteAttemptStatus = external_exports.enum([
  "RUN_FINISHED",
  "RUN_PENDING_CANCEL",
  "RETRY_QUEUED",
  "RETRY_IMMEDIATELY"
]);
var CompleteRunAttemptResult = external_exports.object({
  attemptStatus: CompleteAttemptStatus
}).and(ExecutionResult);
var CheckpointTypeEnum = {
  DOCKER: "DOCKER",
  KUBERNETES: "KUBERNETES"
};
var CheckpointType = external_exports.enum(Object.values(CheckpointTypeEnum));
var CheckpointInput = external_exports.object({
  type: CheckpointType,
  location: external_exports.string(),
  imageRef: external_exports.string().nullish(),
  reason: external_exports.string().nullish()
});
var TaskRunCheckpoint = CheckpointInput.merge(external_exports.object({
  id: external_exports.string(),
  friendlyId: external_exports.string()
}));
var RunExecutionData = external_exports.object({
  version: external_exports.literal("1"),
  snapshot: ExecutionSnapshot,
  run: BaseRunMetadata,
  batch: external_exports.object({
    id: external_exports.string(),
    friendlyId: external_exports.string()
  }).optional(),
  checkpoint: TaskRunCheckpoint.optional(),
  completedWaitpoints: external_exports.array(CompletedWaitpoint)
});
var CreateCheckpointResult = external_exports.discriminatedUnion("ok", [
  external_exports.object({
    ok: external_exports.literal(true),
    checkpoint: TaskRunCheckpoint
  }).merge(ExecutionResult),
  external_exports.object({
    ok: external_exports.literal(false),
    error: external_exports.string()
  })
]);
var MachineResources = external_exports.object({
  cpu: external_exports.number(),
  memory: external_exports.number()
});
var DequeueMessageCheckpoint = external_exports.object({
  id: external_exports.string(),
  type: CheckpointType,
  location: external_exports.string(),
  imageRef: external_exports.string().nullish(),
  reason: external_exports.string().nullish()
});
var PlacementTag = external_exports.object({
  key: external_exports.string(),
  values: external_exports.array(external_exports.string()).optional()
});
var DequeuedMessage = external_exports.object({
  version: external_exports.literal("1"),
  snapshot: ExecutionSnapshot,
  dequeuedAt: external_exports.coerce.date(),
  image: external_exports.string().optional(),
  checkpoint: DequeueMessageCheckpoint.optional(),
  completedWaitpoints: external_exports.array(CompletedWaitpoint),
  backgroundWorker: external_exports.object({
    id: external_exports.string(),
    friendlyId: external_exports.string(),
    version: external_exports.string()
  }),
  deployment: external_exports.object({
    id: external_exports.string().optional(),
    friendlyId: external_exports.string().optional(),
    imagePlatform: external_exports.string().optional()
  }),
  run: external_exports.object({
    id: external_exports.string(),
    friendlyId: external_exports.string(),
    isTest: external_exports.boolean(),
    machine: MachinePreset,
    attemptNumber: external_exports.number(),
    masterQueue: external_exports.string(),
    traceContext: external_exports.record(external_exports.unknown())
  }),
  environment: external_exports.object({
    id: external_exports.string(),
    type: EnvironmentType
  }),
  organization: external_exports.object({
    id: external_exports.string()
  }),
  project: external_exports.object({
    id: external_exports.string()
  }),
  placementTags: external_exports.array(PlacementTag).optional()
});

// node_modules/@trigger.dev/core/dist/esm/v3/schemas/api.js
var RunEngineVersion = external_exports.union([external_exports.literal("V1"), external_exports.literal("V2")]);
var WhoAmIResponseSchema = external_exports.object({
  userId: external_exports.string(),
  email: external_exports.string().email(),
  dashboardUrl: external_exports.string(),
  project: external_exports.object({
    name: external_exports.string(),
    url: external_exports.string(),
    orgTitle: external_exports.string()
  }).optional()
});
var GetProjectResponseBody = external_exports.object({
  id: external_exports.string(),
  externalRef: external_exports.string().describe("The external reference for the project, also known as the project ref, a unique identifier starting with proj_"),
  name: external_exports.string(),
  slug: external_exports.string(),
  createdAt: external_exports.coerce.date(),
  organization: external_exports.object({
    id: external_exports.string(),
    title: external_exports.string(),
    slug: external_exports.string(),
    createdAt: external_exports.coerce.date()
  })
});
var GetProjectsResponseBody = external_exports.array(GetProjectResponseBody);
var GetOrgsResponseBody = external_exports.array(external_exports.object({
  id: external_exports.string(),
  title: external_exports.string(),
  slug: external_exports.string(),
  createdAt: external_exports.coerce.date()
}));
var CreateProjectRequestBody = external_exports.object({
  name: external_exports.string().trim().min(1, "Name is required").max(255, "Name must be less than 255 characters")
});
var GetProjectEnvResponse = external_exports.object({
  apiKey: external_exports.string(),
  name: external_exports.string(),
  apiUrl: external_exports.string(),
  projectId: external_exports.string()
});
var GetWorkerTaskResponse = external_exports.object({
  id: external_exports.string(),
  slug: external_exports.string(),
  filePath: external_exports.string(),
  triggerSource: external_exports.string(),
  createdAt: external_exports.coerce.date(),
  payloadSchema: external_exports.any().nullish()
});
var GetWorkerByTagResponse = external_exports.object({
  worker: external_exports.object({
    id: external_exports.string(),
    version: external_exports.string(),
    engine: external_exports.string().nullish(),
    sdkVersion: external_exports.string().nullish(),
    cliVersion: external_exports.string().nullish(),
    tasks: external_exports.array(GetWorkerTaskResponse)
  }),
  urls: external_exports.object({
    runs: external_exports.string()
  })
});
var GetJWTRequestBody = external_exports.object({
  claims: external_exports.object({
    scopes: external_exports.array(external_exports.string()).default([])
  }).optional(),
  expirationTime: external_exports.union([external_exports.number(), external_exports.string()]).optional()
});
var GetJWTResponse = external_exports.object({
  token: external_exports.string()
});
var CreateBackgroundWorkerRequestBody = external_exports.object({
  localOnly: external_exports.boolean(),
  metadata: BackgroundWorkerMetadata,
  engine: RunEngineVersion.optional(),
  supportsLazyAttempts: external_exports.boolean().optional(),
  buildPlatform: external_exports.string().optional(),
  targetPlatform: external_exports.string().optional()
});
var CreateBackgroundWorkerResponse = external_exports.object({
  id: external_exports.string(),
  version: external_exports.string(),
  contentHash: external_exports.string()
});
var RunTag = external_exports.string().max(128, "Tags must be less than 128 characters");
var RunTags = external_exports.union([RunTag, RunTag.array()]);
var TriggerTaskRequestBody = external_exports.object({
  payload: external_exports.any(),
  context: external_exports.any(),
  options: external_exports.object({
    /** @deprecated engine v1 only */
    dependentAttempt: external_exports.string().optional(),
    /** @deprecated engine v1 only */
    parentAttempt: external_exports.string().optional(),
    /** @deprecated engine v1 only */
    dependentBatch: external_exports.string().optional(),
    /**
     * If triggered in a batch, this is the BatchTaskRun id
     */
    parentBatch: external_exports.string().optional(),
    /**
     * RunEngine v2
     * If triggered inside another run, the parentRunId is the friendly ID of the parent run.
     */
    parentRunId: external_exports.string().optional(),
    /**
     * RunEngine v2
     * Should be `true` if `triggerAndWait` or `batchTriggerAndWait`
     */
    resumeParentOnCompletion: external_exports.boolean().optional(),
    /**
     * Locks the version to the passed value.
     * Automatically set when using `triggerAndWait` or `batchTriggerAndWait`
     */
    lockToVersion: external_exports.string().optional(),
    queue: external_exports.object({
      name: external_exports.string(),
      // @deprecated, this is now specified on the queue
      concurrencyLimit: external_exports.number().int().optional()
    }).optional(),
    concurrencyKey: external_exports.string().optional(),
    delay: external_exports.string().or(external_exports.coerce.date()).optional(),
    idempotencyKey: external_exports.string().optional(),
    idempotencyKeyTTL: external_exports.string().optional(),
    machine: MachinePresetName.optional(),
    maxAttempts: external_exports.number().int().optional(),
    maxDuration: external_exports.number().optional(),
    metadata: external_exports.any(),
    metadataType: external_exports.string().optional(),
    payloadType: external_exports.string().optional(),
    tags: RunTags.optional(),
    test: external_exports.boolean().optional(),
    ttl: external_exports.string().or(external_exports.number().nonnegative().int()).optional(),
    priority: external_exports.number().optional(),
    bulkActionId: external_exports.string().optional(),
    region: external_exports.string().optional()
  }).optional()
});
var TriggerTaskResponse = external_exports.object({
  id: external_exports.string(),
  isCached: external_exports.boolean().optional()
});
var BatchTriggerTaskRequestBody = external_exports.object({
  items: TriggerTaskRequestBody.array(),
  dependentAttempt: external_exports.string().optional()
});
var BatchTriggerTaskItem = external_exports.object({
  task: external_exports.string(),
  payload: external_exports.any(),
  context: external_exports.any(),
  options: external_exports.object({
    concurrencyKey: external_exports.string().optional(),
    delay: external_exports.string().or(external_exports.coerce.date()).optional(),
    idempotencyKey: external_exports.string().optional(),
    idempotencyKeyTTL: external_exports.string().optional(),
    lockToVersion: external_exports.string().optional(),
    machine: MachinePresetName.optional(),
    maxAttempts: external_exports.number().int().optional(),
    maxDuration: external_exports.number().optional(),
    metadata: external_exports.any(),
    metadataType: external_exports.string().optional(),
    parentAttempt: external_exports.string().optional(),
    payloadType: external_exports.string().optional(),
    queue: external_exports.object({
      name: external_exports.string()
    }).optional(),
    tags: RunTags.optional(),
    test: external_exports.boolean().optional(),
    ttl: external_exports.string().or(external_exports.number().nonnegative().int()).optional(),
    priority: external_exports.number().optional(),
    region: external_exports.string().optional()
  }).optional()
});
var BatchTriggerTaskV2RequestBody = external_exports.object({
  items: BatchTriggerTaskItem.array(),
  /** @deprecated engine v1 only */
  dependentAttempt: external_exports.string().optional(),
  /**
   * RunEngine v2
   * If triggered inside another run, the parentRunId is the friendly ID of the parent run.
   */
  parentRunId: external_exports.string().optional(),
  /**
   * RunEngine v2
   * Should be `true` if `triggerAndWait` or `batchTriggerAndWait`
   */
  resumeParentOnCompletion: external_exports.boolean().optional()
});
var BatchTriggerTaskV2Response = external_exports.object({
  id: external_exports.string(),
  isCached: external_exports.boolean(),
  idempotencyKey: external_exports.string().optional(),
  runs: external_exports.array(external_exports.object({
    id: external_exports.string(),
    taskIdentifier: external_exports.string(),
    isCached: external_exports.boolean(),
    idempotencyKey: external_exports.string().optional()
  }))
});
var BatchTriggerTaskV3RequestBody = external_exports.object({
  items: BatchTriggerTaskItem.array(),
  /**
   * RunEngine v2
   * If triggered inside another run, the parentRunId is the friendly ID of the parent run.
   */
  parentRunId: external_exports.string().optional(),
  /**
   * RunEngine v2
   * Should be `true` if `triggerAndWait` or `batchTriggerAndWait`
   */
  resumeParentOnCompletion: external_exports.boolean().optional()
});
var BatchTriggerTaskV3Response = external_exports.object({
  id: external_exports.string(),
  runCount: external_exports.number()
});
var BatchTriggerTaskResponse = external_exports.object({
  batchId: external_exports.string(),
  runs: external_exports.string().array()
});
var GetBatchResponseBody = external_exports.object({
  id: external_exports.string(),
  items: external_exports.array(external_exports.object({
    id: external_exports.string(),
    taskRunId: external_exports.string(),
    status: external_exports.enum(["PENDING", "CANCELED", "COMPLETED", "FAILED"])
  }))
});
var AddTagsRequestBody = external_exports.object({
  tags: RunTags
});
var RescheduleRunRequestBody = external_exports.object({
  delay: external_exports.string().or(external_exports.coerce.date())
});
var GetEnvironmentVariablesResponseBody = external_exports.object({
  variables: external_exports.record(external_exports.string())
});
var StartDeploymentIndexingRequestBody = external_exports.object({
  imageReference: external_exports.string(),
  selfHosted: external_exports.boolean().optional()
});
var StartDeploymentIndexingResponseBody = external_exports.object({
  id: external_exports.string(),
  contentHash: external_exports.string()
});
var FinalizeDeploymentRequestBody = external_exports.object({
  skipPromotion: external_exports.boolean().optional(),
  imageDigest: external_exports.string().optional()
});
var ExternalBuildData = external_exports.object({
  buildId: external_exports.string(),
  buildToken: external_exports.string(),
  projectId: external_exports.string()
});
var UpsertBranchRequestBody = external_exports.object({
  git: GitMeta.optional(),
  env: external_exports.enum(["preview"]),
  branch: external_exports.string()
});
var UpsertBranchResponseBody = external_exports.object({
  id: external_exports.string()
});
var InitializeDeploymentResponseBody = external_exports.object({
  id: external_exports.string(),
  contentHash: external_exports.string(),
  shortCode: external_exports.string(),
  version: external_exports.string(),
  imageTag: external_exports.string(),
  imagePlatform: external_exports.string(),
  externalBuildData: ExternalBuildData.optional().nullable()
});
var InitializeDeploymentRequestBody = external_exports.object({
  contentHash: external_exports.string(),
  userId: external_exports.string().optional(),
  /** @deprecated This is now determined by the webapp. This is only used to warn users with old CLI versions. */
  selfHosted: external_exports.boolean().optional(),
  gitMeta: GitMeta.optional(),
  type: external_exports.enum(["MANAGED", "UNMANAGED", "V1"]).optional(),
  runtime: external_exports.string().optional()
});
var DeploymentErrorData = external_exports.object({
  name: external_exports.string(),
  message: external_exports.string(),
  stack: external_exports.string().optional(),
  stderr: external_exports.string().optional()
});
var FailDeploymentRequestBody = external_exports.object({
  error: DeploymentErrorData
});
var FailDeploymentResponseBody = external_exports.object({
  id: external_exports.string()
});
var PromoteDeploymentResponseBody = external_exports.object({
  id: external_exports.string(),
  version: external_exports.string(),
  shortCode: external_exports.string()
});
var GetDeploymentResponseBody = external_exports.object({
  id: external_exports.string(),
  status: external_exports.enum([
    "PENDING",
    "BUILDING",
    "DEPLOYING",
    "DEPLOYED",
    "FAILED",
    "CANCELED",
    "TIMED_OUT"
  ]),
  contentHash: external_exports.string(),
  shortCode: external_exports.string(),
  version: external_exports.string(),
  imageReference: external_exports.string().nullish(),
  errorData: DeploymentErrorData.nullish(),
  worker: external_exports.object({
    id: external_exports.string(),
    version: external_exports.string(),
    tasks: external_exports.array(external_exports.object({
      id: external_exports.string(),
      slug: external_exports.string(),
      filePath: external_exports.string(),
      exportName: external_exports.string().optional()
    }))
  }).optional()
});
var GetLatestDeploymentResponseBody = GetDeploymentResponseBody.omit({
  worker: true
});
var CreateUploadPayloadUrlResponseBody = external_exports.object({
  presignedUrl: external_exports.string()
});
var WorkersListResponseBody = external_exports.object({
  type: external_exports.string(),
  name: external_exports.string(),
  description: external_exports.string().nullish(),
  latestVersion: external_exports.string().nullish(),
  lastHeartbeatAt: external_exports.string().nullish(),
  isDefault: external_exports.boolean(),
  updatedAt: external_exports.coerce.date()
}).array();
var WorkersCreateRequestBody = external_exports.object({
  name: external_exports.string().optional(),
  description: external_exports.string().optional()
});
var WorkersCreateResponseBody = external_exports.object({
  workerGroup: external_exports.object({
    name: external_exports.string(),
    description: external_exports.string().nullish()
  }),
  token: external_exports.object({
    plaintext: external_exports.string()
  })
});
var DevConfigResponseBody = external_exports.object({
  environmentId: external_exports.string(),
  dequeueIntervalWithRun: external_exports.number(),
  dequeueIntervalWithoutRun: external_exports.number(),
  maxConcurrentRuns: external_exports.number(),
  engineUrl: external_exports.string()
});
var DevDequeueRequestBody = external_exports.object({
  currentWorker: external_exports.string(),
  oldWorkers: external_exports.string().array(),
  maxResources: MachineResources.optional()
});
var DevDequeueResponseBody = external_exports.object({
  dequeuedMessages: DequeuedMessage.array()
});
var ReplayRunResponse = external_exports.object({
  id: external_exports.string()
});
var CanceledRunResponse = external_exports.object({
  id: external_exports.string()
});
var ScheduleType = external_exports.union([external_exports.literal("DECLARATIVE"), external_exports.literal("IMPERATIVE")]);
var ScheduledTaskPayload = external_exports.object({
  /** The schedule id associated with this run (you can have many schedules for the same task).
    You can use this to remove the schedule, update it, etc */
  scheduleId: external_exports.string(),
  /** The type of schedule – `"DECLARATIVE"` or `"IMPERATIVE"`.
   *
   * **DECLARATIVE** – defined inline on your `schedules.task` using the `cron` property. They can only be created, updated or deleted by modifying the `cron` property on your task.
   *
   * **IMPERATIVE** – created using the `schedules.create` functions or in the dashboard.
   */
  type: ScheduleType,
  /** When the task was scheduled to run.
   * Note this will be slightly different from `new Date()` because it takes a few ms to run the task.
   *
   * This date is UTC. To output it as a string with a timezone you would do this:
   * ```ts
   * const formatted = payload.timestamp.toLocaleString("en-US", {
        timeZone: payload.timezone,
    });
    ```  */
  timestamp: external_exports.date(),
  /** When the task was last run (it has been).
    This can be undefined if it's never been run. This date is UTC. */
  lastTimestamp: external_exports.date().optional(),
  /** You can optionally provide an external id when creating the schedule.
    Usually you would use a userId or some other unique identifier.
    This defaults to undefined if you didn't provide one. */
  externalId: external_exports.string().optional(),
  /** The IANA timezone the schedule is set to. The default is UTC.
   * You can see the full list of supported timezones here: https://cloud.trigger.dev/timezones
   */
  timezone: external_exports.string(),
  /** The next 5 dates this task is scheduled to run */
  upcoming: external_exports.array(external_exports.date())
});
var CreateScheduleOptions = external_exports.object({
  /** The id of the task you want to attach to. */
  task: external_exports.string(),
  /**  The schedule in CRON format.
     *
     * ```txt
  *    *    *    *    *    *
  ┬    ┬    ┬    ┬    ┬
  │    │    │    │    |
  │    │    │    │    └ day of week (0 - 7, 1L - 7L) (0 or 7 is Sun)
  │    │    │    └───── month (1 - 12)
  │    │    └────────── day of month (1 - 31, L)
  │    └─────────────── hour (0 - 23)
  └──────────────────── minute (0 - 59)
     * ```
  
  "L" means the last. In the "day of week" field, 1L means the last Monday of the month. In the day of month field, L means the last day of the month.
  
     */
  cron: external_exports.string(),
  /** You can only create one schedule with this key. If you use it twice, the second call will update the schedule.
   *
   * This is required to prevent you from creating duplicate schedules. */
  deduplicationKey: external_exports.string(),
  /** Optionally, you can specify your own IDs (like a user ID) and then use it inside the run function of your task.
   *
   * This allows you to have per-user CRON tasks.
   */
  externalId: external_exports.string().optional(),
  /** Optionally, you can specify a timezone in the IANA format. If unset it will use UTC.
   * If specified then the CRON will be evaluated in that timezone and will respect daylight savings.
   *
   * If you set the CRON to `0 0 * * *` and the timezone to `America/New_York` then the task will run at midnight in New York time, no matter whether it's daylight savings or not.
   *
   * You can see the full list of supported timezones here: https://cloud.trigger.dev/timezones
   *
   * @example "America/New_York", "Europe/London", "Asia/Tokyo", "Africa/Cairo"
   *
   */
  timezone: external_exports.string().optional()
});
var UpdateScheduleOptions = CreateScheduleOptions.omit({ deduplicationKey: true });
var ScheduleGenerator = external_exports.object({
  type: external_exports.literal("CRON"),
  expression: external_exports.string(),
  description: external_exports.string()
});
var ScheduleObject = external_exports.object({
  id: external_exports.string(),
  type: ScheduleType,
  task: external_exports.string(),
  active: external_exports.boolean(),
  deduplicationKey: external_exports.string().nullish(),
  externalId: external_exports.string().nullish(),
  generator: ScheduleGenerator,
  timezone: external_exports.string(),
  nextRun: external_exports.coerce.date().nullish(),
  environments: external_exports.array(external_exports.object({
    id: external_exports.string(),
    type: external_exports.string(),
    userName: external_exports.string().nullish()
  }))
});
var DeletedScheduleObject = external_exports.object({
  id: external_exports.string()
});
var ListSchedulesResult = external_exports.object({
  data: external_exports.array(ScheduleObject),
  pagination: external_exports.object({
    currentPage: external_exports.number(),
    totalPages: external_exports.number(),
    count: external_exports.number()
  })
});
var ListScheduleOptions = external_exports.object({
  page: external_exports.number().optional(),
  perPage: external_exports.number().optional()
});
var TimezonesResult = external_exports.object({
  timezones: external_exports.array(external_exports.string())
});
var RunStatus = external_exports.enum([
  /// Task is waiting for a version update because it cannot execute without additional information (task, queue, etc.)
  "PENDING_VERSION",
  /// Task is waiting to be executed by a worker
  "QUEUED",
  /// Task is waiting to be executed by a worker
  "DEQUEUED",
  /// Task is currently being executed by a worker
  "EXECUTING",
  /// Task has been paused by the system, and will be resumed by the system
  "WAITING",
  /// Task has been completed successfully
  "COMPLETED",
  /// Task has been canceled by the user
  "CANCELED",
  /// Task has been completed with errors
  "FAILED",
  /// Task has crashed and won't be retried, most likely the worker ran out of resources, e.g. memory or storage
  "CRASHED",
  /// Task has failed to complete, due to an error in the system
  "SYSTEM_FAILURE",
  /// Task has been scheduled to run at a specific time
  "DELAYED",
  /// Task has expired and won't be executed
  "EXPIRED",
  /// Task has reached it's maxDuration and has been stopped
  "TIMED_OUT"
]);
var AttemptStatus = external_exports.enum([
  "PENDING",
  "EXECUTING",
  "PAUSED",
  "COMPLETED",
  "FAILED",
  "CANCELED"
]);
var RunEnvironmentDetails = external_exports.object({
  id: external_exports.string(),
  name: external_exports.string(),
  user: external_exports.string().optional()
});
var RunScheduleDetails = external_exports.object({
  id: external_exports.string(),
  externalId: external_exports.string().optional(),
  deduplicationKey: external_exports.string().optional(),
  generator: ScheduleGenerator
});
var TriggerFunction = external_exports.enum([
  "triggerAndWait",
  "trigger",
  "batchTriggerAndWait",
  "batchTrigger"
]);
var CommonRunFields = {
  id: external_exports.string(),
  status: RunStatus,
  taskIdentifier: external_exports.string(),
  idempotencyKey: external_exports.string().optional(),
  version: external_exports.string().optional(),
  isQueued: external_exports.boolean(),
  isExecuting: external_exports.boolean(),
  isWaiting: external_exports.boolean(),
  isCompleted: external_exports.boolean(),
  isSuccess: external_exports.boolean(),
  isFailed: external_exports.boolean(),
  isCancelled: external_exports.boolean(),
  isTest: external_exports.boolean(),
  createdAt: external_exports.coerce.date(),
  updatedAt: external_exports.coerce.date(),
  startedAt: external_exports.coerce.date().optional(),
  finishedAt: external_exports.coerce.date().optional(),
  delayedUntil: external_exports.coerce.date().optional(),
  ttl: external_exports.string().optional(),
  expiredAt: external_exports.coerce.date().optional(),
  tags: external_exports.string().array(),
  costInCents: external_exports.number(),
  baseCostInCents: external_exports.number(),
  durationMs: external_exports.number(),
  metadata: external_exports.record(external_exports.any()).optional()
};
var RetrieveRunCommandFields = {
  ...CommonRunFields,
  depth: external_exports.number(),
  triggerFunction: external_exports.enum(["triggerAndWait", "trigger", "batchTriggerAndWait", "batchTrigger"]),
  batchId: external_exports.string().optional()
};
var RelatedRunDetails = external_exports.object(RetrieveRunCommandFields);
var RetrieveRunResponse = external_exports.object({
  ...RetrieveRunCommandFields,
  payload: external_exports.any().optional(),
  payloadPresignedUrl: external_exports.string().optional(),
  output: external_exports.any().optional(),
  outputPresignedUrl: external_exports.string().optional(),
  error: SerializedError.optional(),
  schedule: RunScheduleDetails.optional(),
  relatedRuns: external_exports.object({
    root: RelatedRunDetails.optional(),
    parent: RelatedRunDetails.optional(),
    children: external_exports.array(RelatedRunDetails).optional()
  }),
  attemptCount: external_exports.number().default(0)
});
var ListRunResponseItem = external_exports.object({
  ...CommonRunFields,
  env: RunEnvironmentDetails
});
var ListRunResponse = external_exports.object({
  data: external_exports.array(ListRunResponseItem),
  pagination: external_exports.object({
    next: external_exports.string().optional(),
    previous: external_exports.string().optional()
  })
});
var CreateEnvironmentVariableRequestBody = external_exports.object({
  name: external_exports.string(),
  value: external_exports.string()
});
var UpdateEnvironmentVariableRequestBody = external_exports.object({
  value: external_exports.string()
});
var ImportEnvironmentVariablesRequestBody = external_exports.object({
  variables: external_exports.record(external_exports.string()),
  parentVariables: external_exports.record(external_exports.string()).optional(),
  override: external_exports.boolean().optional()
});
var EnvironmentVariableResponseBody = external_exports.object({
  success: external_exports.boolean()
});
var EnvironmentVariableValue = external_exports.object({
  value: external_exports.string()
});
var EnvironmentVariable = external_exports.object({
  name: external_exports.string(),
  value: external_exports.string()
});
var EnvironmentVariables = external_exports.array(EnvironmentVariable);
var EnvironmentVariableWithSecret = external_exports.object({
  /** The name of the env var, e.g. `DATABASE_URL` */
  name: external_exports.string(),
  /** The value of the env var. If it's a secret, this will be a redacted value, not the real value.  */
  value: external_exports.string(),
  /**
   * Whether the env var is a secret or not.
   * When you create env vars you can mark them as secrets.
   *
   * You can't view the value of a secret env var after setting it initially.
   * For a secret env var, the value will be redacted.
   */
  isSecret: external_exports.boolean()
});
var UpdateMetadataResponseBody = external_exports.object({
  metadata: external_exports.record(DeserializedJsonSchema)
});
var RawShapeDate = external_exports.string().transform((val) => `${val}Z`).pipe(external_exports.coerce.date());
var RawOptionalShapeDate = external_exports.string().nullish().transform((val) => val ? /* @__PURE__ */ new Date(`${val}Z`) : val);
var SubscribeRunRawShape = external_exports.object({
  id: external_exports.string(),
  taskIdentifier: external_exports.string(),
  friendlyId: external_exports.string(),
  status: external_exports.string(),
  createdAt: RawShapeDate,
  updatedAt: RawShapeDate,
  startedAt: RawOptionalShapeDate,
  delayUntil: RawOptionalShapeDate,
  queuedAt: RawOptionalShapeDate,
  expiredAt: RawOptionalShapeDate,
  completedAt: RawOptionalShapeDate,
  idempotencyKey: external_exports.string().nullish(),
  number: external_exports.number().default(0),
  isTest: external_exports.boolean().default(false),
  usageDurationMs: external_exports.number().default(0),
  costInCents: external_exports.number().default(0),
  baseCostInCents: external_exports.number().default(0),
  ttl: external_exports.string().nullish(),
  payload: external_exports.string().nullish(),
  payloadType: external_exports.string().nullish(),
  metadata: external_exports.string().nullish(),
  metadataType: external_exports.string().nullish(),
  output: external_exports.string().nullish(),
  outputType: external_exports.string().nullish(),
  runTags: external_exports.array(external_exports.string()).nullish().default([]),
  error: TaskRunError.nullish()
});
var BatchStatus = external_exports.enum(["PENDING", "COMPLETED"]);
var RetrieveBatchResponse = external_exports.object({
  id: external_exports.string(),
  status: BatchStatus,
  idempotencyKey: external_exports.string().optional(),
  createdAt: external_exports.coerce.date(),
  updatedAt: external_exports.coerce.date(),
  runCount: external_exports.number(),
  runs: external_exports.array(external_exports.string())
});
var RetrieveBatchV2Response = external_exports.object({
  id: external_exports.string(),
  status: BatchStatus,
  idempotencyKey: external_exports.string().optional(),
  createdAt: external_exports.coerce.date(),
  updatedAt: external_exports.coerce.date(),
  runCount: external_exports.number(),
  runs: external_exports.array(external_exports.string())
});
var SubscribeRealtimeStreamChunkRawShape = external_exports.object({
  id: external_exports.string(),
  runId: external_exports.string(),
  sequence: external_exports.number(),
  key: external_exports.string(),
  value: external_exports.string(),
  createdAt: external_exports.coerce.date()
});
var TimePeriod = external_exports.string().or(external_exports.coerce.date());
var CreateWaitpointTokenRequestBody = external_exports.object({
  /**
   * An optional idempotency key for the waitpoint.
   * If you use the same key twice (and the key hasn't expired), you will get the original waitpoint back.
   *
   * Note: This waitpoint may already be complete, in which case when you wait for it, it will immediately continue.
   */
  idempotencyKey: external_exports.string().optional(),
  /**
   * When set, this means the passed in idempotency key will expire after this time.
   * This means after that time if you pass the same idempotency key again, you will get a new waitpoint.
   */
  idempotencyKeyTTL: external_exports.string().optional(),
  /** The resume token will timeout after this time.
   * If you are waiting for the token in a run, the token will return a result where `ok` is false.
   *
   * You can pass a `Date` object, or a string in this format: "30s", "1m", "2h", "3d", "4w".
   */
  timeout: TimePeriod.optional(),
  /**
   * Tags to attach to the waitpoint. Tags can be used to filter waitpoints in the dashboard.
   *
   * You can set up to 10 tags per waitpoint, they must be less than 128 characters each.
   *
   * We recommend prefixing tags with a namespace using an underscore or colon, like `user_1234567` or `org:9876543`.
   *
   * @example
   *
   * ```ts
   * await wait.createToken({ tags: ["user:1234567", "org:9876543"] });
   * ```
   */
  tags: RunTags.optional()
});
var CreateWaitpointTokenResponseBody = external_exports.object({
  id: external_exports.string(),
  isCached: external_exports.boolean(),
  url: external_exports.string()
});
var waitpointTokenStatuses = ["WAITING", "COMPLETED", "TIMED_OUT"];
var WaitpointTokenStatus = external_exports.enum(waitpointTokenStatuses);
var WaitpointTokenItem = external_exports.object({
  id: external_exports.string(),
  /** If you make a POST request to this URL, it will complete the waitpoint. */
  url: external_exports.string(),
  status: WaitpointTokenStatus,
  completedAt: external_exports.coerce.date().optional(),
  completedAfter: external_exports.coerce.date().optional(),
  timeoutAt: external_exports.coerce.date().optional(),
  idempotencyKey: external_exports.string().optional(),
  idempotencyKeyExpiresAt: external_exports.coerce.date().optional(),
  tags: external_exports.array(external_exports.string()),
  createdAt: external_exports.coerce.date()
});
var WaitpointListTokenItem = WaitpointTokenItem.omit({
  completedAfter: true
});
var WaitpointRetrieveTokenResponse = WaitpointListTokenItem.and(external_exports.object({
  output: external_exports.string().optional(),
  outputType: external_exports.string().optional(),
  outputIsError: external_exports.boolean().optional()
}));
var CompleteWaitpointTokenRequestBody = external_exports.object({
  data: external_exports.any().nullish()
});
var CompleteWaitpointTokenResponseBody = external_exports.object({
  success: external_exports.literal(true)
});
var WaitForWaitpointTokenResponseBody = external_exports.object({
  success: external_exports.boolean()
});
var WaitForDurationRequestBody = external_exports.object({
  /**
   * An optional idempotency key for the waitpoint.
   * If you use the same key twice (and the key hasn't expired), you will get the original waitpoint back.
   *
   * Note: This waitpoint may already be complete, in which case when you wait for it, it will immediately continue.
   */
  idempotencyKey: external_exports.string().optional(),
  /**
   * When set, this means the passed in idempotency key will expire after this time.
   * This means after that time if you pass the same idempotency key again, you will get a new waitpoint.
   */
  idempotencyKeyTTL: external_exports.string().optional(),
  /**
   * The date that the waitpoint will complete.
   */
  date: external_exports.coerce.date()
});
var WaitForDurationResponseBody = external_exports.object({
  /**
      If you pass an idempotencyKey, you may actually not need to wait.
      Use this date to determine when to continue.
  */
  waitUntil: external_exports.coerce.date(),
  waitpoint: external_exports.object({
    id: external_exports.string()
  })
});
var ApiDeploymentCommonShape = {
  from: external_exports.string().describe("The date to start the search from, in ISO 8601 format").optional(),
  to: external_exports.string().describe("The date to end the search, in ISO 8601 format").optional(),
  period: external_exports.string().describe("The period to search within (e.g. 1d, 7d, 3h, etc.)").optional(),
  status: external_exports.enum(["PENDING", "BUILDING", "DEPLOYING", "DEPLOYED", "FAILED", "CANCELED", "TIMED_OUT"]).describe("Filter deployments that are in this status").optional()
};
var ApiDeploymentListPaginationCursor = external_exports.string().describe("The deployment ID to start the search from, to get the next page").optional();
var ApiDeploymentListPaginationLimit = external_exports.coerce.number().describe("The number of deployments to return, defaults to 20 (max 100)").min(1, "Limit must be at least 1").max(100, "Limit must be less than 100").optional();
var ApiDeploymentListParams = {
  ...ApiDeploymentCommonShape,
  cursor: ApiDeploymentListPaginationCursor,
  limit: ApiDeploymentListPaginationLimit
};
var ApiDeploymentListOptions = external_exports.object(ApiDeploymentListParams);
var ApiDeploymentListSearchParams = external_exports.object({
  ...ApiDeploymentCommonShape,
  "page[after]": ApiDeploymentListPaginationCursor,
  "page[size]": ApiDeploymentListPaginationLimit
});
var ApiDeploymentListResponseItem = external_exports.object({
  id: external_exports.string(),
  createdAt: external_exports.coerce.date(),
  shortCode: external_exports.string(),
  version: external_exports.string(),
  runtime: external_exports.string(),
  runtimeVersion: external_exports.string(),
  status: external_exports.enum([
    "PENDING",
    "BUILDING",
    "DEPLOYING",
    "DEPLOYED",
    "FAILED",
    "CANCELED",
    "TIMED_OUT"
  ]),
  deployedAt: external_exports.coerce.date().optional(),
  git: external_exports.record(external_exports.any()).optional(),
  error: DeploymentErrorData.optional()
});
var ApiBranchListResponseBody = external_exports.object({
  branches: external_exports.array(external_exports.object({
    id: external_exports.string(),
    name: external_exports.string(),
    createdAt: external_exports.coerce.date(),
    updatedAt: external_exports.coerce.date(),
    git: external_exports.record(external_exports.any()).optional(),
    isPaused: external_exports.boolean()
  }))
});
var RetrieveRunTraceSpanSchema = external_exports.object({
  id: external_exports.string(),
  parentId: external_exports.string().optional(),
  message: external_exports.string(),
  data: external_exports.object({
    runId: external_exports.string(),
    taskSlug: external_exports.string().optional(),
    taskPath: external_exports.string().optional(),
    events: external_exports.array(external_exports.any()).optional(),
    startTime: external_exports.coerce.date(),
    duration: external_exports.number(),
    isError: external_exports.boolean(),
    isPartial: external_exports.boolean(),
    isCancelled: external_exports.boolean(),
    level: external_exports.string(),
    environmentType: external_exports.string(),
    workerVersion: external_exports.string().optional(),
    queueName: external_exports.string().optional(),
    machinePreset: external_exports.string().optional(),
    properties: external_exports.record(external_exports.any()).optional(),
    output: external_exports.unknown().optional()
  })
});
var RetrieveRunTraceSpan = RetrieveRunTraceSpanSchema.extend({
  children: external_exports.lazy(() => RetrieveRunTraceSpan.array())
});
var RetrieveRunTraceResponseBody = external_exports.object({
  trace: external_exports.object({
    traceId: external_exports.string(),
    rootSpan: RetrieveRunTraceSpan
  })
});

// node_modules/@trigger.dev/core/dist/esm/v3/schemas/messages.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/schemas/build.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/schemas/config.js
init_esm();
var ConfigManifest = external_exports.object({
  project: external_exports.string(),
  dirs: external_exports.string().array()
});

// node_modules/@trigger.dev/core/dist/esm/v3/schemas/build.js
var BuildExternal = external_exports.object({
  name: external_exports.string(),
  version: external_exports.string()
});
var BuildTarget = external_exports.enum(["dev", "deploy", "unmanaged"]);
var BuildRuntime = external_exports.enum(["node", "node-22", "bun"]);
var BuildManifest = external_exports.object({
  target: BuildTarget,
  packageVersion: external_exports.string(),
  cliPackageVersion: external_exports.string(),
  contentHash: external_exports.string(),
  runtime: BuildRuntime,
  environment: external_exports.string(),
  branch: external_exports.string().optional(),
  config: ConfigManifest,
  files: external_exports.array(TaskFile),
  sources: external_exports.record(external_exports.object({
    contents: external_exports.string(),
    contentHash: external_exports.string()
  })),
  outputPath: external_exports.string(),
  runWorkerEntryPoint: external_exports.string(),
  // Dev & Deploy has a runWorkerEntryPoint
  runControllerEntryPoint: external_exports.string().optional(),
  // Only deploy has a runControllerEntryPoint
  indexWorkerEntryPoint: external_exports.string(),
  // Dev & Deploy has a indexWorkerEntryPoint
  indexControllerEntryPoint: external_exports.string().optional(),
  // Only deploy has a indexControllerEntryPoint
  loaderEntryPoint: external_exports.string().optional(),
  initEntryPoint: external_exports.string().optional(),
  // Optional init.ts entry point
  configPath: external_exports.string(),
  externals: BuildExternal.array().optional(),
  build: external_exports.object({
    env: external_exports.record(external_exports.string()).optional(),
    commands: external_exports.array(external_exports.string()).optional()
  }),
  customConditions: external_exports.array(external_exports.string()).optional(),
  deploy: external_exports.object({
    env: external_exports.record(external_exports.string()).optional(),
    sync: external_exports.object({
      env: external_exports.record(external_exports.string()).optional(),
      parentEnv: external_exports.record(external_exports.string()).optional()
    }).optional()
  }),
  image: external_exports.object({
    pkgs: external_exports.array(external_exports.string()).optional(),
    instructions: external_exports.array(external_exports.string()).optional()
  }).optional(),
  otelImportHook: external_exports.object({
    include: external_exports.array(external_exports.string()).optional(),
    exclude: external_exports.array(external_exports.string()).optional()
  }).optional()
});
var IndexMessage = external_exports.object({
  type: external_exports.literal("index"),
  data: external_exports.object({
    build: BuildManifest
  })
});
var WorkerManifest = external_exports.object({
  configPath: external_exports.string(),
  tasks: TaskManifest.array(),
  queues: QueueManifest.array().optional(),
  workerEntryPoint: external_exports.string(),
  controllerEntryPoint: external_exports.string().optional(),
  loaderEntryPoint: external_exports.string().optional(),
  initEntryPoint: external_exports.string().optional(),
  // Optional init.ts entry point
  runtime: BuildRuntime,
  runtimeVersion: external_exports.string().optional(),
  customConditions: external_exports.array(external_exports.string()).optional(),
  timings: external_exports.record(external_exports.number()).optional(),
  processKeepAlive: external_exports.object({
    enabled: external_exports.boolean(),
    maxExecutionsPerProcess: external_exports.number().int().positive().optional()
  }).optional(),
  otelImportHook: external_exports.object({
    include: external_exports.array(external_exports.string()).optional(),
    exclude: external_exports.array(external_exports.string()).optional()
  }).optional()
});
var WorkerManifestMessage = external_exports.object({
  type: external_exports.literal("worker-manifest"),
  data: external_exports.object({
    manifest: WorkerManifest
  })
});
var ImportError = external_exports.object({
  message: external_exports.string(),
  file: external_exports.string(),
  stack: external_exports.string().optional(),
  name: external_exports.string().optional()
});
var ImportTaskFileErrors = external_exports.array(ImportError);

// node_modules/@trigger.dev/core/dist/esm/v3/runEngineWorker/supervisor/schemas.js
init_esm();
var WorkerApiHeartbeatRequestBody = external_exports.object({
  cpu: external_exports.object({
    used: external_exports.number(),
    available: external_exports.number()
  }),
  memory: external_exports.object({
    used: external_exports.number(),
    available: external_exports.number()
  }),
  tasks: external_exports.array(external_exports.string())
});
var WorkerApiHeartbeatResponseBody = external_exports.object({
  ok: external_exports.literal(true)
});
var WorkerApiSuspendRunRequestBody = external_exports.discriminatedUnion("success", [
  external_exports.object({
    success: external_exports.literal(true),
    checkpoint: CheckpointInput
  }),
  external_exports.object({
    success: external_exports.literal(false),
    error: external_exports.string()
  })
]);
var WorkerApiSuspendRunResponseBody = external_exports.object({
  ok: external_exports.literal(true)
});
var WorkerApiConnectRequestBody = external_exports.object({
  metadata: external_exports.record(external_exports.any())
});
var WorkerApiConnectResponseBody = external_exports.object({
  ok: external_exports.literal(true),
  workerGroup: external_exports.object({
    type: external_exports.string(),
    name: external_exports.string()
  })
});
var WorkerApiDequeueRequestBody = external_exports.object({
  maxResources: MachineResources.optional(),
  maxRunCount: external_exports.number().optional()
});
var WorkerApiDequeueResponseBody = DequeuedMessage.array();
var WorkerApiRunHeartbeatRequestBody = external_exports.object({
  cpu: external_exports.number().optional(),
  memory: external_exports.number().optional()
});
var WorkerApiRunHeartbeatResponseBody = external_exports.object({
  ok: external_exports.literal(true)
});
var WorkerApiRunAttemptStartRequestBody = external_exports.object({
  isWarmStart: external_exports.boolean().optional()
});
var WorkerApiRunAttemptStartResponseBody = StartRunAttemptResult.and(external_exports.object({
  envVars: external_exports.record(external_exports.string())
}));
var WorkerApiRunAttemptCompleteRequestBody = external_exports.object({
  completion: TaskRunExecutionResult
});
var WorkerApiRunAttemptCompleteResponseBody = external_exports.object({
  result: CompleteRunAttemptResult
});
var WorkerApiRunLatestSnapshotResponseBody = external_exports.object({
  execution: RunExecutionData
});
var WorkerApiDequeueFromVersionResponseBody = DequeuedMessage.array();
var DebugLogPropertiesValue = external_exports.union([
  external_exports.string(),
  external_exports.number(),
  external_exports.boolean(),
  external_exports.array(external_exports.string().nullish()),
  external_exports.array(external_exports.number().nullish()),
  external_exports.array(external_exports.boolean().nullish())
]);
var DebugLogProperties = external_exports.record(external_exports.string(), DebugLogPropertiesValue.optional());
var DebugLogPropertiesInput = external_exports.record(external_exports.string(), external_exports.unknown());
var WorkerApiDebugLogBodyInput = external_exports.object({
  time: external_exports.coerce.date(),
  message: external_exports.string(),
  properties: DebugLogPropertiesInput.optional()
});
var WorkerApiDebugLogBody = external_exports.object({
  time: external_exports.coerce.date(),
  message: external_exports.string(),
  properties: DebugLogProperties.optional()
});
var WorkerApiSuspendCompletionResponseBody = external_exports.object({
  success: external_exports.boolean(),
  error: external_exports.string().optional()
});
var WorkerApiRunSnapshotsSinceResponseBody = external_exports.object({
  snapshots: external_exports.array(RunExecutionData)
});

// node_modules/@trigger.dev/core/dist/esm/v3/schemas/messages.js
var AckCallbackResult = external_exports.discriminatedUnion("success", [
  external_exports.object({
    success: external_exports.literal(false),
    error: external_exports.object({
      name: external_exports.string(),
      message: external_exports.string(),
      stack: external_exports.string().optional(),
      stderr: external_exports.string().optional()
    })
  }),
  external_exports.object({
    success: external_exports.literal(true)
  })
]);
var BackgroundWorkerServerMessages = external_exports.discriminatedUnion("type", [
  external_exports.object({
    type: external_exports.literal("CANCEL_ATTEMPT"),
    taskAttemptId: external_exports.string(),
    taskRunId: external_exports.string()
  }),
  external_exports.object({
    type: external_exports.literal("SCHEDULE_ATTEMPT"),
    image: external_exports.string(),
    version: external_exports.string(),
    machine: MachinePreset,
    nextAttemptNumber: external_exports.number().optional(),
    // identifiers
    id: external_exports.string().optional(),
    // TODO: Remove this completely in a future release
    envId: external_exports.string(),
    envType: EnvironmentType,
    orgId: external_exports.string(),
    projectId: external_exports.string(),
    runId: external_exports.string(),
    dequeuedAt: external_exports.number().optional()
  }),
  external_exports.object({
    type: external_exports.literal("EXECUTE_RUN_LAZY_ATTEMPT"),
    payload: TaskRunExecutionLazyAttemptPayload
  })
]);
var serverWebsocketMessages = {
  SERVER_READY: external_exports.object({
    version: external_exports.literal("v1").default("v1"),
    id: external_exports.string()
  }),
  BACKGROUND_WORKER_MESSAGE: external_exports.object({
    version: external_exports.literal("v1").default("v1"),
    backgroundWorkerId: external_exports.string(),
    data: BackgroundWorkerServerMessages
  })
};
var BackgroundWorkerClientMessages = external_exports.discriminatedUnion("type", [
  external_exports.object({
    version: external_exports.literal("v1").default("v1"),
    type: external_exports.literal("TASK_RUN_COMPLETED"),
    completion: TaskRunExecutionResult,
    execution: V3TaskRunExecution
  }),
  external_exports.object({
    version: external_exports.literal("v1").default("v1"),
    type: external_exports.literal("TASK_RUN_FAILED_TO_RUN"),
    completion: TaskRunFailedExecutionResult
  }),
  external_exports.object({
    version: external_exports.literal("v1").default("v1"),
    type: external_exports.literal("TASK_HEARTBEAT"),
    id: external_exports.string()
  }),
  external_exports.object({
    version: external_exports.literal("v1").default("v1"),
    type: external_exports.literal("TASK_RUN_HEARTBEAT"),
    id: external_exports.string()
  })
]);
var ServerBackgroundWorker = external_exports.object({
  id: external_exports.string(),
  version: external_exports.string(),
  contentHash: external_exports.string(),
  engine: RunEngineVersionSchema.optional()
});
var clientWebsocketMessages = {
  READY_FOR_TASKS: external_exports.object({
    version: external_exports.literal("v1").default("v1"),
    backgroundWorkerId: external_exports.string(),
    inProgressRuns: external_exports.string().array().optional()
  }),
  BACKGROUND_WORKER_DEPRECATED: external_exports.object({
    version: external_exports.literal("v1").default("v1"),
    backgroundWorkerId: external_exports.string()
  }),
  BACKGROUND_WORKER_MESSAGE: external_exports.object({
    version: external_exports.literal("v1").default("v1"),
    backgroundWorkerId: external_exports.string(),
    data: BackgroundWorkerClientMessages
  })
};
var UncaughtExceptionMessage = external_exports.object({
  version: external_exports.literal("v1").default("v1"),
  error: external_exports.object({
    name: external_exports.string(),
    message: external_exports.string(),
    stack: external_exports.string().optional()
  }),
  origin: external_exports.enum(["uncaughtException", "unhandledRejection"])
});
var TaskMetadataFailedToParseData = external_exports.object({
  version: external_exports.literal("v1").default("v1"),
  tasks: external_exports.unknown(),
  zodIssues: external_exports.custom((v2) => {
    return Array.isArray(v2) && v2.every((issue) => typeof issue === "object" && "message" in issue);
  })
});
var indexerToWorkerMessages = {
  INDEX_COMPLETE: external_exports.object({
    version: external_exports.literal("v1").default("v1"),
    manifest: WorkerManifest,
    importErrors: ImportTaskFileErrors
  }),
  TASKS_FAILED_TO_PARSE: TaskMetadataFailedToParseData,
  UNCAUGHT_EXCEPTION: UncaughtExceptionMessage
};
var ExecutorToWorkerMessageCatalog = {
  TASK_RUN_COMPLETED: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      execution: TaskRunExecution,
      result: TaskRunExecutionResult
    })
  },
  TASK_HEARTBEAT: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      id: external_exports.string()
    })
  },
  UNCAUGHT_EXCEPTION: {
    message: UncaughtExceptionMessage
  },
  SEND_DEBUG_LOG: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      message: external_exports.string(),
      properties: DebugLogPropertiesInput.optional()
    })
  },
  SET_SUSPENDABLE: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      suspendable: external_exports.boolean()
    })
  }
};
var WorkerToExecutorMessageCatalog = {
  EXECUTE_TASK_RUN: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      execution: TaskRunExecution,
      traceContext: external_exports.record(external_exports.unknown()),
      metadata: ServerBackgroundWorker,
      metrics: TaskRunExecutionMetrics.optional(),
      env: external_exports.record(external_exports.string()).optional(),
      isWarmStart: external_exports.boolean().optional()
    })
  },
  FLUSH: {
    message: external_exports.object({
      timeoutInMs: external_exports.number()
    }),
    callback: external_exports.void()
  },
  CANCEL: {
    message: external_exports.object({
      timeoutInMs: external_exports.number()
    }),
    callback: external_exports.void()
  },
  RESOLVE_WAITPOINT: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      waitpoint: CompletedWaitpoint
    })
  }
};
var ProviderToPlatformMessages = {
  LOG: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      data: external_exports.string()
    })
  },
  LOG_WITH_ACK: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      data: external_exports.string()
    }),
    callback: external_exports.object({
      status: external_exports.literal("ok")
    })
  },
  WORKER_CRASHED: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      runId: external_exports.string(),
      reason: external_exports.string().optional(),
      exitCode: external_exports.number().optional(),
      message: external_exports.string().optional(),
      logs: external_exports.string().optional(),
      /** This means we should only update the error if one exists */
      overrideCompletion: external_exports.boolean().optional(),
      errorCode: TaskRunInternalError.shape.code.optional()
    })
  },
  INDEXING_FAILED: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      deploymentId: external_exports.string(),
      error: external_exports.object({
        name: external_exports.string(),
        message: external_exports.string(),
        stack: external_exports.string().optional(),
        stderr: external_exports.string().optional()
      }),
      overrideCompletion: external_exports.boolean().optional()
    })
  }
};
var PlatformToProviderMessages = {
  INDEX: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      imageTag: external_exports.string(),
      shortCode: external_exports.string(),
      apiKey: external_exports.string(),
      apiUrl: external_exports.string(),
      // identifiers
      envId: external_exports.string(),
      envType: EnvironmentType,
      orgId: external_exports.string(),
      projectId: external_exports.string(),
      deploymentId: external_exports.string()
    }),
    callback: AckCallbackResult
  },
  RESTORE: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      type: external_exports.enum(["DOCKER", "KUBERNETES"]),
      location: external_exports.string(),
      reason: external_exports.string().optional(),
      imageRef: external_exports.string(),
      attemptNumber: external_exports.number().optional(),
      machine: MachinePreset,
      // identifiers
      checkpointId: external_exports.string(),
      envId: external_exports.string(),
      envType: EnvironmentType,
      orgId: external_exports.string(),
      projectId: external_exports.string(),
      runId: external_exports.string()
    })
  },
  PRE_PULL_DEPLOYMENT: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      imageRef: external_exports.string(),
      shortCode: external_exports.string(),
      // identifiers
      envId: external_exports.string(),
      envType: EnvironmentType,
      orgId: external_exports.string(),
      projectId: external_exports.string(),
      deploymentId: external_exports.string()
    })
  }
};
var CreateWorkerMessage = external_exports.object({
  projectRef: external_exports.string(),
  envId: external_exports.string(),
  deploymentId: external_exports.string(),
  metadata: external_exports.object({
    cliPackageVersion: external_exports.string().optional(),
    contentHash: external_exports.string(),
    packageVersion: external_exports.string(),
    tasks: TaskResource.array()
  })
});
var CoordinatorToPlatformMessages = {
  LOG: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      metadata: external_exports.any(),
      text: external_exports.string()
    })
  },
  CREATE_WORKER: {
    message: external_exports.discriminatedUnion("version", [
      CreateWorkerMessage.extend({
        version: external_exports.literal("v1")
      }),
      CreateWorkerMessage.extend({
        version: external_exports.literal("v2"),
        supportsLazyAttempts: external_exports.boolean()
      })
    ]),
    callback: external_exports.discriminatedUnion("success", [
      external_exports.object({
        success: external_exports.literal(false)
      }),
      external_exports.object({
        success: external_exports.literal(true)
      })
    ])
  },
  CREATE_TASK_RUN_ATTEMPT: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      runId: external_exports.string(),
      envId: external_exports.string()
    }),
    callback: external_exports.discriminatedUnion("success", [
      external_exports.object({
        success: external_exports.literal(false),
        reason: external_exports.string().optional()
      }),
      external_exports.object({
        success: external_exports.literal(true),
        executionPayload: V3ProdTaskRunExecutionPayload
      })
    ])
  },
  // Deprecated: Only workers without lazy attempt support will use this
  READY_FOR_EXECUTION: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      runId: external_exports.string(),
      totalCompletions: external_exports.number()
    }),
    callback: external_exports.discriminatedUnion("success", [
      external_exports.object({
        success: external_exports.literal(false)
      }),
      external_exports.object({
        success: external_exports.literal(true),
        payload: V3ProdTaskRunExecutionPayload
      })
    ])
  },
  READY_FOR_LAZY_ATTEMPT: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      runId: external_exports.string(),
      envId: external_exports.string(),
      totalCompletions: external_exports.number()
    }),
    callback: external_exports.discriminatedUnion("success", [
      external_exports.object({
        success: external_exports.literal(false),
        reason: external_exports.string().optional()
      }),
      external_exports.object({
        success: external_exports.literal(true),
        lazyPayload: TaskRunExecutionLazyAttemptPayload
      })
    ])
  },
  READY_FOR_RESUME: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      attemptFriendlyId: external_exports.string(),
      type: WaitReason
    })
  },
  TASK_RUN_COMPLETED: {
    message: external_exports.object({
      version: external_exports.enum(["v1", "v2"]).default("v1"),
      execution: V3ProdTaskRunExecution,
      completion: TaskRunExecutionResult,
      checkpoint: external_exports.object({
        docker: external_exports.boolean(),
        location: external_exports.string()
      }).optional()
    })
  },
  TASK_RUN_COMPLETED_WITH_ACK: {
    message: external_exports.object({
      version: external_exports.enum(["v1", "v2"]).default("v2"),
      execution: V3ProdTaskRunExecution,
      completion: TaskRunExecutionResult,
      checkpoint: external_exports.object({
        docker: external_exports.boolean(),
        location: external_exports.string()
      }).optional()
    }),
    callback: AckCallbackResult
  },
  TASK_RUN_FAILED_TO_RUN: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      completion: TaskRunFailedExecutionResult
    })
  },
  TASK_HEARTBEAT: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      attemptFriendlyId: external_exports.string()
    })
  },
  TASK_RUN_HEARTBEAT: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      runId: external_exports.string()
    })
  },
  CHECKPOINT_CREATED: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      runId: external_exports.string().optional(),
      attemptFriendlyId: external_exports.string(),
      docker: external_exports.boolean(),
      location: external_exports.string(),
      reason: external_exports.discriminatedUnion("type", [
        external_exports.object({
          type: external_exports.literal("WAIT_FOR_DURATION"),
          ms: external_exports.number(),
          now: external_exports.number()
        }),
        external_exports.object({
          type: external_exports.literal("WAIT_FOR_BATCH"),
          batchFriendlyId: external_exports.string(),
          runFriendlyIds: external_exports.string().array()
        }),
        external_exports.object({
          type: external_exports.literal("WAIT_FOR_TASK"),
          friendlyId: external_exports.string()
        }),
        external_exports.object({
          type: external_exports.literal("RETRYING_AFTER_FAILURE"),
          attemptNumber: external_exports.number()
        }),
        external_exports.object({
          type: external_exports.literal("MANUAL"),
          /** If unspecified it will be restored immediately, e.g. for live migration */
          restoreAtUnixTimeMs: external_exports.number().optional()
        })
      ])
    }),
    callback: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      keepRunAlive: external_exports.boolean()
    })
  },
  INDEXING_FAILED: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      deploymentId: external_exports.string(),
      error: external_exports.object({
        name: external_exports.string(),
        message: external_exports.string(),
        stack: external_exports.string().optional(),
        stderr: external_exports.string().optional()
      })
    })
  },
  RUN_CRASHED: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      runId: external_exports.string(),
      error: external_exports.object({
        name: external_exports.string(),
        message: external_exports.string(),
        stack: external_exports.string().optional()
      })
    })
  }
};
var PlatformToCoordinatorMessages = {
  /** @deprecated use RESUME_AFTER_DEPENDENCY_WITH_ACK instead  */
  RESUME_AFTER_DEPENDENCY: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      runId: external_exports.string(),
      attemptId: external_exports.string(),
      attemptFriendlyId: external_exports.string(),
      completions: TaskRunExecutionResult.array(),
      executions: TaskRunExecution.array()
    })
  },
  RESUME_AFTER_DEPENDENCY_WITH_ACK: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      runId: external_exports.string(),
      attemptId: external_exports.string(),
      attemptFriendlyId: external_exports.string(),
      completions: TaskRunExecutionResult.array(),
      executions: TaskRunExecution.array()
    }),
    callback: AckCallbackResult
  },
  RESUME_AFTER_DURATION: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      attemptId: external_exports.string(),
      attemptFriendlyId: external_exports.string()
    })
  },
  REQUEST_ATTEMPT_CANCELLATION: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      attemptId: external_exports.string(),
      attemptFriendlyId: external_exports.string()
    })
  },
  REQUEST_RUN_CANCELLATION: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      runId: external_exports.string(),
      delayInMs: external_exports.number().optional()
    })
  },
  READY_FOR_RETRY: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      runId: external_exports.string()
    })
  },
  DYNAMIC_CONFIG: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      checkpointThresholdInMs: external_exports.number()
    })
  }
};
var ClientToSharedQueueMessages = {
  READY_FOR_TASKS: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      backgroundWorkerId: external_exports.string()
    })
  },
  BACKGROUND_WORKER_DEPRECATED: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      backgroundWorkerId: external_exports.string()
    })
  },
  BACKGROUND_WORKER_MESSAGE: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      backgroundWorkerId: external_exports.string(),
      data: BackgroundWorkerClientMessages
    })
  }
};
var SharedQueueToClientMessages = {
  SERVER_READY: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      id: external_exports.string()
    })
  },
  BACKGROUND_WORKER_MESSAGE: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      backgroundWorkerId: external_exports.string(),
      data: BackgroundWorkerServerMessages
    })
  }
};
var IndexTasksMessage = external_exports.object({
  version: external_exports.literal("v1"),
  deploymentId: external_exports.string(),
  tasks: TaskResource.array(),
  packageVersion: external_exports.string()
});
var ProdWorkerToCoordinatorMessages = {
  TEST: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1")
    }),
    callback: external_exports.void()
  },
  INDEX_TASKS: {
    message: external_exports.discriminatedUnion("version", [
      IndexTasksMessage.extend({
        version: external_exports.literal("v1")
      }),
      IndexTasksMessage.extend({
        version: external_exports.literal("v2"),
        supportsLazyAttempts: external_exports.boolean()
      })
    ]),
    callback: external_exports.discriminatedUnion("success", [
      external_exports.object({
        success: external_exports.literal(false)
      }),
      external_exports.object({
        success: external_exports.literal(true)
      })
    ])
  },
  // Deprecated: Only workers without lazy attempt support will use this
  READY_FOR_EXECUTION: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      runId: external_exports.string(),
      totalCompletions: external_exports.number()
    })
  },
  READY_FOR_LAZY_ATTEMPT: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      runId: external_exports.string(),
      totalCompletions: external_exports.number(),
      startTime: external_exports.number().optional()
    })
  },
  READY_FOR_RESUME: {
    message: external_exports.discriminatedUnion("version", [
      external_exports.object({
        version: external_exports.literal("v1"),
        attemptFriendlyId: external_exports.string(),
        type: WaitReason
      }),
      external_exports.object({
        version: external_exports.literal("v2"),
        attemptFriendlyId: external_exports.string(),
        attemptNumber: external_exports.number(),
        type: WaitReason
      })
    ])
  },
  READY_FOR_CHECKPOINT: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1")
    })
  },
  CANCEL_CHECKPOINT: {
    message: external_exports.discriminatedUnion("version", [
      external_exports.object({
        version: external_exports.literal("v1")
      }),
      external_exports.object({
        version: external_exports.literal("v2"),
        reason: WaitReason.optional()
      })
    ]).default({ version: "v1" }),
    callback: external_exports.object({
      version: external_exports.literal("v2").default("v2"),
      checkpointCanceled: external_exports.boolean(),
      reason: WaitReason.optional()
    })
  },
  TASK_HEARTBEAT: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      attemptFriendlyId: external_exports.string()
    })
  },
  TASK_RUN_HEARTBEAT: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      runId: external_exports.string()
    })
  },
  TASK_RUN_COMPLETED: {
    message: external_exports.object({
      version: external_exports.enum(["v1", "v2"]).default("v1"),
      execution: V3ProdTaskRunExecution,
      completion: TaskRunExecutionResult
    }),
    callback: external_exports.object({
      willCheckpointAndRestore: external_exports.boolean(),
      shouldExit: external_exports.boolean()
    })
  },
  TASK_RUN_FAILED_TO_RUN: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      completion: TaskRunFailedExecutionResult
    })
  },
  WAIT_FOR_DURATION: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      ms: external_exports.number(),
      now: external_exports.number(),
      attemptFriendlyId: external_exports.string()
    }),
    callback: external_exports.object({
      willCheckpointAndRestore: external_exports.boolean()
    })
  },
  WAIT_FOR_TASK: {
    message: external_exports.object({
      version: external_exports.enum(["v1", "v2"]).default("v1"),
      friendlyId: external_exports.string(),
      // This is the attempt that is waiting
      attemptFriendlyId: external_exports.string()
    }),
    callback: external_exports.object({
      willCheckpointAndRestore: external_exports.boolean()
    })
  },
  WAIT_FOR_BATCH: {
    message: external_exports.object({
      version: external_exports.enum(["v1", "v2"]).default("v1"),
      batchFriendlyId: external_exports.string(),
      runFriendlyIds: external_exports.string().array(),
      // This is the attempt that is waiting
      attemptFriendlyId: external_exports.string()
    }),
    callback: external_exports.object({
      willCheckpointAndRestore: external_exports.boolean()
    })
  },
  INDEXING_FAILED: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      deploymentId: external_exports.string(),
      error: external_exports.object({
        name: external_exports.string(),
        message: external_exports.string(),
        stack: external_exports.string().optional(),
        stderr: external_exports.string().optional()
      })
    })
  },
  CREATE_TASK_RUN_ATTEMPT: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      runId: external_exports.string()
    }),
    callback: external_exports.discriminatedUnion("success", [
      external_exports.object({
        success: external_exports.literal(false),
        reason: external_exports.string().optional()
      }),
      external_exports.object({
        success: external_exports.literal(true),
        executionPayload: V3ProdTaskRunExecutionPayload
      })
    ])
  },
  UNRECOVERABLE_ERROR: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      error: external_exports.object({
        name: external_exports.string(),
        message: external_exports.string(),
        stack: external_exports.string().optional()
      })
    })
  },
  SET_STATE: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      attemptFriendlyId: external_exports.string().optional(),
      attemptNumber: external_exports.string().optional()
    })
  }
};
var CoordinatorToProdWorkerMessages = {
  RESUME_AFTER_DEPENDENCY: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      attemptId: external_exports.string(),
      completions: TaskRunExecutionResult.array(),
      executions: TaskRunExecution.array()
    })
  },
  RESUME_AFTER_DURATION: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      attemptId: external_exports.string()
    })
  },
  // Deprecated: Only workers without lazy attempt support will use this
  EXECUTE_TASK_RUN: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      executionPayload: V3ProdTaskRunExecutionPayload
    })
  },
  EXECUTE_TASK_RUN_LAZY_ATTEMPT: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      lazyPayload: TaskRunExecutionLazyAttemptPayload
    })
  },
  REQUEST_ATTEMPT_CANCELLATION: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      attemptId: external_exports.string()
    })
  },
  REQUEST_EXIT: {
    message: external_exports.discriminatedUnion("version", [
      external_exports.object({
        version: external_exports.literal("v1")
      }),
      external_exports.object({
        version: external_exports.literal("v2"),
        delayInMs: external_exports.number().optional()
      })
    ])
  },
  READY_FOR_RETRY: {
    message: external_exports.object({
      version: external_exports.literal("v1").default("v1"),
      runId: external_exports.string()
    })
  }
};
var ProdWorkerSocketData = external_exports.object({
  contentHash: external_exports.string(),
  projectRef: external_exports.string(),
  envId: external_exports.string(),
  runId: external_exports.string(),
  attemptFriendlyId: external_exports.string().optional(),
  attemptNumber: external_exports.string().optional(),
  podName: external_exports.string(),
  deploymentId: external_exports.string(),
  deploymentVersion: external_exports.string(),
  requiresCheckpointResumeWithMessage: external_exports.string().optional()
});
var CoordinatorSocketData = external_exports.object({
  supportsDynamicConfig: external_exports.string().optional()
});

// node_modules/@trigger.dev/core/dist/esm/v3/schemas/style.js
init_esm();
var PRIMARY_VARIANT = "primary";
var WARM_VARIANT = "warm";
var COLD_VARIANT = "cold";
var Variant = external_exports.enum([PRIMARY_VARIANT, WARM_VARIANT, COLD_VARIANT]);
var AccessoryItem = external_exports.object({
  text: external_exports.string(),
  variant: external_exports.string().optional(),
  url: external_exports.string().optional()
});
var Accessory = external_exports.object({
  items: external_exports.array(AccessoryItem),
  style: external_exports.enum(["codepath"]).optional()
});
var TaskEventStyle = external_exports.object({
  icon: external_exports.string().optional(),
  variant: Variant.optional(),
  accessory: Accessory.optional()
}).default({
  icon: void 0,
  variant: void 0
});

// node_modules/@trigger.dev/core/dist/esm/v3/schemas/fetch.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/schemas/eventFilter.js
init_esm();
var stringPatternMatchers = [
  external_exports.object({
    $endsWith: external_exports.string()
  }),
  external_exports.object({
    $startsWith: external_exports.string()
  }),
  external_exports.object({
    $ignoreCaseEquals: external_exports.string()
  })
];
var EventMatcher = external_exports.union([
  /** Match against a string */
  external_exports.array(external_exports.string()),
  /** Match against a number */
  external_exports.array(external_exports.number()),
  /** Match against a boolean */
  external_exports.array(external_exports.boolean()),
  external_exports.array(external_exports.union([
    ...stringPatternMatchers,
    external_exports.object({
      $exists: external_exports.boolean()
    }),
    external_exports.object({
      $isNull: external_exports.boolean()
    }),
    external_exports.object({
      $anythingBut: external_exports.union([external_exports.string(), external_exports.number(), external_exports.boolean()])
    }),
    external_exports.object({
      $anythingBut: external_exports.union([external_exports.array(external_exports.string()), external_exports.array(external_exports.number()), external_exports.array(external_exports.boolean())])
    }),
    external_exports.object({
      $gt: external_exports.number()
    }),
    external_exports.object({
      $lt: external_exports.number()
    }),
    external_exports.object({
      $gte: external_exports.number()
    }),
    external_exports.object({
      $lte: external_exports.number()
    }),
    external_exports.object({
      $between: external_exports.tuple([external_exports.number(), external_exports.number()])
    }),
    external_exports.object({
      $includes: external_exports.union([external_exports.string(), external_exports.number(), external_exports.boolean()])
    }),
    external_exports.object({
      $not: external_exports.union([external_exports.string(), external_exports.number(), external_exports.boolean()])
    })
  ]))
]);
var EventFilter = external_exports.lazy(() => external_exports.record(external_exports.union([EventMatcher, EventFilter])));

// node_modules/@trigger.dev/core/dist/esm/v3/schemas/fetch.js
var FetchRetryHeadersStrategy = external_exports.object({
  /** The `headers` strategy retries the request using info from the response headers. */
  strategy: external_exports.literal("headers"),
  /** The header to use to determine the maximum number of times to retry the request. */
  limitHeader: external_exports.string(),
  /** The header to use to determine the number of remaining retries. */
  remainingHeader: external_exports.string(),
  /** The header to use to determine the time when the number of remaining retries will be reset. */
  resetHeader: external_exports.string(),
  /** The event filter to use to determine if the request should be retried. */
  bodyFilter: EventFilter.optional(),
  /** The format of the `resetHeader` value. */
  resetFormat: external_exports.enum([
    "unix_timestamp",
    "unix_timestamp_in_ms",
    "iso_8601",
    "iso_8601_duration_openai_variant"
  ]).default("unix_timestamp").optional()
});
var FetchRetryBackoffStrategy = RetryOptions.extend({
  /** The `backoff` strategy retries the request with an exponential backoff. */
  strategy: external_exports.literal("backoff"),
  /** The event filter to use to determine if the request should be retried. */
  bodyFilter: EventFilter.optional()
});
var FetchRetryStrategy = external_exports.discriminatedUnion("strategy", [
  FetchRetryHeadersStrategy,
  FetchRetryBackoffStrategy
]);
var FetchRetryByStatusOptions = external_exports.record(external_exports.string(), FetchRetryStrategy);
var FetchTimeoutOptions = external_exports.object({
  /** The maximum time to wait for the request to complete. */
  durationInMs: external_exports.number().optional(),
  retry: RetryOptions.optional()
});
var FetchRetryOptions = external_exports.object({
  /** The retrying strategy for specific status codes. */
  byStatus: FetchRetryByStatusOptions.optional(),
  /** The timeout options for the request. */
  timeout: RetryOptions.optional(),
  /**
   * The retrying strategy for connection errors.
   */
  connectionError: RetryOptions.optional()
});

// node_modules/@trigger.dev/core/dist/esm/v3/schemas/openTelemetry.js
init_esm();
var ExceptionEventProperties = external_exports.object({
  type: external_exports.string().optional(),
  message: external_exports.string().optional(),
  stacktrace: external_exports.string().optional()
});
var ExceptionSpanEvent = external_exports.object({
  name: external_exports.literal("exception"),
  time: external_exports.coerce.date(),
  properties: external_exports.object({
    exception: ExceptionEventProperties
  })
});
var CancellationSpanEvent = external_exports.object({
  name: external_exports.literal("cancellation"),
  time: external_exports.coerce.date(),
  properties: external_exports.object({
    reason: external_exports.string()
  })
});
var OtherSpanEvent = external_exports.object({
  name: external_exports.string(),
  time: external_exports.coerce.date(),
  properties: external_exports.record(external_exports.unknown())
});
var SpanEvent = external_exports.union([ExceptionSpanEvent, CancellationSpanEvent, OtherSpanEvent]);
var SpanEvents = external_exports.array(SpanEvent);
var SpanMessagingEvent = external_exports.object({
  system: external_exports.string().optional(),
  client_id: external_exports.string().optional(),
  operation: external_exports.enum(["publish", "create", "receive", "deliver"]),
  message: external_exports.any(),
  destination: external_exports.string().optional()
});

// node_modules/@trigger.dev/core/dist/esm/v3/schemas/webhooks.js
init_esm();
var AlertWebhookRunFailedObject = external_exports.object({
  /** Task information */
  task: external_exports.object({
    /** Unique identifier for the task */
    id: external_exports.string(),
    /** File path where the task is defined */
    filePath: external_exports.string(),
    /** Name of the exported task function */
    exportName: external_exports.string().optional(),
    /** Version of the task */
    version: external_exports.string(),
    /** Version of the SDK used */
    sdkVersion: external_exports.string(),
    /** Version of the CLI used */
    cliVersion: external_exports.string()
  }),
  /** Run information */
  run: external_exports.object({
    /** Unique identifier for the run */
    id: external_exports.string(),
    /** Run number */
    number: external_exports.number(),
    /** Current status of the run */
    status: RunStatus,
    /** When the run was created */
    createdAt: external_exports.coerce.date(),
    /** When the run started executing */
    startedAt: external_exports.coerce.date().optional(),
    /** When the run finished executing */
    completedAt: external_exports.coerce.date().optional(),
    /** Whether this is a test run */
    isTest: external_exports.boolean(),
    /** Idempotency key for the run */
    idempotencyKey: external_exports.string().optional(),
    /** Associated tags */
    tags: external_exports.array(external_exports.string()),
    /** Error information */
    error: TaskRunError,
    /** Whether the run was an out-of-memory error */
    isOutOfMemoryError: external_exports.boolean(),
    /** Machine preset used for the run */
    machine: external_exports.string(),
    /** URL to view the run in the dashboard */
    dashboardUrl: external_exports.string()
  }),
  /** Environment information */
  environment: external_exports.object({
    /** Environment ID */
    id: external_exports.string(),
    /** Environment type */
    type: RuntimeEnvironmentTypeSchema,
    /** Environment slug */
    slug: external_exports.string(),
    /** Environment branch name */
    branchName: external_exports.string().optional()
  }),
  /** Organization information */
  organization: external_exports.object({
    /** Organization ID */
    id: external_exports.string(),
    /** Organization slug */
    slug: external_exports.string(),
    /** Organization name */
    name: external_exports.string()
  }),
  /** Project information */
  project: external_exports.object({
    /** Project ID */
    id: external_exports.string(),
    /** Project reference */
    ref: external_exports.string(),
    /** Project slug */
    slug: external_exports.string(),
    /** Project name */
    name: external_exports.string()
  })
});
var DeployError = external_exports.object({
  /** Error name */
  name: external_exports.string(),
  /** Error message */
  message: external_exports.string(),
  /** Error stack trace */
  stack: external_exports.string().optional(),
  /** Standard error output */
  stderr: external_exports.string().optional()
});
var deploymentCommonProperties = {
  /** Environment information */
  environment: external_exports.object({
    id: external_exports.string(),
    type: RuntimeEnvironmentTypeSchema,
    slug: external_exports.string(),
    /** Environment branch name */
    branchName: external_exports.string().optional()
  }),
  /** Organization information */
  organization: external_exports.object({
    id: external_exports.string(),
    slug: external_exports.string(),
    name: external_exports.string()
  }),
  /** Project information */
  project: external_exports.object({
    id: external_exports.string(),
    ref: external_exports.string(),
    slug: external_exports.string(),
    name: external_exports.string()
  })
};
var deploymentDeploymentCommonProperties = {
  /** Deployment ID */
  id: external_exports.string(),
  /** Deployment status */
  status: external_exports.string(),
  /** Deployment version */
  version: external_exports.string(),
  /** Short code identifier */
  shortCode: external_exports.string()
};
var AlertWebhookDeploymentSuccessObject = external_exports.object({
  ...deploymentCommonProperties,
  deployment: external_exports.object({
    ...deploymentDeploymentCommonProperties,
    /** When the deployment completed */
    deployedAt: external_exports.coerce.date()
  }),
  /** Deployed tasks */
  tasks: external_exports.array(external_exports.object({
    /** Task ID */
    id: external_exports.string(),
    /** File path where the task is defined */
    filePath: external_exports.string(),
    /** Name of the exported task function */
    exportName: external_exports.string().optional(),
    /** Source of the trigger */
    triggerSource: external_exports.string()
  }))
});
var AlertWebhookDeploymentFailedObject = external_exports.object({
  ...deploymentCommonProperties,
  deployment: external_exports.object({
    ...deploymentDeploymentCommonProperties,
    /** When the deployment failed */
    failedAt: external_exports.coerce.date()
  }),
  /** Error information */
  error: DeployError
});
var commonProperties = {
  /** Webhook ID */
  id: external_exports.string(),
  /** When the webhook was created */
  created: external_exports.coerce.date(),
  /** Version of the webhook */
  webhookVersion: external_exports.string()
};
var Webhook = external_exports.discriminatedUnion("type", [
  /** Run failed alert webhook */
  external_exports.object({
    ...commonProperties,
    type: external_exports.literal("alert.run.failed"),
    object: AlertWebhookRunFailedObject
  }),
  /** Deployment success alert webhook */
  external_exports.object({
    ...commonProperties,
    type: external_exports.literal("alert.deployment.success"),
    object: AlertWebhookDeploymentSuccessObject
  }),
  /** Deployment failed alert webhook */
  external_exports.object({
    ...commonProperties,
    type: external_exports.literal("alert.deployment.failed"),
    object: AlertWebhookDeploymentFailedObject
  })
]);

// node_modules/@trigger.dev/core/dist/esm/v3/schemas/checkpoints.js
init_esm();
var CallbackUrl = zod_default.string().url().transform((url) => new URL(url));
var CheckpointServiceSuspendRequestBody = zod_default.object({
  type: CheckpointType,
  runId: zod_default.string(),
  snapshotId: zod_default.string(),
  runnerId: zod_default.string(),
  projectRef: zod_default.string(),
  deploymentVersion: zod_default.string(),
  reason: zod_default.string().optional()
});
var CheckpointServiceSuspendResponseBody = zod_default.object({
  ok: zod_default.literal(true)
});
var CheckpointServiceRestoreRequestBody = DequeuedMessage.required({ checkpoint: true });

// node_modules/@trigger.dev/core/dist/esm/v3/schemas/warmStart.js
init_esm();
var WarmStartConnectResponse = external_exports.object({
  connectionTimeoutMs: external_exports.number().optional(),
  keepaliveMs: external_exports.number().optional()
});

// node_modules/@trigger.dev/core/dist/esm/v3/schemas/queues.js
init_esm();
var queueTypes = ["task", "custom"];
var QueueType = external_exports.enum(queueTypes);
var RetrieveQueueType = external_exports.enum([...queueTypes, "id"]);
var QueueItem = external_exports.object({
  /** The queue id, e.g. queue_12345 */
  id: external_exports.string(),
  /** The queue name */
  name: external_exports.string(),
  /**
   * The queue type, either "task" or "custom"
   * "task" are created automatically for each task.
   * "custom" are created by you explicitly in your code.
   * */
  type: QueueType,
  /** The number of runs currently running */
  running: external_exports.number(),
  /** The number of runs currently queued */
  queued: external_exports.number(),
  /** The concurrency limit of the queue */
  concurrencyLimit: external_exports.number().nullable(),
  /** Whether the queue is paused. If it's paused, no new runs will be started. */
  paused: external_exports.boolean()
});
var ListQueueOptions = external_exports.object({
  /** The page number */
  page: external_exports.number().optional(),
  /** The number of queues per page */
  perPage: external_exports.number().optional()
});
var QueueTypeName = external_exports.object({
  /** "task" or "custom" */
  type: QueueType,
  /** The name of your queue.
   * For "task" type it will be the task id, for "custom" it will be the name you specified.
   * */
  name: external_exports.string()
});
var RetrieveQueueParam = external_exports.union([external_exports.string(), QueueTypeName]);

// node_modules/@trigger.dev/core/dist/esm/v3/task-context-api.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/taskContext/index.js
init_esm();
var API_NAME8 = "task-context";
var TaskContextAPI = class _TaskContextAPI {
  static {
    __name(this, "TaskContextAPI");
  }
  static _instance;
  constructor() {
  }
  static getInstance() {
    if (!this._instance) {
      this._instance = new _TaskContextAPI();
    }
    return this._instance;
  }
  get isInsideTask() {
    return this.#getTaskContext() !== void 0;
  }
  get ctx() {
    return this.#getTaskContext()?.ctx;
  }
  get worker() {
    return this.#getTaskContext()?.worker;
  }
  get isWarmStart() {
    return this.#getTaskContext()?.isWarmStart;
  }
  get attributes() {
    if (this.ctx) {
      return {
        ...this.contextAttributes,
        ...this.workerAttributes,
        [SemanticInternalAttributes.WARM_START]: !!this.isWarmStart
      };
    }
    return {};
  }
  get resourceAttributes() {
    if (this.ctx) {
      return {
        [SemanticInternalAttributes.ENVIRONMENT_ID]: this.ctx.environment.id,
        [SemanticInternalAttributes.ENVIRONMENT_TYPE]: this.ctx.environment.type,
        [SemanticInternalAttributes.ORGANIZATION_ID]: this.ctx.organization.id,
        [SemanticInternalAttributes.PROJECT_ID]: this.ctx.project.id,
        [SemanticInternalAttributes.PROJECT_REF]: this.ctx.project.ref,
        [SemanticInternalAttributes.PROJECT_NAME]: this.ctx.project.name,
        [SemanticInternalAttributes.ORGANIZATION_SLUG]: this.ctx.organization.slug,
        [SemanticInternalAttributes.ORGANIZATION_NAME]: this.ctx.organization.name,
        [SemanticInternalAttributes.MACHINE_PRESET_NAME]: this.ctx.machine?.name,
        [SemanticInternalAttributes.MACHINE_PRESET_CPU]: this.ctx.machine?.cpu,
        [SemanticInternalAttributes.MACHINE_PRESET_MEMORY]: this.ctx.machine?.memory,
        [SemanticInternalAttributes.MACHINE_PRESET_CENTS_PER_MS]: this.ctx.machine?.centsPerMs
      };
    }
    return {};
  }
  get workerAttributes() {
    if (this.worker) {
      return {
        [SemanticInternalAttributes.WORKER_ID]: this.worker.id,
        [SemanticInternalAttributes.WORKER_VERSION]: this.worker.version
      };
    }
    return {};
  }
  get contextAttributes() {
    if (this.ctx) {
      return {
        [SemanticInternalAttributes.ATTEMPT_NUMBER]: this.ctx.attempt.number,
        [SemanticInternalAttributes.TASK_SLUG]: this.ctx.task.id,
        [SemanticInternalAttributes.TASK_PATH]: this.ctx.task.filePath,
        [SemanticInternalAttributes.QUEUE_NAME]: this.ctx.queue.name,
        [SemanticInternalAttributes.QUEUE_ID]: this.ctx.queue.id,
        [SemanticInternalAttributes.RUN_ID]: this.ctx.run.id,
        [SemanticInternalAttributes.RUN_IS_TEST]: this.ctx.run.isTest,
        [SemanticInternalAttributes.BATCH_ID]: this.ctx.batch?.id,
        [SemanticInternalAttributes.IDEMPOTENCY_KEY]: this.ctx.run.idempotencyKey
      };
    }
    return {};
  }
  disable() {
    unregisterGlobal(API_NAME8);
  }
  setGlobalTaskContext(taskContext2) {
    return registerGlobal(API_NAME8, taskContext2);
  }
  #getTaskContext() {
    return getGlobal(API_NAME8);
  }
};

// node_modules/@trigger.dev/core/dist/esm/v3/task-context-api.js
var taskContext = TaskContextAPI.getInstance();

// node_modules/@trigger.dev/core/dist/esm/v3/apiClient/core.js
init_esm();
var import_zod_validation_error = __toESM(require_cjs(), 1);

// node_modules/@trigger.dev/core/dist/esm/v3/utils/retries.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/retry.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/utils/retries.js
var defaultRetryOptions = {
  maxAttempts: 3,
  factor: 2,
  minTimeoutInMs: 1e3,
  maxTimeoutInMs: 6e4,
  randomize: true
};
var defaultFetchRetryOptions = {
  byStatus: {
    "429,408,409,5xx": {
      strategy: "backoff",
      ...defaultRetryOptions
    }
  },
  connectionError: defaultRetryOptions,
  timeout: defaultRetryOptions
};
function calculateNextRetryDelay(options, attempt) {
  const opts = { ...defaultRetryOptions, ...options };
  if (attempt >= opts.maxAttempts) {
    return;
  }
  const { factor, minTimeoutInMs, maxTimeoutInMs, randomize } = opts;
  const random = randomize ? Math.random() + 1 : 1;
  const timeout3 = Math.min(maxTimeoutInMs, random * minTimeoutInMs * Math.pow(factor, attempt - 1));
  return Math.round(timeout3);
}
__name(calculateNextRetryDelay, "calculateNextRetryDelay");

// node_modules/@trigger.dev/core/dist/esm/v3/apiClient/errors.js
init_esm();
var ApiError = class _ApiError extends Error {
  static {
    __name(this, "ApiError");
  }
  status;
  headers;
  error;
  code;
  param;
  type;
  constructor(status, error, message, headers) {
    super(`${_ApiError.makeMessage(status, error, message)}`);
    this.name = "TriggerApiError";
    this.status = status;
    this.headers = headers;
    const data = error;
    this.error = data;
    this.code = data?.["code"];
    this.param = data?.["param"];
    this.type = data?.["type"];
  }
  static makeMessage(status, error, message) {
    const errorMessage = error?.message ? typeof error.message === "string" ? error.message : JSON.stringify(error.message) : typeof error === "string" ? error : error ? JSON.stringify(error) : void 0;
    if (errorMessage) {
      return errorMessage;
    }
    if (status && message) {
      return `${status} ${message}`;
    }
    if (status) {
      return `${status} status code (no body)`;
    }
    if (message) {
      return message;
    }
    return "(no status code or body)";
  }
  static generate(status, errorResponse, message, headers) {
    if (!status) {
      return new ApiConnectionError({ cause: castToError(errorResponse) });
    }
    const error = errorResponse?.["error"];
    if (status === 400) {
      return new BadRequestError(status, error, message, headers);
    }
    if (status === 401) {
      return new AuthenticationError(status, error, message, headers);
    }
    if (status === 403) {
      return new PermissionDeniedError(status, error, message, headers);
    }
    if (status === 404) {
      return new NotFoundError(status, error, message, headers);
    }
    if (status === 409) {
      return new ConflictError(status, error, message, headers);
    }
    if (status === 422) {
      return new UnprocessableEntityError(status, error, message, headers);
    }
    if (status === 429) {
      return new RateLimitError(status, error, message, headers);
    }
    if (status >= 500) {
      return new InternalServerError(status, error, message, headers);
    }
    return new _ApiError(status, error, message, headers);
  }
};
var ApiConnectionError = class extends ApiError {
  static {
    __name(this, "ApiConnectionError");
  }
  status = void 0;
  constructor({ message, cause }) {
    super(void 0, void 0, message || "Connection error.", void 0);
    if (cause)
      this.cause = cause;
  }
};
var BadRequestError = class extends ApiError {
  static {
    __name(this, "BadRequestError");
  }
  status = 400;
};
var AuthenticationError = class extends ApiError {
  static {
    __name(this, "AuthenticationError");
  }
  status = 401;
};
var PermissionDeniedError = class extends ApiError {
  static {
    __name(this, "PermissionDeniedError");
  }
  status = 403;
};
var NotFoundError = class extends ApiError {
  static {
    __name(this, "NotFoundError");
  }
  status = 404;
};
var ConflictError = class extends ApiError {
  static {
    __name(this, "ConflictError");
  }
  status = 409;
};
var UnprocessableEntityError = class extends ApiError {
  static {
    __name(this, "UnprocessableEntityError");
  }
  status = 422;
};
var RateLimitError = class extends ApiError {
  static {
    __name(this, "RateLimitError");
  }
  status = 429;
  get millisecondsUntilReset() {
    const resetAtUnixEpochMs = (this.headers ?? {})["x-ratelimit-reset"];
    if (typeof resetAtUnixEpochMs === "string") {
      const resetAtUnixEpoch = parseInt(resetAtUnixEpochMs, 10);
      if (isNaN(resetAtUnixEpoch)) {
        return;
      }
      return Math.max(resetAtUnixEpoch - Date.now() + Math.floor(Math.random() * 2e3), 0);
    }
    return;
  }
};
var InternalServerError = class extends ApiError {
  static {
    __name(this, "InternalServerError");
  }
};
var ApiSchemaValidationError = class extends ApiError {
  static {
    __name(this, "ApiSchemaValidationError");
  }
  status = 200;
  rawBody;
  constructor({ message, cause, status, rawBody, headers }) {
    super(status, void 0, message || "Validation error.", headers);
    if (cause)
      this.cause = cause;
    this.rawBody = rawBody;
  }
};
function castToError(err) {
  if (err instanceof Error)
    return err;
  return new Error(err);
}
__name(castToError, "castToError");

// node_modules/@trigger.dev/core/dist/esm/v3/apiClient/core.js
init_esm2();
var import_core = __toESM(require_src3(), 1);

// node_modules/@trigger.dev/core/dist/esm/v3/utils/styleAttributes.js
init_esm();
function accessoryAttributes(accessory) {
  return flattenAttributes(accessory, SemanticInternalAttributes.STYLE_ACCESSORY);
}
__name(accessoryAttributes, "accessoryAttributes");

// node_modules/@trigger.dev/core/dist/esm/v3/apiClient/pagination.js
init_esm();
var CursorPage = class {
  static {
    __name(this, "CursorPage");
  }
  pageFetcher;
  data;
  pagination;
  constructor(data, pagination, pageFetcher) {
    this.pageFetcher = pageFetcher;
    this.data = data;
    this.pagination = pagination;
  }
  getPaginatedItems() {
    return this.data ?? [];
  }
  hasNextPage() {
    return !!this.pagination.next;
  }
  hasPreviousPage() {
    return !!this.pagination.previous;
  }
  getNextPage() {
    if (!this.pagination.next) {
      throw new Error("No next page available");
    }
    return this.pageFetcher({ after: this.pagination.next });
  }
  getPreviousPage() {
    if (!this.pagination.previous) {
      throw new Error("No previous page available");
    }
    return this.pageFetcher({ before: this.pagination.previous });
  }
  async *iterPages() {
    let page = this;
    yield page;
    while (page.hasNextPage()) {
      page = await page.getNextPage();
      yield page;
    }
  }
  async *[Symbol.asyncIterator]() {
    for await (const page of this.iterPages()) {
      for (const item of page.getPaginatedItems()) {
        yield item;
      }
    }
  }
};
var OffsetLimitPage = class {
  static {
    __name(this, "OffsetLimitPage");
  }
  pageFetcher;
  data;
  pagination;
  constructor(data, pagination, pageFetcher) {
    this.pageFetcher = pageFetcher;
    this.data = data;
    this.pagination = pagination;
  }
  getPaginatedItems() {
    return this.data ?? [];
  }
  hasNextPage() {
    return this.pagination.currentPage < this.pagination.totalPages;
  }
  hasPreviousPage() {
    return this.pagination.currentPage > 1;
  }
  getNextPage() {
    if (!this.hasNextPage()) {
      throw new Error("No next page available");
    }
    return this.pageFetcher({
      page: this.pagination.currentPage + 1
    });
  }
  getPreviousPage() {
    if (!this.hasPreviousPage()) {
      throw new Error("No previous page available");
    }
    return this.pageFetcher({
      page: this.pagination.currentPage - 1
    });
  }
  async *iterPages() {
    let page = this;
    yield page;
    while (page.hasNextPage()) {
      page = await page.getNextPage();
      yield page;
    }
  }
  async *[Symbol.asyncIterator]() {
    for await (const page of this.iterPages()) {
      for (const item of page.getPaginatedItems()) {
        yield item;
      }
    }
  }
};

// node_modules/eventsource-parser/dist/index.js
init_esm();
var ParseError = class extends Error {
  static {
    __name(this, "ParseError");
  }
  constructor(message, options) {
    super(message), this.name = "ParseError", this.type = options.type, this.field = options.field, this.value = options.value, this.line = options.line;
  }
};
function noop(_arg) {
}
__name(noop, "noop");
function createParser(callbacks) {
  if (typeof callbacks == "function")
    throw new TypeError(
      "`callbacks` must be an object, got a function instead. Did you mean `{onEvent: fn}`?"
    );
  const { onEvent = noop, onError = noop, onRetry = noop, onComment } = callbacks;
  let incompleteLine = "", isFirstChunk = true, id, data = "", eventType = "";
  function feed(newChunk) {
    const chunk = isFirstChunk ? newChunk.replace(/^\xEF\xBB\xBF/, "") : newChunk, [complete, incomplete] = splitLines(`${incompleteLine}${chunk}`);
    for (const line of complete)
      parseLine(line);
    incompleteLine = incomplete, isFirstChunk = false;
  }
  __name(feed, "feed");
  function parseLine(line) {
    if (line === "") {
      dispatchEvent();
      return;
    }
    if (line.startsWith(":")) {
      onComment && onComment(line.slice(line.startsWith(": ") ? 2 : 1));
      return;
    }
    const fieldSeparatorIndex = line.indexOf(":");
    if (fieldSeparatorIndex !== -1) {
      const field = line.slice(0, fieldSeparatorIndex), offset = line[fieldSeparatorIndex + 1] === " " ? 2 : 1, value = line.slice(fieldSeparatorIndex + offset);
      processField(field, value, line);
      return;
    }
    processField(line, "", line);
  }
  __name(parseLine, "parseLine");
  function processField(field, value, line) {
    switch (field) {
      case "event":
        eventType = value;
        break;
      case "data":
        data = `${data}${value}
`;
        break;
      case "id":
        id = value.includes("\0") ? void 0 : value;
        break;
      case "retry":
        /^\d+$/.test(value) ? onRetry(parseInt(value, 10)) : onError(
          new ParseError(`Invalid \`retry\` value: "${value}"`, {
            type: "invalid-retry",
            value,
            line
          })
        );
        break;
      default:
        onError(
          new ParseError(
            `Unknown field "${field.length > 20 ? `${field.slice(0, 20)}…` : field}"`,
            { type: "unknown-field", field, value, line }
          )
        );
        break;
    }
  }
  __name(processField, "processField");
  function dispatchEvent() {
    data.length > 0 && onEvent({
      id,
      event: eventType || void 0,
      // If the data buffer's last character is a U+000A LINE FEED (LF) character,
      // then remove the last character from the data buffer.
      data: data.endsWith(`
`) ? data.slice(0, -1) : data
    }), id = void 0, data = "", eventType = "";
  }
  __name(dispatchEvent, "dispatchEvent");
  function reset(options = {}) {
    incompleteLine && options.consume && parseLine(incompleteLine), isFirstChunk = true, id = void 0, data = "", eventType = "", incompleteLine = "";
  }
  __name(reset, "reset");
  return { feed, reset };
}
__name(createParser, "createParser");
function splitLines(chunk) {
  const lines = [];
  let incompleteLine = "", searchIndex = 0;
  for (; searchIndex < chunk.length; ) {
    const crIndex = chunk.indexOf("\r", searchIndex), lfIndex = chunk.indexOf(`
`, searchIndex);
    let lineEnd = -1;
    if (crIndex !== -1 && lfIndex !== -1 ? lineEnd = Math.min(crIndex, lfIndex) : crIndex !== -1 ? crIndex === chunk.length - 1 ? lineEnd = -1 : lineEnd = crIndex : lfIndex !== -1 && (lineEnd = lfIndex), lineEnd === -1) {
      incompleteLine = chunk.slice(searchIndex);
      break;
    } else {
      const line = chunk.slice(searchIndex, lineEnd);
      lines.push(line), searchIndex = lineEnd + 1, chunk[searchIndex - 1] === "\r" && chunk[searchIndex] === `
` && searchIndex++;
    }
  }
  return [lines, incompleteLine];
}
__name(splitLines, "splitLines");

// node_modules/@trigger.dev/core/dist/esm/v3/utils/crypto.js
init_esm();
async function randomUUID() {
  const { randomUUID: randomUUID2 } = await import("./crypto.node-FTHKEEKI.mjs");
  return randomUUID2();
}
__name(randomUUID, "randomUUID");
async function digestSHA256(data) {
  const { subtle: subtle2 } = await import("./crypto.node-FTHKEEKI.mjs");
  const hash = await subtle2.digest("SHA-256", new TextEncoder().encode(data));
  return Array.from(new Uint8Array(hash)).map((byte) => byte.toString(16).padStart(2, "0")).join("");
}
__name(digestSHA256, "digestSHA256");

// node_modules/@trigger.dev/core/dist/esm/v3/apiClient/core.js
var defaultRetryOptions2 = {
  maxAttempts: 3,
  factor: 2,
  minTimeoutInMs: 1e3,
  maxTimeoutInMs: 6e4,
  randomize: false
};
function zodfetch(schema, url, requestInit, options) {
  return new ApiPromise(_doZodFetch(schema, url, requestInit, options));
}
__name(zodfetch, "zodfetch");
function zodfetchCursorPage(schema, url, params, requestInit, options) {
  const query = new URLSearchParams(params.query);
  if (params.limit) {
    query.set("page[size]", String(params.limit));
  }
  if (params.after) {
    query.set("page[after]", params.after);
  }
  if (params.before) {
    query.set("page[before]", params.before);
  }
  const cursorPageSchema = external_exports.object({
    data: external_exports.array(schema),
    pagination: external_exports.object({
      next: external_exports.string().optional(),
      previous: external_exports.string().optional()
    })
  });
  const $url = new URL(url);
  $url.search = query.toString();
  const fetchResult = _doZodFetch(cursorPageSchema, $url.href, requestInit, options);
  return new CursorPagePromise(fetchResult, schema, url, params, requestInit, options);
}
__name(zodfetchCursorPage, "zodfetchCursorPage");
function zodfetchOffsetLimitPage(schema, url, params, requestInit, options) {
  const query = new URLSearchParams(params.query);
  if (params.limit) {
    query.set("perPage", String(params.limit));
  }
  if (params.page) {
    query.set("page", String(params.page));
  }
  const offsetLimitPageSchema = external_exports.object({
    data: external_exports.array(schema),
    pagination: external_exports.object({
      currentPage: external_exports.coerce.number(),
      totalPages: external_exports.coerce.number(),
      count: external_exports.coerce.number()
    })
  });
  const $url = new URL(url);
  $url.search = query.toString();
  const fetchResult = _doZodFetch(offsetLimitPageSchema, $url.href, requestInit, options);
  return new OffsetLimitPagePromise(fetchResult, schema, url, params, requestInit, options);
}
__name(zodfetchOffsetLimitPage, "zodfetchOffsetLimitPage");
async function traceZodFetch(params, callback) {
  if (!params.options?.tracer) {
    return callback();
  }
  const url = new URL(params.url);
  const method = params.requestInit?.method ?? "GET";
  const name2 = params.options.name ?? `${method} ${url.pathname}`;
  return await params.options.tracer.startActiveSpan(name2, async (span) => {
    return await callback(span);
  }, {
    attributes: {
      [SemanticInternalAttributes.STYLE_ICON]: params.options?.icon ?? "api",
      ...params.options.attributes
    }
  });
}
__name(traceZodFetch, "traceZodFetch");
async function _doZodFetch(schema, url, requestInit, options) {
  let $requestInit = await requestInit;
  return traceZodFetch({ url, requestInit: $requestInit, options }, async (span) => {
    const requestIdempotencyKey = await randomUUID();
    $requestInit = injectPropagationHeadersIfInWorker($requestInit);
    $requestInit = injectRequestIdempotencyKey(requestIdempotencyKey, $requestInit);
    const result = await _doZodFetchWithRetries(schema, url, $requestInit, options);
    if (options?.onResponseBody && span) {
      options.onResponseBody(result.data, span);
    }
    if (options?.prepareData) {
      result.data = await options.prepareData(result.data, result.response);
    }
    return result;
  });
}
__name(_doZodFetch, "_doZodFetch");
async function _doZodFetchWithRetries(schema, url, requestInit, options, attempt = 1) {
  try {
    const response = await context.with((0, import_core.suppressTracing)(context.active()), () => fetch(url, requestInitWithCache(requestInit)));
    const responseHeaders = createResponseHeaders(response.headers);
    if (!response.ok) {
      const retryResult = shouldRetry(response, attempt, options?.retry);
      if (retryResult.retry) {
        await waitForRetry(url, attempt + 1, retryResult.delay, options, requestInit, response);
        return await _doZodFetchWithRetries(schema, url, requestInit, options, attempt + 1);
      } else {
        const errText = await response.text().catch((e) => castToError2(e).message);
        const errJSON = safeJsonParse(errText);
        const errMessage = errJSON ? void 0 : errText;
        throw ApiError.generate(response.status, errJSON, errMessage, responseHeaders);
      }
    }
    const jsonBody = await safeJsonFromResponse(response);
    const parsedResult = schema.safeParse(jsonBody);
    if (parsedResult.success) {
      return { data: parsedResult.data, response };
    }
    const validationError = (0, import_zod_validation_error.fromZodError)(parsedResult.error);
    throw new ApiSchemaValidationError({
      status: response.status,
      cause: validationError,
      message: validationError.message,
      rawBody: jsonBody,
      headers: responseHeaders
    });
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    if (error instanceof import_zod_validation_error.ValidationError) {
    }
    if (options?.retry) {
      const retry2 = { ...defaultRetryOptions2, ...options.retry };
      const delay = calculateNextRetryDelay(retry2, attempt);
      if (delay) {
        await waitForRetry(url, attempt + 1, delay, options, requestInit);
        return await _doZodFetchWithRetries(schema, url, requestInit, options, attempt + 1);
      }
    }
    throw new ApiConnectionError({ cause: castToError2(error) });
  }
}
__name(_doZodFetchWithRetries, "_doZodFetchWithRetries");
async function safeJsonFromResponse(response) {
  try {
    return await response.clone().json();
  } catch (error) {
    return;
  }
}
__name(safeJsonFromResponse, "safeJsonFromResponse");
function castToError2(err) {
  if (err instanceof Error)
    return err;
  return new Error(err);
}
__name(castToError2, "castToError");
function shouldRetry(response, attempt, retryOptions) {
  function shouldRetryForOptions() {
    const retry2 = { ...defaultRetryOptions2, ...retryOptions };
    const delay = calculateNextRetryDelay(retry2, attempt);
    if (delay) {
      return { retry: true, delay };
    } else {
      return { retry: false };
    }
  }
  __name(shouldRetryForOptions, "shouldRetryForOptions");
  const shouldRetryHeader = response.headers.get("x-should-retry");
  if (shouldRetryHeader === "true")
    return shouldRetryForOptions();
  if (shouldRetryHeader === "false")
    return { retry: false };
  if (response.status === 408)
    return shouldRetryForOptions();
  if (response.status === 409)
    return shouldRetryForOptions();
  if (response.status === 429) {
    if (attempt >= (typeof retryOptions?.maxAttempts === "number" ? retryOptions?.maxAttempts : 3)) {
      return { retry: false };
    }
    const resetAtUnixEpochMs = response.headers.get("x-ratelimit-reset");
    if (resetAtUnixEpochMs) {
      const resetAtUnixEpoch = parseInt(resetAtUnixEpochMs, 10);
      const delay = resetAtUnixEpoch - Date.now() + Math.floor(Math.random() * 1e3);
      if (delay > 0) {
        return { retry: true, delay };
      }
    }
    return shouldRetryForOptions();
  }
  if (response.status >= 500)
    return shouldRetryForOptions();
  return { retry: false };
}
__name(shouldRetry, "shouldRetry");
function safeJsonParse(text) {
  try {
    return JSON.parse(text);
  } catch (e) {
    return void 0;
  }
}
__name(safeJsonParse, "safeJsonParse");
function createResponseHeaders(headers) {
  return new Proxy(Object.fromEntries(
    // @ts-ignore
    headers.entries()
  ), {
    get(target, name2) {
      const key = name2.toString();
      return target[key.toLowerCase()] || target[key];
    }
  });
}
__name(createResponseHeaders, "createResponseHeaders");
function requestInitWithCache(requestInit) {
  try {
    const withCache = {
      ...requestInit,
      cache: "no-cache"
    };
    const _2 = new Request("http://localhost", withCache);
    return withCache;
  } catch (error) {
    return requestInit ?? {};
  }
}
__name(requestInitWithCache, "requestInitWithCache");
var ApiPromise = class extends Promise {
  static {
    __name(this, "ApiPromise");
  }
  responsePromise;
  constructor(responsePromise) {
    super((resolve) => {
      resolve(null);
    });
    this.responsePromise = responsePromise;
  }
  /**
   * Gets the raw `Response` instance instead of parsing the response
   * data.
   *
   * If you want to parse the response body but still get the `Response`
   * instance, you can use {@link withResponse()}.
   */
  asResponse() {
    return this.responsePromise.then((p2) => p2.response);
  }
  /**
   * Gets the parsed response data and the raw `Response` instance.
   *
   * If you just want to get the raw `Response` instance without parsing it,
   * you can use {@link asResponse()}.
   */
  async withResponse() {
    const [data, response] = await Promise.all([this.parse(), this.asResponse()]);
    return { data, response };
  }
  parse() {
    return this.responsePromise.then((result) => result.data);
  }
  then(onfulfilled, onrejected) {
    return this.parse().then(onfulfilled, onrejected);
  }
  catch(onrejected) {
    return this.parse().catch(onrejected);
  }
  finally(onfinally) {
    return this.parse().finally(onfinally);
  }
};
var CursorPagePromise = class extends ApiPromise {
  static {
    __name(this, "CursorPagePromise");
  }
  schema;
  url;
  params;
  requestInit;
  options;
  constructor(result, schema, url, params, requestInit, options) {
    super(result.then((result2) => ({
      data: new CursorPage(result2.data.data, result2.data.pagination, this.#fetchPage.bind(this)),
      response: result2.response
    })));
    this.schema = schema;
    this.url = url;
    this.params = params;
    this.requestInit = requestInit;
    this.options = options;
  }
  #fetchPage(params) {
    return zodfetchCursorPage(this.schema, this.url, { ...this.params, ...params }, this.requestInit, this.options);
  }
  /**
   * Allow auto-paginating iteration on an unawaited list call, eg:
   *
   *    for await (const item of client.items.list()) {
   *      console.log(item)
   *    }
   */
  async *[Symbol.asyncIterator]() {
    const page = await this;
    for await (const item of page) {
      yield item;
    }
  }
};
var OffsetLimitPagePromise = class extends ApiPromise {
  static {
    __name(this, "OffsetLimitPagePromise");
  }
  schema;
  url;
  params;
  requestInit;
  options;
  constructor(result, schema, url, params, requestInit, options) {
    super(result.then((result2) => ({
      data: new OffsetLimitPage(result2.data.data, result2.data.pagination, this.#fetchPage.bind(this)),
      response: result2.response
    })));
    this.schema = schema;
    this.url = url;
    this.params = params;
    this.requestInit = requestInit;
    this.options = options;
  }
  #fetchPage(params) {
    return zodfetchOffsetLimitPage(this.schema, this.url, { ...this.params, ...params }, this.requestInit, this.options);
  }
  /**
   * Allow auto-paginating iteration on an unawaited list call, eg:
   *
   *    for await (const item of client.items.list()) {
   *      console.log(item)
   *    }
   */
  async *[Symbol.asyncIterator]() {
    const page = await this;
    for await (const item of page) {
      yield item;
    }
  }
};
async function waitForRetry(url, attempt, delay, options, requestInit, response) {
  if (options?.tracer) {
    const method = requestInit?.method ?? "GET";
    return options.tracer.startActiveSpan(response ? `wait after ${response.status}` : `wait after error`, async (span) => {
      await new Promise((resolve) => setTimeout(resolve, delay));
    }, {
      attributes: {
        [SemanticInternalAttributes.STYLE_ICON]: "wait",
        ...accessoryAttributes({
          items: [
            {
              text: `retrying ${options?.name ?? method.toUpperCase()} in ${delay}ms`,
              variant: "normal"
            }
          ],
          style: "codepath"
        })
      }
    });
  }
  await new Promise((resolve) => setTimeout(resolve, delay));
}
__name(waitForRetry, "waitForRetry");
function injectPropagationHeadersIfInWorker(requestInit) {
  const headers = new Headers(requestInit?.headers);
  const headersObject = Object.fromEntries(headers.entries());
  propagation.inject(context.active(), headersObject);
  return {
    ...requestInit,
    headers: new Headers(headersObject)
  };
}
__name(injectPropagationHeadersIfInWorker, "injectPropagationHeadersIfInWorker");
function injectRequestIdempotencyKey(requestIdempotencyKey, requestInit) {
  const headers = new Headers(requestInit?.headers);
  headers.set("x-trigger-request-idempotency-key", requestIdempotencyKey);
  return {
    ...requestInit,
    headers
  };
}
__name(injectRequestIdempotencyKey, "injectRequestIdempotencyKey");

// node_modules/@trigger.dev/core/dist/esm/v3/apiClient/runStream.js
init_esm();

// node_modules/eventsource-parser/dist/stream.js
init_esm();
var EventSourceParserStream = class extends TransformStream {
  static {
    __name(this, "EventSourceParserStream");
  }
  constructor({ onError, onRetry, onComment } = {}) {
    let parser;
    super({
      start(controller) {
        parser = createParser({
          onEvent: /* @__PURE__ */ __name((event) => {
            controller.enqueue(event);
          }, "onEvent"),
          onError(error) {
            onError === "terminate" ? controller.error(error) : typeof onError == "function" && onError(error);
          },
          onRetry,
          onComment
        });
      },
      transform(chunk) {
        parser.feed(chunk);
      }
    });
  }
};

// node_modules/@trigger.dev/core/dist/esm/v3/errors.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/links.js
init_esm();
var links = {
  docs: {
    config: {
      home: "https://trigger.dev/docs/config/config-file",
      additionalPackages: "https://trigger.dev/docs/config/config-file#additionalpackages",
      extensions: "https://trigger.dev/docs/config/config-file#extensions",
      prisma: "https://trigger.dev/docs/config/config-file#prisma"
    },
    machines: {
      home: "https://trigger.dev/docs/v3/machines"
    },
    upgrade: {
      beta: "https://trigger.dev/docs/upgrading-beta"
    },
    troubleshooting: {
      concurrentWaits: "https://trigger.dev/docs/troubleshooting#parallel-waits-are-not-supported"
    },
    concurrency: {
      recursiveDeadlock: "https://trigger.dev/docs/queue-concurrency#waiting-for-a-subtask-on-the-same-queue",
      deadlock: "https://trigger.dev/docs/queue-concurrency#deadlock"
    },
    gitHubActions: {
      personalAccessToken: "https://trigger.dev/docs/github-actions#creating-a-personal-access-token"
    }
  },
  site: {
    home: "https://trigger.dev",
    contact: "https://trigger.dev/contact"
  }
};

// node_modules/@trigger.dev/core/dist/esm/utils.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/errors.js
var MANUAL_OOM_KILL_ERROR_MESSAGE = "MANUAL_OOM_KILL_ERROR";
function isManualOutOfMemoryError(error) {
  if (error.type === "BUILT_IN_ERROR") {
    if (error.message && error.message === MANUAL_OOM_KILL_ERROR_MESSAGE) {
      return true;
    }
  }
  return false;
}
__name(isManualOutOfMemoryError, "isManualOutOfMemoryError");
function isCompleteTaskWithOutput(error) {
  return error instanceof Error && error.name === "CompleteTaskWithOutput";
}
__name(isCompleteTaskWithOutput, "isCompleteTaskWithOutput");
function createErrorTaskError(error) {
  switch (error.type) {
    case "BUILT_IN_ERROR": {
      const e = new Error(error.message);
      e.name = error.name;
      e.stack = error.stackTrace;
      return e;
    }
    case "STRING_ERROR": {
      return error.raw;
    }
    case "CUSTOM_ERROR": {
      return JSON.parse(error.raw);
    }
    case "INTERNAL_ERROR": {
      const e = new Error(error.message ?? `Internal error (${error.code})`);
      e.name = error.code;
      e.stack = error.stackTrace;
      return e;
    }
  }
}
__name(createErrorTaskError, "createErrorTaskError");
function createJsonErrorObject(error) {
  const enhancedError = taskRunErrorEnhancer(error);
  switch (enhancedError.type) {
    case "BUILT_IN_ERROR": {
      return {
        name: enhancedError.name,
        message: enhancedError.message,
        stackTrace: enhancedError.stackTrace
      };
    }
    case "STRING_ERROR": {
      return {
        message: enhancedError.raw
      };
    }
    case "CUSTOM_ERROR": {
      return {
        message: enhancedError.raw
      };
    }
    case "INTERNAL_ERROR": {
      return {
        message: `trigger.dev internal error (${enhancedError.code})`
      };
    }
  }
}
__name(createJsonErrorObject, "createJsonErrorObject");
var prettyInternalErrors = {
  TASK_PROCESS_OOM_KILLED: {
    message: "Your task ran out of memory. Try increasing the machine specs. If this doesn't fix it there might be a memory leak.",
    link: {
      name: "Machines",
      href: links.docs.machines.home
    }
  },
  TASK_PROCESS_MAYBE_OOM_KILLED: {
    message: "We think your task ran out of memory, but we can't be certain. If this keeps happening, try increasing the machine specs.",
    link: {
      name: "Machines",
      href: links.docs.machines.home
    }
  },
  TASK_PROCESS_SIGSEGV: {
    message: "Your task crashed with a segmentation fault (SIGSEGV). Most likely there's a bug in a package or binary you're using. If this keeps happening and you're unsure why, please get in touch.",
    link: {
      name: "Contact us",
      href: links.site.contact,
      magic: "CONTACT_FORM"
    }
  },
  TASK_PROCESS_SIGTERM: {
    message: "Your task exited after receiving SIGTERM but we don't know why. If this keeps happening, please get in touch so we can investigate.",
    link: {
      name: "Contact us",
      href: links.site.contact,
      magic: "CONTACT_FORM"
    }
  },
  OUTDATED_SDK_VERSION: {
    message: "Your task is using an outdated version of the SDK. Please upgrade to the latest version.",
    link: {
      name: "Beta upgrade guide",
      href: links.docs.upgrade.beta
    }
  },
  TASK_DID_CONCURRENT_WAIT: {
    message: "Parallel waits are not supported, e.g. using Promise.all() around our wait functions.",
    link: {
      name: "Read the docs for solutions",
      href: links.docs.troubleshooting.concurrentWaits
    }
  },
  RECURSIVE_WAIT_DEADLOCK: {
    message: "This run will never execute because it was triggered recursively and the task has no remaining concurrency available.",
    link: {
      name: "See docs for help",
      href: links.docs.concurrency.recursiveDeadlock
    }
  }
};
var getPrettyTaskRunError = /* @__PURE__ */ __name((code) => {
  return {
    type: "INTERNAL_ERROR",
    code,
    ...prettyInternalErrors[code]
  };
}, "getPrettyTaskRunError");
var findSignalInMessage = /* @__PURE__ */ __name((message, truncateLength = 100) => {
  if (!message) {
    return;
  }
  const trunc = truncateLength ? message.slice(0, truncateLength) : message;
  if (trunc.includes("SIGTERM")) {
    return "SIGTERM";
  } else if (trunc.includes("SIGSEGV")) {
    return "SIGSEGV";
  } else if (trunc.includes("SIGKILL")) {
    return "SIGKILL";
  } else if (trunc.includes("SIGABRT")) {
    return "SIGABRT";
  } else {
    return;
  }
}, "findSignalInMessage");
function taskRunErrorEnhancer(error) {
  switch (error.type) {
    case "BUILT_IN_ERROR": {
      if (error.name === "UnexpectedExitError") {
        if (error.message.startsWith("Unexpected exit with code -1")) {
          const signal = findSignalInMessage(error.stackTrace);
          switch (signal) {
            case "SIGTERM":
              return {
                ...getPrettyTaskRunError("TASK_PROCESS_SIGTERM")
              };
            case "SIGSEGV":
              return {
                ...getPrettyTaskRunError("TASK_PROCESS_SIGSEGV")
              };
            case "SIGKILL":
              return {
                ...getPrettyTaskRunError("TASK_PROCESS_MAYBE_OOM_KILLED")
              };
            case "SIGABRT":
              return {
                ...getPrettyTaskRunError("TASK_PROCESS_MAYBE_OOM_KILLED")
              };
            default:
              return {
                ...getPrettyTaskRunError("TASK_PROCESS_EXITED_WITH_NON_ZERO_CODE"),
                message: error.message,
                stackTrace: error.stackTrace
              };
          }
        }
      }
      if (error.name === "Error") {
        if (error.message === "ffmpeg was killed with signal SIGKILL") {
          return {
            ...getPrettyTaskRunError("TASK_PROCESS_OOM_KILLED")
          };
        }
      }
      if (isManualOutOfMemoryError(error)) {
        return {
          ...getPrettyTaskRunError("TASK_PROCESS_OOM_KILLED")
        };
      }
      if (error.name === "TriggerApiError") {
        if (error.message.startsWith("Deadlock detected:")) {
          return {
            type: "BUILT_IN_ERROR",
            name: "Concurrency Deadlock Error",
            message: error.message,
            stackTrace: "",
            link: {
              name: "Read the docs",
              href: links.docs.concurrency.deadlock
            }
          };
        }
      }
      break;
    }
    case "STRING_ERROR": {
      break;
    }
    case "CUSTOM_ERROR": {
      break;
    }
    case "INTERNAL_ERROR": {
      if (error.code === TaskRunErrorCodes.TASK_PROCESS_EXITED_WITH_NON_ZERO_CODE) {
        const signal = findSignalInMessage(error.message);
        switch (signal) {
          case "SIGTERM":
            return {
              ...getPrettyTaskRunError("TASK_PROCESS_SIGTERM")
            };
          case "SIGSEGV":
            return {
              ...getPrettyTaskRunError("TASK_PROCESS_SIGSEGV")
            };
          case "SIGKILL":
            return {
              ...getPrettyTaskRunError("TASK_PROCESS_MAYBE_OOM_KILLED")
            };
          case "SIGABRT":
            return {
              ...getPrettyTaskRunError("TASK_PROCESS_MAYBE_OOM_KILLED")
            };
          default: {
            return {
              ...getPrettyTaskRunError("TASK_PROCESS_EXITED_WITH_NON_ZERO_CODE"),
              message: error.message,
              stackTrace: error.stackTrace
            };
          }
        }
      }
      return {
        ...error,
        ...getPrettyTaskRunError(error.code)
      };
    }
  }
  return error;
}
__name(taskRunErrorEnhancer, "taskRunErrorEnhancer");

// node_modules/@trigger.dev/core/dist/esm/v3/utils/getEnv.js
init_esm();

// node_modules/std-env/dist/index.mjs
init_esm();
var r = /* @__PURE__ */ Object.create(null);
var i = /* @__PURE__ */ __name((e) => globalThis.process?.env || import.meta.env || globalThis.Deno?.env.toObject() || globalThis.__env__ || (e ? r : globalThis), "i");
var o = new Proxy(r, { get(e, s) {
  return i()[s] ?? r[s];
}, has(e, s) {
  const E = i();
  return s in E || s in r;
}, set(e, s, E) {
  const B = i(true);
  return B[s] = E, true;
}, deleteProperty(e, s) {
  if (!s) return false;
  const E = i(true);
  return delete E[s], true;
}, ownKeys() {
  const e = i(true);
  return Object.keys(e);
} });
var t = typeof process < "u" && process.env && process.env.NODE_ENV || "";
var f = [["APPVEYOR"], ["AWS_AMPLIFY", "AWS_APP_ID", { ci: true }], ["AZURE_PIPELINES", "SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"], ["AZURE_STATIC", "INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"], ["APPCIRCLE", "AC_APPCIRCLE"], ["BAMBOO", "bamboo_planKey"], ["BITBUCKET", "BITBUCKET_COMMIT"], ["BITRISE", "BITRISE_IO"], ["BUDDY", "BUDDY_WORKSPACE_ID"], ["BUILDKITE"], ["CIRCLE", "CIRCLECI"], ["CIRRUS", "CIRRUS_CI"], ["CLOUDFLARE_PAGES", "CF_PAGES", { ci: true }], ["CLOUDFLARE_WORKERS", "WORKERS_CI", { ci: true }], ["CODEBUILD", "CODEBUILD_BUILD_ARN"], ["CODEFRESH", "CF_BUILD_ID"], ["DRONE"], ["DRONE", "DRONE_BUILD_EVENT"], ["DSARI"], ["GITHUB_ACTIONS"], ["GITLAB", "GITLAB_CI"], ["GITLAB", "CI_MERGE_REQUEST_ID"], ["GOCD", "GO_PIPELINE_LABEL"], ["LAYERCI"], ["HUDSON", "HUDSON_URL"], ["JENKINS", "JENKINS_URL"], ["MAGNUM"], ["NETLIFY"], ["NETLIFY", "NETLIFY_LOCAL", { ci: false }], ["NEVERCODE"], ["RENDER"], ["SAIL", "SAILCI"], ["SEMAPHORE"], ["SCREWDRIVER"], ["SHIPPABLE"], ["SOLANO", "TDDIUM"], ["STRIDER"], ["TEAMCITY", "TEAMCITY_VERSION"], ["TRAVIS"], ["VERCEL", "NOW_BUILDER"], ["VERCEL", "VERCEL", { ci: false }], ["VERCEL", "VERCEL_ENV", { ci: false }], ["APPCENTER", "APPCENTER_BUILD_ID"], ["CODESANDBOX", "CODESANDBOX_SSE", { ci: false }], ["CODESANDBOX", "CODESANDBOX_HOST", { ci: false }], ["STACKBLITZ"], ["STORMKIT"], ["CLEAVR"], ["ZEABUR"], ["CODESPHERE", "CODESPHERE_APP_ID", { ci: true }], ["RAILWAY", "RAILWAY_PROJECT_ID"], ["RAILWAY", "RAILWAY_SERVICE_ID"], ["DENO-DEPLOY", "DENO_DEPLOYMENT_ID"], ["FIREBASE_APP_HOSTING", "FIREBASE_APP_HOSTING", { ci: true }]];
function b() {
  if (globalThis.process?.env) for (const e of f) {
    const s = e[1] || e[0];
    if (globalThis.process?.env[s]) return { name: e[0].toLowerCase(), ...e[2] };
  }
  return globalThis.process?.env?.SHELL === "/bin/jsh" && globalThis.process?.versions?.webcontainer ? { name: "stackblitz", ci: false } : { name: "", ci: false };
}
__name(b, "b");
var l = b();
var p = l.name;
function n(e) {
  return e ? e !== "false" : false;
}
__name(n, "n");
var I = globalThis.process?.platform || "";
var T = n(o.CI) || l.ci !== false;
var R = n(globalThis.process?.stdout && globalThis.process?.stdout.isTTY);
var d = n(o.DEBUG);
var a = t === "test" || n(o.TEST);
var v = n(o.MINIMAL) || T || a || !R;
var A = /^win/i.test(I);
var M = /^linux/i.test(I);
var m = /^darwin/i.test(I);
var Y = !n(o.NO_COLOR) && (n(o.FORCE_COLOR) || (R || A) && o.TERM !== "dumb" || T);
var C = (globalThis.process?.versions?.node || "").replace(/^v/, "") || null;
var V = Number(C?.split(".")[0]) || null;
var W = globalThis.process || /* @__PURE__ */ Object.create(null);
var _ = { versions: {} };
var y = new Proxy(W, { get(e, s) {
  if (s === "env") return o;
  if (s in e) return e[s];
  if (s in _) return _[s];
} });
var O = globalThis.process?.release?.name === "node";
var c = !!globalThis.Bun || !!globalThis.process?.versions?.bun;
var D = !!globalThis.Deno;
var L = !!globalThis.fastly;
var S = !!globalThis.Netlify;
var u = !!globalThis.EdgeRuntime;
var N = globalThis.navigator?.userAgent === "Cloudflare-Workers";
var F = [[S, "netlify"], [u, "edge-light"], [N, "workerd"], [L, "fastly"], [D, "deno"], [c, "bun"], [O, "node"]];
function G() {
  const e = F.find((s) => s[0]);
  if (e) return { name: e[1] };
}
__name(G, "G");
var P = G();
var K = P?.name || "";

// node_modules/@trigger.dev/core/dist/esm/v3/utils/getEnv.js
function getEnvVar(name2, defaultValue) {
  return o[name2] ?? defaultValue;
}
__name(getEnvVar, "getEnvVar");

// node_modules/@trigger.dev/core/dist/esm/v3/utils/ioSerialization.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/apiClientManager-api.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/apiClientManager/index.js
init_esm();
var API_NAME9 = "api-client";
var ApiClientMissingError = class extends Error {
  static {
    __name(this, "ApiClientMissingError");
  }
  constructor(message) {
    super(message);
    this.name = "ApiClientMissingError";
  }
};
var APIClientManagerAPI = class _APIClientManagerAPI {
  static {
    __name(this, "APIClientManagerAPI");
  }
  static _instance;
  constructor() {
  }
  static getInstance() {
    if (!this._instance) {
      this._instance = new _APIClientManagerAPI();
    }
    return this._instance;
  }
  disable() {
    unregisterGlobal(API_NAME9);
  }
  get baseURL() {
    const config = this.#getConfig();
    return config?.baseURL ?? getEnvVar("TRIGGER_API_URL") ?? "https://api.trigger.dev";
  }
  get accessToken() {
    const config = this.#getConfig();
    return config?.secretKey ?? config?.accessToken ?? getEnvVar("TRIGGER_SECRET_KEY") ?? getEnvVar("TRIGGER_ACCESS_TOKEN");
  }
  get branchName() {
    const config = this.#getConfig();
    const value = config?.previewBranch ?? getEnvVar("TRIGGER_PREVIEW_BRANCH") ?? getEnvVar("VERCEL_GIT_COMMIT_REF") ?? void 0;
    return value ? value : void 0;
  }
  get client() {
    if (!this.baseURL || !this.accessToken) {
      return void 0;
    }
    return new ApiClient(this.baseURL, this.accessToken, this.branchName);
  }
  clientOrThrow() {
    if (!this.baseURL || !this.accessToken) {
      throw new ApiClientMissingError(this.apiClientMissingError());
    }
    return new ApiClient(this.baseURL, this.accessToken, this.branchName);
  }
  runWithConfig(config, fn) {
    const originalConfig = this.#getConfig();
    const $config = { ...originalConfig, ...config };
    registerGlobal(API_NAME9, $config, true);
    return fn().finally(() => {
      registerGlobal(API_NAME9, originalConfig, true);
    });
  }
  setGlobalAPIClientConfiguration(config) {
    return registerGlobal(API_NAME9, config);
  }
  #getConfig() {
    return getGlobal(API_NAME9);
  }
  apiClientMissingError() {
    const hasBaseUrl = !!this.baseURL;
    const hasAccessToken = !!this.accessToken;
    if (!hasBaseUrl && !hasAccessToken) {
      return `You need to set the TRIGGER_API_URL and TRIGGER_SECRET_KEY environment variables. See https://trigger.dev/docs/management/overview#authentication`;
    } else if (!hasBaseUrl) {
      return `You need to set the TRIGGER_API_URL environment variable. See https://trigger.dev/docs/management/overview#authentication`;
    } else if (!hasAccessToken) {
      return `You need to set the TRIGGER_SECRET_KEY environment variable. See https://trigger.dev/docs/management/overview#authentication`;
    }
    return `Unknown error`;
  }
};

// node_modules/@trigger.dev/core/dist/esm/v3/apiClientManager-api.js
var apiClientManager = APIClientManagerAPI.getInstance();

// node_modules/@trigger.dev/core/dist/esm/v3/limits.js
init_esm();
function getOtelEnvVarLimit(key, defaultValue) {
  const value = getEnvVar(key);
  if (!value) {
    return defaultValue;
  }
  return parseInt(value, 10);
}
__name(getOtelEnvVarLimit, "getOtelEnvVarLimit");
var OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT = getOtelEnvVarLimit("TRIGGER_OTEL_SPAN_ATTRIBUTE_COUNT_LIMIT", 1024);
var OTEL_LOG_ATTRIBUTE_COUNT_LIMIT = getOtelEnvVarLimit("TRIGGER_OTEL_LOG_ATTRIBUTE_COUNT_LIMIT", 1024);
var OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT = getOtelEnvVarLimit("TRIGGER_OTEL_SPAN_ATTRIBUTE_VALUE_LENGTH_LIMIT", 131072);
var OTEL_LOG_ATTRIBUTE_VALUE_LENGTH_LIMIT = getOtelEnvVarLimit("TRIGGER_OTEL_LOG_ATTRIBUTE_VALUE_LENGTH_LIMIT", 131072);
var OTEL_SPAN_EVENT_COUNT_LIMIT = getOtelEnvVarLimit("TRIGGER_OTEL_SPAN_EVENT_COUNT_LIMIT", 10);
var OTEL_LINK_COUNT_LIMIT = getOtelEnvVarLimit("TRIGGER_OTEL_LINK_COUNT_LIMIT", 2);
var OTEL_ATTRIBUTE_PER_LINK_COUNT_LIMIT = getOtelEnvVarLimit("TRIGGER_OTEL_ATTRIBUTE_PER_LINK_COUNT_LIMIT", 10);
var OTEL_ATTRIBUTE_PER_EVENT_COUNT_LIMIT = getOtelEnvVarLimit("TRIGGER_OTEL_ATTRIBUTE_PER_EVENT_COUNT_LIMIT", 10);
var OFFLOAD_IO_PACKET_LENGTH_LIMIT = 128 * 1024;

// node_modules/@trigger.dev/core/dist/esm/v3/zodfetch.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/utils/ioSerialization.js
var import_path = __toESM(require_lib(), 1);
async function parsePacket(value, options) {
  if (!value.data) {
    return void 0;
  }
  switch (value.dataType) {
    case "application/json":
      return JSON.parse(value.data, makeSafeReviver(options));
    case "application/super+json":
      const { parse } = await loadSuperJSON();
      return parse(value.data);
    case "text/plain":
      return value.data;
    case "application/store":
      throw new Error(`Cannot parse an application/store packet (${value.data}). Needs to be imported first.`);
    default:
      return value.data;
  }
}
__name(parsePacket, "parsePacket");
async function conditionallyImportAndParsePacket(value, client) {
  const importedPacket = await conditionallyImportPacket(value, void 0, client);
  return await parsePacket(importedPacket);
}
__name(conditionallyImportAndParsePacket, "conditionallyImportAndParsePacket");
async function stringifyIO(value) {
  if (value === void 0) {
    return { dataType: "application/json" };
  }
  if (typeof value === "string") {
    return { data: value, dataType: "text/plain" };
  }
  try {
    const { stringify } = await loadSuperJSON();
    const data = stringify(value);
    return { data, dataType: "application/super+json" };
  } catch {
    return { data: value, dataType: "application/json" };
  }
}
__name(stringifyIO, "stringifyIO");
var ioRetryOptions = {
  minTimeoutInMs: 500,
  maxTimeoutInMs: 5e3,
  maxAttempts: 5,
  factor: 2,
  randomize: true
};
async function conditionallyImportPacket(packet, tracer2, client) {
  if (packet.dataType !== "application/store") {
    return packet;
  }
  if (!tracer2) {
    return await importPacket(packet, void 0, client);
  } else {
    const result = await tracer2.startActiveSpan("store.downloadPayload", async (span) => {
      return await importPacket(packet, span, client);
    }, {
      attributes: {
        [SemanticInternalAttributes.STYLE_ICON]: "cloud-download"
      }
    });
    return result ?? packet;
  }
}
__name(conditionallyImportPacket, "conditionallyImportPacket");
async function importPacket(packet, span, client) {
  if (!packet.data) {
    return packet;
  }
  const $client = client ?? apiClientManager.client;
  if (!$client) {
    return packet;
  }
  const presignedResponse = await $client.getPayloadUrl(packet.data);
  const response = await zodfetch(external_exports.any(), presignedResponse.presignedUrl, void 0, {
    retry: ioRetryOptions
  }).asResponse();
  if (!response.ok) {
    throw new Error(`Failed to import packet ${presignedResponse.presignedUrl}: ${response.statusText}`);
  }
  const data = await response.text();
  span?.setAttribute("size", Buffer.byteLength(data, "utf8"));
  return {
    data,
    dataType: response.headers.get("content-type") ?? "application/json"
  };
}
__name(importPacket, "importPacket");
function makeSafeReviver(options) {
  if (!options) {
    return void 0;
  }
  return /* @__PURE__ */ __name(function reviver(key, value) {
    if (options?.filteredKeys?.includes(key)) {
      return void 0;
    }
    return value;
  }, "reviver");
}
__name(makeSafeReviver, "makeSafeReviver");
async function loadSuperJSON() {
  const superjson = await import("./dist-DHNAX77Y.mjs");
  superjson.registerCustom({
    isApplicable: /* @__PURE__ */ __name((v2) => typeof Buffer === "function" && Buffer.isBuffer(v2), "isApplicable"),
    serialize: /* @__PURE__ */ __name((v2) => [...v2], "serialize"),
    deserialize: /* @__PURE__ */ __name((v2) => Buffer.from(v2), "deserialize")
  }, "buffer");
  return superjson;
}
__name(loadSuperJSON, "loadSuperJSON");

// node_modules/@trigger.dev/core/dist/esm/v3/apiClient/stream.js
init_esm();

// node_modules/@electric-sql/client/dist/index.mjs
init_esm();
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __typeError = /* @__PURE__ */ __name((msg) => {
  throw TypeError(msg);
}, "__typeError");
var __defNormalProp = /* @__PURE__ */ __name((obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value, "__defNormalProp");
var __spreadValues = /* @__PURE__ */ __name((a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
}, "__spreadValues");
var __spreadProps = /* @__PURE__ */ __name((a2, b2) => __defProps(a2, __getOwnPropDescs(b2)), "__spreadProps");
var __objRest = /* @__PURE__ */ __name((source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
}, "__objRest");
var __accessCheck = /* @__PURE__ */ __name((obj, member, msg) => member.has(obj) || __typeError("Cannot " + msg), "__accessCheck");
var __privateGet = /* @__PURE__ */ __name((obj, member, getter) => (__accessCheck(obj, member, "read from private field"), getter ? getter.call(obj) : member.get(obj)), "__privateGet");
var __privateAdd = /* @__PURE__ */ __name((obj, member, value) => member.has(obj) ? __typeError("Cannot add the same private member more than once") : member instanceof WeakSet ? member.add(obj) : member.set(obj, value), "__privateAdd");
var __privateSet = /* @__PURE__ */ __name((obj, member, value, setter) => (__accessCheck(obj, member, "write to private field"), setter ? setter.call(obj, value) : member.set(obj, value), value), "__privateSet");
var __privateMethod = /* @__PURE__ */ __name((obj, member, method) => (__accessCheck(obj, member, "access private method"), method), "__privateMethod");
var __async = /* @__PURE__ */ __name((__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = /* @__PURE__ */ __name((value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }, "fulfilled");
    var rejected = /* @__PURE__ */ __name((value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    }, "rejected");
    var step = /* @__PURE__ */ __name((x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected), "step");
    step((generator = generator.apply(__this, __arguments)).next());
  });
}, "__async");
var FetchError = class _FetchError extends Error {
  static {
    __name(this, "_FetchError");
  }
  constructor(status, text, json, headers, url, message) {
    super(
      message || `HTTP Error ${status} at ${url}: ${text != null ? text : JSON.stringify(json)}`
    );
    this.url = url;
    this.name = `FetchError`;
    this.status = status;
    this.text = text;
    this.json = json;
    this.headers = headers;
  }
  static fromResponse(response, url) {
    return __async(this, null, function* () {
      const status = response.status;
      const headers = Object.fromEntries([...response.headers.entries()]);
      let text = void 0;
      let json = void 0;
      const contentType = response.headers.get(`content-type`);
      if (contentType && contentType.includes(`application/json`)) {
        json = yield response.json();
      } else {
        text = yield response.text();
      }
      return new _FetchError(status, text, json, headers, url);
    });
  }
};
var FetchBackoffAbortError = class extends Error {
  static {
    __name(this, "FetchBackoffAbortError");
  }
  constructor() {
    super(`Fetch with backoff aborted`);
    this.name = `FetchBackoffAbortError`;
  }
};
var MissingShapeUrlError = class extends Error {
  static {
    __name(this, "MissingShapeUrlError");
  }
  constructor() {
    super(`Invalid shape options: missing required url parameter`);
    this.name = `MissingShapeUrlError`;
  }
};
var InvalidSignalError = class extends Error {
  static {
    __name(this, "InvalidSignalError");
  }
  constructor() {
    super(`Invalid signal option. It must be an instance of AbortSignal.`);
    this.name = `InvalidSignalError`;
  }
};
var MissingShapeHandleError = class extends Error {
  static {
    __name(this, "MissingShapeHandleError");
  }
  constructor() {
    super(
      `shapeHandle is required if this isn't an initial fetch (i.e. offset > -1)`
    );
    this.name = `MissingShapeHandleError`;
  }
};
var ReservedParamError = class extends Error {
  static {
    __name(this, "ReservedParamError");
  }
  constructor(reservedParams) {
    super(
      `Cannot use reserved Electric parameter names in custom params: ${reservedParams.join(`, `)}`
    );
    this.name = `ReservedParamError`;
  }
};
var ParserNullValueError = class extends Error {
  static {
    __name(this, "ParserNullValueError");
  }
  constructor(columnName) {
    super(`Column "${columnName != null ? columnName : `unknown`}" does not allow NULL values`);
    this.name = `ParserNullValueError`;
  }
};
var MissingHeadersError = class extends Error {
  static {
    __name(this, "MissingHeadersError");
  }
  constructor(url, missingHeaders) {
    let msg = `The response for the shape request to ${url} didn't include the following required headers:
`;
    missingHeaders.forEach((h) => {
      msg += `- ${h}
`;
    });
    msg += `
This is often due to a proxy not setting CORS correctly so that all Electric headers can be read by the client.`;
    msg += `
For more information visit the troubleshooting guide: /docs/guides/troubleshooting/missing-headers`;
    super(msg);
  }
};
var parseNumber = /* @__PURE__ */ __name((value) => Number(value), "parseNumber");
var parseBool = /* @__PURE__ */ __name((value) => value === `true` || value === `t`, "parseBool");
var parseBigInt = /* @__PURE__ */ __name((value) => BigInt(value), "parseBigInt");
var parseJson = /* @__PURE__ */ __name((value) => JSON.parse(value), "parseJson");
var identityParser = /* @__PURE__ */ __name((v2) => v2, "identityParser");
var defaultParser = {
  int2: parseNumber,
  int4: parseNumber,
  int8: parseBigInt,
  bool: parseBool,
  float4: parseNumber,
  float8: parseNumber,
  json: parseJson,
  jsonb: parseJson
};
function pgArrayParser(value, parser) {
  let i2 = 0;
  let char = null;
  let str = ``;
  let quoted = false;
  let last = 0;
  let p2 = void 0;
  function loop(x) {
    const xs = [];
    for (; i2 < x.length; i2++) {
      char = x[i2];
      if (quoted) {
        if (char === `\\`) {
          str += x[++i2];
        } else if (char === `"`) {
          xs.push(parser ? parser(str) : str);
          str = ``;
          quoted = x[i2 + 1] === `"`;
          last = i2 + 2;
        } else {
          str += char;
        }
      } else if (char === `"`) {
        quoted = true;
      } else if (char === `{`) {
        last = ++i2;
        xs.push(loop(x));
      } else if (char === `}`) {
        quoted = false;
        last < i2 && xs.push(parser ? parser(x.slice(last, i2)) : x.slice(last, i2));
        last = i2 + 1;
        break;
      } else if (char === `,` && p2 !== `}` && p2 !== `"`) {
        xs.push(parser ? parser(x.slice(last, i2)) : x.slice(last, i2));
        last = i2 + 1;
      }
      p2 = char;
    }
    last < i2 && xs.push(parser ? parser(x.slice(last, i2 + 1)) : x.slice(last, i2 + 1));
    return xs;
  }
  __name(loop, "loop");
  return loop(value)[0];
}
__name(pgArrayParser, "pgArrayParser");
var MessageParser = class {
  static {
    __name(this, "MessageParser");
  }
  constructor(parser) {
    this.parser = __spreadValues(__spreadValues({}, defaultParser), parser);
  }
  parse(messages, schema) {
    return JSON.parse(messages, (key, value) => {
      if (key === `value` && typeof value === `object` && value !== null) {
        const row = value;
        Object.keys(row).forEach((key2) => {
          row[key2] = this.parseRow(key2, row[key2], schema);
        });
      }
      return value;
    });
  }
  // Parses the message values using the provided parser based on the schema information
  parseRow(key, value, schema) {
    var _b;
    const columnInfo = schema[key];
    if (!columnInfo) {
      return value;
    }
    const _a = columnInfo, { type: typ, dims: dimensions } = _a, additionalInfo = __objRest(_a, ["type", "dims"]);
    const typeParser = (_b = this.parser[typ]) != null ? _b : identityParser;
    const parser = makeNullableParser(typeParser, columnInfo, key);
    if (dimensions && dimensions > 0) {
      const nullablePgArrayParser = makeNullableParser(
        (value2, _2) => pgArrayParser(value2, parser),
        columnInfo,
        key
      );
      return nullablePgArrayParser(value);
    }
    return parser(value, additionalInfo);
  }
};
function makeNullableParser(parser, columnInfo, columnName) {
  var _a;
  const isNullable = !((_a = columnInfo.not_null) != null ? _a : false);
  return (value) => {
    if (isPgNull(value)) {
      if (!isNullable) {
        throw new ParserNullValueError(columnName != null ? columnName : `unknown`);
      }
      return null;
    }
    return parser(value, columnInfo);
  };
}
__name(makeNullableParser, "makeNullableParser");
function isPgNull(value) {
  return value === null || value === `NULL`;
}
__name(isPgNull, "isPgNull");
function isChangeMessage(message) {
  return `key` in message;
}
__name(isChangeMessage, "isChangeMessage");
function isControlMessage(message) {
  return !isChangeMessage(message);
}
__name(isControlMessage, "isControlMessage");
function isUpToDateMessage(message) {
  return isControlMessage(message) && message.headers.control === `up-to-date`;
}
__name(isUpToDateMessage, "isUpToDateMessage");
var LIVE_CACHE_BUSTER_HEADER = `electric-cursor`;
var SHAPE_HANDLE_HEADER = `electric-handle`;
var CHUNK_LAST_OFFSET_HEADER = `electric-offset`;
var SHAPE_SCHEMA_HEADER = `electric-schema`;
var CHUNK_UP_TO_DATE_HEADER = `electric-up-to-date`;
var COLUMNS_QUERY_PARAM = `columns`;
var LIVE_CACHE_BUSTER_QUERY_PARAM = `cursor`;
var SHAPE_HANDLE_QUERY_PARAM = `handle`;
var LIVE_QUERY_PARAM = `live`;
var OFFSET_QUERY_PARAM = `offset`;
var TABLE_QUERY_PARAM = `table`;
var WHERE_QUERY_PARAM = `where`;
var REPLICA_PARAM = `replica`;
var HTTP_RETRY_STATUS_CODES = [429];
var BackoffDefaults = {
  initialDelay: 100,
  maxDelay: 1e4,
  multiplier: 1.3
};
function createFetchWithBackoff(fetchClient, backoffOptions = BackoffDefaults) {
  const {
    initialDelay,
    maxDelay,
    multiplier,
    debug = false,
    onFailedAttempt
  } = backoffOptions;
  return (...args) => __async(this, null, function* () {
    var _a;
    const url = args[0];
    const options = args[1];
    let delay = initialDelay;
    let attempt = 0;
    while (true) {
      try {
        const result = yield fetchClient(...args);
        if (result.ok) return result;
        else throw yield FetchError.fromResponse(result, url.toString());
      } catch (e) {
        onFailedAttempt == null ? void 0 : onFailedAttempt();
        if ((_a = options == null ? void 0 : options.signal) == null ? void 0 : _a.aborted) {
          throw new FetchBackoffAbortError();
        } else if (e instanceof FetchError && !HTTP_RETRY_STATUS_CODES.includes(e.status) && e.status >= 400 && e.status < 500) {
          throw e;
        } else {
          yield new Promise((resolve) => setTimeout(resolve, delay));
          delay = Math.min(delay * multiplier, maxDelay);
          if (debug) {
            attempt++;
            console.log(`Retry attempt #${attempt} after ${delay}ms`);
          }
        }
      }
    }
  });
}
__name(createFetchWithBackoff, "createFetchWithBackoff");
var ChunkPrefetchDefaults = {
  maxChunksToPrefetch: 2
};
function createFetchWithChunkBuffer(fetchClient, prefetchOptions = ChunkPrefetchDefaults) {
  const { maxChunksToPrefetch } = prefetchOptions;
  let prefetchQueue;
  const prefetchClient = /* @__PURE__ */ __name((...args) => __async(this, null, function* () {
    const url = args[0].toString();
    const prefetchedRequest = prefetchQueue == null ? void 0 : prefetchQueue.consume(...args);
    if (prefetchedRequest) {
      return prefetchedRequest;
    }
    prefetchQueue == null ? void 0 : prefetchQueue.abort();
    const response = yield fetchClient(...args);
    const nextUrl = getNextChunkUrl(url, response);
    if (nextUrl) {
      prefetchQueue = new PrefetchQueue({
        fetchClient,
        maxPrefetchedRequests: maxChunksToPrefetch,
        url: nextUrl,
        requestInit: args[1]
      });
    }
    return response;
  }), "prefetchClient");
  return prefetchClient;
}
__name(createFetchWithChunkBuffer, "createFetchWithChunkBuffer");
var requiredElectricResponseHeaders = [
  `electric-offset`,
  `electric-handle`
];
var requiredLiveResponseHeaders = [`electric-cursor`];
var requiredNonLiveResponseHeaders = [`electric-schema`];
function createFetchWithResponseHeadersCheck(fetchClient) {
  return (...args) => __async(this, null, function* () {
    const response = yield fetchClient(...args);
    if (response.ok) {
      const headers = response.headers;
      const missingHeaders = [];
      const addMissingHeaders = /* @__PURE__ */ __name((requiredHeaders) => missingHeaders.push(...requiredHeaders.filter((h) => !headers.has(h))), "addMissingHeaders");
      addMissingHeaders(requiredElectricResponseHeaders);
      const input = args[0];
      const urlString = input.toString();
      const url = new URL(urlString);
      if (url.searchParams.get(LIVE_QUERY_PARAM) === `true`) {
        addMissingHeaders(requiredLiveResponseHeaders);
      }
      if (!url.searchParams.has(LIVE_QUERY_PARAM) || url.searchParams.get(LIVE_QUERY_PARAM) === `false`) {
        addMissingHeaders(requiredNonLiveResponseHeaders);
      }
      if (missingHeaders.length > 0) {
        throw new MissingHeadersError(urlString, missingHeaders);
      }
    }
    return response;
  });
}
__name(createFetchWithResponseHeadersCheck, "createFetchWithResponseHeadersCheck");
var _fetchClient;
var _maxPrefetchedRequests;
var _prefetchQueue;
var _queueHeadUrl;
var _queueTailUrl;
var _PrefetchQueue_instances;
var prefetch_fn;
var PrefetchQueue = class {
  static {
    __name(this, "PrefetchQueue");
  }
  constructor(options) {
    __privateAdd(this, _PrefetchQueue_instances);
    __privateAdd(this, _fetchClient);
    __privateAdd(this, _maxPrefetchedRequests);
    __privateAdd(this, _prefetchQueue, /* @__PURE__ */ new Map());
    __privateAdd(this, _queueHeadUrl);
    __privateAdd(this, _queueTailUrl);
    var _a;
    __privateSet(this, _fetchClient, (_a = options.fetchClient) != null ? _a : (...args) => fetch(...args));
    __privateSet(this, _maxPrefetchedRequests, options.maxPrefetchedRequests);
    __privateSet(this, _queueHeadUrl, options.url.toString());
    __privateSet(this, _queueTailUrl, __privateGet(this, _queueHeadUrl));
    __privateMethod(this, _PrefetchQueue_instances, prefetch_fn).call(this, options.url, options.requestInit);
  }
  abort() {
    __privateGet(this, _prefetchQueue).forEach(([_2, aborter]) => aborter.abort());
  }
  consume(...args) {
    var _a;
    const url = args[0].toString();
    const request = (_a = __privateGet(this, _prefetchQueue).get(url)) == null ? void 0 : _a[0];
    if (!request || url !== __privateGet(this, _queueHeadUrl)) return;
    __privateGet(this, _prefetchQueue).delete(url);
    request.then((response) => {
      const nextUrl = getNextChunkUrl(url, response);
      __privateSet(this, _queueHeadUrl, nextUrl);
      if (__privateGet(this, _queueTailUrl) && !__privateGet(this, _prefetchQueue).has(__privateGet(this, _queueTailUrl))) {
        __privateMethod(this, _PrefetchQueue_instances, prefetch_fn).call(this, __privateGet(this, _queueTailUrl), args[1]);
      }
    }).catch(() => {
    });
    return request;
  }
};
_fetchClient = /* @__PURE__ */ new WeakMap();
_maxPrefetchedRequests = /* @__PURE__ */ new WeakMap();
_prefetchQueue = /* @__PURE__ */ new WeakMap();
_queueHeadUrl = /* @__PURE__ */ new WeakMap();
_queueTailUrl = /* @__PURE__ */ new WeakMap();
_PrefetchQueue_instances = /* @__PURE__ */ new WeakSet();
prefetch_fn = /* @__PURE__ */ __name(function(...args) {
  var _a, _b;
  const url = args[0].toString();
  if (__privateGet(this, _prefetchQueue).size >= __privateGet(this, _maxPrefetchedRequests)) return;
  const aborter = new AbortController();
  try {
    const request = __privateGet(this, _fetchClient).call(this, url, __spreadProps(__spreadValues({}, (_a = args[1]) != null ? _a : {}), {
      signal: chainAborter(aborter, (_b = args[1]) == null ? void 0 : _b.signal)
    }));
    __privateGet(this, _prefetchQueue).set(url, [request, aborter]);
    request.then((response) => {
      if (!response.ok || aborter.signal.aborted) return;
      const nextUrl = getNextChunkUrl(url, response);
      if (!nextUrl || nextUrl === url) {
        __privateSet(this, _queueTailUrl, void 0);
        return;
      }
      __privateSet(this, _queueTailUrl, nextUrl);
      return __privateMethod(this, _PrefetchQueue_instances, prefetch_fn).call(this, nextUrl, args[1]);
    }).catch(() => {
    });
  } catch (_2) {
  }
}, "prefetch_fn");
function getNextChunkUrl(url, res) {
  const shapeHandle = res.headers.get(SHAPE_HANDLE_HEADER);
  const lastOffset = res.headers.get(CHUNK_LAST_OFFSET_HEADER);
  const isUpToDate = res.headers.has(CHUNK_UP_TO_DATE_HEADER);
  if (!shapeHandle || !lastOffset || isUpToDate) return;
  const nextUrl = new URL(url);
  if (nextUrl.searchParams.has(LIVE_QUERY_PARAM)) return;
  nextUrl.searchParams.set(SHAPE_HANDLE_QUERY_PARAM, shapeHandle);
  nextUrl.searchParams.set(OFFSET_QUERY_PARAM, lastOffset);
  nextUrl.searchParams.sort();
  return nextUrl.toString();
}
__name(getNextChunkUrl, "getNextChunkUrl");
function chainAborter(aborter, sourceSignal) {
  if (!sourceSignal) return aborter.signal;
  if (sourceSignal.aborted) aborter.abort();
  else
    sourceSignal.addEventListener(`abort`, () => aborter.abort(), {
      once: true
    });
  return aborter.signal;
}
__name(chainAborter, "chainAborter");
var RESERVED_PARAMS = /* @__PURE__ */ new Set([
  LIVE_CACHE_BUSTER_QUERY_PARAM,
  SHAPE_HANDLE_QUERY_PARAM,
  LIVE_QUERY_PARAM,
  OFFSET_QUERY_PARAM
]);
function toInternalParams(params) {
  const result = {};
  for (const [key, value] of Object.entries(params)) {
    result[key] = Array.isArray(value) ? value.join(`,`) : value;
  }
  return result;
}
__name(toInternalParams, "toInternalParams");
var _error;
var _fetchClient2;
var _messageParser;
var _subscribers;
var _lastOffset;
var _liveCacheBuster;
var _lastSyncedAt;
var _isUpToDate;
var _connected;
var _shapeHandle;
var _schema;
var _onError;
var _ShapeStream_instances;
var start_fn;
var publish_fn;
var sendErrorToSubscribers_fn;
var reset_fn;
var ShapeStream = class {
  static {
    __name(this, "ShapeStream");
  }
  constructor(options) {
    __privateAdd(this, _ShapeStream_instances);
    __privateAdd(this, _error, null);
    __privateAdd(this, _fetchClient2);
    __privateAdd(this, _messageParser);
    __privateAdd(this, _subscribers, /* @__PURE__ */ new Map());
    __privateAdd(this, _lastOffset);
    __privateAdd(this, _liveCacheBuster);
    __privateAdd(this, _lastSyncedAt);
    __privateAdd(this, _isUpToDate, false);
    __privateAdd(this, _connected, false);
    __privateAdd(this, _shapeHandle);
    __privateAdd(this, _schema);
    __privateAdd(this, _onError);
    var _a, _b, _c;
    this.options = __spreadValues({ subscribe: true }, options);
    validateOptions(this.options);
    __privateSet(this, _lastOffset, (_a = this.options.offset) != null ? _a : `-1`);
    __privateSet(this, _liveCacheBuster, ``);
    __privateSet(this, _shapeHandle, this.options.handle);
    __privateSet(this, _messageParser, new MessageParser(options.parser));
    __privateSet(this, _onError, this.options.onError);
    const baseFetchClient = (_b = options.fetchClient) != null ? _b : (...args) => fetch(...args);
    const fetchWithBackoffClient = createFetchWithBackoff(baseFetchClient, __spreadProps(__spreadValues({}, (_c = options.backoffOptions) != null ? _c : BackoffDefaults), {
      onFailedAttempt: /* @__PURE__ */ __name(() => {
        var _a2, _b2;
        __privateSet(this, _connected, false);
        (_b2 = (_a2 = options.backoffOptions) == null ? void 0 : _a2.onFailedAttempt) == null ? void 0 : _b2.call(_a2);
      }, "onFailedAttempt")
    }));
    __privateSet(this, _fetchClient2, createFetchWithResponseHeadersCheck(
      createFetchWithChunkBuffer(fetchWithBackoffClient)
    ));
    __privateMethod(this, _ShapeStream_instances, start_fn).call(this);
  }
  get shapeHandle() {
    return __privateGet(this, _shapeHandle);
  }
  get error() {
    return __privateGet(this, _error);
  }
  get isUpToDate() {
    return __privateGet(this, _isUpToDate);
  }
  get lastOffset() {
    return __privateGet(this, _lastOffset);
  }
  subscribe(callback, onError = () => {
  }) {
    const subscriptionId = Math.random();
    __privateGet(this, _subscribers).set(subscriptionId, [callback, onError]);
    return () => {
      __privateGet(this, _subscribers).delete(subscriptionId);
    };
  }
  unsubscribeAll() {
    __privateGet(this, _subscribers).clear();
  }
  /** Unix time at which we last synced. Undefined when `isLoading` is true. */
  lastSyncedAt() {
    return __privateGet(this, _lastSyncedAt);
  }
  /** Time elapsed since last sync (in ms). Infinity if we did not yet sync. */
  lastSynced() {
    if (__privateGet(this, _lastSyncedAt) === void 0) return Infinity;
    return Date.now() - __privateGet(this, _lastSyncedAt);
  }
  /** Indicates if we are connected to the Electric sync service. */
  isConnected() {
    return __privateGet(this, _connected);
  }
  /** True during initial fetch. False afterwise.  */
  isLoading() {
    return !__privateGet(this, _isUpToDate);
  }
};
_error = /* @__PURE__ */ new WeakMap();
_fetchClient2 = /* @__PURE__ */ new WeakMap();
_messageParser = /* @__PURE__ */ new WeakMap();
_subscribers = /* @__PURE__ */ new WeakMap();
_lastOffset = /* @__PURE__ */ new WeakMap();
_liveCacheBuster = /* @__PURE__ */ new WeakMap();
_lastSyncedAt = /* @__PURE__ */ new WeakMap();
_isUpToDate = /* @__PURE__ */ new WeakMap();
_connected = /* @__PURE__ */ new WeakMap();
_shapeHandle = /* @__PURE__ */ new WeakMap();
_schema = /* @__PURE__ */ new WeakMap();
_onError = /* @__PURE__ */ new WeakMap();
_ShapeStream_instances = /* @__PURE__ */ new WeakSet();
start_fn = /* @__PURE__ */ __name(function() {
  return __async(this, null, function* () {
    var _a, _b;
    try {
      while (!((_a = this.options.signal) == null ? void 0 : _a.aborted) && !__privateGet(this, _isUpToDate) || this.options.subscribe) {
        const { url, signal } = this.options;
        const fetchUrl = new URL(url);
        if (this.options.params) {
          const reservedParams = Object.keys(this.options.params).filter(
            (key) => RESERVED_PARAMS.has(key)
          );
          if (reservedParams.length > 0) {
            throw new Error(
              `Cannot use reserved Electric parameter names in custom params: ${reservedParams.join(`, `)}`
            );
          }
          const params = toInternalParams(this.options.params);
          if (params.table)
            fetchUrl.searchParams.set(TABLE_QUERY_PARAM, params.table);
          if (params.where)
            fetchUrl.searchParams.set(WHERE_QUERY_PARAM, params.where);
          if (params.columns)
            fetchUrl.searchParams.set(COLUMNS_QUERY_PARAM, params.columns);
          if (params.replica)
            fetchUrl.searchParams.set(REPLICA_PARAM, params.replica);
          const customParams = __spreadValues({}, params);
          delete customParams.table;
          delete customParams.where;
          delete customParams.columns;
          delete customParams.replica;
          for (const [key, value] of Object.entries(customParams)) {
            fetchUrl.searchParams.set(key, value);
          }
        }
        fetchUrl.searchParams.set(OFFSET_QUERY_PARAM, __privateGet(this, _lastOffset));
        if (__privateGet(this, _isUpToDate)) {
          fetchUrl.searchParams.set(LIVE_QUERY_PARAM, `true`);
          fetchUrl.searchParams.set(
            LIVE_CACHE_BUSTER_QUERY_PARAM,
            __privateGet(this, _liveCacheBuster)
          );
        }
        if (__privateGet(this, _shapeHandle)) {
          fetchUrl.searchParams.set(
            SHAPE_HANDLE_QUERY_PARAM,
            __privateGet(this, _shapeHandle)
          );
        }
        fetchUrl.searchParams.sort();
        let response;
        try {
          response = yield __privateGet(this, _fetchClient2).call(this, fetchUrl.toString(), {
            signal,
            headers: this.options.headers
          });
          __privateSet(this, _connected, true);
        } catch (e) {
          if (e instanceof FetchBackoffAbortError) break;
          if (!(e instanceof FetchError)) throw e;
          if (e.status == 409) {
            const newShapeHandle = e.headers[SHAPE_HANDLE_HEADER];
            __privateMethod(this, _ShapeStream_instances, reset_fn).call(this, newShapeHandle);
            yield __privateMethod(this, _ShapeStream_instances, publish_fn).call(this, e.json);
            continue;
          } else if (e.status >= 400 && e.status < 500) {
            __privateMethod(this, _ShapeStream_instances, sendErrorToSubscribers_fn).call(this, e);
            throw e;
          }
        }
        const { headers, status } = response;
        const shapeHandle = headers.get(SHAPE_HANDLE_HEADER);
        if (shapeHandle) {
          __privateSet(this, _shapeHandle, shapeHandle);
        }
        const lastOffset = headers.get(CHUNK_LAST_OFFSET_HEADER);
        if (lastOffset) {
          __privateSet(this, _lastOffset, lastOffset);
        }
        const liveCacheBuster = headers.get(LIVE_CACHE_BUSTER_HEADER);
        if (liveCacheBuster) {
          __privateSet(this, _liveCacheBuster, liveCacheBuster);
        }
        const getSchema = /* @__PURE__ */ __name(() => {
          const schemaHeader = headers.get(SHAPE_SCHEMA_HEADER);
          return schemaHeader ? JSON.parse(schemaHeader) : {};
        }, "getSchema");
        __privateSet(this, _schema, (_b = __privateGet(this, _schema)) != null ? _b : getSchema());
        const messages = status === 204 ? `[]` : yield response.text();
        if (status === 204) {
          __privateSet(this, _lastSyncedAt, Date.now());
        }
        const batch = __privateGet(this, _messageParser).parse(messages, __privateGet(this, _schema));
        if (batch.length > 0) {
          const lastMessage = batch[batch.length - 1];
          if (isUpToDateMessage(lastMessage)) {
            __privateSet(this, _lastSyncedAt, Date.now());
            __privateSet(this, _isUpToDate, true);
          }
          yield __privateMethod(this, _ShapeStream_instances, publish_fn).call(this, batch);
        }
      }
    } catch (err) {
      __privateSet(this, _error, err);
      if (__privateGet(this, _onError)) {
        const retryOpts = yield __privateGet(this, _onError).call(this, err);
        if (typeof retryOpts === `object`) {
          __privateMethod(this, _ShapeStream_instances, reset_fn).call(this);
          if (`params` in retryOpts) {
            this.options.params = retryOpts.params;
          }
          if (`headers` in retryOpts) {
            this.options.headers = retryOpts.headers;
          }
          __privateMethod(this, _ShapeStream_instances, start_fn).call(this);
        }
        return;
      }
      throw err;
    } finally {
      __privateSet(this, _connected, false);
    }
  });
}, "start_fn");
publish_fn = /* @__PURE__ */ __name(function(messages) {
  return __async(this, null, function* () {
    yield Promise.all(
      Array.from(__privateGet(this, _subscribers).values()).map((_0) => __async(this, [_0], function* ([callback, __]) {
        try {
          yield callback(messages);
        } catch (err) {
          queueMicrotask(() => {
            throw err;
          });
        }
      }))
    );
  });
}, "publish_fn");
sendErrorToSubscribers_fn = /* @__PURE__ */ __name(function(error) {
  __privateGet(this, _subscribers).forEach(([_2, errorFn]) => {
    errorFn == null ? void 0 : errorFn(error);
  });
}, "sendErrorToSubscribers_fn");
reset_fn = /* @__PURE__ */ __name(function(handle) {
  __privateSet(this, _lastOffset, `-1`);
  __privateSet(this, _liveCacheBuster, ``);
  __privateSet(this, _shapeHandle, handle);
  __privateSet(this, _isUpToDate, false);
  __privateSet(this, _connected, false);
  __privateSet(this, _schema, void 0);
}, "reset_fn");
ShapeStream.Replica = {
  FULL: `full`,
  DEFAULT: `default`
};
function validateOptions(options) {
  if (!options.url) {
    throw new MissingShapeUrlError();
  }
  if (options.signal && !(options.signal instanceof AbortSignal)) {
    throw new InvalidSignalError();
  }
  if (options.offset !== void 0 && options.offset !== `-1` && !options.handle) {
    throw new MissingShapeHandleError();
  }
  if (options.params) {
    const reservedParams = Object.keys(options.params).filter(
      (key) => RESERVED_PARAMS.has(key)
    );
    if (reservedParams.length > 0) {
      throw new ReservedParamError(reservedParams);
    }
  }
  return;
}
__name(validateOptions, "validateOptions");
var _data;
var _subscribers2;
var _hasNotifiedSubscribersUpToDate;
var _error2;
var _Shape_instances;
var process_fn;
var handleError_fn;
var notify_fn;
_data = /* @__PURE__ */ new WeakMap();
_subscribers2 = /* @__PURE__ */ new WeakMap();
_hasNotifiedSubscribersUpToDate = /* @__PURE__ */ new WeakMap();
_error2 = /* @__PURE__ */ new WeakMap();
_Shape_instances = /* @__PURE__ */ new WeakSet();
process_fn = /* @__PURE__ */ __name(function(messages) {
  let dataMayHaveChanged = false;
  let isUpToDate = false;
  let newlyUpToDate = false;
  messages.forEach((message) => {
    if (isChangeMessage(message)) {
      dataMayHaveChanged = [`insert`, `update`, `delete`].includes(
        message.headers.operation
      );
      switch (message.headers.operation) {
        case `insert`:
          __privateGet(this, _data).set(message.key, message.value);
          break;
        case `update`:
          __privateGet(this, _data).set(message.key, __spreadValues(__spreadValues({}, __privateGet(this, _data).get(message.key)), message.value));
          break;
        case `delete`:
          __privateGet(this, _data).delete(message.key);
          break;
      }
    }
    if (isControlMessage(message)) {
      switch (message.headers.control) {
        case `up-to-date`:
          isUpToDate = true;
          if (!__privateGet(this, _hasNotifiedSubscribersUpToDate)) {
            newlyUpToDate = true;
          }
          break;
        case `must-refetch`:
          __privateGet(this, _data).clear();
          __privateSet(this, _error2, false);
          __privateSet(this, _hasNotifiedSubscribersUpToDate, false);
          isUpToDate = false;
          newlyUpToDate = false;
          break;
      }
    }
  });
  if (newlyUpToDate || isUpToDate && dataMayHaveChanged) {
    __privateSet(this, _hasNotifiedSubscribersUpToDate, true);
    __privateMethod(this, _Shape_instances, notify_fn).call(this);
  }
}, "process_fn");
handleError_fn = /* @__PURE__ */ __name(function(e) {
  if (e instanceof FetchError) {
    __privateSet(this, _error2, e);
    __privateMethod(this, _Shape_instances, notify_fn).call(this);
  }
}, "handleError_fn");
notify_fn = /* @__PURE__ */ __name(function() {
  __privateGet(this, _subscribers2).forEach((callback) => {
    callback({ value: this.currentValue, rows: this.currentRows });
  });
}, "notify_fn");

// node_modules/@trigger.dev/core/dist/esm/v3/streams/asyncIterableStream.js
init_esm();
function createAsyncIterableStream(source, transformer) {
  const transformedStream = source.pipeThrough(new TransformStream(transformer));
  transformedStream[Symbol.asyncIterator] = () => {
    const reader = transformedStream.getReader();
    return {
      async next() {
        const { done, value } = await reader.read();
        return done ? { done: true, value: void 0 } : { done: false, value };
      }
    };
  };
  return transformedStream;
}
__name(createAsyncIterableStream, "createAsyncIterableStream");
function createAsyncIterableReadable(source, transformer, signal) {
  return new ReadableStream({
    async start(controller) {
      const transformedStream = source.pipeThrough(new TransformStream(transformer));
      const reader = transformedStream.getReader();
      signal.addEventListener("abort", () => {
        queueMicrotask(() => {
          reader.cancel();
          controller.close();
        });
      });
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          controller.close();
          break;
        }
        controller.enqueue(value);
      }
    }
  });
}
__name(createAsyncIterableReadable, "createAsyncIterableReadable");

// node_modules/@trigger.dev/core/dist/esm/v3/apiClient/version.js
init_esm();
var API_VERSION = "2025-07-16";
var API_VERSION_HEADER_NAME = "x-trigger-api-version";

// node_modules/@trigger.dev/core/dist/esm/v3/apiClient/stream.js
function zodShapeStream(schema, url, options) {
  const abortController = new AbortController();
  options?.signal?.addEventListener("abort", () => {
    abortController.abort();
  }, { once: true });
  const shapeStream = new ShapeStream({
    url,
    headers: {
      ...options?.headers,
      "x-trigger-electric-version": "1.0.0-beta.1",
      [API_VERSION_HEADER_NAME]: API_VERSION
    },
    fetchClient: options?.fetchClient,
    signal: abortController.signal,
    onError: /* @__PURE__ */ __name((e) => {
      options?.onError?.(e);
    }, "onError")
  });
  const readableShape = new ReadableShapeStream(shapeStream);
  const stream2 = readableShape.stream.pipeThrough(new TransformStream({
    async transform(chunk, controller) {
      const result = schema.safeParse(chunk);
      if (result.success) {
        controller.enqueue(result.data);
      } else {
        controller.error(new Error(`Unable to parse shape: ${result.error.message}`));
      }
    }
  }));
  return {
    stream: stream2,
    stop: /* @__PURE__ */ __name((delay) => {
      if (delay) {
        setTimeout(() => {
          if (abortController.signal.aborted)
            return;
          abortController.abort();
        }, delay);
      } else {
        abortController.abort();
      }
    }, "stop")
  };
}
__name(zodShapeStream, "zodShapeStream");
var ReadableShapeStream = class {
  static {
    __name(this, "ReadableShapeStream");
  }
  #stream;
  #currentState = /* @__PURE__ */ new Map();
  #changeStream;
  #error = false;
  #unsubscribe;
  #isStreamClosed = false;
  stop() {
    this.#isStreamClosed = true;
    this.#unsubscribe?.();
  }
  constructor(stream2) {
    this.#stream = stream2;
    const source = new ReadableStream({
      start: /* @__PURE__ */ __name((controller) => {
        this.#unsubscribe = this.#stream.subscribe((messages) => {
          if (!this.#isStreamClosed) {
            controller.enqueue(messages);
          }
        }, this.#handleError.bind(this));
      }, "start"),
      cancel: /* @__PURE__ */ __name(() => {
        this.#isStreamClosed = true;
        this.#unsubscribe?.();
      }, "cancel")
    });
    let updatedKeys = /* @__PURE__ */ new Set();
    this.#changeStream = createAsyncIterableStream(source, {
      transform: /* @__PURE__ */ __name((messages, controller) => {
        if (this.#isStreamClosed) {
          return;
        }
        try {
          let isUpToDate = false;
          for (const message of messages) {
            if (isChangeMessage(message)) {
              const key = message.key;
              switch (message.headers.operation) {
                case "insert": {
                  this.#currentState.set(key, message.value);
                  updatedKeys.add(key);
                  break;
                }
                case "update": {
                  const existingRow = this.#currentState.get(key);
                  const updatedRow = existingRow ? { ...existingRow, ...message.value } : message.value;
                  this.#currentState.set(key, updatedRow);
                  updatedKeys.add(key);
                  break;
                }
              }
            } else if (isControlMessage(message)) {
              if (message.headers.control === "must-refetch") {
                this.#currentState.clear();
                this.#error = false;
              } else if (message.headers.control === "up-to-date") {
                isUpToDate = true;
              }
            }
          }
          if (!this.#isStreamClosed && isUpToDate) {
            for (const key of updatedKeys) {
              const finalRow = this.#currentState.get(key);
              if (finalRow) {
                controller.enqueue(finalRow);
              }
            }
            updatedKeys.clear();
          }
        } catch (error) {
          console.error("Error processing stream messages:", error);
          this.#handleError(error);
        }
      }, "transform")
    });
  }
  get stream() {
    return this.#changeStream;
  }
  get isUpToDate() {
    return this.#stream.isUpToDate;
  }
  get lastOffset() {
    return this.#stream.lastOffset;
  }
  get handle() {
    return this.#stream.shapeHandle;
  }
  get error() {
    return this.#error;
  }
  lastSyncedAt() {
    return this.#stream.lastSyncedAt();
  }
  lastSynced() {
    return this.#stream.lastSynced();
  }
  isLoading() {
    return this.#stream.isLoading();
  }
  isConnected() {
    return this.#stream.isConnected();
  }
  #handleError(e) {
    if (e instanceof FetchError) {
      this.#error = e;
    }
    this.#isStreamClosed = true;
    this.#unsubscribe?.();
  }
};
var LineTransformStream = class extends TransformStream {
  static {
    __name(this, "LineTransformStream");
  }
  buffer = "";
  constructor() {
    super({
      transform: /* @__PURE__ */ __name((chunk, controller) => {
        this.buffer += chunk;
        const lines = this.buffer.split("\n");
        this.buffer = lines.pop() || "";
        const fullLines = lines.filter((line) => line.trim().length > 0);
        if (fullLines.length > 0) {
          controller.enqueue(fullLines);
        }
      }, "transform"),
      flush: /* @__PURE__ */ __name((controller) => {
        const trimmed = this.buffer.trim();
        if (trimmed.length > 0) {
          controller.enqueue([trimmed]);
        }
      }, "flush")
    });
  }
};

// node_modules/@trigger.dev/core/dist/esm/v3/apiClient/runStream.js
function runShapeStream(url, options) {
  const abortController = new AbortController();
  const streamFactory = new SSEStreamSubscriptionFactory(getEnvVar("TRIGGER_STREAM_URL", getEnvVar("TRIGGER_API_URL")) ?? "https://api.trigger.dev", {
    headers: options?.headers,
    signal: abortController.signal
  });
  options?.signal?.addEventListener("abort", () => {
    if (!abortController.signal.aborted) {
      abortController.abort();
    }
  }, { once: true });
  const runStreamInstance = zodShapeStream(SubscribeRunRawShape, url, {
    ...options,
    signal: abortController.signal,
    onError: /* @__PURE__ */ __name((e) => {
      options?.onFetchError?.(e);
    }, "onError")
  });
  const $options = {
    runShapeStream: runStreamInstance.stream,
    stopRunShapeStream: /* @__PURE__ */ __name(() => runStreamInstance.stop(30 * 1e3), "stopRunShapeStream"),
    streamFactory,
    abortController,
    ...options
  };
  return new RunSubscription($options);
}
__name(runShapeStream, "runShapeStream");
var SSEStreamSubscription = class {
  static {
    __name(this, "SSEStreamSubscription");
  }
  url;
  options;
  constructor(url, options) {
    this.url = url;
    this.options = options;
  }
  async subscribe() {
    return fetch(this.url, {
      headers: {
        Accept: "text/event-stream",
        ...this.options.headers
      },
      signal: this.options.signal
    }).then((response) => {
      if (!response.ok) {
        throw ApiError.generate(response.status, {}, "Could not subscribe to stream", Object.fromEntries(response.headers));
      }
      if (!response.body) {
        throw new Error("No response body");
      }
      return response.body.pipeThrough(new TextDecoderStream()).pipeThrough(new EventSourceParserStream()).pipeThrough(new TransformStream({
        transform(chunk, controller) {
          controller.enqueue(safeParseJSON(chunk.data));
        }
      }));
    });
  }
};
var SSEStreamSubscriptionFactory = class {
  static {
    __name(this, "SSEStreamSubscriptionFactory");
  }
  baseUrl;
  options;
  constructor(baseUrl, options) {
    this.baseUrl = baseUrl;
    this.options = options;
  }
  createSubscription(runId, streamKey, baseUrl) {
    if (!runId || !streamKey) {
      throw new Error("runId and streamKey are required");
    }
    const url = `${baseUrl ?? this.baseUrl}/realtime/v1/streams/${runId}/${streamKey}`;
    return new SSEStreamSubscription(url, this.options);
  }
};
var RunSubscription = class {
  static {
    __name(this, "RunSubscription");
  }
  options;
  stream;
  packetCache = /* @__PURE__ */ new Map();
  _closeOnComplete;
  _isRunComplete = false;
  constructor(options) {
    this.options = options;
    this._closeOnComplete = typeof options.closeOnComplete === "undefined" ? true : options.closeOnComplete;
    this.stream = createAsyncIterableReadable(this.options.runShapeStream, {
      transform: /* @__PURE__ */ __name(async (chunk, controller) => {
        const run = await this.transformRunShape(chunk);
        controller.enqueue(run);
        this._isRunComplete = !!run.finishedAt;
        if (this._closeOnComplete && this._isRunComplete && !this.options.abortController.signal.aborted) {
          this.options.stopRunShapeStream();
        }
      }, "transform")
    }, this.options.abortController.signal);
  }
  unsubscribe() {
    if (!this.options.abortController.signal.aborted) {
      this.options.abortController.abort();
    }
    this.options.stopRunShapeStream();
  }
  [Symbol.asyncIterator]() {
    return this.stream[Symbol.asyncIterator]();
  }
  getReader() {
    return this.stream.getReader();
  }
  withStreams() {
    const activeStreams = /* @__PURE__ */ new Set();
    return createAsyncIterableReadable(this.stream, {
      transform: /* @__PURE__ */ __name(async (run, controller) => {
        controller.enqueue({
          type: "run",
          run
        });
        if (run.metadata && "$$streams" in run.metadata && Array.isArray(run.metadata.$$streams)) {
          for (const streamKey of run.metadata.$$streams) {
            if (typeof streamKey !== "string") {
              continue;
            }
            if (!activeStreams.has(streamKey)) {
              activeStreams.add(streamKey);
              const subscription = this.options.streamFactory.createSubscription(run.id, streamKey, this.options.client?.baseUrl);
              subscription.subscribe().then((stream2) => {
                stream2.pipeThrough(new TransformStream({
                  transform(chunk, controller2) {
                    controller2.enqueue({
                      type: streamKey,
                      chunk,
                      run
                    });
                  }
                })).pipeTo(new WritableStream({
                  write(chunk) {
                    controller.enqueue(chunk);
                  }
                })).catch((error) => {
                  console.error(`Error in stream ${streamKey}:`, error);
                });
              }).catch((error) => {
                console.error(`Error subscribing to stream ${streamKey}:`, error);
              });
            }
          }
        }
      }, "transform")
    }, this.options.abortController.signal);
  }
  async transformRunShape(row) {
    const payloadPacket = row.payloadType ? { data: row.payload ?? void 0, dataType: row.payloadType } : void 0;
    const outputPacket = row.outputType ? { data: row.output ?? void 0, dataType: row.outputType } : void 0;
    const [payload, output] = await Promise.all([
      { packet: payloadPacket, key: "payload" },
      { packet: outputPacket, key: "output" }
    ].map(async ({ packet, key }) => {
      if (!packet) {
        return;
      }
      const cachedResult = this.packetCache.get(`${row.friendlyId}/${key}`);
      if (typeof cachedResult !== "undefined") {
        return cachedResult;
      }
      const result = await conditionallyImportAndParsePacket(packet, this.options.client);
      this.packetCache.set(`${row.friendlyId}/${key}`, result);
      return result;
    }));
    const metadata2 = row.metadata && row.metadataType ? await parsePacket({ data: row.metadata, dataType: row.metadataType }) : void 0;
    const status = apiStatusFromRunStatus(row.status);
    return {
      id: row.friendlyId,
      createdAt: row.createdAt,
      updatedAt: row.updatedAt,
      taskIdentifier: row.taskIdentifier,
      status,
      payload,
      output,
      durationMs: row.usageDurationMs ?? 0,
      costInCents: row.costInCents ?? 0,
      baseCostInCents: row.baseCostInCents ?? 0,
      tags: row.runTags ?? [],
      idempotencyKey: row.idempotencyKey ?? void 0,
      expiredAt: row.expiredAt ?? void 0,
      finishedAt: row.completedAt ?? void 0,
      startedAt: row.startedAt ?? void 0,
      delayedUntil: row.delayUntil ?? void 0,
      queuedAt: row.queuedAt ?? void 0,
      error: row.error ? createJsonErrorObject(row.error) : void 0,
      isTest: row.isTest ?? false,
      metadata: metadata2,
      ...booleanHelpersFromRunStatus(status)
    };
  }
};
var queuedStatuses = ["PENDING_VERSION", "QUEUED", "PENDING", "DELAYED"];
var waitingStatuses = ["WAITING"];
var executingStatuses = ["DEQUEUED", "EXECUTING"];
var failedStatuses = ["FAILED", "CRASHED", "SYSTEM_FAILURE", "EXPIRED", "TIMED_OUT"];
var successfulStatuses = ["COMPLETED"];
function booleanHelpersFromRunStatus(status) {
  return {
    isQueued: queuedStatuses.includes(status),
    isWaiting: waitingStatuses.includes(status),
    isExecuting: executingStatuses.includes(status),
    isCompleted: successfulStatuses.includes(status) || failedStatuses.includes(status),
    isFailed: failedStatuses.includes(status),
    isSuccess: successfulStatuses.includes(status),
    isCancelled: status === "CANCELED"
  };
}
__name(booleanHelpersFromRunStatus, "booleanHelpersFromRunStatus");
function apiStatusFromRunStatus(status) {
  switch (status) {
    case "DELAYED": {
      return "DELAYED";
    }
    case "WAITING_FOR_DEPLOY":
    case "PENDING_VERSION": {
      return "PENDING_VERSION";
    }
    case "PENDING": {
      return "QUEUED";
    }
    case "PAUSED":
    case "WAITING_TO_RESUME": {
      return "WAITING";
    }
    case "DEQUEUED": {
      return "DEQUEUED";
    }
    case "RETRYING_AFTER_FAILURE":
    case "EXECUTING": {
      return "EXECUTING";
    }
    case "CANCELED": {
      return "CANCELED";
    }
    case "COMPLETED_SUCCESSFULLY": {
      return "COMPLETED";
    }
    case "SYSTEM_FAILURE": {
      return "SYSTEM_FAILURE";
    }
    case "CRASHED": {
      return "CRASHED";
    }
    case "INTERRUPTED":
    case "COMPLETED_WITH_ERRORS": {
      return "FAILED";
    }
    case "EXPIRED": {
      return "EXPIRED";
    }
    case "TIMED_OUT": {
      return "TIMED_OUT";
    }
    default: {
      return "QUEUED";
    }
  }
}
__name(apiStatusFromRunStatus, "apiStatusFromRunStatus");
function safeParseJSON(data) {
  try {
    return JSON.parse(data);
  } catch (error) {
    return data;
  }
}
__name(safeParseJSON, "safeParseJSON");
var isSafari = /* @__PURE__ */ __name(() => {
  if (typeof window !== "undefined" && typeof navigator !== "undefined" && typeof navigator.userAgent === "string") {
    return /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || /iPad|iPhone|iPod/.test(navigator.userAgent);
  }
  return false;
}, "isSafari");
if (isSafari()) {
  ReadableStream.prototype.values ??= function({ preventCancel = false } = {}) {
    const reader = this.getReader();
    return {
      async next() {
        try {
          const result = await reader.read();
          if (result.done) {
            reader.releaseLock();
          }
          return {
            done: result.done,
            value: result.value
          };
        } catch (e) {
          reader.releaseLock();
          throw e;
        }
      },
      async return(value) {
        if (!preventCancel) {
          const cancelPromise = reader.cancel(value);
          reader.releaseLock();
          await cancelPromise;
        } else {
          reader.releaseLock();
        }
        return { done: true, value };
      },
      [Symbol.asyncIterator]() {
        return this;
      }
    };
  };
  ReadableStream.prototype[Symbol.asyncIterator] ??= ReadableStream.prototype.values;
}

// node_modules/@trigger.dev/core/dist/esm/v3/apiClient/getBranch.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/apiClient/index.js
var DEFAULT_ZOD_FETCH_OPTIONS = {
  retry: {
    maxAttempts: 5,
    minTimeoutInMs: 1e3,
    maxTimeoutInMs: 3e4,
    factor: 1.6,
    randomize: false
  }
};
var ApiClient = class {
  static {
    __name(this, "ApiClient");
  }
  baseUrl;
  accessToken;
  previewBranch;
  defaultRequestOptions;
  constructor(baseUrl, accessToken, previewBranch, requestOptions = {}) {
    this.accessToken = accessToken;
    this.baseUrl = baseUrl.replace(/\/$/, "");
    this.previewBranch = previewBranch;
    this.defaultRequestOptions = mergeRequestOptions(DEFAULT_ZOD_FETCH_OPTIONS, requestOptions);
  }
  get fetchClient() {
    const headers = this.#getHeaders(false);
    const fetchClient = /* @__PURE__ */ __name((input, requestInit) => {
      const $requestInit = {
        ...requestInit,
        headers: {
          ...requestInit?.headers,
          ...headers
        }
      };
      return fetch(input, $requestInit);
    }, "fetchClient");
    return fetchClient;
  }
  getHeaders() {
    return this.#getHeaders(false);
  }
  async getRunResult(runId, requestOptions) {
    try {
      return await zodfetch(TaskRunExecutionResult, `${this.baseUrl}/api/v1/runs/${runId}/result`, {
        method: "GET",
        headers: this.#getHeaders(false)
      }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
    } catch (error) {
      if (error instanceof ApiError) {
        if (error.status === 404) {
          return void 0;
        }
      }
      throw error;
    }
  }
  async getBatchResults(batchId, requestOptions) {
    return await zodfetch(BatchTaskRunExecutionResult, `${this.baseUrl}/api/v1/batches/${batchId}/results`, {
      method: "GET",
      headers: this.#getHeaders(false)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  triggerTask(taskId, body, clientOptions, requestOptions) {
    const encodedTaskId = encodeURIComponent(taskId);
    return zodfetch(TriggerTaskResponse, `${this.baseUrl}/api/v1/tasks/${encodedTaskId}/trigger`, {
      method: "POST",
      headers: this.#getHeaders(clientOptions?.spanParentAsLink ?? false),
      body: JSON.stringify(body)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions)).withResponse().then(async ({ data, response }) => {
      const jwtHeader = response.headers.get("x-trigger-jwt");
      if (typeof jwtHeader === "string") {
        return {
          ...data,
          publicAccessToken: jwtHeader
        };
      }
      const claimsHeader = response.headers.get("x-trigger-jwt-claims");
      const claims = claimsHeader ? JSON.parse(claimsHeader) : void 0;
      const jwt = await generateJWT({
        secretKey: this.accessToken,
        payload: {
          ...claims,
          scopes: [`read:runs:${data.id}`]
        },
        expirationTime: requestOptions?.publicAccessToken?.expirationTime ?? "1h"
      });
      return {
        ...data,
        publicAccessToken: jwt
      };
    });
  }
  batchTriggerV3(body, clientOptions, requestOptions) {
    return zodfetch(BatchTriggerTaskV3Response, `${this.baseUrl}/api/v2/tasks/batch`, {
      method: "POST",
      headers: this.#getHeaders(clientOptions?.spanParentAsLink ?? false, {
        "batch-processing-strategy": clientOptions?.processingStrategy
      }),
      body: JSON.stringify(body)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions)).withResponse().then(async ({ data, response }) => {
      const claimsHeader = response.headers.get("x-trigger-jwt-claims");
      const claims = claimsHeader ? JSON.parse(claimsHeader) : void 0;
      const jwt = await generateJWT({
        secretKey: this.accessToken,
        payload: {
          ...claims,
          scopes: [`read:batch:${data.id}`]
        },
        expirationTime: requestOptions?.publicAccessToken?.expirationTime ?? "1h"
      });
      return {
        ...data,
        publicAccessToken: jwt
      };
    });
  }
  createUploadPayloadUrl(filename, requestOptions) {
    return zodfetch(CreateUploadPayloadUrlResponseBody, `${this.baseUrl}/api/v1/packets/${filename}`, {
      method: "PUT",
      headers: this.#getHeaders(false)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  getPayloadUrl(filename, requestOptions) {
    return zodfetch(CreateUploadPayloadUrlResponseBody, `${this.baseUrl}/api/v1/packets/${filename}`, {
      method: "GET",
      headers: this.#getHeaders(false)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  retrieveRun(runId, requestOptions) {
    return zodfetch(RetrieveRunResponse, `${this.baseUrl}/api/v3/runs/${runId}`, {
      method: "GET",
      headers: this.#getHeaders(false)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  retrieveRunTrace(runId, requestOptions) {
    return zodfetch(RetrieveRunTraceResponseBody, `${this.baseUrl}/api/v1/runs/${runId}/trace`, {
      method: "GET",
      headers: this.#getHeaders(false)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  listRuns(query, requestOptions) {
    const searchParams = createSearchQueryForListRuns(query);
    return zodfetchCursorPage(ListRunResponseItem, `${this.baseUrl}/api/v1/runs`, {
      query: searchParams,
      limit: query?.limit,
      after: query?.after,
      before: query?.before
    }, {
      method: "GET",
      headers: this.#getHeaders(false)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  listProjectRuns(projectRef, query, requestOptions) {
    const searchParams = createSearchQueryForListRuns(query);
    if (query?.env) {
      searchParams.append("filter[env]", Array.isArray(query.env) ? query.env.join(",") : query.env);
    }
    return zodfetchCursorPage(ListRunResponseItem, `${this.baseUrl}/api/v1/projects/${projectRef}/runs`, {
      query: searchParams,
      limit: query?.limit,
      after: query?.after,
      before: query?.before
    }, {
      method: "GET",
      headers: this.#getHeaders(false)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  replayRun(runId, requestOptions) {
    return zodfetch(ReplayRunResponse, `${this.baseUrl}/api/v1/runs/${runId}/replay`, {
      method: "POST",
      headers: this.#getHeaders(false)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  cancelRun(runId, requestOptions) {
    return zodfetch(CanceledRunResponse, `${this.baseUrl}/api/v2/runs/${runId}/cancel`, {
      method: "POST",
      headers: this.#getHeaders(false)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  rescheduleRun(runId, body, requestOptions) {
    return zodfetch(RetrieveRunResponse, `${this.baseUrl}/api/v1/runs/${runId}/reschedule`, {
      method: "POST",
      headers: this.#getHeaders(false),
      body: JSON.stringify(body)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  listRunEvents(runId, requestOptions) {
    return zodfetch(
      external_exports.any(),
      // TODO: define a proper schema for this
      `${this.baseUrl}/api/v1/runs/${runId}/events`,
      {
        method: "GET",
        headers: this.#getHeaders(false)
      },
      mergeRequestOptions(this.defaultRequestOptions, requestOptions)
    );
  }
  addTags(runId, body, requestOptions) {
    return zodfetch(external_exports.object({ message: external_exports.string() }), `${this.baseUrl}/api/v1/runs/${runId}/tags`, {
      method: "POST",
      headers: this.#getHeaders(false),
      body: JSON.stringify(body)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  createSchedule(options, requestOptions) {
    return zodfetch(ScheduleObject, `${this.baseUrl}/api/v1/schedules`, {
      method: "POST",
      headers: this.#getHeaders(false),
      body: JSON.stringify(options)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  listSchedules(options, requestOptions) {
    const searchParams = new URLSearchParams();
    if (options?.page) {
      searchParams.append("page", options.page.toString());
    }
    if (options?.perPage) {
      searchParams.append("perPage", options.perPage.toString());
    }
    return zodfetchOffsetLimitPage(ScheduleObject, `${this.baseUrl}/api/v1/schedules`, {
      page: options?.page,
      limit: options?.perPage
    }, {
      method: "GET",
      headers: this.#getHeaders(false)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  retrieveSchedule(scheduleId, requestOptions) {
    return zodfetch(ScheduleObject, `${this.baseUrl}/api/v1/schedules/${scheduleId}`, {
      method: "GET",
      headers: this.#getHeaders(false)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  updateSchedule(scheduleId, options, requestOptions) {
    return zodfetch(ScheduleObject, `${this.baseUrl}/api/v1/schedules/${scheduleId}`, {
      method: "PUT",
      headers: this.#getHeaders(false),
      body: JSON.stringify(options)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  deactivateSchedule(scheduleId, requestOptions) {
    return zodfetch(ScheduleObject, `${this.baseUrl}/api/v1/schedules/${scheduleId}/deactivate`, {
      method: "POST",
      headers: this.#getHeaders(false)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  activateSchedule(scheduleId, requestOptions) {
    return zodfetch(ScheduleObject, `${this.baseUrl}/api/v1/schedules/${scheduleId}/activate`, {
      method: "POST",
      headers: this.#getHeaders(false)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  deleteSchedule(scheduleId, requestOptions) {
    return zodfetch(DeletedScheduleObject, `${this.baseUrl}/api/v1/schedules/${scheduleId}`, {
      method: "DELETE",
      headers: this.#getHeaders(false)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  listEnvVars(projectRef, slug, requestOptions) {
    return zodfetch(external_exports.array(EnvironmentVariableWithSecret), `${this.baseUrl}/api/v1/projects/${projectRef}/envvars/${slug}`, {
      method: "GET",
      headers: this.#getHeaders(false)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  importEnvVars(projectRef, slug, body, requestOptions) {
    return zodfetch(EnvironmentVariableResponseBody, `${this.baseUrl}/api/v1/projects/${projectRef}/envvars/${slug}/import`, {
      method: "POST",
      headers: this.#getHeaders(false),
      body: JSON.stringify(body)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  retrieveEnvVar(projectRef, slug, key, requestOptions) {
    return zodfetch(EnvironmentVariableWithSecret, `${this.baseUrl}/api/v1/projects/${projectRef}/envvars/${slug}/${key}`, {
      method: "GET",
      headers: this.#getHeaders(false)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  createEnvVar(projectRef, slug, body, requestOptions) {
    return zodfetch(EnvironmentVariableResponseBody, `${this.baseUrl}/api/v1/projects/${projectRef}/envvars/${slug}`, {
      method: "POST",
      headers: this.#getHeaders(false),
      body: JSON.stringify(body)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  updateEnvVar(projectRef, slug, key, body, requestOptions) {
    return zodfetch(EnvironmentVariableResponseBody, `${this.baseUrl}/api/v1/projects/${projectRef}/envvars/${slug}/${key}`, {
      method: "PUT",
      headers: this.#getHeaders(false),
      body: JSON.stringify(body)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  deleteEnvVar(projectRef, slug, key, requestOptions) {
    return zodfetch(EnvironmentVariableResponseBody, `${this.baseUrl}/api/v1/projects/${projectRef}/envvars/${slug}/${key}`, {
      method: "DELETE",
      headers: this.#getHeaders(false)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  updateRunMetadata(runId, body, requestOptions) {
    return zodfetch(UpdateMetadataResponseBody, `${this.baseUrl}/api/v1/runs/${runId}/metadata`, {
      method: "PUT",
      headers: this.#getHeaders(false),
      body: JSON.stringify(body)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  getRunMetadata(runId, requestOptions) {
    return zodfetch(UpdateMetadataResponseBody, `${this.baseUrl}/api/v1/runs/${runId}/metadata`, {
      method: "GET",
      headers: this.#getHeaders(false)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  createWaitpointToken(options, requestOptions) {
    return zodfetch(CreateWaitpointTokenResponseBody, `${this.baseUrl}/api/v1/waitpoints/tokens`, {
      method: "POST",
      headers: this.#getHeaders(false),
      body: JSON.stringify(options)
    }, {
      ...mergeRequestOptions(this.defaultRequestOptions, requestOptions),
      prepareData: /* @__PURE__ */ __name(async (data, response) => {
        const jwtHeader = response.headers.get("x-trigger-jwt");
        if (typeof jwtHeader === "string") {
          return {
            ...data,
            publicAccessToken: jwtHeader
          };
        }
        const claimsHeader = response.headers.get("x-trigger-jwt-claims");
        const claims = claimsHeader ? JSON.parse(claimsHeader) : void 0;
        const jwt = await generateJWT({
          secretKey: this.accessToken,
          payload: {
            ...claims,
            scopes: [`write:waitpoints:${data.id}`]
          },
          expirationTime: "24h"
        });
        return {
          ...data,
          publicAccessToken: jwt
        };
      }, "prepareData")
    });
  }
  listWaitpointTokens(params, requestOptions) {
    const searchParams = createSearchQueryForListWaitpointTokens(params);
    return zodfetchCursorPage(WaitpointTokenItem, `${this.baseUrl}/api/v1/waitpoints/tokens`, {
      query: searchParams,
      limit: params?.limit,
      after: params?.after,
      before: params?.before
    }, {
      method: "GET",
      headers: this.#getHeaders(false)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  retrieveWaitpointToken(friendlyId, requestOptions) {
    return zodfetch(WaitpointRetrieveTokenResponse, `${this.baseUrl}/api/v1/waitpoints/tokens/${friendlyId}`, {
      method: "GET",
      headers: this.#getHeaders(false)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  completeWaitpointToken(friendlyId, options, requestOptions) {
    return zodfetch(CompleteWaitpointTokenResponseBody, `${this.baseUrl}/api/v1/waitpoints/tokens/${friendlyId}/complete`, {
      method: "POST",
      headers: this.#getHeaders(false),
      body: JSON.stringify(options)
    }, {
      ...mergeRequestOptions(this.defaultRequestOptions, requestOptions)
    });
  }
  waitForWaitpointToken({ runFriendlyId, waitpointFriendlyId }, requestOptions) {
    return zodfetch(WaitForWaitpointTokenResponseBody, `${this.baseUrl}/engine/v1/runs/${runFriendlyId}/waitpoints/tokens/${waitpointFriendlyId}/wait`, {
      method: "POST",
      headers: this.#getHeaders(false)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  async waitForDuration(runId, body, requestOptions) {
    return zodfetch(WaitForDurationResponseBody, `${this.baseUrl}/engine/v1/runs/${runId}/wait/duration`, {
      method: "POST",
      headers: this.#getHeaders(false),
      body: JSON.stringify(body)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  listQueues(options, requestOptions) {
    const searchParams = new URLSearchParams();
    if (options?.page) {
      searchParams.append("page", options.page.toString());
    }
    if (options?.perPage) {
      searchParams.append("perPage", options.perPage.toString());
    }
    return zodfetchOffsetLimitPage(QueueItem, `${this.baseUrl}/api/v1/queues`, {
      page: options?.page,
      limit: options?.perPage
    }, {
      method: "GET",
      headers: this.#getHeaders(false)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  retrieveQueue(queue2, requestOptions) {
    const type = typeof queue2 === "string" ? "id" : queue2.type;
    const value = typeof queue2 === "string" ? queue2 : queue2.name;
    const encodedValue = encodeURIComponent(value.replace(/\//g, "%2F"));
    return zodfetch(QueueItem, `${this.baseUrl}/api/v1/queues/${encodedValue}?type=${type}`, {
      method: "GET",
      headers: this.#getHeaders(false)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  pauseQueue(queue2, action, requestOptions) {
    const type = typeof queue2 === "string" ? "id" : queue2.type;
    const value = typeof queue2 === "string" ? queue2 : queue2.name;
    const encodedValue = encodeURIComponent(value.replace(/\//g, "%2F"));
    return zodfetch(QueueItem, `${this.baseUrl}/api/v1/queues/${encodedValue}/pause`, {
      method: "POST",
      headers: this.#getHeaders(false),
      body: JSON.stringify({
        type,
        action
      })
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  subscribeToRun(runId, options) {
    const queryParams = new URLSearchParams();
    if (options?.skipColumns) {
      queryParams.append("skipColumns", options.skipColumns.join(","));
    }
    return runShapeStream(`${this.baseUrl}/realtime/v1/runs/${runId}${queryParams ? `?${queryParams}` : ""}`, {
      closeOnComplete: typeof options?.closeOnComplete === "boolean" ? options.closeOnComplete : true,
      headers: this.#getRealtimeHeaders(),
      client: this,
      signal: options?.signal,
      onFetchError: options?.onFetchError
    });
  }
  subscribeToRunsWithTag(tag, filters, options) {
    const searchParams = createSearchQueryForSubscribeToRuns({
      tags: tag,
      ...filters ? { createdAt: filters.createdAt } : {},
      ...filters?.skipColumns ? { skipColumns: filters.skipColumns } : {}
    });
    return runShapeStream(`${this.baseUrl}/realtime/v1/runs${searchParams ? `?${searchParams}` : ""}`, {
      closeOnComplete: false,
      headers: this.#getRealtimeHeaders(),
      client: this,
      signal: options?.signal,
      onFetchError: options?.onFetchError
    });
  }
  subscribeToBatch(batchId, options) {
    const queryParams = new URLSearchParams();
    if (options?.skipColumns) {
      queryParams.append("skipColumns", options.skipColumns.join(","));
    }
    return runShapeStream(`${this.baseUrl}/realtime/v1/batches/${batchId}${queryParams ? `?${queryParams}` : ""}`, {
      closeOnComplete: false,
      headers: this.#getRealtimeHeaders(),
      client: this,
      signal: options?.signal,
      onFetchError: options?.onFetchError
    });
  }
  listDeployments(options, requestOptions) {
    const searchParams = new URLSearchParams();
    if (options?.status) {
      searchParams.append("status", options.status);
    }
    if (options?.period) {
      searchParams.append("period", options.period);
    }
    if (options?.from) {
      searchParams.append("from", options.from);
    }
    if (options?.to) {
      searchParams.append("to", options.to);
    }
    return zodfetchCursorPage(ApiDeploymentListResponseItem, `${this.baseUrl}/api/v1/deployments`, {
      query: searchParams,
      after: options?.cursor,
      limit: options?.limit
    }, {
      method: "GET",
      headers: this.#getHeaders(false)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  async fetchStream(runId, streamKey, options) {
    const streamFactory = new SSEStreamSubscriptionFactory(options?.baseUrl ?? this.baseUrl, {
      headers: this.getHeaders(),
      signal: options?.signal
    });
    const subscription = streamFactory.createSubscription(runId, streamKey);
    const stream2 = await subscription.subscribe();
    return stream2;
  }
  async generateJWTClaims(requestOptions) {
    return zodfetch(external_exports.record(external_exports.any()), `${this.baseUrl}/api/v1/auth/jwt/claims`, {
      method: "POST",
      headers: this.#getHeaders(false)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  retrieveBatch(batchId, requestOptions) {
    return zodfetch(RetrieveBatchV2Response, `${this.baseUrl}/api/v2/batches/${batchId}`, {
      method: "GET",
      headers: this.#getHeaders(false)
    }, mergeRequestOptions(this.defaultRequestOptions, requestOptions));
  }
  #getHeaders(spanParentAsLink, additionalHeaders) {
    const headers = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${this.accessToken}`,
      "trigger-version": VERSION2,
      ...Object.entries(additionalHeaders ?? {}).reduce((acc, [key, value]) => {
        if (value !== void 0) {
          acc[key] = value;
        }
        return acc;
      }, {})
    };
    if (this.previewBranch) {
      headers["x-trigger-branch"] = this.previewBranch;
    }
    if (taskContext.isInsideTask) {
      headers["x-trigger-worker"] = "true";
      headers["x-trigger-engine-version"] = "V2";
      if (spanParentAsLink) {
        headers["x-trigger-span-parent-as-link"] = "1";
      }
    }
    if (typeof window !== "undefined" && typeof window.document !== "undefined") {
      headers["x-trigger-client"] = "browser";
    }
    headers[API_VERSION_HEADER_NAME] = API_VERSION;
    return headers;
  }
  #getRealtimeHeaders() {
    let headers = {
      Authorization: `Bearer ${this.accessToken}`,
      "trigger-version": VERSION2
    };
    if (this.previewBranch) {
      headers["x-trigger-branch"] = this.previewBranch;
    }
    return headers;
  }
};
function createSearchQueryForSubscribeToRuns(query) {
  const searchParams = new URLSearchParams();
  if (query) {
    if (query.tasks) {
      searchParams.append("tasks", Array.isArray(query.tasks) ? query.tasks.join(",") : query.tasks);
    }
    if (query.tags) {
      searchParams.append("tags", Array.isArray(query.tags) ? query.tags.join(",") : query.tags);
    }
    if (query.createdAt) {
      searchParams.append("createdAt", query.createdAt);
    }
    if (query.skipColumns) {
      searchParams.append("skipColumns", query.skipColumns.join(","));
    }
  }
  return searchParams;
}
__name(createSearchQueryForSubscribeToRuns, "createSearchQueryForSubscribeToRuns");
function createSearchQueryForListRuns(query) {
  const searchParams = new URLSearchParams();
  if (query) {
    if (query.status) {
      searchParams.append("filter[status]", Array.isArray(query.status) ? query.status.join(",") : query.status);
    }
    if (query.taskIdentifier) {
      searchParams.append("filter[taskIdentifier]", Array.isArray(query.taskIdentifier) ? query.taskIdentifier.join(",") : query.taskIdentifier);
    }
    if (query.version) {
      searchParams.append("filter[version]", Array.isArray(query.version) ? query.version.join(",") : query.version);
    }
    if (query.bulkAction) {
      searchParams.append("filter[bulkAction]", query.bulkAction);
    }
    if (query.tag) {
      searchParams.append("filter[tag]", Array.isArray(query.tag) ? query.tag.join(",") : query.tag);
    }
    if (query.schedule) {
      searchParams.append("filter[schedule]", query.schedule);
    }
    if (typeof query.isTest === "boolean") {
      searchParams.append("filter[isTest]", String(query.isTest));
    }
    if (query.from) {
      searchParams.append("filter[createdAt][from]", query.from instanceof Date ? query.from.getTime().toString() : query.from.toString());
    }
    if (query.to) {
      searchParams.append("filter[createdAt][to]", query.to instanceof Date ? query.to.getTime().toString() : query.to.toString());
    }
    if (query.period) {
      searchParams.append("filter[createdAt][period]", query.period);
    }
    if (query.batch) {
      searchParams.append("filter[batch]", query.batch);
    }
    if (query.queue) {
      searchParams.append("filter[queue]", Array.isArray(query.queue) ? query.queue.map((q) => queueNameFromQueueTypeName(q)).join(",") : queueNameFromQueueTypeName(query.queue));
    }
    if (query.machine) {
      searchParams.append("filter[machine]", Array.isArray(query.machine) ? query.machine.join(",") : query.machine);
    }
  }
  return searchParams;
}
__name(createSearchQueryForListRuns, "createSearchQueryForListRuns");
function queueNameFromQueueTypeName(queue2) {
  if (queue2.type === "task") {
    return `task/${queue2.name}`;
  }
  return queue2.name;
}
__name(queueNameFromQueueTypeName, "queueNameFromQueueTypeName");
function createSearchQueryForListWaitpointTokens(query) {
  const searchParams = new URLSearchParams();
  if (query) {
    if (query.status) {
      searchParams.append("filter[status]", Array.isArray(query.status) ? query.status.join(",") : query.status);
    }
    if (query.idempotencyKey) {
      searchParams.append("filter[idempotencyKey]", query.idempotencyKey);
    }
    if (query.tags) {
      searchParams.append("filter[tags]", Array.isArray(query.tags) ? query.tags.join(",") : query.tags);
    }
    if (query.period) {
      searchParams.append("filter[createdAt][period]", query.period);
    }
    if (query.from) {
      searchParams.append("filter[createdAt][from]", query.from instanceof Date ? query.from.getTime().toString() : query.from.toString());
    }
    if (query.to) {
      searchParams.append("filter[createdAt][to]", query.to instanceof Date ? query.to.getTime().toString() : query.to.toString());
    }
  }
  return searchParams;
}
__name(createSearchQueryForListWaitpointTokens, "createSearchQueryForListWaitpointTokens");
function mergeRequestOptions(defaultOptions, options) {
  if (!options) {
    return defaultOptions;
  }
  return {
    ...defaultOptions,
    ...options,
    retry: {
      ...defaultOptions.retry,
      ...options.retry
    }
  };
}
__name(mergeRequestOptions, "mergeRequestOptions");

// node_modules/@trigger.dev/core/dist/esm/v3/apiClient/types.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/runtime-api.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/runtime/index.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/runtime/noopRuntimeManager.js
init_esm();
var NoopRuntimeManager = class {
  static {
    __name(this, "NoopRuntimeManager");
  }
  disable() {
  }
  waitForWaitpoint(params) {
    return Promise.resolve({
      ok: true
    });
  }
  waitForTask(params) {
    return Promise.resolve({
      ok: false,
      id: params.id,
      error: {
        type: "INTERNAL_ERROR",
        code: TaskRunErrorCodes.CONFIGURED_INCORRECTLY
      }
    });
  }
  waitForBatch(params) {
    return Promise.resolve({
      id: params.id,
      items: []
    });
  }
};

// node_modules/@trigger.dev/core/dist/esm/v3/usage-api.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/usage/api.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/usage/noopUsageManager.js
init_esm();
var NoopUsageManager = class {
  static {
    __name(this, "NoopUsageManager");
  }
  disable() {
  }
  async flush() {
  }
  start() {
    return {
      sample: /* @__PURE__ */ __name(() => ({ cpuTime: 0, wallTime: 0 }), "sample")
    };
  }
  stop(measurement) {
    return measurement.sample();
  }
  pauseAsync(cb) {
    return cb();
  }
  sample() {
    return void 0;
  }
  reset() {
  }
  getInitialState() {
    return {
      cpuTime: 0,
      costInCents: 0
    };
  }
};

// node_modules/@trigger.dev/core/dist/esm/v3/usage/api.js
var API_NAME10 = "usage";
var NOOP_USAGE_MANAGER = new NoopUsageManager();
var UsageAPI = class _UsageAPI {
  static {
    __name(this, "UsageAPI");
  }
  static _instance;
  constructor() {
  }
  static getInstance() {
    if (!this._instance) {
      this._instance = new _UsageAPI();
    }
    return this._instance;
  }
  setGlobalUsageManager(manager) {
    return registerGlobal(API_NAME10, manager);
  }
  disable() {
    this.#getUsageManager().disable();
    unregisterGlobal(API_NAME10);
  }
  start() {
    return this.#getUsageManager().start();
  }
  stop(measurement) {
    return this.#getUsageManager().stop(measurement);
  }
  pauseAsync(cb) {
    return this.#getUsageManager().pauseAsync(cb);
  }
  sample() {
    return this.#getUsageManager().sample();
  }
  flush() {
    return this.#getUsageManager().flush();
  }
  reset() {
    this.#getUsageManager().reset();
    this.disable();
  }
  getInitialState() {
    return this.#getUsageManager().getInitialState();
  }
  #getUsageManager() {
    return getGlobal(API_NAME10) ?? NOOP_USAGE_MANAGER;
  }
};

// node_modules/@trigger.dev/core/dist/esm/v3/usage-api.js
var usage = UsageAPI.getInstance();

// node_modules/@trigger.dev/core/dist/esm/v3/runtime/index.js
var API_NAME11 = "runtime";
var NOOP_RUNTIME_MANAGER = new NoopRuntimeManager();
var RuntimeAPI = class _RuntimeAPI {
  static {
    __name(this, "RuntimeAPI");
  }
  static _instance;
  constructor() {
  }
  static getInstance() {
    if (!this._instance) {
      this._instance = new _RuntimeAPI();
    }
    return this._instance;
  }
  waitUntil(waitpointFriendlyId, finishDate) {
    return usage.pauseAsync(() => this.#getRuntimeManager().waitForWaitpoint({ waitpointFriendlyId, finishDate }));
  }
  waitForTask(params) {
    return usage.pauseAsync(() => this.#getRuntimeManager().waitForTask(params));
  }
  waitForToken(waitpointFriendlyId) {
    return usage.pauseAsync(() => this.#getRuntimeManager().waitForWaitpoint({ waitpointFriendlyId }));
  }
  waitForBatch(params) {
    return usage.pauseAsync(() => this.#getRuntimeManager().waitForBatch(params));
  }
  setGlobalRuntimeManager(runtimeManager) {
    return registerGlobal(API_NAME11, runtimeManager);
  }
  disable() {
    this.#getRuntimeManager().disable();
    unregisterGlobal(API_NAME11);
  }
  #getRuntimeManager() {
    return getGlobal(API_NAME11) ?? NOOP_RUNTIME_MANAGER;
  }
};

// node_modules/@trigger.dev/core/dist/esm/v3/runtime-api.js
var runtime = RuntimeAPI.getInstance();

// node_modules/@trigger.dev/core/dist/esm/v3/trace-context-api.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/traceContext/api.js
init_esm();
init_esm2();
var API_NAME12 = "trace-context";
var NoopTraceContextManager = class {
  static {
    __name(this, "NoopTraceContextManager");
  }
  getTraceContext() {
    return {};
  }
  reset() {
  }
  getExternalTraceContext() {
    return void 0;
  }
  extractContext() {
    return context.active();
  }
  withExternalTrace(fn) {
    return fn();
  }
};
var NOOP_TRACE_CONTEXT_MANAGER = new NoopTraceContextManager();
var TraceContextAPI = class _TraceContextAPI {
  static {
    __name(this, "TraceContextAPI");
  }
  static _instance;
  constructor() {
  }
  static getInstance() {
    if (!this._instance) {
      this._instance = new _TraceContextAPI();
    }
    return this._instance;
  }
  setGlobalManager(manager) {
    return registerGlobal(API_NAME12, manager);
  }
  disable() {
    unregisterGlobal(API_NAME12);
  }
  reset() {
    this.#getManager().reset();
    this.disable();
  }
  getTraceContext() {
    return this.#getManager().getTraceContext();
  }
  getExternalTraceContext() {
    return this.#getManager().getExternalTraceContext();
  }
  extractContext() {
    return this.#getManager().extractContext();
  }
  withExternalTrace(fn) {
    return this.#getManager().withExternalTrace(fn);
  }
  #getManager() {
    return getGlobal(API_NAME12) ?? NOOP_TRACE_CONTEXT_MANAGER;
  }
};

// node_modules/@trigger.dev/core/dist/esm/v3/trace-context-api.js
var traceContext = TraceContextAPI.getInstance();

// node_modules/@trigger.dev/core/dist/esm/v3/run-metadata-api.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/runMetadata/index.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/runMetadata/noopManager.js
init_esm();
var NoopRunMetadataManager = class {
  static {
    __name(this, "NoopRunMetadataManager");
  }
  append(key, value) {
    throw new Error("Method not implemented.");
  }
  remove(key, value) {
    throw new Error("Method not implemented.");
  }
  increment(key, value) {
    throw new Error("Method not implemented.");
  }
  decrement(key, value) {
    throw new Error("Method not implemented.");
  }
  stream(key, value) {
    throw new Error("Method not implemented.");
  }
  fetchStream(key, signal) {
    throw new Error("Method not implemented.");
  }
  flush(requestOptions) {
    throw new Error("Method not implemented.");
  }
  refresh(requestOptions) {
    throw new Error("Method not implemented.");
  }
  enterWithMetadata(metadata2) {
  }
  current() {
    throw new Error("Method not implemented.");
  }
  getKey(key) {
    throw new Error("Method not implemented.");
  }
  set(key, value) {
    throw new Error("Method not implemented.");
  }
  del(key) {
    throw new Error("Method not implemented.");
  }
  update(metadata2) {
    throw new Error("Method not implemented.");
  }
  get parent() {
    const self = this;
    const parentUpdater = {
      append: /* @__PURE__ */ __name(() => parentUpdater, "append"),
      set: /* @__PURE__ */ __name(() => parentUpdater, "set"),
      del: /* @__PURE__ */ __name(() => parentUpdater, "del"),
      increment: /* @__PURE__ */ __name(() => parentUpdater, "increment"),
      decrement: /* @__PURE__ */ __name(() => parentUpdater, "decrement"),
      remove: /* @__PURE__ */ __name(() => parentUpdater, "remove"),
      stream: /* @__PURE__ */ __name(() => Promise.resolve({
        [Symbol.asyncIterator]: () => ({
          next: /* @__PURE__ */ __name(() => Promise.resolve({ done: true, value: void 0 }), "next")
        })
      }), "stream"),
      update: /* @__PURE__ */ __name(() => parentUpdater, "update")
    };
    return parentUpdater;
  }
  get root() {
    const self = this;
    const rootUpdater = {
      append: /* @__PURE__ */ __name(() => rootUpdater, "append"),
      set: /* @__PURE__ */ __name(() => rootUpdater, "set"),
      del: /* @__PURE__ */ __name(() => rootUpdater, "del"),
      increment: /* @__PURE__ */ __name(() => rootUpdater, "increment"),
      decrement: /* @__PURE__ */ __name(() => rootUpdater, "decrement"),
      remove: /* @__PURE__ */ __name(() => rootUpdater, "remove"),
      stream: /* @__PURE__ */ __name(() => Promise.resolve({
        [Symbol.asyncIterator]: () => ({
          next: /* @__PURE__ */ __name(() => Promise.resolve({ done: true, value: void 0 }), "next")
        })
      }), "stream"),
      update: /* @__PURE__ */ __name(() => rootUpdater, "update")
    };
    return rootUpdater;
  }
};

// node_modules/@trigger.dev/core/dist/esm/v3/runMetadata/index.js
var API_NAME13 = "run-metadata";
var NOOP_MANAGER = new NoopRunMetadataManager();
var RunMetadataAPI = class _RunMetadataAPI {
  static {
    __name(this, "RunMetadataAPI");
  }
  static _instance;
  constructor() {
  }
  static getInstance() {
    if (!this._instance) {
      this._instance = new _RunMetadataAPI();
    }
    return this._instance;
  }
  setGlobalManager(manager) {
    return registerGlobal(API_NAME13, manager);
  }
  #getManager() {
    return getGlobal(API_NAME13) ?? NOOP_MANAGER;
  }
  enterWithMetadata(metadata2) {
    this.#getManager().enterWithMetadata(metadata2);
  }
  current() {
    return this.#getManager().current();
  }
  getKey(key) {
    return this.#getManager().getKey(key);
  }
  set(key, value) {
    this.#getManager().set(key, value);
    return this;
  }
  del(key) {
    this.#getManager().del(key);
    return this;
  }
  increment(key, value) {
    this.#getManager().increment(key, value);
    return this;
  }
  decrement(key, value) {
    this.#getManager().decrement(key, value);
    return this;
  }
  append(key, value) {
    this.#getManager().append(key, value);
    return this;
  }
  remove(key, value) {
    this.#getManager().remove(key, value);
    return this;
  }
  update(metadata2) {
    this.#getManager().update(metadata2);
    return this;
  }
  stream(key, value, signal) {
    return this.#getManager().stream(key, value, signal);
  }
  fetchStream(key, signal) {
    return this.#getManager().fetchStream(key, signal);
  }
  flush(requestOptions) {
    return this.#getManager().flush(requestOptions);
  }
  refresh(requestOptions) {
    return this.#getManager().refresh(requestOptions);
  }
  get parent() {
    return this.#getManager().parent;
  }
  get root() {
    return this.#getManager().root;
  }
};

// node_modules/@trigger.dev/core/dist/esm/v3/runMetadata/types.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/runMetadata/operations.js
init_esm();
var import_path2 = __toESM(require_lib(), 1);

// node_modules/dequal/dist/index.mjs
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/run-metadata-api.js
var runMetadata = RunMetadataAPI.getInstance();

// node_modules/@trigger.dev/core/dist/esm/v3/wait-until-api.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/waitUntil/index.js
init_esm();
var API_NAME14 = "wait-until";
var NoopManager = class {
  static {
    __name(this, "NoopManager");
  }
  register(promise) {
  }
  blockUntilSettled(timeout3) {
    return Promise.resolve();
  }
  requiresResolving() {
    return false;
  }
};
var NOOP_MANAGER2 = new NoopManager();
var WaitUntilAPI = class _WaitUntilAPI {
  static {
    __name(this, "WaitUntilAPI");
  }
  static _instance;
  constructor() {
  }
  static getInstance() {
    if (!this._instance) {
      this._instance = new _WaitUntilAPI();
    }
    return this._instance;
  }
  setGlobalManager(manager) {
    return registerGlobal(API_NAME14, manager);
  }
  #getManager() {
    return getGlobal(API_NAME14) ?? NOOP_MANAGER2;
  }
  register(promise) {
    return this.#getManager().register(promise);
  }
  blockUntilSettled(timeout3) {
    return this.#getManager().blockUntilSettled(timeout3);
  }
  requiresResolving() {
    return this.#getManager().requiresResolving();
  }
};

// node_modules/@trigger.dev/core/dist/esm/v3/wait-until-api.js
var waitUntil = WaitUntilAPI.getInstance();

// node_modules/@trigger.dev/core/dist/esm/v3/timeout-api.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/timeout/api.js
init_esm();
var API_NAME15 = "timeout";
var NoopTimeoutManager = class {
  static {
    __name(this, "NoopTimeoutManager");
  }
  abortAfterTimeout(timeoutInSeconds) {
    return new AbortController();
  }
  reset() {
  }
};
var NOOP_TIMEOUT_MANAGER = new NoopTimeoutManager();
var TimeoutAPI = class _TimeoutAPI {
  static {
    __name(this, "TimeoutAPI");
  }
  static _instance;
  constructor() {
  }
  static getInstance() {
    if (!this._instance) {
      this._instance = new _TimeoutAPI();
    }
    return this._instance;
  }
  get signal() {
    return this.#getManager().signal;
  }
  abortAfterTimeout(timeoutInSeconds) {
    return this.#getManager().abortAfterTimeout(timeoutInSeconds);
  }
  setGlobalManager(manager) {
    return registerGlobal(API_NAME15, manager);
  }
  disable() {
    unregisterGlobal(API_NAME15);
  }
  reset() {
    this.#getManager().reset();
    this.disable();
  }
  #getManager() {
    return getGlobal(API_NAME15) ?? NOOP_TIMEOUT_MANAGER;
  }
};

// node_modules/@trigger.dev/core/dist/esm/v3/timeout-api.js
var timeout = TimeoutAPI.getInstance();

// node_modules/@trigger.dev/core/dist/esm/v3/run-timeline-metrics-api.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/runTimelineMetrics/index.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/runTimelineMetrics/runTimelineMetricsManager.js
init_esm();
var NoopRunTimelineMetricsManager = class {
  static {
    __name(this, "NoopRunTimelineMetricsManager");
  }
  registerMetric(metric) {
  }
  getMetrics() {
    return [];
  }
};

// node_modules/@trigger.dev/core/dist/esm/v3/runTimelineMetrics/index.js
var API_NAME16 = "run-timeline-metrics";
var NOOP_MANAGER3 = new NoopRunTimelineMetricsManager();
var RunTimelineMetricsAPI = class _RunTimelineMetricsAPI {
  static {
    __name(this, "RunTimelineMetricsAPI");
  }
  static _instance;
  constructor() {
  }
  static getInstance() {
    if (!this._instance) {
      this._instance = new _RunTimelineMetricsAPI();
    }
    return this._instance;
  }
  registerMetric(metric) {
    this.#getManager().registerMetric(metric);
  }
  getMetrics() {
    return this.#getManager().getMetrics();
  }
  /**
   * Measures the execution time of an async function and registers it as a metric
   * @param metricName The name of the metric
   * @param eventName The event name
   * @param attributesOrCallback Optional attributes or the callback function
   * @param callbackFn The async function to measure (if attributes were provided)
   * @returns The result of the callback function
   */
  async measureMetric(metricName, eventName, attributesOrCallback, callbackFn) {
    let attributes = {};
    let callback;
    if (typeof attributesOrCallback === "function") {
      callback = attributesOrCallback;
    } else {
      attributes = attributesOrCallback || {};
      if (!callbackFn) {
        throw new Error("Callback function is required when attributes are provided");
      }
      callback = callbackFn;
    }
    const startTime = Date.now();
    try {
      const result = await callback();
      const duration = Date.now() - startTime;
      this.registerMetric({
        name: metricName,
        event: eventName,
        attributes: {
          ...attributes,
          duration
        },
        timestamp: startTime
      });
      return result;
    } catch (error) {
      const duration = Date.now() - startTime;
      this.registerMetric({
        name: metricName,
        event: eventName,
        attributes: {
          ...attributes,
          duration,
          error: error instanceof Error ? error.message : String(error),
          status: "failed"
        },
        timestamp: startTime
      });
      throw error;
    }
  }
  convertMetricsToSpanEvents() {
    const metrics2 = this.getMetrics();
    const spanEvents = metrics2.map((metric) => {
      return {
        name: metric.name,
        startTime: metric.timestamp,
        attributes: {
          ...metric.attributes,
          event: metric.event
        }
      };
    });
    return spanEvents;
  }
  convertMetricsToSpanAttributes() {
    const metrics2 = this.getMetrics();
    if (metrics2.length === 0) {
      return {};
    }
    const metricsByName = metrics2.reduce((acc, metric) => {
      if (!acc[metric.name]) {
        acc[metric.name] = [];
      }
      acc[metric.name].push(metric);
      return acc;
    }, {});
    const reducedMetrics = metrics2.reduce((acc, metric) => {
      acc[metric.event] = {
        name: metric.name,
        timestamp: metric.timestamp,
        event: metric.event,
        ...flattenAttributes(metric.attributes, "attributes")
      };
      return acc;
    }, {});
    const metricEventRollups = {};
    for (const [metricName, metricEvents] of Object.entries(metricsByName)) {
      if (metricEvents.length === 0)
        continue;
      const sortedEvents = [...metricEvents].sort((a2, b2) => a2.timestamp - b2.timestamp);
      const firstTimestamp = sortedEvents[0].timestamp;
      const lastEvent = sortedEvents[sortedEvents.length - 1];
      const lastEventDuration = lastEvent.attributes?.duration ?? 0;
      const lastEventEndTime = lastEvent.timestamp + lastEventDuration;
      const duration = lastEventEndTime - firstTimestamp;
      const timestamp = firstTimestamp;
      metricEventRollups[metricName] = {
        name: metricName,
        duration,
        timestamp
      };
    }
    return {
      ...flattenAttributes(reducedMetrics, SemanticInternalAttributes.METRIC_EVENTS),
      ...flattenAttributes(metricEventRollups, SemanticInternalAttributes.METRIC_EVENTS)
    };
  }
  setGlobalManager(manager) {
    return registerGlobal(API_NAME16, manager);
  }
  #getManager() {
    return getGlobal(API_NAME16) ?? NOOP_MANAGER3;
  }
};

// node_modules/@trigger.dev/core/dist/esm/v3/run-timeline-metrics-api.js
var runTimelineMetrics = RunTimelineMetricsAPI.getInstance();

// node_modules/@trigger.dev/core/dist/esm/v3/lifecycle-hooks-api.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/lifecycleHooks/index.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/lifecycleHooks/manager.js
init_esm();
var NoopLifecycleHooksManager = class {
  static {
    __name(this, "NoopLifecycleHooksManager");
  }
  registerOnCancelHookListener(listener) {
  }
  async callOnCancelHookListeners() {
  }
  registerGlobalCancelHook(hook) {
  }
  registerTaskCancelHook(taskId, hook) {
  }
  getTaskCancelHook(taskId) {
    return void 0;
  }
  getGlobalCancelHooks() {
    return [];
  }
  registerOnWaitHookListener(listener) {
  }
  async callOnWaitHookListeners(wait2) {
  }
  registerOnResumeHookListener(listener) {
  }
  async callOnResumeHookListeners(wait2) {
  }
  registerGlobalInitHook(hook) {
  }
  registerTaskInitHook(taskId, hook) {
  }
  getTaskInitHook(taskId) {
    return void 0;
  }
  getGlobalInitHooks() {
    return [];
  }
  registerGlobalStartHook(hook) {
  }
  registerTaskStartHook(taskId, hook) {
  }
  getTaskStartHook(taskId) {
    return void 0;
  }
  getGlobalStartHooks() {
    return [];
  }
  registerGlobalFailureHook(hook) {
  }
  registerTaskFailureHook(taskId, hook) {
  }
  getTaskFailureHook(taskId) {
    return void 0;
  }
  getGlobalFailureHooks() {
    return [];
  }
  registerGlobalSuccessHook(hook) {
  }
  registerTaskSuccessHook(taskId, hook) {
  }
  getTaskSuccessHook(taskId) {
    return void 0;
  }
  getGlobalSuccessHooks() {
    return [];
  }
  registerGlobalCompleteHook(hook) {
  }
  registerTaskCompleteHook(taskId, hook) {
  }
  getTaskCompleteHook(taskId) {
    return void 0;
  }
  getGlobalCompleteHooks() {
    return [];
  }
  registerGlobalWaitHook(hook) {
  }
  registerTaskWaitHook(taskId, hook) {
  }
  getTaskWaitHook(taskId) {
    return void 0;
  }
  getGlobalWaitHooks() {
    return [];
  }
  registerGlobalResumeHook(hook) {
  }
  registerTaskResumeHook(taskId, hook) {
  }
  getTaskResumeHook(taskId) {
    return void 0;
  }
  getGlobalResumeHooks() {
    return [];
  }
  registerGlobalCatchErrorHook() {
  }
  registerTaskCatchErrorHook() {
  }
  getTaskCatchErrorHook() {
    return void 0;
  }
  getGlobalCatchErrorHooks() {
    return [];
  }
  registerGlobalMiddlewareHook() {
  }
  registerTaskMiddlewareHook() {
  }
  getTaskMiddlewareHook() {
    return void 0;
  }
  getGlobalMiddlewareHooks() {
    return [];
  }
  registerGlobalCleanupHook(hook) {
  }
  registerTaskCleanupHook(taskId, hook) {
  }
  getTaskCleanupHook(taskId) {
    return void 0;
  }
  getGlobalCleanupHooks() {
    return [];
  }
};

// node_modules/@trigger.dev/core/dist/esm/v3/lifecycleHooks/index.js
var API_NAME17 = "lifecycle-hooks";
var NOOP_LIFECYCLE_HOOKS_MANAGER = new NoopLifecycleHooksManager();
var LifecycleHooksAPI = class _LifecycleHooksAPI {
  static {
    __name(this, "LifecycleHooksAPI");
  }
  static _instance;
  constructor() {
  }
  static getInstance() {
    if (!this._instance) {
      this._instance = new _LifecycleHooksAPI();
    }
    return this._instance;
  }
  setGlobalLifecycleHooksManager(lifecycleHooksManager) {
    return registerGlobal(API_NAME17, lifecycleHooksManager);
  }
  disable() {
    unregisterGlobal(API_NAME17);
  }
  registerGlobalInitHook(hook) {
    this.#getManager().registerGlobalInitHook(hook);
  }
  registerTaskInitHook(taskId, hook) {
    this.#getManager().registerTaskInitHook(taskId, hook);
  }
  getTaskInitHook(taskId) {
    return this.#getManager().getTaskInitHook(taskId);
  }
  getGlobalInitHooks() {
    return this.#getManager().getGlobalInitHooks();
  }
  registerTaskStartHook(taskId, hook) {
    this.#getManager().registerTaskStartHook(taskId, hook);
  }
  registerGlobalStartHook(hook) {
    this.#getManager().registerGlobalStartHook(hook);
  }
  getTaskStartHook(taskId) {
    return this.#getManager().getTaskStartHook(taskId);
  }
  getGlobalStartHooks() {
    return this.#getManager().getGlobalStartHooks();
  }
  registerGlobalFailureHook(hook) {
    this.#getManager().registerGlobalFailureHook(hook);
  }
  registerTaskFailureHook(taskId, hook) {
    this.#getManager().registerTaskFailureHook(taskId, hook);
  }
  getTaskFailureHook(taskId) {
    return this.#getManager().getTaskFailureHook(taskId);
  }
  getGlobalFailureHooks() {
    return this.#getManager().getGlobalFailureHooks();
  }
  registerGlobalSuccessHook(hook) {
    this.#getManager().registerGlobalSuccessHook(hook);
  }
  registerTaskSuccessHook(taskId, hook) {
    this.#getManager().registerTaskSuccessHook(taskId, hook);
  }
  getTaskSuccessHook(taskId) {
    return this.#getManager().getTaskSuccessHook(taskId);
  }
  getGlobalSuccessHooks() {
    return this.#getManager().getGlobalSuccessHooks();
  }
  registerGlobalCompleteHook(hook) {
    this.#getManager().registerGlobalCompleteHook(hook);
  }
  registerTaskCompleteHook(taskId, hook) {
    this.#getManager().registerTaskCompleteHook(taskId, hook);
  }
  getTaskCompleteHook(taskId) {
    return this.#getManager().getTaskCompleteHook(taskId);
  }
  getGlobalCompleteHooks() {
    return this.#getManager().getGlobalCompleteHooks();
  }
  registerGlobalWaitHook(hook) {
    this.#getManager().registerGlobalWaitHook(hook);
  }
  registerTaskWaitHook(taskId, hook) {
    this.#getManager().registerTaskWaitHook(taskId, hook);
  }
  getTaskWaitHook(taskId) {
    return this.#getManager().getTaskWaitHook(taskId);
  }
  getGlobalWaitHooks() {
    return this.#getManager().getGlobalWaitHooks();
  }
  registerGlobalResumeHook(hook) {
    this.#getManager().registerGlobalResumeHook(hook);
  }
  registerTaskResumeHook(taskId, hook) {
    this.#getManager().registerTaskResumeHook(taskId, hook);
  }
  getTaskResumeHook(taskId) {
    return this.#getManager().getTaskResumeHook(taskId);
  }
  getGlobalResumeHooks() {
    return this.#getManager().getGlobalResumeHooks();
  }
  registerGlobalCatchErrorHook(hook) {
    this.#getManager().registerGlobalCatchErrorHook(hook);
  }
  registerTaskCatchErrorHook(taskId, hook) {
    this.#getManager().registerTaskCatchErrorHook(taskId, hook);
  }
  getTaskCatchErrorHook(taskId) {
    return this.#getManager().getTaskCatchErrorHook(taskId);
  }
  getGlobalCatchErrorHooks() {
    return this.#getManager().getGlobalCatchErrorHooks();
  }
  registerGlobalMiddlewareHook(hook) {
    this.#getManager().registerGlobalMiddlewareHook(hook);
  }
  registerTaskMiddlewareHook(taskId, hook) {
    this.#getManager().registerTaskMiddlewareHook(taskId, hook);
  }
  getTaskMiddlewareHook(taskId) {
    return this.#getManager().getTaskMiddlewareHook(taskId);
  }
  getGlobalMiddlewareHooks() {
    return this.#getManager().getGlobalMiddlewareHooks();
  }
  registerGlobalCleanupHook(hook) {
    this.#getManager().registerGlobalCleanupHook(hook);
  }
  registerTaskCleanupHook(taskId, hook) {
    this.#getManager().registerTaskCleanupHook(taskId, hook);
  }
  getTaskCleanupHook(taskId) {
    return this.#getManager().getTaskCleanupHook(taskId);
  }
  getGlobalCleanupHooks() {
    return this.#getManager().getGlobalCleanupHooks();
  }
  callOnWaitHookListeners(wait2) {
    return this.#getManager().callOnWaitHookListeners(wait2);
  }
  callOnResumeHookListeners(wait2) {
    return this.#getManager().callOnResumeHookListeners(wait2);
  }
  registerOnWaitHookListener(listener) {
    this.#getManager().registerOnWaitHookListener(listener);
  }
  registerOnResumeHookListener(listener) {
    this.#getManager().registerOnResumeHookListener(listener);
  }
  registerGlobalCancelHook(hook) {
    this.#getManager().registerGlobalCancelHook(hook);
  }
  registerTaskCancelHook(taskId, hook) {
    this.#getManager().registerTaskCancelHook(taskId, hook);
  }
  getTaskCancelHook(taskId) {
    return this.#getManager().getTaskCancelHook(taskId);
  }
  getGlobalCancelHooks() {
    return this.#getManager().getGlobalCancelHooks();
  }
  callOnCancelHookListeners() {
    return this.#getManager().callOnCancelHookListeners();
  }
  registerOnCancelHookListener(listener) {
    this.#getManager().registerOnCancelHookListener(listener);
  }
  #getManager() {
    return getGlobal(API_NAME17) ?? NOOP_LIFECYCLE_HOOKS_MANAGER;
  }
};

// node_modules/@trigger.dev/core/dist/esm/v3/lifecycle-hooks-api.js
var lifecycleHooks = LifecycleHooksAPI.getInstance();

// node_modules/@trigger.dev/core/dist/esm/v3/locals-api.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/locals/index.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/locals/manager.js
init_esm();
var NoopLocalsManager = class {
  static {
    __name(this, "NoopLocalsManager");
  }
  createLocal(id) {
    return {
      __type: Symbol(),
      id
    };
  }
  getLocal(key) {
    return void 0;
  }
  setLocal(key, value) {
  }
};

// node_modules/@trigger.dev/core/dist/esm/v3/locals/index.js
var API_NAME18 = "locals";
var NOOP_LOCALS_MANAGER = new NoopLocalsManager();
var LocalsAPI = class _LocalsAPI {
  static {
    __name(this, "LocalsAPI");
  }
  static _instance;
  constructor() {
  }
  static getInstance() {
    if (!this._instance) {
      this._instance = new _LocalsAPI();
    }
    return this._instance;
  }
  setGlobalLocalsManager(localsManager) {
    return registerGlobal(API_NAME18, localsManager);
  }
  disable() {
    unregisterGlobal(API_NAME18);
  }
  createLocal(id) {
    return this.#getManager().createLocal(id);
  }
  getLocal(key) {
    return this.#getManager().getLocal(key);
  }
  setLocal(key, value) {
    return this.#getManager().setLocal(key, value);
  }
  #getManager() {
    return getGlobal(API_NAME18) ?? NOOP_LOCALS_MANAGER;
  }
};

// node_modules/@trigger.dev/core/dist/esm/v3/locals-api.js
var localsAPI = LocalsAPI.getInstance();

// node_modules/@trigger.dev/core/dist/esm/v3/resource-catalog-api.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/resource-catalog/index.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/resource-catalog/noopResourceCatalog.js
init_esm();
var NoopResourceCatalog = class {
  static {
    __name(this, "NoopResourceCatalog");
  }
  registerTaskMetadata(task2) {
  }
  setCurrentFileContext(filePath, entryPoint) {
  }
  clearCurrentFileContext() {
  }
  updateTaskMetadata(id, updates) {
  }
  listTaskManifests() {
    return [];
  }
  getTaskManifest(id) {
    return void 0;
  }
  getTask(id) {
    return void 0;
  }
  getTaskSchema(id) {
    return void 0;
  }
  taskExists(id) {
    return false;
  }
  disable() {
  }
  registerWorkerManifest(workerManifest) {
  }
  registerQueueMetadata(queue2) {
  }
  listQueueManifests() {
    return [];
  }
};

// node_modules/@trigger.dev/core/dist/esm/v3/resource-catalog/index.js
var API_NAME19 = "resource-catalog";
var NOOP_RESOURCE_CATALOG = new NoopResourceCatalog();
var ResourceCatalogAPI = class _ResourceCatalogAPI {
  static {
    __name(this, "ResourceCatalogAPI");
  }
  static _instance;
  constructor() {
  }
  static getInstance() {
    if (!this._instance) {
      this._instance = new _ResourceCatalogAPI();
    }
    return this._instance;
  }
  setGlobalResourceCatalog(resourceCatalog2) {
    return registerGlobal(API_NAME19, resourceCatalog2);
  }
  disable() {
    unregisterGlobal(API_NAME19);
  }
  registerQueueMetadata(queue2) {
    this.#getCatalog().registerQueueMetadata(queue2);
  }
  registerTaskMetadata(task2) {
    this.#getCatalog().registerTaskMetadata(task2);
  }
  updateTaskMetadata(id, updates) {
    this.#getCatalog().updateTaskMetadata(id, updates);
  }
  setCurrentFileContext(filePath, entryPoint) {
    this.#getCatalog().setCurrentFileContext(filePath, entryPoint);
  }
  clearCurrentFileContext() {
    this.#getCatalog().clearCurrentFileContext();
  }
  registerWorkerManifest(workerManifest) {
    this.#getCatalog().registerWorkerManifest(workerManifest);
  }
  listTaskManifests() {
    return this.#getCatalog().listTaskManifests();
  }
  getTaskManifest(id) {
    return this.#getCatalog().getTaskManifest(id);
  }
  getTask(id) {
    return this.#getCatalog().getTask(id);
  }
  getTaskSchema(id) {
    return this.#getCatalog().getTaskSchema(id);
  }
  taskExists(id) {
    return this.#getCatalog().taskExists(id);
  }
  listQueueManifests() {
    return this.#getCatalog().listQueueManifests();
  }
  #getCatalog() {
    return getGlobal(API_NAME19) ?? NOOP_RESOURCE_CATALOG;
  }
};

// node_modules/@trigger.dev/core/dist/esm/v3/resource-catalog-api.js
var resourceCatalog = ResourceCatalogAPI.getInstance();

// node_modules/@trigger.dev/core/dist/esm/v3/types/index.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/types/utils.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/types/tasks.js
init_esm();
var SubtaskUnwrapError = class extends Error {
  static {
    __name(this, "SubtaskUnwrapError");
  }
  taskId;
  runId;
  cause;
  constructor(taskId, runId, subtaskError) {
    if (subtaskError instanceof Error) {
      super(`Error in ${taskId}: ${subtaskError.message}`);
      this.cause = subtaskError;
      this.name = "SubtaskUnwrapError";
    } else {
      super(`Error in ${taskId}`);
      this.name = "SubtaskUnwrapError";
      this.cause = subtaskError;
    }
    this.taskId = taskId;
    this.runId = runId;
  }
};
var TaskRunPromise = class extends Promise {
  static {
    __name(this, "TaskRunPromise");
  }
  taskId;
  constructor(executor, taskId) {
    super(executor);
    this.taskId = taskId;
  }
  unwrap() {
    return this.then((result) => {
      if (result.ok) {
        return result.output;
      } else {
        throw new SubtaskUnwrapError(this.taskId, result.id, result.error);
      }
    });
  }
};

// node_modules/@trigger.dev/core/dist/esm/v3/types/idempotencyKeys.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/types/tools.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/types/queues.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/types/jsonSchema.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/idempotencyKeys.js
init_esm();
function isIdempotencyKey(value) {
  return typeof value === "string" && value.length === 64;
}
__name(isIdempotencyKey, "isIdempotencyKey");
function flattenIdempotencyKey(idempotencyKey) {
  if (!idempotencyKey) {
    return;
  }
  if (Array.isArray(idempotencyKey)) {
    if (idempotencyKey.some((i2) => i2 === void 0)) {
      return;
    }
    return idempotencyKey.flatMap((key) => {
      const k = flattenIdempotencyKey(key);
      if (!k)
        return [];
      return [k];
    });
  }
  return idempotencyKey;
}
__name(flattenIdempotencyKey, "flattenIdempotencyKey");
async function makeIdempotencyKey(idempotencyKey) {
  if (!idempotencyKey) {
    return;
  }
  if (isIdempotencyKey(idempotencyKey)) {
    return idempotencyKey;
  }
  return await createIdempotencyKey(idempotencyKey, { scope: "global" });
}
__name(makeIdempotencyKey, "makeIdempotencyKey");
async function createIdempotencyKey(key, options) {
  const idempotencyKey = await generateIdempotencyKey([...Array.isArray(key) ? key : [key]].concat(injectScope(options?.scope ?? "run")));
  return idempotencyKey;
}
__name(createIdempotencyKey, "createIdempotencyKey");
function injectScope(scope) {
  switch (scope) {
    case "run": {
      if (taskContext?.ctx) {
        return [taskContext.ctx.run.id];
      }
      break;
    }
    case "attempt": {
      if (taskContext?.ctx) {
        return [taskContext.ctx.run.id, taskContext.ctx.attempt.number.toString()];
      }
      break;
    }
  }
  return [];
}
__name(injectScope, "injectScope");
async function generateIdempotencyKey(keyMaterial) {
  return await digestSHA256(keyMaterial.join("-"));
}
__name(generateIdempotencyKey, "generateIdempotencyKey");

// node_modules/@trigger.dev/core/dist/esm/v3/tryCatch.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/utils/durations.js
init_esm();
var import_humanize_duration = __toESM(require_humanize_duration(), 1);

// node_modules/@trigger.dev/core/dist/esm/eventFilterMatches.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/utils/omit.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/utils/imageRef.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/utils/interval.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/config.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/types/schemas.js
init_esm();

// node_modules/@trigger.dev/sdk/dist/esm/v3/tracer.js
init_esm();

// node_modules/@trigger.dev/core/dist/esm/v3/tracer.js
init_esm();
init_esm2();
var import_api_logs = __toESM(require_src(), 1);

// node_modules/@trigger.dev/core/dist/esm/v3/otel/utils.js
init_esm();
init_esm2();
function recordSpanException(span, error) {
  if (error instanceof Error) {
    span.recordException(sanitizeSpanError(error));
  } else if (typeof error === "string") {
    span.recordException(error.replace(/\0/g, ""));
  } else {
    span.recordException(JSON.stringify(error).replace(/\0/g, ""));
  }
  span.setStatus({ code: SpanStatusCode.ERROR });
}
__name(recordSpanException, "recordSpanException");
function sanitizeSpanError(error) {
  const sanitizedError = new Error(error.message.replace(/\0/g, ""));
  sanitizedError.name = error.name.replace(/\0/g, "");
  sanitizedError.stack = error.stack?.replace(/\0/g, "");
  return sanitizedError;
}
__name(sanitizeSpanError, "sanitizeSpanError");

// node_modules/@trigger.dev/core/dist/esm/v3/tracer.js
var TriggerTracer = class {
  static {
    __name(this, "TriggerTracer");
  }
  _config;
  constructor(_config) {
    this._config = _config;
  }
  _tracer;
  get tracer() {
    if (!this._tracer) {
      if ("tracer" in this._config)
        return this._config.tracer;
      this._tracer = trace.getTracer(this._config.name, this._config.version);
    }
    return this._tracer;
  }
  _logger;
  get logger() {
    if (!this._logger) {
      if ("logger" in this._config)
        return this._config.logger;
      this._logger = import_api_logs.logs.getLogger(this._config.name, this._config.version);
    }
    return this._logger;
  }
  startActiveSpan(name2, fn, options, ctx, signal) {
    const parentContext = ctx ?? context.active();
    const attributes = options?.attributes ?? {};
    let spanEnded = false;
    const createPartialSpanWithEvents = options?.events && options.events.length > 0;
    return this.tracer.startActiveSpan(name2, {
      ...options,
      attributes: {
        ...attributes,
        ...createPartialSpanWithEvents ? {
          [SemanticInternalAttributes.SKIP_SPAN_PARTIAL]: true
        } : {}
      },
      startTime: clock.preciseNow()
    }, parentContext, async (span) => {
      signal?.addEventListener("abort", () => {
        if (!spanEnded) {
          spanEnded = true;
          recordSpanException(span, signal.reason);
          span.end();
        }
      });
      if (taskContext.ctx && createPartialSpanWithEvents) {
        const partialSpan = this.tracer.startSpan(name2, {
          ...options,
          attributes: {
            ...attributes,
            [SemanticInternalAttributes.SPAN_PARTIAL]: true,
            [SemanticInternalAttributes.SPAN_ID]: span.spanContext().spanId
          }
        }, parentContext);
        if (options?.events) {
          for (const event of options.events) {
            partialSpan.addEvent(event.name, event.attributes, event.startTime);
          }
        }
        partialSpan.end();
      }
      if (options?.events) {
        for (const event of options.events) {
          span.addEvent(event.name, event.attributes, event.startTime);
        }
      }
      const usageMeasurement = usage.start();
      try {
        return await fn(span);
      } catch (e) {
        if (isCompleteTaskWithOutput(e)) {
          if (!spanEnded) {
            span.end(clock.preciseNow());
          }
          throw e;
        }
        if (!spanEnded) {
          if (typeof e === "string" || e instanceof Error) {
            span.recordException(e);
          }
          span.setStatus({ code: SpanStatusCode.ERROR });
        }
        throw e;
      } finally {
        if (!spanEnded) {
          spanEnded = true;
          if (taskContext.ctx) {
            const usageSample = usage.stop(usageMeasurement);
            const machine = taskContext.ctx.machine;
            span.setAttributes({
              [SemanticInternalAttributes.USAGE_DURATION_MS]: usageSample.cpuTime,
              [SemanticInternalAttributes.USAGE_COST_IN_CENTS]: machine?.centsPerMs ? usageSample.cpuTime * machine.centsPerMs : 0
            });
          }
          span.end(clock.preciseNow());
        }
      }
    });
  }
  startSpan(name2, options, ctx) {
    const parentContext = ctx ?? context.active();
    const attributes = options?.attributes ?? {};
    const span = this.tracer.startSpan(name2, options, parentContext);
    return span;
  }
};

// node_modules/@trigger.dev/sdk/dist/esm/version.js
init_esm();
var VERSION3 = "4.0.1";

// node_modules/@trigger.dev/sdk/dist/esm/v3/tracer.js
var tracer = new TriggerTracer({ name: "@trigger.dev/sdk", version: VERSION3 });

// node_modules/@trigger.dev/sdk/dist/esm/v3/wait.js
function createToken(options, requestOptions) {
  const apiClient = apiClientManager.clientOrThrow();
  const $requestOptions = mergeRequestOptions({
    tracer,
    name: "wait.createToken()",
    icon: "wait-token",
    attributes: {
      idempotencyKey: options?.idempotencyKey,
      idempotencyKeyTTL: options?.idempotencyKeyTTL,
      timeout: options?.timeout ? typeof options.timeout === "string" ? options.timeout : options.timeout.toISOString() : void 0,
      tags: options?.tags
    },
    onResponseBody: /* @__PURE__ */ __name((body, span) => {
      span.setAttribute("id", body.id);
      span.setAttribute("isCached", body.isCached);
      span.setAttribute("url", body.url);
    }, "onResponseBody")
  }, requestOptions);
  return apiClient.createWaitpointToken(options ?? {}, $requestOptions);
}
__name(createToken, "createToken");
function listTokens(params, requestOptions) {
  const apiClient = apiClientManager.clientOrThrow();
  const $requestOptions = mergeRequestOptions({
    tracer,
    name: "wait.listTokens()",
    icon: "wait-token",
    attributes: {
      ...flattenAttributes(params)
    }
  }, requestOptions);
  return apiClient.listWaitpointTokens(params, $requestOptions);
}
__name(listTokens, "listTokens");
async function retrieveToken(token, requestOptions) {
  const apiClient = apiClientManager.clientOrThrow();
  const $tokenId = typeof token === "string" ? token : token.id;
  const $requestOptions = mergeRequestOptions({
    tracer,
    name: "wait.retrieveToken()",
    icon: "wait-token",
    attributes: {
      id: $tokenId,
      ...accessoryAttributes({
        items: [
          {
            text: $tokenId,
            variant: "normal"
          }
        ],
        style: "codepath"
      })
    },
    onResponseBody: /* @__PURE__ */ __name((body, span) => {
      span.setAttribute("id", body.id);
      span.setAttribute("url", body.url);
      span.setAttribute("status", body.status);
      if (body.completedAt) {
        span.setAttribute("completedAt", body.completedAt.toISOString());
      }
      if (body.timeoutAt) {
        span.setAttribute("timeoutAt", body.timeoutAt.toISOString());
      }
      if (body.idempotencyKey) {
        span.setAttribute("idempotencyKey", body.idempotencyKey);
      }
      if (body.idempotencyKeyExpiresAt) {
        span.setAttribute("idempotencyKeyExpiresAt", body.idempotencyKeyExpiresAt.toISOString());
      }
      span.setAttribute("tags", body.tags);
      span.setAttribute("createdAt", body.createdAt.toISOString());
    }, "onResponseBody")
  }, requestOptions);
  const result = await apiClient.retrieveWaitpointToken($tokenId, $requestOptions);
  const data = result.output ? await conditionallyImportAndParsePacket({ data: result.output, dataType: result.outputType ?? "application/json" }, apiClient) : void 0;
  let error = void 0;
  let output = void 0;
  if (result.outputIsError) {
    error = new WaitpointTimeoutError(data.message);
  } else {
    output = data;
  }
  return {
    id: result.id,
    url: result.url,
    status: result.status,
    completedAt: result.completedAt,
    timeoutAt: result.timeoutAt,
    idempotencyKey: result.idempotencyKey,
    idempotencyKeyExpiresAt: result.idempotencyKeyExpiresAt,
    tags: result.tags,
    createdAt: result.createdAt,
    output,
    error
  };
}
__name(retrieveToken, "retrieveToken");
async function completeToken(token, data, requestOptions) {
  const apiClient = apiClientManager.clientOrThrow();
  const tokenId = typeof token === "string" ? token : token.id;
  const $requestOptions = mergeRequestOptions({
    tracer,
    name: "wait.completeToken()",
    icon: "wait-token",
    attributes: {
      id: tokenId
    },
    onResponseBody: /* @__PURE__ */ __name((body, span) => {
      span.setAttribute("success", body.success);
    }, "onResponseBody")
  }, requestOptions);
  return apiClient.completeWaitpointToken(tokenId, { data }, $requestOptions);
}
__name(completeToken, "completeToken");
var WaitpointTimeoutError = class extends Error {
  static {
    __name(this, "WaitpointTimeoutError");
  }
  constructor(message) {
    super(message);
    this.name = "WaitpointTimeoutError";
  }
};
var DURATION_WAIT_CHARGE_THRESHOLD_MS = 5e3;
function printWaitBelowThreshold() {
  console.warn(`Waits of ${DURATION_WAIT_CHARGE_THRESHOLD_MS / 1e3}s or less count towards compute usage.`);
}
__name(printWaitBelowThreshold, "printWaitBelowThreshold");
var ManualWaitpointPromise = class extends Promise {
  static {
    __name(this, "ManualWaitpointPromise");
  }
  constructor(executor) {
    super(executor);
  }
  unwrap() {
    return this.then((result) => {
      if (result.ok) {
        return result.output;
      } else {
        throw new WaitpointTimeoutError(result.error.message);
      }
    });
  }
};
var wait = {
  for: /* @__PURE__ */ __name(async (options) => {
    const ctx = taskContext.ctx;
    if (!ctx) {
      throw new Error("wait.forToken can only be used from inside a task.run()");
    }
    const apiClient = apiClientManager.clientOrThrow();
    const start = Date.now();
    const durationInMs = calculateDurationInMs(options);
    if (durationInMs <= DURATION_WAIT_CHARGE_THRESHOLD_MS) {
      return tracer.startActiveSpan(`wait.for()`, async (span) => {
        if (durationInMs <= 0) {
          return;
        }
        printWaitBelowThreshold();
        await new Promise((resolve) => setTimeout(resolve, durationInMs));
      }, {
        attributes: {
          [SemanticInternalAttributes.STYLE_ICON]: "wait",
          ...accessoryAttributes({
            items: [
              {
                text: nameForWaitOptions(options),
                variant: "normal"
              }
            ],
            style: "codepath"
          })
        }
      });
    }
    const date = new Date(start + durationInMs);
    const result = await apiClient.waitForDuration(ctx.run.id, {
      date,
      idempotencyKey: options.idempotencyKey,
      idempotencyKeyTTL: options.idempotencyKeyTTL
    });
    return tracer.startActiveSpan(`wait.for()`, async (span) => {
      await runtime.waitUntil(result.waitpoint.id, date);
    }, {
      attributes: {
        [SemanticInternalAttributes.STYLE_ICON]: "wait",
        [SemanticInternalAttributes.ENTITY_TYPE]: "waitpoint",
        [SemanticInternalAttributes.ENTITY_ID]: result.waitpoint.id,
        ...accessoryAttributes({
          items: [
            {
              text: nameForWaitOptions(options),
              variant: "normal"
            }
          ],
          style: "codepath"
        })
      }
    });
  }, "for"),
  until: /* @__PURE__ */ __name(async (options) => {
    const ctx = taskContext.ctx;
    if (!ctx) {
      throw new Error("wait.forToken can only be used from inside a task.run()");
    }
    const durationInMs = options.date.getTime() - Date.now();
    if (durationInMs <= DURATION_WAIT_CHARGE_THRESHOLD_MS) {
      return tracer.startActiveSpan(`wait.for()`, async (span) => {
        if (durationInMs === 0) {
          return;
        }
        if (durationInMs < 0) {
          if (options.throwIfInThePast) {
            throw new Error("Date is in the past");
          }
          return;
        }
        printWaitBelowThreshold();
        await new Promise((resolve) => setTimeout(resolve, durationInMs));
      }, {
        attributes: {
          [SemanticInternalAttributes.STYLE_ICON]: "wait",
          ...accessoryAttributes({
            items: [
              {
                text: options.date.toISOString(),
                variant: "normal"
              }
            ],
            style: "codepath"
          })
        }
      });
    }
    const apiClient = apiClientManager.clientOrThrow();
    const result = await apiClient.waitForDuration(ctx.run.id, {
      date: options.date,
      idempotencyKey: options.idempotencyKey,
      idempotencyKeyTTL: options.idempotencyKeyTTL
    });
    return tracer.startActiveSpan(`wait.until()`, async (span) => {
      if (options.throwIfInThePast && options.date < /* @__PURE__ */ new Date()) {
        throw new Error("Date is in the past");
      }
      await runtime.waitUntil(result.waitpoint.id, options.date);
    }, {
      attributes: {
        [SemanticInternalAttributes.STYLE_ICON]: "wait",
        [SemanticInternalAttributes.ENTITY_TYPE]: "waitpoint",
        [SemanticInternalAttributes.ENTITY_ID]: result.waitpoint.id,
        ...accessoryAttributes({
          items: [
            {
              text: options.date.toISOString(),
              variant: "normal"
            }
          ],
          style: "codepath"
        })
      }
    });
  }, "until"),
  createToken,
  listTokens,
  completeToken,
  retrieveToken,
  /**
   * This waits for a waitpoint token to be completed.
   * It can only be used inside a task.run() block.
   *
   * @example
   *
   * ```ts
   * const result = await wait.forToken<typeof ApprovalData>(token);
   * if (!result.ok) {
   *   // The waitpoint timed out
   *   throw result.error;
   * }
   *
   * // This will be the type ApprovalData
   * const approval = result.output;
   * ```
   *
   * @param token - The token to wait for.
   * @param options - The options for the waitpoint token.
   * @returns A promise that resolves to the result of the waitpoint. You can use `.unwrap()` to get the result and an error will throw.
   */
  forToken: /* @__PURE__ */ __name((token) => {
    return new ManualWaitpointPromise(async (resolve, reject) => {
      try {
        const ctx = taskContext.ctx;
        if (!ctx) {
          throw new Error("wait.forToken can only be used from inside a task.run()");
        }
        const apiClient = apiClientManager.clientOrThrow();
        const tokenId = typeof token === "string" ? token : token.id;
        const result = await tracer.startActiveSpan(`wait.forToken()`, async (span) => {
          const response = await apiClient.waitForWaitpointToken({
            runFriendlyId: ctx.run.id,
            waitpointFriendlyId: tokenId
          });
          if (!response.success) {
            throw new Error(`Failed to wait for wait token ${tokenId}`);
          }
          const result2 = await runtime.waitUntil(tokenId);
          const data = result2.output ? await conditionallyImportAndParsePacket({ data: result2.output, dataType: result2.outputType ?? "application/json" }, apiClient) : void 0;
          if (result2.ok) {
            return {
              ok: result2.ok,
              output: data
            };
          } else {
            const error = new WaitpointTimeoutError(data.message);
            span.recordException(error);
            span.setStatus({
              code: SpanStatusCode.ERROR
            });
            return {
              ok: result2.ok,
              error
            };
          }
        }, {
          attributes: {
            [SemanticInternalAttributes.STYLE_ICON]: "wait",
            [SemanticInternalAttributes.ENTITY_TYPE]: "waitpoint",
            [SemanticInternalAttributes.ENTITY_ID]: tokenId,
            id: tokenId,
            ...accessoryAttributes({
              items: [
                {
                  text: tokenId,
                  variant: "normal"
                }
              ],
              style: "codepath"
            })
          }
        });
        resolve(result);
      } catch (error) {
        reject(error);
      }
    });
  }, "forToken")
};
function nameForWaitOptions(options) {
  if ("seconds" in options) {
    return options.seconds === 1 ? `1 second` : `${options.seconds} seconds`;
  }
  if ("minutes" in options) {
    return options.minutes === 1 ? `1 minute` : `${options.minutes} minutes`;
  }
  if ("hours" in options) {
    return options.hours === 1 ? `1 hour` : `${options.hours} hours`;
  }
  if ("days" in options) {
    return options.days === 1 ? `1 day` : `${options.days} days`;
  }
  if ("weeks" in options) {
    return options.weeks === 1 ? `1 week` : `${options.weeks} weeks`;
  }
  if ("months" in options) {
    return options.months === 1 ? `1 month` : `${options.months} months`;
  }
  if ("years" in options) {
    return options.years === 1 ? `1 year` : `${options.years} years`;
  }
  return "NaN";
}
__name(nameForWaitOptions, "nameForWaitOptions");
function calculateDurationInMs(options) {
  if ("seconds" in options) {
    return options.seconds * 1e3;
  }
  if ("minutes" in options) {
    return options.minutes * 1e3 * 60;
  }
  if ("hours" in options) {
    return options.hours * 1e3 * 60 * 60;
  }
  if ("days" in options) {
    return options.days * 1e3 * 60 * 60 * 24;
  }
  if ("weeks" in options) {
    return options.weeks * 1e3 * 60 * 60 * 24 * 7;
  }
  if ("months" in options) {
    return options.months * 1e3 * 60 * 60 * 24 * 30;
  }
  if ("years" in options) {
    return options.years * 1e3 * 60 * 60 * 24 * 365;
  }
  throw new Error("Invalid options");
}
__name(calculateDurationInMs, "calculateDurationInMs");

// node_modules/@trigger.dev/sdk/dist/esm/v3/tasks.js
init_esm();

// node_modules/@trigger.dev/sdk/dist/esm/v3/hooks.js
init_esm();

// node_modules/@trigger.dev/sdk/dist/esm/v3/shared.js
init_esm();
init_esm2();
function createTask(params) {
  const task2 = {
    id: params.id,
    description: params.description,
    jsonSchema: params.jsonSchema,
    trigger: /* @__PURE__ */ __name(async (payload, options) => {
      return await trigger_internal("trigger()", params.id, payload, void 0, {
        queue: params.queue?.name,
        ...options
      });
    }, "trigger"),
    batchTrigger: /* @__PURE__ */ __name(async (items, options) => {
      return await batchTrigger_internal("batchTrigger()", params.id, items, options, void 0, void 0, params.queue?.name);
    }, "batchTrigger"),
    triggerAndWait: /* @__PURE__ */ __name((payload, options) => {
      return new TaskRunPromise((resolve, reject) => {
        triggerAndWait_internal("triggerAndWait()", params.id, payload, void 0, {
          queue: params.queue?.name,
          ...options
        }).then((result) => {
          resolve(result);
        }).catch((error) => {
          reject(error);
        });
      }, params.id);
    }, "triggerAndWait"),
    batchTriggerAndWait: /* @__PURE__ */ __name(async (items, options) => {
      return await batchTriggerAndWait_internal("batchTriggerAndWait()", params.id, items, void 0, options, void 0, params.queue?.name);
    }, "batchTriggerAndWait")
  };
  registerTaskLifecycleHooks(params.id, params);
  resourceCatalog.registerTaskMetadata({
    id: params.id,
    description: params.description,
    queue: params.queue,
    retry: params.retry ? { ...defaultRetryOptions, ...params.retry } : void 0,
    machine: typeof params.machine === "string" ? { preset: params.machine } : params.machine,
    maxDuration: params.maxDuration,
    payloadSchema: params.jsonSchema,
    fns: {
      run: params.run
    }
  });
  const queue2 = params.queue;
  if (queue2 && typeof queue2.name === "string") {
    resourceCatalog.registerQueueMetadata({
      name: queue2.name,
      concurrencyLimit: queue2.concurrencyLimit
    });
  }
  task2[Symbol.for("trigger.dev/task")] = true;
  return task2;
}
__name(createTask, "createTask");
async function trigger_internal(name2, id, payload, parsePayload, options, requestOptions) {
  const apiClient = apiClientManager.clientOrThrow();
  const parsedPayload = parsePayload ? await parsePayload(payload) : payload;
  const payloadPacket = await stringifyIO(parsedPayload);
  const handle = await apiClient.triggerTask(id, {
    payload: payloadPacket.data,
    options: {
      queue: options?.queue ? { name: options.queue } : void 0,
      concurrencyKey: options?.concurrencyKey,
      test: taskContext.ctx?.run.isTest,
      payloadType: payloadPacket.dataType,
      idempotencyKey: await makeIdempotencyKey(options?.idempotencyKey),
      idempotencyKeyTTL: options?.idempotencyKeyTTL,
      delay: options?.delay,
      ttl: options?.ttl,
      tags: options?.tags,
      maxAttempts: options?.maxAttempts,
      metadata: options?.metadata,
      maxDuration: options?.maxDuration,
      parentRunId: taskContext.ctx?.run.id,
      machine: options?.machine,
      priority: options?.priority,
      region: options?.region,
      lockToVersion: options?.version ?? getEnvVar("TRIGGER_VERSION")
    }
  }, {
    spanParentAsLink: true
  }, {
    name: name2,
    tracer,
    icon: "trigger",
    onResponseBody: /* @__PURE__ */ __name((body, span) => {
      if (body && typeof body === "object" && !Array.isArray(body)) {
        if ("id" in body && typeof body.id === "string") {
          span.setAttribute("runId", body.id);
        }
      }
    }, "onResponseBody"),
    ...requestOptions
  });
  return handle;
}
__name(trigger_internal, "trigger_internal");
async function batchTrigger_internal(name2, taskIdentifier, items, options, parsePayload, requestOptions, queue2) {
  const apiClient = apiClientManager.clientOrThrow();
  const ctx = taskContext.ctx;
  const response = await apiClient.batchTriggerV3({
    items: await Promise.all(items.map(async (item, index) => {
      const parsedPayload = parsePayload ? await parsePayload(item.payload) : item.payload;
      const payloadPacket = await stringifyIO(parsedPayload);
      const batchItemIdempotencyKey = await makeIdempotencyKey(flattenIdempotencyKey([options?.idempotencyKey, `${index}`]));
      return {
        task: taskIdentifier,
        payload: payloadPacket.data,
        options: {
          queue: item.options?.queue ? { name: item.options.queue } : queue2 ? { name: queue2 } : void 0,
          concurrencyKey: item.options?.concurrencyKey,
          test: taskContext.ctx?.run.isTest,
          payloadType: payloadPacket.dataType,
          delay: item.options?.delay,
          ttl: item.options?.ttl,
          tags: item.options?.tags,
          maxAttempts: item.options?.maxAttempts,
          metadata: item.options?.metadata,
          maxDuration: item.options?.maxDuration,
          idempotencyKey: await makeIdempotencyKey(item.options?.idempotencyKey) ?? batchItemIdempotencyKey,
          idempotencyKeyTTL: item.options?.idempotencyKeyTTL ?? options?.idempotencyKeyTTL,
          machine: item.options?.machine,
          priority: item.options?.priority,
          region: item.options?.region,
          lockToVersion: item.options?.version ?? getEnvVar("TRIGGER_VERSION")
        }
      };
    })),
    parentRunId: ctx?.run.id
  }, {
    spanParentAsLink: true,
    processingStrategy: options?.triggerSequentially ? "sequential" : void 0
  }, {
    name: name2,
    tracer,
    icon: "trigger",
    onResponseBody(body, span) {
      if (body && typeof body === "object" && !Array.isArray(body)) {
        if ("id" in body && typeof body.id === "string") {
          span.setAttribute("batchId", body.id);
        }
        if ("runCount" in body && Array.isArray(body.runCount)) {
          span.setAttribute("runCount", body.runCount);
        }
      }
    },
    ...requestOptions
  });
  const handle = {
    batchId: response.id,
    runCount: response.runCount,
    publicAccessToken: response.publicAccessToken
  };
  return handle;
}
__name(batchTrigger_internal, "batchTrigger_internal");
async function triggerAndWait_internal(name2, id, payload, parsePayload, options, requestOptions) {
  const ctx = taskContext.ctx;
  if (!ctx) {
    throw new Error("triggerAndWait can only be used from inside a task.run()");
  }
  const apiClient = apiClientManager.clientOrThrow();
  const parsedPayload = parsePayload ? await parsePayload(payload) : payload;
  const payloadPacket = await stringifyIO(parsedPayload);
  return await tracer.startActiveSpan(name2, async (span) => {
    const response = await apiClient.triggerTask(id, {
      payload: payloadPacket.data,
      options: {
        lockToVersion: taskContext.worker?.version,
        // Lock to current version because we're waiting for it to finish
        queue: options?.queue ? { name: options.queue } : void 0,
        concurrencyKey: options?.concurrencyKey,
        test: taskContext.ctx?.run.isTest,
        payloadType: payloadPacket.dataType,
        delay: options?.delay,
        ttl: options?.ttl,
        tags: options?.tags,
        maxAttempts: options?.maxAttempts,
        metadata: options?.metadata,
        maxDuration: options?.maxDuration,
        resumeParentOnCompletion: true,
        parentRunId: ctx.run.id,
        idempotencyKey: await makeIdempotencyKey(options?.idempotencyKey),
        idempotencyKeyTTL: options?.idempotencyKeyTTL,
        machine: options?.machine,
        priority: options?.priority,
        region: options?.region
      }
    }, {}, requestOptions);
    span.setAttribute("runId", response.id);
    const result = await runtime.waitForTask({
      id: response.id,
      ctx
    });
    return await handleTaskRunExecutionResult(result, id);
  }, {
    kind: SpanKind.PRODUCER,
    attributes: {
      [SemanticInternalAttributes.STYLE_ICON]: "trigger",
      ...accessoryAttributes({
        items: [
          {
            text: id,
            variant: "normal"
          }
        ],
        style: "codepath"
      })
    }
  });
}
__name(triggerAndWait_internal, "triggerAndWait_internal");
async function batchTriggerAndWait_internal(name2, id, items, parsePayload, options, requestOptions, queue2) {
  const ctx = taskContext.ctx;
  if (!ctx) {
    throw new Error("batchTriggerAndWait can only be used from inside a task.run()");
  }
  const apiClient = apiClientManager.clientOrThrow();
  return await tracer.startActiveSpan(name2, async (span) => {
    const response = await apiClient.batchTriggerV3({
      items: await Promise.all(items.map(async (item, index) => {
        const parsedPayload = parsePayload ? await parsePayload(item.payload) : item.payload;
        const payloadPacket = await stringifyIO(parsedPayload);
        const batchItemIdempotencyKey = await makeIdempotencyKey(flattenIdempotencyKey([options?.idempotencyKey, `${index}`]));
        return {
          task: id,
          payload: payloadPacket.data,
          options: {
            lockToVersion: taskContext.worker?.version,
            queue: item.options?.queue ? { name: item.options.queue } : queue2 ? { name: queue2 } : void 0,
            concurrencyKey: item.options?.concurrencyKey,
            test: taskContext.ctx?.run.isTest,
            payloadType: payloadPacket.dataType,
            delay: item.options?.delay,
            ttl: item.options?.ttl,
            tags: item.options?.tags,
            maxAttempts: item.options?.maxAttempts,
            metadata: item.options?.metadata,
            maxDuration: item.options?.maxDuration,
            idempotencyKey: await makeIdempotencyKey(item.options?.idempotencyKey) ?? batchItemIdempotencyKey,
            idempotencyKeyTTL: item.options?.idempotencyKeyTTL ?? options?.idempotencyKeyTTL,
            machine: item.options?.machine,
            priority: item.options?.priority,
            region: item.options?.region
          }
        };
      })),
      resumeParentOnCompletion: true,
      parentRunId: ctx.run.id
    }, {
      processingStrategy: options?.triggerSequentially ? "sequential" : void 0
    }, requestOptions);
    span.setAttribute("batchId", response.id);
    span.setAttribute("runCount", response.runCount);
    const result = await runtime.waitForBatch({
      id: response.id,
      runCount: response.runCount,
      ctx
    });
    const runs2 = await handleBatchTaskRunExecutionResult(result.items, id);
    return {
      id: result.id,
      runs: runs2
    };
  }, {
    kind: SpanKind.PRODUCER,
    attributes: {
      [SemanticInternalAttributes.STYLE_ICON]: "trigger",
      ...accessoryAttributes({
        items: [
          {
            text: id,
            variant: "normal"
          }
        ],
        style: "codepath"
      })
    }
  });
}
__name(batchTriggerAndWait_internal, "batchTriggerAndWait_internal");
async function handleBatchTaskRunExecutionResult(items, taskIdentifier) {
  const someObjectStoreOutputs = items.some((item) => item.ok && item.outputType === "application/store");
  if (!someObjectStoreOutputs) {
    const results = await Promise.all(items.map(async (item) => {
      return await handleTaskRunExecutionResult(item, taskIdentifier);
    }));
    return results;
  }
  return await tracer.startActiveSpan("store.downloadPayloads", async (span) => {
    const results = await Promise.all(items.map(async (item) => {
      return await handleTaskRunExecutionResult(item, taskIdentifier);
    }));
    return results;
  }, {
    kind: SpanKind.INTERNAL,
    [SemanticInternalAttributes.STYLE_ICON]: "cloud-download"
  });
}
__name(handleBatchTaskRunExecutionResult, "handleBatchTaskRunExecutionResult");
async function handleTaskRunExecutionResult(execution, taskIdentifier) {
  if (execution.ok) {
    const outputPacket = { data: execution.output, dataType: execution.outputType };
    const importedPacket = await conditionallyImportPacket(outputPacket, tracer);
    return {
      ok: true,
      id: execution.id,
      taskIdentifier: execution.taskIdentifier ?? taskIdentifier,
      output: await parsePacket(importedPacket)
    };
  } else {
    return {
      ok: false,
      id: execution.id,
      taskIdentifier: execution.taskIdentifier ?? taskIdentifier,
      error: createErrorTaskError(execution.error)
    };
  }
}
__name(handleTaskRunExecutionResult, "handleTaskRunExecutionResult");
function registerTaskLifecycleHooks(taskId, params) {
  if (params.init) {
    lifecycleHooks.registerTaskInitHook(taskId, {
      fn: params.init
    });
  }
  if (params.onStart) {
    lifecycleHooks.registerTaskStartHook(taskId, {
      fn: params.onStart
    });
  }
  if (params.onFailure) {
    lifecycleHooks.registerTaskFailureHook(taskId, {
      fn: params.onFailure
    });
  }
  if (params.onSuccess) {
    lifecycleHooks.registerTaskSuccessHook(taskId, {
      fn: params.onSuccess
    });
  }
  if (params.onComplete) {
    lifecycleHooks.registerTaskCompleteHook(taskId, {
      fn: params.onComplete
    });
  }
  if (params.onWait) {
    lifecycleHooks.registerTaskWaitHook(taskId, {
      fn: params.onWait
    });
  }
  if (params.onResume) {
    lifecycleHooks.registerTaskResumeHook(taskId, {
      fn: params.onResume
    });
  }
  if (params.catchError) {
    lifecycleHooks.registerTaskCatchErrorHook(taskId, {
      fn: params.catchError
    });
  }
  if (params.handleError) {
    lifecycleHooks.registerTaskCatchErrorHook(taskId, {
      fn: params.handleError
    });
  }
  if (params.middleware) {
    lifecycleHooks.registerTaskMiddlewareHook(taskId, {
      fn: params.middleware
    });
  }
  if (params.cleanup) {
    lifecycleHooks.registerTaskCleanupHook(taskId, {
      fn: params.cleanup
    });
  }
  if (params.onCancel) {
    lifecycleHooks.registerTaskCancelHook(taskId, {
      fn: params.onCancel
    });
  }
}
__name(registerTaskLifecycleHooks, "registerTaskLifecycleHooks");

// node_modules/@trigger.dev/sdk/dist/esm/v3/tasks.js
var task = createTask;

// node_modules/@trigger.dev/sdk/dist/esm/v3/index.js
init_esm();

// node_modules/@trigger.dev/sdk/dist/esm/v3/cache.js
init_esm();

// node_modules/@trigger.dev/sdk/dist/esm/v3/retry.js
init_esm();

// node_modules/@trigger.dev/sdk/dist/esm/v3/batch.js
init_esm();

// node_modules/@trigger.dev/sdk/dist/esm/v3/waitUntil.js
init_esm();

// node_modules/@trigger.dev/sdk/dist/esm/v3/usage.js
init_esm();

// node_modules/@trigger.dev/sdk/dist/esm/v3/idempotencyKeys.js
init_esm();

// node_modules/@trigger.dev/sdk/dist/esm/v3/tags.js
init_esm();

// node_modules/@trigger.dev/sdk/dist/esm/v3/metadata.js
init_esm();
var parentMetadataUpdater = runMetadata.parent;
var rootMetadataUpdater = runMetadata.root;
var metadataUpdater = {
  set: setMetadataKey,
  del: deleteMetadataKey,
  append: appendMetadataKey,
  remove: removeMetadataKey,
  increment: incrementMetadataKey,
  decrement: decrementMetadataKey,
  flush: flushMetadata
};
var metadata = {
  current: currentMetadata,
  get: getMetadataKey,
  save: saveMetadata,
  replace: replaceMetadata,
  stream,
  fetchStream,
  parent: parentMetadataUpdater,
  root: rootMetadataUpdater,
  refresh: refreshMetadata,
  ...metadataUpdater
};
function currentMetadata() {
  return runMetadata.current();
}
__name(currentMetadata, "currentMetadata");
function getMetadataKey(key) {
  return runMetadata.getKey(key);
}
__name(getMetadataKey, "getMetadataKey");
function setMetadataKey(key, value) {
  runMetadata.set(key, value);
  return metadataUpdater;
}
__name(setMetadataKey, "setMetadataKey");
function deleteMetadataKey(key) {
  runMetadata.del(key);
  return metadataUpdater;
}
__name(deleteMetadataKey, "deleteMetadataKey");
function replaceMetadata(metadata2) {
  runMetadata.update(metadata2);
}
__name(replaceMetadata, "replaceMetadata");
function saveMetadata(metadata2) {
  runMetadata.update(metadata2);
}
__name(saveMetadata, "saveMetadata");
function incrementMetadataKey(key, value = 1) {
  runMetadata.increment(key, value);
  return metadataUpdater;
}
__name(incrementMetadataKey, "incrementMetadataKey");
function decrementMetadataKey(key, value = 1) {
  runMetadata.decrement(key, value);
  return metadataUpdater;
}
__name(decrementMetadataKey, "decrementMetadataKey");
function appendMetadataKey(key, value) {
  runMetadata.append(key, value);
  return metadataUpdater;
}
__name(appendMetadataKey, "appendMetadataKey");
function removeMetadataKey(key, value) {
  runMetadata.remove(key, value);
  return metadataUpdater;
}
__name(removeMetadataKey, "removeMetadataKey");
async function flushMetadata(requestOptions) {
  const $requestOptions = mergeRequestOptions({
    tracer,
    name: "metadata.flush()",
    icon: "code-plus"
  }, requestOptions);
  await runMetadata.flush($requestOptions);
}
__name(flushMetadata, "flushMetadata");
async function refreshMetadata(requestOptions) {
  const $requestOptions = mergeRequestOptions({
    tracer,
    name: "metadata.refresh()",
    icon: "code-plus"
  }, requestOptions);
  await runMetadata.refresh($requestOptions);
}
__name(refreshMetadata, "refreshMetadata");
async function stream(key, value, signal) {
  return runMetadata.stream(key, value, signal);
}
__name(stream, "stream");
async function fetchStream(key, signal) {
  return runMetadata.fetchStream(key, signal);
}
__name(fetchStream, "fetchStream");

// node_modules/@trigger.dev/sdk/dist/esm/v3/timeout.js
init_esm();
var MAXIMUM_MAX_DURATION = 2147483647;
var timeout2 = {
  None: MAXIMUM_MAX_DURATION,
  signal: timeout.signal
};

// node_modules/@trigger.dev/sdk/dist/esm/v3/webhooks.js
init_esm();

// node_modules/@trigger.dev/sdk/dist/esm/imports/uncrypto.js
init_esm();

// node_modules/@trigger.dev/sdk/dist/esm/v3/locals.js
init_esm();

// node_modules/@trigger.dev/sdk/dist/esm/v3/otel.js
init_esm();

// node_modules/@trigger.dev/sdk/dist/esm/v3/schemas.js
init_esm();

// node_modules/@trigger.dev/sdk/dist/esm/v3/runs.js
init_esm();

// node_modules/@trigger.dev/sdk/dist/esm/v3/schedules/index.js
init_esm();

// node_modules/@trigger.dev/sdk/dist/esm/v3/envvars.js
init_esm();

// node_modules/@trigger.dev/sdk/dist/esm/v3/queues.js
init_esm();

// node_modules/@trigger.dev/sdk/dist/esm/v3/auth.js
init_esm();

export {
  logger,
  defineConfig,
  wait,
  task
};
/*! Bundled license information:

@google-cloud/precise-date/build/src/index.js:
  (*!
   * Copyright 2019 Google Inc. All Rights Reserved.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *      http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
//# sourceMappingURL=chunk-QNS4DHBF.mjs.map
