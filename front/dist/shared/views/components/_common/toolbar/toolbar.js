'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (process.env.BROWSER) {
  require('./toolbar.scss');
}

var Toolbar = function (_Component) {
  _inherits(Toolbar, _Component);

  function Toolbar() {
    _classCallCheck(this, Toolbar);

    return _possibleConstructorReturn(this, (Toolbar.__proto__ || Object.getPrototypeOf(Toolbar)).apply(this, arguments));
  }

  _createClass(Toolbar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'Toolbar' },
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/' },
          _react2.default.createElement('img', { src: 'https://randomuser.me/api/portraits/women/68.jpg' })
        ),
        _react2.default.createElement(
          'h1',
          null,
          'Contact List'
        ),
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/user/new', className: 'button btn-primary btn' },
          'Create'
        )
      );
    }
  }]);

  return Toolbar;
}(_react.Component);

function stateToProps(state) {
  return {
    user: state.get('user')
  };
}

exports.default = (0, _reactRedux.connect)(stateToProps)(Toolbar);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zaGFyZWQvdmlld3MvY29tcG9uZW50cy9fY29tbW9uL3Rvb2xiYXIvdG9vbGJhci5qcyJdLCJuYW1lcyI6WyJwcm9jZXNzIiwiZW52IiwiQlJPV1NFUiIsInJlcXVpcmUiLCJUb29sYmFyIiwic3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ1c2VyIiwiZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxRQUFRQyxHQUFSLENBQVlDLE9BQWhCLEVBQXlCO0FBQ3ZCQyxVQUFRLGdCQUFSO0FBQ0Q7O0lBRUtDLE87Ozs7Ozs7Ozs7OzZCQUNLO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUEsWUFBTSxJQUFHLEdBQVQ7QUFDRSxpREFBSyxLQUFJLGtEQUFUO0FBREYsU0FERjtBQUtFO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FMRjtBQU1FO0FBQUE7QUFBQSxZQUFNLElBQUcsV0FBVCxFQUFxQixXQUFVLHdCQUEvQjtBQUFBO0FBQUE7QUFORixPQURGO0FBVUQ7Ozs7OztBQUdILFNBQVNDLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQzNCLFNBQU87QUFDTEMsVUFBTUQsTUFBTUUsR0FBTixDQUFVLE1BQVY7QUFERCxHQUFQO0FBR0Q7O2tCQUVjLHlCQUFRSCxZQUFSLEVBQXNCRCxPQUF0QixDIiwiZmlsZSI6InRvb2xiYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xuXG5pZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xuICByZXF1aXJlKCcuL3Rvb2xiYXIuc2NzcycpO1xufVxuXG5jbGFzcyBUb29sYmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlRvb2xiYXJcIj5cbiAgICAgICAgPExpbmsgdG89XCIvXCIgPlxuICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS9wb3J0cmFpdHMvd29tZW4vNjguanBnXCIgLz5cbiAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgIDxoMT5Db250YWN0IExpc3Q8L2gxPlxuICAgICAgICA8TGluayB0bz1cIi91c2VyL25ld1wiIGNsYXNzTmFtZT1cImJ1dHRvbiBidG4tcHJpbWFyeSBidG5cIiA+Q3JlYXRlPC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICB1c2VyOiBzdGF0ZS5nZXQoJ3VzZXInKSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZVRvUHJvcHMpKFRvb2xiYXIpO1xuIl19