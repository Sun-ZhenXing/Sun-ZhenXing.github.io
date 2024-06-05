import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as n}from"./app-mQJDQ8JG.js";const t={},e=n(`<h1 id="大小写不敏感的字典" tabindex="-1"><a class="header-anchor" href="#大小写不敏感的字典"><span>大小写不敏感的字典</span></a></h1><p><code>requests</code> 内有一个大小写不敏感的字典类型 <code>CaseInsensitiveDict</code>，例如 <code>response.headers</code> 即是这个类型：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> requests</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">url </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> &#39;http://www.bing.com&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">res </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> requests.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(url)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(res.headers[</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;Connection&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">])</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(res.headers[</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;connection&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">])</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这两个结果一致。下面我们通过魔术方法实现一个大小写不敏感的字典，参考了网络上的其他方法[^1]</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#E5C07B;"> CaseInsensitiveDict</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">dict</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> lower_key</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        if</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> isinstance</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(key, </span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">            return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> key.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">lower</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> key</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    def</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> __setitem__</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">value</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">        super</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">__setitem__</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">lower_key</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(key), value)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    def</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> __getitem__</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">item</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> super</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">__getitem__</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">lower_key</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(item))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    def</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> __delitem__</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">key</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">        super</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">__delitem__</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">lower_key</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(key))</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> update</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">another</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">None</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">**</span><span style="--shiki-light:#24292E;--shiki-dark:#D19A66;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">F</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        for</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> key, value </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> another.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">items</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">():</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">            self</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">__setitem__</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(key, value)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">    def</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> __repr__</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;"> f</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">type</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">self</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">).</span><span style="--shiki-light:#005CC5;--shiki-dark:#E06C75;">__name__</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">{</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">super</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">__repr__</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">)&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>[1]: Python 创建一个大小写不敏感的字典，CoolPython，<a href="http://www.coolpython.net/informal_essay/20-03/ignore_case_dict.html" target="_blank" rel="noopener noreferrer">http://www.coolpython.net/informal_essay/20-03/ignore_case_dict.html</a></p>`,6),h=[e];function l(k,p){return s(),a("div",null,h)}const B=i(t,[["render",l],["__file","case-insensitive-dict.html.vue"]]),y=JSON.parse(`{"path":"/posts/python/basic/collections/case-insensitive-dict.html","title":"大小写不敏感的字典","lang":"zh-CN","frontmatter":{"description":"大小写不敏感的字典 requests 内有一个大小写不敏感的字典类型 CaseInsensitiveDict，例如 response.headers 即是这个类型： 这两个结果一致。下面我们通过魔术方法实现一个大小写不敏感的字典，参考了网络上的其他方法[^1] [1]: Python 创建一个大小写不敏感的字典，CoolPython，http://ww...","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/posts/python/basic/collections/case-insensitive-dict.html"}],["meta",{"property":"og:site_name","content":"鸭梨"}],["meta",{"property":"og:title","content":"大小写不敏感的字典"}],["meta",{"property":"og:description","content":"大小写不敏感的字典 requests 内有一个大小写不敏感的字典类型 CaseInsensitiveDict，例如 response.headers 即是这个类型： 这两个结果一致。下面我们通过魔术方法实现一个大小写不敏感的字典，参考了网络上的其他方法[^1] [1]: Python 创建一个大小写不敏感的字典，CoolPython，http://ww..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-27T04:16:18.000Z"}],["meta",{"property":"article:author","content":"Alex Sun"}],["meta",{"property":"article:modified_time","content":"2024-05-27T04:16:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"大小写不敏感的字典\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-27T04:16:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Alex Sun\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[],"git":{"createdTime":1716783378000,"updatedTime":1716783378000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":0.59,"words":178},"filePathRelative":"posts/python/basic/collections/case-insensitive-dict.md","localizedDate":"2024年5月27日","excerpt":"\\n<p><code>requests</code> 内有一个大小写不敏感的字典类型 <code>CaseInsensitiveDict</code>，例如 <code>response.headers</code> 即是这个类型：</p>\\n<div class=\\"language-python line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"python\\" data-title=\\"python\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#D73A49;--shiki-dark:#C678DD\\">import</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> requests</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">url </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> 'http://www.bing.com'</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">res </span><span style=\\"--shiki-light:#D73A49;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\"> requests.</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#61AFEF\\">get</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">(url)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#005CC5;--shiki-dark:#56B6C2\\">print</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">(res.headers[</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">'Connection'</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">])</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#005CC5;--shiki-dark:#56B6C2\\">print</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">(res.headers[</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\">'connection'</span><span style=\\"--shiki-light:#24292E;--shiki-dark:#ABB2BF\\">])</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{B as comp,y as data};