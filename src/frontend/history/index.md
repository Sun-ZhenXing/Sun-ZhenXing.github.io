---
title: 前端发展历史
date: 2022-12-19
category:
  - 前端
tag:
  - 前端
  - 浏览器
---

本文从不同层次介绍前端的发展历史，涵盖具体的技术和趋势潮流。

<!-- more -->

[[TOC]]

## 1. 时间线

前端的发展不应该被表示为一条线，相反，这是由多条线组成的网。我将其抽象为：
- 主线：用户体验提升
- 支线 1：互联网、操作系统等基础设施进步
- 支线 2：浏览器技术进步
- 支线 3：前端的语言进步
  - HTML 支线
  - CSS 支线
  - ES / JS 支线
- 支线 4：开发方式和程序员工作方式进步
  - Node.js 支线
- 支线 5：更多的平台和技术
  - WebAssembly 支线
  - WebGL 支线

## 2. HTML 原始时代

我们都知道前端的基础是 HTML，但是比 HTML 更古老的语言是 SGML。SGML 源于 IBM 的通用标记语言（GML），该语言在 60 年代被开发。SGML 最初是为了在政府、法律和工业领域共享机器可读的大型项目文档。许多这样的文件必须在数十年内保持可读性。[^1]

[^1]: 维基百科：SGML，<https://en.wikipedia.org/wiki/Standard_Generalized_Markup_Language>

HTML 是 SGML 的一种实现，而 SGML 由于过于复杂而没有普及。1998 年 XML 的诞生标志着 SGML 的标准替代品出现。XML 是 SGML 的子集，其出现的主要原因也是 SGML 过于复杂。

1990 年，物理学家 [Tim Berners-Lee](https://en.wikipedia.org/wiki/Tim_Berners-Lee) 和其同事 [Daniel W. Connolly](https://en.wikipedia.org/wiki/Dan_Connolly_(computer_scientist)) 共同创立了一种文本标记语言，使用一些特殊的标签来定义各种格式。这标志着 HTML（HyperText Markup Language）的诞生。Tim Berners-Lee 和他的团队也发明了最早的 HTTP 协议，用于传输 HTML 内容，此时还未将 HTTP 协议规范化。

1991 年，HTML 之父 Tim Berners-Lee 发布了 [WorldWideWeb 浏览器](https://en.wikipedia.org/wiki/WorldWideWeb)，这款图形化浏览器还包含一个所见即所得 HTML 编辑器，为了避免同 WWW 混淆，这个浏览器后来改名为 Nexus。后来他还招募了 [Nicola Pellow](https://en.wikipedia.org/wiki/Nicola_Pellow) 开发了 [行模式浏览器](https://en.wikipedia.org/wiki/Line_Mode_Browser)，用于在命令行终端上浏览 HTML 内容。

同年，[HTTP/0.9](https://www.w3.org/Protocols/HTTP/AsImplemented.html) 协议通过，在这份不到 700 字的文献中定义了 HTTP 所做的最基本的事情：传输 HTML 文档的内容。它只有一个方法：`GET`，所以此时不支持传输其他文件和上传文件，只能由客户端请求服务器 HTML 的内容。

为了解决 HTTP 协议的限制，提高 HTTP 的可用性，从 1992 年开始，HTTP/1.0 的草案就陆续进行了，但是并没有形成标准。

1993 年 6 月，IETF（互联网工程任务组）发表了第一份关于 HTML 规范的提案，但并未标准化。[Dave Raggett](https://en.wikipedia.org/wiki/Dave_Raggett) 在 1993 年底提出的竞争性互联网草案 HTML+，同样也没有标准化。HTML / HTML+ 方案被笼统地称为 HTML 1.0（但是没有正式名称，因为很快有了新方案）。

总结：这个时代的网页是带简单样式的文本，还不能表达文本之外的其他信息，也没有任何动态性和交互性。

## 历史起点

1993 年，Mosaic 浏览器发布，这款浏览器将 Web 带向了大众，后来被认为是第一个成为主流流行的网络浏览器。其创新的图形用户界面使万维网易于浏览，从而使普通人更容易接受。诸如 Chrome、Firefox 等现代浏览器仍然在延用 Mosaic 的图形化操作界面的思想。

1994 年，W3C（万维网联盟）成立，这个组织将在以后的时间里推动各种 Web 技术走向标准化。

Mosaic 团队的领导人 [Marc Andreessen](https://en.wikipedia.org/wiki/Marc_Andreessen) 成立了自己的公司——网景（Netscape）。1994 年，Netscape 公司推出了 Netscape Navigator，很快就成为最受欢迎的浏览器。

1995 年 Yahoo（雅虎）创办，规模和流量迅速扩大，成为了家喻户晓的门户网站。在那个 PC 和网络并不普及的年代，Yahoo 让越来越多的人了解互联网，并认识到技术革命将带来新的历史潮流。

同年，Sun 公司开发了 Java。同时网景公司决定在浏览器中增加一种脚本语言。为实现这一目标，他们采取了两条途径：
1. 与 Sun 公司合作，嵌入 Java 编程语言
2. 聘请 Brendan Eich 嵌入 Scheme 语言

然而，嵌入 Java 代码让网站变得复杂而不安全，所以这个方案没有普及。

Netscape 的工程师 Brendan Eich 花了 10 天设计了一种解释语言，用于代替 Java 在网页中的功能。虽然新的语言及其解释器的实现在 1995 年 9 月作为 Netscape Navigator 测试版的一部分首次发布时被称为 LiveScript，但在 12 月的正式发布中，该名称被改为 JavaScript，这标志着 JavaScript 的诞生。

就在同一年，微软为了与 Netscape 公司竞争浏览器行业，推出了 IE 浏览器。另一方面，微软通过逆向工程重写了 JavaScript 解释器，命名为 JScript。JScript 在 1996 年发布，同时也是对 CSS 和 HTML 扩展的最初支持。

微软在 JScript 的设计上与 Netscape 公司的 JavaScript 保持差距，这些差异使开发者很难使他们的网站在两种浏览器上都能正常运行，导致几年来广泛使用 `"best viewed in Netscape"` 和 `"best viewed in Internet Explorer"` 的标志。

1996 年 11 月，Netscape 公司向 ECMA 提交了 JavaScript，作为所有浏览器供应商可以遵守的标准规范的起点。这导致了 1997 年 6 月第一个 ECMAScript 语言规范的正式发布。

该标准进程持续了几年，1998 年 6 月发布了 ECMAScript 2，1999 年 12 月发布了 ECMAScript 3。ECMAScript 4 的工作于 2000 年开始。

与此同时，微软在浏览器市场上获得了越来越多的主导地位。到 21 世纪初，Internet Explorer 的市场份额达到 95%。这意味着 JScript 成为网络客户端脚本的事实标准。

微软最初参与了标准制定过程，并在其 JScript 语言中实施了一些建议，但最终它停止了对 ECMA 工作的合作。因此 ECMAScript 4 被搁置了。

总结：这一时期 Web 快速发展，出现了 CSS 和 JavaScript，使得网页不再是纯静态文字。

## MVC 时代

为了使网站展示动态的功能，必须通过修改服务端程序来完成，因为客户端不能做任何事情。动态网页在这一时期诞生。

1995 年 PHP 诞生，1996 年 JSP 诞生，1996 年 ASP 诞生，2002 年 ASP.NET 诞生。这些技术促使大量网站的诞生，它们能完成网站能做的所有事情：读/写数据库，处理用户提交的表单。这些服务端页面技术实现了 Web 页面动态化，从此 Web 2.0 时代到来。

但是这些技术有很多缺陷：
- 客户端不能依靠 JavaScript 请求内容，只能通过表单提交信息
- 从服务端获取任何内容必须重新加载整个网页，花费大量时间，给服务器也造成压力
- 前端的逻辑不能从服务端分离，例如 PHP 程序员必须一个人完成 SQL 查询和前端的 JavaScript 代码，难以维护

我们可以把上述语言称为预处理语言，由客户端发起请求，服务器接收请求后对 PHP/JSP 等代码进行预处理，然后将预处理的结果发送给服务端，预处理结果通常是 HTML 代码。

这个年代虽然没有前后端分离，网站开发也可以进行分层，降低网站开发的耦合性。经过一段时期的发展，行业逐渐接受了 MVC 结构。MVC 的设计模式影响至今，也不再局限于前端/后端开发。

模型（Model）对应于数据库内的数据，视图（View）则是客户端看见的内容，而控制器（Controller）则负责联系这两者。虽然现代的服务结构已经进行了更加细致的划分。但最简单的业务通常从最简单的 MVC 开始。

当用户需要注册时，视图部分与用户交互，指导用户输入信息。控制器负责处理用户输入，然后在用户模型中新增了一条记录，填写具体的信息，然后交给具体的数据库实现去持久化。

## Ajax 时代

在 2005 年，Google 通过其 Google Suggest 使 AJAX 变得流行起来。

Google Suggest 使用 AJAX 创造出动态性极强的 web 界面：在谷歌的搜索框输入关键字时，JavaScript 会把这些字符发送到服务器，然后服务器会返回一个搜索建议的列表。

通过 JavaScript/DOM 进行交互，通过 `XMLHttpRequest` 对象来发送请求。



2007 年发布的 ECMAScript 4 夭折，原因是改动太大浏览器厂商无法接受。直到 2015 年 6 月下一个 ECMAScript 版本才发布，自此之后每一年都发布一个新版本。所以 ECMAScript 6 也被称为 ES2015，以后都可以用年份命名了。

2011 年 CSS 发布了 3 版本，HTML 在 2014 年 10 月也发布了 5 版本，这些版本称为直到目前的最近标准。

## MVVM（SPA）时代

## SSR 时代

先介绍几个基本概念：
- **CSR**（Client Side Rendering）：客户端渲染
- **SSR**（Server Side Rendering）：服务端渲染
- **ISR**（Incremental Site Rendering）：增量式站点渲染
- **SSG**（Static Site Generation）：静态站点生成
- **ISG**（Incremental Static Generation）：增量静态生成
- **NSR**（Native Side Rendering）：原生端渲染
- **DPR**（Distributed Persistent Rendering）：分布式持续渲染
- **ESR**（Edge Side Rendering）：边缘端渲染
