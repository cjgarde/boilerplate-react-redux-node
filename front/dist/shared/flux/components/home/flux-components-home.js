'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.INITIAL_STATE = undefined;

var _immutable = require('immutable');

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

var _constants = require('./constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var INITIAL_STATE = exports.INITIAL_STATE = (0, _immutable.Map)({
  users: (0, _immutable.List)(),
  userDetail: (0, _immutable.Map)({
    name: (0, _immutable.Map)({
      title: '',
      first: '',
      last: ''
    }),
    username: '',
    email: '',
    cell: '',
    phone: '',
    gender: '',
    picture: (0, _immutable.Map)({
      large: "https://randomuser.me/api/portraits/women/84.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/84.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/84.jpg"
    }),
    dob: new Date().getTime()
  })
});

exports.default = {
  Actions: _actions2.default,
  reducers: _reducers2.default,
  ACTIONS: _constants2.default,
  INITIAL_STATE: INITIAL_STATE
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9zaGFyZWQvZmx1eC9jb21wb25lbnRzL2hvbWUvZmx1eC1jb21wb25lbnRzLWhvbWUuanMiXSwibmFtZXMiOlsiSU5JVElBTF9TVEFURSIsInVzZXJzIiwidXNlckRldGFpbCIsIm5hbWUiLCJ0aXRsZSIsImZpcnN0IiwibGFzdCIsInVzZXJuYW1lIiwiZW1haWwiLCJjZWxsIiwicGhvbmUiLCJnZW5kZXIiLCJwaWN0dXJlIiwibGFyZ2UiLCJtZWRpdW0iLCJ0aHVtYm5haWwiLCJkb2IiLCJEYXRlIiwiZ2V0VGltZSIsIkFjdGlvbnMiLCJyZWR1Y2VycyIsIkFDVElPTlMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLHdDQUFnQixvQkFBSTtBQUMvQkMsU0FBTyxzQkFEd0I7QUFFL0JDLGNBQVksb0JBQUk7QUFDZEMsVUFBTSxvQkFBSTtBQUNSQyxhQUFPLEVBREM7QUFFUkMsYUFBTyxFQUZDO0FBR1JDLFlBQU07QUFIRSxLQUFKLENBRFE7QUFNZEMsY0FBVSxFQU5JO0FBT2RDLFdBQU8sRUFQTztBQVFkQyxVQUFNLEVBUlE7QUFTZEMsV0FBTyxFQVRPO0FBVWRDLFlBQVEsRUFWTTtBQVdkQyxhQUFTLG9CQUFJO0FBQ1hDLGFBQU8sa0RBREk7QUFFWEMsY0FBUSxzREFGRztBQUdYQyxpQkFBVztBQUhBLEtBQUosQ0FYSztBQWdCZEMsU0FBSyxJQUFJQyxJQUFKLEdBQVdDLE9BQVg7QUFoQlMsR0FBSjtBQUZtQixDQUFKLENBQXRCOztrQkFzQlE7QUFDYkMsNEJBRGE7QUFFYkMsOEJBRmE7QUFHYkMsOEJBSGE7QUFJYnJCO0FBSmEsQyIsImZpbGUiOiJmbHV4LWNvbXBvbmVudHMtaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcCwgTGlzdCB9IGZyb20gJ2ltbXV0YWJsZSc7XG5pbXBvcnQgcmVkdWNlcnMgZnJvbSAnLi9yZWR1Y2Vycyc7XG5pbXBvcnQgQWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQgQUNUSU9OUyBmcm9tICcuL2NvbnN0YW50cyc7XG5cbmV4cG9ydCBjb25zdCBJTklUSUFMX1NUQVRFID0gTWFwKHtcbiAgdXNlcnM6IExpc3QoKSxcbiAgdXNlckRldGFpbDogTWFwKHtcbiAgICBuYW1lOiBNYXAoe1xuICAgICAgdGl0bGU6ICcnLFxuICAgICAgZmlyc3Q6ICcnLFxuICAgICAgbGFzdDogJycsXG4gICAgfSksXG4gICAgdXNlcm5hbWU6ICcnLFxuICAgIGVtYWlsOiAnJyxcbiAgICBjZWxsOiAnJyxcbiAgICBwaG9uZTogJycsXG4gICAgZ2VuZGVyOiAnJyxcbiAgICBwaWN0dXJlOiBNYXAoe1xuICAgICAgbGFyZ2U6IFwiaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS9wb3J0cmFpdHMvd29tZW4vODQuanBnXCIsXG4gICAgICBtZWRpdW06IFwiaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS9wb3J0cmFpdHMvbWVkL3dvbWVuLzg0LmpwZ1wiLFxuICAgICAgdGh1bWJuYWlsOiBcImh0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvcG9ydHJhaXRzL3RodW1iL3dvbWVuLzg0LmpwZ1wiLFxuICAgIH0pLFxuICAgIGRvYjogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gIH0pLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgQWN0aW9ucyxcbiAgcmVkdWNlcnMsXG4gIEFDVElPTlMsXG4gIElOSVRJQUxfU1RBVEUsXG59XG4iXX0=