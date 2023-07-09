"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var puppeteer_1 = require("puppeteer");
var path_1 = require("path");
// import { dir , root, base, name, ext } from "../lib/command_actions/upload";
var inform = console.log;
// const dirPATH = path.format({root, dir});
//import { build } from "./rules.js"; 
function router(_a) {
    var dir = _a.dir, root = _a.root, base = _a.base, name = _a.name, ext = _a.ext;
    return __awaiter(this, void 0, void 0, function () {
        var dirPATH, clientFile, browser, page, fileInput, gifUrl_1, gifData_1, gifUrl, gifData;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    dirPATH = path_1.default.format({ root: root, dir: dir });
                    clientFile = path_1.default.join(dirPATH, base);
                    return [4 /*yield*/, puppeteer_1.default.launch()];
                case 1:
                    browser = _b.sent();
                    return [4 /*yield*/, browser.newPage()];
                case 2:
                    page = _b.sent();
                    return [4 /*yield*/, page.$("input[type=file]")];
                case 3:
                    fileInput = _b.sent();
                    if (!fileInput) return [3 /*break*/, 9];
                    // Use fileInput.uploadFile() to upload your video file
                    return [4 /*yield*/, fileInput.uploadFile(clientFile)];
                case 4:
                    // Use fileInput.uploadFile() to upload your video file
                    _b.sent();
                    // Find and click the button to start the conversion
                    return [4 /*yield*/, page.click('input[type=submit]')];
                case 5:
                    // Find and click the button to start the conversion
                    _b.sent();
                    // Wait for the conversion to complete
                    return [4 /*yield*/, page.waitForSelector('#output')];
                case 6:
                    // Wait for the conversion to complete
                    _b.sent();
                    return [4 /*yield*/, page.$eval('#output img', function (img) { return img.src; })];
                case 7:
                    gifUrl_1 = _b.sent();
                    return [4 /*yield*/, page.$eval('#output img', function (img) { return img.src.split(',')[1]; })];
                case 8:
                    gifData_1 = _b.sent();
                    _b.label = 9;
                case 9: return [4 /*yield*/, page.goto('https://ezgif.com/')];
                case 10:
                    _b.sent();
                    return [4 /*yield*/, page.waitForNavigation({ waitUntil: 'networkidle0' })];
                case 11:
                    _b.sent();
                    // Find and click the button to start the conversion: 
                    return [4 /*yield*/, page.click('input[type=submit]')];
                case 12:
                    // Find and click the button to start the conversion: 
                    _b.sent();
                    //Wait for the conversion to complete: 
                    return [4 /*yield*/, page.waitForSelector('#output')];
                case 13:
                    //Wait for the conversion to complete: 
                    _b.sent();
                    return [4 /*yield*/, page.$eval('#output img', function (img) { return img.src; })];
                case 14:
                    gifUrl = _b.sent();
                    return [4 /*yield*/, page.$eval('#output img', function (img) { return img.src.split(',')[1]; })];
                case 15:
                    gifData = _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.default = router;
;
// inform(router(clientFile));
/* Close the Puppeteer instance and save the result:
Close the browser: await browser.close();.
Save the GIF URL or data to an output file using Node.js's fs module or process it further according to your needs.

Run the script:
At the end of convertToGif.js, add the following line to execute the script: convertToGif();.
Run the script in the command line using node convertToGif.js.

This is a basic outline of how you can use Puppeteer to automate a script that accesses the EZGIF website and converts videos to GIFs. Feel free to adapt and enhance the script as per your specific requirements.

Remember to handle any errors that may occur during the automation process and ensure that you have the necessary permissions to convert videos to GIFs using the EZGIF website and API.
*/
