import{_ as s,V as c,W as d,$ as p,X as e,Z as r,a1 as o,Y as t,a0 as l,E as a}from"./framework-ad2eb432.js";const h={},_=e("p",null,"本文从不同层次介绍前端的发展历史，涵盖具体的技术和趋势潮流。",-1),u={class:"table-of-contents"},S=l('<h2 id="_1-时间线" tabindex="-1"><a class="header-anchor" href="#_1-时间线" aria-hidden="true">#</a> 1. 时间线</h2><p>前端的发展不应该被表示为一条线，相反，这是由多条线组成的网。我将其抽象为：</p><ul><li>主线：用户体验提升</li><li>支线 1：互联网、操作系统等基础设施进步</li><li>支线 2：浏览器技术进步</li><li>支线 3：前端的语言进步 <ul><li>HTML 支线</li><li>CSS 支线</li><li>ES / JS 支线</li></ul></li><li>支线 4：开发方式和程序员工作方式进步 <ul><li>Node.js 支线</li></ul></li><li>支线 5：更多的平台和技术 <ul><li>WebAssembly 支线</li><li>WebGL 支线</li></ul></li></ul><h2 id="_2-html-原始时代" tabindex="-1"><a class="header-anchor" href="#_2-html-原始时代" aria-hidden="true">#</a> 2. HTML 原始时代</h2><p>我们都知道前端的基础是 HTML，但是比 HTML 更古老的语言是 SGML。SGML 源于 IBM 的通用标记语言（GML），该语言在 60 年代被开发。SGML 最初是为了在政府、法律和工业领域共享机器可读的大型项目文档。许多这样的文件必须在数十年内保持可读性。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><p>HTML 是 SGML 的一种实现，而 SGML 由于过于复杂而没有普及。1998 年 XML 的诞生标志着 SGML 的标准替代品出现。XML 是 SGML 的子集，其出现的主要原因也是 SGML 过于复杂。</p>',6),f={href:"https://en.wikipedia.org/wiki/Tim_Berners-Lee",target:"_blank",rel:"noopener noreferrer"},g={href:"https://en.wikipedia.org/wiki/Dan_Connolly_(computer_scientist)",target:"_blank",rel:"noopener noreferrer"},M={href:"https://en.wikipedia.org/wiki/WorldWideWeb",target:"_blank",rel:"noopener noreferrer"},L={href:"https://en.wikipedia.org/wiki/Nicola_Pellow",target:"_blank",rel:"noopener noreferrer"},T={href:"https://en.wikipedia.org/wiki/Line_Mode_Browser",target:"_blank",rel:"noopener noreferrer"},m={href:"https://www.w3.org/Protocols/HTTP/AsImplemented.html",target:"_blank",rel:"noopener noreferrer"},k=e("code",null,"GET",-1),v=e("p",null,"为了解决 HTTP 协议的限制，提高 HTTP 的可用性，从 1992 年开始，HTTP/1.0 的草案就陆续进行了，但是并没有形成标准。",-1),b={href:"https://en.wikipedia.org/wiki/Dave_Raggett",target:"_blank",rel:"noopener noreferrer"},w=e("p",null,"总结：这个时代的网页是带简单样式的文本，还不能表达文本之外的其他信息，也没有任何动态性和交互性。",-1),H=e("h2",{id:"历史起点",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#历史起点","aria-hidden":"true"},"#"),t(" 历史起点")],-1),x=e("p",null,"1993 年，Mosaic 浏览器发布，这款浏览器将 Web 带向了大众，后来被认为是第一个成为主流流行的网络浏览器。其创新的图形用户界面使万维网易于浏览，从而使普通人更容易接受。诸如 Chrome、Firefox 等现代浏览器仍然在延用 Mosaic 的图形化操作界面的思想。",-1),C=e("p",null,"1994 年，W3C（万维网联盟）成立，这个组织将在以后的时间里推动各种 Web 技术走向标准化。",-1),N={href:"https://en.wikipedia.org/wiki/Marc_Andreessen",target:"_blank",rel:"noopener noreferrer"},E=l('<p>1995 年 Yahoo（雅虎）创办，规模和流量迅速扩大，成为了家喻户晓的门户网站。在那个 PC 和网络并不普及的年代，Yahoo 让越来越多的人了解互联网，并认识到技术革命将带来新的历史潮流。</p><p>同年，Sun 公司开发了 Java。同时网景公司决定在浏览器中增加一种脚本语言。为实现这一目标，他们采取了两条途径：</p><ol><li>与 Sun 公司合作，嵌入 Java 编程语言</li><li>聘请 Brendan Eich 嵌入 Scheme 语言</li></ol><p>然而，嵌入 Java 代码让网站变得复杂而不安全，所以这个方案没有普及。</p><p>虽然新的语言及其解释器的实现在 1995 年 9 月作为 Netscape Navigator 测试版的一部分首次发布时被称为 LiveScript，但在 12 月的正式发布中，该名称被改为 JavaScript。这标志着 JavaScript 的诞生。</p><p>就在同一年，微软为了与 Netscape 公司竞争浏览器行业，推出了 IE 浏览器。另一方面，微软通过逆向工程重写了 JavaScript 解释器，命名为 JScript。JScript 在 1996 年发布，同时也是对 CSS 和 HTML 扩展的最初支持。</p><p>微软在 JScript 的设计上与 Netscape 公司的 JavaScript 保持差距，这些差异使开发者很难使他们的网站在两种浏览器上都能正常运行，导致几年来广泛使用 <code>&quot;best viewed in Netscape&quot;</code> 和 <code>&quot;best viewed in Internet Explorer&quot;</code> 的标志。</p><p>1996 年 11 月，Netscape 公司向 ECMA 提交了 JavaScript，作为所有浏览器供应商可以遵守的标准规范的起点。这导致了 1997 年 6 月第一个 ECMAScript 语言规范的正式发布。</p><p>该标准进程持续了几年，1998 年 6 月发布了 ECMAScript 2，1999 年 12 月发布了 ECMAScript 3。ECMAScript 4 的工作于 2000 年开始。</p><p>与此同时，微软在浏览器市场上获得了越来越多的主导地位。到 21 世纪初，Internet Explorer 的市场份额达到 95%。这意味着 JScript 成为网络客户端脚本的事实标准。</p><p>微软最初参与了标准制定过程，并在其 JScript 语言中实施了一些建议，但最终它停止了对 ECMA 工作的合作。因此 ECMAScript 4 被搁置了。</p><p>总结：这一时期 Web 快速发展，出现了 CSS 和 JavaScript，使得网页不再是纯静态文字。</p><h2 id="mvc-时代" tabindex="-1"><a class="header-anchor" href="#mvc-时代" aria-hidden="true">#</a> MVC 时代</h2><h2 id="ajax-时代" tabindex="-1"><a class="header-anchor" href="#ajax-时代" aria-hidden="true">#</a> Ajax 时代</h2><h2 id="mvvm-sfc-时代" tabindex="-1"><a class="header-anchor" href="#mvvm-sfc-时代" aria-hidden="true">#</a> MVVM（SFC）时代</h2><h2 id="ssr-时代" tabindex="-1"><a class="header-anchor" href="#ssr-时代" aria-hidden="true">#</a> SSR 时代</h2><p>先介绍几个基本概念：</p><ul><li><strong>CSR</strong>（Client Side Rendering）：客户端渲染</li><li><strong>SSR</strong>（Server Side Rendering）：服务端渲染</li><li><strong>ISR</strong>（Incremental Site Rendering）：增量式站点渲染</li><li><strong>SSG</strong>（Static Site Generation）：静态站点生成</li><li><strong>ISG</strong>（Incremental Static Generation）：增量静态生成</li><li><strong>NSR</strong>（Native Side Rendering）：原生端渲染</li><li><strong>DPR</strong>（Distributed Persistent Rendering）：分布式持续渲染</li><li><strong>ESR</strong>（Edge Side Rendering）：边缘端渲染</li></ul><hr class="footnotes-sep">',19),G={class:"footnotes"},W={class:"footnotes-list"},R={id:"footnote1",class:"footnote-item"},J={href:"https://en.wikipedia.org/wiki/Standard_Generalized_Markup_Language",target:"_blank",rel:"noopener noreferrer"},P=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1);function A(I,V){const n=a("router-link"),i=a("ExternalLinkIcon");return c(),d("div",null,[_,p(" more "),e("nav",u,[e("ul",null,[e("li",null,[r(n,{to:"#_1-时间线"},{default:o(()=>[t("1. 时间线")]),_:1})]),e("li",null,[r(n,{to:"#_2-html-原始时代"},{default:o(()=>[t("2. HTML 原始时代")]),_:1})]),e("li",null,[r(n,{to:"#历史起点"},{default:o(()=>[t("历史起点")]),_:1})]),e("li",null,[r(n,{to:"#mvc-时代"},{default:o(()=>[t("MVC 时代")]),_:1})]),e("li",null,[r(n,{to:"#ajax-时代"},{default:o(()=>[t("Ajax 时代")]),_:1})]),e("li",null,[r(n,{to:"#mvvm-sfc-时代"},{default:o(()=>[t("MVVM（SFC）时代")]),_:1})]),e("li",null,[r(n,{to:"#ssr-时代"},{default:o(()=>[t("SSR 时代")]),_:1})])])]),S,e("p",null,[t("1990 年，物理学家 "),e("a",f,[t("Tim Berners-Lee"),r(i)]),t(" 和其同事 "),e("a",g,[t("Daniel W. Connolly"),r(i)]),t(" 共同创立了一种文本标记语言，使用一些特殊的标签来定义各种格式。这标志着 HTML（HyperText Markup Language）的诞生。Tim Berners-Lee 和他的团队也发明了最早的 HTTP 协议，用于传输 HTML 内容，此时还未将 HTTP 协议规范化。")]),e("p",null,[t("1991 年，HTML 之父 Tim Berners-Lee 发布了 "),e("a",M,[t("WorldWideWeb 浏览器"),r(i)]),t("，这款图形化浏览器还包含一个所见即所得 HTML 编辑器，为了避免同 WWW 混淆，这个浏览器后来改名为 Nexus。后来他还招募了 "),e("a",L,[t("Nicola Pellow"),r(i)]),t(" 开发了 "),e("a",T,[t("行模式浏览器"),r(i)]),t("，用于在命令行终端上浏览 HTML 内容。")]),e("p",null,[t("同年，"),e("a",m,[t("HTTP/0.9"),r(i)]),t(" 协议通过，在这份不到 700 字的文献中定义了 HTTP 所做的最基本的事情：传输 HTML 文档的内容。它只有一个方法："),k,t("，所以此时不支持传输其他文件和上传文件，只能由客户端请求服务器 HTML 的内容。")]),v,e("p",null,[t("1993 年 6 月，IETF（互联网工程任务组）发表了第一份关于 HTML 规范的提案，但并未标准化。"),e("a",b,[t("Dave Raggett"),r(i)]),t(" 在 1993 年底提出的竞争性互联网草案 HTML+，同样也没有标准化。HTML / HTML+ 方案被笼统地称为 HTML 1.0（但是没有正式名称，因为很快有了新方案）。")]),w,H,x,C,e("p",null,[t("Mosaic 团队的领导人 "),e("a",N,[t("Marc Andreessen"),r(i)]),t(" 成立了自己的公司——网景（Netscape）。1994 年，Netscape 公司推出了 Netscape Navigator，很快就成为最受欢迎的浏览器。")]),E,e("section",G,[e("ol",W,[e("li",R,[e("p",null,[t("维基百科：SGML，"),e("a",J,[t("https://en.wikipedia.org/wiki/Standard_Generalized_Markup_Language"),r(i)]),t(),P])])])])])}const j=s(h,[["render",A],["__file","index.html.vue"]]);export{j as default};
