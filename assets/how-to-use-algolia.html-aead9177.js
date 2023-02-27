import{_ as u,W as k,X as d,Y as v,$ as n,a0 as s,Z as a,a1 as e,a2 as o,C as p}from"./framework-162c95c0.js";const m="/assets/2023-02-23-21-33-10-a3b48fc2.png",y="/assets/2023-02-23-21-30-55-d492261e.png",b="/assets/2023-02-23-21-45-25-937cbf42.png",h={},g=n("p",null,"介绍如何使用 Algolia 来优化博客的搜索引擎。",-1),_=n("h2",{id:"_1-申请加入-docsearch-项目",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-申请加入-docsearch-项目","aria-hidden":"true"},"#"),s(" 1. 申请加入 DocSearch 项目")],-1),f={href:"https://docsearch.algolia.com/apply/",target:"_blank",rel:"noopener noreferrer"},x=n("code",null,"apiKey",-1),T=n("code",null,"indexName",-1),S={href:"https://crawler.algolia.com/admin",target:"_blank",rel:"noopener noreferrer"},B=n("figure",null,[n("img",{src:m,alt:"",tabindex:"0",loading:"lazy"}),n("figcaption")],-1),j=n("p",null,"在 Editor 可以编辑爬虫设置，我们主要用这个功能来自定义我们的爬虫设置。",-1),A=n("p",null,"我们主要设置 Actions。",-1),V=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"indexName"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"你的 Index"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"pathsToMatch"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"https://<你的网站>/**"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function-variable function"},"recordExtractor"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" helpers "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" helpers"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"docsearch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"recordProps"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"lvl0"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"selectors"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'".sidebar-heading.active"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"defaultValue"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Documentation"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"lvl1"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'".theme-default-content h1"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"lvl2"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'".theme-default-content h2"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"lvl3"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'".theme-default-content h3"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"lvl4"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'".theme-default-content h4"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"lvl5"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'".theme-default-content h5"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"lvl6"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'".theme-default-content h6"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'".theme-default-content p, .theme-default-content li"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"indexHeadings"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`

`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token literal-property property"},"indexName"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"你的 Index"'),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token literal-property property"},"pathsToMatch"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"["),n("span",{class:"token string"},'"https://<你的网站>/**"'),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},","),s(`
  `),n("span",{class:"token function-variable function"},"recordExtractor"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[n("span",{class:"token punctuation"},"{"),s(" helpers "),n("span",{class:"token punctuation"},"}")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"return"),s(" helpers"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"docsearch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"recordProps"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token literal-property property"},"lvl0"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s(`
          `),n("span",{class:"token literal-property property"},"selectors"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'".sidebar-heading.active"'),n("span",{class:"token punctuation"},","),s(`
          `),n("span",{class:"token literal-property property"},"defaultValue"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Documentation"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"lvl1"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'".theme-hope-content h1"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"lvl2"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'".theme-hope-content h2"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"lvl3"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'".theme-hope-content h3"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"lvl4"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'".theme-hope-content h4"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"lvl5"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'".theme-hope-content h5"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"lvl6"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'".theme-hope-content h6"'),n("span",{class:"token punctuation"},","),s(`
        `),n("span",{class:"token literal-property property"},"content"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'".theme-hope-content p, .theme-hope-content li"'),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"indexHeadings"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token boolean"},"true"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),N=n("code",null,"pathsToMatch",-1),D={href:"https://github.com/micromatch/micromatch",target:"_blank",rel:"noopener noreferrer"},I=o(`<h2 id="_2-安装到-vuepress-项目" tabindex="-1"><a class="header-anchor" href="#_2-安装到-vuepress-项目" aria-hidden="true">#</a> 2. 安装到 VuePress 项目</h2><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> @algolia/client-search
<span class="token function">pnpm</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> @vuepress/plugin-docsearch@next
</code></pre></div>`,2),R={href:"https://v2.vuepress.vuejs.org/zh/reference/plugin/docsearch.html",target:"_blank",rel:"noopener noreferrer"},E=o(`<p>配置示例：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">docsearchPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      <span class="token literal-property property">appId</span><span class="token operator">:</span> <span class="token string">&#39;DF0MW*******&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">apiKey</span><span class="token operator">:</span> <span class="token string">&#39;******************&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">indexName</span><span class="token operator">:</span> <span class="token string">&#39;alexsun_blog&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">placeholder</span><span class="token operator">:</span> <span class="token string">&#39;搜索文档&#39;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">translations</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">button</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">buttonText</span><span class="token operator">:</span> <span class="token string">&#39;搜索文档&#39;</span><span class="token punctuation">,</span>
          <span class="token literal-property property">buttonAriaLabel</span><span class="token operator">:</span> <span class="token string">&#39;搜索文档&#39;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">modal</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">searchBox</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">resetButtonTitle</span><span class="token operator">:</span> <span class="token string">&#39;清除查询条件&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">resetButtonAriaLabel</span><span class="token operator">:</span> <span class="token string">&#39;清除查询条件&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">cancelButtonText</span><span class="token operator">:</span> <span class="token string">&#39;取消&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">cancelButtonAriaLabel</span><span class="token operator">:</span> <span class="token string">&#39;取消&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">startScreen</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">recentSearchesTitle</span><span class="token operator">:</span> <span class="token string">&#39;搜索历史&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">noRecentSearchesText</span><span class="token operator">:</span> <span class="token string">&#39;没有搜索历史&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">saveRecentSearchButtonTitle</span><span class="token operator">:</span> <span class="token string">&#39;保存至搜索历史&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">removeRecentSearchButtonTitle</span><span class="token operator">:</span> <span class="token string">&#39;从搜索历史中移除&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">favoriteSearchesTitle</span><span class="token operator">:</span> <span class="token string">&#39;收藏&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">removeFavoriteSearchButtonTitle</span><span class="token operator">:</span> <span class="token string">&#39;从收藏中移除&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">errorScreen</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">titleText</span><span class="token operator">:</span> <span class="token string">&#39;无法获取结果&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">helpText</span><span class="token operator">:</span> <span class="token string">&#39;你可能需要检查你的网络连接&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">footer</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">selectText</span><span class="token operator">:</span> <span class="token string">&#39;选择&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">navigateText</span><span class="token operator">:</span> <span class="token string">&#39;切换&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">closeText</span><span class="token operator">:</span> <span class="token string">&#39;关闭&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">searchByText</span><span class="token operator">:</span> <span class="token string">&#39;搜索提供者&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token literal-property property">noResultsScreen</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">noResultsText</span><span class="token operator">:</span> <span class="token string">&#39;无法找到相关结果&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">suggestedQueryText</span><span class="token operator">:</span> <span class="token string">&#39;你可以尝试查询&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">reportMissingResultsText</span><span class="token operator">:</span> <span class="token string">&#39;你认为该查询应该有结果？&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">reportMissingResultsLinkText</span><span class="token operator">:</span> <span class="token string">&#39;点击反馈&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-配置多个站点" tabindex="-1"><a class="header-anchor" href="#_3-配置多个站点" aria-hidden="true">#</a> 3. 配置多个站点</h2><p>如图，点击 <strong>View in Algolia</strong>，然后登录。</p><figure><img src="`+y+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>选择正确的应用，然后点击 <strong>Search</strong>，即可看到下图的内容，选择上方的 <strong>Index</strong>，然后创建新的 Index，请保持每个应用的前缀一致以方便区分。</p><figure><img src="'+b+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>然后在不同的 Action 中指定你创建的 Index 名称即可。</p>',8);function L(M,P){const t=p("ExternalLinkIcon"),l=p("Tabs");return k(),d("div",null,[g,v(" more "),_,n("p",null,[s("可以在 "),n("a",f,[s("加入 DocSearch"),a(t)]),s(" 页面提交，DocSearch 团队会将 "),x,s(" 和 "),T,s(" 发送到你的邮箱。")]),n("p",null,[s("收到邮件后 "),n("a",S,[s("配置爬虫"),a(t)]),s("，选择你的应用，你将下面的配置界面。")]),B,j,A,a(l,{id:"22",data:[{title:"默认主题"},{title:"Hope 主题"}]},{tab0:e(({title:r,value:c,isActive:i})=>[V]),tab1:e(({title:r,value:c,isActive:i})=>[w]),_:1}),n("p",null,[s("其中 "),N,s(" 使用 "),n("a",D,[s("micromatch"),a(t)]),s(" 语法来匹配你的网站。")]),I,n("p",null,[s("如果你使用的是 VuePress 的默认主题，可参考 "),n("a",R,[s("官方文档"),a(t)]),s(" 来配置。")]),E])}const C=u(h,[["render",L],["__file","how-to-use-algolia.html.vue"]]);export{C as default};