import { createComponent, template, insert, effect, className, delegateEvents, mergeProps } from 'solid-js/web';
import { useContext, Show, Index, createMemo, Switch, Match } from 'solid-js';
import { i as invariant } from './document-BaPUF-Ky.js';
import { L as LiveModelContext, s as ObListEditor, n as extractObList, t as deepEqual, u as useChildFocus, N as NameInput, O as ObInput, o as unwrapApp, w as wrapApp } from './analysis_tool-Bvgm6Cie.js';
import { obClasses } from './object_cell_editor-DW5yEtQd.js';
import './notebook-DqARNRKu.js';
import 'solid-js/store';
import '@automerge/automerge-repo';
import '@automerge/automerge-repo-network-websocket';
import '@automerge/automerge-repo-storage-indexeddb';
import '@automerge/automerge/slim';
import '@automerge/automerge';
import './model-B9uNSW6J.js';
import './index-CvS5Jq0z.js';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJpYnV0aW9uX2NlbGxfZWRpdG9yLU44VnQtQXkwLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9mcm9udGVuZC9zcmMvbW9kZWwvY29udHJpYnV0aW9uX21vbm9taWFsX2VkaXRvci50c3giLCIuLi8uLi8uLi9mcm9udGVuZC9zcmMvbW9kZWwvY29udHJpYnV0aW9uX2NlbGxfZWRpdG9yLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkZWVwRXF1YWwgfSBmcm9tIFwiZmFzdC1lcXVhbHNcIjtcbmltcG9ydCB7IEluZGV4LCBTaG93LCB1c2VDb250ZXh0IH0gZnJvbSBcInNvbGlkLWpzXCI7XG5pbXBvcnQgdHlwZSB7IEpTWCB9IGZyb20gXCJzb2xpZC1qc1wiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcblxuaW1wb3J0IHR5cGUgeyBUZXh0SW5wdXRPcHRpb25zIH0gZnJvbSBcImNhdGNvbGFiLXVpLWNvbXBvbmVudHNcIjtcbmltcG9ydCB0eXBlIHsgT2IgfSBmcm9tIFwiY2F0bG9nLXdhc21cIjtcbmltcG9ydCB7IExpdmVNb2RlbENvbnRleHQgfSBmcm9tIFwiLi9jb250ZXh0XCI7XG5pbXBvcnQgeyBleHRyYWN0T2JMaXN0IH0gZnJvbSBcIi4vb2Jfb3BlcmF0aW9uc1wiO1xuaW1wb3J0IHR5cGUgeyBPYklucHV0UHJvcHMgfSBmcm9tIFwiLi9vYmplY3RfaW5wdXRcIjtcbmltcG9ydCB7IE9iTGlzdEVkaXRvciB9IGZyb20gXCIuL29iamVjdF9saXN0X2VkaXRvclwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NvbnRyaWJ1dGlvbl9tb25vbWlhbF9lZGl0b3IubW9kdWxlLmNzc1wiO1xuXG50eXBlIENvbnRyaWJ1dGlvbk1vbm9taWFsRWRpdG9yUHJvcHMgPSBPYklucHV0UHJvcHMgJlxuICAgIFRleHRJbnB1dE9wdGlvbnMgJiB7XG4gICAgICAgIGluc2VydEtleT86IHN0cmluZztcbiAgICAgICAgc3RhcnREZWxpbWl0ZXI/OiBKU1guRWxlbWVudCB8IHN0cmluZztcbiAgICAgICAgZW5kRGVsaW1pdGVyPzogSlNYLkVsZW1lbnQgfCBzdHJpbmc7XG4gICAgICAgIHNlcGFyYXRvcj86IChpbmRleDogbnVtYmVyKSA9PiBKU1guRWxlbWVudCB8IHN0cmluZztcbiAgICB9O1xuXG4vKiogQSBydW4tbGVuZ3RoIGVuY29kZWQgZW50cnk6IHRoZSBvYmplY3QgYW5kIGhvdyBtYW55IHRpbWVzIGl0IHJlcGVhdHMuICovXG50eXBlIFJ1bkVudHJ5ID0ge1xuICAgIG9iOiBPYiB8IG51bGw7XG4gICAgY291bnQ6IG51bWJlcjtcbn07XG5cbi8qKiBDb3VudCBvY2N1cnJlbmNlcyBvZiBlYWNoIGRpc3RpbmN0IG9iamVjdCwgcHJlc2VydmluZyBmaXJzdC1hcHBlYXJhbmNlIG9yZGVyLiAqL1xuZnVuY3Rpb24gY291bnRPYmplY3RzKG9iamVjdHM6IEFycmF5PE9iIHwgbnVsbD4pOiBSdW5FbnRyeVtdIHtcbiAgICBjb25zdCBlbnRyaWVzOiBSdW5FbnRyeVtdID0gW107XG4gICAgZm9yIChjb25zdCBvYiBvZiBvYmplY3RzKSB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nID0gZW50cmllcy5maW5kKChlKSA9PiBkZWVwRXF1YWwoZS5vYiwgb2IpKTtcbiAgICAgICAgaWYgKGV4aXN0aW5nKSB7XG4gICAgICAgICAgICBleGlzdGluZy5jb3VudCsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZW50cmllcy5wdXNoKHsgb2IsIGNvdW50OiAxIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBlbnRyaWVzO1xufVxuXG4vKiogRWRpdHMgYSBsaXN0IG9mIG9iamVjdHMsIGRpc3BsYXlpbmcgcmVwZWF0ZWQgb2JqZWN0cyB3aXRoIHN1cGVyc2NyaXB0IGNvdW50cyB3aGVuIG5vdCBlZGl0aW5nLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIENvbnRyaWJ1dGlvbk1vbm9taWFsRWRpdG9yKHByb3BzOiBDb250cmlidXRpb25Nb25vbWlhbEVkaXRvclByb3BzKSB7XG4gICAgY29uc3QgbGl2ZU1vZGVsID0gdXNlQ29udGV4dChMaXZlTW9kZWxDb250ZXh0KTtcbiAgICBpbnZhcmlhbnQobGl2ZU1vZGVsLCBcIkxpdmUgbW9kZWwgc2hvdWxkIGJlIHByb3ZpZGVkIGFzIGNvbnRleHRcIik7XG5cbiAgICBjb25zdCBvYkxpc3QgPSAoKTogQXJyYXk8T2IgfCBudWxsPiA9PiBleHRyYWN0T2JMaXN0KHByb3BzLm9iKTtcblxuICAgIGNvbnN0IHJ1bnMgPSAoKSA9PiBjb3VudE9iamVjdHMob2JMaXN0KCkpO1xuXG4gICAgLyoqIFJlc29sdmUgdGhlIGxhYmVsIGZvciBhbiBvYmplY3QsIHJldHVybmluZyBudWxsIGlmIG5vdCBhdmFpbGFibGUuICovXG4gICAgY29uc3Qgb2JMYWJlbCA9IChvYjogT2IgfCBudWxsKTogc3RyaW5nIHwgbnVsbCA9PiB7XG4gICAgICAgIGlmICghb2IgfHwgb2IudGFnICE9PSBcIkJhc2ljXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBsaXZlTW9kZWwoKS5lbGFib3JhdGVkTW9kZWwoKT8ub2JHZW5lcmF0b3JMYWJlbChvYi5jb250ZW50KT8uam9pbihcIi5cIikgPz8gbnVsbDtcbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFNob3dcbiAgICAgICAgICAgIHdoZW49eyhwcm9wcy5mb2N1cz8uaGFzRm9jdXMoKSA/PyBwcm9wcy5pc0FjdGl2ZSkgfHwgb2JMaXN0KCkuc29tZSgob2IpID0+IG9iID09PSBudWxsKX1cbiAgICAgICAgICAgIGZhbGxiYWNrPXtcbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPXtgJHtzdHlsZXMubW9ub21pYWx9ICR7c3R5bGVzLmNvbGxhcHNlZH1gfVxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17KGV2dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuZm9jdXM/LnNldEZvY3VzZWQodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5oYXNGb2N1c2VkPy4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEluZGV4IGVhY2g9e3J1bnMoKX0gZmFsbGJhY2s9ezxzcGFuIGNsYXNzPXtzdHlsZXMuZW1wdHlNb25vbWlhbH0+Li4uPC9zcGFuPn0+XG4gICAgICAgICAgICAgICAgICAgICAgICB7KHJ1biwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge29iTGFiZWwocnVuKCkub2IpID8/IFwiLi4uXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTaG93IHdoZW49e3J1bigpLmNvdW50ID4gMX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3VwIGNsYXNzPXtzdHlsZXMuZXhwb25lbnR9PntydW4oKS5jb3VudH08L3N1cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TaG93PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2hvdyB3aGVuPXtpbmRleCA8IHJ1bnMoKS5sZW5ndGggLSAxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPXtzdHlsZXMucHJvZHVjdFNlcGFyYXRvcn0+Jm1pZGRvdDs8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2hvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICA8L0luZGV4PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICA+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPXtzdHlsZXMubW9ub21pYWx9PlxuICAgICAgICAgICAgICAgIDxPYkxpc3RFZGl0b3JcbiAgICAgICAgICAgICAgICAgICAgb2I9e3Byb3BzLm9ifVxuICAgICAgICAgICAgICAgICAgICBzZXRPYj17cHJvcHMuc2V0T2J9XG4gICAgICAgICAgICAgICAgICAgIG9iVHlwZT17cHJvcHMub2JUeXBlfVxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17cHJvcHMucGxhY2Vob2xkZXJ9XG4gICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17cHJvcHMuaXNJbnZhbGlkfVxuICAgICAgICAgICAgICAgICAgICBmb2N1cz17cHJvcHMuZm9jdXN9XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJhY2t3YXJkPXtwcm9wcy5kZWxldGVCYWNrd2FyZH1cbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlRm9yd2FyZD17cHJvcHMuZGVsZXRlRm9yd2FyZH1cbiAgICAgICAgICAgICAgICAgICAgZXhpdEJhY2t3YXJkPXtwcm9wcy5leGl0QmFja3dhcmR9XG4gICAgICAgICAgICAgICAgICAgIGV4aXRGb3J3YXJkPXtwcm9wcy5leGl0Rm9yd2FyZH1cbiAgICAgICAgICAgICAgICAgICAgZXhpdExlZnQ9e3Byb3BzLmV4aXRMZWZ0fVxuICAgICAgICAgICAgICAgICAgICBleGl0UmlnaHQ9e3Byb3BzLmV4aXRSaWdodH1cbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0S2V5PXtwcm9wcy5pbnNlcnRLZXkgPz8gXCIsXCJ9XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RGVsaW1pdGVyPXs8ZGl2IGNsYXNzPXtzdHlsZXMuZGVsaW1pdGVyfT57XCJbXCJ9PC9kaXY+fVxuICAgICAgICAgICAgICAgICAgICBlbmREZWxpbWl0ZXI9ezxkaXYgY2xhc3M9e3N0eWxlcy5kZWxpbWl0ZXJ9PntcIl1cIn08L2Rpdj59XG4gICAgICAgICAgICAgICAgICAgIHNlcGFyYXRvcj17KCkgPT4gPGRpdiBjbGFzcz17c3R5bGVzLnNlcGFyYXRvcn0+e1wiLFwifTwvZGl2Pn1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvU2hvdz5cbiAgICApO1xufVxuIiwiaW1wb3J0IHsgY3JlYXRlTWVtbywgdXNlQ29udGV4dCwgU3dpdGNoLCBNYXRjaCB9IGZyb20gXCJzb2xpZC1qc1wiO1xuaW1wb3J0IGludmFyaWFudCBmcm9tIFwidGlueS1pbnZhcmlhbnRcIjtcblxuaW1wb3J0IHsgTmFtZUlucHV0LCB1c2VDaGlsZEZvY3VzIH0gZnJvbSBcImNhdGNvbGFiLXVpLWNvbXBvbmVudHNcIjtcbmltcG9ydCB0eXBlIHsgT2IgfSBmcm9tIFwiY2F0bG9nLXdhc21cIjtcbmltcG9ydCB7IExpdmVNb2RlbENvbnRleHQgfSBmcm9tIFwiLi9jb250ZXh0XCI7XG5pbXBvcnQgeyBDb250cmlidXRpb25Nb25vbWlhbEVkaXRvciB9IGZyb20gXCIuL2NvbnRyaWJ1dGlvbl9tb25vbWlhbF9lZGl0b3JcIjtcbmltcG9ydCB0eXBlIHsgTW9ycGhpc21FZGl0b3JQcm9wcyB9IGZyb20gXCIuL2VkaXRvcnNcIjtcbmltcG9ydCB7IHVud3JhcEFwcCwgd3JhcEFwcCB9IGZyb20gXCIuL29iX29wZXJhdGlvbnNcIjtcbmltcG9ydCB7IG9iQ2xhc3NlcyB9IGZyb20gXCIuL29iamVjdF9jZWxsX2VkaXRvclwiO1xuaW1wb3J0IHsgT2JJbnB1dCB9IGZyb20gXCIuL29iamVjdF9pbnB1dFwiO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2NvbnRyaWJ1dGlvbl9jZWxsX2VkaXRvci5tb2R1bGUuY3NzXCI7XG5cbi8qKiBUaGUgc2lnbiBvZiBhIGNvbnRyaWJ1dGlvbjogcG9zaXRpdmUgb3IgbmVnYXRpdmUuICovXG5leHBvcnQgdHlwZSBDb250cmlidXRpb25TaWduID0gXCJwbHVzXCIgfCBcIm1pbnVzXCI7XG5cbi8qKiBFZGl0b3IgZm9yIGEgcG9zaXRpdmUgY29udHJpYnV0aW9uIGRlY2xhcmF0aW9uIGluIGEgbW9kZWwuICovXG5leHBvcnQgY29uc3QgUG9zaXRpdmVDb250cmlidXRpb25DZWxsRWRpdG9yID0gKHByb3BzOiBNb3JwaGlzbUVkaXRvclByb3BzKSA9PiAoXG4gICAgPENvbnRyaWJ1dGlvbkNlbGxFZGl0b3Igey4uLnByb3BzfSBzaWduPVwicGx1c1wiIC8+XG4pO1xuXG4vKiogRWRpdG9yIGZvciBhIG5lZ2F0aXZlIGNvbnRyaWJ1dGlvbiBkZWNsYXJhdGlvbiBpbiBhIG1vZGVsLiAqL1xuZXhwb3J0IGNvbnN0IE5lZ2F0aXZlQ29udHJpYnV0aW9uQ2VsbEVkaXRvciA9IChwcm9wczogTW9ycGhpc21FZGl0b3JQcm9wcykgPT4gKFxuICAgIDxDb250cmlidXRpb25DZWxsRWRpdG9yIHsuLi5wcm9wc30gc2lnbj1cIm1pbnVzXCIgLz5cbik7XG5cbi8qKiBFZGl0b3IgZm9yIGEgY29udHJpYnV0aW9uIGRlY2xhcmF0aW9uIGNlbGwgaW4gYSBtb2RlbC4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbnRyaWJ1dGlvbkNlbGxFZGl0b3IoXG4gICAgcHJvcHM6IE1vcnBoaXNtRWRpdG9yUHJvcHMgJiB7IHNpZ24/OiBDb250cmlidXRpb25TaWduIH0sXG4pIHtcbiAgICBjb25zdCBsaXZlTW9kZWwgPSB1c2VDb250ZXh0KExpdmVNb2RlbENvbnRleHQpO1xuICAgIGludmFyaWFudChsaXZlTW9kZWwsIFwiTGl2ZSBtb2RlbCBzaG91bGQgYmUgcHJvdmlkZWQgYXMgY29udGV4dFwiKTtcblxuICAgIC8vIG94bGludC1kaXNhYmxlLW5leHQtbGluZSBzb2xpZC9yZWFjdGl2aXR5IC0tIEZvY3VzIGhhbmRsZXMgYXJlIHN0YWJsZSBmb3IgYSBtb3VudGVkIGNlbGwuXG4gICAgY29uc3QgZm9jdXMgPSB1c2VDaGlsZEZvY3VzPE1vcnBoaXNtQ2VsbElucHV0Pihwcm9wcy5mb2N1cywgeyBkZWZhdWx0OiBcIm5hbWVcIiB9KTtcblxuICAgIGNvbnN0IG1vclR5cGVNZXRhID0gKCkgPT4gcHJvcHMudGhlb3J5Lm1vZGVsTW9yVHlwZU1ldGEocHJvcHMubW9ycGhpc20ubW9yVHlwZSk7XG5cbiAgICBjb25zdCBkb21UeXBlID0gY3JlYXRlTWVtbygoKSA9PiB7XG4gICAgICAgIGNvbnN0IHRoZW9yeSA9IHByb3BzLnRoZW9yeS50aGVvcnk7XG4gICAgICAgIGNvbnN0IG9wID0gbW9yVHlwZU1ldGEoKT8uZG9tYWluPy5hcHBseTtcbiAgICAgICAgaWYgKG9wID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGVvcnkuc3JjKHByb3BzLm1vcnBoaXNtLm1vclR5cGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gQ29kb21haW4gdHlwZSBmb3Igb3BlcmF0aW9uIHNob3VsZCBlcXVhbCBzb3VyY2UgdHlwZSBhYm92ZS5cbiAgICAgICAgICAgIHJldHVybiB0aGVvcnkuZG9tKG9wKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgY29kVHlwZSA9IGNyZWF0ZU1lbW8oKCkgPT4ge1xuICAgICAgICBjb25zdCB0aGVvcnkgPSBwcm9wcy50aGVvcnkudGhlb3J5O1xuICAgICAgICBjb25zdCBvcCA9IG1vclR5cGVNZXRhKCk/LmNvZG9tYWluPy5hcHBseTtcbiAgICAgICAgaWYgKG9wID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGVvcnkudGd0KHByb3BzLm1vcnBoaXNtLm1vclR5cGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gQ29kb21haW4gdHlwZSBmb3Igb3BlcmF0aW9uIHNob3VsZCBlcXVhbCB0YXJnZXQgdHlwZSBhYm92ZS5cbiAgICAgICAgICAgIHJldHVybiB0aGVvcnkuZG9tKG9wKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3QgZG9tQ2xhc3NlcyA9ICgpID0+IFtcIm1vcnBoaXNtLWRlY2wtZG9tXCIsIC4uLm9iQ2xhc3Nlcyhwcm9wcy50aGVvcnksIGRvbVR5cGUoKSldO1xuICAgIGNvbnN0IGNvZENsYXNzZXMgPSAoKSA9PiBbXCJtb3JwaGlzbS1kZWNsLWNvZFwiLCAuLi5vYkNsYXNzZXMocHJvcHMudGhlb3J5LCBjb2RUeXBlKCkpXTtcblxuICAgIGNvbnN0IG5hbWVDbGFzc2VzID0gKCkgPT4gW1wibW9ycGhpc20tZGVjbC1uYW1lXCIsIC4uLihtb3JUeXBlTWV0YSgpPy50ZXh0Q2xhc3NlcyA/PyBbXSldO1xuXG4gICAgY29uc3QgZXJyb3JzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB2YWxpZGF0ZWQgPSBsaXZlTW9kZWwoKS52YWxpZGF0ZWRNb2RlbCgpO1xuICAgICAgICBpZiAodmFsaWRhdGVkPy50YWcgIT09IFwiSW52YWxpZFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlZC5lcnJvcnMuZmlsdGVyKChlcnIpID0+IGVyci5jb250ZW50ID09PSBwcm9wcy5tb3JwaGlzbS5pZCk7XG4gICAgfTtcblxuICAgIGNvbnN0IGRvbUFwcGx5T3AgPSAoKSA9PiBtb3JUeXBlTWV0YSgpPy5kb21haW4/LmFwcGx5O1xuXG4gICAgY29uc3QgZG9tT2IgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG9wID0gZG9tQXBwbHlPcCgpO1xuICAgICAgICByZXR1cm4gb3AgPyB1bndyYXBBcHAocHJvcHMubW9ycGhpc20uZG9tLCBvcCkgOiBwcm9wcy5tb3JwaGlzbS5kb207XG4gICAgfTtcblxuICAgIGNvbnN0IHNldERvbU9iID0gKG9iOiBPYiB8IG51bGwpID0+IHtcbiAgICAgICAgY29uc3Qgb3AgPSBkb21BcHBseU9wKCk7XG4gICAgICAgIGNvbnN0IHdyYXBwZWQgPSBvYiAmJiBvcCA/IHdyYXBBcHAob2IsIG9wKSA6IG9iO1xuICAgICAgICBwcm9wcy5tb2RpZnlNb3JwaGlzbSgobW9yKSA9PiB7XG4gICAgICAgICAgICBtb3IuZG9tID0gd3JhcHBlZDtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3M9e2Bmb3JtYWwtanVkZ21lbnQgJHtzdHlsZXNbXCJtb3JwaGlzbS1kZWNsXCJdfWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz17bmFtZUNsYXNzZXMoKS5qb2luKFwiIFwiKX0+XG4gICAgICAgICAgICAgICAgPE5hbWVJbnB1dFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj17bW9yVHlwZU1ldGEoKT8ucHJlZmVyVW5uYW1lZCA/IHVuZGVmaW5lZCA6IFwiVW5uYW1lZFwifVxuICAgICAgICAgICAgICAgICAgICBuYW1lPXtwcm9wcy5tb3JwaGlzbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICBzZXROYW1lPXsobmFtZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMubW9kaWZ5TW9ycGhpc20oKG1vcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vci5uYW1lID0gbmFtZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICBmb2N1cz17Zm9jdXMuY2hpbGRGb2N1cyhcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJhY2t3YXJkPXtwcm9wcy5hY3Rpb25zLmRlbGV0ZUJhY2t3YXJkfVxuICAgICAgICAgICAgICAgICAgICBkZWxldGVGb3J3YXJkPXtwcm9wcy5hY3Rpb25zLmRlbGV0ZUZvcndhcmR9XG4gICAgICAgICAgICAgICAgICAgIGV4aXRCYWNrd2FyZD17cHJvcHMuYWN0aW9ucy5hY3RpdmF0ZUFib3ZlfVxuICAgICAgICAgICAgICAgICAgICBleGl0Rm9yd2FyZD17KCkgPT4gZm9jdXMuc2V0QWN0aXZlQ2hpbGQoXCJjb2RcIil9XG4gICAgICAgICAgICAgICAgICAgIGV4aXRVcD17cHJvcHMuYWN0aW9ucy5hY3RpdmF0ZUFib3ZlfVxuICAgICAgICAgICAgICAgICAgICBleGl0RG93bj17cHJvcHMuYWN0aW9ucy5hY3RpdmF0ZUJlbG93fVxuICAgICAgICAgICAgICAgICAgICBleGl0TGVmdD17KCkgPT4gZm9jdXMuc2V0QWN0aXZlQ2hpbGQoXCJjb2RcIil9XG4gICAgICAgICAgICAgICAgICAgIGV4aXRSaWdodD17KCkgPT4gZm9jdXMuc2V0QWN0aXZlQ2hpbGQoXCJkb21cIil9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz17c3R5bGVzW1wibW9ycGhpc20tZGVjbC1uYW1lLXNlcGFyYXRvclwiXX0+OjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz17c3R5bGVzW1wibW9ycGhpc20tZGVjbC1jb2QtcHJlZml4XCJdfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPXtzdHlsZXNbXCJmcmFjdGlvblwiXX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+ZDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPXtzdHlsZXNbXCJmcmFjdGlvbi1kZW5vbWluYXRvclwiXX0+ZHQ8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz17Y29kQ2xhc3NlcygpLmpvaW4oXCIgXCIpfT5cbiAgICAgICAgICAgICAgICA8T2JJbnB1dFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIi4uLlwiXG4gICAgICAgICAgICAgICAgICAgIG9iPXtwcm9wcy5tb3JwaGlzbS5jb2R9XG4gICAgICAgICAgICAgICAgICAgIHNldE9iPXsob2IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm1vZGlmeU1vcnBoaXNtKChtb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3IuY29kID0gb2I7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgb2JUeXBlPXtjb2RUeXBlKCl9XG4gICAgICAgICAgICAgICAgICAgIGFwcGx5T3A9e21vclR5cGVNZXRhKCk/LmNvZG9tYWluPy5hcHBseX1cbiAgICAgICAgICAgICAgICAgICAgaXNJbnZhbGlkPXtlcnJvcnMoKS5zb21lKChlcnIpID0+IGVyci50YWcgPT09IFwiQ29kXCIgfHwgZXJyLnRhZyA9PT0gXCJDb2RUeXBlXCIpfVxuICAgICAgICAgICAgICAgICAgICBmb2N1cz17Zm9jdXMuY2hpbGRGb2N1cyhcImNvZFwiKX1cbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlRm9yd2FyZD17KCkgPT4gZm9jdXMuc2V0QWN0aXZlQ2hpbGQoXCJuYW1lXCIpfVxuICAgICAgICAgICAgICAgICAgICBleGl0QmFja3dhcmQ9e3Byb3BzLmFjdGlvbnMuYWN0aXZhdGVBYm92ZX1cbiAgICAgICAgICAgICAgICAgICAgZXhpdEZvcndhcmQ9eygpID0+IGZvY3VzLnNldEFjdGl2ZUNoaWxkKFwiZG9tXCIpfVxuICAgICAgICAgICAgICAgICAgICBleGl0TGVmdD17KCkgPT4gZm9jdXMuc2V0QWN0aXZlQ2hpbGQoXCJuYW1lXCIpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9e3N0eWxlc1tcIm1vcnBoaXNtLWRlY2wtYXJyb3ctcmVwbGFjZW1lbnRcIl19PlxuICAgICAgICAgICAgICAgIDxTd2l0Y2ggZmFsbGJhY2s9XCIrXCI+XG4gICAgICAgICAgICAgICAgICAgIDxNYXRjaCB3aGVuPXtwcm9wcy5zaWduID09PSBcInBsdXNcIn0+e1wiK1wifTwvTWF0Y2g+XG4gICAgICAgICAgICAgICAgICAgIDxNYXRjaCB3aGVuPXtwcm9wcy5zaWduID09PSBcIm1pbnVzXCJ9PntcIi1cIn08L01hdGNoPlxuICAgICAgICAgICAgICAgIDwvU3dpdGNoPlxuICAgICAgICAgICAgICAgIHtcIj1cIn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz17c3R5bGVzW1wibW9ycGhpc20tZGVjbC1kb20tcHJlZml4XCJdfT7wnZyGJm5ic3A7Jm1pZGRvdDs8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9e2RvbUNsYXNzZXMoKS5qb2luKFwiIFwiKX0+XG4gICAgICAgICAgICAgICAgPENvbnRyaWJ1dGlvbk1vbm9taWFsRWRpdG9yXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiLi4uXCJcbiAgICAgICAgICAgICAgICAgICAgb2I9e2RvbU9iKCl9XG4gICAgICAgICAgICAgICAgICAgIHNldE9iPXtzZXREb21PYn1cbiAgICAgICAgICAgICAgICAgICAgb2JUeXBlPXtkb21UeXBlKCl9XG4gICAgICAgICAgICAgICAgICAgIGlzSW52YWxpZD17ZXJyb3JzKCkuc29tZSgoZXJyKSA9PiBlcnIudGFnID09PSBcIkRvbVwiIHx8IGVyci50YWcgPT09IFwiRG9tVHlwZVwiKX1cbiAgICAgICAgICAgICAgICAgICAgZm9jdXM9e2ZvY3VzLmNoaWxkRm9jdXMoXCJkb21cIil9XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUJhY2t3YXJkPXsoKSA9PiBmb2N1cy5zZXRBY3RpdmVDaGlsZChcIm5hbWVcIil9XG4gICAgICAgICAgICAgICAgICAgIGV4aXRCYWNrd2FyZD17KCkgPT4gZm9jdXMuc2V0QWN0aXZlQ2hpbGQoXCJuYW1lXCIpfVxuICAgICAgICAgICAgICAgICAgICBleGl0Rm9yd2FyZD17cHJvcHMuYWN0aW9ucy5hY3RpdmF0ZUJlbG93fVxuICAgICAgICAgICAgICAgICAgICBleGl0UmlnaHQ9e3Byb3BzLmFjdGlvbnMuYWN0aXZhdGVCZWxvd31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbnR5cGUgTW9ycGhpc21DZWxsSW5wdXQgPSBcIm5hbWVcIiB8IFwiZG9tXCIgfCBcImNvZFwiO1xuIl0sIm5hbWVzIjpbImNvdW50T2JqZWN0cyIsIm9iamVjdHMiLCJlbnRyaWVzIiwib2IiLCJleGlzdGluZyIsImZpbmQiLCJlIiwiZGVlcEVxdWFsIiwiY291bnQiLCJwdXNoIiwiQ29udHJpYnV0aW9uTW9ub21pYWxFZGl0b3IiLCJwcm9wcyIsImxpdmVNb2RlbCIsInVzZUNvbnRleHQiLCJMaXZlTW9kZWxDb250ZXh0IiwiaW52YXJpYW50Iiwib2JMaXN0IiwiZXh0cmFjdE9iTGlzdCIsInJ1bnMiLCJvYkxhYmVsIiwidGFnIiwiZWxhYm9yYXRlZE1vZGVsIiwib2JHZW5lcmF0b3JMYWJlbCIsImNvbnRlbnQiLCJqb2luIiwiXyRjcmVhdGVDb21wb25lbnQiLCJTaG93Iiwid2hlbiIsImZvY3VzIiwiaGFzRm9jdXMiLCJpc0FjdGl2ZSIsInNvbWUiLCJmYWxsYmFjayIsIl9lbCQyIiwiX3RtcGwkIiwiJCRtb3VzZWRvd24iLCJldnQiLCJzZXRGb2N1c2VkIiwiaGFzRm9jdXNlZCIsInByZXZlbnREZWZhdWx0IiwiXyRpbnNlcnQiLCJJbmRleCIsImVhY2giLCJfZWwkMyIsIl90bXBsJDIiLCJfJGVmZmVjdCIsIl8kY2xhc3NOYW1lIiwic3R5bGVzIiwiZW1wdHlNb25vbWlhbCIsImNoaWxkcmVuIiwicnVuIiwiaW5kZXgiLCJfZWwkNCIsIl90bXBsJDUiLCJfZWwkNSIsIl90bXBsJDMiLCJleHBvbmVudCIsImxlbmd0aCIsIl9lbCQ2IiwiX3RtcGwkNCIsInByb2R1Y3RTZXBhcmF0b3IiLCJtb25vbWlhbCIsImNvbGxhcHNlZCIsIl9lbCQiLCJPYkxpc3RFZGl0b3IiLCJzZXRPYiIsIm9iVHlwZSIsInBsYWNlaG9sZGVyIiwiaXNJbnZhbGlkIiwiZGVsZXRlQmFja3dhcmQiLCJkZWxldGVGb3J3YXJkIiwiZXhpdEJhY2t3YXJkIiwiZXhpdEZvcndhcmQiLCJleGl0TGVmdCIsImV4aXRSaWdodCIsImluc2VydEtleSIsInN0YXJ0RGVsaW1pdGVyIiwiX2VsJDciLCJfdG1wbCQ2IiwiZGVsaW1pdGVyIiwiZW5kRGVsaW1pdGVyIiwiX2VsJDgiLCJfdG1wbCQ3Iiwic2VwYXJhdG9yIiwiX2VsJDkiLCJfdG1wbCQ4IiwiXyRkZWxlZ2F0ZUV2ZW50cyIsIlBvc2l0aXZlQ29udHJpYnV0aW9uQ2VsbEVkaXRvciIsIkNvbnRyaWJ1dGlvbkNlbGxFZGl0b3IiLCJfJG1lcmdlUHJvcHMiLCJzaWduIiwiTmVnYXRpdmVDb250cmlidXRpb25DZWxsRWRpdG9yIiwidXNlQ2hpbGRGb2N1cyIsImRlZmF1bHQiLCJtb3JUeXBlTWV0YSIsInRoZW9yeSIsIm1vZGVsTW9yVHlwZU1ldGEiLCJtb3JwaGlzbSIsIm1vclR5cGUiLCJkb21UeXBlIiwiY3JlYXRlTWVtbyIsIm9wIiwiZG9tYWluIiwiYXBwbHkiLCJ1bmRlZmluZWQiLCJzcmMiLCJkb20iLCJjb2RUeXBlIiwiY29kb21haW4iLCJ0Z3QiLCJkb21DbGFzc2VzIiwib2JDbGFzc2VzIiwiY29kQ2xhc3NlcyIsIm5hbWVDbGFzc2VzIiwidGV4dENsYXNzZXMiLCJlcnJvcnMiLCJ2YWxpZGF0ZWQiLCJ2YWxpZGF0ZWRNb2RlbCIsImZpbHRlciIsImVyciIsImlkIiwiZG9tQXBwbHlPcCIsImRvbU9iIiwidW53cmFwQXBwIiwic2V0RG9tT2IiLCJ3cmFwcGVkIiwid3JhcEFwcCIsIm1vZGlmeU1vcnBoaXNtIiwibW9yIiwiZmlyc3RDaGlsZCIsIm5leHRTaWJsaW5nIiwiX2VsJDEwIiwiX2VsJDExIiwiX2VsJDEyIiwiTmFtZUlucHV0IiwicHJlZmVyVW5uYW1lZCIsIm5hbWUiLCJzZXROYW1lIiwiY2hpbGRGb2N1cyIsImFjdGlvbnMiLCJhY3RpdmF0ZUFib3ZlIiwic2V0QWN0aXZlQ2hpbGQiLCJleGl0VXAiLCJleGl0RG93biIsImFjdGl2YXRlQmVsb3ciLCJPYklucHV0IiwiY29kIiwiYXBwbHlPcCIsIlN3aXRjaCIsIk1hdGNoIiwiX3AkIiwiX3YkIiwiX3YkMiIsIl92JDMiLCJfdiQ0IiwiX3YkNSIsIl92JDYiLCJfdiQ3IiwiX3YkOCIsIl92JDkiLCJfdiQxMCIsInQiLCJhIiwibyIsImkiLCJuIiwicyIsImgiLCJyIiwiZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkJBLFNBQVNBLGFBQWFDLE9BQXVDLEVBQUE7QUFDekQsRUFBQSxNQUFNQyxVQUFzQixFQUFFO0FBQzlCLEVBQUEsS0FBQSxNQUFXQyxNQUFNRixPQUFTLEVBQUE7QUFDdEIsSUFBTUcsTUFBQUEsUUFBQUEsR0FBV0YsUUFBUUcsSUFBTUMsQ0FBQUEsQ0FBQUEsQ0FBQUEsS0FBTUMsVUFBVUQsQ0FBRUgsQ0FBQUEsRUFBQUEsRUFBSUEsRUFBRSxDQUFDLENBQUE7QUFDeEQsSUFBQSxJQUFJQyxRQUFVLEVBQUE7QUFDVkEsTUFBU0ksUUFBQUEsQ0FBQUEsS0FBQUEsRUFBQUE7QUFBQUEsS0FDTixNQUFBO0FBQ0hOLE1BQUFBLE9BQUFBLENBQVFPLElBQUssQ0FBQTtBQUFBLFFBQUVOLEVBQUFBO0FBQUFBLFFBQUlLLEtBQU8sRUFBQTtBQUFBLE9BQUcsQ0FBQTtBQUFBO0FBQ2pDO0FBRUosRUFBT04sT0FBQUEsT0FBQUE7QUFDWDtBQUdPLFNBQVNRLDJCQUEyQkMsS0FBd0MsRUFBQTtBQUMvRSxFQUFNQyxNQUFBQSxTQUFBQSxHQUFZQyxXQUFXQyxnQkFBZ0IsQ0FBQTtBQUM3Q0MsRUFBQUEsU0FBQUEsQ0FBVUgsU0FBcUQsQ0FBQTtBQUUvRCxFQUFBLE1BQU1JLE1BQVNBLEdBQUFBLE1BQXdCQyxhQUFjTixDQUFBQSxLQUFBQSxDQUFNUixFQUFFLENBQUE7QUFFN0QsRUFBQSxNQUFNZSxJQUFPQSxHQUFBQSxNQUFNbEIsWUFBYWdCLENBQUFBLE1BQUFBLEVBQVEsQ0FBQTtBQUd4QyxF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
