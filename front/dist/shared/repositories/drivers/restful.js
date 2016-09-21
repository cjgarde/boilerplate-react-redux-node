'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var api = process.env.API || 'http://localhost:8000/';

exports.default = {
  get: function get(request) {
    return _axios2.default.get('' + api + request.endpoint, {
      params: request.params,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(function (res) {
      return Promise.resolve(res.data);
    });
  },
  post: function post(request) {
    return _axios2.default.post('' + api + request.endpoint, request.params, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      progress: request.options ? request.options.progress : undefined
    }).then(function (res) {
      return Promise.resolve(res.data);
    });
  },

  delete: function _delete(request) {
    return _axios2.default.delete('' + api + request.endpoint, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      progress: request.options ? request.options.progress : undefined
    }).then(function (res) {
      return Promise.resolve(res.data);
    });
  },

  put: function put(request) {
    return _axios2.default.put('' + api + request.endpoint, request.params, {
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      progress: request.options ? request.options.progress : undefined
    }).then(function (res) {
      return Promise.resolve(res.data);
    });
  }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zaGFyZWQvcmVwb3NpdG9yaWVzL2RyaXZlcnMvcmVzdGZ1bC5qcyJdLCJuYW1lcyI6WyJhcGkiLCJwcm9jZXNzIiwiZW52IiwiQVBJIiwiZ2V0IiwicmVxdWVzdCIsImVuZHBvaW50IiwicGFyYW1zIiwiaGVhZGVycyIsInRoZW4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlcyIsImRhdGEiLCJwb3N0IiwicHJvZ3Jlc3MiLCJvcHRpb25zIiwidW5kZWZpbmVkIiwiZGVsZXRlIiwicHV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7O0FBRUEsSUFBTUEsTUFBTUMsUUFBUUMsR0FBUixDQUFZQyxHQUFaLElBQW1CLHdCQUEvQjs7a0JBRWU7QUFDYkMsT0FBSyxhQUFDQyxPQUFEO0FBQUEsV0FDSCxnQkFBTUQsR0FBTixNQUFhSixHQUFiLEdBQW1CSyxRQUFRQyxRQUEzQixFQUF1QztBQUNyQ0MsY0FBUUYsUUFBUUUsTUFEcUI7QUFFckNDLGVBQVM7QUFDUCw0QkFBb0I7QUFEYjtBQUY0QixLQUF2QyxFQU1HQyxJQU5ILENBTVE7QUFBQSxhQUFPQyxRQUFRQyxPQUFSLENBQWdCQyxJQUFJQyxJQUFwQixDQUFQO0FBQUEsS0FOUixDQURHO0FBQUEsR0FEUTtBQVViQyxRQUFNO0FBQUEsV0FDSixnQkFBTUEsSUFBTixNQUFjZCxHQUFkLEdBQW9CSyxRQUFRQyxRQUE1QixFQUF3Q0QsUUFBUUUsTUFBaEQsRUFBd0Q7QUFDdERDLGVBQVM7QUFDUCw0QkFBb0I7QUFEYixPQUQ2QztBQUl0RE8sZ0JBQVVWLFFBQVFXLE9BQVIsR0FBa0JYLFFBQVFXLE9BQVIsQ0FBZ0JELFFBQWxDLEdBQTZDRTtBQUpELEtBQXhELEVBTUdSLElBTkgsQ0FNUTtBQUFBLGFBQU9DLFFBQVFDLE9BQVIsQ0FBZ0JDLElBQUlDLElBQXBCLENBQVA7QUFBQSxLQU5SLENBREk7QUFBQSxHQVZPOztBQW9CYkssVUFBUSxpQkFBQ2IsT0FBRDtBQUFBLFdBQ04sZ0JBQU1hLE1BQU4sTUFBZ0JsQixHQUFoQixHQUFzQkssUUFBUUMsUUFBOUIsRUFBMEM7QUFDeENFLGVBQVM7QUFDUCw0QkFBb0I7QUFEYixPQUQrQjtBQUl4Q08sZ0JBQVVWLFFBQVFXLE9BQVIsR0FBa0JYLFFBQVFXLE9BQVIsQ0FBZ0JELFFBQWxDLEdBQTZDRTtBQUpmLEtBQTFDLEVBTUNSLElBTkQsQ0FNTTtBQUFBLGFBQU9DLFFBQVFDLE9BQVIsQ0FBZ0JDLElBQUlDLElBQXBCLENBQVA7QUFBQSxLQU5OLENBRE07QUFBQSxHQXBCSzs7QUE4QmJNLE9BQUssYUFBQ2QsT0FBRDtBQUFBLFdBQ0gsZ0JBQU1jLEdBQU4sTUFBYW5CLEdBQWIsR0FBbUJLLFFBQVFDLFFBQTNCLEVBQXVDRCxRQUFRRSxNQUEvQyxFQUF1RDtBQUNyREMsZUFBUztBQUNQLDRCQUFvQjtBQURiLE9BRDRDO0FBSXJETyxnQkFBVVYsUUFBUVcsT0FBUixHQUFrQlgsUUFBUVcsT0FBUixDQUFnQkQsUUFBbEMsR0FBNkNFO0FBSkYsS0FBdkQsRUFNQ1IsSUFORCxDQU1NO0FBQUEsYUFBT0MsUUFBUUMsT0FBUixDQUFnQkMsSUFBSUMsSUFBcEIsQ0FBUDtBQUFBLEtBTk4sQ0FERztBQUFBO0FBOUJRLEMiLCJmaWxlIjoicmVzdGZ1bC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IGFwaSA9IHByb2Nlc3MuZW52LkFQSSB8fCAnaHR0cDovL2xvY2FsaG9zdDo4MDAwLyc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgZ2V0OiAocmVxdWVzdCkgPT4gKFxuICAgIGF4aW9zLmdldChgJHthcGl9JHtyZXF1ZXN0LmVuZHBvaW50fWAsIHtcbiAgICAgIHBhcmFtczogcmVxdWVzdC5wYXJhbXMsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyxcbiAgICAgIH1cbiAgICB9KVxuICAgICAgLnRoZW4ocmVzID0+IFByb21pc2UucmVzb2x2ZShyZXMuZGF0YSkpXG4gICksXG4gIHBvc3Q6IHJlcXVlc3QgPT4gKFxuICAgIGF4aW9zLnBvc3QoYCR7YXBpfSR7cmVxdWVzdC5lbmRwb2ludH1gLCByZXF1ZXN0LnBhcmFtcywge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXG4gICAgICB9LFxuICAgICAgcHJvZ3Jlc3M6IHJlcXVlc3Qub3B0aW9ucyA/IHJlcXVlc3Qub3B0aW9ucy5wcm9ncmVzcyA6IHVuZGVmaW5lZFxuICAgIH0pXG4gICAgICAudGhlbihyZXMgPT4gUHJvbWlzZS5yZXNvbHZlKHJlcy5kYXRhKSlcbiAgKSxcblxuICBkZWxldGU6IChyZXF1ZXN0KSA9PiAoXG4gICAgYXhpb3MuZGVsZXRlKGAke2FwaX0ke3JlcXVlc3QuZW5kcG9pbnR9YCwge1xuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnWC1SZXF1ZXN0ZWQtV2l0aCc6ICdYTUxIdHRwUmVxdWVzdCcsXG4gICAgICB9LFxuICAgICAgcHJvZ3Jlc3M6IHJlcXVlc3Qub3B0aW9ucyA/IHJlcXVlc3Qub3B0aW9ucy5wcm9ncmVzcyA6IHVuZGVmaW5lZFxuICAgIH0pXG4gICAgLnRoZW4ocmVzID0+IFByb21pc2UucmVzb2x2ZShyZXMuZGF0YSkpXG4gICksXG5cbiAgcHV0OiAocmVxdWVzdCkgPT4gKFxuICAgIGF4aW9zLnB1dChgJHthcGl9JHtyZXF1ZXN0LmVuZHBvaW50fWAsIHJlcXVlc3QucGFyYW1zLCB7XG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdYLVJlcXVlc3RlZC1XaXRoJzogJ1hNTEh0dHBSZXF1ZXN0JyxcbiAgICAgIH0sXG4gICAgICBwcm9ncmVzczogcmVxdWVzdC5vcHRpb25zID8gcmVxdWVzdC5vcHRpb25zLnByb2dyZXNzIDogdW5kZWZpbmVkXG4gICAgfSlcbiAgICAudGhlbihyZXMgPT4gUHJvbWlzZS5yZXNvbHZlKHJlcy5kYXRhKSlcbiAgKVxufVxuIl19