import { G as getDefaultExportFromCjs } from './analysis_tool-CDs3CHfO.js';

var fileDownload = function(data, filename, mime, bom) {
    var blobData = (typeof bom !== 'undefined') ? [bom, data] : [data];
    var blob = new Blob(blobData, {type: mime || 'application/octet-stream'});
    if (typeof window.navigator.msSaveBlob !== 'undefined') {
        // IE workaround for "HTML7007: One or more blob URLs were
        // revoked by closing the blob for which they were created.
        // These URLs will no longer resolve as the data backing
        // the URL has been freed."
        window.navigator.msSaveBlob(blob, filename);
    }
    else {
        var blobURL = (window.URL && window.URL.createObjectURL) ? window.URL.createObjectURL(blob) : window.webkitURL.createObjectURL(blob);
        var tempLink = document.createElement('a');
        tempLink.style.display = 'none';
        tempLink.href = blobURL;
        tempLink.setAttribute('download', filename);

        // Safari thinks _blank anchor are pop ups. We only want to set _blank
        // target if the browser does not support the HTML5 download attribute.
        // This allows you to download files in desktop safari if pop up blocking
        // is enabled.
        if (typeof tempLink.download === 'undefined') {
            tempLink.setAttribute('target', '_blank');
        }

        document.body.appendChild(tempLink);
        tempLink.click();

        // Fixes "webkit blob resource error 1"
        setTimeout(function() {
            document.body.removeChild(tempLink);
            window.URL.revokeObjectURL(blobURL);
        }, 200);
    }
};

const download = /*@__PURE__*/getDefaultExportFromCjs(fileDownload);

export { download as d };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS1kb3dubG9hZC1Zdk8wYWIyZS5qcyIsInNvdXJjZXMiOlsiLi4vLi4vLi4vZnJvbnRlbmQvbm9kZV9tb2R1bGVzLy5wbnBtL2pzLWZpbGUtZG93bmxvYWRAMC40LjEyL25vZGVfbW9kdWxlcy9qcy1maWxlLWRvd25sb2FkL2ZpbGUtZG93bmxvYWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkYXRhLCBmaWxlbmFtZSwgbWltZSwgYm9tKSB7XG4gICAgdmFyIGJsb2JEYXRhID0gKHR5cGVvZiBib20gIT09ICd1bmRlZmluZWQnKSA/IFtib20sIGRhdGFdIDogW2RhdGFdXG4gICAgdmFyIGJsb2IgPSBuZXcgQmxvYihibG9iRGF0YSwge3R5cGU6IG1pbWUgfHwgJ2FwcGxpY2F0aW9uL29jdGV0LXN0cmVhbSd9KTtcbiAgICBpZiAodHlwZW9mIHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlQmxvYiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgLy8gSUUgd29ya2Fyb3VuZCBmb3IgXCJIVE1MNzAwNzogT25lIG9yIG1vcmUgYmxvYiBVUkxzIHdlcmVcbiAgICAgICAgLy8gcmV2b2tlZCBieSBjbG9zaW5nIHRoZSBibG9iIGZvciB3aGljaCB0aGV5IHdlcmUgY3JlYXRlZC5cbiAgICAgICAgLy8gVGhlc2UgVVJMcyB3aWxsIG5vIGxvbmdlciByZXNvbHZlIGFzIHRoZSBkYXRhIGJhY2tpbmdcbiAgICAgICAgLy8gdGhlIFVSTCBoYXMgYmVlbiBmcmVlZC5cIlxuICAgICAgICB3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZUJsb2IoYmxvYiwgZmlsZW5hbWUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGJsb2JVUkwgPSAod2luZG93LlVSTCAmJiB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTCkgPyB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKSA6IHdpbmRvdy53ZWJraXRVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuICAgICAgICB2YXIgdGVtcExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgICAgIHRlbXBMaW5rLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIHRlbXBMaW5rLmhyZWYgPSBibG9iVVJMO1xuICAgICAgICB0ZW1wTGluay5zZXRBdHRyaWJ1dGUoJ2Rvd25sb2FkJywgZmlsZW5hbWUpO1xuXG4gICAgICAgIC8vIFNhZmFyaSB0aGlua3MgX2JsYW5rIGFuY2hvciBhcmUgcG9wIHVwcy4gV2Ugb25seSB3YW50IHRvIHNldCBfYmxhbmtcbiAgICAgICAgLy8gdGFyZ2V0IGlmIHRoZSBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdGhlIEhUTUw1IGRvd25sb2FkIGF0dHJpYnV0ZS5cbiAgICAgICAgLy8gVGhpcyBhbGxvd3MgeW91IHRvIGRvd25sb2FkIGZpbGVzIGluIGRlc2t0b3Agc2FmYXJpIGlmIHBvcCB1cCBibG9ja2luZ1xuICAgICAgICAvLyBpcyBlbmFibGVkLlxuICAgICAgICBpZiAodHlwZW9mIHRlbXBMaW5rLmRvd25sb2FkID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGVtcExpbmsuc2V0QXR0cmlidXRlKCd0YXJnZXQnLCAnX2JsYW5rJyk7XG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRlbXBMaW5rKTtcbiAgICAgICAgdGVtcExpbmsuY2xpY2soKTtcblxuICAgICAgICAvLyBGaXhlcyBcIndlYmtpdCBibG9iIHJlc291cmNlIGVycm9yIDFcIlxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0ZW1wTGluayk7XG4gICAgICAgICAgICB3aW5kb3cuVVJMLnJldm9rZU9iamVjdFVSTChibG9iVVJMKTtcbiAgICAgICAgfSwgMjAwKVxuICAgIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztJQUFBLFlBQWMsR0FBRyxTQUFTLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRTtBQUNyRCxJQUFJLElBQUksUUFBUSxHQUFHLENBQUMsT0FBTyxHQUFHLEtBQUssV0FBVyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSTtBQUNyRSxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLElBQUksMEJBQTBCLENBQUMsQ0FBQztBQUM3RSxJQUFJLElBQUksT0FBTyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQVUsS0FBSyxXQUFXLEVBQUU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxRQUFRLENBQUM7QUFDbkQ7QUFDQSxTQUFTO0FBQ1QsUUFBUSxJQUFJLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDO0FBQzVJLFFBQVEsSUFBSSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUM7QUFDbEQsUUFBUSxRQUFRLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxNQUFNO0FBQ3ZDLFFBQVEsUUFBUSxDQUFDLElBQUksR0FBRyxPQUFPO0FBQy9CLFFBQVEsUUFBUSxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsUUFBUSxDQUFDOztBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsSUFBSSxPQUFPLFFBQVEsQ0FBQyxRQUFRLEtBQUssV0FBVyxFQUFFO0FBQ3RELFlBQVksUUFBUSxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDO0FBQ3JEOztBQUVBLFFBQVEsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO0FBQzNDLFFBQVEsUUFBUSxDQUFDLEtBQUssRUFBRTs7QUFFeEI7QUFDQSxRQUFRLFVBQVUsQ0FBQyxXQUFXO0FBQzlCLFlBQVksUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDO0FBQy9DLFlBQVksTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDO0FBQy9DLFNBQVMsRUFBRSxHQUFHO0FBQ2Q7QUFDQTs7Ozs7OyIsInhfZ29vZ2xlX2lnbm9yZUxpc3QiOlswXX0=
