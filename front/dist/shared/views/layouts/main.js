'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainLayout = function (_Component) {
  _inherits(MainLayout, _Component);

  function MainLayout() {
    _classCallCheck(this, MainLayout);

    return _possibleConstructorReturn(this, (MainLayout.__proto__ || Object.getPrototypeOf(MainLayout)).apply(this, arguments));
  }

  _createClass(MainLayout, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'html',
        null,
        _react2.default.createElement(
          'head',
          null,
          _react2.default.createElement('script', { id: 'initial-state', type: 'text/json',
            dangerouslySetInnerHTML: { __html: JSON.stringify(this.props.data) } }),
          _react2.default.createElement(
            'title',
            null,
            'Contact List'
          ),
          _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
          _react2.default.createElement('script', { async: true, src: '/static/javascripts/bundle.js' }),
          _react2.default.createElement('link', { rel: 'stylesheet', href: 'https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css' }),
          _react2.default.createElement('link', { rel: 'stylesheet', href: '/static/stylesheets/style.css' })
        ),
        _react2.default.createElement(
          'body',
          null,
          _react2.default.createElement('div', { id: 'react-app', dangerouslySetInnerHTML: { __html: this.props.children } })
        )
      );
    }
  }]);

  return MainLayout;
}(_react.Component);

function storeToProps(store) {
  return {
    data: store
  };
}

exports.default = (0, _reactRedux.connect)(storeToProps)(MainLayout);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zaGFyZWQvdmlld3MvbGF5b3V0cy9tYWluLmpzIl0sIm5hbWVzIjpbIk1haW5MYXlvdXQiLCJfX2h0bWwiLCJKU09OIiwic3RyaW5naWZ5IiwicHJvcHMiLCJkYXRhIiwiY2hpbGRyZW4iLCJzdG9yZVRvUHJvcHMiLCJzdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRU1BLFU7Ozs7Ozs7Ozs7OzZCQUNLO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFDRSxvREFBUSxJQUFHLGVBQVgsRUFBMkIsTUFBSyxXQUFoQztBQUNFLHFDQUF5QixFQUFFQyxRQUFRQyxLQUFLQyxTQUFMLENBQWUsS0FBS0MsS0FBTCxDQUFXQyxJQUExQixDQUFWLEVBRDNCLEdBREY7QUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSkY7QUFLRSxrREFBTSxNQUFLLFVBQVgsRUFBc0IsU0FBUSxxQ0FBOUIsR0FMRjtBQU1FLG9EQUFRLFdBQVIsRUFBYyxLQUFJLCtCQUFsQixHQU5GO0FBT0Usa0RBQU0sS0FBSSxZQUFWLEVBQXVCLE1BQUssd0VBQTVCLEdBUEY7QUFRRSxrREFBTSxLQUFJLFlBQVYsRUFBdUIsTUFBSywrQkFBNUI7QUFSRixTQURGO0FBV0U7QUFBQTtBQUFBO0FBQ0UsaURBQUssSUFBRyxXQUFSLEVBQW9CLHlCQUF5QixFQUFFSixRQUFRLEtBQUtHLEtBQUwsQ0FBV0UsUUFBckIsRUFBN0M7QUFERjtBQVhGLE9BREY7QUFpQkQ7Ozs7OztBQUdILFNBQVNDLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQzNCLFNBQU87QUFDTEgsVUFBTUc7QUFERCxHQUFQO0FBR0Q7O2tCQUVjLHlCQUFRRCxZQUFSLEVBQXNCUCxVQUF0QixDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuY2xhc3MgTWFpbkxheW91dCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGh0bWw+XG4gICAgICAgIDxoZWFkPlxuICAgICAgICAgIDxzY3JpcHQgaWQ9XCJpbml0aWFsLXN0YXRlXCIgdHlwZT1cInRleHQvanNvblwiXG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IEpTT04uc3RyaW5naWZ5KHRoaXMucHJvcHMuZGF0YSkgfX0gPlxuICAgICAgICAgIDwvc2NyaXB0PlxuICAgICAgICAgIDx0aXRsZT5Db250YWN0IExpc3Q8L3RpdGxlPlxuICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgICAgPHNjcmlwdCBhc3luYyBzcmM9XCIvc3RhdGljL2phdmFzY3JpcHRzL2J1bmRsZS5qc1wiPjwvc2NyaXB0PlxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvbGF0ZXN0L2Nzcy9ib290c3RyYXAubWluLmNzc1wiIC8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9XCIvc3RhdGljL3N0eWxlc2hlZXRzL3N0eWxlLmNzc1wiIC8+XG4gICAgICAgIDwvaGVhZD5cbiAgICAgICAgPGJvZHk+XG4gICAgICAgICAgPGRpdiBpZD1cInJlYWN0LWFwcFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdGhpcy5wcm9wcy5jaGlsZHJlbiB9fSAvPlxuICAgICAgICA8L2JvZHk+XG4gICAgICA8L2h0bWw+XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdG9yZVRvUHJvcHMoc3RvcmUpIHtcbiAgcmV0dXJuIHtcbiAgICBkYXRhOiBzdG9yZSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdG9yZVRvUHJvcHMpKE1haW5MYXlvdXQpO1xuIl19