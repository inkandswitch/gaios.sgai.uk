const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./object_cell_editor-DW5yEtQd.js","./analysis_tool-Bvgm6Cie.js","./document-BaPUF-Ky.js","./notebook-DqARNRKu.js","./model-B9uNSW6J.js","./index-CvS5Jq0z.js","./morphism_cell_editor-COVxLmSB.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './index-CvS5Jq0z.js';
import { lazy } from 'solid-js';
import { r as ThCategoryWithScalars } from './document-BaPUF-Ky.js';
import { T as Theory } from './analysis_tool-Bvgm6Cie.js';
import { d as diagramGraph, k as decapodes, m as modelGraph } from './analyses-dUWNojZq.js';
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
function createUnaryDECTheory(theoryMeta) {
  const thCategoryWithScalars = new ThCategoryWithScalars();
  return new Theory({
    ...theoryMeta,
    theory: thCategoryWithScalars.theory(),
    modelTypes: [
      {
        tag: "ObType",
        obType: { tag: "Basic", content: "Object" },
        editor: ObjectCellEditor,
        name: "Form type",
        shortcut: ["F"],
        description: "A type of differential form on the space"
      },
      {
        tag: "MorType",
        morType: { tag: "Basic", content: "Nonscalar" },
        editor: MorphismCellEditor,
        name: "Operator",
        shortcut: ["D"],
        description: "A differential operator"
      },
      {
        tag: "MorType",
        morType: {
          tag: "Hom",
          content: { tag: "Basic", content: "Object" }
        },
        editor: MorphismCellEditor,
        name: "Scalar",
        arrowStyle: "scalar",
        shortcut: ["S"],
        description: "Multiplication by a scalar"
      }
    ],
    instanceOfName: "Equations in",
    instanceTypes: [
      {
        tag: "ObType",
        obType: { tag: "Basic", content: "Object" },
        name: "Form",
        description: "A form on the space",
        shortcut: ["F"]
      },
      {
        tag: "MorType",
        morType: { tag: "Basic", content: "Nonscalar" },
        name: "Apply operator",
        description: "An application of an operator to a form",
        shortcut: ["D"]
      },
      {
        tag: "MorType",
        morType: {
          tag: "Hom",
          content: { tag: "Basic", content: "Object" }
        },
        name: "Scalar multiply",
        description: "A scalar multiplication on a form",
        shortcut: ["S"]
      }
    ],
    modelAnalyses: [
      modelGraph({
        id: "graph",
        name: "Visualization",
        description: "Visualize the operations as a graph",
        help: "visualization"
      })
    ],
    diagramAnalyses: [
      diagramGraph({
        id: "graph",
        name: "Visualization",
        description: "Visualize the equations as a diagram"
      }),
      decapodes({
        id: "decapodes",
        name: "Simulation",
        description: "Simulate the PDE using Decapodes"
      })
    ]
  });
}

export { createUnaryDECTheory as default };


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLEtBQU0saUJBQW1CLFFBQUssTUFBTSwwQkFBTyxtQ0FBZ0MsQ0FBQztBQUM1RSxLQUFNLG1CQUFxQixRQUFLLE1BQU0sMEJBQU8scUNBQWtDLENBQUM7QUFFaEYsUUFBd0Isc0JBQXFCLFVBQWdDO0FBQ3pFLEVBQU0sNEJBQXdCLE1BQUkscUJBQXNCO0FBRXhELFNBQU8sR0FBSSxPQUFPO0FBQUEsSUFDZCxHQUFHO0FBQUEsSUFDSCxRQUFRLHNCQUFzQixNQUFPO0FBQUEsSUFDckMsVUFBWTtBQUFBLENBQ1I7QUFBQSxDQUNJLFVBQUs7QUFBQSxDQUNMLGFBQVEsSUFBRSxHQUFLLFVBQVMsU0FBUyxTQUFTO0FBQUEsQ0FDMUMsYUFBUTtBQUFBLENBQ1IsV0FBTTtBQUFBLFFBQ04sVUFBVSxDQUFDLEdBQUc7QUFBQSxRQUNkLFdBQWE7QUFBQSxDQUNqQjtBQUFBLENBQ0E7QUFBQSxDQUNJLFVBQUs7QUFBQSxDQUNMLGNBQVMsSUFBRSxHQUFLLFVBQVMsU0FBUyxZQUFZO0FBQUEsQ0FDOUMsYUFBUTtBQUFBLENBQ1IsV0FBTTtBQUFBLFFBQ04sVUFBVSxDQUFDLEdBQUc7QUFBQSxRQUNkLFdBQWE7QUFBQSxDQUNqQjtBQUFBLENBQ0E7QUFBQSxDQUNJLFVBQUs7QUFBQSxRQUNMLE9BQVM7QUFBQSxDQUNMLFlBQUs7QUFBQSxDQUNMLGdCQUFTLEdBQUUsSUFBSyxXQUFTLFNBQVMsQ0FBUztBQUFBLENBQy9DO0FBQUEsQ0FDQSxhQUFRO0FBQUEsQ0FDUixXQUFNO0FBQUEsQ0FDTixpQkFBWTtBQUFBLFFBQ1osVUFBVSxDQUFDLEdBQUc7QUFBQSxRQUNkLFdBQWE7QUFBQTtBQUNqQixDQUNKO0FBQUEsQ0FDQSxpQkFBZ0I7QUFBQSxJQUNoQixhQUFlO0FBQUEsQ0FDWDtBQUFBLENBQ0ksVUFBSztBQUFBLENBQ0wsYUFBUSxJQUFFLEdBQUssVUFBUyxTQUFTLFNBQVM7QUFBQSxDQUMxQyxXQUFNO0FBQUEsQ0FDTixrQkFBYTtBQUFBLENBQ2IsZ0JBQVUsRUFBQyxDQUFHO0FBQUEsQ0FDbEI7QUFBQSxDQUNBO0FBQUEsQ0FDSSxVQUFLO0FBQUEsQ0FDTCxjQUFTLElBQUUsR0FBSyxVQUFTLFNBQVMsWUFBWTtBQUFBLENBQzlDLFdBQU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsQ0FDYixnQkFBVSxFQUFDLENBQUc7QUFBQSxDQUNsQjtBQUFBLENBQ0E7QUFBQSxDQUNJLFVBQUs7QUFBQSxRQUNMLE9BQVM7QUFBQSxDQUNMLFlBQUs7QUFBQSxDQUNMLGdCQUFTLEdBQUUsSUFBSyxXQUFTLFNBQVMsQ0FBUztBQUFBLENBQy9DO0FBQUEsQ0FDQSxXQUFNO0FBQUEsQ0FDTixrQkFBYTtBQUFBLENBQ2IsZ0JBQVUsRUFBQyxDQUFHO0FBQUE7QUFDbEIsQ0FDSjtBQUFBLElBQ0EsYUFBZTtBQUFBLE1BQ1hBLFVBQW9CO0FBQUEsQ0FDaEIsU0FBSTtBQUFBLENBQ0osV0FBTTtBQUFBLENBQ04sa0JBQWE7QUFBQSxRQUNiLElBQU07QUFBQSxDQUNUO0FBQUEsQ0FDTDtBQUFBLElBQ0EsZUFBaUI7QUFBQSxNQUNiQyxZQUFzQjtBQUFBLENBQ2xCLFNBQUk7QUFBQSxDQUNKLFdBQU07QUFBQSxRQUNOLFdBQWE7QUFBQSxPQUNoQjtBQUFBLE1BQ0RDLFNBQW1CO0FBQUEsQ0FDZixTQUFJO0FBQUEsQ0FDSixXQUFNO0FBQUEsUUFDTixXQUFhO0FBQUEsQ0FDaEI7QUFBQTtBQUNMLEdBQ0g7QUFDTCIsIm5hbWVzIjpbImFuYWx5c2VzLm1vZGVsR3JhcGgiLCJhbmFseXNlcy5kaWFncmFtR3JhcGgiLCJhbmFseXNlcy5kZWNhcG9kZXMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vZnJvbnRlbmQvc3JjL3N0ZGxpYi90aGVvcmllcy91bmFyeS1kZWMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGF6eSB9IGZyb20gXCJzb2xpZC1qc1wiO1xuXG5pbXBvcnQgeyBUaENhdGVnb3J5V2l0aFNjYWxhcnMgfSBmcm9tIFwiY2F0bG9nLXdhc21cIjtcbmltcG9ydCB7IFRoZW9yeSwgdHlwZSBUaGVvcnlNZXRhIH0gZnJvbSBcIi4uLy4uL3RoZW9yeVwiO1xuaW1wb3J0ICogYXMgYW5hbHlzZXMgZnJvbSBcIi4uL2FuYWx5c2VzXCI7XG5cbmNvbnN0IE9iamVjdENlbGxFZGl0b3IgPSBsYXp5KCgpID0+IGltcG9ydChcIi4uLy4uL21vZGVsL29iamVjdF9jZWxsX2VkaXRvclwiKSk7XG5jb25zdCBNb3JwaGlzbUNlbGxFZGl0b3IgPSBsYXp5KCgpID0+IGltcG9ydChcIi4uLy4uL21vZGVsL21vcnBoaXNtX2NlbGxfZWRpdG9yXCIpKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVW5hcnlERUNUaGVvcnkodGhlb3J5TWV0YTogVGhlb3J5TWV0YSk6IFRoZW9yeSB7XG4gICAgY29uc3QgdGhDYXRlZ29yeVdpdGhTY2FsYXJzID0gbmV3IFRoQ2F0ZWdvcnlXaXRoU2NhbGFycygpO1xuXG4gICAgcmV0dXJuIG5ldyBUaGVvcnkoe1xuICAgICAgICAuLi50aGVvcnlNZXRhLFxuICAgICAgICB0aGVvcnk6IHRoQ2F0ZWdvcnlXaXRoU2NhbGFycy50aGVvcnkoKSxcbiAgICAgICAgbW9kZWxUeXBlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogXCJPYlR5cGVcIixcbiAgICAgICAgICAgICAgICBvYlR5cGU6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwiT2JqZWN0XCIgfSxcbiAgICAgICAgICAgICAgICBlZGl0b3I6IE9iamVjdENlbGxFZGl0b3IsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJGb3JtIHR5cGVcIixcbiAgICAgICAgICAgICAgICBzaG9ydGN1dDogW1wiRlwiXSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJBIHR5cGUgb2YgZGlmZmVyZW50aWFsIGZvcm0gb24gdGhlIHNwYWNlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogXCJNb3JUeXBlXCIsXG4gICAgICAgICAgICAgICAgbW9yVHlwZTogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJOb25zY2FsYXJcIiB9LFxuICAgICAgICAgICAgICAgIGVkaXRvcjogTW9ycGhpc21DZWxsRWRpdG9yLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiT3BlcmF0b3JcIixcbiAgICAgICAgICAgICAgICBzaG9ydGN1dDogW1wiRFwiXSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJBIGRpZmZlcmVudGlhbCBvcGVyYXRvclwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiTW9yVHlwZVwiLFxuICAgICAgICAgICAgICAgIG1vclR5cGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiBcIkhvbVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcIk9iamVjdFwiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlZGl0b3I6IE1vcnBoaXNtQ2VsbEVkaXRvcixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlNjYWxhclwiLFxuICAgICAgICAgICAgICAgIGFycm93U3R5bGU6IFwic2NhbGFyXCIsXG4gICAgICAgICAgICAgICAgc2hvcnRjdXQ6IFtcIlNcIl0sXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTXVsdGlwbGljYXRpb24gYnkgYSBzY2FsYXJcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGluc3RhbmNlT2ZOYW1lOiBcIkVxdWF0aW9ucyBpblwiLFxuICAgICAgICBpbnN0YW5jZVR5cGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk9iVHlwZVwiLFxuICAgICAgICAgICAgICAgIG9iVHlwZTogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJPYmplY3RcIiB9LFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiRm9ybVwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgZm9ybSBvbiB0aGUgc3BhY2VcIixcbiAgICAgICAgICAgICAgICBzaG9ydGN1dDogW1wiRlwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk1vclR5cGVcIixcbiAgICAgICAgICAgICAgICBtb3JUeXBlOiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcIk5vbnNjYWxhclwiIH0sXG4gICAgICAgICAgICAgICAgbmFtZTogXCJBcHBseSBvcGVyYXRvclwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkFuIGFwcGxpY2F0aW9uIG9mIGFuIG9wZXJhdG9yIHRvIGEgZm9ybVwiLFxuICAgICAgICAgICAgICAgIHNob3J0Y3V0OiBbXCJEXCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiTW9yVHlwZVwiLFxuICAgICAgICAgICAgICAgIG1vclR5cGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiBcIkhvbVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcIk9iamVjdFwiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlNjYWxhciBtdWx0aXBseVwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgc2NhbGFyIG11bHRpcGxpY2F0aW9uIG9uIGEgZm9ybVwiLFxuICAgICAgICAgICAgICAgIHNob3J0Y3V0OiBbXCJTXCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgbW9kZWxBbmFseXNlczogW1xuICAgICAgICAgICAgYW5hbHlzZXMubW9kZWxHcmFwaCh7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZ3JhcGhcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlZpc3VhbGl6YXRpb25cIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJWaXN1YWxpemUgdGhlIG9wZXJhdGlvbnMgYXMgYSBncmFwaFwiLFxuICAgICAgICAgICAgICAgIGhlbHA6IFwidmlzdWFsaXphdGlvblwiLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICAgIGRpYWdyYW1BbmFseXNlczogW1xuICAgICAgICAgICAgYW5hbHlzZXMuZGlhZ3JhbUdyYXBoKHtcbiAgICAgICAgICAgICAgICBpZDogXCJncmFwaFwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiVmlzdWFsaXphdGlvblwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlZpc3VhbGl6ZSB0aGUgZXF1YXRpb25zIGFzIGEgZGlhZ3JhbVwiLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhbmFseXNlcy5kZWNhcG9kZXMoe1xuICAgICAgICAgICAgICAgIGlkOiBcImRlY2Fwb2Rlc1wiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiU2ltdWxhdGlvblwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlNpbXVsYXRlIHRoZSBQREUgdXNpbmcgRGVjYXBvZGVzXCIsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICB9KTtcbn1cbiJdLCJmaWxlIjoiYXNzZXRzL3VuYXJ5LWRlYy1Eb2NpR2NuTC5qcyJ9