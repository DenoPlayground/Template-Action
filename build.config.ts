import * as esbuild from '@esbuild';
import { green } from 'https://deno.land/std@0.211.0/fmt/colors.ts';
import { parseArgs } from 'https://deno.land/std@0.211.0/cli/parse_args.ts';

const args = parseArgs<{
  watch: boolean | undefined,
  develop: boolean | undefined,
  logLevel: esbuild.LogLevel
}>(Deno.args);

console.log('Build process started.');

const tsConfig : esbuild.BuildOptions = {
  allowOverwrite: true,
  logLevel: args.logLevel ?? 'info',
  legalComments: args.develop ? 'inline' : 'none',
  color: true,
  minify: (!args.develop) ?? true,
  outfile: './dist/bundle.min.js',
  entryPoints: [
    './src/index.ts'
  ],
  bundle: true,
  platform: 'browser',
  target: 'esnext',
  format: 'esm',
  sourcemap: 'external',
  keepNames: true // IMPORTANT! https://github.com/node-fetch/node-fetch/issues/784#issuecomment-618527886
}

const timestampNow = Date.now();

if (args.watch) {
  esbuild.context(tsConfig).then((context) => context.watch());
} else {
  esbuild.build(tsConfig).then(() => {
    console.log(green(`Build process finished in ${(Date.now() - timestampNow).toString()}ms.`));
    esbuild.stop();
  })
}
