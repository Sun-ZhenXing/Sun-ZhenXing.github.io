import{_ as d}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as c,c as p,a as u,e as n,d as e,w as i,f as a,b as r}from"./app-32f6cd01.js";const m="/assets/strawberry-d483ced4.svg",g={},h=n("p",null,"使用 GhatGPT 辅助绘图。",-1),v={class:"table-of-contents"},_=r(`<h2 id="1-生成-mermaid-图形代码" tabindex="-1"><a class="header-anchor" href="#1-生成-mermaid-图形代码" aria-hidden="true">#</a> 1. 生成 Mermaid 图形代码</h2><div class="language-card" data-ext="card"><pre class="language-card"><code>title: AI 提示
desc: 使用 Mermaid 语法绘制流程图，模仿下面的 Mermaid 代码风格。要求表示下面的 Python 代码，有开始和结束，正确表示输入输出。
link: https://chat.openai.com/
logo: /assets/chatgpt.svg
color: rgba(226, 212, 255, 0.2)
</code></pre></div><p>生成示范：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>使用 Mermaid 语法绘制流程图，模仿下面的 Mermaid 代码风格。
要求表示下面的 Python 代码，有开始和结束，正确表示输入输出。

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">mermaid</span>
<span class="token code-block language-mermaid language-mermaid">graph TD
    start((&quot;开始&quot;)) --&gt; input1[/&quot;输入 x&quot;/]
    input1 --&gt; decision1{x &lt; 0 ?}
    decision1 -- Yes --&gt; y1[y = 0]
    decision1 -- No --&gt; y2[y = x * x]
    y1 --&gt; output1[/&quot;输出 y&quot;/]
    y2 --&gt; output1
    output1 --&gt; End((&quot;结束&quot;))</span>
<span class="token punctuation">\`\`\`</span></span>

<span class="token code"><span class="token punctuation">\`\`\`</span><span class="token code-language">python</span>
<span class="token code-block language-python language-python">x <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> x <span class="token operator">*</span> x <span class="token operator">-</span> <span class="token number">3</span> <span class="token operator">==</span> <span class="token number">5</span><span class="token punctuation">:</span>
    y <span class="token operator">=</span> x <span class="token operator">/</span> <span class="token number">3</span>
<span class="token keyword">elif</span> x <span class="token operator">&gt;</span> <span class="token number">5</span><span class="token punctuation">:</span>
    y <span class="token operator">=</span> <span class="token number">5</span> <span class="token operator">*</span> x
<span class="token keyword">else</span><span class="token punctuation">:</span>
    y <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="token punctuation">\`\`\`</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们就得到了下面的代码：</p><div class="language-text" data-ext="text"><pre class="language-text"><code>graph TD
    start((&quot;开始&quot;)) --&gt; input1[/&quot;输入 x&quot;/]
    input1 --&gt; decision1{x * x - 3 == 5 ?}
    decision1 -- Yes --&gt; y1[y = x / 3]
    decision1 -- No --&gt; decision2{x &gt; 5 ?}
    decision2 -- Yes --&gt; y2[y = 5 * x]
    decision2 -- No --&gt; y3[y = 0]
    y1 --&gt; output1[/&quot;输出 y&quot;/]
    y2 --&gt; output1
    y3 --&gt; output1
    output1 --&gt; End((&quot;结束&quot;))
</code></pre></div><p>效果如下：</p>`,7),k=n("p",null,"同样适用于生成 E-R 图或者其他各种类型的图。",-1),b={id:"2-配合-drawio-使用",tabindex:"-1"},x=n("a",{class:"header-anchor",href:"#2-配合-drawio-使用","aria-hidden":"true"},"#",-1),f={href:"http://draw.io",target:"_blank",rel:"noopener noreferrer"},y={href:"https://app.diagrams.net/",target:"_blank",rel:"noopener noreferrer"},w={href:"http://draw.io",target:"_blank",rel:"noopener noreferrer"},q={href:"http://draw.io",target:"_blank",rel:"noopener noreferrer"},M=n("strong",null,"调整图形 (Arrange)",-1),V=n("strong",null,"插入 (Insert)",-1),I=n("strong",null,"高级 (Advanced)",-1),T=n("strong",null,"Mermaid...",-1),G=n("strong",null,"插入 (Insert)",-1),P={href:"https://mermaid.live/",target:"_blank",rel:"noopener noreferrer"},S=r(`<p>同样也可以生成 PlantUML 图等图标，也可以从 SVG、CSV 等代码中导入。</p><h2 id="3-绘制复杂图形" tabindex="-1"><a class="header-anchor" href="#3-绘制复杂图形" aria-hidden="true">#</a> 3. 绘制复杂图形</h2><p>有几种思路：</p><ol><li>使用 ChatGPT 输出 SVG 代码，类似于上述方法</li><li>使用 ChatGPT 输出生成模型的提示词（Prompt），然后使用对应模型进行生成</li></ol><p>对于第一种方法，已经有人尝试，不过在 GPT-3.5 上效果还不够理想，在 GPT-4 上可能会有更好的效果。</p><div class="language-card" data-ext="card"><pre class="language-card"><code>title: AI 提示
desc: 给出一个标准的 SVG 图标的代码，要求内容为草莓，Material 3D 风格，主题色为红色，要美观大方。
link: https://chat.openai.com/
logo: /assets/chatgpt.svg
color: rgba(226, 212, 255, 0.2)
</code></pre></div><p>目前 GPT-3.5 的输出：</p><figure><img src="`+m+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>显然这和草莓并没有什么关系，但这已经是准确的 SVG 代码了，相信不久 GPT 就有能力绘制更复杂的图形了。</p>',9);function N(C,E){const t=o("router-link"),l=o("Mermaid"),s=o("ExternalLinkIcon");return c(),p("div",null,[h,u(" more "),n("nav",v,[n("ul",null,[n("li",null,[e(t,{to:"#1-生成-mermaid-图形代码"},{default:i(()=>[a("1. 生成 Mermaid 图形代码")]),_:1})]),n("li",null,[e(t,{to:"#2-配合-drawio-使用"},{default:i(()=>[a("2. 配合 draw.io 使用")]),_:1})]),n("li",null,[e(t,{to:"#3-绘制复杂图形"},{default:i(()=>[a("3. 绘制复杂图形")]),_:1})])])]),_,e(l,{id:"mermaid-22",code:"eJxLL0osyFAIceFSAILiksSiEg0Npad7Gp4u71bS1FTQ1bVTyMwrKC0xjNZXerFv8tPWpQoVSvqxYOUQCbCalNTkzOLM/DzD6goFLYUKBV0FYwVbWwVTBftasFK4PFC1QmRqMVhTpWF0pYItULW+gjHERBRlfvkoRhsBjbbDNNEIxUQjsImmIDegmghWBjWx0hisygCiohLig/zSEiRvtu9SqIR5sxKkF64AImSMIQRlg8Vd81KAofh89+Rnc+cDQ5ELAA5gaI8="}),k,n("h2",b,[x,a(" 2. 配合 "),n("a",f,[a("draw.io"),e(s)]),a(" 使用")]),n("p",null,[n("a",y,[a("draw.io"),e(s)]),a(" 是一个在线绘图工具，可以绘制各种图形，包括流程图、E-R 图、UML 图等等。")]),n("p",null,[a("使用 ChatGPT 生成对应图形代码，然后插入到 "),n("a",w,[a("draw.io"),e(s)]),a(" 中，即可快速绘制我们需要的图形。")]),n("p",null,[a("如果需要将 Mermaid 图形转换为 "),n("a",q,[a("draw.io"),e(s)]),a(" 图形，可以点击菜单栏的 "),M,a(" -> "),V,a(" -> "),I,a(" -> "),T,a("，然后将 Mermaid 图形代码粘贴到弹出的对话框中，点击 "),G,a(" 即可。当然，"),n("a",P,[a("Mermaid 在线网站"),e(s)]),a(" 也可以完成这个功能，导出为 SVG 即可。")]),S])}const A=d(g,[["render",N],["__file","draw-figure.html.vue"]]);export{A as default};
