const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./object_cell_editor-COlDQyjd.js","./analysis_tool-Bl31dlnB.js","./model-hspTLkzk.js","./index-CpJyZPkM.js","./morphism_cell_editor-BP16K7hE.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './index-CpJyZPkM.js';
import { lazy } from 'solid-js';
import { j as ThCategoryLinks, a as Theory } from './analysis_tool-Bl31dlnB.js';
import { j as stockFlowDiagram, a as massAction, b as massActionEquations } from './analyses-vifFxgw1.js';
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

const ObjectCellEditor = lazy(() => __vitePreload(() => import('./object_cell_editor-COlDQyjd.js'),true?__vite__mapDeps([0,1,2,3]):undefined,import.meta.url));
const MorphismCellEditor = lazy(() => __vitePreload(() => import('./morphism_cell_editor-BP16K7hE.js'),true?__vite__mapDeps([4,1,2,3,0]):undefined,import.meta.url));
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


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxLQUFNLGlCQUFtQixRQUFLLE1BQU0sMEJBQU8sbUNBQWdDLENBQUM7QUFDNUUsS0FBTSxtQkFBcUIsUUFBSyxNQUFNLDBCQUFPLHFDQUFrQyxDQUFDO0FBS2hGLFFBQXdCLGdDQUErQixVQUFnQztBQUNuRixFQUFNLHNCQUFrQixNQUFJLGVBQWdCO0FBRTVDLFNBQU8sR0FBSSxPQUFPO0FBQUEsSUFDZCxHQUFHO0FBQUEsSUFDSCxRQUFRLGdCQUFnQixNQUFPO0FBQUEsSUFDL0IsWUFBWSxDQUFDLDZCQUE2QjtBQUFBLENBQzFDLGlCQUFnQjtBQUFBLElBQ2hCLFVBQVk7QUFBQSxDQUNSO0FBQUEsQ0FDSSxVQUFLO0FBQUEsQ0FDTCxhQUFRLElBQUUsR0FBSyxVQUFTLFNBQVMsU0FBUztBQUFBLENBQzFDLGFBQVE7QUFBQSxDQUNSLFdBQU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsUUFDYixVQUFVLENBQUMsR0FBRztBQUFBLFFBQ2QsV0FBWSxFQUFDLE9BQU8sR0FBRztBQUFBLFFBQ3ZCLFlBQVksQ0FBQyxVQUFVLEdBQUc7QUFBQSxDQUM5QjtBQUFBLENBQ0E7QUFBQSxDQUNJLFVBQUs7QUFBQSxRQUNMLE9BQVM7QUFBQSxDQUNMLFlBQUs7QUFBQSxDQUNMLGdCQUFTLEdBQUUsSUFBSyxXQUFTLFNBQVMsQ0FBUztBQUFBLENBQy9DO0FBQUEsQ0FDQSxhQUFRO0FBQUEsQ0FDUixXQUFNO0FBQUEsQ0FDTixrQkFBYTtBQUFBLFFBQ2IsVUFBVSxDQUFDLEdBQUc7QUFBQSxRQUNkLFVBQVk7QUFBQSxDQUNoQjtBQUFBLENBQ0E7QUFBQSxDQUNJLFVBQUs7QUFBQSxDQUNMLGNBQVMsSUFBRSxHQUFLLFVBQVMsU0FBUyxPQUFPO0FBQUEsQ0FDekMsYUFBUTtBQUFBLENBQ1IsV0FBTTtBQUFBLENBQ04sa0JBQWE7QUFBQSxDQUNiLG9CQUFlO0FBQUEsQ0FDZixnQkFBVSxFQUFDLENBQUc7QUFBQTtBQUNsQixDQUNKO0FBQUEsSUFDQSxhQUFlO0FBQUEsTUFDWEEsZ0JBQTBCO0FBQUEsQ0FDdEIsU0FBSTtBQUFBLENBQ0osV0FBTTtBQUFBLENBQ04sa0JBQWE7QUFBQSxRQUNiLElBQU07QUFBQSxPQUNUO0FBQUEsTUFDREMsVUFBb0I7QUFBQSxDQUNoQiwyQkFBc0I7QUFBQSxRQUN0QixTQUFTLE9BQU8sSUFBTTtBQUNsQixDQUFPLGdDQUFnQixVQUFXLFFBQU8sSUFBSTtBQUFBLENBQ2pEO0FBQUEsUUFDQSxjQUFnQjtBQUFBLENBQ1osWUFBSztBQUFBLENBQ0wsZ0JBQVMsR0FBRSxJQUFLLFdBQVMsU0FBUyxDQUFTO0FBQUE7QUFDL0MsT0FDSDtBQUFBLE1BQ0RDLG1CQUE2QjtBQUFBLENBQ3pCLDJCQUFzQjtBQUFBLFFBQ3RCLGFBQWEsT0FBTyxJQUFNO0FBQ3RCLENBQU8sZ0NBQWdCLG1CQUFvQixRQUFPLElBQUk7QUFBQTtBQUMxRCxDQUNIO0FBQUE7QUFDTCxHQUNIO0FBQ0wiLCJuYW1lcyI6WyJhbmFseXNlcy5zdG9ja0Zsb3dEaWFncmFtIiwiYW5hbHlzZXMubWFzc0FjdGlvbiIsImFuYWx5c2VzLm1hc3NBY3Rpb25FcXVhdGlvbnMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vZnJvbnRlbmQvc3JjL3N0ZGxpYi90aGVvcmllcy9wcmltaXRpdmUtc3RvY2stZmxvdy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsYXp5IH0gZnJvbSBcInNvbGlkLWpzXCI7XG5cbmltcG9ydCB7IFRoQ2F0ZWdvcnlMaW5rcyB9IGZyb20gXCJjYXRsb2ctd2FzbVwiO1xuaW1wb3J0IHsgVGhlb3J5LCB0eXBlIFRoZW9yeU1ldGEgfSBmcm9tIFwiLi4vLi4vdGhlb3J5XCI7XG5pbXBvcnQgKiBhcyBhbmFseXNlcyBmcm9tIFwiLi4vYW5hbHlzZXNcIjtcblxuY29uc3QgT2JqZWN0Q2VsbEVkaXRvciA9IGxhenkoKCkgPT4gaW1wb3J0KFwiLi4vLi4vbW9kZWwvb2JqZWN0X2NlbGxfZWRpdG9yXCIpKTtcbmNvbnN0IE1vcnBoaXNtQ2VsbEVkaXRvciA9IGxhenkoKCkgPT4gaW1wb3J0KFwiLi4vLi4vbW9kZWwvbW9ycGhpc21fY2VsbF9lZGl0b3JcIikpO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHN2Z1N0eWxlcyBmcm9tIFwiLi4vc3ZnX3N0eWxlcy5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVN0b2NrRmxvd1RoZW9yeSh0aGVvcnlNZXRhOiBUaGVvcnlNZXRhKTogVGhlb3J5IHtcbiAgICBjb25zdCB0aENhdGVnb3J5TGlua3MgPSBuZXcgVGhDYXRlZ29yeUxpbmtzKCk7XG5cbiAgICByZXR1cm4gbmV3IFRoZW9yeSh7XG4gICAgICAgIC4uLnRoZW9yeU1ldGEsXG4gICAgICAgIHRoZW9yeTogdGhDYXRlZ29yeUxpbmtzLnRoZW9yeSgpLFxuICAgICAgICBpbmNsdXNpb25zOiBbXCJwcmltaXRpdmUtc2lnbmVkLXN0b2NrLWZsb3dcIl0sXG4gICAgICAgIG9ubHlGcmVlTW9kZWxzOiB0cnVlLFxuICAgICAgICBtb2RlbFR5cGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk9iVHlwZVwiLFxuICAgICAgICAgICAgICAgIG9iVHlwZTogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJPYmplY3RcIiB9LFxuICAgICAgICAgICAgICAgIGVkaXRvcjogT2JqZWN0Q2VsbEVkaXRvcixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlN0b2NrXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVGhpbmcgd2l0aCBhbiBhbW91bnRcIixcbiAgICAgICAgICAgICAgICBzaG9ydGN1dDogW1wiU1wiXSxcbiAgICAgICAgICAgICAgICBjc3NDbGFzc2VzOiBbc3R5bGVzLmJveF0sXG4gICAgICAgICAgICAgICAgc3ZnQ2xhc3NlczogW3N2Z1N0eWxlcy5ib3hdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiTW9yVHlwZVwiLFxuICAgICAgICAgICAgICAgIG1vclR5cGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiBcIkhvbVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcIk9iamVjdFwiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlZGl0b3I6IE1vcnBoaXNtQ2VsbEVkaXRvcixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkZsb3dcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJGbG93IGZyb20gb25lIHN0b2NrIHRvIGFub3RoZXJcIixcbiAgICAgICAgICAgICAgICBzaG9ydGN1dDogW1wiRlwiXSxcbiAgICAgICAgICAgICAgICBhcnJvd1N0eWxlOiBcImRvdWJsZVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiTW9yVHlwZVwiLFxuICAgICAgICAgICAgICAgIG1vclR5cGU6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwiTGlua1wiIH0sXG4gICAgICAgICAgICAgICAgZWRpdG9yOiBNb3JwaGlzbUNlbGxFZGl0b3IsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJMaW5rXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiSW5mbHVlbmNlIG9mIGEgc3RvY2sgb24gYSBmbG93XCIsXG4gICAgICAgICAgICAgICAgcHJlZmVyVW5uYW1lZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzaG9ydGN1dDogW1wiTFwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIG1vZGVsQW5hbHlzZXM6IFtcbiAgICAgICAgICAgIGFuYWx5c2VzLnN0b2NrRmxvd0RpYWdyYW0oe1xuICAgICAgICAgICAgICAgIGlkOiBcImRpYWdyYW1cIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlZpc3VhbGl6YXRpb25cIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJWaXN1YWxpemUgdGhlIHN0b2NrIGFuZCBmbG93IGRpYWdyYW1cIixcbiAgICAgICAgICAgICAgICBoZWxwOiBcInZpc3VhbGl6YXRpb25cIixcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYW5hbHlzZXMubWFzc0FjdGlvbih7XG4gICAgICAgICAgICAgICAgcmF0ZXNIYXZlR3JhbnVsYXJpdHk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNpbXVsYXRlKG1vZGVsLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aENhdGVnb3J5TGlua3MubWFzc0FjdGlvbihtb2RlbCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uVHlwZToge1xuICAgICAgICAgICAgICAgICAgICB0YWc6IFwiSG9tXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwiT2JqZWN0XCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhbmFseXNlcy5tYXNzQWN0aW9uRXF1YXRpb25zKHtcbiAgICAgICAgICAgICAgICByYXRlc0hhdmVHcmFudWxhcml0eTogZmFsc2UsXG4gICAgICAgICAgICAgICAgZ2V0RXF1YXRpb25zKG1vZGVsLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aENhdGVnb3J5TGlua3MubWFzc0FjdGlvbkVxdWF0aW9ucyhtb2RlbCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgIH0pO1xufVxuIl0sImZpbGUiOiJhc3NldHMvcHJpbWl0aXZlLXN0b2NrLWZsb3ctQ0h5SVdfVUMuanMifQ==