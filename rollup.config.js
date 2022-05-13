/* eslint-disable import/no-anonymous-default-export */
import resolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'build/sw.js',
  output: {
    file: 'build/sw.js',
    format: 'iife'
  },
  plugins: [
    resolve(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development') // Change to 'production' when building for production
    }),
    terser()
  ]
}