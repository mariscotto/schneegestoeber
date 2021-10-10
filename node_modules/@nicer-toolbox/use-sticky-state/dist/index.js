function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

function useStickyState(defaultValue, key) {
  var _React$useState = React.useState(function () {
    var _window, _window$localStorage;

    var stickyValue = typeof window !== 'undefined' ? (_window = window) === null || _window === void 0 ? void 0 : (_window$localStorage = _window.localStorage) === null || _window$localStorage === void 0 ? void 0 : _window$localStorage.getItem(key) : null;
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  }),
      value = _React$useState[0],
      setValue = _React$useState[1];

  React.useEffect(function () {
    if (typeof window !== 'undefined') {
      var _window2, _window2$localStorage;

      (_window2 = window) === null || _window2 === void 0 ? void 0 : (_window2$localStorage = _window2.localStorage) === null || _window2$localStorage === void 0 ? void 0 : _window2$localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);
  return [value, setValue];
}

module.exports = useStickyState;
//# sourceMappingURL=index.js.map
