# Better Workflow & `tsconfig.json` in TypeScript

To work more efficiently with TypeScript, it’s essential to configure your project properly. TypeScript provides a configuration file called `tsconfig.json`, which allows you to customize the behavior of the TypeScript compiler and create a more optimized workflow.

## Setting Up `tsconfig.json`

The `tsconfig.json` file contains configuration options for the TypeScript compiler, helping to streamline your development process. It defines the root of a TypeScript project and provides control over the compilation settings.

### Creating `tsconfig.json`

To create a `tsconfig.json` file, run the following command in your project directory:

```bash
tsc --init
```

This will generate a basic tsconfig.json file in the root of your project.

Sample tsconfig.json
Here is an example of a basic tsconfig.json file:

```json
{
  "compilerOptions": {
    "target": "ES6", // Specifies ECMAScript target version
    "module": "CommonJS", // Module system (CommonJS for Node.js)
    "strict": true, // Enable strict type-checking options
    "esModuleInterop": true, // Enables interop between ES modules and CommonJS
    "forceConsistentCasingInFileNames": true, // Ensure consistent file name casing
    "skipLibCheck": true, // Skip checking of declaration files
    "outDir": "./dist", // Output directory for compiled files
    "rootDir": "./src" // Root directory of source files
  },
  "include": ["src/**/*"], // Specify the files or directories to include
  "exclude": ["node_modules", "dist"] // Exclude certain files or directories
}
```
