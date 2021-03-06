/**
 * jquery.cbpNTAccordion.min.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
(function(d,b,e){var c=d("html, body");d.CBPNTAccordion=function(f,g){this.$el=d(g);this._init(f)};d.CBPNTAccordion.defaults={};d.CBPNTAccordion.prototype={_init:function(f){this.options=d.extend(true,{},d.CBPNTAccordion.defaults,f);this._config();this._initEvents()},_config:function(){this.$items=this.$el.find(".cbp-nttrigger")},_initEvents:function(){this.$items.on("click.cbpNTAccordion",function(){var f=d(this).parent();if(f.hasClass("cbp-ntopen")){f.removeClass("cbp-ntopen")}else{f.addClass("cbp-ntopen");/*c.scrollTop(f.offset().top+60)*/}})},destroy:function(){this.$items.off(".cbpNTAccordion").parent().removeClass("cbp-ntopen")}};var a=function(f){if(b.console){b.console.error(f)}};d.fn.cbpNTAccordion=function(g){if(typeof g==="string"){var f=Array.prototype.slice.call(arguments,1);this.each(function(){var h=d.data(this,"cbpNTAccordion");if(!h){a("cannot call methods on cbpNTAccordion prior to initialization; attempted to call method '"+g+"'");return}if(!d.isFunction(h[g])||g.charAt(0)==="_"){a("no such method '"+g+"' for cbpNTAccordion instance");return}h[g].apply(h,f)})}else{this.each(function(){var h=d.data(this,"cbpNTAccordion");if(h){h._init()}else{h=d.data(this,"cbpNTAccordion",new d.CBPNTAccordion(g,this))}})}return this}})(jQuery,window);
