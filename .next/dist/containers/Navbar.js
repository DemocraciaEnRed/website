'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/home/flor/Git/democraciaenred.github.io/containers/Navbar.js',
    _this = undefined;

var activeNavLink = null;

function changeActiveNavLink(obj) {
  console.log(obj);
  // if (!activeNavLink === null) {
  //   obj.className='active'
  // } else {
  //   activeNavLink.className.replace(' active ','')
  //   obj.className= obj.className + ' active '
  // }

  // activeNavLink = obj;
}

var Navbar = function Navbar() {
  return _react2.default.createElement('nav', { role: 'banner', className: 'jsx-3980836044',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, _react2.default.createElement('a', { href: '/', className: 'jsx-3980836044' + ' ' + 'logo',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }), _react2.default.createElement('ul', { role: 'navigation', className: 'jsx-3980836044',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, _react2.default.createElement('li', {
    className: 'jsx-3980836044',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement('a', { onClick: changeActiveNavLink(_this), className: 'jsx-3980836044' + ' ' + 'nav-link',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, 'Selected')), _react2.default.createElement('li', {
    className: 'jsx-3980836044',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement('a', { onClick: changeActiveNavLink(_this), className: 'jsx-3980836044' + ' ' + 'nav-link',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, 'Item')), _react2.default.createElement('li', {
    className: 'jsx-3980836044',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    }
  }, _react2.default.createElement('a', { href: '#', className: 'jsx-3980836044' + ' ' + 'nav-link',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, 'Item')), _react2.default.createElement('li', {
    className: 'jsx-3980836044',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement('a', { href: '#', className: 'jsx-3980836044' + ' ' + 'nav-link',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, 'Item'))), _react2.default.createElement(_style2.default, {
    styleId: '3980836044',
    css: 'nav.jsx-3980836044{height:100px;padding:0 72px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#c5c5c5;box-shadow:inset 0 -1px 0 0 #555555;}.logo.jsx-3980836044{width:211px;height:58px;background-image:url(\'/static/assets/logo.svg\');background-size:contain;background-repeat:no-repeat;}ul.jsx-3980836044{list-style-type:none;text-align:center;}ul.jsx-3980836044 li.jsx-3980836044{display:inline-block;}li.jsx-3980836044+li.jsx-3980836044{margin-left:45px;}.nav-link.jsx-3980836044{padding:15px 0;font-family:\'Dosis-Regular\';font-size:24px;color:#6a6a6a;text-transform:uppercase;text-decoration:none;-webkit-letter-spacing:0.7px;-moz-letter-spacing:0.7px;-ms-letter-spacing:0.7px;letter-spacing:0.7px;}.active.jsx-3980836044{font-weight:bold;}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnMvTmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlDZ0IsQUFHc0IsQUFXRCxBQVFTLEFBS0EsQUFJSixBQUlGLEFBVUUsWUE5QkwsQ0FYRyxFQWdDYSxFQUo5QixBQWNBLElBdkJvQixBQUtwQixHQVprRCxJQVhuQyxXQW1CZixJQWFpQixlQUNELGNBckJVLEFBc0JDLHdCQXJCRyxDQXNCUCxLQWxDUyxnQkFtQ1QsTUF0QnZCLDZGQVpxQixFQW1DckIsMkZBbEMyQix5QkFDVyxvQ0FFdEMiLCJmaWxlIjoiY29udGFpbmVycy9OYXZiYXIuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvZmxvci9HaXQvZGVtb2NyYWNpYWVucmVkLmdpdGh1Yi5pbyIsInNvdXJjZXNDb250ZW50IjpbIlxubGV0IGFjdGl2ZU5hdkxpbmsgPSBudWxsO1xuXG5mdW5jdGlvbiBjaGFuZ2VBY3RpdmVOYXZMaW5rIChvYmopIHtcbmNvbnNvbGUubG9nKG9iailcbiAgLy8gaWYgKCFhY3RpdmVOYXZMaW5rID09PSBudWxsKSB7XG4gIC8vICAgb2JqLmNsYXNzTmFtZT0nYWN0aXZlJ1xuICAvLyB9IGVsc2Uge1xuICAvLyAgIGFjdGl2ZU5hdkxpbmsuY2xhc3NOYW1lLnJlcGxhY2UoJyBhY3RpdmUgJywnJylcbiAgLy8gICBvYmouY2xhc3NOYW1lPSBvYmouY2xhc3NOYW1lICsgJyBhY3RpdmUgJ1xuICAvLyB9XG5cbiAgLy8gYWN0aXZlTmF2TGluayA9IG9iajtcbn1cblxuXG5jb25zdCBOYXZiYXIgPSAoKSA9PiAoXG4gIDxuYXYgcm9sZT0nYmFubmVyJz5cbiAgICA8YSBjbGFzc05hbWU9J2xvZ28nIGhyZWY9Jy8nPjwvYT5cbiAgICA8dWwgcm9sZT0nbmF2aWdhdGlvbic+XG4gICAgICA8bGk+XG4gICAgICAgIDxhIGNsYXNzTmFtZT0nbmF2LWxpbmsnIG9uQ2xpY2s9e2NoYW5nZUFjdGl2ZU5hdkxpbmsodGhpcyl9PlNlbGVjdGVkPC9hPlxuICAgICAgPC9saT5cbiAgICAgIDxsaT5cbiAgICAgICAgPGEgY2xhc3NOYW1lPSduYXYtbGluaycgb25DbGljaz17Y2hhbmdlQWN0aXZlTmF2TGluayh0aGlzKX0+SXRlbTwvYT5cbiAgICAgIDwvbGk+XG4gICAgICA8bGk+XG4gICAgICAgIDxhIGNsYXNzTmFtZT0nbmF2LWxpbmsnIGhyZWY9JyMnPkl0ZW08L2E+XG4gICAgICA8L2xpPlxuICAgICAgPGxpPlxuICAgICAgICA8YSBjbGFzc05hbWU9J25hdi1saW5rJyBocmVmPScjJz5JdGVtPC9hPlxuICAgICAgPC9saT5cbiAgICA8L3VsPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIG5hdiB7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgNzJweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzVjNWM1O1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0xcHggMCAwICM1NTU1NTU7XG5cbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmxvZ28ge1xuICAgICAgICB3aWR0aDogMjExcHg7XG4gICAgICAgIGhlaWdodDogNThweDtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcvc3RhdGljL2Fzc2V0cy9sb2dvLnN2ZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICB9XG5cbiAgICAgIHVsIHtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIHVsIGxpIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuXG4gICAgICBsaSArIGxpIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQ1cHg7XG4gICAgICB9XG5cbiAgICAgIC5uYXYtbGluayB7XG4gICAgICAgIHBhZGRpbmc6IDE1cHggMDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdEb3Npcy1SZWd1bGFyJztcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBjb2xvcjogIzZhNmE2YTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC43cHg7XG4gICAgICB9XG5cbiAgICAgIC5hY3RpdmUge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cblxuICAgIGB9PC9zdHlsZT5cbiAgPC9uYXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhciJdfQ== */\n/*@ sourceURL=containers/Navbar.js */'
  }));
};

exports.default = Navbar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnMvTmF2YmFyLmpzIl0sIm5hbWVzIjpbImFjdGl2ZU5hdkxpbmsiLCJjaGFuZ2VBY3RpdmVOYXZMaW5rIiwib2JqIiwiY29uc29sZSIsImxvZyIsIk5hdmJhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUksZ0JBQUosQUFBb0I7O0FBRXBCLFNBQUEsQUFBUyxvQkFBVCxBQUE4QixLQUFLLEFBQ25DO1VBQUEsQUFBUSxJQUFSLEFBQVksQUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDRDs7O0FBR0QsSUFBTSxTQUFTLFNBQVQsQUFBUyxTQUFBO3lCQUNiLGNBQUEsU0FBSyxNQUFMLEFBQVUscUJBQVY7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtHQUFBLHVDQUNzQixNQUFwQixBQUF5Qix5Q0FBekIsQUFBYTs7Z0JBQWI7a0JBREYsQUFDRSxBQUNBO0FBREE7c0JBQ0EsY0FBQSxRQUFJLE1BQUosQUFBUyx5QkFBVDs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO3FCQUNFLGNBQUE7ZUFBQTs7Z0JBQUE7a0JBQUEsQUFDRTtBQURGO0FBQUEscUJBQ0UsY0FBQSxPQUF3QixTQUFTLG9CQUFqQyw0Q0FBQSxBQUFhOztnQkFBYjtrQkFBQTtBQUFBO0tBRkosQUFDRSxBQUNFLEFBRUYsOEJBQUEsY0FBQTtlQUFBOztnQkFBQTtrQkFBQSxBQUNFO0FBREY7QUFBQSxxQkFDRSxjQUFBLE9BQXdCLFNBQVMsb0JBQWpDLDRDQUFBLEFBQWE7O2dCQUFiO2tCQUFBO0FBQUE7S0FMSixBQUlFLEFBQ0UsQUFFRiwwQkFBQSxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUEsT0FBd0IsTUFBeEIsQUFBNkIseUNBQTdCLEFBQWE7O2dCQUFiO2tCQUFBO0FBQUE7S0FSSixBQU9FLEFBQ0UsQUFFRiwwQkFBQSxjQUFBO2VBQUE7O2dCQUFBO2tCQUFBLEFBQ0U7QUFERjtBQUFBLHFCQUNFLGNBQUEsT0FBd0IsTUFBeEIsQUFBNkIseUNBQTdCLEFBQWE7O2dCQUFiO2tCQUFBO0FBQUE7S0FiTixBQUVFLEFBVUUsQUFDRTthQWJOO1NBRGEsQUFDYjtBQUFBO0FBREYsQUFvRUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoiTmF2YmFyLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2Zsb3IvR2l0L2RlbW9jcmFjaWFlbnJlZC5naXRodWIuaW8ifQ==