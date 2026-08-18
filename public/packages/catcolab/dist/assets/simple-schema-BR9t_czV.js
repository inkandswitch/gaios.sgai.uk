const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./object_cell_editor-oKrxRfYW.js","./analysis_tool-dmxyNWB4.js","./model-hspTLkzk.js","./index--5ogabjI.js","./morphism_cell_editor-WaTXqMTH.js"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from './index--5ogabjI.js';
import { lazy } from 'solid-js';
import { c as ThSchema, a as Theory } from './analysis_tool-dmxyNWB4.js';
import { d as diagramGraph, t as tabularView, m as modelGraph, s as schemaERD, r as renderSQL } from './analyses-QvZxl-77.js';
import { s as styles } from './styles.module-BGDl1VX_.js';
import { s as svgStyles } from './svg_styles.module-CorR5PWz.js';
import { t as textStyles } from './text_styles.module-DnOSZP5l.js';
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


//# sourceMappingURL=data:application/json;base64,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QU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsQ0FDYixnQkFBVSxFQUFDLENBQUc7QUFBQSxDQUNsQjtBQUFBLENBQ0E7QUFBQSxDQUNJLFVBQUs7QUFBQSxDQUNMLGNBQVMsSUFBRSxHQUFLLFVBQVMsU0FBUyxPQUFPO0FBQUEsQ0FDekMsV0FBTTtBQUFBLENBQ04sa0JBQWE7QUFBQSxDQUNiLGdCQUFVLEVBQUMsQ0FBRztBQUFBLENBQ2xCO0FBQUEsQ0FDQTtBQUFBLENBQ0ksVUFBSztBQUFBLENBQ0wsYUFBUSxJQUFFLEdBQUssVUFBUyxTQUFTLFdBQVc7QUFBQSxDQUM1QyxXQUFNO0FBQUEsUUFDTixXQUFhO0FBQUE7QUFDakIsQ0FDSjtBQUFBLElBQ0EsYUFBZTtBQUFBLE1BQ1hDLFVBQW9CO0FBQUEsQ0FDaEIsU0FBSTtBQUFBLENBQ0osV0FBTTtBQUFBLENBQ04sa0JBQWE7QUFBQSxRQUNiLElBQU07QUFBQSxPQUNUO0FBQUEsTUFDREMsU0FBbUI7QUFBQSxDQUNmLFNBQUk7QUFBQSxDQUNKLFdBQU07QUFBQSxDQUNOLGtCQUFhO0FBQUEsUUFDYixJQUFNO0FBQUEsT0FDVDtBQUFBLE1BQ0RDLFNBQW1CO0FBQUEsQ0FDZixTQUFJO0FBQUEsUUFDSixRQUFRLENBQUMsTUFBTyxNQUFTLFlBQVMsV0FBVSxPQUFPLElBQUk7QUFBQSxDQUMxRDtBQUFBLENBQ0w7QUFBQSxDQUNBO0FBQUEsR0FDSDtBQUNMIiwibmFtZXMiOlsiYW5hbHlzZXMuZGlhZ3JhbUdyYXBoIiwiYW5hbHlzZXMudGFidWxhclZpZXciLCJhbmFseXNlcy5tb2RlbEdyYXBoIiwiYW5hbHlzZXMuc2NoZW1hRVJEIiwiYW5hbHlzZXMucmVuZGVyU1FMIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zyb250ZW5kL3NyYy9zdGRsaWIvdGhlb3JpZXMvc2ltcGxlLXNjaGVtYS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsYXp5IH0gZnJvbSBcInNvbGlkLWpzXCI7XG5cbmltcG9ydCB7IFRoU2NoZW1hIH0gZnJvbSBcImNhdGxvZy13YXNtXCI7XG5pbXBvcnQgeyB0eXBlIERpYWdyYW1BbmFseXNpc01ldGEsIFRoZW9yeSwgdHlwZSBUaGVvcnlNZXRhIH0gZnJvbSBcIi4uLy4uL3RoZW9yeVwiO1xuaW1wb3J0ICogYXMgYW5hbHlzZXMgZnJvbSBcIi4uL2FuYWx5c2VzXCI7XG5cbmNvbnN0IE9iamVjdENlbGxFZGl0b3IgPSBsYXp5KCgpID0+IGltcG9ydChcIi4uLy4uL21vZGVsL29iamVjdF9jZWxsX2VkaXRvclwiKSk7XG5jb25zdCBNb3JwaGlzbUNlbGxFZGl0b3IgPSBsYXp5KCgpID0+IGltcG9ydChcIi4uLy4uL21vZGVsL21vcnBoaXNtX2NlbGxfZWRpdG9yXCIpKTtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBzdmdTdHlsZXMgZnJvbSBcIi4uL3N2Z19zdHlsZXMubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHRleHRTdHlsZXMgZnJvbSBcIi4uL3RleHRfc3R5bGVzLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlU2NoZW1hVGhlb3J5KHRoZW9yeU1ldGE6IFRoZW9yeU1ldGEpOiBUaGVvcnkge1xuICAgIGNvbnN0IHRoU2NoZW1hID0gbmV3IFRoU2NoZW1hKCk7XG4gICAgY29uc3QgZGlhZ3JhbUFuYWx5c2VzOiBEaWFncmFtQW5hbHlzaXNNZXRhW10gPSBbXG4gICAgICAgIGFuYWx5c2VzLmRpYWdyYW1HcmFwaCh7XG4gICAgICAgICAgICBpZDogXCJncmFwaFwiLFxuICAgICAgICAgICAgbmFtZTogXCJWaXN1YWxpemF0aW9uXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJWaXN1YWxpemUgdGhlIGluc3RhbmNlIGFzIGEgZ3JhcGhcIixcbiAgICAgICAgICAgIGhlbHA6IFwidmlzdWFsaXphdGlvblwiLFxuICAgICAgICB9KSxcbiAgICAgICAgYW5hbHlzZXMudGFidWxhclZpZXcoe1xuICAgICAgICAgICAgaWQ6IFwidGFidWxhcnZpZXdcIixcbiAgICAgICAgICAgIG5hbWU6IFwiVGFibGUgdmlld1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiVmlzdWFsaXplIHRoZSBpbnN0YW5jZSBhcyBhIHRhYmxlXCIsXG4gICAgICAgICAgICBoZWxwOiBcInRhYnVsYXJ2aWV3XCIsXG4gICAgICAgIH0pLFxuICAgIF07XG4gICAgcmV0dXJuIG5ldyBUaGVvcnkoe1xuICAgICAgICAuLi50aGVvcnlNZXRhLFxuICAgICAgICB0aGVvcnk6IHRoU2NoZW1hLnRoZW9yeSgpLFxuICAgICAgICBwdXNoZm9yd2FyZHM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IFwic2ltcGxlLW9sb2dcIixcbiAgICAgICAgICAgICAgICBtaWdyYXRlOiBUaFNjaGVtYS50b0NhdGVnb3J5LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgbW9kZWxUeXBlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogXCJPYlR5cGVcIixcbiAgICAgICAgICAgICAgICBvYlR5cGU6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwiRW50aXR5XCIgfSxcbiAgICAgICAgICAgICAgICBlZGl0b3I6IE9iamVjdENlbGxFZGl0b3IsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJFbnRpdHlcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJUeXBlIG9mIGVudGl0eSBvciB0aGluZ1wiLFxuICAgICAgICAgICAgICAgIHNob3J0Y3V0OiBbXCJPXCJdLFxuICAgICAgICAgICAgICAgIGNzc0NsYXNzZXM6IFtzdHlsZXMuYm94XSxcbiAgICAgICAgICAgICAgICBzdmdDbGFzc2VzOiBbc3ZnU3R5bGVzLmJveF0sXG4gICAgICAgICAgICAgICAgdGV4dENsYXNzZXM6IFt0ZXh0U3R5bGVzLmNvZGVdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiTW9yVHlwZVwiLFxuICAgICAgICAgICAgICAgIG1vclR5cGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdGFnOiBcIkhvbVwiLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcIkVudGl0eVwiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlZGl0b3I6IE1vcnBoaXNtQ2VsbEVkaXRvcixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIk1hcHBpbmdcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJNYW55LXRvLW9uZSByZWxhdGlvbiBiZXR3ZWVuIGVudGl0aWVzXCIsXG4gICAgICAgICAgICAgICAgc2hvcnRjdXQ6IFtcIk1cIl0sXG4gICAgICAgICAgICAgICAgdGV4dENsYXNzZXM6IFt0ZXh0U3R5bGVzLmNvZGVdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiTW9yVHlwZVwiLFxuICAgICAgICAgICAgICAgIG1vclR5cGU6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwiQXR0clwiIH0sXG4gICAgICAgICAgICAgICAgZWRpdG9yOiBNb3JwaGlzbUNlbGxFZGl0b3IsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJBdHRyaWJ1dGVcIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJEYXRhIGF0dHJpYnV0ZSBvZiBhbiBlbnRpdHlcIixcbiAgICAgICAgICAgICAgICBzaG9ydGN1dDogW1wiQVwiXSxcbiAgICAgICAgICAgICAgICB0ZXh0Q2xhc3NlczogW3RleHRTdHlsZXMuY29kZV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogXCJPYlR5cGVcIixcbiAgICAgICAgICAgICAgICBvYlR5cGU6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwiQXR0clR5cGVcIiB9LFxuICAgICAgICAgICAgICAgIGVkaXRvcjogT2JqZWN0Q2VsbEVkaXRvcixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkF0dHJpYnV0ZSB0eXBlXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRGF0YSB0eXBlIGZvciBhbiBhdHRyaWJ1dGVcIixcbiAgICAgICAgICAgICAgICB0ZXh0Q2xhc3NlczogW3RleHRTdHlsZXMuY29kZV0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRhZzogXCJNb3JUeXBlXCIsXG4gICAgICAgICAgICAgICAgbW9yVHlwZToge1xuICAgICAgICAgICAgICAgICAgICB0YWc6IFwiSG9tXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHsgdGFnOiBcIkJhc2ljXCIsIGNvbnRlbnQ6IFwiQXR0clR5cGVcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZWRpdG9yOiBNb3JwaGlzbUNlbGxFZGl0b3IsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJPcGVyYXRpb25cIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJPcGVyYXRpb24gb24gZGF0YSB0eXBlcyBmb3IgYXR0cmlidXRlc1wiLFxuICAgICAgICAgICAgICAgIHRleHRDbGFzc2VzOiBbdGV4dFN0eWxlcy5jb2RlXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIGluc3RhbmNlVHlwZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiT2JUeXBlXCIsXG4gICAgICAgICAgICAgICAgb2JUeXBlOiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcIkVudGl0eVwiIH0sXG4gICAgICAgICAgICAgICAgbmFtZTogXCJJbmRpdmlkdWFsXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiSW5kaXZpZHVhbCBlbnRpdHkgb2YgYSBjZXJ0YWluIHR5cGVcIixcbiAgICAgICAgICAgICAgICBzaG9ydGN1dDogW1wiSVwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk1vclR5cGVcIixcbiAgICAgICAgICAgICAgICBtb3JUeXBlOiB7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogXCJIb21cIixcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogeyB0YWc6IFwiQmFzaWNcIiwgY29udGVudDogXCJFbnRpdHlcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbmFtZTogXCJNYXBzIHRvXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiT25lIGluZGl2aWR1YWwgbWFwcGVkIHRvIGFub3RoZXJcIixcbiAgICAgICAgICAgICAgICBzaG9ydGN1dDogW1wiTVwiXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGFnOiBcIk1vclR5cGVcIixcbiAgICAgICAgICAgICAgICBtb3JUeXBlOiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcIkF0dHJcIiB9LFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQXR0cmlidXRlXCIsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiRGF0YSBhdHRyaWJ1dGUgb2YgYW4gaW5kaXZpZHVhbFwiLFxuICAgICAgICAgICAgICAgIHNob3J0Y3V0OiBbXCJBXCJdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0YWc6IFwiT2JUeXBlXCIsXG4gICAgICAgICAgICAgICAgb2JUeXBlOiB7IHRhZzogXCJCYXNpY1wiLCBjb250ZW50OiBcIkF0dHJUeXBlXCIgfSxcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkF0dHJpYnV0ZSB2YXJpYWJsZVwiLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlZhcmlhYmxlIHRoYXQgY2FuIGJlIGJvdW5kIHRvIGF0dHJpYnV0ZSB2YWx1ZXNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIG1vZGVsQW5hbHlzZXM6IFtcbiAgICAgICAgICAgIGFuYWx5c2VzLm1vZGVsR3JhcGgoe1xuICAgICAgICAgICAgICAgIGlkOiBcImRpYWdyYW1cIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlZpc3VhbGl6YXRpb25cIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJWaXN1YWxpemUgdGhlIHNjaGVtYSBhcyBhIGdyYXBoXCIsXG4gICAgICAgICAgICAgICAgaGVscDogXCJ2aXN1YWxpemF0aW9uXCIsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGFuYWx5c2VzLnNjaGVtYUVSRCh7XG4gICAgICAgICAgICAgICAgaWQ6IFwiZXJkXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJFbnRpdHktcmVsYXRpb25zaGlwIGRpYWdyYW1cIixcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJWaXN1YWxpemUgdGhlIHNjaGVtYSBhcyBhbiBlbnRpdHktcmVsYXRpb25zaGlwIGRpYWdyYW1cIixcbiAgICAgICAgICAgICAgICBoZWxwOiBcInNjaGVtYS1lcmRcIixcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgYW5hbHlzZXMucmVuZGVyU1FMKHtcbiAgICAgICAgICAgICAgICBpZDogXCJzcWxcIixcbiAgICAgICAgICAgICAgICByZW5kZXI6IChtb2RlbCwgZGF0YSkgPT4gdGhTY2hlbWEucmVuZGVyU1FMKG1vZGVsLCBkYXRhKSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgICBkaWFncmFtQW5hbHlzZXM6IGRpYWdyYW1BbmFseXNlcyxcbiAgICB9KTtcbn1cbiJdLCJmaWxlIjoiYXNzZXRzL3NpbXBsZS1zY2hlbWEtQlI5dF9jelYuanMifQ==