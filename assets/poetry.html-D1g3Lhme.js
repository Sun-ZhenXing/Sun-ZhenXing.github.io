import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as l,o as h,c as p,b as i,a as e,w as a,e as r,d as t}from"./app-mQJDQ8JG.js";const k={},d=i("h1",{id:"poetry",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#poetry"},[i("span",null,"Poetry")])],-1),o={class:"table-of-contents"},c=r(`<h2 id="1-poetry-简介" tabindex="-1"><a class="header-anchor" href="#1-poetry-简介"><span>1. Poetry 简介</span></a></h2><p>Poetry 是一款用于 Python 依赖性管理和打包的工具。它允许你声明项目依赖的库，并为你管理（安装/更新）它们。Poetry 提供一个锁文件，以确保可重复安装，并可构建项目以供发布。</p><p>Poetry 需要 Python 3.8 以上版本。它是多平台的，目标是让它在 Linux、MacOS 和 Windows 上同样运行良好。</p><p>推荐使用 <code>pipx</code> 安装：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">pipx</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> poetry</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果你没有安装 <code>pipx</code>，可以使用 <code>pip</code> 安装 <code>pipx</code>：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> pipx</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>对于 Linux 或 MacOS 系统，可以使用官方命令安装：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> -sSL</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> https://install.python-poetry.org</span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;"> python</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> -</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>对于 Windows 则可以使用 PowerShell 安装：</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">Invoke-WebRequest</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;"> -</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">Uri https:</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">//</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">install.python</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">poetry.org </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">UseBasicParsing).Content </span><span style="--shiki-light:#D73A49;--shiki-dark:#ABB2BF;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> python </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这种方法需要手动添加路径：</p><ul><li>MacOS：<code>~/Library/Application Support/pypoetry</code></li><li>Linux/Unix：<code>~/.local/share/pypoetry</code></li><li>Windows：<code>%APPDATA%\\pypoetry</code></li></ul><h2 id="2-poetry-基本使用" tabindex="-1"><a class="header-anchor" href="#2-poetry-基本使用"><span>2. Poetry 基本使用</span></a></h2><p>查看命令的使用方式：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">poetry</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> list</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>创建项目：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">poetry</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> new</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> poetry-demo</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这将生成如下目录：</p><div class="language-console line-numbers-mode" data-highlighter="shiki" data-ext="console" data-title="console" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">poetry-demo</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">├── pyproject.toml</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">├── README.md</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">├── poetry_demo</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">│   └── __init__.py</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">└── tests</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#ABB2BF;">    └── __init__.py</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初始化项目：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> pre-existing-project</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">poetry</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> init</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>这总是可以配合虚拟环境使用。</p><p>Poetry 还可以配合 <a href="https://pre-commit.com/" target="_blank" rel="noopener noreferrer"><code>pre-commit</code></a> 使用，可以在项目中添加 <code>.pre-commit-config.yaml</code> 文件，然后运行 <code>pre-commit install</code> 安装钩子。</p><div class="language-yml line-numbers-mode" data-highlighter="shiki" data-ext="yml" data-title="yml" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">repos</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">-   </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">repo</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">https://github.com/python-poetry/poetry</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    rev</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;&#39;</span><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">  # add version here</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">    hooks</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    -   </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">poetry-check</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">        args</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;-C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;./subdirectory&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    -   </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">poetry-lock</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">        args</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;-C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;./subdirectory&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    -   </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">poetry-export</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">        args</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;-C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;./subdirectory&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;-f&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;requirements.txt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;-o&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;./subdirectory/requirements.txt&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">    -   </span><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">id</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">poetry-install</span></span>
<span class="line"><span style="--shiki-light:#22863A;--shiki-dark:#E06C75;">        args</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;-C&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&quot;./subdirectory&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,25);function y(g,u){const s=l("router-link");return h(),p("div",null,[d,i("nav",o,[i("ul",null,[i("li",null,[e(s,{to:"#1-poetry-简介"},{default:a(()=>[t("1. Poetry 简介")]),_:1})]),i("li",null,[e(s,{to:"#2-poetry-基本使用"},{default:a(()=>[t("2. Poetry 基本使用")]),_:1})])])]),c])}const m=n(k,[["render",y],["__file","poetry.html.vue"]]),v=JSON.parse('{"path":"/posts/python/tools/pyenv/poetry/poetry.html","title":"Poetry","lang":"zh-CN","frontmatter":{"description":"Poetry 1. Poetry 简介 Poetry 是一款用于 Python 依赖性管理和打包的工具。它允许你声明项目依赖的库，并为你管理（安装/更新）它们。Poetry 提供一个锁文件，以确保可重复安装，并可构建项目以供发布。 Poetry 需要 Python 3.8 以上版本。它是多平台的，目标是让它在 Linux、MacOS 和 Windows...","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/posts/python/tools/pyenv/poetry/poetry.html"}],["meta",{"property":"og:site_name","content":"鸭梨"}],["meta",{"property":"og:title","content":"Poetry"}],["meta",{"property":"og:description","content":"Poetry 1. Poetry 简介 Poetry 是一款用于 Python 依赖性管理和打包的工具。它允许你声明项目依赖的库，并为你管理（安装/更新）它们。Poetry 提供一个锁文件，以确保可重复安装，并可构建项目以供发布。 Poetry 需要 Python 3.8 以上版本。它是多平台的，目标是让它在 Linux、MacOS 和 Windows..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-27T04:16:18.000Z"}],["meta",{"property":"article:author","content":"Alex Sun"}],["meta",{"property":"article:modified_time","content":"2024-05-27T04:16:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Poetry\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-27T04:16:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Alex Sun\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[{"level":2,"title":"1. Poetry 简介","slug":"1-poetry-简介","link":"#1-poetry-简介","children":[]},{"level":2,"title":"2. Poetry 基本使用","slug":"2-poetry-基本使用","link":"#2-poetry-基本使用","children":[]}],"git":{"createdTime":1716783378000,"updatedTime":1716783378000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":1.16,"words":347},"filePathRelative":"posts/python/tools/pyenv/poetry/poetry.md","localizedDate":"2024年5月27日","excerpt":"\\n\\n<h2>1. Poetry 简介</h2>\\n<p>Poetry 是一款用于 Python 依赖性管理和打包的工具。它允许你声明项目依赖的库，并为你管理（安装/更新）它们。Poetry 提供一个锁文件，以确保可重复安装，并可构建项目以供发布。</p>\\n<p>Poetry 需要 Python 3.8 以上版本。它是多平台的，目标是让它在 Linux、MacOS 和 Windows 上同样运行良好。</p>\\n<p>推荐使用 <code>pipx</code> 安装：</p>\\n<div class=\\"language-bash line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"bash\\" data-title=\\"bash\\" style=\\"--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes github-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#6F42C1;--shiki-dark:#61AFEF\\">pipx</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> install</span><span style=\\"--shiki-light:#032F62;--shiki-dark:#98C379\\"> poetry</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{m as comp,v as data};