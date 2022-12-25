import ts from 'typescript'

export function overrideCompilerOptions(tsConfig: any, overrides?: ts.CompilerOptions): ts.CompilerOptions {

    const { options: tsOptions } =
        ts.convertCompilerOptionsFromJson(
            { ...tsConfig.compilerOptions, ...overrides },
            process.cwd(),
        );

    return tsOptions;
}
