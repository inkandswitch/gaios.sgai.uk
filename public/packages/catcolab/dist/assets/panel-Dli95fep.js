import { template, insert, createComponent, memo } from 'solid-js/web';
import { Show } from 'solid-js';
import './analysis_tool-Dx9JOKUM.js';

var _tmpl$ = /* @__PURE__ */ template(`<span class=filler>`), _tmpl$2 = /* @__PURE__ */ template(`<div class=panel-header><span class=title>`);
function PanelHeader(props) {
  return (() => {
    var _el$ = _tmpl$2(), _el$2 = _el$.firstChild;
    insert(_el$2, () => props.title);
    insert(_el$, createComponent(Show, {
      get when() {
        return props.children;
      },
      get children() {
        return [_tmpl$(), memo(() => props.children)];
      }
    }), null);
    return _el$;
  })();
}

export { PanelHeader as P };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFuZWwtRGxpOTVmZXAuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3VpLWNvbXBvbmVudHMvc3JjL3BhbmVsLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0eXBlIEpTWCwgU2hvdyB9IGZyb20gXCJzb2xpZC1qc1wiO1xuXG5pbXBvcnQgXCIuL3BhbmVsLmNzc1wiO1xuXG4vKiogSGVhZGVyIGZvciBhIHBhbmVsIHdpdGggYSB0aXRsZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFBhbmVsSGVhZGVyKHByb3BzOiB7XG4gICAgLyoqIFRpdGxlIHNob3duIGF0IHRoZSB0b3Agb2YgdGhlIHBhbmVsLiAqL1xuICAgIHRpdGxlOiBzdHJpbmcgfCBKU1guRWxlbWVudDtcbiAgICAvKiogQWRkaXRpb25hbCBoZWFkZXIgY29udGVudC4gKi9cbiAgICBjaGlsZHJlbj86IEpTWC5FbGVtZW50O1xufSkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGl0bGVcIj57cHJvcHMudGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgPFNob3cgd2hlbj17cHJvcHMuY2hpbGRyZW59PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmlsbGVyXCIgLz5cbiAgICAgICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XG4gICAgICAgICAgICA8L1Nob3c+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG4iXSwibmFtZXMiOlsiUGFuZWxIZWFkZXIiLCJwcm9wcyIsIl9lbCQiLCJfdG1wbCQyIiwiX2VsJDIiLCJmaXJzdENoaWxkIiwiXyRpbnNlcnQiLCJ0aXRsZSIsIl8kY3JlYXRlQ29tcG9uZW50IiwiU2hvdyIsIndoZW4iLCJjaGlsZHJlbiIsIl90bXBsJCIsIl8kbWVtbyJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFNTyxTQUFTQSxZQUFZQyxLQUt6QixFQUFBO0FBQ0MsRUFBQSxPQUFBLENBQUEsTUFBQTtBQUFBLElBQUEsSUFBQUMsSUFBQUMsR0FBQUEsT0FBQUEsRUFBQUMsRUFBQUEsS0FBQUEsR0FBQUYsSUFBQUcsQ0FBQUEsVUFBQUE7QUFBQUMsSUFBQUYsTUFBQUEsQ0FBQUEsS0FBQUEsRUFFNkJILE1BQUFBLEtBQUFBLENBQU1NLEtBQUssQ0FBQTtBQUFBRCxJQUFBSixNQUFBQSxDQUFBQSxJQUFBQSxFQUFBTSxnQkFDL0JDLElBQUksRUFBQTtBQUFBLE1BQUEsSUFBQ0MsSUFBSSxHQUFBO0FBQUEsUUFBQSxPQUFFVCxLQUFNVSxDQUFBQSxRQUFBQTtBQUFBQSxPQUFRO0FBQUEsTUFBQSxJQUFBQSxRQUFBLEdBQUE7QUFBQSxRQUFBLE9BQUEsQ0FBQUMsTUFBQUMsRUFBQUEsRUFBQUEsS0FFckJaLE1BQUFBLEtBQUFBLENBQU1VLFFBQVEsQ0FBQSxDQUFBO0FBQUE7QUFBQSxLQUFBLEdBQUEsSUFBQSxDQUFBO0FBQUEsSUFBQVQsT0FBQUEsSUFBQUE7QUFBQUEsR0FBQSxHQUFBO0FBSS9COzs7OyJ9
