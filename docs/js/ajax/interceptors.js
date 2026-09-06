// Compiled by ClojureScript 1.12.145 {:static-fns true, :optimize-constants true, :elide-asserts true, :optimizations :advanced}
goog.provide('ajax.interceptors');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.string');
goog.require('ajax.util');
goog.require('ajax.url');
goog.require('ajax.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k6129,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__6133 = k6129;
var G__6133__$1 = (((G__6133 instanceof cljs.core.Keyword))?G__6133.fqn:null);
switch (G__6133__$1) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k6129,else__5472__auto__);

}
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__6134){
var vec__6135 = p__6134;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6135,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6135,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__6138,opts){
var self__ = this;
var map__6139 = p__6138;
var map__6139__$1 = cljs.core.__destructure_map(map__6139);
var request__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6139__$1,cljs.core.cst$kw$request);
var map__6140 = this;
var map__6140__$1 = cljs.core.__destructure_map(map__6140);
var request__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6140__$1,cljs.core.cst$kw$request);
return (request__$2.cljs$core$IFn$_invoke$arity$1 ? request__$2.cljs$core$IFn$_invoke$arity$1(opts) : request__$2.call(null,opts));
}));

(ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__6141,xhrio){
var self__ = this;
var map__6142 = p__6141;
var map__6142__$1 = cljs.core.__destructure_map(map__6142);
var response__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6142__$1,cljs.core.cst$kw$response);
var map__6143 = this;
var map__6143__$1 = cljs.core.__destructure_map(map__6143);
var response__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6143__$1,cljs.core.cst$kw$response);
return (response__$2.cljs$core$IFn$_invoke$arity$1 ? response__$2.cljs$core$IFn$_invoke$arity$1(xhrio) : response__$2.call(null,xhrio));
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#ajax.interceptors.StandardInterceptor{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$name,self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$request,self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$response,self__.response],null))], null),self__.__extmap));
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6128){
var self__ = this;
var G__6128__$1 = this;
return (new cljs.core.RecordIter((0),G__6128__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$name,cljs.core.cst$kw$request,cljs.core.cst$kw$response], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (){var fexpr__6144 = (function (coll__5466__auto__){
return (1482887116 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
});
return fexpr__6144(this__5465__auto____$1);
})();
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this6130,other6131){
var self__ = this;
var this6130__$1 = this;
return (((!((other6131 == null)))) && ((((this6130__$1.constructor === other6131.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6130__$1.name,other6131.name)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6130__$1.request,other6131.request)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6130__$1.response,other6131.response)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6130__$1.__extmap,other6131.__extmap)))))))))));
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$response,null,cljs.core.cst$kw$request,null,cljs.core.cst$kw$name,null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k6129){
var self__ = this;
var this__5476__auto____$1 = this;
var G__6145 = k6129;
var G__6145__$1 = (((G__6145 instanceof cljs.core.Keyword))?G__6145.fqn:null);
switch (G__6145__$1) {
case "name":
case "request":
case "response":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k6129);

}
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__6128){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__6146 = cljs.core.keyword_identical_QMARK_;
var expr__6147 = k__5478__auto__;
if(cljs.core.truth_((function (){var G__6149 = cljs.core.cst$kw$name;
var G__6150 = expr__6147;
return (pred__6146.cljs$core$IFn$_invoke$arity$2 ? pred__6146.cljs$core$IFn$_invoke$arity$2(G__6149,G__6150) : pred__6146.call(null,G__6149,G__6150));
})())){
return (new ajax.interceptors.StandardInterceptor(G__6128,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6151 = cljs.core.cst$kw$request;
var G__6152 = expr__6147;
return (pred__6146.cljs$core$IFn$_invoke$arity$2 ? pred__6146.cljs$core$IFn$_invoke$arity$2(G__6151,G__6152) : pred__6146.call(null,G__6151,G__6152));
})())){
return (new ajax.interceptors.StandardInterceptor(self__.name,G__6128,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6153 = cljs.core.cst$kw$response;
var G__6154 = expr__6147;
return (pred__6146.cljs$core$IFn$_invoke$arity$2 ? pred__6146.cljs$core$IFn$_invoke$arity$2(G__6153,G__6154) : pred__6146.call(null,G__6153,G__6154));
})())){
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,G__6128,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__6128),null));
}
}
}
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$name,self__.name,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$request,self__.request,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$response,self__.response,null))], null),self__.__extmap));
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__6128){
var self__ = this;
var this__5468__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,G__6128,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5475__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(ajax.interceptors.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$name,cljs.core.cst$sym$request,cljs.core.cst$sym$response], null);
}));

(ajax.interceptors.StandardInterceptor.cljs$lang$type = true);

(ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"ajax.interceptors/StandardInterceptor",null,(1),null));
}));

(ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"ajax.interceptors/StandardInterceptor");
}));

/**
 * Positional factory function for ajax.interceptors/StandardInterceptor.
 */
ajax.interceptors.__GT_StandardInterceptor = (function ajax$interceptors$__GT_StandardInterceptor(name,request,response){
return (new ajax.interceptors.StandardInterceptor(name,request,response,null,null,null));
});

/**
 * Factory function for ajax.interceptors/StandardInterceptor, taking a map of keywords to field values.
 */
ajax.interceptors.map__GT_StandardInterceptor = (function ajax$interceptors$map__GT_StandardInterceptor(G__6132){
var extmap__5511__auto__ = (function (){var G__6155 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__6132,cljs.core.cst$kw$name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$request,cljs.core.cst$kw$response], 0));
if(cljs.core.record_QMARK_(G__6132)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__6155);
} else {
return G__6155;
}
})();
return (new ajax.interceptors.StandardInterceptor(cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(G__6132),cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(G__6132),cljs.core.cst$kw$response.cljs$core$IFn$_invoke$arity$1(G__6132),null,cljs.core.not_empty(extmap__5511__auto__),null));
});

/**
 * Utility function. If you want to create your own interceptor
 * quickly, this will do the job. Note you don't need to specify
 * both methods. (Or indeed either, but it won't do much under
 * those circumstances.)
 */
ajax.interceptors.to_interceptor = (function ajax$interceptors$to_interceptor(m){
return ajax.interceptors.map__GT_StandardInterceptor(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$request,cljs.core.identity,cljs.core.cst$kw$response,cljs.core.identity], null),m], 0)));
});
ajax.interceptors.exception_message = (function ajax$interceptors$exception_message(e){
return e.message;
});
ajax.interceptors.exception_response = (function ajax$interceptors$exception_response(e,status,p__6158,xhrio){
var map__6159 = p__6158;
var map__6159__$1 = cljs.core.__destructure_map(map__6159);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6159__$1,cljs.core.cst$kw$description);
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,status,cljs.core.cst$kw$failure,cljs.core.cst$kw$error,cljs.core.cst$kw$response,null], null);
var status_text = (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.interceptors.exception_message(e))+"  Format should have been "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(description));
var parse_error = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.cst$kw$status_DASH_text,status_text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$failure,cljs.core.cst$kw$parse,cljs.core.cst$kw$original_DASH_text,ajax.protocols._body(xhrio)], 0));
if(ajax.util.success_QMARK_(status)){
return parse_error;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,cljs.core.cst$kw$status_DASH_text,ajax.protocols._status_text(xhrio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$parse_DASH_error,parse_error], 0));
}
});
ajax.interceptors.fail = (function ajax$interceptors$fail(var_args){
var args__5903__auto__ = [];
var len__5897__auto___6164 = arguments.length;
var i__5898__auto___6165 = (0);
while(true){
if((i__5898__auto___6165 < len__5897__auto___6164)){
args__5903__auto__.push((arguments[i__5898__auto___6165]));

var G__6166 = (i__5898__auto___6165 + (1));
i__5898__auto___6165 = G__6166;
continue;
} else {
}
break;
}

var argseq__5904__auto__ = ((((3) < args__5903__auto__.length))?(new cljs.core.IndexedSeq(args__5903__auto__.slice((3)),(0),null)):null);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5904__auto__);
});

(ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,status,cljs.core.cst$kw$status_DASH_text,status_text,cljs.core.cst$kw$failure,failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,response,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),params)))], null);
}));

(ajax.interceptors.fail.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(ajax.interceptors.fail.cljs$lang$applyTo = (function (seq6160){
var G__6161 = cljs.core.first(seq6160);
var seq6160__$1 = cljs.core.next(seq6160);
var G__6162 = cljs.core.first(seq6160__$1);
var seq6160__$2 = cljs.core.next(seq6160__$1);
var G__6163 = cljs.core.first(seq6160__$2);
var seq6160__$3 = cljs.core.next(seq6160__$2);
var self__5882__auto__ = this;
return self__5882__auto__.cljs$core$IFn$_invoke$arity$variadic(G__6161,G__6162,G__6163,seq6160__$3);
}));

ajax.interceptors.content_type_to_request_header = (function ajax$interceptors$content_type_to_request_header(content_type){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k6169,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__6173 = k6169;
var G__6173__$1 = (((G__6173 instanceof cljs.core.Keyword))?G__6173.fqn:null);
switch (G__6173__$1) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k6169,else__5472__auto__);

}
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__6174){
var vec__6175 = p__6174;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6175,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6175,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__6178,request){
var self__ = this;
var map__6179 = p__6178;
var map__6179__$1 = cljs.core.__destructure_map(map__6179);
var content_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6179__$1,cljs.core.cst$kw$content_DASH_type);
var map__6180 = this;
var map__6180__$1 = cljs.core.__destructure_map(map__6180);
var content_type__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6180__$1,cljs.core.cst$kw$content_DASH_type);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$headers,(function (p1__6167_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.interceptors.content_type_to_request_header(content_type__$2)], null),(function (){var or__5162__auto__ = p1__6167_SHARP_;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], 0));
}));
}));

(ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__6181,xhrio){
var self__ = this;
var map__6182 = p__6181;
var map__6182__$1 = cljs.core.__destructure_map(map__6182);
var format = map__6182__$1;
var read__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6182__$1,cljs.core.cst$kw$read);
var map__6183 = this;
var map__6183__$1 = cljs.core.__destructure_map(map__6183);
var format__$1 = map__6183__$1;
var read__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6183__$1,cljs.core.cst$kw$read);
try{var status = ajax.protocols._status(xhrio);
var fail = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ajax.interceptors.fail,status);
var G__6185 = status;
switch (G__6185) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
var G__6186 = "Request failed.";
var G__6187 = cljs.core.cst$kw$failed;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__6186,G__6187) : fail.call(null,G__6186,G__6187));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted(xhrio))){
var G__6188 = "Request aborted by client.";
var G__6189 = cljs.core.cst$kw$aborted;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__6188,G__6189) : fail.call(null,G__6188,G__6189));
} else {
var G__6190 = "Request timed out.";
var G__6191 = cljs.core.cst$kw$timeout;
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__6190,G__6191) : fail.call(null,G__6190,G__6191));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = (read__$2.cljs$core$IFn$_invoke$arity$1 ? read__$2.cljs$core$IFn$_invoke$arity$1(xhrio) : read__$2.call(null,xhrio));
if(ajax.util.success_QMARK_(status)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
var G__6193 = ajax.protocols._status_text(xhrio);
var G__6194 = cljs.core.cst$kw$error;
var G__6195 = cljs.core.cst$kw$response;
var G__6196 = response;
return (fail.cljs$core$IFn$_invoke$arity$4 ? fail.cljs$core$IFn$_invoke$arity$4(G__6193,G__6194,G__6195,G__6196) : fail.call(null,G__6193,G__6194,G__6195,G__6196));
}
}catch (e6192){if((e6192 instanceof Object)){
var e = e6192;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.interceptors.exception_response(e,status,format__$1,xhrio)], null);
} else {
throw e6192;

}
}
}
}catch (e6184){if((e6184 instanceof Object)){
var e = e6184;
var message = e.message;
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((0),message,cljs.core.cst$kw$exception,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$exception,e], 0));
} else {
throw e6184;

}
}}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#ajax.interceptors.ResponseFormat{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$read,self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$description,self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$content_DASH_type,self__.content_type],null))], null),self__.__extmap));
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6168){
var self__ = this;
var G__6168__$1 = this;
return (new cljs.core.RecordIter((0),G__6168__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$read,cljs.core.cst$kw$description,cljs.core.cst$kw$content_DASH_type], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (){var fexpr__6197 = (function (coll__5466__auto__){
return (-2103965186 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
});
return fexpr__6197(this__5465__auto____$1);
})();
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this6170,other6171){
var self__ = this;
var this6170__$1 = this;
return (((!((other6171 == null)))) && ((((this6170__$1.constructor === other6171.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6170__$1.read,other6171.read)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6170__$1.description,other6171.description)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6170__$1.content_type,other6171.content_type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6170__$1.__extmap,other6171.__extmap)))))))))));
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$description,null,cljs.core.cst$kw$read,null,cljs.core.cst$kw$content_DASH_type,null], null), null),k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k6169){
var self__ = this;
var this__5476__auto____$1 = this;
var G__6198 = k6169;
var G__6198__$1 = (((G__6198 instanceof cljs.core.Keyword))?G__6198.fqn:null);
switch (G__6198__$1) {
case "read":
case "description":
case "content-type":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k6169);

}
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__6168){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__6199 = cljs.core.keyword_identical_QMARK_;
var expr__6200 = k__5478__auto__;
if(cljs.core.truth_((function (){var G__6202 = cljs.core.cst$kw$read;
var G__6203 = expr__6200;
return (pred__6199.cljs$core$IFn$_invoke$arity$2 ? pred__6199.cljs$core$IFn$_invoke$arity$2(G__6202,G__6203) : pred__6199.call(null,G__6202,G__6203));
})())){
return (new ajax.interceptors.ResponseFormat(G__6168,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6204 = cljs.core.cst$kw$description;
var G__6205 = expr__6200;
return (pred__6199.cljs$core$IFn$_invoke$arity$2 ? pred__6199.cljs$core$IFn$_invoke$arity$2(G__6204,G__6205) : pred__6199.call(null,G__6204,G__6205));
})())){
return (new ajax.interceptors.ResponseFormat(self__.read,G__6168,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__6206 = cljs.core.cst$kw$content_DASH_type;
var G__6207 = expr__6200;
return (pred__6199.cljs$core$IFn$_invoke$arity$2 ? pred__6199.cljs$core$IFn$_invoke$arity$2(G__6206,G__6207) : pred__6199.call(null,G__6206,G__6207));
})())){
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,G__6168,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__6168),null));
}
}
}
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(cljs.core.cst$kw$read,self__.read,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$description,self__.description,null)),(new cljs.core.MapEntry(cljs.core.cst$kw$content_DASH_type,self__.content_type,null))], null),self__.__extmap));
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__6168){
var self__ = this;
var this__5468__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,G__6168,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5475__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(ajax.interceptors.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$read,cljs.core.cst$sym$description,cljs.core.cst$sym$content_DASH_type], null);
}));

(ajax.interceptors.ResponseFormat.cljs$lang$type = true);

(ajax.interceptors.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"ajax.interceptors/ResponseFormat",null,(1),null));
}));

(ajax.interceptors.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"ajax.interceptors/ResponseFormat");
}));

/**
 * Positional factory function for ajax.interceptors/ResponseFormat.
 */
ajax.interceptors.__GT_ResponseFormat = (function ajax$interceptors$__GT_ResponseFormat(read,description,content_type){
return (new ajax.interceptors.ResponseFormat(read,description,content_type,null,null,null));
});

/**
 * Factory function for ajax.interceptors/ResponseFormat, taking a map of keywords to field values.
 */
ajax.interceptors.map__GT_ResponseFormat = (function ajax$interceptors$map__GT_ResponseFormat(G__6172){
var extmap__5511__auto__ = (function (){var G__6208 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__6172,cljs.core.cst$kw$read,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$description,cljs.core.cst$kw$content_DASH_type], 0));
if(cljs.core.record_QMARK_(G__6172)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__6208);
} else {
return G__6208;
}
})();
return (new ajax.interceptors.ResponseFormat(cljs.core.cst$kw$read.cljs$core$IFn$_invoke$arity$1(G__6172),cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(G__6172),cljs.core.cst$kw$content_DASH_type.cljs$core$IFn$_invoke$arity$1(G__6172),null,cljs.core.not_empty(extmap__5511__auto__),null));
});

/**
 * Internal function. Takes whatever was provided as :request-format and 
 * converts it to a true request format. In practice, this just means it will 
 * interpret functions as formats and not change maps. Note that it throws an
 * exception when passed a keyword, because they should already have been 
 * transformed to maps.
 */
ajax.interceptors.get_request_format = (function ajax$interceptors$get_request_format(format){
if(cljs.core.map_QMARK_(format)){
return format;
} else {
if((format instanceof cljs.core.Keyword)){
return ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as request formats in ajax calls: ",format], null));
} else {
if(cljs.core.ifn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$write,format,cljs.core.cst$kw$content_DASH_type,"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
ajax.interceptors.apply_request_format = (function ajax$interceptors$apply_request_format(write,params){
return (write.cljs$core$IFn$_invoke$arity$1 ? write.cljs$core$IFn$_invoke$arity$1(params) : write.call(null,params));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k6213,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__6217 = k6213;
switch (G__6217) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k6213,else__5472__auto__);

}
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__6218){
var vec__6219 = p__6218;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6219,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6219,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__6222){
var self__ = this;
var map__6223 = p__6222;
var map__6223__$1 = cljs.core.__destructure_map(map__6223);
var request = map__6223__$1;
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6223__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6223__$1,cljs.core.cst$kw$method);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6223__$1,cljs.core.cst$kw$format);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6223__$1,cljs.core.cst$kw$params);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6223__$1,cljs.core.cst$kw$headers);
var ___$1 = this;
var map__6224 = ajax.interceptors.get_request_format(format);
var map__6224__$1 = cljs.core.__destructure_map(map__6224);
var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6224__$1,cljs.core.cst$kw$write);
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6224__$1,cljs.core.cst$kw$content_DASH_type);
var body = (((!((write == null))))?ajax.interceptors.apply_request_format(write,params):ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__5162__auto__ = headers;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,cljs.core.cst$kw$body,body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$headers,(cljs.core.truth_(content_type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(headers__$1,"Content-Type",ajax.interceptors.content_type_to_request_header(content_type)):headers__$1)], 0));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#ajax.interceptors.ApplyRequestFormat{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6212){
var self__ = this;
var G__6212__$1 = this;
return (new cljs.core.RecordIter((0),G__6212__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (){var fexpr__6225 = (function (coll__5466__auto__){
return (1698259290 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
});
return fexpr__6225(this__5465__auto____$1);
})();
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this6214,other6215){
var self__ = this;
var this6214__$1 = this;
return (((!((other6215 == null)))) && ((((this6214__$1.constructor === other6215.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6214__$1.__extmap,other6215.__extmap)))));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k6213){
var self__ = this;
var this__5476__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k6213);
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__6212){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__6226 = cljs.core.keyword_identical_QMARK_;
var expr__6227 = k__5478__auto__;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__6212),null));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__6212){
var self__ = this;
var this__5468__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(G__6212,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5475__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(ajax.interceptors.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(ajax.interceptors.ApplyRequestFormat.cljs$lang$type = true);

(ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"ajax.interceptors/ApplyRequestFormat",null,(1),null));
}));

(ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"ajax.interceptors/ApplyRequestFormat");
}));

/**
 * Positional factory function for ajax.interceptors/ApplyRequestFormat.
 */
ajax.interceptors.__GT_ApplyRequestFormat = (function ajax$interceptors$__GT_ApplyRequestFormat(){
return (new ajax.interceptors.ApplyRequestFormat(null,null,null));
});

/**
 * Factory function for ajax.interceptors/ApplyRequestFormat, taking a map of keywords to field values.
 */
ajax.interceptors.map__GT_ApplyRequestFormat = (function ajax$interceptors$map__GT_ApplyRequestFormat(G__6216){
var extmap__5511__auto__ = (function (){var G__6229 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__6216);
if(cljs.core.record_QMARK_(G__6216)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__6229);
} else {
return G__6229;
}
})();
return (new ajax.interceptors.ApplyRequestFormat(null,cljs.core.not_empty(extmap__5511__auto__),null));
});

/**
 * Internal function. Takes a uri and appends the interpretation of the query string to it
 * matching the behaviour of `url-request-format`.
 */
ajax.interceptors.uri_with_params = (function ajax$interceptors$uri_with_params(p__6231,uri){
var map__6232 = p__6231;
var map__6232__$1 = cljs.core.__destructure_map(map__6232);
var vec_strategy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6232__$1,cljs.core.cst$kw$vec_DASH_strategy);
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6232__$1,cljs.core.cst$kw$params);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6232__$1,cljs.core.cst$kw$method);
var url_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6232__$1,cljs.core.cst$kw$url_DASH_params);
var temp__5821__auto__ = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET")) && ((url_params == null))))?params:url_params);
if(cljs.core.truth_(temp__5821__auto__)){
var final_url_params = temp__5821__auto__;
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)+cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.re_find(/\?/,uri))?"&":"?"))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.url.params_to_str(vec_strategy,final_url_params)));
} else {
return uri;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.ProcessUrlParameters = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k6234,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__6238 = k6234;
switch (G__6238) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k6234,else__5472__auto__);

}
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__6239){
var vec__6240 = p__6239;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6240,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6240,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(ajax.interceptors.ProcessUrlParameters.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.interceptors.ProcessUrlParameters.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__6243){
var self__ = this;
var map__6244 = p__6243;
var map__6244__$1 = cljs.core.__destructure_map(map__6244);
var request = map__6244__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6244__$1,cljs.core.cst$kw$method);
var ___$1 = this;
var G__6245 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,cljs.core.cst$kw$uri,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ajax.interceptors.uri_with_params,request));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET")){
return cljs.core.reduced(G__6245);
} else {
return G__6245;
}
}));

(ajax.interceptors.ProcessUrlParameters.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#ajax.interceptors.ProcessUrlParameters{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6233){
var self__ = this;
var G__6233__$1 = this;
return (new cljs.core.RecordIter((0),G__6233__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new ajax.interceptors.ProcessUrlParameters(self__.__meta,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (){var fexpr__6246 = (function (coll__5466__auto__){
return (-516728758 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
});
return fexpr__6246(this__5465__auto____$1);
})();
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this6235,other6236){
var self__ = this;
var this6235__$1 = this;
return (((!((other6236 == null)))) && ((((this6235__$1.constructor === other6236.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6235__$1.__extmap,other6236.__extmap)))));
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new ajax.interceptors.ProcessUrlParameters(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k6234){
var self__ = this;
var this__5476__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k6234);
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__6233){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__6247 = cljs.core.keyword_identical_QMARK_;
var expr__6248 = k__5478__auto__;
return (new ajax.interceptors.ProcessUrlParameters(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__6233),null));
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__6233){
var self__ = this;
var this__5468__auto____$1 = this;
return (new ajax.interceptors.ProcessUrlParameters(G__6233,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5475__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(ajax.interceptors.ProcessUrlParameters.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(ajax.interceptors.ProcessUrlParameters.cljs$lang$type = true);

(ajax.interceptors.ProcessUrlParameters.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"ajax.interceptors/ProcessUrlParameters",null,(1),null));
}));

(ajax.interceptors.ProcessUrlParameters.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"ajax.interceptors/ProcessUrlParameters");
}));

/**
 * Positional factory function for ajax.interceptors/ProcessUrlParameters.
 */
ajax.interceptors.__GT_ProcessUrlParameters = (function ajax$interceptors$__GT_ProcessUrlParameters(){
return (new ajax.interceptors.ProcessUrlParameters(null,null,null));
});

/**
 * Factory function for ajax.interceptors/ProcessUrlParameters, taking a map of keywords to field values.
 */
ajax.interceptors.map__GT_ProcessUrlParameters = (function ajax$interceptors$map__GT_ProcessUrlParameters(G__6237){
var extmap__5511__auto__ = (function (){var G__6250 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__6237);
if(cljs.core.record_QMARK_(G__6237)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__6250);
} else {
return G__6250;
}
})();
return (new ajax.interceptors.ProcessUrlParameters(null,cljs.core.not_empty(extmap__5511__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
ajax.interceptors.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5469__auto__,k__5470__auto__){
var self__ = this;
var this__5469__auto____$1 = this;
return this__5469__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5470__auto__,null);
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5471__auto__,k6253,else__5472__auto__){
var self__ = this;
var this__5471__auto____$1 = this;
var G__6257 = k6253;
switch (G__6257) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k6253,else__5472__auto__);

}
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5489__auto__,f__5490__auto__,init__5491__auto__){
var self__ = this;
var this__5489__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5492__auto__,p__6258){
var vec__6259 = p__6258;
var k__5493__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6259,(0),null);
var v__5494__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6259,(1),null);
return (f__5490__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5490__auto__.cljs$core$IFn$_invoke$arity$3(ret__5492__auto__,k__5493__auto__,v__5494__auto__) : f__5490__auto__.call(null,ret__5492__auto__,k__5493__auto__,v__5494__auto__));
}),init__5491__auto__,this__5489__auto____$1);
}));

(ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__6262){
var self__ = this;
var map__6263 = p__6262;
var map__6263__$1 = cljs.core.__destructure_map(map__6263);
var request = map__6263__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6263__$1,cljs.core.cst$kw$body);
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced(request);
}
}));

(ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5484__auto__,writer__5485__auto__,opts__5486__auto__){
var self__ = this;
var this__5484__auto____$1 = this;
var pr_pair__5487__auto__ = (function (keyval__5488__auto__){
return cljs.core.pr_sequential_writer(writer__5485__auto__,cljs.core.pr_writer,""," ","",opts__5486__auto__,keyval__5488__auto__);
});
return cljs.core.pr_sequential_writer(writer__5485__auto__,pr_pair__5487__auto__,"#ajax.interceptors.DirectSubmission{",", ","}",opts__5486__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__6252){
var self__ = this;
var G__6252__$1 = this;
return (new cljs.core.RecordIter((0),G__6252__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5467__auto__){
var self__ = this;
var this__5467__auto____$1 = this;
return self__.__meta;
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5464__auto__){
var self__ = this;
var this__5464__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5473__auto__){
var self__ = this;
var this__5473__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5465__auto__){
var self__ = this;
var this__5465__auto____$1 = this;
var h__5272__auto__ = self__.__hash;
if((!((h__5272__auto__ == null)))){
return h__5272__auto__;
} else {
var h__5272__auto____$1 = (function (){var fexpr__6264 = (function (coll__5466__auto__){
return (-1077152635 ^ cljs.core.hash_unordered_coll(coll__5466__auto__));
});
return fexpr__6264(this__5465__auto____$1);
})();
(self__.__hash = h__5272__auto____$1);

return h__5272__auto____$1;
}
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this6254,other6255){
var self__ = this;
var this6254__$1 = this;
return (((!((other6255 == null)))) && ((((this6254__$1.constructor === other6255.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this6254__$1.__extmap,other6255.__extmap)))));
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5479__auto__,k__5480__auto__){
var self__ = this;
var this__5479__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__5480__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5479__auto____$1),self__.__meta),k__5480__auto__);
} else {
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5480__auto__)),null));
}
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5476__auto__,k6253){
var self__ = this;
var this__5476__auto____$1 = this;
return cljs.core.contains_QMARK_(self__.__extmap,k6253);
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5477__auto__,k__5478__auto__,G__6252){
var self__ = this;
var this__5477__auto____$1 = this;
var pred__6265 = cljs.core.keyword_identical_QMARK_;
var expr__6266 = k__5478__auto__;
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5478__auto__,G__6252),null));
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5482__auto__){
var self__ = this;
var this__5482__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5468__auto__,G__6252){
var self__ = this;
var this__5468__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(G__6252,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5474__auto__,entry__5475__auto__){
var self__ = this;
var this__5474__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5475__auto__)){
return this__5474__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5475__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__5475__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5474__auto____$1,entry__5475__auto__);
}
}));

(ajax.interceptors.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(ajax.interceptors.DirectSubmission.cljs$lang$type = true);

(ajax.interceptors.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__5515__auto__){
return (new cljs.core.List(null,"ajax.interceptors/DirectSubmission",null,(1),null));
}));

(ajax.interceptors.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__5515__auto__,writer__5516__auto__){
return cljs.core._write(writer__5516__auto__,"ajax.interceptors/DirectSubmission");
}));

/**
 * Positional factory function for ajax.interceptors/DirectSubmission.
 */
ajax.interceptors.__GT_DirectSubmission = (function ajax$interceptors$__GT_DirectSubmission(){
return (new ajax.interceptors.DirectSubmission(null,null,null));
});

/**
 * Factory function for ajax.interceptors/DirectSubmission, taking a map of keywords to field values.
 */
ajax.interceptors.map__GT_DirectSubmission = (function ajax$interceptors$map__GT_DirectSubmission(G__6256){
var extmap__5511__auto__ = (function (){var G__6268 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__6256);
if(cljs.core.record_QMARK_(G__6256)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__6268);
} else {
return G__6268;
}
})();
return (new ajax.interceptors.DirectSubmission(null,cljs.core.not_empty(extmap__5511__auto__),null));
});

ajax.interceptors.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.interceptors.ProcessUrlParameters(null,null,null)),(new ajax.interceptors.DirectSubmission(null,null,null)),(new ajax.interceptors.ApplyRequestFormat(null,null,null))], null);
ajax.interceptors.is_response_format_QMARK_ = (function ajax$interceptors$is_response_format_QMARK_(response_format){
return (response_format instanceof ajax.interceptors.ResponseFormat);
});
ajax.interceptors.get_response_format = (function ajax$interceptors$get_response_format(interpret_vector,p__6270){
var map__6271 = p__6270;
var map__6271__$1 = cljs.core.__destructure_map(map__6271);
var opts = map__6271__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6271__$1,cljs.core.cst$kw$response_DASH_format);
if(ajax.interceptors.is_response_format_QMARK_(response_format)){
return response_format;
} else {
if(cljs.core.vector_QMARK_(response_format)){
return (interpret_vector.cljs$core$IFn$_invoke$arity$1 ? interpret_vector.cljs$core$IFn$_invoke$arity$1(opts) : interpret_vector.call(null,opts));
} else {
if(cljs.core.map_QMARK_(response_format)){
return ajax.interceptors.map__GT_ResponseFormat(response_format);
} else {
if((response_format instanceof cljs.core.Keyword)){
return ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as response formats in ajax calls: ",response_format], null));
} else {
if(cljs.core.ifn_QMARK_(response_format)){
return ajax.interceptors.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$read,response_format,cljs.core.cst$kw$description,"custom",cljs.core.cst$kw$content_DASH_type,"*/*"], null));
} else {
return ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
}
});
