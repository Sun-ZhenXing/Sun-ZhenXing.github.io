import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as c,c as l,b as n,a,w as s,e as r,d as e}from"./app-DhX54nll.js";const i={},u=n("h1",{id:"poetry",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#poetry"},[n("span",null,"Poetry")])],-1),d={class:"table-of-contents"},y=r(`<h2 id="1-poetry-简介" tabindex="-1"><a class="header-anchor" href="#1-poetry-简介"><span>1. Poetry 简介</span></a></h2><p>Poetry 是一款用于 Python 依赖性管理和打包的工具。它允许你声明项目依赖的库，并为你管理（安装/更新）它们。Poetry 提供一个锁文件，以确保可重复安装，并可构建项目以供发布。</p><p>Poetry 需要 Python 3.8 以上版本。它是多平台的，目标是让它在 Linux、MacOS 和 Windows 上同样运行良好。</p><p>推荐使用 <code>pipx</code> 安装：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>pipx <span class="token function">install</span> poetry
</code></pre></div><p>如果你没有安装 <code>pipx</code>，可以使用 <code>pip</code> 安装 <code>pipx</code>：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> pipx
</code></pre></div><p>对于 Linux 或 MacOS 系统，可以使用官方命令安装：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-sSL</span> https://install.python-poetry.org <span class="token operator">|</span> python -
</code></pre></div><p>对于 Windows 则可以使用 PowerShell 安装：</p><div class="language-powershell" data-ext="powershell" data-title="powershell"><pre class="language-powershell"><code><span class="token punctuation">(</span><span class="token function">Invoke-WebRequest</span> <span class="token operator">-</span>Uri https:<span class="token operator">/</span><span class="token operator">/</span>install<span class="token punctuation">.</span>python-poetry<span class="token punctuation">.</span>org <span class="token operator">-</span>UseBasicParsing<span class="token punctuation">)</span><span class="token punctuation">.</span>Content <span class="token punctuation">|</span> python <span class="token operator">-</span>
</code></pre></div><p>这种方法需要手动添加路径：</p><ul><li>MacOS：<code>~/Library/Application Support/pypoetry</code></li><li>Linux/Unix：<code>~/.local/share/pypoetry</code></li><li>Windows：<code>%APPDATA%\\pypoetry</code></li></ul><h2 id="2-poetry-基本使用" tabindex="-1"><a class="header-anchor" href="#2-poetry-基本使用"><span>2. Poetry 基本使用</span></a></h2><p>查看命令的使用方式：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>poetry list
</code></pre></div><p>创建项目：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>poetry new poetry-demo
</code></pre></div><p>这将生成如下目录：</p><div class="language-console" data-ext="console" data-title="console"><pre class="language-console"><code>poetry-demo
├── pyproject.toml
├── README.md
├── poetry_demo
│   └── __init__.py
└── tests
    └── __init__.py
</code></pre></div><p>初始化项目：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> pre-existing-project
poetry init
</code></pre></div><p>这总是可以配合虚拟环境使用。</p><p>Poetry 还可以配合 <a href="https://pre-commit.com/" target="_blank" rel="noopener noreferrer"><code>pre-commit</code></a> 使用，可以在项目中添加 <code>.pre-commit-config.yaml</code> 文件，然后运行 <code>pre-commit install</code> 安装钩子。</p><div class="language-yaml" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token key atrule">repos</span><span class="token punctuation">:</span>
<span class="token punctuation">-</span>   <span class="token key atrule">repo</span><span class="token punctuation">:</span> https<span class="token punctuation">:</span>//github.com/python<span class="token punctuation">-</span>poetry/poetry
    <span class="token key atrule">rev</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span>  <span class="token comment"># add version here</span>
    <span class="token key atrule">hooks</span><span class="token punctuation">:</span>
    <span class="token punctuation">-</span>   <span class="token key atrule">id</span><span class="token punctuation">:</span> poetry<span class="token punctuation">-</span>check
        <span class="token key atrule">args</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;-C&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;./subdirectory&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">-</span>   <span class="token key atrule">id</span><span class="token punctuation">:</span> poetry<span class="token punctuation">-</span>lock
        <span class="token key atrule">args</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;-C&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;./subdirectory&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">-</span>   <span class="token key atrule">id</span><span class="token punctuation">:</span> poetry<span class="token punctuation">-</span>export
        <span class="token key atrule">args</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;-C&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;./subdirectory&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-f&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;requirements.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-o&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;./subdirectory/requirements.txt&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">-</span>   <span class="token key atrule">id</span><span class="token punctuation">:</span> poetry<span class="token punctuation">-</span>install
        <span class="token key atrule">args</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;-C&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;./subdirectory&quot;</span><span class="token punctuation">]</span>
</code></pre></div>`,25);function k(h,g){const t=p("router-link");return c(),l("div",null,[u,n("nav",d,[n("ul",null,[n("li",null,[a(t,{to:"#1-poetry-简介"},{default:s(()=>[e("1. Poetry 简介")]),_:1})]),n("li",null,[a(t,{to:"#2-poetry-基本使用"},{default:s(()=>[e("2. Poetry 基本使用")]),_:1})])])]),y])}const P=o(i,[["render",k],["__file","poetry.html.vue"]]),_=JSON.parse('{"path":"/posts/python/tools/pyenv/poetry/poetry.html","title":"Poetry","lang":"zh-CN","frontmatter":{"description":"Poetry 1. Poetry 简介 Poetry 是一款用于 Python 依赖性管理和打包的工具。它允许你声明项目依赖的库，并为你管理（安装/更新）它们。Poetry 提供一个锁文件，以确保可重复安装，并可构建项目以供发布。 Poetry 需要 Python 3.8 以上版本。它是多平台的，目标是让它在 Linux、MacOS 和 Windows...","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/posts/python/tools/pyenv/poetry/poetry.html"}],["meta",{"property":"og:site_name","content":"鸭梨"}],["meta",{"property":"og:title","content":"Poetry"}],["meta",{"property":"og:description","content":"Poetry 1. Poetry 简介 Poetry 是一款用于 Python 依赖性管理和打包的工具。它允许你声明项目依赖的库，并为你管理（安装/更新）它们。Poetry 提供一个锁文件，以确保可重复安装，并可构建项目以供发布。 Poetry 需要 Python 3.8 以上版本。它是多平台的，目标是让它在 Linux、MacOS 和 Windows..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-27T04:16:18.000Z"}],["meta",{"property":"article:author","content":"Alex Sun"}],["meta",{"property":"article:modified_time","content":"2024-05-27T04:16:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Poetry\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-27T04:16:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Alex Sun\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[{"level":2,"title":"1. Poetry 简介","slug":"1-poetry-简介","link":"#1-poetry-简介","children":[]},{"level":2,"title":"2. Poetry 基本使用","slug":"2-poetry-基本使用","link":"#2-poetry-基本使用","children":[]}],"git":{"createdTime":1716783378000,"updatedTime":1716783378000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":1.16,"words":347},"filePathRelative":"posts/python/tools/pyenv/poetry/poetry.md","localizedDate":"2024年5月27日","excerpt":"\\n\\n<h2>1. Poetry 简介</h2>\\n<p>Poetry 是一款用于 Python 依赖性管理和打包的工具。它允许你声明项目依赖的库，并为你管理（安装/更新）它们。Poetry 提供一个锁文件，以确保可重复安装，并可构建项目以供发布。</p>\\n<p>Poetry 需要 Python 3.8 以上版本。它是多平台的，目标是让它在 Linux、MacOS 和 Windows 上同样运行良好。</p>\\n<p>推荐使用 <code>pipx</code> 安装：</p>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code>pipx <span class=\\"token function\\">install</span> poetry\\n</code></pre></div>","autoDesc":true}');export{P as comp,_ as data};
