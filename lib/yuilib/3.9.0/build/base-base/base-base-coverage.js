/* YUI 3.9.0 (build 5827) Copyright 2013 Yahoo! Inc. http://yuilibrary.com/license/ */
if (typeof _yuitest_coverage == "undefined"){
    _yuitest_coverage = {};
    _yuitest_coverline = function(src, line){
        var coverage = _yuitest_coverage[src];
        if (!coverage.lines[line]){
            coverage.calledLines++;
        }
        coverage.lines[line]++;
    };
    _yuitest_coverfunc = function(src, name, line){
        var coverage = _yuitest_coverage[src],
            funcId = name + ":" + line;
        if (!coverage.functions[funcId]){
            coverage.calledFunctions++;
        }
        coverage.functions[funcId]++;
    };
}
_yuitest_coverage["build/base-base/base-base.js"] = {
    lines: {},
    functions: {},
    coveredLines: 0,
    calledLines: 0,
    coveredFunctions: 0,
    calledFunctions: 0,
    path: "build/base-base/base-base.js",
    code: []
};
_yuitest_coverage["build/base-base/base-base.js"].code=["YUI.add('base-base', function (Y, NAME) {","","    /**","     * The base module provides the Base class, which objects requiring attribute and custom event support can extend.","     * The module also provides two ways to reuse code - It augments Base with the Plugin.Host interface which provides","     * plugin support and also provides the BaseCore.build method which provides a way to build custom classes using extensions.","     *","     * @module base","     */","","    /**","     * The base-base submodule provides the Base class without the Plugin support, provided by Plugin.Host,","     * and without the extension support provided by BaseCore.build.","     *","     * @module base","     * @submodule base-base","     */","","    var AttributeCore   = Y.AttributeCore,","        AttributeExtras = Y.AttributeExtras,","        BaseCore        = Y.BaseCore,","        BaseObservable  = Y.BaseObservable;","","    /**","     * <p>","     * A base class which objects requiring attributes and custom event support can","     * extend. Base also handles the chaining of initializer and destructor methods across","     * the hierarchy as part of object construction and destruction. Additionally, attributes configured","     * through the static <a href=\"#property_ATTRS\">ATTRS</a> property for each class","     * in the hierarchy will be initialized by Base.","     * </p>","     *","     * <p>","     * The static <a href=\"#property_NAME\">NAME</a> property of each class extending","     * from Base will be used as the identifier for the class, and is used by Base to prefix","     * all events fired by instances of that class.","     * </p>","     *","     * @class Base","     * @constructor","     * @uses BaseCore","     * @uses BaseObservable","     * @uses AttributeCore","     * @uses AttributeObservable","     * @uses AttributeExtras","     * @uses EventTarget","     *","     * @param {Object} config Object with configuration property name/value pairs. The object can be","     * used to provide default values for the objects published attributes.","     *","     * <p>","     * The config object can also contain the following non-attribute properties, providing a convenient","     * way to configure events listeners and plugins for the instance, as part of the constructor call:","     * </p>","     *","     * <dl>","     *     <dt>on</dt>","     *     <dd>An event name to listener function map, to register event listeners for the \"on\" moment of the event. A constructor convenience property for the <a href=\"Base.html#method_on\">on</a> method.</dd>","     *     <dt>after</dt>","     *     <dd>An event name to listener function map, to register event listeners for the \"after\" moment of the event. A constructor convenience property for the <a href=\"Base.html#method_after\">after</a> method.</dd>","     *     <dt>bubbleTargets</dt>","     *     <dd>An object, or array of objects, to register as bubble targets for bubbled events fired by this instance. A constructor convenience property for the <a href=\"EventTarget.html#method_addTarget\">addTarget</a> method.</dd>","     *     <dt>plugins</dt>","     *     <dd>A plugin, or array of plugins to be plugged into the instance (see PluginHost's plug method for signature details). A constructor convenience property for the <a href=\"Plugin.Host.html#method_plug\">plug</a> method.</dd>","     * </dl>","     */","    function Base() {","        BaseCore.apply(this, arguments);","        BaseObservable.apply(this, arguments);","        AttributeExtras.apply(this, arguments);","    }","","    /**","     * The list of properties which can be configured for","     * each attribute (e.g. setter, getter, writeOnce, readOnly etc.)","     *","     * @property _ATTR_CFG","     * @type Array","     * @static","     * @private","     */","    Base._ATTR_CFG = BaseCore._ATTR_CFG.concat(BaseObservable._ATTR_CFG);","","    /**","     * The array of non-attribute configuration properties supported by this class.","     *","     * `Base` supports \"on\", \"after\", \"plugins\" and \"bubbleTargets\" properties,","     * which are not set up as attributes.","     *","     * This property is primarily required so that when","     * <a href=\"#property__allowAdHocAttrs\">`_allowAdHocAttrs`</a> is enabled by","     * a class, non-attribute configurations don't get added as ad-hoc attributes.","     *","     * @property _NON_ATTRS_CFG","     * @type Array","     * @static","     * @private","     */","    Base._NON_ATTRS_CFG = BaseCore._NON_ATTRS_CFG.concat(BaseObservable._NON_ATTRS_CFG);","","    /**","     * <p>","     * The string to be used to identify instances of","     * this class, for example in prefixing events.","     * </p>","     * <p>","     * Classes extending Base, should define their own","     * static NAME property, which should be camelCase by","     * convention (e.g. MyClass.NAME = \"myClass\";).","     * </p>","     * @property NAME","     * @type String","     * @static","     */","    Base.NAME = 'base';","","    /**","     * The default set of attributes which will be available for instances of this class, and","     * their configuration. In addition to the configuration properties listed by","     * Attribute's <a href=\"Attribute.html#method_addAttr\">addAttr</a> method, the attribute","     * can also be configured with a \"cloneDefaultValue\" property, which defines how the statically","     * defined value field should be protected (\"shallow\", \"deep\" and false are supported values).","     *","     * By default if the value is an object literal or an array it will be \"shallow\" cloned, to","     * protect the default value.","     *","     * @property ATTRS","     * @type Object","     * @static","     */","    Base.ATTRS = AttributeCore.protectAttrs(BaseCore.ATTRS);","","    Y.mix(Base, BaseCore, false, null, 1);","    Y.mix(Base, AttributeExtras, false, null, 1);","","    // Needs to be `true`, to overwrite methods from `BaseCore`.","    Y.mix(Base, BaseObservable, true, null, 1);","","    // Fix constructor","    Base.prototype.constructor = Base;","","    Y.Base = Base;","","","}, '3.9.0', {\"requires\": [\"attribute-base\", \"base-core\", \"base-observable\"]});"];
_yuitest_coverage["build/base-base/base-base.js"].lines = {"1":0,"19":0,"67":0,"68":0,"69":0,"70":0,"82":0,"99":0,"115":0,"131":0,"133":0,"134":0,"137":0,"140":0,"142":0};
_yuitest_coverage["build/base-base/base-base.js"].functions = {"Base:67":0,"(anonymous 1):1":0};
_yuitest_coverage["build/base-base/base-base.js"].coveredLines = 15;
_yuitest_coverage["build/base-base/base-base.js"].coveredFunctions = 2;
_yuitest_coverline("build/base-base/base-base.js", 1);
YUI.add('base-base', function (Y, NAME) {

    /**
     * The base module provides the Base class, which objects requiring attribute and custom event support can extend.
     * The module also provides two ways to reuse code - It augments Base with the Plugin.Host interface which provides
     * plugin support and also provides the BaseCore.build method which provides a way to build custom classes using extensions.
     *
     * @module base
     */

    /**
     * The base-base submodule provides the Base class without the Plugin support, provided by Plugin.Host,
     * and without the extension support provided by BaseCore.build.
     *
     * @module base
     * @submodule base-base
     */

    _yuitest_coverfunc("build/base-base/base-base.js", "(anonymous 1)", 1);
_yuitest_coverline("build/base-base/base-base.js", 19);
var AttributeCore   = Y.AttributeCore,
        AttributeExtras = Y.AttributeExtras,
        BaseCore        = Y.BaseCore,
        BaseObservable  = Y.BaseObservable;

    /**
     * <p>
     * A base class which objects requiring attributes and custom event support can
     * extend. Base also handles the chaining of initializer and destructor methods across
     * the hierarchy as part of object construction and destruction. Additionally, attributes configured
     * through the static <a href="#property_ATTRS">ATTRS</a> property for each class
     * in the hierarchy will be initialized by Base.
     * </p>
     *
     * <p>
     * The static <a href="#property_NAME">NAME</a> property of each class extending
     * from Base will be used as the identifier for the class, and is used by Base to prefix
     * all events fired by instances of that class.
     * </p>
     *
     * @class Base
     * @constructor
     * @uses BaseCore
     * @uses BaseObservable
     * @uses AttributeCore
     * @uses AttributeObservable
     * @uses AttributeExtras
     * @uses EventTarget
     *
     * @param {Object} config Object with configuration property name/value pairs. The object can be
     * used to provide default values for the objects published attributes.
     *
     * <p>
     * The config object can also contain the following non-attribute properties, providing a convenient
     * way to configure events listeners and plugins for the instance, as part of the constructor call:
     * </p>
     *
     * <dl>
     *     <dt>on</dt>
     *     <dd>An event name to listener function map, to register event listeners for the "on" moment of the event. A constructor convenience property for the <a href="Base.html#method_on">on</a> method.</dd>
     *     <dt>after</dt>
     *     <dd>An event name to listener function map, to register event listeners for the "after" moment of the event. A constructor convenience property for the <a href="Base.html#method_after">after</a> method.</dd>
     *     <dt>bubbleTargets</dt>
     *     <dd>An object, or array of objects, to register as bubble targets for bubbled events fired by this instance. A constructor convenience property for the <a href="EventTarget.html#method_addTarget">addTarget</a> method.</dd>
     *     <dt>plugins</dt>
     *     <dd>A plugin, or array of plugins to be plugged into the instance (see PluginHost's plug method for signature details). A constructor convenience property for the <a href="Plugin.Host.html#method_plug">plug</a> method.</dd>
     * </dl>
     */
    _yuitest_coverline("build/base-base/base-base.js", 67);
function Base() {
        _yuitest_coverfunc("build/base-base/base-base.js", "Base", 67);
_yuitest_coverline("build/base-base/base-base.js", 68);
BaseCore.apply(this, arguments);
        _yuitest_coverline("build/base-base/base-base.js", 69);
BaseObservable.apply(this, arguments);
        _yuitest_coverline("build/base-base/base-base.js", 70);
AttributeExtras.apply(this, arguments);
    }

    /**
     * The list of properties which can be configured for
     * each attribute (e.g. setter, getter, writeOnce, readOnly etc.)
     *
     * @property _ATTR_CFG
     * @type Array
     * @static
     * @private
     */
    _yuitest_coverline("build/base-base/base-base.js", 82);
Base._ATTR_CFG = BaseCore._ATTR_CFG.concat(BaseObservable._ATTR_CFG);

    /**
     * The array of non-attribute configuration properties supported by this class.
     *
     * `Base` supports "on", "after", "plugins" and "bubbleTargets" properties,
     * which are not set up as attributes.
     *
     * This property is primarily required so that when
     * <a href="#property__allowAdHocAttrs">`_allowAdHocAttrs`</a> is enabled by
     * a class, non-attribute configurations don't get added as ad-hoc attributes.
     *
     * @property _NON_ATTRS_CFG
     * @type Array
     * @static
     * @private
     */
    _yuitest_coverline("build/base-base/base-base.js", 99);
Base._NON_ATTRS_CFG = BaseCore._NON_ATTRS_CFG.concat(BaseObservable._NON_ATTRS_CFG);

    /**
     * <p>
     * The string to be used to identify instances of
     * this class, for example in prefixing events.
     * </p>
     * <p>
     * Classes extending Base, should define their own
     * static NAME property, which should be camelCase by
     * convention (e.g. MyClass.NAME = "myClass";).
     * </p>
     * @property NAME
     * @type String
     * @static
     */
    _yuitest_coverline("build/base-base/base-base.js", 115);
Base.NAME = 'base';

    /**
     * The default set of attributes which will be available for instances of this class, and
     * their configuration. In addition to the configuration properties listed by
     * Attribute's <a href="Attribute.html#method_addAttr">addAttr</a> method, the attribute
     * can also be configured with a "cloneDefaultValue" property, which defines how the statically
     * defined value field should be protected ("shallow", "deep" and false are supported values).
     *
     * By default if the value is an object literal or an array it will be "shallow" cloned, to
     * protect the default value.
     *
     * @property ATTRS
     * @type Object
     * @static
     */
    _yuitest_coverline("build/base-base/base-base.js", 131);
Base.ATTRS = AttributeCore.protectAttrs(BaseCore.ATTRS);

    _yuitest_coverline("build/base-base/base-base.js", 133);
Y.mix(Base, BaseCore, false, null, 1);
    _yuitest_coverline("build/base-base/base-base.js", 134);
Y.mix(Base, AttributeExtras, false, null, 1);

    // Needs to be `true`, to overwrite methods from `BaseCore`.
    _yuitest_coverline("build/base-base/base-base.js", 137);
Y.mix(Base, BaseObservable, true, null, 1);

    // Fix constructor
    _yuitest_coverline("build/base-base/base-base.js", 140);
Base.prototype.constructor = Base;

    _yuitest_coverline("build/base-base/base-base.js", 142);
Y.Base = Base;


}, '3.9.0', {"requires": ["attribute-base", "base-core", "base-observable"]});
