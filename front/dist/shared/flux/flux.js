'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Actions = exports.INITIAL_STATE = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.reducers = reducers;

var _immutable = require('immutable');

var _home = require('flux/components/home');

var _home2 = _interopRequireDefault(_home);

var _user = require('flux/components/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var INITIAL_STATE = exports.INITIAL_STATE = (0, _immutable.Map)({
  home: _home2.default.INITIAL_STATE,
  user: _user2.default.INITIAL_STATE
});

var Actions = exports.Actions = function () {
  function Actions() {
    _classCallCheck(this, Actions);
  }

  _createClass(Actions, [{
    key: 'Home',
    get: function get() {
      return new _home2.default.Actions();
    }
  }, {
    key: 'User',
    get: function get() {
      return new _user2.default.Actions();
    }
  }]);

  return Actions;
}();

function reducers(previousState, action) {
  return previousState.update('home', function (state) {
    return _home2.default.reducers(state, action);
  }).update('user', function (state) {
    return _user2.default.reducers(state, action);
  });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zaGFyZWQvZmx1eC9mbHV4LmpzIl0sIm5hbWVzIjpbInJlZHVjZXJzIiwiSU5JVElBTF9TVEFURSIsImhvbWUiLCJ1c2VyIiwiQWN0aW9ucyIsInByZXZpb3VzU3RhdGUiLCJhY3Rpb24iLCJ1cGRhdGUiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O1FBa0JnQkEsUSxHQUFBQSxROztBQWxCaEI7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7QUFFTyxJQUFNQyx3Q0FBZ0Isb0JBQUk7QUFDL0JDLFFBQU0sZUFBS0QsYUFEb0I7QUFFL0JFLFFBQU0sZUFBS0Y7QUFGb0IsQ0FBSixDQUF0Qjs7SUFLTUcsTyxXQUFBQSxPOzs7Ozs7O3dCQUNBO0FBQ1QsYUFBTyxJQUFJLGVBQUtBLE9BQVQsRUFBUDtBQUNEOzs7d0JBQ1U7QUFDVCxhQUFPLElBQUksZUFBS0EsT0FBVCxFQUFQO0FBQ0Q7Ozs7OztBQUdJLFNBQVNKLFFBQVQsQ0FBa0JLLGFBQWxCLEVBQWlDQyxNQUFqQyxFQUF5QztBQUM5QyxTQUFPRCxjQUNKRSxNQURJLENBQ0csTUFESCxFQUNXO0FBQUEsV0FBUyxlQUFLUCxRQUFMLENBQWNRLEtBQWQsRUFBcUJGLE1BQXJCLENBQVQ7QUFBQSxHQURYLEVBRUpDLE1BRkksQ0FFRyxNQUZILEVBRVc7QUFBQSxXQUFTLGVBQUtQLFFBQUwsQ0FBY1EsS0FBZCxFQUFxQkYsTUFBckIsQ0FBVDtBQUFBLEdBRlgsQ0FBUDtBQUdEIiwiZmlsZSI6ImZsdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYXAsIExpc3QgfSBmcm9tICdpbW11dGFibGUnO1xuaW1wb3J0IEhvbWUgZnJvbSAnZmx1eC9jb21wb25lbnRzL2hvbWUnO1xuaW1wb3J0IFVzZXIgZnJvbSAnZmx1eC9jb21wb25lbnRzL3VzZXInO1xuXG5leHBvcnQgY29uc3QgSU5JVElBTF9TVEFURSA9IE1hcCh7XG4gIGhvbWU6IEhvbWUuSU5JVElBTF9TVEFURSxcbiAgdXNlcjogVXNlci5JTklUSUFMX1NUQVRFLFxufSk7XG5cbmV4cG9ydCBjbGFzcyBBY3Rpb25zIHtcbiAgZ2V0IEhvbWUoKSB7XG4gICAgcmV0dXJuIG5ldyBIb21lLkFjdGlvbnMoKTtcbiAgfVxuICBnZXQgVXNlcigpIHtcbiAgICByZXR1cm4gbmV3IFVzZXIuQWN0aW9ucygpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWR1Y2VycyhwcmV2aW91c1N0YXRlLCBhY3Rpb24pIHtcbiAgcmV0dXJuIHByZXZpb3VzU3RhdGVcbiAgICAudXBkYXRlKCdob21lJywgc3RhdGUgPT4gSG9tZS5yZWR1Y2VycyhzdGF0ZSwgYWN0aW9uKSlcbiAgICAudXBkYXRlKCd1c2VyJywgc3RhdGUgPT4gVXNlci5yZWR1Y2VycyhzdGF0ZSwgYWN0aW9uKSk7XG59XG4iXX0=