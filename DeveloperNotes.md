# Developer Notes

Major part of this sdk is generated from
OpenAPI Spec obtained from the api docs.

#### installing "openapi-typescript-codegen"

`openapi-typescript-codegen` is added as a submodule.
Run `git submodule update --init` to clone all submodules.

Setup `openapi-typescript-codegen` by running: 
```bash
cd openapi-typescript-codegen
npm run build
```
and run `npm i` to set-up the project

#### Generation from Spec

Whenever there are new changes to APIs, the openapi
spec available at `openapi.yaml` should be replaced
and the `generate_spec` npm script should be run:

```bash
npm run generate_spec
```

#### Adding examples

Necessary examples can be added as new scripts to `examples` directory.
