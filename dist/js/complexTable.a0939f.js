(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{646:function(e,t,n){},740:function(e,t,n){"use strict";var r=n(646);n.n(r).a},778:function(e,t,n){"use strict";n.r(t);var r=n(93),a=n(92),i={data:function(){return{userList:[],genderList:[{text:"男",value:"男"},{text:"女",value:"女"}],roleList:[{text:"管理员",value:"管理员"},{text:"编辑",value:"编辑"},{text:"普通会员",value:"普通会员"},{text:"高级会员",value:"高级会员"},{text:"普通用户",value:"普通用户"}],userTableLoading:!1,queryCondition:{name:"",currentPageNum:1,pageSize:20},userAmount:0,multipleSelection:[]}},created:function(){this.getUserList()},methods:{getUserList:function(){var e=this;this.userTableLoading=!0,a.a.user.getUserList(this.queryCondition).then(function(t){e.userList=t.data.userList.map(function(t,n){return{id:t.id,index:(e.queryCondition.currentPageNum-1)*e.queryCondition.pageSize+n+1,name:t.name,age:t.age,gender:t.gender,role:t.role,registerDate:t.registerDate,consume:t.consume}}),e.userAmount=t.data.userAmount,e.userTableLoading=!1;var n=document.querySelector(".page");Object(r.c)(n,0,15)})},filter:function(e,t,n){return t[n.property]===e},editUser:function(){},deleteUser:function(e,t){var n=this;this.$confirm("确认删除用户“"+t.name+"”？","提示",{type:"warning"}).then(function(){n.getUserList(),n.$message.success("删除成功！")}).catch(function(){})},handleSelectionChange:function(e){this.multipleSelection=e},handleSizeChange:function(e){this.queryCondition.pageSize=e,this.getUserList()},handleCurrentChange:function(e){this.queryCondition.currentPageNum=e,this.getUserList()}}},l=(n(740),n(67)),o=Object(l.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.userTableLoading,expression:"userTableLoading"}],attrs:{data:e.userList,border:"","highlight-current-row":""},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),n("el-table-column",{attrs:{prop:"index",label:"序号"}}),e._v(" "),n("el-table-column",{attrs:{prop:"name",label:"姓名"}}),e._v(" "),n("el-table-column",{attrs:{prop:"age",label:"年龄",sortable:""}}),e._v(" "),n("el-table-column",{attrs:{prop:"gender",label:"性别",filters:e.genderList,"filter-method":e.filter,"filter-placement":"bottom"}}),e._v(" "),n("el-table-column",{attrs:{prop:"role",label:"角色",filters:e.roleList,"filter-method":e.filter,"filter-placement":"bottom"}}),e._v(" "),n("el-table-column",{attrs:{prop:"registerDate",label:"注册时间",sortable:""}}),e._v(" "),n("el-table-column",{attrs:{prop:"consume",label:"累计消费额(元)",sortable:""}}),e._v(" "),n("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("el-button",{attrs:{type:"primary",size:"mini",plain:""},on:{click:function(n){return e.editUser(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),n("el-button",{attrs:{type:"danger",size:"mini",plain:""},on:{click:function(n){return e.deleteUser(t.$index,t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),n("el-pagination",{staticClass:"pagination",attrs:{total:e.userAmount,"current-page":e.queryCondition.currentPageNum,"page-sizes":[20,50,100,1e3],"page-size":e.queryCondition.pageSize,layout:"total, sizes, prev, pager, next, jumper",background:""},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},[],!1,null,"60d75d07",null);t.default=o.exports}}]);