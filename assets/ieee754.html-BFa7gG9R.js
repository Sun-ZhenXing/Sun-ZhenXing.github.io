import{f,h as i,o as m,c as h,p as c,v as u,b as n,F as b,u as w,x,a as I,e as S}from"./app-DhX54nll.js";import{_ as E}from"./plugin-vue_export-helper-DlAUqK2U.js";const d=s=>(w("data-v-f48edfc9"),s=s(),x(),s),V=d(()=>n("label",{for:"input-text"},"输入值",-1)),N=d(()=>n("label",{for:"input-bin"},"二进制表示",-1)),T=d(()=>n("label",{for:"input-hex"},"十六进制表示",-1)),Z=d(()=>n("label",{for:"input-real"},"原始值",-1)),A=f({__name:"IEEE754",setup(s){const p=i(""),o=i(""),l=i(""),r=i(0);function k(a){const e=new ArrayBuffer(4),t=new DataView(e);return t.setFloat32(0,a,!0),t.getUint32(0,!0)}function _(a){const e=new ArrayBuffer(4),t=new DataView(e);return t.setUint32(0,a,!0),t.getFloat32(0,!0)}function y(a,e=32){const t=a.toString(16);return"0".repeat(e/4-t.length)+t}function v(a,e=32){const t=a.toString(2);return"0".repeat(e-t.length)+t}function g(){const a=Number.parseFloat(p.value);if(Number.isNaN(a)){o.value="",l.value="",r.value=0;return}const e=k(a);o.value=v(e),l.value=y(e),r.value=_(e)}return(a,e)=>(m(),h(b,null,[V,c(n("input",{id:"input-text","onUpdate:modelValue":e[0]||(e[0]=t=>p.value=t),autocomplete:"off",placeholder:"输入浮点数",style:{"font-family":"var(--font-family-code)"},type:"text",onInput:g},null,544),[[u,p.value]]),N,c(n("input",{id:"input-bin","onUpdate:modelValue":e[1]||(e[1]=t=>o.value=t),autocomplete:"off",placeholder:"二进制",readonly:"",style:{"font-family":"var(--font-family-code)"},type:"text"},null,512),[[u,o.value]]),T,c(n("input",{id:"input-hex","onUpdate:modelValue":e[2]||(e[2]=t=>l.value=t),autocomplete:"off",placeholder:"十六进制",readonly:"",style:{"font-family":"var(--font-family-code)"},type:"text"},null,512),[[u,l.value]]),Z,c(n("input",{id:"input-real","onUpdate:modelValue":e[3]||(e[3]=t=>r.value=t),autocomplete:"off",placeholder:"原始值",readonly:"",style:{"font-family":"var(--font-family-code)"},type:"text"},null,512),[[u,r.value]])],64))}}),D=E(A,[["__scopeId","data-v-f48edfc9"],["__file","IEEE754.vue"]]),B=n("p",null,"IEEE 754 浮点数的交互式演示。",-1),F=n("h2",{id:"1-演示",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#1-演示"},[n("span",null,"1. 演示")])],-1),U=S(`<h2 id="2-原理" tabindex="-1"><a class="header-anchor" href="#2-原理"><span>2. 原理</span></a></h2><div class="hint-container tip"><p class="hint-container-title">解释</p><p>具体显示的结果取决于你的计算机储存方式和浮点数实现，考虑到现代计算机几乎 100% 地采用了 IEEE 754，并使用小端存储数据，所以这可以保证 100% 是正确的。除非你的机器 / JavaScript 实现使用大端存储，这样你看到的结果也是大端的。</p></div><p>使用 ES6 新特性 <code>ArrayBuffer</code> 和 <code>DataView</code> 来读取和设置二进制数组：</p><div class="language-typescript" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token comment">// 将浮点数转换为 uint32 类型</span>
<span class="token keyword">const</span> float32_to_uint32 <span class="token operator">=</span> <span class="token punctuation">(</span>f<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> buffer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayBuffer</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> view <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataView</span><span class="token punctuation">(</span>buffer<span class="token punctuation">)</span>
  view<span class="token punctuation">.</span><span class="token function">setFloat32</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> f<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> view<span class="token punctuation">.</span><span class="token function">getUint32</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><p>可参考 <a href="https://github.com/Sun-ZhenXing/Sun-ZhenXing.github.io/tree/main/src/.vuepress/components/IEEE754.vue" target="_blank" rel="noopener noreferrer">本页组件实现代码</a> 来了解更多。</p><h2 id="3-推荐项目" tabindex="-1"><a class="header-anchor" href="#3-推荐项目"><span>3. 推荐项目</span></a></h2><ol><li><a href="https://github.com/Sun-ZhenXing/IEEE754" target="_blank" rel="noopener noreferrer">我使用 PySide6 构建的 IEEE 754 演示</a>，效果好于当前页面</li><li><a href="https://www.h-schmidt.net/FloatConverter/IEEE754.html" target="_blank" rel="noopener noreferrer">IEEE 754 Converter (JavaScript)</a></li></ol>`,7),C=f({__name:"ieee754.html",setup(s){return(p,o)=>(m(),h("div",null,[B,F,I(D),U]))}}),$=E(C,[["__file","ieee754.html.vue"]]),z=JSON.parse('{"path":"/posts/frontend/awesome/ieee754.html","title":"IEEE 754 浮点数交互式演示","lang":"zh-CN","frontmatter":{"title":"IEEE 754 浮点数交互式演示","date":"2022-12-10T00:00:00.000Z","category":["前端","Awesome"],"tag":["前端","IEEE754"],"description":"IEEE 754 浮点数的交互式演示。","head":[["meta",{"property":"og:url","content":"https://blog.alexsun.top/posts/frontend/awesome/ieee754.html"}],["meta",{"property":"og:site_name","content":"鸭梨"}],["meta",{"property":"og:title","content":"IEEE 754 浮点数交互式演示"}],["meta",{"property":"og:description","content":"IEEE 754 浮点数的交互式演示。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-02T16:16:12.000Z"}],["meta",{"property":"article:author","content":"Alex Sun"}],["meta",{"property":"article:tag","content":"前端"}],["meta",{"property":"article:tag","content":"IEEE754"}],["meta",{"property":"article:published_time","content":"2022-12-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-02T16:16:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"IEEE 754 浮点数交互式演示\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-12-10T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-02T16:16:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Alex Sun\\",\\"url\\":\\"https://blog.alexsun.top/\\"}]}"]]},"headers":[{"level":2,"title":"1. 演示","slug":"1-演示","link":"#1-演示","children":[]},{"level":2,"title":"2. 原理","slug":"2-原理","link":"#2-原理","children":[]},{"level":2,"title":"3. 推荐项目","slug":"3-推荐项目","link":"#3-推荐项目","children":[]}],"git":{"createdTime":1670644516000,"updatedTime":1709396172000,"contributors":[{"name":"Sun-ZhenXing","email":"1006925066@qq.com","commits":6}]},"readingTime":{"minutes":0.87,"words":261},"filePathRelative":"posts/frontend/awesome/ieee754.md","localizedDate":"2022年12月10日","excerpt":"<!-- markdownlint-disable MD033 -->\\n<p>IEEE 754 浮点数的交互式演示。</p>\\n","autoDesc":true}');export{$ as comp,z as data};
