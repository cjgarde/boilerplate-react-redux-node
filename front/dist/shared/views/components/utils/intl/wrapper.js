'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactIntl = require('react-intl');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InternationalizationWrapper = function (_Component) {
  _inherits(InternationalizationWrapper, _Component);

  function InternationalizationWrapper() {
    _classCallCheck(this, InternationalizationWrapper);

    return _possibleConstructorReturn(this, (InternationalizationWrapper.__proto__ || Object.getPrototypeOf(InternationalizationWrapper)).apply(this, arguments));
  }

  _createClass(InternationalizationWrapper, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return {
        intl: this.props.intl
      };
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children;
    }
  }]);

  return InternationalizationWrapper;
}(_react.Component);

InternationalizationWrapper.childContextTypes = {
  intl: _react2.default.PropTypes.object
};

exports.default = (0, _reactIntl.injectIntl)(InternationalizationWrapper);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zaGFyZWQvdmlld3MvY29tcG9uZW50cy91dGlscy9pbnRsL3dyYXBwZXIuanMiXSwibmFtZXMiOlsiSW50ZXJuYXRpb25hbGl6YXRpb25XcmFwcGVyIiwiaW50bCIsInByb3BzIiwiY2hpbGRyZW4iLCJjaGlsZENvbnRleHRUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0lBR01BLDJCOzs7Ozs7Ozs7OztzQ0FDYztBQUNoQixhQUFPO0FBQ0xDLGNBQU0sS0FBS0MsS0FBTCxDQUFXRDtBQURaLE9BQVA7QUFHRDs7OzZCQUNRO0FBQ1AsYUFBTyxLQUFLQyxLQUFMLENBQVdDLFFBQWxCO0FBQ0Q7Ozs7OztBQUdISCw0QkFBNEJJLGlCQUE1QixHQUFnRDtBQUM5Q0gsUUFBTSxnQkFBTUksU0FBTixDQUFnQkM7QUFEd0IsQ0FBaEQ7O2tCQUllLDJCQUFXTiwyQkFBWCxDIiwiZmlsZSI6IndyYXBwZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaW5qZWN0SW50bCB9IGZyb20gJ3JlYWN0LWludGwnO1xuXG5cbmNsYXNzIEludGVybmF0aW9uYWxpemF0aW9uV3JhcHBlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGdldENoaWxkQ29udGV4dCgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaW50bDogdGhpcy5wcm9wcy5pbnRsLFxuICAgIH07XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuO1xuICB9XG59XG5cbkludGVybmF0aW9uYWxpemF0aW9uV3JhcHBlci5jaGlsZENvbnRleHRUeXBlcyA9IHtcbiAgaW50bDogUmVhY3QuUHJvcFR5cGVzLm9iamVjdCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGluamVjdEludGwoSW50ZXJuYXRpb25hbGl6YXRpb25XcmFwcGVyKTtcbiJdfQ==