import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as d,c as b,b as e,a as r,w as n,e as u,d as t}from"./app-DhX54nll.js";const p={},h=e("p",null,"保存国内可用的近乎所有镜像列表。",-1),m={class:"table-of-contents"},g=u(`<div class="hint-container tip"><p class="hint-container-title">选择镜像</p><p>本文的所有镜像都是中国大陆节点，为了提高速度，可以选择不那么流行的镜像（如某些大学或网易、腾讯等，前提是稳定），由于清华大学、阿里云等镜像为大众熟知，其服务速度常常波动，且常常下载缓慢并被限速。如果支持尽量选择负载均衡镜像。</p></div><h2 id="1-系统发行版镜像" tabindex="-1"><a class="header-anchor" href="#1-系统发行版镜像"><span>1. 系统发行版镜像</span></a></h2><h3 id="11-ubuntu-镜像" tabindex="-1"><a class="header-anchor" href="#11-ubuntu-镜像"><span>1.1 Ubuntu 镜像</span></a></h3><p>推荐：<a href="https://launchpad.net/ubuntu/+cdmirrors" target="_blank" rel="noopener noreferrer">官方镜像列表</a>。</p><p>推荐镜像列表：</p><ol><li><a href="https://ubuntu.com/download" target="_blank" rel="noopener noreferrer">Ubuntu 官方镜像</a></li><li><a href="https://mirrors.tuna.tsinghua.edu.cn/ubuntu-releases/" target="_blank" rel="noopener noreferrer">清华大学镜像</a></li><li><a href="https://repo.huaweicloud.com/ubuntu-releases/" target="_blank" rel="noopener noreferrer">华为云镜像</a></li><li><a href="https://mirrors.aliyun.com/ubuntu-releases/" target="_blank" rel="noopener noreferrer">阿里云镜像</a></li><li><a href="https://mirror.nju.edu.cn/ubuntu-releases/" target="_blank" rel="noopener noreferrer">南京大学镜像</a></li><li><a href="https://mirrors.bupt.edu.cn/ubuntu-releases/" target="_blank" rel="noopener noreferrer">北京邮电大学镜像</a></li><li><a href="https://mirrors.163.com/ubuntu-releases/" target="_blank" rel="noopener noreferrer">网易镜像</a></li><li><a href="https://mirrors.ustc.edu.cn/ubuntu-releases/" target="_blank" rel="noopener noreferrer">中国科学技术大学镜像</a></li><li><a href="https://mirrors.cloud.tencent.com/ubuntu-releases/" target="_blank" rel="noopener noreferrer">腾讯镜像</a></li></ol><h3 id="12-debian-镜像" tabindex="-1"><a class="header-anchor" href="#12-debian-镜像"><span>1.2 Debian 镜像</span></a></h3><table><thead><tr><th>名称</th><th>后缀</th></tr></thead><tbody><tr><td>Debian 安装源</td><td><code>debian-cd</code></td></tr><tr><td>Debian 安全更新源</td><td><code>debian-security</code></td></tr><tr><td>Debian 第三方多媒体软件源</td><td><code>debian-multimedia</code></td></tr><tr><td>Debian 预发软件源</td><td><code>debian-backports</code></td></tr><tr><td>Debian 其他架构移植源</td><td><code>debian-ports</code></td></tr><tr><td>Debian 过期源</td><td><code>debian-archive</code></td></tr></tbody></table><p>推荐：<a href="https://www.debian.org/CD/http-ftp/" target="_blank" rel="noopener noreferrer">官方镜像列表</a>。</p><p>推荐镜像列表：</p><ol><li><a href="https://www.debian.org/CD/http-ftp/" target="_blank" rel="noopener noreferrer">Debian 官方镜像</a></li><li><a href="https://mirrors.tuna.tsinghua.edu.cn/debian-cd/" target="_blank" rel="noopener noreferrer">清华大学镜像</a></li><li><a href="https://mirrors.aliyun.com/debian-cd/" target="_blank" rel="noopener noreferrer">阿里云镜像</a></li></ol><h2 id="2-系统软件源镜像" tabindex="-1"><a class="header-anchor" href="#2-系统软件源镜像"><span>2. 系统软件源镜像</span></a></h2><h3 id="21-ubuntu-镜像源" tabindex="-1"><a class="header-anchor" href="#21-ubuntu-镜像源"><span>2.1 Ubuntu 镜像源</span></a></h3><p>Ubuntu 使用 APT 作为包管理器，配置文件在保存在 <code>/etc/apt/sources.list</code> 中。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">su</span>
<span class="token function">mv</span> /etc/apt/sources.list /etc/apt/sources.list-bak
<span class="token builtin class-name">echo</span> <span class="token string">&#39;
deb http://mirrors.163.com/ubuntu/ bionic main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ bionic-security main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ bionic-updates main restricted universe multiverse
deb http://mirrors.163.com/ubuntu/ bionic-backports main restricted universe multiverse
&#39;</span> <span class="token operator">&gt;</span> /etc/apt/sources.list
</code></pre></div><p>一键更新（以清华镜像为例）：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/archive.ubuntu.com/mirrors.tuna.tsinghua.edu.cn/g&#39;</span> /etc/apt/sources.list
</code></pre></div><p>安全更新源：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sed</span> <span class="token parameter variable">-i</span> <span class="token string">&#39;s/security.ubuntu.com/mirrors.tuna.tsinghua.edu.cn/g&#39;</span> /etc/apt/sources.list
</code></pre></div><h4 id="ubuntu-2204-jammy" tabindex="-1"><a class="header-anchor" href="#ubuntu-2204-jammy"><span>Ubuntu 22.04 (jammy)</span></a></h4>`,20),v=e("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`deb http://archive.ubuntu.com/ubuntu/ jammy main restricted universe multiverse
deb http://archive.ubuntu.com/ubuntu/ jammy-updates main restricted universe multiverse
deb http://archive.ubuntu.com/ubuntu/ jammy-backports main restricted universe multiverse
deb http://archive.ubuntu.com/ubuntu/ jammy-security main restricted universe multiverse
`)])],-1),f=e("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[t(`deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy main restricted universe multiverse
`),e("span",{class:"token comment"},"# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy main restricted universe multiverse"),t(`
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse
`),e("span",{class:"token comment"},"# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-updates main restricted universe multiverse"),t(`
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse
`),e("span",{class:"token comment"},"# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-backports main restricted universe multiverse"),t(`
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-security main restricted universe multiverse
`),e("span",{class:"token comment"},"# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ jammy-security main restricted universe multiverse"),t(`
`)])])],-1),k=e("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code")])],-1),y=e("h4",{id:"ubuntu-2004-focal",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ubuntu-2004-focal"},[e("span",null,"Ubuntu 20.04 (focal)")])],-1),_=e("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`deb http://archive.ubuntu.com/ubuntu/ focal main restricted universe multiverse
deb http://archive.ubuntu.com/ubuntu/ focal-updates main restricted universe multiverse
deb http://archive.ubuntu.com/ubuntu/ focal-backports main restricted universe multiverse
deb http://archive.ubuntu.com/ubuntu/ focal-security main restricted universe multiverse
`)])],-1),x=e("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[t(`deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted universe multiverse
`),e("span",{class:"token comment"},"# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal main restricted universe multiverse"),t(`
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted universe multiverse
`),e("span",{class:"token comment"},"# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-updates main restricted universe multiverse"),t(`
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse
`),e("span",{class:"token comment"},"# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-backports main restricted universe multiverse"),t(`
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted universe multiverse
`),e("span",{class:"token comment"},"# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ focal-security main restricted universe multiverse"),t(`
`)])])],-1),w=e("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code")])],-1),A=e("h4",{id:"ubuntu-1804-bionic",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ubuntu-1804-bionic"},[e("span",null,"Ubuntu 18.04 (bionic)")])],-1),j=e("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code")])],-1),D=e("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[t(`deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse
`),e("span",{class:"token comment"},"# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic main restricted universe multiverse"),t(`
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse
`),e("span",{class:"token comment"},"# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse"),t(`
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse
`),e("span",{class:"token comment"},"# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse"),t(`
deb https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse
`),e("span",{class:"token comment"},"# deb-src https://mirrors.tuna.tsinghua.edu.cn/ubuntu/ bionic-security main restricted universe multiverse"),t(`
`)])])],-1),J=e("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code")])],-1),T=u(`<h3 id="22-debian-镜像源" tabindex="-1"><a class="header-anchor" href="#22-debian-镜像源"><span>2.2 Debian 镜像源</span></a></h3><p>Debian 使用 APT 作为包管理器，配置文件在保存在 <code>/etc/apt/sources.list</code> 中。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">su</span>
<span class="token function">mv</span> /etc/apt/sources.list /etc/apt/sources.list-bak
<span class="token builtin class-name">echo</span> <span class="token string">&#39;
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free
deb https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free
&#39;</span> <span class="token operator">&gt;</span> /etc/apt/sources.list
</code></pre></div><p>此处不推荐使用非官方的安全更新，具体原因可参考 <a href="https://www.debian.org/security/faq.en.html#mirror" target="_blank" rel="noopener noreferrer">Debian: FAQ</a>。如果你想将镜像源的安全更新改为官方地址，请保留官方的 <code>*-security</code> 条目。例如 Bullseye 的 <code>sources.list</code>：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>deb https://security.debian.org/debian-security bullseye-security main contrib non-free
<span class="token comment"># deb-src https://security.debian.org/debian-security bullseye-security main contrib non-free</span>
</code></pre></div><p>参考链接：</p><ul><li>清华大学：<a href="https://mirrors.tuna.tsinghua.edu.cn/help/debian/" target="_blank" rel="noopener noreferrer">https://mirrors.tuna.tsinghua.edu.cn/help/debian/</a></li><li>阿里云：<a href="https://mirrors.tuna.tsinghua.edu.cn/help/debian/" target="_blank" rel="noopener noreferrer">https://mirrors.tuna.tsinghua.edu.cn/help/debian/</a></li></ul><h4 id="debian-12-bookworm" tabindex="-1"><a class="header-anchor" href="#debian-12-bookworm"><span>Debian 12 (bookworm)</span></a></h4>`,8),K=e("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`deb http://deb.debian.org/debian bookworm main
deb http://deb.debian.org/debian-security bookworm-security main
deb http://deb.debian.org/debian bookworm-updates main
`)])],-1),P=e("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[t(`deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm main contrib non-free non-free-firmware
`),e("span",{class:"token comment"},"# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm main contrib non-free non-free-firmware"),t(`
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm-updates main contrib non-free non-free-firmware
`),e("span",{class:"token comment"},"# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm-updates main contrib non-free non-free-firmware"),t(`
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm-backports main contrib non-free non-free-firmware
`),e("span",{class:"token comment"},"# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bookworm-backports main contrib non-free non-free-firmware"),t(`
deb https://mirrors.tuna.tsinghua.edu.cn/debian-security bookworm-security main contrib non-free non-free-firmware
`),e("span",{class:"token comment"},"# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security bookworm-security main contrib non-free non-free-firmware"),t(`
`)])])],-1),U=e("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code")])],-1),C=e("h4",{id:"debian-11-bullseye",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#debian-11-bullseye"},[e("span",null,"Debian 11 (bullseye)")])],-1),Z=e("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`deb http://deb.debian.org/debian bullseye main
deb http://deb.debian.org/debian-security bullseye-security main
deb http://deb.debian.org/debian bullseye-updates main
`)])],-1),z=e("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[t(`deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free
`),e("span",{class:"token comment"},"# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye main contrib non-free"),t(`
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free
`),e("span",{class:"token comment"},"# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-updates main contrib non-free"),t(`
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free
`),e("span",{class:"token comment"},"# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ bullseye-backports main contrib non-free"),t(`
deb https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free
`),e("span",{class:"token comment"},"# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security bullseye-security main contrib non-free"),t(`
`)])])],-1),N=e("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[t(`deb https://mirrors.aliyun.com/debian/ bullseye main non-free contrib
`),e("span",{class:"token comment"},"# deb-src https://mirrors.aliyun.com/debian/ bullseye main non-free contrib"),t(`
deb https://mirrors.aliyun.com/debian-security/ bullseye-security main
`),e("span",{class:"token comment"},"# deb-src https://mirrors.aliyun.com/debian-security/ bullseye-security main"),t(`
deb https://mirrors.aliyun.com/debian/ bullseye-updates main non-free contrib
`),e("span",{class:"token comment"},"# deb-src https://mirrors.aliyun.com/debian/ bullseye-updates main non-free contrib"),t(`
deb https://mirrors.aliyun.com/debian/ bullseye-backports main non-free contrib
`),e("span",{class:"token comment"},"# deb-src https://mirrors.aliyun.com/debian/ bullseye-backports main non-free contrib"),t(`
`)])])],-1),O=e("h4",{id:"debian-10-buster",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#debian-10-buster"},[e("span",null,"Debian 10 (buster)")])],-1),S=e("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`deb http://deb.debian.org/debian buster main
deb http://deb.debian.org/debian-security buster-security main
deb http://deb.debian.org/debian buster-updates main
`)])],-1),B=e("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[t(`deb https://mirrors.tuna.tsinghua.edu.cn/debian/ buster main contrib non-free
`),e("span",{class:"token comment"},"# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ buster main contrib non-free"),t(`
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ buster-updates main contrib non-free
`),e("span",{class:"token comment"},"# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ buster-updates main contrib non-free"),t(`
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ buster-backports main contrib non-free
`),e("span",{class:"token comment"},"# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ buster-backports main contrib non-free"),t(`
deb https://mirrors.tuna.tsinghua.edu.cn/debian-security buster/updates main contrib non-free
`),e("span",{class:"token comment"},"# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security buster/updates main contrib non-free"),t(`
`)])])],-1),M=e("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[t(`deb https://mirrors.aliyun.com/debian/ buster main non-free contrib
`),e("span",{class:"token comment"},"# deb-src https://mirrors.aliyun.com/debian/ buster main non-free contrib"),t(`
deb https://mirrors.aliyun.com/debian-security buster/updates main
`),e("span",{class:"token comment"},"# deb-src https://mirrors.aliyun.com/debian-security buster/updates main"),t(`
deb https://mirrors.aliyun.com/debian/ buster-updates main non-free contrib
`),e("span",{class:"token comment"},"# deb-src https://mirrors.aliyun.com/debian/ buster-updates main non-free contrib"),t(`
deb https://mirrors.aliyun.com/debian/ buster-backports main non-free contrib
`),e("span",{class:"token comment"},"# deb-src https://mirrors.aliyun.com/debian/ buster-backports main non-free contrib"),t(`
`)])])],-1),V=e("h4",{id:"debian-9-stretch",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#debian-9-stretch"},[e("span",null,"Debian 9 (stretch)")])],-1),q=e("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`deb http://deb.debian.org/debian stretch main
deb http://deb.debian.org/debian-security stretch-security main
deb http://deb.debian.org/debian stretch-updates main
`)])],-1),I=e("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[t(`deb https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch main contrib non-free
`),e("span",{class:"token comment"},"# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch main contrib non-free"),t(`
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch-updates main contrib non-free
`),e("span",{class:"token comment"},"# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch-updates main contrib non-free"),t(`
deb https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch-backports main contrib non-free
`),e("span",{class:"token comment"},"# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian/ stretch-backports main contrib non-free"),t(`
deb https://mirrors.tuna.tsinghua.edu.cn/debian-security stretch/updates main contrib non-free
`),e("span",{class:"token comment"},"# deb-src https://mirrors.tuna.tsinghua.edu.cn/debian-security stretch/updates main contrib non-free"),t(`
`)])])],-1),L=e("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[t(`deb https://mirrors.aliyun.com/debian/ stretch main non-free contrib
`),e("span",{class:"token comment"},"# deb-src https://mirrors.aliyun.com/debian/ stretch main non-free contrib"),t(`
deb https://mirrors.aliyun.com/debian-security stretch/updates main
`),e("span",{class:"token comment"},"# deb-src https://mirrors.aliyun.com/debian-security stretch/updates main"),t(`
deb https://mirrors.aliyun.com/debian/ stretch-updates main non-free contrib
`),e("span",{class:"token comment"},"# deb-src https://mirrors.aliyun.com/debian/ stretch-updates main non-free contrib"),t(`
`)])])],-1),W=e("h2",{id:"3-pypi-镜像",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#3-pypi-镜像"},[e("span",null,"3. PyPI 镜像")])],-1),E=e("p",null,[t("推荐使用负载均衡镜像，新版本的 "),e("code",null,"pip"),t(" 可自动选择最快的镜像站点下载，一般比流行镜像站点更快。")],-1),F=e("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# 更新 pip"),t(`
python3 `),e("span",{class:"token parameter variable"},"-m"),t(" pip "),e("span",{class:"token function"},"install"),t(),e("span",{class:"token parameter variable"},"-i"),t(" https://pypi.tuna.tsinghua.edu.cn/simple "),e("span",{class:"token parameter variable"},"--upgrade"),t(` pip

`),e("span",{class:"token comment"},"# 配置全局负载均衡镜像"),t(`
pip3 config `),e("span",{class:"token builtin class-name"},"set"),t(" global.extra-index-url "),e("span",{class:"token string"},`"\\
https://pypi.tuna.tsinghua.edu.cn/simple/
https://mirrors.163.com/pypi/simple/
https://repo.huaweicloud.com/repository/pypi/simple/
https://mirrors.bfsu.edu.cn/pypi/web/simple/
https://pypi.mirrors.ustc.edu.cn/simple/
https://pypi.douban.com/simple/"`),t(`
`)])])],-1),Q=e("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# 更新 pip"),t(`
python `),e("span",{class:"token parameter variable"},"-m"),t(" pip "),e("span",{class:"token function"},"install"),t(),e("span",{class:"token parameter variable"},"-i"),t(" https://pypi.tuna.tsinghua.edu.cn/simple "),e("span",{class:"token parameter variable"},"--upgrade"),t(` pip

`),e("span",{class:"token comment"},"# 配置全局负载均衡镜像"),t(`
pip config `),e("span",{class:"token builtin class-name"},"set"),t(" global.extra-index-url "),e("span",{class:"token string"},'"https://pypi.tuna.tsinghua.edu.cn/simple/ https://mirrors.163.com/pypi/simple/ https://repo.huaweicloud.com/repository/pypi/simple/ https://mirrors.bfsu.edu.cn/pypi/web/simple/ https://pypi.mirrors.ustc.edu.cn/simple/ https://pypi.douban.com/simple/"'),t(`
`)])])],-1),R=u('<p>推荐镜像列表：</p><ol><li><a href="https://pypi.tuna.tsinghua.edu.cn/simple/" target="_blank" rel="noopener noreferrer">清华大学镜像</a></li><li><a href="https://mirrors.aliyun.com/pypi/simple/" target="_blank" rel="noopener noreferrer">阿里云镜像</a></li><li><a href="https://pypi.mirrors.ustc.edu.cn/simple/" target="_blank" rel="noopener noreferrer">中国科技大学镜像</a></li><li><a href="https://pypi.douban.com/simple/" target="_blank" rel="noopener noreferrer">豆瓣镜像</a></li><li><a href="https://repo.huaweicloud.com/repository/pypi/simple/" target="_blank" rel="noopener noreferrer">华为云镜像</a></li><li><a href="https://mirrors.bfsu.edu.cn/pypi/web/simple/" target="_blank" rel="noopener noreferrer">北京外国语大学镜像</a></li></ol><p>第三方列表合集：</p><ol><li><a href="https://mirrors.cernet.edu.cn/list/pypi" target="_blank" rel="noopener noreferrer">校园网联合镜像站</a>（包含国内众多高校）</li></ol><h2 id="4-java-系列" tabindex="-1"><a class="header-anchor" href="#4-java-系列"><span>4. Java 系列</span></a></h2><h3 id="41-jdk--openjdk-镜像" tabindex="-1"><a class="header-anchor" href="#41-jdk--openjdk-镜像"><span>4.1 JDK / OpenJDK 镜像</span></a></h3><p>推荐镜像列表：</p><ol><li><a href="https://mirrors.huaweicloud.com/openjdk/" target="_blank" rel="noopener noreferrer">华为云镜像</a>（旧版本 <a href="https://repo.huaweicloud.com/java/jdk/" target="_blank" rel="noopener noreferrer">访问此处</a>）</li><li><a href="https://mirrors.tuna.tsinghua.edu.cn/Adoptium/" target="_blank" rel="noopener noreferrer">清华大学镜像 AdoptOpenJDK</a></li></ol><p>下游版本：</p><ol><li><a href="https://aws.amazon.com/cn/corretto/" target="_blank" rel="noopener noreferrer">Amazon Corretto</a></li><li><a href="https://www.azul.com/downloads/?package=jdk" target="_blank" rel="noopener noreferrer">Zulu JDK</a></li><li><a href="https://dragonwell-jdk.io/#/index" target="_blank" rel="noopener noreferrer">阿里巴巴 Dragonwell</a></li><li><a href="https://cloud.tencent.com/product/tkjdk" target="_blank" rel="noopener noreferrer">腾讯 KonaJDK</a></li><li><a href="https://learn.microsoft.com/zh-cn/java/openjdk/download" target="_blank" rel="noopener noreferrer">微软 OpenJDK</a></li><li><a href="https://www.hikunpeng.com/developer/devkit/compiler/jdk" target="_blank" rel="noopener noreferrer">毕昇 JDK</a></li></ol><h3 id="42-maven-镜像" tabindex="-1"><a class="header-anchor" href="#42-maven-镜像"><span>4.2 Maven 镜像</span></a></h3>',11);function X(G,H){const i=c("router-link"),o=c("CodeTabs");return d(),b("div",null,[h,e("nav",m,[e("ul",null,[e("li",null,[r(i,{to:"#1-系统发行版镜像"},{default:n(()=>[t("1. 系统发行版镜像")]),_:1}),e("ul",null,[e("li",null,[r(i,{to:"#11-ubuntu-镜像"},{default:n(()=>[t("1.1 Ubuntu 镜像")]),_:1})]),e("li",null,[r(i,{to:"#12-debian-镜像"},{default:n(()=>[t("1.2 Debian 镜像")]),_:1})])])]),e("li",null,[r(i,{to:"#2-系统软件源镜像"},{default:n(()=>[t("2. 系统软件源镜像")]),_:1}),e("ul",null,[e("li",null,[r(i,{to:"#21-ubuntu-镜像源"},{default:n(()=>[t("2.1 Ubuntu 镜像源")]),_:1})]),e("li",null,[r(i,{to:"#22-debian-镜像源"},{default:n(()=>[t("2.2 Debian 镜像源")]),_:1})])])]),e("li",null,[r(i,{to:"#3-pypi-镜像"},{default:n(()=>[t("3. PyPI 镜像")]),_:1})]),e("li",null,[r(i,{to:"#4-java-系列"},{default:n(()=>[t("4. Java 系列")]),_:1}),e("ul",null,[e("li",null,[r(i,{to:"#41-jdk--openjdk-镜像"},{default:n(()=>[t("4.1 JDK / OpenJDK 镜像")]),_:1})]),e("li",null,[r(i,{to:"#42-maven-镜像"},{default:n(()=>[t("4.2 Maven 镜像")]),_:1})])])])])]),g,r(o,{id:"180",data:[{id:"官方源"},{id:"清华大学"},{id:"阿里云"}]},{title0:n(({value:a,isActive:s})=>[t("官方源")]),title1:n(({value:a,isActive:s})=>[t("清华大学")]),title2:n(({value:a,isActive:s})=>[t("阿里云")]),tab0:n(({value:a,isActive:s})=>[v]),tab1:n(({value:a,isActive:s})=>[f]),tab2:n(({value:a,isActive:s})=>[k]),_:1}),y,r(o,{id:"194",data:[{id:"官方源"},{id:"清华大学"},{id:"阿里云"}]},{title0:n(({value:a,isActive:s})=>[t("官方源")]),title1:n(({value:a,isActive:s})=>[t("清华大学")]),title2:n(({value:a,isActive:s})=>[t("阿里云")]),tab0:n(({value:a,isActive:s})=>[_]),tab1:n(({value:a,isActive:s})=>[x]),tab2:n(({value:a,isActive:s})=>[w]),_:1}),A,r(o,{id:"208",data:[{id:"官方源"},{id:"清华大学"},{id:"阿里云"}]},{title0:n(({value:a,isActive:s})=>[t("官方源")]),title1:n(({value:a,isActive:s})=>[t("清华大学")]),title2:n(({value:a,isActive:s})=>[t("阿里云")]),tab0:n(({value:a,isActive:s})=>[j]),tab1:n(({value:a,isActive:s})=>[D]),tab2:n(({value:a,isActive:s})=>[J]),_:1}),T,r(o,{id:"248",data:[{id:"官方源"},{id:"清华大学"},{id:"阿里云"}]},{title0:n(({value:a,isActive:s})=>[t("官方源")]),title1:n(({value:a,isActive:s})=>[t("清华大学")]),title2:n(({value:a,isActive:s})=>[t("阿里云")]),tab0:n(({value:a,isActive:s})=>[K]),tab1:n(({value:a,isActive:s})=>[P]),tab2:n(({value:a,isActive:s})=>[U]),_:1}),C,r(o,{id:"262",data:[{id:"官方源"},{id:"清华大学"},{id:"阿里云"}]},{title0:n(({value:a,isActive:s})=>[t("官方源")]),title1:n(({value:a,isActive:s})=>[t("清华大学")]),title2:n(({value:a,isActive:s})=>[t("阿里云")]),tab0:n(({value:a,isActive:s})=>[Z]),tab1:n(({value:a,isActive:s})=>[z]),tab2:n(({value:a,isActive:s})=>[N]),_:1}),O,r(o,{id:"276",data:[{id:"官方源"},{id:"清华大学"},{id:"阿里云"}]},{title0:n(({value:a,isActive:s})=>[t("官方源")]),title1:n(({value:a,isActive:s})=>[t("清华大学")]),title2:n(({value:a,isActive:s})=>[t("阿里云")]),tab0:n(({value:a,isActive:s})=>[S]),tab1:n(({value:a,isActive:s})=>[B]),tab2:n(({value:a,isActive:s})=>[M]),_:1}),V,r(o,{id:"290",data:[{id:"官方源"},{id:"清华大学"},{id:"阿里云"}]},{title0:n(({value:a,isActive:s})=>[t("官方源")]),title1:n(({value:a,isActive:s})=>[t("清华大学")]),title2:n(({value:a,isActive:s})=>[t("阿里云")]),tab0:n(({value:a,isActive:s})=>[q]),tab1:n(({value:a,isActive:s})=>[I]),tab2:n(({value:a,isActive:s})=>[L]),_:1}),W,E,r(o,{id:"307",data:[{id:"Linux"},{id:"Windows"}],"tab-id":"sys"},{title0:n(({value:a,isActive:s})=>[t("Linux")]),title1:n(({value:a,isActive:s})=>[t("Windows")]),tab0:n(({value:a,isActive:s})=>[F]),tab1:n(({value:a,isActive:s})=>[Q]),_:1}),R])}const ee=l(p,[["render",X],["__file","mirrors-list.html.vue"]]),te=JSON.parse('{"path":"/posts/envs/mirrors-list.html","title":"国内镜像网站列表","lang":"zh-CN","frontmatter":{"title":"国内镜像网站列表","date":"2023-03-13T00:00:00.000Z","category":["环境搭建"],"tag":["镜像网站"],"description":"保存国内可用的近乎所有镜像列表。","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/posts/envs/mirrors-list.html"}],["meta",{"property":"og:site_name","content":"鸭梨"}],["meta",{"property":"og:title","content":"国内镜像网站列表"}],["meta",{"property":"og:description","content":"保存国内可用的近乎所有镜像列表。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-27T04:16:18.000Z"}],["meta",{"property":"article:author","content":"Alex Sun"}],["meta",{"property":"article:tag","content":"镜像网站"}],["meta",{"property":"article:published_time","content":"2023-03-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-27T04:16:18.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"国内镜像网站列表\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-13T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-27T04:16:18.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Alex Sun\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[{"level":2,"title":"1. 系统发行版镜像","slug":"1-系统发行版镜像","link":"#1-系统发行版镜像","children":[{"level":3,"title":"1.1 Ubuntu 镜像","slug":"11-ubuntu-镜像","link":"#11-ubuntu-镜像","children":[]},{"level":3,"title":"1.2 Debian 镜像","slug":"12-debian-镜像","link":"#12-debian-镜像","children":[]}]},{"level":2,"title":"2. 系统软件源镜像","slug":"2-系统软件源镜像","link":"#2-系统软件源镜像","children":[{"level":3,"title":"2.1 Ubuntu 镜像源","slug":"21-ubuntu-镜像源","link":"#21-ubuntu-镜像源","children":[]},{"level":3,"title":"2.2 Debian 镜像源","slug":"22-debian-镜像源","link":"#22-debian-镜像源","children":[]}]},{"level":2,"title":"3. PyPI 镜像","slug":"3-pypi-镜像","link":"#3-pypi-镜像","children":[]},{"level":2,"title":"4. Java 系列","slug":"4-java-系列","link":"#4-java-系列","children":[{"level":3,"title":"4.1 JDK / OpenJDK 镜像","slug":"41-jdk--openjdk-镜像","link":"#41-jdk--openjdk-镜像","children":[]},{"level":3,"title":"4.2 Maven 镜像","slug":"42-maven-镜像","link":"#42-maven-镜像","children":[]}]}],"git":{"createdTime":1678722114000,"updatedTime":1716783378000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":7}]},"readingTime":{"minutes":6.56,"words":1969},"filePathRelative":"posts/envs/mirrors-list.md","localizedDate":"2023年3月13日","excerpt":"<p>保存国内可用的近乎所有镜像列表。</p>\\n","autoDesc":true}');export{ee as comp,te as data};
