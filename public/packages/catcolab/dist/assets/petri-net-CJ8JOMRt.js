const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./object_cell_editor-DW5yEtQd.js","./analysis_tool-Bvgm6Cie.js","./document-BaPUF-Ky.js","./notebook-DqARNRKu.js","./model-B9uNSW6J.js","./index-CvS5Jq0z.js","./morphism_cell_editor-COVxLmSB.js","./string_diagram_morphism_cell_editor-BEwu8jNy.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './index-CvS5Jq0z.js';
import { lazy } from 'solid-js';
import { d as ThSymMonoidalCategory } from './document-BaPUF-Ky.js';
import { T as Theory, M as MorTypeMap } from './analysis_tool-Bvgm6Cie.js';
import { p as petriNetVisualization, a as massAction, b as massActionEquations, c as stochasticMassAction, e as reachability } from './analyses-dUWNojZq.js';
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
                  () => __vitePreload(() => import('./string_diagram_morphism_cell_editor-BEwu8jNy.js'),true?__vite__mapDeps([7,2,3,1,4,5]):undefined,import.meta.url)
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


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQU9BLEtBQU0saUJBQW1CLFFBQUssTUFBTSwwQkFBTyxtQ0FBZ0MsQ0FBQztBQUM1RSxLQUFNLG1CQUFxQixRQUFLLE1BQU0sMEJBQU8scUNBQWtDLENBQUM7QUFFaEYsUUFBd0Isc0JBQXFCLFVBQWdDO0FBQ3pFLEVBQU0sNEJBQXdCLE1BQUkscUJBQXNCO0FBRXhELFNBQU8sR0FBSSxPQUFPO0FBQUEsSUFDZCxHQUFHO0FBQUEsSUFDSCxRQUFRLHNCQUFzQixNQUFPO0FBQUEsQ0FDckMsaUJBQWdCO0FBQUEsSUFDaEIsY0FBZ0I7QUFBQSxDQUNaLGlCQUFjO0FBQUEsTUFDZCxRQUFVO0FBQUEsQ0FDTjtBQUFBLENBQ0ksV0FBSTtBQUFBLENBQ0osY0FBTztBQUFBLFVBQ1AsZUFBaUI7QUFBQSxZQUNiLFlBQVksR0FBSSxXQUFXO0FBQUEsQ0FDdkI7QUFBQSxDQUNJO0FBQUEsQ0FDSSxvQkFBSztBQUFBLENBQ0wsd0JBQVMsR0FBRSxJQUFLLFdBQWtCLFNBQVMsQ0FBUztBQUFBLENBQ3hEO0FBQUEsZ0JBQ0E7QUFBQSxrQkFDSSwwQkFBTSxNQUFPLG9EQUFpRDtBQUFBO0FBQ2xFO0FBQ0osQ0FDSDtBQUFBO0FBQ0w7QUFDSjtBQUNKLENBQ0o7QUFBQSxJQUNBLFVBQVk7QUFBQSxDQUNSO0FBQUEsQ0FDSSxVQUFLO0FBQUEsQ0FDTCxhQUFRLElBQUUsR0FBSyxVQUFTLFNBQVMsU0FBUztBQUFBLENBQzFDLGFBQVE7QUFBQSxDQUNSLFdBQU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsQ0FDYixnQkFBVSxFQUFDLENBQUc7QUFBQSxDQUNsQjtBQUFBLENBQ0E7QUFBQSxDQUNJLFVBQUs7QUFBQSxRQUNMLE9BQVM7QUFBQSxDQUNMLFlBQUs7QUFBQSxDQUNMLGdCQUFTLEdBQUUsSUFBSyxXQUFTLFNBQVMsQ0FBUztBQUFBLENBQy9DO0FBQUEsQ0FDQSxhQUFRO0FBQUEsQ0FDUixXQUFNO0FBQUEsQ0FDTixrQkFBYTtBQUFBLFFBQ2IsVUFBVSxDQUFDLEdBQUc7QUFBQSxRQUNkLE1BQVE7QUFBQSxDQUNKLGNBQU8sR0FBRSxJQUFLLFdBQVMsU0FBUyxDQUFTO0FBQUEsQ0FDN0M7QUFBQSxRQUNBLFFBQVU7QUFBQSxDQUNOLGNBQU8sR0FBRSxJQUFLLFdBQVMsU0FBUyxDQUFTO0FBQUE7QUFDN0M7QUFDSixDQUNKO0FBQUEsSUFDQSxhQUFlO0FBQUEsTUFDWEEscUJBQStCO0FBQUEsQ0FDM0IsU0FBSTtBQUFBLENBQ0osV0FBTTtBQUFBLENBQ04sa0JBQWE7QUFBQSxRQUNiLElBQU07QUFBQSxPQUNUO0FBQUEsTUFDREMsVUFBb0I7QUFBQSxDQUNoQiwyQkFBc0I7QUFBQSxRQUN0QixTQUFTLE9BQU8sSUFBTTtBQUNsQixDQUFPLHNDQUFzQixVQUFXLFFBQU8sSUFBSTtBQUFBO0FBQ3ZELE9BQ0g7QUFBQSxNQUNEQyxtQkFBNkI7QUFBQSxDQUN6QiwyQkFBc0I7QUFBQSxRQUN0QixhQUFhLE9BQU8sSUFBTTtBQUN0QixDQUFPLHNDQUFzQixtQkFBb0IsUUFBTyxJQUFJO0FBQUE7QUFDaEUsT0FDSDtBQUFBLE1BQ0RDLG9CQUE4QjtBQUFBLENBQzFCLFNBQUk7QUFBQSxDQUNKLFdBQU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsQ0FDYixXQUFNO0FBQUEsUUFDTixTQUFTLE9BQU8sSUFBTTtBQUNsQixDQUFPLHNDQUFzQixvQkFBcUIsUUFBTyxJQUFJO0FBQUE7QUFDakUsT0FDSDtBQUFBLE1BQ0RDLFlBQXNCO0FBQUEsUUFDbEIsTUFBTSxPQUFPLElBQU07QUFDZixDQUFPLHNDQUFzQixlQUFnQixRQUFPLElBQUk7QUFBQTtBQUM1RCxDQUNIO0FBQUE7QUFDTCxHQUNIO0FBQ0wiLCJuYW1lcyI6WyJhbmFseXNlcy5wZXRyaU5ldFZpc3VhbGl6YXRpb24iLCJhbmFseXNlcy5tYXNzQWN0aW9uIiwiYW5hbHlzZXMubWFzc0FjdGlvbkVxdWF0aW9ucyIsImFuYWx5c2VzLnN0b2NoYXN0aWNNYXNzQWN0aW9uIiwiYW5hbHlzZXMucmVhY2hhYmlsaXR5Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zyb250ZW5kL3NyYy9zdGRsaWIvdGhlb3JpZXMvcGV0cmktbmV0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxhenkgfSBmcm9tIFwic29saWQtanNcIjtcblxuaW1wb3J0IHsgVGhTeW1Nb25vaWRhbENhdGVnb3J5IH0gZnJvbSBcImNhdGxvZy13YXNtXCI7XG5pbXBvcnQgeyBUaGVvcnksIHR5cGUgVGhlb3J5TWV0YSB9IGZyb20gXCIuLi8uLi90aGVvcnlcIjtcbmltcG9ydCB7IE1vclR5cGVNYXAgfSBmcm9tIFwiLi4vLi4vdGhlb3J5L3R5cGVzXCI7XG5pbXBvcnQgKiBhcyBhbmFseXNlcyBmcm9tIFwiLi4vYW5hbHlzZXNcIjtcblxuY29uc3QgT2JqZWN0Q2VsbEVkaXRvciA9IGxhenkoKCkgPT4gaW1wb3J0KFwiLi4vLi4vbW9kZWwvb2JqZWN0X2NlbGxfZWRpdG9yXCIpKTtcbmNvbnN0IE1vcnBoaXNtQ2VsbEVkaXRvciA9IGxhenkoKCkgPT4gaW1wb3J0KFwiLi4vLi4vbW9kZWwvbW9ycGhpc21fY2VsbF9lZGl0b3JcIikpO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQZXRyaU5ldFRoZW9yeSh0aGVvcnlNZXRhOiBUaGVvcnlNZXRhKTogVGhlb3J5IHtcbiAgICBjb25zdCB0aFN5bU1vbm9pZGFsQ2F0ZWdvcnkgPSBuZXcgVGhTeW1Nb25vaWRhbENhdGVnb3J5KCk7XG5cbiAgICByZXR1cm4gbmV3IFRoZW9yeSh7XG4gICAgICAgIC4uLnRoZW9yeU1ldGEsXG4gICAgICAgIHRoZW9yeTogdGhTeW1Nb25vaWRhbENhdGVnb3J5LnRoZW9yeSgpLFxuICAgICAgICBvbmx5RnJlZU1vZGVsczogdHJ1ZSxcbiAgICAgICAgZWRpdG9yVmFyaWFudHM6IHtcbiAgICAgICAgICAgIGRlZmF1bHRMYWJlbDogXCJMaXN0IHRyYW5zaXRpb25zXCIsXG4gICAgICAgICAgICB2YXJpYW50czogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZWRpdG9yLXZhcmlhbnQtcGV0cmktbmV0LXN0cmluZy1kaWFncmFtXCIsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlN0cmluZyBkaWFncmFtIHRyYW5zaXRpb25zXCIsXG4gICAgICAgICAgICAgICAgICAgIGVkaXRvck92ZXJyaWRlczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW9yRWRpdG9yczogbmV3IE1vclR5cGVNYXAoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnOiBcIkhvbVwiIGFzIGNvbnN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogeyB0YWc6IFwiQmFzaWNcIiBhcyBjb25zdCwgY29udGVudDogXCJPYmplY3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXp5KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCkgPT4gaW1wb3J0KFwiLi4vLi4vbW9kZWwvc3RyaW5nX2RpYWdyYW1fbW9ycGhpc21fY2VsbF9lZGl0b3JcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICBtb2RlbFR5cGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk9iVHlwZVwiLFxuICAgICAgICAgICAgICAgIG9iVHlwZTogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJPYmplY3RcIiB9LFxuICAgICAgICAgICAgICAgIGVkaXRvcjogT2JqZWN0Q2VsbEVkaXRvcixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlBsYWNlXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU3RhdGUgb2YgdGhlIHN5c3RlbVwiLFxuICAgICAgICAgICAgICAgIHNob3J0Y3V0OiBbXCJPXCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiTW9yVHlwZVwiLFxuICAgICAgICAgICAgICAgIG1vclR5cGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiBcIkhvbVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcIk9iamVjdFwiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlZGl0b3I6IE1vcnBoaXNtQ2VsbEVkaXRvcixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlRyYW5zaXRpb25cIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJFdmVudCBjYXVzaW5nIGNoYW5nZSBvZiBzdGF0ZVwiLFxuICAgICAgICAgICAgICAgIHNob3J0Y3V0OiBbXCJNXCJdLFxuICAgICAgICAgICAgICAgIGRvbWFpbjoge1xuICAgICAgICAgICAgICAgICAgICBhcHBseTogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJ0ZW5zb3JcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29kb21haW46IHtcbiAgICAgICAgICAgICAgICAgICAgYXBwbHk6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwidGVuc29yXCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgbW9kZWxBbmFseXNlczogW1xuICAgICAgICAgICAgYW5hbHlzZXMucGV0cmlOZXRWaXN1YWxpemF0aW9uKHtcbiAgICAgICAgICAgICAgICBpZDogXCJkaWFncmFtXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJWaXN1YWxpemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVmlzdWFsaXplIHRoZSBQZXRyaSBuZXRcIixcbiAgICAgICAgICAgICAgICBoZWxwOiBcInZpc3VhbGl6YXRpb25cIixcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYW5hbHlzZXMubWFzc0FjdGlvbih7XG4gICAgICAgICAgICAgICAgcmF0ZXNIYXZlR3JhbnVsYXJpdHk6IHRydWUsXG4gICAgICAgICAgICAgICAgc2ltdWxhdGUobW9kZWwsIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoU3ltTW9ub2lkYWxDYXRlZ29yeS5tYXNzQWN0aW9uKG1vZGVsLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhbmFseXNlcy5tYXNzQWN0aW9uRXF1YXRpb25zKHtcbiAgICAgICAgICAgICAgICByYXRlc0hhdmVHcmFudWxhcml0eTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBnZXRFcXVhdGlvbnMobW9kZWwsIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoU3ltTW9ub2lkYWxDYXRlZ29yeS5tYXNzQWN0aW9uRXF1YXRpb25zKG1vZGVsLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhbmFseXNlcy5zdG9jaGFzdGljTWFzc0FjdGlvbih7XG4gICAgICAgICAgICAgICAgaWQ6IFwic3RvY2hhc3RpYy1tYXNzLWFjdGlvblwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiU3RvY2hhc3RpYyBtYXNzLWFjdGlvbiBkeW5hbWljc1wiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlNpbXVsYXRlIGEgc3RvY2hhc3RpYyBzeXN0ZW0gdXNpbmcgdGhlIGxhdyBvZiBtYXNzIGFjdGlvblwiLFxuICAgICAgICAgICAgICAgIGhlbHA6IFwic3RvY2hhc3RpYy1tYXNzLWFjdGlvblwiLFxuICAgICAgICAgICAgICAgIHNpbXVsYXRlKG1vZGVsLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aFN5bU1vbm9pZGFsQ2F0ZWdvcnkuc3RvY2hhc3RpY01hc3NBY3Rpb24obW9kZWwsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuYWx5c2VzLnJlYWNoYWJpbGl0eSh7XG4gICAgICAgICAgICAgICAgY2hlY2sobW9kZWwsIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoU3ltTW9ub2lkYWxDYXRlZ29yeS5zdWJyZWFjaGFiaWxpdHkobW9kZWwsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICB9KTtcbn1cbiJdLCJmaWxlIjoiYXNzZXRzL3BldHJpLW5ldC1DSjhKT01SdC5qcyJ9