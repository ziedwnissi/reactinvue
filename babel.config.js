module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    "@babel/plugin-transform-react-jsx",
    [ 'import', {
      'libraryName': 'ant-design-vue',
      'libraryDirectory': 'es',
      'style': 'css'
    }
    ],
    'vuera/babel'
  ]
};
