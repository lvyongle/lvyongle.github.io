
## 1. 笔记文档构建
1. 项目构建
```
npm install -g vitepress
mkdir my-site && cd my-site
echo "# 我的文档" > index.md
npx vitepress init   # 一路回车
```

2. 配置SEO
修改配置文件`.vitepress/config.ts`
```javascript
export default {
  title: 'Markdown 完全手册',
  description: '零基础到进阶的 Markdown 中文教程，持续更新',
  head: [
    ['meta', { name: 'keywords', content: 'Markdown,教程,VitePress,SEO' }],
    ['link', { rel: 'canonical', href: 'https://yourdomain.com' }]
  ]
}
```

3. 部署推送
```
npm run docs:build        # 生成 dist
git add dist && git commit -m "deploy"
git subtree push --prefix .vitepress/dist origin gh-pages
# 百度推送
curl -H 'Content-Type:text/plain' \
  --data-binary "https://yourdomain.com" \
  "http://data.zz.baidu.com/urls?site=yourdomain&token=YOUR_TOKEN"
```
