import{_ as d}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as n,o as p,c as r,b as i,a as e,w as t,d as s,e as l}from"./app-mQJDQ8JG.js";const o={},k=i("h1",{id:"1-pyside6-简介",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#1-pyside6-简介"},[i("span",null,"1. PySide6 简介")])],-1),y={class:"table-of-contents"},c=l('<h2 id="11-pyside6-是什么" tabindex="-1"><a class="header-anchor" href="#11-pyside6-是什么"><span>1.1 PySide6 是什么</span></a></h2><div class="hint-container info"><p class="hint-container-title">知识准备</p><p>如果你阅读此教程，我们认为你对 GUI 概念和 Python 编程有初步的认识。</p></div><p>Python 最初是作为脚本语言开发的，核心功能中并没有包含 GUI 的支持。但 Python 借助其出色的 C 扩展性能够引入各种 C/C++ 库来增强功能。Python 现在的标准发行版已经引入了基本的 GUI 支持库 Tkinter，稍后我们讨论为什么选择 PySide6。</p><p>PySide 是跨平台的 GUI 框架 Qt 的 Python 版本。作为 Qt for Python 项目的一部分。和 Qt 一样，PySide 也是自由软件。PySide 支持 Linux/X11、Mac OS 和 Microsoft Windows。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><p>PySide6 是 Qt6 的 Python 版本，继承了 Qt6 所有的功能，而且相比以前的版本性能有所提升。PySide6 比 PySide2 更加稳定，且是 Qt 官方快速开发的活跃项目。</p><p>【Q】Python 下有哪些流行的 GUI 库？</p><p>【A】有 Python 绑定的 Tkinter、wxPython、PyGTK、PyQt 等。Tkinter 功能简单，开发繁琐，难以开发大型的、现代的应用。wxPython 和 PyGTK 等框架社区发展均不如 Qt，且大多跨平台能力不足，难以兼容各种操作系统。稍后我们将讨论 PyQt，这也是为我们熟知的流行 GUI 库。</p><p>【Q】PySide 一共有哪些版本？</p><p>【A】截至本文发布，主要有三个版本，分别是 PySide、PySide2 和 PySide6，如下表所示。</p><table><thead><tr><th>PySide 版本</th><th>对应 Qt 版本</th></tr></thead><tbody><tr><td>PySide</td><td>Qt 4</td></tr><tr><td>PySide2</td><td>Qt 5</td></tr><tr><td>PySide6</td><td>Qt 6</td></tr></tbody></table><p>【Q】PySide 的历史？</p><p>【A】2009 年，当时 Qt 的所有者诺基亚希望在 LGPL 许可下提供 Python 版本。诺基亚未能与 PyQt 的开发商 Riverbank Computing 达成协议。8 月，诺基亚发布了 PySide。它提供了类似的功能，但在 LGPL 许可下开源。Side 是芬兰语绑定的意思。</p><p>PySide2 由 Christian Tismer 启动，在 2015 年将 PySide 从 Qt 4 移植到 Qt 5。它于 2018 年 12 月发布。</p><p>PySide6 是在 2020 年 12 月发布的。它增加了对 Qt 6 的支持，并删除了对所有 3.6 以下的 Python 版本的支持。PySide6 现在使用自己的绑定生成器 Shiboken，减少二进制文件的大小和内存占用。</p><p>【Q】既然 PyQt 这么流行，甚至有各种不同版本 Qt 的良好支持（包括 PyQt4、PyQt5 和 PyQt6），为什么使用 PySide6？</p><p>【A】正如上面所示，PyQt 不是一个商业友好的软件，PyQt 使用 GPL 许可分发，这使得 PyQt 开发的程序必须全部开源。PySide6 是 Qt 官方开发，其产品有保证且允许使用 LGPL 许可分发。</p><h2 id="12-pyside6-安装" tabindex="-1"><a class="header-anchor" href="#12-pyside6-安装"><span>1.2 PySide6 安装</span></a></h2><div class="hint-container info"><p class="hint-container-title">确保你的 Python 版本满足 PySide6</p><p>前面的条件指出，PySide6 要求 Python 版本不能低于 3.6，如果你正在使用更低的版本或 Python 2.7 及以下来构建应用，那么本教程将不适合你。</p><p>本系列使用 Python 3.10 来演示，事实上，在主流系统中 PySide6 已经支持 Python 3.10 甚至 3.11，这意味你可以使用更新的特性。所以这里建议使用 Python 3.9 以上的版本。</p></div>',18),g=i("code",null,"venv",-1),b=l(`<p>安装：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> pyside6</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果以前已经安装过，需要完全卸载再重新安装：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> uninstall</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> pyside6</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> pyside6-addons</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> pyside6-essentials</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> shiboken6</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> cache</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> purge</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">pip</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> pyside6</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查看已安装的版本：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">import</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> PySide6.QtCore</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">PySide6.__version__</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">print</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">PySide6.QtCore.__version__</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">6.4.2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">6.4.2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="13-hello-pyside6" tabindex="-1"><a class="header-anchor" href="#13-hello-pyside6"><span>1.3 Hello PySide6</span></a></h2><p>使用你喜欢的 IDE 或者直接创建一个文件夹作为工作区。将下面的代码保存为 <a href="https://github.com/Sun-ZhenXing/vuepress-python-notes/tree/main/docs/pypi-package/pyside6/chapter01/src/main.py" target="_blank" rel="noopener noreferrer"><code>main.py</code></a>：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> sys</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> PySide6.QtWidgets </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> QApplication, QWidget</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">app </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;"> QApplication</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(sys.argv)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">window </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;"> QWidget</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">window.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">show</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">sys.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">exit</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(app.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">exec</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">())</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后运行它，需要确保你使用的是 Python3 的正确版本：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#61AFEF;">python</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;"> main.py</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>如果你看到窗口说明安装成功。</p><p><code>PySide6.QtWidgets</code> 模块中包含了各种窗口组件，这是我们最常用的模块之一，文本标签、按钮、多选框、布局、窗口等你能想到的布局，基本都能在这个模块中找到。</p><p>在进行任何和用户界面有关的操作之前，必须先创建 <code>QApplication</code> 应用，程序中的一切都必须发生在此应用中。<code>QApplication</code> 接收一个字符串数组作为参数，Python 中程序传入的参数为 <code>sys.argv</code>，所以可以直接传入。</p><p><code>window = QWidget()</code> 将创建一个简单窗体，下面使用 <code>window.show()</code> 方法将其显示出来。</p><p>到目前为止，界面还没有显示出来，我们需要执行这个应用，然后将此应用的返回值作为整个程序的返回值（这个步骤其实是惯例）。</p><hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>PySide，维基百科，<a href="https://en.wikipedia.org/wiki/PySide" target="_blank" rel="noopener noreferrer">https://en.wikipedia.org/wiki/PySide</a> <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>`,20);function u(P,m){const a=n("router-link"),h=n("RouteLink");return p(),r("div",null,[k,i("nav",y,[i("ul",null,[i("li",null,[e(a,{to:"#11-pyside6-是什么"},{default:t(()=>[s("1.1 PySide6 是什么")]),_:1})]),i("li",null,[e(a,{to:"#12-pyside6-安装"},{default:t(()=>[s("1.2 PySide6 安装")]),_:1})]),i("li",null,[e(a,{to:"#13-hello-pyside6"},{default:t(()=>[s("1.3 Hello PySide6")]),_:1})])])]),c,i("p",null,[s("首先需要计算机内安装有 Python，安装后推荐使用 "),g,s(" 等工具来 "),e(h,{to:"/posts/python/basic/stdlib/venv.html"},{default:t(()=>[s("创建虚拟环境")]),_:1}),s("，在新环境内开发 PySide6。")]),b])}const F=d(o,[["render",u],["__file","index.html.vue"]]),S=JSON.parse('{"path":"/posts/python/packages/pyside6/chapter01/","title":"1. PySide6 简介","lang":"zh-CN","frontmatter":{"description":"1. PySide6 简介 1.1 PySide6 是什么 知识准备 如果你阅读此教程，我们认为你对 GUI 概念和 Python 编程有初步的认识。 Python 最初是作为脚本语言开发的，核心功能中并没有包含 GUI 的支持。但 Python 借助其出色的 C 扩展性能够引入各种 C/C++ 库来增强功能。Python 现在的标准发行版已经引入了基...","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/posts/python/packages/pyside6/chapter01/"}],["meta",{"property":"og:site_name","content":"鸭梨"}],["meta",{"property":"og:title","content":"1. PySide6 简介"}],["meta",{"property":"og:description","content":"1. PySide6 简介 1.1 PySide6 是什么 知识准备 如果你阅读此教程，我们认为你对 GUI 概念和 Python 编程有初步的认识。 Python 最初是作为脚本语言开发的，核心功能中并没有包含 GUI 的支持。但 Python 借助其出色的 C 扩展性能够引入各种 C/C++ 库来增强功能。Python 现在的标准发行版已经引入了基..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-27T04:16:18.000Z"}],["meta",{"property":"article:author","content":"Alex Sun"}],["meta",{"property":"article:modified_time","content":"2024-05-27T04:16:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1. PySide6 简介\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-27T04:16:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Alex Sun\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[{"level":2,"title":"1.1 PySide6 是什么","slug":"11-pyside6-是什么","link":"#11-pyside6-是什么","children":[]},{"level":2,"title":"1.2 PySide6 安装","slug":"12-pyside6-安装","link":"#12-pyside6-安装","children":[]},{"level":2,"title":"1.3 Hello PySide6","slug":"13-hello-pyside6","link":"#13-hello-pyside6","children":[]}],"git":{"createdTime":1716783378000,"updatedTime":1716783378000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":3.91,"words":1174},"filePathRelative":"posts/python/packages/pyside6/chapter01/index.md","localizedDate":"2024年5月27日","excerpt":"\\n\\n<h2>1.1 PySide6 是什么</h2>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">知识准备</p>\\n<p>如果你阅读此教程，我们认为你对 GUI 概念和 Python 编程有初步的认识。</p>\\n</div>\\n<p>Python 最初是作为脚本语言开发的，核心功能中并没有包含 GUI 的支持。但 Python 借助其出色的 C 扩展性能够引入各种 C/C++ 库来增强功能。Python 现在的标准发行版已经引入了基本的 GUI 支持库 Tkinter，稍后我们讨论为什么选择 PySide6。</p>","autoDesc":true}');export{F as comp,S as data};
