# 走進我的交易室・教學導讀網站

《走進我的交易室》(亞歷山大・埃爾德 Alexander Elder 著,機械工業出版社)的教學導讀網站,以 Astro + Starlight 建置。
內容為重點整理、白話解說與思考題,**並非原書全文**;原文引用僅限每課至多兩句短金句。

## 開發

```bash
npm ci
npm run dev      # http://localhost:4321/come-into-my-trading-room/
npm run build    # 產出 dist/
npm run preview
```

## 結構

- 內容:`src/content/docs/unit*.md`(共 14 篇)+ `index.mdx`(首頁)
- 側欄:`astro.config.mjs` 的 `sidebar`(新增章節要同步)
- 主題:yellow,樣式在 `src/styles/theme.css`
- Callout:`:::tip[標題]`、`:::note[標題]`、`:::caution[標題]`
- 排版慣例:中文與英數之間加半形空格

線上網址:https://yaericure.github.io/come-into-my-trading-room/(push main 自動部署)
