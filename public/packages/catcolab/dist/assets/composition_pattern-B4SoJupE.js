import { template, use, insert, createComponent, effect, setAttribute } from 'solid-js/web';
import { For, createSignal } from 'solid-js';
import './analysis_tool-Bvgm6Cie.js';
import { B as BlockTitle } from './block_title-uR6Pe8mS.js';
import { p as parseElkPortLayout, s as sectionsToPath, g as getMainFont, m as measureText, a as portSize, L as LabeledRect, D as DownloadSVGButton, E as ElkLayout } from './graph_visualization-ckBLkBoG.js';
import './pde_plot-Ce9tSlMP.js';
import './document-BaPUF-Ky.js';
import './notebook-DqARNRKu.js';
import 'solid-js/store';
import '@automerge/automerge-repo';
import '@automerge/automerge-repo-network-websocket';
import '@automerge/automerge-repo-storage-indexeddb';
import '@automerge/automerge/slim';
import '@automerge/automerge';
import './model-B9uNSW6J.js';
import './index-CvS5Jq0z.js';
import './download-Bv6ia3zn.js';
import './alert-ByO9-N5X.js';

const boxPaddingH = 16;
const boxPaddingV = 10;
const outerPadding = 40;
const portSpacing = 12;
const minBoxWidth = 80;
const minBoxHeight = 50;
const layeredBaseSpacing = 40;
const layeredInterLayerSpacing = 60;
const nodeSpacing = 30;
const outerPortSpacing = 20;
function uwdToElk(uwd) {
  const elkDirection = "RIGHT";
  const portSide = "EAST";
  const canvas = document.createElement("canvas");
  const font = getMainFont();
  const outerPorts = (uwd?.outerPorts ?? []).map((port) => {
    const text = String(port.label);
    const labelSize = measureText(canvas, text, font);
    return {
      id: outerPortId(port.name),
      width: portSize,
      height: portSize,
      labels: [{ text, width: labelSize.width, height: labelSize.height }],
      layoutOptions: {
        "elk.port.side": portSide
      }
    };
  });
  const boxNodes = (uwd?.boxes ?? []).map((box) => {
    const boxLabel = String(box.label);
    const labelSize = measureText(canvas, boxLabel, font);
    const ports = box.ports.map((port) => {
      const text = String(port.label);
      const portLabelSize = measureText(canvas, text, font);
      return {
        id: boxPortId(box.name, port.name),
        width: portSize,
        height: portSize,
        labels: [{ text, width: portLabelSize.width, height: portLabelSize.height }],
        layoutOptions: {
          "elk.port.side": portSide
        }
      };
    });
    const totalPorts = ports.length;
    const portAreaHeight = totalPorts * (portSize + portSpacing);
    const width = Math.max(minBoxWidth, labelSize.width + 2 * boxPaddingH);
    const height = Math.max(
      minBoxHeight,
      labelSize.height + 2 * boxPaddingV,
      portAreaHeight + 2 * boxPaddingV
    );
    return {
      id: boxId(box.name),
      labels: [{ text: boxLabel, width: labelSize.width, height: labelSize.height }],
      width,
      height,
      ports,
      layoutOptions: {
        "elk.portConstraints": "FIXED_SIDE",
        "elk.nodeLabels.placement": "INSIDE V_CENTER H_CENTER",
        "elk.portLabels.placement": "OUTSIDE",
        "elk.padding": `[top=${boxPaddingV},left=${boxPaddingH},bottom=${boxPaddingV},right=${boxPaddingH}]`,
        "elk.nodeSize.constraints": "NODE_LABELS PORTS MINIMUM_SIZE",
        "elk.nodeSize.minimum": `(${width},${height})`,
        [`elk.portAlignment.${portSide.toLowerCase()}`]: "CENTER",
        "elk.spacing.portPort": String(portSpacing)
      }
    };
  });
  const junctionOuterPort = /* @__PURE__ */ new Map();
  for (const port of uwd?.outerPorts ?? []) {
    if (port.junction != null) {
      junctionOuterPort.set(port.junction, outerPortId(port.name));
    }
  }
  const edges = [];
  let edgeIndex = 0;
  for (const box of uwd?.boxes ?? []) {
    for (const port of box.ports) {
      const outerPort = port.junction != null ? junctionOuterPort.get(port.junction) : undefined;
      if (outerPort) {
        edges.push({
          id: `wire-${edgeIndex++}`,
          sources: [outerPort],
          targets: [boxPortId(box.name, port.name)]
        });
      }
    }
  }
  const outerNode = {
    id: "outer",
    children: boxNodes,
    ports: outerPorts,
    edges,
    layoutOptions: {
      "elk.algorithm": "layered",
      "elk.direction": elkDirection,
      "elk.hierarchyHandling": "INCLUDE_CHILDREN",
      "elk.portConstraints": "FIXED_SIDE",
      "elk.portLabels.placement": "OUTSIDE",
      "elk.padding": `[top=${outerPadding},left=${outerPadding},bottom=${outerPadding},right=${outerPadding}]`,
      "elk.nodeSize.constraints": "NODE_LABELS PORTS MINIMUM_SIZE",
      "elk.layered.mergeEdges": "true",
      "elk.layered.spacing.baseValue": String(layeredBaseSpacing),
      "elk.layered.spacing.nodeNodeBetweenLayers": String(layeredInterLayerSpacing),
      "elk.spacing.nodeNode": String(nodeSpacing),
      "elk.spacing.portPort": String(outerPortSpacing)
    }
  };
  return {
    id: "root",
    children: [outerNode],
    layoutOptions: {
      "elk.algorithm": "layered",
      "elk.direction": elkDirection
    }
  };
}
function parseUwdElkLayout(root) {
  const outerElk = root.children?.[0];
  const outerX = outerElk?.x ?? 0;
  const outerY = outerElk?.y ?? 0;
  const outerWidth = outerElk?.width ?? 0;
  const outerHeight = outerElk?.height ?? 0;
  const outerPorts = (outerElk?.ports ?? []).map(
    (port) => parseElkPortLayout(port, outerX, outerY)
  );
  const boxes = [];
  for (const child of outerElk?.children ?? []) {
    const cx = outerX + (child.x ?? 0);
    const cy = outerY + (child.y ?? 0);
    const cw = child.width ?? 0;
    const ch = child.height ?? 0;
    const childPorts = (child.ports ?? []).map(
      (port) => parseElkPortLayout(port, cx, cy)
    );
    boxes.push({
      x: cx,
      y: cy,
      width: cw,
      height: ch,
      label: child.labels?.[0]?.text ?? "",
      ports: childPorts
    });
  }
  const wireEdges = [];
  for (const edge of outerElk?.edges ?? []) {
    const path = sectionsToPath(edge.sections ?? [], outerX, outerY);
    const jps = (edge.junctionPoints ?? []).map((p) => ({
      x: outerX + p.x,
      y: outerY + p.y
    }));
    wireEdges.push({ path, junctionPoints: jps });
  }
  return {
    width: root.width ?? outerWidth,
    height: root.height ?? outerHeight,
    outer: {
      x: outerX,
      y: outerY,
      width: outerWidth,
      height: outerHeight,
      ports: outerPorts
    },
    boxes,
    wireEdges
  };
}
function boxId(name) {
  return `box-${name}`;
}
function boxPortId(boxName, portName) {
  return `box-${boxName}-port-${portName}`;
}
function outerPortId(portName) {
  return `outer-port-${portName}`;
}

const root = "_root_10dpy_1";
const outer = "_outer_10dpy_7";
const box = "_box_10dpy_14";
const boxLabel = "_boxLabel_10dpy_20";
const port = "_port_10dpy_24";
const portLabel = "_portLabel_10dpy_28";
const wireEdge = "_wireEdge_10dpy_33";
const junction = "_junction_10dpy_39";
const styles = {
	root: root,
	outer: outer,
	box: box,
	boxLabel: boxLabel,
	port: port,
	portLabel: portLabel,
	wireEdge: wireEdge,
	junction: junction
};

var _tmpl$$1 = /* @__PURE__ */ template(`<svg><rect>`), _tmpl$2 = /* @__PURE__ */ template(`<svg><g><rect></rect><text dominant-baseline=middle></svg>`, false, true, false), _tmpl$3 = /* @__PURE__ */ template(`<svg><g><path></svg>`, false, true, false), _tmpl$4 = /* @__PURE__ */ template(`<svg><circle r=4></svg>`, false, true, false);
const portHalf = portSize / 2;
function UwdSVG(props) {
  return (() => {
    var _el$ = _tmpl$$1(), _el$2 = _el$.firstChild;
    var _ref$ = props.ref;
    typeof _ref$ === "function" ? use(_ref$, _el$) : props.ref = _el$;
    insert(_el$, createComponent(For, {
      get each() {
        return props.layout.wireEdges;
      },
      children: (edge) => createComponent(UwdWireEdgeSVG, {
        edge
      })
    }), null);
    insert(_el$, createComponent(For, {
      get each() {
        return props.layout.boxes;
      },
      children: (box) => createComponent(UwdBoxSVG, {
        box
      })
    }), null);
    insert(_el$, createComponent(For, {
      get each() {
        return props.layout.outer.ports;
      },
      children: (port) => createComponent(UwdPortSVG, {
        port
      })
    }), null);
    effect((_p$) => {
      var _v$ = styles.root, _v$2 = props.layout.width, _v$3 = props.layout.height, _v$4 = styles.outer, _v$5 = props.layout.outer.x, _v$6 = props.layout.outer.y, _v$7 = props.layout.outer.width, _v$8 = props.layout.outer.height;
      _v$ !== _p$.e && setAttribute(_el$, "class", _p$.e = _v$);
      _v$2 !== _p$.t && setAttribute(_el$, "width", _p$.t = _v$2);
      _v$3 !== _p$.a && setAttribute(_el$, "height", _p$.a = _v$3);
      _v$4 !== _p$.o && setAttribute(_el$2, "class", _p$.o = _v$4);
      _v$5 !== _p$.i && setAttribute(_el$2, "x", _p$.i = _v$5);
      _v$6 !== _p$.n && setAttribute(_el$2, "y", _p$.n = _v$6);
      _v$7 !== _p$.s && setAttribute(_el$2, "width", _p$.s = _v$7);
      _v$8 !== _p$.h && setAttribute(_el$2, "height", _p$.h = _v$8);
      return _p$;
    }, {
      e: undefined,
      t: undefined,
      a: undefined,
      o: undefined,
      i: undefined,
      n: undefined,
      s: undefined,
      h: undefined
    });
    return _el$;
  })();
}
function UwdBoxSVG(props) {
  return createComponent(LabeledRect, {
    get x() {
      return props.box.x;
    },
    get y() {
      return props.box.y;
    },
    get width() {
      return props.box.width;
    },
    get height() {
      return props.box.height;
    },
    get label() {
      return props.box.label;
    },
    get ["class"]() {
      return styles.box;
    },
    get labelClass() {
      return styles.boxLabel;
    },
    get children() {
      return createComponent(For, {
        get each() {
          return props.box.ports;
        },
        children: (port) => createComponent(UwdPortSVG, {
          port
        })
      });
    }
  });
}
function UwdPortSVG(props) {
  return (() => {
    var _el$3 = _tmpl$2(), _el$4 = _el$3.firstChild, _el$5 = _el$4.nextSibling;
    setAttribute(_el$4, "width", portHalf * 2);
    setAttribute(_el$4, "height", portHalf * 2);
    insert(_el$5, () => props.port.label);
    effect((_p$) => {
      var _v$9 = styles.port, _v$10 = props.port.x - portHalf, _v$11 = props.port.y - portHalf, _v$12 = styles.portLabel, _v$13 = props.port.labelX, _v$14 = props.port.labelY;
      _v$9 !== _p$.e && setAttribute(_el$3, "class", _p$.e = _v$9);
      _v$10 !== _p$.t && setAttribute(_el$4, "x", _p$.t = _v$10);
      _v$11 !== _p$.a && setAttribute(_el$4, "y", _p$.a = _v$11);
      _v$12 !== _p$.o && setAttribute(_el$5, "class", _p$.o = _v$12);
      _v$13 !== _p$.i && setAttribute(_el$5, "x", _p$.i = _v$13);
      _v$14 !== _p$.n && setAttribute(_el$5, "y", _p$.n = _v$14);
      return _p$;
    }, {
      e: undefined,
      t: undefined,
      a: undefined,
      o: undefined,
      i: undefined,
      n: undefined
    });
    return _el$3;
  })();
}
function UwdWireEdgeSVG(props) {
  return (() => {
    var _el$6 = _tmpl$3(), _el$7 = _el$6.firstChild;
    insert(_el$6, createComponent(For, {
      get each() {
        return props.edge.junctionPoints;
      },
      children: (pt) => (() => {
        var _el$8 = _tmpl$4();
        effect((_p$) => {
          var _v$17 = styles.junction, _v$18 = pt.x, _v$19 = pt.y;
          _v$17 !== _p$.e && setAttribute(_el$8, "class", _p$.e = _v$17);
          _v$18 !== _p$.t && setAttribute(_el$8, "cx", _p$.t = _v$18);
          _v$19 !== _p$.a && setAttribute(_el$8, "cy", _p$.a = _v$19);
          return _p$;
        }, {
          e: undefined,
          t: undefined,
          a: undefined
        });
        return _el$8;
      })()
    }), null);
    effect((_p$) => {
      var _v$15 = styles.wireEdge, _v$16 = props.edge.path;
      _v$15 !== _p$.e && setAttribute(_el$7, "class", _p$.e = _v$15);
      _v$16 !== _p$.t && setAttribute(_el$7, "d", _p$.t = _v$16);
      return _p$;
    }, {
      e: undefined,
      t: undefined
    });
    return _el$6;
  })();
}

var _tmpl$ = /* @__PURE__ */ template(`<div class=graph-visualization-container><div class=graph-visualization>`);
function CompositionPattern(props) {
  const [svgRef, setSvgRef] = createSignal();
  const uwd = () => props.liveModel.elaboratedModel()?.compositionPattern();
  const elkGraph = () => uwdToElk(uwd());
  return (() => {
    var _el$ = _tmpl$(), _el$2 = _el$.firstChild;
    insert(_el$, createComponent(BlockTitle, {
      title: "Composition pattern",
      get actions() {
        return createComponent(DownloadSVGButton, {
          get svg() {
            return svgRef();
          },
          tooltip: "Export the composition pattern as an SVG",
          size: 16
        });
      }
    }), _el$2);
    insert(_el$2, createComponent(ElkLayout, {
      get graph() {
        return elkGraph();
      },
      elkToLayout: parseUwdElkLayout,
      children: (layout) => createComponent(UwdSVG, {
        get layout() {
          return layout();
        },
        ref: setSvgRef
      })
    }));
    return _el$;
  })();
}

export { CompositionPattern as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9zaXRpb25fcGF0dGVybi1CNFNvSnVwRS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vZnJvbnRlbmQvc3JjL3Zpc3VhbGl6YXRpb24vdW5kaXJlY3RlZF93aXJpbmdfZGlhZ3JhbV9lbGsudHMiLCIuLi8uLi8uLi9mcm9udGVuZC9zcmMvdmlzdWFsaXphdGlvbi91bmRpcmVjdGVkX3dpcmluZ19kaWFncmFtX3N2Zy50c3giLCIuLi8uLi8uLi9mcm9udGVuZC9zcmMvc3RkbGliL2FuYWx5c2VzL2NvbXBvc2l0aW9uX3BhdHRlcm4udHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBDb252ZXJzaW9uIG9mIHVuZGlyZWN0ZWQgd2lyaW5nIGRpYWdyYW1zIChVV0RzKSB0byBFTEsgZ3JhcGhzIGFuZCBwYXJzaW5nXG5vZiB0aGUgcmVzdWx0aW5nIGxheW91dHMuXG5cbkJveGVzIHJlcHJlc2VudCBzdWItbW9kZWxzLCBwb3J0cyByZXByZXNlbnQgc2hhcmVkIGludGVyZmFjZXMsIGFuZCBqdW5jdGlvbnNcbmNvbm5lY3QgcG9ydHMgYWNyb3NzIHN1Yi1tb2RlbHMgdmlhIHVuZGlyZWN0ZWQgd2lyZXMuXG4gKi9cblxuaW1wb3J0IHR5cGUgeyBFbGtFeHRlbmRlZEVkZ2UsIEVsa05vZGUsIEVsa1BvcnQgfSBmcm9tIFwiZWxranNcIjtcblxuaW1wb3J0IHR5cGUgeyBVV0QgfSBmcm9tIFwiY2F0bG9nLXdhc21cIjtcbmltcG9ydCB7XG4gICAgdHlwZSBFbGtCb3hMYXlvdXQsXG4gICAgdHlwZSBFbGtFZGdlTGF5b3V0LFxuICAgIHR5cGUgRWxrSGllcmFyY2hpY2FsTGF5b3V0LFxuICAgIHR5cGUgRWxrUG9ydExheW91dCxcbiAgICBwYXJzZUVsa1BvcnRMYXlvdXQsXG4gICAgcG9ydFNpemUsXG4gICAgc2VjdGlvbnNUb1BhdGgsXG59IGZyb20gXCIuL2Vsa1wiO1xuaW1wb3J0IHsgZ2V0TWFpbkZvbnQsIG1lYXN1cmVUZXh0IH0gZnJvbSBcIi4vZm9udF91dGlsc1wiO1xuXG5jb25zdCBib3hQYWRkaW5nSCA9IDE2O1xuY29uc3QgYm94UGFkZGluZ1YgPSAxMDtcbmNvbnN0IG91dGVyUGFkZGluZyA9IDQwO1xuY29uc3QgcG9ydFNwYWNpbmcgPSAxMjtcbmNvbnN0IG1pbkJveFdpZHRoID0gODA7XG5jb25zdCBtaW5Cb3hIZWlnaHQgPSA1MDtcblxuLy8gU3BhY2luZyBjb25zdGFudHMgZm9yIEVMSyBsYXlvdXQgb3B0aW9ucy5cbmNvbnN0IGxheWVyZWRCYXNlU3BhY2luZyA9IDQwO1xuY29uc3QgbGF5ZXJlZEludGVyTGF5ZXJTcGFjaW5nID0gNjA7XG5jb25zdCBub2RlU3BhY2luZyA9IDMwO1xuY29uc3Qgb3V0ZXJQb3J0U3BhY2luZyA9IDIwO1xuXG4vKiogQ29udmVydCBhIFVXRCB0byBhbiBFTEsgaGllcmFyY2hpY2FsIGdyYXBoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdXdkVG9FbGsodXdkOiBVV0QgfCB1bmRlZmluZWQpOiBFbGtOb2RlIHtcbiAgICBjb25zdCBlbGtEaXJlY3Rpb24gPSBcIlJJR0hUXCI7XG4gICAgY29uc3QgcG9ydFNpZGUgPSBcIkVBU1RcIjtcblxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XG4gICAgY29uc3QgZm9udCA9IGdldE1haW5Gb250KCk7XG5cbiAgICBjb25zdCBvdXRlclBvcnRzOiBFbGtQb3J0W10gPSAodXdkPy5vdXRlclBvcnRzID8/IFtdKS5tYXAoKHBvcnQpID0+IHtcbiAgICAgICAgY29uc3QgdGV4dCA9IFN0cmluZyhwb3J0LmxhYmVsKTtcbiAgICAgICAgY29uc3QgbGFiZWxTaXplID0gbWVhc3VyZVRleHQoY2FudmFzLCB0ZXh0LCBmb250KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlkOiBvdXRlclBvcnRJZChwb3J0Lm5hbWUpLFxuICAgICAgICAgICAgd2lkdGg6IHBvcnRTaXplLFxuICAgICAgICAgICAgaGVpZ2h0OiBwb3J0U2l6ZSxcbiAgICAgICAgICAgIGxhYmVsczogW3sgdGV4dCwgd2lkdGg6IGxhYmVsU2l6ZS53aWR0aCwgaGVpZ2h0OiBsYWJlbFNpemUuaGVpZ2h0IH1dLFxuICAgICAgICAgICAgbGF5b3V0T3B0aW9uczoge1xuICAgICAgICAgICAgICAgIFwiZWxrLnBvcnQuc2lkZVwiOiBwb3J0U2lkZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICBjb25zdCBib3hOb2RlczogRWxrTm9kZVtdID0gKHV3ZD8uYm94ZXMgPz8gW10pLm1hcCgoYm94KSA9PiB7XG4gICAgICAgIGNvbnN0IGJveExhYmVsID0gU3RyaW5nKGJveC5sYWJlbCk7XG4gICAgICAgIGNvbnN0IGxhYmVsU2l6ZSA9IG1lYXN1cmVUZXh0KGNhbnZhcywgYm94TGFiZWwsIGZvbnQpO1xuXG4gICAgICAgIGNvbnN0IHBvcnRzOiBFbGtQb3J0W10gPSBib3gucG9ydHMubWFwKChwb3J0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0ID0gU3RyaW5nKHBvcnQubGFiZWwpO1xuICAgICAgICAgICAgY29uc3QgcG9ydExhYmVsU2l6ZSA9IG1lYXN1cmVUZXh0KGNhbnZhcywgdGV4dCwgZm9udCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGlkOiBib3hQb3J0SWQoYm94Lm5hbWUsIHBvcnQubmFtZSksXG4gICAgICAgICAgICAgICAgd2lkdGg6IHBvcnRTaXplLFxuICAgICAgICAgICAgICAgIGhlaWdodDogcG9ydFNpemUsXG4gICAgICAgICAgICAgICAgbGFiZWxzOiBbeyB0ZXh0LCB3aWR0aDogcG9ydExhYmVsU2l6ZS53aWR0aCwgaGVpZ2h0OiBwb3J0TGFiZWxTaXplLmhlaWdodCB9XSxcbiAgICAgICAgICAgICAgICBsYXlvdXRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiZWxrLnBvcnQuc2lkZVwiOiBwb3J0U2lkZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgdG90YWxQb3J0cyA9IHBvcnRzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgcG9ydEFyZWFIZWlnaHQgPSB0b3RhbFBvcnRzICogKHBvcnRTaXplICsgcG9ydFNwYWNpbmcpO1xuICAgICAgICBjb25zdCB3aWR0aCA9IE1hdGgubWF4KG1pbkJveFdpZHRoLCBsYWJlbFNpemUud2lkdGggKyAyICogYm94UGFkZGluZ0gpO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSBNYXRoLm1heChcbiAgICAgICAgICAgIG1pbkJveEhlaWdodCxcbiAgICAgICAgICAgIGxhYmVsU2l6ZS5oZWlnaHQgKyAyICogYm94UGFkZGluZ1YsXG4gICAgICAgICAgICBwb3J0QXJlYUhlaWdodCArIDIgKiBib3hQYWRkaW5nVixcbiAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaWQ6IGJveElkKGJveC5uYW1lKSxcbiAgICAgICAgICAgIGxhYmVsczogW3sgdGV4dDogYm94TGFiZWwsIHdpZHRoOiBsYWJlbFNpemUud2lkdGgsIGhlaWdodDogbGFiZWxTaXplLmhlaWdodCB9XSxcbiAgICAgICAgICAgIHdpZHRoLFxuICAgICAgICAgICAgaGVpZ2h0LFxuICAgICAgICAgICAgcG9ydHMsXG4gICAgICAgICAgICBsYXlvdXRPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgXCJlbGsucG9ydENvbnN0cmFpbnRzXCI6IFwiRklYRURfU0lERVwiLFxuICAgICAgICAgICAgICAgIFwiZWxrLm5vZGVMYWJlbHMucGxhY2VtZW50XCI6IFwiSU5TSURFIFZfQ0VOVEVSIEhfQ0VOVEVSXCIsXG4gICAgICAgICAgICAgICAgXCJlbGsucG9ydExhYmVscy5wbGFjZW1lbnRcIjogXCJPVVRTSURFXCIsXG4gICAgICAgICAgICAgICAgXCJlbGsucGFkZGluZ1wiOiBgW3RvcD0ke2JveFBhZGRpbmdWfSxsZWZ0PSR7Ym94UGFkZGluZ0h9LGJvdHRvbT0ke2JveFBhZGRpbmdWfSxyaWdodD0ke2JveFBhZGRpbmdIfV1gLFxuICAgICAgICAgICAgICAgIFwiZWxrLm5vZGVTaXplLmNvbnN0cmFpbnRzXCI6IFwiTk9ERV9MQUJFTFMgUE9SVFMgTUlOSU1VTV9TSVpFXCIsXG4gICAgICAgICAgICAgICAgXCJlbGsubm9kZVNpemUubWluaW11bVwiOiBgKCR7d2lkdGh9LCR7aGVpZ2h0fSlgLFxuICAgICAgICAgICAgICAgIFtgZWxrLnBvcnRBbGlnbm1lbnQuJHtwb3J0U2lkZS50b0xvd2VyQ2FzZSgpfWBdOiBcIkNFTlRFUlwiLFxuICAgICAgICAgICAgICAgIFwiZWxrLnNwYWNpbmcucG9ydFBvcnRcIjogU3RyaW5nKHBvcnRTcGFjaW5nKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICAvLyBCdWlsZCBhIG1hcCBmcm9tIGp1bmN0aW9uIG5hbWUgdG8gaXRzIG91dGVyIHBvcnQgSUQuXG4gICAgY29uc3QganVuY3Rpb25PdXRlclBvcnQgPSBuZXcgTWFwPHN0cmluZywgc3RyaW5nPigpO1xuICAgIGZvciAoY29uc3QgcG9ydCBvZiB1d2Q/Lm91dGVyUG9ydHMgPz8gW10pIHtcbiAgICAgICAgaWYgKHBvcnQuanVuY3Rpb24gIT0gbnVsbCkge1xuICAgICAgICAgICAganVuY3Rpb25PdXRlclBvcnQuc2V0KHBvcnQuanVuY3Rpb24sIG91dGVyUG9ydElkKHBvcnQubmFtZSkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQnVpbGQgd2lyZSBlZGdlczogY29ubmVjdCBlYWNoIGJveCBwb3J0IHRvIGl0cyBqdW5jdGlvbidzIG91dGVyIHBvcnQuXG4gICAgLy8gQ29tYmluZWQgd2l0aCBFTEsncyBtZXJnZUVkZ2VzIG9wdGlvbiwgZWRnZXMgc2hhcmluZyBhbiBvdXRlciBwb3J0IGFyZVxuICAgIC8vIG1lcmdlZCBhbG9uZyBjb21tb24gc2VnbWVudHMuXG4gICAgY29uc3QgZWRnZXM6IEVsa0V4dGVuZGVkRWRnZVtdID0gW107XG4gICAgbGV0IGVkZ2VJbmRleCA9IDA7XG4gICAgZm9yIChjb25zdCBib3ggb2YgdXdkPy5ib3hlcyA/PyBbXSkge1xuICAgICAgICBmb3IgKGNvbnN0IHBvcnQgb2YgYm94LnBvcnRzKSB7XG4gICAgICAgICAgICBjb25zdCBvdXRlclBvcnQgPVxuICAgICAgICAgICAgICAgIHBvcnQuanVuY3Rpb24gIT0gbnVsbCA/IGp1bmN0aW9uT3V0ZXJQb3J0LmdldChwb3J0Lmp1bmN0aW9uKSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIGlmIChvdXRlclBvcnQpIHtcbiAgICAgICAgICAgICAgICBlZGdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGB3aXJlLSR7ZWRnZUluZGV4Kyt9YCxcbiAgICAgICAgICAgICAgICAgICAgc291cmNlczogW291dGVyUG9ydF0sXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IFtib3hQb3J0SWQoYm94Lm5hbWUsIHBvcnQubmFtZSldLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgb3V0ZXJOb2RlOiBFbGtOb2RlID0ge1xuICAgICAgICBpZDogXCJvdXRlclwiLFxuICAgICAgICBjaGlsZHJlbjogYm94Tm9kZXMsXG4gICAgICAgIHBvcnRzOiBvdXRlclBvcnRzLFxuICAgICAgICBlZGdlcyxcbiAgICAgICAgbGF5b3V0T3B0aW9uczoge1xuICAgICAgICAgICAgXCJlbGsuYWxnb3JpdGhtXCI6IFwibGF5ZXJlZFwiLFxuICAgICAgICAgICAgXCJlbGsuZGlyZWN0aW9uXCI6IGVsa0RpcmVjdGlvbixcbiAgICAgICAgICAgIFwiZWxrLmhpZXJhcmNoeUhhbmRsaW5nXCI6IFwiSU5DTFVERV9DSElMRFJFTlwiLFxuICAgICAgICAgICAgXCJlbGsucG9ydENvbnN0cmFpbnRzXCI6IFwiRklYRURfU0lERVwiLFxuICAgICAgICAgICAgXCJlbGsucG9ydExhYmVscy5wbGFjZW1lbnRcIjogXCJPVVRTSURFXCIsXG4gICAgICAgICAgICBcImVsay5wYWRkaW5nXCI6IGBbdG9wPSR7b3V0ZXJQYWRkaW5nfSxsZWZ0PSR7b3V0ZXJQYWRkaW5nfSxib3R0b209JHtvdXRlclBhZGRpbmd9LHJpZ2h0PSR7b3V0ZXJQYWRkaW5nfV1gLFxuICAgICAgICAgICAgXCJlbGsubm9kZVNpemUuY29uc3RyYWludHNcIjogXCJOT0RFX0xBQkVMUyBQT1JUUyBNSU5JTVVNX1NJWkVcIixcbiAgICAgICAgICAgIFwiZWxrLmxheWVyZWQubWVyZ2VFZGdlc1wiOiBcInRydWVcIixcbiAgICAgICAgICAgIFwiZWxrLmxheWVyZWQuc3BhY2luZy5iYXNlVmFsdWVcIjogU3RyaW5nKGxheWVyZWRCYXNlU3BhY2luZyksXG4gICAgICAgICAgICBcImVsay5sYXllcmVkLnNwYWNpbmcubm9kZU5vZGVCZXR3ZWVuTGF5ZXJzXCI6IFN0cmluZyhsYXllcmVkSW50ZXJMYXllclNwYWNpbmcpLFxuICAgICAgICAgICAgXCJlbGsuc3BhY2luZy5ub2RlTm9kZVwiOiBTdHJpbmcobm9kZVNwYWNpbmcpLFxuICAgICAgICAgICAgXCJlbGsuc3BhY2luZy5wb3J0UG9ydFwiOiBTdHJpbmcob3V0ZXJQb3J0U3BhY2luZyksXG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGlkOiBcInJvb3RcIixcbiAgICAgICAgY2hpbGRyZW46IFtvdXRlck5vZGVdLFxuICAgICAgICBsYXlvdXRPcHRpb25zOiB7XG4gICAgICAgICAgICBcImVsay5hbGdvcml0aG1cIjogXCJsYXllcmVkXCIsXG4gICAgICAgICAgICBcImVsay5kaXJlY3Rpb25cIjogZWxrRGlyZWN0aW9uLFxuICAgICAgICB9LFxuICAgIH07XG59XG5cbi8qKiBQYXJzZSB0aGUgRUxLIGxheW91dCByZXN1bHQgaW50byBhbiBgRWxrSGllcmFyY2hpY2FsTGF5b3V0YC4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVV3ZEVsa0xheW91dChyb290OiBFbGtOb2RlKTogRWxrSGllcmFyY2hpY2FsTGF5b3V0IHtcbiAgICBjb25zdCBvdXRlckVsayA9IHJvb3QuY2hpbGRyZW4/LlswXTtcbiAgICBjb25zdCBvdXRlclggPSBvdXRlckVsaz8ueCA/PyAwO1xuICAgIGNvbnN0IG91dGVyWSA9IG91dGVyRWxrPy55ID8/IDA7XG4gICAgY29uc3Qgb3V0ZXJXaWR0aCA9IG91dGVyRWxrPy53aWR0aCA/PyAwO1xuICAgIGNvbnN0IG91dGVySGVpZ2h0ID0gb3V0ZXJFbGs/LmhlaWdodCA/PyAwO1xuXG4gICAgLy8gUGFyc2Ugb3V0ZXIgcG9ydHMuXG4gICAgY29uc3Qgb3V0ZXJQb3J0czogRWxrUG9ydExheW91dFtdID0gKG91dGVyRWxrPy5wb3J0cyA/PyBbXSkubWFwKChwb3J0KSA9PlxuICAgICAgICBwYXJzZUVsa1BvcnRMYXlvdXQocG9ydCwgb3V0ZXJYLCBvdXRlclkpLFxuICAgICk7XG5cbiAgICBjb25zdCBib3hlczogRWxrQm94TGF5b3V0W10gPSBbXTtcblxuICAgIGZvciAoY29uc3QgY2hpbGQgb2Ygb3V0ZXJFbGs/LmNoaWxkcmVuID8/IFtdKSB7XG4gICAgICAgIGNvbnN0IGN4ID0gb3V0ZXJYICsgKGNoaWxkLnggPz8gMCk7XG4gICAgICAgIGNvbnN0IGN5ID0gb3V0ZXJZICsgKGNoaWxkLnkgPz8gMCk7XG4gICAgICAgIGNvbnN0IGN3ID0gY2hpbGQud2lkdGggPz8gMDtcbiAgICAgICAgY29uc3QgY2ggPSBjaGlsZC5oZWlnaHQgPz8gMDtcblxuICAgICAgICBjb25zdCBjaGlsZFBvcnRzOiBFbGtQb3J0TGF5b3V0W10gPSAoY2hpbGQucG9ydHMgPz8gW10pLm1hcCgocG9ydCkgPT5cbiAgICAgICAgICAgIHBhcnNlRWxrUG9ydExheW91dChwb3J0LCBjeCwgY3kpLFxuICAgICAgICApO1xuXG4gICAgICAgIGJveGVzLnB1c2goe1xuICAgICAgICAgICAgeDogY3gsXG4gICAgICAgICAgICB5OiBjeSxcbiAgICAgICAgICAgIHdpZHRoOiBjdyxcbiAgICAgICAgICAgIGhlaWdodDogY2gsXG4gICAgICAgICAgICBsYWJlbDogY2hpbGQubGFiZWxzPy5bMF0/LnRleHQgPz8gXCJcIixcbiAgICAgICAgICAgIHBvcnRzOiBjaGlsZFBvcnRzLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBQYXJzZSB3aXJlIGVkZ2VzLlxuICAgIGNvbnN0IHdpcmVFZGdlczogRWxrRWRnZUxheW91dFtdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IGVkZ2Ugb2Ygb3V0ZXJFbGs/LmVkZ2VzID8/IFtdKSB7XG4gICAgICAgIGNvbnN0IHBhdGggPSBzZWN0aW9uc1RvUGF0aChlZGdlLnNlY3Rpb25zID8/IFtdLCBvdXRlclgsIG91dGVyWSk7XG4gICAgICAgIGNvbnN0IGpwcyA9IChlZGdlLmp1bmN0aW9uUG9pbnRzID8/IFtdKS5tYXAoKHApID0+ICh7XG4gICAgICAgICAgICB4OiBvdXRlclggKyBwLngsXG4gICAgICAgICAgICB5OiBvdXRlclkgKyBwLnksXG4gICAgICAgIH0pKTtcbiAgICAgICAgd2lyZUVkZ2VzLnB1c2goeyBwYXRoLCBqdW5jdGlvblBvaW50czoganBzIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHdpZHRoOiByb290LndpZHRoID8/IG91dGVyV2lkdGgsXG4gICAgICAgIGhlaWdodDogcm9vdC5oZWlnaHQgPz8gb3V0ZXJIZWlnaHQsXG4gICAgICAgIG91dGVyOiB7XG4gICAgICAgICAgICB4OiBvdXRlclgsXG4gICAgICAgICAgICB5OiBvdXRlclksXG4gICAgICAgICAgICB3aWR0aDogb3V0ZXJXaWR0aCxcbiAgICAgICAgICAgIGhlaWdodDogb3V0ZXJIZWlnaHQsXG4gICAgICAgICAgICBwb3J0czogb3V0ZXJQb3J0cyxcbiAgICAgICAgfSxcbiAgICAgICAgYm94ZXMsXG4gICAgICAgIHdpcmVFZGdlcyxcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBib3hJZChuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiBgYm94LSR7bmFtZX1gO1xufVxuXG5mdW5jdGlvbiBib3hQb3J0SWQoYm94TmFtZTogc3RyaW5nLCBwb3J0TmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYGJveC0ke2JveE5hbWV9LXBvcnQtJHtwb3J0TmFtZX1gO1xufVxuXG5mdW5jdGlvbiBvdXRlclBvcnRJZChwb3J0TmFtZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYG91dGVyLXBvcnQtJHtwb3J0TmFtZX1gO1xufVxuIiwiLyoqIFNWRyByZW5kZXJlciBmb3IgdW5kaXJlY3RlZCB3aXJpbmcgZGlhZ3JhbSBsYXlvdXRzLiAqL1xuXG5pbXBvcnQgeyBGb3IgfSBmcm9tIFwic29saWQtanNcIjtcblxuaW1wb3J0IHtcbiAgICB0eXBlIEVsa0JveExheW91dCxcbiAgICB0eXBlIEVsa0VkZ2VMYXlvdXQsXG4gICAgdHlwZSBFbGtIaWVyYXJjaGljYWxMYXlvdXQsXG4gICAgdHlwZSBFbGtQb3J0TGF5b3V0LFxuICAgIExhYmVsZWRSZWN0LFxuICAgIHBvcnRTaXplLFxuICAgIHR5cGUgU1ZHUmVmUHJvcCxcbn0gZnJvbSBcIi5cIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi91bmRpcmVjdGVkX3dpcmluZ19kaWFncmFtLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgcG9ydEhhbGYgPSBwb3J0U2l6ZSAvIDI7XG5cbi8qKiBSZW5kZXIgYSBVV0QgbGF5b3V0IGFzIGFuIFNWRy4gKi9cbmV4cG9ydCBmdW5jdGlvbiBVd2RTVkcocHJvcHM6IHsgbGF5b3V0OiBFbGtIaWVyYXJjaGljYWxMYXlvdXQ7IHJlZj86IFNWR1JlZlByb3AgfSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzdmdcbiAgICAgICAgICAgIHJlZj17cHJvcHMucmVmfVxuICAgICAgICAgICAgY2xhc3M9e3N0eWxlcy5yb290fVxuICAgICAgICAgICAgd2lkdGg9e3Byb3BzLmxheW91dC53aWR0aH1cbiAgICAgICAgICAgIGhlaWdodD17cHJvcHMubGF5b3V0LmhlaWdodH1cbiAgICAgICAgPlxuICAgICAgICAgICAgey8qIE91dGVyIGJvdW5kYXJ5ICovfVxuICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICBjbGFzcz17c3R5bGVzLm91dGVyfVxuICAgICAgICAgICAgICAgIHg9e3Byb3BzLmxheW91dC5vdXRlci54fVxuICAgICAgICAgICAgICAgIHk9e3Byb3BzLmxheW91dC5vdXRlci55fVxuICAgICAgICAgICAgICAgIHdpZHRoPXtwcm9wcy5sYXlvdXQub3V0ZXIud2lkdGh9XG4gICAgICAgICAgICAgICAgaGVpZ2h0PXtwcm9wcy5sYXlvdXQub3V0ZXIuaGVpZ2h0fVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgey8qIFdpcmUgZWRnZXMgKHVuZGlyZWN0ZWQsIGRyYXduIGJlaGluZCBub2RlcykgKi99XG4gICAgICAgICAgICA8Rm9yIGVhY2g9e3Byb3BzLmxheW91dC53aXJlRWRnZXN9PnsoZWRnZSkgPT4gPFV3ZFdpcmVFZGdlU1ZHIGVkZ2U9e2VkZ2V9IC8+fTwvRm9yPlxuXG4gICAgICAgICAgICB7LyogQm94ZXMgKi99XG4gICAgICAgICAgICA8Rm9yIGVhY2g9e3Byb3BzLmxheW91dC5ib3hlc30+eyhib3gpID0+IDxVd2RCb3hTVkcgYm94PXtib3h9IC8+fTwvRm9yPlxuXG4gICAgICAgICAgICB7LyogT3V0ZXIgcG9ydHMgKi99XG4gICAgICAgICAgICA8Rm9yIGVhY2g9e3Byb3BzLmxheW91dC5vdXRlci5wb3J0c30+eyhwb3J0KSA9PiA8VXdkUG9ydFNWRyBwb3J0PXtwb3J0fSAvPn08L0Zvcj5cbiAgICAgICAgPC9zdmc+XG4gICAgKTtcbn1cblxuZnVuY3Rpb24gVXdkQm94U1ZHKHByb3BzOiB7IGJveDogRWxrQm94TGF5b3V0IH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGFiZWxlZFJlY3RcbiAgICAgICAgICAgIHg9e3Byb3BzLmJveC54fVxuICAgICAgICAgICAgeT17cHJvcHMuYm94Lnl9XG4gICAgICAgICAgICB3aWR0aD17cHJvcHMuYm94LndpZHRofVxuICAgICAgICAgICAgaGVpZ2h0PXtwcm9wcy5ib3guaGVpZ2h0fVxuICAgICAgICAgICAgbGFiZWw9e3Byb3BzLmJveC5sYWJlbH1cbiAgICAgICAgICAgIGNsYXNzPXtzdHlsZXMuYm94fVxuICAgICAgICAgICAgbGFiZWxDbGFzcz17c3R5bGVzLmJveExhYmVsfVxuICAgICAgICA+XG4gICAgICAgICAgICA8Rm9yIGVhY2g9e3Byb3BzLmJveC5wb3J0c30+eyhwb3J0KSA9PiA8VXdkUG9ydFNWRyBwb3J0PXtwb3J0fSAvPn08L0Zvcj5cbiAgICAgICAgPC9MYWJlbGVkUmVjdD5cbiAgICApO1xufVxuXG4vKiogUG9ydCByZW5kZXJlZCBhcyBhIHNtYWxsIHNxdWFyZSB3aXRoIGxhYmVsIHBvc2l0aW9uZWQgYnkgRUxLLiAqL1xuZnVuY3Rpb24gVXdkUG9ydFNWRyhwcm9wczogeyBwb3J0OiBFbGtQb3J0TGF5b3V0IH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8ZyBjbGFzcz17c3R5bGVzLnBvcnR9PlxuICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgICB4PXtwcm9wcy5wb3J0LnggLSBwb3J0SGFsZn1cbiAgICAgICAgICAgICAgICB5PXtwcm9wcy5wb3J0LnkgLSBwb3J0SGFsZn1cbiAgICAgICAgICAgICAgICB3aWR0aD17cG9ydEhhbGYgKiAyfVxuICAgICAgICAgICAgICAgIGhlaWdodD17cG9ydEhhbGYgKiAyfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDx0ZXh0XG4gICAgICAgICAgICAgICAgY2xhc3M9e3N0eWxlcy5wb3J0TGFiZWx9XG4gICAgICAgICAgICAgICAgeD17cHJvcHMucG9ydC5sYWJlbFh9XG4gICAgICAgICAgICAgICAgeT17cHJvcHMucG9ydC5sYWJlbFl9XG4gICAgICAgICAgICAgICAgZG9taW5hbnQtYmFzZWxpbmU9XCJtaWRkbGVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5wb3J0LmxhYmVsfVxuICAgICAgICAgICAgPC90ZXh0PlxuICAgICAgICA8L2c+XG4gICAgKTtcbn1cblxuLyoqIFVuZGlyZWN0ZWQgd2lyZSBlZGdlIChubyBhcnJvd2hlYWQpLCB3aXRoIGp1bmN0aW9uIGRvdHMgd2hlcmUgZWRnZXMgbWVyZ2UuICovXG5mdW5jdGlvbiBVd2RXaXJlRWRnZVNWRyhwcm9wczogeyBlZGdlOiBFbGtFZGdlTGF5b3V0IH0pIHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Zz5cbiAgICAgICAgICAgIDxwYXRoIGNsYXNzPXtzdHlsZXMud2lyZUVkZ2V9IGQ9e3Byb3BzLmVkZ2UucGF0aH0gLz5cbiAgICAgICAgICAgIDxGb3IgZWFjaD17cHJvcHMuZWRnZS5qdW5jdGlvblBvaW50c30+XG4gICAgICAgICAgICAgICAgeyhwdCkgPT4gPGNpcmNsZSBjbGFzcz17c3R5bGVzLmp1bmN0aW9ufSBjeD17cHQueH0gY3k9e3B0Lnl9IHI9ezR9IC8+fVxuICAgICAgICAgICAgPC9Gb3I+XG4gICAgICAgIDwvZz5cbiAgICApO1xufVxuIiwiLyoqIEFuYWx5c2lzIGNvbXBvbmVudCBmb3IgdmlzdWFsaXppbmcgdGhlIGNvbXBvc2l0aW9uIHBhdHRlcm4gb2YgYSBtb2RlbC4gKi9cblxuaW1wb3J0IHsgY3JlYXRlU2lnbmFsIH0gZnJvbSBcInNvbGlkLWpzXCI7XG5cbmltcG9ydCB7IEJsb2NrVGl0bGUgfSBmcm9tIFwiY2F0Y29sYWItdWktY29tcG9uZW50c1wiO1xuaW1wb3J0IHR5cGUgeyBNb2RlbEFuYWx5c2lzUHJvcHMgfSBmcm9tIFwiLi4vLi4vYW5hbHlzaXNcIjtcbmltcG9ydCB7IERvd25sb2FkU1ZHQnV0dG9uLCBFbGtMYXlvdXQgfSBmcm9tIFwiLi4vLi4vdmlzdWFsaXphdGlvblwiO1xuaW1wb3J0IHsgcGFyc2VVd2RFbGtMYXlvdXQsIHV3ZFRvRWxrIH0gZnJvbSBcIi4uLy4uL3Zpc3VhbGl6YXRpb24vdW5kaXJlY3RlZF93aXJpbmdfZGlhZ3JhbV9lbGtcIjtcbmltcG9ydCB7IFV3ZFNWRyB9IGZyb20gXCIuLi8uLi92aXN1YWxpemF0aW9uL3VuZGlyZWN0ZWRfd2lyaW5nX2RpYWdyYW1fc3ZnXCI7XG5pbXBvcnQgdHlwZSB7IENvbXBvc2l0aW9uUGF0dGVybkNvbmZpZyB9IGZyb20gXCIuL2NvbXBvc2l0aW9uX3BhdHRlcm5fY29uZmlnXCI7XG5cbmltcG9ydCBcIi4vZ3JhcGhfdmlzdWFsaXphdGlvbi5jc3NcIjtcblxuLyoqIFZpc3VhbGl6ZSB0aGUgY29tcG9zaXRpb24gcGF0dGVybiBhcyBhbiB1bmRpcmVjdGVkIHdpcmluZyBkaWFncmFtIChVV0QpIG9mIGEgY29tcG9zaXRlIG1vZGVsLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb21wb3NpdGlvblBhdHRlcm4ocHJvcHM6IE1vZGVsQW5hbHlzaXNQcm9wczxDb21wb3NpdGlvblBhdHRlcm5Db25maWc+KSB7XG4gICAgY29uc3QgW3N2Z1JlZiwgc2V0U3ZnUmVmXSA9IGNyZWF0ZVNpZ25hbDxTVkdTVkdFbGVtZW50PigpO1xuXG4gICAgY29uc3QgdXdkID0gKCkgPT4gcHJvcHMubGl2ZU1vZGVsLmVsYWJvcmF0ZWRNb2RlbCgpPy5jb21wb3NpdGlvblBhdHRlcm4oKTtcblxuICAgIGNvbnN0IGVsa0dyYXBoID0gKCkgPT4gdXdkVG9FbGsodXdkKCkpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzcz1cImdyYXBoLXZpc3VhbGl6YXRpb24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8QmxvY2tUaXRsZVxuICAgICAgICAgICAgICAgIHRpdGxlPVwiQ29tcG9zaXRpb24gcGF0dGVyblwiXG4gICAgICAgICAgICAgICAgYWN0aW9ucz17XG4gICAgICAgICAgICAgICAgICAgIDxEb3dubG9hZFNWR0J1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgc3ZnPXtzdmdSZWYoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2x0aXA9XCJFeHBvcnQgdGhlIGNvbXBvc2l0aW9uIHBhdHRlcm4gYXMgYW4gU1ZHXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9ezE2fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JhcGgtdmlzdWFsaXphdGlvblwiPlxuICAgICAgICAgICAgICAgIDxFbGtMYXlvdXQgZ3JhcGg9e2Vsa0dyYXBoKCl9IGVsa1RvTGF5b3V0PXtwYXJzZVV3ZEVsa0xheW91dH0+XG4gICAgICAgICAgICAgICAgICAgIHsobGF5b3V0KSA9PiA8VXdkU1ZHIGxheW91dD17bGF5b3V0KCl9IHJlZj17c2V0U3ZnUmVmfSAvPn1cbiAgICAgICAgICAgICAgICA8L0Vsa0xheW91dD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbInBvcnRIYWxmIiwicG9ydFNpemUiLCJVd2RTVkciLCJwcm9wcyIsIl9lbCQiLCJfdG1wbCQiLCJfZWwkMiIsImZpcnN0Q2hpbGQiLCJfcmVmJCIsInJlZiIsIl8kdXNlIiwiXyRpbnNlcnQiLCJfJGNyZWF0ZUNvbXBvbmVudCIsIkZvciIsImVhY2giLCJsYXlvdXQiLCJ3aXJlRWRnZXMiLCJjaGlsZHJlbiIsImVkZ2UiLCJVd2RXaXJlRWRnZVNWRyIsImJveGVzIiwiYm94IiwiVXdkQm94U1ZHIiwib3V0ZXIiLCJwb3J0cyIsInBvcnQiLCJVd2RQb3J0U1ZHIiwiXyRlZmZlY3QiLCJfcCQiLCJfdiQiLCJzdHlsZXMiLCJyb290IiwiX3YkMiIsIndpZHRoIiwiX3YkMyIsImhlaWdodCIsIl92JDQiLCJfdiQ1IiwieCIsIl92JDYiLCJ5IiwiX3YkNyIsIl92JDgiLCJlIiwiXyRzZXRBdHRyaWJ1dGUiLCJ0IiwiYSIsIm8iLCJpIiwibiIsInMiLCJoIiwidW5kZWZpbmVkIiwiTGFiZWxlZFJlY3QiLCJsYWJlbCIsImxhYmVsQ2xhc3MiLCJib3hMYWJlbCIsIl9lbCQzIiwiX3RtcGwkMiIsIl9lbCQ0IiwiX2VsJDUiLCJuZXh0U2libGluZyIsIl92JDkiLCJfdiQxMCIsIl92JDExIiwiX3YkMTIiLCJwb3J0TGFiZWwiLCJfdiQxMyIsImxhYmVsWCIsIl92JDE0IiwibGFiZWxZIiwiX2VsJDYiLCJfdG1wbCQzIiwiX2VsJDciLCJqdW5jdGlvblBvaW50cyIsInB0IiwiX2VsJDgiLCJfdG1wbCQ0IiwiX3YkMTciLCJqdW5jdGlvbiIsIl92JDE4IiwiX3YkMTkiLCJfdiQxNSIsIndpcmVFZGdlIiwiX3YkMTYiLCJwYXRoIiwiQ29tcG9zaXRpb25QYXR0ZXJuIiwic3ZnUmVmIiwic2V0U3ZnUmVmIiwiY3JlYXRlU2lnbmFsIiwidXdkIiwibGl2ZU1vZGVsIiwiZWxhYm9yYXRlZE1vZGVsIiwiY29tcG9zaXRpb25QYXR0ZXJuIiwiZWxrR3JhcGgiLCJ1d2RUb0VsayIsIkJsb2NrVGl0bGUiLCJ0aXRsZSIsImFjdGlvbnMiLCJEb3dubG9hZFNWR0J1dHRvbiIsInN2ZyIsInRvb2x0aXAiLCJzaXplIiwiRWxrTGF5b3V0IiwiZ3JhcGgiLCJlbGtUb0xheW91dCIsInBhcnNlVXdkRWxrTGF5b3V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUJBLE1BQU0sV0FBYyxHQUFBLEVBQUE7QUFDcEIsTUFBTSxXQUFjLEdBQUEsRUFBQTtBQUNwQixNQUFNLFlBQWUsR0FBQSxFQUFBO0FBQ3JCLE1BQU0sV0FBYyxHQUFBLEVBQUE7QUFDcEIsTUFBTSxXQUFjLEdBQUEsRUFBQTtBQUNwQixNQUFNLFlBQWUsR0FBQSxFQUFBO0FBR3JCLE1BQU0sa0JBQXFCLEdBQUEsRUFBQTtBQUMzQixNQUFNLHdCQUEyQixHQUFBLEVBQUE7QUFDakMsTUFBTSxXQUFjLEdBQUEsRUFBQTtBQUNwQixNQUFNLGdCQUFtQixHQUFBLEVBQUE7QUFJbEIsU0FBUyxTQUFT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
