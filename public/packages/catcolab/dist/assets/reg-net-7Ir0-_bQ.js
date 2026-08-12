const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./object_cell_editor-DW5yEtQd.js","./analysis_tool-Bvgm6Cie.js","./document-BaPUF-Ky.js","./notebook-DqARNRKu.js","./model-B9uNSW6J.js","./index-CvS5Jq0z.js","./morphism_cell_editor-COVxLmSB.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './index-CvS5Jq0z.js';
import { lazy } from 'solid-js';
import { k as ThSignedCategory } from './document-BaPUF-Ky.js';
import { T as Theory } from './analysis_tool-Bvgm6Cie.js';
import { m as modelGraph, h as motifFinding, l as linearODE, i as lotkaVolterra } from './analyses-dUWNojZq.js';
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
const MorphismCellEditor = lazy(() => __vitePreload(() => import('./morphism_cell_editor-COVxLmSB.js'),true?__vite__mapDeps([6,2,3,1,4,5,0]):undefined,import.meta.url));
function createRegulatoryNetworkTheory(theoryMeta) {
  const thSignedCategory = new ThSignedCategory();
  return new Theory({
    ...theoryMeta,
    theory: thSignedCategory.theory(),
    inclusions: ["causal-loop", "causal-loop-delays", "indeterminate-causal-loop"],
    onlyFreeModels: true,
    modelTypes: [
      {
        tag: "ObType",
        obType: { tag: "Basic", content: "Object" },
        editor: ObjectCellEditor,
        name: "Species",
        shortcut: ["S"],
        description: "Biochemical species in the network"
      },
      {
        tag: "MorType",
        morType: {
          tag: "Hom",
          content: { tag: "Basic", content: "Object" }
        },
        editor: MorphismCellEditor,
        name: "Promotion",
        shortcut: ["P"],
        description: "Positive interaction: activates or promotes",
        preferUnnamed: true
      },
      {
        tag: "MorType",
        morType: { tag: "Basic", content: "Negative" },
        editor: MorphismCellEditor,
        name: "Inhibition",
        shortcut: ["N"],
        description: "Negative interaction: represses or inhibits",
        arrowStyle: "flat",
        preferUnnamed: true
      }
    ],
    modelAnalyses: [
      modelGraph({
        id: "diagram",
        name: "Visualization",
        description: "Visualize the regulatory network",
        help: "visualization"
      }),
      motifFinding({
        id: "positive-loops",
        name: "Positive feedback",
        description: "Analyze the network for positive feedback loops",
        help: "loops",
        findMotifs(model, options) {
          return thSignedCategory.positiveLoops(model, options);
        }
      }),
      motifFinding({
        id: "negative-loops",
        name: "Negative feedback",
        description: "Analyze the network for negative feedback loops",
        help: "loops",
        findMotifs(model, options) {
          return thSignedCategory.negativeLoops(model, options);
        }
      }),
      linearODE({
        simulate: (model, data) => thSignedCategory.linearODE(model, data)
      }),
      lotkaVolterra({
        simulate(model, data) {
          return thSignedCategory.lotkaVolterra(model, data);
        }
      })
    ]
  });
}

export { createRegulatoryNetworkTheory as default };


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLEtBQU0saUJBQW1CLFFBQUssTUFBTSwwQkFBTyxtQ0FBZ0MsQ0FBQztBQUM1RSxLQUFNLG1CQUFxQixRQUFLLE1BQU0sMEJBQU8scUNBQWtDLENBQUM7QUFFaEYsUUFBd0IsK0JBQThCLFVBQWdDO0FBQ2xGLEVBQU0sdUJBQW1CLE1BQUksZ0JBQWlCO0FBRTlDLFNBQU8sR0FBSSxPQUFPO0FBQUEsSUFDZCxHQUFHO0FBQUEsSUFDSCxRQUFRLGlCQUFpQixNQUFPO0FBQUEsQ0FDaEMsYUFBWSxHQUFDLGFBQWUsd0JBQXNCLDJCQUEyQjtBQUFBLENBQzdFLGlCQUFnQjtBQUFBLElBQ2hCLFVBQVk7QUFBQSxDQUNSO0FBQUEsQ0FDSSxVQUFLO0FBQUEsQ0FDTCxhQUFRLElBQUUsR0FBSyxVQUFTLFNBQVMsU0FBUztBQUFBLENBQzFDLGFBQVE7QUFBQSxDQUNSLFdBQU07QUFBQSxRQUNOLFVBQVUsQ0FBQyxHQUFHO0FBQUEsUUFDZCxXQUFhO0FBQUEsQ0FDakI7QUFBQSxDQUNBO0FBQUEsQ0FDSSxVQUFLO0FBQUEsUUFDTCxPQUFTO0FBQUEsQ0FDTCxZQUFLO0FBQUEsQ0FDTCxnQkFBUyxHQUFFLElBQUssV0FBUyxTQUFTLENBQVM7QUFBQSxDQUMvQztBQUFBLENBQ0EsYUFBUTtBQUFBLENBQ1IsV0FBTTtBQUFBLFFBQ04sVUFBVSxDQUFDLEdBQUc7QUFBQSxDQUNkLGtCQUFhO0FBQUEsUUFDYixhQUFlO0FBQUEsQ0FDbkI7QUFBQSxDQUNBO0FBQUEsQ0FDSSxVQUFLO0FBQUEsQ0FDTCxjQUFTLElBQUUsR0FBSyxVQUFTLFNBQVMsV0FBVztBQUFBLENBQzdDLGFBQVE7QUFBQSxDQUNSLFdBQU07QUFBQSxRQUNOLFVBQVUsQ0FBQyxHQUFHO0FBQUEsQ0FDZCxrQkFBYTtBQUFBLENBQ2IsaUJBQVk7QUFBQSxRQUNaLGFBQWU7QUFBQTtBQUNuQixDQUNKO0FBQUEsSUFDQSxhQUFlO0FBQUEsTUFDWEEsVUFBb0I7QUFBQSxDQUNoQixTQUFJO0FBQUEsQ0FDSixXQUFNO0FBQUEsQ0FDTixrQkFBYTtBQUFBLFFBQ2IsSUFBTTtBQUFBLE9BQ1Q7QUFBQSxNQUNEQyxZQUFzQjtBQUFBLENBQ2xCLFNBQUk7QUFBQSxDQUNKLFdBQU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsQ0FDYixXQUFNO0FBQUEsUUFDTixXQUFXLE9BQU8sT0FBUztBQUN2QixDQUFPLGlDQUFpQixhQUFjLFFBQU8sT0FBTztBQUFBO0FBQ3hELE9BQ0g7QUFBQSxNQUNEQSxZQUFzQjtBQUFBLENBQ2xCLFNBQUk7QUFBQSxDQUNKLFdBQU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsQ0FDYixXQUFNO0FBQUEsUUFDTixXQUFXLE9BQU8sT0FBUztBQUN2QixDQUFPLGlDQUFpQixhQUFjLFFBQU8sT0FBTztBQUFBO0FBQ3hELE9BQ0g7QUFBQSxNQUNEQyxTQUFtQjtBQUFBLFFBQ2YsVUFBVSxDQUFDLE1BQU8sTUFBUyxvQkFBaUIsV0FBVSxPQUFPLElBQUk7QUFBQSxPQUNwRTtBQUFBLE1BQ0RDLGFBQXVCO0FBQUEsUUFDbkIsU0FBUyxPQUFPLElBQU07QUFDbEIsQ0FBTyxpQ0FBaUIsYUFBYyxRQUFPLElBQUk7QUFBQTtBQUNyRCxDQUNIO0FBQUE7QUFDTCxHQUNIO0FBQ0wiLCJuYW1lcyI6WyJhbmFseXNlcy5tb2RlbEdyYXBoIiwiYW5hbHlzZXMubW90aWZGaW5kaW5nIiwiYW5hbHlzZXMubGluZWFyT0RFIiwiYW5hbHlzZXMubG90a2FWb2x0ZXJyYSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyIuLi8uLi8uLi9mcm9udGVuZC9zcmMvc3RkbGliL3RoZW9yaWVzL3JlZy1uZXQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGF6eSB9IGZyb20gXCJzb2xpZC1qc1wiO1xuXG5pbXBvcnQgeyBUaFNpZ25lZENhdGVnb3J5IH0gZnJvbSBcImNhdGxvZy13YXNtXCI7XG5pbXBvcnQgeyBUaGVvcnksIHR5cGUgVGhlb3J5TWV0YSB9IGZyb20gXCIuLi8uLi90aGVvcnlcIjtcbmltcG9ydCAqIGFzIGFuYWx5c2VzIGZyb20gXCIuLi9hbmFseXNlc1wiO1xuXG5jb25zdCBPYmplY3RDZWxsRWRpdG9yID0gbGF6eSgoKSA9PiBpbXBvcnQoXCIuLi8uLi9tb2RlbC9vYmplY3RfY2VsbF9lZGl0b3JcIikpO1xuY29uc3QgTW9ycGhpc21DZWxsRWRpdG9yID0gbGF6eSgoKSA9PiBpbXBvcnQoXCIuLi8uLi9tb2RlbC9tb3JwaGlzbV9jZWxsX2VkaXRvclwiKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVJlZ3VsYXRvcnlOZXR3b3JrVGhlb3J5KHRoZW9yeU1ldGE6IFRoZW9yeU1ldGEpOiBUaGVvcnkge1xuICAgIGNvbnN0IHRoU2lnbmVkQ2F0ZWdvcnkgPSBuZXcgVGhTaWduZWRDYXRlZ29yeSgpO1xuXG4gICAgcmV0dXJuIG5ldyBUaGVvcnkoe1xuICAgICAgICAuLi50aGVvcnlNZXRhLFxuICAgICAgICB0aGVvcnk6IHRoU2lnbmVkQ2F0ZWdvcnkudGhlb3J5KCksXG4gICAgICAgIGluY2x1c2lvbnM6IFtcImNhdXNhbC1sb29wXCIsIFwiY2F1c2FsLWxvb3AtZGVsYXlzXCIsIFwiaW5kZXRlcm1pbmF0ZS1jYXVzYWwtbG9vcFwiXSxcbiAgICAgICAgb25seUZyZWVNb2RlbHM6IHRydWUsXG4gICAgICAgIG1vZGVsVHlwZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiT2JUeXBlXCIsXG4gICAgICAgICAgICAgICAgb2JUeXBlOiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcIk9iamVjdFwiIH0sXG4gICAgICAgICAgICAgICAgZWRpdG9yOiBPYmplY3RDZWxsRWRpdG9yLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiU3BlY2llc1wiLFxuICAgICAgICAgICAgICAgIHNob3J0Y3V0OiBbXCJTXCJdLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkJpb2NoZW1pY2FsIHNwZWNpZXMgaW4gdGhlIG5ldHdvcmtcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk1vclR5cGVcIixcbiAgICAgICAgICAgICAgICBtb3JUeXBlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogXCJIb21cIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJPYmplY3RcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZWRpdG9yOiBNb3JwaGlzbUNlbGxFZGl0b3IsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJQcm9tb3Rpb25cIixcbiAgICAgICAgICAgICAgICBzaG9ydGN1dDogW1wiUFwiXSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJQb3NpdGl2ZSBpbnRlcmFjdGlvbjogYWN0aXZhdGVzIG9yIHByb21vdGVzXCIsXG4gICAgICAgICAgICAgICAgcHJlZmVyVW5uYW1lZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk1vclR5cGVcIixcbiAgICAgICAgICAgICAgICBtb3JUeXBlOiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcIk5lZ2F0aXZlXCIgfSxcbiAgICAgICAgICAgICAgICBlZGl0b3I6IE1vcnBoaXNtQ2VsbEVkaXRvcixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkluaGliaXRpb25cIixcbiAgICAgICAgICAgICAgICBzaG9ydGN1dDogW1wiTlwiXSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJOZWdhdGl2ZSBpbnRlcmFjdGlvbjogcmVwcmVzc2VzIG9yIGluaGliaXRzXCIsXG4gICAgICAgICAgICAgICAgYXJyb3dTdHlsZTogXCJmbGF0XCIsXG4gICAgICAgICAgICAgICAgcHJlZmVyVW5uYW1lZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIG1vZGVsQW5hbHlzZXM6IFtcbiAgICAgICAgICAgIGFuYWx5c2VzLm1vZGVsR3JhcGgoe1xuICAgICAgICAgICAgICAgIGlkOiBcImRpYWdyYW1cIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlZpc3VhbGl6YXRpb25cIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJWaXN1YWxpemUgdGhlIHJlZ3VsYXRvcnkgbmV0d29ya1wiLFxuICAgICAgICAgICAgICAgIGhlbHA6IFwidmlzdWFsaXphdGlvblwiLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhbmFseXNlcy5tb3RpZkZpbmRpbmcoe1xuICAgICAgICAgICAgICAgIGlkOiBcInBvc2l0aXZlLWxvb3BzXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJQb3NpdGl2ZSBmZWVkYmFja1wiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkFuYWx5emUgdGhlIG5ldHdvcmsgZm9yIHBvc2l0aXZlIGZlZWRiYWNrIGxvb3BzXCIsXG4gICAgICAgICAgICAgICAgaGVscDogXCJsb29wc1wiLFxuICAgICAgICAgICAgICAgIGZpbmRNb3RpZnMobW9kZWwsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoU2lnbmVkQ2F0ZWdvcnkucG9zaXRpdmVMb29wcyhtb2RlbCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYW5hbHlzZXMubW90aWZGaW5kaW5nKHtcbiAgICAgICAgICAgICAgICBpZDogXCJuZWdhdGl2ZS1sb29wc1wiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiTmVnYXRpdmUgZmVlZGJhY2tcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJBbmFseXplIHRoZSBuZXR3b3JrIGZvciBuZWdhdGl2ZSBmZWVkYmFjayBsb29wc1wiLFxuICAgICAgICAgICAgICAgIGhlbHA6IFwibG9vcHNcIixcbiAgICAgICAgICAgICAgICBmaW5kTW90aWZzKG1vZGVsLCBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aFNpZ25lZENhdGVnb3J5Lm5lZ2F0aXZlTG9vcHMobW9kZWwsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuYWx5c2VzLmxpbmVhck9ERSh7XG4gICAgICAgICAgICAgICAgc2ltdWxhdGU6IChtb2RlbCwgZGF0YSkgPT4gdGhTaWduZWRDYXRlZ29yeS5saW5lYXJPREUobW9kZWwsIGRhdGEpLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhbmFseXNlcy5sb3RrYVZvbHRlcnJhKHtcbiAgICAgICAgICAgICAgICBzaW11bGF0ZShtb2RlbCwgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhTaWduZWRDYXRlZ29yeS5sb3RrYVZvbHRlcnJhKG1vZGVsLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgfSk7XG59XG4iXSwiZmlsZSI6ImFzc2V0cy9yZWctbmV0LTdJcjAtX2JRLmpzIn0=