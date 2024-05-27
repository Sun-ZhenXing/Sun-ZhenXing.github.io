import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as s,o as l,c as r,b as t,a,w as o,e as d,d as n}from"./app-DhX54nll.js";const p={},i=t("p",null,"本文是 λ 演算的介绍。",-1),h={class:"table-of-contents"},u=d(`<h2 id="1-什么是-λ-演算" tabindex="-1"><a class="header-anchor" href="#1-什么是-λ-演算"><span>1. 什么是 λ 演算</span></a></h2><p>λ 演算（lambda calculus，λ-calculus）是一套从数学逻辑中发展，以变量绑定和替换的规则，来研究函数如何抽象化定义、函数如何被应用以及递归的形式系统。它由数学家 <a href="https://zh.wikipedia.org/wiki/%E9%98%BF%E9%9A%86%E4%BD%90%C2%B7%E9%82%B1%E5%A5%87" target="_blank" rel="noopener noreferrer">阿隆佐·邱奇</a> 在 20 世纪 30 年代首次发表。λ 演算作为一种广泛用途的计算模型，可以清晰地定义什么是一个可计算函数，而任何可计算函数都能以这种形式表达和求值，它能模拟单一磁带图灵机的计算过程；尽管如此，λ 演算强调的是变换规则的运用，而非实现它们的具体机器。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><p>lambda 演算包括了建构 lambda 项，和对 lambda 项执行归约的操作。在最简单的 lambda 演算中，只使用以下的规则来建构 lambda 项：</p><table><thead><tr><th>语法</th><th>名称</th><th>描述</th></tr></thead><tbody><tr><td><code>x</code></td><td>变量</td><td>用字符或字符串来表示参数或者数学上的值或者表示逻辑上的值</td></tr><tr><td><code>(λx.M)</code></td><td>抽象化</td><td>一个完整的函数定义（<code>M</code> 是一个 lambda 项），在表达式中的 <code>x</code> 都会绑定为变量 <code>x</code></td></tr><tr><td><code>(M N)</code></td><td>应用</td><td>将函数 <code>M</code> 作用于参数 <code>N</code>，<code>M</code> 和 <code>N</code> 是 lambda 项</td></tr></tbody></table><p>产生了诸如 <code>λf.λx.(f (f x))</code> 的表达式。如果表达式是明确而没有歧义的，则括号可以省略。</p><p>为了方便理解，我们使用 JavaScript 的箭头函数来表示 lambda 演算中的抽象化和应用：</p><div class="language-javascript" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token parameter">f</span> <span class="token operator">=&gt;</span> <span class="token parameter">x</span> <span class="token operator">=&gt;</span> <span class="token function">f</span><span class="token punctuation">(</span><span class="token function">f</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="邱奇编码church-encoding" tabindex="-1"><a class="header-anchor" href="#邱奇编码church-encoding"><span>邱奇编码（Church Encoding）</span></a></h2><p>为了更方便地进行下面的讨论，我们可以给一个λ项命名，例如：</p><div class="language-txt" data-ext="txt" data-title="txt"><pre class="language-txt"><code>swap := λx.λy.y x
</code></pre></div><p>那么</p><div class="language-txt" data-ext="txt" data-title="txt"><pre class="language-txt"><code>swap a b ≡ (λx.λy.y x) a b → b a
</code></pre></div><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>Λ 演算，维基百科，<a href="https://zh.wikipedia.org/wiki/%CE%9B%E6%BC%94%E7%AE%97" target="_blank" rel="noopener noreferrer">https://zh.wikipedia.org/wiki/Λ演算</a> <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>`,14);function m(g,f){const e=s("router-link");return l(),r("div",null,[i,t("nav",h,[t("ul",null,[t("li",null,[a(e,{to:"#1-什么是-λ-演算"},{default:o(()=>[n("1. 什么是 λ 演算")]),_:1})]),t("li",null,[a(e,{to:"#邱奇编码church-encoding"},{default:o(()=>[n("邱奇编码（Church Encoding）")]),_:1})])])]),u])}const _=c(p,[["render",m],["__file","lambda-calculus.html.vue"]]),k=JSON.parse('{"path":"/posts/ideas/lambda-calculus.html","title":"λ 演算","lang":"zh-CN","frontmatter":{"title":"λ 演算","date":"2023-03-24T00:00:00.000Z","category":["奇思妙想"],"tag":["函数式编程"],"description":"本文是 λ 演算的介绍。","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/posts/ideas/lambda-calculus.html"}],["meta",{"property":"og:site_name","content":"鸭梨"}],["meta",{"property":"og:title","content":"λ 演算"}],["meta",{"property":"og:description","content":"本文是 λ 演算的介绍。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-11-16T06:02:40.000Z"}],["meta",{"property":"article:author","content":"Alex Sun"}],["meta",{"property":"article:tag","content":"函数式编程"}],["meta",{"property":"article:published_time","content":"2023-03-24T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-16T06:02:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"λ 演算\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-24T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-16T06:02:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Alex Sun\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[{"level":2,"title":"1. 什么是 λ 演算","slug":"1-什么是-λ-演算","link":"#1-什么是-λ-演算","children":[]},{"level":2,"title":"邱奇编码（Church Encoding）","slug":"邱奇编码church-encoding","link":"#邱奇编码church-encoding","children":[]}],"git":{"createdTime":1679712285000,"updatedTime":1700114560000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":2}]},"readingTime":{"minutes":1.66,"words":497},"filePathRelative":"posts/ideas/lambda-calculus.md","localizedDate":"2023年3月24日","excerpt":"<p>本文是 λ 演算的介绍。</p>\\n","autoDesc":true}');export{_ as comp,k as data};
