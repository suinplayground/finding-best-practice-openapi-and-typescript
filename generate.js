const { spawnSync } = require("child_process");
const { mkdirSync, writeFileSync } = require("fs");

mkdirSync("./node_modules/@suin/my-api/", { recursive: true });
spawnSync("npx", ["@rtk-query/codegen-openapi", "openapi-config.ts"], {
  stdio: "inherit",
});
process.chdir("./node_modules/@suin/my-api/");
writeFileSync(
  "package.json",
  JSON.stringify(
    {
      name: "@suin/my-api",
      version: "0.0.0",
      main: "index.js",
      types: "index.d.ts",
    },
    null,
    2
  )
);
spawnSync(
  "npx",
  [
    "tsc",
    "index.ts",
    "--target",
    "esnext",
    "--moduleResolution",
    "node",
    "--declaration",
    "--declarationMap",
    "--inlineSourceMap",
    "--typeRoots",
    "../../@types/",
  ],
  {
    stdio: "inherit",
  }
);
