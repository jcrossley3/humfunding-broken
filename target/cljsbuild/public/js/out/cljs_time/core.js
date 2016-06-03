// Compiled by ClojureScript 1.8.40 {:static-fns true, :optimize-constants true}
goog.provide('cljs_time.core');
goog.require('cljs.core');
goog.require('cljs_time.internal.core');
goog.require('clojure.string');
goog.require('goog.date.Date');
goog.require('goog.date.DateTime');
goog.require('goog.date.UtcDateTime');
goog.require('goog.i18n.TimeZone');
cljs_time.core._STAR_sys_time_STAR_ = null;
cljs_time.core._EQ_ = cljs_time.internal.core._EQ_;

/**
 * Interface for various date time functions
 * @interface
 */
cljs_time.core.DateTimeProtocol = function(){};

/**
 * Return the year component of the given date/time.
 */
cljs_time.core.year = (function cljs_time$core$year(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$year$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$year$arity$1(this$);
} else {
var x__6779__auto__ = (((this$ == null))?null:this$);
var m__6780__auto__ = (cljs_time.core.year[goog.typeOf(x__6779__auto__)]);
if(!((m__6780__auto__ == null))){
return (m__6780__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto__.call(null,this$));
} else {
var m__6780__auto____$1 = (cljs_time.core.year["_"]);
if(!((m__6780__auto____$1 == null))){
return (m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.year",this$);
}
}
}
});

/**
 * Return the month component of the given date/time.
 */
cljs_time.core.month = (function cljs_time$core$month(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$month$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$month$arity$1(this$);
} else {
var x__6779__auto__ = (((this$ == null))?null:this$);
var m__6780__auto__ = (cljs_time.core.month[goog.typeOf(x__6779__auto__)]);
if(!((m__6780__auto__ == null))){
return (m__6780__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto__.call(null,this$));
} else {
var m__6780__auto____$1 = (cljs_time.core.month["_"]);
if(!((m__6780__auto____$1 == null))){
return (m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.month",this$);
}
}
}
});

/**
 * Return the day of month component of the given date/time.
 */
cljs_time.core.day = (function cljs_time$core$day(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$day$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$day$arity$1(this$);
} else {
var x__6779__auto__ = (((this$ == null))?null:this$);
var m__6780__auto__ = (cljs_time.core.day[goog.typeOf(x__6779__auto__)]);
if(!((m__6780__auto__ == null))){
return (m__6780__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto__.call(null,this$));
} else {
var m__6780__auto____$1 = (cljs_time.core.day["_"]);
if(!((m__6780__auto____$1 == null))){
return (m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.day",this$);
}
}
}
});

/**
 * Return the day of week component of the given date/time. Monday is 1 and Sunday is 7
 */
cljs_time.core.day_of_week = (function cljs_time$core$day_of_week(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$day_of_week$arity$1(this$);
} else {
var x__6779__auto__ = (((this$ == null))?null:this$);
var m__6780__auto__ = (cljs_time.core.day_of_week[goog.typeOf(x__6779__auto__)]);
if(!((m__6780__auto__ == null))){
return (m__6780__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto__.call(null,this$));
} else {
var m__6780__auto____$1 = (cljs_time.core.day_of_week["_"]);
if(!((m__6780__auto____$1 == null))){
return (m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.day-of-week",this$);
}
}
}
});

/**
 * Return the hour of day component of the given date/time. A time of 12:01am will have an hour component of 0.
 */
cljs_time.core.hour = (function cljs_time$core$hour(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$hour$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$hour$arity$1(this$);
} else {
var x__6779__auto__ = (((this$ == null))?null:this$);
var m__6780__auto__ = (cljs_time.core.hour[goog.typeOf(x__6779__auto__)]);
if(!((m__6780__auto__ == null))){
return (m__6780__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto__.call(null,this$));
} else {
var m__6780__auto____$1 = (cljs_time.core.hour["_"]);
if(!((m__6780__auto____$1 == null))){
return (m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.hour",this$);
}
}
}
});

/**
 * Return the minute of hour component of the given date/time.
 */
cljs_time.core.minute = (function cljs_time$core$minute(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$minute$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$minute$arity$1(this$);
} else {
var x__6779__auto__ = (((this$ == null))?null:this$);
var m__6780__auto__ = (cljs_time.core.minute[goog.typeOf(x__6779__auto__)]);
if(!((m__6780__auto__ == null))){
return (m__6780__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto__.call(null,this$));
} else {
var m__6780__auto____$1 = (cljs_time.core.minute["_"]);
if(!((m__6780__auto____$1 == null))){
return (m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.minute",this$);
}
}
}
});

/**
 * Return the second of minute component of the given date/time.
 */
cljs_time.core.sec = (function cljs_time$core$sec(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$sec$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$sec$arity$1(this$);
} else {
var x__6779__auto__ = (((this$ == null))?null:this$);
var m__6780__auto__ = (cljs_time.core.sec[goog.typeOf(x__6779__auto__)]);
if(!((m__6780__auto__ == null))){
return (m__6780__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto__.call(null,this$));
} else {
var m__6780__auto____$1 = (cljs_time.core.sec["_"]);
if(!((m__6780__auto____$1 == null))){
return (m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.sec",this$);
}
}
}
});

/**
 * Return the second of minute component of the given date/time.
 */
cljs_time.core.second = (function cljs_time$core$second(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$second$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$second$arity$1(this$);
} else {
var x__6779__auto__ = (((this$ == null))?null:this$);
var m__6780__auto__ = (cljs_time.core.second[goog.typeOf(x__6779__auto__)]);
if(!((m__6780__auto__ == null))){
return (m__6780__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto__.call(null,this$));
} else {
var m__6780__auto____$1 = (cljs_time.core.second["_"]);
if(!((m__6780__auto____$1 == null))){
return (m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.second",this$);
}
}
}
});

/**
 * Return the millisecond of second component of the given date/time.
 */
cljs_time.core.milli = (function cljs_time$core$milli(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$milli$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$milli$arity$1(this$);
} else {
var x__6779__auto__ = (((this$ == null))?null:this$);
var m__6780__auto__ = (cljs_time.core.milli[goog.typeOf(x__6779__auto__)]);
if(!((m__6780__auto__ == null))){
return (m__6780__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto__.call(null,this$));
} else {
var m__6780__auto____$1 = (cljs_time.core.milli["_"]);
if(!((m__6780__auto____$1 == null))){
return (m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.milli",this$);
}
}
}
});

/**
 * Returns true if ReadableDateTime 'this' is strictly after date/time 'that'.
 */
cljs_time.core.after_QMARK_ = (function cljs_time$core$after_QMARK_(this$,that){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2(this$,that);
} else {
var x__6779__auto__ = (((this$ == null))?null:this$);
var m__6780__auto__ = (cljs_time.core.after_QMARK_[goog.typeOf(x__6779__auto__)]);
if(!((m__6780__auto__ == null))){
return (m__6780__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6780__auto__.cljs$core$IFn$_invoke$arity$2(this$,that) : m__6780__auto__.call(null,this$,that));
} else {
var m__6780__auto____$1 = (cljs_time.core.after_QMARK_["_"]);
if(!((m__6780__auto____$1 == null))){
return (m__6780__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6780__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,that) : m__6780__auto____$1.call(null,this$,that));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.after?",this$);
}
}
}
});

/**
 * Returns true if ReadableDateTime 'this' is strictly before date/time 'that'.
 */
cljs_time.core.before_QMARK_ = (function cljs_time$core$before_QMARK_(this$,that){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2(this$,that);
} else {
var x__6779__auto__ = (((this$ == null))?null:this$);
var m__6780__auto__ = (cljs_time.core.before_QMARK_[goog.typeOf(x__6779__auto__)]);
if(!((m__6780__auto__ == null))){
return (m__6780__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6780__auto__.cljs$core$IFn$_invoke$arity$2(this$,that) : m__6780__auto__.call(null,this$,that));
} else {
var m__6780__auto____$1 = (cljs_time.core.before_QMARK_["_"]);
if(!((m__6780__auto____$1 == null))){
return (m__6780__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6780__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,that) : m__6780__auto____$1.call(null,this$,that));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.before?",this$);
}
}
}
});

/**
 * Returns a new date/time corresponding to the given date/time moved forwards by the given Period(s).
 */
cljs_time.core.plus_ = (function cljs_time$core$plus_(this$,period){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$plus_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$plus_$arity$2(this$,period);
} else {
var x__6779__auto__ = (((this$ == null))?null:this$);
var m__6780__auto__ = (cljs_time.core.plus_[goog.typeOf(x__6779__auto__)]);
if(!((m__6780__auto__ == null))){
return (m__6780__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6780__auto__.cljs$core$IFn$_invoke$arity$2(this$,period) : m__6780__auto__.call(null,this$,period));
} else {
var m__6780__auto____$1 = (cljs_time.core.plus_["_"]);
if(!((m__6780__auto____$1 == null))){
return (m__6780__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6780__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,period) : m__6780__auto____$1.call(null,this$,period));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.plus-",this$);
}
}
}
});

/**
 * Returns a new date/time corresponding to the given date/time moved backwards by the given Period(s).
 */
cljs_time.core.minus_ = (function cljs_time$core$minus_(this$,period){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$minus_$arity$2 == null)))){
return this$.cljs_time$core$DateTimeProtocol$minus_$arity$2(this$,period);
} else {
var x__6779__auto__ = (((this$ == null))?null:this$);
var m__6780__auto__ = (cljs_time.core.minus_[goog.typeOf(x__6779__auto__)]);
if(!((m__6780__auto__ == null))){
return (m__6780__auto__.cljs$core$IFn$_invoke$arity$2 ? m__6780__auto__.cljs$core$IFn$_invoke$arity$2(this$,period) : m__6780__auto__.call(null,this$,period));
} else {
var m__6780__auto____$1 = (cljs_time.core.minus_["_"]);
if(!((m__6780__auto____$1 == null))){
return (m__6780__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__6780__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,period) : m__6780__auto____$1.call(null,this$,period));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.minus-",this$);
}
}
}
});

/**
 * Returns the first day of the month
 */
cljs_time.core.first_day_of_the_month_ = (function cljs_time$core$first_day_of_the_month_(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1(this$);
} else {
var x__6779__auto__ = (((this$ == null))?null:this$);
var m__6780__auto__ = (cljs_time.core.first_day_of_the_month_[goog.typeOf(x__6779__auto__)]);
if(!((m__6780__auto__ == null))){
return (m__6780__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto__.call(null,this$));
} else {
var m__6780__auto____$1 = (cljs_time.core.first_day_of_the_month_["_"]);
if(!((m__6780__auto____$1 == null))){
return (m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.first-day-of-the-month-",this$);
}
}
}
});

/**
 * Returns the last day of the month
 */
cljs_time.core.last_day_of_the_month_ = (function cljs_time$core$last_day_of_the_month_(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 == null)))){
return this$.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1(this$);
} else {
var x__6779__auto__ = (((this$ == null))?null:this$);
var m__6780__auto__ = (cljs_time.core.last_day_of_the_month_[goog.typeOf(x__6779__auto__)]);
if(!((m__6780__auto__ == null))){
return (m__6780__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto__.call(null,this$));
} else {
var m__6780__auto____$1 = (cljs_time.core.last_day_of_the_month_["_"]);
if(!((m__6780__auto____$1 == null))){
return (m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("DateTimeProtocol.last-day-of-the-month-",this$);
}
}
}
});


/**
 * Interface for in-<time unit> functions
 * @interface
 */
cljs_time.core.InTimeUnitProtocol = function(){};

/**
 * Return the time in milliseconds.
 */
cljs_time.core.in_millis = (function cljs_time$core$in_millis(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1(this$);
} else {
var x__6779__auto__ = (((this$ == null))?null:this$);
var m__6780__auto__ = (cljs_time.core.in_millis[goog.typeOf(x__6779__auto__)]);
if(!((m__6780__auto__ == null))){
return (m__6780__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto__.call(null,this$));
} else {
var m__6780__auto____$1 = (cljs_time.core.in_millis["_"]);
if(!((m__6780__auto____$1 == null))){
return (m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-millis",this$);
}
}
}
});

/**
 * Return the time in seconds.
 */
cljs_time.core.in_seconds = (function cljs_time$core$in_seconds(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1(this$);
} else {
var x__6779__auto__ = (((this$ == null))?null:this$);
var m__6780__auto__ = (cljs_time.core.in_seconds[goog.typeOf(x__6779__auto__)]);
if(!((m__6780__auto__ == null))){
return (m__6780__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto__.call(null,this$));
} else {
var m__6780__auto____$1 = (cljs_time.core.in_seconds["_"]);
if(!((m__6780__auto____$1 == null))){
return (m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-seconds",this$);
}
}
}
});

/**
 * Return the time in minutes.
 */
cljs_time.core.in_minutes = (function cljs_time$core$in_minutes(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1(this$);
} else {
var x__6779__auto__ = (((this$ == null))?null:this$);
var m__6780__auto__ = (cljs_time.core.in_minutes[goog.typeOf(x__6779__auto__)]);
if(!((m__6780__auto__ == null))){
return (m__6780__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto__.call(null,this$));
} else {
var m__6780__auto____$1 = (cljs_time.core.in_minutes["_"]);
if(!((m__6780__auto____$1 == null))){
return (m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-minutes",this$);
}
}
}
});

/**
 * Return the time in hours.
 */
cljs_time.core.in_hours = (function cljs_time$core$in_hours(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1(this$);
} else {
var x__6779__auto__ = (((this$ == null))?null:this$);
var m__6780__auto__ = (cljs_time.core.in_hours[goog.typeOf(x__6779__auto__)]);
if(!((m__6780__auto__ == null))){
return (m__6780__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto__.call(null,this$));
} else {
var m__6780__auto____$1 = (cljs_time.core.in_hours["_"]);
if(!((m__6780__auto____$1 == null))){
return (m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-hours",this$);
}
}
}
});

/**
 * Return the time in days.
 */
cljs_time.core.in_days = (function cljs_time$core$in_days(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_days$arity$1(this$);
} else {
var x__6779__auto__ = (((this$ == null))?null:this$);
var m__6780__auto__ = (cljs_time.core.in_days[goog.typeOf(x__6779__auto__)]);
if(!((m__6780__auto__ == null))){
return (m__6780__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto__.call(null,this$));
} else {
var m__6780__auto____$1 = (cljs_time.core.in_days["_"]);
if(!((m__6780__auto____$1 == null))){
return (m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-days",this$);
}
}
}
});

/**
 * Return the time in weeks
 */
cljs_time.core.in_weeks = (function cljs_time$core$in_weeks(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1(this$);
} else {
var x__6779__auto__ = (((this$ == null))?null:this$);
var m__6780__auto__ = (cljs_time.core.in_weeks[goog.typeOf(x__6779__auto__)]);
if(!((m__6780__auto__ == null))){
return (m__6780__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto__.call(null,this$));
} else {
var m__6780__auto____$1 = (cljs_time.core.in_weeks["_"]);
if(!((m__6780__auto____$1 == null))){
return (m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-weeks",this$);
}
}
}
});

/**
 * Return the time in months
 */
cljs_time.core.in_months = (function cljs_time$core$in_months(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_months$arity$1(this$);
} else {
var x__6779__auto__ = (((this$ == null))?null:this$);
var m__6780__auto__ = (cljs_time.core.in_months[goog.typeOf(x__6779__auto__)]);
if(!((m__6780__auto__ == null))){
return (m__6780__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto__.call(null,this$));
} else {
var m__6780__auto____$1 = (cljs_time.core.in_months["_"]);
if(!((m__6780__auto____$1 == null))){
return (m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-months",this$);
}
}
}
});

/**
 * Return the time in years
 */
cljs_time.core.in_years = (function cljs_time$core$in_years(this$){
if((!((this$ == null))) && (!((this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 == null)))){
return this$.cljs_time$core$InTimeUnitProtocol$in_years$arity$1(this$);
} else {
var x__6779__auto__ = (((this$ == null))?null:this$);
var m__6780__auto__ = (cljs_time.core.in_years[goog.typeOf(x__6779__auto__)]);
if(!((m__6780__auto__ == null))){
return (m__6780__auto__.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto__.call(null,this$));
} else {
var m__6780__auto____$1 = (cljs_time.core.in_years["_"]);
if(!((m__6780__auto____$1 == null))){
return (m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__6780__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__6780__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("InTimeUnitProtocol.in-years",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
cljs_time.core.Interval = (function (start,end,__meta,__extmap,__hash){
this.start = start;
this.end = end;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6738__auto__,k__6739__auto__){
var self__ = this;
var this__6738__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6738__auto____$1,k__6739__auto__,null);
});

cljs_time.core.Interval.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6740__auto__,k14375,else__6741__auto__){
var self__ = this;
var this__6740__auto____$1 = this;
var G__14377 = (((k14375 instanceof cljs.core.Keyword))?k14375.fqn:null);
switch (G__14377) {
case "start":
return self__.start;

break;
case "end":
return self__.end;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14375,else__6741__auto__);

}
});

cljs_time.core.Interval.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6752__auto__,writer__6753__auto__,opts__6754__auto__){
var self__ = this;
var this__6752__auto____$1 = this;
var pr_pair__6755__auto__ = ((function (this__6752__auto____$1){
return (function (keyval__6756__auto__){
return cljs.core.pr_sequential_writer(writer__6753__auto__,cljs.core.pr_writer,""," ","",opts__6754__auto__,keyval__6756__auto__);
});})(this__6752__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6753__auto__,pr_pair__6755__auto__,"#cljs-time.core.Interval{",", ","}",opts__6754__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start,self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end,self__.end],null))], null),self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IIterable$ = true;

cljs_time.core.Interval.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14374){
var self__ = this;
var G__14374__$1 = this;
return (new cljs.core.RecordIter((0),G__14374__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$start,cljs.core.cst$kw$end], null),cljs.core._iterator(self__.__extmap)));
});

cljs_time.core.Interval.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6736__auto__){
var self__ = this;
var this__6736__auto____$1 = this;
return self__.__meta;
});

cljs_time.core.Interval.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6732__auto__){
var self__ = this;
var this__6732__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.core.Interval.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6742__auto__){
var self__ = this;
var this__6742__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6733__auto__){
var self__ = this;
var this__6733__auto____$1 = this;
var h__6551__auto__ = self__.__hash;
if(!((h__6551__auto__ == null))){
return h__6551__auto__;
} else {
var h__6551__auto____$1 = cljs.core.hash_imap(this__6733__auto____$1);
self__.__hash = h__6551__auto____$1;

return h__6551__auto____$1;
}
});

cljs_time.core.Interval.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6734__auto__,other__6735__auto__){
var self__ = this;
var this__6734__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6104__auto__ = other__6735__auto__;
if(cljs.core.truth_(and__6104__auto__)){
var and__6104__auto____$1 = (this__6734__auto____$1.constructor === other__6735__auto__.constructor);
if(and__6104__auto____$1){
return cljs.core.equiv_map(this__6734__auto____$1,other__6735__auto__);
} else {
return and__6104__auto____$1;
}
} else {
return and__6104__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs_time.core.Interval.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6747__auto__,k__6748__auto__){
var self__ = this;
var this__6747__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$start,null,cljs.core.cst$kw$end,null], null), null),k__6748__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6747__auto____$1),self__.__meta),k__6748__auto__);
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6748__auto__)),null));
}
});

cljs_time.core.Interval.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6745__auto__,k__6746__auto__,G__14374){
var self__ = this;
var this__6745__auto____$1 = this;
var pred__14378 = cljs.core.keyword_identical_QMARK_;
var expr__14379 = k__6746__auto__;
if(cljs.core.truth_((pred__14378.cljs$core$IFn$_invoke$arity$2 ? pred__14378.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$start,expr__14379) : pred__14378.call(null,cljs.core.cst$kw$start,expr__14379)))){
return (new cljs_time.core.Interval(G__14374,self__.end,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14378.cljs$core$IFn$_invoke$arity$2 ? pred__14378.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$end,expr__14379) : pred__14378.call(null,cljs.core.cst$kw$end,expr__14379)))){
return (new cljs_time.core.Interval(self__.start,G__14374,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Interval(self__.start,self__.end,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6746__auto__,G__14374),null));
}
}
});

cljs_time.core.Interval.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6750__auto__){
var self__ = this;
var this__6750__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$start,self__.start],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$end,self__.end],null))], null),self__.__extmap));
});

cljs_time.core.Interval.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6737__auto__,G__14374){
var self__ = this;
var this__6737__auto____$1 = this;
return (new cljs_time.core.Interval(self__.start,self__.end,G__14374,self__.__extmap,self__.__hash));
});

cljs_time.core.Interval.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6743__auto__,entry__6744__auto__){
var self__ = this;
var this__6743__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6744__auto__)){
return cljs.core._assoc(this__6743__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6744__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6744__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6743__auto____$1,entry__6744__auto__);
}
});

cljs_time.core.Interval.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$start,cljs.core.cst$sym$end], null);
});

cljs_time.core.Interval.cljs$lang$type = true;

cljs_time.core.Interval.cljs$lang$ctorPrSeq = (function (this__6772__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs-time.core/Interval");
});

cljs_time.core.Interval.cljs$lang$ctorPrWriter = (function (this__6772__auto__,writer__6773__auto__){
return cljs.core._write(writer__6773__auto__,"cljs-time.core/Interval");
});

cljs_time.core.__GT_Interval = (function cljs_time$core$__GT_Interval(start,end){
return (new cljs_time.core.Interval(start,end,null,null,null));
});

cljs_time.core.map__GT_Interval = (function cljs_time$core$map__GT_Interval(G__14376){
return (new cljs_time.core.Interval(cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(G__14376),cljs.core.cst$kw$end.cljs$core$IFn$_invoke$arity$1(G__14376),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14376,cljs.core.cst$kw$start,cljs.core.array_seq([cljs.core.cst$kw$end], 0)),null));
});

/**
 * Returns an interval representing the span between the two given ReadableDateTimes.
 *   Note that intervals are closed on the left and open on the right.
 */
cljs_time.core.interval = (function cljs_time$core$interval(start,end){
if((start.getTime() <= end.getTime())){
} else {
throw (new Error("Assert failed: (<= (.getTime start) (.getTime end))"));
}

return cljs_time.core.__GT_Interval(start,end);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
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
cljs_time.core.Period = (function (years,months,weeks,days,hours,minutes,seconds,millis,__meta,__extmap,__hash){
this.years = years;
this.months = months;
this.weeks = weeks;
this.days = days;
this.hours = hours;
this.minutes = minutes;
this.seconds = seconds;
this.millis = millis;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__6738__auto__,k__6739__auto__){
var self__ = this;
var this__6738__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__6738__auto____$1,k__6739__auto__,null);
});

cljs_time.core.Period.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__6740__auto__,k14383,else__6741__auto__){
var self__ = this;
var this__6740__auto____$1 = this;
var G__14385 = (((k14383 instanceof cljs.core.Keyword))?k14383.fqn:null);
switch (G__14385) {
case "years":
return self__.years;

break;
case "months":
return self__.months;

break;
case "weeks":
return self__.weeks;

break;
case "days":
return self__.days;

break;
case "hours":
return self__.hours;

break;
case "minutes":
return self__.minutes;

break;
case "seconds":
return self__.seconds;

break;
case "millis":
return self__.millis;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k14383,else__6741__auto__);

}
});

cljs_time.core.Period.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__6752__auto__,writer__6753__auto__,opts__6754__auto__){
var self__ = this;
var this__6752__auto____$1 = this;
var pr_pair__6755__auto__ = ((function (this__6752__auto____$1){
return (function (keyval__6756__auto__){
return cljs.core.pr_sequential_writer(writer__6753__auto__,cljs.core.pr_writer,""," ","",opts__6754__auto__,keyval__6756__auto__);
});})(this__6752__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__6753__auto__,pr_pair__6755__auto__,"#cljs-time.core.Period{",", ","}",opts__6754__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$years,self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$months,self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$weeks,self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$days,self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$hours,self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$minutes,self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seconds,self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$millis,self__.millis],null))], null),self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IIterable$ = true;

cljs_time.core.Period.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__14382){
var self__ = this;
var G__14382__$1 = this;
return (new cljs.core.RecordIter((0),G__14382__$1,8,new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$years,cljs.core.cst$kw$months,cljs.core.cst$kw$weeks,cljs.core.cst$kw$days,cljs.core.cst$kw$hours,cljs.core.cst$kw$minutes,cljs.core.cst$kw$seconds,cljs.core.cst$kw$millis], null),cljs.core._iterator(self__.__extmap)));
});

cljs_time.core.Period.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__6736__auto__){
var self__ = this;
var this__6736__auto____$1 = this;
return self__.__meta;
});

cljs_time.core.Period.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__6732__auto__){
var self__ = this;
var this__6732__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,self__.__hash));
});

cljs_time.core.Period.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__6742__auto__){
var self__ = this;
var this__6742__auto____$1 = this;
return (8 + cljs.core.count(self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__6733__auto__){
var self__ = this;
var this__6733__auto____$1 = this;
var h__6551__auto__ = self__.__hash;
if(!((h__6551__auto__ == null))){
return h__6551__auto__;
} else {
var h__6551__auto____$1 = cljs.core.hash_imap(this__6733__auto____$1);
self__.__hash = h__6551__auto____$1;

return h__6551__auto____$1;
}
});

cljs_time.core.Period.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__6734__auto__,other__6735__auto__){
var self__ = this;
var this__6734__auto____$1 = this;
if(cljs.core.truth_((function (){var and__6104__auto__ = other__6735__auto__;
if(cljs.core.truth_(and__6104__auto__)){
var and__6104__auto____$1 = (this__6734__auto____$1.constructor === other__6735__auto__.constructor);
if(and__6104__auto____$1){
return cljs.core.equiv_map(this__6734__auto____$1,other__6735__auto__);
} else {
return and__6104__auto____$1;
}
} else {
return and__6104__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs_time.core.Period.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__6747__auto__,k__6748__auto__){
var self__ = this;
var this__6747__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$months,null,cljs.core.cst$kw$days,null,cljs.core.cst$kw$seconds,null,cljs.core.cst$kw$hours,null,cljs.core.cst$kw$years,null,cljs.core.cst$kw$minutes,null,cljs.core.cst$kw$weeks,null,cljs.core.cst$kw$millis,null], null), null),k__6748__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__6747__auto____$1),self__.__meta),k__6748__auto__);
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__6748__auto__)),null));
}
});

cljs_time.core.Period.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__6745__auto__,k__6746__auto__,G__14382){
var self__ = this;
var this__6745__auto____$1 = this;
var pred__14386 = cljs.core.keyword_identical_QMARK_;
var expr__14387 = k__6746__auto__;
if(cljs.core.truth_((pred__14386.cljs$core$IFn$_invoke$arity$2 ? pred__14386.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$years,expr__14387) : pred__14386.call(null,cljs.core.cst$kw$years,expr__14387)))){
return (new cljs_time.core.Period(G__14382,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14386.cljs$core$IFn$_invoke$arity$2 ? pred__14386.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$months,expr__14387) : pred__14386.call(null,cljs.core.cst$kw$months,expr__14387)))){
return (new cljs_time.core.Period(self__.years,G__14382,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14386.cljs$core$IFn$_invoke$arity$2 ? pred__14386.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$weeks,expr__14387) : pred__14386.call(null,cljs.core.cst$kw$weeks,expr__14387)))){
return (new cljs_time.core.Period(self__.years,self__.months,G__14382,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14386.cljs$core$IFn$_invoke$arity$2 ? pred__14386.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$days,expr__14387) : pred__14386.call(null,cljs.core.cst$kw$days,expr__14387)))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,G__14382,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14386.cljs$core$IFn$_invoke$arity$2 ? pred__14386.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$hours,expr__14387) : pred__14386.call(null,cljs.core.cst$kw$hours,expr__14387)))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,G__14382,self__.minutes,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14386.cljs$core$IFn$_invoke$arity$2 ? pred__14386.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$minutes,expr__14387) : pred__14386.call(null,cljs.core.cst$kw$minutes,expr__14387)))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,G__14382,self__.seconds,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14386.cljs$core$IFn$_invoke$arity$2 ? pred__14386.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$seconds,expr__14387) : pred__14386.call(null,cljs.core.cst$kw$seconds,expr__14387)))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,G__14382,self__.millis,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__14386.cljs$core$IFn$_invoke$arity$2 ? pred__14386.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$millis,expr__14387) : pred__14386.call(null,cljs.core.cst$kw$millis,expr__14387)))){
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,G__14382,self__.__meta,self__.__extmap,null));
} else {
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__6746__auto__,G__14382),null));
}
}
}
}
}
}
}
}
});

cljs_time.core.Period.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__6750__auto__){
var self__ = this;
var this__6750__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$years,self__.years],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$months,self__.months],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$weeks,self__.weeks],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$days,self__.days],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$hours,self__.hours],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$minutes,self__.minutes],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$seconds,self__.seconds],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.cst$kw$millis,self__.millis],null))], null),self__.__extmap));
});

cljs_time.core.Period.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__6737__auto__,G__14382){
var self__ = this;
var this__6737__auto____$1 = this;
return (new cljs_time.core.Period(self__.years,self__.months,self__.weeks,self__.days,self__.hours,self__.minutes,self__.seconds,self__.millis,G__14382,self__.__extmap,self__.__hash));
});

cljs_time.core.Period.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__6743__auto__,entry__6744__auto__){
var self__ = this;
var this__6743__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__6744__auto__)){
return cljs.core._assoc(this__6743__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6744__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__6744__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__6743__auto____$1,entry__6744__auto__);
}
});

cljs_time.core.Period.getBasis = (function (){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$years,cljs.core.cst$sym$months,cljs.core.cst$sym$weeks,cljs.core.cst$sym$days,cljs.core.cst$sym$hours,cljs.core.cst$sym$minutes,cljs.core.cst$sym$seconds,cljs.core.cst$sym$millis], null);
});

cljs_time.core.Period.cljs$lang$type = true;

cljs_time.core.Period.cljs$lang$ctorPrSeq = (function (this__6772__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"cljs-time.core/Period");
});

cljs_time.core.Period.cljs$lang$ctorPrWriter = (function (this__6772__auto__,writer__6773__auto__){
return cljs.core._write(writer__6773__auto__,"cljs-time.core/Period");
});

cljs_time.core.__GT_Period = (function cljs_time$core$__GT_Period(years,months,weeks,days,hours,minutes,seconds,millis){
return (new cljs_time.core.Period(years,months,weeks,days,hours,minutes,seconds,millis,null,null,null));
});

cljs_time.core.map__GT_Period = (function cljs_time$core$map__GT_Period(G__14384){
return (new cljs_time.core.Period(cljs.core.cst$kw$years.cljs$core$IFn$_invoke$arity$1(G__14384),cljs.core.cst$kw$months.cljs$core$IFn$_invoke$arity$1(G__14384),cljs.core.cst$kw$weeks.cljs$core$IFn$_invoke$arity$1(G__14384),cljs.core.cst$kw$days.cljs$core$IFn$_invoke$arity$1(G__14384),cljs.core.cst$kw$hours.cljs$core$IFn$_invoke$arity$1(G__14384),cljs.core.cst$kw$minutes.cljs$core$IFn$_invoke$arity$1(G__14384),cljs.core.cst$kw$seconds.cljs$core$IFn$_invoke$arity$1(G__14384),cljs.core.cst$kw$millis.cljs$core$IFn$_invoke$arity$1(G__14384),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__14384,cljs.core.cst$kw$years,cljs.core.array_seq([cljs.core.cst$kw$months,cljs.core.cst$kw$weeks,cljs.core.cst$kw$days,cljs.core.cst$kw$hours,cljs.core.cst$kw$minutes,cljs.core.cst$kw$seconds,cljs.core.cst$kw$millis], 0)),null));
});

cljs_time.core.period = (function cljs_time$core$period(var_args){
var args14390 = [];
var len__7185__auto___14396 = arguments.length;
var i__7186__auto___14397 = (0);
while(true){
if((i__7186__auto___14397 < len__7185__auto___14396)){
args14390.push((arguments[i__7186__auto___14397]));

var G__14398 = (i__7186__auto___14397 + (1));
i__7186__auto___14397 = G__14398;
continue;
} else {
}
break;
}

var G__14395 = args14390.length;
switch (G__14395) {
case 2:
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7204__auto__ = (new cljs.core.IndexedSeq(args14390.slice((2)),(0),null));
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7204__auto__);

}
});

cljs_time.core.period.cljs$core$IFn$_invoke$arity$2 = (function (period,value){
return cljs_time.core.map__GT_Period(cljs.core.PersistentArrayMap.fromArray([period,value], true, false));
});

cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic = (function (p1,v1,kvs){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(p1,v1),kvs);
});

cljs_time.core.period.cljs$lang$applyTo = (function (seq14391){
var G__14392 = cljs.core.first(seq14391);
var seq14391__$1 = cljs.core.next(seq14391);
var G__14393 = cljs.core.first(seq14391__$1);
var seq14391__$2 = cljs.core.next(seq14391__$1);
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic(G__14392,G__14393,seq14391__$2);
});

cljs_time.core.period.cljs$lang$maxFixedArity = (2);
cljs_time.core.periods = (function (){var fixed_time_fn = (function (f,set_fn,op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
var G__14412_14428 = date__$1;
var G__14413_14429 = (function (){var G__14414 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(date__$1) : f.call(null,date__$1));
var G__14415 = value;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__14414,G__14415) : op.call(null,G__14414,G__14415));
})();
(set_fn.cljs$core$IFn$_invoke$arity$2 ? set_fn.cljs$core$IFn$_invoke$arity$2(G__14412_14428,G__14413_14429) : set_fn.call(null,G__14412_14428,G__14413_14429));
} else {
}

return date__$1;
});
return new cljs.core.PersistentArrayMap(null, 8, [cljs.core.cst$kw$millis,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.milli,((function (fixed_time_fn){
return (function (p1__14400_SHARP_,p2__14401_SHARP_){
return p1__14400_SHARP_.setMilliseconds(p2__14401_SHARP_);
});})(fixed_time_fn))
),cljs.core.cst$kw$seconds,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.second,((function (fixed_time_fn){
return (function (p1__14402_SHARP_,p2__14403_SHARP_){
return p1__14402_SHARP_.setSeconds(p2__14403_SHARP_);
});})(fixed_time_fn))
),cljs.core.cst$kw$minutes,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.minute,((function (fixed_time_fn){
return (function (p1__14404_SHARP_,p2__14405_SHARP_){
return p1__14404_SHARP_.setMinutes(p2__14405_SHARP_);
});})(fixed_time_fn))
),cljs.core.cst$kw$hours,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.hour,((function (fixed_time_fn){
return (function (p1__14406_SHARP_,p2__14407_SHARP_){
return p1__14406_SHARP_.setHours(p2__14407_SHARP_);
});})(fixed_time_fn))
),cljs.core.cst$kw$days,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(fixed_time_fn,cljs_time.core.day,((function (fixed_time_fn){
return (function (p1__14408_SHARP_,p2__14409_SHARP_){
return p1__14408_SHARP_.setDate(p2__14409_SHARP_);
});})(fixed_time_fn))
),cljs.core.cst$kw$weeks,((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
date__$1.setDate((function (){var G__14416 = cljs_time.core.day(date__$1);
var G__14417 = ((7) * value);
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__14416,G__14417) : op.call(null,G__14416,G__14417));
})());
} else {
}

return date__$1;
});})(fixed_time_fn))
,cljs.core.cst$kw$months,((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
var m_14430 = (function (){var G__14418 = cljs_time.core.month(date__$1);
var G__14419 = value;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__14418,G__14419) : op.call(null,G__14418,G__14419));
})();
var y_14431 = cljs_time.core.year(date__$1);
var y_14432__$1 = (((m_14430 > (12)))?(y_14431 + (1)):(((m_14430 < (1)))?(y_14431 - (1)):y_14431
));
var m_14433__$1 = (((m_14430 > (12)))?cljs.core.mod(m_14430,(12)):(((m_14430 < (1)))?(m_14430 + (12)):m_14430
));
var ldom_14434 = cljs_time.core.day(cljs_time.core.last_day_of_the_month_((new goog.date.Date(y_14432__$1,(m_14433__$1 - (1)),(1)))));
if((ldom_14434 < cljs_time.core.day(date__$1))){
date__$1.setDate(ldom_14434);
} else {
}

date__$1.setMonth((m_14433__$1 - (1)));

date__$1.setYear(y_14432__$1);
} else {
}

return date__$1;
});})(fixed_time_fn))
,cljs.core.cst$kw$years,((function (fixed_time_fn){
return (function (op,date,value){
var date__$1 = date.clone();
if(cljs.core.truth_(value)){
if(cljs.core.truth_((function (){var and__6104__auto__ = cljs_time.internal.core.leap_year_QMARK_(cljs_time.core.year(date__$1));
if(cljs.core.truth_(and__6104__auto__)){
var and__6104__auto____$1 = (function (){var G__14422 = (2);
var G__14423 = cljs_time.core.month(date__$1);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__14422,G__14423) : cljs_time.core._EQ_.call(null,G__14422,G__14423));
})();
if(cljs.core.truth_(and__6104__auto____$1)){
var G__14424 = (29);
var G__14425 = cljs_time.core.day(date__$1);
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(G__14424,G__14425) : cljs_time.core._EQ_.call(null,G__14424,G__14425));
} else {
return and__6104__auto____$1;
}
} else {
return and__6104__auto__;
}
})())){
date__$1.setDate((28));
} else {
}

date__$1.setYear((function (){var G__14426 = cljs_time.core.year(date__$1);
var G__14427 = value;
return (op.cljs$core$IFn$_invoke$arity$2 ? op.cljs$core$IFn$_invoke$arity$2(G__14426,G__14427) : op.call(null,G__14426,G__14427));
})());
} else {
}

return date__$1;
});})(fixed_time_fn))
], null);
})();
cljs_time.core.period_fn = (function cljs_time$core$period_fn(p){
return (function (operator,date){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__14436_SHARP_,p2__14435_SHARP_){
return (function (){var G__14438 = cljs.core.key(p2__14435_SHARP_);
return (cljs_time.core.periods.cljs$core$IFn$_invoke$arity$1 ? cljs_time.core.periods.cljs$core$IFn$_invoke$arity$1(G__14438) : cljs_time.core.periods.call(null,G__14438));
})().call(null,operator,p1__14436_SHARP_,cljs.core.val(p2__14435_SHARP_));
}),date,p);
});
});
goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_((cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(0)) : cljs_time.core._EQ_.call(null,d,(0))))){
return (7);
} else {
return d;
}
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._,this$__$1);
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.UtcDateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
});

goog.date.UtcDateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_((new goog.date.UtcDateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$days,(1)));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_((cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(0)) : cljs_time.core._EQ_.call(null,d,(0))))){
return (7);
} else {
return d;
}
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getHours();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMinutes();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getSeconds();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getMilliseconds();
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._,this$__$1);
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.DateTime(this$__$1.getYear(),this$__$1.getMonth(),(1),(0),(0),(0),(0)));
});

goog.date.DateTime.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_((new goog.date.DateTime(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1),(0),(0),(0),(0))),cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$days,(1)));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$ = true;

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$year$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getYear();
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$month$arity$1 = (function (this$){
var this$__$1 = this;
return (this$__$1.getMonth() + (1));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.getDate();
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$day_of_week$arity$1 = (function (this$){
var this$__$1 = this;
var d = this$__$1.getDay();
if(cljs.core.truth_((cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(d,(0)) : cljs_time.core._EQ_.call(null,d,(0))))){
return (7);
} else {
return d;
}
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$hour$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minute$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$second$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$milli$arity$1 = (function (this$){
var this$__$1 = this;
return null;
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$after_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() > that.getTime());
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$before_QMARK_$arity$2 = (function (this$,that){
var this$__$1 = this;
return (this$__$1.getTime() < that.getTime());
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$plus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._PLUS_,this$__$1);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$minus_$arity$2 = (function (this$,period){
var this$__$1 = this;
return cljs_time.core.period_fn(period).call(null,cljs.core._,this$__$1);
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$first_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return (new goog.date.Date(this$__$1.getYear(),this$__$1.getMonth(),(1)));
});

goog.date.Date.prototype.cljs_time$core$DateTimeProtocol$last_day_of_the_month_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.minus_((new goog.date.Date(this$__$1.getYear(),(this$__$1.getMonth() + (1)),(1))),cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$days,(1)));
});
cljs_time.core.utc = (function (){var G__14439 = cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,"UTC",cljs.core.cst$kw$std_offset,(0),cljs.core.cst$kw$names,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["UTC"], null),cljs.core.cst$kw$transitions,cljs.core.PersistentVector.EMPTY], null));
return goog.i18n.TimeZone.createTimeZone(G__14439);
})();
/**
 * Returns a DateTime for the current instant in the UTC time zone.
 */
cljs_time.core.now = (function cljs_time$core$now(){
if(cljs.core.truth_(cljs_time.core._STAR_sys_time_STAR_)){
return cljs_time.core._STAR_sys_time_STAR_;
} else {
return (new goog.date.UtcDateTime());
}
});
/**
 * Returns a LocalTime for the current instant without date or time zone
 *   using ISOChronology in the current time zone.
 */
cljs_time.core.time_now = (function cljs_time$core$time_now(){
return (new goog.date.DateTime());
});
cljs_time.core.at_midnight = (function cljs_time$core$at_midnight(datetime){
var datetime__$1 = datetime.clone();
var G__14441 = datetime__$1;
G__14441.setHours((0));

G__14441.setMinutes((0));

G__14441.setSeconds((0));

G__14441.setMilliseconds((0));

return G__14441;
});
/**
 * Returns a DateMidnight for today at midnight in the UTC time zone.
 */
cljs_time.core.today_at_midnight = (function cljs_time$core$today_at_midnight(){
return cljs_time.core.at_midnight(cljs_time.core.now());
});
/**
 * Returns a DateTime for the begining of the Unix epoch in the UTC time zone.
 */
cljs_time.core.epoch = (function cljs_time$core$epoch(){
var G__14443 = (new goog.date.UtcDateTime());
G__14443.setTime((0));

return G__14443;
});
/**
 * Constructs and returns a new DateMidnight in UTC.
 * 
 *   Specify the year, month of year, day of month. Note that month and day are
 *   1-indexed. Any number of least-significant components can be ommited, in
 *   which case they will default to 1.
 */
cljs_time.core.date_midnight = (function cljs_time$core$date_midnight(var_args){
var args14444 = [];
var len__7185__auto___14447 = arguments.length;
var i__7186__auto___14448 = (0);
while(true){
if((i__7186__auto___14448 < len__7185__auto___14447)){
args14444.push((arguments[i__7186__auto___14448]));

var G__14449 = (i__7186__auto___14448 + (1));
i__7186__auto___14448 = G__14449;
continue;
} else {
}
break;
}

var G__14446 = args14444.length;
switch (G__14446) {
case 1:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14444.length)].join('')));

}
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3(year,(1),(1));
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3(year,month,(1));
});

cljs_time.core.date_midnight.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return (new goog.date.UtcDateTime(year,(month - (1)),day));
});

cljs_time.core.date_midnight.cljs$lang$maxFixedArity = 3;
/**
 * Constructs and returns a new DateTime in UTC.
 * 
 *   Specify the year, month of year, day of month, hour of day, minute if hour,
 *   second of minute, and millisecond of second. Note that month and day are
 *   1-indexed while hour, second, minute, and millis are 0-indexed.
 * 
 *   Any number of least-significant components can be ommited, in which case
 *   they will default to 1 or 0 as appropriate.
 */
cljs_time.core.date_time = (function cljs_time$core$date_time(var_args){
var args14451 = [];
var len__7185__auto___14454 = arguments.length;
var i__7186__auto___14455 = (0);
while(true){
if((i__7186__auto___14455 < len__7185__auto___14454)){
args14451.push((arguments[i__7186__auto___14455]));

var G__14456 = (i__7186__auto___14455 + (1));
i__7186__auto___14455 = G__14456;
continue;
} else {
}
break;
}

var G__14453 = args14451.length;
switch (G__14453) {
case 1:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14451.length)].join('')));

}
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,(1),(1),(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,month,(1),(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,(0),(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$4 = (function (year,month,day,hour){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,(0),(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,(0),(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,second,(0));
});

cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.UtcDateTime(year,(month - (1)),day,hour,minute,second,millis));
});

cljs_time.core.date_time.cljs$lang$maxFixedArity = 7;
/**
 * Constructs and returns a new LocalDateTime.
 * Specify the year, month of year, day of month, hour of day, minute of hour,
 * second of minute, and millisecond of second. Note that month and day are
 * 1-indexed while hour, second, minute, and millis are 0-indexed.
 * Any number of least-significant components can be ommited, in which case
 * they will default to 1 or 0 as appropriate.
 */
cljs_time.core.local_date_time = (function cljs_time$core$local_date_time(var_args){
var args14458 = [];
var len__7185__auto___14461 = arguments.length;
var i__7186__auto___14462 = (0);
while(true){
if((i__7186__auto___14462 < len__7185__auto___14461)){
args14458.push((arguments[i__7186__auto___14462]));

var G__14463 = (i__7186__auto___14462 + (1));
i__7186__auto___14462 = G__14463;
continue;
} else {
}
break;
}

var G__14460 = args14458.length;
switch (G__14460) {
case 1:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14458.length)].join('')));

}
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$1 = (function (year){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,(1),(1),(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,(1),(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$3 = (function (year,month,day){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,(0),(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$4 = (function (year,month,day,hour){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,(0),(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$5 = (function (year,month,day,hour,minute){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,(0),(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$6 = (function (year,month,day,hour,minute,second){
return cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7(year,month,day,hour,minute,second,(0));
});

cljs_time.core.local_date_time.cljs$core$IFn$_invoke$arity$7 = (function (year,month,day,hour,minute,second,millis){
return (new goog.date.DateTime(year,(month - (1)),day,hour,minute,second,millis));
});

cljs_time.core.local_date_time.cljs$lang$maxFixedArity = 7;
/**
 * Constructs and returns a new LocalDate.
 * Specify the year, month, and day. Does not deal with timezones.
 */
cljs_time.core.local_date = (function cljs_time$core$local_date(year,month,day){
return (new goog.date.Date(year,(month - (1)),day));
});
/**
 * Constructs and returns a new LocalDate representing today's date.
 *   LocalDate objects do not deal with timezones at all.
 */
cljs_time.core.today = (function cljs_time$core$today(){
if(cljs.core.truth_(cljs_time.core._STAR_sys_time_STAR_)){
var d = cljs_time.core._STAR_sys_time_STAR_;
return (new goog.date.Date(d.getYear(),d.getMonth(),d.getDate()));
} else {
return (new goog.date.Date());
}
});
/**
 * Returns a DateTimeZone for the given offset, specified either in hours or
 *   hours and minutes.
 */
cljs_time.core.time_zone_for_offset = (function cljs_time$core$time_zone_for_offset(var_args){
var args14465 = [];
var len__7185__auto___14468 = arguments.length;
var i__7186__auto___14469 = (0);
while(true){
if((i__7186__auto___14469 < len__7185__auto___14468)){
args14465.push((arguments[i__7186__auto___14469]));

var G__14470 = (i__7186__auto___14469 + (1));
i__7186__auto___14469 = G__14470;
continue;
} else {
}
break;
}

var G__14467 = args14465.length;
switch (G__14467) {
case 1:
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14465.length)].join('')));

}
});

cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$1 = (function (hours){
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2(hours,null);
});

cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
var sign = (((hours < (0)))?cljs.core.cst$kw$_DASH_:cljs.core.cst$kw$_PLUS_);
var fmt = [cljs.core.str("UTC%s%02d"),cljs.core.str((cljs.core.truth_(minutes)?":%02d":null))].join('');
var hours__$1 = (((hours < (0)))?((-1) * hours):hours);
var tz_name = (cljs.core.truth_(minutes)?cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic(fmt,cljs.core.array_seq([cljs.core.name(sign),hours__$1,minutes], 0)):cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic(fmt,cljs.core.array_seq([cljs.core.name(sign),hours__$1], 0)));
return cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$id,tz_name,cljs.core.cst$kw$offset,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [sign,hours__$1,(function (){var or__6116__auto__ = minutes;
if(cljs.core.truth_(or__6116__auto__)){
return or__6116__auto__;
} else {
return (0);
}
})(),(0)], null),cljs.core.cst$kw$rules,"-",cljs.core.cst$kw$names,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tz_name], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$cljs_DASH_time$core_SLASH_time_DASH_zone], null));
});

cljs_time.core.time_zone_for_offset.cljs$lang$maxFixedArity = 2;
/**
 * Returns the default DateTimeZone for the current environment.
 */
cljs_time.core.default_time_zone = (function cljs_time$core$default_time_zone(){
var hours = (((-1) * (new goog.date.DateTime()).getTimezoneOffset()) / (60));
return cljs_time.core.time_zone_for_offset.cljs$core$IFn$_invoke$arity$2((hours | (0)),cljs.core.mod(hours,(1)));
});
/**
 * Assuming `dt` is in the UTC timezone, returns a DateTime
 *   corresponding to the same absolute instant in time as the given
 *   DateTime, but with calendar fields corresponding to in the default
 *   (local) timezone.
 */
cljs_time.core.to_default_time_zone = (function cljs_time$core$to_default_time_zone(dt){
return (new goog.date.DateTime(dt));
});
/**
 * Assuming `dt` is in the UTC timezone, returns a DateTime
 *   corresponding to the same point in calendar time as the given
 *   DateTime, but for a correspondingly different absolute instant in
 *   time in the default (local) timezone.
 * 
 *   Note: This implementation uses the ECMAScript 5.1 implementation which
 *   trades some historical daylight savings transition accuracy for simplicity.
 *   see http://es5.github.io/#x15.9.1.8
 *   
 */
cljs_time.core.from_default_time_zone = (function cljs_time$core$from_default_time_zone(dt){
return (new goog.date.DateTime(dt.getYear(),dt.getMonth(),dt.getDate(),dt.getHours(),dt.getMinutes(),dt.getSeconds(),dt.getMilliseconds()));
});
/**
 * Given a number, returns a Period representing that many years.
 *   Without an argument, returns a PeriodType representing only years.
 */
cljs_time.core.years = (function cljs_time$core$years(var_args){
var args14472 = [];
var len__7185__auto___14475 = arguments.length;
var i__7186__auto___14476 = (0);
while(true){
if((i__7186__auto___14476 < len__7185__auto___14475)){
args14472.push((arguments[i__7186__auto___14476]));

var G__14477 = (i__7186__auto___14476 + (1));
i__7186__auto___14476 = G__14477;
continue;
} else {
}
break;
}

var G__14474 = args14472.length;
switch (G__14474) {
case 0:
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14472.length)].join('')));

}
});

cljs_time.core.years.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.years.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.years.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$years,n);
});

cljs_time.core.years.cljs$lang$maxFixedArity = 1;
/**
 * Given a number, returns a Period representing that many months.
 *   Without an argument, returns a PeriodType representing only months.
 */
cljs_time.core.months = (function cljs_time$core$months(var_args){
var args14479 = [];
var len__7185__auto___14482 = arguments.length;
var i__7186__auto___14483 = (0);
while(true){
if((i__7186__auto___14483 < len__7185__auto___14482)){
args14479.push((arguments[i__7186__auto___14483]));

var G__14484 = (i__7186__auto___14483 + (1));
i__7186__auto___14483 = G__14484;
continue;
} else {
}
break;
}

var G__14481 = args14479.length;
switch (G__14481) {
case 0:
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14479.length)].join('')));

}
});

cljs_time.core.months.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.months.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.months.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$months,n);
});

cljs_time.core.months.cljs$lang$maxFixedArity = 1;
/**
 * Given a number, returns a Period representing that many weeks.
 *   Without an argument, returns a PeriodType representing only weeks.
 */
cljs_time.core.weeks = (function cljs_time$core$weeks(var_args){
var args14486 = [];
var len__7185__auto___14489 = arguments.length;
var i__7186__auto___14490 = (0);
while(true){
if((i__7186__auto___14490 < len__7185__auto___14489)){
args14486.push((arguments[i__7186__auto___14490]));

var G__14491 = (i__7186__auto___14490 + (1));
i__7186__auto___14490 = G__14491;
continue;
} else {
}
break;
}

var G__14488 = args14486.length;
switch (G__14488) {
case 0:
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14486.length)].join('')));

}
});

cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.weeks.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$weeks,n);
});

cljs_time.core.weeks.cljs$lang$maxFixedArity = 1;
/**
 * Given a number, returns a Period representing that many days.
 *   Without an argument, returns a PeriodType representing only days.
 */
cljs_time.core.days = (function cljs_time$core$days(var_args){
var args14493 = [];
var len__7185__auto___14496 = arguments.length;
var i__7186__auto___14497 = (0);
while(true){
if((i__7186__auto___14497 < len__7185__auto___14496)){
args14493.push((arguments[i__7186__auto___14497]));

var G__14498 = (i__7186__auto___14497 + (1));
i__7186__auto___14497 = G__14498;
continue;
} else {
}
break;
}

var G__14495 = args14493.length;
switch (G__14495) {
case 0:
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14493.length)].join('')));

}
});

cljs_time.core.days.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.days.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.days.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$days,n);
});

cljs_time.core.days.cljs$lang$maxFixedArity = 1;
/**
 * Given a number, returns a Period representing that many hours.
 *   Without an argument, returns a PeriodType representing only hours.
 */
cljs_time.core.hours = (function cljs_time$core$hours(var_args){
var args14500 = [];
var len__7185__auto___14503 = arguments.length;
var i__7186__auto___14504 = (0);
while(true){
if((i__7186__auto___14504 < len__7185__auto___14503)){
args14500.push((arguments[i__7186__auto___14504]));

var G__14505 = (i__7186__auto___14504 + (1));
i__7186__auto___14504 = G__14505;
continue;
} else {
}
break;
}

var G__14502 = args14500.length;
switch (G__14502) {
case 0:
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14500.length)].join('')));

}
});

cljs_time.core.hours.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.hours.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$hours,n);
});

cljs_time.core.hours.cljs$lang$maxFixedArity = 1;
/**
 * Given a number, returns a Period representing that many minutes.
 *   Without an argument, returns a PeriodType representing only minutes.
 */
cljs_time.core.minutes = (function cljs_time$core$minutes(var_args){
var args14507 = [];
var len__7185__auto___14510 = arguments.length;
var i__7186__auto___14511 = (0);
while(true){
if((i__7186__auto___14511 < len__7185__auto___14510)){
args14507.push((arguments[i__7186__auto___14511]));

var G__14512 = (i__7186__auto___14511 + (1));
i__7186__auto___14511 = G__14512;
continue;
} else {
}
break;
}

var G__14509 = args14507.length;
switch (G__14509) {
case 0:
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14507.length)].join('')));

}
});

cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.minutes.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$minutes,n);
});

cljs_time.core.minutes.cljs$lang$maxFixedArity = 1;
/**
 * Given a number, returns a Period representing that many seconds.
 *   Without an argument, returns a PeriodType representing only seconds.
 */
cljs_time.core.seconds = (function cljs_time$core$seconds(var_args){
var args14514 = [];
var len__7185__auto___14517 = arguments.length;
var i__7186__auto___14518 = (0);
while(true){
if((i__7186__auto___14518 < len__7185__auto___14517)){
args14514.push((arguments[i__7186__auto___14518]));

var G__14519 = (i__7186__auto___14518 + (1));
i__7186__auto___14518 = G__14519;
continue;
} else {
}
break;
}

var G__14516 = args14514.length;
switch (G__14516) {
case 0:
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14514.length)].join('')));

}
});

cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.seconds.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$seconds,n);
});

cljs_time.core.seconds.cljs$lang$maxFixedArity = 1;
/**
 * Given a number, returns a Period representing that many milliseconds.
 *   Without an argument, returns a PeriodType representing only milliseconds.
 */
cljs_time.core.millis = (function cljs_time$core$millis(var_args){
var args14521 = [];
var len__7185__auto___14524 = arguments.length;
var i__7186__auto___14525 = (0);
while(true){
if((i__7186__auto___14525 < len__7185__auto___14524)){
args14521.push((arguments[i__7186__auto___14525]));

var G__14526 = (i__7186__auto___14525 + (1));
i__7186__auto___14525 = G__14526;
continue;
} else {
}
break;
}

var G__14523 = args14521.length;
switch (G__14523) {
case 0:
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14521.length)].join('')));

}
});

cljs_time.core.millis.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1(null);
});

cljs_time.core.millis.cljs$core$IFn$_invoke$arity$1 = (function (n){
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$millis,n);
});

cljs_time.core.millis.cljs$lang$maxFixedArity = 1;
/**
 * Returns a new date/time corresponding to the given date/time moved forwards by
 *   the given Period(s).
 */
cljs_time.core.plus = (function cljs_time$core$plus(var_args){
var args14528 = [];
var len__7185__auto___14534 = arguments.length;
var i__7186__auto___14535 = (0);
while(true){
if((i__7186__auto___14535 < len__7185__auto___14534)){
args14528.push((arguments[i__7186__auto___14535]));

var G__14536 = (i__7186__auto___14535 + (1));
i__7186__auto___14535 = G__14536;
continue;
} else {
}
break;
}

var G__14533 = args14528.length;
switch (G__14533) {
case 2:
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7204__auto__ = (new cljs.core.IndexedSeq(args14528.slice((2)),(0),null));
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7204__auto__);

}
});

cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2 = (function (dt,p){
return cljs_time.core.plus_(dt,p);
});

cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic = (function (dt,p,ps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs_time.core.plus_,cljs_time.core.plus_(dt,p),ps);
});

cljs_time.core.plus.cljs$lang$applyTo = (function (seq14529){
var G__14530 = cljs.core.first(seq14529);
var seq14529__$1 = cljs.core.next(seq14529);
var G__14531 = cljs.core.first(seq14529__$1);
var seq14529__$2 = cljs.core.next(seq14529__$1);
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$variadic(G__14530,G__14531,seq14529__$2);
});

cljs_time.core.plus.cljs$lang$maxFixedArity = (2);
/**
 * Returns a new date/time object corresponding to the given date/time moved backwards by
 *   the given Period(s).
 */
cljs_time.core.minus = (function cljs_time$core$minus(var_args){
var args14538 = [];
var len__7185__auto___14544 = arguments.length;
var i__7186__auto___14545 = (0);
while(true){
if((i__7186__auto___14545 < len__7185__auto___14544)){
args14538.push((arguments[i__7186__auto___14545]));

var G__14546 = (i__7186__auto___14545 + (1));
i__7186__auto___14545 = G__14546;
continue;
} else {
}
break;
}

var G__14543 = args14538.length;
switch (G__14543) {
case 2:
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__7204__auto__ = (new cljs.core.IndexedSeq(args14538.slice((2)),(0),null));
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__7204__auto__);

}
});

cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2 = (function (dt,p){
return cljs_time.core.minus_(dt,p);
});

cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic = (function (dt,p,ps){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs_time.core.minus_,cljs_time.core.minus_(dt,p),ps);
});

cljs_time.core.minus.cljs$lang$applyTo = (function (seq14539){
var G__14540 = cljs.core.first(seq14539);
var seq14539__$1 = cljs.core.next(seq14539);
var G__14541 = cljs.core.first(seq14539__$1);
var seq14539__$2 = cljs.core.next(seq14539__$1);
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$variadic(G__14540,G__14541,seq14539__$2);
});

cljs_time.core.minus.cljs$lang$maxFixedArity = (2);
/**
 * Returns a DateTime a supplied period before the present.
 * 
 *   e.g. `(-> 5 years ago)`
 */
cljs_time.core.ago = (function cljs_time$core$ago(period){
return cljs_time.core.minus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.now(),period);
});
/**
 * Returns a DateTime for yesterday relative to now
 */
cljs_time.core.yesterday = (function cljs_time$core$yesterday(){
return cljs_time.core.ago(cljs_time.core.days.cljs$core$IFn$_invoke$arity$1((1)));
});
/**
 * Returns a DateTime a supplied period after the present.
 *   e.g. `(-> 30 minutes from-now)`
 */
cljs_time.core.from_now = (function cljs_time$core$from_now(period){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(cljs_time.core.now(),period);
});
/**
 * Returns the earliest of the supplied DateTimes
 */
cljs_time.core.earliest = (function cljs_time$core$earliest(var_args){
var args14548 = [];
var len__7185__auto___14551 = arguments.length;
var i__7186__auto___14552 = (0);
while(true){
if((i__7186__auto___14552 < len__7185__auto___14551)){
args14548.push((arguments[i__7186__auto___14552]));

var G__14553 = (i__7186__auto___14552 + (1));
i__7186__auto___14552 = G__14553;
continue;
} else {
}
break;
}

var G__14550 = args14548.length;
switch (G__14550) {
case 2:
return cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14548.length)].join('')));

}
});

cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.before_QMARK_(dt1,dt2))){
return dt1;
} else {
return dt2;
}
});

cljs_time.core.earliest.cljs$core$IFn$_invoke$arity$1 = (function (dts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs_time.core.earliest,dts);
});

cljs_time.core.earliest.cljs$lang$maxFixedArity = 2;
/**
 * Returns the latest of the supplied DateTimes
 */
cljs_time.core.latest = (function cljs_time$core$latest(var_args){
var args14555 = [];
var len__7185__auto___14558 = arguments.length;
var i__7186__auto___14559 = (0);
while(true){
if((i__7186__auto___14559 < len__7185__auto___14558)){
args14555.push((arguments[i__7186__auto___14559]));

var G__14560 = (i__7186__auto___14559 + (1));
i__7186__auto___14559 = G__14560;
continue;
} else {
}
break;
}

var G__14557 = args14555.length;
switch (G__14557) {
case 2:
return cljs_time.core.latest.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs_time.core.latest.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14555.length)].join('')));

}
});

cljs_time.core.latest.cljs$core$IFn$_invoke$arity$2 = (function (dt1,dt2){
if(cljs.core.truth_(cljs_time.core.after_QMARK_(dt1,dt2))){
return dt1;
} else {
return dt2;
}
});

cljs_time.core.latest.cljs$core$IFn$_invoke$arity$1 = (function (dts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs_time.core.latest,dts);
});

cljs_time.core.latest.cljs$lang$maxFixedArity = 2;
/**
 * Returns the start DateTime of an Interval.
 */
cljs_time.core.start = (function cljs_time$core$start(in$){
return cljs.core.cst$kw$start.cljs$core$IFn$_invoke$arity$1(in$);
});
/**
 * Returns the end DateTime of an Interval.
 */
cljs_time.core.end = (function cljs_time$core$end(in$){
return cljs.core.cst$kw$end.cljs$core$IFn$_invoke$arity$1(in$);
});
/**
 * Returns an Interval with an end ReadableDateTime the specified Period after the end
 *   of the given Interval
 */
cljs_time.core.extend = (function cljs_time$core$extend(var_args){
var args__7192__auto__ = [];
var len__7185__auto___14564 = arguments.length;
var i__7186__auto___14565 = (0);
while(true){
if((i__7186__auto___14565 < len__7185__auto___14564)){
args__7192__auto__.push((arguments[i__7186__auto___14565]));

var G__14566 = (i__7186__auto___14565 + (1));
i__7186__auto___14565 = G__14566;
continue;
} else {
}
break;
}

var argseq__7193__auto__ = ((((1) < args__7192__auto__.length))?(new cljs.core.IndexedSeq(args__7192__auto__.slice((1)),(0),null)):null);
return cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__7193__auto__);
});

cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic = (function (in$,by){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(in$,cljs.core.cst$kw$end,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs_time.core.plus,cljs_time.core.end(in$),by));
});

cljs_time.core.extend.cljs$lang$maxFixedArity = (1);

cljs_time.core.extend.cljs$lang$applyTo = (function (seq14562){
var G__14563 = cljs.core.first(seq14562);
var seq14562__$1 = cljs.core.next(seq14562);
return cljs_time.core.extend.cljs$core$IFn$_invoke$arity$variadic(G__14563,seq14562__$1);
});
cljs_time.core.month_range = (function cljs_time$core$month_range(p__14569){
var map__14572 = p__14569;
var map__14572__$1 = ((((!((map__14572 == null)))?((((map__14572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14572):map__14572);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14572__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14572__$1,cljs.core.cst$kw$end);
return cljs.core.take_while.cljs$core$IFn$_invoke$arity$2(((function (map__14572,map__14572__$1,start,end){
return (function (p1__14567_SHARP_){
return cljs_time.core.before_QMARK_(p1__14567_SHARP_,end);
});})(map__14572,map__14572__$1,start,end))
,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (map__14572,map__14572__$1,start,end){
return (function (p1__14568_SHARP_){
return cljs_time.core.plus.cljs$core$IFn$_invoke$arity$2(start,cljs_time.core.months.cljs$core$IFn$_invoke$arity$1((p1__14568_SHARP_ + (1))));
});})(map__14572,map__14572__$1,start,end))
,cljs.core.range.cljs$core$IFn$_invoke$arity$0()));
});
cljs_time.core.total_days_in_whole_months = (function cljs_time$core$total_days_in_whole_months(interval){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__14574_SHARP_){
return p1__14574_SHARP_.getNumberOfDaysInMonth();
}),cljs_time.core.month_range(interval));
});
/**
 * Returns the number of months in the given Interval.
 * 
 *   For example, the interval 2nd Jan 2012 midnight to 2nd Feb 2012 midnight,
 *   returns 1 month.
 * 
 *   Likewise, 29th Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
 * 
 *   But also, 31st Dec 2011 midnight to 29th Feb 2012 midnight returns 2 months.
 * 
 *   And, 28th Dec 2012 midnight to 28th Feb 2013 midnight returns 2 months.
 */
cljs_time.core.in_months_ = (function cljs_time$core$in_months_(p__14575){
var map__14578 = p__14575;
var map__14578__$1 = ((((!((map__14578 == null)))?((((map__14578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14578):map__14578);
var interval = map__14578__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14578__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14578__$1,cljs.core.cst$kw$end);
return cljs.core.count(cljs_time.core.total_days_in_whole_months(interval));
});
/**
 * Returns the number of standard years in the given Interval.
 */
cljs_time.core.in_years_ = (function cljs_time$core$in_years_(p__14580){
var map__14583 = p__14580;
var map__14583__$1 = ((((!((map__14583 == null)))?((((map__14583.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14583.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14583):map__14583);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14583__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14583__$1,cljs.core.cst$kw$end);
var sm = cljs_time.core.month(start);
var sd = cljs_time.core.day(start);
var em = cljs_time.core.month(end);
var ed = cljs_time.core.day(end);
var d1 = (cljs.core.truth_((function (){var and__6104__auto__ = (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(sm,(2)) : cljs_time.core._EQ_.call(null,sm,(2)));
if(cljs.core.truth_(and__6104__auto__)){
var and__6104__auto____$1 = (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(sd,(29)) : cljs_time.core._EQ_.call(null,sd,(29)));
if(cljs.core.truth_(and__6104__auto____$1)){
var and__6104__auto____$2 = (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(em,(2)) : cljs_time.core._EQ_.call(null,em,(2)));
if(cljs.core.truth_(and__6104__auto____$2)){
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(ed,(28)) : cljs_time.core._EQ_.call(null,ed,(28)));
} else {
return and__6104__auto____$2;
}
} else {
return and__6104__auto____$1;
}
} else {
return and__6104__auto__;
}
})())?(0):(cljs.core.truth_(cljs_time.core.before_QMARK_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),sm,sd),cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),em,ed)))?(0):(cljs.core.truth_(cljs_time.core.after_QMARK_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),sm,sd),cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$3(cljs_time.core.year(start),em,ed)))?(1):(0)
)));
return ((cljs_time.core.year(end) - cljs_time.core.year(start)) - d1);
});
cljs_time.core.conversion_error = (function cljs_time$core$conversion_error(from,to){
var from__$1 = clojure.string.capitalize(cljs.core.name(from));
var to__$1 = cljs.core.name(to);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic("%s cannot be converted to %s",cljs.core.array_seq([from__$1,to__$1], 0)),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$type,cljs.core.cst$kw$unsupported_DASH_operation], null));
});
cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$ = true;

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__14585){
var map__14586 = p__14585;
var map__14586__$1 = ((((!((map__14586 == null)))?((((map__14586.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14586.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14586):map__14586);
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14586__$1,cljs.core.cst$kw$millis);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14586__$1,cljs.core.cst$kw$seconds);
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14586__$1,cljs.core.cst$kw$minutes);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14586__$1,cljs.core.cst$kw$hours);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14586__$1,cljs.core.cst$kw$days);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14586__$1,cljs.core.cst$kw$weeks);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14586__$1,cljs.core.cst$kw$months);
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14586__$1,cljs.core.cst$kw$years);
var map__14588 = this;
var map__14588__$1 = ((((!((map__14588 == null)))?((((map__14588.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14588.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14588):map__14588);
var millis__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14588__$1,cljs.core.cst$kw$millis);
var seconds__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14588__$1,cljs.core.cst$kw$seconds);
var minutes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14588__$1,cljs.core.cst$kw$minutes);
var hours__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14588__$1,cljs.core.cst$kw$hours);
var days__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14588__$1,cljs.core.cst$kw$days);
var weeks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14588__$1,cljs.core.cst$kw$weeks);
var months__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14588__$1,cljs.core.cst$kw$months);
var years__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14588__$1,cljs.core.cst$kw$years);
if(cljs.core.truth_(months__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$months,cljs.core.cst$kw$millis);
} else {
if(cljs.core.truth_(years__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$years,cljs.core.cst$kw$millis);
} else {
return (((((millis__$1 + (seconds__$1 * (1000))) + ((minutes__$1 * (60)) * (1000))) + (((hours__$1 * (60)) * (60)) * (1000))) + ((((days__$1 * (24)) * (60)) * (60)) * (1000))) + (((((weeks__$1 * (7)) * (24)) * (60)) * (60)) * (1000)));

}
}
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_millis(this$__$1) / (1000)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_seconds(this$__$1) / (60)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_minutes(this$__$1) / (60)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_hours(this$__$1) / (24)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_days(this$__$1) / (7)) | (0));
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (p__14590){
var map__14591 = p__14590;
var map__14591__$1 = ((((!((map__14591 == null)))?((((map__14591.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14591.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14591):map__14591);
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14591__$1,cljs.core.cst$kw$millis);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14591__$1,cljs.core.cst$kw$seconds);
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14591__$1,cljs.core.cst$kw$minutes);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14591__$1,cljs.core.cst$kw$hours);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14591__$1,cljs.core.cst$kw$days);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14591__$1,cljs.core.cst$kw$weeks);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14591__$1,cljs.core.cst$kw$months);
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14591__$1,cljs.core.cst$kw$years);
var map__14593 = this;
var map__14593__$1 = ((((!((map__14593 == null)))?((((map__14593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14593):map__14593);
var millis__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14593__$1,cljs.core.cst$kw$millis);
var seconds__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14593__$1,cljs.core.cst$kw$seconds);
var minutes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14593__$1,cljs.core.cst$kw$minutes);
var hours__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14593__$1,cljs.core.cst$kw$hours);
var days__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14593__$1,cljs.core.cst$kw$days);
var weeks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14593__$1,cljs.core.cst$kw$weeks);
var months__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14593__$1,cljs.core.cst$kw$months);
var years__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14593__$1,cljs.core.cst$kw$years);
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$millis,cljs.core.cst$kw$months);
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$seconds,cljs.core.cst$kw$months);
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$minutes,cljs.core.cst$kw$months);
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$hours,cljs.core.cst$kw$months);
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$days,cljs.core.cst$kw$months);
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$weeks,cljs.core.cst$kw$months);
} else {
if(cljs.core.truth_(months__$1)){
return (months__$1 + ((function (){var or__6116__auto__ = years__$1;
if(cljs.core.truth_(or__6116__auto__)){
return or__6116__auto__;
} else {
return (0);
}
})() * (12)));
} else {
if(cljs.core.truth_(years__$1)){
return (years__$1 * (12));
} else {
return null;
}
}
}
}
}
}
}
}
});

cljs_time.core.Period.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (p__14595){
var map__14596 = p__14595;
var map__14596__$1 = ((((!((map__14596 == null)))?((((map__14596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14596):map__14596);
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14596__$1,cljs.core.cst$kw$millis);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14596__$1,cljs.core.cst$kw$seconds);
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14596__$1,cljs.core.cst$kw$minutes);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14596__$1,cljs.core.cst$kw$hours);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14596__$1,cljs.core.cst$kw$days);
var weeks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14596__$1,cljs.core.cst$kw$weeks);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14596__$1,cljs.core.cst$kw$months);
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14596__$1,cljs.core.cst$kw$years);
var map__14598 = this;
var map__14598__$1 = ((((!((map__14598 == null)))?((((map__14598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14598):map__14598);
var millis__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14598__$1,cljs.core.cst$kw$millis);
var seconds__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14598__$1,cljs.core.cst$kw$seconds);
var minutes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14598__$1,cljs.core.cst$kw$minutes);
var hours__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14598__$1,cljs.core.cst$kw$hours);
var days__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14598__$1,cljs.core.cst$kw$days);
var weeks__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14598__$1,cljs.core.cst$kw$weeks);
var months__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14598__$1,cljs.core.cst$kw$months);
var years__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14598__$1,cljs.core.cst$kw$years);
if(cljs.core.truth_(millis__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$millis,cljs.core.cst$kw$years);
} else {
if(cljs.core.truth_(seconds__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$seconds,cljs.core.cst$kw$years);
} else {
if(cljs.core.truth_(minutes__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$minutes,cljs.core.cst$kw$years);
} else {
if(cljs.core.truth_(hours__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$hours,cljs.core.cst$kw$years);
} else {
if(cljs.core.truth_(days__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$days,cljs.core.cst$kw$years);
} else {
if(cljs.core.truth_(weeks__$1)){
return cljs_time.core.conversion_error(cljs.core.cst$kw$weeks,cljs.core.cst$kw$years);
} else {
if(cljs.core.truth_(months__$1)){
return (((months__$1 / (12)) + years__$1) | (0));
} else {
if(cljs.core.truth_(years__$1)){
return years__$1;
} else {
return null;
}
}
}
}
}
}
}
}
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$ = true;

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_millis$arity$1 = (function (p__14600){
var map__14601 = p__14600;
var map__14601__$1 = ((((!((map__14601 == null)))?((((map__14601.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14601.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14601):map__14601);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14601__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14601__$1,cljs.core.cst$kw$end);
var map__14603 = this;
var map__14603__$1 = ((((!((map__14603 == null)))?((((map__14603.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14603.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14603):map__14603);
var start__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14603__$1,cljs.core.cst$kw$start);
var end__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14603__$1,cljs.core.cst$kw$end);
return (end__$1.getTime() - start__$1.getTime());
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_seconds$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_millis(this$__$1) / (1000)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_minutes$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_seconds(this$__$1) / (60)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_hours$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_minutes(this$__$1) / (60)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_days$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_hours(this$__$1) / (24)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_weeks$arity$1 = (function (this$){
var this$__$1 = this;
return ((cljs_time.core.in_days(this$__$1) / (7)) | (0));
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_months$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.in_months_(this$__$1);
});

cljs_time.core.Interval.prototype.cljs_time$core$InTimeUnitProtocol$in_years$arity$1 = (function (this$){
var this$__$1 = this;
return cljs_time.core.in_years_(this$__$1);
});
/**
 * With 2 arguments: Returns true if the given Interval contains the given
 *   ReadableDateTime. Note that if the ReadableDateTime is exactly equal to the
 *   end of the interval, this function returns false.
 * 
 *   With 3 arguments: Returns true if the start ReadablePartial is
 *   equal to or before and the end ReadablePartial is equal to or after the test
 *   ReadablePartial.
 */
cljs_time.core.within_QMARK_ = (function cljs_time$core$within_QMARK_(var_args){
var args14605 = [];
var len__7185__auto___14611 = arguments.length;
var i__7186__auto___14612 = (0);
while(true){
if((i__7186__auto___14612 < len__7185__auto___14611)){
args14605.push((arguments[i__7186__auto___14612]));

var G__14613 = (i__7186__auto___14612 + (1));
i__7186__auto___14612 = G__14613;
continue;
} else {
}
break;
}

var G__14607 = args14605.length;
switch (G__14607) {
case 2:
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14605.length)].join('')));

}
});

cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__14608,date){
var map__14609 = p__14608;
var map__14609__$1 = ((((!((map__14609 == null)))?((((map__14609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14609):map__14609);
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14609__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14609__$1,cljs.core.cst$kw$end);
return cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3(start,end,date);
});

cljs_time.core.within_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (start,end,date){
var or__6116__auto__ = (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(start,date) : cljs_time.core._EQ_.call(null,start,date));
if(cljs.core.truth_(or__6116__auto__)){
return or__6116__auto__;
} else {
var and__6104__auto__ = cljs_time.core.before_QMARK_(start,date);
if(cljs.core.truth_(and__6104__auto__)){
return cljs_time.core.after_QMARK_(end,date);
} else {
return and__6104__auto__;
}
}
});

cljs_time.core.within_QMARK_.cljs$lang$maxFixedArity = 3;
/**
 * With 2 arguments: Returns true of the two given Intervals overlap.
 *   Note that intervals that satisfy abuts? do not satisfy overlaps?
 * 
 *   With 4 arguments: Returns true if the range specified by start-a and end-a
 *   overlaps with the range specified by start-b and end-b.
 */
cljs_time.core.overlaps_QMARK_ = (function cljs_time$core$overlaps_QMARK_(var_args){
var args14615 = [];
var len__7185__auto___14624 = arguments.length;
var i__7186__auto___14625 = (0);
while(true){
if((i__7186__auto___14625 < len__7185__auto___14624)){
args14615.push((arguments[i__7186__auto___14625]));

var G__14626 = (i__7186__auto___14625 + (1));
i__7186__auto___14625 = G__14626;
continue;
} else {
}
break;
}

var G__14617 = args14615.length;
switch (G__14617) {
case 2:
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14615.length)].join('')));

}
});

cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (p__14618,p__14619){
var map__14620 = p__14618;
var map__14620__$1 = ((((!((map__14620 == null)))?((((map__14620.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14620.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14620):map__14620);
var start_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14620__$1,cljs.core.cst$kw$start);
var end_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14620__$1,cljs.core.cst$kw$end);
var map__14621 = p__14619;
var map__14621__$1 = ((((!((map__14621 == null)))?((((map__14621.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14621.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14621):map__14621);
var start_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14621__$1,cljs.core.cst$kw$start);
var end_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14621__$1,cljs.core.cst$kw$end);
var and__6104__auto__ = cljs.core.not((function (){var or__6116__auto__ = (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_a,end_b) : cljs_time.core._EQ_.call(null,start_a,end_b));
if(cljs.core.truth_(or__6116__auto__)){
return or__6116__auto__;
} else {
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(end_a,start_b) : cljs_time.core._EQ_.call(null,end_a,start_b));
}
})());
if(and__6104__auto__){
return cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4(start_a,end_a,start_b,end_b);
} else {
return and__6104__auto__;
}
});

cljs_time.core.overlaps_QMARK_.cljs$core$IFn$_invoke$arity$4 = (function (start_a,end_a,start_b,end_b){
var or__6116__auto__ = (function (){var and__6104__auto__ = cljs_time.core.before_QMARK_(start_b,end_a);
if(cljs.core.truth_(and__6104__auto__)){
return cljs_time.core.after_QMARK_(end_b,start_a);
} else {
return and__6104__auto__;
}
})();
if(cljs.core.truth_(or__6116__auto__)){
return or__6116__auto__;
} else {
var or__6116__auto____$1 = (function (){var and__6104__auto__ = cljs_time.core.after_QMARK_(end_b,start_a);
if(cljs.core.truth_(and__6104__auto__)){
return cljs_time.core.before_QMARK_(start_b,end_a);
} else {
return and__6104__auto__;
}
})();
if(cljs.core.truth_(or__6116__auto____$1)){
return or__6116__auto____$1;
} else {
var or__6116__auto____$2 = (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_a,end_b) : cljs_time.core._EQ_.call(null,start_a,end_b));
if(cljs.core.truth_(or__6116__auto____$2)){
return or__6116__auto____$2;
} else {
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_b,end_a) : cljs_time.core._EQ_.call(null,start_b,end_a));
}
}
}
});

cljs_time.core.overlaps_QMARK_.cljs$lang$maxFixedArity = 4;
/**
 * Returns true if Interval a abuts b, i.e. then end of a is exactly the
 *   beginning of b.
 */
cljs_time.core.abuts_QMARK_ = (function cljs_time$core$abuts_QMARK_(p__14628,p__14629){
var map__14634 = p__14628;
var map__14634__$1 = ((((!((map__14634 == null)))?((((map__14634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14634):map__14634);
var start_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14634__$1,cljs.core.cst$kw$start);
var end_a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14634__$1,cljs.core.cst$kw$end);
var map__14635 = p__14629;
var map__14635__$1 = ((((!((map__14635 == null)))?((((map__14635.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14635.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14635):map__14635);
var start_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14635__$1,cljs.core.cst$kw$start);
var end_b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14635__$1,cljs.core.cst$kw$end);
var or__6116__auto__ = (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_a,end_b) : cljs_time.core._EQ_.call(null,start_a,end_b));
if(cljs.core.truth_(or__6116__auto__)){
return or__6116__auto__;
} else {
return (cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2 ? cljs_time.core._EQ_.cljs$core$IFn$_invoke$arity$2(end_a,start_b) : cljs_time.core._EQ_.call(null,end_a,start_b));
}
});
cljs_time.core.date_QMARK_ = (function cljs_time$core$date_QMARK_(x){
if(!((x == null))){
if((false) || (x.cljs_time$core$DateTimeProtocol$)){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs_time.core.DateTimeProtocol,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs_time.core.DateTimeProtocol,x);
}
});
cljs_time.core.interval_QMARK_ = (function cljs_time$core$interval_QMARK_(x){
return (x instanceof cljs_time.core.Interval);
});
cljs_time.core.period_QMARK_ = (function cljs_time$core$period_QMARK_(x){
return (x instanceof cljs_time.core.Period);
});
cljs_time.core.period_type_QMARK_ = (function cljs_time$core$period_type_QMARK_(type,x){
var and__6104__auto__ = cljs_time.core.period_QMARK_(x);
if(cljs.core.truth_(and__6104__auto__)){
return cljs.core.contains_QMARK_(x,type);
} else {
return and__6104__auto__;
}
});
/**
 * Returns true if the given value is an instance of Years
 */
cljs_time.core.years_QMARK_ = (function cljs_time$core$years_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.cst$kw$years,val);
});
/**
 * Returns true if the given value is an instance of Months
 */
cljs_time.core.months_QMARK_ = (function cljs_time$core$months_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.cst$kw$months,val);
});
/**
 * Returns true if the given value is an instance of Weeks
 */
cljs_time.core.weeks_QMARK_ = (function cljs_time$core$weeks_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.cst$kw$weeks,val);
});
/**
 * Returns true if the given value is an instance of Days
 */
cljs_time.core.days_QMARK_ = (function cljs_time$core$days_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.cst$kw$days,val);
});
/**
 * Returns true if the given value is an instance of Hours
 */
cljs_time.core.hours_QMARK_ = (function cljs_time$core$hours_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.cst$kw$hours,val);
});
/**
 * Returns true if the given value is an instance of Minutes
 */
cljs_time.core.minutes_QMARK_ = (function cljs_time$core$minutes_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.cst$kw$minutes,val);
});
/**
 * Returns true if the given value is an instance of Seconds
 */
cljs_time.core.seconds_QMARK_ = (function cljs_time$core$seconds_QMARK_(val){
return cljs_time.core.period_type_QMARK_(cljs.core.cst$kw$seconds,val);
});
cljs_time.core.mins_ago = (function cljs_time$core$mins_ago(d){
return cljs_time.core.in_minutes(cljs_time.core.interval(d,cljs_time.core.now()));
});
cljs_time.core.last_day_of_the_month = (function cljs_time$core$last_day_of_the_month(var_args){
var args14640 = [];
var len__7185__auto___14643 = arguments.length;
var i__7186__auto___14644 = (0);
while(true){
if((i__7186__auto___14644 < len__7185__auto___14643)){
args14640.push((arguments[i__7186__auto___14644]));

var G__14645 = (i__7186__auto___14644 + (1));
i__7186__auto___14644 = G__14645;
continue;
} else {
}
break;
}

var G__14642 = args14640.length;
switch (G__14642) {
case 1:
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14640.length)].join('')));

}
});

cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.last_day_of_the_month_(dt);
});

cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.last_day_of_the_month_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2(year,month));
});

cljs_time.core.last_day_of_the_month.cljs$lang$maxFixedArity = 2;
cljs_time.core.number_of_days_in_the_month = (function cljs_time$core$number_of_days_in_the_month(var_args){
var args14647 = [];
var len__7185__auto___14650 = arguments.length;
var i__7186__auto___14651 = (0);
while(true){
if((i__7186__auto___14651 < len__7185__auto___14650)){
args14647.push((arguments[i__7186__auto___14651]));

var G__14652 = (i__7186__auto___14651 + (1));
i__7186__auto___14651 = G__14652;
continue;
} else {
}
break;
}

var G__14649 = args14647.length;
switch (G__14649) {
case 1:
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14647.length)].join('')));

}
});

cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2(cljs_time.core.year(dt),cljs_time.core.month(dt));
});

cljs_time.core.number_of_days_in_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.last_day_of_the_month.cljs$core$IFn$_invoke$arity$2(year,month).getDate();
});

cljs_time.core.number_of_days_in_the_month.cljs$lang$maxFixedArity = 2;
cljs_time.core.first_day_of_the_month = (function cljs_time$core$first_day_of_the_month(var_args){
var args14654 = [];
var len__7185__auto___14657 = arguments.length;
var i__7186__auto___14658 = (0);
while(true){
if((i__7186__auto___14658 < len__7185__auto___14657)){
args14654.push((arguments[i__7186__auto___14658]));

var G__14659 = (i__7186__auto___14658 + (1));
i__7186__auto___14658 = G__14659;
continue;
} else {
}
break;
}

var G__14656 = args14654.length;
switch (G__14656) {
case 1:
return cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14654.length)].join('')));

}
});

cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$1 = (function (dt){
return cljs_time.core.first_day_of_the_month_(dt);
});

cljs_time.core.first_day_of_the_month.cljs$core$IFn$_invoke$arity$2 = (function (year,month){
return cljs_time.core.first_day_of_the_month_(cljs_time.core.date_time.cljs$core$IFn$_invoke$arity$2(year,month));
});

cljs_time.core.first_day_of_the_month.cljs$lang$maxFixedArity = 2;
if(typeof cljs_time.core.__GT_period !== 'undefined'){
} else {
cljs_time.core.__GT_period = (function (){var method_table__7040__auto__ = (function (){var G__14661 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14661) : cljs.core.atom.call(null,G__14661));
})();
var prefer_table__7041__auto__ = (function (){var G__14662 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14662) : cljs.core.atom.call(null,G__14662));
})();
var method_cache__7042__auto__ = (function (){var G__14663 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14663) : cljs.core.atom.call(null,G__14663));
})();
var cached_hierarchy__7043__auto__ = (function (){var G__14664 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__14664) : cljs.core.atom.call(null,G__14664));
})();
var hierarchy__7044__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("cljs-time.core","->period"),cljs.core.type,cljs.core.cst$kw$default,hierarchy__7044__auto__,method_table__7040__auto__,prefer_table__7041__auto__,method_cache__7042__auto__,cached_hierarchy__7043__auto__));
})();
}
cljs_time.core.__GT_period.cljs$core$IMultiFn$_add_method$arity$3(null,cljs_time.core.Interval,(function (p__14665){
var map__14666 = p__14665;
var map__14666__$1 = ((((!((map__14666 == null)))?((((map__14666.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14666.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__14666):map__14666);
var interval = map__14666__$1;
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14666__$1,cljs.core.cst$kw$start);
var end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14666__$1,cljs.core.cst$kw$end);
var years = cljs_time.core.in_years(interval);
var start_year = cljs_time.core.year(start);
var leap_years = cljs.core.count(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.false_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_time.internal.core.leap_year_QMARK_,cljs.core.range.cljs$core$IFn$_invoke$arity$2(start_year,(start_year + years)))));
var start_month = cljs_time.core.month(start);
var days_in_months = cljs_time.core.total_days_in_whole_months(interval);
var months = cljs.core.count(days_in_months);
var days_to_remove = ((((365) * years) + leap_years) + cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,days_in_months));
var days = (cljs_time.core.in_days(interval) - days_to_remove);
var hours_to_remove = ((24) * (days + days_to_remove));
var hours = (cljs_time.core.in_hours(interval) - hours_to_remove);
var minutes_to_remove = ((60) * (hours + hours_to_remove));
var minutes = (cljs_time.core.in_minutes(interval) - minutes_to_remove);
var seconds_to_remove = ((60) * (minutes + minutes_to_remove));
var seconds = (cljs_time.core.in_seconds(interval) - seconds_to_remove);
return cljs_time.core.period.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$years,years,cljs.core.array_seq([cljs.core.cst$kw$months,months,cljs.core.cst$kw$days,days,cljs.core.cst$kw$hours,hours,cljs.core.cst$kw$minutes,minutes,cljs.core.cst$kw$seconds,seconds,cljs.core.cst$kw$millis,(cljs_time.core.in_millis(interval) - ((1000) * (seconds + seconds_to_remove)))], 0));
}));
cljs_time.core.__GT_period.cljs$core$IMultiFn$_add_method$arity$3(null,cljs_time.core.Period,(function (period){
return period;
}));
cljs_time.core.today_at = (function cljs_time$core$today_at(var_args){
var args14668 = [];
var len__7185__auto___14672 = arguments.length;
var i__7186__auto___14673 = (0);
while(true){
if((i__7186__auto___14673 < len__7185__auto___14672)){
args14668.push((arguments[i__7186__auto___14673]));

var G__14674 = (i__7186__auto___14673 + (1));
i__7186__auto___14673 = G__14674;
continue;
} else {
}
break;
}

var G__14670 = args14668.length;
switch (G__14670) {
case 4:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 3:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14668.length)].join('')));

}
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4 = (function (hours,minutes,seconds,millis){
var midnight = (new goog.date.Date());
var G__14671 = (new goog.date.UtcDateTime((0)));
G__14671.setYear(midnight.getYear());

G__14671.setMonth(midnight.getMonth());

G__14671.setDate(midnight.getDate());

G__14671.setHours(hours);

G__14671.setMinutes(minutes);

G__14671.setSeconds(seconds);

G__14671.setMilliseconds(millis);

return G__14671;
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3 = (function (hours,minutes,seconds){
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$4(hours,minutes,seconds,(0));
});

cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$2 = (function (hours,minutes){
return cljs_time.core.today_at.cljs$core$IFn$_invoke$arity$3(hours,minutes,(0));
});

cljs_time.core.today_at.cljs$lang$maxFixedArity = 4;
cljs_time.core.do_at_STAR_ = (function cljs_time$core$do_at_STAR_(base_date_time,body_fn){
var _STAR_sys_time_STAR_14677 = cljs_time.core._STAR_sys_time_STAR_;
cljs_time.core._STAR_sys_time_STAR_ = base_date_time;

try{return (body_fn.cljs$core$IFn$_invoke$arity$0 ? body_fn.cljs$core$IFn$_invoke$arity$0() : body_fn.call(null));
}finally {cljs_time.core._STAR_sys_time_STAR_ = _STAR_sys_time_STAR_14677;
}});
