#!/usr/bin/env node

'use strict';

const fs = require('fs');
const yaml = require('yaml');

function parseArgs(argv) {
  const args = { input: '', output: '' };
  for (let i = 2; i < argv.length; i++) {
    const arg = argv[i];
    if ((arg === '--input' || arg === '-i') && argv[i + 1]) {
      args.input = argv[++i];
      continue;
    }
    if ((arg === '--output' || arg === '-o') && argv[i + 1]) {
      args.output = argv[++i];
      continue;
    }
  }
  return args;
}

const params = parseArgs(process.argv);
if (!params.input || !params.output) {
  console.error(
    'Usage: node generate-v2.js --input <openapi-file> --output <output-dir>',
  );
  process.exit(1);
}

const spec = yaml.parse(fs.readFileSync(params.input).toString());
for (let pathSpec of Object.values(spec.paths)) {
  for (let methodSpec of Object.values(pathSpec)) {
    methodSpec.parameters = methodSpec.parameters?.filter((parameter) => {
      return parameter.name !== 'X-Workspace' || parameter.in !== 'header';
    });
  }
}

async function main() {
  const { createClient } = await import('@hey-api/openapi-ts');
  await createClient({
    input: spec,
    output: params.output,
    plugins: [
      {
        name: '@hey-api/typescript',
      },
      {
        name: '@hey-api/client-fetch',
        throwOnError: true,
      },
      {
        name: '@hey-api/sdk',
        operations: {
          strategy: 'byTags',
        },
        responseStyle: 'data',
      },
      {
        name: '@tanstack/react-query',
        useMutation: true,
        useQuery: true,
      },
    ],
  });
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
