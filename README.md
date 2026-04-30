# Docupilot API - JS SDK

This SDK will help simplify interaction with Docupilot
APIs from `nodejs` or `javascript` environments

#### Installation

`npm i docupilot-sdk`

#### Usage

Legacy client (default, backward-compatible)

```ts
import { APIClient } from 'docupilot-sdk';

const client = new APIClient();
client.authenticate('<your api key>', '<your api secret>');
```

v2 client (new, separate export)

```ts
import { v2 } from 'docupilot-sdk';

const client = new v2.APIClient();
client.authenticate('<your api key>', '<your api secret>');
```

#### Trying out examples

Legacy token example:

```bash
npm run example:token
```

v2 + React Query example:

```bash
npm run example:react-query
```
