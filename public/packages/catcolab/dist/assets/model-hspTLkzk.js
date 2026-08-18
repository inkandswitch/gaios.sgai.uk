const byteToHex = [];
for (let i = 0; i < 256; ++i) {
    byteToHex.push((i + 0x100).toString(16).slice(1));
}
function unsafeStringify(arr, offset = 0) {
    return (byteToHex[arr[offset + 0]] +
        byteToHex[arr[offset + 1]] +
        byteToHex[arr[offset + 2]] +
        byteToHex[arr[offset + 3]] +
        '-' +
        byteToHex[arr[offset + 4]] +
        byteToHex[arr[offset + 5]] +
        '-' +
        byteToHex[arr[offset + 6]] +
        byteToHex[arr[offset + 7]] +
        '-' +
        byteToHex[arr[offset + 8]] +
        byteToHex[arr[offset + 9]] +
        '-' +
        byteToHex[arr[offset + 10]] +
        byteToHex[arr[offset + 11]] +
        byteToHex[arr[offset + 12]] +
        byteToHex[arr[offset + 13]] +
        byteToHex[arr[offset + 14]] +
        byteToHex[arr[offset + 15]]).toLowerCase();
}

let getRandomValues;
const rnds8 = new Uint8Array(16);
function rng() {
    if (!getRandomValues) {
        if (typeof crypto === 'undefined' || !crypto.getRandomValues) {
            throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
        }
        getRandomValues = crypto.getRandomValues.bind(crypto);
    }
    return getRandomValues(rnds8);
}

const _state = {};
function v7(options, buf, offset) {
    let bytes;
    {
        const now = Date.now();
        const rnds = rng();
        updateV7State(_state, now, rnds);
        bytes = v7Bytes(rnds, _state.msecs, _state.seq, buf, offset);
    }
    return buf ?? unsafeStringify(bytes);
}
function updateV7State(state, now, rnds) {
    state.msecs ??= -Infinity;
    state.seq ??= 0;
    if (now > state.msecs) {
        state.seq = (rnds[6] << 23) | (rnds[7] << 16) | (rnds[8] << 8) | rnds[9];
        state.msecs = now;
    }
    else {
        state.seq = (state.seq + 1) | 0;
        if (state.seq === 0) {
            state.msecs++;
        }
    }
    return state;
}
function v7Bytes(rnds, msecs, seq, buf, offset = 0) {
    if (rnds.length < 16) {
        throw new Error('Random bytes length must be >= 16');
    }
    if (!buf) {
        buf = new Uint8Array(16);
        offset = 0;
    }
    else {
        if (offset < 0 || offset + 16 > buf.length) {
            throw new RangeError(`UUID byte range ${offset}:${offset + 15} is out of buffer bounds`);
        }
    }
    msecs ??= Date.now();
    seq ??= ((rnds[6] * 0x7f) << 24) | (rnds[7] << 16) | (rnds[8] << 8) | rnds[9];
    buf[offset++] = (msecs / 0x10000000000) & 0xff;
    buf[offset++] = (msecs / 0x100000000) & 0xff;
    buf[offset++] = (msecs / 0x1000000) & 0xff;
    buf[offset++] = (msecs / 0x10000) & 0xff;
    buf[offset++] = (msecs / 0x100) & 0xff;
    buf[offset++] = msecs & 0xff;
    buf[offset++] = 0x70 | ((seq >>> 28) & 0x0f);
    buf[offset++] = (seq >>> 20) & 0xff;
    buf[offset++] = 0x80 | ((seq >>> 14) & 0x3f);
    buf[offset++] = (seq >>> 6) & 0xff;
    buf[offset++] = ((seq << 2) & 0xff) | (rnds[10] & 0x03);
    buf[offset++] = rnds[11];
    buf[offset++] = rnds[12];
    buf[offset++] = rnds[13];
    buf[offset++] = rnds[14];
    buf[offset++] = rnds[15];
    return buf;
}

const __vite__wasmUrl = ""+new URL('catcolab_document_types_bg.wasm', import.meta.url).href+"";

const __vite__initWasm = async (opts = {}, url) => {
    let result;
    if (url.startsWith("data:")) {
        const urlContent = url.replace(/^data:.*?base64,/, "");
        let bytes;
        if (typeof Buffer === "function" && typeof Buffer.from === "function") {
            bytes = Buffer.from(urlContent, "base64");
        }
        else if (typeof atob === "function") {
            const binaryString = atob(urlContent);
            bytes = new Uint8Array(binaryString.length);
            for (let i = 0; i < binaryString.length; i++) {
                bytes[i] = binaryString.charCodeAt(i);
            }
        }
        else {
            throw new Error("Cannot decode base64-encoded data URL");
        }
        result = await WebAssembly.instantiate(bytes, opts);
    }
    else {
        // https://github.com/mdn/webassembly-examples/issues/5
        // WebAssembly.instantiateStreaming requires the server to provide the
        // correct MIME type for .wasm files, which unfortunately doesn't work for
        // a lot of static file servers, so we just work around it by getting the
        // raw buffer.
        // @ts-ignore
        const response = await fetch(url);
        const contentType = response.headers.get("Content-Type") || "";
        if ("instantiateStreaming" in WebAssembly && contentType.startsWith("application/wasm")) {
            result = await WebAssembly.instantiateStreaming(response, opts);
        }
        else {
            const buffer = await response.arrayBuffer();
            result = await WebAssembly.instantiate(buffer, opts);
        }
    }
    return result.instance.exports;
};

let wasm$1;
function __wbg_set_wasm(val) {
    wasm$1 = val;
}

function addToExternrefTable0(obj) {
    const idx = wasm$1.__externref_table_alloc();
    wasm$1.__wbindgen_externrefs.set(idx, obj);
    return idx;
}

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches && builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm$1.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm$1.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function getStringFromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return decodeText(ptr, len);
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm$1.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        const idx = addToExternrefTable0(e);
        wasm$1.__wbindgen_exn_store(idx);
    }
}

function isLikeNone(x) {
    return x === undefined || x === null;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;

/**
 * @returns {string}
 */
function currentVersion$1() {
    let deferred1_0;
    let deferred1_1;
    try {
        const ret = wasm$1.currentVersion();
        deferred1_0 = ret[0];
        deferred1_1 = ret[1];
        return getStringFromWasm0(ret[0], ret[1]);
    } finally {
        wasm$1.__wbindgen_free(deferred1_0, deferred1_1, 1);
    }
}

function __wbg_Error_52673b7de5a0ca89(arg0, arg1) {
    const ret = Error(getStringFromWasm0(arg0, arg1));
    return ret;
}
function __wbg_String_8f0eb39a4a4c2f66(arg0, arg1) {
    const ret = String(arg1);
    const ptr1 = passStringToWasm0(ret, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
function __wbg___wbindgen_bigint_get_as_i64_6e32f5e6aff02e1d(arg0, arg1) {
    const v = arg1;
    const ret = typeof(v) === 'bigint' ? v : undefined;
    getDataViewMemory0().setBigInt64(arg0 + 8 * 1, isLikeNone(ret) ? BigInt(0) : ret, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
}
function __wbg___wbindgen_boolean_get_dea25b33882b895b(arg0) {
    const v = arg0;
    const ret = typeof(v) === 'boolean' ? v : undefined;
    return isLikeNone(ret) ? 0xFFFFFF : ret ? 1 : 0;
}
function __wbg___wbindgen_debug_string_adfb662ae34724b6(arg0, arg1) {
    const ret = debugString(arg1);
    const ptr1 = passStringToWasm0(ret, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    const len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
function __wbg___wbindgen_in_0d3e1e8f0c669317(arg0, arg1) {
    const ret = arg0 in arg1;
    return ret;
}
function __wbg___wbindgen_is_bigint_0e1a2e3f55cfae27(arg0) {
    const ret = typeof(arg0) === 'bigint';
    return ret;
}
function __wbg___wbindgen_is_function_8d400b8b1af978cd(arg0) {
    const ret = typeof(arg0) === 'function';
    return ret;
}
function __wbg___wbindgen_is_object_ce774f3490692386(arg0) {
    const val = arg0;
    const ret = typeof(val) === 'object' && val !== null;
    return ret;
}
function __wbg___wbindgen_is_string_704ef9c8fc131030(arg0) {
    const ret = typeof(arg0) === 'string';
    return ret;
}
function __wbg___wbindgen_jsval_eq_b6101cc9cef1fe36(arg0, arg1) {
    const ret = arg0 === arg1;
    return ret;
}
function __wbg___wbindgen_jsval_loose_eq_766057600fdd1b0d(arg0, arg1) {
    const ret = arg0 == arg1;
    return ret;
}
function __wbg___wbindgen_number_get_9619185a74197f95(arg0, arg1) {
    const obj = arg1;
    const ret = typeof(obj) === 'number' ? obj : undefined;
    getDataViewMemory0().setFloat64(arg0 + 8 * 1, isLikeNone(ret) ? 0 : ret, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, !isLikeNone(ret), true);
}
function __wbg___wbindgen_string_get_a2a31e16edf96e42(arg0, arg1) {
    const obj = arg1;
    const ret = typeof(obj) === 'string' ? obj : undefined;
    var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm$1.__wbindgen_malloc, wasm$1.__wbindgen_realloc);
    var len1 = WASM_VECTOR_LEN;
    getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
    getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
}
function __wbg___wbindgen_throw_dd24417ed36fc46e(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
}
function __wbg_call_abb4ff46ce38be40() { return handleError(function (arg0, arg1) {
    const ret = arg0.call(arg1);
    return ret;
}, arguments) }
function __wbg_done_62ea16af4ce34b24(arg0) {
    const ret = arg0.done;
    return ret;
}
function __wbg_entries_83c79938054e065f(arg0) {
    const ret = Object.entries(arg0);
    return ret;
}
function __wbg_getRandomValues_3c9c0d586e575a16() { return handleError(function (arg0, arg1) {
    globalThis.crypto.getRandomValues(getArrayU8FromWasm0(arg0, arg1));
}, arguments) }
function __wbg_get_6b7bd52aca3f9671(arg0, arg1) {
    const ret = arg0[arg1 >>> 0];
    return ret;
}
function __wbg_get_af9dab7e9603ea93() { return handleError(function (arg0, arg1) {
    const ret = Reflect.get(arg0, arg1);
    return ret;
}, arguments) }
function __wbg_instanceof_ArrayBuffer_f3320d2419cd0355(arg0) {
    let result;
    try {
        result = arg0 instanceof ArrayBuffer;
    } catch (_) {
        result = false;
    }
    const ret = result;
    return ret;
}
function __wbg_instanceof_Map_084be8da74364158(arg0) {
    let result;
    try {
        result = arg0 instanceof Map;
    } catch (_) {
        result = false;
    }
    const ret = result;
    return ret;
}
function __wbg_instanceof_Uint8Array_da54ccc9d3e09434(arg0) {
    let result;
    try {
        result = arg0 instanceof Uint8Array;
    } catch (_) {
        result = false;
    }
    const ret = result;
    return ret;
}
function __wbg_isArray_51fd9e6422c0a395(arg0) {
    const ret = Array.isArray(arg0);
    return ret;
}
function __wbg_isSafeInteger_ae7d3f054d55fa16(arg0) {
    const ret = Number.isSafeInteger(arg0);
    return ret;
}
function __wbg_iterator_27b7c8b35ab3e86b() {
    const ret = Symbol.iterator;
    return ret;
}
function __wbg_length_22ac23eaec9d8053(arg0) {
    const ret = arg0.length;
    return ret;
}
function __wbg_length_d45040a40c570362(arg0) {
    const ret = arg0.length;
    return ret;
}
function __wbg_new_1ba21ce319a06297() {
    const ret = new Object();
    return ret;
}
function __wbg_new_25f239778d6112b9() {
    const ret = new Array();
    return ret;
}
function __wbg_new_6421f6084cc5bc5a(arg0) {
    const ret = new Uint8Array(arg0);
    return ret;
}
function __wbg_new_b546ae120718850e() {
    const ret = new Map();
    return ret;
}
function __wbg_next_138a17bbf04e926c(arg0) {
    const ret = arg0.next;
    return ret;
}
function __wbg_next_3cfe5c0fe2a4cc53() { return handleError(function (arg0) {
    const ret = arg0.next();
    return ret;
}, arguments) }
function __wbg_prototypesetcall_dfe9b766cdc1f1fd(arg0, arg1, arg2) {
    Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), arg2);
}
function __wbg_set_3f1d0b984ed272ed(arg0, arg1, arg2) {
    arg0[arg1] = arg2;
}
function __wbg_set_7df433eea03a5c14(arg0, arg1, arg2) {
    arg0[arg1 >>> 0] = arg2;
}
function __wbg_set_efaaf145b9377369(arg0, arg1, arg2) {
    const ret = arg0.set(arg1, arg2);
    return ret;
}
function __wbg_value_57b7b035e117f7ee(arg0) {
    const ret = arg0.value;
    return ret;
}
function __wbindgen_cast_2241b6af4c4b2941(arg0, arg1) {
    // Cast intrinsic for `Ref(String) -> Externref`.
    const ret = getStringFromWasm0(arg0, arg1);
    return ret;
}
function __wbindgen_cast_4625c577ab2ec9ee(arg0) {
    // Cast intrinsic for `U64 -> Externref`.
    const ret = BigInt.asUintN(64, arg0);
    return ret;
}
function __wbindgen_cast_9ae0607507abb057(arg0) {
    // Cast intrinsic for `I64 -> Externref`.
    const ret = arg0;
    return ret;
}
function __wbindgen_cast_d6cd19b81560fd6e(arg0) {
    // Cast intrinsic for `F64 -> Externref`.
    const ret = arg0;
    return ret;
}
function __wbindgen_init_externref_table() {
    const table = wasm$1.__wbindgen_externrefs;
    const offset = table.grow(4);
    table.set(0, undefined);
    table.set(offset + 0, undefined);
    table.set(offset + 1, null);
    table.set(offset + 2, true);
    table.set(offset + 3, false);
}

URL = globalThis.URL;
const __vite__wasmModule = await __vite__initWasm({ "./catcolab_document_types_bg.js": { "__wbg_getRandomValues_3c9c0d586e575a16": __wbg_getRandomValues_3c9c0d586e575a16,
"__wbg_set_3f1d0b984ed272ed": __wbg_set_3f1d0b984ed272ed,
"__wbg_String_8f0eb39a4a4c2f66": __wbg_String_8f0eb39a4a4c2f66,
"__wbg_iterator_27b7c8b35ab3e86b": __wbg_iterator_27b7c8b35ab3e86b,
"__wbg_new_25f239778d6112b9": __wbg_new_25f239778d6112b9,
"__wbg_get_6b7bd52aca3f9671": __wbg_get_6b7bd52aca3f9671,
"__wbg_set_7df433eea03a5c14": __wbg_set_7df433eea03a5c14,
"__wbg_isArray_51fd9e6422c0a395": __wbg_isArray_51fd9e6422c0a395,
"__wbg_length_d45040a40c570362": __wbg_length_d45040a40c570362,
"__wbg_call_abb4ff46ce38be40": __wbg_call_abb4ff46ce38be40,
"__wbg_new_b546ae120718850e": __wbg_new_b546ae120718850e,
"__wbg_set_efaaf145b9377369": __wbg_set_efaaf145b9377369,
"__wbg_isSafeInteger_ae7d3f054d55fa16": __wbg_isSafeInteger_ae7d3f054d55fa16,
"__wbg_next_3cfe5c0fe2a4cc53": __wbg_next_3cfe5c0fe2a4cc53,
"__wbg_done_62ea16af4ce34b24": __wbg_done_62ea16af4ce34b24,
"__wbg_value_57b7b035e117f7ee": __wbg_value_57b7b035e117f7ee,
"__wbg_entries_83c79938054e065f": __wbg_entries_83c79938054e065f,
"__wbg_new_1ba21ce319a06297": __wbg_new_1ba21ce319a06297,
"__wbg_length_22ac23eaec9d8053": __wbg_length_22ac23eaec9d8053,
"__wbg_prototypesetcall_dfe9b766cdc1f1fd": __wbg_prototypesetcall_dfe9b766cdc1f1fd,
"__wbg_new_6421f6084cc5bc5a": __wbg_new_6421f6084cc5bc5a,
"__wbg_next_138a17bbf04e926c": __wbg_next_138a17bbf04e926c,
"__wbg_instanceof_Map_084be8da74364158": __wbg_instanceof_Map_084be8da74364158,
"__wbg_instanceof_Uint8Array_da54ccc9d3e09434": __wbg_instanceof_Uint8Array_da54ccc9d3e09434,
"__wbg_instanceof_ArrayBuffer_f3320d2419cd0355": __wbg_instanceof_ArrayBuffer_f3320d2419cd0355,
"__wbg_get_af9dab7e9603ea93": __wbg_get_af9dab7e9603ea93,
"__wbg___wbindgen_number_get_9619185a74197f95": __wbg___wbindgen_number_get_9619185a74197f95,
"__wbg___wbindgen_in_0d3e1e8f0c669317": __wbg___wbindgen_in_0d3e1e8f0c669317,
"__wbg___wbindgen_throw_dd24417ed36fc46e": __wbg___wbindgen_throw_dd24417ed36fc46e,
"__wbg___wbindgen_jsval_eq_b6101cc9cef1fe36": __wbg___wbindgen_jsval_eq_b6101cc9cef1fe36,
"__wbg_Error_52673b7de5a0ca89": __wbg_Error_52673b7de5a0ca89,
"__wbg___wbindgen_is_bigint_0e1a2e3f55cfae27": __wbg___wbindgen_is_bigint_0e1a2e3f55cfae27,
"__wbg___wbindgen_is_object_ce774f3490692386": __wbg___wbindgen_is_object_ce774f3490692386,
"__wbg___wbindgen_is_string_704ef9c8fc131030": __wbg___wbindgen_is_string_704ef9c8fc131030,
"__wbg___wbindgen_string_get_a2a31e16edf96e42": __wbg___wbindgen_string_get_a2a31e16edf96e42,
"__wbg___wbindgen_boolean_get_dea25b33882b895b": __wbg___wbindgen_boolean_get_dea25b33882b895b,
"__wbg___wbindgen_is_function_8d400b8b1af978cd": __wbg___wbindgen_is_function_8d400b8b1af978cd,
"__wbg___wbindgen_jsval_loose_eq_766057600fdd1b0d": __wbg___wbindgen_jsval_loose_eq_766057600fdd1b0d,
"__wbg___wbindgen_bigint_get_as_i64_6e32f5e6aff02e1d": __wbg___wbindgen_bigint_get_as_i64_6e32f5e6aff02e1d,
"__wbg___wbindgen_debug_string_adfb662ae34724b6": __wbg___wbindgen_debug_string_adfb662ae34724b6,
"__wbindgen_init_externref_table": __wbindgen_init_externref_table,
"__wbindgen_cast_d6cd19b81560fd6e": __wbindgen_cast_d6cd19b81560fd6e,
"__wbindgen_cast_2241b6af4c4b2941": __wbindgen_cast_2241b6af4c4b2941,
"__wbindgen_cast_9ae0607507abb057": __wbindgen_cast_9ae0607507abb057,
"__wbindgen_cast_4625c577ab2ec9ee": __wbindgen_cast_4625c577ab2ec9ee } }, __vite__wasmUrl);
const memory = __vite__wasmModule.memory;
const currentVersion = __vite__wasmModule.currentVersion;
const migrateDocument = __vite__wasmModule.migrateDocument;
const serializeAutomergeDocument = __vite__wasmModule.serializeAutomergeDocument;
const __wbindgen_malloc = __vite__wasmModule.__wbindgen_malloc;
const __wbindgen_realloc = __vite__wasmModule.__wbindgen_realloc;
const __wbindgen_exn_store = __vite__wasmModule.__wbindgen_exn_store;
const __externref_table_alloc = __vite__wasmModule.__externref_table_alloc;
const __wbindgen_externrefs = __vite__wasmModule.__wbindgen_externrefs;
const __wbindgen_free = __vite__wasmModule.__wbindgen_free;
const __externref_table_dealloc = __vite__wasmModule.__externref_table_dealloc;
const __wbindgen_start = __vite__wasmModule.__wbindgen_start;

const wasm = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    __externref_table_alloc,
    __externref_table_dealloc,
    __wbindgen_exn_store,
    __wbindgen_externrefs,
    __wbindgen_free,
    __wbindgen_malloc,
    __wbindgen_realloc,
    __wbindgen_start,
    currentVersion,
    memory,
    migrateDocument,
    serializeAutomergeDocument
}, Symbol.toStringTag, { value: 'Module' }));

__wbg_set_wasm(wasm);
__wbindgen_start();

var prefix = "Invariant failed";
function invariant(condition, message) {
  if (condition) {
    return;
  }
  {
    throw new Error(prefix);
  }
}

const newNotebook = () => ({
  cellOrder: [],
  cellContents: {}
});
const newRichTextCell = (content) => ({
  tag: "rich-text",
  id: v7(),
  content: content ?? ""
});
const newFormalCell = (content) => ({
  tag: "formal",
  id: v7(),
  content
});
function getCells(notebook) {
  return notebook.cellOrder.map((cellId) => getCellById(notebook, cellId));
}
function getFormalCells(notebook) {
  return getCells(notebook).filter((cell) => cell.tag === "formal");
}
function getFormalContent(notebook) {
  return getFormalCells(notebook).map((cell) => cell.content);
}
function getCellById(notebook, cellId) {
  const cell = notebook.cellContents[cellId];
  invariant(cell);
  return cell;
}
function getCellIdByIndex(notebook, index) {
  const cellId = notebook.cellOrder[index];
  invariant(cellId);
  return cellId;
}
function appendCell(notebook, cell) {
  notebook.cellOrder.push(cell.id);
  notebook.cellContents[cell.id] = cell;
}
function insertCellAtIndex(notebook, cell, index) {
  notebook.cellOrder.splice(index, 0, cell.id);
  notebook.cellContents[cell.id] = cell;
}
function deleteCellAtIndex(notebook, index) {
  const cellId = getCellIdByIndex(notebook, index);
  delete notebook.cellContents[cellId];
  notebook.cellOrder.splice(index, 1);
}
function moveCellUp(notebook, index) {
  if (index <= 0) {
    return;
  }
  const [cellIdToMoveUp] = notebook.cellOrder.splice(index, 1);
  invariant(cellIdToMoveUp);
  notebook.cellOrder.splice(index - 1, 0, cellIdToMoveUp);
}
function moveCellDown(notebook, index) {
  if (index >= notebook.cellOrder.length - 1) {
    return;
  }
  const [cellIdToMoveUp] = notebook.cellOrder.splice(index, 1);
  invariant(cellIdToMoveUp);
  notebook.cellOrder.splice(index + 1, 0, cellIdToMoveUp);
}
function moveCellByIndex(notebook, fromIndex, toIndex) {
  const [cellId] = notebook.cellOrder.splice(fromIndex, 1);
  invariant(cellId);
  notebook.cellOrder.splice(toIndex, 0, cellId);
}
function hasFormalCells(notebook) {
  return notebook.cellOrder.some((cellId) => notebook.cellContents[cellId]?.tag === "formal");
}
function numCells(notebook) {
  return notebook.cellOrder.length;
}
function duplicateCell(cell, duplicateFn) {
  switch (cell.tag) {
    case "formal": {
      const content = duplicateFn ? duplicateFn(cell.content) : structuredClone(cell.content);
      return newFormalCell(content);
    }
    case "rich-text":
      throw new Error("Rich text cells may not be duplicated");
    default:
      throw new Error(`Call has unknown tag: ${cell}`);
  }
}
function mutateCellContentById(notebook, cellId, mutator) {
  const cell = getCellById(notebook, cellId);
  invariant(
    cell.tag === "formal");
  mutator(cell.content);
}

const newModelDocument = (args) => ({
  name: "",
  type: "model",
  theory: args.theory,
  ...args.editorVariant ? { editorVariant: args.editorVariant } : {},
  notebook: newNotebook(),
  version: currentVersion$1()
});
const newObjectDecl = (obType) => ({
  tag: "object",
  id: v7(),
  name: "",
  obType
});
const newMorphismDecl = (morType) => ({
  tag: "morphism",
  id: v7(),
  name: "",
  morType,
  dom: null,
  cod: null
});
const newInstantiatedModel = (model) => ({
  tag: "instantiation",
  id: v7(),
  name: "",
  model: model ?? null,
  specializations: []
});
const duplicateModelJudgment = (jgmt) => ({
  ...structuredClone(jgmt),
  id: v7()
});

export { __vite__initWasm as _, newNotebook as a, getFormalCells as b, moveCellByIndex as c, newRichTextCell as d, appendCell as e, moveCellDown as f, getFormalContent as g, moveCellUp as h, deleteCellAtIndex as i, numCells as j, insertCellAtIndex as k, duplicateCell as l, mutateCellContentById as m, newModelDocument as n, newFormalCell as o, hasFormalCells as p, duplicateModelJudgment as q, newInstantiatedModel as r, newMorphismDecl as s, newObjectDecl as t };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kZWwtaHNwVExremsuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2RvY3VtZW50LW1ldGhvZHMvbm9kZV9tb2R1bGVzLy5wbnBtL3V1aWRAMTMuMC4wL25vZGVfbW9kdWxlcy91dWlkL2Rpc3Qvc3RyaW5naWZ5LmpzIiwiLi4vLi4vLi4vZG9jdW1lbnQtbWV0aG9kcy9ub2RlX21vZHVsZXMvLnBucG0vdXVpZEAxMy4wLjAvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9ybmcuanMiLCIuLi8uLi8uLi9kb2N1bWVudC1tZXRob2RzL25vZGVfbW9kdWxlcy8ucG5wbS91dWlkQDEzLjAuMC9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L3Y3LmpzIiwiLi4vLi4vLi4vZG9jdW1lbnQtdHlwZXMvcGtnL2NhdGNvbGFiX2RvY3VtZW50X3R5cGVzX2JnLndhc20/dXJsIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vX192aXRlLXBsdWdpbi13YXNtLWhlbHBlciIsIi4uLy4uLy4uL2RvY3VtZW50LXR5cGVzL3BrZy9jYXRjb2xhYl9kb2N1bWVudF90eXBlc19iZy5qcyIsIi4uLy4uLy4uL2RvY3VtZW50LXR5cGVzL3BrZy9jYXRjb2xhYl9kb2N1bWVudF90eXBlc19iZy53YXNtIiwiLi4vLi4vLi4vZG9jdW1lbnQtdHlwZXMvcGtnL2NhdGNvbGFiX2RvY3VtZW50X3R5cGVzLmpzIiwiLi4vLi4vLi4vZG9jdW1lbnQtbWV0aG9kcy9ub2RlX21vZHVsZXMvLnBucG0vdGlueS1pbnZhcmlhbnRAMS4zLjMvbm9kZV9tb2R1bGVzL3RpbnktaW52YXJpYW50L2Rpc3QvZXNtL3RpbnktaW52YXJpYW50LmpzIiwiLi4vLi4vLi4vZG9jdW1lbnQtbWV0aG9kcy9zcmMvbm90ZWJvb2sudHMiLCIuLi8uLi8uLi9kb2N1bWVudC1tZXRob2RzL3NyYy9tb2RlbC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdmFsaWRhdGUgZnJvbSAnLi92YWxpZGF0ZS5qcyc7XG5jb25zdCBieXRlVG9IZXggPSBbXTtcbmZvciAobGV0IGkgPSAwOyBpIDwgMjU2OyArK2kpIHtcbiAgICBieXRlVG9IZXgucHVzaCgoaSArIDB4MTAwKS50b1N0cmluZygxNikuc2xpY2UoMSkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHVuc2FmZVN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgICByZXR1cm4gKGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDJdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgM11dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA0XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDVdXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNl1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA3XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDhdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgOV1dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMV1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxMl1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxM11dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAxNV1dKS50b0xvd2VyQ2FzZSgpO1xufVxuZnVuY3Rpb24gc3RyaW5naWZ5KGFyciwgb2Zmc2V0ID0gMCkge1xuICAgIGNvbnN0IHV1aWQgPSB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQpO1xuICAgIGlmICghdmFsaWRhdGUodXVpZCkpIHtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmdpZmllZCBVVUlEIGlzIGludmFsaWQnKTtcbiAgICB9XG4gICAgcmV0dXJuIHV1aWQ7XG59XG5leHBvcnQgZGVmYXVsdCBzdHJpbmdpZnk7XG4iLCJsZXQgZ2V0UmFuZG9tVmFsdWVzO1xuY29uc3Qgcm5kczggPSBuZXcgVWludDhBcnJheSgxNik7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBybmcoKSB7XG4gICAgaWYgKCFnZXRSYW5kb21WYWx1ZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjcnlwdG8gPT09ICd1bmRlZmluZWQnIHx8ICFjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NyeXB0by5nZXRSYW5kb21WYWx1ZXMoKSBub3Qgc3VwcG9ydGVkLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3V1aWRqcy91dWlkI2dldHJhbmRvbXZhbHVlcy1ub3Qtc3VwcG9ydGVkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZ2V0UmFuZG9tVmFsdWVzID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcy5iaW5kKGNyeXB0byk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSYW5kb21WYWx1ZXMocm5kczgpO1xufVxuIiwiaW1wb3J0IHJuZyBmcm9tICcuL3JuZy5qcyc7XG5pbXBvcnQgeyB1bnNhZmVTdHJpbmdpZnkgfSBmcm9tICcuL3N0cmluZ2lmeS5qcyc7XG5jb25zdCBfc3RhdGUgPSB7fTtcbmZ1bmN0aW9uIHY3KG9wdGlvbnMsIGJ1Ziwgb2Zmc2V0KSB7XG4gICAgbGV0IGJ5dGVzO1xuICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIGJ5dGVzID0gdjdCeXRlcyhvcHRpb25zLnJhbmRvbSA/PyBvcHRpb25zLnJuZz8uKCkgPz8gcm5nKCksIG9wdGlvbnMubXNlY3MsIG9wdGlvbnMuc2VxLCBidWYsIG9mZnNldCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICBjb25zdCBybmRzID0gcm5nKCk7XG4gICAgICAgIHVwZGF0ZVY3U3RhdGUoX3N0YXRlLCBub3csIHJuZHMpO1xuICAgICAgICBieXRlcyA9IHY3Qnl0ZXMocm5kcywgX3N0YXRlLm1zZWNzLCBfc3RhdGUuc2VxLCBidWYsIG9mZnNldCk7XG4gICAgfVxuICAgIHJldHVybiBidWYgPz8gdW5zYWZlU3RyaW5naWZ5KGJ5dGVzKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVWN1N0YXRlKHN0YXRlLCBub3csIHJuZHMpIHtcbiAgICBzdGF0ZS5tc2VjcyA/Pz0gLUluZmluaXR5O1xuICAgIHN0YXRlLnNlcSA/Pz0gMDtcbiAgICBpZiAobm93ID4gc3RhdGUubXNlY3MpIHtcbiAgICAgICAgc3RhdGUuc2VxID0gKHJuZHNbNl0gPDwgMjMpIHwgKHJuZHNbN10gPDwgMTYpIHwgKHJuZHNbOF0gPDwgOCkgfCBybmRzWzldO1xuICAgICAgICBzdGF0ZS5tc2VjcyA9IG5vdztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHN0YXRlLnNlcSA9IChzdGF0ZS5zZXEgKyAxKSB8IDA7XG4gICAgICAgIGlmIChzdGF0ZS5zZXEgPT09IDApIHtcbiAgICAgICAgICAgIHN0YXRlLm1zZWNzKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlO1xufVxuZnVuY3Rpb24gdjdCeXRlcyhybmRzLCBtc2Vjcywgc2VxLCBidWYsIG9mZnNldCA9IDApIHtcbiAgICBpZiAocm5kcy5sZW5ndGggPCAxNikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1JhbmRvbSBieXRlcyBsZW5ndGggbXVzdCBiZSA+PSAxNicpO1xuICAgIH1cbiAgICBpZiAoIWJ1Zikge1xuICAgICAgICBidWYgPSBuZXcgVWludDhBcnJheSgxNik7XG4gICAgICAgIG9mZnNldCA9IDA7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAob2Zmc2V0IDwgMCB8fCBvZmZzZXQgKyAxNiA+IGJ1Zi5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKGBVVUlEIGJ5dGUgcmFuZ2UgJHtvZmZzZXR9OiR7b2Zmc2V0ICsgMTV9IGlzIG91dCBvZiBidWZmZXIgYm91bmRzYCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbXNlY3MgPz89IERhdGUubm93KCk7XG4gICAgc2VxID8/PSAoKHJuZHNbNl0gKiAweDdmKSA8PCAyNCkgfCAocm5kc1s3XSA8PCAxNikgfCAocm5kc1s4XSA8PCA4KSB8IHJuZHNbOV07XG4gICAgYnVmW29mZnNldCsrXSA9IChtc2VjcyAvIDB4MTAwMDAwMDAwMDApICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKG1zZWNzIC8gMHgxMDAwMDAwMDApICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKG1zZWNzIC8gMHgxMDAwMDAwKSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IChtc2VjcyAvIDB4MTAwMDApICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gKG1zZWNzIC8gMHgxMDApICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gbXNlY3MgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAweDcwIHwgKChzZXEgPj4+IDI4KSAmIDB4MGYpO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAoc2VxID4+PiAyMCkgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAweDgwIHwgKChzZXEgPj4+IDE0KSAmIDB4M2YpO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAoc2VxID4+PiA2KSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9ICgoc2VxIDw8IDIpICYgMHhmZikgfCAocm5kc1sxMF0gJiAweDAzKTtcbiAgICBidWZbb2Zmc2V0KytdID0gcm5kc1sxMV07XG4gICAgYnVmW29mZnNldCsrXSA9IHJuZHNbMTJdO1xuICAgIGJ1ZltvZmZzZXQrK10gPSBybmRzWzEzXTtcbiAgICBidWZbb2Zmc2V0KytdID0gcm5kc1sxNF07XG4gICAgYnVmW29mZnNldCsrXSA9IHJuZHNbMTVdO1xuICAgIHJldHVybiBidWY7XG59XG5leHBvcnQgZGVmYXVsdCB2NztcbiIsImV4cG9ydCBkZWZhdWx0IFwiX19WSVRFX0FTU0VUX19EY0NQa0d2el9fXCIiLCJleHBvcnQgZGVmYXVsdCBhc3luYyAob3B0cyA9IHt9LCB1cmwpID0+IHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGlmICh1cmwuc3RhcnRzV2l0aChcImRhdGE6XCIpKSB7XG4gICAgICAgIGNvbnN0IHVybENvbnRlbnQgPSB1cmwucmVwbGFjZSgvXmRhdGE6Lio/YmFzZTY0LC8sIFwiXCIpO1xuICAgICAgICBsZXQgYnl0ZXM7XG4gICAgICAgIGlmICh0eXBlb2YgQnVmZmVyID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIEJ1ZmZlci5mcm9tID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGJ5dGVzID0gQnVmZmVyLmZyb20odXJsQ29udGVudCwgXCJiYXNlNjRcIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGF0b2IgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgY29uc3QgYmluYXJ5U3RyaW5nID0gYXRvYih1cmxDb250ZW50KTtcbiAgICAgICAgICAgIGJ5dGVzID0gbmV3IFVpbnQ4QXJyYXkoYmluYXJ5U3RyaW5nLmxlbmd0aCk7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJpbmFyeVN0cmluZy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGJ5dGVzW2ldID0gYmluYXJ5U3RyaW5nLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZGVjb2RlIGJhc2U2NC1lbmNvZGVkIGRhdGEgVVJMXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdCA9IGF3YWl0IFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlKGJ5dGVzLCBvcHRzKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tZG4vd2ViYXNzZW1ibHktZXhhbXBsZXMvaXNzdWVzLzVcbiAgICAgICAgLy8gV2ViQXNzZW1ibHkuaW5zdGFudGlhdGVTdHJlYW1pbmcgcmVxdWlyZXMgdGhlIHNlcnZlciB0byBwcm92aWRlIHRoZVxuICAgICAgICAvLyBjb3JyZWN0IE1JTUUgdHlwZSBmb3IgLndhc20gZmlsZXMsIHdoaWNoIHVuZm9ydHVuYXRlbHkgZG9lc24ndCB3b3JrIGZvclxuICAgICAgICAvLyBhIGxvdCBvZiBzdGF0aWMgZmlsZSBzZXJ2ZXJzLCBzbyB3ZSBqdXN0IHdvcmsgYXJvdW5kIGl0IGJ5IGdldHRpbmcgdGhlXG4gICAgICAgIC8vIHJhdyBidWZmZXIuXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KFwiQ29udGVudC1UeXBlXCIpIHx8IFwiXCI7XG4gICAgICAgIGlmIChcImluc3RhbnRpYXRlU3RyZWFtaW5nXCIgaW4gV2ViQXNzZW1ibHkgJiYgY29udGVudFR5cGUuc3RhcnRzV2l0aChcImFwcGxpY2F0aW9uL3dhc21cIikpIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGF3YWl0IFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nKHJlc3BvbnNlLCBvcHRzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGJ1ZmZlciA9IGF3YWl0IHJlc3BvbnNlLmFycmF5QnVmZmVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBhd2FpdCBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShidWZmZXIsIG9wdHMpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQuaW5zdGFuY2UuZXhwb3J0cztcbn0iLCJsZXQgd2FzbTtcbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19zZXRfd2FzbSh2YWwpIHtcbiAgICB3YXNtID0gdmFsO1xufVxuXG5mdW5jdGlvbiBhZGRUb0V4dGVybnJlZlRhYmxlMChvYmopIHtcbiAgICBjb25zdCBpZHggPSB3YXNtLl9fZXh0ZXJucmVmX3RhYmxlX2FsbG9jKCk7XG4gICAgd2FzbS5fX3diaW5kZ2VuX2V4dGVybnJlZnMuc2V0KGlkeCwgb2JqKTtcbiAgICByZXR1cm4gaWR4O1xufVxuXG5mdW5jdGlvbiBkZWJ1Z1N0cmluZyh2YWwpIHtcbiAgICAvLyBwcmltaXRpdmUgdHlwZXNcbiAgICBjb25zdCB0eXBlID0gdHlwZW9mIHZhbDtcbiAgICBpZiAodHlwZSA9PSAnbnVtYmVyJyB8fCB0eXBlID09ICdib29sZWFuJyB8fCB2YWwgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gIGAke3ZhbH1gO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PSAnc3RyaW5nJykge1xuICAgICAgICByZXR1cm4gYFwiJHt2YWx9XCJgO1xuICAgIH1cbiAgICBpZiAodHlwZSA9PSAnc3ltYm9sJykge1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IHZhbC5kZXNjcmlwdGlvbjtcbiAgICAgICAgaWYgKGRlc2NyaXB0aW9uID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiAnU3ltYm9sJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBgU3ltYm9sKCR7ZGVzY3JpcHRpb259KWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHR5cGUgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zdCBuYW1lID0gdmFsLm5hbWU7XG4gICAgICAgIGlmICh0eXBlb2YgbmFtZSA9PSAnc3RyaW5nJyAmJiBuYW1lLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiBgRnVuY3Rpb24oJHtuYW1lfSlgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICdGdW5jdGlvbic7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gb2JqZWN0c1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgY29uc3QgbGVuZ3RoID0gdmFsLmxlbmd0aDtcbiAgICAgICAgbGV0IGRlYnVnID0gJ1snO1xuICAgICAgICBpZiAobGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZGVidWcgKz0gZGVidWdTdHJpbmcodmFsWzBdKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRlYnVnICs9ICcsICcgKyBkZWJ1Z1N0cmluZyh2YWxbaV0pO1xuICAgICAgICB9XG4gICAgICAgIGRlYnVnICs9ICddJztcbiAgICAgICAgcmV0dXJuIGRlYnVnO1xuICAgIH1cbiAgICAvLyBUZXN0IGZvciBidWlsdC1pblxuICAgIGNvbnN0IGJ1aWx0SW5NYXRjaGVzID0gL1xcW29iamVjdCAoW15cXF1dKylcXF0vLmV4ZWModG9TdHJpbmcuY2FsbCh2YWwpKTtcbiAgICBsZXQgY2xhc3NOYW1lO1xuICAgIGlmIChidWlsdEluTWF0Y2hlcyAmJiBidWlsdEluTWF0Y2hlcy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGNsYXNzTmFtZSA9IGJ1aWx0SW5NYXRjaGVzWzFdO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEZhaWxlZCB0byBtYXRjaCB0aGUgc3RhbmRhcmQgJ1tvYmplY3QgQ2xhc3NOYW1lXSdcbiAgICAgICAgcmV0dXJuIHRvU3RyaW5nLmNhbGwodmFsKTtcbiAgICB9XG4gICAgaWYgKGNsYXNzTmFtZSA9PSAnT2JqZWN0Jykge1xuICAgICAgICAvLyB3ZSdyZSBhIHVzZXIgZGVmaW5lZCBjbGFzcyBvciBPYmplY3RcbiAgICAgICAgLy8gSlNPTi5zdHJpbmdpZnkgYXZvaWRzIHByb2JsZW1zIHdpdGggY3ljbGVzLCBhbmQgaXMgZ2VuZXJhbGx5IG11Y2hcbiAgICAgICAgLy8gZWFzaWVyIHRoYW4gbG9vcGluZyB0aHJvdWdoIG93blByb3BlcnRpZXMgb2YgYHZhbGAuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gJ09iamVjdCgnICsgSlNPTi5zdHJpbmdpZnkodmFsKSArICcpJztcbiAgICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICAgICAgcmV0dXJuICdPYmplY3QnO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGVycm9yc1xuICAgIGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICByZXR1cm4gYCR7dmFsLm5hbWV9OiAke3ZhbC5tZXNzYWdlfVxcbiR7dmFsLnN0YWNrfWA7XG4gICAgfVxuICAgIC8vIFRPRE8gd2UgY291bGQgdGVzdCBmb3IgbW9yZSB0aGluZ3MgaGVyZSwgbGlrZSBgU2V0YHMgYW5kIGBNYXBgcy5cbiAgICByZXR1cm4gY2xhc3NOYW1lO1xufVxuXG5mdW5jdGlvbiBnZXRBcnJheVU4RnJvbVdhc20wKHB0ciwgbGVuKSB7XG4gICAgcHRyID0gcHRyID4+PiAwO1xuICAgIHJldHVybiBnZXRVaW50OEFycmF5TWVtb3J5MCgpLnN1YmFycmF5KHB0ciAvIDEsIHB0ciAvIDEgKyBsZW4pO1xufVxuXG5sZXQgY2FjaGVkRGF0YVZpZXdNZW1vcnkwID0gbnVsbDtcbmZ1bmN0aW9uIGdldERhdGFWaWV3TWVtb3J5MCgpIHtcbiAgICBpZiAoY2FjaGVkRGF0YVZpZXdNZW1vcnkwID09PSBudWxsIHx8IGNhY2hlZERhdGFWaWV3TWVtb3J5MC5idWZmZXIuZGV0YWNoZWQgPT09IHRydWUgfHwgKGNhY2hlZERhdGFWaWV3TWVtb3J5MC5idWZmZXIuZGV0YWNoZWQgPT09IHVuZGVmaW5lZCAmJiBjYWNoZWREYXRhVmlld01lbW9yeTAuYnVmZmVyICE9PSB3YXNtLm1lbW9yeS5idWZmZXIpKSB7XG4gICAgICAgIGNhY2hlZERhdGFWaWV3TWVtb3J5MCA9IG5ldyBEYXRhVmlldyh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVkRGF0YVZpZXdNZW1vcnkwO1xufVxuXG5mdW5jdGlvbiBnZXRTdHJpbmdGcm9tV2FzbTAocHRyLCBsZW4pIHtcbiAgICBwdHIgPSBwdHIgPj4+IDA7XG4gICAgcmV0dXJuIGRlY29kZVRleHQocHRyLCBsZW4pO1xufVxuXG5sZXQgY2FjaGVkVWludDhBcnJheU1lbW9yeTAgPSBudWxsO1xuZnVuY3Rpb24gZ2V0VWludDhBcnJheU1lbW9yeTAoKSB7XG4gICAgaWYgKGNhY2hlZFVpbnQ4QXJyYXlNZW1vcnkwID09PSBudWxsIHx8IGNhY2hlZFVpbnQ4QXJyYXlNZW1vcnkwLmJ5dGVMZW5ndGggPT09IDApIHtcbiAgICAgICAgY2FjaGVkVWludDhBcnJheU1lbW9yeTAgPSBuZXcgVWludDhBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVkVWludDhBcnJheU1lbW9yeTA7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUVycm9yKGYsIGFyZ3MpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnN0IGlkeCA9IGFkZFRvRXh0ZXJucmVmVGFibGUwKGUpO1xuICAgICAgICB3YXNtLl9fd2JpbmRnZW5fZXhuX3N0b3JlKGlkeCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc0xpa2VOb25lKHgpIHtcbiAgICByZXR1cm4geCA9PT0gdW5kZWZpbmVkIHx8IHggPT09IG51bGw7XG59XG5cbmZ1bmN0aW9uIHBhc3NBcnJheThUb1dhc20wKGFyZywgbWFsbG9jKSB7XG4gICAgY29uc3QgcHRyID0gbWFsbG9jKGFyZy5sZW5ndGggKiAxLCAxKSA+Pj4gMDtcbiAgICBnZXRVaW50OEFycmF5TWVtb3J5MCgpLnNldChhcmcsIHB0ciAvIDEpO1xuICAgIFdBU01fVkVDVE9SX0xFTiA9IGFyZy5sZW5ndGg7XG4gICAgcmV0dXJuIHB0cjtcbn1cblxuZnVuY3Rpb24gcGFzc1N0cmluZ1RvV2FzbTAoYXJnLCBtYWxsb2MsIHJlYWxsb2MpIHtcbiAgICBpZiAocmVhbGxvYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbnN0IGJ1ZiA9IGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZShhcmcpO1xuICAgICAgICBjb25zdCBwdHIgPSBtYWxsb2MoYnVmLmxlbmd0aCwgMSkgPj4+IDA7XG4gICAgICAgIGdldFVpbnQ4QXJyYXlNZW1vcnkwKCkuc3ViYXJyYXkocHRyLCBwdHIgKyBidWYubGVuZ3RoKS5zZXQoYnVmKTtcbiAgICAgICAgV0FTTV9WRUNUT1JfTEVOID0gYnVmLmxlbmd0aDtcbiAgICAgICAgcmV0dXJuIHB0cjtcbiAgICB9XG5cbiAgICBsZXQgbGVuID0gYXJnLmxlbmd0aDtcbiAgICBsZXQgcHRyID0gbWFsbG9jKGxlbiwgMSkgPj4+IDA7XG5cbiAgICBjb25zdCBtZW0gPSBnZXRVaW50OEFycmF5TWVtb3J5MCgpO1xuXG4gICAgbGV0IG9mZnNldCA9IDA7XG5cbiAgICBmb3IgKDsgb2Zmc2V0IDwgbGVuOyBvZmZzZXQrKykge1xuICAgICAgICBjb25zdCBjb2RlID0gYXJnLmNoYXJDb2RlQXQob2Zmc2V0KTtcbiAgICAgICAgaWYgKGNvZGUgPiAweDdGKSBicmVhaztcbiAgICAgICAgbWVtW3B0ciArIG9mZnNldF0gPSBjb2RlO1xuICAgIH1cbiAgICBpZiAob2Zmc2V0ICE9PSBsZW4pIHtcbiAgICAgICAgaWYgKG9mZnNldCAhPT0gMCkge1xuICAgICAgICAgICAgYXJnID0gYXJnLnNsaWNlKG9mZnNldCk7XG4gICAgICAgIH1cbiAgICAgICAgcHRyID0gcmVhbGxvYyhwdHIsIGxlbiwgbGVuID0gb2Zmc2V0ICsgYXJnLmxlbmd0aCAqIDMsIDEpID4+PiAwO1xuICAgICAgICBjb25zdCB2aWV3ID0gZ2V0VWludDhBcnJheU1lbW9yeTAoKS5zdWJhcnJheShwdHIgKyBvZmZzZXQsIHB0ciArIGxlbik7XG4gICAgICAgIGNvbnN0IHJldCA9IGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZUludG8oYXJnLCB2aWV3KTtcblxuICAgICAgICBvZmZzZXQgKz0gcmV0LndyaXR0ZW47XG4gICAgICAgIHB0ciA9IHJlYWxsb2MocHRyLCBsZW4sIG9mZnNldCwgMSkgPj4+IDA7XG4gICAgfVxuXG4gICAgV0FTTV9WRUNUT1JfTEVOID0gb2Zmc2V0O1xuICAgIHJldHVybiBwdHI7XG59XG5cbmZ1bmN0aW9uIHRha2VGcm9tRXh0ZXJucmVmVGFibGUwKGlkeCkge1xuICAgIGNvbnN0IHZhbHVlID0gd2FzbS5fX3diaW5kZ2VuX2V4dGVybnJlZnMuZ2V0KGlkeCk7XG4gICAgd2FzbS5fX2V4dGVybnJlZl90YWJsZV9kZWFsbG9jKGlkeCk7XG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5sZXQgY2FjaGVkVGV4dERlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoJ3V0Zi04JywgeyBpZ25vcmVCT006IHRydWUsIGZhdGFsOiB0cnVlIH0pO1xuY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKCk7XG5jb25zdCBNQVhfU0FGQVJJX0RFQ09ERV9CWVRFUyA9IDIxNDY0MzUwNzI7XG5sZXQgbnVtQnl0ZXNEZWNvZGVkID0gMDtcbmZ1bmN0aW9uIGRlY29kZVRleHQocHRyLCBsZW4pIHtcbiAgICBudW1CeXRlc0RlY29kZWQgKz0gbGVuO1xuICAgIGlmIChudW1CeXRlc0RlY29kZWQgPj0gTUFYX1NBRkFSSV9ERUNPREVfQllURVMpIHtcbiAgICAgICAgY2FjaGVkVGV4dERlY29kZXIgPSBuZXcgVGV4dERlY29kZXIoJ3V0Zi04JywgeyBpZ25vcmVCT006IHRydWUsIGZhdGFsOiB0cnVlIH0pO1xuICAgICAgICBjYWNoZWRUZXh0RGVjb2Rlci5kZWNvZGUoKTtcbiAgICAgICAgbnVtQnl0ZXNEZWNvZGVkID0gbGVuO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKGdldFVpbnQ4QXJyYXlNZW1vcnkwKCkuc3ViYXJyYXkocHRyLCBwdHIgKyBsZW4pKTtcbn1cblxuY29uc3QgY2FjaGVkVGV4dEVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKTtcblxuaWYgKCEoJ2VuY29kZUludG8nIGluIGNhY2hlZFRleHRFbmNvZGVyKSkge1xuICAgIGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZUludG8gPSBmdW5jdGlvbiAoYXJnLCB2aWV3KSB7XG4gICAgICAgIGNvbnN0IGJ1ZiA9IGNhY2hlZFRleHRFbmNvZGVyLmVuY29kZShhcmcpO1xuICAgICAgICB2aWV3LnNldChidWYpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVhZDogYXJnLmxlbmd0aCxcbiAgICAgICAgICAgIHdyaXR0ZW46IGJ1Zi5sZW5ndGhcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmxldCBXQVNNX1ZFQ1RPUl9MRU4gPSAwO1xuXG4vKipcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjdXJyZW50VmVyc2lvbigpIHtcbiAgICBsZXQgZGVmZXJyZWQxXzA7XG4gICAgbGV0IGRlZmVycmVkMV8xO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJldCA9IHdhc20uY3VycmVudFZlcnNpb24oKTtcbiAgICAgICAgZGVmZXJyZWQxXzAgPSByZXRbMF07XG4gICAgICAgIGRlZmVycmVkMV8xID0gcmV0WzFdO1xuICAgICAgICByZXR1cm4gZ2V0U3RyaW5nRnJvbVdhc20wKHJldFswXSwgcmV0WzFdKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgICB3YXNtLl9fd2JpbmRnZW5fZnJlZShkZWZlcnJlZDFfMCwgZGVmZXJyZWQxXzEsIDEpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBAcGFyYW0ge2FueX0gaW5wdXRcbiAqIEByZXR1cm5zIHthbnl9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtaWdyYXRlRG9jdW1lbnQoaW5wdXQpIHtcbiAgICBjb25zdCByZXQgPSB3YXNtLm1pZ3JhdGVEb2N1bWVudChpbnB1dCk7XG4gICAgaWYgKHJldFsyXSkge1xuICAgICAgICB0aHJvdyB0YWtlRnJvbUV4dGVybnJlZlRhYmxlMChyZXRbMV0pO1xuICAgIH1cbiAgICByZXR1cm4gdGFrZUZyb21FeHRlcm5yZWZUYWJsZTAocmV0WzBdKTtcbn1cblxuLyoqXG4gKiBTZXJpYWxpemUgYW4gQXV0b21lcmdlIGRvY3VtZW50IHRvIEpTT04sIGVuY29kaW5nIHJpY2gtdGV4dCBzcGFucy5cbiAqIEBwYXJhbSB7VWludDhBcnJheX0gaW5wdXRcbiAqIEByZXR1cm5zIHthbnl9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVBdXRvbWVyZ2VEb2N1bWVudChpbnB1dCkge1xuICAgIGNvbnN0IHB0cjAgPSBwYXNzQXJyYXk4VG9XYXNtMChpbnB1dCwgd2FzbS5fX3diaW5kZ2VuX21hbGxvYyk7XG4gICAgY29uc3QgbGVuMCA9IFdBU01fVkVDVE9SX0xFTjtcbiAgICBjb25zdCByZXQgPSB3YXNtLnNlcmlhbGl6ZUF1dG9tZXJnZURvY3VtZW50KHB0cjAsIGxlbjApO1xuICAgIGlmIChyZXRbMl0pIHtcbiAgICAgICAgdGhyb3cgdGFrZUZyb21FeHRlcm5yZWZUYWJsZTAocmV0WzFdKTtcbiAgICB9XG4gICAgcmV0dXJuIHRha2VGcm9tRXh0ZXJucmVmVGFibGUwKHJldFswXSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19FcnJvcl81MjY3M2I3ZGU1YTBjYTg5KGFyZzAsIGFyZzEpIHtcbiAgICBjb25zdCByZXQgPSBFcnJvcihnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMCwgYXJnMSkpO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfTnVtYmVyXzJkMWRjZmNmNGVjNTE3MzYoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IE51bWJlcihhcmcwKTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX1N0cmluZ184ZjBlYjM5YTRhNGMyZjY2KGFyZzAsIGFyZzEpIHtcbiAgICBjb25zdCByZXQgPSBTdHJpbmcoYXJnMSk7XG4gICAgY29uc3QgcHRyMSA9IHBhc3NTdHJpbmdUb1dhc20wKHJldCwgd2FzbS5fX3diaW5kZ2VuX21hbGxvYywgd2FzbS5fX3diaW5kZ2VuX3JlYWxsb2MpO1xuICAgIGNvbnN0IGxlbjEgPSBXQVNNX1ZFQ1RPUl9MRU47XG4gICAgZ2V0RGF0YVZpZXdNZW1vcnkwKCkuc2V0SW50MzIoYXJnMCArIDQgKiAxLCBsZW4xLCB0cnVlKTtcbiAgICBnZXREYXRhVmlld01lbW9yeTAoKS5zZXRJbnQzMihhcmcwICsgNCAqIDAsIHB0cjEsIHRydWUpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX19fd2JpbmRnZW5fYmlnaW50X2dldF9hc19pNjRfNmUzMmY1ZTZhZmYwMmUxZChhcmcwLCBhcmcxKSB7XG4gICAgY29uc3QgdiA9IGFyZzE7XG4gICAgY29uc3QgcmV0ID0gdHlwZW9mKHYpID09PSAnYmlnaW50JyA/IHYgOiB1bmRlZmluZWQ7XG4gICAgZ2V0RGF0YVZpZXdNZW1vcnkwKCkuc2V0QmlnSW50NjQoYXJnMCArIDggKiAxLCBpc0xpa2VOb25lKHJldCkgPyBCaWdJbnQoMCkgOiByZXQsIHRydWUpO1xuICAgIGdldERhdGFWaWV3TWVtb3J5MCgpLnNldEludDMyKGFyZzAgKyA0ICogMCwgIWlzTGlrZU5vbmUocmV0KSwgdHJ1ZSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfX193YmluZGdlbl9ib29sZWFuX2dldF9kZWEyNWIzMzg4MmI4OTViKGFyZzApIHtcbiAgICBjb25zdCB2ID0gYXJnMDtcbiAgICBjb25zdCByZXQgPSB0eXBlb2YodikgPT09ICdib29sZWFuJyA/IHYgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIGlzTGlrZU5vbmUocmV0KSA/IDB4RkZGRkZGIDogcmV0ID8gMSA6IDA7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfX193YmluZGdlbl9kZWJ1Z19zdHJpbmdfYWRmYjY2MmFlMzQ3MjRiNihhcmcwLCBhcmcxKSB7XG4gICAgY29uc3QgcmV0ID0gZGVidWdTdHJpbmcoYXJnMSk7XG4gICAgY29uc3QgcHRyMSA9IHBhc3NTdHJpbmdUb1dhc20wKHJldCwgd2FzbS5fX3diaW5kZ2VuX21hbGxvYywgd2FzbS5fX3diaW5kZ2VuX3JlYWxsb2MpO1xuICAgIGNvbnN0IGxlbjEgPSBXQVNNX1ZFQ1RPUl9MRU47XG4gICAgZ2V0RGF0YVZpZXdNZW1vcnkwKCkuc2V0SW50MzIoYXJnMCArIDQgKiAxLCBsZW4xLCB0cnVlKTtcbiAgICBnZXREYXRhVmlld01lbW9yeTAoKS5zZXRJbnQzMihhcmcwICsgNCAqIDAsIHB0cjEsIHRydWUpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX19fd2JpbmRnZW5faW5fMGQzZTFlOGYwYzY2OTMxNyhhcmcwLCBhcmcxKSB7XG4gICAgY29uc3QgcmV0ID0gYXJnMCBpbiBhcmcxO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfX193YmluZGdlbl9pc19iaWdpbnRfMGUxYTJlM2Y1NWNmYWUyNyhhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gdHlwZW9mKGFyZzApID09PSAnYmlnaW50JztcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX19fd2JpbmRnZW5faXNfZnVuY3Rpb25fOGQ0MDBiOGIxYWY5NzhjZChhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gdHlwZW9mKGFyZzApID09PSAnZnVuY3Rpb24nO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfX193YmluZGdlbl9pc19vYmplY3RfY2U3NzRmMzQ5MDY5MjM4NihhcmcwKSB7XG4gICAgY29uc3QgdmFsID0gYXJnMDtcbiAgICBjb25zdCByZXQgPSB0eXBlb2YodmFsKSA9PT0gJ29iamVjdCcgJiYgdmFsICE9PSBudWxsO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfX193YmluZGdlbl9pc19zdHJpbmdfNzA0ZWY5YzhmYzEzMTAzMChhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gdHlwZW9mKGFyZzApID09PSAnc3RyaW5nJztcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX19fd2JpbmRnZW5fanN2YWxfZXFfYjYxMDFjYzljZWYxZmUzNihhcmcwLCBhcmcxKSB7XG4gICAgY29uc3QgcmV0ID0gYXJnMCA9PT0gYXJnMTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX19fd2JpbmRnZW5fanN2YWxfbG9vc2VfZXFfNzY2MDU3NjAwZmRkMWIwZChhcmcwLCBhcmcxKSB7XG4gICAgY29uc3QgcmV0ID0gYXJnMCA9PSBhcmcxO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfX193YmluZGdlbl9udW1iZXJfZ2V0Xzk2MTkxODVhNzQxOTdmOTUoYXJnMCwgYXJnMSkge1xuICAgIGNvbnN0IG9iaiA9IGFyZzE7XG4gICAgY29uc3QgcmV0ID0gdHlwZW9mKG9iaikgPT09ICdudW1iZXInID8gb2JqIDogdW5kZWZpbmVkO1xuICAgIGdldERhdGFWaWV3TWVtb3J5MCgpLnNldEZsb2F0NjQoYXJnMCArIDggKiAxLCBpc0xpa2VOb25lKHJldCkgPyAwIDogcmV0LCB0cnVlKTtcbiAgICBnZXREYXRhVmlld01lbW9yeTAoKS5zZXRJbnQzMihhcmcwICsgNCAqIDAsICFpc0xpa2VOb25lKHJldCksIHRydWUpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX19fd2JpbmRnZW5fc3RyaW5nX2dldF9hMmEzMWUxNmVkZjk2ZTQyKGFyZzAsIGFyZzEpIHtcbiAgICBjb25zdCBvYmogPSBhcmcxO1xuICAgIGNvbnN0IHJldCA9IHR5cGVvZihvYmopID09PSAnc3RyaW5nJyA/IG9iaiA6IHVuZGVmaW5lZDtcbiAgICB2YXIgcHRyMSA9IGlzTGlrZU5vbmUocmV0KSA/IDAgOiBwYXNzU3RyaW5nVG9XYXNtMChyZXQsIHdhc20uX193YmluZGdlbl9tYWxsb2MsIHdhc20uX193YmluZGdlbl9yZWFsbG9jKTtcbiAgICB2YXIgbGVuMSA9IFdBU01fVkVDVE9SX0xFTjtcbiAgICBnZXREYXRhVmlld01lbW9yeTAoKS5zZXRJbnQzMihhcmcwICsgNCAqIDEsIGxlbjEsIHRydWUpO1xuICAgIGdldERhdGFWaWV3TWVtb3J5MCgpLnNldEludDMyKGFyZzAgKyA0ICogMCwgcHRyMSwgdHJ1ZSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfX193YmluZGdlbl90aHJvd19kZDI0NDE3ZWQzNmZjNDZlKGFyZzAsIGFyZzEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19jYWxsX2FiYjRmZjQ2Y2UzOGJlNDAoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoYXJnMCwgYXJnMSkge1xuICAgIGNvbnN0IHJldCA9IGFyZzAuY2FsbChhcmcxKTtcbiAgICByZXR1cm4gcmV0O1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfZG9uZV82MmVhMTZhZjRjZTM0YjI0KGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBhcmcwLmRvbmU7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19lbnRyaWVzXzgzYzc5OTM4MDU0ZTA2NWYoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IE9iamVjdC5lbnRyaWVzKGFyZzApO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfZ2V0UmFuZG9tVmFsdWVzXzNjOWMwZDU4NmU1NzVhMTYoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoYXJnMCwgYXJnMSkge1xuICAgIGdsb2JhbFRoaXMuY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhnZXRBcnJheVU4RnJvbVdhc20wKGFyZzAsIGFyZzEpKTtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2dldF82YjdiZDUyYWNhM2Y5NjcxKGFyZzAsIGFyZzEpIHtcbiAgICBjb25zdCByZXQgPSBhcmcwW2FyZzEgPj4+IDBdO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfZ2V0X2FmOWRhYjdlOTYwM2VhOTMoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoYXJnMCwgYXJnMSkge1xuICAgIGNvbnN0IHJldCA9IFJlZmxlY3QuZ2V0KGFyZzAsIGFyZzEpO1xuICAgIHJldHVybiByZXQ7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19pbnN0YW5jZW9mX0FycmF5QnVmZmVyX2YzMzIwZDI0MTljZDAzNTUoYXJnMCkge1xuICAgIGxldCByZXN1bHQ7XG4gICAgdHJ5IHtcbiAgICAgICAgcmVzdWx0ID0gYXJnMCBpbnN0YW5jZW9mIEFycmF5QnVmZmVyO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IHJldCA9IHJlc3VsdDtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2luc3RhbmNlb2ZfTWFwXzA4NGJlOGRhNzQzNjQxNTgoYXJnMCkge1xuICAgIGxldCByZXN1bHQ7XG4gICAgdHJ5IHtcbiAgICAgICAgcmVzdWx0ID0gYXJnMCBpbnN0YW5jZW9mIE1hcDtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCByZXQgPSByZXN1bHQ7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19pbnN0YW5jZW9mX1VpbnQ4QXJyYXlfZGE1NGNjYzlkM2UwOTQzNChhcmcwKSB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICB0cnkge1xuICAgICAgICByZXN1bHQgPSBhcmcwIGluc3RhbmNlb2YgVWludDhBcnJheTtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCByZXQgPSByZXN1bHQ7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19pc0FycmF5XzUxZmQ5ZTY0MjJjMGEzOTUoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IEFycmF5LmlzQXJyYXkoYXJnMCk7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19pc1NhZmVJbnRlZ2VyX2FlN2QzZjA1NGQ1NWZhMTYoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IE51bWJlci5pc1NhZmVJbnRlZ2VyKGFyZzApO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfaXRlcmF0b3JfMjdiN2M4YjM1YWIzZTg2YigpIHtcbiAgICBjb25zdCByZXQgPSBTeW1ib2wuaXRlcmF0b3I7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19sZW5ndGhfMjJhYzIzZWFlYzlkODA1MyhhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gYXJnMC5sZW5ndGg7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19sZW5ndGhfZDQ1MDQwYTQwYzU3MDM2MihhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gYXJnMC5sZW5ndGg7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19uZXdfMWJhMjFjZTMxOWEwNjI5NygpIHtcbiAgICBjb25zdCByZXQgPSBuZXcgT2JqZWN0KCk7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19uZXdfMjVmMjM5Nzc4ZDYxMTJiOSgpIHtcbiAgICBjb25zdCByZXQgPSBuZXcgQXJyYXkoKTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX25ld182NDIxZjYwODRjYzViYzVhKGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBuZXcgVWludDhBcnJheShhcmcwKTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX25ld19iNTQ2YWUxMjA3MTg4NTBlKCkge1xuICAgIGNvbnN0IHJldCA9IG5ldyBNYXAoKTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX25leHRfMTM4YTE3YmJmMDRlOTI2YyhhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gYXJnMC5uZXh0O1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfbmV4dF8zY2ZlNWMwZmUyYTRjYzUzKCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBhcmcwLm5leHQoKTtcbiAgICByZXR1cm4gcmV0O1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfcHJvdG90eXBlc2V0Y2FsbF9kZmU5Yjc2NmNkYzFmMWZkKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICBVaW50OEFycmF5LnByb3RvdHlwZS5zZXQuY2FsbChnZXRBcnJheVU4RnJvbVdhc20wKGFyZzAsIGFyZzEpLCBhcmcyKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19zZXRfM2YxZDBiOTg0ZWQyNzJlZChhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgYXJnMFthcmcxXSA9IGFyZzI7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193Ymdfc2V0XzdkZjQzM2VlYTAzYTVjMTQoYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIGFyZzBbYXJnMSA+Pj4gMF0gPSBhcmcyO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX3NldF9lZmFhZjE0NWI5Mzc3MzY5KGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICBjb25zdCByZXQgPSBhcmcwLnNldChhcmcxLCBhcmcyKTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX3ZhbHVlXzU3YjdiMDM1ZTExN2Y3ZWUoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IGFyZzAudmFsdWU7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX2Nhc3RfMjI0MWI2YWY0YzRiMjk0MShhcmcwLCBhcmcxKSB7XG4gICAgLy8gQ2FzdCBpbnRyaW5zaWMgZm9yIGBSZWYoU3RyaW5nKSAtPiBFeHRlcm5yZWZgLlxuICAgIGNvbnN0IHJldCA9IGdldFN0cmluZ0Zyb21XYXNtMChhcmcwLCBhcmcxKTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5fY2FzdF80NjI1YzU3N2FiMmVjOWVlKGFyZzApIHtcbiAgICAvLyBDYXN0IGludHJpbnNpYyBmb3IgYFU2NCAtPiBFeHRlcm5yZWZgLlxuICAgIGNvbnN0IHJldCA9IEJpZ0ludC5hc1VpbnROKDY0LCBhcmcwKTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5fY2FzdF85YWUwNjA3NTA3YWJiMDU3KGFyZzApIHtcbiAgICAvLyBDYXN0IGludHJpbnNpYyBmb3IgYEk2NCAtPiBFeHRlcm5yZWZgLlxuICAgIGNvbnN0IHJldCA9IGFyZzA7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX2Nhc3RfZDZjZDE5YjgxNTYwZmQ2ZShhcmcwKSB7XG4gICAgLy8gQ2FzdCBpbnRyaW5zaWMgZm9yIGBGNjQgLT4gRXh0ZXJucmVmYC5cbiAgICBjb25zdCByZXQgPSBhcmcwO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9pbml0X2V4dGVybnJlZl90YWJsZSgpIHtcbiAgICBjb25zdCB0YWJsZSA9IHdhc20uX193YmluZGdlbl9leHRlcm5yZWZzO1xuICAgIGNvbnN0IG9mZnNldCA9IHRhYmxlLmdyb3coNCk7XG4gICAgdGFibGUuc2V0KDAsIHVuZGVmaW5lZCk7XG4gICAgdGFibGUuc2V0KG9mZnNldCArIDAsIHVuZGVmaW5lZCk7XG4gICAgdGFibGUuc2V0KG9mZnNldCArIDEsIG51bGwpO1xuICAgIHRhYmxlLnNldChvZmZzZXQgKyAyLCB0cnVlKTtcbiAgICB0YWJsZS5zZXQob2Zmc2V0ICsgMywgZmFsc2UpO1xufTtcbiIsIlxuVVJMID0gZ2xvYmFsVGhpcy5VUkxcbmltcG9ydCBfX3ZpdGVfX3dhc21VcmwgZnJvbSBcIi9Vc2Vycy9wYXVsL3JlcG9zL0NhdENvbGFiL3BhY2thZ2VzL2RvY3VtZW50LXR5cGVzL3BrZy9jYXRjb2xhYl9kb2N1bWVudF90eXBlc19iZy53YXNtP3VybFwiXG5pbXBvcnQgX192aXRlX19pbml0V2FzbSBmcm9tIFwiL19fdml0ZS1wbHVnaW4td2FzbS1oZWxwZXJcIlxuaW1wb3J0ICogYXMgX192aXRlX193YXNtSW1wb3J0XzAgZnJvbSBcIi4vY2F0Y29sYWJfZG9jdW1lbnRfdHlwZXNfYmcuanNcIjtcbmNvbnN0IF9fdml0ZV9fd2FzbU1vZHVsZSA9IGF3YWl0IF9fdml0ZV9faW5pdFdhc20oeyBcIi4vY2F0Y29sYWJfZG9jdW1lbnRfdHlwZXNfYmcuanNcIjogeyBcIl9fd2JnX2dldFJhbmRvbVZhbHVlc18zYzljMGQ1ODZlNTc1YTE2XCI6IF9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfZ2V0UmFuZG9tVmFsdWVzXzNjOWMwZDU4NmU1NzVhMTZcIl0sXG5cIl9fd2JnX3NldF8zZjFkMGI5ODRlZDI3MmVkXCI6IF9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193Ymdfc2V0XzNmMWQwYjk4NGVkMjcyZWRcIl0sXG5cIl9fd2JnX1N0cmluZ184ZjBlYjM5YTRhNGMyZjY2XCI6IF9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfU3RyaW5nXzhmMGViMzlhNGE0YzJmNjZcIl0sXG5cIl9fd2JnX2l0ZXJhdG9yXzI3YjdjOGIzNWFiM2U4NmJcIjogX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19pdGVyYXRvcl8yN2I3YzhiMzVhYjNlODZiXCJdLFxuXCJfX3diZ19uZXdfMjVmMjM5Nzc4ZDYxMTJiOVwiOiBfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX25ld18yNWYyMzk3NzhkNjExMmI5XCJdLFxuXCJfX3diZ19nZXRfNmI3YmQ1MmFjYTNmOTY3MVwiOiBfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX2dldF82YjdiZDUyYWNhM2Y5NjcxXCJdLFxuXCJfX3diZ19zZXRfN2RmNDMzZWVhMDNhNWMxNFwiOiBfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX3NldF83ZGY0MzNlZWEwM2E1YzE0XCJdLFxuXCJfX3diZ19pc0FycmF5XzUxZmQ5ZTY0MjJjMGEzOTVcIjogX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19pc0FycmF5XzUxZmQ5ZTY0MjJjMGEzOTVcIl0sXG5cIl9fd2JnX2xlbmd0aF9kNDUwNDBhNDBjNTcwMzYyXCI6IF9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfbGVuZ3RoX2Q0NTA0MGE0MGM1NzAzNjJcIl0sXG5cIl9fd2JnX2NhbGxfYWJiNGZmNDZjZTM4YmU0MFwiOiBfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX2NhbGxfYWJiNGZmNDZjZTM4YmU0MFwiXSxcblwiX193YmdfbmV3X2I1NDZhZTEyMDcxODg1MGVcIjogX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19uZXdfYjU0NmFlMTIwNzE4ODUwZVwiXSxcblwiX193Ymdfc2V0X2VmYWFmMTQ1YjkzNzczNjlcIjogX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19zZXRfZWZhYWYxNDViOTM3NzM2OVwiXSxcblwiX193YmdfaXNTYWZlSW50ZWdlcl9hZTdkM2YwNTRkNTVmYTE2XCI6IF9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfaXNTYWZlSW50ZWdlcl9hZTdkM2YwNTRkNTVmYTE2XCJdLFxuXCJfX3diZ19uZXh0XzNjZmU1YzBmZTJhNGNjNTNcIjogX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19uZXh0XzNjZmU1YzBmZTJhNGNjNTNcIl0sXG5cIl9fd2JnX2RvbmVfNjJlYTE2YWY0Y2UzNGIyNFwiOiBfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX2RvbmVfNjJlYTE2YWY0Y2UzNGIyNFwiXSxcblwiX193YmdfdmFsdWVfNTdiN2IwMzVlMTE3ZjdlZVwiOiBfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX3ZhbHVlXzU3YjdiMDM1ZTExN2Y3ZWVcIl0sXG5cIl9fd2JnX2VudHJpZXNfODNjNzk5MzgwNTRlMDY1ZlwiOiBfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX2VudHJpZXNfODNjNzk5MzgwNTRlMDY1ZlwiXSxcblwiX193YmdfbmV3XzFiYTIxY2UzMTlhMDYyOTdcIjogX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19uZXdfMWJhMjFjZTMxOWEwNjI5N1wiXSxcblwiX193YmdfbGVuZ3RoXzIyYWMyM2VhZWM5ZDgwNTNcIjogX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19sZW5ndGhfMjJhYzIzZWFlYzlkODA1M1wiXSxcblwiX193YmdfcHJvdG90eXBlc2V0Y2FsbF9kZmU5Yjc2NmNkYzFmMWZkXCI6IF9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfcHJvdG90eXBlc2V0Y2FsbF9kZmU5Yjc2NmNkYzFmMWZkXCJdLFxuXCJfX3diZ19uZXdfNjQyMWY2MDg0Y2M1YmM1YVwiOiBfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX25ld182NDIxZjYwODRjYzViYzVhXCJdLFxuXCJfX3diZ19uZXh0XzEzOGExN2JiZjA0ZTkyNmNcIjogX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19uZXh0XzEzOGExN2JiZjA0ZTkyNmNcIl0sXG5cIl9fd2JnX2luc3RhbmNlb2ZfTWFwXzA4NGJlOGRhNzQzNjQxNThcIjogX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19pbnN0YW5jZW9mX01hcF8wODRiZThkYTc0MzY0MTU4XCJdLFxuXCJfX3diZ19pbnN0YW5jZW9mX1VpbnQ4QXJyYXlfZGE1NGNjYzlkM2UwOTQzNFwiOiBfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX2luc3RhbmNlb2ZfVWludDhBcnJheV9kYTU0Y2NjOWQzZTA5NDM0XCJdLFxuXCJfX3diZ19pbnN0YW5jZW9mX0FycmF5QnVmZmVyX2YzMzIwZDI0MTljZDAzNTVcIjogX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19pbnN0YW5jZW9mX0FycmF5QnVmZmVyX2YzMzIwZDI0MTljZDAzNTVcIl0sXG5cIl9fd2JnX2dldF9hZjlkYWI3ZTk2MDNlYTkzXCI6IF9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfZ2V0X2FmOWRhYjdlOTYwM2VhOTNcIl0sXG5cIl9fd2JnX19fd2JpbmRnZW5fbnVtYmVyX2dldF85NjE5MTg1YTc0MTk3Zjk1XCI6IF9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfX193YmluZGdlbl9udW1iZXJfZ2V0Xzk2MTkxODVhNzQxOTdmOTVcIl0sXG5cIl9fd2JnX19fd2JpbmRnZW5faW5fMGQzZTFlOGYwYzY2OTMxN1wiOiBfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX19fd2JpbmRnZW5faW5fMGQzZTFlOGYwYzY2OTMxN1wiXSxcblwiX193YmdfX193YmluZGdlbl90aHJvd19kZDI0NDE3ZWQzNmZjNDZlXCI6IF9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfX193YmluZGdlbl90aHJvd19kZDI0NDE3ZWQzNmZjNDZlXCJdLFxuXCJfX3diZ19fX3diaW5kZ2VuX2pzdmFsX2VxX2I2MTAxY2M5Y2VmMWZlMzZcIjogX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19fX3diaW5kZ2VuX2pzdmFsX2VxX2I2MTAxY2M5Y2VmMWZlMzZcIl0sXG5cIl9fd2JnX0Vycm9yXzUyNjczYjdkZTVhMGNhODlcIjogX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19FcnJvcl81MjY3M2I3ZGU1YTBjYTg5XCJdLFxuXCJfX3diZ19fX3diaW5kZ2VuX2lzX2JpZ2ludF8wZTFhMmUzZjU1Y2ZhZTI3XCI6IF9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfX193YmluZGdlbl9pc19iaWdpbnRfMGUxYTJlM2Y1NWNmYWUyN1wiXSxcblwiX193YmdfX193YmluZGdlbl9pc19vYmplY3RfY2U3NzRmMzQ5MDY5MjM4NlwiOiBfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX19fd2JpbmRnZW5faXNfb2JqZWN0X2NlNzc0ZjM0OTA2OTIzODZcIl0sXG5cIl9fd2JnX19fd2JpbmRnZW5faXNfc3RyaW5nXzcwNGVmOWM4ZmMxMzEwMzBcIjogX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19fX3diaW5kZ2VuX2lzX3N0cmluZ183MDRlZjljOGZjMTMxMDMwXCJdLFxuXCJfX3diZ19fX3diaW5kZ2VuX3N0cmluZ19nZXRfYTJhMzFlMTZlZGY5NmU0MlwiOiBfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX19fd2JpbmRnZW5fc3RyaW5nX2dldF9hMmEzMWUxNmVkZjk2ZTQyXCJdLFxuXCJfX3diZ19fX3diaW5kZ2VuX2Jvb2xlYW5fZ2V0X2RlYTI1YjMzODgyYjg5NWJcIjogX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19fX3diaW5kZ2VuX2Jvb2xlYW5fZ2V0X2RlYTI1YjMzODgyYjg5NWJcIl0sXG5cIl9fd2JnX19fd2JpbmRnZW5faXNfZnVuY3Rpb25fOGQ0MDBiOGIxYWY5NzhjZFwiOiBfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX19fd2JpbmRnZW5faXNfZnVuY3Rpb25fOGQ0MDBiOGIxYWY5NzhjZFwiXSxcblwiX193YmdfX193YmluZGdlbl9qc3ZhbF9sb29zZV9lcV83NjYwNTc2MDBmZGQxYjBkXCI6IF9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfX193YmluZGdlbl9qc3ZhbF9sb29zZV9lcV83NjYwNTc2MDBmZGQxYjBkXCJdLFxuXCJfX3diZ19fX3diaW5kZ2VuX2JpZ2ludF9nZXRfYXNfaTY0XzZlMzJmNWU2YWZmMDJlMWRcIjogX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19fX3diaW5kZ2VuX2JpZ2ludF9nZXRfYXNfaTY0XzZlMzJmNWU2YWZmMDJlMWRcIl0sXG5cIl9fd2JnX19fd2JpbmRnZW5fZGVidWdfc3RyaW5nX2FkZmI2NjJhZTM0NzI0YjZcIjogX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19fX3diaW5kZ2VuX2RlYnVnX3N0cmluZ19hZGZiNjYyYWUzNDcyNGI2XCJdLFxuXCJfX3diaW5kZ2VuX2luaXRfZXh0ZXJucmVmX3RhYmxlXCI6IF9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmluZGdlbl9pbml0X2V4dGVybnJlZl90YWJsZVwiXSxcblwiX193YmluZGdlbl9jYXN0X2Q2Y2QxOWI4MTU2MGZkNmVcIjogX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diaW5kZ2VuX2Nhc3RfZDZjZDE5YjgxNTYwZmQ2ZVwiXSxcblwiX193YmluZGdlbl9jYXN0XzIyNDFiNmFmNGM0YjI5NDFcIjogX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diaW5kZ2VuX2Nhc3RfMjI0MWI2YWY0YzRiMjk0MVwiXSxcblwiX193YmluZGdlbl9jYXN0XzlhZTA2MDc1MDdhYmIwNTdcIjogX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diaW5kZ2VuX2Nhc3RfOWFlMDYwNzUwN2FiYjA1N1wiXSxcblwiX193YmluZGdlbl9jYXN0XzQ2MjVjNTc3YWIyZWM5ZWVcIjogX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diaW5kZ2VuX2Nhc3RfNDYyNWM1NzdhYjJlYzllZVwiXSB9IH0sIF9fdml0ZV9fd2FzbVVybCk7XG5leHBvcnQgY29uc3QgbWVtb3J5ID0gX192aXRlX193YXNtTW9kdWxlLm1lbW9yeTtcbmV4cG9ydCBjb25zdCBjdXJyZW50VmVyc2lvbiA9IF9fdml0ZV9fd2FzbU1vZHVsZS5jdXJyZW50VmVyc2lvbjtcbmV4cG9ydCBjb25zdCBtaWdyYXRlRG9jdW1lbnQgPSBfX3ZpdGVfX3dhc21Nb2R1bGUubWlncmF0ZURvY3VtZW50O1xuZXhwb3J0IGNvbnN0IHNlcmlhbGl6ZUF1dG9tZXJnZURvY3VtZW50ID0gX192aXRlX193YXNtTW9kdWxlLnNlcmlhbGl6ZUF1dG9tZXJnZURvY3VtZW50O1xuZXhwb3J0IGNvbnN0IF9fd2JpbmRnZW5fbWFsbG9jID0gX192aXRlX193YXNtTW9kdWxlLl9fd2JpbmRnZW5fbWFsbG9jO1xuZXhwb3J0IGNvbnN0IF9fd2JpbmRnZW5fcmVhbGxvYyA9IF9fdml0ZV9fd2FzbU1vZHVsZS5fX3diaW5kZ2VuX3JlYWxsb2M7XG5leHBvcnQgY29uc3QgX193YmluZGdlbl9leG5fc3RvcmUgPSBfX3ZpdGVfX3dhc21Nb2R1bGUuX193YmluZGdlbl9leG5fc3RvcmU7XG5leHBvcnQgY29uc3QgX19leHRlcm5yZWZfdGFibGVfYWxsb2MgPSBfX3ZpdGVfX3dhc21Nb2R1bGUuX19leHRlcm5yZWZfdGFibGVfYWxsb2M7XG5leHBvcnQgY29uc3QgX193YmluZGdlbl9leHRlcm5yZWZzID0gX192aXRlX193YXNtTW9kdWxlLl9fd2JpbmRnZW5fZXh0ZXJucmVmcztcbmV4cG9ydCBjb25zdCBfX3diaW5kZ2VuX2ZyZWUgPSBfX3ZpdGVfX3dhc21Nb2R1bGUuX193YmluZGdlbl9mcmVlO1xuZXhwb3J0IGNvbnN0IF9fZXh0ZXJucmVmX3RhYmxlX2RlYWxsb2MgPSBfX3ZpdGVfX3dhc21Nb2R1bGUuX19leHRlcm5yZWZfdGFibGVfZGVhbGxvYztcbmV4cG9ydCBjb25zdCBfX3diaW5kZ2VuX3N0YXJ0ID0gX192aXRlX193YXNtTW9kdWxlLl9fd2JpbmRnZW5fc3RhcnQ7XG4iLCJpbXBvcnQgKiBhcyB3YXNtIGZyb20gXCIuL2NhdGNvbGFiX2RvY3VtZW50X3R5cGVzX2JnLndhc21cIjtcbmV4cG9ydCAqIGZyb20gXCIuL2NhdGNvbGFiX2RvY3VtZW50X3R5cGVzX2JnLmpzXCI7XG5pbXBvcnQgeyBfX3diZ19zZXRfd2FzbSB9IGZyb20gXCIuL2NhdGNvbGFiX2RvY3VtZW50X3R5cGVzX2JnLmpzXCI7XG5fX3diZ19zZXRfd2FzbSh3YXNtKTtcbndhc20uX193YmluZGdlbl9zdGFydCgpO1xuIiwidmFyIGlzUHJvZHVjdGlvbiA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbic7XG52YXIgcHJlZml4ID0gJ0ludmFyaWFudCBmYWlsZWQnO1xuZnVuY3Rpb24gaW52YXJpYW50KGNvbmRpdGlvbiwgbWVzc2FnZSkge1xuICAgIGlmIChjb25kaXRpb24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoaXNQcm9kdWN0aW9uKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihwcmVmaXgpO1xuICAgIH1cbiAgICB2YXIgcHJvdmlkZWQgPSB0eXBlb2YgbWVzc2FnZSA9PT0gJ2Z1bmN0aW9uJyA/IG1lc3NhZ2UoKSA6IG1lc3NhZ2U7XG4gICAgdmFyIHZhbHVlID0gcHJvdmlkZWQgPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiOiBcIikuY29uY2F0KHByb3ZpZGVkKSA6IHByZWZpeDtcbiAgICB0aHJvdyBuZXcgRXJyb3IodmFsdWUpO1xufVxuXG5leHBvcnQgeyBpbnZhcmlhbnQgYXMgZGVmYXVsdCB9O1xuIiwiaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcbmltcG9ydCB7IHY3IH0gZnJvbSBcInV1aWRcIjtcblxuaW1wb3J0IHR5cGUgeyBDZWxsLCBOb3RlYm9vayB9IGZyb20gXCJjYXRjb2xhYi1kb2N1bWVudC10eXBlc1wiO1xuXG4vKiogQSBjZWxsIGNvbnRhaW5pbmcgY3VzdG9tIGRhdGEsIHVzdWFsbHkgYSBmb3JtYWwgb2JqZWN0LiAqL1xuZXhwb3J0IHR5cGUgRm9ybWFsQ2VsbDxUPiA9IENlbGw8VD4gJiB7IHRhZzogXCJmb3JtYWxcIiB9O1xuXG4vKiogQSBjZWxsIGNvbnRhaW5pbmcgcmljaCB0ZXh0LiAqL1xuZXhwb3J0IHR5cGUgUmljaFRleHRDZWxsID0gQ2VsbDx1bmtub3duPiAmIHsgdGFnOiBcInJpY2gtdGV4dFwiIH07XG5cbi8qKiBDcmVhdGVzIGFuIGVtcHR5IG5vdGVib29rLiAqL1xuZXhwb3J0IGNvbnN0IG5ld05vdGVib29rID0gPFQ+KCk6IE5vdGVib29rPFQ+ID0+ICh7XG4gICAgY2VsbE9yZGVyOiBbXSxcbiAgICBjZWxsQ29udGVudHM6IHt9LFxufSk7XG5cbi8qKiBDcmVhdGVzIGEgcmljaCB0ZXh0IGNlbGwgd2l0aCB0aGUgZ2l2ZW4gY29udGVudC4gKi9cbmV4cG9ydCBjb25zdCBuZXdSaWNoVGV4dENlbGwgPSAoY29udGVudD86IHN0cmluZyk6IFJpY2hUZXh0Q2VsbCA9PiAoe1xuICAgIHRhZzogXCJyaWNoLXRleHRcIixcbiAgICBpZDogdjcoKSxcbiAgICBjb250ZW50OiBjb250ZW50ID8/IFwiXCIsXG59KTtcblxuLyoqIENyZWF0ZXMgYSBmb3JtYWwgY2VsbCB3aXRoIHRoZSBnaXZlbiBjb250ZW50LiAqL1xuZXhwb3J0IGNvbnN0IG5ld0Zvcm1hbENlbGwgPSA8VD4oY29udGVudDogVCk6IEZvcm1hbENlbGw8VD4gPT4gKHtcbiAgICB0YWc6IFwiZm9ybWFsXCIsXG4gICAgaWQ6IHY3KCksXG4gICAgY29udGVudDogY29udGVudCxcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2VsbHM8VD4obm90ZWJvb2s6IE5vdGVib29rPFQ+KTogQXJyYXk8Q2VsbDxUPj4ge1xuICAgIHJldHVybiBub3RlYm9vay5jZWxsT3JkZXIubWFwKChjZWxsSWQpID0+IGdldENlbGxCeUlkKG5vdGVib29rLCBjZWxsSWQpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvcm1hbENlbGxzPFQ+KG5vdGVib29rOiBOb3RlYm9vazxUPik6IEFycmF5PENlbGw8VD4gJiB7IHRhZzogXCJmb3JtYWxcIiB9PiB7XG4gICAgcmV0dXJuIGdldENlbGxzKG5vdGVib29rKS5maWx0ZXIoKGNlbGwpID0+IGNlbGwudGFnID09PSBcImZvcm1hbFwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEZvcm1hbENvbnRlbnQ8VD4obm90ZWJvb2s6IE5vdGVib29rPFQ+KTogQXJyYXk8VD4ge1xuICAgIHJldHVybiBnZXRGb3JtYWxDZWxscyhub3RlYm9vaykubWFwKChjZWxsKSA9PiBjZWxsLmNvbnRlbnQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2VsbEJ5SWQ8VD4obm90ZWJvb2s6IE5vdGVib29rPFQ+LCBjZWxsSWQ6IHN0cmluZyk6IENlbGw8VD4ge1xuICAgIGNvbnN0IGNlbGwgPSBub3RlYm9vay5jZWxsQ29udGVudHNbY2VsbElkXTtcbiAgICBpbnZhcmlhbnQoY2VsbCwgKCkgPT4gYEZhaWxlZCB0byBmaW5kIG5vdGVib29rIGNlbGwgY29udGVudHMgZm9yIGNlbGwgJyR7Y2VsbElkfSdgKTtcbiAgICByZXR1cm4gY2VsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENlbGxJZEJ5SW5kZXg8VD4obm90ZWJvb2s6IE5vdGVib29rPFQ+LCBpbmRleDogbnVtYmVyKTogc3RyaW5nIHtcbiAgICBjb25zdCBjZWxsSWQgPSBub3RlYm9vay5jZWxsT3JkZXJbaW5kZXhdO1xuICAgIGludmFyaWFudChjZWxsSWQsICgpID0+IGBGYWlsZWQgdG8gZmluZCBub3RlYm9vayBjZWxsIGlkIGF0IGluZGV4ICcke2luZGV4fSdgKTtcbiAgICByZXR1cm4gY2VsbElkO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2VsbEJ5SW5kZXg8VD4obm90ZWJvb2s6IE5vdGVib29rPFQ+LCBpbmRleDogbnVtYmVyKTogQ2VsbDxUPiB7XG4gICAgY29uc3QgY2VsbElkID0gZ2V0Q2VsbElkQnlJbmRleChub3RlYm9vaywgaW5kZXgpO1xuICAgIHJldHVybiBnZXRDZWxsQnlJZChub3RlYm9vaywgY2VsbElkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHRyeUdldENlbGxCeUluZGV4PFQ+KG5vdGVib29rOiBOb3RlYm9vazxUPiwgaW5kZXg6IG51bWJlcik6IENlbGw8VD4gfCBudWxsIHtcbiAgICBjb25zdCBjZWxsSWQgPSBub3RlYm9vay5jZWxsT3JkZXJbaW5kZXhdO1xuICAgIGlmICghY2VsbElkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IGNlbGwgPSBub3RlYm9vay5jZWxsQ29udGVudHNbY2VsbElkXTtcbiAgICBpZiAoIWNlbGwpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIGNlbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRDZWxsPFQ+KG5vdGVib29rOiBOb3RlYm9vazxUPiwgY2VsbDogQ2VsbDxUPikge1xuICAgIG5vdGVib29rLmNlbGxPcmRlci5wdXNoKGNlbGwuaWQpO1xuICAgIG5vdGVib29rLmNlbGxDb250ZW50c1tjZWxsLmlkXSA9IGNlbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnRDZWxsQXRJbmRleDxUPihub3RlYm9vazogTm90ZWJvb2s8VD4sIGNlbGw6IENlbGw8VD4sIGluZGV4OiBudW1iZXIpIHtcbiAgICBub3RlYm9vay5jZWxsT3JkZXIuc3BsaWNlKGluZGV4LCAwLCBjZWxsLmlkKTtcbiAgICBub3RlYm9vay5jZWxsQ29udGVudHNbY2VsbC5pZF0gPSBjZWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlQ2VsbEF0SW5kZXg8VD4obm90ZWJvb2s6IE5vdGVib29rPFQ+LCBpbmRleDogbnVtYmVyKSB7XG4gICAgY29uc3QgY2VsbElkID0gZ2V0Q2VsbElkQnlJbmRleChub3RlYm9vaywgaW5kZXgpO1xuICAgIGRlbGV0ZSBub3RlYm9vay5jZWxsQ29udGVudHNbY2VsbElkXTtcbiAgICBub3RlYm9vay5jZWxsT3JkZXIuc3BsaWNlKGluZGV4LCAxKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVDZWxsVXA8VD4obm90ZWJvb2s6IE5vdGVib29rPFQ+LCBpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKGluZGV4IDw9IDApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IFtjZWxsSWRUb01vdmVVcF0gPSBub3RlYm9vay5jZWxsT3JkZXIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBpbnZhcmlhbnQoY2VsbElkVG9Nb3ZlVXAsICgpID0+IGBGYWlsZWQgdG8gcmVtb3ZlIGNlbGxJZCBhdCBpbmRleCAnJHtpbmRleH0nYCk7XG4gICAgbm90ZWJvb2suY2VsbE9yZGVyLnNwbGljZShpbmRleCAtIDEsIDAsIGNlbGxJZFRvTW92ZVVwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVDZWxsRG93bjxUPihub3RlYm9vazogTm90ZWJvb2s8VD4sIGluZGV4OiBudW1iZXIpIHtcbiAgICBpZiAoaW5kZXggPj0gbm90ZWJvb2suY2VsbE9yZGVyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IFtjZWxsSWRUb01vdmVVcF0gPSBub3RlYm9vay5jZWxsT3JkZXIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICBpbnZhcmlhbnQoY2VsbElkVG9Nb3ZlVXAsICgpID0+IGBGYWlsZWQgdG8gcmVtb3ZlIGNlbGxJZCBhdCBpbmRleCAnJHtpbmRleH0nYCk7XG4gICAgbm90ZWJvb2suY2VsbE9yZGVyLnNwbGljZShpbmRleCArIDEsIDAsIGNlbGxJZFRvTW92ZVVwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1vdmVDZWxsQnlJbmRleDxUPihub3RlYm9vazogTm90ZWJvb2s8VD4sIGZyb21JbmRleDogbnVtYmVyLCB0b0luZGV4OiBudW1iZXIpIHtcbiAgICBjb25zdCBbY2VsbElkXSA9IG5vdGVib29rLmNlbGxPcmRlci5zcGxpY2UoZnJvbUluZGV4LCAxKTtcbiAgICBpbnZhcmlhbnQoY2VsbElkLCAoKSA9PiBgRmFpbGVkIHRvIG1vdmUgY2VsbCBmcm9tIGluZGV4ICcke2Zyb21JbmRleH0nYCk7XG4gICAgbm90ZWJvb2suY2VsbE9yZGVyLnNwbGljZSh0b0luZGV4LCAwLCBjZWxsSWQpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzRm9ybWFsQ2VsbHM8VD4obm90ZWJvb2s6IE5vdGVib29rPFQ+KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIG5vdGVib29rLmNlbGxPcmRlci5zb21lKChjZWxsSWQpID0+IG5vdGVib29rLmNlbGxDb250ZW50c1tjZWxsSWRdPy50YWcgPT09IFwiZm9ybWFsXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbnVtQ2VsbHM8VD4obm90ZWJvb2s6IE5vdGVib29rPFQ+KTogbnVtYmVyIHtcbiAgICByZXR1cm4gbm90ZWJvb2suY2VsbE9yZGVyLmxlbmd0aDtcbn1cblxuLyoqIER1cGxpY2F0ZSBhIGNlbGwsIG9wdGlvbmFsbHkgdXNpbmcgYSBjYWxsZXItc3VwcGxpZWQgY29udGVudCBjbG9uZXIuXG5cblRoZSBkZWZhdWx0IGNsb25lciBpcyBgc3RydWN0dXJlZENsb25lYCwgd2hpY2ggcmVxdWlyZXMgYGNlbGwuY29udGVudGAgdG9cbmJlIGEgcGxhaW4gSmF2YVNjcmlwdCB2YWx1ZSAobm8gcHJveGllcykuIENhbGxlcnMgd29ya2luZyB3aXRoIEF1dG9tZXJnZVxub3IgU29saWQgc3RvcmUgcHJveGllcyBzaG91bGQgbWF0ZXJpYWxpemUgdGhlIGNlbGwgdG8gcGxhaW4gSlMgYmVmb3JlXG5jYWxsaW5nIHRoaXMgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkdXBsaWNhdGVDZWxsPFQ+KGNlbGw6IENlbGw8VD4sIGR1cGxpY2F0ZUZuPzogKGNlbGxDb250ZW50OiBUKSA9PiBUKTogQ2VsbDxUPiB7XG4gICAgc3dpdGNoIChjZWxsLnRhZykge1xuICAgICAgICBjYXNlIFwiZm9ybWFsXCI6IHtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkdXBsaWNhdGVGbiA/IGR1cGxpY2F0ZUZuKGNlbGwuY29udGVudCkgOiBzdHJ1Y3R1cmVkQ2xvbmUoY2VsbC5jb250ZW50KTtcbiAgICAgICAgICAgIHJldHVybiBuZXdGb3JtYWxDZWxsKGNvbnRlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJyaWNoLXRleHRcIjpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlJpY2ggdGV4dCBjZWxscyBtYXkgbm90IGJlIGR1cGxpY2F0ZWRcIik7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbGwgaGFzIHVua25vd24gdGFnOiAke2NlbGx9YCk7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbXV0YXRlQ2VsbENvbnRlbnRCeUlkPFQ+KFxuICAgIG5vdGVib29rOiBOb3RlYm9vazxUPixcbiAgICBjZWxsSWQ6IHN0cmluZyxcbiAgICBtdXRhdG9yOiAoY2VsbENvbnRlbnQ6IFQpID0+IHZvaWQsXG4pIHtcbiAgICBjb25zdCBjZWxsID0gZ2V0Q2VsbEJ5SWQobm90ZWJvb2ssIGNlbGxJZCk7XG4gICAgaW52YXJpYW50KFxuICAgICAgICBjZWxsLnRhZyA9PT0gXCJmb3JtYWxcIixcbiAgICAgICAgKCkgPT4gYE9ubHkgZm9ybWFsIGNlbGxzIG1heSBiZSBtdXRhdGVkLiBjZWxsLmlkOiAnJHtjZWxsLmlkfScsIGNlbGwudGFnOiAnJHtjZWxsLnRhZ30nYCxcbiAgICApO1xuICAgIG11dGF0b3IoY2VsbC5jb250ZW50KTtcbn1cbiIsImltcG9ydCB7IHY3IH0gZnJvbSBcInV1aWRcIjtcblxuaW1wb3J0IHR5cGUgeyBEb2N1bWVudCwgTGluaywgTW9kZWxKdWRnbWVudCwgTW9yVHlwZSwgT2JUeXBlIH0gZnJvbSBcImNhdGNvbGFiLWRvY3VtZW50LXR5cGVzXCI7XG5pbXBvcnQgeyBjdXJyZW50VmVyc2lvbiB9IGZyb20gXCJjYXRjb2xhYi1kb2N1bWVudC10eXBlc1wiO1xuaW1wb3J0IHsgbmV3Tm90ZWJvb2sgfSBmcm9tIFwiLi9ub3RlYm9va1wiO1xuXG4vKiogQSBkb2N1bWVudCBkZWZpbmluZyBhIG1vZGVsLiAqL1xuZXhwb3J0IHR5cGUgTW9kZWxEb2N1bWVudCA9IERvY3VtZW50ICYgeyB0eXBlOiBcIm1vZGVsXCIgfTtcblxuLyoqIENyZWF0ZSBhbiBlbXB0eSBtb2RlbCBkb2N1bWVudC4gKi9cbmV4cG9ydCBjb25zdCBuZXdNb2RlbERvY3VtZW50ID0gKGFyZ3M6IHtcbiAgICB0aGVvcnk6IHN0cmluZztcbiAgICBlZGl0b3JWYXJpYW50Pzogc3RyaW5nO1xufSk6IE1vZGVsRG9jdW1lbnQgPT4gKHtcbiAgICBuYW1lOiBcIlwiLFxuICAgIHR5cGU6IFwibW9kZWxcIixcbiAgICB0aGVvcnk6IGFyZ3MudGhlb3J5LFxuICAgIC4uLihhcmdzLmVkaXRvclZhcmlhbnQgPyB7IGVkaXRvclZhcmlhbnQ6IGFyZ3MuZWRpdG9yVmFyaWFudCB9IDoge30pLFxuICAgIG5vdGVib29rOiBuZXdOb3RlYm9vazxNb2RlbEp1ZGdtZW50PigpLFxuICAgIHZlcnNpb246IGN1cnJlbnRWZXJzaW9uKCksXG59KTtcblxuLyoqIENyZWF0ZSBhIG5ldyBvYmplY3QgZGVjbGFyYXRpb24gd2l0aCB0aGUgZ2l2ZW4gb2JqZWN0IHR5cGUuICovXG5leHBvcnQgY29uc3QgbmV3T2JqZWN0RGVjbCA9IChvYlR5cGU6IE9iVHlwZSk6IE1vZGVsSnVkZ21lbnQgJiB7IHRhZzogXCJvYmplY3RcIiB9ID0+ICh7XG4gICAgdGFnOiBcIm9iamVjdFwiLFxuICAgIGlkOiB2NygpLFxuICAgIG5hbWU6IFwiXCIsXG4gICAgb2JUeXBlLFxufSk7XG5cbi8qKiBDcmVhdGUgYSBuZXcgbW9ycGhpc20gZGVjbGFyYXRpb24gd2l0aCB0aGUgZ2l2ZW4gbW9ycGhpc20gdHlwZS4gKi9cbmV4cG9ydCBjb25zdCBuZXdNb3JwaGlzbURlY2wgPSAobW9yVHlwZTogTW9yVHlwZSk6IE1vZGVsSnVkZ21lbnQgJiB7IHRhZzogXCJtb3JwaGlzbVwiIH0gPT4gKHtcbiAgICB0YWc6IFwibW9ycGhpc21cIixcbiAgICBpZDogdjcoKSxcbiAgICBuYW1lOiBcIlwiLFxuICAgIG1vclR5cGUsXG4gICAgZG9tOiBudWxsLFxuICAgIGNvZDogbnVsbCxcbn0pO1xuXG4vKiogQ3JlYXRlIGEgbmV3IGluc3RhbnRpYXRpb24gb2YgYW4gZXhpc3RpbmcgbW9kZWwuICovXG5leHBvcnQgY29uc3QgbmV3SW5zdGFudGlhdGVkTW9kZWwgPSAoXG4gICAgbW9kZWw/OiBMaW5rIHwgbnVsbCxcbik6IE1vZGVsSnVkZ21lbnQgJiB7IHRhZzogXCJpbnN0YW50aWF0aW9uXCIgfSA9PiAoe1xuICAgIHRhZzogXCJpbnN0YW50aWF0aW9uXCIsXG4gICAgaWQ6IHY3KCksXG4gICAgbmFtZTogXCJcIixcbiAgICBtb2RlbDogbW9kZWwgPz8gbnVsbCxcbiAgICBzcGVjaWFsaXphdGlvbnM6IFtdLFxufSk7XG5cbi8qKiBEdXBsaWNhdGUgYSBtb2RlbCBqdWRnbWVudCwgY3JlYXRpbmcgYSBmcmVzaCBVVUlEIHdoZW4gYXBwbGljYWJsZS4gKi9cbmV4cG9ydCBjb25zdCBkdXBsaWNhdGVNb2RlbEp1ZGdtZW50ID0gKGpnbXQ6IE1vZGVsSnVkZ21lbnQpOiBNb2RlbEp1ZGdtZW50ID0+ICh7XG4gICAgLi4uc3RydWN0dXJlZENsb25lKGpnbXQpLFxuICAgIGlkOiB2NygpLFxufSk7XG4iXSwibmFtZXMiOlsid2FzbSIsImN1cnJlbnRWZXJzaW9uIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19nZXRSYW5kb21WYWx1ZXNfM2M5YzBkNTg2ZTU3NWExNlwiXSIsIl9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193Ymdfc2V0XzNmMWQwYjk4NGVkMjcyZWRcIl0iLCJfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX1N0cmluZ184ZjBlYjM5YTRhNGMyZjY2XCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19pdGVyYXRvcl8yN2I3YzhiMzVhYjNlODZiXCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19uZXdfMjVmMjM5Nzc4ZDYxMTJiOVwiXSIsIl9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfZ2V0XzZiN2JkNTJhY2EzZjk2NzFcIl0iLCJfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX3NldF83ZGY0MzNlZWEwM2E1YzE0XCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19pc0FycmF5XzUxZmQ5ZTY0MjJjMGEzOTVcIl0iLCJfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX2xlbmd0aF9kNDUwNDBhNDBjNTcwMzYyXCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19jYWxsX2FiYjRmZjQ2Y2UzOGJlNDBcIl0iLCJfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX25ld19iNTQ2YWUxMjA3MTg4NTBlXCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19zZXRfZWZhYWYxNDViOTM3NzM2OVwiXSIsIl9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfaXNTYWZlSW50ZWdlcl9hZTdkM2YwNTRkNTVmYTE2XCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19uZXh0XzNjZmU1YzBmZTJhNGNjNTNcIl0iLCJfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX2RvbmVfNjJlYTE2YWY0Y2UzNGIyNFwiXSIsIl9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfdmFsdWVfNTdiN2IwMzVlMTE3ZjdlZVwiXSIsIl9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfZW50cmllc184M2M3OTkzODA1NGUwNjVmXCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19uZXdfMWJhMjFjZTMxOWEwNjI5N1wiXSIsIl9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfbGVuZ3RoXzIyYWMyM2VhZWM5ZDgwNTNcIl0iLCJfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX3Byb3RvdHlwZXNldGNhbGxfZGZlOWI3NjZjZGMxZjFmZFwiXSIsIl9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfbmV3XzY0MjFmNjA4NGNjNWJjNWFcIl0iLCJfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX25leHRfMTM4YTE3YmJmMDRlOTI2Y1wiXSIsIl9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfaW5zdGFuY2VvZl9NYXBfMDg0YmU4ZGE3NDM2NDE1OFwiXSIsIl9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfaW5zdGFuY2VvZl9VaW50OEFycmF5X2RhNTRjY2M5ZDNlMDk0MzRcIl0iLCJfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX2luc3RhbmNlb2ZfQXJyYXlCdWZmZXJfZjMzMjBkMjQxOWNkMDM1NVwiXSIsIl9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfZ2V0X2FmOWRhYjdlOTYwM2VhOTNcIl0iLCJfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX19fd2JpbmRnZW5fbnVtYmVyX2dldF85NjE5MTg1YTc0MTk3Zjk1XCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19fX3diaW5kZ2VuX2luXzBkM2UxZThmMGM2NjkzMTdcIl0iLCJfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX19fd2JpbmRnZW5fdGhyb3dfZGQyNDQxN2VkMzZmYzQ2ZVwiXSIsIl9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfX193YmluZGdlbl9qc3ZhbF9lcV9iNjEwMWNjOWNlZjFmZTM2XCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19FcnJvcl81MjY3M2I3ZGU1YTBjYTg5XCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19fX3diaW5kZ2VuX2lzX2JpZ2ludF8wZTFhMmUzZjU1Y2ZhZTI3XCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19fX3diaW5kZ2VuX2lzX29iamVjdF9jZTc3NGYzNDkwNjkyMzg2XCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19fX3diaW5kZ2VuX2lzX3N0cmluZ183MDRlZjljOGZjMTMxMDMwXCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19fX3diaW5kZ2VuX3N0cmluZ19nZXRfYTJhMzFlMTZlZGY5NmU0MlwiXSIsIl9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfX193YmluZGdlbl9ib29sZWFuX2dldF9kZWEyNWIzMzg4MmI4OTViXCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19fX3diaW5kZ2VuX2lzX2Z1bmN0aW9uXzhkNDAwYjhiMWFmOTc4Y2RcIl0iLCJfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX19fd2JpbmRnZW5fanN2YWxfbG9vc2VfZXFfNzY2MDU3NjAwZmRkMWIwZFwiXSIsIl9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfX193YmluZGdlbl9iaWdpbnRfZ2V0X2FzX2k2NF82ZTMyZjVlNmFmZjAyZTFkXCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19fX3diaW5kZ2VuX2RlYnVnX3N0cmluZ19hZGZiNjYyYWUzNDcyNGI2XCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diaW5kZ2VuX2luaXRfZXh0ZXJucmVmX3RhYmxlXCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diaW5kZ2VuX2Nhc3RfZDZjZDE5YjgxNTYwZmQ2ZVwiXSIsIl9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmluZGdlbl9jYXN0XzIyNDFiNmFmNGM0YjI5NDFcIl0iLCJfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JpbmRnZW5fY2FzdF85YWUwNjA3NTA3YWJiMDU3XCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diaW5kZ2VuX2Nhc3RfNDYyNWM1NzdhYjJlYzllZVwiXSIsIndhc20uX193YmluZGdlbl9zdGFydCJdLCJtYXBwaW5ncyI6IkFBQ0EsS0FBTSxDQUFBLFNBQVMsR0FBRyxDQUFFLENBQUEsQ0FBQTtBQUNwQixHQUFLLENBQUEsQ0FBQSxHQUFBLENBQUksQ0FBQyxDQUFBLENBQUEsQ0FBRyxDQUFDLENBQUEsQ0FBRSxDQUFDLENBQUEsQ0FBQSxDQUFHLEdBQUcsQ0FBQSxDQUFFLENBQUUsQ0FBQSxDQUFDLENBQUUsQ0FBQSxDQUFBO0FBQzlCLENBQUEsQ0FBQSxDQUFBLENBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUEsQ0FBRSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDckQsQ0FBQTtBQUNPLFFBQUEsQ0FBUyxlQUFlLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQSxDQUFBLENBQUcsQ0FBQyxDQUFFLENBQUEsQ0FBQTtBQUNqRCxDQUFJLENBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFBLENBQUEsQ0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUE7QUFDdEMsQ0FBUSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFHLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUE7QUFDbEMsQ0FBUSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFHLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUE7QUFDbEMsQ0FBUSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFHLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUE7QUFDbEMsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLENBQUcsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNYLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBRyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFBO0FBQ2xDLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBRyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFBO0FBQ2xDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxDQUFHLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDWCxDQUFRLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUcsQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQTtBQUNsQyxDQUFRLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUcsQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQTtBQUNsQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsQ0FBRyxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ1gsQ0FBUSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFHLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUE7QUFDbEMsQ0FBUSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFHLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUE7QUFDbEMsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLENBQUcsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNYLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBRyxDQUFBLENBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFBO0FBQ25DLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBRyxDQUFBLENBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFBO0FBQ25DLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBRyxDQUFBLENBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFBO0FBQ25DLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBRyxDQUFBLENBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFBO0FBQ25DLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBRyxDQUFBLENBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFBO0FBQ25DLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBRyxDQUFBLENBQUEsRUFBRSxDQUFDLENBQUMsQ0FBRSxDQUFBLFdBQVcsQ0FBRSxDQUFBLENBQUE7QUFDbEQsQ0FBQTs7QUMxQkEsR0FBQSxDQUFJLGVBQWUsQ0FBQTtBQUNuQixLQUFBLENBQU0sS0FBSyxDQUFHLENBQUEsQ0FBQSxHQUFBLENBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0FBQ2pCLFFBQUEsQ0FBUyxHQUFHLENBQUcsQ0FBQSxDQUFBLENBQUE7QUFDOUIsQ0FBSSxDQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBSSxDQUFDLGVBQWUsQ0FBRSxDQUFBLENBQUE7QUFDMUIsQ0FBUSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFJLE1BQU8sQ0FBQSxNQUFNLENBQUssQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLFNBQUEsQ0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBRSxDQUFBLENBQUE7QUFDdEUsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVksS0FBTSxDQUFBLEdBQUEsQ0FBSSxLQUFLLENBQUMsMEdBQTBHLENBQUMsQ0FBQTtBQUN2SSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxlQUFlLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDN0QsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ0EsQ0FBQSxDQUFBLENBQUEsQ0FBSSxNQUFPLENBQUEsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQ2pDLENBQUE7O0FDUkEsS0FBTSxDQUFBLE1BQU0sR0FBRyxDQUFFLENBQUEsQ0FBQTtBQUNqQixRQUFBLENBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUEsQ0FBRSxNQUFNLENBQUUsQ0FBQSxDQUFBO0FBQ2xDLENBQUEsQ0FBQSxDQUFBLENBQUksSUFBSSxLQUFLLENBQUE7QUFDYixDQUdTLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDVCxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsTUFBTSxHQUFHLENBQUEsQ0FBQSxDQUFHLElBQUksQ0FBQyxHQUFHLENBQUUsQ0FBQSxDQUFBO0FBQzlCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxLQUFNLENBQUEsSUFBSSxDQUFHLENBQUEsQ0FBQSxHQUFHLENBQUUsQ0FBQSxDQUFBO0FBQzFCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxhQUFhLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQSxDQUFFLElBQUksQ0FBQyxDQUFBO0FBQ3hDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxLQUFLLENBQUcsQ0FBQSxDQUFBLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQSxDQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFBLENBQUUsTUFBTSxDQUFDLENBQUE7QUFDcEUsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ0EsQ0FBQSxDQUFBLENBQUEsQ0FBSSxPQUFPLEdBQUcsQ0FBQSxDQUFBLENBQUEsQ0FBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDeEMsQ0FBQTtBQUNPLFFBQUEsQ0FBUyxhQUFhLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQSxDQUFFLElBQUksQ0FBRSxDQUFBLENBQUE7QUFDaEQsQ0FBQSxDQUFBLENBQUEsQ0FBSSxLQUFLLENBQUMsS0FBSyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssQ0FBQyxRQUFRLENBQUE7QUFDN0IsQ0FBQSxDQUFBLENBQUEsQ0FBSSxLQUFLLENBQUMsR0FBRyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssQ0FBQyxDQUFBO0FBQ25CLENBQUEsQ0FBQSxDQUFBLENBQUksSUFBSSxHQUFHLENBQUEsQ0FBQSxDQUFHLEtBQUssQ0FBQyxLQUFLLENBQUUsQ0FBQSxDQUFBO0FBQzNCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxLQUFLLENBQUMsR0FBRyxDQUFBLENBQUEsQ0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxFQUFFLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQSxDQUFBLENBQUksRUFBRSxDQUFDLENBQUksQ0FBQSxDQUFBLENBQUEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFJLENBQUEsQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFBLENBQUEsQ0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDaEYsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLEtBQUssQ0FBQyxLQUFLLENBQUEsQ0FBQSxDQUFHLEdBQUcsQ0FBQTtBQUN6QixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQSxDQUFTLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBO0FBQ1QsQ0FBUSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUssQ0FBQyxHQUFHLENBQUcsQ0FBQSxDQUFBLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQSxDQUFBLENBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFJLENBQUMsQ0FBQTtBQUN2QyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssQ0FBQyxDQUFFLENBQUEsQ0FBQTtBQUM3QixDQUFZLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxLQUFLLENBQUMsS0FBSyxDQUFFLENBQUEsQ0FBQTtBQUN6QixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLENBQUEsQ0FBQSxDQUFBLENBQUksT0FBTyxLQUFLLENBQUE7QUFDaEIsQ0FBQTtBQUNBLFFBQUEsQ0FBUyxPQUFPLENBQUMsSUFBSSxDQUFBLENBQUUsS0FBSyxDQUFBLENBQUUsR0FBRyxDQUFBLENBQUUsR0FBRyxDQUFBLENBQUUsTUFBTSxDQUFBLENBQUEsQ0FBRyxDQUFDLENBQUUsQ0FBQSxDQUFBO0FBQ3BELENBQUEsQ0FBQSxDQUFBLENBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFBLENBQUEsQ0FBRyxFQUFFLENBQUUsQ0FBQSxDQUFBO0FBQzFCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxLQUFNLENBQUEsR0FBQSxDQUFJLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQzVELENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLENBQUksQ0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLENBQUksQ0FBQyxHQUFHLENBQUUsQ0FBQSxDQUFBO0FBQ2QsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLEdBQUcsQ0FBRyxDQUFBLENBQUEsR0FBQSxDQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUNoQyxDQUFRLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsTUFBTSxHQUFHLENBQUMsQ0FBQTtBQUNsQixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQSxDQUFTLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBO0FBQ1QsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLEVBQUksQ0FBQSxDQUFBLE1BQU0sQ0FBRyxDQUFBLENBQUEsQ0FBQyxDQUFJLENBQUEsQ0FBQSxDQUFBLE1BQU0sQ0FBRyxDQUFBLENBQUEsRUFBRSxDQUFHLENBQUEsQ0FBQSxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUEsQ0FBQTtBQUNwRCxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBWSxNQUFNLEdBQUksQ0FBQSxVQUFVLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBRSxDQUFBLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFBLENBQUEsQ0FBRyxFQUFFLENBQUMsQ0FBQSxFQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxNQUFBLENBQUEsTUFBd0IsQ0FBQyxDQUFDLENBQUE7QUFDcEcsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQSxDQUFBLENBQUEsQ0FBQSxDQUFJLEtBQUssQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFLLElBQUksQ0FBQyxHQUFHLENBQUUsQ0FBQSxDQUFBO0FBQ3hCLENBQUEsQ0FBQSxDQUFBLENBQUksR0FBRyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFBLENBQUcsSUFBSSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssRUFBRSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFJLEVBQUUsQ0FBQyxDQUFJLENBQUEsQ0FBQSxDQUFBLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBSSxDQUFBLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQSxDQUFBLENBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ2pGLENBQUksQ0FBQSxDQUFBLENBQUEsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFBLENBQUMsQ0FBRyxDQUFBLENBQUEsQ0FBQyxLQUFLLENBQUEsQ0FBQSxDQUFHLGFBQWEsQ0FBQSxDQUFBLENBQUEsQ0FBSSxJQUFJLENBQUE7QUFDbEQsQ0FBSSxDQUFBLENBQUEsQ0FBQSxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUEsQ0FBQyxDQUFHLENBQUEsQ0FBQSxDQUFDLEtBQUssQ0FBQSxDQUFBLENBQUcsV0FBVyxDQUFBLENBQUEsQ0FBQSxDQUFJLElBQUksQ0FBQTtBQUNoRCxDQUFJLENBQUEsQ0FBQSxDQUFBLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQSxDQUFDLENBQUcsQ0FBQSxDQUFBLENBQUMsS0FBSyxDQUFBLENBQUEsQ0FBRyxTQUFTLENBQUEsQ0FBQSxDQUFBLENBQUksSUFBSSxDQUFBO0FBQzlDLENBQUksQ0FBQSxDQUFBLENBQUEsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFBLENBQUMsQ0FBRyxDQUFBLENBQUEsQ0FBQyxLQUFLLENBQUEsQ0FBQSxDQUFHLE9BQU8sQ0FBQSxDQUFBLENBQUEsQ0FBSSxJQUFJLENBQUE7QUFDNUMsQ0FBSSxDQUFBLENBQUEsQ0FBQSxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUEsQ0FBQyxDQUFHLENBQUEsQ0FBQSxDQUFDLEtBQUssQ0FBQSxDQUFBLENBQUcsS0FBSyxDQUFBLENBQUEsQ0FBQSxDQUFJLElBQUksQ0FBQTtBQUMxQyxDQUFJLENBQUEsQ0FBQSxDQUFBLEdBQUcsQ0FBQyxNQUFNLENBQUEsQ0FBRSxDQUFDLENBQUcsQ0FBQSxDQUFBLEtBQUssR0FBRyxJQUFJLENBQUE7QUFDaEMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxHQUFHLENBQUMsTUFBTSxDQUFBLENBQUUsQ0FBQyxDQUFHLENBQUEsQ0FBQSxJQUFJLENBQUksQ0FBQSxDQUFBLENBQUEsQ0FBQyxHQUFHLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBSyxFQUFFLENBQUEsQ0FBQSxDQUFBLENBQUksSUFBSSxDQUFDLENBQUE7QUFDaEQsQ0FBSSxDQUFBLENBQUEsQ0FBQSxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUEsQ0FBQyxDQUFHLENBQUEsQ0FBQSxDQUFDLEdBQUcsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFLLEVBQUUsQ0FBQSxDQUFBLENBQUEsQ0FBSSxJQUFJLENBQUE7QUFDdkMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxHQUFHLENBQUMsTUFBTSxDQUFBLENBQUUsQ0FBQyxDQUFHLENBQUEsQ0FBQSxJQUFJLENBQUksQ0FBQSxDQUFBLENBQUEsQ0FBQyxHQUFHLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBSyxFQUFFLENBQUEsQ0FBQSxDQUFBLENBQUksSUFBSSxDQUFDLENBQUE7QUFDaEQsQ0FBSSxDQUFBLENBQUEsQ0FBQSxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUEsQ0FBQyxDQUFHLENBQUEsQ0FBQSxDQUFDLEdBQUcsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFLLENBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxJQUFJLENBQUE7QUFDdEMsQ0FBSSxDQUFBLENBQUEsQ0FBQSxHQUFHLENBQUMsTUFBTSxDQUFBLENBQUUsQ0FBQyxDQUFHLENBQUEsQ0FBQSxDQUFDLENBQUMsR0FBRyxDQUFBLENBQUEsQ0FBQSxDQUFJLENBQUMsQ0FBSSxDQUFBLENBQUEsQ0FBQSxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBLENBQUEsQ0FBRyxJQUFJLENBQUMsQ0FBQTtBQUMzRCxDQUFJLENBQUEsQ0FBQSxDQUFBLEdBQUcsQ0FBQyxNQUFNLENBQUEsQ0FBRSxDQUFDLENBQUcsQ0FBQSxDQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUM1QixDQUFJLENBQUEsQ0FBQSxDQUFBLEdBQUcsQ0FBQyxNQUFNLENBQUEsQ0FBRSxDQUFDLENBQUcsQ0FBQSxDQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUM1QixDQUFJLENBQUEsQ0FBQSxDQUFBLEdBQUcsQ0FBQyxNQUFNLENBQUEsQ0FBRSxDQUFDLENBQUcsQ0FBQSxDQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUM1QixDQUFJLENBQUEsQ0FBQSxDQUFBLEdBQUcsQ0FBQyxNQUFNLENBQUEsQ0FBRSxDQUFDLENBQUcsQ0FBQSxDQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUM1QixDQUFJLENBQUEsQ0FBQSxDQUFBLEdBQUcsQ0FBQyxNQUFNLENBQUEsQ0FBRSxDQUFDLENBQUcsQ0FBQSxDQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUM1QixDQUFBLENBQUEsQ0FBQSxDQUFJLE9BQU8sR0FBRyxDQUFBO0FBQ2QsQ0FBQTs7QUMvREEsS0FBZSxDQUFBLGVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxvRUFBQSxDQUFBLENBQUE7O0FDQWYsS0FBQSxDQUFBLGdCQUFBLENBQUEsQ0FBQSxDQUFlLE9BQU8sSUFBSSxDQUFBLENBQUEsQ0FBRyxDQUFFLENBQUEsQ0FBQSxDQUFFLEdBQUcsQ0FBSyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDekMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxJQUFJLE1BQU0sQ0FBQTtBQUNkLENBQUEsQ0FBQSxDQUFBLENBQUksSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUEsSUFBQSxDQUFBLENBQU8sQ0FBQyxDQUFFLENBQUEsQ0FBQTtBQUNqQyxDQUFRLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxDQUFNLFVBQVUsQ0FBQSxDQUFBLENBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxDQUFrQixDQUFFLENBQUEsQ0FBQSxDQUFFLENBQUMsQ0FBQTtBQUM5RCxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsSUFBSSxLQUFLLENBQUE7QUFDakIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLEVBQUksQ0FBQSxDQUFBLE1BQUEsQ0FBTyxNQUFNLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBSyxDQUFVLFFBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFJLE1BQU8sQ0FBQSxNQUFNLENBQUMsSUFBSSxDQUFLLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxRQUFBLENBQVUsQ0FBRSxDQUFBLENBQUE7QUFDL0UsQ0FBWSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFFLENBQUEsQ0FBQSxNQUFBLENBQVEsQ0FBQyxDQUFBO0FBQ3JELENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ0EsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBYSxFQUFJLENBQUEsQ0FBQSxNQUFBLENBQU8sSUFBSSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssVUFBVSxDQUFFLENBQUEsQ0FBQTtBQUM3QyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBWSxNQUFNLFlBQVksQ0FBQSxDQUFBLENBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0FBQ2pELENBQVksQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUssR0FBRyxHQUFJLENBQUEsVUFBVSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUN2RCxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBWSxHQUFLLENBQUEsQ0FBQSxHQUFBLENBQUksQ0FBQyxDQUFBLENBQUEsQ0FBRyxDQUFDLENBQUUsQ0FBQSxDQUFDLENBQUcsQ0FBQSxDQUFBLFlBQVksQ0FBQyxNQUFNLENBQUUsQ0FBQSxDQUFDLEVBQUUsQ0FBRSxDQUFBLENBQUE7QUFDMUQsQ0FBZ0IsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUEsQ0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ3JELENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLENBQWEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQTtBQUNiLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFZLEtBQU0sQ0FBQSxHQUFBLENBQUksS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUE7QUFDcEUsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQSxDQUFRLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsTUFBTSxDQUFHLENBQUEsQ0FBQSxLQUFBLENBQU0sV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUUsQ0FBQSxJQUFJLENBQUMsQ0FBQTtBQUMzRCxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQSxDQUFTLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBO0FBQ1QsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsV0FBQSxDQUFBLFFBQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQTtBQUNBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxXQUFBLENBQUEsb0JBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxDQUFBLE1BQUEsQ0FBQSxFQUFBLENBQUEsT0FBQSxDQUFBLEdBQUE7QUFDQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLEtBQUEsQ0FBQSxhQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsR0FBQTtBQUNBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxNQUFBLENBQUEsSUFBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsSUFBQSxDQUFBLElBQUEsQ0FBQSxNQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxPQUFBLENBQUEsR0FBQTtBQUNBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FB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QUEsU0FBQSxDQUFBLEtBQUE7QUFDQSxDQUFBLENBQUEsQ0FBQSxDQUFJLEtBQU0sQ0FBQSxJQUFJLENBQUcsQ0FBQSxDQUFBLE1BQUEsQ0FBTyxHQUFHLENBQUE7QUFDM0IsQ0FBQSxDQUFBLENBQUEsQ0FBSSxFQUFJLENBQUEsQ0FBQSxJQUFJLENBQUksQ0FBQSxDQUFBLENBQUEsQ0FBQSxNQUFBLENBQVEsQ0FBSSxDQUFBLENBQUEsQ0FBQSxJQUFJLENBQUksQ0FBQSxDQUFBLENBQUEsQ0FBQSxPQUFBLENBQVMsQ0FBSSxDQUFBLENBQUEsQ0FBQSxHQUFHLENBQUksQ0FBQSxDQUFBLENBQUEsSUFBSSxDQUFFLENBQUEsQ0FBQTtBQUM5RCxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsTUFBUSxDQUFBLENBQUEsQ0FBQyxDQUFFLENBQUEsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUN4QixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQSxDQUFBLENBQUEsQ0FBQSxDQUFJLEVBQUksQ0FBQSxDQUFBLElBQUksQ0FBSSxDQUFBLENBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBUSxDQUFFLENBQUEsQ0FBQTtBQUMxQixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsT0FBTyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDekIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ0EsQ0FBQSxDQUFBLENBQUEsQ0FBSSxFQUFJLENBQUEsQ0FBQSxJQUFJLENBQUksQ0FBQSxDQUFBLENBQUEsQ0FBQSxNQUFBLENBQVEsQ0FBRSxDQUFBLENBQUE7QUFDMUIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLEtBQU0sQ0FBQSxXQUFXLENBQUcsQ0FBQSxDQUFBLEdBQUcsQ0FBQyxXQUFXLENBQUE7QUFDM0MsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLEVBQUksQ0FBQSxDQUFBLFdBQVcsQ0FBSSxDQUFBLENBQUEsQ0FBQSxJQUFJLENBQUUsQ0FBQSxDQUFBO0FBQ2pDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFZLE9BQU8sQ0FBUSxNQUFBLENBQUEsQ0FBQTtBQUMzQixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUyxDQUFNLElBQUEsQ0FBQSxDQUFBO0FBQ2YsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVksT0FBTyxDQUFDLE1BQUEsQ0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUMzQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLENBQUEsQ0FBQSxDQUFBLENBQUksRUFBSSxDQUFBLENBQUEsSUFBSSxDQUFJLENBQUEsQ0FBQSxDQUFBLENBQUEsUUFBQSxDQUFVLENBQUUsQ0FBQSxDQUFBO0FBQzVCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxLQUFNLENBQUEsSUFBSSxDQUFHLENBQUEsQ0FBQSxHQUFHLENBQUMsSUFBSSxDQUFBO0FBQzdCLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBSSxNQUFPLENBQUEsSUFBSSxDQUFJLENBQUEsQ0FBQSxDQUFBLENBQUEsTUFBQSxDQUFRLENBQUksQ0FBQSxDQUFBLENBQUEsSUFBSSxDQUFDLE1BQU0sQ0FBRyxDQUFBLENBQUEsQ0FBQyxDQUFFLENBQUEsQ0FBQTtBQUN4RCxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBWSxPQUFPLENBQUMsUUFBQSxDQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ3RDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFTLENBQU0sSUFBQSxDQUFBLENBQUE7QUFDZixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBWSxPQUFPLENBQVUsUUFBQSxDQUFBLENBQUE7QUFDN0IsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLE9BQUE7QUFDQSxDQUFBLENBQUEsQ0FBQSxDQUFJLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBRSxDQUFBLENBQUE7QUFDNUIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLEtBQU0sQ0FBQSxNQUFNLENBQUcsQ0FBQSxDQUFBLEdBQUcsQ0FBQyxNQUFNLENBQUE7QUFDakMsQ0FBUSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBSSxLQUFLLENBQUEsQ0FBQSxDQUFHLENBQUcsQ0FBQSxDQUFBLENBQUE7QUFDdkIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLEVBQUksQ0FBQSxDQUFBLE1BQU0sQ0FBRyxDQUFBLENBQUEsQ0FBQyxDQUFFLENBQUEsQ0FBQTtBQUN4QixDQUFZLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxLQUFLLElBQUksV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ3hDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ0EsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLEdBQUksQ0FBQSxHQUFBLENBQUksQ0FBQyxDQUFBLENBQUEsQ0FBRyxDQUFDLENBQUEsQ0FBRSxDQUFDLENBQUEsQ0FBQSxDQUFHLE1BQU0sQ0FBQSxDQUFFLENBQUMsQ0FBQSxDQUFFLENBQUUsQ0FBQSxDQUFBO0FBQ3hDLENBQVksQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUssQ0FBSSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFJLENBQUcsQ0FBQSxDQUFBLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUMvQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxLQUFLLElBQUksQ0FBRyxDQUFBLENBQUEsQ0FBQTtBQUNwQixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsT0FBTyxLQUFLLENBQUE7QUFDcEIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ0EsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxFQUFBO0FBQ0EsQ0FBQSxDQUFBLENBQUEsQ0FBSSxLQUFNLENBQUEsY0FBYyxDQUFHLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFxQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFDekUsQ0FBQSxDQUFBLENBQUEsQ0FBSSxJQUFJLFNBQVMsQ0FBQTtBQUNqQixDQUFJLENBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFJLGNBQWMsQ0FBSSxDQUFBLENBQUEsQ0FBQSxjQUFjLENBQUMsTUFBTSxDQUFBLENBQUEsQ0FBRyxDQUFDLENBQUUsQ0FBQSxDQUFBO0FBQ3JELENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxTQUFTLENBQUEsQ0FBQSxDQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNyQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssQ0FBTSxJQUFBLENBQUEsQ0FBQTtBQUNYLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsRUFBQSxDQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsU0FBQSxDQUFBLENBQUE7QUFDQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQ2pDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLENBQUEsQ0FBQSxDQUFBLENBQUksRUFBSSxDQUFBLENBQUEsU0FBUyxDQUFJLENBQUEsQ0FBQSxDQUFBLENBQUEsTUFBQSxDQUFRLENBQUUsQ0FBQSxDQUFBO0FBQy9CLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsT0FBQSxDQUFBLEtBQUEsQ0FBQSxFQUFBLENBQUEsTUFBQTtBQUNBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsU0FBQSxDQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsU0FBQSxDQUFBLElBQUE7QUFDQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLGFBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQTtBQUNBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxHQUFJLENBQUEsQ0FBQTtBQUNaLENBQVksQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBTyxDQUFTLE1BQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQSxDQUFHLENBQUcsQ0FBQSxDQUFBLENBQUE7QUFDeEQsQ0FBUyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQyxLQUFPLENBQUEsQ0FBQSxDQUFDLENBQUUsQ0FBQSxDQUFBO0FBQ3BCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFZLE9BQU8sQ0FBUSxNQUFBLENBQUEsQ0FBQTtBQUMzQixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsTUFBQTtBQUNBLENBQUEsQ0FBQSxDQUFBLENBQUksRUFBSSxDQUFBLENBQUEsR0FBRyxDQUFZLFVBQUEsQ0FBQSxLQUFLLENBQUUsQ0FBQSxDQUFBO0FBQzlCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxPQUFPLENBQUMsQ0FBQSxDQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBRSxDQUFBLENBQUEsQ0FBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUUsQ0FBQSxDQUFBLENBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7QUFDMUQsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ0EsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsRUFBQSxD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QUUsR0FBRyxDQUFBLENBQUEsQ0FBRyxNQUFNLENBQUcsQ0FBQSxDQUFBLEdBQUcsQ0FBQyxNQUFNLENBQUEsQ0FBQSxDQUFHLENBQUMsQ0FBRSxDQUFBLENBQUMsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssQ0FBQyxDQUFBO0FBQ3ZFLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxLQUFNLENBQUEsSUFBSSxDQUFHLENBQUEsQ0FBQSxvQkFBb0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFBLENBQUUsR0FBRyxDQUFBLENBQUEsQ0FBRyxHQUFHLENBQUMsQ0FBQTtBQUM3RSxDQUFRLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxDQUFNLEdBQUcsQ0FBQSxDQUFBLENBQUcsaUJBQWlCLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBRSxDQUFBLElBQUksQ0FBQyxDQUFBOztBQUUzRCxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsTUFBTSxDQUFBLENBQUEsQ0FBQSxDQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUE7QUFDN0IsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLEdBQUcsQ0FBQSxDQUFBLENBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQSxDQUFFLEdBQUcsQ0FBQSxDQUFFLE1BQU0sQ0FBQSxDQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUNoRCxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7O0FBRUEsQ0FBSSxDQUFBLENBQUEsQ0FBQSxlQUFlLEdBQUcsTUFBTSxDQUFBO0FBQzVCLENBQUEsQ0FBQSxDQUFBLENBQUksT0FBTyxHQUFHLENBQUE7QUFDZCxDQUFBOztBQVFBLEdBQUEsQ0FBSSxpQkFBaUIsQ0FBRyxDQUFBLENBQUEsR0FBQSxDQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUUsQ0FBQSxDQUFBLENBQUUsU0FBUyxDQUFBLENBQUUsSUFBSSxDQUFFLENB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SSxDQUFBO0FBQ2xCLENBQUksQ0FBQSxDQUFBLENBQUEsS0FBQSxDQUFNLEdBQUcsQ0FBQSxDQUFBLENBQUcsTUFBTyxDQUFBLENBQUMsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssQ0FBUSxNQUFBLENBQUEsQ0FBQSxDQUFBLENBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBRyxTQUFTLENBQUE7QUFDdEQsQ0FBSSxDQUFBLENBQUEsQ0FBQSxrQkFBa0IsQ0FBRSxDQUFBLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBRyxDQUFBLENBQUEsQ0FBQyxDQUFHLENBQUEsQ0FBQSxDQUFDLENBQUUsQ0FBQSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUcsQ0FBQSxDQUFBLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBRyxDQUFBLENBQUEsR0FBRyxDQUFFLENBQUEsSUFBSSxDQUFDLENBQUE7QUFDM0YsQ0FBQSxDQUFBLENBQUEsQ0FBSSxrQkFBa0IsQ0FBRSxDQUFBLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUEsQ0FBQSxDQUFHLENBQUMsQ0FBQSxDQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUUsSUFBSSxDQUFDLENBQUE7QUFDdkUsQ0FBQTtBQUVPLFFBQVMsQ0FBQSw2Q0FBNkMsQ0FBQyxJQUFJLENBQUUsQ0FBQSxDQUFBO0FBQ3BFLENBQUksQ0FBQSxDQUFBLENBQUEsS0FBQSxDQUFNLENBQUMsQ0FBQSxDQUFBLENBQUcsSUFBSSxDQUFBO0FBQ2xCLENBQUksQ0FBQSxDQUFBLENBQUEsS0FBQSxDQUFNLEdBQUcsQ0FBQSxDQUFBLENBQUcsTUFBTyxDQUFBLENBQUMsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssQ0FBUyxPQUFBLENBQUEsQ0FBQSxDQUFBLENBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBRyxTQUFTLENBQUE7QUFDdkQsQ0FBQSxDQUFBLENBQUEsQ0FBSSxNQUFPLENBQUEsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBRyxRQUFRLENBQUEsQ0FBQSxDQUFHLEdBQUcsQ0FBQSxDQUFBLENBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBRyxDQUFDLENBQUE7QUFDbkQsQ0FBQTtBQUVPLFFBQUEsQ0FBUyw4Q0FBOEMsQ0FBQyxJQUFJLENBQUEsQ0FBRSxJQUFJLENBQUUsQ0FBQSxDQUFBO0FBQzNFLENBQUEsQ0FBQSxDQUFBLENBQUksTUFBTSxHQUFHLENBQUEsQ0FBQSxDQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUNqQyxDQUFBLENBQUEsQ0FBQSxDQUFJLEtBQU0sQ0FBQSxJQUFJLENBQUcsQ0FBQSxDQUFBLGlCQUFpQixDQUFDLEdBQUcsQ0FBQSxDQUFFQSxJQUFJLENBQUEsQ0FBQSxDQUFDLGlCQUFpQixDQUFBLENBQUVBLElBQUksQ0FBQSxDQUFBLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtBQUN4RixDQUFJLENBQUEsQ0FBQSxDQUFBLEtBQUEsQ0FBTSxJQUFJLENBQUEsQ0FBQSxDQUFHLGVBQWUsQ0FBQTtBQUNoQyxDQUFBLENBQUEsQ0FBQSxDQUFJLGtCQUFrQixDQUFBLENBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFBLENBQUEsQ0FBRyxDQUFDLENBQUEsQ0FBQSxDQUFHLENBQUMsQ0FBQSxDQUFFLElBQUksQ0FBQSxDQUFFLElBQUksQ0FBQyxDQUFBO0FBQzNELENBQUEsQ0FBQSxDQUFBLENBQUksa0JBQWtCLENBQUEsQ0FBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUEsQ0FBQSxDQUFHLENBQUMsQ0FBQSxDQUFBLENBQUcsQ0FBQyxDQUFBLENBQUUsSUFBSSxDQUFBLENBQUUsSUFBSSxDQUFDLENBQUE7QUFDM0QsQ0FBQTtBQUVPLFFBQUEsQ0FBUyxvQ0FBb0MsQ0FBQyxJQUFJLENBQUEsQ0FBRSxJQUFJLENBQUUsQ0FBQSxDQUFBO0FBQ2pFLENBQUEsQ0FBQSxDQUFBLENBQUksS0FBTSxDQUFBLEdBQUcsQ0FBRyxDQUFBLENBQUEsSUFBSSxJQUFJLElBQUksQ0FBQTtBQUM1QixDQUFBLENBQUEsQ0FBQSxDQUFJLE9BQU8sR0FBRyxDQUFBO0FBQ2QsQ0FBQTtBQUVPLFFBQVMsQ0FBQSwyQ0FBMkMsQ0FBQyxJQUFJLENBQUUsQ0FBQSxDQUFBO0FBQ2xFLENBQUEsQ0FBQSxDQUFBLENBQUksTUFBTSxHQUFHLENBQUEsQ0FBQSxDQUFHLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBUSxNQUFBLENBQUEsQ0FBQTtBQUN6QyxDQUFBLENBQUEsQ0FBQSxDQUFJLE9BQU8sR0FBRyxDQUFBO0FBQ2QsQ0FBQTtBQUVPLFFBQVMsQ0FBQSw2Q0FBNkMsQ0FBQyxJQUFJLENBQUUsQ0FBQSxDQUFBO0FBQ3BFLENBQUEsQ0FBQSxDQUFBLENBQUksTUFBTSxHQUFHLENBQUEsQ0FBQSxDQUFHLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBVSxRQUFBLENBQUEsQ0FBQTtBQUMzQyxDQUFBLENBQUEsQ0FBQSxDQUFJLE9BQU8sR0FBRyxDQUFBO0FBQ2QsQ0FBQTtBQUVPLFFBQVMsQ0FBQSwyQ0FBMkMsQ0FBQyxJQUFJLENBQUUsQ0FBQSxDQUFBO0FBQ2xFLENBQUksQ0FBQSxDQUFBLENBQUEsS0FBQSxDQUFNLEdBQUcsQ0FBQSxDQUFBLENBQUcsSUFBSSxDQUFBO0FBQ3BCLENBQUksQ0FBQSxDQUFBLENBQUEsS0FBQSxDQUFNLEdBQUcsQ0FBQSxDQUFBLENBQUcsTUFBTyxDQUFBLEdBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssQ0FBUSxNQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBSSxHQUFHLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBSyxJQUFJLENBQUE7QUFDeEQsQ0FBQSxDQUFBLENBQUEsQ0FBSSxPQUFPLEdBQUcsQ0FBQTtBQUNkLENBQUE7QUFFTyxRQUFTLENBQUEsMkNBQTJDLENBQUMsSUFBSSxDQUFFLENBQUEsQ0FBQTtBQUNsRSxDQUFBLENBQUEsQ0FBQSxDQUFJLE1BQU0sR0FBRyxDQUFBLENBQUEsQ0FBRyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQVEsTUFBQSxDQUFBLENBQUE7QUFDekMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxPQUFPLEdBQUcsQ0FBQTtBQUNkLENBQUE7QUFFTyxRQUFBLENBQVMsMENBQTBDLENBQUMsSUFBSSxDQUFBLENBQUUsSUFBSSxDQUFFLENBQUEsQ0FBQTtBQUN2RSxDQUFBLENBQUEsQ0FBQSxDQUFJLEtBQU0sQ0FBQSxHQUFHLENBQUcsQ0FBQSxDQUFBLElBQUksS0FBSyxJQUFJLENBQUE7QUFDN0IsQ0FBQSxDQUFBLENBQUEsQ0FBSSxPQUFPLEdBQUcsQ0FBQTtBQUNkLENBQUE7QUFFTyxRQUFBLENBQVMsZ0RBQWdELENBQUMsSUFBSSxDQUFBLENBQUUsSUFBSSxDQUFFLENBQUEsQ0FBQTtBQUM3RSxDQUFBLENBQUEsQ0FBQSxDQUFJLEtBQU0sQ0FBQSxHQUFHLENBQUcsQ0FBQSxDQUFBLElBQUksSUFBSSxJQUFJLENBQUE7QUFDNUIsQ0FBQSxDQUFBLENBQUEsQ0FBSSxPQUFPLEdBQUcsQ0FBQTtBQUNkLENBQUE7QUFFTyxRQUFBLENBQVMsNENBQTRDLENBQUMsSUFBSSxDQUFBLENBQUUsSUFBSSxDQUFFLENBQUEsQ0FBQTtBQUN6RSxDQUFJLENBQUEsQ0FBQSxDQUFBLEtBQUEsQ0FBTSxHQUFHLENBQUEsQ0FBQSxDQUFHLElBQUksQ0FBQTtBQUNwQixDQUFJLENBQUEsQ0FBQSxDQUFBLEtBQUEsQ0FBTSxHQUFHLENBQUEsQ0FBQSxDQUFHLE1BQU8sQ0FBQSxHQUFHLENBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFLLENBQVEsTUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFHLEdBQUcsQ0FBQSxDQUFBLENBQUcsU0FBUyxDQUFBO0FBQzFELENBQUksQ0FBQSxDQUFBLENBQUEsa0JBQWtCLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFBLENBQUEsQ0FBRyxDQUFDLENBQUcsQ0FBQSxDQUFBLENBQUMsRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQSxDQUFHLENBQUMsQ0FBRyxDQUFBLENBQUEsR0FBRyxDQUFFLENBQUEsSUFBSSxDQUFDLENBQUE7QUFDbEYsQ0FBQSxDQUFBLENBQUEsQ0FBSSxrQkFBa0IsQ0FBRSxDQUFBLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUEsQ0FBQSxDQUFHLENBQUMsQ0FBQSxDQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUUsSUFBSSxDQUFDLENBQUE7QUFDdkUsQ0FBQTtBQUVPLFFBQUEsQ0FBUyw0Q0FBNEMsQ0FBQyxJQUFJLENBQUEsQ0FBRSxJQUFJLENBQUUsQ0FBQSxDQUFBO0FBQ3pFLENBQUksQ0FBQSxDQUFBLENBQUEsS0FBQSxDQUFNLEdBQUcsQ0FBQSxDQUFBLENBQUcsSUFBSSxDQUFBO0FBQ3BCLENBQUksQ0FBQSxDQUFBLENBQUEsS0FBQSxDQUFNLEdBQUcsQ0FBQSxDQUFBLENBQUcsTUFBTyxDQUFBLEdBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssQ0FBUSxNQUFBLENBQUEsQ0FBQSxDQUFBLENBQUcsR0FBRyxDQUFBLENBQUEsQ0FBRyxTQUFTLENBQUE7QUFDMUQsQ0FBSSxDQUFBLENBQUEsQ0FBQSxHQUFBLENBQUksSUFBSSxDQUFHLENBQUEsQ0FBQSxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBRyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUVBLElBQUksQ0FBQSxDQUFBLENBQUMsaUJBQWlCLENBQUVBLENBQUFBLElBQUFBLENBQUFBLENBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO0FBQzVHLENBQUksQ0FBQSxDQUFBLENBQUEsR0FBQSxDQUFJLElBQUksQ0FBQSxDQUFBLENBQUcsZUFBZSxDQUFBO0FBQzlCLENBQUEsQ0FBQSxDQUFBLENBQUksa0JBQWtCLENBQUEsQ0FBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUEsQ0FBQSxDQUFHLENBQUMsQ0FBQSxDQUFBLENBQUcsQ0FBQyxDQUFBLENBQUUsSUFBSSxDQUFBLENBQUUsSUFBSSxDQUFDLENBQUE7QUFDM0QsQ0FBQSxDQUFBLENBQUEsQ0FBSSxrQkFBa0IsQ0FBQSxDQUFFLENBQUMsUUFBUSxD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Q0FBQTtBQUNkLENBQUEsQ0FBQSxDQUFBLENBQUksR0FBSSxDQUFBLENBQUE7QUFDUixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsTUFBTSxDQUFBLENBQUEsQ0FBRyxJQUFJLENBQUEsVUFBQSxDQUFZLFdBQVcsQ0FBQTtBQUM1QyxDQUFLLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQyxLQUFPLENBQUEsQ0FBQSxDQUFDLENBQUUsQ0FBQSxDQUFBO0FBQ2hCLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxNQUFNLEdBQUcsS0FBSyxDQUFBO0FBQ3RCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLENBQUksQ0FBQSxDQUFBLENBQUEsS0FBQSxDQUFNLEdBQUcsQ0FBQSxDQUFBLENBQUcsTUFBTSxDQUFBO0FBQ3RCLENBQUEsQ0FBQSxDQUFBLENBQUksT0FBTyxHQUFHLENBQUE7QUFDZCxDQUFBO0FBRU8sUUFBUyxDQUFBLHFDQUFxQyxDQUFDLElBQUksQ0FBRSxDQUFBLENBQUE7QUFDNUQsQ0FBQSxDQUFBLENBQUEsQ0FBSSxJQUFJLE1BQU0sQ0FBQTtBQUNkLENBQUEsQ0FBQSxDQUFBLENBQUksR0FBSSxDQUFBLENBQUE7QUFDUixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsTUFBTSxDQUFBLENBQUEsQ0FBRyxJQUFJLENBQUEsVUFBQSxDQUFZLEdBQUcsQ0FBQTtBQUNwQyxDQUFLLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQyxLQUFPLENBQUEsQ0FBQSxDQUFDLENBQUUsQ0FBQSxDQUFBO0FBQ2hCLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxNQUFNLEdBQUcsS0FBSyxDQUFBO0FBQ3RCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLENBQUksQ0FBQSxDQUFBLENBQUEsS0FBQSxDQUFNLEdBQUcsQ0FBQSxDQUFBLENBQUcsTUFBTSxDQUFBO0FBQ3RCLENBQUEsQ0FBQSxDQUFBLENBQUksT0FBTyxHQUFHLENBQUE7QUFDZCxDQUFBO0FBRU8sUUFBUyxDQUFBLDRDQUE0QyxDQUFDLElBQUksQ0FBRSxDQUFBLENBQUE7QUFDbkUsQ0FBQSxDQUFBLENBQUEsQ0FBSSxJQUFJLE1BQU0sQ0FBQTtBQUNkLENBQUEsQ0FBQSxDQUFBLENBQUksR0FBSSxDQUFBLENBQUE7QUFDUixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsTUFBTSxDQUFBLENBQUEsQ0FBRyxJQUFJLENBQUEsVUFBQSxDQUFZLFVBQVUsQ0FBQTtBQUMzQyxDQUFLLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQyxLQUFPLENBQUEsQ0FBQSxDQUFDLENBQUUsQ0FBQSxDQUFBO0FBQ2hCLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxNQUFNLEdBQUcsS0FBSyxDQUFBO0FBQ3RCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLENBQUksQ0FBQSxDQUFBLENBQUEsS0FBQSxDQUFNLEdBQUcsQ0FBQSxDQUFBLENBQUcsTUFBTSxDQUFBO0FBQ3RCLENBQUEsQ0FBQSxDQUFBLENBQUksT0FBTyxHQUFHLENBQUE7QUFDZCxDQUFBO0FBRU8sUUFBUyxDQUFBLDhCQUE4QixDQUFDLElBQUksQ0FBRSxDQUFBLENBQUE7QUFDckQsQ0FBSSxDQUFBLENBQUEsQ0FBQSxLQUFBLENBQU0sR0FBRyxDQUFHLENBQUEsQ0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ25DLENBQUEsQ0FBQSxDQUFBLENBQUksT0FBTyxHQUFHLENBQUE7QUFDZCxDQUFBO0FBRU8sUUFBUyxDQUFBLG9DQUFvQyxDQUFDLElBQUksQ0FBRSxDQUFBLENBQUE7QUFDM0QsQ0FBSSxDQUFBLENBQUEsQ0FBQSxLQUFBLENBQU0sR0FBRyxDQUFHLENBQUEsQ0FBQSxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQzFDLENBQUEsQ0FBQSxDQUFBLENBQUksT0FBTyxHQUFHLENBQUE7QUFDZCxDQUFBO0FBRU8sUUFBQSxDQUFTLCtCQUErQixDQUFHLENBQUEsQ0FBQSxDQUFBO0FBQ2xELENBQUEsQ0FBQSxDQUFBLENBQUksS0FBTSxDQUFBLEdBQUcsQ0FBRyxDQUFBLENBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQTtBQUMvQixDQUFBLENBQUEsQ0FBQSxDQUFJLE9BQU8sR0FBRyxDQUFBO0FBQ2QsQ0FBQTtBQUVPLFFBQVMsQ0FBQSw2QkFBNkIsQ0FBQyxJQUFJLENBQUUsQ0FBQSxDQUFBO0FBQ3BELENBQUEsQ0FBQSxDQUFBLENBQUksS0FBTSxDQUFBLEdBQUcsQ0FBRyxDQUFBLENBQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQTtBQUMzQixDQUFBLENBQUEsQ0FBQSxDQUFJLE9BQU8sR0FBRyxDQUFBO0FBQ2QsQ0FBQTtBQUVPLFFBQVMsQ0FBQSw2QkFBNkIsQ0FBQyxJQUFJLENBQUUsQ0FBQSxDQUFBO0FBQ3BELENBQUEsQ0FBQSxDQUFBLENBQUksS0FBTSxDQUFBLEdBQUcsQ0FBRyxDQUFBLENBQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQTtBQUMzQixDQUFBLENBQUEsQ0FBQSxDQUFJLE9BQU8sR0FBRyxDQUFBO0FBQ2QsQ0FBQTtBQUVPLFFBQUEsQ0FBUywwQkFBMEIsQ0FBRyxDQUFBLENBQUEsQ0FBQTtBQUM3QyxDQUFBLENBQUEsQ0FBQSxDQUFJLEtBQU0sQ0FBQSxHQUFHLENBQUcsQ0FBQSxDQUFBLEdBQUEsQ0FBSSxNQUFNLENBQUUsQ0FBQSxDQUFBO0FBQzVCLENBQUEsQ0FBQSxDQUFBLENBQUksT0FBTyxHQUFHLENBQUE7QUFDZCxDQUFBO0FBRU8sUUFBQSxDQUFTLDBCQUEwQixDQUFHLENBQUEsQ0FBQSxDQUFBO0FBQzdDLENBQUEsQ0FBQSxDQUFBLENBQUksS0FBTSxDQUFBLEdBQUcsQ0FBRyxDQUFBLENBQUEsR0FBQSxDQUFJLEtBQUssQ0FBRSxDQUFBLENBQUE7QUFDM0IsQ0FBQSxDQUFBLENBQUEsQ0FBSSxPQUFPLEdBQUcsQ0FBQTtBQUNkLENBQUE7QUFFTyxRQUFT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LENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxTQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBO0FBQ0EsQ0FBSSxDQUFBLENBQUEsQ0FBQSxLQUFBLENBQU0sR0FBRyxDQUFBLENBQUEsQ0FBRyxJQUFJLENBQUE7QUFDcEIsQ0FBQSxDQUFBLENBQUEsQ0FBSSxPQUFPLEdBQUcsQ0FBQTtBQUNkLENBQUE7QUFFTyxRQUFBLENBQVMsK0JBQStCLENBQUcsQ0FBQSxDQUFBLENBQUE7QUFDbEQsQ0FBQSxDQUFBLENBQUEsQ0FBSSxLQUFNLENBQUEsS0FBSyxDQUFHQSxDQUFBQSxDQUFBQSxJQUFBQSxDQUFBQSxDQUFJLENBQUMscUJBQXFCLENBQUE7QUFDNUMsQ0FBSSxDQUFBLENBQUEsQ0FBQSxLQUFBLENBQU0sTUFBTSxDQUFHLENBQUEsQ0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ2hDLENBQUEsQ0FBQSxDQUFBLENBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBRSxTQUFTLENBQUMsQ0FBQTtBQUMzQixDQUFJLENBQUEsQ0FBQSxDQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFHLENBQUEsQ0FBQSxDQUFDLENBQUUsQ0FBQSxTQUFTLENBQUMsQ0FBQTtBQUNwQyxDQUFJLENBQUEsQ0FBQSxDQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFHLENBQUEsQ0FBQSxDQUFDLENBQUUsQ0FBQSxJQUFJLENBQUMsQ0FBQTtBQUMvQixDQUFJLENBQUEsQ0FBQSxDQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFHLENBQUEsQ0FBQSxDQUFDLENBQUUsQ0FBQSxJQUFJLENBQUMsQ0FBQTtBQUMvQixDQUFJLENBQUEsQ0FBQSxDQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFHLENBQUEsQ0FBQSxDQUFDLENBQUUsQ0FBQSxLQUFLLENBQUMsQ0FBQTtBQUNoQyxD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
