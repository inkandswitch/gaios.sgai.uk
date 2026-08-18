const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./object_cell_editor-C1-p9FCa.js","./analysis_tool-Dx9JOKUM.js","./model-hspTLkzk.js","./index-CyfczNyW.js","./morphism_cell_editor-B99y296L.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './index-CyfczNyW.js';
import { lazy } from 'solid-js';
import { g as ThSignedCategory, a as Theory } from './analysis_tool-Dx9JOKUM.js';
import { m as modelGraph, h as motifFinding, l as linearODE, i as lotkaVolterra } from './analyses-1I3WezmL.js';
import 'solid-js/web';
import './model-hspTLkzk.js';
import 'solid-js/store';
import '@automerge/automerge-repo';
import '@automerge/automerge-repo-network-websocket';
import '@automerge/automerge-repo-storage-indexeddb';
import '@automerge/automerge/slim';
import '@automerge/automerge';
import '@inkandswitch/patchwork-providers';

const ObjectCellEditor = lazy(() => __vitePreload(() => import('./object_cell_editor-C1-p9FCa.js'),true?__vite__mapDeps([0,1,2,3]):undefined,import.meta.url));
const MorphismCellEditor = lazy(() => __vitePreload(() => import('./morphism_cell_editor-B99y296L.js'),true?__vite__mapDeps([4,1,2,3,0]):undefined,import.meta.url));
function createCausalLoopTheory(theoryMeta) {
  const thSignedCategory = new ThSignedCategory();
  return new Theory({
    ...theoryMeta,
    theory: thSignedCategory.theory(),
    inclusions: ["reg-net", "causal-loop-delays", "indeterminate-causal-loop"],
    onlyFreeModels: true,
    modelTypes: [
      {
        tag: "ObType",
        obType: { tag: "Basic", content: "Object" },
        editor: ObjectCellEditor,
        name: "Variable",
        shortcut: ["V"],
        description: "Variable quantity"
      },
      {
        tag: "MorType",
        morType: {
          tag: "Hom",
          content: { tag: "Basic", content: "Object" }
        },
        editor: MorphismCellEditor,
        name: "Positive link",
        shortcut: ["P"],
        description: "Variables change in the same direction",
        arrowStyle: "plus",
        preferUnnamed: true
      },
      {
        tag: "MorType",
        morType: { tag: "Basic", content: "Negative" },
        editor: MorphismCellEditor,
        name: "Negative link",
        shortcut: ["N"],
        description: "Variables change in the opposite direction",
        arrowStyle: "minus",
        preferUnnamed: true
      }
    ],
    modelAnalyses: [
      modelGraph({
        id: "diagram",
        name: "Visualization",
        description: "Visualize the causal loop diagram",
        help: "visualization"
      }),
      motifFinding({
        id: "negative-loops",
        name: "Balancing loops",
        description: "Analyze the diagram for balancing loops",
        help: "loops",
        findMotifs(model, options) {
          return thSignedCategory.negativeLoops(model, options);
        }
      }),
      motifFinding({
        id: "positive-loops",
        name: "Reinforcing loops",
        description: "Analyze the diagram for reinforcing loops",
        help: "loops",
        findMotifs(model, options) {
          return thSignedCategory.positiveLoops(model, options);
        }
      }),
      linearODE({
        simulate: (model, data) => thSignedCategory.linearODE(model, data)
      }),
      lotkaVolterra({
        simulate: (model, data) => thSignedCategory.lotkaVolterra(model, data)
      })
    ]
  });
}

export { createCausalLoopTheory as default };


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsS0FBTSxpQkFBbUIsUUFBSyxNQUFNLDBCQUFPLG1DQUFnQyxDQUFDO0FBQzVFLEtBQU0sbUJBQXFCLFFBQUssTUFBTSwwQkFBTyxxQ0FBa0MsQ0FBQztBQUVoRixRQUF3Qix3QkFBdUIsVUFBZ0M7QUFDM0UsRUFBTSx1QkFBbUIsTUFBSSxnQkFBaUI7QUFFOUMsU0FBTyxHQUFJLE9BQU87QUFBQSxJQUNkLEdBQUc7QUFBQSxJQUNILFFBQVEsaUJBQWlCLE1BQU87QUFBQSxDQUNoQyxhQUFZLEdBQUMsU0FBVyx3QkFBc0IsMkJBQTJCO0FBQUEsQ0FDekUsaUJBQWdCO0FBQUEsSUFDaEIsVUFBWTtBQUFBLENBQ1I7QUFBQSxDQUNJLFVBQUs7QUFBQSxDQUNMLGFBQVEsSUFBRSxHQUFLLFVBQVMsU0FBUyxTQUFTO0FBQUEsQ0FDMUMsYUFBUTtBQUFBLENBQ1IsV0FBTTtBQUFBLFFBQ04sVUFBVSxDQUFDLEdBQUc7QUFBQSxRQUNkLFdBQWE7QUFBQSxDQUNqQjtBQUFBLENBQ0E7QUFBQSxDQUNJLFVBQUs7QUFBQSxRQUNMLE9BQVM7QUFBQSxDQUNMLFlBQUs7QUFBQSxDQUNMLGdCQUFTLEdBQUUsSUFBSyxXQUFTLFNBQVMsQ0FBUztBQUFBLENBQy9DO0FBQUEsQ0FDQSxhQUFRO0FBQUEsQ0FDUixXQUFNO0FBQUEsUUFDTixVQUFVLENBQUMsR0FBRztBQUFBLENBQ2Qsa0JBQWE7QUFBQSxDQUNiLGlCQUFZO0FBQUEsUUFDWixhQUFlO0FBQUEsQ0FDbkI7QUFBQSxDQUNBO0FBQUEsQ0FDSSxVQUFLO0FBQUEsQ0FDTCxjQUFTLElBQUUsR0FBSyxVQUFTLFNBQVMsV0FBVztBQUFBLENBQzdDLGFBQVE7QUFBQSxDQUNSLFdBQU07QUFBQSxRQUNOLFVBQVUsQ0FBQyxHQUFHO0FBQUEsQ0FDZCxrQkFBYTtBQUFBLENBQ2IsaUJBQVk7QUFBQSxRQUNaLGFBQWU7QUFBQTtBQUNuQixDQUNKO0FBQUEsSUFDQSxhQUFlO0FBQUEsTUFDWEEsVUFBb0I7QUFBQSxDQUNoQixTQUFJO0FBQUEsQ0FDSixXQUFNO0FBQUEsQ0FDTixrQkFBYTtBQUFBLFFBQ2IsSUFBTTtBQUFBLE9BQ1Q7QUFBQSxNQUNEQyxZQUFzQjtBQUFBLENBQ2xCLFNBQUk7QUFBQSxDQUNKLFdBQU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsQ0FDYixXQUFNO0FBQUEsUUFDTixXQUFXLE9BQU8sT0FBUztBQUN2QixDQUFPLGlDQUFpQixhQUFjLFFBQU8sT0FBTztBQUFBO0FBQ3hELE9BQ0g7QUFBQSxNQUNEQSxZQUFzQjtBQUFBLENBQ2xCLFNBQUk7QUFBQSxDQUNKLFdBQU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsQ0FDYixXQUFNO0FBQUEsUUFDTixXQUFXLE9BQU8sT0FBUztBQUN2QixDQUFPLGlDQUFpQixhQUFjLFFBQU8sT0FBTztBQUFBO0FBQ3hELE9BQ0g7QUFBQSxNQUNEQyxTQUFtQjtBQUFBLFFBQ2YsVUFBVSxDQUFDLE1BQU8sTUFBUyxvQkFBaUIsV0FBVSxPQUFPLElBQUk7QUFBQSxPQUNwRTtBQUFBLE1BQ0RDLGFBQXVCO0FBQUEsUUFDbkIsVUFBVSxDQUFDLE1BQU8sTUFBUyxvQkFBaUIsZUFBYyxPQUFPLElBQUk7QUFBQSxDQUN4RTtBQUFBO0FBQ0wsR0FDSDtBQUNMIiwibmFtZXMiOlsiYW5hbHlzZXMubW9kZWxHcmFwaCIsImFuYWx5c2VzLm1vdGlmRmluZGluZyIsImFuYWx5c2VzLmxpbmVhck9ERSIsImFuYWx5c2VzLmxvdGthVm9sdGVycmEiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vZnJvbnRlbmQvc3JjL3N0ZGxpYi90aGVvcmllcy9jYXVzYWwtbG9vcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsYXp5IH0gZnJvbSBcInNvbGlkLWpzXCI7XG5cbmltcG9ydCB7IFRoU2lnbmVkQ2F0ZWdvcnkgfSBmcm9tIFwiY2F0bG9nLXdhc21cIjtcbmltcG9ydCB7IFRoZW9yeSwgdHlwZSBUaGVvcnlNZXRhIH0gZnJvbSBcIi4uLy4uL3RoZW9yeVwiO1xuaW1wb3J0ICogYXMgYW5hbHlzZXMgZnJvbSBcIi4uL2FuYWx5c2VzXCI7XG5cbmNvbnN0IE9iamVjdENlbGxFZGl0b3IgPSBsYXp5KCgpID0+IGltcG9ydChcIi4uLy4uL21vZGVsL29iamVjdF9jZWxsX2VkaXRvclwiKSk7XG5jb25zdCBNb3JwaGlzbUNlbGxFZGl0b3IgPSBsYXp5KCgpID0+IGltcG9ydChcIi4uLy4uL21vZGVsL21vcnBoaXNtX2NlbGxfZWRpdG9yXCIpKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ2F1c2FsTG9vcFRoZW9yeSh0aGVvcnlNZXRhOiBUaGVvcnlNZXRhKTogVGhlb3J5IHtcbiAgICBjb25zdCB0aFNpZ25lZENhdGVnb3J5ID0gbmV3IFRoU2lnbmVkQ2F0ZWdvcnkoKTtcblxuICAgIHJldHVybiBuZXcgVGhlb3J5KHtcbiAgICAgICAgLi4udGhlb3J5TWV0YSxcbiAgICAgICAgdGhlb3J5OiB0aFNpZ25lZENhdGVnb3J5LnRoZW9yeSgpLFxuICAgICAgICBpbmNsdXNpb25zOiBbXCJyZWctbmV0XCIsIFwiY2F1c2FsLWxvb3AtZGVsYXlzXCIsIFwiaW5kZXRlcm1pbmF0ZS1jYXVzYWwtbG9vcFwiXSxcbiAgICAgICAgb25seUZyZWVNb2RlbHM6IHRydWUsXG4gICAgICAgIG1vZGVsVHlwZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiT2JUeXBlXCIsXG4gICAgICAgICAgICAgICAgb2JUeXBlOiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcIk9iamVjdFwiIH0sXG4gICAgICAgICAgICAgICAgZWRpdG9yOiBPYmplY3RDZWxsRWRpdG9yLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiVmFyaWFibGVcIixcbiAgICAgICAgICAgICAgICBzaG9ydGN1dDogW1wiVlwiXSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJWYXJpYWJsZSBxdWFudGl0eVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiTW9yVHlwZVwiLFxuICAgICAgICAgICAgICAgIG1vclR5cGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiBcIkhvbVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcIk9iamVjdFwiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlZGl0b3I6IE1vcnBoaXNtQ2VsbEVkaXRvcixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlBvc2l0aXZlIGxpbmtcIixcbiAgICAgICAgICAgICAgICBzaG9ydGN1dDogW1wiUFwiXSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJWYXJpYWJsZXMgY2hhbmdlIGluIHRoZSBzYW1lIGRpcmVjdGlvblwiLFxuICAgICAgICAgICAgICAgIGFycm93U3R5bGU6IFwicGx1c1wiLFxuICAgICAgICAgICAgICAgIHByZWZlclVubmFtZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogXCJNb3JUeXBlXCIsXG4gICAgICAgICAgICAgICAgbW9yVHlwZTogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJOZWdhdGl2ZVwiIH0sXG4gICAgICAgICAgICAgICAgZWRpdG9yOiBNb3JwaGlzbUNlbGxFZGl0b3IsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJOZWdhdGl2ZSBsaW5rXCIsXG4gICAgICAgICAgICAgICAgc2hvcnRjdXQ6IFtcIk5cIl0sXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVmFyaWFibGVzIGNoYW5nZSBpbiB0aGUgb3Bwb3NpdGUgZGlyZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgYXJyb3dTdHlsZTogXCJtaW51c1wiLFxuICAgICAgICAgICAgICAgIHByZWZlclVubmFtZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBtb2RlbEFuYWx5c2VzOiBbXG4gICAgICAgICAgICBhbmFseXNlcy5tb2RlbEdyYXBoKHtcbiAgICAgICAgICAgICAgICBpZDogXCJkaWFncmFtXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJWaXN1YWxpemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVmlzdWFsaXplIHRoZSBjYXVzYWwgbG9vcCBkaWFncmFtXCIsXG4gICAgICAgICAgICAgICAgaGVscDogXCJ2aXN1YWxpemF0aW9uXCIsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuYWx5c2VzLm1vdGlmRmluZGluZyh7XG4gICAgICAgICAgICAgICAgaWQ6IFwibmVnYXRpdmUtbG9vcHNcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJhbGFuY2luZyBsb29wc1wiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkFuYWx5emUgdGhlIGRpYWdyYW0gZm9yIGJhbGFuY2luZyBsb29wc1wiLFxuICAgICAgICAgICAgICAgIGhlbHA6IFwibG9vcHNcIixcbiAgICAgICAgICAgICAgICBmaW5kTW90aWZzKG1vZGVsLCBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aFNpZ25lZENhdGVnb3J5Lm5lZ2F0aXZlTG9vcHMobW9kZWwsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuYWx5c2VzLm1vdGlmRmluZGluZyh7XG4gICAgICAgICAgICAgICAgaWQ6IFwicG9zaXRpdmUtbG9vcHNcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlJlaW5mb3JjaW5nIGxvb3BzXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQW5hbHl6ZSB0aGUgZGlhZ3JhbSBmb3IgcmVpbmZvcmNpbmcgbG9vcHNcIixcbiAgICAgICAgICAgICAgICBoZWxwOiBcImxvb3BzXCIsXG4gICAgICAgICAgICAgICAgZmluZE1vdGlmcyhtb2RlbCwgb3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhTaWduZWRDYXRlZ29yeS5wb3NpdGl2ZUxvb3BzKG1vZGVsLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhbmFseXNlcy5saW5lYXJPREUoe1xuICAgICAgICAgICAgICAgIHNpbXVsYXRlOiAobW9kZWwsIGRhdGEpID0+IHRoU2lnbmVkQ2F0ZWdvcnkubGluZWFyT0RFKG1vZGVsLCBkYXRhKSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYW5hbHlzZXMubG90a2FWb2x0ZXJyYSh7XG4gICAgICAgICAgICAgICAgc2ltdWxhdGU6IChtb2RlbCwgZGF0YSkgPT4gdGhTaWduZWRDYXRlZ29yeS5sb3RrYVZvbHRlcnJhKG1vZGVsLCBkYXRhKSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgIH0pO1xufVxuIl0sImZpbGUiOiJhc3NldHMvY2F1c2FsLWxvb3AtQ0tTeWlKU1AuanMifQ==