# Safe Utilities Package

## Installation

```bash
npm install @mhmadamrii/utilities

```

## Usage

```typescript
import {encodeObjectToBase64, decodeObjectFromBase64} from "@mhmadamrii/utils";

const encoded = encodeObjectToBase64({foo: "bar"});
const decoded = decodeObjectFromBase64(encoded);
```

```typescript
import {removePlusSign, maskPhoneNumber} from "@your-username/utils";

console.log(removePlusSign("+12345")); // "12345"
console.log(maskPhoneNumber("1234567890")); // "12******90"
```
