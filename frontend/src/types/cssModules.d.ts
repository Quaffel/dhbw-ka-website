// Dummy stylesheet module declaration to avoid type errors and module resolution errors during compilation.
// Auto-completion hints are provided by the "typescript-plugin-css-modules" TypeScript language service plugin
// (that is unavailable during compilation, hence the errors without this module declaration).
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
