declare var Reflect: any;

export var extendsStatic = function(thisClass: any, baseClass: any):any {
  extendsStatic =
    (<any>Object)["setPrototypeOf"] ||
    ({ __proto__: [] } instanceof Array &&
      function(thisClass: any, baseClass: any) {
        thisClass.__proto__ = baseClass;
      }) ||
    function(thisClass: any, baseClass: any) {
      for (var prop in baseClass)
        if (baseClass.hasOwnProperty(prop)) {
          thisClass[prop] = baseClass[prop];
        }
    };
  return extendsStatic(thisClass, baseClass);
};

export function __extends(thisClass: any, baseClass: any) {
  extendsStatic(thisClass, baseClass);

  function __() {
    this.constructor = thisClass;
  }

  thisClass.prototype =
    baseClass === null
      ? Object.create(baseClass)
      : ((__.prototype = baseClass.prototype), new (<any>__)());
}

export var __assign =
  (<any>Object)["assign"] ||
  function(target: any) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s)
        if (Object.prototype.hasOwnProperty.call(s, p)) target[p] = s[p];
    }
    return target;
  };

export var __decorate = function(
  decorators: any,
  target: any,
  key: any,
  desc: any
) {
  var c = arguments.length,
    r =
      c < 3
        ? target
        : desc === null
          ? (desc = Object.getOwnPropertyDescriptor(target, key))
          : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if ((d = decorators[i]))
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
