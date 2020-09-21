const pkg = require('./package.json')

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    ['import', {
      libraryName: pkg.name,
      libraryDirectory: 'packages',
      // style: (name) => {
      //   const cname = name.split('/').pop()
      //   return `${name}/${cname}.scss`;
      // },
    }, pkg.name]
  ]
}