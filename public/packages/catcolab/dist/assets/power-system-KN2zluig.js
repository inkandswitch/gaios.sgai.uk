const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./object_cell_editor-Bx-WVfFa.js","./analysis_tool-CDs3CHfO.js","./model-hspTLkzk.js","./index-BLpRC7wy.js","./morphism_cell_editor-Cqxr4n8q.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './index-BLpRC7wy.js';
import { lazy } from 'solid-js';
import { m as ThPowerSystem, a as Theory } from './analysis_tool-CDs3CHfO.js';
import { m as modelGraph, n as kuramoto } from './analyses-XxH7VM1Y.js';
import 'solid-js/web';
import './model-hspTLkzk.js';
import 'solid-js/store';
import '@automerge/automerge-repo';
import '@automerge/automerge-repo-network-websocket';
import '@automerge/automerge-repo-storage-indexeddb';
import '@automerge/automerge/slim';
import '@automerge/automerge';
import '@inkandswitch/patchwork-providers';

const ObjectCellEditor = lazy(() => __vitePreload(() => import('./object_cell_editor-Bx-WVfFa.js'),true?__vite__mapDeps([0,1,2,3]):undefined,import.meta.url));
const MorphismCellEditor = lazy(() => __vitePreload(() => import('./morphism_cell_editor-Cqxr4n8q.js'),true?__vite__mapDeps([4,1,2,3,0]):undefined,import.meta.url));
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


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsS0FBTSxpQkFBbUIsUUFBSyxNQUFNLDBCQUFPLG1DQUFnQyxDQUFDO0FBQzVFLEtBQU0sbUJBQXFCLFFBQUssTUFBTSwwQkFBTyxxQ0FBa0MsQ0FBQztBQUVoRixRQUF3QiwwQkFBeUIsVUFBZ0M7QUFDN0UsRUFBTSxvQkFBZ0IsTUFBSSxhQUFjO0FBRXhDLFNBQU8sR0FBSSxPQUFPO0FBQUEsSUFDZCxHQUFHO0FBQUEsSUFDSCxRQUFRLGNBQWMsTUFBTztBQUFBLENBQzdCLGlCQUFnQjtBQUFBLElBQ2hCLFVBQVk7QUFBQSxDQUNSO0FBQUEsQ0FDSSxVQUFLO0FBQUEsQ0FDTCxhQUFRLElBQUUsR0FBSyxVQUFTLFNBQVMsTUFBTTtBQUFBLENBQ3ZDLGFBQVE7QUFBQSxDQUNSLFdBQU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsQ0FDYixnQkFBVSxFQUFDLENBQUc7QUFBQSxDQUNsQjtBQUFBLENBQ0E7QUFBQSxDQUNJLFVBQUs7QUFBQSxRQUNMLE9BQVM7QUFBQSxDQUNMLFlBQUs7QUFBQSxDQUNMLGdCQUFTLEdBQUUsSUFBSyxXQUFTLFNBQVMsQ0FBTTtBQUFBLENBQzVDO0FBQUEsQ0FDQSxhQUFRO0FBQUEsQ0FDUixXQUFNO0FBQUEsQ0FDTixrQkFBYTtBQUFBLENBQ2IsaUJBQVk7QUFBQSxDQUNaLG9CQUFlO0FBQUEsQ0FDZixnQkFBVSxFQUFDLENBQUc7QUFBQSxDQUNsQjtBQUFBLENBQ0E7QUFBQSxDQUNJLFVBQUs7QUFBQSxDQUNMLGNBQVMsSUFBRSxHQUFLLFVBQVMsU0FBUyxVQUFVO0FBQUEsQ0FDNUMsYUFBUTtBQUFBLENBQ1IsV0FBTTtBQUFBLENBQ04sa0JBQWE7QUFBQSxDQUNiLGlCQUFZO0FBQUEsUUFDWixhQUFlO0FBQUEsQ0FDbkI7QUFBQSxDQUNBO0FBQUEsQ0FDSSxVQUFLO0FBQUEsQ0FDTCxjQUFTLElBQUUsR0FBSyxVQUFTLFNBQVMsU0FBUztBQUFBLENBQzNDLGFBQVE7QUFBQSxDQUNSLFdBQU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsQ0FDYixpQkFBWTtBQUFBLFFBQ1osYUFBZTtBQUFBO0FBQ25CLENBQ0o7QUFBQSxJQUNBLGFBQWU7QUFBQSxNQUNYQSxVQUFvQjtBQUFBLENBQ2hCLFNBQUk7QUFBQSxDQUNKLFdBQU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsUUFDYixJQUFNO0FBQUEsT0FDVDtBQUFBLE1BQ0RDLFFBQWtCO0FBQUEsUUFDZCxVQUFVLENBQUMsT0FBTyxTQUFTLGFBQWMsVUFBUyxPQUFPLElBQUk7QUFBQSxRQUM3RCxlQUFpQjtBQUFBLENBQ2IsaUJBQVU7QUFBQSxVQUNWLE9BQVM7QUFBQTtBQUNiLENBQ0g7QUFBQTtBQUNMLEdBQ0g7QUFDTCIsIm5hbWVzIjpbImFuYWx5c2VzLm1vZGVsR3JhcGgiLCJhbmFseXNlcy5rdXJhbW90byJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyIuLi8uLi8uLi9mcm9udGVuZC9zcmMvc3RkbGliL3RoZW9yaWVzL3Bvd2VyLXN5c3RlbS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsYXp5IH0gZnJvbSBcInNvbGlkLWpzXCI7XG5cbmltcG9ydCB7IFRoUG93ZXJTeXN0ZW0gfSBmcm9tIFwiY2F0bG9nLXdhc21cIjtcbmltcG9ydCB7IFRoZW9yeSwgdHlwZSBUaGVvcnlNZXRhIH0gZnJvbSBcIi4uLy4uL3RoZW9yeVwiO1xuaW1wb3J0ICogYXMgYW5hbHlzZXMgZnJvbSBcIi4uL2FuYWx5c2VzXCI7XG5cbmNvbnN0IE9iamVjdENlbGxFZGl0b3IgPSBsYXp5KCgpID0+IGltcG9ydChcIi4uLy4uL21vZGVsL29iamVjdF9jZWxsX2VkaXRvclwiKSk7XG5jb25zdCBNb3JwaGlzbUNlbGxFZGl0b3IgPSBsYXp5KCgpID0+IGltcG9ydChcIi4uLy4uL21vZGVsL21vcnBoaXNtX2NlbGxfZWRpdG9yXCIpKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlUG93ZXJTeXN0ZW1zVGhlb3J5KHRoZW9yeU1ldGE6IFRoZW9yeU1ldGEpOiBUaGVvcnkge1xuICAgIGNvbnN0IHRoUG93ZXJTeXN0ZW0gPSBuZXcgVGhQb3dlclN5c3RlbSgpO1xuXG4gICAgcmV0dXJuIG5ldyBUaGVvcnkoe1xuICAgICAgICAuLi50aGVvcnlNZXRhLFxuICAgICAgICB0aGVvcnk6IHRoUG93ZXJTeXN0ZW0udGhlb3J5KCksXG4gICAgICAgIG9ubHlGcmVlTW9kZWxzOiB0cnVlLFxuICAgICAgICBtb2RlbFR5cGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk9iVHlwZVwiLFxuICAgICAgICAgICAgICAgIG9iVHlwZTogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJCdXNcIiB9LFxuICAgICAgICAgICAgICAgIGVkaXRvcjogT2JqZWN0Q2VsbEVkaXRvcixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJ1c1wiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIk5vZGUgaW4gdGhlIHBvd2VyIHN5c3RlbVwiLFxuICAgICAgICAgICAgICAgIHNob3J0Y3V0OiBbXCJCXCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiTW9yVHlwZVwiLFxuICAgICAgICAgICAgICAgIG1vclR5cGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiBcIkhvbVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcIkJ1c1wiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlZGl0b3I6IE1vcnBoaXNtQ2VsbEVkaXRvcixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkxpbmVcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJQYXNzaXZlIGxpbmUgYmV0d2VlbiBidXNlc1wiLFxuICAgICAgICAgICAgICAgIGFycm93U3R5bGU6IFwidW5tYXJrZWRcIixcbiAgICAgICAgICAgICAgICBwcmVmZXJVbm5hbWVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNob3J0Y3V0OiBbXCJMXCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiTW9yVHlwZVwiLFxuICAgICAgICAgICAgICAgIG1vclR5cGU6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwiUGFzc2l2ZVwiIH0sXG4gICAgICAgICAgICAgICAgZWRpdG9yOiBNb3JwaGlzbUNlbGxFZGl0b3IsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJUcmFuc2Zvcm1lclwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlBhc3NpdmUgbGluZSBhbGxvd2luZyBhIGNoYW5nZSBvZiB2b2x0YWdlXCIsXG4gICAgICAgICAgICAgICAgYXJyb3dTdHlsZTogXCJ1bm1hcmtlZFwiLFxuICAgICAgICAgICAgICAgIHByZWZlclVubmFtZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogXCJNb3JUeXBlXCIsXG4gICAgICAgICAgICAgICAgbW9yVHlwZTogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJCcmFuY2hcIiB9LFxuICAgICAgICAgICAgICAgIGVkaXRvcjogTW9ycGhpc21DZWxsRWRpdG9yLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiTGlua1wiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkNvbnRyb2xsYWJsZSBmbG93IGJldHdlZW4gYnVzZXNcIixcbiAgICAgICAgICAgICAgICBhcnJvd1N0eWxlOiBcInVubWFya2VkXCIsXG4gICAgICAgICAgICAgICAgcHJlZmVyVW5uYW1lZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIG1vZGVsQW5hbHlzZXM6IFtcbiAgICAgICAgICAgIGFuYWx5c2VzLm1vZGVsR3JhcGgoe1xuICAgICAgICAgICAgICAgIGlkOiBcImRpYWdyYW1cIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlZpc3VhbGl6YXRpb25cIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJWaXN1YWxpemUgdGhlIHBvd2VyIHN5c3RlbSBhcyBhIG5ldHdvcmtcIixcbiAgICAgICAgICAgICAgICBoZWxwOiBcInZpc3VhbGl6YXRpb25cIixcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYW5hbHlzZXMua3VyYW1vdG8oe1xuICAgICAgICAgICAgICAgIHNpbXVsYXRlOiAobW9kZWwsIGRhdGEpID0+IHRoUG93ZXJTeXN0ZW0ua3VyYW1vdG8obW9kZWwsIGRhdGEpLFxuICAgICAgICAgICAgICAgIHBhcmFtZXRlckxhYmVsczoge1xuICAgICAgICAgICAgICAgICAgICBjb3VwbGluZzogXCJDYXBhY2l0eVwiLFxuICAgICAgICAgICAgICAgICAgICBmb3JjaW5nOiBcIklucHV0IHBvd2VyXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgIH0pO1xufVxuIl0sImZpbGUiOiJhc3NldHMvcG93ZXItc3lzdGVtLUtOMnpsdWlnLmpzIn0=