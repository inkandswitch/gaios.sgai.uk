import { template, insert, createComponent } from 'solid-js/web';
import { createMemo, Switch, Match } from 'solid-js';
import { t as collectProduct, o as invariant, F as FixedTableEditor, p as createNumericalColumn, E as ExpandableTable } from './analysis_tool-CbAnz5ie.js';
import { B as BlockTitle } from './block_title-CkcLyKoo.js';
import { F as Foldable } from './foldable-Cyvk3uUr.js';
import { K as KatexDisplay } from './katex_display-BzHbZBTy.js';
import './model-hspTLkzk.js';
import '@automerge/automerge-repo';
import 'solid-js/store';
import '@automerge/automerge-repo-network-websocket';
import '@automerge/automerge-repo-storage-indexeddb';
import { m as morLabelOrDefault } from './label-GvQ4fTcU.js';
import { O as ODEResultPlot } from './pde_plot-Ddd_bVHz.js';
import { M as MassActionConfigForm } from './mass_action_config_form-NgNZI16X.js';
import { a as createModelODEPlotWithEquations } from './model_ode_plot-LLQrAki8.js';
/* empty css                    */
import '@automerge/automerge/slim';
import '@automerge/automerge';
import './index-B65VBQSl.js';
import '@inkandswitch/patchwork-providers';
import './alert-LmUGnZKX.js';

var _tmpl$ = /* @__PURE__ */ template(`<div class=parameters>`), _tmpl$2 = /* @__PURE__ */ template(`<div class=simulation>`);
function MassAction(props) {
  const elaboratedModel = () => props.liveModel.elaboratedModel();
  const beforeColumn = (args) => {
    const baseline = props.baselineContent;
    if (!baseline) {
      return [];
    }
    const before = (row) => args.baselineData(baseline, row) ?? args.default ?? 0;
    const current = (row) => args.data(row) ?? args.default ?? 0;
    if (!args.rows.some((row) => before(row) !== current(row))) {
      return [];
    }
    return [{
      contentType: "string",
      name: "Before",
      content: (row) => before(row) === current(row) ? "" : before(row).toString()
    }];
  };
  const obGenerators = createMemo(() => {
    const model = elaboratedModel();
    if (!model) {
      return [];
    }
    return props.stateType ? model.obGeneratorsWithType(props.stateType) : model.obGenerators();
  });
  const obSchema = () => [{
    contentType: "string",
    header: true,
    content: (id) => elaboratedModel()?.obGeneratorLabel(id)?.join(".") ?? ""
  }, ...beforeColumn({
    rows: obGenerators(),
    data: (id) => props.content.initialValues[id],
    baselineData: (baseline, id) => baseline.initialValues[id]
  }), createNumericalColumn({
    name: "Initial value",
    data: (id) => props.content.initialValues[id],
    validate: (_, data) => data >= 0,
    setData: (id, data) => props.changeContent((content) => {
      content.initialValues[id] = data;
    })
  })];
  const morGenerators = createMemo(() => {
    const model = elaboratedModel();
    if (!model) {
      return [];
    }
    return props.transitionType ? model.morGeneratorsWithType(props.transitionType) : model.morGenerators();
  });
  const morGeneratorsInterfaces = createMemo(() => {
    const model = elaboratedModel();
    if (!model) {
      return /* @__PURE__ */ new Map();
    }
    const transitionInterface = /* @__PURE__ */ new Map();
    for (const mg of morGenerators()) {
      const mor = model.morPresentation(mg);
      if (!mor) {
        continue;
      }
      const inputs = collectProduct(mor.dom).map((ob) => {
        invariant(ob.tag === "Basic");
        return ob.content;
      });
      const outputs = collectProduct(mor.cod).map((ob) => {
        invariant(ob.tag === "Basic");
        return ob.content;
      });
      transitionInterface.set(mg, {
        inputs,
        outputs
      });
    }
    return transitionInterface;
  });
  const morGeneratorsInputs = createMemo(() => {
    const morphismInputPairs = [];
    for (const [mor, int] of morGeneratorsInterfaces().entries()) {
      for (const inp of int.inputs) {
        morphismInputPairs.push([mor, inp]);
      }
    }
    return morphismInputPairs;
  });
  const morGeneratorsOutputs = createMemo(() => {
    const morphismOutputPairs = [];
    for (const [mor, int] of morGeneratorsInterfaces().entries()) {
      for (const outp of int.outputs) {
        morphismOutputPairs.push([mor, outp]);
      }
    }
    return morphismOutputPairs;
  });
  const morSchema = () => [{
    contentType: "string",
    header: true,
    content: (mor) => elaboratedModel()?.morGeneratorLabel(mor)?.join(".") ?? ""
  }, ...beforeColumn({
    rows: morGenerators(),
    data: (mor) => props.content.rates[mor],
    baselineData: (baseline, mor) => baseline.rates[mor],
    default: 1
  }), createNumericalColumn({
    name: "Rate (𝑟)",
    data: (mor) => props.content.rates[mor],
    default: 1,
    validate: (_, data) => data >= 0,
    setData: (mor, data) => props.changeContent((content) => {
      content.rates[mor] = data;
    })
  })];
  const morInputSchema = () => [{
    contentType: "string",
    header: true,
    content: (mor) => elaboratedModel()?.morGeneratorLabel(mor)?.join(".") ?? ""
  }, ...beforeColumn({
    rows: morGenerators(),
    data: (mor) => props.content.transitionConsumptionRates[mor],
    baselineData: (baseline, mor) => baseline.transitionConsumptionRates[mor],
    default: 1
  }), createNumericalColumn({
    name: "Consumption (𝜅)",
    data: (mor) => props.content.transitionConsumptionRates[mor],
    default: 1,
    validate: (_, data) => data >= 0,
    setData: (mor, data) => props.changeContent((content) => {
      content.transitionConsumptionRates[mor] = data;
    })
  })];
  const morOutputSchema = () => [{
    contentType: "string",
    header: true,
    content: (mor) => elaboratedModel()?.morGeneratorLabel(mor)?.join(".") ?? ""
  }, ...beforeColumn({
    rows: morGenerators(),
    data: (mor) => props.content.transitionProductionRates[mor],
    baselineData: (baseline, mor) => baseline.transitionProductionRates[mor],
    default: 1
  }), createNumericalColumn({
    name: "Production (𝜌)",
    data: (mor) => props.content.transitionProductionRates[mor],
    default: 1,
    validate: (_, data) => data >= 0,
    setData: (mor, data) => props.changeContent((content) => {
      content.transitionProductionRates[mor] = data;
    })
  })];
  const morInputsSchema = () => [{
    contentType: "string",
    header: true,
    content: ([mor, input]) => (elaboratedModel()?.obGeneratorLabel(input)?.join(".") ?? "") + " → [" + (morLabelOrDefault(mor, elaboratedModel()) ?? "") + "]"
  }, ...beforeColumn({
    rows: morGeneratorsInputs(),
    data: ([mor, input]) => props.content.placeConsumptionRates[mor]?.[input],
    baselineData: (baseline, [mor, input]) => baseline.placeConsumptionRates[mor]?.[input],
    default: 1
  }), createNumericalColumn({
    name: "Consumption (𝜅)",
    data: ([mor, input]) => props.content.placeConsumptionRates[mor]?.[input],
    default: 1,
    validate: (_, data) => data >= 0,
    setData: ([mor, input], data) => props.changeContent((content) => {
      if (content.placeConsumptionRates[mor]) {
        content.placeConsumptionRates[mor][input] = data;
      } else {
        content.placeConsumptionRates[mor] = {
          [input]: data
        };
      }
    })
  })];
  const morOutputsSchema = () => [{
    contentType: "string",
    header: true,
    content: ([mor, output]) => "[" + (morLabelOrDefault(mor, elaboratedModel()) ?? "") + "] → " + (elaboratedModel()?.obGeneratorLabel(output)?.join(".") ?? "")
  }, ...beforeColumn({
    rows: morGeneratorsOutputs(),
    data: ([mor, output]) => props.content.placeProductionRates[mor]?.[output],
    baselineData: (baseline, [mor, output]) => baseline.placeProductionRates[mor]?.[output],
    default: 1
  }), createNumericalColumn({
    name: "Production (𝜌)",
    data: ([mor, output]) => props.content.placeProductionRates[mor]?.[output],
    default: 1,
    validate: (_, data) => data >= 0,
    setData: ([mor, output], data) => props.changeContent((content) => {
      if (content.placeProductionRates[mor]) {
        content.placeProductionRates[mor][output] = data;
      } else {
        content.placeProductionRates[mor] = {
          [output]: data
        };
      }
    })
  })];
  const ParameterTables = () => createComponent(Switch, {
    get children() {
      return [createComponent(Match, {
        get when() {
          return props.content.massConservationType.type === "Balanced";
        },
        get children() {
          return createComponent(FixedTableEditor, {
            get rows() {
              return morGenerators();
            },
            get schema() {
              return morSchema();
            }
          });
        }
      }), createComponent(Match, {
        get when() {
          return props.content.massConservationType.type === "Unbalanced" && props.content.massConservationType.granularity === "PerTransition";
        },
        get children() {
          return [createComponent(FixedTableEditor, {
            get rows() {
              return morGenerators();
            },
            get schema() {
              return morInputSchema();
            }
          }), createComponent(FixedTableEditor, {
            get rows() {
              return morGenerators();
            },
            get schema() {
              return morOutputSchema();
            }
          })];
        }
      }), createComponent(Match, {
        get when() {
          return props.content.massConservationType.type === "Unbalanced" && props.content.massConservationType.granularity === "PerPlace";
        },
        get children() {
          return [createComponent(FixedTableEditor, {
            get rows() {
              return morGeneratorsInputs();
            },
            get schema() {
              return morInputsSchema();
            }
          }), createComponent(FixedTableEditor, {
            get rows() {
              return morGeneratorsOutputs();
            },
            get schema() {
              return morOutputsSchema();
            }
          })];
        }
      })];
    }
  });
  const toplevelSchema = () => [...beforeColumn({
    rows: [null],
    data: () => props.content.duration,
    baselineData: (baseline) => baseline.duration
  }), createNumericalColumn({
    name: "Duration",
    data: (_) => props.content.duration,
    validate: (_, data) => data >= 0,
    setData: (_, data) => props.changeContent((content) => {
      content.duration = data;
    })
  })];
  const result = createModelODEPlotWithEquations(() => props.liveModel.validatedModel(), (model) => props.simulate(model, props.content));
  const plotResult = () => result()?.plotData;
  const latexEquations = () => result()?.latexEquations ?? [];
  return (() => {
    var _el$ = _tmpl$2();
    insert(_el$, createComponent(BlockTitle, {
      get title() {
        return props.title;
      },
      get settingsPane() {
        return createComponent(MassActionConfigForm, {
          get config() {
            return props.content;
          },
          get changeConfig() {
            return props.changeContent;
          },
          get enableGranularity() {
            return props.ratesHaveGranularity;
          }
        });
      }
    }), null);
    insert(_el$, createComponent(Foldable, {
      title: "Parameters",
      defaultExpanded: true,
      get children() {
        var _el$2 = _tmpl$();
        insert(_el$2, createComponent(FixedTableEditor, {
          get rows() {
            return obGenerators();
          },
          get schema() {
            return obSchema();
          }
        }), null);
        insert(_el$2, createComponent(ParameterTables, {}), null);
        insert(_el$2, createComponent(FixedTableEditor, {
          rows: [null],
          get schema() {
            return toplevelSchema();
          }
        }), null);
        return _el$2;
      }
    }), null);
    insert(_el$, createComponent(Foldable, {
      title: "Equations",
      get children() {
        return createComponent(ExpandableTable, {
          threshold: 20,
          get rows() {
            return latexEquations();
          },
          columns: [{
            cell: (row) => createComponent(KatexDisplay, {
              get math() {
                return row.lhs;
              }
            })
          }, {
            cell: () => createComponent(KatexDisplay, {
              math: "="
            })
          }, {
            cell: (row) => createComponent(KatexDisplay, {
              get math() {
                return row.rhs;
              }
            })
          }]
        });
      }
    }), null);
    insert(_el$, createComponent(Foldable, {
      title: "Simulation",
      defaultExpanded: true,
      get children() {
        return createComponent(ODEResultPlot, {
          get result() {
            return plotResult();
          }
        });
      }
    }), null);
    return _el$;
  })();
}

export { MassAction as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzc19hY3Rpb24tWjJBNHRuTl8uanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zyb250ZW5kL3NyYy9zdGRsaWIvYW5hbHlzZXMvbWFzc19hY3Rpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZU1lbW8sIE1hdGNoLCBTd2l0Y2ggfSBmcm9tIFwic29saWQtanNcIjtcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCI7XG5cbmltcG9ydCB7XG4gICAgQmxvY2tUaXRsZSxcbiAgICB0eXBlIENvbHVtblNjaGVtYSxcbiAgICBjcmVhdGVOdW1lcmljYWxDb2x1bW4sXG4gICAgRXhwYW5kYWJsZVRhYmxlLFxuICAgIEZpeGVkVGFibGVFZGl0b3IsXG4gICAgRm9sZGFibGUsXG4gICAgS2F0ZXhEaXNwbGF5LFxufSBmcm9tIFwiY2F0Y29sYWItdWktY29tcG9uZW50c1wiO1xuaW1wb3J0IHtcbiAgICBjb2xsZWN0UHJvZHVjdCxcbiAgICB0eXBlIE1hc3NBY3Rpb25Qcm9ibGVtRGF0YSxcbiAgICB0eXBlIE1vclR5cGUsXG4gICAgdHlwZSBPYlR5cGUsXG4gICAgdHlwZSBRdWFsaWZpZWROYW1lLFxufSBmcm9tIFwiY2F0bG9nLXdhc21cIjtcbmltcG9ydCB0eXBlIHsgTW9kZWxBbmFseXNpc1Byb3BzIH0gZnJvbSBcIi4uLy4uL2FuYWx5c2lzXCI7XG5pbXBvcnQgeyBtb3JMYWJlbE9yRGVmYXVsdCB9IGZyb20gXCIuLi8uLi9tb2RlbFwiO1xuaW1wb3J0IHsgT0RFUmVzdWx0UGxvdCB9IGZyb20gXCIuLi8uLi92aXN1YWxpemF0aW9uXCI7XG5pbXBvcnQgeyBNYXNzQWN0aW9uQ29uZmlnRm9ybSB9IGZyb20gXCIuL21hc3NfYWN0aW9uX2NvbmZpZ19mb3JtXCI7XG5pbXBvcnQgeyBjcmVhdGVNb2RlbE9ERVBsb3RXaXRoRXF1YXRpb25zIH0gZnJvbSBcIi4vbW9kZWxfb2RlX3Bsb3RcIjtcbmltcG9ydCB0eXBlIHsgTWFzc0FjdGlvblNpbXVsYXRvciB9IGZyb20gXCIuL3NpbXVsYXRvcl90eXBlc1wiO1xuXG5pbXBvcnQgXCIuL3NpbXVsYXRpb24uY3NzXCI7XG5cbi8qKiBBbmFseXplIGEgbW9kZWwgdXNpbmcgbWFzcy1hY3Rpb24gZHluYW1pY3MuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXNzQWN0aW9uKFxuICAgIHByb3BzOiBNb2RlbEFuYWx5c2lzUHJvcHM8TWFzc0FjdGlvblByb2JsZW1EYXRhPiAmIHtcbiAgICAgICAgcmF0ZXNIYXZlR3JhbnVsYXJpdHk6IGJvb2xlYW47XG4gICAgICAgIHNpbXVsYXRlOiBNYXNzQWN0aW9uU2ltdWxhdG9yO1xuICAgICAgICBzdGF0ZVR5cGU/OiBPYlR5cGU7XG4gICAgICAgIHRpdGxlPzogc3RyaW5nO1xuICAgICAgICB0cmFuc2l0aW9uVHlwZT86IE1vclR5cGU7XG4gICAgfSxcbikge1xuICAgIGNvbnN0IGVsYWJvcmF0ZWRNb2RlbCA9ICgpID0+IHByb3BzLmxpdmVNb2RlbC5lbGFib3JhdGVkTW9kZWwoKTtcblxuICAgIC8qKiBSZWFkLW9ubHkgXCJCZWZvcmVcIiBjb2x1bW4gc2hvd2luZyBiYXNlbGluZSB2YWx1ZXMgaW4gYSBkaWZmIHZpZXcuXG5cbiAgICBSZXR1cm5zIG5vIGNvbHVtbiB3aGVuIHRoZXJlIGlzIG5vIGJhc2VsaW5lIG9yIHdoZW4gbm8gcm93J3MgdmFsdWUgZGlmZmVyc1xuICAgIGZyb20gaXQsIHNvIHRhYmxlcyBsb29rIG5vcm1hbCBvdXRzaWRlIG9mIGRpZmYgdmlld3MuXG4gICAgICovXG4gICAgY29uc3QgYmVmb3JlQ29sdW1uID0gPFJvdyw+KGFyZ3M6IHtcbiAgICAgICAgcm93czogUm93W107XG4gICAgICAgIGRhdGE6IChyb3c6IFJvdykgPT4gbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgICAgICBiYXNlbGluZURhdGE6IChiYXNlbGluZTogTWFzc0FjdGlvblByb2JsZW1EYXRhLCByb3c6IFJvdykgPT4gbnVtYmVyIHwgdW5kZWZpbmVkO1xuICAgICAgICBkZWZhdWx0PzogbnVtYmVyO1xuICAgIH0pOiBDb2x1bW5TY2hlbWE8Um93PltdID0+IHtcbiAgICAgICAgY29uc3QgYmFzZWxpbmUgPSBwcm9wcy5iYXNlbGluZUNvbnRlbnQ7XG4gICAgICAgIGlmICghYmFzZWxpbmUpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBiZWZvcmUgPSAocm93OiBSb3cpID0+IGFyZ3MuYmFzZWxpbmVEYXRhKGJhc2VsaW5lLCByb3cpID8/IGFyZ3MuZGVmYXVsdCA/PyAwO1xuICAgICAgICBjb25zdCBjdXJyZW50ID0gKHJvdzogUm93KSA9PiBhcmdzLmRhdGEocm93KSA/PyBhcmdzLmRlZmF1bHQgPz8gMDtcbiAgICAgICAgaWYgKCFhcmdzLnJvd3Muc29tZSgocm93KSA9PiBiZWZvcmUocm93KSAhPT0gY3VycmVudChyb3cpKSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY29udGVudFR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJCZWZvcmVcIixcbiAgICAgICAgICAgICAgICBjb250ZW50OiAocm93KSA9PiAoYmVmb3JlKHJvdykgPT09IGN1cnJlbnQocm93KSA/IFwiXCIgOiBiZWZvcmUocm93KS50b1N0cmluZygpKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG4gICAgfTtcblxuICAgIC8vIElycmVsZXZhbnQgb2YgdGhlIHZhbHVlIG9mIG1hc3NDb25zZXJ2YXRpb25UeXBlLCB3ZSBvbmx5IGV2ZXIgbmVlZCBhIHNpbmdsZVxuICAgIC8vIHNjaGVtYSBmb3Igb2JqZWN0czogZWFjaCBvYmplY3QgbmVlZHMgdG8gYmUgYXNzaWduZWQgYW4gaW5pdGlhbCB2YWx1ZS5cblxuICAgIGNvbnN0IG9iR2VuZXJhdG9ycyA9IGNyZWF0ZU1lbW88UXVhbGlmaWVkTmFtZVtdPigoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGVsID0gZWxhYm9yYXRlZE1vZGVsKCk7XG4gICAgICAgIGlmICghbW9kZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcHMuc3RhdGVUeXBlID8gbW9kZWwub2JHZW5lcmF0b3JzV2l0aFR5cGUocHJvcHMuc3RhdGVUeXBlKSA6IG1vZGVsLm9iR2VuZXJhdG9ycygpO1xuICAgIH0pO1xuXG4gICAgY29uc3Qgb2JTY2hlbWEgPSAoKTogQ29sdW1uU2NoZW1hPFF1YWxpZmllZE5hbWU+W10gPT4gW1xuICAgICAgICB7XG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIGhlYWRlcjogdHJ1ZSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IChpZCkgPT4gZWxhYm9yYXRlZE1vZGVsKCk/Lm9iR2VuZXJhdG9yTGFiZWwoaWQpPy5qb2luKFwiLlwiKSA/PyBcIlwiLFxuICAgICAgICB9LFxuICAgICAgICAuLi5iZWZvcmVDb2x1bW4oe1xuICAgICAgICAgICAgcm93czogb2JHZW5lcmF0b3JzKCksXG4gICAgICAgICAgICBkYXRhOiAoaWQpID0+IHByb3BzLmNvbnRlbnQuaW5pdGlhbFZhbHVlc1tpZF0sXG4gICAgICAgICAgICBiYXNlbGluZURhdGE6IChiYXNlbGluZSwgaWQpID0+IGJhc2VsaW5lLmluaXRpYWxWYWx1ZXNbaWRdLFxuICAgICAgICB9KSxcbiAgICAgICAgY3JlYXRlTnVtZXJpY2FsQ29sdW1uKHtcbiAgICAgICAgICAgIG5hbWU6IFwiSW5pdGlhbCB2YWx1ZVwiLFxuICAgICAgICAgICAgZGF0YTogKGlkKSA9PiBwcm9wcy5jb250ZW50LmluaXRpYWxWYWx1ZXNbaWRdLFxuICAgICAgICAgICAgdmFsaWRhdGU6IChfLCBkYXRhKSA9PiBkYXRhID49IDAsXG4gICAgICAgICAgICBzZXREYXRhOiAoaWQsIGRhdGEpID0+XG4gICAgICAgICAgICAgICAgcHJvcHMuY2hhbmdlQ29udGVudCgoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50LmluaXRpYWxWYWx1ZXNbaWRdID0gZGF0YTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgXTtcblxuICAgIC8vIEZvciBtb3JwaGlzbXMsIHRoZSBkYXRhIHRoYXQgd2UgbmVlZCBub3cgZG9lcyBkZXBlbmQgb24gbWFzc0NvbnNlcnZhdGlvblR5cGUuXG4gICAgLy8gV2UgZG9uJ3Qgc2ltcGx5IHdhbnQgdG8gZ2V0IGEgbGlzdCBvZiBtb3JwaGlzbSBnZW5lcmF0b3JzLCBidXQgaW5zdGVhZFxuICAgIC8vIGFjY291bnQgZm9yIHRoZSBlbnRpcmUgKmludGVyZmFjZSogb2YgZWFjaCBtb3JwaGlzbS4gSW4gYSBQZXRyaSBuZXQsIHRoaXNcbiAgICAvLyBjb25zaXN0cyBvZiBhIGxpc3Qgb2YgaW5wdXQgcGxhY2VzIGFuZCBhIGxpc3Qgb2Ygb3V0cHV0IHBsYWNlcyBmb3IgZWFjaFxuICAgIC8vIHRyYW5zaXRpb247IGluIGEgc3RvY2stZmxvdyBkaWFncmFtLCB0aGlzIGNvbnNpc3RzIG9mIGEgc2luZ2xldG9uIGxpc3RcbiAgICAvLyBvZiBpbnB1dCBzdG9ja3MgYW5kIGEgc2luZ2xldG9uIGxpc3Qgb2Ygb3V0cHV0IHN0b2NrcyBmb3IgZWFjaCBmbG93LlxuICAgIHR5cGUgVHJhbnNpdGlvbkludGVyZmFjZSA9IE1hcDxcbiAgICAgICAgUXVhbGlmaWVkTmFtZSxcbiAgICAgICAgeyBpbnB1dHM6IFF1YWxpZmllZE5hbWVbXTsgb3V0cHV0czogUXVhbGlmaWVkTmFtZVtdIH1cbiAgICA+O1xuXG4gICAgLy8gV2Ugc3RhcnQgYnkgY29uc3RydWN0aW5nIGFsbCB0aGUgZGF0YSB0aGF0IHdlIG1pZ2h0IG5lZWQsIGkuZS4gYWxsIHRoZVxuICAgIC8vIHRyYW5zaXRpb24gaW50ZXJmYWNlcy5cbiAgICBjb25zdCBtb3JHZW5lcmF0b3JzID0gY3JlYXRlTWVtbzxRdWFsaWZpZWROYW1lW10+KCgpID0+IHtcbiAgICAgICAgY29uc3QgbW9kZWwgPSBlbGFib3JhdGVkTW9kZWwoKTtcbiAgICAgICAgaWYgKCFtb2RlbCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9wcy50cmFuc2l0aW9uVHlwZVxuICAgICAgICAgICAgPyBtb2RlbC5tb3JHZW5lcmF0b3JzV2l0aFR5cGUocHJvcHMudHJhbnNpdGlvblR5cGUpXG4gICAgICAgICAgICA6IG1vZGVsLm1vckdlbmVyYXRvcnMoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG1vckdlbmVyYXRvcnNJbnRlcmZhY2VzID0gY3JlYXRlTWVtbzxUcmFuc2l0aW9uSW50ZXJmYWNlPigoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGVsID0gZWxhYm9yYXRlZE1vZGVsKCk7XG4gICAgICAgIGlmICghbW9kZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWFwKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdHJhbnNpdGlvbkludGVyZmFjZTogVHJhbnNpdGlvbkludGVyZmFjZSA9IG5ldyBNYXAoKTtcblxuICAgICAgICBmb3IgKGNvbnN0IG1nIG9mIG1vckdlbmVyYXRvcnMoKSkge1xuICAgICAgICAgICAgY29uc3QgbW9yID0gbW9kZWwubW9yUHJlc2VudGF0aW9uKG1nKTtcbiAgICAgICAgICAgIGlmICghbW9yKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpbnB1dHMgPSBjb2xsZWN0UHJvZHVjdChtb3IuZG9tKS5tYXAoKG9iKSA9PiB7XG4gICAgICAgICAgICAgICAgaW52YXJpYW50KG9iLnRhZyA9PT0gXCJCYXNpY1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2IuY29udGVudDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3Qgb3V0cHV0cyA9IGNvbGxlY3RQcm9kdWN0KG1vci5jb2QpLm1hcCgob2IpID0+IHtcbiAgICAgICAgICAgICAgICBpbnZhcmlhbnQob2IudGFnID09PSBcIkJhc2ljXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBvYi5jb250ZW50O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uSW50ZXJmYWNlLnNldChtZywgeyBpbnB1dHMsIG91dHB1dHMgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJhbnNpdGlvbkludGVyZmFjZTtcbiAgICB9KTtcblxuICAgIC8vIFdlIGFsc28gbmVlZCBhIGhlbHBlciBmdW5jdGlvbiB0byB0dXJuIG91ciBUcmFuc2l0aW9uSW50ZXJmYWNlIG9iamVjdHMgaW50b1xuICAgIC8vIGxpc3RzIG9mIHBhaXJzOiBbKHRyYW5zaXRpb24sIGlucHV0X3BsYWNlKV0gYW5kIFsodHJhbnNpdGlvbiwgb3V0cHV0X3BsYWNlKV0uXG4gICAgLy8gQWdhaW4sIGluIHRoZSBjYXNlIG9mIHN0b2NrLWZsb3cgZGlhZ3JhbXMgKG9yIGp1c3QgY2VydGFpbiBQZXRyaSBuZXRzKSwgdGhpc1xuICAgIC8vIG1pZ2h0IGJlIGEgc2luZ2xldG9uIGxpc3QuXG4gICAgY29uc3QgbW9yR2VuZXJhdG9yc0lucHV0cyA9IGNyZWF0ZU1lbW88W1F1YWxpZmllZE5hbWUsIFF1YWxpZmllZE5hbWVdW10+KCgpID0+IHtcbiAgICAgICAgY29uc3QgbW9ycGhpc21JbnB1dFBhaXJzOiBbUXVhbGlmaWVkTmFtZSwgUXVhbGlmaWVkTmFtZV1bXSA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IFttb3IsIGludF0gb2YgbW9yR2VuZXJhdG9yc0ludGVyZmFjZXMoKS5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaW5wIG9mIGludC5pbnB1dHMpIHtcbiAgICAgICAgICAgICAgICBtb3JwaGlzbUlucHV0UGFpcnMucHVzaChbbW9yLCBpbnBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW9ycGhpc21JbnB1dFBhaXJzO1xuICAgIH0pO1xuICAgIGNvbnN0IG1vckdlbmVyYXRvcnNPdXRwdXRzID0gY3JlYXRlTWVtbzxbUXVhbGlmaWVkTmFtZSwgUXVhbGlmaWVkTmFtZV1bXT4oKCkgPT4ge1xuICAgICAgICBjb25zdCBtb3JwaGlzbU91dHB1dFBhaXJzOiBbUXVhbGlmaWVkTmFtZSwgUXVhbGlmaWVkTmFtZV1bXSA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IFttb3IsIGludF0gb2YgbW9yR2VuZXJhdG9yc0ludGVyZmFjZXMoKS5lbnRyaWVzKCkpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qgb3V0cCBvZiBpbnQub3V0cHV0cykge1xuICAgICAgICAgICAgICAgIG1vcnBoaXNtT3V0cHV0UGFpcnMucHVzaChbbW9yLCBvdXRwXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vcnBoaXNtT3V0cHV0UGFpcnM7XG4gICAgfSk7XG5cbiAgICAvLyBUaGUgc2NoZW1hIHRoYXQgd2UgdXNlIGZvciB0aGUgPEZpeGVkVGFibGVFZGl0b3I+IEpTWCBlbGVtZW50IGRlcGVuZHMgb24gdGhlXG4gICAgLy8gdmFsdWUgb2YgTWFzc0NvbnNlcnZhdGlvblR5cGUuIFdlIG1pZ2h0IGFzIHdlbGwgY29uc3RydWN0IGFsbCBwb3NzaWJpbGl0aWVzLlxuXG4gICAgLy8gRmlyc3RseSwgdGhlIGNhc2UgTWFzc0NvbnNlcnZhdGlvblR5cGUgPSBCYWxhbmNlZFxuICAgIGNvbnN0IG1vclNjaGVtYSA9ICgpOiBDb2x1bW5TY2hlbWE8UXVhbGlmaWVkTmFtZT5bXSA9PiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgaGVhZGVyOiB0cnVlLFxuICAgICAgICAgICAgY29udGVudDogKG1vcikgPT4gZWxhYm9yYXRlZE1vZGVsKCk/Lm1vckdlbmVyYXRvckxhYmVsKG1vcik/LmpvaW4oXCIuXCIpID8/IFwiXCIsXG4gICAgICAgIH0sXG4gICAgICAgIC4uLmJlZm9yZUNvbHVtbih7XG4gICAgICAgICAgICByb3dzOiBtb3JHZW5lcmF0b3JzKCksXG4gICAgICAgICAgICBkYXRhOiAobW9yKSA9PiBwcm9wcy5jb250ZW50LnJhdGVzW21vcl0sXG4gICAgICAgICAgICBiYXNlbGluZURhdGE6IChiYXNlbGluZSwgbW9yKSA9PiBiYXNlbGluZS5yYXRlc1ttb3JdLFxuICAgICAgICAgICAgZGVmYXVsdDogMSxcbiAgICAgICAgfSksXG4gICAgICAgIGNyZWF0ZU51bWVyaWNhbENvbHVtbih7XG4gICAgICAgICAgICBuYW1lOiBcIlJhdGUgKPCdkZ8pXCIsXG4gICAgICAgICAgICBkYXRhOiAobW9yKSA9PiBwcm9wcy5jb250ZW50LnJhdGVzW21vcl0sXG4gICAgICAgICAgICBkZWZhdWx0OiAxLFxuICAgICAgICAgICAgdmFsaWRhdGU6IChfLCBkYXRhKSA9PiBkYXRhID49IDAsXG4gICAgICAgICAgICBzZXREYXRhOiAobW9yLCBkYXRhKSA9PlxuICAgICAgICAgICAgICAgIHByb3BzLmNoYW5nZUNvbnRlbnQoKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5yYXRlc1ttb3JdID0gZGF0YTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgXTtcblxuICAgIC8vIFNlY29uZGx5LCB0aGUgY2FzZSBNYXNzQ29uc2VydmF0aW9uVHlwZSA9IFVuYmFsYW5jZWQoUGVyVHJhbnNpdGlvbilcbiAgICBjb25zdCBtb3JJbnB1dFNjaGVtYSA9ICgpOiBDb2x1bW5TY2hlbWE8UXVhbGlmaWVkTmFtZT5bXSA9PiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgaGVhZGVyOiB0cnVlLFxuICAgICAgICAgICAgY29udGVudDogKG1vcikgPT4gZWxhYm9yYXRlZE1vZGVsKCk/Lm1vckdlbmVyYXRvckxhYmVsKG1vcik/LmpvaW4oXCIuXCIpID8/IFwiXCIsXG4gICAgICAgIH0sXG4gICAgICAgIC4uLmJlZm9yZUNvbHVtbih7XG4gICAgICAgICAgICByb3dzOiBtb3JHZW5lcmF0b3JzKCksXG4gICAgICAgICAgICBkYXRhOiAobW9yKSA9PiBwcm9wcy5jb250ZW50LnRyYW5zaXRpb25Db25zdW1wdGlvblJhdGVzW21vcl0sXG4gICAgICAgICAgICBiYXNlbGluZURhdGE6IChiYXNlbGluZSwgbW9yKSA9PiBiYXNlbGluZS50cmFuc2l0aW9uQ29uc3VtcHRpb25SYXRlc1ttb3JdLFxuICAgICAgICAgICAgZGVmYXVsdDogMSxcbiAgICAgICAgfSksXG4gICAgICAgIGNyZWF0ZU51bWVyaWNhbENvbHVtbih7XG4gICAgICAgICAgICBuYW1lOiBcIkNvbnN1bXB0aW9uICjwnZyFKVwiLFxuICAgICAgICAgICAgZGF0YTogKG1vcikgPT4gcHJvcHMuY29udGVudC50cmFuc2l0aW9uQ29uc3VtcHRpb25SYXRlc1ttb3JdLFxuICAgICAgICAgICAgZGVmYXVsdDogMSxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoXywgZGF0YSkgPT4gZGF0YSA+PSAwLFxuICAgICAgICAgICAgc2V0RGF0YTogKG1vciwgZGF0YSkgPT5cbiAgICAgICAgICAgICAgICBwcm9wcy5jaGFuZ2VDb250ZW50KChjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQudHJhbnNpdGlvbkNvbnN1bXB0aW9uUmF0ZXNbbW9yXSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgIF07XG4gICAgY29uc3QgbW9yT3V0cHV0U2NoZW1hID0gKCk6IENvbHVtblNjaGVtYTxRdWFsaWZpZWROYW1lPltdID0+IFtcbiAgICAgICAge1xuICAgICAgICAgICAgY29udGVudFR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICBoZWFkZXI6IHRydWUsXG4gICAgICAgICAgICBjb250ZW50OiAobW9yKSA9PiBlbGFib3JhdGVkTW9kZWwoKT8ubW9yR2VuZXJhdG9yTGFiZWwobW9yKT8uam9pbihcIi5cIikgPz8gXCJcIixcbiAgICAgICAgfSxcbiAgICAgICAgLi4uYmVmb3JlQ29sdW1uKHtcbiAgICAgICAgICAgIHJvd3M6IG1vckdlbmVyYXRvcnMoKSxcbiAgICAgICAgICAgIGRhdGE6IChtb3IpID0+IHByb3BzLmNvbnRlbnQudHJhbnNpdGlvblByb2R1Y3Rpb25SYXRlc1ttb3JdLFxuICAgICAgICAgICAgYmFzZWxpbmVEYXRhOiAoYmFzZWxpbmUsIG1vcikgPT4gYmFzZWxpbmUudHJhbnNpdGlvblByb2R1Y3Rpb25SYXRlc1ttb3JdLFxuICAgICAgICAgICAgZGVmYXVsdDogMSxcbiAgICAgICAgfSksXG4gICAgICAgIGNyZWF0ZU51bWVyaWNhbENvbHVtbih7XG4gICAgICAgICAgICBuYW1lOiBcIlByb2R1Y3Rpb24gKPCdnIwpXCIsXG4gICAgICAgICAgICBkYXRhOiAobW9yKSA9PiBwcm9wcy5jb250ZW50LnRyYW5zaXRpb25Qcm9kdWN0aW9uUmF0ZXNbbW9yXSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IDEsXG4gICAgICAgICAgICB2YWxpZGF0ZTogKF8sIGRhdGEpID0+IGRhdGEgPj0gMCxcbiAgICAgICAgICAgIHNldERhdGE6IChtb3IsIGRhdGEpID0+XG4gICAgICAgICAgICAgICAgcHJvcHMuY2hhbmdlQ29udGVudCgoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50LnRyYW5zaXRpb25Qcm9kdWN0aW9uUmF0ZXNbbW9yXSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgIF07XG5cbiAgICAvLyBGaW5hbGx5LCB0aGUgY2FzZSBNYXNzQ29uc2VydmF0aW9uVHlwZSA9IFVuYmFsYW5jZWQoUGVyUGxhY2UpXG4gICAgY29uc3QgbW9ySW5wdXRzU2NoZW1hID0gKCk6IENvbHVtblNjaGVtYTxbUXVhbGlmaWVkTmFtZSwgUXVhbGlmaWVkTmFtZV0+W10gPT4gW1xuICAgICAgICB7XG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIGhlYWRlcjogdHJ1ZSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IChbbW9yLCBpbnB1dF0pID0+XG4gICAgICAgICAgICAgICAgKGVsYWJvcmF0ZWRNb2RlbCgpPy5vYkdlbmVyYXRvckxhYmVsKGlucHV0KT8uam9pbihcIi5cIikgPz8gXCJcIikgK1xuICAgICAgICAgICAgICAgIFwiIOKGkiBcIiArXG4gICAgICAgICAgICAgICAgXCJbXCIgK1xuICAgICAgICAgICAgICAgIChtb3JMYWJlbE9yRGVmYXVsdChtb3IsIGVsYWJvcmF0ZWRNb2RlbCgpKSA/PyBcIlwiKSArXG4gICAgICAgICAgICAgICAgXCJdXCIsXG4gICAgICAgIH0sXG4gICAgICAgIC4uLmJlZm9yZUNvbHVtbih7XG4gICAgICAgICAgICByb3dzOiBtb3JHZW5lcmF0b3JzSW5wdXRzKCksXG4gICAgICAgICAgICBkYXRhOiAoW21vciwgaW5wdXRdKSA9PiBwcm9wcy5jb250ZW50LnBsYWNlQ29uc3VtcHRpb25SYXRlc1ttb3JdPy5baW5wdXRdLFxuICAgICAgICAgICAgYmFzZWxpbmVEYXRhOiAoYmFzZWxpbmUsIFttb3IsIGlucHV0XSkgPT4gYmFzZWxpbmUucGxhY2VDb25zdW1wdGlvblJhdGVzW21vcl0/LltpbnB1dF0sXG4gICAgICAgICAgICBkZWZhdWx0OiAxLFxuICAgICAgICB9KSxcbiAgICAgICAgY3JlYXRlTnVtZXJpY2FsQ29sdW1uKHtcbiAgICAgICAgICAgIG5hbWU6IFwiQ29uc3VtcHRpb24gKPCdnIUpXCIsXG4gICAgICAgICAgICBkYXRhOiAoW21vciwgaW5wdXRdKSA9PiBwcm9wcy5jb250ZW50LnBsYWNlQ29uc3VtcHRpb25SYXRlc1ttb3JdPy5baW5wdXRdLFxuICAgICAgICAgICAgZGVmYXVsdDogMSxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoXywgZGF0YSkgPT4gZGF0YSA+PSAwLFxuICAgICAgICAgICAgc2V0RGF0YTogKFttb3IsIGlucHV0XSwgZGF0YSkgPT5cbiAgICAgICAgICAgICAgICBwcm9wcy5jaGFuZ2VDb250ZW50KChjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50LnBsYWNlQ29uc3VtcHRpb25SYXRlc1ttb3JdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LnBsYWNlQ29uc3VtcHRpb25SYXRlc1ttb3JdW2lucHV0XSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LnBsYWNlQ29uc3VtcHRpb25SYXRlc1ttb3JdID0geyBbaW5wdXRdOiBkYXRhIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgXTtcbiAgICBjb25zdCBtb3JPdXRwdXRzU2NoZW1hID0gKCk6IENvbHVtblNjaGVtYTxbUXVhbGlmaWVkTmFtZSwgUXVhbGlmaWVkTmFtZV0+W10gPT4gW1xuICAgICAgICB7XG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIGhlYWRlcjogdHJ1ZSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IChbbW9yLCBvdXRwdXRdKSA9PlxuICAgICAgICAgICAgICAgIFwiW1wiICtcbiAgICAgICAgICAgICAgICAobW9yTGFiZWxPckRlZmF1bHQobW9yLCBlbGFib3JhdGVkTW9kZWwoKSkgPz8gXCJcIikgK1xuICAgICAgICAgICAgICAgIFwiXVwiICtcbiAgICAgICAgICAgICAgICBcIiDihpIgXCIgK1xuICAgICAgICAgICAgICAgIChlbGFib3JhdGVkTW9kZWwoKT8ub2JHZW5lcmF0b3JMYWJlbChvdXRwdXQpPy5qb2luKFwiLlwiKSA/PyBcIlwiKSxcbiAgICAgICAgfSxcbiAgICAgICAgLi4uYmVmb3JlQ29sdW1uKHtcbiAgICAgICAgICAgIHJvd3M6IG1vckdlbmVyYXRvcnNPdXRwdXRzKCksXG4gICAgICAgICAgICBkYXRhOiAoW21vciwgb3V0cHV0XSkgPT4gcHJvcHMuY29udGVudC5wbGFjZVByb2R1Y3Rpb25SYXRlc1ttb3JdPy5bb3V0cHV0XSxcbiAgICAgICAgICAgIGJhc2VsaW5lRGF0YTogKGJhc2VsaW5lLCBbbW9yLCBvdXRwdXRdKSA9PiBiYXNlbGluZS5wbGFjZVByb2R1Y3Rpb25SYXRlc1ttb3JdPy5bb3V0cHV0XSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IDEsXG4gICAgICAgIH0pLFxuICAgICAgICBjcmVhdGVOdW1lcmljYWxDb2x1bW4oe1xuICAgICAgICAgICAgbmFtZTogXCJQcm9kdWN0aW9uICjwnZyMKVwiLFxuICAgICAgICAgICAgZGF0YTogKFttb3IsIG91dHB1dF0pID0+IHByb3BzLmNvbnRlbnQucGxhY2VQcm9kdWN0aW9uUmF0ZXNbbW9yXT8uW291dHB1dF0sXG4gICAgICAgICAgICBkZWZhdWx0OiAxLFxuICAgICAgICAgICAgdmFsaWRhdGU6IChfLCBkYXRhKSA9PiBkYXRhID49IDAsXG4gICAgICAgICAgICBzZXREYXRhOiAoW21vciwgb3V0cHV0XSwgZGF0YSkgPT5cbiAgICAgICAgICAgICAgICBwcm9wcy5jaGFuZ2VDb250ZW50KChjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250ZW50LnBsYWNlUHJvZHVjdGlvblJhdGVzW21vcl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQucGxhY2VQcm9kdWN0aW9uUmF0ZXNbbW9yXVtvdXRwdXRdID0gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQucGxhY2VQcm9kdWN0aW9uUmF0ZXNbbW9yXSA9IHsgW291dHB1dF06IGRhdGEgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICBdO1xuXG4gICAgLy8gTm93IHdlIGNhbiBnZW5lcmF0ZSB0aGUgcGFyYW1ldGVyIHRhYmxlcyB0aGF0IHdpbGwgYWN0dWFsbHkgYmUgcmVuZGVyZWQuXG4gICAgY29uc3QgUGFyYW1ldGVyVGFibGVzID0gKCkgPT4gKFxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgICAgPE1hdGNoIHdoZW49e3Byb3BzLmNvbnRlbnQubWFzc0NvbnNlcnZhdGlvblR5cGUudHlwZSA9PT0gXCJCYWxhbmNlZFwifT5cbiAgICAgICAgICAgICAgICA8Rml4ZWRUYWJsZUVkaXRvciByb3dzPXttb3JHZW5lcmF0b3JzKCl9IHNjaGVtYT17bW9yU2NoZW1hKCl9IC8+XG4gICAgICAgICAgICA8L01hdGNoPlxuICAgICAgICAgICAgPE1hdGNoXG4gICAgICAgICAgICAgICAgd2hlbj17XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNvbnRlbnQubWFzc0NvbnNlcnZhdGlvblR5cGUudHlwZSA9PT0gXCJVbmJhbGFuY2VkXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY29udGVudC5tYXNzQ29uc2VydmF0aW9uVHlwZS5ncmFudWxhcml0eSA9PT0gXCJQZXJUcmFuc2l0aW9uXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZpeGVkVGFibGVFZGl0b3Igcm93cz17bW9yR2VuZXJhdG9ycygpfSBzY2hlbWE9e21vcklucHV0U2NoZW1hKCl9IC8+XG4gICAgICAgICAgICAgICAgPEZpeGVkVGFibGVFZGl0b3Igcm93cz17bW9yR2VuZXJhdG9ycygpfSBzY2hlbWE9e21vck91dHB1dFNjaGVtYSgpfSAvPlxuICAgICAgICAgICAgPC9NYXRjaD5cbiAgICAgICAgICAgIDxNYXRjaFxuICAgICAgICAgICAgICAgIHdoZW49e1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jb250ZW50Lm1hc3NDb25zZXJ2YXRpb25UeXBlLnR5cGUgPT09IFwiVW5iYWxhbmNlZFwiICYmXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNvbnRlbnQubWFzc0NvbnNlcnZhdGlvblR5cGUuZ3JhbnVsYXJpdHkgPT09IFwiUGVyUGxhY2VcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Rml4ZWRUYWJsZUVkaXRvciByb3dzPXttb3JHZW5lcmF0b3JzSW5wdXRzKCl9IHNjaGVtYT17bW9ySW5wdXRzU2NoZW1hKCl9IC8+XG4gICAgICAgICAgICAgICAgPEZpeGVkVGFibGVFZGl0b3Igcm93cz17bW9yR2VuZXJhdG9yc091dHB1dHMoKX0gc2NoZW1hPXttb3JPdXRwdXRzU2NoZW1hKCl9IC8+XG4gICAgICAgICAgICA8L01hdGNoPlxuICAgICAgICA8L1N3aXRjaD5cbiAgICApO1xuXG4gICAgLy8gRmluYWxseSwgd2UgbmVlZCB0aGUgZHVyYXRpb24sIGFuZCB0aGVuIHdlIGNhbiByZXR1cm4gZXZlcnl0aGluZy5cbiAgICBjb25zdCB0b3BsZXZlbFNjaGVtYSA9ICgpOiBDb2x1bW5TY2hlbWE8bnVsbD5bXSA9PiBbXG4gICAgICAgIC4uLmJlZm9yZUNvbHVtbih7XG4gICAgICAgICAgICByb3dzOiBbbnVsbF0sXG4gICAgICAgICAgICBkYXRhOiAoKSA9PiBwcm9wcy5jb250ZW50LmR1cmF0aW9uLFxuICAgICAgICAgICAgYmFzZWxpbmVEYXRhOiAoYmFzZWxpbmUpID0+IGJhc2VsaW5lLmR1cmF0aW9uLFxuICAgICAgICB9KSxcbiAgICAgICAgY3JlYXRlTnVtZXJpY2FsQ29sdW1uKHtcbiAgICAgICAgICAgIG5hbWU6IFwiRHVyYXRpb25cIixcbiAgICAgICAgICAgIGRhdGE6IChfKSA9PiBwcm9wcy5jb250ZW50LmR1cmF0aW9uLFxuICAgICAgICAgICAgdmFsaWRhdGU6IChfLCBkYXRhKSA9PiBkYXRhID49IDAsXG4gICAgICAgICAgICBzZXREYXRhOiAoXywgZGF0YSkgPT5cbiAgICAgICAgICAgICAgICBwcm9wcy5jaGFuZ2VDb250ZW50KChjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQuZHVyYXRpb24gPSBkYXRhO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICBdO1xuXG4gICAgY29uc3QgcmVzdWx0ID0gY3JlYXRlTW9kZWxPREVQbG90V2l0aEVxdWF0aW9ucyhcbiAgICAgICAgKCkgPT4gcHJvcHMubGl2ZU1vZGVsLnZhbGlkYXRlZE1vZGVsKCksXG4gICAgICAgIChtb2RlbCkgPT4gcHJvcHMuc2ltdWxhdGUobW9kZWwsIHByb3BzLmNvbnRlbnQpLFxuICAgICk7XG5cbiAgICBjb25zdCBwbG90UmVzdWx0ID0gKCkgPT4gcmVzdWx0KCk/LnBsb3REYXRhO1xuICAgIGNvbnN0IGxhdGV4RXF1YXRpb25zID0gKCkgPT4gcmVzdWx0KCk/LmxhdGV4RXF1YXRpb25zID8/IFtdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzcz1cInNpbXVsYXRpb25cIj5cbiAgICAgICAgICAgIDxCbG9ja1RpdGxlXG4gICAgICAgICAgICAgICAgdGl0bGU9e3Byb3BzLnRpdGxlfVxuICAgICAgICAgICAgICAgIHNldHRpbmdzUGFuZT17XG4gICAgICAgICAgICAgICAgICAgIDxNYXNzQWN0aW9uQ29uZmlnRm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnPXtwcm9wcy5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlQ29uZmlnPXtwcm9wcy5jaGFuZ2VDb250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlR3JhbnVsYXJpdHk9e3Byb3BzLnJhdGVzSGF2ZUdyYW51bGFyaXR5fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Rm9sZGFibGUgdGl0bGU9XCJQYXJhbWV0ZXJzXCIgZGVmYXVsdEV4cGFuZGVkPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwYXJhbWV0ZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGaXhlZFRhYmxlRWRpdG9yIHJvd3M9e29iR2VuZXJhdG9ycygpfSBzY2hlbWE9e29iU2NoZW1hKCl9IC8+XG4gICAgICAgICAgICAgICAgICAgIDxQYXJhbWV0ZXJUYWJsZXMgLz5cbiAgICAgICAgICAgICAgICAgICAgPEZpeGVkVGFibGVFZGl0b3Igcm93cz17W251bGxdfSBzY2hlbWE9e3RvcGxldmVsU2NoZW1hKCl9IC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0ZvbGRhYmxlPlxuICAgICAgICAgICAgPEZvbGRhYmxlIHRpdGxlPVwiRXF1YXRpb25zXCI+XG4gICAgICAgICAgICAgICAgPEV4cGFuZGFibGVUYWJsZVxuICAgICAgICAgICAgICAgICAgICB0aHJlc2hvbGQ9ezIwfVxuICAgICAgICAgICAgICAgICAgICByb3dzPXtsYXRleEVxdWF0aW9ucygpfVxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5zPXtbXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNlbGw6IChyb3cpID0+IDxLYXRleERpc3BsYXkgbWF0aD17cm93Lmxoc30gLz4gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgY2VsbDogKCkgPT4gPEthdGV4RGlzcGxheSBtYXRoPVwiPVwiIC8+IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7IGNlbGw6IChyb3cpID0+IDxLYXRleERpc3BsYXkgbWF0aD17cm93LnJoc30gLz4gfSxcbiAgICAgICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9Gb2xkYWJsZT5cbiAgICAgICAgICAgIDxGb2xkYWJsZSB0aXRsZT1cIlNpbXVsYXRpb25cIiBkZWZhdWx0RXhwYW5kZWQ+XG4gICAgICAgICAgICAgICAgPE9ERVJlc3VsdFBsb3QgcmVzdWx0PXtwbG90UmVzdWx0KCl9IC8+XG4gICAgICAgICAgICA8L0ZvbGRhYmxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIk1hc3NBY3Rpb24iLCJwcm9wcyIsImVsYWJvcmF0ZWRNb2RlbCIsImxpdmVNb2RlbCIsImJlZm9yZUNvbHVtbiIsImFyZ3MiLCJiYXNlbGluZSIsImJhc2VsaW5lQ29udGVudCIsImJlZm9yZSIsInJvdyIsImJhc2VsaW5lRGF0YSIsImRlZmF1bHQiLCJjdXJyZW50IiwiZGF0YSIsInJvd3MiLCJzb21lIiwiY29udGVudFR5cGUiLCJuYW1lIiwiY29udGVudCIsInRvU3RyaW5nIiwib2JHZW5lcmF0b3JzIiwiY3JlYXRlTWVtbyIsIm1vZGVsIiwic3RhdGVUeXBlIiwib2JHZW5lcmF0b3JzV2l0aFR5cGUiLCJvYlNjaGVtYSIsImhlYWRlciIsImlkIiwib2JHZW5lcmF0b3JMYWJlbCIsImpvaW4iLCJpbml0aWFsVmFsdWVzIiwiY3JlYXRlTnVtZXJpY2FsQ29sdW1uIiwidmFsaWRhdGUiLCJfIiwic2V0RGF0YSIsImNoYW5nZUNvbnRlbnQiLCJtb3JHZW5lcmF0b3JzIiwidHJhbnNpdGlvblR5cGUiLCJtb3JHZW5lcmF0b3JzV2l0aFR5cGUiLCJtb3JHZW5lcmF0b3JzSW50ZXJmYWNlcyIsIk1hcCIsInRyYW5zaXRpb25JbnRlcmZhY2UiLCJtZyIsIm1vciIsIm1vclByZXNlbnRhdGlvbiIsImlucHV0cyIsImNvbGxlY3RQcm9kdWN0IiwiZG9tIiwibWFwIiwib2IiLCJpbnZhcmlhbnQiLCJ0YWciLCJvdXRwdXRzIiwiY29kIiwic2V0IiwibW9yR2VuZXJhdG9yc0lucHV0cyIsIm1vcnBoaXNtSW5wdXRQYWlycyIsImludCIsImVudHJpZXMiLCJpbnAiLCJwdXNoIiwibW9yR2VuZXJhdG9yc091dHB1dHMiLCJtb3JwaGlzbU91dHB1dFBhaXJzIiwib3V0cCIsIm1vclNjaGVtYSIsIm1vckdlbmVyYXRvckxhYmVsIiwicmF0ZXMiLCJtb3JJbnB1dFNjaGVtYSIsInRyYW5zaXRpb25Db25zdW1wdGlvblJhdGVzIiwibW9yT3V0cHV0U2NoZW1hIiwidHJhbnNpdGlvblByb2R1Y3Rpb25SYXRlcyIsIm1vcklucHV0c1NjaGVtYSIsImlucHV0IiwibW9yTGFiZWxPckRlZmF1bHQiLCJwbGFjZUNvbnN1bXB0aW9uUmF0ZXMiLCJtb3JPdXRwdXRzU2NoZW1hIiwib3V0cHV0IiwicGxhY2VQcm9kdWN0aW9uUmF0ZXMiLCJQYXJhbWV0ZXJUYWJsZXMiLCJfJGNyZWF0ZUNvbXBvbmVudCIsIlN3aXRjaCIsImNoaWxkcmVuIiwiTWF0Y2giLCJ3aGVuIiwibWFzc0NvbnNlcnZhdGlvblR5cGUiLCJ0eXBlIiwiRml4ZWRUYWJsZUVkaXRvciIsInNjaGVtYSIsImdyYW51bGFyaXR5IiwidG9wbGV2ZWxTY2hlbWEiLCJkdXJhdGlvbiIsInJlc3VsdCIsImNyZWF0ZU1vZGVsT0RFUGxvdFdpdGhFcXVhdGlvbnMiLCJ2YWxpZGF0ZWRNb2RlbCIsInNpbXVsYXRlIiwicGxvdFJlc3VsdCIsInBsb3REYXRhIiwibGF0ZXhFcXVhdGlvbnMiLCJfZWwkIiwiX3RtcGwkMiIsIl8kaW5zZXJ0IiwiQmxvY2tUaXRsZSIsInRpdGxlIiwic2V0dGluZ3NQYW5lIiwiTWFzc0FjdGlvbkNvbmZpZ0Zvcm0iLCJjb25maWciLCJjaGFuZ2VDb25maWciLCJlbmFibGVHcmFudWxhcml0eSIsInJhdGVzSGF2ZUdyYW51bGFyaXR5IiwiRm9sZGFibGUiLCJkZWZhdWx0RXhwYW5kZWQiLCJfZWwkMiIsIl90bXBsJCIsIkV4cGFuZGFibGVUYWJsZSIsInRocmVzaG9sZCIsImNvbHVtbnMiLCJjZWxsIiwiS2F0ZXhEaXNwbGF5IiwibWF0aCIsImxocyIsInJocyIsIk9ERVJlc3VsdFBsb3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkJBLFNBQXdCQSxXQUNwQkMsS0FPRixFQUFBO0FBQ0UsRUFBQSxN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
