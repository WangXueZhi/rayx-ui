const pkg = require('./package.json')

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    ['import', {
      libraryName: pkg.name,
      style: true,
      libraryDirectory: '/'
    }, pkg.name]
  ]
}
