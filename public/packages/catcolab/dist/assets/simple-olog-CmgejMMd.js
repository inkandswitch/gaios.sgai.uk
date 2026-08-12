const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./object_cell_editor-DW5yEtQd.js","./analysis_tool-Bvgm6Cie.js","./document-BaPUF-Ky.js","./notebook-DqARNRKu.js","./model-B9uNSW6J.js","./index-CvS5Jq0z.js","./morphism_cell_editor-COVxLmSB.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './index-CvS5Jq0z.js';
import { lazy } from 'solid-js';
import { b as ThCategory } from './document-BaPUF-Ky.js';
import { T as Theory } from './analysis_tool-Bvgm6Cie.js';
import { d as diagramGraph, m as modelGraph } from './analyses-dUWNojZq.js';
import { s as styles } from './styles.module-BGDl1VX_.js';
import { s as svgStyles } from './svg_styles.module-CorR5PWz.js';
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
function createOlogTheory(theoryMeta) {
  const thCategory = new ThCategory();
  return new Theory({
    ...theoryMeta,
    theory: thCategory.theory(),
    pushforwards: [
      {
        target: "simple-schema",
        migrate: ThCategory.toSchema
      }
    ],
    modelTypes: [
      {
        tag: "ObType",
        obType: { tag: "Basic", content: "Object" },
        editor: ObjectCellEditor,
        name: "Type",
        description: "Type or class of things",
        shortcut: ["O"],
        cssClasses: [styles.cornerBox],
        svgClasses: [svgStyles.box]
      },
      {
        tag: "MorType",
        morType: {
          tag: "Hom",
          content: { tag: "Basic", content: "Object" }
        },
        editor: MorphismCellEditor,
        name: "Aspect",
        description: "Aspect or property of a type",
        shortcut: ["M"]
      }
    ],
    instanceTypes: [
      {
        tag: "ObType",
        obType: { tag: "Basic", content: "Object" },
        name: "Individual",
        description: "Individual thing of a certain type",
        shortcut: ["I"]
      },
      {
        tag: "MorType",
        morType: {
          tag: "Hom",
          content: { tag: "Basic", content: "Object" }
        },
        name: "Aspect",
        description: "Aspect or property of an individual",
        shortcut: ["M"]
      }
    ],
    modelAnalyses: [
      modelGraph({
        id: "diagram",
        name: "Visualization",
        description: "Visualize the olog as a graph",
        help: "visualization"
      })
    ],
    diagramAnalyses: [
      diagramGraph({
        id: "graph",
        name: "Visualization",
        description: "Visualize the instance as a graph",
        help: "visualization"
      })
    ]
  });
}

export { createOlogTheory as default };


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsS0FBTSxpQkFBbUIsUUFBSyxNQUFNLDBCQUFPLG1DQUFnQyxDQUFDO0FBQzVFLEtBQU0sbUJBQXFCLFFBQUssTUFBTSwwQkFBTyxxQ0FBa0MsQ0FBQztBQUtoRixRQUF3QixrQkFBaUIsVUFBZ0M7QUFDckUsRUFBTSxpQkFBYSxNQUFJLFVBQVc7QUFFbEMsU0FBTyxHQUFJLE9BQU87QUFBQSxJQUNkLEdBQUc7QUFBQSxJQUNILFFBQVEsV0FBVyxNQUFPO0FBQUEsSUFDMUIsWUFBYztBQUFBLENBQ1Y7QUFBQSxDQUNJLGFBQVE7QUFBQSxDQUNSLGVBQVMsV0FBVztBQUFBO0FBQ3hCLENBQ0o7QUFBQSxJQUNBLFVBQVk7QUFBQSxDQUNSO0FBQUEsQ0FDSSxVQUFLO0FBQUEsQ0FDTCxhQUFRLElBQUUsR0FBSyxVQUFTLFNBQVMsU0FBUztBQUFBLENBQzFDLGFBQVE7QUFBQSxDQUNSLFdBQU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsUUFDYixVQUFVLENBQUMsR0FBRztBQUFBLFFBQ2QsV0FBWSxFQUFDLE9BQU8sU0FBUztBQUFBLFFBQzdCLFlBQVksQ0FBQyxVQUFVLEdBQUc7QUFBQSxDQUM5QjtBQUFBLENBQ0E7QUFBQSxDQUNJLFVBQUs7QUFBQSxRQUNMLE9BQVM7QUFBQSxDQUNMLFlBQUs7QUFBQSxDQUNMLGdCQUFTLEdBQUUsSUFBSyxXQUFTLFNBQVMsQ0FBUztBQUFBLENBQy9DO0FBQUEsQ0FDQSxhQUFRO0FBQUEsQ0FDUixXQUFNO0FBQUEsQ0FDTixrQkFBYTtBQUFBLENBQ2IsZ0JBQVUsRUFBQyxDQUFHO0FBQUE7QUFDbEIsQ0FDSjtBQUFBLElBQ0EsYUFBZTtBQUFBLENBQ1g7QUFBQSxDQUNJLFVBQUs7QUFBQSxDQUNMLGFBQVEsSUFBRSxHQUFLLFVBQVMsU0FBUyxTQUFTO0FBQUEsQ0FDMUMsV0FBTTtBQUFBLENBQ04sa0JBQWE7QUFBQSxDQUNiLGdCQUFVLEVBQUMsQ0FBRztBQUFBLENBQ2xCO0FBQUEsQ0FDQTtBQUFBLENBQ0ksVUFBSztBQUFBLFFBQ0wsT0FBUztBQUFBLENBQ0wsWUFBSztBQUFBLENBQ0wsZ0JBQVMsR0FBRSxJQUFLLFdBQVMsU0FBUyxDQUFTO0FBQUEsQ0FDL0M7QUFBQSxDQUNBLFdBQU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsQ0FDYixnQkFBVSxFQUFDLENBQUc7QUFBQTtBQUNsQixDQUNKO0FBQUEsSUFDQSxhQUFlO0FBQUEsTUFDWEEsVUFBb0I7QUFBQSxDQUNoQixTQUFJO0FBQUEsQ0FDSixXQUFNO0FBQUEsQ0FDTixrQkFBYTtBQUFBLFFBQ2IsSUFBTTtBQUFBLENBQ1Q7QUFBQSxDQUNMO0FBQUEsSUFDQSxlQUFpQjtBQUFBLE1BQ2JDLFlBQXNCO0FBQUEsQ0FDbEIsU0FBSTtBQUFBLENBQ0osV0FBTTtBQUFBLENBQ04sa0JBQWE7QUFBQSxRQUNiLElBQU07QUFBQSxDQUNUO0FBQUE7QUFDTCxHQUNIO0FBQ0wiLCJuYW1lcyI6WyJhbmFseXNlcy5tb2RlbEdyYXBoIiwiYW5hbHlzZXMuZGlhZ3JhbUdyYXBoIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zyb250ZW5kL3NyYy9zdGRsaWIvdGhlb3JpZXMvc2ltcGxlLW9sb2cudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGF6eSB9IGZyb20gXCJzb2xpZC1qc1wiO1xuXG5pbXBvcnQgeyBUaENhdGVnb3J5IH0gZnJvbSBcImNhdGxvZy13YXNtXCI7XG5pbXBvcnQgeyBUaGVvcnksIHR5cGUgVGhlb3J5TWV0YSB9IGZyb20gXCIuLi8uLi90aGVvcnlcIjtcbmltcG9ydCAqIGFzIGFuYWx5c2VzIGZyb20gXCIuLi9hbmFseXNlc1wiO1xuXG5jb25zdCBPYmplY3RDZWxsRWRpdG9yID0gbGF6eSgoKSA9PiBpbXBvcnQoXCIuLi8uLi9tb2RlbC9vYmplY3RfY2VsbF9lZGl0b3JcIikpO1xuY29uc3QgTW9ycGhpc21DZWxsRWRpdG9yID0gbGF6eSgoKSA9PiBpbXBvcnQoXCIuLi8uLi9tb2RlbC9tb3JwaGlzbV9jZWxsX2VkaXRvclwiKSk7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgc3ZnU3R5bGVzIGZyb20gXCIuLi9zdmdfc3R5bGVzLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlT2xvZ1RoZW9yeSh0aGVvcnlNZXRhOiBUaGVvcnlNZXRhKTogVGhlb3J5IHtcbiAgICBjb25zdCB0aENhdGVnb3J5ID0gbmV3IFRoQ2F0ZWdvcnkoKTtcblxuICAgIHJldHVybiBuZXcgVGhlb3J5KHtcbiAgICAgICAgLi4udGhlb3J5TWV0YSxcbiAgICAgICAgdGhlb3J5OiB0aENhdGVnb3J5LnRoZW9yeSgpLFxuICAgICAgICBwdXNoZm9yd2FyZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IFwic2ltcGxlLXNjaGVtYVwiLFxuICAgICAgICAgICAgICAgIG1pZ3JhdGU6IFRoQ2F0ZWdvcnkudG9TY2hlbWEsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBtb2RlbFR5cGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk9iVHlwZVwiLFxuICAgICAgICAgICAgICAgIG9iVHlwZTogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJPYmplY3RcIiB9LFxuICAgICAgICAgICAgICAgIGVkaXRvcjogT2JqZWN0Q2VsbEVkaXRvcixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlR5cGVcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUeXBlIG9yIGNsYXNzIG9mIHRoaW5nc1wiLFxuICAgICAgICAgICAgICAgIHNob3J0Y3V0OiBbXCJPXCJdLFxuICAgICAgICAgICAgICAgIGNzc0NsYXNzZXM6IFtzdHlsZXMuY29ybmVyQm94XSxcbiAgICAgICAgICAgICAgICBzdmdDbGFzc2VzOiBbc3ZnU3R5bGVzLmJveF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogXCJNb3JUeXBlXCIsXG4gICAgICAgICAgICAgICAgbW9yVHlwZToge1xuICAgICAgICAgICAgICAgICAgICB0YWc6IFwiSG9tXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwiT2JqZWN0XCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVkaXRvcjogTW9ycGhpc21DZWxsRWRpdG9yLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQXNwZWN0XCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQXNwZWN0IG9yIHByb3BlcnR5IG9mIGEgdHlwZVwiLFxuICAgICAgICAgICAgICAgIHNob3J0Y3V0OiBbXCJNXCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgaW5zdGFuY2VUeXBlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogXCJPYlR5cGVcIixcbiAgICAgICAgICAgICAgICBvYlR5cGU6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwiT2JqZWN0XCIgfSxcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkluZGl2aWR1YWxcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJJbmRpdmlkdWFsIHRoaW5nIG9mIGEgY2VydGFpbiB0eXBlXCIsXG4gICAgICAgICAgICAgICAgc2hvcnRjdXQ6IFtcIklcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogXCJNb3JUeXBlXCIsXG4gICAgICAgICAgICAgICAgbW9yVHlwZToge1xuICAgICAgICAgICAgICAgICAgICB0YWc6IFwiSG9tXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwiT2JqZWN0XCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQXNwZWN0XCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQXNwZWN0IG9yIHByb3BlcnR5IG9mIGFuIGluZGl2aWR1YWxcIixcbiAgICAgICAgICAgICAgICBzaG9ydGN1dDogW1wiTVwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIG1vZGVsQW5hbHlzZXM6IFtcbiAgICAgICAgICAgIGFuYWx5c2VzLm1vZGVsR3JhcGgoe1xuICAgICAgICAgICAgICAgIGlkOiBcImRpYWdyYW1cIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlZpc3VhbGl6YXRpb25cIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJWaXN1YWxpemUgdGhlIG9sb2cgYXMgYSBncmFwaFwiLFxuICAgICAgICAgICAgICAgIGhlbHA6IFwidmlzdWFsaXphdGlvblwiLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICAgIGRpYWdyYW1BbmFseXNlczogW1xuICAgICAgICAgICAgYW5hbHlzZXMuZGlhZ3JhbUdyYXBoKHtcbiAgICAgICAgICAgICAgICBpZDogXCJncmFwaFwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiVmlzdWFsaXphdGlvblwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlZpc3VhbGl6ZSB0aGUgaW5zdGFuY2UgYXMgYSBncmFwaFwiLFxuICAgICAgICAgICAgICAgIGhlbHA6IFwidmlzdWFsaXphdGlvblwiLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgfSk7XG59XG4iXSwiZmlsZSI6ImFzc2V0cy9zaW1wbGUtb2xvZy1DbWdlak1NZC5qcyJ9