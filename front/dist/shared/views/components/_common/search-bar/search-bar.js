'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _FormControl = require('react-bootstrap/lib/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _FormGroup = require('react-bootstrap/lib/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (process.env.BROWSER) {
  require('./search-bar.scss');
}

var SearchBar = function (_Component) {
  _inherits(SearchBar, _Component);

  function SearchBar(props) {
    _classCallCheck(this, SearchBar);

    var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

    _this.onChange = function (evt) {
      _this.setState({
        value: evt.target.value
      }, function () {
        _this.props.onChange && _this.props.onChange(_this.state.value);
      });
    };

    _this.state = {
      value: _this.props.initialValue
    };
    return _this;
  }

  _createClass(SearchBar, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _FormGroup2.default,
        null,
        _react2.default.createElement(_FormControl2.default, { value: this.state.value, onChange: this.onChange, type: 'text', placeholder: 'Search...' })
      );
    }
  }]);

  return SearchBar;
}(_react.Component);

SearchBar.propTypes = {
  initialValue: _react2.default.PropTypes.string,
  onChange: _react2.default.PropTypes.func
};
SearchBar.defaultProps = {
  initialValue: ''
};


function stateToProps(state) {
  return {
    user: state.get('user')
  };
}

exports.default = (0, _reactRedux.connect)(stateToProps)(SearchBar);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zaGFyZWQvdmlld3MvY29tcG9uZW50cy9fY29tbW9uL3NlYXJjaC1iYXIvc2VhcmNoLWJhci5qcyJdLCJuYW1lcyI6WyJwcm9jZXNzIiwiZW52IiwiQlJPV1NFUiIsInJlcXVpcmUiLCJTZWFyY2hCYXIiLCJwcm9wcyIsIm9uQ2hhbmdlIiwic2V0U3RhdGUiLCJ2YWx1ZSIsImV2dCIsInRhcmdldCIsInN0YXRlIiwiaW5pdGlhbFZhbHVlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiZnVuYyIsImRlZmF1bHRQcm9wcyIsInN0YXRlVG9Qcm9wcyIsInVzZXIiLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxRQUFRQyxHQUFSLENBQVlDLE9BQWhCLEVBQXlCO0FBQ3ZCQyxVQUFRLG1CQUFSO0FBQ0Q7O0lBRUtDLFM7OztBQVVKLHFCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsc0hBQ1hBLEtBRFc7O0FBQUEsVUFNbkJDLFFBTm1CLEdBTVIsZUFBTztBQUNoQixZQUFLQyxRQUFMLENBQWM7QUFDWkMsZUFBT0MsSUFBSUMsTUFBSixDQUFXRjtBQUROLE9BQWQsRUFFRyxZQUFNO0FBQ1AsY0FBS0gsS0FBTCxDQUFXQyxRQUFYLElBQXVCLE1BQUtELEtBQUwsQ0FBV0MsUUFBWCxDQUFvQixNQUFLSyxLQUFMLENBQVdILEtBQS9CLENBQXZCO0FBQ0QsT0FKRDtBQUtELEtBWmtCOztBQUVqQixVQUFLRyxLQUFMLEdBQWE7QUFDWEgsYUFBTyxNQUFLSCxLQUFMLENBQVdPO0FBRFAsS0FBYjtBQUZpQjtBQUtsQjs7Ozs2QkFTUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsK0RBQWEsT0FBTyxLQUFLRCxLQUFMLENBQVdILEtBQS9CLEVBQXNDLFVBQVUsS0FBS0YsUUFBckQsRUFBK0QsTUFBSyxNQUFwRSxFQUEyRSxhQUFZLFdBQXZGO0FBREYsT0FERjtBQUtEOzs7Ozs7QUE5QkdGLFMsQ0FDR1MsUyxHQUFZO0FBQ2pCRCxnQkFBYyxnQkFBTUUsU0FBTixDQUFnQkMsTUFEYjtBQUVqQlQsWUFBVSxnQkFBTVEsU0FBTixDQUFnQkU7QUFGVCxDO0FBRGZaLFMsQ0FNR2EsWSxHQUFlO0FBQ3BCTCxnQkFBYztBQURNLEM7OztBQTJCeEIsU0FBU00sWUFBVCxDQUFzQlAsS0FBdEIsRUFBNkI7QUFDM0IsU0FBTztBQUNMUSxVQUFNUixNQUFNUyxHQUFOLENBQVUsTUFBVjtBQURELEdBQVA7QUFHRDs7a0JBRWMseUJBQVFGLFlBQVIsRUFBc0JkLFNBQXRCLEMiLCJmaWxlIjoic2VhcmNoLWJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IEZvcm1Hcm91cCBmcm9tICdyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Hcm91cCc7XG5cbmlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XG4gIHJlcXVpcmUoJy4vc2VhcmNoLWJhci5zY3NzJyk7XG59XG5cbmNsYXNzIFNlYXJjaEJhciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgaW5pdGlhbFZhbHVlOiBSZWFjdC5Qcm9wVHlwZXMuc3RyaW5nLFxuICAgIG9uQ2hhbmdlOiBSZWFjdC5Qcm9wVHlwZXMuZnVuYyxcbiAgfVxuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaW5pdGlhbFZhbHVlOiAnJyxcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB2YWx1ZTogdGhpcy5wcm9wcy5pbml0aWFsVmFsdWVcbiAgICB9XG4gIH1cbiAgb25DaGFuZ2UgPSBldnQgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgdmFsdWU6IGV2dC50YXJnZXQudmFsdWUsXG4gICAgfSwgKCkgPT4ge1xuICAgICAgdGhpcy5wcm9wcy5vbkNoYW5nZSAmJiB0aGlzLnByb3BzLm9uQ2hhbmdlKHRoaXMuc3RhdGUudmFsdWUpO1xuICAgIH0pXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxGb3JtR3JvdXA+XG4gICAgICAgIDxGb3JtQ29udHJvbCB2YWx1ZT17dGhpcy5zdGF0ZS52YWx1ZX0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJTZWFyY2guLi5cIiAvPlxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICB1c2VyOiBzdGF0ZS5nZXQoJ3VzZXInKSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZVRvUHJvcHMpKFNlYXJjaEJhcik7XG4iXX0=