# Docupilot API - JS SDK

This SDK will help simplify interaction with Docupilot
 APIs from `nodejs` or `javascript` environments

#### Installation

`npm i docupilot-sdk`

#### Usage

Creating a docupilot client

```ts
import Docupilot from 'docupilot-sdk';

const client = Docupilot.authorize('<your api token>');
```

#### Trying out examples

To troy out the _basic_ example

```bash
DOCUPILOT_TOKEN=<your-api-token> ts-node examples/basic
```