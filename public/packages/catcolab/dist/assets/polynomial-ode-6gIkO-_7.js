const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./object_cell_editor-Bz8VpGR6.js","./analysis_tool-uDJCjaik.js","./model-hspTLkzk.js","./index-Hw8dIQCV.js","./contribution_cell_editor-CSmmFp-v.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './index-Hw8dIQCV.js';
import { lazy } from 'solid-js';
import { e as ThPolynomialODE, a as Theory } from './analysis_tool-uDJCjaik.js';
import { f as polynomialODEEquations, g as polynomialODESimulation } from './analyses-DQLeO9Jq.js';
import 'solid-js/web';
import './model-hspTLkzk.js';
import 'solid-js/store';
import '@automerge/automerge-repo';
import '@automerge/automerge-repo-network-websocket';
import '@automerge/automerge-repo-storage-indexeddb';
import '@automerge/automerge/slim';
import '@automerge/automerge';
import '@inkandswitch/patchwork-providers';

const ObjectCellEditor = lazy(() => __vitePreload(() => import('./object_cell_editor-Bz8VpGR6.js'),true?__vite__mapDeps([0,1,2,3]):undefined,import.meta.url));
const ContributionCellEditor = lazy(() => __vitePreload(() => import('./contribution_cell_editor-CSmmFp-v.js'),true?__vite__mapDeps([4,1,2,3,0]):undefined,import.meta.url));
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


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsS0FBTSxpQkFBbUIsUUFBSyxNQUFNLDBCQUFPLG1DQUFnQyxDQUFDO0FBQzVFLEtBQU0sdUJBQXlCLFFBQUssTUFBTSwwQkFBTyx5Q0FBc0MsQ0FBQztBQUV4RixRQUF3QiwyQkFBMEIsVUFBZ0M7QUFDOUUsRUFBTSxzQkFBa0IsTUFBSSxlQUFnQjtBQUU1QyxTQUFPLEdBQUksT0FBTztBQUFBLElBQ2QsR0FBRztBQUFBLElBQ0gsUUFBUSxnQkFBZ0IsTUFBTztBQUFBLENBQy9CLGlCQUFnQjtBQUFBLElBQ2hCLFVBQVk7QUFBQSxDQUNSO0FBQUEsQ0FDSSxVQUFLO0FBQUEsQ0FDTCxhQUFRLElBQUUsR0FBSyxVQUFTLFNBQVMsUUFBUTtBQUFBLENBQ3pDLGFBQVE7QUFBQSxDQUNSLFdBQU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsQ0FDYixnQkFBVSxFQUFDLENBQUc7QUFBQSxDQUNsQjtBQUFBLENBQ0E7QUFBQSxDQUNJLFVBQUs7QUFBQSxDQUNMLGNBQVMsSUFBRSxHQUFLLFVBQVMsU0FBUyxlQUFlO0FBQUEsQ0FDakQsYUFBUTtBQUFBLENBQ1IsV0FBTTtBQUFBLENBQ04sa0JBQWE7QUFBQSxDQUNiLGdCQUFVLEVBQUMsQ0FBRztBQUFBO0FBQ2xCLENBQ0o7QUFBQSxJQUNBLGFBQWU7QUFBQSxNQUNYQSxzQkFBZ0M7QUFBQSxRQUM1QixhQUFhLE9BQU8sSUFBTTtBQUN0QixDQUFPLGdDQUFnQixzQkFBdUIsUUFBTyxJQUFJO0FBQUE7QUFDN0QsT0FDSDtBQUFBLE1BQ0RDLHVCQUFpQztBQUFBLENBQzdCLDBCQUFxQjtBQUFBLFFBQ3JCLFNBQVMsT0FBTyxJQUFNO0FBQ2xCLENBQU8sZ0NBQWdCLHVCQUF3QixRQUFPLElBQUk7QUFBQTtBQUM5RCxDQUNIO0FBQUE7QUFDTCxHQUNIO0FBQ0wiLCJuYW1lcyI6WyJhbmFseXNlcy5wb2x5bm9taWFsT0RFRXF1YXRpb25zIiwiYW5hbHlzZXMucG9seW5vbWlhbE9ERVNpbXVsYXRpb24iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vZnJvbnRlbmQvc3JjL3N0ZGxpYi90aGVvcmllcy9wb2x5bm9taWFsLW9kZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsYXp5IH0gZnJvbSBcInNvbGlkLWpzXCI7XG5cbmltcG9ydCB7IFRoUG9seW5vbWlhbE9ERSB9IGZyb20gXCJjYXRsb2ctd2FzbVwiO1xuaW1wb3J0IHsgVGhlb3J5LCB0eXBlIFRoZW9yeU1ldGEgfSBmcm9tIFwiLi4vLi4vdGhlb3J5XCI7XG5pbXBvcnQgKiBhcyBhbmFseXNlcyBmcm9tIFwiLi4vYW5hbHlzZXNcIjtcblxuY29uc3QgT2JqZWN0Q2VsbEVkaXRvciA9IGxhenkoKCkgPT4gaW1wb3J0KFwiLi4vLi4vbW9kZWwvb2JqZWN0X2NlbGxfZWRpdG9yXCIpKTtcbmNvbnN0IENvbnRyaWJ1dGlvbkNlbGxFZGl0b3IgPSBsYXp5KCgpID0+IGltcG9ydChcIi4uLy4uL21vZGVsL2NvbnRyaWJ1dGlvbl9jZWxsX2VkaXRvclwiKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVBvbHlub21pYWxPREVUaGVvcnkodGhlb3J5TWV0YTogVGhlb3J5TWV0YSk6IFRoZW9yeSB7XG4gICAgY29uc3QgdGhQb2x5bm9taWFsT0RFID0gbmV3IFRoUG9seW5vbWlhbE9ERSgpO1xuXG4gICAgcmV0dXJuIG5ldyBUaGVvcnkoe1xuICAgICAgICAuLi50aGVvcnlNZXRhLFxuICAgICAgICB0aGVvcnk6IHRoUG9seW5vbWlhbE9ERS50aGVvcnkoKSxcbiAgICAgICAgb25seUZyZWVNb2RlbHM6IHRydWUsXG4gICAgICAgIG1vZGVsVHlwZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiT2JUeXBlXCIsXG4gICAgICAgICAgICAgICAgb2JUeXBlOiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcIlN0YXRlXCIgfSxcbiAgICAgICAgICAgICAgICBlZGl0b3I6IE9iamVjdENlbGxFZGl0b3IsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJWYXJpYWJsZVwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlN0YXRlIHZhcmlhYmxlIGluIE9ERSBzeXN0ZW1cIixcbiAgICAgICAgICAgICAgICBzaG9ydGN1dDogW1wiVlwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk1vclR5cGVcIixcbiAgICAgICAgICAgICAgICBtb3JUeXBlOiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcIkNvbnRyaWJ1dGlvblwiIH0sXG4gICAgICAgICAgICAgICAgZWRpdG9yOiBDb250cmlidXRpb25DZWxsRWRpdG9yLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29udHJpYnV0aW9uXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTW9ub21pYWwgY29udHJpYnV0aW9uIHRvIE9ERSBzeXN0ZW1cIixcbiAgICAgICAgICAgICAgICBzaG9ydGN1dDogW1wiQ1wiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIG1vZGVsQW5hbHlzZXM6IFtcbiAgICAgICAgICAgIGFuYWx5c2VzLnBvbHlub21pYWxPREVFcXVhdGlvbnMoe1xuICAgICAgICAgICAgICAgIGdldEVxdWF0aW9ucyhtb2RlbCwgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhQb2x5bm9taWFsT0RFLnBvbHlub21pYWxPREVFcXVhdGlvbnMobW9kZWwsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuYWx5c2VzLnBvbHlub21pYWxPREVTaW11bGF0aW9uKHtcbiAgICAgICAgICAgICAgICBzaWduZWRDb250cmlidXRpb25zOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaW11bGF0ZShtb2RlbCwgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhQb2x5bm9taWFsT0RFLnBvbHlub21pYWxPREVTaW11bGF0aW9uKG1vZGVsLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgfSk7XG59XG4iXSwiZmlsZSI6ImFzc2V0cy9wb2x5bm9taWFsLW9kZS02Z0lrTy1fNy5qcyJ9