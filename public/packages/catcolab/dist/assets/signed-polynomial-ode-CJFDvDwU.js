const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./object_cell_editor-DW5yEtQd.js","./analysis_tool-Bvgm6Cie.js","./document-BaPUF-Ky.js","./notebook-DqARNRKu.js","./model-B9uNSW6J.js","./index-CvS5Jq0z.js","./contribution_cell_editor-N8Vt-Ay0.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './index-CvS5Jq0z.js';
import { lazy } from 'solid-js';
import { j as ThSignedPolynomialODE } from './document-BaPUF-Ky.js';
import { T as Theory } from './analysis_tool-Bvgm6Cie.js';
import { f as polynomialODEEquations, g as polynomialODESimulation } from './analyses-dUWNojZq.js';
import './notebook-DqARNRKu.js';
import 'solid-js/store';
import '@automerge/automerge-repo';
import '@automerge/automerge-repo-network-websocket';
import '@automerge/automerge-repo-storage-indexeddb';
import 'solid-js/web';
import '@automerge/automerge/slim';
import '@automerge/automerge';
import './model-B9uNSW6J.js';

const ObjectCellEditor = lazy(() => __vitePreload(() => import('./object_cell_editor-DW5yEtQd.js'),true?__vite__mapDeps([0,1,2,3,4,5]):undefined,import.meta.url));
const PositiveContributionEditor = lazy(
  () => __vitePreload(() => import('./contribution_cell_editor-N8Vt-Ay0.js'),true?__vite__mapDeps([6,2,3,1,4,5,0]):undefined,import.meta.url).then((m) => ({
    default: m.PositiveContributionCellEditor
  }))
);
const NegativeContributionEditor = lazy(
  () => __vitePreload(() => import('./contribution_cell_editor-N8Vt-Ay0.js'),true?__vite__mapDeps([6,2,3,1,4,5,0]):undefined,import.meta.url).then((m) => ({
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


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLEtBQU0saUJBQW1CLFFBQUssTUFBTSwwQkFBTyxtQ0FBZ0MsQ0FBQztBQUM1RSxLQUFNLDJCQUE2QjtBQUFBLENBQUssc0JBQ3BDLFlBQU8sd0NBQXNDLENBQUUsdUVBQUssQ0FBQyxDQUFPO0FBQUEsQ0FDeEQsV0FBUyxFQUFFO0FBQUEsR0FDYjtBQUNOO0FBQ0EsS0FBTSwyQkFBNkI7QUFBQSxDQUFLLHNCQUNwQyxZQUFPLHdDQUFzQyxDQUFFLHVFQUFLLENBQUMsQ0FBTztBQUFBLENBQ3hELFdBQVMsRUFBRTtBQUFBLEdBQ2I7QUFDTjtBQUVBLFFBQXdCLGlDQUFnQyxVQUFnQztBQUNwRixFQUFNLDRCQUF3QixNQUFJLHFCQUFzQjtBQUV4RCxTQUFPLEdBQUksT0FBTztBQUFBLElBQ2QsR0FBRztBQUFBLElBQ0gsUUFBUSxzQkFBc0IsTUFBTztBQUFBLENBQ3JDLGlCQUFnQjtBQUFBLElBQ2hCLFVBQVk7QUFBQSxDQUNSO0FBQUEsQ0FDSSxVQUFLO0FBQUEsQ0FDTCxhQUFRLElBQUUsR0FBSyxVQUFTLFNBQVMsUUFBUTtBQUFBLENBQ3pDLGFBQVE7QUFBQSxDQUNSLFdBQU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsQ0FDYixnQkFBVSxFQUFDLENBQUc7QUFBQSxDQUNsQjtBQUFBLENBQ0E7QUFBQSxDQUNJLFVBQUs7QUFBQSxDQUNMLGNBQVMsSUFBRSxHQUFLLFVBQVMsU0FBUyxlQUFlO0FBQUEsQ0FDakQsYUFBUTtBQUFBLENBQ1IsV0FBTTtBQUFBLENBQ04sa0JBQWE7QUFBQSxDQUNiLGdCQUFVLEVBQUMsQ0FBRztBQUFBLENBQ2xCO0FBQUEsQ0FDQTtBQUFBLENBQ0ksVUFBSztBQUFBLENBQ0wsY0FBUyxJQUFFLEdBQUssVUFBUyxTQUFTLHVCQUF1QjtBQUFBLENBQ3pELGFBQVE7QUFBQSxDQUNSLFdBQU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsQ0FDYixnQkFBVSxFQUFDLENBQUc7QUFBQTtBQUNsQixDQUNKO0FBQUEsSUFDQSxhQUFlO0FBQUEsTUFDWEEsc0JBQWdDO0FBQUEsUUFDNUIsYUFBYSxPQUFPLElBQU07QUFDdEIsQ0FBTyxzQ0FBc0Isc0JBQXVCLFFBQU8sSUFBSTtBQUFBO0FBQ25FLE9BQ0g7QUFBQSxNQUNEQyx1QkFBaUM7QUFBQSxDQUM3QiwwQkFBcUI7QUFBQSxRQUNyQixTQUFTLE9BQU8sSUFBTTtBQUNsQixDQUFPLHNDQUFzQix1QkFBd0IsUUFBTyxJQUFJO0FBQUE7QUFDcEUsQ0FDSDtBQUFBO0FBQ0wsR0FDSDtBQUNMIiwibmFtZXMiOlsiYW5hbHlzZXMucG9seW5vbWlhbE9ERUVxdWF0aW9ucyIsImFuYWx5c2VzLnBvbHlub21pYWxPREVTaW11bGF0aW9uIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zyb250ZW5kL3NyYy9zdGRsaWIvdGhlb3JpZXMvc2lnbmVkLXBvbHlub21pYWwtb2RlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxhenkgfSBmcm9tIFwic29saWQtanNcIjtcblxuaW1wb3J0IHsgVGhTaWduZWRQb2x5bm9taWFsT0RFIH0gZnJvbSBcImNhdGxvZy13YXNtXCI7XG5pbXBvcnQgeyBUaGVvcnksIHR5cGUgVGhlb3J5TWV0YSB9IGZyb20gXCIuLi8uLi90aGVvcnlcIjtcbmltcG9ydCAqIGFzIGFuYWx5c2VzIGZyb20gXCIuLi9hbmFseXNlc1wiO1xuXG5jb25zdCBPYmplY3RDZWxsRWRpdG9yID0gbGF6eSgoKSA9PiBpbXBvcnQoXCIuLi8uLi9tb2RlbC9vYmplY3RfY2VsbF9lZGl0b3JcIikpO1xuY29uc3QgUG9zaXRpdmVDb250cmlidXRpb25FZGl0b3IgPSBsYXp5KCgpID0+XG4gICAgaW1wb3J0KFwiLi4vLi4vbW9kZWwvY29udHJpYnV0aW9uX2NlbGxfZWRpdG9yXCIpLnRoZW4oKG0pID0+ICh7XG4gICAgICAgIGRlZmF1bHQ6IG0uUG9zaXRpdmVDb250cmlidXRpb25DZWxsRWRpdG9yLFxuICAgIH0pKSxcbik7XG5jb25zdCBOZWdhdGl2ZUNvbnRyaWJ1dGlvbkVkaXRvciA9IGxhenkoKCkgPT5cbiAgICBpbXBvcnQoXCIuLi8uLi9tb2RlbC9jb250cmlidXRpb25fY2VsbF9lZGl0b3JcIikudGhlbigobSkgPT4gKHtcbiAgICAgICAgZGVmYXVsdDogbS5OZWdhdGl2ZUNvbnRyaWJ1dGlvbkNlbGxFZGl0b3IsXG4gICAgfSkpLFxuKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU2lnbmVkUG9seW5vbWlhbE9ERVRoZW9yeSh0aGVvcnlNZXRhOiBUaGVvcnlNZXRhKTogVGhlb3J5IHtcbiAgICBjb25zdCB0aFNpZ25lZFBvbHlub21pYWxPREUgPSBuZXcgVGhTaWduZWRQb2x5bm9taWFsT0RFKCk7XG5cbiAgICByZXR1cm4gbmV3IFRoZW9yeSh7XG4gICAgICAgIC4uLnRoZW9yeU1ldGEsXG4gICAgICAgIHRoZW9yeTogdGhTaWduZWRQb2x5bm9taWFsT0RFLnRoZW9yeSgpLFxuICAgICAgICBvbmx5RnJlZU1vZGVsczogdHJ1ZSxcbiAgICAgICAgbW9kZWxUeXBlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogXCJPYlR5cGVcIixcbiAgICAgICAgICAgICAgICBvYlR5cGU6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwiU3RhdGVcIiB9LFxuICAgICAgICAgICAgICAgIGVkaXRvcjogT2JqZWN0Q2VsbEVkaXRvcixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlZhcmlhYmxlXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVmFyaWFibGUgaW4gcmluZyBvZiBwb2x5bm9taWFsc1wiLFxuICAgICAgICAgICAgICAgIHNob3J0Y3V0OiBbXCJWXCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiTW9yVHlwZVwiLFxuICAgICAgICAgICAgICAgIG1vclR5cGU6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwiQ29udHJpYnV0aW9uXCIgfSxcbiAgICAgICAgICAgICAgICBlZGl0b3I6IFBvc2l0aXZlQ29udHJpYnV0aW9uRWRpdG9yLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiUG9zaXRpdmUgY29udHJpYnV0aW9uXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQWRkaXRpdmUgbW9ub21pYWwgY29udHJpYnV0aW9uIHRvIHRoZSBzeXN0ZW0gb2YgT0RFc1wiLFxuICAgICAgICAgICAgICAgIHNob3J0Y3V0OiBbXCJQXCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiTW9yVHlwZVwiLFxuICAgICAgICAgICAgICAgIG1vclR5cGU6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwiTmVnYXRpdmVDb250cmlidXRpb25cIiB9LFxuICAgICAgICAgICAgICAgIGVkaXRvcjogTmVnYXRpdmVDb250cmlidXRpb25FZGl0b3IsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJOZWdhdGl2ZSBjb250cmlidXRpb25cIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTdWJ0cmFjdGl2ZSBtb25vbWlhbCBjb250cmlidXRpb24gdG8gdGhlIHN5c3RlbSBvZiBPREVzXCIsXG4gICAgICAgICAgICAgICAgc2hvcnRjdXQ6IFtcIk5cIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBtb2RlbEFuYWx5c2VzOiBbXG4gICAgICAgICAgICBhbmFseXNlcy5wb2x5bm9taWFsT0RFRXF1YXRpb25zKHtcbiAgICAgICAgICAgICAgICBnZXRFcXVhdGlvbnMobW9kZWwsIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoU2lnbmVkUG9seW5vbWlhbE9ERS5wb2x5bm9taWFsT0RFRXF1YXRpb25zKG1vZGVsLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhbmFseXNlcy5wb2x5bm9taWFsT0RFU2ltdWxhdGlvbih7XG4gICAgICAgICAgICAgICAgc2lnbmVkQ29udHJpYnV0aW9uczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzaW11bGF0ZShtb2RlbCwgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhTaWduZWRQb2x5bm9taWFsT0RFLnBvbHlub21pYWxPREVTaW11bGF0aW9uKG1vZGVsLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgfSk7XG59XG4iXSwiZmlsZSI6ImFzc2V0cy9zaWduZWQtcG9seW5vbWlhbC1vZGUtQ0pGRHZEd1UuanMifQ==