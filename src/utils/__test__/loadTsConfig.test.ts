import {loadTsConfig} from "../loadTsConfig.js";
import * as assert from "assert";
import * as path from "path";
import {fileURLToPath} from "node:url";

describe('load ts config', function () {

    it('success', async () => {

        const dirName = path.dirname(fileURLToPath(import.meta.url));
        const actual = loadTsConfig(`${dirName}/fixture`, 'tsconfig.test.json')
        assert.deepEqual(actual, {
                compilerOptions: {
                    declaration: true,
                    esModuleInterop: true,
                    module: 'nodenext',
                    moduleResolution: 'nodenext',
                    skipLibCheck: true,
                    target: 'es2020'
                },
                exclude: [
                    'node_modules'
                ],
                include: [
                    'src'
                ]
            }
        )
    })
});