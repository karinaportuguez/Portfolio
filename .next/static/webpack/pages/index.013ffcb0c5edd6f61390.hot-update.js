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
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non dapibus tortor. Suspendisse potenti. Integer porta massa id sodales rutrum. Praesent tempus, massa sit amet eleifend rhoncus justo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non dapibus tortor. Suspendisse potenti. Integer porta massa id sodales rutrum. Praesent tempus, massa sit amet eleifend rhoncus justo.Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non dapibus tortor. Suspendisse potenti. Integer porta massa id sodales rutrum. Praesent tempus, massa sit amet eleifend rhoncus justo.",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcHJvZmlsZS5qcyJdLCJuYW1lcyI6WyJza2lsbHMiLCJza2lsbCIsInBlcmNlbnRhZ2UiLCJleHBlcmllbmNlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsImZyb20iLCJ0byIsInByb3llY3RzIiwibmFtZSIsImltYWdlIiwicG9zdCIsImNvbnRlbnQiLCJpbWdVUkwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU8sSUFBTUEsTUFBTSxHQUFHLENBQ3BCO0FBQ0VDLE9BQUssRUFBRSxZQURUO0FBRUVDLFlBQVUsRUFBRTtBQUZkLENBRG9CLEVBS3BCO0FBQ0VELE9BQUssRUFBRSxRQURUO0FBRUVDLFlBQVUsRUFBRTtBQUZkLENBTG9CLEVBU3BCO0FBQ0VELE9BQUssRUFBRSxPQURUO0FBRUVDLFlBQVUsRUFBRTtBQUZkLENBVG9CLEVBYXBCO0FBQ0VELE9BQUssRUFBRSxTQURUO0FBRUVDLFlBQVUsRUFBRTtBQUZkLENBYm9CLEVBaUJwQjtBQUNFRCxPQUFLLEVBQUUsTUFEVDtBQUVFQyxZQUFVLEVBQUU7QUFGZCxDQWpCb0IsRUFxQnBCO0FBQ0VELE9BQUssRUFBRSxnQkFEVDtBQUVFQyxZQUFVLEVBQUU7QUFGZCxDQXJCb0IsQ0FBZjtBQTJCQSxJQUFNQyxVQUFVLEdBQUcsQ0FDeEI7QUFDRUMsT0FBSyxFQUFFLGlDQURUO0FBRUVDLGFBQVcsRUFBRSxxTUFGZjtBQUdFQyxNQUFJLEVBQUUsSUFIUjtBQUlFQyxJQUFFLEVBQUU7QUFKTixDQUR3QixFQU94QjtBQUNFSCxPQUFLLEVBQUUsa0NBRFQ7QUFFRUMsYUFBVyxFQUFFLDhJQUZmO0FBR0VDLE1BQUksRUFBRSxJQUhSO0FBSUVDLElBQUUsRUFBRTtBQUpOLENBUHdCLEVBYXhCO0FBQ0VILE9BQUssRUFBRSw4QkFEVDtBQUVFQyxhQUFXLEVBQUUsOElBRmY7QUFHRUMsTUFBSSxFQUFFO0FBSFIsQ0Fid0IsQ0FBbkI7QUFvQkEsSUFBTUUsUUFBUSxHQUFHLENBQ3RCO0FBQ0VDLE1BQUksRUFBRSxtQkFEUjtBQUVFSixhQUFXLEVBQUUsNklBRmY7QUFHRUssT0FBSyxFQUFFO0FBSFQsQ0FEc0IsRUFNdEI7QUFDRUQsTUFBSSxFQUFFLG1CQURSO0FBRUVKLGFBQVcsRUFBRSw2SUFGZjtBQUdFSyxPQUFLLEVBQUU7QUFIVCxDQU5zQixFQVd0QjtBQUNFRCxNQUFJLEVBQUUsbUJBRFI7QUFFRUosYUFBVyxFQUFFLDZJQUZmO0FBR0VLLE9BQUssRUFBRTtBQUhULENBWHNCLEVBZ0J0QjtBQUNFRCxNQUFJLEVBQUUsbUJBRFI7QUFFRUosYUFBVyxFQUFFLDZJQUZmO0FBR0VLLE9BQUssRUFBRTtBQUhULENBaEJzQixFQXFCdEI7QUFDRUQsTUFBSSxFQUFFLG1CQURSO0FBRUVKLGFBQVcsRUFBRSw2SUFGZjtBQUdFSyxPQUFLLEVBQUU7QUFIVCxDQXJCc0IsRUEwQnRCO0FBQ0VELE1BQUksRUFBRSxtQkFEUjtBQUVFSixhQUFXLEVBQUUsNklBRmY7QUFHRUssT0FBSyxFQUFFO0FBSFQsQ0ExQnNCLENBQWpCO0FBaUNBLElBQU1DLElBQUksR0FBRSxDQUNqQjtBQUNFUCxPQUFLLEVBQUMsT0FEUjtBQUVFUSxTQUFPLEVBQUMscU1BRlY7QUFHRUMsUUFBTSxFQUFDO0FBSFQsQ0FEaUIsRUFNakI7QUFDRVQsT0FBSyxFQUFDLFNBRFI7QUFFRVEsU0FBTyxFQUFDLDJrQkFGVjtBQUdFQyxRQUFNLEVBQUM7QUFIVCxDQU5pQixFQVdqQjtBQUNFVCxPQUFLLEVBQUMsS0FEUjtBQUVFUSxTQUFPLEVBQUMscU1BRlY7QUFHRUMsUUFBTSxFQUFDO0FBSFQsQ0FYaUIsQ0FBWiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wMTNmZmNiMGM1ZWRkNmY2MTM5MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHNraWxscyA9IFtcclxuICB7XHJcbiAgICBza2lsbDogJ0phdmFTY3JpcHQnLFxyXG4gICAgcGVyY2VudGFnZTogOTUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBza2lsbDogJ05vZGVqcycsXHJcbiAgICBwZXJjZW50YWdlOiA0NSxcclxuICB9LFxyXG4gIHtcclxuICAgIHNraWxsOiAnUmVhY3QnLFxyXG4gICAgcGVyY2VudGFnZTogNTAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBza2lsbDogJ0FyZHVpbm8nLFxyXG4gICAgcGVyY2VudGFnZTogNDUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBza2lsbDogJ0phdmEnLFxyXG4gICAgcGVyY2VudGFnZTogNDUsXHJcbiAgfSxcclxuICB7XHJcbiAgICBza2lsbDogJ0FuZHJvaWQgU3R1ZGlvJyxcclxuICAgIHBlcmNlbnRhZ2U6IDUwLFxyXG4gIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBleHBlcmllbmNlID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnU29mdHdhcmUgZGV2ZWxvcGVyIGF0IE1pY3Jvc29mdCcsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBJbiBub24gZGFwaWJ1cyB0b3J0b3IuIFN1c3BlbmRpc3NlIHBvdGVudGkuIEludGVnZXIgcG9ydGEgbWFzc2EgaWQgc29kYWxlcyBydXRydW0uIFByYWVzZW50IHRlbXB1cywgbWFzc2Egc2l0IGFtZXQgZWxlaWZlbmQgcmhvbmN1cyBqdXN0by5cIixcclxuICAgIGZyb206IDIwMDAsXHJcbiAgICB0bzogMjAwNSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnU29mdHdhcmUgZGV2ZWxvcGVyIGF0IEdvb2dsZSBMTEMnLFxyXG4gICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gSW4gbm9uIGRhcGlidXMgdG9ydG9yLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBJbnRlZ2VyIHBvcnRhIG1hc3NhIGlkIHNvZGFsZXMgcnV0cnVtLiBcIixcclxuICAgIGZyb206IDIwMDUsXHJcbiAgICB0bzogMjAwNyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnU29mdHdhcmUgZGV2ZWxvcGVyIGF0IFNwYWNleCcsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBJbiBub24gZGFwaWJ1cyB0b3J0b3IuIFN1c3BlbmRpc3NlIHBvdGVudGkuIEludGVnZXIgcG9ydGEgbWFzc2EgaWQgc29kYWxlcyBydXRydW0uIFwiLFxyXG4gICAgZnJvbTogMjAwNyxcclxuICB9LFxyXG5dXHJcblxyXG5leHBvcnQgY29uc3QgcHJveWVjdHMgPSBbXHJcbiAge1xyXG4gICAgbmFtZTogXCJBd2Vzb21lIHdlYnNpdGUgMVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gSW4gbm9uIGRhcGlidXMgdG9ydG9yLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBJbnRlZ2VyIHBvcnRhIG1hc3NhIGlkIHNvZGFsZXMgcnV0cnVtLlwiLFxyXG4gICAgaW1hZ2U6IFwicG9ydGZvbGlvMS5qcGVnXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkF3ZXNvbWUgd2Vic2l0ZSAyXCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBJbiBub24gZGFwaWJ1cyB0b3J0b3IuIFN1c3BlbmRpc3NlIHBvdGVudGkuIEludGVnZXIgcG9ydGEgbWFzc2EgaWQgc29kYWxlcyBydXRydW0uXCIsXHJcbiAgICBpbWFnZTogXCJwb3J0Zm9saW8yLmpwZ1wiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbmFtZTogXCJBd2Vzb21lIHdlYnNpdGUgM1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gSW4gbm9uIGRhcGlidXMgdG9ydG9yLiBTdXNwZW5kaXNzZSBwb3RlbnRpLiBJbnRlZ2VyIHBvcnRhIG1hc3NhIGlkIHNvZGFsZXMgcnV0cnVtLlwiLFxyXG4gICAgaW1hZ2U6IFwicG9ydGZvbGlvMy5wbmdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQXdlc29tZSB3ZWJzaXRlIDRcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEluIG5vbiBkYXBpYnVzIHRvcnRvci4gU3VzcGVuZGlzc2UgcG90ZW50aS4gSW50ZWdlciBwb3J0YSBtYXNzYSBpZCBzb2RhbGVzIHJ1dHJ1bS5cIixcclxuICAgIGltYWdlOiBcInBvcnRmb2xpbzQucG5nXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBuYW1lOiBcIkF3ZXNvbWUgd2Vic2l0ZSA1XCIsXHJcbiAgICBkZXNjcmlwdGlvbjogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBJbiBub24gZGFwaWJ1cyB0b3J0b3IuIFN1c3BlbmRpc3NlIHBvdGVudGkuIEludGVnZXIgcG9ydGEgbWFzc2EgaWQgc29kYWxlcyBydXRydW0uXCIsXHJcbiAgICBpbWFnZTogXCJwb3J0Zm9saW81LmpwZWdcIixcclxuICB9LFxyXG4gIHtcclxuICAgIG5hbWU6IFwiQXdlc29tZSB3ZWJzaXRlIDZcIixcclxuICAgIGRlc2NyaXB0aW9uOiBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEluIG5vbiBkYXBpYnVzIHRvcnRvci4gU3VzcGVuZGlzc2UgcG90ZW50aS4gSW50ZWdlciBwb3J0YSBtYXNzYSBpZCBzb2RhbGVzIHJ1dHJ1bS5cIixcclxuICAgIGltYWdlOiBcInBvcnRmb2xpbzYuanBlZ1wiLFxyXG4gIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBjb25zdCBwb3N0ID1bXHJcbiAge1xyXG4gICAgdGl0bGU6XCJSZWFjdFwiLFxyXG4gICAgY29udGVudDpcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEluIG5vbiBkYXBpYnVzIHRvcnRvci4gU3VzcGVuZGlzc2UgcG90ZW50aS4gSW50ZWdlciBwb3J0YSBtYXNzYSBpZCBzb2RhbGVzIHJ1dHJ1bS4gUHJhZXNlbnQgdGVtcHVzLCBtYXNzYSBzaXQgYW1ldCBlbGVpZmVuZCByaG9uY3VzIGp1c3RvLlwiLFxyXG4gICAgaW1nVVJMOidodHRwczovL3d3dy5wcm9ncmFtYWVubGluZWEubmV0L3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDIwLzA4L3JlYWN0anMuanBnJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOlwiQW5ndWxhclwiLFxyXG4gICAgY29udGVudDpcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEluIG5vbiBkYXBpYnVzIHRvcnRvci4gU3VzcGVuZGlzc2UgcG90ZW50aS4gSW50ZWdlciBwb3J0YSBtYXNzYSBpZCBzb2RhbGVzIHJ1dHJ1bS4gUHJhZXNlbnQgdGVtcHVzLCBtYXNzYSBzaXQgYW1ldCBlbGVpZmVuZCByaG9uY3VzIGp1c3RvLkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEluIG5vbiBkYXBpYnVzIHRvcnRvci4gU3VzcGVuZGlzc2UgcG90ZW50aS4gSW50ZWdlciBwb3J0YSBtYXNzYSBpZCBzb2RhbGVzIHJ1dHJ1bS4gUHJhZXNlbnQgdGVtcHVzLCBtYXNzYSBzaXQgYW1ldCBlbGVpZmVuZCByaG9uY3VzIGp1c3RvLkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEluIG5vbiBkYXBpYnVzIHRvcnRvci4gU3VzcGVuZGlzc2UgcG90ZW50aS4gSW50ZWdlciBwb3J0YSBtYXNzYSBpZCBzb2RhbGVzIHJ1dHJ1bS4gUHJhZXNlbnQgdGVtcHVzLCBtYXNzYSBzaXQgYW1ldCBlbGVpZmVuZCByaG9uY3VzIGp1c3RvLlwiLFxyXG4gICAgaW1nVVJMOidodHRwczovL2NvZGlnb29uY2xpY2suY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE4LzAzL0Nvbm9jZS1Bbmd1bGFyLmpwZycsXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTpcIlZ1ZVwiLFxyXG4gICAgY29udGVudDpcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEluIG5vbiBkYXBpYnVzIHRvcnRvci4gU3VzcGVuZGlzc2UgcG90ZW50aS4gSW50ZWdlciBwb3J0YSBtYXNzYSBpZCBzb2RhbGVzIHJ1dHJ1bS4gUHJhZXNlbnQgdGVtcHVzLCBtYXNzYSBzaXQgYW1ldCBlbGVpZmVuZCByaG9uY3VzIGp1c3RvLlwiLFxyXG4gICAgaW1nVVJMOlwiaHR0cHM6Ly9hcGl1bWh1Yi5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjAvMDgvdnVlX2pzLmpwZWdcIixcclxuICB9LFxyXG5dIl0sInNvdXJjZVJvb3QiOiIifQ==