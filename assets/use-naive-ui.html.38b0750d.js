import{_ as r,V as u,W as d,$ as v,X as s,Z as a,a1 as e,Y as n,a0 as p,z as t}from"./framework.1791f15b.js";const k={},m=s("p",null,"从零开始使用 Naive UI 的步骤。",-1),g=s("h1",{id:"开始使用-naive-ui",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#开始使用-naive-ui","aria-hidden":"true"},"#"),n(" 开始使用 Naive UI")],-1),b={class:"table-of-contents"},_=s("h2",{id:"_1-naive-ui",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-naive-ui","aria-hidden":"true"},"#"),n(" 1. Naive UI")],-1),h={href:"https://www.naiveui.com/zh-CN/",target:"_blank",rel:"noopener noreferrer"},f=s("h2",{id:"_2-项目准备",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_2-项目准备","aria-hidden":"true"},"#"),n(" 2. 项目准备")],-1),x=p(`<p>现在可以开始安装 Naive UI 了，输入下面的命令开始安装：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> naive-ui
</code></pre></div>`,2),y=s("code",null,"vfonts",-1),w=p(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> vfonts
</code></pre></div>`,1),N=s("code",null,"@vicons/ionicons5",-1),I=p(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> @vicons/ionicons5
</code></pre></div>`,1),V={href:"https://xicons.org/",target:"_blank",rel:"noopener noreferrer"},U=p(`<h2 id="_3-配置自动导入" tabindex="-1"><a class="header-anchor" href="#_3-配置自动导入" aria-hidden="true">#</a> 3. 配置自动导入</h2><p>安装 Vite 自动导入插件：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> unplugin-auto-import
<span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> unplugin-vue-components
</code></pre></div><p>下面在 <code>vite.config.ts</code> 中配置下面的项目：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="token keyword">import</span> AutoImport <span class="token keyword">from</span> <span class="token string">&#39;unplugin-auto-import/vite&#39;</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/vite&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> NaiveUiResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/resolvers&#39;</span>

<span class="token comment">// https://vitejs.dev/config/</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">AutoImport</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      imports<span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&#39;vue&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token string-property property">&#39;naive-ui&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&#39;useDialog&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;useMessage&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;useNotification&#39;</span><span class="token punctuation">,</span>
            <span class="token string">&#39;useLoadingBar&#39;</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      resolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">NaiveUiResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  server<span class="token operator">:</span> <span class="token punctuation">{</span>
    host<span class="token operator">:</span> <span class="token string">&#39;0.0.0.0&#39;</span><span class="token punctuation">,</span>
    port<span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
    proxy<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;/api&#39;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        target<span class="token operator">:</span> <span class="token string">&#39;http://localhost:8081&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">rewrite</span><span class="token operator">:</span> path <span class="token operator">=&gt;</span> path<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^\\/api</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  resolve<span class="token operator">:</span> <span class="token punctuation">{</span>
    alias<span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> <span class="token string">&#39;/src&#39;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>.gitignore</code> 最后加入：</p><div class="language-gitignore" data-ext="gitignore"><pre class="language-gitignore"><code><span class="token comment"># auto import plugin</span>
<span class="token entry string">components.d.ts</span>
</code></pre></div>`,7);function C(B,D){const o=t("router-link"),c=t("ExternalLinkIcon"),l=t("RouterLink"),i=t("Badge");return u(),d("div",null,[m,v(" more "),g,s("nav",b,[s("ul",null,[s("li",null,[a(o,{to:"#_1-naive-ui"},{default:e(()=>[n("1. Naive UI")]),_:1})]),s("li",null,[a(o,{to:"#_2-项目准备"},{default:e(()=>[n("2. 项目准备")]),_:1})]),s("li",null,[a(o,{to:"#_3-配置自动导入"},{default:e(()=>[n("3. 配置自动导入")]),_:1})])])]),_,s("p",null,[s("a",h,[n("Naive UI"),a(c)]),n(" 是 Vue3 官方推荐的一款 UI 库，其功能覆盖全面、界面统一简洁，适合不同需求的开发者使用。")]),f,s("p",null,[n("文本使用的项目模板是 "),a(l,{to:"/frontend/vue/create-vite-app.html"},{default:e(()=>[n("创建 Vite 应用")]),_:1}),n(" 一文中的模板，使用 Vue3 + Vite3 + TypeScript。")]),x,s("p",null,[a(i,{type:"tip",vertical:"middle"},{default:e(()=>[n("可选")]),_:1}),n(" 如果需要配套的字体，安装 "),y,n("：")]),w,s("p",null,[a(i,{type:"tip",vertical:"middle"},{default:e(()=>[n("可选")]),_:1}),n(),a(i,{type:"warning",vertical:"middle"},{default:e(()=>[n("推荐")]),_:1}),n(" 如果需要配套的图标，安装 "),N,n("：")]),I,s("p",null,[n("要选用图标，可以查看 "),s("a",V,[n("xicons"),a(c)]),n(" 网站上的示例，可以搜索哦！")]),U])}const R=r(k,[["render",C],["__file","use-naive-ui.html.vue"]]);export{R as default};
