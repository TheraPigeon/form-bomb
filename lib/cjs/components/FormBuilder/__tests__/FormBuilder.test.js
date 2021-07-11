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
var index_1 = __importDefault(require("../index"));
var config_1 = require("../config");
describe('FormBuilder', function () {
    describe('the UI', function () {
        it('should render a "Create Form" button', function () { return __awaiter(void 0, void 0, void 0, function () {
            var button;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        react_1.render(jsx_runtime_1.jsx(index_1.default, {}, void 0));
                        return [4 /*yield*/, react_1.screen.findByText(config_1.defaults.submitText)];
                    case 1:
                        button = _a.sent();
                        expect(button).toBeInTheDocument();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should render a header containing title and description options', function () { return __awaiter(void 0, void 0, void 0, function () {
            var titleInput, descriptionInput;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        react_1.render(jsx_runtime_1.jsx(index_1.default, {}, void 0));
                        return [4 /*yield*/, react_1.screen.findByRole('textbox', { name: 'title' })];
                    case 1:
                        titleInput = _a.sent();
                        return [4 /*yield*/, react_1.screen.findByRole('textbox', {
                                name: 'description',
                            })];
                    case 2:
                        descriptionInput = _a.sent();
                        expect(titleInput).toHaveValue(config_1.defaults.formTitle);
                        expect(descriptionInput).toHaveValue(config_1.defaults.formDescription);
                        return [2 /*return*/];
                }
            });
        }); });
    });
    describe('the create button', function () {
        it('should display text defaultSubmitButtonText when no config object is passed', function () { return __awaiter(void 0, void 0, void 0, function () {
            var button;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        react_1.render(jsx_runtime_1.jsx(index_1.default, {}, void 0));
                        return [4 /*yield*/, react_1.screen.findByText(config_1.defaults.submitText)];
                    case 1:
                        button = _a.sent();
                        expect(button).toBeInTheDocument();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should display text "Create Form" when a config object missing meta.submitText field is passed', function () { return __awaiter(void 0, void 0, void 0, function () {
            var button;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        react_1.render(jsx_runtime_1.jsx(index_1.default, { config: { meta: {} } }, void 0));
                        return [4 /*yield*/, react_1.screen.findByText(config_1.defaults.submitText)];
                    case 1:
                        button = _a.sent();
                        expect(button).toBeInTheDocument();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should display text content based on props.config.meta.submitText', function () { return __awaiter(void 0, void 0, void 0, function () {
            var submitText, button;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        submitText = 'Anything I Want';
                        react_1.render(jsx_runtime_1.jsx(index_1.default, { config: { meta: { submitText: submitText } } }, void 0));
                        return [4 /*yield*/, react_1.screen.findByText(submitText)];
                    case 1:
                        button = _a.sent();
                        expect(button).toBeInTheDocument();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should call the submit function from props when clicked', function () { return __awaiter(void 0, void 0, void 0, function () {
            var submit;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        submit = jest.fn();
                        return [4 /*yield*/, react_1.act(function () { return __awaiter(void 0, void 0, void 0, function () {
                                var button;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            react_1.render(jsx_runtime_1.jsx(index_1.default, { onSubmit: submit }, void 0));
                                            return [4 /*yield*/, react_1.screen.findByText(config_1.defaults.submitText)];
                                        case 1:
                                            button = _a.sent();
                                            user_event_1.default.click(button);
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        expect(submit).toHaveBeenCalled();
                        return [2 /*return*/];
                }
            });
        }); });
        it('should pass the resulting BombConfig object to the submit callback function', function () { return __awaiter(void 0, void 0, void 0, function () {
            var val, submit;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        val = { meta: { title: 'mockTitle' } };
                        submit = function (config) {
                            val = config;
                        };
                        return [4 /*yield*/, react_1.act(function () { return __awaiter(void 0, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            react_1.render(jsx_runtime_1.jsx(index_1.default, { onSubmit: submit }, void 0));
                                            return [4 /*yield*/, react_1.waitFor(function () { return __awaiter(void 0, void 0, void 0, function () {
                                                    var button;
                                                    return __generator(this, function (_a) {
                                                        switch (_a.label) {
                                                            case 0: return [4 /*yield*/, react_1.screen.findByText(config_1.defaults.submitText)];
                                                            case 1:
                                                                button = _a.sent();
                                                                react_1.fireEvent.click(button);
                                                                return [2 /*return*/];
                                                        }
                                                    });
                                                }); })];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        _a.sent();
                        expect(val.meta.title).not.toEqual('mockTitle');
                        return [2 /*return*/];
                }
            });
        }); });
    });
});
//# sourceMappingURL=FormBuilder.test.js.map