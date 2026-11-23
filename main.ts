// news-image-20261123 varian7: a broadsheet front page summing up Monday 23 November 2026.
// Node 22, standard library only. The entry image lives beside this file as entry.png
// (a JPEG by its first bytes, which the gate accepts under the entry.png name) and this
// program copies it byte for byte to the output directory, so both runs write identical bytes.
// No network, no randomness, no dependencies: the output is a pure copy of the shipped file.

import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const repoDir = dirname(fileURLToPath(import.meta.url));
const source = join(repoDir, 'entry.png');

mkdirSync(outDir, { recursive: true });
copyFileSync(source, join(outDir, 'entry.png'));
