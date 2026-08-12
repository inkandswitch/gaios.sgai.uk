const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./object_cell_editor-DW5yEtQd.js","./analysis_tool-Bvgm6Cie.js","./document-BaPUF-Ky.js","./notebook-DqARNRKu.js","./model-B9uNSW6J.js","./index-CvS5Jq0z.js","./morphism_cell_editor-COVxLmSB.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './index-CvS5Jq0z.js';
import { lazy } from 'solid-js';
import { q as ThCategorySignedLinks } from './document-BaPUF-Ky.js';
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
function createPrimitiveSignedStockFlowTheory(theoryMeta) {
  const thCategorySignedLinks = new ThCategorySignedLinks();
  return new Theory({
    ...theoryMeta,
    theory: thCategorySignedLinks.theory(),
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
        name: "Positive link",
        description: "Positive influence of a stock on a flow",
        arrowStyle: "plus",
        preferUnnamed: true,
        shortcut: ["P"]
      },
      {
        tag: "MorType",
        morType: { tag: "Basic", content: "NegativeLink" },
        editor: MorphismCellEditor,
        name: "Negative link",
        description: "Negative influence of a stock on a flow",
        arrowStyle: "minus",
        preferUnnamed: true,
        shortcut: ["N"]
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
          return thCategorySignedLinks.massAction(model, data);
        },
        transitionType: {
          tag: "Hom",
          content: { tag: "Basic", content: "Object" }
        }
      }),
      massActionEquations({
        ratesHaveGranularity: false,
        getEquations(model, data) {
          return thCategorySignedLinks.massActionEquations(model, data);
        }
      })
    ]
  });
}

export { createPrimitiveSignedStockFlowTheory as default };


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsS0FBTSxpQkFBbUIsUUFBSyxNQUFNLDBCQUFPLG1DQUFnQyxDQUFDO0FBQzVFLEtBQU0sbUJBQXFCLFFBQUssTUFBTSwwQkFBTyxxQ0FBa0MsQ0FBQztBQUtoRixRQUF3QixzQ0FBcUMsVUFBZ0M7QUFDekYsRUFBTSw0QkFBd0IsTUFBSSxxQkFBc0I7QUFFeEQsU0FBTyxHQUFJLE9BQU87QUFBQSxJQUNkLEdBQUc7QUFBQSxJQUNILFFBQVEsc0JBQXNCLE1BQU87QUFBQSxDQUNyQyxpQkFBZ0I7QUFBQSxJQUNoQixVQUFZO0FBQUEsQ0FDUjtBQUFBLENBQ0ksVUFBSztBQUFBLENBQ0wsYUFBUSxJQUFFLEdBQUssVUFBUyxTQUFTLFNBQVM7QUFBQSxDQUMxQyxhQUFRO0FBQUEsQ0FDUixXQUFNO0FBQUEsQ0FDTixrQkFBYTtBQUFBLFFBQ2IsVUFBVSxDQUFDLEdBQUc7QUFBQSxRQUNkLFdBQVksRUFBQyxPQUFPLEdBQUc7QUFBQSxRQUN2QixZQUFZLENBQUMsVUFBVSxHQUFHO0FBQUEsQ0FDOUI7QUFBQSxDQUNBO0FBQUEsQ0FDSSxVQUFLO0FBQUEsUUFDTCxPQUFTO0FBQUEsQ0FDTCxZQUFLO0FBQUEsQ0FDTCxnQkFBUyxHQUFFLElBQUssV0FBUyxTQUFTLENBQVM7QUFBQSxDQUMvQztBQUFBLENBQ0EsYUFBUTtBQUFBLENBQ1IsV0FBTTtBQUFBLENBQ04sa0JBQWE7QUFBQSxRQUNiLFVBQVUsQ0FBQyxHQUFHO0FBQUEsUUFDZCxVQUFZO0FBQUEsQ0FDaEI7QUFBQSxDQUNBO0FBQUEsQ0FDSSxVQUFLO0FBQUEsQ0FDTCxjQUFTLElBQUUsR0FBSyxVQUFTLFNBQVMsT0FBTztBQUFBLENBQ3pDLGFBQVE7QUFBQSxDQUNSLFdBQU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsQ0FDYixpQkFBWTtBQUFBLENBQ1osb0JBQWU7QUFBQSxDQUNmLGdCQUFVLEVBQUMsQ0FBRztBQUFBLENBQ2xCO0FBQUEsQ0FDQTtBQUFBLENBQ0ksVUFBSztBQUFBLENBQ0wsY0FBUyxJQUFFLEdBQUssVUFBUyxTQUFTLGVBQWU7QUFBQSxDQUNqRCxhQUFRO0FBQUEsQ0FDUixXQUFNO0FBQUEsQ0FDTixrQkFBYTtBQUFBLENBQ2IsaUJBQVk7QUFBQSxDQUNaLG9CQUFlO0FBQUEsQ0FDZixnQkFBVSxFQUFDLENBQUc7QUFBQTtBQUNsQixDQUNKO0FBQUEsSUFDQSxhQUFlO0FBQUEsTUFDWEEsZ0JBQTBCO0FBQUEsQ0FDdEIsU0FBSTtBQUFBLENBQ0osV0FBTTtBQUFBLENBQ04sa0JBQWE7QUFBQSxRQUNiLElBQU07QUFBQSxPQUNUO0FBQUEsTUFDREMsVUFBb0I7QUFBQSxDQUNoQiwyQkFBc0I7QUFBQSxRQUN0QixTQUFTLE9BQU8sSUFBTTtBQUNsQixDQUFPLHNDQUFzQixVQUFXLFFBQU8sSUFBSTtBQUFBLENBQ3ZEO0FBQUEsUUFDQSxjQUFnQjtBQUFBLENBQ1osWUFBSztBQUFBLENBQ0wsZ0JBQVMsR0FBRSxJQUFLLFdBQVMsU0FBUyxDQUFTO0FBQUE7QUFDL0MsT0FDSDtBQUFBLE1BQ0RDLG1CQUE2QjtBQUFBLENBQ3pCLDJCQUFzQjtBQUFBLFFBQ3RCLGFBQWEsT0FBTyxJQUFNO0FBQ3RCLENBQU8sc0NBQXNCLG1CQUFvQixRQUFPLElBQUk7QUFBQTtBQUNoRSxDQUNIO0FBQUE7QUFDTCxHQUNIO0FBQ0wiLCJuYW1lcyI6WyJhbmFseXNlcy5zdG9ja0Zsb3dEaWFncmFtIiwiYW5hbHlzZXMubWFzc0FjdGlvbiIsImFuYWx5c2VzLm1hc3NBY3Rpb25FcXVhdGlvbnMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vZnJvbnRlbmQvc3JjL3N0ZGxpYi90aGVvcmllcy9wcmltaXRpdmUtc2lnbmVkLXN0b2NrLWZsb3cudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGF6eSB9IGZyb20gXCJzb2xpZC1qc1wiO1xuXG5pbXBvcnQgeyBUaENhdGVnb3J5U2lnbmVkTGlua3MgfSBmcm9tIFwiY2F0bG9nLXdhc21cIjtcbmltcG9ydCB7IFRoZW9yeSwgdHlwZSBUaGVvcnlNZXRhIH0gZnJvbSBcIi4uLy4uL3RoZW9yeVwiO1xuaW1wb3J0ICogYXMgYW5hbHlzZXMgZnJvbSBcIi4uL2FuYWx5c2VzXCI7XG5cbmNvbnN0IE9iamVjdENlbGxFZGl0b3IgPSBsYXp5KCgpID0+IGltcG9ydChcIi4uLy4uL21vZGVsL29iamVjdF9jZWxsX2VkaXRvclwiKSk7XG5jb25zdCBNb3JwaGlzbUNlbGxFZGl0b3IgPSBsYXp5KCgpID0+IGltcG9ydChcIi4uLy4uL21vZGVsL21vcnBoaXNtX2NlbGxfZWRpdG9yXCIpKTtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBzdmdTdHlsZXMgZnJvbSBcIi4uL3N2Z19zdHlsZXMubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVQcmltaXRpdmVTaWduZWRTdG9ja0Zsb3dUaGVvcnkodGhlb3J5TWV0YTogVGhlb3J5TWV0YSk6IFRoZW9yeSB7XG4gICAgY29uc3QgdGhDYXRlZ29yeVNpZ25lZExpbmtzID0gbmV3IFRoQ2F0ZWdvcnlTaWduZWRMaW5rcygpO1xuXG4gICAgcmV0dXJuIG5ldyBUaGVvcnkoe1xuICAgICAgICAuLi50aGVvcnlNZXRhLFxuICAgICAgICB0aGVvcnk6IHRoQ2F0ZWdvcnlTaWduZWRMaW5rcy50aGVvcnkoKSxcbiAgICAgICAgb25seUZyZWVNb2RlbHM6IHRydWUsXG4gICAgICAgIG1vZGVsVHlwZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiT2JUeXBlXCIsXG4gICAgICAgICAgICAgICAgb2JUeXBlOiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcIk9iamVjdFwiIH0sXG4gICAgICAgICAgICAgICAgZWRpdG9yOiBPYmplY3RDZWxsRWRpdG9yLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiU3RvY2tcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGluZyB3aXRoIGFuIGFtb3VudFwiLFxuICAgICAgICAgICAgICAgIHNob3J0Y3V0OiBbXCJTXCJdLFxuICAgICAgICAgICAgICAgIGNzc0NsYXNzZXM6IFtzdHlsZXMuYm94XSxcbiAgICAgICAgICAgICAgICBzdmdDbGFzc2VzOiBbc3ZnU3R5bGVzLmJveF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogXCJNb3JUeXBlXCIsXG4gICAgICAgICAgICAgICAgbW9yVHlwZToge1xuICAgICAgICAgICAgICAgICAgICB0YWc6IFwiSG9tXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwiT2JqZWN0XCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVkaXRvcjogTW9ycGhpc21DZWxsRWRpdG9yLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiRmxvd1wiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkZsb3cgZnJvbSBvbmUgc3RvY2sgdG8gYW5vdGhlclwiLFxuICAgICAgICAgICAgICAgIHNob3J0Y3V0OiBbXCJGXCJdLFxuICAgICAgICAgICAgICAgIGFycm93U3R5bGU6IFwiZG91YmxlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogXCJNb3JUeXBlXCIsXG4gICAgICAgICAgICAgICAgbW9yVHlwZTogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJMaW5rXCIgfSxcbiAgICAgICAgICAgICAgICBlZGl0b3I6IE1vcnBoaXNtQ2VsbEVkaXRvcixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlBvc2l0aXZlIGxpbmtcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJQb3NpdGl2ZSBpbmZsdWVuY2Ugb2YgYSBzdG9jayBvbiBhIGZsb3dcIixcbiAgICAgICAgICAgICAgICBhcnJvd1N0eWxlOiBcInBsdXNcIixcbiAgICAgICAgICAgICAgICBwcmVmZXJVbm5hbWVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNob3J0Y3V0OiBbXCJQXCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiTW9yVHlwZVwiLFxuICAgICAgICAgICAgICAgIG1vclR5cGU6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwiTmVnYXRpdmVMaW5rXCIgfSxcbiAgICAgICAgICAgICAgICBlZGl0b3I6IE1vcnBoaXNtQ2VsbEVkaXRvcixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIk5lZ2F0aXZlIGxpbmtcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJOZWdhdGl2ZSBpbmZsdWVuY2Ugb2YgYSBzdG9jayBvbiBhIGZsb3dcIixcbiAgICAgICAgICAgICAgICBhcnJvd1N0eWxlOiBcIm1pbnVzXCIsXG4gICAgICAgICAgICAgICAgcHJlZmVyVW5uYW1lZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzaG9ydGN1dDogW1wiTlwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIG1vZGVsQW5hbHlzZXM6IFtcbiAgICAgICAgICAgIGFuYWx5c2VzLnN0b2NrRmxvd0RpYWdyYW0oe1xuICAgICAgICAgICAgICAgIGlkOiBcImRpYWdyYW1cIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlZpc3VhbGl6YXRpb25cIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJWaXN1YWxpemUgdGhlIHN0b2NrIGFuZCBmbG93IGRpYWdyYW1cIixcbiAgICAgICAgICAgICAgICBoZWxwOiBcInZpc3VhbGl6YXRpb25cIixcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYW5hbHlzZXMubWFzc0FjdGlvbih7XG4gICAgICAgICAgICAgICAgcmF0ZXNIYXZlR3JhbnVsYXJpdHk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNpbXVsYXRlKG1vZGVsLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aENhdGVnb3J5U2lnbmVkTGlua3MubWFzc0FjdGlvbihtb2RlbCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uVHlwZToge1xuICAgICAgICAgICAgICAgICAgICB0YWc6IFwiSG9tXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwiT2JqZWN0XCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhbmFseXNlcy5tYXNzQWN0aW9uRXF1YXRpb25zKHtcbiAgICAgICAgICAgICAgICByYXRlc0hhdmVHcmFudWxhcml0eTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZ2V0RXF1YXRpb25zKG1vZGVsLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aENhdGVnb3J5U2lnbmVkTGlua3MubWFzc0FjdGlvbkVxdWF0aW9ucyhtb2RlbCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgIH0pO1xufVxuIl0sImZpbGUiOiJhc3NldHMvcHJpbWl0aXZlLXNpZ25lZC1zdG9jay1mbG93LURBOVI2akxMLmpzIn0=