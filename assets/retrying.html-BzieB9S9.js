import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as e,c as o,b as n,a as p,w as c,e as r,d as i}from"./app-DhX54nll.js";const l={},u=n("h1",{id:"retrying---重试任务",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#retrying---重试任务"},[n("span",null,"retrying - 重试任务")])],-1),d={class:"table-of-contents"},k=r(`<h2 id="1-项目简介" tabindex="-1"><a class="header-anchor" href="#1-项目简介"><span>1. 项目简介</span></a></h2><p><code>retrying</code> 是一个 Python 重试任务的工具包。</p><div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> random
<span class="token keyword">from</span> retrying <span class="token keyword">import</span> retry

<span class="token decorator annotation punctuation">@retry</span>
<span class="token keyword">def</span> <span class="token function">do_something_unreliable</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token keyword">raise</span> IOError<span class="token punctuation">(</span><span class="token string">&quot;Broken sauce, everything is hosed!!!111one&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token string">&quot;Awesome sauce!&quot;</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>do_something_unreliable<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><p>还可以包含参数：</p><div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token decorator annotation punctuation">@retry</span><span class="token punctuation">(</span>stop_max_attempt_number<span class="token operator">=</span><span class="token number">7</span><span class="token punctuation">)</span>
<span class="token keyword">def</span> <span class="token function">stop_after_7_attempts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Stopping after 7 attempts&quot;</span><span class="token punctuation">)</span>
</code></pre></div><p>可用参数：</p><ul><li><code>stop_max_attempt_number</code>：最大重试次数</li><li><code>stop_max_delay</code>：重试指定在指定时间内完成</li><li><code>wait_fixed</code>：固定的重试等待时间</li><li><code>wait_random_min</code>：最小随机等待时间（毫秒）</li><li><code>wait_random_max</code>：最大随机等待时间（毫秒）</li><li><code>wait_exponential_multiplier</code>：指数等待时间的基数（毫秒）</li><li><code>wait_exponential_max</code>：指数等待时间的最大值（毫秒）</li><li><code>retry_on_exception</code>：传入判断异常是否重试的函数</li><li><code>wrap_exception</code>：抛出错误的异常类型</li><li><code>retry_on_result</code>：在结果为指定条件时重试</li></ul>`,7);function m(y,_){const a=s("router-link");return e(),o("div",null,[u,n("nav",d,[n("ul",null,[n("li",null,[p(a,{to:"#1-项目简介"},{default:c(()=>[i("1. 项目简介")]),_:1})])])]),k])}const w=t(l,[["render",m],["__file","retrying.html.vue"]]),x=JSON.parse('{"path":"/posts/python/packages/utils/retrying.html","title":"retrying - 重试任务","lang":"zh-CN","frontmatter":{"description":"retrying - 重试任务 1. 项目简介 retrying 是一个 Python 重试任务的工具包。 还可以包含参数： 可用参数： stop_max_attempt_number：最大重试次数 stop_max_delay：重试指定在指定时间内完成 wait_fixed：固定的重试等待时间 wait_random_min：最小随机等待时间（毫秒）...","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/posts/python/packages/utils/retrying.html"}],["meta",{"property":"og:site_name","content":"鸭梨"}],["meta",{"property":"og:title","content":"retrying - 重试任务"}],["meta",{"property":"og:description","content":"retrying - 重试任务 1. 项目简介 retrying 是一个 Python 重试任务的工具包。 还可以包含参数： 可用参数： stop_max_attempt_number：最大重试次数 stop_max_delay：重试指定在指定时间内完成 wait_fixed：固定的重试等待时间 wait_random_min：最小随机等待时间（毫秒）..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-27T04:16:18.000Z"}],["meta",{"property":"article:author","content":"Alex Sun"}],["meta",{"property":"article:modified_time","content":"2024-05-27T04:16:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"retrying - 重试任务\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-27T04:16:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Alex Sun\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[{"level":2,"title":"1. 项目简介","slug":"1-项目简介","link":"#1-项目简介","children":[]}],"git":{"createdTime":1716783378000,"updatedTime":1716783378000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":0.63,"words":188},"filePathRelative":"posts/python/packages/utils/retrying.md","localizedDate":"2024年5月27日","excerpt":"\\n\\n<h2>1. 项目简介</h2>\\n<p><code>retrying</code> 是一个 Python 重试任务的工具包。</p>\\n<div class=\\"language-python\\" data-ext=\\"py\\" data-title=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> random\\n<span class=\\"token keyword\\">from</span> retrying <span class=\\"token keyword\\">import</span> retry\\n\\n<span class=\\"token decorator annotation punctuation\\">@retry</span>\\n<span class=\\"token keyword\\">def</span> <span class=\\"token function\\">do_something_unreliable</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">if</span> random<span class=\\"token punctuation\\">.</span>randint<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">10</span><span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&gt;</span> <span class=\\"token number\\">1</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token keyword\\">raise</span> IOError<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"Broken sauce, everything is hosed!!!111one\\"</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">else</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token string\\">\\"Awesome sauce!\\"</span>\\n\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>do_something_unreliable<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n</code></pre></div>","autoDesc":true}');export{w as comp,x as data};
