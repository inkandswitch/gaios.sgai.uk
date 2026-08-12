const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./object_cell_editor-DW5yEtQd.js","./analysis_tool-Bvgm6Cie.js","./document-BaPUF-Ky.js","./notebook-DqARNRKu.js","./model-B9uNSW6J.js","./index-CvS5Jq0z.js","./morphism_cell_editor-COVxLmSB.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './index-CvS5Jq0z.js';
import { lazy } from 'solid-js';
import { p as ThCategoryLinks } from './document-BaPUF-Ky.js';
import { T as Theory } from './analysis_tool-Bvgm6Cie.js';
import { j as stockFlowDiagram, a as massAction, b as massActionEquations } from './analyses-dUWNojZq.js';
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
function createPrimitiveStockFlowTheory(theoryMeta) {
  const thCategoryLinks = new ThCategoryLinks();
  return new Theory({
    ...theoryMeta,
    theory: thCategoryLinks.theory(),
    inclusions: ["primitive-signed-stock-flow"],
    onlyFreeModels: true,
    modelTypes: [
      {
        tag: "ObType",
        obType: { tag: "Basic", content: "Object" },
        editor: ObjectCellEditor,
        name: "Stock",
        description: "Thing with an amount",
        shortcut: ["S"],
        cssClasses: [styles.box],
        svgClasses: [svgStyles.box]
      },
      {
        tag: "MorType",
        morType: {
          tag: "Hom",
          content: { tag: "Basic", content: "Object" }
        },
        editor: MorphismCellEditor,
        name: "Flow",
        description: "Flow from one stock to another",
        shortcut: ["F"],
        arrowStyle: "double"
      },
      {
        tag: "MorType",
        morType: { tag: "Basic", content: "Link" },
        editor: MorphismCellEditor,
        name: "Link",
        description: "Influence of a stock on a flow",
        preferUnnamed: true,
        shortcut: ["L"]
      }
    ],
    modelAnalyses: [
      stockFlowDiagram({
        id: "diagram",
        name: "Visualization",
        description: "Visualize the stock and flow diagram",
        help: "visualization"
      }),
      massAction({
        ratesHaveGranularity: false,
        simulate(model, data) {
          return thCategoryLinks.massAction(model, data);
        },
        transitionType: {
          tag: "Hom",
          content: { tag: "Basic", content: "Object" }
        }
      }),
      massActionEquations({
        ratesHaveGranularity: false,
        getEquations(model, data) {
          return thCategoryLinks.massActionEquations(model, data);
        }
      })
    ]
  });
}

export { createPrimitiveStockFlowTheory as default };


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsS0FBTSxpQkFBbUIsUUFBSyxNQUFNLDBCQUFPLG1DQUFnQyxDQUFDO0FBQzVFLEtBQU0sbUJBQXFCLFFBQUssTUFBTSwwQkFBTyxxQ0FBa0MsQ0FBQztBQUtoRixRQUF3QixnQ0FBK0IsVUFBZ0M7QUFDbkYsRUFBTSxzQkFBa0IsTUFBSSxlQUFnQjtBQUU1QyxTQUFPLEdBQUksT0FBTztBQUFBLElBQ2QsR0FBRztBQUFBLElBQ0gsUUFBUSxnQkFBZ0IsTUFBTztBQUFBLElBQy9CLFlBQVksQ0FBQyw2QkFBNkI7QUFBQSxDQUMxQyxpQkFBZ0I7QUFBQSxJQUNoQixVQUFZO0FBQUEsQ0FDUjtBQUFBLENBQ0ksVUFBSztBQUFBLENBQ0wsYUFBUSxJQUFFLEdBQUssVUFBUyxTQUFTLFNBQVM7QUFBQSxDQUMxQyxhQUFRO0FBQUEsQ0FDUixXQUFNO0FBQUEsQ0FDTixrQkFBYTtBQUFBLFFBQ2IsVUFBVSxDQUFDLEdBQUc7QUFBQSxRQUNkLFdBQVksRUFBQyxPQUFPLEdBQUc7QUFBQSxRQUN2QixZQUFZLENBQUMsVUFBVSxHQUFHO0FBQUEsQ0FDOUI7QUFBQSxDQUNBO0FBQUEsQ0FDSSxVQUFLO0FBQUEsUUFDTCxPQUFTO0FBQUEsQ0FDTCxZQUFLO0FBQUEsQ0FDTCxnQkFBUyxHQUFFLElBQUssV0FBUyxTQUFTLENBQVM7QUFBQSxDQUMvQztBQUFBLENBQ0EsYUFBUTtBQUFBLENBQ1IsV0FBTTtBQUFBLENBQ04sa0JBQWE7QUFBQSxRQUNiLFVBQVUsQ0FBQyxHQUFHO0FBQUEsUUFDZCxVQUFZO0FBQUEsQ0FDaEI7QUFBQSxDQUNBO0FBQUEsQ0FDSSxVQUFLO0FBQUEsQ0FDTCxjQUFTLElBQUUsR0FBSyxVQUFTLFNBQVMsT0FBTztBQUFBLENBQ3pDLGFBQVE7QUFBQSxDQUNSLFdBQU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsQ0FDYixvQkFBZTtBQUFBLENBQ2YsZ0JBQVUsRUFBQyxDQUFHO0FBQUE7QUFDbEIsQ0FDSjtBQUFBLElBQ0EsYUFBZTtBQUFBLE1BQ1hBLGdCQUEwQjtBQUFBLENBQ3RCLFNBQUk7QUFBQSxDQUNKLFdBQU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsUUFDYixJQUFNO0FBQUEsT0FDVDtBQUFBLE1BQ0RDLFVBQW9CO0FBQUEsQ0FDaEIsMkJBQXNCO0FBQUEsUUFDdEIsU0FBUyxPQUFPLElBQU07QUFDbEIsQ0FBTyxnQ0FBZ0IsVUFBVyxRQUFPLElBQUk7QUFBQSxDQUNqRDtBQUFBLFFBQ0EsY0FBZ0I7QUFBQSxDQUNaLFlBQUs7QUFBQSxDQUNMLGdCQUFTLEdBQUUsSUFBSyxXQUFTLFNBQVMsQ0FBUztBQUFBO0FBQy9DLE9BQ0g7QUFBQSxNQUNEQyxtQkFBNkI7QUFBQSxDQUN6QiwyQkFBc0I7QUFBQSxRQUN0QixhQUFhLE9BQU8sSUFBTTtBQUN0QixDQUFPLGdDQUFnQixtQkFBb0IsUUFBTyxJQUFJO0FBQUE7QUFDMUQsQ0FDSDtBQUFBO0FBQ0wsR0FDSDtBQUNMIiwibmFtZXMiOlsiYW5hbHlzZXMuc3RvY2tGbG93RGlhZ3JhbSIsImFuYWx5c2VzLm1hc3NBY3Rpb24iLCJhbmFseXNlcy5tYXNzQWN0aW9uRXF1YXRpb25zIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zyb250ZW5kL3NyYy9zdGRsaWIvdGhlb3JpZXMvcHJpbWl0aXZlLXN0b2NrLWZsb3cudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGF6eSB9IGZyb20gXCJzb2xpZC1qc1wiO1xuXG5pbXBvcnQgeyBUaENhdGVnb3J5TGlua3MgfSBmcm9tIFwiY2F0bG9nLXdhc21cIjtcbmltcG9ydCB7IFRoZW9yeSwgdHlwZSBUaGVvcnlNZXRhIH0gZnJvbSBcIi4uLy4uL3RoZW9yeVwiO1xuaW1wb3J0ICogYXMgYW5hbHlzZXMgZnJvbSBcIi4uL2FuYWx5c2VzXCI7XG5cbmNvbnN0IE9iamVjdENlbGxFZGl0b3IgPSBsYXp5KCgpID0+IGltcG9ydChcIi4uLy4uL21vZGVsL29iamVjdF9jZWxsX2VkaXRvclwiKSk7XG5jb25zdCBNb3JwaGlzbUNlbGxFZGl0b3IgPSBsYXp5KCgpID0+IGltcG9ydChcIi4uLy4uL21vZGVsL21vcnBoaXNtX2NlbGxfZWRpdG9yXCIpKTtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBzdmdTdHlsZXMgZnJvbSBcIi4uL3N2Z19zdHlsZXMubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVTdG9ja0Zsb3dUaGVvcnkodGhlb3J5TWV0YTogVGhlb3J5TWV0YSk6IFRoZW9yeSB7XG4gICAgY29uc3QgdGhDYXRlZ29yeUxpbmtzID0gbmV3IFRoQ2F0ZWdvcnlMaW5rcygpO1xuXG4gICAgcmV0dXJuIG5ldyBUaGVvcnkoe1xuICAgICAgICAuLi50aGVvcnlNZXRhLFxuICAgICAgICB0aGVvcnk6IHRoQ2F0ZWdvcnlMaW5rcy50aGVvcnkoKSxcbiAgICAgICAgaW5jbHVzaW9uczogW1wicHJpbWl0aXZlLXNpZ25lZC1zdG9jay1mbG93XCJdLFxuICAgICAgICBvbmx5RnJlZU1vZGVsczogdHJ1ZSxcbiAgICAgICAgbW9kZWxUeXBlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogXCJPYlR5cGVcIixcbiAgICAgICAgICAgICAgICBvYlR5cGU6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwiT2JqZWN0XCIgfSxcbiAgICAgICAgICAgICAgICBlZGl0b3I6IE9iamVjdENlbGxFZGl0b3IsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJTdG9ja1wiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaW5nIHdpdGggYW4gYW1vdW50XCIsXG4gICAgICAgICAgICAgICAgc2hvcnRjdXQ6IFtcIlNcIl0sXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3NlczogW3N0eWxlcy5ib3hdLFxuICAgICAgICAgICAgICAgIHN2Z0NsYXNzZXM6IFtzdmdTdHlsZXMuYm94XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk1vclR5cGVcIixcbiAgICAgICAgICAgICAgICBtb3JUeXBlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogXCJIb21cIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJPYmplY3RcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZWRpdG9yOiBNb3JwaGlzbUNlbGxFZGl0b3IsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJGbG93XCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRmxvdyBmcm9tIG9uZSBzdG9jayB0byBhbm90aGVyXCIsXG4gICAgICAgICAgICAgICAgc2hvcnRjdXQ6IFtcIkZcIl0sXG4gICAgICAgICAgICAgICAgYXJyb3dTdHlsZTogXCJkb3VibGVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk1vclR5cGVcIixcbiAgICAgICAgICAgICAgICBtb3JUeXBlOiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcIkxpbmtcIiB9LFxuICAgICAgICAgICAgICAgIGVkaXRvcjogTW9ycGhpc21DZWxsRWRpdG9yLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiTGlua1wiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkluZmx1ZW5jZSBvZiBhIHN0b2NrIG9uIGEgZmxvd1wiLFxuICAgICAgICAgICAgICAgIHByZWZlclVubmFtZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgc2hvcnRjdXQ6IFtcIkxcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBtb2RlbEFuYWx5c2VzOiBbXG4gICAgICAgICAgICBhbmFseXNlcy5zdG9ja0Zsb3dEaWFncmFtKHtcbiAgICAgICAgICAgICAgICBpZDogXCJkaWFncmFtXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJWaXN1YWxpemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVmlzdWFsaXplIHRoZSBzdG9jayBhbmQgZmxvdyBkaWFncmFtXCIsXG4gICAgICAgICAgICAgICAgaGVscDogXCJ2aXN1YWxpemF0aW9uXCIsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuYWx5c2VzLm1hc3NBY3Rpb24oe1xuICAgICAgICAgICAgICAgIHJhdGVzSGF2ZUdyYW51bGFyaXR5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaW11bGF0ZShtb2RlbCwgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhDYXRlZ29yeUxpbmtzLm1hc3NBY3Rpb24obW9kZWwsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvblR5cGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiBcIkhvbVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcIk9iamVjdFwiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYW5hbHlzZXMubWFzc0FjdGlvbkVxdWF0aW9ucyh7XG4gICAgICAgICAgICAgICAgcmF0ZXNIYXZlR3JhbnVsYXJpdHk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGdldEVxdWF0aW9ucyhtb2RlbCwgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhDYXRlZ29yeUxpbmtzLm1hc3NBY3Rpb25FcXVhdGlvbnMobW9kZWwsIGRhdGEpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICB9KTtcbn1cbiJdLCJmaWxlIjoiYXNzZXRzL3ByaW1pdGl2ZS1zdG9jay1mbG93LS1NMnJhSEhiLmpzIn0=