import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e as t}from"./app-DhX54nll.js";const o={},p=t(`<h1 id="jsonpath---通过表达式解析-json" tabindex="-1"><a class="header-anchor" href="#jsonpath---通过表达式解析-json"><span>jsonpath - 通过表达式解析 JSON</span></a></h1><p>JSONPath 之于 JSON，就如 XPath 之于 XML。JSONPath 可以方便对 JSON 数据结构进行内容提取。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><p>根对象使用 <code>$</code> 来表示，而无需区分是对象还是数组。</p><p>表达式可以使用 <code>.</code>，也可以使用 <code>[]</code>。如：</p><p><code>$.store.book[0].title</code> 或 <code>$[&#39;store&#39;][&#39;book&#39;][0][&#39;title&#39;]</code>。</p><p>表达式 <code>(&lt;expr&gt;)</code> 可用作显式名称或索引的替代，如：</p><p><code>$.store.book[(@.length-1)].title</code> 表示获取最后一个 <code>book</code> 的 <code>title</code>。</p><p>使用符号 <code>@</code> 表示当前对象。过滤器表达式通过语法支持，<code>?(&lt;boolean expr&gt;)</code> 如：</p><p><code>$.store.book[?(@.price &lt; 10)].title</code> 表示获取价格小于 <code>10</code> 的所有 <code>book</code> 的 <code>title</code>。</p><h2 id="要点" tabindex="-1"><a class="header-anchor" href="#要点"><span>要点</span></a></h2><ul><li><code>$</code> 表示文档的根元素</li><li><code>@</code> 表示文档的当前元素</li><li><code>.node_name</code> 或 <code>[&#39;node_name&#39;]</code> 匹配下级节点</li><li><code>[index]</code> 检索数组中的元素</li><li><code>[start:end:step]</code> 支持数组切片语法</li><li><code>*</code> 作为通配符，匹配所有成员</li><li><code>..</code> 子递归通配符，匹配成员的所有子元素</li><li><code>(&lt;expr&gt;)</code> 使用表达式</li><li><code>?(&lt;boolean expr&gt;)</code> 进行数据筛选</li></ul><p>JsonPath 是一种用于从 JSON 数据中提取信息的语言。它类似于 XPath，但是专门用于 JSON 数据。以下是 JsonPath 的语法：</p><ul><li><code>$</code>：表示根节点。</li><li><code>@</code>：表示当前节点。</li><li><code>.</code>：表示子节点。</li><li><code>..</code>：表示子孙节点。</li><li><code>*</code>：表示通配符，匹配任意节点。</li><li><code>[]</code>：表示索引，可以匹配数组中的元素或对象中的属性。</li><li><code>[,]</code>：表示多索引，可以同时匹配多个索引。</li><li><code>[:n]</code>：表示从第一个元素开始到第 n 个元素。</li><li><code>[-n:]</code>：表示从倒数第 n 个元素开始到最后一个元素。</li><li><code>[start:end:step]</code>：表示从第 start 个元素开始到第 end 个元素，步长为 step。</li></ul><p>下面是几个示例：</p><p>假设我们有以下 JSON 数据：</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;store&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;book&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;reference&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Nigel Rees&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Sayings of the Century&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">8.95</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fiction&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Evelyn Waugh&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Sword of Honour&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">12.99</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fiction&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Herman Melville&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Moby Dick&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;isbn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0-553-21311-3&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">8.99</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fiction&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;J. R. R. Tolkien&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The Lord of the Rings&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;isbn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0-395-19395-8&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">22.99</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;bicycle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">19.95</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>$</code>：表示整个 JSON 数据。</li></ul><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;store&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;book&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;reference&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Nigel Rees&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Sayings of the Century&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">8.95</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fiction&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Evelyn Waugh&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Sword of Honour&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">12.99</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fiction&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Herman Melville&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Moby Dick&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;isbn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0-553-21311-3&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">8.99</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fiction&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;J. R. R. Tolkien&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The Lord of the Rings&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;isbn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0-395-19395-8&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">22.99</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;bicycle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">19.95</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>$.store</code>：表示 store 对象。</li></ul><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;book&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;reference&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Nigel Rees&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Sayings of the Century&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">8.95</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fiction&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Evelyn Waugh&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Sword of Honour&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">12.99</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fiction&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Herman Melville&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Moby Dick&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;isbn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0-553-21311-3&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">8.99</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fiction&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;J. R. R. Tolkien&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The Lord of the Rings&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;isbn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0-395-19395-8&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">22.99</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;bicycle&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;color&quot;</span><span class="token operator">:</span> <span class="token string">&quot;red&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">19.95</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>$.store.book[*]</code>：表示所有书籍。</li></ul><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;reference&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Nigel Rees&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Sayings of the Century&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">8.95</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fiction&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Evelyn Waugh&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Sword of Honour&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">12.99</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fiction&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Herman Melville&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Moby Dick&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;isbn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0-553-21311-3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">8.99</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fiction&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;J. R. R. Tolkien&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The Lord of the Rings&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;isbn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0-395-19395-8&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">22.99</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>$.store.book[2]</code>：表示第三本书（索引从 0 开始）。</li></ul><div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fiction&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Herman Melville&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Moby Dick&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;isbn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0-553-21311-3&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">8.99</span>
<span class="token punctuation">}</span>
</code></pre></div><ul><li><code>$.store.book[-2:]</code>：表示最后两本书。</li></ul><div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fiction&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Herman Melville&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Moby Dick&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;isbn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0-553-21311-3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">8.99</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fiction&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;J. R. R. Tolkien&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The Lord of the Rings&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;isbn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0-395-19395-8&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">22.99</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><ul><li><code>$.store.book[0,2]</code>：表示第一本和第三本书。</li></ul><div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;reference&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Nigel Rees&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Sayings of the Century&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">8.95</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fiction&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Herman Melville&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Moby Dick&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;isbn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0-553-21311-3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">8.99</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><ul><li><code>$.store.book[0:2]</code>：表示前两本书。</li></ul><div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;reference&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Nigel Rees&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Sayings of the Century&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">8.95</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fiction&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Evelyn Waugh&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Sword of Honour&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">12.99</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><ul><li><code>$.store.book[-2:].title</code>：表示最后两本书的标题。</li></ul><div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token string">&quot;Moby Dick&quot;</span><span class="token punctuation">,</span>
  <span class="token string">&quot;The Lord of the Rings&quot;</span>
<span class="token punctuation">]</span>
</code></pre></div><ul><li><code>$.store..price</code>：表示所有价格。</li></ul><div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token number">8.95</span><span class="token punctuation">,</span>
  <span class="token number">12.99</span><span class="token punctuation">,</span>
  <span class="token number">8.99</span><span class="token punctuation">,</span>
  <span class="token number">22.99</span><span class="token punctuation">,</span>
  <span class="token number">19.95</span>
<span class="token punctuation">]</span>
</code></pre></div><ul><li><code>$..book[?(@.price&lt;10)]</code>：表示价格小于 10 的所有书籍。</li></ul><div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;reference&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Nigel Rees&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Sayings of the Century&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">8.95</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;fiction&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;author&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Herman Melville&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Moby Dick&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;isbn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0-553-21311-3&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">8.99</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre></div><p>以上就是 JsonPath 的语法和示例说明。</p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p><a href="https://apifox.com/help/reference/json-path/" target="_blank" rel="noopener noreferrer">https://apifox.com/help/reference/json-path/</a> <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>`,39),e=[p];function c(l,u){return s(),a("div",null,e)}const k=n(o,[["render",c],["__file","jsonpath.html.vue"]]),d=JSON.parse(`{"path":"/posts/python/packages/utils/jsonpath.html","title":"jsonpath - 通过表达式解析 JSON","lang":"zh-CN","frontmatter":{"description":"jsonpath - 通过表达式解析 JSON JSONPath 之于 JSON，就如 XPath 之于 XML。JSONPath 可以方便对 JSON 数据结构进行内容提取。[1] 根对象使用 $ 来表示，而无需区分是对象还是数组。 表达式可以使用 .，也可以使用 []。如： $.store.book[0].title 或 $['store']['b...","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/posts/python/packages/utils/jsonpath.html"}],["meta",{"property":"og:site_name","content":"鸭梨"}],["meta",{"property":"og:title","content":"jsonpath - 通过表达式解析 JSON"}],["meta",{"property":"og:description","content":"jsonpath - 通过表达式解析 JSON JSONPath 之于 JSON，就如 XPath 之于 XML。JSONPath 可以方便对 JSON 数据结构进行内容提取。[1] 根对象使用 $ 来表示，而无需区分是对象还是数组。 表达式可以使用 .，也可以使用 []。如： $.store.book[0].title 或 $['store']['b..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-27T04:16:18.000Z"}],["meta",{"property":"article:author","content":"Alex Sun"}],["meta",{"property":"article:modified_time","content":"2024-05-27T04:16:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"jsonpath - 通过表达式解析 JSON\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-27T04:16:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Alex Sun\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[{"level":2,"title":"要点","slug":"要点","link":"#要点","children":[]}],"git":{"createdTime":1716783378000,"updatedTime":1716783378000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":3.18,"words":955},"filePathRelative":"posts/python/packages/utils/jsonpath.md","localizedDate":"2024年5月27日","excerpt":"\\n<p>JSONPath 之于 JSON，就如 XPath 之于 XML。JSONPath 可以方便对 JSON 数据结构进行内容提取。<sup class=\\"footnote-ref\\"><a href=\\"#footnote1\\">[1]</a><a class=\\"footnote-anchor\\" id=\\"footnote-ref1\\"></a></sup></p><a class=\\"footnote-anchor\\" id=\\"footnote-ref1\\">\\n<p>根对象使用 <code>$</code> 来表示，而无需区分是对象还是数组。</p>\\n<p>表达式可以使用 <code>.</code>，也可以使用 <code>[]</code>。如：</p>\\n<p><code>$.store.book[0].title</code> 或 <code>$['store']['book'][0]['title']</code>。</p>\\n<p>表达式 <code>(&lt;expr&gt;)</code> 可用作显式名称或索引的替代，如：</p>\\n<p><code>$.store.book[(@.length-1)].title</code> 表示获取最后一个 <code>book</code> 的 <code>title</code>。</p>\\n<p>使用符号 <code>@</code> 表示当前对象。过滤器表达式通过语法支持，<code>?(&lt;boolean expr&gt;)</code> 如：</p>\\n<p><code>$.store.book[?(@.price &lt; 10)].title</code> 表示获取价格小于 <code>10</code> 的所有 <code>book</code> 的 <code>title</code>。</p>\\n</a>","autoDesc":true}`);export{k as comp,d as data};
