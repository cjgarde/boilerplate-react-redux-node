'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactIntl = require('react-intl');

var _wrapper = require('./wrapper');

var _wrapper2 = _interopRequireDefault(_wrapper);

var _en = require('react-intl/lib/locale-data/en');

var _en2 = _interopRequireDefault(_en);

var _es = require('react-intl/lib/locale-data/es');

var _es2 = _interopRequireDefault(_es);

var _fr = require('react-intl/lib/locale-data/fr');

var _fr2 = _interopRequireDefault(_fr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Intl = function (_Component) {
  _inherits(Intl, _Component);

  function Intl(props) {
    _classCallCheck(this, Intl);

    var _this = _possibleConstructorReturn(this, (Intl.__proto__ || Object.getPrototypeOf(Intl)).call(this, props));

    (0, _reactIntl.addLocaleData)(_en2.default);
    (0, _reactIntl.addLocaleData)(_es2.default);
    (0, _reactIntl.addLocaleData)(_fr2.default);
    return _this;
  }

  _createClass(Intl, [{
    key: 'render',
    value: function render() {
      var formats = {
        number: {
          eur: { style: 'currency', currency: 'EUR' },
          usd: { style: 'currency', currency: 'USD' }
        }
      };

      return _react2.default.createElement(
        _reactIntl.IntlProvider,
        { defaultLocale: 'en', locale: this.props.locale.language,
          messages: this.props.locale.messages,
          formats: formats,
          defaultFormats: formats },
        _react2.default.createElement(
          _wrapper2.default,
          null,
          this.props.children
        )
      );
    }
  }]);

  return Intl;
}(_react.Component);

function storeToProps(store) {
  return {
    data: store
  };
}

exports.default = (0, _reactRedux.connect)(storeToProps)(Intl);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zaGFyZWQvdmlld3MvY29tcG9uZW50cy91dGlscy9pbnRsL2ludGwuanMiXSwibmFtZXMiOlsiSW50bCIsInByb3BzIiwiZm9ybWF0cyIsIm51bWJlciIsImV1ciIsInN0eWxlIiwiY3VycmVuY3kiLCJ1c2QiLCJsb2NhbGUiLCJsYW5ndWFnZSIsIm1lc3NhZ2VzIiwiY2hpbGRyZW4iLCJzdG9yZVRvUHJvcHMiLCJzdG9yZSIsImRhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFFQTs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBR01BLEk7OztBQUNKLGdCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsNEdBQ1hBLEtBRFc7O0FBRWpCO0FBQ0E7QUFDQTtBQUppQjtBQUtsQjs7Ozs2QkFFUTtBQUNQLFVBQU1DLFVBQVU7QUFDZEMsZ0JBQVE7QUFDTkMsZUFBSyxFQUFFQyxPQUFPLFVBQVQsRUFBcUJDLFVBQVUsS0FBL0IsRUFEQztBQUVOQyxlQUFLLEVBQUVGLE9BQU8sVUFBVCxFQUFxQkMsVUFBVSxLQUEvQjtBQUZDO0FBRE0sT0FBaEI7O0FBT0EsYUFDRTtBQUFBO0FBQUEsVUFBYyxlQUFjLElBQTVCLEVBQWlDLFFBQVEsS0FBS0wsS0FBTCxDQUFXTyxNQUFYLENBQWtCQyxRQUEzRDtBQUNFLG9CQUFVLEtBQUtSLEtBQUwsQ0FBV08sTUFBWCxDQUFrQkUsUUFEOUI7QUFFRSxtQkFBU1IsT0FGWDtBQUdFLDBCQUFnQkEsT0FIbEI7QUFJRTtBQUFBO0FBQUE7QUFDRyxlQUFLRCxLQUFMLENBQVdVO0FBRGQ7QUFKRixPQURGO0FBVUQ7Ozs7OztBQUdILFNBQVNDLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQzNCLFNBQU87QUFDTEMsVUFBTUQ7QUFERCxHQUFQO0FBR0Q7O2tCQUVjLHlCQUFRRCxZQUFSLEVBQXNCWixJQUF0QixDIiwiZmlsZSI6ImludGwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgSW50bFByb3ZpZGVyLCBhZGRMb2NhbGVEYXRhIH0gZnJvbSAncmVhY3QtaW50bCc7XG5pbXBvcnQgV3JhcHBlciBmcm9tICcuL3dyYXBwZXInO1xuXG5pbXBvcnQgZW4gZnJvbSAncmVhY3QtaW50bC9saWIvbG9jYWxlLWRhdGEvZW4nO1xuaW1wb3J0IGVzIGZyb20gJ3JlYWN0LWludGwvbGliL2xvY2FsZS1kYXRhL2VzJztcbmltcG9ydCBmciBmcm9tICdyZWFjdC1pbnRsL2xpYi9sb2NhbGUtZGF0YS9mcic7XG5cblxuY2xhc3MgSW50bCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGFkZExvY2FsZURhdGEoZW4pO1xuICAgIGFkZExvY2FsZURhdGEoZXMpO1xuICAgIGFkZExvY2FsZURhdGEoZnIpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGZvcm1hdHMgPSB7XG4gICAgICBudW1iZXI6IHtcbiAgICAgICAgZXVyOiB7IHN0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeTogJ0VVUicgfSxcbiAgICAgICAgdXNkOiB7IHN0eWxlOiAnY3VycmVuY3knLCBjdXJyZW5jeTogJ1VTRCcgfSxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8SW50bFByb3ZpZGVyIGRlZmF1bHRMb2NhbGU9XCJlblwiIGxvY2FsZT17dGhpcy5wcm9wcy5sb2NhbGUubGFuZ3VhZ2V9XG4gICAgICAgIG1lc3NhZ2VzPXt0aGlzLnByb3BzLmxvY2FsZS5tZXNzYWdlc31cbiAgICAgICAgZm9ybWF0cz17Zm9ybWF0c31cbiAgICAgICAgZGVmYXVsdEZvcm1hdHM9e2Zvcm1hdHN9ID5cbiAgICAgICAgPFdyYXBwZXI+XG4gICAgICAgICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgICAgIDwvV3JhcHBlcj5cbiAgICAgIDwvSW50bFByb3ZpZGVyPlxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RvcmVUb1Byb3BzKHN0b3JlKSB7XG4gIHJldHVybiB7XG4gICAgZGF0YTogc3RvcmUsXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3Qoc3RvcmVUb1Byb3BzKShJbnRsKTtcbiJdfQ==