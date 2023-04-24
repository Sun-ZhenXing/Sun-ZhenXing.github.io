import{_ as s,Y as a,Z as r,$ as i,a1 as o,a2 as e,a0 as n,a4 as c,E as h}from"./framework-0b2fc941.js";const l={},f=o("p",null,"本文介绍虚拟化技术简介。",-1),_=c('<h2 id="_1-什么是虚拟化" tabindex="-1"><a class="header-anchor" href="#_1-什么是虚拟化" aria-hidden="true">#</a> 1. 什么是虚拟化</h2><p><strong>虚拟化</strong>（Virtualization）是一种资源管理技术，是将计算机的各种实体资源（CPU、内存、磁盘空间、网络适配器等）抽象、转换后呈现出来并可供分割、组合为一个或多个电脑配置环境。由此，打破实体结构间的不可切割的障碍，使用户可以比原本的配置更好的方式来应用这些电脑硬件资源。这些资源的新虚拟部分是不受现有资源的架设方式，地域或物理配置所限制。一般所指的虚拟化资源包括计算（CPU+内存）、网络、存储等。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><h2 id="_2-虚拟化的实现方式" tabindex="-1"><a class="header-anchor" href="#_2-虚拟化的实现方式" aria-hidden="true">#</a> 2. 虚拟化的实现方式</h2><p>虚拟化有基于硬件的实现和软件的实现。</p><h2 id="_3-hypervisor" tabindex="-1"><a class="header-anchor" href="#_3-hypervisor" aria-hidden="true">#</a> 3. Hypervisor</h2><p>虚拟化管理程序 Hypervisor（VMM），位于虚拟机与底层硬件设备之间的虚拟层，直接运行于硬件设备之上，负责对硬件资源进行抽象，为上层虚拟机提供运行环境所需资源，并使每个虚拟机都能够互不干扰、相互独立地运行于同一个系统中。</p><p>虚拟化主要分为几大类：</p><ul><li><strong>计算虚拟化</strong>：针对 CPU 和内存资源虚拟化技术</li><li><strong>网络虚拟化</strong>：针对网络链路资源虚拟化技术</li><li><strong>IO 虚拟化</strong>：针对 IO 资源虚拟化技术</li><li><strong>存储虚拟化</strong>：针对磁盘存储资源虚拟化技术</li></ul><p><strong>容器</strong>（Containerization）也叫，所有的虚拟机使用同一个操作系统内核，省去了客户机操作系统的开销，这其中最有代表性的就是 Docker，每台物理主机可运行上千个 Docker 容器。相比完整的虚拟机大大提高效率。<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p><h2 id="_4-kvm" tabindex="-1"><a class="header-anchor" href="#_4-kvm" aria-hidden="true">#</a> 4. KVM</h2><p>KVM 是基于虚拟化扩展（Intel VT 或者 AMD-V）的 x86 硬件的开源的 Linux 原生的全虚拟化解决方案。KVM 中，虚拟机被实现为常规的 Linux 进程，由标准 Linux 调度程序进行调度。虚机的每个虚拟 CPU 被实现为一个常规的 Linux 进程。这使得 KMV 能够使用 Linux 内核的已有功能。</p><hr class="footnotes-sep">',12),d={class:"footnotes"},p={class:"footnotes-list"},u={id:"footnote1",class:"footnote-item"},m={href:"https://zhuanlan.zhihu.com/p/441287815",target:"_blank",rel:"noopener noreferrer"},x=o("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),g={id:"footnote2",class:"footnote-item"},V={href:"https://www.zhihu.com/question/307537564",target:"_blank",rel:"noopener noreferrer"},k=o("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1);function v(z,b){const t=h("ExternalLinkIcon");return a(),r("div",null,[f,i(" more "),_,o("section",d,[o("ol",p,[o("li",u,[o("p",null,[e("深入理解虚拟化，知乎，"),o("a",m,[e("https://zhuanlan.zhihu.com/p/441287815"),n(t)]),e(),x])]),o("li",g,[o("p",null,[e("Docker、K8s、KVM、Hypervisor 和微服务有什么区别联系吗，知乎，"),o("a",V,[e("https://www.zhihu.com/question/307537564"),n(t)]),e(),k])])])])])}const C=s(l,[["render",v],["__file","visualization-tech.html.vue"]]);export{C as default};
