const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./main-tOCAKvOg.js","./analysis_tool-Dx9JOKUM.js","./model-hspTLkzk.js","./index-CyfczNyW.js","./export_svg-wXGzXOLa.js","./file-download-BsEf44_Y.js"])))=>i.map(i=>d[i]);
import { template, insert, createComponent, effect, setAttribute, memo, use, Dynamic } from 'solid-js/web';
import { getOwner, createMemo, runWithOwner, Show, createUniqueId, Switch, Match, Index, For, createResource } from 'solid-js';
import { _ as __vitePreload } from './index-CyfczNyW.js';
import { o as invariant, y as access, q as IconButton } from './analysis_tool-Dx9JOKUM.js';
import './pde_plot-RwfHTcqv.js';
import { d as download_default } from './download-zhEUC15I.js';

function getMainFont() {
  const style = getComputedStyle(document.documentElement);
  const rootFontSize = parseFloat(style.fontSize);
  return `${rootFontSize}px ${style.getPropertyValue("--main-font")}`;
}
function getMonoFont() {
  const style = getComputedStyle(document.documentElement);
  const rootFontSize = parseFloat(style.fontSize);
  return `${rootFontSize}px ${style.getPropertyValue("--mono-font")}`;
}
function measureText(canvas, text, font) {
  const context = canvas.getContext("2d");
  invariant(context);
  context.font = font;
  const metrics = context.measureText(text);
  return {
    width: metrics.width,
    height: metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent
  };
}

const portSize = 8;
const nodePadding = 10;
function graphToElk(graph, layoutOptions) {
  const canvas = document.createElement("canvas");
  const defaultFont = getMainFont();
  const monospaceFont = getMonoFont();
  const children = graph.nodes.map((node) => {
    let width = node.minimumWidth ?? nodePadding;
    let height = node.minimumHeight ?? nodePadding;
    if (node.label) {
      const font = node.isMonospaced ? monospaceFont : defaultFont;
      const size = measureText(canvas, node.label, font);
      width = Math.max(width, size.width + 2 * nodePadding);
      height = Math.max(height, size.height + 2 * nodePadding);
    }
    return {
      id: node.id,
      labels: node.label ? [{ text: node.label }] : [],
      width,
      height,
      cssClass: node.cssClass
    };
  });
  const edges = graph.edges.map((edge) => {
    let label;
    if (edge.label) {
      const font = edge.isMonospaced ? monospaceFont : defaultFont;
      const { width, height } = measureText(canvas, edge.label, font);
      label = { text: edge.label, width, height };
    }
    return {
      id: edge.id,
      sources: [edge.source],
      targets: [edge.target],
      labels: label ? [label] : [],
      cssClass: edge.cssClass,
      arrowStyle: edge.style
    };
  });
  return { id: "root", children, edges, layoutOptions };
}
async function loadElk() {
  const ELK = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./main-tOCAKvOg.js').then(n => n.m);return { default: __vite_default__ }},true?__vite__mapDeps([0,1,2,3]):undefined,import.meta.url)).default;
  return new ELK();
}
function parseElkLayout(elk) {
  const nodes = [];
  for (const child of elk.children ?? []) {
    const width2 = child.width ?? 0;
    const height2 = child.height ?? 0;
    nodes.push({
      id: child.id,
      // ELK positions are from the top-left corner; convert to center.
      pos: {
        x: (child.x ?? 0) + width2 / 2,
        y: (child.y ?? 0) + height2 / 2
      },
      width: width2,
      height: height2,
      label: child.labels?.[0]?.text,
      cssClass: child.cssClass
    });
  }
  const edges = [];
  for (const edge of elk.edges ?? []) {
    const source = edge.sources[0];
    const target = edge.targets[0];
    invariant(source && target);
    const sections = edge.sections ?? [];
    const firstSection = sections[0];
    const lastSection = sections[sections.length - 1];
    invariant(firstSection && lastSection);
    const edgeLabel = edge.labels?.[0];
    const labelPos = edgeLabel ? {
      x: (edgeLabel.x ?? 0) + (edgeLabel.width ?? 0) / 2,
      y: (edgeLabel.y ?? 0) + (edgeLabel.height ?? 0) / 2
    } : undefined;
    edges.push({
      id: edge.id,
      source,
      target,
      label: edgeLabel?.text,
      sourcePos: firstSection.startPoint,
      targetPos: lastSection.endPoint,
      labelPos,
      path: sectionsToPath(sections),
      cssClass: edge.cssClass,
      style: edge.arrowStyle
    });
  }
  const width = elk.width;
  const height = elk.height;
  return { width, height, nodes, edges };
}
function sectionsToPath(sections, offsetX = 0, offsetY = 0) {
  const stmts = [];
  for (const section of sections) {
    stmts.push(
      stmts.length === 0 ? "M" : "L",
      offsetX + section.startPoint.x,
      offsetY + section.startPoint.y
    );
    for (const bp of section.bendPoints ?? []) {
      stmts.push("L", offsetX + bp.x, offsetY + bp.y);
    }
    stmts.push("L", offsetX + section.endPoint.x, offsetY + section.endPoint.y);
  }
  return stmts.join(" ");
}
function parseElkPortLayout(port, parentX, parentY) {
  const portLabel = port.labels?.[0];
  const px = parentX + (port.x ?? 0);
  const py = parentY + (port.y ?? 0);
  return {
    x: px + (port.width ?? 0) / 2,
    y: py + (port.height ?? 0) / 2,
    label: portLabel?.text ?? "",
    labelX: px + (portLabel?.x ?? 0),
    labelY: py + (portLabel?.y ?? 0) + (portLabel?.height ?? 0) / 2
  };
}

const isReactiveObject = (value) => typeof value === "object" && value !== null;
/**
 * Cashed object getters.
 * @description When a key is accessed for the first time, the `get` function is executed, later a cached value is used instead.
 */
function createProxyCache(obj, get) {
    return new Proxy({}, {
        get: (target, key) => {
            if (key === Symbol.iterator || key === "length")
                return Reflect.get(obj, key);
            const saved = Reflect.get(target, key);
            if (saved)
                return saved;
            const value = get(key);
            Reflect.set(target, key, value);
            return value;
        },
        set: () => false,
    });
}
/**
 * Destructures an reactive object *(e.g. store or component props)* or a signal of one into a tuple/map of signals for each object key.
 * @param source reactive object or signal returning one
 * @param options memo options + primitive configuration:
 * - `memo` - wraps accessors in `createMemo`, making each property update independently. *(enabled by default for signal source)*
 * - `lazy` - property accessors are created on key read. enable if you want to only a subset of source properties, or use properties initially missing
 * - `deep` - destructure nested objects
 * @returns object of the same keys as the source, but with values turned into accessors.
 * @example // spread tuples
 * const [first, second, third] = destructure(() => [1,2,3])
 * first() // => 1
 * second() // => 2
 * third() // => 3
 * @example // spread objects
 * const { name, age } = destructure({ name: "John", age: 36 })
 * name() // => "John"
 * age() // => 36
 */
function destructure(source, options) {
    const config = options ?? {};
    const memo = config.memo ?? typeof source === "function";
    const getter = typeof source === "function"
        ? (key) => () => source()[key]
        : (key) => () => source[key];
    const obj = access(source);
    // lazy (use proxy)
    if (config.lazy) {
        const owner = getOwner();
        return createProxyCache(obj, key => {
            const calc = getter(key);
            if (config.deep && isReactiveObject(obj[key]))
                return runWithOwner(owner, () => destructure(calc, { ...config, memo }));
            return memo ? runWithOwner(owner, () => createMemo(calc, undefined, options)) : calc;
        });
    }
    // eager (loop keys)
    const result = Array.isArray(obj) ? [] : {};
    for (const [key, value] of Object.entries(obj)) {
        const calc = getter(key);
        if (config.deep && isReactiveObject(value))
            result[key] = destructure(calc, { ...config, memo });
        else
            result[key] = memo ? createMemo(calc, undefined, options) : calc;
    }
    return result;
}

function perpendicularLabelPosition(sourcePos, targetPos, offset = 10) {
  const vec = { x: targetPos.x - sourcePos.x, y: targetPos.y - sourcePos.y };
  const scale = offset / Math.sqrt(vec.x ** 2 + vec.y ** 2);
  return { x: targetPos.x - scale * vec.y, y: targetPos.y + scale * vec.x };
}

var _tmpl$ = /* @__PURE__ */ template(`<svg class=graph><defs>`), _tmpl$2 = /* @__PURE__ */ template(`<svg><text dominant-baseline=middle text-anchor=middle></svg>`, false, true, false), _tmpl$3 = /* @__PURE__ */ template(`<svg><g><rect></svg>`, false, true, false), _tmpl$4 = /* @__PURE__ */ template(`<svg><path></svg>`, false, true, false), _tmpl$5 = /* @__PURE__ */ template(`<svg><text class=label dominant-baseline=middle text-anchor=middle></svg>`, false, true, false), _tmpl$6 = /* @__PURE__ */ template(`<svg><path class=double-outer></svg>`, false, true, false), _tmpl$7 = /* @__PURE__ */ template(`<svg><path class=double-inner></svg>`, false, true, false), _tmpl$8 = /* @__PURE__ */ template(`<svg><path class=double-marker></svg>`, false, true, false), _tmpl$9 = /* @__PURE__ */ template(`<svg><text><textPath startOffset=40%>‖</svg>`, false, true, false), _tmpl$10 = /* @__PURE__ */ template(`<svg><g></svg>`, false, true, false), _tmpl$11 = /* @__PURE__ */ template(`<svg><marker viewBox="0 0 5 10"refY=5 markerWidth=10 markerHeight=10 orient=auto-start-reverse><path d="M 0 2 L 5 5 L 0 8"></svg>`, false, true, false), _tmpl$12 = /* @__PURE__ */ template(`<svg><marker viewBox="0 0 10 10"refX=10 refY=5 markerWidth=6 markerHeight=6 orient=auto-start-reverse><path d="M 0 0 L 10 5 L 0 10 z"></svg>`, false, true, false), _tmpl$13 = /* @__PURE__ */ template(`<svg><marker viewBox="0 0 5 10"refX=5 refY=5 markerWidth=10 markerHeight=10 orient=auto-start-reverse><path d="M 5 0 L 5 10"></svg>`, false, true, false);
function GraphSVG(props) {
  const edgeMarkers = () => {
    const markers = /* @__PURE__ */ new Set();
    for (const edge of props.graph.edges) {
      const marker = styleToMarker[edge.style ?? "default"];
      if (marker) {
        markers.add(marker);
      }
    }
    return Array.from(markers);
  };
  return (() => {
    var _el$ = _tmpl$(), _el$2 = _el$.firstChild;
    var _ref$ = props.ref;
    typeof _ref$ === "function" ? use(_ref$, _el$) : props.ref = _el$;
    insert(_el$2, createComponent(Index, {
      get each() {
        return edgeMarkers();
      },
      children: (marker) => createComponent(Dynamic, {
        get component() {
          return arrowMarkerSVG[marker()];
        }
      })
    }));
    insert(_el$, createComponent(For, {
      get each() {
        return props.graph.edges;
      },
      children: (edge) => createComponent(EdgeSVG, {
        edge
      })
    }), null);
    insert(_el$, createComponent(For, {
      get each() {
        return props.graph.nodes;
      },
      children: (node) => createComponent(NodeSVG, {
        node
      })
    }), null);
    effect((_p$) => {
      var _v$ = props.graph.width, _v$2 = props.graph.height;
      _v$ !== _p$.e && setAttribute(_el$, "width", _p$.e = _v$);
      _v$2 !== _p$.t && setAttribute(_el$, "height", _p$.t = _v$2);
      return _p$;
    }, {
      e: undefined,
      t: undefined
    });
    return _el$;
  })();
}
function LabeledRect(props) {
  return (() => {
    var _el$3 = _tmpl$3(), _el$4 = _el$3.firstChild;
    insert(_el$3, createComponent(Show, {
      get when() {
        return props.label;
      },
      get children() {
        var _el$5 = _tmpl$2();
        insert(_el$5, () => props.label);
        effect((_p$) => {
          var _v$3 = props.labelClass ?? "label", _v$4 = props.x + props.width / 2, _v$5 = props.y + props.height / 2;
          _v$3 !== _p$.e && setAttribute(_el$5, "class", _p$.e = _v$3);
          _v$4 !== _p$.t && setAttribute(_el$5, "x", _p$.t = _v$4);
          _v$5 !== _p$.a && setAttribute(_el$5, "y", _p$.a = _v$5);
          return _p$;
        }, {
          e: undefined,
          t: undefined,
          a: undefined
        });
        return _el$5;
      }
    }), null);
    insert(_el$3, () => props.children, null);
    effect((_p$) => {
      var _v$6 = props.class, _v$7 = props.x, _v$8 = props.y, _v$9 = props.width, _v$10 = props.height;
      _v$6 !== _p$.e && setAttribute(_el$3, "class", _p$.e = _v$6);
      _v$7 !== _p$.t && setAttribute(_el$4, "x", _p$.t = _v$7);
      _v$8 !== _p$.a && setAttribute(_el$4, "y", _p$.a = _v$8);
      _v$9 !== _p$.o && setAttribute(_el$4, "width", _p$.o = _v$9);
      _v$10 !== _p$.i && setAttribute(_el$4, "height", _p$.i = _v$10);
      return _p$;
    }, {
      e: undefined,
      t: undefined,
      a: undefined,
      o: undefined,
      i: undefined
    });
    return _el$3;
  })();
}
function NodeSVG(props) {
  const {
    node: {
      pos: {
        x,
        y
      },
      width,
      height
    }
  } = destructure(props, {
    deep: true
  });
  return createComponent(LabeledRect, {
    get x() {
      return x() - width() / 2;
    },
    get y() {
      return y() - height() / 2;
    },
    get width() {
      return width();
    },
    get height() {
      return height();
    },
    get label() {
      return props.node.label;
    },
    get ["class"]() {
      return props.node.cssClass ?? "node";
    }
  });
}
function EdgeSVG(props) {
  const {
    edge: {
      path
    }
  } = destructure(props, {
    deep: true
  });
  const markerUrl = () => {
    const style = props.edge.style ?? "default";
    const marker = styleToMarker[style];
    return `url(#arrowhead-${marker})`;
  };
  const componentId = createUniqueId();
  const pathId = () => `edge-path-${componentId}`;
  const defaultPath = () => (() => {
    var _el$6 = _tmpl$4();
    effect((_p$) => {
      var _v$11 = pathId(), _v$12 = markerUrl(), _v$13 = path();
      _v$11 !== _p$.e && setAttribute(_el$6, "id", _p$.e = _v$11);
      _v$12 !== _p$.t && setAttribute(_el$6, "marker-end", _p$.t = _v$12);
      _v$13 !== _p$.a && setAttribute(_el$6, "d", _p$.a = _v$13);
      return _p$;
    }, {
      e: undefined,
      t: undefined,
      a: undefined
    });
    return _el$6;
  })();
  const tgtLabel = (text) => {
    const pos = perpendicularLabelPosition(props.edge.sourcePos, props.edge.targetPos);
    return (() => {
      var _el$7 = _tmpl$5();
      insert(_el$7, text);
      effect((_p$) => {
        var _v$14 = pos.x, _v$15 = pos.y;
        _v$14 !== _p$.e && setAttribute(_el$7, "x", _p$.e = _v$14);
        _v$15 !== _p$.t && setAttribute(_el$7, "y", _p$.t = _v$15);
        return _p$;
      }, {
        e: undefined,
        t: undefined
      });
      return _el$7;
    })();
  };
  return (() => {
    var _el$8 = _tmpl$10();
    insert(_el$8, createComponent(Switch, {
      get fallback() {
        return defaultPath();
      },
      get children() {
        return [createComponent(Match, {
          get when() {
            return props.edge.style === "double";
          },
          get children() {
            return [(() => {
              var _el$9 = _tmpl$6();
              effect(() => setAttribute(_el$9, "d", path()));
              return _el$9;
            })(), (() => {
              var _el$10 = _tmpl$7();
              effect(() => setAttribute(_el$10, "d", path()));
              return _el$10;
            })(), (() => {
              var _el$11 = _tmpl$8();
              effect((_p$) => {
                var _v$16 = markerUrl(), _v$17 = path();
                _v$16 !== _p$.e && setAttribute(_el$11, "marker-end", _p$.e = _v$16);
                _v$17 !== _p$.t && setAttribute(_el$11, "d", _p$.t = _v$17);
                return _p$;
              }, {
                e: undefined,
                t: undefined
              });
              return _el$11;
            })()];
          }
        }), createComponent(Match, {
          get when() {
            return props.edge.style === "plus";
          },
          get children() {
            return [memo(() => defaultPath()), memo(() => tgtLabel("+"))];
          }
        }), createComponent(Match, {
          get when() {
            return props.edge.style === "minus";
          },
          get children() {
            return [memo(() => defaultPath()), memo(() => tgtLabel("-"))];
          }
        }), createComponent(Match, {
          get when() {
            return props.edge.style === "indeterminate";
          },
          get children() {
            return [memo(() => defaultPath()), memo(() => tgtLabel("?"))];
          }
        }), createComponent(Match, {
          get when() {
            return props.edge.style === "plusCaesura";
          },
          get children() {
            return [memo(() => defaultPath()), memo(() => tgtLabel("+")), (() => {
              var _el$12 = _tmpl$9(), _el$13 = _el$12.firstChild;
              _el$12.style.setProperty("dominant-baseline", "central");
              effect(() => setAttribute(_el$13, "href", `#${pathId()}`));
              return _el$12;
            })()];
          }
        }), createComponent(Match, {
          get when() {
            return props.edge.style === "minusCaesura";
          },
          get children() {
            return [memo(() => defaultPath()), memo(() => tgtLabel("-")), (() => {
              var _el$14 = _tmpl$9(), _el$15 = _el$14.firstChild;
              _el$14.style.setProperty("dominant-baseline", "central");
              effect(() => setAttribute(_el$15, "href", `#${pathId()}`));
              return _el$14;
            })()];
          }
        }), createComponent(Match, {
          get when() {
            return props.edge.style === "scalar";
          },
          get children() {
            return [memo(() => defaultPath()), memo(() => tgtLabel("∝"))];
          }
        })];
      }
    }), null);
    insert(_el$8, createComponent(Show, {
      get when() {
        return props.edge.label;
      },
      get children() {
        var _el$16 = _tmpl$5();
        insert(_el$16, () => props.edge.label);
        effect((_p$) => {
          var _v$18 = props.edge.labelPos?.x, _v$19 = props.edge.labelPos?.y;
          _v$18 !== _p$.e && setAttribute(_el$16, "x", _p$.e = _v$18);
          _v$19 !== _p$.t && setAttribute(_el$16, "y", _p$.t = _v$19);
          return _p$;
        }, {
          e: undefined,
          t: undefined
        });
        return _el$16;
      }
    }), null);
    effect(() => setAttribute(_el$8, "class", props.edge.cssClass ?? "edge"));
    return _el$8;
  })();
}
const VeeMarker = (props) => (() => {
  var _el$17 = _tmpl$11();
  effect((_p$) => {
    var _v$20 = props.id, _v$21 = 5 + (props.offset ?? 0);
    _v$20 !== _p$.e && setAttribute(_el$17, "id", _p$.e = _v$20);
    _v$21 !== _p$.t && setAttribute(_el$17, "refX", _p$.t = _v$21);
    return _p$;
  }, {
    e: undefined,
    t: undefined
  });
  return _el$17;
})();
const TriangleMarker = (props) => (() => {
  var _el$18 = _tmpl$12();
  effect(() => setAttribute(_el$18, "id", props.id));
  return _el$18;
})();
const FlatMarker = (props) => (() => {
  var _el$19 = _tmpl$13();
  effect(() => setAttribute(_el$19, "id", props.id));
  return _el$19;
})();
const styleToMarker = {
  default: "vee",
  double: "double",
  flat: "flat",
  unmarked: null,
  plus: "triangle",
  minus: "triangle",
  indeterminate: "triangle",
  plusCaesura: "triangle",
  minusCaesura: "triangle",
  scalar: "triangle"
};
const arrowMarkerSVG = {
  vee: () => createComponent(VeeMarker, {
    id: "arrowhead-vee"
  }),
  double: () => createComponent(VeeMarker, {
    id: "arrowhead-double",
    offset: -2
  }),
  triangle: () => createComponent(TriangleMarker, {
    id: "arrowhead-triangle"
  }),
  flat: () => createComponent(FlatMarker, {
    id: "arrowhead-flat"
  })
};

function ElkSVG(props) {
  return createComponent(ElkLayout, {
    get graph() {
      return props.graph;
    },
    get args() {
      return props.args;
    },
    elkToLayout: parseElkLayout,
    children: (graph) => createComponent(Dynamic, {
      get component() {
        return props.renderer ?? GraphSVG;
      },
      get graph() {
        return graph();
      },
      ref(r$) {
        var _ref$ = props.ref;
        typeof _ref$ === "function" ? _ref$(r$) : props.ref = r$;
      }
    })
  });
}
function ElkLayout(props) {
  const [elkResource] = createResource(loadElk);
  const [layout] = createResource(() => {
    const elk = elkResource();
    const graph = props.graph;
    const args = props.args;
    const elkToLayout = props.elkToLayout;
    if (elk && graph) {
      return [elk, graph, args, elkToLayout];
    }
  }, async ([elk, graph, args, elkToLayout]) => {
    const elkNode = await elk.layout(graph, args);
    return elkToLayout(elkNode);
  });
  return createComponent(Show, {
    get when() {
      return layout();
    },
    children: (l) => props.children(l)
  });
}

function DownloadSVGButton(props) {
  const download = async () => {
    if (props.svg) {
      const {
        downloadSVG
      } = await __vitePreload(async () => { const {
        downloadSVG
      } = await import('./export_svg-wXGzXOLa.js');return {
        downloadSVG
      }},true?__vite__mapDeps([4,5,1,2,3]):undefined,import.meta.url);
      await downloadSVG(props.svg, props.filename ?? "export.svg");
    }
  };
  return createComponent(IconButton, {
    onClick: download,
    get disabled() {
      return !props.svg;
    },
    get tooltip() {
      return props.tooltip;
    },
    get children() {
      return createComponent(download_default, {
        get size() {
          return props.size;
        }
      });
    }
  });
}

export { DownloadSVGButton as D, ElkLayout as E, GraphSVG as G, LabeledRect as L, NodeSVG as N, portSize as a, ElkSVG as b, graphToElk as c, arrowMarkerSVG as d, EdgeSVG as e, perpendicularLabelPosition as f, getMainFont as g, measureText as m, parseElkPortLayout as p, sectionsToPath as s };


//# sourceMappingURL=data:application/json;base64,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UUFBTTRKLFNBQVksZUFBWTtBQUFBO0FBQy9ELENBQ0o7QUFFQSxRQUFBdkksaUJBQ0t3SSxVQUFVO0FBQUEsQ0FBQ0MsVUFBU0w7QUFBQUEsQ0FBUSxPQUFFTSxRQUFRO0FBQUEsWUFBRSxFQUFDL0osS0FBTTBKO0FBQUFBLENBQUc7QUFBQSxRQUFFTSxPQUFPO0FBQUEsYUFBRWhLLEtBQU1nSztBQUFBQSxDQUFPO0FBQUEsUUFBQXhJLFFBQUE7QUFBQSxZQUFBSCxpQkFDdEU0SSxnQkFBUTtBQUFBLFlBQUNDLElBQUk7QUFBQSxpQkFBRWxLLEtBQU1rSztBQUFBQTtBQUFJO0FBQUE7QUFBQTtBQUd0QyIsIm5hbWVzIjpbIndpZHRoIiwiaGVpZ2h0IiwiR3JhcGhTVkciLCJwcm9wcyIsImVkZ2VNYXJrZXJzIiwibWFya2VycyIsIlNldCIsImVkZ2UiLCJncmFwaCIsImVkZ2VzIiwibWFya2VyIiwic3R5bGVUb01hcmtlciIsInN0eWxlIiwiYWRkIiwiQXJyYXkiLCJmcm9tIiwiX2VsJCIsIl90bXBsJCIsIl9lbCQyIiwiZmlyc3RDaGlsZCIsIl9yZWYkIiwicmVmIiwiXyR1c2UiLCJfJGluc2VydCIsIl8kY3JlYXRlQ29tcG9uZW50IiwiSW5kZXgiLCJlYWNoIiwiY2hpbGRyZW4iLCJEeW5hbWljIiwiY29tcG9uZW50IiwiYXJyb3dNYXJrZXJTVkciLCJGb3IiLCJFZGdlU1ZHIiwibm9kZXMiLCJub2RlIiwiTm9kZVNWRyIsIl8kZWZmZWN0IiwiX3AkIiwiX3YkIiwiX3YkMiIsImUiLCJfJHNldEF0dHJpYnV0ZSIsInQiLCJ1bmRlZmluZWQiLCJMYWJlbGVkUmVjdCIsIl9lbCQzIiwiX3RtcGwkMyIsIl9lbCQ0IiwiU2hvdyIsIndoZW4iLCJsYWJlbCIsIl9lbCQ1IiwiX3RtcGwkMiIsIl92JDMiLCJsYWJlbENsYXNzIiwiX3YkNCIsIngiLCJfdiQ1IiwieSIsImEiLCJfdiQ2IiwiY2xhc3MiLCJfdiQ3IiwiX3YkOCIsIl92JDkiLCJfdiQxMCIsIm8iLCJpIiwicG9zIiwiZGVzdHJ1Y3R1cmUiLCJkZWVwIiwiY3NzQ2xhc3MiLCJwYXRoIiwibWFya2VyVXJsIiwiY29tcG9uZW50SWQiLCJjcmVhdGVVbmlxdWVJZCIsInBhdGhJZCIsImRlZmF1bHRQYXRoIiwiX2VsJDYiLCJfdG1wbCQ0IiwiX3YkMTEiLCJfdiQxMiIsIl92JDEzIiwidGd0TGFiZWwiLCJ0ZXh0IiwicGVycGVuZGljdWxhckxhYmVsUG9zaXRpb24iLCJzb3VyY2VQb3MiLCJ0YXJnZXRQb3MiLCJfZWwkNyIsIl90bXBsJDUiLCJfdiQxNCIsIl92JDE1IiwiX2VsJDgiLCJfdG1wbCQxMCIsIlN3aXRjaCIsImZhbGxiYWNrIiwiTWF0Y2giLCJfZWwkOSIsIl90bXBsJDYiLCJfZWwkMTAiLCJfdG1wbCQ3IiwiX2VsJDExIiwiX3RtcGwkOCIsIl92JDE2IiwiX3YkMTciLCJfJG1lbW8iLCJfZWwkMTIiLCJfdG1wbCQ5IiwiX2VsJDEzIiwic2V0UHJvcGVydHkiLCJfZWwkMTQiLCJfZWwkMTUiLCJfZWwkMTYiLCJfdiQxOCIsImxhYmVsUG9zIiwiX3YkMTkiLCJWZWVNYXJrZXIiLCJfZWwkMTciLCJfdG1wbCQxMSIsIl92JDIwIiwiaWQiLCJfdiQyMSIsIm9mZnNldCIsIlRyaWFuZ2xlTWFya2VyIiwiX2VsJDE4IiwiX3RtcGwkMTIiLCJGbGF0TWFya2VyIiwiX2VsJDE5IiwiX3RtcGwkMTMiLCJkZWZhdWx0IiwiZG91YmxlIiwiZmxhdCIsInVubWFya2VkIiwicGx1cyIsIm1pbnVzIiwiaW5kZXRlcm1pbmF0ZSIsInBsdXNDYWVzdXJhIiwibWludXNDYWVzdXJhIiwic2NhbGFyIiwidmVlIiwidHJpYW5nbGUiLCJFbGtTVkciLCJFbGtMYXlvdXQiLCJhcmdzIiwiZWxrVG9MYXlvdXQiLCJwYXJzZUVsa0xheW91dCIsInJlbmRlcmVyIiwiciQiLCJlbGtSZXNvdXJjZSIsImNyZWF0ZVJlc291cmNlIiwibG9hZEVsayIsImxheW91dCIsImVsayIsImVsa05vZGUiLCJsIiwiRG93bmxvYWRTVkdCdXR0b24iLCJkb3dubG9hZCIsInN2ZyIsImRvd25sb2FkU1ZHIiwiZmlsZW5hbWUiLCJJY29uQnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIiwidG9vbHRpcCIsIkRvd25sb2FkIiwic2l6ZSJdLCJpZ25vcmVMaXN0IjpbMl0sInNvdXJjZXMiOlsiLi4vLi4vLi4vZnJvbnRlbmQvc3JjL3Zpc3VhbGl6YXRpb24vZm9udF91dGlscy50cyIsIi4uLy4uLy4uL2Zyb250ZW5kL3NyYy92aXN1YWxpemF0aW9uL2Vsay50cyIsIi4uLy4uLy4uL2Zyb250ZW5kL25vZGVfbW9kdWxlcy8ucG5wbS9Ac29saWQtcHJpbWl0aXZlcytkZXN0cnVjdHVyZUAwLjIuMl9zb2xpZC1qc0AxLjkuMTAvbm9kZV9tb2R1bGVzL0Bzb2xpZC1wcmltaXRpdmVzL2Rlc3RydWN0dXJlL2Rpc3QvaW5kZXguanMiLCIuLi8uLi8uLi9mcm9udGVuZC9zcmMvdmlzdWFsaXphdGlvbi9sYWJlbF9wb3NpdGlvbi50cyIsIi4uLy4uLy4uL2Zyb250ZW5kL3NyYy92aXN1YWxpemF0aW9uL2dyYXBoX3N2Zy50c3giLCIuLi8uLi8uLi9mcm9udGVuZC9zcmMvdmlzdWFsaXphdGlvbi9lbGtfc3ZnLnRzeCIsIi4uLy4uLy4uL2Zyb250ZW5kL3NyYy92aXN1YWxpemF0aW9uL2V4cG9ydF9zdmdfYnV0dG9uLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiO1xuXG4vKiogR2V0IHRoZSBtYWluIGZvbnQgc3RyaW5nIGZvciB0ZXh0IG1lYXN1cmVtZW50LlxuICpcbiAqIFJldHVybnMgYSBmb250IHNwZWNpZmljYXRpb24gc3RyaW5nIHN1aXRhYmxlIGZvciBDYW52YXMgMkQgY29udGV4dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE1haW5Gb250KCk6IHN0cmluZyB7XG4gICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG4gICAgY29uc3Qgcm9vdEZvbnRTaXplID0gcGFyc2VGbG9hdChzdHlsZS5mb250U2l6ZSk7XG4gICAgcmV0dXJuIGAke3Jvb3RGb250U2l6ZX1weCAke3N0eWxlLmdldFByb3BlcnR5VmFsdWUoXCItLW1haW4tZm9udFwiKX1gO1xufVxuXG4vKiogR2V0IHRoZSBtb25vc3BhY2UgZm9udCBzdHJpbmcgZm9yIHRleHQgbWVhc3VyZW1lbnQuXG4gKlxuICogUmV0dXJucyBhIGZvbnQgc3BlY2lmaWNhdGlvbiBzdHJpbmcgc3VpdGFibGUgZm9yIENhbnZhcyAyRCBjb250ZXh0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0TW9ub0ZvbnQoKTogc3RyaW5nIHtcbiAgICBjb25zdCBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KTtcbiAgICBjb25zdCByb290Rm9udFNpemUgPSBwYXJzZUZsb2F0KHN0eWxlLmZvbnRTaXplKTtcbiAgICByZXR1cm4gYCR7cm9vdEZvbnRTaXplfXB4ICR7c3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIi0tbW9uby1mb250XCIpfWA7XG59XG5cbi8qKiBNZWFzdXJlcyB0aGUgYm91bmRpbmcgYm94IG9mIHRleHQgdG8gYmUgcmVuZGVyZWQgaW4gU1ZHLlxuICpcbiAqIFRoaXMgbWV0aG9kIHVzZXMgYW4gYXV4aWxpYXJ5IEhUTUwgY2FudmFzIGVsZW1lbnQuIFRoZSBvdGhlciBjb21tb25seSB1c2VkXG4gKiBtZXRob2QgdXNlcyBhbiBhY3R1YWwgU1ZHIG5vZGUgYnV0IGhhcyB0aGUgZGlzYWR2YW50YWdlIHRoYXQgdGhlIFNWRyBub2RlIG11c3RcbiAqIGJlIGFkZGVkIHRvIHRoZSBET00uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtZWFzdXJlVGV4dChcbiAgICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50LFxuICAgIHRleHQ6IHN0cmluZyxcbiAgICBmb250OiBzdHJpbmcsXG4pOiB7IHdpZHRoOiBudW1iZXI7IGhlaWdodDogbnVtYmVyIH0ge1xuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGludmFyaWFudChjb250ZXh0LCBcIkZhaWxlZCB0byBnZXQgMkQgY29udGV4dCBmcm9tIGNhbnZhc1wiKTtcbiAgICBjb250ZXh0LmZvbnQgPSBmb250O1xuICAgIGNvbnN0IG1ldHJpY3MgPSBjb250ZXh0Lm1lYXN1cmVUZXh0KHRleHQpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiBtZXRyaWNzLndpZHRoLFxuICAgICAgICBoZWlnaHQ6IG1ldHJpY3MuZm9udEJvdW5kaW5nQm94QXNjZW50ICsgbWV0cmljcy5mb250Qm91bmRpbmdCb3hEZXNjZW50LFxuICAgIH07XG59XG4iLCJpbXBvcnQgdHlwZSB7XG4gICAgRUxLLFxuICAgIEVsa0VkZ2VTZWN0aW9uLFxuICAgIEVsa0V4dGVuZGVkRWRnZSxcbiAgICBFbGtMYWJlbCxcbiAgICBFbGtMYXlvdXRBcmd1bWVudHMsXG4gICAgRWxrTm9kZSxcbiAgICBFbGtQb3J0LFxuICAgIExheW91dE9wdGlvbnMsXG59IGZyb20gXCJlbGtqc1wiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcblxuaW1wb3J0IHsgZ2V0TWFpbkZvbnQsIGdldE1vbm9Gb250LCBtZWFzdXJlVGV4dCB9IGZyb20gXCIuL2ZvbnRfdXRpbHNcIjtcbmltcG9ydCB0eXBlICogYXMgR3JhcGhMYXlvdXQgZnJvbSBcIi4vZ3JhcGhfbGF5b3V0XCI7XG5pbXBvcnQgdHlwZSAqIGFzIEdyYXBoU3BlYyBmcm9tIFwiLi9ncmFwaF9zcGVjXCI7XG5pbXBvcnQgdHlwZSB7IEFycm93U3R5bGUgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG4vKiogTGF5b3V0IG9mIGEgaGllcmFyY2hpY2FsIEVMSyBncmFwaCB3aXRoIGFuIG91dGVyIGJvdW5kYXJ5LCBjaGlsZCBib3hlcyxcbmFuZCBlZGdlcy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFbGtIaWVyYXJjaGljYWxMYXlvdXQge1xuICAgIC8qKiBXaWR0aCBvZiB0aGUgYm91bmRpbmcgYm94LiAqL1xuICAgIHdpZHRoOiBudW1iZXI7XG5cbiAgICAvKiogSGVpZ2h0IG9mIHRoZSBib3VuZGluZyBib3guICovXG4gICAgaGVpZ2h0OiBudW1iZXI7XG5cbiAgICAvKiogVGhlIG91dGVyIGJvdW5kYXJ5IG9mIHRoZSBkaWFncmFtLiAqL1xuICAgIG91dGVyOiBFbGtCb3hMYXlvdXQ7XG5cbiAgICAvKiogTGFpZC1vdXQgYm94ZXMgaW5zaWRlIHRoZSBkaWFncmFtLiAqL1xuICAgIGJveGVzOiBFbGtCb3hMYXlvdXRbXTtcblxuICAgIC8qKiBMYWlkLW91dCBlZGdlcyB3aXRoIHBhdGhzIGFuZCBqdW5jdGlvbiBwb2ludHMuICovXG4gICAgd2lyZUVkZ2VzOiBFbGtFZGdlTGF5b3V0W107XG59XG5cbi8qKiBMYXlvdXQgb2YgYSBib3ggKG5vZGUgd2l0aCBwb3J0cykgaW4gYW4gRUxLIGdyYXBoLiAqL1xuZXhwb3J0IGludGVyZmFjZSBFbGtCb3hMYXlvdXQge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgd2lkdGg6IG51bWJlcjtcbiAgICBoZWlnaHQ6IG51bWJlcjtcbiAgICBsYWJlbD86IHN0cmluZztcbiAgICBwb3J0czogRWxrUG9ydExheW91dFtdO1xufVxuXG4vKiogTGF5b3V0IG9mIGEgcG9ydCBpbiBhbiBFTEsgZ3JhcGguICovXG5leHBvcnQgaW50ZXJmYWNlIEVsa1BvcnRMYXlvdXQge1xuICAgIHg6IG51bWJlcjtcbiAgICB5OiBudW1iZXI7XG4gICAgbGFiZWw6IHN0cmluZztcbiAgICBsYWJlbFg6IG51bWJlcjtcbiAgICBsYWJlbFk6IG51bWJlcjtcbn1cblxuLyoqIExheW91dCBvZiBhbiBlZGdlIHdpdGgganVuY3Rpb24gcG9pbnRzIGluIGFuIEVMSyBncmFwaC4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRWxrRWRnZUxheW91dCB7XG4gICAgcGF0aDogc3RyaW5nO1xuICAgIGp1bmN0aW9uUG9pbnRzOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH1bXTtcbn1cblxuLyoqIERlZmF1bHQgc2l6ZSBmb3IgcG9ydHMgaW4gRUxLIGxheW91dHMuICovXG5leHBvcnQgY29uc3QgcG9ydFNpemUgPSA4O1xuXG4vKiogRUxLIG5vZGUgd2l0aCBleHRyYSBzdHlsZSBkYXRhIGF0dGFjaGVkLlxuXG5FTEsgd2lsbCBpZ25vcmUgdGhpcyBleHRyYSBkYXRhIGFuZCBqdXN0IHBhc3MgaXQgdGhyb3VnaC5cbiAqL1xuaW50ZXJmYWNlIFN0eWxlZEVsa05vZGUgZXh0ZW5kcyBFbGtOb2RlIHtcbiAgICBjaGlsZHJlbj86IFN0eWxlZEVsa05vZGVbXTtcbiAgICBlZGdlcz86IFN0eWxlZEVsa0VkZ2VbXTtcbiAgICBjc3NDbGFzcz86IHN0cmluZztcbn1cblxuaW50ZXJmYWNlIFN0eWxlZEVsa0VkZ2UgZXh0ZW5kcyBFbGtFeHRlbmRlZEVkZ2Uge1xuICAgIGNzc0NsYXNzPzogc3RyaW5nO1xuICAgIGFycm93U3R5bGU/OiBBcnJvd1N0eWxlO1xufVxuXG5jb25zdCBub2RlUGFkZGluZyA9IDEwO1xuXG4vKiogQ29udmVydCBhIGdyYXBoIHNwZWNpZmljYXRpb24gaW50byBhbiBFTEsgbm9kZS5cblxuTGlzdCBvZiBsYXlvdXQgb3B0aW9ucyBzdXBwb3J0ZWQgYnkgRUxLOlxuPGh0dHBzOi8vZWNsaXBzZS5kZXYvZWxrL3JlZmVyZW5jZS9vcHRpb25zLmh0bWw+XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBncmFwaFRvRWxrKGdyYXBoOiBHcmFwaFNwZWMuR3JhcGgsIGxheW91dE9wdGlvbnM/OiBMYXlvdXRPcHRpb25zKTogRWxrTm9kZSB7XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcbiAgICBjb25zdCBkZWZhdWx0Rm9udCA9IGdldE1haW5Gb250KCk7XG4gICAgY29uc3QgbW9ub3NwYWNlRm9udCA9IGdldE1vbm9Gb250KCk7XG5cbiAgICBjb25zdCBjaGlsZHJlbjogU3R5bGVkRWxrTm9kZVtdID0gZ3JhcGgubm9kZXMubWFwKChub2RlKSA9PiB7XG4gICAgICAgIGxldCB3aWR0aCA9IG5vZGUubWluaW11bVdpZHRoID8/IG5vZGVQYWRkaW5nO1xuICAgICAgICBsZXQgaGVpZ2h0ID0gbm9kZS5taW5pbXVtSGVpZ2h0ID8/IG5vZGVQYWRkaW5nO1xuICAgICAgICBpZiAobm9kZS5sYWJlbCkge1xuICAgICAgICAgICAgY29uc3QgZm9udCA9IG5vZGUuaXNNb25vc3BhY2VkID8gbW9ub3NwYWNlRm9udCA6IGRlZmF1bHRGb250O1xuICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IG1lYXN1cmVUZXh0KGNhbnZhcywgbm9kZS5sYWJlbCwgZm9udCk7XG4gICAgICAgICAgICB3aWR0aCA9IE1hdGgubWF4KHdpZHRoLCBzaXplLndpZHRoICsgMiAqIG5vZGVQYWRkaW5nKTtcbiAgICAgICAgICAgIGhlaWdodCA9IE1hdGgubWF4KGhlaWdodCwgc2l6ZS5oZWlnaHQgKyAyICogbm9kZVBhZGRpbmcpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogbm9kZS5pZCxcbiAgICAgICAgICAgIGxhYmVsczogbm9kZS5sYWJlbCA/IFt7IHRleHQ6IG5vZGUubGFiZWwgfV0gOiBbXSxcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgY3NzQ2xhc3M6IG5vZGUuY3NzQ2xhc3MsXG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICBjb25zdCBlZGdlczogU3R5bGVkRWxrRWRnZVtdID0gZ3JhcGguZWRnZXMubWFwKChlZGdlKSA9PiB7XG4gICAgICAgIGxldCBsYWJlbDogRWxrTGFiZWwgfCB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChlZGdlLmxhYmVsKSB7XG4gICAgICAgICAgICBjb25zdCBmb250ID0gZWRnZS5pc01vbm9zcGFjZWQgPyBtb25vc3BhY2VGb250IDogZGVmYXVsdEZvbnQ7XG4gICAgICAgICAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IG1lYXN1cmVUZXh0KGNhbnZhcywgZWRnZS5sYWJlbCwgZm9udCk7XG4gICAgICAgICAgICBsYWJlbCA9IHsgdGV4dDogZWRnZS5sYWJlbCwgd2lkdGgsIGhlaWdodCB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpZDogZWRnZS5pZCxcbiAgICAgICAgICAgIHNvdXJjZXM6IFtlZGdlLnNvdXJjZV0sXG4gICAgICAgICAgICB0YXJnZXRzOiBbZWRnZS50YXJnZXRdLFxuICAgICAgICAgICAgbGFiZWxzOiBsYWJlbCA/IFtsYWJlbF0gOiBbXSxcbiAgICAgICAgICAgIGNzc0NsYXNzOiBlZGdlLmNzc0NsYXNzLFxuICAgICAgICAgICAgYXJyb3dTdHlsZTogZWRnZS5zdHlsZSxcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiB7IGlkOiBcInJvb3RcIiwgY2hpbGRyZW4sIGVkZ2VzLCBsYXlvdXRPcHRpb25zIH07XG59XG5cbi8qKiBBc3luY2hyb25vdXNseSBpbXBvcnQgYW5kIGxvYWQgRUxLLiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRFbGsoKSB7XG4gICAgY29uc3QgRUxLID0gKGF3YWl0IGltcG9ydChcImVsa2pzXCIpKS5kZWZhdWx0O1xuICAgIHJldHVybiBuZXcgRUxLKCk7XG59XG5cbi8qKiBMYXkgb3V0IGEgZ3JhcGggdXNpbmcgRUxLLiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGVsa0xheW91dEdyYXBoKFxuICAgIGVsazogRUxLLFxuICAgIGdyYXBoOiBTdHlsZWRFbGtOb2RlLFxuICAgIGFyZ3M/OiBFbGtMYXlvdXRBcmd1bWVudHMsXG4pOiBQcm9taXNlPEdyYXBoTGF5b3V0LkdyYXBoPiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZWxrLmxheW91dChncmFwaCwgYXJncyk7XG4gICAgcmV0dXJuIHBhcnNlRWxrTGF5b3V0KHJlc3VsdCk7XG59XG5cbi8qKiBQYXJzZSBhIGdyYXBoIGxheW91dCBjb21wdXRlZCBieSBFTEsuXG5cbkVMSydzIGNvb3JkaW5hdGUgc3lzdGVtIGlzIGRlc2NyaWJlZCBhdDpcbjxodHRwczovL2VjbGlwc2UuZGV2L2Vsay9kb2N1bWVudGF0aW9uL3Rvb2xkZXZlbG9wZXJzL2dyYXBoZGF0YXN0cnVjdHVyZS9jb29yZGluYXRlc3lzdGVtLmh0bWw+LlxuKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZUVsa0xheW91dChlbGs6IFN0eWxlZEVsa05vZGUpOiBHcmFwaExheW91dC5HcmFwaCB7XG4gICAgLy8gUGFyc2Ugbm9kZXMgZnJvbSB0aGUgY2hpbGRyZW4gb2YgdGhlIHJvb3QgRUxLIG5vZGUuXG4gICAgY29uc3Qgbm9kZXM6IEdyYXBoTGF5b3V0Lk5vZGVbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgY2hpbGQgb2YgZWxrLmNoaWxkcmVuID8/IFtdKSB7XG4gICAgICAgIGNvbnN0IHdpZHRoID0gY2hpbGQud2lkdGggPz8gMDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gY2hpbGQuaGVpZ2h0ID8/IDA7XG4gICAgICAgIG5vZGVzLnB1c2goe1xuICAgICAgICAgICAgaWQ6IGNoaWxkLmlkLFxuICAgICAgICAgICAgLy8gRUxLIHBvc2l0aW9ucyBhcmUgZnJvbSB0aGUgdG9wLWxlZnQgY29ybmVyOyBjb252ZXJ0IHRvIGNlbnRlci5cbiAgICAgICAgICAgIHBvczoge1xuICAgICAgICAgICAgICAgIHg6IChjaGlsZC54ID8/IDApICsgd2lkdGggLyAyLFxuICAgICAgICAgICAgICAgIHk6IChjaGlsZC55ID8/IDApICsgaGVpZ2h0IC8gMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIGxhYmVsOiBjaGlsZC5sYWJlbHM/LlswXT8udGV4dCxcbiAgICAgICAgICAgIGNzc0NsYXNzOiBjaGlsZC5jc3NDbGFzcyxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gUGFyc2UgZWRnZXMgb2YgdGhlIHJvb3QgRUxLIG5vZGUuXG4gICAgY29uc3QgZWRnZXM6IEdyYXBoTGF5b3V0LkVkZ2VbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgZWRnZSBvZiBlbGsuZWRnZXMgPz8gW10pIHtcbiAgICAgICAgY29uc3Qgc291cmNlID0gZWRnZS5zb3VyY2VzWzBdO1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBlZGdlLnRhcmdldHNbMF07XG4gICAgICAgIGludmFyaWFudChzb3VyY2UgJiYgdGFyZ2V0LCBcIkVkZ2Ugc2hvdWxkIGhhdmUgYSBzb3VyY2UgYW5kIHRhcmdldFwiKTtcblxuICAgICAgICBjb25zdCBzZWN0aW9ucyA9IGVkZ2Uuc2VjdGlvbnMgPz8gW107XG4gICAgICAgIGNvbnN0IGZpcnN0U2VjdGlvbiA9IHNlY3Rpb25zWzBdO1xuICAgICAgICBjb25zdCBsYXN0U2VjdGlvbiA9IHNlY3Rpb25zW3NlY3Rpb25zLmxlbmd0aCAtIDFdO1xuICAgICAgICBpbnZhcmlhbnQoZmlyc3RTZWN0aW9uICYmIGxhc3RTZWN0aW9uLCBcIkVkZ2Ugc2hvdWxkIGhhdmUgYXQgbGVhc3Qgb25lIHNlY3Rpb25cIik7XG5cbiAgICAgICAgY29uc3QgZWRnZUxhYmVsID0gZWRnZS5sYWJlbHM/LlswXTtcbiAgICAgICAgY29uc3QgbGFiZWxQb3MgPSBlZGdlTGFiZWxcbiAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgeDogKGVkZ2VMYWJlbC54ID8/IDApICsgKGVkZ2VMYWJlbC53aWR0aCA/PyAwKSAvIDIsXG4gICAgICAgICAgICAgICAgICB5OiAoZWRnZUxhYmVsLnkgPz8gMCkgKyAoZWRnZUxhYmVsLmhlaWdodCA/PyAwKSAvIDIsXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDogdW5kZWZpbmVkO1xuXG4gICAgICAgIGVkZ2VzLnB1c2goe1xuICAgICAgICAgICAgaWQ6IGVkZ2UuaWQsXG4gICAgICAgICAgICBzb3VyY2UsXG4gICAgICAgICAgICB0YXJnZXQsXG4gICAgICAgICAgICBsYWJlbDogZWRnZUxhYmVsPy50ZXh0LFxuICAgICAgICAgICAgc291cmNlUG9zOiBmaXJzdFNlY3Rpb24uc3RhcnRQb2ludCxcbiAgICAgICAgICAgIHRhcmdldFBvczogbGFzdFNlY3Rpb24uZW5kUG9pbnQsXG4gICAgICAgICAgICBsYWJlbFBvcyxcbiAgICAgICAgICAgIHBhdGg6IHNlY3Rpb25zVG9QYXRoKHNlY3Rpb25zKSxcbiAgICAgICAgICAgIGNzc0NsYXNzOiBlZGdlLmNzc0NsYXNzLFxuICAgICAgICAgICAgc3R5bGU6IGVkZ2UuYXJyb3dTdHlsZSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3Qgd2lkdGggPSBlbGsud2lkdGg7XG4gICAgY29uc3QgaGVpZ2h0ID0gZWxrLmhlaWdodDtcbiAgICByZXR1cm4geyB3aWR0aCwgaGVpZ2h0LCBub2RlcywgZWRnZXMgfTtcbn1cblxuLyoqIENvbnZlcnQgRUxLIGVkZ2Ugc2VjdGlvbnMgdG8gYW4gU1ZHIHBhdGguXG5cbk9wdGlvbmFsbHkgYXBwbGllcyBhbiBvZmZzZXQgdG8gYWxsIGNvb3JkaW5hdGVzLCB1c2VmdWwgZm9yIGhpZXJhcmNoaWNhbFxubGF5b3V0cyB3aGVyZSBlZGdlcyBhcmUgcmVsYXRpdmUgdG8gYSBwYXJlbnQgbm9kZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHNlY3Rpb25zVG9QYXRoKHNlY3Rpb25zOiBFbGtFZGdlU2VjdGlvbltdLCBvZmZzZXRYID0gMCwgb2Zmc2V0WSA9IDApOiBzdHJpbmcge1xuICAgIGNvbnN0IHN0bXRzOiBBcnJheTxzdHJpbmcgfCBudW1iZXI+ID0gW107XG4gICAgZm9yIChjb25zdCBzZWN0aW9uIG9mIHNlY3Rpb25zKSB7XG4gICAgICAgIHN0bXRzLnB1c2goXG4gICAgICAgICAgICBzdG10cy5sZW5ndGggPT09IDAgPyBcIk1cIiA6IFwiTFwiLFxuICAgICAgICAgICAgb2Zmc2V0WCArIHNlY3Rpb24uc3RhcnRQb2ludC54LFxuICAgICAgICAgICAgb2Zmc2V0WSArIHNlY3Rpb24uc3RhcnRQb2ludC55LFxuICAgICAgICApO1xuICAgICAgICBmb3IgKGNvbnN0IGJwIG9mIHNlY3Rpb24uYmVuZFBvaW50cyA/PyBbXSkge1xuICAgICAgICAgICAgc3RtdHMucHVzaChcIkxcIiwgb2Zmc2V0WCArIGJwLngsIG9mZnNldFkgKyBicC55KTtcbiAgICAgICAgfVxuICAgICAgICBzdG10cy5wdXNoKFwiTFwiLCBvZmZzZXRYICsgc2VjdGlvbi5lbmRQb2ludC54LCBvZmZzZXRZICsgc2VjdGlvbi5lbmRQb2ludC55KTtcbiAgICB9XG4gICAgcmV0dXJuIHN0bXRzLmpvaW4oXCIgXCIpO1xufVxuXG4vKiogUGFyc2UgdGhlIGxheW91dCBvZiBhbiBFTEsgcG9ydCByZWxhdGl2ZSB0byBhIHBhcmVudCBvZmZzZXQuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VFbGtQb3J0TGF5b3V0KHBvcnQ6IEVsa1BvcnQsIHBhcmVudFg6IG51bWJlciwgcGFyZW50WTogbnVtYmVyKTogRWxrUG9ydExheW91dCB7XG4gICAgY29uc3QgcG9ydExhYmVsID0gcG9ydC5sYWJlbHM/LlswXTtcbiAgICBjb25zdCBweCA9IHBhcmVudFggKyAocG9ydC54ID8/IDApO1xuICAgIGNvbnN0IHB5ID0gcGFyZW50WSArIChwb3J0LnkgPz8gMCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgeDogcHggKyAocG9ydC53aWR0aCA/PyAwKSAvIDIsXG4gICAgICAgIHk6IHB5ICsgKHBvcnQuaGVpZ2h0ID8/IDApIC8gMixcbiAgICAgICAgbGFiZWw6IHBvcnRMYWJlbD8udGV4dCA/PyBcIlwiLFxuICAgICAgICBsYWJlbFg6IHB4ICsgKHBvcnRMYWJlbD8ueCA/PyAwKSxcbiAgICAgICAgbGFiZWxZOiBweSArIChwb3J0TGFiZWw/LnkgPz8gMCkgKyAocG9ydExhYmVsPy5oZWlnaHQgPz8gMCkgLyAyLFxuICAgIH07XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVNZW1vLCBydW5XaXRoT3duZXIsIGdldE93bmVyIH0gZnJvbSBcInNvbGlkLWpzXCI7XG5pbXBvcnQgeyBhY2Nlc3MsIH0gZnJvbSBcIkBzb2xpZC1wcmltaXRpdmVzL3V0aWxzXCI7XG5jb25zdCBpc1JlYWN0aXZlT2JqZWN0ID0gKHZhbHVlKSA9PiB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiYgdmFsdWUgIT09IG51bGw7XG4vKipcbiAqIENhc2hlZCBvYmplY3QgZ2V0dGVycy5cbiAqIEBkZXNjcmlwdGlvbiBXaGVuIGEga2V5IGlzIGFjY2Vzc2VkIGZvciB0aGUgZmlyc3QgdGltZSwgdGhlIGBnZXRgIGZ1bmN0aW9uIGlzIGV4ZWN1dGVkLCBsYXRlciBhIGNhY2hlZCB2YWx1ZSBpcyB1c2VkIGluc3RlYWQuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVByb3h5Q2FjaGUob2JqLCBnZXQpIHtcbiAgICByZXR1cm4gbmV3IFByb3h5KHt9LCB7XG4gICAgICAgIGdldDogKHRhcmdldCwga2V5KSA9PiB7XG4gICAgICAgICAgICBpZiAoa2V5ID09PSBTeW1ib2wuaXRlcmF0b3IgfHwga2V5ID09PSBcImxlbmd0aFwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmdldChvYmosIGtleSk7XG4gICAgICAgICAgICBjb25zdCBzYXZlZCA9IFJlZmxlY3QuZ2V0KHRhcmdldCwga2V5KTtcbiAgICAgICAgICAgIGlmIChzYXZlZClcbiAgICAgICAgICAgICAgICByZXR1cm4gc2F2ZWQ7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGdldChrZXkpO1xuICAgICAgICAgICAgUmVmbGVjdC5zZXQodGFyZ2V0LCBrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiAoKSA9PiBmYWxzZSxcbiAgICB9KTtcbn1cbi8qKlxuICogRGVzdHJ1Y3R1cmVzIGFuIHJlYWN0aXZlIG9iamVjdCAqKGUuZy4gc3RvcmUgb3IgY29tcG9uZW50IHByb3BzKSogb3IgYSBzaWduYWwgb2Ygb25lIGludG8gYSB0dXBsZS9tYXAgb2Ygc2lnbmFscyBmb3IgZWFjaCBvYmplY3Qga2V5LlxuICogQHBhcmFtIHNvdXJjZSByZWFjdGl2ZSBvYmplY3Qgb3Igc2lnbmFsIHJldHVybmluZyBvbmVcbiAqIEBwYXJhbSBvcHRpb25zIG1lbW8gb3B0aW9ucyArIHByaW1pdGl2ZSBjb25maWd1cmF0aW9uOlxuICogLSBgbWVtb2AgLSB3cmFwcyBhY2Nlc3NvcnMgaW4gYGNyZWF0ZU1lbW9gLCBtYWtpbmcgZWFjaCBwcm9wZXJ0eSB1cGRhdGUgaW5kZXBlbmRlbnRseS4gKihlbmFibGVkIGJ5IGRlZmF1bHQgZm9yIHNpZ25hbCBzb3VyY2UpKlxuICogLSBgbGF6eWAgLSBwcm9wZXJ0eSBhY2Nlc3NvcnMgYXJlIGNyZWF0ZWQgb24ga2V5IHJlYWQuIGVuYWJsZSBpZiB5b3Ugd2FudCB0byBvbmx5IGEgc3Vic2V0IG9mIHNvdXJjZSBwcm9wZXJ0aWVzLCBvciB1c2UgcHJvcGVydGllcyBpbml0aWFsbHkgbWlzc2luZ1xuICogLSBgZGVlcGAgLSBkZXN0cnVjdHVyZSBuZXN0ZWQgb2JqZWN0c1xuICogQHJldHVybnMgb2JqZWN0IG9mIHRoZSBzYW1lIGtleXMgYXMgdGhlIHNvdXJjZSwgYnV0IHdpdGggdmFsdWVzIHR1cm5lZCBpbnRvIGFjY2Vzc29ycy5cbiAqIEBleGFtcGxlIC8vIHNwcmVhZCB0dXBsZXNcbiAqIGNvbnN0IFtmaXJzdCwgc2Vjb25kLCB0aGlyZF0gPSBkZXN0cnVjdHVyZSgoKSA9PiBbMSwyLDNdKVxuICogZmlyc3QoKSAvLyA9PiAxXG4gKiBzZWNvbmQoKSAvLyA9PiAyXG4gKiB0aGlyZCgpIC8vID0+IDNcbiAqIEBleGFtcGxlIC8vIHNwcmVhZCBvYmplY3RzXG4gKiBjb25zdCB7IG5hbWUsIGFnZSB9ID0gZGVzdHJ1Y3R1cmUoeyBuYW1lOiBcIkpvaG5cIiwgYWdlOiAzNiB9KVxuICogbmFtZSgpIC8vID0+IFwiSm9oblwiXG4gKiBhZ2UoKSAvLyA9PiAzNlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVzdHJ1Y3R1cmUoc291cmNlLCBvcHRpb25zKSB7XG4gICAgY29uc3QgY29uZmlnID0gb3B0aW9ucyA/PyB7fTtcbiAgICBjb25zdCBtZW1vID0gY29uZmlnLm1lbW8gPz8gdHlwZW9mIHNvdXJjZSA9PT0gXCJmdW5jdGlvblwiO1xuICAgIGNvbnN0IGdldHRlciA9IHR5cGVvZiBzb3VyY2UgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICA/IChrZXkpID0+ICgpID0+IHNvdXJjZSgpW2tleV1cbiAgICAgICAgOiAoa2V5KSA9PiAoKSA9PiBzb3VyY2Vba2V5XTtcbiAgICBjb25zdCBvYmogPSBhY2Nlc3Moc291cmNlKTtcbiAgICAvLyBsYXp5ICh1c2UgcHJveHkpXG4gICAgaWYgKGNvbmZpZy5sYXp5KSB7XG4gICAgICAgIGNvbnN0IG93bmVyID0gZ2V0T3duZXIoKTtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZVByb3h5Q2FjaGUob2JqLCBrZXkgPT4ge1xuICAgICAgICAgICAgY29uc3QgY2FsYyA9IGdldHRlcihrZXkpO1xuICAgICAgICAgICAgaWYgKGNvbmZpZy5kZWVwICYmIGlzUmVhY3RpdmVPYmplY3Qob2JqW2tleV0pKVxuICAgICAgICAgICAgICAgIHJldHVybiBydW5XaXRoT3duZXIob3duZXIsICgpID0+IGRlc3RydWN0dXJlKGNhbGMsIHsgLi4uY29uZmlnLCBtZW1vIH0pKTtcbiAgICAgICAgICAgIHJldHVybiBtZW1vID8gcnVuV2l0aE93bmVyKG93bmVyLCAoKSA9PiBjcmVhdGVNZW1vKGNhbGMsIHVuZGVmaW5lZCwgb3B0aW9ucykpIDogY2FsYztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIGVhZ2VyIChsb29wIGtleXMpXG4gICAgY29uc3QgcmVzdWx0ID0gQXJyYXkuaXNBcnJheShvYmopID8gW10gOiB7fTtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhvYmopKSB7XG4gICAgICAgIGNvbnN0IGNhbGMgPSBnZXR0ZXIoa2V5KTtcbiAgICAgICAgaWYgKGNvbmZpZy5kZWVwICYmIGlzUmVhY3RpdmVPYmplY3QodmFsdWUpKVxuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBkZXN0cnVjdHVyZShjYWxjLCB7IC4uLmNvbmZpZywgbWVtbyB9KTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmVzdWx0W2tleV0gPSBtZW1vID8gY3JlYXRlTWVtbyhjYWxjLCB1bmRlZmluZWQsIG9wdGlvbnMpIDogY2FsYztcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbiIsImltcG9ydCB0eXBlIHsgUG9pbnQgfSBmcm9tIFwiLi9ncmFwaF9sYXlvdXRcIjtcblxuLyoqIENhbGN1bGF0ZSBhIHBvc2l0aW9uIG9mZnNldCBwZXJwZW5kaWN1bGFyIHRvIHRoZSB2ZWN0b3IgZnJvbSBzb3VyY2UgdG8gdGFyZ2V0LlxuICpcbiAqIFRoaXMgaXMgdXNlZnVsIGZvciBwbGFjaW5nIGxhYmVscyBuZWFyIHRoZSB0YXJnZXQgb2YgYW4gZWRnZSwgb2Zmc2V0IHRvIHRoZSBzaWRlXG4gKiBzbyB0aGV5IGRvbid0IG92ZXJsYXAgd2l0aCB0aGUgZWRnZSBpdHNlbGYuXG4gKlxuICogQHBhcmFtIHNvdXJjZVBvcyAtIFRoZSBzb3VyY2UgcG9pbnRcbiAqIEBwYXJhbSB0YXJnZXRQb3MgLSBUaGUgdGFyZ2V0IHBvaW50XG4gKiBAcGFyYW0gb2Zmc2V0IC0gVGhlIHBlcnBlbmRpY3VsYXIgZGlzdGFuY2UgdG8gb2Zmc2V0IGZyb20gdGhlIHRhcmdldCAoZGVmYXVsdDogMTApXG4gKiBAcmV0dXJucyBBIHBvaW50IG9mZnNldCBmcm9tIHRoZSB0YXJnZXQgcGVycGVuZGljdWxhciB0byB0aGUgc291cmNlLXRhcmdldCB2ZWN0b3JcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBlcnBlbmRpY3VsYXJMYWJlbFBvc2l0aW9uKHNvdXJjZVBvczogUG9pbnQsIHRhcmdldFBvczogUG9pbnQsIG9mZnNldCA9IDEwKTogUG9pbnQge1xuICAgIGNvbnN0IHZlYyA9IHsgeDogdGFyZ2V0UG9zLnggLSBzb3VyY2VQb3MueCwgeTogdGFyZ2V0UG9zLnkgLSBzb3VyY2VQb3MueSB9O1xuICAgIGNvbnN0IHNjYWxlID0gb2Zmc2V0IC8gTWF0aC5zcXJ0KHZlYy54ICoqIDIgKyB2ZWMueSAqKiAyKTtcbiAgICByZXR1cm4geyB4OiB0YXJnZXRQb3MueCAtIHNjYWxlICogdmVjLnksIHk6IHRhcmdldFBvcy55ICsgc2NhbGUgKiB2ZWMueCB9O1xufVxuIiwiaW1wb3J0IHsgZGVzdHJ1Y3R1cmUgfSBmcm9tIFwiQHNvbGlkLXByaW1pdGl2ZXMvZGVzdHJ1Y3R1cmVcIjtcbmltcG9ydCB7XG4gICAgdHlwZSBDb21wb25lbnQsXG4gICAgY3JlYXRlVW5pcXVlSWQsXG4gICAgRm9yLFxuICAgIEluZGV4LFxuICAgIE1hdGNoLFxuICAgIHR5cGUgUGFyZW50UHJvcHMsXG4gICAgU2hvdyxcbiAgICBTd2l0Y2gsXG59IGZyb20gXCJzb2xpZC1qc1wiO1xuaW1wb3J0IHsgRHluYW1pYyB9IGZyb20gXCJzb2xpZC1qcy93ZWJcIjtcblxuaW1wb3J0IHR5cGUgKiBhcyBHcmFwaExheW91dCBmcm9tIFwiLi9ncmFwaF9sYXlvdXRcIjtcbmltcG9ydCB7IHBlcnBlbmRpY3VsYXJMYWJlbFBvc2l0aW9uIH0gZnJvbSBcIi4vbGFiZWxfcG9zaXRpb25cIjtcbmltcG9ydCB0eXBlIHsgQXJyb3dTdHlsZSwgU1ZHUmVmUHJvcCB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmltcG9ydCBcIi4vZ3JhcGhfc3ZnLmNzc1wiO1xuXG4vKiogRHJhdyBhIGdyYXBoIHdpdGggYSBsYXlvdXQgdXNpbmcgU1ZHLlxuICovXG5leHBvcnQgZnVuY3Rpb24gR3JhcGhTVkcocHJvcHM6IHsgZ3JhcGg6IEdyYXBoTGF5b3V0LkdyYXBoOyByZWY/OiBTVkdSZWZQcm9wIH0pIHtcbiAgICBjb25zdCBlZGdlTWFya2VycyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgbWFya2VycyA9IG5ldyBTZXQ8QXJyb3dNYXJrZXI+KCk7XG4gICAgICAgIGZvciAoY29uc3QgZWRnZSBvZiBwcm9wcy5ncmFwaC5lZGdlcykge1xuICAgICAgICAgICAgY29uc3QgbWFya2VyID0gc3R5bGVUb01hcmtlcltlZGdlLnN0eWxlID8/IFwiZGVmYXVsdFwiXTtcbiAgICAgICAgICAgIGlmIChtYXJrZXIpIHtcbiAgICAgICAgICAgICAgICBtYXJrZXJzLmFkZChtYXJrZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKG1hcmtlcnMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8c3ZnIHJlZj17cHJvcHMucmVmfSBjbGFzcz1cImdyYXBoXCIgd2lkdGg9e3Byb3BzLmdyYXBoLndpZHRofSBoZWlnaHQ9e3Byb3BzLmdyYXBoLmhlaWdodH0+XG4gICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgICA8SW5kZXggZWFjaD17ZWRnZU1hcmtlcnMoKX0+XG4gICAgICAgICAgICAgICAgICAgIHsobWFya2VyKSA9PiA8RHluYW1pYyBjb21wb25lbnQ9e2Fycm93TWFya2VyU1ZHW21hcmtlcigpXX0gLz59XG4gICAgICAgICAgICAgICAgPC9JbmRleD5cbiAgICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICAgIDxGb3IgZWFjaD17cHJvcHMuZ3JhcGguZWRnZXN9PnsoZWRnZSkgPT4gPEVkZ2VTVkcgZWRnZT17ZWRnZX0gLz59PC9Gb3I+XG4gICAgICAgICAgICA8Rm9yIGVhY2g9e3Byb3BzLmdyYXBoLm5vZGVzfT57KG5vZGUpID0+IDxOb2RlU1ZHIG5vZGU9e25vZGV9IC8+fTwvRm9yPlxuICAgICAgICA8L3N2Zz5cbiAgICApO1xufVxuXG4vKiogRHJhdyBhIGxhYmVsZWQgcmVjdGFuZ2xlIHdpdGggb3B0aW9uYWwgY2hpbGRyZW4sIHBvc2l0aW9uZWQgYnkgdG9wLWxlZnQgY29ybmVyLlxuXG5BIHJldXNhYmxlIFNWRyBwcmltaXRpdmUgZm9yIHJlbmRlcmluZyBib3hlcyB3aXRoIGNlbnRlcmVkIGxhYmVscy5cblVzZWQgYnkgYE5vZGVTVkdgIGZvciBncmFwaCBub2RlcyBhbmQgYXZhaWxhYmxlIGZvciBvdGhlciB2aXN1YWxpemF0aW9uc1xubGlrZSBVV0QgYm94ZXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBMYWJlbGVkUmVjdChcbiAgICBwcm9wczogUGFyZW50UHJvcHM8e1xuICAgICAgICB4OiBudW1iZXI7XG4gICAgICAgIHk6IG51bWJlcjtcbiAgICAgICAgd2lkdGg6IG51bWJlcjtcbiAgICAgICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgICAgIGxhYmVsPzogc3RyaW5nO1xuICAgICAgICBjbGFzcz86IHN0cmluZztcbiAgICAgICAgbGFiZWxDbGFzcz86IHN0cmluZztcbiAgICB9Pixcbikge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxnIGNsYXNzPXtwcm9wcy5jbGFzc30+XG4gICAgICAgICAgICA8cmVjdCB4PXtwcm9wcy54fSB5PXtwcm9wcy55fSB3aWR0aD17cHJvcHMud2lkdGh9IGhlaWdodD17cHJvcHMuaGVpZ2h0fSAvPlxuICAgICAgICAgICAgPFNob3cgd2hlbj17cHJvcHMubGFiZWx9PlxuICAgICAgICAgICAgICAgIDx0ZXh0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPXtwcm9wcy5sYWJlbENsYXNzID8/IFwibGFiZWxcIn1cbiAgICAgICAgICAgICAgICAgICAgeD17cHJvcHMueCArIHByb3BzLndpZHRoIC8gMn1cbiAgICAgICAgICAgICAgICAgICAgeT17cHJvcHMueSArIHByb3BzLmhlaWdodCAvIDJ9XG4gICAgICAgICAgICAgICAgICAgIGRvbWluYW50LWJhc2VsaW5lPVwibWlkZGxlXCJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbmNob3I9XCJtaWRkbGVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmxhYmVsfVxuICAgICAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICAgIDwvU2hvdz5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9nPlxuICAgICk7XG59XG5cbi8qKiBEcmF3IGEgbm9kZSB3aXRoIGEgbGF5b3V0IHVzaW5nIFNWRy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE5vZGVTVkcocHJvcHM6IHsgbm9kZTogR3JhcGhMYXlvdXQuTm9kZSB9KSB7XG4gICAgY29uc3Qge1xuICAgICAgICBub2RlOiB7XG4gICAgICAgICAgICBwb3M6IHsgeCwgeSB9LFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgIH0sXG4gICAgfSA9IGRlc3RydWN0dXJlKHByb3BzLCB7IGRlZXA6IHRydWUgfSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8TGFiZWxlZFJlY3RcbiAgICAgICAgICAgIHg9e3goKSAtIHdpZHRoKCkgLyAyfVxuICAgICAgICAgICAgeT17eSgpIC0gaGVpZ2h0KCkgLyAyfVxuICAgICAgICAgICAgd2lkdGg9e3dpZHRoKCl9XG4gICAgICAgICAgICBoZWlnaHQ9e2hlaWdodCgpfVxuICAgICAgICAgICAgbGFiZWw9e3Byb3BzLm5vZGUubGFiZWx9XG4gICAgICAgICAgICBjbGFzcz17cHJvcHMubm9kZS5jc3NDbGFzcyA/PyBcIm5vZGVcIn1cbiAgICAgICAgLz5cbiAgICApO1xufVxuXG4vKiogRHJhdyBhbiBlZGdlIHdpdGggYSBsYXlvdXQgdXNpbmcgU1ZHLlxuICovXG5leHBvcnQgZnVuY3Rpb24gRWRnZVNWRyhwcm9wczogeyBlZGdlOiBHcmFwaExheW91dC5FZGdlIH0pIHtcbiAgICBjb25zdCB7XG4gICAgICAgIGVkZ2U6IHsgcGF0aCB9LFxuICAgIH0gPSBkZXN0cnVjdHVyZShwcm9wcywgeyBkZWVwOiB0cnVlIH0pO1xuXG4gICAgY29uc3QgbWFya2VyVXJsID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBzdHlsZSA9IHByb3BzLmVkZ2Uuc3R5bGUgPz8gXCJkZWZhdWx0XCI7XG4gICAgICAgIGNvbnN0IG1hcmtlciA9IHN0eWxlVG9NYXJrZXJbc3R5bGVdO1xuICAgICAgICByZXR1cm4gYHVybCgjYXJyb3doZWFkLSR7bWFya2VyfSlgO1xuICAgIH07XG5cbiAgICBjb25zdCBjb21wb25lbnRJZCA9IGNyZWF0ZVVuaXF1ZUlkKCk7XG4gICAgY29uc3QgcGF0aElkID0gKCkgPT4gYGVkZ2UtcGF0aC0ke2NvbXBvbmVudElkfWA7XG4gICAgY29uc3QgZGVmYXVsdFBhdGggPSAoKSA9PiA8cGF0aCBpZD17cGF0aElkKCl9IG1hcmtlci1lbmQ9e21hcmtlclVybCgpfSBkPXtwYXRoKCl9IC8+O1xuXG4gICAgY29uc3QgdGd0TGFiZWwgPSAodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgICAgIC8vIFBsYWNlIHRoZSB0YXJnZXQgbGFiZWwgb2Zmc2V0IGZyb20gdGhlIHRhcmdldCBpbiB0aGUgZGlyZWN0aW9uXG4gICAgICAgIC8vIG9ydGhvZ29uYWwgdG8gdGhlIHZlY3RvciBmcm9tIHRoZSBzb3VyY2UgdG8gdGhlIHRhcmdldC5cbiAgICAgICAgY29uc3QgcG9zID0gcGVycGVuZGljdWxhckxhYmVsUG9zaXRpb24ocHJvcHMuZWRnZS5zb3VyY2VQb3MsIHByb3BzLmVkZ2UudGFyZ2V0UG9zKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwibGFiZWxcIiB4PXtwb3MueH0geT17cG9zLnl9IGRvbWluYW50LWJhc2VsaW5lPVwibWlkZGxlXCIgdGV4dC1hbmNob3I9XCJtaWRkbGVcIj5cbiAgICAgICAgICAgICAgICB7dGV4dH1cbiAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGcgY2xhc3M9e3Byb3BzLmVkZ2UuY3NzQ2xhc3MgPz8gXCJlZGdlXCJ9PlxuICAgICAgICAgICAgPFN3aXRjaCBmYWxsYmFjaz17ZGVmYXVsdFBhdGgoKX0+XG4gICAgICAgICAgICAgICAgPE1hdGNoIHdoZW49e3Byb3BzLmVkZ2Uuc3R5bGUgPT09IFwiZG91YmxlXCJ9PlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImRvdWJsZS1vdXRlclwiIGQ9e3BhdGgoKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJkb3VibGUtaW5uZXJcIiBkPXtwYXRoKCl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiZG91YmxlLW1hcmtlclwiIG1hcmtlci1lbmQ9e21hcmtlclVybCgpfSBkPXtwYXRoKCl9IC8+XG4gICAgICAgICAgICAgICAgPC9NYXRjaD5cbiAgICAgICAgICAgICAgICA8TWF0Y2ggd2hlbj17cHJvcHMuZWRnZS5zdHlsZSA9PT0gXCJwbHVzXCJ9PlxuICAgICAgICAgICAgICAgICAgICB7ZGVmYXVsdFBhdGgoKX1cbiAgICAgICAgICAgICAgICAgICAge3RndExhYmVsKFwiK1wiKX1cbiAgICAgICAgICAgICAgICA8L01hdGNoPlxuICAgICAgICAgICAgICAgIDxNYXRjaCB3aGVuPXtwcm9wcy5lZGdlLnN0eWxlID09PSBcIm1pbnVzXCJ9PlxuICAgICAgICAgICAgICAgICAgICB7ZGVmYXVsdFBhdGgoKX1cbiAgICAgICAgICAgICAgICAgICAge3RndExhYmVsKFwiLVwiKX1cbiAgICAgICAgICAgICAgICA8L01hdGNoPlxuICAgICAgICAgICAgICAgIDxNYXRjaCB3aGVuPXtwcm9wcy5lZGdlLnN0eWxlID09PSBcImluZGV0ZXJtaW5hdGVcIn0+XG4gICAgICAgICAgICAgICAgICAgIHtkZWZhdWx0UGF0aCgpfVxuICAgICAgICAgICAgICAgICAgICB7dGd0TGFiZWwoXCI/XCIpfVxuICAgICAgICAgICAgICAgIDwvTWF0Y2g+XG4gICAgICAgICAgICAgICAgPE1hdGNoIHdoZW49e3Byb3BzLmVkZ2Uuc3R5bGUgPT09IFwicGx1c0NhZXN1cmFcIn0+XG4gICAgICAgICAgICAgICAgICAgIHtkZWZhdWx0UGF0aCgpfVxuICAgICAgICAgICAgICAgICAgICB7dGd0TGFiZWwoXCIrXCIpfVxuICAgICAgICAgICAgICAgICAgICA8dGV4dCBzdHlsZT17eyBcImRvbWluYW50LWJhc2VsaW5lXCI6IFwiY2VudHJhbFwiIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRQYXRoIGhyZWY9e2AjJHtwYXRoSWQoKX1gfSBzdGFydE9mZnNldD1cIjQwJVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcIuKAllwifVxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0UGF0aD5cbiAgICAgICAgICAgICAgICAgICAgPC90ZXh0PlxuICAgICAgICAgICAgICAgIDwvTWF0Y2g+XG4gICAgICAgICAgICAgICAgPE1hdGNoIHdoZW49e3Byb3BzLmVkZ2Uuc3R5bGUgPT09IFwibWludXNDYWVzdXJhXCJ9PlxuICAgICAgICAgICAgICAgICAgICB7ZGVmYXVsdFBhdGgoKX1cbiAgICAgICAgICAgICAgICAgICAge3RndExhYmVsKFwiLVwiKX1cbiAgICAgICAgICAgICAgICAgICAgPHRleHQgc3R5bGU9e3sgXCJkb21pbmFudC1iYXNlbGluZVwiOiBcImNlbnRyYWxcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0UGF0aCBocmVmPXtgIyR7cGF0aElkKCl9YH0gc3RhcnRPZmZzZXQ9XCI0MCVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCLigJZcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dFBhdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICAgICAgICA8L01hdGNoPlxuICAgICAgICAgICAgICAgIDxNYXRjaCB3aGVuPXtwcm9wcy5lZGdlLnN0eWxlID09PSBcInNjYWxhclwifT5cbiAgICAgICAgICAgICAgICAgICAge2RlZmF1bHRQYXRoKCl9XG4gICAgICAgICAgICAgICAgICAgIHt0Z3RMYWJlbChcIuKInVwiKX1cbiAgICAgICAgICAgICAgICA8L01hdGNoPlxuICAgICAgICAgICAgPC9Td2l0Y2g+XG4gICAgICAgICAgICA8U2hvdyB3aGVuPXtwcm9wcy5lZGdlLmxhYmVsfT5cbiAgICAgICAgICAgICAgICA8dGV4dFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgeD17cHJvcHMuZWRnZS5sYWJlbFBvcz8ueH1cbiAgICAgICAgICAgICAgICAgICAgeT17cHJvcHMuZWRnZS5sYWJlbFBvcz8ueX1cbiAgICAgICAgICAgICAgICAgICAgZG9taW5hbnQtYmFzZWxpbmU9XCJtaWRkbGVcIlxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFuY2hvcj1cIm1pZGRsZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZWRnZS5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgICA8L1Nob3c+XG4gICAgICAgIDwvZz5cbiAgICApO1xufVxuXG4vKiogU1ZHIG1hcmtlciBmb3IgYSBzdGFuZGFyZCBWLXNoYXBlZCBhcnJvd2hlYWQuXG4gKi9cbmNvbnN0IFZlZU1hcmtlciA9IChwcm9wczogeyBpZDogc3RyaW5nOyBvZmZzZXQ/OiBudW1iZXIgfSkgPT4gKFxuICAgIDxtYXJrZXJcbiAgICAgICAgaWQ9e3Byb3BzLmlkfVxuICAgICAgICB2aWV3Qm94PVwiMCAwIDUgMTBcIlxuICAgICAgICByZWZYPXs1ICsgKHByb3BzLm9mZnNldCA/PyAwKX1cbiAgICAgICAgcmVmWT1cIjVcIlxuICAgICAgICBtYXJrZXJXaWR0aD1cIjEwXCJcbiAgICAgICAgbWFya2VySGVpZ2h0PVwiMTBcIlxuICAgICAgICBvcmllbnQ9XCJhdXRvLXN0YXJ0LXJldmVyc2VcIlxuICAgID5cbiAgICAgICAgPHBhdGggZD1cIk0gMCAyIEwgNSA1IEwgMCA4XCIgLz5cbiAgICA8L21hcmtlcj5cbik7XG5cbi8qKiBTVkcgbWFya2VyIGZvciBhIHRyaWFuZ3VsYXIgYXJyb3cgaGVhZC5cblxuU291cmNlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9TVkcvRWxlbWVudC9tYXJrZXJcbiAqL1xuY29uc3QgVHJpYW5nbGVNYXJrZXIgPSAocHJvcHM6IHsgaWQ6IHN0cmluZyB9KSA9PiAoXG4gICAgPG1hcmtlclxuICAgICAgICBpZD17cHJvcHMuaWR9XG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMTAgMTBcIlxuICAgICAgICByZWZYPVwiMTBcIlxuICAgICAgICByZWZZPVwiNVwiXG4gICAgICAgIG1hcmtlcldpZHRoPVwiNlwiXG4gICAgICAgIG1hcmtlckhlaWdodD1cIjZcIlxuICAgICAgICBvcmllbnQ9XCJhdXRvLXN0YXJ0LXJldmVyc2VcIlxuICAgID5cbiAgICAgICAgPHBhdGggZD1cIk0gMCAwIEwgMTAgNSBMIDAgMTAgelwiIC8+XG4gICAgPC9tYXJrZXI+XG4pO1xuXG4vKiogU1ZHIG1hcmtlciBmb3IgYSBmbGF0IGFycm93IGhlYWQsIGdpdmluZyBhIFwiVC1zaGFwZWRcIiBhcnJvdy5cbiAqL1xuY29uc3QgRmxhdE1hcmtlciA9IChwcm9wczogeyBpZDogc3RyaW5nIH0pID0+IChcbiAgICA8bWFya2VyXG4gICAgICAgIGlkPXtwcm9wcy5pZH1cbiAgICAgICAgdmlld0JveD1cIjAgMCA1IDEwXCJcbiAgICAgICAgcmVmWD1cIjVcIlxuICAgICAgICByZWZZPVwiNVwiXG4gICAgICAgIG1hcmtlcldpZHRoPVwiMTBcIlxuICAgICAgICBtYXJrZXJIZWlnaHQ9XCIxMFwiXG4gICAgICAgIG9yaWVudD1cImF1dG8tc3RhcnQtcmV2ZXJzZVwiXG4gICAgPlxuICAgICAgICA8cGF0aCBkPVwiTSA1IDAgTCA1IDEwXCIgLz5cbiAgICA8L21hcmtlcj5cbik7XG5cbi8qKiBTdXBwb3J0ZWQgbWFya2VycyBzZXJ2aW5nIGFzIGFycm93aGVhZHMuXG4gKi9cbmV4cG9ydCB0eXBlIEFycm93TWFya2VyID0gXCJ2ZWVcIiB8IFwiZG91YmxlXCIgfCBcInRyaWFuZ2xlXCIgfCBcImZsYXRcIjtcblxuY29uc3Qgc3R5bGVUb01hcmtlcjogUmVjb3JkPEFycm93U3R5bGUsIEFycm93TWFya2VyIHwgbnVsbD4gPSB7XG4gICAgZGVmYXVsdDogXCJ2ZWVcIixcbiAgICBkb3VibGU6IFwiZG91YmxlXCIsXG4gICAgZmxhdDogXCJmbGF0XCIsXG4gICAgdW5tYXJrZWQ6IG51bGwsXG4gICAgcGx1czogXCJ0cmlhbmdsZVwiLFxuICAgIG1pbnVzOiBcInRyaWFuZ2xlXCIsXG4gICAgaW5kZXRlcm1pbmF0ZTogXCJ0cmlhbmdsZVwiLFxuICAgIHBsdXNDYWVzdXJhOiBcInRyaWFuZ2xlXCIsXG4gICAgbWludXNDYWVzdXJhOiBcInRyaWFuZ2xlXCIsXG4gICAgc2NhbGFyOiBcInRyaWFuZ2xlXCIsXG59O1xuXG4vKiogU1ZHIG1hcmtlcnMgZm9yIGFycm93IGhlYWRzLlxuICovXG5leHBvcnQgY29uc3QgYXJyb3dNYXJrZXJTVkc6IFJlY29yZDxBcnJvd01hcmtlciwgQ29tcG9uZW50PiA9IHtcbiAgICB2ZWU6ICgpID0+IDxWZWVNYXJrZXIgaWQ9XCJhcnJvd2hlYWQtdmVlXCIgLz4sXG4gICAgZG91YmxlOiAoKSA9PiA8VmVlTWFya2VyIGlkPVwiYXJyb3doZWFkLWRvdWJsZVwiIG9mZnNldD17LTJ9IC8+LFxuICAgIHRyaWFuZ2xlOiAoKSA9PiA8VHJpYW5nbGVNYXJrZXIgaWQ9XCJhcnJvd2hlYWQtdHJpYW5nbGVcIiAvPixcbiAgICBmbGF0OiAoKSA9PiA8RmxhdE1hcmtlciBpZD1cImFycm93aGVhZC1mbGF0XCIgLz4sXG59O1xuIiwiaW1wb3J0IHR5cGUgeyBFTEssIEVsa0xheW91dEFyZ3VtZW50cywgRWxrTm9kZSB9IGZyb20gXCJlbGtqc1wiO1xuaW1wb3J0IHsgdHlwZSBBY2Nlc3NvciwgdHlwZSBDb21wb25lbnQsIGNyZWF0ZVJlc291cmNlLCB0eXBlIEpTWCwgU2hvdyB9IGZyb20gXCJzb2xpZC1qc1wiO1xuaW1wb3J0IHsgRHluYW1pYyB9IGZyb20gXCJzb2xpZC1qcy93ZWJcIjtcblxuaW1wb3J0IHsgbG9hZEVsaywgcGFyc2VFbGtMYXlvdXQgfSBmcm9tIFwiLi9lbGtcIjtcbmltcG9ydCB0eXBlICogYXMgR3JhcGhMYXlvdXQgZnJvbSBcIi4vZ3JhcGhfbGF5b3V0XCI7XG5pbXBvcnQgeyBHcmFwaFNWRyB9IGZyb20gXCIuL2dyYXBoX3N2Z1wiO1xuaW1wb3J0IHR5cGUgeyBTVkdSZWZQcm9wIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuLyoqIFZpc3VhbGl6ZSBhIGdyYXBoIHVzaW5nIEVMSyBhbmQgU1ZHLlxuXG5UaGUgbGF5b3V0IGlzIHBlcmZvcm1lZCBieSBFTEsgYW5kIHRoZW4gdGhlIHJlbmRlcmluZyBpcyBkb25lIGJ5IFNWRy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEVsa1NWRyhwcm9wczoge1xuICAgIGdyYXBoPzogRWxrTm9kZTtcbiAgICBhcmdzPzogRWxrTGF5b3V0QXJndW1lbnRzO1xuICAgIHJlbmRlcmVyPzogQ29tcG9uZW50PHsgZ3JhcGg6IEdyYXBoTGF5b3V0LkdyYXBoOyByZWY/OiBTVkdSZWZQcm9wIH0+O1xuICAgIHJlZj86IFNWR1JlZlByb3A7XG59KSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEVsa0xheW91dCBncmFwaD17cHJvcHMuZ3JhcGh9IGFyZ3M9e3Byb3BzLmFyZ3N9IGVsa1RvTGF5b3V0PXtwYXJzZUVsa0xheW91dH0+XG4gICAgICAgICAgICB7KGdyYXBoKSA9PiAoXG4gICAgICAgICAgICAgICAgPER5bmFtaWMgY29tcG9uZW50PXtwcm9wcy5yZW5kZXJlciA/PyBHcmFwaFNWR30gZ3JhcGg9e2dyYXBoKCl9IHJlZj17cHJvcHMucmVmfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgPC9FbGtMYXlvdXQ+XG4gICAgKTtcbn1cblxuLyoqIFJ1biBhbiBFTEsgbGF5b3V0IGFuZCByZW5kZXIgdGhlIHJlc3VsdC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEVsa0xheW91dDxUPihwcm9wczoge1xuICAgIGdyYXBoPzogRWxrTm9kZTtcbiAgICBhcmdzPzogRWxrTGF5b3V0QXJndW1lbnRzO1xuICAgIGVsa1RvTGF5b3V0OiAoZTogRWxrTm9kZSkgPT4gVDtcbiAgICBjaGlsZHJlbjogKGxheW91dDogQWNjZXNzb3I8VD4pID0+IEpTWC5FbGVtZW50O1xufSkge1xuICAgIGNvbnN0IFtlbGtSZXNvdXJjZV0gPSBjcmVhdGVSZXNvdXJjZShsb2FkRWxrKTtcblxuICAgIGNvbnN0IFtsYXlvdXRdID0gY3JlYXRlUmVzb3VyY2UoXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsayA9IGVsa1Jlc291cmNlKCk7XG4gICAgICAgICAgICBjb25zdCBncmFwaCA9IHByb3BzLmdyYXBoO1xuICAgICAgICAgICAgY29uc3QgYXJncyA9IHByb3BzLmFyZ3M7XG4gICAgICAgICAgICBjb25zdCBlbGtUb0xheW91dCA9IHByb3BzLmVsa1RvTGF5b3V0O1xuICAgICAgICAgICAgaWYgKGVsayAmJiBncmFwaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbZWxrLCBncmFwaCwgYXJncywgZWxrVG9MYXlvdXRdIGFzIGNvbnN0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBhc3luYyAoW2VsaywgZ3JhcGgsIGFyZ3MsIGVsa1RvTGF5b3V0XTogcmVhZG9ubHkgW1xuICAgICAgICAgICAgRUxLLFxuICAgICAgICAgICAgRWxrTm9kZSxcbiAgICAgICAgICAgIEVsa0xheW91dEFyZ3VtZW50cyB8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIChlOiBFbGtOb2RlKSA9PiBULFxuICAgICAgICBdKTogUHJvbWlzZTxUPiA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGtOb2RlID0gYXdhaXQgZWxrLmxheW91dChncmFwaCwgYXJncyk7XG4gICAgICAgICAgICByZXR1cm4gZWxrVG9MYXlvdXQoZWxrTm9kZSk7XG4gICAgICAgIH0sXG4gICAgKTtcblxuICAgIHJldHVybiA8U2hvdyB3aGVuPXtsYXlvdXQoKX0+eyhsKSA9PiBwcm9wcy5jaGlsZHJlbihsKX08L1Nob3c+O1xufVxuIiwiaW1wb3J0IERvd25sb2FkIGZyb20gXCJsdWNpZGUtc29saWQvaWNvbnMvZG93bmxvYWRcIjtcbmltcG9ydCB0eXBlIHsgSlNYIH0gZnJvbSBcInNvbGlkLWpzXCI7XG5cbmltcG9ydCB7IEljb25CdXR0b24gfSBmcm9tIFwiY2F0Y29sYWItdWktY29tcG9uZW50c1wiO1xuXG4vKiogQnV0dG9uIHRvIGRvd25sb2FkIGFuIFNWRyB3aXRoIGVtYmVkZGVkIGZvbnRzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIERvd25sb2FkU1ZHQnV0dG9uKHByb3BzOiB7XG4gICAgc3ZnPzogU1ZHU1ZHRWxlbWVudDtcbiAgICBmaWxlbmFtZT86IHN0cmluZztcbiAgICB0b29sdGlwPzogSlNYLkVsZW1lbnQgfCBzdHJpbmc7XG4gICAgc2l6ZT86IG51bWJlcjtcbn0pIHtcbiAgICBjb25zdCBkb3dubG9hZCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYgKHByb3BzLnN2Zykge1xuICAgICAgICAgICAgY29uc3QgeyBkb3dubG9hZFNWRyB9ID0gYXdhaXQgaW1wb3J0KFwiLi9leHBvcnRfc3ZnXCIpO1xuICAgICAgICAgICAgYXdhaXQgZG93bmxvYWRTVkcocHJvcHMuc3ZnLCBwcm9wcy5maWxlbmFtZSA/PyBcImV4cG9ydC5zdmdcIik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17ZG93bmxvYWR9IGRpc2FibGVkPXshcHJvcHMuc3ZnfSB0b29sdGlwPXtwcm9wcy50b29sdGlwfT5cbiAgICAgICAgICAgIDxEb3dubG9hZCBzaXplPXtwcm9wcy5zaXplfSAvPlxuICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgKTtcbn1cbiJdLCJmaWxlIjoiYXNzZXRzL2dyYXBoX3Zpc3VhbGl6YXRpb24tQ25WWFIzLXUuanMifQ==