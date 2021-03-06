import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
import builtinModules from 'builtin-modules'

export default {
  input: 'private/lodash.js',
  output: {
    file: 'dest/lodash.js',
    format: 'cjs'
  },
  plugins: [
    resolve({ preferBuiltins: true }),
    commonjs(),
    babel({
      exclude: 'node_modules/**'
    })
  ],
  external: builtinModules
}
