'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _reactRouter = require('react-router');

var _ControlLabel = require('react-bootstrap/lib/ControlLabel');

var _ControlLabel2 = _interopRequireDefault(_ControlLabel);

var _FormControl = require('react-bootstrap/lib/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _FormGroup = require('react-bootstrap/lib/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _Button = require('react-bootstrap/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

var _flux = require('flux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (process.env.BROWSER) {
  require('./login.scss');
}

var Login = function (_Component) {
  _inherits(Login, _Component);

  function Login(props) {
    _classCallCheck(this, Login);

    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));

    _this.onFormChange = function (field) {
      return function (evt) {
        var form = _this.state.form;

        form[field] = evt.target.value;
        _this.setState({ form: form });
      };
    };

    _this.disableButton = function () {
      return !_this.state.form.username || !_this.state.form.password;
    };

    _this.login = function () {
      _this.props.dispatch(new _flux.Actions().User.login(_this.state.form)).then(function () {
        console.log('Login');
      }).catch(function (err) {
        console.error(err);
      });
    };

    _this.state = {
      form: {
        username: '',
        password: ''
      }
    };
    return _this;
  }

  _createClass(Login, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'Login flexbox' },
        _react2.default.createElement(
          'div',
          { className: 'box' },
          _react2.default.createElement(
            _FormGroup2.default,
            null,
            _react2.default.createElement(
              _ControlLabel2.default,
              null,
              'Username'
            ),
            _react2.default.createElement(_FormControl2.default, { value: this.state.form.username, onChange: this.onFormChange('username'), type: 'text', placeholder: 'Admin' })
          ),
          _react2.default.createElement(
            _FormGroup2.default,
            null,
            _react2.default.createElement(
              _ControlLabel2.default,
              null,
              'Password'
            ),
            _react2.default.createElement(_FormControl2.default, { value: this.state.form.password, onChange: this.onFormChange('password'), type: 'password', placeholder: '123456' })
          ),
          _react2.default.createElement(
            _FormGroup2.default,
            null,
            _react2.default.createElement(
              _Button2.default,
              { bsStyle: 'primary', className: 'pull-right', disabled: this.disableButton(), onClick: this.login },
              'Login'
            )
          )
        )
      );
    }
  }]);

  return Login;
}(_react.Component);

function stateToProps(state) {
  return {};
}

exports.default = (0, _reactRedux.connect)(stateToProps)(Login);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9zaGFyZWQvdmlld3MvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5qcyJdLCJuYW1lcyI6WyJwcm9jZXNzIiwiZW52IiwiQlJPV1NFUiIsInJlcXVpcmUiLCJMb2dpbiIsInByb3BzIiwib25Gb3JtQ2hhbmdlIiwiZm9ybSIsInN0YXRlIiwiZmllbGQiLCJldnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwiZGlzYWJsZUJ1dHRvbiIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJsb2dpbiIsImRpc3BhdGNoIiwiVXNlciIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsImVyciIsInN0YXRlVG9Qcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUVBOztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBRUE7Ozs7Ozs7Ozs7QUFFQSxJQUFJQSxRQUFRQyxHQUFSLENBQVlDLE9BQWhCLEVBQXlCO0FBQ3ZCQyxVQUFRLGNBQVI7QUFDRDs7SUFHS0MsSzs7O0FBQ0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw4R0FDWEEsS0FEVzs7QUFBQSxVQVVuQkMsWUFWbUIsR0FVSjtBQUFBLGFBQVMsZUFBTztBQUFBLFlBQ3JCQyxJQURxQixHQUNaLE1BQUtDLEtBRE8sQ0FDckJELElBRHFCOztBQUU3QkEsYUFBS0UsS0FBTCxJQUFjQyxJQUFJQyxNQUFKLENBQVdDLEtBQXpCO0FBQ0EsY0FBS0MsUUFBTCxDQUFjLEVBQUVOLFVBQUYsRUFBZDtBQUNELE9BSmM7QUFBQSxLQVZJOztBQUFBLFVBZ0JuQk8sYUFoQm1CLEdBZ0JIO0FBQUEsYUFDZCxDQUFDLE1BQUtOLEtBQUwsQ0FBV0QsSUFBWCxDQUFnQlEsUUFBakIsSUFBNkIsQ0FBQyxNQUFLUCxLQUFMLENBQVdELElBQVgsQ0FBZ0JTLFFBRGhDO0FBQUEsS0FoQkc7O0FBQUEsVUFvQm5CQyxLQXBCbUIsR0FvQlgsWUFBTTtBQUNaLFlBQUtaLEtBQUwsQ0FBV2EsUUFBWCxDQUFvQixvQkFBY0MsSUFBZCxDQUFtQkYsS0FBbkIsQ0FBeUIsTUFBS1QsS0FBTCxDQUFXRCxJQUFwQyxDQUFwQixFQUNHYSxJQURILENBQ1EsWUFBTTtBQUNWQyxnQkFBUUMsR0FBUixDQUFZLE9BQVo7QUFDRCxPQUhILEVBSUdDLEtBSkgsQ0FJUyxlQUFPO0FBQ1pGLGdCQUFRRyxLQUFSLENBQWNDLEdBQWQ7QUFDRCxPQU5IO0FBT0QsS0E1QmtCOztBQUVqQixVQUFLakIsS0FBTCxHQUFhO0FBQ1hELFlBQU07QUFDSlEsa0JBQVUsRUFETjtBQUVKQyxrQkFBVTtBQUZOO0FBREssS0FBYjtBQUZpQjtBQVFsQjs7Ozs2QkFzQlE7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsZUFBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUVFLG1FQUFhLE9BQU8sS0FBS1IsS0FBTCxDQUFXRCxJQUFYLENBQWdCUSxRQUFwQyxFQUE4QyxVQUFVLEtBQUtULFlBQUwsQ0FBa0IsVUFBbEIsQ0FBeEQsRUFBdUYsTUFBSyxNQUE1RixFQUFtRyxhQUFZLE9BQS9HO0FBRkYsV0FERjtBQUtFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUVFLG1FQUFhLE9BQU8sS0FBS0UsS0FBTCxDQUFXRCxJQUFYLENBQWdCUyxRQUFwQyxFQUE4QyxVQUFVLEtBQUtWLFlBQUwsQ0FBa0IsVUFBbEIsQ0FBeEQsRUFBdUYsTUFBSyxVQUE1RixFQUF1RyxhQUFZLFFBQW5IO0FBRkYsV0FMRjtBQVNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQSxnQkFBUSxTQUFRLFNBQWhCLEVBQTBCLFdBQVUsWUFBcEMsRUFBaUQsVUFBVSxLQUFLUSxhQUFMLEVBQTNELEVBQWlGLFNBQVMsS0FBS0csS0FBL0Y7QUFBQTtBQUFBO0FBREY7QUFURjtBQURGLE9BREY7QUFpQkQ7Ozs7OztBQUdILFNBQVNTLFlBQVQsQ0FBc0JsQixLQUF0QixFQUE2QjtBQUMzQixTQUFPLEVBQVA7QUFDRDs7a0JBRWMseUJBQVFrQixZQUFSLEVBQXNCdEIsS0FBdEIsQyIsImZpbGUiOiJsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJztcbmltcG9ydCBDb250cm9sTGFiZWwgZnJvbSAncmVhY3QtYm9vdHN0cmFwL2xpYi9Db250cm9sTGFiZWwnO1xuaW1wb3J0IEZvcm1Db250cm9sIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUNvbnRyb2wnO1xuaW1wb3J0IEZvcm1Hcm91cCBmcm9tICdyZWFjdC1ib290c3RyYXAvbGliL0Zvcm1Hcm91cCc7XG5pbXBvcnQgQnV0dG9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9saWIvQnV0dG9uJztcblxuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ2ZsdXgnO1xuXG5pZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xuICByZXF1aXJlKCcuL2xvZ2luLnNjc3MnKTtcbn1cblxuXG5jbGFzcyBMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmb3JtOiB7XG4gICAgICAgIHVzZXJuYW1lOiAnJyxcbiAgICAgICAgcGFzc3dvcmQ6ICcnLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgb25Gb3JtQ2hhbmdlID0gZmllbGQgPT4gZXZ0ID0+IHtcbiAgICBjb25zdCB7IGZvcm0gfSA9IHRoaXMuc3RhdGU7XG4gICAgZm9ybVtmaWVsZF0gPSBldnQudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmb3JtIH0pO1xuICB9XG5cbiAgZGlzYWJsZUJ1dHRvbiA9ICgpID0+IChcbiAgICAhdGhpcy5zdGF0ZS5mb3JtLnVzZXJuYW1lIHx8ICF0aGlzLnN0YXRlLmZvcm0ucGFzc3dvcmRcbiAgKVxuXG4gIGxvZ2luID0gKCkgPT4ge1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gobmV3IEFjdGlvbnMoKS5Vc2VyLmxvZ2luKHRoaXMuc3RhdGUuZm9ybSkpXG4gICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2dpbicpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJMb2dpbiBmbGV4Ym94XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94XCI+XG4gICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgIDxDb250cm9sTGFiZWw+VXNlcm5hbWU8L0NvbnRyb2xMYWJlbD5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCB2YWx1ZT17dGhpcy5zdGF0ZS5mb3JtLnVzZXJuYW1lfSBvbkNoYW5nZT17dGhpcy5vbkZvcm1DaGFuZ2UoJ3VzZXJuYW1lJyl9IHR5cGU9XCJ0ZXh0XCIgcGxhY2Vob2xkZXI9XCJBZG1pblwiIC8+XG4gICAgICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgICAgICAgPEZvcm1Hcm91cD5cbiAgICAgICAgICAgIDxDb250cm9sTGFiZWw+UGFzc3dvcmQ8L0NvbnRyb2xMYWJlbD5cbiAgICAgICAgICAgIDxGb3JtQ29udHJvbCB2YWx1ZT17dGhpcy5zdGF0ZS5mb3JtLnBhc3N3b3JkfSBvbkNoYW5nZT17dGhpcy5vbkZvcm1DaGFuZ2UoJ3Bhc3N3b3JkJyl9IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiMTIzNDU2XCIgLz5cbiAgICAgICAgICA8L0Zvcm1Hcm91cD5cbiAgICAgICAgICA8Rm9ybUdyb3VwPlxuICAgICAgICAgICAgPEJ1dHRvbiBic1N0eWxlPVwicHJpbWFyeVwiIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIiBkaXNhYmxlZD17dGhpcy5kaXNhYmxlQnV0dG9uKCl9IG9uQ2xpY2s9e3RoaXMubG9naW59ID5Mb2dpbjwvQnV0dG9uPlxuICAgICAgICAgIDwvRm9ybUdyb3VwPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gIHJldHVybiB7fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChzdGF0ZVRvUHJvcHMpKExvZ2luKTtcbiJdfQ==