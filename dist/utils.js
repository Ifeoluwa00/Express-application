"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPostData = exports.writeDataToFile = void 0;
const fs_1 = __importDefault(require("fs"));
function writeDataToFile(filename, content) {
    fs_1.default.writeFile(filename, JSON.stringify(content, null, 4), "utf8", (err) => {
        if (err) {
            console.log(err);
        }
    });
}
exports.writeDataToFile = writeDataToFile;
function getPostData(req) {
    return new Promise((resolve, reject) => {
        try {
            let body = '';
            req.on('data', (chunk) => {
                body += chunk.toString();
            });
            req.on('end', () => {
                resolve(body);
            });
        }
        catch (error) {
            reject(error);
        }
    });
}
exports.getPostData = getPostData;
