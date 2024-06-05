import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as h,c as p,b as s,a as l,w as t,e as r,d as i}from"./app-mQJDQ8JG.js";const k={},c=s("p",null,"鸭梨定义的 Markdown 文本写作规范。",-1),d={class:"table-of-contents"},o=r(`<h2 id="1-基本规范" tabindex="-1"><a class="header-anchor" href="#1-基本规范"><span>1. 基本规范</span></a></h2><h3 id="11-文件约束" tabindex="-1"><a class="header-anchor" href="#11-文件约束"><span>1.1 文件约束</span></a></h3><ol><li>文本编码：全部使用 UTF-8 编码。</li><li>文件名：首选使用 kebab-case 命名法（即只使用小写字母或数字，并使用 <code>-</code> 连接单词）。</li></ol><h3 id="12-文本约束" tabindex="-1"><a class="header-anchor" href="#12-文本约束"><span>1.2 文本约束</span></a></h3><ol><li>如果有元数据（Front Matter），则应该使用三个连字符（<code>---</code>）包裹，使用标准的 YAML 语法并尽可能简洁。</li><li>文本摘要在 <code>&lt;!-- more --&gt;</code> 段落的上方，在元数据的下方，各自之间都有空行。</li><li>标题的上下留有空行，一级标题上可以没有空行，一篇文章只有一个一级标题。</li><li>段落之间留有一个空行，段落中遇到应该使用空格的地方可以用换行代替，其他地方不要换行。 <blockquote><p>这里建议不要换行，编辑器会帮助你换行，而 MarkDown 常常被渲染成网页，也不需要手动换行。</p></blockquote></li><li>中文和英文、中文和数字、中文和公式、代码字体和其他部分之间要空格，除非在标点符号旁边。</li><li>英文的逗号后加空格，其他语言遵循对应语言规范，中文中不要随意加空格。</li><li>加粗、斜体、下划线或删除线的内容，可以与前后文本留有空格，链接也可以在前后加上空格，不强制。</li></ol><h3 id="13-样式约束" tabindex="-1"><a class="header-anchor" href="#13-样式约束"><span>1.3 样式约束</span></a></h3><ol><li>在正文中建议使用 4 个空格缩进，这样能兼容性最多的编辑器，而代码块和元数据可以按照习惯缩进。</li><li>不要为了表现效果而装饰元素，一切要依照内容来编写。 <blockquote><p>例如不要大量使用强调、加粗、斜体、下划线或删除线，不要大量使用代码字体表达专有名词。</p></blockquote></li><li>不要在列表元素上嵌套过深，列表元素应该简短、紧凑。 <blockquote><p>反例：</p><ul><li>1 <ul><li>1.1 <ul><li>1.1.1 <ul><li>1.1.1.1</li></ul></li></ul></li></ul></li></ul></blockquote></li></ol><h2 id="2-代码块" tabindex="-1"><a class="header-anchor" href="#2-代码块"><span>2. 代码块</span></a></h2><p>代码块上下必须留有空行，且代码块全部使用反引号（<code>\`\`\`</code>）来约束。不应该使用缩进表达代码，这会导致不正确的空格数量。</p><p>如果一个代码块中的所有代码都被缩进了指定长度，则应该将此缩进去掉，以便于阅读。例如：</p><div class="language-javascript" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 这里的代码块缩进了 2 个空格</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">  console</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">}</span></span></code></pre></div><div class="language-javascript" data-highlighter="shiki" data-ext="javascript" data-title="javascript" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 这是从一个 JS 文件中复制来的</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">// 它有不正确的缩进，应该去掉 6 个空格的缩进</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">      for</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 10</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">; </span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E5C07B;">        console</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;">i</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">      }</span></span></code></pre></div><p>尽可能给代码块标记语言，以便于编辑器高亮显示或用户识别，避免使用编辑器提供的自动识别语言。</p><p>语言标记尽量写全称，而不是简写，这样可以兼容大多数编辑器。例如 Python 不应该写作 <code>py</code>，而应该写作 <code>python</code>。但是也有例外，必须常用的 <code>js</code>、<code>ts</code> 也可以被多数编辑器支持。</p><p>如果代码块又需要包含三个反引号（即嵌套 MarkDown 语法的代码块），使用四个反引号（<code>\`\`\`\`</code>）来约束。</p><div class="language-markdown line-numbers-mode" data-highlighter="shiki" data-ext="markdown" data-title="markdown" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">我们常常需要表达 MarkDown 自己的语法，使用四个反引号包裹三个反引号吧！</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">\`\`\`python</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;"> range</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(i)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">\`\`\`</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="3-公式" tabindex="-1"><a class="header-anchor" href="#3-公式"><span>3. 公式</span></a></h2><ol><li>公式推荐使用 KaTeX 提供的语法，更快且兼容性更好。</li><li>行内公式使用 <code>$</code> 包裹，公式内靠近 <code>$</code> 的地方不能有空格（例如 <code>$x$</code> 是正确写法，而 <code>$ x $</code> 是错误的）。</li><li>行间公式的范围符号 <code>$$</code> 单独占一行，且公式上下有空行。</li></ol><div class="language-latex" data-highlighter="shiki" data-ext="latex" data-title="latex" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#E5C07B;">$$</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\begin</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">aligned</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">  x_{</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">,</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\,</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">} = </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">\\frac</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">{-b </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">\\pm</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> \\sqrt</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">{b^</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;"> - </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">ac}}{</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">a}</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">\\end</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">aligned</span><span style="--shiki-light:#005CC5;--shiki-dark:#E5C07B;">}</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#E5C07B;">$$</span></span></code></pre></div>`,19),g=s("p",{class:"katex-block"},[s("span",{class:"katex-display"},[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[s("semantics",null,[s("mtable",{rowspacing:"0.25em",columnalign:"right",columnspacing:""},[s("mtr",null,[s("mtd",null,[s("mstyle",{scriptlevel:"0",displaystyle:"true"},[s("mrow",null,[s("msub",null,[s("mi",null,"x"),s("mrow",null,[s("mn",null,"1"),s("mo",{separator:"true"},","),s("mtext",null," "),s("mn",null,"2")])]),s("mo",null,"="),s("mfrac",null,[s("mrow",null,[s("mo",null,"−"),s("mi",null,"b"),s("mo",null,"±"),s("msqrt",null,[s("mrow",null,[s("msup",null,[s("mi",null,"b"),s("mn",null,"2")]),s("mo",null,"−"),s("mn",null,"4"),s("mi",null,"a"),s("mi",null,"c")])])]),s("mrow",null,[s("mn",null,"2"),s("mi",null,"a")])])])])])])]),s("annotation",{encoding:"application/x-tex"}," \\begin{aligned} x_{1,\\,2} = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a} \\end{aligned} ")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.5764em","vertical-align":"-1.0382em"}}),s("span",{class:"mord"},[s("span",{class:"mtable"},[s("span",{class:"col-align-r"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.5382em"}},[s("span",{style:{top:"-3.5382em"}},[s("span",{class:"pstrut",style:{height:"3.5904em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"x"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.3011em"}},[s("span",{style:{top:"-2.55em","margin-left":"0em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"1"),s("span",{class:"mpunct mtight"},","),s("span",{class:"mspace mtight",style:{"margin-right":"0.1952em"}}),s("span",{class:"mord mtight"},"2")])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.2861em"}},[s("span")])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.5904em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"mord mathnormal"},"a")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"−"),s("span",{class:"mord mathnormal"},"b"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"±"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord sqrt"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.9134em"}},[s("span",{class:"svg-align",style:{top:"-3em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord",style:{"padding-left":"0.833em"}},[s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"b"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.7401em"}},[s("span",{style:{top:"-2.989em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},"2")])])])])])])]),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"−"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mord"},"4"),s("span",{class:"mord mathnormal"},"a"),s("span",{class:"mord mathnormal"},"c")])]),s("span",{style:{top:"-2.8734em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"hide-tail",style:{"min-width":"0.853em",height:"1.08em"}},[s("svg",{xmlns:"http://www.w3.org/2000/svg",width:"400em",height:"1.08em",viewBox:"0 0 400000 1080",preserveAspectRatio:"xMinYMin slice"},[s("path",{d:`M95,702
c-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14
c0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54
c44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10
s173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429
c69,-144,104.5,-217.7,106.5,-221
l0 -0
c5.3,-9.3,12,-14,20,-14
H400000v40H845.2724
s-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7
c-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z
M834 80h400000v40h-400000z`})])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.1266em"}},[s("span")])])])])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})])])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.0382em"}},[s("span")])])])])])])])])])])],-1),m=s("p",null,[i("公式内的 "),s("code",null,","),i(" 后边建议给出空格符号（可以使用 "),s("code",null,"\\\\"),i(" 或者 "),s("code",null,"\\,"),i("），以便于阅读。")],-1);function y(u,C){const a=e("router-link");return h(),p("div",null,[c,s("nav",d,[s("ul",null,[s("li",null,[l(a,{to:"#1-基本规范"},{default:t(()=>[i("1. 基本规范")]),_:1}),s("ul",null,[s("li",null,[l(a,{to:"#11-文件约束"},{default:t(()=>[i("1.1 文件约束")]),_:1})]),s("li",null,[l(a,{to:"#12-文本约束"},{default:t(()=>[i("1.2 文本约束")]),_:1})]),s("li",null,[l(a,{to:"#13-样式约束"},{default:t(()=>[i("1.3 样式约束")]),_:1})])])]),s("li",null,[l(a,{to:"#2-代码块"},{default:t(()=>[i("2. 代码块")]),_:1})]),s("li",null,[l(a,{to:"#3-公式"},{default:t(()=>[i("3. 公式")]),_:1})])])]),o,g,m])}const b=n(k,[["render",y],["__file","writing-norms.html.vue"]]),E=JSON.parse('{"path":"/posts/meta/writing-norms.html","title":"鸭梨写作规范","lang":"zh-CN","frontmatter":{"title":"鸭梨写作规范","date":"2023-03-27T00:00:00.000Z","category":["元定义"],"tag":["元定义","规范"],"description":"鸭梨定义的 Markdown 文本写作规范。","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/posts/meta/writing-norms.html"}],["meta",{"property":"og:site_name","content":"鸭梨"}],["meta",{"property":"og:title","content":"鸭梨写作规范"}],["meta",{"property":"og:description","content":"鸭梨定义的 Markdown 文本写作规范。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-02T16:16:12.000Z"}],["meta",{"property":"article:author","content":"Alex Sun"}],["meta",{"property":"article:tag","content":"元定义"}],["meta",{"property":"article:tag","content":"规范"}],["meta",{"property":"article:published_time","content":"2023-03-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-02T16:16:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"鸭梨写作规范\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-02T16:16:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Alex Sun\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[{"level":2,"title":"1. 基本规范","slug":"1-基本规范","link":"#1-基本规范","children":[{"level":3,"title":"1.1 文件约束","slug":"11-文件约束","link":"#11-文件约束","children":[]},{"level":3,"title":"1.2 文本约束","slug":"12-文本约束","link":"#12-文本约束","children":[]},{"level":3,"title":"1.3 样式约束","slug":"13-样式约束","link":"#13-样式约束","children":[]}]},{"level":2,"title":"2. 代码块","slug":"2-代码块","link":"#2-代码块","children":[]},{"level":2,"title":"3. 公式","slug":"3-公式","link":"#3-公式","children":[]}],"git":{"createdTime":1679899044000,"updatedTime":1709396172000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":3}]},"readingTime":{"minutes":3.33,"words":1000},"filePathRelative":"posts/meta/writing-norms.md","localizedDate":"2023年3月27日","excerpt":"<p>鸭梨定义的 Markdown 文本写作规范。</p>\\n","autoDesc":true}');export{b as comp,E as data};
