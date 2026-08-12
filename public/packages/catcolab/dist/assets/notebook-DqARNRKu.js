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

export { __vite__initWasm as _, mutateCellContentById as a, appendCell as b, moveCellDown as c, moveCellUp as d, deleteCellAtIndex as e, numCells as f, duplicateCell as g, newFormalCell as h, insertCellAtIndex as i, hasFormalCells as j, getFormalContent as k, currentVersion$1 as l, moveCellByIndex as m, newRichTextCell as n, newNotebook as o, getFormalCells as p, v7 as v };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm90ZWJvb2stRHFBUk5SS3UuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2RvY3VtZW50LW1ldGhvZHMvbm9kZV9tb2R1bGVzLy5wbnBtL3V1aWRAMTMuMC4wL25vZGVfbW9kdWxlcy91dWlkL2Rpc3Qvc3RyaW5naWZ5LmpzIiwiLi4vLi4vLi4vZG9jdW1lbnQtbWV0aG9kcy9ub2RlX21vZHVsZXMvLnBucG0vdXVpZEAxMy4wLjAvbm9kZV9tb2R1bGVzL3V1aWQvZGlzdC9ybmcuanMiLCIuLi8uLi8uLi9kb2N1bWVudC1tZXRob2RzL25vZGVfbW9kdWxlcy8ucG5wbS91dWlkQDEzLjAuMC9ub2RlX21vZHVsZXMvdXVpZC9kaXN0L3Y3LmpzIiwiLi4vLi4vLi4vZG9jdW1lbnQtdHlwZXMvcGtnL2NhdGNvbGFiX2RvY3VtZW50X3R5cGVzX2JnLndhc20/dXJsIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vX192aXRlLXBsdWdpbi13YXNtLWhlbHBlciIsIi4uLy4uLy4uL2RvY3VtZW50LXR5cGVzL3BrZy9jYXRjb2xhYl9kb2N1bWVudF90eXBlc19iZy5qcyIsIi4uLy4uLy4uL2RvY3VtZW50LXR5cGVzL3BrZy9jYXRjb2xhYl9kb2N1bWVudF90eXBlc19iZy53YXNtIiwiLi4vLi4vLi4vZG9jdW1lbnQtdHlwZXMvcGtnL2NhdGNvbGFiX2RvY3VtZW50X3R5cGVzLmpzIiwiLi4vLi4vLi4vZG9jdW1lbnQtbWV0aG9kcy9ub2RlX21vZHVsZXMvLnBucG0vdGlueS1pbnZhcmlhbnRAMS4zLjMvbm9kZV9tb2R1bGVzL3RpbnktaW52YXJpYW50L2Rpc3QvZXNtL3RpbnktaW52YXJpYW50LmpzIiwiLi4vLi4vLi4vZG9jdW1lbnQtbWV0aG9kcy9zcmMvbm90ZWJvb2sudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHZhbGlkYXRlIGZyb20gJy4vdmFsaWRhdGUuanMnO1xuY29uc3QgYnl0ZVRvSGV4ID0gW107XG5mb3IgKGxldCBpID0gMDsgaSA8IDI1NjsgKytpKSB7XG4gICAgYnl0ZVRvSGV4LnB1c2goKGkgKyAweDEwMCkudG9TdHJpbmcoMTYpLnNsaWNlKDEpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB1bnNhZmVTdHJpbmdpZnkoYXJyLCBvZmZzZXQgPSAwKSB7XG4gICAgcmV0dXJuIChieXRlVG9IZXhbYXJyW29mZnNldCArIDBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMV1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyAyXV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDNdXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgNF1dICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA1XV0gK1xuICAgICAgICAnLScgK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDZdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgN11dICtcbiAgICAgICAgJy0nICtcbiAgICAgICAgYnl0ZVRvSGV4W2FycltvZmZzZXQgKyA4XV0gK1xuICAgICAgICBieXRlVG9IZXhbYXJyW29mZnNldCArIDldXSArXG4gICAgICAgICctJyArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTBdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTFdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTJdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTNdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTRdXSArXG4gICAgICAgIGJ5dGVUb0hleFthcnJbb2Zmc2V0ICsgMTVdXSkudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIHN0cmluZ2lmeShhcnIsIG9mZnNldCA9IDApIHtcbiAgICBjb25zdCB1dWlkID0gdW5zYWZlU3RyaW5naWZ5KGFyciwgb2Zmc2V0KTtcbiAgICBpZiAoIXZhbGlkYXRlKHV1aWQpKSB7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignU3RyaW5naWZpZWQgVVVJRCBpcyBpbnZhbGlkJyk7XG4gICAgfVxuICAgIHJldHVybiB1dWlkO1xufVxuZXhwb3J0IGRlZmF1bHQgc3RyaW5naWZ5O1xuIiwibGV0IGdldFJhbmRvbVZhbHVlcztcbmNvbnN0IHJuZHM4ID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcm5nKCkge1xuICAgIGlmICghZ2V0UmFuZG9tVmFsdWVzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY3J5cHRvID09PSAndW5kZWZpbmVkJyB8fCAhY3J5cHRvLmdldFJhbmRvbVZhbHVlcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKCkgbm90IHN1cHBvcnRlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS91dWlkanMvdXVpZCNnZXRyYW5kb212YWx1ZXMtbm90LXN1cHBvcnRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGdldFJhbmRvbVZhbHVlcyA9IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMuYmluZChjcnlwdG8pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0UmFuZG9tVmFsdWVzKHJuZHM4KTtcbn1cbiIsImltcG9ydCBybmcgZnJvbSAnLi9ybmcuanMnO1xuaW1wb3J0IHsgdW5zYWZlU3RyaW5naWZ5IH0gZnJvbSAnLi9zdHJpbmdpZnkuanMnO1xuY29uc3QgX3N0YXRlID0ge307XG5mdW5jdGlvbiB2NyhvcHRpb25zLCBidWYsIG9mZnNldCkge1xuICAgIGxldCBieXRlcztcbiAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBieXRlcyA9IHY3Qnl0ZXMob3B0aW9ucy5yYW5kb20gPz8gb3B0aW9ucy5ybmc/LigpID8/IHJuZygpLCBvcHRpb25zLm1zZWNzLCBvcHRpb25zLnNlcSwgYnVmLCBvZmZzZXQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgY29uc3Qgcm5kcyA9IHJuZygpO1xuICAgICAgICB1cGRhdGVWN1N0YXRlKF9zdGF0ZSwgbm93LCBybmRzKTtcbiAgICAgICAgYnl0ZXMgPSB2N0J5dGVzKHJuZHMsIF9zdGF0ZS5tc2VjcywgX3N0YXRlLnNlcSwgYnVmLCBvZmZzZXQpO1xuICAgIH1cbiAgICByZXR1cm4gYnVmID8/IHVuc2FmZVN0cmluZ2lmeShieXRlcyk7XG59XG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlVjdTdGF0ZShzdGF0ZSwgbm93LCBybmRzKSB7XG4gICAgc3RhdGUubXNlY3MgPz89IC1JbmZpbml0eTtcbiAgICBzdGF0ZS5zZXEgPz89IDA7XG4gICAgaWYgKG5vdyA+IHN0YXRlLm1zZWNzKSB7XG4gICAgICAgIHN0YXRlLnNlcSA9IChybmRzWzZdIDw8IDIzKSB8IChybmRzWzddIDw8IDE2KSB8IChybmRzWzhdIDw8IDgpIHwgcm5kc1s5XTtcbiAgICAgICAgc3RhdGUubXNlY3MgPSBub3c7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBzdGF0ZS5zZXEgPSAoc3RhdGUuc2VxICsgMSkgfCAwO1xuICAgICAgICBpZiAoc3RhdGUuc2VxID09PSAwKSB7XG4gICAgICAgICAgICBzdGF0ZS5tc2VjcysrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZTtcbn1cbmZ1bmN0aW9uIHY3Qnl0ZXMocm5kcywgbXNlY3MsIHNlcSwgYnVmLCBvZmZzZXQgPSAwKSB7XG4gICAgaWYgKHJuZHMubGVuZ3RoIDwgMTYpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSYW5kb20gYnl0ZXMgbGVuZ3RoIG11c3QgYmUgPj0gMTYnKTtcbiAgICB9XG4gICAgaWYgKCFidWYpIHtcbiAgICAgICAgYnVmID0gbmV3IFVpbnQ4QXJyYXkoMTYpO1xuICAgICAgICBvZmZzZXQgPSAwO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKG9mZnNldCA8IDAgfHwgb2Zmc2V0ICsgMTYgPiBidWYubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihgVVVJRCBieXRlIHJhbmdlICR7b2Zmc2V0fToke29mZnNldCArIDE1fSBpcyBvdXQgb2YgYnVmZmVyIGJvdW5kc2ApO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1zZWNzID8/PSBEYXRlLm5vdygpO1xuICAgIHNlcSA/Pz0gKChybmRzWzZdICogMHg3ZikgPDwgMjQpIHwgKHJuZHNbN10gPDwgMTYpIHwgKHJuZHNbOF0gPDwgOCkgfCBybmRzWzldO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAobXNlY3MgLyAweDEwMDAwMDAwMDAwKSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IChtc2VjcyAvIDB4MTAwMDAwMDAwKSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IChtc2VjcyAvIDB4MTAwMDAwMCkgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAobXNlY3MgLyAweDEwMDAwKSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IChtc2VjcyAvIDB4MTAwKSAmIDB4ZmY7XG4gICAgYnVmW29mZnNldCsrXSA9IG1zZWNzICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gMHg3MCB8ICgoc2VxID4+PiAyOCkgJiAweDBmKTtcbiAgICBidWZbb2Zmc2V0KytdID0gKHNlcSA+Pj4gMjApICYgMHhmZjtcbiAgICBidWZbb2Zmc2V0KytdID0gMHg4MCB8ICgoc2VxID4+PiAxNCkgJiAweDNmKTtcbiAgICBidWZbb2Zmc2V0KytdID0gKHNlcSA+Pj4gNikgJiAweGZmO1xuICAgIGJ1ZltvZmZzZXQrK10gPSAoKHNlcSA8PCAyKSAmIDB4ZmYpIHwgKHJuZHNbMTBdICYgMHgwMyk7XG4gICAgYnVmW29mZnNldCsrXSA9IHJuZHNbMTFdO1xuICAgIGJ1ZltvZmZzZXQrK10gPSBybmRzWzEyXTtcbiAgICBidWZbb2Zmc2V0KytdID0gcm5kc1sxM107XG4gICAgYnVmW29mZnNldCsrXSA9IHJuZHNbMTRdO1xuICAgIGJ1ZltvZmZzZXQrK10gPSBybmRzWzE1XTtcbiAgICByZXR1cm4gYnVmO1xufVxuZXhwb3J0IGRlZmF1bHQgdjc7XG4iLCJleHBvcnQgZGVmYXVsdCBcIl9fVklURV9BU1NFVF9fRGNDUGtHdnpfX1wiIiwiZXhwb3J0IGRlZmF1bHQgYXN5bmMgKG9wdHMgPSB7fSwgdXJsKSA9PiB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBpZiAodXJsLnN0YXJ0c1dpdGgoXCJkYXRhOlwiKSkge1xuICAgICAgICBjb25zdCB1cmxDb250ZW50ID0gdXJsLnJlcGxhY2UoL15kYXRhOi4qP2Jhc2U2NCwvLCBcIlwiKTtcbiAgICAgICAgbGV0IGJ5dGVzO1xuICAgICAgICBpZiAodHlwZW9mIEJ1ZmZlciA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBCdWZmZXIuZnJvbSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBieXRlcyA9IEJ1ZmZlci5mcm9tKHVybENvbnRlbnQsIFwiYmFzZTY0XCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBhdG9iID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnN0IGJpbmFyeVN0cmluZyA9IGF0b2IodXJsQ29udGVudCk7XG4gICAgICAgICAgICBieXRlcyA9IG5ldyBVaW50OEFycmF5KGJpbmFyeVN0cmluZy5sZW5ndGgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiaW5hcnlTdHJpbmcubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBieXRlc1tpXSA9IGJpbmFyeVN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGRlY29kZSBiYXNlNjQtZW5jb2RlZCBkYXRhIFVSTFwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQgPSBhd2FpdCBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZShieXRlcywgb3B0cyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vbWRuL3dlYmFzc2VtYmx5LWV4YW1wbGVzL2lzc3Vlcy81XG4gICAgICAgIC8vIFdlYkFzc2VtYmx5Lmluc3RhbnRpYXRlU3RyZWFtaW5nIHJlcXVpcmVzIHRoZSBzZXJ2ZXIgdG8gcHJvdmlkZSB0aGVcbiAgICAgICAgLy8gY29ycmVjdCBNSU1FIHR5cGUgZm9yIC53YXNtIGZpbGVzLCB3aGljaCB1bmZvcnR1bmF0ZWx5IGRvZXNuJ3Qgd29yayBmb3JcbiAgICAgICAgLy8gYSBsb3Qgb2Ygc3RhdGljIGZpbGUgc2VydmVycywgc28gd2UganVzdCB3b3JrIGFyb3VuZCBpdCBieSBnZXR0aW5nIHRoZVxuICAgICAgICAvLyByYXcgYnVmZmVyLlxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcbiAgICAgICAgY29uc3QgY29udGVudFR5cGUgPSByZXNwb25zZS5oZWFkZXJzLmdldChcIkNvbnRlbnQtVHlwZVwiKSB8fCBcIlwiO1xuICAgICAgICBpZiAoXCJpbnN0YW50aWF0ZVN0cmVhbWluZ1wiIGluIFdlYkFzc2VtYmx5ICYmIGNvbnRlbnRUeXBlLnN0YXJ0c1dpdGgoXCJhcHBsaWNhdGlvbi93YXNtXCIpKSB7XG4gICAgICAgICAgICByZXN1bHQgPSBhd2FpdCBXZWJBc3NlbWJseS5pbnN0YW50aWF0ZVN0cmVhbWluZyhyZXNwb25zZSwgb3B0cyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBidWZmZXIgPSBhd2FpdCByZXNwb25zZS5hcnJheUJ1ZmZlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgV2ViQXNzZW1ibHkuaW5zdGFudGlhdGUoYnVmZmVyLCBvcHRzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0Lmluc3RhbmNlLmV4cG9ydHM7XG59IiwibGV0IHdhc207XG5leHBvcnQgZnVuY3Rpb24gX193Ymdfc2V0X3dhc20odmFsKSB7XG4gICAgd2FzbSA9IHZhbDtcbn1cblxuZnVuY3Rpb24gYWRkVG9FeHRlcm5yZWZUYWJsZTAob2JqKSB7XG4gICAgY29uc3QgaWR4ID0gd2FzbS5fX2V4dGVybnJlZl90YWJsZV9hbGxvYygpO1xuICAgIHdhc20uX193YmluZGdlbl9leHRlcm5yZWZzLnNldChpZHgsIG9iaik7XG4gICAgcmV0dXJuIGlkeDtcbn1cblxuZnVuY3Rpb24gZGVidWdTdHJpbmcodmFsKSB7XG4gICAgLy8gcHJpbWl0aXZlIHR5cGVzXG4gICAgY29uc3QgdHlwZSA9IHR5cGVvZiB2YWw7XG4gICAgaWYgKHR5cGUgPT0gJ251bWJlcicgfHwgdHlwZSA9PSAnYm9vbGVhbicgfHwgdmFsID09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICBgJHt2YWx9YDtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGBcIiR7dmFsfVwiYDtcbiAgICB9XG4gICAgaWYgKHR5cGUgPT0gJ3N5bWJvbCcpIHtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSB2YWwuZGVzY3JpcHRpb247XG4gICAgICAgIGlmIChkZXNjcmlwdGlvbiA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1N5bWJvbCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYFN5bWJvbCgke2Rlc2NyaXB0aW9ufSlgO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IHZhbC5uYW1lO1xuICAgICAgICBpZiAodHlwZW9mIG5hbWUgPT0gJ3N0cmluZycgJiYgbmFtZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICByZXR1cm4gYEZ1bmN0aW9uKCR7bmFtZX0pYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAnRnVuY3Rpb24nO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIG9iamVjdHNcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWwpKSB7XG4gICAgICAgIGNvbnN0IGxlbmd0aCA9IHZhbC5sZW5ndGg7XG4gICAgICAgIGxldCBkZWJ1ZyA9ICdbJztcbiAgICAgICAgaWYgKGxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGRlYnVnICs9IGRlYnVnU3RyaW5nKHZhbFswXSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkZWJ1ZyArPSAnLCAnICsgZGVidWdTdHJpbmcodmFsW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBkZWJ1ZyArPSAnXSc7XG4gICAgICAgIHJldHVybiBkZWJ1ZztcbiAgICB9XG4gICAgLy8gVGVzdCBmb3IgYnVpbHQtaW5cbiAgICBjb25zdCBidWlsdEluTWF0Y2hlcyA9IC9cXFtvYmplY3QgKFteXFxdXSspXFxdLy5leGVjKHRvU3RyaW5nLmNhbGwodmFsKSk7XG4gICAgbGV0IGNsYXNzTmFtZTtcbiAgICBpZiAoYnVpbHRJbk1hdGNoZXMgJiYgYnVpbHRJbk1hdGNoZXMubGVuZ3RoID4gMSkge1xuICAgICAgICBjbGFzc05hbWUgPSBidWlsdEluTWF0Y2hlc1sxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGYWlsZWQgdG8gbWF0Y2ggdGhlIHN0YW5kYXJkICdbb2JqZWN0IENsYXNzTmFtZV0nXG4gICAgICAgIHJldHVybiB0b1N0cmluZy5jYWxsKHZhbCk7XG4gICAgfVxuICAgIGlmIChjbGFzc05hbWUgPT0gJ09iamVjdCcpIHtcbiAgICAgICAgLy8gd2UncmUgYSB1c2VyIGRlZmluZWQgY2xhc3Mgb3IgT2JqZWN0XG4gICAgICAgIC8vIEpTT04uc3RyaW5naWZ5IGF2b2lkcyBwcm9ibGVtcyB3aXRoIGN5Y2xlcywgYW5kIGlzIGdlbmVyYWxseSBtdWNoXG4gICAgICAgIC8vIGVhc2llciB0aGFuIGxvb3BpbmcgdGhyb3VnaCBvd25Qcm9wZXJ0aWVzIG9mIGB2YWxgLlxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuICdPYmplY3QoJyArIEpTT04uc3RyaW5naWZ5KHZhbCkgKyAnKSc7XG4gICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIHJldHVybiAnT2JqZWN0JztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBlcnJvcnNcbiAgICBpZiAodmFsIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGAke3ZhbC5uYW1lfTogJHt2YWwubWVzc2FnZX1cXG4ke3ZhbC5zdGFja31gO1xuICAgIH1cbiAgICAvLyBUT0RPIHdlIGNvdWxkIHRlc3QgZm9yIG1vcmUgdGhpbmdzIGhlcmUsIGxpa2UgYFNldGBzIGFuZCBgTWFwYHMuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbn1cblxuZnVuY3Rpb24gZ2V0QXJyYXlVOEZyb21XYXNtMChwdHIsIGxlbikge1xuICAgIHB0ciA9IHB0ciA+Pj4gMDtcbiAgICByZXR1cm4gZ2V0VWludDhBcnJheU1lbW9yeTAoKS5zdWJhcnJheShwdHIgLyAxLCBwdHIgLyAxICsgbGVuKTtcbn1cblxubGV0IGNhY2hlZERhdGFWaWV3TWVtb3J5MCA9IG51bGw7XG5mdW5jdGlvbiBnZXREYXRhVmlld01lbW9yeTAoKSB7XG4gICAgaWYgKGNhY2hlZERhdGFWaWV3TWVtb3J5MCA9PT0gbnVsbCB8fCBjYWNoZWREYXRhVmlld01lbW9yeTAuYnVmZmVyLmRldGFjaGVkID09PSB0cnVlIHx8IChjYWNoZWREYXRhVmlld01lbW9yeTAuYnVmZmVyLmRldGFjaGVkID09PSB1bmRlZmluZWQgJiYgY2FjaGVkRGF0YVZpZXdNZW1vcnkwLmJ1ZmZlciAhPT0gd2FzbS5tZW1vcnkuYnVmZmVyKSkge1xuICAgICAgICBjYWNoZWREYXRhVmlld01lbW9yeTAgPSBuZXcgRGF0YVZpZXcod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZERhdGFWaWV3TWVtb3J5MDtcbn1cblxuZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbVdhc20wKHB0ciwgbGVuKSB7XG4gICAgcHRyID0gcHRyID4+PiAwO1xuICAgIHJldHVybiBkZWNvZGVUZXh0KHB0ciwgbGVuKTtcbn1cblxubGV0IGNhY2hlZFVpbnQ4QXJyYXlNZW1vcnkwID0gbnVsbDtcbmZ1bmN0aW9uIGdldFVpbnQ4QXJyYXlNZW1vcnkwKCkge1xuICAgIGlmIChjYWNoZWRVaW50OEFycmF5TWVtb3J5MCA9PT0gbnVsbCB8fCBjYWNoZWRVaW50OEFycmF5TWVtb3J5MC5ieXRlTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNhY2hlZFVpbnQ4QXJyYXlNZW1vcnkwID0gbmV3IFVpbnQ4QXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZFVpbnQ4QXJyYXlNZW1vcnkwO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVFcnJvcihmLCBhcmdzKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGYuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zdCBpZHggPSBhZGRUb0V4dGVybnJlZlRhYmxlMChlKTtcbiAgICAgICAgd2FzbS5fX3diaW5kZ2VuX2V4bl9zdG9yZShpZHgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNMaWtlTm9uZSh4KSB7XG4gICAgcmV0dXJuIHggPT09IHVuZGVmaW5lZCB8fCB4ID09PSBudWxsO1xufVxuXG5mdW5jdGlvbiBwYXNzQXJyYXk4VG9XYXNtMChhcmcsIG1hbGxvYykge1xuICAgIGNvbnN0IHB0ciA9IG1hbGxvYyhhcmcubGVuZ3RoICogMSwgMSkgPj4+IDA7XG4gICAgZ2V0VWludDhBcnJheU1lbW9yeTAoKS5zZXQoYXJnLCBwdHIgLyAxKTtcbiAgICBXQVNNX1ZFQ1RPUl9MRU4gPSBhcmcubGVuZ3RoO1xuICAgIHJldHVybiBwdHI7XG59XG5cbmZ1bmN0aW9uIHBhc3NTdHJpbmdUb1dhc20wKGFyZywgbWFsbG9jLCByZWFsbG9jKSB7XG4gICAgaWYgKHJlYWxsb2MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBidWYgPSBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGUoYXJnKTtcbiAgICAgICAgY29uc3QgcHRyID0gbWFsbG9jKGJ1Zi5sZW5ndGgsIDEpID4+PiAwO1xuICAgICAgICBnZXRVaW50OEFycmF5TWVtb3J5MCgpLnN1YmFycmF5KHB0ciwgcHRyICsgYnVmLmxlbmd0aCkuc2V0KGJ1Zik7XG4gICAgICAgIFdBU01fVkVDVE9SX0xFTiA9IGJ1Zi5sZW5ndGg7XG4gICAgICAgIHJldHVybiBwdHI7XG4gICAgfVxuXG4gICAgbGV0IGxlbiA9IGFyZy5sZW5ndGg7XG4gICAgbGV0IHB0ciA9IG1hbGxvYyhsZW4sIDEpID4+PiAwO1xuXG4gICAgY29uc3QgbWVtID0gZ2V0VWludDhBcnJheU1lbW9yeTAoKTtcblxuICAgIGxldCBvZmZzZXQgPSAwO1xuXG4gICAgZm9yICg7IG9mZnNldCA8IGxlbjsgb2Zmc2V0KyspIHtcbiAgICAgICAgY29uc3QgY29kZSA9IGFyZy5jaGFyQ29kZUF0KG9mZnNldCk7XG4gICAgICAgIGlmIChjb2RlID4gMHg3RikgYnJlYWs7XG4gICAgICAgIG1lbVtwdHIgKyBvZmZzZXRdID0gY29kZTtcbiAgICB9XG4gICAgaWYgKG9mZnNldCAhPT0gbGVuKSB7XG4gICAgICAgIGlmIChvZmZzZXQgIT09IDApIHtcbiAgICAgICAgICAgIGFyZyA9IGFyZy5zbGljZShvZmZzZXQpO1xuICAgICAgICB9XG4gICAgICAgIHB0ciA9IHJlYWxsb2MocHRyLCBsZW4sIGxlbiA9IG9mZnNldCArIGFyZy5sZW5ndGggKiAzLCAxKSA+Pj4gMDtcbiAgICAgICAgY29uc3QgdmlldyA9IGdldFVpbnQ4QXJyYXlNZW1vcnkwKCkuc3ViYXJyYXkocHRyICsgb2Zmc2V0LCBwdHIgKyBsZW4pO1xuICAgICAgICBjb25zdCByZXQgPSBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGVJbnRvKGFyZywgdmlldyk7XG5cbiAgICAgICAgb2Zmc2V0ICs9IHJldC53cml0dGVuO1xuICAgICAgICBwdHIgPSByZWFsbG9jKHB0ciwgbGVuLCBvZmZzZXQsIDEpID4+PiAwO1xuICAgIH1cblxuICAgIFdBU01fVkVDVE9SX0xFTiA9IG9mZnNldDtcbiAgICByZXR1cm4gcHRyO1xufVxuXG5mdW5jdGlvbiB0YWtlRnJvbUV4dGVybnJlZlRhYmxlMChpZHgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHdhc20uX193YmluZGdlbl9leHRlcm5yZWZzLmdldChpZHgpO1xuICAgIHdhc20uX19leHRlcm5yZWZfdGFibGVfZGVhbGxvYyhpZHgpO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cblxubGV0IGNhY2hlZFRleHREZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKCd1dGYtOCcsIHsgaWdub3JlQk9NOiB0cnVlLCBmYXRhbDogdHJ1ZSB9KTtcbmNhY2hlZFRleHREZWNvZGVyLmRlY29kZSgpO1xuY29uc3QgTUFYX1NBRkFSSV9ERUNPREVfQllURVMgPSAyMTQ2NDM1MDcyO1xubGV0IG51bUJ5dGVzRGVjb2RlZCA9IDA7XG5mdW5jdGlvbiBkZWNvZGVUZXh0KHB0ciwgbGVuKSB7XG4gICAgbnVtQnl0ZXNEZWNvZGVkICs9IGxlbjtcbiAgICBpZiAobnVtQnl0ZXNEZWNvZGVkID49IE1BWF9TQUZBUklfREVDT0RFX0JZVEVTKSB7XG4gICAgICAgIGNhY2hlZFRleHREZWNvZGVyID0gbmV3IFRleHREZWNvZGVyKCd1dGYtOCcsIHsgaWdub3JlQk9NOiB0cnVlLCBmYXRhbDogdHJ1ZSB9KTtcbiAgICAgICAgY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKCk7XG4gICAgICAgIG51bUJ5dGVzRGVjb2RlZCA9IGxlbjtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZFRleHREZWNvZGVyLmRlY29kZShnZXRVaW50OEFycmF5TWVtb3J5MCgpLnN1YmFycmF5KHB0ciwgcHRyICsgbGVuKSk7XG59XG5cbmNvbnN0IGNhY2hlZFRleHRFbmNvZGVyID0gbmV3IFRleHRFbmNvZGVyKCk7XG5cbmlmICghKCdlbmNvZGVJbnRvJyBpbiBjYWNoZWRUZXh0RW5jb2RlcikpIHtcbiAgICBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGVJbnRvID0gZnVuY3Rpb24gKGFyZywgdmlldykge1xuICAgICAgICBjb25zdCBidWYgPSBjYWNoZWRUZXh0RW5jb2Rlci5lbmNvZGUoYXJnKTtcbiAgICAgICAgdmlldy5zZXQoYnVmKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlYWQ6IGFyZy5sZW5ndGgsXG4gICAgICAgICAgICB3cml0dGVuOiBidWYubGVuZ3RoXG4gICAgICAgIH07XG4gICAgfVxufVxuXG5sZXQgV0FTTV9WRUNUT1JfTEVOID0gMDtcblxuLyoqXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5leHBvcnQgZnVuY3Rpb24gY3VycmVudFZlcnNpb24oKSB7XG4gICAgbGV0IGRlZmVycmVkMV8wO1xuICAgIGxldCBkZWZlcnJlZDFfMTtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXQgPSB3YXNtLmN1cnJlbnRWZXJzaW9uKCk7XG4gICAgICAgIGRlZmVycmVkMV8wID0gcmV0WzBdO1xuICAgICAgICBkZWZlcnJlZDFfMSA9IHJldFsxXTtcbiAgICAgICAgcmV0dXJuIGdldFN0cmluZ0Zyb21XYXNtMChyZXRbMF0sIHJldFsxXSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgd2FzbS5fX3diaW5kZ2VuX2ZyZWUoZGVmZXJyZWQxXzAsIGRlZmVycmVkMV8xLCAxKTtcbiAgICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHthbnl9IGlucHV0XG4gKiBAcmV0dXJucyB7YW55fVxuICovXG5leHBvcnQgZnVuY3Rpb24gbWlncmF0ZURvY3VtZW50KGlucHV0KSB7XG4gICAgY29uc3QgcmV0ID0gd2FzbS5taWdyYXRlRG9jdW1lbnQoaW5wdXQpO1xuICAgIGlmIChyZXRbMl0pIHtcbiAgICAgICAgdGhyb3cgdGFrZUZyb21FeHRlcm5yZWZUYWJsZTAocmV0WzFdKTtcbiAgICB9XG4gICAgcmV0dXJuIHRha2VGcm9tRXh0ZXJucmVmVGFibGUwKHJldFswXSk7XG59XG5cbi8qKlxuICogU2VyaWFsaXplIGFuIEF1dG9tZXJnZSBkb2N1bWVudCB0byBKU09OLCBlbmNvZGluZyByaWNoLXRleHQgc3BhbnMuXG4gKiBAcGFyYW0ge1VpbnQ4QXJyYXl9IGlucHV0XG4gKiBAcmV0dXJucyB7YW55fVxuICovXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplQXV0b21lcmdlRG9jdW1lbnQoaW5wdXQpIHtcbiAgICBjb25zdCBwdHIwID0gcGFzc0FycmF5OFRvV2FzbTAoaW5wdXQsIHdhc20uX193YmluZGdlbl9tYWxsb2MpO1xuICAgIGNvbnN0IGxlbjAgPSBXQVNNX1ZFQ1RPUl9MRU47XG4gICAgY29uc3QgcmV0ID0gd2FzbS5zZXJpYWxpemVBdXRvbWVyZ2VEb2N1bWVudChwdHIwLCBsZW4wKTtcbiAgICBpZiAocmV0WzJdKSB7XG4gICAgICAgIHRocm93IHRha2VGcm9tRXh0ZXJucmVmVGFibGUwKHJldFsxXSk7XG4gICAgfVxuICAgIHJldHVybiB0YWtlRnJvbUV4dGVybnJlZlRhYmxlMChyZXRbMF0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfRXJyb3JfNTI2NzNiN2RlNWEwY2E4OShhcmcwLCBhcmcxKSB7XG4gICAgY29uc3QgcmV0ID0gRXJyb3IoZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpKTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX051bWJlcl8yZDFkY2ZjZjRlYzUxNzM2KGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBOdW1iZXIoYXJnMCk7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19TdHJpbmdfOGYwZWIzOWE0YTRjMmY2NihhcmcwLCBhcmcxKSB7XG4gICAgY29uc3QgcmV0ID0gU3RyaW5nKGFyZzEpO1xuICAgIGNvbnN0IHB0cjEgPSBwYXNzU3RyaW5nVG9XYXNtMChyZXQsIHdhc20uX193YmluZGdlbl9tYWxsb2MsIHdhc20uX193YmluZGdlbl9yZWFsbG9jKTtcbiAgICBjb25zdCBsZW4xID0gV0FTTV9WRUNUT1JfTEVOO1xuICAgIGdldERhdGFWaWV3TWVtb3J5MCgpLnNldEludDMyKGFyZzAgKyA0ICogMSwgbGVuMSwgdHJ1ZSk7XG4gICAgZ2V0RGF0YVZpZXdNZW1vcnkwKCkuc2V0SW50MzIoYXJnMCArIDQgKiAwLCBwdHIxLCB0cnVlKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19fX3diaW5kZ2VuX2JpZ2ludF9nZXRfYXNfaTY0XzZlMzJmNWU2YWZmMDJlMWQoYXJnMCwgYXJnMSkge1xuICAgIGNvbnN0IHYgPSBhcmcxO1xuICAgIGNvbnN0IHJldCA9IHR5cGVvZih2KSA9PT0gJ2JpZ2ludCcgPyB2IDogdW5kZWZpbmVkO1xuICAgIGdldERhdGFWaWV3TWVtb3J5MCgpLnNldEJpZ0ludDY0KGFyZzAgKyA4ICogMSwgaXNMaWtlTm9uZShyZXQpID8gQmlnSW50KDApIDogcmV0LCB0cnVlKTtcbiAgICBnZXREYXRhVmlld01lbW9yeTAoKS5zZXRJbnQzMihhcmcwICsgNCAqIDAsICFpc0xpa2VOb25lKHJldCksIHRydWUpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX19fd2JpbmRnZW5fYm9vbGVhbl9nZXRfZGVhMjViMzM4ODJiODk1YihhcmcwKSB7XG4gICAgY29uc3QgdiA9IGFyZzA7XG4gICAgY29uc3QgcmV0ID0gdHlwZW9mKHYpID09PSAnYm9vbGVhbicgPyB2IDogdW5kZWZpbmVkO1xuICAgIHJldHVybiBpc0xpa2VOb25lKHJldCkgPyAweEZGRkZGRiA6IHJldCA/IDEgOiAwO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX19fd2JpbmRnZW5fZGVidWdfc3RyaW5nX2FkZmI2NjJhZTM0NzI0YjYoYXJnMCwgYXJnMSkge1xuICAgIGNvbnN0IHJldCA9IGRlYnVnU3RyaW5nKGFyZzEpO1xuICAgIGNvbnN0IHB0cjEgPSBwYXNzU3RyaW5nVG9XYXNtMChyZXQsIHdhc20uX193YmluZGdlbl9tYWxsb2MsIHdhc20uX193YmluZGdlbl9yZWFsbG9jKTtcbiAgICBjb25zdCBsZW4xID0gV0FTTV9WRUNUT1JfTEVOO1xuICAgIGdldERhdGFWaWV3TWVtb3J5MCgpLnNldEludDMyKGFyZzAgKyA0ICogMSwgbGVuMSwgdHJ1ZSk7XG4gICAgZ2V0RGF0YVZpZXdNZW1vcnkwKCkuc2V0SW50MzIoYXJnMCArIDQgKiAwLCBwdHIxLCB0cnVlKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19fX3diaW5kZ2VuX2luXzBkM2UxZThmMGM2NjkzMTcoYXJnMCwgYXJnMSkge1xuICAgIGNvbnN0IHJldCA9IGFyZzAgaW4gYXJnMTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX19fd2JpbmRnZW5faXNfYmlnaW50XzBlMWEyZTNmNTVjZmFlMjcoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IHR5cGVvZihhcmcwKSA9PT0gJ2JpZ2ludCc7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19fX3diaW5kZ2VuX2lzX2Z1bmN0aW9uXzhkNDAwYjhiMWFmOTc4Y2QoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IHR5cGVvZihhcmcwKSA9PT0gJ2Z1bmN0aW9uJztcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX19fd2JpbmRnZW5faXNfb2JqZWN0X2NlNzc0ZjM0OTA2OTIzODYoYXJnMCkge1xuICAgIGNvbnN0IHZhbCA9IGFyZzA7XG4gICAgY29uc3QgcmV0ID0gdHlwZW9mKHZhbCkgPT09ICdvYmplY3QnICYmIHZhbCAhPT0gbnVsbDtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX19fd2JpbmRnZW5faXNfc3RyaW5nXzcwNGVmOWM4ZmMxMzEwMzAoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IHR5cGVvZihhcmcwKSA9PT0gJ3N0cmluZyc7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19fX3diaW5kZ2VuX2pzdmFsX2VxX2I2MTAxY2M5Y2VmMWZlMzYoYXJnMCwgYXJnMSkge1xuICAgIGNvbnN0IHJldCA9IGFyZzAgPT09IGFyZzE7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19fX3diaW5kZ2VuX2pzdmFsX2xvb3NlX2VxXzc2NjA1NzYwMGZkZDFiMGQoYXJnMCwgYXJnMSkge1xuICAgIGNvbnN0IHJldCA9IGFyZzAgPT0gYXJnMTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX19fd2JpbmRnZW5fbnVtYmVyX2dldF85NjE5MTg1YTc0MTk3Zjk1KGFyZzAsIGFyZzEpIHtcbiAgICBjb25zdCBvYmogPSBhcmcxO1xuICAgIGNvbnN0IHJldCA9IHR5cGVvZihvYmopID09PSAnbnVtYmVyJyA/IG9iaiA6IHVuZGVmaW5lZDtcbiAgICBnZXREYXRhVmlld01lbW9yeTAoKS5zZXRGbG9hdDY0KGFyZzAgKyA4ICogMSwgaXNMaWtlTm9uZShyZXQpID8gMCA6IHJldCwgdHJ1ZSk7XG4gICAgZ2V0RGF0YVZpZXdNZW1vcnkwKCkuc2V0SW50MzIoYXJnMCArIDQgKiAwLCAhaXNMaWtlTm9uZShyZXQpLCB0cnVlKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19fX3diaW5kZ2VuX3N0cmluZ19nZXRfYTJhMzFlMTZlZGY5NmU0MihhcmcwLCBhcmcxKSB7XG4gICAgY29uc3Qgb2JqID0gYXJnMTtcbiAgICBjb25zdCByZXQgPSB0eXBlb2Yob2JqKSA9PT0gJ3N0cmluZycgPyBvYmogOiB1bmRlZmluZWQ7XG4gICAgdmFyIHB0cjEgPSBpc0xpa2VOb25lKHJldCkgPyAwIDogcGFzc1N0cmluZ1RvV2FzbTAocmV0LCB3YXNtLl9fd2JpbmRnZW5fbWFsbG9jLCB3YXNtLl9fd2JpbmRnZW5fcmVhbGxvYyk7XG4gICAgdmFyIGxlbjEgPSBXQVNNX1ZFQ1RPUl9MRU47XG4gICAgZ2V0RGF0YVZpZXdNZW1vcnkwKCkuc2V0SW50MzIoYXJnMCArIDQgKiAxLCBsZW4xLCB0cnVlKTtcbiAgICBnZXREYXRhVmlld01lbW9yeTAoKS5zZXRJbnQzMihhcmcwICsgNCAqIDAsIHB0cjEsIHRydWUpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX19fd2JpbmRnZW5fdGhyb3dfZGQyNDQxN2VkMzZmYzQ2ZShhcmcwLCBhcmcxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGdldFN0cmluZ0Zyb21XYXNtMChhcmcwLCBhcmcxKSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfY2FsbF9hYmI0ZmY0NmNlMzhiZTQwKCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKGFyZzAsIGFyZzEpIHtcbiAgICBjb25zdCByZXQgPSBhcmcwLmNhbGwoYXJnMSk7XG4gICAgcmV0dXJuIHJldDtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2RvbmVfNjJlYTE2YWY0Y2UzNGIyNChhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gYXJnMC5kb25lO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfZW50cmllc184M2M3OTkzODA1NGUwNjVmKGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBPYmplY3QuZW50cmllcyhhcmcwKTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2dldFJhbmRvbVZhbHVlc18zYzljMGQ1ODZlNTc1YTE2KCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKGFyZzAsIGFyZzEpIHtcbiAgICBnbG9iYWxUaGlzLmNyeXB0by5nZXRSYW5kb21WYWx1ZXMoZ2V0QXJyYXlVOEZyb21XYXNtMChhcmcwLCBhcmcxKSk7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19nZXRfNmI3YmQ1MmFjYTNmOTY3MShhcmcwLCBhcmcxKSB7XG4gICAgY29uc3QgcmV0ID0gYXJnMFthcmcxID4+PiAwXTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2dldF9hZjlkYWI3ZTk2MDNlYTkzKCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKGFyZzAsIGFyZzEpIHtcbiAgICBjb25zdCByZXQgPSBSZWZsZWN0LmdldChhcmcwLCBhcmcxKTtcbiAgICByZXR1cm4gcmV0O1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfaW5zdGFuY2VvZl9BcnJheUJ1ZmZlcl9mMzMyMGQyNDE5Y2QwMzU1KGFyZzApIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHRyeSB7XG4gICAgICAgIHJlc3VsdCA9IGFyZzAgaW5zdGFuY2VvZiBBcnJheUJ1ZmZlcjtcbiAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCByZXQgPSByZXN1bHQ7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19pbnN0YW5jZW9mX01hcF8wODRiZThkYTc0MzY0MTU4KGFyZzApIHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIHRyeSB7XG4gICAgICAgIHJlc3VsdCA9IGFyZzAgaW5zdGFuY2VvZiBNYXA7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgcmV0ID0gcmVzdWx0O1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfaW5zdGFuY2VvZl9VaW50OEFycmF5X2RhNTRjY2M5ZDNlMDk0MzQoYXJnMCkge1xuICAgIGxldCByZXN1bHQ7XG4gICAgdHJ5IHtcbiAgICAgICAgcmVzdWx0ID0gYXJnMCBpbnN0YW5jZW9mIFVpbnQ4QXJyYXk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgcmV0ID0gcmVzdWx0O1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfaXNBcnJheV81MWZkOWU2NDIyYzBhMzk1KGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBBcnJheS5pc0FycmF5KGFyZzApO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfaXNTYWZlSW50ZWdlcl9hZTdkM2YwNTRkNTVmYTE2KGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBOdW1iZXIuaXNTYWZlSW50ZWdlcihhcmcwKTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2l0ZXJhdG9yXzI3YjdjOGIzNWFiM2U4NmIoKSB7XG4gICAgY29uc3QgcmV0ID0gU3ltYm9sLml0ZXJhdG9yO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfbGVuZ3RoXzIyYWMyM2VhZWM5ZDgwNTMoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IGFyZzAubGVuZ3RoO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfbGVuZ3RoX2Q0NTA0MGE0MGM1NzAzNjIoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IGFyZzAubGVuZ3RoO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfbmV3XzFiYTIxY2UzMTlhMDYyOTcoKSB7XG4gICAgY29uc3QgcmV0ID0gbmV3IE9iamVjdCgpO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfbmV3XzI1ZjIzOTc3OGQ2MTEyYjkoKSB7XG4gICAgY29uc3QgcmV0ID0gbmV3IEFycmF5KCk7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19uZXdfNjQyMWY2MDg0Y2M1YmM1YShhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gbmV3IFVpbnQ4QXJyYXkoYXJnMCk7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19uZXdfYjU0NmFlMTIwNzE4ODUwZSgpIHtcbiAgICBjb25zdCByZXQgPSBuZXcgTWFwKCk7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19uZXh0XzEzOGExN2JiZjA0ZTkyNmMoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IGFyZzAubmV4dDtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX25leHRfM2NmZTVjMGZlMmE0Y2M1MygpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGZ1bmN0aW9uIChhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gYXJnMC5uZXh0KCk7XG4gICAgcmV0dXJuIHJldDtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX3Byb3RvdHlwZXNldGNhbGxfZGZlOWI3NjZjZGMxZjFmZChhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgVWludDhBcnJheS5wcm90b3R5cGUuc2V0LmNhbGwoZ2V0QXJyYXlVOEZyb21XYXNtMChhcmcwLCBhcmcxKSwgYXJnMik7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193Ymdfc2V0XzNmMWQwYjk4NGVkMjcyZWQoYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIGFyZzBbYXJnMV0gPSBhcmcyO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX3NldF83ZGY0MzNlZWEwM2E1YzE0KGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICBhcmcwW2FyZzEgPj4+IDBdID0gYXJnMjtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19zZXRfZWZhYWYxNDViOTM3NzM2OShhcmcwLCBhcmcxLCBhcmcyKSB7XG4gICAgY29uc3QgcmV0ID0gYXJnMC5zZXQoYXJnMSwgYXJnMik7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ192YWx1ZV81N2I3YjAzNWUxMTdmN2VlKGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBhcmcwLnZhbHVlO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9jYXN0XzIyNDFiNmFmNGM0YjI5NDEoYXJnMCwgYXJnMSkge1xuICAgIC8vIENhc3QgaW50cmluc2ljIGZvciBgUmVmKFN0cmluZykgLT4gRXh0ZXJucmVmYC5cbiAgICBjb25zdCByZXQgPSBnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMCwgYXJnMSk7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX2Nhc3RfNDYyNWM1NzdhYjJlYzllZShhcmcwKSB7XG4gICAgLy8gQ2FzdCBpbnRyaW5zaWMgZm9yIGBVNjQgLT4gRXh0ZXJucmVmYC5cbiAgICBjb25zdCByZXQgPSBCaWdJbnQuYXNVaW50Tig2NCwgYXJnMCk7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX2Nhc3RfOWFlMDYwNzUwN2FiYjA1NyhhcmcwKSB7XG4gICAgLy8gQ2FzdCBpbnRyaW5zaWMgZm9yIGBJNjQgLT4gRXh0ZXJucmVmYC5cbiAgICBjb25zdCByZXQgPSBhcmcwO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9jYXN0X2Q2Y2QxOWI4MTU2MGZkNmUoYXJnMCkge1xuICAgIC8vIENhc3QgaW50cmluc2ljIGZvciBgRjY0IC0+IEV4dGVybnJlZmAuXG4gICAgY29uc3QgcmV0ID0gYXJnMDtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5faW5pdF9leHRlcm5yZWZfdGFibGUoKSB7XG4gICAgY29uc3QgdGFibGUgPSB3YXNtLl9fd2JpbmRnZW5fZXh0ZXJucmVmcztcbiAgICBjb25zdCBvZmZzZXQgPSB0YWJsZS5ncm93KDQpO1xuICAgIHRhYmxlLnNldCgwLCB1bmRlZmluZWQpO1xuICAgIHRhYmxlLnNldChvZmZzZXQgKyAwLCB1bmRlZmluZWQpO1xuICAgIHRhYmxlLnNldChvZmZzZXQgKyAxLCBudWxsKTtcbiAgICB0YWJsZS5zZXQob2Zmc2V0ICsgMiwgdHJ1ZSk7XG4gICAgdGFibGUuc2V0KG9mZnNldCArIDMsIGZhbHNlKTtcbn07XG4iLCJcblVSTCA9IGdsb2JhbFRoaXMuVVJMXG5pbXBvcnQgX192aXRlX193YXNtVXJsIGZyb20gXCIvVXNlcnMvcGF1bC9yZXBvcy9DYXRDb2xhYi9wYWNrYWdlcy9kb2N1bWVudC10eXBlcy9wa2cvY2F0Y29sYWJfZG9jdW1lbnRfdHlwZXNfYmcud2FzbT91cmxcIlxuaW1wb3J0IF9fdml0ZV9faW5pdFdhc20gZnJvbSBcIi9fX3ZpdGUtcGx1Z2luLXdhc20taGVscGVyXCJcbmltcG9ydCAqIGFzIF9fdml0ZV9fd2FzbUltcG9ydF8wIGZyb20gXCIuL2NhdGNvbGFiX2RvY3VtZW50X3R5cGVzX2JnLmpzXCI7XG5jb25zdCBfX3ZpdGVfX3dhc21Nb2R1bGUgPSBhd2FpdCBfX3ZpdGVfX2luaXRXYXNtKHsgXCIuL2NhdGNvbGFiX2RvY3VtZW50X3R5cGVzX2JnLmpzXCI6IHsgXCJfX3diZ19nZXRSYW5kb21WYWx1ZXNfM2M5YzBkNTg2ZTU3NWExNlwiOiBfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX2dldFJhbmRvbVZhbHVlc18zYzljMGQ1ODZlNTc1YTE2XCJdLFxuXCJfX3diZ19zZXRfM2YxZDBiOTg0ZWQyNzJlZFwiOiBfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX3NldF8zZjFkMGI5ODRlZDI3MmVkXCJdLFxuXCJfX3diZ19TdHJpbmdfOGYwZWIzOWE0YTRjMmY2NlwiOiBfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX1N0cmluZ184ZjBlYjM5YTRhNGMyZjY2XCJdLFxuXCJfX3diZ19pdGVyYXRvcl8yN2I3YzhiMzVhYjNlODZiXCI6IF9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfaXRlcmF0b3JfMjdiN2M4YjM1YWIzZTg2YlwiXSxcblwiX193YmdfbmV3XzI1ZjIzOTc3OGQ2MTEyYjlcIjogX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19uZXdfMjVmMjM5Nzc4ZDYxMTJiOVwiXSxcblwiX193YmdfZ2V0XzZiN2JkNTJhY2EzZjk2NzFcIjogX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19nZXRfNmI3YmQ1MmFjYTNmOTY3MVwiXSxcblwiX193Ymdfc2V0XzdkZjQzM2VlYTAzYTVjMTRcIjogX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19zZXRfN2RmNDMzZWVhMDNhNWMxNFwiXSxcblwiX193YmdfaXNBcnJheV81MWZkOWU2NDIyYzBhMzk1XCI6IF9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfaXNBcnJheV81MWZkOWU2NDIyYzBhMzk1XCJdLFxuXCJfX3diZ19sZW5ndGhfZDQ1MDQwYTQwYzU3MDM2MlwiOiBfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX2xlbmd0aF9kNDUwNDBhNDBjNTcwMzYyXCJdLFxuXCJfX3diZ19jYWxsX2FiYjRmZjQ2Y2UzOGJlNDBcIjogX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19jYWxsX2FiYjRmZjQ2Y2UzOGJlNDBcIl0sXG5cIl9fd2JnX25ld19iNTQ2YWUxMjA3MTg4NTBlXCI6IF9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfbmV3X2I1NDZhZTEyMDcxODg1MGVcIl0sXG5cIl9fd2JnX3NldF9lZmFhZjE0NWI5Mzc3MzY5XCI6IF9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193Ymdfc2V0X2VmYWFmMTQ1YjkzNzczNjlcIl0sXG5cIl9fd2JnX2lzU2FmZUludGVnZXJfYWU3ZDNmMDU0ZDU1ZmExNlwiOiBfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX2lzU2FmZUludGVnZXJfYWU3ZDNmMDU0ZDU1ZmExNlwiXSxcblwiX193YmdfbmV4dF8zY2ZlNWMwZmUyYTRjYzUzXCI6IF9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfbmV4dF8zY2ZlNWMwZmUyYTRjYzUzXCJdLFxuXCJfX3diZ19kb25lXzYyZWExNmFmNGNlMzRiMjRcIjogX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19kb25lXzYyZWExNmFmNGNlMzRiMjRcIl0sXG5cIl9fd2JnX3ZhbHVlXzU3YjdiMDM1ZTExN2Y3ZWVcIjogX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ192YWx1ZV81N2I3YjAzNWUxMTdmN2VlXCJdLFxuXCJfX3diZ19lbnRyaWVzXzgzYzc5OTM4MDU0ZTA2NWZcIjogX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19lbnRyaWVzXzgzYzc5OTM4MDU0ZTA2NWZcIl0sXG5cIl9fd2JnX25ld18xYmEyMWNlMzE5YTA2Mjk3XCI6IF9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfbmV3XzFiYTIxY2UzMTlhMDYyOTdcIl0sXG5cIl9fd2JnX2xlbmd0aF8yMmFjMjNlYWVjOWQ4MDUzXCI6IF9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfbGVuZ3RoXzIyYWMyM2VhZWM5ZDgwNTNcIl0sXG5cIl9fd2JnX3Byb3RvdHlwZXNldGNhbGxfZGZlOWI3NjZjZGMxZjFmZFwiOiBfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX3Byb3RvdHlwZXNldGNhbGxfZGZlOWI3NjZjZGMxZjFmZFwiXSxcblwiX193YmdfbmV3XzY0MjFmNjA4NGNjNWJjNWFcIjogX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19uZXdfNjQyMWY2MDg0Y2M1YmM1YVwiXSxcblwiX193YmdfbmV4dF8xMzhhMTdiYmYwNGU5MjZjXCI6IF9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfbmV4dF8xMzhhMTdiYmYwNGU5MjZjXCJdLFxuXCJfX3diZ19pbnN0YW5jZW9mX01hcF8wODRiZThkYTc0MzY0MTU4XCI6IF9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfaW5zdGFuY2VvZl9NYXBfMDg0YmU4ZGE3NDM2NDE1OFwiXSxcblwiX193YmdfaW5zdGFuY2VvZl9VaW50OEFycmF5X2RhNTRjY2M5ZDNlMDk0MzRcIjogX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19pbnN0YW5jZW9mX1VpbnQ4QXJyYXlfZGE1NGNjYzlkM2UwOTQzNFwiXSxcblwiX193YmdfaW5zdGFuY2VvZl9BcnJheUJ1ZmZlcl9mMzMyMGQyNDE5Y2QwMzU1XCI6IF9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfaW5zdGFuY2VvZl9BcnJheUJ1ZmZlcl9mMzMyMGQyNDE5Y2QwMzU1XCJdLFxuXCJfX3diZ19nZXRfYWY5ZGFiN2U5NjAzZWE5M1wiOiBfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX2dldF9hZjlkYWI3ZTk2MDNlYTkzXCJdLFxuXCJfX3diZ19fX3diaW5kZ2VuX251bWJlcl9nZXRfOTYxOTE4NWE3NDE5N2Y5NVwiOiBfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX19fd2JpbmRnZW5fbnVtYmVyX2dldF85NjE5MTg1YTc0MTk3Zjk1XCJdLFxuXCJfX3diZ19fX3diaW5kZ2VuX2luXzBkM2UxZThmMGM2NjkzMTdcIjogX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19fX3diaW5kZ2VuX2luXzBkM2UxZThmMGM2NjkzMTdcIl0sXG5cIl9fd2JnX19fd2JpbmRnZW5fdGhyb3dfZGQyNDQxN2VkMzZmYzQ2ZVwiOiBfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX19fd2JpbmRnZW5fdGhyb3dfZGQyNDQxN2VkMzZmYzQ2ZVwiXSxcblwiX193YmdfX193YmluZGdlbl9qc3ZhbF9lcV9iNjEwMWNjOWNlZjFmZTM2XCI6IF9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfX193YmluZGdlbl9qc3ZhbF9lcV9iNjEwMWNjOWNlZjFmZTM2XCJdLFxuXCJfX3diZ19FcnJvcl81MjY3M2I3ZGU1YTBjYTg5XCI6IF9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfRXJyb3JfNTI2NzNiN2RlNWEwY2E4OVwiXSxcblwiX193YmdfX193YmluZGdlbl9pc19iaWdpbnRfMGUxYTJlM2Y1NWNmYWUyN1wiOiBfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX19fd2JpbmRnZW5faXNfYmlnaW50XzBlMWEyZTNmNTVjZmFlMjdcIl0sXG5cIl9fd2JnX19fd2JpbmRnZW5faXNfb2JqZWN0X2NlNzc0ZjM0OTA2OTIzODZcIjogX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19fX3diaW5kZ2VuX2lzX29iamVjdF9jZTc3NGYzNDkwNjkyMzg2XCJdLFxuXCJfX3diZ19fX3diaW5kZ2VuX2lzX3N0cmluZ183MDRlZjljOGZjMTMxMDMwXCI6IF9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfX193YmluZGdlbl9pc19zdHJpbmdfNzA0ZWY5YzhmYzEzMTAzMFwiXSxcblwiX193YmdfX193YmluZGdlbl9zdHJpbmdfZ2V0X2EyYTMxZTE2ZWRmOTZlNDJcIjogX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19fX3diaW5kZ2VuX3N0cmluZ19nZXRfYTJhMzFlMTZlZGY5NmU0MlwiXSxcblwiX193YmdfX193YmluZGdlbl9ib29sZWFuX2dldF9kZWEyNWIzMzg4MmI4OTViXCI6IF9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfX193YmluZGdlbl9ib29sZWFuX2dldF9kZWEyNWIzMzg4MmI4OTViXCJdLFxuXCJfX3diZ19fX3diaW5kZ2VuX2lzX2Z1bmN0aW9uXzhkNDAwYjhiMWFmOTc4Y2RcIjogX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19fX3diaW5kZ2VuX2lzX2Z1bmN0aW9uXzhkNDAwYjhiMWFmOTc4Y2RcIl0sXG5cIl9fd2JnX19fd2JpbmRnZW5fanN2YWxfbG9vc2VfZXFfNzY2MDU3NjAwZmRkMWIwZFwiOiBfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX19fd2JpbmRnZW5fanN2YWxfbG9vc2VfZXFfNzY2MDU3NjAwZmRkMWIwZFwiXSxcblwiX193YmdfX193YmluZGdlbl9iaWdpbnRfZ2V0X2FzX2k2NF82ZTMyZjVlNmFmZjAyZTFkXCI6IF9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfX193YmluZGdlbl9iaWdpbnRfZ2V0X2FzX2k2NF82ZTMyZjVlNmFmZjAyZTFkXCJdLFxuXCJfX3diZ19fX3diaW5kZ2VuX2RlYnVnX3N0cmluZ19hZGZiNjYyYWUzNDcyNGI2XCI6IF9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfX193YmluZGdlbl9kZWJ1Z19zdHJpbmdfYWRmYjY2MmFlMzQ3MjRiNlwiXSxcblwiX193YmluZGdlbl9pbml0X2V4dGVybnJlZl90YWJsZVwiOiBfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JpbmRnZW5faW5pdF9leHRlcm5yZWZfdGFibGVcIl0sXG5cIl9fd2JpbmRnZW5fY2FzdF9kNmNkMTliODE1NjBmZDZlXCI6IF9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmluZGdlbl9jYXN0X2Q2Y2QxOWI4MTU2MGZkNmVcIl0sXG5cIl9fd2JpbmRnZW5fY2FzdF8yMjQxYjZhZjRjNGIyOTQxXCI6IF9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmluZGdlbl9jYXN0XzIyNDFiNmFmNGM0YjI5NDFcIl0sXG5cIl9fd2JpbmRnZW5fY2FzdF85YWUwNjA3NTA3YWJiMDU3XCI6IF9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmluZGdlbl9jYXN0XzlhZTA2MDc1MDdhYmIwNTdcIl0sXG5cIl9fd2JpbmRnZW5fY2FzdF80NjI1YzU3N2FiMmVjOWVlXCI6IF9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmluZGdlbl9jYXN0XzQ2MjVjNTc3YWIyZWM5ZWVcIl0gfSB9LCBfX3ZpdGVfX3dhc21VcmwpO1xuZXhwb3J0IGNvbnN0IG1lbW9yeSA9IF9fdml0ZV9fd2FzbU1vZHVsZS5tZW1vcnk7XG5leHBvcnQgY29uc3QgY3VycmVudFZlcnNpb24gPSBfX3ZpdGVfX3dhc21Nb2R1bGUuY3VycmVudFZlcnNpb247XG5leHBvcnQgY29uc3QgbWlncmF0ZURvY3VtZW50ID0gX192aXRlX193YXNtTW9kdWxlLm1pZ3JhdGVEb2N1bWVudDtcbmV4cG9ydCBjb25zdCBzZXJpYWxpemVBdXRvbWVyZ2VEb2N1bWVudCA9IF9fdml0ZV9fd2FzbU1vZHVsZS5zZXJpYWxpemVBdXRvbWVyZ2VEb2N1bWVudDtcbmV4cG9ydCBjb25zdCBfX3diaW5kZ2VuX21hbGxvYyA9IF9fdml0ZV9fd2FzbU1vZHVsZS5fX3diaW5kZ2VuX21hbGxvYztcbmV4cG9ydCBjb25zdCBfX3diaW5kZ2VuX3JlYWxsb2MgPSBfX3ZpdGVfX3dhc21Nb2R1bGUuX193YmluZGdlbl9yZWFsbG9jO1xuZXhwb3J0IGNvbnN0IF9fd2JpbmRnZW5fZXhuX3N0b3JlID0gX192aXRlX193YXNtTW9kdWxlLl9fd2JpbmRnZW5fZXhuX3N0b3JlO1xuZXhwb3J0IGNvbnN0IF9fZXh0ZXJucmVmX3RhYmxlX2FsbG9jID0gX192aXRlX193YXNtTW9kdWxlLl9fZXh0ZXJucmVmX3RhYmxlX2FsbG9jO1xuZXhwb3J0IGNvbnN0IF9fd2JpbmRnZW5fZXh0ZXJucmVmcyA9IF9fdml0ZV9fd2FzbU1vZHVsZS5fX3diaW5kZ2VuX2V4dGVybnJlZnM7XG5leHBvcnQgY29uc3QgX193YmluZGdlbl9mcmVlID0gX192aXRlX193YXNtTW9kdWxlLl9fd2JpbmRnZW5fZnJlZTtcbmV4cG9ydCBjb25zdCBfX2V4dGVybnJlZl90YWJsZV9kZWFsbG9jID0gX192aXRlX193YXNtTW9kdWxlLl9fZXh0ZXJucmVmX3RhYmxlX2RlYWxsb2M7XG5leHBvcnQgY29uc3QgX193YmluZGdlbl9zdGFydCA9IF9fdml0ZV9fd2FzbU1vZHVsZS5fX3diaW5kZ2VuX3N0YXJ0O1xuIiwiaW1wb3J0ICogYXMgd2FzbSBmcm9tIFwiLi9jYXRjb2xhYl9kb2N1bWVudF90eXBlc19iZy53YXNtXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9jYXRjb2xhYl9kb2N1bWVudF90eXBlc19iZy5qc1wiO1xuaW1wb3J0IHsgX193Ymdfc2V0X3dhc20gfSBmcm9tIFwiLi9jYXRjb2xhYl9kb2N1bWVudF90eXBlc19iZy5qc1wiO1xuX193Ymdfc2V0X3dhc20od2FzbSk7XG53YXNtLl9fd2JpbmRnZW5fc3RhcnQoKTtcbiIsInZhciBpc1Byb2R1Y3Rpb24gPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nO1xudmFyIHByZWZpeCA9ICdJbnZhcmlhbnQgZmFpbGVkJztcbmZ1bmN0aW9uIGludmFyaWFudChjb25kaXRpb24sIG1lc3NhZ2UpIHtcbiAgICBpZiAoY29uZGl0aW9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGlzUHJvZHVjdGlvbikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IocHJlZml4KTtcbiAgICB9XG4gICAgdmFyIHByb3ZpZGVkID0gdHlwZW9mIG1lc3NhZ2UgPT09ICdmdW5jdGlvbicgPyBtZXNzYWdlKCkgOiBtZXNzYWdlO1xuICAgIHZhciB2YWx1ZSA9IHByb3ZpZGVkID8gXCJcIi5jb25jYXQocHJlZml4LCBcIjogXCIpLmNvbmNhdChwcm92aWRlZCkgOiBwcmVmaXg7XG4gICAgdGhyb3cgbmV3IEVycm9yKHZhbHVlKTtcbn1cblxuZXhwb3J0IHsgaW52YXJpYW50IGFzIGRlZmF1bHQgfTtcbiIsImltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCI7XG5pbXBvcnQgeyB2NyB9IGZyb20gXCJ1dWlkXCI7XG5cbmltcG9ydCB0eXBlIHsgQ2VsbCwgTm90ZWJvb2sgfSBmcm9tIFwiY2F0Y29sYWItZG9jdW1lbnQtdHlwZXNcIjtcblxuLyoqIEEgY2VsbCBjb250YWluaW5nIGN1c3RvbSBkYXRhLCB1c3VhbGx5IGEgZm9ybWFsIG9iamVjdC4gKi9cbmV4cG9ydCB0eXBlIEZvcm1hbENlbGw8VD4gPSBDZWxsPFQ+ICYgeyB0YWc6IFwiZm9ybWFsXCIgfTtcblxuLyoqIEEgY2VsbCBjb250YWluaW5nIHJpY2ggdGV4dC4gKi9cbmV4cG9ydCB0eXBlIFJpY2hUZXh0Q2VsbCA9IENlbGw8dW5rbm93bj4gJiB7IHRhZzogXCJyaWNoLXRleHRcIiB9O1xuXG4vKiogQ3JlYXRlcyBhbiBlbXB0eSBub3RlYm9vay4gKi9cbmV4cG9ydCBjb25zdCBuZXdOb3RlYm9vayA9IDxUPigpOiBOb3RlYm9vazxUPiA9PiAoe1xuICAgIGNlbGxPcmRlcjogW10sXG4gICAgY2VsbENvbnRlbnRzOiB7fSxcbn0pO1xuXG4vKiogQ3JlYXRlcyBhIHJpY2ggdGV4dCBjZWxsIHdpdGggdGhlIGdpdmVuIGNvbnRlbnQuICovXG5leHBvcnQgY29uc3QgbmV3UmljaFRleHRDZWxsID0gKGNvbnRlbnQ/OiBzdHJpbmcpOiBSaWNoVGV4dENlbGwgPT4gKHtcbiAgICB0YWc6IFwicmljaC10ZXh0XCIsXG4gICAgaWQ6IHY3KCksXG4gICAgY29udGVudDogY29udGVudCA/PyBcIlwiLFxufSk7XG5cbi8qKiBDcmVhdGVzIGEgZm9ybWFsIGNlbGwgd2l0aCB0aGUgZ2l2ZW4gY29udGVudC4gKi9cbmV4cG9ydCBjb25zdCBuZXdGb3JtYWxDZWxsID0gPFQ+KGNvbnRlbnQ6IFQpOiBGb3JtYWxDZWxsPFQ+ID0+ICh7XG4gICAgdGFnOiBcImZvcm1hbFwiLFxuICAgIGlkOiB2NygpLFxuICAgIGNvbnRlbnQ6IGNvbnRlbnQsXG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldENlbGxzPFQ+KG5vdGVib29rOiBOb3RlYm9vazxUPik6IEFycmF5PENlbGw8VD4+IHtcbiAgICByZXR1cm4gbm90ZWJvb2suY2VsbE9yZGVyLm1hcCgoY2VsbElkKSA9PiBnZXRDZWxsQnlJZChub3RlYm9vaywgY2VsbElkKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGb3JtYWxDZWxsczxUPihub3RlYm9vazogTm90ZWJvb2s8VD4pOiBBcnJheTxDZWxsPFQ+ICYgeyB0YWc6IFwiZm9ybWFsXCIgfT4ge1xuICAgIHJldHVybiBnZXRDZWxscyhub3RlYm9vaykuZmlsdGVyKChjZWxsKSA9PiBjZWxsLnRhZyA9PT0gXCJmb3JtYWxcIik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRGb3JtYWxDb250ZW50PFQ+KG5vdGVib29rOiBOb3RlYm9vazxUPik6IEFycmF5PFQ+IHtcbiAgICByZXR1cm4gZ2V0Rm9ybWFsQ2VsbHMobm90ZWJvb2spLm1hcCgoY2VsbCkgPT4gY2VsbC5jb250ZW50KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENlbGxCeUlkPFQ+KG5vdGVib29rOiBOb3RlYm9vazxUPiwgY2VsbElkOiBzdHJpbmcpOiBDZWxsPFQ+IHtcbiAgICBjb25zdCBjZWxsID0gbm90ZWJvb2suY2VsbENvbnRlbnRzW2NlbGxJZF07XG4gICAgaW52YXJpYW50KGNlbGwsICgpID0+IGBGYWlsZWQgdG8gZmluZCBub3RlYm9vayBjZWxsIGNvbnRlbnRzIGZvciBjZWxsICcke2NlbGxJZH0nYCk7XG4gICAgcmV0dXJuIGNlbGw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDZWxsSWRCeUluZGV4PFQ+KG5vdGVib29rOiBOb3RlYm9vazxUPiwgaW5kZXg6IG51bWJlcik6IHN0cmluZyB7XG4gICAgY29uc3QgY2VsbElkID0gbm90ZWJvb2suY2VsbE9yZGVyW2luZGV4XTtcbiAgICBpbnZhcmlhbnQoY2VsbElkLCAoKSA9PiBgRmFpbGVkIHRvIGZpbmQgbm90ZWJvb2sgY2VsbCBpZCBhdCBpbmRleCAnJHtpbmRleH0nYCk7XG4gICAgcmV0dXJuIGNlbGxJZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldENlbGxCeUluZGV4PFQ+KG5vdGVib29rOiBOb3RlYm9vazxUPiwgaW5kZXg6IG51bWJlcik6IENlbGw8VD4ge1xuICAgIGNvbnN0IGNlbGxJZCA9IGdldENlbGxJZEJ5SW5kZXgobm90ZWJvb2ssIGluZGV4KTtcbiAgICByZXR1cm4gZ2V0Q2VsbEJ5SWQobm90ZWJvb2ssIGNlbGxJZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0cnlHZXRDZWxsQnlJbmRleDxUPihub3RlYm9vazogTm90ZWJvb2s8VD4sIGluZGV4OiBudW1iZXIpOiBDZWxsPFQ+IHwgbnVsbCB7XG4gICAgY29uc3QgY2VsbElkID0gbm90ZWJvb2suY2VsbE9yZGVyW2luZGV4XTtcbiAgICBpZiAoIWNlbGxJZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBjZWxsID0gbm90ZWJvb2suY2VsbENvbnRlbnRzW2NlbGxJZF07XG4gICAgaWYgKCFjZWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiBjZWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kQ2VsbDxUPihub3RlYm9vazogTm90ZWJvb2s8VD4sIGNlbGw6IENlbGw8VD4pIHtcbiAgICBub3RlYm9vay5jZWxsT3JkZXIucHVzaChjZWxsLmlkKTtcbiAgICBub3RlYm9vay5jZWxsQ29udGVudHNbY2VsbC5pZF0gPSBjZWxsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zZXJ0Q2VsbEF0SW5kZXg8VD4obm90ZWJvb2s6IE5vdGVib29rPFQ+LCBjZWxsOiBDZWxsPFQ+LCBpbmRleDogbnVtYmVyKSB7XG4gICAgbm90ZWJvb2suY2VsbE9yZGVyLnNwbGljZShpbmRleCwgMCwgY2VsbC5pZCk7XG4gICAgbm90ZWJvb2suY2VsbENvbnRlbnRzW2NlbGwuaWRdID0gY2VsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUNlbGxBdEluZGV4PFQ+KG5vdGVib29rOiBOb3RlYm9vazxUPiwgaW5kZXg6IG51bWJlcikge1xuICAgIGNvbnN0IGNlbGxJZCA9IGdldENlbGxJZEJ5SW5kZXgobm90ZWJvb2ssIGluZGV4KTtcbiAgICBkZWxldGUgbm90ZWJvb2suY2VsbENvbnRlbnRzW2NlbGxJZF07XG4gICAgbm90ZWJvb2suY2VsbE9yZGVyLnNwbGljZShpbmRleCwgMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb3ZlQ2VsbFVwPFQ+KG5vdGVib29rOiBOb3RlYm9vazxUPiwgaW5kZXg6IG51bWJlcikge1xuICAgIGlmIChpbmRleCA8PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBbY2VsbElkVG9Nb3ZlVXBdID0gbm90ZWJvb2suY2VsbE9yZGVyLnNwbGljZShpbmRleCwgMSk7XG4gICAgaW52YXJpYW50KGNlbGxJZFRvTW92ZVVwLCAoKSA9PiBgRmFpbGVkIHRvIHJlbW92ZSBjZWxsSWQgYXQgaW5kZXggJyR7aW5kZXh9J2ApO1xuICAgIG5vdGVib29rLmNlbGxPcmRlci5zcGxpY2UoaW5kZXggLSAxLCAwLCBjZWxsSWRUb01vdmVVcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb3ZlQ2VsbERvd248VD4obm90ZWJvb2s6IE5vdGVib29rPFQ+LCBpbmRleDogbnVtYmVyKSB7XG4gICAgaWYgKGluZGV4ID49IG5vdGVib29rLmNlbGxPcmRlci5sZW5ndGggLSAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBbY2VsbElkVG9Nb3ZlVXBdID0gbm90ZWJvb2suY2VsbE9yZGVyLnNwbGljZShpbmRleCwgMSk7XG4gICAgaW52YXJpYW50KGNlbGxJZFRvTW92ZVVwLCAoKSA9PiBgRmFpbGVkIHRvIHJlbW92ZSBjZWxsSWQgYXQgaW5kZXggJyR7aW5kZXh9J2ApO1xuICAgIG5vdGVib29rLmNlbGxPcmRlci5zcGxpY2UoaW5kZXggKyAxLCAwLCBjZWxsSWRUb01vdmVVcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtb3ZlQ2VsbEJ5SW5kZXg8VD4obm90ZWJvb2s6IE5vdGVib29rPFQ+LCBmcm9tSW5kZXg6IG51bWJlciwgdG9JbmRleDogbnVtYmVyKSB7XG4gICAgY29uc3QgW2NlbGxJZF0gPSBub3RlYm9vay5jZWxsT3JkZXIuc3BsaWNlKGZyb21JbmRleCwgMSk7XG4gICAgaW52YXJpYW50KGNlbGxJZCwgKCkgPT4gYEZhaWxlZCB0byBtb3ZlIGNlbGwgZnJvbSBpbmRleCAnJHtmcm9tSW5kZXh9J2ApO1xuICAgIG5vdGVib29rLmNlbGxPcmRlci5zcGxpY2UodG9JbmRleCwgMCwgY2VsbElkKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Zvcm1hbENlbGxzPFQ+KG5vdGVib29rOiBOb3RlYm9vazxUPik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBub3RlYm9vay5jZWxsT3JkZXIuc29tZSgoY2VsbElkKSA9PiBub3RlYm9vay5jZWxsQ29udGVudHNbY2VsbElkXT8udGFnID09PSBcImZvcm1hbFwiKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG51bUNlbGxzPFQ+KG5vdGVib29rOiBOb3RlYm9vazxUPik6IG51bWJlciB7XG4gICAgcmV0dXJuIG5vdGVib29rLmNlbGxPcmRlci5sZW5ndGg7XG59XG5cbi8qKiBEdXBsaWNhdGUgYSBjZWxsLCBvcHRpb25hbGx5IHVzaW5nIGEgY2FsbGVyLXN1cHBsaWVkIGNvbnRlbnQgY2xvbmVyLlxuXG5UaGUgZGVmYXVsdCBjbG9uZXIgaXMgYHN0cnVjdHVyZWRDbG9uZWAsIHdoaWNoIHJlcXVpcmVzIGBjZWxsLmNvbnRlbnRgIHRvXG5iZSBhIHBsYWluIEphdmFTY3JpcHQgdmFsdWUgKG5vIHByb3hpZXMpLiBDYWxsZXJzIHdvcmtpbmcgd2l0aCBBdXRvbWVyZ2Vcbm9yIFNvbGlkIHN0b3JlIHByb3hpZXMgc2hvdWxkIG1hdGVyaWFsaXplIHRoZSBjZWxsIHRvIHBsYWluIEpTIGJlZm9yZVxuY2FsbGluZyB0aGlzIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZHVwbGljYXRlQ2VsbDxUPihjZWxsOiBDZWxsPFQ+LCBkdXBsaWNhdGVGbj86IChjZWxsQ29udGVudDogVCkgPT4gVCk6IENlbGw8VD4ge1xuICAgIHN3aXRjaCAoY2VsbC50YWcpIHtcbiAgICAgICAgY2FzZSBcImZvcm1hbFwiOiB7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gZHVwbGljYXRlRm4gPyBkdXBsaWNhdGVGbihjZWxsLmNvbnRlbnQpIDogc3RydWN0dXJlZENsb25lKGNlbGwuY29udGVudCk7XG4gICAgICAgICAgICByZXR1cm4gbmV3Rm9ybWFsQ2VsbChjb250ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwicmljaC10ZXh0XCI6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSaWNoIHRleHQgY2VsbHMgbWF5IG5vdCBiZSBkdXBsaWNhdGVkXCIpO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYWxsIGhhcyB1bmtub3duIHRhZzogJHtjZWxsfWApO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG11dGF0ZUNlbGxDb250ZW50QnlJZDxUPihcbiAgICBub3RlYm9vazogTm90ZWJvb2s8VD4sXG4gICAgY2VsbElkOiBzdHJpbmcsXG4gICAgbXV0YXRvcjogKGNlbGxDb250ZW50OiBUKSA9PiB2b2lkLFxuKSB7XG4gICAgY29uc3QgY2VsbCA9IGdldENlbGxCeUlkKG5vdGVib29rLCBjZWxsSWQpO1xuICAgIGludmFyaWFudChcbiAgICAgICAgY2VsbC50YWcgPT09IFwiZm9ybWFsXCIsXG4gICAgICAgICgpID0+IGBPbmx5IGZvcm1hbCBjZWxscyBtYXkgYmUgbXV0YXRlZC4gY2VsbC5pZDogJyR7Y2VsbC5pZH0nLCBjZWxsLnRhZzogJyR7Y2VsbC50YWd9J2AsXG4gICAgKTtcbiAgICBtdXRhdG9yKGNlbGwuY29udGVudCk7XG59XG4iXSwibmFtZXMiOlsid2FzbSIsImN1cnJlbnRWZXJzaW9uIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19nZXRSYW5kb21WYWx1ZXNfM2M5YzBkNTg2ZTU3NWExNlwiXSIsIl9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193Ymdfc2V0XzNmMWQwYjk4NGVkMjcyZWRcIl0iLCJfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX1N0cmluZ184ZjBlYjM5YTRhNGMyZjY2XCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19pdGVyYXRvcl8yN2I3YzhiMzVhYjNlODZiXCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19uZXdfMjVmMjM5Nzc4ZDYxMTJiOVwiXSIsIl9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfZ2V0XzZiN2JkNTJhY2EzZjk2NzFcIl0iLCJfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX3NldF83ZGY0MzNlZWEwM2E1YzE0XCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19pc0FycmF5XzUxZmQ5ZTY0MjJjMGEzOTVcIl0iLCJfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX2xlbmd0aF9kNDUwNDBhNDBjNTcwMzYyXCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19jYWxsX2FiYjRmZjQ2Y2UzOGJlNDBcIl0iLCJfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX25ld19iNTQ2YWUxMjA3MTg4NTBlXCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19zZXRfZWZhYWYxNDViOTM3NzM2OVwiXSIsIl9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfaXNTYWZlSW50ZWdlcl9hZTdkM2YwNTRkNTVmYTE2XCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19uZXh0XzNjZmU1YzBmZTJhNGNjNTNcIl0iLCJfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX2RvbmVfNjJlYTE2YWY0Y2UzNGIyNFwiXSIsIl9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfdmFsdWVfNTdiN2IwMzVlMTE3ZjdlZVwiXSIsIl9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfZW50cmllc184M2M3OTkzODA1NGUwNjVmXCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19uZXdfMWJhMjFjZTMxOWEwNjI5N1wiXSIsIl9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfbGVuZ3RoXzIyYWMyM2VhZWM5ZDgwNTNcIl0iLCJfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX3Byb3RvdHlwZXNldGNhbGxfZGZlOWI3NjZjZGMxZjFmZFwiXSIsIl9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfbmV3XzY0MjFmNjA4NGNjNWJjNWFcIl0iLCJfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX25leHRfMTM4YTE3YmJmMDRlOTI2Y1wiXSIsIl9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfaW5zdGFuY2VvZl9NYXBfMDg0YmU4ZGE3NDM2NDE1OFwiXSIsIl9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfaW5zdGFuY2VvZl9VaW50OEFycmF5X2RhNTRjY2M5ZDNlMDk0MzRcIl0iLCJfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX2luc3RhbmNlb2ZfQXJyYXlCdWZmZXJfZjMzMjBkMjQxOWNkMDM1NVwiXSIsIl9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfZ2V0X2FmOWRhYjdlOTYwM2VhOTNcIl0iLCJfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX19fd2JpbmRnZW5fbnVtYmVyX2dldF85NjE5MTg1YTc0MTk3Zjk1XCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19fX3diaW5kZ2VuX2luXzBkM2UxZThmMGM2NjkzMTdcIl0iLCJfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX19fd2JpbmRnZW5fdGhyb3dfZGQyNDQxN2VkMzZmYzQ2ZVwiXSIsIl9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfX193YmluZGdlbl9qc3ZhbF9lcV9iNjEwMWNjOWNlZjFmZTM2XCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19FcnJvcl81MjY3M2I3ZGU1YTBjYTg5XCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19fX3diaW5kZ2VuX2lzX2JpZ2ludF8wZTFhMmUzZjU1Y2ZhZTI3XCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19fX3diaW5kZ2VuX2lzX29iamVjdF9jZTc3NGYzNDkwNjkyMzg2XCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19fX3diaW5kZ2VuX2lzX3N0cmluZ183MDRlZjljOGZjMTMxMDMwXCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19fX3diaW5kZ2VuX3N0cmluZ19nZXRfYTJhMzFlMTZlZGY5NmU0MlwiXSIsIl9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfX193YmluZGdlbl9ib29sZWFuX2dldF9kZWEyNWIzMzg4MmI4OTViXCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19fX3diaW5kZ2VuX2lzX2Z1bmN0aW9uXzhkNDAwYjhiMWFmOTc4Y2RcIl0iLCJfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JnX19fd2JpbmRnZW5fanN2YWxfbG9vc2VfZXFfNzY2MDU3NjAwZmRkMWIwZFwiXSIsIl9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmdfX193YmluZGdlbl9iaWdpbnRfZ2V0X2FzX2k2NF82ZTMyZjVlNmFmZjAyZTFkXCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diZ19fX3diaW5kZ2VuX2RlYnVnX3N0cmluZ19hZGZiNjYyYWUzNDcyNGI2XCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diaW5kZ2VuX2luaXRfZXh0ZXJucmVmX3RhYmxlXCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diaW5kZ2VuX2Nhc3RfZDZjZDE5YjgxNTYwZmQ2ZVwiXSIsIl9fdml0ZV9fd2FzbUltcG9ydF8wW1wiX193YmluZGdlbl9jYXN0XzIyNDFiNmFmNGM0YjI5NDFcIl0iLCJfX3ZpdGVfX3dhc21JbXBvcnRfMFtcIl9fd2JpbmRnZW5fY2FzdF85YWUwNjA3NTA3YWJiMDU3XCJdIiwiX192aXRlX193YXNtSW1wb3J0XzBbXCJfX3diaW5kZ2VuX2Nhc3RfNDYyNWM1NzdhYjJlYzllZVwiXSIsIndhc20uX193YmluZGdlbl9zdGFydCJdLCJtYXBwaW5ncyI6IkFBQ0EsS0FBTSxDQUFBLFNBQVMsR0FBRyxDQUFFLENBQUEsQ0FBQTtBQUNwQixHQUFLLENBQUEsQ0FBQSxHQUFBLENBQUksQ0FBQyxDQUFBLENBQUEsQ0FBRyxDQUFDLENBQUEsQ0FBRSxDQUFDLENBQUEsQ0FBQSxDQUFHLEdBQUcsQ0FBQSxDQUFFLENBQUUsQ0FBQSxDQUFDLENBQUUsQ0FBQSxDQUFBO0FBQzlCLENBQUEsQ0FBQSxDQUFBLENBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUEsQ0FBRSxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDckQsQ0FBQTtBQUNPLFFBQUEsQ0FBUyxlQUFlLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQSxDQUFBLENBQUcsQ0FBQyxDQUFFLENBQUEsQ0FBQTtBQUNqRCxDQUFJLENBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFBLENBQUEsQ0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUE7QUFDdEMsQ0FBUSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFHLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUE7QUFDbEMsQ0FBUSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFHLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUE7QUFDbEMsQ0FBUSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFHLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUE7QUFDbEMsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLENBQUcsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNYLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBRyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFBO0FBQ2xDLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBRyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFBO0FBQ2xDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxDQUFHLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDWCxDQUFRLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUcsQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQTtBQUNsQyxDQUFRLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUcsQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQTtBQUNsQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsQ0FBRyxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ1gsQ0FBUSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFHLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUE7QUFDbEMsQ0FBUSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFHLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUE7QUFDbEMsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLENBQUcsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNYLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBRyxDQUFBLENBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFBO0FBQ25DLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBRyxDQUFBLENBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFBO0FBQ25DLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBRyxDQUFBLENBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFBO0FBQ25DLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBRyxDQUFBLENBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFBO0FBQ25DLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBRyxDQUFBLENBQUEsRUFBRSxDQUFDLENBQUMsQ0FBQSxDQUFBO0FBQ25DLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxTQUFTLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBRyxDQUFBLENBQUEsRUFBRSxDQUFDLENBQUMsQ0FBRSxDQUFBLFdBQVcsQ0FBRSxDQUFBLENBQUE7QUFDbEQsQ0FBQTs7QUMxQkEsR0FBQSxDQUFJLGVBQWUsQ0FBQTtBQUNuQixLQUFBLENBQU0sS0FBSyxDQUFHLENBQUEsQ0FBQSxHQUFBLENBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0FBQ2pCLFFBQUEsQ0FBUyxHQUFHLENBQUcsQ0FBQSxDQUFBLENBQUE7QUFDOUIsQ0FBSSxDQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBSSxDQUFDLGVBQWUsQ0FBRSxDQUFBLENBQUE7QUFDMUIsQ0FBUSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFJLE1BQU8sQ0FBQSxNQUFNLENBQUssQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLFNBQUEsQ0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBRSxDQUFBLENBQUE7QUFDdEUsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVksS0FBTSxDQUFBLEdBQUEsQ0FBSSxLQUFLLENBQUMsMEdBQTBHLENBQUMsQ0FBQTtBQUN2SSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxlQUFlLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDN0QsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ0EsQ0FBQSxDQUFBLENBQUEsQ0FBSSxNQUFPLENBQUEsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBQ2pDLENBQUE7O0FDUkEsS0FBTSxDQUFBLE1BQU0sR0FBRyxDQUFFLENBQUEsQ0FBQTtBQUNqQixRQUFBLENBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUEsQ0FBRSxNQUFNLENBQUUsQ0FBQSxDQUFBO0FBQ2xDLENBQUEsQ0FBQSxDQUFBLENBQUksSUFBSSxLQUFLLENBQUE7QUFDYixDQUdTLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDVCxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsTUFBTSxHQUFHLENBQUEsQ0FBQSxDQUFHLElBQUksQ0FBQyxHQUFHLENBQUUsQ0FBQSxDQUFBO0FBQzlCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxLQUFNLENBQUEsSUFBSSxDQUFHLENBQUEsQ0FBQSxHQUFHLENBQUUsQ0FBQSxDQUFBO0FBQzFCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxhQUFhLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQSxDQUFFLElBQUksQ0FBQyxDQUFBO0FBQ3hDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxLQUFLLENBQUcsQ0FBQSxDQUFBLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQSxDQUFFLE1BQU0sQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFBLENBQUUsTUFBTSxDQUFDLENBQUE7QUFDcEUsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ0EsQ0FBQSxDQUFBLENBQUEsQ0FBSSxPQUFPLEdBQUcsQ0FBQSxDQUFBLENBQUEsQ0FBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDeEMsQ0FBQTtBQUNPLFFBQUEsQ0FBUyxhQUFhLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQSxDQUFFLElBQUksQ0FBRSxDQUFBLENBQUE7QUFDaEQsQ0FBQSxDQUFBLENBQUEsQ0FBSSxLQUFLLENBQUMsS0FBSyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssQ0FBQyxRQUFRLENBQUE7QUFDN0IsQ0FBQSxDQUFBLENBQUEsQ0FBSSxLQUFLLENBQUMsR0FBRyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssQ0FBQyxDQUFBO0FBQ25CLENBQUEsQ0FBQSxDQUFBLENBQUksSUFBSSxHQUFHLENBQUEsQ0FBQSxDQUFHLEtBQUssQ0FBQyxLQUFLLENBQUUsQ0FBQSxDQUFBO0FBQzNCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxLQUFLLENBQUMsR0FBRyxDQUFBLENBQUEsQ0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxFQUFFLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUEsQ0FBQSxDQUFBLENBQUksRUFBRSxDQUFDLENBQUksQ0FBQSxDQUFBLENBQUEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFJLENBQUEsQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFBLENBQUEsQ0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDaEYsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLEtBQUssQ0FBQyxLQUFLLENBQUEsQ0FBQSxDQUFHLEdBQUcsQ0FBQTtBQUN6QixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQSxDQUFTLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBO0FBQ1QsQ0FBUSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUssQ0FBQyxHQUFHLENBQUcsQ0FBQSxDQUFBLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQSxDQUFBLENBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFJLENBQUMsQ0FBQTtBQUN2QyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsSUFBSSxLQUFLLENBQUMsR0FBRyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssQ0FBQyxDQUFFLENBQUEsQ0FBQTtBQUM3QixDQUFZLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxLQUFLLENBQUMsS0FBSyxDQUFFLENBQUEsQ0FBQTtBQUN6QixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLENBQUEsQ0FBQSxDQUFBLENBQUksT0FBTyxLQUFLLENBQUE7QUFDaEIsQ0FBQTtBQUNBLFFBQUEsQ0FBUyxPQUFPLENBQUMsSUFBSSxDQUFBLENBQUUsS0FBSyxDQUFBLENBQUUsR0FBRyxDQUFBLENBQUUsR0FBRyxDQUFBLENBQUUsTUFBTSxDQUFBLENBQUEsQ0FBRyxDQUFDLENBQUUsQ0FBQSxDQUFBO0FBQ3BELENBQUEsQ0FBQSxDQUFBLENBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFBLENBQUEsQ0FBRyxFQUFFLENBQUUsQ0FBQSxDQUFBO0FBQzFCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxLQUFNLENBQUEsR0FBQSxDQUFJLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFBO0FBQzVELENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLENBQUksQ0FBQSxDQUFBLENBQUEsRUFBQSxDQUFBLENBQUksQ0FBQyxHQUFHLENBQUUsQ0FBQSxDQUFBO0FBQ2QsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLEdBQUcsQ0FBRyxDQUFBLENBQUEsR0FBQSxDQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUNoQyxDQUFRLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsTUFBTSxHQUFHLENBQUMsQ0FBQTtBQUNsQixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQSxDQUFTLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBO0FBQ1QsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLEVBQUksQ0FBQSxDQUFBLE1BQU0sQ0FBRyxDQUFBLENBQUEsQ0FBQyxDQUFJLENBQUEsQ0FBQSxDQUFBLE1BQU0sQ0FBRyxDQUFBLENBQUEsRUFBRSxDQUFHLENBQUEsQ0FBQSxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUEsQ0FBQTtBQUNwRCxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBWSxNQUFNLEdBQUksQ0FBQSxVQUFVLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBRSxDQUFBLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFBLENBQUEsQ0FBRyxFQUFFLENBQUMsQ0FBQSxFQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxNQUFBLENBQUEsTUFBd0IsQ0FBQyxDQUFDLENBQUE7QUFDcEcsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQSxDQUFBLENBQUEsQ0FBQSxDQUFJLEtBQUssQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFLLElBQUksQ0FBQyxHQUFHLENBQUUsQ0FBQSxDQUFBO0FBQ3hCLENBQUEsQ0FBQSxDQUFBLENBQUksR0FBRyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFBLENBQUcsSUFBSSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssRUFBRSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFJLEVBQUUsQ0FBQyxDQUFJLENBQUEsQ0FBQSxDQUFBLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBSSxDQUFBLENBQUEsQ0FBQSxDQUFDLENBQUMsQ0FBQSxDQUFBLENBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ2pGLENBQUksQ0FBQSxDQUFBLENBQUEsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFBLENBQUMsQ0FBRyxDQUFBLENBQUEsQ0FBQyxLQUFLLENBQUEsQ0FBQSxDQUFHLGFBQWEsQ0FBQSxDQUFBLENBQUEsQ0FBSSxJQUFJLENBQUE7QUFDbEQsQ0FBSSxDQUFBLENBQUEsQ0FBQSxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUEsQ0FBQyxDQUFHLENBQUEsQ0FBQSxDQUFDLEtBQUssQ0FBQSxDQUFBLENBQUcsV0FBVyxDQUFBLENBQUEsQ0FBQSxDQUFJLElBQUksQ0FBQTtBQUNoRCxDQUFJLENBQUEsQ0FBQSxDQUFBLEdBQUcsQ0FBQyxNQUFNLENBQUUsQ0FBQSxDQUFDLENBQUcsQ0FBQSxDQUFBLENBQUMsS0FBSyxDQUFBLENBQUEsQ0FBRyxTQUFTLENBQUEsQ0FBQSxDQUFBLENBQUksSUFBSSxDQUFBO0FBQzlDLENBQUksQ0FBQSxDQUFBLENBQUEsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFBLENBQUMsQ0FBRyxDQUFBLENBQUEsQ0FBQyxLQUFLLENBQUEsQ0FBQSxDQUFHLE9BQU8sQ0FBQSxDQUFBLENBQUEsQ0FBSSxJQUFJLENBQUE7QUFDNUMsQ0FBSSxDQUFBLENBQUEsQ0FBQSxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUEsQ0FBQyxDQUFHLENBQUEsQ0FBQSxDQUFDLEtBQUssQ0FBQSxDQUFBLENBQUcsS0FBSyxDQUFBLENBQUEsQ0FBQSxDQUFJLElBQUksQ0FBQTtBQUMxQyxDQUFJLENBQUEsQ0FBQSxDQUFBLEdBQUcsQ0FBQyxNQUFNLENBQUEsQ0FBRSxDQUFDLENBQUcsQ0FBQSxDQUFBLEtBQUssR0FBRyxJQUFJLENBQUE7QUFDaEMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxHQUFHLENBQUMsTUFBTSxDQUFBLENBQUUsQ0FBQyxDQUFHLENBQUEsQ0FBQSxJQUFJLENBQUksQ0FBQSxDQUFBLENBQUEsQ0FBQyxHQUFHLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBSyxFQUFFLENBQUEsQ0FBQSxDQUFBLENBQUksSUFBSSxDQUFDLENBQUE7QUFDaEQsQ0FBSSxDQUFBLENBQUEsQ0FBQSxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUEsQ0FBQyxDQUFHLENBQUEsQ0FBQSxDQUFDLEdBQUcsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFLLEVBQUUsQ0FBQSxDQUFBLENBQUEsQ0FBSSxJQUFJLENBQUE7QUFDdkMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxHQUFHLENBQUMsTUFBTSxDQUFBLENBQUUsQ0FBQyxDQUFHLENBQUEsQ0FBQSxJQUFJLENBQUksQ0FBQSxDQUFBLENBQUEsQ0FBQyxHQUFHLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBSyxFQUFFLENBQUEsQ0FBQSxDQUFBLENBQUksSUFBSSxDQUFDLENBQUE7QUFDaEQsQ0FBSSxDQUFBLENBQUEsQ0FBQSxHQUFHLENBQUMsTUFBTSxDQUFFLENBQUEsQ0FBQyxDQUFHLENBQUEsQ0FBQSxDQUFDLEdBQUcsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFLLENBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxJQUFJLENBQUE7QUFDdEMsQ0FBSSxDQUFBLENBQUEsQ0FBQSxHQUFHLENBQUMsTUFBTSxDQUFBLENBQUUsQ0FBQyxDQUFHLENBQUEsQ0FBQSxDQUFDLENBQUMsR0FBRyxDQUFBLENBQUEsQ0FBQSxDQUFJLENBQUMsQ0FBSSxDQUFBLENBQUEsQ0FBQSxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBLENBQUEsQ0FBRyxJQUFJLENBQUMsQ0FBQTtBQUMzRCxDQUFJLENBQUEsQ0FBQSxDQUFBLEdBQUcsQ0FBQyxNQUFNLENBQUEsQ0FBRSxDQUFDLENBQUcsQ0FBQSxDQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUM1QixDQUFJLENBQUEsQ0FBQSxDQUFBLEdBQUcsQ0FBQyxNQUFNLENBQUEsQ0FBRSxDQUFDLENBQUcsQ0FBQSxDQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUM1QixDQUFJLENBQUEsQ0FBQSxDQUFBLEdBQUcsQ0FBQyxNQUFNLENBQUEsQ0FBRSxDQUFDLENBQUcsQ0FBQSxDQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUM1QixDQUFJLENBQUEsQ0FBQSxDQUFBLEdBQUcsQ0FBQyxNQUFNLENBQUEsQ0FBRSxDQUFDLENBQUcsQ0FBQSxDQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUM1QixDQUFJLENBQUEsQ0FBQSxDQUFBLEdBQUcsQ0FBQyxNQUFNLENBQUEsQ0FBRSxDQUFDLENBQUcsQ0FBQSxDQUFBLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQTtBQUM1QixDQUFBLENBQUEsQ0FBQSxDQUFJLE9BQU8sR0FBRyxDQUFBO0FBQ2QsQ0FBQTs7QUMvREEsS0FBZSxDQUFBLGVBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxvRUFBQSxDQUFBLENBQUE7O0FDQWYsS0FBQSxDQUFBLGdCQUFBLENBQUEsQ0FBQSxDQUFlLE9BQU8sSUFBSSxDQUFBLENBQUEsQ0FBRyxDQUFFLENBQUEsQ0FBQSxDQUFFLEdBQUcsQ0FBSyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDekMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxJQUFJLE1BQU0sQ0FBQTtBQUNkLENBQUEsQ0FBQSxDQUFBLENBQUksSUFBSSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUEsSUFBQSxDQUFBLENBQU8sQ0FBQyxDQUFFLENBQUEsQ0FBQTtBQUNqQyxDQUFRLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxDQUFNLFVBQVUsQ0FBQSxDQUFBLENBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBQSxDQUFrQixDQUFFLENBQUEsQ0FBQSxDQUFFLENBQUMsQ0FBQTtBQUM5RCxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsSUFBSSxLQUFLLENBQUE7QUFDakIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLEVBQUksQ0FBQSxDQUFBLE1BQUEsQ0FBTyxNQUFNLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBSyxDQUFVLFFBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFJLE1BQU8sQ0FBQSxNQUFNLENBQUMsSUFBSSxDQUFLLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxRQUFBLENBQVUsQ0FBRSxDQUFBLENBQUE7QUFDL0UsQ0FBWSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFFLENBQUEsQ0FBQSxNQUFBLENBQVEsQ0FBQyxDQUFBO0FBQ3JELENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ0EsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBYSxFQUFJLENBQUEsQ0FBQSxNQUFBLENBQU8sSUFBSSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssVUFBVSxDQUFFLENBQUEsQ0FBQTtBQUM3QyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBWSxNQUFNLFlBQVksQ0FBQSxDQUFBLENBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0FBQ2pELENBQVksQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUssR0FBRyxHQUFJLENBQUEsVUFBVSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUN2RCxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBWSxHQUFLLENBQUEsQ0FBQSxHQUFBLENBQUksQ0FBQyxDQUFBLENBQUEsQ0FBRyxDQUFDLENBQUUsQ0FBQSxDQUFDLENBQUcsQ0FBQSxDQUFBLFlBQVksQ0FBQyxNQUFNLENBQUUsQ0FBQSxDQUFDLEVBQUUsQ0FBRSxDQUFBLENBQUE7QUFDMUQsQ0FBZ0IsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBLENBQUEsQ0FBRyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ3JELENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLENBQWEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsQ0FBQTtBQUNiLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFZLEtBQU0sQ0FBQSxHQUFBLENBQUksS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUE7QUFDcEUsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQSxDQUFRLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsTUFBTSxDQUFHLENBQUEsQ0FBQSxLQUFBLENBQU0sV0FBVyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUUsQ0FBQSxJQUFJLENBQUMsQ0FBQTtBQUMzRCxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQSxDQUFTLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxDQUFBO0FBQ1QsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLENBQUEsTUFBQSxDQUFBLEdBQUEsQ0FBQSxHQUFBLENBQUEsV0FBQSxDQUFBLFFBQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQTtBQUNBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxXQUFBLENBQUEsb0JBQUEsQ0FBQSxRQUFBLENBQUEsR0FBQSxDQUFBLE1BQUEsQ0FBQSxFQUFBLENBQUEsT0FBQSxDQUFBLEdBQUE7QUFDQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsT0FBQSxDQUFBLElBQUEsQ0FBQSxJQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsSUFBQSxDQUFBLEtBQUEsQ0FBQSxDQUFBLEtBQUEsQ0FBQSxhQUFBLENBQUEsS0FBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsR0FBQTtBQUNBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBLEVBQUEsQ0FBQSxNQUFBLENBQUEsSUFBQSxDQUFBLE9BQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxFQUFBLENBQUEsSUFBQSxDQUFBLElBQUEsQ0FBQSxNQUFBLENBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQSxPQUFBLENBQUEsR0FBQTtBQUNBLENBQUEsQ0FBQSxD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Q0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsU0FBQSxDQUFBLEtBQUE7QUFDQSxDQUFBLENBQUEsQ0FBQSxDQUFJLEtBQU0sQ0FBQSxJQUFJLENBQUcsQ0FBQSxDQUFBLE1BQUEsQ0FBTyxHQUFHLENBQUE7QUFDM0IsQ0FBQSxDQUFBLENBQUEsQ0FBSSxFQUFJLENBQUEsQ0FBQSxJQUFJLENBQUksQ0FBQSxDQUFBLENBQUEsQ0FBQSxNQUFBLENBQVEsQ0FBSSxDQUFBLENBQUEsQ0FBQSxJQUFJLENBQUksQ0FBQSxDQUFBLENBQUEsQ0FBQSxPQUFBLENBQVMsQ0FBSSxDQUFBLENBQUEsQ0FBQSxHQUFHLENBQUksQ0FBQSxDQUFBLENBQUEsSUFBSSxDQUFFLENBQUEsQ0FBQTtBQUM5RCxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsTUFBUSxDQUFBLENBQUEsQ0FBQyxDQUFFLENBQUEsR0FBRyxDQUFDLENBQUMsQ0FBQTtBQUN4QixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQSxDQUFBLENBQUEsQ0FBQSxDQUFJLEVBQUksQ0FBQSxDQUFBLElBQUksQ0FBSSxDQUFBLENBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBUSxDQUFFLENBQUEsQ0FBQTtBQUMxQixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsT0FBTyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUE7QUFDekIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ0EsQ0FBQSxDQUFBLENBQUEsQ0FBSSxFQUFJLENBQUEsQ0FBQSxJQUFJLENBQUksQ0FBQSxDQUFBLENBQUEsQ0FBQSxNQUFBLENBQVEsQ0FBRSxDQUFBLENBQUE7QUFDMUIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLEtBQU0sQ0FBQSxXQUFXLENBQUcsQ0FBQSxDQUFBLEdBQUcsQ0FBQyxXQUFXLENBQUE7QUFDM0MsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLEVBQUksQ0FBQSxDQUFBLFdBQVcsQ0FBSSxDQUFBLENBQUEsQ0FBQSxJQUFJLENBQUUsQ0FBQSxDQUFBO0FBQ2pDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFZLE9BQU8sQ0FBUSxNQUFBLENBQUEsQ0FBQTtBQUMzQixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUyxDQUFNLElBQUEsQ0FBQSxDQUFBO0FBQ2YsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVksT0FBTyxDQUFDLE1BQUEsQ0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUMzQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLENBQUEsQ0FBQSxDQUFBLENBQUksRUFBSSxDQUFBLENBQUEsSUFBSSxDQUFJLENBQUEsQ0FBQSxDQUFBLENBQUEsUUFBQSxDQUFVLENBQUUsQ0FBQSxDQUFBO0FBQzVCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxLQUFNLENBQUEsSUFBSSxDQUFHLENBQUEsQ0FBQSxHQUFHLENBQUMsSUFBSSxDQUFBO0FBQzdCLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBSSxNQUFPLENBQUEsSUFBSSxDQUFJLENBQUEsQ0FBQSxDQUFBLENBQUEsTUFBQSxDQUFRLENBQUksQ0FBQSxDQUFBLENBQUEsSUFBSSxDQUFDLE1BQU0sQ0FBRyxDQUFBLENBQUEsQ0FBQyxDQUFFLENBQUEsQ0FBQTtBQUN4RCxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBWSxPQUFPLENBQUMsUUFBQSxDQUFTLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ3RDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFTLENBQU0sSUFBQSxDQUFBLENBQUE7QUFDZixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBWSxPQUFPLENBQVUsUUFBQSxDQUFBLENBQUE7QUFDN0IsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLE9BQUE7QUFDQSxDQUFBLENBQUEsQ0FBQSxDQUFJLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBRSxDQUFBLENBQUE7QUFDNUIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLEtBQU0sQ0FBQSxNQUFNLENBQUcsQ0FBQSxDQUFBLEdBQUcsQ0FBQyxNQUFNLENBQUE7QUFDakMsQ0FBUSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBSSxLQUFLLENBQUEsQ0FBQSxDQUFHLENBQUcsQ0FBQSxDQUFBLENBQUE7QUFDdkIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLEVBQUksQ0FBQSxDQUFBLE1BQU0sQ0FBRyxDQUFBLENBQUEsQ0FBQyxDQUFFLENBQUEsQ0FBQTtBQUN4QixDQUFZLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxLQUFLLElBQUksV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ3hDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ0EsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLEdBQUksQ0FBQSxHQUFBLENBQUksQ0FBQyxDQUFBLENBQUEsQ0FBRyxDQUFDLENBQUEsQ0FBRSxDQUFDLENBQUEsQ0FBQSxDQUFHLE1BQU0sQ0FBQSxDQUFFLENBQUMsQ0FBQSxDQUFFLENBQUUsQ0FBQSxDQUFBO0FBQ3hDLENBQVksQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLEtBQUssQ0FBSSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFJLENBQUcsQ0FBQSxDQUFBLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUMvQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxLQUFLLElBQUksQ0FBRyxDQUFBLENBQUEsQ0FBQTtBQUNwQixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsT0FBTyxLQUFLLENBQUE7QUFDcEIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ0EsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsR0FBQSxDQUFBLEtBQUEsQ0FBQSxFQUFBO0FBQ0EsQ0FBQSxDQUFBLENBQUEsQ0FBSSxLQUFNLENBQUEsY0FBYyxDQUFHLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFxQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFDekUsQ0FBQSxDQUFBLENBQUEsQ0FBSSxJQUFJLFNBQVMsQ0FBQTtBQUNqQixDQUFJLENBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFJLGNBQWMsQ0FBSSxDQUFBLENBQUEsQ0FBQSxjQUFjLENBQUMsTUFBTSxDQUFBLENBQUEsQ0FBRyxDQUFDLENBQUUsQ0FBQSxDQUFBO0FBQ3JELENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxTQUFTLENBQUEsQ0FBQSxDQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUNyQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssQ0FBTSxJQUFBLENBQUEsQ0FBQTtBQUNYLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsRUFBQSxDQUFBLEtBQUEsQ0FBQSxHQUFBLENBQUEsUUFBQSxDQUFBLENBQUEsQ0FBQSxNQUFBLENBQUEsU0FBQSxDQUFBLENBQUE7QUFDQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsT0FBTyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQ2pDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLENBQUEsQ0FBQSxDQUFBLENBQUksRUFBSSxDQUFBLENBQUEsU0FBUyxDQUFJLENBQUEsQ0FBQSxDQUFBLENBQUEsTUFBQSxDQUFRLENBQUUsQ0FBQSxDQUFBO0FBQy9CLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxFQUFBLENBQUEsRUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsT0FBQSxDQUFBLEtBQUEsQ0FBQSxFQUFBLENBQUEsTUFBQTtBQUNBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsU0FBQSxDQUFBLE1BQUEsQ0FBQSxRQUFBLENBQUEsSUFBQSxDQUFBLE1BQUEsQ0FBQSxDQUFBLEdBQUEsQ0FBQSxFQUFBLENBQUEsU0FBQSxDQUFBLElBQUE7QUFDQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsTUFBQSxDQUFBLElBQUEsQ0FBQSxPQUFBLENBQUEsT0FBQSxDQUFBLGFBQUEsQ0FBQSxFQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQTtBQUNBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxHQUFJLENBQUEsQ0FBQTtBQUNaLENBQVksQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBTyxDQUFTLE1BQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQSxDQUFHLENBQUcsQ0FBQSxDQUFBLENBQUE7QUFDeEQsQ0FBUyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQyxLQUFPLENBQUEsQ0FBQSxDQUFDLENBQUUsQ0FBQSxDQUFBO0FBQ3BCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFZLE9BQU8sQ0FBUSxNQUFBLENBQUEsQ0FBQTtBQUMzQixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsTUFBQTtBQUNBLENBQUEsQ0FBQSxDQUFBLENBQUksRUFBSSxDQUFBLENBQUEsR0FBRyxDQUFZLFVBQUEsQ0FBQSxLQUFLLENBQUUsQ0FBQSxDQUFBO0FBQzlCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxPQUFPLENBQUMsQ0FBQSxDQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBRSxDQUFBLENBQUEsQ0FBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUUsQ0FBQSxDQUFBLENBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7QUFDMUQsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ0EsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQUEsRUFBQSxDQUFBLEtBQUEsQ0FBQSxJQUFBLENBQUEsR0FBQSxDQUFBLElBQUEsQ0FBQSxNQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsSUFBQSxDQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxHQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ0EsQ0FBQSxDQUFBLENBQUEsQ0FBSSxPQUFPLFNBQVMsQ0FBQTtBQUNwQixDQUFBOztBQUVBLFFBQUEsQ0FBUyxtQkFBbUIsQ0FBQyxHQUFHLENBQUEsQ0FBRSxHQUFHLENBQUUsQ0FBQSxDQUFBO0FBQ3ZDLENBQUEsQ0FBQSxDQUFBLENBQUksR0FBRyxDQUFBLENBQUEsQ0FBRyxHQUFHLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBSyxDQUFDLENBQUE7QUFDbkIsQ0FBQSxDQUFBLENBQUEsQ0FBSSxNQUFPLENBQUEsb0JBQW9CLENBQUUsQ0FBQSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUcsQ0FBQSxDQUFBLENBQUMsRUFBRSxHQUFHLENBQUEsQ0FBQSxDQUFHLENBQUMsQ0FBQSxDQUFBLENBQUcsR0FBRyxDQUFDLENBQUE7QUFDbEUsQ0FBQTs7QUFFQSxHQUFJLENBQUEscUJBQXFCLEdBQUcsSUFBSSxDQUFBO0FBQ2hDLFFBQUEsQ0FBUyxrQkFBa0IsQ0FBRyxDQUFBLENBQUEsQ0FBQTtBQUM5QixDQUFBLENBQUEsQ0FBQSxDQUFJLEVBQUksQ0FBQSxDQUFBLHFCQUFxQixDQUFLLENBQUEsQ0FBQSxDQUFBLENBQUEsSUFBSSxDQUFJLENBQUEsQ0FBQSxDQUFBLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUssQ0FBQSxDQUFBLENBQUEsQ0FBQSxJQUFJLEtBQUsscUJBQXFCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFLLFNBQVMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxxQkFBcUIsQ0FBQyxNQUFNLENBQUtBLENBQUFBLENBQUFBLENBQUFBLENBQUFBLElBQUFBLENBQUFBLENBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUUsQ0FBQSxDQUFBO0FBQzFNLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxxQkFBcUIsQ0FBRyxDQUFBLENBQUEsR0FBQSxDQUFJLFFBQVEsQ0FBQ0EsTUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUNoRSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQSxDQUFBLENBQUEsQ0FBQSxDQUFJLE9BQU8scUJBQXFCLENBQUE7QUFDaEMsQ0FBQTs7QUFFQSxRQUFBLENBQVMsa0JBQWtCLENBQUMsR0FBRyxDQUFBLENBQUUsR0FBRyxDQUFFLENBQUEsQ0FBQTtBQUN0QyxDQUFBLENBQUEsQ0FBQSxDQUFJLEdBQUcsQ0FBQSxDQUFBLENBQUcsR0FBRyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssQ0FBQyxDQUFBO0FBQ25CLENBQUEsQ0FBQSxDQUFBLENBQUksT0FBTyxVQUFVLENBQUMsR0FBRyxDQUFBLENBQUUsR0FBRyxDQUFDLENBQUE7QUFDL0IsQ0FBQTs7QUFFQSxHQUFJLENBQUEsdUJBQXVCLEdBQUcsSUFBSSxDQUFBO0FBQ2xDLFFBQUEsQ0FBUyxvQkFBb0IsQ0FBRyxDQUFBLENBQUEsQ0FBQTtBQUNoQyxDQUFJLENBQUEsQ0FBQSxDQUFBLEVBQUEsQ0FBQSxDQUFJLHVCQUF1QixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssSUFBSSxDQUFBLENBQUEsQ0FBQSxDQUFJLHVCQUF1QixDQUFDLFVBQVUsQ0FBSyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUMsQ0FBRSxDQUFBLENBQUE7QUFDdEYsQ0FBUSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLHVCQUF1QixDQUFHLENBQUEsQ0FBQSxHQUFBLENBQUksVUFBVSxDQUFDQSxNQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQ3BFLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLENBQUEsQ0FBQSxDQUFBLENBQUksT0FBTyx1QkFBdUIsQ0FBQTtBQUNsQyxDQUFBOztBQUVBLFFBQUEsQ0FBUyxXQUFXLENBQUMsQ0FBQyxDQUFBLENBQUUsSUFBSSxDQUFFLENBQUEsQ0FBQTtBQUM5QixDQUFBLENBQUEsQ0FBQSxDQUFJLEdBQUksQ0FBQSxDQUFBO0FBQ1IsQ0FBUSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLE1BQUEsQ0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQSxDQUFFLElBQUksQ0FBQyxDQUFBO0FBQ2xDLENBQUssQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFDLEtBQU8sQ0FBQSxDQUFBLENBQUMsQ0FBRSxDQUFBLENBQUE7QUFDaEIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLE1BQU0sR0FBRyxDQUFBLENBQUEsQ0FBRyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQTtBQUMzQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVFBLElBQUksQ0FBQSxDQUFBLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUFDLENBQUE7QUFDdEMsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBO0FBQ0EsQ0FBQTs7QUFFQSxRQUFTLENBQUEsVUFBVSxDQUFDLENBQUMsQ0FBRSxDQUFBLENBQUE7QUFDdkIsQ0FBQSxDQUFBLENBQUEsQ0FBSSxPQUFPLENBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFLLFNBQVMsQ0FBSSxDQUFBLENBQUEsQ0FBQSxDQUFDLEtBQUssSUFBSSxDQUFBO0FBQ3hDLENBQUE7O0FBU0EsUUFBQSxDQUFTLGlCQUFpQixDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUEsQ0FBRSxPQUFPLENBQUUsQ0FBQSxDQUFBO0FBQ2pELENBQUEsQ0FBQSxDQUFBLENBQUksRUFBSSxDQUFBLENBQUEsT0FBTyxDQUFLLENBQUEsQ0FBQSxDQUFBLENBQUEsU0FBUyxDQUFFLENBQUEsQ0FBQTtBQUMvQixDQUFRLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxDQUFNLEdBQUcsQ0FBRyxDQUFBLENBQUEsaUJBQWlCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQ2pELENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxLQUFNLENBQUEsR0FBRyxDQUFHLENBQUEsQ0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBRSxDQUFBLENBQUMsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssQ0FBQyxDQUFBO0FBQy9DLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxvQkFBb0IsQ0FBRSxDQUFBLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBRSxDQUFBLEdBQUcsQ0FBRyxDQUFBLENBQUEsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtBQUN2RSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsZUFBZSxDQUFBLENBQUEsQ0FBRyxHQUFHLENBQUMsTUFBTSxDQUFBO0FBQ3BDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxPQUFPLEdBQUcsQ0FBQTtBQUNsQixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7O0FBRUEsQ0FBQSxDQUFBLENBQUEsQ0FBSSxHQUFJLENBQUEsR0FBRyxDQUFHLENBQUEsQ0FBQSxHQUFHLENBQUMsTUFBTSxDQUFBO0FBQ3hCLENBQUksQ0FBQSxDQUFBLENBQUEsR0FBQSxDQUFJLEdBQUcsQ0FBQSxDQUFBLENBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBRSxDQUFBLENBQUMsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssQ0FBQyxDQUFBOztBQUVsQyxDQUFBLENBQUEsQ0FBQSxDQUFJLEtBQU0sQ0FBQSxHQUFHLENBQUcsQ0FBQSxDQUFBLG9CQUFvQixDQUFFLENBQUEsQ0FBQTs7QUFFdEMsQ0FBSSxDQUFBLENBQUEsQ0FBQSxHQUFBLENBQUksTUFBTSxDQUFBLENBQUEsQ0FBRyxDQUFDLENBQUE7O0FBRWxCLENBQUEsQ0FBQSxDQUFBLENBQUksT0FBTyxNQUFNLENBQUEsQ0FBQSxDQUFHLEdBQUcsQ0FBRSxDQUFBLE1BQU0sRUFBRSxDQUFFLENBQUEsQ0FBQTtBQUNuQyxDQUFRLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxDQUFNLElBQUksQ0FBRyxDQUFBLENBQUEsR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUMzQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsRUFBSSxDQUFBLENBQUEsSUFBSSxDQUFHLENBQUEsQ0FBQSxJQUFJLENBQUUsQ0FBQSxLQUFBLENBQUE7QUFDekIsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLEdBQUcsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFBO0FBQ2hDLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLENBQUEsQ0FBQSxDQUFBLENBQUksRUFBSSxDQUFBLENBQUEsTUFBTSxDQUFLLENBQUEsQ0FBQSxDQUFBLENBQUEsR0FBRyxDQUFFLENBQUEsQ0FBQTtBQUN4QixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsRUFBSSxDQUFBLENBQUEsTUFBTSxDQUFLLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQyxDQUFFLENBQUEsQ0FBQTtBQUMxQixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBWSxHQUFHLENBQUcsQ0FBQSxDQUFBLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDbkMsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7QUFDQSxDQUFRLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsR0FBRyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUUsQ0FBQSxHQUFHLEVBQUUsR0FBRyxDQUFBLENBQUEsQ0FBRyxNQUFNLENBQUcsQ0FBQSxDQUFBLEdBQUcsQ0FBQyxNQUFNLENBQUEsQ0FBQSxDQUFHLENBQUMsQ0FBRSxDQUFBLENBQUMsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssQ0FBQyxDQUFBO0FBQ3ZFLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBUSxLQUFNLENBQUEsSUFBSSxDQUFHLENBQUEsQ0FBQSxvQkFBb0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFBLENBQUUsR0FBRyxDQUFBLENBQUEsQ0FBRyxHQUFHLENBQUMsQ0FBQTtBQUM3RSxDQUFRLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsS0FBQSxDQUFNLEdBQUcsQ0FBQSxDQUFBLENBQUcsaUJBQWlCLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBRSxDQUFBLElBQUksQ0FBQyxDQUFBOztBQUUzRCxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsTUFBTSxDQUFBLENBQUEsQ0FBQSxDQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUE7QUFDN0IsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFRLEdBQUcsQ0FBQSxDQUFBLENBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQSxDQUFFLEdBQUcsQ0FBQSxDQUFFLE1BQU0sQ0FBQSxDQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUNoRCxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUE7O0FBRUEsQ0FBSSxDQUFBLENBQUEsQ0FBQSxlQUFlLEdBQUcsTUFBTSxDQUFBO0FBQzVCLENBQUEsQ0FBQSxDQUFBLENBQUksT0FBTyxHQUFHLENBQUE7QUFDZCxDQUFBOztBQVFBLEdBQUEsQ0FBSSxpQkFBaUIsQ0FBRyxDQUFBLENBQUEsR0FBQSxDQUFJLFdBQVcsQ0FBQyxPQUFPLENBQUUsQ0FBQSxDQUFBLENBQUUs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QUFNLENBQUMsQ0FBQSxDQUFBLENBQUcsSUFBSSxDQUFBO0FBQ2xCLENBQUksQ0FBQSxDQUFBLENBQUEsS0FBQSxDQUFNLEdBQUcsQ0FBQSxDQUFBLENBQUcsTUFBTyxDQUFBLENBQUMsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssQ0FBUSxNQUFBLENBQUEsQ0FBQSxDQUFBLENBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBRyxTQUFTLENBQUE7QUFDdEQsQ0FBSSxDQUFBLENBQUEsQ0FBQSxrQkFBa0IsQ0FBRSxDQUFBLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBRyxDQUFBLENBQUEsQ0FBQyxDQUFHLENBQUEsQ0FBQSxDQUFDLENBQUUsQ0FBQSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUcsQ0FBQSxDQUFBLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBRyxDQUFBLENBQUEsR0FBRyxDQUFFLENBQUEsSUFBSSxDQUFDLENBQUE7QUFDM0YsQ0FBQSxDQUFBLENBQUEsQ0FBSSxrQkFBa0IsQ0FBRSxDQUFBLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUEsQ0FBQSxDQUFHLENBQUMsQ0FBQSxDQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUUsSUFBSSxDQUFDLENBQUE7QUFDdkUsQ0FBQTtBQUVPLFFBQVMsQ0FBQSw2Q0FBNkMsQ0FBQyxJQUFJLENBQUUsQ0FBQSxDQUFBO0FBQ3BFLENBQUksQ0FBQSxDQUFBLENBQUEsS0FBQSxDQUFNLENBQUMsQ0FBQSxDQUFBLENBQUcsSUFBSSxDQUFBO0FBQ2xCLENBQUksQ0FBQSxDQUFBLENBQUEsS0FBQSxDQUFNLEdBQUcsQ0FBQSxDQUFBLENBQUcsTUFBTyxDQUFBLENBQUMsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssQ0FBUyxPQUFBLENBQUEsQ0FBQSxDQUFBLENBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBRyxTQUFTLENBQUE7QUFDdkQsQ0FBQSxDQUFBLENBQUEsQ0FBSSxNQUFPLENBQUEsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBRyxRQUFRLENBQUEsQ0FBQSxDQUFHLEdBQUcsQ0FBQSxDQUFBLENBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBRyxDQUFDLENBQUE7QUFDbkQsQ0FBQTtBQUVPLFFBQUEsQ0FBUyw4Q0FBOEMsQ0FBQyxJQUFJLENBQUEsQ0FBRSxJQUFJLENBQUUsQ0FBQSxDQUFBO0FBQzNFLENBQUEsQ0FBQSxDQUFBLENBQUksTUFBTSxHQUFHLENBQUEsQ0FBQSxDQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtBQUNqQyxDQUFBLENBQUEsQ0FBQSxDQUFJLEtBQU0sQ0FBQSxJQUFJLENBQUcsQ0FBQSxDQUFBLGlCQUFpQixDQUFDLEdBQUcsQ0FBQSxDQUFFQSxJQUFJLENBQUEsQ0FBQSxDQUFDLGlCQUFpQixDQUFBLENBQUVBLElBQUksQ0FBQSxDQUFBLENBQUMsa0JBQWtCLENBQUMsQ0FBQTtBQUN4RixDQUFJLENBQUEsQ0FBQSxDQUFBLEtBQUEsQ0FBTSxJQUFJLENBQUEsQ0FBQSxDQUFHLGVBQWUsQ0FBQTtBQUNoQyxDQUFBLENBQUEsQ0FBQSxDQUFJLGtCQUFrQixDQUFBLENBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFBLENBQUEsQ0FBRyxDQUFDLENBQUEsQ0FBQSxDQUFHLENBQUMsQ0FBQSxDQUFFLElBQUksQ0FBQSxDQUFFLElBQUksQ0FBQyxDQUFBO0FBQzNELENBQUEsQ0FBQSxDQUFBLENBQUksa0JBQWtCLENBQUEsQ0FBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUEsQ0FBQSxDQUFHLENBQUMsQ0FBQSxDQUFBLENBQUcsQ0FBQyxDQUFBLENBQUUsSUFBSSxDQUFBLENBQUUsSUFBSSxDQUFDLENBQUE7QUFDM0QsQ0FBQTtBQUVPLFFBQUEsQ0FBUyxvQ0FBb0MsQ0FBQyxJQUFJLENBQUEsQ0FBRSxJQUFJLENBQUUsQ0FBQSxDQUFBO0FBQ2pFLENBQUEsQ0FBQSxDQUFBLENBQUksS0FBTSxDQUFBLEdBQUcsQ0FBRyxDQUFBLENBQUEsSUFBSSxJQUFJLElBQUksQ0FBQTtBQUM1QixDQUFBLENBQUEsQ0FBQSxDQUFJLE9BQU8sR0FBRyxDQUFBO0FBQ2QsQ0FBQTtBQUVPLFFBQVMsQ0FBQSwyQ0FBMkMsQ0FBQyxJQUFJLENBQUUsQ0FBQSxDQUFBO0FBQ2xFLENBQUEsQ0FBQSxDQUFBLENBQUksTUFBTSxHQUFHLENBQUEsQ0FBQSxDQUFHLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBUSxNQUFBLENBQUEsQ0FBQTtBQUN6QyxDQUFBLENBQUEsQ0FBQSxDQUFJLE9BQU8sR0FBRyxDQUFBO0FBQ2QsQ0FBQTtBQUVPLFFBQVMsQ0FBQSw2Q0FBNkMsQ0FBQyxJQUFJLENBQUUsQ0FBQSxDQUFBO0FBQ3BFLENBQUEsQ0FBQSxDQUFBLENBQUksTUFBTSxHQUFHLENBQUEsQ0FBQSxDQUFHLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBVSxRQUFBLENBQUEsQ0FBQTtBQUMzQyxDQUFBLENBQUEsQ0FBQSxDQUFJLE9BQU8sR0FBRyxDQUFBO0FBQ2QsQ0FBQTtBQUVPLFFBQVMsQ0FBQSwyQ0FBMkMsQ0FBQyxJQUFJLENBQUUsQ0FBQSxDQUFBO0FBQ2xFLENBQUksQ0FBQSxDQUFBLENBQUEsS0FBQSxDQUFNLEdBQUcsQ0FBQSxDQUFBLENBQUcsSUFBSSxDQUFBO0FBQ3BCLENBQUksQ0FBQSxDQUFBLENBQUEsS0FBQSxDQUFNLEdBQUcsQ0FBQSxDQUFBLENBQUcsTUFBTyxDQUFBLEdBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssQ0FBUSxNQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBSSxHQUFHLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBSyxJQUFJLENBQUE7QUFDeEQsQ0FBQSxDQUFBLENBQUEsQ0FBSSxPQUFPLEdBQUcsQ0FBQTtBQUNkLENBQUE7QUFFTyxRQUFTLENBQUEsMkNBQTJDLENBQUMsSUFBSSxDQUFFLENBQUEsQ0FBQTtBQUNsRSxDQUFBLENBQUEsQ0FBQSxDQUFJLE1BQU0sR0FBRyxDQUFBLENBQUEsQ0FBRyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQVEsTUFBQSxDQUFBLENBQUE7QUFDekMsQ0FBQSxDQUFBLENBQUEsQ0FBSSxPQUFPLEdBQUcsQ0FBQTtBQUNkLENBQUE7QUFFTyxRQUFBLENBQVMsMENBQTBDLENBQUMsSUFBSSxDQUFBLENBQUUsSUFBSSxDQUFFLENBQUEsQ0FBQTtBQUN2RSxDQUFBLENBQUEsQ0FBQSxDQUFJLEtBQU0sQ0FBQSxHQUFHLENBQUcsQ0FBQSxDQUFBLElBQUksS0FBSyxJQUFJLENBQUE7QUFDN0IsQ0FBQSxDQUFBLENBQUEsQ0FBSSxPQUFPLEdBQUcsQ0FBQTtBQUNkLENBQUE7QUFFTyxRQUFBLENBQVMsZ0RBQWdELENBQUMsSUFBSSxDQUFBLENBQUUsSUFBSSxDQUFFLENBQUEsQ0FBQTtBQUM3RSxDQUFBLENBQUEsQ0FBQSxDQUFJLEtBQU0sQ0FBQSxHQUFHLENBQUcsQ0FBQSxDQUFBLElBQUksSUFBSSxJQUFJLENBQUE7QUFDNUIsQ0FBQSxDQUFBLENBQUEsQ0FBSSxPQUFPLEdBQUcsQ0FBQTtBQUNkLENBQUE7QUFFTyxRQUFBLENBQVMsNENBQTRDLENBQUMsSUFBSSxDQUFBLENBQUUsSUFBSSxDQUFFLENBQUEsQ0FBQTtBQUN6RSxDQUFJLENBQUEsQ0FBQSxDQUFBLEtBQUEsQ0FBTSxHQUFHLENBQUEsQ0FBQSxDQUFHLElBQUksQ0FBQTtBQUNwQixDQUFJLENBQUEsQ0FBQSxDQUFBLEtBQUEsQ0FBTSxHQUFHLENBQUEsQ0FBQSxDQUFHLE1BQU8sQ0FBQSxHQUFHLENBQUMsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFLLENBQVEsTUFBQSxDQUFBLENBQUEsQ0FBQSxDQUFHLEdBQUcsQ0FBQSxDQUFBLENBQUcsU0FBUyxDQUFBO0FBQzFELENBQUksQ0FBQSxDQUFBLENBQUEsa0JBQWtCLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFBLENBQUEsQ0FBRyxDQUFDLENBQUcsQ0FBQSxDQUFBLENBQUMsRUFBRSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUEsQ0FBQSxDQUFHLENBQUMsQ0FBRyxDQUFBLENBQUEsR0FBRyxDQUFFLENBQUEsSUFBSSxDQUFDLENBQUE7QUFDbEYsQ0FBQSxDQUFBLENBQUEsQ0FBSSxrQkFBa0IsQ0FBRSxDQUFBLENBQUMsUUFBUSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUEsQ0FBQSxDQUFHLENBQUMsQ0FBQSxDQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUUsSUFBSSxDQUFDLENBQUE7QUFDdkUsQ0FBQTtBQUVPLFFBQUEsQ0FBUyw0Q0FBNEMsQ0FBQyxJQUFJLENBQUEsQ0FBRSxJQUFJLENBQUUsQ0FBQSxDQUFBO0FBQ3pFLENBQUksQ0FBQSxDQUFBLENBQUEsS0FBQSxDQUFNLEdBQUcsQ0FBQSxDQUFBLENBQUcsSUFBSSxDQUFBO0FBQ3BCLENBQUksQ0FBQSxDQUFBLENBQUEsS0FBQSxDQUFNLEdBQUcsQ0FBQSxDQUFBLENBQUcsTUFBTyxDQUFBLEdBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUssQ0FBUSxNQUFBLENBQUEsQ0FBQSxDQUFBLENBQUcsR0FBRyxDQUFBLENBQUEsQ0FBRyxTQUFTLENBQUE7QUFDMUQsQ0FBSSxDQUFBLENBQUEsQ0FBQSxHQUFBLENBQUksSUFBSSxDQUFHLENBQUEsQ0FBQSxVQUFVLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBLENBQUEsQ0FBRyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUVBLElBQUksQ0FBQSxDQUFBLENBQUMsaUJBQWlCLENBQUVBLENBQUFBLElBQUFBLENBQUFBLENBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFBO0FBQzVHLENBQUksQ0FBQSxDQUFBLENBQUEsR0FBQSxDQUFJLElBQUksQ0FBQSxDQUFBLENBQUcsZUFBZSxDQUFBO0FBQzlCLENBQUEsQ0FBQSxDQUFBLENBQUksa0JBQWtCLENBQUEsQ0FBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUEsQ0FBQSxDQUFHLENBQUMsQ0FBQSxDQUFBLENBQUcsQ0FBQyxDQUFBLENBQUUsSUFBSSxDQUFBLENBQUUsSUFBSSxDQUFDLENBQUE7QUFDM0QsQ0FBQSxDQUFBLENBQUEsQ0FBSSxr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QSxDQUFBLENBQUEsQ0FBSSxJQUFJLE1BQU0sQ0FBQTtBQUNkLENBQUEsQ0FBQSxDQUFBLENBQUksR0FBSSxDQUFBLENBQUE7QUFDUixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsTUFBTSxDQUFBLENBQUEsQ0FBRyxJQUFJLENBQUEsVUFBQSxDQUFZLFdBQVcsQ0FBQTtBQUM1QyxDQUFLLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQyxLQUFPLENBQUEsQ0FBQSxDQUFDLENBQUUsQ0FBQSxDQUFBO0FBQ2hCLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxNQUFNLEdBQUcsS0FBSyxDQUFBO0FBQ3RCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLENBQUksQ0FBQSxDQUFBLENBQUEsS0FBQSxDQUFNLEdBQUcsQ0FBQSxDQUFBLENBQUcsTUFBTSxDQUFBO0FBQ3RCLENBQUEsQ0FBQSxDQUFBLENBQUksT0FBTyxHQUFHLENBQUE7QUFDZCxDQUFBO0FBRU8sUUFBUyxDQUFBLHFDQUFxQyxDQUFDLElBQUksQ0FBRSxDQUFBLENBQUE7QUFDNUQsQ0FBQSxDQUFBLENBQUEsQ0FBSSxJQUFJLE1BQU0sQ0FBQTtBQUNkLENBQUEsQ0FBQSxDQUFBLENBQUksR0FBSSxDQUFBLENBQUE7QUFDUixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsTUFBTSxDQUFBLENBQUEsQ0FBRyxJQUFJLENBQUEsVUFBQSxDQUFZLEdBQUcsQ0FBQTtBQUNwQyxDQUFLLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQyxLQUFPLENBQUEsQ0FBQSxDQUFDLENBQUUsQ0FBQSxDQUFBO0FBQ2hCLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxNQUFNLEdBQUcsS0FBSyxDQUFBO0FBQ3RCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLENBQUksQ0FBQSxDQUFBLENBQUEsS0FBQSxDQUFNLEdBQUcsQ0FBQSxDQUFBLENBQUcsTUFBTSxDQUFBO0FBQ3RCLENBQUEsQ0FBQSxDQUFBLENBQUksT0FBTyxHQUFHLENBQUE7QUFDZCxDQUFBO0FBRU8sUUFBUyxDQUFBLDRDQUE0QyxDQUFDLElBQUksQ0FBRSxDQUFBLENBQUE7QUFDbkUsQ0FBQSxDQUFBLENBQUEsQ0FBSSxJQUFJLE1BQU0sQ0FBQTtBQUNkLENBQUEsQ0FBQSxDQUFBLENBQUksR0FBSSxDQUFBLENBQUE7QUFDUixDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQVEsTUFBTSxDQUFBLENBQUEsQ0FBRyxJQUFJLENBQUEsVUFBQSxDQUFZLFVBQVUsQ0FBQTtBQUMzQyxDQUFLLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQyxLQUFPLENBQUEsQ0FBQSxDQUFDLENBQUUsQ0FBQSxDQUFBO0FBQ2hCLENBQVEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxNQUFNLEdBQUcsS0FBSyxDQUFBO0FBQ3RCLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQTtBQUNBLENBQUksQ0FBQSxDQUFBLENBQUEsS0FBQSxDQUFNLEdBQUcsQ0FBQSxDQUFBLENBQUcsTUFBTSxDQUFBO0FBQ3RCLENBQUEsQ0FBQSxDQUFBLENBQUksT0FBTyxHQUFHLENBQUE7QUFDZCxDQUFBO0FBRU8sUUFBUyxDQUFBLDhCQUE4QixDQUFDLElBQUksQ0FBRSxDQUFBLENBQUE7QUFDckQsQ0FBSSxDQUFBLENBQUEsQ0FBQSxLQUFBLENBQU0sR0FBRyxDQUFHLENBQUEsQ0FBQSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQ25DLENBQUEsQ0FBQSxDQUFBLENBQUksT0FBTyxHQUFHLENBQUE7QUFDZCxDQUFBO0FBRU8sUUFBUyxDQUFBLG9DQUFvQyxDQUFDLElBQUksQ0FBRSxDQUFBLENBQUE7QUFDM0QsQ0FBSSxDQUFBLENBQUEsQ0FBQSxLQUFBLENBQU0sR0FBRyxDQUFHLENBQUEsQ0FBQSxNQUFNLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFBO0FBQzFDLENBQUEsQ0FBQSxDQUFBLENBQUksT0FBTyxHQUFHLENBQUE7QUFDZCxDQUFBO0FBRU8sUUFBQSxDQUFTLCtCQUErQixDQUFHLENBQUEsQ0FBQSxDQUFBO0FBQ2xELENBQUEsQ0FBQSxDQUFBLENBQUksS0FBTSxDQUFBLEdBQUcsQ0FBRyxDQUFBLENBQUEsTUFBTSxDQUFDLFFBQVEsQ0FBQTtBQUMvQixDQUFBLENBQUEsQ0FBQSxDQUFJLE9BQU8sR0FBRyxDQUFBO0FBQ2QsQ0FBQTtBQUVPLFFBQVMsQ0FBQSw2QkFBNkIsQ0FBQyxJQUFJLENBQUUsQ0FBQSxDQUFBO0FBQ3BELENBQUEsQ0FBQSxDQUFBLENBQUksS0FBTSxDQUFBLEdBQUcsQ0FBRyxDQUFBLENBQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQTtBQUMzQixDQUFBLENBQUEsQ0FBQSxDQUFJLE9BQU8sR0FBRyxDQUFBO0FBQ2QsQ0FBQTtBQUVPLFFBQVMsQ0FBQSw2QkFBNkIsQ0FBQyxJQUFJLENBQUUsQ0FBQSxDQUFBO0FBQ3BELENBQUEsQ0FBQSxDQUFBLENBQUksS0FBTSxDQUFBLEdBQUcsQ0FBRyxDQUFBLENBQUEsSUFBSSxDQUFDLE1BQU0sQ0FBQTtBQUMzQixDQUFBLENBQUEsQ0FBQSxDQUFJLE9BQU8sR0FBRyxDQUFBO0FBQ2QsQ0FBQTtBQUVPLFFBQUEsQ0FBUywwQkFBMEIsQ0FBRyxDQUFBLENBQUEsQ0FBQTtBQUM3QyxDQUFBLENBQUEsQ0FBQSxDQUFJLEtBQU0sQ0FBQSxHQUFHLENBQUcsQ0FBQSxDQUFBLEdBQUEsQ0FBSSxNQUFNLENBQUUsQ0FBQSxDQUFBO0FBQzVCLENBQUEsQ0FBQSxDQUFBLENBQUksT0FBTyxHQUFHLENBQUE7QUFDZCxDQUFBO0FBRU8sUUFBQSxDQUFTLDBCQUEwQixDQUFHLENBQUEsQ0FBQSxDQUFBO0FBQzdDLENBQUEsQ0FBQSxDQUFBLENBQUksS0FBTSxDQUFBLEdBQUcsQ0FBRyxDQUFBLENBQUEsR0FBQSxDQUFJLEtBQUssQ0FBRSxDQUFBLENBQUE7QUFDM0IsQ0FBQSxDQUFBLENBQUEsQ0FBSSxPQUFPLEdB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QTtBQUN2RCxDQUFBLENBQUEsQ0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBQSxTQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsR0FBQSxDQUFBLENBQUEsQ0FBQSxDQUFBLFNBQUEsQ0FBQSxDQUFBO0FBQ0EsQ0FBSSxDQUFBLENBQUEsQ0FBQSxLQUFBLENBQU0sR0FBRyxDQUFBLENBQUEsQ0FBRyxJQUFJLENBQUE7QUFDcEIsQ0FBQSxDQUFBLENBQUEsQ0FBSSxPQUFPLEdBQUcsQ0FBQTtBQUNkLENBQUE7QUFFTyxRQUFBLENBQVMsK0JBQStCLENBQUcsQ0FBQSxDQUFBLENBQUE7QUFDbEQsQ0FBQSxDQUFBLENBQUEsQ0FBSSxLQUFNLENBQUEsS0FBSyxDQUFHQSxDQUFBQSxDQUFBQSxJQUFBQSxDQUFBQSxDQUFJLENBQUMscUJBQXFCLENBQUE7QUFDNUMsQ0FBSSxDQUFBLENBQUEsQ0FBQSxLQUFBLENBQU0sTUFBTSxDQUFHLENBQUEsQ0FBQSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFBO0FBQ2hDLENBQUEsQ0FBQSxDQUFBLENBQUksS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUEsQ0FBRSxTQUFTLENBQUMsQ0FBQTtBQUMzQixDQUFJLENBQUEsQ0FBQSxDQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFHLENBQUEsQ0FBQSxDQUFDLENBQUUsQ0FBQSxTQUFTLENBQUMsQ0FBQTtBQUNwQyxDQUFJLENBQUEsQ0FBQSxDQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFHLENBQUEsQ0FBQSxDQUFDLENBQUUsQ0FBQSxJQUFJLENBQUMsQ0FBQTtBQUMvQixDQUFJLENBQUEsQ0FBQSxDQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFHLENBQUEsQ0FBQSxDQUFDLENBQUUsQ0FBQSxJQUFJLENBQUMsQ0FBQTtBQUMvQixDQUFJLENBQUEsQ0FBQSxDQUFBLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFHLENBQUEsQ0FBQSxDQUFDLENBQUUs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
