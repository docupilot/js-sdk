#!/usr/bin/env node

'use strict';

import pkg from './package.json' assert { type: "json" };

import { program } from 'commander';

import fs from 'fs';

import yaml from 'yaml';

import * as OpenAPI from '@hey-api/openapi-ts';

import * as path from 'path';


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
  OpenAPI.createClient({
    input: spec,
    output: params.output,
    client: params.client,
    // httpClient: params.client,
    name: params.name,
    useOptions: params.useOptions,
    // useUnionTypes: params.useUnionTypes,
    exportCore: JSON.parse(params.exportCore) === true,
    exportServices: JSON.parse(params.exportServices) === true,
    exportModels: JSON.parse(params.exportModels) === true,
    exportSchemas: JSON.parse(params.exportSchemas) === true,
    format: params.indent,
    postfixServices: params.postfix,
    request: params.request,
    plugins: [
      {
        asClass: true,
        name: '@hey-api/sdk',
      },
    ],
  })
    .then(async() => {
      // Path to the TypeScript file
      const tsFilePath = path.resolve('.', 'src/api/types.gen.ts');
      await readAndReplaceAll(tsFilePath);
      process.exit(0);
    })
    .catch((error) => {
      console.error(error);
      process.exit(1);
    });
}





async function readAndReplaceAll(filePath) {
  try {
    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      throw new Error(`File not found: ${filePath}`);
    }

    // Read the TypeScript file
    let content = await fs.promises.readFile(filePath, 'utf-8');

    // Add import at the top if not already present
    const importStatement = `import { OmitReadonly } from '../utils/OmitReadonly';`;
    if (!content.includes(importStatement)) {
      content = `${importStatement}\n${content}`;
    }

    // Replace all occurrences of `requestBody: abc`, `requestBody?: abc`,
    // `requestBody: Array<abc>`, or `requestBody?: Array<abc>`
    const updatedContent = content.replace(
      /requestBody(\??):\s*([A-Za-z0-9_<>]+)/g,
      (match, optional, type) => `requestBody${optional}: OmitReadonly<${type}>`
    );

    // Write the updated content back to the file
    await fs.promises.writeFile(filePath, updatedContent, 'utf-8');
    console.log('Import added (if not already present) and all occurrences replaced successfully.');
  } catch (error) {
    console.error('Error:', error.message);
  }
}





