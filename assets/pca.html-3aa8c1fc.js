import{_ as t,Y as l,Z as p,$ as e,a1 as s,a2 as a,a0 as o,a3 as c,a4 as i,E as m}from"./framework-0b2fc941.js";const r={},u=s("p",null,"主成分分析简单步骤。",-1),d=s("h2",{id:"_1-pca-介绍",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_1-pca-介绍","aria-hidden":"true"},"#"),a(" 1. PCA 介绍")],-1),h=s("strong",null,"主成分分析",-1),k=s("h2",{id:"_2-使用特征值分解进行-pca",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_2-使用特征值分解进行-pca","aria-hidden":"true"},"#"),a(" 2. 使用特征值分解进行 PCA")],-1),b=s("p",null,[a("设有 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"m")]),s("annotation",{encoding:"application/x-tex"},"m")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"m")])])]),a(" 条 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 维数据，需要降维到 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"k")]),s("annotation",{encoding:"application/x-tex"},"k")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k")])])]),a(" 维（"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"k"),s("mo",null,"<"),s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"k < n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7335em","vertical-align":"-0.0391em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"<"),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a("），使用特征值进行 PCA 的基本步骤如下：")],-1),g=s("ol",null,[s("li",null,[a("将原始数据按列组成 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 行 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"m")]),s("annotation",{encoding:"application/x-tex"},"m")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"m")])])]),a(" 列矩阵 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",{mathvariant:"bold-italic"},"X")]),s("annotation",{encoding:"application/x-tex"},"\\boldsymbol{X}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6861em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord boldsymbol",style:{"margin-right":"0.07778em"}},"X")])])])])])]),s("li",null,[a("将 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",{mathvariant:"bold-italic"},"X")]),s("annotation",{encoding:"application/x-tex"},"\\boldsymbol{X}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6861em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord boldsymbol",style:{"margin-right":"0.07778em"}},"X")])])])])]),a(" 的每一行（代表一个属性字段）进行零均值化，即减去这一行的均值")]),s("li",null,[a("求出协方差矩阵 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",{mathvariant:"bold-italic"},"C"),s("mo",null,"="),s("mstyle",{displaystyle:"true",scriptlevel:"0"},[s("mfrac",null,[s("mn",null,"1"),s("mi",null,"m")])]),s("mi",{mathvariant:"bold-italic"},"X"),s("msup",null,[s("mi",{mathvariant:"bold-italic"},"X"),s("mi",{mathvariant:"sans-serif"},"T")])]),s("annotation",{encoding:"application/x-tex"},"\\boldsymbol{C} = \\dfrac{1}{m}\\boldsymbol{X}\\boldsymbol{X}^{\\mathsf{T}}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6861em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord boldsymbol",style:{"margin-right":"0.06979em"}},"C")])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"2.0074em","vertical-align":"-0.686em"}}),s("span",{class:"mord"},[s("span",{class:"mopen nulldelimiter"}),s("span",{class:"mfrac"},[s("span",{class:"vlist-t vlist-t2"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"1.3214em"}},[s("span",{style:{top:"-2.314em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord mathnormal"},"m")])]),s("span",{style:{top:"-3.23em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),s("span",{style:{top:"-3.677em"}},[s("span",{class:"pstrut",style:{height:"3em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"1")])])]),s("span",{class:"vlist-s"},"​")]),s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.686em"}},[s("span")])])])]),s("span",{class:"mclose nulldelimiter"})]),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord boldsymbol",style:{"margin-right":"0.07778em"}},"X")])]),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord boldsymbol",style:{"margin-right":"0.07778em"}},"X")])]),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.9251em"}},[s("span",{style:{top:"-3.139em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mathsf mtight"},"T")])])])])])])])])])])])]),s("li",null,[a("求出协方差矩阵 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",{mathvariant:"bold-italic"},"C")]),s("annotation",{encoding:"application/x-tex"},"\\boldsymbol{C}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6861em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord boldsymbol",style:{"margin-right":"0.06979em"}},"C")])])])])]),a(" 的特征值及对应的特征向量")]),s("li",null,[a("将特征向量按对应特征值大小从上到下按行排列成矩阵，取前 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"k")]),s("annotation",{encoding:"application/x-tex"},"k")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k")])])]),a(" 行组成矩阵 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",{mathvariant:"bold-italic"},"P")]),s("annotation",{encoding:"application/x-tex"},"\\boldsymbol{P}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6861em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord boldsymbol",style:{"margin-right":"0.15972em"}},"P")])])])])])]),s("li",null,[s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",{mathvariant:"bold-italic"},"Y"),s("mo",null,"="),s("mi",{mathvariant:"bold-italic"},"P"),s("mi",{mathvariant:"bold-italic"},"X")]),s("annotation",{encoding:"application/x-tex"},"\\boldsymbol{Y} = \\boldsymbol{P}\\boldsymbol{X}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6861em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord boldsymbol",style:{"margin-right":"0.25555em"}},"Y")])]),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),s("span",{class:"mrel"},"="),s("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6861em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord boldsymbol",style:{"margin-right":"0.15972em"}},"P")])]),s("span",{class:"mord"},[s("span",{class:"mord"},[s("span",{class:"mord boldsymbol",style:{"margin-right":"0.07778em"}},"X")])])])])]),a(" 即为降维到 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mi",null,"k")]),s("annotation",{encoding:"application/x-tex"},"k")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k")])])]),a(" 维后的数据")])],-1),v=i(`<h2 id="_3-使用奇异值分解进行-pca" tabindex="-1"><a class="header-anchor" href="#_3-使用奇异值分解进行-pca" aria-hidden="true">#</a> 3. 使用奇异值分解进行 PCA</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np


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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function x(y,w){const n=m("RouterLink");return l(),p("div",null,[u,e(" more "),d,s("p",null,[a("在 "),o(n,{to:"/posts/ai/linear-algebra/svd.html"},{default:c(()=>[a("SVD：奇异值分解")]),_:1}),a(" 中，我们介绍了特征值分解和奇异值分解的基本方法，本节我们将使用这两种方法进行 "),h,a("（Principal Component Analysis，PCA）。")]),k,b,g,v])}const M=t(r,[["render",x],["__file","pca.html.vue"]]);export{M as default};
