import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as a,o,c as i,b as e,a as s,w as l,e as h,d as r}from"./app-mQJDQ8JG.js";const d={},p=e("h1",{id:"python-如何查找段错误segment-fault",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#python-如何查找段错误segment-fault"},[e("span",null,"Python 如何查找段错误（Segment Fault）")])],-1),c={class:"table-of-contents"},m=h('<h2 id="1-python-调试选项" tabindex="-1"><a class="header-anchor" href="#1-python-调试选项"><span>1. Python 调试选项</span></a></h2><p>问题背景：在开发 PySide6 程序时出现了闪退错误，Windows 上不显示任何内容崩溃，Mac OS 上出现段错误（内容已转储）。常规调试方法无法得出错误出现的位置，因为出错的位置不是在 Python 解释器执行时出现的，而是在执行外部扩展时出现的。</p><p>通过下面的方法成功定位到问题：发现是 <code>QThread</code> 线程中调用了 UI 功能导致的。PySide6 要求线程想修改或读取 UI 控件的内容必须借助信号通信。</p><p>总结：调试方法是，在执行 Python 时加上 <code>-X faulthandler</code> 选项，可以在程序出现 Segment Fault 时打印出调用栈。</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">python</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -X</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> faulthandler</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> test.py</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',5);function u(y,g){const t=a("router-link");return o(),i("div",null,[p,e("nav",c,[e("ul",null,[e("li",null,[s(t,{to:"#1-python-调试选项"},{default:l(()=>[r("1. Python 调试选项")]),_:1})])])]),m])}const P=n(d,[["render",u],["__file","segment-fault.html.vue"]]),_=JSON.parse('{"path":"/posts/python/advanced/debugging/segment-fault.html","title":"Python 如何查找段错误（Segment Fault）","lang":"zh-CN","frontmatter":{"description":"Python 如何查找段错误（Segment Fault） 1. Python 调试选项 问题背景：在开发 PySide6 程序时出现了闪退错误，Windows 上不显示任何内容崩溃，Mac OS 上出现段错误（内容已转储）。常规调试方法无法得出错误出现的位置，因为出错的位置不是在 Python 解释器执行时出现的，而是在执行外部扩展时出现的。 通过下...","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/posts/python/advanced/debugging/segment-fault.html"}],["meta",{"property":"og:site_name","content":"鸭梨"}],["meta",{"property":"og:title","content":"Python 如何查找段错误（Segment Fault）"}],["meta",{"property":"og:description","content":"Python 如何查找段错误（Segment Fault） 1. Python 调试选项 问题背景：在开发 PySide6 程序时出现了闪退错误，Windows 上不显示任何内容崩溃，Mac OS 上出现段错误（内容已转储）。常规调试方法无法得出错误出现的位置，因为出错的位置不是在 Python 解释器执行时出现的，而是在执行外部扩展时出现的。 通过下..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-27T04:16:18.000Z"}],["meta",{"property":"article:author","content":"Alex Sun"}],["meta",{"property":"article:modified_time","content":"2024-05-27T04:16:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Python 如何查找段错误（Segment Fault）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-27T04:16:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Alex Sun\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[{"level":2,"title":"1. Python 调试选项","slug":"1-python-调试选项","link":"#1-python-调试选项","children":[]}],"git":{"createdTime":1716783378000,"updatedTime":1716783378000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":0.68,"words":203},"filePathRelative":"posts/python/advanced/debugging/segment-fault.md","localizedDate":"2024年5月27日","excerpt":"\\n\\n<h2>1. Python 调试选项</h2>\\n<p>问题背景：在开发 PySide6 程序时出现了闪退错误，Windows 上不显示任何内容崩溃，Mac OS 上出现段错误（内容已转储）。常规调试方法无法得出错误出现的位置，因为出错的位置不是在 Python 解释器执行时出现的，而是在执行外部扩展时出现的。</p>\\n<p>通过下面的方法成功定位到问题：发现是 <code>QThread</code> 线程中调用了 UI 功能导致的。PySide6 要求线程想修改或读取 UI 控件的内容必须借助信号通信。</p>\\n<p>总结：调试方法是，在执行 Python 时加上 <code>-X faulthandler</code> 选项，可以在程序出现 Segment Fault 时打印出调用栈。</p>","autoDesc":true}');export{P as comp,_ as data};