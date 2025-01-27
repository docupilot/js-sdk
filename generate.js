#!/usr/bin/env node

'use strict';

const { program } = require('commander');
const pkg = require('./package.json');
const fs = require('fs');
const yaml = require('yaml');
const OpenAPI = require('@docupilot/openapi-typescript-codegen');

const params = program
  .name('openapi')
  .usage('[options]')
  .version(pkg.version)
  .requiredOption(
    '-i, --input <value>',
    'OpenAPI specification, can be a path, url or string content (required)',
  )
  .requiredOption('-o, --output <value>', 'Output directory (required)')
  .option(
    '-c, --client <value>',
    'HTTP client to generate [fetch, xhr, node, axios, angular]',
    'fetch',
  )
  .option('--name <value>', 'Custom client class name')
  .option('--useOptions', 'Use options instead of arguments')
  .option('--useUnionTypes', 'Use union types instead of enums')
  .option('--exportCore <value>', 'Write core files to disk', true)
  .option('--exportServices <value>', 'Write services to disk', true)
  .option('--exportModels <value>', 'Write models to disk', true)
  .option('--exportSchemas <value>', 'Write schemas to disk', false)
  .option('--indent <value>', 'Indentation options [4, 2, tabs]', '4')
  .option('--postfix <value>', 'Service name postfix', 'Service')
  .option('--request <value>', 'Path to custom request file')
  .parse(process.argv)
  .opts();

const spec = yaml.parse(fs.readFileSync(params.input).toString());
for (let pathSpec of Object.values(spec.paths)) {
  for (let methodSpec of Object.values(pathSpec)) {
    methodSpec.parameters = methodSpec.parameters?.filter((parameter) => {
      return parameter.name !== 'X-Workspace' || parameter.in !== 'header';
    });
  }
}

if (OpenAPI) {
  OpenAPI.generate({
    input: spec,
    output: params.output,
    httpClient: params.client,
    clientName: params.name,
    useOptions: params.useOptions,
    useUnionTypes: params.useUnionTypes,
    exportCore: JSON.parse(params.exportCore) === true,
    exportServices: JSON.parse(params.exportServices) === true,
    exportModels: JSON.parse(params.exportModels) === true,
    exportSchemas: JSON.parse(params.exportSchemas) === true,
    indent: params.indent,
    postfix: params.postfix,
    request: params.request,
  })
    .then(() => {
      process.exit(0);
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}
