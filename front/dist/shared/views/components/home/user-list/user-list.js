'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require('react-redux');

var _Row = require('react-bootstrap/lib/Row');

var _Row2 = _interopRequireDefault(_Row);

var _Col = require('react-bootstrap/lib/Col');

var _Col2 = _interopRequireDefault(_Col);

var _flux = require('flux');

var _searchBar = require('views/components/_common/search-bar');

var _searchBar2 = _interopRequireDefault(_searchBar);

var _userItem = require('./user-item');

var _userItem2 = _interopRequireDefault(_userItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

if (process.env.BROWSER) {
  require('./user-list.scss');
}

var UserList = function (_Component) {
  _inherits(UserList, _Component);

  _createClass(UserList, null, [{
    key: 'getActions',
    value: function getActions() {
      var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
      var query = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var actions = new _flux.Actions();
      return [actions.Home.fetchUsers()];
    }
  }]);

  function UserList(props) {
    _classCallCheck(this, UserList);

    var _this = _possibleConstructorReturn(this, (UserList.__proto__ || Object.getPrototypeOf(UserList)).call(this, props));

    _this.onSearch = function (filter) {
      _this.setState({ filter: filter.trim() });
    };

    _this.state = {
      filter: ''
    };
    return _this;
  }

  _createClass(UserList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      UserList.getActions(this.props.params, this.props.location.query).map(this.props.dispatch);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var userList = this.props.users.filter(function (user) {
        if (!_this2.state.filter) {
          return true;
        }
        var name = user.get('name').toJS();
        if ((name.title + ' ' + name.first + ' ' + name.last).indexOf(_this2.state.filter) !== -1) {
          return true;
        }
        return false;
      }).map(function (user, i) {
        return _react2.default.createElement(_userItem2.default, { key: i, user: user });
      });
      return _react2.default.createElement(
        'div',
        { className: 'UserList' },
        _react2.default.createElement(_searchBar2.default, { onChange: this.onSearch }),
        _react2.default.createElement(
          'ul',
          { className: 'list' },
          userList
        )
      );
    }
  }]);

  return UserList;
}(_react.Component);

function stateToProps(state) {
  return {
    users: state.get('home').get('users')
  };
}

exports.default = (0, _reactRedux.connect)(stateToProps)(UserList);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zaGFyZWQvdmlld3MvY29tcG9uZW50cy9ob21lL3VzZXItbGlzdC91c2VyLWxpc3QuanMiXSwibmFtZXMiOlsicHJvY2VzcyIsImVudiIsIkJST1dTRVIiLCJyZXF1aXJlIiwiVXNlckxpc3QiLCJwYXJhbXMiLCJxdWVyeSIsImFjdGlvbnMiLCJIb21lIiwiZmV0Y2hVc2VycyIsInByb3BzIiwib25TZWFyY2giLCJzZXRTdGF0ZSIsImZpbHRlciIsInRyaW0iLCJzdGF0ZSIsImdldEFjdGlvbnMiLCJsb2NhdGlvbiIsIm1hcCIsImRpc3BhdGNoIiwidXNlckxpc3QiLCJ1c2VycyIsIm5hbWUiLCJ1c2VyIiwiZ2V0IiwidG9KUyIsInRpdGxlIiwiZmlyc3QiLCJsYXN0IiwiaW5kZXhPZiIsImkiLCJzdGF0ZVRvUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBSUEsUUFBUUMsR0FBUixDQUFZQyxPQUFoQixFQUF5QjtBQUN2QkMsVUFBUSxrQkFBUjtBQUNEOztJQUVLQyxROzs7OztpQ0FDdUM7QUFBQSxVQUF6QkMsTUFBeUIseURBQWhCLEVBQWdCO0FBQUEsVUFBWkMsS0FBWSx5REFBSixFQUFJOztBQUN6QyxVQUFNQyxVQUFVLG1CQUFoQjtBQUNBLGFBQU8sQ0FBQ0EsUUFBUUMsSUFBUixDQUFhQyxVQUFiLEVBQUQsQ0FBUDtBQUNEOzs7QUFFRCxvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLG9IQUNYQSxLQURXOztBQUFBLFVBV25CQyxRQVhtQixHQVdSLGtCQUFVO0FBQ25CLFlBQUtDLFFBQUwsQ0FBYyxFQUFFQyxRQUFRQSxPQUFPQyxJQUFQLEVBQVYsRUFBZDtBQUNELEtBYmtCOztBQUVqQixVQUFLQyxLQUFMLEdBQWE7QUFDWEYsY0FBUTtBQURHLEtBQWI7QUFGaUI7QUFLbEI7Ozs7d0NBRW1CO0FBQ2xCVCxlQUFTWSxVQUFULENBQW9CLEtBQUtOLEtBQUwsQ0FBV0wsTUFBL0IsRUFBdUMsS0FBS0ssS0FBTCxDQUFXTyxRQUFYLENBQW9CWCxLQUEzRCxFQUFrRVksR0FBbEUsQ0FBc0UsS0FBS1IsS0FBTCxDQUFXUyxRQUFqRjtBQUNEOzs7NkJBTVE7QUFBQTs7QUFDUCxVQUFNQyxXQUFXLEtBQUtWLEtBQUwsQ0FBV1csS0FBWCxDQUNkUixNQURjLENBQ1AsZ0JBQVE7QUFDZCxZQUFJLENBQUMsT0FBS0UsS0FBTCxDQUFXRixNQUFoQixFQUF3QjtBQUN0QixpQkFBTyxJQUFQO0FBQ0Q7QUFDRCxZQUFNUyxPQUFPQyxLQUFLQyxHQUFMLENBQVMsTUFBVCxFQUFpQkMsSUFBakIsRUFBYjtBQUNBLFlBQUksQ0FBR0gsS0FBS0ksS0FBUixTQUFpQkosS0FBS0ssS0FBdEIsU0FBK0JMLEtBQUtNLElBQXBDLEVBQTJDQyxPQUEzQyxDQUFtRCxPQUFLZCxLQUFMLENBQVdGLE1BQTlELE1BQTBFLENBQUMsQ0FBL0UsRUFBa0Y7QUFDaEYsaUJBQU8sSUFBUDtBQUNEO0FBQ0QsZUFBTyxLQUFQO0FBQ0QsT0FWYyxFQVdkSyxHQVhjLENBV1YsVUFBQ0ssSUFBRCxFQUFPTyxDQUFQO0FBQUEsZUFBYyxvREFBVSxLQUFLQSxDQUFmLEVBQWtCLE1BQU1QLElBQXhCLEdBQWQ7QUFBQSxPQVhVLENBQWpCO0FBWUEsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFVBQWY7QUFDRSw2REFBVyxVQUFVLEtBQUtaLFFBQTFCLEdBREY7QUFFRTtBQUFBO0FBQUEsWUFBSSxXQUFVLE1BQWQ7QUFDR1M7QUFESDtBQUZGLE9BREY7QUFRRDs7Ozs7O0FBR0gsU0FBU1csWUFBVCxDQUFzQmhCLEtBQXRCLEVBQTZCO0FBQzNCLFNBQU87QUFDTE0sV0FBT04sTUFBTVMsR0FBTixDQUFVLE1BQVYsRUFBa0JBLEdBQWxCLENBQXNCLE9BQXRCO0FBREYsR0FBUDtBQUdEOztrQkFFYyx5QkFBUU8sWUFBUixFQUFzQjNCLFFBQXRCLEMiLCJmaWxlIjoidXNlci1saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgUm93IGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9saWIvUm93JztcbmltcG9ydCBDb2wgZnJvbSAncmVhY3QtYm9vdHN0cmFwL2xpYi9Db2wnO1xuaW1wb3J0IHsgQWN0aW9ucyB9IGZyb20gJ2ZsdXgnO1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tICd2aWV3cy9jb21wb25lbnRzL19jb21tb24vc2VhcmNoLWJhcic7XG5pbXBvcnQgVXNlckl0ZW0gZnJvbSAnLi91c2VyLWl0ZW0nO1xuXG5pZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xuICByZXF1aXJlKCcuL3VzZXItbGlzdC5zY3NzJyk7XG59XG5cbmNsYXNzIFVzZXJMaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGdldEFjdGlvbnMocGFyYW1zID0ge30sIHF1ZXJ5ID0ge30pIHtcbiAgICBjb25zdCBhY3Rpb25zID0gbmV3IEFjdGlvbnMoKTtcbiAgICByZXR1cm4gW2FjdGlvbnMuSG9tZS5mZXRjaFVzZXJzKCldO1xuICB9XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZpbHRlcjogJycsXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgVXNlckxpc3QuZ2V0QWN0aW9ucyh0aGlzLnByb3BzLnBhcmFtcywgdGhpcy5wcm9wcy5sb2NhdGlvbi5xdWVyeSkubWFwKHRoaXMucHJvcHMuZGlzcGF0Y2gpO1xuICB9XG5cbiAgb25TZWFyY2ggPSBmaWx0ZXIgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmaWx0ZXI6IGZpbHRlci50cmltKCkgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgdXNlckxpc3QgPSB0aGlzLnByb3BzLnVzZXJzXG4gICAgICAuZmlsdGVyKHVzZXIgPT4ge1xuICAgICAgICBpZiAoIXRoaXMuc3RhdGUuZmlsdGVyKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmFtZSA9IHVzZXIuZ2V0KCduYW1lJykudG9KUygpO1xuICAgICAgICBpZiAoYCR7bmFtZS50aXRsZX0gJHtuYW1lLmZpcnN0fSAke25hbWUubGFzdH1gLmluZGV4T2YodGhpcy5zdGF0ZS5maWx0ZXIpICE9PSAtMSkge1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSlcbiAgICAgIC5tYXAoKHVzZXIsIGkpID0+ICg8VXNlckl0ZW0ga2V5PXtpfSB1c2VyPXt1c2VyfSAvPikpO1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIlVzZXJMaXN0XCI+XG4gICAgICAgIDxTZWFyY2hCYXIgb25DaGFuZ2U9e3RoaXMub25TZWFyY2h9IC8+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0XCI+XG4gICAgICAgICAge3VzZXJMaXN0fVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICB1c2Vyczogc3RhdGUuZ2V0KCdob21lJykuZ2V0KCd1c2VycycpLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KHN0YXRlVG9Qcm9wcykoVXNlckxpc3QpO1xuIl19