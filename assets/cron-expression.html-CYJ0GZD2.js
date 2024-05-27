import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as c,c as r,b as n,a as s,w as a,e as l,d as o}from"./app-DhX54nll.js";const i={},d=n("p",null,"Cron 表达式的用法介绍。",-1),u={class:"table-of-contents"},k=l(`<h2 id="1-cron-表达式" tabindex="-1"><a class="header-anchor" href="#1-cron-表达式"><span>1. Cron 表达式</span></a></h2><p>Cron 是一款类 Unix 的操作系统下的基于时间的任务管理系统。用户可以通过 Cron 在固定时间、日期、间隔下，运行定期任务（可以是命令和脚本）。</p><p>Cron 常用于运维和管理，但也可用于其他地方，如：定期下载文件和邮件。Cron 该词来源于希腊语 chronos（χρόνος），原意是时间。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><p>Cron 使用的语法就是 Cron 表达式。原始的 Cron 表达式是五段的（分、时、日、月、周），但是在 Linux 中，Cron 表达式可以有六段（秒、分、时、日、月、周）。</p><p>后来有一些工具沿用并扩展了 Cron 表达式，现在流行的 Cron 表达式有七段（秒、分、时、日、月、周、年，为了兼容六段的 Cron 表达式，年可以省略），本文将介绍这种 Cron 表达式。</p><div class="hint-container info"><p class="hint-container-title">第三方工具</p><p>有许多作业调度框架都使用 Cron 表达式，例如 Java 生态的 <a href="https://github.com/quartz-scheduler/quartz" target="_blank" rel="noopener noreferrer">Quartz</a> 或者 Python 生态的 <a href="https://github.com/Miksus/rocketry" target="_blank" rel="noopener noreferrer">Rocketry</a> 等。另外像 GitHub Actions 这样的 CI 工具也可以使用 Cron 指定其运行周期，这些框架或平台都提供了 Cron 表达式的解析和生成工具，可以方便地使用 Cron 表达式来管理作业。</p></div><h2 id="2-cron-表达式语法" tabindex="-1"><a class="header-anchor" href="#2-cron-表达式语法"><span>2. Cron 表达式语法</span></a></h2><p>Cron 表达式的格式如下：<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p><table><thead><tr><th>字段</th><th>允许值</th><th>允许的特殊字符</th></tr></thead><tbody><tr><td>秒（可选，分为两种版本）</td><td>0-59</td><td><code>, - * /</code></td></tr><tr><td>分</td><td>0-59</td><td><code>, - * /</code></td></tr><tr><td>小时</td><td>0-23</td><td><code>, - * /</code></td></tr><tr><td>日期</td><td>1-31</td><td><code>, - * ? / L W C</code></td></tr><tr><td>月份</td><td>1-12 或 JAN-DEC</td><td><code>, - * /</code></td></tr><tr><td>星期</td><td>1-7 或 SUN-SAT</td><td><code>, - * ? / L C #</code></td></tr><tr><td>年（可选）</td><td>空或 1970-2099</td><td><code>, - * /</code></td></tr></tbody></table><h3 id="21-基本用法" tabindex="-1"><a class="header-anchor" href="#21-基本用法"><span>2.1. 基本用法</span></a></h3><p>下面以秒为例，介绍最基本的 Cron 表达式用法。</p><ul><li>允许值范围：0~59，不允许为空值</li><li><code>&quot;*&quot;</code> 代表每秒钟触发一次</li><li><code>&quot;,&quot;</code> 代表在指定的秒数触发，比如 <code>&quot;0,15,45&quot;</code> 代表 0 秒、15 秒和 45 秒时触发任务</li><li><code>&quot;-&quot;</code> 代表在指定的范围内触发，比如 <code>&quot;25-45&quot;</code> 代表从 25 秒开始触发到 45 秒结束触发，每秒触发一次</li><li><code>&quot;/&quot;</code> 代表步进，<code>&quot;/&quot;</code> 前面的值代表初始值（<code>&quot;*&quot;</code> 等同 <code>&quot;0&quot;</code>），后面的值代表偏移量，比如 <code>&quot;0/20&quot;</code> 或者 <code>&quot;*/20&quot;</code> 代表从 0 秒钟开始，每隔 20 秒钟触发一次，即第 0 秒、20 秒、40 秒分别触发一次。<code>&quot;10-45/20&quot;</code> 代表在 <code>[10, 45]</code> 内步进 20 秒触发</li></ul><p>由于日期和星期互斥，它们中的一个在指定时，另一个需要指定为 <code>?</code> 来避免冲突。</p><h3 id="22-特殊字符" tabindex="-1"><a class="header-anchor" href="#22-特殊字符"><span>2.2. 特殊字符</span></a></h3><p>部分字段允许使用特殊字符，其含义如下：</p><ul><li><code>&quot;?&quot;</code> 代表不指定值，可以用于日期和星期字段</li><li><code>&quot;L&quot;</code> 代表最后，可以用于日期和星期字段，比如 <code>&quot;L&quot;</code> 代表最后一天，<code>&quot;6L&quot;</code> 代表最后一个星期五</li><li><code>&quot;W&quot;</code> 代表最近的工作日，可以用于日期字段，比如 <code>&quot;15W&quot;</code> 代表离 15 号最近的工作日</li><li><code>&quot;C&quot;</code> 联系日历计算的值，可以用于日期和星期字段，例如星期域是 <code>&quot;1C&quot;</code> 表示关联日历中第一天</li><li><code>&quot;#&quot;</code> 代表第几个，可以用于星期字段，比如 <code>&quot;6#3&quot;</code> 代表第三个星期五</li></ul><h2 id="3-cron-表达式示例" tabindex="-1"><a class="header-anchor" href="#3-cron-表达式示例"><span>3. Cron 表达式示例</span></a></h2><table><thead><tr><th>表达式</th><th>含义</th></tr></thead><tbody><tr><td><code>0 0 12 * * ?</code></td><td>每天中午 12 点触发</td></tr><tr><td><code>0 15 10 ? * *</code></td><td>每天上午 10:15 触发</td></tr><tr><td><code>0 15 10 * * ?</code></td><td>每天上午 10:15 触发</td></tr><tr><td><code>0 15 10 * * ? *</code></td><td>每天上午 10:15 触发</td></tr><tr><td><code>0 15 10 * * ? 2023</code></td><td>2023 年的每天上午 10:15 触发</td></tr><tr><td><code>0 * 14 * * ?</code></td><td>在每天下午 2 点到下午 2:59 期间的每 1 分钟触发</td></tr><tr><td><code>0 0/5 14 * * ?</code></td><td>在每天下午 2 点到下午 2:55 期间的每 5 分钟触发</td></tr><tr><td><code>0 0/5 14,18 * * ?</code></td><td>在每天下午 2 点到 2:55 期间和下午 6 点到 6:55 期间的每 5 分钟触发</td></tr><tr><td><code>0 0-5 14 * * ?</code></td><td>每天下午 2 点到下午 2:05 期间的每 1 分钟触发</td></tr><tr><td><code>0 10,44 14 ? 3 WED</code></td><td>每年三月的星期三的下午 2:10 和 2:44 触发</td></tr><tr><td><code>0 15 10 ? * MON-FRI</code></td><td>周一至周五的上午 10:15 触发</td></tr><tr><td><code>0 15 10 15 * ?</code></td><td>每月 15 日上午 10:15 触发</td></tr><tr><td><code>0 15 10 L * ?</code></td><td>每月最后一日的上午 10:15 触发</td></tr><tr><td><code>0 15 10 ? * 6L</code></td><td>每月的最后一个星期五上午 10:15 触发</td></tr><tr><td><code>0 15 10 ? * 6L 2022-2025</code></td><td>2022 年至 2025 年的每月的最后一个星期五上午 10:15 触发</td></tr><tr><td><code>0 15 10 ? * 6#3</code></td><td>每月的第三个星期五上午 10:15 触发</td></tr></tbody></table><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> locale
<span class="token keyword">from</span> datetime <span class="token keyword">import</span> datetime

<span class="token keyword">from</span> cron_descriptor <span class="token keyword">import</span> CasingTypeEnum<span class="token punctuation">,</span> ExpressionDescriptor
<span class="token keyword">from</span> croniter <span class="token keyword">import</span> croniter

<span class="token keyword">print</span><span class="token punctuation">(</span>locale<span class="token punctuation">.</span>getdefaultlocale<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&quot;%B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 设置新的语言</span>
locale<span class="token punctuation">.</span>setlocale<span class="token punctuation">(</span>locale<span class="token punctuation">.</span>LC_ALL<span class="token punctuation">,</span> <span class="token string">&quot;zh_CN.UTF-8&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&quot;%B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

CRON <span class="token operator">=</span> <span class="token string">&quot;2 13 * 5 *&quot;</span>
base <span class="token operator">=</span> datetime<span class="token punctuation">(</span><span class="token number">2023</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">46</span><span class="token punctuation">)</span>
<span class="token builtin">iter</span> <span class="token operator">=</span> croniter<span class="token punctuation">(</span>CRON<span class="token punctuation">,</span> base<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">iter</span><span class="token punctuation">.</span>get_next<span class="token punctuation">(</span>datetime<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">iter</span><span class="token punctuation">.</span>get_next<span class="token punctuation">(</span>datetime<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">iter</span><span class="token punctuation">.</span>get_next<span class="token punctuation">(</span>datetime<span class="token punctuation">)</span><span class="token punctuation">)</span>

descriptor <span class="token operator">=</span> ExpressionDescriptor<span class="token punctuation">(</span>
    expression<span class="token operator">=</span>CRON<span class="token punctuation">,</span>
    casing_type<span class="token operator">=</span>CasingTypeEnum<span class="token punctuation">.</span>Title<span class="token punctuation">,</span>
    use_24hour_time_format<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
    locale_code<span class="token operator">=</span><span class="token string">&quot;zh_CN&quot;</span><span class="token punctuation">,</span>
    verbose<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>descriptor<span class="token punctuation">.</span>get_description<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>语言问题：</p><div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> locale

<span class="token keyword">from</span> cron_descriptor <span class="token keyword">import</span> Options<span class="token punctuation">,</span> get_description

options <span class="token operator">=</span> Options<span class="token punctuation">(</span><span class="token punctuation">)</span>
options<span class="token punctuation">.</span>locale_code <span class="token operator">=</span> <span class="token string">&quot;zh_CN&quot;</span>

<span class="token comment"># current locale</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>locale<span class="token punctuation">.</span>getdefaultlocale<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

cron_express <span class="token operator">=</span> <span class="token string">&quot;30 */6 * 1,2,3 1-5&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>get_description<span class="token punctuation">(</span>cron_express<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>get_description<span class="token punctuation">(</span>cron_express<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># set new locale</span>
locale<span class="token punctuation">.</span>setlocale<span class="token punctuation">(</span>locale<span class="token punctuation">.</span>LC_ALL<span class="token punctuation">,</span> <span class="token string">&quot;zh_CN.UTF-8&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>get_description<span class="token punctuation">(</span>cron_express<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>get_description<span class="token punctuation">(</span>cron_express<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>Cron，维基百科，<a href="https://zh.wikipedia.org/wiki/Cron" target="_blank" rel="noopener noreferrer">https://zh.wikipedia.org/wiki/Cron</a> <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li><li id="footnote2" class="footnote-item"><p>Cron表达式的详细用法，简书，<a href="https://www.jianshu.com/p/e9ce1a7e1ed1" target="_blank" rel="noopener noreferrer">https://www.jianshu.com/p/e9ce1a7e1ed1</a> <a href="#footnote-ref2" class="footnote-backref">↩︎</a></p></li></ol></section>`,23);function m(h,v){const t=p("router-link");return c(),r("div",null,[d,n("nav",u,[n("ul",null,[n("li",null,[s(t,{to:"#1-cron-表达式"},{default:a(()=>[o("1. Cron 表达式")]),_:1})]),n("li",null,[s(t,{to:"#2-cron-表达式语法"},{default:a(()=>[o("2. Cron 表达式语法")]),_:1}),n("ul",null,[n("li",null,[s(t,{to:"#21-基本用法"},{default:a(()=>[o("2.1. 基本用法")]),_:1})]),n("li",null,[s(t,{to:"#22-特殊字符"},{default:a(()=>[o("2.2. 特殊字符")]),_:1})])])]),n("li",null,[s(t,{to:"#3-cron-表达式示例"},{default:a(()=>[o("3. Cron 表达式示例")]),_:1})])])]),k])}const q=e(i,[["render",m],["__file","cron-expression.html.vue"]]),C=JSON.parse('{"path":"/posts/computer-core/collections/cron-expression.html","title":"Cron 表达式","lang":"zh-CN","frontmatter":{"title":"Cron 表达式","date":"2023-03-28T00:00:00.000Z","category":["计算机核心知识"],"tag":["Cron"],"description":"Cron 表达式的用法介绍。","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/posts/computer-core/collections/cron-expression.html"}],["meta",{"property":"og:site_name","content":"鸭梨"}],["meta",{"property":"og:title","content":"Cron 表达式"}],["meta",{"property":"og:description","content":"Cron 表达式的用法介绍。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-02T16:16:12.000Z"}],["meta",{"property":"article:author","content":"Alex Sun"}],["meta",{"property":"article:tag","content":"Cron"}],["meta",{"property":"article:published_time","content":"2023-03-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-02T16:16:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Cron 表达式\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-28T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-02T16:16:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Alex Sun\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[{"level":2,"title":"1. Cron 表达式","slug":"1-cron-表达式","link":"#1-cron-表达式","children":[]},{"level":2,"title":"2. Cron 表达式语法","slug":"2-cron-表达式语法","link":"#2-cron-表达式语法","children":[{"level":3,"title":"2.1. 基本用法","slug":"21-基本用法","link":"#21-基本用法","children":[]},{"level":3,"title":"2.2. 特殊字符","slug":"22-特殊字符","link":"#22-特殊字符","children":[]}]},{"level":2,"title":"3. Cron 表达式示例","slug":"3-cron-表达式示例","link":"#3-cron-表达式示例","children":[]}],"git":{"createdTime":1679991127000,"updatedTime":1709396172000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":5}]},"readingTime":{"minutes":4.27,"words":1282},"filePathRelative":"posts/computer-core/collections/cron-expression.md","localizedDate":"2023年3月28日","excerpt":"<p>Cron 表达式的用法介绍。</p>\\n","autoDesc":true}');export{q as comp,C as data};
