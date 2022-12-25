import * as assert from "assert";
import {overrideCompilerOptions} from "../overrideCompilerOptions.js";
import {loadTsConfig} from "../loadTsConfig.js";
import path from "path";
import {fileURLToPath} from "node:url";

describe('get ts config', function () {

    it('success', async () =>{

        const dirName = path.dirname(fileURLToPath(import.meta.url));
        const tsConfig = loadTsConfig(`${dirName}/fixture`, 'tsconfig.test.json');
        const actual = overrideCompilerOptions(tsConfig, {
            declaration:false
        });
        assert.deepEqual(actual,{
            declaration: false,
            esModuleInterop: true,
            module: 199,
            moduleResolution: 99,
            skipLibCheck: true,
            target: 7
        })
    })
});