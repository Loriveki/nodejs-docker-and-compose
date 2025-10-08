import { randomUUID as nodeRandomUUID } from 'crypto';

if (!('crypto' in globalThis)) {
  (globalThis as any).crypto = {};
}

if (!('randomUUID' in globalThis.crypto)) {
  (globalThis.crypto as any).randomUUID = nodeRandomUUID;
}
