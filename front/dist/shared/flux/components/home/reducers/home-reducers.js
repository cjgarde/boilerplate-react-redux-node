'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? _fluxComponentsHome.INITIAL_STATE : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  switch (action.type) {
    case _constants2.default.FETCH_USERS:
      return state.set('users', (0, _immutable.fromJS)(action.payload));
    case _constants2.default.CREATE_USER:
      return state.update('users', function (users) {
        return users.push((0, _immutable.fromJS)(action.payload));
      });
    case _constants2.default.DELETE_USER:
      return state.update('users', function (users) {
        return users.filter(function (user) {
          return user.get('_id') !== action.payload;
        });
      });
    case _constants2.default.FETCH_USER:
    case _constants2.default.UPDATE_USER:
      return state.set('userDetail', (0, _immutable.fromJS)(action.payload));
    case _constants2.default.CLEAN_CURRENT:
      return state.set('userDetail', _fluxComponentsHome.INITIAL_STATE.get('userDetail'));
    default:
      return state;
  }
};

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _immutable = require('immutable');

var _fluxComponentsHome = require('../flux-components-home');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zaGFyZWQvZmx1eC9jb21wb25lbnRzL2hvbWUvcmVkdWNlcnMvaG9tZS1yZWR1Y2Vycy5qcyJdLCJuYW1lcyI6WyJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJGRVRDSF9VU0VSUyIsInNldCIsInBheWxvYWQiLCJDUkVBVEVfVVNFUiIsInVwZGF0ZSIsInVzZXJzIiwicHVzaCIsIkRFTEVURV9VU0VSIiwiZmlsdGVyIiwidXNlciIsImdldCIsIkZFVENIX1VTRVIiLCJVUERBVEVfVVNFUiIsIkNMRUFOX0NVUlJFTlQiXSwibWFwcGluZ3MiOiI7Ozs7OztrQkFJZSxZQUE4QztBQUFBLE1BQXBDQSxLQUFvQztBQUFBLE1BQWJDLE1BQWEseURBQUosRUFBSTs7QUFDM0QsVUFBUUEsT0FBT0MsSUFBZjtBQUNFLFNBQUssb0JBQU9DLFdBQVo7QUFDRSxhQUFPSCxNQUFNSSxHQUFOLENBQVUsT0FBVixFQUFtQix1QkFBT0gsT0FBT0ksT0FBZCxDQUFuQixDQUFQO0FBQ0YsU0FBSyxvQkFBT0MsV0FBWjtBQUNFLGFBQU9OLE1BQU1PLE1BQU4sQ0FBYSxPQUFiLEVBQXNCO0FBQUEsZUFBU0MsTUFBTUMsSUFBTixDQUFXLHVCQUFPUixPQUFPSSxPQUFkLENBQVgsQ0FBVDtBQUFBLE9BQXRCLENBQVA7QUFDRixTQUFLLG9CQUFPSyxXQUFaO0FBQ0UsYUFBT1YsTUFBTU8sTUFBTixDQUFhLE9BQWIsRUFBc0I7QUFBQSxlQUFTQyxNQUFNRyxNQUFOLENBQWE7QUFBQSxpQkFBUUMsS0FBS0MsR0FBTCxDQUFTLEtBQVQsTUFBb0JaLE9BQU9JLE9BQW5DO0FBQUEsU0FBYixDQUFUO0FBQUEsT0FBdEIsQ0FBUDtBQUNGLFNBQUssb0JBQU9TLFVBQVo7QUFDQSxTQUFLLG9CQUFPQyxXQUFaO0FBQ0UsYUFBT2YsTUFBTUksR0FBTixDQUFVLFlBQVYsRUFBd0IsdUJBQU9ILE9BQU9JLE9BQWQsQ0FBeEIsQ0FBUDtBQUNGLFNBQUssb0JBQU9XLGFBQVo7QUFDRSxhQUFPaEIsTUFBTUksR0FBTixDQUFVLFlBQVYsRUFBd0Isa0NBQWNTLEdBQWQsQ0FBa0IsWUFBbEIsQ0FBeEIsQ0FBUDtBQUNGO0FBQ0UsYUFBT2IsS0FBUDtBQWJKO0FBZUQsQzs7QUFwQkQ7Ozs7QUFDQTs7QUFDQSIsImZpbGUiOiJob21lLXJlZHVjZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFDVElPTiBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgZnJvbUpTIH0gZnJvbSAnaW1tdXRhYmxlJztcbmltcG9ydCB7IElOSVRJQUxfU1RBVEUgfSBmcm9tICcuLi9mbHV4LWNvbXBvbmVudHMtaG9tZSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlID0gSU5JVElBTF9TVEFURSwgYWN0aW9uID0ge30pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgQUNUSU9OLkZFVENIX1VTRVJTOlxuICAgICAgcmV0dXJuIHN0YXRlLnNldCgndXNlcnMnLCBmcm9tSlMoYWN0aW9uLnBheWxvYWQpKTtcbiAgICBjYXNlIEFDVElPTi5DUkVBVEVfVVNFUjpcbiAgICAgIHJldHVybiBzdGF0ZS51cGRhdGUoJ3VzZXJzJywgdXNlcnMgPT4gdXNlcnMucHVzaChmcm9tSlMoYWN0aW9uLnBheWxvYWQpKSk7XG4gICAgY2FzZSBBQ1RJT04uREVMRVRFX1VTRVI6XG4gICAgICByZXR1cm4gc3RhdGUudXBkYXRlKCd1c2VycycsIHVzZXJzID0+IHVzZXJzLmZpbHRlcih1c2VyID0+IHVzZXIuZ2V0KCdfaWQnKSAhPT0gYWN0aW9uLnBheWxvYWQpKTtcbiAgICBjYXNlIEFDVElPTi5GRVRDSF9VU0VSOlxuICAgIGNhc2UgQUNUSU9OLlVQREFURV9VU0VSOlxuICAgICAgcmV0dXJuIHN0YXRlLnNldCgndXNlckRldGFpbCcsIGZyb21KUyhhY3Rpb24ucGF5bG9hZCkpO1xuICAgIGNhc2UgQUNUSU9OLkNMRUFOX0NVUlJFTlQ6XG4gICAgICByZXR1cm4gc3RhdGUuc2V0KCd1c2VyRGV0YWlsJywgSU5JVElBTF9TVEFURS5nZXQoJ3VzZXJEZXRhaWwnKSk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIl19