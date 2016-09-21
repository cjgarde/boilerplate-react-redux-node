'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _toolbar = require('views/components/_common/toolbar');

var _toolbar2 = _interopRequireDefault(_toolbar);

var _reactNotificationSystem = require('react-notification-system');

var _reactNotificationSystem2 = _interopRequireDefault(_reactNotificationSystem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (process.env.BROWSER) {
  require('./home.scss');
}

var Home = function (_Component) {
  _inherits(Home, _Component);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _this2 = this;

      return {
        notification: {
          add: function add(_ref) {
            var message = _ref.message;
            var _ref$level = _ref.level;
            var level = _ref$level === undefined ? 'success' : _ref$level;

            _this2.refs.notificationSystem.addNotification({
              message: message,
              level: level
            });
          }
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'Home' },
        _react2.default.createElement(_toolbar2.default, null),
        _react2.default.createElement(
          'div',
          { className: 'content' },
          this.props.children
        ),
        _react2.default.createElement(_reactNotificationSystem2.default, { ref: 'notificationSystem' })
      );
    }
  }]);

  return Home;
}(_react.Component);

Home.childContextTypes = {
  notification: _react2.default.PropTypes.object
};


function stateToProps(state) {
  return {};
}

exports.default = (0, _reactRedux.connect)(stateToProps)(Home);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9zaGFyZWQvdmlld3MvY29tcG9uZW50cy9ob21lL2hvbWUuanMiXSwibmFtZXMiOlsicHJvY2VzcyIsImVudiIsIkJST1dTRVIiLCJyZXF1aXJlIiwiSG9tZSIsIm5vdGlmaWNhdGlvbiIsImFkZCIsIm1lc3NhZ2UiLCJsZXZlbCIsInJlZnMiLCJub3RpZmljYXRpb25TeXN0ZW0iLCJhZGROb3RpZmljYXRpb24iLCJwcm9wcyIsImNoaWxkcmVuIiwiY2hpbGRDb250ZXh0VHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJzdGF0ZVRvUHJvcHMiLCJzdGF0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQUlBLFFBQVFDLEdBQVIsQ0FBWUMsT0FBaEIsRUFBeUI7QUFDdkJDLFVBQVEsYUFBUjtBQUNEOztJQUVLQyxJOzs7Ozs7Ozs7OztzQ0FLYztBQUFBOztBQUNoQixhQUFPO0FBQ0xDLHNCQUFjO0FBQ1pDLGVBQUssbUJBQW9DO0FBQUEsZ0JBQWpDQyxPQUFpQyxRQUFqQ0EsT0FBaUM7QUFBQSxrQ0FBeEJDLEtBQXdCO0FBQUEsZ0JBQXhCQSxLQUF3Qiw4QkFBaEIsU0FBZ0I7O0FBQ3ZDLG1CQUFLQyxJQUFMLENBQVVDLGtCQUFWLENBQTZCQyxlQUE3QixDQUE2QztBQUMzQ0osOEJBRDJDO0FBRTNDQztBQUYyQyxhQUE3QztBQUlEO0FBTlc7QUFEVCxPQUFQO0FBVUQ7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxNQUFmO0FBQ0UsOERBREY7QUFFRTtBQUFBO0FBQUEsWUFBSyxXQUFVLFNBQWY7QUFDRyxlQUFLSSxLQUFMLENBQVdDO0FBRGQsU0FGRjtBQUtFLDJFQUFvQixLQUFJLG9CQUF4QjtBQUxGLE9BREY7QUFTRDs7Ozs7O0FBNUJHVCxJLENBQ0dVLGlCLEdBQW9CO0FBQ3pCVCxnQkFBYyxnQkFBTVUsU0FBTixDQUFnQkM7QUFETCxDOzs7QUE4QjdCLFNBQVNDLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQzNCLFNBQU8sRUFBUDtBQUVEOztrQkFFYyx5QkFBUUQsWUFBUixFQUFzQmIsSUFBdEIsQyIsImZpbGUiOiJob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgVG9vbGJhciBmcm9tICd2aWV3cy9jb21wb25lbnRzL19jb21tb24vdG9vbGJhcic7XG5pbXBvcnQgTm90aWZpY2F0aW9uU3lzdGVtIGZyb20gJ3JlYWN0LW5vdGlmaWNhdGlvbi1zeXN0ZW0nO1xuXG5pZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xuICByZXF1aXJlKCcuL2hvbWUuc2NzcycpO1xufVxuXG5jbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGNoaWxkQ29udGV4dFR5cGVzID0ge1xuICAgIG5vdGlmaWNhdGlvbjogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbiAgfVxuXG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgbm90aWZpY2F0aW9uOiB7XG4gICAgICAgIGFkZDogKHsgbWVzc2FnZSwgbGV2ZWwgPSAnc3VjY2VzcycgfSkgPT4ge1xuICAgICAgICAgIHRoaXMucmVmcy5ub3RpZmljYXRpb25TeXN0ZW0uYWRkTm90aWZpY2F0aW9uKHtcbiAgICAgICAgICAgIG1lc3NhZ2UsXG4gICAgICAgICAgICBsZXZlbCxcbiAgICAgICAgICB9KVxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIkhvbWVcIj5cbiAgICAgICAgPFRvb2xiYXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Tm90aWZpY2F0aW9uU3lzdGVtIHJlZj1cIm5vdGlmaWNhdGlvblN5c3RlbVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICByZXR1cm4ge1xuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlVG9Qcm9wcykoSG9tZSk7XG4iXX0=