'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HomeActions = function () {
  function HomeActions() {
    _classCallCheck(this, HomeActions);
  }

  _createClass(HomeActions, [{
    key: 'login',
    value: function login(credentials) {
      return {
        type: _constants2.default.LOGIN,
        payload: new Promise(function (resolve, reject) {
          if (credentials.username === 'admin' && credentials.password === '123456') {
            return setTimeout(function () {
              resolve({
                id: 1,
                name: 'Admin'
              });
            }, 1000);
          }
          var err = new Error('Incorrect user or password');
          err.code = 401;
          reject(err);
        })
      };
    }
  }, {
    key: 'logout',
    value: function logout() {
      return {
        type: _constants2.default.LOGOUT,
        payload: new Promise(function (resolve) {
          return setTimeout(function () {
            resolve();
          }, 500);
        })
      };
    }
  }]);

  return HomeActions;
}();

exports.default = HomeActions;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zaGFyZWQvZmx1eC9jb21wb25lbnRzL3VzZXIvYWN0aW9ucy91c2VyLWFjdGlvbnMuanMiXSwibmFtZXMiOlsiSG9tZUFjdGlvbnMiLCJjcmVkZW50aWFscyIsInR5cGUiLCJMT0dJTiIsInBheWxvYWQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJzZXRUaW1lb3V0IiwiaWQiLCJuYW1lIiwiZXJyIiwiRXJyb3IiLCJjb2RlIiwiTE9HT1VUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7Ozs7OztJQUVxQkEsVzs7Ozs7OzswQkFDYkMsVyxFQUFhO0FBQ2pCLGFBQU87QUFDTEMsY0FBTSxvQkFBT0MsS0FEUjtBQUVMQyxpQkFBUyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3hDLGNBQUlOLFlBQVlPLFFBQVosS0FBeUIsT0FBekIsSUFBb0NQLFlBQVlRLFFBQVosS0FBeUIsUUFBakUsRUFBMkU7QUFDekUsbUJBQU9DLFdBQVcsWUFBTTtBQUN0Qkosc0JBQVE7QUFDTkssb0JBQUksQ0FERTtBQUVOQyxzQkFBTTtBQUZBLGVBQVI7QUFJRCxhQUxNLEVBS0osSUFMSSxDQUFQO0FBTUQ7QUFDRCxjQUFNQyxNQUFNLElBQUlDLEtBQUosQ0FBVSw0QkFBVixDQUFaO0FBQ0FELGNBQUlFLElBQUosR0FBVyxHQUFYO0FBQ0FSLGlCQUFPTSxHQUFQO0FBQ0QsU0FaUTtBQUZKLE9BQVA7QUFnQkQ7Ozs2QkFDUTtBQUNQLGFBQU87QUFDTFgsY0FBTSxvQkFBT2MsTUFEUjtBQUVMWixpQkFBUyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQ2hDLGlCQUFPSSxXQUFXLFlBQU07QUFDdEJKO0FBQ0QsV0FGTSxFQUVKLEdBRkksQ0FBUDtBQUdELFNBSlE7QUFGSixPQUFQO0FBUUQ7Ozs7OztrQkE1QmtCTixXIiwiZmlsZSI6InVzZXItYWN0aW9ucy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBQ1RJT04gZnJvbSAnLi4vY29uc3RhbnRzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9tZUFjdGlvbnMge1xuICBsb2dpbihjcmVkZW50aWFscykge1xuICAgIHJldHVybiB7XG4gICAgICB0eXBlOiBBQ1RJT04uTE9HSU4sXG4gICAgICBwYXlsb2FkOiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIGlmIChjcmVkZW50aWFscy51c2VybmFtZSA9PT0gJ2FkbWluJyAmJiBjcmVkZW50aWFscy5wYXNzd29yZCA9PT0gJzEyMzQ1NicpIHtcbiAgICAgICAgICByZXR1cm4gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgIG5hbWU6ICdBZG1pbicsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVyciA9IG5ldyBFcnJvcignSW5jb3JyZWN0IHVzZXIgb3IgcGFzc3dvcmQnKTtcbiAgICAgICAgZXJyLmNvZGUgPSA0MDE7XG4gICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgfSksXG4gICAgfTtcbiAgfVxuICBsb2dvdXQoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHR5cGU6IEFDVElPTi5MT0dPVVQsXG4gICAgICBwYXlsb2FkOiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgIH0sIDUwMCk7XG4gICAgICB9KSxcbiAgICB9XG4gIH1cbn1cbiJdfQ==