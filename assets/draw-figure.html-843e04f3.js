import{_ as d,Y as c,Z as p,$ as u,a1 as n,a0 as s,a3 as i,ac as m,ad as v,a2 as e,a4 as _,E as t}from"./framework-f3c57110.js";const g={},b=n("p",null,"使用 GhatGPT 辅助绘图。",-1),h={class:"table-of-contents"},k=n("h2",{id:"_1-生成-mermaid-图形代码",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-生成-mermaid-图形代码","aria-hidden":"true"},"#"),e(" 1. 生成 Mermaid 图形代码")],-1),x=_(`<p>生成示范：</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code>使用 Mermaid 语法绘制流程图，模仿下面的 Mermaid 代码风格。
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们就得到了下面的代码：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>graph TD
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下：</p>`,5),y=n("p",null,"同样适用于生成 E-R 图或者其他各种类型的图。",-1),f={id:"_2-配合-draw-io-使用",tabindex:"-1"},w=n("a",{class:"header-anchor",href:"#_2-配合-draw-io-使用","aria-hidden":"true"},"#",-1),q={href:"http://draw.io",target:"_blank",rel:"noopener noreferrer"},M={href:"http://draw.io",target:"_blank",rel:"noopener noreferrer"},V={href:"https://app.diagrams.net/",target:"_blank",rel:"noopener noreferrer"},I={href:"http://draw.io",target:"_blank",rel:"noopener noreferrer"},E=n("strong",null,"调整图形 (Arrange)",-1),N=n("strong",null,"插入 (Insert)",-1),C=n("strong",null,"高级 (Advanced)",-1),L=n("strong",null,"Mermaid...",-1),F=n("strong",null,"插入 (Insert)",-1),P={href:"https://mermaid.live/",target:"_blank",rel:"noopener noreferrer"},R=n("p",null,"同样也可以生成 PlantUML 图等图标，也可以从 SVG、CSV 等代码中导入。",-1);function S(T,A){const o=t("router-link"),r=t("VPCard"),l=t("Mermaid"),a=t("ExternalLinkIcon");return c(),p("div",null,[b,u(" more "),n("nav",h,[n("ul",null,[n("li",null,[s(o,{to:"#_1-生成-mermaid-图形代码"},{default:i(()=>[e("1. 生成 Mermaid 图形代码")]),_:1})]),n("li",null,[s(o,{to:"#_2-配合-draw-io-使用"},{default:i(()=>[e("2. 配合 draw.io 使用")]),_:1})])])]),k,s(r,m(v({title:"AI 提示",desc:"使用 Mermaid 语法绘制流程图，模仿下面的 Mermaid 代码风格。要求表示下面的 Python 代码，有开始和结束，正确表示输入输出。",link:"https://chat.openai.com/",logo:"/assets/chatgpt.svg",color:"rgba(226, 212, 255, 0.2)"})),null,16),x,s(l,{id:"mermaid-22",code:"eJxLL0osyFAIceFSAILiksSiEg0Npad7Gp4u71bS1FTQ1bVTyMwrKC0xjNZXerFv8tPWpQoVSvqxYOUQCbCalNTkzOLM/DzD6goFLYUKBV0FYwVbWwVTBftasFK4PFC1QmRqMVhTpWF0pYItULW+gjHERBRlfvkoRhsBjbbDNNEIxUQjsImmIDegmghWBjWx0hisygCiohLig/zSEiRvtu9SqIR5sxKkF64AImSMIQRlg8Vd81KAofh89+Rnc+cDQ5ELAA5gaI8="}),y,n("h2",f,[w,e(" 2. 配合 "),n("a",q,[e("draw.io"),s(a)]),e(" 使用")]),n("p",null,[e("使用 ChatGPT 生成对应图形代码，然后插入到 "),n("a",M,[e("draw.io"),s(a)]),e(" 中，即可快速绘制我们需要的图形。")]),n("p",null,[n("a",V,[e("draw.io"),s(a)]),e(" 是一个在线绘图工具，可以绘制各种图形，包括流程图、E-R 图、UML 图等等。")]),n("p",null,[e("如果需要将 Mermaid 图形转换为 "),n("a",I,[e("draw.io"),s(a)]),e(" 图形，可以点击菜单栏的 "),E,e(" -> "),N,e(" -> "),C,e(" -> "),L,e("，然后将 Mermaid 图形代码粘贴到弹出的对话框中，点击 "),F,e(" 即可。当然，"),n("a",P,[e("Mermaid 在线网站"),s(a)]),e(" 也可以完成这个功能，导出为 SVG 即可。")]),R])}const Y=d(g,[["render",S],["__file","draw-figure.html.vue"]]);export{Y as default};
