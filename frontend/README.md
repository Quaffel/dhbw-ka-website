# dhbw-ka-website (working title) frontend

As the content is written in [_mdx_](https://mdxjs.com/) and the generated components are used directly in the frontend, the content is located in this directory as well.

## getting started

### setting the project up

Open a command line prompt with this directory as its working directory and run `npm install`.
Once npm is done, try to build the project to ensure that everything is working just as expected.

### building the project

The current webpack configuration provides a _development_ and a _production_ build target.
Whilst the development build is optimized for a friction-less debugging experience (e.g. by emitting source maps), the production build target is expected to perform a little better.

To build for the development target, run:

```shell
npm run build-development
```

If you want to launch a webserver with live reloading ("re-compilation and reloads-as-you-go"; ideal if you want to test the impact of your changes immediately without having to re-compile the entire project), run:

```shell
npm run dev
```

For production-ready builds, run:

```shell
npm run build-production
```

## known issues

### imports in content files (`.mdx`, `.tsx` and `.ts` files located in `./content`)

This project makes use of the "virtual directory" feature of the typescript compiler (`compilerOptions.rootDirs`) that effectively merges the `content` and the `src` directory.
As there's no apparent way to use the same mechanism for module resolution in webpack as well, all imports of all modules that reside in the `content` directory must either be relative (if requested module is in the same directory) or absolute.
The latter option leverages the `baseDir` feature of the typescript compiler.
Although webpack doesn't support that one out of the box as well, support is added using the `tsconfig-paths-webpack-plugin`.

Some IDEs, however, don't support module resolution based on the tsconfig `baseUrl` property. You may therefore be prompted to install modules located in the `src` directory when writing such an import statement.
This may also affect auto-completion for relative imports.
Hence, always keep a keen eye on the import paths whenever a file in the `content` directory is affected by a change.
