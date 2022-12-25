import ts from "typescript";
import fs from "fs";

export function loadTsConfig(dirName:string, tsconfigName:string = 'tsconfig.json') {

const tsConfigPath = `${dirName}/${tsconfigName}`;
    const {
        config
    } = ts.parseConfigFileTextToJson(
        tsConfigPath,
        fs.readFileSync(tsConfigPath, 'utf-8'),
    );
    return config;
}