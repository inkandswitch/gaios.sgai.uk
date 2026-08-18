import { template, insert, createComponent } from 'solid-js/web';
import { E as ExpandableTable } from './analysis_tool-dmxyNWB4.js';
import { B as BlockTitle } from './block_title-Df1W6z2i.js';
import 'solid-js';
import { K as KatexDisplay } from './katex_display-7iUwHJ8a.js';
import { b as createModelODELatex } from './model_ode_plot-LLQrAki8.js';
/* empty css                    */
import './model-hspTLkzk.js';
import 'solid-js/store';
import '@automerge/automerge-repo';
import '@automerge/automerge-repo-network-websocket';
import '@automerge/automerge-repo-storage-indexeddb';
import '@automerge/automerge/slim';
import '@automerge/automerge';
import './index--5ogabjI.js';
import '@inkandswitch/patchwork-providers';

var _tmpl$ = /* @__PURE__ */ template(`<div class=simulation>`);
function PolynomialODEEquationsDisplay(props) {
  const latexEquations = createModelODELatex(() => props.liveModel.validatedModel(), (model) => props.getEquations(model, props.content));
  return (() => {
    var _el$ = _tmpl$();
    insert(_el$, createComponent(BlockTitle, {
      get title() {
        return props.title;
      }
    }), null);
    insert(_el$, createComponent(ExpandableTable, {
      get rows() {
        return latexEquations() ?? [];
      },
      threshold: 20,
      columns: [{
        cell: (row) => createComponent(KatexDisplay, {
          get math() {
            return row.lhs;
          }
        })
      }, {
        cell: () => createComponent(KatexDisplay, {
          math: "="
        })
      }, {
        cell: (row) => createComponent(KatexDisplay, {
          get math() {
            return row.rhs;
          }
        })
      }]
    }), null);
    return _el$;
  })();
}

export { PolynomialODEEquationsDisplay as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9seW5vbWlhbF9vZGVfZXF1YXRpb25zLURLdmNFZG1YLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9mcm9udGVuZC9zcmMvc3RkbGliL2FuYWx5c2VzL3BvbHlub21pYWxfb2RlX2VxdWF0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmxvY2tUaXRsZSwgRXhwYW5kYWJsZVRhYmxlLCBLYXRleERpc3BsYXkgfSBmcm9tIFwiY2F0Y29sYWItdWktY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgUG9seW5vbWlhbE9ERUVxdWF0aW9uc0RhdGEgfSBmcm9tIFwiY2F0bG9nLXdhc21cIjtcbmltcG9ydCB0eXBlIHsgTW9kZWxBbmFseXNpc1Byb3BzIH0gZnJvbSBcIi4uLy4uL2FuYWx5c2lzXCI7XG5pbXBvcnQgeyBjcmVhdGVNb2RlbE9ERUxhdGV4IH0gZnJvbSBcIi4vbW9kZWxfb2RlX3Bsb3RcIjtcbmltcG9ydCB0eXBlIHsgUG9seW5vbWlhbE9ERUVxdWF0aW9ucyB9IGZyb20gXCIuL3NpbXVsYXRvcl90eXBlc1wiO1xuXG5pbXBvcnQgXCIuL3NpbXVsYXRpb24uY3NzXCI7XG5cbi8qKiBEaXNwbGF5IHRoZSBzeW1ib2xpYyBtYXNzLWFjdGlvbiBkeW5hbWljcyBlcXVhdGlvbnMgZm9yIGEgbW9kZWwuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2x5bm9taWFsT0RFRXF1YXRpb25zRGlzcGxheShcbiAgICBwcm9wczogTW9kZWxBbmFseXNpc1Byb3BzPFBvbHlub21pYWxPREVFcXVhdGlvbnNEYXRhPiAmIHtcbiAgICAgICAgY29udGVudDogUG9seW5vbWlhbE9ERUVxdWF0aW9uc0RhdGE7XG4gICAgICAgIGdldEVxdWF0aW9uczogUG9seW5vbWlhbE9ERUVxdWF0aW9ucztcbiAgICAgICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgfSxcbikge1xuICAgIGNvbnN0IGxhdGV4RXF1YXRpb25zID0gY3JlYXRlTW9kZWxPREVMYXRleChcbiAgICAgICAgKCkgPT4gcHJvcHMubGl2ZU1vZGVsLnZhbGlkYXRlZE1vZGVsKCksXG4gICAgICAgIChtb2RlbCkgPT4gcHJvcHMuZ2V0RXF1YXRpb25zKG1vZGVsLCBwcm9wcy5jb250ZW50KSxcbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzcz1cInNpbXVsYXRpb25cIj5cbiAgICAgICAgICAgIDxCbG9ja1RpdGxlIHRpdGxlPXtwcm9wcy50aXRsZX0gLz5cbiAgICAgICAgICAgIDxFeHBhbmRhYmxlVGFibGVcbiAgICAgICAgICAgICAgICByb3dzPXtsYXRleEVxdWF0aW9ucygpID8/IFtdfVxuICAgICAgICAgICAgICAgIHRocmVzaG9sZD17MjB9XG4gICAgICAgICAgICAgICAgY29sdW1ucz17W1xuICAgICAgICAgICAgICAgICAgICB7IGNlbGw6IChyb3cpID0+IDxLYXRleERpc3BsYXkgbWF0aD17cm93Lmxoc30gLz4gfSxcbiAgICAgICAgICAgICAgICAgICAgeyBjZWxsOiAoKSA9PiA8S2F0ZXhEaXNwbGF5IG1hdGg9XCI9XCIgLz4gfSxcbiAgICAgICAgICAgICAgICAgICAgeyBjZWxsOiAocm93KSA9PiA8S2F0ZXhEaXNwbGF5IG1hdGg9e3Jvdy5yaHN9IC8+IH0sXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiUG9seW5vbWlhbE9ERUVxdWF0aW9uc0Rpc3BsYXkiLCJwcm9wcyIsImxhdGV4RXF1YXRpb25zIiwiY3JlYXRlTW9kZWxPREVMYXRleCIsImxpdmVNb2RlbCIsInZhbGlkYXRlZE1vZGVsIiwibW9kZWwiLCJnZXRFcXVhdGlvbnMiLCJjb250ZW50IiwiX2VsJCIsIl90bXBsJCIsIl8kaW5zZXJ0IiwiXyRjcmVhdGVDb21wb25lbnQiLCJCbG9ja1RpdGxlIiwidGl0bGUiLCJFeHBhbmRhYmxlVGFibGUiLCJyb3dzIiwidGhyZXNob2xkIiwiY29sdW1ucyIsImNlbGwiLCJyb3ciLCJLYXRleERpc3BsYXkiLCJtYXRoIiwibGhzIiwicmhzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTQSxTQUF3QkEsOEJBQ3BCQyxLQUtGLEVBQUE7QUFDRSxFQUFBLE1BQU1DLGNBQWlCQyxHQUFBQSxtQkFBQUEsQ0FDbkIsTUFBTUYsS0FBQUEsQ0FBTUcsU0FBVUMsQ0FBQUEsY0FBQUEsRUFDckJDLEVBQUFBLENBQUFBLEtBQUFBLEtBQVVMLEtBQU1NLENBQUFBLFlBQUFBLENBQWFELEtBQU9MLEVBQUFBLEtBQUFBLENBQU1PLE9BQU8sQ0FDdEQsQ0FBQTtBQUVBLEVBQUEsT0FBQSxDQUFBLE1BQUE7QUFBQSxJQUFBLElBQUFDLE9BQUFDLE1BQUEsRUFBQTtBQUFBQyxJQUFBRixNQUFBQSxDQUFBQSxJQUFBQSxFQUFBRyxnQkFFU0MsVUFBVSxFQUFBO0FBQUEsTUFBQSxJQUFDQyxLQUFLLEdBQUE7QUFBQSxRQUFBLE9BQUViLEtBQU1hLENBQUFBLEtBQUFBO0FBQUFBO0FBQUssS0FBQSxHQUFBLElBQUEsQ0FBQTtBQUFBSCxJQUFBRixNQUFBQSxDQUFBQSxJQUFBQSxFQUFBRyxnQkFDN0JHLGVBQWUsRUFBQTtBQUFBLE1BQUEsSUFDWkMsSUFBSSxHQUFBO0FBQUEsUUFBRWQsT0FBQUEsY0FBQUEsTUFBb0IsRUFBRTtBQUFBLE9BQUE7QUFBQSxNQUM1QmUsU0FBVyxFQUFBLEVBQUE7QUFBQSxNQUNYQyxTQUFTLENBQ0w7QUFBQSxRQUFFQyxJQUFBQSxFQUFPQyxDQUFHUixHQUFBQSxLQUFBQSxlQUFBQSxDQUFNUyxZQUFZLEVBQUE7QUFBQSxVQUFBLElBQUNDLElBQUksR0FBQTtBQUFBLFlBQUEsT0FBRUYsR0FBSUcsQ0FBQUEsR0FBQUE7QUFBQUE7QUFBRyxTQUFBO0FBQUEsT0FDNUMsRUFBQTtBQUFBLFFBQUVKLElBQUFBLEVBQU1BLE1BQUFQLGVBQUFBLENBQU9TLFlBQVksRUFBQTtBQUFBLFVBQUNDLElBQUksRUFBQTtBQUFBLFNBQUE7QUFBQSxPQUNoQyxFQUFBO0FBQUEsUUFBRUgsSUFBQUEsRUFBT0MsQ0FBR1IsR0FBQUEsS0FBQUEsZUFBQUEsQ0FBTVMsWUFBWSxFQUFBO0FBQUEsVUFBQSxJQUFDQyxJQUFJLEdBQUE7QUFBQSxZQUFBLE9BQUVGLEdBQUlJLENBQUFBLEdBQUFBO0FBQUFBO0FBQUcsU0FBQTtBQUFBLE9BQU07QUFBQSxLQUNyRCxHQUFBLElBQUEsQ0FBQTtBQUFBLElBQUFmLE9BQUFBLElBQUFBO0FBQUFBLEdBQUEsR0FBQTtBQUlqQjs7OzsifQ==
