import{_ as t,X as o,Y as c,Z as p,a0 as l,$ as i,a2 as e,a3 as n,a1 as a,C as r}from"./framework-4507c9ea.js";const d="/assets/1-计算机系统-11901642.svg",u="/assets/1-高速缓存储存器-4842a6d4.svg",h="/assets/1-虚拟内存-31a3d8e0.svg",m="/assets/1-抽象的重要性-96d0a2c4.svg",g={},_=l("p",null,"第一章：计算机系统漫游。",-1),f={class:"table-of-contents"},k=n(`<p>程序的生命周期（从代码到执行）：</p><ol><li>创建</li><li>编译</li><li>运行</li><li>结束</li></ol><p>编写一个最简单的 C 程序：</p><div class="language-cpp" data-ext="cpp"><pre class="language-cpp"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;hello, world\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><p>保存为 <code>hello.c</code> 文件，然后执行命令：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>gcc <span class="token parameter variable">-o</span> hello hello.c
</code></pre></div><p>生成了一个可执行程序 <code>hello</code> （Linux 下）</p><p>如果要执行，只需要在 shell 中输入，然后回车即可：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>./hello
</code></pre></div><p>控制台就会输出</p><div class="language-text" data-ext="text"><pre class="language-text"><code>hello, world
</code></pre></div><h2 id="_1-1-信息就是位-上下文" tabindex="-1"><a class="header-anchor" href="#_1-1-信息就是位-上下文" aria-hidden="true">#</a> 1.1 信息就是位 + 上下文</h2><p>概念：</p><ul><li>位即比特</li><li>上下文就是存储的位置</li><li>了解 ASCII 字符</li></ul><blockquote><p>C 编程语言的起源</p></blockquote><ul><li>C 语言 <ul><li>1969-1973 贝尔实验室 Dennis Ritchie 创建</li><li>1989 ANSI C 标准</li><li>ISO C 国际标准</li><li>C 语言是古怪的、有缺陷的，但同时是一个巨大的成功</li><li>C 语言的成功 <ul><li>与 Unix 系统关系密切</li><li>小而简单</li><li>为实践目的而设计的</li></ul></li><li>C 语言的缺点 <ul><li>指针十分危险</li><li>缺乏抽象的显式支持（如类、对象、异常）</li></ul></li></ul></li></ul><h2 id="_1-2-程序被其他程序翻译成不同格式" tabindex="-1"><a class="header-anchor" href="#_1-2-程序被其他程序翻译成不同格式" aria-hidden="true">#</a> 1.2 程序被其他程序翻译成不同格式</h2><p>这个 <strong>其他程序</strong> 指的是 <strong>编译器</strong>，编译器能将代码编译为可执行程序。从源代码到程序的过程通常称为 <strong>编译</strong> 。</p><p><code>hello.c</code> 文件，执行命令即可编译：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>gcc <span class="token parameter variable">-o</span> hello hello.c
</code></pre></div><p>然而编译过程十分复杂，包括：</p><ol><li>预处理器（Perprocessor, cpp）</li><li>编译器（Compiler, ccl）</li><li>汇编器（Assembler, as）</li><li>链接器（Linker, ld）</li></ol><p>等程序的参与，所以程序的编译包括 4 个阶段：</p><ol><li>预处理 <ul><li>预处理源文件</li><li>修改原始程序，如 <code>#include &lt;stdio.h&gt;</code> 的预处理指令</li><li>生成 <code>hello.i</code></li></ul></li><li>编译 <ul><li>许多过程：词法分析、语法分析、语义分析、中间代码生成、中间代码优化……</li><li>生成 <code>hello.s</code></li></ul></li><li>汇编 <ul><li>翻译为机器指令</li><li>生成 <code>hello.o</code> （可重定位目标文件）</li></ul></li><li>链接 <ul><li>链接 <code>printf.o</code> 等对象文件</li><li>生成可执行文件 <code>hello</code></li></ul></li></ol><blockquote><p>可以参考《编译原理》，<code>hello.s</code> 的大体内容如下方所示</p></blockquote><p><code>hello.s</code> 在 Linux （x64）下的结果</p><div class="language-x86asm" data-ext="x86asm"><pre class="language-x86asm"><code>; AT&amp;T Assembly
main:
    subq $8, %rsp
    movl $.LCO, %edi
    call puts
    movl $0, %eax
    addq $8, %rsp
    ret
</code></pre></div><blockquote><p>了解 GCC 的起源 GNU 项目</p></blockquote><h2 id="_1-3-了解编译系统如何工作是大有益处的" tabindex="-1"><a class="header-anchor" href="#_1-3-了解编译系统如何工作是大有益处的" aria-hidden="true">#</a> 1.3 了解编译系统如何工作是大有益处的</h2><ul><li>优化程序性能</li><li>理解链接时出现的错误</li><li>避免安全漏洞</li></ul><h2 id="_1-4-处理器读并解释储存在内存中的指令" tabindex="-1"><a class="header-anchor" href="#_1-4-处理器读并解释储存在内存中的指令" aria-hidden="true">#</a> 1.4 处理器读并解释储存在内存中的指令</h2><ol><li>系统的硬件组成 <ol><li>总线</li><li>I/O 设备</li><li>主存</li><li>处理器</li></ol></li><li>运行 <code>hello.c</code> 程序 <ol><li>键盘输入的字符将逐一读入寄存器，再放入内存</li><li>直接储存器存取（DMA）技术，使数据文件从磁盘到达内存</li><li>处理器开始执行 <code>hello</code> 程序，复制到寄存器文件，然后是显示设备</li><li>显示在屏幕上</li></ol></li></ol><figure><img src="`+d+'" alt="计算机系统" tabindex="0" loading="lazy"><figcaption>计算机系统</figcaption></figure><h2 id="_1-5-高速缓存至关重要" tabindex="-1"><a class="header-anchor" href="#_1-5-高速缓存至关重要" aria-hidden="true">#</a> 1.5 高速缓存至关重要</h2><ul><li>高速缓存（cache）存放最常使用的数据</li><li>L1，L2 缓存器是使用静态随机访问储存器（SRAM）实现的</li><li>“局部性原理”</li></ul><figure><img src="'+u+'" alt="高速缓存储存器" tabindex="0" loading="lazy"><figcaption>高速缓存储存器</figcaption></figure><h2 id="_1-6-储存设备形成的层次结构" tabindex="-1"><a class="header-anchor" href="#_1-6-储存设备形成的层次结构" aria-hidden="true">#</a> 1.6 储存设备形成的层次结构</h2><ul><li>序号越小：更小，更快，更贵的存储设备</li><li>序号越大：更大，更慢，更便宜的存储设备</li></ul><ol><li>寄存器</li><li>L1 高速缓存（SRAM）</li><li>L2 高速缓存（SRAM）</li><li>L3 高速缓存（SRAM）</li><li>主存（DRAM）</li><li>磁盘</li><li>远程服务器</li></ol><h2 id="_1-7-操作系统硬件管理" tabindex="-1"><a class="header-anchor" href="#_1-7-操作系统硬件管理" aria-hidden="true">#</a> 1.7 操作系统硬件管理</h2><p>操作系统</p><ul><li>防止硬件被失控的应用程序滥用</li><li>向应用程序提供简单一致的机制来控制复杂而又不同的硬件设备</li></ul><p>操作系统通过基本的抽象概念来实现</p><ul><li>进程</li><li>虚拟内存</li><li>文件</li></ul><blockquote><p>见 1.9 抽象的重要性图示</p></blockquote><ol><li>进程是操作系统对正在运行程序的抽象 <ul><li>操作系统的功能</li><li>内核</li><li>上下文切换</li></ul></li><li>线程 <ul><li>多线程</li></ul></li><li>虚拟内存 <ul><li>程序代码和数据</li><li>堆</li><li>共享库</li><li>栈</li><li>内核虚拟内存</li></ul></li></ol><figure><img src="'+h+'" alt="虚拟内存" tabindex="0" loading="lazy"><figcaption>虚拟内存</figcaption></figure><ol start="4"><li>文件 <ul><li>I/O 设备的抽象表示</li><li>字节序列都是文件</li></ul></li></ol><h2 id="_1-8-系统之间利用网络通信" tabindex="-1"><a class="header-anchor" href="#_1-8-系统之间利用网络通信" aria-hidden="true">#</a> 1.8 系统之间利用网络通信</h2><p>使用 telnet、ssh 通信进行远程控制</p><ol><li>输入 <code>hello</code></li><li>向服务器发送字符串</li><li>服务器向 shell 发送字符串，运行结束后将字符串发送给服务器</li><li>服务器向客户端发送字符串</li><li>客户端显示字符串</li></ol><h2 id="_1-9-重要主题" tabindex="-1"><a class="header-anchor" href="#_1-9-重要主题" aria-hidden="true">#</a> 1.9 重要主题</h2><ol><li>Amdahl 定律</li></ol>',53),x=l("p",null,[a("加速比率 "),l("span",{class:"katex"},[l("span",{class:"katex-mathml"},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[l("semantics",null,[l("mrow",null,[l("mi",null,"S")]),l("annotation",{encoding:"application/x-tex"},"S")])])]),l("span",{class:"katex-html","aria-hidden":"true"},[l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.6833em"}}),l("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S")])])]),a(" ：")],-1),b=l("p",{class:"katex-block"},[l("span",{class:"katex-display"},[l("span",{class:"katex"},[l("span",{class:"katex-mathml"},[l("math",{xmlns:"http://www.w3.org/1998/Math/MathML",display:"block"},[l("semantics",null,[l("mrow",null,[l("mi",null,"S"),l("mo",null,"="),l("mfrac",null,[l("mn",null,"1"),l("mrow",null,[l("mo",{stretchy:"false"},"("),l("mn",null,"1"),l("mo",null,"−"),l("mi",null,"α"),l("mo",{stretchy:"false"},")"),l("mo",null,"+"),l("mi",null,"α"),l("mi",{mathvariant:"normal"},"/"),l("mi",null,"k")])])]),l("annotation",{encoding:"application/x-tex"}," S = \\frac{1}{(1-\\alpha) + \\alpha / k} ")])])]),l("span",{class:"katex-html","aria-hidden":"true"},[l("span",{class:"base"},[l("span",{class:"strut",style:{height:"0.6833em"}}),l("span",{class:"mord mathnormal",style:{"margin-right":"0.05764em"}},"S"),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}}),l("span",{class:"mrel"},"="),l("span",{class:"mspace",style:{"margin-right":"0.2778em"}})]),l("span",{class:"base"},[l("span",{class:"strut",style:{height:"2.2574em","vertical-align":"-0.936em"}}),l("span",{class:"mord"},[l("span",{class:"mopen nulldelimiter"}),l("span",{class:"mfrac"},[l("span",{class:"vlist-t vlist-t2"},[l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"1.3214em"}},[l("span",{style:{top:"-2.314em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"mord"},[l("span",{class:"mopen"},"("),l("span",{class:"mord"},"1"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),l("span",{class:"mbin"},"−"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),l("span",{class:"mord mathnormal",style:{"margin-right":"0.0037em"}},"α"),l("span",{class:"mclose"},")"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),l("span",{class:"mbin"},"+"),l("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),l("span",{class:"mord mathnormal",style:{"margin-right":"0.0037em"}},"α"),l("span",{class:"mord"},"/"),l("span",{class:"mord mathnormal",style:{"margin-right":"0.03148em"}},"k")])]),l("span",{style:{top:"-3.23em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"frac-line",style:{"border-bottom-width":"0.04em"}})]),l("span",{style:{top:"-3.677em"}},[l("span",{class:"pstrut",style:{height:"3em"}}),l("span",{class:"mord"},[l("span",{class:"mord"},"1")])])]),l("span",{class:"vlist-s"},"​")]),l("span",{class:"vlist-r"},[l("span",{class:"vlist",style:{height:"0.936em"}},[l("span")])])])]),l("span",{class:"mclose nulldelimiter"})])])])])])],-1),y=n('<p>结论：只有大多数部分性能得到提高，才会大幅度提升整体性能。</p><ol start="2"><li>并发和并行</li></ol><ul><li><p>如何运行更快</p><ol><li>线程级并发</li><li>指令级并行</li><li>单指令、多数据并行</li></ol></li><li><p>处理器</p><ul><li>单处理器</li><li>多处理器 <ul><li>多核</li><li>超线程的</li></ul></li></ul></li></ul><ol start="3"><li>抽象的重要性</li></ol><figure><img src="'+m+'" alt="抽象的重要性" tabindex="0" loading="lazy"><figcaption>抽象的重要性</figcaption></figure><p>不同的抽象等级：</p><ul><li>文件是对 I/O 设备的抽象</li><li>虚拟内存是对程序储存器的抽象</li><li>进程是对一个正在运行程序的抽象</li><li>虚拟机是对整个计算机的抽象</li></ul>',7);function v(w,C){const s=r("router-link");return o(),c("div",null,[_,p(" more "),l("nav",f,[l("ul",null,[l("li",null,[i(s,{to:"#_1-1-信息就是位-上下文"},{default:e(()=>[a("1.1 信息就是位 + 上下文")]),_:1})]),l("li",null,[i(s,{to:"#_1-2-程序被其他程序翻译成不同格式"},{default:e(()=>[a("1.2 程序被其他程序翻译成不同格式")]),_:1})]),l("li",null,[i(s,{to:"#_1-3-了解编译系统如何工作是大有益处的"},{default:e(()=>[a("1.3 了解编译系统如何工作是大有益处的")]),_:1})]),l("li",null,[i(s,{to:"#_1-4-处理器读并解释储存在内存中的指令"},{default:e(()=>[a("1.4 处理器读并解释储存在内存中的指令")]),_:1})]),l("li",null,[i(s,{to:"#_1-5-高速缓存至关重要"},{default:e(()=>[a("1.5 高速缓存至关重要")]),_:1})]),l("li",null,[i(s,{to:"#_1-6-储存设备形成的层次结构"},{default:e(()=>[a("1.6 储存设备形成的层次结构")]),_:1})]),l("li",null,[i(s,{to:"#_1-7-操作系统硬件管理"},{default:e(()=>[a("1.7 操作系统硬件管理")]),_:1})]),l("li",null,[i(s,{to:"#_1-8-系统之间利用网络通信"},{default:e(()=>[a("1.8 系统之间利用网络通信")]),_:1})]),l("li",null,[i(s,{to:"#_1-9-重要主题"},{default:e(()=>[a("1.9 重要主题")]),_:1})])])]),k,x,b,y])}const q=t(g,[["render",v],["__file","computer-system-roaming.html.vue"]]);export{q as default};
