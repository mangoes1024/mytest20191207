/* jshint esversion: 6*/
const cartTools={};
let storage=window.localStorage;
//获得缓存里的产品
let prods=JSON.parse(storage.getItem('prods'||'{}'));
//购物车新增或者更新（购物车原来没有的新增，原来有的更新）
cartTools.addOrUpdate=function(obj){
    if(prods[obj.id]){
        prods[obj.id]= prods[obj.id]+obj.num;
    }else{
        prods[obj.id]=obj.num;
    }
this.saveProds(prods);
};
//删除购物车里选中的产品
cartTools.delete=function(id){
   delete prods[id];
   this.saveProds(prods);
};

//返回缓存里的产品（用于页面刷新后购物车的的角标数还存在）
cartTools.getProds=function(){
    return JSON.parse(storage.getItem('prods')||'{}');
};
//获取产品总数量
cartTools.setProdsNum=function (){
   let sum=0;
   for(let key in prods){
       sum=sum+prods[key];
   }
   return sum;
};
//把购物车里的产品存到本地缓存
cartTools.saveProds=function (prods){
    storage.setItem('prods',JSON.stringify(prods));
};
export default cartTools;


