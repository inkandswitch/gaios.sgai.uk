const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./object_cell_editor-Bx-WVfFa.js","./analysis_tool-CDs3CHfO.js","./model-hspTLkzk.js","./index-BLpRC7wy.js","./morphism_cell_editor-Cqxr4n8q.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './index-BLpRC7wy.js';
import { lazy } from 'solid-js';
import { b as ThCategory, a as Theory } from './analysis_tool-CDs3CHfO.js';
import { d as diagramGraph, m as modelGraph } from './analyses-XxH7VM1Y.js';
import { s as styles } from './styles.module-BGDl1VX_.js';
import { s as svgStyles } from './svg_styles.module-CorR5PWz.js';
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


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxLQUFNLGlCQUFtQixRQUFLLE1BQU0sMEJBQU8sbUNBQWdDLENBQUM7QUFDNUUsS0FBTSxtQkFBcUIsUUFBSyxNQUFNLDBCQUFPLHFDQUFrQyxDQUFDO0FBS2hGLFFBQXdCLGtCQUFpQixVQUFnQztBQUNyRSxFQUFNLGlCQUFhLE1BQUksVUFBVztBQUVsQyxTQUFPLEdBQUksT0FBTztBQUFBLElBQ2QsR0FBRztBQUFBLElBQ0gsUUFBUSxXQUFXLE1BQU87QUFBQSxJQUMxQixZQUFjO0FBQUEsQ0FDVjtBQUFBLENBQ0ksYUFBUTtBQUFBLENBQ1IsZUFBUyxXQUFXO0FBQUE7QUFDeEIsQ0FDSjtBQUFBLElBQ0EsVUFBWTtBQUFBLENBQ1I7QUFBQSxDQUNJLFVBQUs7QUFBQSxDQUNMLGFBQVEsSUFBRSxHQUFLLFVBQVMsU0FBUyxTQUFTO0FBQUEsQ0FDMUMsYUFBUTtBQUFBLENBQ1IsV0FBTTtBQUFBLENBQ04sa0JBQWE7QUFBQSxRQUNiLFVBQVUsQ0FBQyxHQUFHO0FBQUEsUUFDZCxXQUFZLEVBQUMsT0FBTyxTQUFTO0FBQUEsUUFDN0IsWUFBWSxDQUFDLFVBQVUsR0FBRztBQUFBLENBQzlCO0FBQUEsQ0FDQTtBQUFBLENBQ0ksVUFBSztBQUFBLFFBQ0wsT0FBUztBQUFBLENBQ0wsWUFBSztBQUFBLENBQ0wsZ0JBQVMsR0FBRSxJQUFLLFdBQVMsU0FBUyxDQUFTO0FBQUEsQ0FDL0M7QUFBQSxDQUNBLGFBQVE7QUFBQSxDQUNSLFdBQU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsQ0FDYixnQkFBVSxFQUFDLENBQUc7QUFBQTtBQUNsQixDQUNKO0FBQUEsSUFDQSxhQUFlO0FBQUEsQ0FDWDtBQUFBLENBQ0ksVUFBSztBQUFBLENBQ0wsYUFBUSxJQUFFLEdBQUssVUFBUyxTQUFTLFNBQVM7QUFBQSxDQUMxQyxXQUFNO0FBQUEsQ0FDTixrQkFBYTtBQUFBLENBQ2IsZ0JBQVUsRUFBQyxDQUFHO0FBQUEsQ0FDbEI7QUFBQSxDQUNBO0FBQUEsQ0FDSSxVQUFLO0FBQUEsUUFDTCxPQUFTO0FBQUEsQ0FDTCxZQUFLO0FBQUEsQ0FDTCxnQkFBUyxHQUFFLElBQUssV0FBUyxTQUFTLENBQVM7QUFBQSxDQUMvQztBQUFBLENBQ0EsV0FBTTtBQUFBLENBQ04sa0JBQWE7QUFBQSxDQUNiLGdCQUFVLEVBQUMsQ0FBRztBQUFBO0FBQ2xCLENBQ0o7QUFBQSxJQUNBLGFBQWU7QUFBQSxNQUNYQSxVQUFvQjtBQUFBLENBQ2hCLFNBQUk7QUFBQSxDQUNKLFdBQU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsUUFDYixJQUFNO0FBQUEsQ0FDVDtBQUFBLENBQ0w7QUFBQSxJQUNBLGVBQWlCO0FBQUEsTUFDYkMsWUFBc0I7QUFBQSxDQUNsQixTQUFJO0FBQUEsQ0FDSixXQUFNO0FBQUEsQ0FDTixrQkFBYTtBQUFBLFFBQ2IsSUFBTTtBQUFBLENBQ1Q7QUFBQTtBQUNMLEdBQ0g7QUFDTCIsIm5hbWVzIjpbImFuYWx5c2VzLm1vZGVsR3JhcGgiLCJhbmFseXNlcy5kaWFncmFtR3JhcGgiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vZnJvbnRlbmQvc3JjL3N0ZGxpYi90aGVvcmllcy9zaW1wbGUtb2xvZy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsYXp5IH0gZnJvbSBcInNvbGlkLWpzXCI7XG5cbmltcG9ydCB7IFRoQ2F0ZWdvcnkgfSBmcm9tIFwiY2F0bG9nLXdhc21cIjtcbmltcG9ydCB7IFRoZW9yeSwgdHlwZSBUaGVvcnlNZXRhIH0gZnJvbSBcIi4uLy4uL3RoZW9yeVwiO1xuaW1wb3J0ICogYXMgYW5hbHlzZXMgZnJvbSBcIi4uL2FuYWx5c2VzXCI7XG5cbmNvbnN0IE9iamVjdENlbGxFZGl0b3IgPSBsYXp5KCgpID0+IGltcG9ydChcIi4uLy4uL21vZGVsL29iamVjdF9jZWxsX2VkaXRvclwiKSk7XG5jb25zdCBNb3JwaGlzbUNlbGxFZGl0b3IgPSBsYXp5KCgpID0+IGltcG9ydChcIi4uLy4uL21vZGVsL21vcnBoaXNtX2NlbGxfZWRpdG9yXCIpKTtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBzdmdTdHlsZXMgZnJvbSBcIi4uL3N2Z19zdHlsZXMubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVPbG9nVGhlb3J5KHRoZW9yeU1ldGE6IFRoZW9yeU1ldGEpOiBUaGVvcnkge1xuICAgIGNvbnN0IHRoQ2F0ZWdvcnkgPSBuZXcgVGhDYXRlZ29yeSgpO1xuXG4gICAgcmV0dXJuIG5ldyBUaGVvcnkoe1xuICAgICAgICAuLi50aGVvcnlNZXRhLFxuICAgICAgICB0aGVvcnk6IHRoQ2F0ZWdvcnkudGhlb3J5KCksXG4gICAgICAgIHB1c2hmb3J3YXJkczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhcmdldDogXCJzaW1wbGUtc2NoZW1hXCIsXG4gICAgICAgICAgICAgICAgbWlncmF0ZTogVGhDYXRlZ29yeS50b1NjaGVtYSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIG1vZGVsVHlwZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiT2JUeXBlXCIsXG4gICAgICAgICAgICAgICAgb2JUeXBlOiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcIk9iamVjdFwiIH0sXG4gICAgICAgICAgICAgICAgZWRpdG9yOiBPYmplY3RDZWxsRWRpdG9yLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiVHlwZVwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlR5cGUgb3IgY2xhc3Mgb2YgdGhpbmdzXCIsXG4gICAgICAgICAgICAgICAgc2hvcnRjdXQ6IFtcIk9cIl0sXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3NlczogW3N0eWxlcy5jb3JuZXJCb3hdLFxuICAgICAgICAgICAgICAgIHN2Z0NsYXNzZXM6IFtzdmdTdHlsZXMuYm94XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk1vclR5cGVcIixcbiAgICAgICAgICAgICAgICBtb3JUeXBlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogXCJIb21cIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJPYmplY3RcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZWRpdG9yOiBNb3JwaGlzbUNlbGxFZGl0b3IsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJBc3BlY3RcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJBc3BlY3Qgb3IgcHJvcGVydHkgb2YgYSB0eXBlXCIsXG4gICAgICAgICAgICAgICAgc2hvcnRjdXQ6IFtcIk1cIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBpbnN0YW5jZVR5cGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk9iVHlwZVwiLFxuICAgICAgICAgICAgICAgIG9iVHlwZTogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJPYmplY3RcIiB9LFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiSW5kaXZpZHVhbFwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkluZGl2aWR1YWwgdGhpbmcgb2YgYSBjZXJ0YWluIHR5cGVcIixcbiAgICAgICAgICAgICAgICBzaG9ydGN1dDogW1wiSVwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk1vclR5cGVcIixcbiAgICAgICAgICAgICAgICBtb3JUeXBlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogXCJIb21cIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJPYmplY3RcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbmFtZTogXCJBc3BlY3RcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJBc3BlY3Qgb3IgcHJvcGVydHkgb2YgYW4gaW5kaXZpZHVhbFwiLFxuICAgICAgICAgICAgICAgIHNob3J0Y3V0OiBbXCJNXCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgbW9kZWxBbmFseXNlczogW1xuICAgICAgICAgICAgYW5hbHlzZXMubW9kZWxHcmFwaCh7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZGlhZ3JhbVwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiVmlzdWFsaXphdGlvblwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlZpc3VhbGl6ZSB0aGUgb2xvZyBhcyBhIGdyYXBoXCIsXG4gICAgICAgICAgICAgICAgaGVscDogXCJ2aXN1YWxpemF0aW9uXCIsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgICAgZGlhZ3JhbUFuYWx5c2VzOiBbXG4gICAgICAgICAgICBhbmFseXNlcy5kaWFncmFtR3JhcGgoe1xuICAgICAgICAgICAgICAgIGlkOiBcImdyYXBoXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJWaXN1YWxpemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVmlzdWFsaXplIHRoZSBpbnN0YW5jZSBhcyBhIGdyYXBoXCIsXG4gICAgICAgICAgICAgICAgaGVscDogXCJ2aXN1YWxpemF0aW9uXCIsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICB9KTtcbn1cbiJdLCJmaWxlIjoiYXNzZXRzL3NpbXBsZS1vbG9nLTlYVVVZSkVyLmpzIn0=