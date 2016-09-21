'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _flux = require('flux');

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _ControlLabel = require('react-bootstrap/lib/ControlLabel');

var _ControlLabel2 = _interopRequireDefault(_ControlLabel);

var _FormControl = require('react-bootstrap/lib/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _FormGroup = require('react-bootstrap/lib/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _Button = require('react-bootstrap/lib/Button');

var _Button2 = _interopRequireDefault(_Button);

var _Modal = require('react-bootstrap/lib/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

if (process.env.BROWSER) {
  require('./user-details.scss');
}

function FieldGroup(_ref) {
  var id = _ref.id;
  var label = _ref.label;
  var help = _ref.help;

  var props = _objectWithoutProperties(_ref, ['id', 'label', 'help']);

  return _react2.default.createElement(
    _FormGroup2.default,
    { controlId: id },
    _react2.default.createElement(
      _ControlLabel2.default,
      null,
      label
    ),
    _react2.default.createElement(_FormControl2.default, props),
    help && _react2.default.createElement(
      HelpBlock,
      null,
      help
    )
  );
}

var UserDetails = function (_Component) {
  _inherits(UserDetails, _Component);

  _createClass(UserDetails, null, [{
    key: 'getActions',
    value: function getActions() {
      var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
      var query = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var actions = new _flux.Actions();
      return params.id ? [actions.Home.fetchUser(params.id)] : [actions.Home.cleanUser()];
    }
  }]);

  function UserDetails(props) {
    _classCallCheck(this, UserDetails);

    var _this = _possibleConstructorReturn(this, (UserDetails.__proto__ || Object.getPrototypeOf(UserDetails)).call(this, props));

    _this.onChangeName = function (field) {
      return function (evt) {
        var form = _this.state.form;

        form.name[field] = evt.target.value;
        _this.setState({ form: form });
      };
    };

    _this.onChangeForm = function (field) {
      return function (evt) {
        var form = _this.state.form;

        form[field] = evt.target.value;
        _this.setState({ form: form });
      };
    };

    _this.onChangeDate = function (field) {
      return function (evt) {
        var form = _this.state.form;

        form[field] = new Date(evt.target.value).getTime();
        _this.setState({ form: form });
      };
    };

    _this.modal = function (showConfirmation) {
      return function () {
        _this.setState({ showConfirmation: showConfirmation });
      };
    };

    _this.save = function (evt) {
      _this.setState({
        loading: true
      });
      _this.props.dispatch(_this.props.params.id ? new _flux.Actions().Home.updateUser(_this.state.form) : new _flux.Actions().Home.createUser(_this.state.form)).then(function () {
        _this.context.notification.add({
          message: 'User Updated'
        });
        _this.context.router.push('/');
      }).catch(function () {
        _this.setState({
          loading: false
        });
        _this.context.notification.add({
          message: 'Could not update the user. Please try later',
          level: 'error'
        });
      });
    };

    _this.deleteUser = function () {
      _this.setState({
        loading: true
      });
      _this.props.dispatch(new _flux.Actions().Home.deleteUser(_this.props.params.id)).then(function () {
        _this.context.notification.add({
          message: 'User deleted'
        });
        _this.context.router.push('/');
      }).catch(function () {
        _this.setState({
          loading: false
        });
        _this.context.notification.add({
          message: 'Could not delete the user. Please try later',
          level: 'error'
        });
      });
    };

    _this.state = {
      form: _this.props.user.toJS(),
      showConfirmation: false
    };
    return _this;
  }

  _createClass(UserDetails, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      UserDetails.getActions(this.props.params, this.props.location.query).map(this.props.dispatch);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      this.setState({ form: props.user.toJS() });
      if (!props.params.id) {
        UserDetails.getActions(this.props.params, this.props.location.query).map(this.props.dispatch);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var user = this.state.form;
      if (!!this.props.params.id && user._id !== this.props.params.id) {
        return _react2.default.createElement(
          'div',
          null,
          'Loading'
        );
      }
      return _react2.default.createElement(
        _Col2.default,
        { md: 8, mdOffset: 2, className: 'UserDetails' },
        _react2.default.createElement(
          _Row2.default,
          null,
          _react2.default.createElement(
            _Col2.default,
            { md: 3 },
            _react2.default.createElement(
              'div',
              { className: 'avatarWrapper' },
              _react2.default.createElement('img', { className: 'avatar', src: user.picture.large })
            )
          ),
          _react2.default.createElement(
            _Col2.default,
            { md: 9 },
            _react2.default.createElement(FieldGroup, {
              id: 'formControlsText',
              type: 'text',
              label: 'Title',
              placeholder: 'Title (Ms, Mr...)',
              value: user.name.title,
              onChange: this.onChangeName('title')
            }),
            _react2.default.createElement(FieldGroup, {
              id: 'formControlsText',
              type: 'text',
              label: 'First Name',
              placeholder: 'First Name',
              value: user.name.first,
              onChange: this.onChangeName('first')
            }),
            _react2.default.createElement(FieldGroup, {
              id: 'formControlsText',
              type: 'text',
              label: 'Last Name',
              placeholder: 'Last Name',
              value: user.name.last,
              onChange: this.onChangeName('last')
            })
          )
        ),
        _react2.default.createElement(
          _Row2.default,
          null,
          _react2.default.createElement(
            _Col2.default,
            { md: 12 },
            _react2.default.createElement(FieldGroup, {
              id: 'formControlsText',
              type: 'text',
              label: 'Username',
              placeholder: 'john.doe',
              value: user.username,
              onChange: this.onChangeForm('username')
            }),
            _react2.default.createElement(FieldGroup, {
              id: 'formControlsText',
              type: 'date',
              label: 'Day of Bird',
              placeholder: 'XX/XX/XXXX',
              value: (0, _moment2.default)(new Date(user.dob)).format('YYYY-MM-DD'),
              onChange: this.onChangeDate('dob')
            }),
            _react2.default.createElement(FieldGroup, {
              id: 'formControlsText',
              type: 'email',
              label: 'Email',
              placeholder: 'john.doe@redhat.com',
              value: user.email,
              onChange: this.onChangeForm('email')
            }),
            _react2.default.createElement(FieldGroup, {
              id: 'formControlsText',
              type: 'text',
              label: 'Gender',
              placeholder: 'Female',
              value: user.gender,
              onChange: this.onChangeForm('gender')
            }),
            _react2.default.createElement(FieldGroup, {
              id: 'formControlsText',
              type: 'phone',
              label: 'Cellphone',
              placeholder: 'XXX-XX-XX-XX ',
              value: user.cell,
              onChange: this.onChangeForm('cell')
            }),
            _react2.default.createElement(FieldGroup, {
              id: 'formControlsText',
              type: 'phone',
              label: 'Phone',
              placeholder: 'XXX-XX-XX-XX ',
              value: user.phone,
              onChange: this.onChangeForm('phone')
            })
          )
        ),
        _react2.default.createElement(
          _Row2.default,
          null,
          _react2.default.createElement(
            _Col2.default,
            { md: 12 },
            _react2.default.createElement(
              _Button2.default,
              { bsStyle: 'primary', disabled: this.state.loading, className: 'pull-right', onClick: this.save },
              'Save'
            ),
            this.props.params.id && _react2.default.createElement(
              _Button2.default,
              { bsStyle: 'danger', disabled: this.state.loading, className: 'pull-left', onClick: this.modal(true) },
              'Delete'
            )
          )
        ),
        _react2.default.createElement(
          _Modal2.default,
          { show: this.state.showConfirmation, onHide: this.modal(false) },
          _react2.default.createElement(
            _Modal2.default.Header,
            null,
            _react2.default.createElement(
              _Modal2.default.Title,
              null,
              'Confirmation'
            )
          ),
          _react2.default.createElement(
            _Modal2.default.Body,
            null,
            'You want to delete this user? ',
            user.name.first + ' ' + user.name.last
          ),
          _react2.default.createElement(
            _Modal2.default.Footer,
            null,
            _react2.default.createElement(
              _Button2.default,
              { onClick: this.modal(false) },
              'Close'
            ),
            _react2.default.createElement(
              _Button2.default,
              { bsStyle: 'danger', onClick: this.deleteUser },
              'Yes! Delete it.'
            )
          )
        )
      );
    }
  }]);

  return UserDetails;
}(_react.Component);

UserDetails.contextTypes = {
  router: _react2.default.PropTypes.object.isRequired,
  notification: _react2.default.PropTypes.object.isRequired
};


function stateToProps(state) {
  return {
    user: state.get('home').get('userDetail')
  };
}

exports.default = (0, _reactRedux.connect)(stateToProps)(UserDetails);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zaGFyZWQvdmlld3MvY29tcG9uZW50cy9ob21lL3VzZXItZGV0YWlscy91c2VyLWRldGFpbHMuanMiXSwibmFtZXMiOlsicHJvY2VzcyIsImVudiIsIkJST1dTRVIiLCJyZXF1aXJlIiwiRmllbGRHcm91cCIsImlkIiwibGFiZWwiLCJoZWxwIiwicHJvcHMiLCJVc2VyRGV0YWlscyIsInBhcmFtcyIsInF1ZXJ5IiwiYWN0aW9ucyIsIkhvbWUiLCJmZXRjaFVzZXIiLCJjbGVhblVzZXIiLCJvbkNoYW5nZU5hbWUiLCJmb3JtIiwic3RhdGUiLCJuYW1lIiwiZmllbGQiLCJldnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwib25DaGFuZ2VGb3JtIiwib25DaGFuZ2VEYXRlIiwiRGF0ZSIsImdldFRpbWUiLCJtb2RhbCIsInNob3dDb25maXJtYXRpb24iLCJzYXZlIiwibG9hZGluZyIsImRpc3BhdGNoIiwidXBkYXRlVXNlciIsImNyZWF0ZVVzZXIiLCJ0aGVuIiwiY29udGV4dCIsIm5vdGlmaWNhdGlvbiIsImFkZCIsIm1lc3NhZ2UiLCJyb3V0ZXIiLCJwdXNoIiwiY2F0Y2giLCJsZXZlbCIsImRlbGV0ZVVzZXIiLCJ1c2VyIiwidG9KUyIsImdldEFjdGlvbnMiLCJsb2NhdGlvbiIsIm1hcCIsIl9pZCIsInBpY3R1cmUiLCJsYXJnZSIsInRpdGxlIiwiZmlyc3QiLCJsYXN0IiwidXNlcm5hbWUiLCJkb2IiLCJmb3JtYXQiLCJlbWFpbCIsImdlbmRlciIsImNlbGwiLCJwaG9uZSIsImNvbnRleHRUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJzdGF0ZVRvUHJvcHMiLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7OztB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QUEsWUFBTyxNQUFNLEtBQUtYLEtBQUwsQ0FBV1ksZ0JBQXhCLEVBQTBDLFFBQVEsS0FBS0QsS0FBTCxDQUFXLEtBQVgsQ0FBbEQ7QUFDRTtBQUFBLDRCQUFPLE1BQVA7QUFBQTtBQUNFO0FBQUEsOEJBQU8sS0FBUDtBQUFBO0FBQUE7QUFBQTtBQURGLFdBREY7QUFLRTtBQUFBLDRCQUFPLElBQVA7QUFBQTtBQUFBO0FBQ29DaUIsaUJBQUszQixJQUFMLENBQVVvQyxLQUQ5QyxTQUN1RFQsS0FBSzNCLElBQUwsQ0FBVXFDO0FBRGpFLFdBTEY7QUFTRTtBQUFBLDRCQUFPLE1BQVA7QUFBQTtBQUNFO0FBQUE7QUFBQSxnQkFBUSxTQUFTLEtBQUszQixLQUFMLENBQVcsS0FBWCxDQUFqQjtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQSxnQkFBUSxTQUFRLFFBQWhCLEVBQXlCLFNBQVMsS0FBS2dCLFVBQXZDO0FBQUE7QUFBQTtBQUZGO0FBVEY7QUFoR0YsT0FERjtBQWtIRDs7Ozs7O0FBdk5HcEMsVyxDQU1HdUQsWSxHQUFlO0FBQ3BCdkIsVUFBUSxnQkFBTXdCLFNBQU4sQ0FBZ0JDLE1BQWhCLENBQXVCQyxVQURYO0FBRXBCN0IsZ0JBQWMsZ0JBQU0yQixTQUFOLENBQWdCQyxNQUFoQixDQUF1QkM7QUFGakIsQzs7O0FBb054QixTQUFTQyxZQUFULENBQXNCbEQsS0FBdEIsRUFBNkI7QUFDM0IsU0FBTztBQUNMNEIsVUFBTTVCLE1BQU1tRCxHQUFOLENBQVUsTUFBVixFQUFrQkEsR0FBbEIsQ0FBc0IsWUFBdEI7QUFERCxHQUFQO0FBR0Q7O2tCQUVjLHlCQUFRRCxZQUFSLEVBQXNCM0QsV0FBdEIsQyIsImZpbGUiOiJ1c2VyLWRldGFpbHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEFjdGlvbnMgfSBmcm9tICdmbHV4JztcbmltcG9ydCBSb3cgZnJvbSAncmVhY3QtYm9vdHN0cmFwL2xpYi9Sb3cnO1xuaW1wb3J0IENvbCBmcm9tICdyZWFjdC1ib290c3RyYXAvbGliL0NvbCc7XG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG5cblxuaW1wb3J0IENvbnRyb2xMYWJlbCBmcm9tICdyZWFjdC1ib290c3RyYXAvbGliL0NvbnRyb2xMYWJlbCc7XG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL2xpYi9Gb3JtQ29udHJvbCc7XG5pbXBvcnQgRm9ybUdyb3VwIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9saWIvRm9ybUdyb3VwJztcbmltcG9ydCBCdXR0b24gZnJvbSAncmVhY3QtYm9vdHN0cmFwL2xpYi9CdXR0b24nO1xuaW1wb3J0IE1vZGFsIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9saWIvTW9kYWwnO1xuXG5pZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xuICByZXF1aXJlKCcuL3VzZXItZGV0YWlscy5zY3NzJyk7XG59XG5cbmZ1bmN0aW9uIEZpZWxkR3JvdXAoeyBpZCwgbGFiZWwsIGhlbHAsIC4uLnByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8Rm9ybUdyb3VwIGNvbnRyb2xJZD17aWR9PlxuICAgICAgPENvbnRyb2xMYWJlbD57bGFiZWx9PC9Db250cm9sTGFiZWw+XG4gICAgICA8Rm9ybUNvbnRyb2wgey4uLnByb3BzfSAvPlxuICAgICAge2hlbHAgJiYgPEhlbHBCbG9jaz57aGVscH08L0hlbHBCbG9jaz59XG4gICAgPC9Gb3JtR3JvdXA+XG4gICk7XG59XG5cbmNsYXNzIFVzZXJEZXRhaWxzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGdldEFjdGlvbnMocGFyYW1zID0ge30sIHF1ZXJ5ID0ge30pIHtcbiAgICBjb25zdCBhY3Rpb25zID0gbmV3IEFjdGlvbnMoKTtcbiAgICByZXR1cm4gcGFyYW1zLmlkID8gW2FjdGlvbnMuSG9tZS5mZXRjaFVzZXIocGFyYW1zLmlkKV0gOiBbYWN0aW9ucy5Ib21lLmNsZWFuVXNlcigpXTtcbiAgfVxuXG4gIHN0YXRpYyBjb250ZXh0VHlwZXMgPSB7XG4gICAgcm91dGVyOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgbm90aWZpY2F0aW9uOiBSZWFjdC5Qcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvcm06IHRoaXMucHJvcHMudXNlci50b0pTKCksXG4gICAgICBzaG93Q29uZmlybWF0aW9uOiBmYWxzZSxcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBVc2VyRGV0YWlscy5nZXRBY3Rpb25zKHRoaXMucHJvcHMucGFyYW1zLCB0aGlzLnByb3BzLmxvY2F0aW9uLnF1ZXJ5KS5tYXAodGhpcy5wcm9wcy5kaXNwYXRjaCk7XG4gIH1cblxuICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKHByb3BzKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvcm06IHByb3BzLnVzZXIudG9KUygpIH0pO1xuICAgIGlmICghcHJvcHMucGFyYW1zLmlkKSB7XG4gICAgICBVc2VyRGV0YWlscy5nZXRBY3Rpb25zKHRoaXMucHJvcHMucGFyYW1zLCB0aGlzLnByb3BzLmxvY2F0aW9uLnF1ZXJ5KS5tYXAodGhpcy5wcm9wcy5kaXNwYXRjaCk7XG4gICAgfVxuICB9XG5cbiAgb25DaGFuZ2VOYW1lID0gZmllbGQgPT4gZXZ0ID0+IHtcbiAgICBjb25zdCB7IGZvcm0gfSA9IHRoaXMuc3RhdGU7XG4gICAgZm9ybS5uYW1lW2ZpZWxkXSA9IGV2dC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvcm0gfSk7XG4gIH1cblxuICBvbkNoYW5nZUZvcm0gPSBmaWVsZCA9PiBldnQgPT4ge1xuICAgIGNvbnN0IHsgZm9ybSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBmb3JtW2ZpZWxkXSA9IGV2dC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvcm0gfSk7XG4gIH1cblxuICBvbkNoYW5nZURhdGUgPSBmaWVsZCA9PiBldnQgPT4ge1xuICAgIGNvbnN0IHsgZm9ybSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBmb3JtW2ZpZWxkXSA9IG5ldyBEYXRlKGV2dC50YXJnZXQudmFsdWUpLmdldFRpbWUoKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZm9ybSB9KTtcbiAgfVxuXG4gIG1vZGFsID0gc2hvd0NvbmZpcm1hdGlvbiA9PiAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dDb25maXJtYXRpb24gfSk7XG4gIH1cblxuICBzYXZlID0gZXZ0ID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxvYWRpbmc6IHRydWUsXG4gICAgfSk7XG4gICAgdGhpcy5wcm9wcy5kaXNwYXRjaCh0aGlzLnByb3BzLnBhcmFtcy5pZCA/IG5ldyBBY3Rpb25zKCkuSG9tZS51cGRhdGVVc2VyKHRoaXMuc3RhdGUuZm9ybSkgOiBuZXcgQWN0aW9ucygpLkhvbWUuY3JlYXRlVXNlcih0aGlzLnN0YXRlLmZvcm0pKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmNvbnRleHQubm90aWZpY2F0aW9uLmFkZCh7XG4gICAgICAgICAgbWVzc2FnZTogJ1VzZXIgVXBkYXRlZCcsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbnRleHQucm91dGVyLnB1c2goJy8nKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29udGV4dC5ub3RpZmljYXRpb24uYWRkKHtcbiAgICAgICAgICBtZXNzYWdlOiAnQ291bGQgbm90IHVwZGF0ZSB0aGUgdXNlci4gUGxlYXNlIHRyeSBsYXRlcicsXG4gICAgICAgICAgbGV2ZWw6ICdlcnJvcicsXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgfVxuXG4gIGRlbGV0ZVVzZXIgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsb2FkaW5nOiB0cnVlLFxuICAgIH0pO1xuICAgIHRoaXMucHJvcHMuZGlzcGF0Y2gobmV3IEFjdGlvbnMoKS5Ib21lLmRlbGV0ZVVzZXIodGhpcy5wcm9wcy5wYXJhbXMuaWQpKVxuICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLmNvbnRleHQubm90aWZpY2F0aW9uLmFkZCh7XG4gICAgICAgICAgbWVzc2FnZTogJ1VzZXIgZGVsZXRlZCcsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNvbnRleHQucm91dGVyLnB1c2goJy8nKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY29udGV4dC5ub3RpZmljYXRpb24uYWRkKHtcbiAgICAgICAgICBtZXNzYWdlOiAnQ291bGQgbm90IGRlbGV0ZSB0aGUgdXNlci4gUGxlYXNlIHRyeSBsYXRlcicsXG4gICAgICAgICAgbGV2ZWw6ICdlcnJvcicsXG4gICAgICAgIH0pO1xuICAgICAgfSlcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB1c2VyID0gdGhpcy5zdGF0ZS5mb3JtO1xuICAgIGlmICghIXRoaXMucHJvcHMucGFyYW1zLmlkICYmIHVzZXIuX2lkICE9PSB0aGlzLnByb3BzLnBhcmFtcy5pZCkge1xuICAgICAgcmV0dXJuIDxkaXY+TG9hZGluZzwvZGl2PjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxDb2wgbWQ9ezh9IG1kT2Zmc2V0PXsyfSBjbGFzc05hbWU9XCJVc2VyRGV0YWlsc1wiPlxuICAgICAgICA8Um93PlxuICAgICAgICAgIDxDb2wgbWQ9ezN9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdmF0YXJXcmFwcGVyXCI+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiYXZhdGFyXCIgc3JjPXt1c2VyLnBpY3R1cmUubGFyZ2V9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICA8Q29sIG1kPXs5fSA+XG4gICAgICAgICAgICA8RmllbGRHcm91cFxuICAgICAgICAgICAgICBpZD1cImZvcm1Db250cm9sc1RleHRcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiVGl0bGVcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlRpdGxlIChNcywgTXIuLi4pXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3VzZXIubmFtZS50aXRsZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VOYW1lKCd0aXRsZScpfVxuICAgICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8RmllbGRHcm91cFxuICAgICAgICAgICAgICBpZD1cImZvcm1Db250cm9sc1RleHRcIlxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXt1c2VyLm5hbWUuZmlyc3R9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlTmFtZSgnZmlyc3QnKX1cbiAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPEZpZWxkR3JvdXBcbiAgICAgICAgICAgICAgaWQ9XCJmb3JtQ29udHJvbHNUZXh0XCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3VzZXIubmFtZS5sYXN0fVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZU5hbWUoJ2xhc3QnKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCBtZD17MTJ9PlxuICAgICAgICAgICAgPEZpZWxkR3JvdXBcbiAgICAgICAgICAgICAgaWQ9XCJmb3JtQ29udHJvbHNUZXh0XCJcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJqb2huLmRvZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXt1c2VyLnVzZXJuYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZUZvcm0oJ3VzZXJuYW1lJyl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RmllbGRHcm91cFxuICAgICAgICAgICAgICBpZD1cImZvcm1Db250cm9sc1RleHRcIlxuICAgICAgICAgICAgICB0eXBlPVwiZGF0ZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiRGF5IG9mIEJpcmRcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlhYL1hYL1hYWFhcIlxuICAgICAgICAgICAgICB2YWx1ZT17bW9tZW50KG5ldyBEYXRlKHVzZXIuZG9iKSkuZm9ybWF0KCdZWVlZLU1NLUREJyl9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlRGF0ZSgnZG9iJyl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RmllbGRHcm91cFxuICAgICAgICAgICAgICBpZD1cImZvcm1Db250cm9sc1RleHRcIlxuICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkVtYWlsXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJqb2huLmRvZUByZWRoYXQuY29tXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3VzZXIuZW1haWx9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlRm9ybSgnZW1haWwnKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxGaWVsZEdyb3VwXG4gICAgICAgICAgICAgIGlkPVwiZm9ybUNvbnRyb2xzVGV4dFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbGFiZWw9XCJHZW5kZXJcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZlbWFsZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXt1c2VyLmdlbmRlcn1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VGb3JtKCdnZW5kZXInKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxGaWVsZEdyb3VwXG4gICAgICAgICAgICAgIGlkPVwiZm9ybUNvbnRyb2xzVGV4dFwiXG4gICAgICAgICAgICAgIHR5cGU9XCJwaG9uZVwiXG4gICAgICAgICAgICAgIGxhYmVsPVwiQ2VsbHBob25lXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJYWFgtWFgtWFgtWFggXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3VzZXIuY2VsbH1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFuZ2VGb3JtKCdjZWxsJyl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8RmllbGRHcm91cFxuICAgICAgICAgICAgICBpZD1cImZvcm1Db250cm9sc1RleHRcIlxuICAgICAgICAgICAgICB0eXBlPVwicGhvbmVcIlxuICAgICAgICAgICAgICBsYWJlbD1cIlBob25lXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJYWFgtWFgtWFgtWFggXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3VzZXIucGhvbmV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlRm9ybSgncGhvbmUnKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0NvbD5cbiAgICAgICAgPC9Sb3c+XG4gICAgICAgIDxSb3c+XG4gICAgICAgICAgPENvbCBtZD17MTJ9PlxuICAgICAgICAgICAgPEJ1dHRvbiBic1N0eWxlPVwicHJpbWFyeVwiIGRpc2FibGVkPXt0aGlzLnN0YXRlLmxvYWRpbmd9IGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIiAgb25DbGljaz17dGhpcy5zYXZlfSA+U2F2ZTwvQnV0dG9uPlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLnBhcmFtcy5pZCAmJiA8QnV0dG9uIGJzU3R5bGU9XCJkYW5nZXJcIiBkaXNhYmxlZD17dGhpcy5zdGF0ZS5sb2FkaW5nfSBjbGFzc05hbWU9XCJwdWxsLWxlZnRcIiAgb25DbGljaz17dGhpcy5tb2RhbCh0cnVlKX0gPkRlbGV0ZTwvQnV0dG9uPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvQ29sPlxuICAgICAgICA8L1Jvdz5cbiAgICAgICAgPE1vZGFsIHNob3c9e3RoaXMuc3RhdGUuc2hvd0NvbmZpcm1hdGlvbn0gb25IaWRlPXt0aGlzLm1vZGFsKGZhbHNlKX0+XG4gICAgICAgICAgPE1vZGFsLkhlYWRlcj5cbiAgICAgICAgICAgIDxNb2RhbC5UaXRsZT5Db25maXJtYXRpb248L01vZGFsLlRpdGxlPlxuICAgICAgICAgIDwvTW9kYWwuSGVhZGVyPlxuXG4gICAgICAgICAgPE1vZGFsLkJvZHk+XG4gICAgICAgICAgICBZb3Ugd2FudCB0byBkZWxldGUgdGhpcyB1c2VyPyB7YCR7dXNlci5uYW1lLmZpcnN0fSAke3VzZXIubmFtZS5sYXN0fWB9XG4gICAgICAgICAgPC9Nb2RhbC5Cb2R5PlxuXG4gICAgICAgICAgPE1vZGFsLkZvb3Rlcj5cbiAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dGhpcy5tb2RhbChmYWxzZSl9PkNsb3NlPC9CdXR0b24+XG4gICAgICAgICAgICA8QnV0dG9uIGJzU3R5bGU9XCJkYW5nZXJcIiBvbkNsaWNrPXt0aGlzLmRlbGV0ZVVzZXJ9PlllcyEgRGVsZXRlIGl0LjwvQnV0dG9uPlxuICAgICAgICAgIDwvTW9kYWwuRm9vdGVyPlxuXG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L0NvbD5cbiAgICApO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIHVzZXI6IHN0YXRlLmdldCgnaG9tZScpLmdldCgndXNlckRldGFpbCcpLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlVG9Qcm9wcykoVXNlckRldGFpbHMpO1xuIl19