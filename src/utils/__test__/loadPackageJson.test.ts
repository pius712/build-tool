import {loadPackageJSON} from "../loadPackageJson.js";
import * as assert from "assert";
import path from "node:path";
import {fileURLToPath} from "node:url";

describe('read package json', function () {

    it('success', async () =>{

        const dirName = path.dirname(fileURLToPath(import.meta.url));
        const actual = loadPackageJSON(`${dirName}/fixture`);
        assert.deepEqual(actual,{
                author: 'pius712',
                dependencies: {},
                description: '',
                devDependencies: {},
                license: 'ISC',
                main: 'index.js',
                name: 'test-fixture',
                scripts: {
                    test: 'test fixture file'
                },
                type: 'module',
                version: '1.0.0'
            }
        )
    })
});