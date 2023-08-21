---
cover: https://s2.loli.net/2023/08/20/xi9FUXGd8SkLlDM.jpg
title: Valaxy 文章加密原理
date: 2023-08-06 12:00:00
categories: Valaxy Notes
tags:
    - valaxy
    - 笔记
password: valaxy
---

这里是被加密的复杂文章内容

## 实现文章加密

使用 [Web Crypto API | MDN](https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API)

```ts
// node
import { webcrypto } from 'node:crypto'

// browser
window.crypto
```

## 解密时文章渲染

存在如下内容，解密时还原，需动态渲染。

```md
{{ frontmatter }}
```

::: details 动态渲染的 frontmatter
{{ frontmatter }}
:::

```vue
<script lang="ts" setup>
const ValaxyDeprecatedContent = defineComponent({
  name: 'ValaxyDeprecatedContent',
  props: {
    html: String,
  },
  render() {
    const content = `<div>${this.html}</div>`
    return h({
      setup: () => {
        const fm = useFrontmatter()
        return {
          frontmatter: fm,
        }
      },
      template: content,
    })
  },
})
</script>

<ValaxyDeprecatedContent :html="decryptedContent" />
```

## FAQ

```bash
Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".
```

添加 alias：

```ts
// for runtime compile vue, encrypt and decrypt
// type cast
if (options.config.siteConfig.encrypt.enable) {
  alias.push(
    // import { sync as resolveSync } from 'resolve'
    { find: /^vue$/, replacement: resolveImportPath('vue/dist/vue.esm-bundler.js', true) },
  )
}
```
