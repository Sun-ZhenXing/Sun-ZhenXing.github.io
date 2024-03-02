import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as c,o as d,c as k,a as n,d as s,b as e,w as a,e as l}from"./app-C6k5k7Rq.js";const m={},_=n("p",null,"ROS 实验内容。",-1),g={class:"hint-container info"},v=n("p",{class:"hint-container-title"},"说明",-1),b={href:"https://gitee.com/sun-zhenxing/ros-lab",target:"_blank",rel:"noopener noreferrer"},y=l(`<h2 id="1-自定义话题通信" tabindex="-1"><a class="header-anchor" href="#1-自定义话题通信"><span>1. 自定义话题通信</span></a></h2><p>创建一个名为 <code>learning01_ws</code> 的工作空间：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> learning01_ws/src
<span class="token builtin class-name">cd</span> learning01_ws/
catkin_make
</code></pre></div><p>创建名为 <code>plumbing_pub_sub</code> 的功能包并添加相关依赖：</p><ol><li>在 VS Code 中按 <code>Ctrl + Shift + P</code> 使用命令面板，输入 <code>ROS: Create Catkin Package</code> 回车</li><li>接着输入包名 <code>plumbing_pub_sub</code></li><li>输入依赖项 <code>roscpp rospy std_msgs</code></li></ol><p>新建文件 <code>plumbing_pub_sub/msg/Person.msg</code>，内容是：</p><div class="language-go" data-ext="go" data-title="go"><pre class="language-go"><code><span class="token builtin">string</span>  location
<span class="token builtin">int32</span>   number
<span class="token builtin">float32</span> floor
</code></pre></div><p>编辑 <code>plumbing_pub_sub/package.xml</code>，在 <code>&lt;exec_depend&gt;</code> 标签附近添加下面两句：</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build_depend</span><span class="token punctuation">&gt;</span></span>message_generation<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build_depend</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exec_depend</span><span class="token punctuation">&gt;</span></span>message_runtime<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exec_depend</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>编辑 <code>plumbing_pub_sub/CMakeLists.txt</code>：</p><div class="language-cmake line-numbers-mode" data-ext="cmake" data-title="cmake"><pre class="language-cmake"><code><span class="token comment"># 需要替换</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在执行构建，按 <code>Ctrl + Shift + B</code>，然后选中 <code>catkin_make: build</code>，然后回车。如果配置正确将完成构建。</p><p>在编写 Python 代码之前，最好在 <code>.vscode/settings.json</code> 中配置 Python 的读取路径：</p><div class="language-json" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;python.autoComplete.extraPaths&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;/opt/ros/noetic/lib/python3/dist-packages&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\${workspaceFolder}/devel/lib/python3/dist-packages&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;python.analysis.extraPaths&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token string">&quot;/opt/ros/noetic/lib/python3/dist-packages&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;\${workspaceFolder}/devel/lib/python3/dist-packages&quot;</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre></div><p>在 <code>plumbing_pub_sub/</code> 文件夹下创建 <code>scripts/demo03_pub_person_p.py</code> 和 <code>scripts/demo04_sub_person_p.py</code>，下面是创建命令，并赋予可执行权限：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> src/plumbing_pub_sub/
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> scripts
<span class="token builtin class-name">cd</span> script
<span class="token function">touch</span> demo03_pub_person_p.py
<span class="token function">touch</span> demo04_sub_person_p.py

<span class="token function">chmod</span> +x *.py
</code></pre></div><p><code>demo03_pub_person_p.py</code> 文件的内容是：</p><div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>

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
</code></pre></div><p><code>demo04_sub_person_p.py</code> 文件的内容是：</p><div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>

<span class="token keyword">import</span> rospy
<span class="token keyword">from</span> plumbing_pub_sub<span class="token punctuation">.</span>msg <span class="token keyword">import</span> Person

<span class="token keyword">def</span> <span class="token function">do_person</span><span class="token punctuation">(</span>person<span class="token punctuation">:</span> Person<span class="token punctuation">)</span><span class="token punctuation">:</span>
    rospy<span class="token punctuation">.</span>loginfo<span class="token punctuation">(</span><span class="token string">&#39;House data: %s, %d, %.2f&#39;</span><span class="token punctuation">,</span> person<span class="token punctuation">.</span>location<span class="token punctuation">,</span> person<span class="token punctuation">.</span>number<span class="token punctuation">,</span> person<span class="token punctuation">.</span>floor<span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    rospy<span class="token punctuation">.</span>init_node<span class="token punctuation">(</span><span class="token string">&#39;AlexSub&#39;</span><span class="token punctuation">)</span>
    sub <span class="token operator">=</span> rospy<span class="token punctuation">.</span>Subscriber<span class="token punctuation">(</span><span class="token string">&#39;Alex&#39;</span><span class="token punctuation">,</span> Person<span class="token punctuation">,</span> do_person<span class="token punctuation">,</span> queue_size<span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">)</span>
    rospy<span class="token punctuation">.</span>spin<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>现在，编辑 <code>plumbing_pub_sub/CMakeLists.txt</code>，在下方添加下面的代码：</p><div class="language-cmake" data-ext="cmake" data-title="cmake"><pre class="language-cmake"><code><span class="token function">catkin_install_python</span><span class="token punctuation">(</span>PROGRAMS scripts/demo03_pub_person_p.py
  DESTINATION <span class="token punctuation">\${</span>CATKIN_PACKAGE_BIN_DESTINATION<span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token function">catkin_install_python</span><span class="token punctuation">(</span>PROGRAMS scripts/demo04_sub_person_p.py
  DESTINATION <span class="token punctuation">\${</span>CATKIN_PACKAGE_BIN_DESTINATION<span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre></div><p>然后按 <code>Ctrl + Shift + B</code>，再次执行编译。编译成功后可测试。</p><p>下面创建三个终端，执行测试：</p>`,24),h=n("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# 启动 ROS 核心进程，只需要启动一次"),s(`
roscore
`)])])],-1),f=n("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token builtin class-name"},"source"),s(` ./devel/setup.bash
rosrun plumbing_pub_sub demo03_pub_person_p.py
`)])])],-1),x=n("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token builtin class-name"},"source"),s(` ./devel/setup.bash
rosrun plumbing_pub_sub demo04_sub_person_p.py
`)])])],-1),S=l(`<p>使用下面的命令用于可视化查看当前 ROS 通信的逻辑图：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code>rqt_graph
</code></pre></div><p>如果两个终端都分别看到消息表明成功。</p><h2 id="2-服务通信" tabindex="-1"><a class="header-anchor" href="#2-服务通信"><span>2. 服务通信</span></a></h2><p>创建功能包名为 <code>plumbing_server_client</code> 并添加相关依赖：</p><ol><li>在 VS Code 中按 <code>Ctrl + Shift + P</code> 使用命令面板，输入 <code>ROS: Create Catkin Package</code> 回车</li><li>接着输入包名 <code>plumbing_server_client</code></li><li>输入依赖项 <code>roscpp rospy std_msgs</code></li></ol><p>在功能包下创建 <code>scripts</code> 文件夹和 <code>srv</code> 文件夹，创建文件 <code>srv/Multiply.srv</code>，其内容为：</p><div class="language-go" data-ext="go" data-title="go"><pre class="language-go"><code># 客户端请求时发送的两个数字
<span class="token builtin">int32</span> num1
<span class="token builtin">int32</span> num2
<span class="token operator">--</span><span class="token operator">-</span>
# 服务器响应发送的数据
<span class="token builtin">int32</span> sum
</code></pre></div><p>编辑 <code>plumbing_server_client/package.xml</code>，在 <code>&lt;exec_depend&gt;</code> 标签附近添加下面两句：</p><div class="language-xml" data-ext="xml" data-title="xml"><pre class="language-xml"><code>  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>build_depend</span><span class="token punctuation">&gt;</span></span>message_generation<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>build_depend</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>exec_depend</span><span class="token punctuation">&gt;</span></span>message_runtime<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>exec_depend</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><p>编辑 <code>plumbing_server_client/CMakeLists.txt</code>：</p><div class="language-cmake line-numbers-mode" data-ext="cmake" data-title="cmake"><pre class="language-cmake"><code><span class="token comment"># 需要替换</span>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>现在执行构建，步骤和上面一样。确保生成成功继续。</p><p>创建 <code>scripts/demo01_server_p.py</code>，内容为：</p><div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>

<span class="token keyword">import</span> rospy

<span class="token keyword">from</span> plumbing_server_client<span class="token punctuation">.</span>srv <span class="token keyword">import</span> <span class="token punctuation">(</span>Multiply<span class="token punctuation">,</span> MultiplyRequest<span class="token punctuation">,</span>
                                        MultiplyResponse<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">do_req</span><span class="token punctuation">(</span>req<span class="token punctuation">:</span> MultiplyRequest<span class="token punctuation">)</span><span class="token punctuation">:</span>
    res <span class="token operator">=</span> req<span class="token punctuation">.</span>num1 <span class="token operator">*</span> req<span class="token punctuation">.</span>num2
    rospy<span class="token punctuation">.</span>loginfo<span class="token punctuation">(</span><span class="token string">&#39;got data: %d x %d = %d&#39;</span><span class="token punctuation">,</span> req<span class="token punctuation">.</span>num1<span class="token punctuation">,</span> req<span class="token punctuation">.</span>num2<span class="token punctuation">,</span> res<span class="token punctuation">)</span>
    resp <span class="token operator">=</span> MultiplyResponse<span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    resp<span class="token punctuation">.</span><span class="token builtin">sum</span> <span class="token operator">=</span> res
    <span class="token keyword">return</span> resp

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    rospy<span class="token punctuation">.</span>init_node<span class="token punctuation">(</span><span class="token string">&#39;MulService&#39;</span><span class="token punctuation">)</span>
    server <span class="token operator">=</span> rospy<span class="token punctuation">.</span>Service<span class="token punctuation">(</span><span class="token string">&#39;MultiPly&#39;</span><span class="token punctuation">,</span> Multiply<span class="token punctuation">,</span> do_req<span class="token punctuation">)</span>
    rospy<span class="token punctuation">.</span>spin<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>创建 <code>scripts/demo02_client_p.py</code>，内容为：</p><div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>

<span class="token keyword">import</span> sys

<span class="token keyword">import</span> rospy

<span class="token keyword">from</span> plumbing_server_client<span class="token punctuation">.</span>srv <span class="token keyword">import</span> Multiply<span class="token punctuation">,</span> MultiplyResponse

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token number">3</span><span class="token punctuation">:</span>
        rospy<span class="token punctuation">.</span>logerr<span class="token punctuation">(</span><span class="token string">&#39;Params Error!&#39;</span><span class="token punctuation">)</span>
        sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
    rospy<span class="token punctuation">.</span>init_node<span class="token punctuation">(</span><span class="token string">&#39;MulCli&#39;</span><span class="token punctuation">)</span>
    client <span class="token operator">=</span> rospy<span class="token punctuation">.</span>ServiceProxy<span class="token punctuation">(</span><span class="token string">&#39;MultiPly&#39;</span><span class="token punctuation">,</span> Multiply<span class="token punctuation">)</span>
    num1 <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    num2 <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>sys<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    client<span class="token punctuation">.</span>wait_for_service<span class="token punctuation">(</span><span class="token punctuation">)</span>
    res<span class="token punctuation">:</span> MultiplyResponse <span class="token operator">=</span> client<span class="token punctuation">.</span>call<span class="token punctuation">(</span>num1<span class="token punctuation">,</span> num2<span class="token punctuation">)</span>
    rospy<span class="token punctuation">.</span>loginfo<span class="token punctuation">(</span><span class="token string">&#39;got res: %d&#39;</span><span class="token punctuation">,</span> res<span class="token punctuation">.</span><span class="token builtin">sum</span><span class="token punctuation">)</span>
</code></pre></div><p>加入下面的代码到 <code>CMakeLists.txt</code>：</p><div class="language-cmake" data-ext="cmake" data-title="cmake"><pre class="language-cmake"><code><span class="token function">catkin_install_python</span><span class="token punctuation">(</span>PROGRAMS scripts/demo01_server_p.py
  DESTINATION <span class="token punctuation">\${</span>CATKIN_PACKAGE_BIN_DESTINATION<span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token function">catkin_install_python</span><span class="token punctuation">(</span>PROGRAMS scripts/demo02_client_p.py
  DESTINATION <span class="token punctuation">\${</span>CATKIN_PACKAGE_BIN_DESTINATION<span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre></div><p>现在授予权限并运行服务，测试结果。</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">chmod</span> +x plumbing_server_client/scripts/*.py
</code></pre></div><p>现在执行构建，步骤和上述构建步骤一致，确保构建成功。</p><p>下面创建三个终端，执行测试：</p>`,23),A=n("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# 启动 ROS 核心进程，只需要启动一次"),s(`
roscore
`)])])],-1),N=n("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token builtin class-name"},"source"),s(` ./devel/setup.bash
rosrun plumbing_server_client demo01_server_p.py
`)])])],-1),I=n("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token builtin class-name"},"source"),s(` ./devel/setup.bash
rosrun plumbing_server_client demo02_client_p.py `),n("span",{class:"token number"},"3"),s(),n("span",{class:"token number"},"4"),s(`
`)])])],-1),T=l(`<p>终端 3 用于计算两个数的乘积，需要在命令行指定这两个数字。</p><h2 id="3-参数服务器" tabindex="-1"><a class="header-anchor" href="#3-参数服务器"><span>3. 参数服务器</span></a></h2><p>创建功能包名为 <code>plumbing_param_server</code> 并添加相关依赖。</p><p>创建文件 <code>plumbing_param_server/scripts/demo01_param_set_p.py</code>，内容为：</p><div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>

<span class="token keyword">import</span> rospy

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    rospy<span class="token punctuation">.</span>init_node<span class="token punctuation">(</span><span class="token string">&#39;param_set_p&#39;</span><span class="token punctuation">)</span>
    rospy<span class="token punctuation">.</span>set_param<span class="token punctuation">(</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;alex&#39;</span><span class="token punctuation">)</span>
    rospy<span class="token punctuation">.</span>set_param<span class="token punctuation">(</span><span class="token string">&#39;radius&#39;</span><span class="token punctuation">,</span> <span class="token number">0.25</span><span class="token punctuation">)</span>
    rospy<span class="token punctuation">.</span>set_param<span class="token punctuation">(</span><span class="token string">&#39;weight&#39;</span><span class="token punctuation">,</span> <span class="token number">60</span><span class="token punctuation">)</span>
    rospy<span class="token punctuation">.</span>set_param<span class="token punctuation">(</span><span class="token string">&#39;speed&#39;</span><span class="token punctuation">,</span> <span class="token number">2.33</span><span class="token punctuation">)</span>
</code></pre></div><p>创建 <code>demo02_param_get_p.py</code> 文件，内容为：</p><div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>

<span class="token keyword">import</span> rospy

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    rospy<span class="token punctuation">.</span>init_node<span class="token punctuation">(</span><span class="token string">&#39;param_get_p&#39;</span><span class="token punctuation">)</span>
    key <span class="token operator">=</span> rospy<span class="token punctuation">.</span>search_param<span class="token punctuation">(</span><span class="token string">&#39;radius&#39;</span><span class="token punctuation">)</span>
    rospy<span class="token punctuation">.</span>loginfo<span class="token punctuation">(</span><span class="token string">&#39;key = %s&#39;</span><span class="token punctuation">,</span> key<span class="token punctuation">)</span>
    <span class="token keyword">if</span> key <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
        radius <span class="token operator">=</span> rospy<span class="token punctuation">.</span>get_param<span class="token punctuation">(</span><span class="token string">&#39;radius&#39;</span><span class="token punctuation">)</span>
        rospy<span class="token punctuation">.</span>loginfo<span class="token punctuation">(</span><span class="token string">&#39;radius = %.2f&#39;</span><span class="token punctuation">,</span> radius<span class="token punctuation">)</span>
</code></pre></div><p>创建 <code>demo03_param_del_p.py</code>，内容为：</p><div class="language-python" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token comment">#!/usr/bin/env python3</span>

<span class="token keyword">import</span> rospy

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    rospy<span class="token punctuation">.</span>init_node<span class="token punctuation">(</span><span class="token string">&#39;param_del_p&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        rospy<span class="token punctuation">.</span>delete_param<span class="token punctuation">(</span><span class="token string">&#39;radius&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span><span class="token punctuation">:</span>
        rospy<span class="token punctuation">.</span>loginfo<span class="token punctuation">(</span><span class="token string">&#39;Delete Error!&#39;</span><span class="token punctuation">)</span>
</code></pre></div><p>添加可执行权限：</p><div class="language-bash" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">chmod</span> +x src/plumbing_param_server/scripts/*.py
</code></pre></div><p>在 <code>CMakeLists.txt</code> 中加入下面的代码：</p><div class="language-cmake" data-ext="cmake" data-title="cmake"><pre class="language-cmake"><code><span class="token function">catkin_install_python</span><span class="token punctuation">(</span>PROGRAMS scripts/demo01_param_set_p.py
  DESTINATION <span class="token punctuation">\${</span>CATKIN_PACKAGE_BIN_DESTINATION<span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token function">catkin_install_python</span><span class="token punctuation">(</span>PROGRAMS scripts/demo02_param_get_p.py
  DESTINATION <span class="token punctuation">\${</span>CATKIN_PACKAGE_BIN_DESTINATION<span class="token punctuation">}</span>
<span class="token punctuation">)</span>

<span class="token function">catkin_install_python</span><span class="token punctuation">(</span>PROGRAMS scripts/demo03_param_del_p.py
  DESTINATION <span class="token punctuation">\${</span>CATKIN_PACKAGE_BIN_DESTINATION<span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre></div><p>现在构建，确保没有错误即可运行。</p><p>利用 <code>rosparam list</code> 命令查看所有参数，利用 <code>rosparam get &lt;param&gt;</code> 命令获取指定参数。</p><p>下面创建三个终端，执行测试：</p>`,16),w=n("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token comment"},"# 启动 ROS 核心进程，只需要启动一次"),s(`
roscore
`)])])],-1),C=n("div",{class:"language-bash","data-ext":"sh","data-title":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token builtin class-name"},"source"),s(` ./devel/setup.bash
rosrun plumbing_param_server demo01_param_set_p.py
rosrun plumbing_param_server demo02_param_get_p.py
rosrun plumbing_param_server demo03_param_del_p.py
`)])])],-1);function P(R,E){const i=c("ExternalLinkIcon"),u=c("RouteLink"),o=c("CodeTabs");return d(),k("div",null,[_,n("div",g,[v,n("p",null,[s("本文的源代码在 "),n("a",b,[s("Gitee"),e(i)]),s(" 上保存，在进行本文实验时需要确保安装了 "),e(u,{to:"/posts/envs/ros-env.html"},{default:a(()=>[s("ROS 环境安装")]),_:1}),s(" 一文中的指定环境。")])]),y,e(o,{id:"77",data:[{id:"终端 1"},{id:"终端 2"},{id:"终端 3"}]},{title0:a(({value:t,isActive:p})=>[s("终端 1")]),title1:a(({value:t,isActive:p})=>[s("终端 2")]),title2:a(({value:t,isActive:p})=>[s("终端 3")]),tab0:a(({value:t,isActive:p})=>[h]),tab1:a(({value:t,isActive:p})=>[f]),tab2:a(({value:t,isActive:p})=>[x]),_:1}),S,e(o,{id:"155",data:[{id:"终端 1"},{id:"终端 2"},{id:"终端 3"}]},{title0:a(({value:t,isActive:p})=>[s("终端 1")]),title1:a(({value:t,isActive:p})=>[s("终端 2")]),title2:a(({value:t,isActive:p})=>[s("终端 3")]),tab0:a(({value:t,isActive:p})=>[A]),tab1:a(({value:t,isActive:p})=>[N]),tab2:a(({value:t,isActive:p})=>[I]),_:1}),T,e(o,{id:"204",data:[{id:"终端 1"},{id:"终端 2"}]},{title0:a(({value:t,isActive:p})=>[s("终端 1")]),title1:a(({value:t,isActive:p})=>[s("终端 2")]),tab0:a(({value:t,isActive:p})=>[w]),tab1:a(({value:t,isActive:p})=>[C]),_:1})])}const D=r(m,[["render",P],["__file","ros-lab.html.vue"]]),q=JSON.parse('{"path":"/posts/envs/ros-lab.html","title":"进行 ROS 实验","lang":"zh-CN","frontmatter":{"title":"进行 ROS 实验","date":"2023-03-21T00:00:00.000Z","category":["环境搭建"],"tag":["ROS"],"description":"ROS 实验内容。 说明 本文的源代码在 Gitee 上保存，在进行本文实验时需要确保安装了 一文中的指定环境。 1. 自定义话题通信 创建一个名为 learning01_ws 的工作空间： 创建名为 plumbing_pub_sub 的功能包并添加相关依赖： 在 VS Code 中按 Ctrl + Shift + P 使用命令面板，输入 ROS: C...","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/posts/envs/ros-lab.html"}],["meta",{"property":"og:site_name","content":"鸭梨"}],["meta",{"property":"og:title","content":"进行 ROS 实验"}],["meta",{"property":"og:description","content":"ROS 实验内容。 说明 本文的源代码在 Gitee 上保存，在进行本文实验时需要确保安装了 一文中的指定环境。 1. 自定义话题通信 创建一个名为 learning01_ws 的工作空间： 创建名为 plumbing_pub_sub 的功能包并添加相关依赖： 在 VS Code 中按 Ctrl + Shift + P 使用命令面板，输入 ROS: C..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-02T16:16:12.000Z"}],["meta",{"property":"article:author","content":"鸭梨"}],["meta",{"property":"article:tag","content":"ROS"}],["meta",{"property":"article:published_time","content":"2023-03-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-02T16:16:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"进行 ROS 实验\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-02T16:16:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"鸭梨\\",\\"url\\":\\"https://github.com/Sun-ZhenXing\\"}]}"]]},"headers":[{"level":2,"title":"1. 自定义话题通信","slug":"1-自定义话题通信","link":"#1-自定义话题通信","children":[]},{"level":2,"title":"2. 服务通信","slug":"2-服务通信","link":"#2-服务通信","children":[]},{"level":2,"title":"3. 参数服务器","slug":"3-参数服务器","link":"#3-参数服务器","children":[]}],"git":{"createdTime":1679383092000,"updatedTime":1709396172000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":6}]},"readingTime":{"minutes":4.21,"words":1262},"filePathRelative":"posts/envs/ros-lab.md","localizedDate":"2023年3月21日","excerpt":"<p>ROS 实验内容。</p>\\n","autoDesc":true}');export{D as comp,q as data};
