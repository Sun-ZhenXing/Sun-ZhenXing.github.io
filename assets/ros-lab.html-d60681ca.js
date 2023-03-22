import{_ as r,X as k,Y as v,Z as m,a0 as n,a1 as s,$ as o,a2 as a,a3 as l,C as c}from"./framework-4507c9ea.js";const b={},g=n("p",null,"ROS 实验内容。",-1),_={class:"hint-container info"},y=n("p",{class:"hint-container-title"},"说明",-1),h={href:"https://gitee.com/sun-zhenxing/ros-lab",target:"_blank",rel:"noopener noreferrer"},f=l(`<h2 id="_1-自定义话题通信" tabindex="-1"><a class="header-anchor" href="#_1-自定义话题通信" aria-hidden="true">#</a> 1. 自定义话题通信</h2><p>创建一个名为 <code>learning01_ws</code> 的工作空间：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> learning01_ws/src
<span class="token builtin class-name">cd</span> learning01_ws/
catkin_make
</code></pre></div><p>创建名为 <code>plumbing_pub_sub</code> 的功能包并添加相关依赖：</p><ol><li>在 VS Code 中按 <code>Ctrl + Shift + P</code> 使用命令面板，输入 <code>ROS: Create Catkin Package</code> 回车</li><li>接着输入包名 <code>plumbing_pub_sub</code></li><li>输入依赖项 <code>roscpp rospy std_msgs</code></li></ol><p>新建文件 <code>plumbing_pub_sub/msg/Person.msg</code>，内容是：</p><div class="language-go" data-ext="go"><pre class="language-go"><code><span class="token builtin">string</span>  location
<span class="token builtin">int32</span>   number
<span class="token builtin">float32</span> floor
</code></pre></div><p>编辑 <code>plumbing_pub_sub/package.xml</code>，在 <code>&lt;exec_depend&gt;</code> 标签附近添加下面两句：</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build_depend</span><span class="token punctuation">&gt;</span></span>message_generation<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build_depend</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exec_depend</span><span class="token punctuation">&gt;</span></span>message_runtime<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exec_depend</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>编辑 <code>plumbing_pub_sub/CMakeLists.txt</code>：</p><div class="language-cmake line-numbers-mode" data-ext="cmake"><pre class="language-cmake"><code><span class="token comment"># 需要替换</span>
<span class="token keyword">find_package</span><span class="token punctuation">(</span>catkin REQUIRED COMPONENTS
  roscpp
  rospy
  std_msgs
  message_generation
<span class="token punctuation">)</span>

<span class="token comment"># 直接添加</span>
<span class="token function">add_message_files</span><span class="token punctuation">(</span>
  FILES
  Person.msg
<span class="token punctuation">)</span>

<span class="token comment"># 直接添加</span>
<span class="token function">generate_messages</span><span class="token punctuation">(</span>
  DEPENDENCIES
  std_msgs
<span class="token punctuation">)</span>

<span class="token comment"># 需要替换</span>
<span class="token function">catkin_package</span><span class="token punctuation">(</span>
  CATKIN_DEPENDS roscpp rospy std_msgs message_runtime
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在执行构建，按 <code>Ctrl + Shift + B</code>，然后选中 <code>catkin_make: build</code>，然后回车。如果配置正确将完成构建。</p><p>在编写 Python 代码之前，最好在 <code>.vscode/settings.json</code> 中配置 Python 的读取路径：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;python.autoComplete.extraPaths&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;/opt/ros/noetic/lib/python3/dist-packages&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\${workspaceFolder}/devel/lib/python3/dist-packages&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;python.analysis.extraPaths&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;/opt/ros/noetic/lib/python3/dist-packages&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\${workspaceFolder}/devel/lib/python3/dist-packages&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>plumbing_pub_sub/</code> 文件夹下创建 <code>scripts/person_pub.py</code> 和 <code>scripts/person_sub.py</code>，下面是创建命令，并赋予可执行权限：</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> src/plumbing_pub_sub/
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> scripts
<span class="token builtin class-name">cd</span> script
<span class="token function">touch</span> person_pub.py
<span class="token function">touch</span> person_sub.py

<span class="token function">chmod</span> +x *.py
</code></pre></div><p><code>person_pub.py</code> 文件的内容是：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>

<span class="token keyword">import</span> rospy
<span class="token keyword">from</span> plumbing_pub_sub<span class="token punctuation">.</span>msg <span class="token keyword">import</span> Person

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    rospy<span class="token punctuation">.</span>init_node<span class="token punctuation">(</span><span class="token string">&#39;AlexPub&#39;</span><span class="token punctuation">)</span>
    pub <span class="token operator">=</span> rospy<span class="token punctuation">.</span>Publisher<span class="token punctuation">(</span><span class="token string">&#39;Alex&#39;</span><span class="token punctuation">,</span> Person<span class="token punctuation">,</span> queue_size<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span>
    p <span class="token operator">=</span> Person<span class="token punctuation">(</span><span class="token punctuation">)</span>
    p<span class="token punctuation">.</span>location <span class="token operator">=</span> <span class="token string">&#39;ChangZhou&#39;</span>
    p<span class="token punctuation">.</span>number <span class="token operator">=</span> <span class="token number">66</span>
    p<span class="token punctuation">.</span>floor <span class="token operator">=</span> <span class="token number">1.66</span>
    rate <span class="token operator">=</span> rospy<span class="token punctuation">.</span>Rate<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token keyword">while</span> <span class="token keyword">not</span> rospy<span class="token punctuation">.</span>is_shutdown<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        pub<span class="token punctuation">.</span>publish<span class="token punctuation">(</span>p<span class="token punctuation">)</span>
        rate<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token punctuation">)</span>
        rospy<span class="token punctuation">.</span>loginfo<span class="token punctuation">(</span><span class="token string">&#39;House data: %s, %d, %.2f&#39;</span><span class="token punctuation">,</span> p<span class="token punctuation">.</span>location<span class="token punctuation">,</span> p<span class="token punctuation">.</span>number<span class="token punctuation">,</span> p<span class="token punctuation">.</span>floor<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>person_sub.py</code> 文件的内容是：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>

<span class="token keyword">import</span> rospy
<span class="token keyword">from</span> plumbing_pub_sub<span class="token punctuation">.</span>msg <span class="token keyword">import</span> Person

<span class="token keyword">def</span> <span class="token function">do_person</span><span class="token punctuation">(</span>person<span class="token punctuation">:</span> Person<span class="token punctuation">)</span><span class="token punctuation">:</span>
    rospy<span class="token punctuation">.</span>loginfo<span class="token punctuation">(</span><span class="token string">&#39;House data: %s, %d, %.2f&#39;</span><span class="token punctuation">,</span> person<span class="token punctuation">.</span>location<span class="token punctuation">,</span> person<span class="token punctuation">.</span>number<span class="token punctuation">,</span> person<span class="token punctuation">.</span>floor<span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    rospy<span class="token punctuation">.</span>init_node<span class="token punctuation">(</span><span class="token string">&#39;AlexSub&#39;</span><span class="token punctuation">)</span>
    sub <span class="token operator">=</span> rospy<span class="token punctuation">.</span>Subscriber<span class="token punctuation">(</span><span class="token string">&#39;Alex&#39;</span><span class="token punctuation">,</span> Person<span class="token punctuation">,</span> do_person<span class="token punctuation">,</span> queue_size<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span>
    rospy<span class="token punctuation">.</span>spin<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在，编辑 <code>plumbing_pub_sub/CMakeLists.txt</code>，在下方添加下面的代码：</p><div class="language-cmake" data-ext="cmake"><pre class="language-cmake"><code><span class="token function">catkin_install_python</span><span class="token punctuation">(</span>PROGRAMS scripts/person_pub.py
  DESTINATION <span class="token punctuation">\${</span>CATKIN_PACKAGE_BIN_DESTINATION<span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token function">catkin_install_python</span><span class="token punctuation">(</span>PROGRAMS scripts/person_sub.py
  DESTINATION <span class="token punctuation">\${</span>CATKIN_PACKAGE_BIN_DESTINATION<span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre></div><p>然后按 <code>Ctrl + Shift + B</code>，再次执行编译。编译成功后可测试。</p><p>下面创建三个终端，执行测试：</p>`,24),x=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# 启动 ROS 核心进程，只需要启动一次"),s(`
roscore
`)])])],-1),N=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token builtin class-name"},"source"),s(` ./devel/setup.bash
rosrun plumbing_pub_sub person_pub.py
`)])])],-1),S=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token builtin class-name"},"source"),s(` ./devel/setup.bash
rosrun plumbing_pub_sub person_sub.py
`)])])],-1),C=l(`<p>如果两个终端都分别看到消息表明成功。</p><h2 id="_2-服务通信" tabindex="-1"><a class="header-anchor" href="#_2-服务通信" aria-hidden="true">#</a> 2. 服务通信</h2><p>创建功能包名为 <code>plumbing_server_client</code> 并添加相关依赖：</p><ol><li>在 VS Code 中按 <code>Ctrl + Shift + P</code> 使用命令面板，输入 <code>ROS: Create Catkin Package</code> 回车</li><li>接着输入包名 <code>plumbing_server_client</code></li><li>输入依赖项 <code>roscpp rospy std_msgs</code></li></ol><p>在功能包下创建 <code>scripts</code> 文件夹和 <code>srv</code> 文件夹，创建文件 <code>srv/Multiply.srv</code>，其内容为：</p><div class="language-go" data-ext="go"><pre class="language-go"><code># 客户端请求时发送的两个数字
<span class="token builtin">int32</span> num1
<span class="token builtin">int32</span> num2
<span class="token operator">--</span><span class="token operator">-</span>
# 服务器响应发送的数据
<span class="token builtin">int32</span> sum
</code></pre></div><p>编辑 <code>plumbing_server_client/package.xml</code>，在 <code>&lt;exec_depend&gt;</code> 标签附近添加下面两句：</p><div class="language-xml" data-ext="xml"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build_depend</span><span class="token punctuation">&gt;</span></span>message_generation<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build_depend</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exec_depend</span><span class="token punctuation">&gt;</span></span>message_runtime<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exec_depend</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>编辑 <code>plumbing_server_client/CMakeLists.txt</code>：</p><div class="language-cmake line-numbers-mode" data-ext="cmake"><pre class="language-cmake"><code><span class="token comment"># 需要替换</span>
<span class="token keyword">find_package</span><span class="token punctuation">(</span>catkin REQUIRED COMPONENTS
  roscpp
  rospy
  std_msgs
  message_generation
<span class="token punctuation">)</span>

<span class="token comment"># 直接添加</span>
<span class="token function">add_service_files</span><span class="token punctuation">(</span>
  FILES
  Multiply.srv
<span class="token punctuation">)</span>

<span class="token comment"># 直接添加</span>
<span class="token function">generate_messages</span><span class="token punctuation">(</span>
  DEPENDENCIES
  std_msgs
<span class="token punctuation">)</span>

<span class="token comment"># 需要替换</span>
<span class="token function">catkin_package</span><span class="token punctuation">(</span>
  CATKIN_DEPENDS roscpp rospy std_msgs message_runtime
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在执行构建，步骤和上面一样。确保生成成功继续。</p><p>创建 <code>scripts/mul_srv.py</code>，内容为：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>

<span class="token keyword">import</span> rospy
<span class="token keyword">from</span> plumbing_server_client<span class="token punctuation">.</span>srv <span class="token keyword">import</span> Multiply<span class="token punctuation">,</span> MultiplyRequest<span class="token punctuation">,</span> MultiplyResponse

<span class="token keyword">def</span> <span class="token function">do_req</span><span class="token punctuation">(</span>req<span class="token punctuation">:</span> MultiplyRequest<span class="token punctuation">)</span><span class="token punctuation">:</span>
    res <span class="token operator">=</span> req<span class="token punctuation">.</span>num1 <span class="token operator">*</span> req<span class="token punctuation">.</span>num2
    rospy<span class="token punctuation">.</span>loginfo<span class="token punctuation">(</span><span class="token string">&#39;got data: %d x %d = %d&#39;</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span>num1<span class="token punctuation">,</span> req<span class="token punctuation">.</span>num2<span class="token punctuation">,</span> res<span class="token punctuation">)</span>
    resp <span class="token operator">=</span> MultiplyResponse<span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    resp<span class="token punctuation">.</span><span class="token builtin">sum</span> <span class="token operator">=</span> res
    <span class="token keyword">return</span> resp

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    rospy<span class="token punctuation">.</span>init_node<span class="token punctuation">(</span><span class="token string">&#39;MulService&#39;</span><span class="token punctuation">)</span>
    server <span class="token operator">=</span> rospy<span class="token punctuation">.</span>Service<span class="token punctuation">(</span><span class="token string">&#39;Mul&#39;</span><span class="token punctuation">,</span> Multiply<span class="token punctuation">,</span> do_req<span class="token punctuation">)</span>
    rospy<span class="token punctuation">.</span>spin<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建 <code>scripts/mul_cli.py</code>，内容为：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> sys

<span class="token keyword">import</span> rospy

<span class="token keyword">from</span> plumbing_server_client<span class="token punctuation">.</span>srv <span class="token keyword">import</span> Multiply<span class="token punctuation">,</span> MultiplyResponse

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">3</span><span class="token punctuation">:</span>
        rospy<span class="token punctuation">.</span>logerr<span class="token punctuation">(</span><span class="token string">&#39;Params Error!&#39;</span><span class="token punctuation">)</span>
        sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    rospy<span class="token punctuation">.</span>init_node<span class="token punctuation">(</span><span class="token string">&#39;MulCli&#39;</span><span class="token punctuation">)</span>
    client <span class="token operator">=</span> rospy<span class="token punctuation">.</span>ServiceProxy<span class="token punctuation">(</span><span class="token string">&#39;Mul&#39;</span><span class="token punctuation">,</span> Multiply<span class="token punctuation">)</span>
    num1 <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    num2 <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    client<span class="token punctuation">.</span>wait_for_service<span class="token punctuation">(</span><span class="token punctuation">)</span>
    res<span class="token punctuation">:</span> MultiplyResponse <span class="token operator">=</span> client<span class="token punctuation">.</span>call<span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">)</span>
    rospy<span class="token punctuation">.</span>loginfo<span class="token punctuation">(</span><span class="token string">&#39;got res: %d&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>加入下面的代码到 <code>CMakeLists.txt</code>：</p><div class="language-cmake" data-ext="cmake"><pre class="language-cmake"><code><span class="token function">catkin_install_python</span><span class="token punctuation">(</span>PROGRAMS scripts/mul_srv.py
  DESTINATION <span class="token punctuation">\${</span>CATKIN_PACKAGE_BIN_DESTINATION<span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token function">catkin_install_python</span><span class="token punctuation">(</span>PROGRAMS scripts/mul_cli.py
  DESTINATION <span class="token punctuation">\${</span>CATKIN_PACKAGE_BIN_DESTINATION<span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre></div><p>现在授予权限并运行服务，测试结果。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">chmod</span> +x plumbing_server_client/scripts/*.py
</code></pre></div><p>现在执行构建，步骤和上述构建步骤一致，确保构建成功。</p><p>下面创建三个终端，执行测试：</p>`,21),A=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# 启动 ROS 核心进程，只需要启动一次"),s(`
roscore
`)])])],-1),E=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token builtin class-name"},"source"),s(` ./devel/setup.bash
rosrun plumbing_server_client mul_srv.py
`)])])],-1),w=n("div",{class:"language-bash","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token builtin class-name"},"source"),s(` ./devel/setup.bash
rosrun plumbing_server_client mul_cli.py
`)])])],-1);function I(P,R){const u=c("ExternalLinkIcon"),d=c("RouterLink"),i=c("CodeTabs");return k(),v("div",null,[g,m(" more "),n("div",_,[y,n("p",null,[s("本文的源代码在 "),n("a",h,[s("Gitee"),o(u)]),s(" 上保存，在进行本文实验时需要确保安装了 "),o(d,{to:"/posts/envs/ros-env.html"},{default:a(()=>[s("ROS 环境安装")]),_:1}),s(" 一文中的指定环境。")])]),f,o(i,{id:"77",data:[{title:"终端 1"},{title:"终端 2"},{title:"终端 3"}]},{tab0:a(({title:e,value:p,isActive:t})=>[x]),tab1:a(({title:e,value:p,isActive:t})=>[N]),tab2:a(({title:e,value:p,isActive:t})=>[S]),_:1}),C,o(i,{id:"151",data:[{title:"终端 1"},{title:"终端 2"},{title:"终端 3"}]},{tab0:a(({title:e,value:p,isActive:t})=>[A]),tab1:a(({title:e,value:p,isActive:t})=>[E]),tab2:a(({title:e,value:p,isActive:t})=>[w]),_:1})])}const M=r(b,[["render",I],["__file","ros-lab.html.vue"]]);export{M as default};
