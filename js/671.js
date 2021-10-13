(self.webpackChunkrayx_ui=self.webpackChunkrayx_ui||[]).push([[671],{4350:(e,t,o)=>{"use strict";o.d(t,{Z:()=>E});var n=o(2991),s=o.n(n),r=o(6902),a=o.n(r),i=o(9980),d=o.n(i),l=o(6635),c=o.n(l),h=o(700),u=o.n(h),p=o(7003),m=o.n(p),f=o(2384),y=o.n(f),k=o(645),g=o.n(k),L=o(9411),v=o.n(L),C=o(4266),w=o.n(C),b=o(4574),x=o.n(b),S=o(81),$=o(6649),I=o.n($),A=o(4651),B=o.n(A),F=o(717),j=o.n(F),_=o(7869),D=o.n(_),N=o(6252);const O=new(d())({highlight:function(e,t){if(t&&D().getLanguage(t))try{return'<pre><code class="hljs" v-pre>'+D().highlight(e,{language:t,ignoreIllegals:!0}).value+"</code></pre>"}catch(e){}return'<pre><code class="hljs" v-pre>'+O.utils.escapeHtml(e)+"</code></pre>"}}),E={md:O,template:"<div><slot></slot></div>",data(){return{sourceData:this.source}},props:{watches:{type:Array,default:()=>["source","show","toc"]},source:{type:String,default:""},show:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0},html:{type:Boolean,default:!0},xhtmlOut:{type:Boolean,default:!0},breaks:{type:Boolean,default:!0},linkify:{type:Boolean,default:!0},emoji:{type:Boolean,default:!0},typographer:{type:Boolean,default:!0},langPrefix:{type:String,default:"language-"},quotes:{type:String,default:"“”‘’"},tableClass:{type:String,default:"table"},taskLists:{type:Boolean,default:!0},toc:{type:Boolean,default:!1},tocId:{type:String},tocClass:{type:String,default:"table-of-contents"},tocFirstLevel:{type:Number,default:2},tocLastLevel:{type:Number},tocAnchorLink:{type:Boolean,default:!0},tocAnchorClass:{type:String,default:"toc-anchor"},tocAnchorLinkSymbol:{type:String,default:"#"},tocAnchorLinkSpace:{type:Boolean,default:!0},tocAnchorLinkClass:{type:String,default:"toc-anchor-link"},anchorAttributes:{type:Object,default:()=>({})},prerender:{type:Function,default:e=>e},postrender:{type:Function,default:e=>e}},computed:{tocLastLevelComputed(){return this.tocLastLevel>this.tocFirstLevel?this.tocLastLevel:this.tocFirstLevel+1}},render(){this.md=O.use(u()).use(m()).use(y()).use(g()).use(v()).use(w()).use(x()).use(I(),{throwOnError:!1,errorColor:" #cc0000"}).use(B(),{enabled:this.taskLists}).use(j()),this.emoji&&this.md.use(c()),this.md.set({html:this.html,xhtmlOut:this.xhtmlOut,breaks:this.breaks,linkify:this.linkify,typographer:this.typographer,langPrefix:this.langPrefix,quotes:this.quotes}),this.md.renderer.rules.table_open=()=>`<table class="${this.tableClass}">\n`;const e=this.md.renderer.rules.link_open||function(e,t,o,n,s){return s.renderToken(e,t,o)};this.md.renderer.rules.link_open=(t,o,n,r,i)=>{var d;return s()(d=a()(this.anchorAttributes)).call(d,(e=>{const n=t[o].attrIndex(e),s=this.anchorAttributes[e];n<0?t[o].attrPush([e,s]):t[o].attrs[n][1]=s})),e(t,o,n,r,i)},this.toc&&this.md.use(S.Z,{tocClassName:this.tocClass,tocFirstLevel:this.tocFirstLevel,tocLastLevel:this.tocLastLevelComputed,anchorLink:this.tocAnchorLink,anchorLinkSymbol:this.tocAnchorLinkSymbol,anchorLinkSpace:this.tocAnchorLinkSpace,anchorClassName:this.tocAnchorClass,anchorLinkSymbolClassName:this.tocAnchorLinkClass,tocCallback:(e,t,o)=>{o&&(this.tocId&&document.getElementById(this.tocId)&&(document.getElementById(this.tocId).innerHTML=o),this.$emit("toc-rendered",o))}});let t=this.show?this.md.render(this.prerender(this.sourceData)):"";return t=this.postrender(t),this.$emit("rendered",t),(0,N.h)("div",{class:{"ra-docs-wrapper":!0},innerHTML:t})},beforeMount(){if(this.$slots.default){this.sourceData="";for(const e of this.$slots.default())this.sourceData+=e.children}this.$watch("source",(()=>{this.sourceData=this.prerender(this.source),this.$forceUpdate()})),this.watches.forEach((e=>{this.$watch(e,(()=>{this.$forceUpdate()}))}))}}},322:e=>{e.exports='# md 解析\n\nmd 解析主要是用`markdown-it`来对 md 文件进行处理，处理了 props，分类等，并且对规则进行了拦截处理，用来生成代码运行示例\n\n## 规则拦截\n\n在代码块的规则中，如果代码块匹配到`demo`，会转换成示例代码\n\n```js\nmd.renderer.rules.fence = function(tokens, idx, options, env, self) {\n  const token = tokens[idx];\n  let text = "";\n  if (token.info.includes(" demo") || token.info.includes("demo ")) {\n    text = `<div class="ra-docs-demo-examp">\n            <div class="ra-docs-demo-comps">\n                <demo${demoIndex}></demo${demoIndex}>\n            </div>\n            <div class="ra-docs-demo-code" :class="{showCode: demoControlShowCode[${demoIndex}] && !!demoControlShowCode[${demoIndex}].show}">\n                ${defaultFenceRender(tokens, idx, options, env, self)}\n            </div>\n            <div class="ra-docs-demo-control" @click="demoControlShowCodeTotgal(${demoIndex})">\n                {{demoControlShowCode[${demoIndex}] && demoControlShowCode[${demoIndex}].show?\'隐藏代码\':\'显示代码\'}}\n            </div>\n        </div>`;\n\n    ...\n  } else {\n    text = defaultFenceRender(tokens, idx, options, env, self);\n  }\n\n  return text;\n};\n```\n'},4671:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>d});var n=o(6252),s=o(3577),r=o(4350),a=o(322),i=o.n(a);const d={name:"views.architecture.md",components:{VueMarkdown:r.Z},data:()=>({base:i()}),computed:{},methods:{},render:function(e,t,o,r,a,i){const d=(0,n.up)("vue-markdown");return(0,n.wg)(),(0,n.j4)(d,null,{default:(0,n.w5)((()=>[(0,n.Uk)((0,s.zw)(a.base),1)])),_:1})}}}}]);
//# sourceMappingURL=671.js.map