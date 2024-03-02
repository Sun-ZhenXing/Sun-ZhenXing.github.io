import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as e,o as l,c as p,a,d as s,b as o,w as c,e as i}from"./app-C6k5k7Rq.js";const m={},r=a("p",null,"主成分分析简单步骤。",-1),u=a("h2",{id:"1-pca-介绍",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#1-pca-介绍"},[a("span",null,"1. PCA 介绍")])],-1),d=a("strong",null,"主成分分析",-1),h=a("h2",{id:"2-使用特征值分解进行-pca",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#2-使用特征值分解进行-pca"},[a("span",null,"2. 使用特征值分解进行 PCA")])],-1),k=a("p",null,[s("设有 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"m")]),a("annotation",{encoding:"application/x-tex"},"m")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.4306em"}}),a("span",{class:"mord mathnormal"},"m")])])]),s(" 条 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"n")]),a("annotation",{encoding:"application/x-tex"},"n")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.4306em"}}),a("span",{class:"mord mathnormal"},"n")])])]),s(" 维数据，需要降维到 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"k")]),a("annotation",{encoding:"application/x-tex"},"k")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6944em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k")])])]),s(" 维（"),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"k"),a("mo",null,"<"),a("mi",null,"n")]),a("annotation",{encoding:"application/x-tex"},"k < n")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.7335em","vertical-align":"-0.0391em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"<"),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.4306em"}}),a("span",{class:"mord mathnormal"},"n")])])]),s("），使用特征值进行 PCA 的基本步骤如下：")],-1),g=a("ol",null,[a("li",null,[s("将原始数据按列组成 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"n")]),a("annotation",{encoding:"application/x-tex"},"n")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.4306em"}}),a("span",{class:"mord mathnormal"},"n")])])]),s(" 行 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"m")]),a("annotation",{encoding:"application/x-tex"},"m")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.4306em"}}),a("span",{class:"mord mathnormal"},"m")])])]),s(" 列矩阵 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",{mathvariant:"bold-italic"},"X")]),a("annotation",{encoding:"application/x-tex"},"\\boldsymbol{X}")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6861em"}}),a("span",{class:"mord"},[a("span",{class:"mord"},[a("span",{class:"mord boldsymbol",style:{"margin-right":"0.07778em"}},"X")])])])])])]),a("li",null,[s("将 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",{mathvariant:"bold-italic"},"X")]),a("annotation",{encoding:"application/x-tex"},"\\boldsymbol{X}")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6861em"}}),a("span",{class:"mord"},[a("span",{class:"mord"},[a("span",{class:"mord boldsymbol",style:{"margin-right":"0.07778em"}},"X")])])])])]),s(" 的每一行（代表一个属性字段）进行零均值化，即减去这一行的均值")]),a("li",null,[s("求出协方差矩阵 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",{mathvariant:"bold-italic"},"C"),a("mo",null,"="),a("mstyle",{displaystyle:"true",scriptlevel:"0"},[a("mfrac",null,[a("mn",null,"1"),a("mi",null,"m")])]),a("mi",{mathvariant:"bold-italic"},"X"),a("msup",null,[a("mi",{mathvariant:"bold-italic"},"X"),a("mi",{mathvariant:"sans-serif"},"T")])]),a("annotation",{encoding:"application/x-tex"},"\\boldsymbol{C} = \\dfrac{1}{m}\\boldsymbol{X}\\boldsymbol{X}^{\\mathsf{T}}")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6861em"}}),a("span",{class:"mord"},[a("span",{class:"mord"},[a("span",{class:"mord boldsymbol",style:{"margin-right":"0.06979em"}},"C")])]),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"="),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"2.0074em","vertical-align":"-0.686em"}}),a("span",{class:"mord"},[a("span",{class:"mopen nulldelimiter"}),a("span",{class:"mfrac"},[a("span",{class:"vlist-t vlist-t2"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"1.3214em"}},[a("span",{style:{top:"-2.314em"}},[a("span",{class:"pstrut",style:{height:"3em"}}),a("span",{class:"mord"},[a("span",{class:"mord mathnormal"},"m")])]),a("span",{style:{top:"-3.23em"}},[a("span",{class:"pstrut",style:{height:"3em"}}),a("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),a("span",{style:{top:"-3.677em"}},[a("span",{class:"pstrut",style:{height:"3em"}}),a("span",{class:"mord"},[a("span",{class:"mord"},"1")])])]),a("span",{class:"vlist-s"},"​")]),a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.686em"}},[a("span")])])])]),a("span",{class:"mclose nulldelimiter"})]),a("span",{class:"mord"},[a("span",{class:"mord"},[a("span",{class:"mord boldsymbol",style:{"margin-right":"0.07778em"}},"X")])]),a("span",{class:"mord"},[a("span",{class:"mord"},[a("span",{class:"mord"},[a("span",{class:"mord boldsymbol",style:{"margin-right":"0.07778em"}},"X")])]),a("span",{class:"msupsub"},[a("span",{class:"vlist-t"},[a("span",{class:"vlist-r"},[a("span",{class:"vlist",style:{height:"0.9251em"}},[a("span",{style:{top:"-3.139em","margin-right":"0.05em"}},[a("span",{class:"pstrut",style:{height:"2.7em"}}),a("span",{class:"sizing reset-size6 size3 mtight"},[a("span",{class:"mord mtight"},[a("span",{class:"mord mathsf mtight"},"T")])])])])])])])])])])])]),a("li",null,[s("求出协方差矩阵 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",{mathvariant:"bold-italic"},"C")]),a("annotation",{encoding:"application/x-tex"},"\\boldsymbol{C}")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6861em"}}),a("span",{class:"mord"},[a("span",{class:"mord"},[a("span",{class:"mord boldsymbol",style:{"margin-right":"0.06979em"}},"C")])])])])]),s(" 的特征值及对应的特征向量")]),a("li",null,[s("将特征向量按对应特征值大小从上到下按行排列成矩阵，取前 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"k")]),a("annotation",{encoding:"application/x-tex"},"k")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6944em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k")])])]),s(" 行组成矩阵 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",{mathvariant:"bold-italic"},"P")]),a("annotation",{encoding:"application/x-tex"},"\\boldsymbol{P}")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6861em"}}),a("span",{class:"mord"},[a("span",{class:"mord"},[a("span",{class:"mord boldsymbol",style:{"margin-right":"0.15972em"}},"P")])])])])])]),a("li",null,[a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",{mathvariant:"bold-italic"},"Y"),a("mo",null,"="),a("mi",{mathvariant:"bold-italic"},"P"),a("mi",{mathvariant:"bold-italic"},"X")]),a("annotation",{encoding:"application/x-tex"},"\\boldsymbol{Y} = \\boldsymbol{P}\\boldsymbol{X}")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6861em"}}),a("span",{class:"mord"},[a("span",{class:"mord"},[a("span",{class:"mord boldsymbol",style:{"margin-right":"0.25555em"}},"Y")])]),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),a("span",{class:"mrel"},"="),a("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6861em"}}),a("span",{class:"mord"},[a("span",{class:"mord"},[a("span",{class:"mord boldsymbol",style:{"margin-right":"0.15972em"}},"P")])]),a("span",{class:"mord"},[a("span",{class:"mord"},[a("span",{class:"mord boldsymbol",style:{"margin-right":"0.07778em"}},"X")])])])])]),s(" 即为降维到 "),a("span",{class:"katex"},[a("span",{class:"katex-mathml"},[a("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[a("semantics",null,[a("mrow",null,[a("mi",null,"k")]),a("annotation",{encoding:"application/x-tex"},"k")])])]),a("span",{class:"katex-html","aria-hidden":"true"},[a("span",{class:"base"},[a("span",{class:"strut",style:{height:"0.6944em"}}),a("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k")])])]),s(" 维后的数据")])],-1),b=i(`<h2 id="3-使用奇异值分解进行-pca" tabindex="-1"><a class="header-anchor" href="#3-使用奇异值分解进行-pca"><span>3. 使用奇异值分解进行 PCA</span></a></h2><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np


<span class="token keyword">def</span> <span class="token function">pca</span><span class="token punctuation">(</span>X<span class="token punctuation">:</span> np<span class="token punctuation">.</span>ndarray<span class="token punctuation">,</span> k<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">:</span>  <span class="token comment"># k is the components you want</span>
    <span class="token comment"># mean of each feature</span>
    n_samples<span class="token punctuation">,</span> n_features <span class="token operator">=</span> X<span class="token punctuation">.</span>shape
    mean <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span>np<span class="token punctuation">.</span>mean<span class="token punctuation">(</span>X<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> i<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n_features<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token comment"># normalization</span>
    norm_X <span class="token operator">=</span> X<span class="token operator">-</span>mean
    <span class="token comment"># scatter matrix</span>
    scatter_matrix <span class="token operator">=</span> np<span class="token punctuation">.</span>dot<span class="token punctuation">(</span>np<span class="token punctuation">.</span>transpose<span class="token punctuation">(</span>norm_X<span class="token punctuation">)</span><span class="token punctuation">,</span> norm_X<span class="token punctuation">)</span>
    <span class="token comment"># Calculate the eigenvectors and eigenvalues</span>
    eig_val<span class="token punctuation">,</span> eig_vec <span class="token operator">=</span> np<span class="token punctuation">.</span>linalg<span class="token punctuation">.</span>eig<span class="token punctuation">(</span>scatter_matrix<span class="token punctuation">)</span>
    eig_pairs <span class="token operator">=</span> <span class="token punctuation">[</span>
        <span class="token punctuation">(</span>np<span class="token punctuation">.</span><span class="token builtin">abs</span><span class="token punctuation">(</span>eig_val<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span> eig_vec<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">,</span> i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n_features<span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
    <span class="token comment"># sort eig_vec based on eig_val from highest to lowest</span>
    eig_pairs<span class="token punctuation">.</span>sort<span class="token punctuation">(</span>reverse<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
    <span class="token comment"># select the top k eig_vec</span>
    feature <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span>ele<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token keyword">for</span> ele <span class="token keyword">in</span> eig_pairs<span class="token punctuation">[</span><span class="token punctuation">:</span>k<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token comment"># get new data</span>
    data <span class="token operator">=</span> np<span class="token punctuation">.</span>dot<span class="token punctuation">(</span>norm_X<span class="token punctuation">,</span> np<span class="token punctuation">.</span>transpose<span class="token punctuation">(</span>feature<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> data


X <span class="token operator">=</span> np<span class="token punctuation">.</span>array<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>pca<span class="token punctuation">(</span>X<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function y(v,x){const n=e("RouteLink");return l(),p("div",null,[r,u,a("p",null,[s("在 "),o(n,{to:"/posts/ai/linear-algebra/svd.html"},{default:c(()=>[s("SVD：奇异值分解")]),_:1}),s(" 中，我们介绍了特征值分解和奇异值分解的基本方法，本节我们将使用这两种方法进行 "),d,s("（Principal Component Analysis，PCA）。")]),h,k,g,b])}const M=t(m,[["render",y],["__file","pca.html.vue"]]),C=JSON.parse('{"path":"/posts/ai/linear-algebra/pca.html","title":"PCA：主成分分析","lang":"zh-CN","frontmatter":{"title":"PCA：主成分分析","date":"2023-02-27T00:00:00.000Z","category":["AI","线性代数"],"tag":["AI","线性代数","PCA"],"description":"主成分分析简单步骤。 1. PCA 介绍 在 中，我们介绍了特征值分解和奇异值分解的基本方法，本节我们将使用这两种方法进行 主成分分析（Principal Component Analysis，PCA）。 2. 使用特征值分解进行 PCA 设有 m 条 n 维数据，需要降维到 k 维（k<n），使用特征值进行 PCA 的基本步骤如下： 将原始数据按列组...","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/posts/ai/linear-algebra/pca.html"}],["meta",{"property":"og:site_name","content":"鸭梨"}],["meta",{"property":"og:title","content":"PCA：主成分分析"}],["meta",{"property":"og:description","content":"主成分分析简单步骤。 1. PCA 介绍 在 中，我们介绍了特征值分解和奇异值分解的基本方法，本节我们将使用这两种方法进行 主成分分析（Principal Component Analysis，PCA）。 2. 使用特征值分解进行 PCA 设有 m 条 n 维数据，需要降维到 k 维（k<n），使用特征值进行 PCA 的基本步骤如下： 将原始数据按列组..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-02T16:16:12.000Z"}],["meta",{"property":"article:author","content":"鸭梨"}],["meta",{"property":"article:tag","content":"AI"}],["meta",{"property":"article:tag","content":"线性代数"}],["meta",{"property":"article:tag","content":"PCA"}],["meta",{"property":"article:published_time","content":"2023-02-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-02T16:16:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"PCA：主成分分析\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-27T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-02T16:16:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鸭梨\\",\\"url\\":\\"https://github.com/Sun-ZhenXing\\"}]}"]]},"headers":[{"level":2,"title":"1. PCA 介绍","slug":"1-pca-介绍","link":"#1-pca-介绍","children":[]},{"level":2,"title":"2. 使用特征值分解进行 PCA","slug":"2-使用特征值分解进行-pca","link":"#2-使用特征值分解进行-pca","children":[]},{"level":2,"title":"3. 使用奇异值分解进行 PCA","slug":"3-使用奇异值分解进行-pca","link":"#3-使用奇异值分解进行-pca","children":[]}],"git":{"createdTime":1677461388000,"updatedTime":1709396172000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":3}]},"readingTime":{"minutes":0.97,"words":292},"filePathRelative":"posts/ai/linear-algebra/pca.md","localizedDate":"2023年2月27日","excerpt":"<p>主成分分析简单步骤。</p>\\n","autoDesc":true}');export{M as comp,C as data};
