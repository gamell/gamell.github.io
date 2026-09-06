// Compiled by ClojureScript 1.12.145 {:static-fns true, :optimize-constants true, :elide-asserts true, :optimizations :advanced}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__5370 = e.target.readyState;
var fexpr__5369 = new cljs.core.PersistentArrayMap(null, 6, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__5369.cljs$core$IFn$_invoke$arity$1 ? fexpr__5369.cljs$core$IFn$_invoke$arity$1(G__5370) : fexpr__5369.call(null,G__5370));
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

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__5372,handler){
var map__5373 = p__5372;
var map__5373__$1 = cljs.core.__destructure_map(map__5373);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5373__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5373__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5373__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5373__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__5373__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__5373__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5373__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__5371_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__5371_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5823__auto___5390 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5823__auto___5390)){
var response_type_5391 = temp__5823__auto___5390;
(this$__$1.responseType = cljs.core.name(response_type_5391));
} else {
}

var seq__5374_5392 = cljs.core.seq(headers);
var chunk__5375_5393 = null;
var count__5376_5394 = (0);
var i__5377_5395 = (0);
while(true){
if((i__5377_5395 < count__5376_5394)){
var vec__5384_5396 = chunk__5375_5393.cljs$core$IIndexed$_nth$arity$2(null,i__5377_5395);
var k_5397 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5384_5396,(0),null);
var v_5398 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5384_5396,(1),null);
this$__$1.setRequestHeader(k_5397,v_5398);


var G__5399 = seq__5374_5392;
var G__5400 = chunk__5375_5393;
var G__5401 = count__5376_5394;
var G__5402 = (i__5377_5395 + (1));
seq__5374_5392 = G__5399;
chunk__5375_5393 = G__5400;
count__5376_5394 = G__5401;
i__5377_5395 = G__5402;
continue;
} else {
var temp__5823__auto___5403 = cljs.core.seq(seq__5374_5392);
if(temp__5823__auto___5403){
var seq__5374_5404__$1 = temp__5823__auto___5403;
if(cljs.core.chunked_seq_QMARK_(seq__5374_5404__$1)){
var c__5694__auto___5405 = cljs.core.chunk_first(seq__5374_5404__$1);
var G__5406 = cljs.core.chunk_rest(seq__5374_5404__$1);
var G__5407 = c__5694__auto___5405;
var G__5408 = cljs.core.count(c__5694__auto___5405);
var G__5409 = (0);
seq__5374_5392 = G__5406;
chunk__5375_5393 = G__5407;
count__5376_5394 = G__5408;
i__5377_5395 = G__5409;
continue;
} else {
var vec__5387_5410 = cljs.core.first(seq__5374_5404__$1);
var k_5411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5387_5410,(0),null);
var v_5412 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__5387_5410,(1),null);
this$__$1.setRequestHeader(k_5411,v_5412);


var G__5413 = cljs.core.next(seq__5374_5404__$1);
var G__5414 = null;
var G__5415 = (0);
var G__5416 = (0);
seq__5374_5392 = G__5413;
chunk__5375_5393 = G__5414;
count__5376_5394 = G__5415;
i__5377_5395 = G__5416;
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
