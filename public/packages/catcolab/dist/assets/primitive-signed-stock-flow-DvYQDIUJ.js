const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./object_cell_editor-oKrxRfYW.js","./analysis_tool-dmxyNWB4.js","./model-hspTLkzk.js","./index--5ogabjI.js","./morphism_cell_editor-WaTXqMTH.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './index--5ogabjI.js';
import { lazy } from 'solid-js';
import { k as ThCategorySignedLinks, a as Theory } from './analysis_tool-dmxyNWB4.js';
import { j as stockFlowDiagram, a as massAction, b as massActionEquations } from './analyses-QvZxl-77.js';
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

const ObjectCellEditor = lazy(() => __vitePreload(() => import('./object_cell_editor-oKrxRfYW.js'),true?__vite__mapDeps([0,1,2,3]):undefined,import.meta.url));
const MorphismCellEditor = lazy(() => __vitePreload(() => import('./morphism_cell_editor-WaTXqMTH.js'),true?__vite__mapDeps([4,1,2,3,0]):undefined,import.meta.url));
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


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNQSxLQUFNLGlCQUFtQixRQUFLLE1BQU0sMEJBQU8sbUNBQWdDLENBQUM7QUFDNUUsS0FBTSxtQkFBcUIsUUFBSyxNQUFNLDBCQUFPLHFDQUFrQyxDQUFDO0FBS2hGLFFBQXdCLHNDQUFxQyxVQUFnQztBQUN6RixFQUFNLDRCQUF3QixNQUFJLHFCQUFzQjtBQUV4RCxTQUFPLEdBQUksT0FBTztBQUFBLElBQ2QsR0FBRztBQUFBLElBQ0gsUUFBUSxzQkFBc0IsTUFBTztBQUFBLENBQ3JDLGlCQUFnQjtBQUFBLElBQ2hCLFVBQVk7QUFBQSxDQUNSO0FBQUEsQ0FDSSxVQUFLO0FBQUEsQ0FDTCxhQUFRLElBQUUsR0FBSyxVQUFTLFNBQVMsU0FBUztBQUFBLENBQzFDLGFBQVE7QUFBQSxDQUNSLFdBQU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsUUFDYixVQUFVLENBQUMsR0FBRztBQUFBLFFBQ2QsV0FBWSxFQUFDLE9BQU8sR0FBRztBQUFBLFFBQ3ZCLFlBQVksQ0FBQyxVQUFVLEdBQUc7QUFBQSxDQUM5QjtBQUFBLENBQ0E7QUFBQSxDQUNJLFVBQUs7QUFBQSxRQUNMLE9BQVM7QUFBQSxDQUNMLFlBQUs7QUFBQSxDQUNMLGdCQUFTLEdBQUUsSUFBSyxXQUFTLFNBQVMsQ0FBUztBQUFBLENBQy9DO0FBQUEsQ0FDQSxhQUFRO0FBQUEsQ0FDUixXQUFNO0FBQUEsQ0FDTixrQkFBYTtBQUFBLFFBQ2IsVUFBVSxDQUFDLEdBQUc7QUFBQSxRQUNkLFVBQVk7QUFBQSxDQUNoQjtBQUFBLENBQ0E7QUFBQSxDQUNJLFVBQUs7QUFBQSxDQUNMLGNBQVMsSUFBRSxHQUFLLFVBQVMsU0FBUyxPQUFPO0FBQUEsQ0FDekMsYUFBUTtBQUFBLENBQ1IsV0FBTTtBQUFBLENBQ04sa0JBQWE7QUFBQSxDQUNiLGlCQUFZO0FBQUEsQ0FDWixvQkFBZTtBQUFBLENBQ2YsZ0JBQVUsRUFBQyxDQUFHO0FBQUEsQ0FDbEI7QUFBQSxDQUNBO0FBQUEsQ0FDSSxVQUFLO0FBQUEsQ0FDTCxjQUFTLElBQUUsR0FBSyxVQUFTLFNBQVMsZUFBZTtBQUFBLENBQ2pELGFBQVE7QUFBQSxDQUNSLFdBQU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsQ0FDYixpQkFBWTtBQUFBLENBQ1osb0JBQWU7QUFBQSxDQUNmLGdCQUFVLEVBQUMsQ0FBRztBQUFBO0FBQ2xCLENBQ0o7QUFBQSxJQUNBLGFBQWU7QUFBQSxNQUNYQSxnQkFBMEI7QUFBQSxDQUN0QixTQUFJO0FBQUEsQ0FDSixXQUFNO0FBQUEsQ0FDTixrQkFBYTtBQUFBLFFBQ2IsSUFBTTtBQUFBLE9BQ1Q7QUFBQSxNQUNEQyxVQUFvQjtBQUFBLENBQ2hCLDJCQUFzQjtBQUFBLFFBQ3RCLFNBQVMsT0FBTyxJQUFNO0FBQ2xCLENBQU8sc0NBQXNCLFVBQVcsUUFBTyxJQUFJO0FBQUEsQ0FDdkQ7QUFBQSxRQUNBLGNBQWdCO0FBQUEsQ0FDWixZQUFLO0FBQUEsQ0FDTCxnQkFBUyxHQUFFLElBQUssV0FBUyxTQUFTLENBQVM7QUFBQTtBQUMvQyxPQUNIO0FBQUEsTUFDREMsbUJBQTZCO0FBQUEsQ0FDekIsMkJBQXNCO0FBQUEsUUFDdEIsYUFBYSxPQUFPLElBQU07QUFDdEIsQ0FBTyxzQ0FBc0IsbUJBQW9CLFFBQU8sSUFBSTtBQUFBO0FBQ2hFLENBQ0g7QUFBQTtBQUNMLEdBQ0g7QUFDTCIsIm5hbWVzIjpbImFuYWx5c2VzLnN0b2NrRmxvd0RpYWdyYW0iLCJhbmFseXNlcy5tYXNzQWN0aW9uIiwiYW5hbHlzZXMubWFzc0FjdGlvbkVxdWF0aW9ucyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyIuLi8uLi8uLi9mcm9udGVuZC9zcmMvc3RkbGliL3RoZW9yaWVzL3ByaW1pdGl2ZS1zaWduZWQtc3RvY2stZmxvdy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsYXp5IH0gZnJvbSBcInNvbGlkLWpzXCI7XG5cbmltcG9ydCB7IFRoQ2F0ZWdvcnlTaWduZWRMaW5rcyB9IGZyb20gXCJjYXRsb2ctd2FzbVwiO1xuaW1wb3J0IHsgVGhlb3J5LCB0eXBlIFRoZW9yeU1ldGEgfSBmcm9tIFwiLi4vLi4vdGhlb3J5XCI7XG5pbXBvcnQgKiBhcyBhbmFseXNlcyBmcm9tIFwiLi4vYW5hbHlzZXNcIjtcblxuY29uc3QgT2JqZWN0Q2VsbEVkaXRvciA9IGxhenkoKCkgPT4gaW1wb3J0KFwiLi4vLi4vbW9kZWwvb2JqZWN0X2NlbGxfZWRpdG9yXCIpKTtcbmNvbnN0IE1vcnBoaXNtQ2VsbEVkaXRvciA9IGxhenkoKCkgPT4gaW1wb3J0KFwiLi4vLi4vbW9kZWwvbW9ycGhpc21fY2VsbF9lZGl0b3JcIikpO1xuXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHN2Z1N0eWxlcyBmcm9tIFwiLi4vc3ZnX3N0eWxlcy5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVByaW1pdGl2ZVNpZ25lZFN0b2NrRmxvd1RoZW9yeSh0aGVvcnlNZXRhOiBUaGVvcnlNZXRhKTogVGhlb3J5IHtcbiAgICBjb25zdCB0aENhdGVnb3J5U2lnbmVkTGlua3MgPSBuZXcgVGhDYXRlZ29yeVNpZ25lZExpbmtzKCk7XG5cbiAgICByZXR1cm4gbmV3IFRoZW9yeSh7XG4gICAgICAgIC4uLnRoZW9yeU1ldGEsXG4gICAgICAgIHRoZW9yeTogdGhDYXRlZ29yeVNpZ25lZExpbmtzLnRoZW9yeSgpLFxuICAgICAgICBvbmx5RnJlZU1vZGVsczogdHJ1ZSxcbiAgICAgICAgbW9kZWxUeXBlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogXCJPYlR5cGVcIixcbiAgICAgICAgICAgICAgICBvYlR5cGU6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwiT2JqZWN0XCIgfSxcbiAgICAgICAgICAgICAgICBlZGl0b3I6IE9iamVjdENlbGxFZGl0b3IsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJTdG9ja1wiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlRoaW5nIHdpdGggYW4gYW1vdW50XCIsXG4gICAgICAgICAgICAgICAgc2hvcnRjdXQ6IFtcIlNcIl0sXG4gICAgICAgICAgICAgICAgY3NzQ2xhc3NlczogW3N0eWxlcy5ib3hdLFxuICAgICAgICAgICAgICAgIHN2Z0NsYXNzZXM6IFtzdmdTdHlsZXMuYm94XSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk1vclR5cGVcIixcbiAgICAgICAgICAgICAgICBtb3JUeXBlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogXCJIb21cIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJPYmplY3RcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZWRpdG9yOiBNb3JwaGlzbUNlbGxFZGl0b3IsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJGbG93XCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRmxvdyBmcm9tIG9uZSBzdG9jayB0byBhbm90aGVyXCIsXG4gICAgICAgICAgICAgICAgc2hvcnRjdXQ6IFtcIkZcIl0sXG4gICAgICAgICAgICAgICAgYXJyb3dTdHlsZTogXCJkb3VibGVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk1vclR5cGVcIixcbiAgICAgICAgICAgICAgICBtb3JUeXBlOiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcIkxpbmtcIiB9LFxuICAgICAgICAgICAgICAgIGVkaXRvcjogTW9ycGhpc21DZWxsRWRpdG9yLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiUG9zaXRpdmUgbGlua1wiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlBvc2l0aXZlIGluZmx1ZW5jZSBvZiBhIHN0b2NrIG9uIGEgZmxvd1wiLFxuICAgICAgICAgICAgICAgIGFycm93U3R5bGU6IFwicGx1c1wiLFxuICAgICAgICAgICAgICAgIHByZWZlclVubmFtZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgc2hvcnRjdXQ6IFtcIlBcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogXCJNb3JUeXBlXCIsXG4gICAgICAgICAgICAgICAgbW9yVHlwZTogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJOZWdhdGl2ZUxpbmtcIiB9LFxuICAgICAgICAgICAgICAgIGVkaXRvcjogTW9ycGhpc21DZWxsRWRpdG9yLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiTmVnYXRpdmUgbGlua1wiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIk5lZ2F0aXZlIGluZmx1ZW5jZSBvZiBhIHN0b2NrIG9uIGEgZmxvd1wiLFxuICAgICAgICAgICAgICAgIGFycm93U3R5bGU6IFwibWludXNcIixcbiAgICAgICAgICAgICAgICBwcmVmZXJVbm5hbWVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHNob3J0Y3V0OiBbXCJOXCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgbW9kZWxBbmFseXNlczogW1xuICAgICAgICAgICAgYW5hbHlzZXMuc3RvY2tGbG93RGlhZ3JhbSh7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZGlhZ3JhbVwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiVmlzdWFsaXphdGlvblwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlZpc3VhbGl6ZSB0aGUgc3RvY2sgYW5kIGZsb3cgZGlhZ3JhbVwiLFxuICAgICAgICAgICAgICAgIGhlbHA6IFwidmlzdWFsaXphdGlvblwiLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhbmFseXNlcy5tYXNzQWN0aW9uKHtcbiAgICAgICAgICAgICAgICByYXRlc0hhdmVHcmFudWxhcml0eTogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2ltdWxhdGUobW9kZWwsIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoQ2F0ZWdvcnlTaWduZWRMaW5rcy5tYXNzQWN0aW9uKG1vZGVsLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb25UeXBlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogXCJIb21cIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJPYmplY3RcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuYWx5c2VzLm1hc3NBY3Rpb25FcXVhdGlvbnMoe1xuICAgICAgICAgICAgICAgIHJhdGVzSGF2ZUdyYW51bGFyaXR5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBnZXRFcXVhdGlvbnMobW9kZWwsIGRhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoQ2F0ZWdvcnlTaWduZWRMaW5rcy5tYXNzQWN0aW9uRXF1YXRpb25zKG1vZGVsLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgfSk7XG59XG4iXSwiZmlsZSI6ImFzc2V0cy9wcmltaXRpdmUtc2lnbmVkLXN0b2NrLWZsb3ctRHZZUURJVUouanMifQ==