'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var LOADING = exports.LOADING = '@async/Loading';

exports.default = function (store) {
  return function (next) {
    return function () {
      var action = arguments.length <= 0 || arguments[0] === undefined ? {
        type: '',
        ignoreLoading: false,
        payload: false
      } : arguments[0];

      if (!action.payload) {
        return Promise.resolve(next(action));
      }

      var promise = undefined;
      var payload = action.payload;
      if (typeof action.payload === 'function') {
        payload = action.payload();
      }
      if (payload.then && typeof payload.then === 'function') {
        promise = payload;
      }
      if (promise) {
        var _ret = function () {
          var showLoader = false;
          var finished = false;
          setTimeout(function () {
            if (finished || !process.env.BROWSER || action.ignoreLoading) {
              return;
            }
            showLoader = new Date().getTime();
            next({
              type: LOADING,
              payload: true,
              action: action.type
            });
          }, 100);
          return {
            v: new Promise(function (resolve, reject) {
              payload.then(function (data) {
                finished = true;
                next(Object.assign({}, action, { payload: data }));
                if (showLoader) {
                  var time = new Date().getTime() - showLoader;
                  setTimeout(function () {
                    next({
                      type: LOADING,
                      payload: false,
                      action: action.type
                    });
                  }, time < 500 ? 500 - time : 0);
                }
                resolve();
              }).catch(function (err) {
                reject(err);
              });
            })
          };
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
      }
      return Promise.resolve(next(action));
    };
  };
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zaGFyZWQvZmx1eC9taWRkbGV3YXJlcy9hc3luYy5qcyJdLCJuYW1lcyI6WyJMT0FESU5HIiwic3RvcmUiLCJhY3Rpb24iLCJ0eXBlIiwiaWdub3JlTG9hZGluZyIsInBheWxvYWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsIm5leHQiLCJwcm9taXNlIiwidW5kZWZpbmVkIiwidGhlbiIsInNob3dMb2FkZXIiLCJmaW5pc2hlZCIsInNldFRpbWVvdXQiLCJwcm9jZXNzIiwiZW52IiwiQlJPV1NFUiIsIkRhdGUiLCJnZXRUaW1lIiwicmVqZWN0IiwiT2JqZWN0IiwiYXNzaWduIiwiZGF0YSIsInRpbWUiLCJjYXRjaCIsImVyciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBTyxJQUFNQSw0QkFBVSxnQkFBaEI7O2tCQUVRLFVBQUNDLEtBQUQ7QUFBQSxTQUFXO0FBQUEsV0FBUSxZQUk1QjtBQUFBLFVBSjZCQyxNQUk3Qix5REFKc0M7QUFDMUNDLGNBQU0sRUFEb0M7QUFFMUNDLHVCQUFlLEtBRjJCO0FBRzFDQyxpQkFBUztBQUhpQyxPQUl0Qzs7QUFDSixVQUFJLENBQUNILE9BQU9HLE9BQVosRUFBcUI7QUFDbkIsZUFBT0MsUUFBUUMsT0FBUixDQUFnQkMsS0FBS04sTUFBTCxDQUFoQixDQUFQO0FBQ0Q7O0FBRUQsVUFBSU8sVUFBVUMsU0FBZDtBQUNBLFVBQUlMLFVBQVVILE9BQU9HLE9BQXJCO0FBQ0EsVUFBSSxPQUFPSCxPQUFPRyxPQUFkLEtBQTBCLFVBQTlCLEVBQTBDO0FBQ3hDQSxrQkFBVUgsT0FBT0csT0FBUCxFQUFWO0FBQ0Q7QUFDRCxVQUFLQSxRQUFRTSxJQUFSLElBQWdCLE9BQU9OLFFBQVFNLElBQWYsS0FBeUIsVUFBOUMsRUFBMkQ7QUFDekRGLGtCQUFVSixPQUFWO0FBQ0Q7QUFDRCxVQUFJSSxPQUFKLEVBQWE7QUFBQTtBQUNYLGNBQUlHLGFBQWEsS0FBakI7QUFDQSxjQUFJQyxXQUFXLEtBQWY7QUFDQUMscUJBQVcsWUFBTTtBQUNmLGdCQUFJRCxZQUFZLENBQUNFLFFBQVFDLEdBQVIsQ0FBWUMsT0FBekIsSUFBb0NmLE9BQU9FLGFBQS9DLEVBQThEO0FBQzVEO0FBQ0Q7QUFDRFEseUJBQWEsSUFBSU0sSUFBSixHQUFXQyxPQUFYLEVBQWI7QUFDQVgsaUJBQUs7QUFDSEwsb0JBQU1ILE9BREg7QUFFSEssdUJBQVMsSUFGTjtBQUdISCxzQkFBUUEsT0FBT0M7QUFIWixhQUFMO0FBS0QsV0FWRCxFQVVHLEdBVkg7QUFXQTtBQUFBLGVBQU8sSUFBSUcsT0FBSixDQUFZLFVBQUNDLE9BQUQsRUFBVWEsTUFBVixFQUFxQjtBQUN0Q2Ysc0JBQVFNLElBQVIsQ0FBYSxnQkFBUTtBQUNuQkUsMkJBQVcsSUFBWDtBQUNBTCxxQkFBS2EsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JwQixNQUFsQixFQUEwQixFQUFFRyxTQUFTa0IsSUFBWCxFQUExQixDQUFMO0FBQ0Esb0JBQUlYLFVBQUosRUFBZ0I7QUFDZCxzQkFBTVksT0FBTyxJQUFJTixJQUFKLEdBQVdDLE9BQVgsS0FBdUJQLFVBQXBDO0FBQ0FFLDZCQUFXLFlBQU07QUFDZk4seUJBQUs7QUFDSEwsNEJBQU1ILE9BREg7QUFFSEssK0JBQVMsS0FGTjtBQUdISCw4QkFBUUEsT0FBT0M7QUFIWixxQkFBTDtBQUtELG1CQU5ELEVBTUdxQixPQUFPLEdBQVAsR0FBYSxNQUFNQSxJQUFuQixHQUEwQixDQU43QjtBQU9EO0FBQ0RqQjtBQUNELGVBZEQsRUFjR2tCLEtBZEgsQ0FjUyxlQUFPO0FBQ2RMLHVCQUFPTSxHQUFQO0FBQ0QsZUFoQkQ7QUFpQkQsYUFsQk07QUFBUDtBQWRXOztBQUFBO0FBaUNaO0FBQ0QsYUFBT3BCLFFBQVFDLE9BQVIsQ0FBZ0JDLEtBQUtOLE1BQUwsQ0FBaEIsQ0FBUDtBQUNELEtBcER5QjtBQUFBLEdBQVg7QUFBQSxDIiwiZmlsZSI6ImFzeW5jLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IExPQURJTkcgPSAnQGFzeW5jL0xvYWRpbmcnO1xuXG5leHBvcnQgZGVmYXVsdCAoc3RvcmUpID0+IG5leHQgPT4gKGFjdGlvbiA9IHtcbiAgdHlwZTogJycsXG4gIGlnbm9yZUxvYWRpbmc6IGZhbHNlLFxuICBwYXlsb2FkOiBmYWxzZSxcbn0pID0+IHtcbiAgaWYgKCFhY3Rpb24ucGF5bG9hZCkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV4dChhY3Rpb24pKTtcbiAgfVxuXG4gIGxldCBwcm9taXNlID0gdW5kZWZpbmVkO1xuICBsZXQgcGF5bG9hZCA9IGFjdGlvbi5wYXlsb2FkO1xuICBpZiAodHlwZW9mIGFjdGlvbi5wYXlsb2FkID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcGF5bG9hZCA9IGFjdGlvbi5wYXlsb2FkKCk7XG4gIH1cbiAgaWYgKChwYXlsb2FkLnRoZW4gJiYgdHlwZW9mKHBheWxvYWQudGhlbikgPT09ICdmdW5jdGlvbicpKSB7XG4gICAgcHJvbWlzZSA9IHBheWxvYWQ7XG4gIH1cbiAgaWYgKHByb21pc2UpIHtcbiAgICBsZXQgc2hvd0xvYWRlciA9IGZhbHNlO1xuICAgIGxldCBmaW5pc2hlZCA9IGZhbHNlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGZpbmlzaGVkIHx8ICFwcm9jZXNzLmVudi5CUk9XU0VSIHx8IGFjdGlvbi5pZ25vcmVMb2FkaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNob3dMb2FkZXIgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgIG5leHQoe1xuICAgICAgICB0eXBlOiBMT0FESU5HLFxuICAgICAgICBwYXlsb2FkOiB0cnVlLFxuICAgICAgICBhY3Rpb246IGFjdGlvbi50eXBlLFxuICAgICAgfSk7XG4gICAgfSwgMTAwKTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgcGF5bG9hZC50aGVuKGRhdGEgPT4ge1xuICAgICAgICBmaW5pc2hlZCA9IHRydWU7XG4gICAgICAgIG5leHQoT2JqZWN0LmFzc2lnbih7fSwgYWN0aW9uLCB7IHBheWxvYWQ6IGRhdGEgfSkpO1xuICAgICAgICBpZiAoc2hvd0xvYWRlcikge1xuICAgICAgICAgIGNvbnN0IHRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHNob3dMb2FkZXI7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBuZXh0KHtcbiAgICAgICAgICAgICAgdHlwZTogTE9BRElORyxcbiAgICAgICAgICAgICAgcGF5bG9hZDogZmFsc2UsXG4gICAgICAgICAgICAgIGFjdGlvbjogYWN0aW9uLnR5cGUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LCB0aW1lIDwgNTAwID8gNTAwIC0gdGltZSA6IDApO1xuICAgICAgICB9XG4gICAgICAgIHJlc29sdmUoKTtcbiAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXh0KGFjdGlvbikpO1xufTtcbiJdfQ==