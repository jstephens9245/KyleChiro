'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/josephstephens/Desktop/Personal/NextjsPrac/KyleChiro/components/Header.js';


var Header = function Header() {
  return _react2.default.createElement('div', { className: 'header-container', __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('div', { className: 'fullscreen-layout', __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, _react2.default.createElement('div', { className: 'page-header-middle', __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, _react2.default.createElement(_link2.default, { href: '/Services', __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, _react2.default.createElement('a', { className: 'link-style', __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, 'Home')), _react2.default.createElement(_link2.default, { href: '/FAQ', __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, _react2.default.createElement('a', { className: 'link-style', __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, 'FAQs')), _react2.default.createElement(_link2.default, { href: '/About', __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    }
  }, _react2.default.createElement('a', { className: 'link-style', __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, 'About')))));
};

exports.default = Header;