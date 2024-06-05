import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,o as h,c as d,b as i,a as s,w as e,e as o,d as a}from"./app-mQJDQ8JG.js";const r={},p=i("h1",{id:"glob---unix-风格路径名模式扩展",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#glob---unix-风格路径名模式扩展"},[i("span",null,"glob - Unix 风格路径名模式扩展")])],-1),c={class:"table-of-contents"},k=o(`<h2 id="1-glob-模块简介" tabindex="-1"><a class="header-anchor" href="#1-glob-模块简介"><span>1. glob 模块简介</span></a></h2><table><thead><tr><th>项目</th><th>信息</th></tr></thead><tbody><tr><td>源代码</td><td><a href="https://github.com/python/cpython/tree/3.11/Lib/glob.py" target="_blank" rel="noopener noreferrer">Lib/glob.py</a></td></tr><tr><td>Python 版本</td><td>全版本</td></tr><tr><td>标签</td><td>文件和目录</td></tr></tbody></table><p><code>glob</code> 模块可根据 Unix 终端所用规则找出所有匹配特定模式的路径名，但会按不确定的顺序返回结果。</p><ul><li>波浪号 <code>~</code> 扩展不会生效</li><li>但 <code>*</code>、<code>?</code> 以及表示为 <code>[]</code> 的字符范围将被正确地匹配</li></ul><div class="hint-container info"><p class="hint-container-title">glob 实现</p><p>这是通过配合使用 <code>os.scandir()</code> 和 <code>fnmatch.fnmatch()</code> 函数来实现的，而不是通过实际发起调用子终端。请注意不同于 <code>fnmatch.fnmatch()</code>，<code>glob</code> 会将以点号 <code>&quot;.&quot;</code> 开头的文件名作为特殊情况来处理。对于波浪号和终端变量扩展，请使用 <code>os.path.expanduser()</code> 和 <code>os.path.expandvars()</code>。</p></div><h2 id="2-库函数" tabindex="-1"><a class="header-anchor" href="#2-库函数"><span>2. 库函数</span></a></h2><table><thead><tr><th>函数</th></tr></thead><tbody><tr><td><code>glob.glob(pathname, *, root_dir=None, dir_fd=None, recursive=False)</code></td></tr></tbody></table><p>返回匹配 <code>pathname</code> 的可能为空的路径名列表，请注意路径的任何开头部分都将被保留。</p><p>如果 <code>recursive</code> 为真值，则模式 <code>&quot;**&quot;</code> 将匹配目录中的任何文件以及零个或多个目录、子目录和符号链接。</p><p><em>@3.5+</em> 支持使用 <code>&quot;**&quot;</code> 的递归 <code>glob</code>。</p><p><em>@3.10+</em> 添加了 <code>root_dir</code> 和 <code>dir_fd</code> 形参。</p><p><em>@3.11+</em> 添加 <code>include_hidden</code> 形参。</p><table><thead><tr><th>函数</th></tr></thead><tbody><tr><td><code>glob.iglob(pathname, *, root_dir=None, dir_fd=None, recursive=False)</code></td></tr></tbody></table><p>返回一个 <code>iterator</code>，它会产生与 <code>glob()</code> 相同的结果，但不会实际地同时保存它们。</p><table><thead><tr><th>函数 <em>@3.4+</em></th></tr></thead><tbody><tr><td><code>glob.escape(pathname)</code></td></tr></tbody></table><p>转义所有特殊字符（<code>&#39;?&#39;</code>, <code>&#39;*&#39;</code> 和 <code>&#39;[&#39;</code>）。</p><p>这适用于当你想要匹配可能带有特殊字符的任意字符串字面值的情况。在 <code>drive/UNC</code> 共享点中的特殊字符不会被转义，例如在 Windows 上 <code>escape(&#39;//?/c:/Quo vadis?.txt&#39;)</code> 将返回 <code>&#39;//?/c:/Quo vadis[?].txt&#39;</code>。</p><h2 id="3-示例" tabindex="-1"><a class="header-anchor" href="#3-示例"><span>3. 示例</span></a></h2><h3 id="31-匹配文件名" tabindex="-1"><a class="header-anchor" href="#31-匹配文件名"><span>3.1 匹配文件名</span></a></h3><p>考虑一个包含以下内容的目录：</p><ul><li><code>1.gif</code></li><li><code>2.txt</code></li><li><code>card.gif</code></li><li><code>sub/</code><ul><li><code>3.txt</code></li></ul></li></ul><p><code>glob()</code> 将产生如下结果：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> glob</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">glob.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">glob</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;./[0-9].*&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># [&#39;./1.gif&#39;, &#39;./2.txt&#39;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">glob.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">glob</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;*.gif&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)      </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># [&#39;1.gif&#39;, &#39;card.gif&#39;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">glob.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">glob</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;?.gif&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)      </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># [&#39;1.gif&#39;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">glob.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">glob</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;**/*.txt&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">recursive</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)   </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># [&#39;2.txt&#39;, &#39;sub/3.txt&#39;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">glob.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">glob</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;./**/&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">recursive</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)      </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># [&#39;./&#39;, &#39;./sub/&#39;]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="32-匹配点开头的文件" tabindex="-1"><a class="header-anchor" href="#32-匹配点开头的文件"><span>3.2 匹配点（.）开头的文件</span></a></h3><p>如果目录包含以 <code>&quot;.&quot;</code> 打头的文件，它们默认将不会被匹配。</p><p>例如，考虑一个包含 <code>card.gif</code> 和 <code>.card.gif</code> 的目录：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">glob.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">glob</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;*.gif&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)  </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># [&#39;card.gif&#39;]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">glob.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">glob</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;.c*&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)    </span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># [&#39;.card.gif&#39;]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,27);function g(b,y){const t=n("router-link");return h(),d("div",null,[p,i("nav",c,[i("ul",null,[i("li",null,[s(t,{to:"#1-glob-模块简介"},{default:e(()=>[a("1. glob 模块简介")]),_:1})]),i("li",null,[s(t,{to:"#2-库函数"},{default:e(()=>[a("2. 库函数")]),_:1})]),i("li",null,[s(t,{to:"#3-示例"},{default:e(()=>[a("3. 示例")]),_:1}),i("ul",null,[i("li",null,[s(t,{to:"#31-匹配文件名"},{default:e(()=>[a("3.1 匹配文件名")]),_:1})]),i("li",null,[s(t,{to:"#32-匹配点开头的文件"},{default:e(()=>[a("3.2 匹配点（.）开头的文件")]),_:1})])])])])]),k])}const f=l(r,[["render",g],["__file","glob.html.vue"]]),B=JSON.parse('{"path":"/posts/python/basic/stdlib/glob.html","title":"glob - Unix 风格路径名模式扩展","lang":"zh-CN","frontmatter":{"description":"glob - Unix 风格路径名模式扩展 1. glob 模块简介 glob 模块可根据 Unix 终端所用规则找出所有匹配特定模式的路径名，但会按不确定的顺序返回结果。 波浪号 ~ 扩展不会生效 但 *、? 以及表示为 [] 的字符范围将被正确地匹配 glob 实现 这是通过配合使用 os.scandir() 和 fnmatch.fnmatch()...","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/posts/python/basic/stdlib/glob.html"}],["meta",{"property":"og:site_name","content":"鸭梨"}],["meta",{"property":"og:title","content":"glob - Unix 风格路径名模式扩展"}],["meta",{"property":"og:description","content":"glob - Unix 风格路径名模式扩展 1. glob 模块简介 glob 模块可根据 Unix 终端所用规则找出所有匹配特定模式的路径名，但会按不确定的顺序返回结果。 波浪号 ~ 扩展不会生效 但 *、? 以及表示为 [] 的字符范围将被正确地匹配 glob 实现 这是通过配合使用 os.scandir() 和 fnmatch.fnmatch()..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-27T04:16:18.000Z"}],["meta",{"property":"article:author","content":"Alex Sun"}],["meta",{"property":"article:modified_time","content":"2024-05-27T04:16:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"glob - Unix 风格路径名模式扩展\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-27T04:16:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Alex Sun\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[{"level":2,"title":"1. glob 模块简介","slug":"1-glob-模块简介","link":"#1-glob-模块简介","children":[]},{"level":2,"title":"2. 库函数","slug":"2-库函数","link":"#2-库函数","children":[]},{"level":2,"title":"3. 示例","slug":"3-示例","link":"#3-示例","children":[{"level":3,"title":"3.1 匹配文件名","slug":"31-匹配文件名","link":"#31-匹配文件名","children":[]},{"level":3,"title":"3.2 匹配点（.）开头的文件","slug":"32-匹配点开头的文件","link":"#32-匹配点开头的文件","children":[]}]}],"git":{"createdTime":1716783378000,"updatedTime":1716783378000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":1.78,"words":535},"filePathRelative":"posts/python/basic/stdlib/glob.md","localizedDate":"2024年5月27日","excerpt":"\\n\\n<h2>1. glob 模块简介</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>项目</th>\\n<th>信息</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>源代码</td>\\n<td><a href=\\"https://github.com/python/cpython/tree/3.11/Lib/glob.py\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Lib/glob.py</a></td>\\n</tr>\\n<tr>\\n<td>Python 版本</td>\\n<td>全版本</td>\\n</tr>\\n<tr>\\n<td>标签</td>\\n<td>文件和目录</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{f as comp,B as data};
