import * as path from "path";
import * as fs from "fs";
import {PackageJson} from "./types/packageJson.js";

export function loadPackageJson(
    dirPath: string = process.cwd(),
): PackageJson {
    const filepath = path.join(dirPath, 'package.json');
    return JSON.parse(fs.readFileSync(filepath, 'utf-8'));
}
