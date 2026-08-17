const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./object_cell_editor-COlDQyjd.js","./analysis_tool-Bl31dlnB.js","./model-hspTLkzk.js","./index-CpJyZPkM.js","./contribution_cell_editor-bIsevIJf.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './index-CpJyZPkM.js';
import { lazy } from 'solid-js';
import { f as ThSignedPolynomialODE, a as Theory } from './analysis_tool-Bl31dlnB.js';
import { f as polynomialODEEquations, g as polynomialODESimulation } from './analyses-vifFxgw1.js';
import 'solid-js/web';
import './model-hspTLkzk.js';
import 'solid-js/store';
import '@automerge/automerge-repo';
import '@automerge/automerge-repo-network-websocket';
import '@automerge/automerge-repo-storage-indexeddb';
import '@automerge/automerge/slim';
import '@automerge/automerge';
import '@inkandswitch/patchwork-providers';

const ObjectCellEditor = lazy(() => __vitePreload(() => import('./object_cell_editor-COlDQyjd.js'),true?__vite__mapDeps([0,1,2,3]):undefined,import.meta.url));
const PositiveContributionEditor = lazy(
  () => __vitePreload(() => import('./contribution_cell_editor-bIsevIJf.js'),true?__vite__mapDeps([4,1,2,3,0]):undefined,import.meta.url).then((m) => ({
    default: m.PositiveContributionCellEditor
  }))
);
const NegativeContributionEditor = lazy(
  () => __vitePreload(() => import('./contribution_cell_editor-bIsevIJf.js'),true?__vite__mapDeps([4,1,2,3,0]):undefined,import.meta.url).then((m) => ({
    default: m.NegativeContributionCellEditor
  }))
);
function createSignedPolynomialODETheory(theoryMeta) {
  const thSignedPolynomialODE = new ThSignedPolynomialODE();
  return new Theory({
    ...theoryMeta,
    theory: thSignedPolynomialODE.theory(),
    onlyFreeModels: true,
    modelTypes: [
      {
        tag: "ObType",
        obType: { tag: "Basic", content: "State" },
        editor: ObjectCellEditor,
        name: "Variable",
        description: "Variable in ring of polynomials",
        shortcut: ["V"]
      },
      {
        tag: "MorType",
        morType: { tag: "Basic", content: "Contribution" },
        editor: PositiveContributionEditor,
        name: "Positive contribution",
        description: "Additive monomial contribution to the system of ODEs",
        shortcut: ["P"]
      },
      {
        tag: "MorType",
        morType: { tag: "Basic", content: "NegativeContribution" },
        editor: NegativeContributionEditor,
        name: "Negative contribution",
        description: "Subtractive monomial contribution to the system of ODEs",
        shortcut: ["N"]
      }
    ],
    modelAnalyses: [
      polynomialODEEquations({
        getEquations(model, data) {
          return thSignedPolynomialODE.polynomialODEEquations(model, data);
        }
      }),
      polynomialODESimulation({
        signedContributions: true,
        simulate(model, data) {
          return thSignedPolynomialODE.polynomialODESimulation(model, data);
        }
      })
    ]
  });
}

export { createSignedPolynomialODETheory as default };


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsS0FBTSxpQkFBbUIsUUFBSyxNQUFNLDBCQUFPLG1DQUFnQyxDQUFDO0FBQzVFLEtBQU0sMkJBQTZCO0FBQUEsQ0FBSyxzQkFDcEMsWUFBTyx3Q0FBc0MsQ0FBRSxtRUFBSyxDQUFDLENBQU87QUFBQSxDQUN4RCxXQUFTLEVBQUU7QUFBQSxHQUNiO0FBQ047QUFDQSxLQUFNLDJCQUE2QjtBQUFBLENBQUssc0JBQ3BDLFlBQU8sd0NBQXNDLENBQUUsbUVBQUssQ0FBQyxDQUFPO0FBQUEsQ0FDeEQsV0FBUyxFQUFFO0FBQUEsR0FDYjtBQUNOO0FBRUEsUUFBd0IsaUNBQWdDLFVBQWdDO0FBQ3BGLEVBQU0sNEJBQXdCLE1BQUkscUJBQXNCO0FBRXhELFNBQU8sR0FBSSxPQUFPO0FBQUEsSUFDZCxHQUFHO0FBQUEsSUFDSCxRQUFRLHNCQUFzQixNQUFPO0FBQUEsQ0FDckMsaUJBQWdCO0FBQUEsSUFDaEIsVUFBWTtBQUFBLENBQ1I7QUFBQSxDQUNJLFVBQUs7QUFBQSxDQUNMLGFBQVEsSUFBRSxHQUFLLFVBQVMsU0FBUyxRQUFRO0FBQUEsQ0FDekMsYUFBUTtBQUFBLENBQ1IsV0FBTTtBQUFBLENBQ04sa0JBQWE7QUFBQSxDQUNiLGdCQUFVLEVBQUMsQ0FBRztBQUFBLENBQ2xCO0FBQUEsQ0FDQTtBQUFBLENBQ0ksVUFBSztBQUFBLENBQ0wsY0FBUyxJQUFFLEdBQUssVUFBUyxTQUFTLGVBQWU7QUFBQSxDQUNqRCxhQUFRO0FBQUEsQ0FDUixXQUFNO0FBQUEsQ0FDTixrQkFBYTtBQUFBLENBQ2IsZ0JBQVUsRUFBQyxDQUFHO0FBQUEsQ0FDbEI7QUFBQSxDQUNBO0FBQUEsQ0FDSSxVQUFLO0FBQUEsQ0FDTCxjQUFTLElBQUUsR0FBSyxVQUFTLFNBQVMsdUJBQXVCO0FBQUEsQ0FDekQsYUFBUTtBQUFBLENBQ1IsV0FBTTtBQUFBLENBQ04sa0JBQWE7QUFBQSxDQUNiLGdCQUFVLEVBQUMsQ0FBRztBQUFBO0FBQ2xCLENBQ0o7QUFBQSxJQUNBLGFBQWU7QUFBQSxNQUNYQSxzQkFBZ0M7QUFBQSxRQUM1QixhQUFhLE9BQU8sSUFBTTtBQUN0QixDQUFPLHNDQUFzQixzQkFBdUIsUUFBTyxJQUFJO0FBQUE7QUFDbkUsT0FDSDtBQUFBLE1BQ0RDLHVCQUFpQztBQUFBLENBQzdCLDBCQUFxQjtBQUFBLFFBQ3JCLFNBQVMsT0FBTyxJQUFNO0FBQ2xCLENBQU8sc0NBQXNCLHVCQUF3QixRQUFPLElBQUk7QUFBQTtBQUNwRSxDQUNIO0FBQUE7QUFDTCxHQUNIO0FBQ0wiLCJuYW1lcyI6WyJhbmFseXNlcy5wb2x5bm9taWFsT0RFRXF1YXRpb25zIiwiYW5hbHlzZXMucG9seW5vbWlhbE9ERVNpbXVsYXRpb24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vZnJvbnRlbmQvc3JjL3N0ZGxpYi90aGVvcmllcy9zaWduZWQtcG9seW5vbWlhbC1vZGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGF6eSB9IGZyb20gXCJzb2xpZC1qc1wiO1xuXG5pbXBvcnQgeyBUaFNpZ25lZFBvbHlub21pYWxPREUgfSBmcm9tIFwiY2F0bG9nLXdhc21cIjtcbmltcG9ydCB7IFRoZW9yeSwgdHlwZSBUaGVvcnlNZXRhIH0gZnJvbSBcIi4uLy4uL3RoZW9yeVwiO1xuaW1wb3J0ICogYXMgYW5hbHlzZXMgZnJvbSBcIi4uL2FuYWx5c2VzXCI7XG5cbmNvbnN0IE9iamVjdENlbGxFZGl0b3IgPSBsYXp5KCgpID0+IGltcG9ydChcIi4uLy4uL21vZGVsL29iamVjdF9jZWxsX2VkaXRvclwiKSk7XG5jb25zdCBQb3NpdGl2ZUNvbnRyaWJ1dGlvbkVkaXRvciA9IGxhenkoKCkgPT5cbiAgICBpbXBvcnQoXCIuLi8uLi9tb2RlbC9jb250cmlidXRpb25fY2VsbF9lZGl0b3JcIikudGhlbigobSkgPT4gKHtcbiAgICAgICAgZGVmYXVsdDogbS5Qb3NpdGl2ZUNvbnRyaWJ1dGlvbkNlbGxFZGl0b3IsXG4gICAgfSkpLFxuKTtcbmNvbnN0IE5lZ2F0aXZlQ29udHJpYnV0aW9uRWRpdG9yID0gbGF6eSgoKSA9PlxuICAgIGltcG9ydChcIi4uLy4uL21vZGVsL2NvbnRyaWJ1dGlvbl9jZWxsX2VkaXRvclwiKS50aGVuKChtKSA9PiAoe1xuICAgICAgICBkZWZhdWx0OiBtLk5lZ2F0aXZlQ29udHJpYnV0aW9uQ2VsbEVkaXRvcixcbiAgICB9KSksXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVTaWduZWRQb2x5bm9taWFsT0RFVGhlb3J5KHRoZW9yeU1ldGE6IFRoZW9yeU1ldGEpOiBUaGVvcnkge1xuICAgIGNvbnN0IHRoU2lnbmVkUG9seW5vbWlhbE9ERSA9IG5ldyBUaFNpZ25lZFBvbHlub21pYWxPREUoKTtcblxuICAgIHJldHVybiBuZXcgVGhlb3J5KHtcbiAgICAgICAgLi4udGhlb3J5TWV0YSxcbiAgICAgICAgdGhlb3J5OiB0aFNpZ25lZFBvbHlub21pYWxPREUudGhlb3J5KCksXG4gICAgICAgIG9ubHlGcmVlTW9kZWxzOiB0cnVlLFxuICAgICAgICBtb2RlbFR5cGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk9iVHlwZVwiLFxuICAgICAgICAgICAgICAgIG9iVHlwZTogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJTdGF0ZVwiIH0sXG4gICAgICAgICAgICAgICAgZWRpdG9yOiBPYmplY3RDZWxsRWRpdG9yLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiVmFyaWFibGVcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJWYXJpYWJsZSBpbiByaW5nIG9mIHBvbHlub21pYWxzXCIsXG4gICAgICAgICAgICAgICAgc2hvcnRjdXQ6IFtcIlZcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogXCJNb3JUeXBlXCIsXG4gICAgICAgICAgICAgICAgbW9yVHlwZTogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJDb250cmlidXRpb25cIiB9LFxuICAgICAgICAgICAgICAgIGVkaXRvcjogUG9zaXRpdmVDb250cmlidXRpb25FZGl0b3IsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJQb3NpdGl2ZSBjb250cmlidXRpb25cIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJBZGRpdGl2ZSBtb25vbWlhbCBjb250cmlidXRpb24gdG8gdGhlIHN5c3RlbSBvZiBPREVzXCIsXG4gICAgICAgICAgICAgICAgc2hvcnRjdXQ6IFtcIlBcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogXCJNb3JUeXBlXCIsXG4gICAgICAgICAgICAgICAgbW9yVHlwZTogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJOZWdhdGl2ZUNvbnRyaWJ1dGlvblwiIH0sXG4gICAgICAgICAgICAgICAgZWRpdG9yOiBOZWdhdGl2ZUNvbnRyaWJ1dGlvbkVkaXRvcixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIk5lZ2F0aXZlIGNvbnRyaWJ1dGlvblwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlN1YnRyYWN0aXZlIG1vbm9taWFsIGNvbnRyaWJ1dGlvbiB0byB0aGUgc3lzdGVtIG9mIE9ERXNcIixcbiAgICAgICAgICAgICAgICBzaG9ydGN1dDogW1wiTlwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIG1vZGVsQW5hbHlzZXM6IFtcbiAgICAgICAgICAgIGFuYWx5c2VzLnBvbHlub21pYWxPREVFcXVhdGlvbnMoe1xuICAgICAgICAgICAgICAgIGdldEVxdWF0aW9ucyhtb2RlbCwgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhTaWduZWRQb2x5bm9taWFsT0RFLnBvbHlub21pYWxPREVFcXVhdGlvbnMobW9kZWwsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuYWx5c2VzLnBvbHlub21pYWxPREVTaW11bGF0aW9uKHtcbiAgICAgICAgICAgICAgICBzaWduZWRDb250cmlidXRpb25zOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNpbXVsYXRlKG1vZGVsLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aFNpZ25lZFBvbHlub21pYWxPREUucG9seW5vbWlhbE9ERVNpbXVsYXRpb24obW9kZWwsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICB9KTtcbn1cbiJdLCJmaWxlIjoiYXNzZXRzL3NpZ25lZC1wb2x5bm9taWFsLW9kZS1NV09rcXd2NS5qcyJ9