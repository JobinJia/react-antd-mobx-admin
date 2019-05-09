const {override, fixBabelImports, addLessLoader, addWebpackAlias, addDecoratorsLegacy, useEslintRc} = require('customize-cra')
const path = require('path')

// import them from 'xxx' // 自定义主题
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'true',
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {'@primary-color': '#1DA57A'},
    // modifyVars: theme
  }),
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
    '@views': path.resolve(__dirname, 'src/views'),
    '@com': path.resolve(__dirname, 'src/components'),
    '@utils': path.resolve(__dirname, 'src/utils'),
    '@assets': path.resolve(__dirname, 'src/assets')
  }),
  addDecoratorsLegacy(), // 启用注解-方便mobx行事
  useEslintRc() // 启用.eslintrc配置
)
