const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./model_datatype-BCdX_gkc.js","./notebook-DqARNRKu.js","./model-B9uNSW6J.js","./model_tool-CYQUPkgl.js","./document-BaPUF-Ky.js","./analysis_tool-Bvgm6Cie.js","./analysis_datatype-B97xUwYW.js"])))=>i.map(i=>d[i]);
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
      const { dataType } = await __vitePreload(async () => { const { dataType } = await import('./model_datatype-BCdX_gkc.js');return { dataType }},true?__vite__mapDeps([0,1,2]):undefined,import.meta.url);
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
      const { renderModelTool } = await __vitePreload(async () => { const { renderModelTool } = await import('./model_tool-CYQUPkgl.js');return { renderModelTool }},true?__vite__mapDeps([3,4,1,5,2]):undefined,import.meta.url);
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
      const { dataType } = await __vitePreload(async () => { const { dataType } = await import('./analysis_datatype-B97xUwYW.js');return { dataType }},true?__vite__mapDeps([6,4,1]):undefined,import.meta.url);
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
      const { renderAnalysisTool } = await __vitePreload(async () => { const { renderAnalysisTool } = await import('./analysis_tool-Bvgm6Cie.js').then(n => n.y);return { renderAnalysisTool }},true?__vite__mapDeps([5,4,1,2]):undefined,import.meta.url);
      return renderAnalysisTool;
    }
  }
];

export { __vitePreload as _, plugins as p };


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sTUFBTSxPQUFVO0FBQUEsQ0FDbkI7QUFBQSxDQUNJLE9BQU07QUFBQSxDQUNOLEtBQUk7QUFBQSxDQUNKLE9BQU07QUFBQSxDQUNOLE9BQU07QUFBQSxDQUNOLFNBQU0sSUFBTztBQUNULFlBQU0sQ0FBRSxVQUFhLGlFQUFNLE1BQU8sK0JBQWtCO0FBQ3BELE1BQU87QUFBQTtBQUNYLENBQ0o7QUFBQSxDQUNBO0FBQUEsQ0FDSSxPQUFNO0FBQUEsQ0FDTixLQUFJO0FBQUEsQ0FDSixPQUFNO0FBQUEsQ0FDTixPQUFNO0FBQUEsSUFDTixvQkFBb0IsQ0FBQyxnQkFBZ0I7QUFBQSxDQUNyQyxTQUFNLElBQU87QUFDVCxZQUFNLENBQUUsaUJBQW9CLHdFQUFNLE1BQU8sMkJBQWM7QUFDdkQsTUFBTztBQUFBO0FBQ1gsQ0FDSjtBQUFBLENBQ0E7QUFBQSxDQUNJLE9BQU07QUFBQSxDQUNOLEtBQUk7QUFBQSxDQUNKLE9BQU07QUFBQSxDQUNOLE9BQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUlOLFdBQVU7QUFBQSxDQUNWLFNBQU0sSUFBTztBQUNULFlBQU0sQ0FBRSxVQUFhLGlFQUFNLE1BQU8sa0NBQXFCO0FBQ3ZELE1BQU87QUFBQTtBQUNYLENBQ0o7QUFBQSxDQUNBO0FBQUEsQ0FDSSxPQUFNO0FBQUEsQ0FDTixLQUFJO0FBQUEsQ0FDSixPQUFNO0FBQUEsQ0FDTixPQUFNO0FBQUEsSUFDTixvQkFBb0IsQ0FBQyxtQkFBbUI7QUFBQSxDQUN4QyxTQUFNLElBQU87QUFDVCxZQUFNLENBQUUsb0JBQXVCLDJFQUFNLE1BQU8sOEJBQWlCO0FBQzdELE1BQU87QUFBQTtBQUNYO0FBRVIiLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcGx1Z2lucyA9IFtcbiAgICB7XG4gICAgICAgIHR5cGU6IFwicGF0Y2h3b3JrOmRhdGF0eXBlXCIsXG4gICAgICAgIGlkOiBcImNhdGNvbGFiLW1vZGVsXCIsXG4gICAgICAgIG5hbWU6IFwiQ2F0Q29sYWIgTW9kZWxcIixcbiAgICAgICAgaWNvbjogXCJaYXBcIixcbiAgICAgICAgYXN5bmMgbG9hZCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZGF0YVR5cGUgfSA9IGF3YWl0IGltcG9ydChcIi4vbW9kZWxfZGF0YXR5cGVcIik7XG4gICAgICAgICAgICByZXR1cm4gZGF0YVR5cGU7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHR5cGU6IFwicGF0Y2h3b3JrOnRvb2xcIixcbiAgICAgICAgaWQ6IFwiY2F0Y29sYWItbW9kZWxcIixcbiAgICAgICAgbmFtZTogXCJDYXRDb2xhYlwiLFxuICAgICAgICBpY29uOiBcIlphcFwiLFxuICAgICAgICBzdXBwb3J0ZWREYXRhdHlwZXM6IFtcImNhdGNvbGFiLW1vZGVsXCJdLFxuICAgICAgICBhc3luYyBsb2FkKCkge1xuICAgICAgICAgICAgY29uc3QgeyByZW5kZXJNb2RlbFRvb2wgfSA9IGF3YWl0IGltcG9ydChcIi4vbW9kZWxfdG9vbFwiKTtcbiAgICAgICAgICAgIHJldHVybiByZW5kZXJNb2RlbFRvb2w7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHR5cGU6IFwicGF0Y2h3b3JrOmRhdGF0eXBlXCIsXG4gICAgICAgIGlkOiBcImNhdGNvbGFiLWFuYWx5c2lzXCIsXG4gICAgICAgIG5hbWU6IFwiQ2F0Q29sYWIgQW5hbHlzaXNcIixcbiAgICAgICAgaWNvbjogXCJDaGFydFNwbGluZVwiLFxuICAgICAgICAvLyBBIGJsYW5rIGFuYWx5c2lzIHJlZmVyZW5jZXMgbm8gbW9kZWwsIHNvIGhpZGUgaXQgZnJvbSB0aGUgXCJuZXdcbiAgICAgICAgLy8gZG9jdW1lbnRcIiBtZW51OyB0aGUgbW9kZWwgdG9vbCBjcmVhdGVzIGFuIGFuYWx5c2lzIGF1dG9tYXRpY2FsbHlcbiAgICAgICAgLy8gZm9yIGV2ZXJ5IG1vZGVsIGluc3RlYWQuXG4gICAgICAgIHVubGlzdGVkOiB0cnVlLFxuICAgICAgICBhc3luYyBsb2FkKCkge1xuICAgICAgICAgICAgY29uc3QgeyBkYXRhVHlwZSB9ID0gYXdhaXQgaW1wb3J0KFwiLi9hbmFseXNpc19kYXRhdHlwZVwiKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhVHlwZTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdHlwZTogXCJwYXRjaHdvcms6dG9vbFwiLFxuICAgICAgICBpZDogXCJjYXRjb2xhYi1hbmFseXNpc1wiLFxuICAgICAgICBuYW1lOiBcIkNhdENvbGFiIEFuYWx5c2lzXCIsXG4gICAgICAgIGljb246IFwiQ2hhcnRTcGxpbmVcIixcbiAgICAgICAgc3VwcG9ydGVkRGF0YXR5cGVzOiBbXCJjYXRjb2xhYi1hbmFseXNpc1wiXSxcbiAgICAgICAgYXN5bmMgbG9hZCgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVuZGVyQW5hbHlzaXNUb29sIH0gPSBhd2FpdCBpbXBvcnQoXCIuL2FuYWx5c2lzX3Rvb2xcIik7XG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyQW5hbHlzaXNUb29sO1xuICAgICAgICB9LFxuICAgIH0sXG5dO1xuIl0sImZpbGUiOiJhc3NldHMvaW5kZXgtQ3ZTNUpxMHouanMifQ==