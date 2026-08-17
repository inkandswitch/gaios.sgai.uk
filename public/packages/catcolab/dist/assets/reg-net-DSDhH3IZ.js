const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./object_cell_editor-DABrcm4f.js","./analysis_tool-CbAnz5ie.js","./model-hspTLkzk.js","./index-B65VBQSl.js","./morphism_cell_editor-DCzq9fVy.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './index-B65VBQSl.js';
import { lazy } from 'solid-js';
import { g as ThSignedCategory, a as Theory } from './analysis_tool-CbAnz5ie.js';
import { m as modelGraph, h as motifFinding, l as linearODE, i as lotkaVolterra } from './analyses-YbmqVJdQ.js';
import 'solid-js/web';
import './model-hspTLkzk.js';
import 'solid-js/store';
import '@automerge/automerge-repo';
import '@automerge/automerge-repo-network-websocket';
import '@automerge/automerge-repo-storage-indexeddb';
import '@automerge/automerge/slim';
import '@automerge/automerge';
import '@inkandswitch/patchwork-providers';

const ObjectCellEditor = lazy(() => __vitePreload(() => import('./object_cell_editor-DABrcm4f.js'),true?__vite__mapDeps([0,1,2,3]):undefined,import.meta.url));
const MorphismCellEditor = lazy(() => __vitePreload(() => import('./morphism_cell_editor-DCzq9fVy.js'),true?__vite__mapDeps([4,1,2,3,0]):undefined,import.meta.url));
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


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsS0FBTSxpQkFBbUIsUUFBSyxNQUFNLDBCQUFPLG1DQUFnQyxDQUFDO0FBQzVFLEtBQU0sbUJBQXFCLFFBQUssTUFBTSwwQkFBTyxxQ0FBa0MsQ0FBQztBQUVoRixRQUF3QiwrQkFBOEIsVUFBZ0M7QUFDbEYsRUFBTSx1QkFBbUIsTUFBSSxnQkFBaUI7QUFFOUMsU0FBTyxHQUFJLE9BQU87QUFBQSxJQUNkLEdBQUc7QUFBQSxJQUNILFFBQVEsaUJBQWlCLE1BQU87QUFBQSxDQUNoQyxhQUFZLEdBQUMsYUFBZSx3QkFBc0IsMkJBQTJCO0FBQUEsQ0FDN0UsaUJBQWdCO0FBQUEsSUFDaEIsVUFBWTtBQUFBLENBQ1I7QUFBQSxDQUNJLFVBQUs7QUFBQSxDQUNMLGFBQVEsSUFBRSxHQUFLLFVBQVMsU0FBUyxTQUFTO0FBQUEsQ0FDMUMsYUFBUTtBQUFBLENBQ1IsV0FBTTtBQUFBLFFBQ04sVUFBVSxDQUFDLEdBQUc7QUFBQSxRQUNkLFdBQWE7QUFBQSxDQUNqQjtBQUFBLENBQ0E7QUFBQSxDQUNJLFVBQUs7QUFBQSxRQUNMLE9BQVM7QUFBQSxDQUNMLFlBQUs7QUFBQSxDQUNMLGdCQUFTLEdBQUUsSUFBSyxXQUFTLFNBQVMsQ0FBUztBQUFBLENBQy9DO0FBQUEsQ0FDQSxhQUFRO0FBQUEsQ0FDUixXQUFNO0FBQUEsUUFDTixVQUFVLENBQUMsR0FBRztBQUFBLENBQ2Qsa0JBQWE7QUFBQSxRQUNiLGFBQWU7QUFBQSxDQUNuQjtBQUFBLENBQ0E7QUFBQSxDQUNJLFVBQUs7QUFBQSxDQUNMLGNBQVMsSUFBRSxHQUFLLFVBQVMsU0FBUyxXQUFXO0FBQUEsQ0FDN0MsYUFBUTtBQUFBLENBQ1IsV0FBTTtBQUFBLFFBQ04sVUFBVSxDQUFDLEdBQUc7QUFBQSxDQUNkLGtCQUFhO0FBQUEsQ0FDYixpQkFBWTtBQUFBLFFBQ1osYUFBZTtBQUFBO0FBQ25CLENBQ0o7QUFBQSxJQUNBLGFBQWU7QUFBQSxNQUNYQSxVQUFvQjtBQUFBLENBQ2hCLFNBQUk7QUFBQSxDQUNKLFdBQU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsUUFDYixJQUFNO0FBQUEsT0FDVDtBQUFBLE1BQ0RDLFlBQXNCO0FBQUEsQ0FDbEIsU0FBSTtBQUFBLENBQ0osV0FBTTtBQUFBLENBQ04sa0JBQWE7QUFBQSxDQUNiLFdBQU07QUFBQSxRQUNOLFdBQVcsT0FBTyxPQUFTO0FBQ3ZCLENBQU8saUNBQWlCLGFBQWMsUUFBTyxPQUFPO0FBQUE7QUFDeEQsT0FDSDtBQUFBLE1BQ0RBLFlBQXNCO0FBQUEsQ0FDbEIsU0FBSTtBQUFBLENBQ0osV0FBTTtBQUFBLENBQ04sa0JBQWE7QUFBQSxDQUNiLFdBQU07QUFBQSxRQUNOLFdBQVcsT0FBTyxPQUFTO0FBQ3ZCLENBQU8saUNBQWlCLGFBQWMsUUFBTyxPQUFPO0FBQUE7QUFDeEQsT0FDSDtBQUFBLE1BQ0RDLFNBQW1CO0FBQUEsUUFDZixVQUFVLENBQUMsTUFBTyxNQUFTLG9CQUFpQixXQUFVLE9BQU8sSUFBSTtBQUFBLE9BQ3BFO0FBQUEsTUFDREMsYUFBdUI7QUFBQSxRQUNuQixTQUFTLE9BQU8sSUFBTTtBQUNsQixDQUFPLGlDQUFpQixhQUFjLFFBQU8sSUFBSTtBQUFBO0FBQ3JELENBQ0g7QUFBQTtBQUNMLEdBQ0g7QUFDTCIsIm5hbWVzIjpbImFuYWx5c2VzLm1vZGVsR3JhcGgiLCJhbmFseXNlcy5tb3RpZkZpbmRpbmciLCJhbmFseXNlcy5saW5lYXJPREUiLCJhbmFseXNlcy5sb3RrYVZvbHRlcnJhIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zyb250ZW5kL3NyYy9zdGRsaWIvdGhlb3JpZXMvcmVnLW5ldC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsYXp5IH0gZnJvbSBcInNvbGlkLWpzXCI7XG5cbmltcG9ydCB7IFRoU2lnbmVkQ2F0ZWdvcnkgfSBmcm9tIFwiY2F0bG9nLXdhc21cIjtcbmltcG9ydCB7IFRoZW9yeSwgdHlwZSBUaGVvcnlNZXRhIH0gZnJvbSBcIi4uLy4uL3RoZW9yeVwiO1xuaW1wb3J0ICogYXMgYW5hbHlzZXMgZnJvbSBcIi4uL2FuYWx5c2VzXCI7XG5cbmNvbnN0IE9iamVjdENlbGxFZGl0b3IgPSBsYXp5KCgpID0+IGltcG9ydChcIi4uLy4uL21vZGVsL29iamVjdF9jZWxsX2VkaXRvclwiKSk7XG5jb25zdCBNb3JwaGlzbUNlbGxFZGl0b3IgPSBsYXp5KCgpID0+IGltcG9ydChcIi4uLy4uL21vZGVsL21vcnBoaXNtX2NlbGxfZWRpdG9yXCIpKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUmVndWxhdG9yeU5ldHdvcmtUaGVvcnkodGhlb3J5TWV0YTogVGhlb3J5TWV0YSk6IFRoZW9yeSB7XG4gICAgY29uc3QgdGhTaWduZWRDYXRlZ29yeSA9IG5ldyBUaFNpZ25lZENhdGVnb3J5KCk7XG5cbiAgICByZXR1cm4gbmV3IFRoZW9yeSh7XG4gICAgICAgIC4uLnRoZW9yeU1ldGEsXG4gICAgICAgIHRoZW9yeTogdGhTaWduZWRDYXRlZ29yeS50aGVvcnkoKSxcbiAgICAgICAgaW5jbHVzaW9uczogW1wiY2F1c2FsLWxvb3BcIiwgXCJjYXVzYWwtbG9vcC1kZWxheXNcIiwgXCJpbmRldGVybWluYXRlLWNhdXNhbC1sb29wXCJdLFxuICAgICAgICBvbmx5RnJlZU1vZGVsczogdHJ1ZSxcbiAgICAgICAgbW9kZWxUeXBlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogXCJPYlR5cGVcIixcbiAgICAgICAgICAgICAgICBvYlR5cGU6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwiT2JqZWN0XCIgfSxcbiAgICAgICAgICAgICAgICBlZGl0b3I6IE9iamVjdENlbGxFZGl0b3IsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJTcGVjaWVzXCIsXG4gICAgICAgICAgICAgICAgc2hvcnRjdXQ6IFtcIlNcIl0sXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQmlvY2hlbWljYWwgc3BlY2llcyBpbiB0aGUgbmV0d29ya1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiTW9yVHlwZVwiLFxuICAgICAgICAgICAgICAgIG1vclR5cGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiBcIkhvbVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcIk9iamVjdFwiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlZGl0b3I6IE1vcnBoaXNtQ2VsbEVkaXRvcixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlByb21vdGlvblwiLFxuICAgICAgICAgICAgICAgIHNob3J0Y3V0OiBbXCJQXCJdLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlBvc2l0aXZlIGludGVyYWN0aW9uOiBhY3RpdmF0ZXMgb3IgcHJvbW90ZXNcIixcbiAgICAgICAgICAgICAgICBwcmVmZXJVbm5hbWVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiTW9yVHlwZVwiLFxuICAgICAgICAgICAgICAgIG1vclR5cGU6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwiTmVnYXRpdmVcIiB9LFxuICAgICAgICAgICAgICAgIGVkaXRvcjogTW9ycGhpc21DZWxsRWRpdG9yLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiSW5oaWJpdGlvblwiLFxuICAgICAgICAgICAgICAgIHNob3J0Y3V0OiBbXCJOXCJdLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIk5lZ2F0aXZlIGludGVyYWN0aW9uOiByZXByZXNzZXMgb3IgaW5oaWJpdHNcIixcbiAgICAgICAgICAgICAgICBhcnJvd1N0eWxlOiBcImZsYXRcIixcbiAgICAgICAgICAgICAgICBwcmVmZXJVbm5hbWVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgbW9kZWxBbmFseXNlczogW1xuICAgICAgICAgICAgYW5hbHlzZXMubW9kZWxHcmFwaCh7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZGlhZ3JhbVwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiVmlzdWFsaXphdGlvblwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlZpc3VhbGl6ZSB0aGUgcmVndWxhdG9yeSBuZXR3b3JrXCIsXG4gICAgICAgICAgICAgICAgaGVscDogXCJ2aXN1YWxpemF0aW9uXCIsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuYWx5c2VzLm1vdGlmRmluZGluZyh7XG4gICAgICAgICAgICAgICAgaWQ6IFwicG9zaXRpdmUtbG9vcHNcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlBvc2l0aXZlIGZlZWRiYWNrXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQW5hbHl6ZSB0aGUgbmV0d29yayBmb3IgcG9zaXRpdmUgZmVlZGJhY2sgbG9vcHNcIixcbiAgICAgICAgICAgICAgICBoZWxwOiBcImxvb3BzXCIsXG4gICAgICAgICAgICAgICAgZmluZE1vdGlmcyhtb2RlbCwgb3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhTaWduZWRDYXRlZ29yeS5wb3NpdGl2ZUxvb3BzKG1vZGVsLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhbmFseXNlcy5tb3RpZkZpbmRpbmcoe1xuICAgICAgICAgICAgICAgIGlkOiBcIm5lZ2F0aXZlLWxvb3BzXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJOZWdhdGl2ZSBmZWVkYmFja1wiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkFuYWx5emUgdGhlIG5ldHdvcmsgZm9yIG5lZ2F0aXZlIGZlZWRiYWNrIGxvb3BzXCIsXG4gICAgICAgICAgICAgICAgaGVscDogXCJsb29wc1wiLFxuICAgICAgICAgICAgICAgIGZpbmRNb3RpZnMobW9kZWwsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoU2lnbmVkQ2F0ZWdvcnkubmVnYXRpdmVMb29wcyhtb2RlbCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYW5hbHlzZXMubGluZWFyT0RFKHtcbiAgICAgICAgICAgICAgICBzaW11bGF0ZTogKG1vZGVsLCBkYXRhKSA9PiB0aFNpZ25lZENhdGVnb3J5LmxpbmVhck9ERShtb2RlbCwgZGF0YSksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuYWx5c2VzLmxvdGthVm9sdGVycmEoe1xuICAgICAgICAgICAgICAgIHNpbXVsYXRlKG1vZGVsLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aFNpZ25lZENhdGVnb3J5LmxvdGthVm9sdGVycmEobW9kZWwsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICB9KTtcbn1cbiJdLCJmaWxlIjoiYXNzZXRzL3JlZy1uZXQtRFNEaEgzSVouanMifQ==