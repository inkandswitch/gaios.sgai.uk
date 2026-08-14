import { template, insert, createComponent } from 'solid-js/web';
import { E as ExpandableTable } from './analysis_tool-Bvgm6Cie.js';
import { B as BlockTitle } from './block_title-uR6Pe8mS.js';
import 'solid-js';
import { K as KatexDisplay } from './katex_display-k2mTSuaU.js';
import { M as MassActionConfigForm } from './mass_action_config_form-ClqtYtNk.js';
import { b as createModelODELatex } from './model_ode_plot-LLQrAki8.js';
/* empty css                    */
import './document-BaPUF-Ky.js';
import './notebook-DqARNRKu.js';
import 'solid-js/store';
import '@automerge/automerge-repo';
import '@automerge/automerge-repo-network-websocket';
import '@automerge/automerge-repo-storage-indexeddb';
import '@automerge/automerge/slim';
import '@automerge/automerge';
import './model-B9uNSW6J.js';
import './index-CvS5Jq0z.js';

var _tmpl$ = /* @__PURE__ */ template(`<div class=simulation>`);
function MassActionEquationsDisplay(props) {
  const latexEquations = createModelODELatex(() => props.liveModel.validatedModel(), (model) => props.getEquations(model, props.content));
  return (() => {
    var _el$ = _tmpl$();
    insert(_el$, createComponent(BlockTitle, {
      get title() {
        return props.title;
      },
      get settingsPane() {
        return createComponent(MassActionConfigForm, {
          get config() {
            return props.content;
          },
          get changeConfig() {
            return props.changeContent;
          },
          get enableGranularity() {
            return props.ratesHaveGranularity;
          }
        });
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

export { MassActionEquationsDisplay as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFzc19hY3Rpb25fZXF1YXRpb25zLUQwVkpHQk9VLmpzIiwic291cmNlcyI6WyIuLi8uLi8uLi9mcm9udGVuZC9zcmMvc3RkbGliL2FuYWx5c2VzL21hc3NfYWN0aW9uX2VxdWF0aW9ucy50c3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmxvY2tUaXRsZSwgRXhwYW5kYWJsZVRhYmxlLCBLYXRleERpc3BsYXkgfSBmcm9tIFwiY2F0Y29sYWItdWktY29tcG9uZW50c1wiO1xuaW1wb3J0IHR5cGUgeyBNYXNzQWN0aW9uRXF1YXRpb25zRGF0YSB9IGZyb20gXCJjYXRsb2ctd2FzbVwiO1xuaW1wb3J0IHR5cGUgeyBNb2RlbEFuYWx5c2lzUHJvcHMgfSBmcm9tIFwiLi4vLi4vYW5hbHlzaXNcIjtcbmltcG9ydCB7IE1hc3NBY3Rpb25Db25maWdGb3JtIH0gZnJvbSBcIi4vbWFzc19hY3Rpb25fY29uZmlnX2Zvcm1cIjtcbmltcG9ydCB7IGNyZWF0ZU1vZGVsT0RFTGF0ZXggfSBmcm9tIFwiLi9tb2RlbF9vZGVfcGxvdFwiO1xuaW1wb3J0IHR5cGUgeyBNYXNzQWN0aW9uRXF1YXRpb25zIH0gZnJvbSBcIi4vc2ltdWxhdG9yX3R5cGVzXCI7XG5cbmltcG9ydCBcIi4vc2ltdWxhdGlvbi5jc3NcIjtcblxuLyoqIERpc3BsYXkgdGhlIHN5bWJvbGljIG1hc3MtYWN0aW9uIGR5bmFtaWNzIGVxdWF0aW9ucyBmb3IgYSBtb2RlbC4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1hc3NBY3Rpb25FcXVhdGlvbnNEaXNwbGF5KFxuICAgIHByb3BzOiBNb2RlbEFuYWx5c2lzUHJvcHM8TWFzc0FjdGlvbkVxdWF0aW9uc0RhdGE+ICYge1xuICAgICAgICBjb250ZW50OiBNYXNzQWN0aW9uRXF1YXRpb25zRGF0YTtcbiAgICAgICAgZ2V0RXF1YXRpb25zOiBNYXNzQWN0aW9uRXF1YXRpb25zO1xuICAgICAgICByYXRlc0hhdmVHcmFudWxhcml0eTogYm9vbGVhbjtcbiAgICAgICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgfSxcbikge1xuICAgIGNvbnN0IGxhdGV4RXF1YXRpb25zID0gY3JlYXRlTW9kZWxPREVMYXRleChcbiAgICAgICAgKCkgPT4gcHJvcHMubGl2ZU1vZGVsLnZhbGlkYXRlZE1vZGVsKCksXG4gICAgICAgIChtb2RlbCkgPT4gcHJvcHMuZ2V0RXF1YXRpb25zKG1vZGVsLCBwcm9wcy5jb250ZW50KSxcbiAgICApO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzcz1cInNpbXVsYXRpb25cIj5cbiAgICAgICAgICAgIDxCbG9ja1RpdGxlXG4gICAgICAgICAgICAgICAgdGl0bGU9e3Byb3BzLnRpdGxlfVxuICAgICAgICAgICAgICAgIHNldHRpbmdzUGFuZT17XG4gICAgICAgICAgICAgICAgICAgIDxNYXNzQWN0aW9uQ29uZmlnRm9ybVxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnPXtwcm9wcy5jb250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlQ29uZmlnPXtwcm9wcy5jaGFuZ2VDb250ZW50fVxuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlR3JhbnVsYXJpdHk9e3Byb3BzLnJhdGVzSGF2ZUdyYW51bGFyaXR5fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RXhwYW5kYWJsZVRhYmxlXG4gICAgICAgICAgICAgICAgcm93cz17bGF0ZXhFcXVhdGlvbnMoKSA/PyBbXX1cbiAgICAgICAgICAgICAgICB0aHJlc2hvbGQ9ezIwfVxuICAgICAgICAgICAgICAgIGNvbHVtbnM9e1tcbiAgICAgICAgICAgICAgICAgICAgeyBjZWxsOiAocm93KSA9PiA8S2F0ZXhEaXNwbGF5IG1hdGg9e3Jvdy5saHN9IC8+IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgY2VsbDogKCkgPT4gPEthdGV4RGlzcGxheSBtYXRoPVwiPVwiIC8+IH0sXG4gICAgICAgICAgICAgICAgICAgIHsgY2VsbDogKHJvdykgPT4gPEthdGV4RGlzcGxheSBtYXRoPXtyb3cucmhzfSAvPiB9LFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIk1hc3NBY3Rpb25FcXVhdGlvbnNEaXNwbGF5IiwicHJvcHMiLCJsYXRleEVxdWF0aW9ucyIsImNyZWF0ZU1vZGVsT0RFTGF0ZXgiLCJsaXZlTW9kZWwiLCJ2YWxpZGF0ZWRNb2RlbCIsIm1vZGVsIiwiZ2V0RXF1YXRpb25zIiwiY29udGVudCIsIl9lbCQiLCJfdG1wbCQiLCJfJGluc2VydCIsIl8kY3JlYXRlQ29tcG9uZW50IiwiQmxvY2tUaXRsZSIsInRpdGxlIiwic2V0dGluZ3NQYW5lIiwiTWFzc0FjdGlvbkNvbmZpZ0Zvcm0iLCJjb25maWciLCJjaGFuZ2VDb25maWciLCJjaGFuZ2VDb250ZW50IiwiZW5hYmxlR3JhbnVsYXJpdHkiLCJyYXRlc0hhdmVHcmFudWxhcml0eSIsIkV4cGFuZGFibGVUYWJsZSIsInJvd3MiLCJ0aHJlc2hvbGQiLCJjb2x1bW5zIiwiY2VsbCIsInJvdyIsIkthdGV4RGlzcGxheSIsIm1hdGgiLCJsaHMiLCJyaHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBVUEsU0FBd0JBLDJCQUNwQkMsS0FNRixFQUFBO0FBQ0UsRUFBQSxNQUFNQyxjQUFpQkMsR0FBQUEsbUJBQUFBLENBQ25CLE1BQU1GLEtBQUFBLENBQU1HLFNBQVVDLENBQUFBLGNBQUFBLEVBQ3JCQyxFQUFBQSxDQUFBQSxLQUFBQSxLQUFVTCxLQUFNTSxDQUFBQSxZQUFBQSxDQUFhRCxLQUFPTCxFQUFBQSxLQUFBQSxDQUFNTyxPQUFPLENBQ3RELENBQUE7QUFFQSxFQUFBLE9BQUEsQ0FBQSxNQUFBO0FBQUEsSUFBQSxJQUFBQyxPQUFBQyxNQUFBLEVBQUE7QUFBQUMsSUFBQUYsTUFBQUEsQ0FBQUEsSUFBQUEsRUFBQUcsZ0JBRVNDLFVBQVUsRUFBQTtBQUFBLE1BQUEsSUFDUEMsS0FBSyxHQUFBO0FBQUEsUUFBQSxPQUFFYixLQUFNYSxDQUFBQSxLQUFBQTtBQUFBQSxPQUFLO0FBQUEsTUFBQSxJQUNsQkMsWUFBWSxHQUFBO0FBQUEsUUFBQSxPQUFBSCxnQkFDUEksb0JBQW9CLEVBQUE7QUFBQSxVQUFBLElBQ2pCQyxNQUFNLEdBQUE7QUFBQSxZQUFBLE9BQUVoQixLQUFNTyxDQUFBQSxPQUFBQTtBQUFBQSxXQUFPO0FBQUEsVUFBQSxJQUNyQlUsWUFBWSxHQUFBO0FBQUEsWUFBQSxPQUFFakIsS0FBTWtCLENBQUFBLGFBQUFBO0FBQUFBLFdBQWE7QUFBQSxVQUFBLElBQ2pDQyxpQkFBaUIsR0FBQTtBQUFBLFlBQUEsT0FBRW5CLEtBQU1vQixDQUFBQSxvQkFBQUE7QUFBQUE7QUFBb0IsU0FBQSxDQUFBO0FBQUE7QUFBQSxLQUFBLEdBQUEsSUFBQSxDQUFBO0FBQUFWLElBQUFGLE1BQUFBLENBQUFBLElBQUFBLEVBQUFHLGdCQUl4RFUsZUFBZSxFQUFBO0FBQUEsTUFBQSxJQUNaQyxJQUFJLEdBQUE7QUFBQSxRQUFFckIsT0FBQUEsY0FBQUEsTUFBb0IsRUFBRTtBQUFBLE9BQUE7QUFBQSxNQUM1QnNCLFNBQVcsRUFBQSxFQUFBO0FBQUEsTUFDWEMsU0FBUyxDQUNMO0FBQUEsUUFBRUMsSUFBQUEsRUFBT0MsQ0FBR2YsR0FBQUEsS0FBQUEsZUFBQUEsQ0FBTWdCLFlBQVksRUFBQTtBQUFBLFVBQUEsSUFBQ0MsSUFBSSxHQUFBO0FBQUEsWUFBQSxPQUFFRixHQUFJRyxDQUFBQSxHQUFBQTtBQUFBQTtBQUFHLFNBQUE7QUFBQSxPQUM1QyxFQUFBO0FBQUEsUUFBRUosSUFBQUEsRUFBTUEsTUFBQWQsZUFBQUEsQ0FBT2dCLFlBQVksRUFBQTtBQUFBLFVBQUNDLElBQUksRUFBQTtBQUFBLFNBQUE7QUFBQSxPQUNoQyxFQUFBO0FBQUEsUUFBRUgsSUFBQUEsRUFBT0MsQ0FBR2YsR0FBQUEsS0FBQUEsZUFBQUEsQ0FBTWdCLFlBQVksRUFBQTtBQUFBLFVBQUEsSUFBQ0MsSUFBSSxHQUFBO0FBQUEsWUFBQSxPQUFFRixHQUFJSSxDQUFBQSxHQUFBQTtBQUFBQTtBQUFHLFNBQUE7QUFBQSxPQUFNO0FBQUEsS0FDckQsR0FBQSxJQUFBLENBQUE7QUFBQSxJQUFBdEIsT0FBQUEsSUFBQUE7QUFBQUEsR0FBQSxHQUFBO0FBSWpCOzs7OyJ9
