const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./object_cell_editor-DW5yEtQd.js","./analysis_tool-Bvgm6Cie.js","./document-BaPUF-Ky.js","./notebook-DqARNRKu.js","./model-B9uNSW6J.js","./index-CvS5Jq0z.js","./morphism_cell_editor-COVxLmSB.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './index-CvS5Jq0z.js';
import { lazy } from 'solid-js';
import { o as ThNullableSignedCategory } from './document-BaPUF-Ky.js';
import { T as Theory } from './analysis_tool-Bvgm6Cie.js';
import { m as modelGraph, h as motifFinding } from './analyses-dUWNojZq.js';
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
function createIndeterminateCausalLoopTheory(theoryMeta) {
  const thNullableSignedCategory = new ThNullableSignedCategory();
  return new Theory({
    ...theoryMeta,
    theory: thNullableSignedCategory.theory(),
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
        description: "Variables change in the same direction",
        shortcut: ["P"],
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
      },
      {
        tag: "MorType",
        morType: { tag: "Basic", content: "Zero" },
        editor: MorphismCellEditor,
        name: "Indeterminate link",
        description: "The direction that variables change is indeterminate",
        shortcut: ["Z"],
        arrowStyle: "indeterminate",
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
          return thNullableSignedCategory.negativeLoops(model, options);
        }
      }),
      motifFinding({
        id: "positive-loops",
        name: "Reinforcing loops",
        description: "Analyze the diagram for reinforcing loops",
        help: "loops",
        findMotifs(model, options) {
          return thNullableSignedCategory.positiveLoops(model, options);
        }
      }),
      motifFinding({
        id: "indeterminateLoops",
        name: "Indeterminate loops",
        description: "Analyze the diagram for indeterminate loops",
        help: "loops",
        findMotifs(model, options) {
          return thNullableSignedCategory.indeterminateLoops(model, options);
        }
      })
    ]
  });
}

export { createIndeterminateCausalLoopTheory as default };


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLEtBQU0saUJBQW1CLFFBQUssTUFBTSwwQkFBTyxtQ0FBZ0MsQ0FBQztBQUM1RSxLQUFNLG1CQUFxQixRQUFLLE1BQU0sMEJBQU8scUNBQWtDLENBQUM7QUFFaEYsUUFBd0IscUNBQW9DLFVBQWdDO0FBQ3hGLEVBQU0sK0JBQTJCLE1BQUksd0JBQXlCO0FBRTlELFNBQU8sR0FBSSxPQUFPO0FBQUEsSUFDZCxHQUFHO0FBQUEsSUFDSCxRQUFRLHlCQUF5QixNQUFPO0FBQUEsQ0FDeEMsaUJBQWdCO0FBQUEsSUFDaEIsVUFBWTtBQUFBLENBQ1I7QUFBQSxDQUNJLFVBQUs7QUFBQSxDQUNMLGFBQVEsSUFBRSxHQUFLLFVBQVMsU0FBUyxTQUFTO0FBQUEsQ0FDMUMsYUFBUTtBQUFBLENBQ1IsV0FBTTtBQUFBLFFBQ04sVUFBVSxDQUFDLEdBQUc7QUFBQSxRQUNkLFdBQWE7QUFBQSxDQUNqQjtBQUFBLENBQ0E7QUFBQSxDQUNJLFVBQUs7QUFBQSxRQUNMLE9BQVM7QUFBQSxDQUNMLFlBQUs7QUFBQSxDQUNMLGdCQUFTLEdBQUUsSUFBSyxXQUFTLFNBQVMsQ0FBUztBQUFBLENBQy9DO0FBQUEsQ0FDQSxhQUFRO0FBQUEsQ0FDUixXQUFNO0FBQUEsQ0FDTixrQkFBYTtBQUFBLFFBQ2IsVUFBVSxDQUFDLEdBQUc7QUFBQSxDQUNkLGlCQUFZO0FBQUEsUUFDWixhQUFlO0FBQUEsQ0FDbkI7QUFBQSxDQUNBO0FBQUEsQ0FDSSxVQUFLO0FBQUEsQ0FDTCxjQUFTLElBQUUsR0FBSyxVQUFTLFNBQVMsV0FBVztBQUFBLENBQzdDLGFBQVE7QUFBQSxDQUNSLFdBQU07QUFBQSxRQUNOLFVBQVUsQ0FBQyxHQUFHO0FBQUEsQ0FDZCxrQkFBYTtBQUFBLENBQ2IsaUJBQVk7QUFBQSxRQUNaLGFBQWU7QUFBQSxDQUNuQjtBQUFBLENBQ0E7QUFBQSxDQUNJLFVBQUs7QUFBQSxDQUNMLGNBQVMsSUFBRSxHQUFLLFVBQVMsU0FBUyxPQUFPO0FBQUEsQ0FDekMsYUFBUTtBQUFBLENBQ1IsV0FBTTtBQUFBLENBQ04sa0JBQWE7QUFBQSxRQUNiLFVBQVUsQ0FBQyxHQUFHO0FBQUEsQ0FDZCxpQkFBWTtBQUFBLFFBQ1osYUFBZTtBQUFBO0FBQ25CLENBQ0o7QUFBQSxJQUNBLGFBQWU7QUFBQSxNQUNYQSxVQUFvQjtBQUFBLENBQ2hCLFNBQUk7QUFBQSxDQUNKLFdBQU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsUUFDYixJQUFNO0FBQUEsT0FDVDtBQUFBLE1BQ0RDLFlBQXNCO0FBQUEsQ0FDbEIsU0FBSTtBQUFBLENBQ0osV0FBTTtBQUFBLENBQ04sa0JBQWE7QUFBQSxDQUNiLFdBQU07QUFBQSxRQUNOLFdBQVcsT0FBTyxPQUFTO0FBQ3ZCLENBQU8seUNBQXlCLGFBQWMsUUFBTyxPQUFPO0FBQUE7QUFDaEUsT0FDSDtBQUFBLE1BQ0RBLFlBQXNCO0FBQUEsQ0FDbEIsU0FBSTtBQUFBLENBQ0osV0FBTTtBQUFBLENBQ04sa0JBQWE7QUFBQSxDQUNiLFdBQU07QUFBQSxRQUNOLFdBQVcsT0FBTyxPQUFTO0FBQ3ZCLENBQU8seUNBQXlCLGFBQWMsUUFBTyxPQUFPO0FBQUE7QUFDaEUsT0FDSDtBQUFBLE1BQ0RBLFlBQXNCO0FBQUEsQ0FDbEIsU0FBSTtBQUFBLENBQ0osV0FBTTtBQUFBLENBQ04sa0JBQWE7QUFBQSxDQUNiLFdBQU07QUFBQSxRQUNOLFdBQVcsT0FBTyxPQUFTO0FBQ3ZCLENBQU8seUNBQXlCLGtCQUFtQixRQUFPLE9BQU87QUFBQTtBQUNyRSxDQUNIO0FBQUE7QUFDTCxHQUNIO0FBQ0wiLCJuYW1lcyI6WyJhbmFseXNlcy5tb2RlbEdyYXBoIiwiYW5hbHlzZXMubW90aWZGaW5kaW5nIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zyb250ZW5kL3NyYy9zdGRsaWIvdGhlb3JpZXMvaW5kZXRlcm1pbmF0ZS1jYXVzYWwtbG9vcC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsYXp5IH0gZnJvbSBcInNvbGlkLWpzXCI7XG5cbmltcG9ydCB7IFRoTnVsbGFibGVTaWduZWRDYXRlZ29yeSB9IGZyb20gXCJjYXRsb2ctd2FzbVwiO1xuaW1wb3J0IHsgVGhlb3J5LCB0eXBlIFRoZW9yeU1ldGEgfSBmcm9tIFwiLi4vLi4vdGhlb3J5XCI7XG5pbXBvcnQgKiBhcyBhbmFseXNlcyBmcm9tIFwiLi4vYW5hbHlzZXNcIjtcblxuY29uc3QgT2JqZWN0Q2VsbEVkaXRvciA9IGxhenkoKCkgPT4gaW1wb3J0KFwiLi4vLi4vbW9kZWwvb2JqZWN0X2NlbGxfZWRpdG9yXCIpKTtcbmNvbnN0IE1vcnBoaXNtQ2VsbEVkaXRvciA9IGxhenkoKCkgPT4gaW1wb3J0KFwiLi4vLi4vbW9kZWwvbW9ycGhpc21fY2VsbF9lZGl0b3JcIikpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVJbmRldGVybWluYXRlQ2F1c2FsTG9vcFRoZW9yeSh0aGVvcnlNZXRhOiBUaGVvcnlNZXRhKTogVGhlb3J5IHtcbiAgICBjb25zdCB0aE51bGxhYmxlU2lnbmVkQ2F0ZWdvcnkgPSBuZXcgVGhOdWxsYWJsZVNpZ25lZENhdGVnb3J5KCk7XG5cbiAgICByZXR1cm4gbmV3IFRoZW9yeSh7XG4gICAgICAgIC4uLnRoZW9yeU1ldGEsXG4gICAgICAgIHRoZW9yeTogdGhOdWxsYWJsZVNpZ25lZENhdGVnb3J5LnRoZW9yeSgpLFxuICAgICAgICBvbmx5RnJlZU1vZGVsczogdHJ1ZSxcbiAgICAgICAgbW9kZWxUeXBlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogXCJPYlR5cGVcIixcbiAgICAgICAgICAgICAgICBvYlR5cGU6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwiT2JqZWN0XCIgfSxcbiAgICAgICAgICAgICAgICBlZGl0b3I6IE9iamVjdENlbGxFZGl0b3IsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJWYXJpYWJsZVwiLFxuICAgICAgICAgICAgICAgIHNob3J0Y3V0OiBbXCJWXCJdLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlZhcmlhYmxlIHF1YW50aXR5XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogXCJNb3JUeXBlXCIsXG4gICAgICAgICAgICAgICAgbW9yVHlwZToge1xuICAgICAgICAgICAgICAgICAgICB0YWc6IFwiSG9tXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwiT2JqZWN0XCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVkaXRvcjogTW9ycGhpc21DZWxsRWRpdG9yLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiUG9zaXRpdmUgbGlua1wiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlZhcmlhYmxlcyBjaGFuZ2UgaW4gdGhlIHNhbWUgZGlyZWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgc2hvcnRjdXQ6IFtcIlBcIl0sXG4gICAgICAgICAgICAgICAgYXJyb3dTdHlsZTogXCJwbHVzXCIsXG4gICAgICAgICAgICAgICAgcHJlZmVyVW5uYW1lZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk1vclR5cGVcIixcbiAgICAgICAgICAgICAgICBtb3JUeXBlOiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcIk5lZ2F0aXZlXCIgfSxcbiAgICAgICAgICAgICAgICBlZGl0b3I6IE1vcnBoaXNtQ2VsbEVkaXRvcixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIk5lZ2F0aXZlIGxpbmtcIixcbiAgICAgICAgICAgICAgICBzaG9ydGN1dDogW1wiTlwiXSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJWYXJpYWJsZXMgY2hhbmdlIGluIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb25cIixcbiAgICAgICAgICAgICAgICBhcnJvd1N0eWxlOiBcIm1pbnVzXCIsXG4gICAgICAgICAgICAgICAgcHJlZmVyVW5uYW1lZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk1vclR5cGVcIixcbiAgICAgICAgICAgICAgICBtb3JUeXBlOiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcIlplcm9cIiB9LFxuICAgICAgICAgICAgICAgIGVkaXRvcjogTW9ycGhpc21DZWxsRWRpdG9yLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiSW5kZXRlcm1pbmF0ZSBsaW5rXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhlIGRpcmVjdGlvbiB0aGF0IHZhcmlhYmxlcyBjaGFuZ2UgaXMgaW5kZXRlcm1pbmF0ZVwiLFxuICAgICAgICAgICAgICAgIHNob3J0Y3V0OiBbXCJaXCJdLFxuICAgICAgICAgICAgICAgIGFycm93U3R5bGU6IFwiaW5kZXRlcm1pbmF0ZVwiLFxuICAgICAgICAgICAgICAgIHByZWZlclVubmFtZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBtb2RlbEFuYWx5c2VzOiBbXG4gICAgICAgICAgICBhbmFseXNlcy5tb2RlbEdyYXBoKHtcbiAgICAgICAgICAgICAgICBpZDogXCJkaWFncmFtXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJWaXN1YWxpemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVmlzdWFsaXplIHRoZSBjYXVzYWwgbG9vcCBkaWFncmFtXCIsXG4gICAgICAgICAgICAgICAgaGVscDogXCJ2aXN1YWxpemF0aW9uXCIsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuYWx5c2VzLm1vdGlmRmluZGluZyh7XG4gICAgICAgICAgICAgICAgaWQ6IFwibmVnYXRpdmUtbG9vcHNcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJhbGFuY2luZyBsb29wc1wiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkFuYWx5emUgdGhlIGRpYWdyYW0gZm9yIGJhbGFuY2luZyBsb29wc1wiLFxuICAgICAgICAgICAgICAgIGhlbHA6IFwibG9vcHNcIixcbiAgICAgICAgICAgICAgICBmaW5kTW90aWZzKG1vZGVsLCBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aE51bGxhYmxlU2lnbmVkQ2F0ZWdvcnkubmVnYXRpdmVMb29wcyhtb2RlbCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYW5hbHlzZXMubW90aWZGaW5kaW5nKHtcbiAgICAgICAgICAgICAgICBpZDogXCJwb3NpdGl2ZS1sb29wc1wiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiUmVpbmZvcmNpbmcgbG9vcHNcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJBbmFseXplIHRoZSBkaWFncmFtIGZvciByZWluZm9yY2luZyBsb29wc1wiLFxuICAgICAgICAgICAgICAgIGhlbHA6IFwibG9vcHNcIixcbiAgICAgICAgICAgICAgICBmaW5kTW90aWZzKG1vZGVsLCBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aE51bGxhYmxlU2lnbmVkQ2F0ZWdvcnkucG9zaXRpdmVMb29wcyhtb2RlbCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYW5hbHlzZXMubW90aWZGaW5kaW5nKHtcbiAgICAgICAgICAgICAgICBpZDogXCJpbmRldGVybWluYXRlTG9vcHNcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkluZGV0ZXJtaW5hdGUgbG9vcHNcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJBbmFseXplIHRoZSBkaWFncmFtIGZvciBpbmRldGVybWluYXRlIGxvb3BzXCIsXG4gICAgICAgICAgICAgICAgaGVscDogXCJsb29wc1wiLFxuICAgICAgICAgICAgICAgIGZpbmRNb3RpZnMobW9kZWwsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoTnVsbGFibGVTaWduZWRDYXRlZ29yeS5pbmRldGVybWluYXRlTG9vcHMobW9kZWwsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICB9KTtcbn1cbiJdLCJmaWxlIjoiYXNzZXRzL2luZGV0ZXJtaW5hdGUtY2F1c2FsLWxvb3AtV2xDQkY1MDYuanMifQ==