import { createComponent, template, insert, effect, className, delegateEvents, mergeProps } from 'solid-js/web';
import { useContext, Show, Index, createMemo, Switch, Match } from 'solid-js';
import { L as LiveModelContext, o as invariant, W as ObListEditor, P as extractObList, X as deepEqual, u as useChildFocus, N as NameInput, O as ObInput, Q as unwrapApp, U as wrapApp } from './analysis_tool-dmxyNWB4.js';
import { obClasses } from './object_cell_editor-oKrxRfYW.js';
import './model-hspTLkzk.js';
import 'solid-js/store';
import '@automerge/automerge-repo';
import '@automerge/automerge-repo-network-websocket';
import '@automerge/automerge-repo-storage-indexeddb';
import '@automerge/automerge/slim';
import '@automerge/automerge';
import './index--5ogabjI.js';
import '@inkandswitch/patchwork-providers';

const monomial = "_monomial_syq4q_1";
const delimiter = "_delimiter_syq4q_7";
const separator = "_separator_syq4q_12";
const collapsed = "_collapsed_syq4q_16";
const exponent = "_exponent_syq4q_20";
const emptyMonomial = "_emptyMonomial_syq4q_25";
const productSeparator = "_productSeparator_syq4q_29";
const styles$1 = {
	monomial: monomial,
	delimiter: delimiter,
	separator: separator,
	collapsed: collapsed,
	exponent: exponent,
	emptyMonomial: emptyMonomial,
	productSeparator: productSeparator
};

var _tmpl$$1 = /* @__PURE__ */ template(`<div>`), _tmpl$2 = /* @__PURE__ */ template(`<span>...`), _tmpl$3 = /* @__PURE__ */ template(`<sup>`), _tmpl$4 = /* @__PURE__ */ template(`<span>&middot;`), _tmpl$5 = /* @__PURE__ */ template(`<span>`), _tmpl$6 = /* @__PURE__ */ template(`<div>[`), _tmpl$7 = /* @__PURE__ */ template(`<div>]`), _tmpl$8 = /* @__PURE__ */ template(`<div>,`);
function countObjects(objects) {
  const entries = [];
  for (const ob of objects) {
    const existing = entries.find((e) => deepEqual(e.ob, ob));
    if (existing) {
      existing.count++;
    } else {
      entries.push({
        ob,
        count: 1
      });
    }
  }
  return entries;
}
function ContributionMonomialEditor(props) {
  const liveModel = useContext(LiveModelContext);
  invariant(liveModel);
  const obList = () => extractObList(props.ob);
  const runs = () => countObjects(obList());
  const obLabel = (ob) => {
    if (!ob || ob.tag !== "Basic") {
      return null;
    }
    return liveModel().elaboratedModel()?.obGeneratorLabel(ob.content)?.join(".") ?? null;
  };
  return createComponent(Show, {
    get when() {
      return (props.focus?.hasFocus() ?? props.isActive) || obList().some((ob) => ob === null);
    },
    get fallback() {
      return (() => {
        var _el$2 = _tmpl$$1();
        _el$2.$$mousedown = (evt) => {
          props.focus?.setFocused(true);
          props.hasFocused?.();
          evt.preventDefault();
        };
        insert(_el$2, createComponent(Index, {
          get each() {
            return runs();
          },
          get fallback() {
            return (() => {
              var _el$3 = _tmpl$2();
              effect(() => className(_el$3, styles$1.emptyMonomial));
              return _el$3;
            })();
          },
          children: (run, index) => (() => {
            var _el$4 = _tmpl$5();
            insert(_el$4, () => obLabel(run().ob) ?? "...", null);
            insert(_el$4, createComponent(Show, {
              get when() {
                return run().count > 1;
              },
              get children() {
                var _el$5 = _tmpl$3();
                insert(_el$5, () => run().count);
                effect(() => className(_el$5, styles$1.exponent));
                return _el$5;
              }
            }), null);
            insert(_el$4, createComponent(Show, {
              get when() {
                return index < runs().length - 1;
              },
              get children() {
                var _el$6 = _tmpl$4();
                effect(() => className(_el$6, styles$1.productSeparator));
                return _el$6;
              }
            }), null);
            return _el$4;
          })()
        }));
        effect(() => className(_el$2, `${styles$1.monomial} ${styles$1.collapsed}`));
        return _el$2;
      })();
    },
    get children() {
      var _el$ = _tmpl$$1();
      insert(_el$, createComponent(ObListEditor, {
        get ob() {
          return props.ob;
        },
        get setOb() {
          return props.setOb;
        },
        get obType() {
          return props.obType;
        },
        get placeholder() {
          return props.placeholder;
        },
        get isInvalid() {
          return props.isInvalid;
        },
        get focus() {
          return props.focus;
        },
        get deleteBackward() {
          return props.deleteBackward;
        },
        get deleteForward() {
          return props.deleteForward;
        },
        get exitBackward() {
          return props.exitBackward;
        },
        get exitForward() {
          return props.exitForward;
        },
        get exitLeft() {
          return props.exitLeft;
        },
        get exitRight() {
          return props.exitRight;
        },
        get insertKey() {
          return props.insertKey ?? ",";
        },
        get startDelimiter() {
          return (() => {
            var _el$7 = _tmpl$6();
            effect(() => className(_el$7, styles$1.delimiter));
            return _el$7;
          })();
        },
        get endDelimiter() {
          return (() => {
            var _el$8 = _tmpl$7();
            effect(() => className(_el$8, styles$1.delimiter));
            return _el$8;
          })();
        },
        separator: () => (() => {
          var _el$9 = _tmpl$8();
          effect(() => className(_el$9, styles$1.separator));
          return _el$9;
        })()
      }));
      effect(() => className(_el$, styles$1.monomial));
      return _el$;
    }
  });
}
delegateEvents(["mousedown"]);

const fraction = "_fraction_1d07r_29";
const styles = {
	"morphism-decl": "_morphism-decl_1d07r_1",
	"morphism-decl-name-separator": "_morphism-decl-name-separator_1d07r_8",
	"morphism-decl-cod-prefix": "_morphism-decl-cod-prefix_1d07r_14",
	"morphism-decl-arrow-replacement": "_morphism-decl-arrow-replacement_1d07r_19",
	"morphism-decl-dom-prefix": "_morphism-decl-dom-prefix_1d07r_24",
	fraction: fraction,
	"fraction-denominator": "_fraction-denominator_1d07r_34"
};

var _tmpl$ = /* @__PURE__ */ template(`<div><div></div><div>:</div><div><div><div>d</div><div>dt</div></div></div><div></div><div>=</div><div>𝜆&nbsp;&middot;</div><div>`);
const PositiveContributionCellEditor = (props) => createComponent(ContributionCellEditor, mergeProps(props, {
  sign: "plus"
}));
const NegativeContributionCellEditor = (props) => createComponent(ContributionCellEditor, mergeProps(props, {
  sign: "minus"
}));
function ContributionCellEditor(props) {
  const liveModel = useContext(LiveModelContext);
  invariant(liveModel);
  const focus = useChildFocus(props.focus, {
    default: "name"
  });
  const morTypeMeta = () => props.theory.modelMorTypeMeta(props.morphism.morType);
  const domType = createMemo(() => {
    const theory = props.theory.theory;
    const op = morTypeMeta()?.domain?.apply;
    if (op === undefined) {
      return theory.src(props.morphism.morType);
    } else {
      return theory.dom(op);
    }
  });
  const codType = createMemo(() => {
    const theory = props.theory.theory;
    const op = morTypeMeta()?.codomain?.apply;
    if (op === undefined) {
      return theory.tgt(props.morphism.morType);
    } else {
      return theory.dom(op);
    }
  });
  const domClasses = () => ["morphism-decl-dom", ...obClasses(props.theory, domType())];
  const codClasses = () => ["morphism-decl-cod", ...obClasses(props.theory, codType())];
  const nameClasses = () => ["morphism-decl-name", ...morTypeMeta()?.textClasses ?? []];
  const errors = () => {
    const validated = liveModel().validatedModel();
    if (validated?.tag !== "Invalid") {
      return [];
    }
    return validated.errors.filter((err) => err.content === props.morphism.id);
  };
  const domApplyOp = () => morTypeMeta()?.domain?.apply;
  const domOb = () => {
    const op = domApplyOp();
    return op ? unwrapApp(props.morphism.dom, op) : props.morphism.dom;
  };
  const setDomOb = (ob) => {
    const op = domApplyOp();
    const wrapped = ob && op ? wrapApp(ob, op) : ob;
    props.modifyMorphism((mor) => {
      mor.dom = wrapped;
    });
  };
  return (() => {
    var _el$ = _tmpl$(), _el$2 = _el$.firstChild, _el$3 = _el$2.nextSibling, _el$4 = _el$3.nextSibling, _el$5 = _el$4.firstChild, _el$6 = _el$5.firstChild, _el$7 = _el$6.nextSibling, _el$8 = _el$4.nextSibling, _el$9 = _el$8.nextSibling, _el$10 = _el$9.firstChild, _el$11 = _el$9.nextSibling, _el$12 = _el$11.nextSibling;
    insert(_el$2, createComponent(NameInput, {
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
      get focus() {
        return focus.childFocus("name");
      },
      get deleteBackward() {
        return props.actions.deleteBackward;
      },
      get deleteForward() {
        return props.actions.deleteForward;
      },
      get exitBackward() {
        return props.actions.activateAbove;
      },
      exitForward: () => focus.setActiveChild("cod"),
      get exitUp() {
        return props.actions.activateAbove;
      },
      get exitDown() {
        return props.actions.activateBelow;
      },
      exitLeft: () => focus.setActiveChild("cod"),
      exitRight: () => focus.setActiveChild("dom")
    }));
    insert(_el$8, createComponent(ObInput, {
      placeholder: "...",
      get ob() {
        return props.morphism.cod;
      },
      setOb: (ob) => {
        props.modifyMorphism((mor) => {
          mor.cod = ob;
        });
      },
      get obType() {
        return codType();
      },
      get applyOp() {
        return morTypeMeta()?.codomain?.apply;
      },
      get isInvalid() {
        return errors().some((err) => err.tag === "Cod" || err.tag === "CodType");
      },
      get focus() {
        return focus.childFocus("cod");
      },
      deleteForward: () => focus.setActiveChild("name"),
      get exitBackward() {
        return props.actions.activateAbove;
      },
      exitForward: () => focus.setActiveChild("dom"),
      exitLeft: () => focus.setActiveChild("name")
    }));
    insert(_el$9, createComponent(Switch, {
      fallback: "+",
      get children() {
        return [createComponent(Match, {
          get when() {
            return props.sign === "plus";
          },
          children: "+"
        }), createComponent(Match, {
          get when() {
            return props.sign === "minus";
          },
          children: "-"
        })];
      }
    }), _el$10);
    insert(_el$12, createComponent(ContributionMonomialEditor, {
      placeholder: "...",
      get ob() {
        return domOb();
      },
      setOb: setDomOb,
      get obType() {
        return domType();
      },
      get isInvalid() {
        return errors().some((err) => err.tag === "Dom" || err.tag === "DomType");
      },
      get focus() {
        return focus.childFocus("dom");
      },
      deleteBackward: () => focus.setActiveChild("name"),
      exitBackward: () => focus.setActiveChild("name"),
      get exitForward() {
        return props.actions.activateBelow;
      },
      get exitRight() {
        return props.actions.activateBelow;
      }
    }));
    effect((_p$) => {
      var _v$ = `formal-judgment ${styles["morphism-decl"]}`, _v$2 = nameClasses().join(" "), _v$3 = styles["morphism-decl-name-separator"], _v$4 = styles["morphism-decl-cod-prefix"], _v$5 = styles["fraction"], _v$6 = styles["fraction-denominator"], _v$7 = codClasses().join(" "), _v$8 = styles["morphism-decl-arrow-replacement"], _v$9 = styles["morphism-decl-dom-prefix"], _v$10 = domClasses().join(" ");
      _v$ !== _p$.e && className(_el$, _p$.e = _v$);
      _v$2 !== _p$.t && className(_el$2, _p$.t = _v$2);
      _v$3 !== _p$.a && className(_el$3, _p$.a = _v$3);
      _v$4 !== _p$.o && className(_el$4, _p$.o = _v$4);
      _v$5 !== _p$.i && className(_el$5, _p$.i = _v$5);
      _v$6 !== _p$.n && className(_el$7, _p$.n = _v$6);
      _v$7 !== _p$.s && className(_el$8, _p$.s = _v$7);
      _v$8 !== _p$.h && className(_el$9, _p$.h = _v$8);
      _v$9 !== _p$.r && className(_el$11, _p$.r = _v$9);
      _v$10 !== _p$.d && className(_el$12, _p$.d = _v$10);
      return _p$;
    }, {
      e: undefined,
      t: undefined,
      a: undefined,
      o: undefined,
      i: undefined,
      n: undefined,
      s: undefined,
      h: undefined,
      r: undefined,
      d: undefined
    });
    return _el$;
  })();
}

export { NegativeContributionCellEditor, PositiveContributionCellEditor, ContributionCellEditor as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJpYnV0aW9uX2NlbGxfZWRpdG9yLUJ3UXNpUEs0LmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9mcm9udGVuZC9zcmMvbW9kZWwvY29udHJpYnV0aW9uX21vbm9taWFsX2VkaXRvci50c3giLCIuLi8uLi8uLi9mcm9udGVuZC9zcmMvbW9kZWwvY29udHJpYnV0aW9uX2NlbGxfZWRpdG9yLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWVwRXF1YWwgfSBmcm9tIFwiZmFzdC1lcXVhbHNcIjtcbmltcG9ydCB7IEluZGV4LCBTaG93LCB1c2VDb250ZXh0IH0gZnJvbSBcInNvbGlkLWpzXCI7XG5pbXBvcnQgdHlwZSB7IEpTWCB9IGZyb20gXCJzb2xpZC1qc1wiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcblxuaW1wb3J0IHR5cGUgeyBUZXh0SW5wdXRPcHRpb25zIH0gZnJvbSBcImNhdGNvbGFiLXVpLWNvbXBvbmVudHNcIjtcbmltcG9ydCB0eXBlIHsgT2IgfSBmcm9tIFwiY2F0bG9nLXdhc21cIjtcbmltcG9ydCB7IExpdmVNb2RlbENvbnRleHQgfSBmcm9tIFwiLi9jb250ZXh0XCI7XG5pbXBvcnQgeyBleHRyYWN0T2JMaXN0IH0gZnJvbSBcIi4vb2Jfb3BlcmF0aW9uc1wiO1xuaW1wb3J0IHR5cGUgeyBPYklucHV0UHJvcHMgfSBmcm9tIFwiLi9vYmplY3RfaW5wdXRcIjtcbmltcG9ydCB7IE9iTGlzdEVkaXRvciB9IGZyb20gXCIuL29iamVjdF9saXN0X2VkaXRvclwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NvbnRyaWJ1dGlvbl9tb25vbWlhbF9lZGl0b3IubW9kdWxlLmNzc1wiO1xuXG50eXBlIENvbnRyaWJ1dGlvbk1vbm9taWFsRWRpdG9yUHJvcHMgPSBPYklucHV0UHJvcHMgJlxuICAgIFRleHRJbnB1dE9wdGlvbnMgJiB7XG4gICAgICAgIGluc2VydEtleT86IHN0cmluZztcbiAgICAgICAgc3RhcnREZWxpbWl0ZXI/OiBKU1guRWxlbWVudCB8IHN0cmluZztcbiAgICAgICAgZW5kRGVsaW1pdGVyPzogSlNYLkVsZW1lbnQgfCBzdHJpbmc7XG4gICAgICAgIHNlcGFyYXRvcj86IChpbmRleDogbnVtYmVyKSA9PiBKU1guRWxlbWVudCB8IHN0cmluZztcbiAgICB9O1xuXG4vKiogQSBydW4tbGVuZ3RoIGVuY29kZWQgZW50cnk6IHRoZSBvYmplY3QgYW5kIGhvdyBtYW55IHRpbWVzIGl0IHJlcGVhdHMuICovXG50eXBlIFJ1bkVudHJ5ID0ge1xuICAgIG9iOiBPYiB8IG51bGw7XG4gICAgY291bnQ6IG51bWJlcjtcbn07XG5cbi8qKiBDb3VudCBvY2N1cnJlbmNlcyBvZiBlYWNoIGRpc3RpbmN0IG9iamVjdCwgcHJlc2VydmluZyBmaXJzdC1hcHBlYXJhbmNlIG9yZGVyLiAqL1xuZnVuY3Rpb24gY291bnRPYmplY3RzKG9iamVjdHM6IEFycmF5PE9iIHwgbnVsbD4pOiBSdW5FbnRyeVtdIHtcbiAgICBjb25zdCBlbnRyaWVzOiBSdW5FbnRyeVtdID0gW107XG4gICAgZm9yIChjb25zdCBvYiBvZiBvYmplY3RzKSB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gZW50cmllcy5maW5kKChlKSA9PiBkZWVwRXF1YWwoZS5vYiwgb2IpKTtcbiAgICAgICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICAgICAgICBleGlzdGluZy5jb3VudCsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZW50cmllcy5wdXNoKHsgb2IsIGNvdW50OiAxIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbnRyaWVzO1xufVxuXG4vKiogRWRpdHMgYSBsaXN0IG9mIG9iamVjdHMsIGRpc3BsYXlpbmcgcmVwZWF0ZWQgb2JqZWN0cyB3aXRoIHN1cGVyc2NyaXB0IGNvdW50cyB3aGVuIG5vdCBlZGl0aW5nLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIENvbnRyaWJ1dGlvbk1vbm9taWFsRWRpdG9yKHByb3BzOiBDb250cmlidXRpb25Nb25vbWlhbEVkaXRvclByb3BzKSB7XG4gICAgY29uc3QgbGl2ZU1vZGVsID0gdXNlQ29udGV4dChMaXZlTW9kZWxDb250ZXh0KTtcbiAgICBpbnZhcmlhbnQobGl2ZU1vZGVsLCBcIkxpdmUgbW9kZWwgc2hvdWxkIGJlIHByb3ZpZGVkIGFzIGNvbnRleHRcIik7XG5cbiAgICBjb25zdCBvYkxpc3QgPSAoKTogQXJyYXk8T2IgfCBudWxsPiA9PiBleHRyYWN0T2JMaXN0KHByb3BzLm9iKTtcblxuICAgIGNvbnN0IHJ1bnMgPSAoKSA9PiBjb3VudE9iamVjdHMob2JMaXN0KCkpO1xuXG4gICAgLyoqIFJlc29sdmUgdGhlIGxhYmVsIGZvciBhbiBvYmplY3QsIHJldHVybmluZyBudWxsIGlmIG5vdCBhdmFpbGFibGUuICovXG4gICAgY29uc3Qgb2JMYWJlbCA9IChvYjogT2IgfCBudWxsKTogc3RyaW5nIHwgbnVsbCA9PiB7XG4gICAgICAgIGlmICghb2IgfHwgb2IudGFnICE9PSBcIkJhc2ljXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaXZlTW9kZWwoKS5lbGFib3JhdGVkTW9kZWwoKT8ub2JHZW5lcmF0b3JMYWJlbChvYi5jb250ZW50KT8uam9pbihcIi5cIikgPz8gbnVsbDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFNob3dcbiAgICAgICAgICAgIHdoZW49eyhwcm9wcy5mb2N1cz8uaGFzRm9jdXMoKSA/PyBwcm9wcy5pc0FjdGl2ZSkgfHwgb2JMaXN0KCkuc29tZSgob2IpID0+IG9iID09PSBudWxsKX1cbiAgICAgICAgICAgIGZhbGxiYWNrPXtcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPXtgJHtzdHlsZXMubW9ub21pYWx9ICR7c3R5bGVzLmNvbGxhcHNlZH1gfVxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KGV2dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuZm9jdXM/LnNldEZvY3VzZWQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5oYXNGb2N1c2VkPy4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEluZGV4IGVhY2g9e3J1bnMoKX0gZmFsbGJhY2s9ezxzcGFuIGNsYXNzPXtzdHlsZXMuZW1wdHlNb25vbWlhbH0+Li4uPC9zcGFuPn0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7KHJ1biwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29iTGFiZWwocnVuKCkub2IpID8/IFwiLi4uXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaG93IHdoZW49e3J1bigpLmNvdW50ID4gMX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3VwIGNsYXNzPXtzdHlsZXMuZXhwb25lbnR9PntydW4oKS5jb3VudH08L3N1cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TaG93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2hvdyB3aGVuPXtpbmRleCA8IHJ1bnMoKS5sZW5ndGggLSAxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPXtzdHlsZXMucHJvZHVjdFNlcGFyYXRvcn0+Jm1pZGRvdDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2hvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L0luZGV4PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPXtzdHlsZXMubW9ub21pYWx9PlxuICAgICAgICAgICAgICAgIDxPYkxpc3RFZGl0b3JcbiAgICAgICAgICAgICAgICAgICAgb2I9e3Byb3BzLm9ifVxuICAgICAgICAgICAgICAgICAgICBzZXRPYj17cHJvcHMuc2V0T2J9XG4gICAgICAgICAgICAgICAgICAgIG9iVHlwZT17cHJvcHMub2JUeXBlfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17cHJvcHMuaXNJbnZhbGlkfVxuICAgICAgICAgICAgICAgICAgICBmb2N1cz17cHJvcHMuZm9jdXN9XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJhY2t3YXJkPXtwcm9wcy5kZWxldGVCYWNrd2FyZH1cbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlRm9yd2FyZD17cHJvcHMuZGVsZXRlRm9yd2FyZH1cbiAgICAgICAgICAgICAgICAgICAgZXhpdEJhY2t3YXJkPXtwcm9wcy5leGl0QmFja3dhcmR9XG4gICAgICAgICAgICAgICAgICAgIGV4aXRGb3J3YXJkPXtwcm9wcy5leGl0Rm9yd2FyZH1cbiAgICAgICAgICAgICAgICAgICAgZXhpdExlZnQ9e3Byb3BzLmV4aXRMZWZ0fVxuICAgICAgICAgICAgICAgICAgICBleGl0UmlnaHQ9e3Byb3BzLmV4aXRSaWdodH1cbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0S2V5PXtwcm9wcy5pbnNlcnRLZXkgPz8gXCIsXCJ9XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RGVsaW1pdGVyPXs8ZGl2IGNsYXNzPXtzdHlsZXMuZGVsaW1pdGVyfT57XCJbXCJ9PC9kaXY+fVxuICAgICAgICAgICAgICAgICAgICBlbmREZWxpbWl0ZXI9ezxkaXYgY2xhc3M9e3N0eWxlcy5kZWxpbWl0ZXJ9PntcIl1cIn08L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgIHNlcGFyYXRvcj17KCkgPT4gPGRpdiBjbGFzcz17c3R5bGVzLnNlcGFyYXRvcn0+e1wiLFwifTwvZGl2Pn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvU2hvdz5cbiAgICApO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlTWVtbywgdXNlQ29udGV4dCwgU3dpdGNoLCBNYXRjaCB9IGZyb20gXCJzb2xpZC1qc1wiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcblxuaW1wb3J0IHsgTmFtZUlucHV0LCB1c2VDaGlsZEZvY3VzIH0gZnJvbSBcImNhdGNvbGFiLXVpLWNvbXBvbmVudHNcIjtcbmltcG9ydCB0eXBlIHsgT2IgfSBmcm9tIFwiY2F0bG9nLXdhc21cIjtcbmltcG9ydCB7IExpdmVNb2RlbENvbnRleHQgfSBmcm9tIFwiLi9jb250ZXh0XCI7XG5pbXBvcnQgeyBDb250cmlidXRpb25Nb25vbWlhbEVkaXRvciB9IGZyb20gXCIuL2NvbnRyaWJ1dGlvbl9tb25vbWlhbF9lZGl0b3JcIjtcbmltcG9ydCB0eXBlIHsgTW9ycGhpc21FZGl0b3JQcm9wcyB9IGZyb20gXCIuL2VkaXRvcnNcIjtcbmltcG9ydCB7IHVud3JhcEFwcCwgd3JhcEFwcCB9IGZyb20gXCIuL29iX29wZXJhdGlvbnNcIjtcbmltcG9ydCB7IG9iQ2xhc3NlcyB9IGZyb20gXCIuL29iamVjdF9jZWxsX2VkaXRvclwiO1xuaW1wb3J0IHsgT2JJbnB1dCB9IGZyb20gXCIuL29iamVjdF9pbnB1dFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NvbnRyaWJ1dGlvbl9jZWxsX2VkaXRvci5tb2R1bGUuY3NzXCI7XG5cbi8qKiBUaGUgc2lnbiBvZiBhIGNvbnRyaWJ1dGlvbjogcG9zaXRpdmUgb3IgbmVnYXRpdmUuICovXG5leHBvcnQgdHlwZSBDb250cmlidXRpb25TaWduID0gXCJwbHVzXCIgfCBcIm1pbnVzXCI7XG5cbi8qKiBFZGl0b3IgZm9yIGEgcG9zaXRpdmUgY29udHJpYnV0aW9uIGRlY2xhcmF0aW9uIGluIGEgbW9kZWwuICovXG5leHBvcnQgY29uc3QgUG9zaXRpdmVDb250cmlidXRpb25DZWxsRWRpdG9yID0gKHByb3BzOiBNb3JwaGlzbUVkaXRvclByb3BzKSA9PiAoXG4gICAgPENvbnRyaWJ1dGlvbkNlbGxFZGl0b3Igey4uLnByb3BzfSBzaWduPVwicGx1c1wiIC8+XG4pO1xuXG4vKiogRWRpdG9yIGZvciBhIG5lZ2F0aXZlIGNvbnRyaWJ1dGlvbiBkZWNsYXJhdGlvbiBpbiBhIG1vZGVsLiAqL1xuZXhwb3J0IGNvbnN0IE5lZ2F0aXZlQ29udHJpYnV0aW9uQ2VsbEVkaXRvciA9IChwcm9wczogTW9ycGhpc21FZGl0b3JQcm9wcykgPT4gKFxuICAgIDxDb250cmlidXRpb25DZWxsRWRpdG9yIHsuLi5wcm9wc30gc2lnbj1cIm1pbnVzXCIgLz5cbik7XG5cbi8qKiBFZGl0b3IgZm9yIGEgY29udHJpYnV0aW9uIGRlY2xhcmF0aW9uIGNlbGwgaW4gYSBtb2RlbC4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRyaWJ1dGlvbkNlbGxFZGl0b3IoXG4gICAgcHJvcHM6IE1vcnBoaXNtRWRpdG9yUHJvcHMgJiB7IHNpZ24/OiBDb250cmlidXRpb25TaWduIH0sXG4pIHtcbiAgICBjb25zdCBsaXZlTW9kZWwgPSB1c2VDb250ZXh0KExpdmVNb2RlbENvbnRleHQpO1xuICAgIGludmFyaWFudChsaXZlTW9kZWwsIFwiTGl2ZSBtb2RlbCBzaG91bGQgYmUgcHJvdmlkZWQgYXMgY29udGV4dFwiKTtcblxuICAgIC8vIG94bGludC1kaXNhYmxlLW5leHQtbGluZSBzb2xpZC9yZWFjdGl2aXR5IC0tIEZvY3VzIGhhbmRsZXMgYXJlIHN0YWJsZSBmb3IgYSBtb3VudGVkIGNlbGwuXG4gICAgY29uc3QgZm9jdXMgPSB1c2VDaGlsZEZvY3VzPE1vcnBoaXNtQ2VsbElucHV0Pihwcm9wcy5mb2N1cywgeyBkZWZhdWx0OiBcIm5hbWVcIiB9KTtcblxuICAgIGNvbnN0IG1vclR5cGVNZXRhID0gKCkgPT4gcHJvcHMudGhlb3J5Lm1vZGVsTW9yVHlwZU1ldGEocHJvcHMubW9ycGhpc20ubW9yVHlwZSk7XG5cbiAgICBjb25zdCBkb21UeXBlID0gY3JlYXRlTWVtbygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRoZW9yeSA9IHByb3BzLnRoZW9yeS50aGVvcnk7XG4gICAgICAgIGNvbnN0IG9wID0gbW9yVHlwZU1ldGEoKT8uZG9tYWluPy5hcHBseTtcbiAgICAgICAgaWYgKG9wID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGVvcnkuc3JjKHByb3BzLm1vcnBoaXNtLm1vclR5cGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gQ29kb21haW4gdHlwZSBmb3Igb3BlcmF0aW9uIHNob3VsZCBlcXVhbCBzb3VyY2UgdHlwZSBhYm92ZS5cbiAgICAgICAgICAgIHJldHVybiB0aGVvcnkuZG9tKG9wKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgY29kVHlwZSA9IGNyZWF0ZU1lbW8oKCkgPT4ge1xuICAgICAgICBjb25zdCB0aGVvcnkgPSBwcm9wcy50aGVvcnkudGhlb3J5O1xuICAgICAgICBjb25zdCBvcCA9IG1vclR5cGVNZXRhKCk/LmNvZG9tYWluPy5hcHBseTtcbiAgICAgICAgaWYgKG9wID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGVvcnkudGd0KHByb3BzLm1vcnBoaXNtLm1vclR5cGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gQ29kb21haW4gdHlwZSBmb3Igb3BlcmF0aW9uIHNob3VsZCBlcXVhbCB0YXJnZXQgdHlwZSBhYm92ZS5cbiAgICAgICAgICAgIHJldHVybiB0aGVvcnkuZG9tKG9wKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZG9tQ2xhc3NlcyA9ICgpID0+IFtcIm1vcnBoaXNtLWRlY2wtZG9tXCIsIC4uLm9iQ2xhc3Nlcyhwcm9wcy50aGVvcnksIGRvbVR5cGUoKSldO1xuICAgIGNvbnN0IGNvZENsYXNzZXMgPSAoKSA9PiBbXCJtb3JwaGlzbS1kZWNsLWNvZFwiLCAuLi5vYkNsYXNzZXMocHJvcHMudGhlb3J5LCBjb2RUeXBlKCkpXTtcblxuICAgIGNvbnN0IG5hbWVDbGFzc2VzID0gKCkgPT4gW1wibW9ycGhpc20tZGVjbC1uYW1lXCIsIC4uLihtb3JUeXBlTWV0YSgpPy50ZXh0Q2xhc3NlcyA/PyBbXSldO1xuXG4gICAgY29uc3QgZXJyb3JzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB2YWxpZGF0ZWQgPSBsaXZlTW9kZWwoKS52YWxpZGF0ZWRNb2RlbCgpO1xuICAgICAgICBpZiAodmFsaWRhdGVkPy50YWcgIT09IFwiSW52YWxpZFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlZC5lcnJvcnMuZmlsdGVyKChlcnIpID0+IGVyci5jb250ZW50ID09PSBwcm9wcy5tb3JwaGlzbS5pZCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRvbUFwcGx5T3AgPSAoKSA9PiBtb3JUeXBlTWV0YSgpPy5kb21haW4/LmFwcGx5O1xuXG4gICAgY29uc3QgZG9tT2IgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wID0gZG9tQXBwbHlPcCgpO1xuICAgICAgICByZXR1cm4gb3AgPyB1bndyYXBBcHAocHJvcHMubW9ycGhpc20uZG9tLCBvcCkgOiBwcm9wcy5tb3JwaGlzbS5kb207XG4gICAgfTtcblxuICAgIGNvbnN0IHNldERvbU9iID0gKG9iOiBPYiB8IG51bGwpID0+IHtcbiAgICAgICAgY29uc3Qgb3AgPSBkb21BcHBseU9wKCk7XG4gICAgICAgIGNvbnN0IHdyYXBwZWQgPSBvYiAmJiBvcCA/IHdyYXBBcHAob2IsIG9wKSA6IG9iO1xuICAgICAgICBwcm9wcy5tb2RpZnlNb3JwaGlzbSgobW9yKSA9PiB7XG4gICAgICAgICAgICBtb3IuZG9tID0gd3JhcHBlZDtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3M9e2Bmb3JtYWwtanVkZ21lbnQgJHtzdHlsZXNbXCJtb3JwaGlzbS1kZWNsXCJdfWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz17bmFtZUNsYXNzZXMoKS5qb2luKFwiIFwiKX0+XG4gICAgICAgICAgICAgICAgPE5hbWVJbnB1dFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17bW9yVHlwZU1ldGEoKT8ucHJlZmVyVW5uYW1lZCA/IHVuZGVmaW5lZCA6IFwiVW5uYW1lZFwifVxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtwcm9wcy5tb3JwaGlzbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBzZXROYW1lPXsobmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMubW9kaWZ5TW9ycGhpc20oKG1vcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vci5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBmb2N1cz17Zm9jdXMuY2hpbGRGb2N1cyhcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJhY2t3YXJkPXtwcm9wcy5hY3Rpb25zLmRlbGV0ZUJhY2t3YXJkfVxuICAgICAgICAgICAgICAgICAgICBkZWxldGVGb3J3YXJkPXtwcm9wcy5hY3Rpb25zLmRlbGV0ZUZvcndhcmR9XG4gICAgICAgICAgICAgICAgICAgIGV4aXRCYWNrd2FyZD17cHJvcHMuYWN0aW9ucy5hY3RpdmF0ZUFib3ZlfVxuICAgICAgICAgICAgICAgICAgICBleGl0Rm9yd2FyZD17KCkgPT4gZm9jdXMuc2V0QWN0aXZlQ2hpbGQoXCJjb2RcIil9XG4gICAgICAgICAgICAgICAgICAgIGV4aXRVcD17cHJvcHMuYWN0aW9ucy5hY3RpdmF0ZUFib3ZlfVxuICAgICAgICAgICAgICAgICAgICBleGl0RG93bj17cHJvcHMuYWN0aW9ucy5hY3RpdmF0ZUJlbG93fVxuICAgICAgICAgICAgICAgICAgICBleGl0TGVmdD17KCkgPT4gZm9jdXMuc2V0QWN0aXZlQ2hpbGQoXCJjb2RcIil9XG4gICAgICAgICAgICAgICAgICAgIGV4aXRSaWdodD17KCkgPT4gZm9jdXMuc2V0QWN0aXZlQ2hpbGQoXCJkb21cIil9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz17c3R5bGVzW1wibW9ycGhpc20tZGVjbC1uYW1lLXNlcGFyYXRvclwiXX0+OjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz17c3R5bGVzW1wibW9ycGhpc20tZGVjbC1jb2QtcHJlZml4XCJdfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPXtzdHlsZXNbXCJmcmFjdGlvblwiXX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+ZDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPXtzdHlsZXNbXCJmcmFjdGlvbi1kZW5vbWluYXRvclwiXX0+ZHQ8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz17Y29kQ2xhc3NlcygpLmpvaW4oXCIgXCIpfT5cbiAgICAgICAgICAgICAgICA8T2JJbnB1dFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIi4uLlwiXG4gICAgICAgICAgICAgICAgICAgIG9iPXtwcm9wcy5tb3JwaGlzbS5jb2R9XG4gICAgICAgICAgICAgICAgICAgIHNldE9iPXsob2IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm1vZGlmeU1vcnBoaXNtKChtb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3IuY29kID0gb2I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb2JUeXBlPXtjb2RUeXBlKCl9XG4gICAgICAgICAgICAgICAgICAgIGFwcGx5T3A9e21vclR5cGVNZXRhKCk/LmNvZG9tYWluPy5hcHBseX1cbiAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtlcnJvcnMoKS5zb21lKChlcnIpID0+IGVyci50YWcgPT09IFwiQ29kXCIgfHwgZXJyLnRhZyA9PT0gXCJDb2RUeXBlXCIpfVxuICAgICAgICAgICAgICAgICAgICBmb2N1cz17Zm9jdXMuY2hpbGRGb2N1cyhcImNvZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlRm9yd2FyZD17KCkgPT4gZm9jdXMuc2V0QWN0aXZlQ2hpbGQoXCJuYW1lXCIpfVxuICAgICAgICAgICAgICAgICAgICBleGl0QmFja3dhcmQ9e3Byb3BzLmFjdGlvbnMuYWN0aXZhdGVBYm92ZX1cbiAgICAgICAgICAgICAgICAgICAgZXhpdEZvcndhcmQ9eygpID0+IGZvY3VzLnNldEFjdGl2ZUNoaWxkKFwiZG9tXCIpfVxuICAgICAgICAgICAgICAgICAgICBleGl0TGVmdD17KCkgPT4gZm9jdXMuc2V0QWN0aXZlQ2hpbGQoXCJuYW1lXCIpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9e3N0eWxlc1tcIm1vcnBoaXNtLWRlY2wtYXJyb3ctcmVwbGFjZW1lbnRcIl19PlxuICAgICAgICAgICAgICAgIDxTd2l0Y2ggZmFsbGJhY2s9XCIrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxNYXRjaCB3aGVuPXtwcm9wcy5zaWduID09PSBcInBsdXNcIn0+e1wiK1wifTwvTWF0Y2g+XG4gICAgICAgICAgICAgICAgICAgIDxNYXRjaCB3aGVuPXtwcm9wcy5zaWduID09PSBcIm1pbnVzXCJ9PntcIi1cIn08L01hdGNoPlxuICAgICAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICAgICAgICAgIHtcIj1cIn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz17c3R5bGVzW1wibW9ycGhpc20tZGVjbC1kb20tcHJlZml4XCJdfT7wnZyGJm5ic3A7Jm1pZGRvdDs8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9e2RvbUNsYXNzZXMoKS5qb2luKFwiIFwiKX0+XG4gICAgICAgICAgICAgICAgPENvbnRyaWJ1dGlvbk1vbm9taWFsRWRpdG9yXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgb2I9e2RvbU9iKCl9XG4gICAgICAgICAgICAgICAgICAgIHNldE9iPXtzZXREb21PYn1cbiAgICAgICAgICAgICAgICAgICAgb2JUeXBlPXtkb21UeXBlKCl9XG4gICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17ZXJyb3JzKCkuc29tZSgoZXJyKSA9PiBlcnIudGFnID09PSBcIkRvbVwiIHx8IGVyci50YWcgPT09IFwiRG9tVHlwZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgZm9jdXM9e2ZvY3VzLmNoaWxkRm9jdXMoXCJkb21cIil9XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJhY2t3YXJkPXsoKSA9PiBmb2N1cy5zZXRBY3RpdmVDaGlsZChcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgIGV4aXRCYWNrd2FyZD17KCkgPT4gZm9jdXMuc2V0QWN0aXZlQ2hpbGQoXCJuYW1lXCIpfVxuICAgICAgICAgICAgICAgICAgICBleGl0Rm9yd2FyZD17cHJvcHMuYWN0aW9ucy5hY3RpdmF0ZUJlbG93fVxuICAgICAgICAgICAgICAgICAgICBleGl0UmlnaHQ9e3Byb3BzLmFjdGlvbnMuYWN0aXZhdGVCZWxvd31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbnR5cGUgTW9ycGhpc21DZWxsSW5wdXQgPSBcIm5hbWVcIiB8IFwiZG9tXCIgfCBcImNvZFwiO1xuIl0sIm5hbWVzIjpbImNvdW50T2JqZWN0cyIsIm9iamVjdHMiLCJlbnRyaWVzIiwib2IiLCJleGlzdGluZyIsImZpbmQiLCJlIiwiZGVlcEVxdWFsIiwiY291bnQiLCJwdXNoIiwiQ29udHJpYnV0aW9uTW9ub21pYWxFZGl0b3IiLCJwcm9wcyIsImxpdmVNb2RlbCIsInVzZUNvbnRleHQiLCJMaXZlTW9kZWxDb250ZXh0IiwiaW52YXJpYW50Iiwib2JMaXN0IiwiZXh0cmFjdE9iTGlzdCIsInJ1bnMiLCJvYkxhYmVsIiwidGFnIiwiZWxhYm9yYXRlZE1vZGVsIiwib2JHZW5lcmF0b3JMYWJlbCIsImNvbnRlbnQiLCJqb2luIiwiXyRjcmVhdGVDb21wb25lbnQiLCJTaG93Iiwid2hlbiIsImZvY3VzIiwiaGFzRm9jdXMiLCJpc0FjdGl2ZSIsInNvbWUiLCJmYWxsYmFjayIsIl9lbCQyIiwiX3RtcGwkIiwiJCRtb3VzZWRvd24iLCJldnQiLCJzZXRGb2N1c2VkIiwiaGFzRm9jdXNlZCIsInByZXZlbnREZWZhdWx0IiwiXyRpbnNlcnQiLCJJbmRleCIsImVhY2giLCJfZWwkMyIsIl90bXBsJDIiLCJfJGVmZmVjdCIsIl8kY2xhc3NOYW1lIiwic3R5bGVzIiwiZW1wdHlNb25vbWlhbCIsImNoaWxkcmVuIiwicnVuIiwiaW5kZXgiLCJfZWwkNCIsIl90bXBsJDUiLCJfZWwkNSIsIl90bXBsJDMiLCJleHBvbmVudCIsImxlbmd0aCIsIl9lbCQ2IiwiX3RtcGwkNCIsInByb2R1Y3RTZXBhcmF0b3IiLCJtb25vbWlhbCIsImNvbGxhcHNlZCIsIl9lbCQiLCJPYkxpc3RFZGl0b3IiLCJzZXRPYiIsIm9iVHlwZSIsInBsYWNlaG9sZGVyIiwiaXNJbnZhbGlkIiwiZGVsZXRlQmFja3dhcmQiLCJkZWxldGVGb3J3YXJkIiwiZXhpdEJhY2t3YXJkIiwiZXhpdEZvcndhcmQiLCJleGl0TGVmdCIsImV4aXRSaWdodCIsImluc2VydEtleSIsInN0YXJ0RGVsaW1pdGVyIiwiX2VsJDciLCJfdG1wbCQ2IiwiZGVsaW1pdGVyIiwiZW5kRGVsaW1pdGVyIiwiX2VsJDgiLCJfdG1wbCQ3Iiwic2VwYXJhdG9yIiwiX2VsJDkiLCJfdG1wbCQ4IiwiXyRkZWxlZ2F0ZUV2ZW50cyIsIlBvc2l0aXZlQ29udHJpYnV0aW9uQ2VsbEVkaXRvciIsIkNvbnRyaWJ1dGlvbkNlbGxFZGl0b3IiLCJfJG1lcmdlUHJvcHMiLCJzaWduIiwiTmVnYXRpdmVDb250cmlidXRpb25DZWxsRWRpdG9yIiwidXNlQ2hpbGRGb2N1cyIsImRlZmF1bHQiLCJtb3JUeXBlTWV0YSIsInRoZW9yeSIsIm1vZGVsTW9yVHlwZU1ldGEiLCJtb3JwaGlzbSIsIm1vclR5cGUiLCJkb21UeXBlIiwiY3JlYXRlTWVtbyIsIm9wIiwiZG9tYWluIiwiYXBwbHkiLCJ1bmRlZmluZWQiLCJzcmMiLCJkb20iLCJjb2RUeXBlIiwiY29kb21haW4iLCJ0Z3QiLCJkb21DbGFzc2VzIiwib2JDbGFzc2VzIiwiY29kQ2xhc3NlcyIsIm5hbWVDbGFzc2VzIiwidGV4dENsYXNzZXMiLCJlcnJvcnMiLCJ2YWxpZGF0ZWQiLCJ2YWxpZGF0ZWRNb2RlbCIsImZpbHRlciIsImVyciIsImlkIiwiZG9tQXBwbHlPcCIsImRvbU9iIiwidW53cmFwQXBwIiwic2V0RG9tT2IiLCJ3cmFwcGVkIiwid3JhcEFwcCIsIm1vZGlmeU1vcnBoaXNtIiwibW9yIiwiZmlyc3RDaGlsZCIsIm5leHRTaWJsaW5nIiwiX2VsJDEwIiwiX2VsJDExIiwiX2VsJDEyIiwiTmFtZUlucHV0IiwicHJlZmVyVW5uYW1lZCIsIm5hbWUiLCJzZXROYW1lIiwiY2hpbGRGb2N1cyIsImFjdGlvbnMiLCJhY3RpdmF0ZUFib3ZlIiwic2V0QWN0aXZlQ2hpbGQiLCJleGl0VXAiLCJleGl0RG93biIsImFjdGl2YXRlQmVsb3ciLCJPYklucHV0IiwiY29kIiwiYXBwbHlPcCIsIlN3aXRjaCIsIk1hdGNoIiwiX3AkIiwiX3YkIiwiX3YkMiIsIl92JDMiLCJfdiQ0IiwiX3YkNSIsIl92JDYiLCJfdiQ3IiwiX3YkOCIsIl92JDkiLCJfdiQxMCIsInQiLCJhIiwibyIsImkiLCJuIiwicyIsImgiLCJyIiwiZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QkEsU0FBU0EsYUFBYUMsT0FBdUMsRUFBQTtBQUN6RCxFQUFBLE1BQU1DLFVBQXNCLEVBQUU7QUFDOUIsRUFBQSxLQUFBLE1BQVdDLE1BQU1GLE9BQVMsRUFBQTtBQUN0QixJQUFNRyxNQUFBQSxRQUFBQSxHQUFXRixRQUFRRyxJQUFNQyxDQUFBQSxDQUFBQSxDQUFBQSxLQUFNQyxVQUFVRCxDQUFFSCxDQUFBQSxFQUFBQSxFQUFJQSxFQUFFLENBQUMsQ0FBQTtBQUN4RCxJQUFBLElBQUlDLFFBQVUsRUFBQTtBQUNWQSxNQUFTSSxRQUFBQSxDQUFBQSxLQUFBQSxFQUFBQTtBQUFBQSxLQUNOLE1BQUE7QUFDSE4sTUFBQUEsT0FBQUEsQ0FBUU8sSUFBSyxDQUFBO0FBQUEsUUFBRU4sRUFBQUE7QUFBQUEsUUFBSUssS0FBTyxFQUFBO0FBQUEsT0FBRyxDQUFBO0FBQUE7QUFDakM7QUFFSixFQUFPTixPQUFBQSxPQUFBQTtBQUNYO0FBR08sU0FBU1EsMkJBQTJCQyxLQUF3QyxFQUFBO0FBQy9FLEVBQU1DLE1BQUFBLFNBQUFBLEdBQVlDLFdBQVdDLGdCQUFnQixDQUFBO0FBQzdDQyxFQUFBQSxTQUFBQSxDQUFVSCxTQUFxRCxDQUFBO0FBRS9ELEVBQUEsTUFBTUksTUFBU0EsR0FBQUEsTUFBd0JDLGFBQWNOLENBQUFBLEtBQUFBLENBQU1SLEVBQUUsQ0FBQTtBQUU3RCxFQUFBLE1BQU1lLElBQU9BLEdBQUFBLE1BQU1sQixZQUFhZ0IsQ0FBQUEsTUFBQUEsRUFBUSxDQUFBO0FBR3hDLEVB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
