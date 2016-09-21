'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };
// import favicon from 'serve-favicon';
//  Framework


//  Middleware


//  React Router

//  REDUX

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _helmet = require('helmet');

var _helmet2 = _interopRequireDefault(_helmet);

var _reactRouter = require('react-router');

var _routes = require('routes');

var _routes2 = _interopRequireDefault(_routes);

var _store = require('flux/store');

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

// view engine setup
app.set('views', _path2.default.join('views'));
app.set('view engine', 'react');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use((0, _morgan2.default)('dev'));
app.use((0, _compression2.default)());
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use((0, _cookieParser2.default)());

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

var port = normalizePort(process.env.PORT || '3001');

/** @namespace process.env.WEBPACK_DEV */
if (process.env.NODE_ENV !== 'production' || process.env.WEBPACK_DEV) {
  (function () {
    var httpProxy = require('http-proxy');
    var proxy = httpProxy.createProxyServer();
    app.use('/static', function (req, res) {
      proxy.web(req, res, {
        target: 'http://localhost:8080/static'
      });
    });
  })();
} else {
  app.use('/static', _express2.default.static(_path2.default.resolve(_path2.default.join(__dirname, '..', 'client/public/'))));
}

app.use((0, _helmet2.default)());

app.use(function (req, res, next) {
  var location = req.url;
  req.store = (0, _store.createStore)();
  res.render = function () {
    var Layout = require('views/layouts/main').default;
    (0, _reactRouter.match)({ routes: (0, _routes2.default)(req.store.getState()), location: location }, function (error, redirectLocation, renderProps) {
      if (error) {
        error.status = 501;
        return next(error);
      } else if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      } else if (renderProps) {
        var _ret2 = function () {
          var HTML = '';
          var actions = renderProps.components.reduce(function (actions, component) {
            return actions.concat(component.getActions ? component.getActions(renderProps.params, location.query) : []);
          }, []);

          Promise.all(actions.map(req.store.dispatch)).then(function () {
            try {
              HTML = (0, _server.renderToString)(_react2.default.createElement(
                _reactRedux.Provider,
                { store: req.store },
                _react2.default.createElement(_reactRouter.RouterContext, renderProps)
              ));
              HTML = (0, _server.renderToStaticMarkup)(_react2.default.createElement(
                Layout,
                { store: req.store },
                HTML
              ));
            } catch (err) {
              err.status = 500;
              return next(err);
            }
            return res.status(200).send('<!DOCTYPE html> ' + HTML);
          });
          return {
            v: null
          };
        }();

        if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
      }
      var err = new Error('no page found');
      err.status = 404;
      return next(err);
    });
  };
  next();
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    console.log(err.message, err.stack);
    res.json(err);
  });
}

// production error handler
// no stacktrace leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  console.log(err.message, err.stack);
  res.json({
    error: err.message,
    stack: err.stack
  });
  return next;
});

app.use('*', function (req, res) {
  res.render();
});

// Start Web Server

var debug = require('debug')('React-Sandbox:server');
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string' ? 'Pipe ' + port : 'Pipe ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;

  console.log('Listening on ' + bind);
}

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2ZXIvaW5kZXguanMiXSwibmFtZXMiOlsiYXBwIiwic2V0Iiwiam9pbiIsInVzZSIsImpzb24iLCJ1cmxlbmNvZGVkIiwiZXh0ZW5kZWQiLCJub3JtYWxpemVQb3J0IiwidmFsIiwicG9ydCIsInBhcnNlSW50IiwiaXNOYU4iLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsIk5PREVfRU5WIiwiV0VCUEFDS19ERVYiLCJodHRwUHJveHkiLCJyZXF1aXJlIiwicHJveHkiLCJjcmVhdGVQcm94eVNlcnZlciIsInJlcSIsInJlcyIsIndlYiIsInRhcmdldCIsInN0YXRpYyIsInJlc29sdmUiLCJfX2Rpcm5hbWUiLCJuZXh0IiwibG9jYXRpb24iLCJ1cmwiLCJzdG9yZSIsInJlbmRlciIsIkxheW91dCIsImRlZmF1bHQiLCJyb3V0ZXMiLCJnZXRTdGF0ZSIsImVycm9yIiwicmVkaXJlY3RMb2NhdGlvbiIsInJlbmRlclByb3BzIiwic3RhdHVzIiwicmVkaXJlY3QiLCJwYXRobmFtZSIsInNlYXJjaCIsIkhUTUwiLCJhY3Rpb25zIiwiY29tcG9uZW50cyIsInJlZHVjZSIsImNvbXBvbmVudCIsImNvbmNhdCIsImdldEFjdGlvbnMiLCJwYXJhbXMiLCJxdWVyeSIsIlByb21pc2UiLCJhbGwiLCJtYXAiLCJkaXNwYXRjaCIsInRoZW4iLCJlcnIiLCJzZW5kIiwiRXJyb3IiLCJnZXQiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsInN0YWNrIiwiZGVidWciLCJodHRwIiwic2VydmVyIiwiY3JlYXRlU2VydmVyIiwib25FcnJvciIsInN5c2NhbGwiLCJiaW5kIiwiY29kZSIsImV4aXQiLCJvbkxpc3RlbmluZyIsImFkZHIiLCJhZGRyZXNzIiwibGlzdGVuIiwib24iXSwibWFwcGluZ3MiOiI7OztBQUNBO0FBQ0E7OztBQU1BOzs7QUFNQTs7QUFLQTs7QUFuQkE7Ozs7QUFHQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFHQTs7OztBQUNBOzs7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QSxJQURDLGFBRURBLElBRlo7O0FBSUE7QUFDQSxVQUFRNEIsTUFBTW9DLElBQWQ7QUFDRSxTQUFLLFFBQUw7QUFDRVgsY0FBUXpCLEtBQVIsQ0FBaUJtQyxJQUFqQjtBQUNBNUQsY0FBUThELElBQVIsQ0FBYSxDQUFiO0FBQ0E7QUFDRixTQUFLLFlBQUw7QUFDRVosY0FBUXpCLEtBQVIsQ0FBaUJtQyxJQUFqQjtBQUNBNUQsY0FBUThELElBQVIsQ0FBYSxDQUFiO0FBQ0E7QUFDRjtBQUNFLFlBQU1yQyxLQUFOO0FBVko7QUFZRDs7QUFFRDs7OztBQUlBLFNBQVNzQyxXQUFULEdBQXVCO0FBQ3JCLE1BQU1DLE9BQU9SLE9BQU9TLE9BQVAsRUFBYjtBQUNBLE1BQU1MLE9BQU8sT0FBT0ksSUFBUCxLQUFnQixRQUFoQixhQUNEQSxJQURDLGFBRURBLEtBQUtuRSxJQUZqQjs7QUFJQXFELFVBQVFDLEdBQVIsbUJBQTRCUyxJQUE1QjtBQUNEOztBQUdEOzs7O0FBSUFKLE9BQU9VLE1BQVAsQ0FBY3JFLElBQWQ7QUFDQTJELE9BQU9XLEVBQVAsQ0FBVSxPQUFWLEVBQW1CVCxPQUFuQjtBQUNBRixPQUFPVyxFQUFQLENBQVUsV0FBVixFQUF1QkosV0FBdkI7O0FBRUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbi8vIGltcG9ydCBmYXZpY29uIGZyb20gJ3NlcnZlLWZhdmljb24nO1xuLy8gIEZyYW1ld29ya1xuaW1wb3J0IGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgY29tcHJlc3MgZnJvbSAnY29tcHJlc3Npb24nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlclRvU3RhdGljTWFya3VwLCByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuXG4vLyAgTWlkZGxld2FyZVxuaW1wb3J0IGNvb2tpZVBhcnNlciBmcm9tICdjb29raWUtcGFyc2VyJztcbmltcG9ydCBib2R5UGFyc2VyIGZyb20gJ2JvZHktcGFyc2VyJztcbmltcG9ydCBtb3JnYW4gZnJvbSAnbW9yZ2FuJztcbmltcG9ydCBoZWxtZXQgZnJvbSAnaGVsbWV0JztcblxuLy8gIFJlYWN0IFJvdXRlclxuXG5pbXBvcnQgeyBtYXRjaCwgUm91dGVyQ29udGV4dCB9IGZyb20gJ3JlYWN0LXJvdXRlcic7XG5pbXBvcnQgZ2V0Um91dGVzIGZyb20gJ3JvdXRlcyc7XG5cbi8vICBSRURVWFxuXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ2ZsdXgvc3RvcmUnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmNvbnN0IGFwcCA9IGV4cHJlc3MoKTtcblxuLy8gdmlldyBlbmdpbmUgc2V0dXBcbmFwcC5zZXQoJ3ZpZXdzJywgcGF0aC5qb2luKCd2aWV3cycpKTtcbmFwcC5zZXQoJ3ZpZXcgZW5naW5lJywgJ3JlYWN0Jyk7XG5cbi8vIHVuY29tbWVudCBhZnRlciBwbGFjaW5nIHlvdXIgZmF2aWNvbiBpbiAvcHVibGljXG4vLyBhcHAudXNlKGZhdmljb24ocGF0aC5qb2luKF9fZGlybmFtZSwgJ3B1YmxpYycsICdmYXZpY29uLmljbycpKSk7XG5hcHAudXNlKG1vcmdhbignZGV2JykpO1xuYXBwLnVzZShjb21wcmVzcygpKTtcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpO1xuYXBwLnVzZShib2R5UGFyc2VyLnVybGVuY29kZWQoeyBleHRlbmRlZDogZmFsc2UgfSkpO1xuYXBwLnVzZShjb29raWVQYXJzZXIoKSk7XG5cbmZ1bmN0aW9uIG5vcm1hbGl6ZVBvcnQodmFsKSB7XG4gIGNvbnN0IHBvcnQgPSBwYXJzZUludCh2YWwsIDEwKTtcblxuICBpZiAoaXNOYU4ocG9ydCkpIHtcbiAgICAvLyBuYW1lZCBwaXBlXG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIGlmIChwb3J0ID49IDApIHtcbiAgICAvLyBwb3J0IG51bWJlclxuICAgIHJldHVybiBwb3J0O1xuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5jb25zdCBwb3J0ID0gbm9ybWFsaXplUG9ydChwcm9jZXNzLmVudi5QT1JUIHx8ICczMDAxJyk7XG5cblxuLyoqIEBuYW1lc3BhY2UgcHJvY2Vzcy5lbnYuV0VCUEFDS19ERVYgKi9cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nIHx8IHByb2Nlc3MuZW52LldFQlBBQ0tfREVWKSB7XG4gIGNvbnN0IGh0dHBQcm94eSA9IHJlcXVpcmUoJ2h0dHAtcHJveHknKTtcbiAgY29uc3QgcHJveHkgPSBodHRwUHJveHkuY3JlYXRlUHJveHlTZXJ2ZXIoKTtcbiAgYXBwLnVzZSgnL3N0YXRpYycsIChyZXEsIHJlcykgPT4ge1xuICAgIHByb3h5LndlYihyZXEsIHJlcywge1xuICAgICAgdGFyZ2V0OiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL3N0YXRpYycsXG4gICAgfSk7XG4gIH0pO1xufSBlbHNlIHtcbiAgYXBwLnVzZSgnL3N0YXRpYycsIGV4cHJlc3Muc3RhdGljKHBhdGgucmVzb2x2ZShcbiAgICBwYXRoLmpvaW4oX19kaXJuYW1lLCAnLi4nLCAnY2xpZW50L3B1YmxpYy8nKVxuICApKSk7XG59XG5cbmFwcC51c2UoaGVsbWV0KCkpO1xuXG5hcHAudXNlKChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBjb25zdCBsb2NhdGlvbiA9IHJlcS51cmw7XG4gIHJlcS5zdG9yZSA9IGNyZWF0ZVN0b3JlKCk7XG4gIHJlcy5yZW5kZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgTGF5b3V0ID0gcmVxdWlyZSgndmlld3MvbGF5b3V0cy9tYWluJykuZGVmYXVsdDtcbiAgICBtYXRjaCh7IHJvdXRlczogZ2V0Um91dGVzKHJlcS5zdG9yZS5nZXRTdGF0ZSgpKSwgbG9jYXRpb24gfSwgKGVycm9yLCByZWRpcmVjdExvY2F0aW9uLCByZW5kZXJQcm9wcykgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGVycm9yLnN0YXR1cyA9IDUwMTtcbiAgICAgICAgcmV0dXJuIG5leHQoZXJyb3IpO1xuICAgICAgfSBlbHNlIGlmIChyZWRpcmVjdExvY2F0aW9uKSB7XG4gICAgICAgIHJldHVybiByZXMucmVkaXJlY3QoMzAyLCByZWRpcmVjdExvY2F0aW9uLnBhdGhuYW1lICsgcmVkaXJlY3RMb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgfSBlbHNlIGlmIChyZW5kZXJQcm9wcykge1xuICAgICAgICBsZXQgSFRNTCA9ICcnO1xuICAgICAgICBjb25zdCBhY3Rpb25zID0gcmVuZGVyUHJvcHMuY29tcG9uZW50cy5yZWR1Y2UoKGFjdGlvbnMsIGNvbXBvbmVudCkgPT4gKFxuICAgICAgICAgIGFjdGlvbnMuY29uY2F0KGNvbXBvbmVudC5nZXRBY3Rpb25zID9cbiAgICAgICAgICAgIGNvbXBvbmVudC5nZXRBY3Rpb25zKHJlbmRlclByb3BzLnBhcmFtcywgbG9jYXRpb24ucXVlcnkpIDpcbiAgICAgICAgICAgIFtdKVxuICAgICAgICApLCBbXSk7XG5cblxuICAgICAgICBQcm9taXNlLmFsbChhY3Rpb25zLm1hcChyZXEuc3RvcmUuZGlzcGF0Y2gpKVxuICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIEhUTUwgPSByZW5kZXJUb1N0cmluZyhcbiAgICAgICAgICAgICAgICA8UHJvdmlkZXIgc3RvcmU9e3JlcS5zdG9yZX0+XG4gICAgICAgICAgICAgICAgICA8Um91dGVyQ29udGV4dCB7Li4ucmVuZGVyUHJvcHN9IC8+XG4gICAgICAgICAgICAgICAgPC9Qcm92aWRlcj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgSFRNTCA9IHJlbmRlclRvU3RhdGljTWFya3VwKDxMYXlvdXQgc3RvcmU9e3JlcS5zdG9yZX0+e0hUTUx9PC9MYXlvdXQ+KTtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICBlcnIuc3RhdHVzID0gNTAwO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dChlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKFxuICAgICAgICAgICAgICBgPCFET0NUWVBFIGh0bWw+ICR7SFRNTH1gKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG4gICAgICBjb25zdCBlcnIgPSBuZXcgRXJyb3IoJ25vIHBhZ2UgZm91bmQnKTtcbiAgICAgIGVyci5zdGF0dXMgPSA0MDQ7XG4gICAgICByZXR1cm4gbmV4dChlcnIpO1xuICAgIH0pO1xuICB9O1xuICBuZXh0KCk7XG59KTtcblxuLy8gZXJyb3IgaGFuZGxlcnNcblxuLy8gZGV2ZWxvcG1lbnQgZXJyb3IgaGFuZGxlclxuLy8gd2lsbCBwcmludCBzdGFja3RyYWNlXG5pZiAoYXBwLmdldCgnZW52JykgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgYXBwLnVzZSgoZXJyLCByZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIHJlcy5zdGF0dXMoZXJyLnN0YXR1cyB8fCA1MDApO1xuICAgIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlLCBlcnIuc3RhY2spO1xuICAgIHJlcy5qc29uKGVycik7XG4gIH0pO1xufVxuXG4vLyBwcm9kdWN0aW9uIGVycm9yIGhhbmRsZXJcbi8vIG5vIHN0YWNrdHJhY2UgbGVha2VkIHRvIHVzZXJcbmFwcC51c2UoKGVyciwgcmVxLCByZXMsIG5leHQpID0+IHtcbiAgcmVzLnN0YXR1cyhlcnIuc3RhdHVzIHx8IDUwMCk7XG4gIGNvbnNvbGUubG9nKGVyci5tZXNzYWdlLCBlcnIuc3RhY2spO1xuICByZXMuanNvbih7XG4gICAgZXJyb3I6IGVyci5tZXNzYWdlLFxuICAgIHN0YWNrOiBlcnIuc3RhY2ssXG4gIH0pO1xuICByZXR1cm4gbmV4dDtcbn0pO1xuXG5hcHAudXNlKCcqJywgKHJlcSwgcmVzKSA9PiB7XG4gIHJlcy5yZW5kZXIoKTtcbn0pO1xuXG4vLyBTdGFydCBXZWIgU2VydmVyXG5cbmNvbnN0IGRlYnVnID0gcmVxdWlyZSgnZGVidWcnKSgnUmVhY3QtU2FuZGJveDpzZXJ2ZXInKTtcbmNvbnN0IGh0dHAgPSByZXF1aXJlKCdodHRwJyk7XG5cbi8qKlxuICogR2V0IHBvcnQgZnJvbSBlbnZpcm9ubWVudCBhbmQgc3RvcmUgaW4gRXhwcmVzcy5cbiAqL1xuXG5hcHAuc2V0KCdwb3J0JywgcG9ydCk7XG5cbi8qKlxuICogQ3JlYXRlIEhUVFAgc2VydmVyLlxuICovXG5cbmNvbnN0IHNlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKGFwcCk7XG5cblxuLyoqXG4gKiBFdmVudCBsaXN0ZW5lciBmb3IgSFRUUCBzZXJ2ZXIgXCJlcnJvclwiIGV2ZW50LlxuICovXG5cbmZ1bmN0aW9uIG9uRXJyb3IoZXJyb3IpIHtcbiAgaWYgKGVycm9yLnN5c2NhbGwgIT09ICdsaXN0ZW4nKSB7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cblxuICBjb25zdCBiaW5kID0gdHlwZW9mIHBvcnQgPT09ICdzdHJpbmcnXG4gICAgPyBgUGlwZSAke3BvcnR9YFxuICAgIDogYFBpcGUgJHtwb3J0fWA7XG5cbiAgLy8gaGFuZGxlIHNwZWNpZmljIGxpc3RlbiBlcnJvcnMgd2l0aCBmcmllbmRseSBtZXNzYWdlc1xuICBzd2l0Y2ggKGVycm9yLmNvZGUpIHtcbiAgICBjYXNlICdFQUNDRVMnOlxuICAgICAgY29uc29sZS5lcnJvcihgJHtiaW5kfSByZXF1aXJlcyBlbGV2YXRlZCBwcml2aWxlZ2VzYCk7XG4gICAgICBwcm9jZXNzLmV4aXQoMSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdFQUREUklOVVNFJzpcbiAgICAgIGNvbnNvbGUuZXJyb3IoYCR7YmluZH0gaXMgYWxyZWFkeSBpbiB1c2VgKTtcbiAgICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG4vKipcbiAqIEV2ZW50IGxpc3RlbmVyIGZvciBIVFRQIHNlcnZlciBcImxpc3RlbmluZ1wiIGV2ZW50LlxuICovXG5cbmZ1bmN0aW9uIG9uTGlzdGVuaW5nKCkge1xuICBjb25zdCBhZGRyID0gc2VydmVyLmFkZHJlc3MoKTtcbiAgY29uc3QgYmluZCA9IHR5cGVvZiBhZGRyID09PSAnc3RyaW5nJ1xuICAgID8gYHBpcGUgJHthZGRyfWBcbiAgICA6IGBwb3J0ICR7YWRkci5wb3J0fWA7XG5cbiAgY29uc29sZS5sb2coYExpc3RlbmluZyBvbiAke2JpbmR9YCk7XG59XG5cblxuLyoqXG4gKiBMaXN0ZW4gb24gcHJvdmlkZWQgcG9ydCwgb24gYWxsIG5ldHdvcmsgaW50ZXJmYWNlcy5cbiAqL1xuXG5zZXJ2ZXIubGlzdGVuKHBvcnQpO1xuc2VydmVyLm9uKCdlcnJvcicsIG9uRXJyb3IpO1xuc2VydmVyLm9uKCdsaXN0ZW5pbmcnLCBvbkxpc3RlbmluZyk7XG5cbi8qKlxuICogTm9ybWFsaXplIGEgcG9ydCBpbnRvIGEgbnVtYmVyLCBzdHJpbmcsIG9yIGZhbHNlLlxuICovXG4iXX0=