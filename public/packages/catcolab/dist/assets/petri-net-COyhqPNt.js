const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./object_cell_editor-Bz8VpGR6.js","./analysis_tool-uDJCjaik.js","./model-hspTLkzk.js","./index-Hw8dIQCV.js","./morphism_cell_editor-D-tJVAzz.js","./string_diagram_morphism_cell_editor-Bla6Jpo3.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './index-Hw8dIQCV.js';
import { lazy } from 'solid-js';
import { d as ThSymMonoidalCategory, a as Theory, M as MorTypeMap } from './analysis_tool-uDJCjaik.js';
import { p as petriNetVisualization, a as massAction, b as massActionEquations, c as stochasticMassAction, e as reachability } from './analyses-DQLeO9Jq.js';
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
const MorphismCellEditor = lazy(() => __vitePreload(() => import('./morphism_cell_editor-D-tJVAzz.js'),true?__vite__mapDeps([4,1,2,3,0]):undefined,import.meta.url));
function createPetriNetTheory(theoryMeta) {
  const thSymMonoidalCategory = new ThSymMonoidalCategory();
  return new Theory({
    ...theoryMeta,
    theory: thSymMonoidalCategory.theory(),
    onlyFreeModels: true,
    editorVariants: {
      defaultLabel: "List transitions",
      variants: [
        {
          id: "editor-variant-petri-net-string-diagram",
          label: "String diagram transitions",
          editorOverrides: {
            morEditors: new MorTypeMap([
              [
                {
                  tag: "Hom",
                  content: { tag: "Basic", content: "Object" }
                },
                lazy(
                  () => __vitePreload(() => import('./string_diagram_morphism_cell_editor-Bla6Jpo3.js'),true?__vite__mapDeps([5,1,2,3]):undefined,import.meta.url)
                )
              ]
            ])
          }
        }
      ]
    },
    modelTypes: [
      {
        tag: "ObType",
        obType: { tag: "Basic", content: "Object" },
        editor: ObjectCellEditor,
        name: "Place",
        description: "State of the system",
        shortcut: ["O"]
      },
      {
        tag: "MorType",
        morType: {
          tag: "Hom",
          content: { tag: "Basic", content: "Object" }
        },
        editor: MorphismCellEditor,
        name: "Transition",
        description: "Event causing change of state",
        shortcut: ["M"],
        domain: {
          apply: { tag: "Basic", content: "tensor" }
        },
        codomain: {
          apply: { tag: "Basic", content: "tensor" }
        }
      }
    ],
    modelAnalyses: [
      petriNetVisualization({
        id: "diagram",
        name: "Visualization",
        description: "Visualize the Petri net",
        help: "visualization"
      }),
      massAction({
        ratesHaveGranularity: true,
        simulate(model, data) {
          return thSymMonoidalCategory.massAction(model, data);
        }
      }),
      massActionEquations({
        ratesHaveGranularity: true,
        getEquations(model, data) {
          return thSymMonoidalCategory.massActionEquations(model, data);
        }
      }),
      stochasticMassAction({
        id: "stochastic-mass-action",
        name: "Stochastic mass-action dynamics",
        description: "Simulate a stochastic system using the law of mass action",
        help: "stochastic-mass-action",
        simulate(model, data) {
          return thSymMonoidalCategory.stochasticMassAction(model, data);
        }
      }),
      reachability({
        check(model, data) {
          return thSymMonoidalCategory.subreachability(model, data);
        }
      })
    ]
  });
}

export { createPetriNetTheory as default };


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBT0EsS0FBTSxpQkFBbUIsUUFBSyxNQUFNLDBCQUFPLG1DQUFnQyxDQUFDO0FBQzVFLEtBQU0sbUJBQXFCLFFBQUssTUFBTSwwQkFBTyxxQ0FBa0MsQ0FBQztBQUVoRixRQUF3QixzQkFBcUIsVUFBZ0M7QUFDekUsRUFBTSw0QkFBd0IsTUFBSSxxQkFBc0I7QUFFeEQsU0FBTyxHQUFJLE9BQU87QUFBQSxJQUNkLEdBQUc7QUFBQSxJQUNILFFBQVEsc0JBQXNCLE1BQU87QUFBQSxDQUNyQyxpQkFBZ0I7QUFBQSxJQUNoQixjQUFnQjtBQUFBLENBQ1osaUJBQWM7QUFBQSxNQUNkLFFBQVU7QUFBQSxDQUNOO0FBQUEsQ0FDSSxXQUFJO0FBQUEsQ0FDSixjQUFPO0FBQUEsVUFDUCxlQUFpQjtBQUFBLFlBQ2IsWUFBWSxHQUFJLFdBQVc7QUFBQSxDQUN2QjtBQUFBLENBQ0k7QUFBQSxDQUNJLG9CQUFLO0FBQUEsQ0FDTCx3QkFBUyxHQUFFLElBQUssV0FBa0IsU0FBUyxDQUFTO0FBQUEsQ0FDeEQ7QUFBQSxnQkFDQTtBQUFBLGtCQUNJLDBCQUFNLE1BQU8sb0RBQWlEO0FBQUE7QUFDbEU7QUFDSixDQUNIO0FBQUE7QUFDTDtBQUNKO0FBQ0osQ0FDSjtBQUFBLElBQ0EsVUFBWTtBQUFBLENBQ1I7QUFBQSxDQUNJLFVBQUs7QUFBQSxDQUNMLGFBQVEsSUFBRSxHQUFLLFVBQVMsU0FBUyxTQUFTO0FBQUEsQ0FDMUMsYUFBUTtBQUFBLENBQ1IsV0FBTTtBQUFBLENBQ04sa0JBQWE7QUFBQSxDQUNiLGdCQUFVLEVBQUMsQ0FBRztBQUFBLENBQ2xCO0FBQUEsQ0FDQTtBQUFBLENBQ0ksVUFBSztBQUFBLFFBQ0wsT0FBUztBQUFBLENBQ0wsWUFBSztBQUFBLENBQ0wsZ0JBQVMsR0FBRSxJQUFLLFdBQVMsU0FBUyxDQUFTO0FBQUEsQ0FDL0M7QUFBQSxDQUNBLGFBQVE7QUFBQSxDQUNSLFdBQU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsUUFDYixVQUFVLENBQUMsR0FBRztBQUFBLFFBQ2QsTUFBUTtBQUFBLENBQ0osY0FBTyxHQUFFLElBQUssV0FBUyxTQUFTLENBQVM7QUFBQSxDQUM3QztBQUFBLFFBQ0EsUUFBVTtBQUFBLENBQ04sY0FBTyxHQUFFLElBQUssV0FBUyxTQUFTLENBQVM7QUFBQTtBQUM3QztBQUNKLENBQ0o7QUFBQSxJQUNBLGFBQWU7QUFBQSxNQUNYQSxxQkFBK0I7QUFBQSxDQUMzQixTQUFJO0FBQUEsQ0FDSixXQUFNO0FBQUEsQ0FDTixrQkFBYTtBQUFBLFFBQ2IsSUFBTTtBQUFBLE9BQ1Q7QUFBQSxNQUNEQyxVQUFvQjtBQUFBLENBQ2hCLDJCQUFzQjtBQUFBLFFBQ3RCLFNBQVMsT0FBTyxJQUFNO0FBQ2xCLENBQU8sc0NBQXNCLFVBQVcsUUFBTyxJQUFJO0FBQUE7QUFDdkQsT0FDSDtBQUFBLE1BQ0RDLG1CQUE2QjtBQUFBLENBQ3pCLDJCQUFzQjtBQUFBLFFBQ3RCLGFBQWEsT0FBTyxJQUFNO0FBQ3RCLENBQU8sc0NBQXNCLG1CQUFvQixRQUFPLElBQUk7QUFBQTtBQUNoRSxPQUNIO0FBQUEsTUFDREMsb0JBQThCO0FBQUEsQ0FDMUIsU0FBSTtBQUFBLENBQ0osV0FBTTtBQUFBLENBQ04sa0JBQWE7QUFBQSxDQUNiLFdBQU07QUFBQSxRQUNOLFNBQVMsT0FBTyxJQUFNO0FBQ2xCLENBQU8sc0NBQXNCLG9CQUFxQixRQUFPLElBQUk7QUFBQTtBQUNqRSxPQUNIO0FBQUEsTUFDREMsWUFBc0I7QUFBQSxRQUNsQixNQUFNLE9BQU8sSUFBTTtBQUNmLENBQU8sc0NBQXNCLGVBQWdCLFFBQU8sSUFBSTtBQUFBO0FBQzVELENBQ0g7QUFBQTtBQUNMLEdBQ0g7QUFDTCIsIm5hbWVzIjpbImFuYWx5c2VzLnBldHJpTmV0VmlzdWFsaXphdGlvbiIsImFuYWx5c2VzLm1hc3NBY3Rpb24iLCJhbmFseXNlcy5tYXNzQWN0aW9uRXF1YXRpb25zIiwiYW5hbHlzZXMuc3RvY2hhc3RpY01hc3NBY3Rpb24iLCJhbmFseXNlcy5yZWFjaGFiaWxpdHkiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vZnJvbnRlbmQvc3JjL3N0ZGxpYi90aGVvcmllcy9wZXRyaS1uZXQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGF6eSB9IGZyb20gXCJzb2xpZC1qc1wiO1xuXG5pbXBvcnQgeyBUaFN5bU1vbm9pZGFsQ2F0ZWdvcnkgfSBmcm9tIFwiY2F0bG9nLXdhc21cIjtcbmltcG9ydCB7IFRoZW9yeSwgdHlwZSBUaGVvcnlNZXRhIH0gZnJvbSBcIi4uLy4uL3RoZW9yeVwiO1xuaW1wb3J0IHsgTW9yVHlwZU1hcCB9IGZyb20gXCIuLi8uLi90aGVvcnkvdHlwZXNcIjtcbmltcG9ydCAqIGFzIGFuYWx5c2VzIGZyb20gXCIuLi9hbmFseXNlc1wiO1xuXG5jb25zdCBPYmplY3RDZWxsRWRpdG9yID0gbGF6eSgoKSA9PiBpbXBvcnQoXCIuLi8uLi9tb2RlbC9vYmplY3RfY2VsbF9lZGl0b3JcIikpO1xuY29uc3QgTW9ycGhpc21DZWxsRWRpdG9yID0gbGF6eSgoKSA9PiBpbXBvcnQoXCIuLi8uLi9tb2RlbC9tb3JwaGlzbV9jZWxsX2VkaXRvclwiKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVBldHJpTmV0VGhlb3J5KHRoZW9yeU1ldGE6IFRoZW9yeU1ldGEpOiBUaGVvcnkge1xuICAgIGNvbnN0IHRoU3ltTW9ub2lkYWxDYXRlZ29yeSA9IG5ldyBUaFN5bU1vbm9pZGFsQ2F0ZWdvcnkoKTtcblxuICAgIHJldHVybiBuZXcgVGhlb3J5KHtcbiAgICAgICAgLi4udGhlb3J5TWV0YSxcbiAgICAgICAgdGhlb3J5OiB0aFN5bU1vbm9pZGFsQ2F0ZWdvcnkudGhlb3J5KCksXG4gICAgICAgIG9ubHlGcmVlTW9kZWxzOiB0cnVlLFxuICAgICAgICBlZGl0b3JWYXJpYW50czoge1xuICAgICAgICAgICAgZGVmYXVsdExhYmVsOiBcIkxpc3QgdHJhbnNpdGlvbnNcIixcbiAgICAgICAgICAgIHZhcmlhbnRzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogXCJlZGl0b3ItdmFyaWFudC1wZXRyaS1uZXQtc3RyaW5nLWRpYWdyYW1cIixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU3RyaW5nIGRpYWdyYW0gdHJhbnNpdGlvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgZWRpdG9yT3ZlcnJpZGVzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3JFZGl0b3JzOiBuZXcgTW9yVHlwZU1hcChbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YWc6IFwiSG9tXCIgYXMgY29uc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7IHRhZzogXCJCYXNpY1wiIGFzIGNvbnN0LCBjb250ZW50OiBcIk9iamVjdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhenkoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKSA9PiBpbXBvcnQoXCIuLi8uLi9tb2RlbC9zdHJpbmdfZGlhZ3JhbV9tb3JwaGlzbV9jZWxsX2VkaXRvclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIG1vZGVsVHlwZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiT2JUeXBlXCIsXG4gICAgICAgICAgICAgICAgb2JUeXBlOiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcIk9iamVjdFwiIH0sXG4gICAgICAgICAgICAgICAgZWRpdG9yOiBPYmplY3RDZWxsRWRpdG9yLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiUGxhY2VcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTdGF0ZSBvZiB0aGUgc3lzdGVtXCIsXG4gICAgICAgICAgICAgICAgc2hvcnRjdXQ6IFtcIk9cIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogXCJNb3JUeXBlXCIsXG4gICAgICAgICAgICAgICAgbW9yVHlwZToge1xuICAgICAgICAgICAgICAgICAgICB0YWc6IFwiSG9tXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwiT2JqZWN0XCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVkaXRvcjogTW9ycGhpc21DZWxsRWRpdG9yLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiVHJhbnNpdGlvblwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkV2ZW50IGNhdXNpbmcgY2hhbmdlIG9mIHN0YXRlXCIsXG4gICAgICAgICAgICAgICAgc2hvcnRjdXQ6IFtcIk1cIl0sXG4gICAgICAgICAgICAgICAgZG9tYWluOiB7XG4gICAgICAgICAgICAgICAgICAgIGFwcGx5OiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcInRlbnNvclwiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb2RvbWFpbjoge1xuICAgICAgICAgICAgICAgICAgICBhcHBseTogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJ0ZW5zb3JcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBtb2RlbEFuYWx5c2VzOiBbXG4gICAgICAgICAgICBhbmFseXNlcy5wZXRyaU5ldFZpc3VhbGl6YXRpb24oe1xuICAgICAgICAgICAgICAgIGlkOiBcImRpYWdyYW1cIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlZpc3VhbGl6YXRpb25cIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJWaXN1YWxpemUgdGhlIFBldHJpIG5ldFwiLFxuICAgICAgICAgICAgICAgIGhlbHA6IFwidmlzdWFsaXphdGlvblwiLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhbmFseXNlcy5tYXNzQWN0aW9uKHtcbiAgICAgICAgICAgICAgICByYXRlc0hhdmVHcmFudWxhcml0eTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzaW11bGF0ZShtb2RlbCwgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhTeW1Nb25vaWRhbENhdGVnb3J5Lm1hc3NBY3Rpb24obW9kZWwsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuYWx5c2VzLm1hc3NBY3Rpb25FcXVhdGlvbnMoe1xuICAgICAgICAgICAgICAgIHJhdGVzSGF2ZUdyYW51bGFyaXR5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGdldEVxdWF0aW9ucyhtb2RlbCwgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhTeW1Nb25vaWRhbENhdGVnb3J5Lm1hc3NBY3Rpb25FcXVhdGlvbnMobW9kZWwsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuYWx5c2VzLnN0b2NoYXN0aWNNYXNzQWN0aW9uKHtcbiAgICAgICAgICAgICAgICBpZDogXCJzdG9jaGFzdGljLW1hc3MtYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJTdG9jaGFzdGljIG1hc3MtYWN0aW9uIGR5bmFtaWNzXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU2ltdWxhdGUgYSBzdG9jaGFzdGljIHN5c3RlbSB1c2luZyB0aGUgbGF3IG9mIG1hc3MgYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgaGVscDogXCJzdG9jaGFzdGljLW1hc3MtYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgc2ltdWxhdGUobW9kZWwsIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoU3ltTW9ub2lkYWxDYXRlZ29yeS5zdG9jaGFzdGljTWFzc0FjdGlvbihtb2RlbCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYW5hbHlzZXMucmVhY2hhYmlsaXR5KHtcbiAgICAgICAgICAgICAgICBjaGVjayhtb2RlbCwgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhTeW1Nb25vaWRhbENhdGVnb3J5LnN1YnJlYWNoYWJpbGl0eShtb2RlbCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgIH0pO1xufVxuIl0sImZpbGUiOiJhc3NldHMvcGV0cmktbmV0LUNPeWhxUE50LmpzIn0=