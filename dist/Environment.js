"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Environment = void 0;
var dotenv = __importStar(require("dotenv"));
var Environment = /** @class */ (function () {
    function Environment() {
        this.qualifier = process.env.NODE_ENV;
        switch (this.qualifier) {
            case "test":
                dotenv.config({ path: process.cwd() + "/.env.test" });
                break;
            case "development":
                dotenv.config({ path: process.cwd() + "/.env.development" });
                break;
            default:
                return;
        }
    }
    Environment.getInstance = function () {
        if (Environment.instance instanceof Environment) {
            return Environment.instance;
        }
        Environment.instance = new Environment();
        return Environment.instance;
    };
    Object.defineProperty(Environment.prototype, "nodeEnv", {
        get: function () {
            return process.env.NODE_ENV || "development";
        },
        enumerable: false,
        configurable: true
    });
    Environment.prototype.logEnvObject = function (logger) {
        if (logger === void 0) { logger = console.log; }
        logger(process.env);
    };
    return Environment;
}());
exports.Environment = Environment;
