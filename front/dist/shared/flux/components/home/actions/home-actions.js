'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _users = require('repositories/users');

var _users2 = _interopRequireDefault(_users);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomeActions = function () {
  function HomeActions() {
    _classCallCheck(this, HomeActions);
  }

  _createClass(HomeActions, [{
    key: 'fetchUsers',
    value: function fetchUsers() {
      return {
        type: _constants2.default.FETCH_USERS,
        payload: _users2.default.getAllUsers()
      };
    }
  }, {
    key: 'fetchUser',
    value: function fetchUser(id) {
      return {
        type: _constants2.default.FETCH_USER,
        payload: _users2.default.getUser(id)
      };
    }
  }, {
    key: 'updateUser',
    value: function updateUser(user) {
      return {
        type: _constants2.default.FETCH_USER,
        payload: _users2.default.updateUser(user)
      };
    }
  }, {
    key: 'deleteUser',
    value: function deleteUser(id) {
      return {
        type: _constants2.default.DELETE_USER,
        payload: _users2.default.deleteUser(id).then(function () {
          return Promise.resolve(id);
        })
      };
    }
  }, {
    key: 'cleanUser',
    value: function cleanUser() {
      return {
        type: _constants2.default.CLEAN_CURRENT
      };
    }
  }, {
    key: 'createUser',
    value: function createUser(user) {
      return {
        type: _constants2.default.CREATE_USER,
        payload: _users2.default.createUser(user)

      };
    }
  }]);

  return HomeActions;
}();

exports.default = HomeActions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zaGFyZWQvZmx1eC9jb21wb25lbnRzL2hvbWUvYWN0aW9ucy9ob21lLWFjdGlvbnMuanMiXSwibmFtZXMiOlsiSG9tZUFjdGlvbnMiLCJ0eXBlIiwiRkVUQ0hfVVNFUlMiLCJwYXlsb2FkIiwiZ2V0QWxsVXNlcnMiLCJpZCIsIkZFVENIX1VTRVIiLCJnZXRVc2VyIiwidXNlciIsInVwZGF0ZVVzZXIiLCJERUxFVEVfVVNFUiIsImRlbGV0ZVVzZXIiLCJ0aGVuIiwiUHJvbWlzZSIsInJlc29sdmUiLCJDTEVBTl9DVVJSRU5UIiwiQ1JFQVRFX1VTRVIiLCJjcmVhdGVVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O0lBRXFCQSxXOzs7Ozs7O2lDQUNOO0FBQ1gsYUFBTztBQUNMQyxjQUFNLG9CQUFPQyxXQURSO0FBRUxDLGlCQUFTLGdCQUFlQyxXQUFmO0FBRkosT0FBUDtBQUlEOzs7OEJBRVNDLEUsRUFBSTtBQUNaLGFBQU87QUFDTEosY0FBTSxvQkFBT0ssVUFEUjtBQUVMSCxpQkFBUyxnQkFBZUksT0FBZixDQUF1QkYsRUFBdkI7QUFGSixPQUFQO0FBSUQ7OzsrQkFFVUcsSSxFQUFNO0FBQ2YsYUFBTztBQUNMUCxjQUFNLG9CQUFPSyxVQURSO0FBRUxILGlCQUFTLGdCQUFlTSxVQUFmLENBQTBCRCxJQUExQjtBQUZKLE9BQVA7QUFJRDs7OytCQUVVSCxFLEVBQUk7QUFDYixhQUFPO0FBQ0xKLGNBQU0sb0JBQU9TLFdBRFI7QUFFTFAsaUJBQVMsZ0JBQWVRLFVBQWYsQ0FBMEJOLEVBQTFCLEVBQ05PLElBRE0sQ0FDRDtBQUFBLGlCQUFNQyxRQUFRQyxPQUFSLENBQWdCVCxFQUFoQixDQUFOO0FBQUEsU0FEQztBQUZKLE9BQVA7QUFLRDs7O2dDQUVXO0FBQ1YsYUFBTztBQUNMSixjQUFNLG9CQUFPYztBQURSLE9BQVA7QUFHRDs7OytCQUdVUCxJLEVBQU07QUFDZixhQUFPO0FBQ0xQLGNBQU0sb0JBQU9lLFdBRFI7QUFFTGIsaUJBQVMsZ0JBQWVjLFVBQWYsQ0FBMEJULElBQTFCOztBQUZKLE9BQVA7QUFLRDs7Ozs7O2tCQTNDa0JSLFciLCJmaWxlIjoiaG9tZS1hY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFDVElPTiBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHVzZXJSZXBvc2l0b3J5IGZyb20gJ3JlcG9zaXRvcmllcy91c2Vycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWVBY3Rpb25zIHtcbiAgZmV0Y2hVc2VycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQUNUSU9OLkZFVENIX1VTRVJTLFxuICAgICAgcGF5bG9hZDogdXNlclJlcG9zaXRvcnkuZ2V0QWxsVXNlcnMoKSxcbiAgICB9O1xuICB9XG5cbiAgZmV0Y2hVc2VyKGlkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEFDVElPTi5GRVRDSF9VU0VSLFxuICAgICAgcGF5bG9hZDogdXNlclJlcG9zaXRvcnkuZ2V0VXNlcihpZCksXG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZVVzZXIodXNlcikge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBBQ1RJT04uRkVUQ0hfVVNFUixcbiAgICAgIHBheWxvYWQ6IHVzZXJSZXBvc2l0b3J5LnVwZGF0ZVVzZXIodXNlciksXG4gICAgfTtcbiAgfVxuXG4gIGRlbGV0ZVVzZXIoaWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQUNUSU9OLkRFTEVURV9VU0VSLFxuICAgICAgcGF5bG9hZDogdXNlclJlcG9zaXRvcnkuZGVsZXRlVXNlcihpZClcbiAgICAgICAgLnRoZW4oKCkgPT4gUHJvbWlzZS5yZXNvbHZlKGlkKSksXG4gICAgfTtcbiAgfVxuXG4gIGNsZWFuVXNlcigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQUNUSU9OLkNMRUFOX0NVUlJFTlQsXG4gICAgfVxuICB9XG5cblxuICBjcmVhdGVVc2VyKHVzZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHlwZTogQUNUSU9OLkNSRUFURV9VU0VSLFxuICAgICAgcGF5bG9hZDogdXNlclJlcG9zaXRvcnkuY3JlYXRlVXNlcih1c2VyKSxcblxuICAgIH1cbiAgfVxufVxuIl19