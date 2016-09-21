'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? INITIAL_STATE : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  switch (action.type) {
    case _constants2.default.LOGIN:
      return (0, _immutable.fromJS)(action.payload);
    case _constants2.default.LOGOUT:
      return (0, _immutable.Map)({});
    default:
      return state;
  }
};

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _immutable = require('immutable');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9zaGFyZWQvZmx1eC9jb21wb25lbnRzL3VzZXIvcmVkdWNlcnMvdXNlci1yZWR1Y2Vycy5qcyJdLCJuYW1lcyI6WyJzdGF0ZSIsIklOSVRJQUxfU1RBVEUiLCJhY3Rpb24iLCJ0eXBlIiwiTE9HSU4iLCJwYXlsb2FkIiwiTE9HT1VUIl0sIm1hcHBpbmdzIjoiOzs7Ozs7a0JBR2UsWUFBOEM7QUFBQSxNQUFwQ0EsS0FBb0MseURBQTVCQyxhQUE0QjtBQUFBLE1BQWJDLE1BQWEseURBQUosRUFBSTs7QUFDM0QsVUFBUUEsT0FBT0MsSUFBZjtBQUNFLFNBQUssb0JBQU9DLEtBQVo7QUFDRSxhQUFPLHVCQUFPRixPQUFPRyxPQUFkLENBQVA7QUFDRixTQUFLLG9CQUFPQyxNQUFaO0FBQ0UsYUFBTyxvQkFBSSxFQUFKLENBQVA7QUFDRjtBQUNFLGFBQU9OLEtBQVA7QUFOSjtBQVFELEM7O0FBWkQ7Ozs7QUFDQSIsImZpbGUiOiJ1c2VyLXJlZHVjZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFDVElPTiBmcm9tICcuLi9jb25zdGFudHMnO1xuaW1wb3J0IHsgZnJvbUpTLCBNYXAgfSBmcm9tICdpbW11dGFibGUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAoc3RhdGUgPSBJTklUSUFMX1NUQVRFLCBhY3Rpb24gPSB7fSkge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBBQ1RJT04uTE9HSU46XG4gICAgICByZXR1cm4gZnJvbUpTKGFjdGlvbi5wYXlsb2FkKTtcbiAgICBjYXNlIEFDVElPTi5MT0dPVVQ6XG4gICAgICByZXR1cm4gTWFwKHt9KTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iXX0=