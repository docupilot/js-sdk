# Developer Notes

Major part of this sdk is generated from
OpenAPI Spec obtained from the api docs.

#### Generator

Codegen currently runs in parallel:
- Legacy generator (`@docupilot/openapi-typescript-codegen`) to keep existing SDK structure/API stable
- New generator (`@hey-api/openapi-ts`) under `v2` namespace/path for gradual migration

#### Generation from Spec

Whenever there are new API changes, update:
- `openapi-app.yaml`
- `openapi-accounts.yaml`

Then regenerate:

```bash
npm run generate
```

Output paths:
- Legacy output: `src/api`, `src/accounts`
- v2 output: `src/v2/api`, `src/v2/accounts`

Other useful scripts:
- `npm run generate.legacy.node` (node-friendly legacy output)
- `npm run generate.legacy` (xhr/react-friendly legacy output)
- `npm run generate.v2`

#### Adding examples

Necessary examples can be added as new scripts to `examples` directory.
