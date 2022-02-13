/*
 * jQuery Tiny Pub/Sub
 * https://github.com/Amirmoghtader
 *
 * Copyright (c) 2022 Amir
 * Licensed under the MIT license.
 */

define([
    'jquery'
    ],
function($) {
    var o = $({});
    $.subscribe = function() {
        o.on.apply(o, arguments);
    };
    $.unsubscribe = function() {
        o.off.apply(o, arguments);
    };
    $.publish = function() {
        o.trigger.apply(o, arguments);
    };
});