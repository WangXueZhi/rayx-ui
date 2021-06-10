module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能特性
        'fix', // bug修复
        'docs', // 文档变更
        'style', // 样式
        'refactor', // 重构 - 不修复bug也不修复性能
        'perf', // 重构 - 改进性能
        'test', // 测试
        'chore', // 对构建过程或辅助工具和库的更改
        'revert' // 还原到提交
      ]
    ],
    'type-empty': [2, 'never'], // <type> 不能为空
    'type-case': [0], // <type> 格式 小写
    'scope-empty': [0], // <scope> 不能为空
    'scope-case': [0], // <scope> 格式 小写
    'subject-empty': [2, 'never'], // <subject> 不能为空
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [2, 'always', 72]
  }
}
