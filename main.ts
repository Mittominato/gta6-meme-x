// gta6-meme-x-01 — "Post a GTA 6 meme on X" (make.fun, $500).
//
// The entry itself is the post on X: a GTA 6 meme (meme.png in this repo)
// posted from a public account, carrying make.fun and the entrant's play
// code. The house reads the post straight from X, so this program does not
// decide anything about the meme — it only hands the house the post's
// address, exactly as POST.json in this repository states it.
//
// What it does, step by step:
//   1. Read POST.json next to this file and parse it as JSON.
//   2. Check it is an object with a non-empty string `url`.
//   3. Make sure the output directory exists.
//   4. Copy POST.json byte for byte to <output>/POST.json, where the gate
//      reads it.
//
// It runs on Node 22 with the standard library only, touches no network,
// and writes nothing else. Run it outside the grader like this:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const SOURCE = join(BOT_DIR, 'POST.json');
const TARGET = join(OUTPUT_DIR, 'POST.json');

function fail(message: string): never {
  console.error(`gta6-meme-x-01: ${message}`);
  process.exit(1);
}

if (!existsSync(SOURCE)) {
  fail(`POST.json not found in ${BOT_DIR}`);
}

let post: unknown;
try {
  post = JSON.parse(readFileSync(SOURCE, 'utf8'));
} catch (err) {
  fail(`POST.json is not valid JSON: ${(err as Error).message}`);
}

if (typeof post !== 'object' || post === null || Array.isArray(post)) {
  fail('POST.json must be a JSON object like {"url": "https://x.com/..."}');
}

const url = (post as { url?: unknown }).url;
if (typeof url !== 'string' || url.trim().length === 0) {
  fail('POST.json must carry a non-empty string "url"');
}

// The gate only accepts an X post address, so refuse anything else early
// instead of copying a useless file: https://x.com/<handle>/status/<id>
// (twitter.com, www./mobile. and /i/web/status/<id> spellings are read too).
const X_POST = /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/([A-Za-z0-9_]{1,15}\/status\/\d+|i\/web\/status\/\d+)$/;
if (!X_POST.test(url.trim().replace(/[#?].*$/, ''))) {
  fail(`POST.json "url" is not an X post address: ${url}`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
copyFileSync(SOURCE, TARGET);
console.log(`gta6-meme-x-01: copied POST.json -> ${TARGET}`);
console.log(`gta6-meme-x-01: post ${url}`);
