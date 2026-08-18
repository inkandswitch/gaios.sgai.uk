const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./object_cell_editor-C1-p9FCa.js","./analysis_tool-Dx9JOKUM.js","./model-hspTLkzk.js","./index-CyfczNyW.js","./morphism_cell_editor-B99y296L.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './index-CyfczNyW.js';
import { lazy } from 'solid-js';
import { h as ThDelayableSignedCategory, a as Theory } from './analysis_tool-Dx9JOKUM.js';
import { m as modelGraph, h as motifFinding } from './analyses-1I3WezmL.js';
import 'solid-js/web';
import './model-hspTLkzk.js';
import 'solid-js/store';
import '@automerge/automerge-repo';
import '@automerge/automerge-repo-network-websocket';
import '@automerge/automerge-repo-storage-indexeddb';
import '@automerge/automerge/slim';
import '@automerge/automerge';
import '@inkandswitch/patchwork-providers';

const ObjectCellEditor = lazy(() => __vitePreload(() => import('./object_cell_editor-C1-p9FCa.js'),true?__vite__mapDeps([0,1,2,3]):undefined,import.meta.url));
const MorphismCellEditor = lazy(() => __vitePreload(() => import('./morphism_cell_editor-B99y296L.js'),true?__vite__mapDeps([4,1,2,3,0]):undefined,import.meta.url));
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


//# sourceMappingURL=data:application/json;base64,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QjtBQUFBLENBQ2xCLFNBQUk7QUFBQSxDQUNKLFdBQU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsQ0FDYixXQUFNO0FBQUEsUUFDTixXQUFXLE9BQU8sT0FBUztBQUN2QixDQUFPLHdDQUF3QixvQkFBcUIsUUFBTyxPQUFPO0FBQUE7QUFDdEUsQ0FDSDtBQUFBO0FBQ0wsR0FDSDtBQUNMIiwibmFtZXMiOlsiYW5hbHlzZXMubW9kZWxHcmFwaCIsImFuYWx5c2VzLm1vdGlmRmluZGluZyJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyIuLi8uLi8uLi9mcm9udGVuZC9zcmMvc3RkbGliL3RoZW9yaWVzL2NhdXNhbC1sb29wLWRlbGF5cy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsYXp5IH0gZnJvbSBcInNvbGlkLWpzXCI7XG5cbmltcG9ydCB7IFRoRGVsYXlhYmxlU2lnbmVkQ2F0ZWdvcnkgfSBmcm9tIFwiY2F0bG9nLXdhc21cIjtcbmltcG9ydCB7IFRoZW9yeSwgdHlwZSBUaGVvcnlNZXRhIH0gZnJvbSBcIi4uLy4uL3RoZW9yeVwiO1xuaW1wb3J0ICogYXMgYW5hbHlzZXMgZnJvbSBcIi4uL2FuYWx5c2VzXCI7XG5cbmNvbnN0IE9iamVjdENlbGxFZGl0b3IgPSBsYXp5KCgpID0+IGltcG9ydChcIi4uLy4uL21vZGVsL29iamVjdF9jZWxsX2VkaXRvclwiKSk7XG5jb25zdCBNb3JwaGlzbUNlbGxFZGl0b3IgPSBsYXp5KCgpID0+IGltcG9ydChcIi4uLy4uL21vZGVsL21vcnBoaXNtX2NlbGxfZWRpdG9yXCIpKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQ2F1c2FsTG9vcERlbGF5c1RoZW9yeSh0aGVvcnlNZXRhOiBUaGVvcnlNZXRhKTogVGhlb3J5IHtcbiAgICBjb25zdCB0aERlbGF5ZWRTaWduZWRDYXRlZ29yeSA9IG5ldyBUaERlbGF5YWJsZVNpZ25lZENhdGVnb3J5KCk7XG5cbiAgICByZXR1cm4gbmV3IFRoZW9yeSh7XG4gICAgICAgIC4uLnRoZW9yeU1ldGEsXG4gICAgICAgIHRoZW9yeTogdGhEZWxheWVkU2lnbmVkQ2F0ZWdvcnkudGhlb3J5KCksXG4gICAgICAgIHB1c2hmb3J3YXJkczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhcmdldDogXCJjYXVzYWwtbG9vcFwiLFxuICAgICAgICAgICAgICAgIG1pZ3JhdGU6IFRoRGVsYXlhYmxlU2lnbmVkQ2F0ZWdvcnkudG9TaWduZWRDYXRlZ29yeSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIG9ubHlGcmVlTW9kZWxzOiB0cnVlLFxuICAgICAgICBtb2RlbFR5cGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk9iVHlwZVwiLFxuICAgICAgICAgICAgICAgIG9iVHlwZTogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJPYmplY3RcIiB9LFxuICAgICAgICAgICAgICAgIGVkaXRvcjogT2JqZWN0Q2VsbEVkaXRvcixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlZhcmlhYmxlXCIsXG4gICAgICAgICAgICAgICAgc2hvcnRjdXQ6IFtcIlZcIl0sXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVmFyaWFibGUgcXVhbnRpdHlcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk1vclR5cGVcIixcbiAgICAgICAgICAgICAgICBtb3JUeXBlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogXCJIb21cIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJPYmplY3RcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZWRpdG9yOiBNb3JwaGlzbUNlbGxFZGl0b3IsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJQb3NpdGl2ZSBsaW5rXCIsXG4gICAgICAgICAgICAgICAgc2hvcnRjdXQ6IFtcIlBcIl0sXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRmFzdC1hY3RpbmcgcG9zaXRpdmUgaW5mbHVlbmNlXCIsXG4gICAgICAgICAgICAgICAgYXJyb3dTdHlsZTogXCJwbHVzXCIsXG4gICAgICAgICAgICAgICAgcHJlZmVyVW5uYW1lZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk1vclR5cGVcIixcbiAgICAgICAgICAgICAgICBtb3JUeXBlOiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcIk5lZ2F0aXZlXCIgfSxcbiAgICAgICAgICAgICAgICBlZGl0b3I6IE1vcnBoaXNtQ2VsbEVkaXRvcixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIk5lZ2F0aXZlIGxpbmtcIixcbiAgICAgICAgICAgICAgICBzaG9ydGN1dDogW1wiTlwiXSxcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJGYXN0LWFjdGluZyBuZWdhdGl2ZSBpbmZsdWVuY2VcIixcbiAgICAgICAgICAgICAgICBhcnJvd1N0eWxlOiBcIm1pbnVzXCIsXG4gICAgICAgICAgICAgICAgcHJlZmVyVW5uYW1lZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk1vclR5cGVcIixcbiAgICAgICAgICAgICAgICBtb3JUeXBlOiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcIlBvc2l0aXZlU2xvd1wiIH0sXG4gICAgICAgICAgICAgICAgZWRpdG9yOiBNb3JwaGlzbUNlbGxFZGl0b3IsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJEZWxheWVkIHBvc2l0aXZlIGxpbmtcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTbG93LWFjdGluZyBwb3NpdGl2ZSBpbmZsdWVuY2VcIixcbiAgICAgICAgICAgICAgICBhcnJvd1N0eWxlOiBcInBsdXNDYWVzdXJhXCIsXG4gICAgICAgICAgICAgICAgcHJlZmVyVW5uYW1lZDogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk1vclR5cGVcIixcbiAgICAgICAgICAgICAgICBtb3JUeXBlOiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcIk5lZ2F0aXZlU2xvd1wiIH0sXG4gICAgICAgICAgICAgICAgZWRpdG9yOiBNb3JwaGlzbUNlbGxFZGl0b3IsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJEZWxheWVkIG5lZ2F0aXZlIGxpbmtcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJTbG93LWFjdGluZyBuZWdhdGl2ZSBpbmZsdWVuY2VcIixcbiAgICAgICAgICAgICAgICBhcnJvd1N0eWxlOiBcIm1pbnVzQ2Flc3VyYVwiLFxuICAgICAgICAgICAgICAgIHByZWZlclVubmFtZWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBtb2RlbEFuYWx5c2VzOiBbXG4gICAgICAgICAgICBhbmFseXNlcy5tb2RlbEdyYXBoKHtcbiAgICAgICAgICAgICAgICBpZDogXCJkaWFncmFtXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJWaXN1YWxpemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVmlzdWFsaXplIHRoZSBjYXVzYWwgbG9vcCBkaWFncmFtXCIsXG4gICAgICAgICAgICAgICAgaGVscDogXCJ2aXN1YWxpemF0aW9uXCIsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuYWx5c2VzLm1vdGlmRmluZGluZyh7XG4gICAgICAgICAgICAgICAgaWQ6IFwibmVnYXRpdmUtbG9vcHNcIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJhbGFuY2luZyBsb29wc1wiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkZpbmQgdGhlIGZhc3QtYWN0aW5nIGJhbGFuY2luZyBsb29wc1wiLFxuICAgICAgICAgICAgICAgIGhlbHA6IFwibG9vcHNcIixcbiAgICAgICAgICAgICAgICBmaW5kTW90aWZzKG1vZGVsLCBvcHRpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aERlbGF5ZWRTaWduZWRDYXRlZ29yeS5uZWdhdGl2ZUxvb3BzKG1vZGVsLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhbmFseXNlcy5tb3RpZkZpbmRpbmcoe1xuICAgICAgICAgICAgICAgIGlkOiBcInBvc2l0aXZlLWxvb3BzXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJSZWluZm9yY2luZyBsb29wc1wiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkZpbmQgdGhlIGZhc3QtYWN0aW5nIHJlaW5mb3JjaW5nIGxvb3BzXCIsXG4gICAgICAgICAgICAgICAgaGVscDogXCJsb29wc1wiLFxuICAgICAgICAgICAgICAgIGZpbmRNb3RpZnMobW9kZWwsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoRGVsYXllZFNpZ25lZENhdGVnb3J5LnBvc2l0aXZlTG9vcHMobW9kZWwsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuYWx5c2VzLm1vdGlmRmluZGluZyh7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZGVsYXllZC1uZWdhdGl2ZS1sb29wc1wiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiRGVsYXllZCBiYWxhbmNpbmcgbG9vcHNcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJGaW5kIHRoZSBzbG93LWFjdGluZyBiYWxhbmNpbmcgbG9vcHNcIixcbiAgICAgICAgICAgICAgICBoZWxwOiBcImxvb3BzXCIsXG4gICAgICAgICAgICAgICAgZmluZE1vdGlmcyhtb2RlbCwgb3B0aW9ucykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhEZWxheWVkU2lnbmVkQ2F0ZWdvcnkuZGVsYXllZE5lZ2F0aXZlTG9vcHMobW9kZWwsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuYWx5c2VzLm1vdGlmRmluZGluZyh7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZGVsYXllZC1wb3NpdGl2ZS1sb29wc1wiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiRGVsYXllZCByZWluZm9yY2luZyBsb29wc1wiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkZpbmQgdGhlIHNsb3ctYWN0aW5nIHJlaW5mb3JjaW5nIGxvb3BzXCIsXG4gICAgICAgICAgICAgICAgaGVscDogXCJsb29wc1wiLFxuICAgICAgICAgICAgICAgIGZpbmRNb3RpZnMobW9kZWwsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoRGVsYXllZFNpZ25lZENhdGVnb3J5LmRlbGF5ZWRQb3NpdGl2ZUxvb3BzKG1vZGVsLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgfSk7XG59XG4iXSwiZmlsZSI6ImFzc2V0cy9jYXVzYWwtbG9vcC1kZWxheXMtQmV0MVJ1enIuanMifQ==