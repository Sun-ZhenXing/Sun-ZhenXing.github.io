import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as h,o as k,c as p,b as s,a,w as n,d as i,e as r}from"./app-mQJDQ8JG.js";const d={},o=s("h1",{id:"创建异步子进程",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#创建异步子进程"},[s("span",null,"创建异步子进程")])],-1),B={class:"table-of-contents"},y=r(`<h2 id="1-发起异步进程" tabindex="-1"><a class="header-anchor" href="#1-发起异步进程"><span>1. 发起异步进程</span></a></h2><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> asyncio</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">async</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> run</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">cmd</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">str</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> |</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> bytes</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    proc </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> asyncio.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">create_subprocess_shell</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        cmd,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        stdout</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">asyncio.subprocess.</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">PIPE</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">        stderr</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">asyncio.subprocess.</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">PIPE</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    )</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    stdout, stderr </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> await</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> proc.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">communicate</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">cmd</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">!r</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> exited with </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">proc.returncode</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> stdout:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;[stdout]</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\n</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">stdout.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">decode</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> stderr:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;[stderr]</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\n</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">stderr.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">decode</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">asyncio.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">run</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;ls /&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="2-windows-下的限制" tabindex="-1"><a class="header-anchor" href="#2-windows-下的限制"><span>2. Windows 下的限制</span></a></h2>`,3),g=s("code",null,"ProactorEventLoop",-1),c=s("code",null,"ProactorEventLoop",-1);function C(A,u){const t=h("router-link"),l=h("Badge");return k(),p("div",null,[o,s("nav",B,[s("ul",null,[s("li",null,[a(t,{to:"#1-发起异步进程"},{default:n(()=>[i("1. 发起异步进程")]),_:1})]),s("li",null,[a(t,{to:"#2-windows-下的限制"},{default:n(()=>[i("2. Windows 下的限制")]),_:1})])])]),y,s("p",null,[a(l,{type:"danger",vertical:"inherit"},{default:n(()=>[i("TODO")]),_:1}),i(" Windows 只有 "),g,i(" 支持异步子进程，但是许多库都不支持 "),c,i("，所以 Windows 下的异步子进程支持不好。")])])}const D=e(d,[["render",C],["__file","subprocess.html.vue"]]),m=JSON.parse('{"path":"/posts/python/notebook/async/subprocess.html","title":"创建异步子进程","lang":"zh-CN","frontmatter":{"description":"创建异步子进程 1. 发起异步进程 2. Windows 下的限制 Windows 只有 ProactorEventLoop 支持异步子进程，但是许多库都不支持 ProactorEventLoop，所以 Windows 下的异步子进程支持不好。","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/posts/python/notebook/async/subprocess.html"}],["meta",{"property":"og:site_name","content":"鸭梨"}],["meta",{"property":"og:title","content":"创建异步子进程"}],["meta",{"property":"og:description","content":"创建异步子进程 1. 发起异步进程 2. Windows 下的限制 Windows 只有 ProactorEventLoop 支持异步子进程，但是许多库都不支持 ProactorEventLoop，所以 Windows 下的异步子进程支持不好。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-29T10:37:48.000Z"}],["meta",{"property":"article:author","content":"Alex Sun"}],["meta",{"property":"article:modified_time","content":"2024-05-29T10:37:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"创建异步子进程\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-29T10:37:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Alex Sun\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[{"level":2,"title":"1. 发起异步进程","slug":"1-发起异步进程","link":"#1-发起异步进程","children":[]},{"level":2,"title":"2. Windows 下的限制","slug":"2-windows-下的限制","link":"#2-windows-下的限制","children":[]}],"git":{"createdTime":1716783378000,"updatedTime":1716979068000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":0.34,"words":103},"filePathRelative":"posts/python/notebook/async/subprocess.md","localizedDate":"2024年5月27日","excerpt":"\\n\\n<h2>1. 发起异步进程</h2>\\n<div class=\\"language-python line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"python\\" data-title=\\"python\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">import</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> asyncio</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">async</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> def</span><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\"> run</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">cmd</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">: </span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#56B6C2\\">str</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\"> |</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#56B6C2\\"> bytes</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">):</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">    proc </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> await</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> asyncio.</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#61AFEF\\">create_subprocess_shell</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">(</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">        cmd,</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">        stdout</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">asyncio.subprocess.</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">PIPE</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#E36209;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic\\">        stderr</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">asyncio.subprocess.</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">PIPE</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">    )</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">    stdout, stderr </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\"> await</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> proc.</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#61AFEF\\">communicate</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">()</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#005CC5;--shiki-dark:#56B6C2\\">    print</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">f</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">\\"</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">{</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">cmd</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">!r</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">}</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> exited with </span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">{</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">proc.returncode</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">}</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">\\"</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">    if</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> stdout:</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#005CC5;--shiki-dark:#56B6C2\\">        print</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">f</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">\\"[stdout]</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#56B6C2\\">\\\\n</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">{</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">stdout.</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#61AFEF\\">decode</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">()</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">}</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">\\"</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">    if</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> stderr:</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#005CC5;--shiki-dark:#56B6C2\\">        print</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">f</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">\\"[stderr]</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#56B6C2\\">\\\\n</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">{</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">stderr.</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#61AFEF\\">decode</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">()</span><span style=\\"--shiki-light:#005CC5;--shiki-dark:#D19A66\\">}</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">\\"</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">asyncio.</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#61AFEF\\">run</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#61AFEF\\">run</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">\\"ls /\\"</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">))</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{D as comp,m as data};