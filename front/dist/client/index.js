'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _store = require('flux/store');

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _routes = require('routes');

var _routes2 = _interopRequireDefault(_routes);

var _immutable = require('immutable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('views/styles/main.scss');
require('react-bootstrap/');

function run() {
  var element = document.getElementById('initial-state');
  var initialState = JSON.parse(element.innerHTML);
  element.remove();
  var store = (0, _store.createStore)((0, _immutable.fromJS)(initialState));
  window.test = function () {
    return store.getState();
  };
  var routes = (0, _routes2.default)(store.getState());
  (0, _reactRouter.match)({ routes: routes, location: location }, function () {
    (0, _reactDom.render)(_react2.default.createElement(
      _reactRedux.Provider,
      { store: store },
      _react2.default.createElement(_reactRouter.Router, { children: routes, history: _reactRouter.browserHistory })
    ), document.getElementById('react-app'));
  });
}

if (['complete', 'loaded', 'interactive'].indexOf(document.readyState) !== -1 && document.body) {
  run();
} else {
  document.addEventListener('DOMContentLoaded', run, false);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jbGllbnQvaW5kZXguanMiXSwibmFtZXMiOlsicmVxdWlyZSIsInJ1biIsImVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiaW5pdGlhbFN0YXRlIiwiSlNPTiIsInBhcnNlIiwiaW5uZXJIVE1MIiwicmVtb3ZlIiwic3RvcmUiLCJ3aW5kb3ciLCJ0ZXN0IiwiZ2V0U3RhdGUiLCJyb3V0ZXMiLCJsb2NhdGlvbiIsImluZGV4T2YiLCJyZWFkeVN0YXRlIiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7OztBQUNBOzs7O0FBRUFBLFFBQVEsd0JBQVI7QUFDQUEsUUFBUSxrQkFBUjs7QUFFQSxTQUFTQyxHQUFULEdBQWU7QUFDYixNQUFNQyxVQUFVQyxTQUFTQyxjQUFULENBQXdCLGVBQXhCLENBQWhCO0FBQ0EsTUFBTUMsZUFBZUMsS0FBS0MsS0FBTCxDQUFXTCxRQUFRTSxTQUFuQixDQUFyQjtBQUNBTixVQUFRTyxNQUFSO0FBQ0EsTUFBTUMsUUFBUSx3QkFBWSx1QkFBT0wsWUFBUCxDQUFaLENBQWQ7QUFDQU0sU0FBT0MsSUFBUCxHQUFjO0FBQUEsV0FBTUYsTUFBTUcsUUFBTixFQUFOO0FBQUEsR0FBZDtBQUNBLE1BQU1DLFNBQVMsc0JBQVVKLE1BQU1HLFFBQU4sRUFBVixDQUFmO0FBQ0EsMEJBQU8sRUFBRUMsY0FBRixFQUFVQyxrQkFBVixFQUFQLEVBQThCLFlBQU07QUFDbEMsMEJBQ0U7QUFBQTtBQUFBLFFBQVUsT0FBT0wsS0FBakI7QUFDRSwyREFBUSxVQUFVSSxNQUFsQixFQUEwQixvQ0FBMUI7QUFERixLQURGLEVBSUVYLFNBQVNDLGNBQVQsQ0FBd0IsV0FBeEIsQ0FKRjtBQU1ELEdBUEQ7QUFRRDs7QUFFRCxJQUFJLENBQUMsVUFBRCxFQUFhLFFBQWIsRUFBdUIsYUFBdkIsRUFBc0NZLE9BQXRDLENBQThDYixTQUFTYyxVQUF2RCxNQUF1RSxDQUFDLENBQXhFLElBQTZFZCxTQUFTZSxJQUExRixFQUFnRztBQUM5RmpCO0FBQ0QsQ0FGRCxNQUVPO0FBQ0xFLFdBQVNnQixnQkFBVCxDQUEwQixrQkFBMUIsRUFBOENsQixHQUE5QyxFQUFtRCxLQUFuRDtBQUNEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCB7IGNyZWF0ZVN0b3JlIH0gZnJvbSAnZmx1eC9zdG9yZSc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgUm91dGVyLCBicm93c2VySGlzdG9yeSwgbWF0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuaW1wb3J0IGdldFJvdXRlcyBmcm9tICdyb3V0ZXMnO1xuaW1wb3J0IHsgZnJvbUpTIH0gZnJvbSAnaW1tdXRhYmxlJztcblxucmVxdWlyZSgndmlld3Mvc3R5bGVzL21haW4uc2NzcycpO1xucmVxdWlyZSgncmVhY3QtYm9vdHN0cmFwLycpO1xuXG5mdW5jdGlvbiBydW4oKSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5pdGlhbC1zdGF0ZScpO1xuICBjb25zdCBpbml0aWFsU3RhdGUgPSBKU09OLnBhcnNlKGVsZW1lbnQuaW5uZXJIVE1MKTtcbiAgZWxlbWVudC5yZW1vdmUoKTtcbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShmcm9tSlMoaW5pdGlhbFN0YXRlKSk7XG4gIHdpbmRvdy50ZXN0ID0gKCkgPT4gc3RvcmUuZ2V0U3RhdGUoKTtcbiAgY29uc3Qgcm91dGVzID0gZ2V0Um91dGVzKHN0b3JlLmdldFN0YXRlKCkpO1xuICBtYXRjaCgoeyByb3V0ZXMsIGxvY2F0aW9uIH0pLCAoKSA9PiB7XG4gICAgcmVuZGVyKFxuICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0gPlxuICAgICAgICA8Um91dGVyIGNoaWxkcmVuPXtyb3V0ZXN9IGhpc3Rvcnk9e2Jyb3dzZXJIaXN0b3J5fSAvPlxuICAgICAgPC9Qcm92aWRlcj4sXG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVhY3QtYXBwJylcbiAgICApO1xuICB9KTtcbn1cblxuaWYgKFsnY29tcGxldGUnLCAnbG9hZGVkJywgJ2ludGVyYWN0aXZlJ10uaW5kZXhPZihkb2N1bWVudC5yZWFkeVN0YXRlKSAhPT0gLTEgJiYgZG9jdW1lbnQuYm9keSkge1xuICBydW4oKTtcbn0gZWxzZSB7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBydW4sIGZhbHNlKTtcbn1cblxuIl19