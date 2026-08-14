const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./object_cell_editor-DW5yEtQd.js","./analysis_tool-Bvgm6Cie.js","./document-BaPUF-Ky.js","./notebook-DqARNRKu.js","./model-B9uNSW6J.js","./index-CvS5Jq0z.js","./morphism_cell_editor-COVxLmSB.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './index-CvS5Jq0z.js';
import { lazy } from 'solid-js';
import { l as ThDelayableSignedCategory } from './document-BaPUF-Ky.js';
import { T as Theory } from './analysis_tool-Bvgm6Cie.js';
import { m as modelGraph, h as motifFinding } from './analyses-dUWNojZq.js';
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
function createCausalLoopDelaysTheory(theoryMeta) {
  const thDelayedSignedCategory = new ThDelayableSignedCategory();
  return new Theory({
    ...theoryMeta,
    theory: thDelayedSignedCategory.theory(),
    pushforwards: [
      {
        target: "causal-loop",
        migrate: ThDelayableSignedCategory.toSignedCategory
      }
    ],
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
        shortcut: ["P"],
        description: "Fast-acting positive influence",
        arrowStyle: "plus",
        preferUnnamed: true
      },
      {
        tag: "MorType",
        morType: { tag: "Basic", content: "Negative" },
        editor: MorphismCellEditor,
        name: "Negative link",
        shortcut: ["N"],
        description: "Fast-acting negative influence",
        arrowStyle: "minus",
        preferUnnamed: true
      },
      {
        tag: "MorType",
        morType: { tag: "Basic", content: "PositiveSlow" },
        editor: MorphismCellEditor,
        name: "Delayed positive link",
        description: "Slow-acting positive influence",
        arrowStyle: "plusCaesura",
        preferUnnamed: true
      },
      {
        tag: "MorType",
        morType: { tag: "Basic", content: "NegativeSlow" },
        editor: MorphismCellEditor,
        name: "Delayed negative link",
        description: "Slow-acting negative influence",
        arrowStyle: "minusCaesura",
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
        description: "Find the fast-acting balancing loops",
        help: "loops",
        findMotifs(model, options) {
          return thDelayedSignedCategory.negativeLoops(model, options);
        }
      }),
      motifFinding({
        id: "positive-loops",
        name: "Reinforcing loops",
        description: "Find the fast-acting reinforcing loops",
        help: "loops",
        findMotifs(model, options) {
          return thDelayedSignedCategory.positiveLoops(model, options);
        }
      }),
      motifFinding({
        id: "delayed-negative-loops",
        name: "Delayed balancing loops",
        description: "Find the slow-acting balancing loops",
        help: "loops",
        findMotifs(model, options) {
          return thDelayedSignedCategory.delayedNegativeLoops(model, options);
        }
      }),
      motifFinding({
        id: "delayed-positive-loops",
        name: "Delayed reinforcing loops",
        description: "Find the slow-acting reinforcing loops",
        help: "loops",
        findMotifs(model, options) {
          return thDelayedSignedCategory.delayedPositiveLoops(model, options);
        }
      })
    ]
  });
}

export { createCausalLoopDelaysTheory as default };


//# sourceMappingURL=data:application/json;base64,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c0I7QUFBQSxDQUNsQixTQUFJO0FBQUEsQ0FDSixXQUFNO0FBQUEsQ0FDTixrQkFBYTtBQUFBLENBQ2IsV0FBTTtBQUFBLFFBQ04sV0FBVyxPQUFPLE9BQVM7QUFDdkIsQ0FBTyx3Q0FBd0Isb0JBQXFCLFFBQU8sT0FBTztBQUFBO0FBQ3RFLENBQ0g7QUFBQTtBQUNMLEdBQ0g7QUFDTCIsIm5hbWVzIjpbImFuYWx5c2VzLm1vZGVsR3JhcGgiLCJhbmFseXNlcy5tb3RpZkZpbmRpbmciXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZXMiOlsiLi4vLi4vLi4vZnJvbnRlbmQvc3JjL3N0ZGxpYi90aGVvcmllcy9jYXVzYWwtbG9vcC1kZWxheXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGF6eSB9IGZyb20gXCJzb2xpZC1qc1wiO1xuXG5pbXBvcnQgeyBUaERlbGF5YWJsZVNpZ25lZENhdGVnb3J5IH0gZnJvbSBcImNhdGxvZy13YXNtXCI7XG5pbXBvcnQgeyBUaGVvcnksIHR5cGUgVGhlb3J5TWV0YSB9IGZyb20gXCIuLi8uLi90aGVvcnlcIjtcbmltcG9ydCAqIGFzIGFuYWx5c2VzIGZyb20gXCIuLi9hbmFseXNlc1wiO1xuXG5jb25zdCBPYmplY3RDZWxsRWRpdG9yID0gbGF6eSgoKSA9PiBpbXBvcnQoXCIuLi8uLi9tb2RlbC9vYmplY3RfY2VsbF9lZGl0b3JcIikpO1xuY29uc3QgTW9ycGhpc21DZWxsRWRpdG9yID0gbGF6eSgoKSA9PiBpbXBvcnQoXCIuLi8uLi9tb2RlbC9tb3JwaGlzbV9jZWxsX2VkaXRvclwiKSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUNhdXNhbExvb3BEZWxheXNUaGVvcnkodGhlb3J5TWV0YTogVGhlb3J5TWV0YSk6IFRoZW9yeSB7XG4gICAgY29uc3QgdGhEZWxheWVkU2lnbmVkQ2F0ZWdvcnkgPSBuZXcgVGhEZWxheWFibGVTaWduZWRDYXRlZ29yeSgpO1xuXG4gICAgcmV0dXJuIG5ldyBUaGVvcnkoe1xuICAgICAgICAuLi50aGVvcnlNZXRhLFxuICAgICAgICB0aGVvcnk6IHRoRGVsYXllZFNpZ25lZENhdGVnb3J5LnRoZW9yeSgpLFxuICAgICAgICBwdXNoZm9yd2FyZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IFwiY2F1c2FsLWxvb3BcIixcbiAgICAgICAgICAgICAgICBtaWdyYXRlOiBUaERlbGF5YWJsZVNpZ25lZENhdGVnb3J5LnRvU2lnbmVkQ2F0ZWdvcnksXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBvbmx5RnJlZU1vZGVsczogdHJ1ZSxcbiAgICAgICAgbW9kZWxUeXBlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogXCJPYlR5cGVcIixcbiAgICAgICAgICAgICAgICBvYlR5cGU6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwiT2JqZWN0XCIgfSxcbiAgICAgICAgICAgICAgICBlZGl0b3I6IE9iamVjdENlbGxFZGl0b3IsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJWYXJpYWJsZVwiLFxuICAgICAgICAgICAgICAgIHNob3J0Y3V0OiBbXCJWXCJdLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlZhcmlhYmxlIHF1YW50aXR5XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogXCJNb3JUeXBlXCIsXG4gICAgICAgICAgICAgICAgbW9yVHlwZToge1xuICAgICAgICAgICAgICAgICAgICB0YWc6IFwiSG9tXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwiT2JqZWN0XCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVkaXRvcjogTW9ycGhpc21DZWxsRWRpdG9yLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiUG9zaXRpdmUgbGlua1wiLFxuICAgICAgICAgICAgICAgIHNob3J0Y3V0OiBbXCJQXCJdLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkZhc3QtYWN0aW5nIHBvc2l0aXZlIGluZmx1ZW5jZVwiLFxuICAgICAgICAgICAgICAgIGFycm93U3R5bGU6IFwicGx1c1wiLFxuICAgICAgICAgICAgICAgIHByZWZlclVubmFtZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogXCJNb3JUeXBlXCIsXG4gICAgICAgICAgICAgICAgbW9yVHlwZTogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJOZWdhdGl2ZVwiIH0sXG4gICAgICAgICAgICAgICAgZWRpdG9yOiBNb3JwaGlzbUNlbGxFZGl0b3IsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJOZWdhdGl2ZSBsaW5rXCIsXG4gICAgICAgICAgICAgICAgc2hvcnRjdXQ6IFtcIk5cIl0sXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRmFzdC1hY3RpbmcgbmVnYXRpdmUgaW5mbHVlbmNlXCIsXG4gICAgICAgICAgICAgICAgYXJyb3dTdHlsZTogXCJtaW51c1wiLFxuICAgICAgICAgICAgICAgIHByZWZlclVubmFtZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogXCJNb3JUeXBlXCIsXG4gICAgICAgICAgICAgICAgbW9yVHlwZTogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJQb3NpdGl2ZVNsb3dcIiB9LFxuICAgICAgICAgICAgICAgIGVkaXRvcjogTW9ycGhpc21DZWxsRWRpdG9yLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiRGVsYXllZCBwb3NpdGl2ZSBsaW5rXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU2xvdy1hY3RpbmcgcG9zaXRpdmUgaW5mbHVlbmNlXCIsXG4gICAgICAgICAgICAgICAgYXJyb3dTdHlsZTogXCJwbHVzQ2Flc3VyYVwiLFxuICAgICAgICAgICAgICAgIHByZWZlclVubmFtZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogXCJNb3JUeXBlXCIsXG4gICAgICAgICAgICAgICAgbW9yVHlwZTogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJOZWdhdGl2ZVNsb3dcIiB9LFxuICAgICAgICAgICAgICAgIGVkaXRvcjogTW9ycGhpc21DZWxsRWRpdG9yLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiRGVsYXllZCBuZWdhdGl2ZSBsaW5rXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiU2xvdy1hY3RpbmcgbmVnYXRpdmUgaW5mbHVlbmNlXCIsXG4gICAgICAgICAgICAgICAgYXJyb3dTdHlsZTogXCJtaW51c0NhZXN1cmFcIixcbiAgICAgICAgICAgICAgICBwcmVmZXJVbm5hbWVkOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgbW9kZWxBbmFseXNlczogW1xuICAgICAgICAgICAgYW5hbHlzZXMubW9kZWxHcmFwaCh7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZGlhZ3JhbVwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiVmlzdWFsaXphdGlvblwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlZpc3VhbGl6ZSB0aGUgY2F1c2FsIGxvb3AgZGlhZ3JhbVwiLFxuICAgICAgICAgICAgICAgIGhlbHA6IFwidmlzdWFsaXphdGlvblwiLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhbmFseXNlcy5tb3RpZkZpbmRpbmcoe1xuICAgICAgICAgICAgICAgIGlkOiBcIm5lZ2F0aXZlLWxvb3BzXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJCYWxhbmNpbmcgbG9vcHNcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJGaW5kIHRoZSBmYXN0LWFjdGluZyBiYWxhbmNpbmcgbG9vcHNcIixcbiAgICAgICAgICAgICAgICBoZWxwOiBcImxvb3BzXCIsXG4gICAgICAgICAgICAgICAgZmluZE1vdGlmcyhtb2RlbCwgb3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhEZWxheWVkU2lnbmVkQ2F0ZWdvcnkubmVnYXRpdmVMb29wcyhtb2RlbCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYW5hbHlzZXMubW90aWZGaW5kaW5nKHtcbiAgICAgICAgICAgICAgICBpZDogXCJwb3NpdGl2ZS1sb29wc1wiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiUmVpbmZvcmNpbmcgbG9vcHNcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJGaW5kIHRoZSBmYXN0LWFjdGluZyByZWluZm9yY2luZyBsb29wc1wiLFxuICAgICAgICAgICAgICAgIGhlbHA6IFwibG9vcHNcIixcbiAgICAgICAgICAgICAgICBmaW5kTW90aWZzKG1vZGVsLCBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aERlbGF5ZWRTaWduZWRDYXRlZ29yeS5wb3NpdGl2ZUxvb3BzKG1vZGVsLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhbmFseXNlcy5tb3RpZkZpbmRpbmcoe1xuICAgICAgICAgICAgICAgIGlkOiBcImRlbGF5ZWQtbmVnYXRpdmUtbG9vcHNcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkRlbGF5ZWQgYmFsYW5jaW5nIGxvb3BzXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRmluZCB0aGUgc2xvdy1hY3RpbmcgYmFsYW5jaW5nIGxvb3BzXCIsXG4gICAgICAgICAgICAgICAgaGVscDogXCJsb29wc1wiLFxuICAgICAgICAgICAgICAgIGZpbmRNb3RpZnMobW9kZWwsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoRGVsYXllZFNpZ25lZENhdGVnb3J5LmRlbGF5ZWROZWdhdGl2ZUxvb3BzKG1vZGVsLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhbmFseXNlcy5tb3RpZkZpbmRpbmcoe1xuICAgICAgICAgICAgICAgIGlkOiBcImRlbGF5ZWQtcG9zaXRpdmUtbG9vcHNcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkRlbGF5ZWQgcmVpbmZvcmNpbmcgbG9vcHNcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJGaW5kIHRoZSBzbG93LWFjdGluZyByZWluZm9yY2luZyBsb29wc1wiLFxuICAgICAgICAgICAgICAgIGhlbHA6IFwibG9vcHNcIixcbiAgICAgICAgICAgICAgICBmaW5kTW90aWZzKG1vZGVsLCBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aERlbGF5ZWRTaWduZWRDYXRlZ29yeS5kZWxheWVkUG9zaXRpdmVMb29wcyhtb2RlbCwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgIH0pO1xufVxuIl0sImZpbGUiOiJhc3NldHMvY2F1c2FsLWxvb3AtZGVsYXlzLVZmT3FMQ0hULmpzIn0=