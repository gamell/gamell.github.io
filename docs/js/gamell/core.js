// Compiled by ClojureScript 1.10.773 {:static-fns true, :optimize-constants true, :elide-asserts true}
goog.provide('gamell.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.dom');
goog.require('re_frame.core');
goog.require('clojure.string');
goog.require('ajax.core');
gamell.core.content_url = "https://s3.amazonaws.com/gamell-io/data.json";
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$initialize,(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$content,cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$markdowns,cljs.core.PersistentArrayMap.EMPTY], null);
}));
gamell.core.load_content = (function gamell$core$load_content(){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic(gamell.core.content_url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$json,cljs.core.cst$kw$keywords_QMARK_,true,cljs.core.cst$kw$handler,(function (content){
console.log("*** CONTENT LOADED ***");

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$content_DASH_loaded,content], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$markdowns_DASH_loaded,content], null));
})], null)], 0));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$content_DASH_loaded,(function (db,p__7357){
var vec__7358 = p__7357;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7358,(0),null);
var new_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7358,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$content,cljs.core.cst$kw$data.cljs$core$IFn$_invoke$arity$1(new_content));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$markdowns_DASH_loaded,(function (db,p__7361){
var vec__7362 = p__7361;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7362,(0),null);
var new_content = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7362,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,cljs.core.cst$kw$markdowns,cljs.core.cst$kw$markdowns.cljs$core$IFn$_invoke$arity$1(new_content));
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$content,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.cst$kw$content.cljs$core$IFn$_invoke$arity$1(db);
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$markdowns,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,_){
return cljs.core.cst$kw$markdowns.cljs$core$IFn$_invoke$arity$1(db);
})], 0));
gamell.core.picture_card = (function gamell$core$picture_card(card_info){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(card_info)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,cljs.core.cst$kw$imageUrl.cljs$core$IFn$_invoke$arity$1(card_info),cljs.core.cst$kw$title,cljs.core.cst$kw$caption.cljs$core$IFn$_invoke$arity$1(card_info)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$url.cljs$core$IFn$_invoke$arity$1(card_info)], null));
});
gamell.core.repo_card = (function gamell$core$repo_card(card_info){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"wrapper"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,cljs.core.cst$kw$link.cljs$core$IFn$_invoke$arity$1(card_info)], null),cljs.core.cst$kw$name.cljs$core$IFn$_invoke$arity$1(card_info)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"description"], null),cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(card_info)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"meta"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"stars"], null),cljs.core.cst$kw$stars.cljs$core$IFn$_invoke$arity$1(card_info)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"forks"], null),cljs.core.cst$kw$forks.cljs$core$IFn$_invoke$arity$1(card_info)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$link.cljs$core$IFn$_invoke$arity$1(card_info)], null));
});
gamell.core.article_card = (function gamell$core$article_card(card_info){
gamell.core.meta_info = cljs.core.cst$kw$hybridGraph.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$embedInfo.cljs$core$IFn$_invoke$arity$1(card_info));

return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"wrapper"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"top"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,cljs.core.cst$kw$image.cljs$core$IFn$_invoke$arity$1(gamell.core.meta_info),cljs.core.cst$kw$class,"thumbnail"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"article-text"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,cljs.core.cst$kw$link.cljs$core$IFn$_invoke$arity$1(card_info)], null),cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(gamell.core.meta_info)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"description"], null),cljs.core.cst$kw$description.cljs$core$IFn$_invoke$arity$1(gamell.core.meta_info)], null)], null)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"meta"], null),"Published on",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"favicon",cljs.core.cst$kw$src,cljs.core.cst$kw$favicon.cljs$core$IFn$_invoke$arity$1(gamell.core.meta_info)], null)], null),"on",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"date"], null),cljs.core.cst$kw$date.cljs$core$IFn$_invoke$arity$1(card_info)], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$link.cljs$core$IFn$_invoke$arity$1(card_info)], null));
});
gamell.core.type_map = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$pictures,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$card,gamell.core.picture_card,cljs.core.cst$kw$class,"photography",cljs.core.cst$kw$title,"Recent Pictures"], null),cljs.core.cst$kw$repos,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$card,gamell.core.repo_card,cljs.core.cst$kw$class,"projects",cljs.core.cst$kw$title,"Favorite Projects"], null),cljs.core.cst$kw$articles,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$card,gamell.core.article_card,cljs.core.cst$kw$class,"articles",cljs.core.cst$kw$title,"Recent Writings"], null)], null);
gamell.core.get_class = (function gamell$core$get_class(type){
return cljs.core.cst$kw$class.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(gamell.core.type_map,type));
});
gamell.core.get_card = (function gamell$core$get_card(type){
if(cljs.core.contains_QMARK_(gamell.core.type_map,type)){
return cljs.core.cst$kw$card.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(gamell.core.type_map,type));
} else {
return null;
}
});
gamell.core.card = (function gamell$core$card(type,card_info,id){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li$card,(function (){var fexpr__7365 = gamell.core.get_card(type);
return (fexpr__7365.cljs$core$IFn$_invoke$arity$1 ? fexpr__7365.cljs$core$IFn$_invoke$arity$1(card_info) : fexpr__7365.call(null,card_info));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,["update-card-",cljs.core.name(type),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null));
});
gamell.core.contact_markdown = (function gamell$core$contact_markdown(data,id){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"contact"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,"contact"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Contact information"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$contact_DASH_markdown,(function (){var markdowns = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$markdowns], null)));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,cljs.core.cst$kw$contact.cljs$core$IFn$_invoke$arity$1(markdowns)], null)], null);
})()], null)], null);
});
gamell.core.articles_header = (function gamell$core$articles_header(){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"articles-subtitle"], null),"You will find more of my writings at ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://substack.graymatters.com"], null),"Gray Matters \uD83E\uDDE0"], null)," and ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,"https://medium.com/@gamell"], null),"Medium"], null),"."], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,"articles-header"], null));
});
gamell.core.content_section = (function gamell$core$content_section(type,data,id){
var class$ = gamell.core.get_class(type);
var title = cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(gamell.core.type_map,type));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$section,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,class$], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$name,class$], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,title], null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,cljs.core.cst$kw$articles))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gamell.core.articles_header], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul$section,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,class$], null),cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__7366_SHARP_,p2__7367_SHARP_){
return gamell.core.card(type,p1__7366_SHARP_,p2__7367_SHARP_);
}),data,cljs.core.iterate(cljs.core.inc,(0)))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null));
});
gamell.core.sections = (function gamell$core$sections(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$sections,(function (){var content = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$content], null)));
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p__7368,id){
var vec__7369 = p__7368;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7369,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__7369,(1),null);
return gamell.core.content_section(type,data,id);
}),content,cljs.core.iterate(cljs.core.inc,(0)));
})()], null);
});
gamell.core.intro_markdown = (function gamell$core$intro_markdown(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$intro,(function (){var markdowns = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$markdowns], null)));
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,cljs.core.cst$kw$intro.cljs$core$IFn$_invoke$arity$1(markdowns)], null)], null);
})()], null);
});
gamell.core.announcements_markdown = (function gamell$core$announcements_markdown(){
var markdowns = cljs.core.deref(re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$markdowns], null)));
var announcement_content = cljs.core.cst$kw$announcements.cljs$core$IFn$_invoke$arity$1(markdowns);
if((((!((announcement_content == null)))) && ((cljs.core.count(announcement_content) > (0))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div$announcements,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Special Announcement"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,announcement_content], null),cljs.core.cst$kw$class,"content"], null)], null)], null);
} else {
return null;
}
});
gamell.core.footer = (function gamell$core$footer(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"footer"], null),"Made with ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$src,"img/cljs.png",cljs.core.cst$kw$class,"icon",cljs.core.cst$kw$alt,"ClojureScript"], null)], null)," and ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$src,"img/reframe.png",cljs.core.cst$kw$class,"icon",cljs.core.cst$kw$alt,"Re-Fraame"], null)], null)], null);
});
gamell.core.app = (function gamell$core$app(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div_SHARP_app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gamell.core.intro_markdown], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gamell.core.announcements_markdown], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gamell.core.sections], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gamell.core.contact_markdown], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gamell.core.footer], null)], null);
});
gamell.core.run = (function gamell$core$run(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$initialize], null));

gamell.core.load_content();

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [gamell.core.app], null),document.getElementById("mount-point"));
});
goog.exportSymbol('gamell.core.run', gamell.core.run);
