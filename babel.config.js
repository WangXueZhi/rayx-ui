module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk'
      }
    ],
    ['import', {
      libraryName: 'mvui',
      style: true,
      libraryDirectory: '/'
    }, 'mvui']
  ]
}
