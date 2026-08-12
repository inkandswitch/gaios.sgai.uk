const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./object_cell_editor-DW5yEtQd.js","./analysis_tool-Bvgm6Cie.js","./document-BaPUF-Ky.js","./notebook-DqARNRKu.js","./model-B9uNSW6J.js","./index-CvS5Jq0z.js","./contribution_cell_editor-N8Vt-Ay0.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './index-CvS5Jq0z.js';
import { lazy } from 'solid-js';
import { h as ThPolynomialODE } from './document-BaPUF-Ky.js';
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
const ContributionCellEditor = lazy(() => __vitePreload(() => import('./contribution_cell_editor-N8Vt-Ay0.js'),true?__vite__mapDeps([6,2,3,1,4,5,0]):undefined,import.meta.url));
function createPolynomialODETheory(theoryMeta) {
  const thPolynomialODE = new ThPolynomialODE();
  return new Theory({
    ...theoryMeta,
    theory: thPolynomialODE.theory(),
    onlyFreeModels: true,
    modelTypes: [
      {
        tag: "ObType",
        obType: { tag: "Basic", content: "State" },
        editor: ObjectCellEditor,
        name: "Variable",
        description: "State variable in ODE system",
        shortcut: ["V"]
      },
      {
        tag: "MorType",
        morType: { tag: "Basic", content: "Contribution" },
        editor: ContributionCellEditor,
        name: "Contribution",
        description: "Monomial contribution to ODE system",
        shortcut: ["C"]
      }
    ],
    modelAnalyses: [
      polynomialODEEquations({
        getEquations(model, data) {
          return thPolynomialODE.polynomialODEEquations(model, data);
        }
      }),
      polynomialODESimulation({
        signedContributions: false,
        simulate(model, data) {
          return thPolynomialODE.polynomialODESimulation(model, data);
        }
      })
    ]
  });
}

export { createPolynomialODETheory as default };


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLEtBQU0saUJBQW1CLFFBQUssTUFBTSwwQkFBTyxtQ0FBZ0MsQ0FBQztBQUM1RSxLQUFNLHVCQUF5QixRQUFLLE1BQU0sMEJBQU8seUNBQXNDLENBQUM7QUFFeEYsUUFBd0IsMkJBQTBCLFVBQWdDO0FBQzlFLEVBQU0sc0JBQWtCLE1BQUksZUFBZ0I7QUFFNUMsU0FBTyxHQUFJLE9BQU87QUFBQSxJQUNkLEdBQUc7QUFBQSxJQUNILFFBQVEsZ0JBQWdCLE1BQU87QUFBQSxDQUMvQixpQkFBZ0I7QUFBQSxJQUNoQixVQUFZO0FBQUEsQ0FDUjtBQUFBLENBQ0ksVUFBSztBQUFBLENBQ0wsYUFBUSxJQUFFLEdBQUssVUFBUyxTQUFTLFFBQVE7QUFBQSxDQUN6QyxhQUFRO0FBQUEsQ0FDUixXQUFNO0FBQUEsQ0FDTixrQkFBYTtBQUFBLENBQ2IsZ0JBQVUsRUFBQyxDQUFHO0FBQUEsQ0FDbEI7QUFBQSxDQUNBO0FBQUEsQ0FDSSxVQUFLO0FBQUEsQ0FDTCxjQUFTLElBQUUsR0FBSyxVQUFTLFNBQVMsZUFBZTtBQUFBLENBQ2pELGFBQVE7QUFBQSxDQUNSLFdBQU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsQ0FDYixnQkFBVSxFQUFDLENBQUc7QUFBQTtBQUNsQixDQUNKO0FBQUEsSUFDQSxhQUFlO0FBQUEsTUFDWEEsc0JBQWdDO0FBQUEsUUFDNUIsYUFBYSxPQUFPLElBQU07QUFDdEIsQ0FBTyxnQ0FBZ0Isc0JBQXVCLFFBQU8sSUFBSTtBQUFBO0FBQzdELE9BQ0g7QUFBQSxNQUNEQyx1QkFBaUM7QUFBQSxDQUM3QiwwQkFBcUI7QUFBQSxRQUNyQixTQUFTLE9BQU8sSUFBTTtBQUNsQixDQUFPLGdDQUFnQix1QkFBd0IsUUFBTyxJQUFJO0FBQUE7QUFDOUQsQ0FDSDtBQUFBO0FBQ0wsR0FDSDtBQUNMIiwibmFtZXMiOlsiYW5hbHlzZXMucG9seW5vbWlhbE9ERUVxdWF0aW9ucyIsImFuYWx5c2VzLnBvbHlub21pYWxPREVTaW11bGF0aW9uIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zyb250ZW5kL3NyYy9zdGRsaWIvdGhlb3JpZXMvcG9seW5vbWlhbC1vZGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGF6eSB9IGZyb20gXCJzb2xpZC1qc1wiO1xuXG5pbXBvcnQgeyBUaFBvbHlub21pYWxPREUgfSBmcm9tIFwiY2F0bG9nLXdhc21cIjtcbmltcG9ydCB7IFRoZW9yeSwgdHlwZSBUaGVvcnlNZXRhIH0gZnJvbSBcIi4uLy4uL3RoZW9yeVwiO1xuaW1wb3J0ICogYXMgYW5hbHlzZXMgZnJvbSBcIi4uL2FuYWx5c2VzXCI7XG5cbmNvbnN0IE9iamVjdENlbGxFZGl0b3IgPSBsYXp5KCgpID0+IGltcG9ydChcIi4uLy4uL21vZGVsL29iamVjdF9jZWxsX2VkaXRvclwiKSk7XG5jb25zdCBDb250cmlidXRpb25DZWxsRWRpdG9yID0gbGF6eSgoKSA9PiBpbXBvcnQoXCIuLi8uLi9tb2RlbC9jb250cmlidXRpb25fY2VsbF9lZGl0b3JcIikpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQb2x5bm9taWFsT0RFVGhlb3J5KHRoZW9yeU1ldGE6IFRoZW9yeU1ldGEpOiBUaGVvcnkge1xuICAgIGNvbnN0IHRoUG9seW5vbWlhbE9ERSA9IG5ldyBUaFBvbHlub21pYWxPREUoKTtcblxuICAgIHJldHVybiBuZXcgVGhlb3J5KHtcbiAgICAgICAgLi4udGhlb3J5TWV0YSxcbiAgICAgICAgdGhlb3J5OiB0aFBvbHlub21pYWxPREUudGhlb3J5KCksXG4gICAgICAgIG9ubHlGcmVlTW9kZWxzOiB0cnVlLFxuICAgICAgICBtb2RlbFR5cGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk9iVHlwZVwiLFxuICAgICAgICAgICAgICAgIG9iVHlwZTogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJTdGF0ZVwiIH0sXG4gICAgICAgICAgICAgICAgZWRpdG9yOiBPYmplY3RDZWxsRWRpdG9yLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiVmFyaWFibGVcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTdGF0ZSB2YXJpYWJsZSBpbiBPREUgc3lzdGVtXCIsXG4gICAgICAgICAgICAgICAgc2hvcnRjdXQ6IFtcIlZcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogXCJNb3JUeXBlXCIsXG4gICAgICAgICAgICAgICAgbW9yVHlwZTogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJDb250cmlidXRpb25cIiB9LFxuICAgICAgICAgICAgICAgIGVkaXRvcjogQ29udHJpYnV0aW9uQ2VsbEVkaXRvcixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkNvbnRyaWJ1dGlvblwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIk1vbm9taWFsIGNvbnRyaWJ1dGlvbiB0byBPREUgc3lzdGVtXCIsXG4gICAgICAgICAgICAgICAgc2hvcnRjdXQ6IFtcIkNcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBtb2RlbEFuYWx5c2VzOiBbXG4gICAgICAgICAgICBhbmFseXNlcy5wb2x5bm9taWFsT0RFRXF1YXRpb25zKHtcbiAgICAgICAgICAgICAgICBnZXRFcXVhdGlvbnMobW9kZWwsIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoUG9seW5vbWlhbE9ERS5wb2x5bm9taWFsT0RFRXF1YXRpb25zKG1vZGVsLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhbmFseXNlcy5wb2x5bm9taWFsT0RFU2ltdWxhdGlvbih7XG4gICAgICAgICAgICAgICAgc2lnbmVkQ29udHJpYnV0aW9uczogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2ltdWxhdGUobW9kZWwsIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoUG9seW5vbWlhbE9ERS5wb2x5bm9taWFsT0RFU2ltdWxhdGlvbihtb2RlbCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgIH0pO1xufVxuIl0sImZpbGUiOiJhc3NldHMvcG9seW5vbWlhbC1vZGUtRGRQTHlqeGYuanMifQ==