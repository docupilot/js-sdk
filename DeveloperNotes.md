# Developer Notes

Major part of this sdk is generated from
 OpenAPI Spec obtained from the api docs.

#### Generation from Spec

Whenever there are new changes to APIs, the openapi
spec available at `openapi.yaml` should be replaced
and the `generate_spec` npm script should be run:
  
```bash
npm run generate_spec
```

#### Adding examples

Necessary examples can be added as new scripts to `examples` directory.
