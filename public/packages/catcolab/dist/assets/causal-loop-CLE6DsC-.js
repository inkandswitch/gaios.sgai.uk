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


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLEtBQU0saUJBQW1CLFFBQUssTUFBTSwwQkFBTyxtQ0FBZ0MsQ0FBQztBQUM1RSxLQUFNLG1CQUFxQixRQUFLLE1BQU0sMEJBQU8scUNBQWtDLENBQUM7QUFFaEYsUUFBd0Isd0JBQXVCLFVBQWdDO0FBQzNFLEVBQU0sdUJBQW1CLE1BQUksZ0JBQWlCO0FBRTlDLFNBQU8sR0FBSSxPQUFPO0FBQUEsSUFDZCxHQUFHO0FBQUEsSUFDSCxRQUFRLGlCQUFpQixNQUFPO0FBQUEsQ0FDaEMsYUFBWSxHQUFDLFNBQVcsd0JBQXNCLDJCQUEyQjtBQUFBLENBQ3pFLGlCQUFnQjtBQUFBLElBQ2hCLFVBQVk7QUFBQSxDQUNSO0FBQUEsQ0FDSSxVQUFLO0FBQUEsQ0FDTCxhQUFRLElBQUUsR0FBSyxVQUFTLFNBQVMsU0FBUztBQUFBLENBQzFDLGFBQVE7QUFBQSxDQUNSLFdBQU07QUFBQSxRQUNOLFVBQVUsQ0FBQyxHQUFHO0FBQUEsUUFDZCxXQUFhO0FBQUEsQ0FDakI7QUFBQSxDQUNBO0FBQUEsQ0FDSSxVQUFLO0FBQUEsUUFDTCxPQUFTO0FBQUEsQ0FDTCxZQUFLO0FBQUEsQ0FDTCxnQkFBUyxHQUFFLElBQUssV0FBUyxTQUFTLENBQVM7QUFBQSxDQUMvQztBQUFBLENBQ0EsYUFBUTtBQUFBLENBQ1IsV0FBTTtBQUFBLFFBQ04sVUFBVSxDQUFDLEdBQUc7QUFBQSxDQUNkLGtCQUFhO0FBQUEsQ0FDYixpQkFBWTtBQUFBLFFBQ1osYUFBZTtBQUFBLENBQ25CO0FBQUEsQ0FDQTtBQUFBLENBQ0ksVUFBSztBQUFBLENBQ0wsY0FBUyxJQUFFLEdBQUssVUFBUyxTQUFTLFdBQVc7QUFBQSxDQUM3QyxhQUFRO0FBQUEsQ0FDUixXQUFNO0FBQUEsUUFDTixVQUFVLENBQUMsR0FBRztBQUFBLENBQ2Qsa0JBQWE7QUFBQSxDQUNiLGlCQUFZO0FBQUEsUUFDWixhQUFlO0FBQUE7QUFDbkIsQ0FDSjtBQUFBLElBQ0EsYUFBZTtBQUFBLE1BQ1hBLFVBQW9CO0FBQUEsQ0FDaEIsU0FBSTtBQUFBLENBQ0osV0FBTTtBQUFBLENBQ04sa0JBQWE7QUFBQSxRQUNiLElBQU07QUFBQSxPQUNUO0FBQUEsTUFDREMsWUFBc0I7QUFBQSxDQUNsQixTQUFJO0FBQUEsQ0FDSixXQUFNO0FBQUEsQ0FDTixrQkFBYTtBQUFBLENBQ2IsV0FBTTtBQUFBLFFBQ04sV0FBVyxPQUFPLE9BQVM7QUFDdkIsQ0FBTyxpQ0FBaUIsYUFBYyxRQUFPLE9BQU87QUFBQTtBQUN4RCxPQUNIO0FBQUEsTUFDREEsWUFBc0I7QUFBQSxDQUNsQixTQUFJO0FBQUEsQ0FDSixXQUFNO0FBQUEsQ0FDTixrQkFBYTtBQUFBLENBQ2IsV0FBTTtBQUFBLFFBQ04sV0FBVyxPQUFPLE9BQVM7QUFDdkIsQ0FBTyxpQ0FBaUIsYUFBYyxRQUFPLE9BQU87QUFBQTtBQUN4RCxPQUNIO0FBQUEsTUFDREMsU0FBbUI7QUFBQSxRQUNmLFVBQVUsQ0FBQyxNQUFPLE1BQVMsb0JBQWlCLFdBQVUsT0FBTyxJQUFJO0FBQUEsT0FDcEU7QUFBQSxNQUNEQyxhQUF1QjtBQUFBLFFBQ25CLFVBQVUsQ0FBQyxNQUFPLE1BQVMsb0JBQWlCLGVBQWMsT0FBTyxJQUFJO0FBQUEsQ0FDeEU7QUFBQTtBQUNMLEdBQ0g7QUFDTCIsIm5hbWVzIjpbImFuYWx5c2VzLm1vZGVsR3JhcGgiLCJhbmFseXNlcy5tb3RpZkZpbmRpbmciLCJhbmFseXNlcy5saW5lYXJPREUiLCJhbmFseXNlcy5sb3RrYVZvbHRlcnJhIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zyb250ZW5kL3NyYy9zdGRsaWIvdGhlb3JpZXMvY2F1c2FsLWxvb3AudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGF6eSB9IGZyb20gXCJzb2xpZC1qc1wiO1xuXG5pbXBvcnQgeyBUaFNpZ25lZENhdGVnb3J5IH0gZnJvbSBcImNhdGxvZy13YXNtXCI7XG5pbXBvcnQgeyBUaGVvcnksIHR5cGUgVGhlb3J5TWV0YSB9IGZyb20gXCIuLi8uLi90aGVvcnlcIjtcbmltcG9ydCAqIGFzIGFuYWx5c2VzIGZyb20gXCIuLi9hbmFseXNlc1wiO1xuXG5jb25zdCBPYmplY3RDZWxsRWRpdG9yID0gbGF6eSgoKSA9PiBpbXBvcnQoXCIuLi8uLi9tb2RlbC9vYmplY3RfY2VsbF9lZGl0b3JcIikpO1xuY29uc3QgTW9ycGhpc21DZWxsRWRpdG9yID0gbGF6eSgoKSA9PiBpbXBvcnQoXCIuLi8uLi9tb2RlbC9tb3JwaGlzbV9jZWxsX2VkaXRvclwiKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNhdXNhbExvb3BUaGVvcnkodGhlb3J5TWV0YTogVGhlb3J5TWV0YSk6IFRoZW9yeSB7XG4gICAgY29uc3QgdGhTaWduZWRDYXRlZ29yeSA9IG5ldyBUaFNpZ25lZENhdGVnb3J5KCk7XG5cbiAgICByZXR1cm4gbmV3IFRoZW9yeSh7XG4gICAgICAgIC4uLnRoZW9yeU1ldGEsXG4gICAgICAgIHRoZW9yeTogdGhTaWduZWRDYXRlZ29yeS50aGVvcnkoKSxcbiAgICAgICAgaW5jbHVzaW9uczogW1wicmVnLW5ldFwiLCBcImNhdXNhbC1sb29wLWRlbGF5c1wiLCBcImluZGV0ZXJtaW5hdGUtY2F1c2FsLWxvb3BcIl0sXG4gICAgICAgIG9ubHlGcmVlTW9kZWxzOiB0cnVlLFxuICAgICAgICBtb2RlbFR5cGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk9iVHlwZVwiLFxuICAgICAgICAgICAgICAgIG9iVHlwZTogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJPYmplY3RcIiB9LFxuICAgICAgICAgICAgICAgIGVkaXRvcjogT2JqZWN0Q2VsbEVkaXRvcixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlZhcmlhYmxlXCIsXG4gICAgICAgICAgICAgICAgc2hvcnRjdXQ6IFtcIlZcIl0sXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVmFyaWFibGUgcXVhbnRpdHlcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk1vclR5cGVcIixcbiAgICAgICAgICAgICAgICBtb3JUeXBlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogXCJIb21cIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJPYmplY3RcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZWRpdG9yOiBNb3JwaGlzbUNlbGxFZGl0b3IsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJQb3NpdGl2ZSBsaW5rXCIsXG4gICAgICAgICAgICAgICAgc2hvcnRjdXQ6IFtcIlBcIl0sXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVmFyaWFibGVzIGNoYW5nZSBpbiB0aGUgc2FtZSBkaXJlY3Rpb25cIixcbiAgICAgICAgICAgICAgICBhcnJvd1N0eWxlOiBcInBsdXNcIixcbiAgICAgICAgICAgICAgICBwcmVmZXJVbm5hbWVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiTW9yVHlwZVwiLFxuICAgICAgICAgICAgICAgIG1vclR5cGU6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwiTmVnYXRpdmVcIiB9LFxuICAgICAgICAgICAgICAgIGVkaXRvcjogTW9ycGhpc21DZWxsRWRpdG9yLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiTmVnYXRpdmUgbGlua1wiLFxuICAgICAgICAgICAgICAgIHNob3J0Y3V0OiBbXCJOXCJdLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlZhcmlhYmxlcyBjaGFuZ2UgaW4gdGhlIG9wcG9zaXRlIGRpcmVjdGlvblwiLFxuICAgICAgICAgICAgICAgIGFycm93U3R5bGU6IFwibWludXNcIixcbiAgICAgICAgICAgICAgICBwcmVmZXJVbm5hbWVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgbW9kZWxBbmFseXNlczogW1xuICAgICAgICAgICAgYW5hbHlzZXMubW9kZWxHcmFwaCh7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZGlhZ3JhbVwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiVmlzdWFsaXphdGlvblwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlZpc3VhbGl6ZSB0aGUgY2F1c2FsIGxvb3AgZGlhZ3JhbVwiLFxuICAgICAgICAgICAgICAgIGhlbHA6IFwidmlzdWFsaXphdGlvblwiLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhbmFseXNlcy5tb3RpZkZpbmRpbmcoe1xuICAgICAgICAgICAgICAgIGlkOiBcIm5lZ2F0aXZlLWxvb3BzXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJCYWxhbmNpbmcgbG9vcHNcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJBbmFseXplIHRoZSBkaWFncmFtIGZvciBiYWxhbmNpbmcgbG9vcHNcIixcbiAgICAgICAgICAgICAgICBoZWxwOiBcImxvb3BzXCIsXG4gICAgICAgICAgICAgICAgZmluZE1vdGlmcyhtb2RlbCwgb3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhTaWduZWRDYXRlZ29yeS5uZWdhdGl2ZUxvb3BzKG1vZGVsLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhbmFseXNlcy5tb3RpZkZpbmRpbmcoe1xuICAgICAgICAgICAgICAgIGlkOiBcInBvc2l0aXZlLWxvb3BzXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJSZWluZm9yY2luZyBsb29wc1wiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkFuYWx5emUgdGhlIGRpYWdyYW0gZm9yIHJlaW5mb3JjaW5nIGxvb3BzXCIsXG4gICAgICAgICAgICAgICAgaGVscDogXCJsb29wc1wiLFxuICAgICAgICAgICAgICAgIGZpbmRNb3RpZnMobW9kZWwsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoU2lnbmVkQ2F0ZWdvcnkucG9zaXRpdmVMb29wcyhtb2RlbCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYW5hbHlzZXMubGluZWFyT0RFKHtcbiAgICAgICAgICAgICAgICBzaW11bGF0ZTogKG1vZGVsLCBkYXRhKSA9PiB0aFNpZ25lZENhdGVnb3J5LmxpbmVhck9ERShtb2RlbCwgZGF0YSksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuYWx5c2VzLmxvdGthVm9sdGVycmEoe1xuICAgICAgICAgICAgICAgIHNpbXVsYXRlOiAobW9kZWwsIGRhdGEpID0+IHRoU2lnbmVkQ2F0ZWdvcnkubG90a2FWb2x0ZXJyYShtb2RlbCwgZGF0YSksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICB9KTtcbn1cbiJdLCJmaWxlIjoiYXNzZXRzL2NhdXNhbC1sb29wLUNMRTZEc0MtLmpzIn0=