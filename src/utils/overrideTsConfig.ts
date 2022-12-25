import ts from 'typescript'

export function overrideTsConfig(tsConfig: any,overrides?: ts.CompilerOptions): ts.CompilerOptions {

    const { options: tsOptions } =
        ts.convertCompilerOptionsFromJson(
            { ...tsConfig.compilerOptions, ...overrides },
            process.cwd(),
        );

    return tsOptions;
}
