'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (process.env.BROWSER) {
  require('./user-item.scss');
}

var UserItem = function (_Component) {
  _inherits(UserItem, _Component);

  function UserItem() {
    _classCallCheck(this, UserItem);

    return _possibleConstructorReturn(this, (UserItem.__proto__ || Object.getPrototypeOf(UserItem)).apply(this, arguments));
  }

  _createClass(UserItem, [{
    key: 'render',
    value: function render() {
      var user = this.props.user.toJS();
      return _react2.default.createElement(
        'li',
        { className: 'UserItem' },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/user/' + user._id },
          _react2.default.createElement('img', { src: user.picture.thumbnail }),
          _react2.default.createElement(
            'span',
            null,
            ' ' + user.name.title + '. ' + user.name.first + ' ' + user.name.last
          ),
          _react2.default.createElement('img', { className: 'arrow', src: 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-arrow-right-128.png' })
        )
      );
    }
  }]);

  return UserItem;
}(_react.Component);

exports.default = UserItem;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zaGFyZWQvdmlld3MvY29tcG9uZW50cy9ob21lL3VzZXItbGlzdC91c2VyLWl0ZW0vdXNlci1pdGVtLmpzIl0sIm5hbWVzIjpbInByb2Nlc3MiLCJlbnYiLCJCUk9XU0VSIiwicmVxdWlyZSIsIlVzZXJJdGVtIiwidXNlciIsInByb3BzIiwidG9KUyIsIl9pZCIsInBpY3R1cmUiLCJ0aHVtYm5haWwiLCJuYW1lIiwidGl0bGUiLCJmaXJzdCIsImxhc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7Ozs7Ozs7OztBQUVBLElBQUlBLFFBQVFDLEdBQVIsQ0FBWUMsT0FBaEIsRUFBeUI7QUFDdkJDLFVBQVEsa0JBQVI7QUFDRDs7SUFFb0JDLFE7Ozs7Ozs7Ozs7OzZCQUNWO0FBQ1AsVUFBTUMsT0FBTyxLQUFLQyxLQUFMLENBQVdELElBQVgsQ0FBZ0JFLElBQWhCLEVBQWI7QUFDQSxhQUNFO0FBQUE7QUFBQSxVQUFJLFdBQVUsVUFBZDtBQUNFO0FBQUE7QUFBQSxZQUFNLGVBQWFGLEtBQUtHLEdBQXhCO0FBQ0UsaURBQUssS0FBS0gsS0FBS0ksT0FBTCxDQUFhQyxTQUF2QixHQURGO0FBRUU7QUFBQTtBQUFBO0FBQUEsa0JBQ09MLEtBQUtNLElBQUwsQ0FBVUMsS0FEakIsVUFDMkJQLEtBQUtNLElBQUwsQ0FBVUUsS0FEckMsU0FDOENSLEtBQUtNLElBQUwsQ0FBVUc7QUFEeEQsV0FGRjtBQUtFLGlEQUFLLFdBQVUsT0FBZixFQUF1QixLQUFJLG1GQUEzQjtBQUxGO0FBREYsT0FERjtBQVdEOzs7Ozs7a0JBZGtCVixRIiwiZmlsZSI6InVzZXItaXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcblxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgcmVxdWlyZSgnLi91c2VyLWl0ZW0uc2NzcycpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB1c2VyID0gdGhpcy5wcm9wcy51c2VyLnRvSlMoKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGNsYXNzTmFtZT1cIlVzZXJJdGVtXCI+XG4gICAgICAgIDxMaW5rIHRvPXtgL3VzZXIvJHt1c2VyLl9pZH1gfT5cbiAgICAgICAgICA8aW1nIHNyYz17dXNlci5waWN0dXJlLnRodW1ibmFpbH0gLz5cbiAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgIHtgICR7dXNlci5uYW1lLnRpdGxlfS4gJHt1c2VyLm5hbWUuZmlyc3R9ICR7dXNlci5uYW1lLmxhc3R9YH1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhcnJvd1wiIHNyYz1cImh0dHBzOi8vY2RuNC5pY29uZmluZGVyLmNvbS9kYXRhL2ljb25zL2lvbmljb25zLzUxMi9pY29uLWlvczctYXJyb3ctcmlnaHQtMTI4LnBuZ1wiIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgKTtcbiAgfVxufVxuIl19