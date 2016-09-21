'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getRoutes;
if (typeof require.ensure !== 'function') {
  require.ensure = function (d, c) {
    c(require);
  };
}

if (typeof require.include !== 'function') {
  require.include = function () {};
}

function getRoutes(state) {
  return [{
    path: '/',
    getComponent: function getComponent(location, cb) {
      require.ensure([], function (require) {
        cb(null, require('views/components/home').default);
      });
    },
    getIndexRoute: function getIndexRoute(location, cb) {
      require.ensure([], function (require) {
        cb(null, {
          component: require('views/components/home/user-list').default
        });
      });
    },
    childRoutes: [{
      path: 'user/new',
      getComponent: function getComponent(location, cb) {
        require.ensure([], function (require) {
          cb(null, require('views/components/home/user-details').default);
        });
      }
    }, {
      path: 'user/:id',
      getComponent: function getComponent(location, cb) {
        require.ensure([], function (require) {
          cb(null, require('views/components/home/user-details').default);
        });
      }
    }]
  }, {
    path: '/login',
    getComponent: function getComponent(location, cb) {
      require.ensure([], function (require) {
        cb(null, require('views/components/login').default);
      });
    }
  }];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9zaGFyZWQvcm91dGVzL2luZGV4LmpzIl0sIm5hbWVzIjpbImdldFJvdXRlcyIsInJlcXVpcmUiLCJlbnN1cmUiLCJkIiwiYyIsImluY2x1ZGUiLCJzdGF0ZSIsInBhdGgiLCJnZXRDb21wb25lbnQiLCJsb2NhdGlvbiIsImNiIiwiZGVmYXVsdCIsImdldEluZGV4Um91dGUiLCJjb21wb25lbnQiLCJjaGlsZFJvdXRlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBS3dCQSxTO0FBTHhCLElBQUksT0FBT0MsUUFBUUMsTUFBZixLQUEwQixVQUE5QixFQUEwQztBQUFFRCxVQUFRQyxNQUFSLEdBQWlCLFVBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQUVBLE1BQUVILE9BQUY7QUFBYSxHQUExQztBQUE2Qzs7QUFFekYsSUFBSSxPQUFPQSxRQUFRSSxPQUFmLEtBQTJCLFVBQS9CLEVBQTJDO0FBQUVKLFVBQVFJLE9BQVIsR0FBa0IsWUFBTSxDQUFFLENBQTFCO0FBQTZCOztBQUczRCxTQUFTTCxTQUFULENBQW1CTSxLQUFuQixFQUEwQjtBQUN2QyxTQUFPLENBQ0w7QUFDRUMsVUFBTSxHQURSO0FBRUVDLGtCQUFjLHNCQUFDQyxRQUFELEVBQVdDLEVBQVgsRUFBa0I7QUFDOUJULGNBQVFDLE1BQVIsQ0FBZSxFQUFmLEVBQW1CLFVBQUNELE9BQUQsRUFBYTtBQUM5QlMsV0FBRyxJQUFILEVBQVNULFFBQVEsdUJBQVIsRUFBaUNVLE9BQTFDO0FBQ0QsT0FGRDtBQUdELEtBTkg7QUFPRUMsbUJBQWUsdUJBQUNILFFBQUQsRUFBV0MsRUFBWCxFQUFrQjtBQUMvQlQsY0FBUUMsTUFBUixDQUFlLEVBQWYsRUFBbUIsbUJBQVc7QUFDNUJRLFdBQUcsSUFBSCxFQUFTO0FBQ1BHLHFCQUFXWixRQUFRLGlDQUFSLEVBQTJDVTtBQUQvQyxTQUFUO0FBR0QsT0FKRDtBQUtELEtBYkg7QUFjRUcsaUJBQWEsQ0FDWDtBQUNFUCxZQUFNLFVBRFI7QUFFRUMsb0JBQWMsc0JBQUNDLFFBQUQsRUFBV0MsRUFBWCxFQUFrQjtBQUM5QlQsZ0JBQVFDLE1BQVIsQ0FBZSxFQUFmLEVBQW1CLFVBQUNELE9BQUQsRUFBYTtBQUM5QlMsYUFBRyxJQUFILEVBQVNULFFBQVEsb0NBQVIsRUFBOENVLE9BQXZEO0FBQ0QsU0FGRDtBQUdEO0FBTkgsS0FEVyxFQVNYO0FBQ0VKLFlBQU0sVUFEUjtBQUVFQyxvQkFBYyxzQkFBQ0MsUUFBRCxFQUFXQyxFQUFYLEVBQWtCO0FBQzlCVCxnQkFBUUMsTUFBUixDQUFlLEVBQWYsRUFBbUIsVUFBQ0QsT0FBRCxFQUFhO0FBQzlCUyxhQUFHLElBQUgsRUFBU1QsUUFBUSxvQ0FBUixFQUE4Q1UsT0FBdkQ7QUFDRCxTQUZEO0FBR0Q7QUFOSCxLQVRXO0FBZGYsR0FESyxFQWtDTDtBQUNFSixVQUFNLFFBRFI7QUFFRUMsa0JBQWMsc0JBQUNDLFFBQUQsRUFBV0MsRUFBWCxFQUFrQjtBQUM5QlQsY0FBUUMsTUFBUixDQUFlLEVBQWYsRUFBbUIsVUFBQ0QsT0FBRCxFQUFhO0FBQzlCUyxXQUFHLElBQUgsRUFBU1QsUUFBUSx3QkFBUixFQUFrQ1UsT0FBM0M7QUFDRCxPQUZEO0FBR0Q7QUFOSCxHQWxDSyxDQUFQO0FBMkNEIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaWYgKHR5cGVvZiByZXF1aXJlLmVuc3VyZSAhPT0gJ2Z1bmN0aW9uJykgeyByZXF1aXJlLmVuc3VyZSA9IChkLCBjKSA9PiB7IGMocmVxdWlyZSk7IH07IH1cblxuaWYgKHR5cGVvZiByZXF1aXJlLmluY2x1ZGUgIT09ICdmdW5jdGlvbicpIHsgcmVxdWlyZS5pbmNsdWRlID0gKCkgPT4ge307IH1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRSb3V0ZXMoc3RhdGUpIHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICBwYXRoOiAnLycsXG4gICAgICBnZXRDb21wb25lbnQ6IChsb2NhdGlvbiwgY2IpID0+IHtcbiAgICAgICAgcmVxdWlyZS5lbnN1cmUoW10sIChyZXF1aXJlKSA9PiB7XG4gICAgICAgICAgY2IobnVsbCwgcmVxdWlyZSgndmlld3MvY29tcG9uZW50cy9ob21lJykuZGVmYXVsdCk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGdldEluZGV4Um91dGU6IChsb2NhdGlvbiwgY2IpID0+IHtcbiAgICAgICAgcmVxdWlyZS5lbnN1cmUoW10sIHJlcXVpcmUgPT4ge1xuICAgICAgICAgIGNiKG51bGwsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogcmVxdWlyZSgndmlld3MvY29tcG9uZW50cy9ob21lL3VzZXItbGlzdCcpLmRlZmF1bHQsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGNoaWxkUm91dGVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiAndXNlci9uZXcnLFxuICAgICAgICAgIGdldENvbXBvbmVudDogKGxvY2F0aW9uLCBjYikgPT4ge1xuICAgICAgICAgICAgcmVxdWlyZS5lbnN1cmUoW10sIChyZXF1aXJlKSA9PiB7XG4gICAgICAgICAgICAgIGNiKG51bGwsIHJlcXVpcmUoJ3ZpZXdzL2NvbXBvbmVudHMvaG9tZS91c2VyLWRldGFpbHMnKS5kZWZhdWx0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBwYXRoOiAndXNlci86aWQnLFxuICAgICAgICAgIGdldENvbXBvbmVudDogKGxvY2F0aW9uLCBjYikgPT4ge1xuICAgICAgICAgICAgcmVxdWlyZS5lbnN1cmUoW10sIChyZXF1aXJlKSA9PiB7XG4gICAgICAgICAgICAgIGNiKG51bGwsIHJlcXVpcmUoJ3ZpZXdzL2NvbXBvbmVudHMvaG9tZS91c2VyLWRldGFpbHMnKS5kZWZhdWx0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBwYXRoOiAnL2xvZ2luJyxcbiAgICAgIGdldENvbXBvbmVudDogKGxvY2F0aW9uLCBjYikgPT4ge1xuICAgICAgICByZXF1aXJlLmVuc3VyZShbXSwgKHJlcXVpcmUpID0+IHtcbiAgICAgICAgICBjYihudWxsLCByZXF1aXJlKCd2aWV3cy9jb21wb25lbnRzL2xvZ2luJykuZGVmYXVsdCk7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICB9LFxuICBdO1xufVxuIl19