webpackHotUpdate_N_E("pages/index",{

/***/ "./profile.js":
/*!********************!*\
  !*** ./profile.js ***!
  \********************/
/*! exports provided: skills, experience, proyects, post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skills", function() { return skills; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "experience", function() { return experience; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proyects", function() { return proyects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "post", function() { return post; });
var skills = [{
  skill: 'JavaScript',
  percentage: 95
}, {
  skill: 'Nodejs',
  percentage: 45
}, {
  skill: 'React',
  percentage: 50
}, {
  skill: 'Arduino',
  percentage: 45
}, {
  skill: 'Java',
  percentage: 45
}, {
  skill: 'Android Studio',
  percentage: 50
}];
var experience = [{
  title: 'Software developer at Microsoft',
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non dapibus tortor. Suspendisse potenti. Integer porta massa id sodales rutrum. Praesent tempus, massa sit amet eleifend rhoncus justo.",
  from: 2000,
  to: 2005
}, {
  title: 'Software developer at Google LLC',
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non dapibus tortor. Suspendisse potenti. Integer porta massa id sodales rutrum. ",
  from: 2005,
  to: 2007
}, {
  title: 'Software developer at Spacex',
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non dapibus tortor. Suspendisse potenti. Integer porta massa id sodales rutrum. ",
  from: 2007
}];
var proyects = [{
  name: "Awesome website 1",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non dapibus tortor. Suspendisse potenti. Integer porta massa id sodales rutrum.",
  image: "portfolio1.jpeg"
}, {
  name: "Awesome website 2",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non dapibus tortor. Suspendisse potenti. Integer porta massa id sodales rutrum.",
  image: "portfolio2.jpg"
}, {
  name: "Awesome website 3",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non dapibus tortor. Suspendisse potenti. Integer porta massa id sodales rutrum.",
  image: "portfolio3.png"
}, {
  name: "Awesome website 4",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non dapibus tortor. Suspendisse potenti. Integer porta massa id sodales rutrum.",
  image: "portfolio4.png"
}, {
  name: "Awesome website 5",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non dapibus tortor. Suspendisse potenti. Integer porta massa id sodales rutrum.",
  image: "portfolio5.jpeg"
}, {
  name: "Awesome website 6",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non dapibus tortor. Suspendisse potenti. Integer porta massa id sodales rutrum.",
  image: "portfolio6.jpeg"
}];
var post = [{
  title: "React",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non dapibus tortor. Suspendisse potenti. Integer porta massa id sodales rutrum. Praesent tempus, massa sit amet eleifend rhoncus justo.",
  imgURL: 'https://www.programaenlinea.net/wp-content/uploads/2020/08/reactjs.jpg'
}, {
  title: "Angular",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non dapibus tortor. Suspendisse potenti. Integer porta massa id sodales rutrum. Praesent tempus, massa sit amet eleifend rhoncus justo.",
  imgURL: 'https://codigoonclick.com/wp-content/uploads/2018/03/Conoce-Angular.jpg'
}, {
  title: "Vue",
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non dapibus tortor. Suspendisse potenti. Integer porta massa id sodales rutrum. Praesent tempus, massa sit amet eleifend rhoncus justo.",
  imgURL: "https://apiumhub.com/wp-content/uploads/2020/08/vue_js.jpeg"
}];

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJza2lsbHMiLCJza2lsbCIsInBlcmNlbnRhZ2UiLCJleHBlcmllbmNlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImZyb20iLCJ0byIsInByb3llY3RzIiwibmFtZSIsImltYWdlIiwicG9zdCIsImNvbnRlbnQiLCJpbWdVUkwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsTUFBTSxHQUFHLENBQ3BCO0FBQ0VDLE9BQUssRUFBRSxZQURUO0FBRUVDLFlBQVUsRUFBRTtBQUZkLENBRG9CLEVBS3BCO0FBQ0VELE9BQUssRUFBRSxRQURUO0FBRUVDLFlBQVUsRUFBRTtBQUZkLENBTG9CLEVBU3BCO0FBQ0VELE9BQUssRUFBRSxPQURUO0FBRUVDLFlBQVUsRUFBRTtBQUZkLENBVG9CLEVBYXBCO0FBQ0VELE9BQUssRUFBRSxTQURUO0FBRUVDLFlBQVUsRUFBRTtBQUZkLENBYm9CLEVBaUJwQjtBQUNFRCxPQUFLLEVBQUUsTUFEVDtBQUVFQyxZQUFVLEVBQUU7QUFGZCxDQWpCb0IsRUFxQnBCO0FBQ0VELE9BQUssRUFBRSxnQkFEVDtBQUVFQyxZQUFVLEVBQUU7QUFGZCxDQXJCb0IsQ0FBZjtBQTJCQSxJQUFNQyxVQUFVLEdBQUcsQ0FDeEI7QUFDRUMsT0FBSyxFQUFFLGlDQURUO0FBRUVDLGFBQVcsRUFBRSxxTUFGZjtBQUdFQyxNQUFJLEVBQUUsSUFIUjtBQUlFQyxJQUFFLEVBQUU7QUFKTixDQUR3QixFQU94QjtBQUNFSCxPQUFLLEVBQUUsa0NBRFQ7QUFFRUMsYUFBVyxFQUFFLDhJQUZmO0FBR0VDLE1BQUksRUFBRSxJQUhSO0FBSUVDLElBQUUsRUFBRTtBQUpOLENBUHdCLEVBYXhCO0FBQ0VILE9BQUssRUFBRSw4QkFEVDtBQUVFQyxhQUFXLEVBQUUsOElBRmY7QUFHRUMsTUFBSSxFQUFFO0FBSFIsQ0Fid0IsQ0FBbkI7QUFvQkEsSUFBTUUsUUFBUSxHQUFHLENBQ3RCO0FBQ0VDLE1BQUksRUFBRSxtQkFEUjtBQUVFSixhQUFXLEVBQUUsNklBRmY7QUFHRUssT0FBSyxFQUFFO0FBSFQsQ0FEc0IsRUFNdEI7QUFDRUQsTUFBSSxFQUFFLG1CQURSO0FBRUVKLGFBQVcsRUFBRSw2SUFGZjtBQUdFSyxPQUFLLEVBQUU7QUFIVCxDQU5zQixFQVd0QjtBQUNFRCxNQUFJLEVBQUUsbUJBRFI7QUFFRUosYUFBVyxFQUFFLDZJQUZmO0FBR0VLLE9BQUssRUFBRTtBQUhULENBWHNCLEVBZ0J0QjtBQUNFRCxNQUFJLEVBQUUsbUJBRFI7QUFFRUosYUFBVyxFQUFFLDZJQUZmO0FBR0VLLE9BQUssRUFBRTtBQUhULENBaEJzQixFQXFCdEI7QUFDRUQsTUFBSSxFQUFFLG1CQURSO0FBRUVKLGFBQVcsRUFBRSw2SUFGZjtBQUdFSyxPQUFLLEVBQUU7QUFIVCxDQXJCc0IsRUEwQnRCO0FBQ0VELE1BQUksRUFBRSxtQkFEUjtBQUVFSixhQUFXLEVBQUUsNklBRmY7QUFHRUssT0FBSyxFQUFFO0FBSFQsQ0ExQnNCLENBQWpCO0FBaUNBLElBQU1DLElBQUksR0FBRSxDQUNqQjtBQUNFUCxPQUFLLEVBQUMsT0FEUjtBQUVFUSxTQUFPLEVBQUMscU1BRlY7QUFHRUMsUUFBTSxFQUFDO0FBSFQsQ0FEaUIsRUFNakI7QUFDRVQsT0FBSyxFQUFDLFNBRFI7QUFFRVEsU0FBTyxFQUFDLHFNQUZWO0FBR0VDLFFBQU0sRUFBQztBQUhULENBTmlCLEVBV2pCO0FBQ0VULE9BQUssRUFBQyxLQURSO0FBRUVRLFNBQU8sRUFBQyxxTUFGVjtBQUdFQyxRQUFNLEVBQUM7QUFIVCxDQVhpQixDQUFaIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVjMDEwZWJhMDYxMmJjYzI5MjNiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2tpbGxzID0gW1xyXG4gIHtcclxuICAgIHNraWxsOiAnSmF2YVNjcmlwdCcsXHJcbiAgICBwZXJjZW50YWdlOiA5NSxcclxuICB9LFxyXG4gIHtcclxuICAgIHNraWxsOiAnTm9kZWpzJyxcclxuICAgIHBlcmNlbnRhZ2U6IDQ1LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc2tpbGw6ICdSZWFjdCcsXHJcbiAgICBwZXJjZW50YWdlOiA1MCxcclxuICB9LFxyXG4gIHtcclxuICAgIHNraWxsOiAnQXJkdWlubycsXHJcbiAgICBwZXJjZW50YWdlOiA0NSxcclxuICB9LFxyXG4gIHtcclxuICAgIHNraWxsOiAnSmF2YScsXHJcbiAgICBwZXJjZW50YWdlOiA0NSxcclxuICB9LFxyXG4gIHtcclxuICAgIHNraWxsOiAnQW5kcm9pZCBTdHVkaW8nLFxyXG4gICAgcGVyY2VudGFnZTogNTAsXHJcbiAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IGV4cGVyaWVuY2UgPSBbXHJcbiAge1xyXG4gICAgdGl0bGU6ICdTb2Z0d2FyZSBkZXZlbG9wZXIgYXQgTWljcm9zb2Z0JyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEluIG5vbiBkYXBpYnVzIHRvcnRvci4gU3VzcGVuZGlzc2UgcG90ZW50aS4gSW50ZWdlciBwb3J0YSBtYXNzYSBpZCBzb2RhbGVzIHJ1dHJ1bS4gUHJhZXNlbnQgdGVtcHVzLCBtYXNzYSBzaXQgYW1ldCBlbGVpZmVuZCByaG9uY3VzIGp1c3RvLlwiLFxyXG4gICAgZnJvbTogMjAwMCxcclxuICAgIHRvOiAyMDA1LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdTb2Z0d2FyZSBkZXZlbG9wZXIgYXQgR29vZ2xlIExMQycsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBJbiBub24gZGFwaWJ1cyB0b3J0b3IuIFN1c3BlbmRpc3NlIHBvdGVudGkuIEludGVnZXIgcG9ydGEgbWFzc2EgaWQgc29kYWxlcyBydXRydW0uIFwiLFxyXG4gICAgZnJvbTogMjAwNSxcclxuICAgIHRvOiAyMDA3LFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdTb2Z0d2FyZSBkZXZlbG9wZXIgYXQgU3BhY2V4JyxcclxuICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEluIG5vbiBkYXBpYnVzIHRvcnRvci4gU3VzcGVuZGlzc2UgcG90ZW50aS4gSW50ZWdlciBwb3J0YSBtYXNzYSBpZCBzb2RhbGVzIHJ1dHJ1bS4gXCIsXHJcbiAgICBmcm9tOiAyMDA3LFxyXG4gIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBwcm95ZWN0cyA9IFtcclxuICB7XHJcbiAgICBuYW1lOiBcIkF3ZXNvbWUgd2Vic2l0ZSAxXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBJbiBub24gZGFwaWJ1cyB0b3J0b3IuIFN1c3BlbmRpc3NlIHBvdGVudGkuIEludGVnZXIgcG9ydGEgbWFzc2EgaWQgc29kYWxlcyBydXRydW0uXCIsXHJcbiAgICBpbWFnZTogXCJwb3J0Zm9saW8xLmpwZWdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQXdlc29tZSB3ZWJzaXRlIDJcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEluIG5vbiBkYXBpYnVzIHRvcnRvci4gU3VzcGVuZGlzc2UgcG90ZW50aS4gSW50ZWdlciBwb3J0YSBtYXNzYSBpZCBzb2RhbGVzIHJ1dHJ1bS5cIixcclxuICAgIGltYWdlOiBcInBvcnRmb2xpbzIuanBnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkF3ZXNvbWUgd2Vic2l0ZSAzXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBJbiBub24gZGFwaWJ1cyB0b3J0b3IuIFN1c3BlbmRpc3NlIHBvdGVudGkuIEludGVnZXIgcG9ydGEgbWFzc2EgaWQgc29kYWxlcyBydXRydW0uXCIsXHJcbiAgICBpbWFnZTogXCJwb3J0Zm9saW8zLnBuZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJBd2Vzb21lIHdlYnNpdGUgNFwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gSW4gbm9uIGRhcGlidXMgdG9ydG9yLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBJbnRlZ2VyIHBvcnRhIG1hc3NhIGlkIHNvZGFsZXMgcnV0cnVtLlwiLFxyXG4gICAgaW1hZ2U6IFwicG9ydGZvbGlvNC5wbmdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQXdlc29tZSB3ZWJzaXRlIDVcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEluIG5vbiBkYXBpYnVzIHRvcnRvci4gU3VzcGVuZGlzc2UgcG90ZW50aS4gSW50ZWdlciBwb3J0YSBtYXNzYSBpZCBzb2RhbGVzIHJ1dHJ1bS5cIixcclxuICAgIGltYWdlOiBcInBvcnRmb2xpbzUuanBlZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJBd2Vzb21lIHdlYnNpdGUgNlwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gSW4gbm9uIGRhcGlidXMgdG9ydG9yLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBJbnRlZ2VyIHBvcnRhIG1hc3NhIGlkIHNvZGFsZXMgcnV0cnVtLlwiLFxyXG4gICAgaW1hZ2U6IFwicG9ydGZvbGlvNi5qcGVnXCIsXHJcbiAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGNvbnN0IHBvc3QgPVtcclxuICB7XHJcbiAgICB0aXRsZTpcIlJlYWN0XCIsXHJcbiAgICBjb250ZW50OlwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gSW4gbm9uIGRhcGlidXMgdG9ydG9yLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBJbnRlZ2VyIHBvcnRhIG1hc3NhIGlkIHNvZGFsZXMgcnV0cnVtLiBQcmFlc2VudCB0ZW1wdXMsIG1hc3NhIHNpdCBhbWV0IGVsZWlmZW5kIHJob25jdXMganVzdG8uXCIsXHJcbiAgICBpbWdVUkw6J2h0dHBzOi8vd3d3LnByb2dyYW1hZW5saW5lYS5uZXQvd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDgvcmVhY3Rqcy5qcGcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6XCJBbmd1bGFyXCIsXHJcbiAgICBjb250ZW50OlwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gSW4gbm9uIGRhcGlidXMgdG9ydG9yLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBJbnRlZ2VyIHBvcnRhIG1hc3NhIGlkIHNvZGFsZXMgcnV0cnVtLiBQcmFlc2VudCB0ZW1wdXMsIG1hc3NhIHNpdCBhbWV0IGVsZWlmZW5kIHJob25jdXMganVzdG8uXCIsXHJcbiAgICBpbWdVUkw6J2h0dHBzOi8vY29kaWdvb25jbGljay5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTgvMDMvQ29ub2NlLUFuZ3VsYXIuanBnJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOlwiVnVlXCIsXHJcbiAgICBjb250ZW50OlwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gSW4gbm9uIGRhcGlidXMgdG9ydG9yLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBJbnRlZ2VyIHBvcnRhIG1hc3NhIGlkIHNvZGFsZXMgcnV0cnVtLiBQcmFlc2VudCB0ZW1wdXMsIG1hc3NhIHNpdCBhbWV0IGVsZWlmZW5kIHJob25jdXMganVzdG8uXCIsXHJcbiAgICBpbWdVUkw6XCJodHRwczovL2FwaXVtaHViLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAyMC8wOC92dWVfanMuanBlZ1wiLFxyXG4gIH0sXHJcbl0iXSwic291cmNlUm9vdCI6IiJ9