import{c as k,r as u,X as m,Y as h,a4 as i,a5 as d,a0 as t,a6 as x,a7 as I,a8 as S,_ as v,Z as V,$ as f,a1 as o,a3 as B,C as N}from"./framework-bdf4df03.js";const _=p=>(I("data-v-7f8523cf"),p=p(),S(),p),U=_(()=>t("label",{for:"input-text"},"输入值",-1)),C=_(()=>t("label",{for:"input-bin"},"二进制表示",-1)),F=_(()=>t("label",{for:"input-hex"},"十六进制表示",-1)),D=_(()=>t("label",{for:"input-real"},"原始值",-1)),z=k({__name:"IEEE754",setup(p){const r=u(""),l=u(""),s=u(""),c=u(0),E=a=>{const n=new ArrayBuffer(4),e=new DataView(n);return e.setFloat32(0,a,!0),e.getUint32(0,!0)},y=a=>{const n=new ArrayBuffer(4),e=new DataView(n);return e.setUint32(0,a,!0),e.getFloat32(0,!0)},b=(a,n=32)=>{const e=a.toString(16);return"0".repeat(n/4-e.length)+e},w=(a,n=32)=>{const e=a.toString(2);return"0".repeat(n-e.length)+e},g=()=>{const a=parseFloat(r.value);if(isNaN(a)){l.value="",s.value="",c.value=0;return}const n=E(a);l.value=w(n),s.value=b(n),c.value=y(n)};return(a,n)=>(m(),h(x,null,[U,i(t("input",{type:"text",id:"input-text",autocomplete:"off",style:{"font-family":"var(--font-family-code)","font-size":"1rem"},onInput:g,"onUpdate:modelValue":n[0]||(n[0]=e=>r.value=e),placeholder:"输入浮点数"},null,544),[[d,r.value]]),C,i(t("input",{type:"text",id:"input-bin",autocomplete:"off",readonly:"",style:{"font-family":"var(--font-family-code)","font-size":"1rem"},"onUpdate:modelValue":n[1]||(n[1]=e=>l.value=e),placeholder:"二进制"},null,512),[[d,l.value]]),F,i(t("input",{type:"text",id:"input-hex",autocomplete:"off",readonly:"",style:{"font-family":"var(--font-family-code)","font-size":"1rem"},"onUpdate:modelValue":n[2]||(n[2]=e=>s.value=e),placeholder:"十六进制"},null,512),[[d,s.value]]),D,i(t("input",{type:"text",id:"input-real",autocomplete:"off",readonly:"",style:{"font-family":"var(--font-family-code)","font-size":"1rem"},"onUpdate:modelValue":n[3]||(n[3]=e=>c.value=e),placeholder:"原始值"},null,512),[[d,c.value]])],64))}});const A=v(z,[["__scopeId","data-v-7f8523cf"],["__file","IEEE754.vue"]]),X=t("p",null,"IEEE 754 浮点数的交互式演示。",-1),Z=B(`<div class="hint-container tip"><p class="hint-container-title">解释</p><p>具体显示的结果取决于你的计算机储存方式和浮点数实现，考虑到现代计算机几乎 100% 地采用了 IEEE 754，并使用小端存储数据，所以这可以保证 100% 是正确的。除非你的机器 / JavaScript 实现使用大端存储，这样你看到的结果也是大端的。</p></div><h2 id="_1-原理" tabindex="-1"><a class="header-anchor" href="#_1-原理" aria-hidden="true">#</a> 1. 原理</h2><p>使用 ES6 新特性 <code>ArrayBuffer</code> 和 <code>DataView</code> 来读取和设置二进制数组：</p><div class="language-typescript" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 将浮点数转换为 uint32 类型</span>
<span class="token keyword">const</span> float32_to_uint32 <span class="token operator">=</span> <span class="token punctuation">(</span>f<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayBuffer</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> view <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataView</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span>
  view<span class="token punctuation">.</span><span class="token function">setFloat32</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> f<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> view<span class="token punctuation">.</span><span class="token function">getUint32</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div>`,4),$={href:"https://github.com/Sun-ZhenXing/Sun-ZhenXing.github.io/tree/main/src/.vuepress/components/IEEE754.vue",target:"_blank",rel:"noopener noreferrer"},J=t("h2",{id:"_2-推荐项目",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#_2-推荐项目","aria-hidden":"true"},"#"),o(" 2. 推荐项目")],-1),L={href:"https://github.com/Sun-ZhenXing/IEEE754",target:"_blank",rel:"noopener noreferrer"},T={href:"https://www.h-schmidt.net/FloatConverter/IEEE754.html",target:"_blank",rel:"noopener noreferrer"},G=k({__name:"ieee754.html",setup(p){return(r,l)=>{const s=N("ExternalLinkIcon");return m(),h("div",null,[X,V(" more "),f(A),Z,t("p",null,[o("可参考 "),t("a",$,[o("本页组件实现代码"),f(s)]),o(" 来了解更多。")]),J,t("ol",null,[t("li",null,[o("我使用 PySide6 构建的 IEEE 754 演示，效果好于当前页面，"),t("a",L,[o("GitHub"),f(s)])]),t("li",null,[t("a",T,[o("IEEE 754 Converter (JavaScript)"),f(s)])])])])}}}),M=v(G,[["__file","ieee754.html.vue"]]);export{M as default};
