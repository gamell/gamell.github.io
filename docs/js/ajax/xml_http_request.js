// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__7025 = e.target.readyState;
var fexpr__7024 = new cljs.core.PersistentArrayMap(null, 6, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready,cljs.core.cst$kw$cljs$analyzer_SLASH_analyzed,true], null);
return (fexpr__7024.cljs$core$IFn$_invoke$arity$1 ? fexpr__7024.cljs$core$IFn$_invoke$arity$1(G__7025) : fexpr__7024.call(null,G__7025));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
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
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__7027,handler){
var map__7028 = p__7027;
var map__7028__$1 = (((((!((map__7028 == null))))?(((((map__7028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__7028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__7028):map__7028);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7028__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7028__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7028__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7028__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__7028__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__7028__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__7028__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__7026_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__7026_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___7046 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___7046)){
var response_type_7047 = temp__5735__auto___7046;
(this$__$1.responseType = cljs.core.name(response_type_7047));
} else {
}

var seq__7030_7048 = cljs.core.seq(headers);
var chunk__7031_7049 = null;
var count__7032_7050 = (0);
var i__7033_7051 = (0);
while(true){
if((i__7033_7051 < count__7032_7050)){
var vec__7040_7052 = chunk__7031_7049.cljs$core$IIndexed$_nth$arity$2(null,i__7033_7051);
var k_7053 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7040_7052,(0),null);
var v_7054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7040_7052,(1),null);
this$__$1.setRequestHeader(k_7053,v_7054);


var G__7055 = seq__7030_7048;
var G__7056 = chunk__7031_7049;
var G__7057 = count__7032_7050;
var G__7058 = (i__7033_7051 + (1));
seq__7030_7048 = G__7055;
chunk__7031_7049 = G__7056;
count__7032_7050 = G__7057;
i__7033_7051 = G__7058;
continue;
} else {
var temp__5735__auto___7059 = cljs.core.seq(seq__7030_7048);
if(temp__5735__auto___7059){
var seq__7030_7060__$1 = temp__5735__auto___7059;
if(cljs.core.chunked_seq_QMARK_(seq__7030_7060__$1)){
var c__4556__auto___7061 = cljs.core.chunk_first(seq__7030_7060__$1);
var G__7062 = cljs.core.chunk_rest(seq__7030_7060__$1);
var G__7063 = c__4556__auto___7061;
var G__7064 = cljs.core.count(c__4556__auto___7061);
var G__7065 = (0);
seq__7030_7048 = G__7062;
chunk__7031_7049 = G__7063;
count__7032_7050 = G__7064;
i__7033_7051 = G__7065;
continue;
} else {
var vec__7043_7066 = cljs.core.first(seq__7030_7060__$1);
var k_7067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7043_7066,(0),null);
var v_7068 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7043_7066,(1),null);
this$__$1.setRequestHeader(k_7067,v_7068);


var G__7069 = cljs.core.next(seq__7030_7060__$1);
var G__7070 = null;
var G__7071 = (0);
var G__7072 = (0);
seq__7030_7048 = G__7069;
chunk__7031_7049 = G__7070;
count__7032_7050 = G__7071;
i__7033_7051 = G__7072;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4126__auto__ = body;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
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
