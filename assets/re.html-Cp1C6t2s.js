import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as r,c as d,b as n,a,w as t,d as s,e as p}from"./app-DhX54nll.js";const i={},u=n("h1",{id:"re---正则表达式",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#re---正则表达式"},[n("span",null,"re - 正则表达式")])],-1),k={class:"table-of-contents"},h=p('<h2 id="1-正则表达式模块" tabindex="-1"><a class="header-anchor" href="#1-正则表达式模块"><span>1. 正则表达式模块</span></a></h2><table><thead><tr><th>项目</th><th>信息</th></tr></thead><tbody><tr><td>源代码</td><td><a href="https://github.com/python/cpython/tree/3.11/Lib/re/" target="_blank" rel="noopener noreferrer">Lib/re/</a></td></tr><tr><td>Python 版本</td><td>全版本</td></tr><tr><td>标签</td><td>文件和目录</td></tr></tbody></table><div class="hint-container info"><p class="hint-container-title">第三方支持</p><p>第三方模块 <a href="https://pypi.org/project/regex/" target="_blank" rel="noopener noreferrer"><code>regex</code></a>，提供了与标准库 <code>re</code> 模块兼容的 API 接口，同时，还提供了更多功能和更全面的 Unicode 支持</p></div><h2 id="2-flag-标记" tabindex="-1"><a class="header-anchor" href="#2-flag-标记"><span>2. Flag 标记</span></a></h2><h3 id="21-语言相关" tabindex="-1"><a class="header-anchor" href="#21-语言相关"><span>2.1 语言相关</span></a></h3><p><code>re.A</code> / <code>re.ASCII</code>：让 <code>\\w</code>、<code>\\W</code>、<code>\\b</code>、<code>\\B</code>、<code>\\d</code>、<code>\\D</code>、<code>\\s</code>、<code>\\S</code> 只匹配 <code>ASCII</code>，而不是 <code>Unicode</code>，对应内联为 <code>(?a)</code>。</p><p><code>re.L</code> / <code>re.LOCALE</code>：由语言确定大小写敏感和 ASCII 匹配，这个标记 <strong>不推荐使用</strong>，因为语言区域机制很不可靠，它一次只能处理一个 “习惯”，而且只对 8 位字节有效，对应内联为 <code>(?L)</code>。</p><h3 id="22-多行匹配" tabindex="-1"><a class="header-anchor" href="#22-多行匹配"><span>2.2 多行匹配</span></a></h3><p><code>re.S</code> / <code>re.DOTALL</code>：让 <code>&quot;.&quot;</code> 特殊字符匹配任何字符，包括换行符，对应内联为 <code>(?s)</code>。</p><p><code>re.M</code> / <code>re.MULTILINE</code>：多行匹配，对应内联为 <code>(?m)</code>。</p><h3 id="23-其他标记" tabindex="-1"><a class="header-anchor" href="#23-其他标记"><span>2.3 其他标记</span></a></h3><p><code>re.I</code> / <code>re.IGNORECASE</code>：进行忽略大小写匹配，对应内联为 <code>(?i)</code>。</p><p><code>re.X</code> / <code>re.VERBOSE</code>：这个标记允许你编写更具可读性更友好的正则表达式。通过分段和添加注释。空白符号会被忽略，除非在一个字符集合当中或者由反斜杠转义，对应内联为 <code>(?x)</code>。</p><p><code>re.DEBUG</code>：显示编译时的 debug 信息。</p><h2 id="3-标记字符" tabindex="-1"><a class="header-anchor" href="#3-标记字符"><span>3. 标记字符</span></a></h2><h3 id="31-常见字符和转义字符" tabindex="-1"><a class="header-anchor" href="#31-常见字符和转义字符"><span>3.1 常见字符和转义字符</span></a></h3><p>你可以在大多数教程上学到常见字符，如 <code>. ^ $ [...] |</code>。</p><table><thead><tr><th>符号</th><th>含义</th><th>相反含义</th></tr></thead><tbody><tr><td><code>\\A</code></td><td>相当于 <code>^</code></td><td><code>\\Z</code></td></tr><tr><td><code>\\b</code></td><td>空字符串，但只在单词开始或结尾的位置</td><td><code>\\B</code></td></tr><tr><td><code>\\d</code></td><td>数字</td><td><code>\\D</code></td></tr><tr><td><code>\\s</code></td><td>空白字符</td><td><code>\\S</code></td></tr><tr><td><code>\\w</code></td><td>单词字符</td><td><code>\\W</code></td></tr></tbody></table><h3 id="32-贪婪和非贪婪" tabindex="-1"><a class="header-anchor" href="#32-贪婪和非贪婪"><span>3.2 贪婪和非贪婪</span></a></h3><p>修饰符都是贪婪的，它们在字符串进行尽可能多的匹配，一个简单的方法是，加上 <code>?</code> 可以变为非贪婪的。如 <code>{m,n}?</code> 或者 <code>??</code>。</p><table><thead><tr><th>表达式</th><th>含义</th></tr></thead><tbody><tr><td><code>?</code></td><td>相当于 <code>{0,1}</code></td></tr><tr><td><code>*</code></td><td>相当于 <code>{0,}</code></td></tr><tr><td><code>+</code></td><td>相当于 <code>{1,}</code></td></tr></tbody></table><h3 id="33-匹配组和集合" tabindex="-1"><a class="header-anchor" href="#33-匹配组和集合"><span>3.3 匹配组和集合</span></a></h3><table><thead><tr><th>表达式</th><th>含义</th></tr></thead><tbody><tr><td><code>(?P&lt;name&gt;...)</code></td><td>命名组</td></tr><tr><td><code>()</code></td><td>捕获组</td></tr><tr><td><code>(?:...)</code></td><td>非捕获合</td></tr><tr><td><code>(?&lt;tags&gt;)</code></td><td>内联，<code>&lt;tags&gt;</code> 可以是 <code>aiLmsux</code> 中的一个或多个</td></tr><tr><td><code>(?aiLmsux-imsx:...)</code> <em>@3.6+</em></td><td>去除标记</td></tr><tr><td><code>(?P=name)</code></td><td>引用一个组合</td></tr><tr><td><code>(?#…)</code></td><td>注释</td></tr></tbody></table><h2 id="4-断言" tabindex="-1"><a class="header-anchor" href="#4-断言"><span>4. 断言</span></a></h2>',24),m=n("strong",null,"零宽断言",-1),b=p(`<h3 id="41-前视后视断言" tabindex="-1"><a class="header-anchor" href="#41-前视后视断言"><span>4.1 前视后视断言</span></a></h3><table><thead><tr><th>表达式</th><th>含义</th></tr></thead><tbody><tr><td><code>(?=...)</code></td><td>前视断言</td></tr><tr><td><code>(?!...)</code></td><td>前视取反</td></tr><tr><td><code>(?&lt;=...)</code></td><td>后视断言</td></tr><tr><td><code>(?&lt;!...)</code></td><td>后视取反</td></tr></tbody></table><h3 id="42-条件断言" tabindex="-1"><a class="header-anchor" href="#42-条件断言"><span>4.2 条件断言</span></a></h3><p><code>(?(id/name)yes-pattern|no-pattern)</code> 存在为第一个表达式，否则选择第二个匹配。</p><h2 id="5-模块内容参考" tabindex="-1"><a class="header-anchor" href="#5-模块内容参考"><span>5. 模块内容参考</span></a></h2><h3 id="51-函数" tabindex="-1"><a class="header-anchor" href="#51-函数"><span>5.1 函数</span></a></h3><table><thead><tr><th>函数</th><th>功能</th></tr></thead><tbody><tr><td><code>re.compile(pattern, flags=0) -&gt; Pattern</code></td><td>编译正则表达式</td></tr><tr><td><code>re.search(pattern, string, flags=0) -&gt; Match/None</code></td><td>扫描整个 <code>string</code> 找到匹配样式的第一个位置，并返回一个相应的匹配对象</td></tr><tr><td><code>re.match(pattern, string, flags=0) -&gt; Match/None</code></td><td>如果 <code>string</code> 开始的零个或者多个字符匹配到了正则表达式样式，就返回一个相应的匹配对象</td></tr><tr><td><code>re.fullmatch(pattern, string, flags=0) -&gt; Match/None</code> <em>@3.6+</em></td><td>如果整个 <code>string</code> 匹配到正则表达式样式，就返回一个相应的匹配对象</td></tr><tr><td><code>re.split(pattern, string, maxsplit=0, flags=0) -&gt; list[str]</code></td><td>用 <code>pattern</code> 分开 <code>string</code>。如果在 <code>pattern</code> 中捕获到括号，那么所有的组里的文字也会包含在列表里</td></tr><tr><td><code>re.findall(pattern, string, flags=0) -&gt; list[tuple/str]</code></td><td>如果正则表达式中没有组，则返回列表内是字符串，否则是元组</td></tr><tr><td><code>re.finditer(pattern, string, flags=0) -&gt; iterator</code></td><td><code>pattern</code> 在 <code>string</code> 里所有的非重复匹配，返回为一个迭代器 <code>iterator</code> 保存了匹配对象</td></tr><tr><td><code>re.sub(pattern, repl, string, count=0, flags=0) -&gt; str</code></td><td>替换非重叠匹配的字符串</td></tr><tr><td><code>re.subn(pattern, repl, string, count=0, flags=0) -&gt; tuple[str, int]</code></td><td>行为与 <code>sub()</code> 相同，但是返回一个元组 <code>(str, num)</code> 分别是字符串和替换次数</td></tr><tr><td><code>re.escape(pattern) -&gt; str</code></td><td>转义 <code>pattern</code> 中的特殊字符</td></tr><tr><td><code>re.purge()</code></td><td>清除正则表达式的缓存</td></tr><tr><td><code>Exception re.error(msg, pattern=None, pos=None)</code></td><td>正则表达式错误类</td></tr></tbody></table><p>注：注意即便是 <code>MULTILINE</code> 模式，<code>re.match()</code> 也只匹配字符串的开始位置，而不匹配每行开始。</p><h3 id="52-pattern-对象" tabindex="-1"><a class="header-anchor" href="#52-pattern-对象"><span>5.2 Pattern 对象</span></a></h3><p>下列方法基本与上面的函数用法一致，只不过多了一些 <code>pos</code> 等位置参数。</p><table><thead><tr><th>方法</th></tr></thead><tbody><tr><td><code>Pattern.search(string[, pos[, endpos]])</code></td></tr><tr><td><code>Pattern.match(string[, pos[, endpos]])</code></td></tr><tr><td><code>Pattern.fullmatch(string[, pos[, endpos]])</code> <em>@3.6+</em></td></tr><tr><td><code>Pattern.split(string, maxsplit=0)</code></td></tr><tr><td><code>Pattern.findall(string[, pos[, endpos]])</code></td></tr><tr><td><code>Pattern.finditer(string[, pos[, endpos]])</code></td></tr><tr><td><code>Pattern.sub(repl, string, count=0)</code></td></tr><tr><td><code>Pattern.subn(repl, string, count=0)</code></td></tr></tbody></table><table><thead><tr><th>属性</th><th>内容</th></tr></thead><tbody><tr><td><code>Pattern.flags</code></td><td>正则匹配标记</td></tr><tr><td><code>Pattern.groups</code></td><td>捕获到的模式串中组的数量</td></tr><tr><td><code>Pattern.groupindex</code></td><td>映射由 <code>(?P&lt;id&gt;)</code> 定义的命名符号组合和数字组合的字典</td></tr><tr><td><code>Pattern.pattern</code></td><td>编译对象的原始样式字符串</td></tr></tbody></table><h3 id="53-match-对象" tabindex="-1"><a class="header-anchor" href="#53-match-对象"><span>5.3 Match 对象</span></a></h3><table><thead><tr><th>方法</th><th>内容</th></tr></thead><tbody><tr><td><code>Match.expand(template)</code></td><td>进行反斜杠和组的替换</td></tr><tr><td><code>Match.group([group1, ...])</code></td><td>返回匹配组</td></tr><tr><td><code>Match[g]</code> <em>@3.6+</em></td><td>等同于 <code>Match.group(g)</code></td></tr><tr><td><code>Match.groups(default=None)</code></td><td>匹配的所有组</td></tr><tr><td><code>Match.groupdict(default=None)</code></td><td>以字典的方式返回组</td></tr><tr><td><code>Match.start([group])</code></td><td>某个组的开始标号</td></tr><tr><td><code>Match.end([group])</code></td><td>某个组的结束标号</td></tr><tr><td><code>Match.span([group])</code></td><td>返回 <code>(m.start(group), m.end(group))</code> 如果没有返回 <code>(-1, -1)</code></td></tr></tbody></table><table><thead><tr><th>属性</th><th>内容</th></tr></thead><tbody><tr><td><code>Match.pos</code></td><td><code>pos</code></td></tr><tr><td><code>Match.endpos</code></td><td><code>endpos</code></td></tr><tr><td><code>Match.lastindex</code></td><td>最后一个组的索引</td></tr><tr><td><code>Match.lastgroup</code></td><td>最后一个组</td></tr><tr><td><code>Match.re</code></td><td><code>Pattern</code> 对象</td></tr><tr><td><code>Match.string</code></td><td>原始字符串</td></tr></tbody></table><h2 id="6-示例写一个词法分析器" tabindex="-1"><a class="header-anchor" href="#6-示例写一个词法分析器"><span>6. 示例：写一个词法分析器</span></a></h2><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> typing <span class="token keyword">import</span> NamedTuple
<span class="token keyword">import</span> re

<span class="token keyword">class</span> <span class="token class-name">Token</span><span class="token punctuation">(</span>NamedTuple<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token builtin">type</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
    value<span class="token punctuation">:</span> <span class="token builtin">str</span>
    line<span class="token punctuation">:</span> <span class="token builtin">int</span>
    column<span class="token punctuation">:</span> <span class="token builtin">int</span>

<span class="token keyword">def</span> <span class="token function">tokenize</span><span class="token punctuation">(</span>code<span class="token punctuation">)</span><span class="token punctuation">:</span>
    keywords <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;IF&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;THEN&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ENDIF&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;FOR&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;NEXT&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;GOSUB&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;RETURN&#39;</span><span class="token punctuation">}</span>
    token_specification <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token punctuation">(</span><span class="token string">&#39;NUMBER&#39;</span><span class="token punctuation">,</span>   <span class="token string">r&#39;\\d+(\\.\\d*)?&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>  <span class="token comment"># Integer or decimal number</span>
        <span class="token punctuation">(</span><span class="token string">&#39;ASSIGN&#39;</span><span class="token punctuation">,</span>   <span class="token string">r&#39;:=&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>           <span class="token comment"># Assignment operator</span>
        <span class="token punctuation">(</span><span class="token string">&#39;END&#39;</span><span class="token punctuation">,</span>      <span class="token string">r&#39;;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>            <span class="token comment"># Statement terminator</span>
        <span class="token punctuation">(</span><span class="token string">&#39;ID&#39;</span><span class="token punctuation">,</span>       <span class="token string">r&#39;[A-Za-z]+&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>    <span class="token comment"># Identifiers</span>
        <span class="token punctuation">(</span><span class="token string">&#39;OP&#39;</span><span class="token punctuation">,</span>       <span class="token string">r&#39;[+\\-*/]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>      <span class="token comment"># Arithmetic operators</span>
        <span class="token punctuation">(</span><span class="token string">&#39;NEWLINE&#39;</span><span class="token punctuation">,</span>  <span class="token string">r&#39;\\n&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>           <span class="token comment"># Line endings</span>
        <span class="token punctuation">(</span><span class="token string">&#39;SKIP&#39;</span><span class="token punctuation">,</span>     <span class="token string">r&#39;[ \\t]+&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>       <span class="token comment"># Skip over spaces and tabs</span>
        <span class="token punctuation">(</span><span class="token string">&#39;MISMATCH&#39;</span><span class="token punctuation">,</span> <span class="token string">r&#39;.&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>            <span class="token comment"># Any other character</span>
    <span class="token punctuation">]</span>
    tok_regex <span class="token operator">=</span> <span class="token string">&#39;|&#39;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token string">&#39;(?P&lt;%s&gt;%s)&#39;</span> <span class="token operator">%</span> pair <span class="token keyword">for</span> pair <span class="token keyword">in</span> token_specification<span class="token punctuation">)</span>
    line_num <span class="token operator">=</span> <span class="token number">1</span>
    line_start <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">for</span> mo <span class="token keyword">in</span> re<span class="token punctuation">.</span>finditer<span class="token punctuation">(</span>tok_regex<span class="token punctuation">,</span> code<span class="token punctuation">)</span><span class="token punctuation">:</span>
        kind <span class="token operator">=</span> mo<span class="token punctuation">.</span>lastgroup
        value <span class="token operator">=</span> mo<span class="token punctuation">.</span>group<span class="token punctuation">(</span><span class="token punctuation">)</span>
        column <span class="token operator">=</span> mo<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> line_start
        <span class="token keyword">if</span> kind <span class="token operator">==</span> <span class="token string">&#39;NUMBER&#39;</span><span class="token punctuation">:</span>
            value <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token keyword">if</span> <span class="token string">&#39;.&#39;</span> <span class="token keyword">in</span> value <span class="token keyword">else</span> <span class="token builtin">int</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
        <span class="token keyword">elif</span> kind <span class="token operator">==</span> <span class="token string">&#39;ID&#39;</span> <span class="token keyword">and</span> value <span class="token keyword">in</span> keywords<span class="token punctuation">:</span>
            kind <span class="token operator">=</span> value
        <span class="token keyword">elif</span> kind <span class="token operator">==</span> <span class="token string">&#39;NEWLINE&#39;</span><span class="token punctuation">:</span>
            line_start <span class="token operator">=</span> mo<span class="token punctuation">.</span>end<span class="token punctuation">(</span><span class="token punctuation">)</span>
            line_num <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token keyword">continue</span>
        <span class="token keyword">elif</span> kind <span class="token operator">==</span> <span class="token string">&#39;SKIP&#39;</span><span class="token punctuation">:</span>
            <span class="token keyword">continue</span>
        <span class="token keyword">elif</span> kind <span class="token operator">==</span> <span class="token string">&#39;MISMATCH&#39;</span><span class="token punctuation">:</span>
            <span class="token keyword">raise</span> RuntimeError<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;</span><span class="token interpolation"><span class="token punctuation">{</span>value<span class="token conversion-option punctuation">!r</span><span class="token punctuation">}</span></span><span class="token string"> unexpected on line </span><span class="token interpolation"><span class="token punctuation">{</span>line_num<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
        <span class="token keyword">yield</span> Token<span class="token punctuation">(</span>kind<span class="token punctuation">,</span> value<span class="token punctuation">,</span> line_num<span class="token punctuation">,</span> column<span class="token punctuation">)</span>

statements <span class="token operator">=</span> <span class="token triple-quoted-string string">&#39;&#39;&#39;
    IF quantity THEN
        total := total + price * quantity;
        tax := price * 0.05;
    ENDIF;
&#39;&#39;&#39;</span>

<span class="token keyword">for</span> token <span class="token keyword">in</span> tokenize<span class="token punctuation">(</span>statements<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该词法器产生以下的输出：</p><div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code>Token<span class="token punctuation">(</span><span class="token builtin">type</span><span class="token operator">=</span><span class="token string">&#39;IF&#39;</span><span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token string">&#39;IF&#39;</span><span class="token punctuation">,</span> line<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> column<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">)</span>
Token<span class="token punctuation">(</span><span class="token builtin">type</span><span class="token operator">=</span><span class="token string">&#39;ID&#39;</span><span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token string">&#39;quantity&#39;</span><span class="token punctuation">,</span> line<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> column<span class="token operator">=</span><span class="token number">7</span><span class="token punctuation">)</span>
Token<span class="token punctuation">(</span><span class="token builtin">type</span><span class="token operator">=</span><span class="token string">&#39;THEN&#39;</span><span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token string">&#39;THEN&#39;</span><span class="token punctuation">,</span> line<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> column<span class="token operator">=</span><span class="token number">16</span><span class="token punctuation">)</span>
Token<span class="token punctuation">(</span><span class="token builtin">type</span><span class="token operator">=</span><span class="token string">&#39;ID&#39;</span><span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token string">&#39;total&#39;</span><span class="token punctuation">,</span> line<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> column<span class="token operator">=</span><span class="token number">8</span><span class="token punctuation">)</span>
Token<span class="token punctuation">(</span><span class="token builtin">type</span><span class="token operator">=</span><span class="token string">&#39;ASSIGN&#39;</span><span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token string">&#39;:=&#39;</span><span class="token punctuation">,</span> line<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> column<span class="token operator">=</span><span class="token number">14</span><span class="token punctuation">)</span>
Token<span class="token punctuation">(</span><span class="token builtin">type</span><span class="token operator">=</span><span class="token string">&#39;ID&#39;</span><span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token string">&#39;total&#39;</span><span class="token punctuation">,</span> line<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> column<span class="token operator">=</span><span class="token number">17</span><span class="token punctuation">)</span>
Token<span class="token punctuation">(</span><span class="token builtin">type</span><span class="token operator">=</span><span class="token string">&#39;OP&#39;</span><span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token string">&#39;+&#39;</span><span class="token punctuation">,</span> line<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> column<span class="token operator">=</span><span class="token number">23</span><span class="token punctuation">)</span>
Token<span class="token punctuation">(</span><span class="token builtin">type</span><span class="token operator">=</span><span class="token string">&#39;ID&#39;</span><span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token string">&#39;price&#39;</span><span class="token punctuation">,</span> line<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> column<span class="token operator">=</span><span class="token number">25</span><span class="token punctuation">)</span>
Token<span class="token punctuation">(</span><span class="token builtin">type</span><span class="token operator">=</span><span class="token string">&#39;OP&#39;</span><span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> line<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> column<span class="token operator">=</span><span class="token number">31</span><span class="token punctuation">)</span>
Token<span class="token punctuation">(</span><span class="token builtin">type</span><span class="token operator">=</span><span class="token string">&#39;ID&#39;</span><span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token string">&#39;quantity&#39;</span><span class="token punctuation">,</span> line<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> column<span class="token operator">=</span><span class="token number">33</span><span class="token punctuation">)</span>
Token<span class="token punctuation">(</span><span class="token builtin">type</span><span class="token operator">=</span><span class="token string">&#39;END&#39;</span><span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token string">&#39;;&#39;</span><span class="token punctuation">,</span> line<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> column<span class="token operator">=</span><span class="token number">41</span><span class="token punctuation">)</span>
Token<span class="token punctuation">(</span><span class="token builtin">type</span><span class="token operator">=</span><span class="token string">&#39;ID&#39;</span><span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token string">&#39;tax&#39;</span><span class="token punctuation">,</span> line<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">,</span> column<span class="token operator">=</span><span class="token number">8</span><span class="token punctuation">)</span>
Token<span class="token punctuation">(</span><span class="token builtin">type</span><span class="token operator">=</span><span class="token string">&#39;ASSIGN&#39;</span><span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token string">&#39;:=&#39;</span><span class="token punctuation">,</span> line<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">,</span> column<span class="token operator">=</span><span class="token number">12</span><span class="token punctuation">)</span>
Token<span class="token punctuation">(</span><span class="token builtin">type</span><span class="token operator">=</span><span class="token string">&#39;ID&#39;</span><span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token string">&#39;price&#39;</span><span class="token punctuation">,</span> line<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">,</span> column<span class="token operator">=</span><span class="token number">15</span><span class="token punctuation">)</span>
Token<span class="token punctuation">(</span><span class="token builtin">type</span><span class="token operator">=</span><span class="token string">&#39;OP&#39;</span><span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">,</span> line<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">,</span> column<span class="token operator">=</span><span class="token number">21</span><span class="token punctuation">)</span>
Token<span class="token punctuation">(</span><span class="token builtin">type</span><span class="token operator">=</span><span class="token string">&#39;NUMBER&#39;</span><span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token number">0.05</span><span class="token punctuation">,</span> line<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">,</span> column<span class="token operator">=</span><span class="token number">23</span><span class="token punctuation">)</span>
Token<span class="token punctuation">(</span><span class="token builtin">type</span><span class="token operator">=</span><span class="token string">&#39;END&#39;</span><span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token string">&#39;;&#39;</span><span class="token punctuation">,</span> line<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">,</span> column<span class="token operator">=</span><span class="token number">27</span><span class="token punctuation">)</span>
Token<span class="token punctuation">(</span><span class="token builtin">type</span><span class="token operator">=</span><span class="token string">&#39;ENDIF&#39;</span><span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token string">&#39;ENDIF&#39;</span><span class="token punctuation">,</span> line<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span> column<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">)</span>
Token<span class="token punctuation">(</span><span class="token builtin">type</span><span class="token operator">=</span><span class="token string">&#39;END&#39;</span><span class="token punctuation">,</span> value<span class="token operator">=</span><span class="token string">&#39;;&#39;</span><span class="token punctuation">,</span> line<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span> column<span class="token operator">=</span><span class="token number">9</span><span class="token punctuation">)</span>
</code></pre></div>`,19);function g(v,y){const e=o("router-link"),c=o("Badge");return r(),d("div",null,[u,n("nav",k,[n("ul",null,[n("li",null,[a(e,{to:"#1-正则表达式模块"},{default:t(()=>[s("1. 正则表达式模块")]),_:1})]),n("li",null,[a(e,{to:"#2-flag-标记"},{default:t(()=>[s("2. Flag 标记")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#21-语言相关"},{default:t(()=>[s("2.1 语言相关")]),_:1})]),n("li",null,[a(e,{to:"#22-多行匹配"},{default:t(()=>[s("2.2 多行匹配")]),_:1})]),n("li",null,[a(e,{to:"#23-其他标记"},{default:t(()=>[s("2.3 其他标记")]),_:1})])])]),n("li",null,[a(e,{to:"#3-标记字符"},{default:t(()=>[s("3. 标记字符")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#31-常见字符和转义字符"},{default:t(()=>[s("3.1 常见字符和转义字符")]),_:1})]),n("li",null,[a(e,{to:"#32-贪婪和非贪婪"},{default:t(()=>[s("3.2 贪婪和非贪婪")]),_:1})]),n("li",null,[a(e,{to:"#33-匹配组和集合"},{default:t(()=>[s("3.3 匹配组和集合")]),_:1})])])]),n("li",null,[a(e,{to:"#4-断言"},{default:t(()=>[s("4. 断言")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#41-前视后视断言"},{default:t(()=>[s("4.1 前视后视断言")]),_:1})]),n("li",null,[a(e,{to:"#42-条件断言"},{default:t(()=>[s("4.2 条件断言")]),_:1})])])]),n("li",null,[a(e,{to:"#5-模块内容参考"},{default:t(()=>[s("5. 模块内容参考")]),_:1}),n("ul",null,[n("li",null,[a(e,{to:"#51-函数"},{default:t(()=>[s("5.1 函数")]),_:1})]),n("li",null,[a(e,{to:"#52-pattern-对象"},{default:t(()=>[s("5.2 Pattern 对象")]),_:1})]),n("li",null,[a(e,{to:"#53-match-对象"},{default:t(()=>[s("5.3 Match 对象")]),_:1})])])]),n("li",null,[a(e,{to:"#6-示例写一个词法分析器"},{default:t(()=>[s("6. 示例：写一个词法分析器")]),_:1})])])]),h,n("p",null,[a(c,{type:"tip",vertical:"inherit"},{default:t(()=>[s("定义")]),_:1}),s(" 所有的正则表达式都是一种断言，"),m,s("（Zero-Width Assertions）只进行查找而并不消费，占用字符串宽度为零。")]),b])}const I=l(i,[["render",g],["__file","re.html.vue"]]),x=JSON.parse('{"path":"/posts/python/basic/stdlib/re.html","title":"re - 正则表达式","lang":"zh-CN","frontmatter":{"description":"re - 正则表达式 1. 正则表达式模块 第三方支持 第三方模块 regex，提供了与标准库 re 模块兼容的 API 接口，同时，还提供了更多功能和更全面的 Unicode 支持 2. Flag 标记 2.1 语言相关 re.A / re.ASCII：让 \\\\w、\\\\W、\\\\b、\\\\B、\\\\d、\\\\D、\\\\s、\\\\S 只匹配 ASCII，而不是 Unicode，对...","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/posts/python/basic/stdlib/re.html"}],["meta",{"property":"og:site_name","content":"鸭梨"}],["meta",{"property":"og:title","content":"re - 正则表达式"}],["meta",{"property":"og:description","content":"re - 正则表达式 1. 正则表达式模块 第三方支持 第三方模块 regex，提供了与标准库 re 模块兼容的 API 接口，同时，还提供了更多功能和更全面的 Unicode 支持 2. Flag 标记 2.1 语言相关 re.A / re.ASCII：让 \\\\w、\\\\W、\\\\b、\\\\B、\\\\d、\\\\D、\\\\s、\\\\S 只匹配 ASCII，而不是 Unicode，对..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-27T04:16:18.000Z"}],["meta",{"property":"article:author","content":"Alex Sun"}],["meta",{"property":"article:modified_time","content":"2024-05-27T04:16:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"re - 正则表达式\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-27T04:16:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Alex Sun\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[{"level":2,"title":"1. 正则表达式模块","slug":"1-正则表达式模块","link":"#1-正则表达式模块","children":[]},{"level":2,"title":"2. Flag 标记","slug":"2-flag-标记","link":"#2-flag-标记","children":[{"level":3,"title":"2.1 语言相关","slug":"21-语言相关","link":"#21-语言相关","children":[]},{"level":3,"title":"2.2 多行匹配","slug":"22-多行匹配","link":"#22-多行匹配","children":[]},{"level":3,"title":"2.3 其他标记","slug":"23-其他标记","link":"#23-其他标记","children":[]}]},{"level":2,"title":"3. 标记字符","slug":"3-标记字符","link":"#3-标记字符","children":[{"level":3,"title":"3.1 常见字符和转义字符","slug":"31-常见字符和转义字符","link":"#31-常见字符和转义字符","children":[]},{"level":3,"title":"3.2 贪婪和非贪婪","slug":"32-贪婪和非贪婪","link":"#32-贪婪和非贪婪","children":[]},{"level":3,"title":"3.3 匹配组和集合","slug":"33-匹配组和集合","link":"#33-匹配组和集合","children":[]}]},{"level":2,"title":"4. 断言","slug":"4-断言","link":"#4-断言","children":[{"level":3,"title":"4.1 前视后视断言","slug":"41-前视后视断言","link":"#41-前视后视断言","children":[]},{"level":3,"title":"4.2 条件断言","slug":"42-条件断言","link":"#42-条件断言","children":[]}]},{"level":2,"title":"5. 模块内容参考","slug":"5-模块内容参考","link":"#5-模块内容参考","children":[{"level":3,"title":"5.1 函数","slug":"51-函数","link":"#51-函数","children":[]},{"level":3,"title":"5.2 Pattern 对象","slug":"52-pattern-对象","link":"#52-pattern-对象","children":[]},{"level":3,"title":"5.3 Match 对象","slug":"53-match-对象","link":"#53-match-对象","children":[]}]},{"level":2,"title":"6. 示例：写一个词法分析器","slug":"6-示例写一个词法分析器","link":"#6-示例写一个词法分析器","children":[]}],"git":{"createdTime":1716783378000,"updatedTime":1716783378000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":5.46,"words":1637},"filePathRelative":"posts/python/basic/stdlib/re.md","localizedDate":"2024年5月27日","excerpt":"\\n\\n<h2>1. 正则表达式模块</h2>\\n<table>\\n<thead>\\n<tr>\\n<th>项目</th>\\n<th>信息</th>\\n</tr>\\n</thead>\\n<tbody>\\n<tr>\\n<td>源代码</td>\\n<td><a href=\\"https://github.com/python/cpython/tree/3.11/Lib/re/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Lib/re/</a></td>\\n</tr>\\n<tr>\\n<td>Python 版本</td>\\n<td>全版本</td>\\n</tr>\\n<tr>\\n<td>标签</td>\\n<td>文件和目录</td>\\n</tr>\\n</tbody>\\n</table>","autoDesc":true}');export{I as comp,x as data};
