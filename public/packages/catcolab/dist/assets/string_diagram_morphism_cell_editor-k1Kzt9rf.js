import { template, use, insert, createComponent, effect, className, memo, delegateEvents } from 'solid-js/web';
import { useContext, createSignal, createEffect, createMemo, untrack, Index } from 'solid-js';
import { L as LiveModelContext, o as invariant, N as NameInput, P as extractObList, Q as unwrapApp, r as removeProxyAndCopy, R as ObIdInput, U as wrapApp, V as buildObList } from './analysis_tool-CDs3CHfO.js';
import 'solid-js/store';
import '@automerge/automerge-repo';
import '@automerge/automerge-repo-network-websocket';
import '@automerge/automerge-repo-storage-indexeddb';
import './model-hspTLkzk.js';
import '@automerge/automerge/slim';
import '@automerge/automerge';
import './index-BLpRC7wy.js';
import '@inkandswitch/patchwork-providers';

const morphism = "_morphism_15y8s_1";
const wires = "_wires_15y8s_10";
const left = "_left_15y8s_19";
const right = "_right_15y8s_23";
const wire = "_wire_15y8s_10";
const wireLine = "_wireLine_15y8s_35";
const box = "_box_15y8s_42";
const addWire = "_addWire_15y8s_62";
const addWireButton = "_addWireButton_15y8s_73";
const styles = {
	morphism: morphism,
	wires: wires,
	left: left,
	right: right,
	wire: wire,
	wireLine: wireLine,
	box: box,
	addWire: addWire,
	addWireButton: addWireButton
};

var _tmpl$ = /* @__PURE__ */ template(`<div><div><div>`), _tmpl$2 = /* @__PURE__ */ template(`<div><div>`), _tmpl$3 = /* @__PURE__ */ template(`<span>+`);
function WireColumn(props) {
  const liveModel = useContext(LiveModelContext);
  invariant(liveModel);
  const wireInput = (ob, i) => createComponent(ObIdInput, {
    get ob() {
      return ob();
    },
    setOb: (newOb) => props.updateOb(i, newOb),
    onTextChange: (text) => props.onTextChange?.(i, text),
    placeholder: "...",
    get completions() {
      return props.completions;
    },
    idToLabel: (id) => liveModel().elaboratedModel()?.obGeneratorLabel(id),
    labelToId: (label) => liveModel().elaboratedModel()?.obGeneratorWithLabel(label),
    get isInvalid() {
      return props.isInvalid;
    },
    get isActive() {
      return props.isActive(i);
    },
    createBelow: () => props.insertWire(i + 1),
    deleteBackward: () => {
      props.deleteWire(i);
      if (props.obs.length === 0) {
        props.activateName();
      } else if (i > 0) {
        props.activateWire(i - 1);
      }
    },
    deleteForward: () => {
      props.deleteWire(i);
      if (props.obs.length === 0) {
        props.activateName();
      }
    },
    exitBackward: () => {
      if (i > 0) {
        props.activateWire(i - 1);
      } else {
        props.exitFirstBackward?.();
      }
    },
    exitForward: () => {
      if (i < props.obs.length - 1) {
        props.activateWire(i + 1);
      } else {
        props.exitLastForward?.();
      }
    },
    get exitLeft() {
      return props.side === "right" ? props.activateName : undefined;
    },
    get exitRight() {
      return props.side === "left" ? props.activateName : undefined;
    },
    onComplete: () => {
      props.insertWire(i + 1);
    },
    interceptKeyDown: (evt) => {
      if (evt.key === ",") {
        props.insertWire(i + 1);
        return true;
      }
      return false;
    },
    hasFocused: () => {
      props.activateWire(i);
      props.setFocused();
    }
  });
  return (() => {
    var _el$ = _tmpl$(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild;
    insert(_el$, createComponent(Index, {
      get each() {
        return props.obs;
      },
      children: (ob, i) => (() => {
        var _el$4 = _tmpl$2(), _el$5 = _el$4.firstChild;
        insert(_el$4, (() => {
          var _c$3 = memo(() => props.side === "left");
          return () => _c$3() && wireInput(ob, i);
        })(), _el$5);
        insert(_el$4, (() => {
          var _c$4 = memo(() => props.side === "right");
          return () => _c$4() && wireInput(ob, i);
        })(), null);
        effect((_p$) => {
          var _v$4 = styles.wire, _v$5 = styles.wireLine;
          _v$4 !== _p$.e && className(_el$4, _p$.e = _v$4);
          _v$5 !== _p$.t && className(_el$5, _p$.t = _v$5);
          return _p$;
        }, {
          e: undefined,
          t: undefined
        });
        return _el$4;
      })()
    }), _el$2);
    _el$2.$$mousedown = (evt) => {
      props.insertWire(props.obs.length);
      props.setFocused();
      evt.preventDefault();
    };
    insert(_el$2, (() => {
      var _c$ = memo(() => props.side === "left");
      return () => _c$() && (() => {
        var _el$6 = _tmpl$3();
        effect(() => className(_el$6, styles.addWireButton));
        return _el$6;
      })();
    })(), _el$3);
    insert(_el$2, (() => {
      var _c$2 = memo(() => props.side === "right");
      return () => _c$2() && (() => {
        var _el$7 = _tmpl$3();
        effect(() => className(_el$7, styles.addWireButton));
        return _el$7;
      })();
    })(), null);
    effect((_p$) => {
      var _v$ = `${styles.wires} ${props.side === "left" ? styles.left : styles.right}`, _v$2 = `${styles.wire} ${styles.addWire}`, _v$3 = styles.wireLine;
      _v$ !== _p$.e && className(_el$, _p$.e = _v$);
      _v$2 !== _p$.t && className(_el$2, _p$.t = _v$2);
      _v$3 !== _p$.a && className(_el$3, _p$.a = _v$3);
      return _p$;
    }, {
      e: undefined,
      t: undefined,
      a: undefined
    });
    return _el$;
  })();
}
function StringDiagramMorphismCellEditor(props) {
  const liveModel = useContext(LiveModelContext);
  invariant(liveModel);
  const [active, setActive] = createSignal({
    zone: "name"
  });
  createEffect(() => {
    if (!props.focus.hasFocus()) {
      setActive({
        zone: "name"
      });
    }
  });
  const domInputTexts = /* @__PURE__ */ new Map();
  const codInputTexts = /* @__PURE__ */ new Map();
  const morTypeMeta = () => props.theory.modelMorTypeMeta(props.morphism.morType);
  const domApplyOp = () => morTypeMeta()?.domain?.apply;
  const codApplyOp = () => morTypeMeta()?.codomain?.apply;
  const makeObList = (objects, obType, applyOp) => {
    if (!applyOp || !obType || obType.tag !== "ModeApp") {
      return null;
    }
    return wrapApp(buildObList(obType.content.modality, objects), applyOp);
  };
  const domType = createMemo(() => {
    const op = domApplyOp();
    return op === undefined ? props.theory.theory.src(props.morphism.morType) : props.theory.theory.dom(op);
  });
  const codType = createMemo(() => {
    const op = codApplyOp();
    return op === undefined ? props.theory.theory.tgt(props.morphism.morType) : props.theory.theory.dom(op);
  });
  const elementObType = createMemo(() => {
    const dt = domType();
    return dt?.tag === "ModeApp" ? dt.content.obType : dt;
  });
  const domObs = () => {
    const op = domApplyOp();
    return extractObList(op ? unwrapApp(props.morphism.dom, op) : props.morphism.dom);
  };
  const codObs = () => {
    const op = codApplyOp();
    return extractObList(op ? unwrapApp(props.morphism.cod, op) : props.morphism.cod);
  };
  const setDomObs = (objects) => {
    const ob = makeObList(objects, domType(), domApplyOp());
    props.modifyMorphism((mor) => {
      mor.dom = removeProxyAndCopy(ob);
    });
  };
  const setCodObs = (objects) => {
    const ob = makeObList(objects, codType(), codApplyOp());
    props.modifyMorphism((mor) => {
      mor.cod = removeProxyAndCopy(ob);
    });
  };
  const updateDomObs = (f) => {
    const objects = removeProxyAndCopy(domObs());
    f(objects);
    setDomObs(objects);
  };
  const updateCodObs = (f) => {
    const objects = removeProxyAndCopy(codObs());
    f(objects);
    setCodObs(objects);
  };
  const insertDom = (i) => {
    updateDomObs((objects) => objects.splice(i, 0, null));
    setActive({
      zone: "dom",
      index: i
    });
  };
  const insertCod = (i) => {
    updateCodObs((objects) => objects.splice(i, 0, null));
    setActive({
      zone: "cod",
      index: i
    });
  };
  const deactivate = () => {
    setActive(null);
    const dom = domObs().filter((ob, i) => ob !== null || (domInputTexts.get(i) ?? "") !== "");
    if (dom.length !== domObs().length) {
      setDomObs(dom);
    }
    const cod = codObs().filter((ob, i) => ob !== null || (codInputTexts.get(i) ?? "") !== "");
    if (cod.length !== codObs().length) {
      setCodObs(cod);
    }
  };
  createEffect(() => {
    if (!props.focus.hasFocus()) {
      untrack(() => deactivate());
    }
  });
  const completions = () => liveModel().elaboratedModel()?.obGeneratorsWithType(elementObType());
  const nameFocus = {
    hasFocus: () => props.focus.hasFocus() && active()?.zone === "name",
    setFocused: (focused) => {
      if (focused) {
        setActive({
          zone: "name"
        });
        props.focus.setFocused(true);
      }
    }
  };
  const errors = () => {
    const validated = liveModel().validatedModel();
    if (validated?.tag !== "Invalid") {
      return [];
    }
    return validated.errors.filter((err) => err.content === props.morphism.id);
  };
  let rootRef;
  return (() => {
    var _el$8 = _tmpl$2(), _el$9 = _el$8.firstChild;
    _el$8.$$focusout = (evt) => {
      const next = evt.relatedTarget;
      if (next && rootRef.contains(next)) {
        return;
      }
      props.focus.setFocused(false);
    };
    var _ref$ = rootRef;
    typeof _ref$ === "function" ? use(_ref$, _el$8) : rootRef = _el$8;
    insert(_el$8, createComponent(WireColumn, {
      get obs() {
        return domObs();
      },
      side: "left",
      get isInvalid() {
        return errors().some((err) => err.tag === "Dom" || err.tag === "DomType");
      },
      get completions() {
        return completions();
      },
      isActive: (i) => {
        const a = active();
        return props.focus.hasFocus() && a?.zone === "dom" && a.index === i;
      },
      onTextChange: (i, text) => domInputTexts.set(i, text),
      insertWire: insertDom,
      updateOb: (i, ob) => updateDomObs((objects) => {
        objects[i] = ob;
      }),
      deleteWire: (i) => updateDomObs((objects) => objects.splice(i, 1)),
      activateWire: (i) => setActive({
        zone: "dom",
        index: i
      }),
      activateName: () => setActive({
        zone: "name"
      }),
      exitFirstBackward: () => setActive({
        zone: "name"
      }),
      exitLastForward: () => {
        if (codObs().length > 0) {
          setActive({
            zone: "cod",
            index: 0
          });
        } else {
          insertCod(0);
        }
      },
      setFocused: () => props.focus.setFocused(true)
    }), _el$9);
    insert(_el$9, createComponent(NameInput, {
      get placeholder() {
        return morTypeMeta()?.preferUnnamed ? undefined : "Unnamed";
      },
      get name() {
        return props.morphism.name;
      },
      setName: (name) => {
        props.modifyMorphism((mor) => {
          mor.name = name;
        });
      },
      focus: nameFocus,
      get deleteBackward() {
        return props.actions.deleteBackward;
      },
      get deleteForward() {
        return props.actions.deleteForward;
      },
      get exitBackward() {
        return props.actions.activateAbove;
      },
      exitForward: () => {
        if (domObs().length > 0) {
          setActive({
            zone: "dom",
            index: 0
          });
        } else {
          insertDom(0);
        }
      },
      get exitUp() {
        return props.actions.activateAbove;
      },
      get exitDown() {
        return props.actions.activateBelow;
      },
      exitLeft: () => {
        if (domObs().length > 0) {
          setActive({
            zone: "dom",
            index: domObs().length - 1
          });
        } else {
          insertDom(0);
        }
      },
      exitRight: () => {
        if (codObs().length > 0) {
          setActive({
            zone: "cod",
            index: 0
          });
        } else {
          insertCod(0);
        }
      }
    }));
    insert(_el$8, createComponent(WireColumn, {
      get obs() {
        return codObs();
      },
      side: "right",
      get isInvalid() {
        return errors().some((err) => err.tag === "Cod" || err.tag === "CodType");
      },
      get completions() {
        return completions();
      },
      isActive: (i) => {
        const a = active();
        return props.focus.hasFocus() && a?.zone === "cod" && a.index === i;
      },
      onTextChange: (i, text) => codInputTexts.set(i, text),
      insertWire: insertCod,
      updateOb: (i, ob) => updateCodObs((objects) => {
        objects[i] = ob;
      }),
      deleteWire: (i) => updateCodObs((objects) => objects.splice(i, 1)),
      activateWire: (i) => setActive({
        zone: "cod",
        index: i
      }),
      activateName: () => setActive({
        zone: "name"
      }),
      exitFirstBackward: () => {
        if (domObs().length > 0) {
          setActive({
            zone: "dom",
            index: domObs().length - 1
          });
        } else {
          setActive({
            zone: "name"
          });
        }
      },
      get exitLastForward() {
        return props.actions.activateBelow;
      },
      setFocused: () => props.focus.setFocused(true)
    }), null);
    effect((_p$) => {
      var _v$6 = `formal-judgment ${styles.morphism}`, _v$7 = styles.box;
      _v$6 !== _p$.e && className(_el$8, _p$.e = _v$6);
      _v$7 !== _p$.t && className(_el$9, _p$.t = _v$7);
      return _p$;
    }, {
      e: undefined,
      t: undefined
    });
    return _el$8;
  })();
}
delegateEvents(["mousedown", "focusout"]);

export { StringDiagramMorphismCellEditor as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nX2RpYWdyYW1fbW9ycGhpc21fY2VsbF9lZGl0b3ItazFLenQ5cmYuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zyb250ZW5kL3NyYy9tb2RlbC9zdHJpbmdfZGlhZ3JhbV9tb3JwaGlzbV9jZWxsX2VkaXRvci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5kZXgsIGNyZWF0ZUVmZmVjdCwgY3JlYXRlTWVtbywgY3JlYXRlU2lnbmFsLCB1bnRyYWNrLCB1c2VDb250ZXh0IH0gZnJvbSBcInNvbGlkLWpzXCI7XG5pbXBvcnQgaW52YXJpYW50IGZyb20gXCJ0aW55LWludmFyaWFudFwiO1xuXG5pbXBvcnQgeyB0eXBlIEZvY3VzSGFuZGxlLCBOYW1lSW5wdXQgfSBmcm9tIFwiY2F0Y29sYWItdWktY29tcG9uZW50c1wiO1xuaW1wb3J0IHR5cGUgeyBPYiwgT2JPcCwgT2JUeXBlLCBRdWFsaWZpZWROYW1lIH0gZnJvbSBcImNhdGxvZy13YXNtXCI7XG5pbXBvcnQgeyBPYklkSW5wdXQgfSBmcm9tIFwiLi4vY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgcmVtb3ZlUHJveHlBbmRDb3B5IH0gZnJvbSBcIi4uL3V0aWwvcmVtb3ZlX3Byb3h5X2FuZF9jb3B5XCI7XG5pbXBvcnQgeyBMaXZlTW9kZWxDb250ZXh0IH0gZnJvbSBcIi4vY29udGV4dFwiO1xuaW1wb3J0IHR5cGUgeyBNb3JwaGlzbUVkaXRvclByb3BzIH0gZnJvbSBcIi4vZWRpdG9yc1wiO1xuaW1wb3J0IHsgYnVpbGRPYkxpc3QsIGV4dHJhY3RPYkxpc3QsIHVud3JhcEFwcCwgd3JhcEFwcCB9IGZyb20gXCIuL29iX29wZXJhdGlvbnNcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9zdHJpbmdfZGlhZ3JhbV9tb3JwaGlzbV9jZWxsX2VkaXRvci5tb2R1bGUuY3NzXCI7XG5cbnR5cGUgQWN0aXZlSW5wdXQgPVxuICAgIHwgeyB6b25lOiBcIm5hbWVcIiB9XG4gICAgfCB7IHpvbmU6IFwiZG9tXCI7IGluZGV4OiBudW1iZXIgfVxuICAgIHwgeyB6b25lOiBcImNvZFwiOyBpbmRleDogbnVtYmVyIH07XG5cbi8qKiBBIGNvbHVtbiBvZiB3aXJlIGlucHV0cywgdXNlZCBmb3IgYm90aCBkb21haW4gKGxlZnQpIGFuZCBjb2RvbWFpbiAocmlnaHQpLiAqL1xuZnVuY3Rpb24gV2lyZUNvbHVtbihwcm9wczoge1xuICAgIG9iczogQXJyYXk8T2IgfCBudWxsPjtcbiAgICBzaWRlOiBcImxlZnRcIiB8IFwicmlnaHRcIjtcbiAgICBpc0ludmFsaWQ6IGJvb2xlYW47XG4gICAgY29tcGxldGlvbnM6IFF1YWxpZmllZE5hbWVbXSB8IHVuZGVmaW5lZDtcbiAgICBpc0FjdGl2ZTogKGluZGV4OiBudW1iZXIpID0+IGJvb2xlYW47XG4gICAgaW5zZXJ0V2lyZTogKGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XG4gICAgdXBkYXRlT2I6IChpbmRleDogbnVtYmVyLCBvYjogT2IgfCBudWxsKSA9PiB2b2lkO1xuICAgIGRlbGV0ZVdpcmU6IChpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xuICAgIGFjdGl2YXRlV2lyZTogKGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XG4gICAgYWN0aXZhdGVOYW1lOiAoKSA9PiB2b2lkO1xuICAgIC8qKiBDYWxsZWQgd2hlbiB0aGUgZGlzcGxheWVkIHRleHQgb2YgYSB3aXJlIGlucHV0IGNoYW5nZXMuICovXG4gICAgb25UZXh0Q2hhbmdlPzogKGluZGV4OiBudW1iZXIsIHRleHQ6IHN0cmluZykgPT4gdm9pZDtcbiAgICAvKiogQ2FsbGVkIHdoZW4gdGFiYmluZyBiYWNrd2FyZCBmcm9tIHRoZSBmaXJzdCB3aXJlLiAqL1xuICAgIGV4aXRGaXJzdEJhY2t3YXJkOiAoKCkgPT4gdm9pZCkgfCB1bmRlZmluZWQ7XG4gICAgLyoqIENhbGxlZCB3aGVuIHRhYmJpbmcgZm9yd2FyZCBmcm9tIHRoZSBsYXN0IHdpcmUuICovXG4gICAgZXhpdExhc3RGb3J3YXJkOiAoKCkgPT4gdm9pZCkgfCB1bmRlZmluZWQ7XG4gICAgc2V0Rm9jdXNlZDogKCkgPT4gdm9pZDtcbn0pIHtcbiAgICBjb25zdCBsaXZlTW9kZWwgPSB1c2VDb250ZXh0KExpdmVNb2RlbENvbnRleHQpO1xuICAgIGludmFyaWFudChsaXZlTW9kZWwsIFwiTGl2ZSBtb2RlbCBzaG91bGQgYmUgcHJvdmlkZWQgYXMgY29udGV4dFwiKTtcblxuICAgIGNvbnN0IHdpcmVJbnB1dCA9IChvYjogKCkgPT4gT2IgfCBudWxsLCBpOiBudW1iZXIpID0+IChcbiAgICAgICAgPE9iSWRJbnB1dFxuICAgICAgICAgICAgb2I9e29iKCl9XG4gICAgICAgICAgICBzZXRPYj17KG5ld09iKSA9PiBwcm9wcy51cGRhdGVPYihpLCBuZXdPYil9XG4gICAgICAgICAgICBvblRleHRDaGFuZ2U9eyh0ZXh0KSA9PiBwcm9wcy5vblRleHRDaGFuZ2U/LihpLCB0ZXh0KX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLi4uXCJcbiAgICAgICAgICAgIGNvbXBsZXRpb25zPXtwcm9wcy5jb21wbGV0aW9uc31cbiAgICAgICAgICAgIGlkVG9MYWJlbD17KGlkKSA9PiBsaXZlTW9kZWwoKS5lbGFib3JhdGVkTW9kZWwoKT8ub2JHZW5lcmF0b3JMYWJlbChpZCl9XG4gICAgICAgICAgICBsYWJlbFRvSWQ9eyhsYWJlbCkgPT4gbGl2ZU1vZGVsKCkuZWxhYm9yYXRlZE1vZGVsKCk/Lm9iR2VuZXJhdG9yV2l0aExhYmVsKGxhYmVsKX1cbiAgICAgICAgICAgIGlzSW52YWxpZD17cHJvcHMuaXNJbnZhbGlkfVxuICAgICAgICAgICAgaXNBY3RpdmU9e3Byb3BzLmlzQWN0aXZlKGkpfVxuICAgICAgICAgICAgY3JlYXRlQmVsb3c9eygpID0+IHByb3BzLmluc2VydFdpcmUoaSArIDEpfVxuICAgICAgICAgICAgZGVsZXRlQmFja3dhcmQ9eygpID0+IHtcbiAgICAgICAgICAgICAgICBwcm9wcy5kZWxldGVXaXJlKGkpO1xuICAgICAgICAgICAgICAgIGlmIChwcm9wcy5vYnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmFjdGl2YXRlTmFtZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuYWN0aXZhdGVXaXJlKGkgLSAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgZGVsZXRlRm9yd2FyZD17KCkgPT4ge1xuICAgICAgICAgICAgICAgIHByb3BzLmRlbGV0ZVdpcmUoaSk7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLm9icy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuYWN0aXZhdGVOYW1lKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGV4aXRCYWNrd2FyZD17KCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5hY3RpdmF0ZVdpcmUoaSAtIDEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmV4aXRGaXJzdEJhY2t3YXJkPy4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgZXhpdEZvcndhcmQ9eygpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoaSA8IHByb3BzLm9icy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmFjdGl2YXRlV2lyZShpICsgMSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuZXhpdExhc3RGb3J3YXJkPy4oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgZXhpdExlZnQ9e3Byb3BzLnNpZGUgPT09IFwicmlnaHRcIiA/IHByb3BzLmFjdGl2YXRlTmFtZSA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgIGV4aXRSaWdodD17cHJvcHMuc2lkZSA9PT0gXCJsZWZ0XCIgPyBwcm9wcy5hY3RpdmF0ZU5hbWUgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICBvbkNvbXBsZXRlPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gQWRkIGEgbmV3IHdpcmUgYmVsb3cgb25jZSB0aGUgaW5wdXQgaXMgZmlsbGVkIHZpYSBhXG4gICAgICAgICAgICAgICAgLy8gY29tcGxldGlvbiBhbmQgbW92ZSBmb2N1cyBkb3duIGludG8gaXQuXG4gICAgICAgICAgICAgICAgcHJvcHMuaW5zZXJ0V2lyZShpICsgMSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgICAgaW50ZXJjZXB0S2V5RG93bj17KGV2dCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChldnQua2V5ID09PSBcIixcIikge1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5pbnNlcnRXaXJlKGkgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBoYXNGb2N1c2VkPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgcHJvcHMuYWN0aXZhdGVXaXJlKGkpO1xuICAgICAgICAgICAgICAgIHByb3BzLnNldEZvY3VzZWQoKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3M9e2Ake3N0eWxlcy53aXJlc30gJHtwcm9wcy5zaWRlID09PSBcImxlZnRcIiA/IHN0eWxlcy5sZWZ0IDogc3R5bGVzLnJpZ2h0fWB9PlxuICAgICAgICAgICAgPEluZGV4IGVhY2g9e3Byb3BzLm9ic30+XG4gICAgICAgICAgICAgICAgeyhvYiwgaSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPXtzdHlsZXMud2lyZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuc2lkZSA9PT0gXCJsZWZ0XCIgJiYgd2lyZUlucHV0KG9iLCBpKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9e3N0eWxlcy53aXJlTGluZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zaWRlID09PSBcInJpZ2h0XCIgJiYgd2lyZUlucHV0KG9iLCBpKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvSW5kZXg+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9e2Ake3N0eWxlcy53aXJlfSAke3N0eWxlcy5hZGRXaXJlfWB9XG4gICAgICAgICAgICAgICAgb25Nb3VzZURvd249eyhldnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuaW5zZXJ0V2lyZShwcm9wcy5vYnMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuc2V0Rm9jdXNlZCgpO1xuICAgICAgICAgICAgICAgICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtwcm9wcy5zaWRlID09PSBcImxlZnRcIiAmJiA8c3BhbiBjbGFzcz17c3R5bGVzLmFkZFdpcmVCdXR0b259Pis8L3NwYW4+fVxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9e3N0eWxlcy53aXJlTGluZX0gLz5cbiAgICAgICAgICAgICAgICB7cHJvcHMuc2lkZSA9PT0gXCJyaWdodFwiICYmIDxzcGFuIGNsYXNzPXtzdHlsZXMuYWRkV2lyZUJ1dHRvbn0+Kzwvc3Bhbj59XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cblxuLyoqIEVkaXRvciBmb3IgYSBtb3JwaGlzbSBkZWNsYXJhdGlvbiBjZWxsIGluIHN0cmluZyBkaWFncmFtIHN0eWxlLlxuXG5SZW5kZXJzIHRoZSB0cmFuc2l0aW9uIGFzIGEgYm94IHdpdGggaW5wdXQgd2lyZXMgb24gdGhlIGxlZnQgYW5kIG91dHB1dCB3aXJlc1xub24gdGhlIHJpZ2h0LCB3aGVyZSBlYWNoIHdpcmUgaXMgYSBzZXBhcmF0ZSBpbnB1dCBmaWVsZCBmb3IgYSBkb21haW4vY29kb21haW5cbmVsZW1lbnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0cmluZ0RpYWdyYW1Nb3JwaGlzbUNlbGxFZGl0b3IocHJvcHM6IE1vcnBoaXNtRWRpdG9yUHJvcHMpIHtcbiAgICBjb25zdCBsaXZlTW9kZWwgPSB1c2VDb250ZXh0KExpdmVNb2RlbENvbnRleHQpO1xuICAgIGludmFyaWFudChsaXZlTW9kZWwsIFwiTGl2ZSBtb2RlbCBzaG91bGQgYmUgcHJvdmlkZWQgYXMgY29udGV4dFwiKTtcblxuICAgIGNvbnN0IFthY3RpdmUsIHNldEFjdGl2ZV0gPSBjcmVhdGVTaWduYWw8QWN0aXZlSW5wdXQgfCBudWxsPih7IHpvbmU6IFwibmFtZVwiIH0pO1xuXG4gICAgLy8gUmVzZXQgdG8gZGVmYXVsdCBvbiBkZWFjdGl2YXRpb24gc28gcmUtZW50cnkgbGFuZHMgb24gdGhlIG5hbWUgaW5wdXQuXG4gICAgY3JlYXRlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFwcm9wcy5mb2N1cy5oYXNGb2N1cygpKSB7XG4gICAgICAgICAgICBzZXRBY3RpdmUoeyB6b25lOiBcIm5hbWVcIiB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gVHJhY2sgd2hpY2ggd2lyZSBpbmRpY2VzIGhhdmUgbm9uLWVtcHR5IHRleHQgKGluY2x1ZGluZyBpbmNvbXBsZXRlIGlucHV0KS5cbiAgICBjb25zdCBkb21JbnB1dFRleHRzID0gbmV3IE1hcDxudW1iZXIsIHN0cmluZz4oKTtcbiAgICBjb25zdCBjb2RJbnB1dFRleHRzID0gbmV3IE1hcDxudW1iZXIsIHN0cmluZz4oKTtcblxuICAgIGNvbnN0IG1vclR5cGVNZXRhID0gKCkgPT4gcHJvcHMudGhlb3J5Lm1vZGVsTW9yVHlwZU1ldGEocHJvcHMubW9ycGhpc20ubW9yVHlwZSk7XG4gICAgY29uc3QgZG9tQXBwbHlPcCA9ICgpID0+IG1vclR5cGVNZXRhKCk/LmRvbWFpbj8uYXBwbHk7XG4gICAgY29uc3QgY29kQXBwbHlPcCA9ICgpID0+IG1vclR5cGVNZXRhKCk/LmNvZG9tYWluPy5hcHBseTtcblxuICAgIC8qKiBSZWJ1aWxkIGEgZG9tYWluL2NvZG9tYWluIE9iIGZyb20gYSBsaXN0IG9mIG9iamVjdHMuICovXG4gICAgY29uc3QgbWFrZU9iTGlzdCA9IChcbiAgICAgICAgb2JqZWN0czogQXJyYXk8T2IgfCBudWxsPixcbiAgICAgICAgb2JUeXBlOiBPYlR5cGUgfCB1bmRlZmluZWQsXG4gICAgICAgIGFwcGx5T3A6IE9iT3AgfCB1bmRlZmluZWQsXG4gICAgKTogT2IgfCBudWxsID0+IHtcbiAgICAgICAgaWYgKCFhcHBseU9wIHx8ICFvYlR5cGUgfHwgb2JUeXBlLnRhZyAhPT0gXCJNb2RlQXBwXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB3cmFwQXBwKGJ1aWxkT2JMaXN0KG9iVHlwZS5jb250ZW50Lm1vZGFsaXR5LCBvYmplY3RzKSwgYXBwbHlPcCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRvbVR5cGUgPSBjcmVhdGVNZW1vKCgpID0+IHtcbiAgICAgICAgY29uc3Qgb3AgPSBkb21BcHBseU9wKCk7XG4gICAgICAgIHJldHVybiBvcCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IHByb3BzLnRoZW9yeS50aGVvcnkuc3JjKHByb3BzLm1vcnBoaXNtLm1vclR5cGUpXG4gICAgICAgICAgICA6IHByb3BzLnRoZW9yeS50aGVvcnkuZG9tKG9wKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvZFR5cGUgPSBjcmVhdGVNZW1vKCgpID0+IHtcbiAgICAgICAgY29uc3Qgb3AgPSBjb2RBcHBseU9wKCk7XG4gICAgICAgIHJldHVybiBvcCA9PT0gdW5kZWZpbmVkXG4gICAgICAgICAgICA/IHByb3BzLnRoZW9yeS50aGVvcnkudGd0KHByb3BzLm1vcnBoaXNtLm1vclR5cGUpXG4gICAgICAgICAgICA6IHByb3BzLnRoZW9yeS50aGVvcnkuZG9tKG9wKTtcbiAgICB9KTtcblxuICAgIC8qKiBUaGUgaW5uZXIgZWxlbWVudCB0eXBlICh1bndyYXBwZWQgZnJvbSBNb2RlQXBwKSBmb3IgY29tcGxldGlvbnMuICovXG4gICAgY29uc3QgZWxlbWVudE9iVHlwZSA9IGNyZWF0ZU1lbW8oKCkgPT4ge1xuICAgICAgICBjb25zdCBkdCA9IGRvbVR5cGUoKTtcbiAgICAgICAgcmV0dXJuIGR0Py50YWcgPT09IFwiTW9kZUFwcFwiID8gZHQuY29udGVudC5vYlR5cGUgOiBkdDtcbiAgICB9KTtcblxuICAgIGNvbnN0IGRvbU9icyA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgb3AgPSBkb21BcHBseU9wKCk7XG4gICAgICAgIHJldHVybiBleHRyYWN0T2JMaXN0KG9wID8gdW53cmFwQXBwKHByb3BzLm1vcnBoaXNtLmRvbSwgb3ApIDogcHJvcHMubW9ycGhpc20uZG9tKTtcbiAgICB9O1xuICAgIGNvbnN0IGNvZE9icyA9ICgpID0+IHtcbiAgICAgICAgY29uc3Qgb3AgPSBjb2RBcHBseU9wKCk7XG4gICAgICAgIHJldHVybiBleHRyYWN0T2JMaXN0KG9wID8gdW53cmFwQXBwKHByb3BzLm1vcnBoaXNtLmNvZCwgb3ApIDogcHJvcHMubW9ycGhpc20uY29kKTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0RG9tT2JzID0gKG9iamVjdHM6IEFycmF5PE9iIHwgbnVsbD4pID0+IHtcbiAgICAgICAgY29uc3Qgb2IgPSBtYWtlT2JMaXN0KG9iamVjdHMsIGRvbVR5cGUoKSwgZG9tQXBwbHlPcCgpKTtcbiAgICAgICAgcHJvcHMubW9kaWZ5TW9ycGhpc20oKG1vcikgPT4ge1xuICAgICAgICAgICAgbW9yLmRvbSA9IHJlbW92ZVByb3h5QW5kQ29weShvYik7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXRDb2RPYnMgPSAob2JqZWN0czogQXJyYXk8T2IgfCBudWxsPikgPT4ge1xuICAgICAgICBjb25zdCBvYiA9IG1ha2VPYkxpc3Qob2JqZWN0cywgY29kVHlwZSgpLCBjb2RBcHBseU9wKCkpO1xuICAgICAgICBwcm9wcy5tb2RpZnlNb3JwaGlzbSgobW9yKSA9PiB7XG4gICAgICAgICAgICBtb3IuY29kID0gcmVtb3ZlUHJveHlBbmRDb3B5KG9iKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IHVwZGF0ZURvbU9icyA9IChmOiAob2JqZWN0czogQXJyYXk8T2IgfCBudWxsPikgPT4gdm9pZCkgPT4ge1xuICAgICAgICBjb25zdCBvYmplY3RzID0gcmVtb3ZlUHJveHlBbmRDb3B5KGRvbU9icygpKTtcbiAgICAgICAgZihvYmplY3RzKTtcbiAgICAgICAgc2V0RG9tT2JzKG9iamVjdHMpO1xuICAgIH07XG5cbiAgICBjb25zdCB1cGRhdGVDb2RPYnMgPSAoZjogKG9iamVjdHM6IEFycmF5PE9iIHwgbnVsbD4pID0+IHZvaWQpID0+IHtcbiAgICAgICAgY29uc3Qgb2JqZWN0cyA9IHJlbW92ZVByb3h5QW5kQ29weShjb2RPYnMoKSk7XG4gICAgICAgIGYob2JqZWN0cyk7XG4gICAgICAgIHNldENvZE9icyhvYmplY3RzKTtcbiAgICB9O1xuXG4gICAgY29uc3QgaW5zZXJ0RG9tID0gKGk6IG51bWJlcikgPT4ge1xuICAgICAgICB1cGRhdGVEb21PYnMoKG9iamVjdHMpID0+IG9iamVjdHMuc3BsaWNlKGksIDAsIG51bGwpKTtcbiAgICAgICAgc2V0QWN0aXZlKHsgem9uZTogXCJkb21cIiwgaW5kZXg6IGkgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGluc2VydENvZCA9IChpOiBudW1iZXIpID0+IHtcbiAgICAgICAgdXBkYXRlQ29kT2JzKChvYmplY3RzKSA9PiBvYmplY3RzLnNwbGljZShpLCAwLCBudWxsKSk7XG4gICAgICAgIHNldEFjdGl2ZSh7IHpvbmU6IFwiY29kXCIsIGluZGV4OiBpIH0pO1xuICAgIH07XG5cbiAgICAvKiogUmVzZXQgYWN0aXZlIGlucHV0IGFuZCBjbGVhbiB1cCBudWxsIHBsYWNlaG9sZGVycyB0aGF0IGhhdmUgbm8gdXNlci1lbnRlcmVkIHRleHQuICovXG4gICAgY29uc3QgZGVhY3RpdmF0ZSA9ICgpID0+IHtcbiAgICAgICAgc2V0QWN0aXZlKG51bGwpO1xuICAgICAgICBjb25zdCBkb20gPSBkb21PYnMoKS5maWx0ZXIoKG9iLCBpKSA9PiBvYiAhPT0gbnVsbCB8fCAoZG9tSW5wdXRUZXh0cy5nZXQoaSkgPz8gXCJcIikgIT09IFwiXCIpO1xuICAgICAgICBpZiAoZG9tLmxlbmd0aCAhPT0gZG9tT2JzKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZXREb21PYnMoZG9tKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb2QgPSBjb2RPYnMoKS5maWx0ZXIoKG9iLCBpKSA9PiBvYiAhPT0gbnVsbCB8fCAoY29kSW5wdXRUZXh0cy5nZXQoaSkgPz8gXCJcIikgIT09IFwiXCIpO1xuICAgICAgICBpZiAoY29kLmxlbmd0aCAhPT0gY29kT2JzKCkubGVuZ3RoKSB7XG4gICAgICAgICAgICBzZXRDb2RPYnMoY29kKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvLyBDbGVhbiB1cCB3aGVuIHRoZSBjZWxsIGJlY29tZXMgaW5hY3RpdmUuXG4gICAgY3JlYXRlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFwcm9wcy5mb2N1cy5oYXNGb2N1cygpKSB7XG4gICAgICAgICAgICB1bnRyYWNrKCgpID0+IGRlYWN0aXZhdGUoKSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbXBsZXRpb25zID0gKCkgPT4gbGl2ZU1vZGVsKCkuZWxhYm9yYXRlZE1vZGVsKCk/Lm9iR2VuZXJhdG9yc1dpdGhUeXBlKGVsZW1lbnRPYlR5cGUoKSk7XG5cbiAgICBjb25zdCBuYW1lRm9jdXM6IEZvY3VzSGFuZGxlID0ge1xuICAgICAgICBoYXNGb2N1czogKCkgPT4gcHJvcHMuZm9jdXMuaGFzRm9jdXMoKSAmJiBhY3RpdmUoKT8uem9uZSA9PT0gXCJuYW1lXCIsXG4gICAgICAgIHNldEZvY3VzZWQ6IChmb2N1c2VkKSA9PiB7XG4gICAgICAgICAgICBpZiAoZm9jdXNlZCkge1xuICAgICAgICAgICAgICAgIHNldEFjdGl2ZSh7IHpvbmU6IFwibmFtZVwiIH0pO1xuICAgICAgICAgICAgICAgIHByb3BzLmZvY3VzLnNldEZvY3VzZWQodHJ1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIGNvbnN0IGVycm9ycyA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgdmFsaWRhdGVkID0gbGl2ZU1vZGVsKCkudmFsaWRhdGVkTW9kZWwoKTtcbiAgICAgICAgaWYgKHZhbGlkYXRlZD8udGFnICE9PSBcIkludmFsaWRcIikge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2YWxpZGF0ZWQuZXJyb3JzLmZpbHRlcigoZXJyKSA9PiBlcnIuY29udGVudCA9PT0gcHJvcHMubW9ycGhpc20uaWQpO1xuICAgIH07XG5cbiAgICBsZXQgcm9vdFJlZiE6IEhUTUxEaXZFbGVtZW50O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgcmVmPXtyb290UmVmfVxuICAgICAgICAgICAgY2xhc3M9e2Bmb3JtYWwtanVkZ21lbnQgJHtzdHlsZXMubW9ycGhpc219YH1cbiAgICAgICAgICAgIG9uRm9jdXNPdXQ9eyhldnQpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBMb3NlIGZvY3VzIG9ubHkgd2hlbiBpdCBtb3ZlcyBvdXRzaWRlIHRoZSBlZGl0b3IgZW50aXJlbHkuXG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dCA9IGV2dC5yZWxhdGVkVGFyZ2V0IGFzIEVsZW1lbnQgfCBudWxsO1xuICAgICAgICAgICAgICAgIGlmIChuZXh0ICYmIHJvb3RSZWYuY29udGFpbnMobmV4dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcm9wcy5mb2N1cy5zZXRGb2N1c2VkKGZhbHNlKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICAgIDxXaXJlQ29sdW1uXG4gICAgICAgICAgICAgICAgb2JzPXtkb21PYnMoKX1cbiAgICAgICAgICAgICAgICBzaWRlPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtlcnJvcnMoKS5zb21lKChlcnIpID0+IGVyci50YWcgPT09IFwiRG9tXCIgfHwgZXJyLnRhZyA9PT0gXCJEb21UeXBlXCIpfVxuICAgICAgICAgICAgICAgIGNvbXBsZXRpb25zPXtjb21wbGV0aW9ucygpfVxuICAgICAgICAgICAgICAgIGlzQWN0aXZlPXsoaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBhID0gYWN0aXZlKCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9wcy5mb2N1cy5oYXNGb2N1cygpICYmIGE/LnpvbmUgPT09IFwiZG9tXCIgJiYgYS5pbmRleCA9PT0gaTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIG9uVGV4dENoYW5nZT17KGksIHRleHQpID0+IGRvbUlucHV0VGV4dHMuc2V0KGksIHRleHQpfVxuICAgICAgICAgICAgICAgIGluc2VydFdpcmU9e2luc2VydERvbX1cbiAgICAgICAgICAgICAgICB1cGRhdGVPYj17KGksIG9iKSA9PlxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVEb21PYnMoKG9iamVjdHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdHNbaV0gPSBvYjtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVsZXRlV2lyZT17KGkpID0+IHVwZGF0ZURvbU9icygob2JqZWN0cykgPT4gb2JqZWN0cy5zcGxpY2UoaSwgMSkpfVxuICAgICAgICAgICAgICAgIGFjdGl2YXRlV2lyZT17KGkpID0+IHNldEFjdGl2ZSh7IHpvbmU6IFwiZG9tXCIsIGluZGV4OiBpIH0pfVxuICAgICAgICAgICAgICAgIGFjdGl2YXRlTmFtZT17KCkgPT4gc2V0QWN0aXZlKHsgem9uZTogXCJuYW1lXCIgfSl9XG4gICAgICAgICAgICAgICAgZXhpdEZpcnN0QmFja3dhcmQ9eygpID0+IHNldEFjdGl2ZSh7IHpvbmU6IFwibmFtZVwiIH0pfVxuICAgICAgICAgICAgICAgIGV4aXRMYXN0Rm9yd2FyZD17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29kT2JzKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlKHsgem9uZTogXCJjb2RcIiwgaW5kZXg6IDAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRDb2QoMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIHNldEZvY3VzZWQ9eygpID0+IHByb3BzLmZvY3VzLnNldEZvY3VzZWQodHJ1ZSl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz17c3R5bGVzLmJveH0+XG4gICAgICAgICAgICAgICAgPE5hbWVJbnB1dFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17bW9yVHlwZU1ldGEoKT8ucHJlZmVyVW5uYW1lZCA/IHVuZGVmaW5lZCA6IFwiVW5uYW1lZFwifVxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtwcm9wcy5tb3JwaGlzbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBzZXROYW1lPXsobmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMubW9kaWZ5TW9ycGhpc20oKG1vcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vci5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBmb2N1cz17bmFtZUZvY3VzfVxuICAgICAgICAgICAgICAgICAgICBkZWxldGVCYWNrd2FyZD17cHJvcHMuYWN0aW9ucy5kZWxldGVCYWNrd2FyZH1cbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlRm9yd2FyZD17cHJvcHMuYWN0aW9ucy5kZWxldGVGb3J3YXJkfVxuICAgICAgICAgICAgICAgICAgICBleGl0QmFja3dhcmQ9e3Byb3BzLmFjdGlvbnMuYWN0aXZhdGVBYm92ZX1cbiAgICAgICAgICAgICAgICAgICAgZXhpdEZvcndhcmQ9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkb21PYnMoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlKHsgem9uZTogXCJkb21cIiwgaW5kZXg6IDAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydERvbSgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgZXhpdFVwPXtwcm9wcy5hY3Rpb25zLmFjdGl2YXRlQWJvdmV9XG4gICAgICAgICAgICAgICAgICAgIGV4aXREb3duPXtwcm9wcy5hY3Rpb25zLmFjdGl2YXRlQmVsb3d9XG4gICAgICAgICAgICAgICAgICAgIGV4aXRMZWZ0PXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZG9tT2JzKCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZSh7IHpvbmU6IFwiZG9tXCIsIGluZGV4OiBkb21PYnMoKS5sZW5ndGggLSAxIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnREb20oMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGV4aXRSaWdodD17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvZE9icygpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmUoeyB6b25lOiBcImNvZFwiLCBpbmRleDogMCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0Q29kKDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxXaXJlQ29sdW1uXG4gICAgICAgICAgICAgICAgb2JzPXtjb2RPYnMoKX1cbiAgICAgICAgICAgICAgICBzaWRlPVwicmlnaHRcIlxuICAgICAgICAgICAgICAgIGlzSW52YWxpZD17ZXJyb3JzKCkuc29tZSgoZXJyKSA9PiBlcnIudGFnID09PSBcIkNvZFwiIHx8IGVyci50YWcgPT09IFwiQ29kVHlwZVwiKX1cbiAgICAgICAgICAgICAgICBjb21wbGV0aW9ucz17Y29tcGxldGlvbnMoKX1cbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17KGkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYSA9IGFjdGl2ZSgpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvcHMuZm9jdXMuaGFzRm9jdXMoKSAmJiBhPy56b25lID09PSBcImNvZFwiICYmIGEuaW5kZXggPT09IGk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBvblRleHRDaGFuZ2U9eyhpLCB0ZXh0KSA9PiBjb2RJbnB1dFRleHRzLnNldChpLCB0ZXh0KX1cbiAgICAgICAgICAgICAgICBpbnNlcnRXaXJlPXtpbnNlcnRDb2R9XG4gICAgICAgICAgICAgICAgdXBkYXRlT2I9eyhpLCBvYikgPT5cbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQ29kT2JzKChvYmplY3RzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RzW2ldID0gb2I7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlbGV0ZVdpcmU9eyhpKSA9PiB1cGRhdGVDb2RPYnMoKG9iamVjdHMpID0+IG9iamVjdHMuc3BsaWNlKGksIDEpKX1cbiAgICAgICAgICAgICAgICBhY3RpdmF0ZVdpcmU9eyhpKSA9PiBzZXRBY3RpdmUoeyB6b25lOiBcImNvZFwiLCBpbmRleDogaSB9KX1cbiAgICAgICAgICAgICAgICBhY3RpdmF0ZU5hbWU9eygpID0+IHNldEFjdGl2ZSh7IHpvbmU6IFwibmFtZVwiIH0pfVxuICAgICAgICAgICAgICAgIGV4aXRGaXJzdEJhY2t3YXJkPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb21PYnMoKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmUoeyB6b25lOiBcImRvbVwiLCBpbmRleDogZG9tT2JzKCkubGVuZ3RoIC0gMSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZSh7IHpvbmU6IFwibmFtZVwiIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBleGl0TGFzdEZvcndhcmQ9e3Byb3BzLmFjdGlvbnMuYWN0aXZhdGVCZWxvd31cbiAgICAgICAgICAgICAgICBzZXRGb2N1c2VkPXsoKSA9PiBwcm9wcy5mb2N1cy5zZXRGb2N1c2VkKHRydWUpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJXaXJlQ29sdW1uIiwicHJvcHMiLCJsaXZlTW9kZWwiLCJ1c2VDb250ZXh0IiwiTGl2ZU1vZGVsQ29udGV4dCIsImludmFyaWFudCIsIndpcmVJbnB1dCIsIm9iIiwiaSIsIl8kY3JlYXRlQ29tcG9uZW50IiwiT2JJZElucHV0Iiwic2V0T2IiLCJuZXdPYiIsInVwZGF0ZU9iIiwib25UZXh0Q2hhbmdlIiwidGV4dCIsInBsYWNlaG9sZGVyIiwiY29tcGxldGlvbnMiLCJpZFRvTGFiZWwiLCJpZCIsImVsYWJvcmF0ZWRNb2RlbCIsIm9iR2VuZXJhdG9yTGFiZWwiLCJsYWJlbFRvSWQiLCJsYWJlbCIsIm9iR2VuZXJhdG9yV2l0aExhYmVsIiwiaXNJbnZhbGlkIiwiaXNBY3RpdmUiLCJjcmVhdGVCZWxvdyIsImluc2VydFdpcmUiLCJkZWxldGVCYWNrd2FyZCIsImRlbGV0ZVdpcmUiLCJvYnMiLCJsZW5ndGgiLCJhY3RpdmF0ZU5hbWUiLCJhY3RpdmF0ZVdpcmUiLCJkZWxldGVGb3J3YXJkIiwiZXhpdEJhY2t3YXJkIiwiZXhpdEZpcnN0QmFja3dhcmQiLCJleGl0Rm9yd2FyZCIsImV4aXRMYXN0Rm9yd2FyZCIsImV4aXRMZWZ0Iiwic2lkZSIsInVuZGVmaW5lZCIsImV4aXRSaWdodCIsIm9uQ29tcGxldGUiLCJpbnRlcmNlcHRLZXlEb3duIiwiZXZ0Iiwia2V5IiwiaGFzRm9jdXNlZCIsInNldEZvY3VzZWQiLCJfZWwkIiwiX3RtcGwkIiwiX2VsJDIiLCJmaXJzdENoaWxkIiwiX2VsJDMiLCJfJGluc2VydCIsIkluZGV4IiwiZWFjaCIsImNoaWxkcmVuIiwiX2VsJDQiLCJfdG1wbCQyIiwiX2VsJDUiLCJfYyQzIiwiXyRtZW1vIiwiX2MkNCIsIl8kZWZmZWN0IiwiX3AkIiwiX3YkNCIsInN0eWxlcyIsIndpcmUiLCJfdiQ1Iiwid2lyZUxpbmUiLCJlIiwiXyRjbGFzc05hbWUiLCJ0IiwiJCRtb3VzZWRvd24iLCJwcmV2ZW50RGVmYXVsdCIsIl9jJCIsIl9lbCQ2IiwiX3RtcGwkMyIsImFkZFdpcmVCdXR0b24iLCJfYyQyIiwiX2VsJDciLCJfdiQiLCJ3aXJlcyIsImxlZnQiLCJyaWdodCIsIl92JDIiLCJhZGRXaXJlIiwiX3YkMyIsImEiLCJTdHJpbmdEaWFncmFtTW9ycGhpc21DZWxsRWRpdG9yIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiY3JlYXRlU2lnbmFsIiwiem9uZSIsImNyZWF0ZUVmZmVjdCIsImZvY3VzIiwiaGFzRm9jdXMiLCJkb21JbnB1dFRleHRzIiwiTWFwIiwiY29kSW5wdXRUZXh0cyIsIm1vclR5cGVNZXRhIiwidGhlb3J5IiwibW9kZWxNb3JUeXBlTWV0YSIsIm1vcnBoaXNtIiwibW9yVHlwZSIsImRvbUFwcGx5T3AiLCJkb21haW4iLCJhcHBseSIsImNvZEFwcGx5T3AiLCJjb2RvbWFpbiIsIm1ha2VPYkxpc3QiLCJvYmplY3RzIiwib2JUeXBlIiwiYXBwbHlPcCIsInRhZyIsIndyYXBBcHAiLCJidWlsZE9iTGlzdCIsImNvbnRlbnQiLCJtb2RhbGl0eSIsImRvbVR5cGUiLCJjcmVhdGVNZW1vIiwib3AiLCJzcmMiLCJkb20iLCJjb2RUeXBlIiwidGd0IiwiZWxlbWVudE9iVHlwZSIsImR0IiwiZG9tT2JzIiwiZXh0cmFjdE9iTGlzdCIsInVud3JhcEFwcCIsImNvZE9icyIsImNvZCIsInNldERvbU9icyIsIm1vZGlmeU1vcnBoaXNtIiwibW9yIiwicmVtb3ZlUHJveHlBbmRDb3B5Iiwic2V0Q29kT2JzIiwidXBkYXRlRG9tT2JzIiwiZiIsInVwZGF0ZUNvZE9icyIsImluc2VydERvbSIsInNwbGljZSIsImluZGV4IiwiaW5zZXJ0Q29kIiwiZGVhY3RpdmF0ZSIsImZpbHRlciIsImdldCIsInVudHJhY2siLCJvYkdlbmVyYXRvcnNXaXRoVHlwZSIsIm5hbWVGb2N1cyIsImZvY3VzZWQiLCJlcnJvcnMiLCJ2YWxpZGF0ZWQiLCJ2YWxpZGF0ZWRNb2RlbCIsImVyciIsInJvb3RSZWYiLCJfZWwkOCIsIl9lbCQ5IiwiJCRmb2N1c291dCIsIm5leHQiLCJyZWxhdGVkVGFyZ2V0IiwiY29udGFpbnMiLCJfcmVmJCIsIl8kdXNlIiwic29tZSIsInNldCIsIk5hbWVJbnB1dCIsInByZWZlclVubmFtZWQiLCJuYW1lIiwic2V0TmFtZSIsImFjdGlvbnMiLCJhY3RpdmF0ZUFib3ZlIiwiZXhpdFVwIiwiZXhpdERvd24iLCJhY3RpdmF0ZUJlbG93IiwiX3YkNiIsIl92JDciLCJib3giLCJfJGRlbGVnYXRlRXZlbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1CQSxTQUFTQSxXQUFXQyxLQWtCakIsRUFBQTtBQUNDLEVBQU1DLE1BQUFBLFNBQUFBLEdBQVlDLFdBQVdDLGdCQUFnQixDQUFBO0FBQzdDQyxFQUFBQSxTQUFBQSxDQUFVSCxTQUFxRCxDQUFBO0FBRS9ELEVBQUEsTUFBTUksU0FBWUEsR0FBQUEsQ0FBQ0MsRUFBcUJDLEVBQUFBLENBQUFBLEtBQVNDLGdCQUM1Q0MsU0FBUyxFQUFBO0FBQUEsSUFBQSxJQUNOSCxFQUFFLEdBQUE7QUFBQSxNQUFBLE9BQUVBLEVBQUcsRUFBQTtBQUFBLEtBQUM7QUFBQSxJQUNSSSxLQUFRQyxFQUFBQSxDQUFBQSxLQUFBQSxLQUFVWCxLQUFNWSxDQUFBQSxRQUFBQSxDQUFTTCxHQUFHSSxLQUFLLENBQUE7QUFBQSxJQUN6Q0UsWUFBZUMsRUFBQUEsQ0FBQUEsSUFBQUEsS0FBU2QsS0FBTWEsQ0FBQUEsWUFBQUEsR0FBZU4sR0FBR08sSUFBSSxDQUFBO0FBQUEsSUFDcERDLFdBQVcsRUFBQSxLQUFB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
