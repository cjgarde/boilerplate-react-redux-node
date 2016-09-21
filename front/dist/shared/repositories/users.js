'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _restful = require('./drivers/restful');

var _restful2 = _interopRequireDefault(_restful);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  getAllUsers: function getAllUsers() {
    return _restful2.default.get({
      endpoint: 'users'
    });
  },
  getUser: function getUser(id) {
    return _restful2.default.get({
      endpoint: 'users/' + id
    });
  },
  updateUser: function updateUser(user) {
    return _restful2.default.put({
      endpoint: 'users/' + user._id,
      params: user
    });
  },
  deleteUser: function deleteUser(id) {
    return _restful2.default.delete({
      endpoint: 'users/' + id
    });
  },
  createUser: function createUser(user) {
    return _restful2.default.post({
      endpoint: 'users',
      params: user
    });
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zaGFyZWQvcmVwb3NpdG9yaWVzL3VzZXJzLmpzIl0sIm5hbWVzIjpbImdldEFsbFVzZXJzIiwiZ2V0IiwiZW5kcG9pbnQiLCJnZXRVc2VyIiwiaWQiLCJ1cGRhdGVVc2VyIiwidXNlciIsInB1dCIsIl9pZCIsInBhcmFtcyIsImRlbGV0ZVVzZXIiLCJkZWxldGUiLCJjcmVhdGVVc2VyIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7Ozs7OztrQkFFZTtBQUNiQSxhQURhLHlCQUNDO0FBQ1osV0FBTyxrQkFBT0MsR0FBUCxDQUFXO0FBQ2hCQyxnQkFBVTtBQURNLEtBQVgsQ0FBUDtBQUdELEdBTFk7QUFNYkMsU0FOYSxtQkFNTEMsRUFOSyxFQU1EO0FBQ1YsV0FBTyxrQkFBT0gsR0FBUCxDQUFXO0FBQ2hCQywyQkFBbUJFO0FBREgsS0FBWCxDQUFQO0FBR0QsR0FWWTtBQVdiQyxZQVhhLHNCQVdGQyxJQVhFLEVBV0k7QUFDZixXQUFPLGtCQUFPQyxHQUFQLENBQVc7QUFDaEJMLDJCQUFtQkksS0FBS0UsR0FEUjtBQUVoQkMsY0FBUUg7QUFGUSxLQUFYLENBQVA7QUFJRCxHQWhCWTtBQWlCYkksWUFqQmEsc0JBaUJGTixFQWpCRSxFQWlCRTtBQUNiLFdBQU8sa0JBQU9PLE1BQVAsQ0FBYztBQUNuQlQsMkJBQW1CRTtBQURBLEtBQWQsQ0FBUDtBQUdELEdBckJZO0FBc0JiUSxZQXRCYSxzQkFzQkZOLElBdEJFLEVBc0JJO0FBQ2YsV0FBTyxrQkFBT08sSUFBUCxDQUFZO0FBQ2pCWCx1QkFEaUI7QUFFakJPLGNBQVFIO0FBRlMsS0FBWixDQUFQO0FBSUQ7QUEzQlksQyIsImZpbGUiOiJ1c2Vycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXNmdWwgZnJvbSAnLi9kcml2ZXJzL3Jlc3RmdWwnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdldEFsbFVzZXJzKCkge1xuICAgIHJldHVybiByZXNmdWwuZ2V0KHtcbiAgICAgIGVuZHBvaW50OiAndXNlcnMnLFxuICAgIH0pO1xuICB9LFxuICBnZXRVc2VyKGlkKSB7XG4gICAgcmV0dXJuIHJlc2Z1bC5nZXQoe1xuICAgICAgZW5kcG9pbnQ6IGB1c2Vycy8ke2lkfWAsXG4gICAgfSk7XG4gIH0sXG4gIHVwZGF0ZVVzZXIodXNlcikge1xuICAgIHJldHVybiByZXNmdWwucHV0KHtcbiAgICAgIGVuZHBvaW50OiBgdXNlcnMvJHt1c2VyLl9pZH1gLFxuICAgICAgcGFyYW1zOiB1c2VyLFxuICAgIH0pO1xuICB9LFxuICBkZWxldGVVc2VyKGlkKSB7XG4gICAgcmV0dXJuIHJlc2Z1bC5kZWxldGUoe1xuICAgICAgZW5kcG9pbnQ6IGB1c2Vycy8ke2lkfWAsXG4gICAgfSk7XG4gIH0sXG4gIGNyZWF0ZVVzZXIodXNlcikge1xuICAgIHJldHVybiByZXNmdWwucG9zdCh7XG4gICAgICBlbmRwb2ludDogYHVzZXJzYCxcbiAgICAgIHBhcmFtczogdXNlcixcbiAgICB9KTtcbiAgfVxufVxuIl19