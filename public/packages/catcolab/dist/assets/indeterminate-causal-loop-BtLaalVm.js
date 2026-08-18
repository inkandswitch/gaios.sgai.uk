const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./object_cell_editor-Bx-WVfFa.js","./analysis_tool-CDs3CHfO.js","./model-hspTLkzk.js","./index-BLpRC7wy.js","./morphism_cell_editor-Cqxr4n8q.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './index-BLpRC7wy.js';
import { lazy } from 'solid-js';
import { i as ThNullableSignedCategory, a as Theory } from './analysis_tool-CDs3CHfO.js';
import { m as modelGraph, h as motifFinding } from './analyses-XxH7VM1Y.js';
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
function createIndeterminateCausalLoopTheory(theoryMeta) {
  const thNullableSignedCategory = new ThNullableSignedCategory();
  return new Theory({
    ...theoryMeta,
    theory: thNullableSignedCategory.theory(),
    onlyFreeModels: true,
    modelTypes: [
      {
        tag: "ObType",
        obType: { tag: "Basic", content: "Object" },
        editor: ObjectCellEditor,
        name: "Variable",
        shortcut: ["V"],
        description: "Variable quantity"
      },
      {
        tag: "MorType",
        morType: {
          tag: "Hom",
          content: { tag: "Basic", content: "Object" }
        },
        editor: MorphismCellEditor,
        name: "Positive link",
        description: "Variables change in the same direction",
        shortcut: ["P"],
        arrowStyle: "plus",
        preferUnnamed: true
      },
      {
        tag: "MorType",
        morType: { tag: "Basic", content: "Negative" },
        editor: MorphismCellEditor,
        name: "Negative link",
        shortcut: ["N"],
        description: "Variables change in the opposite direction",
        arrowStyle: "minus",
        preferUnnamed: true
      },
      {
        tag: "MorType",
        morType: { tag: "Basic", content: "Zero" },
        editor: MorphismCellEditor,
        name: "Indeterminate link",
        description: "The direction that variables change is indeterminate",
        shortcut: ["Z"],
        arrowStyle: "indeterminate",
        preferUnnamed: true
      }
    ],
    modelAnalyses: [
      modelGraph({
        id: "diagram",
        name: "Visualization",
        description: "Visualize the causal loop diagram",
        help: "visualization"
      }),
      motifFinding({
        id: "negative-loops",
        name: "Balancing loops",
        description: "Analyze the diagram for balancing loops",
        help: "loops",
        findMotifs(model, options) {
          return thNullableSignedCategory.negativeLoops(model, options);
        }
      }),
      motifFinding({
        id: "positive-loops",
        name: "Reinforcing loops",
        description: "Analyze the diagram for reinforcing loops",
        help: "loops",
        findMotifs(model, options) {
          return thNullableSignedCategory.positiveLoops(model, options);
        }
      }),
      motifFinding({
        id: "indeterminateLoops",
        name: "Indeterminate loops",
        description: "Analyze the diagram for indeterminate loops",
        help: "loops",
        findMotifs(model, options) {
          return thNullableSignedCategory.indeterminateLoops(model, options);
        }
      })
    ]
  });
}

export { createIndeterminateCausalLoopTheory as default };


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBTUEsS0FBTSxpQkFBbUIsUUFBSyxNQUFNLDBCQUFPLG1DQUFnQyxDQUFDO0FBQzVFLEtBQU0sbUJBQXFCLFFBQUssTUFBTSwwQkFBTyxxQ0FBa0MsQ0FBQztBQUVoRixRQUF3QixxQ0FBb0MsVUFBZ0M7QUFDeEYsRUFBTSwrQkFBMkIsTUFBSSx3QkFBeUI7QUFFOUQsU0FBTyxHQUFJLE9BQU87QUFBQSxJQUNkLEdBQUc7QUFBQSxJQUNILFFBQVEseUJBQXlCLE1BQU87QUFBQSxDQUN4QyxpQkFBZ0I7QUFBQSxJQUNoQixVQUFZO0FBQUEsQ0FDUjtBQUFBLENBQ0ksVUFBSztBQUFBLENBQ0wsYUFBUSxJQUFFLEdBQUssVUFBUyxTQUFTLFNBQVM7QUFBQSxDQUMxQyxhQUFRO0FBQUEsQ0FDUixXQUFNO0FBQUEsUUFDTixVQUFVLENBQUMsR0FBRztBQUFBLFFBQ2QsV0FBYTtBQUFBLENBQ2pCO0FBQUEsQ0FDQTtBQUFBLENBQ0ksVUFBSztBQUFBLFFBQ0wsT0FBUztBQUFBLENBQ0wsWUFBSztBQUFBLENBQ0wsZ0JBQVMsR0FBRSxJQUFLLFdBQVMsU0FBUyxDQUFTO0FBQUEsQ0FDL0M7QUFBQSxDQUNBLGFBQVE7QUFBQSxDQUNSLFdBQU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsUUFDYixVQUFVLENBQUMsR0FBRztBQUFBLENBQ2QsaUJBQVk7QUFBQSxRQUNaLGFBQWU7QUFBQSxDQUNuQjtBQUFBLENBQ0E7QUFBQSxDQUNJLFVBQUs7QUFBQSxDQUNMLGNBQVMsSUFBRSxHQUFLLFVBQVMsU0FBUyxXQUFXO0FBQUEsQ0FDN0MsYUFBUTtBQUFBLENBQ1IsV0FBTTtBQUFBLFFBQ04sVUFBVSxDQUFDLEdBQUc7QUFBQSxDQUNkLGtCQUFhO0FBQUEsQ0FDYixpQkFBWTtBQUFBLFFBQ1osYUFBZTtBQUFBLENBQ25CO0FBQUEsQ0FDQTtBQUFBLENBQ0ksVUFBSztBQUFBLENBQ0wsY0FBUyxJQUFFLEdBQUssVUFBUyxTQUFTLE9BQU87QUFBQSxDQUN6QyxhQUFRO0FBQUEsQ0FDUixXQUFNO0FBQUEsQ0FDTixrQkFBYTtBQUFBLFFBQ2IsVUFBVSxDQUFDLEdBQUc7QUFBQSxDQUNkLGlCQUFZO0FBQUEsUUFDWixhQUFlO0FBQUE7QUFDbkIsQ0FDSjtBQUFBLElBQ0EsYUFBZTtBQUFBLE1BQ1hBLFVBQW9CO0FBQUEsQ0FDaEIsU0FBSTtBQUFBLENBQ0osV0FBTTtBQUFBLENBQ04sa0JBQWE7QUFBQSxRQUNiLElBQU07QUFBQSxPQUNUO0FBQUEsTUFDREMsWUFBc0I7QUFBQSxDQUNsQixTQUFJO0FBQUEsQ0FDSixXQUFNO0FBQUEsQ0FDTixrQkFBYTtBQUFBLENBQ2IsV0FBTTtBQUFBLFFBQ04sV0FBVyxPQUFPLE9BQVM7QUFDdkIsQ0FBTyx5Q0FBeUIsYUFBYyxRQUFPLE9BQU87QUFBQTtBQUNoRSxPQUNIO0FBQUEsTUFDREEsWUFBc0I7QUFBQSxDQUNsQixTQUFJO0FBQUEsQ0FDSixXQUFNO0FBQUEsQ0FDTixrQkFBYTtBQUFBLENBQ2IsV0FBTTtBQUFBLFFBQ04sV0FBVyxPQUFPLE9BQVM7QUFDdkIsQ0FBTyx5Q0FBeUIsYUFBYyxRQUFPLE9BQU87QUFBQTtBQUNoRSxPQUNIO0FBQUEsTUFDREEsWUFBc0I7QUFBQSxDQUNsQixTQUFJO0FBQUEsQ0FDSixXQUFNO0FBQUEsQ0FDTixrQkFBYTtBQUFBLENBQ2IsV0FBTTtBQUFBLFFBQ04sV0FBVyxPQUFPLE9BQVM7QUFDdkIsQ0FBTyx5Q0FBeUIsa0JBQW1CLFFBQU8sT0FBTztBQUFBO0FBQ3JFLENBQ0g7QUFBQTtBQUNMLEdBQ0g7QUFDTCIsIm5hbWVzIjpbImFuYWx5c2VzLm1vZGVsR3JhcGgiLCJhbmFseXNlcy5tb3RpZkZpbmRpbmciXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vZnJvbnRlbmQvc3JjL3N0ZGxpYi90aGVvcmllcy9pbmRldGVybWluYXRlLWNhdXNhbC1sb29wLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxhenkgfSBmcm9tIFwic29saWQtanNcIjtcblxuaW1wb3J0IHsgVGhOdWxsYWJsZVNpZ25lZENhdGVnb3J5IH0gZnJvbSBcImNhdGxvZy13YXNtXCI7XG5pbXBvcnQgeyBUaGVvcnksIHR5cGUgVGhlb3J5TWV0YSB9IGZyb20gXCIuLi8uLi90aGVvcnlcIjtcbmltcG9ydCAqIGFzIGFuYWx5c2VzIGZyb20gXCIuLi9hbmFseXNlc1wiO1xuXG5jb25zdCBPYmplY3RDZWxsRWRpdG9yID0gbGF6eSgoKSA9PiBpbXBvcnQoXCIuLi8uLi9tb2RlbC9vYmplY3RfY2VsbF9lZGl0b3JcIikpO1xuY29uc3QgTW9ycGhpc21DZWxsRWRpdG9yID0gbGF6eSgoKSA9PiBpbXBvcnQoXCIuLi8uLi9tb2RlbC9tb3JwaGlzbV9jZWxsX2VkaXRvclwiKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUluZGV0ZXJtaW5hdGVDYXVzYWxMb29wVGhlb3J5KHRoZW9yeU1ldGE6IFRoZW9yeU1ldGEpOiBUaGVvcnkge1xuICAgIGNvbnN0IHRoTnVsbGFibGVTaWduZWRDYXRlZ29yeSA9IG5ldyBUaE51bGxhYmxlU2lnbmVkQ2F0ZWdvcnkoKTtcblxuICAgIHJldHVybiBuZXcgVGhlb3J5KHtcbiAgICAgICAgLi4udGhlb3J5TWV0YSxcbiAgICAgICAgdGhlb3J5OiB0aE51bGxhYmxlU2lnbmVkQ2F0ZWdvcnkudGhlb3J5KCksXG4gICAgICAgIG9ubHlGcmVlTW9kZWxzOiB0cnVlLFxuICAgICAgICBtb2RlbFR5cGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk9iVHlwZVwiLFxuICAgICAgICAgICAgICAgIG9iVHlwZTogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJPYmplY3RcIiB9LFxuICAgICAgICAgICAgICAgIGVkaXRvcjogT2JqZWN0Q2VsbEVkaXRvcixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlZhcmlhYmxlXCIsXG4gICAgICAgICAgICAgICAgc2hvcnRjdXQ6IFtcIlZcIl0sXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVmFyaWFibGUgcXVhbnRpdHlcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk1vclR5cGVcIixcbiAgICAgICAgICAgICAgICBtb3JUeXBlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogXCJIb21cIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJPYmplY3RcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZWRpdG9yOiBNb3JwaGlzbUNlbGxFZGl0b3IsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJQb3NpdGl2ZSBsaW5rXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVmFyaWFibGVzIGNoYW5nZSBpbiB0aGUgc2FtZSBkaXJlY3Rpb25cIixcbiAgICAgICAgICAgICAgICBzaG9ydGN1dDogW1wiUFwiXSxcbiAgICAgICAgICAgICAgICBhcnJvd1N0eWxlOiBcInBsdXNcIixcbiAgICAgICAgICAgICAgICBwcmVmZXJVbm5hbWVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiTW9yVHlwZVwiLFxuICAgICAgICAgICAgICAgIG1vclR5cGU6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwiTmVnYXRpdmVcIiB9LFxuICAgICAgICAgICAgICAgIGVkaXRvcjogTW9ycGhpc21DZWxsRWRpdG9yLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiTmVnYXRpdmUgbGlua1wiLFxuICAgICAgICAgICAgICAgIHNob3J0Y3V0OiBbXCJOXCJdLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlZhcmlhYmxlcyBjaGFuZ2UgaW4gdGhlIG9wcG9zaXRlIGRpcmVjdGlvblwiLFxuICAgICAgICAgICAgICAgIGFycm93U3R5bGU6IFwibWludXNcIixcbiAgICAgICAgICAgICAgICBwcmVmZXJVbm5hbWVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiTW9yVHlwZVwiLFxuICAgICAgICAgICAgICAgIG1vclR5cGU6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwiWmVyb1wiIH0sXG4gICAgICAgICAgICAgICAgZWRpdG9yOiBNb3JwaGlzbUNlbGxFZGl0b3IsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJJbmRldGVybWluYXRlIGxpbmtcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUaGUgZGlyZWN0aW9uIHRoYXQgdmFyaWFibGVzIGNoYW5nZSBpcyBpbmRldGVybWluYXRlXCIsXG4gICAgICAgICAgICAgICAgc2hvcnRjdXQ6IFtcIlpcIl0sXG4gICAgICAgICAgICAgICAgYXJyb3dTdHlsZTogXCJpbmRldGVybWluYXRlXCIsXG4gICAgICAgICAgICAgICAgcHJlZmVyVW5uYW1lZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIG1vZGVsQW5hbHlzZXM6IFtcbiAgICAgICAgICAgIGFuYWx5c2VzLm1vZGVsR3JhcGgoe1xuICAgICAgICAgICAgICAgIGlkOiBcImRpYWdyYW1cIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlZpc3VhbGl6YXRpb25cIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJWaXN1YWxpemUgdGhlIGNhdXNhbCBsb29wIGRpYWdyYW1cIixcbiAgICAgICAgICAgICAgICBoZWxwOiBcInZpc3VhbGl6YXRpb25cIixcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYW5hbHlzZXMubW90aWZGaW5kaW5nKHtcbiAgICAgICAgICAgICAgICBpZDogXCJuZWdhdGl2ZS1sb29wc1wiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQmFsYW5jaW5nIGxvb3BzXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiQW5hbHl6ZSB0aGUgZGlhZ3JhbSBmb3IgYmFsYW5jaW5nIGxvb3BzXCIsXG4gICAgICAgICAgICAgICAgaGVscDogXCJsb29wc1wiLFxuICAgICAgICAgICAgICAgIGZpbmRNb3RpZnMobW9kZWwsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoTnVsbGFibGVTaWduZWRDYXRlZ29yeS5uZWdhdGl2ZUxvb3BzKG1vZGVsLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhbmFseXNlcy5tb3RpZkZpbmRpbmcoe1xuICAgICAgICAgICAgICAgIGlkOiBcInBvc2l0aXZlLWxvb3BzXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJSZWluZm9yY2luZyBsb29wc1wiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkFuYWx5emUgdGhlIGRpYWdyYW0gZm9yIHJlaW5mb3JjaW5nIGxvb3BzXCIsXG4gICAgICAgICAgICAgICAgaGVscDogXCJsb29wc1wiLFxuICAgICAgICAgICAgICAgIGZpbmRNb3RpZnMobW9kZWwsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoTnVsbGFibGVTaWduZWRDYXRlZ29yeS5wb3NpdGl2ZUxvb3BzKG1vZGVsLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhbmFseXNlcy5tb3RpZkZpbmRpbmcoe1xuICAgICAgICAgICAgICAgIGlkOiBcImluZGV0ZXJtaW5hdGVMb29wc1wiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiSW5kZXRlcm1pbmF0ZSBsb29wc1wiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkFuYWx5emUgdGhlIGRpYWdyYW0gZm9yIGluZGV0ZXJtaW5hdGUgbG9vcHNcIixcbiAgICAgICAgICAgICAgICBoZWxwOiBcImxvb3BzXCIsXG4gICAgICAgICAgICAgICAgZmluZE1vdGlmcyhtb2RlbCwgb3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhOdWxsYWJsZVNpZ25lZENhdGVnb3J5LmluZGV0ZXJtaW5hdGVMb29wcyhtb2RlbCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgIH0pO1xufVxuIl0sImZpbGUiOiJhc3NldHMvaW5kZXRlcm1pbmF0ZS1jYXVzYWwtbG9vcC1CdExhYWxWbS5qcyJ9