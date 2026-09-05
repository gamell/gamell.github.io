// Compiled by ClojureScript 1.12.145 {:static-fns true, :optimize-constants true, :elide-asserts true, :optimizations :advanced}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__6239 = e.target.readyState;
var fexpr__6238 = new cljs.core.PersistentArrayMap(null, 6, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__6238.cljs$core$IFn$_invoke$arity$1 ? fexpr__6238.cljs$core$IFn$_invoke$arity$1(G__6239) : fexpr__6238.call(null,G__6239));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return (""+cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)+", "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(next));
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(goog.string.isEmptyOrWhitespace(header_line)){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__6241,handler){
var map__6242 = p__6241;
var map__6242__$1 = cljs.core.__destructure_map(map__6242);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6242__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6242__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6242__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6242__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__6242__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__6242__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__6242__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__6240_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__6240_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5823__auto___6259 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5823__auto___6259)){
var response_type_6260 = temp__5823__auto___6259;
(this$__$1.responseType = cljs.core.name(response_type_6260));
} else {
}

var seq__6243_6261 = cljs.core.seq(headers);
var chunk__6244_6262 = null;
var count__6245_6263 = (0);
var i__6246_6264 = (0);
while(true){
if((i__6246_6264 < count__6245_6263)){
var vec__6253_6265 = chunk__6244_6262.cljs$core$IIndexed$_nth$arity$2(null,i__6246_6264);
var k_6266 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6253_6265,(0),null);
var v_6267 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6253_6265,(1),null);
this$__$1.setRequestHeader(k_6266,v_6267);


var G__6268 = seq__6243_6261;
var G__6269 = chunk__6244_6262;
var G__6270 = count__6245_6263;
var G__6271 = (i__6246_6264 + (1));
seq__6243_6261 = G__6268;
chunk__6244_6262 = G__6269;
count__6245_6263 = G__6270;
i__6246_6264 = G__6271;
continue;
} else {
var temp__5823__auto___6272 = cljs.core.seq(seq__6243_6261);
if(temp__5823__auto___6272){
var seq__6243_6273__$1 = temp__5823__auto___6272;
if(cljs.core.chunked_seq_QMARK_(seq__6243_6273__$1)){
var c__5694__auto___6274 = cljs.core.chunk_first(seq__6243_6273__$1);
var G__6275 = cljs.core.chunk_rest(seq__6243_6273__$1);
var G__6276 = c__5694__auto___6274;
var G__6277 = cljs.core.count(c__5694__auto___6274);
var G__6278 = (0);
seq__6243_6261 = G__6275;
chunk__6244_6262 = G__6276;
count__6245_6263 = G__6277;
i__6246_6264 = G__6278;
continue;
} else {
var vec__6256_6279 = cljs.core.first(seq__6243_6273__$1);
var k_6280 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6256_6279,(0),null);
var v_6281 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__6256_6279,(1),null);
this$__$1.setRequestHeader(k_6280,v_6281);


var G__6282 = cljs.core.next(seq__6243_6273__$1);
var G__6283 = null;
var G__6284 = (0);
var G__6285 = (0);
seq__6243_6261 = G__6282;
chunk__6244_6262 = G__6283;
count__6245_6263 = G__6284;
i__6246_6264 = G__6285;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5162__auto__ = body;
if(cljs.core.truth_(or__5162__auto__)){
return or__5162__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));
