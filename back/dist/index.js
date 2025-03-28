"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./server"));
const envs_1 = require("./config/envs");
const data_source_1 = require("./config/data-source");
try {
    server_1.default.listen(envs_1.PORT, () => {
        console.log(`Server is running on port ${envs_1.PORT}`);
    });
}
catch (error) {
    console.log(error);
}
;
(0, data_source_1.initializeAppDataSource)();
