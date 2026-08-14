const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./object_cell_editor-DW5yEtQd.js","./analysis_tool-Bvgm6Cie.js","./document-BaPUF-Ky.js","./notebook-DqARNRKu.js","./model-B9uNSW6J.js","./index-CvS5Jq0z.js","./morphism_cell_editor-COVxLmSB.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './index-CvS5Jq0z.js';
import { lazy } from 'solid-js';
import { c as ThSchema } from './document-BaPUF-Ky.js';
import { T as Theory } from './analysis_tool-Bvgm6Cie.js';
import { d as diagramGraph, t as tabularView, m as modelGraph, s as schemaERD, r as renderSQL } from './analyses-dUWNojZq.js';
import { s as styles } from './styles.module-BGDl1VX_.js';
import { s as svgStyles } from './svg_styles.module-CorR5PWz.js';
import { t as textStyles } from './text_styles.module-DnOSZP5l.js';
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
function createSchemaTheory(theoryMeta) {
  const thSchema = new ThSchema();
  const diagramAnalyses = [
    diagramGraph({
      id: "graph",
      name: "Visualization",
      description: "Visualize the instance as a graph",
      help: "visualization"
    }),
    tabularView({
      id: "tabularview",
      name: "Table view",
      description: "Visualize the instance as a table",
      help: "tabularview"
    })
  ];
  return new Theory({
    ...theoryMeta,
    theory: thSchema.theory(),
    pushforwards: [
      {
        target: "simple-olog",
        migrate: ThSchema.toCategory
      }
    ],
    modelTypes: [
      {
        tag: "ObType",
        obType: { tag: "Basic", content: "Entity" },
        editor: ObjectCellEditor,
        name: "Entity",
        description: "Type of entity or thing",
        shortcut: ["O"],
        cssClasses: [styles.box],
        svgClasses: [svgStyles.box],
        textClasses: [textStyles.code]
      },
      {
        tag: "MorType",
        morType: {
          tag: "Hom",
          content: { tag: "Basic", content: "Entity" }
        },
        editor: MorphismCellEditor,
        name: "Mapping",
        description: "Many-to-one relation between entities",
        shortcut: ["M"],
        textClasses: [textStyles.code]
      },
      {
        tag: "MorType",
        morType: { tag: "Basic", content: "Attr" },
        editor: MorphismCellEditor,
        name: "Attribute",
        description: "Data attribute of an entity",
        shortcut: ["A"],
        textClasses: [textStyles.code]
      },
      {
        tag: "ObType",
        obType: { tag: "Basic", content: "AttrType" },
        editor: ObjectCellEditor,
        name: "Attribute type",
        description: "Data type for an attribute",
        textClasses: [textStyles.code]
      },
      {
        tag: "MorType",
        morType: {
          tag: "Hom",
          content: { tag: "Basic", content: "AttrType" }
        },
        editor: MorphismCellEditor,
        name: "Operation",
        description: "Operation on data types for attributes",
        textClasses: [textStyles.code]
      }
    ],
    instanceTypes: [
      {
        tag: "ObType",
        obType: { tag: "Basic", content: "Entity" },
        name: "Individual",
        description: "Individual entity of a certain type",
        shortcut: ["I"]
      },
      {
        tag: "MorType",
        morType: {
          tag: "Hom",
          content: { tag: "Basic", content: "Entity" }
        },
        name: "Maps to",
        description: "One individual mapped to another",
        shortcut: ["M"]
      },
      {
        tag: "MorType",
        morType: { tag: "Basic", content: "Attr" },
        name: "Attribute",
        description: "Data attribute of an individual",
        shortcut: ["A"]
      },
      {
        tag: "ObType",
        obType: { tag: "Basic", content: "AttrType" },
        name: "Attribute variable",
        description: "Variable that can be bound to attribute values"
      }
    ],
    modelAnalyses: [
      modelGraph({
        id: "diagram",
        name: "Visualization",
        description: "Visualize the schema as a graph",
        help: "visualization"
      }),
      schemaERD({
        id: "erd",
        name: "Entity-relationship diagram",
        description: "Visualize the schema as an entity-relationship diagram",
        help: "schema-erd"
      }),
      renderSQL({
        id: "sql",
        render: (model, data) => thSchema.renderSQL(model, data)
      })
    ],
    diagramAnalyses
  });
}

export { createSchemaTheory as default };


//# sourceMappingURL=data:application/json;base64,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QUFNO0FBQUEsQ0FDTixrQkFBYTtBQUFBLENBQ2IsZ0JBQVUsRUFBQyxDQUFHO0FBQUEsQ0FDbEI7QUFBQSxDQUNBO0FBQUEsQ0FDSSxVQUFLO0FBQUEsQ0FDTCxjQUFTLElBQUUsR0FBSyxVQUFTLFNBQVMsT0FBTztBQUFBLENBQ3pDLFdBQU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsQ0FDYixnQkFBVSxFQUFDLENBQUc7QUFBQSxDQUNsQjtBQUFBLENBQ0E7QUFBQSxDQUNJLFVBQUs7QUFBQSxDQUNMLGFBQVEsSUFBRSxHQUFLLFVBQVMsU0FBUyxXQUFXO0FBQUEsQ0FDNUMsV0FBTTtBQUFBLFFBQ04sV0FBYTtBQUFBO0FBQ2pCLENBQ0o7QUFBQSxJQUNBLGFBQWU7QUFBQSxNQUNYQyxVQUFvQjtBQUFBLENBQ2hCLFNBQUk7QUFBQSxDQUNKLFdBQU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsUUFDYixJQUFNO0FBQUEsT0FDVDtBQUFBLE1BQ0RDLFNBQW1CO0FBQUEsQ0FDZixTQUFJO0FBQUEsQ0FDSixXQUFNO0FBQUEsQ0FDTixrQkFBYTtBQUFBLFFBQ2IsSUFBTTtBQUFBLE9BQ1Q7QUFBQSxNQUNEQyxTQUFtQjtBQUFBLENBQ2YsU0FBSTtBQUFBLFFBQ0osUUFBUSxDQUFDLE1BQU8sTUFBUyxZQUFTLFdBQVUsT0FBTyxJQUFJO0FBQUEsQ0FDMUQ7QUFBQSxDQUNMO0FBQUEsQ0FDQTtBQUFBLEdBQ0g7QUFDTCIsIm5hbWVzIjpbImFuYWx5c2VzLmRpYWdyYW1HcmFwaCIsImFuYWx5c2VzLnRhYnVsYXJWaWV3IiwiYW5hbHlzZXMubW9kZWxHcmFwaCIsImFuYWx5c2VzLnNjaGVtYUVSRCIsImFuYWx5c2VzLnJlbmRlclNRTCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyIuLi8uLi8uLi9mcm9udGVuZC9zcmMvc3RkbGliL3RoZW9yaWVzL3NpbXBsZS1zY2hlbWEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbGF6eSB9IGZyb20gXCJzb2xpZC1qc1wiO1xuXG5pbXBvcnQgeyBUaFNjaGVtYSB9IGZyb20gXCJjYXRsb2ctd2FzbVwiO1xuaW1wb3J0IHsgdHlwZSBEaWFncmFtQW5hbHlzaXNNZXRhLCBUaGVvcnksIHR5cGUgVGhlb3J5TWV0YSB9IGZyb20gXCIuLi8uLi90aGVvcnlcIjtcbmltcG9ydCAqIGFzIGFuYWx5c2VzIGZyb20gXCIuLi9hbmFseXNlc1wiO1xuXG5jb25zdCBPYmplY3RDZWxsRWRpdG9yID0gbGF6eSgoKSA9PiBpbXBvcnQoXCIuLi8uLi9tb2RlbC9vYmplY3RfY2VsbF9lZGl0b3JcIikpO1xuY29uc3QgTW9ycGhpc21DZWxsRWRpdG9yID0gbGF6eSgoKSA9PiBpbXBvcnQoXCIuLi8uLi9tb2RlbC9tb3JwaGlzbV9jZWxsX2VkaXRvclwiKSk7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgc3ZnU3R5bGVzIGZyb20gXCIuLi9zdmdfc3R5bGVzLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB0ZXh0U3R5bGVzIGZyb20gXCIuLi90ZXh0X3N0eWxlcy5tb2R1bGUuY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZVNjaGVtYVRoZW9yeSh0aGVvcnlNZXRhOiBUaGVvcnlNZXRhKTogVGhlb3J5IHtcbiAgICBjb25zdCB0aFNjaGVtYSA9IG5ldyBUaFNjaGVtYSgpO1xuICAgIGNvbnN0IGRpYWdyYW1BbmFseXNlczogRGlhZ3JhbUFuYWx5c2lzTWV0YVtdID0gW1xuICAgICAgICBhbmFseXNlcy5kaWFncmFtR3JhcGgoe1xuICAgICAgICAgICAgaWQ6IFwiZ3JhcGhcIixcbiAgICAgICAgICAgIG5hbWU6IFwiVmlzdWFsaXphdGlvblwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVmlzdWFsaXplIHRoZSBpbnN0YW5jZSBhcyBhIGdyYXBoXCIsXG4gICAgICAgICAgICBoZWxwOiBcInZpc3VhbGl6YXRpb25cIixcbiAgICAgICAgfSksXG4gICAgICAgIGFuYWx5c2VzLnRhYnVsYXJWaWV3KHtcbiAgICAgICAgICAgIGlkOiBcInRhYnVsYXJ2aWV3XCIsXG4gICAgICAgICAgICBuYW1lOiBcIlRhYmxlIHZpZXdcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlZpc3VhbGl6ZSB0aGUgaW5zdGFuY2UgYXMgYSB0YWJsZVwiLFxuICAgICAgICAgICAgaGVscDogXCJ0YWJ1bGFydmlld1wiLFxuICAgICAgICB9KSxcbiAgICBdO1xuICAgIHJldHVybiBuZXcgVGhlb3J5KHtcbiAgICAgICAgLi4udGhlb3J5TWV0YSxcbiAgICAgICAgdGhlb3J5OiB0aFNjaGVtYS50aGVvcnkoKSxcbiAgICAgICAgcHVzaGZvcndhcmRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiBcInNpbXBsZS1vbG9nXCIsXG4gICAgICAgICAgICAgICAgbWlncmF0ZTogVGhTY2hlbWEudG9DYXRlZ29yeSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIG1vZGVsVHlwZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiT2JUeXBlXCIsXG4gICAgICAgICAgICAgICAgb2JUeXBlOiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcIkVudGl0eVwiIH0sXG4gICAgICAgICAgICAgICAgZWRpdG9yOiBPYmplY3RDZWxsRWRpdG9yLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiRW50aXR5XCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVHlwZSBvZiBlbnRpdHkgb3IgdGhpbmdcIixcbiAgICAgICAgICAgICAgICBzaG9ydGN1dDogW1wiT1wiXSxcbiAgICAgICAgICAgICAgICBjc3NDbGFzc2VzOiBbc3R5bGVzLmJveF0sXG4gICAgICAgICAgICAgICAgc3ZnQ2xhc3NlczogW3N2Z1N0eWxlcy5ib3hdLFxuICAgICAgICAgICAgICAgIHRleHRDbGFzc2VzOiBbdGV4dFN0eWxlcy5jb2RlXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk1vclR5cGVcIixcbiAgICAgICAgICAgICAgICBtb3JUeXBlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogXCJIb21cIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJFbnRpdHlcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZWRpdG9yOiBNb3JwaGlzbUNlbGxFZGl0b3IsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJNYXBwaW5nXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiTWFueS10by1vbmUgcmVsYXRpb24gYmV0d2VlbiBlbnRpdGllc1wiLFxuICAgICAgICAgICAgICAgIHNob3J0Y3V0OiBbXCJNXCJdLFxuICAgICAgICAgICAgICAgIHRleHRDbGFzc2VzOiBbdGV4dFN0eWxlcy5jb2RlXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk1vclR5cGVcIixcbiAgICAgICAgICAgICAgICBtb3JUeXBlOiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcIkF0dHJcIiB9LFxuICAgICAgICAgICAgICAgIGVkaXRvcjogTW9ycGhpc21DZWxsRWRpdG9yLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQXR0cmlidXRlXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRGF0YSBhdHRyaWJ1dGUgb2YgYW4gZW50aXR5XCIsXG4gICAgICAgICAgICAgICAgc2hvcnRjdXQ6IFtcIkFcIl0sXG4gICAgICAgICAgICAgICAgdGV4dENsYXNzZXM6IFt0ZXh0U3R5bGVzLmNvZGVdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiT2JUeXBlXCIsXG4gICAgICAgICAgICAgICAgb2JUeXBlOiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcIkF0dHJUeXBlXCIgfSxcbiAgICAgICAgICAgICAgICBlZGl0b3I6IE9iamVjdENlbGxFZGl0b3IsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJBdHRyaWJ1dGUgdHlwZVwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRhdGEgdHlwZSBmb3IgYW4gYXR0cmlidXRlXCIsXG4gICAgICAgICAgICAgICAgdGV4dENsYXNzZXM6IFt0ZXh0U3R5bGVzLmNvZGVdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiTW9yVHlwZVwiLFxuICAgICAgICAgICAgICAgIG1vclR5cGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiBcIkhvbVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcIkF0dHJUeXBlXCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVkaXRvcjogTW9ycGhpc21DZWxsRWRpdG9yLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiT3BlcmF0aW9uXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiT3BlcmF0aW9uIG9uIGRhdGEgdHlwZXMgZm9yIGF0dHJpYnV0ZXNcIixcbiAgICAgICAgICAgICAgICB0ZXh0Q2xhc3NlczogW3RleHRTdHlsZXMuY29kZV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBpbnN0YW5jZVR5cGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk9iVHlwZVwiLFxuICAgICAgICAgICAgICAgIG9iVHlwZTogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJFbnRpdHlcIiB9LFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiSW5kaXZpZHVhbFwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkluZGl2aWR1YWwgZW50aXR5IG9mIGEgY2VydGFpbiB0eXBlXCIsXG4gICAgICAgICAgICAgICAgc2hvcnRjdXQ6IFtcIklcIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogXCJNb3JUeXBlXCIsXG4gICAgICAgICAgICAgICAgbW9yVHlwZToge1xuICAgICAgICAgICAgICAgICAgICB0YWc6IFwiSG9tXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwiRW50aXR5XCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiTWFwcyB0b1wiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIk9uZSBpbmRpdmlkdWFsIG1hcHBlZCB0byBhbm90aGVyXCIsXG4gICAgICAgICAgICAgICAgc2hvcnRjdXQ6IFtcIk1cIl0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogXCJNb3JUeXBlXCIsXG4gICAgICAgICAgICAgICAgbW9yVHlwZTogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJBdHRyXCIgfSxcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkF0dHJpYnV0ZVwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkRhdGEgYXR0cmlidXRlIG9mIGFuIGluZGl2aWR1YWxcIixcbiAgICAgICAgICAgICAgICBzaG9ydGN1dDogW1wiQVwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk9iVHlwZVwiLFxuICAgICAgICAgICAgICAgIG9iVHlwZTogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJBdHRyVHlwZVwiIH0sXG4gICAgICAgICAgICAgICAgbmFtZTogXCJBdHRyaWJ1dGUgdmFyaWFibGVcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJWYXJpYWJsZSB0aGF0IGNhbiBiZSBib3VuZCB0byBhdHRyaWJ1dGUgdmFsdWVzXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBtb2RlbEFuYWx5c2VzOiBbXG4gICAgICAgICAgICBhbmFseXNlcy5tb2RlbEdyYXBoKHtcbiAgICAgICAgICAgICAgICBpZDogXCJkaWFncmFtXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJWaXN1YWxpemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVmlzdWFsaXplIHRoZSBzY2hlbWEgYXMgYSBncmFwaFwiLFxuICAgICAgICAgICAgICAgIGhlbHA6IFwidmlzdWFsaXphdGlvblwiLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBhbmFseXNlcy5zY2hlbWFFUkQoe1xuICAgICAgICAgICAgICAgIGlkOiBcImVyZFwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiRW50aXR5LXJlbGF0aW9uc2hpcCBkaWFncmFtXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVmlzdWFsaXplIHRoZSBzY2hlbWEgYXMgYW4gZW50aXR5LXJlbGF0aW9uc2hpcCBkaWFncmFtXCIsXG4gICAgICAgICAgICAgICAgaGVscDogXCJzY2hlbWEtZXJkXCIsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuYWx5c2VzLnJlbmRlclNRTCh7XG4gICAgICAgICAgICAgICAgaWQ6IFwic3FsXCIsXG4gICAgICAgICAgICAgICAgcmVuZGVyOiAobW9kZWwsIGRhdGEpID0+IHRoU2NoZW1hLnJlbmRlclNRTChtb2RlbCwgZGF0YSksXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgICAgZGlhZ3JhbUFuYWx5c2VzOiBkaWFncmFtQW5hbHlzZXMsXG4gICAgfSk7XG59XG4iXSwiZmlsZSI6ImFzc2V0cy9zaW1wbGUtc2NoZW1hLWk4WVE2Q1ZiLmpzIn0=