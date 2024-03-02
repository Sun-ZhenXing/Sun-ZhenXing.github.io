import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r,o as c,c as p,a as e,b as o,w as s,d as t,e as a}from"./app-C6k5k7Rq.js";const h={},g=e("p",null,"Windows 安卓子系统的使用简介。",-1),u={class:"table-of-contents"},m=e("h2",{id:"1-安装官方版本的-wsa",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#1-安装官方版本的-wsa"},[e("span",null,"1. 安装官方版本的 WSA")])],-1),w={href:"https://learn.microsoft.com/zh-cn/windows/android/wsa/",target:"_blank",rel:"noopener noreferrer"},A=a(`<p>首先确认你的 Windows 版本是否支持 WSA：</p><ul><li>x64 或 ARM64 架构的现代处理器</li><li>Windows 11</li><li>至少 8 GB 的 RAM</li></ul><p>确认后，需要 Windows 开启 <strong>虚拟机平台</strong>，如果没有打开，请在 <strong>启用或关闭 Windows 功能</strong> 中打开 <strong>虚拟机平台</strong>，然后重启。</p><p>目前 WSA 还处于预览阶段，仅在部分地区可用，需要将 Windows 地区设置为 <strong>美国</strong>，然后在 Microsoft Store 安装 <a href="ms-windows-store://pdp/?productid=9NJHK44TTKSX">Amazon Appstore</a> 即可，相信不久 WSA 就可以开放使用。</p><p>安装完成后，系统将出现 <strong>适用于 Android™ 的 Windows 子系统</strong> 的应用，打开即可。</p><p>现在，你的 Windows 11 可以安装任何 Android 应用了，Android 应用和已经安装的 Windows 应用看起来一模一样。</p><p>然后进行一些配置，例如，如果你需要使用 WSA 进行开发，那么打开 <strong>开发人员模式</strong> 选项。</p><p>可选配置：<strong>图形和性能</strong>，可指定显卡运行 Android 子系统，例如指定为 <strong>NVIDIA GeForce RTX 3070 Ti Laptop GPU</strong>，以提升性能。</p><details class="hint-container details"><summary>版本信息</summary><p>通过查看系统版本，我们发现此系统是 Android 13，内核版本如下：</p><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>5.10.117-windows-subsystem-for-android-20220906
#1 Tue Sep 6 23:23:03 UTC 2022
</code></pre></div><p>使用 Termux 命令 <code>uname -a</code> 的输出如下：</p><div class="language-text" data-ext="text" data-title="text"><pre class="language-text"><code>Linux localhost 5.10.117-windows-subsystem-for-android-20220906
#1 SMP PREEMPT Tue Sep 6 23:23:03 UTC 2022 x86_64 Android
</code></pre></div><p>这不是意味着 WSA 使用 x86_64 架构，WSA 使用 Intel Bridge 技术在基于 x86 的处理器上模拟 ARM 应用程序，这可以让其兼容 x86 和 ARM 架构的应用程序。</p><p>WSA 和 WSL 2 使用的不是一张网卡，WSA 使用 <strong>以太网适配器 vEthernet (WSLCore)</strong>，而 WSL 2 使用 <strong>以太网适配器 vEthernet (WSL)</strong>。</p></details><h2 id="2-使用-adb-连接" tabindex="-1"><a class="header-anchor" href="#2-使用-adb-连接"><span>2. 使用 ADB 连接</span></a></h2>`,10),W={class:"hint-container tip"},f=e("p",{class:"hint-container-title"},"ADB",-1),_={href:"https://developer.android.google.cn/studio/command-line/adb?hl=zh-cn",target:"_blank",rel:"noopener noreferrer"},b=e("p",null,[t("如果不希望使用开启调试，可以直接阅读 "),e("a",{href:"#3-%E4%BD%BF%E7%94%A8-wsa"},"3. 使用 WSA"),t(" 中的相关说明进行使用。")],-1),S=a(`<p>确保已经打开 <strong>开发人员模式</strong>。</p><p>查看 ADB 版本：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>adb version
</code></pre></div><p>设置开发者模式后，现在可以直接连接 WSA：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>adb connect <span class="token number">127.0</span>.0.1:58526
</code></pre></div><p>第一次连接会提示是否授权，勾选 <strong>总是允许来自此计算机的连接</strong>，然后点击 <strong>允许</strong> 即可。</p><p>使用下面的命令安装 APK：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>adb <span class="token function">install</span> <span class="token operator">&lt;</span>apk-file<span class="token operator">&gt;</span>
</code></pre></div><h2 id="3-使用-wsa" tabindex="-1"><a class="header-anchor" href="#3-使用-wsa"><span>3. 使用 WSA</span></a></h2><p>通常启动一个应用需要知道其包名，如果你已经知道包名，那么直接在文件管理器中输入 <code>wsa://&lt;package-name&gt;</code> 即可启动应用。</p><p>如果不知道，可以使用下面的命令查看所有已安装的应用的包名：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>adb shell pm list packages
</code></pre></div><p>所有的 Android 都可以使用下面的命令启动应用：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>adb shell am start <span class="token parameter variable">-n</span> <span class="token operator">&lt;</span>package-name<span class="token operator">&gt;</span>/<span class="token operator">&lt;</span>activity-name<span class="token operator">&gt;</span>
</code></pre></div><p>但是获取一个应用的首屏 <code>Activity</code> 名称比较麻烦，可以使用下面的命令查看应用的详细信息：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>adb shell dumpsys package <span class="token operator">&lt;</span>package-name<span class="token operator">&gt;</span>
</code></pre></div><p>由于 Windows 11 支持从包名启动，所以可以使用 CMD 命令行来启动应用，例如启动设置：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>start wsa://com.android.settings
</code></pre></div>`,18),v={href:"https://www.coolapk.com/apk/com.microsoft.launcher",target:"_blank",rel:"noopener noreferrer"},x=a(`<div class="language-yaml" data-ext="yml" data-title="yml"><pre class="language-yaml"><code>wsa<span class="token punctuation">:</span>//com.microsoft.launcher
</code></pre></div><p>这样双击就可以打开 Android 子系统的桌面了，但是不能设置为默认桌面，也不能更换壁纸，原因是 WSA 的默认应用指向了 Windows 默认应用。</p><h2 id="4-配合-android-studio-进行开发" tabindex="-1"><a class="header-anchor" href="#4-配合-android-studio-进行开发"><span>4. 配合 Android Studio 进行开发</span></a></h2><p>如果已经使用 ADB 连接到 WSA，那么就可以使用 Android Studio 会自动识别，并在设备中显示 <strong>Microsoft Corporation Subsystem for Android(TM)</strong>，可以像正常开发 Android 应用一样开发。</p>`,4),y={href:"https://github.com/microsoft/PowerToys",target:"_blank",rel:"noopener noreferrer"},k=e("sup",{class:"footnote-ref"},[e("a",{href:"#footnote1"},"[1]"),e("a",{class:"footnote-anchor",id:"footnote-ref1"})],-1),T=a('<p>在 PowerToys 项目的 Releases 中下载安装最新版本即可直接使用。在任意窗口中按 <code>Win + Ctrl + T</code> 切换置顶即可。</p><p>如果需要锁定大小，可以在 WSA 的设置界面给每个应用程序单独设置。</p><div class="hint-container warning"><p class="hint-container-title">闪退</p><p>注意：部分应用随意调整大小时可能闪退。</p><p>如果使用 Android Studio 进行开发时，调整应用大小出现闪退，则可能是空指针异常。部分视图事件在重绘时没有传入 <code>view</code>，因此调整出错事件的视图对象，类型是 <code>View?</code>（Kotlin）或 <code>Optional&lt;View&gt;</code>（Java），需要进行判空处理。</p></div><p>还有一些行为和实体机不一致：例如 <code>Toast</code>，实体机上 <code>Toast</code> 会显示在最上层，但是在 WSA 上 <code>Toast</code> 将发送到 Windows 通知栏。如果没有显示 <code>Toast</code>，可以检查 Windows 通知栏是否有通知或者是否开启了通知。</p>',4),B=a('<hr class="footnotes-sep"><section class="footnotes"><ol class="footnotes-list"><li id="footnote1" class="footnote-item"><p>PowerToys 是微软开发的一系列实用工具，包括窗口置顶功能。 <a href="#footnote-ref1" class="footnote-backref">↩︎</a></p></li></ol></section>',2);function D(M,P){const n=r("router-link"),d=r("ExternalLinkIcon"),i=r("RouteLink");return c(),p("div",null,[g,e("nav",u,[e("ul",null,[e("li",null,[o(n,{to:"#1-安装官方版本的-wsa"},{default:s(()=>[t("1. 安装官方版本的 WSA")]),_:1})]),e("li",null,[o(n,{to:"#2-使用-adb-连接"},{default:s(()=>[t("2. 使用 ADB 连接")]),_:1})]),e("li",null,[o(n,{to:"#3-使用-wsa"},{default:s(()=>[t("3. 使用 WSA")]),_:1})]),e("li",null,[o(n,{to:"#4-配合-android-studio-进行开发"},{default:s(()=>[t("4. 配合 Android Studio 进行开发")]),_:1})])])]),m,e("p",null,[e("a",w,[t("Windows 安卓子系统"),o(d)]),t("（Windows Subsystem for Android™，WSA）使 Windows 11 能够运行 Android 应用程序。")]),A,e("div",W,[f,e("p",null,[t("下面的所有操作需要 "),e("a",_,[t("ADB 工具"),o(d)]),t("，如果没有安装，请先安装 ADB 工具。")]),b]),S,e("p",null,[t("由于 WSA 没有桌面，操作有点麻烦，我们可以给其安装一个 "),e("a",v,[t("微软桌面"),o(d)]),t("，然后新建一个快捷方式，地址是：")]),x,e("p",null,[t("如何置顶窗口？Windows 10 和以前窗口置顶可以通过一些小工具实现（如 ViewWizard），Windows 11 现在可以使用最新的 "),e("a",y,[t("PowerToys"),o(d)]),t(" 来实现。"),k]),T,e("p",null,[t("如果您还有其他问题请参考 "),o(i,{to:"/posts/envs/wsa-advanced.html"},{default:s(()=>[t("WSA 进阶")]),_:1}),t("。")]),B])}const L=l(h,[["render",D],["__file","windows-subsystem-for-android.html.vue"]]),E=JSON.parse('{"path":"/posts/envs/windows-subsystem-for-android.html","title":"使用 Windows 安卓子系统","lang":"zh-CN","frontmatter":{"title":"使用 Windows 安卓子系统","date":"2023-03-28T00:00:00.000Z","category":["环境搭建"],"tag":["WSA"],"description":"Windows 安卓子系统的使用简介。 1. 安装官方版本的 WSA Windows 安卓子系统（Windows Subsystem for Android™，WSA）使 Windows 11 能够运行 Android 应用程序。 首先确认你的 Windows 版本是否支持 WSA： x64 或 ARM64 架构的现代处理器 Windows 11 至少...","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/posts/envs/windows-subsystem-for-android.html"}],["meta",{"property":"og:site_name","content":"鸭梨"}],["meta",{"property":"og:title","content":"使用 Windows 安卓子系统"}],["meta",{"property":"og:description","content":"Windows 安卓子系统的使用简介。 1. 安装官方版本的 WSA Windows 安卓子系统（Windows Subsystem for Android™，WSA）使 Windows 11 能够运行 Android 应用程序。 首先确认你的 Windows 版本是否支持 WSA： x64 或 ARM64 架构的现代处理器 Windows 11 至少..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-02T16:16:12.000Z"}],["meta",{"property":"article:author","content":"鸭梨"}],["meta",{"property":"article:tag","content":"WSA"}],["meta",{"property":"article:published_time","content":"2023-03-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-02T16:16:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用 Windows 安卓子系统\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-28T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-02T16:16:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鸭梨\\",\\"url\\":\\"https://github.com/Sun-ZhenXing\\"}]}"]]},"headers":[{"level":2,"title":"1. 安装官方版本的 WSA","slug":"1-安装官方版本的-wsa","link":"#1-安装官方版本的-wsa","children":[]},{"level":2,"title":"2. 使用 ADB 连接","slug":"2-使用-adb-连接","link":"#2-使用-adb-连接","children":[]},{"level":2,"title":"3. 使用 WSA","slug":"3-使用-wsa","link":"#3-使用-wsa","children":[]},{"level":2,"title":"4. 配合 Android Studio 进行开发","slug":"4-配合-android-studio-进行开发","link":"#4-配合-android-studio-进行开发","children":[]}],"git":{"createdTime":1679974288000,"updatedTime":1709396172000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":6}]},"readingTime":{"minutes":4.44,"words":1333},"filePathRelative":"posts/envs/windows-subsystem-for-android.md","localizedDate":"2023年3月28日","excerpt":"<p>Windows 安卓子系统的使用简介。</p>\\n","autoDesc":true}');export{L as comp,E as data};
