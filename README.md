---
title: 最简单，开发效率最高的一个后台管理系统
date: 2022-04-17
---

[TOC]

# 简介

基于 React + TypeScript + Antd 的简洁的管理后台，努力打造一个最好用，开发效率最高的一个管理后台


# .prettierrc

> 1 个tab 等于 2 个空格 
> 不加分号  
> js 用单引号 
> 对象最后一个值不加逗号  

```json
{
  "tabWidth": 2,
  "semi": false,
  "singleQuote": true,
  "trailingComma": "none"
}
```

# .editorconfig 配置

```bash
# http://editorconfig.org
root = true

[*]
charset = utf-8 # 字符集
indent_style = space # 空格
indent_size = 2 # 一个tab 2个空格
end_of_line = lf # 统一换行符 \n
trim_trailing_whitespace = true # 去除行尾空白
insert_final_newline = true # 文件最后加个空白行

[*.md]
trim_trailing_whitespace = false # 不去除空白
```
