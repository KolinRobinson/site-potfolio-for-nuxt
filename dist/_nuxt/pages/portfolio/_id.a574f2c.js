(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{200:function(o,t,e){var r=e(233),l={CTF_SPACE_ID:"ffbcm6lpk46x",CTF_CDA_ACCESS_TOKEN:"XW8MZTmiDrHY1hwJ7WkZ8zuRCuhmdKNkYLBa1la7xiM"};o.exports={createClient:function(){var o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l;return r.createClient({space:o.CTF_SPACE_ID,accessToken:o.CTF_CDA_ACCESS_TOKEN})}}},215:function(o,t,e){var content=e(315);"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,e(22).default)("26794c52",content,!0,{sourceMap:!1})},232:function(o,t){},313:function(o,t){o.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzUiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAzNSAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTQuMTEyNSAwTDE3LjUgMTMuNjA5MkwzMC44ODc1IDBMMzUgNC4yMTAyNEwxNy41IDIyTDAgNC4yMTAyNEw0LjExMjUgMFoiIGZpbGw9ImJsYWNrIi8+Cjwvc3ZnPgo="},314:function(o,t,e){"use strict";var r=e(215);e.n(r).a},315:function(o,t,e){(t=e(21)(!1)).push([o.i,".work-intro{width:100%;height:100vh;display:flex;align-items:center;justify-content:center;background-color:var(--main-bg-color);position:relative}.work-intro__arrow{position:absolute;bottom:60px;width:35px;height:22px;left:calc(50% - 17.5px)}.work-history{background-color:#f4f4f4;padding:90px 0 60px}.work-history__wrapper{display:flex;flex-direction:column}.work-history__info{display:flex;align-items:center;justify-content:center;margin-bottom:60px}.work-history__info--text{max-width:1000px}.work-history__link{display:flex;justify-content:flex-end;align-items:center}.work-view{padding:90px 0 60px}.work-view__wrapper{max-width:1000px;width:100%;margin:0 auto}.work-view__img{width:100%;height:auto;-o-object-fit:contain;object-fit:contain}.work-color{background-color:#f4f4f4;padding:90px 0 60px}.work-color__wrapper{display:flex;flex-direction:column}.work-color__blocks{display:flex;align-items:center;justify-content:space-around}.work-color__single{width:250px;height:250px;box-shadow:0 0 5px 5px rgba(0,0,0,.25);display:flex;align-items:flex-end;justify-content:center}.work-color__single p{margin-bottom:15px}.work-mobile{padding:90px 0 60px}.work-mobile__wrapper{display:flex;flex-direction:column}.work-mobile__content{display:flex;align-items:center;justify-content:space-around}.work-mobile__adaptive{display:flex;flex:0 0 50%;align-items:center;justify-content:center}.work-mobile__adaptive .mobile-markup{width:382px;height:775px;position:relative;background:url(/assets/img/iPhone6SPlus.png);z-index:5;background-size:cover}.work-mobile__adaptive .mobile-markup__inner{overflow-y:scroll;position:absolute;max-width:337px;max-height:598px;top:90px;left:23px;z-index:-3}.work-mobile__adaptive .mobile-markup__inner::-webkit-scrollbar{display:none}.work-mobile__users{display:flex;flex:0 0 50%;flex-direction:column}.work-mobile__users--info{max-width:555px}.work-mobile__experience-block{padding-top:60px;align-items:center;justify-content:center}.work-mobile__experience-block .experience__wrapper{display:flex;padding-top:30px;max-width:555px;justify-content:space-between}.work-mobile__experience-block .experience__wrapper--menu{max-width:260px;height:auto}.work-mobile__experience-block .experience__wrapper--btn{max-width:265px}.work-mobile__experience-block .experience__content--img{padding-top:30px}.work-typography{background-color:#f4f4f4;padding:90px 0 60px}.work-typography__wrapper{display:flex;flex-direction:column}.work-typography__blocks{display:flex;align-items:center;justify-content:space-around}.work-typography__img{max-width:440px}.work-footer{padding:90px 0 0;color:#fff;background:#000}.work-footer__wrapper{display:flex;flex-direction:column;align-items:center}.work-footer__navigation{display:flex;align-items:center;justify-content:space-around;width:100%;padding:90px 0 45px}.work-footer__navigation a{color:#fff}.work-footer__img{max-width:440px}",""]),o.exports=t},319:function(o,t,e){"use strict";e.r(t);var r=[function(){var o=this.$createElement,t=this._self._c||o;return t("a",{staticClass:"work-intro__arrow",attrs:{href:"#workHistory"}},[t("img",{attrs:{src:e(313),alt:"arrow"}})])}],l=e(200),n=Object(l.createClient)(),c={asyncData:function(o){var t=o.env,e=o.params;return n.getEntries({content_type:t.CTF_SINGLE_WORK_TYPE_ID,"fields.titleWork":e.id}).then((function(o){return console.log(o.items[0].fields),{work:o.items[0].fields,color1:o.items[0].fields.color1,color2:o.items[0].fields.color2,color3:o.items[0].fields.color3}})).catch(console.error)},data:function(){return{}},mounted:function(){console.log(this.work)}},_=(e(314),e(15)),component=Object(_.a)(c,(function(){var o=this,t=o.$createElement,e=o._self._c||t;return e("main",[e("style",{attrs:{type:"text/css"}},[o._v("\n       :root {\n          --main-bg-color: #B70021;\n      }\n  ")]),o._v(" "),e("section",{staticClass:"work-intro"},[e("h1",{staticClass:"font-plaster"},[o._v(o._s(o.work.titleWork))]),o._v(" "),o._m(0)]),o._v(" "),e("section",{staticClass:"work-history",attrs:{id:"workHistory"}},[e("div",{staticClass:"container"},[e("div",{staticClass:"work-history__wrapper"},[e("h2",{staticClass:"work-history__sub-title sub-title"},[o._v(o._s(o.work.historyTitle))]),o._v(" "),e("div",{staticClass:"work-history__info"},[e("p",{staticClass:"work-history__info--text"},[o._v(o._s(o.work.historyInfo))])]),o._v(" "),e("div",{staticClass:"work-history__link"},[e("a",{staticClass:"visit-link-right",attrs:{href:o.work.linkSite}},[o._v("visit website")])])])])]),o._v(" "),e("section",{staticClass:"work-view"},[e("div",{staticClass:"container"},[e("figure",{staticClass:"work-view__wrapper"},[e("img",{staticClass:"work-view__img",attrs:{src:o.work.viewImg[0].fields.file.url,alt:o.work.viewImg[0].fields.title}}),o._v(" "),e("figcaption",{staticClass:"work-view__text"},[o._v(o._s(o.work.viewImgText))])])])]),o._v(" "),e("section",{staticClass:"work-color"},[e("div",{staticClass:"container"},[e("div",{staticClass:"work-color__wrapper"},[e("h2",{staticClass:"work-color__sub-title sub-title"},[o._v(o._s(o.work.colorTitle))]),o._v(" "),e("div",{staticClass:"work-color__blocks"},[e("div",{staticClass:"work-color__single",style:{backgroundColor:o.color1,color:o.color3}},[e("p",[o._v("Color: "+o._s(o.work.color1))])]),o._v(" "),e("div",{staticClass:"work-color__single",style:{backgroundColor:o.color2,color:o.color1}},[e("p",[o._v("Color: "+o._s(o.work.color2))])]),o._v(" "),e("div",{staticClass:"work-color__single",style:{backgroundColor:o.color3,color:o.color2}},[e("p",[o._v("Color: "+o._s(o.work.color3))])])])])])])])}),r,!1,null,null,null);t.default=component.exports}}]);