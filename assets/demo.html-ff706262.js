import{_ as e,Y as t,Z as p,$ as o,a1 as n,a2 as a,a0 as c,a4 as l,E as i}from"./framework-0b2fc941.js";const u={},r=n("p",null,"使用 VuePress 编写博客的一些配置和示例。",-1),d=l(`<h1 id="博客编写示例" tabindex="-1"><a class="header-anchor" href="#博客编写示例" aria-hidden="true">#</a> 博客编写示例</h1><h2 id="文章结构" tabindex="-1"><a class="header-anchor" href="#文章结构" aria-hidden="true">#</a> 文章结构</h2><p>每个 MarkDown 文件都由这几部分构成：</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">yaml</span><span class="token punctuation">:</span> info</span>
<span class="token punctuation">---</span></span>

<span class="token code-snippet code keyword">\`more\`</span> 注释之前的内容被视为文章摘要。

<span class="token comment">&lt;!-- more --&gt;</span>

文章内容……
</code></pre></div><h2 id="frontmatter-配置" tabindex="-1"><a class="header-anchor" href="#frontmatter-配置" aria-hidden="true">#</a> Frontmatter 配置</h2><p>MarkDown 可以使用三个短横线（<code>---</code>）行组成的部分，在文章的头部定义配置信息，将 YAML 写在这两行中间。</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">yaml</span><span class="token punctuation">:</span> info</span>
<span class="token punctuation">---</span></span>

<span class="token comment">&lt;!-- 这是内容 --&gt;</span>
</code></pre></div><p>VuePress 通过 Frontmatter 为每个 Markdown 页面引入配置，常见的配置如下。</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment"># 文章的标题</span>
<span class="token key atrule">title</span><span class="token punctuation">:</span> 页面配置
<span class="token comment"># 页面的图标</span>
<span class="token key atrule">icon</span><span class="token punctuation">:</span> page
<span class="token comment"># 侧边栏的顺序</span>
<span class="token key atrule">order</span><span class="token punctuation">:</span> <span class="token number">1</span>

<span class="token comment"># 作者</span>
<span class="token key atrule">author</span><span class="token punctuation">:</span> Ms.Hope
<span class="token comment"># 写作时间</span>
<span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token datetime number">2020-01-01</span>
<span class="token comment"># 一个页面可以有多个分类</span>
<span class="token key atrule">category</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> 使用指南
<span class="token comment"># 一个页面可以有多个标签</span>
<span class="token key atrule">tag</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> 页面配置
  <span class="token punctuation">-</span> 使用指南

<span class="token comment"># 置顶</span>
<span class="token key atrule">sticky</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token comment"># 收藏</span>
<span class="token key atrule">star</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
<span class="token comment"># 自定义页脚</span>
<span class="token key atrule">footer</span><span class="token punctuation">:</span> 这是测试显示的页脚
<span class="token comment"># 自定义版权信息</span>
<span class="token key atrule">copyright</span><span class="token punctuation">:</span> 无版权
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>本页面的配置是：</p><div class="language-yaml" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">title</span><span class="token punctuation">:</span> 博客编写示例
<span class="token key atrule">date</span><span class="token punctuation">:</span> <span class="token datetime number">2020-12-04</span>
<span class="token key atrule">category</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> 元定义
<span class="token key atrule">tag</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> 元定义
  <span class="token punctuation">-</span> 博客配置
</code></pre></div><h2 id="引用资源" tabindex="-1"><a class="header-anchor" href="#引用资源" aria-hidden="true">#</a> 引用资源</h2><p>你可以将图片和 Markdown 文件放置在一起，但是要使用 <strong>相对链接</strong>（<code>./path/to/file</code>）进行引用。</p><p>但是对于 <code>.vuepress/public</code> 文件夹的资源，使用绝对链接（<code>/path/to/file</code>）进行引用。</p><h2 id="vue-组件" tabindex="-1"><a class="header-anchor" href="#vue-组件" aria-hidden="true">#</a> Vue 组件</h2><p>VuePress 支持自定义 Vue 组件并在 MarkDown 中使用，主题包含了一个自定义徽章可以使用：</p><div class="language-markdown" data-ext="md"><pre class="language-markdown"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Badge</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>徽章文字<span class="token punctuation">&quot;</span></span> <span class="token attr-name">color</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#242378<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre></div>`,17),k=n("em",null,"徽章文字",-1);function m(v,b){const s=i("Badge");return t(),p("div",null,[r,o(" more "),d,n("blockquote",null,[n("p",null,[a("文字结尾应该有深蓝色的 "),k,a(" 徽章 "),c(s,{text:"徽章文字"}),a("。")])])])}const g=e(u,[["render",m],["__file","demo.html.vue"]]);export{g as default};
