export interface PackageJson {
    description: string;
    version: string;
    private?: boolean;
    repository?: { url?: string };
    scripts?: { [name: string]: string };
    type?: string;
    exports: { [path: string]: string };
    types?: string;
    typesVersions: { [ranges: string]: { [path: string]: Array<string> } };
    devDependencies?: { [name: string]: string };
    publishConfig: { tag: string };

// TODO: remove after we drop CJS support
    main?: string;
    module?: string;
}
