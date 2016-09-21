'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStore = createStore;

var _redux = require('redux');

var _async = require('flux/middlewares/async');

var _async2 = _interopRequireDefault(_async);

var _flux = require('flux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createStore(initialState) {
  return (0, _redux.createStore)(_flux.reducers, initialState || _flux.INITIAL_STATE, (0, _redux.applyMiddleware)(_async2.default));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zaGFyZWQvZmx1eC9zdG9yZS9mbHV4LXN0b3JlLmpzIl0sIm5hbWVzIjpbImNyZWF0ZVN0b3JlIiwiaW5pdGlhbFN0YXRlIl0sIm1hcHBpbmdzIjoiOzs7OztRQUlnQkEsVyxHQUFBQSxXOztBQUpoQjs7QUFDQTs7OztBQUNBOzs7O0FBRU8sU0FBU0EsV0FBVCxDQUFxQkMsWUFBckIsRUFBbUM7QUFDeEMsU0FBTyx3Q0FBMkJBLG1DQUEzQixFQUEwRCw0Q0FBMUQsQ0FBUDtBQUNEIiwiZmlsZSI6ImZsdXgtc3RvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTdG9yZSBhcyByZWR1eENyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgYXN5bmNNaWRkbGV3YXJlIGZyb20gJ2ZsdXgvbWlkZGxld2FyZXMvYXN5bmMnO1xuaW1wb3J0IHsgcmVkdWNlcnMsIElOSVRJQUxfU1RBVEUgfSBmcm9tICdmbHV4JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0b3JlKGluaXRpYWxTdGF0ZSkge1xuICByZXR1cm4gcmVkdXhDcmVhdGVTdG9yZShyZWR1Y2VycywgaW5pdGlhbFN0YXRlIHx8IElOSVRJQUxfU1RBVEUsIGFwcGx5TWlkZGxld2FyZShhc3luY01pZGRsZXdhcmUpKTtcbn0iXX0=