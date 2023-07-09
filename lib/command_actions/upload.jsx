"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ext = exports.name = exports.base = exports.root = exports.dir = exports.getFile = void 0;
var path_1 = require("path");
var router_1 = require("../../source/router");
var inform = console.log;
var dir;
var root;
var base;
var name;
var ext;
function getFile(clientFile) {
    // ;
    //props= dir,root,base,name,ext
    var _a = path_1.default.parse(clientFile), dir = _a.dir, root = _a.root, base = _a.base, name = _a.name, ext = _a.ext;
    return (0, router_1.default)({ dir: dir, root: root, base: base, name: name, ext: ext });
}
exports.getFile = getFile;
inform("This is the dir: ".concat(dir, "\nThis is the root: ").concat(root, "\nThis is the base: ").concat(base, "\nThis is the name: ").concat(name, "\nThis is the ext: ").concat(ext));
