const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./model_datatype-BqWX6kTf.js","./model-hspTLkzk.js","./model_tool-C831Zdul.js","./analysis_tool-Dx9JOKUM.js"])))=>i.map(i=>d[i]);
const scriptRel = 'modulepreload';const assetsURL = function(dep, importerUrl) { return new URL(dep, importerUrl).href };const seen = {};const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (true && deps && deps.length > 0) {
    const links = document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector(
      "meta[property=csp-nonce]"
    );
    const cspNonce = cspNonceMeta?.nonce || cspNonceMeta?.getAttribute("nonce");
    promise = Promise.allSettled(
      deps.map((dep) => {
        dep = assetsURL(dep, importerUrl);
        if (dep in seen) return;
        seen[dep] = true;
        const isCss = dep.endsWith(".css");
        const cssSelector = isCss ? '[rel="stylesheet"]' : "";
        const isBaseRelative = !!importerUrl;
        if (isBaseRelative) {
          for (let i = links.length - 1; i >= 0; i--) {
            const link2 = links[i];
            if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
              return;
            }
          }
        } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
          return;
        }
        const link = document.createElement("link");
        link.rel = isCss ? "stylesheet" : scriptRel;
        if (!isCss) {
          link.as = "script";
        }
        link.crossOrigin = "";
        link.href = dep;
        if (cspNonce) {
          link.setAttribute("nonce", cspNonce);
        }
        document.head.appendChild(link);
        if (isCss) {
          return new Promise((res, rej) => {
            link.addEventListener("load", res);
            link.addEventListener(
              "error",
              () => rej(new Error(`Unable to preload CSS for ${dep}`))
            );
          });
        }
      })
    );
  }
  function handlePreloadError(err) {
    const e = new Event("vite:preloadError", {
      cancelable: true
    });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  }
  return promise.then((res) => {
    for (const item of res || []) {
      if (item.status !== "rejected") continue;
      handlePreloadError(item.reason);
    }
    return baseModule().catch(handlePreloadError);
  });
};

const plugins = [
  {
    type: "patchwork:datatype",
    id: "catcolab-model",
    name: "CatColab Model",
    icon: "Zap",
    async load() {
      const { dataType } = await __vitePreload(async () => { const { dataType } = await import('./model_datatype-BqWX6kTf.js');return { dataType }},true?__vite__mapDeps([0,1]):undefined,import.meta.url);
      return dataType;
    }
  },
  {
    type: "patchwork:tool",
    id: "catcolab-model",
    name: "CatColab",
    icon: "Zap",
    supportedDatatypes: ["catcolab-model"],
    async load() {
      const { renderModelTool } = await __vitePreload(async () => { const { renderModelTool } = await import('./model_tool-C831Zdul.js');return { renderModelTool }},true?__vite__mapDeps([2,3,1]):undefined,import.meta.url);
      return renderModelTool;
    }
  },
  {
    type: "patchwork:datatype",
    id: "catcolab-analysis",
    name: "CatColab Analysis",
    icon: "ChartSpline",
    // A blank analysis references no model, so hide it from the "new
    // document" menu; the model tool creates an analysis automatically
    // for every model instead.
    unlisted: true,
    async load() {
      const { dataType } = await __vitePreload(async () => { const { dataType } = await import('./analysis_datatype-g8frpfsR.js');return { dataType }},true?[]:undefined,import.meta.url);
      return dataType;
    }
  },
  {
    type: "patchwork:tool",
    id: "catcolab-analysis",
    name: "CatColab Analysis",
    icon: "ChartSpline",
    supportedDatatypes: ["catcolab-analysis"],
    async load() {
      const { renderAnalysisTool } = await __vitePreload(async () => { const { renderAnalysisTool } = await import('./analysis_tool-Dx9JOKUM.js').then(n => n._);return { renderAnalysisTool }},true?__vite__mapDeps([3,1]):undefined,import.meta.url);
      return renderAnalysisTool;
    }
  },
  {
    // Instruction pack for Patchwork's chat computer (the `llm:skill`
    // type the chat tool consumes): how to build and edit stock-and-flow
    // models and their mass-action analyses with the generic document
    // tools. Auto-activates when a CatColab doc is focused.
    type: "llm:skill",
    id: "catcolab-stock-flow",
    name: "CatColab Stock & Flow",
    description: "Create and edit CatColab stock-and-flow models and mass-action simulation analyses. Applies when the focused document is a CatColab model/analysis, or when the user asks to model a system-dynamics problem.",
    datatypes: ["catcolab-model", "catcolab-analysis"],
    async load() {
      const { skill } = await __vitePreload(async () => { const { skill } = await import('./llm_skill-CNPSW-oK.js');return { skill }},true?[]:undefined,import.meta.url);
      return skill;
    }
  }
];

export { __vitePreload as _, plugins as p };


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sTUFBTSxPQUFVO0FBQUEsQ0FDbkI7QUFBQSxDQUNJLE9BQU07QUFBQSxDQUNOLEtBQUk7QUFBQSxDQUNKLE9BQU07QUFBQSxDQUNOLE9BQU07QUFBQSxDQUNOLFNBQU0sSUFBTztBQUNULFlBQU0sQ0FBRSxVQUFhLGlFQUFNLE1BQU8sK0JBQWtCO0FBQ3BELE1BQU87QUFBQTtBQUNYLENBQ0o7QUFBQSxDQUNBO0FBQUEsQ0FDSSxPQUFNO0FBQUEsQ0FDTixLQUFJO0FBQUEsQ0FDSixPQUFNO0FBQUEsQ0FDTixPQUFNO0FBQUEsSUFDTixvQkFBb0IsQ0FBQyxnQkFBZ0I7QUFBQSxDQUNyQyxTQUFNLElBQU87QUFDVCxZQUFNLENBQUUsaUJBQW9CLHdFQUFNLE1BQU8sMkJBQWM7QUFDdkQsTUFBTztBQUFBO0FBQ1gsQ0FDSjtBQUFBLENBQ0E7QUFBQSxDQUNJLE9BQU07QUFBQSxDQUNOLEtBQUk7QUFBQSxDQUNKLE9BQU07QUFBQSxDQUNOLE9BQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUlOLFdBQVU7QUFBQSxDQUNWLFNBQU0sSUFBTztBQUNULFlBQU0sQ0FBRSxVQUFhLGlFQUFNLE1BQU8sa0NBQXFCO0FBQ3ZELE1BQU87QUFBQTtBQUNYLENBQ0o7QUFBQSxDQUNBO0FBQUEsQ0FDSSxPQUFNO0FBQUEsQ0FDTixLQUFJO0FBQUEsQ0FDSixPQUFNO0FBQUEsQ0FDTixPQUFNO0FBQUEsSUFDTixvQkFBb0IsQ0FBQyxtQkFBbUI7QUFBQSxDQUN4QyxTQUFNLElBQU87QUFDVCxZQUFNLENBQUUsb0JBQXVCLDJFQUFNLE1BQU8sOEJBQWlCO0FBQzdELE1BQU87QUFBQTtBQUNYLENBQ0o7QUFBQSxDQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUtJLE9BQU07QUFBQSxDQUNOLEtBQUk7QUFBQSxDQUNKLE9BQU07QUFBQSxDQUNOLGNBQ0k7QUFBQSxJQUNKLFVBQVcsRUFBQyxrQkFBa0IsbUJBQW1CO0FBQUEsQ0FDakQsU0FBTSxJQUFPO0FBQ1QsWUFBTSxDQUFFLE9BQVUsOERBQU0sTUFBTywwQkFBYTtBQUM1QyxNQUFPO0FBQUE7QUFDWDtBQUVSIiwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHBsdWdpbnMgPSBbXG4gICAge1xuICAgICAgICB0eXBlOiBcInBhdGNod29yazpkYXRhdHlwZVwiLFxuICAgICAgICBpZDogXCJjYXRjb2xhYi1tb2RlbFwiLFxuICAgICAgICBuYW1lOiBcIkNhdENvbGFiIE1vZGVsXCIsXG4gICAgICAgIGljb246IFwiWmFwXCIsXG4gICAgICAgIGFzeW5jIGxvYWQoKSB7XG4gICAgICAgICAgICBjb25zdCB7IGRhdGFUeXBlIH0gPSBhd2FpdCBpbXBvcnQoXCIuL21vZGVsX2RhdGF0eXBlXCIpO1xuICAgICAgICAgICAgcmV0dXJuIGRhdGFUeXBlO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICB0eXBlOiBcInBhdGNod29yazp0b29sXCIsXG4gICAgICAgIGlkOiBcImNhdGNvbGFiLW1vZGVsXCIsXG4gICAgICAgIG5hbWU6IFwiQ2F0Q29sYWJcIixcbiAgICAgICAgaWNvbjogXCJaYXBcIixcbiAgICAgICAgc3VwcG9ydGVkRGF0YXR5cGVzOiBbXCJjYXRjb2xhYi1tb2RlbFwiXSxcbiAgICAgICAgYXN5bmMgbG9hZCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVuZGVyTW9kZWxUb29sIH0gPSBhd2FpdCBpbXBvcnQoXCIuL21vZGVsX3Rvb2xcIik7XG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyTW9kZWxUb29sO1xuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICB0eXBlOiBcInBhdGNod29yazpkYXRhdHlwZVwiLFxuICAgICAgICBpZDogXCJjYXRjb2xhYi1hbmFseXNpc1wiLFxuICAgICAgICBuYW1lOiBcIkNhdENvbGFiIEFuYWx5c2lzXCIsXG4gICAgICAgIGljb246IFwiQ2hhcnRTcGxpbmVcIixcbiAgICAgICAgLy8gQSBibGFuayBhbmFseXNpcyByZWZlcmVuY2VzIG5vIG1vZGVsLCBzbyBoaWRlIGl0IGZyb20gdGhlIFwibmV3XG4gICAgICAgIC8vIGRvY3VtZW50XCIgbWVudTsgdGhlIG1vZGVsIHRvb2wgY3JlYXRlcyBhbiBhbmFseXNpcyBhdXRvbWF0aWNhbGx5XG4gICAgICAgIC8vIGZvciBldmVyeSBtb2RlbCBpbnN0ZWFkLlxuICAgICAgICB1bmxpc3RlZDogdHJ1ZSxcbiAgICAgICAgYXN5bmMgbG9hZCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YVR5cGUgfSA9IGF3YWl0IGltcG9ydChcIi4vYW5hbHlzaXNfZGF0YXR5cGVcIik7XG4gICAgICAgICAgICByZXR1cm4gZGF0YVR5cGU7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHR5cGU6IFwicGF0Y2h3b3JrOnRvb2xcIixcbiAgICAgICAgaWQ6IFwiY2F0Y29sYWItYW5hbHlzaXNcIixcbiAgICAgICAgbmFtZTogXCJDYXRDb2xhYiBBbmFseXNpc1wiLFxuICAgICAgICBpY29uOiBcIkNoYXJ0U3BsaW5lXCIsXG4gICAgICAgIHN1cHBvcnRlZERhdGF0eXBlczogW1wiY2F0Y29sYWItYW5hbHlzaXNcIl0sXG4gICAgICAgIGFzeW5jIGxvYWQoKSB7XG4gICAgICAgICAgICBjb25zdCB7IHJlbmRlckFuYWx5c2lzVG9vbCB9ID0gYXdhaXQgaW1wb3J0KFwiLi9hbmFseXNpc190b29sXCIpO1xuICAgICAgICAgICAgcmV0dXJuIHJlbmRlckFuYWx5c2lzVG9vbDtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgLy8gSW5zdHJ1Y3Rpb24gcGFjayBmb3IgUGF0Y2h3b3JrJ3MgY2hhdCBjb21wdXRlciAodGhlIGBsbG06c2tpbGxgXG4gICAgICAgIC8vIHR5cGUgdGhlIGNoYXQgdG9vbCBjb25zdW1lcyk6IGhvdyB0byBidWlsZCBhbmQgZWRpdCBzdG9jay1hbmQtZmxvd1xuICAgICAgICAvLyBtb2RlbHMgYW5kIHRoZWlyIG1hc3MtYWN0aW9uIGFuYWx5c2VzIHdpdGggdGhlIGdlbmVyaWMgZG9jdW1lbnRcbiAgICAgICAgLy8gdG9vbHMuIEF1dG8tYWN0aXZhdGVzIHdoZW4gYSBDYXRDb2xhYiBkb2MgaXMgZm9jdXNlZC5cbiAgICAgICAgdHlwZTogXCJsbG06c2tpbGxcIixcbiAgICAgICAgaWQ6IFwiY2F0Y29sYWItc3RvY2stZmxvd1wiLFxuICAgICAgICBuYW1lOiBcIkNhdENvbGFiIFN0b2NrICYgRmxvd1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiQ3JlYXRlIGFuZCBlZGl0IENhdENvbGFiIHN0b2NrLWFuZC1mbG93IG1vZGVscyBhbmQgbWFzcy1hY3Rpb24gc2ltdWxhdGlvbiBhbmFseXNlcy4gQXBwbGllcyB3aGVuIHRoZSBmb2N1c2VkIGRvY3VtZW50IGlzIGEgQ2F0Q29sYWIgbW9kZWwvYW5hbHlzaXMsIG9yIHdoZW4gdGhlIHVzZXIgYXNrcyB0byBtb2RlbCBhIHN5c3RlbS1keW5hbWljcyBwcm9ibGVtLlwiLFxuICAgICAgICBkYXRhdHlwZXM6IFtcImNhdGNvbGFiLW1vZGVsXCIsIFwiY2F0Y29sYWItYW5hbHlzaXNcIl0sXG4gICAgICAgIGFzeW5jIGxvYWQoKSB7XG4gICAgICAgICAgICBjb25zdCB7IHNraWxsIH0gPSBhd2FpdCBpbXBvcnQoXCIuL2xsbV9za2lsbFwiKTtcbiAgICAgICAgICAgIHJldHVybiBza2lsbDtcbiAgICAgICAgfSxcbiAgICB9LFxuXTtcbiJdLCJmaWxlIjoiYXNzZXRzL2luZGV4LUN5ZmN6TnlXLmpzIn0=