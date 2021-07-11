"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
        while (_) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("@testing-library/react");
var user_event_1 = __importDefault(require("@testing-library/user-event"));
require("@testing-library/jest-dom/extend-expect");
var __1 = __importDefault(require("../"));
var config_1 = require("../../../config");
var utils_1 = require("../../../../../utils");
var lodash_1 = require("lodash");
describe('BuildHeader', function () {
    afterEach(react_1.cleanup);
    var onSubmit = jest.fn();
    it('Displays a default form title when no title props is passed', function () {
        utils_1.renderWithFormikBuild(jsx_runtime_1.jsx(__1.default, {}, void 0), onSubmit);
        expect(react_1.screen.getByRole('textbox', { name: 'title' })).toHaveValue(config_1.defaults.formTitle);
    });
    it('Displays a custom form title when title prop is passed', function () {
        var customTitle = 'Custom Title';
        var values = lodash_1.cloneDeep(config_1.defaultBomb);
        values.meta.title = customTitle;
        utils_1.renderWithFormikBuild(jsx_runtime_1.jsx(__1.default, {}, void 0), onSubmit, values);
        expect(react_1.screen.getByRole('textbox', { name: 'title' })).toHaveValue(customTitle);
    });
    it('Displays a default form description when no description props is passed', function () {
        utils_1.renderWithFormikBuild(jsx_runtime_1.jsx(__1.default, {}, void 0), onSubmit);
        expect(react_1.screen.getByRole('textbox', { name: 'description' })).toHaveValue(config_1.defaults.formDescription);
    });
    it('Displays a custom form description when description prop is passed', function () {
        var customDescription = 'Custom Description';
        var values = lodash_1.cloneDeep(config_1.defaultBomb);
        values.meta.description = customDescription;
        utils_1.renderWithFormikBuild(jsx_runtime_1.jsx(__1.default, {}, void 0), onSubmit, values);
        expect(react_1.screen.getByRole('textbox', { name: 'description' })).toHaveValue(customDescription);
    });
    it('Displays the updated title value when the user types in the title input', function () { return __awaiter(void 0, void 0, void 0, function () {
        var values, newTitle, findByRole, input;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    values = __assign(__assign({}, lodash_1.cloneDeep(config_1.defaultBomb)), { meta: { title: '', description: '' } });
                    newTitle = 'New Title';
                    findByRole = utils_1.renderWithFormikBuild(jsx_runtime_1.jsx(__1.default, {}, void 0), onSubmit, values).findByRole;
                    return [4 /*yield*/, findByRole('textbox', { name: 'title' })];
                case 1:
                    input = _a.sent();
                    return [4 /*yield*/, user_event_1.default.type(input, newTitle, { delay: 1 })];
                case 2:
                    _a.sent();
                    expect(input).toHaveValue(newTitle);
                    return [2 /*return*/];
            }
        });
    }); });
    it('Displays the updated description value when the user types in the description input', function () { return __awaiter(void 0, void 0, void 0, function () {
        var values, newDescription, findByRole, input;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    values = __assign(__assign({}, lodash_1.cloneDeep(config_1.defaultBomb)), { meta: { title: '', description: '' } });
                    newDescription = 'New Description';
                    findByRole = utils_1.renderWithFormikBuild(jsx_runtime_1.jsx(__1.default, {}, void 0), onSubmit, values).findByRole;
                    return [4 /*yield*/, findByRole('textbox', { name: 'description' })];
                case 1:
                    input = _a.sent();
                    return [4 /*yield*/, user_event_1.default.type(input, newDescription, { delay: 1 })];
                case 2:
                    _a.sent();
                    expect(input).toHaveValue(newDescription);
                    return [2 /*return*/];
            }
        });
    }); });
});
