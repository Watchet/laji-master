webpackJsonp([46],{"4zb5":function(t,e){},GhL6:function(t,e,a){"use strict";function n(t){a("4zb5")}Object.defineProperty(e,"__esModule",{value:!0});var o=a("405r"),s=a.n(o),i={components:{draggable:s.a},data:function(){return{checkList:[],centerDialogVisible:!1,timerList:[],cloneList:[],updateData:{},page:1,multipleSelection:[],newDrag:!0,keywords:""}},methods:{getTimerList:function(){var t=this;this.$ajax("/admin/getAdminChapterTimingRelease",{page:this.$route.params.page,searchCondition:this.keywords},function(e){200===e.returnCode&&(t.timerList=e.data)})},toggleRowSelection:function(){var t=this;this.multipleSelection.length?this.$confirm("此操作将永久删除所选章节, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.getChapterList(),t.$message({type:"success",message:"删除成功!"})}).catch(function(){t.$message({type:"info",message:"已取消删除"})}):this.$message({message:"请选取要删除的章节！",type:"warning",showClose:!0})},handleSelectionChange:function(t){this.multipleSelection=t},handleRowClick:function(t){this.$refs.multipleTable.toggleRowSelection(t)},handleClick:function(t,e){"a"===t&&this.$router.push({path:"/edit_chapter/"+e.id})},handleCurrentChange:function(t){this.page=t,this.$router.push({params:{page:t}})},bookChangeState:function(t,e){var a=this,n=e.bookCheckStatus,o=e.bookStatus;"a"===t?n=1:"b"===t?0===e.bookCheckStatus?this.$message({message:"书籍暂未审核，请先审核通过！",type:"warning"}):n=2:"c"===t?e.bookCheckStatus<=1?this.$message({message:"书籍已下架！",type:"warning"}):n=1:"d"===t&&(o=1),this.$ajax("/admin/sysbookupdate",{bookId:e.bookId,bookCheckStatus:n,bookAuthorization:e.bookAuthorization,bookStatus:o},function(t){200===t.returnCode&&(a.$message(t.msg),a.getBookList())})}},created:function(){this.getTimerList()},watch:{$route:function(){this.getTimerList()}},computed:{nowTime:function(){var t=(new Date).getTime();return this.$ajax("/sys-getNetWorkDateTime","",function(e){200===e.returnCode&&(t=e.data.beijing)},"get"),t}}},r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"admin-book-wrap"},[a("el-breadcrumb",{staticClass:"mbt20",attrs:{"separator-class":"el-icon-arrow-right"}},[a("el-breadcrumb-item",[t._v("书籍管理")]),t._v(" "),a("el-breadcrumb-item",[t._v("草稿箱列表")])],1),t._v(" "),a("el-alert",{attrs:{title:"操作说明",type:"info","show-icon":""}},[a("div",[a("p",[t._v("\n        此表是本站全部定时章节，您可通过ID进行批量管理\n      ")])])]),t._v(" "),a("el-row",{staticClass:"mbt20"},[a("el-button",{attrs:{type:"danger",plain:""},on:{click:t.toggleRowSelection}},[t._v("批量删除")])],1),t._v(" "),a("el-row",{staticClass:"mbt20"},[a("el-col",{attrs:{xs:20,sm:16,md:12,lg:9,xl:6}},[a("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入书籍id或者书籍名称"},nativeOn:{keyup:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.getTimerList(e):null}},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}},[a("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:t.getTimerList},slot:"append"})],1)],1)],1),t._v(" "),a("el-row",[a("div",{staticClass:"table-wrap"},[a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.timerList.list,"tooltip-effect":"dark",border:""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection"}}),t._v(" "),a("el-table-column",{attrs:{prop:"id",width:"100",label:"章节ID"}}),t._v(" "),a("el-table-column",{attrs:{prop:"bookTitle",label:"书名"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            (id:"+t._s(e.row.bookId)+")"+t._s(e.row.bookTitle)+"\n          ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"chapterTitle",label:"章节名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"chapterIsvip",label:"VIP状态",width:"80",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.chapterIsvip?a("span",{staticClass:"red"},[t._v("VIP")]):a("span",{staticClass:"green"},[t._v("普通")])]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"chapterState",width:"80",label:"审核状态",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.chapterState?a("span",{staticClass:"red"},[t._v("未审核")]):a("span",{staticClass:"green"},[t._v("已审核")])]}}])}),t._v(" "),a("el-table-column",{attrs:{width:"140",label:"发布时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n            "+t._s(t._f("time")(e.row.releaseTime,"long"))+"\n          ")]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"chapterLength",width:"100",align:"center",label:"字数"}}),t._v(" "),a("el-table-column",{attrs:{width:"80",align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-dropdown",{attrs:{trigger:"click",placement:"bottom"},on:{command:function(a){t.handleClick(a,e.row)}}},[a("a",{attrs:{href:"javascript:0;"}},[t._v("更多菜单")]),t._v(" "),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"a"}},[t._v("编辑")]),t._v(" "),a("el-dropdown-item",{attrs:{command:"b"}},[t._v("审核")]),t._v(" "),a("el-dropdown-item",{staticClass:"danger",attrs:{command:"c"}},[t._v("删除")])],1)],1)]}}])})],1)],1),t._v(" "),t.timerList.list&&t.timerList.total>t.timerList.pageSize?a("el-pagination",{staticClass:"mbt20",attrs:{"current-page":Number(t.$route.params.page),"page-size":t.timerList.pageSize,layout:"total, prev, pager, next, jumper",total:t.timerList.total},on:{"current-change":t.handleCurrentChange}}):t._e()],1)],1)},l=[],c=a("18Nq"),u=n,p=Object(c.a)(i,r,l,!1,u,null,null);e.default=p.exports}});
//# sourceMappingURL=46.4934cb9121ff0f92b617.js.map