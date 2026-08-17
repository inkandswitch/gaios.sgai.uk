const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./object_cell_editor-DABrcm4f.js","./analysis_tool-CbAnz5ie.js","./model-hspTLkzk.js","./index-B65VBQSl.js","./morphism_cell_editor-DCzq9fVy.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './index-B65VBQSl.js';
import { lazy } from 'solid-js';
import { l as ThCategoryWithScalars, a as Theory } from './analysis_tool-CbAnz5ie.js';
import { d as diagramGraph, k as decapodes, m as modelGraph } from './analyses-YbmqVJdQ.js';
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


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsS0FBTSxpQkFBbUIsUUFBSyxNQUFNLDBCQUFPLG1DQUFnQyxDQUFDO0FBQzVFLEtBQU0sbUJBQXFCLFFBQUssTUFBTSwwQkFBTyxxQ0FBa0MsQ0FBQztBQUVoRixRQUF3QixzQkFBcUIsVUFBZ0M7QUFDekUsRUFBTSw0QkFBd0IsTUFBSSxxQkFBc0I7QUFFeEQsU0FBTyxHQUFJLE9BQU87QUFBQSxJQUNkLEdBQUc7QUFBQSxJQUNILFFBQVEsc0JBQXNCLE1BQU87QUFBQSxJQUNyQyxVQUFZO0FBQUEsQ0FDUjtBQUFBLENBQ0ksVUFBSztBQUFBLENBQ0wsYUFBUSxJQUFFLEdBQUssVUFBUyxTQUFTLFNBQVM7QUFBQSxDQUMxQyxhQUFRO0FBQUEsQ0FDUixXQUFNO0FBQUEsUUFDTixVQUFVLENBQUMsR0FBRztBQUFBLFFBQ2QsV0FBYTtBQUFBLENBQ2pCO0FBQUEsQ0FDQTtBQUFBLENBQ0ksVUFBSztBQUFBLENBQ0wsY0FBUyxJQUFFLEdBQUssVUFBUyxTQUFTLFlBQVk7QUFBQSxDQUM5QyxhQUFRO0FBQUEsQ0FDUixXQUFNO0FBQUEsUUFDTixVQUFVLENBQUMsR0FBRztBQUFBLFFBQ2QsV0FBYTtBQUFBLENBQ2pCO0FBQUEsQ0FDQTtBQUFBLENBQ0ksVUFBSztBQUFBLFFBQ0wsT0FBUztBQUFBLENBQ0wsWUFBSztBQUFBLENBQ0wsZ0JBQVMsR0FBRSxJQUFLLFdBQVMsU0FBUyxDQUFTO0FBQUEsQ0FDL0M7QUFBQSxDQUNBLGFBQVE7QUFBQSxDQUNSLFdBQU07QUFBQSxDQUNOLGlCQUFZO0FBQUEsUUFDWixVQUFVLENBQUMsR0FBRztBQUFBLFFBQ2QsV0FBYTtBQUFBO0FBQ2pCLENBQ0o7QUFBQSxDQUNBLGlCQUFnQjtBQUFBLElBQ2hCLGFBQWU7QUFBQSxDQUNYO0FBQUEsQ0FDSSxVQUFLO0FBQUEsQ0FDTCxhQUFRLElBQUUsR0FBSyxVQUFTLFNBQVMsU0FBUztBQUFBLENBQzFDLFdBQU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsQ0FDYixnQkFBVSxFQUFDLENBQUc7QUFBQSxDQUNsQjtBQUFBLENBQ0E7QUFBQSxDQUNJLFVBQUs7QUFBQSxDQUNMLGNBQVMsSUFBRSxHQUFLLFVBQVMsU0FBUyxZQUFZO0FBQUEsQ0FDOUMsV0FBTTtBQUFBLENBQ04sa0JBQWE7QUFBQSxDQUNiLGdCQUFVLEVBQUMsQ0FBRztBQUFBLENBQ2xCO0FBQUEsQ0FDQTtBQUFBLENBQ0ksVUFBSztBQUFBLFFBQ0wsT0FBUztBQUFBLENBQ0wsWUFBSztBQUFBLENBQ0wsZ0JBQVMsR0FBRSxJQUFLLFdBQVMsU0FBUyxDQUFTO0FBQUEsQ0FDL0M7QUFBQSxDQUNBLFdBQU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsQ0FDYixnQkFBVSxFQUFDLENBQUc7QUFBQTtBQUNsQixDQUNKO0FBQUEsSUFDQSxhQUFlO0FBQUEsTUFDWEEsVUFBb0I7QUFBQSxDQUNoQixTQUFJO0FBQUEsQ0FDSixXQUFNO0FBQUEsQ0FDTixrQkFBYTtBQUFBLFFBQ2IsSUFBTTtBQUFBLENBQ1Q7QUFBQSxDQUNMO0FBQUEsSUFDQSxlQUFpQjtBQUFBLE1BQ2JDLFlBQXNCO0FBQUEsQ0FDbEIsU0FBSTtBQUFBLENBQ0osV0FBTTtBQUFBLFFBQ04sV0FBYTtBQUFBLE9BQ2hCO0FBQUEsTUFDREMsU0FBbUI7QUFBQSxDQUNmLFNBQUk7QUFBQSxDQUNKLFdBQU07QUFBQSxRQUNOLFdBQWE7QUFBQSxDQUNoQjtBQUFBO0FBQ0wsR0FDSDtBQUNMIiwibmFtZXMiOlsiYW5hbHlzZXMubW9kZWxHcmFwaCIsImFuYWx5c2VzLmRpYWdyYW1HcmFwaCIsImFuYWx5c2VzLmRlY2Fwb2RlcyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyIuLi8uLi8uLi9mcm9udGVuZC9zcmMvc3RkbGliL3RoZW9yaWVzL3VuYXJ5LWRlYy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsYXp5IH0gZnJvbSBcInNvbGlkLWpzXCI7XG5cbmltcG9ydCB7IFRoQ2F0ZWdvcnlXaXRoU2NhbGFycyB9IGZyb20gXCJjYXRsb2ctd2FzbVwiO1xuaW1wb3J0IHsgVGhlb3J5LCB0eXBlIFRoZW9yeU1ldGEgfSBmcm9tIFwiLi4vLi4vdGhlb3J5XCI7XG5pbXBvcnQgKiBhcyBhbmFseXNlcyBmcm9tIFwiLi4vYW5hbHlzZXNcIjtcblxuY29uc3QgT2JqZWN0Q2VsbEVkaXRvciA9IGxhenkoKCkgPT4gaW1wb3J0KFwiLi4vLi4vbW9kZWwvb2JqZWN0X2NlbGxfZWRpdG9yXCIpKTtcbmNvbnN0IE1vcnBoaXNtQ2VsbEVkaXRvciA9IGxhenkoKCkgPT4gaW1wb3J0KFwiLi4vLi4vbW9kZWwvbW9ycGhpc21fY2VsbF9lZGl0b3JcIikpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVVbmFyeURFQ1RoZW9yeSh0aGVvcnlNZXRhOiBUaGVvcnlNZXRhKTogVGhlb3J5IHtcbiAgICBjb25zdCB0aENhdGVnb3J5V2l0aFNjYWxhcnMgPSBuZXcgVGhDYXRlZ29yeVdpdGhTY2FsYXJzKCk7XG5cbiAgICByZXR1cm4gbmV3IFRoZW9yeSh7XG4gICAgICAgIC4uLnRoZW9yeU1ldGEsXG4gICAgICAgIHRoZW9yeTogdGhDYXRlZ29yeVdpdGhTY2FsYXJzLnRoZW9yeSgpLFxuICAgICAgICBtb2RlbFR5cGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk9iVHlwZVwiLFxuICAgICAgICAgICAgICAgIG9iVHlwZTogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJPYmplY3RcIiB9LFxuICAgICAgICAgICAgICAgIGVkaXRvcjogT2JqZWN0Q2VsbEVkaXRvcixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkZvcm0gdHlwZVwiLFxuICAgICAgICAgICAgICAgIHNob3J0Y3V0OiBbXCJGXCJdLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgdHlwZSBvZiBkaWZmZXJlbnRpYWwgZm9ybSBvbiB0aGUgc3BhY2VcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk1vclR5cGVcIixcbiAgICAgICAgICAgICAgICBtb3JUeXBlOiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcIk5vbnNjYWxhclwiIH0sXG4gICAgICAgICAgICAgICAgZWRpdG9yOiBNb3JwaGlzbUNlbGxFZGl0b3IsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJPcGVyYXRvclwiLFxuICAgICAgICAgICAgICAgIHNob3J0Y3V0OiBbXCJEXCJdLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkEgZGlmZmVyZW50aWFsIG9wZXJhdG9yXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogXCJNb3JUeXBlXCIsXG4gICAgICAgICAgICAgICAgbW9yVHlwZToge1xuICAgICAgICAgICAgICAgICAgICB0YWc6IFwiSG9tXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwiT2JqZWN0XCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVkaXRvcjogTW9ycGhpc21DZWxsRWRpdG9yLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiU2NhbGFyXCIsXG4gICAgICAgICAgICAgICAgYXJyb3dTdHlsZTogXCJzY2FsYXJcIixcbiAgICAgICAgICAgICAgICBzaG9ydGN1dDogW1wiU1wiXSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJNdWx0aXBsaWNhdGlvbiBieSBhIHNjYWxhclwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgaW5zdGFuY2VPZk5hbWU6IFwiRXF1YXRpb25zIGluXCIsXG4gICAgICAgIGluc3RhbmNlVHlwZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiT2JUeXBlXCIsXG4gICAgICAgICAgICAgICAgb2JUeXBlOiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcIk9iamVjdFwiIH0sXG4gICAgICAgICAgICAgICAgbmFtZTogXCJGb3JtXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQSBmb3JtIG9uIHRoZSBzcGFjZVwiLFxuICAgICAgICAgICAgICAgIHNob3J0Y3V0OiBbXCJGXCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiTW9yVHlwZVwiLFxuICAgICAgICAgICAgICAgIG1vclR5cGU6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwiTm9uc2NhbGFyXCIgfSxcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkFwcGx5IG9wZXJhdG9yXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQW4gYXBwbGljYXRpb24gb2YgYW4gb3BlcmF0b3IgdG8gYSBmb3JtXCIsXG4gICAgICAgICAgICAgICAgc2hvcnRjdXQ6IFtcIkRcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogXCJNb3JUeXBlXCIsXG4gICAgICAgICAgICAgICAgbW9yVHlwZToge1xuICAgICAgICAgICAgICAgICAgICB0YWc6IFwiSG9tXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwiT2JqZWN0XCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiU2NhbGFyIG11bHRpcGx5XCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQSBzY2FsYXIgbXVsdGlwbGljYXRpb24gb24gYSBmb3JtXCIsXG4gICAgICAgICAgICAgICAgc2hvcnRjdXQ6IFtcIlNcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBtb2RlbEFuYWx5c2VzOiBbXG4gICAgICAgICAgICBhbmFseXNlcy5tb2RlbEdyYXBoKHtcbiAgICAgICAgICAgICAgICBpZDogXCJncmFwaFwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiVmlzdWFsaXphdGlvblwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlZpc3VhbGl6ZSB0aGUgb3BlcmF0aW9ucyBhcyBhIGdyYXBoXCIsXG4gICAgICAgICAgICAgICAgaGVscDogXCJ2aXN1YWxpemF0aW9uXCIsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgICAgZGlhZ3JhbUFuYWx5c2VzOiBbXG4gICAgICAgICAgICBhbmFseXNlcy5kaWFncmFtR3JhcGgoe1xuICAgICAgICAgICAgICAgIGlkOiBcImdyYXBoXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJWaXN1YWxpemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVmlzdWFsaXplIHRoZSBlcXVhdGlvbnMgYXMgYSBkaWFncmFtXCIsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuYWx5c2VzLmRlY2Fwb2Rlcyh7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZGVjYXBvZGVzXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJTaW11bGF0aW9uXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU2ltdWxhdGUgdGhlIFBERSB1c2luZyBEZWNhcG9kZXNcIixcbiAgICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgIH0pO1xufVxuIl0sImZpbGUiOiJhc3NldHMvdW5hcnktZGVjLUM5bGNSRlBJLmpzIn0=