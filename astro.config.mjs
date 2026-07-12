// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://yaericure.github.io',
  base: '/come-into-my-trading-room',
  integrations: [
    starlight({
      title: '走進我的交易室',
      description: '交易成功的 3M:心智、方法、資金——完整走一遍職業交易者的養成之路。',
      defaultLocale: 'root',
      locales: { root: { label: '正體中文', lang: 'zh-TW' } },
      customCss: ['./src/styles/theme.css'],
      lastUpdated: false,
      pagination: true,
      sidebar: [
        { label: '第1課:作者的交易之路'.replace(':',':'), slug: 'unit00' },
        {
          label: '金融叢林新手交易指南',
          items: [
            { label: '第2課 投資、交易,或賭博', slug: 'unit01' },
            { label: '第3課 你要在哪個市場交易', slug: 'unit02' },
            { label: '第4課 交易前的第一步', slug: 'unit03' },
          ],
        },
        {
          label: '交易成功的三要素(3M)',
          items: [
            { label: '第5課 自律的交易者', slug: 'unit04' },
            { label: '第6課 技術分析(上):基本圖形判讀', slug: 'unit05' },
            { label: '第7課 技術分析(下):精選技術指標', slug: 'unit06' },
            { label: '第8課 交易系統(上):系統測試與三重濾網', slug: 'unit07' },
            { label: '第9課 交易系統(中):脈衝交易與市場晴雨表', slug: 'unit08' },
            { label: '第10課 交易系統(下):選擇你的交易品種', slug: 'unit09' },
            { label: '第11課 資金管理公式', slug: 'unit10' },
          ],
        },
        {
          label: '走進我的交易室',
          items: [
            { label: '第12課 有條理的交易者', slug: 'unit11' },
            { label: '第13課 以交易為生', slug: 'unit12' },
            { label: '第14課 走進我的交易室', slug: 'unit13' },
          ],
        },
      ],
    }),
    react(),
  ],
  vite: { plugins: [tailwindcss()] },
});
