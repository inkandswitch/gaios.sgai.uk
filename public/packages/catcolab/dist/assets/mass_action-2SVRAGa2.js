import { template, insert, createComponent } from 'solid-js/web';
import { createMemo, Switch, Match } from 'solid-js';
import { t as collectProduct, o as invariant, F as FixedTableEditor, p as createNumericalColumn, E as ExpandableTable } from './analysis_tool-Dx9JOKUM.js';
import { B as BlockTitle } from './block_title-CsnloSvp.js';
import { F as Foldable } from './foldable-VLNG82dm.js';
import { K as KatexDisplay } from './katex_display-afS7qhPT.js';
import './model-hspTLkzk.js';
import '@automerge/automerge-repo';
import 'solid-js/store';
import '@automerge/automerge-repo-network-websocket';
import '@automerge/automerge-repo-storage-indexeddb';
import { m as morLabelOrDefault } from './label-GvQ4fTcU.js';
import { O as ODEResultPlot } from './pde_plot-RwfHTcqv.js';
import { M as MassActionConfigForm } from './mass_action_config_form-Cr0KuAet.js';
import { a as createModelODEPlotWithEquations } from './model_ode_plot-LLQrAki8.js';
/* empty css                    */
import '@automerge/automerge/slim';
import '@automerge/automerge';
import './index-CyfczNyW.js';
import '@inkandswitch/patchwork-providers';
import './alert-Bg_HGlYN.js';

var _tmpl$ = /* @__PURE__ */ template(`<div class=parameters>`), _tmpl$2 = /* @__PURE__ */ template(`<div class=simulation>`);
function MassAction(props) {
  const elaboratedModel = () => props.liveModel.elaboratedModel();
  const baselineValue = (data, dflt = 0) => (row) => {
    const baseline = props.baselineContent;
    return baseline ? data(baseline, row) ?? dflt : undefined;
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
  }, createNumericalColumn({
    name: "Initial value",
    data: (id) => props.content.initialValues[id],
    was: baselineValue((baseline, id) => baseline.initialValues[id]),
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
  }, createNumericalColumn({
    name: "Rate (𝑟)",
    data: (mor) => props.content.rates[mor],
    was: baselineValue((baseline, mor) => baseline.rates[mor], 1),
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
  }, createNumericalColumn({
    name: "Consumption (𝜅)",
    data: (mor) => props.content.transitionConsumptionRates[mor],
    was: baselineValue((baseline, mor) => baseline.transitionConsumptionRates[mor], 1),
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
  }, createNumericalColumn({
    name: "Production (𝜌)",
    data: (mor) => props.content.transitionProductionRates[mor],
    was: baselineValue((baseline, mor) => baseline.transitionProductionRates[mor], 1),
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
  }, createNumericalColumn({
    name: "Consumption (𝜅)",
    data: ([mor, input]) => props.content.placeConsumptionRates[mor]?.[input],
    was: baselineValue((baseline, [mor, input]) => baseline.placeConsumptionRates[mor]?.[input], 1),
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
  }, createNumericalColumn({
    name: "Production (𝜌)",
    data: ([mor, output]) => props.content.placeProductionRates[mor]?.[output],
    was: baselineValue((baseline, [mor, output]) => baseline.placeProductionRates[mor]?.[output], 1),
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
  const toplevelSchema = () => [createNumericalColumn({
    name: "Duration",
    data: (_) => props.content.duration,
    was: baselineValue((baseline) => baseline.duration),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzc19hY3Rpb24tMlNWUkFHYTIuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zyb250ZW5kL3NyYy9zdGRsaWIvYW5hbHlzZXMvbWFzc19hY3Rpb24udHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZU1lbW8sIE1hdGNoLCBTd2l0Y2ggfSBmcm9tIFwic29saWQtanNcIjtcbmltcG9ydCBpbnZhcmlhbnQgZnJvbSBcInRpbnktaW52YXJpYW50XCI7XG5cbmltcG9ydCB7XG4gICAgQmxvY2tUaXRsZSxcbiAgICB0eXBlIENvbHVtblNjaGVtYSxcbiAgICBjcmVhdGVOdW1lcmljYWxDb2x1bW4sXG4gICAgRXhwYW5kYWJsZVRhYmxlLFxuICAgIEZpeGVkVGFibGVFZGl0b3IsXG4gICAgRm9sZGFibGUsXG4gICAgS2F0ZXhEaXNwbGF5LFxufSBmcm9tIFwiY2F0Y29sYWItdWktY29tcG9uZW50c1wiO1xuaW1wb3J0IHtcbiAgICBjb2xsZWN0UHJvZHVjdCxcbiAgICB0eXBlIE1hc3NBY3Rpb25Qcm9ibGVtRGF0YSxcbiAgICB0eXBlIE1vclR5cGUsXG4gICAgdHlwZSBPYlR5cGUsXG4gICAgdHlwZSBRdWFsaWZpZWROYW1lLFxufSBmcm9tIFwiY2F0bG9nLXdhc21cIjtcbmltcG9ydCB0eXBlIHsgTW9kZWxBbmFseXNpc1Byb3BzIH0gZnJvbSBcIi4uLy4uL2FuYWx5c2lzXCI7XG5pbXBvcnQgeyBtb3JMYWJlbE9yRGVmYXVsdCB9IGZyb20gXCIuLi8uLi9tb2RlbFwiO1xuaW1wb3J0IHsgT0RFUmVzdWx0UGxvdCB9IGZyb20gXCIuLi8uLi92aXN1YWxpemF0aW9uXCI7XG5pbXBvcnQgeyBNYXNzQWN0aW9uQ29uZmlnRm9ybSB9IGZyb20gXCIuL21hc3NfYWN0aW9uX2NvbmZpZ19mb3JtXCI7XG5pbXBvcnQgeyBjcmVhdGVNb2RlbE9ERVBsb3RXaXRoRXF1YXRpb25zIH0gZnJvbSBcIi4vbW9kZWxfb2RlX3Bsb3RcIjtcbmltcG9ydCB0eXBlIHsgTWFzc0FjdGlvblNpbXVsYXRvciB9IGZyb20gXCIuL3NpbXVsYXRvcl90eXBlc1wiO1xuXG5pbXBvcnQgXCIuL3NpbXVsYXRpb24uY3NzXCI7XG5cbi8qKiBBbmFseXplIGEgbW9kZWwgdXNpbmcgbWFzcy1hY3Rpb24gZHluYW1pY3MuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNYXNzQWN0aW9uKFxuICAgIHByb3BzOiBNb2RlbEFuYWx5c2lzUHJvcHM8TWFzc0FjdGlvblByb2JsZW1EYXRhPiAmIHtcbiAgICAgICAgcmF0ZXNIYXZlR3JhbnVsYXJpdHk6IGJvb2xlYW47XG4gICAgICAgIHNpbXVsYXRlOiBNYXNzQWN0aW9uU2ltdWxhdG9yO1xuICAgICAgICBzdGF0ZVR5cGU/OiBPYlR5cGU7XG4gICAgICAgIHRpdGxlPzogc3RyaW5nO1xuICAgICAgICB0cmFuc2l0aW9uVHlwZT86IE1vclR5cGU7XG4gICAgfSxcbikge1xuICAgIGNvbnN0IGVsYWJvcmF0ZWRNb2RlbCA9ICgpID0+IHByb3BzLmxpdmVNb2RlbC5lbGFib3JhdGVkTW9kZWwoKTtcblxuICAgIC8qKiBCYXNlbGluZSB2YWx1ZSBhY2Nlc3NvciBmb3IgYSBudW1lcmljYWwgY29sdW1uIGluIGEgZGlmZiB2aWV3LlxuXG4gICAgUmV0dXJucyBgdW5kZWZpbmVkYCBvdXRzaWRlIG9mIGRpZmYgdmlld3MsIHNvIHRhYmxlcyBsb29rIG5vcm1hbCB0aGVyZS5cbiAgICBXaGVuIHRoZSByZXR1cm5lZCB2YWx1ZSBkaWZmZXJzIGZyb20gdGhlIGN1cnJlbnQgb25lLCB0aGUgdGFibGUgY2VsbCBpc1xuICAgIGhpZ2hsaWdodGVkIGFuZCBzaG93cyB0aGUgb2xkIHZhbHVlIHN0cnVjayB0aHJvdWdoIGFmdGVyIHRoZSBuZXcgb25lLlxuICAgICAqL1xuICAgIGNvbnN0IGJhc2VsaW5lVmFsdWUgPVxuICAgICAgICA8Um93LD4oXG4gICAgICAgICAgICBkYXRhOiAoYmFzZWxpbmU6IE1hc3NBY3Rpb25Qcm9ibGVtRGF0YSwgcm93OiBSb3cpID0+IG51bWJlciB8IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGRmbHQgPSAwLFxuICAgICAgICApOiAoKHJvdzogUm93KSA9PiBudW1iZXIgfCB1bmRlZmluZWQpID0+XG4gICAgICAgIChyb3cpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJhc2VsaW5lID0gcHJvcHMuYmFzZWxpbmVDb250ZW50O1xuICAgICAgICAgICAgcmV0dXJuIGJhc2VsaW5lID8gKGRhdGEoYmFzZWxpbmUsIHJvdykgPz8gZGZsdCkgOiB1bmRlZmluZWQ7XG4gICAgICAgIH07XG5cbiAgICAvLyBJcnJlbGV2YW50IG9mIHRoZSB2YWx1ZSBvZiBtYXNzQ29uc2VydmF0aW9uVHlwZSwgd2Ugb25seSBldmVyIG5lZWQgYSBzaW5nbGVcbiAgICAvLyBzY2hlbWEgZm9yIG9iamVjdHM6IGVhY2ggb2JqZWN0IG5lZWRzIHRvIGJlIGFzc2lnbmVkIGFuIGluaXRpYWwgdmFsdWUuXG5cbiAgICBjb25zdCBvYkdlbmVyYXRvcnMgPSBjcmVhdGVNZW1vPFF1YWxpZmllZE5hbWVbXT4oKCkgPT4ge1xuICAgICAgICBjb25zdCBtb2RlbCA9IGVsYWJvcmF0ZWRNb2RlbCgpO1xuICAgICAgICBpZiAoIW1vZGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb3BzLnN0YXRlVHlwZSA/IG1vZGVsLm9iR2VuZXJhdG9yc1dpdGhUeXBlKHByb3BzLnN0YXRlVHlwZSkgOiBtb2RlbC5vYkdlbmVyYXRvcnMoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IG9iU2NoZW1hID0gKCk6IENvbHVtblNjaGVtYTxRdWFsaWZpZWROYW1lPltdID0+IFtcbiAgICAgICAge1xuICAgICAgICAgICAgY29udGVudFR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICBoZWFkZXI6IHRydWUsXG4gICAgICAgICAgICBjb250ZW50OiAoaWQpID0+IGVsYWJvcmF0ZWRNb2RlbCgpPy5vYkdlbmVyYXRvckxhYmVsKGlkKT8uam9pbihcIi5cIikgPz8gXCJcIixcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlTnVtZXJpY2FsQ29sdW1uKHtcbiAgICAgICAgICAgIG5hbWU6IFwiSW5pdGlhbCB2YWx1ZVwiLFxuICAgICAgICAgICAgZGF0YTogKGlkKSA9PiBwcm9wcy5jb250ZW50LmluaXRpYWxWYWx1ZXNbaWRdLFxuICAgICAgICAgICAgd2FzOiBiYXNlbGluZVZhbHVlKChiYXNlbGluZSwgaWQpID0+IGJhc2VsaW5lLmluaXRpYWxWYWx1ZXNbaWRdKSxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoXywgZGF0YSkgPT4gZGF0YSA+PSAwLFxuICAgICAgICAgICAgc2V0RGF0YTogKGlkLCBkYXRhKSA9PlxuICAgICAgICAgICAgICAgIHByb3BzLmNoYW5nZUNvbnRlbnQoKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5pbml0aWFsVmFsdWVzW2lkXSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgIF07XG5cbiAgICAvLyBGb3IgbW9ycGhpc21zLCB0aGUgZGF0YSB0aGF0IHdlIG5lZWQgbm93IGRvZXMgZGVwZW5kIG9uIG1hc3NDb25zZXJ2YXRpb25UeXBlLlxuICAgIC8vIFdlIGRvbid0IHNpbXBseSB3YW50IHRvIGdldCBhIGxpc3Qgb2YgbW9ycGhpc20gZ2VuZXJhdG9ycywgYnV0IGluc3RlYWRcbiAgICAvLyBhY2NvdW50IGZvciB0aGUgZW50aXJlICppbnRlcmZhY2UqIG9mIGVhY2ggbW9ycGhpc20uIEluIGEgUGV0cmkgbmV0LCB0aGlzXG4gICAgLy8gY29uc2lzdHMgb2YgYSBsaXN0IG9mIGlucHV0IHBsYWNlcyBhbmQgYSBsaXN0IG9mIG91dHB1dCBwbGFjZXMgZm9yIGVhY2hcbiAgICAvLyB0cmFuc2l0aW9uOyBpbiBhIHN0b2NrLWZsb3cgZGlhZ3JhbSwgdGhpcyBjb25zaXN0cyBvZiBhIHNpbmdsZXRvbiBsaXN0XG4gICAgLy8gb2YgaW5wdXQgc3RvY2tzIGFuZCBhIHNpbmdsZXRvbiBsaXN0IG9mIG91dHB1dCBzdG9ja3MgZm9yIGVhY2ggZmxvdy5cbiAgICB0eXBlIFRyYW5zaXRpb25JbnRlcmZhY2UgPSBNYXA8XG4gICAgICAgIFF1YWxpZmllZE5hbWUsXG4gICAgICAgIHsgaW5wdXRzOiBRdWFsaWZpZWROYW1lW107IG91dHB1dHM6IFF1YWxpZmllZE5hbWVbXSB9XG4gICAgPjtcblxuICAgIC8vIFdlIHN0YXJ0IGJ5IGNvbnN0cnVjdGluZyBhbGwgdGhlIGRhdGEgdGhhdCB3ZSBtaWdodCBuZWVkLCBpLmUuIGFsbCB0aGVcbiAgICAvLyB0cmFuc2l0aW9uIGludGVyZmFjZXMuXG4gICAgY29uc3QgbW9yR2VuZXJhdG9ycyA9IGNyZWF0ZU1lbW88UXVhbGlmaWVkTmFtZVtdPigoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vZGVsID0gZWxhYm9yYXRlZE1vZGVsKCk7XG4gICAgICAgIGlmICghbW9kZWwpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcHMudHJhbnNpdGlvblR5cGVcbiAgICAgICAgICAgID8gbW9kZWwubW9yR2VuZXJhdG9yc1dpdGhUeXBlKHByb3BzLnRyYW5zaXRpb25UeXBlKVxuICAgICAgICAgICAgOiBtb2RlbC5tb3JHZW5lcmF0b3JzKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBtb3JHZW5lcmF0b3JzSW50ZXJmYWNlcyA9IGNyZWF0ZU1lbW88VHJhbnNpdGlvbkludGVyZmFjZT4oKCkgPT4ge1xuICAgICAgICBjb25zdCBtb2RlbCA9IGVsYWJvcmF0ZWRNb2RlbCgpO1xuICAgICAgICBpZiAoIW1vZGVsKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hcCgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRyYW5zaXRpb25JbnRlcmZhY2U6IFRyYW5zaXRpb25JbnRlcmZhY2UgPSBuZXcgTWFwKCk7XG5cbiAgICAgICAgZm9yIChjb25zdCBtZyBvZiBtb3JHZW5lcmF0b3JzKCkpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vciA9IG1vZGVsLm1vclByZXNlbnRhdGlvbihtZyk7XG4gICAgICAgICAgICBpZiAoIW1vcikge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaW5wdXRzID0gY29sbGVjdFByb2R1Y3QobW9yLmRvbSkubWFwKChvYikgPT4ge1xuICAgICAgICAgICAgICAgIGludmFyaWFudChvYi50YWcgPT09IFwiQmFzaWNcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iLmNvbnRlbnQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IG91dHB1dHMgPSBjb2xsZWN0UHJvZHVjdChtb3IuY29kKS5tYXAoKG9iKSA9PiB7XG4gICAgICAgICAgICAgICAgaW52YXJpYW50KG9iLnRhZyA9PT0gXCJCYXNpY1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gb2IuY29udGVudDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdHJhbnNpdGlvbkludGVyZmFjZS5zZXQobWcsIHsgaW5wdXRzLCBvdXRwdXRzIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRyYW5zaXRpb25JbnRlcmZhY2U7XG4gICAgfSk7XG5cbiAgICAvLyBXZSBhbHNvIG5lZWQgYSBoZWxwZXIgZnVuY3Rpb24gdG8gdHVybiBvdXIgVHJhbnNpdGlvbkludGVyZmFjZSBvYmplY3RzIGludG9cbiAgICAvLyBsaXN0cyBvZiBwYWlyczogWyh0cmFuc2l0aW9uLCBpbnB1dF9wbGFjZSldIGFuZCBbKHRyYW5zaXRpb24sIG91dHB1dF9wbGFjZSldLlxuICAgIC8vIEFnYWluLCBpbiB0aGUgY2FzZSBvZiBzdG9jay1mbG93IGRpYWdyYW1zIChvciBqdXN0IGNlcnRhaW4gUGV0cmkgbmV0cyksIHRoaXNcbiAgICAvLyBtaWdodCBiZSBhIHNpbmdsZXRvbiBsaXN0LlxuICAgIGNvbnN0IG1vckdlbmVyYXRvcnNJbnB1dHMgPSBjcmVhdGVNZW1vPFtRdWFsaWZpZWROYW1lLCBRdWFsaWZpZWROYW1lXVtdPigoKSA9PiB7XG4gICAgICAgIGNvbnN0IG1vcnBoaXNtSW5wdXRQYWlyczogW1F1YWxpZmllZE5hbWUsIFF1YWxpZmllZE5hbWVdW10gPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBbbW9yLCBpbnRdIG9mIG1vckdlbmVyYXRvcnNJbnRlcmZhY2VzKCkuZW50cmllcygpKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGlucCBvZiBpbnQuaW5wdXRzKSB7XG4gICAgICAgICAgICAgICAgbW9ycGhpc21JbnB1dFBhaXJzLnB1c2goW21vciwgaW5wXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vcnBoaXNtSW5wdXRQYWlycztcbiAgICB9KTtcbiAgICBjb25zdCBtb3JHZW5lcmF0b3JzT3V0cHV0cyA9IGNyZWF0ZU1lbW88W1F1YWxpZmllZE5hbWUsIFF1YWxpZmllZE5hbWVdW10+KCgpID0+IHtcbiAgICAgICAgY29uc3QgbW9ycGhpc21PdXRwdXRQYWlyczogW1F1YWxpZmllZE5hbWUsIFF1YWxpZmllZE5hbWVdW10gPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBbbW9yLCBpbnRdIG9mIG1vckdlbmVyYXRvcnNJbnRlcmZhY2VzKCkuZW50cmllcygpKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IG91dHAgb2YgaW50Lm91dHB1dHMpIHtcbiAgICAgICAgICAgICAgICBtb3JwaGlzbU91dHB1dFBhaXJzLnB1c2goW21vciwgb3V0cF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb3JwaGlzbU91dHB1dFBhaXJzO1xuICAgIH0pO1xuXG4gICAgLy8gVGhlIHNjaGVtYSB0aGF0IHdlIHVzZSBmb3IgdGhlIDxGaXhlZFRhYmxlRWRpdG9yPiBKU1ggZWxlbWVudCBkZXBlbmRzIG9uIHRoZVxuICAgIC8vIHZhbHVlIG9mIE1hc3NDb25zZXJ2YXRpb25UeXBlLiBXZSBtaWdodCBhcyB3ZWxsIGNvbnN0cnVjdCBhbGwgcG9zc2liaWxpdGllcy5cblxuICAgIC8vIEZpcnN0bHksIHRoZSBjYXNlIE1hc3NDb25zZXJ2YXRpb25UeXBlID0gQmFsYW5jZWRcbiAgICBjb25zdCBtb3JTY2hlbWEgPSAoKTogQ29sdW1uU2NoZW1hPFF1YWxpZmllZE5hbWU+W10gPT4gW1xuICAgICAgICB7XG4gICAgICAgICAgICBjb250ZW50VHlwZTogXCJzdHJpbmdcIixcbiAgICAgICAgICAgIGhlYWRlcjogdHJ1ZSxcbiAgICAgICAgICAgIGNvbnRlbnQ6IChtb3IpID0+IGVsYWJvcmF0ZWRNb2RlbCgpPy5tb3JHZW5lcmF0b3JMYWJlbChtb3IpPy5qb2luKFwiLlwiKSA/PyBcIlwiLFxuICAgICAgICB9LFxuICAgICAgICBjcmVhdGVOdW1lcmljYWxDb2x1bW4oe1xuICAgICAgICAgICAgbmFtZTogXCJSYXRlICjwnZGfKVwiLFxuICAgICAgICAgICAgZGF0YTogKG1vcikgPT4gcHJvcHMuY29udGVudC5yYXRlc1ttb3JdLFxuICAgICAgICAgICAgd2FzOiBiYXNlbGluZVZhbHVlKChiYXNlbGluZSwgbW9yKSA9PiBiYXNlbGluZS5yYXRlc1ttb3JdLCAxKSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IDEsXG4gICAgICAgICAgICB2YWxpZGF0ZTogKF8sIGRhdGEpID0+IGRhdGEgPj0gMCxcbiAgICAgICAgICAgIHNldERhdGE6IChtb3IsIGRhdGEpID0+XG4gICAgICAgICAgICAgICAgcHJvcHMuY2hhbmdlQ29udGVudCgoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50LnJhdGVzW21vcl0gPSBkYXRhO1xuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICB9KSxcbiAgICBdO1xuXG4gICAgLy8gU2Vjb25kbHksIHRoZSBjYXNlIE1hc3NDb25zZXJ2YXRpb25UeXBlID0gVW5iYWxhbmNlZChQZXJUcmFuc2l0aW9uKVxuICAgIGNvbnN0IG1vcklucHV0U2NoZW1hID0gKCk6IENvbHVtblNjaGVtYTxRdWFsaWZpZWROYW1lPltdID0+IFtcbiAgICAgICAge1xuICAgICAgICAgICAgY29udGVudFR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICBoZWFkZXI6IHRydWUsXG4gICAgICAgICAgICBjb250ZW50OiAobW9yKSA9PiBlbGFib3JhdGVkTW9kZWwoKT8ubW9yR2VuZXJhdG9yTGFiZWwobW9yKT8uam9pbihcIi5cIikgPz8gXCJcIixcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlTnVtZXJpY2FsQ29sdW1uKHtcbiAgICAgICAgICAgIG5hbWU6IFwiQ29uc3VtcHRpb24gKPCdnIUpXCIsXG4gICAgICAgICAgICBkYXRhOiAobW9yKSA9PiBwcm9wcy5jb250ZW50LnRyYW5zaXRpb25Db25zdW1wdGlvblJhdGVzW21vcl0sXG4gICAgICAgICAgICB3YXM6IGJhc2VsaW5lVmFsdWUoKGJhc2VsaW5lLCBtb3IpID0+IGJhc2VsaW5lLnRyYW5zaXRpb25Db25zdW1wdGlvblJhdGVzW21vcl0sIDEpLFxuICAgICAgICAgICAgZGVmYXVsdDogMSxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoXywgZGF0YSkgPT4gZGF0YSA+PSAwLFxuICAgICAgICAgICAgc2V0RGF0YTogKG1vciwgZGF0YSkgPT5cbiAgICAgICAgICAgICAgICBwcm9wcy5jaGFuZ2VDb250ZW50KChjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQudHJhbnNpdGlvbkNvbnN1bXB0aW9uUmF0ZXNbbW9yXSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgIF07XG4gICAgY29uc3QgbW9yT3V0cHV0U2NoZW1hID0gKCk6IENvbHVtblNjaGVtYTxRdWFsaWZpZWROYW1lPltdID0+IFtcbiAgICAgICAge1xuICAgICAgICAgICAgY29udGVudFR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICBoZWFkZXI6IHRydWUsXG4gICAgICAgICAgICBjb250ZW50OiAobW9yKSA9PiBlbGFib3JhdGVkTW9kZWwoKT8ubW9yR2VuZXJhdG9yTGFiZWwobW9yKT8uam9pbihcIi5cIikgPz8gXCJcIixcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlTnVtZXJpY2FsQ29sdW1uKHtcbiAgICAgICAgICAgIG5hbWU6IFwiUHJvZHVjdGlvbiAo8J2cjClcIixcbiAgICAgICAgICAgIGRhdGE6IChtb3IpID0+IHByb3BzLmNvbnRlbnQudHJhbnNpdGlvblByb2R1Y3Rpb25SYXRlc1ttb3JdLFxuICAgICAgICAgICAgd2FzOiBiYXNlbGluZVZhbHVlKChiYXNlbGluZSwgbW9yKSA9PiBiYXNlbGluZS50cmFuc2l0aW9uUHJvZHVjdGlvblJhdGVzW21vcl0sIDEpLFxuICAgICAgICAgICAgZGVmYXVsdDogMSxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoXywgZGF0YSkgPT4gZGF0YSA+PSAwLFxuICAgICAgICAgICAgc2V0RGF0YTogKG1vciwgZGF0YSkgPT5cbiAgICAgICAgICAgICAgICBwcm9wcy5jaGFuZ2VDb250ZW50KChjb250ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQudHJhbnNpdGlvblByb2R1Y3Rpb25SYXRlc1ttb3JdID0gZGF0YTtcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgXTtcblxuICAgIC8vIEZpbmFsbHksIHRoZSBjYXNlIE1hc3NDb25zZXJ2YXRpb25UeXBlID0gVW5iYWxhbmNlZChQZXJQbGFjZSlcbiAgICBjb25zdCBtb3JJbnB1dHNTY2hlbWEgPSAoKTogQ29sdW1uU2NoZW1hPFtRdWFsaWZpZWROYW1lLCBRdWFsaWZpZWROYW1lXT5bXSA9PiBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgaGVhZGVyOiB0cnVlLFxuICAgICAgICAgICAgY29udGVudDogKFttb3IsIGlucHV0XSkgPT5cbiAgICAgICAgICAgICAgICAoZWxhYm9yYXRlZE1vZGVsKCk/Lm9iR2VuZXJhdG9yTGFiZWwoaW5wdXQpPy5qb2luKFwiLlwiKSA/PyBcIlwiKSArXG4gICAgICAgICAgICAgICAgXCIg4oaSIFwiICtcbiAgICAgICAgICAgICAgICBcIltcIiArXG4gICAgICAgICAgICAgICAgKG1vckxhYmVsT3JEZWZhdWx0KG1vciwgZWxhYm9yYXRlZE1vZGVsKCkpID8/IFwiXCIpICtcbiAgICAgICAgICAgICAgICBcIl1cIixcbiAgICAgICAgfSxcbiAgICAgICAgY3JlYXRlTnVtZXJpY2FsQ29sdW1uKHtcbiAgICAgICAgICAgIG5hbWU6IFwiQ29uc3VtcHRpb24gKPCdnIUpXCIsXG4gICAgICAgICAgICBkYXRhOiAoW21vciwgaW5wdXRdKSA9PiBwcm9wcy5jb250ZW50LnBsYWNlQ29uc3VtcHRpb25SYXRlc1ttb3JdPy5baW5wdXRdLFxuICAgICAgICAgICAgd2FzOiBiYXNlbGluZVZhbHVlKFxuICAgICAgICAgICAgICAgIChiYXNlbGluZSwgW21vciwgaW5wdXRdKSA9PiBiYXNlbGluZS5wbGFjZUNvbnN1bXB0aW9uUmF0ZXNbbW9yXT8uW2lucHV0XSxcbiAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IDEsXG4gICAgICAgICAgICB2YWxpZGF0ZTogKF8sIGRhdGEpID0+IGRhdGEgPj0gMCxcbiAgICAgICAgICAgIHNldERhdGE6IChbbW9yLCBpbnB1dF0sIGRhdGEpID0+XG4gICAgICAgICAgICAgICAgcHJvcHMuY2hhbmdlQ29udGVudCgoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudC5wbGFjZUNvbnN1bXB0aW9uUmF0ZXNbbW9yXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5wbGFjZUNvbnN1bXB0aW9uUmF0ZXNbbW9yXVtpbnB1dF0gPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudC5wbGFjZUNvbnN1bXB0aW9uUmF0ZXNbbW9yXSA9IHsgW2lucHV0XTogZGF0YSB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgIF07XG4gICAgY29uc3QgbW9yT3V0cHV0c1NjaGVtYSA9ICgpOiBDb2x1bW5TY2hlbWE8W1F1YWxpZmllZE5hbWUsIFF1YWxpZmllZE5hbWVdPltdID0+IFtcbiAgICAgICAge1xuICAgICAgICAgICAgY29udGVudFR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICBoZWFkZXI6IHRydWUsXG4gICAgICAgICAgICBjb250ZW50OiAoW21vciwgb3V0cHV0XSkgPT5cbiAgICAgICAgICAgICAgICBcIltcIiArXG4gICAgICAgICAgICAgICAgKG1vckxhYmVsT3JEZWZhdWx0KG1vciwgZWxhYm9yYXRlZE1vZGVsKCkpID8/IFwiXCIpICtcbiAgICAgICAgICAgICAgICBcIl1cIiArXG4gICAgICAgICAgICAgICAgXCIg4oaSIFwiICtcbiAgICAgICAgICAgICAgICAoZWxhYm9yYXRlZE1vZGVsKCk/Lm9iR2VuZXJhdG9yTGFiZWwob3V0cHV0KT8uam9pbihcIi5cIikgPz8gXCJcIiksXG4gICAgICAgIH0sXG4gICAgICAgIGNyZWF0ZU51bWVyaWNhbENvbHVtbih7XG4gICAgICAgICAgICBuYW1lOiBcIlByb2R1Y3Rpb24gKPCdnIwpXCIsXG4gICAgICAgICAgICBkYXRhOiAoW21vciwgb3V0cHV0XSkgPT4gcHJvcHMuY29udGVudC5wbGFjZVByb2R1Y3Rpb25SYXRlc1ttb3JdPy5bb3V0cHV0XSxcbiAgICAgICAgICAgIHdhczogYmFzZWxpbmVWYWx1ZShcbiAgICAgICAgICAgICAgICAoYmFzZWxpbmUsIFttb3IsIG91dHB1dF0pID0+IGJhc2VsaW5lLnBsYWNlUHJvZHVjdGlvblJhdGVzW21vcl0/LltvdXRwdXRdLFxuICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgZGVmYXVsdDogMSxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoXywgZGF0YSkgPT4gZGF0YSA+PSAwLFxuICAgICAgICAgICAgc2V0RGF0YTogKFttb3IsIG91dHB1dF0sIGRhdGEpID0+XG4gICAgICAgICAgICAgICAgcHJvcHMuY2hhbmdlQ29udGVudCgoY29udGVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGVudC5wbGFjZVByb2R1Y3Rpb25SYXRlc1ttb3JdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LnBsYWNlUHJvZHVjdGlvblJhdGVzW21vcl1bb3V0cHV0XSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50LnBsYWNlUHJvZHVjdGlvblJhdGVzW21vcl0gPSB7IFtvdXRwdXRdOiBkYXRhIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgfSksXG4gICAgXTtcblxuICAgIC8vIE5vdyB3ZSBjYW4gZ2VuZXJhdGUgdGhlIHBhcmFtZXRlciB0YWJsZXMgdGhhdCB3aWxsIGFjdHVhbGx5IGJlIHJlbmRlcmVkLlxuICAgIGNvbnN0IFBhcmFtZXRlclRhYmxlcyA9ICgpID0+IChcbiAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICAgIDxNYXRjaCB3aGVuPXtwcm9wcy5jb250ZW50Lm1hc3NDb25zZXJ2YXRpb25UeXBlLnR5cGUgPT09IFwiQmFsYW5jZWRcIn0+XG4gICAgICAgICAgICAgICAgPEZpeGVkVGFibGVFZGl0b3Igcm93cz17bW9yR2VuZXJhdG9ycygpfSBzY2hlbWE9e21vclNjaGVtYSgpfSAvPlxuICAgICAgICAgICAgPC9NYXRjaD5cbiAgICAgICAgICAgIDxNYXRjaFxuICAgICAgICAgICAgICAgIHdoZW49e1xuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jb250ZW50Lm1hc3NDb25zZXJ2YXRpb25UeXBlLnR5cGUgPT09IFwiVW5iYWxhbmNlZFwiICYmXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNvbnRlbnQubWFzc0NvbnNlcnZhdGlvblR5cGUuZ3JhbnVsYXJpdHkgPT09IFwiUGVyVHJhbnNpdGlvblwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGaXhlZFRhYmxlRWRpdG9yIHJvd3M9e21vckdlbmVyYXRvcnMoKX0gc2NoZW1hPXttb3JJbnB1dFNjaGVtYSgpfSAvPlxuICAgICAgICAgICAgICAgIDxGaXhlZFRhYmxlRWRpdG9yIHJvd3M9e21vckdlbmVyYXRvcnMoKX0gc2NoZW1hPXttb3JPdXRwdXRTY2hlbWEoKX0gLz5cbiAgICAgICAgICAgIDwvTWF0Y2g+XG4gICAgICAgICAgICA8TWF0Y2hcbiAgICAgICAgICAgICAgICB3aGVuPXtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuY29udGVudC5tYXNzQ29uc2VydmF0aW9uVHlwZS50eXBlID09PSBcIlVuYmFsYW5jZWRcIiAmJlxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jb250ZW50Lm1hc3NDb25zZXJ2YXRpb25UeXBlLmdyYW51bGFyaXR5ID09PSBcIlBlclBsYWNlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEZpeGVkVGFibGVFZGl0b3Igcm93cz17bW9yR2VuZXJhdG9yc0lucHV0cygpfSBzY2hlbWE9e21vcklucHV0c1NjaGVtYSgpfSAvPlxuICAgICAgICAgICAgICAgIDxGaXhlZFRhYmxlRWRpdG9yIHJvd3M9e21vckdlbmVyYXRvcnNPdXRwdXRzKCl9IHNjaGVtYT17bW9yT3V0cHV0c1NjaGVtYSgpfSAvPlxuICAgICAgICAgICAgPC9NYXRjaD5cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgKTtcblxuICAgIC8vIEZpbmFsbHksIHdlIG5lZWQgdGhlIGR1cmF0aW9uLCBhbmQgdGhlbiB3ZSBjYW4gcmV0dXJuIGV2ZXJ5dGhpbmcuXG4gICAgY29uc3QgdG9wbGV2ZWxTY2hlbWEgPSAoKTogQ29sdW1uU2NoZW1hPG51bGw+W10gPT4gW1xuICAgICAgICBjcmVhdGVOdW1lcmljYWxDb2x1bW4oe1xuICAgICAgICAgICAgbmFtZTogXCJEdXJhdGlvblwiLFxuICAgICAgICAgICAgZGF0YTogKF8pID0+IHByb3BzLmNvbnRlbnQuZHVyYXRpb24sXG4gICAgICAgICAgICB3YXM6IGJhc2VsaW5lVmFsdWUoKGJhc2VsaW5lKSA9PiBiYXNlbGluZS5kdXJhdGlvbiksXG4gICAgICAgICAgICB2YWxpZGF0ZTogKF8sIGRhdGEpID0+IGRhdGEgPj0gMCxcbiAgICAgICAgICAgIHNldERhdGE6IChfLCBkYXRhKSA9PlxuICAgICAgICAgICAgICAgIHByb3BzLmNoYW5nZUNvbnRlbnQoKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudC5kdXJhdGlvbiA9IGRhdGE7XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgIH0pLFxuICAgIF07XG5cbiAgICBjb25zdCByZXN1bHQgPSBjcmVhdGVNb2RlbE9ERVBsb3RXaXRoRXF1YXRpb25zKFxuICAgICAgICAoKSA9PiBwcm9wcy5saXZlTW9kZWwudmFsaWRhdGVkTW9kZWwoKSxcbiAgICAgICAgKG1vZGVsKSA9PiBwcm9wcy5zaW11bGF0ZShtb2RlbCwgcHJvcHMuY29udGVudCksXG4gICAgKTtcblxuICAgIGNvbnN0IHBsb3RSZXN1bHQgPSAoKSA9PiByZXN1bHQoKT8ucGxvdERhdGE7XG4gICAgY29uc3QgbGF0ZXhFcXVhdGlvbnMgPSAoKSA9PiByZXN1bHQoKT8ubGF0ZXhFcXVhdGlvbnMgPz8gW107XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzPVwic2ltdWxhdGlvblwiPlxuICAgICAgICAgICAgPEJsb2NrVGl0bGVcbiAgICAgICAgICAgICAgICB0aXRsZT17cHJvcHMudGl0bGV9XG4gICAgICAgICAgICAgICAgc2V0dGluZ3NQYW5lPXtcbiAgICAgICAgICAgICAgICAgICAgPE1hc3NBY3Rpb25Db25maWdGb3JtXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25maWc9e3Byb3BzLmNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VDb25maWc9e3Byb3BzLmNoYW5nZUNvbnRlbnR9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVHcmFudWxhcml0eT17cHJvcHMucmF0ZXNIYXZlR3JhbnVsYXJpdHl9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxGb2xkYWJsZSB0aXRsZT1cIlBhcmFtZXRlcnNcIiBkZWZhdWx0RXhwYW5kZWQ+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBhcmFtZXRlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPEZpeGVkVGFibGVFZGl0b3Igcm93cz17b2JHZW5lcmF0b3JzKCl9IHNjaGVtYT17b2JTY2hlbWEoKX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPFBhcmFtZXRlclRhYmxlcyAvPlxuICAgICAgICAgICAgICAgICAgICA8Rml4ZWRUYWJsZUVkaXRvciByb3dzPXtbbnVsbF19IHNjaGVtYT17dG9wbGV2ZWxTY2hlbWEoKX0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvRm9sZGFibGU+XG4gICAgICAgICAgICA8Rm9sZGFibGUgdGl0bGU9XCJFcXVhdGlvbnNcIj5cbiAgICAgICAgICAgICAgICA8RXhwYW5kYWJsZVRhYmxlXG4gICAgICAgICAgICAgICAgICAgIHRocmVzaG9sZD17MjB9XG4gICAgICAgICAgICAgICAgICAgIHJvd3M9e2xhdGV4RXF1YXRpb25zKCl9XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbnM9e1tcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgY2VsbDogKHJvdykgPT4gPEthdGV4RGlzcGxheSBtYXRoPXtyb3cubGhzfSAvPiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBjZWxsOiAoKSA9PiA8S2F0ZXhEaXNwbGF5IG1hdGg9XCI9XCIgLz4gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgY2VsbDogKHJvdykgPT4gPEthdGV4RGlzcGxheSBtYXRoPXtyb3cucmhzfSAvPiB9LFxuICAgICAgICAgICAgICAgICAgICBdfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0ZvbGRhYmxlPlxuICAgICAgICAgICAgPEZvbGRhYmxlIHRpdGxlPVwiU2ltdWxhdGlvblwiIGRlZmF1bHRFeHBhbmRlZD5cbiAgICAgICAgICAgICAgICA8T0RFUmVzdWx0UGxvdCByZXN1bHQ9e3Bsb3RSZXN1bHQoKX0gLz5cbiAgICAgICAgICAgIDwvRm9sZGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiTWFzc0FjdGlvbiIsInByb3BzIiwiZWxhYm9yYXRlZE1vZGVsIiwibGl2ZU1vZGVsIiwiYmFzZWxpbmVWYWx1ZSIsImRhdGEiLCJkZmx0Iiwicm93IiwiYmFzZWxpbmUiLCJiYXNlbGluZUNvbnRlbnQiLCJ1bmRlZmluZWQiLCJvYkdlbmVyYXRvcnMiLCJjcmVhdGVNZW1vIiwibW9kZWwiLCJzdGF0ZVR5cGUiLCJvYkdlbmVyYXRvcnNXaXRoVHlwZSIsIm9iU2NoZW1hIiwiY29udGVudFR5cGUiLCJoZWFkZXIiLCJjb250ZW50IiwiaWQiLCJvYkdlbmVyYXRvckxhYmVsIiwiam9pbiIsImNyZWF0ZU51bWVyaWNhbENvbHVtbiIsIm5hbWUiLCJpbml0aWFsVmFsdWVzIiwid2FzIiwidmFsaWRhdGUiLCJfIiwic2V0RGF0YSIsImNoYW5nZUNvbnRlbnQiLCJtb3JHZW5lcmF0b3JzIiwidHJhbnNpdGlvblR5cGUiLCJtb3JHZW5lcmF0b3JzV2l0aFR5cGUiLCJtb3JHZW5lcmF0b3JzSW50ZXJmYWNlcyIsIk1hcCIsInRyYW5zaXRpb25JbnRlcmZhY2UiLCJtZyIsIm1vciIsIm1vclByZXNlbnRhdGlvbiIsImlucHV0cyIsImNvbGxlY3RQcm9kdWN0IiwiZG9tIiwibWFwIiwib2IiLCJpbnZhcmlhbnQiLCJ0YWciLCJvdXRwdXRzIiwiY29kIiwic2V0IiwibW9yR2VuZXJhdG9yc0lucHV0cyIsIm1vcnBoaXNtSW5wdXRQYWlycyIsImludCIsImVudHJpZXMiLCJpbnAiLCJwdXNoIiwibW9yR2VuZXJhdG9yc091dHB1dHMiLCJtb3JwaGlzbU91dHB1dFBhaXJzIiwib3V0cCIsIm1vclNjaGVtYSIsIm1vckdlbmVyYXRvckxhYmVsIiwicmF0ZXMiLCJkZWZhdWx0IiwibW9ySW5wdXRTY2hlbWEiLCJ0cmFuc2l0aW9uQ29uc3VtcHRpb25SYXRlcyIsIm1vck91dHB1dFNjaGVtYSIsInRyYW5zaXRpb25Qcm9kdWN0aW9uUmF0ZXMiLCJtb3JJbnB1dHNTY2hlbWEiLCJpbnB1dCIsIm1vckxhYmVsT3JEZWZhdWx0IiwicGxhY2VDb25zdW1wdGlvblJhdGVzIiwibW9yT3V0cHV0c1NjaGVtYSIsIm91dHB1dCIsInBsYWNlUHJvZHVjdGlvblJhdGVzIiwiUGFyYW1ldGVyVGFibGVzIiwiXyRjcmVhdGVDb21wb25lbnQiLCJTd2l0Y2giLCJjaGlsZHJlbiIsIk1hdGNoIiwid2hlbiIsIm1hc3NDb25zZXJ2YXRpb25UeXBlIiwidHlwZSIsIkZpeGVkVGFibGVFZGl0b3IiLCJyb3dzIiwic2NoZW1hIiwiZ3JhbnVsYXJpdHkiLCJ0b3BsZXZlbFNjaGVtYSIsImR1cmF0aW9uIiwicmVzdWx0IiwiY3JlYXRlTW9kZWxPREVQbG90V2l0aEVxdWF0aW9ucyIsInZhbGlkYXRlZE1vZGVsIiwic2ltdWxhdGUiLCJwbG90UmVzdWx0IiwicGxvdERhdGEiLCJsYXRleEVxdWF0aW9ucyIsIl9lbCQiLCJfdG1wbCQyIiwiXyRpbnNlcnQiLCJCbG9ja1RpdGxlIiwidGl0bGUiLCJzZXR0aW5nc1BhbmUiLCJNYXNzQWN0aW9uQ29uZmlnRm9ybSIsImNvbmZpZyIsImNoYW5nZUNvbmZpZyIsImVuYWJsZUdyYW51bGFyaXR5IiwicmF0ZXNIYXZlR3JhbnVsYXJpdHkiLCJGb2xkYWJsZSIsImRlZmF1bHRFeHBhbmRlZCIsIl9lbCQyIiwiX3RtcGwkIiwiRXhwYW5kYWJsZVRhYmxlIiwidGhyZXNob2xkIiwiY29sdW1ucyIsImNlbGwiLCJLYXRleERpc3BsYXkiLCJtYXRoIiwibGhzIiwicmhzIiwiT0RFUmVzdWx0UGxvdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE2QkEsU0FBd0JBLFdBQ3BCQyxLQU9GLEVBQUE7QUFDRSxFQUFBLE1BQU1DLGVBQWtCQSxHQUFBQSxNQUFNRCxLQUFNRSxDQUFBQSxTQUFBQSxDQUFVRCxlQUFnQixFQUFBO0FBUTlELEVBQUEsTUFBTUUsYUFDRixHQUFBLENBQ0lDLElBQ0FDLEVBQUFBLElBQUFBLEdBQU8sTUFFVkMsQ0FBUSxHQUFBLEtBQUE7QUFDTCxJQUFBLE1BQU1DLFdBQVdQLEtBQU1RLENBQUFBLGVBQUFBO0FBQ3ZCLElBQUEsT0FBT0QsUUFBWUgsR0FBQUEsSUFBQUEsQ0FBS0csUUFBVUQsRUFBQUEsR0FBRyxLQUFLRCxJQUFRSSxHQUFBQSxTQUFBQTtBQUFBQSxHQUN0RDtBQUtKLEVBQU1DLE1BQUFBLFlBQUFBLEdBQWVDLFdBQTRCLE1BQU07QUFDbkQsSUFBQSxNQUFNQyxRQUFRWCxlQUFnQixFQUFBO0FBQzlCLElBQUEsSUFBSSxDQUFDVyxLQUFPLEVBQUE7QUFDUixNQUFBLE9BQU8sRUFBRTtBQUFBO0FBRWIsSUFBT1osT0FBQUEsS0FBQUEsQ0FBTWEsWUFBWUQsS0FBTUUsQ0FBQUEsb0JBQUFBLENBQXFCZCxNQUFNYSxTQUFTLENBQUEsR0FBSUQsTUFBTUYsWUFBYSxFQUFBO0FBQUEsR0FDN0YsQ0FBQTtBQUVELEVBQU1LLE1BQUFBLFFBQUFBLEdBQVdBLE1BQXFDLENBQ2xEO0FBQUEsSUFDSUMsV0FB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
