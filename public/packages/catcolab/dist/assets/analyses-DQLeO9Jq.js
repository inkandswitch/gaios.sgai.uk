const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./decapodes-DIWNHQY8.js","./analysis_tool-uDJCjaik.js","./model-hspTLkzk.js","./index-Hw8dIQCV.js","./rotate-ccw-1zG_TAet.js","./alert-BlLDgaNI.js","./block_title-Df_vYtEO.js","./foldable-Do3kvZ5j.js","./pde_plot-H6WniLnf.js","./diagram_graph-Dp3iDdeH.js","./graph_visualization-BxMR7IHU.js","./graph_visualization-BnbFtDsN.js","./download-CJ9OaILb.js","./graphviz-D3gtKZgH.js","./text_styles.module-DnOSZP5l.js","./tabular_view-Dfu9M-bM.js","./panel-DkXwkp91.js","./kuramoto-Z1iLxo9y.js","./label-GvQ4fTcU.js","./model_ode_plot-LLQrAki8.js","./linear_ode-CFYOqifC.js","./lotka_volterra-CXR4ZrAy.js","./mass_action-BHlnc4qy.js","./katex_display-7XipgjhI.js","./mass_action_config_form-CvrxZGr_.js","./mass_action_equations-CaevX590.js","./stochastic_mass_action-D8DsakZT.js","./model_graph-B3g25Jxk.js","./schema_erd-BZhLHpkh.js","./file-download-Bg6ADlqS.js","./submodel_graphs-BCRBdMtx.js","./petri_net_visualization-pKdER94v.js","./svg_styles.module-CorR5PWz.js","./reachability-B7HRAX-X.js","./stock_flow_diagram-B9TRSxzZ.js","./sql-CKBo-9xE.js","./polynomial_ode_equations-Du6I6VsH.js","./polynomial_ode_simulation-CbvuAfuB.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './index-Hw8dIQCV.js';
import { createComponent, mergeProps } from 'solid-js/web';
import { lazy } from 'solid-js';

var Engine = /* @__PURE__ */ ((Engine2) => {
  Engine2["VizDirected"] = "graphviz-directed";
  Engine2["VizUndirected"] = "graphviz-undirected";
  Engine2["Elk"] = "elk";
  return Engine2;
})(Engine || {});
var Direction$1 = /* @__PURE__ */ ((Direction2) => {
  Direction2["Horizontal"] = "horizontal";
  Direction2["Vertical"] = "vertical";
  return Direction2;
})(Direction$1 || {});
const defaultConfig = () => ({
  layout: "graphviz-directed" /* VizDirected */
});
const graphvizOptions = (config) => ({
  engine: graphvizEngine(config.layout),
  graphAttributes: config.layout === "graphviz-undirected" /* VizUndirected */ ? { overlap: "prism", sep: `${config.separation ?? 1}` } : { rankdir: graphvizRankdir(config.direction ?? "vertical" /* Vertical */) }
});
function graphvizEngine(layout) {
  switch (layout) {
    case "graphviz-directed" /* VizDirected */:
      return "dot";
    case "graphviz-undirected" /* VizUndirected */:
      return "neato";
    default:
      throw new Error(`No program in Graphviz for layout engine: ${layout}`);
  }
}
const graphvizRankdir = (direction) => {
  switch (direction) {
    case "horizontal" /* Horizontal */:
      return "LR";
    case "vertical" /* Vertical */:
      return "TB";
    default:
      throw new Error(`Unknown layout direction: ${direction}`);
  }
};
const elkOptions = (config) => ({
  "elk.direction": elkDirection(config.direction ?? "vertical" /* Vertical */)
});
const elkDirection = (direction) => {
  switch (direction) {
    case "horizontal" /* Horizontal */:
      return "RIGHT";
    case "vertical" /* Vertical */:
      return "DOWN";
    default:
      throw new Error(`Unknown layout direction: ${direction}`);
  }
};

var Direction = /* @__PURE__ */ ((Direction2) => {
  Direction2["Horizontal"] = "horizontal";
  Direction2["Vertical"] = "vertical";
  return Direction2;
})(Direction || {});
const defaultSchemaERDConfig = () => ({
  direction: "vertical" /* Vertical */
});

var SQLBackend = /* @__PURE__ */ ((SQLBackend2) => {
  SQLBackend2["MySQL"] = "MySQL";
  SQLBackend2["SQLite"] = "SQLite";
  SQLBackend2["PostgresSQL"] = "PostgresSQL";
  return SQLBackend2;
})(SQLBackend || {});

const decapodes = (options) => ({
  ...options,
  component: (props) => createComponent(Decapodes, props),
  initialContent: () => ({
    domain: null,
    mesh: null,
    initialConditions: {},
    plotVariables: {},
    scalars: {},
    duration: 10
  })
});
const Decapodes = lazy(() => __vitePreload(() => import('./decapodes-DIWNHQY8.js'),true?__vite__mapDeps([0,1,2,3,4,5,6,7,8]):undefined,import.meta.url));
const diagramGraph = (options) => ({
  ...options,
  component: (props) => createComponent(DiagramGraph, mergeProps({
    get title() {
      return options.name;
    }
  }, props)),
  initialContent: defaultConfig
});
const DiagramGraph = lazy(() => __vitePreload(() => import('./diagram_graph-Dp3iDdeH.js'),true?__vite__mapDeps([9,10,1,2,3,6,8,5,11,12,13,14]):undefined,import.meta.url));
const tabularView = (options) => ({
  ...options,
  component: (props) => createComponent(TabularView, mergeProps({
    get title() {
      return options.name;
    }
  }, props)),
  initialContent: () => ({})
});
const TabularView = lazy(() => __vitePreload(() => import('./tabular_view-Dfu9M-bM.js'),true?__vite__mapDeps([15,1,2,3,16]):undefined,import.meta.url));
function kuramoto(options) {
  const {
    id = "kuramoto",
    name = "Kuramoto dynamics",
    description = "Simulate the system using the Kuramoto dynamical model",
    help = "kuramoto",
    simulate
  } = options;
  return {
    id,
    name,
    description,
    help,
    component: (props) => createComponent(Kuramoto, mergeProps({
      simulate,
      title: name,
      get couplingLabel() {
        return options.parameterLabels?.coupling;
      },
      get dampingLabel() {
        return options.parameterLabels?.damping;
      },
      get forcingLabel() {
        return options.parameterLabels?.forcing;
      }
    }, props)),
    initialContent: () => ({
      order: "second",
      couplingCoefficients: {},
      dampingCoefficients: {},
      forcingParameters: {},
      initialPhases: {},
      initialFrequencies: {},
      duration: 10
    })
  };
}
const Kuramoto = lazy(() => __vitePreload(() => import('./kuramoto-Z1iLxo9y.js'),true?__vite__mapDeps([17,1,2,3,6,7,18,8,5,19]):undefined,import.meta.url));
function linearODE(options) {
  const {
    id = "linear-ode",
    name = "Linear ODE dynamics",
    description = "Simulate the system using a constant-coefficient linear first-order ODE",
    help = "linear-ode",
    simulate
  } = options;
  return {
    id,
    name,
    description,
    help,
    component: (props) => createComponent(LinearODE, mergeProps({
      simulate,
      title: name
    }, props)),
    initialContent: () => ({
      coefficients: {},
      initialValues: {},
      duration: 10
    })
  };
}
const LinearODE = lazy(() => __vitePreload(() => import('./linear_ode-CFYOqifC.js'),true?__vite__mapDeps([20,1,2,3,6,7,18,8,5,19]):undefined,import.meta.url));
function lotkaVolterra(options) {
  const {
    id = "lotka-volterra",
    name = "Lotka-Volterra dynamics",
    description = "Simulate the system using a Lotka-Volterra ODE",
    help = "lotka-volterra",
    simulate
  } = options;
  return {
    id,
    name,
    description,
    help,
    component: (props) => createComponent(LotkaVolterra, mergeProps({
      simulate,
      title: name
    }, props)),
    initialContent: () => ({
      interactionCoefficients: {},
      growthRates: {},
      initialValues: {},
      duration: 10
    })
  };
}
const LotkaVolterra = lazy(() => __vitePreload(() => import('./lotka_volterra-CXR4ZrAy.js'),true?__vite__mapDeps([21,1,2,3,6,7,18,8,5,19]):undefined,import.meta.url));
function massAction(options) {
  const {
    id = "mass-action",
    name = "Mass-action dynamics",
    description = "Simulate the system using the law of mass action",
    help = "mass-action",
    ...otherOptions
  } = options;
  return {
    id,
    name,
    description,
    help,
    component: (props) => createComponent(MassAction, mergeProps({
      title: name
    }, otherOptions, props)),
    initialContent: () => ({
      massConservationType: {
        type: "Balanced"
      },
      rates: {},
      transitionProductionRates: {},
      transitionConsumptionRates: {},
      placeProductionRates: {},
      placeConsumptionRates: {},
      initialValues: {},
      duration: 10
    })
  };
}
const MassAction = lazy(() => __vitePreload(() => import('./mass_action-BHlnc4qy.js'),true?__vite__mapDeps([22,1,2,3,6,7,23,18,8,5,24,19]):undefined,import.meta.url));
function massActionEquations(options) {
  const {
    id = "mass-action-equations",
    name = "Mass-action dynamics equations",
    description = "Display the symbolic mass-action dynamics equations",
    help = "mass-action-equations",
    ...otherOptions
  } = options;
  return {
    id,
    name,
    description,
    help,
    component: (props) => createComponent(MassActionEquationsDisplay, mergeProps({
      title: name
    }, otherOptions, props)),
    initialContent: () => ({
      massConservationType: {
        type: "Balanced"
      }
    })
  };
}
const MassActionEquationsDisplay = lazy(() => __vitePreload(() => import('./mass_action_equations-CaevX590.js'),true?__vite__mapDeps([25,1,2,3,6,23,24,19]):undefined,import.meta.url));
function stochasticMassAction(options) {
  const {
    id = "stochastic-mass-action",
    name = "Stochastic mass-action dynamics",
    description = "Simulate the system using stochastic mass-action dynamics",
    help = "stochastic-mass-action",
    ...otherOptions
  } = options;
  return {
    id,
    name,
    description,
    help,
    component: (props) => createComponent(StochasticMassAction, mergeProps({
      title: name
    }, otherOptions, props)),
    initialContent: () => ({
      rates: {},
      initialValues: {},
      seed: null,
      duration: 10
    })
  };
}
const StochasticMassAction = lazy(() => __vitePreload(() => import('./stochastic_mass_action-D8DsakZT.js'),true?__vite__mapDeps([26,4,1,2,3,6,7,18,8,5,19]):undefined,import.meta.url));
const modelGraph = (options) => ({
  ...options,
  component: (props) => createComponent(ModelGraph, mergeProps({
    get title() {
      return options.name;
    }
  }, props)),
  initialContent: defaultConfig
});
const ModelGraph = lazy(() => __vitePreload(() => import('./model_graph-B3g25Jxk.js'),true?__vite__mapDeps([27,10,1,2,3,6,8,5,11,12,13,14]):undefined,import.meta.url));
const schemaERD = (options) => ({
  ...options,
  component: (props) => createComponent(SchemaERD, props),
  initialContent: defaultSchemaERDConfig
});
const SchemaERD = lazy(() => __vitePreload(() => import('./schema_erd-BZhLHpkh.js'),true?__vite__mapDeps([28,29,1,2,3,12,6,8,5,13]):undefined,import.meta.url));
function motifFinding(options) {
  const {
    id,
    name,
    description,
    help,
    findMotifs
  } = options;
  return {
    id,
    name,
    description,
    help,
    component: (props) => createComponent(SubmodelGraphs, mergeProps({
      title: name,
      findSubmodels: findMotifs
    }, props)),
    initialContent: () => ({
      activeIndex: 0,
      enableMaxPathLength: true,
      maxPathLength: 5
    })
  };
}
const SubmodelGraphs = lazy(() => __vitePreload(() => import('./submodel_graphs-BCRBdMtx.js'),true?__vite__mapDeps([30,1,2,3,6,8,5,13,10,11,12,14,27]):undefined,import.meta.url));
const petriNetVisualization = (options) => ({
  ...options,
  component: PetriNetVisualization,
  initialContent: defaultConfig
});
const PetriNetVisualization = lazy(() => __vitePreload(() => import('./petri_net_visualization-pKdER94v.js'),true?__vite__mapDeps([31,1,2,3,10,6,8,5,11,12,13,14,32]):undefined,import.meta.url));
function reachability(options) {
  const {
    id = "subreachability",
    name = "Sub-reachability check",
    description = "Check that forbidden tokenings are unreachable",
    help = "subreachability",
    ...otherOptions
  } = options;
  return {
    id,
    name,
    description,
    help,
    component: (props) => createComponent(Reachability, mergeProps({
      title: name
    }, otherOptions, props)),
    initialContent: () => ({
      tokens: {},
      forbidden: {}
    })
  };
}
const Reachability = lazy(() => __vitePreload(() => import('./reachability-B7HRAX-X.js'),true?__vite__mapDeps([33,1,2,3,16]):undefined,import.meta.url));
const stockFlowDiagram = (options) => ({
  ...options,
  component: StockFlowDiagram,
  initialContent: defaultConfig
});
const StockFlowDiagram = lazy(() => __vitePreload(() => import('./stock_flow_diagram-B9TRSxzZ.js'),true?__vite__mapDeps([34,1,2,3,11,8,5,12,10,6,13,14,27,32]):undefined,import.meta.url));
function renderSQL(options) {
  const {
    id = "sql",
    name = "SQL schema",
    description = "Produce SQL DML from this schema",
    help = "sql",
    render
  } = options;
  return {
    id,
    name,
    description,
    help,
    component: (props) => createComponent(SQLSchemaAnalysis, mergeProps({
      title: name,
      render
    }, props)),
    initialContent: () => ({
      backend: SQLBackend.PostgresSQL,
      filename: "schema.sql"
    })
  };
}
const SQLSchemaAnalysis = lazy(() => __vitePreload(() => import('./sql-CKBo-9xE.js'),true?__vite__mapDeps([35,29,1,2,3,12,5,6]):undefined,import.meta.url));
function polynomialODEEquations(options) {
  const {
    id = "polynomial-ode-equations",
    name = "Polynomial ODE equations",
    description = "Display the symbolic equations",
    help = "polynomial-ode-equations",
    ...otherOptions
  } = options;
  return {
    id,
    name,
    description,
    help,
    component: (props) => createComponent(PolynomialODEEquationsDisplay, mergeProps({
      title: name
    }, otherOptions, props)),
    initialContent: () => ({
      trivialData: true
    })
  };
}
const PolynomialODEEquationsDisplay = lazy(() => __vitePreload(() => import('./polynomial_ode_equations-Du6I6VsH.js'),true?__vite__mapDeps([36,1,2,3,6,23,19]):undefined,import.meta.url));
function polynomialODESimulation(options) {
  const {
    id = "polynomial-ode-simulation",
    name = "Polynomial ODE simulation",
    description = "Simulate the system",
    help = "polynomial-ode-simulation",
    ...otherOptions
  } = options;
  return {
    id,
    name,
    description,
    help,
    component: (props) => createComponent(PolynomialODESimulation, mergeProps({
      title: name
    }, otherOptions, props)),
    initialContent: () => ({
      coefficients: {},
      initialValues: {},
      duration: 10
    })
  };
}
const PolynomialODESimulation = lazy(() => __vitePreload(() => import('./polynomial_ode_simulation-CbvuAfuB.js'),true?__vite__mapDeps([37,1,2,3,6,7,23,8,5,19]):undefined,import.meta.url));

export { Direction$1 as D, Engine as E, SQLBackend as S, massAction as a, massActionEquations as b, stochasticMassAction as c, diagramGraph as d, reachability as e, polynomialODEEquations as f, polynomialODESimulation as g, motifFinding as h, lotkaVolterra as i, stockFlowDiagram as j, decapodes as k, linearODE as l, modelGraph as m, kuramoto as n, graphvizOptions as o, petriNetVisualization as p, elkOptions as q, renderSQL as r, schemaERD as s, tabularView as t, Direction as u };


//# sourceMappingURL=data:application/json;base64,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S0FBT0M7QUFBQUEsS0FBSSxDQUFNZ0MsYUFBa0IvQyxPQUFLLENBQzFFO0FBQUEsQ0FDREcsbUJBQWdCQSxDQUFPO0FBQUEsTUFDbkJzRixXQUFhO0FBQUEsQ0FDakI7QUFBQSxDQUNKO0FBQ0o7QUFDQSxLQUFNRCw4QkFBZ0M5RSxRQUFLLDBCQUFNLE1BQU8seUNBQXFDLENBQUM7QUFFdkYsUUFBU2dGLHlCQUNaNUYsT0FNc0Q7QUFDdEQsRUFBTTtBQUFBLENBQ0ZzQixLQUFLO0FBQUEsQ0FDTEwsT0FBTztBQUFBLENBQ1BNLGNBQWM7QUFBQSxDQUNkQyxPQUFPO0FBQUEsSUFDUCxDQUFHeUI7QUFBQUEsR0FDSGpEO0FBQ0osRUFBTztBQUFBLElBQ0hzQjtBQUFBQSxJQUNBTDtBQUFBQSxJQUNBTTtBQUFBQSxJQUNBQztBQUFBQSxDQUNBdkIsWUFBWUMsYUFBS0MsZUFBTTBGLHlCQUF1QjlFLFdBQUE7QUFBQSxNQUFDQyxLQUFPQztBQUFBQSxLQUFJLENBQU1nQyxhQUFrQi9DLE9BQUssQ0FBSTtBQUFBLENBQzNGRyxtQkFBZ0JBLENBQU87QUFBQSxDQUNuQnFDLG1CQUFjLENBQUM7QUFBQSxDQUNmQyxvQkFBZSxDQUFDO0FBQUEsTUFDaEJoQyxRQUFVO0FBQUEsQ0FDZDtBQUFBLENBQ0o7QUFDSjtBQUVBLEtBQU1rRix3QkFBMEJqRixRQUFLLDBCQUFNLE1BQU8sMENBQXNDLENBQUMiLCJuYW1lcyI6WyJFbmdpbmUiLCJEaXJlY3Rpb24iLCJTUUxCYWNrZW5kIiwiZGVjYXBvZGVzIiwib3B0aW9ucyIsImNvbXBvbmVudCIsInByb3BzIiwiXyRjcmVhdGVDb21wb25lbnQiLCJEZWNhcG9kZXMiLCJpbml0aWFsQ29udGVudCIsImRvbWFpbiIsIm1lc2giLCJpbml0aWFsQ29uZGl0aW9ucyIsInBsb3RWYXJpYWJsZXMiLCJzY2FsYXJzIiwiZHVyYXRpb24iLCJsYXp5IiwiZGlhZ3JhbUdyYXBoIiwiRGlhZ3JhbUdyYXBoIiwiXyRtZXJnZVByb3BzIiwidGl0bGUiLCJuYW1lIiwiR3JhcGhMYXlvdXRDb25maWciLCJ0YWJ1bGFyVmlldyIsIlRhYnVsYXJWaWV3Iiwia3VyYW1vdG8iLCJpZCIsImRlc2NyaXB0aW9uIiwiaGVscCIsInNpbXVsYXRlIiwiS3VyYW1vdG8iLCJjb3VwbGluZ0xhYmVsIiwicGFyYW1ldGVyTGFiZWxzIiwiY291cGxpbmciLCJkYW1waW5nTGFiZWwiLCJkYW1waW5nIiwiZm9yY2luZ0xhYmVsIiwiZm9yY2luZyIsIm9yZGVyIiwiY291cGxpbmdDb2VmZmljaWVudHMiLCJkYW1waW5nQ29lZmZpY2llbnRzIiwiZm9yY2luZ1BhcmFtZXRlcnMiLCJpbml0aWFsUGhhc2VzIiwiaW5pdGlhbEZyZXF1ZW5jaWVzIiwibGluZWFyT0RFIiwiTGluZWFyT0RFIiwiY29lZmZpY2llbnRzIiwiaW5pdGlhbFZhbHVlcyIsImxvdGthVm9sdGVycmEiLCJMb3RrYVZvbHRlcnJhIiwiaW50ZXJhY3Rpb25Db2VmZmljaWVudHMiLCJncm93dGhSYXRlcyIsIm1hc3NBY3Rpb24iLCJvdGhlck9wdGlvbnMiLCJNYXNzQWN0aW9uIiwibWFzc0NvbnNlcnZhdGlvblR5cGUiLCJ0eXBlIiwicmF0ZXMiLCJ0cmFuc2l0aW9uUHJvZHVjdGlvblJhdGVzIiwidHJhbnNpdGlvbkNvbnN1bXB0aW9uUmF0ZXMiLCJwbGFjZVByb2R1Y3Rpb25SYXRlcyIsInBsYWNlQ29uc3VtcHRpb25SYXRlcyIsIm1hc3NBY3Rpb25FcXVhdGlvbnMiLCJNYXNzQWN0aW9uRXF1YXRpb25zRGlzcGxheSIsInN0b2NoYXN0aWNNYXNzQWN0aW9uIiwiU3RvY2hhc3RpY01hc3NBY3Rpb24iLCJzZWVkIiwibW9kZWxHcmFwaCIsIk1vZGVsR3JhcGgiLCJzY2hlbWFFUkQiLCJTY2hlbWFFUkQiLCJkZWZhdWx0U2NoZW1hRVJEQ29uZmlnIiwibW90aWZGaW5kaW5nIiwiZmluZE1vdGlmcyIsIlN1Ym1vZGVsR3JhcGhzIiwiZmluZFN1Ym1vZGVscyIsImFjdGl2ZUluZGV4IiwiZW5hYmxlTWF4UGF0aExlbmd0aCIsIm1heFBhdGhMZW5ndGgiLCJwZXRyaU5ldFZpc3VhbGl6YXRpb24iLCJQZXRyaU5ldFZpc3VhbGl6YXRpb24iLCJyZWFjaGFiaWxpdHkiLCJSZWFjaGFiaWxpdHkiLCJ0b2tlbnMiLCJmb3JiaWRkZW4iLCJzdG9ja0Zsb3dEaWFncmFtIiwiU3RvY2tGbG93RGlhZ3JhbSIsInJlbmRlclNRTCIsInJlbmRlciIsIlNRTFNjaGVtYUFuYWx5c2lzIiwiYmFja2VuZCIsIlBvc3RncmVzU1FMIiwiZmlsZW5hbWUiLCJwb2x5bm9taWFsT0RFRXF1YXRpb25zIiwiUG9seW5vbWlhbE9ERUVxdWF0aW9uc0Rpc3BsYXkiLCJ0cml2aWFsRGF0YSIsInBvbHlub21pYWxPREVTaW11bGF0aW9uIiwiUG9seW5vbWlhbE9ERVNpbXVsYXRpb24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vZnJvbnRlbmQvc3JjL3Zpc3VhbGl6YXRpb24vZ3JhcGhfbGF5b3V0X2NvbmZpZy50cyIsIi4uLy4uLy4uL2Zyb250ZW5kL3NyYy9zdGRsaWIvYW5hbHlzZXMvc2NoZW1hX2VyZF9jb25maWcudHMiLCIuLi8uLi8uLi9mcm9udGVuZC9zcmMvc3RkbGliL2FuYWx5c2VzL3NxbF90eXBlcy50cyIsIi4uLy4uLy4uL2Zyb250ZW5kL3NyYy9zdGRsaWIvYW5hbHlzZXMudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlICogYXMgVml6IGZyb20gXCJAdml6LWpzL3ZpelwiO1xuaW1wb3J0IHR5cGUgKiBhcyBFbGsgZnJvbSBcImVsa2pzXCI7XG5cbi8qKiBDb25maWd1cmF0aW9uIG9mIGEgZ3JhcGggbGF5b3V0IGFsZ29yaXRobSBzdXBwb3J0ZWQgYnkgQ2F0Q29sYWIuICovXG5leHBvcnQgdHlwZSBDb25maWcgPSB7XG4gICAgLyoqIEVuZ2luZSB0byB1c2UgZm9yIGdyYXBoIGxheW91dC4gKi9cbiAgICBsYXlvdXQ6IEVuZ2luZTtcblxuICAgIC8qKiBQcmltYXJ5IGxheW91dCBkaXJlY3Rpb24sIHdoZW4gYXBwbGljYWJsZS4gKi9cbiAgICBkaXJlY3Rpb24/OiBEaXJlY3Rpb247XG5cbiAgICAvKiogTm9kZSBzZXBhcmF0aW9uIGZvciB1bmRpcmVjdGVkIChuZWF0bykgbGF5b3V0LCBpbiBpbmNoZXMuIERlZmF1bHRzIHRvIDEuMC4gKi9cbiAgICBzZXBhcmF0aW9uPzogbnVtYmVyO1xufTtcblxuLyoqIEVuZ2luZXMgc3VwcG9ydGVkIGZvciBncmFwaCBsYXlvdXQuICovXG5leHBvcnQgZW51bSBFbmdpbmUge1xuICAgIC8qKiBHcmFwaHZpeiB3aXRoIGRpcmVjdGVkIGxheW91dCAocHJvZ3JhbTogYGRvdGApLiAqL1xuICAgIFZpekRpcmVjdGVkID0gXCJncmFwaHZpei1kaXJlY3RlZFwiLFxuICAgIC8qKiBHcmFwaHZpeiB3aXRoIHVuZGlyZWN0ZWQgbGF5b3V0IChwcm9ncmFtOiBgbmVhdG9gKS4gKi9cbiAgICBWaXpVbmRpcmVjdGVkID0gXCJncmFwaHZpei11bmRpcmVjdGVkXCIsXG4gICAgLyoqIEVMSywgYSBkaXJlY3RlZCBsYXlvdXQuICovXG4gICAgRWxrID0gXCJlbGtcIixcbn1cblxuLyoqIExheW91dCBkaXJlY3Rpb24gZm9yIGdyYXBoIGxheW91dHMgd2l0aCBhIHByaW1hcnkvcHJlZmVycmVkIGRpcmVjdGlvbi4gKi9cbmV4cG9ydCBlbnVtIERpcmVjdGlvbiB7XG4gICAgSG9yaXpvbnRhbCA9IFwiaG9yaXpvbnRhbFwiLFxuICAgIFZlcnRpY2FsID0gXCJ2ZXJ0aWNhbFwiLFxufVxuXG4vKiogQ29uc3RydWN0IHRoZSBkZWZhdWx0IGdyYXBoIGxheW91dCBjb25maWd1cmF0aW9uLiAqL1xuZXhwb3J0IGNvbnN0IGRlZmF1bHRDb25maWcgPSAoKTogQ29uZmlnID0+ICh7XG4gICAgbGF5b3V0OiBFbmdpbmUuVml6RGlyZWN0ZWQsXG59KTtcblxuLyoqIEdlbmVyYXRlcyBhIHNldCBvZiBHcmFwaHZpeiBvcHRpb25zIGZyb20gYSBsYXlvdXQgY29uZmlnLiAqL1xuZXhwb3J0IGNvbnN0IGdyYXBodml6T3B0aW9ucyA9IChjb25maWc6IENvbmZpZyk6IFZpei5SZW5kZXJPcHRpb25zID0+ICh7XG4gICAgZW5naW5lOiBncmFwaHZpekVuZ2luZShjb25maWcubGF5b3V0KSxcbiAgICBncmFwaEF0dHJpYnV0ZXM6XG4gICAgICAgIGNvbmZpZy5sYXlvdXQgPT09IEVuZ2luZS5WaXpVbmRpcmVjdGVkXG4gICAgICAgICAgICA/IHsgb3ZlcmxhcDogXCJwcmlzbVwiLCBzZXA6IGAke2NvbmZpZy5zZXBhcmF0aW9uID8/IDEuMH1gIH1cbiAgICAgICAgICAgIDogeyByYW5rZGlyOiBncmFwaHZpelJhbmtkaXIoY29uZmlnLmRpcmVjdGlvbiA/PyBEaXJlY3Rpb24uVmVydGljYWwpIH0sXG59KTtcblxuZnVuY3Rpb24gZ3JhcGh2aXpFbmdpbmUobGF5b3V0OiBFbmdpbmUpOiBWaXouUmVuZGVyT3B0aW9uc1tcImVuZ2luZVwiXSB7XG4gICAgc3dpdGNoIChsYXlvdXQpIHtcbiAgICAgICAgY2FzZSBFbmdpbmUuVml6RGlyZWN0ZWQ6XG4gICAgICAgICAgICByZXR1cm4gXCJkb3RcIjtcbiAgICAgICAgY2FzZSBFbmdpbmUuVml6VW5kaXJlY3RlZDpcbiAgICAgICAgICAgIHJldHVybiBcIm5lYXRvXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIHByb2dyYW0gaW4gR3JhcGh2aXogZm9yIGxheW91dCBlbmdpbmU6ICR7bGF5b3V0fWApO1xuICAgIH1cbn1cblxuY29uc3QgZ3JhcGh2aXpSYW5rZGlyID0gKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgY2FzZSBEaXJlY3Rpb24uSG9yaXpvbnRhbDpcbiAgICAgICAgICAgIHJldHVybiBcIkxSXCI7XG4gICAgICAgIGNhc2UgRGlyZWN0aW9uLlZlcnRpY2FsOlxuICAgICAgICAgICAgcmV0dXJuIFwiVEJcIjtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBsYXlvdXQgZGlyZWN0aW9uOiAke2RpcmVjdGlvbn1gKTtcbiAgICB9XG59O1xuXG4vKiogR2VuZXJhdGVzIGEgc2V0IG9mIEVMSyBsYXlvdXQgb3B0aW9ucyBmcm9tIGEgbGF5b3V0IGNvbmZpZy4gKi9cbmV4cG9ydCBjb25zdCBlbGtPcHRpb25zID0gKGNvbmZpZzogQ29uZmlnKTogRWxrLkxheW91dE9wdGlvbnMgPT4gKHtcbiAgICBcImVsay5kaXJlY3Rpb25cIjogZWxrRGlyZWN0aW9uKGNvbmZpZy5kaXJlY3Rpb24gPz8gRGlyZWN0aW9uLlZlcnRpY2FsKSxcbn0pO1xuXG5jb25zdCBlbGtEaXJlY3Rpb24gPSAoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICBjYXNlIERpcmVjdGlvbi5Ib3Jpem9udGFsOlxuICAgICAgICAgICAgcmV0dXJuIFwiUklHSFRcIjtcbiAgICAgICAgY2FzZSBEaXJlY3Rpb24uVmVydGljYWw6XG4gICAgICAgICAgICByZXR1cm4gXCJET1dOXCI7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVua25vd24gbGF5b3V0IGRpcmVjdGlvbjogJHtkaXJlY3Rpb259YCk7XG4gICAgfVxufTtcbiIsIi8qKiBMYXlvdXQgZGlyZWN0aW9uIGZvciBncmFwaCBsYXlvdXRzIHdpdGggYSBwcmltYXJ5L3ByZWZlcnJlZCBkaXJlY3Rpb24uICovXG5leHBvcnQgZW51bSBEaXJlY3Rpb24ge1xuICAgIEhvcml6b250YWwgPSBcImhvcml6b250YWxcIixcbiAgICBWZXJ0aWNhbCA9IFwidmVydGljYWxcIixcbn1cblxuZXhwb3J0IHR5cGUgU2NoZW1hRVJEQ29uZmlnID0ge1xuICAgIGRpcmVjdGlvbj86IERpcmVjdGlvbjtcbn07XG5cbmV4cG9ydCBjb25zdCBkZWZhdWx0U2NoZW1hRVJEQ29uZmlnID0gKCk6IFNjaGVtYUVSRENvbmZpZyA9PiAoe1xuICAgIGRpcmVjdGlvbjogRGlyZWN0aW9uLlZlcnRpY2FsLFxufSk7XG4iLCJpbXBvcnQgdHlwZSB7IERibE1vZGVsLCBKc1Jlc3VsdCB9IGZyb20gXCJjYXRsb2ctd2FzbVwiO1xuXG5leHBvcnQgZW51bSBTUUxCYWNrZW5kIHtcbiAgICBNeVNRTCA9IFwiTXlTUUxcIixcbiAgICBTUUxpdGUgPSBcIlNRTGl0ZVwiLFxuICAgIFBvc3RncmVzU1FMID0gXCJQb3N0Z3Jlc1NRTFwiLFxufVxuXG5leHBvcnQgdHlwZSBTUUxSZW5kZXJlciA9IChtb2RlbDogRGJsTW9kZWwsIGRhdGE6IHN0cmluZykgPT4gSnNSZXN1bHQ8c3RyaW5nLCBzdHJpbmc+O1xuIiwiaW1wb3J0IHsgbGF6eSB9IGZyb20gXCJzb2xpZC1qc1wiO1xuXG5pbXBvcnQgdHlwZSB7XG4gICAgTWFzc0FjdGlvbkVxdWF0aW9uc0RhdGEsXG4gICAgTW9yVHlwZSxcbiAgICBPYlR5cGUsXG4gICAgUG9seW5vbWlhbE9ERUVxdWF0aW9uc0RhdGEsXG4gICAgU3RvY2hhc3RpY01hc3NBY3Rpb25Qcm9ibGVtRGF0YSxcbn0gZnJvbSBcImNhdGxvZy13YXNtXCI7XG5pbXBvcnQgdHlwZSB7IERpYWdyYW1BbmFseXNpc01ldGEsIE1vZGVsQW5hbHlzaXNNZXRhIH0gZnJvbSBcIi4uL3RoZW9yeVwiO1xuaW1wb3J0ICogYXMgR3JhcGhMYXlvdXRDb25maWcgZnJvbSBcIi4uL3Zpc3VhbGl6YXRpb24vZ3JhcGhfbGF5b3V0X2NvbmZpZ1wiO1xuaW1wb3J0IHR5cGUgKiBhcyBDaGVja2VycyBmcm9tIFwiLi9hbmFseXNlcy9jaGVja2VyX3R5cGVzXCI7XG5pbXBvcnQgeyBkZWZhdWx0U2NoZW1hRVJEQ29uZmlnLCB0eXBlIFNjaGVtYUVSRENvbmZpZyB9IGZyb20gXCIuL2FuYWx5c2VzL3NjaGVtYV9lcmRfY29uZmlnXCI7XG5pbXBvcnQgdHlwZSAqIGFzIFNpbXVsYXRvcnMgZnJvbSBcIi4vYW5hbHlzZXMvc2ltdWxhdG9yX3R5cGVzXCI7XG5pbXBvcnQgdHlwZSAqIGFzIFNRTERvd25sb2FkQ29uZmlnIGZyb20gXCIuL2FuYWx5c2VzL3NxbFwiO1xuaW1wb3J0IHsgU1FMQmFja2VuZCwgdHlwZSBTUUxSZW5kZXJlciB9IGZyb20gXCIuL2FuYWx5c2VzL3NxbF90eXBlc1wiO1xuXG50eXBlIEFuYWx5c2lzT3B0aW9ucyA9IHtcbiAgICBpZDogc3RyaW5nO1xuICAgIG5hbWU6IHN0cmluZztcbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICBoZWxwPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGNvbnN0IGRlY2Fwb2RlcyA9IChcbiAgICBvcHRpb25zOiBBbmFseXNpc09wdGlvbnMsXG4pOiBEaWFncmFtQW5hbHlzaXNNZXRhPFNpbXVsYXRvcnMuRGVjYXBvZGVzQW5hbHlzaXNDb250ZW50PiA9PiAoe1xuICAgIC4uLm9wdGlvbnMsXG4gICAgY29tcG9uZW50OiAocHJvcHMpID0+IDxEZWNhcG9kZXMgey4uLnByb3BzfSAvPixcbiAgICBpbml0aWFsQ29udGVudDogKCkgPT4gKHtcbiAgICAgICAgZG9tYWluOiBudWxsLFxuICAgICAgICBtZXNoOiBudWxsLFxuICAgICAgICBpbml0aWFsQ29uZGl0aW9uczoge30sXG4gICAgICAgIHBsb3RWYXJpYWJsZXM6IHt9LFxuICAgICAgICBzY2FsYXJzOiB7fSxcbiAgICAgICAgZHVyYXRpb246IDEwLFxuICAgIH0pLFxufSk7XG5cbmNvbnN0IERlY2Fwb2RlcyA9IGxhenkoKCkgPT4gaW1wb3J0KFwiLi9hbmFseXNlcy9kZWNhcG9kZXNcIikpO1xuXG5leHBvcnQgY29uc3QgZGlhZ3JhbUdyYXBoID0gKFxuICAgIG9wdGlvbnM6IEFuYWx5c2lzT3B0aW9ucyxcbik6IERpYWdyYW1BbmFseXNpc01ldGE8R3JhcGhMYXlvdXRDb25maWcuQ29uZmlnPiA9PiAoe1xuICAgIC4uLm9wdGlvbnMsXG4gICAgY29tcG9uZW50OiAocHJvcHMpID0+IDxEaWFncmFtR3JhcGggdGl0bGU9e29wdGlvbnMubmFtZX0gey4uLnByb3BzfSAvPixcbiAgICBpbml0aWFsQ29udGVudDogR3JhcGhMYXlvdXRDb25maWcuZGVmYXVsdENvbmZpZyxcbn0pO1xuXG5jb25zdCBEaWFncmFtR3JhcGggPSBsYXp5KCgpID0+IGltcG9ydChcIi4vYW5hbHlzZXMvZGlhZ3JhbV9ncmFwaFwiKSk7XG5cbmV4cG9ydCBjb25zdCB0YWJ1bGFyVmlldyA9IChcbiAgICBvcHRpb25zOiBBbmFseXNpc09wdGlvbnMsXG4pOiBEaWFncmFtQW5hbHlzaXNNZXRhPFJlY29yZDxzdHJpbmcsIG5ldmVyPj4gPT4gKHtcbiAgICAuLi5vcHRpb25zLFxuICAgIGNvbXBvbmVudDogKHByb3BzKSA9PiA8VGFidWxhclZpZXcgdGl0bGU9e29wdGlvbnMubmFtZX0gey4uLnByb3BzfSAvPixcbiAgICBpbml0aWFsQ29udGVudDogKCkgPT4gKHt9KSxcbn0pO1xuXG5jb25zdCBUYWJ1bGFyVmlldyA9IGxhenkoKCkgPT4gaW1wb3J0KFwiLi9hbmFseXNlcy90YWJ1bGFyX3ZpZXdcIikpO1xuXG5leHBvcnQgZnVuY3Rpb24ga3VyYW1vdG8oXG4gICAgb3B0aW9uczogUGFydGlhbDxBbmFseXNpc09wdGlvbnM+ICYge1xuICAgICAgICBzaW11bGF0ZTogU2ltdWxhdG9ycy5LdXJhbW90b1NpbXVsYXRvcjtcbiAgICAgICAgcGFyYW1ldGVyTGFiZWxzPzoge1xuICAgICAgICAgICAgY291cGxpbmc/OiBzdHJpbmc7XG4gICAgICAgICAgICBkYW1waW5nPzogc3RyaW5nO1xuICAgICAgICAgICAgZm9yY2luZz86IHN0cmluZztcbiAgICAgICAgfTtcbiAgICB9LFxuKTogTW9kZWxBbmFseXNpc01ldGE8U2ltdWxhdG9ycy5LdXJhbW90b1Byb2JsZW1EYXRhPiB7XG4gICAgY29uc3Qge1xuICAgICAgICBpZCA9IFwia3VyYW1vdG9cIixcbiAgICAgICAgbmFtZSA9IFwiS3VyYW1vdG8gZHluYW1pY3NcIixcbiAgICAgICAgZGVzY3JpcHRpb24gPSBcIlNpbXVsYXRlIHRoZSBzeXN0ZW0gdXNpbmcgdGhlIEt1cmFtb3RvIGR5bmFtaWNhbCBtb2RlbFwiLFxuICAgICAgICBoZWxwID0gXCJrdXJhbW90b1wiLFxuICAgICAgICBzaW11bGF0ZSxcbiAgICB9ID0gb3B0aW9ucztcbiAgICByZXR1cm4ge1xuICAgICAgICBpZCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGhlbHAsXG4gICAgICAgIGNvbXBvbmVudDogKHByb3BzKSA9PiAoXG4gICAgICAgICAgICA8S3VyYW1vdG9cbiAgICAgICAgICAgICAgICBzaW11bGF0ZT17c2ltdWxhdGV9XG4gICAgICAgICAgICAgICAgdGl0bGU9e25hbWV9XG4gICAgICAgICAgICAgICAgY291cGxpbmdMYWJlbD17b3B0aW9ucy5wYXJhbWV0ZXJMYWJlbHM/LmNvdXBsaW5nfVxuICAgICAgICAgICAgICAgIGRhbXBpbmdMYWJlbD17b3B0aW9ucy5wYXJhbWV0ZXJMYWJlbHM/LmRhbXBpbmd9XG4gICAgICAgICAgICAgICAgZm9yY2luZ0xhYmVsPXtvcHRpb25zLnBhcmFtZXRlckxhYmVscz8uZm9yY2luZ31cbiAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XG4gICAgICAgICAgICAvPlxuICAgICAgICApLFxuICAgICAgICBpbml0aWFsQ29udGVudDogKCkgPT4gKHtcbiAgICAgICAgICAgIG9yZGVyOiBcInNlY29uZFwiLFxuICAgICAgICAgICAgY291cGxpbmdDb2VmZmljaWVudHM6IHt9LFxuICAgICAgICAgICAgZGFtcGluZ0NvZWZmaWNpZW50czoge30sXG4gICAgICAgICAgICBmb3JjaW5nUGFyYW1ldGVyczoge30sXG4gICAgICAgICAgICBpbml0aWFsUGhhc2VzOiB7fSxcbiAgICAgICAgICAgIGluaXRpYWxGcmVxdWVuY2llczoge30sXG4gICAgICAgICAgICBkdXJhdGlvbjogMTAsXG4gICAgICAgIH0pLFxuICAgIH07XG59XG5cbmNvbnN0IEt1cmFtb3RvID0gbGF6eSgoKSA9PiBpbXBvcnQoXCIuL2FuYWx5c2VzL2t1cmFtb3RvXCIpKTtcblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmVhck9ERShcbiAgICBvcHRpb25zOiBQYXJ0aWFsPEFuYWx5c2lzT3B0aW9ucz4gJiB7XG4gICAgICAgIHNpbXVsYXRlOiBTaW11bGF0b3JzLkxpbmVhck9ERVNpbXVsYXRvcjtcbiAgICB9LFxuKTogTW9kZWxBbmFseXNpc01ldGE8U2ltdWxhdG9ycy5MaW5lYXJPREVQcm9ibGVtRGF0YT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgaWQgPSBcImxpbmVhci1vZGVcIixcbiAgICAgICAgbmFtZSA9IFwiTGluZWFyIE9ERSBkeW5hbWljc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbiA9IFwiU2ltdWxhdGUgdGhlIHN5c3RlbSB1c2luZyBhIGNvbnN0YW50LWNvZWZmaWNpZW50IGxpbmVhciBmaXJzdC1vcmRlciBPREVcIixcbiAgICAgICAgaGVscCA9IFwibGluZWFyLW9kZVwiLFxuICAgICAgICBzaW11bGF0ZSxcbiAgICB9ID0gb3B0aW9ucztcbiAgICByZXR1cm4ge1xuICAgICAgICBpZCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGhlbHAsXG4gICAgICAgIGNvbXBvbmVudDogKHByb3BzKSA9PiA8TGluZWFyT0RFIHNpbXVsYXRlPXtzaW11bGF0ZX0gdGl0bGU9e25hbWV9IHsuLi5wcm9wc30gLz4sXG4gICAgICAgIGluaXRpYWxDb250ZW50OiAoKSA9PiAoe1xuICAgICAgICAgICAgY29lZmZpY2llbnRzOiB7fSxcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM6IHt9LFxuICAgICAgICAgICAgZHVyYXRpb246IDEwLFxuICAgICAgICB9KSxcbiAgICB9O1xufVxuXG5jb25zdCBMaW5lYXJPREUgPSBsYXp5KCgpID0+IGltcG9ydChcIi4vYW5hbHlzZXMvbGluZWFyX29kZVwiKSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBsb3RrYVZvbHRlcnJhKFxuICAgIG9wdGlvbnM6IFBhcnRpYWw8QW5hbHlzaXNPcHRpb25zPiAmIHtcbiAgICAgICAgc2ltdWxhdGU6IFNpbXVsYXRvcnMuTG90a2FWb2x0ZXJyYVNpbXVsYXRvcjtcbiAgICB9LFxuKTogTW9kZWxBbmFseXNpc01ldGE8U2ltdWxhdG9ycy5Mb3RrYVZvbHRlcnJhUHJvYmxlbURhdGE+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIGlkID0gXCJsb3RrYS12b2x0ZXJyYVwiLFxuICAgICAgICBuYW1lID0gXCJMb3RrYS1Wb2x0ZXJyYSBkeW5hbWljc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbiA9IFwiU2ltdWxhdGUgdGhlIHN5c3RlbSB1c2luZyBhIExvdGthLVZvbHRlcnJhIE9ERVwiLFxuICAgICAgICBoZWxwID0gXCJsb3RrYS12b2x0ZXJyYVwiLFxuICAgICAgICBzaW11bGF0ZSxcbiAgICB9ID0gb3B0aW9ucztcbiAgICByZXR1cm4ge1xuICAgICAgICBpZCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGhlbHAsXG4gICAgICAgIGNvbXBvbmVudDogKHByb3BzKSA9PiA8TG90a2FWb2x0ZXJyYSBzaW11bGF0ZT17c2ltdWxhdGV9IHRpdGxlPXtuYW1lfSB7Li4ucHJvcHN9IC8+LFxuICAgICAgICBpbml0aWFsQ29udGVudDogKCkgPT4gKHtcbiAgICAgICAgICAgIGludGVyYWN0aW9uQ29lZmZpY2llbnRzOiB7fSxcbiAgICAgICAgICAgIGdyb3d0aFJhdGVzOiB7fSxcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM6IHt9LFxuICAgICAgICAgICAgZHVyYXRpb246IDEwLFxuICAgICAgICB9KSxcbiAgICB9O1xufVxuXG5jb25zdCBMb3RrYVZvbHRlcnJhID0gbGF6eSgoKSA9PiBpbXBvcnQoXCIuL2FuYWx5c2VzL2xvdGthX3ZvbHRlcnJhXCIpKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1hc3NBY3Rpb24oXG4gICAgb3B0aW9uczogUGFydGlhbDxBbmFseXNpc09wdGlvbnM+ICYge1xuICAgICAgICByYXRlc0hhdmVHcmFudWxhcml0eTogYm9vbGVhbjtcbiAgICAgICAgc2ltdWxhdGU6IFNpbXVsYXRvcnMuTWFzc0FjdGlvblNpbXVsYXRvcjtcbiAgICAgICAgc3RhdGVUeXBlPzogT2JUeXBlO1xuICAgICAgICB0cmFuc2l0aW9uVHlwZT86IE1vclR5cGU7XG4gICAgfSxcbik6IE1vZGVsQW5hbHlzaXNNZXRhPFNpbXVsYXRvcnMuTWFzc0FjdGlvblByb2JsZW1EYXRhPiB7XG4gICAgY29uc3Qge1xuICAgICAgICBpZCA9IFwibWFzcy1hY3Rpb25cIixcbiAgICAgICAgbmFtZSA9IFwiTWFzcy1hY3Rpb24gZHluYW1pY3NcIixcbiAgICAgICAgZGVzY3JpcHRpb24gPSBcIlNpbXVsYXRlIHRoZSBzeXN0ZW0gdXNpbmcgdGhlIGxhdyBvZiBtYXNzIGFjdGlvblwiLFxuICAgICAgICBoZWxwID0gXCJtYXNzLWFjdGlvblwiLFxuICAgICAgICAuLi5vdGhlck9wdGlvbnNcbiAgICB9ID0gb3B0aW9ucztcbiAgICByZXR1cm4ge1xuICAgICAgICBpZCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGhlbHAsXG4gICAgICAgIGNvbXBvbmVudDogKHByb3BzKSA9PiA8TWFzc0FjdGlvbiB0aXRsZT17bmFtZX0gey4uLm90aGVyT3B0aW9uc30gey4uLnByb3BzfSAvPixcbiAgICAgICAgaW5pdGlhbENvbnRlbnQ6ICgpID0+ICh7XG4gICAgICAgICAgICBtYXNzQ29uc2VydmF0aW9uVHlwZTogeyB0eXBlOiBcIkJhbGFuY2VkXCIgfSxcbiAgICAgICAgICAgIHJhdGVzOiB7fSxcbiAgICAgICAgICAgIHRyYW5zaXRpb25Qcm9kdWN0aW9uUmF0ZXM6IHt9LFxuICAgICAgICAgICAgdHJhbnNpdGlvbkNvbnN1bXB0aW9uUmF0ZXM6IHt9LFxuICAgICAgICAgICAgcGxhY2VQcm9kdWN0aW9uUmF0ZXM6IHt9LFxuICAgICAgICAgICAgcGxhY2VDb25zdW1wdGlvblJhdGVzOiB7fSxcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM6IHt9LFxuICAgICAgICAgICAgZHVyYXRpb246IDEwLFxuICAgICAgICB9KSxcbiAgICB9O1xufVxuXG5jb25zdCBNYXNzQWN0aW9uID0gbGF6eSgoKSA9PiBpbXBvcnQoXCIuL2FuYWx5c2VzL21hc3NfYWN0aW9uXCIpKTtcblxuZXhwb3J0IGZ1bmN0aW9uIG1hc3NBY3Rpb25FcXVhdGlvbnMoXG4gICAgb3B0aW9uczogUGFydGlhbDxBbmFseXNpc09wdGlvbnM+ICYge1xuICAgICAgICByYXRlc0hhdmVHcmFudWxhcml0eTogYm9vbGVhbjtcbiAgICAgICAgZ2V0RXF1YXRpb25zOiBTaW11bGF0b3JzLk1hc3NBY3Rpb25FcXVhdGlvbnM7XG4gICAgfSxcbik6IE1vZGVsQW5hbHlzaXNNZXRhPE1hc3NBY3Rpb25FcXVhdGlvbnNEYXRhPiB7XG4gICAgY29uc3Qge1xuICAgICAgICBpZCA9IFwibWFzcy1hY3Rpb24tZXF1YXRpb25zXCIsXG4gICAgICAgIG5hbWUgPSBcIk1hc3MtYWN0aW9uIGR5bmFtaWNzIGVxdWF0aW9uc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbiA9IFwiRGlzcGxheSB0aGUgc3ltYm9saWMgbWFzcy1hY3Rpb24gZHluYW1pY3MgZXF1YXRpb25zXCIsXG4gICAgICAgIGhlbHAgPSBcIm1hc3MtYWN0aW9uLWVxdWF0aW9uc1wiLFxuICAgICAgICAuLi5vdGhlck9wdGlvbnNcbiAgICB9ID0gb3B0aW9ucztcbiAgICByZXR1cm4ge1xuICAgICAgICBpZCxcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGhlbHAsXG4gICAgICAgIGNvbXBvbmVudDogKHByb3BzKSA9PiAoXG4gICAgICAgICAgICA8TWFzc0FjdGlvbkVxdWF0aW9uc0Rpc3BsYXkgdGl0bGU9e25hbWV9IHsuLi5vdGhlck9wdGlvbnN9IHsuLi5wcm9wc30gLz5cbiAgICAgICAgKSxcbiAgICAgICAgaW5pdGlhbENvbnRlbnQ6ICgpID0+ICh7XG4gICAgICAgICAgICBtYXNzQ29uc2VydmF0aW9uVHlwZTogeyB0eXBlOiBcIkJhbGFuY2VkXCIgfSxcbiAgICAgICAgfSksXG4gICAgfTtcbn1cbmNvbnN0IE1hc3NBY3Rpb25FcXVhdGlvbnNEaXNwbGF5ID0gbGF6eSgoKSA9PiBpbXBvcnQoXCIuL2FuYWx5c2VzL21hc3NfYWN0aW9uX2VxdWF0aW9uc1wiKSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9jaGFzdGljTWFzc0FjdGlvbihcbiAgICBvcHRpb25zOiBQYXJ0aWFsPEFuYWx5c2lzT3B0aW9ucz4gJiB7XG4gICAgICAgIHNpbXVsYXRlOiBTaW11bGF0b3JzLlN0b2NoYXN0aWNNYXNzQWN0aW9uU2ltdWxhdG9yO1xuICAgICAgICBzdGF0ZVR5cGU/OiBPYlR5cGU7XG4gICAgICAgIHRyYW5zaXRpb25UeXBlPzogTW9yVHlwZTtcbiAgICB9LFxuKTogTW9kZWxBbmFseXNpc01ldGE8U3RvY2hhc3RpY01hc3NBY3Rpb25Qcm9ibGVtRGF0YT4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgaWQgPSBcInN0b2NoYXN0aWMtbWFzcy1hY3Rpb25cIixcbiAgICAgICAgbmFtZSA9IFwiU3RvY2hhc3RpYyBtYXNzLWFjdGlvbiBkeW5hbWljc1wiLFxuICAgICAgICBkZXNjcmlwdGlvbiA9IFwiU2ltdWxhdGUgdGhlIHN5c3RlbSB1c2luZyBzdG9jaGFzdGljIG1hc3MtYWN0aW9uIGR5bmFtaWNzXCIsXG4gICAgICAgIGhlbHAgPSBcInN0b2NoYXN0aWMtbWFzcy1hY3Rpb25cIixcbiAgICAgICAgLi4ub3RoZXJPcHRpb25zXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBoZWxwLFxuICAgICAgICBjb21wb25lbnQ6IChwcm9wcykgPT4gPFN0b2NoYXN0aWNNYXNzQWN0aW9uIHRpdGxlPXtuYW1lfSB7Li4ub3RoZXJPcHRpb25zfSB7Li4ucHJvcHN9IC8+LFxuICAgICAgICBpbml0aWFsQ29udGVudDogKCkgPT4gKHtcbiAgICAgICAgICAgIHJhdGVzOiB7fSxcbiAgICAgICAgICAgIGluaXRpYWxWYWx1ZXM6IHt9LFxuICAgICAgICAgICAgc2VlZDogbnVsbCxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMCxcbiAgICAgICAgfSksXG4gICAgfTtcbn1cblxuY29uc3QgU3RvY2hhc3RpY01hc3NBY3Rpb24gPSBsYXp5KCgpID0+IGltcG9ydChcIi4vYW5hbHlzZXMvc3RvY2hhc3RpY19tYXNzX2FjdGlvblwiKSk7XG5cbmV4cG9ydCBjb25zdCBtb2RlbEdyYXBoID0gKFxuICAgIG9wdGlvbnM6IEFuYWx5c2lzT3B0aW9ucyxcbik6IE1vZGVsQW5hbHlzaXNNZXRhPEdyYXBoTGF5b3V0Q29uZmlnLkNvbmZpZz4gPT4gKHtcbiAgICAuLi5vcHRpb25zLFxuICAgIGNvbXBvbmVudDogKHByb3BzKSA9PiA8TW9kZWxHcmFwaCB0aXRsZT17b3B0aW9ucy5uYW1lfSB7Li4ucHJvcHN9IC8+LFxuICAgIGluaXRpYWxDb250ZW50OiBHcmFwaExheW91dENvbmZpZy5kZWZhdWx0Q29uZmlnLFxufSk7XG5cbmNvbnN0IE1vZGVsR3JhcGggPSBsYXp5KCgpID0+IGltcG9ydChcIi4vYW5hbHlzZXMvbW9kZWxfZ3JhcGhcIikpO1xuXG5leHBvcnQgY29uc3Qgc2NoZW1hRVJEID0gKG9wdGlvbnM6IEFuYWx5c2lzT3B0aW9ucyk6IE1vZGVsQW5hbHlzaXNNZXRhPFNjaGVtYUVSRENvbmZpZz4gPT4gKHtcbiAgICAuLi5vcHRpb25zLFxuICAgIGNvbXBvbmVudDogKHByb3BzKSA9PiA8U2NoZW1hRVJEIHsuLi5wcm9wc30gLz4sXG4gICAgaW5pdGlhbENvbnRlbnQ6IGRlZmF1bHRTY2hlbWFFUkRDb25maWcsXG59KTtcblxuY29uc3QgU2NoZW1hRVJEID0gbGF6eSgoKSA9PiBpbXBvcnQoXCIuL2FuYWx5c2VzL3NjaGVtYV9lcmRcIikpO1xuXG5leHBvcnQgZnVuY3Rpb24gbW90aWZGaW5kaW5nKFxuICAgIG9wdGlvbnM6IEFuYWx5c2lzT3B0aW9ucyAmIHtcbiAgICAgICAgZmluZE1vdGlmczogQ2hlY2tlcnMuTW90aWZGaW5kZXI7XG4gICAgfSxcbik6IE1vZGVsQW5hbHlzaXNNZXRhPENoZWNrZXJzLk1vdGlmRmluZGluZ0FuYWx5c2lzQ29udGVudD4ge1xuICAgIGNvbnN0IHsgaWQsIG5hbWUsIGRlc2NyaXB0aW9uLCBoZWxwLCBmaW5kTW90aWZzIH0gPSBvcHRpb25zO1xuICAgIHJldHVybiB7XG4gICAgICAgIGlkLFxuICAgICAgICBuYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgaGVscCxcbiAgICAgICAgY29tcG9uZW50OiAocHJvcHMpID0+IDxTdWJtb2RlbEdyYXBocyB0aXRsZT17bmFtZX0gZmluZFN1Ym1vZGVscz17ZmluZE1vdGlmc30gey4uLnByb3BzfSAvPixcbiAgICAgICAgaW5pdGlhbENvbnRlbnQ6ICgpID0+ICh7XG4gICAgICAgICAgICBhY3RpdmVJbmRleDogMCxcbiAgICAgICAgICAgIGVuYWJsZU1heFBhdGhMZW5ndGg6IHRydWUsXG4gICAgICAgICAgICBtYXhQYXRoTGVuZ3RoOiA1LFxuICAgICAgICB9KSxcbiAgICB9O1xufVxuXG5jb25zdCBTdWJtb2RlbEdyYXBocyA9IGxhenkoKCkgPT4gaW1wb3J0KFwiLi9hbmFseXNlcy9zdWJtb2RlbF9ncmFwaHNcIikpO1xuXG5leHBvcnQgY29uc3QgcGV0cmlOZXRWaXN1YWxpemF0aW9uID0gKFxuICAgIG9wdGlvbnM6IEFuYWx5c2lzT3B0aW9ucyxcbik6IE1vZGVsQW5hbHlzaXNNZXRhPEdyYXBoTGF5b3V0Q29uZmlnLkNvbmZpZz4gPT4gKHtcbiAgICAuLi5vcHRpb25zLFxuICAgIGNvbXBvbmVudDogUGV0cmlOZXRWaXN1YWxpemF0aW9uLFxuICAgIGluaXRpYWxDb250ZW50OiBHcmFwaExheW91dENvbmZpZy5kZWZhdWx0Q29uZmlnLFxufSk7XG5cbmNvbnN0IFBldHJpTmV0VmlzdWFsaXphdGlvbiA9IGxhenkoKCkgPT4gaW1wb3J0KFwiLi9hbmFseXNlcy9wZXRyaV9uZXRfdmlzdWFsaXphdGlvblwiKSk7XG5cbmV4cG9ydCBmdW5jdGlvbiByZWFjaGFiaWxpdHkoXG4gICAgb3B0aW9uczogUGFydGlhbDxBbmFseXNpc09wdGlvbnM+ICYge1xuICAgICAgICBjaGVjazogQ2hlY2tlcnMuUmVhY2hhYmlsaXR5Q2hlY2tlcjtcbiAgICB9LFxuKTogTW9kZWxBbmFseXNpc01ldGE8Q2hlY2tlcnMuUmVhY2hhYmlsaXR5UHJvYmxlbURhdGE+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIGlkID0gXCJzdWJyZWFjaGFiaWxpdHlcIixcbiAgICAgICAgbmFtZSA9IFwiU3ViLXJlYWNoYWJpbGl0eSBjaGVja1wiLFxuICAgICAgICBkZXNjcmlwdGlvbiA9IFwiQ2hlY2sgdGhhdCBmb3JiaWRkZW4gdG9rZW5pbmdzIGFyZSB1bnJlYWNoYWJsZVwiLFxuICAgICAgICBoZWxwID0gXCJzdWJyZWFjaGFiaWxpdHlcIixcbiAgICAgICAgLi4ub3RoZXJPcHRpb25zXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBoZWxwLFxuICAgICAgICBjb21wb25lbnQ6IChwcm9wcykgPT4gPFJlYWNoYWJpbGl0eSB0aXRsZT17bmFtZX0gey4uLm90aGVyT3B0aW9uc30gey4uLnByb3BzfSAvPixcbiAgICAgICAgaW5pdGlhbENvbnRlbnQ6ICgpID0+ICh7IHRva2Vuczoge30sIGZvcmJpZGRlbjoge30gfSksXG4gICAgfTtcbn1cblxuY29uc3QgUmVhY2hhYmlsaXR5ID0gbGF6eSgoKSA9PiBpbXBvcnQoXCIuL2FuYWx5c2VzL3JlYWNoYWJpbGl0eVwiKSk7XG5cbmV4cG9ydCBjb25zdCBzdG9ja0Zsb3dEaWFncmFtID0gKFxuICAgIG9wdGlvbnM6IEFuYWx5c2lzT3B0aW9ucyxcbik6IE1vZGVsQW5hbHlzaXNNZXRhPEdyYXBoTGF5b3V0Q29uZmlnLkNvbmZpZz4gPT4gKHtcbiAgICAuLi5vcHRpb25zLFxuICAgIGNvbXBvbmVudDogU3RvY2tGbG93RGlhZ3JhbSxcbiAgICBpbml0aWFsQ29udGVudDogR3JhcGhMYXlvdXRDb25maWcuZGVmYXVsdENvbmZpZyxcbn0pO1xuXG5jb25zdCBTdG9ja0Zsb3dEaWFncmFtID0gbGF6eSgoKSA9PiBpbXBvcnQoXCIuL2FuYWx5c2VzL3N0b2NrX2Zsb3dfZGlhZ3JhbVwiKSk7XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJTUUwoXG4gICAgb3B0aW9uczogUGFydGlhbDxBbmFseXNpc09wdGlvbnM+ICYge1xuICAgICAgICByZW5kZXI6IFNRTFJlbmRlcmVyO1xuICAgIH0sXG4pOiBNb2RlbEFuYWx5c2lzTWV0YTxTUUxEb3dubG9hZENvbmZpZy5Eb3dubG9hZENvbmZpZz4ge1xuICAgIGNvbnN0IHtcbiAgICAgICAgaWQgPSBcInNxbFwiLFxuICAgICAgICBuYW1lID0gXCJTUUwgc2NoZW1hXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uID0gXCJQcm9kdWNlIFNRTCBETUwgZnJvbSB0aGlzIHNjaGVtYVwiLFxuICAgICAgICBoZWxwID0gXCJzcWxcIixcbiAgICAgICAgcmVuZGVyLFxuICAgIH0gPSBvcHRpb25zO1xuICAgIHJldHVybiB7XG4gICAgICAgIGlkLFxuICAgICAgICBuYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgaGVscCxcbiAgICAgICAgY29tcG9uZW50OiAocHJvcHMpID0+IDxTUUxTY2hlbWFBbmFseXNpcyB0aXRsZT17bmFtZX0gcmVuZGVyPXtyZW5kZXJ9IHsuLi5wcm9wc30gLz4sXG4gICAgICAgIGluaXRpYWxDb250ZW50OiAoKSA9PiAoe1xuICAgICAgICAgICAgYmFja2VuZDogU1FMQmFja2VuZC5Qb3N0Z3Jlc1NRTCxcbiAgICAgICAgICAgIGZpbGVuYW1lOiBcInNjaGVtYS5zcWxcIixcbiAgICAgICAgfSksXG4gICAgfTtcbn1cblxuY29uc3QgU1FMU2NoZW1hQW5hbHlzaXMgPSBsYXp5KCgpID0+IGltcG9ydChcIi4vYW5hbHlzZXMvc3FsXCIpKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBvbHlub21pYWxPREVFcXVhdGlvbnMoXG4gICAgb3B0aW9uczogUGFydGlhbDxBbmFseXNpc09wdGlvbnM+ICYge1xuICAgICAgICBnZXRFcXVhdGlvbnM6IFNpbXVsYXRvcnMuUG9seW5vbWlhbE9ERUVxdWF0aW9ucztcbiAgICB9LFxuKTogTW9kZWxBbmFseXNpc01ldGE8UG9seW5vbWlhbE9ERUVxdWF0aW9uc0RhdGE+IHtcbiAgICBjb25zdCB7XG4gICAgICAgIGlkID0gXCJwb2x5bm9taWFsLW9kZS1lcXVhdGlvbnNcIixcbiAgICAgICAgbmFtZSA9IFwiUG9seW5vbWlhbCBPREUgZXF1YXRpb25zXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uID0gXCJEaXNwbGF5IHRoZSBzeW1ib2xpYyBlcXVhdGlvbnNcIixcbiAgICAgICAgaGVscCA9IFwicG9seW5vbWlhbC1vZGUtZXF1YXRpb25zXCIsXG4gICAgICAgIC4uLm90aGVyT3B0aW9uc1xuICAgIH0gPSBvcHRpb25zO1xuICAgIHJldHVybiB7XG4gICAgICAgIGlkLFxuICAgICAgICBuYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgaGVscCxcbiAgICAgICAgY29tcG9uZW50OiAocHJvcHMpID0+IChcbiAgICAgICAgICAgIDxQb2x5bm9taWFsT0RFRXF1YXRpb25zRGlzcGxheSB0aXRsZT17bmFtZX0gey4uLm90aGVyT3B0aW9uc30gey4uLnByb3BzfSAvPlxuICAgICAgICApLFxuICAgICAgICBpbml0aWFsQ29udGVudDogKCkgPT4gKHtcbiAgICAgICAgICAgIHRyaXZpYWxEYXRhOiB0cnVlLFxuICAgICAgICB9KSxcbiAgICB9O1xufVxuY29uc3QgUG9seW5vbWlhbE9ERUVxdWF0aW9uc0Rpc3BsYXkgPSBsYXp5KCgpID0+IGltcG9ydChcIi4vYW5hbHlzZXMvcG9seW5vbWlhbF9vZGVfZXF1YXRpb25zXCIpKTtcblxuZXhwb3J0IGZ1bmN0aW9uIHBvbHlub21pYWxPREVTaW11bGF0aW9uKFxuICAgIG9wdGlvbnM6IFBhcnRpYWw8QW5hbHlzaXNPcHRpb25zPiAmIHtcbiAgICAgICAgc2lnbmVkQ29udHJpYnV0aW9uczogYm9vbGVhbjtcbiAgICAgICAgc2ltdWxhdGU6IFNpbXVsYXRvcnMuUG9seW5vbWlhbE9ERVNpbXVsYXRvcjtcbiAgICAgICAgc3RhdGVUeXBlPzogT2JUeXBlO1xuICAgICAgICB0cmFuc2l0aW9uVHlwZT86IE1vclR5cGU7XG4gICAgfSxcbik6IE1vZGVsQW5hbHlzaXNNZXRhPFNpbXVsYXRvcnMuUG9seW5vbWlhbE9ERVByb2JsZW1EYXRhPiB7XG4gICAgY29uc3Qge1xuICAgICAgICBpZCA9IFwicG9seW5vbWlhbC1vZGUtc2ltdWxhdGlvblwiLFxuICAgICAgICBuYW1lID0gXCJQb2x5bm9taWFsIE9ERSBzaW11bGF0aW9uXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uID0gXCJTaW11bGF0ZSB0aGUgc3lzdGVtXCIsXG4gICAgICAgIGhlbHAgPSBcInBvbHlub21pYWwtb2RlLXNpbXVsYXRpb25cIixcbiAgICAgICAgLi4ub3RoZXJPcHRpb25zXG4gICAgfSA9IG9wdGlvbnM7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaWQsXG4gICAgICAgIG5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBoZWxwLFxuICAgICAgICBjb21wb25lbnQ6IChwcm9wcykgPT4gPFBvbHlub21pYWxPREVTaW11bGF0aW9uIHRpdGxlPXtuYW1lfSB7Li4ub3RoZXJPcHRpb25zfSB7Li4ucHJvcHN9IC8+LFxuICAgICAgICBpbml0aWFsQ29udGVudDogKCkgPT4gKHtcbiAgICAgICAgICAgIGNvZWZmaWNpZW50czoge30sXG4gICAgICAgICAgICBpbml0aWFsVmFsdWVzOiB7fSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiAxMCxcbiAgICAgICAgfSksXG4gICAgfTtcbn1cblxuY29uc3QgUG9seW5vbWlhbE9ERVNpbXVsYXRpb24gPSBsYXp5KCgpID0+IGltcG9ydChcIi4vYW5hbHlzZXMvcG9seW5vbWlhbF9vZGVfc2ltdWxhdGlvblwiKSk7XG4iXSwiZmlsZSI6ImFzc2V0cy9hbmFseXNlcy1EUUxlTzlKcS5qcyJ9