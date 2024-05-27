import{_ as p}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as o,o as i,c,b as n,a,w as t,e as l,d as e}from"./app-DhX54nll.js";const u={},d=n("h1",{id:"7-pyside6-样式和动画",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#7-pyside6-样式和动画"},[n("span",null,"7. PySide6 样式和动画")])],-1),r={class:"table-of-contents"},k=l(`<h2 id="qss-基本语法" tabindex="-1"><a class="header-anchor" href="#qss-基本语法"><span>QSS 基本语法</span></a></h2><div class="hint-container tip"><p class="hint-container-title">参考文档</p><ul><li><a href="https://doc.qt.io/qt-6/stylesheet-reference.html#list-of-properties" target="_blank" rel="noopener noreferrer">QSS 可用属性：官方文档</a></li><li><a href="https://doc.qt.io/qt-6/stylesheet-examples.html" target="_blank" rel="noopener noreferrer">QSS 官方示例</a></li></ul></div><p>类似 CSS，QSS 每一条都是由一个选择器和一组声明构成：</p><ul><li>选择器选出要对哪种控件进行样式修改</li><li>每个声明都是键值对，键为属性，值为属性值</li></ul><div class="language-css" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">QWidget</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #fff<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="使用方式" tabindex="-1"><a class="header-anchor" href="#使用方式"><span>使用方式</span></a></h2><p>为降低耦合，往往把 QSS 写在一个单独的 <code>style.qss</code> 文件中，然后在 <code>main.py</code> 的 <code>QMainWindow</code> 中加载样式。</p><p>新建一个扩展名为 <code>.qss</code> 的文件，如 <code>style.qss</code>，编辑内容。</p><div class="language-css" data-ext="css" data-title="css"><pre class="language-css"><code><span class="token selector">QWidget</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> #e34fff<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #000<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>在 <code>main.py</code> 中加载样式：</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> sys

<span class="token keyword">from</span> PySide6<span class="token punctuation">.</span>QtCore <span class="token keyword">import</span> QFile<span class="token punctuation">,</span> Qt
<span class="token keyword">from</span> PySide6<span class="token punctuation">.</span>QtWidgets <span class="token keyword">import</span> QApplication<span class="token punctuation">,</span> QLabel<span class="token punctuation">,</span> QMainWindow


<span class="token keyword">class</span> <span class="token class-name">QSSLoader</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> path<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>_path <span class="token operator">=</span> path

    <span class="token keyword">def</span> <span class="token function">load</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">:</span>
        f <span class="token operator">=</span> QFile<span class="token punctuation">(</span>self<span class="token punctuation">.</span>_path<span class="token punctuation">)</span>
        f<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span>QFile<span class="token punctuation">.</span>ReadOnly <span class="token operator">|</span> QFile<span class="token punctuation">.</span>Text<span class="token punctuation">)</span>
        stylesheet <span class="token operator">=</span> f<span class="token punctuation">.</span>readAll<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> stylesheet<span class="token punctuation">.</span>data<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">MainWindow</span><span class="token punctuation">(</span>QMainWindow<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>setWindowTitle<span class="token punctuation">(</span><span class="token string">&quot;QSS Demo&quot;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>resize<span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span>

        label <span class="token operator">=</span> QLabel<span class="token punctuation">(</span><span class="token string">&quot;Hello World&quot;</span><span class="token punctuation">)</span>
        label<span class="token punctuation">.</span>setAlignment<span class="token punctuation">(</span>Qt<span class="token punctuation">.</span>AlignCenter<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>setCentralWidget<span class="token punctuation">(</span>label<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    app <span class="token operator">=</span> QApplication<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>
    window <span class="token operator">=</span> MainWindow<span class="token punctuation">(</span><span class="token punctuation">)</span>
    window<span class="token punctuation">.</span>setStyleSheet<span class="token punctuation">(</span>QSSLoader<span class="token punctuation">(</span><span class="token string">&quot;style.qss&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>load<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    window<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
    sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span>app<span class="token punctuation">.</span><span class="token keyword">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="动态修改" tabindex="-1"><a class="header-anchor" href="#动态修改"><span>动态修改</span></a></h2><p>部分参考了 <a href="https://github.com/hektorprofe/curso-qt-pyside-udemy" target="_blank" rel="noopener noreferrer">hektorprofe/curso-qt-pyside-udemy</a> 的代码。</p><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">import</span> sys

<span class="token keyword">from</span> PySide6<span class="token punctuation">.</span>QtWidgets <span class="token keyword">import</span> <span class="token punctuation">(</span>
    QApplication<span class="token punctuation">,</span>
    QCheckBox<span class="token punctuation">,</span>
    QFormLayout<span class="token punctuation">,</span>
    QLabel<span class="token punctuation">,</span>
    QLineEdit<span class="token punctuation">,</span>
    QMainWindow<span class="token punctuation">,</span>
    QPlainTextEdit<span class="token punctuation">,</span>
    QPushButton<span class="token punctuation">,</span>
    QRadioButton<span class="token punctuation">,</span>
    QSpinBox<span class="token punctuation">,</span>
    QVBoxLayout<span class="token punctuation">,</span>
    QWidget<span class="token punctuation">,</span>
<span class="token punctuation">)</span>

STYLE <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;QMainWindow {
    background-color: #212121;
}
QLabel {
    color: #e9e9e9;
}
QPushButton {
    background-color: orange;
    font-family: &#39;Arial&#39;;
    font-size: 14px;
    font-weight: bold;
}
&quot;&quot;&quot;</span>


<span class="token keyword">class</span> <span class="token class-name">QSSEditor</span><span class="token punctuation">(</span>QWidget<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> parent<span class="token punctuation">:</span> QWidget <span class="token operator">|</span> <span class="token boolean">None</span> <span class="token operator">=</span> <span class="token boolean">None</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>_parent <span class="token operator">=</span> parent
        self<span class="token punctuation">.</span>resize<span class="token punctuation">(</span><span class="token number">480</span><span class="token punctuation">,</span> <span class="token number">320</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>setWindowTitle<span class="token punctuation">(</span><span class="token string">&quot;QSS Editor&quot;</span><span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>_editor <span class="token operator">=</span> QPlainTextEdit<span class="token punctuation">(</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>_editor<span class="token punctuation">.</span>setStyleSheet<span class="token punctuation">(</span>
            <span class="token string">&quot;background-color: #212121;color: #e9e9e9;&quot;</span>
            <span class="token string">&quot;font-family: Consolas; font-size: 16px; &quot;</span>
        <span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>_editor<span class="token punctuation">.</span>setFont<span class="token punctuation">(</span><span class="token string">&quot;Consolas&quot;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>_editor<span class="token punctuation">.</span>setPlainText<span class="token punctuation">(</span>STYLE<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>_editor<span class="token punctuation">.</span>textChanged<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>self<span class="token punctuation">.</span>update_style<span class="token punctuation">)</span>

        layout <span class="token operator">=</span> QVBoxLayout<span class="token punctuation">(</span><span class="token punctuation">)</span>
        layout<span class="token punctuation">.</span>addWidget<span class="token punctuation">(</span>self<span class="token punctuation">.</span>_editor<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>setLayout<span class="token punctuation">(</span>layout<span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">update_style</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        qss <span class="token operator">=</span> self<span class="token punctuation">.</span>_editor<span class="token punctuation">.</span>toPlainText<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>_parent<span class="token punctuation">.</span>setStyleSheet<span class="token punctuation">(</span>qss<span class="token punctuation">)</span>
        <span class="token keyword">except</span><span class="token punctuation">:</span>
            <span class="token keyword">pass</span>


<span class="token keyword">class</span> <span class="token class-name">MainWindow</span><span class="token punctuation">(</span>QMainWindow<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>__init__<span class="token punctuation">(</span><span class="token punctuation">)</span>

        layout <span class="token operator">=</span> QFormLayout<span class="token punctuation">(</span><span class="token punctuation">)</span>
        layout<span class="token punctuation">.</span>addRow<span class="token punctuation">(</span><span class="token string">&quot;QCheckBox&quot;</span><span class="token punctuation">,</span> QCheckBox<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        layout<span class="token punctuation">.</span>addRow<span class="token punctuation">(</span><span class="token string">&quot;QRadioButton&quot;</span><span class="token punctuation">,</span> QRadioButton<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        layout<span class="token punctuation">.</span>addRow<span class="token punctuation">(</span><span class="token string">&quot;QLabel&quot;</span><span class="token punctuation">,</span> QLabel<span class="token punctuation">(</span><span class="token string">&quot;QLabel&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        layout<span class="token punctuation">.</span>addRow<span class="token punctuation">(</span><span class="token string">&quot;QPushButton&quot;</span><span class="token punctuation">,</span> QPushButton<span class="token punctuation">(</span><span class="token string">&quot;QPushButton&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        layout<span class="token punctuation">.</span>addRow<span class="token punctuation">(</span><span class="token string">&quot;QLineEdit&quot;</span><span class="token punctuation">,</span> QLineEdit<span class="token punctuation">(</span><span class="token string">&quot;QLineEdit&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        layout<span class="token punctuation">.</span>addRow<span class="token punctuation">(</span><span class="token string">&quot;QSpinBox&quot;</span><span class="token punctuation">,</span> QSpinBox<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

        widget <span class="token operator">=</span> QWidget<span class="token punctuation">(</span><span class="token punctuation">)</span>
        widget<span class="token punctuation">.</span>setLayout<span class="token punctuation">(</span>layout<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>setCentralWidget<span class="token punctuation">(</span>widget<span class="token punctuation">)</span>

        label <span class="token operator">=</span> QLabel<span class="token punctuation">(</span><span class="token string">&quot;QLabel&quot;</span><span class="token punctuation">)</span>
        label<span class="token punctuation">.</span>setObjectName<span class="token punctuation">(</span><span class="token string">&quot;label&quot;</span><span class="token punctuation">)</span>
        layout<span class="token punctuation">.</span>addRow<span class="token punctuation">(</span>label<span class="token punctuation">)</span>

        self<span class="token punctuation">.</span>_qss_editor <span class="token operator">=</span> QSSEditor<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>setStyleSheet<span class="token punctuation">(</span>STYLE<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    app <span class="token operator">=</span> QApplication<span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>
    window <span class="token operator">=</span> MainWindow<span class="token punctuation">(</span><span class="token punctuation">)</span>
    window<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>
    sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span>app<span class="token punctuation">.</span><span class="token keyword">exec</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14);function v(m,b){const s=o("router-link");return i(),c("div",null,[d,n("nav",r,[n("ul",null,[n("li",null,[a(s,{to:"#qss-基本语法"},{default:t(()=>[e("QSS 基本语法")]),_:1})]),n("li",null,[a(s,{to:"#使用方式"},{default:t(()=>[e("使用方式")]),_:1})]),n("li",null,[a(s,{to:"#动态修改"},{default:t(()=>[e("动态修改")]),_:1})])])]),k])}const f=p(u,[["render",v],["__file","index.html.vue"]]),g=JSON.parse('{"path":"/posts/python/packages/pyside6/chapter07/","title":"7. PySide6 样式和动画","lang":"zh-CN","frontmatter":{"description":"7. PySide6 样式和动画 QSS 基本语法 参考文档 QSS 可用属性：官方文档 QSS 官方示例 类似 CSS，QSS 每一条都是由一个选择器和一组声明构成： 选择器选出要对哪种控件进行样式修改 每个声明都是键值对，键为属性，值为属性值 使用方式 为降低耦合，往往把 QSS 写在一个单独的 style.qss 文件中，然后在 main.py ...","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/posts/python/packages/pyside6/chapter07/"}],["meta",{"property":"og:site_name","content":"鸭梨"}],["meta",{"property":"og:title","content":"7. PySide6 样式和动画"}],["meta",{"property":"og:description","content":"7. PySide6 样式和动画 QSS 基本语法 参考文档 QSS 可用属性：官方文档 QSS 官方示例 类似 CSS，QSS 每一条都是由一个选择器和一组声明构成： 选择器选出要对哪种控件进行样式修改 每个声明都是键值对，键为属性，值为属性值 使用方式 为降低耦合，往往把 QSS 写在一个单独的 style.qss 文件中，然后在 main.py ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-27T04:16:18.000Z"}],["meta",{"property":"article:author","content":"Alex Sun"}],["meta",{"property":"article:modified_time","content":"2024-05-27T04:16:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"7. PySide6 样式和动画\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-05-27T04:16:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Alex Sun\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[{"level":2,"title":"QSS 基本语法","slug":"qss-基本语法","link":"#qss-基本语法","children":[]},{"level":2,"title":"使用方式","slug":"使用方式","link":"#使用方式","children":[]},{"level":2,"title":"动态修改","slug":"动态修改","link":"#动态修改","children":[]}],"git":{"createdTime":1716783378000,"updatedTime":1716783378000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":1}]},"readingTime":{"minutes":0.67,"words":200},"filePathRelative":"posts/python/packages/pyside6/chapter07/index.md","localizedDate":"2024年5月27日","excerpt":"\\n\\n<h2>QSS 基本语法</h2>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">参考文档</p>\\n<ul>\\n<li><a href=\\"https://doc.qt.io/qt-6/stylesheet-reference.html#list-of-properties\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">QSS 可用属性：官方文档</a></li>\\n<li><a href=\\"https://doc.qt.io/qt-6/stylesheet-examples.html\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">QSS 官方示例</a></li>\\n</ul>\\n</div>","autoDesc":true}');export{f as comp,g as data};
