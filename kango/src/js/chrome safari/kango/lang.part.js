function Lang(){}var object=require("kango/utils").object;Lang.prototype=object.extend(LangBase,{createHTMLSandbox:function(e,n){return n(window)}}),module.exports=new Lang;