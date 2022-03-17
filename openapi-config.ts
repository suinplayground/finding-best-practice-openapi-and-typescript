import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: "./My-API.yaml",
  apiFile: "./src/store/emptyApi.ts",
  apiImport: "emptySplitApi",
  outputFile: "./node_modules/@suin/my-api/index.ts",
  exportName: "myApi",
  hooks: true,
};

export default config;
