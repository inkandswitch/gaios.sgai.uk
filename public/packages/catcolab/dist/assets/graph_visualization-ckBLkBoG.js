const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./main-DvJq-S6x.js","./analysis_tool-Bvgm6Cie.js","./document-BaPUF-Ky.js","./notebook-DqARNRKu.js","./model-B9uNSW6J.js","./index-CvS5Jq0z.js","./export_svg-zr-PMrUb.js","./file-download-BtjDXlSk.js"])))=>i.map(i=>d[i]);
import { template, insert, createComponent, effect, setAttribute, memo, use, Dynamic } from 'solid-js/web';
import { getOwner, createMemo, runWithOwner, Show, createUniqueId, Switch, Match, Index, For, createResource } from 'solid-js';
import { _ as __vitePreload } from './index-CvS5Jq0z.js';
import { i as invariant } from './document-BaPUF-Ky.js';
import { f as access, a as IconButton } from './analysis_tool-Bvgm6Cie.js';
import './pde_plot-Ce9tSlMP.js';
import { d as download_default } from './download-Bv6ia3zn.js';

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
  const ELK = (await __vitePreload(async () => { const {default: __vite_default__} = await import('./main-DvJq-S6x.js').then(n => n.m);return { default: __vite_default__ }},true?__vite__mapDeps([0,1,2,3,4,5]):undefined,import.meta.url)).default;
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
      } = await import('./export_svg-zr-PMrUb.js');return {
        downloadSVG
      }},true?__vite__mapDeps([6,7,1,2,3,4,5]):undefined,import.meta.url);
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


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBTU8sU0FBUyxXQUFzQjtBQUNsQyxDQUFNLGFBQVEsa0JBQWlCLFVBQVMsZUFBZTtBQUN2RCxDQUFNLG9CQUFlLFlBQVcsT0FBTSxRQUFRO0FBQzlDLFFBQU8sR0FBRyxhQUFZLE1BQU0sS0FBTSxrQkFBaUIsQ0FBYSxhQUFDO0FBQ3JFO0FBTU8sU0FBUyxXQUFzQjtBQUNsQyxDQUFNLGFBQVEsa0JBQWlCLFVBQVMsZUFBZTtBQUN2RCxDQUFNLG9CQUFlLFlBQVcsT0FBTSxRQUFRO0FBQzlDLFFBQU8sR0FBRyxhQUFZLE1BQU0sS0FBTSxrQkFBaUIsQ0FBYSxhQUFDO0FBQ3JFO0FBUWdCLHFCQUNaLE1BQ0EsUUFDQSxJQUNpQztBQUNqQyxDQUFNLGVBQVUsUUFBTyxZQUFXLElBQUk7QUFDdEMsWUFBVSxPQUErQztBQUN6RCxVQUFRLElBQU87QUFDZixDQUFNLGVBQVUsU0FBUSxhQUFZLElBQUk7QUFDeEMsRUFBTztBQUFBLElBQ0gsT0FBTyxPQUFRO0FBQUEsSUFDZixPQUFRLFFBQVEseUJBQXdCLE9BQVE7QUFBQSxDQUNwRDtBQUNKOztBQ3NCTyxNQUFNLFFBQVc7QUFpQnhCLEtBQU0sWUFBYztBQU9KLG9CQUFXLE9BQXdCLGFBQXdDO0FBQ3ZGLENBQU0sY0FBUyxVQUFTLGVBQWMsUUFBUTtBQUM5QyxPQUFNLGFBQWMsYUFBWTtBQUNoQyxPQUFNLGVBQWdCLGFBQVk7QUFFbEMsUUFBTSxRQUE0QixTQUFNLEtBQU0sS0FBSSxDQUFDLElBQVM7QUFDeEQsSUFBSSxZQUFRLEtBQUssWUFBZ0I7QUFDakMsSUFBSSxhQUFTLEtBQUssYUFBaUI7QUFDbkMsTUFBSSxPQUFLLEtBQU87QUFDWixDQUFNLGdCQUFPLE1BQUssZ0JBQWUsYUFBZ0I7QUFDakQsV0FBTSxLQUFPLGVBQVksTUFBUSxPQUFLLE1BQU8sS0FBSTtBQUNqRCxjQUFRLEtBQUssR0FBSSxPQUFPLEtBQUssU0FBUSxJQUFJLFdBQVc7QUFDcEQsZUFBUyxLQUFLLEdBQUksUUFBUSxLQUFLLFVBQVMsSUFBSSxXQUFXO0FBQUE7QUFFM0QsSUFBTztBQUFBLE1BQ0gsSUFBSSxJQUFLO0FBQUEsTUFDVCxPQUFRLEtBQUssU0FBUSxDQUFDLEVBQUUsTUFBTSxJQUFLLE9BQU8sS0FBSSxDQUFDO0FBQUEsTUFDL0M7QUFBQSxNQUNBO0FBQUEsQ0FDQSxjQUFVLEtBQUs7QUFBQSxDQUNuQjtBQUFBLEdBQ0g7QUFFRCxRQUFNLEtBQXlCLFNBQU0sS0FBTSxLQUFJLENBQUMsSUFBUztBQUNyRCxJQUFJO0FBQ0osTUFBSSxPQUFLLEtBQU87QUFDWixDQUFNLGdCQUFPLE1BQUssZ0JBQWUsYUFBZ0I7QUFDakQsTUFBTSxPQUFFLE9BQU8sT0FBTyxHQUFJLGNBQVksTUFBUSxPQUFLLE9BQU8sSUFBSTtBQUM5RCxjQUFRLENBQUUsTUFBTSxLQUFLLE9BQU8sT0FBTyxPQUFPO0FBQUE7QUFFOUMsSUFBTztBQUFBLE1BQ0gsSUFBSSxJQUFLO0FBQUEsTUFDVCxRQUFTLEVBQUMsS0FBSyxNQUFNO0FBQUEsTUFDckIsUUFBUyxFQUFDLEtBQUssTUFBTTtBQUFBLENBQ3JCLFdBQVEsVUFBUSxDQUFDLEtBQUssSUFBSSxDQUFDO0FBQUEsTUFDM0IsVUFBVSxJQUFLO0FBQUEsQ0FDZixnQkFBWSxLQUFLO0FBQUEsQ0FDckI7QUFBQSxHQUNIO0FBRUQsU0FBTyxDQUFFLElBQUksT0FBUSxXQUFVLE9BQU8sY0FBYztBQUN4RDtBQUdBLGVBQXNCLE9BQVU7QUFDNUIsUUFBTSxHQUFPLCtFQUFNLFFBQU8sb0JBQU8scUhBQUc7QUFDcEMsU0FBTyxHQUFJLElBQUk7QUFDbkI7QUFpQk8sUUFBUyxnQkFBZSxHQUF1QztBQUVsRSxRQUFNLFFBQTRCLENBQUM7QUFDbkMsYUFBVyxLQUFTLFFBQUksUUFBWSxNQUFJO0FBQ3BDLElBQU1BLGVBQVEsTUFBTSxLQUFTO0FBQzdCLElBQU1DLGdCQUFTLE1BQU0sTUFBVTtBQUMvQixVQUFNLElBQUs7QUFBQSxNQUNQLElBQUksS0FBTTtBQUFBO0FBQUEsTUFFVixHQUFLO0FBQUEsQ0FDRCxRQUFJLFNBQU0sQ0FBSyxTQUFLRCxNQUFRO0FBQUEsQ0FDNUIsUUFBSSxTQUFNLENBQUssTUFBS0MsVUFBUztBQUFBLENBQ2pDO0FBQUEsQ0FDQSxVQUFBRDtBQUFBLENBQ0EsV0FBQUM7QUFBQSxDQUNBLFVBQU8sUUFBTSxNQUFTLElBQUMsQ0FBRztBQUFBLENBQzFCLGNBQVUsTUFBTTtBQUFBLEtBQ25CO0FBQUE7QUFJTCxRQUFNLFFBQTRCLENBQUM7QUFDbkMsYUFBVyxJQUFRLFFBQUksS0FBUyxNQUFJO0FBQ2hDLENBQU0sZ0JBQVMsTUFBSyxTQUFRLENBQUM7QUFDN0IsQ0FBTSxnQkFBUyxNQUFLLFNBQVEsQ0FBQztBQUM3QixJQUFVLG9CQUFVLE1BQThDO0FBRWxFLElBQU0saUJBQVcsSUFBSyxhQUFZLENBQUM7QUFDbkMsSUFBTSxxQkFBZSxTQUFTLENBQUM7QUFDL0IsVUFBTSxXQUFjLFlBQVMsUUFBUyxRQUFTLEdBQUM7QUFDaEQsSUFBVSwwQkFBZ0IsV0FBb0Q7QUFFOUUsQ0FBTSxtQkFBWSxNQUFLLFVBQVMsQ0FBQztBQUNqQyxTQUFNLFVBQVcsV0FDWDtBQUFBLE1BQ0ksSUFBSSxTQUFVLEdBQUssSUFBTSxlQUFVLE1BQVMsSUFBSztBQUFBLE1BQ2pELElBQUksU0FBVSxNQUFLLENBQU0sZUFBVSxVQUFVLENBQUs7QUFBQSxLQUV0RDtBQUVOLFVBQU0sSUFBSztBQUFBLE1BQ1AsSUFBSSxJQUFLO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxNQUNBLE9BQU8sU0FBVztBQUFBLE1BQ2xCLFdBQVcsWUFBYTtBQUFBLE1BQ3hCLFdBQVcsV0FBWTtBQUFBLE1BQ3ZCO0FBQUEsTUFDQSxNQUFNLGVBQWUsUUFBUTtBQUFBLE1BQzdCLFVBQVUsSUFBSztBQUFBLENBQ2YsV0FBTyxLQUFLO0FBQUEsS0FDZjtBQUFBO0FBR0wsT0FBTSxPQUFRLEtBQUk7QUFDbEIsT0FBTSxRQUFTLEtBQUk7QUFDbkIsU0FBTyxFQUFFLE9BQU8sTUFBUSxRQUFPLE1BQU07QUFDekM7QUFPTyxRQUFTLGVBQWUsVUFBNEIsUUFBVSxLQUFHLFNBQVUsR0FBVztBQUN6RixRQUFNLFFBQWdDLENBQUM7QUFDdkMsYUFBVyxXQUFXLFFBQVU7QUFDNUIsQ0FBTTtBQUFBLENBQ0YsV0FBTSxNQUFXLE9BQUksS0FBTTtBQUFBLE1BQzNCLFFBQVUsVUFBUSxVQUFXO0FBQUEsTUFDN0IsVUFBVSxRQUFRLFVBQVc7QUFBQSxDQUNqQztBQUNBLGVBQVcsRUFBTSxZQUFRLFVBQWMsTUFBSTtBQUN2QyxZQUFNLEtBQUssR0FBSyxZQUFVLEdBQUcsQ0FBRyxZQUFVLEdBQUcsQ0FBQztBQUFBO0FBRWxELENBQU0sY0FBSyxJQUFLLFFBQVUsV0FBUSxTQUFTLENBQUcsWUFBVSxPQUFRLFVBQVMsQ0FBQztBQUFBO0FBRTlFLEVBQU8sYUFBTSxLQUFLLEdBQUc7QUFDekI7QUFHZ0IsNEJBQW1CLElBQWUsV0FBaUIsT0FBZ0M7QUFDL0YsQ0FBTSxpQkFBWSxNQUFLLFVBQVMsQ0FBQztBQUNqQyxDQUFNLFlBQUssT0FBVyxTQUFLLENBQUs7QUFDaEMsQ0FBTSxZQUFLLE9BQVcsU0FBSyxDQUFLO0FBQ2hDLEVBQU87QUFBQSxDQUNILElBQUcsUUFBTSxJQUFLLFVBQVMsQ0FBSztBQUFBLENBQzVCLElBQUcsUUFBTSxJQUFLLFdBQVUsQ0FBSztBQUFBLElBQzdCLE1BQU8sV0FBVyxLQUFRO0FBQUEsQ0FDMUIsV0FBUSxFQUFNLGNBQVcsRUFBSztBQUFBLElBQzlCLE9BQVEsR0FBTSxlQUFXLEtBQUssQ0FBTSxnQkFBVyxVQUFVLENBQUs7QUFBQSxDQUNsRTtBQUNKOztBQ2pQQSxNQUFNLGdCQUFnQixHQUFHLENBQUMsS0FBSyxDQUFLLFdBQU8sS0FBSyxLQUFLLENBQVEsV0FBSSxLQUFLLEtBQUssSUFBSTtBQUMvRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsZ0JBQWdCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBRTtBQUNwQyxJQUFJLE1BQU8sS0FBSSxLQUFLLENBQUMsRUFBRSxDQUFFO0FBQ3pCLFFBQVEsR0FBRyxDQUFFLEVBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBSztBQUM5QixDQUFZLGVBQUksR0FBRyxDQUFLLFVBQU0sQ0FBQyxRQUFRLElBQUksR0FBRyxLQUFLLENBQVE7QUFDM0QsQ0FBZ0Isc0JBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDO0FBQzVDLENBQVksaUJBQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFFLElBQUcsQ0FBQztBQUNsRCxZQUFZLElBQUksS0FBSztBQUNyQixnQkFBZ0IsT0FBTyxLQUFLO0FBQzVCLFlBQVksTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQztBQUNsQyxDQUFZLGtCQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBRSxJQUFHLENBQUUsTUFBSyxDQUFDO0FBQzNDLFlBQVksT0FBTyxLQUFLO0FBQ3hCLENBQVM7QUFDVCxDQUFRLFVBQUcsQ0FBRSxPQUFNLEtBQUs7QUFDeEIsS0FBSyxDQUFDO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxTQUFTLFdBQVcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFFO0FBQzdDLElBQUksS0FBTSxPQUFNLENBQUcsU0FBTyxJQUFJLENBQUU7QUFDaEMsQ0FBSSxTQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFJLFVBQU8sTUFBTSxLQUFLLENBQVU7QUFDNUQsSUFBSSxLQUFNLE9BQU0sQ0FBRyxTQUFPLE1BQU0sQ0FBSztBQUNyQyxVQUFVLENBQUMsR0FBRyxLQUFLLE1BQU0sTUFBTSxFQUFFLENBQUMsR0FBRztBQUNyQyxVQUFVLENBQUMsR0FBRyxLQUFLLE1BQU0sTUFBTSxDQUFDLEdBQUcsQ0FBQztBQUNwQyxJQUFJLE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7QUFDOUI7QUFDQSxJQUFJLEVBQUksUUFBTSxDQUFDLElBQUksQ0FBRTtBQUNyQixRQUFRLEtBQU0sTUFBSyxDQUFHLFVBQVEsQ0FBRTtBQUNoQyxRQUFRLE9BQU8sZ0JBQWdCLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBSTtBQUM1QyxZQUFZLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDcEMsQ0FBWSxlQUFJLE1BQU0sQ0FBQyxJQUFJLElBQUksZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0FBQ3pELGdCQUFnQixPQUFPLFlBQVksQ0FBQyxLQUFLLEVBQUUsTUFBTSxXQUFXLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBRyxRQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN4RixZQUFZLE9BQU8sSUFBSSxHQUFHLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBTSxlQUFVLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQyxHQUFHLElBQUk7QUFDaEcsU0FBUyxDQUFDO0FBQ1Y7QUFDQTtBQUNBLElBQUksS0FBTSxPQUFNLENBQUcsT0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFFLElBQUcsQ0FBRTtBQUMvQyxJQUFJLEdBQUssUUFBTSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBSSxTQUFNLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFFO0FBQ3BELFFBQVEsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQztBQUNoQyxDQUFRLFdBQUksTUFBTSxDQUFDLElBQUksSUFBSSxnQkFBZ0IsQ0FBQyxLQUFLLENBQUM7QUFDbEQsWUFBWSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsV0FBVyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUcsUUFBTSxDQUFFLEtBQUksRUFBRSxDQUFDO0FBQ2hFO0FBQ0EsWUFBWSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFHLFlBQVUsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLElBQUk7QUFDNUU7QUFDQSxJQUFJLE9BQU8sTUFBTTtBQUNqQjs7QUN2RE8sUUFBUywyQkFBMkIsWUFBa0IsU0FBa0IsU0FBUyxJQUFXO0FBQy9GLENBQU0sV0FBTSxJQUFFLEVBQUcsVUFBVSxHQUFJLFdBQVUsSUFBRyxDQUFHLFlBQVUsQ0FBSSxhQUFVLENBQUU7QUFDekUsQ0FBTSxhQUFRLFdBQVMsSUFBSyxNQUFLLElBQUksQ0FBSyxNQUFJLEtBQUksTUFBSyxDQUFDO0FBQ3hELFNBQU8sQ0FBRSxHQUFHLFVBQVUsS0FBSSxLQUFRLE9BQUksQ0FBRyxJQUFHLFVBQVUsR0FBSSxPQUFRLE9BQUksQ0FBRTtBQUM1RTs7O0FDS08sUUFBU0MsVUFBU0MsS0FBdUQ7QUFDNUUsUUFBTUMsY0FBY0EsQ0FBTTtBQUN0QixJQUFNQyxvQ0FBY0MsR0FBaUI7QUFDckMsQ0FBV0Msc0JBQVFKLEtBQU1LLE9BQU1DLEtBQU87QUFDbEMsWUFBTUMsTUFBU0MsaUJBQWNKLElBQUtLLE9BQVMsWUFBUztBQUNwRCxVQUFJRixNQUFRO0FBQ1JMLGdCQUFRUSxJQUFJSCxNQUFNO0FBQUE7QUFDdEI7QUFFSixJQUFPSSxhQUFNQyxLQUFLVixPQUFPO0FBQUEsQ0FDN0I7QUFFQTtBQUFBLFFBQUFXLEdBQUFDLFlBQUFDLFVBQUFGLEdBQUFHO0FBQUEsT0FBQUMsT0FDY2pCLE9BQU1rQjtBQUFHLFdBQUFELFVBQUEsQ0FBQUUsZ0JBQUFGLE1BQUFKLEtBQUEsRUFBVGIsUUFBTWtCLEdBQUdMO0FBQUFPLElBQUFMLGNBQUFNLGdCQUVWQyxLQUFLO0FBQUEsVUFBQ0MsSUFBSTtBQUFBLGVBQUV0QixXQUFZO0FBQUEsQ0FBQztBQUFBLENBQUF1QixlQUNwQmpCLENBQU1jLDJCQUFNSSxPQUFPO0FBQUEsWUFBQ0MsU0FBUztBQUFBLFVBQUVDLHNCQUFlcEIsUUFBUTtBQUFBO0FBQUM7QUFBQSxLQUFJO0FBQUFhLElBQUFQLGFBQUFRLGdCQUdwRU8sR0FBRztBQUFBLFVBQUNMLElBQUk7QUFBQSxjQUFFdkIsT0FBTUssS0FBTUM7QUFBQUEsQ0FBSztBQUFBLENBQUFrQixlQUFJcEIsQ0FBSWlCLHlCQUFNUSxPQUFPO0FBQUEsQ0FBQ3pCO0FBQUFBLENBQVU7QUFBQSxDQUFJO0FBQUFnQixJQUFBUCxhQUFBUSxnQkFDL0RPLEdBQUc7QUFBQSxVQUFDTCxJQUFJO0FBQUEsY0FBRXZCLE9BQU1LLEtBQU15QjtBQUFBQSxDQUFLO0FBQUEsQ0FBQU4sZUFBSU8sQ0FBSVYseUJBQU1XLE9BQU87QUFBQSxDQUFDRDtBQUFBQSxDQUFVO0FBQUEsQ0FBSTtBQUFBRSxXQUFBQyxDQUFBO0FBQUEsU0FBQUMsS0FQMUJuQyxPQUFNSyxPQUFNUixLQUFLdUMsT0FBVXBDLFFBQU1LLEtBQU1QO0FBQU1xQyxVQUFBRCxRQUFBRyxDQUFBQyxpQkFBQXpCLE1BQUFxQixhQUFBRyxJQUFBRixHQUFBO0FBQUFDLFdBQUFGLFFBQUFLLENBQUFELGlCQUFBekIsTUFBQXFCLGNBQUFLLElBQUFILElBQUE7QUFBQSxNQUFBRjtBQUFBQSxLQUFBO0FBQUEsQ0FBQUcsTUFBQUc7QUFBQUEsTUFBQUQsQ0FBQUM7QUFBQUEsS0FBQTtBQUFBLElBQUEzQjtBQUFBQSxHQUFBO0FBVS9GO0FBUU8sUUFBUzRCLGFBQ1p6QyxLQVNGO0FBQ0U7QUFBQSxRQUFBMEMsR0FBQUMsY0FBQUMsVUFBQUYsR0FBQTFCO0FBQUFJLElBQUFzQixjQUFBckIsZ0JBR1N3QixJQUFJO0FBQUEsVUFBQ0MsSUFBSTtBQUFBLGVBQUU5QyxLQUFNK0M7QUFBQUEsQ0FBSztBQUFBLFVBQUF2QixRQUFBO0FBQUEsV0FBQXdCLE9BQUFDLFNBQUE7QUFBQTdCLENBQUE0QixxQkFRZGhELFlBQU0rQyxLQUFLO0FBQUFkLGVBQUFDLENBQUE7QUFBQSxhQUFBZ0IsS0FOTGxELFNBQU1tRCxVQUFjLFlBQU9DLE1BQy9CcEQsT0FBTXFELEtBQUlyRCxLQUFNSCxTQUFRLENBQUN5RCxPQUN6QnRELE9BQU11RCxHQUFJdkQsUUFBTUYsTUFBUztBQUFDb0QsZUFBQWhCLFFBQUFHLENBQUFDLGlCQUFBVSxPQUFBZCxhQUFBRyxJQUFBYSxJQUFBO0FBQUFFLGVBQUFsQixRQUFBSyxDQUFBRCxpQkFBQVUsT0FBQWQsU0FBQUssSUFBQWEsSUFBQTtBQUFBRSxlQUFBcEIsUUFBQXNCLENBQUFsQixpQkFBQVUsT0FBQWQsU0FBQXNCLElBQUFGLElBQUE7QUFBQSxVQUFBcEI7QUFBQUEsU0FBQTtBQUFBLENBQUFHLFVBQUFHO0FBQUFBLENBQUFELFVBQUFDO0FBQUFBLFVBQUFnQixDQUFBaEI7QUFBQUEsU0FBQTtBQUFBLFFBQUFRO0FBQUFBO0FBQUE7QUFBQTVCLFdBQUFzQixLQU9wQzFDLGFBQU13QixVQUFRO0FBQUFTLFdBQUFDLENBQUE7QUFBQSxTQUFBdUIsS0FiVHpELFNBQU0wRCxLQUFLQyxPQUNSM0QsT0FBTXFELEdBQUNPLEtBQUs1RCxTQUFNdUQsQ0FBQ00sT0FBUzdELE9BQU1ILE9BQUtpRSxPQUFVOUQsT0FBTUY7QUFBTTJELFdBQUF2QixRQUFBRyxDQUFBQyxpQkFBQUksT0FBQVIsYUFBQUcsSUFBQW9CLElBQUE7QUFBQUUsV0FBQXpCLFFBQUFLLENBQUFELGlCQUFBTSxPQUFBVixTQUFBSyxJQUFBb0IsSUFBQTtBQUFBQyxXQUFBMUIsUUFBQXNCLENBQUFsQixpQkFBQU0sT0FBQVYsU0FBQXNCLElBQUFJLElBQUE7QUFBQUMsV0FBQTNCLFFBQUE2QixDQUFBekIsaUJBQUFNLE9BQUFWLGFBQUE2QixJQUFBRixJQUFBO0FBQUFDLFlBQUE1QixRQUFBOEIsQ0FBQTFCLGlCQUFBTSxPQUFBVixjQUFBOEIsSUFBQUYsS0FBQTtBQUFBLE1BQUE1QjtBQUFBQSxLQUFBO0FBQUEsQ0FBQUcsTUFBQUc7QUFBQUEsQ0FBQUQsTUFBQUM7QUFBQUEsQ0FBQWdCLE1BQUFoQjtBQUFBQSxDQUFBdUIsTUFBQXZCO0FBQUFBLE1BQUF3QixDQUFBeEI7QUFBQUEsS0FBQTtBQUFBLElBQUFFO0FBQUFBLEdBQUE7QUFlbEY7QUFJTyxRQUFTVixTQUFRaEMsS0FBbUM7QUFDdkQsRUFBTTtBQUFBLElBQ0YrQixJQUFNO0FBQUEsTUFDRmtDLEdBQUs7QUFBQSxRQUFFWjtBQUFBQSxDQUFHRTtBQUFBQSxDQUFFO0FBQUEsTUFDWjFEO0FBQUFBLENBQ0FDO0FBQUFBO0FBQ0osR0FDSixDQUFJb0UsY0FBWWxFLEtBQU87QUFBQSxJQUFFbUUsSUFBTTtBQUFBLEdBQU07QUFFckMsUUFBQTlDLGlCQUNLb0IsV0FBVztBQUFBLFFBQ1JZLENBQUM7QUFBQSxNQUFFQSxVQUFNeEQsVUFBVTtBQUFBLENBQUM7QUFBQSxRQUNwQjBELENBQUM7QUFBQSxNQUFFQSxVQUFNekQsV0FBVztBQUFBLENBQUM7QUFBQSxRQUNyQkQsS0FBSztBQUFBLGFBQUVBLEtBQU07QUFBQSxDQUFDO0FBQUEsUUFDZEMsTUFBTTtBQUFBLGFBQUVBLE1BQU87QUFBQSxDQUFDO0FBQUEsUUFDaEJpRCxLQUFLO0FBQUEsWUFBRS9DLE9BQU0rQixJQUFLZ0I7QUFBQUEsQ0FBSztBQUFBO0FBQUEsTUFDaEIvQyxhQUFNK0IsS0FBS3FDLFFBQVk7QUFBQTtBQUFNO0FBR2hEO0FBSU8sUUFBU3ZDLFNBQVE3QixLQUFtQztBQUN2RCxFQUFNO0FBQUEsSUFDRkksSUFBTTtBQUFBLENBQUVpRTtBQUFBQTtBQUFLLEdBQ2pCLENBQUlILGNBQVlsRSxLQUFPO0FBQUEsSUFBRW1FLElBQU07QUFBQSxHQUFNO0FBRXJDLFFBQU1HLFlBQVlBLENBQU07QUFDcEIsQ0FBTTdELGVBQVFULE9BQU1JLE1BQUtLLEtBQVM7QUFDbEMsSUFBTUYsZUFBU0MsY0FBY0MsS0FBSztBQUNsQyxXQUFPLGtCQUFrQkYsTUFBTTtBQUFBLENBQ25DO0FBRUEsT0FBTWdFLGFBQWNDLGdCQUFlO0FBQ25DLENBQU1DLGNBQVNBLFFBQU0sYUFBYUYsV0FBVztBQUM3QyxFQUFNRyxrQkFBY0EsU0FBQTtBQUFBLE9BQUFDLE9BQUFDLFNBQUE7QUFBQTNDLFdBQUFDLENBQUE7QUFBQSxTQUFBMkMsT0FBZ0JKLFFBQU8sR0FBQ0ssT0FBY1IsV0FBVSxJQUFDUyxRQUFLVixJQUFLO0FBQUNRLFlBQUEzQyxRQUFBRyxDQUFBQyxpQkFBQXFDLE9BQUF6QyxVQUFBRyxJQUFBd0MsS0FBQTtBQUFBQyxZQUFBNUMsUUFBQUssQ0FBQUQsaUJBQUFxQyxPQUFBekMsa0JBQUFLLElBQUF1QyxLQUFBO0FBQUFDLFlBQUE3QyxRQUFBc0IsQ0FBQWxCLGlCQUFBcUMsT0FBQXpDLFNBQUFzQixJQUFBdUIsS0FBQTtBQUFBLE1BQUE3QztBQUFBQSxLQUFBO0FBQUEsQ0FBQUcsTUFBQUc7QUFBQUEsQ0FBQUQsTUFBQUM7QUFBQUEsTUFBQWdCLENBQUFoQjtBQUFBQSxLQUFBO0FBQUEsSUFBQW1DO0FBQUFBLEdBQUk7QUFFcEYsRUFBTUssZUFBV0EsR0FBQ0MsSUFBaUI7QUFHL0IsVUFBTWhCLE1BQU1pQiwwQkFBMkJsRixPQUFNSSxLQUFLK0UsU0FBV25GLFFBQU1JLEtBQUtnRixTQUFTO0FBQ2pGO0FBQUEsU0FBQUMsT0FBQUMsU0FBQTtBQUFBbEUsYUFBQWlFLE9BRVNKLElBQUk7QUFBQWhELGFBQUFDLENBQUE7QUFBQSxZQUFBcUQsRUFEY3RCLFVBQUlaLENBQUNtQyxVQUFLdkIsR0FBSVY7QUFBQ2dDLGNBQUFyRCxRQUFBRyxDQUFBQyxpQkFBQStDLE9BQUFuRCxTQUFBRyxJQUFBa0QsS0FBQTtBQUFBQyxjQUFBdEQsUUFBQUssQ0FBQUQsaUJBQUErQyxPQUFBbkQsU0FBQUssSUFBQWlELEtBQUE7QUFBQSxRQUFBdEQ7QUFBQUEsT0FBQTtBQUFBLENBQUFHLFFBQUFHO0FBQUFBLFFBQUFELENBQUFDO0FBQUFBLE9BQUE7QUFBQSxNQUFBNkM7QUFBQUEsS0FBQTtBQUFBLENBSTlDO0FBRUE7QUFBQSxPQUFBSSxPQUFBQyxVQUFBO0FBQUF0RSxJQUFBcUUsY0FBQXBFLGdCQUVTc0UsTUFBTTtBQUFBLFVBQUNDLFFBQVE7QUFBQSxlQUFFbEIsV0FBWTtBQUFBLENBQUM7QUFBQSxVQUFBbEQsUUFBQTtBQUFBLFFBQUFILHdCQUMxQndFLEtBQUs7QUFBQSxjQUFDL0MsSUFBSTtBQUFBLFlBQUU5QyxhQUFNSSxLQUFLSyxLQUFVO0FBQUEsQ0FBUTtBQUFBLGNBQUFlLFFBQUE7QUFBQTtBQUFBLGlCQUFBc0UsT0FBQUMsU0FBQTtBQUFBOUQsc0JBQUFLLGlCQUFBd0QsT0FDUnpCLFdBQU07QUFBQSxjQUFBeUI7QUFBQUEsQ0FBQTtBQUFBLGlCQUFBRSxRQUFBQyxTQUFBO0FBQUFoRSxzQkFBQUssaUJBQUEwRCxRQUNOM0IsV0FBTTtBQUFBLGNBQUEyQjtBQUFBQSxDQUFBO0FBQUEsaUJBQUFFLFFBQUFDLFNBQUE7QUFBQWxFLHFCQUFBQyxDQUFBO0FBQUEsb0JBQUFrRSxLQUNJOUIsY0FBVytCLFFBQUtoQyxNQUFLO0FBQUMrQixzQkFBQWxFLFFBQUFHLENBQUFDLGlCQUFBNEQsUUFBQWhFLGtCQUFBRyxJQUFBK0QsS0FBQTtBQUFBQyxzQkFBQW5FLFFBQUFLLENBQUFELGlCQUFBNEQsUUFBQWhFLFNBQUFLLElBQUE4RCxLQUFBO0FBQUEsZ0JBQUFuRTtBQUFBQSxlQUFBO0FBQUEsQ0FBQUcsZ0JBQUFHO0FBQUFBLGdCQUFBRCxDQUFBQztBQUFBQSxlQUFBO0FBQUEsY0FBQTBEO0FBQUFBLGdCQUFBO0FBQUE7QUFBQSxTQUFBN0UsbUJBRWpFd0UsS0FBSztBQUFBLGNBQUMvQyxJQUFJO0FBQUEsWUFBRTlDLGFBQU1JLEtBQUtLLEtBQVU7QUFBQSxDQUFNO0FBQUEsY0FBQWUsUUFBQTtBQUFBLFlBQUE4RSxZQUNuQzVCLGtCQUFZLENBQUMsRUFBQTRCLE9BQ2J0QixlQUFTLENBQUcsR0FBQztBQUFBO0FBQUEsU0FBQTNELG1CQUVqQndFLEtBQUs7QUFBQSxjQUFDL0MsSUFBSTtBQUFBLFlBQUU5QyxhQUFNSSxLQUFLSyxLQUFVO0FBQUEsQ0FBTztBQUFBLGNBQUFlLFFBQUE7QUFBQSxZQUFBOEUsWUFDcEM1QixrQkFBWSxDQUFDLEVBQUE0QixPQUNidEIsZUFBUyxDQUFHLEdBQUM7QUFBQTtBQUFBLFNBQUEzRCxtQkFFakJ3RSxLQUFLO0FBQUEsY0FBQy9DLElBQUk7QUFBQSxZQUFFOUMsYUFBTUksS0FBS0ssS0FBVTtBQUFBLENBQWU7QUFBQSxjQUFBZSxRQUFBO0FBQUEsWUFBQThFLFlBQzVDNUIsa0JBQVksQ0FBQyxFQUFBNEIsT0FDYnRCLGVBQVMsQ0FBRyxHQUFDO0FBQUE7QUFBQSxTQUFBM0QsbUJBRWpCd0UsS0FBSztBQUFBLGNBQUMvQyxJQUFJO0FBQUEsWUFBRTlDLGFBQU1JLEtBQUtLLEtBQVU7QUFBQSxDQUFhO0FBQUEsY0FBQWUsUUFBQTtBQUFBLG1CQUFBOEUsTUFDMUM1QixtQkFBYSxHQUFBNEIsSUFDYnRCLGVBQVMsSUFBRyxDQUFDO0FBQUEsa0JBQUF1QixHQUFBQyxlQUFBQyxXQUFBRixHQUFBdkY7QUFBQXVGLENBQUE5RiwwQkFBQWlHLFdBQUE7QUFBQXpFLG9CQUFBLE9BQUFLLGFBQUFtRSxlQUVNLElBQUloQyxPQUFPLEVBQUMsRUFBRTtBQUFBLGNBQUE4QjtBQUFBQSxnQkFBQTtBQUFBO0FBQUEsU0FBQWxGLG1CQUtyQ3dFLEtBQUs7QUFBQSxjQUFDL0MsSUFBSTtBQUFBLFlBQUU5QyxhQUFNSSxLQUFLSyxLQUFVO0FBQUEsQ0FBYztBQUFBLGNBQUFlLFFBQUE7QUFBQSxtQkFBQThFLE1BQzNDNUIsbUJBQWEsR0FBQTRCLElBQ2J0QixlQUFTLElBQUcsQ0FBQztBQUFBLGtCQUFBMkIsR0FBQUgsZUFBQUksV0FBQUQsR0FBQTNGO0FBQUEyRixDQUFBbEcsMEJBQUFpRyxXQUFBO0FBQUF6RSxvQkFBQSxPQUFBSyxhQUFBc0UsZUFFTSxJQUFJbkMsT0FBTyxFQUFDLEVBQUU7QUFBQSxjQUFBa0M7QUFBQUEsZ0JBQUE7QUFBQTtBQUFBLFNBQUF0RixtQkFLckN3RSxLQUFLO0FBQUEsY0FBQy9DLElBQUk7QUFBQSxZQUFFOUMsYUFBTUksS0FBS0ssS0FBVTtBQUFBLENBQVE7QUFBQSxjQUFBZSxRQUFBO0FBQUEsWUFBQThFLFlBQ3JDNUIsa0JBQVksQ0FBQyxFQUFBNEIsT0FDYnRCLGVBQVMsQ0FBRyxHQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTVELElBQUFxRSxjQUFBcEUsZ0JBR3JCd0IsSUFBSTtBQUFBLFVBQUNDLElBQUk7QUFBQSxjQUFFOUMsT0FBTUksSUFBSzJDO0FBQUFBLENBQUs7QUFBQSxVQUFBdkIsUUFBQTtBQUFBLFdBQUFxRixRQUFBdkIsU0FBQTtBQUFBbEUsZUFBQXlGLE1BQUEsUUFRbkI3RyxLQUFNSSxNQUFLMkMsS0FBSztBQUFBZCxlQUFBQyxDQUFBO0FBQUEsVUFBQTRFLFlBTGQ5RyxNQUFNSSxJQUFLMkcsV0FBVTFELEVBQUMyRCxNQUN0QmhILFNBQU1JLEtBQUsyRyxRQUFVeEQ7QUFBQ3VELGdCQUFBNUUsUUFBQUcsQ0FBQUMsaUJBQUF1RSxRQUFBM0UsU0FBQUcsSUFBQXlFLEtBQUE7QUFBQUUsZ0JBQUE5RSxRQUFBSyxDQUFBRCxpQkFBQXVFLFFBQUEzRSxTQUFBSyxJQUFBeUUsS0FBQTtBQUFBLFVBQUE5RTtBQUFBQSxTQUFBO0FBQUEsQ0FBQUcsVUFBQUc7QUFBQUEsVUFBQUQsQ0FBQUM7QUFBQUEsU0FBQTtBQUFBLFFBQUFxRTtBQUFBQTtBQUFBO0FBQUE1RSxVQUFBLE9BQUFLLGFBQUFtRCxLQUFBLFVBOUMzQnpGLE9BQU1JLElBQUtnRSxVQUFZLFNBQU07QUFBQSxJQUFBcUI7QUFBQUEsR0FBQTtBQXVEL0M7QUFJQSxNQUFNd0IsVUFBWUEsR0FBQ2pILFdBQXNDO0FBQUEsS0FBQWtILFFBQUFDLFVBQUE7QUFBQWxGLFNBQUFDLENBQUE7QUFBQSxRQUFBa0YsUUFFN0NwSCxLQUFNcUgsSUFBRUMsTUFFTixRQUFLdEgsTUFBTXVILE1BQVU7QUFBRUgsVUFBQWxGLFFBQUFHLENBQUFDLGlCQUFBNEUsUUFBQWhGLFVBQUFHLElBQUErRSxLQUFBO0FBQUFFLFVBQUFwRixRQUFBSyxDQUFBRCxpQkFBQTRFLFFBQUFoRixZQUFBSyxJQUFBK0UsS0FBQTtBQUFBLElBQUFwRjtBQUFBQSxHQUFBO0FBQUEsQ0FBQUcsSUFBQUc7QUFBQUEsSUFBQUQsQ0FBQUM7QUFBQUEsR0FBQTtBQUFBLEVBQUEwRTtBQUFBLENBUXBDO0FBTUQsTUFBTU0sZUFBaUJBLEdBQUN4SCxXQUFxQjtBQUFBLEtBQUF5SCxRQUFBQyxVQUFBO0FBQUF6RixVQUFBSyxpQkFBQW1GLFFBRWpDekgsYUFBTXFILEVBQUU7QUFBQSxFQUFBSTtBQUFBLENBVW5CO0FBSUQsTUFBTUUsV0FBYUEsR0FBQzNILFdBQXFCO0FBQUEsS0FBQTRILFFBQUFDLFVBQUE7QUFBQTVGLFVBQUFLLGlCQUFBc0YsUUFFN0I1SCxhQUFNcUgsRUFBRTtBQUFBLEVBQUFPO0FBQUEsQ0FVbkI7QUFNRCxNQUFNcEgsYUFBd0Q7QUFBQSxDQUMxRHNILFFBQVM7QUFBQSxDQUNUQyxPQUFRO0FBQUEsQ0FDUkMsS0FBTTtBQUFBLENBQ05DLFNBQVU7QUFBQSxDQUNWQyxLQUFNO0FBQUEsQ0FDTkMsTUFBTztBQUFBLENBQ1BDLGNBQWU7QUFBQSxDQUNmQyxZQUFhO0FBQUEsQ0FDYkMsYUFBYztBQUFBLEVBQ2RDLE1BQVE7QUFDWjtBQUlPLE1BQU01RyxjQUFpRDtBQUFBLEVBQzFENkcsSUFBS0EsT0FBQW5ILGdCQUFPNEYsU0FBUztBQUFBLElBQUNJLEVBQUU7QUFBQSxHQUFtQjtBQUFBLEVBQzNDVSxPQUFRQSxPQUFBMUcsZ0JBQU80RixTQUFTO0FBQUEsQ0FBQ0ksS0FBRTtBQUFBLElBQW9CRSxNQUFRO0FBQUEsR0FBTTtBQUFBLEVBQzdEa0IsU0FBVUEsT0FBQXBILGdCQUFPbUcsY0FBYztBQUFBLElBQUNILEVBQUU7QUFBQSxHQUF3QjtBQUFBLEVBQzFEVyxLQUFNQSxPQUFBM0csZ0JBQU9zRyxVQUFVO0FBQUEsSUFBQ04sRUFBRTtBQUFBO0FBQzlCOztBQzVQTyxRQUFTcUIsUUFBTzFJLEtBS3BCO0FBQ0MsUUFBQXFCLGlCQUNLc0gsU0FBUztBQUFBLFFBQUN0SSxLQUFLO0FBQUEsYUFBRUwsS0FBTUs7QUFBQUEsQ0FBSztBQUFBLFFBQUV1SSxJQUFJO0FBQUEsYUFBRTVJLEtBQU00STtBQUFBQSxDQUFJO0FBQUEsQ0FBRUMsY0FBYUM7QUFBQUEsQ0FBY3RILGFBQ3RFbkIsQ0FBS2dCLDBCQUNGSSxPQUFPO0FBQUEsVUFBQ0MsU0FBUztBQUFBLGNBQUUxQixPQUFNK0ksUUFBWWhKO0FBQUFBLENBQVE7QUFBQSxVQUFFTSxLQUFLO0FBQUEsZUFBRUEsS0FBTTtBQUFBLENBQUM7QUFBQSxDQUFBYSxTQUFBOEgsRUFBQTtBQUFBLFdBQUEvSCxPQUFPakIsT0FBTWtCO0FBQUcsY0FBQUQsOEJBQUErSCxDQUFBLEdBQVRoSixRQUFNa0IsR0FBRzhIO0FBQUFBO0FBQUE7QUFBQSxHQUNqRjtBQUdiO0FBSU8sUUFBU0wsV0FBYTNJLEtBSzFCO0FBQ0MsUUFBTSxDQUFDaUosV0FBVyxDQUFJQyxrQkFBZUMsT0FBTztBQUU1QyxRQUFNLENBQUNDLE1BQU0sQ0FBSUYsa0JBQ2IsQ0FBTTtBQUNGLFNBQU1HLEtBQU1KLGFBQVk7QUFDeEIsU0FBTTVJLE9BQVFMLE9BQU1LO0FBQ3BCLFNBQU11SSxNQUFPNUksT0FBTTRJO0FBQ25CLFNBQU1DLGFBQWM3SSxPQUFNNkk7QUFDMUIsTUFBSVEsTUFBT2hKLFFBQU87QUFDZCxhQUFPLENBQUNnSixLQUFLaEosS0FBT3VJLE9BQU1DLFlBQVc7QUFBQTtBQUN6QyxLQUVKLEtBQU8sR0FBQ1EsS0FBS2hKLEtBQU91SSxRQUFNQyxXQUFXLENBS25CO0FBQ2QsVUFBTVMsT0FBVSxRQUFNRCxJQUFJRCxRQUFPL0ksTUFBT3VJLEtBQUk7QUFDNUMsVUFBT0MsYUFBWVMsT0FBTztBQUFBLEdBRWxDO0FBRUEsUUFBQWpJLGlCQUFRd0IsSUFBSTtBQUFBLFFBQUNDLElBQUk7QUFBQSxhQUFFc0csTUFBTztBQUFBLENBQUM7QUFBQSxDQUFBNUgsV0FBSStILFNBQU12SixLQUFNd0IsVUFBUytILENBQUM7QUFBQSxHQUFDO0FBQzFEOztBQ3RETyxRQUFTQyxtQkFBa0J4SixLQUsvQjtBQUNDLFFBQU15SixXQUFXLEtBQVk7QUFDekIsTUFBSXpKLFFBQU0wSixHQUFLO0FBQ1gsTUFBTTtBQUFBLENBQUVDO0FBQUFBLE9BQVksR0FBSSxLQUFNOztBQUFBLHVCQUFPLENBQWM7O3lFQUFBO0FBQ25ELFdBQU1BLFlBQVkzSixPQUFNMEosR0FBSzFKLFFBQU00SixTQUFZLGVBQVk7QUFBQTtBQUMvRCxDQUNKO0FBRUEsUUFBQXZJLGlCQUNLd0ksVUFBVTtBQUFBLENBQUNDLFVBQVNMO0FBQUFBLENBQVEsT0FBRU0sUUFBUTtBQUFBLFlBQUUsRUFBQy9KLEtBQU0wSjtBQUFBQSxDQUFHO0FBQUEsUUFBRU0sT0FBTztBQUFBLGFBQUVoSyxLQUFNZ0s7QUFBQUEsQ0FBTztBQUFBLFFBQUF4SSxRQUFBO0FBQUEsWUFBQUgsaUJBQ3RFNEksZ0JBQVE7QUFBQSxZQUFDQyxJQUFJO0FBQUEsaUJBQUVsSyxLQUFNa0s7QUFBQUE7QUFBSTtBQUFBO0FBQUE7QUFHdEMiLCJuYW1lcyI6WyJ3aWR0aCIsImhlaWdodCIsIkdyYXBoU1ZHIiwicHJvcHMiLCJlZGdlTWFya2VycyIsIm1hcmtlcnMiLCJTZXQiLCJlZGdlIiwiZ3JhcGgiLCJlZGdlcyIsIm1hcmtlciIsInN0eWxlVG9NYXJrZXIiLCJzdHlsZSIsImFkZCIsIkFycmF5IiwiZnJvbSIsIl9lbCQiLCJfdG1wbCQiLCJfZWwkMiIsImZpcnN0Q2hpbGQiLCJfcmVmJCIsInJlZiIsIl8kdXNlIiwiXyRpbnNlcnQiLCJfJGNyZWF0ZUNvbXBvbmVudCIsIkluZGV4IiwiZWFjaCIsImNoaWxkcmVuIiwiRHluYW1pYyIsImNvbXBvbmVudCIsImFycm93TWFya2VyU1ZHIiwiRm9yIiwiRWRnZVNWRyIsIm5vZGVzIiwibm9kZSIsIk5vZGVTVkciLCJfJGVmZmVjdCIsIl9wJCIsIl92JCIsIl92JDIiLCJlIiwiXyRzZXRBdHRyaWJ1dGUiLCJ0IiwidW5kZWZpbmVkIiwiTGFiZWxlZFJlY3QiLCJfZWwkMyIsIl90bXBsJDMiLCJfZWwkNCIsIlNob3ciLCJ3aGVuIiwibGFiZWwiLCJfZWwkNSIsIl90bXBsJDIiLCJfdiQzIiwibGFiZWxDbGFzcyIsIl92JDQiLCJ4IiwiX3YkNSIsInkiLCJhIiwiX3YkNiIsImNsYXNzIiwiX3YkNyIsIl92JDgiLCJfdiQ5IiwiX3YkMTAiLCJvIiwiaSIsInBvcyIsImRlc3RydWN0dXJlIiwiZGVlcCIsImNzc0NsYXNzIiwicGF0aCIsIm1hcmtlclVybCIsImNvbXBvbmVudElkIiwiY3JlYXRlVW5pcXVlSWQiLCJwYXRoSWQiLCJkZWZhdWx0UGF0aCIsIl9lbCQ2IiwiX3RtcGwkNCIsIl92JDExIiwiX3YkMTIiLCJfdiQxMyIsInRndExhYmVsIiwidGV4dCIsInBlcnBlbmRpY3VsYXJMYWJlbFBvc2l0aW9uIiwic291cmNlUG9zIiwidGFyZ2V0UG9zIiwiX2VsJDciLCJfdG1wbCQ1IiwiX3YkMTQiLCJfdiQxNSIsIl9lbCQ4IiwiX3RtcGwkMTAiLCJTd2l0Y2giLCJmYWxsYmFjayIsIk1hdGNoIiwiX2VsJDkiLCJfdG1wbCQ2IiwiX2VsJDEwIiwiX3RtcGwkNyIsIl9lbCQxMSIsIl90bXBsJDgiLCJfdiQxNiIsIl92JDE3IiwiXyRtZW1vIiwiX2VsJDEyIiwiX3RtcGwkOSIsIl9lbCQxMyIsInNldFByb3BlcnR5IiwiX2VsJDE0IiwiX2VsJDE1IiwiX2VsJDE2IiwiX3YkMTgiLCJsYWJlbFBvcyIsIl92JDE5IiwiVmVlTWFya2VyIiwiX2VsJDE3IiwiX3RtcGwkMTEiLCJfdiQyMCIsImlkIiwiX3YkMjEiLCJvZmZzZXQiLCJUcmlhbmdsZU1hcmtlciIsIl9lbCQxOCIsIl90bXBsJDEyIiwiRmxhdE1hcmtlciIsIl9lbCQxOSIsIl90bXBsJDEzIiwiZGVmYXVsdCIsImRvdWJsZSIsImZsYXQiLCJ1bm1hcmtlZCIsInBsdXMiLCJtaW51cyIsImluZGV0ZXJtaW5hdGUiLCJwbHVzQ2Flc3VyYSIsIm1pbnVzQ2Flc3VyYSIsInNjYWxhciIsInZlZSIsInRyaWFuZ2xlIiwiRWxrU1ZHIiwiRWxrTGF5b3V0IiwiYXJncyIsImVsa1RvTGF5b3V0IiwicGFyc2VFbGtMYXlvdXQiLCJyZW5kZXJlciIsInIkIiwiZWxrUmVzb3VyY2UiLCJjcmVhdGVSZXNvdXJjZSIsImxvYWRFbGsiLCJsYXlvdXQiLCJlbGsiLCJlbGtOb2RlIiwibCIsIkRvd25sb2FkU1ZHQnV0dG9uIiwiZG93bmxvYWQiLCJzdmciLCJkb3dubG9hZFNWRyIsImZpbGVuYW1lIiwiSWNvbkJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCIsInRvb2x0aXAiLCJEb3dubG9hZCIsInNpemUiXSwiaWdub3JlTGlzdCI6WzJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zyb250ZW5kL3NyYy92aXN1YWxpemF0aW9uL2ZvbnRfdXRpbHMudHMiLCIuLi8uLi8uLi9mcm9udGVuZC9zcmMvdmlzdWFsaXphdGlvbi9lbGsudHMiLCIuLi8uLi8uLi9mcm9udGVuZC9ub2RlX21vZHVsZXMvLnBucG0vQHNvbGlkLXByaW1pdGl2ZXMrZGVzdHJ1Y3R1cmVAMC4yLjJfc29saWQtanNAMS45LjEwL25vZGVfbW9kdWxlcy9Ac29saWQtcHJpbWl0aXZlcy9kZXN0cnVjdHVyZS9kaXN0L2luZGV4LmpzIiwiLi4vLi4vLi4vZnJvbnRlbmQvc3JjL3Zpc3VhbGl6YXRpb24vbGFiZWxfcG9zaXRpb24udHMiLCIuLi8uLi8uLi9mcm9udGVuZC9zcmMvdmlzdWFsaXphdGlvbi9ncmFwaF9zdmcudHN4IiwiLi4vLi4vLi4vZnJvbnRlbmQvc3JjL3Zpc3VhbGl6YXRpb24vZWxrX3N2Zy50c3giLCIuLi8uLi8uLi9mcm9udGVuZC9zcmMvdmlzdWFsaXphdGlvbi9leHBvcnRfc3ZnX2J1dHRvbi50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcblxuLyoqIEdldCB0aGUgbWFpbiBmb250IHN0cmluZyBmb3IgdGV4dCBtZWFzdXJlbWVudC5cbiAqXG4gKiBSZXR1cm5zIGEgZm9udCBzcGVjaWZpY2F0aW9uIHN0cmluZyBzdWl0YWJsZSBmb3IgQ2FudmFzIDJEIGNvbnRleHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRNYWluRm9udCgpOiBzdHJpbmcge1xuICAgIGNvbnN0IHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpO1xuICAgIGNvbnN0IHJvb3RGb250U2l6ZSA9IHBhcnNlRmxvYXQoc3R5bGUuZm9udFNpemUpO1xuICAgIHJldHVybiBgJHtyb290Rm9udFNpemV9cHggJHtzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS1tYWluLWZvbnRcIil9YDtcbn1cblxuLyoqIEdldCB0aGUgbW9ub3NwYWNlIGZvbnQgc3RyaW5nIGZvciB0ZXh0IG1lYXN1cmVtZW50LlxuICpcbiAqIFJldHVybnMgYSBmb250IHNwZWNpZmljYXRpb24gc3RyaW5nIHN1aXRhYmxlIGZvciBDYW52YXMgMkQgY29udGV4dC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE1vbm9Gb250KCk6IHN0cmluZyB7XG4gICAgY29uc3Qgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCk7XG4gICAgY29uc3Qgcm9vdEZvbnRTaXplID0gcGFyc2VGbG9hdChzdHlsZS5mb250U2l6ZSk7XG4gICAgcmV0dXJuIGAke3Jvb3RGb250U2l6ZX1weCAke3N0eWxlLmdldFByb3BlcnR5VmFsdWUoXCItLW1vbm8tZm9udFwiKX1gO1xufVxuXG4vKiogTWVhc3VyZXMgdGhlIGJvdW5kaW5nIGJveCBvZiB0ZXh0IHRvIGJlIHJlbmRlcmVkIGluIFNWRy5cbiAqXG4gKiBUaGlzIG1ldGhvZCB1c2VzIGFuIGF1eGlsaWFyeSBIVE1MIGNhbnZhcyBlbGVtZW50LiBUaGUgb3RoZXIgY29tbW9ubHkgdXNlZFxuICogbWV0aG9kIHVzZXMgYW4gYWN0dWFsIFNWRyBub2RlIGJ1dCBoYXMgdGhlIGRpc2FkdmFudGFnZSB0aGF0IHRoZSBTVkcgbm9kZSBtdXN0XG4gKiBiZSBhZGRlZCB0byB0aGUgRE9NLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbWVhc3VyZVRleHQoXG4gICAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCxcbiAgICB0ZXh0OiBzdHJpbmcsXG4gICAgZm9udDogc3RyaW5nLFxuKTogeyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlciB9IHtcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbiAgICBpbnZhcmlhbnQoY29udGV4dCwgXCJGYWlsZWQgdG8gZ2V0IDJEIGNvbnRleHQgZnJvbSBjYW52YXNcIik7XG4gICAgY29udGV4dC5mb250ID0gZm9udDtcbiAgICBjb25zdCBtZXRyaWNzID0gY29udGV4dC5tZWFzdXJlVGV4dCh0ZXh0KTtcbiAgICByZXR1cm4ge1xuICAgICAgICB3aWR0aDogbWV0cmljcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiBtZXRyaWNzLmZvbnRCb3VuZGluZ0JveEFzY2VudCArIG1ldHJpY3MuZm9udEJvdW5kaW5nQm94RGVzY2VudCxcbiAgICB9O1xufVxuIiwiaW1wb3J0IHR5cGUge1xuICAgIEVMSyxcbiAgICBFbGtFZGdlU2VjdGlvbixcbiAgICBFbGtFeHRlbmRlZEVkZ2UsXG4gICAgRWxrTGFiZWwsXG4gICAgRWxrTGF5b3V0QXJndW1lbnRzLFxuICAgIEVsa05vZGUsXG4gICAgRWxrUG9ydCxcbiAgICBMYXlvdXRPcHRpb25zLFxufSBmcm9tIFwiZWxranNcIjtcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCI7XG5cbmltcG9ydCB7IGdldE1haW5Gb250LCBnZXRNb25vRm9udCwgbWVhc3VyZVRleHQgfSBmcm9tIFwiLi9mb250X3V0aWxzXCI7XG5pbXBvcnQgdHlwZSAqIGFzIEdyYXBoTGF5b3V0IGZyb20gXCIuL2dyYXBoX2xheW91dFwiO1xuaW1wb3J0IHR5cGUgKiBhcyBHcmFwaFNwZWMgZnJvbSBcIi4vZ3JhcGhfc3BlY1wiO1xuaW1wb3J0IHR5cGUgeyBBcnJvd1N0eWxlIH0gZnJvbSBcIi4vdHlwZXNcIjtcblxuLyoqIExheW91dCBvZiBhIGhpZXJhcmNoaWNhbCBFTEsgZ3JhcGggd2l0aCBhbiBvdXRlciBib3VuZGFyeSwgY2hpbGQgYm94ZXMsXG5hbmQgZWRnZXMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRWxrSGllcmFyY2hpY2FsTGF5b3V0IHtcbiAgICAvKiogV2lkdGggb2YgdGhlIGJvdW5kaW5nIGJveC4gKi9cbiAgICB3aWR0aDogbnVtYmVyO1xuXG4gICAgLyoqIEhlaWdodCBvZiB0aGUgYm91bmRpbmcgYm94LiAqL1xuICAgIGhlaWdodDogbnVtYmVyO1xuXG4gICAgLyoqIFRoZSBvdXRlciBib3VuZGFyeSBvZiB0aGUgZGlhZ3JhbS4gKi9cbiAgICBvdXRlcjogRWxrQm94TGF5b3V0O1xuXG4gICAgLyoqIExhaWQtb3V0IGJveGVzIGluc2lkZSB0aGUgZGlhZ3JhbS4gKi9cbiAgICBib3hlczogRWxrQm94TGF5b3V0W107XG5cbiAgICAvKiogTGFpZC1vdXQgZWRnZXMgd2l0aCBwYXRocyBhbmQganVuY3Rpb24gcG9pbnRzLiAqL1xuICAgIHdpcmVFZGdlczogRWxrRWRnZUxheW91dFtdO1xufVxuXG4vKiogTGF5b3V0IG9mIGEgYm94IChub2RlIHdpdGggcG9ydHMpIGluIGFuIEVMSyBncmFwaC4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgRWxrQm94TGF5b3V0IHtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIHdpZHRoOiBudW1iZXI7XG4gICAgaGVpZ2h0OiBudW1iZXI7XG4gICAgbGFiZWw/OiBzdHJpbmc7XG4gICAgcG9ydHM6IEVsa1BvcnRMYXlvdXRbXTtcbn1cblxuLyoqIExheW91dCBvZiBhIHBvcnQgaW4gYW4gRUxLIGdyYXBoLiAqL1xuZXhwb3J0IGludGVyZmFjZSBFbGtQb3J0TGF5b3V0IHtcbiAgICB4OiBudW1iZXI7XG4gICAgeTogbnVtYmVyO1xuICAgIGxhYmVsOiBzdHJpbmc7XG4gICAgbGFiZWxYOiBudW1iZXI7XG4gICAgbGFiZWxZOiBudW1iZXI7XG59XG5cbi8qKiBMYXlvdXQgb2YgYW4gZWRnZSB3aXRoIGp1bmN0aW9uIHBvaW50cyBpbiBhbiBFTEsgZ3JhcGguICovXG5leHBvcnQgaW50ZXJmYWNlIEVsa0VkZ2VMYXlvdXQge1xuICAgIHBhdGg6IHN0cmluZztcbiAgICBqdW5jdGlvblBvaW50czogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9W107XG59XG5cbi8qKiBEZWZhdWx0IHNpemUgZm9yIHBvcnRzIGluIEVMSyBsYXlvdXRzLiAqL1xuZXhwb3J0IGNvbnN0IHBvcnRTaXplID0gODtcblxuLyoqIEVMSyBub2RlIHdpdGggZXh0cmEgc3R5bGUgZGF0YSBhdHRhY2hlZC5cblxuRUxLIHdpbGwgaWdub3JlIHRoaXMgZXh0cmEgZGF0YSBhbmQganVzdCBwYXNzIGl0IHRocm91Z2guXG4gKi9cbmludGVyZmFjZSBTdHlsZWRFbGtOb2RlIGV4dGVuZHMgRWxrTm9kZSB7XG4gICAgY2hpbGRyZW4/OiBTdHlsZWRFbGtOb2RlW107XG4gICAgZWRnZXM/OiBTdHlsZWRFbGtFZGdlW107XG4gICAgY3NzQ2xhc3M/OiBzdHJpbmc7XG59XG5cbmludGVyZmFjZSBTdHlsZWRFbGtFZGdlIGV4dGVuZHMgRWxrRXh0ZW5kZWRFZGdlIHtcbiAgICBjc3NDbGFzcz86IHN0cmluZztcbiAgICBhcnJvd1N0eWxlPzogQXJyb3dTdHlsZTtcbn1cblxuY29uc3Qgbm9kZVBhZGRpbmcgPSAxMDtcblxuLyoqIENvbnZlcnQgYSBncmFwaCBzcGVjaWZpY2F0aW9uIGludG8gYW4gRUxLIG5vZGUuXG5cbkxpc3Qgb2YgbGF5b3V0IG9wdGlvbnMgc3VwcG9ydGVkIGJ5IEVMSzpcbjxodHRwczovL2VjbGlwc2UuZGV2L2Vsay9yZWZlcmVuY2Uvb3B0aW9ucy5odG1sPlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ3JhcGhUb0VsayhncmFwaDogR3JhcGhTcGVjLkdyYXBoLCBsYXlvdXRPcHRpb25zPzogTGF5b3V0T3B0aW9ucyk6IEVsa05vZGUge1xuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgY29uc3QgZGVmYXVsdEZvbnQgPSBnZXRNYWluRm9udCgpO1xuICAgIGNvbnN0IG1vbm9zcGFjZUZvbnQgPSBnZXRNb25vRm9udCgpO1xuXG4gICAgY29uc3QgY2hpbGRyZW46IFN0eWxlZEVsa05vZGVbXSA9IGdyYXBoLm5vZGVzLm1hcCgobm9kZSkgPT4ge1xuICAgICAgICBsZXQgd2lkdGggPSBub2RlLm1pbmltdW1XaWR0aCA/PyBub2RlUGFkZGluZztcbiAgICAgICAgbGV0IGhlaWdodCA9IG5vZGUubWluaW11bUhlaWdodCA/PyBub2RlUGFkZGluZztcbiAgICAgICAgaWYgKG5vZGUubGFiZWwpIHtcbiAgICAgICAgICAgIGNvbnN0IGZvbnQgPSBub2RlLmlzTW9ub3NwYWNlZCA/IG1vbm9zcGFjZUZvbnQgOiBkZWZhdWx0Rm9udDtcbiAgICAgICAgICAgIGNvbnN0IHNpemUgPSBtZWFzdXJlVGV4dChjYW52YXMsIG5vZGUubGFiZWwsIGZvbnQpO1xuICAgICAgICAgICAgd2lkdGggPSBNYXRoLm1heCh3aWR0aCwgc2l6ZS53aWR0aCArIDIgKiBub2RlUGFkZGluZyk7XG4gICAgICAgICAgICBoZWlnaHQgPSBNYXRoLm1heChoZWlnaHQsIHNpemUuaGVpZ2h0ICsgMiAqIG5vZGVQYWRkaW5nKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IG5vZGUuaWQsXG4gICAgICAgICAgICBsYWJlbHM6IG5vZGUubGFiZWwgPyBbeyB0ZXh0OiBub2RlLmxhYmVsIH1dIDogW10sXG4gICAgICAgICAgICB3aWR0aCxcbiAgICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICAgIGNzc0NsYXNzOiBub2RlLmNzc0NsYXNzLFxuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgY29uc3QgZWRnZXM6IFN0eWxlZEVsa0VkZ2VbXSA9IGdyYXBoLmVkZ2VzLm1hcCgoZWRnZSkgPT4ge1xuICAgICAgICBsZXQgbGFiZWw6IEVsa0xhYmVsIHwgdW5kZWZpbmVkO1xuICAgICAgICBpZiAoZWRnZS5sYWJlbCkge1xuICAgICAgICAgICAgY29uc3QgZm9udCA9IGVkZ2UuaXNNb25vc3BhY2VkID8gbW9ub3NwYWNlRm9udCA6IGRlZmF1bHRGb250O1xuICAgICAgICAgICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBtZWFzdXJlVGV4dChjYW52YXMsIGVkZ2UubGFiZWwsIGZvbnQpO1xuICAgICAgICAgICAgbGFiZWwgPSB7IHRleHQ6IGVkZ2UubGFiZWwsIHdpZHRoLCBoZWlnaHQgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IGVkZ2UuaWQsXG4gICAgICAgICAgICBzb3VyY2VzOiBbZWRnZS5zb3VyY2VdLFxuICAgICAgICAgICAgdGFyZ2V0czogW2VkZ2UudGFyZ2V0XSxcbiAgICAgICAgICAgIGxhYmVsczogbGFiZWwgPyBbbGFiZWxdIDogW10sXG4gICAgICAgICAgICBjc3NDbGFzczogZWRnZS5jc3NDbGFzcyxcbiAgICAgICAgICAgIGFycm93U3R5bGU6IGVkZ2Uuc3R5bGUsXG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICByZXR1cm4geyBpZDogXCJyb290XCIsIGNoaWxkcmVuLCBlZGdlcywgbGF5b3V0T3B0aW9ucyB9O1xufVxuXG4vKiogQXN5bmNocm9ub3VzbHkgaW1wb3J0IGFuZCBsb2FkIEVMSy4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkRWxrKCkge1xuICAgIGNvbnN0IEVMSyA9IChhd2FpdCBpbXBvcnQoXCJlbGtqc1wiKSkuZGVmYXVsdDtcbiAgICByZXR1cm4gbmV3IEVMSygpO1xufVxuXG4vKiogTGF5IG91dCBhIGdyYXBoIHVzaW5nIEVMSy4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBlbGtMYXlvdXRHcmFwaChcbiAgICBlbGs6IEVMSyxcbiAgICBncmFwaDogU3R5bGVkRWxrTm9kZSxcbiAgICBhcmdzPzogRWxrTGF5b3V0QXJndW1lbnRzLFxuKTogUHJvbWlzZTxHcmFwaExheW91dC5HcmFwaD4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGVsay5sYXlvdXQoZ3JhcGgsIGFyZ3MpO1xuICAgIHJldHVybiBwYXJzZUVsa0xheW91dChyZXN1bHQpO1xufVxuXG4vKiogUGFyc2UgYSBncmFwaCBsYXlvdXQgY29tcHV0ZWQgYnkgRUxLLlxuXG5FTEsncyBjb29yZGluYXRlIHN5c3RlbSBpcyBkZXNjcmliZWQgYXQ6XG48aHR0cHM6Ly9lY2xpcHNlLmRldi9lbGsvZG9jdW1lbnRhdGlvbi90b29sZGV2ZWxvcGVycy9ncmFwaGRhdGFzdHJ1Y3R1cmUvY29vcmRpbmF0ZXN5c3RlbS5odG1sPi5cbiovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VFbGtMYXlvdXQoZWxrOiBTdHlsZWRFbGtOb2RlKTogR3JhcGhMYXlvdXQuR3JhcGgge1xuICAgIC8vIFBhcnNlIG5vZGVzIGZyb20gdGhlIGNoaWxkcmVuIG9mIHRoZSByb290IEVMSyBub2RlLlxuICAgIGNvbnN0IG5vZGVzOiBHcmFwaExheW91dC5Ob2RlW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGNoaWxkIG9mIGVsay5jaGlsZHJlbiA/PyBbXSkge1xuICAgICAgICBjb25zdCB3aWR0aCA9IGNoaWxkLndpZHRoID8/IDA7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IGNoaWxkLmhlaWdodCA/PyAwO1xuICAgICAgICBub2Rlcy5wdXNoKHtcbiAgICAgICAgICAgIGlkOiBjaGlsZC5pZCxcbiAgICAgICAgICAgIC8vIEVMSyBwb3NpdGlvbnMgYXJlIGZyb20gdGhlIHRvcC1sZWZ0IGNvcm5lcjsgY29udmVydCB0byBjZW50ZXIuXG4gICAgICAgICAgICBwb3M6IHtcbiAgICAgICAgICAgICAgICB4OiAoY2hpbGQueCA/PyAwKSArIHdpZHRoIC8gMixcbiAgICAgICAgICAgICAgICB5OiAoY2hpbGQueSA/PyAwKSArIGhlaWdodCAvIDIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBsYWJlbDogY2hpbGQubGFiZWxzPy5bMF0/LnRleHQsXG4gICAgICAgICAgICBjc3NDbGFzczogY2hpbGQuY3NzQ2xhc3MsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFBhcnNlIGVkZ2VzIG9mIHRoZSByb290IEVMSyBub2RlLlxuICAgIGNvbnN0IGVkZ2VzOiBHcmFwaExheW91dC5FZGdlW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGVkZ2Ugb2YgZWxrLmVkZ2VzID8/IFtdKSB7XG4gICAgICAgIGNvbnN0IHNvdXJjZSA9IGVkZ2Uuc291cmNlc1swXTtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZWRnZS50YXJnZXRzWzBdO1xuICAgICAgICBpbnZhcmlhbnQoc291cmNlICYmIHRhcmdldCwgXCJFZGdlIHNob3VsZCBoYXZlIGEgc291cmNlIGFuZCB0YXJnZXRcIik7XG5cbiAgICAgICAgY29uc3Qgc2VjdGlvbnMgPSBlZGdlLnNlY3Rpb25zID8/IFtdO1xuICAgICAgICBjb25zdCBmaXJzdFNlY3Rpb24gPSBzZWN0aW9uc1swXTtcbiAgICAgICAgY29uc3QgbGFzdFNlY3Rpb24gPSBzZWN0aW9uc1tzZWN0aW9ucy5sZW5ndGggLSAxXTtcbiAgICAgICAgaW52YXJpYW50KGZpcnN0U2VjdGlvbiAmJiBsYXN0U2VjdGlvbiwgXCJFZGdlIHNob3VsZCBoYXZlIGF0IGxlYXN0IG9uZSBzZWN0aW9uXCIpO1xuXG4gICAgICAgIGNvbnN0IGVkZ2VMYWJlbCA9IGVkZ2UubGFiZWxzPy5bMF07XG4gICAgICAgIGNvbnN0IGxhYmVsUG9zID0gZWRnZUxhYmVsXG4gICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgIHg6IChlZGdlTGFiZWwueCA/PyAwKSArIChlZGdlTGFiZWwud2lkdGggPz8gMCkgLyAyLFxuICAgICAgICAgICAgICAgICAgeTogKGVkZ2VMYWJlbC55ID8/IDApICsgKGVkZ2VMYWJlbC5oZWlnaHQgPz8gMCkgLyAyLFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA6IHVuZGVmaW5lZDtcblxuICAgICAgICBlZGdlcy5wdXNoKHtcbiAgICAgICAgICAgIGlkOiBlZGdlLmlkLFxuICAgICAgICAgICAgc291cmNlLFxuICAgICAgICAgICAgdGFyZ2V0LFxuICAgICAgICAgICAgbGFiZWw6IGVkZ2VMYWJlbD8udGV4dCxcbiAgICAgICAgICAgIHNvdXJjZVBvczogZmlyc3RTZWN0aW9uLnN0YXJ0UG9pbnQsXG4gICAgICAgICAgICB0YXJnZXRQb3M6IGxhc3RTZWN0aW9uLmVuZFBvaW50LFxuICAgICAgICAgICAgbGFiZWxQb3MsXG4gICAgICAgICAgICBwYXRoOiBzZWN0aW9uc1RvUGF0aChzZWN0aW9ucyksXG4gICAgICAgICAgICBjc3NDbGFzczogZWRnZS5jc3NDbGFzcyxcbiAgICAgICAgICAgIHN0eWxlOiBlZGdlLmFycm93U3R5bGUsXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IHdpZHRoID0gZWxrLndpZHRoO1xuICAgIGNvbnN0IGhlaWdodCA9IGVsay5oZWlnaHQ7XG4gICAgcmV0dXJuIHsgd2lkdGgsIGhlaWdodCwgbm9kZXMsIGVkZ2VzIH07XG59XG5cbi8qKiBDb252ZXJ0IEVMSyBlZGdlIHNlY3Rpb25zIHRvIGFuIFNWRyBwYXRoLlxuXG5PcHRpb25hbGx5IGFwcGxpZXMgYW4gb2Zmc2V0IHRvIGFsbCBjb29yZGluYXRlcywgdXNlZnVsIGZvciBoaWVyYXJjaGljYWxcbmxheW91dHMgd2hlcmUgZWRnZXMgYXJlIHJlbGF0aXZlIHRvIGEgcGFyZW50IG5vZGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZWN0aW9uc1RvUGF0aChzZWN0aW9uczogRWxrRWRnZVNlY3Rpb25bXSwgb2Zmc2V0WCA9IDAsIG9mZnNldFkgPSAwKTogc3RyaW5nIHtcbiAgICBjb25zdCBzdG10czogQXJyYXk8c3RyaW5nIHwgbnVtYmVyPiA9IFtdO1xuICAgIGZvciAoY29uc3Qgc2VjdGlvbiBvZiBzZWN0aW9ucykge1xuICAgICAgICBzdG10cy5wdXNoKFxuICAgICAgICAgICAgc3RtdHMubGVuZ3RoID09PSAwID8gXCJNXCIgOiBcIkxcIixcbiAgICAgICAgICAgIG9mZnNldFggKyBzZWN0aW9uLnN0YXJ0UG9pbnQueCxcbiAgICAgICAgICAgIG9mZnNldFkgKyBzZWN0aW9uLnN0YXJ0UG9pbnQueSxcbiAgICAgICAgKTtcbiAgICAgICAgZm9yIChjb25zdCBicCBvZiBzZWN0aW9uLmJlbmRQb2ludHMgPz8gW10pIHtcbiAgICAgICAgICAgIHN0bXRzLnB1c2goXCJMXCIsIG9mZnNldFggKyBicC54LCBvZmZzZXRZICsgYnAueSk7XG4gICAgICAgIH1cbiAgICAgICAgc3RtdHMucHVzaChcIkxcIiwgb2Zmc2V0WCArIHNlY3Rpb24uZW5kUG9pbnQueCwgb2Zmc2V0WSArIHNlY3Rpb24uZW5kUG9pbnQueSk7XG4gICAgfVxuICAgIHJldHVybiBzdG10cy5qb2luKFwiIFwiKTtcbn1cblxuLyoqIFBhcnNlIHRoZSBsYXlvdXQgb2YgYW4gRUxLIHBvcnQgcmVsYXRpdmUgdG8gYSBwYXJlbnQgb2Zmc2V0LiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlRWxrUG9ydExheW91dChwb3J0OiBFbGtQb3J0LCBwYXJlbnRYOiBudW1iZXIsIHBhcmVudFk6IG51bWJlcik6IEVsa1BvcnRMYXlvdXQge1xuICAgIGNvbnN0IHBvcnRMYWJlbCA9IHBvcnQubGFiZWxzPy5bMF07XG4gICAgY29uc3QgcHggPSBwYXJlbnRYICsgKHBvcnQueCA/PyAwKTtcbiAgICBjb25zdCBweSA9IHBhcmVudFkgKyAocG9ydC55ID8/IDApO1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IHB4ICsgKHBvcnQud2lkdGggPz8gMCkgLyAyLFxuICAgICAgICB5OiBweSArIChwb3J0LmhlaWdodCA/PyAwKSAvIDIsXG4gICAgICAgIGxhYmVsOiBwb3J0TGFiZWw/LnRleHQgPz8gXCJcIixcbiAgICAgICAgbGFiZWxYOiBweCArIChwb3J0TGFiZWw/LnggPz8gMCksXG4gICAgICAgIGxhYmVsWTogcHkgKyAocG9ydExhYmVsPy55ID8/IDApICsgKHBvcnRMYWJlbD8uaGVpZ2h0ID8/IDApIC8gMixcbiAgICB9O1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlTWVtbywgcnVuV2l0aE93bmVyLCBnZXRPd25lciB9IGZyb20gXCJzb2xpZC1qc1wiO1xuaW1wb3J0IHsgYWNjZXNzLCB9IGZyb20gXCJAc29saWQtcHJpbWl0aXZlcy91dGlsc1wiO1xuY29uc3QgaXNSZWFjdGl2ZU9iamVjdCA9ICh2YWx1ZSkgPT4gdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsO1xuLyoqXG4gKiBDYXNoZWQgb2JqZWN0IGdldHRlcnMuXG4gKiBAZGVzY3JpcHRpb24gV2hlbiBhIGtleSBpcyBhY2Nlc3NlZCBmb3IgdGhlIGZpcnN0IHRpbWUsIHRoZSBgZ2V0YCBmdW5jdGlvbiBpcyBleGVjdXRlZCwgbGF0ZXIgYSBjYWNoZWQgdmFsdWUgaXMgdXNlZCBpbnN0ZWFkLlxuICovXG5mdW5jdGlvbiBjcmVhdGVQcm94eUNhY2hlKG9iaiwgZ2V0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm94eSh7fSwge1xuICAgICAgICBnZXQ6ICh0YXJnZXQsIGtleSkgPT4ge1xuICAgICAgICAgICAgaWYgKGtleSA9PT0gU3ltYm9sLml0ZXJhdG9yIHx8IGtleSA9PT0gXCJsZW5ndGhcIilcbiAgICAgICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQob2JqLCBrZXkpO1xuICAgICAgICAgICAgY29uc3Qgc2F2ZWQgPSBSZWZsZWN0LmdldCh0YXJnZXQsIGtleSk7XG4gICAgICAgICAgICBpZiAoc2F2ZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNhdmVkO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBnZXQoa2V5KTtcbiAgICAgICAgICAgIFJlZmxlY3Quc2V0KHRhcmdldCwga2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIHNldDogKCkgPT4gZmFsc2UsXG4gICAgfSk7XG59XG4vKipcbiAqIERlc3RydWN0dXJlcyBhbiByZWFjdGl2ZSBvYmplY3QgKihlLmcuIHN0b3JlIG9yIGNvbXBvbmVudCBwcm9wcykqIG9yIGEgc2lnbmFsIG9mIG9uZSBpbnRvIGEgdHVwbGUvbWFwIG9mIHNpZ25hbHMgZm9yIGVhY2ggb2JqZWN0IGtleS5cbiAqIEBwYXJhbSBzb3VyY2UgcmVhY3RpdmUgb2JqZWN0IG9yIHNpZ25hbCByZXR1cm5pbmcgb25lXG4gKiBAcGFyYW0gb3B0aW9ucyBtZW1vIG9wdGlvbnMgKyBwcmltaXRpdmUgY29uZmlndXJhdGlvbjpcbiAqIC0gYG1lbW9gIC0gd3JhcHMgYWNjZXNzb3JzIGluIGBjcmVhdGVNZW1vYCwgbWFraW5nIGVhY2ggcHJvcGVydHkgdXBkYXRlIGluZGVwZW5kZW50bHkuICooZW5hYmxlZCBieSBkZWZhdWx0IGZvciBzaWduYWwgc291cmNlKSpcbiAqIC0gYGxhenlgIC0gcHJvcGVydHkgYWNjZXNzb3JzIGFyZSBjcmVhdGVkIG9uIGtleSByZWFkLiBlbmFibGUgaWYgeW91IHdhbnQgdG8gb25seSBhIHN1YnNldCBvZiBzb3VyY2UgcHJvcGVydGllcywgb3IgdXNlIHByb3BlcnRpZXMgaW5pdGlhbGx5IG1pc3NpbmdcbiAqIC0gYGRlZXBgIC0gZGVzdHJ1Y3R1cmUgbmVzdGVkIG9iamVjdHNcbiAqIEByZXR1cm5zIG9iamVjdCBvZiB0aGUgc2FtZSBrZXlzIGFzIHRoZSBzb3VyY2UsIGJ1dCB3aXRoIHZhbHVlcyB0dXJuZWQgaW50byBhY2Nlc3NvcnMuXG4gKiBAZXhhbXBsZSAvLyBzcHJlYWQgdHVwbGVzXG4gKiBjb25zdCBbZmlyc3QsIHNlY29uZCwgdGhpcmRdID0gZGVzdHJ1Y3R1cmUoKCkgPT4gWzEsMiwzXSlcbiAqIGZpcnN0KCkgLy8gPT4gMVxuICogc2Vjb25kKCkgLy8gPT4gMlxuICogdGhpcmQoKSAvLyA9PiAzXG4gKiBAZXhhbXBsZSAvLyBzcHJlYWQgb2JqZWN0c1xuICogY29uc3QgeyBuYW1lLCBhZ2UgfSA9IGRlc3RydWN0dXJlKHsgbmFtZTogXCJKb2huXCIsIGFnZTogMzYgfSlcbiAqIG5hbWUoKSAvLyA9PiBcIkpvaG5cIlxuICogYWdlKCkgLy8gPT4gMzZcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlc3RydWN0dXJlKHNvdXJjZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGNvbmZpZyA9IG9wdGlvbnMgPz8ge307XG4gICAgY29uc3QgbWVtbyA9IGNvbmZpZy5tZW1vID8/IHR5cGVvZiBzb3VyY2UgPT09IFwiZnVuY3Rpb25cIjtcbiAgICBjb25zdCBnZXR0ZXIgPSB0eXBlb2Ygc291cmNlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgPyAoa2V5KSA9PiAoKSA9PiBzb3VyY2UoKVtrZXldXG4gICAgICAgIDogKGtleSkgPT4gKCkgPT4gc291cmNlW2tleV07XG4gICAgY29uc3Qgb2JqID0gYWNjZXNzKHNvdXJjZSk7XG4gICAgLy8gbGF6eSAodXNlIHByb3h5KVxuICAgIGlmIChjb25maWcubGF6eSkge1xuICAgICAgICBjb25zdCBvd25lciA9IGdldE93bmVyKCk7XG4gICAgICAgIHJldHVybiBjcmVhdGVQcm94eUNhY2hlKG9iaiwga2V5ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNhbGMgPSBnZXR0ZXIoa2V5KTtcbiAgICAgICAgICAgIGlmIChjb25maWcuZGVlcCAmJiBpc1JlYWN0aXZlT2JqZWN0KG9ialtrZXldKSlcbiAgICAgICAgICAgICAgICByZXR1cm4gcnVuV2l0aE93bmVyKG93bmVyLCAoKSA9PiBkZXN0cnVjdHVyZShjYWxjLCB7IC4uLmNvbmZpZywgbWVtbyB9KSk7XG4gICAgICAgICAgICByZXR1cm4gbWVtbyA/IHJ1bldpdGhPd25lcihvd25lciwgKCkgPT4gY3JlYXRlTWVtbyhjYWxjLCB1bmRlZmluZWQsIG9wdGlvbnMpKSA6IGNhbGM7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBlYWdlciAobG9vcCBrZXlzKVxuICAgIGNvbnN0IHJlc3VsdCA9IEFycmF5LmlzQXJyYXkob2JqKSA/IFtdIDoge307XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMob2JqKSkge1xuICAgICAgICBjb25zdCBjYWxjID0gZ2V0dGVyKGtleSk7XG4gICAgICAgIGlmIChjb25maWcuZGVlcCAmJiBpc1JlYWN0aXZlT2JqZWN0KHZhbHVlKSlcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gZGVzdHJ1Y3R1cmUoY2FsYywgeyAuLi5jb25maWcsIG1lbW8gfSk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gbWVtbyA/IGNyZWF0ZU1lbW8oY2FsYywgdW5kZWZpbmVkLCBvcHRpb25zKSA6IGNhbGM7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG4iLCJpbXBvcnQgdHlwZSB7IFBvaW50IH0gZnJvbSBcIi4vZ3JhcGhfbGF5b3V0XCI7XG5cbi8qKiBDYWxjdWxhdGUgYSBwb3NpdGlvbiBvZmZzZXQgcGVycGVuZGljdWxhciB0byB0aGUgdmVjdG9yIGZyb20gc291cmNlIHRvIHRhcmdldC5cbiAqXG4gKiBUaGlzIGlzIHVzZWZ1bCBmb3IgcGxhY2luZyBsYWJlbHMgbmVhciB0aGUgdGFyZ2V0IG9mIGFuIGVkZ2UsIG9mZnNldCB0byB0aGUgc2lkZVxuICogc28gdGhleSBkb24ndCBvdmVybGFwIHdpdGggdGhlIGVkZ2UgaXRzZWxmLlxuICpcbiAqIEBwYXJhbSBzb3VyY2VQb3MgLSBUaGUgc291cmNlIHBvaW50XG4gKiBAcGFyYW0gdGFyZ2V0UG9zIC0gVGhlIHRhcmdldCBwb2ludFxuICogQHBhcmFtIG9mZnNldCAtIFRoZSBwZXJwZW5kaWN1bGFyIGRpc3RhbmNlIHRvIG9mZnNldCBmcm9tIHRoZSB0YXJnZXQgKGRlZmF1bHQ6IDEwKVxuICogQHJldHVybnMgQSBwb2ludCBvZmZzZXQgZnJvbSB0aGUgdGFyZ2V0IHBlcnBlbmRpY3VsYXIgdG8gdGhlIHNvdXJjZS10YXJnZXQgdmVjdG9yXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwZXJwZW5kaWN1bGFyTGFiZWxQb3NpdGlvbihzb3VyY2VQb3M6IFBvaW50LCB0YXJnZXRQb3M6IFBvaW50LCBvZmZzZXQgPSAxMCk6IFBvaW50IHtcbiAgICBjb25zdCB2ZWMgPSB7IHg6IHRhcmdldFBvcy54IC0gc291cmNlUG9zLngsIHk6IHRhcmdldFBvcy55IC0gc291cmNlUG9zLnkgfTtcbiAgICBjb25zdCBzY2FsZSA9IG9mZnNldCAvIE1hdGguc3FydCh2ZWMueCAqKiAyICsgdmVjLnkgKiogMik7XG4gICAgcmV0dXJuIHsgeDogdGFyZ2V0UG9zLnggLSBzY2FsZSAqIHZlYy55LCB5OiB0YXJnZXRQb3MueSArIHNjYWxlICogdmVjLnggfTtcbn1cbiIsImltcG9ydCB7IGRlc3RydWN0dXJlIH0gZnJvbSBcIkBzb2xpZC1wcmltaXRpdmVzL2Rlc3RydWN0dXJlXCI7XG5pbXBvcnQge1xuICAgIHR5cGUgQ29tcG9uZW50LFxuICAgIGNyZWF0ZVVuaXF1ZUlkLFxuICAgIEZvcixcbiAgICBJbmRleCxcbiAgICBNYXRjaCxcbiAgICB0eXBlIFBhcmVudFByb3BzLFxuICAgIFNob3csXG4gICAgU3dpdGNoLFxufSBmcm9tIFwic29saWQtanNcIjtcbmltcG9ydCB7IER5bmFtaWMgfSBmcm9tIFwic29saWQtanMvd2ViXCI7XG5cbmltcG9ydCB0eXBlICogYXMgR3JhcGhMYXlvdXQgZnJvbSBcIi4vZ3JhcGhfbGF5b3V0XCI7XG5pbXBvcnQgeyBwZXJwZW5kaWN1bGFyTGFiZWxQb3NpdGlvbiB9IGZyb20gXCIuL2xhYmVsX3Bvc2l0aW9uXCI7XG5pbXBvcnQgdHlwZSB7IEFycm93U3R5bGUsIFNWR1JlZlByb3AgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5pbXBvcnQgXCIuL2dyYXBoX3N2Zy5jc3NcIjtcblxuLyoqIERyYXcgYSBncmFwaCB3aXRoIGEgbGF5b3V0IHVzaW5nIFNWRy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEdyYXBoU1ZHKHByb3BzOiB7IGdyYXBoOiBHcmFwaExheW91dC5HcmFwaDsgcmVmPzogU1ZHUmVmUHJvcCB9KSB7XG4gICAgY29uc3QgZWRnZU1hcmtlcnMgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1hcmtlcnMgPSBuZXcgU2V0PEFycm93TWFya2VyPigpO1xuICAgICAgICBmb3IgKGNvbnN0IGVkZ2Ugb2YgcHJvcHMuZ3JhcGguZWRnZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IG1hcmtlciA9IHN0eWxlVG9NYXJrZXJbZWRnZS5zdHlsZSA/PyBcImRlZmF1bHRcIl07XG4gICAgICAgICAgICBpZiAobWFya2VyKSB7XG4gICAgICAgICAgICAgICAgbWFya2Vycy5hZGQobWFya2VyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbShtYXJrZXJzKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHN2ZyByZWY9e3Byb3BzLnJlZn0gY2xhc3M9XCJncmFwaFwiIHdpZHRoPXtwcm9wcy5ncmFwaC53aWR0aH0gaGVpZ2h0PXtwcm9wcy5ncmFwaC5oZWlnaHR9PlxuICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgICAgPEluZGV4IGVhY2g9e2VkZ2VNYXJrZXJzKCl9PlxuICAgICAgICAgICAgICAgICAgICB7KG1hcmtlcikgPT4gPER5bmFtaWMgY29tcG9uZW50PXthcnJvd01hcmtlclNWR1ttYXJrZXIoKV19IC8+fVxuICAgICAgICAgICAgICAgIDwvSW5kZXg+XG4gICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgICA8Rm9yIGVhY2g9e3Byb3BzLmdyYXBoLmVkZ2VzfT57KGVkZ2UpID0+IDxFZGdlU1ZHIGVkZ2U9e2VkZ2V9IC8+fTwvRm9yPlxuICAgICAgICAgICAgPEZvciBlYWNoPXtwcm9wcy5ncmFwaC5ub2Rlc30+eyhub2RlKSA9PiA8Tm9kZVNWRyBub2RlPXtub2RlfSAvPn08L0Zvcj5cbiAgICAgICAgPC9zdmc+XG4gICAgKTtcbn1cblxuLyoqIERyYXcgYSBsYWJlbGVkIHJlY3RhbmdsZSB3aXRoIG9wdGlvbmFsIGNoaWxkcmVuLCBwb3NpdGlvbmVkIGJ5IHRvcC1sZWZ0IGNvcm5lci5cblxuQSByZXVzYWJsZSBTVkcgcHJpbWl0aXZlIGZvciByZW5kZXJpbmcgYm94ZXMgd2l0aCBjZW50ZXJlZCBsYWJlbHMuXG5Vc2VkIGJ5IGBOb2RlU1ZHYCBmb3IgZ3JhcGggbm9kZXMgYW5kIGF2YWlsYWJsZSBmb3Igb3RoZXIgdmlzdWFsaXphdGlvbnNcbmxpa2UgVVdEIGJveGVzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gTGFiZWxlZFJlY3QoXG4gICAgcHJvcHM6IFBhcmVudFByb3BzPHtcbiAgICAgICAgeDogbnVtYmVyO1xuICAgICAgICB5OiBudW1iZXI7XG4gICAgICAgIHdpZHRoOiBudW1iZXI7XG4gICAgICAgIGhlaWdodDogbnVtYmVyO1xuICAgICAgICBsYWJlbD86IHN0cmluZztcbiAgICAgICAgY2xhc3M/OiBzdHJpbmc7XG4gICAgICAgIGxhYmVsQ2xhc3M/OiBzdHJpbmc7XG4gICAgfT4sXG4pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZyBjbGFzcz17cHJvcHMuY2xhc3N9PlxuICAgICAgICAgICAgPHJlY3QgeD17cHJvcHMueH0geT17cHJvcHMueX0gd2lkdGg9e3Byb3BzLndpZHRofSBoZWlnaHQ9e3Byb3BzLmhlaWdodH0gLz5cbiAgICAgICAgICAgIDxTaG93IHdoZW49e3Byb3BzLmxhYmVsfT5cbiAgICAgICAgICAgICAgICA8dGV4dFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz17cHJvcHMubGFiZWxDbGFzcyA/PyBcImxhYmVsXCJ9XG4gICAgICAgICAgICAgICAgICAgIHg9e3Byb3BzLnggKyBwcm9wcy53aWR0aCAvIDJ9XG4gICAgICAgICAgICAgICAgICAgIHk9e3Byb3BzLnkgKyBwcm9wcy5oZWlnaHQgLyAyfVxuICAgICAgICAgICAgICAgICAgICBkb21pbmFudC1iYXNlbGluZT1cIm1pZGRsZVwiXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYW5jaG9yPVwibWlkZGxlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5sYWJlbH1cbiAgICAgICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgICA8L1Nob3c+XG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZz5cbiAgICApO1xufVxuXG4vKiogRHJhdyBhIG5vZGUgd2l0aCBhIGxheW91dCB1c2luZyBTVkcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBOb2RlU1ZHKHByb3BzOiB7IG5vZGU6IEdyYXBoTGF5b3V0Lk5vZGUgfSkge1xuICAgIGNvbnN0IHtcbiAgICAgICAgbm9kZToge1xuICAgICAgICAgICAgcG9zOiB7IHgsIHkgfSxcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICB9LFxuICAgIH0gPSBkZXN0cnVjdHVyZShwcm9wcywgeyBkZWVwOiB0cnVlIH0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPExhYmVsZWRSZWN0XG4gICAgICAgICAgICB4PXt4KCkgLSB3aWR0aCgpIC8gMn1cbiAgICAgICAgICAgIHk9e3koKSAtIGhlaWdodCgpIC8gMn1cbiAgICAgICAgICAgIHdpZHRoPXt3aWR0aCgpfVxuICAgICAgICAgICAgaGVpZ2h0PXtoZWlnaHQoKX1cbiAgICAgICAgICAgIGxhYmVsPXtwcm9wcy5ub2RlLmxhYmVsfVxuICAgICAgICAgICAgY2xhc3M9e3Byb3BzLm5vZGUuY3NzQ2xhc3MgPz8gXCJub2RlXCJ9XG4gICAgICAgIC8+XG4gICAgKTtcbn1cblxuLyoqIERyYXcgYW4gZWRnZSB3aXRoIGEgbGF5b3V0IHVzaW5nIFNWRy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEVkZ2VTVkcocHJvcHM6IHsgZWRnZTogR3JhcGhMYXlvdXQuRWRnZSB9KSB7XG4gICAgY29uc3Qge1xuICAgICAgICBlZGdlOiB7IHBhdGggfSxcbiAgICB9ID0gZGVzdHJ1Y3R1cmUocHJvcHMsIHsgZGVlcDogdHJ1ZSB9KTtcblxuICAgIGNvbnN0IG1hcmtlclVybCA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBwcm9wcy5lZGdlLnN0eWxlID8/IFwiZGVmYXVsdFwiO1xuICAgICAgICBjb25zdCBtYXJrZXIgPSBzdHlsZVRvTWFya2VyW3N0eWxlXTtcbiAgICAgICAgcmV0dXJuIGB1cmwoI2Fycm93aGVhZC0ke21hcmtlcn0pYDtcbiAgICB9O1xuXG4gICAgY29uc3QgY29tcG9uZW50SWQgPSBjcmVhdGVVbmlxdWVJZCgpO1xuICAgIGNvbnN0IHBhdGhJZCA9ICgpID0+IGBlZGdlLXBhdGgtJHtjb21wb25lbnRJZH1gO1xuICAgIGNvbnN0IGRlZmF1bHRQYXRoID0gKCkgPT4gPHBhdGggaWQ9e3BhdGhJZCgpfSBtYXJrZXItZW5kPXttYXJrZXJVcmwoKX0gZD17cGF0aCgpfSAvPjtcblxuICAgIGNvbnN0IHRndExhYmVsID0gKHRleHQ6IHN0cmluZykgPT4ge1xuICAgICAgICAvLyBQbGFjZSB0aGUgdGFyZ2V0IGxhYmVsIG9mZnNldCBmcm9tIHRoZSB0YXJnZXQgaW4gdGhlIGRpcmVjdGlvblxuICAgICAgICAvLyBvcnRob2dvbmFsIHRvIHRoZSB2ZWN0b3IgZnJvbSB0aGUgc291cmNlIHRvIHRoZSB0YXJnZXQuXG4gICAgICAgIGNvbnN0IHBvcyA9IHBlcnBlbmRpY3VsYXJMYWJlbFBvc2l0aW9uKHByb3BzLmVkZ2Uuc291cmNlUG9zLCBwcm9wcy5lZGdlLnRhcmdldFBvcyk7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cImxhYmVsXCIgeD17cG9zLnh9IHk9e3Bvcy55fSBkb21pbmFudC1iYXNlbGluZT1cIm1pZGRsZVwiIHRleHQtYW5jaG9yPVwibWlkZGxlXCI+XG4gICAgICAgICAgICAgICAge3RleHR9XG4gICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxnIGNsYXNzPXtwcm9wcy5lZGdlLmNzc0NsYXNzID8/IFwiZWRnZVwifT5cbiAgICAgICAgICAgIDxTd2l0Y2ggZmFsbGJhY2s9e2RlZmF1bHRQYXRoKCl9PlxuICAgICAgICAgICAgICAgIDxNYXRjaCB3aGVuPXtwcm9wcy5lZGdlLnN0eWxlID09PSBcImRvdWJsZVwifT5cbiAgICAgICAgICAgICAgICAgICAgPHBhdGggY2xhc3M9XCJkb3VibGUtb3V0ZXJcIiBkPXtwYXRoKCl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxwYXRoIGNsYXNzPVwiZG91YmxlLWlubmVyXCIgZD17cGF0aCgpfSAvPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aCBjbGFzcz1cImRvdWJsZS1tYXJrZXJcIiBtYXJrZXItZW5kPXttYXJrZXJVcmwoKX0gZD17cGF0aCgpfSAvPlxuICAgICAgICAgICAgICAgIDwvTWF0Y2g+XG4gICAgICAgICAgICAgICAgPE1hdGNoIHdoZW49e3Byb3BzLmVkZ2Uuc3R5bGUgPT09IFwicGx1c1wifT5cbiAgICAgICAgICAgICAgICAgICAge2RlZmF1bHRQYXRoKCl9XG4gICAgICAgICAgICAgICAgICAgIHt0Z3RMYWJlbChcIitcIil9XG4gICAgICAgICAgICAgICAgPC9NYXRjaD5cbiAgICAgICAgICAgICAgICA8TWF0Y2ggd2hlbj17cHJvcHMuZWRnZS5zdHlsZSA9PT0gXCJtaW51c1wifT5cbiAgICAgICAgICAgICAgICAgICAge2RlZmF1bHRQYXRoKCl9XG4gICAgICAgICAgICAgICAgICAgIHt0Z3RMYWJlbChcIi1cIil9XG4gICAgICAgICAgICAgICAgPC9NYXRjaD5cbiAgICAgICAgICAgICAgICA8TWF0Y2ggd2hlbj17cHJvcHMuZWRnZS5zdHlsZSA9PT0gXCJpbmRldGVybWluYXRlXCJ9PlxuICAgICAgICAgICAgICAgICAgICB7ZGVmYXVsdFBhdGgoKX1cbiAgICAgICAgICAgICAgICAgICAge3RndExhYmVsKFwiP1wiKX1cbiAgICAgICAgICAgICAgICA8L01hdGNoPlxuICAgICAgICAgICAgICAgIDxNYXRjaCB3aGVuPXtwcm9wcy5lZGdlLnN0eWxlID09PSBcInBsdXNDYWVzdXJhXCJ9PlxuICAgICAgICAgICAgICAgICAgICB7ZGVmYXVsdFBhdGgoKX1cbiAgICAgICAgICAgICAgICAgICAge3RndExhYmVsKFwiK1wiKX1cbiAgICAgICAgICAgICAgICAgICAgPHRleHQgc3R5bGU9e3sgXCJkb21pbmFudC1iYXNlbGluZVwiOiBcImNlbnRyYWxcIiB9fT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0UGF0aCBocmVmPXtgIyR7cGF0aElkKCl9YH0gc3RhcnRPZmZzZXQ9XCI0MCVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCLigJZcIn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dFBhdGg+XG4gICAgICAgICAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICAgICAgICA8L01hdGNoPlxuICAgICAgICAgICAgICAgIDxNYXRjaCB3aGVuPXtwcm9wcy5lZGdlLnN0eWxlID09PSBcIm1pbnVzQ2Flc3VyYVwifT5cbiAgICAgICAgICAgICAgICAgICAge2RlZmF1bHRQYXRoKCl9XG4gICAgICAgICAgICAgICAgICAgIHt0Z3RMYWJlbChcIi1cIil9XG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0IHN0eWxlPXt7IFwiZG9taW5hbnQtYmFzZWxpbmVcIjogXCJjZW50cmFsXCIgfX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dFBhdGggaHJlZj17YCMke3BhdGhJZCgpfWB9IHN0YXJ0T2Zmc2V0PVwiNDAlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1wi4oCWXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRQYXRoPlxuICAgICAgICAgICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgICAgICAgPC9NYXRjaD5cbiAgICAgICAgICAgICAgICA8TWF0Y2ggd2hlbj17cHJvcHMuZWRnZS5zdHlsZSA9PT0gXCJzY2FsYXJcIn0+XG4gICAgICAgICAgICAgICAgICAgIHtkZWZhdWx0UGF0aCgpfVxuICAgICAgICAgICAgICAgICAgICB7dGd0TGFiZWwoXCLiiJ1cIil9XG4gICAgICAgICAgICAgICAgPC9NYXRjaD5cbiAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICAgICAgPFNob3cgd2hlbj17cHJvcHMuZWRnZS5sYWJlbH0+XG4gICAgICAgICAgICAgICAgPHRleHRcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgIHg9e3Byb3BzLmVkZ2UubGFiZWxQb3M/Lnh9XG4gICAgICAgICAgICAgICAgICAgIHk9e3Byb3BzLmVkZ2UubGFiZWxQb3M/Lnl9XG4gICAgICAgICAgICAgICAgICAgIGRvbWluYW50LWJhc2VsaW5lPVwibWlkZGxlXCJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbmNob3I9XCJtaWRkbGVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge3Byb3BzLmVkZ2UubGFiZWx9XG4gICAgICAgICAgICAgICAgPC90ZXh0PlxuICAgICAgICAgICAgPC9TaG93PlxuICAgICAgICA8L2c+XG4gICAgKTtcbn1cblxuLyoqIFNWRyBtYXJrZXIgZm9yIGEgc3RhbmRhcmQgVi1zaGFwZWQgYXJyb3doZWFkLlxuICovXG5jb25zdCBWZWVNYXJrZXIgPSAocHJvcHM6IHsgaWQ6IHN0cmluZzsgb2Zmc2V0PzogbnVtYmVyIH0pID0+IChcbiAgICA8bWFya2VyXG4gICAgICAgIGlkPXtwcm9wcy5pZH1cbiAgICAgICAgdmlld0JveD1cIjAgMCA1IDEwXCJcbiAgICAgICAgcmVmWD17NSArIChwcm9wcy5vZmZzZXQgPz8gMCl9XG4gICAgICAgIHJlZlk9XCI1XCJcbiAgICAgICAgbWFya2VyV2lkdGg9XCIxMFwiXG4gICAgICAgIG1hcmtlckhlaWdodD1cIjEwXCJcbiAgICAgICAgb3JpZW50PVwiYXV0by1zdGFydC1yZXZlcnNlXCJcbiAgICA+XG4gICAgICAgIDxwYXRoIGQ9XCJNIDAgMiBMIDUgNSBMIDAgOFwiIC8+XG4gICAgPC9tYXJrZXI+XG4pO1xuXG4vKiogU1ZHIG1hcmtlciBmb3IgYSB0cmlhbmd1bGFyIGFycm93IGhlYWQuXG5cblNvdXJjZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvU1ZHL0VsZW1lbnQvbWFya2VyXG4gKi9cbmNvbnN0IFRyaWFuZ2xlTWFya2VyID0gKHByb3BzOiB7IGlkOiBzdHJpbmcgfSkgPT4gKFxuICAgIDxtYXJrZXJcbiAgICAgICAgaWQ9e3Byb3BzLmlkfVxuICAgICAgICB2aWV3Qm94PVwiMCAwIDEwIDEwXCJcbiAgICAgICAgcmVmWD1cIjEwXCJcbiAgICAgICAgcmVmWT1cIjVcIlxuICAgICAgICBtYXJrZXJXaWR0aD1cIjZcIlxuICAgICAgICBtYXJrZXJIZWlnaHQ9XCI2XCJcbiAgICAgICAgb3JpZW50PVwiYXV0by1zdGFydC1yZXZlcnNlXCJcbiAgICA+XG4gICAgICAgIDxwYXRoIGQ9XCJNIDAgMCBMIDEwIDUgTCAwIDEwIHpcIiAvPlxuICAgIDwvbWFya2VyPlxuKTtcblxuLyoqIFNWRyBtYXJrZXIgZm9yIGEgZmxhdCBhcnJvdyBoZWFkLCBnaXZpbmcgYSBcIlQtc2hhcGVkXCIgYXJyb3cuXG4gKi9cbmNvbnN0IEZsYXRNYXJrZXIgPSAocHJvcHM6IHsgaWQ6IHN0cmluZyB9KSA9PiAoXG4gICAgPG1hcmtlclxuICAgICAgICBpZD17cHJvcHMuaWR9XG4gICAgICAgIHZpZXdCb3g9XCIwIDAgNSAxMFwiXG4gICAgICAgIHJlZlg9XCI1XCJcbiAgICAgICAgcmVmWT1cIjVcIlxuICAgICAgICBtYXJrZXJXaWR0aD1cIjEwXCJcbiAgICAgICAgbWFya2VySGVpZ2h0PVwiMTBcIlxuICAgICAgICBvcmllbnQ9XCJhdXRvLXN0YXJ0LXJldmVyc2VcIlxuICAgID5cbiAgICAgICAgPHBhdGggZD1cIk0gNSAwIEwgNSAxMFwiIC8+XG4gICAgPC9tYXJrZXI+XG4pO1xuXG4vKiogU3VwcG9ydGVkIG1hcmtlcnMgc2VydmluZyBhcyBhcnJvd2hlYWRzLlxuICovXG5leHBvcnQgdHlwZSBBcnJvd01hcmtlciA9IFwidmVlXCIgfCBcImRvdWJsZVwiIHwgXCJ0cmlhbmdsZVwiIHwgXCJmbGF0XCI7XG5cbmNvbnN0IHN0eWxlVG9NYXJrZXI6IFJlY29yZDxBcnJvd1N0eWxlLCBBcnJvd01hcmtlciB8IG51bGw+ID0ge1xuICAgIGRlZmF1bHQ6IFwidmVlXCIsXG4gICAgZG91YmxlOiBcImRvdWJsZVwiLFxuICAgIGZsYXQ6IFwiZmxhdFwiLFxuICAgIHVubWFya2VkOiBudWxsLFxuICAgIHBsdXM6IFwidHJpYW5nbGVcIixcbiAgICBtaW51czogXCJ0cmlhbmdsZVwiLFxuICAgIGluZGV0ZXJtaW5hdGU6IFwidHJpYW5nbGVcIixcbiAgICBwbHVzQ2Flc3VyYTogXCJ0cmlhbmdsZVwiLFxuICAgIG1pbnVzQ2Flc3VyYTogXCJ0cmlhbmdsZVwiLFxuICAgIHNjYWxhcjogXCJ0cmlhbmdsZVwiLFxufTtcblxuLyoqIFNWRyBtYXJrZXJzIGZvciBhcnJvdyBoZWFkcy5cbiAqL1xuZXhwb3J0IGNvbnN0IGFycm93TWFya2VyU1ZHOiBSZWNvcmQ8QXJyb3dNYXJrZXIsIENvbXBvbmVudD4gPSB7XG4gICAgdmVlOiAoKSA9PiA8VmVlTWFya2VyIGlkPVwiYXJyb3doZWFkLXZlZVwiIC8+LFxuICAgIGRvdWJsZTogKCkgPT4gPFZlZU1hcmtlciBpZD1cImFycm93aGVhZC1kb3VibGVcIiBvZmZzZXQ9ey0yfSAvPixcbiAgICB0cmlhbmdsZTogKCkgPT4gPFRyaWFuZ2xlTWFya2VyIGlkPVwiYXJyb3doZWFkLXRyaWFuZ2xlXCIgLz4sXG4gICAgZmxhdDogKCkgPT4gPEZsYXRNYXJrZXIgaWQ9XCJhcnJvd2hlYWQtZmxhdFwiIC8+LFxufTtcbiIsImltcG9ydCB0eXBlIHsgRUxLLCBFbGtMYXlvdXRBcmd1bWVudHMsIEVsa05vZGUgfSBmcm9tIFwiZWxranNcIjtcbmltcG9ydCB7IHR5cGUgQWNjZXNzb3IsIHR5cGUgQ29tcG9uZW50LCBjcmVhdGVSZXNvdXJjZSwgdHlwZSBKU1gsIFNob3cgfSBmcm9tIFwic29saWQtanNcIjtcbmltcG9ydCB7IER5bmFtaWMgfSBmcm9tIFwic29saWQtanMvd2ViXCI7XG5cbmltcG9ydCB7IGxvYWRFbGssIHBhcnNlRWxrTGF5b3V0IH0gZnJvbSBcIi4vZWxrXCI7XG5pbXBvcnQgdHlwZSAqIGFzIEdyYXBoTGF5b3V0IGZyb20gXCIuL2dyYXBoX2xheW91dFwiO1xuaW1wb3J0IHsgR3JhcGhTVkcgfSBmcm9tIFwiLi9ncmFwaF9zdmdcIjtcbmltcG9ydCB0eXBlIHsgU1ZHUmVmUHJvcCB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbi8qKiBWaXN1YWxpemUgYSBncmFwaCB1c2luZyBFTEsgYW5kIFNWRy5cblxuVGhlIGxheW91dCBpcyBwZXJmb3JtZWQgYnkgRUxLIGFuZCB0aGVuIHRoZSByZW5kZXJpbmcgaXMgZG9uZSBieSBTVkcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBFbGtTVkcocHJvcHM6IHtcbiAgICBncmFwaD86IEVsa05vZGU7XG4gICAgYXJncz86IEVsa0xheW91dEFyZ3VtZW50cztcbiAgICByZW5kZXJlcj86IENvbXBvbmVudDx7IGdyYXBoOiBHcmFwaExheW91dC5HcmFwaDsgcmVmPzogU1ZHUmVmUHJvcCB9PjtcbiAgICByZWY/OiBTVkdSZWZQcm9wO1xufSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxFbGtMYXlvdXQgZ3JhcGg9e3Byb3BzLmdyYXBofSBhcmdzPXtwcm9wcy5hcmdzfSBlbGtUb0xheW91dD17cGFyc2VFbGtMYXlvdXR9PlxuICAgICAgICAgICAgeyhncmFwaCkgPT4gKFxuICAgICAgICAgICAgICAgIDxEeW5hbWljIGNvbXBvbmVudD17cHJvcHMucmVuZGVyZXIgPz8gR3JhcGhTVkd9IGdyYXBoPXtncmFwaCgpfSByZWY9e3Byb3BzLnJlZn0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgIDwvRWxrTGF5b3V0PlxuICAgICk7XG59XG5cbi8qKiBSdW4gYW4gRUxLIGxheW91dCBhbmQgcmVuZGVyIHRoZSByZXN1bHQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBFbGtMYXlvdXQ8VD4ocHJvcHM6IHtcbiAgICBncmFwaD86IEVsa05vZGU7XG4gICAgYXJncz86IEVsa0xheW91dEFyZ3VtZW50cztcbiAgICBlbGtUb0xheW91dDogKGU6IEVsa05vZGUpID0+IFQ7XG4gICAgY2hpbGRyZW46IChsYXlvdXQ6IEFjY2Vzc29yPFQ+KSA9PiBKU1guRWxlbWVudDtcbn0pIHtcbiAgICBjb25zdCBbZWxrUmVzb3VyY2VdID0gY3JlYXRlUmVzb3VyY2UobG9hZEVsayk7XG5cbiAgICBjb25zdCBbbGF5b3V0XSA9IGNyZWF0ZVJlc291cmNlKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbGsgPSBlbGtSZXNvdXJjZSgpO1xuICAgICAgICAgICAgY29uc3QgZ3JhcGggPSBwcm9wcy5ncmFwaDtcbiAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSBwcm9wcy5hcmdzO1xuICAgICAgICAgICAgY29uc3QgZWxrVG9MYXlvdXQgPSBwcm9wcy5lbGtUb0xheW91dDtcbiAgICAgICAgICAgIGlmIChlbGsgJiYgZ3JhcGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW2VsaywgZ3JhcGgsIGFyZ3MsIGVsa1RvTGF5b3V0XSBhcyBjb25zdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgKFtlbGssIGdyYXBoLCBhcmdzLCBlbGtUb0xheW91dF06IHJlYWRvbmx5IFtcbiAgICAgICAgICAgIEVMSyxcbiAgICAgICAgICAgIEVsa05vZGUsXG4gICAgICAgICAgICBFbGtMYXlvdXRBcmd1bWVudHMgfCB1bmRlZmluZWQsXG4gICAgICAgICAgICAoZTogRWxrTm9kZSkgPT4gVCxcbiAgICAgICAgXSk6IFByb21pc2U8VD4gPT4ge1xuICAgICAgICAgICAgY29uc3QgZWxrTm9kZSA9IGF3YWl0IGVsay5sYXlvdXQoZ3JhcGgsIGFyZ3MpO1xuICAgICAgICAgICAgcmV0dXJuIGVsa1RvTGF5b3V0KGVsa05vZGUpO1xuICAgICAgICB9LFxuICAgICk7XG5cbiAgICByZXR1cm4gPFNob3cgd2hlbj17bGF5b3V0KCl9PnsobCkgPT4gcHJvcHMuY2hpbGRyZW4obCl9PC9TaG93Pjtcbn1cbiIsImltcG9ydCBEb3dubG9hZCBmcm9tIFwibHVjaWRlLXNvbGlkL2ljb25zL2Rvd25sb2FkXCI7XG5pbXBvcnQgdHlwZSB7IEpTWCB9IGZyb20gXCJzb2xpZC1qc1wiO1xuXG5pbXBvcnQgeyBJY29uQnV0dG9uIH0gZnJvbSBcImNhdGNvbGFiLXVpLWNvbXBvbmVudHNcIjtcblxuLyoqIEJ1dHRvbiB0byBkb3dubG9hZCBhbiBTVkcgd2l0aCBlbWJlZGRlZCBmb250cy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBEb3dubG9hZFNWR0J1dHRvbihwcm9wczoge1xuICAgIHN2Zz86IFNWR1NWR0VsZW1lbnQ7XG4gICAgZmlsZW5hbWU/OiBzdHJpbmc7XG4gICAgdG9vbHRpcD86IEpTWC5FbGVtZW50IHwgc3RyaW5nO1xuICAgIHNpemU/OiBudW1iZXI7XG59KSB7XG4gICAgY29uc3QgZG93bmxvYWQgPSBhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmIChwcm9wcy5zdmcpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZG93bmxvYWRTVkcgfSA9IGF3YWl0IGltcG9ydChcIi4vZXhwb3J0X3N2Z1wiKTtcbiAgICAgICAgICAgIGF3YWl0IGRvd25sb2FkU1ZHKHByb3BzLnN2ZywgcHJvcHMuZmlsZW5hbWUgPz8gXCJleHBvcnQuc3ZnXCIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9e2Rvd25sb2FkfSBkaXNhYmxlZD17IXByb3BzLnN2Z30gdG9vbHRpcD17cHJvcHMudG9vbHRpcH0+XG4gICAgICAgICAgICA8RG93bmxvYWQgc2l6ZT17cHJvcHMuc2l6ZX0gLz5cbiAgICAgICAgPC9JY29uQnV0dG9uPlxuICAgICk7XG59XG4iXSwiZmlsZSI6ImFzc2V0cy9ncmFwaF92aXN1YWxpemF0aW9uLWNrQkxrQm9HLmpzIn0=