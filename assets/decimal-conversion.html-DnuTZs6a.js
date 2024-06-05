import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as h,c as k,b as s,a,w as n,e as p,d as e}from"./app-mQJDQ8JG.js";const r={},d=s("h1",{id:"进制转换",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#进制转换"},[s("span",null,"进制转换")])],-1),o={class:"table-of-contents"},B=p(`<h2 id="1-字符串转换" tabindex="-1"><a class="header-anchor" href="#1-字符串转换"><span>1. 字符串转换</span></a></h2><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="2-数组表示的任意进制" tabindex="-1"><a class="header-anchor" href="#2-数组表示的任意进制"><span>2. 数组表示的任意进制</span></a></h2><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> convert_base</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">number</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">base</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">int</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) -&gt; list[</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> number </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> or</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> base </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        raise</span><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;"> ValueError</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">            &#39;&quot;number&quot; must be positive and &quot;base&quot; must be greater than 1&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        )</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> number </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> or</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> base </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> [number]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    res </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> []</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    while</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> number </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        number, mod </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> divmod</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(number, base)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        res.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">append</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(mod)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    res.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">reverse</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> res</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> from_list</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">l</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: list[</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">], </span><span style="--shiki-light:#24292E;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">base</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">int</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) -&gt; </span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> base </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        raise</span><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;"> ValueError</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;&quot;base&quot; must be greater than 1&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    res </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> l:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">        res </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> res </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> base </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> x</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> res</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function g(c,y){const i=l("router-link");return h(),k("div",null,[d,s("nav",o,[s("ul",null,[s("li",null,[a(i,{to:"#1-字符串转换"},{default:n(()=>[e("1. 字符串转换")]),_:1})]),s("li",null,[a(i,{to:"#2-数组表示的任意进制"},{default:n(()=>[e("2. 数组表示的任意进制")]),_:1})])])]),B])}const A=t(r,[["render",g],["__file","decimal-conversion.html.vue"]]),b=JSON.parse('{"path":"/posts/python/basic/collections/decimal-conversion.html","title":"进制转换","lang":"zh-CN","frontmatter":{"description":"进制转换 1. 字符串转换 2. 数组表示的任意进制","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/posts/python/basic/collections/decimal-conversion.html"}],["meta",{"property":"og:site_name","content":"鸭梨"}],["meta",{"property":"og:title","content":"进制转换"}],["meta",{"property":"og:description","content":"进制转换 1. 字符串转换 2. 数组表示的任意进制"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-27T04:16:18.000Z"}],["meta",{"property":"article:author","content":"Alex Sun"}],["meta",{"property":"article:modified_time","content":"2024-05-27T04:16:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"进制转换\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-27T04:16:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Alex Sun\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[{"level":2,"title":"1. 字符串转换","slug":"1-字符串转换","link":"#1-字符串转换","children":[]},{"level":2,"title":"2. 数组表示的任意进制","slug":"2-数组表示的任意进制","link":"#2-数组表示的任意进制","children":[]}],"git":{"createdTime":1716783378000,"updatedTime":1716783378000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":0.35,"words":105},"filePathRelative":"posts/python/basic/collections/decimal-conversion.md","localizedDate":"2024年5月27日","excerpt":"\\n\\n<h2>1. 字符串转换</h2>\\n<div class=\\"language-python line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"python\\" data-title=\\"python\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{A as comp,b as data};
