import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,o as u,c as r,b as n,a,w as e,d as s,e as o}from"./app-DhX54nll.js";const d={},k=n("h1",{id:"在微服务中使用-cython-安全地构建镜像",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#在微服务中使用-cython-安全地构建镜像"},[n("span",null,"在微服务中使用 Cython 安全地构建镜像")])],-1),m={class:"table-of-contents"},v=o(`<h2 id="1-python-部署服务的问题" tabindex="-1"><a class="header-anchor" href="#1-python-部署服务的问题"><span>1. Python 部署服务的问题</span></a></h2><p>微服务变得越来越流行。我们常常使用如下的 <code>Dockerfile</code> 来构建 Python 服务的镜像：</p><div class="language-docker" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> python:3.10-slim-bookworm</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token instruction"><span class="token keyword">COPY</span> . ./</span>

<span class="token instruction"><span class="token keyword">ENV</span> PYPI_MIRROR_URL=https://pypi.org/simple</span>

<span class="token instruction"><span class="token keyword">RUN</span> pip -V <span class="token operator">\\</span>
    &amp;&amp; python -m pip install -i <span class="token variable">\${PYPI_MIRROR_URL}</span> --upgrade pip <span class="token operator">\\</span>
    &amp;&amp; pip config set global.index-url <span class="token variable">\${PYPI_MIRROR_URL}</span> <span class="token operator">\\</span>
    &amp;&amp; pip install -r requirements.txt</span>

<span class="token instruction"><span class="token keyword">EXPOSE</span> 8081</span>

<span class="token instruction"><span class="token keyword">CMD</span> [ <span class="token string">&quot;python&quot;</span>, <span class="token string">&quot;server.py&quot;</span> ]</span>
</code></pre></div><p>每次我们都从项目中复制源代码，然后安装依赖。对于任何应用，直接使用源代码发布到生产环境不安全，容易在部署中泄漏重要信息。</p><p>而且原始的 Python 代码执行比较低效，需要从头开始解释执行。Python 会在第一次执行项目时，将包内的代码编译为字节码（<code>.pyc</code> 文件），这样可以提高 Python 运行的效率。同样我们也可以直接发布字节码文件，但是我们使用字节码发布同样不安全（字节码可以轻易逆向为源代码）。</p><p>下面我们将介绍 Cython，它可以帮助我们解决这些问题。</p><h2 id="2-使用-cython-构建镜像" tabindex="-1"><a class="header-anchor" href="#2-使用-cython-构建镜像"><span>2. 使用 Cython 构建镜像</span></a></h2><h3 id="21-cython-简介" tabindex="-1"><a class="header-anchor" href="#21-cython-简介"><span>2.1 Cython 简介</span></a></h3><p>Cython 通过将 Python 代码翻译为 C/C++ 代码，然后编译为原生的机器码，从而提高了 Python 代码的执行效率，并同时保护了源代码。</p><p>Cython 构建产物为动态链接库（共享库）文件，在 Linux/Unix 系统中为 <code>.so</code> 文件，在 Windows 系统中为 <code>.pyd</code> 文件，其命名为 <code>package_name.python_version-platform_info.so</code>。</p><p>Python 解释器能够识别出这些文件，并可以像标准的 <code>.py</code> 文件或者 <code>.pyc</code> 文件一样加载它们，如 <code>import package_name</code> 是有效的。当这些共享库和包名同名的 Python 文件同时存在时，Python 解释器会优先加载共享库文件。</p><blockquote><p><code>.py</code> 文件和环境相关性最小。而 <code>.pyc</code> 没有平台依赖，但是有 Python 版本依赖，通过 <code>.pyc</code> 能够反射出源代码。共享库文件是原生的机器代码，有平台依赖，同时也有 Python 版本依赖，但是它们不能反射出源代码。</p></blockquote><p>使用 Cython 之前，你需要检查你的项目是否满足要求：</p><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 项目正确配置了 <code>setup.py</code> 文件</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 每个包所在的文件夹存在 <code>__init__.py</code> 文件，否则无法被识别为包，生成的目标文件夹内不生成对应文件</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 计算机中安装了正确的编译器，如 GCC、Clang 或 MSVC 等</label></li></ul><p>首先，我们安装 Cython：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> <span class="token parameter variable">-U</span> cython
</code></pre></div><h3 id="22-编译示例" tabindex="-1"><a class="header-anchor" href="#22-编译示例"><span>2.2 编译示例</span></a></h3><p>假设我们有一个后端服务项目结构如下：</p><ul><li><code>resources/</code>：项目用到的资源文件</li><li><code>demo_server/</code><ul><li><code>models/</code><ul><li><code>__init__.py</code></li><li><code>xxx.py</code></li></ul></li><li><code>services/</code><ul><li><code>__init__.py</code></li><li><code>xxx.py</code></li></ul></li><li><code>utils/</code><ul><li><code>__init__.py</code></li><li><code>xxx.py</code></li></ul></li><li><code>__init__.py</code></li><li><code>core.py</code></li></ul></li><li><code>server.py</code>：主入口文件</li><li><code>setup.py</code>：包配置文件</li><li><code>requirements.txt</code>：依赖文件</li></ul><p>首先，我们需要一个 <code>setup.py</code> 文件，用于配置编译选项：</p><div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> distutils<span class="token punctuation">.</span>core <span class="token keyword">import</span> setup

<span class="token keyword">from</span> Cython<span class="token punctuation">.</span>Build <span class="token keyword">import</span> cythonize

setup<span class="token punctuation">(</span>
    name<span class="token operator">=</span><span class="token string">&quot;demo_server&quot;</span><span class="token punctuation">,</span>
    ext_modules<span class="token operator">=</span>cythonize<span class="token punctuation">(</span>
        <span class="token punctuation">[</span>
            <span class="token string">&quot;server.py&quot;</span><span class="token punctuation">,</span>
            <span class="token string">&quot;demo_server/**/*.py&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">]</span><span class="token punctuation">,</span>
        compiler_directives<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&quot;language_level&quot;</span><span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre></div><p>此处我们指定了 Python 版本为 3，然后指定了 Cython 需要编译的目录和文件。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>python setup.py build_ext <span class="token parameter variable">-b</span> lib
</code></pre></div><p><code>-b</code> 选项将指定生成目标文件的路径，此处指定为 <code>lib/</code> 文件夹。</p><p>构建完成后，<code>lib/</code>，文件夹将生成与项目一致的目录结构，但是其中的 <code>.py</code> 文件都被编译为了 <code>.so</code> 或 <code>.pyd</code> 文件。这一过程将生成大量 <code>.c</code> 文件，如果不需要可以删除。</p><h3 id="23-dockerfile-示例" tabindex="-1"><a class="header-anchor" href="#23-dockerfile-示例"><span>2.3 Dockerfile 示例</span></a></h3><p>现在我们提供一个新的 <code>Dockerfile</code>，用于完成以上构建步骤。注意 Cython 构建时不需要安装其他 <code>requirements.txt</code> 中的依赖。</p><p>我们可以使用 Dockerfile 的多阶段构建来完成这一过程，使用包含标准编译器的镜像构建，然后使用更轻的镜像来发布。</p><div class="language-docker line-numbers-mode" data-ext="docker" data-title="docker"><pre class="language-docker"><code><span class="token instruction"><span class="token keyword">FROM</span> python:3.10.13-bookworm <span class="token keyword">as</span> builder</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token instruction"><span class="token keyword">ARG</span> PYPI_MIRROR_URL=https://pypi.org/simple</span>

<span class="token instruction"><span class="token keyword">COPY</span> . ./</span>

<span class="token instruction"><span class="token keyword">RUN</span> pip -V <span class="token operator">\\</span>
    &amp;&amp; python -m pip install -i <span class="token variable">\${PYPI_MIRROR_URL}</span> --upgrade pip <span class="token operator">\\</span>
    &amp;&amp; pip config set global.index-url <span class="token variable">\${PYPI_MIRROR_URL}</span> <span class="token operator">\\</span>
    &amp;&amp; pip install Cython <span class="token operator">\\</span>
    &amp;&amp; python setup.py build_ext -b lib <span class="token operator">\\</span>
    &amp;&amp; cp -rf requirements.txt lib/ <span class="token operator">\\</span>
    &amp;&amp; cp -rf resources/ lib/</span>

<span class="token instruction"><span class="token keyword">FROM</span> python:3.10.13-slim-bookworm</span>

<span class="token instruction"><span class="token keyword">WORKDIR</span> /app</span>

<span class="token instruction"><span class="token keyword">COPY</span> <span class="token options"><span class="token property">--from</span><span class="token punctuation">=</span><span class="token string">builder</span></span> /app/lib /app</span>

<span class="token instruction"><span class="token keyword">RUN</span> pip -V <span class="token operator">\\</span>
    &amp;&amp; python -m pip install -i <span class="token variable">\${PYPI_MIRROR_URL}</span> --upgrade pip <span class="token operator">\\</span>
    &amp;&amp; pip config set global.index-url <span class="token variable">\${PYPI_MIRROR_URL}</span> <span class="token operator">\\</span>
    &amp;&amp; pip install -r requirements.txt</span>

<span class="token instruction"><span class="token keyword">EXPOSE</span> 8081</span>

<span class="token instruction"><span class="token keyword">CMD</span> [ <span class="token string">&quot;python&quot;</span>, <span class="token string">&quot;server.py&quot;</span> ]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果直接复制上述 <code>Dockerfile</code>，别忘了加上 <code>.dockerignore</code> 文件，忽略掉各种我们不需要的文件：</p><details class="hint-container details"><summary>dockerignore</summary><div class="language-properties line-numbers-mode" data-ext="properties" data-title="properties"><pre class="language-properties"><code><span class="token comment"># git</span>
.git
.gitignore

<span class="token comment"># Environments</span>
.env
.venv
env/
venv/
ENV/
env.bak/
venv.bak/

<span class="token comment"># Byte-compiled / optimized / DLL files</span>
__pycache__/
*.py[cod]
*$py.class

<span class="token comment"># C extensions</span>
*.so

<span class="token comment"># Distribution / packaging</span>
.Python
build/
develop-eggs/
dist/
downloads/
eggs/
.eggs/
lib/
lib64/
parts/
sdist/
var/
wheels/
share/python-wheels/
*.egg-info/
.installed.cfg
*.egg
MANIFEST

<span class="token comment"># PyInstaller</span>
<span class="token comment">#  Usually these files are written by a python script from a template</span>
<span class="token comment">#  before PyInstaller builds the exe, so as to inject date/other infos into it.</span>
*.manifest
*.spec

<span class="token comment"># Installer logs</span>
pip-log.txt
pip-delete-this-directory.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="3-动态导入和路由发现" tabindex="-1"><a class="header-anchor" href="#3-动态导入和路由发现"><span>3. 动态导入和路由发现</span></a></h2>`,32),b=n("code",null,"importlib",-1),y=o(`<p>我们在构建网络服务时常常使用一些元编程技巧，这常常需要借助运行时反射来实现。如 SpringBoot 中的 <code>@ComponentScan</code> 能够自动扫描并加载所有的 <code>@Component</code> 注解的类，然后将它们注册到 IoC 容器中。</p><p>通常静态构建后会损失一些元信息，如果有特定模块或库依赖这些元信息运行则会导致一些问题。</p><p>在 Python 中，我们常常使用自定义装饰器来完成相应的功能。例如，在 <a href="https://sanic.dev/" target="_blank" rel="noopener noreferrer">Sanic</a> 中我们可以使用 <a href="https://sanic.dev/en/guide/how-to/autodiscovery.html" target="_blank" rel="noopener noreferrer">自动路由发现</a> 来自动注册路由，从而无需编写引入代码。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">from</span> glob <span class="token keyword">import</span> glob
<span class="token keyword">from</span> importlib <span class="token keyword">import</span> util
<span class="token keyword">from</span> inspect <span class="token keyword">import</span> getmembers
<span class="token keyword">from</span> types <span class="token keyword">import</span> ModuleType

<span class="token keyword">from</span> sanic <span class="token keyword">import</span> Sanic
<span class="token keyword">from</span> sanic<span class="token punctuation">.</span>blueprints <span class="token keyword">import</span> Blueprint
<span class="token keyword">from</span> sanic<span class="token punctuation">.</span>log <span class="token keyword">import</span> logger

<span class="token keyword">def</span> <span class="token function">autodiscover</span><span class="token punctuation">(</span>app<span class="token punctuation">:</span> Sanic<span class="token punctuation">,</span> path<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">set</span><span class="token punctuation">[</span>Blueprint<span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;自动路由发现，在 App 上自动注册 \`Blueprint\`

    Referece: &lt;https://sanic.dev/en/guide/how-to/autodiscovery.html&gt;
    &quot;&quot;&quot;</span>
    blueprint_set<span class="token punctuation">:</span> <span class="token builtin">set</span><span class="token punctuation">[</span>Blueprint<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    imported_set<span class="token punctuation">:</span> <span class="token builtin">set</span><span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">_find_bps</span><span class="token punctuation">(</span>module<span class="token punctuation">:</span> ModuleType<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">nonlocal</span> blueprint_set

        <span class="token keyword">for</span> _<span class="token punctuation">,</span> member <span class="token keyword">in</span> getmembers<span class="token punctuation">(</span>module<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>member<span class="token punctuation">,</span> Blueprint<span class="token punctuation">)</span><span class="token punctuation">:</span>
                blueprint_set<span class="token punctuation">.</span>add<span class="token punctuation">(</span>member<span class="token punctuation">)</span>

    path <span class="token operator">=</span> path<span class="token punctuation">.</span>removesuffix<span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>removesuffix<span class="token punctuation">(</span><span class="token string">&quot;\\\\&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> path <span class="token keyword">in</span> glob<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>path<span class="token punctuation">}</span></span><span class="token string">/**/*.py&quot;</span></span><span class="token punctuation">,</span> recursive<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token string">&quot;__pycache__&quot;</span> <span class="token keyword">in</span> path<span class="token punctuation">:</span>
            <span class="token keyword">continue</span>
        <span class="token keyword">if</span> path <span class="token keyword">not</span> <span class="token keyword">in</span> imported_set<span class="token punctuation">:</span>
            path <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>normpath<span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&quot;\\\\&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
            name <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
            <span class="token keyword">if</span> <span class="token string">&quot;__init__&quot;</span> <span class="token keyword">in</span> path<span class="token punctuation">:</span>
                name <span class="token operator">=</span> path<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                name <span class="token operator">=</span> path<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
                name <span class="token operator">=</span> name<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
            spec <span class="token operator">=</span> util<span class="token punctuation">.</span>spec_from_file_location<span class="token punctuation">(</span>name<span class="token punctuation">,</span> path<span class="token punctuation">)</span>
            <span class="token keyword">if</span> spec <span class="token keyword">is</span> <span class="token boolean">None</span> <span class="token keyword">or</span> spec<span class="token punctuation">.</span>loader <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
                <span class="token keyword">continue</span>
            specmod <span class="token operator">=</span> util<span class="token punctuation">.</span>module_from_spec<span class="token punctuation">(</span>spec<span class="token punctuation">)</span>
            imported_set<span class="token punctuation">.</span>add<span class="token punctuation">(</span>path<span class="token punctuation">)</span>
            spec<span class="token punctuation">.</span>loader<span class="token punctuation">.</span>exec_module<span class="token punctuation">(</span>specmod<span class="token punctuation">)</span>
            _find_bps<span class="token punctuation">(</span>specmod<span class="token punctuation">)</span>

    <span class="token keyword">for</span> bp <span class="token keyword">in</span> blueprint_set<span class="token punctuation">:</span>
        app<span class="token punctuation">.</span>blueprint<span class="token punctuation">(</span>bp<span class="token punctuation">)</span>
        logger<span class="token punctuation">.</span>info<span class="token punctuation">(</span><span class="token string">&quot;Auto discover Blueprint: {!r}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>bp<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> blueprint_set
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码在源代码模式下运行良好，但是编译为链接库后无法运行，因为 <code>importlib.util.spec_from_file_location()</code> 无法识别链接库中的文件。</p><p><code>spec_from_file_location()</code> 有一个参数 <code>loader</code>，如果没有传入，默认情况下将使用 <code>importlib.machinery.SourceFileLoader</code>，它只能加载源代码文件。我们可以自定义一个 <code>loader</code>，用于加载链接库中的文件。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> os
<span class="token keyword">from</span> glob <span class="token keyword">import</span> iglob
<span class="token keyword">from</span> importlib <span class="token keyword">import</span> machinery<span class="token punctuation">,</span> util
<span class="token keyword">from</span> inspect <span class="token keyword">import</span> getmembers
<span class="token keyword">from</span> itertools <span class="token keyword">import</span> chain
<span class="token keyword">from</span> types <span class="token keyword">import</span> ModuleType

<span class="token keyword">from</span> sanic <span class="token keyword">import</span> Sanic
<span class="token keyword">from</span> sanic<span class="token punctuation">.</span>blueprints <span class="token keyword">import</span> Blueprint
<span class="token keyword">from</span> sanic<span class="token punctuation">.</span>log <span class="token keyword">import</span> logger

<span class="token keyword">def</span> <span class="token function">autodiscover</span><span class="token punctuation">(</span>app<span class="token punctuation">:</span> Sanic<span class="token punctuation">,</span> path<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">set</span><span class="token punctuation">[</span>Blueprint<span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;自动路由发现，在 App 上自动注册 \`Blueprint\`

    Referece: &lt;https://sanic.dev/en/guide/how-to/autodiscovery.html&gt;
    &quot;&quot;&quot;</span>
    blueprint_set<span class="token punctuation">:</span> <span class="token builtin">set</span><span class="token punctuation">[</span>Blueprint<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    imported_set<span class="token punctuation">:</span> <span class="token builtin">set</span><span class="token punctuation">[</span><span class="token builtin">str</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">_find_bps</span><span class="token punctuation">(</span>module<span class="token punctuation">:</span> ModuleType<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">nonlocal</span> blueprint_set

        <span class="token keyword">for</span> _<span class="token punctuation">,</span> member <span class="token keyword">in</span> getmembers<span class="token punctuation">(</span>module<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>member<span class="token punctuation">,</span> Blueprint<span class="token punctuation">)</span><span class="token punctuation">:</span>
                blueprint_set<span class="token punctuation">.</span>add<span class="token punctuation">(</span>member<span class="token punctuation">)</span>

    path <span class="token operator">=</span> path<span class="token punctuation">.</span>removesuffix<span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>removesuffix<span class="token punctuation">(</span><span class="token string">&quot;\\\\&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> path <span class="token keyword">in</span> chain<span class="token punctuation">(</span>
        <span class="token operator">*</span><span class="token punctuation">(</span>
            iglob<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>path<span class="token punctuation">}</span></span><span class="token string">/**/*.</span><span class="token interpolation"><span class="token punctuation">{</span>ext<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">,</span> recursive<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
            <span class="token keyword">for</span> ext <span class="token keyword">in</span> <span class="token punctuation">(</span><span class="token string">&quot;py&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pyc&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pyo&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;pyd&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;so&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;dylib&quot;</span><span class="token punctuation">)</span>
        <span class="token punctuation">)</span>
    <span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token string">&quot;__pycache__&quot;</span> <span class="token keyword">in</span> path<span class="token punctuation">:</span>
            <span class="token keyword">continue</span>
        <span class="token keyword">if</span> path <span class="token keyword">not</span> <span class="token keyword">in</span> imported_set<span class="token punctuation">:</span>
            path <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>normpath<span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&quot;\\\\&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span>
            name <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
            <span class="token keyword">if</span> <span class="token string">&quot;__init__&quot;</span> <span class="token keyword">in</span> path<span class="token punctuation">:</span>
                name <span class="token operator">=</span> path<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                name <span class="token operator">=</span> path<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
                name <span class="token operator">=</span> name<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
            loader <span class="token operator">=</span> <span class="token boolean">None</span>
            <span class="token keyword">if</span> path<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&quot;.so&quot;</span><span class="token punctuation">)</span> <span class="token keyword">or</span> path<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&quot;.dylib&quot;</span><span class="token punctuation">)</span> <span class="token keyword">or</span> path<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&quot;.pyd&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                loader <span class="token operator">=</span> machinery<span class="token punctuation">.</span>ExtensionFileLoader<span class="token punctuation">(</span>name<span class="token punctuation">,</span> path<span class="token punctuation">)</span>
            <span class="token keyword">elif</span> path<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&quot;.pyc&quot;</span><span class="token punctuation">)</span> <span class="token keyword">or</span> path<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&quot;.pyo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                loader <span class="token operator">=</span> machinery<span class="token punctuation">.</span>SourcelessFileLoader<span class="token punctuation">(</span>name<span class="token punctuation">,</span> path<span class="token punctuation">)</span>
            <span class="token keyword">elif</span> path<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&quot;.py&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                loader <span class="token operator">=</span> machinery<span class="token punctuation">.</span>SourceFileLoader<span class="token punctuation">(</span>name<span class="token punctuation">,</span> path<span class="token punctuation">)</span>
            <span class="token keyword">if</span> loader <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
                <span class="token keyword">continue</span>
            spec <span class="token operator">=</span> util<span class="token punctuation">.</span>spec_from_file_location<span class="token punctuation">(</span>name<span class="token punctuation">,</span> path<span class="token punctuation">,</span> loader<span class="token operator">=</span>loader<span class="token punctuation">)</span>
            <span class="token keyword">if</span> spec <span class="token keyword">is</span> <span class="token boolean">None</span> <span class="token keyword">or</span> spec<span class="token punctuation">.</span>loader <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
                <span class="token keyword">continue</span>
            specmod <span class="token operator">=</span> util<span class="token punctuation">.</span>module_from_spec<span class="token punctuation">(</span>spec<span class="token punctuation">)</span>
            imported_set<span class="token punctuation">.</span>add<span class="token punctuation">(</span>path<span class="token punctuation">)</span>
            spec<span class="token punctuation">.</span>loader<span class="token punctuation">.</span>exec_module<span class="token punctuation">(</span>specmod<span class="token punctuation">)</span>
            _find_bps<span class="token punctuation">(</span>specmod<span class="token punctuation">)</span>

    <span class="token keyword">for</span> bp <span class="token keyword">in</span> blueprint_set<span class="token punctuation">:</span>
        app<span class="token punctuation">.</span>blueprint<span class="token punctuation">(</span>bp<span class="token punctuation">)</span>
        logger<span class="token punctuation">.</span>info<span class="token punctuation">(</span><span class="token string">&quot;Auto discover Blueprint: {!r}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>bp<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> blueprint_set
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function h(g,_){const t=p("router-link"),i=p("RouteLink"),l=p("Badge");return u(),r("div",null,[k,n("nav",m,[n("ul",null,[n("li",null,[a(t,{to:"#1-python-部署服务的问题"},{default:e(()=>[s("1. Python 部署服务的问题")]),_:1})]),n("li",null,[a(t,{to:"#2-使用-cython-构建镜像"},{default:e(()=>[s("2. 使用 Cython 构建镜像")]),_:1}),n("ul",null,[n("li",null,[a(t,{to:"#21-cython-简介"},{default:e(()=>[s("2.1 Cython 简介")]),_:1})]),n("li",null,[a(t,{to:"#22-编译示例"},{default:e(()=>[s("2.2 编译示例")]),_:1})]),n("li",null,[a(t,{to:"#23-dockerfile-示例"},{default:e(()=>[s("2.3 Dockerfile 示例")]),_:1})])])]),n("li",null,[a(t,{to:"#3-动态导入和路由发现"},{default:e(()=>[s("3. 动态导入和路由发现")]),_:1})])])]),v,n("p",null,[s("以下内容需要对 Python 的 "),b,s(" 模块有一定的了解，如果你不了解如何动态导入模块，可以参考 "),a(i,{to:"/posts/python/basic/collections/import-python-file-from-path.html"},{default:e(()=>[s("此文章")]),_:1}),s("。")]),y,n("p",null,[s("现在它可以在各种环境下正确地注册路由了，如果你对此感兴趣，可以查看 "),a(l,{type:"danger",vertical:"inherit"},{default:e(()=>[s("TODO")]),_:1}),s(" 示例项目 了解更多。")])])}const q=c(d,[["render",h],["__file","cython-build-image.html.vue"]]),x=JSON.parse('{"path":"/posts/python/awesome/cython-build-image.html","title":"在微服务中使用 Cython 安全地构建镜像","lang":"zh-CN","frontmatter":{"description":"在微服务中使用 Cython 安全地构建镜像 1. Python 部署服务的问题 微服务变得越来越流行。我们常常使用如下的 Dockerfile 来构建 Python 服务的镜像： 每次我们都从项目中复制源代码，然后安装依赖。对于任何应用，直接使用源代码发布到生产环境不安全，容易在部署中泄漏重要信息。 而且原始的 Python 代码执行比较低效，需要从...","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/posts/python/awesome/cython-build-image.html"}],["meta",{"property":"og:site_name","content":"鸭梨"}],["meta",{"property":"og:title","content":"在微服务中使用 Cython 安全地构建镜像"}],["meta",{"property":"og:description","content":"在微服务中使用 Cython 安全地构建镜像 1. Python 部署服务的问题 微服务变得越来越流行。我们常常使用如下的 Dockerfile 来构建 Python 服务的镜像： 每次我们都从项目中复制源代码，然后安装依赖。对于任何应用，直接使用源代码发布到生产环境不安全，容易在部署中泄漏重要信息。 而且原始的 Python 代码执行比较低效，需要从..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-27T04:16:18.000Z"}],["meta",{"property":"article:author","content":"Alex Sun"}],["meta",{"property":"article:modified_time","content":"2024-05-27T04:16:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"在微服务中使用 Cython 安全地构建镜像\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-27T04:16:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Alex Sun\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[{"level":2,"title":"1. Python 部署服务的问题","slug":"1-python-部署服务的问题","link":"#1-python-部署服务的问题","children":[]},{"level":2,"title":"2. 使用 Cython 构建镜像","slug":"2-使用-cython-构建镜像","link":"#2-使用-cython-构建镜像","children":[{"level":3,"title":"2.1 Cython 简介","slug":"21-cython-简介","link":"#21-cython-简介","children":[]},{"level":3,"title":"2.2 编译示例","slug":"22-编译示例","link":"#22-编译示例","children":[]},{"level":3,"title":"2.3 Dockerfile 示例","slug":"23-dockerfile-示例","link":"#23-dockerfile-示例","children":[]}]},{"level":2,"title":"3. 动态导入和路由发现","slug":"3-动态导入和路由发现","link":"#3-动态导入和路由发现","children":[]}],"git":{"createdTime":1716783378000,"updatedTime":1716783378000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":6.33,"words":1899},"filePathRelative":"posts/python/awesome/cython-build-image.md","localizedDate":"2024年5月27日","excerpt":"\\n\\n<h2>1. Python 部署服务的问题</h2>\\n<p>微服务变得越来越流行。我们常常使用如下的 <code>Dockerfile</code> 来构建 Python 服务的镜像：</p>\\n<div class=\\"language-docker\\" data-ext=\\"docker\\" data-title=\\"docker\\"><pre class=\\"language-docker\\"><code><span class=\\"token instruction\\"><span class=\\"token keyword\\">FROM</span> python:3.10-slim-bookworm</span>\\n\\n<span class=\\"token instruction\\"><span class=\\"token keyword\\">WORKDIR</span> /app</span>\\n\\n<span class=\\"token instruction\\"><span class=\\"token keyword\\">COPY</span> . ./</span>\\n\\n<span class=\\"token instruction\\"><span class=\\"token keyword\\">ENV</span> PYPI_MIRROR_URL=https://pypi.org/simple</span>\\n\\n<span class=\\"token instruction\\"><span class=\\"token keyword\\">RUN</span> pip -V <span class=\\"token operator\\">\\\\</span>\\n    &amp;&amp; python -m pip install -i <span class=\\"token variable\\">${PYPI_MIRROR_URL}</span> --upgrade pip <span class=\\"token operator\\">\\\\</span>\\n    &amp;&amp; pip config set global.index-url <span class=\\"token variable\\">${PYPI_MIRROR_URL}</span> <span class=\\"token operator\\">\\\\</span>\\n    &amp;&amp; pip install -r requirements.txt</span>\\n\\n<span class=\\"token instruction\\"><span class=\\"token keyword\\">EXPOSE</span> 8081</span>\\n\\n<span class=\\"token instruction\\"><span class=\\"token keyword\\">CMD</span> [ <span class=\\"token string\\">\\"python\\"</span>, <span class=\\"token string\\">\\"server.py\\"</span> ]</span>\\n</code></pre></div>","autoDesc":true}');export{q as comp,x as data};
