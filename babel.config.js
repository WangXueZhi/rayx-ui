const pkg = require('./package.json')

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    ["import", {
      libraryName: "view-design",
      libraryDirectory: "src/components"
    }],
    ['import', {
      libraryName: 'rayx-ui',
      libraryDirectory: 'lib',
      style: (name) => {
        return `${name}/${name.split('/').pop()}.css`;
      },
    }, 'rayx-ui']
  ]
}