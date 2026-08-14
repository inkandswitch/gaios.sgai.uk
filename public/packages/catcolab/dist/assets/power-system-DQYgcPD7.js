const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./object_cell_editor-DW5yEtQd.js","./analysis_tool-Bvgm6Cie.js","./document-BaPUF-Ky.js","./notebook-DqARNRKu.js","./model-B9uNSW6J.js","./index-CvS5Jq0z.js","./morphism_cell_editor-COVxLmSB.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './index-CvS5Jq0z.js';
import { lazy } from 'solid-js';
import { s as ThPowerSystem } from './document-BaPUF-Ky.js';
import { T as Theory } from './analysis_tool-Bvgm6Cie.js';
import { m as modelGraph, n as kuramoto } from './analyses-dUWNojZq.js';
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
function createPowerSystemsTheory(theoryMeta) {
  const thPowerSystem = new ThPowerSystem();
  return new Theory({
    ...theoryMeta,
    theory: thPowerSystem.theory(),
    onlyFreeModels: true,
    modelTypes: [
      {
        tag: "ObType",
        obType: { tag: "Basic", content: "Bus" },
        editor: ObjectCellEditor,
        name: "Bus",
        description: "Node in the power system",
        shortcut: ["B"]
      },
      {
        tag: "MorType",
        morType: {
          tag: "Hom",
          content: { tag: "Basic", content: "Bus" }
        },
        editor: MorphismCellEditor,
        name: "Line",
        description: "Passive line between buses",
        arrowStyle: "unmarked",
        preferUnnamed: true,
        shortcut: ["L"]
      },
      {
        tag: "MorType",
        morType: { tag: "Basic", content: "Passive" },
        editor: MorphismCellEditor,
        name: "Transformer",
        description: "Passive line allowing a change of voltage",
        arrowStyle: "unmarked",
        preferUnnamed: true
      },
      {
        tag: "MorType",
        morType: { tag: "Basic", content: "Branch" },
        editor: MorphismCellEditor,
        name: "Link",
        description: "Controllable flow between buses",
        arrowStyle: "unmarked",
        preferUnnamed: true
      }
    ],
    modelAnalyses: [
      modelGraph({
        id: "diagram",
        name: "Visualization",
        description: "Visualize the power system as a network",
        help: "visualization"
      }),
      kuramoto({
        simulate: (model, data) => thPowerSystem.kuramoto(model, data),
        parameterLabels: {
          coupling: "Capacity",
          forcing: "Input power"
        }
      })
    ]
  });
}

export { createPowerSystemsTheory as default };


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQU1BLEtBQU0saUJBQW1CLFFBQUssTUFBTSwwQkFBTyxtQ0FBZ0MsQ0FBQztBQUM1RSxLQUFNLG1CQUFxQixRQUFLLE1BQU0sMEJBQU8scUNBQWtDLENBQUM7QUFFaEYsUUFBd0IsMEJBQXlCLFVBQWdDO0FBQzdFLEVBQU0sb0JBQWdCLE1BQUksYUFBYztBQUV4QyxTQUFPLEdBQUksT0FBTztBQUFBLElBQ2QsR0FBRztBQUFBLElBQ0gsUUFBUSxjQUFjLE1BQU87QUFBQSxDQUM3QixpQkFBZ0I7QUFBQSxJQUNoQixVQUFZO0FBQUEsQ0FDUjtBQUFBLENBQ0ksVUFBSztBQUFBLENBQ0wsYUFBUSxJQUFFLEdBQUssVUFBUyxTQUFTLE1BQU07QUFBQSxDQUN2QyxhQUFRO0FBQUEsQ0FDUixXQUFNO0FBQUEsQ0FDTixrQkFBYTtBQUFBLENBQ2IsZ0JBQVUsRUFBQyxDQUFHO0FBQUEsQ0FDbEI7QUFBQSxDQUNBO0FBQUEsQ0FDSSxVQUFLO0FBQUEsUUFDTCxPQUFTO0FBQUEsQ0FDTCxZQUFLO0FBQUEsQ0FDTCxnQkFBUyxHQUFFLElBQUssV0FBUyxTQUFTLENBQU07QUFBQSxDQUM1QztBQUFBLENBQ0EsYUFBUTtBQUFBLENBQ1IsV0FBTTtBQUFBLENBQ04sa0JBQWE7QUFBQSxDQUNiLGlCQUFZO0FBQUEsQ0FDWixvQkFBZTtBQUFBLENBQ2YsZ0JBQVUsRUFBQyxDQUFHO0FBQUEsQ0FDbEI7QUFBQSxDQUNBO0FBQUEsQ0FDSSxVQUFLO0FBQUEsQ0FDTCxjQUFTLElBQUUsR0FBSyxVQUFTLFNBQVMsVUFBVTtBQUFBLENBQzVDLGFBQVE7QUFBQSxDQUNSLFdBQU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsQ0FDYixpQkFBWTtBQUFBLFFBQ1osYUFBZTtBQUFBLENBQ25CO0FBQUEsQ0FDQTtBQUFBLENBQ0ksVUFBSztBQUFBLENBQ0wsY0FBUyxJQUFFLEdBQUssVUFBUyxTQUFTLFNBQVM7QUFBQSxDQUMzQyxhQUFRO0FBQUEsQ0FDUixXQUFNO0FBQUEsQ0FDTixrQkFBYTtBQUFBLENBQ2IsaUJBQVk7QUFBQSxRQUNaLGFBQWU7QUFBQTtBQUNuQixDQUNKO0FBQUEsSUFDQSxhQUFlO0FBQUEsTUFDWEEsVUFBb0I7QUFBQSxDQUNoQixTQUFJO0FBQUEsQ0FDSixXQUFNO0FBQUEsQ0FDTixrQkFBYTtBQUFBLFFBQ2IsSUFBTTtBQUFBLE9BQ1Q7QUFBQSxNQUNEQyxRQUFrQjtBQUFBLFFBQ2QsVUFBVSxDQUFDLE9BQU8sU0FBUyxhQUFjLFVBQVMsT0FBTyxJQUFJO0FBQUEsUUFDN0QsZUFBaUI7QUFBQSxDQUNiLGlCQUFVO0FBQUEsVUFDVixPQUFTO0FBQUE7QUFDYixDQUNIO0FBQUE7QUFDTCxHQUNIO0FBQ0wiLCJuYW1lcyI6WyJhbmFseXNlcy5tb2RlbEdyYXBoIiwiYW5hbHlzZXMua3VyYW1vdG8iXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vZnJvbnRlbmQvc3JjL3N0ZGxpYi90aGVvcmllcy9wb3dlci1zeXN0ZW0udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGF6eSB9IGZyb20gXCJzb2xpZC1qc1wiO1xuXG5pbXBvcnQgeyBUaFBvd2VyU3lzdGVtIH0gZnJvbSBcImNhdGxvZy13YXNtXCI7XG5pbXBvcnQgeyBUaGVvcnksIHR5cGUgVGhlb3J5TWV0YSB9IGZyb20gXCIuLi8uLi90aGVvcnlcIjtcbmltcG9ydCAqIGFzIGFuYWx5c2VzIGZyb20gXCIuLi9hbmFseXNlc1wiO1xuXG5jb25zdCBPYmplY3RDZWxsRWRpdG9yID0gbGF6eSgoKSA9PiBpbXBvcnQoXCIuLi8uLi9tb2RlbC9vYmplY3RfY2VsbF9lZGl0b3JcIikpO1xuY29uc3QgTW9ycGhpc21DZWxsRWRpdG9yID0gbGF6eSgoKSA9PiBpbXBvcnQoXCIuLi8uLi9tb2RlbC9tb3JwaGlzbV9jZWxsX2VkaXRvclwiKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVBvd2VyU3lzdGVtc1RoZW9yeSh0aGVvcnlNZXRhOiBUaGVvcnlNZXRhKTogVGhlb3J5IHtcbiAgICBjb25zdCB0aFBvd2VyU3lzdGVtID0gbmV3IFRoUG93ZXJTeXN0ZW0oKTtcblxuICAgIHJldHVybiBuZXcgVGhlb3J5KHtcbiAgICAgICAgLi4udGhlb3J5TWV0YSxcbiAgICAgICAgdGhlb3J5OiB0aFBvd2VyU3lzdGVtLnRoZW9yeSgpLFxuICAgICAgICBvbmx5RnJlZU1vZGVsczogdHJ1ZSxcbiAgICAgICAgbW9kZWxUeXBlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogXCJPYlR5cGVcIixcbiAgICAgICAgICAgICAgICBvYlR5cGU6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwiQnVzXCIgfSxcbiAgICAgICAgICAgICAgICBlZGl0b3I6IE9iamVjdENlbGxFZGl0b3IsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJCdXNcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJOb2RlIGluIHRoZSBwb3dlciBzeXN0ZW1cIixcbiAgICAgICAgICAgICAgICBzaG9ydGN1dDogW1wiQlwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk1vclR5cGVcIixcbiAgICAgICAgICAgICAgICBtb3JUeXBlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogXCJIb21cIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJCdXNcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZWRpdG9yOiBNb3JwaGlzbUNlbGxFZGl0b3IsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJMaW5lXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiUGFzc2l2ZSBsaW5lIGJldHdlZW4gYnVzZXNcIixcbiAgICAgICAgICAgICAgICBhcnJvd1N0eWxlOiBcInVubWFya2VkXCIsXG4gICAgICAgICAgICAgICAgcHJlZmVyVW5uYW1lZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzaG9ydGN1dDogW1wiTFwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk1vclR5cGVcIixcbiAgICAgICAgICAgICAgICBtb3JUeXBlOiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcIlBhc3NpdmVcIiB9LFxuICAgICAgICAgICAgICAgIGVkaXRvcjogTW9ycGhpc21DZWxsRWRpdG9yLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiVHJhbnNmb3JtZXJcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJQYXNzaXZlIGxpbmUgYWxsb3dpbmcgYSBjaGFuZ2Ugb2Ygdm9sdGFnZVwiLFxuICAgICAgICAgICAgICAgIGFycm93U3R5bGU6IFwidW5tYXJrZWRcIixcbiAgICAgICAgICAgICAgICBwcmVmZXJVbm5hbWVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiTW9yVHlwZVwiLFxuICAgICAgICAgICAgICAgIG1vclR5cGU6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwiQnJhbmNoXCIgfSxcbiAgICAgICAgICAgICAgICBlZGl0b3I6IE1vcnBoaXNtQ2VsbEVkaXRvcixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkxpbmtcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJDb250cm9sbGFibGUgZmxvdyBiZXR3ZWVuIGJ1c2VzXCIsXG4gICAgICAgICAgICAgICAgYXJyb3dTdHlsZTogXCJ1bm1hcmtlZFwiLFxuICAgICAgICAgICAgICAgIHByZWZlclVubmFtZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBtb2RlbEFuYWx5c2VzOiBbXG4gICAgICAgICAgICBhbmFseXNlcy5tb2RlbEdyYXBoKHtcbiAgICAgICAgICAgICAgICBpZDogXCJkaWFncmFtXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJWaXN1YWxpemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVmlzdWFsaXplIHRoZSBwb3dlciBzeXN0ZW0gYXMgYSBuZXR3b3JrXCIsXG4gICAgICAgICAgICAgICAgaGVscDogXCJ2aXN1YWxpemF0aW9uXCIsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuYWx5c2VzLmt1cmFtb3RvKHtcbiAgICAgICAgICAgICAgICBzaW11bGF0ZTogKG1vZGVsLCBkYXRhKSA9PiB0aFBvd2VyU3lzdGVtLmt1cmFtb3RvKG1vZGVsLCBkYXRhKSxcbiAgICAgICAgICAgICAgICBwYXJhbWV0ZXJMYWJlbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgY291cGxpbmc6IFwiQ2FwYWNpdHlcIixcbiAgICAgICAgICAgICAgICAgICAgZm9yY2luZzogXCJJbnB1dCBwb3dlclwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICB9KTtcbn1cbiJdLCJmaWxlIjoiYXNzZXRzL3Bvd2VyLXN5c3RlbS1EUVlnY1BENy5qcyJ9