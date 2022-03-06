exports.log = function(msg) {
    console.log("%c[Log]", "color: orange;", msg);
}
exports.error = function(msg) {
    console.log("%c[Error]", "color: red;", msg);
}
exports.warn = function(msg) {
    console.log("%c[Warn]", "color: yellow;", msg);
}
exports.install = function(filename_js){
    console.log("%c[Install]", "color: purple;", ` Loaded new file: ${filename_js}`);
}
exports.custom = function(type, style, msg){
    console.log(`%c[${type}]`, `${style}`, msg);
}