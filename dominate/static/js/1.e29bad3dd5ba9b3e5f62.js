webpackJsonp([1],{"2Qh1":function(t,e,a){"use strict";function i(t){a("Jnvf")}Object.defineProperty(e,"__esModule",{value:!0});var s=a("lC5x"),n=a.n(s),o=a("J0Oq"),l=a.n(o),h=a("5YEj"),r=a.n(h),d={data:function(){return{myChart:null,canalId:"001",canalName:"北京九山海",showCanal:!1,showUp:!1,beginMonUp:"",endMonUp:"",dayValueUp:[],showStrUp:"按日查询",isClickUp:!1,isShowDayUp:!1,isShowMonthUp:!1,showDown:!1,beginMonDown:"",endMonDown:"",dayValueDown:[],isClickDown:!1,isShowDayDown:!1,isShowMonthDown:!1,typeName:"用户名",showType:!1,userInput:"",active:0,defaultDate:{chapterCount:">=2",dateTime:this.dateTiming((new Date).getTime()-5184e5,"start"),endTime:this.dateTiming((new Date).getTime(),"end"),group:"A"},option:{tooltip:{trigger:"axis"},grid:{left:"3%",top:"12%"},legend:{data:["两个章节以上","两个章节以内"]},toolbox:{show:!0,feature:{mark:{show:!0},dataView:{show:!0,readOnly:!1},magicType:{show:!0,type:["line","bar","stack","tiled"]},restore:{show:!0},saveAsImage:{show:!0}}},calculable:!0,xAxis:[{type:"category",boundaryGap:!1,data:[]}],yAxis:[{type:"value"}],series:[{name:"两个章节以内",type:"line",data:[]},{name:"两个章节以上",type:"line",data:[]}]},tableList:[],tableDate:{dateTime:this.dateTiming((new Date).getTime(),"start"),endTime:this.dateTiming((new Date).getTime(),"end")}}},mounted:function(){for(var t=(new Date).getTime(),e=0;e<7;e++)this.option.xAxis[0].data.unshift(this.FunWeekTime(t-1e3*e*60*60*24));this.bookChart(),this.bookTable()},destroyed:function(){this.myChart=null},methods:{bookChart:function(){var t=this;return l()(n.a.mark(function e(){var a,i,s,o;return n.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.option.series[0].data=[],t.option.series[1].data=[],t.myChart=r.a.init(document.getElementById("trendGrowth2")),t.myChart.showLoading(),a=t.option.xAxis[0].data,i=t.option.series,s=t.defaultDate,s.chapterCount=">=2",e.next=10,t.$store.dispatch("getExtensionstatisticsData",s).then(function(e){if(200===e.returnCode){for(var s=0;s<a.length;s++)if("按日查询"===t.showStrUp){var n=t.groupA(e.data).indexOf(a[s]);n>=0?i[0].data.push(e.data[n].chapterCount):i[0].data.push(0)}else if("按月查询"===t.showStrUp){var n=t.groupB(e.data).indexOf(a[s]);n>=0?i[0].data.push(e.data[n].chapterCount):i[0].data.push(0)}}else for(var o=0;o<a.length;o++)i[0].data.push(0)});case 10:o=t.defaultDate,o.chapterCount="<=2",t.$store.dispatch("getExtensionstatisticsData",o).then(function(e){if(200===e.returnCode){for(var s=0;s<a.length;s++)if("按日查询"===t.showStrUp){var n=t.groupA(e.data).indexOf(a[s]);n>=0?i[1].data.push(e.data[n].chapterCount):i[1].data.push(0)}else if("按月查询"===t.showStrUp){var o=t.groupB(e.data).indexOf(a[s]);o>=0?i[1].data.push(e.data[o].chapterCount):i[1].data.push(0)}}else for(var l=0;l<a.length;l++)i[1].data.push(0);t.myChart.setOption(t.option,!0),t.myChart.hideLoading()});case 13:case"end":return e.stop()}},e,t)}))()},groupA:function(t){for(var e=[],a=0;a<t.length;a++)e.push(this.FunWeekTime(t[a].dateTime));return e},groupB:function(t){for(var e=[],a=0;a<t.length;a++)e.push(this.RecectMonth(t[a].dateTime));return e},changeCanalId:function(t){this.canalId=t},changeDevice:function(t){this.active=t,0===t?delete this.defaultDate.terminal:1===t?this.defaultDate.terminal=1:2===t?this.defaultDate.terminal=2:3===t&&(this.defaultDate.terminal=3),this.bookChart()},handleCommandUp:function(t){this.option.xAxis[0].data=[],"按日查询"===t?(this.showStrUp=t,this.showUp=!0,this.isShowDayUp=!0,this.isShowMonthUp=!1):"按月查询"===t&&(this.showStrUp=t,this.showUp=!0,this.isShowDayUp=!1,this.isShowMonthUp=!0)},handChangeDateUp:function(){if("按日查询"===this.showStrUp)if(this.dayValueUp[1]-this.dayValueUp[0]<=2592e6){this.defaultDate.group="A",this.defaultDate.dateTime=this.dateTiming(this.dayValueUp[0].getTime(),"start"),this.defaultDate.endTime=this.dateTiming(this.dayValueUp[1].getTime(),"end"),this.isShowDayUp=!1,this.isShowMonthUp=!1,this.showUp=!1;for(var t=(this.dayValueUp[1]-this.dayValueUp[0])/864e5,e=0;e<=t;e++)this.option.xAxis[0].data.unshift(this.FunWeekTime(this.dayValueUp[1]-1e3*e*60*60*24));this.bookChart()}else this.$message({message:"时间间隔不能超过一个月！",type:"warning"});else if("按月查询"===this.showStrUp)if(""===this.endMonUp||""===this.beginMonUp)this.$message({message:"月份不能为空错误！",type:"warning"});else if(this.endMonUp-this.beginMonUp<0)this.$message({message:"月份选取错误！",type:"warning"});else{this.defaultDate.group="B",this.defaultDate.dateTime=this.dateTiming(this.beginMonUp.getTime(),"start"),this.defaultDate.endTime=this.dateTiming(this.endMonUp.getTime()-864e5,"end"),this.isShowDayUp=!1,this.isShowMonthUp=!1,this.showUp=!1;for(var t=(this.endMonUp-this.beginMonUp)/2592e6,a=0;a<=t;a++)this.option.xAxis[0].data.unshift(this.RecectMonth(this.endMonUp-1e3*a*60*60*24*30));this.bookChart()}},handleCommandDown:function(){this.showDown=!0,this.isShowDayDown=!0,this.isShowMonthDown=!1},bookTable:function(){var t=this;this.tableList=[];var e=this.tableDate;this.$store.dispatch("getUserExtensionstatisticsCreateBookInfo",e).then(function(e){200===e.returnCode&&(t.tableList=e.data)})},handChangeDateDown:function(){this.tableDate.dateTime=this.dateTiming(this.dayValueDown[0].getTime(),"start"),this.tableDate.endTime=this.dateTiming(this.dayValueDown[1].getTime(),"end"),this.isShowDayDown=!1,this.isShowMonthDown=!1,this.showDown=!1,this.bookTable()},search:function(){"用户名"===this.typeName&&""!=this.userInput?(delete this.tableDate.bookName,this.tableDate.writerName=this.userInput,this.bookTable()):"书名"===this.typeName&&""!=this.userInput&&(delete this.tableDate.writerName,this.tableDate.bookName=this.userInput,this.bookTable())}}},c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"create-book"},[a("div",{staticClass:"canal"},[a("div",{staticClass:"drop-down-canal"},[a("el-button",{staticClass:"title",on:{click:function(e){t.showCanal=!t.showCanal}}},[t._v(t._s(t.canalName)+" "),a("i",{staticClass:"fa fa-sort-down"})]),t._v(" "),a("div",{staticClass:"drop-down-box"},[a("el-collapse-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showCanal,expression:"showCanal"}]},[a("div",{staticClass:"transition-box",on:{click:function(e){t.changeCanalId("001")}}},[t._v("北京久山海")])])])],1)],1)]),t._v(" "),a("div",{staticClass:"echart"},[a("span",[t._v("总统计量")]),t._v(" "),a("span",{class:{active:0===t.active},on:{click:function(e){t.changeDevice(0)}}},[t._v("All")]),t._v(" "),a("span",{class:{active:1===t.active},on:{click:function(e){t.changeDevice(1)}}},[a("i",{staticClass:"fa fa-android"}),t._v(" Android")]),t._v(" "),a("span",{class:{active:2===t.active},on:{click:function(e){t.changeDevice(2)}}},[a("i",{staticClass:"fa fa-apple"}),t._v(" IOS")]),t._v(" "),a("span",{class:{active:3===t.active},on:{click:function(e){t.changeDevice(3)}}},[a("i",{staticClass:"fa fa-mobile"}),t._v(" 手机站")]),t._v(" "),a("div",{staticClass:"drop-down-echart"},[a("el-button",{staticClass:"title",on:{click:function(e){t.showUp=!t.showUp}}},[t._v(t._s(t.showStrUp)+" "),a("i",{staticClass:"fa fa-sort-down"})]),t._v(" "),a("div",{staticClass:"drop-down-box"},[a("el-collapse-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showUp,expression:"showUp"}]},[a("div",{staticClass:"transition-box",on:{click:function(e){t.handleCommandUp("按日查询")}}},[t._v("\r\n                            按日查询\r\n                            "),a("div",{staticClass:"change-date"},[t.isShowDayUp?a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.dayValueUp,callback:function(e){t.dayValueUp=e},expression:"dayValueUp"}}):t._e()],1)]),t._v(" "),a("div",{staticClass:"transition-box",on:{click:function(e){t.handleCommandUp("按月查询")}}},[t._v("\r\n                            按月查询\r\n                            "),a("div",{staticClass:"change-date"},[t.isShowMonthUp?a("el-date-picker",{attrs:{type:"month",placeholder:"起始月份"},model:{value:t.beginMonUp,callback:function(e){t.beginMonUp=e},expression:"beginMonUp"}}):t._e(),t._v(" "),t.isShowMonthUp?a("el-date-picker",{attrs:{type:"month",placeholder:"结束月份"},model:{value:t.endMonUp,callback:function(e){t.endMonUp=e},expression:"endMonUp"}}):t._e()],1)]),t._v(" "),a("div",{staticClass:"transition-box tool"},[a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(e){t.handChangeDateUp()}}},[t._v("确定")]),t._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(e){t.showUp=!1,t.isShowMonthUp=!1,t.isShowDayUp=!1}}},[t._v("取消")])],1)])])],1)],1)]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"table"},[a("div",{staticClass:"drop-down-type"},[a("el-button",{staticClass:"title",on:{click:function(e){t.showType=!t.showType}}},[t._v(t._s(t.typeName)+" "),a("i",{staticClass:"fa fa-sort-down"})]),t._v(" "),a("div",{staticClass:"drop-down-box"},[a("el-collapse-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showType,expression:"showType"}]},[a("div",{staticClass:"transition-box",on:{click:function(e){t.typeName="用户名",t.showType=!1}}},[t._v("用户名")]),t._v(" "),a("div",{staticClass:"transition-box",on:{click:function(e){t.typeName="书名",t.showType=!1}}},[t._v("书名")])])])],1)],1),t._v(" "),a("el-input",{staticClass:"user-input",attrs:{placeholder:"请输入内容"},model:{value:t.userInput,callback:function(e){t.userInput=e},expression:"userInput"}}),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"el-icon-search"},on:{click:function(e){t.search()}}},[t._v("搜索")]),t._v(" "),a("div",{staticClass:"drop-down-table"},[a("el-button",{staticClass:"title",on:{click:function(e){t.showDown=!t.showDown}}},[t._v("按日查询"),a("i",{staticClass:"fa fa-sort-down"})]),t._v(" "),a("div",{staticClass:"drop-down-box"},[a("el-collapse-transition",[a("div",{directives:[{name:"show",rawName:"v-show",value:t.showDown,expression:"showDown"}]},[a("div",{staticClass:"transition-box",on:{click:function(e){t.handleCommandDown()}}},[t._v("\r\n                            按日查询\r\n                            "),a("div",{staticClass:"change-date"},[t.isShowDayDown?a("el-date-picker",{attrs:{type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期"},model:{value:t.dayValueDown,callback:function(e){t.dayValueDown=e},expression:"dayValueDown"}}):t._e()],1)]),t._v(" "),a("div",{staticClass:"transition-box tool"},[a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(e){t.handChangeDateDown()}}},[t._v("确定")]),t._v(" "),a("el-button",{attrs:{size:"mini"},on:{click:function(e){t.showDown=!1,t.isShowMonthDown=!1,t.isShowDayDown=!1}}},[t._v("取消")])],1)])])],1)],1)],1),t._v(" "),a("div",{staticClass:"table-box"},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableList,stripe:"",border:""}},[a("el-table-column",{attrs:{prop:"bookId",label:"用户ID"}}),t._v(" "),a("el-table-column",{attrs:{prop:"bookName",label:"书名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"writerName",label:"作者"}}),t._v(" "),a("el-table-column",{attrs:{label:"创作时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\r\n                    "+t._s(t._f("time")(e.row.bookCreatedTime,"long"))+"\r\n                ")]}}])}),t._v(" "),a("el-table-column",{attrs:{label:"更新时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\r\n                    "+t._s(t._f("time")(e.row.lastUpdateTime,"long"))+"\r\n                ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"bookWorldCount",label:"字数"}}),t._v(" "),a("el-table-column",{attrs:{label:"封面"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("div",[a("img",{attrs:{src:t.row.bookImage,alt:""}})])]}}])})],1)],1)])},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"trendGrowth"},[a("div",{staticStyle:{width:"100%",height:"270px"},attrs:{id:"trendGrowth2"}})])}],u=a("18Nq"),w=i,v=Object(u.a)(d,c,p,!1,w,"data-v-6d932826",null);e.default=v.exports},Jnvf:function(t,e){}});
//# sourceMappingURL=1.e29bad3dd5ba9b3e5f62.js.map