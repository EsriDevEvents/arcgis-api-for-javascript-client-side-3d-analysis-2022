import{l as t}from"./vendor.c28ea743.js";const e={main:new t([255,127,0]),selected:new t([255,255,255]),outline:new t([0,0,0,.5]),selectedOutline:new t([255,255,255]),hoverOutline:new t([255,255,255]),secondary:new t([255,255,255]),secondaryOutline:new t([100,100,100]),transparent:new t([0,0,0,0])};function n(s,o){if(o)for(const i in o)s[i]=o[i]}class r{constructor(o){this.size=8,this.hoverSize=10,this.color=e.main,this.hoverColor=e.main,this.outlineColor=e.outline,this.hoverOutlineColor=e.hoverOutline,n(this,o)}}class l{constructor(o){this.color=e.secondary,this.hoverColor=e.main,n(this,o)}}class c{constructor(o){this.color=e.transparent,this.hoverColor=e.transparent,this.outlineColor=e.main,this.hoverOutlineColor=e.main,this.stagedColor=e.transparent,this.stagedOutlineColor=e.secondary,n(this,o)}}class h{constructor(o){this.vertex=new r,this.midpoint=new r({color:e.secondary,outlineColor:e.secondaryOutline,size:6}),this.selected=new r({color:e.selected,hoverColor:e.selected,hoverOutlineColor:e.hoverOutline}),n(this,o)}}class a{constructor(o){this.center=new r({color:e.secondaryOutline}),this.fill=new c,this.line=new l,this.vertex=new r({color:e.selected,outlineColor:e.main,hoverColor:e.selected,hoverOutlineColor:e.secondaryOutline}),n(this,o)}}class u{constructor(o){this.reshapeGraphics=new h,this.transformGraphics=new a,n(this,o)}}const w=new u;export{w as h,e as o};
