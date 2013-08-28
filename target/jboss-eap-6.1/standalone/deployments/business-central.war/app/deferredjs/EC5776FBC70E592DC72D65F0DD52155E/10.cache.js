function $info(this$static, message, e){
  var record, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $info;
  this$static.currentLogLevel <= 20000 && (record = $LogRecord(($location_0[stackIndex] = 'LogImplBase.java:' + '326' , new LogRecord), 20000, message, e) , ($location_0[stackIndex] = 'LogImplBase.java:' + '327' , $sendToLoggers(this$static, record)) , undefined);
  $stackDepth_0 = stackIndex - 1;
}

function $fragmentHasLoaded(this$static, fragment){
  var logGroup, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $fragmentHasLoaded;
  $location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '535' , logGroup = fragment == this$static.numEntries?'leftoversDownload':'download' + fragment;
  $logEventProgress_0(logGroup, 'end', ($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '536' , valueOf_4(fragment)), null);
  if ($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '428' , $isInitial(this$static, fragment)) {
    $location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '430' , $remove(this$static.remainingInitialFragments);
    $remove_14(this$static.initialFragmentErrorHandlers, ($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '431' , valueOf_4(fragment)));
    $location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '433' , $startLoadingNextInitial(this$static);
  }
  $stackDepth_0 = stackIndex - 1;
}

function $leftoversFragmentHasLoaded(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $leftoversFragmentHasLoaded;
  $location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '481' , $fragmentHasLoaded(this$static, this$static.numEntries);
  $stackDepth_0 = stackIndex - 1;
}

function browserLoaderLeftoversFragmentHasLoaded(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = browserLoaderLeftoversFragmentHasLoaded;
  $location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '356' , $leftoversFragmentHasLoaded(BROWSER_LOADER);
  $stackDepth_0 = stackIndex - 1;
}

function $createSelectElement(doc, multiple){
  var select, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $createSelectElement;
  $location_0[stackIndex] = 'DOMImpl.java:' + '65' , select = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , doc.createElement('select'));
  multiple && ($location_0[stackIndex] = 'SelectElement.java:' + '202' , select.multiple = true , undefined);
  $stackDepth_0 = stackIndex - 1;
  return select;
}

function $getInnerText_0(this$static, node){
  var text = '', child = node.firstChild, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $getInnerText_0;
  while (child) {
    child.nodeType == 1?(text += ($location_0[stackIndex] = 'DOMImpl.java:' + '215' , this$static.getInnerText(child))):child.nodeValue && ($location_0[stackIndex] = 'DOMImpl.java:' + '217' , text += child.nodeValue);
    $location_0[stackIndex] = 'DOMImpl.java:' + '219' , child = child.nextSibling;
  }
  $stackDepth_0 = stackIndex - 1;
  return text;
}

function $getNextSiblingElement(elem){
  var sib = elem.nextSibling, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $getNextSiblingElement;
  while (sib && sib.nodeType != 1)
    $location_0[stackIndex] = 'DOMImpl.java:' + '227' , sib = sib.nextSibling;
  $stackDepth_0 = stackIndex - 1;
  return sib;
}

function getInnerText(node){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getInnerText;
  returnTemp = ($location_0[stackIndex] = 'DOMImpl.java:' + '208' , $getInnerText_0(this, node));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

_ = DOMImpl.prototype;
_.getInnerText = getInnerText;
function $createUniqueId(this$static){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $createUniqueId;
  !this$static.gwt_uid && ($location_0[stackIndex] = 'Document.java:' + '1087' , this$static.gwt_uid = 1);
  returnTemp = 'gwt-uid-' + ($location_0[stackIndex] = 'Document.java:' + '1090' , this$static.gwt_uid++);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function compareTo(p0){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = compareTo;
  returnTemp = this.ordinal - ($location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , dynamicCast(p0, 81)).ordinal;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

_ = Enum.prototype;
_.compareTo$ = compareTo;
function $clinit_124(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_124;
  $location_0[stackIndex] = 'ChangeEvent.java:' + '21' , $clinit_124 = nullMethod;
  TYPE_0 = ($location_0[stackIndex] = 'ChangeEvent.java:' + '27' , $DomEvent$Type(($location_0[stackIndex] = 'ChangeEvent.java:' + '27' , new DomEvent$Type), 'change', ($location_0[stackIndex] = 'ChangeEvent.java:' + '44' , $clinit_124() , ($location_0[stackIndex] = 'ChangeEvent.java:' + '28' , new ChangeEvent))));
  $stackDepth_0 = stackIndex - 1;
}

function dispatch_0(p0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = dispatch_0;
  $location_0[stackIndex] = 'ChangeEvent.java:' + '54' , ($location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , dynamicCast(p0, 17)).onChange(this);
  $stackDepth_0 = stackIndex - 1;
}

function getAssociatedType_1(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getAssociatedType_1;
  $stackDepth_0 = stackIndex - 1;
  return TYPE_0;
}

function getClass_74(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_74;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_event_dom_client_ChangeEvent_2_classLit;
}

function ChangeEvent(){
}

_ = ChangeEvent.prototype = new DomEvent;
_.dispatch = dispatch_0;
_.getAssociatedType_0 = getAssociatedType_1;
_.getClass$ = getClass_74;
_.typeId$ = 0;
var TYPE_0;
function initDims_0(arrayClasses, typeIdExprs, queryIdExprs, dimExprs, index, count, seedType){
  var i, isLastDim, length_0, result, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = initDims_0;
  length_0 = ($location_0[stackIndex] = 'Array.java:' + '232' , dimExprs[index]);
  $location_0[stackIndex] = 'Array.java:' + '233' , isLastDim = index == count - 1;
  result = ($location_0[stackIndex] = 'Array.java:' + '235' , createFromSeed(isLastDim?seedType:0, length_0));
  $location_0[stackIndex] = 'Array.java:' + '169' , $clinit_244();
  $location_0[stackIndex] = 'Array.java:' + '42' , wrapArray(result, expandoNames_0, expandoValues_0);
  $location_0[stackIndex] = 'Array.java:' + '170' , result.arrayClass$ = ($location_0[stackIndex] = 'Array.java:' + '236' , arrayClasses[index]);
  $location_0[stackIndex] = 'Util.java:' + '35' , result.typeId$ = ($location_0[stackIndex] = 'Array.java:' + '236' , typeIdExprs[index]);
  $location_0[stackIndex] = 'Array.java:' + '172' , result.queryId$ = ($location_0[stackIndex] = 'Array.java:' + '236' , queryIdExprs[index]);
  if (!isLastDim) {
    $location_0[stackIndex] = 'Array.java:' + '240' , ++index;
    for ($location_0[stackIndex] = 'Array.java:' + '241' , i = 0; i < length_0; $location_0[stackIndex] = 'Array.java:' + '241' , ++i) {
      $location_0[stackIndex] = 'Array.java:' + '253' , result[i] = ($location_0[stackIndex] = 'Array.java:' + '242' , initDims_0(arrayClasses, typeIdExprs, queryIdExprs, dimExprs, index, count, seedType));
    }
  }
  $stackDepth_0 = stackIndex - 1;
  return result;
}

function neq(a, b){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = neq;
  returnTemp = ($location_0[stackIndex] = 'LongLib.java:' + '354' , a[0]) != b[0] || a[1] != b[1];
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getClass_135(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_135;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader2_1_1Super_2_classLit;
}

function runCallbacks_1(){
}

function AsyncLoader2__Super(){
}

_ = AsyncLoader2__Super.prototype = new Object_0;
_.getClass$ = getClass_135;
_.runCallbacks = runCallbacks_1;
_.typeId$ = 0;
function $clinit_259(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_259;
  $location_0[stackIndex] = 'AsyncLoader2.java:' + '5' , $clinit_259 = nullMethod;
  instance_3 = ($location_0[stackIndex] = 'AsyncLoader2.java:' + '11' , new AsyncLoader2__Super);
  $stackDepth_0 = stackIndex - 1;
}

var callbacksHead_0 = null, callbacksTail_0 = null, instance_3, loaded_1 = false;
function getClass_139(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_139;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader3_1_1Super_2_classLit;
}

function runCallbacks_3(){
}

function AsyncLoader3__Super(){
}

_ = AsyncLoader3__Super.prototype = new Object_0;
_.getClass$ = getClass_139;
_.runCallbacks = runCallbacks_3;
_.typeId$ = 0;
function $clinit_263(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_263;
  $location_0[stackIndex] = 'AsyncLoader3.java:' + '5' , $clinit_263 = nullMethod;
  instance_4 = ($location_0[stackIndex] = 'AsyncLoader3.java:' + '11' , new AsyncLoader3__Super);
  $stackDepth_0 = stackIndex - 1;
}

var callbacksHead_1 = null, callbacksTail_1 = null, instance_4, loaded_2 = false;
function getClass_143(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_143;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader4_1_1Super_2_classLit;
}

function runCallbacks_5(){
}

function AsyncLoader4__Super(){
}

_ = AsyncLoader4__Super.prototype = new Object_0;
_.getClass$ = getClass_143;
_.runCallbacks = runCallbacks_5;
_.typeId$ = 0;
function $clinit_267(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_267;
  $location_0[stackIndex] = 'AsyncLoader4.java:' + '5' , $clinit_267 = nullMethod;
  instance_5 = ($location_0[stackIndex] = 'AsyncLoader4.java:' + '11' , new AsyncLoader4__Super);
  $stackDepth_0 = stackIndex - 1;
}

var callbacksHead_2 = null, callbacksTail_2 = null, instance_5, loaded_3 = false;
function getClass_147(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_147;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader5_1_1Super_2_classLit;
}

function runCallbacks_7(){
}

function AsyncLoader5__Super(){
}

_ = AsyncLoader5__Super.prototype = new Object_0;
_.getClass$ = getClass_147;
_.runCallbacks = runCallbacks_7;
_.typeId$ = 0;
function $clinit_271(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_271;
  $location_0[stackIndex] = 'AsyncLoader5.java:' + '5' , $clinit_271 = nullMethod;
  instance_6 = ($location_0[stackIndex] = 'AsyncLoader5.java:' + '11' , new AsyncLoader5__Super);
  $stackDepth_0 = stackIndex - 1;
}

var callbacksHead_3 = null, callbacksTail_3 = null, instance_6, loaded_4 = false;
function getClass_151(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_151;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader6_1_1Super_2_classLit;
}

function runCallbacks_9(){
}

function AsyncLoader6__Super(){
}

_ = AsyncLoader6__Super.prototype = new Object_0;
_.getClass$ = getClass_151;
_.runCallbacks = runCallbacks_9;
_.typeId$ = 0;
function $clinit_275(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_275;
  $location_0[stackIndex] = 'AsyncLoader6.java:' + '5' , $clinit_275 = nullMethod;
  instance_7 = ($location_0[stackIndex] = 'AsyncLoader6.java:' + '11' , new AsyncLoader6__Super);
  $stackDepth_0 = stackIndex - 1;
}

var callbacksHead_4 = null, callbacksTail_4 = null, instance_7, loaded_5 = false;
function getClass_155(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_155;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader7_1_1Super_2_classLit;
}

function runCallbacks_11(){
}

function AsyncLoader7__Super(){
}

_ = AsyncLoader7__Super.prototype = new Object_0;
_.getClass$ = getClass_155;
_.runCallbacks = runCallbacks_11;
_.typeId$ = 0;
function $clinit_279(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_279;
  $location_0[stackIndex] = 'AsyncLoader7.java:' + '5' , $clinit_279 = nullMethod;
  instance_8 = ($location_0[stackIndex] = 'AsyncLoader7.java:' + '11' , new AsyncLoader7__Super);
  $stackDepth_0 = stackIndex - 1;
}

var callbacksHead_5 = null, callbacksTail_5 = null, instance_8, loaded_6 = false;
function $clinit_294(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_294;
  $location_0[stackIndex] = 'AbstractWindowClosingEvent.java:' + '27' , $clinit_294 = nullMethod;
  $clinit_293();
  $stackDepth_0 = stackIndex - 1;
}

function setCookie(name_0, value, expires, domain, path, secure){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = setCookie;
  $location_0[stackIndex] = 'Cookies.java:' + '177' , name_0 = ($location_0[stackIndex] = 'Cookies.java:' + '307' , encodeURIComponent(name_0));
  $location_0[stackIndex] = 'Cookies.java:' + '178' , value = ($location_0[stackIndex] = 'Cookies.java:' + '307' , encodeURIComponent(value));
  setCookieImpl(name_0, value, ($location_0[stackIndex] = 'Cookies.java:' + '184' , toDouble(!expires?P0_longLit:($location_0[stackIndex] = 'Date.java:' + '199' , fromDouble(($location_0[stackIndex] = 'Date.java:' + '373' , expires.checkJsDate() , ($location_0[stackIndex] = 'Date.java:' + '374' , expires.jsdate.getTime())))))), domain, path, secure);
  $stackDepth_0 = stackIndex - 1;
}

function setCookieImpl(name_0, value, expires, domain, path, secure){
  var c = name_0 + '=' + value, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = setCookieImpl;
  expires && (c += ';expires=' + ($location_0[stackIndex] = 'Cookies.java:' + '295' , new Date(expires)).toGMTString());
  domain && ($location_0[stackIndex] = 'Cookies.java:' + '297' , c += ';domain=' + domain);
  path && ($location_0[stackIndex] = 'Cookies.java:' + '299' , c += ';path=' + path);
  secure && ($location_0[stackIndex] = 'Cookies.java:' + '301' , c += ';secure');
  $location_0[stackIndex] = 'Cookies.java:' + '303' , $doc.cookie = c;
  $stackDepth_0 = stackIndex - 1;
}

function sinkEvents_0(elem, eventBits){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = sinkEvents_0;
  $location_0[stackIndex] = 'DOMImplStandard.java:' + '140' , $maybeInitializeEventSystem();
  $location_0[stackIndex] = 'DOMImplStandard.java:' + '141' , $sinkEventsImpl(elem, eventBits);
  $stackDepth_0 = stackIndex - 1;
}

function $eventGetToElement(evt){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $eventGetToElement;
  if ($location_0[stackIndex] = 'DOMImplStandard.java:' + '56' , $equals_4(($location_0[stackIndex] = 'NativeEvent.java:' + '209' , $clinit_81() , evt).type, 'mouseover')) {
    returnTemp = evt.target;
    $stackDepth_0 = stackIndex - 1;
    return returnTemp;
  }
  if ($location_0[stackIndex] = 'DOMImplStandard.java:' + '60' , $equals_4(evt.type, 'mouseout')) {
    returnTemp = evt.relatedTarget;
    $stackDepth_0 = stackIndex - 1;
    return returnTemp;
  }
  $stackDepth_0 = stackIndex - 1;
  return null;
}

function $getChildCount(elem){
  var count = 0, child = elem.firstChild, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $getChildCount;
  while (child) {
    child.nodeType == 1 && ($location_0[stackIndex] = 'DOMImplStandard.java:' + '88' , ++count);
    $location_0[stackIndex] = 'DOMImplStandard.java:' + '89' , child = child.nextSibling;
  }
  $stackDepth_0 = stackIndex - 1;
  return count;
}

function $setStylePrimaryName(this$static, style){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setStylePrimaryName;
  setStylePrimaryName(($location_0[stackIndex] = 'UIObject.java:' + '659' , this$static.getStyleElement()), style);
  $stackDepth_0 = stackIndex - 1;
}

function $setTitle(this$static, title){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setTitle;
  title == null || title.length == 0?($location_0[stackIndex] = 'Element.java:' + '490' , this$static.element.removeAttribute('title') , undefined):($location_0[stackIndex] = 'Element.java:' + '576' , this$static.element.setAttribute('title', title) , undefined);
  $stackDepth_0 = stackIndex - 1;
}

function $doLogicalClear(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $doLogicalClear;
  !this$static.orphanCommand && (this$static.orphanCommand = ($location_0[stackIndex] = 'ComplexPanel.java:' + '215' , new ComplexPanel$1));
  try {
    $location_0[stackIndex] = 'ComplexPanel.java:' + '222' , tryCommand(this$static, this$static.orphanCommand);
  }
   catch (e) {
    e = ($location_0[stackIndex] = 'ComplexPanel.java:' + '221' , caught_0(e));
    $stackDepth_0 = stackIndex;
    throw e;
  }
   finally {
    this$static.children = $WidgetCollection(($location_0[stackIndex] = 'ComplexPanel.java:' + '224' , new WidgetCollection), this$static);
  }
  $stackDepth_0 = stackIndex - 1;
}

function $SimplePanel_0(this$static, elem){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $SimplePanel_0;
  $location_0[stackIndex] = 'UIObject.java:' + '799' , this$static.element = elem;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $setPopupPositionAndShow(this$static, callback){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setPopupPositionAndShow;
  $location_0[stackIndex] = 'Style.java:' + '1449' , this$static.element.style['visibility'] = 'hidden';
  $location_0[stackIndex] = 'PopupPanel.java:' + '871' , $show(this$static);
  $location_0[stackIndex] = 'PopupPanel.java:' + '872' , $setPosition(callback, parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , this$static.element['offsetWidth'])) || 0, parseInt(this$static.element['offsetHeight']) || 0);
  $location_0[stackIndex] = 'Style.java:' + '1449' , this$static.element.style['visibility'] = 'visible';
  $stackDepth_0 = stackIndex - 1;
}

function $AbstractDecoratedPopupPanel(this$static, autoHide, modal, prefix, type){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $AbstractDecoratedPopupPanel;
  $location_0[stackIndex] = 'AbstractDecoratedPopupPanel.java:' + '64' , $DecoratedPopupPanel(this$static, autoHide, modal, prefix);
  $location_0[stackIndex] = 'PopupPanel.java:' + '1072' , this$static.animType = type.type_0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function create_1(resource){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = create_1;
  returnTemp = $ClippedImagePrototype(($location_0[stackIndex] = 'AbstractImagePrototype.java:' + '73' , new ClippedImagePrototype), resource.url, resource.left, resource.top_0, resource.width_0, resource.height_0);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $FocusWidget(this$static, elem){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $FocusWidget;
  $location_0[stackIndex] = 'UIObject.java:' + '799' , this$static.element = elem;
  $location_0[stackIndex] = 'Element.java:' + '711' , this$static.element.tabIndex = 0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $setEnabled(this$static, enabled){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setEnabled;
  $location_0[stackIndex] = 'Element.java:' + '638' , this$static.element['disabled'] = !enabled;
  $stackDepth_0 = stackIndex - 1;
}

function addClickHandler(handler){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = addClickHandler;
  returnTemp = ($location_0[stackIndex] = 'FocusWidget.java:' + '91' , $addDomHandler(this, handler, ($location_0[stackIndex] = 'FocusWidget.java:' + '91' , $clinit_126() , ($location_0[stackIndex] = 'ClickEvent.java:' + '27' , $clinit_126()) , TYPE_1)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

_ = FocusWidget.prototype;
_.addClickHandler = addClickHandler;
function $Button_0(this$static, html, listener){
  var rtn, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $Button_0;
  $ButtonBase(this$static, ($location_0[stackIndex] = 'Button.java:' + '69' , $createPushButtonElement($doc)));
  $location_0[stackIndex] = 'Element.java:' + '688' , this$static.element['className'] = 'gwt-Button';
  $location_0[stackIndex] = 'Element.java:' + '614' , this$static.element.innerHTML = html || '';
  rtn = $ListenerWrapper$WrappedClickListener(($location_0[stackIndex] = 'ListenerWrapper.java:' + '222' , new ListenerWrapper$WrappedClickListener), listener);
  $location_0[stackIndex] = 'ListenerWrapper.java:' + '223' , this$static.addClickHandler(rtn);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $setCellVerticalAlignment(this$static, w, align){
  var td, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setCellVerticalAlignment;
  td = ($location_0[stackIndex] = 'CellPanel.java:' + '131' , $getWidgetTd(this$static, w));
  !!td && ($location_0[stackIndex] = 'Style.java:' + '1449' , td.style['verticalAlign'] = align.verticalAlignString , undefined);
  $stackDepth_0 = stackIndex - 1;
}

function execute_7(w){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = execute_7;
  $location_0[stackIndex] = 'Panel.java:' + '210' , $setParent(w, null);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_203(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_203;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_user_client_ui_ComplexPanel$1_2_classLit;
}

function ComplexPanel$1(){
}

_ = ComplexPanel$1.prototype = new Object_0;
_.execute_1 = execute_7;
_.getClass$ = getClass_203;
_.typeId$ = 0;
function $TabBar(this$static){
  var first, rest, td, td_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $TabBar;
  this$static.panel = $HorizontalPanel(($location_0[stackIndex] = 'TabBar.java:' + '181' , new HorizontalPanel));
  $location_0[stackIndex] = 'TabBar.java:' + '188' , $initWidget(this$static, this$static.panel);
  $location_0[stackIndex] = 'TabBar.java:' + '189' , $sinkEvents(this$static, 1);
  $location_0[stackIndex] = 'Element.java:' + '688' , this$static.element['className'] = 'gwt-TabBar';
  $location_0[stackIndex] = 'Element.java:' + '576' , this$static.panel.element.setAttribute('role', 'tablist');
  $location_0[stackIndex] = 'HorizontalPanel.java:' + '106' , this$static.panel.vertAlign = ($location_0[stackIndex] = 'HasVerticalAlignment.java:' + '61' , $clinit_385() , ALIGN_BOTTOM);
  first = $HTML_1(($location_0[stackIndex] = 'TabBar.java:' + '197' , new HTML), '&nbsp;', true);
  rest = $HTML_1(new HTML, '&nbsp;', true);
  $location_0[stackIndex] = 'Element.java:' + '688' , first.element['className'] = 'gwt-TabBarFirst';
  rest.element['className'] = 'gwt-TabBarRest';
  $location_0[stackIndex] = 'Style.java:' + '1449' , first.element.style['height'] = '100%';
  rest.element.style['height'] = '100%';
  $location_0[stackIndex] = 'TabBar.java:' + '203' , $add_5(this$static.panel, first);
  $location_0[stackIndex] = 'TabBar.java:' + '204' , $add_5(this$static.panel, rest);
  $location_0[stackIndex] = 'Style.java:' + '1449' , first.element.style['height'] = '100%';
  td = ($location_0[stackIndex] = 'CellPanel.java:' + '102' , $getWidgetTd(this$static.panel, first));
  !!td && ($location_0[stackIndex] = 'Element.java:' + '688' , td['height'] = '100%' , undefined);
  td_0 = ($location_0[stackIndex] = 'CellPanel.java:' + '145' , $getWidgetTd(this$static.panel, rest));
  !!td_0 && ($location_0[stackIndex] = 'Element.java:' + '688' , td_0['width'] = '100%' , undefined);
  $location_0[stackIndex] = 'Element.java:' + '688' , ($location_0[stackIndex] = 'TabBar.java:' + '208' , $getParentElement(first.element))['className'] = 'gwt-TabBarFirst-wrapper';
  $location_0[stackIndex] = 'Element.java:' + '688' , ($location_0[stackIndex] = 'TabBar.java:' + '210' , $getParentElement(rest.element))['className'] = 'gwt-TabBarRest-wrapper';
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $checkInsertBeforeTabIndex(this$static, beforeIndex){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $checkInsertBeforeTabIndex;
  if (beforeIndex < 0 || beforeIndex > this$static.panel.children.size_0 - 2) {
    throw $IndexOutOfBoundsException(($location_0[stackIndex] = 'TabBar.java:' + '577' , new IndexOutOfBoundsException));
  }
  $stackDepth_0 = stackIndex - 1;
}

function $checkTabIndex(this$static, index){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $checkTabIndex;
  if (index < -1 || index >= this$static.panel.children.size_0 - 2) {
    throw $IndexOutOfBoundsException(($location_0[stackIndex] = 'TabBar.java:' + '583' , new IndexOutOfBoundsException));
  }
  $stackDepth_0 = stackIndex - 1;
}

function $getSelectedTab(this$static){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getSelectedTab;
  if (!this$static.selectedTab) {
    $stackDepth_0 = stackIndex - 1;
    return -1;
  }
  returnTemp = ($location_0[stackIndex] = 'ComplexPanel.java:' + '44' , $indexOf_1(this$static.panel.children, this$static.selectedTab)) - 1;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $getTabHTML(this$static, index){
  var delPanel, focusablePanel, widget, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getTabHTML;
  if (index >= this$static.panel.children.size_0 - 2) {
    $stackDepth_0 = stackIndex - 1;
    return null;
  }
  delPanel = ($location_0[stackIndex] = 'TabBar.java:' + '309' , dynamicCast(($location_0[stackIndex] = 'ComplexPanel.java:' + '36' , $get_6(this$static.panel.children, index + 1)), 159));
  $location_0[stackIndex] = 'TabBar.java:' + '310' , focusablePanel = delPanel.focusablePanel;
  widget = ($location_0[stackIndex] = 'TabBar.java:' + '311' , focusablePanel.getWidget());
  if (widget != null && ($location_0[stackIndex] = 'Cast.java:' + '76' , canCast(widget.typeId$, 160))) {
    returnTemp = ($location_0[stackIndex] = 'Element.java:' + '259' , $clinit_81() , ($location_0[stackIndex] = 'TabBar.java:' + '313' , dynamicCast(widget, 160)).element).innerHTML;
    $stackDepth_0 = stackIndex - 1;
    return returnTemp;
  }
   else if (widget != null && ($location_0[stackIndex] = 'Cast.java:' + '76' , canCast(widget.typeId$, 161))) {
    returnTemp = ($location_0[stackIndex] = 'Element.java:' + '266' , $getInnerText_0(($location_0[stackIndex] = 'DOMImpl.java:' + '22' , $clinit_81() , impl_0), ($location_0[stackIndex] = 'TabBar.java:' + '315' , dynamicCast(widget, 161)).element));
    $stackDepth_0 = stackIndex - 1;
    return returnTemp;
  }
   else {
    returnTemp = ($location_0[stackIndex] = 'Element.java:' + '259' , $clinit_81() , ($location_0[stackIndex] = 'TabBar.java:' + '318' , $getParentElement(focusablePanel.element))).innerHTML;
    $stackDepth_0 = stackIndex - 1;
    return returnTemp;
  }
  $stackDepth_0 = stackIndex - 1;
}

function $insertTab(this$static, text, asHTML, beforeIndex){
  var item, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $insertTab;
  $location_0[stackIndex] = 'TabBar.java:' + '330' , $checkInsertBeforeTabIndex(this$static, beforeIndex);
  asHTML?(item = $HTML_0(($location_0[stackIndex] = 'TabBar.java:' + '334' , new HTML), text)):(item = $Label_0(($location_0[stackIndex] = 'TabBar.java:' + '336' , new Label), text));
  $location_0[stackIndex] = 'Style.java:' + '1449' , item.element.style['whiteSpace'] = 'nowrap';
  $location_0[stackIndex] = 'TabBar.java:' + '340' , this$static.insertTabWidget(item, beforeIndex);
  $stackDepth_0 = stackIndex - 1;
}

function $insertTabWidget(this$static, widget, beforeIndex){
  var delWidget, focusablePanel, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $insertTabWidget;
  $location_0[stackIndex] = 'TabBar.java:' + '537' , $checkInsertBeforeTabIndex(this$static, beforeIndex);
  delWidget = $TabBar$ClickDelegatePanel(($location_0[stackIndex] = 'TabBar.java:' + '539' , new TabBar$ClickDelegatePanel), widget, this$static);
  $location_0[stackIndex] = 'Element.java:' + '688' , delWidget.element['className'] = 'gwt-TabBarItem';
  $location_0[stackIndex] = 'TabBar.java:' + '543' , focusablePanel = delWidget.focusablePanel;
  $location_0[stackIndex] = 'Element.java:' + '576' , focusablePanel.element.setAttribute('role', 'tab');
  $location_0[stackIndex] = 'TabBar.java:' + '546' , $insert_1(this$static.panel, delWidget, beforeIndex + 1);
  setStyleName(($location_0[stackIndex] = 'TabBar.java:' + '548' , getParent(delWidget.element)), 'gwt-TabBarItem-wrapper', true);
  $stackDepth_0 = stackIndex - 1;
}

function $removeTab(this$static, index){
  var toRemove, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $removeTab;
  $location_0[stackIndex] = 'TabBar.java:' + '418' , $checkTabIndex(this$static, index);
  $location_0[stackIndex] = 'TabBar.java:' + '421' , toRemove = ($location_0[stackIndex] = 'ComplexPanel.java:' + '36' , $get_6(this$static.panel.children, index + 1));
  toRemove == this$static.selectedTab && ($location_0[stackIndex] = 'TabBar.java:' + '423' , this$static.selectedTab = null);
  $location_0[stackIndex] = 'TabBar.java:' + '425' , $remove_6(this$static.panel, toRemove);
  $stackDepth_0 = stackIndex - 1;
}

function $selectTab(this$static, index){
  var event_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $selectTab;
  $location_0[stackIndex] = 'TabBar.java:' + '446' , $checkTabIndex(this$static, index);
  event_0 = fire_0(this$static, ($location_0[stackIndex] = 'TabBar.java:' + '447' , valueOf_4(index)));
  if (!!event_0 && event_0.canceled) {
    $stackDepth_0 = stackIndex - 1;
    return false;
  }
  $location_0[stackIndex] = 'TabBar.java:' + '454' , $setSelectionStyle(this$static.selectedTab, false);
  if (index == -1) {
    $location_0[stackIndex] = 'TabBar.java:' + '456' , this$static.selectedTab = null;
    $stackDepth_0 = stackIndex - 1;
    return true;
  }
  $location_0[stackIndex] = 'TabBar.java:' + '460' , this$static.selectedTab = ($location_0[stackIndex] = 'ComplexPanel.java:' + '36' , $get_6(this$static.panel.children, index + 1));
  $location_0[stackIndex] = 'TabBar.java:' + '461' , $setSelectionStyle(this$static.selectedTab, true);
  fire_4(this$static, ($location_0[stackIndex] = 'TabBar.java:' + '462' , valueOf_4(index)));
  $stackDepth_0 = stackIndex - 1;
  return true;
}

function $selectTabByTabWidget(this$static, tabWidget){
  var i, numTabs, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $selectTabByTabWidget;
  $location_0[stackIndex] = 'TabBar.java:' + '597' , numTabs = this$static.panel.children.size_0 - 1;
  for ($location_0[stackIndex] = 'TabBar.java:' + '599' , i = 1; i < numTabs; $location_0[stackIndex] = 'TabBar.java:' + '599' , ++i) {
    if (($location_0[stackIndex] = 'ComplexPanel.java:' + '36' , $get_6(this$static.panel.children, i)) == tabWidget) {
      returnTemp = ($location_0[stackIndex] = 'TabBar.java:' + '601' , $selectTab(this$static, i - 1));
      $stackDepth_0 = stackIndex - 1;
      return returnTemp;
    }
  }
  $stackDepth_0 = stackIndex - 1;
  return false;
}

function $setSelectionStyle(item, selected){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setSelectionStyle;
  if (item) {
    if (selected) {
      setStyleName(($location_0[stackIndex] = 'UIObject.java:' + '449' , item.getStyleElement()), 'gwt-TabBarItem-selected', true);
      setStyleName(($location_0[stackIndex] = 'TabBar.java:' + '612' , getParent(item.element)), 'gwt-TabBarItem-wrapper-selected', true);
    }
     else {
      setStyleName(($location_0[stackIndex] = 'UIObject.java:' + '595' , item.getStyleElement()), 'gwt-TabBarItem-selected', false);
      setStyleName(($location_0[stackIndex] = 'TabBar.java:' + '616' , getParent(item.element)), 'gwt-TabBarItem-wrapper-selected', false);
    }
  }
  $stackDepth_0 = stackIndex - 1;
}

function createTabTextWrapper(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = createTabTextWrapper;
  $stackDepth_0 = stackIndex - 1;
  return null;
}

function getClass_205(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_205;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_user_client_ui_TabBar_2_classLit;
}

function insertTabWidget(widget, beforeIndex){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = insertTabWidget;
  $location_0[stackIndex] = 'TabBar.java:' + '536' , $insertTabWidget(this, widget, beforeIndex);
  $stackDepth_0 = stackIndex - 1;
}

function onClick(sender){
}

function onKeyDown(sender, keyCode, modifiers){
}

function onKeyPress(sender, keyCode, modifiers){
}

function onKeyUp(sender, keyCode, modifiers){
}

function removeTab(index){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = removeTab;
  $location_0[stackIndex] = 'TabBar.java:' + '417' , $removeTab(this, index);
  $stackDepth_0 = stackIndex - 1;
}

function TabBar(){
}

_ = TabBar.prototype = new Composite;
_.createTabTextWrapper = createTabTextWrapper;
_.getClass$ = getClass_205;
_.insertTabWidget = insertTabWidget;
_.onClick_0 = onClick;
_.onKeyDown_0 = onKeyDown;
_.onKeyPress = onKeyPress;
_.onKeyUp = onKeyUp;
_.removeTab = removeTab;
_.typeId$ = 104;
_.selectedTab = null;
function $clinit_356(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_356;
  $location_0[stackIndex] = 'DecoratedTabBar.java:' + '52' , $clinit_356 = nullMethod;
  TAB_ROW_STYLES = ($location_0[stackIndex] = 'DecoratedTabBar.java:' + '53' , initValues(_3Ljava_lang_String_2_classLit, 684, 1, ['tabTop', 'tabMiddle']));
  $stackDepth_0 = stackIndex - 1;
}

function createTabTextWrapper_0(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = createTabTextWrapper_0;
  returnTemp = $DecoratorPanel(($location_0[stackIndex] = 'DecoratedTabBar.java:' + '67' , new DecoratorPanel), TAB_ROW_STYLES, 1);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getClass_206(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_206;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_user_client_ui_DecoratedTabBar_2_classLit;
}

function DecoratedTabBar(){
}

_ = DecoratedTabBar.prototype = new TabBar;
_.createTabTextWrapper = createTabTextWrapper_0;
_.getClass$ = getClass_206;
_.typeId$ = 105;
var TAB_ROW_STYLES;
function addClickHandler_0(handler){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = addClickHandler_0;
  returnTemp = ($location_0[stackIndex] = 'Label.java:' + '128' , $addDomHandler(this, handler, ($location_0[stackIndex] = 'Label.java:' + '128' , $clinit_126() , ($location_0[stackIndex] = 'ClickEvent.java:' + '27' , $clinit_126()) , TYPE_1)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

_ = Label.prototype;
_.addClickHandler = addClickHandler_0;
function $HTML(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $HTML;
  $location_0[stackIndex] = 'UIObject.java:' + '799' , this$static.element = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , ($location_0[stackIndex] = 'Document.java:' + '252' , $clinit_81() , $doc).createElement('div'));
  $location_0[stackIndex] = 'Element.java:' + '688' , this$static.element['className'] = 'gwt-HTML';
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $HTML_1(this$static, html, wordWrap){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $HTML_1;
  $location_0[stackIndex] = 'UIObject.java:' + '799' , this$static.element = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , ($location_0[stackIndex] = 'Document.java:' + '252' , $clinit_81() , $doc).createElement('div'));
  $location_0[stackIndex] = 'Element.java:' + '688' , this$static.element['className'] = 'gwt-HTML';
  $location_0[stackIndex] = 'Element.java:' + '614' , this$static.element.innerHTML = html || '';
  $location_0[stackIndex] = 'Style.java:' + '1449' , this$static.element.style['whiteSpace'] = wordWrap?'normal':'nowrap';
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $FlowPanel(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $FlowPanel;
  this$static.children = $WidgetCollection(($location_0[stackIndex] = 'ComplexPanel.java:' + '28' , new WidgetCollection), this$static);
  $location_0[stackIndex] = 'UIObject.java:' + '799' , this$static.element = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , ($location_0[stackIndex] = 'Document.java:' + '252' , $clinit_81() , $doc).createElement('div'));
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function add_5(w){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = add_5;
  $location_0[stackIndex] = 'FlowPanel.java:' + '45' , $add_0(this, w, this.element);
  $stackDepth_0 = stackIndex - 1;
}

function clear_5(){
  var child, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = clear_5;
  try {
    $location_0[stackIndex] = 'FlowPanel.java:' + '51' , $doLogicalClear(this);
  }
   catch (e) {
    e = ($location_0[stackIndex] = 'FlowPanel.java:' + '50' , caught_0(e));
    $stackDepth_0 = stackIndex;
    throw e;
  }
   finally {
    $location_0[stackIndex] = 'FlowPanel.java:' + '54' , child = this.element.firstChild;
    while (child) {
      $location_0[stackIndex] = 'Node.java:' + '285' , this.element.removeChild(child);
      $location_0[stackIndex] = 'FlowPanel.java:' + '57' , child = this.element.firstChild;
    }
  }
  $stackDepth_0 = stackIndex - 1;
}

function getClass_213(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_213;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_user_client_ui_FlowPanel_2_classLit;
}

function FlowPanel(){
}

_ = FlowPanel.prototype = new ComplexPanel;
_.add_1 = add_5;
_.clear = clear_5;
_.getClass$ = getClass_213;
_.typeId$ = 112;
function addClickHandler_1(handler){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = addClickHandler_1;
  returnTemp = ($location_0[stackIndex] = 'FocusPanel.java:' + '75' , $addDomHandler(this, handler, ($location_0[stackIndex] = 'FocusPanel.java:' + '75' , $clinit_126() , ($location_0[stackIndex] = 'ClickEvent.java:' + '27' , $clinit_126()) , TYPE_1)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

_ = FocusPanel.prototype;
_.addClickHandler = addClickHandler_1;
function getClass_215(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_215;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_user_client_ui_Frame_2_classLit;
}

function Frame(){
}

_ = Frame.prototype = new Widget;
_.getClass$ = getClass_215;
_.typeId$ = 114;
function addClickHandler_2(handler){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = addClickHandler_2;
  returnTemp = ($location_0[stackIndex] = 'HTMLTable.java:' + '694' , $addDomHandler(this, handler, ($location_0[stackIndex] = 'HTMLTable.java:' + '694' , $clinit_126() , ($location_0[stackIndex] = 'ClickEvent.java:' + '27' , $clinit_126()) , TYPE_1)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

_ = HTMLTable.prototype;
_.addClickHandler = addClickHandler_2;
function $prepareColumn(this$static, column){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $prepareColumn;
  if (column < 0) {
    throw $IndexOutOfBoundsException_0(($location_0[stackIndex] = 'Grid.java:' + '273' , new IndexOutOfBoundsException), 'Cannot access a column with a negative index: ' + column);
  }
  if (column >= this$static.numColumns) {
    throw $IndexOutOfBoundsException_0(($location_0[stackIndex] = 'Grid.java:' + '282' , new IndexOutOfBoundsException), 'Column index: ' + column + ', Column size: ' + this$static.numColumns);
  }
  $stackDepth_0 = stackIndex - 1;
}

function $ensureColumn(this$static, col){
  var colElement, i, num, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $ensureColumn;
  $location_0[stackIndex] = 'HTMLTable.java:' + '469' , $prepareColumn(this$static.this$0, col);
  $location_0[stackIndex] = 'HTMLTable.java:' + '470' , $prepareColumnGroup(this$static);
  $location_0[stackIndex] = 'HTMLTable.java:' + '472' , num = ($location_0[stackIndex] = 'DOM.java:' + '715' , $getChildCount(this$static.columnGroup));
  if (num <= col) {
    $location_0[stackIndex] = 'HTMLTable.java:' + '474' , colElement = null;
    for ($location_0[stackIndex] = 'HTMLTable.java:' + '475' , i = num; i <= col; $location_0[stackIndex] = 'HTMLTable.java:' + '475' , ++i) {
      $location_0[stackIndex] = 'HTMLTable.java:' + '476' , colElement = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , ($location_0[stackIndex] = 'Document.java:' + '271' , $clinit_81() , $doc).createElement('col'));
      $location_0[stackIndex] = 'Node.java:' + '72' , this$static.columnGroup.appendChild(colElement);
    }
    $stackDepth_0 = stackIndex - 1;
    return colElement;
  }
  returnTemp = ($location_0[stackIndex] = 'DOM.java:' + '705' , $getChild(this$static.columnGroup, col));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $setStyleName_0(this$static, row, styleName){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setStyleName_0;
  $location_0[stackIndex] = 'Element.java:' + '688' , ($location_0[stackIndex] = 'HTMLTable.java:' + '634' , $prepareRow(this$static.this$0, row) , ($location_0[stackIndex] = 'HTMLTable.java:' + '639' , this$static.this$0.bodyElem.rows[row]))['className'] = styleName;
  $stackDepth_0 = stackIndex - 1;
}

function $Image(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $Image;
  $location_0[stackIndex] = 'Image.java:' + '345' , $clinit_390();
  $location_0[stackIndex] = 'Image.java:' + '642' , this$static.state = $Image$UnclippedState(($location_0[stackIndex] = 'Image.java:' + '346' , new Image$UnclippedState), this$static);
  $location_0[stackIndex] = 'Element.java:' + '688' , this$static.element['className'] = 'gwt-Image';
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $Image_1(this$static, url){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $Image_1;
  $location_0[stackIndex] = 'Image.java:' + '366' , $clinit_390();
  $location_0[stackIndex] = 'Image.java:' + '642' , this$static.state = $Image$UnclippedState_0(($location_0[stackIndex] = 'Image.java:' + '367' , new Image$UnclippedState), this$static, url);
  $location_0[stackIndex] = 'Element.java:' + '688' , this$static.element['className'] = 'gwt-Image';
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $setUrlAndVisibleRect(this$static, url, left, top_0, width, height){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setUrlAndVisibleRect;
  $location_0[stackIndex] = 'Image.java:' + '617' , this$static.state.setUrlAndVisibleRect(this$static, url, left, top_0, width, height);
  $stackDepth_0 = stackIndex - 1;
}

function addClickHandler_3(handler){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = addClickHandler_3;
  returnTemp = ($location_0[stackIndex] = 'Image.java:' + '406' , $addHandler_1(this, handler, ($location_0[stackIndex] = 'Image.java:' + '406' , $clinit_126() , ($location_0[stackIndex] = 'ClickEvent.java:' + '27' , $clinit_126()) , TYPE_1)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

_ = Image_0.prototype;
_.addClickHandler = addClickHandler_3;
function setUrlAndVisibleRect(image, url, left, top_0, width, height){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = setUrlAndVisibleRect;
  if (!($location_0[stackIndex] = 'Image.java:' + '149' , $equals_4(this.url, url)) || this.left != left || this.top_0 != top_0 || this.width_0 != width || this.height_0 != height) {
    $location_0[stackIndex] = 'Image.java:' + '152' , this.url = url;
    $location_0[stackIndex] = 'Image.java:' + '153' , this.left = left;
    $location_0[stackIndex] = 'Image.java:' + '154' , this.top_0 = top_0;
    $location_0[stackIndex] = 'Image.java:' + '155' , this.width_0 = width;
    $location_0[stackIndex] = 'Image.java:' + '156' , this.height_0 = height;
    $location_0[stackIndex] = 'Image.java:' + '158' , $adjust(image.element, url, left, top_0, width, height);
    addCommand($ClippedImageImpl$1(($location_0[stackIndex] = 'ClippedImageImpl.java:' + '76' , new ClippedImageImpl$1), image));
  }
  $stackDepth_0 = stackIndex - 1;
}

_ = Image$ClippedState.prototype;
_.setUrlAndVisibleRect = setUrlAndVisibleRect;
function $Image$UnclippedState(this$static, image){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $Image$UnclippedState;
  $location_0[stackIndex] = 'Image.java:' + '233' , $replaceElement_0(image, ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , ($location_0[stackIndex] = 'Document.java:' + '417' , $clinit_81() , $doc).createElement('img')));
  $location_0[stackIndex] = 'Image.java:' + '237' , sinkEvents_0(image.element, 32768);
  $location_0[stackIndex] = 'Image.java:' + '240' , $sinkEvents(image, 229501);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $Image$UnclippedState_0(this$static, image, url){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $Image$UnclippedState_0;
  $location_0[stackIndex] = 'Image.java:' + '245' , $Image$UnclippedState(this$static, image);
  $location_0[stackIndex] = 'DOMImpl.java:' + '268' , ($location_0[stackIndex] = 'ImageElement.java:' + '120' , $clinit_81() , image.element).src = url;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_228(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_228;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_user_client_ui_Image$UnclippedState_2_classLit;
}

function getHeight_0(image){
  var returnTemp, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getHeight_0;
  returnTemp = image.element.height;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getOriginLeft_0(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getOriginLeft_0;
  $stackDepth_0 = stackIndex - 1;
  return 0;
}

function getOriginTop_0(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getOriginTop_0;
  $stackDepth_0 = stackIndex - 1;
  return 0;
}

function getUrl_0(image){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getUrl_0;
  returnTemp = ($location_0[stackIndex] = 'ImageElement.java:' + '65' , $clinit_81() , image.element).src;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getWidth_0(image){
  var returnTemp, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getWidth_0;
  returnTemp = image.element.width;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function setUrlAndVisibleRect_0(image, url, left, top_0, width, height){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = setUrlAndVisibleRect_0;
  $location_0[stackIndex] = 'Image.java:' + '642' , image.state = $Image$ClippedState(($location_0[stackIndex] = 'Image.java:' + '282' , new Image$ClippedState), image, url, left, top_0, width, height);
  $stackDepth_0 = stackIndex - 1;
}

function Image$UnclippedState(){
}

_ = Image$UnclippedState.prototype = new Image$State;
_.getClass$ = getClass_228;
_.getHeight = getHeight_0;
_.getOriginLeft = getOriginLeft_0;
_.getOriginTop = getOriginTop_0;
_.getUrl = getUrl_0;
_.getWidth = getWidth_0;
_.setUrlAndVisibleRect = setUrlAndVisibleRect_0;
_.typeId$ = 0;
function $ListBox_0(this$static, isMultipleSelect){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ListBox_0;
  $location_0[stackIndex] = 'ListBox.java:' + '88' , $FocusWidget(this$static, $createSelectElement(($location_0[stackIndex] = 'Document.java:' + '921' , $clinit_81() , $doc), isMultipleSelect));
  $location_0[stackIndex] = 'Element.java:' + '688' , this$static.element['className'] = 'gwt-ListBox';
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $addItem(this$static, item){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $addItem;
  $location_0[stackIndex] = 'ListBox.java:' + '215' , $insertItem(this$static, item, item, -1);
  $stackDepth_0 = stackIndex - 1;
}

function $checkIndex(this$static, index){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $checkIndex;
  if (index < 0 || index >= ($location_0[stackIndex] = 'SelectElement.java:' + '112' , $clinit_81() , this$static.element).options.length) {
    throw $IndexOutOfBoundsException(($location_0[stackIndex] = 'ListBox.java:' + '397' , new IndexOutOfBoundsException));
  }
  $stackDepth_0 = stackIndex - 1;
}

function $getItemText(this$static, index){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getItemText;
  $location_0[stackIndex] = 'ListBox.java:' + '163' , $checkIndex(this$static, index);
  returnTemp = ($location_0[stackIndex] = 'NodeList.java:' + '44' , ($location_0[stackIndex] = 'SelectElement.java:' + '112' , $clinit_81() , this$static.element).options[index]).text;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $insertItem(this$static, item, value, index){
  var before, option, select, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $insertItem;
  $location_0[stackIndex] = 'ListBox.java:' + '229' , select = this$static.element;
  $location_0[stackIndex] = 'ListBox.java:' + '230' , option = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , ($location_0[stackIndex] = 'Document.java:' + '788' , $clinit_81() , $doc).createElement('option'));
  $location_0[stackIndex] = 'OptionElement.java:' + '153' , option.text = item;
  $location_0[stackIndex] = 'OptionElement.java:' + '162' , option.value = value;
  if (index == -1 || index == select.options.length) {
    $location_0[stackIndex] = 'DOMImpl.java:' + '311' , select.add(option, null);
  }
   else {
    $location_0[stackIndex] = 'ListBox.java:' + '237' , before = ($location_0[stackIndex] = 'NodeList.java:' + '44' , select.options[index]);
    $location_0[stackIndex] = 'DOMImpl.java:' + '311' , select.add(option, before);
  }
  $stackDepth_0 = stackIndex - 1;
}

function getClass_231(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_231;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_user_client_ui_ListBox_2_classLit;
}

function ListBox(){
}

_ = ListBox.prototype = new FocusWidget;
_.getClass$ = getClass_231;
_.typeId$ = 121;
function $ListenerWrapper$WrappedChangeListener(this$static, listener){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ListenerWrapper$WrappedChangeListener;
  $location_0[stackIndex] = 'BaseListenerWrapper.java:' + '207' , this$static.listener = listener;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function add_11(source, listener){
  var rtn, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = add_11;
  rtn = $ListenerWrapper$WrappedChangeListener(($location_0[stackIndex] = 'ListenerWrapper.java:' + '173' , new ListenerWrapper$WrappedChangeListener), listener);
  $location_0[stackIndex] = 'ListBox.java:' + '104' , $addDomHandler(source, rtn, ($location_0[stackIndex] = 'ListBox.java:' + '104' , $clinit_124() , ($location_0[stackIndex] = 'ChangeEvent.java:' + '27' , $clinit_124()) , TYPE_0));
  $stackDepth_0 = stackIndex - 1;
  return rtn;
}

function getClass_233(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_233;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_user_client_ui_ListenerWrapper$WrappedChangeListener_2_classLit;
}

function onChange(event_0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onChange;
  $location_0[stackIndex] = 'ListenerWrapper.java:' + '196' , $onChange(($location_0[stackIndex] = 'ListenerWrapper.java:' + '196' , dynamicCast(this.listener, 150)), ($location_0[stackIndex] = 'BaseListenerWrapper.java:' + '238' , dynamicCast(event_0.source_0, 2)));
  $stackDepth_0 = stackIndex - 1;
}

function ListenerWrapper$WrappedChangeListener(){
}

_ = ListenerWrapper$WrappedChangeListener.prototype = new ListenerWrapper;
_.getClass$ = getClass_233;
_.onChange = onChange;
_.typeId$ = 123;
function $ListenerWrapper$WrappedClickListener(this$static, listener){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ListenerWrapper$WrappedClickListener;
  $location_0[stackIndex] = 'BaseListenerWrapper.java:' + '207' , this$static.listener = listener;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function add_12(source, listener){
  var rtn, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = add_12;
  rtn = $ListenerWrapper$WrappedClickListener(($location_0[stackIndex] = 'ListenerWrapper.java:' + '222' , new ListenerWrapper$WrappedClickListener), listener);
  $location_0[stackIndex] = 'ListenerWrapper.java:' + '223' , source.addClickHandler(rtn);
  $stackDepth_0 = stackIndex - 1;
  return rtn;
}

function getClass_234(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_234;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_user_client_ui_ListenerWrapper$WrappedClickListener_2_classLit;
}

function onClick_0(event_0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClick_0;
  $location_0[stackIndex] = 'ListenerWrapper.java:' + '245' , ($location_0[stackIndex] = 'ListenerWrapper.java:' + '245' , dynamicCast(this.listener, 151)).onClick_0(($location_0[stackIndex] = 'BaseListenerWrapper.java:' + '238' , dynamicCast(event_0.source_0, 2)));
  $stackDepth_0 = stackIndex - 1;
}

function ListenerWrapper$WrappedClickListener(){
}

_ = ListenerWrapper$WrappedClickListener.prototype = new ListenerWrapper;
_.getClass$ = getClass_234;
_.onClick = onClick_0;
_.typeId$ = 124;
function $ListenerWrapper$WrappedTabListener(this$static, listener){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ListenerWrapper$WrappedTabListener;
  $location_0[stackIndex] = 'BaseListenerWrapper.java:' + '207' , this$static.listener = listener;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function add_15(source, listener){
  var t, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = add_15;
  t = $ListenerWrapper$WrappedTabListener(($location_0[stackIndex] = 'ListenerWrapper.java:' + '726' , new ListenerWrapper$WrappedTabListener), listener);
  $location_0[stackIndex] = 'TabBar.java:' + '215' , $addHandler_1(source, t, (!TYPE_12 && (TYPE_12 = $GwtEvent$Type(($location_0[stackIndex] = 'BeforeSelectionEvent.java:' + '62' , new GwtEvent$Type))) , TYPE_12));
  $addHandler_1(source, t, ($location_0[stackIndex] = 'TabBar.java:' + '220' , getType_11()));
  $stackDepth_0 = stackIndex - 1;
}

function getClass_237(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_237;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_user_client_ui_ListenerWrapper$WrappedTabListener_2_classLit;
}

function onBeforeSelection(event_0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onBeforeSelection;
  !($location_0[stackIndex] = 'ListenerWrapper.java:' + '747' , ($location_0[stackIndex] = 'ListenerWrapper.java:' + '747' , dynamicCast(this.listener, 152)).onBeforeTabSelected(($location_0[stackIndex] = 'ListenerWrapper.java:' + '748' , dynamicCast(event_0.source_0, 153)), dynamicCast(event_0.item_0, 82).value_0)) && ($location_0[stackIndex] = 'BeforeSelectionEvent.java:' + '83' , event_0.canceled = true);
  $stackDepth_0 = stackIndex - 1;
}

function onSelection(event_0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onSelection;
  $location_0[stackIndex] = 'ListenerWrapper.java:' + '754' , ($location_0[stackIndex] = 'ListenerWrapper.java:' + '754' , dynamicCast(this.listener, 152)).onTabSelected(dynamicCast(event_0.source_0, 153), ($location_0[stackIndex] = 'ListenerWrapper.java:' + '755' , dynamicCast(event_0.selectedItem, 82)).value_0);
  $stackDepth_0 = stackIndex - 1;
}

function ListenerWrapper$WrappedTabListener(){
}

_ = ListenerWrapper$WrappedTabListener.prototype = new ListenerWrapper;
_.getClass$ = getClass_237;
_.onBeforeSelection = onBeforeSelection;
_.onSelection = onSelection;
_.typeId$ = 127;
function $ListenerWrapper$WrappedTreeListener(this$static, listener){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ListenerWrapper$WrappedTreeListener;
  $location_0[stackIndex] = 'BaseListenerWrapper.java:' + '207' , this$static.listener = listener;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function add_16(tree, listener){
  var t, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = add_16;
  t = $ListenerWrapper$WrappedTreeListener(($location_0[stackIndex] = 'ListenerWrapper.java:' + '768' , new ListenerWrapper$WrappedTreeListener), listener);
  $addHandler_1(tree, t, ($location_0[stackIndex] = 'Tree.java:' + '413' , getType_11()));
  $location_0[stackIndex] = 'Tree.java:' + '305' , $addHandler_1(tree, t, TYPE_13?TYPE_13:(TYPE_13 = $GwtEvent$Type(($location_0[stackIndex] = 'CloseEvent.java:' + '66' , new GwtEvent$Type))));
  $addHandler_1(tree, t, ($location_0[stackIndex] = 'Tree.java:' + '408' , getType_9()));
  $stackDepth_0 = stackIndex - 1;
}

function getClass_238(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_238;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_user_client_ui_ListenerWrapper$WrappedTreeListener_2_classLit;
}

function onClose_0(event_0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClose_0;
  $location_0[stackIndex] = 'ListenerWrapper.java:' + '783' , dynamicCast(this.listener, 154);
  dynamicCast(event_0.target_0, 155);
  $stackDepth_0 = stackIndex - 1;
}

function onOpen(event_0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onOpen;
  $location_0[stackIndex] = 'ListenerWrapper.java:' + '787' , dynamicCast(this.listener, 154);
  dynamicCast(event_0.target_0, 155);
  $stackDepth_0 = stackIndex - 1;
}

function onSelection_0(event_0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onSelection_0;
  $onTreeItemSelected(($location_0[stackIndex] = 'ListenerWrapper.java:' + '791' , dynamicCast(this.listener, 154)), dynamicCast(event_0.selectedItem, 155));
  $stackDepth_0 = stackIndex - 1;
}

function ListenerWrapper$WrappedTreeListener(){
}

_ = ListenerWrapper$WrappedTreeListener.prototype = new ListenerWrapper;
_.getClass$ = getClass_238;
_.onClose = onClose_0;
_.onOpen = onOpen;
_.onSelection = onSelection_0;
_.typeId$ = 128;
function $addItem_0(this$static, item){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $addItem_0;
  returnTemp = ($location_0[stackIndex] = 'MenuBar.java:' + '270' , $insertItem_0(this$static, item, this$static.allItems.size_0));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $addItemElement(this$static, beforeIndex, tdElem){
  var tr, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $addItemElement;
  if (this$static.vertical) {
    $location_0[stackIndex] = 'MenuBar.java:' + '944' , tr = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , ($location_0[stackIndex] = 'Document.java:' + '1063' , $clinit_81() , $doc).createElement('tr'));
    $location_0[stackIndex] = 'DOM.java:' + '929' , $insertChild(this$static.body_0, tr, beforeIndex);
    $location_0[stackIndex] = 'Node.java:' + '72' , tr.appendChild(tdElem);
  }
   else {
    $location_0[stackIndex] = 'MenuBar.java:' + '948' , tr = ($location_0[stackIndex] = 'DOM.java:' + '705' , $getChild(this$static.body_0, 0));
    $location_0[stackIndex] = 'DOM.java:' + '929' , $insertChild(tr, tdElem, beforeIndex);
  }
  $stackDepth_0 = stackIndex - 1;
}

function $addSeparator(this$static, separator){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $addSeparator;
  returnTemp = ($location_0[stackIndex] = 'MenuBar.java:' + '341' , $insertSeparator(this$static, separator, this$static.allItems.size_0));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $doItemAction(this$static, item, fireCommand){
  var cmd, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $doItemAction;
  $location_0[stackIndex] = 'MenuBar.java:' + '815' , $selectItem(this$static, item);
  if (item) {
    if (fireCommand && !!item.command) {
      $location_0[stackIndex] = 'MenuBar.java:' + '824' , cmd = item.command;
      $location_0[stackIndex] = 'MenuBar.java:' + '825' , addCommand(cmd);
    }
  }
  $stackDepth_0 = stackIndex - 1;
}

function $findItem(this$static, hItem){
  var item, item$iterator, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $findItem;
  for ($location_0[stackIndex] = 'MenuBar.java:' + '969' , item$iterator = $AbstractList$IteratorImpl(($location_0[stackIndex] = 'AbstractList.java:' + '278' , new AbstractList$IteratorImpl), this$static.items); item$iterator.i < ($location_0[stackIndex] = 'AbstractList.java:' + '38' , item$iterator.this$0.size_1());) {
    item = dynamicCast(($location_0[stackIndex] = 'MenuBar.java:' + '969' , $next_6(item$iterator)), 156);
    if ($location_0[stackIndex] = 'DOMImplStandard.java:' + '118' , ($location_0[stackIndex] = 'Node.java:' + '274' , $clinit_81() , item.element).contains(hItem)) {
      $stackDepth_0 = stackIndex - 1;
      return item;
    }
  }
  $stackDepth_0 = stackIndex - 1;
  return null;
}

function $getItemContainerElement(this$static){
  var returnTemp, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $getItemContainerElement;
  if (this$static.vertical) {
    returnTemp = this$static.body_0;
    $stackDepth_0 = stackIndex - 1;
    return returnTemp;
  }
   else {
    returnTemp = ($location_0[stackIndex] = 'DOM.java:' + '705' , $getChild(this$static.body_0, 0));
    $stackDepth_0 = stackIndex - 1;
    return returnTemp;
  }
  $stackDepth_0 = stackIndex - 1;
}

function $init_2(this$static, vertical){
  var outer, table, tr, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $init_2;
  $location_0[stackIndex] = 'MenuBar.java:' + '988' , table = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , ($location_0[stackIndex] = 'Document.java:' + '966' , $clinit_81() , $doc).createElement('table'));
  $location_0[stackIndex] = 'MenuBar.java:' + '989' , this$static.body_0 = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , $doc.createElement('tbody'));
  $location_0[stackIndex] = 'Node.java:' + '72' , table.appendChild(this$static.body_0);
  if (!vertical) {
    $location_0[stackIndex] = 'MenuBar.java:' + '993' , tr = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , $doc.createElement('tr'));
    $location_0[stackIndex] = 'Node.java:' + '72' , this$static.body_0.appendChild(tr);
  }
  $location_0[stackIndex] = 'MenuBar.java:' + '997' , this$static.vertical = vertical;
  outer = ($location_0[stackIndex] = 'MenuBar.java:' + '999' , $createFocusable());
  $location_0[stackIndex] = 'Node.java:' + '72' , outer.appendChild(table);
  $location_0[stackIndex] = 'UIObject.java:' + '799' , this$static.element = outer;
  $location_0[stackIndex] = 'Element.java:' + '576' , this$static.element.setAttribute('role', 'menubar');
  $location_0[stackIndex] = 'MenuBar.java:' + '1005' , $sinkEvents(this$static, 2225);
  $location_0[stackIndex] = 'Element.java:' + '688' , this$static.element['className'] = 'gwt-MenuBar';
  vertical?($location_0[stackIndex] = 'UIObject.java:' + '364' , $addStyleName(this$static, ($location_0[stackIndex] = 'UIObject.java:' + '552' , getStylePrimaryName(this$static.element)) + '-vertical')):($location_0[stackIndex] = 'UIObject.java:' + '364' , $addStyleName(this$static, ($location_0[stackIndex] = 'UIObject.java:' + '552' , getStylePrimaryName(this$static.element)) + '-horizontal'));
  $location_0[stackIndex] = 'Style.java:' + '1449' , this$static.element.style['outline'] = '0px';
  $location_0[stackIndex] = 'Element.java:' + '576' , this$static.element.setAttribute('hideFocus', 'true');
  $stackDepth_0 = stackIndex - 1;
}

function $insertItem_0(this$static, item, beforeIndex){
  var i, itemsIndex, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $insertItem_0;
  if (beforeIndex < 0 || beforeIndex > this$static.allItems.size_0) {
    throw $IndexOutOfBoundsException(($location_0[stackIndex] = 'MenuBar.java:' + '420' , new IndexOutOfBoundsException));
  }
  $location_0[stackIndex] = 'MenuBar.java:' + '424' , $add_8(this$static.allItems, beforeIndex, item);
  $location_0[stackIndex] = 'MenuBar.java:' + '425' , itemsIndex = 0;
  for ($location_0[stackIndex] = 'MenuBar.java:' + '426' , i = 0; i < beforeIndex; $location_0[stackIndex] = 'MenuBar.java:' + '426' , ++i) {
    instanceOf(($location_0[stackIndex] = 'MenuBar.java:' + '427' , $get_5(this$static.allItems, i)), 156) && ($location_0[stackIndex] = 'MenuBar.java:' + '428' , ++itemsIndex);
  }
  $location_0[stackIndex] = 'MenuBar.java:' + '431' , $add_8(this$static.items, itemsIndex, item);
  $location_0[stackIndex] = 'MenuBar.java:' + '434' , $addItemElement(this$static, beforeIndex, item.element);
  $location_0[stackIndex] = 'MenuBar.java:' + '436' , $setSelectionStyle_0(item, false);
  $location_0[stackIndex] = 'MenuBar.java:' + '437' , $updateSubmenuIcon(this$static, item);
  $stackDepth_0 = stackIndex - 1;
  return item;
}

function $insertSeparator(this$static, separator, beforeIndex){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $insertSeparator;
  if (beforeIndex < 0 || beforeIndex > this$static.allItems.size_0) {
    throw $IndexOutOfBoundsException(($location_0[stackIndex] = 'MenuBar.java:' + '468' , new IndexOutOfBoundsException));
  }
  this$static.vertical && ($location_0[stackIndex] = 'Element.java:' + '658' , separator.element['colSpan'] = 2 , undefined);
  $location_0[stackIndex] = 'MenuBar.java:' + '474' , $addItemElement(this$static, beforeIndex, separator.element);
  $location_0[stackIndex] = 'MenuBar.java:' + '476' , $add_8(this$static.allItems, beforeIndex, separator);
  $stackDepth_0 = stackIndex - 1;
  return separator;
}

function $itemOver(this$static, item, focus_0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $itemOver;
  if (!item) {
    if (this$static.selectedItem) {
      $stackDepth_0 = stackIndex - 1;
      return;
    }
  }
  $location_0[stackIndex] = 'MenuBar.java:' + '869' , $selectItem(this$static, item);
  focus_0 && ($location_0[stackIndex] = 'Element.java:' + '134' , this$static.element.focus() , undefined);
  !!item && this$static.autoOpen && ($location_0[stackIndex] = 'MenuBar.java:' + '879' , $doItemAction(this$static, item, false));
  $stackDepth_0 = stackIndex - 1;
}

function $moveSelectionDown(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $moveSelectionDown;
  if ($location_0[stackIndex] = 'MenuBar.java:' + '499' , $selectFirstItemIfNoneSelected(this$static)) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  this$static.vertical && ($location_0[stackIndex] = 'MenuBar.java:' + '504' , $selectNextItem(this$static));
  $stackDepth_0 = stackIndex - 1;
}

function $moveSelectionUp(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $moveSelectionUp;
  if ($location_0[stackIndex] = 'MenuBar.java:' + '528' , $selectFirstItemIfNoneSelected(this$static)) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  this$static.vertical && ($location_0[stackIndex] = 'MenuBar.java:' + '533' , $selectPrevItem(this$static));
  $stackDepth_0 = stackIndex - 1;
}

function $moveToNextItem(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $moveToNextItem;
  if ($location_0[stackIndex] = 'MenuBar.java:' + '1023' , $selectFirstItemIfNoneSelected(this$static)) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  this$static.vertical || ($location_0[stackIndex] = 'MenuBar.java:' + '1028' , $selectNextItem(this$static));
  $stackDepth_0 = stackIndex - 1;
}

function $moveToPrevItem(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $moveToPrevItem;
  if ($location_0[stackIndex] = 'MenuBar.java:' + '1048' , $selectFirstItemIfNoneSelected(this$static)) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  this$static.vertical || ($location_0[stackIndex] = 'MenuBar.java:' + '1053' , $selectPrevItem(this$static));
  $stackDepth_0 = stackIndex - 1;
}

function $onBrowserEvent_1(this$static, event_0){
  var item, keyCode, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $onBrowserEvent_1;
  item = ($location_0[stackIndex] = 'MenuBar.java:' + '543' , $findItem(this$static, ($location_0[stackIndex] = 'NativeEvent.java:' + '109' , $clinit_81() , event_0).target));
  switch ($location_0[stackIndex] = 'DOMImpl.java:' + '61' , $eventGetTypeInt(event_0.type)) {
    case 1:
      {
        $location_0[stackIndex] = 'Element.java:' + '134' , this$static.element.focus();
        !!item && ($location_0[stackIndex] = 'MenuBar.java:' + '549' , $doItemAction(this$static, item, true));
        break;
      }

    case 16:
      {
        !!item && ($location_0[stackIndex] = 'MenuBar.java:' + '556' , $itemOver(this$static, item, true));
        break;
      }

    case 32:
      {
        !!item && ($location_0[stackIndex] = 'MenuBar.java:' + '563' , $itemOver(this$static, null, true));
        break;
      }

    case 2048:
      {
        $location_0[stackIndex] = 'MenuBar.java:' + '569' , $selectFirstItemIfNoneSelected(this$static);
        break;
      }

    case 128:
      {
        $location_0[stackIndex] = 'MenuBar.java:' + '574' , keyCode = event_0.which || event_0.keyCode || 0;
        switch (keyCode) {
          case 37:
            {
              $location_0[stackIndex] = 'MenuBar.java:' + '577' , $clinit_223();
              $location_0[stackIndex] = 'MenuBar.java:' + '580' , $moveToPrevItem(this$static);
            }

            $location_0[stackIndex] = 'DOMImpl.java:' + '49' , event_0.cancelBubble = true;
            $location_0[stackIndex] = 'DOMImplStandard.java:' + '108' , event_0.preventDefault();
            break;
          case 39:
            {
              $location_0[stackIndex] = 'MenuBar.java:' + '585' , $clinit_223();
              $location_0[stackIndex] = 'MenuBar.java:' + '588' , $moveToNextItem(this$static);
            }

            $location_0[stackIndex] = 'DOMImpl.java:' + '49' , event_0.cancelBubble = true;
            $location_0[stackIndex] = 'DOMImplStandard.java:' + '108' , event_0.preventDefault();
            break;
          case 38:
            $location_0[stackIndex] = 'MenuBar.java:' + '593' , $moveSelectionUp(this$static);
            $location_0[stackIndex] = 'DOMImpl.java:' + '49' , event_0.cancelBubble = true;
            $location_0[stackIndex] = 'DOMImplStandard.java:' + '108' , event_0.preventDefault();
            break;
          case 40:
            $location_0[stackIndex] = 'MenuBar.java:' + '597' , $moveSelectionDown(this$static);
            $location_0[stackIndex] = 'DOMImpl.java:' + '49' , event_0.cancelBubble = true;
            $location_0[stackIndex] = 'DOMImplStandard.java:' + '108' , event_0.preventDefault();
            break;
          case 27:
            $location_0[stackIndex] = 'DOMImpl.java:' + '49' , event_0.cancelBubble = true;
            $location_0[stackIndex] = 'DOMImplStandard.java:' + '108' , event_0.preventDefault();
            break;
          case 13:
            if (!($location_0[stackIndex] = 'MenuBar.java:' + '610' , $selectFirstItemIfNoneSelected(this$static))) {
              $location_0[stackIndex] = 'MenuBar.java:' + '611' , $doItemAction(this$static, this$static.selectedItem, true);
              $location_0[stackIndex] = 'DOMImpl.java:' + '49' , event_0.cancelBubble = true;
              $location_0[stackIndex] = 'DOMImplStandard.java:' + '108' , event_0.preventDefault();
            }

        }
        break;
      }

  }
  $location_0[stackIndex] = 'MenuBar.java:' + '620' , $onBrowserEvent(this$static, event_0);
  $stackDepth_0 = stackIndex - 1;
}

function $selectFirstItemIfNoneSelected(this$static){
  var nextItem, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $selectFirstItemIfNoneSelected;
  if (!this$static.selectedItem) {
    if (this$static.items.size_0 > 0) {
      nextItem = dynamicCast(($location_0[stackIndex] = 'MenuBar.java:' + '1199' , $get_5(this$static.items, 0)), 156);
      $location_0[stackIndex] = 'MenuBar.java:' + '1200' , $selectItem(this$static, nextItem);
    }
    $stackDepth_0 = stackIndex - 1;
    return true;
  }
  $stackDepth_0 = stackIndex - 1;
  return false;
}

function $selectItem(this$static, item){
  var td, tr, parent_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $selectItem;
  if (item == this$static.selectedItem) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  if (this$static.selectedItem) {
    $location_0[stackIndex] = 'MenuBar.java:' + '688' , $setSelectionStyle_0(this$static.selectedItem, false);
    if (this$static.vertical) {
      $location_0[stackIndex] = 'MenuBar.java:' + '691' , tr = ($location_0[stackIndex] = 'DOMImpl.java:' + '236' , parent_0 = ($location_0[stackIndex] = 'Node.java:' + '184' , $clinit_81() , this$static.selectedItem.element).parentNode , (!parent_0 || parent_0.nodeType != 1) && ($location_0[stackIndex] = 'DOMImpl.java:' + '238' , parent_0 = null) , parent_0);
      if (($location_0[stackIndex] = 'DOM.java:' + '715' , $getChildCount(tr)) == 2) {
        $location_0[stackIndex] = 'MenuBar.java:' + '693' , td = ($location_0[stackIndex] = 'DOM.java:' + '705' , $getChild(tr, 1));
        $location_0[stackIndex] = 'MenuBar.java:' + '694' , setStyleName(td, 'subMenuIcon-selected', false);
      }
    }
  }
  if (item) {
    $location_0[stackIndex] = 'MenuBar.java:' + '700' , $setSelectionStyle_0(item, true);
    if (this$static.vertical) {
      tr = ($location_0[stackIndex] = 'MenuBar.java:' + '704' , getParent(item.element));
      if (($location_0[stackIndex] = 'DOM.java:' + '715' , $getChildCount(tr)) == 2) {
        $location_0[stackIndex] = 'MenuBar.java:' + '706' , td = ($location_0[stackIndex] = 'DOM.java:' + '705' , $getChild(tr, 1));
        $location_0[stackIndex] = 'MenuBar.java:' + '707' , setStyleName(td, 'subMenuIcon-selected', true);
      }
    }
    $location_0[stackIndex] = 'Element.java:' + '576' , this$static.element.setAttribute('aria-activedescendant', ($location_0[stackIndex] = 'DOMImpl.java:' + '186' , ($location_0[stackIndex] = 'Element.java:' + '180' , $clinit_81() , item.element).getAttribute('id')) || '');
  }
  $location_0[stackIndex] = 'MenuBar.java:' + '716' , this$static.selectedItem = item;
  $stackDepth_0 = stackIndex - 1;
}

function $selectNextItem(this$static){
  var index, itemToBeSelected, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $selectNextItem;
  if (!this$static.selectedItem) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  $location_0[stackIndex] = 'MenuBar.java:' + '1212' , index = ($location_0[stackIndex] = 'ArrayList.java:' + '163' , $indexOf_0(this$static.items, this$static.selectedItem, 0));
  index < this$static.items.size_0 - 1?(itemToBeSelected = dynamicCast(($location_0[stackIndex] = 'MenuBar.java:' + '1221' , $get_5(this$static.items, index + 1)), 156)):(itemToBeSelected = dynamicCast(($location_0[stackIndex] = 'MenuBar.java:' + '1223' , $get_5(this$static.items, 0)), 156));
  $location_0[stackIndex] = 'MenuBar.java:' + '1226' , $selectItem(this$static, itemToBeSelected);
  $stackDepth_0 = stackIndex - 1;
}

function $selectPrevItem(this$static){
  var index, itemToBeSelected, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $selectPrevItem;
  if (!this$static.selectedItem) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  $location_0[stackIndex] = 'MenuBar.java:' + '1237' , index = ($location_0[stackIndex] = 'ArrayList.java:' + '163' , $indexOf_0(this$static.items, this$static.selectedItem, 0));
  index > 0?(itemToBeSelected = dynamicCast(($location_0[stackIndex] = 'MenuBar.java:' + '1245' , $get_5(this$static.items, index - 1)), 156)):(itemToBeSelected = dynamicCast(($location_0[stackIndex] = 'MenuBar.java:' + '1248' , $get_5(this$static.items, this$static.items.size_0 - 1)), 156));
  $location_0[stackIndex] = 'MenuBar.java:' + '1251' , $selectItem(this$static, itemToBeSelected);
  $stackDepth_0 = stackIndex - 1;
}

function $updateSubmenuIcon(this$static, item){
  var container, idx, tdCount, tr, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $updateSubmenuIcon;
  if (!this$static.vertical) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  $location_0[stackIndex] = 'MenuBar.java:' + '909' , idx = ($location_0[stackIndex] = 'ArrayList.java:' + '163' , $indexOf_0(this$static.allItems, item, 0));
  if (idx == -1) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  container = ($location_0[stackIndex] = 'MenuBar.java:' + '914' , $getItemContainerElement(this$static));
  $location_0[stackIndex] = 'MenuBar.java:' + '915' , tr = ($location_0[stackIndex] = 'DOM.java:' + '705' , $getChild(container, idx));
  $location_0[stackIndex] = 'MenuBar.java:' + '916' , tdCount = ($location_0[stackIndex] = 'DOM.java:' + '715' , $getChildCount(tr));
  tdCount == 2 && ($location_0[stackIndex] = 'Node.java:' + '285' , tr.removeChild(($location_0[stackIndex] = 'DOM.java:' + '705' , $getChild(tr, 1))));
  $location_0[stackIndex] = 'Element.java:' + '658' , item.element['colSpan'] = 2;
  $stackDepth_0 = stackIndex - 1;
}

function getClass_239(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_239;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_user_client_ui_MenuBar_2_classLit;
}

function onBrowserEvent_2(event_0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onBrowserEvent_2;
  $location_0[stackIndex] = 'MenuBar.java:' + '542' , $onBrowserEvent_1(this, event_0);
  $stackDepth_0 = stackIndex - 1;
}

function onDetach_1(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onDetach_1;
  $location_0[stackIndex] = 'MenuBar.java:' + '775' , $onDetach(this);
  $stackDepth_0 = stackIndex - 1;
}

function MenuBar(){
}

_ = MenuBar.prototype = new Widget;
_.getClass$ = getClass_239;
_.onBrowserEvent = onBrowserEvent_2;
_.onDetach = onDetach_1;
_.typeId$ = 129;
_.autoOpen = false;
_.body_0 = null;
_.selectedItem = null;
_.vertical = false;
function $MenuItem(this$static, text, asHTML, cmd){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $MenuItem;
  $location_0[stackIndex] = 'UIObject.java:' + '799' , this$static.element = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , ($location_0[stackIndex] = 'Document.java:' + '985' , $clinit_81() , $doc).createElement('td'));
  $location_0[stackIndex] = 'MenuItem.java:' + '85' , $setSelectionStyle_0(this$static, false);
  asHTML?($location_0[stackIndex] = 'Element.java:' + '614' , this$static.element.innerHTML = text || '' , undefined):($location_0[stackIndex] = 'Element.java:' + '621' , $setInnerText_0(this$static.element, text) , undefined);
  $location_0[stackIndex] = 'Element.java:' + '688' , this$static.element['className'] = 'gwt-MenuItem';
  $location_0[stackIndex] = 'Element.java:' + '576' , this$static.element.setAttribute('id', ($location_0[stackIndex] = 'DOM.java:' + '374' , $createUniqueId($doc)));
  this$static.element.setAttribute('role', 'menuitem');
  $location_0[stackIndex] = 'MenuItem.java:' + '140' , this$static.command = cmd;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $setSelectionStyle_0(this$static, selected){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setSelectionStyle_0;
  selected?($location_0[stackIndex] = 'UIObject.java:' + '364' , $addStyleName(this$static, ($location_0[stackIndex] = 'UIObject.java:' + '552' , getStylePrimaryName(this$static.element)) + '-selected')):($location_0[stackIndex] = 'UIObject.java:' + '583' , $removeStyleName(this$static, ($location_0[stackIndex] = 'UIObject.java:' + '552' , getStylePrimaryName(this$static.element)) + '-selected'));
  $stackDepth_0 = stackIndex - 1;
}

function getClass_240(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_240;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_user_client_ui_MenuItem_2_classLit;
}

function MenuItem(){
}

_ = MenuItem.prototype = new UIObject;
_.getClass$ = getClass_240;
_.typeId$ = 130;
_.command = null;
function $MenuItemSeparator(this$static){
  var div, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $MenuItemSeparator;
  $location_0[stackIndex] = 'UIObject.java:' + '799' , this$static.element = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , ($location_0[stackIndex] = 'Document.java:' + '985' , $clinit_81() , $doc).createElement('td'));
  $location_0[stackIndex] = 'Element.java:' + '688' , this$static.element['className'] = 'gwt-MenuItemSeparator';
  $location_0[stackIndex] = 'MenuItemSeparator.java:' + '39' , div = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , $doc.createElement('div'));
  $location_0[stackIndex] = 'Node.java:' + '72' , this$static.element.appendChild(div);
  $location_0[stackIndex] = 'Element.java:' + '688' , div['className'] = 'menuSeparatorInner';
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_241(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_241;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_user_client_ui_MenuItemSeparator_2_classLit;
}

function MenuItemSeparator(){
}

_ = MenuItemSeparator.prototype = new UIObject;
_.getClass$ = getClass_241;
_.typeId$ = 131;
function $TabBar$ClickDelegatePanel(this$static, child, this$0){
  var wrapperWidget, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $TabBar$ClickDelegatePanel;
  $location_0[stackIndex] = 'TabBar.java:' + '91' , this$static.this$0 = this$0;
  this$static.focusablePanel = $SimplePanel_0(($location_0[stackIndex] = 'TabBar.java:' + '93' , new SimplePanel), $createFocusable());
  $location_0[stackIndex] = 'TabBar.java:' + '94' , this$static.focusablePanel.setWidget(child);
  wrapperWidget = ($location_0[stackIndex] = 'TabBar.java:' + '95' , this$static.this$0.createTabTextWrapper());
  if (!wrapperWidget) {
    $location_0[stackIndex] = 'TabBar.java:' + '97' , $initWidget(this$static, this$static.focusablePanel);
  }
   else {
    $location_0[stackIndex] = 'TabBar.java:' + '99' , $setWidget(wrapperWidget, this$static.focusablePanel);
    $location_0[stackIndex] = 'TabBar.java:' + '100' , $initWidget(this$static, wrapperWidget);
  }
  $location_0[stackIndex] = 'TabBar.java:' + '103' , $sinkEvents(this$static, 129);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function addClickHandler_4(handler){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = addClickHandler_4;
  returnTemp = ($location_0[stackIndex] = 'TabBar.java:' + '107' , $addHandler_1(this, handler, ($location_0[stackIndex] = 'TabBar.java:' + '107' , $clinit_126() , ($location_0[stackIndex] = 'ClickEvent.java:' + '27' , $clinit_126()) , TYPE_1)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getClass_257(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_257;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_user_client_ui_TabBar$ClickDelegatePanel_2_classLit;
}

function onBrowserEvent_4(event_0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onBrowserEvent_4;
  switch ($location_0[stackIndex] = 'DOMImpl.java:' + '61' , $eventGetTypeInt(($location_0[stackIndex] = 'NativeEvent.java:' + '209' , $clinit_81() , event_0).type)) {
    case 1:
      $location_0[stackIndex] = 'TabBar.java:' + '151' , $selectTabByTabWidget(this.this$0, this);
      break;
    case 128:
      ((event_0.which || event_0.keyCode || 0) & 65535) == 13 && ($location_0[stackIndex] = 'TabBar.java:' + '157' , $selectTabByTabWidget(this.this$0, this));
      (event_0.which || event_0.keyCode || 0) & 65535;
      (event_0.shiftKey?1:0) | (event_0.metaKey?8:0) | (event_0.ctrlKey?2:0) | (event_0.altKey?4:0);
  }
  $location_0[stackIndex] = 'Composite.java:' + '51' , $onBrowserEvent(this, event_0);
  $location_0[stackIndex] = 'Composite.java:' + '54' , this.widget.onBrowserEvent(event_0);
  $stackDepth_0 = stackIndex - 1;
}

function TabBar$ClickDelegatePanel(){
}

_ = TabBar$ClickDelegatePanel.prototype = new Composite;
_.addClickHandler = addClickHandler_4;
_.getClass$ = getClass_257;
_.onBrowserEvent = onBrowserEvent_4;
_.typeId$ = 145;
_.focusablePanel = null;
_.this$0 = null;
function $Tree(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $Tree;
  this$static.childWidgets = $HashMap(($location_0[stackIndex] = 'Tree.java:' + '219' , new HashMap));
  $init_3(this$static, $Tree$ImageAdapter(($location_0[stackIndex] = 'Tree.java:' + '241' , new Tree$ImageAdapter)), false);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $addItem_1(this$static, itemText){
  var ret, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $addItem_1;
  ret = $TreeItem_0(($location_0[stackIndex] = 'Tree.java:' + '327' , new TreeItem), itemText);
  $location_0[stackIndex] = 'Tree.java:' + '339' , $addItem_3(this$static.root, ret);
  $stackDepth_0 = stackIndex - 1;
  return ret;
}

function $clear_4(this$static){
  var i, size, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clear_4;
  size = ($location_0[stackIndex] = 'Tree.java:' + '429' , $getChildCount_0(this$static.root));
  for ($location_0[stackIndex] = 'Tree.java:' + '430' , i = size - 1; i >= 0; $location_0[stackIndex] = 'Tree.java:' + '430' , --i) {
    $remove_10(($location_0[stackIndex] = 'Tree.java:' + '431' , $getChild_0(this$static.root, i)));
  }
  $stackDepth_0 = stackIndex - 1;
}

function $collectElementChain(this$static, chain, hRoot, hElem){
  var parent_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $collectElementChain;
  if (!hElem || hElem == hRoot) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  $location_0[stackIndex] = 'Tree.java:' + '866' , $collectElementChain(this$static, chain, hRoot, ($location_0[stackIndex] = 'DOMImpl.java:' + '236' , parent_0 = ($location_0[stackIndex] = 'Node.java:' + '184' , $clinit_81() , hElem).parentNode , (!parent_0 || parent_0.nodeType != 1) && ($location_0[stackIndex] = 'DOMImpl.java:' + '238' , parent_0 = null) , parent_0));
  setCheck(chain.array, ($location_0[stackIndex] = 'ArrayList.java:' + '95' , chain.size_0++), hElem);
  $stackDepth_0 = stackIndex - 1;
}

function $elementClicked(this$static, hElem){
  var chain, item, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $elementClicked;
  chain = $ArrayList(($location_0[stackIndex] = 'Tree.java:' + '871' , new ArrayList));
  $location_0[stackIndex] = 'Tree.java:' + '872' , $collectElementChain(this$static, chain, this$static.element, hElem);
  item = ($location_0[stackIndex] = 'Tree.java:' + '874' , $findItemByChain(this$static, chain, 0, this$static.root));
  if (!!item && item != this$static.root) {
    if (($location_0[stackIndex] = 'Tree.java:' + '876' , $getChildCount_0(item)) > 0 && ($location_0[stackIndex] = 'Tree.java:' + '877' , isOrHasChild(($location_0[stackIndex] = 'Element.java:' + '241' , $getFirstChildElement_0(($location_0[stackIndex] = 'Element.java:' + '241' , $clinit_81() , !item.imageHolder && ($location_0[stackIndex] = 'TreeItem.java:' + '801' , $convertToFullNode(item)) , item.imageHolder))), hElem))) {
      $location_0[stackIndex] = 'Tree.java:' + '878' , $setState_1(item, !item.open_0, true);
      $stackDepth_0 = stackIndex - 1;
      return true;
    }
     else if ($location_0[stackIndex] = 'DOMImplStandard.java:' + '118' , ($location_0[stackIndex] = 'Node.java:' + '274' , $clinit_81() , item.element).contains(hElem)) {
      $onSelection(this$static, item, true, !($location_0[stackIndex] = 'Tree.java:' + '881' , shouldTreeDelegateFocusToElement(hElem)));
      $stackDepth_0 = stackIndex - 1;
      return true;
    }
  }
  $stackDepth_0 = stackIndex - 1;
  return false;
}

function $findDeepestOpenChild(this$static, item){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $findDeepestOpenChild;
  if (!item.open_0) {
    $stackDepth_0 = stackIndex - 1;
    return item;
  }
  returnTemp = $findDeepestOpenChild(this$static, $getChild_0(item, ($location_0[stackIndex] = 'Tree.java:' + '893' , $getChildCount_0(item)) - 1));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $findItemByChain(this$static, chain, idx, root){
  var child, hCurElem, i, n, retItem, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $findItemByChain;
  if (idx == chain.size_0) {
    $stackDepth_0 = stackIndex - 1;
    return root;
  }
  hCurElem = ($location_0[stackIndex] = 'Tree.java:' + '902' , dynamicCastJso(($location_0[stackIndex] = 'ArrayList.java:' + '157' , checkIndex(idx, chain.size_0) , ($location_0[stackIndex] = 'ArrayList.java:' + '158' , chain.array[idx]))));
  for ($location_0[stackIndex] = 'Tree.java:' + '903' , i = 0 , n = $getChildCount_0(root); i < n; $location_0[stackIndex] = 'Tree.java:' + '903' , ++i) {
    child = ($location_0[stackIndex] = 'Tree.java:' + '904' , $getChild_0(root, i));
    if (child.element == hCurElem) {
      retItem = $findItemByChain(this$static, chain, idx + 1, ($location_0[stackIndex] = 'Tree.java:' + '906' , $getChild_0(root, i)));
      if (!retItem) {
        $stackDepth_0 = stackIndex - 1;
        return child;
      }
      $stackDepth_0 = stackIndex - 1;
      return retItem;
    }
  }
  returnTemp = ($location_0[stackIndex] = 'Tree.java:' + '914' , $findItemByChain(this$static, chain, idx + 1, root));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $fireStateChanged(this$static, item, open_0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $fireStateChanged;
  open_0?($location_0[stackIndex] = 'Tree.java:' + '775' , fire_2(this$static, item)):($location_0[stackIndex] = 'CloseEvent.java:' + '41' , fire_1(this$static, item));
  $stackDepth_0 = stackIndex - 1;
}

function $getTopClosedParent(this$static, item){
  var parent_0, topClosedParent, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $getTopClosedParent;
  $location_0[stackIndex] = 'Tree.java:' + '925' , topClosedParent = null;
  $location_0[stackIndex] = 'Tree.java:' + '926' , parent_0 = item.parent_0;
  while (!!parent_0 && parent_0 != this$static.root) {
    !parent_0.open_0 && ($location_0[stackIndex] = 'Tree.java:' + '929' , topClosedParent = parent_0);
    $location_0[stackIndex] = 'Tree.java:' + '931' , parent_0 = parent_0.parent_0;
  }
  $stackDepth_0 = stackIndex - 1;
  return topClosedParent;
}

function $init_3(this$static, images, useLeafImages){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $init_3;
  $location_0[stackIndex] = 'Tree.java:' + '937' , $setImages(this$static, images, useLeafImages);
  $location_0[stackIndex] = 'UIObject.java:' + '799' , this$static.element = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , ($location_0[stackIndex] = 'Document.java:' + '252' , $clinit_81() , $doc).createElement('div'));
  $location_0[stackIndex] = 'Style.java:' + '1449' , this$static.element.style['position'] = 'relative';
  this$static.element.style['zoom'] = '1';
  this$static.focusable = ($location_0[stackIndex] = 'Tree.java:' + '947' , $createFocusable());
  $location_0[stackIndex] = 'Style.java:' + '1449' , this$static.focusable.style['fontSize'] = '0';
  this$static.focusable.style['position'] = 'absolute';
  this$static.focusable.style['outline'] = '0px';
  $location_0[stackIndex] = 'Element.java:' + '576' , this$static.focusable.setAttribute('hideFocus', 'true');
  $location_0[stackIndex] = 'Style.java:' + '1449' , this$static.focusable.style['zIndex'] = '-1';
  $location_0[stackIndex] = 'Node.java:' + '72' , this$static.element.appendChild(this$static.focusable);
  $location_0[stackIndex] = 'Tree.java:' + '960' , $sinkEvents(this$static, 901);
  $location_0[stackIndex] = 'Tree.java:' + '961' , sinkEvents(this$static.focusable, 6144);
  this$static.root = $Tree$1(($location_0[stackIndex] = 'Tree.java:' + '965' , new Tree$1), this$static);
  $location_0[stackIndex] = 'Tree.java:' + '1002' , $initChildren(this$static.root);
  $location_0[stackIndex] = 'Tree.java:' + '1003' , $setTree(this$static.root, this$static);
  $location_0[stackIndex] = 'Element.java:' + '688' , this$static.element['className'] = 'gwt-Tree';
  $location_0[stackIndex] = 'Element.java:' + '576' , this$static.element.setAttribute('role', 'tree');
  this$static.focusable.setAttribute('role', 'treeitem');
  $stackDepth_0 = stackIndex - 1;
}

function $keyboardNavigation(this$static, event_0){
  var code, topClosedParent, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $keyboardNavigation;
  $location_0[stackIndex] = 'Tree.java:' + '1014' , code = $eventGetKeyCode(($location_0[stackIndex] = 'NativeEvent.java:' + '125' , $clinit_81() , event_0));
  switch ($location_0[stackIndex] = 'Tree.java:' + '1016' , standardizeKeycode(code)) {
    case 38:
      {
        $location_0[stackIndex] = 'Tree.java:' + '1018' , $moveSelectionUp_0(this$static, this$static.curSelection);
        break;
      }

    case 40:
      {
        $location_0[stackIndex] = 'Tree.java:' + '1022' , $moveSelectionDown_0(this$static, this$static.curSelection, true);
        break;
      }

    case 37:
      {
        $location_0[stackIndex] = 'Tree.java:' + '1026' , $maybeCollapseTreeItem(this$static);
        break;
      }

    case 39:
      {
        topClosedParent = ($location_0[stackIndex] = 'Tree.java:' + '1058' , $getTopClosedParent(this$static, this$static.curSelection));
        topClosedParent?($location_0[stackIndex] = 'Tree.java:' + '677' , $setSelectedItem(this$static, topClosedParent, true)):this$static.curSelection.open_0?($location_0[stackIndex] = 'Tree.java:' + '1064' , $getChildCount_0(this$static.curSelection)) > 0 && ($location_0[stackIndex] = 'Tree.java:' + '677' , $setSelectedItem(this$static, ($location_0[stackIndex] = 'Tree.java:' + '1065' , $getChild_0(this$static.curSelection, 0)), true)):($location_0[stackIndex] = 'TreeItem.java:' + '528' , $setState_1(this$static.curSelection, true, true));
        break;
      }

    default:{
        $stackDepth_0 = stackIndex - 1;
        return;
      }

  }
  $stackDepth_0 = stackIndex - 1;
}

function $maybeCollapseTreeItem(this$static){
  var parent_0, topClosedParent, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $maybeCollapseTreeItem;
  topClosedParent = ($location_0[stackIndex] = 'Tree.java:' + '1042' , $getTopClosedParent(this$static, this$static.curSelection));
  if (topClosedParent) {
    $location_0[stackIndex] = 'Tree.java:' + '677' , $setSelectedItem(this$static, topClosedParent, true);
  }
   else if (this$static.curSelection.open_0) {
    $location_0[stackIndex] = 'TreeItem.java:' + '528' , $setState_1(this$static.curSelection, false, true);
  }
   else {
    $location_0[stackIndex] = 'Tree.java:' + '1049' , parent_0 = this$static.curSelection.parent_0;
    !!parent_0 && ($location_0[stackIndex] = 'Tree.java:' + '677' , $setSelectedItem(this$static, parent_0, true));
  }
  $stackDepth_0 = stackIndex - 1;
}

function $maybeUpdateSelection(this$static, itemThatChangedState, isItemOpening){
  var tempItem, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $maybeUpdateSelection;
  if (!isItemOpening) {
    $location_0[stackIndex] = 'Tree.java:' + '799' , tempItem = this$static.curSelection;
    while (tempItem) {
      if (tempItem == itemThatChangedState) {
        $location_0[stackIndex] = 'Tree.java:' + '677' , $setSelectedItem(this$static, itemThatChangedState, true);
        $stackDepth_0 = stackIndex - 1;
        return;
      }
      $location_0[stackIndex] = 'Tree.java:' + '805' , tempItem = tempItem.parent_0;
    }
  }
  $stackDepth_0 = stackIndex - 1;
}

function $moveFocus(this$static){
  var containerLeft, containerTop, height, left, selectedElem, top_0, width, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $moveFocus;
  $location_0[stackIndex] = 'Tree.java:' + '1080' , selectedElem = this$static.curSelection.contentElem;
  $location_0[stackIndex] = 'Tree.java:' + '1081' , containerLeft = $getAbsoluteLeft_0(($location_0[stackIndex] = 'Element.java:' + '150' , $clinit_81() , this$static.element));
  $location_0[stackIndex] = 'Tree.java:' + '1082' , containerTop = ($location_0[stackIndex] = 'Element.java:' + '166' , $getAbsoluteTop_0(this$static.element));
  $location_0[stackIndex] = 'Tree.java:' + '1084' , left = ($location_0[stackIndex] = 'Element.java:' + '150' , $getAbsoluteLeft_0(selectedElem)) - containerLeft;
  $location_0[stackIndex] = 'Tree.java:' + '1085' , top_0 = ($location_0[stackIndex] = 'Element.java:' + '166' , $getAbsoluteTop_0(selectedElem)) - containerTop;
  $location_0[stackIndex] = 'Tree.java:' + '1086' , width = parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , selectedElem['offsetWidth'])) || 0;
  $location_0[stackIndex] = 'Tree.java:' + '1087' , height = parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , selectedElem['offsetHeight'])) || 0;
  if (width == 0 || height == 0) {
    $location_0[stackIndex] = 'Style.java:' + '1449' , this$static.focusable.style['left'] = '0';
    this$static.focusable.style['top'] = '0';
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  this$static.focusable.style['left'] = left + 'px';
  this$static.focusable.style['top'] = top_0 + 'px';
  this$static.focusable.style['width'] = width + 'px';
  this$static.focusable.style['height'] = height + 'px';
  $location_0[stackIndex] = 'DOMImplOpera.java:' + '74' , this$static.focusable.scrollIntoView();
  $location_0[stackIndex] = 'Tree.java:' + '1108' , $updateAriaAttributes(this$static);
  $location_0[stackIndex] = 'Element.java:' + '134' , this$static.focusable.focus();
  $stackDepth_0 = stackIndex - 1;
}

function $moveSelectionDown_0(this$static, sel, dig){
  var idx, parent_0, topClosedParent, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $moveSelectionDown_0;
  if (sel == this$static.root) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  topClosedParent = ($location_0[stackIndex] = 'Tree.java:' + '1125' , $getTopClosedParent(this$static, sel));
  if (topClosedParent) {
    $location_0[stackIndex] = 'Tree.java:' + '1127' , $moveSelectionDown_0(this$static, topClosedParent, false);
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  $location_0[stackIndex] = 'Tree.java:' + '1131' , parent_0 = sel.parent_0;
  !parent_0 && ($location_0[stackIndex] = 'Tree.java:' + '1133' , parent_0 = this$static.root);
  idx = ($location_0[stackIndex] = 'Tree.java:' + '1135' , $getChildIndex(parent_0, sel));
  !dig || !sel.open_0?idx < ($location_0[stackIndex] = 'Tree.java:' + '1138' , $getChildCount_0(parent_0)) - 1?$onSelection(this$static, ($location_0[stackIndex] = 'Tree.java:' + '1139' , $getChild_0(parent_0, idx + 1)), true, true):($location_0[stackIndex] = 'Tree.java:' + '1141' , $moveSelectionDown_0(this$static, parent_0, false)):($location_0[stackIndex] = 'Tree.java:' + '1143' , $getChildCount_0(sel)) > 0 && $onSelection(this$static, ($location_0[stackIndex] = 'Tree.java:' + '1144' , $getChild_0(sel, 0)), true, true);
  $stackDepth_0 = stackIndex - 1;
}

function $moveSelectionUp_0(this$static, sel){
  var idx, parent_0, sibling, topClosedParent, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $moveSelectionUp_0;
  topClosedParent = ($location_0[stackIndex] = 'Tree.java:' + '1153' , $getTopClosedParent(this$static, sel));
  if (topClosedParent) {
    $location_0[stackIndex] = 'Tree.java:' + '1155' , $onSelection(this$static, topClosedParent, true, true);
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  $location_0[stackIndex] = 'Tree.java:' + '1159' , parent_0 = sel.parent_0;
  !parent_0 && ($location_0[stackIndex] = 'Tree.java:' + '1161' , parent_0 = this$static.root);
  idx = ($location_0[stackIndex] = 'Tree.java:' + '1163' , $getChildIndex(parent_0, sel));
  if (idx > 0) {
    sibling = ($location_0[stackIndex] = 'Tree.java:' + '1166' , $getChild_0(parent_0, idx - 1));
    $onSelection(this$static, ($location_0[stackIndex] = 'Tree.java:' + '1167' , $findDeepestOpenChild(this$static, sibling)), true, true);
  }
   else {
    $location_0[stackIndex] = 'Tree.java:' + '1169' , $onSelection(this$static, parent_0, true, true);
  }
  $stackDepth_0 = stackIndex - 1;
}

function $onSelection(this$static, item, fireEvents, moveFocus){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $onSelection;
  if (item == this$static.root) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  !!this$static.curSelection && ($location_0[stackIndex] = 'Tree.java:' + '1181' , $setSelected_0(this$static.curSelection, false));
  $location_0[stackIndex] = 'Tree.java:' + '1183' , this$static.curSelection = item;
  if (this$static.curSelection) {
    moveFocus && ($location_0[stackIndex] = 'Tree.java:' + '1187' , $moveFocus(this$static));
    $location_0[stackIndex] = 'Tree.java:' + '1190' , $setSelected_0(this$static.curSelection, true);
    fireEvents && ($location_0[stackIndex] = 'Tree.java:' + '1192' , fire_4(this$static, this$static.curSelection));
  }
  $stackDepth_0 = stackIndex - 1;
}

function $remove_9(this$static, w){
  var item, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $remove_9;
  item = dynamicCast(($location_0[stackIndex] = 'Tree.java:' + '590' , $get_7(this$static.childWidgets, w)), 155);
  if (!item) {
    $stackDepth_0 = stackIndex - 1;
    return false;
  }
  $location_0[stackIndex] = 'Element.java:' + '614' , item.contentElem.innerHTML = '';
  $stackDepth_0 = stackIndex - 1;
  return true;
}

function $setImages(this$static, images, useLeafImages){
  var image, size, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setImages;
  $location_0[stackIndex] = 'Tree.java:' + '1198' , this$static.images = images;
  $location_0[stackIndex] = 'Tree.java:' + '1199' , this$static.useLeafImages = useLeafImages;
  if (!useLeafImages) {
    image = ($location_0[stackIndex] = 'Tree.java:' + '1202' , $createImage(images.treeLeaf));
    $location_0[stackIndex] = 'Style.java:' + '1449' , image.element.style['visibility'] = 'hidden';
    $location_0[stackIndex] = 'Tree.java:' + '1204' , $clinit_425();
    $location_0[stackIndex] = 'Tree.java:' + '1204' , $add_1(($location_0[stackIndex] = 'RootPanel.java:' + '151' , get_1(null)), image);
    $location_0[stackIndex] = 'Tree.java:' + '1205' , size = ($location_0[stackIndex] = 'Image.java:' + '532' , image.state.getWidth(image)) + 7;
    $location_0[stackIndex] = 'Tree.java:' + '1206' , $removeFromParent(image);
    $location_0[stackIndex] = 'Tree.java:' + '1207' , this$static.indentValue = size + 'px';
  }
  $stackDepth_0 = stackIndex - 1;
}

function $setSelectedItem(this$static, item, fireEvents){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setSelectedItem;
  if (!item) {
    if (!this$static.curSelection) {
      $stackDepth_0 = stackIndex - 1;
      return;
    }
    $location_0[stackIndex] = 'Tree.java:' + '692' , $setSelected_0(this$static.curSelection, false);
    $location_0[stackIndex] = 'Tree.java:' + '693' , this$static.curSelection = null;
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  $location_0[stackIndex] = 'Tree.java:' + '697' , $onSelection(this$static, item, fireEvents, true);
  $stackDepth_0 = stackIndex - 1;
}

function $showClosedImage(this$static, treeItem){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $showClosedImage;
  $location_0[stackIndex] = 'Tree.java:' + '830' , $showImage(treeItem, this$static.images.treeClosed);
  $stackDepth_0 = stackIndex - 1;
}

function $showImage(treeItem, proto){
  var child, holder, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $showImage;
  $location_0[stackIndex] = 'Tree.java:' + '1212' , holder = (!treeItem.imageHolder && ($location_0[stackIndex] = 'TreeItem.java:' + '801' , $convertToFullNode(treeItem)) , treeItem.imageHolder);
  $location_0[stackIndex] = 'Tree.java:' + '1213' , child = $getFirstChildElement_0(($location_0[stackIndex] = 'Element.java:' + '241' , $clinit_81() , holder));
  !child?($location_0[stackIndex] = 'Node.java:' + '72' , holder.appendChild(($location_0[stackIndex] = 'ClippedImagePrototype.java:' + '58' , $createStructure(proto.url, proto.left, proto.top_0, proto.width_0, proto.height_0)))):($location_0[stackIndex] = 'ClippedImagePrototype.java:' + '53' , $adjust(child, proto.url, proto.left, proto.top_0, proto.width_0, proto.height_0));
  $stackDepth_0 = stackIndex - 1;
}

function $showLeafImage(this$static, treeItem){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $showLeafImage;
  if (this$static.useLeafImages || !!treeItem.imageHolder) {
    $location_0[stackIndex] = 'Tree.java:' + '840' , $showImage(treeItem, this$static.images.treeLeaf);
  }
   else {
    $location_0[stackIndex] = 'Tree.java:' + '841' , $clinit_223();
    $location_0[stackIndex] = 'Style.java:' + '1449' , treeItem.element.style['paddingLeft'] = this$static.indentValue;
  }
  $stackDepth_0 = stackIndex - 1;
}

function $showOpenImage(this$static, treeItem){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $showOpenImage;
  $location_0[stackIndex] = 'Tree.java:' + '854' , $showImage(treeItem, this$static.images.treeOpen);
  $stackDepth_0 = stackIndex - 1;
}

function $updateAriaAttributes(this$static){
  var curSelectionContentElem, curSelectionIndex, curSelectionLevel, curSelectionParent, tempItem, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $updateAriaAttributes;
  $location_0[stackIndex] = 'Tree.java:' + '1226' , curSelectionContentElem = this$static.curSelection.contentElem;
  $location_0[stackIndex] = 'Tree.java:' + '1236' , curSelectionLevel = -1;
  $location_0[stackIndex] = 'Tree.java:' + '1237' , tempItem = this$static.curSelection;
  while (tempItem) {
    $location_0[stackIndex] = 'Tree.java:' + '1240' , tempItem = tempItem.parent_0;
    $location_0[stackIndex] = 'Tree.java:' + '1241' , ++curSelectionLevel;
  }
  $location_0[stackIndex] = 'Element.java:' + '576' , curSelectionContentElem.setAttribute('aria-level', '' + (curSelectionLevel + 1));
  $location_0[stackIndex] = 'Tree.java:' + '1251' , curSelectionParent = this$static.curSelection.parent_0;
  !curSelectionParent && ($location_0[stackIndex] = 'Tree.java:' + '1253' , curSelectionParent = this$static.root);
  $location_0[stackIndex] = 'Element.java:' + '576' , curSelectionContentElem.setAttribute('aria-setsize', '' + ($location_0[stackIndex] = 'Tree.java:' + '1258' , $getChildCount_0(curSelectionParent)));
  curSelectionIndex = ($location_0[stackIndex] = 'Tree.java:' + '1260' , $getChildIndex(curSelectionParent, this$static.curSelection));
  $location_0[stackIndex] = 'Element.java:' + '576' , curSelectionContentElem.setAttribute('aria-posinset', '' + (curSelectionIndex + 1));
  ($location_0[stackIndex] = 'Tree.java:' + '1269' , $getChildCount_0(this$static.curSelection)) == 0?($location_0[stackIndex] = 'Element.java:' + '490' , curSelectionContentElem.removeAttribute('aria-expanded') , undefined):this$static.curSelection.open_0?($location_0[stackIndex] = 'Element.java:' + '576' , curSelectionContentElem.setAttribute('aria-expanded', 'true') , undefined):(curSelectionContentElem.setAttribute('aria-expanded', 'false') , undefined);
  curSelectionContentElem.setAttribute('aria-selected', 'true');
  $location_0[stackIndex] = 'Element.java:' + '576' , this$static.focusable.setAttribute('aria-activedescendant', ($location_0[stackIndex] = 'DOMImpl.java:' + '186' , ($location_0[stackIndex] = 'Element.java:' + '180' , $clinit_81() , curSelectionContentElem).getAttribute('id')) || '');
  $stackDepth_0 = stackIndex - 1;
}

function addMouseDownHandler_3(handler){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = addMouseDownHandler_3;
  returnTemp = ($location_0[stackIndex] = 'Tree.java:' + '374' , $addHandler_1(this, handler, ($location_0[stackIndex] = 'Tree.java:' + '374' , $clinit_165() , ($location_0[stackIndex] = 'MouseDownEvent.java:' + '27' , $clinit_165()) , TYPE_7)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function addMouseMoveHandler_3(handler){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = addMouseMoveHandler_3;
  returnTemp = ($location_0[stackIndex] = 'Tree.java:' + '388' , $addDomHandler(this, handler, ($location_0[stackIndex] = 'Tree.java:' + '388' , $clinit_167() , ($location_0[stackIndex] = 'MouseMoveEvent.java:' + '27' , $clinit_167()) , TYPE_8)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function addMouseOutHandler_3(handler){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = addMouseOutHandler_3;
  returnTemp = ($location_0[stackIndex] = 'Tree.java:' + '392' , $addDomHandler(this, handler, ($location_0[stackIndex] = 'Tree.java:' + '392' , $clinit_169() , ($location_0[stackIndex] = 'MouseOutEvent.java:' + '29' , $clinit_169()) , TYPE_9)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function addMouseUpHandler_3(handler){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = addMouseUpHandler_3;
  returnTemp = ($location_0[stackIndex] = 'Tree.java:' + '400' , $addDomHandler(this, handler, ($location_0[stackIndex] = 'Tree.java:' + '400' , $clinit_173() , ($location_0[stackIndex] = 'MouseUpEvent.java:' + '27' , $clinit_173()) , TYPE_11)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function doAttachChildren_3(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = doAttachChildren_3;
  try {
    $location_0[stackIndex] = 'Tree.java:' + '718' , tryCommand(this, ($location_0[stackIndex] = 'AttachDetachException.java:' + '30' , $clinit_343() , attachCommand));
  }
   catch (e) {
    e = ($location_0[stackIndex] = 'Tree.java:' + '717' , caught_0(e));
    $stackDepth_0 = stackIndex;
    throw e;
  }
   finally {
    $location_0[stackIndex] = 'DOMImpl.java:' + '122' , this.focusable.__listener = this;
  }
  $stackDepth_0 = stackIndex - 1;
}

function doDetachChildren_3(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = doDetachChildren_3;
  try {
    $location_0[stackIndex] = 'Tree.java:' + '728' , tryCommand(this, ($location_0[stackIndex] = 'AttachDetachException.java:' + '39' , $clinit_343() , detachCommand));
  }
   catch (e) {
    e = ($location_0[stackIndex] = 'Tree.java:' + '727' , caught_0(e));
    $stackDepth_0 = stackIndex;
    throw e;
  }
   finally {
    $location_0[stackIndex] = 'DOMImpl.java:' + '122' , this.focusable.__listener = null;
  }
  $stackDepth_0 = stackIndex - 1;
}

function getClass_258(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_258;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_user_client_ui_Tree_2_classLit;
}

function isArrowKey(code){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = isArrowKey;
  switch (code) {
    case 63233:
    case 63235:
    case 63232:
    case 63234:
    case 40:
    case 39:
    case 38:
    case 37:
      $stackDepth_0 = stackIndex - 1;
      return true;
    default:$stackDepth_0 = stackIndex - 1;
      return false;
  }
  $stackDepth_0 = stackIndex - 1;
}

function iterator_6(){
  var widgets, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = iterator_6;
  widgets = ($location_0[stackIndex] = 'Tree.java:' + '488' , initDim(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, 667, 2, this.childWidgets.size_0, 0));
  $toArray(($location_0[stackIndex] = 'Tree.java:' + '489' , $keySet_1(this.childWidgets)), widgets);
  returnTemp = $WidgetIterators$1(($location_0[stackIndex] = 'WidgetIterators.java:' + '47' , new WidgetIterators$1), widgets, this);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function onBrowserEvent_5(event_0){
  var chain, e, eventType, item, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onBrowserEvent_5;
  $location_0[stackIndex] = 'Tree.java:' + '496' , eventType = ($location_0[stackIndex] = 'DOMImpl.java:' + '61' , $eventGetTypeInt(($location_0[stackIndex] = 'NativeEvent.java:' + '209' , $clinit_81() , event_0).type));
  switch (eventType) {
    case 128:
      {
        if (!this.curSelection) {
          ($location_0[stackIndex] = 'Tree.java:' + '502' , $getChildCount_0(this.root)) > 0 && $onSelection(this, ($location_0[stackIndex] = 'Tree.java:' + '503' , $getChild_0(this.root, 0)), true, true);
          $location_0[stackIndex] = 'Tree.java:' + '505' , $onBrowserEvent(this, event_0);
          $stackDepth_0 = stackIndex - 1;
          return;
        }
      }

    case 256:
    case 512:
      if (!!event_0.altKey || !!event_0.metaKey) {
        $location_0[stackIndex] = 'Tree.java:' + '515' , $onBrowserEvent(this, event_0);
        $stackDepth_0 = stackIndex - 1;
        return;
      }

  }
  switch (eventType) {
    case 1:
      {
        $location_0[stackIndex] = 'Tree.java:' + '523' , e = event_0.target;
        ($location_0[stackIndex] = 'Tree.java:' + '524' , shouldTreeDelegateFocusToElement(e)) || !!this.curSelection && ($location_0[stackIndex] = 'Element.java:' + '134' , this.focusable.focus() , undefined);
        break;
      }

    case 4:
      {
        event_0.currentTarget == this.element && ($location_0[stackIndex] = 'NativeEvent.java:' + '63' , $eventGetButton(event_0)) == 1 && ($location_0[stackIndex] = 'Tree.java:' + '541' , $elementClicked(this, event_0.target));
        break;
      }

    case 128:
      {
        $location_0[stackIndex] = 'Tree.java:' + '546' , $keyboardNavigation(this, event_0);
        $location_0[stackIndex] = 'Tree.java:' + '547' , this.lastWasKeyDown = true;
        break;
      }

    case 256:
      {
        !this.lastWasKeyDown && ($location_0[stackIndex] = 'Tree.java:' + '553' , $keyboardNavigation(this, event_0));
        $location_0[stackIndex] = 'Tree.java:' + '555' , this.lastWasKeyDown = false;
        break;
      }

    case 512:
      {
        if ((event_0.which || event_0.keyCode || 0) == 9) {
          chain = $ArrayList(($location_0[stackIndex] = 'Tree.java:' + '561' , new ArrayList));
          $location_0[stackIndex] = 'Tree.java:' + '562' , $collectElementChain(this, chain, this.element, event_0.target);
          item = ($location_0[stackIndex] = 'Tree.java:' + '563' , $findItemByChain(this, chain, 0, this.root));
          item != this.curSelection && ($location_0[stackIndex] = 'Tree.java:' + '565' , $setSelectedItem(this, item, true));
        }
        $location_0[stackIndex] = 'Tree.java:' + '568' , this.lastWasKeyDown = false;
        break;
      }

  }
  switch (eventType) {
    case 128:
    case 512:
      {
        if ($location_0[stackIndex] = 'Tree.java:' + '576' , isArrowKey(event_0.which || event_0.keyCode || 0)) {
          $location_0[stackIndex] = 'DOMImpl.java:' + '49' , event_0.cancelBubble = true;
          $location_0[stackIndex] = 'DOMImplStandard.java:' + '108' , event_0.preventDefault();
          $stackDepth_0 = stackIndex - 1;
          return;
        }
      }

  }
  $location_0[stackIndex] = 'Tree.java:' + '585' , $onBrowserEvent(this, event_0);
  $stackDepth_0 = stackIndex - 1;
}

function onLoad_10(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onLoad_10;
  $location_0[stackIndex] = 'Tree.java:' + '764' , $updateStateRecursive(this.root);
  $stackDepth_0 = stackIndex - 1;
}

function remove_11(w){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = remove_11;
  returnTemp = ($location_0[stackIndex] = 'Tree.java:' + '588' , $remove_9(this, w));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function shouldTreeDelegateFocusToElement(elem){
  var name_0 = elem.nodeName, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = shouldTreeDelegateFocusToElement;
  $stackDepth_0 = stackIndex - 1;
  return name_0 == 'SELECT' || name_0 == 'INPUT' || name_0 == 'TEXTAREA' || name_0 == 'OPTION' || name_0 == 'BUTTON' || name_0 == 'LABEL';
}

function standardizeKeycode(code){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = standardizeKeycode;
  switch (code) {
    case 63233:
      $location_0[stackIndex] = 'Tree.java:' + '194' , code = 40;
      break;
    case 63235:
      $location_0[stackIndex] = 'Tree.java:' + '197' , code = 39;
      break;
    case 63232:
      $location_0[stackIndex] = 'Tree.java:' + '200' , code = 38;
      break;
    case 63234:
      $location_0[stackIndex] = 'Tree.java:' + '203' , code = 37;
  }
  $location_0[stackIndex] = 'Tree.java:' + '206' , $clinit_223();
  $stackDepth_0 = stackIndex - 1;
  return code;
}

function Tree(){
}

_ = Tree.prototype = new Widget;
_.addMouseDownHandler = addMouseDownHandler_3;
_.addMouseMoveHandler = addMouseMoveHandler_3;
_.addMouseOutHandler = addMouseOutHandler_3;
_.addMouseUpHandler = addMouseUpHandler_3;
_.doAttachChildren = doAttachChildren_3;
_.doDetachChildren = doDetachChildren_3;
_.getClass$ = getClass_258;
_.iterator_0 = iterator_6;
_.onBrowserEvent = onBrowserEvent_5;
_.onLoad = onLoad_10;
_.remove_0 = remove_11;
_.typeId$ = 146;
_.curSelection = null;
_.focusable = null;
_.images = null;
_.indentValue = null;
_.lastWasKeyDown = false;
_.root = null;
_.useLeafImages = false;
function $clinit_447(){
  var contentElem, tbody, tdContent, tdImg, tr, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_447;
  $location_0[stackIndex] = 'TreeItem.java:' + '39' , $clinit_447 = nullMethod;
  itemAnimation = ($location_0[stackIndex] = 'TreeItem.java:' + '233' , new TreeItem$TreeItemAnimation);
  $location_0[stackIndex] = 'TreeItem.java:' + '239' , $clinit_447();
  $location_0[stackIndex] = 'TreeItem.java:' + '70' , BASE_INTERNAL_ELEM = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , ($location_0[stackIndex] = 'Document.java:' + '966' , $clinit_81() , $doc).createElement('table'));
  $location_0[stackIndex] = 'TreeItem.java:' + '71' , contentElem = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , $doc.createElement('div'));
  $location_0[stackIndex] = 'TreeItem.java:' + '72' , tbody = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , $doc.createElement('tbody'));
  $location_0[stackIndex] = 'TreeItem.java:' + '72' , tr = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , $doc.createElement('tr'));
  $location_0[stackIndex] = 'TreeItem.java:' + '73' , tdImg = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , $doc.createElement('td'));
  $location_0[stackIndex] = 'TreeItem.java:' + '73' , tdContent = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , $doc.createElement('td'));
  $location_0[stackIndex] = 'Node.java:' + '72' , BASE_INTERNAL_ELEM.appendChild(tbody);
  tbody.appendChild(tr);
  tr.appendChild(tdImg);
  tr.appendChild(tdContent);
  $location_0[stackIndex] = 'Style.java:' + '1449' , tdImg.style['verticalAlign'] = 'middle';
  tdContent.style['verticalAlign'] = 'middle';
  $location_0[stackIndex] = 'Node.java:' + '72' , tdContent.appendChild(contentElem);
  $location_0[stackIndex] = 'Style.java:' + '1449' , contentElem.style['display'] = 'inline';
  $location_0[stackIndex] = 'Element.java:' + '688' , contentElem['className'] = 'gwt-TreeItem';
  $location_0[stackIndex] = 'Style.java:' + '1449' , BASE_INTERNAL_ELEM.style['whiteSpace'] = 'nowrap';
  $location_0[stackIndex] = 'TreeItem.java:' + '86' , BASE_BARE_ELEM = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , $doc.createElement('div'));
  $location_0[stackIndex] = 'Style.java:' + '1449' , BASE_BARE_ELEM.style['padding'] = '3px';
  $location_0[stackIndex] = 'Node.java:' + '72' , BASE_BARE_ELEM.appendChild(contentElem);
  $location_0[stackIndex] = 'Element.java:' + '576' , contentElem.setAttribute('role', 'treeitem');
  $stackDepth_0 = stackIndex - 1;
}

function $TreeItem(this$static){
  var elem, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $TreeItem;
  $location_0[stackIndex] = 'TreeItem.java:' + '262' , $clinit_447();
  $location_0[stackIndex] = 'TreeItem.java:' + '263' , elem = ($location_0[stackIndex] = 'Node.java:' + '94' , BASE_BARE_ELEM.cloneNode(true));
  $location_0[stackIndex] = 'UIObject.java:' + '799' , this$static.element = elem;
  $location_0[stackIndex] = 'TreeItem.java:' + '265' , this$static.contentElem = $getFirstChildElement_0(($location_0[stackIndex] = 'Element.java:' + '241' , $clinit_81() , elem));
  $location_0[stackIndex] = 'Element.java:' + '576' , this$static.contentElem.setAttribute('id', ($location_0[stackIndex] = 'DOM.java:' + '374' , $createUniqueId($doc)));
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $TreeItem_0(this$static, html){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $TreeItem_0;
  $location_0[stackIndex] = 'TreeItem.java:' + '274' , $clinit_447();
  $location_0[stackIndex] = 'TreeItem.java:' + '275' , $TreeItem(this$static);
  $location_0[stackIndex] = 'Element.java:' + '614' , this$static.contentElem.innerHTML = '';
  this$static.contentElem.innerHTML = html || '';
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $addItem_2(this$static, itemText){
  var ret, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $addItem_2;
  ret = $TreeItem_0(($location_0[stackIndex] = 'TreeItem.java:' + '296' , new TreeItem), itemText);
  $location_0[stackIndex] = 'TreeItem.java:' + '297' , this$static.addItem(ret);
  $stackDepth_0 = stackIndex - 1;
  return ret;
}

function $getChild_0(this$static, index){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getChild_0;
  if (index < 0 || index >= ($location_0[stackIndex] = 'TreeItem.java:' + '357' , $getChildCount_0(this$static))) {
    $stackDepth_0 = stackIndex - 1;
    return null;
  }
  returnTemp = dynamicCast(($location_0[stackIndex] = 'TreeItem.java:' + '361' , $get_5(this$static.children, index)), 155);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $getChildCount_0(this$static){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getChildCount_0;
  if (!this$static.children) {
    $stackDepth_0 = stackIndex - 1;
    return 0;
  }
  returnTemp = this$static.children.size_0;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $getChildIndex(this$static, child){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getChildIndex;
  if (!this$static.children) {
    $stackDepth_0 = stackIndex - 1;
    return -1;
  }
  returnTemp = ($location_0[stackIndex] = 'ArrayList.java:' + '163' , $indexOf_0(this$static.children, child, 0));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $initChildren(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $initChildren;
  $location_0[stackIndex] = 'TreeItem.java:' + '801' , $convertToFullNode(this$static);
  $location_0[stackIndex] = 'TreeItem.java:' + '711' , this$static.childSpanElem = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , ($location_0[stackIndex] = 'Document.java:' + '252' , $clinit_81() , $doc).createElement('div'));
  $location_0[stackIndex] = 'Node.java:' + '72' , this$static.element.appendChild(this$static.childSpanElem);
  $location_0[stackIndex] = 'Style.java:' + '1449' , this$static.childSpanElem.style['whiteSpace'] = 'nowrap';
  this$static.children = $ArrayList(($location_0[stackIndex] = 'TreeItem.java:' + '714' , new ArrayList));
  $stackDepth_0 = stackIndex - 1;
}

function $remove_10(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $remove_10;
  this$static.parent_0?($location_0[stackIndex] = 'TreeItem.java:' + '459' , this$static.parent_0.removeItem(this$static)):!!this$static.tree && ($location_0[stackIndex] = 'Tree.java:' + '615' , $removeItem_0(this$static.tree.root, this$static) , undefined);
  $stackDepth_0 = stackIndex - 1;
}

function $setSelected_0(this$static, selected){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setSelected_0;
  if (this$static.selected_0 == selected) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  $location_0[stackIndex] = 'TreeItem.java:' + '518' , this$static.selected_0 = selected;
  $location_0[stackIndex] = 'TreeItem.java:' + '519' , setStyleName(this$static.contentElem, 'gwt-TreeItem-selected', selected);
  $stackDepth_0 = stackIndex - 1;
}

function $setState_1(this$static, open_0, fireEvents){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setState_1;
  if (open_0 && ($location_0[stackIndex] = 'TreeItem.java:' + '538' , $getChildCount_0(this$static)) == 0) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  if (this$static.open_0 != open_0) {
    $location_0[stackIndex] = 'TreeItem.java:' + '544' , this$static.open_0 = open_0;
    $location_0[stackIndex] = 'TreeItem.java:' + '545' , $updateState(this$static, true, true);
    fireEvents && !!this$static.tree && ($location_0[stackIndex] = 'TreeItem.java:' + '548' , $fireStateChanged(this$static.tree, this$static, open_0));
  }
  $stackDepth_0 = stackIndex - 1;
}

function $setTree(this$static, newTree){
  var i, n, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setTree;
  if (this$static.tree == newTree) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  !!this$static.tree && this$static.tree.curSelection == this$static && ($location_0[stackIndex] = 'Tree.java:' + '677' , $setSelectedItem(this$static.tree, null, true));
  $location_0[stackIndex] = 'TreeItem.java:' + '742' , this$static.tree = newTree;
  for ($location_0[stackIndex] = 'TreeItem.java:' + '743' , i = 0 , n = $getChildCount_0(this$static); i < n; $location_0[stackIndex] = 'TreeItem.java:' + '743' , ++i) {
    $setTree(dynamicCast(($location_0[stackIndex] = 'TreeItem.java:' + '744' , $get_5(this$static.children, i)), 155), newTree);
  }
  $location_0[stackIndex] = 'TreeItem.java:' + '746' , $updateState(this$static, false, true);
  $stackDepth_0 = stackIndex - 1;
}

function $updateState(this$static, animate, updateTreeSelection){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $updateState;
  if (!this$static.tree || !this$static.tree.attached) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  if (($location_0[stackIndex] = 'TreeItem.java:' + '763' , $getChildCount_0(this$static)) == 0) {
    !!this$static.childSpanElem && ($location_0[stackIndex] = 'UIObject.java:' + '214' , this$static.childSpanElem.style.display = 'none' , undefined);
    $location_0[stackIndex] = 'TreeItem.java:' + '767' , $showLeafImage(this$static.tree, this$static);
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  animate && !!this$static.tree && this$static.tree.attached?($location_0[stackIndex] = 'TreeItem.java:' + '774' , $setItemState(itemAnimation, this$static, false)):($location_0[stackIndex] = 'TreeItem.java:' + '776' , $setItemState(itemAnimation, this$static, false));
  this$static.open_0?($location_0[stackIndex] = 'TreeItem.java:' + '781' , $showOpenImage(this$static.tree, this$static)):($location_0[stackIndex] = 'TreeItem.java:' + '783' , $showClosedImage(this$static.tree, this$static));
  updateTreeSelection && ($location_0[stackIndex] = 'TreeItem.java:' + '791' , $maybeUpdateSelection(this$static.tree, this$static, this$static.open_0));
  $stackDepth_0 = stackIndex - 1;
}

function $updateStateRecursive(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $updateStateRecursive;
  $location_0[stackIndex] = 'TreeItem.java:' + '796' , $updateStateRecursiveHelper(this$static);
  $location_0[stackIndex] = 'TreeItem.java:' + '797' , $maybeUpdateSelection(this$static.tree, this$static, this$static.open_0);
  $stackDepth_0 = stackIndex - 1;
}

function $updateStateRecursiveHelper(this$static){
  var i, n, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $updateStateRecursiveHelper;
  $location_0[stackIndex] = 'TreeItem.java:' + '805' , $updateState(this$static, false, false);
  for ($location_0[stackIndex] = 'TreeItem.java:' + '806' , i = 0 , n = $getChildCount_0(this$static); i < n; $location_0[stackIndex] = 'TreeItem.java:' + '806' , ++i) {
    $updateStateRecursiveHelper(dynamicCast(($location_0[stackIndex] = 'TreeItem.java:' + '807' , $get_5(this$static.children, i)), 155));
  }
  $stackDepth_0 = stackIndex - 1;
}

function addItem(item){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = addItem;
  (!!item.parent_0 || !!item.tree) && ($location_0[stackIndex] = 'TreeItem.java:' + '309' , $remove_10(item));
  !this.children && ($location_0[stackIndex] = 'TreeItem.java:' + '313' , $initChildren(this));
  $location_0[stackIndex] = 'TreeItem.java:' + '722' , item.parent_0 = this;
  $location_0[stackIndex] = 'TreeItem.java:' + '318' , $add_7(this.children, item);
  $location_0[stackIndex] = 'TreeItem.java:' + '321' , $clinit_223();
  $location_0[stackIndex] = 'Style.java:' + '1449' , item.element.style['marginLeft'] = '16px';
  $location_0[stackIndex] = 'Node.java:' + '72' , this.childSpanElem.appendChild(item.element);
  $location_0[stackIndex] = 'TreeItem.java:' + '330' , $setTree(item, this.tree);
  this.children.size_0 == 1 && ($location_0[stackIndex] = 'TreeItem.java:' + '333' , $updateState(this, false, false));
  $stackDepth_0 = stackIndex - 1;
}

function getClass_259(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_259;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_user_client_ui_TreeItem_2_classLit;
}

function removeItem(item){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = removeItem;
  if (!this.children || ($location_0[stackIndex] = 'ArrayList.java:' + '163' , $indexOf_0(this.children, item, 0)) == -1) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  $location_0[stackIndex] = 'TreeItem.java:' + '480' , $setTree(item, null);
  $location_0[stackIndex] = 'Node.java:' + '285' , this.childSpanElem.removeChild(item.element);
  $location_0[stackIndex] = 'TreeItem.java:' + '722' , item.parent_0 = null;
  $location_0[stackIndex] = 'TreeItem.java:' + '487' , $remove_8(this.children, item);
  this.children.size_0 == 0 && ($location_0[stackIndex] = 'TreeItem.java:' + '490' , $updateState(this, false, false));
  $stackDepth_0 = stackIndex - 1;
}

function TreeItem(){
}

_ = TreeItem.prototype = new UIObject;
_.addItem = addItem;
_.getClass$ = getClass_259;
_.removeItem = removeItem;
_.typeId$ = 147;
_.childSpanElem = null;
_.children = null;
_.contentElem = null;
_.imageHolder = null;
_.open_0 = false;
_.parent_0 = null;
_.selected_0 = false;
_.tree = null;
var BASE_BARE_ELEM = null, BASE_INTERNAL_ELEM = null, itemAnimation;
function $clinit_448(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_448;
  $location_0[stackIndex] = 'Tree.java:' + '965' , $clinit_448 = nullMethod;
  $clinit_447();
  $stackDepth_0 = stackIndex - 1;
}

function $Tree$1(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $Tree$1;
  $location_0[stackIndex] = 'Tree.java:' + '965' , $clinit_448();
  this$static.this$0 = this$0;
  $TreeItem(this$static);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $addItem_3(this$static, item){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $addItem_3;
  (!!item.parent_0 || !!item.tree) && ($location_0[stackIndex] = 'Tree.java:' + '970' , $remove_10(item));
  $location_0[stackIndex] = 'Node.java:' + '72' , this$static.this$0.element.appendChild(item.element);
  $location_0[stackIndex] = 'Tree.java:' + '974' , $setTree(item, this$static.tree);
  $location_0[stackIndex] = 'TreeItem.java:' + '722' , item.parent_0 = null;
  $location_0[stackIndex] = 'Tree.java:' + '978' , $add_7(this$static.children, item);
  $location_0[stackIndex] = 'Tree.java:' + '981' , $clinit_223();
  $location_0[stackIndex] = 'Style.java:' + '1449' , item.element.style['marginLeft'] = '0';
  $stackDepth_0 = stackIndex - 1;
}

function $removeItem_0(this$static, item){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $removeItem_0;
  if (($location_0[stackIndex] = 'ArrayList.java:' + '163' , $indexOf_0(this$static.children, item, 0)) == -1) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  $location_0[stackIndex] = 'Tree.java:' + '995' , $setTree(item, null);
  $location_0[stackIndex] = 'TreeItem.java:' + '722' , item.parent_0 = null;
  $location_0[stackIndex] = 'Tree.java:' + '997' , $remove_8(this$static.children, item);
  $location_0[stackIndex] = 'Node.java:' + '285' , this$static.this$0.element.removeChild(item.element);
  $stackDepth_0 = stackIndex - 1;
}

function addItem_0(item){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = addItem_0;
  $location_0[stackIndex] = 'Tree.java:' + '967' , $addItem_3(this, item);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_260(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_260;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_user_client_ui_Tree$1_2_classLit;
}

function removeItem_0(item){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = removeItem_0;
  $location_0[stackIndex] = 'Tree.java:' + '989' , $removeItem_0(this, item);
  $stackDepth_0 = stackIndex - 1;
}

function Tree$1(){
}

_ = Tree$1.prototype = new TreeItem;
_.addItem = addItem_0;
_.getClass$ = getClass_260;
_.removeItem = removeItem_0;
_.typeId$ = 148;
_.this$0 = null;
function $Tree$ImageAdapter(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $Tree$ImageAdapter;
  this$static.treeClosed = ($location_0[stackIndex] = 'Tree.java:' + '132' , create_1((!treeClosed && (treeClosed = $ImageResourcePrototype(($location_0[stackIndex] = 'com_google_gwt_user_client_ui_Tree_Resources_default_InlineClientBundleGenerator.java:' + '9' , new ImageResourcePrototype), 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAqklEQVR42mNgGAVYQVbl9v9h6WsxcHbVjv8ENScXbf6/7+iD/79+/fmPDP78/fd/9eZr/xMLN+E3JCJj3f/PX77DMQPDGTj72/cfQJesw29AONCAt+8+wjHIAGQ+UQY8ffYKrBEdg8RBYUGUATAM0wjDhA0AOvHOvUfkGxCXt+H/zEXH/p+/ePP/5au34fjshZv/J84+/B8kTzAqU0s3Y00HKcWb/w/DZA8Agl3oOCRuvDUAAAAASUVORK5CYII=', 0, 0, 16, 16)) , treeClosed)));
  this$static.treeLeaf = ($location_0[stackIndex] = 'Tree.java:' + '133' , create_1((!treeLeaf && (treeLeaf = $ImageResourcePrototype(($location_0[stackIndex] = 'com_google_gwt_user_client_ui_Tree_Resources_default_InlineClientBundleGenerator.java:' + '19' , new ImageResourcePrototype), 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAEklEQVR42mNgGAWjYBSMAggAAAQQAAGvRYgsAAAAAElFTkSuQmCC', 0, 0, 16, 16)) , treeLeaf)));
  this$static.treeOpen = ($location_0[stackIndex] = 'Tree.java:' + '134' , create_1((!treeOpen && (treeOpen = $ImageResourcePrototype(($location_0[stackIndex] = 'com_google_gwt_user_client_ui_Tree_Resources_default_InlineClientBundleGenerator.java:' + '29' , new ImageResourcePrototype), 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAp0lEQVR42mNgGAVYQVbl9v9h6WsxcHbVjv8ENScXbf6/7+iD/79+/fmPDP78/fd/9eZr/xMLN+E3JCJj3f/PX77D8dt3H+Hsb99/AF2yDr8B4UADQJpwYaIMePrsFVDRGQwMEgeFBVEGwDDIVmQ+YQOATrxz7xH5BsTlbfg/c9Gx/+cv3vx/+eptOD574eb/ibMP/wfJE4zK1NLNWNNBSvHm/8Mw2QMAtl7wOMv7lGEAAAAASUVORK5CYII=', 0, 0, 16, 16)) , treeOpen)));
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_261(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_261;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_user_client_ui_Tree$ImageAdapter_2_classLit;
}

function Tree$ImageAdapter(){
}

_ = Tree$ImageAdapter.prototype = new Object_0;
_.getClass$ = getClass_261;
_.typeId$ = 0;
_.treeClosed = null;
_.treeLeaf = null;
_.treeOpen = null;
function $onUpdate_0(this$static, progress){
  var height, scrollWidth, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $onUpdate_0;
  $location_0[stackIndex] = 'TreeItem.java:' + '193' , height = ~~Math.max(($location_0[stackIndex] = 'Cast.java:' + '185' , Math.min(progress * this$static.scrollHeight_0, 2147483647)), -2147483648);
  !this$static.opening && ($location_0[stackIndex] = 'TreeItem.java:' + '195' , height = this$static.scrollHeight_0 - height);
  $location_0[stackIndex] = 'TreeItem.java:' + '200' , height = height > 1?height:1;
  $location_0[stackIndex] = 'Style.java:' + '1449' , this$static.curItem.childSpanElem.style['height'] = height + 'px';
  $location_0[stackIndex] = 'TreeItem.java:' + '205' , scrollWidth = parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , this$static.curItem.childSpanElem['scrollWidth'])) || 0;
  $location_0[stackIndex] = 'Style.java:' + '1449' , this$static.curItem.childSpanElem.style['width'] = scrollWidth + 'px';
  $stackDepth_0 = stackIndex - 1;
}

function $setItemState(this$static, item, animate){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setItemState;
  $location_0[stackIndex] = 'TreeItem.java:' + '137' , $cancel(this$static);
  if (animate) {
    $location_0[stackIndex] = 'TreeItem.java:' + '141' , this$static.curItem = item;
    $location_0[stackIndex] = 'TreeItem.java:' + '142' , this$static.opening = item.open_0;
    $location_0[stackIndex] = 'Animation.java:' + '113' , $run(this$static, ($location_0[stackIndex] = 'TreeItem.java:' + '143' , min_1(200, 75 * ($location_0[stackIndex] = 'TreeItem.java:' + '144' , $getChildCount_0(this$static.curItem)))), ($location_0[stackIndex] = 'Duration.java:' + '29' , new Date).getTime());
  }
   else {
    $location_0[stackIndex] = 'UIObject.java:' + '214' , item.childSpanElem.style.display = item.open_0?'':'none';
  }
  $stackDepth_0 = stackIndex - 1;
}

function getClass_262(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_262;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_user_client_ui_TreeItem$TreeItemAnimation_2_classLit;
}

function onComplete_1(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onComplete_1;
  if (this.curItem) {
    if (this.opening) {
      $location_0[stackIndex] = 'UIObject.java:' + '214' , this.curItem.childSpanElem.style.display = '';
      $location_0[stackIndex] = 'TreeItem.java:' + '155' , $onUpdate_0(this, 1);
      $location_0[stackIndex] = 'Style.java:' + '1449' , this.curItem.childSpanElem.style['height'] = 'auto';
    }
     else {
      $location_0[stackIndex] = 'UIObject.java:' + '214' , this.curItem.childSpanElem.style.display = 'none';
    }
    $location_0[stackIndex] = 'Style.java:' + '1449' , this.curItem.childSpanElem.style['overflow'] = 'visible';
    this.curItem.childSpanElem.style['width'] = 'auto';
    $location_0[stackIndex] = 'TreeItem.java:' + '162' , this.curItem = null;
  }
  $stackDepth_0 = stackIndex - 1;
}

function onStart_1(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onStart_1;
  $location_0[stackIndex] = 'TreeItem.java:' + '168' , this.scrollHeight_0 = 0;
  !this.opening && ($location_0[stackIndex] = 'TreeItem.java:' + '173' , this.scrollHeight_0 = this.curItem.childSpanElem.scrollHeight || 0);
  $location_0[stackIndex] = 'Style.java:' + '1449' , this.curItem.childSpanElem.style['overflow'] = 'hidden';
  $location_0[stackIndex] = 'Animation.java:' + '195' , $onUpdate_0(this, (1 + ($location_0[stackIndex] = 'Math.java:' + '83' , Math.cos(3.141592653589793))) / 2);
  if (this.opening) {
    $location_0[stackIndex] = 'UIObject.java:' + '214' , this.curItem.childSpanElem.style.display = '';
    $location_0[stackIndex] = 'TreeItem.java:' + '187' , this.scrollHeight_0 = this.curItem.childSpanElem.scrollHeight || 0;
  }
  $stackDepth_0 = stackIndex - 1;
}

function onUpdate_0(progress){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onUpdate_0;
  $location_0[stackIndex] = 'TreeItem.java:' + '192' , $onUpdate_0(this, progress);
  $stackDepth_0 = stackIndex - 1;
}

function TreeItem$TreeItemAnimation(){
}

_ = TreeItem$TreeItemAnimation.prototype = new Animation;
_.getClass$ = getClass_262;
_.onComplete = onComplete_1;
_.onStart = onStart_1;
_.onUpdate = onUpdate_0;
_.typeId$ = 149;
_.curItem = null;
_.opening = true;
_.scrollHeight_0 = 0;
function $convertToFullNode(item){
  var itemTable, tdContent, tdImg, tr, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $convertToFullNode;
  if (!item.imageHolder) {
    $location_0[stackIndex] = 'TreeItem.java:' + '51' , itemTable = ($location_0[stackIndex] = 'Node.java:' + '94' , ($location_0[stackIndex] = 'TreeItem.java:' + '239' , $clinit_447() , BASE_INTERNAL_ELEM).cloneNode(true));
    $location_0[stackIndex] = 'Node.java:' + '72' , item.element.appendChild(itemTable);
    tr = ($location_0[stackIndex] = 'TreeItem.java:' + '53' , getFirstChild($getFirstChildElement_0(($location_0[stackIndex] = 'Element.java:' + '241' , $clinit_81() , itemTable))));
    $location_0[stackIndex] = 'TreeItem.java:' + '54' , tdImg = ($location_0[stackIndex] = 'Element.java:' + '241' , $getFirstChildElement_0(tr));
    $location_0[stackIndex] = 'TreeItem.java:' + '55' , tdContent = tdImg.nextSibling;
    $location_0[stackIndex] = 'Style.java:' + '1449' , item.element.style['padding'] = '0px';
    $location_0[stackIndex] = 'Node.java:' + '72' , tdContent.appendChild(item.contentElem);
    $location_0[stackIndex] = 'TreeItem.java:' + '60' , item.imageHolder = tdImg;
  }
  $stackDepth_0 = stackIndex - 1;
}

function copyWidgetArray(widgets){
  var clone, i, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = copyWidgetArray;
  clone = ($location_0[stackIndex] = 'WidgetIterators.java:' + '29' , initDim(_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, 667, 2, widgets.length, 0));
  for ($location_0[stackIndex] = 'WidgetIterators.java:' + '30' , i = 0; i < widgets.length; $location_0[stackIndex] = 'WidgetIterators.java:' + '30' , ++i) {
    setCheck(clone, i, ($location_0[stackIndex] = 'WidgetIterators.java:' + '31' , widgets[i]));
  }
  $stackDepth_0 = stackIndex - 1;
  return clone;
}

function $WidgetIterators$1(this$static, val$contained, val$container){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $WidgetIterators$1;
  $location_0[stackIndex] = 'WidgetIterators.java:' + '47' , this$static.val$contained = val$contained;
  this$static.val$container = val$container;
  $location_0[stackIndex] = 'WidgetIterators.java:' + '50' , this$static.widgets = this$static.val$contained;
  $location_0[stackIndex] = 'WidgetIterators.java:' + '53' , $gotoNextIndex(this$static);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $gotoNextIndex(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $gotoNextIndex;
  $location_0[stackIndex] = 'WidgetIterators.java:' + '57' , ++this$static.index_0;
  while (this$static.index_0 < this$static.val$contained.length) {
    if ($location_0[stackIndex] = 'WidgetIterators.java:' + '59' , this$static.val$contained[this$static.index_0]) {
      $stackDepth_0 = stackIndex - 1;
      return;
    }
    $location_0[stackIndex] = 'WidgetIterators.java:' + '62' , ++this$static.index_0;
  }
  $stackDepth_0 = stackIndex - 1;
}

function $next_4(this$static){
  var w, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $next_4;
  if (this$static.index_0 >= this$static.val$contained.length) {
    throw $NoSuchElementException(($location_0[stackIndex] = 'WidgetIterators.java:' + '72' , new NoSuchElementException));
  }
  $location_0[stackIndex] = 'WidgetIterators.java:' + '74' , this$static.last = this$static.index_0;
  w = ($location_0[stackIndex] = 'WidgetIterators.java:' + '75' , this$static.val$contained[this$static.index_0]);
  $location_0[stackIndex] = 'WidgetIterators.java:' + '76' , $gotoNextIndex(this$static);
  $stackDepth_0 = stackIndex - 1;
  return w;
}

function getClass_266(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_266;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_user_client_ui_WidgetIterators$1_2_classLit;
}

function hasNext_3(){
  var returnTemp, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = hasNext_3;
  returnTemp = this.index_0 < this.val$contained.length;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function next_4(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = next_4;
  returnTemp = ($location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , $next_4(this));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function remove_14(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = remove_14;
  if (this.last < 0) {
    throw $IllegalStateException(($location_0[stackIndex] = 'WidgetIterators.java:' + '82' , new IllegalStateException));
  }
  if (!this.widgetsWasCopied) {
    this.widgets = ($location_0[stackIndex] = 'WidgetIterators.java:' + '86' , copyWidgetArray(this.widgets));
    $location_0[stackIndex] = 'WidgetIterators.java:' + '87' , this.widgetsWasCopied = true;
  }
  $remove_9(this.val$container, ($location_0[stackIndex] = 'WidgetIterators.java:' + '90' , this.val$contained[this.last]));
  $location_0[stackIndex] = 'WidgetIterators.java:' + '91' , this.last = -1;
  $stackDepth_0 = stackIndex - 1;
}

function WidgetIterators$1(){
}

_ = WidgetIterators$1.prototype = new Object_0;
_.getClass$ = getClass_266;
_.hasNext = hasNext_3;
_.next_0 = next_4;
_.remove = remove_14;
_.typeId$ = 0;
_.index_0 = -1;
_.last = -1;
_.val$contained = null;
_.val$container = null;
_.widgetsWasCopied = false;
var menuBarSubMenuIcon = null;
var treeClosed = null, treeLeaf = null, treeOpen = null;
function $adjust(img, url, left, top_0, width, height){
  var style, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $adjust;
  $location_0[stackIndex] = 'ClippedImageImpl.java:' + '37' , style = 'url(' + url + ') no-repeat ' + -left + 'px ' + -top_0 + 'px';
  $location_0[stackIndex] = 'Style.java:' + '1449' , img.style['background'] = style;
  $location_0[stackIndex] = 'Style.java:' + '1449' , img.style['width'] = width + ($location_0[stackIndex] = 'Style.java:' + '1369' , $clinit_106() , 'px');
  img.style['height'] = height + 'px';
  $stackDepth_0 = stackIndex - 1;
}

function $ClippedImageImpl$1(this$static, val$image){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ClippedImageImpl$1;
  $location_0[stackIndex] = 'ClippedImageImpl.java:' + '76' , this$static.val$image = val$image;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function execute_10(){
  var evt, evt_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = execute_10;
  $location_0[stackIndex] = 'ClippedImageImpl.java:' + '78' , evt = (evt_0 = ($location_0[stackIndex] = 'DOMImplStandard.java:' + '28' , ($location_0[stackIndex] = 'Document.java:' + '399' , $clinit_81() , $doc).createEvent('HTMLEvents')) , ($location_0[stackIndex] = 'DOMImplStandard.java:' + '29' , evt_0.initEvent('load', false, false)) , evt_0);
  $location_0[stackIndex] = 'DOMImplStandard.java:' + '79' , this.val$image.element.dispatchEvent(evt);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_267(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_267;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_user_client_ui_impl_ClippedImageImpl$1_2_classLit;
}

function ClippedImageImpl$1(){
}

_ = ClippedImageImpl$1.prototype = new Object_0;
_.execute = execute_10;
_.getClass$ = getClass_267;
_.typeId$ = 151;
_.val$image = null;
function $getHTML_0(this$static){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getHTML_0;
  returnTemp = ($location_0[stackIndex] = 'ClippedImagePrototype.java:' + '68' , $getHTML(this$static.url, this$static.left, this$static.top_0, this$static.width_0, this$static.height_0));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function compareTo_0(p0){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = compareTo_0;
  returnTemp = this.value_0 == ($location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , dynamicCast(p0, 75)).value_0?0:this.value_0?1:-1;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

_ = Boolean_0.prototype;
_.compareTo$ = compareTo_0;
function $compareTo_1(this$static, b){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $compareTo_1;
  if (this$static.value_0 < b.value_0) {
    $stackDepth_0 = stackIndex - 1;
    return -1;
  }
   else if (this$static.value_0 > b.value_0) {
    $stackDepth_0 = stackIndex - 1;
    return 1;
  }
   else {
    $stackDepth_0 = stackIndex - 1;
    return 0;
  }
  $stackDepth_0 = stackIndex - 1;
}

function compareTo_1(p0){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = compareTo_1;
  returnTemp = $compareTo_1(this, ($location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , dynamicCast(p0, 76)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

_ = Byte.prototype;
_.compareTo$ = compareTo_1;
function compareTo_2(p0){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = compareTo_2;
  returnTemp = this.value_0 - ($location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , dynamicCast(p0, 78)).value_0;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

_ = Character.prototype;
_.compareTo$ = compareTo_2;
function $compareTo_3(this$static, b){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $compareTo_3;
  if (this$static.value_0 < b.value_0) {
    $stackDepth_0 = stackIndex - 1;
    return -1;
  }
   else if (this$static.value_0 > b.value_0) {
    $stackDepth_0 = stackIndex - 1;
    return 1;
  }
   else {
    $stackDepth_0 = stackIndex - 1;
    return 0;
  }
  $stackDepth_0 = stackIndex - 1;
}

function compareTo_3(p0){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = compareTo_3;
  returnTemp = $compareTo_3(this, ($location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , dynamicCast(p0, 80)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

_ = Double.prototype;
_.compareTo$ = compareTo_3;
function $compareTo_4(this$static, b){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $compareTo_4;
  if (this$static.value_0 < b.value_0) {
    $stackDepth_0 = stackIndex - 1;
    return -1;
  }
   else if (this$static.value_0 > b.value_0) {
    $stackDepth_0 = stackIndex - 1;
    return 1;
  }
   else {
    $stackDepth_0 = stackIndex - 1;
    return 0;
  }
  $stackDepth_0 = stackIndex - 1;
}

function compareTo_4(p0){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = compareTo_4;
  returnTemp = $compareTo_4(this, ($location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , dynamicCast(p0, 169)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

_ = Float.prototype;
_.compareTo$ = compareTo_4;
function $compareTo_5(this$static, b){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $compareTo_5;
  if (this$static.value_0 < b.value_0) {
    $stackDepth_0 = stackIndex - 1;
    return -1;
  }
   else if (this$static.value_0 > b.value_0) {
    $stackDepth_0 = stackIndex - 1;
    return 1;
  }
   else {
    $stackDepth_0 = stackIndex - 1;
    return 0;
  }
  $stackDepth_0 = stackIndex - 1;
}

function compareTo_5(p0){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = compareTo_5;
  returnTemp = $compareTo_5(this, ($location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , dynamicCast(p0, 82)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

_ = Integer.prototype;
_.compareTo$ = compareTo_5;
function $compareTo_6(this$static, b){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $compareTo_6;
  if (($location_0[stackIndex] = 'LongLib.java:' + '260' , compare_0(this$static.value_0, b.value_0)) < 0) {
    $stackDepth_0 = stackIndex - 1;
    return -1;
  }
   else if (($location_0[stackIndex] = 'LongLib.java:' + '252' , compare_0(this$static.value_0, b.value_0)) > 0) {
    $stackDepth_0 = stackIndex - 1;
    return 1;
  }
   else {
    $stackDepth_0 = stackIndex - 1;
    return 0;
  }
  $stackDepth_0 = stackIndex - 1;
}

function compareTo_6(p0){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = compareTo_6;
  returnTemp = $compareTo_6(this, ($location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , dynamicCast(p0, 83)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function hexDigit(c, s){
  var val = ($location_0[stackIndex] = 'Long.java:' + '273' , ($location_0[stackIndex] = 'Long.java:' + '35' , $clinit_529() , hexLookup)[c]), stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = hexDigit;
  if (val == null) {
    throw $NumberFormatException(($location_0[stackIndex] = 'NumberFormatException.java:' + '26' , new NumberFormatException), 'For input string: "' + s + '"');
  }
  $stackDepth_0 = stackIndex - 1;
  return val;
}

function parseHex(s){
  var i, len, result, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = parseHex;
  $location_0[stackIndex] = 'Long.java:' + '282' , len = s.length;
  if (len > 16) {
    throw $NumberFormatException(($location_0[stackIndex] = 'NumberFormatException.java:' + '26' , new NumberFormatException), 'For input string: "' + s + '"');
  }
  $location_0[stackIndex] = 'Long.java:' + '286' , result = P0_longLit;
  for ($location_0[stackIndex] = 'Long.java:' + '287' , i = 0; i < len; $location_0[stackIndex] = 'Long.java:' + '287' , ++i) {
    result = ($location_0[stackIndex] = 'Long.java:' + '288' , shl(result, 4));
    result = add_1(result, fromInt(($location_0[stackIndex] = 'Long.java:' + '289' , hexDigit(($location_0[stackIndex] = 'String.java:' + '419' , s.charCodeAt(i)), s))));
  }
  $stackDepth_0 = stackIndex - 1;
  return result;
}

function parseLong(orig, intRadix){
  var c, i, len, neg, radix, result, s, value, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = parseLong;
  if (orig == null) {
    throw $NumberFormatException(($location_0[stackIndex] = 'Long.java:' + '110' , new NumberFormatException), 'null');
  }
  if (orig.length == 0) {
    throw $NumberFormatException(($location_0[stackIndex] = 'NumberFormatException.java:' + '26' , new NumberFormatException), 'For input string: "' + orig + '"');
  }
  if (intRadix < 2 || intRadix > 36) {
    throw $NumberFormatException(($location_0[stackIndex] = 'Long.java:' + '117' , new NumberFormatException), 'radix ' + intRadix + ' out of range');
  }
  $location_0[stackIndex] = 'Long.java:' + '120' , neg = false;
  if (($location_0[stackIndex] = 'String.java:' + '419' , orig.charCodeAt(0)) == 45) {
    $location_0[stackIndex] = 'Long.java:' + '123' , neg = true;
    $location_0[stackIndex] = 'Long.java:' + '124' , s = ($location_0[stackIndex] = 'String.java:' + '714' , orig.substr(1, orig.length - 1));
    if ($location_0[stackIndex] = 'Long.java:' + '125' , $equals_4(s, '')) {
      throw $NumberFormatException(($location_0[stackIndex] = 'NumberFormatException.java:' + '26' , new NumberFormatException), 'For input string: "' + orig + '"');
    }
  }
   else {
    $location_0[stackIndex] = 'Long.java:' + '129' , s = orig;
  }
  $location_0[stackIndex] = 'Long.java:' + '132' , result = P0_longLit;
  if (intRadix == 16) {
    result = ($location_0[stackIndex] = 'Long.java:' + '134' , parseHex(s));
  }
   else {
    radix = ($location_0[stackIndex] = 'Long.java:' + '137' , fromInt(intRadix));
    for ($location_0[stackIndex] = 'Long.java:' + '138' , i = 0 , len = s.length; i < len; $location_0[stackIndex] = 'Long.java:' + '138' , ++i) {
      if (($location_0[stackIndex] = 'LongLib.java:' + '260' , compare_0(result, P0_longLit)) < 0) {
        throw $NumberFormatException(($location_0[stackIndex] = 'NumberFormatException.java:' + '26' , new NumberFormatException), 'For input string: "' + s + '"');
      }
      result = ($location_0[stackIndex] = 'Long.java:' + '142' , mul(result, radix));
      $location_0[stackIndex] = 'Long.java:' + '143' , c = ($location_0[stackIndex] = 'String.java:' + '419' , s.charCodeAt(i));
      value = ($location_0[stackIndex] = 'Long.java:' + '144' , digit(c, intRadix));
      if (value < 0) {
        throw $NumberFormatException(($location_0[stackIndex] = 'NumberFormatException.java:' + '26' , new NumberFormatException), 'For input string: "' + s + '"');
      }
      result = add_1(result, ($location_0[stackIndex] = 'Long.java:' + '148' , fromInt(value)));
    }
  }
  if (($location_0[stackIndex] = 'LongLib.java:' + '260' , compare_0(result, P0_longLit)) < 0 && ($location_0[stackIndex] = 'Long.java:' + '152' , neq(result, N8000000000000000_longLit))) {
    throw $NumberFormatException(($location_0[stackIndex] = 'NumberFormatException.java:' + '26' , new NumberFormatException), 'For input string: "' + s + '"');
  }
  if (neg) {
    returnTemp = ($location_0[stackIndex] = 'Long.java:' + '156' , neg_0(result));
    $stackDepth_0 = stackIndex - 1;
    return returnTemp;
  }
   else {
    $stackDepth_0 = stackIndex - 1;
    return result;
  }
  $stackDepth_0 = stackIndex - 1;
}

_ = Long.prototype;
_.compareTo$ = compareTo_6;
function $clinit_529(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_529;
  $location_0[stackIndex] = 'Long.java:' + '31' , $clinit_529 = nullMethod;
  var c;
  hexLookup = ($location_0[stackIndex] = 'Long.java:' + '35' , initDim(_3I_classLit, 669, -1, 0, 1));
  for ($location_0[stackIndex] = 'Long.java:' + '38' , c = 48; c <= 57; $location_0[stackIndex] = 'Long.java:' + '38' , ++c) {
    $location_0[stackIndex] = 'Long.java:' + '39' , hexLookup[c] = c - 48;
  }
  for ($location_0[stackIndex] = 'Long.java:' + '41' , c = 65; c <= 70; $location_0[stackIndex] = 'Long.java:' + '41' , ++c) {
    $location_0[stackIndex] = 'Long.java:' + '42' , hexLookup[c] = c - 65 + 10;
  }
  for ($location_0[stackIndex] = 'Long.java:' + '44' , c = 97; c <= 102; $location_0[stackIndex] = 'Long.java:' + '44' , ++c) {
    $location_0[stackIndex] = 'Long.java:' + '45' , hexLookup[c] = c - 97 + 10;
  }
  $stackDepth_0 = stackIndex - 1;
}

var hexLookup;
function $compareTo_7(this$static, b){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $compareTo_7;
  if (this$static.value_0 < b.value_0) {
    $stackDepth_0 = stackIndex - 1;
    return -1;
  }
   else if (this$static.value_0 > b.value_0) {
    $stackDepth_0 = stackIndex - 1;
    return 1;
  }
   else {
    $stackDepth_0 = stackIndex - 1;
    return 0;
  }
  $stackDepth_0 = stackIndex - 1;
}

function compareTo_7(p0){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = compareTo_7;
  returnTemp = $compareTo_7(this, ($location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , dynamicCast(p0, 85)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

_ = Short.prototype;
_.compareTo$ = compareTo_7;
function $replace_0(this$static, from, to){
  var regex, replacement, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $replace_0;
  regex = ($location_0[stackIndex] = 'String.java:' + '590' , $replaceAll(from, '([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])', '\\\\$1'));
  replacement = $replaceAll(($location_0[stackIndex] = 'String.java:' + '593' , $replaceAll(to, '\\\\', '\\\\\\\\')), '\\$', '\\\\$');
  returnTemp = ($location_0[stackIndex] = 'String.java:' + '595' , $replaceAll(this$static, regex, replacement));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function compareTo_8(thisStr, otherStr){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = compareTo_8;
  thisStr = ($location_0[stackIndex] = 'String.java:' + '340' , String(thisStr));
  if (thisStr == otherStr) {
    $stackDepth_0 = stackIndex - 1;
    return 0;
  }
  $stackDepth_0 = stackIndex - 1;
  return thisStr < otherStr?-1:1;
}

function compareTo_9(p0){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = compareTo_9;
  returnTemp = ($location_0[stackIndex] = 'String.java:' + '435' , compareTo_8(this, ($location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , dynamicCast(p0, 1))));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

_ = String.prototype;
_.compareTo$ = compareTo_9;
function $Date_0(this$static, year, month, date, hrs, min, sec){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $Date_0;
  $location_0[stackIndex] = 'Date.java:' + '127' , $clinit_544();
  this$static.jsdate = ($location_0[stackIndex] = 'Date.java:' + '387' , new Date);
  $location_0[stackIndex] = 'Date.java:' + '388' , this$static.checkJsDate();
  $location_0[stackIndex] = 'Date.java:' + '389' , this$static.jsdate.setFullYear(year + 1900, month, date);
  $location_0[stackIndex] = 'Date.java:' + '390' , this$static.jsdate.setHours(hrs, min, sec, 0);
  $location_0[stackIndex] = 'Date.java:' + '393' , this$static.fixDaylightSavings(hrs);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $compareTo_8(this$static, other){
  var otherTime, thisTime, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $compareTo_8;
  $location_0[stackIndex] = 'Date.java:' + '152' , thisTime = ($location_0[stackIndex] = 'Date.java:' + '199' , fromDouble(($location_0[stackIndex] = 'Date.java:' + '373' , this$static.checkJsDate() , ($location_0[stackIndex] = 'Date.java:' + '374' , this$static.jsdate.getTime()))));
  $location_0[stackIndex] = 'Date.java:' + '153' , otherTime = ($location_0[stackIndex] = 'Date.java:' + '199' , fromDouble(($location_0[stackIndex] = 'Date.java:' + '373' , other.checkJsDate() , ($location_0[stackIndex] = 'Date.java:' + '374' , other.jsdate.getTime()))));
  if (($location_0[stackIndex] = 'LongLib.java:' + '260' , compare_0(thisTime, otherTime)) < 0) {
    $stackDepth_0 = stackIndex - 1;
    return -1;
  }
   else if (($location_0[stackIndex] = 'LongLib.java:' + '252' , compare_0(thisTime, otherTime)) > 0) {
    $stackDepth_0 = stackIndex - 1;
    return 1;
  }
   else {
    $stackDepth_0 = stackIndex - 1;
    return 0;
  }
  $stackDepth_0 = stackIndex - 1;
}

function $setDate(this$static, date){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setDate;
  $location_0[stackIndex] = 'Date.java:' + '218' , this$static.checkJsDate();
  var hours = ($location_0[stackIndex] = 'Date.java:' + '219' , this$static.jsdate.getHours());
  $location_0[stackIndex] = 'Date.java:' + '220' , this$static.jsdate.setDate(date);
  $location_0[stackIndex] = 'Date.java:' + '221' , this$static.fixDaylightSavings(hours);
  $stackDepth_0 = stackIndex - 1;
}

function $setMonth(this$static, month){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setMonth;
  $location_0[stackIndex] = 'Date.java:' + '238' , this$static.checkJsDate();
  var hours = ($location_0[stackIndex] = 'Date.java:' + '239' , this$static.jsdate.getHours());
  $location_0[stackIndex] = 'Date.java:' + '240' , this$static.jsdate.setMonth(month);
  $location_0[stackIndex] = 'Date.java:' + '241' , this$static.fixDaylightSavings(hours);
  $stackDepth_0 = stackIndex - 1;
}

function $setYear(this$static, year){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setYear;
  $location_0[stackIndex] = 'Date.java:' + '256' , this$static.checkJsDate();
  var hours = ($location_0[stackIndex] = 'Date.java:' + '257' , this$static.jsdate.getHours());
  $location_0[stackIndex] = 'Date.java:' + '258' , this$static.jsdate.setFullYear(year + 1900);
  $location_0[stackIndex] = 'Date.java:' + '259' , this$static.fixDaylightSavings(hours);
  $stackDepth_0 = stackIndex - 1;
}

function compareTo_10(p0){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = compareTo_10;
  returnTemp = $compareTo_8(this, ($location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , dynamicCast(p0, 175)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function fixDaylightSavings(hours){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = fixDaylightSavings;
  if (($location_0[stackIndex] = 'Date.java:' + '341' , this.jsdate.getHours()) % 24 != hours % 24) {
    var d = ($location_0[stackIndex] = 'Date.java:' + '345' , new Date);
    d.setTime(($location_0[stackIndex] = 'Date.java:' + '346' , this.jsdate.getTime()));
    var noff = ($location_0[stackIndex] = 'Date.java:' + '347' , d.getTimezoneOffset());
    d.setDate(($location_0[stackIndex] = 'Date.java:' + '348' , d.getDate()) + 1);
    var loff = ($location_0[stackIndex] = 'Date.java:' + '349' , d.getTimezoneOffset());
    var timeDiff = noff - loff;
    if (timeDiff > 0) {
      var year = ($location_0[stackIndex] = 'Date.java:' + '355' , this.jsdate.getYear()) + 1900;
      var month = ($location_0[stackIndex] = 'Date.java:' + '356' , this.jsdate.getMonth());
      var day = ($location_0[stackIndex] = 'Date.java:' + '357' , this.jsdate.getDate());
      var badHours = ($location_0[stackIndex] = 'Date.java:' + '358' , this.jsdate.getHours());
      var minute = ($location_0[stackIndex] = 'Date.java:' + '359' , this.jsdate.getMinutes());
      var second = ($location_0[stackIndex] = 'Date.java:' + '360' , this.jsdate.getSeconds());
      badHours + timeDiff / 60 >= 24 && ($location_0[stackIndex] = 'Date.java:' + '362' , day++);
      var newTime = ($location_0[stackIndex] = 'Date.java:' + '364' , new Date(year, month, day, hours + timeDiff / 60, minute + timeDiff % 60, second));
      this.jsdate.setTime(($location_0[stackIndex] = 'Date.java:' + '367' , newTime.getTime()));
    }
  }
  $stackDepth_0 = stackIndex - 1;
}

function setHours(hours){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = setHours;
  $location_0[stackIndex] = 'Date.java:' + '225' , this.checkJsDate();
  $location_0[stackIndex] = 'Date.java:' + '226' , this.jsdate.setHours(hours);
  $location_0[stackIndex] = 'Date.java:' + '227' , this.fixDaylightSavings(hours);
  $stackDepth_0 = stackIndex - 1;
}

function setMinutes(minutes){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = setMinutes;
  $location_0[stackIndex] = 'Date.java:' + '231' , this.checkJsDate();
  var hours = ($location_0[stackIndex] = 'Date.java:' + '232' , this.jsdate.getHours()) + minutes / 60;
  $location_0[stackIndex] = 'Date.java:' + '233' , this.jsdate.setMinutes(minutes);
  $location_0[stackIndex] = 'Date.java:' + '234' , this.fixDaylightSavings(hours);
  $stackDepth_0 = stackIndex - 1;
}

function setSeconds(seconds){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = setSeconds;
  $location_0[stackIndex] = 'Date.java:' + '245' , this.checkJsDate();
  var hours = ($location_0[stackIndex] = 'Date.java:' + '246' , this.jsdate.getHours()) + seconds / (60 * 60);
  $location_0[stackIndex] = 'Date.java:' + '247' , this.jsdate.setSeconds(seconds);
  $location_0[stackIndex] = 'Date.java:' + '248' , this.fixDaylightSavings(hours);
  $stackDepth_0 = stackIndex - 1;
}

_ = Date_1.prototype;
_.compareTo$ = compareTo_10;
_.fixDaylightSavings = fixDaylightSavings;
_.setHours_0 = setHours;
_.setMinutes_0 = setMinutes;
_.setSeconds_0 = setSeconds;
function setHours_0(i){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = setHours_0;
  throw $IllegalArgumentException(($location_0[stackIndex] = 'Date.java:' + '73' , new IllegalArgumentException));
}

function setMinutes_0(i){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = setMinutes_0;
  throw $IllegalArgumentException(($location_0[stackIndex] = 'Date.java:' + '79' , new IllegalArgumentException));
}

function setSeconds_0(i){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = setSeconds_0;
  throw $IllegalArgumentException(($location_0[stackIndex] = 'Date.java:' + '85' , new IllegalArgumentException));
}

_ = Date_0.prototype;
_.setHours_0 = setHours_0;
_.setMinutes_0 = setMinutes_0;
_.setSeconds_0 = setSeconds_0;
function insertionSort(array, low, high, comp){
  var i, j, t, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = insertionSort;
  for ($location_0[stackIndex] = 'Arrays.java:' + '1249' , i = low + 1; i < high; $location_0[stackIndex] = 'Arrays.java:' + '1249' , ++i) {
    for ($location_0[stackIndex] = 'Arrays.java:' + '1250' , j = i; j > low && comp.compare(($location_0[stackIndex] = 'Arrays.java:' + '1250' , array[j - 1]), array[j]) > 0; $location_0[stackIndex] = 'Arrays.java:' + '1250' , --j) {
      t = ($location_0[stackIndex] = 'Arrays.java:' + '1251' , array[j]);
      setCheck(array, j, ($location_0[stackIndex] = 'Arrays.java:' + '1252' , array[j - 1]));
      $location_0[stackIndex] = 'Arrays.java:' + '1253' , setCheck(array, j - 1, t);
    }
  }
  $stackDepth_0 = stackIndex - 1;
}

function merge(src, srcLow, srcMid, srcHigh, dest, destLow, destHigh, comp){
  var topIdx, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = merge;
  $location_0[stackIndex] = 'Arrays.java:' + '1275' , topIdx = srcMid;
  while (destLow < destHigh) {
    topIdx >= srcHigh || srcLow < srcMid && comp.compare(($location_0[stackIndex] = 'Arrays.java:' + '1278' , src[srcLow]), src[topIdx]) <= 0?setCheck(dest, ($location_0[stackIndex] = 'Arrays.java:' + '1279' , destLow++), src[srcLow++]):setCheck(dest, ($location_0[stackIndex] = 'Arrays.java:' + '1281' , destLow++), src[topIdx++]);
  }
  $stackDepth_0 = stackIndex - 1;
}

function mergeSort(x, fromIndex, toIndex, comp){
  var temp, a, result, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = mergeSort;
  $location_0[stackIndex] = 'Arrays.java:' + '1294' , temp = ($location_0[stackIndex] = 'Array.java:' + '96' , a = x , ($location_0[stackIndex] = 'Array.java:' + '97' , result = ($location_0[stackIndex] = 'Array.java:' + '192' , a.slice(fromIndex, toIndex))) , ($location_0[stackIndex] = 'Array.java:' + '98' , initValues(a.arrayClass$, a.typeId$, a.queryId$, result)) , result);
  $location_0[stackIndex] = 'Arrays.java:' + '1295' , mergeSort_0(temp, x, fromIndex, toIndex, -fromIndex, comp);
  $stackDepth_0 = stackIndex - 1;
}

function mergeSort_0(temp, array, low, high, ofs, comp){
  var length_0, tempHigh, tempLow, tempMid, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = mergeSort_0;
  $location_0[stackIndex] = 'Arrays.java:' + '1314' , length_0 = high - low;
  if (length_0 < 7) {
    $location_0[stackIndex] = 'Arrays.java:' + '1318' , insertionSort(array, low, high, comp);
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  $location_0[stackIndex] = 'Arrays.java:' + '1323' , tempLow = low + ofs;
  $location_0[stackIndex] = 'Arrays.java:' + '1324' , tempHigh = high + ofs;
  $location_0[stackIndex] = 'Arrays.java:' + '1325' , tempMid = tempLow + (tempHigh - tempLow >> 1);
  $location_0[stackIndex] = 'Arrays.java:' + '1326' , mergeSort_0(array, temp, tempLow, tempMid, -ofs, comp);
  $location_0[stackIndex] = 'Arrays.java:' + '1327' , mergeSort_0(array, temp, tempMid, tempHigh, -ofs, comp);
  if (comp.compare(($location_0[stackIndex] = 'Arrays.java:' + '1330' , temp[tempMid - 1]), temp[tempMid]) <= 0) {
    while (low < high) {
      setCheck(array, ($location_0[stackIndex] = 'Arrays.java:' + '1334' , low++), temp[tempLow++]);
    }
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  $location_0[stackIndex] = 'Arrays.java:' + '1340' , merge(temp, tempLow, tempMid, tempHigh, array, low, high, comp);
  $stackDepth_0 = stackIndex - 1;
}

function replaceContents(target, x){
  var i, size, previous, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = replaceContents;
  $location_0[stackIndex] = 'Collections.java:' + '892' , size = target.size_0;
  for ($location_0[stackIndex] = 'Collections.java:' + '894' , i = 0; i < size; $location_0[stackIndex] = 'Collections.java:' + '894' , ++i) {
    $location_0[stackIndex] = 'ArrayList.java:' + '196' , previous = ($location_0[stackIndex] = 'ArrayList.java:' + '157' , checkIndex(i, target.size_0) , ($location_0[stackIndex] = 'ArrayList.java:' + '158' , target.array[i]));
    $location_0[stackIndex] = 'ArrayList.java:' + '197' , setCheck(target.array, i, ($location_0[stackIndex] = 'Collections.java:' + '895' , x[i]));
  }
  $stackDepth_0 = stackIndex - 1;
}

function sort(target, c){
  var a, result, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = sort;
  $location_0[stackIndex] = 'Collections.java:' + '843' , $clinit_562();
  var x;
  $location_0[stackIndex] = 'Collections.java:' + '844' , x = ($location_0[stackIndex] = 'Array.java:' + '96' , a = target.array , ($location_0[stackIndex] = 'Array.java:' + '97' , result = ($location_0[stackIndex] = 'Array.java:' + '192' , a.slice(0, target.size_0))) , ($location_0[stackIndex] = 'Array.java:' + '98' , initValues(a.arrayClass$, a.typeId$, a.queryId$, result)) , result);
  $location_0[stackIndex] = 'Arrays.java:' + '997' , mergeSort(x, 0, x.length, c?c:($location_0[stackIndex] = 'Arrays.java:' + '997' , $clinit_573() , ($location_0[stackIndex] = 'Comparators.java:' + '32' , $clinit_573()) , NATURAL));
  $location_0[stackIndex] = 'Collections.java:' + '846' , replaceContents(target, x);
  $stackDepth_0 = stackIndex - 1;
}

function $clinit_573(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_573;
  $location_0[stackIndex] = 'Comparators.java:' + '18' , $clinit_573 = nullMethod;
  NATURAL = ($location_0[stackIndex] = 'Comparators.java:' + '32' , new Comparators$1);
  $stackDepth_0 = stackIndex - 1;
}

var NATURAL;
function compare_1(o1, o2){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = compare_1;
  returnTemp = ($location_0[stackIndex] = 'Comparators.java:' + '34' , dynamicCast(o1, 79)).compareTo$(o2);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getClass_339(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_339;
  $stackDepth_0 = stackIndex - 1;
  return Ljava_util_Comparators$1_2_classLit;
}

function Comparators$1(){
}

_ = Comparators$1.prototype = new Object_0;
_.compare = compare_1;
_.getClass$ = getClass_339;
_.typeId$ = 0;
function getClass_340(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_340;
  $stackDepth_0 = stackIndex - 1;
  return Ljava_util_EventObject_2_classLit;
}

function EventObject(){
}

_ = EventObject.prototype = new Object_0;
_.getClass$ = getClass_340;
_.typeId$ = 0;
_.source_0 = null;
function $clinit_597(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_597;
  $location_0[stackIndex] = 'TreeMap.java:' + '29' , $clinit_597 = nullMethod;
  DEFAULT_COMPARATOR = ($location_0[stackIndex] = 'TreeMap.java:' + '548' , new TreeMap$1);
  $stackDepth_0 = stackIndex - 1;
}

function $TreeMap(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $TreeMap;
  $location_0[stackIndex] = 'TreeMap.java:' + '602' , $clinit_597();
  $location_0[stackIndex] = 'TreeMap.java:' + '603' , $TreeMap_0(this$static, null);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $TreeMap_0(this$static, c){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $TreeMap_0;
  $location_0[stackIndex] = 'TreeMap.java:' + '607' , $clinit_597();
  $location_0[stackIndex] = 'TreeMap.java:' + '608' , this$static.root = null;
  !c && ($location_0[stackIndex] = 'TreeMap.java:' + '610' , c = DEFAULT_COMPARATOR);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $getEntry(this$static, key){
  var c, tree, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $getEntry;
  $location_0[stackIndex] = 'TreeMap.java:' + '813' , tree = this$static.root;
  while (tree) {
    c = ($location_0[stackIndex] = 'TreeMap.java:' + '815' , $compare_0(key, tree.key));
    if (c == 0) {
      $stackDepth_0 = stackIndex - 1;
      return tree;
    }
    c < 0?(tree = ($location_0[stackIndex] = 'TreeMap.java:' + '820' , tree.child[0])):(tree = ($location_0[stackIndex] = 'TreeMap.java:' + '822' , tree.child[1]));
  }
  $stackDepth_0 = stackIndex - 1;
  return null;
}

function $insert_3(this$static, tree, newNode, state){
  var c, childNum, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $insert_3;
  if (!tree) {
    $stackDepth_0 = stackIndex - 1;
    return newNode;
  }
   else {
    c = ($location_0[stackIndex] = 'TreeMap.java:' + '872' , $compare_0(tree.key, newNode.key));
    if (c == 0) {
      $location_0[stackIndex] = 'TreeMap.java:' + '874' , state.value_0 = tree.value_0;
      $location_0[stackIndex] = 'TreeMap.java:' + '875' , state.found = true;
      $location_0[stackIndex] = 'TreeMap.java:' + '876' , tree.value_0 = newNode.value_0;
      $stackDepth_0 = stackIndex - 1;
      return tree;
    }
    $location_0[stackIndex] = 'TreeMap.java:' + '879' , childNum = c > 0?0:1;
    tree.child[childNum] = $insert_3(this$static, ($location_0[stackIndex] = 'TreeMap.java:' + '880' , tree.child[childNum]), newNode, state);
    if ($isRed(($location_0[stackIndex] = 'TreeMap.java:' + '881' , tree.child[childNum]))) {
      if ($isRed(($location_0[stackIndex] = 'TreeMap.java:' + '882' , tree.child[1 - childNum]))) {
        $location_0[stackIndex] = 'TreeMap.java:' + '884' , tree.isRed = true;
        tree.child[0].isRed = false;
        tree.child[1].isRed = false;
      }
       else {
        $isRed(($location_0[stackIndex] = 'TreeMap.java:' + '889' , tree.child[childNum]).child[childNum])?(tree = ($location_0[stackIndex] = 'TreeMap.java:' + '890' , $rotateSingle(tree, 1 - childNum))):$isRed(($location_0[stackIndex] = 'TreeMap.java:' + '891' , tree.child[childNum]).child[1 - childNum]) && ($location_0[stackIndex] = 'TreeMap.java:' + '892' , tree = (tree.child[1 - (1 - childNum)] = ($location_0[stackIndex] = 'TreeMap.java:' + '1039' , $rotateSingle(($location_0[stackIndex] = 'TreeMap.java:' + '1040' , tree.child[1 - (1 - childNum)]), 1 - (1 - childNum))) , ($location_0[stackIndex] = 'TreeMap.java:' + '1041' , $rotateSingle(tree, 1 - childNum))));
      }
    }
  }
  $stackDepth_0 = stackIndex - 1;
  return tree;
}

function $isRed(node){
  var returnTemp, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $isRed;
  returnTemp = !!node && node.isRed;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $put_1(this$static, key, value){
  var node, state, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $put_1;
  node = $TreeMap$Node(($location_0[stackIndex] = 'TreeMap.java:' + '678' , new TreeMap$Node), key, value);
  state = ($location_0[stackIndex] = 'TreeMap.java:' + '679' , new TreeMap$State);
  this$static.root = ($location_0[stackIndex] = 'TreeMap.java:' + '680' , $insert_3(this$static, this$static.root, node, state));
  !state.found && ($location_0[stackIndex] = 'TreeMap.java:' + '682' , ++this$static.size_0);
  $location_0[stackIndex] = 'TreeMap.java:' + '684' , this$static.root.isRed = false;
  returnTemp = state.value_0;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $remove_20(this$static, keyObj){
  var key, state, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $remove_20;
  $location_0[stackIndex] = 'TreeMap.java:' + '691' , key = keyObj;
  state = ($location_0[stackIndex] = 'TreeMap.java:' + '692' , new TreeMap$State);
  $location_0[stackIndex] = 'TreeMap.java:' + '693' , $removeWithState(this$static, key, state);
  returnTemp = state.value_0;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $removeWithState(this$static, key, state){
  var c, dir, dir2, found, grandparent, head, last, newNode, node, parent_0, sibling, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $removeWithState;
  if (!this$static.root) {
    $stackDepth_0 = stackIndex - 1;
    return false;
  }
  $location_0[stackIndex] = 'TreeMap.java:' + '920' , found = null;
  $location_0[stackIndex] = 'TreeMap.java:' + '921' , parent_0 = null;
  $location_0[stackIndex] = 'TreeMap.java:' + '922' , grandparent = null;
  head = $TreeMap$Node(($location_0[stackIndex] = 'TreeMap.java:' + '925' , new TreeMap$Node), null, null);
  $location_0[stackIndex] = 'TreeMap.java:' + '926' , dir = 1;
  $location_0[stackIndex] = 'TreeMap.java:' + '927' , head.child[1] = this$static.root;
  $location_0[stackIndex] = 'TreeMap.java:' + '929' , node = head;
  while ($location_0[stackIndex] = 'TreeMap.java:' + '930' , node.child[dir]) {
    $location_0[stackIndex] = 'TreeMap.java:' + '931' , last = dir;
    $location_0[stackIndex] = 'TreeMap.java:' + '932' , grandparent = parent_0;
    $location_0[stackIndex] = 'TreeMap.java:' + '933' , parent_0 = node;
    node = ($location_0[stackIndex] = 'TreeMap.java:' + '934' , node.child[dir]);
    c = ($location_0[stackIndex] = 'TreeMap.java:' + '935' , $compare_0(node.key, key));
    $location_0[stackIndex] = 'TreeMap.java:' + '936' , dir = c < 0?1:0;
    c == 0 && (!state.matchValue || ($location_0[stackIndex] = 'TreeMap.java:' + '937' , equals__devirtual$(node.value_0, state.value_0))) && ($location_0[stackIndex] = 'TreeMap.java:' + '938' , found = node);
    if (!(!!node && node.isRed) && !$isRed(($location_0[stackIndex] = 'TreeMap.java:' + '940' , node.child[dir]))) {
      if ($isRed(($location_0[stackIndex] = 'TreeMap.java:' + '941' , node.child[1 - dir]))) {
        parent_0 = parent_0.child[last] = ($location_0[stackIndex] = 'TreeMap.java:' + '942' , $rotateSingle(node, dir));
      }
       else if (!$isRed(($location_0[stackIndex] = 'TreeMap.java:' + '943' , node.child[1 - dir]))) {
        sibling = ($location_0[stackIndex] = 'TreeMap.java:' + '944' , parent_0.child[1 - last]);
        if (sibling) {
          if (!$isRed(($location_0[stackIndex] = 'TreeMap.java:' + '946' , sibling.child[1 - last])) && !$isRed(($location_0[stackIndex] = 'TreeMap.java:' + '947' , sibling.child[last]))) {
            $location_0[stackIndex] = 'TreeMap.java:' + '948' , parent_0.isRed = false;
            $location_0[stackIndex] = 'TreeMap.java:' + '949' , sibling.isRed = true;
            $location_0[stackIndex] = 'TreeMap.java:' + '950' , node.isRed = true;
          }
           else {
            dir2 = ($location_0[stackIndex] = 'TreeMap.java:' + '952' , grandparent.child[1]) == parent_0?1:0;
            $isRed(($location_0[stackIndex] = 'TreeMap.java:' + '953' , sibling.child[last]))?($location_0[stackIndex] = 'TreeMap.java:' + '954' , grandparent.child[dir2] = (parent_0.child[1 - last] = ($location_0[stackIndex] = 'TreeMap.java:' + '1039' , $rotateSingle(($location_0[stackIndex] = 'TreeMap.java:' + '1040' , parent_0.child[1 - last]), 1 - last)) , ($location_0[stackIndex] = 'TreeMap.java:' + '1041' , $rotateSingle(parent_0, last)))):$isRed(($location_0[stackIndex] = 'TreeMap.java:' + '955' , sibling.child[1 - last])) && (grandparent.child[dir2] = ($location_0[stackIndex] = 'TreeMap.java:' + '956' , $rotateSingle(parent_0, last)));
            node.isRed = grandparent.child[dir2].isRed = true;
            ($location_0[stackIndex] = 'TreeMap.java:' + '959' , grandparent.child[dir2]).child[0].isRed = false;
            ($location_0[stackIndex] = 'TreeMap.java:' + '960' , grandparent.child[dir2]).child[1].isRed = false;
          }
        }
      }
    }
  }
  if (found) {
    $location_0[stackIndex] = 'TreeMap.java:' + '968' , state.found = true;
    $location_0[stackIndex] = 'TreeMap.java:' + '969' , state.value_0 = found.value_0;
    if (node != found) {
      newNode = $TreeMap$Node(($location_0[stackIndex] = 'TreeMap.java:' + '979' , new TreeMap$Node), node.key, node.value_0);
      $location_0[stackIndex] = 'TreeMap.java:' + '980' , $replaceNode_0(head, found, newNode);
      parent_0 == found && ($location_0[stackIndex] = 'TreeMap.java:' + '982' , parent_0 = newNode);
    }
    parent_0.child[($location_0[stackIndex] = 'TreeMap.java:' + '987' , parent_0.child[1]) == node?1:0] = node.child[!node.child[0]?1:0];
    $location_0[stackIndex] = 'TreeMap.java:' + '989' , --this$static.size_0;
  }
  this$static.root = ($location_0[stackIndex] = 'TreeMap.java:' + '992' , head.child[1]);
  !!this$static.root && ($location_0[stackIndex] = 'TreeMap.java:' + '994' , this$static.root.isRed = false);
  returnTemp = state.found;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $replaceNode_0(head, node, newNode){
  var direction, parent_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $replaceNode_0;
  $location_0[stackIndex] = 'TreeMap.java:' + '1004' , parent_0 = head;
  direction = parent_0.key == null || ($location_0[stackIndex] = 'TreeMap.java:' + '1005' , $compare_0(node.key, parent_0.key)) > 0?1:0;
  while (($location_0[stackIndex] = 'TreeMap.java:' + '1007' , parent_0.child[direction]) != node) {
    parent_0 = ($location_0[stackIndex] = 'TreeMap.java:' + '1008' , parent_0.child[direction]);
    direction = ($location_0[stackIndex] = 'TreeMap.java:' + '1010' , $compare_0(node.key, parent_0.key)) > 0?1:0;
  }
  $location_0[stackIndex] = 'TreeMap.java:' + '1013' , parent_0.child[direction] = newNode;
  $location_0[stackIndex] = 'TreeMap.java:' + '1014' , newNode.isRed = node.isRed;
  newNode.child[0] = ($location_0[stackIndex] = 'TreeMap.java:' + '1015' , node.child[0]);
  newNode.child[1] = ($location_0[stackIndex] = 'TreeMap.java:' + '1016' , node.child[1]);
  $location_0[stackIndex] = 'TreeMap.java:' + '1017' , setCheck(node.child, 0, null);
  $location_0[stackIndex] = 'TreeMap.java:' + '1018' , setCheck(node.child, 1, null);
  $stackDepth_0 = stackIndex - 1;
}

function $rotateSingle(tree, rotateDirection){
  var save, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $rotateSingle;
  save = ($location_0[stackIndex] = 'TreeMap.java:' + '1059' , tree.child[1 - rotateDirection]);
  tree.child[1 - rotateDirection] = ($location_0[stackIndex] = 'TreeMap.java:' + '1060' , save.child[rotateDirection]);
  $location_0[stackIndex] = 'TreeMap.java:' + '1061' , save.child[rotateDirection] = tree;
  $location_0[stackIndex] = 'TreeMap.java:' + '1062' , tree.isRed = true;
  $location_0[stackIndex] = 'TreeMap.java:' + '1063' , save.isRed = false;
  $stackDepth_0 = stackIndex - 1;
  return save;
}

function containsKey_2(key){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = containsKey_2;
  returnTemp = !!($location_0[stackIndex] = 'TreeMap.java:' + '642' , $getEntry(this, key));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function entrySet_3(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = entrySet_3;
  returnTemp = $TreeMap$EntrySet(($location_0[stackIndex] = 'TreeMap.java:' + '647' , new TreeMap$EntrySet), this);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function get_7(k){
  var entry, key, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = get_7;
  $location_0[stackIndex] = 'TreeMap.java:' + '657' , key = k;
  entry = ($location_0[stackIndex] = 'TreeMap.java:' + '664' , $getEntry(this, key));
  returnTemp = entry?entry.value_0:null;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getClass_350(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_350;
  $stackDepth_0 = stackIndex - 1;
  return Ljava_util_TreeMap_2_classLit;
}

function put_2(key, value){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = put_2;
  returnTemp = ($location_0[stackIndex] = 'TreeMap.java:' + '677' , $put_1(this, key, value));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function size_27(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = size_27;
  $stackDepth_0 = stackIndex - 1;
  return this.size_0;
}

function TreeMap(){
}

_ = TreeMap.prototype = new AbstractMap;
_.containsKey = containsKey_2;
_.entrySet_0 = entrySet_3;
_.get_0 = get_7;
_.getClass$ = getClass_350;
_.put = put_2;
_.size_1 = size_27;
_.typeId$ = 218;
_.root = null;
_.size_0 = 0;
var DEFAULT_COMPARATOR;
function $compare(a, b){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $compare;
  if (a == null || b == null) {
    throw $NullPointerException(($location_0[stackIndex] = 'TreeMap.java:' + '552' , new NullPointerException));
  }
  returnTemp = ($location_0[stackIndex] = 'TreeMap.java:' + '554' , a.compareTo$(b));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $compare_0(p0, p1){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $compare_0;
  returnTemp = $compare(($location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , dynamicCast(p0, 79)), dynamicCast(p1, 79));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function compare_2(p0, p1){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = compare_2;
  returnTemp = $compare(($location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , dynamicCast(p0, 79)), dynamicCast(p1, 79));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getClass_351(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_351;
  $stackDepth_0 = stackIndex - 1;
  return Ljava_util_TreeMap$1_2_classLit;
}

function TreeMap$1(){
}

_ = TreeMap$1.prototype = new Object_0;
_.compare = compare_2;
_.getClass$ = getClass_351;
_.typeId$ = 0;
function $TreeMap$EntryIterator(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $TreeMap$EntryIterator;
  $location_0[stackIndex] = 'TreeMap.java:' + '51' , $TreeMap$EntryIterator_0(this$static, ($location_0[stackIndex] = 'TreeMap.java:' + '500' , $clinit_603() , All), null, null, this$0);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $TreeMap$EntryIterator_0(this$static, type, fromKey, toKey, this$0){
  var list, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $TreeMap$EntryIterator_0;
  $location_0[stackIndex] = 'TreeMap.java:' + '60' , this$static.this$0 = this$0;
  list = $ArrayList(($location_0[stackIndex] = 'TreeMap.java:' + '61' , new ArrayList));
  $location_0[stackIndex] = 'TreeMap.java:' + '62' , $inOrderAdd(this$static, list, type, this$static.this$0.root, fromKey, toKey);
  $location_0[stackIndex] = 'TreeMap.java:' + '63' , this$static.iter = $AbstractList$IteratorImpl(($location_0[stackIndex] = 'AbstractList.java:' + '278' , new AbstractList$IteratorImpl), list);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $inOrderAdd(this$static, list, type, current, fromKey, toKey){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $inOrderAdd;
  if (!current) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  !!($location_0[stackIndex] = 'TreeMap.java:' + '84' , current.child[0]) && $inOrderAdd(this$static, list, type, ($location_0[stackIndex] = 'TreeMap.java:' + '85' , current.child[0]), fromKey, toKey);
  ($location_0[stackIndex] = 'TreeMap.java:' + '87' , $inRange(type, current.key, fromKey, toKey)) && ($location_0[stackIndex] = 'TreeMap.java:' + '88' , list.add_0(current));
  !!($location_0[stackIndex] = 'TreeMap.java:' + '90' , current.child[1]) && $inOrderAdd(this$static, list, type, ($location_0[stackIndex] = 'TreeMap.java:' + '91' , current.child[1]), fromKey, toKey);
  $stackDepth_0 = stackIndex - 1;
}

function $inRange(type, key, fromKey, toKey){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $inRange;
  if ($location_0[stackIndex] = 'TreeMap.java:' + '96' , type.toKeyValid()) {
    if ($compare(($location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , dynamicCast(key, 79)), dynamicCast(toKey, 79)) >= 0) {
      $stackDepth_0 = stackIndex - 1;
      return false;
    }
  }
  if ($location_0[stackIndex] = 'TreeMap.java:' + '101' , type.fromKeyValid()) {
    if ($compare(($location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , dynamicCast(key, 79)), dynamicCast(fromKey, 79)) < 0) {
      $stackDepth_0 = stackIndex - 1;
      return false;
    }
  }
  $stackDepth_0 = stackIndex - 1;
  return true;
}

function getClass_352(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_352;
  $stackDepth_0 = stackIndex - 1;
  return Ljava_util_TreeMap$EntryIterator_2_classLit;
}

function hasNext_11(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = hasNext_11;
  returnTemp = ($location_0[stackIndex] = 'TreeMap.java:' + '67' , $hasNext_4(this.iter));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function next_12(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = next_12;
  returnTemp = this.last = dynamicCast(($location_0[stackIndex] = 'TreeMap.java:' + '71' , $next_6(this.iter)), 87);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function remove_23(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = remove_23;
  $location_0[stackIndex] = 'TreeMap.java:' + '75' , $remove_16(this.iter);
  $remove_20(this.this$0, ($location_0[stackIndex] = 'TreeMap.java:' + '76' , this.last.getKey()));
  $stackDepth_0 = stackIndex - 1;
}

function TreeMap$EntryIterator(){
}

_ = TreeMap$EntryIterator.prototype = new Object_0;
_.getClass$ = getClass_352;
_.hasNext = hasNext_11;
_.next_0 = next_12;
_.remove = remove_23;
_.typeId$ = 0;
_.iter = null;
_.last = null;
_.this$0 = null;
function $TreeMap$EntrySet(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $TreeMap$EntrySet;
  $location_0[stackIndex] = 'TreeMap.java:' + '110' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function contains_7(o){
  var entry, lookupEntry, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = contains_7;
  if (!(o != null && ($location_0[stackIndex] = 'Cast.java:' + '76' , canCast(o.typeId$, 87)))) {
    $stackDepth_0 = stackIndex - 1;
    return false;
  }
  entry = ($location_0[stackIndex] = 'TreeMap.java:' + '122' , dynamicCast(o, 87));
  lookupEntry = $getEntry(this.this$0, ($location_0[stackIndex] = 'TreeMap.java:' + '123' , entry.getKey()));
  returnTemp = !!lookupEntry && ($location_0[stackIndex] = 'TreeMap.java:' + '125' , equalsWithNullCheck(lookupEntry.value_0, ($location_0[stackIndex] = 'TreeMap.java:' + '126' , entry.getValue())));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getClass_353(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_353;
  $stackDepth_0 = stackIndex - 1;
  return Ljava_util_TreeMap$EntrySet_2_classLit;
}

function iterator_15(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = iterator_15;
  returnTemp = $TreeMap$EntryIterator(($location_0[stackIndex] = 'TreeMap.java:' + '131' , new TreeMap$EntryIterator), this.this$0);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function size_28(){
  var returnTemp, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = size_28;
  returnTemp = this.this$0.size_0;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function TreeMap$EntrySet(){
}

_ = TreeMap$EntrySet.prototype = new AbstractSet;
_.contains_0 = contains_7;
_.getClass$ = getClass_353;
_.iterator_0 = iterator_15;
_.size_1 = size_28;
_.typeId$ = 219;
_.this$0 = null;
function $TreeMap$Node(this$static, key, value){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $TreeMap$Node;
  $location_0[stackIndex] = 'TreeMap.java:' + '196' , this$static.key = key;
  $location_0[stackIndex] = 'TreeMap.java:' + '197' , this$static.value_0 = value;
  this$static.child = ($location_0[stackIndex] = 'TreeMap.java:' + '198' , initDim(_3Ljava_util_TreeMap$Node_2_classLit, 687, 88, 2, 0));
  $location_0[stackIndex] = 'TreeMap.java:' + '199' , this$static.isRed = true;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function equals_26(o){
  var other, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = equals_26;
  if (!(o != null && ($location_0[stackIndex] = 'Cast.java:' + '76' , canCast(o.typeId$, 88)))) {
    $stackDepth_0 = stackIndex - 1;
    return false;
  }
  other = ($location_0[stackIndex] = 'TreeMap.java:' + '209' , dynamicCast(o, 88));
  returnTemp = ($location_0[stackIndex] = 'TreeMap.java:' + '210' , equalsWithNullCheck(this.key, other.key)) && ($location_0[stackIndex] = 'TreeMap.java:' + '211' , equalsWithNullCheck(this.value_0, other.value_0));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getClass_354(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_354;
  $stackDepth_0 = stackIndex - 1;
  return Ljava_util_TreeMap$Node_2_classLit;
}

function getKey_3(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getKey_3;
  $stackDepth_0 = stackIndex - 1;
  return this.key;
}

function getValue_3(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getValue_3;
  $stackDepth_0 = stackIndex - 1;
  return this.value_0;
}

function hashCode_27(){
  var keyHash, valueHash, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = hashCode_27;
  keyHash = this.key != null?($location_0[stackIndex] = 'TreeMap.java:' + '224' , hashCode__devirtual$(this.key)):0;
  valueHash = this.value_0 != null?($location_0[stackIndex] = 'TreeMap.java:' + '225' , hashCode__devirtual$(this.value_0)):0;
  $stackDepth_0 = stackIndex - 1;
  return keyHash ^ valueHash;
}

function setValue_3(value){
  var old, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = setValue_3;
  $location_0[stackIndex] = 'TreeMap.java:' + '230' , old = this.value_0;
  $location_0[stackIndex] = 'TreeMap.java:' + '231' , this.value_0 = value;
  $stackDepth_0 = stackIndex - 1;
  return old;
}

function toString_48(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = toString_48;
  $stackDepth_0 = stackIndex - 1;
  return this.key + '=' + this.value_0;
}

function TreeMap$Node(){
}

_ = TreeMap$Node.prototype = new Object_0;
_.equals$ = equals_26;
_.getClass$ = getClass_354;
_.getKey = getKey_3;
_.getValue = getValue_3;
_.hashCode$ = hashCode_27;
_.setValue = setValue_3;
_.toString$ = toString_48;
_.typeId$ = 220;
_.child = null;
_.isRed = false;
_.key = null;
_.value_0 = null;
function getClass_355(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_355;
  $stackDepth_0 = stackIndex - 1;
  return Ljava_util_TreeMap$State_2_classLit;
}

function toString_49(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = toString_49;
  $stackDepth_0 = stackIndex - 1;
  return 'State: mv=' + this.matchValue + ' value=' + this.value_0 + ' done=' + this.done + ' found=' + this.found;
}

function TreeMap$State(){
}

_ = TreeMap$State.prototype = new Object_0;
_.getClass$ = getClass_355;
_.toString$ = toString_49;
_.typeId$ = 0;
_.done = false;
_.found = false;
_.matchValue = false;
_.value_0 = null;
function $clinit_603(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_603;
  $location_0[stackIndex] = 'TreeMap.java:' + '499' , $clinit_603 = nullMethod;
  $location_0[stackIndex] = 'TreeMap.java:' + '500' , All = $TreeMap$SubMapType(($location_0[stackIndex] = 'TreeMap.java:' + '1' , new TreeMap$SubMapType), 'All', 0);
  $location_0[stackIndex] = 'TreeMap.java:' + '502' , Head = $TreeMap$SubMapType$1(($location_0[stackIndex] = 'TreeMap.java:' + '1' , new TreeMap$SubMapType$1), 'Head', 1);
  $location_0[stackIndex] = 'TreeMap.java:' + '509' , Range = $TreeMap$SubMapType$2(($location_0[stackIndex] = 'TreeMap.java:' + '1' , new TreeMap$SubMapType$2), 'Range', 2);
  $location_0[stackIndex] = 'TreeMap.java:' + '521' , Tail = $TreeMap$SubMapType$3(($location_0[stackIndex] = 'TreeMap.java:' + '1' , new TreeMap$SubMapType$3), 'Tail', 3);
  $stackDepth_0 = stackIndex - 1;
}

function $TreeMap$SubMapType(this$static, enum$name, enum$ordinal){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $TreeMap$SubMapType;
  $location_0[stackIndex] = 'TreeMap.java:' + '499' , $clinit_603();
  $location_0[stackIndex] = 'Enum.java:' + '76' , this$static.name_0 = enum$name;
  $location_0[stackIndex] = 'Enum.java:' + '77' , this$static.ordinal = enum$ordinal;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function fromKeyValid(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = fromKeyValid;
  $stackDepth_0 = stackIndex - 1;
  return false;
}

function getClass_356(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_356;
  $stackDepth_0 = stackIndex - 1;
  return Ljava_util_TreeMap$SubMapType_2_classLit;
}

function toKeyValid(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = toKeyValid;
  $stackDepth_0 = stackIndex - 1;
  return false;
}

function values_5(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = values_5;
  $location_0[stackIndex] = 'TreeMap.java:' + '499' , $clinit_603();
  returnTemp = initValues(_3Ljava_util_TreeMap$SubMapType_2_classLit, 688, 89, [All, Head, Range, Tail]);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function TreeMap$SubMapType(){
}

_ = TreeMap$SubMapType.prototype = new Enum;
_.fromKeyValid = fromKeyValid;
_.getClass$ = getClass_356;
_.toKeyValid = toKeyValid;
_.typeId$ = 221;
var All, Head, Range, Tail;
function $clinit_604(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_604;
  $location_0[stackIndex] = 'TreeMap.java:' + '502' , $clinit_604 = nullMethod;
  $clinit_603();
  $stackDepth_0 = stackIndex - 1;
}

function $TreeMap$SubMapType$1(this$static, enum$name, enum$ordinal){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $TreeMap$SubMapType$1;
  $location_0[stackIndex] = 'TreeMap.java:' + '502' , $clinit_604();
  $location_0[stackIndex] = 'Enum.java:' + '76' , this$static.name_0 = enum$name;
  $location_0[stackIndex] = 'Enum.java:' + '77' , this$static.ordinal = enum$ordinal;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_357(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_357;
  $stackDepth_0 = stackIndex - 1;
  return Ljava_util_TreeMap$SubMapType$1_2_classLit;
}

function toKeyValid_0(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = toKeyValid_0;
  $stackDepth_0 = stackIndex - 1;
  return true;
}

function TreeMap$SubMapType$1(){
}

_ = TreeMap$SubMapType$1.prototype = new TreeMap$SubMapType;
_.getClass$ = getClass_357;
_.toKeyValid = toKeyValid_0;
_.typeId$ = 222;
function $clinit_605(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_605;
  $location_0[stackIndex] = 'TreeMap.java:' + '509' , $clinit_605 = nullMethod;
  $clinit_603();
  $stackDepth_0 = stackIndex - 1;
}

function $TreeMap$SubMapType$2(this$static, enum$name, enum$ordinal){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $TreeMap$SubMapType$2;
  $location_0[stackIndex] = 'TreeMap.java:' + '509' , $clinit_605();
  $location_0[stackIndex] = 'Enum.java:' + '76' , this$static.name_0 = enum$name;
  $location_0[stackIndex] = 'Enum.java:' + '77' , this$static.ordinal = enum$ordinal;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function fromKeyValid_0(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = fromKeyValid_0;
  $stackDepth_0 = stackIndex - 1;
  return true;
}

function getClass_358(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_358;
  $stackDepth_0 = stackIndex - 1;
  return Ljava_util_TreeMap$SubMapType$2_2_classLit;
}

function toKeyValid_1(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = toKeyValid_1;
  $stackDepth_0 = stackIndex - 1;
  return true;
}

function TreeMap$SubMapType$2(){
}

_ = TreeMap$SubMapType$2.prototype = new TreeMap$SubMapType;
_.fromKeyValid = fromKeyValid_0;
_.getClass$ = getClass_358;
_.toKeyValid = toKeyValid_1;
_.typeId$ = 223;
function $clinit_606(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_606;
  $location_0[stackIndex] = 'TreeMap.java:' + '521' , $clinit_606 = nullMethod;
  $clinit_603();
  $stackDepth_0 = stackIndex - 1;
}

function $TreeMap$SubMapType$3(this$static, enum$name, enum$ordinal){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $TreeMap$SubMapType$3;
  $location_0[stackIndex] = 'TreeMap.java:' + '521' , $clinit_606();
  $location_0[stackIndex] = 'Enum.java:' + '76' , this$static.name_0 = enum$name;
  $location_0[stackIndex] = 'Enum.java:' + '77' , this$static.ordinal = enum$ordinal;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function fromKeyValid_1(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = fromKeyValid_1;
  $stackDepth_0 = stackIndex - 1;
  return true;
}

function getClass_359(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_359;
  $stackDepth_0 = stackIndex - 1;
  return Ljava_util_TreeMap$SubMapType$3_2_classLit;
}

function TreeMap$SubMapType$3(){
}

_ = TreeMap$SubMapType$3.prototype = new TreeMap$SubMapType;
_.fromKeyValid = fromKeyValid_1;
_.getClass$ = getClass_359;
_.typeId$ = 224;
function $TreeSet(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $TreeSet;
  this$static.map = $TreeMap(($location_0[stackIndex] = 'TreeSet.java:' + '35' , new TreeMap));
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function add_22(o){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = add_22;
  returnTemp = ($location_0[stackIndex] = 'TreeSet.java:' + '69' , $put_1(this.map, o, ($location_0[stackIndex] = 'Boolean.java:' + '29' , $clinit_507() , FALSE_0))) == null;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function contains_8(o){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = contains_8;
  returnTemp = !!($location_0[stackIndex] = 'TreeMap.java:' + '642' , $getEntry(this.map, o));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getClass_360(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_360;
  $stackDepth_0 = stackIndex - 1;
  return Ljava_util_TreeSet_2_classLit;
}

function iterator_16(){
  var outerIter, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = iterator_16;
  returnTemp = (outerIter = ($location_0[stackIndex] = 'AbstractMap.java:' + '107' , ($location_0[stackIndex] = 'TreeSet.java:' + '96' , $keySet_1(this.map)).val$entrySet.iterator_0()) , $AbstractMap$1$1(($location_0[stackIndex] = 'AbstractMap.java:' + '108' , new AbstractMap$1$1), outerIter));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function size_29(){
  var returnTemp, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = size_29;
  returnTemp = this.map.size_0;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function TreeSet(){
}

_ = TreeSet.prototype = new AbstractSet;
_.add_0 = add_22;
_.contains_0 = contains_8;
_.getClass$ = getClass_360;
_.iterator_0 = iterator_16;
_.size_1 = size_29;
_.typeId$ = 225;
_.map = null;
function observableList(list){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = observableList;
  if (!list) {
    throw $IllegalArgumentException_0(($location_0[stackIndex] = 'ObservableCollections.java:' + '51' , new IllegalArgumentException), 'List must be non-null');
  }
  returnTemp = $ObservableCollections$ObservableListImpl(($location_0[stackIndex] = 'ObservableCollections.java:' + '53' , new ObservableCollections$ObservableListImpl), list);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $ObservableCollections$ObservableListImpl(this$static, list){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ObservableCollections$ObservableListImpl;
  $location_0[stackIndex] = 'ObservableCollections.java:' + '266' , this$static.list = list;
  this$static.listeners = $ArrayList(($location_0[stackIndex] = 'ObservableCollections.java:' + '269' , new ArrayList));
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $clear_5(this$static){
  var dup, listener, listener$iterator, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clear_5;
  dup = $ArrayList_0(($location_0[stackIndex] = 'ObservableCollections.java:' + '322' , new ArrayList), this$static.list);
  $location_0[stackIndex] = 'Vector.java:' + '90' , $clear_3(this$static.list.arrayList);
  if (dup.size_0 != 0) {
    for ($location_0[stackIndex] = 'ObservableCollections.java:' + '326' , listener$iterator = $AbstractList$IteratorImpl(($location_0[stackIndex] = 'AbstractList.java:' + '278' , new AbstractList$IteratorImpl), this$static.listeners); listener$iterator.i < ($location_0[stackIndex] = 'AbstractList.java:' + '38' , listener$iterator.this$0.size_1());) {
      listener = dynamicCast(($location_0[stackIndex] = 'ObservableCollections.java:' + '326' , $next_6(listener$iterator)), 176);
      $location_0[stackIndex] = 'DefaultListModel.java:' + '103' , $fireIntervalRemoved(listener, listener, 0, dup.size_0 - 1);
    }
  }
  $stackDepth_0 = stackIndex - 1;
}

function add_25(index, element){
  var listener, listener$iterator, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = add_25;
  $location_0[stackIndex] = 'Vector.java:' + '67' , $add_8(this.list.arrayList, index, element);
  for ($location_0[stackIndex] = 'ObservableCollections.java:' + '292' , listener$iterator = $AbstractList$IteratorImpl(($location_0[stackIndex] = 'AbstractList.java:' + '278' , new AbstractList$IteratorImpl), this.listeners); listener$iterator.i < ($location_0[stackIndex] = 'AbstractList.java:' + '38' , listener$iterator.this$0.size_1());) {
    listener = dynamicCast(($location_0[stackIndex] = 'ObservableCollections.java:' + '292' , $next_6(listener$iterator)), 176);
    $location_0[stackIndex] = 'DefaultListModel.java:' + '98' , $fireIntervalAdded(listener, listener, index, index + 1 - 1);
  }
  $stackDepth_0 = stackIndex - 1;
}

function get_9(index){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = get_9;
  returnTemp = ($location_0[stackIndex] = 'Vector.java:' + '133' , $get_5(this.list.arrayList, index));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getClass_362(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_362;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_beansbinding_observablecollections_client_ObservableCollections$ObservableListImpl_2_classLit;
}

function remove_25(index){
  var listener, listener$iterator, oldValue, list, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = remove_25;
  $location_0[stackIndex] = 'ObservableCollections.java:' + '298' , oldValue = ($location_0[stackIndex] = 'Vector.java:' + '184' , $remove_7(this.list.arrayList, index));
  for ($location_0[stackIndex] = 'ObservableCollections.java:' + '300' , listener$iterator = $AbstractList$IteratorImpl(($location_0[stackIndex] = 'AbstractList.java:' + '278' , new AbstractList$IteratorImpl), this.listeners); listener$iterator.i < ($location_0[stackIndex] = 'AbstractList.java:' + '38' , listener$iterator.this$0.size_1());) {
    listener = dynamicCast(($location_0[stackIndex] = 'ObservableCollections.java:' + '300' , $next_6(listener$iterator)), 176);
    $location_0[stackIndex] = 'ObservableCollections.java:' + '301' , $listElementsRemoved(listener, index, ($location_0[stackIndex] = 'Collections.java:' + '824' , $clinit_562() , list = $ArrayList_1(($location_0[stackIndex] = 'Collections.java:' + '825' , new ArrayList), 1) , setCheck(list.array, ($location_0[stackIndex] = 'ArrayList.java:' + '95' , list.size_0++), oldValue) , list?$Collections$UnmodifiableRandomAccessList(($location_0[stackIndex] = 'Collections.java:' + '860' , new Collections$UnmodifiableRandomAccessList), list):$Collections$UnmodifiableList(new Collections$UnmodifiableList, list)));
  }
  $stackDepth_0 = stackIndex - 1;
  return oldValue;
}

function size_31(){
  var returnTemp, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = size_31;
  returnTemp = this.list.arrayList.size_0;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function toArray_9(a){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = toArray_9;
  returnTemp = ($location_0[stackIndex] = 'Vector.java:' + '237' , $toArray_1(this.list.arrayList, a));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function toArray_10(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = toArray_10;
  returnTemp = ($location_0[stackIndex] = 'Vector.java:' + '232' , $toArray_0(this.list.arrayList));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function ObservableCollections$ObservableListImpl(){
}

_ = ObservableCollections$ObservableListImpl.prototype = new AbstractList;
_.add_2 = add_25;
_.get = get_9;
_.getClass$ = getClass_362;
_.remove_1 = remove_25;
_.size_1 = size_31;
_.toArray_0 = toArray_9;
_.toArray = toArray_10;
_.typeId$ = 227;
_.list = null;
_.listeners = null;
function getClass_369(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_369;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_core_client_util_DelayedRunnable_2_classLit;
}

function DelayedRunnable(){
}

_ = DelayedRunnable.prototype = new Object_0;
_.getClass$ = getClass_369;
_.typeId$ = 0;
function $clinit_624(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_624;
  $location_0[stackIndex] = 'DelayedRunnable.java:' + '42' , $clinit_624 = nullMethod;
  $clinit_43();
  $stackDepth_0 = stackIndex - 1;
}

function $DelayedRunnable$1(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $DelayedRunnable$1;
  $location_0[stackIndex] = 'DelayedRunnable.java:' + '42' , $clinit_624();
  this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_370(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_370;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_core_client_util_DelayedRunnable$1_2_classLit;
}

function run_4(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = run_4;
  $location_0[stackIndex] = 'DelayedRunnable.java:' + '44' , $run_0(this.this$0);
  $stackDepth_0 = stackIndex - 1;
}

function DelayedRunnable$1(){
}

_ = DelayedRunnable$1.prototype = new Timer;
_.getClass$ = getClass_370;
_.run = run_4;
_.typeId$ = 232;
_.this$0 = null;
function $HTMLTable_0(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $HTMLTable_0;
  this$static.widgetMap = $HTMLTable$WidgetMapper(($location_0[stackIndex] = 'HTMLTable.java:' + '807' , new HTMLTable$WidgetMapper));
  $location_0[stackIndex] = 'HTMLTable.java:' + '814' , this$static.tableElem = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , ($location_0[stackIndex] = 'Document.java:' + '966' , $clinit_81() , $doc).createElement('table'));
  $location_0[stackIndex] = 'HTMLTable.java:' + '815' , this$static.bodyElem = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , $doc.createElement('tbody'));
  $location_0[stackIndex] = 'Node.java:' + '72' , this$static.tableElem.appendChild(this$static.bodyElem);
  $location_0[stackIndex] = 'UIObject.java:' + '799' , this$static.element = this$static.tableElem;
  $location_0[stackIndex] = 'HTMLTable.java:' + '818' , $sinkEvents(this$static, 1);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $checkCellBounds_0(this$static, row, column){
  var cellSize, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $checkCellBounds_0;
  $location_0[stackIndex] = 'HTMLTable.java:' + '1253' , $checkRowBounds_0(this$static, row);
  if (column < 0) {
    throw $IndexOutOfBoundsException_0(($location_0[stackIndex] = 'HTMLTable.java:' + '1255' , new IndexOutOfBoundsException), 'Column ' + column + ' must be non-negative: ' + column);
  }
  cellSize = ($location_0[stackIndex] = 'HTMLTable.java:' + '1257' , this$static.getCellCount(row));
  if (cellSize <= column) {
    throw $location_0[stackIndex] = 'HTMLTable.java:' + '1259' , $IndexOutOfBoundsException_0(($location_0[stackIndex] = 'HTMLTable.java:' + '1259' , new IndexOutOfBoundsException), 'Column index: ' + column + ', Column size: ' + ($location_0[stackIndex] = 'HTMLTable.java:' + '1260' , this$static.getCellCount(row)));
  }
  $stackDepth_0 = stackIndex - 1;
}

function $checkRowBounds_0(this$static, row){
  var rowSize, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $checkRowBounds_0;
  rowSize = ($location_0[stackIndex] = 'HTMLTable.java:' + '1271' , this$static.getRowCount());
  if (row >= rowSize || row < 0) {
    throw $IndexOutOfBoundsException_0(($location_0[stackIndex] = 'HTMLTable.java:' + '1273' , new IndexOutOfBoundsException), 'Row index: ' + row + ', Row size: ' + rowSize);
  }
  $stackDepth_0 = stackIndex - 1;
}

function $clear_6(this$static){
  var child, col, row, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clear_6;
  for ($location_0[stackIndex] = 'HTMLTable.java:' + '838' , row = 0; row < ($location_0[stackIndex] = 'HTMLTable.java:' + '838' , this$static.getRowCount()); $location_0[stackIndex] = 'HTMLTable.java:' + '838' , ++row) {
    for ($location_0[stackIndex] = 'HTMLTable.java:' + '839' , col = 0; col < ($location_0[stackIndex] = 'HTMLTable.java:' + '839' , this$static.getCellCount(row)); $location_0[stackIndex] = 'HTMLTable.java:' + '839' , ++col) {
      child = ($location_0[stackIndex] = 'HTMLTable.java:' + '840' , $getWidgetImpl(this$static, row, col));
      !!child && ($location_0[stackIndex] = 'HTMLTable.java:' + '842' , this$static.remove_0(child));
    }
  }
  $stackDepth_0 = stackIndex - 1;
}

function $getEventTargetCell(this$static, event_0){
  var body, td, tr, parent_0, parent_1, parent_2, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $getEventTargetCell;
  $location_0[stackIndex] = 'HTMLTable.java:' + '928' , td = ($location_0[stackIndex] = 'NativeEvent.java:' + '109' , $clinit_81() , event_0).target;
  for (; td; $location_0[stackIndex] = 'HTMLTable.java:' + '929' , td = ($location_0[stackIndex] = 'DOMImpl.java:' + '236' , parent_0 = td.parentNode , (!parent_0 || parent_0.nodeType != 1) && ($location_0[stackIndex] = 'DOMImpl.java:' + '238' , parent_0 = null) , parent_0)) {
    if ($location_0[stackIndex] = 'HTMLTable.java:' + '931' , $equalsIgnoreCase('td', ($location_0[stackIndex] = 'Element.java:' + '379' , td['tagName']) == null?null:String(td['tagName']))) {
      $location_0[stackIndex] = 'HTMLTable.java:' + '934' , tr = ($location_0[stackIndex] = 'DOMImpl.java:' + '236' , parent_1 = td.parentNode , (!parent_1 || parent_1.nodeType != 1) && ($location_0[stackIndex] = 'DOMImpl.java:' + '238' , parent_1 = null) , parent_1);
      $location_0[stackIndex] = 'HTMLTable.java:' + '935' , body = ($location_0[stackIndex] = 'DOMImpl.java:' + '236' , parent_2 = tr.parentNode , (!parent_2 || parent_2.nodeType != 1) && ($location_0[stackIndex] = 'DOMImpl.java:' + '238' , parent_2 = null) , parent_2);
      if (body == this$static.bodyElem) {
        $stackDepth_0 = stackIndex - 1;
        return td;
      }
    }
    if (td == this$static.bodyElem) {
      $stackDepth_0 = stackIndex - 1;
      return null;
    }
  }
  $stackDepth_0 = stackIndex - 1;
  return null;
}

function $getWidgetImpl(this$static, row, column){
  var child, e, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getWidgetImpl;
  e = ($location_0[stackIndex] = 'HTMLTable.java:' + '1584' , this$static.cellFormatter.getRawElement(row, column));
  $location_0[stackIndex] = 'HTMLTable.java:' + '1585' , child = $getFirstChildElement_0(($location_0[stackIndex] = 'Element.java:' + '241' , $clinit_81() , e));
  if (!child) {
    $stackDepth_0 = stackIndex - 1;
    return null;
  }
   else {
    returnTemp = ($location_0[stackIndex] = 'HTMLTable.java:' + '1589' , $getWidget_2(this$static.widgetMap, child));
    $stackDepth_0 = stackIndex - 1;
    return returnTemp;
  }
  $stackDepth_0 = stackIndex - 1;
}

function $insertRow(this$static, beforeRow){
  var beforeRowElem, tr, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $insertRow;
  beforeRow != ($location_0[stackIndex] = 'HTMLTable.java:' + '1424' , this$static.getRowCount()) && ($location_0[stackIndex] = 'HTMLTable.java:' + '1425' , $checkRowBounds_0(this$static, beforeRow));
  tr = ($location_0[stackIndex] = 'HTMLTable.java:' + '1427' , this$static.createRow());
  beforeRowElem = ($location_0[stackIndex] = 'HTMLTable.java:' + '1428' , this$static.rowFormatter.getRawElement_0(beforeRow));
  $location_0[stackIndex] = 'Node.java:' + '250' , this$static.bodyElem.insertBefore(tr, beforeRowElem);
  $stackDepth_0 = stackIndex - 1;
  return beforeRow;
}

function $internalClearCell_0(this$static, td, clearInnerHTML){
  var maybeChild, widget, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $internalClearCell_0;
  $location_0[stackIndex] = 'HTMLTable.java:' + '1443' , maybeChild = $getFirstChildElement_0(($location_0[stackIndex] = 'Element.java:' + '241' , $clinit_81() , td));
  $location_0[stackIndex] = 'HTMLTable.java:' + '1444' , widget = null;
  !!maybeChild && (widget = ($location_0[stackIndex] = 'HTMLTable.java:' + '1446' , $getWidget_2(this$static.widgetMap, maybeChild)));
  if (widget) {
    $location_0[stackIndex] = 'HTMLTable.java:' + '1450' , this$static.remove_0(widget);
    $stackDepth_0 = stackIndex - 1;
    return true;
  }
   else {
    clearInnerHTML && ($location_0[stackIndex] = 'Element.java:' + '614' , td.innerHTML = this$static.clearText || '' , undefined);
    $stackDepth_0 = stackIndex - 1;
    return false;
  }
  $stackDepth_0 = stackIndex - 1;
}

function $remove_22(this$static, widget){
  var elem, parent_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $remove_22;
  if (widget.parent_0 != this$static) {
    $stackDepth_0 = stackIndex - 1;
    return false;
  }
  $location_0[stackIndex] = 'Panel.java:' + '210' , $setParent(widget, null);
  $location_0[stackIndex] = 'HTMLTable.java:' + '1102' , elem = widget.element;
  $location_0[stackIndex] = 'Node.java:' + '285' , ($location_0[stackIndex] = 'DOMImpl.java:' + '236' , parent_0 = ($location_0[stackIndex] = 'Node.java:' + '184' , $clinit_81() , elem).parentNode , (!parent_0 || parent_0.nodeType != 1) && ($location_0[stackIndex] = 'DOMImpl.java:' + '238' , parent_0 = null) , parent_0).removeChild(elem);
  $location_0[stackIndex] = 'HTMLTable.java:' + '1106' , $removeWidgetByElement(this$static.widgetMap, elem);
  $stackDepth_0 = stackIndex - 1;
  return true;
}

function $removeRow_1(this$static, row){
  var column, columnCount, td, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $removeRow_1;
  $location_0[stackIndex] = 'HTMLTable.java:' + '1515' , $checkRowBounds_0(this$static, row);
  columnCount = ($location_0[stackIndex] = 'HTMLTable.java:' + '1516' , this$static.getCellCount(row));
  for ($location_0[stackIndex] = 'HTMLTable.java:' + '1517' , column = 0; column < columnCount; $location_0[stackIndex] = 'HTMLTable.java:' + '1517' , ++column) {
    td = ($location_0[stackIndex] = 'HTMLTable.java:' + '1288' , this$static.cellFormatter.getRawElement(row, column));
    $location_0[stackIndex] = 'HTMLTable.java:' + '1289' , this$static.internalClearCell(td, false);
  }
  $location_0[stackIndex] = 'Node.java:' + '285' , this$static.bodyElem.removeChild(($location_0[stackIndex] = 'HTMLTable.java:' + '1520' , this$static.rowFormatter.getRawElement_0(row)));
  $stackDepth_0 = stackIndex - 1;
}

function $setColumnFormatter_0(this$static, formatter){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setColumnFormatter_0;
  $location_0[stackIndex] = 'HTMLTable.java:' + '1551' , this$static.columnFormatter = formatter;
  $location_0[stackIndex] = 'HTMLTable.java:' + '1552' , $prepareColumnGroup_0(this$static.columnFormatter);
  $stackDepth_0 = stackIndex - 1;
}

function $setText_3(this$static, row, column, text){
  var td, td_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setText_3;
  $location_0[stackIndex] = 'HTMLTable.java:' + '1202' , this$static.prepareCell(row, column);
  $location_0[stackIndex] = 'HTMLTable.java:' + '1203' , td = (td_0 = ($location_0[stackIndex] = 'HTMLTable.java:' + '1288' , this$static.cellFormatter.getRawElement(row, column)) , ($location_0[stackIndex] = 'HTMLTable.java:' + '1289' , this$static.internalClearCell(td_0, text == null)) , td_0);
  text != null && $setInnerText_0(($location_0[stackIndex] = 'Element.java:' + '621' , $clinit_81() , td), text);
  $stackDepth_0 = stackIndex - 1;
}

function $setWidget_3(this$static, row, column, widget){
  var td, td_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setWidget_3;
  $location_0[stackIndex] = 'HTMLTable.java:' + '1227' , $prepareCell_1(this$static, row, column);
  if (widget) {
    $location_0[stackIndex] = 'HTMLTable.java:' + '1229' , $removeFromParent(widget);
    $location_0[stackIndex] = 'HTMLTable.java:' + '1232' , td = (td_0 = ($location_0[stackIndex] = 'HTMLTable.java:' + '1288' , this$static.cellFormatter.getRawElement(row, column)) , ($location_0[stackIndex] = 'HTMLTable.java:' + '1289' , this$static.internalClearCell(td_0, true)) , td_0);
    $location_0[stackIndex] = 'Element.java:' + '614' , td.innerHTML = '';
    $location_0[stackIndex] = 'HTMLTable.java:' + '1236' , $putWidget(this$static.widgetMap, widget);
    $location_0[stackIndex] = 'Node.java:' + '72' , td.appendChild(widget.element);
    $location_0[stackIndex] = 'Panel.java:' + '119' , $setParent(widget, this$static);
  }
  $stackDepth_0 = stackIndex - 1;
}

function clear_7(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = clear_7;
  $location_0[stackIndex] = 'HTMLTable.java:' + '837' , $clear_6(this);
  $stackDepth_0 = stackIndex - 1;
}

function createRow(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = createRow;
  returnTemp = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , ($location_0[stackIndex] = 'Document.java:' + '1063' , $clinit_81() , $doc).createElement('tr'));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getBodyElement_0(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getBodyElement_0;
  $stackDepth_0 = stackIndex - 1;
  return this.bodyElem;
}

function getClass_371(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_371;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_override_client_HTMLTable_2_classLit;
}

function getDOMCellCount(row){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getDOMCellCount;
  returnTemp = ($location_0[stackIndex] = 'HTMLTable.java:' + '1339' , this.bodyElem.rows[row]).cells.length;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getDOMRowCount(){
  var returnTemp, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getDOMRowCount;
  returnTemp = this.bodyElem.rows.length;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getRowIndex(rowElem){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getRowIndex;
  returnTemp = parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , rowElem['rowIndex'])) || 0;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function internalClearCell(td, clearInnerHTML){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = internalClearCell;
  returnTemp = ($location_0[stackIndex] = 'HTMLTable.java:' + '1442' , $internalClearCell_0(this, td, clearInnerHTML));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function iterator_18(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = iterator_18;
  returnTemp = $HTMLTable$WidgetMapper$1(($location_0[stackIndex] = 'HTMLTable.java:' + '724' , new HTMLTable$WidgetMapper$1), this.widgetMap);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function onBrowserEvent_6(event_0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onBrowserEvent_6;
  $location_0[stackIndex] = 'DOMImpl.java:' + '61' , $eventGetTypeInt(($location_0[stackIndex] = 'NativeEvent.java:' + '209' , $clinit_81() , event_0).type);
  $stackDepth_0 = stackIndex - 1;
}

function remove_26(widget){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = remove_26;
  returnTemp = ($location_0[stackIndex] = 'HTMLTable.java:' + '1092' , $remove_22(this, widget));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function HTMLTable_0(){
}

_ = HTMLTable_0.prototype = new Panel;
_.clear = clear_7;
_.createRow = createRow;
_.getBodyElement = getBodyElement_0;
_.getClass$ = getClass_371;
_.getDOMCellCount = getDOMCellCount;
_.getDOMRowCount = getDOMRowCount;
_.getRowIndex = getRowIndex;
_.internalClearCell = internalClearCell;
_.iterator_0 = iterator_18;
_.onBrowserEvent = onBrowserEvent_6;
_.remove_0 = remove_26;
_.typeId$ = 233;
_.bodyElem = null;
_.cellFormatter = null;
_.clearText = '';
_.columnFormatter = null;
_.rowFormatter = null;
_.tableElem = null;
function $getCellCount(this$static, row){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getCellCount;
  $location_0[stackIndex] = 'FlexTable.java:' + '151' , $checkRowBounds_0(this$static, row);
  returnTemp = ($location_0[stackIndex] = 'FlexTable.java:' + '152' , this$static.getDOMCellCount(row));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $getColumnIndex(this$static, row, column){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getColumnIndex;
  $location_0[stackIndex] = 'FlexTable.java:' + '165' , $checkCellBounds_0(this$static, row, column);
  returnTemp = ($location_0[stackIndex] = 'FlexTable.java:' + '166' , $getRawColumnIndex(this$static, row, column));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $getRawColumnIndex(this$static, row, column){
  var columnIndex, curCell, curRow, formatter, numCells, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $getRawColumnIndex;
  $location_0[stackIndex] = 'FlexTable.java:' + '308' , formatter = ($location_0[stackIndex] = 'FlexTable.java:' + '177' , dynamicCast(this$static.cellFormatter, 181));
  $location_0[stackIndex] = 'FlexTable.java:' + '309' , columnIndex = 0;
  for ($location_0[stackIndex] = 'FlexTable.java:' + '310' , curCell = 0; curCell < column; $location_0[stackIndex] = 'FlexTable.java:' + '310' , ++curCell) {
    $location_0[stackIndex] = 'FlexTable.java:' + '311' , columnIndex += parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , ($location_0[stackIndex] = 'HTMLTable.java:' + '89' , $checkCellBounds_0(formatter.this$0_0, row, curCell) , ($location_0[stackIndex] = 'HTMLTable.java:' + '90' , formatter.getRawElement(row, curCell)))['colSpan'])) || 0;
  }
  $location_0[stackIndex] = 'FlexTable.java:' + '315' , numCells = 0;
  for ($location_0[stackIndex] = 'FlexTable.java:' + '316' , curRow = 0; curRow < row; $location_0[stackIndex] = 'FlexTable.java:' + '316' , ++curRow) {
    $location_0[stackIndex] = 'FlexTable.java:' + '317' , numCells = ($location_0[stackIndex] = 'FlexTable.java:' + '151' , $checkRowBounds_0(this$static, curRow) , ($location_0[stackIndex] = 'FlexTable.java:' + '152' , this$static.getDOMCellCount(curRow)));
    for ($location_0[stackIndex] = 'FlexTable.java:' + '318' , curCell = 0; curCell < numCells; $location_0[stackIndex] = 'FlexTable.java:' + '318' , ++curCell) {
      curRow + (parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , ($location_0[stackIndex] = 'HTMLTable.java:' + '89' , $checkCellBounds_0(formatter.this$0_0, curRow, curCell) , ($location_0[stackIndex] = 'HTMLTable.java:' + '90' , formatter.getRawElement(curRow, curCell)))['rowSpan'])) || 0) - 1 >= row && ($location_0[stackIndex] = 'FlexTable.java:' + '320' , $getRawColumnIndex(this$static, curRow, curCell)) <= columnIndex && ($location_0[stackIndex] = 'FlexTable.java:' + '321' , columnIndex += parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , ($location_0[stackIndex] = 'HTMLTable.java:' + '89' , $checkCellBounds_0(formatter.this$0_0, curRow, curCell) , ($location_0[stackIndex] = 'HTMLTable.java:' + '90' , formatter.getRawElement(curRow, curCell)))['colSpan'])) || 0);
    }
  }
  $stackDepth_0 = stackIndex - 1;
  return columnIndex;
}

function $prepareCell_0(this$static, row, column){
  var cellCount, required, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $prepareCell_0;
  $location_0[stackIndex] = 'FlexTable.java:' + '262' , $prepareRow_0(this$static, row);
  if (column < 0) {
    throw $IndexOutOfBoundsException_0(($location_0[stackIndex] = 'FlexTable.java:' + '264' , new IndexOutOfBoundsException), 'Cannot create a column with a negative index: ' + column);
  }
  $location_0[stackIndex] = 'FlexTable.java:' + '269' , cellCount = ($location_0[stackIndex] = 'FlexTable.java:' + '151' , $checkRowBounds_0(this$static, row) , ($location_0[stackIndex] = 'FlexTable.java:' + '152' , this$static.getDOMCellCount(row)));
  $location_0[stackIndex] = 'FlexTable.java:' + '270' , required = column + 1 - cellCount;
  required > 0 && ($location_0[stackIndex] = 'FlexTable.java:' + '272' , this$static.addCells(row, required));
  $stackDepth_0 = stackIndex - 1;
}

function $prepareRow_0(this$static, row){
  var i, rowCount, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $prepareRow_0;
  if (row < 0) {
    throw $IndexOutOfBoundsException_0(($location_0[stackIndex] = 'FlexTable.java:' + '285' , new IndexOutOfBoundsException), 'Cannot create a row with a negative index: ' + row);
  }
  $location_0[stackIndex] = 'FlexTable.java:' + '290' , rowCount = ($location_0[stackIndex] = 'FlexTable.java:' + '187' , this$static.getDOMRowCount());
  for ($location_0[stackIndex] = 'FlexTable.java:' + '291' , i = rowCount; i <= row; $location_0[stackIndex] = 'FlexTable.java:' + '291' , ++i) {
    $location_0[stackIndex] = 'FlexTable.java:' + '292' , this$static.insertRow(i);
  }
  $stackDepth_0 = stackIndex - 1;
}

function addCells(table, row, num){
  var rowElem = ($location_0[stackIndex] = 'FlexTable.java:' + '116' , table.rows[row]), stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = addCells;
  for (var i = 0; i < num; $location_0[stackIndex] = 'FlexTable.java:' + '115' , i++) {
    var cell = ($location_0[stackIndex] = 'FlexTable.java:' + '118' , $doc.createElement('td'));
    $location_0[stackIndex] = 'FlexTable.java:' + '119' , cell['colSpan'] = 1;
    $location_0[stackIndex] = 'FlexTable.java:' + '120' , cell['rowSpan'] = 1;
    $location_0[stackIndex] = 'FlexTable.java:' + '121' , rowElem.appendChild(cell);
  }
  $stackDepth_0 = stackIndex - 1;
}

function addCells_0(row, num){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = addCells_0;
  $location_0[stackIndex] = 'FlexTable.java:' + '250' , addCells(this.bodyElem, row, num);
  $stackDepth_0 = stackIndex - 1;
}

function getCellCount(row){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getCellCount;
  returnTemp = ($location_0[stackIndex] = 'FlexTable.java:' + '151' , $checkRowBounds_0(this, row) , ($location_0[stackIndex] = 'FlexTable.java:' + '152' , this.getDOMCellCount(row)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getClass_372(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_372;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_override_client_FlexTable_2_classLit;
}

function getRowCount(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getRowCount;
  returnTemp = ($location_0[stackIndex] = 'FlexTable.java:' + '187' , this.getDOMRowCount());
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function insertRow(beforeRow){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = insertRow;
  returnTemp = ($location_0[stackIndex] = 'FlexTable.java:' + '209' , $insertRow(this, beforeRow));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function prepareCell(row, column){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = prepareCell;
  $location_0[stackIndex] = 'FlexTable.java:' + '261' , $prepareCell_0(this, row, column);
  $stackDepth_0 = stackIndex - 1;
}

function FlexTable(){
}

_ = FlexTable.prototype = new HTMLTable_0;
_.addCells = addCells_0;
_.getCellCount = getCellCount;
_.getClass$ = getClass_372;
_.getRowCount = getRowCount;
_.insertRow = insertRow;
_.prepareCell = prepareCell;
_.typeId$ = 234;
function $HTMLTable$CellFormatter_0(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $HTMLTable$CellFormatter_0;
  $location_0[stackIndex] = 'HTMLTable.java:' + '65' , this$static.this$0_0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $getElement(this$static, row, column){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getElement;
  $location_0[stackIndex] = 'HTMLTable.java:' + '89' , $checkCellBounds_0(this$static.this$0_0, row, column);
  returnTemp = ($location_0[stackIndex] = 'HTMLTable.java:' + '90' , this$static.getRawElement(row, column));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getClass_373(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_373;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_override_client_HTMLTable$CellFormatter_2_classLit;
}

function getRawElement(row, column){
  var out, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getRawElement;
  returnTemp = (out = ($location_0[stackIndex] = 'HTMLTable.java:' + '341' , this.this$0_0.bodyElem.rows[row]).cells[column] , out == null?null:out);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function HTMLTable$CellFormatter_0(){
}

_ = HTMLTable$CellFormatter_0.prototype = new Object_0;
_.getClass$ = getClass_373;
_.getRawElement = getRawElement;
_.typeId$ = 0;
_.this$0_0 = null;
function $FlexTable$FlexCellFormatter(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $FlexTable$FlexCellFormatter;
  $location_0[stackIndex] = 'HTMLTable.java:' + '65' , this$static.this$0_0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_374(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_374;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_override_client_FlexTable$FlexCellFormatter_2_classLit;
}

function setRowSpan(row, column, rowSpan){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = setRowSpan;
  $location_0[stackIndex] = 'Element.java:' + '658' , ($location_0[stackIndex] = 'HTMLTable.java:' + '288' , this.this$0_0.prepareCell(row, column) , ($location_0[stackIndex] = 'HTMLTable.java:' + '289' , this.getRawElement(row, column)))['rowSpan'] = rowSpan;
  $stackDepth_0 = stackIndex - 1;
}

function FlexTable$FlexCellFormatter(){
}

_ = FlexTable$FlexCellFormatter.prototype = new HTMLTable$CellFormatter_0;
_.getClass$ = getClass_374;
_.setRowSpan = setRowSpan;
_.typeId$ = 235;
function $createCell_0(){
  var td, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $createCell_0;
  $location_0[stackIndex] = 'Grid.java:' + '207' , td = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , ($location_0[stackIndex] = 'Document.java:' + '271' , $clinit_81() , $doc).createElement('td'));
  $location_0[stackIndex] = 'Element.java:' + '614' , td.innerHTML = '&nbsp;';
  $stackDepth_0 = stackIndex - 1;
  return td;
}

function $createRow_0(this$static){
  var i, tr, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $createRow_0;
  $location_0[stackIndex] = 'Grid.java:' + '217' , tr = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , ($location_0[stackIndex] = 'Document.java:' + '1063' , $clinit_81() , $doc).createElement('tr'));
  for ($location_0[stackIndex] = 'Grid.java:' + '218' , i = 0; i < this$static.numColumns; $location_0[stackIndex] = 'Grid.java:' + '218' , ++i) {
    $location_0[stackIndex] = 'Node.java:' + '72' , tr.appendChild(($location_0[stackIndex] = 'Grid.java:' + '219' , $createCell_0()));
  }
  $stackDepth_0 = stackIndex - 1;
  return tr;
}

function $prepareCell_1(this$static, row, column){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $prepareCell_1;
  $location_0[stackIndex] = 'Grid.java:' + '234' , $prepareRow_1(this$static, row);
  if (column < 0) {
    throw $IndexOutOfBoundsException_0(($location_0[stackIndex] = 'Grid.java:' + '236' , new IndexOutOfBoundsException), 'Cannot access a column with a negative index: ' + column);
  }
  if (column >= this$static.numColumns) {
    throw $IndexOutOfBoundsException_0(($location_0[stackIndex] = 'Grid.java:' + '241' , new IndexOutOfBoundsException), 'Column index: ' + column + ', Column size: ' + this$static.numColumns);
  }
  $stackDepth_0 = stackIndex - 1;
}

function $prepareRow_1(this$static, row){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $prepareRow_1;
  if (row < 0) {
    throw $IndexOutOfBoundsException_0(($location_0[stackIndex] = 'Grid.java:' + '280' , new IndexOutOfBoundsException), 'Cannot access a row with a negative index: ' + row);
  }
  if (row >= this$static.numRows) {
    throw $IndexOutOfBoundsException_0(($location_0[stackIndex] = 'Grid.java:' + '289' , new IndexOutOfBoundsException), 'Row index: ' + row + ', Row size: ' + this$static.numRows);
  }
  $stackDepth_0 = stackIndex - 1;
}

function $resize(this$static, rows, columns){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $resize;
  $location_0[stackIndex] = 'FixedWidthGrid.java:' + '220' , $resizeColumns_0(this$static, columns);
  $location_0[stackIndex] = 'FixedWidthGrid.java:' + '221' , $updateGhostRow(this$static);
  $location_0[stackIndex] = 'FixedWidthGrid.java:' + '465' , this$static.idealWidths = null;
  $location_0[stackIndex] = 'FixedWidthGrid.java:' + '227' , $resizeRows_0(this$static, rows);
  $location_0[stackIndex] = 'FixedWidthGrid.java:' + '465' , this$static.idealWidths = null;
  $stackDepth_0 = stackIndex - 1;
}

function $resizeColumns_0(this$static, columns){
  var i, j, td, tr, td_0, beforeTd, td_1, tr_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $resizeColumns_0;
  if (this$static.numColumns == columns) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  if (columns < 0) {
    throw $IndexOutOfBoundsException_0(($location_0[stackIndex] = 'Grid.java:' + '151' , new IndexOutOfBoundsException), 'Cannot set number of columns to ' + columns);
  }
  if (this$static.numColumns > columns) {
    for ($location_0[stackIndex] = 'Grid.java:' + '157' , i = 0; i < this$static.numRows; $location_0[stackIndex] = 'Grid.java:' + '157' , ++i) {
      for ($location_0[stackIndex] = 'Grid.java:' + '158' , j = this$static.numColumns - 1; j >= columns; $location_0[stackIndex] = 'Grid.java:' + '158' , --j) {
        $location_0[stackIndex] = 'HTMLTable.java:' + '1502' , $checkCellBounds_0(this$static, i, j);
        $location_0[stackIndex] = 'HTMLTable.java:' + '1503' , td = (td_0 = ($location_0[stackIndex] = 'HTMLTable.java:' + '1288' , this$static.cellFormatter.getRawElement(i, j)) , ($location_0[stackIndex] = 'HTMLTable.java:' + '1289' , this$static.internalClearCell(td_0, false)) , td_0);
        tr = ($location_0[stackIndex] = 'HTMLTable.java:' + '1504' , this$static.rowFormatter.getRawElement_0(i));
        $location_0[stackIndex] = 'Node.java:' + '285' , tr.removeChild(td);
      }
    }
  }
   else {
    for ($location_0[stackIndex] = 'Grid.java:' + '164' , i = 0; i < this$static.numRows; $location_0[stackIndex] = 'Grid.java:' + '164' , ++i) {
      for ($location_0[stackIndex] = 'Grid.java:' + '165' , j = this$static.numColumns; j < columns; $location_0[stackIndex] = 'Grid.java:' + '165' , ++j) {
        tr_0 = ($location_0[stackIndex] = 'HTMLTable.java:' + '1391' , $getElement_0(this$static.rowFormatter, i));
        td_1 = ($location_0[stackIndex] = 'HTMLTable.java:' + '1392' , $createCell_0());
        beforeTd = ($location_0[stackIndex] = 'HTMLTable.java:' + '1393' , this$static.cellFormatter.getRawElement(i, j));
        $location_0[stackIndex] = 'Node.java:' + '250' , tr_0.insertBefore(td_1, beforeTd);
      }
    }
  }
  $location_0[stackIndex] = 'Grid.java:' + '170' , this$static.numColumns = columns;
  $stackDepth_0 = stackIndex - 1;
}

function $resizeRows_0(this$static, rows){
  var i, tr, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $resizeRows_0;
  if (this$static.numRows == rows) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  if (rows < 0) {
    throw $IndexOutOfBoundsException_0(($location_0[stackIndex] = 'Grid.java:' + '184' , new IndexOutOfBoundsException), 'Cannot set number of rows to ' + rows);
  }
  if (this$static.numRows < rows) {
    tr = ($location_0[stackIndex] = 'Grid.java:' + '188' , $createRow_1(this$static));
    $location_0[stackIndex] = 'Node.java:' + '72' , this$static.bodyElem.appendChild(tr);
    for ($location_0[stackIndex] = 'Grid.java:' + '190' , i = this$static.numRows + 1; i < rows; $location_0[stackIndex] = 'Grid.java:' + '190' , ++i) {
      $location_0[stackIndex] = 'Node.java:' + '72' , this$static.bodyElem.appendChild(($location_0[stackIndex] = 'Node.java:' + '94' , tr.cloneNode(true)));
    }
    $location_0[stackIndex] = 'Grid.java:' + '193' , this$static.numRows = rows;
  }
   else {
    while (this$static.numRows > rows) {
      $location_0[stackIndex] = 'Grid.java:' + '197' , $removeRow_2(this$static, this$static.numRows - 1);
    }
  }
  $stackDepth_0 = stackIndex - 1;
}

function createRow_0(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = createRow_0;
  returnTemp = ($location_0[stackIndex] = 'Grid.java:' + '216' , $createRow_0(this));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getCellCount_0(row){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getCellCount_0;
  $stackDepth_0 = stackIndex - 1;
  return this.numColumns;
}

function getClass_375(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_375;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_override_client_Grid_2_classLit;
}

function getRowCount_0(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getRowCount_0;
  $stackDepth_0 = stackIndex - 1;
  return this.numRows;
}

function prepareCell_0(row, column){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = prepareCell_0;
  $location_0[stackIndex] = 'Grid.java:' + '232' , $prepareCell_1(this, row, column);
  $stackDepth_0 = stackIndex - 1;
}

function Grid_0(){
}

_ = Grid_0.prototype = new HTMLTable_0;
_.createRow = createRow_0;
_.getCellCount = getCellCount_0;
_.getClass$ = getClass_375;
_.getRowCount = getRowCount_0;
_.prepareCell = prepareCell_0;
_.typeId$ = 236;
_.numColumns = 0;
_.numRows = 0;
function $HTMLTable$ColumnFormatter_0(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $HTMLTable$ColumnFormatter_0;
  $location_0[stackIndex] = 'HTMLTable.java:' + '350' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $prepareColumnGroup_0(this$static){
  var childs, i, n, node, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $prepareColumnGroup_0;
  if (!this$static.columnGroup) {
    $location_0[stackIndex] = 'HTMLTable.java:' + '460' , childs = this$static.this$0.tableElem.childNodes;
    if (childs) {
      for ($location_0[stackIndex] = 'HTMLTable.java:' + '462' , i = 0 , n = childs.length; i < n; $location_0[stackIndex] = 'HTMLTable.java:' + '462' , ++i) {
        $location_0[stackIndex] = 'HTMLTable.java:' + '463' , node = ($location_0[stackIndex] = 'NodeList.java:' + '44' , childs[i]);
        if ($location_0[stackIndex] = 'HTMLTable.java:' + '464' , $equalsIgnoreCase(($location_0[stackIndex] = 'Element.java:' + '450' , $clinit_81() , node).tagName, 'colgroup')) {
          $location_0[stackIndex] = 'HTMLTable.java:' + '465' , this$static.columnGroup = node;
          $stackDepth_0 = stackIndex - 1;
          return;
        }
      }
    }
    $location_0[stackIndex] = 'HTMLTable.java:' + '470' , this$static.columnGroup = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , ($location_0[stackIndex] = 'Document.java:' + '271' , $clinit_81() , $doc).createElement('colgroup'));
    $location_0[stackIndex] = 'DOM.java:' + '929' , $insertChild(this$static.this$0.tableElem, this$static.columnGroup, 0);
    $location_0[stackIndex] = 'Node.java:' + '72' , this$static.columnGroup.appendChild(($location_0[stackIndex] = 'DOMImpl.java:' + '35' , $doc.createElement('col')));
  }
  $stackDepth_0 = stackIndex - 1;
}

function getClass_376(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_376;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_override_client_HTMLTable$ColumnFormatter_2_classLit;
}

function HTMLTable$ColumnFormatter_0(){
}

_ = HTMLTable$ColumnFormatter_0.prototype = new Object_0;
_.getClass$ = getClass_376;
_.typeId$ = 0;
_.columnGroup = null;
_.this$0 = null;
function $HTMLTable$RowFormatter_0(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $HTMLTable$RowFormatter_0;
  $location_0[stackIndex] = 'HTMLTable.java:' + '480' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $getElement_0(this$static, row){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getElement_0;
  $location_0[stackIndex] = 'HTMLTable.java:' + '502' , $checkRowBounds_0(this$static.this$0, row);
  returnTemp = ($location_0[stackIndex] = 'HTMLTable.java:' + '503' , this$static.getRawElement_0(row));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getClass_377(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_377;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_override_client_HTMLTable$RowFormatter_2_classLit;
}

function getRawElement_0(row){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getRawElement_0;
  returnTemp = ($location_0[stackIndex] = 'HTMLTable.java:' + '626' , this.this$0.bodyElem.rows[row]) || null;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function HTMLTable$RowFormatter_0(){
}

_ = HTMLTable$RowFormatter_0.prototype = new Object_0;
_.getClass$ = getClass_377;
_.getRawElement_0 = getRawElement_0;
_.typeId$ = 0;
_.this$0 = null;
function $HTMLTable$WidgetMapper(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $HTMLTable$WidgetMapper;
  this$static.widgetList = $ArrayList(($location_0[stackIndex] = 'HTMLTable.java:' + '673' , new ArrayList));
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $getWidget_2(this$static, elem){
  var index, index_0, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getWidget_2;
  $location_0[stackIndex] = 'HTMLTable.java:' + '682' , index = (index_0 = ($location_0[stackIndex] = 'HTMLTable.java:' + '663' , elem['__widgetID']) , index_0 == null?-1:index_0);
  if (index < 0) {
    $stackDepth_0 = stackIndex - 1;
    return null;
  }
  returnTemp = dynamicCast(($location_0[stackIndex] = 'HTMLTable.java:' + '686' , $get_5(this$static.widgetList, index)), 2);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $putWidget(this$static, widget){
  var index, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $putWidget;
  if (!this$static.freeList) {
    $location_0[stackIndex] = 'HTMLTable.java:' + '697' , index = this$static.widgetList.size_0;
    $location_0[stackIndex] = 'HTMLTable.java:' + '698' , $add_7(this$static.widgetList, widget);
  }
   else {
    $location_0[stackIndex] = 'HTMLTable.java:' + '700' , index = this$static.freeList.index_0;
    $location_0[stackIndex] = 'HTMLTable.java:' + '701' , $set_1(this$static.widgetList, index, widget);
    $location_0[stackIndex] = 'HTMLTable.java:' + '702' , this$static.freeList = this$static.freeList.next;
  }
  $location_0[stackIndex] = 'HTMLTable.java:' + '668' , widget.element['__widgetID'] = index;
  $stackDepth_0 = stackIndex - 1;
}

function $removeWidgetByElement(this$static, elem){
  var index, index_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $removeWidgetByElement;
  $location_0[stackIndex] = 'HTMLTable.java:' + '713' , index = (index_0 = ($location_0[stackIndex] = 'HTMLTable.java:' + '663' , elem['__widgetID']) , index_0 == null?-1:index_0);
  $location_0[stackIndex] = 'HTMLTable.java:' + '659' , elem['__widgetID'] = null;
  $location_0[stackIndex] = 'HTMLTable.java:' + '767' , $set_1(this$static.widgetList, index, null);
  this$static.freeList = $HTMLTable$WidgetMapper$FreeNode(($location_0[stackIndex] = 'HTMLTable.java:' + '768' , new HTMLTable$WidgetMapper$FreeNode), index, this$static.freeList);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_378(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_378;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_override_client_HTMLTable$WidgetMapper_2_classLit;
}

function HTMLTable$WidgetMapper(){
}

_ = HTMLTable$WidgetMapper.prototype = new Object_0;
_.getClass$ = getClass_378;
_.typeId$ = 0;
_.freeList = null;
function $HTMLTable$WidgetMapper$1(this$static, this$1){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $HTMLTable$WidgetMapper$1;
  $location_0[stackIndex] = 'HTMLTable.java:' + '724' , this$static.this$1 = this$1;
  $location_0[stackIndex] = 'HTMLTable.java:' + '728' , $findNext_0(this$static);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $findNext_0(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $findNext_0;
  while (($location_0[stackIndex] = 'HTMLTable.java:' + '756' , ++this$static.nextIndex) < this$static.this$1.widgetList.size_0) {
    if (($location_0[stackIndex] = 'HTMLTable.java:' + '757' , $get_5(this$static.this$1.widgetList, this$static.nextIndex)) != null) {
      $stackDepth_0 = stackIndex - 1;
      return;
    }
  }
  $stackDepth_0 = stackIndex - 1;
}

function getClass_379(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_379;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_override_client_HTMLTable$WidgetMapper$1_2_classLit;
}

function hasNext_12(){
  var returnTemp, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = hasNext_12;
  returnTemp = this.nextIndex < this.this$1.widgetList.size_0;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function next_13(){
  var result, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = next_13;
  if (this.nextIndex >= this.this$1.widgetList.size_0) {
    throw $NoSuchElementException(($location_0[stackIndex] = 'HTMLTable.java:' + '737' , new NoSuchElementException));
  }
  result = ($location_0[stackIndex] = 'HTMLTable.java:' + '739' , $get_5(this.this$1.widgetList, this.nextIndex));
  $location_0[stackIndex] = 'HTMLTable.java:' + '740' , this.lastIndex_0 = this.nextIndex;
  $location_0[stackIndex] = 'HTMLTable.java:' + '741' , $findNext_0(this);
  $stackDepth_0 = stackIndex - 1;
  return result;
}

function remove_27(){
  var w, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = remove_27;
  if (this.lastIndex_0 < 0) {
    throw $IllegalStateException(($location_0[stackIndex] = 'HTMLTable.java:' + '747' , new IllegalStateException));
  }
  w = dynamicCast(($location_0[stackIndex] = 'HTMLTable.java:' + '749' , $get_5(this.this$1.widgetList, this.lastIndex_0)), 2);
  $location_0[stackIndex] = 'HTMLTable.java:' + '751' , $removeFromParent(w);
  $location_0[stackIndex] = 'HTMLTable.java:' + '752' , this.lastIndex_0 = -1;
  $stackDepth_0 = stackIndex - 1;
}

function HTMLTable$WidgetMapper$1(){
}

_ = HTMLTable$WidgetMapper$1.prototype = new Object_0;
_.getClass$ = getClass_379;
_.hasNext = hasNext_12;
_.next_0 = next_13;
_.remove = remove_27;
_.typeId$ = 0;
_.lastIndex_0 = -1;
_.nextIndex = -1;
_.this$1 = null;
function $HTMLTable$WidgetMapper$FreeNode(this$static, index, next){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $HTMLTable$WidgetMapper$FreeNode;
  $location_0[stackIndex] = 'HTMLTable.java:' + '653' , this$static.index_0 = index;
  $location_0[stackIndex] = 'HTMLTable.java:' + '654' , this$static.next = next;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_380(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_380;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_override_client_HTMLTable$WidgetMapper$FreeNode_2_classLit;
}

function HTMLTable$WidgetMapper$FreeNode(){
}

_ = HTMLTable$WidgetMapper$FreeNode.prototype = new Object_0;
_.getClass$ = getClass_380;
_.typeId$ = 0;
_.index_0 = 0;
_.next = null;
function addClickHandler_5(handler){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = addClickHandler_5;
  returnTemp = ($location_0[stackIndex] = 'Caption.java:' + '133' , $addDomHandler(this, handler, ($location_0[stackIndex] = 'Caption.java:' + '133' , $clinit_126() , ($location_0[stackIndex] = 'ClickEvent.java:' + '27' , $clinit_126()) , TYPE_1)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

_ = Caption.prototype;
_.addClickHandler = addClickHandler_5;
function $DeckLayoutPanel(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $DeckLayoutPanel;
  $initWidget(this$static, $LayoutPanel(($location_0[stackIndex] = 'LayoutComposite.java:' + '45' , new LayoutPanel)));
  $location_0[stackIndex] = 'Element.java:' + '688' , this$static.element['className'] = 'mosaic-DeckLayoutPanel';
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $add_20(this$static, w){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $add_20;
  $location_0[stackIndex] = 'UIObject.java:' + '214' , w.element.style.display = 'none';
  $location_0[stackIndex] = 'DeckLayoutPanel.java:' + '58' , $add_25(($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.widget, 182)), w);
  $stackDepth_0 = stackIndex - 1;
}

function $getWidgetIndex_0(this$static, child){
  var parent_0, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getWidgetIndex_0;
  returnTemp = ($location_0[stackIndex] = 'ComplexPanel.java:' + '44' , $indexOf_1(($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.widget, 182)).children, ($location_0[stackIndex] = 'LayoutPanel.java:' + '477' , parent_0 = child.parent_0 , parent_0 != null && ($location_0[stackIndex] = 'Cast.java:' + '76' , canCast(parent_0.typeId$, 201))?parent_0:child)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $insert_4(this$static, w, beforeIndex){
  var layoutPanel, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $insert_4;
  $location_0[stackIndex] = 'DeckLayoutPanel.java:' + '126' , layoutPanel = ($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.widget, 182));
  $insert_6(layoutPanel, w, $FillLayoutData(($location_0[stackIndex] = 'DeckLayoutPanel.java:' + '127' , new FillLayoutData)), beforeIndex);
  $location_0[stackIndex] = 'UIObject.java:' + '214' , w.element.style.display = 'none';
  $stackDepth_0 = stackIndex - 1;
}

function $remove_23(this$static, w){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $remove_23;
  returnTemp = ($location_0[stackIndex] = 'DeckLayoutPanel.java:' + '157' , $remove_26(($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.widget, 182)), w));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $showWidget(this$static, index){
  var oldWidget, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $showWidget;
  $location_0[stackIndex] = 'DeckLayoutPanel.java:' + '176' , oldWidget = this$static.visibleWidget;
  $location_0[stackIndex] = 'DeckLayoutPanel.java:' + '177' , this$static.visibleWidget = ($location_0[stackIndex] = 'LayoutPanel.java:' + '490' , $getUnDecoratedWidget(($location_0[stackIndex] = 'ComplexPanel.java:' + '36' , $get_6(($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.widget, 182)).children, index))));
  if (oldWidget != this$static.visibleWidget) {
    $location_0[stackIndex] = 'DeckLayoutPanel.java:' + '179' , this$static.visibleWidget.setVisible(true);
    !!oldWidget && ($location_0[stackIndex] = 'DeckLayoutPanel.java:' + '181' , oldWidget.setVisible(false));
    $location_0[stackIndex] = 'LayoutComposite.java:' + '116' , $invalidate_1(($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.widget, 182)), null);
  }
  $stackDepth_0 = stackIndex - 1;
}

function getClass_386(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_386;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_DeckLayoutPanel_2_classLit;
}

function iterator_20(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = iterator_20;
  returnTemp = ($location_0[stackIndex] = 'LayoutPanel.java:' + '553' , $LayoutPanel$3(($location_0[stackIndex] = 'LayoutPanel.java:' + '553' , new LayoutPanel$3), ($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this.widget, 182))));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function remove_29(w){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = remove_29;
  returnTemp = ($location_0[stackIndex] = 'DeckLayoutPanel.java:' + '157' , $remove_26(($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this.widget, 182)), w));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function DeckLayoutPanel(){
}

_ = DeckLayoutPanel.prototype = new LayoutComposite;
_.getClass$ = getClass_386;
_.iterator_0 = iterator_20;
_.remove_0 = remove_29;
_.typeId$ = 242;
_.visibleWidget = null;
function $TabLayoutPanel(this$static, region, decorate, decorateBody){
  var layoutPanel, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $TabLayoutPanel;
  $initWidget(this$static, $LayoutPanel(($location_0[stackIndex] = 'LayoutComposite.java:' + '45' , new LayoutPanel)));
  this$static.deck = $DeckLayoutPanel(($location_0[stackIndex] = 'TabLayoutPanel.java:' + '114' , new DeckLayoutPanel));
  $location_0[stackIndex] = 'TabLayoutPanel.java:' + '136' , layoutPanel = ($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.widget, 182));
  $setLayout_0(layoutPanel, $BorderLayout(($location_0[stackIndex] = 'TabLayoutPanel.java:' + '137' , new BorderLayout)));
  $location_0[stackIndex] = 'LayoutPanel.java:' + '297' , layoutPanel.widgetSpacing = 0;
  decorate?region == ($location_0[stackIndex] = 'TabLayoutPanel.java:' + '65' , $clinit_719() , TOP)?(this$static.tabBar = $ScrollTabBar_0(($location_0[stackIndex] = 'TabLayoutPanel.java:' + '143' , new ScrollTabBar), true, false)):(this$static.tabBar = $ScrollTabBar_0(($location_0[stackIndex] = 'TabLayoutPanel.java:' + '145' , new ScrollTabBar), true, true)):(this$static.tabBar = $ScrollTabBar(($location_0[stackIndex] = 'TabLayoutPanel.java:' + '148' , new ScrollTabBar)));
  $location_0[stackIndex] = 'TabBar.java:' + '257' , add_15(this$static.tabBar.tabBar, this$static);
  setStyleName(($location_0[stackIndex] = 'UIObject.java:' + '449' , this$static.deck.getStyleElement()), 'mosaic-TabLayoutPanelBottom', true);
  !decorateBody && (setStyleName(this$static.deck.getStyleElement(), 'gwt-TabPanelBottom', true) , undefined);
  region == ($location_0[stackIndex] = 'TabLayoutPanel.java:' + '65' , $clinit_719() , TOP)?$add_26(layoutPanel, this$static.tabBar, ($location_0[stackIndex] = 'TabLayoutPanel.java:' + '160' , $BorderLayoutData_1(($location_0[stackIndex] = 'TabLayoutPanel.java:' + '160' , new BorderLayoutData), ($location_0[stackIndex] = 'BorderLayout.java:' + '199' , $clinit_780() , NORTH_0)))):$add_26(layoutPanel, this$static.tabBar, ($location_0[stackIndex] = 'TabLayoutPanel.java:' + '162' , $BorderLayoutData_1(($location_0[stackIndex] = 'TabLayoutPanel.java:' + '162' , new BorderLayoutData), ($location_0[stackIndex] = 'BorderLayout.java:' + '199' , $clinit_780() , SOUTH_0))));
  $add_26(layoutPanel, this$static.deck, $BorderLayoutData_0(($location_0[stackIndex] = 'TabLayoutPanel.java:' + '164' , new BorderLayoutData), decorateBody));
  $location_0[stackIndex] = 'Element.java:' + '688' , this$static.element['className'] = 'mosaic-TabLayoutPanel';
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $insert_5(this$static, widget, tabText, asHTML, beforeIndex){
  var idx, selection, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $insert_5;
  $location_0[stackIndex] = 'TabLayoutPanel.java:' + '348' , idx = ($location_0[stackIndex] = 'TabLayoutPanel.java:' + '318' , $getWidgetIndex_0(this$static.deck, widget));
  if (idx != -1) {
    $location_0[stackIndex] = 'TabLayoutPanel.java:' + '350' , $remove_24(this$static, widget);
    idx < beforeIndex && ($location_0[stackIndex] = 'TabLayoutPanel.java:' + '352' , --beforeIndex);
  }
  $location_0[stackIndex] = 'TabLayoutPanel.java:' + '356' , $insertTab_0(this$static.tabBar, tabText, asHTML, beforeIndex);
  $location_0[stackIndex] = 'TabLayoutPanel.java:' + '357' , $insert_4(this$static.deck, widget, beforeIndex);
  $location_0[stackIndex] = 'TabLayoutPanel.java:' + '359' , selection = ($location_0[stackIndex] = 'ScrollTabBar.java:' + '386' , $getSelectedTab(this$static.tabBar.tabBar));
  if (selection == -1 && this$static.tabBar.tabBar.panel.children.size_0 - 2 > 0) {
    $location_0[stackIndex] = 'TabLayoutPanel.java:' + '361' , selection = 0;
    $location_0[stackIndex] = 'ScrollTabBar.java:' + '477' , $selectTab(this$static.tabBar.tabBar, 0);
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  $stackDepth_0 = stackIndex - 1;
}

function $remove_24(this$static, widget){
  var index, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $remove_24;
  $location_0[stackIndex] = 'TabLayoutPanel.java:' + '479' , index = ($location_0[stackIndex] = 'TabLayoutPanel.java:' + '318' , $getWidgetIndex_0(this$static.deck, widget));
  if (index == -1) {
    $stackDepth_0 = stackIndex - 1;
    return false;
  }
  returnTemp = ($location_0[stackIndex] = 'TabLayoutPanel.java:' + '466' , $removeTab_0(this$static.tabBar, index) , ($location_0[stackIndex] = 'TabLayoutPanel.java:' + '467' , $remove_23(this$static.deck, widget)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getClass_389(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_389;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_TabLayoutPanel_2_classLit;
}

function iterator_21(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = iterator_21;
  returnTemp = $TabLayoutPanel$1(($location_0[stackIndex] = 'TabLayoutPanel.java:' + '405' , new TabLayoutPanel$1), this);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function onBeforeTabSelected(sender, tabIndex){
  var event_0, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = onBeforeTabSelected;
  event_0 = ($location_0[stackIndex] = 'TabLayoutPanel.java:' + '428' , fire_0(this, ($location_0[stackIndex] = 'TabLayoutPanel.java:' + '429' , valueOf_4(tabIndex))));
  returnTemp = !event_0 || !event_0.canceled;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function onTabSelected(sender, tabIndex){
  var lm, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onTabSelected;
  $location_0[stackIndex] = 'TabLayoutPanel.java:' + '438' , $showWidget(this.deck, tabIndex);
  lm = ($location_0[stackIndex] = 'TabLayoutPanel.java:' + '440' , getParent_0(this));
  lm?($location_0[stackIndex] = 'TabLayoutPanel.java:' + '442' , lm.layout_0()):($location_0[stackIndex] = 'LayoutComposite.java:' + '125' , ($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this.widget, 182)).layout_0());
  fire_4(this, ($location_0[stackIndex] = 'TabLayoutPanel.java:' + '447' , valueOf_4(tabIndex)));
  $stackDepth_0 = stackIndex - 1;
}

function remove_30(widget){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = remove_30;
  returnTemp = ($location_0[stackIndex] = 'TabLayoutPanel.java:' + '476' , $remove_24(this, widget));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function TabLayoutPanel(){
}

_ = TabLayoutPanel.prototype = new LayoutComposite;
_.getClass$ = getClass_389;
_.iterator_0 = iterator_21;
_.onBeforeTabSelected = onBeforeTabSelected;
_.onTabSelected = onTabSelected;
_.remove_0 = remove_30;
_.typeId$ = 245;
_.tabBar = null;
function getClass_390(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_390;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_DecoratedTabLayoutPanel_2_classLit;
}

function DecoratedTabLayoutPanel(){
}

_ = DecoratedTabLayoutPanel.prototype = new TabLayoutPanel;
_.getClass$ = getClass_390;
_.typeId$ = 246;
function $ImageButton(this$static, image){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ImageButton;
  $location_0[stackIndex] = 'ImageButton.java:' + '49' , $ImageButton_0(this$static, $Image_2(($location_0[stackIndex] = 'ClippedImagePrototype.java:' + '63' , new Image_0), image.url, image.left, image.top_0, image.width_0, image.height_0));
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $setImage(this$static, image){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setImage;
  $location_0[stackIndex] = 'ImageButton.java:' + '76' , $setWidget_2(($location_0[stackIndex] = 'WidgetWrapper.java:' + '67' , dynamicCast(($location_0[stackIndex] = 'ImageButton.java:' + '76' , dynamicCast(this$static.widget, 189)).widget, 190)), 0, 0, image);
  $stackDepth_0 = stackIndex - 1;
}

function addClickHandler_6(handler){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = addClickHandler_6;
  returnTemp = ($location_0[stackIndex] = 'ImageButton.java:' + '58' , $addDomHandler(this, handler, ($location_0[stackIndex] = 'ImageButton.java:' + '58' , $clinit_126() , ($location_0[stackIndex] = 'ClickEvent.java:' + '27' , $clinit_126()) , TYPE_1)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

_ = ImageButton.prototype;
_.addClickHandler = addClickHandler_6;
function $LayoutPanel_0(this$static, elem, layout){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $LayoutPanel_0;
  this$static.children = $WidgetCollection(($location_0[stackIndex] = 'ComplexPanel.java:' + '28' , new WidgetCollection), this$static);
  $location_0[stackIndex] = 'UIObject.java:' + '799' , this$static.element = elem;
  $location_0[stackIndex] = 'LayoutPanel.java:' + '124' , $$init_56(this$static);
  $location_0[stackIndex] = 'LayoutPanel.java:' + '129' , setStyleAttribute_0(this$static.element, 'position', 'relative');
  $location_0[stackIndex] = 'LayoutPanel.java:' + '130' , setStyleAttribute_0(this$static.element, 'overflow', 'hidden');
  $location_0[stackIndex] = 'Element.java:' + '688' , this$static.element['className'] = 'mosaic-LayoutPanel';
  $location_0[stackIndex] = 'LayoutPanel.java:' + '133' , $setLayout_0(this$static, layout);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $LayoutComposite$1(this$static, $anonymous0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $LayoutComposite$1;
  $LayoutPanel_0(this$static, $anonymous0, $FillLayout(($location_0[stackIndex] = 'LayoutPanel.java:' + '112' , new FillLayout)));
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_407(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_407;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_LayoutComposite$1_2_classLit;
}

function LayoutComposite$1(){
}

_ = LayoutComposite$1.prototype = new LayoutPanel;
_.getClass$ = getClass_407;
_.typeId$ = 262;
function $ListBox_1(this$static, columns){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ListBox_1;
  $initWidget(this$static, ($location_0[stackIndex] = 'LayoutComposite.java:' + '56' , $LayoutComposite$1(($location_0[stackIndex] = 'LayoutComposite.java:' + '56' , new LayoutComposite$1), ($location_0[stackIndex] = 'ListBox.java:' + '135' , $createFocusable()))));
  this$static.dataTable = $DataTable(($location_0[stackIndex] = 'ListBox.java:' + '97' , new DataTable));
  this$static.headerTable = $FixedWidthFlexTable(($location_0[stackIndex] = 'ListBox.java:' + '98' , new FixedWidthFlexTable));
  this$static.cellRenderer = ($location_0[stackIndex] = 'ListBox.java:' + '103' , new ListBox$1);
  this$static.rowsInModelOrder = $ArrayList(($location_0[stackIndex] = 'ListBox.java:' + '121' , new ArrayList));
  $setHeader_0(this$static, $ListHeader(($location_0[stackIndex] = 'ListBox.java:' + '137' , new ListHeader), columns));
  this$static.scrollTable = $ScrollTable2(($location_0[stackIndex] = 'ListBox.java:' + '139' , new ScrollTable2), this$static.dataTable, this$static.headerTable);
  $location_0[stackIndex] = 'ListBox.java:' + '140' , $setResizePolicy(this$static.scrollTable, ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '844' , $clinit_826() , FILL_WIDTH));
  $location_0[stackIndex] = 'ListBox.java:' + '141' , $setCellPadding(this$static.scrollTable, 3);
  $location_0[stackIndex] = 'ListBox.java:' + '142' , $setCellSpacing(this$static.scrollTable, 0);
  $location_0[stackIndex] = 'ListBox.java:' + '854' , $setSelectionPolicy_0(this$static.dataTable, ($location_0[stackIndex] = 'SelectionGrid.java:' + '127' , $clinit_857() , ONE_ROW));
  $location_0[stackIndex] = 'ListBox.java:' + '146' , $resize(this$static.dataTable, 0, this$static.dataTable.numColumns);
  $location_0[stackIndex] = 'ListBox.java:' + '148' , $add_25(($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.widget, 182)), this$static.scrollTable);
  $location_0[stackIndex] = 'ListBox.java:' + '152' , $sinkEvents(this$static, 2225);
  $location_0[stackIndex] = 'ListBox.java:' + '156' , setStyleAttribute_0(this$static.element, 'outline', '0px');
  $location_0[stackIndex] = 'Element.java:' + '576' , this$static.element.setAttribute('hideFocus', 'true');
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $checkIndex_0(this$static, index){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $checkIndex_0;
  if (index < 0 || index >= this$static.dataTable.numRows) {
    throw $IndexOutOfBoundsException(($location_0[stackIndex] = 'ListBox.java:' + '262' , new IndexOutOfBoundsException));
  }
  $stackDepth_0 = stackIndex - 1;
}

function $contentsChanged(this$static, event_0){
  var index0, index1, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $contentsChanged;
  if (this$static.dataModel == event_0.source_0) {
    $location_0[stackIndex] = 'ListBox.java:' + '311' , index0 = event_0.index0;
    index1 = event_0.index1;
    index1 < this$static.dataTable.numRows && index0 == index1 && ($location_0[stackIndex] = 'ListBox.java:' + '313' , ++index1);
    for (; index0 < index1; $location_0[stackIndex] = 'ListBox.java:' + '315' , ++index0) {
      index0 < this$static.dataTable.numRows?($location_0[stackIndex] = 'ListBox.java:' + '317' , $renderItemOnUpdate(this$static, index0, ($location_0[stackIndex] = 'Vector.java:' + '133' , $get_5(this$static.dataModel.list.list.arrayList, index0)))):($location_0[stackIndex] = 'ListBox.java:' + '319' , $renderItemOnInsert(this$static, ($location_0[stackIndex] = 'Vector.java:' + '133' , $get_5(this$static.dataModel.list.list.arrayList, index0)), -1));
    }
  }
  $stackDepth_0 = stackIndex - 1;
}

function $getItem_0(this$static, index){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getItem_0;
  $location_0[stackIndex] = 'ListBox.java:' + '381' , $checkIndex_0(this$static, index);
  returnTemp = ($location_0[stackIndex] = 'Element.java:' + '369' , ($location_0[stackIndex] = 'ListBox.java:' + '382' , $getElement_0(this$static.dataTable.rowFormatter, index))['data']) || null;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $getModel(this$static){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getModel;
  !this$static.dataModel && $setModel(this$static, $DefaultListModel(($location_0[stackIndex] = 'ListBox.java:' + '422' , new DefaultListModel)));
  returnTemp = this$static.dataModel;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $getSelectedIndex_0(this$static){
  var selection, outerIter, entry, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getSelectedIndex_0;
  if (this$static.dataTable.selectionEnabled) {
    $location_0[stackIndex] = 'ListBox.java:' + '447' , selection = ($location_0[stackIndex] = 'SelectionGrid.java:' + '272' , $keySet_1(this$static.dataTable.selectedRows));
    if (!!selection && ($location_0[stackIndex] = 'AbstractMap.java:' + '126' , selection.val$entrySet.size_1()) > 0) {
      returnTemp = ($location_0[stackIndex] = 'ListBox.java:' + '449' , dynamicCast((entry = dynamicCast(($location_0[stackIndex] = 'AbstractMap.java:' + '114' , (outerIter = ($location_0[stackIndex] = 'AbstractMap.java:' + '107' , selection.val$entrySet.iterator_0()) , $AbstractMap$1$1(($location_0[stackIndex] = 'AbstractMap.java:' + '108' , new AbstractMap$1$1), outerIter)).val$outerIter.next_0()), 87) , ($location_0[stackIndex] = 'AbstractMap.java:' + '115' , entry.getKey())), 82)).value_0;
      $stackDepth_0 = stackIndex - 1;
      return returnTemp;
    }
  }
  $stackDepth_0 = stackIndex - 1;
  return -1;
}

function $intervalAdded(this$static, event_0){
  var i, n, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $intervalAdded;
  if (this$static.dataModel == event_0.source_0) {
    for ($location_0[stackIndex] = 'ListBox.java:' + '275' , i = event_0.index0 , n = event_0.index1; i <= n && i >= 0; $location_0[stackIndex] = 'ListBox.java:' + '275' , ++i) {
      i < this$static.dataTable.numRows?($location_0[stackIndex] = 'ListBox.java:' + '277' , $renderItemOnInsert(this$static, ($location_0[stackIndex] = 'Vector.java:' + '133' , $get_5(this$static.dataModel.list.list.arrayList, i)), i)):($location_0[stackIndex] = 'ListBox.java:' + '279' , $renderItemOnInsert(this$static, ($location_0[stackIndex] = 'Vector.java:' + '133' , $get_5(this$static.dataModel.list.list.arrayList, i)), -1));
    }
  }
  $stackDepth_0 = stackIndex - 1;
}

function $intervalRemoved(this$static, event_0){
  var i, n, tr, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $intervalRemoved;
  if (this$static.dataModel == event_0.source_0) {
    for ($location_0[stackIndex] = 'ListBox.java:' + '294' , i = event_0.index1 , n = event_0.index0; i >= n && i >= 0; $location_0[stackIndex] = 'ListBox.java:' + '294' , --i) {
      $location_0[stackIndex] = 'ListBox.java:' + '648' , $checkIndex_0(this$static, i);
      tr = ($location_0[stackIndex] = 'ListBox.java:' + '650' , $getElement_0(this$static.dataTable.rowFormatter, i));
      $location_0[stackIndex] = 'Element.java:' + '678' , tr['data'] = null;
      $location_0[stackIndex] = 'ListBox.java:' + '653' , $removeRow_2(this$static.dataTable, i);
      $location_0[stackIndex] = 'ListBox.java:' + '654' , $remove_7(this$static.rowsInModelOrder, i);
    }
  }
  $stackDepth_0 = stackIndex - 1;
}

function $moveDown(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $moveDown;
  if ($location_0[stackIndex] = 'ListBox.java:' + '529' , $selectFirstItemIfNodeSelected(this$static)) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  $location_0[stackIndex] = 'ListBox.java:' + '532' , $selectNextItem_0(this$static);
  $stackDepth_0 = stackIndex - 1;
}

function $moveUp(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $moveUp;
  if ($location_0[stackIndex] = 'ListBox.java:' + '536' , $selectFirstItemIfNodeSelected(this$static)) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  $location_0[stackIndex] = 'ListBox.java:' + '539' , $selectPrevItem_0(this$static);
  $stackDepth_0 = stackIndex - 1;
}

function $renderItemOnInsert(this$static, item, index){
  var cellIndex, n, trElem, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $renderItemOnInsert;
  (index == -1 || index == this$static.dataTable.numRows) && ($location_0[stackIndex] = 'ListBox.java:' + '589' , index = this$static.dataTable.numRows);
  $location_0[stackIndex] = 'ListBox.java:' + '592' , $insertRow_1(this$static.dataTable, index);
  trElem = ($location_0[stackIndex] = 'ListBox.java:' + '595' , $getElement_0(this$static.dataTable.rowFormatter, index));
  $location_0[stackIndex] = 'Element.java:' + '678' , trElem['data'] = item;
  $location_0[stackIndex] = 'ListBox.java:' + '597' , $add_8(this$static.rowsInModelOrder, index, trElem);
  for ($location_0[stackIndex] = 'ListBox.java:' + '600' , cellIndex = 0 , n = this$static.dataTable.numColumns; cellIndex < n; $location_0[stackIndex] = 'ListBox.java:' + '600' , ++cellIndex) {
    $location_0[stackIndex] = 'ListBox.java:' + '601' , this$static.cellRenderer.renderCell(this$static, index, cellIndex, item);
  }
  $stackDepth_0 = stackIndex - 1;
}

function $renderItemOnUpdate(this$static, index, item){
  var cellIndex, n, trElem, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $renderItemOnUpdate;
  $location_0[stackIndex] = 'ListBox.java:' + '613' , $checkIndex_0(this$static, index);
  if (item == null) {
    throw $NullPointerException_0(($location_0[stackIndex] = 'ListBox.java:' + '616' , new NullPointerException), 'Cannot set an item to null');
  }
  trElem = ($location_0[stackIndex] = 'ListBox.java:' + '620' , $getElement_0(this$static.dataTable.rowFormatter, index));
  $location_0[stackIndex] = 'Element.java:' + '678' , trElem['data'] = item;
  for ($location_0[stackIndex] = 'ListBox.java:' + '624' , cellIndex = 0 , n = this$static.dataTable.numColumns; cellIndex < n; $location_0[stackIndex] = 'ListBox.java:' + '624' , ++cellIndex) {
    $location_0[stackIndex] = 'ListBox.java:' + '625' , this$static.cellRenderer.renderCell(this$static, index, cellIndex, item);
  }
  $stackDepth_0 = stackIndex - 1;
}

function $renderOnClear(this$static){
  var elem, elem$iterator, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $renderOnClear;
  for ($location_0[stackIndex] = 'ListBox.java:' + '633' , elem$iterator = $AbstractList$IteratorImpl(($location_0[stackIndex] = 'AbstractList.java:' + '278' , new AbstractList$IteratorImpl), this$static.rowsInModelOrder); elem$iterator.i < ($location_0[stackIndex] = 'AbstractList.java:' + '38' , elem$iterator.this$0.size_1());) {
    elem = dynamicCastJso(($location_0[stackIndex] = 'ListBox.java:' + '633' , $next_6(elem$iterator)));
    $location_0[stackIndex] = 'Element.java:' + '678' , elem['data'] = null;
  }
  $location_0[stackIndex] = 'ListBox.java:' + '637' , $resizeRows_1(this$static.dataTable, 0);
  $location_0[stackIndex] = 'ListBox.java:' + '638' , $clear_3(this$static.rowsInModelOrder);
  $stackDepth_0 = stackIndex - 1;
}

function $selectFirstItemIfNodeSelected(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $selectFirstItemIfNodeSelected;
  if (($location_0[stackIndex] = 'ListBox.java:' + '665' , $getSelectedIndex_0(this$static)) == -1) {
    $location_0[stackIndex] = 'ListBox.java:' + '886' , $checkIndex_0(this$static, 0);
    $location_0[stackIndex] = 'ListBox.java:' + '887' , $selectRow(this$static.dataTable, 0, true);
    $stackDepth_0 = stackIndex - 1;
    return true;
  }
  $stackDepth_0 = stackIndex - 1;
  return false;
}

function $selectNextItem_0(this$static){
  var index, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $selectNextItem_0;
  index = ($location_0[stackIndex] = 'ListBox.java:' + '673' , $getSelectedIndex_0(this$static));
  if (index == -1) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  if (index < this$static.dataTable.numRows - 1) {
    $setSelectedIndex_1(this$static, ($location_0[stackIndex] = 'ListBox.java:' + '679' , ++index));
  }
   else {
    $location_0[stackIndex] = 'ListBox.java:' + '886' , $checkIndex_0(this$static, 0);
    $location_0[stackIndex] = 'ListBox.java:' + '887' , $selectRow(this$static.dataTable, 0, true);
  }
  $location_0[stackIndex] = 'DOMImplOpera.java:' + '74' , ($location_0[stackIndex] = 'Element.java:' + '565' , $clinit_81() , ($location_0[stackIndex] = 'ListBox.java:' + '685' , $getElement_0(this$static.dataTable.rowFormatter, ($location_0[stackIndex] = 'ListBox.java:' + '686' , $getSelectedIndex_0(this$static)))).firstChild).scrollIntoView();
  $stackDepth_0 = stackIndex - 1;
}

function $selectPrevItem_0(this$static){
  var index, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $selectPrevItem_0;
  index = ($location_0[stackIndex] = 'ListBox.java:' + '690' , $getSelectedIndex_0(this$static));
  if (index == -1) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  index > 0?$setSelectedIndex_1(this$static, ($location_0[stackIndex] = 'ListBox.java:' + '696' , --index)):($location_0[stackIndex] = 'ListBox.java:' + '699' , $setSelectedIndex_1(this$static, this$static.dataTable.numRows - 1));
  $location_0[stackIndex] = 'DOMImplOpera.java:' + '74' , ($location_0[stackIndex] = 'Element.java:' + '565' , $clinit_81() , ($location_0[stackIndex] = 'ListBox.java:' + '702' , $getElement_0(this$static.dataTable.rowFormatter, ($location_0[stackIndex] = 'ListBox.java:' + '703' , $getSelectedIndex_0(this$static)))).firstChild).scrollIntoView();
  $stackDepth_0 = stackIndex - 1;
}

function $setHeader_0(this$static, listHeader){
  var column, event_0, size, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setHeader_0;
  while (this$static.headerTable.bodyElem.rows.length - 1 > 0) {
    $location_0[stackIndex] = 'ListBox.java:' + '223' , $removeRow_3(this$static.headerTable, this$static.headerTable.bodyElem.rows.length - 1 - 1);
  }
  if (listHeader.size_0 > 0) {
    for ($location_0[stackIndex] = 'ListBox.java:' + '227' , column = 0 , size = listHeader.size_0; column < size; $location_0[stackIndex] = 'ListBox.java:' + '227' , ++column) {
      $setHTML_2(this$static.headerTable, 0, column, ($location_0[stackIndex] = 'ListBox.java:' + '228' , dynamicCast(($location_0[stackIndex] = 'ArrayList.java:' + '157' , checkIndex(column, listHeader.size_0) , ($location_0[stackIndex] = 'ArrayList.java:' + '158' , listHeader.array[column])), 191)).name_0);
    }
    $location_0[stackIndex] = 'UIObject.java:' + '214' , this$static.headerTable.element.style.display = '';
    $location_0[stackIndex] = 'ListBox.java:' + '231' , $resizeColumns_1(this$static.dataTable, listHeader.size_0);
  }
   else {
    $location_0[stackIndex] = 'ListBox.java:' + '233' , $setText_7(this$static.headerTable, 0, 0, null);
    $location_0[stackIndex] = 'UIObject.java:' + '214' , this$static.headerTable.element.style.display = 'none';
    $location_0[stackIndex] = 'ListBox.java:' + '235' , $resizeColumns_1(this$static.dataTable, 1);
  }
  event_0 = ($location_0[stackIndex] = 'ListBox.java:' + '238' , $ListDataEvent(($location_0[stackIndex] = 'ListBox.java:' + '238' , new ListDataEvent), (!this$static.dataModel && $setModel(this$static, $DefaultListModel(($location_0[stackIndex] = 'ListBox.java:' + '422' , new DefaultListModel))) , this$static.dataModel), ($location_0[stackIndex] = 'ListDataEvent.java:' + '31' , $clinit_814() , CONTENTS_CHANGED), 0, (!this$static.dataModel && $setModel(this$static, $DefaultListModel(($location_0[stackIndex] = 'ListBox.java:' + '422' , new DefaultListModel))) , this$static.dataModel).list.list.arrayList.size_0));
  $location_0[stackIndex] = 'ListBox.java:' + '241' , $contentsChanged(this$static, event_0);
  $stackDepth_0 = stackIndex - 1;
}

function $setModel(this$static, dataModel){
  var i, n, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setModel;
  if (!dataModel) {
    throw $IllegalArgumentException_0(($location_0[stackIndex] = 'ListBox.java:' + '825' , new IllegalArgumentException), 'model must be non null');
  }
  if (this$static.dataModel == dataModel) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  if (this$static.dataModel) {
    $location_0[stackIndex] = 'AbstractListModel.java:' + '102' , $remove_8(this$static.dataModel.listenerList, this$static);
    $location_0[stackIndex] = 'SelectionGrid.java:' + '255' , $deselectAllRows(this$static.dataTable, true);
    $location_0[stackIndex] = 'ListBox.java:' + '833' , $renderOnClear(this$static);
  }
  $location_0[stackIndex] = 'ListBox.java:' + '836' , this$static.dataModel = dataModel;
  for ($location_0[stackIndex] = 'ListBox.java:' + '839' , i = 0 , n = dataModel.list.list.arrayList.size_0; i < n; $location_0[stackIndex] = 'ListBox.java:' + '839' , ++i) {
    $location_0[stackIndex] = 'ListBox.java:' + '840' , $renderItemOnInsert(this$static, ($location_0[stackIndex] = 'Vector.java:' + '133' , $get_5(dataModel.list.list.arrayList, i)), -1);
  }
  $location_0[stackIndex] = 'AbstractListModel.java:' + '38' , $add_7(this$static.dataModel.listenerList, this$static);
  $location_0[stackIndex] = 'LayoutComposite.java:' + '125' , ($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.widget, 182)).layout_0();
  $stackDepth_0 = stackIndex - 1;
}

function $setSelectedIndex_1(this$static, index){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setSelectedIndex_1;
  $location_0[stackIndex] = 'ListBox.java:' + '886' , $checkIndex_0(this$static, index);
  $location_0[stackIndex] = 'ListBox.java:' + '887' , $selectRow(this$static.dataTable, index, true);
  $stackDepth_0 = stackIndex - 1;
}

function $setText_5(this$static, row, column, text){
  var trElem, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setText_5;
  $location_0[stackIndex] = 'ListBox.java:' + '913' , $setText_6(this$static.dataTable, (trElem = dynamicCastJso(($location_0[stackIndex] = 'ListBox.java:' + '925' , $get_5(this$static.rowsInModelOrder, row))) , trElem.sectionRowIndex - 1), column, text);
  $stackDepth_0 = stackIndex - 1;
}

function $setWidget_5(this$static, row, column, widget){
  var trElem, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setWidget_5;
  $location_0[stackIndex] = 'ListBox.java:' + '921' , $setWidget_9(this$static.dataTable, (trElem = dynamicCastJso(($location_0[stackIndex] = 'ListBox.java:' + '925' , $get_5(this$static.rowsInModelOrder, row))) , trElem.sectionRowIndex - 1), column, widget);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_410(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_410;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_ListBox_2_classLit;
}

function onBrowserEvent_8(event_0){
  var keyCode, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onBrowserEvent_8;
  switch ($location_0[stackIndex] = 'DOMImpl.java:' + '61' , $eventGetTypeInt(($location_0[stackIndex] = 'NativeEvent.java:' + '209' , $clinit_81() , event_0).type)) {
    case 128:
      $location_0[stackIndex] = 'ListBox.java:' + '551' , keyCode = event_0.which || event_0.keyCode || 0;
      switch (keyCode) {
        case 38:
          $location_0[stackIndex] = 'ListBox.java:' + '554' , $moveUp(this);
          $location_0[stackIndex] = 'DOMImpl.java:' + '49' , event_0.cancelBubble = true;
          $location_0[stackIndex] = 'DOMImplStandard.java:' + '108' , event_0.preventDefault();
          break;
        case 40:
          $location_0[stackIndex] = 'ListBox.java:' + '558' , $moveDown(this);
          $location_0[stackIndex] = 'DOMImpl.java:' + '49' , event_0.cancelBubble = true;
          $location_0[stackIndex] = 'DOMImplStandard.java:' + '108' , event_0.preventDefault();
          break;
        case 37:
          $location_0[stackIndex] = 'DOMImplOpera.java:' + '74' , ($location_0[stackIndex] = 'ListBox.java:' + '562' , $getElement_0(this.dataTable.rowFormatter, ($location_0[stackIndex] = 'ListBox.java:' + '563' , $getSelectedIndex_0(this)))).firstChild.scrollIntoView();
          break;
        case 39:
          $location_0[stackIndex] = 'DOMImplOpera.java:' + '74' , ($location_0[stackIndex] = 'ListBox.java:' + '566' , $getElement_0(this.dataTable.rowFormatter, ($location_0[stackIndex] = 'ListBox.java:' + '567' , $getSelectedIndex_0(this)))).lastChild.scrollIntoView();
          break;
        default:$location_0[stackIndex] = 'Composite.java:' + '51' , $onBrowserEvent(this, event_0);
          $location_0[stackIndex] = 'Composite.java:' + '54' , this.widget.onBrowserEvent(event_0);
      }

      break;
    case 1:
      $location_0[stackIndex] = 'Element.java:' + '134' , this.element.focus();
    default:$location_0[stackIndex] = 'Composite.java:' + '51' , $onBrowserEvent(this, event_0);
      $location_0[stackIndex] = 'Composite.java:' + '54' , this.widget.onBrowserEvent(event_0);
  }
  $stackDepth_0 = stackIndex - 1;
}

function ListBox_0(){
}

_ = ListBox_0.prototype = new LayoutComposite;
_.getClass$ = getClass_410;
_.onBrowserEvent = onBrowserEvent_8;
_.typeId$ = 265;
_.dataModel = null;
_.scrollTable = null;
function getClass_411(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_411;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_ListBox$1_2_classLit;
}

function renderCell(listBox, row, column, item){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = renderCell;
  item != null && ($location_0[stackIndex] = 'Cast.java:' + '76' , canCast(item.typeId$, 2))?$setWidget_5(listBox, row, column, ($location_0[stackIndex] = 'ListBox.java:' + '106' , dynamicCast(item, 2))):$setText_5(listBox, row, column, ($location_0[stackIndex] = 'ListBox.java:' + '108' , toString__devirtual$(item)));
  $stackDepth_0 = stackIndex - 1;
}

function ListBox$1(){
}

_ = ListBox$1.prototype = new Object_0;
_.getClass$ = getClass_411;
_.renderCell = renderCell;
_.typeId$ = 0;
function $ListenerWrapper$WrapWindowPanelClose(this$static, listener){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ListenerWrapper$WrapWindowPanelClose;
  $location_0[stackIndex] = 'BaseListenerWrapper.java:' + '207' , this$static.listener = listener;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function add_27(windowPanel, listener){
  var handler, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = add_27;
  handler = $ListenerWrapper$WrapWindowPanelClose(($location_0[stackIndex] = 'ListenerWrapper.java:' + '80' , new ListenerWrapper$WrapWindowPanelClose), listener);
  $location_0[stackIndex] = 'WindowPanel.java:' + '433' , $addHandler_1(windowPanel, handler, ($location_0[stackIndex] = 'WindowPanel.java:' + '433' , $clinit_294() , ($location_0[stackIndex] = 'Window.java:' + '55' , $clinit_293()) , TYPE_18));
  $location_0[stackIndex] = 'PopupPanel.java:' + '466' , $addHandler_1(windowPanel, handler, TYPE_13?TYPE_13:(TYPE_13 = $GwtEvent$Type(($location_0[stackIndex] = 'CloseEvent.java:' + '66' , new GwtEvent$Type))));
  $stackDepth_0 = stackIndex - 1;
}

function getClass_412(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_412;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_ListenerWrapper$WrapWindowPanelClose_2_classLit;
}

function onClose_4(event_0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClose_4;
  $onWindowClosed(($location_0[stackIndex] = 'ListenerWrapper.java:' + '95' , dynamicCast(this.listener, 192)));
  $stackDepth_0 = stackIndex - 1;
}

function onWindowClosing(event_0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onWindowClosing;
  $location_0[stackIndex] = 'ListenerWrapper.java:' + '99' , dynamicCast(this.listener, 192);
  $stackDepth_0 = stackIndex - 1;
}

function ListenerWrapper$WrapWindowPanelClose(){
}

_ = ListenerWrapper$WrapWindowPanelClose.prototype = new BaseListenerWrapper;
_.getClass$ = getClass_412;
_.onClose = onClose_4;
_.onWindowClosing = onWindowClosing;
_.typeId$ = 266;
function $WindowPanel(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $WindowPanel;
  $location_0[stackIndex] = 'WindowPanel.java:' + '271' , $clinit_675();
  $location_0[stackIndex] = 'WindowPanel.java:' + '302' , $WindowPanel_2(this$static, ($location_0[stackIndex] = 'WindowPanel.java:' + '302' , $clinit_425() , ($location_0[stackIndex] = 'RootPanel.java:' + '151' , get_1(null))), null, true, false);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $PopupMenu(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $PopupMenu;
  $location_0[stackIndex] = 'PopupMenu.java:' + '41' , $AbstractDecoratedPopupPanel(this$static, true, false, 'menuPopup', ($location_0[stackIndex] = 'AbstractDecoratedPopupPanel.java:' + '37' , $clinit_339() , ONE_WAY_CORNER));
  this$static.menu = $PopupMenu$1(($location_0[stackIndex] = 'PopupMenu.java:' + '42' , new PopupMenu$1), true);
  $location_0[stackIndex] = 'MenuBar.java:' + '730' , this$static.menu.autoOpen = true;
  $location_0[stackIndex] = 'PopupMenu.java:' + '73' , $add_3(this$static, this$static.menu);
  $location_0[stackIndex] = 'PopupPanel.java:' + '744' , this$static.isAnimationEnabled = true;
  $location_0[stackIndex] = 'PopupMenu.java:' + '75' , $sinkEvents(this$static, 1);
  $location_0[stackIndex] = 'Element.java:' + '688' , ($location_0[stackIndex] = 'PopupPanel.java:' + '1008' , $getStyleElement_1($getFirstChildElement_0(($location_0[stackIndex] = 'Element.java:' + '241' , $clinit_81() , this$static.element))))['className'] = 'gwt-MenuBarPopup';
  $location_0[stackIndex] = 'Style.java:' + '1449' , this$static.element.style['zIndex'] = '2.147483647E9';
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_423(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_423;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_PopupMenu_2_classLit;
}

function onBrowserEvent_9(event_0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onBrowserEvent_9;
  $location_0[stackIndex] = 'PopupMenu.java:' + '215' , $onBrowserEvent(this, event_0);
  ($location_0[stackIndex] = 'DOMImpl.java:' + '61' , $eventGetTypeInt(($location_0[stackIndex] = 'NativeEvent.java:' + '209' , $clinit_81() , event_0).type)) == 1 && ($location_0[stackIndex] = 'PopupPanel.java:' + '571' , $hide_0(this));
  $stackDepth_0 = stackIndex - 1;
}

function setAnimationEnabled_0(b){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = setAnimationEnabled_0;
  $location_0[stackIndex] = 'PopupPanel.java:' + '744' , this.isAnimationEnabled = true;
  $stackDepth_0 = stackIndex - 1;
}

function PopupMenu(){
}

_ = PopupMenu.prototype = new AbstractDecoratedPopupPanel;
_.getClass$ = getClass_423;
_.onBrowserEvent = onBrowserEvent_9;
_.setAnimationEnabled = setAnimationEnabled_0;
_.typeId$ = 277;
_.menu = null;
function $PopupMenu$1(this$static, $anonymous0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $PopupMenu$1;
  this$static.allItems = $ArrayList(($location_0[stackIndex] = 'MenuBar.java:' + '178' , new ArrayList));
  this$static.items = $ArrayList(($location_0[stackIndex] = 'MenuBar.java:' + '183' , new ArrayList));
  $location_0[stackIndex] = 'MenuBar.java:' + '233' , $init_2(this$static, $anonymous0, ($location_0[stackIndex] = 'MenuBar.java:' + '234' , create_1((!menuBarSubMenuIcon && (menuBarSubMenuIcon = ($location_0[stackIndex] = 'com_google_gwt_user_client_ui_MenuBar_Resources_default_InlineClientBundleGenerator.java:' + '9' , $ImageResourcePrototype(($location_0[stackIndex] = 'com_google_gwt_user_client_ui_MenuBar_Resources_default_InlineClientBundleGenerator.java:' + '9' , new ImageResourcePrototype), ($location_0[stackIndex] = 'com_google_gwt_user_client_ui_MenuBar_Resources_default_InlineClientBundleGenerator.java:' + '11' , $clinit_223() , 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAJCAYAAAD6reaeAAAAI0lEQVR42mNgYGD4z4AF/Mcm8R+bxH9sEv+xSRBUSdh2FAAAXN8Y6EbBLKwAAAAASUVORK5CYII='), 0, 0, 5, 9))) , menuBarSubMenuIcon))));
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_424(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_424;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_PopupMenu$1_2_classLit;
}

function onBrowserEvent_10(event_0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onBrowserEvent_10;
  $location_0[stackIndex] = 'DOMImpl.java:' + '61' , $eventGetTypeInt(($location_0[stackIndex] = 'NativeEvent.java:' + '209' , $clinit_81() , event_0).type);
  $location_0[stackIndex] = 'PopupMenu.java:' + '69' , $onBrowserEvent_1(this, event_0);
  $stackDepth_0 = stackIndex - 1;
}

function PopupMenu$1(){
}

_ = PopupMenu$1.prototype = new MenuBar;
_.getClass$ = getClass_424;
_.onBrowserEvent = onBrowserEvent_10;
_.typeId$ = 278;
function $ScrollLayoutPanel(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ScrollLayoutPanel;
  $ScrollLayoutPanel_0(this$static, ($location_0[stackIndex] = 'ScrollLayoutPanel.java:' + '52' , $BoxLayout_1(($location_0[stackIndex] = 'ScrollLayoutPanel.java:' + '52' , new BoxLayout), ($location_0[stackIndex] = 'BoxLayout.java:' + '170' , $clinit_787() , VERTICAL))));
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $ScrollLayoutPanel_0(this$static, layout){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ScrollLayoutPanel_0;
  $location_0[stackIndex] = 'ScrollLayoutPanel.java:' + '62' , $LayoutPanel_1(this$static, layout);
  $location_0[stackIndex] = 'ScrollLayoutPanel.java:' + '195' , setStyleAttribute_0(this$static.element, 'overflow', 'auto');
  $location_0[stackIndex] = 'ScrollLayoutPanel.java:' + '66' , setStyleAttribute_0(this$static.element, 'position', 'relative');
  $location_0[stackIndex] = 'ScrollLayoutPanel.java:' + '70' , setStyleAttribute_0(this$static.element, 'zoom', '1');
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_425(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_425;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_ScrollLayoutPanel_2_classLit;
}

function layout_6(){
  var elem, size1, size2, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = layout_6;
  $location_0[stackIndex] = 'ScrollLayoutPanel.java:' + '130' , elem = this.element;
  size1 = $Dimension_1(($location_0[stackIndex] = 'ScrollLayoutPanel.java:' + '132' , new Dimension), elem.clientWidth, elem.clientHeight);
  $location_0[stackIndex] = 'ScrollLayoutPanel.java:' + '135' , $layout_3(this);
  size2 = $Dimension_1(($location_0[stackIndex] = 'ScrollLayoutPanel.java:' + '137' , new Dimension), elem.clientWidth, elem.clientHeight);
  !($location_0[stackIndex] = 'ScrollLayoutPanel.java:' + '140' , $equals_6(size1, size2)) && ($location_0[stackIndex] = 'ScrollLayoutPanel.java:' + '143' , $layout_3(this));
  $stackDepth_0 = stackIndex - 1;
}

function onLayout_0(){
}

function ScrollLayoutPanel(){
}

_ = ScrollLayoutPanel.prototype = new LayoutPanel;
_.getClass$ = getClass_425;
_.layout_0 = layout_6;
_.onLayout = onLayout_0;
_.typeId$ = 279;
function $ScrollTabBar(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ScrollTabBar;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '178' , $ScrollTabBar_0(this$static, false, false);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $ScrollTabBar_0(this$static, decorated, atBottom){
  var layoutPanel, wrapper, wrapperElem, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ScrollTabBar_0;
  $initWidget(this$static, ($location_0[stackIndex] = 'LayoutComposite.java:' + '66' , $LayoutPanel_1(($location_0[stackIndex] = 'LayoutComposite.java:' + '66' , new LayoutPanel), ($location_0[stackIndex] = 'ScrollTabBar.java:' + '186' , $BoxLayout_0(($location_0[stackIndex] = 'ScrollTabBar.java:' + '186' , new BoxLayout), atBottom?($location_0[stackIndex] = 'BoxLayout.java:' + '166' , $clinit_786() , START):($clinit_786() , END))))));
  this$static.tabs = $ArrayList(($location_0[stackIndex] = 'ScrollTabBar.java:' + '124' , new ArrayList));
  this$static.scrollLeftBtnTimer = $ScrollTabBar$1(($location_0[stackIndex] = 'ScrollTabBar.java:' + '151' , new ScrollTabBar$1), this$static);
  this$static.scrollRightBtnTimer = $ScrollTabBar$2(($location_0[stackIndex] = 'ScrollTabBar.java:' + '164' , new ScrollTabBar$2), this$static);
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '188' , layoutPanel = ($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.widget, 182));
  $location_0[stackIndex] = 'LayoutPanel.java:' + '289' , setStyleAttribute_0(layoutPanel.element, 'padding', '0px');
  $location_0[stackIndex] = 'LayoutPanel.java:' + '297' , layoutPanel.widgetSpacing = 0;
  decorated?atBottom?(this$static.tabBar = $ScrollTabBar$3(($location_0[stackIndex] = 'ScrollTabBar.java:' + '194' , new ScrollTabBar$3), this$static)):(this$static.tabBar = $ScrollTabBar$4(($location_0[stackIndex] = 'ScrollTabBar.java:' + '208' , new ScrollTabBar$4), this$static)):(this$static.tabBar = $ScrollTabBar$5(($location_0[stackIndex] = 'ScrollTabBar.java:' + '223' , new ScrollTabBar$5), this$static));
  $addHandler_1(this$static.tabBar, $ScrollTabBar$6(($location_0[stackIndex] = 'ScrollTabBar.java:' + '238' , new ScrollTabBar$6), this$static), ($location_0[stackIndex] = 'TabBar.java:' + '220' , getType_11()));
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '249' , this$static.tabBarWrapper = (wrapper = $ScrollTabBar$14(($location_0[stackIndex] = 'ScrollTabBar.java:' + '371' , new ScrollTabBar$14), this$static) , ($location_0[stackIndex] = 'ScrollTabBar.java:' + '377' , wrapperElem = wrapper.element) , ($location_0[stackIndex] = 'Style.java:' + '1449' , wrapperElem.style['margin'] = '0') , wrapperElem.style['border'] = '0' , wrapperElem.style['padding'] = '0' , ($location_0[stackIndex] = 'Element.java:' + '688' , wrapper.element['className'] = 'tabBarWrapper') , wrapper);
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '250' , $add_1(this$static.tabBarWrapper, this$static.tabBar);
  this$static.navBar = $HorizontalPanel(($location_0[stackIndex] = 'ScrollTabBar.java:' + '252' , new HorizontalPanel));
  setStyleName(($location_0[stackIndex] = 'UIObject.java:' + '449' , this$static.navBar.getStyleElement()), 'mosaic-ScrollTabBar-NavBar', true);
  $location_0[stackIndex] = 'UIObject.java:' + '214' , this$static.navBar.element.style.display = 'none';
  this$static.scrollLeftBtn = ($location_0[stackIndex] = 'ScrollTabBar.java:' + '255' , $Button_1(($location_0[stackIndex] = 'ScrollTabBar.java:' + '255' , new Button), ($location_0[stackIndex] = 'ScrollTabBar.java:' + '255' , $getHTML_0(($clinit_640() , ($location_0[stackIndex] = 'CaptionImages_generatedBundle.java:' + '17' , $clinit_642()) , toolArrowLeft_SINGLETON))), $ScrollTabBar$7(($location_0[stackIndex] = 'ScrollTabBar.java:' + '256' , new ScrollTabBar$7), this$static)));
  $location_0[stackIndex] = 'FocusWidget.java:' + '136' , $addDomHandler(this$static.scrollLeftBtn, $ScrollTabBar$8(($location_0[stackIndex] = 'ScrollTabBar.java:' + '263' , new ScrollTabBar$8), this$static), ($location_0[stackIndex] = 'FocusWidget.java:' + '136' , $clinit_165() , ($location_0[stackIndex] = 'MouseDownEvent.java:' + '27' , $clinit_165()) , TYPE_7));
  $location_0[stackIndex] = 'FocusWidget.java:' + '162' , $addDomHandler(this$static.scrollLeftBtn, $ScrollTabBar$9(($location_0[stackIndex] = 'ScrollTabBar.java:' + '269' , new ScrollTabBar$9), this$static), ($location_0[stackIndex] = 'FocusWidget.java:' + '162' , $clinit_173() , ($location_0[stackIndex] = 'MouseUpEvent.java:' + '27' , $clinit_173()) , TYPE_11));
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '275' , $add_5(this$static.navBar, this$static.scrollLeftBtn);
  this$static.scrollRightBtn = ($location_0[stackIndex] = 'ScrollTabBar.java:' + '277' , $Button_1(($location_0[stackIndex] = 'ScrollTabBar.java:' + '277' , new Button), $getHTML_0(toolArrowRight_SINGLETON), $ScrollTabBar$10(($location_0[stackIndex] = 'ScrollTabBar.java:' + '278' , new ScrollTabBar$10), this$static)));
  $location_0[stackIndex] = 'FocusWidget.java:' + '136' , $addDomHandler(this$static.scrollRightBtn, $ScrollTabBar$11(($location_0[stackIndex] = 'ScrollTabBar.java:' + '285' , new ScrollTabBar$11), this$static), TYPE_7);
  $location_0[stackIndex] = 'FocusWidget.java:' + '162' , $addDomHandler(this$static.scrollRightBtn, $ScrollTabBar$12(($location_0[stackIndex] = 'ScrollTabBar.java:' + '291' , new ScrollTabBar$12), this$static), TYPE_11);
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '297' , $add_5(this$static.navBar, this$static.scrollRightBtn);
  this$static.tabBarMenuBtn = ($location_0[stackIndex] = 'ScrollTabBar.java:' + '299' , $Button_1(($location_0[stackIndex] = 'ScrollTabBar.java:' + '299' , new Button), $getHTML_0(toolArrowDown_SINGLETON), $ScrollTabBar$13(($location_0[stackIndex] = 'ScrollTabBar.java:' + '300' , new ScrollTabBar$13), this$static)));
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '334' , $add_5(this$static.navBar, this$static.tabBarMenuBtn);
  $add_26(layoutPanel, this$static.tabBarWrapper, ($location_0[stackIndex] = 'ScrollTabBar.java:' + '336' , $BoxLayoutData_4(($location_0[stackIndex] = 'ScrollTabBar.java:' + '336' , new BoxLayoutData), ($location_0[stackIndex] = 'BoxLayoutData.java:' + '30' , $clinit_789() , HORIZONTAL_0))));
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '337' , $add_25(layoutPanel, this$static.navBar);
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '339' , setStyleAttribute_0(this$static.tabBarWrapper.element, 'overflow', 'hidden');
  $location_0[stackIndex] = 'UIObject.java:' + '449' , setStyleName(this$static.element, 'mosaic-ScrollTabBar', true);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $insertTab_0(this$static, tabText, asHTML, beforeIndex){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $insertTab_0;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '403' , $insertTab(this$static.tabBar, tabText, asHTML, beforeIndex);
  $location_0[stackIndex] = 'LayoutComposite.java:' + '116' , $invalidate_1(($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.widget, 182)), null);
  $stackDepth_0 = stackIndex - 1;
}

function $removeTab_0(this$static, index){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $removeTab_0;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '464' , this$static.tabBar.removeTab(index);
  $location_0[stackIndex] = 'LayoutComposite.java:' + '116' , $invalidate_1(($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.widget, 182)), null);
  $stackDepth_0 = stackIndex - 1;
}

function $toggleNavBarVisibility(this$static, visible){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $toggleNavBarVisibility;
  $location_0[stackIndex] = 'UIObject.java:' + '214' , this$static.navBar.element.style.display = visible?'':'none';
  addCommand($ScrollTabBar$16(($location_0[stackIndex] = 'ScrollTabBar.java:' + '454' , new ScrollTabBar$16), this$static));
  $stackDepth_0 = stackIndex - 1;
}

function $updateNavBarState(this$static){
  var scrollLeft, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $updateNavBarState;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '485' , scrollLeft = ($location_0[stackIndex] = 'Element.java:' + '398' , $clinit_81() , this$static.tabBarWrapper.element).scrollLeft || 0;
  $location_0[stackIndex] = 'Element.java:' + '638' , this$static.scrollLeftBtn.element['disabled'] = !(scrollLeft > 0);
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '487' , $setEnabled(this$static.scrollRightBtn, scrollLeft < (parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , this$static.tabBar.element['offsetWidth'])) || 0) - (parseInt(this$static.tabBarWrapper.element['offsetWidth']) || 0));
  $stackDepth_0 = stackIndex - 1;
}

function getClass_426(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_426;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_ScrollTabBar_2_classLit;
}

function layout_7(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = layout_7;
  $location_0[stackIndex] = 'LayoutComposite.java:' + '125' , ($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this.widget, 182)).layout_0();
  addCommand($ScrollTabBar$15(($location_0[stackIndex] = 'ScrollTabBar.java:' + '425' , new ScrollTabBar$15), this));
  $stackDepth_0 = stackIndex - 1;
}

function ScrollTabBar(){
}

_ = ScrollTabBar.prototype = new LayoutComposite;
_.getClass$ = getClass_426;
_.layout_0 = layout_7;
_.typeId$ = 280;
_.navBar = null;
_.scrollLeftBtn = null;
_.scrollLeftBtnDown = false;
_.scrollRightBtn = null;
_.scrollRightBtnDown = false;
_.tabBar = null;
_.tabBarMenuBtn = null;
_.tabBarWrapper = null;
var scrollAnimation = null;
function $clinit_691(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_691;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '151' , $clinit_691 = nullMethod;
  $clinit_43();
  $stackDepth_0 = stackIndex - 1;
}

function $ScrollTabBar$1(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ScrollTabBar$1;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '151' , $clinit_691();
  this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_427(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_427;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_ScrollTabBar$1_2_classLit;
}

function run_6(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = run_6;
  !($location_0[stackIndex] = 'Element.java:' + '329' , this.this$0.scrollLeftBtn.element['disabled']) && this.this$0.scrollLeftBtnDown?($location_0[stackIndex] = 'DOMImpl.java:' + '25' , ($location_0[stackIndex] = 'ButtonElement.java:' + '44' , $clinit_81() , this.this$0.scrollLeftBtn.element).click() , undefined):($location_0[stackIndex] = 'ScrollTabBar.java:' + '157' , $cancel_0(this));
  $stackDepth_0 = stackIndex - 1;
}

function ScrollTabBar$1(){
}

_ = ScrollTabBar$1.prototype = new Timer;
_.getClass$ = getClass_427;
_.run = run_6;
_.typeId$ = 281;
_.this$0 = null;
function $ScrollTabBar$10(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ScrollTabBar$10;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '278' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_428(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_428;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_ScrollTabBar$10_2_classLit;
}

function onClick_4(event_0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClick_4;
  !scrollAnimation && (scrollAnimation = ($location_0[stackIndex] = 'ScrollTabBar.java:' + '366' , new ScrollTabBar$ScrollAnimation));
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '281' , $scrollTabBar(scrollAnimation, this.this$0, 32, true);
  $stackDepth_0 = stackIndex - 1;
}

function ScrollTabBar$10(){
}

_ = ScrollTabBar$10.prototype = new Object_0;
_.getClass$ = getClass_428;
_.onClick = onClick_4;
_.typeId$ = 282;
_.this$0 = null;
function $ScrollTabBar$11(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ScrollTabBar$11;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '285' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_429(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_429;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_ScrollTabBar$11_2_classLit;
}

function onMouseDown_1(event_0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onMouseDown_1;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '287' , this.this$0.scrollRightBtnDown = true;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '288' , $scheduleRepeating(this.this$0.scrollRightBtnTimer, 333);
  $stackDepth_0 = stackIndex - 1;
}

function ScrollTabBar$11(){
}

_ = ScrollTabBar$11.prototype = new Object_0;
_.getClass$ = getClass_429;
_.onMouseDown = onMouseDown_1;
_.typeId$ = 283;
_.this$0 = null;
function $ScrollTabBar$12(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ScrollTabBar$12;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '291' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_430(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_430;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_ScrollTabBar$12_2_classLit;
}

function onMouseUp_1(event_0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onMouseUp_1;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '293' , this.this$0.scrollRightBtnDown = false;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '294' , $cancel_0(this.this$0.scrollRightBtnTimer);
  $stackDepth_0 = stackIndex - 1;
}

function ScrollTabBar$12(){
}

_ = ScrollTabBar$12.prototype = new Object_0;
_.getClass$ = getClass_430;
_.onMouseUp = onMouseUp_1;
_.typeId$ = 284;
_.this$0 = null;
function $ScrollTabBar$13(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ScrollTabBar$13;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '300' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_431(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_431;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_ScrollTabBar$13_2_classLit;
}

function onClick_5(event_0){
  var i, index, menu, n, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClick_5;
  menu = $PopupMenu(($location_0[stackIndex] = 'ScrollTabBar.java:' + '302' , new PopupMenu));
  $addItem_0(menu.menu, ($location_0[stackIndex] = 'MenuBar.java:' + '283' , $MenuItem(($location_0[stackIndex] = 'MenuBar.java:' + '283' , new MenuItem), $getTabHTML(this.this$0.tabBar, ($location_0[stackIndex] = 'ScrollTabBar.java:' + '303' , $getSelectedTab(this.this$0.tabBar))), true, $ScrollTabBar$13$1(($location_0[stackIndex] = 'ScrollTabBar.java:' + '304' , new ScrollTabBar$13$1), this))));
  $addSeparator(menu.menu, $MenuItemSeparator(($location_0[stackIndex] = 'MenuBar.java:' + '330' , new MenuItemSeparator)));
  for ($location_0[stackIndex] = 'ScrollTabBar.java:' + '310' , i = 0 , n = this.this$0.tabBar.panel.children.size_0 - 2; i < n; $location_0[stackIndex] = 'ScrollTabBar.java:' + '310' , ++i) {
    $location_0[stackIndex] = 'ScrollTabBar.java:' + '311' , index = i;
    index != ($location_0[stackIndex] = 'ScrollTabBar.java:' + '312' , $getSelectedTab(this.this$0.tabBar)) && $addItem_0(menu.menu, ($location_0[stackIndex] = 'MenuBar.java:' + '283' , $MenuItem(($location_0[stackIndex] = 'MenuBar.java:' + '283' , new MenuItem), ($location_0[stackIndex] = 'ScrollTabBar.java:' + '313' , $getTabHTML(this.this$0.tabBar, i)), true, $ScrollTabBar$13$2(new ScrollTabBar$13$2, this, index))));
  }
  $setPopupPositionAndShow(menu, $ScrollTabBar$13$3(($location_0[stackIndex] = 'ScrollTabBar.java:' + '320' , new ScrollTabBar$13$3), this, menu));
  $stackDepth_0 = stackIndex - 1;
}

function ScrollTabBar$13(){
}

_ = ScrollTabBar$13.prototype = new Object_0;
_.getClass$ = getClass_431;
_.onClick = onClick_5;
_.typeId$ = 285;
_.this$0 = null;
function $ScrollTabBar$13$1(this$static, this$1){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ScrollTabBar$13$1;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '304' , this$static.this$1 = this$1;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function execute_16(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = execute_16;
  $selectTab(this.this$1.this$0.tabBar, ($location_0[stackIndex] = 'ScrollTabBar.java:' + '306' , $getSelectedTab(this.this$1.this$0.tabBar)));
  $stackDepth_0 = stackIndex - 1;
}

function getClass_432(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_432;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_ScrollTabBar$13$1_2_classLit;
}

function ScrollTabBar$13$1(){
}

_ = ScrollTabBar$13$1.prototype = new Object_0;
_.execute = execute_16;
_.getClass$ = getClass_432;
_.typeId$ = 286;
_.this$1 = null;
function $ScrollTabBar$13$2(this$static, this$1, val$index){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ScrollTabBar$13$2;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '313' , this$static.this$1 = this$1;
  this$static.val$index = val$index;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function execute_17(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = execute_17;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '315' , $selectTab(this.this$1.this$0.tabBar, this.val$index);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_433(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_433;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_ScrollTabBar$13$2_2_classLit;
}

function ScrollTabBar$13$2(){
}

_ = ScrollTabBar$13$2.prototype = new Object_0;
_.execute = execute_17;
_.getClass$ = getClass_433;
_.typeId$ = 287;
_.this$1 = null;
_.val$index = 0;
function $ScrollTabBar$13$3(this$static, this$1, val$menu){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ScrollTabBar$13$3;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '320' , this$static.this$1 = this$1;
  this$static.val$menu = val$menu;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $setPosition(this$static, offsetWidth){
  var box, left, top_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setPosition;
  box = ($location_0[stackIndex] = 'ScrollTabBar.java:' + '322' , getOffsetSize(this$static.this$1.this$0.tabBarMenuBtn));
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '323' , left = $getAbsoluteLeft_0(($location_0[stackIndex] = 'Element.java:' + '150' , $clinit_81() , this$static.this$1.this$0.tabBarMenuBtn.element));
  left + offsetWidth > ($location_0[stackIndex] = 'Window.java:' + '643' , $getClientWidth_1($doc)) && ($location_0[stackIndex] = 'ScrollTabBar.java:' + '325' , left += box.width_0 - offsetWidth);
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '327' , top_0 = ($location_0[stackIndex] = 'Element.java:' + '166' , $getAbsoluteTop_0(this$static.this$1.this$0.tabBarMenuBtn.element)) + box.height_0;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '329' , $setPopupPosition(this$static.val$menu, left, top_0);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_434(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_434;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_ScrollTabBar$13$3_2_classLit;
}

function ScrollTabBar$13$3(){
}

_ = ScrollTabBar$13$3.prototype = new Object_0;
_.getClass$ = getClass_434;
_.typeId$ = 0;
_.this$1 = null;
_.val$menu = null;
function $ScrollTabBar$14(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ScrollTabBar$14;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '371' , this$static.this$0 = this$0;
  $AbsolutePanel(this$static);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_435(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_435;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_ScrollTabBar$14_2_classLit;
}

function onBrowserEvent_11(event_0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onBrowserEvent_11;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '374' , $onBrowserEvent_0(this.this$0, event_0);
  $stackDepth_0 = stackIndex - 1;
}

function ScrollTabBar$14(){
}

_ = ScrollTabBar$14.prototype = new AbsolutePanel;
_.getClass$ = getClass_435;
_.onBrowserEvent = onBrowserEvent_11;
_.typeId$ = 288;
_.this$0 = null;
function $ScrollTabBar$15(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ScrollTabBar$15;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '425' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function execute_18(){
  var scrollLeft, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = execute_18;
  if ((parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , this.this$0.tabBar.element['offsetWidth'])) || 0) > (parseInt(this.this$0.tabBarWrapper.element['offsetWidth']) || 0) + (parseInt(this.this$0.navBar.element['offsetWidth']) || 0)) {
    if (this.this$0.navBar.element.style.display != 'none') {
      $location_0[stackIndex] = 'ScrollTabBar.java:' + '432' , scrollLeft = ($location_0[stackIndex] = 'Element.java:' + '398' , $clinit_81() , this.this$0.tabBarWrapper.element).scrollLeft || 0;
      (parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , this.this$0.tabBarWrapper.element['offsetWidth'])) || 0) > (parseInt(this.this$0.tabBar.element['offsetWidth']) || 0) - scrollLeft && ($location_0[stackIndex] = 'DOMImpl.java:' + '346' , this.this$0.tabBarWrapper.element.scrollLeft = ($location_0[stackIndex] = 'ScrollTabBar.java:' + '436' , min_1(scrollLeft, (parseInt(this.this$0.tabBar.element['offsetWidth']) || 0) - scrollLeft)) , undefined);
    }
     else {
      $location_0[stackIndex] = 'ScrollTabBar.java:' + '430' , $toggleNavBarVisibility(this.this$0, true);
    }
  }
   else if (this.this$0.navBar.element.style.display != 'none') {
    $location_0[stackIndex] = 'DOMImpl.java:' + '346' , ($location_0[stackIndex] = 'Element.java:' + '695' , $clinit_81() , this.this$0.tabBarWrapper.element).scrollLeft = 0;
    $location_0[stackIndex] = 'ScrollTabBar.java:' + '441' , $toggleNavBarVisibility(this.this$0, false);
  }
  this.this$0.navBar.element.style.display != 'none' && ($location_0[stackIndex] = 'ScrollTabBar.java:' + '445' , $updateNavBarState(this.this$0));
  $stackDepth_0 = stackIndex - 1;
}

function getClass_436(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_436;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_ScrollTabBar$15_2_classLit;
}

function ScrollTabBar$15(){
}

_ = ScrollTabBar$15.prototype = new Object_0;
_.execute = execute_18;
_.getClass$ = getClass_436;
_.typeId$ = 289;
_.this$0 = null;
function $ScrollTabBar$16(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ScrollTabBar$16;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '454' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function execute_19(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = execute_19;
  $location_0[stackIndex] = 'LayoutComposite.java:' + '116' , $invalidate_1(($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this.this$0.widget, 182)), null);
  ($location_0[stackIndex] = 'ScrollTabBar.java:' + '457' , getParent_0(this.this$0)).layout_0();
  addCommand($ScrollTabBar$17(($location_0[stackIndex] = 'ScrollTabBar.java:' + '469' , new ScrollTabBar$17), this.this$0));
  $stackDepth_0 = stackIndex - 1;
}

function getClass_437(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_437;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_ScrollTabBar$16_2_classLit;
}

function ScrollTabBar$16(){
}

_ = ScrollTabBar$16.prototype = new Object_0;
_.execute = execute_19;
_.getClass$ = getClass_437;
_.typeId$ = 290;
_.this$0 = null;
function $ScrollTabBar$17(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ScrollTabBar$17;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '469' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function execute_20(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = execute_20;
  $location_0[stackIndex] = 'DOMImplOpera.java:' + '74' , ($location_0[stackIndex] = 'Element.java:' + '565' , $clinit_81() , dynamicCast($get_5(this.this$0.tabs, ($location_0[stackIndex] = 'ScrollTabBar.java:' + '471' , $getSelectedTab(this.this$0.tabBar))), 2).element).scrollIntoView();
  $stackDepth_0 = stackIndex - 1;
}

function getClass_438(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_438;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_ScrollTabBar$17_2_classLit;
}

function ScrollTabBar$17(){
}

_ = ScrollTabBar$17.prototype = new Object_0;
_.execute = execute_20;
_.getClass$ = getClass_438;
_.typeId$ = 291;
_.this$0 = null;
function $clinit_703(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_703;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '164' , $clinit_703 = nullMethod;
  $clinit_43();
  $stackDepth_0 = stackIndex - 1;
}

function $ScrollTabBar$2(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ScrollTabBar$2;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '164' , $clinit_703();
  this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_439(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_439;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_ScrollTabBar$2_2_classLit;
}

function run_7(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = run_7;
  !($location_0[stackIndex] = 'Element.java:' + '329' , this.this$0.scrollRightBtn.element['disabled']) && this.this$0.scrollRightBtnDown?($location_0[stackIndex] = 'DOMImpl.java:' + '25' , ($location_0[stackIndex] = 'ButtonElement.java:' + '44' , $clinit_81() , this.this$0.scrollRightBtn.element).click() , undefined):($location_0[stackIndex] = 'ScrollTabBar.java:' + '170' , $cancel_0(this));
  $stackDepth_0 = stackIndex - 1;
}

function ScrollTabBar$2(){
}

_ = ScrollTabBar$2.prototype = new Timer;
_.getClass$ = getClass_439;
_.run = run_7;
_.typeId$ = 292;
_.this$0 = null;
function $clinit_704(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_704;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '47' , $clinit_704 = nullMethod;
  TAB_ROW_STYLES_0 = ($location_0[stackIndex] = 'ScrollTabBar.java:' + '48' , initValues(_3Ljava_lang_String_2_classLit, 684, 1, ['tabTop', 'tabMiddle', 'tabBottom']));
  $stackDepth_0 = stackIndex - 1;
}

function createTabTextWrapper_1(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = createTabTextWrapper_1;
  returnTemp = $ScrollTabBar$DecoratedBottomTabBar$1(($location_0[stackIndex] = 'ScrollTabBar.java:' + '62' , new ScrollTabBar$DecoratedBottomTabBar$1), TAB_ROW_STYLES_0, 1);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getClass_440(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_440;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_ScrollTabBar$DecoratedBottomTabBar_2_classLit;
}

function ScrollTabBar$DecoratedBottomTabBar(){
}

_ = ScrollTabBar$DecoratedBottomTabBar.prototype = new TabBar;
_.createTabTextWrapper = createTabTextWrapper_1;
_.getClass$ = getClass_440;
_.typeId$ = 293;
var TAB_ROW_STYLES_0;
function $clinit_705(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_705;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '194' , $clinit_705 = nullMethod;
  $clinit_704();
  $stackDepth_0 = stackIndex - 1;
}

function $ScrollTabBar$3(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ScrollTabBar$3;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '194' , $clinit_705();
  this$static.this$0 = this$0;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '56' , $TabBar(this$static);
  $location_0[stackIndex] = 'UIObject.java:' + '659' , setStylePrimaryName(this$static.element, 'mosaic-DecoratedBottomTabBar');
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_441(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_441;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_ScrollTabBar$3_2_classLit;
}

function insertTabWidget_0(widget, beforeIndex){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = insertTabWidget_0;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '197' , $insertTabWidget(this, widget, beforeIndex);
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '198' , $add_8(this.this$0.tabs, beforeIndex, widget);
  $stackDepth_0 = stackIndex - 1;
}

function removeTab_0(index){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = removeTab_0;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '203' , $removeTab(this, index);
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '204' , $remove_7(this.this$0.tabs, index);
  $stackDepth_0 = stackIndex - 1;
}

function ScrollTabBar$3(){
}

_ = ScrollTabBar$3.prototype = new ScrollTabBar$DecoratedBottomTabBar;
_.getClass$ = getClass_441;
_.insertTabWidget = insertTabWidget_0;
_.removeTab = removeTab_0;
_.typeId$ = 294;
_.this$0 = null;
function $clinit_706(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_706;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '208' , $clinit_706 = nullMethod;
  $clinit_356();
  $stackDepth_0 = stackIndex - 1;
}

function $ScrollTabBar$4(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ScrollTabBar$4;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '208' , $clinit_706();
  this$static.this$0 = this$0;
  $location_0[stackIndex] = 'DecoratedTabBar.java:' + '61' , $TabBar(this$static);
  $location_0[stackIndex] = 'UIObject.java:' + '659' , setStylePrimaryName(this$static.element, 'gwt-DecoratedTabBar');
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_442(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_442;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_ScrollTabBar$4_2_classLit;
}

function insertTabWidget_1(widget, beforeIndex){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = insertTabWidget_1;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '211' , $insertTabWidget(this, widget, beforeIndex);
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '212' , $add_8(this.this$0.tabs, beforeIndex, widget);
  $stackDepth_0 = stackIndex - 1;
}

function removeTab_1(index){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = removeTab_1;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '217' , $removeTab(this, index);
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '218' , $remove_7(this.this$0.tabs, index);
  $stackDepth_0 = stackIndex - 1;
}

function ScrollTabBar$4(){
}

_ = ScrollTabBar$4.prototype = new DecoratedTabBar;
_.getClass$ = getClass_442;
_.insertTabWidget = insertTabWidget_1;
_.removeTab = removeTab_1;
_.typeId$ = 295;
_.this$0 = null;
function $ScrollTabBar$5(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ScrollTabBar$5;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '223' , this$static.this$0 = this$0;
  $TabBar(this$static);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_443(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_443;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_ScrollTabBar$5_2_classLit;
}

function insertTabWidget_2(widget, beforeIndex){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = insertTabWidget_2;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '226' , $insertTabWidget(this, widget, beforeIndex);
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '227' , $add_8(this.this$0.tabs, beforeIndex, widget);
  $stackDepth_0 = stackIndex - 1;
}

function removeTab_2(index){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = removeTab_2;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '232' , $removeTab(this, index);
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '233' , $remove_7(this.this$0.tabs, index);
  $stackDepth_0 = stackIndex - 1;
}

function ScrollTabBar$5(){
}

_ = ScrollTabBar$5.prototype = new TabBar;
_.getClass$ = getClass_443;
_.insertTabWidget = insertTabWidget_2;
_.removeTab = removeTab_2;
_.typeId$ = 296;
_.this$0 = null;
function $ScrollTabBar$6(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ScrollTabBar$6;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '238' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_444(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_444;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_ScrollTabBar$6_2_classLit;
}

function onSelection_3(event_0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onSelection_3;
  addCommand($ScrollTabBar$6$1(($location_0[stackIndex] = 'ScrollTabBar.java:' + '240' , new ScrollTabBar$6$1), this));
  $stackDepth_0 = stackIndex - 1;
}

function ScrollTabBar$6(){
}

_ = ScrollTabBar$6.prototype = new Object_0;
_.getClass$ = getClass_444;
_.onSelection = onSelection_3;
_.typeId$ = 297;
_.this$0 = null;
function $ScrollTabBar$6$1(this$static, this$1){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ScrollTabBar$6$1;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '240' , this$static.this$1 = this$1;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function execute_21(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = execute_21;
  $location_0[stackIndex] = 'LayoutComposite.java:' + '116' , $invalidate_1(($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this.this$1.this$0.widget, 182)), null);
  addCommand($ScrollTabBar$17(($location_0[stackIndex] = 'ScrollTabBar.java:' + '469' , new ScrollTabBar$17), this.this$1.this$0));
  $stackDepth_0 = stackIndex - 1;
}

function getClass_445(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_445;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_ScrollTabBar$6$1_2_classLit;
}

function ScrollTabBar$6$1(){
}

_ = ScrollTabBar$6$1.prototype = new Object_0;
_.execute = execute_21;
_.getClass$ = getClass_445;
_.typeId$ = 298;
_.this$1 = null;
function $ScrollTabBar$7(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ScrollTabBar$7;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '256' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_446(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_446;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_ScrollTabBar$7_2_classLit;
}

function onClick_6(event_0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClick_6;
  !scrollAnimation && (scrollAnimation = ($location_0[stackIndex] = 'ScrollTabBar.java:' + '366' , new ScrollTabBar$ScrollAnimation));
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '259' , $scrollTabBar(scrollAnimation, this.this$0, -32, true);
  $stackDepth_0 = stackIndex - 1;
}

function ScrollTabBar$7(){
}

_ = ScrollTabBar$7.prototype = new Object_0;
_.getClass$ = getClass_446;
_.onClick = onClick_6;
_.typeId$ = 299;
_.this$0 = null;
function $ScrollTabBar$8(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ScrollTabBar$8;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '263' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_447(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_447;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_ScrollTabBar$8_2_classLit;
}

function onMouseDown_2(event_0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onMouseDown_2;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '265' , this.this$0.scrollLeftBtnDown = true;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '266' , $scheduleRepeating(this.this$0.scrollLeftBtnTimer, 333);
  $stackDepth_0 = stackIndex - 1;
}

function ScrollTabBar$8(){
}

_ = ScrollTabBar$8.prototype = new Object_0;
_.getClass$ = getClass_447;
_.onMouseDown = onMouseDown_2;
_.typeId$ = 300;
_.this$0 = null;
function $ScrollTabBar$9(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ScrollTabBar$9;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '269' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_448(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_448;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_ScrollTabBar$9_2_classLit;
}

function onMouseUp_2(event_0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onMouseUp_2;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '271' , this.this$0.scrollLeftBtnDown = false;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '272' , $cancel_0(this.this$0.scrollLeftBtnTimer);
  $stackDepth_0 = stackIndex - 1;
}

function ScrollTabBar$9(){
}

_ = ScrollTabBar$9.prototype = new Object_0;
_.getClass$ = getClass_448;
_.onMouseUp = onMouseUp_2;
_.typeId$ = 301;
_.this$0 = null;
function $clinit_713(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_713;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '62' , $clinit_713 = nullMethod;
  $clinit_341();
  $stackDepth_0 = stackIndex - 1;
}

function $ScrollTabBar$DecoratedBottomTabBar$1(this$static, $anonymous0, $anonymous1){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ScrollTabBar$DecoratedBottomTabBar$1;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '62' , $clinit_713();
  $location_0[stackIndex] = 'AbstractDecoratorPanel.java:' + '43' , $DecoratorPanel(this$static, $anonymous0, $anonymous1);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_449(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_449;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_ScrollTabBar$DecoratedBottomTabBar$1_2_classLit;
}

function ScrollTabBar$DecoratedBottomTabBar$1(){
}

_ = ScrollTabBar$DecoratedBottomTabBar$1.prototype = new AbstractDecoratorPanel;
_.getClass$ = getClass_449;
_.typeId$ = 302;
function $onUpdate_1(this$static, progress){
  var scrollLeft, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $onUpdate_1;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '96' , scrollLeft = ($location_0[stackIndex] = 'Element.java:' + '398' , $clinit_81() , this$static.scrollTabBar.tabBarWrapper.element).scrollLeft || 0;
  this$static.scrollOffset > 0?(scrollLeft = ($location_0[stackIndex] = 'ScrollTabBar.java:' + '98' , min_1(parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , this$static.scrollTabBar.tabBar.element['offsetWidth'])) || 0, scrollLeft + ~~Math.max(($location_0[stackIndex] = 'Cast.java:' + '185' , Math.min(this$static.scrollOffset * progress, 2147483647)), -2147483648)))):(scrollLeft = ($location_0[stackIndex] = 'ScrollTabBar.java:' + '101' , max(0, scrollLeft + ~~Math.max(($location_0[stackIndex] = 'Cast.java:' + '185' , Math.min(this$static.scrollOffset * progress, 2147483647)), -2147483648))));
  $location_0[stackIndex] = 'DOMImpl.java:' + '346' , this$static.scrollTabBar.tabBarWrapper.element.scrollLeft = scrollLeft;
  $stackDepth_0 = stackIndex - 1;
}

function $scrollTabBar(this$static, scrollTabBar, scrollOffset, animate){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $scrollTabBar;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '109' , $cancel(this$static);
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '111' , this$static.scrollTabBar = scrollTabBar;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '112' , this$static.scrollOffset = scrollOffset;
  if (animate) {
    $location_0[stackIndex] = 'Animation.java:' + '113' , $run(this$static, 333, ($location_0[stackIndex] = 'Duration.java:' + '29' , new Date).getTime());
  }
   else {
    $location_0[stackIndex] = 'ScrollTabBar.java:' + '85' , $onUpdate_1(this$static, 1);
    $location_0[stackIndex] = 'ScrollTabBar.java:' + '86' , $updateNavBarState(this$static.scrollTabBar);
  }
  $stackDepth_0 = stackIndex - 1;
}

function getClass_450(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_450;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_ScrollTabBar$ScrollAnimation_2_classLit;
}

function onComplete_2(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onComplete_2;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '78' , $updateNavBarState(this.scrollTabBar);
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '80' , this.scrollTabBar = null;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '81' , this.scrollOffset = 0;
  $stackDepth_0 = stackIndex - 1;
}

function onStart_2(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onStart_2;
  $location_0[stackIndex] = 'Animation.java:' + '195' , $onUpdate_1(this, (1 + ($location_0[stackIndex] = 'Math.java:' + '83' , Math.cos(3.141592653589793))) / 2);
  $stackDepth_0 = stackIndex - 1;
}

function onUpdate_1(progress){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onUpdate_1;
  $location_0[stackIndex] = 'ScrollTabBar.java:' + '95' , $onUpdate_1(this, progress);
  $stackDepth_0 = stackIndex - 1;
}

function ScrollTabBar$ScrollAnimation(){
}

_ = ScrollTabBar$ScrollAnimation.prototype = new Animation;
_.getClass$ = getClass_450;
_.onComplete = onComplete_2;
_.onStart = onStart_2;
_.onUpdate = onUpdate_1;
_.typeId$ = 303;
_.scrollOffset = 0;
_.scrollTabBar = null;
function $TabLayoutPanel$1(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $TabLayoutPanel$1;
  $location_0[stackIndex] = 'TabLayoutPanel.java:' + '405' , this$static.this$0 = this$0;
  $location_0[stackIndex] = 'TabLayoutPanel.java:' + '406' , this$static.iter = ($location_0[stackIndex] = 'LayoutPanel.java:' + '553' , $LayoutPanel$3(($location_0[stackIndex] = 'LayoutPanel.java:' + '553' , new LayoutPanel$3), ($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.this$0.deck.widget, 182))));
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_454(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_454;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_TabLayoutPanel$1_2_classLit;
}

function hasNext_13(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = hasNext_13;
  returnTemp = ($location_0[stackIndex] = 'LayoutPanel.java:' + '557' , $hasNext_1(this.iter.iter));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function next_14(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = next_14;
  returnTemp = ($location_0[stackIndex] = 'LayoutPanel.java:' + '561' , $getUnDecoratedWidget(($location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , $next_2(this.iter.iter))));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function remove_32(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = remove_32;
  throw $UnsupportedOperationException_0(($location_0[stackIndex] = 'TabLayoutPanel.java:' + '417' , new UnsupportedOperationException), 'Use TabLayoutPanel.remove()');
}

function TabLayoutPanel$1(){
}

_ = TabLayoutPanel$1.prototype = new Object_0;
_.getClass$ = getClass_454;
_.hasNext = hasNext_13;
_.next_0 = next_14;
_.remove = remove_32;
_.typeId$ = 0;
_.this$0 = null;
function $clinit_719(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_719;
  $location_0[stackIndex] = 'TabLayoutPanel.java:' + '64' , $clinit_719 = nullMethod;
  $location_0[stackIndex] = 'TabLayoutPanel.java:' + '65' , TOP = $TabLayoutPanel$TabBarPosition(($location_0[stackIndex] = 'TabLayoutPanel.java:' + '1' , new TabLayoutPanel$TabBarPosition), 'TOP', 0);
  $location_0[stackIndex] = 'TabLayoutPanel.java:' + '65' , BOTTOM = $TabLayoutPanel$TabBarPosition(($location_0[stackIndex] = 'TabLayoutPanel.java:' + '1' , new TabLayoutPanel$TabBarPosition), 'BOTTOM', 1);
  $stackDepth_0 = stackIndex - 1;
}

function $TabLayoutPanel$TabBarPosition(this$static, enum$name, enum$ordinal){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $TabLayoutPanel$TabBarPosition;
  $location_0[stackIndex] = 'TabLayoutPanel.java:' + '64' , $clinit_719();
  $location_0[stackIndex] = 'Enum.java:' + '76' , this$static.name_0 = enum$name;
  $location_0[stackIndex] = 'Enum.java:' + '77' , this$static.ordinal = enum$ordinal;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_455(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_455;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_TabLayoutPanel$TabBarPosition_2_classLit;
}

function values_8(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = values_8;
  $location_0[stackIndex] = 'TabLayoutPanel.java:' + '64' , $clinit_719();
  returnTemp = initValues(_3Lorg_gwt_mosaic_ui_client_TabLayoutPanel$TabBarPosition_2_classLit, 691, 92, [TOP, BOTTOM]);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function TabLayoutPanel$TabBarPosition(){
}

_ = TabLayoutPanel$TabBarPosition.prototype = new Enum;
_.getClass$ = getClass_455;
_.typeId$ = 306;
var BOTTOM, TOP;
function $ToolBar(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ToolBar;
  $initWidget(this$static, ($location_0[stackIndex] = 'LayoutComposite.java:' + '66' , $LayoutPanel_1(($location_0[stackIndex] = 'LayoutComposite.java:' + '66' , new LayoutPanel), $BoxLayout(($location_0[stackIndex] = 'ToolBar.java:' + '48' , new BoxLayout)))));
  $location_0[stackIndex] = 'Element.java:' + '688' , this$static.element['className'] = 'mosaic-ToolBar';
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $add_28(this$static, w){
  var boxLayoutMgr, height, layoutPanel, width, width_0, height_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $add_28;
  $location_0[stackIndex] = 'ToolBar.java:' + '94' , layoutPanel = ($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.widget, 182));
  boxLayoutMgr = ($location_0[stackIndex] = 'ToolBar.java:' + '95' , dynamicCast(layoutPanel.layout, 195));
  if (boxLayoutMgr.orientation == ($location_0[stackIndex] = 'BoxLayout.java:' + '170' , $clinit_787() , HORIZONTAL)) {
    $location_0[stackIndex] = 'ToolBar.java:' + '99' , width = ($location_0[stackIndex] = 'ToolBar.java:' + '108' , width_0 = ($location_0[stackIndex] = 'Style.java:' + '1442' , w.element.style['width']) , width_0 != null && width_0.length > 0?width_0:null);
    $add_26(layoutPanel, w, ($location_0[stackIndex] = 'ToolBar.java:' + '100' , $BoxLayoutData_6(($location_0[stackIndex] = 'ToolBar.java:' + '100' , new BoxLayoutData), ($location_0[stackIndex] = 'BoxLayoutData.java:' + '30' , $clinit_789() , VERTICAL_0), width, null)));
  }
   else {
    $location_0[stackIndex] = 'ToolBar.java:' + '102' , height = ($location_0[stackIndex] = 'ToolBar.java:' + '113' , height_0 = ($location_0[stackIndex] = 'Style.java:' + '1442' , w.element.style['height']) , height_0 != null && height_0.length > 0?height_0:null);
    $add_26(($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.widget, 182)), w, ($location_0[stackIndex] = 'ToolBar.java:' + '103' , $BoxLayoutData_6(($location_0[stackIndex] = 'ToolBar.java:' + '103' , new BoxLayoutData), ($location_0[stackIndex] = 'BoxLayoutData.java:' + '30' , $clinit_789() , BOTH), null, height)));
  }
  $stackDepth_0 = stackIndex - 1;
}

function getClass_456(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_456;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_ToolBar_2_classLit;
}

function iterator_23(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = iterator_23;
  returnTemp = ($location_0[stackIndex] = 'LayoutPanel.java:' + '553' , $LayoutPanel$3(($location_0[stackIndex] = 'LayoutPanel.java:' + '553' , new LayoutPanel$3), ($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this.widget, 182))));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function remove_33(w){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = remove_33;
  returnTemp = ($location_0[stackIndex] = 'ToolBar.java:' + '231' , $remove_26(($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this.widget, 182)), w));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function ToolBar(){
}

_ = ToolBar.prototype = new LayoutComposite;
_.getClass$ = getClass_456;
_.iterator_0 = iterator_23;
_.remove_0 = remove_33;
_.typeId$ = 307;
function addClickHandler_7(handler){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = addClickHandler_7;
  returnTemp = ($location_0[stackIndex] = 'WindowPanel.java:' + '154' , $addDomHandler(this, handler, ($location_0[stackIndex] = 'WindowPanel.java:' + '154' , $clinit_126() , ($location_0[stackIndex] = 'ClickEvent.java:' + '27' , $clinit_126()) , TYPE_1)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

_ = WindowPanel$ElementDragHandle.prototype;
_.addClickHandler = addClickHandler_7;
function dispatch_20(p0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = dispatch_20;
  $location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , throwClassCastExceptionUnlessNull(p0);
  $location_0[stackIndex] = 'CellHighlightEvent.java:' + '104' , null.nullMethod();
  $stackDepth_0 = stackIndex - 1;
}

function fire_7(source){
  var event_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = fire_7;
  if (!TYPE_20 && (TYPE_20 = $GwtEvent$Type(($location_0[stackIndex] = 'CellHighlightEvent.java:' + '74' , new GwtEvent$Type))) , TYPE_20) {
    event_0 = ($location_0[stackIndex] = 'CellHighlightEvent.java:' + '62' , new CellHighlightEvent);
    !!source.handlerManager && ($location_0[stackIndex] = 'Widget.java:' + '52' , $fireEvent(source.handlerManager, event_0));
  }
  $stackDepth_0 = stackIndex - 1;
}

function getAssociatedType_21(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getAssociatedType_21;
  $stackDepth_0 = stackIndex - 1;
  return TYPE_20;
}

function getClass_474(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_474;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_event_CellHighlightEvent_2_classLit;
}

function CellHighlightEvent(){
}

_ = CellHighlightEvent.prototype = new GwtEvent;
_.dispatch = dispatch_20;
_.getAssociatedType = getAssociatedType_21;
_.getClass$ = getClass_474;
_.typeId$ = 0;
var TYPE_20 = null;
function dispatch_21(p0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = dispatch_21;
  $location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , throwClassCastExceptionUnlessNull(p0);
  $location_0[stackIndex] = 'CellUnhighlightEvent.java:' + '104' , null.nullMethod();
  $stackDepth_0 = stackIndex - 1;
}

function fire_8(source){
  var event_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = fire_8;
  if (!TYPE_21 && (TYPE_21 = $GwtEvent$Type(($location_0[stackIndex] = 'CellUnhighlightEvent.java:' + '74' , new GwtEvent$Type))) , TYPE_21) {
    event_0 = ($location_0[stackIndex] = 'CellUnhighlightEvent.java:' + '62' , new CellUnhighlightEvent);
    !!source.handlerManager && ($location_0[stackIndex] = 'Widget.java:' + '52' , $fireEvent(source.handlerManager, event_0));
  }
  $stackDepth_0 = stackIndex - 1;
}

function getAssociatedType_22(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getAssociatedType_22;
  $stackDepth_0 = stackIndex - 1;
  return TYPE_21;
}

function getClass_475(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_475;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_event_CellUnhighlightEvent_2_classLit;
}

function CellUnhighlightEvent(){
}

_ = CellUnhighlightEvent.prototype = new GwtEvent;
_.dispatch = dispatch_21;
_.getAssociatedType = getAssociatedType_22;
_.getClass$ = getClass_475;
_.typeId$ = 0;
var TYPE_21 = null;
function $ColumnSortEvent(this$static, sortList){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ColumnSortEvent;
  $location_0[stackIndex] = 'ColumnSortEvent.java:' + '93' , this$static.sortList = sortList;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function dispatch_22(p0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = dispatch_22;
  $location_0[stackIndex] = 'ColumnSortEvent.java:' + '105' , $onColumnSorted(($location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , dynamicCast(p0, 197)), this);
  $stackDepth_0 = stackIndex - 1;
}

function getAssociatedType_23(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getAssociatedType_23;
  $stackDepth_0 = stackIndex - 1;
  return TYPE_22;
}

function getClass_476(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_476;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_event_ColumnSortEvent_2_classLit;
}

function ColumnSortEvent(){
}

_ = ColumnSortEvent.prototype = new GwtEvent;
_.dispatch = dispatch_22;
_.getAssociatedType = getAssociatedType_23;
_.getClass$ = getClass_476;
_.typeId$ = 0;
_.sortList = null;
var TYPE_22 = null;
function dispatch_23(p0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = dispatch_23;
  $location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , throwClassCastExceptionUnlessNull(p0);
  $location_0[stackIndex] = 'RowHighlightEvent.java:' + '103' , null.nullMethod();
  $stackDepth_0 = stackIndex - 1;
}

function fire_9(source){
  var event_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = fire_9;
  if (!TYPE_23 && (TYPE_23 = $GwtEvent$Type(($location_0[stackIndex] = 'RowHighlightEvent.java:' + '74' , new GwtEvent$Type))) , TYPE_23) {
    event_0 = ($location_0[stackIndex] = 'RowHighlightEvent.java:' + '62' , new RowHighlightEvent);
    !!source.handlerManager && ($location_0[stackIndex] = 'Widget.java:' + '52' , $fireEvent(source.handlerManager, event_0));
  }
  $stackDepth_0 = stackIndex - 1;
}

function getAssociatedType_24(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getAssociatedType_24;
  $stackDepth_0 = stackIndex - 1;
  return TYPE_23;
}

function getClass_477(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_477;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_event_RowHighlightEvent_2_classLit;
}

function RowHighlightEvent(){
}

_ = RowHighlightEvent.prototype = new GwtEvent;
_.dispatch = dispatch_23;
_.getAssociatedType = getAssociatedType_24;
_.getClass$ = getClass_477;
_.typeId$ = 0;
var TYPE_23 = null;
function dispatch_24(p0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = dispatch_24;
  $location_0[stackIndex] = 'RowSelectionEvent.java:' + '127' , ($location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , dynamicCast(p0, 198)).onRowSelection(this);
  $stackDepth_0 = stackIndex - 1;
}

function fire_10(source){
  var event_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = fire_10;
  if (TYPE_24) {
    event_0 = ($location_0[stackIndex] = 'RowSelectionEvent.java:' + '69' , new RowSelectionEvent);
    !!source.handlerManager && ($location_0[stackIndex] = 'Widget.java:' + '52' , $fireEvent(source.handlerManager, event_0));
  }
  $stackDepth_0 = stackIndex - 1;
}

function getAssociatedType_25(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getAssociatedType_25;
  $stackDepth_0 = stackIndex - 1;
  return TYPE_24;
}

function getClass_478(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_478;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_event_RowSelectionEvent_2_classLit;
}

function RowSelectionEvent(){
}

_ = RowSelectionEvent.prototype = new GwtEvent;
_.dispatch = dispatch_24;
_.getAssociatedType = getAssociatedType_25;
_.getClass$ = getClass_478;
_.typeId$ = 0;
var TYPE_24 = null;
function dispatch_25(p0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = dispatch_25;
  $location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , throwClassCastExceptionUnlessNull(p0);
  $location_0[stackIndex] = 'RowUnhighlightEvent.java:' + '103' , null.nullMethod();
  $stackDepth_0 = stackIndex - 1;
}

function fire_11(source){
  var event_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = fire_11;
  if (!TYPE_25 && (TYPE_25 = $GwtEvent$Type(($location_0[stackIndex] = 'RowUnhighlightEvent.java:' + '74' , new GwtEvent$Type))) , TYPE_25) {
    event_0 = ($location_0[stackIndex] = 'RowUnhighlightEvent.java:' + '62' , new RowUnhighlightEvent);
    !!source.handlerManager && ($location_0[stackIndex] = 'Widget.java:' + '52' , $fireEvent(source.handlerManager, event_0));
  }
  $stackDepth_0 = stackIndex - 1;
}

function getAssociatedType_26(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getAssociatedType_26;
  $stackDepth_0 = stackIndex - 1;
  return TYPE_25;
}

function getClass_479(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_479;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_event_RowUnhighlightEvent_2_classLit;
}

function RowUnhighlightEvent(){
}

_ = RowUnhighlightEvent.prototype = new GwtEvent;
_.dispatch = dispatch_25;
_.getAssociatedType = getAssociatedType_26;
_.getClass$ = getClass_479;
_.typeId$ = 0;
var TYPE_25 = null;
function $TableEvent$Row(this$static, rowIndex){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $TableEvent$Row;
  $location_0[stackIndex] = 'TableEvent.java:' + '89' , this$static.rowIndex = rowIndex;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $compareTo_9(this$static, o){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $compareTo_9;
  if (!o) {
    $stackDepth_0 = stackIndex - 1;
    return 1;
  }
   else {
    returnTemp = this$static.rowIndex - o.rowIndex;
    $stackDepth_0 = stackIndex - 1;
    return returnTemp;
  }
  $stackDepth_0 = stackIndex - 1;
}

function compareTo_11(p0){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = compareTo_11;
  returnTemp = $compareTo_9(this, ($location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , dynamicCast(p0, 199)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function equals_31(obj){
  var other, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = equals_31;
  if (this === (obj == null?null:obj)) {
    $stackDepth_0 = stackIndex - 1;
    return true;
  }
  if (obj == null) {
    $stackDepth_0 = stackIndex - 1;
    return false;
  }
  if (Lorg_gwt_mosaic_ui_client_event_TableEvent$Row_2_classLit != (obj.typeMarker$ == nullMethod || obj.typeId$ == 2?($location_0[stackIndex] = 'JavaScriptObject.java:' + '28' , obj.getClass$()):Lcom_google_gwt_core_client_JavaScriptObject_2_classLit)) {
    $stackDepth_0 = stackIndex - 1;
    return false;
  }
  other = ($location_0[stackIndex] = 'TableEvent.java:' + '138' , dynamicCast(obj, 199));
  if (this.rowIndex != other.rowIndex) {
    $stackDepth_0 = stackIndex - 1;
    return false;
  }
  $stackDepth_0 = stackIndex - 1;
  return true;
}

function getClass_480(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_480;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_event_TableEvent$Row_2_classLit;
}

function hashCode_32(){
  var result, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = hashCode_32;
  $location_0[stackIndex] = 'TableEvent.java:' + '120' , result = 1;
  $location_0[stackIndex] = 'TableEvent.java:' + '121' , result = 31 * result + this.rowIndex;
  $stackDepth_0 = stackIndex - 1;
  return result;
}

function TableEvent$Row(){
}

_ = TableEvent$Row.prototype = new Object_0;
_.compareTo$ = compareTo_11;
_.equals$ = equals_31;
_.getClass$ = getClass_480;
_.hashCode$ = hashCode_32;
_.typeId$ = 325;
_.rowIndex = 0;
function $InfoPanel(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $InfoPanel;
  $location_0[stackIndex] = 'InfoPanel.java:' + '79' , $InfoPanel_0(this$static, null, null, false);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $InfoPanel_0(this$static, caption, description, autoHide){
  var div1, div2, panel, width, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $InfoPanel_0;
  $location_0[stackIndex] = 'DecoratedPopupPanel.java:' + '114' , $DecoratedPopupPanel(this$static, autoHide, false, 'popup');
  this$static.hideTimer = $InfoPanel$1(($location_0[stackIndex] = 'InfoPanel.java:' + '62' , new InfoPanel$1), this$static);
  $location_0[stackIndex] = 'PopupPanel.java:' + '744' , this$static.isAnimationEnabled = true;
  $location_0[stackIndex] = 'InfoPanel.java:' + '88' , this$static.autoHide = autoHide;
  this$static.caption = $Label_0(($location_0[stackIndex] = 'InfoPanel.java:' + '90' , new Label), caption);
  $location_0[stackIndex] = 'Element.java:' + '688' , ($location_0[stackIndex] = 'UIObject.java:' + '648' , this$static.caption.getStyleElement())['className'] = 'mosaic-InfoPanel-caption';
  this$static.description = $Label_0(($location_0[stackIndex] = 'InfoPanel.java:' + '93' , new Label), description);
  $location_0[stackIndex] = 'Element.java:' + '688' , ($location_0[stackIndex] = 'UIObject.java:' + '648' , this$static.description.getStyleElement())['className'] = 'mosaic-InfoPanel-description';
  panel = $FlowPanel(($location_0[stackIndex] = 'InfoPanel.java:' + '96' , new FlowPanel));
  $location_0[stackIndex] = 'Element.java:' + '688' , panel.element['className'] = 'mosaic-InfoPanel-panel';
  if (autoHide) {
    $location_0[stackIndex] = 'InfoPanel.java:' + '99' , width = ($location_0[stackIndex] = 'Window.java:' + '643' , $getClientWidth_1($doc));
    (~~(width / 3) > 224?~~(width / 3):224) >= 0 && ($location_0[stackIndex] = 'UIObject.java:' + '620' , panel.setWidth((~~(width / 3) > 224?~~(width / 3):224) + 'px'));
    72 >= 0 && ($location_0[stackIndex] = 'UIObject.java:' + '623' , panel.setHeight('72px'));
    addResizeHandler($BaseListenerWrapper$WrapWindowResize(($location_0[stackIndex] = 'BaseListenerWrapper.java:' + '128' , new BaseListenerWrapper$WrapWindowResize), this$static));
  }
   else {
    224 >= 0 && ($location_0[stackIndex] = 'UIObject.java:' + '620' , panel.setWidth('224px'));
    72 >= 0 && ($location_0[stackIndex] = 'UIObject.java:' + '623' , panel.setHeight('72px'));
  }
  $location_0[stackIndex] = 'InfoPanel.java:' + '105' , setStyleAttribute_0(panel.element, 'overflow', 'hidden');
  div1 = $SimplePanel(($location_0[stackIndex] = 'InfoPanel.java:' + '107' , new SimplePanel));
  $location_0[stackIndex] = 'InfoPanel.java:' + '108' , $add_3(div1, this$static.caption);
  div2 = $SimplePanel(($location_0[stackIndex] = 'InfoPanel.java:' + '110' , new SimplePanel));
  $location_0[stackIndex] = 'InfoPanel.java:' + '111' , $add_3(div2, this$static.description);
  $location_0[stackIndex] = 'FlowPanel.java:' + '45' , $add_0(panel, div1, panel.element);
  $add_0(panel, div2, panel.element);
  $location_0[stackIndex] = 'DecoratedPopupPanel.java:' + '160' , $setWidget(this$static.decPanel, panel);
  $location_0[stackIndex] = 'DecoratedPopupPanel.java:' + '161' , $maybeUpdateSize(this$static);
  $location_0[stackIndex] = 'UIObject.java:' + '449' , setStyleName(($location_0[stackIndex] = 'PopupPanel.java:' + '1008' , $getStyleElement_1($getFirstChildElement_0(($location_0[stackIndex] = 'Element.java:' + '241' , $clinit_81() , this$static.element)))), 'mosaic-InfoPanel', true);
  $location_0[stackIndex] = 'Style.java:' + '1449' , this$static.element.style['zIndex'] = '2.147483647E9';
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $show_2(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $show_2;
  $location_0[stackIndex] = 'InfoPanel.java:' + '162' , $show(this$static);
  !this$static.autoHide && ($location_0[stackIndex] = 'InfoPanel.java:' + '164' , $schedule(this$static.hideTimer, 3333));
  $stackDepth_0 = stackIndex - 1;
}

function getClass_481(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_481;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_infopanel_InfoPanel_2_classLit;
}

function hide_3(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = hide_3;
  $location_0[stackIndex] = 'PopupPanel.java:' + '571' , $hide_0(this);
  $stackDepth_0 = stackIndex - 1;
}

function onWindowResized_0(width, height){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onWindowResized_0;
  $InfoPanel$2(($location_0[stackIndex] = 'InfoPanel.java:' + '139' , new InfoPanel$2), 333, this);
  $stackDepth_0 = stackIndex - 1;
}

function show_2(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = show_2;
  $location_0[stackIndex] = 'InfoPanel.java:' + '162' , $show(this);
  !this.autoHide && ($location_0[stackIndex] = 'InfoPanel.java:' + '164' , $schedule(this.hideTimer, 3333));
  $stackDepth_0 = stackIndex - 1;
}

function InfoPanel(){
}

_ = InfoPanel.prototype = new DecoratedPopupPanel;
_.getClass$ = getClass_481;
_.hide = hide_3;
_.onWindowResized = onWindowResized_0;
_.show = show_2;
_.typeId$ = 326;
_.autoHide = false;
_.caption = null;
_.description = null;
function $clinit_757(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_757;
  $location_0[stackIndex] = 'InfoPanel.java:' + '62' , $clinit_757 = nullMethod;
  $clinit_43();
  $stackDepth_0 = stackIndex - 1;
}

function $InfoPanel$1(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $InfoPanel$1;
  $location_0[stackIndex] = 'InfoPanel.java:' + '62' , $clinit_757();
  this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_482(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_482;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_infopanel_InfoPanel$1_2_classLit;
}

function run_12(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = run_12;
  $location_0[stackIndex] = 'PopupPanel.java:' + '571' , $hide_0(this.this$0);
  $stackDepth_0 = stackIndex - 1;
}

function InfoPanel$1(){
}

_ = InfoPanel$1.prototype = new Timer;
_.getClass$ = getClass_482;
_.run = run_12;
_.typeId$ = 327;
_.this$0 = null;
function $InfoPanel$2(this$static, $anonymous0, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $InfoPanel$2;
  $location_0[stackIndex] = 'InfoPanel.java:' + '139' , this$static.this$0 = this$0;
  this$static.timer = $DelayedRunnable$1(($location_0[stackIndex] = 'DelayedRunnable.java:' + '42' , new DelayedRunnable$1), this$static);
  $location_0[stackIndex] = 'DelayedRunnable.java:' + '65' , $schedule(this$static.timer, $anonymous0);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $run_0(this$static){
  var width, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $run_0;
  $location_0[stackIndex] = 'InfoPanel.java:' + '141' , width = ($location_0[stackIndex] = 'Window.java:' + '643' , $getClientWidth_1($doc));
  $location_0[stackIndex] = 'InfoPanel.java:' + '142' , $setPixelSize(this$static.this$0.decPanel.widget_0, ~~(width / 3) > 224?~~(width / 3):224, 72);
  $location_0[stackIndex] = 'InfoPanel.java:' + '143' , $center(this$static.this$0);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_483(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_483;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_infopanel_InfoPanel$2_2_classLit;
}

function InfoPanel$2(){
}

_ = InfoPanel$2.prototype = new DelayedRunnable;
_.getClass$ = getClass_483;
_.typeId$ = 0;
_.this$0 = null;
function $BorderLayoutData_0(this$static, decorate){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $BorderLayoutData_0;
  $location_0[stackIndex] = 'BorderLayoutData.java:' + '68' , $BorderLayoutData_2(this$static, ($location_0[stackIndex] = 'BorderLayout.java:' + '199' , $clinit_780() , CENTER_1), decorate);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $BorderLayoutData_5(this$static, region, minSize, maxSize){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $BorderLayoutData_5;
  $location_0[stackIndex] = 'BorderLayoutData.java:' + '282' , $BorderLayoutData_6(this$static, region, -1, minSize, maxSize, false);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $BorderLayoutData_6(this$static, region, preferredSize, minSize, maxSize, decorate){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $BorderLayoutData_6;
  $location_0[stackIndex] = 'LayoutData.java:' + '40' , this$static.decorate = decorate;
  $location_0[stackIndex] = 'BorderLayoutData.java:' + '375' , this$static.region = region;
  if (region == ($location_0[stackIndex] = 'BorderLayout.java:' + '199' , $clinit_780() , NORTH_0) || region == SOUTH_0) {
    preferredSize > 1?($location_0[stackIndex] = 'BorderLayoutData.java:' + '379' , $setPreferredHeight(this$static, ~~Math.max(($location_0[stackIndex] = 'Cast.java:' + '185' , Math.min(preferredSize, 2147483647)), -2147483648) + 'px')):preferredSize > 0?($location_0[stackIndex] = 'BorderLayoutData.java:' + '381' , $setPreferredHeight(this$static, ~~Math.max(($location_0[stackIndex] = 'Cast.java:' + '185' , Math.min(preferredSize * 100, 2147483647)), -2147483648) + '%')):($location_0[stackIndex] = 'BorderLayoutData.java:' + '383' , $setPreferredHeight(this$static, null));
    $location_0[stackIndex] = 'BorderLayoutData.java:' + '385' , $setPreferredWidth(this$static, '0px');
  }
   else if (region == WEST_0 || region == EAST_0) {
    preferredSize > 1?($location_0[stackIndex] = 'BorderLayoutData.java:' + '388' , $setPreferredWidth(this$static, ~~Math.max(($location_0[stackIndex] = 'Cast.java:' + '185' , Math.min(preferredSize, 2147483647)), -2147483648) + 'px')):preferredSize > 0?($location_0[stackIndex] = 'BorderLayoutData.java:' + '390' , $setPreferredWidth(this$static, ~~Math.max(($location_0[stackIndex] = 'Cast.java:' + '185' , Math.min(preferredSize * 100, 2147483647)), -2147483648) + '%')):($location_0[stackIndex] = 'BorderLayoutData.java:' + '392' , $setPreferredWidth(this$static, null));
    $location_0[stackIndex] = 'BorderLayoutData.java:' + '394' , $setPreferredHeight(this$static, '0px');
  }
  this$static.minSize = (0 > minSize?0:minSize) + ($location_0[stackIndex] = 'BorderLayoutData.java:' + '397' , $clinit_106() , 'px');
  $location_0[stackIndex] = 'BorderLayoutData.java:' + '398' , this$static.maxSize = (0 > maxSize?0:maxSize) + 'px';
  $location_0[stackIndex] = 'BorderLayoutData.java:' + '399' , this$static.resizable = minSize < maxSize;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $BoxLayout_0(this$static, alignment){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $BoxLayout_0;
  $location_0[stackIndex] = 'BoxLayout.java:' + '187' , $BoxLayout_2(this$static, ($location_0[stackIndex] = 'BoxLayout.java:' + '170' , $clinit_787() , HORIZONTAL), alignment);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $BoxLayoutData_6(this$static, fillStyle, width, height){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $BoxLayoutData_6;
  $location_0[stackIndex] = 'BoxLayoutData.java:' + '192' , $BoxLayoutData_5(this$static, fillStyle, false);
  $location_0[stackIndex] = 'LayoutData.java:' + '118' , $setPreferredWidth(this$static, width);
  $location_0[stackIndex] = 'LayoutData.java:' + '119' , $setPreferredHeight(this$static, height);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $clinit_797(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_797;
  $location_0[stackIndex] = 'GridLayout.java:' + '61' , $clinit_797 = nullMethod;
  SPAN = $SimplePanel(($location_0[stackIndex] = 'GridLayout.java:' + '63' , new SimplePanel));
  $stackDepth_0 = stackIndex - 1;
}

function $GridLayout(this$static, columns, rows){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $GridLayout;
  $location_0[stackIndex] = 'GridLayout.java:' + '98' , $clinit_797();
  $location_0[stackIndex] = 'GridLayout.java:' + '114' , $BaseLayout(this$static);
  $location_0[stackIndex] = 'GridLayout.java:' + '146' , this$static.cols = 1 > columns?1:columns;
  $location_0[stackIndex] = 'GridLayout.java:' + '173' , this$static.rows_0 = 1 > rows?1:rows;
  $location_0[stackIndex] = 'GridLayout.java:' + '200' , this$static.horizontalAlignment = null;
  $location_0[stackIndex] = 'GridLayout.java:' + '236' , this$static.verticalAlignment = null;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $buildWidgetMatrix(this$static, layoutPanel){
  var c, cursorX, cursorY, iter, layoutData, r, widget, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $buildWidgetMatrix;
  $location_0[stackIndex] = 'GridLayout.java:' + '338' , cursorX = 0;
  $location_0[stackIndex] = 'GridLayout.java:' + '339' , cursorY = 0;
  $location_0[stackIndex] = 'GridLayout.java:' + '341' , this$static.widgetMatrix = ($location_0[stackIndex] = 'Array.java:' + '153' , initDims_0([_3_3Lcom_google_gwt_user_client_ui_Widget_2_classLit, _3Lcom_google_gwt_user_client_ui_Widget_2_classLit], [726, 667], [127, 2], [this$static.cols, this$static.rows_0], 0, 2, 0));
  for ($location_0[stackIndex] = 'GridLayout.java:' + '343' , iter = $LayoutPanel$3(($location_0[stackIndex] = 'LayoutPanel.java:' + '553' , new LayoutPanel$3), layoutPanel); $location_0[stackIndex] = 'LayoutPanel.java:' + '557' , $hasNext_1(iter.iter);) {
    $location_0[stackIndex] = 'GridLayout.java:' + '344' , widget = ($location_0[stackIndex] = 'LayoutPanel.java:' + '561' , $getUnDecoratedWidget(($location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , $next_2(iter.iter))));
    $location_0[stackIndex] = 'GridLayout.java:' + '346' , $syncDecoratorVisibility(widget);
    if ($location_0[stackIndex] = 'DOM.java:' + '275' , $equalsIgnoreCase('none', ($location_0[stackIndex] = 'DOM.java:' + '188' , $getComputedStyleAttribute(widget.element, 'display')))) {
      continue;
    }
    $location_0[stackIndex] = 'GridLayout.java:' + '352' , $add_7(this$static.visibleChildList, widget);
    layoutData = ($location_0[stackIndex] = 'GridLayout.java:' + '354' , $getLayoutData_3(widget));
    while (($location_0[stackIndex] = 'GridLayout.java:' + '356' , this$static.widgetMatrix[cursorX])[cursorY]) {
      if (($location_0[stackIndex] = 'GridLayout.java:' + '357' , ++cursorX) >= this$static.cols) {
        $location_0[stackIndex] = 'GridLayout.java:' + '358' , cursorX = 0;
        if (($location_0[stackIndex] = 'GridLayout.java:' + '359' , ++cursorY) >= this$static.rows_0) {
          break;
        }
      }
    }
    for ($location_0[stackIndex] = 'GridLayout.java:' + '365' , r = cursorY; r < cursorY + layoutData.rowspan; $location_0[stackIndex] = 'GridLayout.java:' + '365' , ++r) {
      if (r >= this$static.rows_0) {
        break;
      }
      for ($location_0[stackIndex] = 'GridLayout.java:' + '369' , c = cursorX; c < cursorX + layoutData.colspan; $location_0[stackIndex] = 'GridLayout.java:' + '369' , ++c) {
        if (c >= this$static.cols) {
          break;
        }
        setCheck(($location_0[stackIndex] = 'GridLayout.java:' + '373' , this$static.widgetMatrix[c]), r, SPAN);
      }
    }
    setCheck(($location_0[stackIndex] = 'GridLayout.java:' + '377' , this$static.widgetMatrix[cursorX]), cursorY, widget);
    $location_0[stackIndex] = 'GridLayout.java:' + '379' , cursorX += layoutData.colspan;
    if (cursorX >= this$static.cols) {
      $location_0[stackIndex] = 'GridLayout.java:' + '381' , cursorX = 0;
      if (($location_0[stackIndex] = 'GridLayout.java:' + '382' , ++cursorY) >= this$static.rows_0) {
        break;
      }
    }
  }
  $stackDepth_0 = stackIndex - 1;
}

function $getLayoutData_3(widget){
  var layoutDataObject, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getLayoutData_3;
  $location_0[stackIndex] = 'GridLayout.java:' + '122' , layoutDataObject = widget.layoutData;
  if (layoutDataObject == null || !(layoutDataObject != null && ($location_0[stackIndex] = 'Cast.java:' + '76' , canCast(layoutDataObject.typeId$, 208)))) {
    layoutDataObject = $GridLayoutData(($location_0[stackIndex] = 'GridLayout.java:' + '125' , new GridLayoutData));
    $location_0[stackIndex] = 'Widget.java:' + '141' , widget.layoutData = layoutDataObject;
  }
  returnTemp = ($location_0[stackIndex] = 'GridLayout.java:' + '128' , dynamicCast(layoutDataObject, 208));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $init_11(this$static, layoutPanel){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $init_11;
  if (this$static.initialized) {
    $stackDepth_0 = stackIndex - 1;
    return true;
  }
  $location_0[stackIndex] = 'GridLayout.java:' + '330' , $init_7(this$static, layoutPanel);
  $location_0[stackIndex] = 'GridLayout.java:' + '332' , $buildWidgetMatrix(this$static, layoutPanel);
  returnTemp = ($location_0[stackIndex] = 'GridLayout.java:' + '334' , this$static.initialized = true);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getClass_519(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_519;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_layout_GridLayout_2_classLit;
}

function getPreferredSize_9(layoutPanel){
  var $e0, c, cellHeight, cellWidth, dim, e, flowHeight, flowWidth, layoutData, r, result, spacing, widget, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getPreferredSize_9;
  result = $Dimension(($location_0[stackIndex] = 'GridLayout.java:' + '255' , new Dimension));
  try {
    if (!layoutPanel || !($location_0[stackIndex] = 'GridLayout.java:' + '258' , $init_11(this, layoutPanel))) {
      $stackDepth_0 = stackIndex - 1;
      return result;
    }
    for ($location_0[stackIndex] = 'GridLayout.java:' + '262' , r = 0; r < this.rows_0; $location_0[stackIndex] = 'GridLayout.java:' + '262' , ++r) {
      $location_0[stackIndex] = 'GridLayout.java:' + '263' , cellWidth = 0;
      $location_0[stackIndex] = 'GridLayout.java:' + '264' , cellHeight = 0;
      for ($location_0[stackIndex] = 'GridLayout.java:' + '265' , c = 0; c < this.cols; $location_0[stackIndex] = 'GridLayout.java:' + '265' , ++c) {
        widget = ($location_0[stackIndex] = 'GridLayout.java:' + '266' , this.widgetMatrix[c])[r];
        if (!widget || widget == SPAN) {
          continue;
        }
        widget != null && ($location_0[stackIndex] = 'Cast.java:' + '76' , canCast(widget.typeId$, 201)) && (widget = ($location_0[stackIndex] = 'GridLayout.java:' + '271' , dynamicCast(widget, 201)).widget_0);
        layoutData = ($location_0[stackIndex] = 'GridLayout.java:' + '274' , dynamicCast(widget.layoutData, 208));
        dim = ($location_0[stackIndex] = 'GridLayout.java:' + '276' , $Dimension_1(($location_0[stackIndex] = 'GridLayout.java:' + '276' , new Dimension), ($location_0[stackIndex] = 'BaseLayout.java:' + '463' , $getPreferredSize_1(this.preferredWidthMeasure.cache, widget)).width_0, ($location_0[stackIndex] = 'BaseLayout.java:' + '477' , $getPreferredSize_1(this.preferredHeightMeasure.cache, widget)).height_0));
        $location_0[stackIndex] = 'GridLayout.java:' + '282' , flowWidth = dim.width_0;
        $location_0[stackIndex] = 'GridLayout.java:' + '283' , flowHeight = dim.height_0;
        cellWidth = max(cellWidth, ($location_0[stackIndex] = 'GridLayout.java:' + '285' , round_int(($location_0[stackIndex] = 'Math.java:' + '67' , Math.ceil(flowWidth / layoutData.colspan)))));
        cellHeight = max(cellHeight, ($location_0[stackIndex] = 'GridLayout.java:' + '288' , round_int(($location_0[stackIndex] = 'Math.java:' + '67' , Math.ceil(flowHeight / layoutData.rowspan)))));
      }
      result.width_0 = ($location_0[stackIndex] = 'GridLayout.java:' + '291' , max(result.width_0, cellWidth));
      result.height_0 = ($location_0[stackIndex] = 'GridLayout.java:' + '292' , max(result.height_0, cellHeight));
    }
    $location_0[stackIndex] = 'GridLayout.java:' + '294' , result.width_0 *= this.cols;
    $location_0[stackIndex] = 'GridLayout.java:' + '295' , result.height_0 *= this.rows_0;
    $location_0[stackIndex] = 'GridLayout.java:' + '297' , result.width_0 += ($location_0[stackIndex] = 'BaseLayout.java:' + '546' , $getMarginSize_0(this.marginLeftMeasure.cache, layoutPanel)).left + ($location_0[stackIndex] = 'BaseLayout.java:' + '518' , $getMarginSize_0(this.marginRightMeasure.cache, layoutPanel)).right + ($location_0[stackIndex] = 'BaseLayout.java:' + '604' , $getBorderSize_0(this.borderLeftMeasure.cache, layoutPanel)).left + ($location_0[stackIndex] = 'BaseLayout.java:' + '576' , $getBorderSize_0(this.borderRightMeasure.cache, layoutPanel)).right + ($location_0[stackIndex] = 'BaseLayout.java:' + '620' , $getPaddingSize_0(this.paddingLeftMeasure.cache, layoutPanel)).top_0 + $getPaddingSize_0(this.paddingRightMeasure.cache, layoutPanel).top_0;
    $location_0[stackIndex] = 'GridLayout.java:' + '304' , result.height_0 += ($location_0[stackIndex] = 'BaseLayout.java:' + '504' , $getMarginSize_0(this.marginTopMeasure.cache, layoutPanel)).top_0 + ($location_0[stackIndex] = 'BaseLayout.java:' + '532' , $getMarginSize_0(this.marginBottomMeasure.cache, layoutPanel)).bottom + ($location_0[stackIndex] = 'BaseLayout.java:' + '562' , $getBorderSize_0(this.borderTopMeasure.cache, layoutPanel)).top_0 + ($location_0[stackIndex] = 'BaseLayout.java:' + '590' , $getBorderSize_0(this.borderBottomMeasure.cache, layoutPanel)).bottom + ($location_0[stackIndex] = 'BaseLayout.java:' + '620' , $getPaddingSize_0(this.paddingTopMeasure.cache, layoutPanel)).top_0 + $getPaddingSize_0(this.paddingBottomMeasure.cache, layoutPanel).top_0;
    $location_0[stackIndex] = 'GridLayout.java:' + '311' , spacing = layoutPanel.widgetSpacing;
    $location_0[stackIndex] = 'GridLayout.java:' + '312' , result.width_0 += (this.cols - 1) * spacing;
    $location_0[stackIndex] = 'GridLayout.java:' + '313' , result.height_0 += (this.rows_0 - 1) * spacing;
  }
   catch ($e0) {
    $e0 = ($location_0[stackIndex] = 'GridLayout.java:' + '315' , caught_0($e0));
    $stackDepth_0 = stackIndex;
    if (instanceOf($e0, 8)) {
      e = $e0;
      $location_0[stackIndex] = 'GridLayout.java:' + '316' , e.getMessage();
      $location_0[stackIndex] = 'Window.java:' + '600' , $wnd.alert(Lorg_gwt_mosaic_ui_client_layout_GridLayout_2_classLit.typeName + '.getPreferredSize(): ' + ($location_0[stackIndex] = 'Throwable.java:' + '81' , e.getMessage()));
    }
     else 
      throw $e0;
  }
  $stackDepth_0 = stackIndex - 1;
  return result;
}

function layoutPanel_8(layoutPanel){
  var $e0, borderSizes, box, c, cellHeight, cellWidth, colWidth, decPanel, decPanelFrameSize, e, hAlignment, height, layoutData, left, parent_0, prefSize, r, rowHeight, spacing, top_0, vAlignment, widget, width, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = layoutPanel_8;
  try {
    if (!layoutPanel || !($location_0[stackIndex] = 'GridLayout.java:' + '404' , $init_11(this, layoutPanel))) {
      $stackDepth_0 = stackIndex - 1;
      return;
    }
    box = ($location_0[stackIndex] = 'GridLayout.java:' + '408' , getClientSize(layoutPanel.element));
    $location_0[stackIndex] = 'GridLayout.java:' + '410' , left = ($location_0[stackIndex] = 'BaseLayout.java:' + '620' , $getPaddingSize_0(this.paddingLeftMeasure.cache, layoutPanel)).top_0;
    $location_0[stackIndex] = 'GridLayout.java:' + '411' , top_0 = ($location_0[stackIndex] = 'BaseLayout.java:' + '620' , $getPaddingSize_0(this.paddingTopMeasure.cache, layoutPanel)).top_0;
    $location_0[stackIndex] = 'GridLayout.java:' + '412' , width = box.width_0 - (left + ($location_0[stackIndex] = 'BaseLayout.java:' + '620' , $getPaddingSize_0(this.paddingRightMeasure.cache, layoutPanel)).top_0);
    $location_0[stackIndex] = 'GridLayout.java:' + '413' , height = box.height_0 - (top_0 + ($location_0[stackIndex] = 'BaseLayout.java:' + '620' , $getPaddingSize_0(this.paddingBottomMeasure.cache, layoutPanel)).top_0);
    $location_0[stackIndex] = 'GridLayout.java:' + '416' , spacing = layoutPanel.widgetSpacing;
    $location_0[stackIndex] = 'GridLayout.java:' + '419' , width -= (this.cols - 1) * spacing;
    $location_0[stackIndex] = 'GridLayout.java:' + '420' , height -= (this.rows_0 - 1) * spacing;
    $location_0[stackIndex] = 'GridLayout.java:' + '422' , colWidth = ~~(width / this.cols);
    $location_0[stackIndex] = 'GridLayout.java:' + '423' , rowHeight = ~~(height / this.rows_0);
    for ($location_0[stackIndex] = 'GridLayout.java:' + '425' , r = 0; r < this.rows_0; $location_0[stackIndex] = 'GridLayout.java:' + '425' , ++r) {
      for ($location_0[stackIndex] = 'GridLayout.java:' + '426' , c = 0; c < this.cols; $location_0[stackIndex] = 'GridLayout.java:' + '426' , ++c) {
        widget = ($location_0[stackIndex] = 'GridLayout.java:' + '427' , this.widgetMatrix[c])[r];
        if (!widget || widget == SPAN) {
          continue;
        }
        widget != null && ($location_0[stackIndex] = 'Cast.java:' + '76' , canCast(widget.typeId$, 201)) && (widget = ($location_0[stackIndex] = 'GridLayout.java:' + '432' , dynamicCast(widget, 201)).widget_0);
        layoutData = ($location_0[stackIndex] = 'GridLayout.java:' + '438' , dynamicCast(widget.layoutData, 208));
        $location_0[stackIndex] = 'GridLayout.java:' + '439' , parent_0 = widget.parent_0;
        if (parent_0 != null && ($location_0[stackIndex] = 'Cast.java:' + '76' , canCast(parent_0.typeId$, 201))) {
          decPanel = ($location_0[stackIndex] = 'GridLayout.java:' + '441' , dynamicCast(parent_0, 201));
          borderSizes = ($location_0[stackIndex] = 'GridLayout.java:' + '442' , $getBorderSizes(decPanel));
          decPanelFrameSize = ($location_0[stackIndex] = 'GridLayout.java:' + '443' , $Dimension_1(($location_0[stackIndex] = 'GridLayout.java:' + '443' , new Dimension), borderSizes[1] + ($location_0[stackIndex] = 'GridLayout.java:' + '444' , borderSizes[3]), borderSizes[0] + borderSizes[0]));
          $location_0[stackIndex] = 'GridLayout.java:' + '446' , cellWidth = colWidth * layoutData.colspan - decPanelFrameSize.width_0 + spacing * (layoutData.colspan - 1);
          $location_0[stackIndex] = 'GridLayout.java:' + '448' , cellHeight = rowHeight * layoutData.rowspan - decPanelFrameSize.height_0 + spacing * (layoutData.rowspan - 1);
        }
         else {
          $location_0[stackIndex] = 'GridLayout.java:' + '451' , cellWidth = colWidth * layoutData.colspan + spacing * (layoutData.colspan - 1);
          $location_0[stackIndex] = 'GridLayout.java:' + '453' , cellHeight = rowHeight * layoutData.rowspan + spacing * (layoutData.rowspan - 1);
        }
        $location_0[stackIndex] = 'GridLayout.java:' + '457' , hAlignment = layoutData.horizontalAlignment;
        !hAlignment && ($location_0[stackIndex] = 'GridLayout.java:' + '459' , hAlignment = this.horizontalAlignment);
        $location_0[stackIndex] = 'GridLayout.java:' + '462' , prefSize = null;
        if (!hAlignment) {
          $location_0[stackIndex] = 'GridLayout.java:' + '465' , layoutData.targetLeft = left + (spacing + colWidth) * c;
          $location_0[stackIndex] = 'GridLayout.java:' + '466' , layoutData.targetWidth = cellWidth;
        }
         else {
          prefSize = ($location_0[stackIndex] = 'GridLayout.java:' + '470' , $Dimension_1(($location_0[stackIndex] = 'GridLayout.java:' + '470' , new Dimension), ($location_0[stackIndex] = 'BaseLayout.java:' + '463' , $getPreferredSize_1(this.preferredWidthMeasure.cache, widget)).width_0, ($location_0[stackIndex] = 'BaseLayout.java:' + '477' , $getPreferredSize_1(this.preferredHeightMeasure.cache, widget)).height_0));
          ($location_0[stackIndex] = 'HasHorizontalAlignment.java:' + '68' , $clinit_380() , ALIGN_LEFT) == hAlignment?($location_0[stackIndex] = 'GridLayout.java:' + '474' , layoutData.targetLeft = left + (spacing + colWidth) * c):ALIGN_CENTER == hAlignment?($location_0[stackIndex] = 'GridLayout.java:' + '476' , layoutData.targetLeft = left + (spacing + colWidth) * c + ~~(cellWidth / 2) - ~~(prefSize.width_0 / 2)):($location_0[stackIndex] = 'GridLayout.java:' + '479' , layoutData.targetLeft = left + (spacing + colWidth) * c + cellWidth - prefSize.width_0);
          $location_0[stackIndex] = 'GridLayout.java:' + '482' , layoutData.targetWidth = prefSize.width_0;
        }
        $location_0[stackIndex] = 'GridLayout.java:' + '485' , vAlignment = layoutData.verticalAlignment;
        !vAlignment && ($location_0[stackIndex] = 'GridLayout.java:' + '487' , vAlignment = this.verticalAlignment);
        if (!vAlignment) {
          $location_0[stackIndex] = 'GridLayout.java:' + '491' , layoutData.targetTop = top_0 + (spacing + rowHeight) * r;
          $location_0[stackIndex] = 'GridLayout.java:' + '492' , layoutData.targetHeight = cellHeight;
        }
         else {
          !prefSize && (prefSize = ($location_0[stackIndex] = 'GridLayout.java:' + '497' , $Dimension_1(($location_0[stackIndex] = 'GridLayout.java:' + '497' , new Dimension), ($location_0[stackIndex] = 'BaseLayout.java:' + '463' , $getPreferredSize_1(this.preferredWidthMeasure.cache, widget)).width_0, ($location_0[stackIndex] = 'BaseLayout.java:' + '477' , $getPreferredSize_1(this.preferredHeightMeasure.cache, widget)).height_0)));
          ($location_0[stackIndex] = 'HasVerticalAlignment.java:' + '73' , $clinit_385() , ALIGN_TOP) == vAlignment?($location_0[stackIndex] = 'GridLayout.java:' + '501' , layoutData.targetTop = top_0 + (spacing + rowHeight) * r):ALIGN_MIDDLE == vAlignment?($location_0[stackIndex] = 'GridLayout.java:' + '503' , layoutData.targetTop = top_0 + (spacing + rowHeight) * r + ~~(cellHeight / 2) - ~~(prefSize.height_0 / 2)):($location_0[stackIndex] = 'GridLayout.java:' + '506' , layoutData.targetTop = top_0 + (spacing + rowHeight) * r + cellHeight - prefSize.height_0);
          $location_0[stackIndex] = 'GridLayout.java:' + '509' , layoutData.targetHeight = prefSize.height_0;
        }
        if (layoutPanel.animationEnabled) {
          $location_0[stackIndex] = 'GridLayout.java:' + '513' , $setSourceLeft(layoutData, $getAbsoluteLeft_0(($location_0[stackIndex] = 'Element.java:' + '150' , $clinit_81() , widget.element)) - $getAbsoluteLeft_0(layoutPanel.element));
          $location_0[stackIndex] = 'GridLayout.java:' + '515' , $setSourceTop(layoutData, ($location_0[stackIndex] = 'Element.java:' + '166' , $getAbsoluteTop_0(widget.element)) - $getAbsoluteTop_0(layoutPanel.element));
          $setSourceWidth(layoutData, ($location_0[stackIndex] = 'GridLayout.java:' + '517' , widget.getOffsetWidth()));
          $setSourceHeight(layoutData, ($location_0[stackIndex] = 'GridLayout.java:' + '518' , widget.getOffsetHeight()));
        }
      }
    }
    $location_0[stackIndex] = 'GridLayout.java:' + '523' , $layoutPanel(this, layoutPanel);
  }
   catch ($e0) {
    $e0 = ($location_0[stackIndex] = 'GridLayout.java:' + '525' , caught_0($e0));
    $stackDepth_0 = stackIndex;
    if (instanceOf($e0, 8)) {
      e = $e0;
      $location_0[stackIndex] = 'GridLayout.java:' + '526' , e.getMessage();
      $location_0[stackIndex] = 'Window.java:' + '600' , $wnd.alert(Lorg_gwt_mosaic_ui_client_layout_GridLayout_2_classLit.typeName + '.layoutPanel(): ' + ($location_0[stackIndex] = 'Throwable.java:' + '81' , e.getMessage()));
    }
     else 
      throw $e0;
  }
  $stackDepth_0 = stackIndex - 1;
}

function GridLayout(){
}

_ = GridLayout.prototype = new BaseLayout;
_.getClass$ = getClass_519;
_.getPreferredSize_0 = getPreferredSize_9;
_.layoutPanel_0 = layoutPanel_8;
_.typeId$ = 0;
_.cols = 0;
_.horizontalAlignment = null;
_.rows_0 = 0;
_.verticalAlignment = null;
_.widgetMatrix = null;
var SPAN;
function $GridLayoutData(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $GridLayoutData;
  $location_0[stackIndex] = 'LayoutData.java:' + '40' , this$static.decorate = false;
  $location_0[stackIndex] = 'GridLayoutData.java:' + '153' , this$static.colspan = 1 > 1?1:1;
  $location_0[stackIndex] = 'GridLayoutData.java:' + '165' , this$static.rowspan = 1 > 1?1:1;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_520(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_520;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_layout_GridLayoutData_2_classLit;
}

function GridLayoutData(){
}

_ = GridLayoutData.prototype = new LayoutData;
_.getClass$ = getClass_520;
_.typeId$ = 343;
_.colspan = 0;
_.horizontalAlignment = null;
_.rowspan = 0;
_.verticalAlignment = null;
function $fireIntervalAdded(this$static, source, index0, index1){
  var event_0, listener, listener$iterator, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $fireIntervalAdded;
  event_0 = ($location_0[stackIndex] = 'AbstractListModel.java:' + '64' , $ListDataEvent(($location_0[stackIndex] = 'AbstractListModel.java:' + '64' , new ListDataEvent), source, ($location_0[stackIndex] = 'ListDataEvent.java:' + '33' , $clinit_814() , INTERVAL_ADDED), index0, index1));
  for ($location_0[stackIndex] = 'AbstractListModel.java:' + '66' , listener$iterator = $AbstractList$IteratorImpl(($location_0[stackIndex] = 'AbstractList.java:' + '278' , new AbstractList$IteratorImpl), this$static.listenerList); listener$iterator.i < ($location_0[stackIndex] = 'AbstractList.java:' + '38' , listener$iterator.this$0.size_1());) {
    listener = dynamicCast(($location_0[stackIndex] = 'AbstractListModel.java:' + '66' , $next_6(listener$iterator)), 215);
    $location_0[stackIndex] = 'AbstractListModel.java:' + '67' , $intervalAdded(listener, event_0);
  }
  $stackDepth_0 = stackIndex - 1;
}

function $fireIntervalRemoved(this$static, source, index0, index1){
  var event_0, listener, listener$iterator, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $fireIntervalRemoved;
  event_0 = ($location_0[stackIndex] = 'AbstractListModel.java:' + '78' , $ListDataEvent(($location_0[stackIndex] = 'AbstractListModel.java:' + '78' , new ListDataEvent), source, ($location_0[stackIndex] = 'ListDataEvent.java:' + '35' , $clinit_814() , INTERVAL_REMOVED), index0, index1));
  for ($location_0[stackIndex] = 'AbstractListModel.java:' + '80' , listener$iterator = $AbstractList$IteratorImpl(($location_0[stackIndex] = 'AbstractList.java:' + '278' , new AbstractList$IteratorImpl), this$static.listenerList); listener$iterator.i < ($location_0[stackIndex] = 'AbstractList.java:' + '38' , listener$iterator.this$0.size_1());) {
    listener = dynamicCast(($location_0[stackIndex] = 'AbstractListModel.java:' + '80' , $next_6(listener$iterator)), 215);
    $location_0[stackIndex] = 'AbstractListModel.java:' + '81' , $intervalRemoved(listener, event_0);
  }
  $stackDepth_0 = stackIndex - 1;
}

function getClass_529(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_529;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_list_AbstractListModel_2_classLit;
}

function AbstractListModel(){
}

_ = AbstractListModel.prototype = new Object_0;
_.getClass$ = getClass_529;
_.typeId$ = 0;
function $DefaultListModel(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $DefaultListModel;
  this$static.listenerList = $ArrayList(($location_0[stackIndex] = 'AbstractListModel.java:' + '29' , new ArrayList));
  this$static.list = observableList($Vector(($location_0[stackIndex] = 'DefaultListModel.java:' + '34' , new Vector)));
  $location_0[stackIndex] = 'ObservableCollections.java:' + '351' , $add_7(this$static.list.listeners, this$static);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $listElementsRemoved(this$static, index, oldElements){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $listElementsRemoved;
  $location_0[stackIndex] = 'DefaultListModel.java:' + '103' , $fireIntervalRemoved(this$static, this$static, index, index + ($location_0[stackIndex] = 'Collections.java:' + '76' , oldElements.coll.size_1()) - 1);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_530(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_530;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_list_DefaultListModel_2_classLit;
}

function DefaultListModel(){
}

_ = DefaultListModel.prototype = new AbstractListModel;
_.getClass$ = getClass_530;
_.typeId$ = 347;
_.list = null;
function $ListColumn(this$static, name_0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ListColumn;
  $location_0[stackIndex] = 'ListColumn.java:' + '13' , this$static.name_0 = name_0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_531(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_531;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_list_ListColumn_2_classLit;
}

function ListColumn(){
}

_ = ListColumn.prototype = new Object_0;
_.getClass$ = getClass_531;
_.typeId$ = 348;
_.name_0 = null;
function $ListDataEvent(this$static, source, type, index0, index1){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ListDataEvent;
  $location_0[stackIndex] = 'EventObject.java:' + '26' , this$static.source_0 = source;
  $location_0[stackIndex] = 'ListDataEvent.java:' + '55' , this$static.type_0 = type;
  $location_0[stackIndex] = 'ListDataEvent.java:' + '56' , this$static.index0 = index0 < index1?index0:index1;
  $location_0[stackIndex] = 'ListDataEvent.java:' + '57' , this$static.index1 = index0 > index1?index0:index1;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_532(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_532;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_list_ListDataEvent_2_classLit;
}

function toString_55(){
  var returnTemp, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = toString_55;
  returnTemp = Lorg_gwt_mosaic_ui_client_list_ListDataEvent_2_classLit.typeName + '[type=' + this.type_0 + ',index0=' + this.index0 + ',index1=' + this.index1 + ']';
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function ListDataEvent(){
}

_ = ListDataEvent.prototype = new EventObject;
_.getClass$ = getClass_532;
_.toString$ = toString_55;
_.typeId$ = 0;
_.index0 = 0;
_.index1 = 0;
_.type_0 = null;
function $clinit_814(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_814;
  $location_0[stackIndex] = 'ListDataEvent.java:' + '29' , $clinit_814 = nullMethod;
  $location_0[stackIndex] = 'ListDataEvent.java:' + '31' , CONTENTS_CHANGED = $ListDataEvent$Type(($location_0[stackIndex] = 'ListDataEvent.java:' + '1' , new ListDataEvent$Type), 'CONTENTS_CHANGED', 0);
  $location_0[stackIndex] = 'ListDataEvent.java:' + '33' , INTERVAL_ADDED = $ListDataEvent$Type(($location_0[stackIndex] = 'ListDataEvent.java:' + '1' , new ListDataEvent$Type), 'INTERVAL_ADDED', 1);
  $location_0[stackIndex] = 'ListDataEvent.java:' + '35' , INTERVAL_REMOVED = $ListDataEvent$Type(($location_0[stackIndex] = 'ListDataEvent.java:' + '1' , new ListDataEvent$Type), 'INTERVAL_REMOVED', 2);
  $stackDepth_0 = stackIndex - 1;
}

function $ListDataEvent$Type(this$static, enum$name, enum$ordinal){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ListDataEvent$Type;
  $location_0[stackIndex] = 'ListDataEvent.java:' + '29' , $clinit_814();
  $location_0[stackIndex] = 'Enum.java:' + '76' , this$static.name_0 = enum$name;
  $location_0[stackIndex] = 'Enum.java:' + '77' , this$static.ordinal = enum$ordinal;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_533(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_533;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_list_ListDataEvent$Type_2_classLit;
}

function values_15(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = values_15;
  $location_0[stackIndex] = 'ListDataEvent.java:' + '29' , $clinit_814();
  returnTemp = initValues(_3Lorg_gwt_mosaic_ui_client_list_ListDataEvent$Type_2_classLit, 698, 99, [CONTENTS_CHANGED, INTERVAL_ADDED, INTERVAL_REMOVED]);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function ListDataEvent$Type(){
}

_ = ListDataEvent$Type.prototype = new Enum;
_.getClass$ = getClass_533;
_.typeId$ = 349;
var CONTENTS_CHANGED, INTERVAL_ADDED, INTERVAL_REMOVED;
function $ListHeader(this$static, names){
  var name_0, name$array, name$index, name$max, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ListHeader;
  this$static.array = ($location_0[stackIndex] = 'ArrayList.java:' + '64' , initDim(_3Ljava_lang_Object_2_classLit, 681, 0, 0, 0));
  if (names != null) {
    for ($location_0[stackIndex] = 'ListHeader.java:' + '16' , name$array = names , name$index = 0 , name$max = name$array.length; name$index < name$max; $location_0[stackIndex] = 'ListHeader.java:' + '16' , ++name$index) {
      name_0 = name$array[name$index];
      $add_7(this$static, $ListColumn(($location_0[stackIndex] = 'ListHeader.java:' + '17' , new ListColumn), name_0));
    }
  }
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_534(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_534;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_list_ListHeader_2_classLit;
}

function ListHeader(){
}

_ = ListHeader.prototype = new ArrayList;
_.getClass$ = getClass_534;
_.typeId$ = 350;
function $AbstractScrollTable(this$static, dataTable, headerTable, resources){
  var fillWidthImageElem, imageResource, mainElem, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $AbstractScrollTable;
  this$static.children = $WidgetCollection(($location_0[stackIndex] = 'ComplexPanel.java:' + '28' , new WidgetCollection), this$static);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '903' , this$static.columnResizePolicy = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '823' , $clinit_821() , MULTI_CELL);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '981' , this$static.resizePolicy = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '844' , $clinit_826() , FLOW);
  this$static.resizeWorker = $AbstractScrollTable$MouseResizeWorker(($location_0[stackIndex] = 'AbstractScrollTable.java:' + '986' , new AbstractScrollTable$MouseResizeWorker));
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '991' , this$static.scrollPolicy = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '874' , $clinit_827() , BOTH_0);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '996' , this$static.sortPolicy = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '887' , $clinit_831() , SINGLE_CELL_0);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1048' , this$static.dataTable = dataTable;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1049' , this$static.headerTable = headerTable;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1050' , this$static.resources = resources;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '508' , this$static.resizeWorker.table = this$static;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1553' , $setCellPadding_1(this$static.headerTable, 3);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1554' , $setCellPadding_0(this$static.dataTable, 3);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1558' , $redraw(this$static);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1567' , $setCellSpacing_1(this$static.headerTable, 0);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1568' , $setCellSpacing_0(this$static.dataTable, 0);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1572' , $redraw(this$static);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1057' , $prepareTable(dataTable, 'dataTable');
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1058' , $prepareTable(headerTable, 'headerTable');
  dataTable.selectionPolicy.inputHtml != null && ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1060' , $setColumnWidth_0(headerTable, 0, 30));
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1064' , mainElem = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , ($location_0[stackIndex] = 'Document.java:' + '252' , $clinit_81() , $doc).createElement('div'));
  $location_0[stackIndex] = 'UIObject.java:' + '799' , this$static.element = mainElem;
  $location_0[stackIndex] = 'UIObject.java:' + '659' , setStylePrimaryName(this$static.element, 'gwt-ScrollTable');
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1067' , setStyleAttribute_0(mainElem, 'padding', '0px');
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1068' , setStyleAttribute_0(mainElem, 'overflow', 'hidden');
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1069' , setStyleAttribute_0(mainElem, 'position', 'relative');
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1072' , this$static.absoluteElem = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , $doc.createElement('div'));
  $location_0[stackIndex] = 'Style.java:' + '1449' , this$static.absoluteElem.style['position'] = 'absolute';
  this$static.absoluteElem.style['top'] = '0px';
  this$static.absoluteElem.style['left'] = '0px';
  this$static.absoluteElem.style['width'] = '100%';
  this$static.absoluteElem.style['padding'] = '0px';
  this$static.absoluteElem.style['margin'] = '0px';
  this$static.absoluteElem.style['border'] = '0px';
  this$static.absoluteElem.style['overflow'] = 'hidden';
  $location_0[stackIndex] = 'Node.java:' + '72' , mainElem.appendChild(this$static.absoluteElem);
  this$static.headerWrapper = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1084' , $createWrapper_0('headerWrapper'));
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '132' , $resizeSpacer(headerTable, 15);
  this$static.dataWrapper = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1086' , $createWrapper_0('dataWrapper'));
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1089' , this$static.mockScrollable = ($location_0[stackIndex] = 'Node.java:' + '94' , this$static.dataWrapper.cloneNode(false));
  $location_0[stackIndex] = 'Style.java:' + '1449' , this$static.mockScrollable.style['position'] = 'absolute';
  this$static.mockScrollable.style['top'] = '0px';
  this$static.mockScrollable.style['left'] = '0px';
  this$static.mockScrollable.style['width'] = '100px';
  this$static.mockScrollable.style['height'] = '100px';
  this$static.mockScrollable.style['visibility'] = 'hidden';
  this$static.mockScrollable.style['overflow'] = 'scroll';
  this$static.mockScrollable.style['zIndex'] = '-1';
  $location_0[stackIndex] = 'Node.java:' + '72' , this$static.absoluteElem.appendChild(this$static.mockScrollable);
  this$static.fillWidthImage = $AbstractScrollTable$1(($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1101' , new AbstractScrollTable$1), this$static);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1110' , $setTitle(this$static.fillWidthImage, (!resources.messages && (resources.messages = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '807' , new AbstractScrollTable_ScrollTableMessages_)) , resources.messages , 'Shrink/Expand to fill visible area'));
  imageResource = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1111' , $scrollTableFillWidth((!resources.style_0 && (resources.style_0 = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '800' , new org_gwt_mosaic_ui_client_table_AbstractScrollTable_ScrollTableStyle_default_InlineClientBundleGenerator)) , resources.style_0)));
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1112' , $setUrlAndVisibleRect(this$static.fillWidthImage, imageResource.url, imageResource.left, imageResource.top_0, imageResource.width_0, imageResource.height_0);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1115' , fillWidthImageElem = this$static.fillWidthImage.element;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1116' , setStyleAttribute_0(fillWidthImageElem, 'cursor', 'pointer');
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1117' , setStyleAttribute_0(fillWidthImageElem, 'position', 'absolute');
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1118' , setStyleAttribute_0(fillWidthImageElem, 'top', '0px');
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1119' , setStyleAttribute_0(fillWidthImageElem, 'right', '0px');
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1120' , setStyleAttribute_0(fillWidthImageElem, 'zIndex', '1');
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1121' , $add_0(this$static, this$static.fillWidthImage, this$static.element);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1124' , $adoptTable(this$static, headerTable, this$static.headerWrapper, 0);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1125' , $adoptTable(this$static, dataTable, this$static.dataWrapper, 1);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1128' , this$static.sortedColumnWrapper = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , $doc.createElement('span'));
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1131' , $sinkEvents(this$static, 32);
  $location_0[stackIndex] = 'DOMImpl.java:' + '122' , this$static.dataWrapper.__listener = this$static;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1133' , sinkEvents(this$static.dataWrapper, 16384);
  $location_0[stackIndex] = 'DOMImpl.java:' + '122' , this$static.headerWrapper.__listener = this$static;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1135' , sinkEvents(this$static.headerWrapper, 77);
  $location_0[stackIndex] = 'SortableGrid.java:' + '224' , $addHandler_1(dataTable, $AbstractScrollTable$2(($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1139' , new AbstractScrollTable$2), this$static, headerTable), (!TYPE_22 && (TYPE_22 = $GwtEvent$Type(($location_0[stackIndex] = 'ColumnSortEvent.java:' + '77' , new GwtEvent$Type))) , TYPE_22));
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $adoptTable(this$static, table, wrapper, index){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $adoptTable;
  $location_0[stackIndex] = 'DOM.java:' + '929' , $insertChild(this$static.absoluteElem, wrapper, index);
  $location_0[stackIndex] = 'ComplexPanel.java:' + '84' , $removeFromParent(table);
  $location_0[stackIndex] = 'ComplexPanel.java:' + '87' , $add_10(this$static.children, table);
  $location_0[stackIndex] = 'Node.java:' + '72' , wrapper.appendChild(table.element);
  $location_0[stackIndex] = 'Panel.java:' + '119' , $setParent(table, this$static);
  $stackDepth_0 = stackIndex - 1;
}

function $applyNewColumnWidths(this$static, startIndex, infos, forced){
  var i, info, newWidth, numColumns, offset, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $applyNewColumnWidths;
  if (!infos) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  offset = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1928' , $getHeaderOffset(this$static));
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1929' , numColumns = infos.size_0;
  for ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1930' , i = 0; i < numColumns; $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1930' , ++i) {
    info = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1931' , dynamicCast(($location_0[stackIndex] = 'ArrayList.java:' + '157' , checkIndex(i, infos.size_0) , ($location_0[stackIndex] = 'ArrayList.java:' + '158' , infos.array[i])), 216));
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1932' , newWidth = info.newWidth;
    if (forced || info.curWidth != newWidth) {
      $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1934' , $setColumnWidth(this$static.dataTable, startIndex + i, newWidth);
      $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1935' , $setColumnWidth_0(this$static.headerTable, startIndex + i + offset, newWidth);
    }
  }
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1941' , $repositionSpacer(this$static, false);
  $stackDepth_0 = stackIndex - 1;
}

function $applySortedColumnIndicator(this$static, tdElem, ascending){
  var imageResource, parent_0, sortIndicator, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $applySortedColumnIndicator;
  if (!tdElem) {
    parent_0 = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1759' , getParent(this$static.sortedColumnWrapper));
    if (parent_0) {
      $location_0[stackIndex] = 'Node.java:' + '285' , parent_0.removeChild(this$static.sortedColumnWrapper);
      $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '601' , this$static.headerTable.idealWidths = null;
    }
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  $location_0[stackIndex] = 'Node.java:' + '72' , tdElem.appendChild(this$static.sortedColumnWrapper);
  ascending?(imageResource = $scrollTableAscending(($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1770' , $getStyle_0(this$static.resources)))):(imageResource = $scrollTableDescending(($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1772' , $getStyle_0(this$static.resources))));
  sortIndicator = $Image(($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1774' , new Image_0));
  $setTitle(sortIndicator, ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1775' , $getMessages(this$static.resources) , 'Shrink/Expand to fill visible area'));
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1776' , $setUrlAndVisibleRect(sortIndicator, imageResource.url, imageResource.left, imageResource.top_0, imageResource.width_0, imageResource.height_0);
  $location_0[stackIndex] = 'Element.java:' + '614' , this$static.sortedColumnWrapper.innerHTML = '&nbsp;' + ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1779' , $toString_10(sortIndicator)) || '';
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1780' , this$static.sortedRowIndex = -1;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1781' , this$static.sortedCellIndex = -1;
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '601' , this$static.headerTable.idealWidths = null;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1785' , $redraw(this$static);
  $stackDepth_0 = stackIndex - 1;
}

function $applyTableWrapperSizes(this$static, sizes){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $applyTableWrapperSizes;
  if (!sizes) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  $location_0[stackIndex] = 'Style.java:' + '1449' , this$static.headerWrapper.style['height'] = sizes.headerTableHeight + ($location_0[stackIndex] = 'Style.java:' + '1369' , $clinit_106() , 'px');
  $location_0[stackIndex] = 'Style.java:' + '1449' , this$static.dataWrapper.style['height'] = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1959' , max(sizes.dataTableHeight, 0)) + 'px';
  this$static.dataWrapper.style['overflow'] = 'hidden';
  this$static.dataWrapper.style['overflow'] = 'auto';
  $stackDepth_0 = stackIndex - 1;
}

function $createWrapper_0(cssName){
  var wrapper, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $createWrapper_0;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1795' , wrapper = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , ($location_0[stackIndex] = 'Document.java:' + '252' , $clinit_81() , $doc).createElement('div'));
  $location_0[stackIndex] = 'Style.java:' + '1449' , wrapper.style['width'] = '100%';
  wrapper.style['overflow'] = 'hidden';
  $location_0[stackIndex] = 'Style.java:' + '1449' , wrapper.style['padding'] = 0 + ($location_0[stackIndex] = 'Style.java:' + '1369' , $clinit_106() , 'px');
  wrapper.style['margin'] = '0px';
  wrapper.style['border'] = '0px';
  cssName != null && ($location_0[stackIndex] = 'Element.java:' + '688' , wrapper['className'] = cssName , undefined);
  $stackDepth_0 = stackIndex - 1;
  return wrapper;
}

function $fillWidth(this$static){
  var colWidths, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $fillWidth;
  colWidths = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1186' , $getFillColumnWidths(this$static, null));
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1187' , $applyNewColumnWidths(this$static, 0, colWidths, false);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1188' , $scrollTables(this$static, false);
  $stackDepth_0 = stackIndex - 1;
}

function $getAvailableWidth(this$static){
  var clientWidth, scrollbarWidth, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $getAvailableWidth;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1970' , clientWidth = parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , this$static.absoluteElem['clientWidth'])) || 0;
  if (this$static.scrollPolicy == ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '874' , $clinit_827() , BOTH_0)) {
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1972' , scrollbarWidth = (this$static.mockScrollable.offsetWidth || 0) - (parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , this$static.mockScrollable['clientWidth'])) || 0);
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1974' , clientWidth = (parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , this$static.absoluteElem['clientWidth'])) || 0) - scrollbarWidth - 1;
  }
  $stackDepth_0 = stackIndex - 1;
  return clientWidth > -1?clientWidth:-1;
}

function $getBoundedColumnWidths(this$static, boundsOnly){
  var colWidthInfos, info, info$iterator, numColumns, totalWidth, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $getBoundedColumnWidths;
  if (!this$static.attached) {
    $stackDepth_0 = stackIndex - 1;
    return null;
  }
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1993' , numColumns = this$static.dataTable.numColumns;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1994' , totalWidth = 0;
  colWidthInfos = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1995' , $getColumnWidthInfo_0(this$static, 0, numColumns));
  if (!boundsOnly) {
    for ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1999' , info$iterator = $AbstractList$IteratorImpl(($location_0[stackIndex] = 'AbstractList.java:' + '278' , new AbstractList$IteratorImpl), colWidthInfos); info$iterator.i < ($location_0[stackIndex] = 'AbstractList.java:' + '38' , info$iterator.this$0.size_1());) {
      info = dynamicCast(($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1999' , $next_6(info$iterator)), 216);
      $location_0[stackIndex] = 'AbstractScrollTable.java:' + '2000' , totalWidth += info.curWidth;
      $location_0[stackIndex] = 'ColumnResizer.java:' + '145' , info.curWidth = 0;
    }
  }
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '2006' , $distributeWidth(colWidthInfos, totalWidth);
  $stackDepth_0 = stackIndex - 1;
  return colWidthInfos;
}

function $getColumnWidthInfo(this$static, column){
  var curWidth, idealWidth, maxWidth, minWidth, preferredWidth, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getColumnWidthInfo;
  minWidth = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '2019' , this$static.getMinimumColumnWidth(column));
  maxWidth = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '2020' , this$static.getMaximumColumnWidth(column));
  preferredWidth = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '2021' , this$static.getPreferredColumnWidth(column));
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '2022' , curWidth = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1219' , $getColumnWidth(this$static.dataTable, column));
  if (!($location_0[stackIndex] = 'AbstractScrollTable.java:' + '2025' , this$static.isColumnTruncatable(column))) {
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '2026' , $maybeRecalculateIdealColumnWidths(this$static);
    idealWidth = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '2027' , $getIdealColumnWidth(this$static.dataTable, column));
    maxWidth != -1 && ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '2029' , idealWidth = idealWidth < maxWidth?idealWidth:maxWidth);
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '2031' , minWidth = minWidth > idealWidth?minWidth:idealWidth;
  }
  if (!($location_0[stackIndex] = 'AbstractScrollTable.java:' + '2033' , this$static.isHeaderColumnTruncatable(column))) {
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '2034' , $maybeRecalculateIdealColumnWidths(this$static);
    idealWidth = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '2035' , $getIdealColumnWidth_0(this$static.headerTable, column + ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '2036' , $getHeaderOffset(this$static))));
    maxWidth != -1 && ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '2038' , idealWidth = idealWidth < maxWidth?idealWidth:maxWidth);
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '2040' , minWidth = minWidth > idealWidth?minWidth:idealWidth;
  }
  returnTemp = $ColumnResizer$ColumnWidthInfo(($location_0[stackIndex] = 'AbstractScrollTable.java:' + '2052' , new ColumnResizer$ColumnWidthInfo), minWidth, maxWidth, preferredWidth, curWidth);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $getColumnWidthInfo_0(this$static, column, numColumns){
  var i, infos, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $getColumnWidthInfo_0;
  infos = $ArrayList(($location_0[stackIndex] = 'AbstractScrollTable.java:' + '2063' , new ArrayList));
  for ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '2064' , i = 0; i < numColumns; $location_0[stackIndex] = 'AbstractScrollTable.java:' + '2064' , ++i) {
    $add_7(infos, ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '2065' , $getColumnWidthInfo(this$static, column + i)));
  }
  $stackDepth_0 = stackIndex - 1;
  return infos;
}

function $getFillColumnWidths(this$static, info){
  var clientWidth, colWidthInfos, diff, numColumns, numDataCols, numHeaderCols, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $getFillColumnWidths;
  if (!this$static.attached) {
    $stackDepth_0 = stackIndex - 1;
    return null;
  }
  !info && (info = $AbstractScrollTable$TableWidthInfo(($location_0[stackIndex] = 'AbstractScrollTable.java:' + '2083' , new AbstractScrollTable$TableWidthInfo), false, this$static));
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '2087' , clientWidth = info.availableWidth;
  if (clientWidth <= 0) {
    $stackDepth_0 = stackIndex - 1;
    return null;
  }
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '2093' , diff = 0;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '2094' , numColumns = 0;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '2097' , numHeaderCols = 0;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '2098' , numDataCols = 0;
  info.headerTableWidth > 0 && (numHeaderCols = this$static.headerTable.maxRawColumnCount - ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '2101' , $getHeaderOffset(this$static)));
  info.dataTableWidth > 0 && ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '2104' , numDataCols = this$static.dataTable.numColumns);
  if (numHeaderCols >= numDataCols && numHeaderCols >= 0) {
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '2112' , numColumns = numHeaderCols;
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '2113' , diff = clientWidth - info.headerTableWidth;
  }
   else if (0 >= numDataCols && 0 >= numHeaderCols) {
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '2115' , numColumns = 0;
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '2116' , diff = clientWidth - info.footerTableWidth;
  }
   else if (numDataCols > 0) {
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '2118' , numColumns = numDataCols;
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '2119' , diff = clientWidth - info.dataTableWidth;
  }
  if (numColumns <= 0) {
    $stackDepth_0 = stackIndex - 1;
    return null;
  }
  colWidthInfos = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '2127' , $getColumnWidthInfo_0(this$static, 0, numColumns));
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '2128' , $distributeWidth(colWidthInfos, diff);
  $stackDepth_0 = stackIndex - 1;
  return colWidthInfos;
}

function $getHeaderOffset(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $getHeaderOffset;
  if (this$static.dataTable.selectionPolicy.inputHtml != null) {
    $stackDepth_0 = stackIndex - 1;
    return 1;
  }
  $stackDepth_0 = stackIndex - 1;
  return 0;
}

function $getTableWrapperSizes(this$static){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getTableWrapperSizes;
  if (!this$static.attached) {
    $stackDepth_0 = stackIndex - 1;
    return null;
  }
  if (this$static.scrollPolicy == ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '874' , $clinit_827() , DISABLED_0) || this$static.scrollPolicy == HORIZONTAL_1) {
    $stackDepth_0 = stackIndex - 1;
    return null;
  }
  returnTemp = $AbstractScrollTable$TableHeightInfo(($location_0[stackIndex] = 'AbstractScrollTable.java:' + '2166' , new AbstractScrollTable$TableHeightInfo), this$static);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $maybeRecalculateIdealColumnWidths(this$static){
  var dataTable, headerTable, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $maybeRecalculateIdealColumnWidths;
  if (!this$static.attached) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  if (this$static.headerTable.idealWidths != null && this$static.dataTable.idealWidths != null) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '162' , headerTable = this$static.headerTable;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '164' , dataTable = this$static.dataTable;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '167' , $recalculateIdealColumnWidthsSetup(dataTable);
  headerTable.idealColumnWidthInfo = ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '624' , $recalculateIdealColumnWidthsSetup_0((!impl_4 && (impl_4 = ($location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '65' , new FixedWidthTableImpl$Impl)) , headerTable), headerTable.maxRawColumnCount, 0));
  dataTable.idealWidths = ($location_0[stackIndex] = 'FixedWidthGrid.java:' + '480' , $recalculateIdealColumnWidths_2((!impl_4 && (impl_4 = ($location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '65' , new FixedWidthTableImpl$Impl)) , dataTable.idealColumnWidthInfo)));
  headerTable.idealWidths = ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '616' , $recalculateIdealColumnWidths_2((!impl_4 && (impl_4 = ($location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '65' , new FixedWidthTableImpl$Impl)) , headerTable.idealColumnWidthInfo)));
  $location_0[stackIndex] = 'FixedWidthGrid.java:' + '500' , $recalculateIdealColumnWidthsTeardown((!impl_4 && (impl_4 = ($location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '65' , new FixedWidthTableImpl$Impl)) , dataTable.idealColumnWidthInfo));
  $location_0[stackIndex] = 'FixedWidthGrid.java:' + '502' , dataTable.idealColumnWidthInfo = null;
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '632' , $recalculateIdealColumnWidthsTeardown((!impl_4 && (impl_4 = ($location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '65' , new FixedWidthTableImpl$Impl)) , headerTable.idealColumnWidthInfo));
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '634' , headerTable.idealColumnWidthInfo = null;
  $stackDepth_0 = stackIndex - 1;
}

function $prepareTable(table, cssName){
  var tableElem, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $prepareTable;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '2200' , tableElem = table.element;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '2201' , setStyleAttribute_0(tableElem, 'margin', '0px');
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '2202' , setStyleAttribute_0(tableElem, 'border', '0px');
  $location_0[stackIndex] = 'UIObject.java:' + '449' , setStyleName(table.element, cssName, true);
  $stackDepth_0 = stackIndex - 1;
}

function $redraw(this$static){
  var colWidths, redrawInfo, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $redraw;
  if (!this$static.attached) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  redrawInfo = $AbstractScrollTable$TableWidthInfo(($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1494' , new AbstractScrollTable$TableWidthInfo), false, this$static);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1506' , $maybeRecalculateIdealColumnWidths(this$static);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1509' , colWidths = null;
  this$static.resizePolicy == ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '844' , $clinit_826() , FILL_WIDTH)?(colWidths = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1511' , $getFillColumnWidths(this$static, redrawInfo))):(colWidths = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1513' , $getBoundedColumnWidths(this$static, true)));
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1515' , $applyNewColumnWidths(this$static, 0, colWidths, true);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1520' , $resizeTablesVertically(this$static);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1523' , $scrollTables(this$static, false);
  $stackDepth_0 = stackIndex - 1;
}

function $resizeTablesVertically(this$static){
  var height, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $resizeTablesVertically;
  if (this$static.scrollPolicy == ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '874' , $clinit_827() , DISABLED_0)) {
    $location_0[stackIndex] = 'Style.java:' + '1449' , this$static.dataWrapper.style['overflow'] = 'auto';
    this$static.dataWrapper.style['overflow'] = '';
    height = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1850' , max(1, this$static.absoluteElem.offsetHeight || 0));
    $location_0[stackIndex] = 'Style.java:' + '1449' , this$static.element.style['height'] = height + 'px';
  }
   else if (this$static.scrollPolicy == HORIZONTAL_1) {
    this$static.dataWrapper.style['overflow'] = 'hidden';
    this$static.dataWrapper.style['overflow'] = 'auto';
    height = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1855' , max(1, this$static.absoluteElem.offsetHeight || 0));
    $location_0[stackIndex] = 'Style.java:' + '1449' , this$static.element.style['height'] = height + 'px';
  }
   else {
    $applyTableWrapperSizes(this$static, ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1858' , $getTableWrapperSizes(this$static)));
    $location_0[stackIndex] = 'Style.java:' + '1449' , this$static.dataWrapper.style['width'] = '100%';
  }
  $stackDepth_0 = stackIndex - 1;
}

function $scrollTables(this$static, baseHeader){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $scrollTables;
  if (this$static.scrollPolicy == ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '874' , $clinit_827() , DISABLED_0)) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  if (this$static.lastScrollLeft >= 0) {
    $location_0[stackIndex] = 'DOMImpl.java:' + '346' , ($location_0[stackIndex] = 'Element.java:' + '695' , $clinit_81() , this$static.headerWrapper).scrollLeft = this$static.lastScrollLeft;
    baseHeader && (this$static.dataWrapper.scrollLeft = this$static.lastScrollLeft , undefined);
  }
  $stackDepth_0 = stackIndex - 1;
}

function $setCellPadding(this$static, padding){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setCellPadding;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1553' , $setCellPadding_1(this$static.headerTable, padding);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1554' , $setCellPadding_0(this$static.dataTable, padding);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1558' , $redraw(this$static);
  $stackDepth_0 = stackIndex - 1;
}

function $setCellSpacing(this$static, spacing){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setCellSpacing;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1567' , $setCellSpacing_1(this$static.headerTable, spacing);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1568' , $setCellSpacing_0(this$static.dataTable, spacing);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1572' , $redraw(this$static);
  $stackDepth_0 = stackIndex - 1;
}

function $setResizePolicy(this$static, resizePolicy){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setResizePolicy;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1690' , this$static.resizePolicy = resizePolicy;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1691' , $updateFillWidthImage(this$static);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1692' , $redraw(this$static);
  $stackDepth_0 = stackIndex - 1;
}

function $updateFillWidthImage(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $updateFillWidthImage;
  this$static.columnResizePolicy == ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '823' , $clinit_821() , DISABLED) || this$static.resizePolicy.isFixedWidth?($location_0[stackIndex] = 'UIObject.java:' + '214' , this$static.fillWidthImage.element.style.display = 'none' , undefined):(this$static.fillWidthImage.element.style.display = '' , undefined);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_535(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_535;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable_2_classLit;
}

function getPreferredSize_10(){
  var height, m, width, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getPreferredSize_10;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '2224' , width = parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , this.headerTable.element['offsetWidth'])) || 0;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '2225' , height = (parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , this.headerTable.element['offsetHeight'])) || 0) + (parseInt(this.dataTable.element['offsetHeight']) || 0);
  m = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '2230' , getMarginSizes(this.element));
  returnTemp = $Dimension_1(($location_0[stackIndex] = 'AbstractScrollTable.java:' + '2231' , new Dimension), width + m[1] + m[3], height + m[0] + m[2]);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function invalidate_5(widget){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = invalidate_5;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '2249' , invalidate_6(this.parent_0);
  $stackDepth_0 = stackIndex - 1;
}

function layout_9(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = layout_9;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '2258' , $redraw(this);
  $stackDepth_0 = stackIndex - 1;
}

function onBrowserEvent_12(event_0){
  var cellElem, clientX, clientY, colSpan, column, tableBottom, tableHeight, tableLeft, tableRight, tableTop, tableWidth, target, toElem, parent_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onBrowserEvent_12;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1374' , $onBrowserEvent(this, event_0);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1375' , target = ($location_0[stackIndex] = 'NativeEvent.java:' + '109' , $clinit_81() , event_0).target;
  switch ($location_0[stackIndex] = 'DOMImpl.java:' + '61' , $eventGetTypeInt(event_0.type)) {
    case 16384:
      $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1379' , this.lastScrollLeft = this.dataWrapper.scrollLeft || 0;
      $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1380' , $scrollTables(this, false);
      ($location_0[stackIndex] = 'DOMImplStandard.java:' + '118' , this.dataWrapper.contains(target)) && ($location_0[stackIndex] = 'DomEvent.java:' + '91' , fireNativeEvent(event_0, this, null));
      break;
    case 4:
      if (($location_0[stackIndex] = 'NativeEvent.java:' + '63' , $eventGetButton(event_0)) != 1) {
        $stackDepth_0 = stackIndex - 1;
        return;
      }

      if (this.resizeWorker.curCell) {
        $location_0[stackIndex] = 'DOMImplStandard.java:' + '108' , event_0.preventDefault();
        $location_0[stackIndex] = 'DOMImpl.java:' + '49' , event_0.cancelBubble = true;
        $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1394' , $startResizing(this.resizeWorker, event_0);
      }

      break;
    case 8:
      if (($location_0[stackIndex] = 'NativeEvent.java:' + '63' , $eventGetButton(event_0)) != 1) {
        $stackDepth_0 = stackIndex - 1;
        return;
      }

      if (this.resizeWorker.resizing) {
        $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1403' , $stopResizing(this.resizeWorker);
      }
       else {
        ($location_0[stackIndex] = 'DOMImplStandard.java:' + '118' , this.headerWrapper.contains(target))?($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1407' , $scrollTables(this, true)):($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1409' , $scrollTables(this, false));
        cellElem = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1413' , $getEventTargetCell(this.headerTable, event_0));
        if (cellElem) {
          if (this.sortPolicy == ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '887' , $clinit_831() , DISABLED_1)) {
            $stackDepth_0 = stackIndex - 1;
            return;
          }
          $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1421' , colSpan = parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , cellElem['colSpan'])) || 0;
          if (colSpan > 1 && this.sortPolicy != MULTI_CELL_0) {
            $stackDepth_0 = stackIndex - 1;
            return;
          }
          $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1427' , this.sortedRowIndex = (parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , ($location_0[stackIndex] = 'DOMImpl.java:' + '236' , parent_0 = cellElem.parentNode , (!parent_0 || parent_0.nodeType != 1) && ($location_0[stackIndex] = 'DOMImpl.java:' + '238' , parent_0 = null) , parent_0)['rowIndex'])) || 0) - 1;
          $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1428' , this.sortedCellIndex = parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , cellElem['cellIndex'])) || 0;
          $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1429' , column = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1429' , $getColumnIndex(this.headerTable, this.sortedRowIndex, this.sortedCellIndex)) - ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1431' , $getHeaderOffset(this));
          column >= 0 && ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1432' , this.isColumnSortable(column)) && this.dataTable.numColumns > column && ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1435' , $sortColumn(this.dataTable, column));
        }
      }

      break;
    case 64:
      this.resizeWorker.resizing?($location_0[stackIndex] = 'AbstractScrollTable.java:' + '422' , this.resizeWorker.mouseXCurrent = event_0.clientX || 0 , undefined):($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1446' , $setCurrentCell(this.resizeWorker, event_0));
      break;
    case 32:
      $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1451' , toElem = ($location_0[stackIndex] = 'DOM.java:' + '581' , $eventGetToElement(event_0));
      if (!toElem || !($location_0[stackIndex] = 'DOMImplStandard.java:' + '118' , this.dataWrapper.contains(toElem))) {
        $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1454' , clientX = (event_0.clientX || 0) + ($location_0[stackIndex] = 'Document.java:' + '1259' , $getScrollLeft_0($doc));
        $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1455' , clientY = (event_0.clientY || 0) + ($location_0[stackIndex] = 'Document.java:' + '1268' , $getScrollTop_0($doc));
        $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1456' , tableLeft = ($location_0[stackIndex] = 'Element.java:' + '150' , $getAbsoluteLeft_0(this.dataWrapper));
        $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1457' , tableTop = ($location_0[stackIndex] = 'Element.java:' + '166' , $getAbsoluteTop_0(this.dataWrapper));
        $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1458' , tableWidth = this.dataWrapper.offsetWidth || 0;
        $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1459' , tableHeight = this.dataWrapper.offsetHeight || 0;
        $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1460' , tableBottom = tableTop + tableHeight;
        $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1461' , tableRight = tableLeft + tableWidth;
        if (clientX > tableLeft && clientX < tableRight && clientY > tableTop && clientY < tableBottom) {
          $stackDepth_0 = stackIndex - 1;
          return;
        }
        $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1467' , $highlightCell(this.dataTable, null);
      }

  }
  $stackDepth_0 = stackIndex - 1;
}

function onLoad_18(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onLoad_18;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1839' , $redraw(this);
  $stackDepth_0 = stackIndex - 1;
}

function onResize_11(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onResize_11;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '2258' , $redraw(this);
  $stackDepth_0 = stackIndex - 1;
}

function remove_36(child){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = remove_36;
  throw $UnsupportedOperationException_0(($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1535' , new UnsupportedOperationException), 'This panel does not support remove()');
}

function setHeight_6(height){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = setHeight_6;
  $location_0[stackIndex] = 'Style.java:' + '1449' , this.element.style['height'] = height;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1681' , $resizeTablesVertically(this);
  $stackDepth_0 = stackIndex - 1;
}

function AbstractScrollTable(){
}

_ = AbstractScrollTable.prototype = new ComplexPanel;
_.getClass$ = getClass_535;
_.getPreferredSize = getPreferredSize_10;
_.invalidate = invalidate_5;
_.layout_0 = layout_9;
_.onBrowserEvent = onBrowserEvent_12;
_.onLoad = onLoad_18;
_.onResize_0 = onResize_11;
_.remove_0 = remove_36;
_.setHeight = setHeight_6;
_.typeId$ = 351;
_.absoluteElem = null;
_.dataTable = null;
_.dataWrapper = null;
_.fillWidthImage = null;
_.headerTable = null;
_.headerWrapper = null;
_.lastScrollLeft = 0;
_.mockScrollable = null;
_.resources = null;
_.sortedCellIndex = -1;
_.sortedColumnWrapper = null;
_.sortedRowIndex = -1;
function $clinit_819(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_819;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1101' , $clinit_819 = nullMethod;
  $clinit_390();
  $stackDepth_0 = stackIndex - 1;
}

function $AbstractScrollTable$1(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $AbstractScrollTable$1;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1101' , $clinit_819();
  this$static.this$0 = this$0;
  $Image(this$static);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_536(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_536;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable$1_2_classLit;
}

function onBrowserEvent_13(event_0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onBrowserEvent_13;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1104' , $onBrowserEvent(this, event_0);
  ($location_0[stackIndex] = 'DOMImpl.java:' + '61' , $eventGetTypeInt(($location_0[stackIndex] = 'NativeEvent.java:' + '209' , $clinit_81() , event_0).type)) == 1 && ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1106' , $fillWidth(this.this$0));
  $stackDepth_0 = stackIndex - 1;
}

function AbstractScrollTable$1(){
}

_ = AbstractScrollTable$1.prototype = new Image_0;
_.getClass$ = getClass_536;
_.onBrowserEvent = onBrowserEvent_13;
_.typeId$ = 352;
_.this$0 = null;
function $AbstractScrollTable$2(this$static, this$0, val$headerTable){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $AbstractScrollTable$2;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1139' , this$static.this$0 = this$0;
  this$static.val$headerTable = val$headerTable;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $onColumnSorted(this$static, event_0){
  var ascending, column, formatter, parent_0, sortList, td, parent_1, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $onColumnSorted;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1142' , column = -1;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1143' , ascending = true;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1144' , sortList = event_0.sortList;
  if (sortList) {
    column = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1146' , $getPrimaryColumn(sortList));
    ascending = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1147' , $isPrimaryAscending(sortList));
  }
  if ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1151' , $isColumnSortable(this$static.this$0, column)) {
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1152' , parent_0 = ($location_0[stackIndex] = 'DOMImpl.java:' + '236' , parent_1 = ($location_0[stackIndex] = 'Node.java:' + '184' , $clinit_81() , this$static.this$0.sortedColumnWrapper).parentNode , (!parent_1 || parent_1.nodeType != 1) && ($location_0[stackIndex] = 'DOMImpl.java:' + '238' , parent_1 = null) , parent_1);
    !!parent_0 && ($location_0[stackIndex] = 'Node.java:' + '285' , parent_0.removeChild(this$static.this$0.sortedColumnWrapper));
    if (column < 0) {
      $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1159' , this$static.this$0.sortedCellIndex = -1;
      $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1160' , this$static.this$0.sortedRowIndex = -1;
    }
     else if (this$static.this$0.sortedCellIndex >= 0 && this$static.this$0.sortedRowIndex >= 0 && this$static.val$headerTable.bodyElem.rows.length - 1 > this$static.this$0.sortedRowIndex && ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1163' , $getCellCount(this$static.val$headerTable, this$static.this$0.sortedRowIndex)) > this$static.this$0.sortedCellIndex) {
      $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1164' , formatter = this$static.val$headerTable.cellFormatter;
      td = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1165' , $getElement(formatter, this$static.this$0.sortedRowIndex, this$static.this$0.sortedCellIndex));
      $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1166' , $applySortedColumnIndicator(this$static.this$0, td, ascending);
    }
  }
  $stackDepth_0 = stackIndex - 1;
}

function getClass_537(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_537;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable$2_2_classLit;
}

function AbstractScrollTable$2(){
}

_ = AbstractScrollTable$2.prototype = new Object_0;
_.getClass$ = getClass_537;
_.typeId$ = 353;
_.this$0 = null;
_.val$headerTable = null;
function $clinit_821(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_821;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '822' , $clinit_821 = nullMethod;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '823' , DISABLED = $AbstractScrollTable$ColumnResizePolicy(($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1' , new AbstractScrollTable$ColumnResizePolicy), 'DISABLED', 0);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '823' , SINGLE_CELL = $AbstractScrollTable$ColumnResizePolicy(($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1' , new AbstractScrollTable$ColumnResizePolicy), 'SINGLE_CELL', 1);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '823' , MULTI_CELL = $AbstractScrollTable$ColumnResizePolicy(($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1' , new AbstractScrollTable$ColumnResizePolicy), 'MULTI_CELL', 2);
  $stackDepth_0 = stackIndex - 1;
}

function $AbstractScrollTable$ColumnResizePolicy(this$static, enum$name, enum$ordinal){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $AbstractScrollTable$ColumnResizePolicy;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '822' , $clinit_821();
  $location_0[stackIndex] = 'Enum.java:' + '76' , this$static.name_0 = enum$name;
  $location_0[stackIndex] = 'Enum.java:' + '77' , this$static.ordinal = enum$ordinal;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_538(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_538;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable$ColumnResizePolicy_2_classLit;
}

function values_16(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = values_16;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '822' , $clinit_821();
  returnTemp = initValues(_3Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable$ColumnResizePolicy_2_classLit, 699, 100, [DISABLED, SINGLE_CELL, MULTI_CELL]);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function AbstractScrollTable$ColumnResizePolicy(){
}

_ = AbstractScrollTable$ColumnResizePolicy.prototype = new Enum;
_.getClass$ = getClass_538;
_.typeId$ = 354;
var DISABLED, MULTI_CELL, SINGLE_CELL;
function $getMessages(this$static){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getMessages;
  !this$static.messages && (this$static.messages = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '807' , new AbstractScrollTable_ScrollTableMessages_));
  returnTemp = this$static.messages;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $getStyle_0(this$static){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getStyle_0;
  !this$static.style_0 && (this$static.style_0 = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '800' , new org_gwt_mosaic_ui_client_table_AbstractScrollTable_ScrollTableStyle_default_InlineClientBundleGenerator));
  returnTemp = this$static.style_0;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getClass_539(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_539;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable$DefaultScrollTableResources_2_classLit;
}

function AbstractScrollTable$DefaultScrollTableResources(){
}

_ = AbstractScrollTable$DefaultScrollTableResources.prototype = new Object_0;
_.getClass$ = getClass_539;
_.typeId$ = 0;
_.messages = null;
_.style_0 = null;
function $getSpacerWidth(table){
  var $e0, paddingStr, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getSpacerWidth;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '246' , paddingStr = ($location_0[stackIndex] = 'Style.java:' + '1442' , table.element.style['paddingRight']);
  if (paddingStr == null || paddingStr.length < 3) {
    $stackDepth_0 = stackIndex - 1;
    return -1;
  }
  try {
    returnTemp = ($location_0[stackIndex] = 'Integer.java:' + '117' , __parseAndValidateInt(($location_0[stackIndex] = 'String.java:' + '718' , paddingStr.substr(0, paddingStr.length - 2 - 0)), 10, -2147483648, 2147483647));
    $stackDepth_0 = stackIndex - 1;
    return returnTemp;
  }
   catch ($e0) {
    $e0 = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '259' , caught_0($e0));
    $stackDepth_0 = stackIndex;
    if (instanceOf($e0, 217)) {
      $stackDepth_0 = stackIndex - 1;
      return -1;
    }
     else 
      throw $e0;
  }
  $stackDepth_0 = stackIndex - 1;
}

function $getTableWidth(table, includeSpacer){
  var scrollWidth, spacerWidth, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $getTableWidth;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '144' , scrollWidth = table.element.scrollWidth || 0;
  if (!includeSpacer) {
    spacerWidth = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '146' , $getSpacerWidth(table));
    spacerWidth > 0 && ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '148' , scrollWidth -= spacerWidth);
  }
  $stackDepth_0 = stackIndex - 1;
  return scrollWidth;
}

function $repositionSpacer(scrollTable, force){
  var dataWrapper, spacerWidth, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $repositionSpacer;
  if (!force && scrollTable.scrollPolicy != ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '874' , $clinit_827() , BOTH_0)) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '205' , dataWrapper = scrollTable.dataWrapper;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '206' , spacerWidth = (dataWrapper.offsetWidth || 0) - (parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , dataWrapper['clientWidth'])) || 0);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '208' , $resizeSpacer(scrollTable.headerTable, spacerWidth);
  $stackDepth_0 = stackIndex - 1;
}

function $resizeSpacer(table, spacerWidth){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $resizeSpacer;
  if (spacerWidth == ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '225' , $getSpacerWidth(table))) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  $location_0[stackIndex] = 'Style.java:' + '1449' , table.element.style['paddingRight'] = spacerWidth + ($location_0[stackIndex] = 'Style.java:' + '1369' , $clinit_106() , 'px');
  $stackDepth_0 = stackIndex - 1;
}

function $AbstractScrollTable$MouseResizeWorker(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $AbstractScrollTable$MouseResizeWorker;
  this$static.curCells = $ArrayList(($location_0[stackIndex] = 'AbstractScrollTable.java:' + '347' , new ArrayList));
  this$static.resizeTimer = $AbstractScrollTable$MouseResizeWorker$1(($location_0[stackIndex] = 'AbstractScrollTable.java:' + '373' , new AbstractScrollTable$MouseResizeWorker$1), this$static);
  this$static.sacrificeCells = $ArrayList(($location_0[stackIndex] = 'AbstractScrollTable.java:' + '394' , new ArrayList));
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $getCellIndex(this$static, cell){
  var column, row, parent_0, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getCellIndex;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '572' , row = (parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , ($location_0[stackIndex] = 'DOMImpl.java:' + '236' , parent_0 = ($location_0[stackIndex] = 'Node.java:' + '184' , $clinit_81() , cell).parentNode , (!parent_0 || parent_0.nodeType != 1) && ($location_0[stackIndex] = 'DOMImpl.java:' + '238' , parent_0 = null) , parent_0)['rowIndex'])) || 0) - 1;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '573' , column = parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , cell['cellIndex'])) || 0;
  returnTemp = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '574' , $getColumnIndex(this$static.table.headerTable, row, column)) - ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '575' , $getHeaderOffset(this$static.table));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $resizeColumn_0(this$static){
  var remaining, totalDelta, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $resizeColumn_0;
  if (this$static.mouseXLast != this$static.mouseXCurrent) {
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '584' , this$static.mouseXLast = this$static.mouseXCurrent;
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '587' , totalDelta = this$static.mouseXCurrent - this$static.mouseXStart;
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '588' , $clinit_223();
    totalDelta -= ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '591' , $distributeWidth(this$static.curCells, totalDelta));
    if (this$static.table.resizePolicy.isSacrificial) {
      remaining = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '595' , $distributeWidth(this$static.sacrificeCells, -totalDelta));
      if (remaining != 0 && this$static.table.resizePolicy.isFixedWidth) {
        $location_0[stackIndex] = 'AbstractScrollTable.java:' + '600' , totalDelta += remaining;
        $location_0[stackIndex] = 'AbstractScrollTable.java:' + '601' , $distributeWidth(this$static.curCells, totalDelta);
      }
      $location_0[stackIndex] = 'AbstractScrollTable.java:' + '605' , $applyNewColumnWidths(this$static.table, this$static.sacrificeCellIndex, this$static.sacrificeCells, true);
    }
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '609' , $applyNewColumnWidths(this$static.table, this$static.curCellIndex, this$static.curCells, true);
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '612' , $scrollTables(this$static.table, false);
  }
  $stackDepth_0 = stackIndex - 1;
}

function $setCurrentCell(this$static, event_0){
  var absLeft, absRight, cell, clientX, colSpan, info, info$iterator, resizable, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setCurrentCell;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '433' , cell = null;
  if (this$static.table.columnResizePolicy == ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '823' , $clinit_821() , MULTI_CELL)) {
    cell = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '435' , $getEventTargetCell(this$static.table.headerTable, event_0));
  }
   else if (this$static.table.columnResizePolicy == SINGLE_CELL) {
    cell = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '437' , $getEventTargetCell(this$static.table.headerTable, event_0));
    !!cell && (parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , cell['colSpan'])) || 0) > 1 && ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '439' , cell = null);
  }
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '444' , clientX = ($location_0[stackIndex] = 'NativeEvent.java:' + '72' , $clinit_81() , event_0).clientX || 0;
  if (cell) {
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '446' , absLeft = ($location_0[stackIndex] = 'Element.java:' + '150' , $getAbsoluteLeft_0(cell)) - ($location_0[stackIndex] = 'Document.java:' + '1259' , $getScrollLeft_0($doc));
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '447' , $clinit_223();
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '452' , absRight = absLeft + (cell.offsetWidth || 0);
    (clientX < absRight - 15 || clientX > absRight) && ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '454' , cell = null);
  }
  if (cell != this$static.curCell) {
    !!this$static.curCell && ($location_0[stackIndex] = 'Style.java:' + '1449' , this$static.curCell.style['cursor'] = '' , undefined);
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '467' , this$static.curCell = cell;
    if (this$static.curCell) {
      this$static.curCellIndex = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '470' , $getCellIndex(this$static, this$static.curCell));
      if (this$static.curCellIndex < 0) {
        $location_0[stackIndex] = 'AbstractScrollTable.java:' + '472' , this$static.curCell = null;
        $stackDepth_0 = stackIndex - 1;
        return false;
      }
      $location_0[stackIndex] = 'AbstractScrollTable.java:' + '477' , resizable = false;
      $location_0[stackIndex] = 'AbstractScrollTable.java:' + '478' , colSpan = parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , cell['colSpan'])) || 0;
      this$static.curCells = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '479' , $getColumnWidthInfo_0(this$static.table, this$static.curCellIndex, colSpan));
      for ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '480' , info$iterator = $AbstractList$IteratorImpl(($location_0[stackIndex] = 'AbstractList.java:' + '278' , new AbstractList$IteratorImpl), this$static.curCells); info$iterator.i < ($location_0[stackIndex] = 'AbstractList.java:' + '38' , info$iterator.this$0.size_1());) {
        info = dynamicCast(($location_0[stackIndex] = 'AbstractScrollTable.java:' + '480' , $next_6(info$iterator)), 216);
        (info.maxWidth < 0 || info.minWidth < 0 || ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '482' , $getMaximumWidth(info)) != info.minWidth) && ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '483' , resizable = true);
      }
      if (!resizable) {
        $location_0[stackIndex] = 'AbstractScrollTable.java:' + '487' , this$static.curCell = null;
        $location_0[stackIndex] = 'AbstractScrollTable.java:' + '488' , this$static.curCells = null;
        $stackDepth_0 = stackIndex - 1;
        return false;
      }
      $location_0[stackIndex] = 'Style.java:' + '1449' , this$static.curCell.style['cursor'] = 'e-resize';
    }
    $stackDepth_0 = stackIndex - 1;
    return true;
  }
  $stackDepth_0 = stackIndex - 1;
  return false;
}

function $startResizing(this$static, event_0){
  var colSpan, numColumns, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $startResizing;
  if (this$static.curCell) {
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '519' , this$static.resizing = true;
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '520' , this$static.mouseXStart = ($location_0[stackIndex] = 'NativeEvent.java:' + '72' , $clinit_81() , event_0).clientX || 0;
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '521' , this$static.mouseXLast = this$static.mouseXStart;
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '522' , this$static.mouseXCurrent = this$static.mouseXStart;
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '525' , numColumns = this$static.table.dataTable.numColumns;
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '526' , colSpan = parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , this$static.curCell['colSpan'])) || 0;
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '527' , this$static.sacrificeCellIndex = this$static.curCellIndex + colSpan;
    this$static.sacrificeCells = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '528' , $getColumnWidthInfo_0(this$static.table, this$static.sacrificeCellIndex, numColumns - this$static.sacrificeCellIndex));
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '532' , setCapture(this$static.table.headerWrapper);
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '533' , $schedule(this$static.resizeTimer, 20);
  }
  $stackDepth_0 = stackIndex - 1;
}

function $stopResizing(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $stopResizing;
  if (!!this$static.curCell && this$static.resizing) {
    $location_0[stackIndex] = 'Style.java:' + '1449' , this$static.curCell.style['cursor'] = '';
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '545' , this$static.curCell = null;
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '546' , this$static.resizing = false;
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '547' , releaseCapture(this$static.table.headerWrapper);
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '548' , $cancel_0(this$static.resizeTimer);
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '549' , $resizeColumn_0(this$static);
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '550' , this$static.curCells = null;
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '551' , this$static.sacrificeCells = null;
    $location_0[stackIndex] = 'AbstractScrollTable.java:' + '552' , $resizeTablesVertically(this$static.table);
  }
  $stackDepth_0 = stackIndex - 1;
}

function getClass_540(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_540;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable$MouseResizeWorker_2_classLit;
}

function AbstractScrollTable$MouseResizeWorker(){
}

_ = AbstractScrollTable$MouseResizeWorker.prototype = new Object_0;
_.getClass$ = getClass_540;
_.typeId$ = 0;
_.curCell = null;
_.curCellIndex = 0;
_.mouseXCurrent = 0;
_.mouseXLast = 0;
_.mouseXStart = 0;
_.resizing = false;
_.sacrificeCellIndex = -1;
_.table = null;
function $clinit_825(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_825;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '373' , $clinit_825 = nullMethod;
  $clinit_43();
  $stackDepth_0 = stackIndex - 1;
}

function $AbstractScrollTable$MouseResizeWorker$1(this$static, this$1){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $AbstractScrollTable$MouseResizeWorker$1;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '373' , $clinit_825();
  this$static.this$1 = this$1;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_541(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_541;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable$MouseResizeWorker$1_2_classLit;
}

function run_14(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = run_14;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '376' , $resizeColumn_0(this.this$1);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '377' , $schedule(this, 100);
  $stackDepth_0 = stackIndex - 1;
}

function AbstractScrollTable$MouseResizeWorker$1(){
}

_ = AbstractScrollTable$MouseResizeWorker$1.prototype = new Timer;
_.getClass$ = getClass_541;
_.run = run_14;
_.typeId$ = 355;
_.this$1 = null;
function $clinit_826(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_826;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '843' , $clinit_826 = nullMethod;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '844' , UNCONSTRAINED = $AbstractScrollTable$ResizePolicy(($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1' , new AbstractScrollTable$ResizePolicy), 'UNCONSTRAINED', 0, false, false);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '844' , FLOW = $AbstractScrollTable$ResizePolicy(($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1' , new AbstractScrollTable$ResizePolicy), 'FLOW', 1, false, true);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '844' , FIXED_WIDTH = $AbstractScrollTable$ResizePolicy(($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1' , new AbstractScrollTable$ResizePolicy), 'FIXED_WIDTH', 2, true, true);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '844' , FILL_WIDTH = $AbstractScrollTable$ResizePolicy(($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1' , new AbstractScrollTable$ResizePolicy), 'FILL_WIDTH', 3, true, true);
  $stackDepth_0 = stackIndex - 1;
}

function $AbstractScrollTable$ResizePolicy(this$static, enum$name, enum$ordinal, isFixedWidth, isSacrificial){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $AbstractScrollTable$ResizePolicy;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '850' , $clinit_826();
  $location_0[stackIndex] = 'Enum.java:' + '76' , this$static.name_0 = enum$name;
  $location_0[stackIndex] = 'Enum.java:' + '77' , this$static.ordinal = enum$ordinal;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '851' , this$static.isFixedWidth = isFixedWidth;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '852' , this$static.isSacrificial = isSacrificial;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_542(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_542;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable$ResizePolicy_2_classLit;
}

function values_17(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = values_17;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '843' , $clinit_826();
  returnTemp = initValues(_3Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable$ResizePolicy_2_classLit, 700, 101, [UNCONSTRAINED, FLOW, FIXED_WIDTH, FILL_WIDTH]);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function AbstractScrollTable$ResizePolicy(){
}

_ = AbstractScrollTable$ResizePolicy.prototype = new Enum;
_.getClass$ = getClass_542;
_.typeId$ = 356;
_.isFixedWidth = false;
_.isSacrificial = false;
var FILL_WIDTH, FIXED_WIDTH, FLOW, UNCONSTRAINED;
function $clinit_827(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_827;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '873' , $clinit_827 = nullMethod;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '874' , HORIZONTAL_1 = $AbstractScrollTable$ScrollPolicy(($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1' , new AbstractScrollTable$ScrollPolicy), 'HORIZONTAL', 0);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '874' , BOTH_0 = $AbstractScrollTable$ScrollPolicy(($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1' , new AbstractScrollTable$ScrollPolicy), 'BOTH', 1);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '874' , DISABLED_0 = $AbstractScrollTable$ScrollPolicy(($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1' , new AbstractScrollTable$ScrollPolicy), 'DISABLED', 2);
  $stackDepth_0 = stackIndex - 1;
}

function $AbstractScrollTable$ScrollPolicy(this$static, enum$name, enum$ordinal){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $AbstractScrollTable$ScrollPolicy;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '873' , $clinit_827();
  $location_0[stackIndex] = 'Enum.java:' + '76' , this$static.name_0 = enum$name;
  $location_0[stackIndex] = 'Enum.java:' + '77' , this$static.ordinal = enum$ordinal;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_543(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_543;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable$ScrollPolicy_2_classLit;
}

function values_18(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = values_18;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '873' , $clinit_827();
  returnTemp = initValues(_3Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable$ScrollPolicy_2_classLit, 701, 102, [HORIZONTAL_1, BOTH_0, DISABLED_0]);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function AbstractScrollTable$ScrollPolicy(){
}

_ = AbstractScrollTable$ScrollPolicy.prototype = new Enum;
_.getClass$ = getClass_543;
_.typeId$ = 357;
var BOTH_0, DISABLED_0, HORIZONTAL_1;
function $clinit_831(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_831;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '886' , $clinit_831 = nullMethod;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '887' , DISABLED_1 = $AbstractScrollTable$SortPolicy(($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1' , new AbstractScrollTable$SortPolicy), 'DISABLED', 0);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '887' , SINGLE_CELL_0 = $AbstractScrollTable$SortPolicy(($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1' , new AbstractScrollTable$SortPolicy), 'SINGLE_CELL', 1);
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '887' , MULTI_CELL_0 = $AbstractScrollTable$SortPolicy(($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1' , new AbstractScrollTable$SortPolicy), 'MULTI_CELL', 2);
  $stackDepth_0 = stackIndex - 1;
}

function $AbstractScrollTable$SortPolicy(this$static, enum$name, enum$ordinal){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $AbstractScrollTable$SortPolicy;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '886' , $clinit_831();
  $location_0[stackIndex] = 'Enum.java:' + '76' , this$static.name_0 = enum$name;
  $location_0[stackIndex] = 'Enum.java:' + '77' , this$static.ordinal = enum$ordinal;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_544(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_544;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable$SortPolicy_2_classLit;
}

function values_19(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = values_19;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '886' , $clinit_831();
  returnTemp = initValues(_3Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable$SortPolicy_2_classLit, 702, 103, [DISABLED_1, SINGLE_CELL_0, MULTI_CELL_0]);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function AbstractScrollTable$SortPolicy(){
}

_ = AbstractScrollTable$SortPolicy.prototype = new Enum;
_.getClass$ = getClass_544;
_.typeId$ = 358;
var DISABLED_1, MULTI_CELL_0, SINGLE_CELL_0;
function $AbstractScrollTable$TableHeightInfo(this$static, this$0){
  var totalHeight, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $AbstractScrollTable$TableHeightInfo;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '701' , this$static.this$0 = this$0;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '702' , totalHeight = parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , this$static.this$0.element['clientHeight'])) || 0;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '703' , this$static.headerTableHeight = parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , this$static.this$0.headerTable.element['offsetHeight'])) || 0;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '707' , this$static.dataTableHeight = totalHeight - this$static.headerTableHeight - this$static.footerTableHeight;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_545(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_545;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable$TableHeightInfo_2_classLit;
}

function AbstractScrollTable$TableHeightInfo(){
}

_ = AbstractScrollTable$TableHeightInfo.prototype = new Object_0;
_.getClass$ = getClass_545;
_.typeId$ = 0;
_.dataTableHeight = 0;
_.footerTableHeight = 0;
_.headerTableHeight = 0;
_.this$0 = null;
function $AbstractScrollTable$TableWidthInfo(this$static, includeSpacer, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $AbstractScrollTable$TableWidthInfo;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '725' , this$static.this$0 = this$0;
  this$static.availableWidth = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '726' , $getAvailableWidth(this$static.this$0));
  this$static.headerTableWidth = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '727' , $getTableWidth(this$static.this$0.headerTable, includeSpacer));
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '728' , this$static.dataTableWidth = this$static.this$0.dataTable.element.scrollWidth || 0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_546(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_546;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable$TableWidthInfo_2_classLit;
}

function AbstractScrollTable$TableWidthInfo(){
}

_ = AbstractScrollTable$TableWidthInfo.prototype = new Object_0;
_.getClass$ = getClass_546;
_.typeId$ = 0;
_.availableWidth = 0;
_.dataTableWidth = 0;
_.footerTableWidth = 0;
_.headerTableWidth = 0;
_.this$0 = null;
function getClass_547(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_547;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable_1ScrollTableMessages_1_2_classLit;
}

function AbstractScrollTable_ScrollTableMessages_(){
}

_ = AbstractScrollTable_ScrollTableMessages_.prototype = new Object_0;
_.getClass$ = getClass_547;
_.typeId$ = 0;
function $distributeWidth(columns, width){
  var comparator, curWidth, info, info$iterator, orderedColumns, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $distributeWidth;
  for ($location_0[stackIndex] = 'ColumnResizer.java:' + '197' , info$iterator = $AbstractList$IteratorImpl(($location_0[stackIndex] = 'AbstractList.java:' + '278' , new AbstractList$IteratorImpl), columns); info$iterator.i < ($location_0[stackIndex] = 'AbstractList.java:' + '38' , info$iterator.this$0.size_1());) {
    info = dynamicCast(($location_0[stackIndex] = 'ColumnResizer.java:' + '197' , $next_6(info$iterator)), 216);
    $location_0[stackIndex] = 'ColumnResizer.java:' + '198' , curWidth = info.curWidth;
    info.minWidth >= 0 && curWidth < info.minWidth?($location_0[stackIndex] = 'ColumnResizer.java:' + '200' , curWidth = info.minWidth):info.maxWidth >= 0 && curWidth > ($location_0[stackIndex] = 'ColumnResizer.java:' + '201' , $getMaximumWidth(info)) && (curWidth = ($location_0[stackIndex] = 'ColumnResizer.java:' + '202' , $getMaximumWidth(info)));
    $location_0[stackIndex] = 'ColumnResizer.java:' + '204' , width -= curWidth - info.curWidth;
    $location_0[stackIndex] = 'ColumnResizer.java:' + '177' , info.newWidth = curWidth;
  }
  if (width == 0) {
    $stackDepth_0 = stackIndex - 1;
    return 0;
  }
  orderedColumns = $ArrayList_0(($location_0[stackIndex] = 'ColumnResizer.java:' + '214' , new ArrayList), columns);
  if (width > 0) {
    comparator = ($location_0[stackIndex] = 'ColumnResizer.java:' + '220' , new ColumnResizer$1);
    $location_0[stackIndex] = 'ColumnResizer.java:' + '233' , sort(orderedColumns, comparator);
  }
   else if (width < 0) {
    comparator = ($location_0[stackIndex] = 'ColumnResizer.java:' + '236' , new ColumnResizer$2);
    $location_0[stackIndex] = 'ColumnResizer.java:' + '249' , sort(orderedColumns, comparator);
  }
  returnTemp = ($location_0[stackIndex] = 'ColumnResizer.java:' + '253' , $distributeWidthImpl(orderedColumns, width));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $distributeWidthImpl(columns, width){
  var curIndex, curInfo, fullySynced, growing, maxedOut, newWidth, percentAvailable, preferredWidth, required, syncedColumns, targetDiff, totalRequired, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $distributeWidthImpl;
  $location_0[stackIndex] = 'ColumnResizer.java:' + '258' , growing = width > 0;
  $location_0[stackIndex] = 'ColumnResizer.java:' + '259' , fullySynced = false;
  $location_0[stackIndex] = 'ColumnResizer.java:' + '260' , syncedColumns = 1;
  while (columns.size_0 > 0 && width != 0) {
    targetDiff = ($location_0[stackIndex] = 'ColumnResizer.java:' + '263' , $getTargetDiff(columns, syncedColumns, width));
    $location_0[stackIndex] = 'ColumnResizer.java:' + '266' , totalRequired = 0;
    for ($location_0[stackIndex] = 'ColumnResizer.java:' + '267' , curIndex = 0; curIndex < syncedColumns; $location_0[stackIndex] = 'ColumnResizer.java:' + '267' , ++curIndex) {
      curInfo = ($location_0[stackIndex] = 'ColumnResizer.java:' + '269' , dynamicCast(($location_0[stackIndex] = 'ArrayList.java:' + '157' , checkIndex(curIndex, columns.size_0) , ($location_0[stackIndex] = 'ArrayList.java:' + '158' , columns.array[curIndex])), 216));
      $location_0[stackIndex] = 'ColumnResizer.java:' + '270' , preferredWidth = curInfo.preferredWidth;
      $location_0[stackIndex] = 'ColumnResizer.java:' + '271' , newWidth = ~~Math.max(($location_0[stackIndex] = 'Cast.java:' + '185' , Math.min(targetDiff * preferredWidth, 2147483647)), -2147483648) + preferredWidth;
      if (growing) {
        newWidth = ($location_0[stackIndex] = 'ColumnResizer.java:' + '275' , max(newWidth, curInfo.curWidth));
        curInfo.maxWidth >= 0 && (newWidth = min_1(newWidth, ($location_0[stackIndex] = 'ColumnResizer.java:' + '277' , $getMaximumWidth(curInfo))));
      }
       else {
        newWidth = ($location_0[stackIndex] = 'ColumnResizer.java:' + '280' , min_1(newWidth, curInfo.curWidth));
        curInfo.minWidth >= 0 && (newWidth = ($location_0[stackIndex] = 'ColumnResizer.java:' + '282' , max(newWidth, curInfo.minWidth)));
      }
      $location_0[stackIndex] = 'ColumnResizer.java:' + '181' , curInfo.requiredWidth = newWidth - curInfo.newWidth;
      $location_0[stackIndex] = 'ColumnResizer.java:' + '288' , totalRequired += curInfo.requiredWidth;
    }
    $location_0[stackIndex] = 'ColumnResizer.java:' + '292' , percentAvailable = 1;
    totalRequired != 0 && ($location_0[stackIndex] = 'ColumnResizer.java:' + '294' , percentAvailable = 1 < width / totalRequired?1:width / totalRequired);
    for ($location_0[stackIndex] = 'ColumnResizer.java:' + '296' , curIndex = 0; curIndex < syncedColumns; $location_0[stackIndex] = 'ColumnResizer.java:' + '296' , ++curIndex) {
      curInfo = ($location_0[stackIndex] = 'ColumnResizer.java:' + '298' , dynamicCast(($location_0[stackIndex] = 'ArrayList.java:' + '157' , checkIndex(curIndex, columns.size_0) , ($location_0[stackIndex] = 'ArrayList.java:' + '158' , columns.array[curIndex])), 216));
      $location_0[stackIndex] = 'ColumnResizer.java:' + '299' , required = ~~Math.max(($location_0[stackIndex] = 'Cast.java:' + '185' , Math.min(percentAvailable * curInfo.requiredWidth, 2147483647)), -2147483648);
      fullySynced && (growing?($location_0[stackIndex] = 'ColumnResizer.java:' + '304' , required = 1 > required?1:required):($location_0[stackIndex] = 'ColumnResizer.java:' + '306' , required = -1 < required?-1:required));
      growing && required > width?($location_0[stackIndex] = 'ColumnResizer.java:' + '312' , required = width):!growing && required < width && ($location_0[stackIndex] = 'ColumnResizer.java:' + '314' , required = width);
      $location_0[stackIndex] = 'ColumnResizer.java:' + '318' , $setNewWidth(curInfo, curInfo.newWidth + required);
      $location_0[stackIndex] = 'ColumnResizer.java:' + '319' , width -= required;
      $location_0[stackIndex] = 'ColumnResizer.java:' + '322' , maxedOut = false;
      growing && curInfo.maxWidth >= 0?(maxedOut = curInfo.newWidth >= ($location_0[stackIndex] = 'ColumnResizer.java:' + '324' , $getMaximumWidth(curInfo))):!growing && curInfo.minWidth >= 0 && ($location_0[stackIndex] = 'ColumnResizer.java:' + '326' , maxedOut = curInfo.newWidth <= curInfo.minWidth);
      if (maxedOut) {
        $location_0[stackIndex] = 'ColumnResizer.java:' + '329' , $remove_7(columns, curIndex);
        $location_0[stackIndex] = 'ColumnResizer.java:' + '330' , --curIndex;
        $location_0[stackIndex] = 'ColumnResizer.java:' + '331' , --syncedColumns;
      }
    }
    !fullySynced && syncedColumns < columns.size_0?($location_0[stackIndex] = 'ColumnResizer.java:' + '337' , ++syncedColumns):($location_0[stackIndex] = 'ColumnResizer.java:' + '339' , fullySynced = true);
  }
  $stackDepth_0 = stackIndex - 1;
  return width;
}

function $getTargetDiff(columns, syncedColumns, width){
  var info, info$iterator, totalNewWidth, totalPreferredWidth, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getTargetDiff;
  if (syncedColumns < columns.size_0) {
    returnTemp = $getPercentageDifference(($location_0[stackIndex] = 'ColumnResizer.java:' + '358' , dynamicCast(($location_0[stackIndex] = 'ArrayList.java:' + '157' , checkIndex(syncedColumns, columns.size_0) , ($location_0[stackIndex] = 'ArrayList.java:' + '158' , columns.array[syncedColumns])), 216)));
    $stackDepth_0 = stackIndex - 1;
    return returnTemp;
  }
   else {
    $location_0[stackIndex] = 'ColumnResizer.java:' + '361' , totalNewWidth = width;
    $location_0[stackIndex] = 'ColumnResizer.java:' + '362' , totalPreferredWidth = 0;
    for ($location_0[stackIndex] = 'ColumnResizer.java:' + '363' , info$iterator = $AbstractList$IteratorImpl(($location_0[stackIndex] = 'AbstractList.java:' + '278' , new AbstractList$IteratorImpl), columns); info$iterator.i < ($location_0[stackIndex] = 'AbstractList.java:' + '38' , info$iterator.this$0.size_1());) {
      info = dynamicCast(($location_0[stackIndex] = 'ColumnResizer.java:' + '363' , $next_6(info$iterator)), 216);
      $location_0[stackIndex] = 'ColumnResizer.java:' + '364' , totalNewWidth += info.newWidth;
      $location_0[stackIndex] = 'ColumnResizer.java:' + '365' , totalPreferredWidth += info.preferredWidth;
    }
    $stackDepth_0 = stackIndex - 1;
    return (totalNewWidth - totalPreferredWidth) / totalPreferredWidth;
  }
  $stackDepth_0 = stackIndex - 1;
}

function $compare_1(o1, o2){
  var diff1, diff2, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $compare_1;
  $location_0[stackIndex] = 'ColumnResizer.java:' + '222' , diff1 = (o1.newWidth - o1.preferredWidth) / o1.preferredWidth;
  $location_0[stackIndex] = 'ColumnResizer.java:' + '223' , diff2 = (o2.newWidth - o2.preferredWidth) / o2.preferredWidth;
  if (diff1 < diff2) {
    $stackDepth_0 = stackIndex - 1;
    return -1;
  }
   else if (diff1 == diff2) {
    $stackDepth_0 = stackIndex - 1;
    return 0;
  }
   else {
    $stackDepth_0 = stackIndex - 1;
    return 1;
  }
  $stackDepth_0 = stackIndex - 1;
}

function compare_3(p0, p1){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = compare_3;
  returnTemp = $compare_1(($location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , dynamicCast(p0, 216)), dynamicCast(p1, 216));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getClass_548(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_548;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_ColumnResizer$1_2_classLit;
}

function ColumnResizer$1(){
}

_ = ColumnResizer$1.prototype = new Object_0;
_.compare = compare_3;
_.getClass$ = getClass_548;
_.typeId$ = 0;
function $compare_2(o1, o2){
  var diff1, diff2, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $compare_2;
  $location_0[stackIndex] = 'ColumnResizer.java:' + '238' , diff1 = (o1.newWidth - o1.preferredWidth) / o1.preferredWidth;
  $location_0[stackIndex] = 'ColumnResizer.java:' + '239' , diff2 = (o2.newWidth - o2.preferredWidth) / o2.preferredWidth;
  if (diff1 > diff2) {
    $stackDepth_0 = stackIndex - 1;
    return -1;
  }
   else if (diff1 == diff2) {
    $stackDepth_0 = stackIndex - 1;
    return 0;
  }
   else {
    $stackDepth_0 = stackIndex - 1;
    return 1;
  }
  $stackDepth_0 = stackIndex - 1;
}

function compare_4(p0, p1){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = compare_4;
  returnTemp = $compare_2(($location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , dynamicCast(p0, 216)), dynamicCast(p1, 216));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getClass_549(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_549;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_ColumnResizer$2_2_classLit;
}

function ColumnResizer$2(){
}

_ = ColumnResizer$2.prototype = new Object_0;
_.compare = compare_4;
_.getClass$ = getClass_549;
_.typeId$ = 0;
function $ColumnResizer$ColumnWidthInfo(this$static, minWidth, maxWidth, preferredWidth, curWidth){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ColumnResizer$ColumnWidthInfo;
  $location_0[stackIndex] = 'ColumnResizer.java:' + '106' , this$static.minWidth = minWidth;
  $location_0[stackIndex] = 'ColumnResizer.java:' + '107' , this$static.maxWidth = maxWidth;
  $location_0[stackIndex] = 'ColumnResizer.java:' + '108' , this$static.preferredWidth = preferredWidth;
  $location_0[stackIndex] = 'ColumnResizer.java:' + '109' , this$static.curWidth = curWidth;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $getMaximumWidth(this$static){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getMaximumWidth;
  if (this$static.maxWidth >= 0) {
    returnTemp = ($location_0[stackIndex] = 'ColumnResizer.java:' + '119' , max(this$static.maxWidth, this$static.minWidth));
    $stackDepth_0 = stackIndex - 1;
    return returnTemp;
  }
  returnTemp = this$static.maxWidth;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $getPercentageDifference(this$static){
  var returnTemp, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $getPercentageDifference;
  returnTemp = (this$static.newWidth - this$static.preferredWidth) / this$static.preferredWidth;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $setNewWidth(this$static, newWidth){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setNewWidth;
  $location_0[stackIndex] = 'ColumnResizer.java:' + '177' , this$static.newWidth = newWidth;
  $stackDepth_0 = stackIndex - 1;
}

function getClass_550(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_550;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_ColumnResizer$ColumnWidthInfo_2_classLit;
}

function ColumnResizer$ColumnWidthInfo(){
}

_ = ColumnResizer$ColumnWidthInfo.prototype = new Object_0;
_.getClass$ = getClass_550;
_.typeId$ = 359;
_.curWidth = 0;
_.maxWidth = 0;
_.minWidth = 0;
_.newWidth = 0;
_.preferredWidth = 0;
_.requiredWidth = 0;
function $createRow_1(this$static){
  var td, tr, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $createRow_1;
  tr = ($location_0[stackIndex] = 'SelectionGrid.java:' + '564' , $createRow_0(this$static));
  if (this$static.selectionPolicy.inputHtml != null) {
    td = ($location_0[stackIndex] = 'SelectionGrid.java:' + '566' , $createCell_0());
    $location_0[stackIndex] = 'Element.java:' + '688' , td['align'] = 'center';
    $location_0[stackIndex] = 'Element.java:' + '614' , td.innerHTML = ($location_0[stackIndex] = 'SelectionGrid.java:' + '568' , $getInputHtml(this$static, this$static.selectionPolicy)) || '';
    $location_0[stackIndex] = 'DOM.java:' + '929' , $insertChild(tr, td, 0);
    !this$static.selectionEnabled && ($location_0[stackIndex] = 'InputElement.java:' + '300' , td.firstChild.disabled = true , undefined);
  }
  $stackDepth_0 = stackIndex - 1;
  return tr;
}

function $deselectAllRows(this$static, fireEvent){
  var hasInputColumn, oldRows, rowElem, rowElem$iterator, outerIter, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $deselectAllRows;
  $location_0[stackIndex] = 'SelectionGrid.java:' + '584' , oldRows = null;
  fireEvent && (oldRows = ($location_0[stackIndex] = 'SelectionGrid.java:' + '586' , $getSelectedRowsSet(this$static)));
  $location_0[stackIndex] = 'SelectionGrid.java:' + '590' , hasInputColumn = this$static.selectionPolicy.inputHtml != null;
  for ($location_0[stackIndex] = 'SelectionGrid.java:' + '591' , rowElem$iterator = ($location_0[stackIndex] = 'AbstractMap.java:' + '180' , outerIter = ($location_0[stackIndex] = 'AbstractHashMap.java:' + '64' , $AbstractHashMap$EntrySetIterator(($location_0[stackIndex] = 'AbstractHashMap.java:' + '64' , new AbstractHashMap$EntrySetIterator), ($location_0[stackIndex] = 'SelectionGrid.java:' + '591' , $values(this$static.selectedRows)).val$entrySet.this$0)) , $AbstractMap$2$1(($location_0[stackIndex] = 'AbstractMap.java:' + '181' , new AbstractMap$2$1), outerIter)); $location_0[stackIndex] = 'AbstractHashMap.java:' + '104' , $hasNext_4(rowElem$iterator.val$outerIter.iter);) {
    rowElem = ($location_0[stackIndex] = 'SelectionGrid.java:' + '591' , dynamicCastJso(($location_0[stackIndex] = 'AbstractMap.java:' + '187' , $next_5(rowElem$iterator.val$outerIter)).getValue()));
    $location_0[stackIndex] = 'SelectionGrid.java:' + '592' , setStyleName(rowElem, 'selected', false);
    hasInputColumn && ($location_0[stackIndex] = 'InputElement.java:' + '267' , $getFirstChildElement_0(($location_0[stackIndex] = 'Element.java:' + '241' , $clinit_81() , rowElem)).firstChild.checked = false , undefined);
  }
  $location_0[stackIndex] = 'AbstractHashMap.java:' + '210' , $clearImpl(this$static.selectedRows);
  fireEvent && ($location_0[stackIndex] = 'SelectionGrid.java:' + '604' , $fireRowSelectionEvent(this$static, oldRows));
  $stackDepth_0 = stackIndex - 1;
}

function $deselectRow(this$static, row, fireEvent){
  var oldRows, rowElem, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $deselectRow;
  rowElem = dynamicCastJso($remove_14(this$static.selectedRows, ($location_0[stackIndex] = 'SelectionGrid.java:' + '616' , valueOf_4(row))));
  if (rowElem) {
    $location_0[stackIndex] = 'SelectionGrid.java:' + '619' , oldRows = null;
    fireEvent && (oldRows = ($location_0[stackIndex] = 'SelectionGrid.java:' + '621' , $getSelectedRowsSet(this$static)));
    $location_0[stackIndex] = 'SelectionGrid.java:' + '625' , setStyleName(rowElem, 'selected', false);
    this$static.selectionPolicy.inputHtml != null && ($location_0[stackIndex] = 'InputElement.java:' + '267' , $getFirstChildElement_0(($location_0[stackIndex] = 'Element.java:' + '241' , $clinit_81() , rowElem)).firstChild.checked = false , undefined);
    fireEvent && ($location_0[stackIndex] = 'SelectionGrid.java:' + '633' , $fireRowSelectionEvent(this$static, oldRows));
  }
  $stackDepth_0 = stackIndex - 1;
}

function $fireRowSelectionEvent(this$static, oldRowSet){
  var newRowList, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $fireRowSelectionEvent;
  newRowList = ($location_0[stackIndex] = 'SelectionGrid.java:' + '645' , $getSelectedRowsSet(this$static));
  if ($location_0[stackIndex] = 'SelectionGrid.java:' + '646' , $equals_2(newRowList, oldRowSet)) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  $location_0[stackIndex] = 'SelectionGrid.java:' + '649' , fire_10(this$static);
  $stackDepth_0 = stackIndex - 1;
}

function $getInputHtml(this$static, selectionPolicy){
  var inputHtml, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $getInputHtml;
  $location_0[stackIndex] = 'SelectionGrid.java:' + '677' , inputHtml = selectionPolicy.inputHtml;
  inputHtml != null && (inputHtml = ($location_0[stackIndex] = 'SelectionGrid.java:' + '679' , $replace_0(inputHtml, '%NAME%', '__gwtSelectionGrid' + this$static.id_0)));
  $stackDepth_0 = stackIndex - 1;
  return inputHtml;
}

function $getSelectedRowsSet(this$static){
  var rowIndex, rowIndex$iterator, rowSet, outerIter, entry, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $getSelectedRowsSet;
  rowSet = $TreeSet(($location_0[stackIndex] = 'SelectionGrid.java:' + '695' , new TreeSet));
  for ($location_0[stackIndex] = 'SelectionGrid.java:' + '696' , rowIndex$iterator = (outerIter = ($location_0[stackIndex] = 'AbstractMap.java:' + '107' , ($location_0[stackIndex] = 'SelectionGrid.java:' + '696' , $keySet_1(this$static.selectedRows)).val$entrySet.iterator_0()) , $AbstractMap$1$1(($location_0[stackIndex] = 'AbstractMap.java:' + '108' , new AbstractMap$1$1), outerIter)); $location_0[stackIndex] = 'AbstractMap.java:' + '110' , rowIndex$iterator.val$outerIter.hasNext();) {
    rowIndex = ($location_0[stackIndex] = 'SelectionGrid.java:' + '696' , dynamicCast((entry = dynamicCast(($location_0[stackIndex] = 'AbstractMap.java:' + '114' , rowIndex$iterator.val$outerIter.next_0()), 87) , ($location_0[stackIndex] = 'AbstractMap.java:' + '115' , entry.getKey())), 82));
    ($location_0[stackIndex] = 'TreeSet.java:' + '69' , $put_1(rowSet.map, $TableEvent$Row(($location_0[stackIndex] = 'SelectionGrid.java:' + '697' , new TableEvent$Row), rowIndex.value_0), ($location_0[stackIndex] = 'Boolean.java:' + '29' , $clinit_507() , FALSE_0))) == null;
  }
  $stackDepth_0 = stackIndex - 1;
  return rowSet;
}

function $highlightCell(this$static, cellElem){
  var rowElem, parent_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $highlightCell;
  if (cellElem == this$static.highlightedCellElem) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  $location_0[stackIndex] = 'SelectionGrid.java:' + '714' , rowElem = null;
  !!cellElem && ($location_0[stackIndex] = 'SelectionGrid.java:' + '716' , rowElem = ($location_0[stackIndex] = 'DOMImpl.java:' + '236' , parent_0 = ($location_0[stackIndex] = 'Node.java:' + '184' , $clinit_81() , cellElem).parentNode , (!parent_0 || parent_0.nodeType != 1) && ($location_0[stackIndex] = 'DOMImpl.java:' + '238' , parent_0 = null) , parent_0));
  if (this$static.highlightedCellElem) {
    $location_0[stackIndex] = 'SelectionGrid.java:' + '721' , setStyleName(this$static.highlightedCellElem, 'highlighted', false);
    $location_0[stackIndex] = 'SelectionGrid.java:' + '722' , fire_8(this$static);
    $location_0[stackIndex] = 'SelectionGrid.java:' + '724' , this$static.highlightedCellElem = null;
    if (rowElem != this$static.highlightedRowElem) {
      $location_0[stackIndex] = 'SelectionGrid.java:' + '729' , setStyleName(this$static.highlightedRowElem, 'highlighted', false);
      fire_11(this$static, $TableEvent$Row(($location_0[stackIndex] = 'SelectionGrid.java:' + '730' , new TableEvent$Row), this$static.highlightedRowIndex));
      $location_0[stackIndex] = 'SelectionGrid.java:' + '731' , this$static.highlightedRowElem = null;
      $location_0[stackIndex] = 'SelectionGrid.java:' + '732' , this$static.highlightedRowIndex = -1;
    }
  }
  if (cellElem) {
    $location_0[stackIndex] = 'SelectionGrid.java:' + '738' , setStyleName(cellElem, 'highlighted', true);
    $location_0[stackIndex] = 'SelectionGrid.java:' + '739' , this$static.highlightedCellElem = cellElem;
    parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , cellElem['cellIndex'])) || 0;
    if (!this$static.highlightedRowElem) {
      $location_0[stackIndex] = 'SelectionGrid.java:' + '744' , setStyleName(rowElem, 'highlighted', true);
      $location_0[stackIndex] = 'SelectionGrid.java:' + '745' , this$static.highlightedRowElem = rowElem;
      this$static.highlightedRowIndex = ($location_0[stackIndex] = 'SelectionGrid.java:' + '746' , this$static.getRowIndex(this$static.highlightedRowElem));
      fire_9(this$static, $TableEvent$Row(($location_0[stackIndex] = 'SelectionGrid.java:' + '747' , new TableEvent$Row), this$static.highlightedRowIndex));
    }
    $location_0[stackIndex] = 'SelectionGrid.java:' + '751' , fire_7(this$static);
  }
  $stackDepth_0 = stackIndex - 1;
}

function $insertRow_1(this$static, beforeRow){
  var index, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $insertRow_1;
  $location_0[stackIndex] = 'SelectionGrid.java:' + '255' , $deselectAllRows(this$static, true);
  returnTemp = (index = ($location_0[stackIndex] = 'Grid.java:' + '117' , $insertRow(this$static, beforeRow)) , ($location_0[stackIndex] = 'Grid.java:' + '118' , ++this$static.numRows) , index);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $onBrowserEvent_3(this$static, event_0){
  var cellElem, clientX, clientY, rowBottom, rowHeight, rowLeft, rowRight, rowTop, rowWidth, toElem, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $onBrowserEvent_3;
  $location_0[stackIndex] = 'DOMImpl.java:' + '61' , $eventGetTypeInt(($location_0[stackIndex] = 'NativeEvent.java:' + '209' , $clinit_81() , event_0).type);
  switch ($eventGetTypeInt(event_0.type)) {
    case 16:
      cellElem = ($location_0[stackIndex] = 'SelectionGrid.java:' + '331' , $getEventTargetCell(this$static, event_0));
      !!cellElem && ($location_0[stackIndex] = 'SelectionGrid.java:' + '333' , $highlightCell(this$static, cellElem));
      break;
    case 32:
      $location_0[stackIndex] = 'SelectionGrid.java:' + '339' , toElem = ($location_0[stackIndex] = 'DOM.java:' + '581' , $eventGetToElement(event_0));
      if (!!this$static.highlightedRowElem && (!toElem || !($location_0[stackIndex] = 'DOMImplStandard.java:' + '118' , this$static.highlightedRowElem.contains(toElem)))) {
        $location_0[stackIndex] = 'SelectionGrid.java:' + '343' , clientX = (event_0.clientX || 0) + ($location_0[stackIndex] = 'Document.java:' + '1259' , $getScrollLeft_0($doc));
        $location_0[stackIndex] = 'SelectionGrid.java:' + '344' , clientY = (event_0.clientY || 0) + ($location_0[stackIndex] = 'Document.java:' + '1268' , $getScrollTop_0($doc));
        $location_0[stackIndex] = 'SelectionGrid.java:' + '345' , rowLeft = ($location_0[stackIndex] = 'Element.java:' + '150' , $getAbsoluteLeft_0(this$static.highlightedRowElem));
        $location_0[stackIndex] = 'SelectionGrid.java:' + '346' , rowTop = ($location_0[stackIndex] = 'Element.java:' + '166' , $getAbsoluteTop_0(this$static.highlightedRowElem));
        $location_0[stackIndex] = 'SelectionGrid.java:' + '347' , rowWidth = this$static.highlightedRowElem.offsetWidth || 0;
        $location_0[stackIndex] = 'SelectionGrid.java:' + '348' , rowHeight = this$static.highlightedRowElem.offsetHeight || 0;
        $location_0[stackIndex] = 'SelectionGrid.java:' + '349' , rowBottom = rowTop + rowHeight;
        $location_0[stackIndex] = 'SelectionGrid.java:' + '350' , rowRight = rowLeft + rowWidth;
        if (clientX > rowLeft && clientX < rowRight && clientY > rowTop && clientY < rowBottom) {
          $stackDepth_0 = stackIndex - 1;
          return;
        }
        $location_0[stackIndex] = 'SelectionGrid.java:' + '357' , $highlightCell(this$static, null);
      }

      break;
    case 1:
      $location_0[stackIndex] = 'SelectionGrid.java:' + '363' , $onMouseClick(this$static, event_0);
  }
  $stackDepth_0 = stackIndex - 1;
}

function $onMouseClick(this$static, event_0){
  var ctrlKey, shiftKey, targetCell, targetRow, targetRowIndex, parent_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $onMouseClick;
  $location_0[stackIndex] = 'SelectionGrid.java:' + '369' , targetRow = null;
  $location_0[stackIndex] = 'SelectionGrid.java:' + '370' , targetCell = null;
  if (!this$static.selectionEnabled) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  targetCell = ($location_0[stackIndex] = 'SelectionGrid.java:' + '378' , $getEventTargetCell(this$static, event_0));
  if (!targetCell) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  $location_0[stackIndex] = 'SelectionGrid.java:' + '382' , targetRow = ($location_0[stackIndex] = 'DOMImpl.java:' + '236' , parent_0 = ($location_0[stackIndex] = 'Node.java:' + '184' , $clinit_81() , targetCell).parentNode , (!parent_0 || parent_0.nodeType != 1) && ($location_0[stackIndex] = 'DOMImpl.java:' + '238' , parent_0 = null) , parent_0);
  targetRowIndex = ($location_0[stackIndex] = 'SelectionGrid.java:' + '383' , this$static.getRowIndex(targetRow));
  if (this$static.selectionPolicy == ($location_0[stackIndex] = 'SelectionGrid.java:' + '127' , $clinit_857() , MULTI_ROW)) {
    $location_0[stackIndex] = 'SelectionGrid.java:' + '387' , shiftKey = !!event_0.shiftKey;
    $location_0[stackIndex] = 'SelectionGrid.java:' + '388' , ctrlKey = !!event_0.ctrlKey || !!event_0.metaKey;
    (ctrlKey || shiftKey) && ($location_0[stackIndex] = 'DOMImplStandard.java:' + '108' , event_0.preventDefault() , undefined);
    $location_0[stackIndex] = 'SelectionGrid.java:' + '397' , $selectRow_0(this$static, targetRowIndex, ctrlKey, shiftKey);
  }
   else if (this$static.selectionPolicy == ONE_ROW || this$static.selectionPolicy == RADIO && targetCell == targetRow.firstChild) {
    $location_0[stackIndex] = 'SelectionGrid.java:' + '400' , $selectRow_1(this$static, -1, targetRow, true, true);
    $location_0[stackIndex] = 'SelectionGrid.java:' + '401' , this$static.lastSelectedRowIndex = targetRowIndex;
  }
   else 
    this$static.selectionPolicy == CHECKBOX && targetCell == targetRow.firstChild && ($location_0[stackIndex] = 'SelectionGrid.java:' + '404' , $selectRow_0(this$static, targetRowIndex, true, !!event_0.shiftKey));
  $stackDepth_0 = stackIndex - 1;
}

function $selectRow(this$static, row, unselectAll){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $selectRow;
  $selectRow_1(this$static, row, ($location_0[stackIndex] = 'SelectionGrid.java:' + '442' , $getElement_0(this$static.rowFormatter, row)), unselectAll, true);
  $stackDepth_0 = stackIndex - 1;
}

function $selectRow_0(this$static, row, ctrlKey, shiftKey){
  var curRow, firstRow, formatter, isSelected, lastRow, oldRowList, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $selectRow_0;
  $location_0[stackIndex] = 'SelectionGrid.java:' + '457' , $checkRowBounds_0(this$static, row);
  oldRowList = ($location_0[stackIndex] = 'SelectionGrid.java:' + '460' , $getSelectedRowsSet(this$static));
  !ctrlKey && ($location_0[stackIndex] = 'SelectionGrid.java:' + '464' , $deselectAllRows(this$static, false));
  isSelected = $containsKey_0(this$static.selectedRows, ($location_0[stackIndex] = 'SelectionGrid.java:' + '467' , valueOf_4(row)));
  if (shiftKey && this$static.lastSelectedRowIndex > -1) {
    $location_0[stackIndex] = 'SelectionGrid.java:' + '470' , formatter = ($location_0[stackIndex] = 'SelectionGrid.java:' + '294' , dynamicCast(this$static.rowFormatter, 218));
    firstRow = ($location_0[stackIndex] = 'SelectionGrid.java:' + '471' , min_1(row, this$static.lastSelectedRowIndex));
    lastRow = ($location_0[stackIndex] = 'SelectionGrid.java:' + '472' , max(row, this$static.lastSelectedRowIndex));
    lastRow = ($location_0[stackIndex] = 'SelectionGrid.java:' + '473' , min_1(lastRow, this$static.numRows - 1));
    for ($location_0[stackIndex] = 'SelectionGrid.java:' + '474' , curRow = firstRow; curRow <= lastRow; $location_0[stackIndex] = 'SelectionGrid.java:' + '474' , ++curRow) {
      isSelected?($location_0[stackIndex] = 'SelectionGrid.java:' + '476' , $deselectRow(this$static, curRow, false)):$selectRow_1(this$static, curRow, ($location_0[stackIndex] = 'SelectionGrid.java:' + '478' , formatter.getRawElement_0(curRow)), false, false);
    }
    $location_0[stackIndex] = 'SelectionGrid.java:' + '483' , this$static.lastSelectedRowIndex = row;
    $location_0[stackIndex] = 'SelectionGrid.java:' + '484' , $fireRowSelectionEvent(this$static, oldRowList);
  }
   else if (isSelected) {
    $location_0[stackIndex] = 'SelectionGrid.java:' + '487' , $deselectRow(this$static, row, false);
    $location_0[stackIndex] = 'SelectionGrid.java:' + '488' , this$static.lastSelectedRowIndex = row;
    $location_0[stackIndex] = 'SelectionGrid.java:' + '489' , $fireRowSelectionEvent(this$static, oldRowList);
  }
   else {
    $location_0[stackIndex] = 'SelectionGrid.java:' + '492' , formatter = ($location_0[stackIndex] = 'SelectionGrid.java:' + '294' , dynamicCast(this$static.rowFormatter, 218));
    $selectRow_1(this$static, row, ($location_0[stackIndex] = 'SelectionGrid.java:' + '493' , formatter.getRawElement_0(row)), false, false);
    $location_0[stackIndex] = 'SelectionGrid.java:' + '494' , this$static.lastSelectedRowIndex = row;
    $location_0[stackIndex] = 'SelectionGrid.java:' + '495' , $fireRowSelectionEvent(this$static, oldRowList);
  }
  $stackDepth_0 = stackIndex - 1;
}

function $selectRow_1(this$static, row, rowElem, unselectAll, fireEvent){
  var oldRowSet, rowI, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $selectRow_1;
  row < 0 && (row = ($location_0[stackIndex] = 'SelectionGrid.java:' + '768' , this$static.getRowIndex(rowElem)));
  rowI = ($location_0[stackIndex] = 'SelectionGrid.java:' + '772' , valueOf_4(row));
  if ($location_0[stackIndex] = 'SelectionGrid.java:' + '773' , $containsKey_0(this$static.selectedRows, rowI)) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  $location_0[stackIndex] = 'SelectionGrid.java:' + '778' , oldRowSet = null;
  fireEvent && (oldRowSet = ($location_0[stackIndex] = 'SelectionGrid.java:' + '780' , $getSelectedRowsSet(this$static)));
  unselectAll && ($location_0[stackIndex] = 'SelectionGrid.java:' + '785' , $deselectAllRows(this$static, false));
  $location_0[stackIndex] = 'SelectionGrid.java:' + '789' , $put_0(this$static.selectedRows, rowI, rowElem);
  $location_0[stackIndex] = 'SelectionGrid.java:' + '790' , setStyleName(rowElem, 'selected', true);
  this$static.selectionPolicy.inputHtml != null && ($location_0[stackIndex] = 'InputElement.java:' + '267' , $getFirstChildElement_0(($location_0[stackIndex] = 'Element.java:' + '241' , $clinit_81() , rowElem)).firstChild.checked = true , undefined);
  fireEvent && ($location_0[stackIndex] = 'SelectionGrid.java:' + '798' , $fireRowSelectionEvent(this$static, oldRowSet));
  $stackDepth_0 = stackIndex - 1;
}

function $setSelectionEnabled(this$static, enabled){
  var formatter, i, rowCount, td, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setSelectionEnabled;
  $location_0[stackIndex] = 'SelectionGrid.java:' + '505' , this$static.selectionEnabled = enabled;
  if (this$static.selectionPolicy.inputHtml != null) {
    $location_0[stackIndex] = 'SelectionGrid.java:' + '509' , formatter = ($location_0[stackIndex] = 'SelectionGrid.java:' + '283' , dynamicCast(this$static.cellFormatter, 219));
    $location_0[stackIndex] = 'SelectionGrid.java:' + '510' , rowCount = this$static.numRows;
    for ($location_0[stackIndex] = 'SelectionGrid.java:' + '511' , i = 0; i < rowCount; $location_0[stackIndex] = 'SelectionGrid.java:' + '511' , ++i) {
      td = ($location_0[stackIndex] = 'SelectionGrid.java:' + '512' , formatter.getRawElement(i, -1));
      $location_0[stackIndex] = 'InputElement.java:' + '300' , td.firstChild.disabled = !enabled;
    }
  }
  $stackDepth_0 = stackIndex - 1;
}

function $setSelectionPolicy(this$static, selectionPolicy){
  var i, inputHtml, td, tr, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setSelectionPolicy;
  if (this$static.selectionPolicy == selectionPolicy) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  $location_0[stackIndex] = 'SelectionGrid.java:' + '255' , $deselectAllRows(this$static, true);
  if (selectionPolicy.inputHtml != null) {
    if (this$static.selectionPolicy.inputHtml != null) {
      inputHtml = ($location_0[stackIndex] = 'SelectionGrid.java:' + '534' , $getInputHtml(this$static, selectionPolicy));
      for ($location_0[stackIndex] = 'SelectionGrid.java:' + '535' , i = 0; i < this$static.numRows; $location_0[stackIndex] = 'SelectionGrid.java:' + '535' , ++i) {
        tr = ($location_0[stackIndex] = 'SelectionGrid.java:' + '536' , $getElement_0(this$static.rowFormatter, i));
        $location_0[stackIndex] = 'Element.java:' + '614' , $getFirstChildElement_0(($location_0[stackIndex] = 'Element.java:' + '241' , $clinit_81() , tr)).innerHTML = inputHtml || '';
      }
    }
     else {
      inputHtml = ($location_0[stackIndex] = 'SelectionGrid.java:' + '541' , $getInputHtml(this$static, selectionPolicy));
      td = ($location_0[stackIndex] = 'SelectionGrid.java:' + '542' , $createCell_0());
      $location_0[stackIndex] = 'Element.java:' + '614' , td.innerHTML = inputHtml || '';
      for ($location_0[stackIndex] = 'SelectionGrid.java:' + '544' , i = 0; i < this$static.numRows; $location_0[stackIndex] = 'SelectionGrid.java:' + '544' , ++i) {
        tr = ($location_0[stackIndex] = 'SelectionGrid.java:' + '545' , $getElement_0(this$static.rowFormatter, i));
        $location_0[stackIndex] = 'Node.java:' + '250' , tr.insertBefore(($location_0[stackIndex] = 'Node.java:' + '94' , td.cloneNode(true)), $getFirstChildElement_0(($location_0[stackIndex] = 'Element.java:' + '241' , $clinit_81() , tr)));
      }
    }
  }
   else if (this$static.selectionPolicy.inputHtml != null) {
    for ($location_0[stackIndex] = 'SelectionGrid.java:' + '551' , i = 0; i < this$static.numRows; $location_0[stackIndex] = 'SelectionGrid.java:' + '551' , ++i) {
      tr = ($location_0[stackIndex] = 'SelectionGrid.java:' + '552' , $getElement_0(this$static.rowFormatter, i));
      $location_0[stackIndex] = 'Node.java:' + '285' , tr.removeChild($getFirstChildElement_0(($location_0[stackIndex] = 'Element.java:' + '241' , $clinit_81() , tr)));
    }
  }
  $location_0[stackIndex] = 'SelectionGrid.java:' + '556' , this$static.selectionPolicy = selectionPolicy;
  $location_0[stackIndex] = 'SelectionGrid.java:' + '559' , $setSelectionEnabled(this$static, this$static.selectionEnabled);
  $stackDepth_0 = stackIndex - 1;
}

function createRow_1(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = createRow_1;
  returnTemp = ($location_0[stackIndex] = 'SelectionGrid.java:' + '563' , $createRow_1(this));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getClass_551(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_551;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_SelectionGrid_2_classLit;
}

function getDOMCellCount_0(row){
  var count, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getDOMCellCount_0;
  returnTemp = ($location_0[stackIndex] = 'SelectionGrid.java:' + '663' , count = ($location_0[stackIndex] = 'HTMLTable.java:' + '1339' , this.bodyElem.rows[row]).cells.length , this.selectionPolicy.inputHtml != null && ($location_0[stackIndex] = 'SelectionGrid.java:' + '665' , --count) , count);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function onBrowserEvent_14(event_0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onBrowserEvent_14;
  $location_0[stackIndex] = 'SelectionGrid.java:' + '326' , $onBrowserEvent_3(this, event_0);
  $stackDepth_0 = stackIndex - 1;
}

function SelectionGrid(){
}

_ = SelectionGrid.prototype = new Grid_0;
_.createRow = createRow_1;
_.getClass$ = getClass_551;
_.getDOMCellCount = getDOMCellCount_0;
_.onBrowserEvent = onBrowserEvent_14;
_.typeId$ = 360;
_.highlightedCellElem = null;
_.highlightedRowElem = null;
_.highlightedRowIndex = -1;
_.id_0 = 0;
_.lastSelectedRowIndex = -1;
_.selectionEnabled = true;
var uniqueID = 0;
function $fireColumnSorted(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $fireColumnSorted;
  $fireEvent_2(this$static, $ColumnSortEvent(($location_0[stackIndex] = 'SortableGrid.java:' + '371' , new ColumnSortEvent), this$static.columnSortList));
  $stackDepth_0 = stackIndex - 1;
}

function $sortColumn(this$static, column){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $sortColumn;
  column == ($location_0[stackIndex] = 'SortableGrid.java:' + '319' , $getPrimaryColumn(this$static.columnSortList))?$sortColumn_0(this$static, column, !($location_0[stackIndex] = 'SortableGrid.java:' + '320' , $isPrimaryAscending(this$static.columnSortList))):($location_0[stackIndex] = 'SortableGrid.java:' + '322' , $sortColumn_0(this$static, column, true));
  $stackDepth_0 = stackIndex - 1;
}

function $sortColumn_0(this$static, column, ascending){
  var selectedRows, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $sortColumn_0;
  if (column < 0) {
    throw $IndexOutOfBoundsException_0(($location_0[stackIndex] = 'SortableGrid.java:' + '336' , new IndexOutOfBoundsException), 'Cannot access a column with a negative index: ' + column);
  }
   else if (column >= this$static.numColumns) {
    throw $IndexOutOfBoundsException_0(($location_0[stackIndex] = 'SortableGrid.java:' + '339' , new IndexOutOfBoundsException), 'Column index: ' + column + ', Column size: ' + this$static.numColumns);
  }
  $location_0[stackIndex] = 'TableModelHelper.java:' + '175' , $add_30(this$static.columnSortList, 0, $TableModelHelper$ColumnSortInfo(($location_0[stackIndex] = 'SortableGrid.java:' + '344' , new TableModelHelper$ColumnSortInfo), column, ascending));
  selectedRows = dynamicCast(($location_0[stackIndex] = 'SortableGrid.java:' + '347' , $toArray(($location_0[stackIndex] = 'SortableGrid.java:' + '347' , $values(this$static.selectedRows)), ($location_0[stackIndex] = 'SortableGrid.java:' + '348' , initDim(_3Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, 629, -1, 0, 0)))), 220);
  $location_0[stackIndex] = 'SelectionGrid.java:' + '255' , $deselectAllRows(this$static, true);
  $location_0[stackIndex] = 'SortableGrid.java:' + '350' , $onSortColumn((!this$static.columnSorter && (this$static.columnSorter = ($location_0[stackIndex] = 'SortableGrid.java:' + '383' , new SortableGrid$DefaultColumnSorter)) , this$static.columnSorter , this$static), this$static.columnSortList, $SortableGrid$ColumnSorterCallback(($location_0[stackIndex] = 'SortableGrid.java:' + '351' , new SortableGrid$ColumnSorterCallback), selectedRows, this$static));
  $stackDepth_0 = stackIndex - 1;
}

function getClass_552(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_552;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_SortableGrid_2_classLit;
}

function SortableGrid(){
}

_ = SortableGrid.prototype = new SelectionGrid;
_.getClass$ = getClass_552;
_.typeId$ = 361;
_.columnSorter = null;
function $applySort(this$static, trElems){
  var bodyElem, i, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $applySort;
  $location_0[stackIndex] = 'FixedWidthGrid.java:' + '451' , bodyElem = this$static.bodyElem;
  for ($location_0[stackIndex] = 'FixedWidthGrid.java:' + '452' , i = trElems.length - 1; i >= 0; $location_0[stackIndex] = 'FixedWidthGrid.java:' + '452' , --i) {
    if ($location_0[stackIndex] = 'FixedWidthGrid.java:' + '453' , trElems[i]) {
      $location_0[stackIndex] = 'Node.java:' + '285' , bodyElem.removeChild(($location_0[stackIndex] = 'FixedWidthGrid.java:' + '454' , trElems[i]));
      $location_0[stackIndex] = 'DOM.java:' + '929' , $insertChild(bodyElem, ($location_0[stackIndex] = 'FixedWidthGrid.java:' + '456' , trElems[i]), 1);
    }
  }
  $stackDepth_0 = stackIndex - 1;
}

function $getColumnWidth(this$static, column){
  var colWidth, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getColumnWidth;
  colWidth = dynamicCast($get_7(this$static.colWidths, ($location_0[stackIndex] = 'FixedWidthGrid.java:' + '173' , valueOf_4(column))), 82);
  if (!colWidth) {
    $stackDepth_0 = stackIndex - 1;
    return 80;
  }
   else {
    returnTemp = colWidth.value_0;
    $stackDepth_0 = stackIndex - 1;
    return returnTemp;
  }
  $stackDepth_0 = stackIndex - 1;
}

function $getGhostCellElement(this$static, column){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getGhostCellElement;
  this$static.selectionPolicy.inputHtml != null && ($location_0[stackIndex] = 'FixedWidthGrid.java:' + '513' , ++column);
  returnTemp = ($location_0[stackIndex] = 'DOM.java:' + '705' , $getChild((!impl_4 && (impl_4 = ($location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '65' , new FixedWidthTableImpl$Impl)) , this$static.ghostRow), column));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $getIdealColumnWidth(this$static, column){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getIdealColumnWidth;
  this$static.idealWidths == null && ($location_0[stackIndex] = 'FixedWidthGrid.java:' + '524' , $recalculateIdealColumnWidths_0(this$static));
  if (this$static.idealWidths.length > column) {
    returnTemp = ($location_0[stackIndex] = 'FixedWidthGrid.java:' + '198' , this$static.idealWidths[column]);
    $stackDepth_0 = stackIndex - 1;
    return returnTemp;
  }
  $stackDepth_0 = stackIndex - 1;
  return -1;
}

function $getRowIndex_0(rowElem){
  var rowIndex, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $getRowIndex_0;
  $location_0[stackIndex] = 'FixedWidthGrid.java:' + '382' , rowIndex = parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , rowElem['rowIndex'])) || 0;
  if (rowIndex < 0) {
    $stackDepth_0 = stackIndex - 1;
    return rowIndex;
  }
  $stackDepth_0 = stackIndex - 1;
  return rowIndex - 1;
}

function $recalculateIdealColumnWidths_0(this$static){
  var columnCount, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $recalculateIdealColumnWidths_0;
  $location_0[stackIndex] = 'FixedWidthGrid.java:' + '406' , columnCount = this$static.numColumns;
  if (!this$static.attached || this$static.numRows == 0 || columnCount < 1) {
    this$static.idealWidths = ($location_0[stackIndex] = 'FixedWidthGrid.java:' + '408' , initDim(_3I_classLit, 669, -1, 0, 1));
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  $location_0[stackIndex] = 'FixedWidthGrid.java:' + '412' , $recalculateIdealColumnWidthsSetup(this$static);
  this$static.idealWidths = ($location_0[stackIndex] = 'FixedWidthGrid.java:' + '480' , $recalculateIdealColumnWidths_2((!impl_4 && (impl_4 = ($location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '65' , new FixedWidthTableImpl$Impl)) , this$static.idealColumnWidthInfo)));
  $location_0[stackIndex] = 'FixedWidthGrid.java:' + '500' , $recalculateIdealColumnWidthsTeardown((!impl_4 && (impl_4 = ($location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '65' , new FixedWidthTableImpl$Impl)) , this$static.idealColumnWidthInfo));
  $location_0[stackIndex] = 'FixedWidthGrid.java:' + '502' , this$static.idealColumnWidthInfo = null;
  $stackDepth_0 = stackIndex - 1;
}

function $recalculateIdealColumnWidthsSetup(this$static){
  var offset, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $recalculateIdealColumnWidthsSetup;
  $location_0[stackIndex] = 'FixedWidthGrid.java:' + '488' , offset = 0;
  this$static.selectionPolicy.inputHtml != null && ($location_0[stackIndex] = 'FixedWidthGrid.java:' + '490' , ++offset);
  this$static.idealColumnWidthInfo = ($location_0[stackIndex] = 'FixedWidthGrid.java:' + '492' , $recalculateIdealColumnWidthsSetup_0((!impl_4 && (impl_4 = ($location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '65' , new FixedWidthTableImpl$Impl)) , this$static), this$static.numColumns, offset));
  $stackDepth_0 = stackIndex - 1;
}

function $removeRow_2(this$static, row){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $removeRow_2;
  $location_0[stackIndex] = 'SelectionGrid.java:' + '255' , $deselectAllRows(this$static, true);
  $location_0[stackIndex] = 'Grid.java:' + '124' , $removeRow_1(this$static, row);
  $location_0[stackIndex] = 'Grid.java:' + '125' , --this$static.numRows;
  $location_0[stackIndex] = 'FixedWidthGrid.java:' + '465' , this$static.idealWidths = null;
  $stackDepth_0 = stackIndex - 1;
}

function $resizeColumns_1(this$static, columns){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $resizeColumns_1;
  $location_0[stackIndex] = 'FixedWidthGrid.java:' + '220' , $resizeColumns_0(this$static, columns);
  $location_0[stackIndex] = 'FixedWidthGrid.java:' + '221' , $updateGhostRow(this$static);
  $location_0[stackIndex] = 'FixedWidthGrid.java:' + '465' , this$static.idealWidths = null;
  $stackDepth_0 = stackIndex - 1;
}

function $resizeRows_1(this$static, rows){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $resizeRows_1;
  $location_0[stackIndex] = 'FixedWidthGrid.java:' + '227' , $resizeRows_0(this$static, rows);
  $location_0[stackIndex] = 'FixedWidthGrid.java:' + '465' , this$static.idealWidths = null;
  $stackDepth_0 = stackIndex - 1;
}

function $setCellPadding_0(this$static, padding){
  var entry, entry$iterator, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setCellPadding_0;
  $location_0[stackIndex] = 'Element.java:' + '658' , this$static.tableElem['cellPadding'] = padding;
  for ($location_0[stackIndex] = 'FixedWidthGrid.java:' + '236' , entry$iterator = ($location_0[stackIndex] = 'AbstractHashMap.java:' + '64' , $AbstractHashMap$EntrySetIterator(($location_0[stackIndex] = 'AbstractHashMap.java:' + '64' , new AbstractHashMap$EntrySetIterator), $AbstractHashMap$EntrySet(($location_0[stackIndex] = 'AbstractHashMap.java:' + '235' , new AbstractHashMap$EntrySet), this$static.colWidths).this$0)); $location_0[stackIndex] = 'AbstractHashMap.java:' + '104' , $hasNext_4(entry$iterator.iter);) {
    $location_0[stackIndex] = 'FixedWidthGrid.java:' + '236' , entry = entry$iterator.last = dynamicCast(($location_0[stackIndex] = 'AbstractHashMap.java:' + '108' , $next_6(entry$iterator.iter)), 87);
    $setColumnWidth(this$static, dynamicCast(($location_0[stackIndex] = 'FixedWidthGrid.java:' + '237' , entry.getKey()), 82).value_0, dynamicCast(entry.getValue(), 82).value_0);
  }
  this$static.selectionPolicy.inputHtml != null && ($location_0[stackIndex] = 'FixedWidthGrid.java:' + '240' , $setColumnWidthImpl(this$static, -1, 30));
  $stackDepth_0 = stackIndex - 1;
}

function $setCellSpacing_0(this$static, spacing){
  var entry, entry$iterator, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setCellSpacing_0;
  $location_0[stackIndex] = 'Element.java:' + '658' , this$static.tableElem['cellSpacing'] = spacing;
  for ($location_0[stackIndex] = 'FixedWidthGrid.java:' + '249' , entry$iterator = ($location_0[stackIndex] = 'AbstractHashMap.java:' + '64' , $AbstractHashMap$EntrySetIterator(($location_0[stackIndex] = 'AbstractHashMap.java:' + '64' , new AbstractHashMap$EntrySetIterator), $AbstractHashMap$EntrySet(($location_0[stackIndex] = 'AbstractHashMap.java:' + '235' , new AbstractHashMap$EntrySet), this$static.colWidths).this$0)); $location_0[stackIndex] = 'AbstractHashMap.java:' + '104' , $hasNext_4(entry$iterator.iter);) {
    $location_0[stackIndex] = 'FixedWidthGrid.java:' + '249' , entry = entry$iterator.last = dynamicCast(($location_0[stackIndex] = 'AbstractHashMap.java:' + '108' , $next_6(entry$iterator.iter)), 87);
    $setColumnWidth(this$static, dynamicCast(($location_0[stackIndex] = 'FixedWidthGrid.java:' + '250' , entry.getKey()), 82).value_0, dynamicCast(entry.getValue(), 82).value_0);
  }
  this$static.selectionPolicy.inputHtml != null && ($location_0[stackIndex] = 'FixedWidthGrid.java:' + '253' , $setColumnWidthImpl(this$static, -1, 30));
  $stackDepth_0 = stackIndex - 1;
}

function $setColumnWidth(this$static, column, width){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setColumnWidth;
  if (column < 0) {
    throw $IndexOutOfBoundsException_0(($location_0[stackIndex] = 'FixedWidthGrid.java:' + '267' , new IndexOutOfBoundsException), 'Cannot access a column with a negative index: ' + column);
  }
  $location_0[stackIndex] = 'FixedWidthGrid.java:' + '272' , width = 1 > width?1:width;
  $put_0(this$static.colWidths, ($location_0[stackIndex] = 'FixedWidthGrid.java:' + '273' , valueOf_4(column)), valueOf_4(width));
  if (column >= this$static.numColumns) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  $location_0[stackIndex] = 'FixedWidthGrid.java:' + '281' , $setColumnWidthImpl(this$static, column, width);
  $stackDepth_0 = stackIndex - 1;
}

function $setColumnWidthImpl(this$static, column, width){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setColumnWidthImpl;
  this$static.selectionPolicy.inputHtml != null && ($location_0[stackIndex] = 'FixedWidthGrid.java:' + '536' , ++column);
  $location_0[stackIndex] = 'FixedWidthGrid.java:' + '538' , $setColumnWidth_1((!impl_4 && (impl_4 = ($location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '65' , new FixedWidthTableImpl$Impl)) , this$static.ghostRow), column, width);
  $stackDepth_0 = stackIndex - 1;
}

function $setSelectionPolicy_0(this$static, selectionPolicy){
  var td, tr, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setSelectionPolicy_0;
  if (selectionPolicy.inputHtml != null && this$static.selectionPolicy.inputHtml == null) {
    $location_0[stackIndex] = 'FixedWidthGrid.java:' + '296' , tr = this$static.ghostRow;
    td = ($location_0[stackIndex] = 'FixedWidthGrid.java:' + '297' , $createGhostCell((!impl_4 && (impl_4 = ($location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '65' , new FixedWidthTableImpl$Impl)) , null)));
    $location_0[stackIndex] = 'Node.java:' + '250' , tr.insertBefore(td, $getFirstChildElement_0(($location_0[stackIndex] = 'Element.java:' + '241' , $clinit_81() , tr)));
    $location_0[stackIndex] = 'FixedWidthGrid.java:' + '299' , $setSelectionPolicy(this$static, selectionPolicy);
    $location_0[stackIndex] = 'FixedWidthGrid.java:' + '300' , $setColumnWidthImpl(this$static, -1, 30);
  }
   else if (selectionPolicy.inputHtml == null && this$static.selectionPolicy.inputHtml != null) {
    $location_0[stackIndex] = 'FixedWidthGrid.java:' + '304' , tr = this$static.ghostRow;
    $location_0[stackIndex] = 'Node.java:' + '285' , tr.removeChild($getFirstChildElement_0(($location_0[stackIndex] = 'Element.java:' + '241' , $clinit_81() , tr)));
    $location_0[stackIndex] = 'FixedWidthGrid.java:' + '306' , $setSelectionPolicy(this$static, selectionPolicy);
  }
   else {
    $location_0[stackIndex] = 'FixedWidthGrid.java:' + '308' , $setSelectionPolicy(this$static, selectionPolicy);
  }
  $stackDepth_0 = stackIndex - 1;
}

function $setText_6(this$static, row, column, text){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setText_6;
  $location_0[stackIndex] = 'FixedWidthGrid.java:' + '314' , $setText_3(this$static, row, column, text);
  $location_0[stackIndex] = 'FixedWidthGrid.java:' + '465' , this$static.idealWidths = null;
  $stackDepth_0 = stackIndex - 1;
}

function $setWidget_9(this$static, row, column, widget){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setWidget_9;
  $location_0[stackIndex] = 'FixedWidthGrid.java:' + '320' , $setWidget_3(this$static, row, column, widget);
  $location_0[stackIndex] = 'FixedWidthGrid.java:' + '465' , this$static.idealWidths = null;
  $stackDepth_0 = stackIndex - 1;
}

function $updateGhostRow(this$static){
  var cellsToRemove, i, numGhosts, td, count, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $updateGhostRow;
  $location_0[stackIndex] = 'FixedWidthGrid.java:' + '431' , numGhosts = ($location_0[stackIndex] = 'SelectionGrid.java:' + '663' , count = ($location_0[stackIndex] = 'HTMLTable.java:' + '1339' , this$static.bodyElem.rows[0]).cells.length , this$static.selectionPolicy.inputHtml != null && ($location_0[stackIndex] = 'SelectionGrid.java:' + '665' , --count) , count);
  if (this$static.numColumns > numGhosts) {
    for ($location_0[stackIndex] = 'FixedWidthGrid.java:' + '434' , i = numGhosts; i < this$static.numColumns; $location_0[stackIndex] = 'FixedWidthGrid.java:' + '434' , ++i) {
      td = ($location_0[stackIndex] = 'FixedWidthGrid.java:' + '435' , $createGhostCell((!impl_4 && (impl_4 = ($location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '65' , new FixedWidthTableImpl$Impl)) , null)));
      $location_0[stackIndex] = 'Node.java:' + '72' , this$static.ghostRow.appendChild(td);
      $setColumnWidth(this$static, i, ($location_0[stackIndex] = 'FixedWidthGrid.java:' + '437' , $getColumnWidth(this$static, i)));
    }
  }
   else if (this$static.numColumns < numGhosts) {
    $location_0[stackIndex] = 'FixedWidthGrid.java:' + '440' , cellsToRemove = numGhosts - this$static.numColumns;
    for ($location_0[stackIndex] = 'FixedWidthGrid.java:' + '441' , i = 0; i < cellsToRemove; $location_0[stackIndex] = 'FixedWidthGrid.java:' + '441' , ++i) {
      td = ($location_0[stackIndex] = 'FixedWidthGrid.java:' + '442' , $getGhostCellElement(this$static, this$static.numColumns));
      $location_0[stackIndex] = 'Node.java:' + '285' , this$static.ghostRow.removeChild(td);
    }
  }
  $stackDepth_0 = stackIndex - 1;
}

function clear_8(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = clear_8;
  $location_0[stackIndex] = 'FixedWidthGrid.java:' + '161' , $clear_6(this);
  $location_0[stackIndex] = 'FixedWidthGrid.java:' + '465' , this.idealWidths = null;
  $stackDepth_0 = stackIndex - 1;
}

function getClass_553(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_553;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_FixedWidthGrid_2_classLit;
}

function getDOMCellCount_1(row){
  var count, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getDOMCellCount_1;
  returnTemp = ($location_0[stackIndex] = 'SelectionGrid.java:' + '663' , count = ($location_0[stackIndex] = 'HTMLTable.java:' + '1339' , this.bodyElem.rows[row + 1]).cells.length , this.selectionPolicy.inputHtml != null && ($location_0[stackIndex] = 'SelectionGrid.java:' + '665' , --count) , count);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getDOMRowCount_0(){
  var returnTemp, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getDOMRowCount_0;
  returnTemp = this.bodyElem.rows.length - 1;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getRowIndex_0(rowElem){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getRowIndex_0;
  returnTemp = ($location_0[stackIndex] = 'FixedWidthGrid.java:' + '381' , $getRowIndex_0(rowElem));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function internalClearCell_0(td, clearInnerHTML){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = internalClearCell_0;
  $location_0[stackIndex] = 'FixedWidthGrid.java:' + '465' , this.idealWidths = null;
  returnTemp = ($location_0[stackIndex] = 'FixedWidthGrid.java:' + '392' , $internalClearCell_0(this, td, clearInnerHTML));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function onAttach_2(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onAttach_2;
  $location_0[stackIndex] = 'FixedWidthGrid.java:' + '397' , $onAttach(this);
  $location_0[stackIndex] = 'FixedWidthGrid.java:' + '465' , this.idealWidths = null;
  $stackDepth_0 = stackIndex - 1;
}

function remove_37(widget){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = remove_37;
  if ($location_0[stackIndex] = 'FixedWidthGrid.java:' + '205' , $remove_22(this, widget)) {
    $location_0[stackIndex] = 'FixedWidthGrid.java:' + '465' , this.idealWidths = null;
    $stackDepth_0 = stackIndex - 1;
    return true;
  }
  $stackDepth_0 = stackIndex - 1;
  return false;
}

function FixedWidthGrid(){
}

_ = FixedWidthGrid.prototype = new SortableGrid;
_.clear = clear_8;
_.getClass$ = getClass_553;
_.getDOMCellCount = getDOMCellCount_1;
_.getDOMRowCount = getDOMRowCount_0;
_.getRowIndex = getRowIndex_0;
_.internalClearCell = internalClearCell_0;
_.onAttach = onAttach_2;
_.remove_0 = remove_37;
_.typeId$ = 362;
_.ghostRow = null;
_.idealColumnWidthInfo = null;
_.idealWidths = null;
function $DataTable(this$static){
  var tableElem, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $DataTable;
  $location_0[stackIndex] = 'Grid.java:' + '61' , $HTMLTable_0(this$static);
  $location_0[stackIndex] = 'HTMLTable.java:' + '1547' , this$static.clearText = '&nbsp;';
  $location_0[stackIndex] = 'HTMLTable.java:' + '1537' , this$static.cellFormatter = $HTMLTable$CellFormatter_0(($location_0[stackIndex] = 'Grid.java:' + '63' , new HTMLTable$CellFormatter_0), this$static);
  $location_0[stackIndex] = 'HTMLTable.java:' + '1561' , this$static.rowFormatter = $HTMLTable$RowFormatter_0(($location_0[stackIndex] = 'Grid.java:' + '64' , new HTMLTable$RowFormatter_0), this$static);
  $setColumnFormatter_0(this$static, $HTMLTable$ColumnFormatter_0(($location_0[stackIndex] = 'Grid.java:' + '65' , new HTMLTable$ColumnFormatter_0), this$static));
  this$static.selectedRows = $HashMap(($location_0[stackIndex] = 'SelectionGrid.java:' + '189' , new HashMap));
  $location_0[stackIndex] = 'SelectionGrid.java:' + '200' , this$static.selectionPolicy = ($location_0[stackIndex] = 'SelectionGrid.java:' + '127' , $clinit_857() , MULTI_ROW);
  this$static.id_0 = ($location_0[stackIndex] = 'SelectionGrid.java:' + '207' , uniqueID++);
  $location_0[stackIndex] = 'HTMLTable.java:' + '1537' , this$static.cellFormatter = $SelectionGrid$SelectionGridCellFormatter(($location_0[stackIndex] = 'SelectionGrid.java:' + '208' , new SelectionGrid$SelectionGridCellFormatter), this$static);
  $location_0[stackIndex] = 'HTMLTable.java:' + '1561' , this$static.rowFormatter = $SelectionGrid$SelectionGridRowFormatter(($location_0[stackIndex] = 'SelectionGrid.java:' + '209' , new SelectionGrid$SelectionGridRowFormatter), this$static);
  $location_0[stackIndex] = 'SelectionGrid.java:' + '212' , $sinkEvents(this$static, 53);
  this$static.columnSortList = $TableModelHelper$ColumnSortList(($location_0[stackIndex] = 'SortableGrid.java:' + '202' , new TableModelHelper$ColumnSortList));
  this$static.colWidths = $HashMap(($location_0[stackIndex] = 'FixedWidthGrid.java:' + '105' , new HashMap));
  $location_0[stackIndex] = 'HTMLTable.java:' + '1547' , this$static.clearText = '&nbsp;';
  $location_0[stackIndex] = 'FixedWidthGrid.java:' + '130' , tableElem = this$static.element;
  $location_0[stackIndex] = 'Style.java:' + '1449' , tableElem.style['tableLayout'] = 'fixed';
  tableElem.style['width'] = '0px';
  $location_0[stackIndex] = 'HTMLTable.java:' + '1561' , this$static.rowFormatter = $FixedWidthGrid$FixedWidthGridRowFormatter(($location_0[stackIndex] = 'FixedWidthGrid.java:' + '135' , new FixedWidthGrid$FixedWidthGridRowFormatter), this$static);
  $location_0[stackIndex] = 'HTMLTable.java:' + '1537' , this$static.cellFormatter = $FixedWidthGrid$FixedWidthGridCellFormatter(($location_0[stackIndex] = 'FixedWidthGrid.java:' + '136' , new FixedWidthGrid$FixedWidthGridCellFormatter), this$static);
  $setColumnFormatter_0(this$static, $FixedWidthGrid$FixedWidthGridColumnFormatter(($location_0[stackIndex] = 'FixedWidthGrid.java:' + '137' , new FixedWidthGrid$FixedWidthGridColumnFormatter), this$static));
  this$static.ghostRow = ($location_0[stackIndex] = 'FixedWidthGrid.java:' + '140' , $createGhostRow((!impl_4 && (impl_4 = ($location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '65' , new FixedWidthTableImpl$Impl)) , impl_4)));
  $location_0[stackIndex] = 'DOM.java:' + '929' , $insertChild(this$static.bodyElem, this$static.ghostRow, 0);
  $location_0[stackIndex] = 'FixedWidthGrid.java:' + '144' , $sinkEvents(this$static, 21);
  $location_0[stackIndex] = 'DataTable.java:' + '60' , $sinkEvents(this$static, 262146);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_554(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_554;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_DataTable_2_classLit;
}

function onBrowserEvent_15(event_0){
  var targetCell, targetRow, targetRowIndex, parent_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onBrowserEvent_15;
  switch ($location_0[stackIndex] = 'DOMImpl.java:' + '61' , $eventGetTypeInt(($location_0[stackIndex] = 'NativeEvent.java:' + '209' , $clinit_81() , event_0).type)) {
    case 262144:
      $location_0[stackIndex] = 'DataTable.java:' + '71' , targetRow = null;
      $location_0[stackIndex] = 'DataTable.java:' + '72' , targetCell = null;
      targetCell = ($location_0[stackIndex] = 'DataTable.java:' + '75' , $getEventTargetCell(this, event_0));
      if (!targetCell) {
        $stackDepth_0 = stackIndex - 1;
        return;
      }

      $location_0[stackIndex] = 'DataTable.java:' + '79' , targetRow = ($location_0[stackIndex] = 'DOMImpl.java:' + '236' , parent_0 = targetCell.parentNode , (!parent_0 || parent_0.nodeType != 1) && ($location_0[stackIndex] = 'DOMImpl.java:' + '238' , parent_0 = null) , parent_0);
      targetRowIndex = ($location_0[stackIndex] = 'DataTable.java:' + '80' , $getRowIndex_0(targetRow));
      !$containsKey_0(this.selectedRows, ($location_0[stackIndex] = 'SelectionGrid.java:' + '315' , valueOf_4(targetRowIndex))) && ($location_0[stackIndex] = 'DataTable.java:' + '82' , $onMouseClick(this, event_0));
      $location_0[stackIndex] = 'DOMImplStandard.java:' + '108' , event_0.preventDefault();
      break;
    case 2:
      $location_0[stackIndex] = 'DataTable.java:' + '89' , fireNativeEvent(event_0, this, this.element);
    default:$location_0[stackIndex] = 'DataTable.java:' + '91' , $onBrowserEvent_3(this, event_0);
  }
  $stackDepth_0 = stackIndex - 1;
}

function DataTable(){
}

_ = DataTable.prototype = new FixedWidthGrid;
_.getClass$ = getClass_554;
_.onBrowserEvent = onBrowserEvent_15;
_.typeId$ = 363;
function $FixedWidthFlexTable(this$static){
  var tableElem, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $FixedWidthFlexTable;
  $location_0[stackIndex] = 'FlexTable.java:' + '126' , $HTMLTable_0(this$static);
  $location_0[stackIndex] = 'HTMLTable.java:' + '1537' , this$static.cellFormatter = $FlexTable$FlexCellFormatter(($location_0[stackIndex] = 'FlexTable.java:' + '127' , new FlexTable$FlexCellFormatter), this$static);
  $location_0[stackIndex] = 'HTMLTable.java:' + '1561' , this$static.rowFormatter = $HTMLTable$RowFormatter_0(($location_0[stackIndex] = 'FlexTable.java:' + '128' , new HTMLTable$RowFormatter_0), this$static);
  $setColumnFormatter_0(this$static, $HTMLTable$ColumnFormatter_0(($location_0[stackIndex] = 'FlexTable.java:' + '129' , new HTMLTable$ColumnFormatter_0), this$static));
  this$static.colWidths = $HashMap(($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '190' , new HashMap));
  this$static.columnsPerRow = $ArrayList(($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '200' , new ArrayList));
  this$static.columnCountMap = $HashMap(($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '211' , new HashMap));
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '238' , tableElem = this$static.element;
  $location_0[stackIndex] = 'Style.java:' + '1449' , tableElem.style['tableLayout'] = 'fixed';
  tableElem.style['width'] = '0px';
  $location_0[stackIndex] = 'HTMLTable.java:' + '1537' , this$static.cellFormatter = $FixedWidthFlexTable$FixedWidthFlexCellFormatter(($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '242' , new FixedWidthFlexTable$FixedWidthFlexCellFormatter), this$static);
  $setColumnFormatter_0(this$static, $FixedWidthFlexTable$FixedWidthFlexColumnFormatter(($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '243' , new FixedWidthFlexTable$FixedWidthFlexColumnFormatter), this$static));
  $location_0[stackIndex] = 'HTMLTable.java:' + '1561' , this$static.rowFormatter = $FixedWidthFlexTable$FixedWidthFlexRowFormatter(($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '244' , new FixedWidthFlexTable$FixedWidthFlexRowFormatter), this$static);
  this$static.ghostRow = ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '247' , $createGhostRow((!impl_4 && (impl_4 = ($location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '65' , new FixedWidthTableImpl$Impl)) , impl_4)));
  $location_0[stackIndex] = 'DOM.java:' + '929' , $insertChild(this$static.bodyElem, this$static.ghostRow, 0);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $getColumnWidth_0(this$static, column){
  var colWidth, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getColumnWidth_0;
  colWidth = $get_7(this$static.colWidths, ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '272' , valueOf_4(column)));
  if (colWidth == null) {
    $stackDepth_0 = stackIndex - 1;
    return 80;
  }
   else {
    returnTemp = ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '276' , dynamicCast(colWidth, 82)).value_0;
    $stackDepth_0 = stackIndex - 1;
    return returnTemp;
  }
  $stackDepth_0 = stackIndex - 1;
}

function $getIdealColumnWidth_0(this$static, column){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getIdealColumnWidth_0;
  this$static.idealWidths == null && ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '656' , $recalculateIdealColumnWidths_1(this$static));
  if (this$static.idealWidths.length > column) {
    returnTemp = ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '297' , this$static.idealWidths[column]);
    $stackDepth_0 = stackIndex - 1;
    return returnTemp;
  }
  $stackDepth_0 = stackIndex - 1;
  return -1;
}

function $getNumColumnsPerRow(this$static, row){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getNumColumnsPerRow;
  if (this$static.columnsPerRow.size_0 <= row) {
    $stackDepth_0 = stackIndex - 1;
    return 0;
  }
   else {
    returnTemp = dynamicCast(($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '646' , $get_5(this$static.columnsPerRow, row)), 82).value_0;
    $stackDepth_0 = stackIndex - 1;
    return returnTemp;
  }
  $stackDepth_0 = stackIndex - 1;
}

function $prepareCell_2(this$static, row, column){
  var cell, cellsAdded, curNumCells, td, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $prepareCell_2;
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '561' , curNumCells = 0;
  this$static.bodyElem.rows.length - 1 > row && ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '563' , curNumCells = ($location_0[stackIndex] = 'FlexTable.java:' + '151' , $checkRowBounds_0(this$static, row) , ($location_0[stackIndex] = 'HTMLTable.java:' + '1339' , this$static.bodyElem.rows[row + 1]).cells.length));
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '565' , $prepareCell_0(this$static, row, column);
  if (column >= curNumCells) {
    $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '570' , cellsAdded = column - curNumCells + 1;
    $setNumColumnsPerRow(this$static, row, ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '571' , $getNumColumnsPerRow(this$static, row)) + cellsAdded);
    for ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '574' , cell = curNumCells; cell < column; $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '574' , ++cell) {
      td = ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '575' , $getElement(this$static.cellFormatter, row, cell));
      $location_0[stackIndex] = 'Style.java:' + '1449' , td.style['overflow'] = 'hidden';
    }
  }
  $stackDepth_0 = stackIndex - 1;
}

function $recalculateIdealColumnWidths_1(this$static){
  var columnCount, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $recalculateIdealColumnWidths_1;
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '586' , columnCount = this$static.maxRawColumnCount;
  if (!this$static.attached || this$static.bodyElem.rows.length - 1 == 0 || columnCount < 1) {
    this$static.idealWidths = ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '588' , initDim(_3I_classLit, 669, -1, 0, 1));
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  this$static.idealColumnWidthInfo = ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '624' , $recalculateIdealColumnWidthsSetup_0((!impl_4 && (impl_4 = ($location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '65' , new FixedWidthTableImpl$Impl)) , this$static), this$static.maxRawColumnCount, 0));
  this$static.idealWidths = ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '616' , $recalculateIdealColumnWidths_2((!impl_4 && (impl_4 = ($location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '65' , new FixedWidthTableImpl$Impl)) , this$static.idealColumnWidthInfo)));
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '632' , $recalculateIdealColumnWidthsTeardown((!impl_4 && (impl_4 = ($location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '65' , new FixedWidthTableImpl$Impl)) , this$static.idealColumnWidthInfo));
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '634' , this$static.idealColumnWidthInfo = null;
  $stackDepth_0 = stackIndex - 1;
}

function $removeRow_3(this$static, row){
  var affectedColSpan, affectedRow, cell, colSpan, curCell, curRow, formatter, numCells, numCellsInRow, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $removeRow_3;
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '397' , formatter = ($location_0[stackIndex] = 'FlexTable.java:' + '177' , dynamicCast(this$static.cellFormatter, 181));
  affectedColSpan = ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '398' , $getNumColumnsPerRow(this$static, row));
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '399' , numCellsInRow = ($location_0[stackIndex] = 'FlexTable.java:' + '151' , $checkRowBounds_0(this$static, row) , ($location_0[stackIndex] = 'HTMLTable.java:' + '1339' , this$static.bodyElem.rows[row + 1]).cells.length);
  for ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '400' , cell = 0; cell < numCellsInRow; $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '400' , ++cell) {
    $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '401' , formatter.setRowSpan(row, cell, 1);
    $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '402' , affectedColSpan -= parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , ($location_0[stackIndex] = 'HTMLTable.java:' + '89' , $checkCellBounds_0(formatter.this$0_0, row, cell) , ($location_0[stackIndex] = 'HTMLTable.java:' + '90' , formatter.getRawElement(row, cell)))['colSpan'])) || 0;
  }
  $location_0[stackIndex] = 'FlexTable.java:' + '240' , $removeRow_1(this$static, row);
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '601' , this$static.idealWidths = null;
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '408' , $setNumColumnsPerRow(this$static, row, -1);
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '409' , $remove_7(this$static.columnsPerRow, row);
  for ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '414' , curRow = row - 1; curRow >= 0; $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '414' , --curRow) {
    if (affectedColSpan <= 0) {
      break;
    }
    $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '421' , numCells = ($location_0[stackIndex] = 'FlexTable.java:' + '151' , $checkRowBounds_0(this$static, curRow) , ($location_0[stackIndex] = 'HTMLTable.java:' + '1339' , this$static.bodyElem.rows[curRow + 1]).cells.length);
    for ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '422' , curCell = 0; curCell < numCells; $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '422' , ++curCell) {
      $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '423' , affectedRow = curRow + (parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , ($location_0[stackIndex] = 'HTMLTable.java:' + '89' , $checkCellBounds_0(formatter.this$0_0, curRow, curCell) , ($location_0[stackIndex] = 'HTMLTable.java:' + '90' , formatter.getRawElement(curRow, curCell)))['rowSpan'])) || 0) - 1;
      if (affectedRow >= row) {
        $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '425' , colSpan = parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , ($location_0[stackIndex] = 'HTMLTable.java:' + '89' , $checkCellBounds_0(formatter.this$0_0, curRow, curCell) , ($location_0[stackIndex] = 'HTMLTable.java:' + '90' , formatter.getRawElement(curRow, curCell)))['colSpan'])) || 0;
        $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '426' , affectedColSpan -= colSpan;
        $setNumColumnsPerRow(this$static, affectedRow, ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '427' , $getNumColumnsPerRow(this$static, affectedRow)) + colSpan);
      }
    }
  }
  $stackDepth_0 = stackIndex - 1;
}

function $setCellPadding_1(this$static, padding){
  var entry, entry$iterator, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setCellPadding_1;
  $location_0[stackIndex] = 'Element.java:' + '658' , this$static.tableElem['cellPadding'] = padding;
  for ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '439' , entry$iterator = ($location_0[stackIndex] = 'AbstractHashMap.java:' + '64' , $AbstractHashMap$EntrySetIterator(($location_0[stackIndex] = 'AbstractHashMap.java:' + '64' , new AbstractHashMap$EntrySetIterator), $AbstractHashMap$EntrySet(($location_0[stackIndex] = 'AbstractHashMap.java:' + '235' , new AbstractHashMap$EntrySet), this$static.colWidths).this$0)); $location_0[stackIndex] = 'AbstractHashMap.java:' + '104' , $hasNext_4(entry$iterator.iter);) {
    $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '439' , entry = entry$iterator.last = dynamicCast(($location_0[stackIndex] = 'AbstractHashMap.java:' + '108' , $next_6(entry$iterator.iter)), 87);
    $setColumnWidth_0(this$static, dynamicCast(($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '440' , entry.getKey()), 82).value_0, dynamicCast(entry.getValue(), 82).value_0);
  }
  $stackDepth_0 = stackIndex - 1;
}

function $setCellSpacing_1(this$static, spacing){
  var entry, entry$iterator, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setCellSpacing_1;
  $location_0[stackIndex] = 'Element.java:' + '658' , this$static.tableElem['cellSpacing'] = spacing;
  for ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '449' , entry$iterator = ($location_0[stackIndex] = 'AbstractHashMap.java:' + '64' , $AbstractHashMap$EntrySetIterator(($location_0[stackIndex] = 'AbstractHashMap.java:' + '64' , new AbstractHashMap$EntrySetIterator), $AbstractHashMap$EntrySet(($location_0[stackIndex] = 'AbstractHashMap.java:' + '235' , new AbstractHashMap$EntrySet), this$static.colWidths).this$0)); $location_0[stackIndex] = 'AbstractHashMap.java:' + '104' , $hasNext_4(entry$iterator.iter);) {
    $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '449' , entry = entry$iterator.last = dynamicCast(($location_0[stackIndex] = 'AbstractHashMap.java:' + '108' , $next_6(entry$iterator.iter)), 87);
    $setColumnWidth_0(this$static, dynamicCast(($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '450' , entry.getKey()), 82).value_0, dynamicCast(entry.getValue(), 82).value_0);
  }
  $stackDepth_0 = stackIndex - 1;
}

function $setColumnWidth_0(this$static, column, width){
  var numGhosts, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setColumnWidth_0;
  if (column < 0) {
    throw $IndexOutOfBoundsException_0(($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '464' , new IndexOutOfBoundsException), 'Cannot access a column with a negative index: ' + column);
  }
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '469' , width = 1 > width?1:width;
  $put_0(this$static.colWidths, ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '470' , valueOf_4(column)), valueOf_4(width));
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '473' , numGhosts = ($location_0[stackIndex] = 'HTMLTable.java:' + '1339' , this$static.bodyElem.rows[0]).cells.length;
  if (column >= numGhosts) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '479' , $setColumnWidth_1((!impl_4 && (impl_4 = ($location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '65' , new FixedWidthTableImpl$Impl)) , this$static.ghostRow), column, width);
  $stackDepth_0 = stackIndex - 1;
}

function $setHTML_2(this$static, row, column, html){
  var td, td_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setHTML_2;
  $location_0[stackIndex] = 'HTMLTable.java:' + '1186' , $prepareCell_2(this$static, row, column);
  $location_0[stackIndex] = 'HTMLTable.java:' + '1187' , td = (td_0 = ($location_0[stackIndex] = 'HTMLTable.java:' + '1288' , this$static.cellFormatter.getRawElement(row, column)) , ($location_0[stackIndex] = 'HTMLTable.java:' + '1289' , this$static.internalClearCell(td_0, html == null)) , td_0);
  html != null && ($location_0[stackIndex] = 'Element.java:' + '614' , td.innerHTML = html || '' , undefined);
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '601' , this$static.idealWidths = null;
  $stackDepth_0 = stackIndex - 1;
}

function $setNumColumnsPerRow(this$static, row, numColumns){
  var curNumColumns, curNumColumns$iterator, numColumnsI, numRows, oldNumColumns, oldNumColumnsI, oldNumColumnsRemoved, outerIter, entry, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setNumColumnsPerRow;
  oldNumColumns = ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '669' , $getNumColumnsPerRow(this$static, row));
  if (oldNumColumns == numColumns) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  numColumnsI = ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '675' , valueOf_4(numColumns));
  oldNumColumnsI = ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '676' , valueOf_4(oldNumColumns));
  row < this$static.columnsPerRow.size_0?($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '678' , $set_1(this$static.columnsPerRow, row, numColumnsI)):($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '680' , $add_7(this$static.columnsPerRow, numColumnsI));
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '684' , oldNumColumnsRemoved = false;
  if ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '685' , $containsKey_0(this$static.columnCountMap, oldNumColumnsI)) {
    numRows = dynamicCast(($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '686' , $get_7(this$static.columnCountMap, oldNumColumnsI)), 82).value_0;
    if (numRows == 1) {
      $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '688' , $remove_14(this$static.columnCountMap, oldNumColumnsI);
      $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '689' , oldNumColumnsRemoved = true;
    }
     else {
      $put_0(this$static.columnCountMap, oldNumColumnsI, ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '691' , valueOf_4(numRows - 1)));
    }
  }
  if (numColumns > 0) {
    if ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '697' , $containsKey_0(this$static.columnCountMap, numColumnsI)) {
      numRows = dynamicCast(($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '698' , $get_7(this$static.columnCountMap, numColumnsI)), 82).value_0;
      $put_0(this$static.columnCountMap, numColumnsI, ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '699' , valueOf_4(numRows + 1)));
    }
     else {
      $put_0(this$static.columnCountMap, numColumnsI, ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '701' , valueOf_4(1)));
    }
  }
  if (numColumns > this$static.maxRawColumnCount) {
    $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '707' , this$static.maxRawColumnCount = numColumns;
  }
   else if (numColumns < oldNumColumns && oldNumColumns == this$static.maxRawColumnCount && oldNumColumnsRemoved) {
    $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '711' , this$static.maxRawColumnCount = 0;
    for ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '712' , curNumColumns$iterator = (outerIter = ($location_0[stackIndex] = 'AbstractMap.java:' + '107' , ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '712' , $keySet_1(this$static.columnCountMap)).val$entrySet.iterator_0()) , $AbstractMap$1$1(($location_0[stackIndex] = 'AbstractMap.java:' + '108' , new AbstractMap$1$1), outerIter)); $location_0[stackIndex] = 'AbstractMap.java:' + '110' , curNumColumns$iterator.val$outerIter.hasNext();) {
      curNumColumns = ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '712' , dynamicCast((entry = dynamicCast(($location_0[stackIndex] = 'AbstractMap.java:' + '114' , curNumColumns$iterator.val$outerIter.next_0()), 87) , ($location_0[stackIndex] = 'AbstractMap.java:' + '115' , entry.getKey())), 82));
      this$static.maxRawColumnCount = ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '713' , max(this$static.maxRawColumnCount, curNumColumns.value_0));
    }
  }
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '719' , $updateGhostRow_0(this$static);
  $stackDepth_0 = stackIndex - 1;
}

function $setText_7(this$static, row, column, text){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setText_7;
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '490' , $setText_3(this$static, row, column, text);
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '601' , this$static.idealWidths = null;
  $stackDepth_0 = stackIndex - 1;
}

function $updateGhostRow_0(this$static){
  var cellsToRemove, curNumGhosts, i, td, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $updateGhostRow_0;
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '726' , curNumGhosts = ($location_0[stackIndex] = 'HTMLTable.java:' + '1339' , this$static.bodyElem.rows[0]).cells.length;
  if (this$static.maxRawColumnCount > curNumGhosts) {
    $location_0[stackIndex] = 'FlexTable.java:' + '250' , addCells(this$static.bodyElem, 0, this$static.maxRawColumnCount - curNumGhosts);
    for ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '730' , i = curNumGhosts; i < this$static.maxRawColumnCount; $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '730' , ++i) {
      $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '731' , td = ($location_0[stackIndex] = 'DOM.java:' + '705' , $getChild((!impl_4 && (impl_4 = ($location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '65' , new FixedWidthTableImpl$Impl)) , this$static.ghostRow), i));
      $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '732' , $createGhostCell((!impl_4 && (impl_4 = ($location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '65' , new FixedWidthTableImpl$Impl)) , td));
      $setColumnWidth_0(this$static, i, ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '733' , $getColumnWidth_0(this$static, i)));
    }
  }
   else if (this$static.maxRawColumnCount < curNumGhosts) {
    $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '737' , cellsToRemove = curNumGhosts - this$static.maxRawColumnCount;
    for ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '738' , i = 0; i < cellsToRemove; $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '738' , ++i) {
      $location_0[stackIndex] = 'Node.java:' + '285' , this$static.ghostRow.removeChild(($location_0[stackIndex] = 'DOM.java:' + '705' , $getChild((!impl_4 && (impl_4 = ($location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '65' , new FixedWidthTableImpl$Impl)) , this$static.ghostRow), this$static.maxRawColumnCount)));
    }
  }
  $stackDepth_0 = stackIndex - 1;
}

function addCells_1(row, num){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = addCells_1;
  $location_0[stackIndex] = 'FlexTable.java:' + '250' , addCells(this.bodyElem, row + 1, num);
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '601' , this.idealWidths = null;
  $stackDepth_0 = stackIndex - 1;
}

function clear_9(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = clear_9;
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '253' , $clear_6(this);
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '601' , this.idealWidths = null;
  $stackDepth_0 = stackIndex - 1;
}

function getClass_555(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_555;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_FixedWidthFlexTable_2_classLit;
}

function getDOMCellCount_2(row){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getDOMCellCount_2;
  returnTemp = ($location_0[stackIndex] = 'HTMLTable.java:' + '1339' , this.bodyElem.rows[row + 1]).cells.length;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getDOMRowCount_1(){
  var returnTemp, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getDOMRowCount_1;
  returnTemp = this.bodyElem.rows.length - 1;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getRowIndex_1(rowElem){
  var rowIndex, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getRowIndex_1;
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '540' , rowIndex = parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , rowElem['rowIndex'])) || 0;
  if (rowIndex < 0) {
    $stackDepth_0 = stackIndex - 1;
    return rowIndex;
  }
  $stackDepth_0 = stackIndex - 1;
  return rowIndex - 1;
}

function insertRow_0(beforeRow){
  var affectedColSpan, affectedRow, cell, colSpan, curCell, curRow, formatter, numCells, numCellsInRow, tr, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = insertRow_0;
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '321' , formatter = ($location_0[stackIndex] = 'FlexTable.java:' + '177' , dynamicCast(this.cellFormatter, 181));
  affectedColSpan = ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '322' , $getNumColumnsPerRow(this, beforeRow));
  if (beforeRow != this.bodyElem.rows.length - 1) {
    $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '324' , numCellsInRow = ($location_0[stackIndex] = 'FlexTable.java:' + '151' , $checkRowBounds_0(this, beforeRow) , ($location_0[stackIndex] = 'HTMLTable.java:' + '1339' , this.bodyElem.rows[beforeRow + 1]).cells.length);
    for ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '325' , cell = 0; cell < numCellsInRow; $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '325' , ++cell) {
      $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '326' , affectedColSpan -= parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , ($location_0[stackIndex] = 'HTMLTable.java:' + '89' , $checkCellBounds_0(formatter.this$0_0, beforeRow, cell) , ($location_0[stackIndex] = 'HTMLTable.java:' + '90' , formatter.getRawElement(beforeRow, cell)))['colSpan'])) || 0;
    }
  }
  beforeRow != this.bodyElem.rows.length - 1 && ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '332' , $checkRowBounds_0(this, beforeRow));
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '334' , tr = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , ($location_0[stackIndex] = 'Document.java:' + '1063' , $clinit_81() , $doc).createElement('tr'));
  $location_0[stackIndex] = 'DOM.java:' + '929' , $insertChild(this.bodyElem, tr, beforeRow + 1);
  $add_8(this.columnsPerRow, beforeRow, ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '336' , valueOf_4(0)));
  for ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '341' , curRow = beforeRow - 1; curRow >= 0; $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '341' , --curRow) {
    if (affectedColSpan <= 0) {
      break;
    }
    $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '348' , numCells = ($location_0[stackIndex] = 'FlexTable.java:' + '151' , $checkRowBounds_0(this, curRow) , ($location_0[stackIndex] = 'HTMLTable.java:' + '1339' , this.bodyElem.rows[curRow + 1]).cells.length);
    for ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '349' , curCell = 0; curCell < numCells; $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '349' , ++curCell) {
      $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '350' , affectedRow = curRow + (parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , ($location_0[stackIndex] = 'HTMLTable.java:' + '89' , $checkCellBounds_0(formatter.this$0_0, curRow, curCell) , ($location_0[stackIndex] = 'HTMLTable.java:' + '90' , formatter.getRawElement(curRow, curCell)))['rowSpan'])) || 0);
      if (affectedRow > beforeRow) {
        $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '352' , colSpan = parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , ($location_0[stackIndex] = 'HTMLTable.java:' + '89' , $checkCellBounds_0(formatter.this$0_0, curRow, curCell) , ($location_0[stackIndex] = 'HTMLTable.java:' + '90' , formatter.getRawElement(curRow, curCell)))['colSpan'])) || 0;
        $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '353' , affectedColSpan -= colSpan;
        $setNumColumnsPerRow(this, beforeRow, ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '354' , $getNumColumnsPerRow(this, beforeRow)) + colSpan);
        $setNumColumnsPerRow(this, affectedRow, ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '356' , $getNumColumnsPerRow(this, affectedRow)) - colSpan);
      }
    }
  }
  $stackDepth_0 = stackIndex - 1;
  return beforeRow;
}

function internalClearCell_1(td, clearInnerHTML){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = internalClearCell_1;
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '601' , this.idealWidths = null;
  returnTemp = ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '550' , $internalClearCell_0(this, td, clearInnerHTML));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function onAttach_3(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onAttach_3;
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '555' , $onAttach(this);
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '601' , this.idealWidths = null;
  $stackDepth_0 = stackIndex - 1;
}

function prepareCell_1(row, column){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = prepareCell_1;
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '560' , $prepareCell_2(this, row, column);
  $stackDepth_0 = stackIndex - 1;
}

function remove_38(widget){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = remove_38;
  if ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '368' , $remove_22(this, widget)) {
    $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '601' , this.idealWidths = null;
    $stackDepth_0 = stackIndex - 1;
    return true;
  }
  $stackDepth_0 = stackIndex - 1;
  return false;
}

function FixedWidthFlexTable(){
}

_ = FixedWidthFlexTable.prototype = new FlexTable;
_.addCells = addCells_1;
_.clear = clear_9;
_.getClass$ = getClass_555;
_.getDOMCellCount = getDOMCellCount_2;
_.getDOMRowCount = getDOMRowCount_1;
_.getRowIndex = getRowIndex_1;
_.insertRow = insertRow_0;
_.internalClearCell = internalClearCell_1;
_.onAttach = onAttach_3;
_.prepareCell = prepareCell_1;
_.remove_0 = remove_38;
_.typeId$ = 364;
_.ghostRow = null;
_.idealColumnWidthInfo = null;
_.idealWidths = null;
_.maxRawColumnCount = 0;
function $FixedWidthFlexTable$FixedWidthFlexCellFormatter(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $FixedWidthFlexTable$FixedWidthFlexCellFormatter;
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '62' , this$static.this$0 = this$0;
  $location_0[stackIndex] = 'HTMLTable.java:' + '65' , this$static.this$0_0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_556(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_556;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_FixedWidthFlexTable$FixedWidthFlexCellFormatter_2_classLit;
}

function getRawElement_1(row, column){
  var out, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getRawElement_1;
  returnTemp = (out = ($location_0[stackIndex] = 'HTMLTable.java:' + '341' , this.this$0_0.bodyElem.rows[row + 1]).cells[column] , out == null?null:out);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function setRowSpan_0(row, column, rowSpan){
  var colSpan, curRowSpan, i, out, out_0, out_1, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = setRowSpan_0;
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '96' , rowSpan = 1 > rowSpan?1:rowSpan;
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '97' , curRowSpan = parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , ($location_0[stackIndex] = 'HTMLTable.java:' + '89' , $checkCellBounds_0(this.this$0_0, row, column) , out = ($location_0[stackIndex] = 'HTMLTable.java:' + '341' , this.this$0_0.bodyElem.rows[row + 1]).cells[column] , out == null?null:out)['rowSpan'])) || 0;
  $location_0[stackIndex] = 'Element.java:' + '658' , ($location_0[stackIndex] = 'HTMLTable.java:' + '288' , this.this$0_0.prepareCell(row, column) , out_0 = ($location_0[stackIndex] = 'HTMLTable.java:' + '341' , this.this$0_0.bodyElem.rows[row + 1]).cells[column] , out_0 == null?null:out_0)['rowSpan'] = rowSpan;
  $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '101' , colSpan = parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , ($location_0[stackIndex] = 'HTMLTable.java:' + '89' , $checkCellBounds_0(this.this$0_0, row, column) , out_1 = ($location_0[stackIndex] = 'HTMLTable.java:' + '341' , this.this$0_0.bodyElem.rows[row + 1]).cells[column] , out_1 == null?null:out_1)['colSpan'])) || 0;
  if (rowSpan > curRowSpan) {
    for ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '103' , i = row + curRowSpan; i < row + rowSpan; $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '103' , ++i) {
      $setNumColumnsPerRow(this.this$0, i, ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '104' , $getNumColumnsPerRow(this.this$0, i)) + colSpan);
    }
  }
   else if (rowSpan < curRowSpan) {
    for ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '107' , i = row + rowSpan; i < row + curRowSpan; $location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '107' , ++i) {
      $setNumColumnsPerRow(this.this$0, i, ($location_0[stackIndex] = 'FixedWidthFlexTable.java:' + '108' , $getNumColumnsPerRow(this.this$0, i)) - colSpan);
    }
  }
  $stackDepth_0 = stackIndex - 1;
}

function FixedWidthFlexTable$FixedWidthFlexCellFormatter(){
}

_ = FixedWidthFlexTable$FixedWidthFlexCellFormatter.prototype = new FlexTable$FlexCellFormatter;
_.getClass$ = getClass_556;
_.getRawElement = getRawElement_1;
_.setRowSpan = setRowSpan_0;
_.typeId$ = 365;
_.this$0 = null;
function $FixedWidthFlexTable$FixedWidthFlexColumnFormatter(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $FixedWidthFlexTable$FixedWidthFlexColumnFormatter;
  $location_0[stackIndex] = 'HTMLTable.java:' + '350' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_557(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_557;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_FixedWidthFlexTable$FixedWidthFlexColumnFormatter_2_classLit;
}

function FixedWidthFlexTable$FixedWidthFlexColumnFormatter(){
}

_ = FixedWidthFlexTable$FixedWidthFlexColumnFormatter.prototype = new HTMLTable$ColumnFormatter_0;
_.getClass$ = getClass_557;
_.typeId$ = 0;
function $FixedWidthFlexTable$FixedWidthFlexRowFormatter(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $FixedWidthFlexTable$FixedWidthFlexRowFormatter;
  $location_0[stackIndex] = 'HTMLTable.java:' + '480' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_558(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_558;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_FixedWidthFlexTable$FixedWidthFlexRowFormatter_2_classLit;
}

function getRawElement_2(row){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getRawElement_2;
  returnTemp = ($location_0[stackIndex] = 'HTMLTable.java:' + '626' , this.this$0.bodyElem.rows[row + 1]) || null;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function FixedWidthFlexTable$FixedWidthFlexRowFormatter(){
}

_ = FixedWidthFlexTable$FixedWidthFlexRowFormatter.prototype = new HTMLTable$RowFormatter_0;
_.getClass$ = getClass_558;
_.getRawElement_0 = getRawElement_2;
_.typeId$ = 0;
function $SelectionGrid$SelectionGridCellFormatter(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $SelectionGrid$SelectionGridCellFormatter;
  $location_0[stackIndex] = 'SelectionGrid.java:' + '96' , this$static.this$0 = this$0;
  $location_0[stackIndex] = 'HTMLTable.java:' + '65' , this$static.this$0_0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $getRawElement_3(this$static, row, column){
  var out, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getRawElement_3;
  this$static.this$0.selectionPolicy.inputHtml != null && ($location_0[stackIndex] = 'SelectionGrid.java:' + '100' , column += 1);
  returnTemp = (out = ($location_0[stackIndex] = 'HTMLTable.java:' + '341' , this$static.this$0_0.bodyElem.rows[row]).cells[column] , out == null?null:out);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getClass_559(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_559;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_SelectionGrid$SelectionGridCellFormatter_2_classLit;
}

function getRawElement_3(row, column){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getRawElement_3;
  returnTemp = ($location_0[stackIndex] = 'SelectionGrid.java:' + '98' , $getRawElement_3(this, row, column));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function SelectionGrid$SelectionGridCellFormatter(){
}

_ = SelectionGrid$SelectionGridCellFormatter.prototype = new HTMLTable$CellFormatter_0;
_.getClass$ = getClass_559;
_.getRawElement = getRawElement_3;
_.typeId$ = 366;
_.this$0 = null;
function $FixedWidthGrid$FixedWidthGridCellFormatter(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $FixedWidthGrid$FixedWidthGridCellFormatter;
  $location_0[stackIndex] = 'SelectionGrid.java:' + '96' , this$static.this$0 = this$0;
  $location_0[stackIndex] = 'HTMLTable.java:' + '65' , this$static.this$0_0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_560(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_560;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_FixedWidthGrid$FixedWidthGridCellFormatter_2_classLit;
}

function getRawElement_4(row, column){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getRawElement_4;
  returnTemp = ($location_0[stackIndex] = 'FixedWidthGrid.java:' + '67' , $getRawElement_3(this, row + 1, column));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function FixedWidthGrid$FixedWidthGridCellFormatter(){
}

_ = FixedWidthGrid$FixedWidthGridCellFormatter.prototype = new SelectionGrid$SelectionGridCellFormatter;
_.getClass$ = getClass_560;
_.getRawElement = getRawElement_4;
_.typeId$ = 367;
function $FixedWidthGrid$FixedWidthGridColumnFormatter(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $FixedWidthGrid$FixedWidthGridColumnFormatter;
  $location_0[stackIndex] = 'HTMLTable.java:' + '350' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_561(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_561;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_FixedWidthGrid$FixedWidthGridColumnFormatter_2_classLit;
}

function FixedWidthGrid$FixedWidthGridColumnFormatter(){
}

_ = FixedWidthGrid$FixedWidthGridColumnFormatter.prototype = new HTMLTable$ColumnFormatter_0;
_.getClass$ = getClass_561;
_.typeId$ = 0;
function $SelectionGrid$SelectionGridRowFormatter(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $SelectionGrid$SelectionGridRowFormatter;
  $location_0[stackIndex] = 'HTMLTable.java:' + '480' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_562(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_562;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_SelectionGrid$SelectionGridRowFormatter_2_classLit;
}

function getRawElement_5(row){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getRawElement_5;
  returnTemp = ($location_0[stackIndex] = 'HTMLTable.java:' + '626' , this.this$0.bodyElem.rows[row]) || null;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function SelectionGrid$SelectionGridRowFormatter(){
}

_ = SelectionGrid$SelectionGridRowFormatter.prototype = new HTMLTable$RowFormatter_0;
_.getClass$ = getClass_562;
_.getRawElement_0 = getRawElement_5;
_.typeId$ = 368;
function $FixedWidthGrid$FixedWidthGridRowFormatter(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $FixedWidthGrid$FixedWidthGridRowFormatter;
  $location_0[stackIndex] = 'HTMLTable.java:' + '480' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_563(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_563;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_FixedWidthGrid$FixedWidthGridRowFormatter_2_classLit;
}

function getRawElement_6(row){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getRawElement_6;
  returnTemp = ($location_0[stackIndex] = 'HTMLTable.java:' + '626' , this.this$0.bodyElem.rows[row + 1]) || null;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function FixedWidthGrid$FixedWidthGridRowFormatter(){
}

_ = FixedWidthGrid$FixedWidthGridRowFormatter.prototype = new SelectionGrid$SelectionGridRowFormatter;
_.getClass$ = getClass_563;
_.getRawElement_0 = getRawElement_6;
_.typeId$ = 369;
var impl_4 = null;
function $FixedWidthTableImpl$IdealColumnWidthInfo(this$static, table, tr, columnCount, offset){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $FixedWidthTableImpl$IdealColumnWidthInfo;
  $location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '81' , this$static.table = table;
  $location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '82' , this$static.tr = tr;
  $location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '83' , this$static.columnCount = columnCount;
  $location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '84' , this$static.offset = offset;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_564(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_564;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_FixedWidthTableImpl$IdealColumnWidthInfo_2_classLit;
}

function FixedWidthTableImpl$IdealColumnWidthInfo(){
}

_ = FixedWidthTableImpl$IdealColumnWidthInfo.prototype = new Object_0;
_.getClass$ = getClass_564;
_.typeId$ = 0;
_.columnCount = 0;
_.offset = 0;
_.table = null;
_.tr = null;
function $createGhostCell(td){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $createGhostCell;
  !td && ($location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '102' , td = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , ($location_0[stackIndex] = 'Document.java:' + '271' , $clinit_81() , $doc).createElement('td')));
  $location_0[stackIndex] = 'Style.java:' + '1449' , td.style['height'] = 0 + ($location_0[stackIndex] = 'Style.java:' + '1369' , $clinit_106() , 'px');
  td.style['overflow'] = 'hidden';
  td.style['paddingTop'] = '0px';
  td.style['paddingBottom'] = '0px';
  td.style['borderTop'] = '0px';
  td.style['borderBottom'] = '0px';
  td.style['margin'] = '0px';
  $stackDepth_0 = stackIndex - 1;
  return td;
}

function $createGhostRow(){
  var ghostRow, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $createGhostRow;
  $location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '120' , ghostRow = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , ($location_0[stackIndex] = 'Document.java:' + '1063' , $clinit_81() , $doc).createElement('tr'));
  $location_0[stackIndex] = 'Style.java:' + '1449' , ghostRow.style['margin'] = 0 + ($location_0[stackIndex] = 'Style.java:' + '1369' , $clinit_106() , 'px');
  ghostRow.style['padding'] = '0px';
  ghostRow.style['height'] = '0px';
  ghostRow.style['overflow'] = 'hidden';
  $stackDepth_0 = stackIndex - 1;
  return ghostRow;
}

function $recalculateIdealColumnWidths_2(info){
  var columnCount, i, idealWidths, table, td, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $recalculateIdealColumnWidths_2;
  if (!info) {
    returnTemp = ($location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '148' , initDim(_3I_classLit, 669, -1, 0, 1));
    $stackDepth_0 = stackIndex - 1;
    return returnTemp;
  }
  $location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '152' , columnCount = info.columnCount;
  $location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '153' , table = info.table;
  if (!table.attached || ($location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '154' , table.getRowCount()) == 0 || columnCount < 1) {
    returnTemp = ($location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '155' , initDim(_3I_classLit, 669, -1, 0, 1));
    $stackDepth_0 = stackIndex - 1;
    return returnTemp;
  }
  idealWidths = ($location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '159' , initDim(_3I_classLit, 669, -1, columnCount, 1));
  $location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '160' , td = $getFirstChildElement_0(($location_0[stackIndex] = 'Element.java:' + '241' , $clinit_81() , info.tr));
  for ($location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '161' , i = 0; i < info.offset; $location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '161' , ++i) {
    $location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '162' , td = ($location_0[stackIndex] = 'Element.java:' + '281' , $getNextSiblingElement(td));
  }
  for ($location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '164' , i = 0; i < columnCount; $location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '164' , ++i) {
    $location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '165' , idealWidths[i] = td.clientWidth;
    $location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '166' , td = ($location_0[stackIndex] = 'Element.java:' + '281' , $getNextSiblingElement(td));
  }
  $stackDepth_0 = stackIndex - 1;
  return idealWidths;
}

function $recalculateIdealColumnWidthsSetup_0(table, columnCount, offset){
  var i, td, tr, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $recalculateIdealColumnWidthsSetup_0;
  $location_0[stackIndex] = 'Style.java:' + '1449' , table.element.style['tableLayout'] = '';
  $location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '185' , tr = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , ($location_0[stackIndex] = 'Document.java:' + '1063' , $clinit_81() , $doc).createElement('tr'));
  $location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '186' , td = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , $doc.createElement('td'));
  $location_0[stackIndex] = 'Element.java:' + '614' , td.innerHTML = '<div style="height:1px;width:1px;"><\/div>';
  for ($location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '188' , i = 0; i < columnCount + offset; $location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '188' , ++i) {
    $location_0[stackIndex] = 'Node.java:' + '72' , tr.appendChild(($location_0[stackIndex] = 'Node.java:' + '94' , td.cloneNode(true)));
  }
  $location_0[stackIndex] = 'Node.java:' + '72' , ($location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '231' , table.getBodyElement()).appendChild(tr);
  returnTemp = $FixedWidthTableImpl$IdealColumnWidthInfo(($location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '192' , new FixedWidthTableImpl$IdealColumnWidthInfo), table, tr, columnCount, offset);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $recalculateIdealColumnWidthsTeardown(info){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $recalculateIdealColumnWidthsTeardown;
  if (!info) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  $location_0[stackIndex] = 'Style.java:' + '1449' , info.table.element.style['tableLayout'] = 'fixed';
  $location_0[stackIndex] = 'Node.java:' + '285' , ($location_0[stackIndex] = 'FixedWidthTableImpl.java:' + '231' , info.table.getBodyElement()).removeChild(info.tr);
  $stackDepth_0 = stackIndex - 1;
}

function $setColumnWidth_1(ghostRow, column, width){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setColumnWidth_1;
  $location_0[stackIndex] = 'Style.java:' + '1449' , ($location_0[stackIndex] = 'DOM.java:' + '705' , $getChild(ghostRow, column)).style['width'] = width + ($location_0[stackIndex] = 'Style.java:' + '1369' , $clinit_106() , 'px');
  $stackDepth_0 = stackIndex - 1;
}

function getClass_565(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_565;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_FixedWidthTableImpl$Impl_2_classLit;
}

function FixedWidthTableImpl$Impl(){
}

_ = FixedWidthTableImpl$Impl.prototype = new Object_0;
_.getClass$ = getClass_565;
_.typeId$ = 0;
function $getColumnWidthInfo_1(this$static, column){
  var curWidth, info, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $getColumnWidthInfo_1;
  $location_0[stackIndex] = 'ScrollTable.java:' + '238' , curWidth = ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1219' , $getColumnWidth(this$static.dataTable, column));
  info = dynamicCast($get_7(this$static.columnWidthInfos, ($location_0[stackIndex] = 'ScrollTable.java:' + '239' , valueOf_4(column))), 216);
  if (!info) {
    info = $ColumnResizer$ColumnWidthInfo(($location_0[stackIndex] = 'ScrollTable.java:' + '241' , new ColumnResizer$ColumnWidthInfo), 1, -1, 80, curWidth);
    $put_0(this$static.columnWidthInfos, ($location_0[stackIndex] = 'ScrollTable.java:' + '243' , valueOf_4(column)), info);
  }
   else {
    $location_0[stackIndex] = 'ColumnResizer.java:' + '145' , info.curWidth = curWidth;
  }
  $stackDepth_0 = stackIndex - 1;
  return info;
}

function $isColumnSortable(this$static, column){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $isColumnSortable;
  returnTemp = this$static.sortPolicy != ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '887' , $clinit_831() , DISABLED_1) && !($location_0[stackIndex] = 'HashSet.java:' + '83' , $containsKey_0(this$static.unsortableColumns.map, ($location_0[stackIndex] = 'ScrollTable.java:' + '116' , valueOf_4(column))));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getClass_566(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_566;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_ScrollTable_2_classLit;
}

function getMaximumColumnWidth(column){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getMaximumColumnWidth;
  returnTemp = $getMaximumWidth(($location_0[stackIndex] = 'ScrollTable.java:' + '101' , $getColumnWidthInfo_1(this, column)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getMinimumColumnWidth(column){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getMinimumColumnWidth;
  returnTemp = ($location_0[stackIndex] = 'ScrollTable.java:' + '106' , $getColumnWidthInfo_1(this, column)).minWidth;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getPreferredColumnWidth(column){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getPreferredColumnWidth;
  returnTemp = ($location_0[stackIndex] = 'ScrollTable.java:' + '111' , $getColumnWidthInfo_1(this, column)).preferredWidth;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function isColumnSortable(column){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = isColumnSortable;
  returnTemp = this.sortPolicy != ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '887' , $clinit_831() , DISABLED_1) && !($location_0[stackIndex] = 'HashSet.java:' + '83' , $containsKey_0(this.unsortableColumns.map, ($location_0[stackIndex] = 'ScrollTable.java:' + '116' , valueOf_4(column))));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function isColumnTruncatable(column){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = isColumnTruncatable;
  returnTemp = !($location_0[stackIndex] = 'HashSet.java:' + '83' , $containsKey_0(this.untruncatableColumns.map, ($location_0[stackIndex] = 'ScrollTable.java:' + '121' , valueOf_4(column))));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function isHeaderColumnTruncatable(column){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = isHeaderColumnTruncatable;
  returnTemp = !($location_0[stackIndex] = 'HashSet.java:' + '83' , $containsKey_0(this.untruncatableHeaders.map, ($location_0[stackIndex] = 'ScrollTable.java:' + '131' , valueOf_4(column))));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function ScrollTable(){
}

_ = ScrollTable.prototype = new AbstractScrollTable;
_.getClass$ = getClass_566;
_.getMaximumColumnWidth = getMaximumColumnWidth;
_.getMinimumColumnWidth = getMinimumColumnWidth;
_.getPreferredColumnWidth = getPreferredColumnWidth;
_.isColumnSortable = isColumnSortable;
_.isColumnTruncatable = isColumnTruncatable;
_.isHeaderColumnTruncatable = isHeaderColumnTruncatable;
_.typeId$ = 370;
function $ScrollTable2(this$static, dataTable, headerTable){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ScrollTable2;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1021' , $AbstractScrollTable(this$static, dataTable, headerTable, ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '1022' , new AbstractScrollTable$DefaultScrollTableResources));
  this$static.columnWidthInfos = $HashMap(($location_0[stackIndex] = 'ScrollTable.java:' + '55' , new HashMap));
  this$static.untruncatableColumns = $HashSet(($location_0[stackIndex] = 'ScrollTable.java:' + '60' , new HashSet));
  (new HashSet).map = $HashMap(($location_0[stackIndex] = 'HashSet.java:' + '40' , new HashMap));
  this$static.untruncatableHeaders = $HashSet(($location_0[stackIndex] = 'ScrollTable.java:' + '70' , new HashSet));
  this$static.unsortableColumns = $HashSet(($location_0[stackIndex] = 'ScrollTable.java:' + '75' , new HashSet));
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_567(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_567;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_ScrollTable2_2_classLit;
}

function ScrollTable2(){
}

_ = ScrollTable2.prototype = new ScrollTable;
_.getClass$ = getClass_567;
_.typeId$ = 371;
function $clinit_857(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_857;
  $location_0[stackIndex] = 'SelectionGrid.java:' + '126' , $clinit_857 = nullMethod;
  $location_0[stackIndex] = 'SelectionGrid.java:' + '127' , ONE_ROW = $SelectionGrid$SelectionPolicy(($location_0[stackIndex] = 'SelectionGrid.java:' + '1' , new SelectionGrid$SelectionPolicy), 'ONE_ROW', 0, null);
  $location_0[stackIndex] = 'SelectionGrid.java:' + '127' , MULTI_ROW = $SelectionGrid$SelectionPolicy(($location_0[stackIndex] = 'SelectionGrid.java:' + '1' , new SelectionGrid$SelectionPolicy), 'MULTI_ROW', 1, null);
  $location_0[stackIndex] = 'SelectionGrid.java:' + '127' , CHECKBOX = $SelectionGrid$SelectionPolicy(($location_0[stackIndex] = 'SelectionGrid.java:' + '1' , new SelectionGrid$SelectionPolicy), 'CHECKBOX', 2, "<input type='checkbox'/>");
  $location_0[stackIndex] = 'SelectionGrid.java:' + '127' , RADIO = $SelectionGrid$SelectionPolicy(($location_0[stackIndex] = 'SelectionGrid.java:' + '1' , new SelectionGrid$SelectionPolicy), 'RADIO', 3, "<input name='%NAME%' type='radio'/>");
  $stackDepth_0 = stackIndex - 1;
}

function $SelectionGrid$SelectionPolicy(this$static, enum$name, enum$ordinal, inputHtml){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $SelectionGrid$SelectionPolicy;
  $location_0[stackIndex] = 'SelectionGrid.java:' + '132' , $clinit_857();
  $location_0[stackIndex] = 'Enum.java:' + '76' , this$static.name_0 = enum$name;
  $location_0[stackIndex] = 'Enum.java:' + '77' , this$static.ordinal = enum$ordinal;
  $location_0[stackIndex] = 'SelectionGrid.java:' + '133' , this$static.inputHtml = inputHtml;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_568(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_568;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_SelectionGrid$SelectionPolicy_2_classLit;
}

function values_20(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = values_20;
  $location_0[stackIndex] = 'SelectionGrid.java:' + '126' , $clinit_857();
  returnTemp = initValues(_3Lorg_gwt_mosaic_ui_client_table_SelectionGrid$SelectionPolicy_2_classLit, 703, 104, [ONE_ROW, MULTI_ROW, CHECKBOX, RADIO]);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function SelectionGrid$SelectionPolicy(){
}

_ = SelectionGrid$SelectionPolicy.prototype = new Enum;
_.getClass$ = getClass_568;
_.typeId$ = 372;
_.inputHtml = null;
var CHECKBOX, MULTI_ROW, ONE_ROW, RADIO;
function getClass_569(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_569;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_SortableGrid$ColumnSorter_2_classLit;
}

function SortableGrid$ColumnSorter(){
}

_ = SortableGrid$ColumnSorter.prototype = new Object_0;
_.getClass$ = getClass_569;
_.typeId$ = 0;
function $SortableGrid$ColumnSorterCallback(this$static, selectedRows, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $SortableGrid$ColumnSorterCallback;
  $location_0[stackIndex] = 'SortableGrid.java:' + '135' , this$static.this$0 = this$0;
  $location_0[stackIndex] = 'SortableGrid.java:' + '136' , this$static.selectedRows = selectedRows;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $onSortingComplete(this$static){
  var i, rowIndex, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $onSortingComplete;
  for ($location_0[stackIndex] = 'SortableGrid.java:' + '183' , i = 0; i < this$static.selectedRows.length; $location_0[stackIndex] = 'SortableGrid.java:' + '183' , ++i) {
    rowIndex = $getRowIndex_0(($location_0[stackIndex] = 'SortableGrid.java:' + '184' , this$static.selectedRows[i]));
    rowIndex >= 0 && ($location_0[stackIndex] = 'SortableGrid.java:' + '186' , $selectRow(this$static.this$0, rowIndex, false));
  }
  $location_0[stackIndex] = 'SortableGrid.java:' + '190' , $fireColumnSorted(this$static.this$0);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_570(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_570;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_SortableGrid$ColumnSorterCallback_2_classLit;
}

function SortableGrid$ColumnSorterCallback(){
}

_ = SortableGrid$ColumnSorterCallback.prototype = new Object_0;
_.getClass$ = getClass_570;
_.typeId$ = 0;
_.selectedRows = null;
_.this$0 = null;
function $onSortColumn(grid, sortList, callback){
  var ascending, column, formatter, i, rowCount, tdElems, trElems, parent_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $onSortColumn;
  column = ($location_0[stackIndex] = 'SortableGrid.java:' + '86' , $getPrimaryColumn(sortList));
  ascending = ($location_0[stackIndex] = 'SortableGrid.java:' + '87' , $isPrimaryAscending(sortList));
  $location_0[stackIndex] = 'SortableGrid.java:' + '90' , formatter = ($location_0[stackIndex] = 'SelectionGrid.java:' + '283' , dynamicCast(grid.cellFormatter, 219));
  $location_0[stackIndex] = 'SortableGrid.java:' + '91' , rowCount = grid.numRows;
  tdElems = $ArrayList_1(($location_0[stackIndex] = 'SortableGrid.java:' + '92' , new ArrayList), rowCount);
  for ($location_0[stackIndex] = 'SortableGrid.java:' + '93' , i = 0; i < rowCount; $location_0[stackIndex] = 'SortableGrid.java:' + '93' , ++i) {
    $add_7(tdElems, ($location_0[stackIndex] = 'SortableGrid.java:' + '94' , formatter.getRawElement(i, column)));
  }
  ascending?sort(tdElems, ($location_0[stackIndex] = 'SortableGrid.java:' + '99' , new SortableGrid$DefaultColumnSorter$1)):sort(tdElems, ($location_0[stackIndex] = 'SortableGrid.java:' + '105' , new SortableGrid$DefaultColumnSorter$2));
  trElems = ($location_0[stackIndex] = 'SortableGrid.java:' + '113' , initDim(_3Lcom_google_gwt_core_client_JavaScriptObject_2_classLit, 629, -1, rowCount, 0));
  for ($location_0[stackIndex] = 'SortableGrid.java:' + '114' , i = 0; i < rowCount; $location_0[stackIndex] = 'SortableGrid.java:' + '114' , ++i) {
    $location_0[stackIndex] = 'SortableGrid.java:' + '115' , setCheck(trElems, i, ($location_0[stackIndex] = 'DOMImpl.java:' + '236' , parent_0 = ($location_0[stackIndex] = 'Node.java:' + '184' , $clinit_81() , ($location_0[stackIndex] = 'SortableGrid.java:' + '115' , dynamicCastJso(($location_0[stackIndex] = 'ArrayList.java:' + '157' , checkIndex(i, tdElems.size_0) , ($location_0[stackIndex] = 'ArrayList.java:' + '158' , tdElems.array[i]))))).parentNode , (!parent_0 || parent_0.nodeType != 1) && ($location_0[stackIndex] = 'DOMImpl.java:' + '238' , parent_0 = null) , parent_0));
  }
  $location_0[stackIndex] = 'SortableGrid.java:' + '169' , $applySort(callback.this$0, trElems);
  $location_0[stackIndex] = 'SortableGrid.java:' + '172' , $onSortingComplete(callback);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_571(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_571;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_SortableGrid$DefaultColumnSorter_2_classLit;
}

function SortableGrid$DefaultColumnSorter(){
}

_ = SortableGrid$DefaultColumnSorter.prototype = new SortableGrid$ColumnSorter;
_.getClass$ = getClass_571;
_.typeId$ = 0;
function $compare_3(o1, o2){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $compare_3;
  returnTemp = ($location_0[stackIndex] = 'String.java:' + '435' , compareTo_8(($location_0[stackIndex] = 'Element.java:' + '266' , $getInnerText_0(($location_0[stackIndex] = 'DOMImpl.java:' + '22' , $clinit_81() , impl_0), o1)), $getInnerText_0(impl_0, o2)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function compare_5(p0, p1){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = compare_5;
  returnTemp = $compare_3(($location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , dynamicCastJso(p0)), dynamicCastJso(p1));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getClass_572(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_572;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_SortableGrid$DefaultColumnSorter$1_2_classLit;
}

function SortableGrid$DefaultColumnSorter$1(){
}

_ = SortableGrid$DefaultColumnSorter$1.prototype = new Object_0;
_.compare = compare_5;
_.getClass$ = getClass_572;
_.typeId$ = 0;
function $compare_4(o1, o2){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $compare_4;
  returnTemp = ($location_0[stackIndex] = 'String.java:' + '435' , compareTo_8(($location_0[stackIndex] = 'Element.java:' + '266' , $getInnerText_0(($location_0[stackIndex] = 'DOMImpl.java:' + '22' , $clinit_81() , impl_0), o2)), $getInnerText_0(impl_0, o1)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function compare_6(p0, p1){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = compare_6;
  returnTemp = $compare_4(($location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , dynamicCastJso(p0)), dynamicCastJso(p1));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getClass_573(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_573;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_SortableGrid$DefaultColumnSorter$2_2_classLit;
}

function SortableGrid$DefaultColumnSorter$2(){
}

_ = SortableGrid$DefaultColumnSorter$2.prototype = new Object_0;
_.compare = compare_6;
_.getClass$ = getClass_573;
_.typeId$ = 0;
function $TableModelHelper$ColumnSortInfo(this$static, column, ascending){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $TableModelHelper$ColumnSortInfo;
  $location_0[stackIndex] = 'TableModelHelper.java:' + '86' , this$static.column = column;
  $location_0[stackIndex] = 'TableModelHelper.java:' + '87' , this$static.ascending = ascending;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $equals_7(this$static, csi){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $equals_7;
  if (!csi) {
    $stackDepth_0 = stackIndex - 1;
    return false;
  }
  returnTemp = this$static.column == csi.column && this$static.ascending == csi.ascending;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function equals_32(obj){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = equals_32;
  if (obj != null && ($location_0[stackIndex] = 'Cast.java:' + '76' , canCast(obj.typeId$, 221))) {
    returnTemp = $equals_7(this, ($location_0[stackIndex] = 'TableModelHelper.java:' + '93' , dynamicCast(obj, 221)));
    $stackDepth_0 = stackIndex - 1;
    return returnTemp;
  }
  $stackDepth_0 = stackIndex - 1;
  return false;
}

function getClass_574(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_574;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_TableModelHelper$ColumnSortInfo_2_classLit;
}

function hashCode_33(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = hashCode_33;
  returnTemp = this.$H || ($location_0[stackIndex] = 'Impl.java:' + '70' , this.$H = ($location_0[stackIndex] = 'Impl.java:' + '226' , ++sNextHashId));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function TableModelHelper$ColumnSortInfo(){
}

_ = TableModelHelper$ColumnSortInfo.prototype = new Object_0;
_.equals$ = equals_32;
_.getClass$ = getClass_574;
_.hashCode$ = hashCode_33;
_.typeId$ = 373;
_.ascending = false;
_.column = 0;
function $TableModelHelper$ColumnSortList(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $TableModelHelper$ColumnSortList;
  this$static.infos = $ArrayList(($location_0[stackIndex] = 'TableModelHelper.java:' + '162' , new ArrayList));
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $add_30(this$static, index, sortInfo){
  var column, curInfo, i, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $add_30;
  $location_0[stackIndex] = 'TableModelHelper.java:' + '187' , column = sortInfo.column;
  for ($location_0[stackIndex] = 'TableModelHelper.java:' + '188' , i = 0; i < this$static.infos.size_0; $location_0[stackIndex] = 'TableModelHelper.java:' + '188' , ++i) {
    curInfo = dynamicCast(($location_0[stackIndex] = 'TableModelHelper.java:' + '189' , $get_5(this$static.infos, i)), 221);
    if (curInfo.column == column) {
      $location_0[stackIndex] = 'TableModelHelper.java:' + '191' , $remove_7(this$static.infos, i);
      $location_0[stackIndex] = 'TableModelHelper.java:' + '192' , --i;
      column < index && ($location_0[stackIndex] = 'TableModelHelper.java:' + '194' , --index);
    }
  }
  $location_0[stackIndex] = 'TableModelHelper.java:' + '200' , $add_8(this$static.infos, index, sortInfo);
  $stackDepth_0 = stackIndex - 1;
}

function $equals_8(this$static, csl){
  var i, size, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $equals_8;
  if (!csl) {
    $stackDepth_0 = stackIndex - 1;
    return false;
  }
  $location_0[stackIndex] = 'TableModelHelper.java:' + '231' , size = this$static.infos.size_0;
  if (size != csl.infos.size_0) {
    $stackDepth_0 = stackIndex - 1;
    return false;
  }
  for ($location_0[stackIndex] = 'TableModelHelper.java:' + '237' , i = 0; i < size; $location_0[stackIndex] = 'TableModelHelper.java:' + '237' , ++i) {
    if (!$equals_7(dynamicCast(($location_0[stackIndex] = 'TableModelHelper.java:' + '238' , $get_5(this$static.infos, i)), 221), dynamicCast($get_5(csl.infos, i), 221))) {
      $stackDepth_0 = stackIndex - 1;
      return false;
    }
  }
  $stackDepth_0 = stackIndex - 1;
  return true;
}

function $getPrimaryColumn(this$static){
  var primaryInfo, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getPrimaryColumn;
  primaryInfo = ($location_0[stackIndex] = 'TableModelHelper.java:' + '253' , $getPrimaryColumnSortInfo(this$static));
  if (!primaryInfo) {
    $stackDepth_0 = stackIndex - 1;
    return -1;
  }
  returnTemp = primaryInfo.column;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $getPrimaryColumnSortInfo(this$static){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getPrimaryColumnSortInfo;
  if (this$static.infos.size_0 > 0) {
    returnTemp = dynamicCast(($location_0[stackIndex] = 'TableModelHelper.java:' + '267' , $get_5(this$static.infos, 0)), 221);
    $stackDepth_0 = stackIndex - 1;
    return returnTemp;
  }
  $stackDepth_0 = stackIndex - 1;
  return null;
}

function $isPrimaryAscending(this$static){
  var primaryInfo, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $isPrimaryAscending;
  primaryInfo = ($location_0[stackIndex] = 'TableModelHelper.java:' + '283' , $getPrimaryColumnSortInfo(this$static));
  if (!primaryInfo) {
    $stackDepth_0 = stackIndex - 1;
    return true;
  }
  returnTemp = primaryInfo.ascending;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function equals_33(obj){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = equals_33;
  if (obj != null && ($location_0[stackIndex] = 'Cast.java:' + '76' , canCast(obj.typeId$, 222))) {
    returnTemp = $equals_8(this, ($location_0[stackIndex] = 'TableModelHelper.java:' + '213' , dynamicCast(obj, 222)));
    $stackDepth_0 = stackIndex - 1;
    return returnTemp;
  }
  $stackDepth_0 = stackIndex - 1;
  return false;
}

function getClass_575(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_575;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_TableModelHelper$ColumnSortList_2_classLit;
}

function hashCode_34(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = hashCode_34;
  returnTemp = this.$H || ($location_0[stackIndex] = 'Impl.java:' + '70' , this.$H = ($location_0[stackIndex] = 'Impl.java:' + '226' , ++sNextHashId));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function iterator_24(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = iterator_24;
  returnTemp = ($location_0[stackIndex] = 'TableModelHelper.java:' + '291' , $TableModelHelper$ImmutableIterator(($location_0[stackIndex] = 'TableModelHelper.java:' + '291' , new TableModelHelper$ImmutableIterator), $AbstractList$IteratorImpl(($location_0[stackIndex] = 'AbstractList.java:' + '278' , new AbstractList$IteratorImpl), this.infos)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function TableModelHelper$ColumnSortList(){
}

_ = TableModelHelper$ColumnSortList.prototype = new Object_0;
_.equals$ = equals_33;
_.getClass$ = getClass_575;
_.hashCode$ = hashCode_34;
_.iterator_0 = iterator_24;
_.typeId$ = 374;
function $TableModelHelper$ImmutableIterator(this$static, iterator){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $TableModelHelper$ImmutableIterator;
  $location_0[stackIndex] = 'TableModelHelper.java:' + '450' , this$static.iterator = iterator;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_576(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_576;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_TableModelHelper$ImmutableIterator_2_classLit;
}

function hasNext_15(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = hasNext_15;
  returnTemp = ($location_0[stackIndex] = 'TableModelHelper.java:' + '454' , $hasNext_4(this.iterator));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function next_16(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = next_16;
  returnTemp = ($location_0[stackIndex] = 'TableModelHelper.java:' + '458' , $next_6(this.iterator));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function remove_39(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = remove_39;
  throw $UnsupportedOperationException(($location_0[stackIndex] = 'TableModelHelper.java:' + '462' , new UnsupportedOperationException));
}

function TableModelHelper$ImmutableIterator(){
}

_ = TableModelHelper$ImmutableIterator.prototype = new Object_0;
_.getClass$ = getClass_576;
_.hasNext = hasNext_15;
_.next_0 = next_16;
_.remove = remove_39;
_.typeId$ = 0;
_.iterator = null;
function $scrollTableAscending(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $scrollTableAscending;
  !scrollTableAscending && (scrollTableAscending = $ImageResourcePrototype(($location_0[stackIndex] = 'org_gwt_mosaic_ui_client_table_AbstractScrollTable_ScrollTableStyle_default_InlineClientBundleGenerator.java:' + '19' , new ImageResourcePrototype), 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAHCAYAAADebrddAAAAPklEQVR42mNgoBjw5/8nWqF+5vz/hDUAFdiWLPnvN3EzmMatASgRN3HD/4qth+AYxMfUABII7sCNifYDEgAAXGQx0cU3f18AAAAASUVORK5CYII=', 0, 0, 11, 7));
  $stackDepth_0 = stackIndex - 1;
  return scrollTableAscending;
}

function $scrollTableDescending(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $scrollTableDescending;
  !scrollTableDescending && (scrollTableDescending = $ImageResourcePrototype(($location_0[stackIndex] = 'org_gwt_mosaic_ui_client_table_AbstractScrollTable_ScrollTableStyle_default_InlineClientBundleGenerator.java:' + '29' , new ImageResourcePrototype), 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAHCAYAAADebrddAAAAPklEQVR42mNgIBnw5/9nCO7AjUHy6BriJm74X7H1EByD+JgKkTTYliz57zdxM5jGrRBJg37mfCIUIvuBUgAArTIx0fXqhqIAAAAASUVORK5CYII=', 0, 0, 11, 7));
  $stackDepth_0 = stackIndex - 1;
  return scrollTableDescending;
}

function $scrollTableFillWidth(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $scrollTableFillWidth;
  !scrollTableFillWidth && (scrollTableFillWidth = $ImageResourcePrototype(($location_0[stackIndex] = 'org_gwt_mosaic_ui_client_table_AbstractScrollTable_ScrollTableStyle_default_InlineClientBundleGenerator.java:' + '39' , new ImageResourcePrototype), 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAAAcUlEQVR42q2Q0QnAIAxEXamLdJLu6reoGUDFFU4UDOlPaYgHgjy9p8S5A4FxOcjUWqFhLCilLBhCgIaxoLWG3jtijNCwJZjGlBJyziAiaNiRIdpy3Q/E3v+471/dLZgHUvb14JawYJcVAu6c+YFpBtYM89oYi+ZI3r8AAAAASUVORK5CYII=', 0, 0, 16, 14));
  $stackDepth_0 = stackIndex - 1;
  return scrollTableFillWidth;
}

function getClass_577(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_577;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_table_org_1gwt_1mosaic_1ui_1client_1table_1AbstractScrollTable_1ScrollTableStyle_1default_1InlineClientBundleGenerator_2_classLit;
}

function org_gwt_mosaic_ui_client_table_AbstractScrollTable_ScrollTableStyle_default_InlineClientBundleGenerator(){
}

_ = org_gwt_mosaic_ui_client_table_AbstractScrollTable_ScrollTableStyle_default_InlineClientBundleGenerator.prototype = new Object_0;
_.getClass$ = getClass_577;
_.typeId$ = 0;
var scrollTableAscending = null, scrollTableDescending = null, scrollTableFillWidth = null;
function createButtonLabel(image, text, type){
  var hpanel, html, img, vpanel, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = createButtonLabel;
  html = $HTML_1(($location_0[stackIndex] = 'ButtonHelper.java:' + '44' , new HTML), text, false);
  $location_0[stackIndex] = 'ButtonHelper.java:' + '45' , img = $Image_2(($location_0[stackIndex] = 'ClippedImagePrototype.java:' + '63' , new Image_0), image.url, image.left, image.top_0, image.width_0, image.height_0);
  if (type == ($location_0[stackIndex] = 'ButtonHelper.java:' + '34' , $clinit_868() , TEXT_ONLY)) {
    $stackDepth_0 = stackIndex - 1;
    return text;
  }
   else if (type == NO_TEXT) {
    returnTemp = ($location_0[stackIndex] = 'ClippedImagePrototype.java:' + '68' , $getHTML(image.url, image.left, image.top_0, image.width_0, image.height_0));
    $stackDepth_0 = stackIndex - 1;
    return returnTemp;
  }
   else if (type == TEXT_ON_LEFT || type == TEXT_ON_RIGHT) {
    hpanel = $HorizontalPanel(($location_0[stackIndex] = 'ButtonHelper.java:' + '56' , new HorizontalPanel));
    if (type == TEXT_ON_LEFT) {
      $location_0[stackIndex] = 'ButtonHelper.java:' + '61' , $add_5(hpanel, html);
      $add_5(hpanel, $HTML_0(($location_0[stackIndex] = 'ButtonHelper.java:' + '62' , new HTML), '&nbsp;'));
      $location_0[stackIndex] = 'ButtonHelper.java:' + '63' , $add_5(hpanel, img);
    }
     else {
      $location_0[stackIndex] = 'ButtonHelper.java:' + '65' , $add_5(hpanel, img);
      $add_5(hpanel, $HTML_0(($location_0[stackIndex] = 'ButtonHelper.java:' + '66' , new HTML), '&nbsp;'));
      $location_0[stackIndex] = 'ButtonHelper.java:' + '67' , $add_5(hpanel, html);
    }
    $location_0[stackIndex] = 'ButtonHelper.java:' + '69' , $setCellVerticalAlignment(hpanel, html, ($location_0[stackIndex] = 'HasVerticalAlignment.java:' + '67' , $clinit_385() , ALIGN_MIDDLE));
    $location_0[stackIndex] = 'ButtonHelper.java:' + '70' , $setCellVerticalAlignment(hpanel, img, ALIGN_MIDDLE);
    returnTemp = ($location_0[stackIndex] = 'Element.java:' + '424' , $clinit_81() , hpanel.element).outerHTML;
    $stackDepth_0 = stackIndex - 1;
    return returnTemp;
  }
   else {
    vpanel = $VerticalPanel(($location_0[stackIndex] = 'ButtonHelper.java:' + '73' , new VerticalPanel));
    if (type == TEXT_ON_TOP) {
      $location_0[stackIndex] = 'ButtonHelper.java:' + '75' , $add_9(vpanel, html);
      $location_0[stackIndex] = 'ButtonHelper.java:' + '76' , $add_9(vpanel, img);
    }
     else {
      $location_0[stackIndex] = 'ButtonHelper.java:' + '78' , $add_9(vpanel, img);
      $location_0[stackIndex] = 'ButtonHelper.java:' + '79' , $add_9(vpanel, html);
    }
    $location_0[stackIndex] = 'ButtonHelper.java:' + '81' , $setCellHorizontalAlignment(vpanel, html, ($location_0[stackIndex] = 'HasHorizontalAlignment.java:' + '62' , $clinit_380() , ALIGN_CENTER));
    $location_0[stackIndex] = 'ButtonHelper.java:' + '83' , $setCellHorizontalAlignment(vpanel, img, ALIGN_CENTER);
    returnTemp = ($location_0[stackIndex] = 'Element.java:' + '424' , $clinit_81() , vpanel.element).outerHTML;
    $stackDepth_0 = stackIndex - 1;
    return returnTemp;
  }
  $stackDepth_0 = stackIndex - 1;
}

function $clinit_868(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_868;
  $location_0[stackIndex] = 'ButtonHelper.java:' + '33' , $clinit_868 = nullMethod;
  $location_0[stackIndex] = 'ButtonHelper.java:' + '34' , TEXT_ON_TOP = $ButtonHelper$ButtonLabelType(($location_0[stackIndex] = 'ButtonHelper.java:' + '1' , new ButtonHelper$ButtonLabelType), 'TEXT_ON_TOP', 0);
  $location_0[stackIndex] = 'ButtonHelper.java:' + '34' , TEXT_ON_RIGHT = $ButtonHelper$ButtonLabelType(($location_0[stackIndex] = 'ButtonHelper.java:' + '1' , new ButtonHelper$ButtonLabelType), 'TEXT_ON_RIGHT', 1);
  $location_0[stackIndex] = 'ButtonHelper.java:' + '34' , TEXT_ON_BOTTOM = $ButtonHelper$ButtonLabelType(($location_0[stackIndex] = 'ButtonHelper.java:' + '1' , new ButtonHelper$ButtonLabelType), 'TEXT_ON_BOTTOM', 2);
  $location_0[stackIndex] = 'ButtonHelper.java:' + '34' , TEXT_ON_LEFT = $ButtonHelper$ButtonLabelType(($location_0[stackIndex] = 'ButtonHelper.java:' + '1' , new ButtonHelper$ButtonLabelType), 'TEXT_ON_LEFT', 3);
  $location_0[stackIndex] = 'ButtonHelper.java:' + '34' , TEXT_ONLY = $ButtonHelper$ButtonLabelType(($location_0[stackIndex] = 'ButtonHelper.java:' + '1' , new ButtonHelper$ButtonLabelType), 'TEXT_ONLY', 4);
  $location_0[stackIndex] = 'ButtonHelper.java:' + '34' , NO_TEXT = $ButtonHelper$ButtonLabelType(($location_0[stackIndex] = 'ButtonHelper.java:' + '1' , new ButtonHelper$ButtonLabelType), 'NO_TEXT', 5);
  $stackDepth_0 = stackIndex - 1;
}

function $ButtonHelper$ButtonLabelType(this$static, enum$name, enum$ordinal){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ButtonHelper$ButtonLabelType;
  $location_0[stackIndex] = 'ButtonHelper.java:' + '33' , $clinit_868();
  $location_0[stackIndex] = 'Enum.java:' + '76' , this$static.name_0 = enum$name;
  $location_0[stackIndex] = 'Enum.java:' + '77' , this$static.ordinal = enum$ordinal;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_578(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_578;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_util_ButtonHelper$ButtonLabelType_2_classLit;
}

function values_21(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = values_21;
  $location_0[stackIndex] = 'ButtonHelper.java:' + '33' , $clinit_868();
  returnTemp = initValues(_3Lorg_gwt_mosaic_ui_client_util_ButtonHelper$ButtonLabelType_2_classLit, 704, 105, [TEXT_ON_TOP, TEXT_ON_RIGHT, TEXT_ON_BOTTOM, TEXT_ON_LEFT, TEXT_ONLY, NO_TEXT]);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function ButtonHelper$ButtonLabelType(){
}

_ = ButtonHelper$ButtonLabelType.prototype = new Enum;
_.getClass$ = getClass_578;
_.typeId$ = 375;
var NO_TEXT, TEXT_ONLY, TEXT_ON_BOTTOM, TEXT_ON_LEFT, TEXT_ON_RIGHT, TEXT_ON_TOP;
function PreferencesView(){
}

_ = PreferencesView.prototype = new Object_0;
_.typeId$ = 394;
_.panel = null;
function has(type){
  var match, p, p$iterator, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = has;
  $location_0[stackIndex] = 'ServerPlugins.java:' + '46' , match = false;
  if (status_1) {
    for ($location_0[stackIndex] = 'ServerPlugins.java:' + '50' , p$iterator = $AbstractList$IteratorImpl(($location_0[stackIndex] = 'AbstractList.java:' + '278' , new AbstractList$IteratorImpl), status_1.plugins); p$iterator.i < ($location_0[stackIndex] = 'AbstractList.java:' + '38' , p$iterator.this$0.size_1());) {
      p = dynamicCast(($location_0[stackIndex] = 'ServerPlugins.java:' + '50' , $next_6(p$iterator)), 228);
      if ($location_0[stackIndex] = 'ServerPlugins.java:' + '52' , $equals_4(p.type_0, type)) {
        $location_0[stackIndex] = 'ServerPlugins.java:' + '54' , match = p.available;
        break;
      }
    }
  }
  $stackDepth_0 = stackIndex - 1;
  return match;
}

function ServerStatusView(){
}

_ = ServerStatusView.prototype = new Object_0;
_.typeId$ = 397;
_.controller = null;
_.layoutPanel = null;
_.pluginPanel = null;
function $getParticipationTaskListURL(idRef){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getParticipationTaskListURL;
  returnTemp = ($location_0[stackIndex] = 'URLBuilder.java:' + '150' , $getConsoleServerUrl(config_0)) + '/rs/tasks/' + ($location_0[stackIndex] = 'URL.java:' + '113' , throwIfNull('decodedURL', idRef) , ($location_0[stackIndex] = 'URL.java:' + '222' , encodeURI(idRef))) + '/participation';
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $getTaskAssignURL(id, idRef){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getTaskAssignURL;
  returnTemp = ($location_0[stackIndex] = 'URLBuilder.java:' + '170' , $getConsoleServerUrl(config_0)) + '/rs/task/' + toString_18(id) + '/assign/' + ($location_0[stackIndex] = 'URL.java:' + '113' , throwIfNull('decodedURL', idRef) , ($location_0[stackIndex] = 'URL.java:' + '222' , encodeURI(idRef)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $getTaskCompleteURL(id, outcome){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getTaskCompleteURL;
  returnTemp = ($location_0[stackIndex] = 'URLBuilder.java:' + '165' , $getConsoleServerUrl(config_0)) + '/rs/task/' + toString_18(id) + '/close/' + ($location_0[stackIndex] = 'URL.java:' + '113' , throwIfNull('decodedURL', outcome) , ($location_0[stackIndex] = 'URL.java:' + '222' , encodeURI(outcome)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $getTaskListURL(idRef){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getTaskListURL;
  returnTemp = ($location_0[stackIndex] = 'URLBuilder.java:' + '145' , $getConsoleServerUrl(config_0)) + '/rs/tasks/' + ($location_0[stackIndex] = 'URL.java:' + '113' , throwIfNull('decodedURL', idRef) , ($location_0[stackIndex] = 'URL.java:' + '222' , encodeURI(idRef)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $getTaskReleaseURL(id){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getTaskReleaseURL;
  returnTemp = ($location_0[stackIndex] = 'URLBuilder.java:' + '155' , $getConsoleServerUrl(config_0)) + '/rs/task/' + toString_18(id) + '/release';
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $HeaderLabel(this$static, string){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $HeaderLabel;
  $location_0[stackIndex] = 'HeaderLabel.java:' + '34' , $Label_0(this$static, string);
  $location_0[stackIndex] = 'Element.java:' + '688' , this$static.element['className'] = 'bpm-label-header';
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $HeaderLabel_0(this$static, string, invert){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $HeaderLabel_0;
  $location_0[stackIndex] = 'HeaderLabel.java:' + '40' , $Label_0(this$static, string);
  invert?($location_0[stackIndex] = 'Element.java:' + '688' , this$static.element['className'] = 'bpm-label-header-invert' , undefined):(this$static.element['className'] = 'bpm-label-header' , undefined);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_616(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_616;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_common_HeaderLabel_2_classLit;
}

function HeaderLabel(){
}

_ = HeaderLabel.prototype = new Label;
_.getClass$ = getClass_616;
_.typeId$ = 399;
function $IFrameWindowPanel(this$static, url, title){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $IFrameWindowPanel;
  $location_0[stackIndex] = 'IFrameWindowPanel.java:' + '69' , this$static.url = url;
  $location_0[stackIndex] = 'IFrameWindowPanel.java:' + '70' , this$static.title = title;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $createWindow(this$static){
  var header, height, layout, width, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $createWindow;
  this$static.windowPanel = $WindowPanel(($location_0[stackIndex] = 'IFrameWindowPanel.java:' + '75' , new WindowPanel));
  $location_0[stackIndex] = 'PopupPanel.java:' + '744' , this$static.windowPanel.isAnimationEnabled = true;
  layout = $ScrollLayoutPanel_0(($location_0[stackIndex] = 'IFrameWindowPanel.java:' + '78' , new ScrollLayoutPanel), ($location_0[stackIndex] = 'IFrameWindowPanel.java:' + '78' , $BoxLayout_1(new BoxLayout, ($location_0[stackIndex] = 'BoxLayout.java:' + '170' , $clinit_787() , VERTICAL))));
  $location_0[stackIndex] = 'Element.java:' + '688' , layout.element['className'] = 'bpm-window-layout';
  $location_0[stackIndex] = 'LayoutPanel.java:' + '289' , setStyleAttribute_0(layout.element, 'padding', '5px');
  header = $HeaderLabel_0(($location_0[stackIndex] = 'IFrameWindowPanel.java:' + '82' , new HeaderLabel), this$static.title, true);
  $add_26(layout, header, ($location_0[stackIndex] = 'IFrameWindowPanel.java:' + '84' , $BoxLayoutData_4(($location_0[stackIndex] = 'IFrameWindowPanel.java:' + '84' , new BoxLayoutData), ($location_0[stackIndex] = 'BoxLayoutData.java:' + '30' , $clinit_789() , HORIZONTAL_0))));
  $location_0[stackIndex] = 'WindowPanel.java:' + '423' , add_27(this$static.windowPanel, $IFrameWindowPanel$1(($location_0[stackIndex] = 'IFrameWindowPanel.java:' + '86' , new IFrameWindowPanel$1), this$static));
  this$static.frame = $IFrameWindowPanel$2(($location_0[stackIndex] = 'IFrameWindowPanel.java:' + '101' , new IFrameWindowPanel$2));
  $location_0[stackIndex] = 'Style.java:' + '1449' , this$static.frame.element.style['border'] = 'none';
  $location_0[stackIndex] = 'Element.java:' + '607' , this$static.frame.element.id = '' + toString_18(fromDouble(($location_0[stackIndex] = 'Date.java:' + '199' , $getTime0($Date(($location_0[stackIndex] = 'IFrameWindowPanel.java:' + '146' , new Date_1))))));
  $location_0[stackIndex] = 'FrameElement.java:' + '190' , this$static.frame.element.src = this$static.url;
  $add_26(layout, this$static.frame, $BoxLayoutData_4(($location_0[stackIndex] = 'IFrameWindowPanel.java:' + '151' , new BoxLayoutData), BOTH));
  $location_0[stackIndex] = 'IFrameWindowPanel.java:' + '152' , this$static.windowPanel.setWidget(layout);
  $location_0[stackIndex] = 'IFrameWindowPanel.java:' + '154' , addMaximizeButton(this$static.windowPanel, ($location_0[stackIndex] = 'Caption.java:' + '61' , $clinit_641() , RIGHT));
  $location_0[stackIndex] = 'IFrameWindowPanel.java:' + '155' , addMinimizeButton(this$static.windowPanel, RIGHT);
  $location_0[stackIndex] = 'IFrameWindowPanel.java:' + '158' , width = ($location_0[stackIndex] = 'Window.java:' + '643' , $getClientWidth_1($doc)) - 200;
  $location_0[stackIndex] = 'IFrameWindowPanel.java:' + '159' , height = ($location_0[stackIndex] = 'Window.java:' + '633' , $getClientHeight_1($doc)) - 100;
  $setContentSize_1(this$static.windowPanel, $Dimension_1(($location_0[stackIndex] = 'IFrameWindowPanel.java:' + '160' , new Dimension), width, height));
  $location_0[stackIndex] = 'IFrameWindowPanel.java:' + '161' , $center_0(this$static.windowPanel);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_617(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_617;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_common_IFrameWindowPanel_2_classLit;
}

function IFrameWindowPanel(){
}

_ = IFrameWindowPanel.prototype = new Object_0;
_.getClass$ = getClass_617;
_.typeId$ = 0;
_.callback = null;
_.frame = null;
_.title = null;
_.url = null;
_.windowPanel = null;
function $IFrameWindowPanel$1(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $IFrameWindowPanel$1;
  $location_0[stackIndex] = 'IFrameWindowPanel.java:' + '86' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $onWindowClosed(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $onWindowClosed;
  !!this$static.this$0.callback && ($location_0[stackIndex] = 'IFrameWindowPanel.java:' + '89' , this$static.this$0.callback.onWindowClosed());
  $location_0[stackIndex] = 'IFrameWindowPanel.java:' + '91' , this$static.this$0.windowPanel = null;
  $location_0[stackIndex] = 'IFrameWindowPanel.java:' + '92' , this$static.this$0.frame = null;
  $stackDepth_0 = stackIndex - 1;
}

function getClass_618(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_618;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_common_IFrameWindowPanel$1_2_classLit;
}

function IFrameWindowPanel$1(){
}

_ = IFrameWindowPanel$1.prototype = new Object_0;
_.getClass$ = getClass_618;
_.typeId$ = 400;
_.this$0 = null;
function $IFrameWindowPanel$2(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $IFrameWindowPanel$2;
  $location_0[stackIndex] = 'UIObject.java:' + '799' , this$static.element = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , ($location_0[stackIndex] = 'Document.java:' + '408' , $clinit_81() , $doc).createElement('iframe'));
  $location_0[stackIndex] = 'Element.java:' + '688' , this$static.element['className'] = 'gwt-Frame';
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_619(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_619;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_common_IFrameWindowPanel$2_2_classLit;
}

function IFrameWindowPanel$2(){
}

_ = IFrameWindowPanel$2.prototype = new Frame;
_.getClass$ = getClass_619;
_.typeId$ = 401;
function on(parent_0, loading){
  var height, left, top_0, width, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = on;
  if (!!parent_0 && loading) {
    $location_0[stackIndex] = 'LoadingOverlay.java:' + '37' , left = $getAbsoluteLeft_0(($location_0[stackIndex] = 'Element.java:' + '150' , $clinit_81() , parent_0.element));
    $location_0[stackIndex] = 'LoadingOverlay.java:' + '38' , top_0 = ($location_0[stackIndex] = 'Element.java:' + '166' , $getAbsoluteTop_0(parent_0.element));
    $location_0[stackIndex] = 'LoadingOverlay.java:' + '40' , width = parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , parent_0.element['offsetWidth'])) || 0;
    $location_0[stackIndex] = 'LoadingOverlay.java:' + '41' , height = parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , parent_0.element['offsetHeight'])) || 0;
    if (width > 100 & height > 100) {
      p_8 = $InfoPanel(($location_0[stackIndex] = 'LoadingOverlay.java:' + '45' , new InfoPanel));
      setStylePrimaryName(($location_0[stackIndex] = 'UIObject.java:' + '659' , p_8.getStyleElement()), 'bpm-loading-overlay');
      $setWidget_1(p_8, $Image_1(($location_0[stackIndex] = 'LoadingOverlay.java:' + '47' , new Image_0), 'images/loading_lite.gif'));
      $location_0[stackIndex] = 'LoadingOverlay.java:' + '48' , $setPopupPosition(p_8, left + ~~(width / 2) - 15, top_0 + ~~(height / 2) - 15);
      $location_0[stackIndex] = 'LoadingOverlay.java:' + '49' , $show_2(p_8);
    }
  }
   else {
    if (p_8) {
      $location_0[stackIndex] = 'PopupPanel.java:' + '571' , $hide_0(p_8);
      $location_0[stackIndex] = 'LoadingOverlay.java:' + '58' , p_8 = null;
    }
  }
  $stackDepth_0 = stackIndex - 1;
}

var p_8 = null;
function $clinit_918(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_918;
  $location_0[stackIndex] = 'ModelCommands.java:' + '24' , $clinit_918 = nullMethod;
  $location_0[stackIndex] = 'ModelCommands.java:' + '27' , HAS_BECOME_STALE = $ModelCommands(($location_0[stackIndex] = 'ModelCommands.java:' + '1' , new ModelCommands), 'HAS_BECOME_STALE', 0);
  $location_0[stackIndex] = 'ModelCommands.java:' + '30' , HAS_BEEN_UPDATED = $ModelCommands(($location_0[stackIndex] = 'ModelCommands.java:' + '1' , new ModelCommands), 'HAS_BEEN_UPDATED', 1);
  $location_0[stackIndex] = 'ModelCommands.java:' + '24' , enum$map = {_HAS_BECOME_STALE:HAS_BECOME_STALE, _HAS_BEEN_UPDATED:HAS_BEEN_UPDATED};
  $stackDepth_0 = stackIndex - 1;
}

function $ModelCommands(this$static, enum$name, enum$ordinal){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ModelCommands;
  $location_0[stackIndex] = 'ModelCommands.java:' + '24' , $clinit_918();
  $location_0[stackIndex] = 'Enum.java:' + '76' , this$static.name_0 = enum$name;
  $location_0[stackIndex] = 'Enum.java:' + '77' , this$static.ordinal = enum$ordinal;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_620(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_620;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_common_ModelCommands_2_classLit;
}

function values_22(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = values_22;
  $location_0[stackIndex] = 'ModelCommands.java:' + '24' , $clinit_918();
  returnTemp = initValues(_3Lorg_jboss_bpm_console_client_common_ModelCommands_2_classLit, 705, 106, [HAS_BECOME_STALE, HAS_BEEN_UPDATED]);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function ModelCommands(){
}

_ = ModelCommands.prototype = new Enum;
_.getClass$ = getClass_620;
_.typeId$ = 402;
var HAS_BECOME_STALE, HAS_BEEN_UPDATED, enum$map = null;
function $clinit_919(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_919;
  $location_0[stackIndex] = 'ModelParts.java:' + '24' , $clinit_919 = nullMethod;
  $location_0[stackIndex] = 'ModelParts.java:' + '27' , CLASS = $ModelParts(($location_0[stackIndex] = 'ModelParts.java:' + '1' , new ModelParts), 'CLASS', 0);
  $stackDepth_0 = stackIndex - 1;
}

function $ModelParts(this$static, enum$name, enum$ordinal){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ModelParts;
  $location_0[stackIndex] = 'ModelParts.java:' + '24' , $clinit_919();
  $location_0[stackIndex] = 'Enum.java:' + '76' , this$static.name_0 = enum$name;
  $location_0[stackIndex] = 'Enum.java:' + '77' , this$static.ordinal = enum$ordinal;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_621(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_621;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_common_ModelParts_2_classLit;
}

function values_23(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = values_23;
  $location_0[stackIndex] = 'ModelParts.java:' + '24' , $clinit_919();
  returnTemp = initValues(_3Lorg_jboss_bpm_console_client_common_ModelParts_2_classLit, 706, 107, [CLASS]);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function ModelParts(){
}

_ = ModelParts.prototype = new Enum;
_.getClass$ = getClass_621;
_.typeId$ = 403;
var CLASS;
function $PagingPanel(this$static, callback){
  var clickHandler, clickHandler2, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $PagingPanel;
  $MosaicPanel_0(this$static, ($location_0[stackIndex] = 'PagingPanel.java:' + '55' , $BoxLayout_1(($location_0[stackIndex] = 'PagingPanel.java:' + '55' , new BoxLayout), ($location_0[stackIndex] = 'BoxLayout.java:' + '170' , $clinit_787() , HORIZONTAL))));
  $location_0[stackIndex] = 'Element.java:' + '688' , this$static.element['className'] = 'bpm-paging-panel';
  clickHandler = $PagingPanel$1(($location_0[stackIndex] = 'PagingPanel.java:' + '60' , new PagingPanel$1), this$static, callback);
  this$static.revBtn = ($location_0[stackIndex] = 'PagingPanel.java:' + '69' , $Button_1(($location_0[stackIndex] = 'PagingPanel.java:' + '69' , new Button), ($location_0[stackIndex] = 'ButtonHelper.java:' + '39' , createButtonLabel(($location_0[stackIndex] = 'PagingPanel.java:' + '71' , $clinit_640() , ($location_0[stackIndex] = 'CaptionImages_generatedBundle.java:' + '33' , $clinit_642()) , toolCollapseLeft_SINGLETON), '', ($location_0[stackIndex] = 'ButtonHelper.java:' + '34' , $clinit_868() , NO_TEXT))), clickHandler));
  $location_0[stackIndex] = 'PagingPanel.java:' + '76' , $add_25(this$static, this$static.revBtn);
  clickHandler2 = $PagingPanel$2(($location_0[stackIndex] = 'PagingPanel.java:' + '78' , new PagingPanel$2), this$static, callback);
  this$static.ffwBtn = ($location_0[stackIndex] = 'PagingPanel.java:' + '88' , $Button_1(($location_0[stackIndex] = 'PagingPanel.java:' + '88' , new Button), ($location_0[stackIndex] = 'ButtonHelper.java:' + '39' , createButtonLabel(toolCollapseRight_SINGLETON, '', NO_TEXT)), clickHandler2));
  $location_0[stackIndex] = 'PagingPanel.java:' + '95' , $add_25(this$static, this$static.ffwBtn);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $reset(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $reset;
  $location_0[stackIndex] = 'PagingPanel.java:' + '100' , this$static.leftBounds = true;
  $location_0[stackIndex] = 'PagingPanel.java:' + '101' , this$static.rightBounds = false;
  $location_0[stackIndex] = 'PagingPanel.java:' + '102' , this$static.page = 0;
  $stackDepth_0 = stackIndex - 1;
}

function $trim_0(this$static, tmp){
  var begin, end, i, o, o$iterator, size, trimmed, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $trim_0;
  trimmed = $ArrayList(($location_0[stackIndex] = 'PagingPanel.java:' + '107' , new ArrayList));
  size = ($location_0[stackIndex] = 'PagingPanel.java:' + '109' , tmp.size_1());
  if (12 >= size) {
    $location_0[stackIndex] = 'PagingPanel.java:' + '112' , trimmed = tmp;
    $location_0[stackIndex] = 'PagingPanel.java:' + '113' , this$static.rightBounds = true;
  }
   else {
    if (this$static.page <= 0) {
      $location_0[stackIndex] = 'PagingPanel.java:' + '121' , this$static.page = 0;
      $location_0[stackIndex] = 'PagingPanel.java:' + '122' , this$static.leftBounds = true;
    }
    $location_0[stackIndex] = 'PagingPanel.java:' + '125' , begin = 0;
    $location_0[stackIndex] = 'PagingPanel.java:' + '126' , end = 0;
    if (this$static.page * 12 >= size) {
      $location_0[stackIndex] = 'PagingPanel.java:' + '131' , begin = (this$static.page - 1) * 12;
      $location_0[stackIndex] = 'PagingPanel.java:' + '132' , this$static.rightBounds = true;
    }
     else 
      $location_0[stackIndex] = 'PagingPanel.java:' + '135' , begin = this$static.page * 12;
    if (begin + 12 >= size) {
      $location_0[stackIndex] = 'PagingPanel.java:' + '139' , end = size;
      $location_0[stackIndex] = 'PagingPanel.java:' + '140' , this$static.rightBounds = true;
    }
     else 
      $location_0[stackIndex] = 'PagingPanel.java:' + '143' , end = begin + 12;
    $location_0[stackIndex] = 'PagingPanel.java:' + '146' , i = 0;
    for (o$iterator = ($location_0[stackIndex] = 'PagingPanel.java:' + '147' , tmp.iterator_0()); $location_0[stackIndex] = 'PagingPanel.java:' + '147' , o$iterator.hasNext();) {
      o = o$iterator.next_0();
      i >= begin && i < end && ($location_0[stackIndex] = 'PagingPanel.java:' + '149' , trimmed.add_0(o));
      $location_0[stackIndex] = 'PagingPanel.java:' + '150' , ++i;
    }
  }
  $location_0[stackIndex] = 'Element.java:' + '638' , this$static.revBtn.element['disabled'] = !!this$static.leftBounds;
  this$static.ffwBtn.element['disabled'] = !!this$static.rightBounds;
  $stackDepth_0 = stackIndex - 1;
  return trimmed;
}

function getClass_622(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_622;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_common_PagingPanel_2_classLit;
}

function PagingPanel(){
}

_ = PagingPanel.prototype = new MosaicPanel;
_.getClass$ = getClass_622;
_.typeId$ = 404;
_.ffwBtn = null;
_.leftBounds = true;
_.page = 0;
_.revBtn = null;
_.rightBounds = false;
function $PagingPanel$1(this$static, this$0, val$callback){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $PagingPanel$1;
  $location_0[stackIndex] = 'PagingPanel.java:' + '60' , this$static.this$0 = this$0;
  this$static.val$callback = val$callback;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_623(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_623;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_common_PagingPanel$1_2_classLit;
}

function onClick_13(clickEvent){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClick_13;
  $location_0[stackIndex] = 'PagingPanel.java:' + '64' , --this.this$0.page;
  $location_0[stackIndex] = 'PagingPanel.java:' + '65' , this.this$0.rightBounds = false;
  $location_0[stackIndex] = 'PagingPanel.java:' + '66' , this.val$callback.rev();
  $stackDepth_0 = stackIndex - 1;
}

function PagingPanel$1(){
}

_ = PagingPanel$1.prototype = new Object_0;
_.getClass$ = getClass_623;
_.onClick = onClick_13;
_.typeId$ = 405;
_.this$0 = null;
_.val$callback = null;
function $PagingPanel$2(this$static, this$0, val$callback){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $PagingPanel$2;
  $location_0[stackIndex] = 'PagingPanel.java:' + '78' , this$static.this$0 = this$0;
  this$static.val$callback = val$callback;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_624(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_624;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_common_PagingPanel$2_2_classLit;
}

function onClick_14(clickEvent){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClick_14;
  $location_0[stackIndex] = 'PagingPanel.java:' + '82' , ++this.this$0.page;
  $location_0[stackIndex] = 'PagingPanel.java:' + '83' , this.this$0.leftBounds = false;
  $location_0[stackIndex] = 'PagingPanel.java:' + '84' , this.val$callback.ffw();
  $stackDepth_0 = stackIndex - 1;
}

function PagingPanel$2(){
}

_ = PagingPanel$2.prototype = new Object_0;
_.getClass$ = getClass_624;
_.onClick = onClick_14;
_.typeId$ = 406;
_.this$0 = null;
_.val$callback = null;
function $PropertyGrid(this$static, fieldDesc){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $PropertyGrid;
  $ScrollLayoutPanel_0(this$static, $FillLayout(($location_0[stackIndex] = 'PropertyGrid.java:' + '51' , new FillLayout)));
  this$static.grid = $Grid_0(($location_0[stackIndex] = 'PropertyGrid.java:' + '52' , new Grid), fieldDesc.length, 2);
  $location_0[stackIndex] = 'Element.java:' + '688' , ($location_0[stackIndex] = 'UIObject.java:' + '648' , this$static.grid.getStyleElement())['className'] = 'bpm-prop-grid';
  $location_0[stackIndex] = 'PropertyGrid.java:' + '54' , this$static.fieldNames = fieldDesc;
  $location_0[stackIndex] = 'PropertyGrid.java:' + '56' , $add_25(this$static, this$static.grid);
  $location_0[stackIndex] = 'PropertyGrid.java:' + '58' , $initReset(this$static);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $initReset(this$static){
  var i, label, style, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $initReset;
  for ($location_0[stackIndex] = 'PropertyGrid.java:' + '63' , i = 0; i < this$static.fieldNames.length; $location_0[stackIndex] = 'PropertyGrid.java:' + '63' , ++i) {
    label = $Label_0(($location_0[stackIndex] = 'PropertyGrid.java:' + '65' , new Label), this$static.fieldNames[i]);
    $location_0[stackIndex] = 'Element.java:' + '688' , label.element['className'] = 'bpm-prop-grid-label';
    $location_0[stackIndex] = 'PropertyGrid.java:' + '67' , $setWidget_2(this$static.grid, i, 0, label);
    $setWidget_2(this$static.grid, i, 1, $HTML_0(($location_0[stackIndex] = 'PropertyGrid.java:' + '68' , new HTML), ''));
    $location_0[stackIndex] = 'PropertyGrid.java:' + '70' , style = i % 2 == 0?'bpm-prop-grid-even':'bpm-prop-grid-odd';
    $location_0[stackIndex] = 'PropertyGrid.java:' + '71' , $setStyleName_0(this$static.grid.rowFormatter, i, style);
    $location_0[stackIndex] = 'Element.java:' + '688' , ($location_0[stackIndex] = 'HTMLTable.java:' + '465' , $ensureColumn(this$static.grid.columnFormatter, 0))['width'] = '20%';
    $location_0[stackIndex] = 'Element.java:' + '688' , ($location_0[stackIndex] = 'HTMLTable.java:' + '465' , $ensureColumn(this$static.grid.columnFormatter, 1))['width'] = '80%';
  }
  $stackDepth_0 = stackIndex - 1;
}

function $update_1(this$static, fieldValues){
  var i, label, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $update_1;
  if (fieldValues.length != this$static.fieldNames.length)
    throw $IllegalArgumentException_0(($location_0[stackIndex] = 'PropertyGrid.java:' + '85' , new IllegalArgumentException), "fieldValues.length doesn't match fieldName.length: " + this$static.fieldNames);
  for ($location_0[stackIndex] = 'PropertyGrid.java:' + '87' , i = 0; i < this$static.fieldNames.length; $location_0[stackIndex] = 'PropertyGrid.java:' + '87' , ++i) {
    label = $Label_0(($location_0[stackIndex] = 'PropertyGrid.java:' + '89' , new Label), this$static.fieldNames[i]);
    $location_0[stackIndex] = 'Element.java:' + '688' , label.element['className'] = 'bpm-prop-grid-label';
    $location_0[stackIndex] = 'PropertyGrid.java:' + '91' , $setWidget_2(this$static.grid, i, 0, label);
    $setWidget_2(this$static.grid, i, 1, $HTML_0(($location_0[stackIndex] = 'PropertyGrid.java:' + '92' , new HTML), fieldValues[i]));
  }
  $stackDepth_0 = stackIndex - 1;
}

function clear_10(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = clear_10;
  $location_0[stackIndex] = 'PropertyGrid.java:' + '79' , $initReset(this);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_625(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_625;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_common_PropertyGrid_2_classLit;
}

function PropertyGrid(){
}

_ = PropertyGrid.prototype = new ScrollLayoutPanel;
_.clear = clear_10;
_.getClass$ = getClass_625;
_.typeId$ = 407;
_.fieldNames = null;
_.grid = null;
function parseParticipant(jsonValue){
  var idRef, p, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = parseParticipant;
  $asString(($location_0[stackIndex] = 'DTOParser.java:' + '153' , $next_11($JSONWalk(($location_0[stackIndex] = 'JSONWalk.java:' + '48' , new JSONWalk), jsonValue), 'type')));
  idRef = $asString(($location_0[stackIndex] = 'DTOParser.java:' + '154' , $next_11($JSONWalk(($location_0[stackIndex] = 'JSONWalk.java:' + '48' , new JSONWalk), jsonValue), 'idRef')));
  p = $ParticipantRef(($location_0[stackIndex] = 'DTOParser.java:' + '155' , new ParticipantRef), idRef);
  $asBool(($location_0[stackIndex] = 'DTOParser.java:' + '157' , $next_11($JSONWalk(($location_0[stackIndex] = 'JSONWalk.java:' + '48' , new JSONWalk), jsonValue), 'isGroup')));
  $stackDepth_0 = stackIndex - 1;
  return p;
}

function parseTaskReference(item){
  var arr, arrGroups, arrUsers, assignee, createDate, due, dueDate, id, instanceIdWrapper, isBlocking, isSignalling, jsonValue, jsonWrapper, k, name_0, p, prio, processId, processIdWrapper, ref, t, url, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = parseTaskReference;
  $location_0[stackIndex] = 'ConsoleLog.java:' + '53' , $clinit_24();
  $location_0[stackIndex] = 'Log.java:' + '150' , $debug(impl, 'parse ' + item, null);
  id = $asLong(($location_0[stackIndex] = 'DTOParser.java:' + '62' , $next_11($JSONWalk(($location_0[stackIndex] = 'JSONWalk.java:' + '48' , new JSONWalk), item), 'id')));
  instanceIdWrapper = ($location_0[stackIndex] = 'DTOParser.java:' + '65' , $next_11($JSONWalk(($location_0[stackIndex] = 'JSONWalk.java:' + '48' , new JSONWalk), item), 'processInstanceId'));
  instanceIdWrapper?($location_0[stackIndex] = 'DTOParser.java:' + '66' , $asString(instanceIdWrapper)):'n/a';
  processIdWrapper = ($location_0[stackIndex] = 'DTOParser.java:' + '69' , $next_11($JSONWalk(($location_0[stackIndex] = 'JSONWalk.java:' + '48' , new JSONWalk), item), 'processId'));
  processId = processIdWrapper?($location_0[stackIndex] = 'DTOParser.java:' + '70' , $asString(processIdWrapper)):'n/a';
  name_0 = $asString(($location_0[stackIndex] = 'DTOParser.java:' + '72' , $next_11($JSONWalk(($location_0[stackIndex] = 'JSONWalk.java:' + '48' , new JSONWalk), item), 'name')));
  assignee = $asString(($location_0[stackIndex] = 'DTOParser.java:' + '73' , $next_11($JSONWalk(($location_0[stackIndex] = 'JSONWalk.java:' + '48' , new JSONWalk), item), 'assignee')));
  isBlocking = $asBool(($location_0[stackIndex] = 'DTOParser.java:' + '74' , $next_11($JSONWalk(($location_0[stackIndex] = 'JSONWalk.java:' + '48' , new JSONWalk), item), 'isBlocking')));
  isSignalling = $asBool(($location_0[stackIndex] = 'DTOParser.java:' + '75' , $next_11($JSONWalk(($location_0[stackIndex] = 'JSONWalk.java:' + '48' , new JSONWalk), item), 'isSignalling')));
  ref = $TaskRef(($location_0[stackIndex] = 'DTOParser.java:' + '77' , new TaskRef), id, processId, name_0, assignee, isSignalling);
  $location_0[stackIndex] = 'TaskRef.java:' + '135' , ref.isBlocking = isBlocking;
  jsonWrapper = ($location_0[stackIndex] = 'DTOParser.java:' + '86' , $next_11($JSONWalk(($location_0[stackIndex] = 'JSONWalk.java:' + '48' , new JSONWalk), item), 'url'));
  if (jsonWrapper) {
    url = ($location_0[stackIndex] = 'DTOParser.java:' + '89' , $asString(jsonWrapper));
    $location_0[stackIndex] = 'TaskRef.java:' + '205' , ref.url = url;
  }
   else {
    ref.url = '';
  }
  arrUsers = $asArray(($location_0[stackIndex] = 'DTOParser.java:' + '98' , $next_11($JSONWalk(($location_0[stackIndex] = 'JSONWalk.java:' + '48' , new JSONWalk), item), 'participantUsers')));
  for ($location_0[stackIndex] = 'DTOParser.java:' + '99' , k = 0; k < arrUsers.jsArray.length; $location_0[stackIndex] = 'DTOParser.java:' + '99' , ++k) {
    jsonValue = ($location_0[stackIndex] = 'DTOParser.java:' + '101' , $get_2(arrUsers, k));
    p = ($location_0[stackIndex] = 'DTOParser.java:' + '102' , parseParticipant(jsonValue));
    $location_0[stackIndex] = 'DTOParser.java:' + '103' , $add_7(ref.participantUsers, p);
  }
  arrGroups = $asArray(($location_0[stackIndex] = 'DTOParser.java:' + '106' , $next_11($JSONWalk(($location_0[stackIndex] = 'JSONWalk.java:' + '48' , new JSONWalk), item), 'participantGroups')));
  for ($location_0[stackIndex] = 'DTOParser.java:' + '107' , k = 0; k < arrGroups.jsArray.length; $location_0[stackIndex] = 'DTOParser.java:' + '107' , ++k) {
    jsonValue = ($location_0[stackIndex] = 'DTOParser.java:' + '109' , $get_2(arrGroups, k));
    p = ($location_0[stackIndex] = 'DTOParser.java:' + '110' , parseParticipant(jsonValue));
    $location_0[stackIndex] = 'DTOParser.java:' + '111' , $add_7(ref.participantGroups, p);
  }
  if (isSignalling) {
    arr = $asArray(($location_0[stackIndex] = 'DTOParser.java:' + '116' , $next_11($JSONWalk(($location_0[stackIndex] = 'JSONWalk.java:' + '48' , new JSONWalk), item), 'outcomes')));
    for ($location_0[stackIndex] = 'DTOParser.java:' + '117' , k = 0; k < arr.jsArray.length; $location_0[stackIndex] = 'DTOParser.java:' + '117' , ++k) {
      jsonValue = ($location_0[stackIndex] = 'DTOParser.java:' + '119' , $get_2(arr, k));
      if ($equals_4(($location_0[stackIndex] = 'DTOParser.java:' + '120' , jsonValue.toString$()), 'null')) {
        $location_0[stackIndex] = 'Log.java:' + '651' , $warn(impl, 'FIXME JBPM-1828: Null value on outcomes:' + ($location_0[stackIndex] = 'DTOParser.java:' + '122' , $toString_5(arr)), null);
        continue;
      }
      t = ($location_0[stackIndex] = 'DTOParser.java:' + '125' , jsonValue.isString());
      $location_0[stackIndex] = 'DTOParser.java:' + '126' , $add_7(ref.outcomes, t.value_0);
    }
  }
  prio = $asInt(($location_0[stackIndex] = 'DTOParser.java:' + '131' , $next_11($JSONWalk(($location_0[stackIndex] = 'JSONWalk.java:' + '48' , new JSONWalk), item), 'priority')));
  $location_0[stackIndex] = 'TaskRef.java:' + '225' , ref.priority = prio;
  dueDate = ($location_0[stackIndex] = 'DTOParser.java:' + '134' , $next_11($JSONWalk(($location_0[stackIndex] = 'JSONWalk.java:' + '48' , new JSONWalk), item), 'dueDate'));
  if (dueDate) {
    due = ($location_0[stackIndex] = 'DTOParser.java:' + '137' , $asDate(dueDate));
    $location_0[stackIndex] = 'TaskRef.java:' + '215' , ref.dueDate = due;
  }
  createDate = ($location_0[stackIndex] = 'DTOParser.java:' + '141' , $next_11($JSONWalk(($location_0[stackIndex] = 'JSONWalk.java:' + '48' , new JSONWalk), item), 'createDate'));
  if (createDate) {
    due = ($location_0[stackIndex] = 'DTOParser.java:' + '144' , $asDate(createDate));
    $location_0[stackIndex] = 'TaskRef.java:' + '215' , ref.dueDate = due;
  }
  $stackDepth_0 = stackIndex - 1;
  return ref;
}

function parseTaskReferenceList(json){
  var array, i, item, ref, results, root, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = parseTaskReferenceList;
  $location_0[stackIndex] = 'ConsoleLog.java:' + '53' , $clinit_24();
  $location_0[stackIndex] = 'Log.java:' + '150' , $debug(impl, 'parse ' + json, null);
  results = $ArrayList(($location_0[stackIndex] = 'DTOParser.java:' + '43' , new ArrayList));
  root = ($location_0[stackIndex] = 'DTOParser.java:' + '45' , parse(json));
  array = $asArray(($location_0[stackIndex] = 'DTOParser.java:' + '46' , $next_11($JSONWalk(($location_0[stackIndex] = 'JSONWalk.java:' + '48' , new JSONWalk), root), 'tasks')));
  for ($location_0[stackIndex] = 'DTOParser.java:' + '48' , i = 0; i < array.jsArray.length; $location_0[stackIndex] = 'DTOParser.java:' + '48' , ++i) {
    item = ($location_0[stackIndex] = 'DTOParser.java:' + '50' , $get_2(array, i)).isObject();
    ref = ($location_0[stackIndex] = 'DTOParser.java:' + '51' , parseTaskReference(item));
    setCheck(results.array, ($location_0[stackIndex] = 'ArrayList.java:' + '95' , results.size_0++), ref);
  }
  $stackDepth_0 = stackIndex - 1;
  return results;
}

function parseProcessDefinition(rootModel){
  var def, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = parseProcessDefinition;
  def = ($location_0[stackIndex] = 'JSOParser.java:' + '52' , new ProcessDefinitionRef);
  $location_0[stackIndex] = 'ProcessDefinitionRef.java:' + '65' , def.id_0 = '' + ($location_0[stackIndex] = 'JSOModel.java:' + '96' , rootModel['id']);
  $location_0[stackIndex] = 'ProcessDefinitionRef.java:' + '76' , def.name_0 = '' + ($location_0[stackIndex] = 'JSOModel.java:' + '96' , rootModel['name']);
  $location_0[stackIndex] = 'ProcessDefinitionRef.java:' + '86' , def.version = ($location_0[stackIndex] = 'Long.java:' + '265' , $Long(($location_0[stackIndex] = 'Long.java:' + '265' , new Long), ($location_0[stackIndex] = 'Long.java:' + '104' , parseLong('' + ($location_0[stackIndex] = 'JSOModel.java:' + '96' , rootModel['version']), 10)))).value_0;
  $location_0[stackIndex] = 'ProcessDefinitionRef.java:' + '101' , def.key = '' + ($location_0[stackIndex] = 'JSOModel.java:' + '96' , rootModel['key']);
  $location_0[stackIndex] = 'ProcessDefinitionRef.java:' + '141' , def.suspended = ($location_0[stackIndex] = 'JSOModel.java:' + '112' , $clinit_507() , ($location_0[stackIndex] = 'Boolean.java:' + '35' , $equalsIgnoreCase('true', '' + ($location_0[stackIndex] = 'JSOModel.java:' + '96' , rootModel['suspended']))));
  $location_0[stackIndex] = 'ProcessDefinitionRef.java:' + '171' , def.formUrl = ($location_0[stackIndex] = 'JSOModel.java:' + '100' , rootModel['formUrl'])?'' + rootModel['formUrl']:null;
  $location_0[stackIndex] = 'ProcessDefinitionRef.java:' + '186' , def.diagramUrl = ($location_0[stackIndex] = 'JSOModel.java:' + '100' , rootModel['diagramUrl'])?'' + rootModel['diagramUrl']:null;
  $stackDepth_0 = stackIndex - 1;
  return def;
}

function parseProcessDefinitions(json){
  var def, definitions, i, results, rootModel, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = parseProcessDefinitions;
  results = $ArrayList(($location_0[stackIndex] = 'JSOParser.java:' + '37' , new ArrayList));
  $location_0[stackIndex] = 'JSOParser.java:' + '38' , rootModel = ($location_0[stackIndex] = 'JSOModel.java:' + '61' , eval('(' + json + ')'));
  $location_0[stackIndex] = 'JSOParser.java:' + '40' , definitions = ($location_0[stackIndex] = 'JSOModel.java:' + '120' , rootModel['definitions'])?rootModel['definitions']:new Array;
  for ($location_0[stackIndex] = 'JSOParser.java:' + '41' , i = 0; i < definitions.length; $location_0[stackIndex] = 'JSOParser.java:' + '41' , ++i) {
    $location_0[stackIndex] = 'JSOParser.java:' + '43' , def = ($location_0[stackIndex] = 'JsArray.java:' + '49' , definitions[i]);
    $add_7(results, ($location_0[stackIndex] = 'JSOParser.java:' + '44' , parseProcessDefinition(def)));
  }
  $stackDepth_0 = stackIndex - 1;
  return results;
}

function $ParticipantRef(this$static, idRef){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ParticipantRef;
  $location_0[stackIndex] = 'ParticipantRef.java:' + '40' , this$static.idRef = idRef;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_631(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_631;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_model_ParticipantRef_2_classLit;
}

function ParticipantRef(){
}

_ = ParticipantRef.prototype = new Object_0;
_.getClass$ = getClass_631;
_.typeId$ = 411;
_.idRef = null;
function equals_34(o){
  var that, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = equals_34;
  if (this === (o == null?null:o)) {
    $stackDepth_0 = stackIndex - 1;
    return true;
  }
  if (o == null || Lorg_jboss_bpm_console_client_model_ProcessDefinitionRef_2_classLit != (o.typeMarker$ == nullMethod || o.typeId$ == 2?($location_0[stackIndex] = 'JavaScriptObject.java:' + '28' , o.getClass$()):Lcom_google_gwt_core_client_JavaScriptObject_2_classLit)) {
    $stackDepth_0 = stackIndex - 1;
    return false;
  }
  that = ($location_0[stackIndex] = 'ProcessDefinitionRef.java:' + '149' , dynamicCast(o, 230));
  if ($location_0[stackIndex] = 'ProcessDefinitionRef.java:' + '151' , neq(this.version, that.version)) {
    $stackDepth_0 = stackIndex - 1;
    return false;
  }
  if (this.id_0 != null?!($location_0[stackIndex] = 'ProcessDefinitionRef.java:' + '152' , $equals_4(this.id_0, that.id_0)):that.id_0 != null) {
    $stackDepth_0 = stackIndex - 1;
    return false;
  }
  if (this.key != null?!($location_0[stackIndex] = 'ProcessDefinitionRef.java:' + '153' , $equals_4(this.key, that.key)):that.key != null) {
    $stackDepth_0 = stackIndex - 1;
    return false;
  }
  if (this.name_0 != null?!($location_0[stackIndex] = 'ProcessDefinitionRef.java:' + '154' , $equals_4(this.name_0, that.name_0)):that.name_0 != null) {
    $stackDepth_0 = stackIndex - 1;
    return false;
  }
  $stackDepth_0 = stackIndex - 1;
  return true;
}

function getClass_633(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_633;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_model_ProcessDefinitionRef_2_classLit;
}

function hashCode_35(){
  var result, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = hashCode_35;
  $location_0[stackIndex] = 'ProcessDefinitionRef.java:' + '162' , result = this.id_0 != null?($location_0[stackIndex] = 'String.java:' + '485' , getHashCode_0(this.id_0)):0;
  $location_0[stackIndex] = 'ProcessDefinitionRef.java:' + '163' , result = 31 * result + (this.name_0 != null?($location_0[stackIndex] = 'String.java:' + '485' , getHashCode_0(this.name_0)):0);
  $location_0[stackIndex] = 'ProcessDefinitionRef.java:' + '164' , result = 31 * result + ($location_0[stackIndex] = 'LongLib.java:' + '443' , lowBits_0(xor(this.version, ($location_0[stackIndex] = 'ProcessDefinitionRef.java:' + '164' , shru(this.version, 32)))));
  $location_0[stackIndex] = 'ProcessDefinitionRef.java:' + '165' , result = 31 * result + (this.key != null?($location_0[stackIndex] = 'String.java:' + '485' , getHashCode_0(this.key)):0);
  $stackDepth_0 = stackIndex - 1;
  return result;
}

function toString_56(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = toString_56;
  returnTemp = 'ProcessDefinitionRef{id=' + this.id_0 + ', name=' + this.name_0 + ', version=' + ($location_0[stackIndex] = 'ProcessDefinitionRef.java:' + '91' , toString_18(this.version)) + '}';
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function ProcessDefinitionRef(){
}

_ = ProcessDefinitionRef.prototype = new Object_0;
_.equals$ = equals_34;
_.getClass$ = getClass_633;
_.hashCode$ = hashCode_35;
_.toString$ = toString_56;
_.typeId$ = 413;
_.diagramUrl = null;
_.formUrl = null;
_.id_0 = null;
_.key = null;
_.name_0 = null;
_.suspended = false;
_.version = P0_longLit;
function $TaskRef(this$static, taskId, processId, taskName, assignee, blocking){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $TaskRef;
  this$static.outcomes = $ArrayList(($location_0[stackIndex] = 'TaskRef.java:' + '45' , new ArrayList));
  this$static.participantUsers = $ArrayList(($location_0[stackIndex] = 'TaskRef.java:' + '50' , new ArrayList));
  this$static.participantGroups = $ArrayList(($location_0[stackIndex] = 'TaskRef.java:' + '51' , new ArrayList));
  $location_0[stackIndex] = 'TaskRef.java:' + '73' , this$static.id_0 = taskId;
  $location_0[stackIndex] = 'TaskRef.java:' + '75' , this$static.processId = processId;
  $location_0[stackIndex] = 'TaskRef.java:' + '76' , this$static.name_0 = taskName;
  $location_0[stackIndex] = 'TaskRef.java:' + '77' , $setAssignee(this$static, assignee);
  $location_0[stackIndex] = 'TaskRef.java:' + '78' , this$static.isBlocking = blocking;
  $location_0[stackIndex] = 'TaskRef.java:' + '81' , $initOrUpdateState(this$static);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $initOrUpdateState(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $initOrUpdateState;
  this$static.assignee == null || ($location_0[stackIndex] = 'TaskRef.java:' + '170' , $equals_4(this$static.assignee, ''))?($location_0[stackIndex] = 'TaskRef.java:' + '172' , this$static.currentState = ($location_0[stackIndex] = 'TaskRef.java:' + '47' , $clinit_945() , OPEN)):($location_0[stackIndex] = 'TaskRef.java:' + '176' , this$static.currentState = ($location_0[stackIndex] = 'TaskRef.java:' + '47' , $clinit_945() , ASSIGNED));
  $stackDepth_0 = stackIndex - 1;
}

function $setAssignee(this$static, assignee){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setAssignee;
  null == assignee && ($location_0[stackIndex] = 'TaskRef.java:' + '122' , assignee = '');
  $location_0[stackIndex] = 'TaskRef.java:' + '124' , this$static.assignee = assignee;
  $location_0[stackIndex] = 'TaskRef.java:' + '125' , $initOrUpdateState(this$static);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_641(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_641;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_model_TaskRef_2_classLit;
}

function toString_57(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = toString_57;
  returnTemp = 'TaskRef{id:' + ($location_0[stackIndex] = 'TaskRef.java:' + '250' , toString_18(this.id_0)) + ',state:' + this.currentState + '}';
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function TaskRef(){
}

_ = TaskRef.prototype = new Object_0;
_.getClass$ = getClass_641;
_.toString$ = toString_57;
_.typeId$ = 420;
_.assignee = '';
_.currentState = null;
_.dueDate = null;
_.id_0 = P0_longLit;
_.isBlocking = false;
_.name_0 = null;
_.priority = 0;
_.processId = null;
_.url = null;
function $clinit_945(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_945;
  $location_0[stackIndex] = 'TaskRef.java:' + '47' , $clinit_945 = nullMethod;
  $location_0[stackIndex] = 'TaskRef.java:' + '47' , OPEN = $TaskRef$STATE(($location_0[stackIndex] = 'TaskRef.java:' + '1' , new TaskRef$STATE), 'OPEN', 0);
  $location_0[stackIndex] = 'TaskRef.java:' + '47' , ASSIGNED = $TaskRef$STATE(($location_0[stackIndex] = 'TaskRef.java:' + '1' , new TaskRef$STATE), 'ASSIGNED', 1);
  $location_0[stackIndex] = 'TaskRef.java:' + '47' , CLOSED = $TaskRef$STATE(($location_0[stackIndex] = 'TaskRef.java:' + '1' , new TaskRef$STATE), 'CLOSED', 2);
  $stackDepth_0 = stackIndex - 1;
}

function $TaskRef$STATE(this$static, enum$name, enum$ordinal){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $TaskRef$STATE;
  $location_0[stackIndex] = 'TaskRef.java:' + '47' , $clinit_945();
  $location_0[stackIndex] = 'Enum.java:' + '76' , this$static.name_0 = enum$name;
  $location_0[stackIndex] = 'Enum.java:' + '77' , this$static.ordinal = enum$ordinal;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_642(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_642;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_model_TaskRef$STATE_2_classLit;
}

function values_26(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = values_26;
  $location_0[stackIndex] = 'TaskRef.java:' + '47' , $clinit_945();
  returnTemp = initValues(_3Lorg_jboss_bpm_console_client_model_TaskRef$STATE_2_classLit, 709, 110, [OPEN, ASSIGNED, CLOSED]);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function TaskRef$STATE(){
}

_ = TaskRef$STATE.prototype = new Enum;
_.getClass$ = getClass_642;
_.typeId$ = 421;
var ASSIGNED, CLOSED, OPEN;
function DefinitionListView(){
}

_ = DefinitionListView.prototype = new Object_0;
_.typeId$ = 425;
_.controller = null;
_.currentFilter = 10;
_.definitionList = null;
_.definitions = null;
_.isInitialized = false;
_.listBox = null;
_.pagingPanel = null;
_.panel = null;
function InstanceListView(){
}

_ = InstanceListView.prototype = new Object_0;
_.typeId$ = 442;
_.appContext = null;
_.cachedInstances = null;
_.controller = null;
_.currentDefinition = null;
_.deleteBtn = null;
_.eventData = null;
_.iframeWindow = null;
_.instanceList = null;
_.isInitialized = false;
_.isRiftsawInstance = false;
_.listBox = null;
_.listBoxTokens = null;
_.panel = null;
_.refreshBtn = null;
_.signalBtn = null;
_.signalRef = null;
_.signalWindowPanel = null;
_.startBtn = null;
_.terminateBtn = null;
_.tokensToSignal = null;
function MergedProcessView(){
}

_ = MergedProcessView.prototype = new Object_0;
_.typeId$ = 455;
_.definitionView = null;
_.instanceView = null;
_.panel = null;
function ReportView(){
}

_ = ReportView.prototype = new Object_0;
_.typeId$ = 478;
_.controller = null;
_.coverpanel = null;
_.isInitialized = false;
_.panel = null;
function $getSelection_0(this$static){
  var selection, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $getSelection_0;
  $location_0[stackIndex] = 'AbstractTaskList.java:' + '65' , selection = null;
  this$static.isInitialized && ($location_0[stackIndex] = 'AbstractTaskList.java:' + '66' , $getSelectedIndex_0(this$static.listBox)) != -1 && (selection = dynamicCast($getItem_0(this$static.listBox, ($location_0[stackIndex] = 'AbstractTaskList.java:' + '68' , $getSelectedIndex_0(this$static.listBox))), 251));
  $stackDepth_0 = stackIndex - 1;
  return selection;
}

function getClass_720(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_720;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_AbstractTaskList_2_classLit;
}

function setController_9(controller){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = setController_9;
  $location_0[stackIndex] = 'AbstractTaskList.java:' + '60' , this.controller_0 = controller;
  $stackDepth_0 = stackIndex - 1;
}

function AbstractTaskList(){
}

_ = AbstractTaskList.prototype = new Object_0;
_.getClass$ = getClass_720;
_.setController = setController_9;
_.typeId$ = 482;
_.cachedTasks = null;
_.controller_0 = null;
_.isInitialized = false;
_.listBox = null;
_.taskList = null;
function $clinit_1025(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1025;
  $location_0[stackIndex] = 'AssignTaskAction.java:' + '35' , $clinit_1025 = nullMethod;
  $location_0[stackIndex] = 'AssignTaskAction.java:' + '38' , ID_25 = Lorg_jboss_bpm_console_client_task_AssignTaskAction_2_classLit.typeName;
  $stackDepth_0 = stackIndex - 1;
}

function $AssignTaskAction(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $AssignTaskAction;
  $location_0[stackIndex] = 'AssignTaskAction.java:' + '35' , $clinit_1025();
  dynamicCast(($location_0[stackIndex] = 'AbstractRESTAction.java:' + '44' , get_16(Lorg_jboss_bpm_console_client_ApplicationContext_2_classLit)), 224);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_721(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_721;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_AssignTaskAction_2_classLit;
}

function getId_13(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getId_13;
  $stackDepth_0 = stackIndex - 1;
  return ID_25;
}

function getRequestMethod_13(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getRequestMethod_13;
  returnTemp = ($location_0[stackIndex] = 'RequestBuilder.java:' + '70' , $clinit_208() , POST);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getUrl_15(event_0){
  var payload, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getUrl_15;
  payload = ($location_0[stackIndex] = 'AssignTaskAction.java:' + '47' , dynamicCast(event_0, 252));
  returnTemp = $getTaskAssignURL(($location_0[stackIndex] = 'AssignTaskAction.java:' + '48' , getInstance_2() , payload.task.id_0), payload.idRef);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function handleSuccessfulResponse_13(controller, event_0, response){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = handleSuccessfulResponse_13;
  $location_0[stackIndex] = 'AssignTaskAction.java:' + '60' , $handleEvent(controller, ($location_0[stackIndex] = 'AssignTaskAction.java:' + '61' , $Event(($location_0[stackIndex] = 'AssignTaskAction.java:' + '61' , new Event_0), ($location_0[stackIndex] = 'ReloadAllTaskListsAction.java:' + '38' , $clinit_1057() , ID_32), null)));
  $stackDepth_0 = stackIndex - 1;
}

function AssignTaskAction(){
}

_ = AssignTaskAction.prototype = new AbstractRESTAction;
_.getClass$ = getClass_721;
_.getId = getId_13;
_.getRequestMethod = getRequestMethod_13;
_.getUrl_0 = getUrl_15;
_.handleSuccessfulResponse = handleSuccessfulResponse_13;
_.typeId$ = 483;
var ID_25;
function $clinit_1028(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1028;
  $location_0[stackIndex] = 'AssignedTasksView.java:' + '57' , $clinit_1028 = nullMethod;
  $location_0[stackIndex] = 'AssignedTasksView.java:' + '60' , ID_26 = Lorg_jboss_bpm_console_client_task_AssignedTasksView_2_classLit.typeName;
  $stackDepth_0 = stackIndex - 1;
}

function $initialize_3(this$static){
  var t, toolBar, toolBox, viewBtn, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $initialize_3;
  if (!this$static.isInitialized) {
    $location_0[stackIndex] = 'AssignedTasksView.java:' + '103' , registerCommonActions(this$static.controller_0);
    this$static.taskList = $MosaicPanel_0(($location_0[stackIndex] = 'AssignedTasksView.java:' + '105' , new MosaicPanel), ($location_0[stackIndex] = 'AssignedTasksView.java:' + '105' , $BoxLayout_1(new BoxLayout, ($location_0[stackIndex] = 'BoxLayout.java:' + '170' , $clinit_787() , VERTICAL))));
    $location_0[stackIndex] = 'LayoutPanel.java:' + '289' , setStyleAttribute_0(this$static.taskList.element, 'padding', '0px');
    $location_0[stackIndex] = 'LayoutPanel.java:' + '297' , this$static.taskList.widgetSpacing = 0;
    $location_0[stackIndex] = 'AssignedTasksView.java:' + '109' , this$static.listBox = ($location_0[stackIndex] = 'AssignedTasksView.java:' + '110' , $ListBox_1(($location_0[stackIndex] = 'AssignedTasksView.java:' + '110' , new ListBox_0), ($location_0[stackIndex] = 'AssignedTasksView.java:' + '111' , initValues(_3Ljava_lang_String_2_classLit, 684, 1, ['Priority', 'Process', 'Task Name', 'Due Date']))));
    $location_0[stackIndex] = 'ListBox.java:' + '716' , this$static.listBox.cellRenderer = $AssignedTasksView$1(($location_0[stackIndex] = 'AssignedTasksView.java:' + '117' , new AssignedTasksView$1), this$static);
    $location_0[stackIndex] = 'SelectionGrid.java:' + '248' , $addHandler_1(this$static.listBox.scrollTable.dataTable, $AssignedTasksView$2(($location_0[stackIndex] = 'AssignedTasksView.java:' + '141' , new AssignedTasksView$2), this$static), (!TYPE_24 && (TYPE_24 = $GwtEvent$Type(($location_0[stackIndex] = 'RowSelectionEvent.java:' + '81' , new GwtEvent$Type))) , TYPE_24));
    toolBox = $MosaicPanel(($location_0[stackIndex] = 'AssignedTasksView.java:' + '163' , new MosaicPanel));
    $location_0[stackIndex] = 'LayoutPanel.java:' + '289' , setStyleAttribute_0(toolBox.element, 'padding', '0px');
    $location_0[stackIndex] = 'LayoutPanel.java:' + '297' , toolBox.widgetSpacing = 5;
    toolBar = $ToolBar(($location_0[stackIndex] = 'AssignedTasksView.java:' + '168' , new ToolBar));
    $location_0[stackIndex] = 'AssignedTasksView.java:' + '169' , $add_28(toolBar, $Button_1(($location_0[stackIndex] = 'AssignedTasksView.java:' + '170' , new Button), 'Refresh', $AssignedTasksView$3(new AssignedTasksView$3, this$static)));
    viewBtn = $Button_1(($location_0[stackIndex] = 'AssignedTasksView.java:' + '181' , new Button), 'View', $AssignedTasksView$4(new AssignedTasksView$4, this$static));
    $location_0[stackIndex] = 'AssignedTasksView.java:' + '220' , $add_28(toolBar, viewBtn);
    $location_0[stackIndex] = 'AssignedTasksView.java:' + '222' , $add_28(toolBar, $Button_1(($location_0[stackIndex] = 'AssignedTasksView.java:' + '223' , new Button), 'Release', $AssignedTasksView$5(new AssignedTasksView$5, this$static)));
    this$static.skipBtn = $Button_1(($location_0[stackIndex] = 'AssignedTasksView.java:' + '247' , new Button), 'Skip', $AssignedTasksView$6(new AssignedTasksView$6, this$static));
    $location_0[stackIndex] = 'Element.java:' + '638' , this$static.skipBtn.element['disabled'] = !false;
    $location_0[stackIndex] = 'AssignedTasksView.java:' + '269' , $add_28(toolBar, this$static.skipBtn);
    $add_26(toolBox, toolBar, ($location_0[stackIndex] = 'AssignedTasksView.java:' + '272' , $BoxLayoutData_4(($location_0[stackIndex] = 'AssignedTasksView.java:' + '272' , new BoxLayoutData), ($location_0[stackIndex] = 'BoxLayoutData.java:' + '30' , $clinit_789() , HORIZONTAL_0))));
    $add_26(this$static.taskList, toolBox, $BoxLayoutData_4(($location_0[stackIndex] = 'AssignedTasksView.java:' + '274' , new BoxLayoutData), HORIZONTAL_0));
    $add_26(this$static.taskList, this$static.listBox, $BoxLayoutData_4(($location_0[stackIndex] = 'AssignedTasksView.java:' + '275' , new BoxLayoutData), BOTH));
    this$static.pagingPanel = ($location_0[stackIndex] = 'AssignedTasksView.java:' + '277' , $PagingPanel(($location_0[stackIndex] = 'AssignedTasksView.java:' + '277' , new PagingPanel), $AssignedTasksView$7(($location_0[stackIndex] = 'AssignedTasksView.java:' + '278' , new AssignedTasksView$7), this$static)));
    $add_26(this$static.taskList, this$static.pagingPanel, $BoxLayoutData_4(($location_0[stackIndex] = 'AssignedTasksView.java:' + '292' , new BoxLayoutData), HORIZONTAL_0));
    this$static.detailsView = $TaskDetailView(($location_0[stackIndex] = 'AssignedTasksView.java:' + '294' , new TaskDetailView), false);
    $location_0[stackIndex] = 'AssignedTasksView.java:' + '295' , $addView(this$static.controller_0, 'AssignedDetailView', this$static.detailsView);
    $location_0[stackIndex] = 'AssignedTasksView.java:' + '296' , $initialize_5(this$static.detailsView);
    $location_0[stackIndex] = 'AssignedTasksView.java:' + '300' , this$static.hasDispatcherPlugin = ($location_0[stackIndex] = 'AssignedTasksView.java:' + '301' , has('org.jboss.bpm.console.server.plugin.FormDispatcherPlugin'));
    $location_0[stackIndex] = 'Element.java:' + '638' , viewBtn.element['disabled'] = !this$static.hasDispatcherPlugin;
    $location_0[stackIndex] = 'AssignedTasksView.java:' + '306' , $clinit_1082();
    $location_0[stackIndex] = 'AssignedTasksView.java:' + '306' , $subscribe(bus_0, 'appContext.model.listener', $AssignedTasksView$8(($location_0[stackIndex] = 'AssignedTasksView.java:' + '307' , new AssignedTasksView$8), this$static));
    t = $AssignedTasksView$9(($location_0[stackIndex] = 'AssignedTasksView.java:' + '321' , new AssignedTasksView$9), this$static);
    $location_0[stackIndex] = 'AssignedTasksView.java:' + '331' , $schedule(t, 500);
    $location_0[stackIndex] = 'AssignedTasksView.java:' + '333' , this$static.isInitialized = true;
  }
  $stackDepth_0 = stackIndex - 1;
}

function $renderUpdate_0(this$static){
  var model, task, task$iterator, trimmed, model_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $renderUpdate_0;
  $location_0[stackIndex] = 'AssignedTasksView.java:' + '375' , $initialize_3(this$static);
  $location_0[stackIndex] = 'AssignedTasksView.java:' + '347' , model_0 = ($location_0[stackIndex] = 'AssignedTasksView.java:' + '348' , $getModel(this$static.listBox));
  $location_0[stackIndex] = 'DefaultListModel.java:' + '61' , $clear_5(model_0.list);
  $location_0[stackIndex] = 'AssignedTasksView.java:' + '353' , $handleEvent(this$static.controller_0, $Event(($location_0[stackIndex] = 'AssignedTasksView.java:' + '354' , new Event_0), ($location_0[stackIndex] = 'UpdateDetailsAction.java:' + '35' , $clinit_1061() , ID_34), $DetailViewEvent(($location_0[stackIndex] = 'AssignedTasksView.java:' + '354' , new DetailViewEvent), 'AssignedDetailView', null)));
  $location_0[stackIndex] = 'AssignedTasksView.java:' + '379' , model = ($location_0[stackIndex] = 'AssignedTasksView.java:' + '380' , $getModel(this$static.listBox));
  trimmed = ($location_0[stackIndex] = 'AssignedTasksView.java:' + '382' , $trim_0(this$static.pagingPanel, this$static.cachedTasks));
  for (task$iterator = ($location_0[stackIndex] = 'AssignedTasksView.java:' + '383' , trimmed.iterator_0()); $location_0[stackIndex] = 'AssignedTasksView.java:' + '383' , task$iterator.hasNext();) {
    task = dynamicCast(task$iterator.next_0(), 251);
    ($location_0[stackIndex] = 'TaskRef.java:' + '47' , $clinit_945() , ASSIGNED) == task.currentState && ($location_0[stackIndex] = 'DefaultListModel.java:' + '45' , $add_6(model.list, task));
  }
  $stackDepth_0 = stackIndex - 1;
}

function $update_8(this$static, data){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $update_8;
  dynamicCast(($location_0[stackIndex] = 'AssignedTasksView.java:' + '360' , data[0]), 1);
  this$static.cachedTasks = dynamicCast(($location_0[stackIndex] = 'AssignedTasksView.java:' + '361' , data[1]), 170);
  $location_0[stackIndex] = 'AssignedTasksView.java:' + '362' , $reset(this$static.pagingPanel);
  $location_0[stackIndex] = 'AssignedTasksView.java:' + '363' , $renderUpdate_0(this$static);
  $stackDepth_0 = stackIndex - 1;
}

function AssignedTasksView(){
}

_ = AssignedTasksView.prototype = new AbstractTaskList;
_.typeId$ = 485;
_.detailsView = null;
_.hasDispatcherPlugin = false;
_.iframeWindow = null;
_.pagingPanel = null;
_.panel = null;
_.skipBtn = null;
var ID_26;
function $AssignedTasksView$1(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $AssignedTasksView$1;
  $location_0[stackIndex] = 'AssignedTasksView.java:' + '117' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $renderCell_4(this$static, listBox, row, column, item){
  var d, trElem, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $renderCell_4;
  switch (column) {
    case 0:
      $location_0[stackIndex] = 'AssignedTasksView.java:' + '122' , $setText_5(listBox, row, column, '' + item.priority);
      break;
    case 1:
      $location_0[stackIndex] = 'AssignedTasksView.java:' + '125' , $setText_5(listBox, row, column, item.processId);
      break;
    case 2:
      $location_0[stackIndex] = 'AssignedTasksView.java:' + '128' , $setText_5(listBox, row, column, item.name_0);
      break;
    case 3:
      d = item.dueDate?($location_0[stackIndex] = 'AssignedTasksView.java:' + '131' , $format_2(this$static.this$0.dateFormat, item.dueDate)):'';
      $location_0[stackIndex] = 'ListBox.java:' + '913' , $setText_6(listBox.dataTable, (trElem = dynamicCastJso(($location_0[stackIndex] = 'ListBox.java:' + '925' , $get_5(listBox.rowsInModelOrder, row))) , trElem.sectionRowIndex - 1), column, d);
      break;
    default:throw $RuntimeException(($location_0[stackIndex] = 'AssignedTasksView.java:' + '135' , new RuntimeException), 'Unexpected column size');
  }
  $stackDepth_0 = stackIndex - 1;
}

function getClass_725(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_725;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_AssignedTasksView$1_2_classLit;
}

function renderCell_5(p0, p1, p2, p3){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = renderCell_5;
  $renderCell_4(this, p0, p1, p2, ($location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , dynamicCast(p3, 251)));
  $stackDepth_0 = stackIndex - 1;
}

function AssignedTasksView$1(){
}

_ = AssignedTasksView$1.prototype = new Object_0;
_.getClass$ = getClass_725;
_.renderCell = renderCell_5;
_.typeId$ = 0;
_.this$0 = null;
function $AssignedTasksView$2(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $AssignedTasksView$2;
  $location_0[stackIndex] = 'AssignedTasksView.java:' + '141' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_726(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_726;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_AssignedTasksView$2_2_classLit;
}

function onRowSelection_1(rowSelectionEvent){
  var task, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onRowSelection_1;
  task = ($location_0[stackIndex] = 'AssignedTasksView.java:' + '145' , $getSelection_0(this.this$0));
  if (task) {
    task.isBlocking?($location_0[stackIndex] = 'Element.java:' + '638' , this.this$0.skipBtn.element['disabled'] = !false , undefined):(this.this$0.skipBtn.element['disabled'] = !true , undefined);
    $location_0[stackIndex] = 'AssignedTasksView.java:' + '153' , $handleEvent(this.this$0.controller_0, $Event(($location_0[stackIndex] = 'AssignedTasksView.java:' + '154' , new Event_0), ($location_0[stackIndex] = 'UpdateDetailsAction.java:' + '35' , $clinit_1061() , ID_34), $DetailViewEvent(($location_0[stackIndex] = 'AssignedTasksView.java:' + '154' , new DetailViewEvent), 'AssignedDetailView', task)));
  }
  $stackDepth_0 = stackIndex - 1;
}

function AssignedTasksView$2(){
}

_ = AssignedTasksView$2.prototype = new Object_0;
_.getClass$ = getClass_726;
_.onRowSelection = onRowSelection_1;
_.typeId$ = 486;
_.this$0 = null;
function $AssignedTasksView$3(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $AssignedTasksView$3;
  $location_0[stackIndex] = 'AssignedTasksView.java:' + '170' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_727(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_727;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_AssignedTasksView$3_2_classLit;
}

function onClick_27(clickEvent){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClick_27;
  $location_0[stackIndex] = 'AssignedTasksView.java:' + '340' , $handleEvent(this.this$0.controller_0, ($location_0[stackIndex] = 'AssignedTasksView.java:' + '341' , $Event(($location_0[stackIndex] = 'AssignedTasksView.java:' + '341' , new Event_0), ($location_0[stackIndex] = 'LoadTasksAction.java:' + '45' , $clinit_1040() , ID_28), dynamicCast(($location_0[stackIndex] = 'ErraiApplication.java:' + '129' , get_16(Lorg_jboss_bpm_console_client_Authentication_2_classLit)), 229).username)));
  $stackDepth_0 = stackIndex - 1;
}

function AssignedTasksView$3(){
}

_ = AssignedTasksView$3.prototype = new Object_0;
_.getClass$ = getClass_727;
_.onClick = onClick_27;
_.typeId$ = 487;
_.this$0 = null;
function $AssignedTasksView$4(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $AssignedTasksView$4;
  $location_0[stackIndex] = 'AssignedTasksView.java:' + '181' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_728(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_728;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_AssignedTasksView$4_2_classLit;
}

function onClick_28(clickEvent){
  var selection, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClick_28;
  selection = ($location_0[stackIndex] = 'AssignedTasksView.java:' + '186' , $getSelection_0(this.this$0));
  if (selection) {
    if (selection.url != null && !($location_0[stackIndex] = 'AssignedTasksView.java:' + '190' , $equals_4(selection.url, ''))) {
      this.this$0.iframeWindow = $IFrameWindowPanel(($location_0[stackIndex] = 'AssignedTasksView.java:' + '192' , new IFrameWindowPanel), selection.url, 'Task Form: ' + selection.name_0);
      $location_0[stackIndex] = 'IFrameWindowPanel.java:' + '181' , this.this$0.iframeWindow.callback = $AssignedTasksView$4$1(($location_0[stackIndex] = 'AssignedTasksView.java:' + '197' , new AssignedTasksView$4$1), this);
      $location_0[stackIndex] = 'IFrameWindowPanel.java:' + '205' , $createWindow(this.this$0.iframeWindow);
    }
     else {
      $location_0[stackIndex] = 'AssignedTasksView.java:' + '210' , $clinit_676();
      $location_0[stackIndex] = 'MessageBox.java:' + '111' , alert_2(($location_0[stackIndex] = 'MessageBox.java:' + '60' , $clinit_685() , ALERT), 'Invalid operation', "The task doesn't provide a UI");
    }
  }
   else {
    $location_0[stackIndex] = 'AssignedTasksView.java:' + '215' , $clinit_676();
    $location_0[stackIndex] = 'MessageBox.java:' + '111' , alert_2(($location_0[stackIndex] = 'MessageBox.java:' + '60' , $clinit_685() , ALERT), 'Missing selection', 'Please select a task');
  }
  $stackDepth_0 = stackIndex - 1;
}

function AssignedTasksView$4(){
}

_ = AssignedTasksView$4.prototype = new Object_0;
_.getClass$ = getClass_728;
_.onClick = onClick_28;
_.typeId$ = 488;
_.this$0 = null;
function $AssignedTasksView$4$1(this$static, this$1){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $AssignedTasksView$4$1;
  $location_0[stackIndex] = 'AssignedTasksView.java:' + '197' , this$static.this$1 = this$1;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_729(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_729;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_AssignedTasksView$4$1_2_classLit;
}

function onWindowClosed_0(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onWindowClosed_0;
  $location_0[stackIndex] = 'AssignedTasksView.java:' + '340' , $handleEvent(this.this$1.this$0.controller_0, ($location_0[stackIndex] = 'AssignedTasksView.java:' + '341' , $Event(($location_0[stackIndex] = 'AssignedTasksView.java:' + '341' , new Event_0), ($location_0[stackIndex] = 'LoadTasksAction.java:' + '45' , $clinit_1040() , ID_28), dynamicCast(($location_0[stackIndex] = 'ErraiApplication.java:' + '129' , get_16(Lorg_jboss_bpm_console_client_Authentication_2_classLit)), 229).username)));
  $stackDepth_0 = stackIndex - 1;
}

function AssignedTasksView$4$1(){
}

_ = AssignedTasksView$4$1.prototype = new Object_0;
_.getClass$ = getClass_729;
_.onWindowClosed = onWindowClosed_0;
_.typeId$ = 0;
_.this$1 = null;
function $AssignedTasksView$5(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $AssignedTasksView$5;
  $location_0[stackIndex] = 'AssignedTasksView.java:' + '223' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_730(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_730;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_AssignedTasksView$5_2_classLit;
}

function onClick_29(clickEvent){
  var payload, selection, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClick_29;
  selection = ($location_0[stackIndex] = 'AssignedTasksView.java:' + '226' , $getSelection_0(this.this$0));
  if (selection) {
    payload = $TaskIdentityEvent(($location_0[stackIndex] = 'AssignedTasksView.java:' + '230' , new TaskIdentityEvent), null, selection);
    $location_0[stackIndex] = 'AssignedTasksView.java:' + '234' , $handleEvent(this.this$0.controller_0, ($location_0[stackIndex] = 'AssignedTasksView.java:' + '235' , $Event(($location_0[stackIndex] = 'AssignedTasksView.java:' + '235' , new Event_0), ($location_0[stackIndex] = 'ReleaseTaskAction.java:' + '37' , $clinit_1056() , ID_31), payload)));
  }
   else {
    $location_0[stackIndex] = 'AssignedTasksView.java:' + '240' , $clinit_676();
    $location_0[stackIndex] = 'MessageBox.java:' + '111' , alert_2(($location_0[stackIndex] = 'MessageBox.java:' + '60' , $clinit_685() , ALERT), 'Missing selection', 'Please select a task');
  }
  $stackDepth_0 = stackIndex - 1;
}

function AssignedTasksView$5(){
}

_ = AssignedTasksView$5.prototype = new Object_0;
_.getClass$ = getClass_730;
_.onClick = onClick_29;
_.typeId$ = 489;
_.this$0 = null;
function $AssignedTasksView$6(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $AssignedTasksView$6;
  $location_0[stackIndex] = 'AssignedTasksView.java:' + '247' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_731(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_731;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_AssignedTasksView$6_2_classLit;
}

function onClick_30(clickEvent){
  var selection, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClick_30;
  selection = ($location_0[stackIndex] = 'AssignedTasksView.java:' + '250' , $getSelection_0(this.this$0));
  if (!!selection && !selection.isBlocking) {
    $location_0[stackIndex] = 'AssignedTasksView.java:' + '254' , $handleEvent(this.this$0.controller_0, ($location_0[stackIndex] = 'AssignedTasksView.java:' + '255' , $Event(($location_0[stackIndex] = 'AssignedTasksView.java:' + '255' , new Event_0), ($location_0[stackIndex] = 'SkipTaskAction.java:' + '14' , $clinit_1058() , ID_33), ($location_0[stackIndex] = 'AssignedTasksView.java:' + '257' , $TaskIdentityEvent(($location_0[stackIndex] = 'AssignedTasksView.java:' + '257' , new TaskIdentityEvent), dynamicCast(($location_0[stackIndex] = 'ErraiApplication.java:' + '129' , get_16(Lorg_jboss_bpm_console_client_Authentication_2_classLit)), 229).username, selection)))));
  }
   else {
    $location_0[stackIndex] = 'AssignedTasksView.java:' + '263' , $clinit_676();
    $location_0[stackIndex] = 'MessageBox.java:' + '111' , alert_2(($location_0[stackIndex] = 'MessageBox.java:' + '60' , $clinit_685() , ALERT), 'Missing selection', 'Please select a task');
  }
  $stackDepth_0 = stackIndex - 1;
}

function AssignedTasksView$6(){
}

_ = AssignedTasksView$6.prototype = new Object_0;
_.getClass$ = getClass_731;
_.onClick = onClick_30;
_.typeId$ = 490;
_.this$0 = null;
function $AssignedTasksView$7(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $AssignedTasksView$7;
  $location_0[stackIndex] = 'AssignedTasksView.java:' + '278' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function ffw_0(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = ffw_0;
  $location_0[stackIndex] = 'AssignedTasksView.java:' + '287' , $renderUpdate_0(this.this$0);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_732(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_732;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_AssignedTasksView$7_2_classLit;
}

function rev_0(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = rev_0;
  $location_0[stackIndex] = 'AssignedTasksView.java:' + '282' , $renderUpdate_0(this.this$0);
  $stackDepth_0 = stackIndex - 1;
}

function AssignedTasksView$7(){
}

_ = AssignedTasksView$7.prototype = new Object_0;
_.ffw = ffw_0;
_.getClass$ = getClass_732;
_.rev = rev_0;
_.typeId$ = 0;
_.this$0 = null;
function $AssignedTasksView$8(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $AssignedTasksView$8;
  $location_0[stackIndex] = 'AssignedTasksView.java:' + '307' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function callback_2(message){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = callback_2;
  ($location_0[stackIndex] = 'ModelCommands.java:' + '24' , $clinit_918() , ($location_0[stackIndex] = 'ModelCommands.java:' + '24' , valueOf_0(enum$map, ($location_0[stackIndex] = 'AssignedTasksView.java:' + '311' , message.getCommandType())))).ordinal == 1 && $equals_4(dynamicCast(($location_0[stackIndex] = 'AssignedTasksView.java:' + '314' , message.get_2(Ljava_lang_String_2_classLit, ($location_0[stackIndex] = 'ModelParts.java:' + '27' , $clinit_919() , CLASS))), 1), 'processModel') && ($location_0[stackIndex] = 'AssignedTasksView.java:' + '340' , $handleEvent(this.this$0.controller_0, ($location_0[stackIndex] = 'AssignedTasksView.java:' + '341' , $Event(($location_0[stackIndex] = 'AssignedTasksView.java:' + '341' , new Event_0), ($location_0[stackIndex] = 'LoadTasksAction.java:' + '45' , $clinit_1040() , ID_28), dynamicCast(($location_0[stackIndex] = 'ErraiApplication.java:' + '129' , get_16(Lorg_jboss_bpm_console_client_Authentication_2_classLit)), 229).username))));
  $stackDepth_0 = stackIndex - 1;
}

function getClass_733(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_733;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_AssignedTasksView$8_2_classLit;
}

function AssignedTasksView$8(){
}

_ = AssignedTasksView$8.prototype = new Object_0;
_.callback_0 = callback_2;
_.getClass$ = getClass_733;
_.typeId$ = 491;
_.this$0 = null;
function $clinit_1038(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1038;
  $location_0[stackIndex] = 'AssignedTasksView.java:' + '321' , $clinit_1038 = nullMethod;
  $clinit_43();
  $stackDepth_0 = stackIndex - 1;
}

function $AssignedTasksView$9(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $AssignedTasksView$9;
  $location_0[stackIndex] = 'AssignedTasksView.java:' + '321' , $clinit_1038();
  this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_734(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_734;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_AssignedTasksView$9_2_classLit;
}

function run_22(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = run_22;
  $location_0[stackIndex] = 'AssignedTasksView.java:' + '340' , $handleEvent(this.this$0.controller_0, ($location_0[stackIndex] = 'AssignedTasksView.java:' + '341' , $Event(($location_0[stackIndex] = 'AssignedTasksView.java:' + '341' , new Event_0), ($location_0[stackIndex] = 'LoadTasksAction.java:' + '45' , $clinit_1040() , ID_28), dynamicCast(($location_0[stackIndex] = 'ErraiApplication.java:' + '129' , get_16(Lorg_jboss_bpm_console_client_Authentication_2_classLit)), 229).username)));
  $stackDepth_0 = stackIndex - 1;
}

function AssignedTasksView$9(){
}

_ = AssignedTasksView$9.prototype = new Timer;
_.getClass$ = getClass_734;
_.run = run_22;
_.typeId$ = 492;
_.this$0 = null;
function $clinit_1039(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1039;
  $location_0[stackIndex] = 'ClaimTaskAction.java:' + '35' , $clinit_1039 = nullMethod;
  $location_0[stackIndex] = 'ClaimTaskAction.java:' + '37' , ID_27 = Lorg_jboss_bpm_console_client_task_ClaimTaskAction_2_classLit.typeName;
  $stackDepth_0 = stackIndex - 1;
}

function $ClaimTaskAction(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ClaimTaskAction;
  $location_0[stackIndex] = 'ClaimTaskAction.java:' + '35' , $clinit_1039();
  dynamicCast(($location_0[stackIndex] = 'AbstractRESTAction.java:' + '44' , get_16(Lorg_jboss_bpm_console_client_ApplicationContext_2_classLit)), 224);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_735(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_735;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_ClaimTaskAction_2_classLit;
}

function getId_14(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getId_14;
  $stackDepth_0 = stackIndex - 1;
  return ID_27;
}

function getRequestMethod_14(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getRequestMethod_14;
  returnTemp = ($location_0[stackIndex] = 'RequestBuilder.java:' + '70' , $clinit_208() , POST);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getUrl_16(event_0){
  var claimEvent, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getUrl_16;
  claimEvent = ($location_0[stackIndex] = 'ClaimTaskAction.java:' + '46' , dynamicCast(event_0, 253));
  returnTemp = $getTaskAssignURL(($location_0[stackIndex] = 'ClaimTaskAction.java:' + '48' , getInstance_2() , claimEvent.task.id_0), claimEvent.identity);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function handleSuccessfulResponse_14(controller, event_0, response){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = handleSuccessfulResponse_14;
  $location_0[stackIndex] = 'ClaimTaskAction.java:' + '60' , $handleEvent(controller, ($location_0[stackIndex] = 'ClaimTaskAction.java:' + '61' , $Event(($location_0[stackIndex] = 'ClaimTaskAction.java:' + '61' , new Event_0), ($location_0[stackIndex] = 'ReloadAllTaskListsAction.java:' + '38' , $clinit_1057() , ID_32), null)));
  $stackDepth_0 = stackIndex - 1;
}

function ClaimTaskAction(){
}

_ = ClaimTaskAction.prototype = new AbstractRESTAction;
_.getClass$ = getClass_735;
_.getId = getId_14;
_.getRequestMethod = getRequestMethod_14;
_.getUrl_0 = getUrl_16;
_.handleSuccessfulResponse = handleSuccessfulResponse_14;
_.typeId$ = 493;
var ID_27;
function $clinit_1040(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1040;
  $location_0[stackIndex] = 'LoadTasksAction.java:' + '43' , $clinit_1040 = nullMethod;
  $location_0[stackIndex] = 'LoadTasksAction.java:' + '45' , ID_28 = Lorg_jboss_bpm_console_client_task_LoadTasksAction_2_classLit.typeName;
  $stackDepth_0 = stackIndex - 1;
}

function $LoadTasksAction(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $LoadTasksAction;
  $location_0[stackIndex] = 'LoadTasksAction.java:' + '43' , $clinit_1040();
  dynamicCast(($location_0[stackIndex] = 'AbstractRESTAction.java:' + '44' , get_16(Lorg_jboss_bpm_console_client_ApplicationContext_2_classLit)), 224);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_736(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_736;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_LoadTasksAction_2_classLit;
}

function getDataDriven_2(controller){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getDataDriven_2;
  returnTemp = ($location_0[stackIndex] = 'LoadTasksAction.java:' + '66' , dynamicCast(dynamicCast(($location_0[stackIndex] = 'Controller.java:' + '67' , $get_7(controller.views, ($location_0[stackIndex] = 'AssignedTasksView.java:' + '60' , $clinit_1028() , ID_26))), 167), 254));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getId_15(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getId_15;
  $stackDepth_0 = stackIndex - 1;
  return ID_28;
}

function getRequestMethod_15(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getRequestMethod_15;
  returnTemp = ($location_0[stackIndex] = 'RequestBuilder.java:' + '60' , $clinit_208() , GET);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getUrl_17(event_0){
  var identity, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getUrl_17;
  identity = ($location_0[stackIndex] = 'LoadTasksAction.java:' + '54' , dynamicCast(event_0, 1));
  returnTemp = $getTaskListURL(($location_0[stackIndex] = 'LoadTasksAction.java:' + '55' , getInstance_2() , identity));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function handleSuccessfulResponse_15(controller, event_0, response){
  var identity, tasks, view, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = handleSuccessfulResponse_15;
  identity = ($location_0[stackIndex] = 'LoadTasksAction.java:' + '72' , dynamicCast(event_0, 1));
  tasks = ($location_0[stackIndex] = 'LoadTasksAction.java:' + '74' , parseTaskReferenceList(response.val$xmlHttpRequest.responseText));
  view = ($location_0[stackIndex] = 'LoadTasksAction.java:' + '75' , dynamicCast(dynamicCast(($location_0[stackIndex] = 'Controller.java:' + '67' , $get_7(controller.views, ($location_0[stackIndex] = 'AssignedTasksView.java:' + '60' , $clinit_1028() , ID_26))), 167), 254));
  $update_8(view, ($location_0[stackIndex] = 'LoadTasksAction.java:' + '77' , initValues(_3Ljava_lang_Object_2_classLit, 681, 0, [identity, tasks])));
  $location_0[stackIndex] = 'Log.java:' + '354' , $clinit_24();
  $location_0[stackIndex] = 'Log.java:' + '403' , $info(impl, 'Loaded ' + tasks.size_0 + ' tasks', null);
  $stackDepth_0 = stackIndex - 1;
}

function LoadTasksAction(){
}

_ = LoadTasksAction.prototype = new AbstractRESTAction;
_.getClass$ = getClass_736;
_.getDataDriven = getDataDriven_2;
_.getId = getId_15;
_.getRequestMethod = getRequestMethod_15;
_.getUrl_0 = getUrl_17;
_.handleSuccessfulResponse = handleSuccessfulResponse_15;
_.typeId$ = 494;
var ID_28;
function $clinit_1041(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1041;
  $location_0[stackIndex] = 'LoadTasksParticipationAction.java:' + '43' , $clinit_1041 = nullMethod;
  $location_0[stackIndex] = 'LoadTasksParticipationAction.java:' + '45' , ID_29 = Lorg_jboss_bpm_console_client_task_LoadTasksParticipationAction_2_classLit.typeName;
  $stackDepth_0 = stackIndex - 1;
}

function $LoadTasksParticipationAction(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $LoadTasksParticipationAction;
  $location_0[stackIndex] = 'LoadTasksParticipationAction.java:' + '43' , $clinit_1041();
  dynamicCast(($location_0[stackIndex] = 'AbstractRESTAction.java:' + '44' , get_16(Lorg_jboss_bpm_console_client_ApplicationContext_2_classLit)), 224);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_737(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_737;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_LoadTasksParticipationAction_2_classLit;
}

function getDataDriven_3(controller){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getDataDriven_3;
  returnTemp = ($location_0[stackIndex] = 'LoadTasksParticipationAction.java:' + '66' , dynamicCast(dynamicCast(($location_0[stackIndex] = 'Controller.java:' + '67' , $get_7(controller.views, ($location_0[stackIndex] = 'OpenTasksView.java:' + '59' , $clinit_1044() , ID_30))), 167), 255));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getId_16(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getId_16;
  $stackDepth_0 = stackIndex - 1;
  return ID_29;
}

function getRequestMethod_16(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getRequestMethod_16;
  returnTemp = ($location_0[stackIndex] = 'RequestBuilder.java:' + '60' , $clinit_208() , GET);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getUrl_18(event_0){
  var identity, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getUrl_18;
  identity = ($location_0[stackIndex] = 'LoadTasksParticipationAction.java:' + '54' , dynamicCast(event_0, 1));
  returnTemp = $getParticipationTaskListURL(($location_0[stackIndex] = 'LoadTasksParticipationAction.java:' + '55' , getInstance_2() , identity));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function handleSuccessfulResponse_16(controller, event_0, response){
  var identity, tasks, view, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = handleSuccessfulResponse_16;
  identity = ($location_0[stackIndex] = 'LoadTasksParticipationAction.java:' + '72' , dynamicCast(event_0, 1));
  tasks = ($location_0[stackIndex] = 'LoadTasksParticipationAction.java:' + '74' , parseTaskReferenceList(response.val$xmlHttpRequest.responseText));
  view = ($location_0[stackIndex] = 'LoadTasksParticipationAction.java:' + '75' , dynamicCast(dynamicCast(($location_0[stackIndex] = 'Controller.java:' + '67' , $get_7(controller.views, ($location_0[stackIndex] = 'OpenTasksView.java:' + '59' , $clinit_1044() , ID_30))), 167), 255));
  $location_0[stackIndex] = 'Log.java:' + '354' , $clinit_24();
  $location_0[stackIndex] = 'Log.java:' + '403' , $info(impl, 'Loaded ' + tasks.size_0 + ' tasks', null);
  $update_9(view, ($location_0[stackIndex] = 'LoadTasksParticipationAction.java:' + '78' , initValues(_3Ljava_lang_Object_2_classLit, 681, 0, [identity, tasks])));
  $stackDepth_0 = stackIndex - 1;
}

function LoadTasksParticipationAction(){
}

_ = LoadTasksParticipationAction.prototype = new AbstractRESTAction;
_.getClass$ = getClass_737;
_.getDataDriven = getDataDriven_3;
_.getId = getId_16;
_.getRequestMethod = getRequestMethod_16;
_.getUrl_0 = getUrl_18;
_.handleSuccessfulResponse = handleSuccessfulResponse_16;
_.typeId$ = 495;
var ID_29;
function $clinit_1044(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1044;
  $location_0[stackIndex] = 'OpenTasksView.java:' + '56' , $clinit_1044 = nullMethod;
  $location_0[stackIndex] = 'OpenTasksView.java:' + '59' , ID_30 = Lorg_jboss_bpm_console_client_task_OpenTasksView_2_classLit.typeName;
  $stackDepth_0 = stackIndex - 1;
}

function $initialize_4(this$static){
  var t, toolBar, toolBox, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $initialize_4;
  if (!this$static.isInitialized) {
    this$static.taskList = $MosaicPanel_0(($location_0[stackIndex] = 'OpenTasksView.java:' + '127' , new MosaicPanel), ($location_0[stackIndex] = 'OpenTasksView.java:' + '127' , $BoxLayout_1(new BoxLayout, ($location_0[stackIndex] = 'BoxLayout.java:' + '170' , $clinit_787() , VERTICAL))));
    $location_0[stackIndex] = 'LayoutPanel.java:' + '289' , setStyleAttribute_0(this$static.taskList.element, 'padding', '0px');
    $location_0[stackIndex] = 'LayoutPanel.java:' + '297' , this$static.taskList.widgetSpacing = 0;
    $location_0[stackIndex] = 'OpenTasksView.java:' + '131' , this$static.listBox = ($location_0[stackIndex] = 'OpenTasksView.java:' + '132' , $ListBox_1(($location_0[stackIndex] = 'OpenTasksView.java:' + '132' , new ListBox_0), ($location_0[stackIndex] = 'OpenTasksView.java:' + '133' , initValues(_3Ljava_lang_String_2_classLit, 684, 1, ['Priority', 'Process', 'Task Name', 'Status', 'Due Date']))));
    $location_0[stackIndex] = 'ListBox.java:' + '716' , this$static.listBox.cellRenderer = $OpenTasksView$1(($location_0[stackIndex] = 'OpenTasksView.java:' + '138' , new OpenTasksView$1), this$static);
    $location_0[stackIndex] = 'SelectionGrid.java:' + '248' , $addHandler_1(this$static.listBox.scrollTable.dataTable, $OpenTasksView$2(($location_0[stackIndex] = 'OpenTasksView.java:' + '166' , new OpenTasksView$2), this$static), (!TYPE_24 && (TYPE_24 = $GwtEvent$Type(($location_0[stackIndex] = 'RowSelectionEvent.java:' + '81' , new GwtEvent$Type))) , TYPE_24));
    toolBox = $MosaicPanel(($location_0[stackIndex] = 'OpenTasksView.java:' + '187' , new MosaicPanel));
    $location_0[stackIndex] = 'LayoutPanel.java:' + '289' , setStyleAttribute_0(toolBox.element, 'padding', '0px');
    $location_0[stackIndex] = 'LayoutPanel.java:' + '297' , toolBox.widgetSpacing = 5;
    toolBar = $ToolBar(($location_0[stackIndex] = 'OpenTasksView.java:' + '191' , new ToolBar));
    $location_0[stackIndex] = 'OpenTasksView.java:' + '192' , $add_28(toolBar, $Button_1(($location_0[stackIndex] = 'OpenTasksView.java:' + '193' , new Button), 'Refresh', $OpenTasksView$3(new OpenTasksView$3, this$static)));
    $location_0[stackIndex] = 'OpenTasksView.java:' + '204' , $add_28(toolBar, $Button_1(($location_0[stackIndex] = 'OpenTasksView.java:' + '205' , new Button), 'Claim', $OpenTasksView$4(new OpenTasksView$4, this$static)));
    this$static.skipBtn = $Button_1(($location_0[stackIndex] = 'OpenTasksView.java:' + '228' , new Button), 'Skip', $OpenTasksView$5(new OpenTasksView$5, this$static));
    $location_0[stackIndex] = 'Element.java:' + '638' , this$static.skipBtn.element['disabled'] = !false;
    $location_0[stackIndex] = 'OpenTasksView.java:' + '249' , $add_28(toolBar, this$static.skipBtn);
    $add_26(toolBox, toolBar, ($location_0[stackIndex] = 'OpenTasksView.java:' + '251' , $BoxLayoutData_4(($location_0[stackIndex] = 'OpenTasksView.java:' + '251' , new BoxLayoutData), ($location_0[stackIndex] = 'BoxLayoutData.java:' + '30' , $clinit_789() , HORIZONTAL_0))));
    $add_26(this$static.taskList, toolBox, $BoxLayoutData_4(($location_0[stackIndex] = 'OpenTasksView.java:' + '253' , new BoxLayoutData), HORIZONTAL_0));
    $add_26(this$static.taskList, this$static.listBox, $BoxLayoutData_4(($location_0[stackIndex] = 'OpenTasksView.java:' + '254' , new BoxLayoutData), BOTH));
    this$static.pagingPanel = ($location_0[stackIndex] = 'OpenTasksView.java:' + '256' , $PagingPanel(($location_0[stackIndex] = 'OpenTasksView.java:' + '256' , new PagingPanel), $OpenTasksView$6(($location_0[stackIndex] = 'OpenTasksView.java:' + '257' , new OpenTasksView$6), this$static)));
    $add_26(this$static.taskList, this$static.pagingPanel, $BoxLayoutData_4(($location_0[stackIndex] = 'OpenTasksView.java:' + '271' , new BoxLayoutData), HORIZONTAL_0));
    this$static.detailsView = $TaskDetailView(($location_0[stackIndex] = 'OpenTasksView.java:' + '278' , new TaskDetailView), true);
    $location_0[stackIndex] = 'OpenTasksView.java:' + '279' , $addView(this$static.controller, 'OpenDetailView', this$static.detailsView);
    $location_0[stackIndex] = 'OpenTasksView.java:' + '280' , $initialize_5(this$static.detailsView);
    $location_0[stackIndex] = 'OpenTasksView.java:' + '284' , $clinit_1082();
    $location_0[stackIndex] = 'OpenTasksView.java:' + '284' , $subscribe(bus_0, 'appContext.model.listener', $OpenTasksView$7(($location_0[stackIndex] = 'OpenTasksView.java:' + '285' , new OpenTasksView$7), this$static));
    t = $OpenTasksView$8(($location_0[stackIndex] = 'OpenTasksView.java:' + '299' , new OpenTasksView$8), this$static);
    $location_0[stackIndex] = 'OpenTasksView.java:' + '309' , $schedule(t, 500);
    $location_0[stackIndex] = 'OpenTasksView.java:' + '311' , this$static.isInitialized = true;
  }
  $stackDepth_0 = stackIndex - 1;
}

function $renderUpdate_1(this$static){
  var model, task, task$iterator, trimmed, model_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $renderUpdate_1;
  $location_0[stackIndex] = 'OpenTasksView.java:' + '354' , $initialize_4(this$static);
  $location_0[stackIndex] = 'OpenTasksView.java:' + '326' , model_0 = ($location_0[stackIndex] = 'OpenTasksView.java:' + '327' , $getModel(this$static.listBox));
  $location_0[stackIndex] = 'DefaultListModel.java:' + '61' , $clear_5(model_0.list);
  $location_0[stackIndex] = 'OpenTasksView.java:' + '332' , $handleEvent(this$static.controller, $Event(($location_0[stackIndex] = 'OpenTasksView.java:' + '333' , new Event_0), ($location_0[stackIndex] = 'UpdateDetailsAction.java:' + '35' , $clinit_1061() , ID_34), $DetailViewEvent(($location_0[stackIndex] = 'OpenTasksView.java:' + '333' , new DetailViewEvent), 'OpenDetailView', null)));
  $location_0[stackIndex] = 'OpenTasksView.java:' + '358' , model = ($location_0[stackIndex] = 'OpenTasksView.java:' + '359' , $getModel(this$static.listBox));
  trimmed = ($location_0[stackIndex] = 'OpenTasksView.java:' + '361' , $trim_0(this$static.pagingPanel, this$static.cachedTasks));
  for (task$iterator = ($location_0[stackIndex] = 'OpenTasksView.java:' + '362' , trimmed.iterator_0()); $location_0[stackIndex] = 'OpenTasksView.java:' + '362' , task$iterator.hasNext();) {
    task = dynamicCast(task$iterator.next_0(), 251);
    ($location_0[stackIndex] = 'TaskRef.java:' + '47' , $clinit_945() , OPEN) == task.currentState && ($location_0[stackIndex] = 'DefaultListModel.java:' + '45' , $add_6(model.list, task));
  }
  $stackDepth_0 = stackIndex - 1;
}

function $update_9(this$static, data){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $update_9;
  dynamicCast(($location_0[stackIndex] = 'OpenTasksView.java:' + '339' , data[0]), 1);
  this$static.cachedTasks = dynamicCast(($location_0[stackIndex] = 'OpenTasksView.java:' + '340' , data[1]), 170);
  $location_0[stackIndex] = 'OpenTasksView.java:' + '341' , $reset(this$static.pagingPanel);
  $location_0[stackIndex] = 'OpenTasksView.java:' + '342' , $renderUpdate_1(this$static);
  $stackDepth_0 = stackIndex - 1;
}

function registerCommonActions(controller){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = registerCommonActions;
  $location_0[stackIndex] = 'OpenTasksView.java:' + '77' , $clinit_1044();
  if (!actionSetup) {
    $location_0[stackIndex] = 'Controller.java:' + '106' , $put_0(controller.actions, ($location_0[stackIndex] = 'LoadTasksAction.java:' + '45' , $clinit_1040() , ID_28), $LoadTasksAction(($location_0[stackIndex] = 'OpenTasksView.java:' + '82' , new LoadTasksAction)));
    $location_0[stackIndex] = 'Controller.java:' + '106' , $put_0(controller.actions, ($location_0[stackIndex] = 'LoadTasksParticipationAction.java:' + '45' , $clinit_1041() , ID_29), $LoadTasksParticipationAction(($location_0[stackIndex] = 'OpenTasksView.java:' + '83' , new LoadTasksParticipationAction)));
    $location_0[stackIndex] = 'Controller.java:' + '106' , $put_0(controller.actions, ($location_0[stackIndex] = 'ClaimTaskAction.java:' + '37' , $clinit_1039() , ID_27), $ClaimTaskAction(($location_0[stackIndex] = 'OpenTasksView.java:' + '84' , new ClaimTaskAction)));
    $location_0[stackIndex] = 'Controller.java:' + '106' , $put_0(controller.actions, ($location_0[stackIndex] = 'ReleaseTaskAction.java:' + '37' , $clinit_1056() , ID_31), $ReleaseTaskAction(($location_0[stackIndex] = 'OpenTasksView.java:' + '85' , new ReleaseTaskAction)));
    $location_0[stackIndex] = 'Controller.java:' + '106' , $put_0(controller.actions, ($location_0[stackIndex] = 'UpdateDetailsAction.java:' + '35' , $clinit_1061() , ID_34), ($location_0[stackIndex] = 'OpenTasksView.java:' + '86' , new UpdateDetailsAction));
    $location_0[stackIndex] = 'Controller.java:' + '106' , $put_0(controller.actions, ($location_0[stackIndex] = 'AssignTaskAction.java:' + '38' , $clinit_1025() , ID_25), $AssignTaskAction(($location_0[stackIndex] = 'OpenTasksView.java:' + '87' , new AssignTaskAction)));
    $location_0[stackIndex] = 'Controller.java:' + '106' , $put_0(controller.actions, ($location_0[stackIndex] = 'ReloadAllTaskListsAction.java:' + '38' , $clinit_1057() , ID_32), $ReloadAllTaskListsAction(($location_0[stackIndex] = 'OpenTasksView.java:' + '88' , new ReloadAllTaskListsAction)));
    $location_0[stackIndex] = 'Controller.java:' + '106' , $put_0(controller.actions, ($location_0[stackIndex] = 'SkipTaskAction.java:' + '14' , $clinit_1058() , ID_33), $SkipTaskAction(($location_0[stackIndex] = 'OpenTasksView.java:' + '89' , new SkipTaskAction)));
    $location_0[stackIndex] = 'OpenTasksView.java:' + '91' , actionSetup = true;
  }
  $stackDepth_0 = stackIndex - 1;
}

function OpenTasksView(){
}

_ = OpenTasksView.prototype = new AbstractTaskList;
_.typeId$ = 497;
_.controller = null;
_.detailsView = null;
_.pagingPanel = null;
_.panel = null;
_.skipBtn = null;
var ID_30, actionSetup = false;
function $OpenTasksView$1(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $OpenTasksView$1;
  $location_0[stackIndex] = 'OpenTasksView.java:' + '138' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $renderCell_5(this$static, listBox, row, column, item){
  var d, trElem, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $renderCell_5;
  switch (column) {
    case 0:
      $location_0[stackIndex] = 'OpenTasksView.java:' + '143' , $setText_5(listBox, row, column, '' + item.priority);
      break;
    case 1:
      $location_0[stackIndex] = 'OpenTasksView.java:' + '146' , $setText_5(listBox, row, column, item.processId);
      break;
    case 2:
      $location_0[stackIndex] = 'OpenTasksView.java:' + '149' , $setText_5(listBox, row, column, item.name_0);
      break;
    case 3:
      $location_0[stackIndex] = 'OpenTasksView.java:' + '152' , $setText_5(listBox, row, column, '' + item.currentState);
      break;
    case 4:
      d = item.dueDate?($location_0[stackIndex] = 'OpenTasksView.java:' + '155' , $format_2(this$static.this$0.dateFormat, item.dueDate)):'';
      $location_0[stackIndex] = 'ListBox.java:' + '913' , $setText_6(listBox.dataTable, (trElem = dynamicCastJso(($location_0[stackIndex] = 'ListBox.java:' + '925' , $get_5(listBox.rowsInModelOrder, row))) , trElem.sectionRowIndex - 1), column, d);
      break;
    default:throw $RuntimeException(($location_0[stackIndex] = 'OpenTasksView.java:' + '159' , new RuntimeException), 'Unexpected column size');
  }
  $stackDepth_0 = stackIndex - 1;
}

function getClass_741(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_741;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_OpenTasksView$1_2_classLit;
}

function renderCell_6(p0, p1, p2, p3){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = renderCell_6;
  $renderCell_5(this, p0, p1, p2, ($location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , dynamicCast(p3, 251)));
  $stackDepth_0 = stackIndex - 1;
}

function OpenTasksView$1(){
}

_ = OpenTasksView$1.prototype = new Object_0;
_.getClass$ = getClass_741;
_.renderCell = renderCell_6;
_.typeId$ = 0;
_.this$0 = null;
function $OpenTasksView$2(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $OpenTasksView$2;
  $location_0[stackIndex] = 'OpenTasksView.java:' + '166' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_742(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_742;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_OpenTasksView$2_2_classLit;
}

function onRowSelection_2(rowSelectionEvent){
  var task, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onRowSelection_2;
  task = ($location_0[stackIndex] = 'OpenTasksView.java:' + '170' , $getSelection_0(this.this$0));
  if (task) {
    task.isBlocking?($location_0[stackIndex] = 'Element.java:' + '638' , this.this$0.skipBtn.element['disabled'] = !false , undefined):(this.this$0.skipBtn.element['disabled'] = !true , undefined);
    $location_0[stackIndex] = 'OpenTasksView.java:' + '178' , $handleEvent(this.this$0.controller, $Event(($location_0[stackIndex] = 'OpenTasksView.java:' + '179' , new Event_0), ($location_0[stackIndex] = 'UpdateDetailsAction.java:' + '35' , $clinit_1061() , ID_34), $DetailViewEvent(($location_0[stackIndex] = 'OpenTasksView.java:' + '179' , new DetailViewEvent), 'OpenDetailView', task)));
  }
  $stackDepth_0 = stackIndex - 1;
}

function OpenTasksView$2(){
}

_ = OpenTasksView$2.prototype = new Object_0;
_.getClass$ = getClass_742;
_.onRowSelection = onRowSelection_2;
_.typeId$ = 498;
_.this$0 = null;
function $OpenTasksView$3(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $OpenTasksView$3;
  $location_0[stackIndex] = 'OpenTasksView.java:' + '193' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_743(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_743;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_OpenTasksView$3_2_classLit;
}

function onClick_31(clickEvent){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClick_31;
  $location_0[stackIndex] = 'OpenTasksView.java:' + '318' , $handleEvent(this.this$0.controller, ($location_0[stackIndex] = 'OpenTasksView.java:' + '319' , $Event(($location_0[stackIndex] = 'OpenTasksView.java:' + '319' , new Event_0), ($location_0[stackIndex] = 'LoadTasksParticipationAction.java:' + '45' , $clinit_1041() , ID_29), dynamicCast(($location_0[stackIndex] = 'AbstractTaskList.java:' + '75' , get_16(Lorg_jboss_bpm_console_client_Authentication_2_classLit)), 229).username)));
  $stackDepth_0 = stackIndex - 1;
}

function OpenTasksView$3(){
}

_ = OpenTasksView$3.prototype = new Object_0;
_.getClass$ = getClass_743;
_.onClick = onClick_31;
_.typeId$ = 499;
_.this$0 = null;
function $OpenTasksView$4(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $OpenTasksView$4;
  $location_0[stackIndex] = 'OpenTasksView.java:' + '205' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_744(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_744;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_OpenTasksView$4_2_classLit;
}

function onClick_32(clickEvent){
  var selection, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClick_32;
  selection = ($location_0[stackIndex] = 'OpenTasksView.java:' + '208' , $getSelection_0(this.this$0));
  if (selection) {
    $location_0[stackIndex] = 'OpenTasksView.java:' + '212' , $handleEvent(this.this$0.controller, ($location_0[stackIndex] = 'OpenTasksView.java:' + '213' , $Event(($location_0[stackIndex] = 'OpenTasksView.java:' + '213' , new Event_0), ($location_0[stackIndex] = 'ClaimTaskAction.java:' + '37' , $clinit_1039() , ID_27), ($location_0[stackIndex] = 'OpenTasksView.java:' + '215' , $TaskIdentityEvent(($location_0[stackIndex] = 'OpenTasksView.java:' + '215' , new TaskIdentityEvent), dynamicCast(($location_0[stackIndex] = 'ErraiApplication.java:' + '129' , get_16(Lorg_jboss_bpm_console_client_Authentication_2_classLit)), 229).username, selection)))));
  }
   else {
    $location_0[stackIndex] = 'OpenTasksView.java:' + '221' , $clinit_676();
    $location_0[stackIndex] = 'MessageBox.java:' + '111' , alert_2(($location_0[stackIndex] = 'MessageBox.java:' + '60' , $clinit_685() , ALERT), 'Missing selection', 'Please select a task');
  }
  $stackDepth_0 = stackIndex - 1;
}

function OpenTasksView$4(){
}

_ = OpenTasksView$4.prototype = new Object_0;
_.getClass$ = getClass_744;
_.onClick = onClick_32;
_.typeId$ = 500;
_.this$0 = null;
function $OpenTasksView$5(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $OpenTasksView$5;
  $location_0[stackIndex] = 'OpenTasksView.java:' + '228' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_745(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_745;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_OpenTasksView$5_2_classLit;
}

function onClick_33(clickEvent){
  var selection, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClick_33;
  selection = ($location_0[stackIndex] = 'OpenTasksView.java:' + '231' , $getSelection_0(this.this$0));
  if (!!selection && !selection.isBlocking) {
    $location_0[stackIndex] = 'OpenTasksView.java:' + '235' , $handleEvent(this.this$0.controller, ($location_0[stackIndex] = 'OpenTasksView.java:' + '236' , $Event(($location_0[stackIndex] = 'OpenTasksView.java:' + '236' , new Event_0), ($location_0[stackIndex] = 'SkipTaskAction.java:' + '14' , $clinit_1058() , ID_33), ($location_0[stackIndex] = 'OpenTasksView.java:' + '238' , $TaskIdentityEvent(($location_0[stackIndex] = 'OpenTasksView.java:' + '238' , new TaskIdentityEvent), dynamicCast(($location_0[stackIndex] = 'ErraiApplication.java:' + '129' , get_16(Lorg_jboss_bpm_console_client_Authentication_2_classLit)), 229).username, selection)))));
  }
   else {
    $location_0[stackIndex] = 'OpenTasksView.java:' + '243' , $clinit_676();
    $location_0[stackIndex] = 'MessageBox.java:' + '111' , alert_2(($location_0[stackIndex] = 'MessageBox.java:' + '60' , $clinit_685() , ALERT), 'Missing selection', 'Please select a task');
  }
  $stackDepth_0 = stackIndex - 1;
}

function OpenTasksView$5(){
}

_ = OpenTasksView$5.prototype = new Object_0;
_.getClass$ = getClass_745;
_.onClick = onClick_33;
_.typeId$ = 501;
_.this$0 = null;
function $OpenTasksView$6(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $OpenTasksView$6;
  $location_0[stackIndex] = 'OpenTasksView.java:' + '257' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function ffw_1(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = ffw_1;
  $location_0[stackIndex] = 'OpenTasksView.java:' + '266' , $renderUpdate_1(this.this$0);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_746(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_746;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_OpenTasksView$6_2_classLit;
}

function rev_1(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = rev_1;
  $location_0[stackIndex] = 'OpenTasksView.java:' + '261' , $renderUpdate_1(this.this$0);
  $stackDepth_0 = stackIndex - 1;
}

function OpenTasksView$6(){
}

_ = OpenTasksView$6.prototype = new Object_0;
_.ffw = ffw_1;
_.getClass$ = getClass_746;
_.rev = rev_1;
_.typeId$ = 0;
_.this$0 = null;
function $OpenTasksView$7(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $OpenTasksView$7;
  $location_0[stackIndex] = 'OpenTasksView.java:' + '285' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function callback_3(message){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = callback_3;
  ($location_0[stackIndex] = 'ModelCommands.java:' + '24' , $clinit_918() , ($location_0[stackIndex] = 'ModelCommands.java:' + '24' , valueOf_0(enum$map, ($location_0[stackIndex] = 'OpenTasksView.java:' + '289' , message.getCommandType())))).ordinal == 1 && $equals_4(dynamicCast(($location_0[stackIndex] = 'OpenTasksView.java:' + '292' , message.get_2(Ljava_lang_String_2_classLit, ($location_0[stackIndex] = 'ModelParts.java:' + '27' , $clinit_919() , CLASS))), 1), 'processModel') && ($location_0[stackIndex] = 'OpenTasksView.java:' + '318' , $handleEvent(this.this$0.controller, ($location_0[stackIndex] = 'OpenTasksView.java:' + '319' , $Event(($location_0[stackIndex] = 'OpenTasksView.java:' + '319' , new Event_0), ($location_0[stackIndex] = 'LoadTasksParticipationAction.java:' + '45' , $clinit_1041() , ID_29), dynamicCast(($location_0[stackIndex] = 'AbstractTaskList.java:' + '75' , get_16(Lorg_jboss_bpm_console_client_Authentication_2_classLit)), 229).username))));
  $stackDepth_0 = stackIndex - 1;
}

function getClass_747(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_747;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_OpenTasksView$7_2_classLit;
}

function OpenTasksView$7(){
}

_ = OpenTasksView$7.prototype = new Object_0;
_.callback_0 = callback_3;
_.getClass$ = getClass_747;
_.typeId$ = 502;
_.this$0 = null;
function $clinit_1052(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1052;
  $location_0[stackIndex] = 'OpenTasksView.java:' + '299' , $clinit_1052 = nullMethod;
  $clinit_43();
  $stackDepth_0 = stackIndex - 1;
}

function $OpenTasksView$8(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $OpenTasksView$8;
  $location_0[stackIndex] = 'OpenTasksView.java:' + '299' , $clinit_1052();
  this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_748(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_748;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_OpenTasksView$8_2_classLit;
}

function run_23(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = run_23;
  $location_0[stackIndex] = 'OpenTasksView.java:' + '318' , $handleEvent(this.this$0.controller, ($location_0[stackIndex] = 'OpenTasksView.java:' + '319' , $Event(($location_0[stackIndex] = 'OpenTasksView.java:' + '319' , new Event_0), ($location_0[stackIndex] = 'LoadTasksParticipationAction.java:' + '45' , $clinit_1041() , ID_29), dynamicCast(($location_0[stackIndex] = 'AbstractTaskList.java:' + '75' , get_16(Lorg_jboss_bpm_console_client_Authentication_2_classLit)), 229).username)));
  $stackDepth_0 = stackIndex - 1;
}

function OpenTasksView$8(){
}

_ = OpenTasksView$8.prototype = new Timer;
_.getClass$ = getClass_748;
_.run = run_23;
_.typeId$ = 503;
_.this$0 = null;
function $ParticipantPanel(this$static){
  var treePanel, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ParticipantPanel;
  $MosaicPanel_0(this$static, ($location_0[stackIndex] = 'ParticipantPanel.java:' + '58' , $BoxLayout_1(($location_0[stackIndex] = 'ParticipantPanel.java:' + '58' , new BoxLayout), ($location_0[stackIndex] = 'BoxLayout.java:' + '170' , $clinit_787() , HORIZONTAL))));
  $location_0[stackIndex] = 'LayoutPanel.java:' + '289' , setStyleAttribute_0(this$static.element, 'padding', '5px');
  treePanel = $ScrollLayoutPanel(($location_0[stackIndex] = 'ParticipantPanel.java:' + '62' , new ScrollLayoutPanel));
  $location_0[stackIndex] = 'Element.java:' + '688' , treePanel.element['className'] = 'bpm-property-box';
  this$static.tree = $Tree(($location_0[stackIndex] = 'ParticipantPanel.java:' + '66' , new Tree));
  $location_0[stackIndex] = 'ParticipantPanel.java:' + '67' , $add_25(treePanel, this$static.tree);
  $add_26(this$static, treePanel, ($location_0[stackIndex] = 'ParticipantPanel.java:' + '68' , $BoxLayoutData_4(($location_0[stackIndex] = 'ParticipantPanel.java:' + '68' , new BoxLayoutData), ($location_0[stackIndex] = 'BoxLayoutData.java:' + '30' , $clinit_789() , BOTH))));
  $location_0[stackIndex] = 'Tree.java:' + '422' , add_16(this$static.tree, $ParticipantPanel$1(($location_0[stackIndex] = 'ParticipantPanel.java:' + '71' , new ParticipantPanel$1), this$static));
  this$static.assignmentBtn = ($location_0[stackIndex] = 'ParticipantPanel.java:' + '100' , $Button_0(($location_0[stackIndex] = 'ParticipantPanel.java:' + '100' , new Button), 'Assign', $ParticipantPanel$2(($location_0[stackIndex] = 'ParticipantPanel.java:' + '102' , new ParticipantPanel$2), this$static)));
  $location_0[stackIndex] = 'Element.java:' + '688' , ($location_0[stackIndex] = 'UIObject.java:' + '648' , this$static.assignmentBtn.getStyleElement())['className'] = 'bpm-operation-ui';
  $location_0[stackIndex] = 'Element.java:' + '638' , this$static.assignmentBtn.element['disabled'] = !false;
  $location_0[stackIndex] = 'ParticipantPanel.java:' + '118' , $add_25(this$static, this$static.assignmentBtn);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $clearView_0(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clearView_0;
  $location_0[stackIndex] = 'ParticipantPanel.java:' + '156' , $clear_4(this$static.tree);
  $location_0[stackIndex] = 'ParticipantPanel.java:' + '157' , this$static.currentTask = null;
  $stackDepth_0 = stackIndex - 1;
}

function $update_10(this$static, task){
  var gref, gref$iterator, groups, root, uref, uref$iterator, users, ret, ret_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $update_10;
  $location_0[stackIndex] = 'ParticipantPanel.java:' + '129' , this$static.currentTask = task;
  $location_0[stackIndex] = 'ParticipantPanel.java:' + '131' , $clear_4(this$static.tree);
  root = ($location_0[stackIndex] = 'ParticipantPanel.java:' + '133' , $addItem_1(this$static.tree, 'Participants'));
  $location_0[stackIndex] = 'ParticipantPanel.java:' + '136' , groups = (ret = $TreeItem_0(($location_0[stackIndex] = 'TreeItem.java:' + '296' , new TreeItem), 'Groups') , ($location_0[stackIndex] = 'TreeItem.java:' + '297' , root.addItem(ret)) , ret);
  for ($location_0[stackIndex] = 'ParticipantPanel.java:' + '137' , gref$iterator = $AbstractList$IteratorImpl(($location_0[stackIndex] = 'AbstractList.java:' + '278' , new AbstractList$IteratorImpl), task.participantGroups); gref$iterator.i < ($location_0[stackIndex] = 'AbstractList.java:' + '38' , gref$iterator.this$0.size_1());) {
    gref = dynamicCast(($location_0[stackIndex] = 'ParticipantPanel.java:' + '137' , $next_6(gref$iterator)), 256);
    $location_0[stackIndex] = 'ParticipantPanel.java:' + '139' , $addItem_2(groups, gref.idRef);
  }
  $location_0[stackIndex] = 'ParticipantPanel.java:' + '143' , users = (ret_0 = $TreeItem_0(($location_0[stackIndex] = 'TreeItem.java:' + '296' , new TreeItem), 'Users') , ($location_0[stackIndex] = 'TreeItem.java:' + '297' , root.addItem(ret_0)) , ret_0);
  for ($location_0[stackIndex] = 'ParticipantPanel.java:' + '144' , uref$iterator = $AbstractList$IteratorImpl(($location_0[stackIndex] = 'AbstractList.java:' + '278' , new AbstractList$IteratorImpl), task.participantUsers); uref$iterator.i < ($location_0[stackIndex] = 'AbstractList.java:' + '38' , uref$iterator.this$0.size_1());) {
    uref = dynamicCast(($location_0[stackIndex] = 'ParticipantPanel.java:' + '144' , $next_6(uref$iterator)), 256);
    $location_0[stackIndex] = 'ParticipantPanel.java:' + '146' , $addItem_2(users, uref.idRef);
  }
  $location_0[stackIndex] = 'TreeItem.java:' + '528' , $setState_1(root, true, true);
  $location_0[stackIndex] = 'LayoutPanel.java:' + '600' , $invalidate_1(this$static, null);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_749(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_749;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_ParticipantPanel_2_classLit;
}

function setController_10(controller){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = setController_10;
  $location_0[stackIndex] = 'ParticipantPanel.java:' + '124' , this.controller = controller;
  $stackDepth_0 = stackIndex - 1;
}

function ParticipantPanel(){
}

_ = ParticipantPanel.prototype = new MosaicPanel;
_.getClass$ = getClass_749;
_.setController = setController_10;
_.typeId$ = 504;
_.assignmentBtn = null;
_.controller = null;
_.currentTask = null;
_.selection = null;
_.tree = null;
function $ParticipantPanel$1(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ParticipantPanel$1;
  $location_0[stackIndex] = 'ParticipantPanel.java:' + '71' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $onTreeItemSelected(this$static, treeItem){
  var name_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $onTreeItemSelected;
  $location_0[stackIndex] = 'ParticipantPanel.java:' + '75' , name_0 = ($location_0[stackIndex] = 'Element.java:' + '266' , $getInnerText_0(($location_0[stackIndex] = 'DOMImpl.java:' + '22' , $clinit_81() , impl_0), treeItem.contentElem));
  if (!($location_0[stackIndex] = 'ParticipantPanel.java:' + '77' , $equals_4(name_0, 'Participants')) & !($location_0[stackIndex] = 'ParticipantPanel.java:' + '78' , $equals_4(name_0, 'Groups')) & !($location_0[stackIndex] = 'ParticipantPanel.java:' + '79' , $equals_4(name_0, 'Users'))) {
    $location_0[stackIndex] = 'ParticipantPanel.java:' + '82' , this$static.this$0.selection = name_0;
    $location_0[stackIndex] = 'Element.java:' + '638' , this$static.this$0.assignmentBtn.element['disabled'] = !true;
  }
   else {
    $location_0[stackIndex] = 'ParticipantPanel.java:' + '87' , this$static.this$0.selection = null;
    $location_0[stackIndex] = 'Element.java:' + '638' , this$static.this$0.assignmentBtn.element['disabled'] = !false;
  }
  $stackDepth_0 = stackIndex - 1;
}

function getClass_750(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_750;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_ParticipantPanel$1_2_classLit;
}

function ParticipantPanel$1(){
}

_ = ParticipantPanel$1.prototype = new Object_0;
_.getClass$ = getClass_750;
_.typeId$ = 505;
_.this$0 = null;
function $ParticipantPanel$2(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ParticipantPanel$2;
  $location_0[stackIndex] = 'ParticipantPanel.java:' + '102' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_751(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_751;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_ParticipantPanel$2_2_classLit;
}

function onClick_34(widget){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClick_34;
  this.this$0.selection != null && ($location_0[stackIndex] = 'ParticipantPanel.java:' + '108' , $handleEvent(this.this$0.controller, $Event(($location_0[stackIndex] = 'ParticipantPanel.java:' + '109' , new Event_0), ($location_0[stackIndex] = 'AssignTaskAction.java:' + '38' , $clinit_1025() , ID_25), $AssignEvent(($location_0[stackIndex] = 'ParticipantPanel.java:' + '109' , new AssignEvent), this.this$0.selection, this.this$0.currentTask))));
  $stackDepth_0 = stackIndex - 1;
}

function ParticipantPanel$2(){
}

_ = ParticipantPanel$2.prototype = new Object_0;
_.getClass$ = getClass_751;
_.onClick_0 = onClick_34;
_.typeId$ = 506;
_.this$0 = null;
function $clinit_1056(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1056;
  $location_0[stackIndex] = 'ReleaseTaskAction.java:' + '35' , $clinit_1056 = nullMethod;
  $location_0[stackIndex] = 'ReleaseTaskAction.java:' + '37' , ID_31 = Lorg_jboss_bpm_console_client_task_ReleaseTaskAction_2_classLit.typeName;
  $stackDepth_0 = stackIndex - 1;
}

function $ReleaseTaskAction(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ReleaseTaskAction;
  $location_0[stackIndex] = 'ReleaseTaskAction.java:' + '35' , $clinit_1056();
  dynamicCast(($location_0[stackIndex] = 'AbstractRESTAction.java:' + '44' , get_16(Lorg_jboss_bpm_console_client_ApplicationContext_2_classLit)), 224);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_752(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_752;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_ReleaseTaskAction_2_classLit;
}

function getId_17(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getId_17;
  $stackDepth_0 = stackIndex - 1;
  return ID_31;
}

function getRequestMethod_17(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getRequestMethod_17;
  returnTemp = ($location_0[stackIndex] = 'RequestBuilder.java:' + '70' , $clinit_208() , POST);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getUrl_19(event_0){
  var tie, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getUrl_19;
  tie = ($location_0[stackIndex] = 'ReleaseTaskAction.java:' + '46' , dynamicCast(event_0, 253));
  returnTemp = $getTaskReleaseURL(($location_0[stackIndex] = 'ReleaseTaskAction.java:' + '47' , getInstance_2() , tie.task.id_0));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function handleSuccessfulResponse_17(controller, event_0, response){
  var currentUser, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = handleSuccessfulResponse_17;
  $location_0[stackIndex] = 'ReleaseTaskAction.java:' + '58' , currentUser = dynamicCast(($location_0[stackIndex] = 'ErraiApplication.java:' + '129' , get_16(Lorg_jboss_bpm_console_client_Authentication_2_classLit)), 229).username;
  $location_0[stackIndex] = 'ReleaseTaskAction.java:' + '59' , $handleEvent(controller, ($location_0[stackIndex] = 'ReleaseTaskAction.java:' + '60' , $Event(($location_0[stackIndex] = 'ReleaseTaskAction.java:' + '60' , new Event_0), ($location_0[stackIndex] = 'LoadTasksAction.java:' + '45' , $clinit_1040() , ID_28), currentUser)));
  $stackDepth_0 = stackIndex - 1;
}

function ReleaseTaskAction(){
}

_ = ReleaseTaskAction.prototype = new AbstractRESTAction;
_.getClass$ = getClass_752;
_.getId = getId_17;
_.getRequestMethod = getRequestMethod_17;
_.getUrl_0 = getUrl_19;
_.handleSuccessfulResponse = handleSuccessfulResponse_17;
_.typeId$ = 507;
var ID_31;
function $clinit_1057(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1057;
  $location_0[stackIndex] = 'ReloadAllTaskListsAction.java:' + '35' , $clinit_1057 = nullMethod;
  $location_0[stackIndex] = 'ReloadAllTaskListsAction.java:' + '38' , ID_32 = Lorg_jboss_bpm_console_client_task_ReloadAllTaskListsAction_2_classLit.typeName;
  $stackDepth_0 = stackIndex - 1;
}

function $ReloadAllTaskListsAction(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ReloadAllTaskListsAction;
  $location_0[stackIndex] = 'ReloadAllTaskListsAction.java:' + '42' , $clinit_1057();
  dynamicCast(($location_0[stackIndex] = 'ReloadAllTaskListsAction.java:' + '44' , get_16(Lorg_jboss_bpm_console_client_ApplicationContext_2_classLit)), 224);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function execute_37(controller, object){
  var currentUser, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = execute_37;
  $location_0[stackIndex] = 'ReloadAllTaskListsAction.java:' + '50' , currentUser = dynamicCast(($location_0[stackIndex] = 'ErraiApplication.java:' + '129' , get_16(Lorg_jboss_bpm_console_client_Authentication_2_classLit)), 229).username;
  $location_0[stackIndex] = 'ReloadAllTaskListsAction.java:' + '51' , $handleEvent(controller, ($location_0[stackIndex] = 'ReloadAllTaskListsAction.java:' + '52' , $Event(($location_0[stackIndex] = 'ReloadAllTaskListsAction.java:' + '52' , new Event_0), ($location_0[stackIndex] = 'LoadTasksAction.java:' + '45' , $clinit_1040() , ID_28), currentUser)));
  $location_0[stackIndex] = 'ReloadAllTaskListsAction.java:' + '56' , $handleEvent(controller, ($location_0[stackIndex] = 'ReloadAllTaskListsAction.java:' + '57' , $Event(($location_0[stackIndex] = 'ReloadAllTaskListsAction.java:' + '57' , new Event_0), ($location_0[stackIndex] = 'LoadTasksParticipationAction.java:' + '45' , $clinit_1041() , ID_29), currentUser)));
  $stackDepth_0 = stackIndex - 1;
}

function getClass_753(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_753;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_ReloadAllTaskListsAction_2_classLit;
}

function ReloadAllTaskListsAction(){
}

_ = ReloadAllTaskListsAction.prototype = new Object_0;
_.execute_2 = execute_37;
_.getClass$ = getClass_753;
_.typeId$ = 508;
var ID_32;
function $clinit_1058(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1058;
  $location_0[stackIndex] = 'SkipTaskAction.java:' + '12' , $clinit_1058 = nullMethod;
  $location_0[stackIndex] = 'SkipTaskAction.java:' + '14' , ID_33 = Lorg_jboss_bpm_console_client_task_SkipTaskAction_2_classLit.typeName;
  $stackDepth_0 = stackIndex - 1;
}

function $SkipTaskAction(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $SkipTaskAction;
  $location_0[stackIndex] = 'SkipTaskAction.java:' + '12' , $clinit_1058();
  dynamicCast(($location_0[stackIndex] = 'AbstractRESTAction.java:' + '44' , get_16(Lorg_jboss_bpm_console_client_ApplicationContext_2_classLit)), 224);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_754(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_754;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_SkipTaskAction_2_classLit;
}

function getId_18(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getId_18;
  $stackDepth_0 = stackIndex - 1;
  return ID_33;
}

function getRequestMethod_18(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getRequestMethod_18;
  returnTemp = ($location_0[stackIndex] = 'RequestBuilder.java:' + '70' , $clinit_208() , POST);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getUrl_20(event_0){
  var skipEvent, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getUrl_20;
  skipEvent = ($location_0[stackIndex] = 'SkipTaskAction.java:' + '23' , dynamicCast(event_0, 253));
  returnTemp = $getTaskCompleteURL(($location_0[stackIndex] = 'SkipTaskAction.java:' + '25' , getInstance_2() , skipEvent.task.id_0), 'jbpm_skip_task');
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function handleSuccessfulResponse_18(controller, event_0, response){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = handleSuccessfulResponse_18;
  $location_0[stackIndex] = 'SkipTaskAction.java:' + '37' , $handleEvent(controller, ($location_0[stackIndex] = 'SkipTaskAction.java:' + '38' , $Event(($location_0[stackIndex] = 'SkipTaskAction.java:' + '38' , new Event_0), ($location_0[stackIndex] = 'ReloadAllTaskListsAction.java:' + '38' , $clinit_1057() , ID_32), null)));
  $stackDepth_0 = stackIndex - 1;
}

function SkipTaskAction(){
}

_ = SkipTaskAction.prototype = new AbstractRESTAction;
_.getClass$ = getClass_754;
_.getId = getId_18;
_.getRequestMethod = getRequestMethod_18;
_.getUrl_0 = getUrl_20;
_.handleSuccessfulResponse = handleSuccessfulResponse_18;
_.typeId$ = 509;
var ID_33;
function $TaskDetailView(this$static, openView){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $TaskDetailView;
  $location_0[stackIndex] = 'CaptionLayoutPanel.java:' + '57' , $CaptionLayoutPanel_0(this$static, 'Task details', false);
  $location_0[stackIndex] = 'Element.java:' + '688' , this$static.element['className'] = 'bpm-detail-panel';
  $location_0[stackIndex] = 'TaskDetailView.java:' + '64' , this$static.openView = openView;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $initialize_5(this$static){
  var deck, dropBox, p, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $initialize_5;
  if (!this$static.initialzed) {
    this$static.grid = ($location_0[stackIndex] = 'TaskDetailView.java:' + '78' , $PropertyGrid(($location_0[stackIndex] = 'TaskDetailView.java:' + '78' , new PropertyGrid), ($location_0[stackIndex] = 'TaskDetailView.java:' + '79' , initValues(_3Ljava_lang_String_2_classLit, 684, 1, ['ID:', 'Process:', 'Name:', 'Assignee:', 'Description:']))));
    if (this$static.openView) {
      deck = $DeckLayoutPanel(($location_0[stackIndex] = 'TaskDetailView.java:' + '85' , new DeckLayoutPanel));
      $location_0[stackIndex] = 'TaskDetailView.java:' + '86' , $add_20(deck, this$static.grid);
      this$static.participantPanel = $ParticipantPanel(($location_0[stackIndex] = 'TaskDetailView.java:' + '89' , new ParticipantPanel));
      $location_0[stackIndex] = 'ParticipantPanel.java:' + '124' , this$static.participantPanel.controller = this$static.controller;
      dropBox = $ListBox_0(($location_0[stackIndex] = 'TaskDetailView.java:' + '93' , new ListBox), false);
      $location_0[stackIndex] = 'Element.java:' + '688' , dropBox.element['className'] = 'bpm-operation-ui';
      $location_0[stackIndex] = 'ListBox.java:' + '215' , $insertItem(dropBox, 'Properties', 'Properties', -1);
      $insertItem(dropBox, 'Participants', 'Participants', -1);
      $location_0[stackIndex] = 'ListBox.java:' + '112' , add_11(dropBox, $TaskDetailView$1(($location_0[stackIndex] = 'TaskDetailView.java:' + '97' , new TaskDetailView$1), deck, dropBox));
      $location_0[stackIndex] = 'TaskDetailView.java:' + '104' , $add_20(deck, this$static.participantPanel);
      $location_0[stackIndex] = 'TaskDetailView.java:' + '106' , $add_17(this$static.caption, dropBox, ($location_0[stackIndex] = 'Caption.java:' + '61' , $clinit_641() , RIGHT));
      $location_0[stackIndex] = 'CaptionLayoutPanel.java:' + '91' , $add_26(this$static.body_0, deck, ($location_0[stackIndex] = 'TaskDetailView.java:' + '107' , $BoxLayoutData_4(($location_0[stackIndex] = 'TaskDetailView.java:' + '107' , new BoxLayoutData), ($location_0[stackIndex] = 'BoxLayoutData.java:' + '30' , $clinit_789() , BOTH))));
      $location_0[stackIndex] = 'TaskDetailView.java:' + '109' , $showWidget(deck, dropBox.element.selectedIndex);
    }
     else {
      p = $MosaicPanel(($location_0[stackIndex] = 'TaskDetailView.java:' + '113' , new MosaicPanel));
      $location_0[stackIndex] = 'TaskDetailView.java:' + '114' , $add_25(p, this$static.grid);
      $location_0[stackIndex] = 'CaptionLayoutPanel.java:' + '81' , $add_25(this$static.body_0, p);
    }
    $location_0[stackIndex] = 'TaskDetailView.java:' + '118' , this$static.initialzed = true;
  }
  $stackDepth_0 = stackIndex - 1;
}

function getClass_755(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_755;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_TaskDetailView_2_classLit;
}

function setController_11(controller){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = setController_11;
  $location_0[stackIndex] = 'TaskDetailView.java:' + '124' , this.controller = controller;
  $stackDepth_0 = stackIndex - 1;
}

function TaskDetailView(){
}

_ = TaskDetailView.prototype = new CaptionLayoutPanel;
_.getClass$ = getClass_755;
_.setController = setController_11;
_.typeId$ = 510;
_.controller = null;
_.grid = null;
_.initialzed = false;
_.openView = false;
_.participantPanel = null;
function $TaskDetailView$1(this$static, val$deck, val$dropBox){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $TaskDetailView$1;
  $location_0[stackIndex] = 'TaskDetailView.java:' + '97' , this$static.val$deck = val$deck;
  this$static.val$dropBox = val$dropBox;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $onChange(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $onChange;
  $location_0[stackIndex] = 'TaskDetailView.java:' + '99' , $showWidget(this$static.val$deck, this$static.val$dropBox.element.selectedIndex);
  $location_0[stackIndex] = 'LayoutComposite.java:' + '125' , ($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.val$deck.widget, 182)).layout_0();
  $stackDepth_0 = stackIndex - 1;
}

function getClass_756(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_756;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_TaskDetailView$1_2_classLit;
}

function TaskDetailView$1(){
}

_ = TaskDetailView$1.prototype = new Object_0;
_.getClass$ = getClass_756;
_.typeId$ = 511;
_.val$deck = null;
_.val$dropBox = null;
function $clinit_1061(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1061;
  $location_0[stackIndex] = 'UpdateDetailsAction.java:' + '32' , $clinit_1061 = nullMethod;
  $location_0[stackIndex] = 'UpdateDetailsAction.java:' + '35' , ID_34 = Lorg_jboss_bpm_console_client_task_UpdateDetailsAction_2_classLit.typeName;
  $stackDepth_0 = stackIndex - 1;
}

function execute_38(controller, object){
  var event_0, task, view, values, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = execute_38;
  event_0 = ($location_0[stackIndex] = 'UpdateDetailsAction.java:' + '39' , dynamicCast(object, 257));
  $location_0[stackIndex] = 'UpdateDetailsAction.java:' + '40' , task = event_0.task?event_0.task:null;
  view = ($location_0[stackIndex] = 'UpdateDetailsAction.java:' + '41' , dynamicCast(dynamicCast(($location_0[stackIndex] = 'Controller.java:' + '67' , $get_7(controller.views, event_0.viewRef)), 167), 258));
  task?(values = ($location_0[stackIndex] = 'TaskDetailView.java:' + '131' , initValues(_3Ljava_lang_String_2_classLit, 684, 1, ['' + ($location_0[stackIndex] = 'TaskRef.java:' + '86' , toString_18(task.id_0)), task.processId, task.name_0, task.assignee, ''])) , ($location_0[stackIndex] = 'TaskDetailView.java:' + '139' , $update_1(view.grid, values)) , view.openView && !!view.participantPanel && ($location_0[stackIndex] = 'TaskDetailView.java:' + '142' , $update_10(view.participantPanel, task)) , undefined):($location_0[stackIndex] = 'PropertyGrid.java:' + '79' , $initReset(view.grid) , view.openView && !!view.participantPanel && ($location_0[stackIndex] = 'TaskDetailView.java:' + '150' , $clearView_0(view.participantPanel)) , undefined);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_757(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_757;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_UpdateDetailsAction_2_classLit;
}

function UpdateDetailsAction(){
}

_ = UpdateDetailsAction.prototype = new Object_0;
_.execute_2 = execute_38;
_.getClass$ = getClass_757;
_.typeId$ = 512;
var ID_34;
function $AssignEvent(this$static, idRef, task){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $AssignEvent;
  $location_0[stackIndex] = 'AssignEvent.java:' + '36' , this$static.idRef = idRef;
  $location_0[stackIndex] = 'AssignEvent.java:' + '37' , this$static.task = task;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_758(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_758;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_events_AssignEvent_2_classLit;
}

function AssignEvent(){
}

_ = AssignEvent.prototype = new Object_0;
_.getClass$ = getClass_758;
_.typeId$ = 513;
_.idRef = null;
_.task = null;
function $DetailViewEvent(this$static, viewRef, task){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $DetailViewEvent;
  $location_0[stackIndex] = 'DetailViewEvent.java:' + '36' , this$static.viewRef = viewRef;
  $location_0[stackIndex] = 'DetailViewEvent.java:' + '37' , this$static.task = task;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_759(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_759;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_events_DetailViewEvent_2_classLit;
}

function DetailViewEvent(){
}

_ = DetailViewEvent.prototype = new Object_0;
_.getClass$ = getClass_759;
_.typeId$ = 514;
_.task = null;
_.viewRef = null;
function $TaskIdentityEvent(this$static, identity, task){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $TaskIdentityEvent;
  $location_0[stackIndex] = 'TaskIdentityEvent.java:' + '38' , this$static.identity = identity;
  $location_0[stackIndex] = 'TaskIdentityEvent.java:' + '39' , this$static.task = task;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_760(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_760;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_events_TaskIdentityEvent_2_classLit;
}

function TaskIdentityEvent(){
}

_ = TaskIdentityEvent.prototype = new Object_0;
_.getClass$ = getClass_760;
_.typeId$ = 515;
_.identity = null;
_.task = null;
function $clinit_1066(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1066;
  $location_0[stackIndex] = 'DateLocale.java:' + '27' , $clinit_1066 = nullMethod;
  $location_0[stackIndex] = 'DateLocale.java:' + '52' , SUPPORTED_DF_TOKENS = ($location_0[stackIndex] = 'Arrays.java:' + '99' , $Arrays$ArrayList(($location_0[stackIndex] = 'Arrays.java:' + '99' , new Arrays$ArrayList), ($location_0[stackIndex] = 'DateLocale.java:' + '52' , initValues(_3Ljava_lang_String_2_classLit, 684, 1, ['E', 'd', 'M', 'y', 'h', 'H', 'm', 's', 'a']))));
  $stackDepth_0 = stackIndex - 1;
}

function $DateLocale(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $DateLocale;
  $location_0[stackIndex] = 'DateLocale.java:' + '27' , $clinit_1066();
  this$static.MONTH_LONG = ($location_0[stackIndex] = 'DateLocale.java:' + '57' , initValues(_3Ljava_lang_String_2_classLit, 684, 1, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']));
  this$static.MONTH_SHORT = ($location_0[stackIndex] = 'DateLocale.java:' + '61' , initValues(_3Ljava_lang_String_2_classLit, 684, 1, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']));
  this$static.WEEKDAY_LONG = ($location_0[stackIndex] = 'DateLocale.java:' + '64' , initValues(_3Ljava_lang_String_2_classLit, 684, 1, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']));
  this$static.WEEKDAY_SHORT = ($location_0[stackIndex] = 'DateLocale.java:' + '67' , initValues(_3Ljava_lang_String_2_classLit, 684, 1, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']));
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_761(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_761;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_util_DateLocale_2_classLit;
}

function DateLocale(){
}

_ = DateLocale.prototype = new Object_0;
_.getClass$ = getClass_761;
_.typeId$ = 0;
var SUPPORTED_DF_TOKENS;
function $asDate(this$static){
  var df, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $asDate;
  if ($location_0[stackIndex] = 'JSONWalk.java:' + '150' , this$static.value_0.isString()) {
    df = $SimpleDateFormat(($location_0[stackIndex] = 'JSONWalk.java:' + '152' , new SimpleDateFormat));
    returnTemp = $parse_0(df, ($location_0[stackIndex] = 'JSONWalk.java:' + '153' , this$static.value_0.isString()).value_0);
    $stackDepth_0 = stackIndex - 1;
    return returnTemp;
  }
   else {
    throw $IllegalArgumentException_0(($location_0[stackIndex] = 'JSONWalk.java:' + '157' , new IllegalArgumentException), 'Not a date string: ' + this$static.value_0);
  }
  $stackDepth_0 = stackIndex - 1;
}

function $asInt(this$static){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $asInt;
  if ($location_0[stackIndex] = 'JSONWalk.java:' + '90' , this$static.value_0.isNumber()) {
    returnTemp = ~~Math.max(($location_0[stackIndex] = 'Cast.java:' + '185' , Math.min($Double(($location_0[stackIndex] = 'JSONWalk.java:' + '92' , new Double), this$static.value_0.isNumber().value_0).value_0, 2147483647)), -2147483648);
    $stackDepth_0 = stackIndex - 1;
    return returnTemp;
  }
   else {
    throw $IllegalArgumentException_0(($location_0[stackIndex] = 'JSONWalk.java:' + '96' , new IllegalArgumentException), 'Not a number: ' + this$static.value_0);
  }
  $stackDepth_0 = stackIndex - 1;
}

function $asLong(this$static){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $asLong;
  if ($location_0[stackIndex] = 'JSONWalk.java:' + '102' , this$static.value_0.isNumber()) {
    returnTemp = ($location_0[stackIndex] = 'Double.java:' + '145' , fromDouble($Double(($location_0[stackIndex] = 'JSONWalk.java:' + '104' , new Double), this$static.value_0.isNumber().value_0).value_0));
    $stackDepth_0 = stackIndex - 1;
    return returnTemp;
  }
   else {
    throw $IllegalArgumentException_0(($location_0[stackIndex] = 'JSONWalk.java:' + '108' , new IllegalArgumentException), 'Not a number: ' + this$static.value_0);
  }
  $stackDepth_0 = stackIndex - 1;
}

function $SimpleDateFormat(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $SimpleDateFormat;
  this$static.locale = $DateLocale(($location_0[stackIndex] = 'SimpleDateFormat.java:' + '23' , new DateLocale));
  $location_0[stackIndex] = 'SimpleDateFormat.java:' + '44' , this$static.format = 'yyyy-MM-dd HH:mm:ss';
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $format_2(this$static, date){
  var currentToken, currentTokenType, f, i, lastTokenType, thisChar, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $format_2;
  $location_0[stackIndex] = 'SimpleDateFormat.java:' + '55' , f = '';
  if (this$static.format != null && this$static.format.length > 0) {
    $location_0[stackIndex] = 'SimpleDateFormat.java:' + '57' , lastTokenType = null;
    $location_0[stackIndex] = 'SimpleDateFormat.java:' + '58' , currentToken = '';
    for ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '59' , i = 0; i < this$static.format.length; $location_0[stackIndex] = 'SimpleDateFormat.java:' + '59' , ++i) {
      thisChar = ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '60' , $substring_0(this$static.format, i, i + 1));
      $location_0[stackIndex] = 'SimpleDateFormat.java:' + '61' , currentTokenType = ($location_0[stackIndex] = 'Arrays.java:' + '48' , $indexOf(($location_0[stackIndex] = 'DateLocale.java:' + '52' , $clinit_1066() , SUPPORTED_DF_TOKENS), thisChar)) != -1?thisChar:'';
      if (($location_0[stackIndex] = 'SimpleDateFormat.java:' + '63' , $equals_4(currentTokenType, lastTokenType)) || i == 0) {
        $location_0[stackIndex] = 'SimpleDateFormat.java:' + '64' , currentToken += thisChar;
        $location_0[stackIndex] = 'SimpleDateFormat.java:' + '65' , lastTokenType = currentTokenType;
      }
       else {
        ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '67' , $equals_4('', lastTokenType))?($location_0[stackIndex] = 'SimpleDateFormat.java:' + '68' , f += currentToken):(f += ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '70' , $handleToken(this$static, currentToken, date)));
        $location_0[stackIndex] = 'SimpleDateFormat.java:' + '71' , currentToken = thisChar;
        $location_0[stackIndex] = 'SimpleDateFormat.java:' + '72' , lastTokenType = currentTokenType;
      }
    }
    ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '75' , $equals_4('', lastTokenType))?($location_0[stackIndex] = 'SimpleDateFormat.java:' + '76' , f += currentToken):(f += ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '78' , $handleToken(this$static, currentToken, date)));
  }
  $stackDepth_0 = stackIndex - 1;
  return f;
}

function $handleToken(this$static, token, date){
  var h, hour, response, tc, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $handleToken;
  $location_0[stackIndex] = 'SimpleDateFormat.java:' + '94' , response = token;
  $location_0[stackIndex] = 'SimpleDateFormat.java:' + '95' , tc = ($location_0[stackIndex] = 'String.java:' + '718' , token.substr(0, 1 - 0));
  if ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '96' , $equals_4('E', tc)) {
    token.length > 3?(response = ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '98' , this$static.locale.WEEKDAY_LONG[$location_0[stackIndex] = 'Date.java:' + '174' , date.checkJsDate() , ($location_0[stackIndex] = 'Date.java:' + '175' , date.jsdate.getDay())])):(response = ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '100' , this$static.locale.WEEKDAY_SHORT[$location_0[stackIndex] = 'Date.java:' + '174' , date.checkJsDate() , ($location_0[stackIndex] = 'Date.java:' + '175' , date.jsdate.getDay())]));
  }
   else if ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '101' , $equals_4('d', tc)) {
    token.length == 1?($location_0[stackIndex] = 'SimpleDateFormat.java:' + '103' , response = '' + ($location_0[stackIndex] = 'Date.java:' + '169' , date.checkJsDate() , ($location_0[stackIndex] = 'Date.java:' + '170' , date.jsdate.getDate()))):($location_0[stackIndex] = 'SimpleDateFormat.java:' + '105' , response = ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '171' , res = '' + (($location_0[stackIndex] = 'Date.java:' + '169' , date.checkJsDate() , ($location_0[stackIndex] = 'Date.java:' + '170' , date.jsdate.getDate())) + 1900) , ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '172' , $substring(res, res.length - 2))));
  }
   else if ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '106' , $equals_4('M', tc)) {
    switch (token.length) {
      case 1:
        $location_0[stackIndex] = 'SimpleDateFormat.java:' + '109' , response = '' + (($location_0[stackIndex] = 'Date.java:' + '189' , date.checkJsDate() , ($location_0[stackIndex] = 'Date.java:' + '190' , date.jsdate.getMonth())) + 1);
        break;
      case 2:
        $location_0[stackIndex] = 'SimpleDateFormat.java:' + '112' , response = ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '171' , res_0 = '' + (($location_0[stackIndex] = 'Date.java:' + '189' , date.checkJsDate() , ($location_0[stackIndex] = 'Date.java:' + '190' , date.jsdate.getMonth())) + 1 + 1900) , ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '172' , $substring(res_0, res_0.length - 2)));
        break;
      case 3:
        response = ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '115' , this$static.locale.MONTH_SHORT[$location_0[stackIndex] = 'Date.java:' + '189' , date.checkJsDate() , ($location_0[stackIndex] = 'Date.java:' + '190' , date.jsdate.getMonth())]);
        break;
      default:response = ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '118' , this$static.locale.MONTH_LONG[$location_0[stackIndex] = 'Date.java:' + '189' , date.checkJsDate() , ($location_0[stackIndex] = 'Date.java:' + '190' , date.jsdate.getMonth())]);
    }
  }
   else if ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '121' , $equals_4('y', tc)) {
    token.length > 2?($location_0[stackIndex] = 'SimpleDateFormat.java:' + '123' , response = '' + (($location_0[stackIndex] = 'Date.java:' + '208' , date.checkJsDate() , ($location_0[stackIndex] = 'Date.java:' + '209' , date.jsdate.getFullYear()) - 1900) + 1900)):($location_0[stackIndex] = 'SimpleDateFormat.java:' + '125' , response = ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '171' , res_1 = '' + (($location_0[stackIndex] = 'Date.java:' + '208' , date.checkJsDate() , ($location_0[stackIndex] = 'Date.java:' + '209' , date.jsdate.getFullYear()) - 1900) + 1900) , ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '172' , $substring(res_1, res_1.length - 2))));
  }
   else if ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '126' , $equals_4('h', tc)) {
    h = ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '127' , date.getHours_0());
    h == 0?($location_0[stackIndex] = 'SimpleDateFormat.java:' + '129' , h = 12):h > 12 && ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '131' , h -= 12);
    token.length > 1?($location_0[stackIndex] = 'SimpleDateFormat.java:' + '133' , response = ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '171' , res_6 = '' + (h + 1900) , ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '172' , $substring(res_6, res_6.length - 2)))):($location_0[stackIndex] = 'SimpleDateFormat.java:' + '135' , response = '' + h);
  }
   else if ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '136' , $equals_4('H', tc)) {
    token.length > 1?($location_0[stackIndex] = 'SimpleDateFormat.java:' + '138' , response = ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '171' , res_3 = '' + (($location_0[stackIndex] = 'SimpleDateFormat.java:' + '138' , date.getHours_0()) + 1900) , ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '172' , $substring(res_3, res_3.length - 2)))):(response = '' + ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '140' , date.getHours_0()));
  }
   else if ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '141' , $equals_4('m', tc)) {
    token.length > 1?($location_0[stackIndex] = 'SimpleDateFormat.java:' + '143' , response = ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '171' , res_4 = '' + (($location_0[stackIndex] = 'SimpleDateFormat.java:' + '143' , date.getMinutes_0()) + 1900) , ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '172' , $substring(res_4, res_4.length - 2)))):(response = '' + ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '145' , date.getMinutes_0()));
  }
   else if ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '146' , $equals_4('s', tc)) {
    token.length > 1?($location_0[stackIndex] = 'SimpleDateFormat.java:' + '148' , response = ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '171' , res_5 = '' + (($location_0[stackIndex] = 'SimpleDateFormat.java:' + '148' , date.getSeconds_0()) + 1900) , ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '172' , $substring(res_5, res_5.length - 2)))):(response = '' + ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '150' , date.getSeconds_0()));
  }
   else if ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '151' , $equals_4('a', tc)) {
    hour = ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '152' , date.getHours_0());
    hour > 11?(response = ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '154' , $clinit_1066() , 'PM')):(response = ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '156' , $clinit_1066() , 'AM'));
  }
  $stackDepth_0 = stackIndex - 1;
  return response;
}

function $parse_0(this$static, source){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $parse_0;
  returnTemp = ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '187' , parse_0(source, this$static.format));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getClass_764(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_764;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_util_SimpleDateFormat_2_classLit;
}

function SimpleDateFormat(){
}

_ = SimpleDateFormat.prototype = new Object_0;
_.getClass$ = getClass_764;
_.typeId$ = 0;
_.format = null;
function $clinit_1070(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1070;
  $location_0[stackIndex] = 'SimpleDateParser.java:' + '34' , $clinit_1070 = nullMethod;
  TOKENS = ($location_0[stackIndex] = 'SimpleDateParser.java:' + '55' , initValues(_3_3Ljava_lang_String_2_classLit, 732, 133, [($location_0[stackIndex] = 'SimpleDateParser.java:' + '56' , initValues(_3Ljava_lang_String_2_classLit, 684, 1, ['SSSS', '(\\d\\d\\d\\d)', 'S'])), ($location_0[stackIndex] = 'SimpleDateParser.java:' + '57' , initValues(_3Ljava_lang_String_2_classLit, 684, 1, ['SSS', '(\\d\\d\\d)', 'S'])), ($location_0[stackIndex] = 'SimpleDateParser.java:' + '58' , initValues(_3Ljava_lang_String_2_classLit, 684, 1, ['SS', '(\\d\\d)', 'S'])), ($location_0[stackIndex] = 'SimpleDateParser.java:' + '59' , initValues(_3Ljava_lang_String_2_classLit, 684, 1, ['S', '(\\d)', 'S'])), ($location_0[stackIndex] = 'SimpleDateParser.java:' + '60' , initValues(_3Ljava_lang_String_2_classLit, 684, 1, ['ss', '(\\d\\d)', 's'])), ($location_0[stackIndex] = 'SimpleDateParser.java:' + '61' , initValues(_3Ljava_lang_String_2_classLit, 684, 1, ['s', '(\\d)', 's'])), ($location_0[stackIndex] = 'SimpleDateParser.java:' + '62' , initValues(_3Ljava_lang_String_2_classLit, 684, 1, ['mm', '(\\d\\d)', 'm'])), ($location_0[stackIndex] = 'SimpleDateParser.java:' + '63' , initValues(_3Ljava_lang_String_2_classLit, 684, 1, ['m', '(\\d)', 'm'])), ($location_0[stackIndex] = 'SimpleDateParser.java:' + '64' , initValues(_3Ljava_lang_String_2_classLit, 684, 1, ['HH', '(\\d\\d)', 'H'])), ($location_0[stackIndex] = 'SimpleDateParser.java:' + '65' , initValues(_3Ljava_lang_String_2_classLit, 684, 1, ['H', '(\\d)', 'H'])), ($location_0[stackIndex] = 'SimpleDateParser.java:' + '66' , initValues(_3Ljava_lang_String_2_classLit, 684, 1, ['dd', '(\\d\\d)', 'd'])), ($location_0[stackIndex] = 'SimpleDateParser.java:' + '67' , initValues(_3Ljava_lang_String_2_classLit, 684, 1, ['d', '(\\d)', 'd'])), ($location_0[stackIndex] = 'SimpleDateParser.java:' + '68' , initValues(_3Ljava_lang_String_2_classLit, 684, 1, ['MM', '(\\d\\d)', 'M'])), ($location_0[stackIndex] = 'SimpleDateParser.java:' + '69' , initValues(_3Ljava_lang_String_2_classLit, 684, 1, ['M', '(\\d)', 'M'])), ($location_0[stackIndex] = 'SimpleDateParser.java:' + '70' , initValues(_3Ljava_lang_String_2_classLit, 684, 1, ['yyyy', '(\\d\\d\\d\\d)', 'y'])), ($location_0[stackIndex] = 'SimpleDateParser.java:' + '71' , initValues(_3Ljava_lang_String_2_classLit, 684, 1, ['yyy', '(\\d\\d\\d)', 'y'])), ($location_0[stackIndex] = 'SimpleDateParser.java:' + '72' , initValues(_3Ljava_lang_String_2_classLit, 684, 1, ['yy', '(\\d\\d)', 'y'])), ($location_0[stackIndex] = 'SimpleDateParser.java:' + '73' , initValues(_3Ljava_lang_String_2_classLit, 684, 1, ['y', '(\\d)', 'y']))]));
  $stackDepth_0 = stackIndex - 1;
}

function $SimpleDateParser(this$static, format){
  var args, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $SimpleDateParser;
  $location_0[stackIndex] = 'SimpleDateParser.java:' + '137' , $clinit_1070();
  args = ($location_0[stackIndex] = 'SimpleDateParser.java:' + '138' , initValues(_3Ljava_lang_String_2_classLit, 684, 1, ['', '']));
  $location_0[stackIndex] = 'SimpleDateParser.java:' + '139' , _parse(format, args);
  this$static.regularExpression = $Pattern(($location_0[stackIndex] = 'SimpleDateParser.java:' + '140' , new Pattern), args[0]);
  this$static.instructions = ($location_0[stackIndex] = 'SimpleDateParser.java:' + '141' , args[1]);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $parse_1(this$static, input){
  var date, group, match, matches, regExp, regExp_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $parse_1;
  date = $Date_0(($location_0[stackIndex] = 'SimpleDateParser.java:' + '145' , new Date_1), 0, 0, 1, 0, 0, 0);
  matches = ($location_0[stackIndex] = 'SimpleDateParser.java:' + '146' , $match(this$static.regularExpression, input));
  if (matches == null)
    throw $location_0[stackIndex] = 'SimpleDateParser.java:' + '148' , $IllegalArgumentException_0(($location_0[stackIndex] = 'SimpleDateParser.java:' + '148' , new IllegalArgumentException), input + ' does not match ' + ($location_0[stackIndex] = 'Pattern.java:' + '157' , regExp = this$static.regularExpression.regExp , regExp.source));
  if (matches.length - 1 != this$static.instructions.length)
    throw $location_0[stackIndex] = 'SimpleDateParser.java:' + '150' , $IllegalArgumentException_0(($location_0[stackIndex] = 'SimpleDateParser.java:' + '150' , new IllegalArgumentException), 'Different group count - ' + input + ' does not match ' + ($location_0[stackIndex] = 'Pattern.java:' + '157' , regExp_0 = this$static.regularExpression.regExp , regExp_0.source));
  for ($location_0[stackIndex] = 'SimpleDateParser.java:' + '151' , group = 0; group < this$static.instructions.length; $location_0[stackIndex] = 'SimpleDateParser.java:' + '151' , ++group) {
    match = ($location_0[stackIndex] = 'SimpleDateParser.java:' + '152' , matches[group + 1]);
    $location_0[stackIndex] = 'SimpleDateParser.java:' + '153' , load(date, match, '' + ($location_0[stackIndex] = 'Cast.java:' + '44' , String.fromCharCode(($location_0[stackIndex] = 'String.java:' + '419' , this$static.instructions.charCodeAt(group)))));
  }
  $stackDepth_0 = stackIndex - 1;
  return date;
}

function _parse(format, args){
  var datePattern, end, i, row, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = _parse;
  if (format.length == 0) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  if (($location_0[stackIndex] = 'String.java:' + '497' , format.indexOf("'")) == 0) {
    $location_0[stackIndex] = 'SimpleDateParser.java:' + '84' , format = ($location_0[stackIndex] = 'String.java:' + '714' , format.substr(1, format.length - 1));
    $location_0[stackIndex] = 'SimpleDateParser.java:' + '85' , end = ($location_0[stackIndex] = 'String.java:' + '497' , format.indexOf("'"));
    if (end == -1)
      throw $IllegalArgumentException_0(($location_0[stackIndex] = 'SimpleDateParser.java:' + '87' , new IllegalArgumentException), 'Unmatched single quotes.');
    args[0] += ($location_0[stackIndex] = 'SimpleDateParser.java:' + '88' , quote(($location_0[stackIndex] = 'String.java:' + '718' , format.substr(0, end - 0))));
    $location_0[stackIndex] = 'SimpleDateParser.java:' + '89' , format = ($location_0[stackIndex] = 'String.java:' + '714' , format.substr(end + 1, format.length - (end + 1)));
  }
  for ($location_0[stackIndex] = 'SimpleDateParser.java:' + '91' , i = 0; i < TOKENS.length; $location_0[stackIndex] = 'SimpleDateParser.java:' + '91' , ++i) {
    row = ($location_0[stackIndex] = 'SimpleDateParser.java:' + '92' , TOKENS[i]);
    datePattern = ($location_0[stackIndex] = 'SimpleDateParser.java:' + '93' , row[0]);
    if (($location_0[stackIndex] = 'String.java:' + '497' , format.indexOf(datePattern)) != 0)
      continue;
    format = ($location_0[stackIndex] = 'SimpleDateParser.java:' + '96' , $substring(format, datePattern.length));
    args[0] += ($location_0[stackIndex] = 'SimpleDateParser.java:' + '97' , row[1]);
    args[1] += ($location_0[stackIndex] = 'SimpleDateParser.java:' + '98' , row[2]);
    $location_0[stackIndex] = 'SimpleDateParser.java:' + '99' , _parse(format, args);
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  args[0] += ($location_0[stackIndex] = 'SimpleDateParser.java:' + '102' , quote('' + ($location_0[stackIndex] = 'Cast.java:' + '44' , String.fromCharCode(($location_0[stackIndex] = 'String.java:' + '419' , format.charCodeAt(0))))));
  $location_0[stackIndex] = 'SimpleDateParser.java:' + '103' , format = ($location_0[stackIndex] = 'String.java:' + '714' , format.substr(1, format.length - 1));
  $location_0[stackIndex] = 'SimpleDateParser.java:' + '104' , _parse(format, args);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_765(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_765;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_util_SimpleDateParser_2_classLit;
}

function load(date, text, component){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = load;
  $location_0[stackIndex] = 'SimpleDateParser.java:' + '108' , $equals_4(component, 'S');
  ($location_0[stackIndex] = 'SimpleDateParser.java:' + '112' , $equals_4(component, 's')) && ($location_0[stackIndex] = 'SimpleDateParser.java:' + '113' , date.setSeconds_0(($location_0[stackIndex] = 'Integer.java:' + '117' , __parseAndValidateInt(text, 10, -2147483648, 2147483647))));
  ($location_0[stackIndex] = 'SimpleDateParser.java:' + '116' , $equals_4(component, 'm')) && ($location_0[stackIndex] = 'SimpleDateParser.java:' + '117' , date.setMinutes_0(($location_0[stackIndex] = 'Integer.java:' + '117' , __parseAndValidateInt(text, 10, -2147483648, 2147483647))));
  ($location_0[stackIndex] = 'SimpleDateParser.java:' + '120' , $equals_4(component, 'H')) && ($location_0[stackIndex] = 'SimpleDateParser.java:' + '121' , date.setHours_0(($location_0[stackIndex] = 'Integer.java:' + '117' , __parseAndValidateInt(text, 10, -2147483648, 2147483647))));
  ($location_0[stackIndex] = 'SimpleDateParser.java:' + '124' , $equals_4(component, 'd')) && ($location_0[stackIndex] = 'SimpleDateParser.java:' + '125' , $setDate(date, ($location_0[stackIndex] = 'Integer.java:' + '117' , __parseAndValidateInt(text, 10, -2147483648, 2147483647))));
  ($location_0[stackIndex] = 'SimpleDateParser.java:' + '127' , $equals_4(component, 'M')) && ($location_0[stackIndex] = 'SimpleDateParser.java:' + '128' , $setMonth(date, ($location_0[stackIndex] = 'Integer.java:' + '117' , __parseAndValidateInt(text, 10, -2147483648, 2147483647)) - 1));
  ($location_0[stackIndex] = 'SimpleDateParser.java:' + '130' , $equals_4(component, 'y')) && ($location_0[stackIndex] = 'SimpleDateParser.java:' + '132' , $setYear(date, ($location_0[stackIndex] = 'Integer.java:' + '117' , __parseAndValidateInt(text, 10, -2147483648, 2147483647)) - 1900));
  $stackDepth_0 = stackIndex - 1;
}

function parse_0(input, pattern){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = parse_0;
  $location_0[stackIndex] = 'SimpleDateParser.java:' + '158' , $clinit_1070();
  returnTemp = $parse_1($SimpleDateParser(($location_0[stackIndex] = 'SimpleDateParser.java:' + '159' , new SimpleDateParser), pattern), input);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function SimpleDateParser(){
}

_ = SimpleDateParser.prototype = new Object_0;
_.getClass$ = getClass_765;
_.typeId$ = 0;
_.instructions = '';
_.regularExpression = null;
var TOKENS;
function addMaximizeButton(windowPanel, captionRegion){
  var maximizeBtn, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = addMaximizeButton;
  maximizeBtn = ($location_0[stackIndex] = 'WindowUtil.java:' + '42' , $ImageButton(($location_0[stackIndex] = 'WindowUtil.java:' + '42' , new ImageButton), ($location_0[stackIndex] = 'WindowUtil.java:' + '43' , $clinit_640() , ($location_0[stackIndex] = 'CaptionImages_generatedBundle.java:' + '65' , $clinit_642()) , windowMaximize_SINGLETON)));
  $location_0[stackIndex] = 'ImageButton.java:' + '63' , add_12(maximizeBtn, $WindowUtil$1(($location_0[stackIndex] = 'WindowUtil.java:' + '44' , new WindowUtil$1), windowPanel));
  $addWindowStateListener(windowPanel, $WindowUtil$2(($location_0[stackIndex] = 'WindowUtil.java:' + '53' , new WindowUtil$2), maximizeBtn));
  $location_0[stackIndex] = 'WindowUtil.java:' + '65' , $add_17(windowPanel.panel.caption, maximizeBtn, captionRegion);
  $stackDepth_0 = stackIndex - 1;
}

function addMinimizeButton(windowPanel, captionRegion){
  var minimizeBtn, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = addMinimizeButton;
  minimizeBtn = ($location_0[stackIndex] = 'WindowUtil.java:' + '74' , $ImageButton(($location_0[stackIndex] = 'WindowUtil.java:' + '74' , new ImageButton), ($location_0[stackIndex] = 'WindowUtil.java:' + '75' , $clinit_640() , ($location_0[stackIndex] = 'CaptionImages_generatedBundle.java:' + '69' , $clinit_642()) , windowMinimize_SINGLETON)));
  $location_0[stackIndex] = 'ImageButton.java:' + '63' , add_12(minimizeBtn, $WindowUtil$3(($location_0[stackIndex] = 'WindowUtil.java:' + '76' , new WindowUtil$3), windowPanel));
  $location_0[stackIndex] = 'WindowUtil.java:' + '81' , $add_17(windowPanel.panel.caption, minimizeBtn, captionRegion);
  $stackDepth_0 = stackIndex - 1;
}

function $WindowUtil$1(this$static, val$windowPanel){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $WindowUtil$1;
  $location_0[stackIndex] = 'WindowUtil.java:' + '44' , this$static.val$windowPanel = val$windowPanel;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_766(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_766;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_util_WindowUtil$1_2_classLit;
}

function onClick_35(sender){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClick_35;
  this.val$windowPanel.windowState == ($location_0[stackIndex] = 'WindowPanel.java:' + '118' , $clinit_737() , MAXIMIZED)?($location_0[stackIndex] = 'WindowUtil.java:' + '47' , $setWindowState(this.val$windowPanel, NORMAL)):($location_0[stackIndex] = 'WindowUtil.java:' + '49' , $setWindowState(this.val$windowPanel, MAXIMIZED));
  $stackDepth_0 = stackIndex - 1;
}

function WindowUtil$1(){
}

_ = WindowUtil$1.prototype = new Object_0;
_.getClass$ = getClass_766;
_.onClick_0 = onClick_35;
_.typeId$ = 516;
_.val$windowPanel = null;
function $WindowUtil$2(this$static, val$maximizeBtn){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $WindowUtil$2;
  $location_0[stackIndex] = 'WindowUtil.java:' + '53' , this$static.val$maximizeBtn = val$maximizeBtn;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_767(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_767;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_util_WindowUtil$2_2_classLit;
}

function onWindowStateChange_0(sender, windowState, windowState1){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onWindowStateChange_0;
  sender.windowState == ($location_0[stackIndex] = 'WindowPanel.java:' + '118' , $clinit_737() , MAXIMIZED)?$setImage(this.val$maximizeBtn, ($location_0[stackIndex] = 'WindowUtil.java:' + '58' , $createImage(($location_0[stackIndex] = 'WindowUtil.java:' + '58' , $clinit_640() , ($location_0[stackIndex] = 'CaptionImages_generatedBundle.java:' + '73' , $clinit_642()) , windowRestore_SINGLETON)))):$setImage(this.val$maximizeBtn, ($location_0[stackIndex] = 'WindowUtil.java:' + '60' , $createImage(($location_0[stackIndex] = 'WindowUtil.java:' + '60' , $clinit_640() , ($location_0[stackIndex] = 'CaptionImages_generatedBundle.java:' + '65' , $clinit_642()) , windowMaximize_SINGLETON))));
  $stackDepth_0 = stackIndex - 1;
}

function WindowUtil$2(){
}

_ = WindowUtil$2.prototype = new Object_0;
_.getClass$ = getClass_767;
_.onWindowStateChange = onWindowStateChange_0;
_.typeId$ = 517;
_.val$maximizeBtn = null;
function $WindowUtil$3(this$static, val$windowPanel){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $WindowUtil$3;
  $location_0[stackIndex] = 'WindowUtil.java:' + '76' , this$static.val$windowPanel = val$windowPanel;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_768(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_768;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_util_WindowUtil$3_2_classLit;
}

function onClick_36(sender){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClick_36;
  $location_0[stackIndex] = 'WindowUtil.java:' + '78' , $setWindowState(this.val$windowPanel, ($location_0[stackIndex] = 'WindowPanel.java:' + '118' , $clinit_737() , NORMAL));
  $stackDepth_0 = stackIndex - 1;
}

function WindowUtil$3(){
}

_ = WindowUtil$3.prototype = new Object_0;
_.getClass$ = getClass_768;
_.onClick_0 = onClick_36;
_.typeId$ = 518;
_.val$windowPanel = null;
function $Pattern(this$static, pattern){
  var sFlags, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $Pattern;
  $location_0[stackIndex] = 'Pattern.java:' + '121' , this$static.regExp = ($location_0[stackIndex] = 'Pattern.java:' + '59' , sFlags = '' , (0 & 1) != 0 && ($location_0[stackIndex] = 'Pattern.java:' + '61' , sFlags += 'm') , (0 & 2) != 0 && ($location_0[stackIndex] = 'Pattern.java:' + '63' , sFlags += 'i') , ($location_0[stackIndex] = 'Pattern.java:' + '69' , new RegExp(pattern, sFlags)));
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $_match(this$static, text, matches){
  var regExp = this$static.regExp, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $_match;
  var result = ($location_0[stackIndex] = 'Pattern.java:' + '74' , text.match(regExp));
  if (result == null) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  for (var i = 0; i < result.length; $location_0[stackIndex] = 'Pattern.java:' + '72' , i++)
    matches.add_0(($location_0[stackIndex] = 'Pattern.java:' + '77' , result[i]));
  $stackDepth_0 = stackIndex - 1;
}

function $match(this$static, text){
  var arr, i, matches, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $match;
  matches = $ArrayList(($location_0[stackIndex] = 'Pattern.java:' + '134' , new ArrayList));
  $location_0[stackIndex] = 'Pattern.java:' + '135' , $_match(this$static, text, matches);
  arr = ($location_0[stackIndex] = 'Pattern.java:' + '136' , initDim(_3Ljava_lang_String_2_classLit, 684, 1, matches.size_0, 0));
  for ($location_0[stackIndex] = 'Pattern.java:' + '137' , i = 0; i < matches.size_0; $location_0[stackIndex] = 'Pattern.java:' + '137' , ++i)
    arr[i] = ($location_0[stackIndex] = 'ArrayList.java:' + '157' , checkIndex(i, matches.size_0) , ($location_0[stackIndex] = 'Pattern.java:' + '138' , toString__devirtual$(($location_0[stackIndex] = 'ArrayList.java:' + '158' , matches.array[i]))));
  $stackDepth_0 = stackIndex - 1;
  return arr;
}

function getClass_769(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_769;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_util_regex_Pattern_2_classLit;
}

function quote(input){
  var i, output, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = quote;
  $location_0[stackIndex] = 'Pattern.java:' + '100' , output = '';
  for ($location_0[stackIndex] = 'Pattern.java:' + '101' , i = 0; i < input.length; $location_0[stackIndex] = 'Pattern.java:' + '101' , ++i) {
    $location_0[stackIndex] = 'Pattern.java:' + '102' , output += '\\' + ($location_0[stackIndex] = 'Cast.java:' + '44' , String.fromCharCode(($location_0[stackIndex] = 'String.java:' + '419' , input.charCodeAt(i))));
  }
  $stackDepth_0 = stackIndex - 1;
  return output;
}

function toString_59(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = toString_59;
  returnTemp = ($location_0[stackIndex] = 'JavaScriptObject.java:' + '161' , toStringSimple(this.regExp));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function Pattern(){
}

_ = Pattern.prototype = new Object_0;
_.getClass$ = getClass_769;
_.toString$ = toString_59;
_.typeId$ = 0;
_.regExp = null;
function $clinit_1219(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1219;
  $location_0[stackIndex] = 'Workspace.java:' + '57' , $clinit_1219 = nullMethod;
  toolSets_0 = $ArrayList(($location_0[stackIndex] = 'Workspace.java:' + '61' , new ArrayList));
  $stackDepth_0 = stackIndex - 1;
}

var toolSets_0;
function $set_4(key, value){
  var twoWeeks, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $set_4;
  twoWeeks = $Date_1(($location_0[stackIndex] = 'CookiePreferences.java:' + '44' , new Date_1), ($location_0[stackIndex] = 'CookiePreferences.java:' + '44' , add_1(($location_0[stackIndex] = 'System.java:' + '93' , fromDouble(($location_0[stackIndex] = 'System.java:' + '126' , new Date).getTime())), P48190800_longLit)));
  $location_0[stackIndex] = 'Cookies.java:' + '158' , setCookie(key, value, twoWeeks, null, null, false);
  $stackDepth_0 = stackIndex - 1;
}

var Ljava_util_EventObject_2_classLit = createForClass('java.util.', 'EventObject'), Lcom_google_gwt_event_dom_client_ChangeEvent_2_classLit = createForClass('com.google.gwt.event.dom.client.', 'ChangeEvent'), Lcom_google_gwt_lang_asyncloaders_AsyncLoader2_1_1Super_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader2__Super'), Lcom_google_gwt_lang_asyncloaders_AsyncLoader3_1_1Super_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader3__Super'), Lcom_google_gwt_lang_asyncloaders_AsyncLoader4_1_1Super_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader4__Super'), Lcom_google_gwt_lang_asyncloaders_AsyncLoader5_1_1Super_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader5__Super'), Lcom_google_gwt_lang_asyncloaders_AsyncLoader6_1_1Super_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader6__Super'), Lcom_google_gwt_lang_asyncloaders_AsyncLoader7_1_1Super_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader7__Super'), Lcom_google_gwt_user_client_ui_impl_ClippedImageImpl$1_2_classLit = createForClass('com.google.gwt.user.client.ui.impl.', 'ClippedImageImpl$1'), Lcom_google_gwt_user_client_ui_ComplexPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ComplexPanel$1'), Lcom_google_gwt_user_client_ui_TabBar_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'TabBar'), Lcom_google_gwt_user_client_ui_DecoratedTabBar_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'DecoratedTabBar'), Lcom_google_gwt_user_client_ui_FlowPanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'FlowPanel'), Lcom_google_gwt_user_client_ui_Frame_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Frame'), Lcom_google_gwt_user_client_ui_Image$UnclippedState_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Image$UnclippedState'), Lcom_google_gwt_user_client_ui_ListBox_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ListBox'), Lcom_google_gwt_user_client_ui_ListenerWrapper$WrappedChangeListener_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ListenerWrapper$WrappedChangeListener'), Lcom_google_gwt_user_client_ui_ListenerWrapper$WrappedClickListener_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ListenerWrapper$WrappedClickListener'), Lcom_google_gwt_user_client_ui_ListenerWrapper$WrappedTabListener_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ListenerWrapper$WrappedTabListener'), Lcom_google_gwt_user_client_ui_ListenerWrapper$WrappedTreeListener_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'ListenerWrapper$WrappedTreeListener'), Lcom_google_gwt_user_client_ui_MenuBar_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'MenuBar'), Lcom_google_gwt_user_client_ui_MenuItem_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'MenuItem'), Lcom_google_gwt_user_client_ui_MenuItemSeparator_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'MenuItemSeparator'), Lcom_google_gwt_user_client_ui_TabBar$ClickDelegatePanel_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'TabBar$ClickDelegatePanel'), Lcom_google_gwt_user_client_ui_Tree_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Tree'), Lcom_google_gwt_user_client_ui_Tree$ImageAdapter_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Tree$ImageAdapter'), Lcom_google_gwt_user_client_ui_TreeItem_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'TreeItem'), Lcom_google_gwt_user_client_ui_Tree$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'Tree$1'), Lcom_google_gwt_user_client_ui_TreeItem$TreeItemAnimation_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'TreeItem$TreeItemAnimation'), Lcom_google_gwt_user_client_ui_WidgetIterators$1_2_classLit = createForClass('com.google.gwt.user.client.ui.', 'WidgetIterators$1'), Ljava_util_Comparators$1_2_classLit = createForClass('java.util.', 'Comparators$1'), Ljava_util_TreeMap_2_classLit = createForClass('java.util.', 'TreeMap'), Ljava_util_TreeMap$EntryIterator_2_classLit = createForClass('java.util.', 'TreeMap$EntryIterator'), Ljava_util_TreeMap$EntrySet_2_classLit = createForClass('java.util.', 'TreeMap$EntrySet'), Ljava_util_TreeMap$Node_2_classLit = createForClass('java.util.', 'TreeMap$Node'), _3Ljava_util_TreeMap$Node_2_classLit = createForArray('[Ljava.util.', 'TreeMap$Node;', Ljava_util_TreeMap$Node_2_classLit), Ljava_util_TreeMap$State_2_classLit = createForClass('java.util.', 'TreeMap$State'), Ljava_util_TreeMap$SubMapType_2_classLit = createForEnum('java.util.', 'TreeMap$SubMapType', values_5), _3Ljava_util_TreeMap$SubMapType_2_classLit = createForArray('[Ljava.util.', 'TreeMap$SubMapType;', Ljava_util_TreeMap$SubMapType_2_classLit), Ljava_util_TreeMap$SubMapType$1_2_classLit = createForEnum('java.util.', 'TreeMap$SubMapType$1', null), Ljava_util_TreeMap$SubMapType$2_2_classLit = createForEnum('java.util.', 'TreeMap$SubMapType$2', null), Ljava_util_TreeMap$SubMapType$3_2_classLit = createForEnum('java.util.', 'TreeMap$SubMapType$3', null), Ljava_util_TreeMap$1_2_classLit = createForClass('java.util.', 'TreeMap$1'), Ljava_util_TreeSet_2_classLit = createForClass('java.util.', 'TreeSet'), Lorg_gwt_beansbinding_observablecollections_client_ObservableCollections$ObservableListImpl_2_classLit = createForClass('org.gwt.beansbinding.observablecollections.client.', 'ObservableCollections$ObservableListImpl'), Lorg_gwt_mosaic_core_client_util_DelayedRunnable_2_classLit = createForClass('org.gwt.mosaic.core.client.util.', 'DelayedRunnable'), Lorg_gwt_mosaic_core_client_util_DelayedRunnable$1_2_classLit = createForClass('org.gwt.mosaic.core.client.util.', 'DelayedRunnable$1'), Lorg_gwt_mosaic_override_client_HTMLTable_2_classLit = createForClass('org.gwt.mosaic.override.client.', 'HTMLTable'), Lorg_gwt_mosaic_override_client_FlexTable_2_classLit = createForClass('org.gwt.mosaic.override.client.', 'FlexTable'), Lorg_gwt_mosaic_override_client_HTMLTable$CellFormatter_2_classLit = createForClass('org.gwt.mosaic.override.client.', 'HTMLTable$CellFormatter'), Lorg_gwt_mosaic_override_client_FlexTable$FlexCellFormatter_2_classLit = createForClass('org.gwt.mosaic.override.client.', 'FlexTable$FlexCellFormatter'), Lorg_gwt_mosaic_override_client_Grid_2_classLit = createForClass('org.gwt.mosaic.override.client.', 'Grid'), Lorg_gwt_mosaic_override_client_HTMLTable$ColumnFormatter_2_classLit = createForClass('org.gwt.mosaic.override.client.', 'HTMLTable$ColumnFormatter'), Lorg_gwt_mosaic_override_client_HTMLTable$RowFormatter_2_classLit = createForClass('org.gwt.mosaic.override.client.', 'HTMLTable$RowFormatter'), Lorg_gwt_mosaic_override_client_HTMLTable$WidgetMapper_2_classLit = createForClass('org.gwt.mosaic.override.client.', 'HTMLTable$WidgetMapper'), Lorg_gwt_mosaic_override_client_HTMLTable$WidgetMapper$FreeNode_2_classLit = createForClass('org.gwt.mosaic.override.client.', 'HTMLTable$WidgetMapper$FreeNode'), Lorg_gwt_mosaic_override_client_HTMLTable$WidgetMapper$1_2_classLit = createForClass('org.gwt.mosaic.override.client.', 'HTMLTable$WidgetMapper$1'), Lorg_gwt_mosaic_ui_client_event_CellHighlightEvent_2_classLit = createForClass('org.gwt.mosaic.ui.client.event.', 'CellHighlightEvent'), Lorg_gwt_mosaic_ui_client_event_CellUnhighlightEvent_2_classLit = createForClass('org.gwt.mosaic.ui.client.event.', 'CellUnhighlightEvent'), Lorg_gwt_mosaic_ui_client_event_ColumnSortEvent_2_classLit = createForClass('org.gwt.mosaic.ui.client.event.', 'ColumnSortEvent'), Lorg_gwt_mosaic_ui_client_event_RowHighlightEvent_2_classLit = createForClass('org.gwt.mosaic.ui.client.event.', 'RowHighlightEvent'), Lorg_gwt_mosaic_ui_client_event_RowSelectionEvent_2_classLit = createForClass('org.gwt.mosaic.ui.client.event.', 'RowSelectionEvent'), Lorg_gwt_mosaic_ui_client_event_RowUnhighlightEvent_2_classLit = createForClass('org.gwt.mosaic.ui.client.event.', 'RowUnhighlightEvent'), Lorg_gwt_mosaic_ui_client_event_TableEvent$Row_2_classLit = createForClass('org.gwt.mosaic.ui.client.event.', 'TableEvent$Row'), Lorg_gwt_mosaic_ui_client_infopanel_InfoPanel_2_classLit = createForClass('org.gwt.mosaic.ui.client.infopanel.', 'InfoPanel'), Lorg_gwt_mosaic_ui_client_infopanel_InfoPanel$1_2_classLit = createForClass('org.gwt.mosaic.ui.client.infopanel.', 'InfoPanel$1'), Lorg_gwt_mosaic_ui_client_infopanel_InfoPanel$2_2_classLit = createForClass('org.gwt.mosaic.ui.client.infopanel.', 'InfoPanel$2'), _3_3Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForArray('[[Lcom.google.gwt.user.client.ui.', 'Widget;', _3Lcom_google_gwt_user_client_ui_Widget_2_classLit), Lorg_gwt_mosaic_ui_client_layout_GridLayout_2_classLit = createForClass('org.gwt.mosaic.ui.client.layout.', 'GridLayout'), Lorg_gwt_mosaic_ui_client_layout_GridLayoutData_2_classLit = createForClass('org.gwt.mosaic.ui.client.layout.', 'GridLayoutData'), Lorg_gwt_mosaic_ui_client_list_AbstractListModel_2_classLit = createForClass('org.gwt.mosaic.ui.client.list.', 'AbstractListModel'), Lorg_gwt_mosaic_ui_client_list_DefaultListModel_2_classLit = createForClass('org.gwt.mosaic.ui.client.list.', 'DefaultListModel'), Lorg_gwt_mosaic_ui_client_list_ListColumn_2_classLit = createForClass('org.gwt.mosaic.ui.client.list.', 'ListColumn'), Lorg_gwt_mosaic_ui_client_list_ListDataEvent_2_classLit = createForClass('org.gwt.mosaic.ui.client.list.', 'ListDataEvent'), Lorg_gwt_mosaic_ui_client_list_ListDataEvent$Type_2_classLit = createForEnum('org.gwt.mosaic.ui.client.list.', 'ListDataEvent$Type', values_15), _3Lorg_gwt_mosaic_ui_client_list_ListDataEvent$Type_2_classLit = createForArray('[Lorg.gwt.mosaic.ui.client.list.', 'ListDataEvent$Type;', Lorg_gwt_mosaic_ui_client_list_ListDataEvent$Type_2_classLit), Lorg_gwt_mosaic_ui_client_list_ListHeader_2_classLit = createForClass('org.gwt.mosaic.ui.client.list.', 'ListHeader'), Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable$MouseResizeWorker_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'AbstractScrollTable$MouseResizeWorker'), Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable$DefaultScrollTableResources_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'AbstractScrollTable$DefaultScrollTableResources'), Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'AbstractScrollTable'), Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable$MouseResizeWorker$1_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'AbstractScrollTable$MouseResizeWorker$1'), Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable$TableHeightInfo_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'AbstractScrollTable$TableHeightInfo'), Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable$TableWidthInfo_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'AbstractScrollTable$TableWidthInfo'), Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable$ColumnResizePolicy_2_classLit = createForEnum('org.gwt.mosaic.ui.client.table.', 'AbstractScrollTable$ColumnResizePolicy', values_16), _3Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable$ColumnResizePolicy_2_classLit = createForArray('[Lorg.gwt.mosaic.ui.client.table.', 'AbstractScrollTable$ColumnResizePolicy;', Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable$ColumnResizePolicy_2_classLit), Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable$ResizePolicy_2_classLit = createForEnum('org.gwt.mosaic.ui.client.table.', 'AbstractScrollTable$ResizePolicy', values_17), _3Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable$ResizePolicy_2_classLit = createForArray('[Lorg.gwt.mosaic.ui.client.table.', 'AbstractScrollTable$ResizePolicy;', Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable$ResizePolicy_2_classLit), Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable$ScrollPolicy_2_classLit = createForEnum('org.gwt.mosaic.ui.client.table.', 'AbstractScrollTable$ScrollPolicy', values_18), _3Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable$ScrollPolicy_2_classLit = createForArray('[Lorg.gwt.mosaic.ui.client.table.', 'AbstractScrollTable$ScrollPolicy;', Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable$ScrollPolicy_2_classLit), Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable$SortPolicy_2_classLit = createForEnum('org.gwt.mosaic.ui.client.table.', 'AbstractScrollTable$SortPolicy', values_19), _3Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable$SortPolicy_2_classLit = createForArray('[Lorg.gwt.mosaic.ui.client.table.', 'AbstractScrollTable$SortPolicy;', Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable$SortPolicy_2_classLit), Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable$1_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'AbstractScrollTable$1'), Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable$2_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'AbstractScrollTable$2'), Lorg_gwt_mosaic_ui_client_table_AbstractScrollTable_1ScrollTableMessages_1_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'AbstractScrollTable_ScrollTableMessages_'), Lorg_gwt_mosaic_ui_client_table_ColumnResizer$ColumnWidthInfo_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'ColumnResizer$ColumnWidthInfo'), Lorg_gwt_mosaic_ui_client_table_ColumnResizer$1_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'ColumnResizer$1'), Lorg_gwt_mosaic_ui_client_table_ColumnResizer$2_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'ColumnResizer$2'), Lorg_gwt_mosaic_ui_client_table_SelectionGrid_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'SelectionGrid'), Lorg_gwt_mosaic_ui_client_table_SortableGrid_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'SortableGrid'), Lorg_gwt_mosaic_ui_client_table_FixedWidthGrid_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'FixedWidthGrid'), Lorg_gwt_mosaic_ui_client_table_DataTable_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'DataTable'), Lorg_gwt_mosaic_ui_client_table_FixedWidthFlexTable_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'FixedWidthFlexTable'), Lorg_gwt_mosaic_ui_client_table_FixedWidthFlexTable$FixedWidthFlexCellFormatter_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'FixedWidthFlexTable$FixedWidthFlexCellFormatter'), Lorg_gwt_mosaic_ui_client_table_FixedWidthFlexTable$FixedWidthFlexColumnFormatter_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'FixedWidthFlexTable$FixedWidthFlexColumnFormatter'), Lorg_gwt_mosaic_ui_client_table_FixedWidthFlexTable$FixedWidthFlexRowFormatter_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'FixedWidthFlexTable$FixedWidthFlexRowFormatter'), Lorg_gwt_mosaic_ui_client_table_SelectionGrid$SelectionGridCellFormatter_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'SelectionGrid$SelectionGridCellFormatter'), Lorg_gwt_mosaic_ui_client_table_FixedWidthGrid$FixedWidthGridCellFormatter_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'FixedWidthGrid$FixedWidthGridCellFormatter'), Lorg_gwt_mosaic_ui_client_table_FixedWidthGrid$FixedWidthGridColumnFormatter_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'FixedWidthGrid$FixedWidthGridColumnFormatter'), Lorg_gwt_mosaic_ui_client_table_SelectionGrid$SelectionGridRowFormatter_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'SelectionGrid$SelectionGridRowFormatter'), Lorg_gwt_mosaic_ui_client_table_FixedWidthGrid$FixedWidthGridRowFormatter_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'FixedWidthGrid$FixedWidthGridRowFormatter'), Lorg_gwt_mosaic_ui_client_table_FixedWidthTableImpl$Impl_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'FixedWidthTableImpl$Impl'), Lorg_gwt_mosaic_ui_client_table_FixedWidthTableImpl$IdealColumnWidthInfo_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'FixedWidthTableImpl$IdealColumnWidthInfo'), Lorg_gwt_mosaic_ui_client_table_ScrollTable_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'ScrollTable'), Lorg_gwt_mosaic_ui_client_table_ScrollTable2_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'ScrollTable2'), Lorg_gwt_mosaic_ui_client_table_SelectionGrid$SelectionPolicy_2_classLit = createForEnum('org.gwt.mosaic.ui.client.table.', 'SelectionGrid$SelectionPolicy', values_20), _3Lorg_gwt_mosaic_ui_client_table_SelectionGrid$SelectionPolicy_2_classLit = createForArray('[Lorg.gwt.mosaic.ui.client.table.', 'SelectionGrid$SelectionPolicy;', Lorg_gwt_mosaic_ui_client_table_SelectionGrid$SelectionPolicy_2_classLit), Lorg_gwt_mosaic_ui_client_table_SortableGrid$ColumnSorter_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'SortableGrid$ColumnSorter'), Lorg_gwt_mosaic_ui_client_table_SortableGrid$DefaultColumnSorter_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'SortableGrid$DefaultColumnSorter'), Lorg_gwt_mosaic_ui_client_table_SortableGrid$DefaultColumnSorter$1_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'SortableGrid$DefaultColumnSorter$1'), Lorg_gwt_mosaic_ui_client_table_SortableGrid$DefaultColumnSorter$2_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'SortableGrid$DefaultColumnSorter$2'), Lorg_gwt_mosaic_ui_client_table_SortableGrid$ColumnSorterCallback_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'SortableGrid$ColumnSorterCallback'), Lorg_gwt_mosaic_ui_client_table_TableModelHelper$ColumnSortInfo_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'TableModelHelper$ColumnSortInfo'), Lorg_gwt_mosaic_ui_client_table_TableModelHelper$ColumnSortList_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'TableModelHelper$ColumnSortList'), Lorg_gwt_mosaic_ui_client_table_TableModelHelper$ImmutableIterator_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'TableModelHelper$ImmutableIterator'), Lorg_gwt_mosaic_ui_client_table_org_1gwt_1mosaic_1ui_1client_1table_1AbstractScrollTable_1ScrollTableStyle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('org.gwt.mosaic.ui.client.table.', 'org_gwt_mosaic_ui_client_table_AbstractScrollTable_ScrollTableStyle_default_InlineClientBundleGenerator'), Lorg_gwt_mosaic_ui_client_util_ButtonHelper$ButtonLabelType_2_classLit = createForEnum('org.gwt.mosaic.ui.client.util.', 'ButtonHelper$ButtonLabelType', values_21), _3Lorg_gwt_mosaic_ui_client_util_ButtonHelper$ButtonLabelType_2_classLit = createForArray('[Lorg.gwt.mosaic.ui.client.util.', 'ButtonHelper$ButtonLabelType;', Lorg_gwt_mosaic_ui_client_util_ButtonHelper$ButtonLabelType_2_classLit), Lorg_gwt_mosaic_ui_client_DeckLayoutPanel_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'DeckLayoutPanel'), Lorg_gwt_mosaic_ui_client_TabLayoutPanel_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'TabLayoutPanel'), Lorg_gwt_mosaic_ui_client_DecoratedTabLayoutPanel_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'DecoratedTabLayoutPanel'), Lorg_gwt_mosaic_ui_client_LayoutComposite$1_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'LayoutComposite$1'), Lorg_gwt_mosaic_ui_client_ListBox_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'ListBox'), Lorg_gwt_mosaic_ui_client_ListBox$1_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'ListBox$1'), Lorg_gwt_mosaic_ui_client_ListenerWrapper$WrapWindowPanelClose_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'ListenerWrapper$WrapWindowPanelClose'), Lorg_gwt_mosaic_ui_client_PopupMenu_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'PopupMenu'), Lorg_gwt_mosaic_ui_client_PopupMenu$1_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'PopupMenu$1'), Lorg_gwt_mosaic_ui_client_ScrollLayoutPanel_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'ScrollLayoutPanel'), Lorg_gwt_mosaic_ui_client_ScrollTabBar_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'ScrollTabBar'), Lorg_gwt_mosaic_ui_client_ScrollTabBar$DecoratedBottomTabBar_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'ScrollTabBar$DecoratedBottomTabBar'), Lorg_gwt_mosaic_ui_client_ScrollTabBar$DecoratedBottomTabBar$1_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'ScrollTabBar$DecoratedBottomTabBar$1'), Lorg_gwt_mosaic_ui_client_ScrollTabBar$ScrollAnimation_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'ScrollTabBar$ScrollAnimation'), Lorg_gwt_mosaic_ui_client_ScrollTabBar$1_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'ScrollTabBar$1'), Lorg_gwt_mosaic_ui_client_ScrollTabBar$2_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'ScrollTabBar$2'), Lorg_gwt_mosaic_ui_client_ScrollTabBar$3_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'ScrollTabBar$3'), Lorg_gwt_mosaic_ui_client_ScrollTabBar$4_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'ScrollTabBar$4'), Lorg_gwt_mosaic_ui_client_ScrollTabBar$5_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'ScrollTabBar$5'), Lorg_gwt_mosaic_ui_client_ScrollTabBar$6_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'ScrollTabBar$6'), Lorg_gwt_mosaic_ui_client_ScrollTabBar$6$1_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'ScrollTabBar$6$1'), Lorg_gwt_mosaic_ui_client_ScrollTabBar$7_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'ScrollTabBar$7'), Lorg_gwt_mosaic_ui_client_ScrollTabBar$8_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'ScrollTabBar$8'), Lorg_gwt_mosaic_ui_client_ScrollTabBar$9_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'ScrollTabBar$9'), Lorg_gwt_mosaic_ui_client_ScrollTabBar$10_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'ScrollTabBar$10'), Lorg_gwt_mosaic_ui_client_ScrollTabBar$11_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'ScrollTabBar$11'), Lorg_gwt_mosaic_ui_client_ScrollTabBar$12_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'ScrollTabBar$12'), Lorg_gwt_mosaic_ui_client_ScrollTabBar$13_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'ScrollTabBar$13'), Lorg_gwt_mosaic_ui_client_ScrollTabBar$13$1_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'ScrollTabBar$13$1'), Lorg_gwt_mosaic_ui_client_ScrollTabBar$13$2_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'ScrollTabBar$13$2'), Lorg_gwt_mosaic_ui_client_ScrollTabBar$13$3_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'ScrollTabBar$13$3'), Lorg_gwt_mosaic_ui_client_ScrollTabBar$14_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'ScrollTabBar$14'), Lorg_gwt_mosaic_ui_client_ScrollTabBar$15_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'ScrollTabBar$15'), Lorg_gwt_mosaic_ui_client_ScrollTabBar$16_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'ScrollTabBar$16'), Lorg_gwt_mosaic_ui_client_ScrollTabBar$17_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'ScrollTabBar$17'), Lorg_gwt_mosaic_ui_client_TabLayoutPanel$TabBarPosition_2_classLit = createForEnum('org.gwt.mosaic.ui.client.', 'TabLayoutPanel$TabBarPosition', values_8), _3Lorg_gwt_mosaic_ui_client_TabLayoutPanel$TabBarPosition_2_classLit = createForArray('[Lorg.gwt.mosaic.ui.client.', 'TabLayoutPanel$TabBarPosition;', Lorg_gwt_mosaic_ui_client_TabLayoutPanel$TabBarPosition_2_classLit), Lorg_gwt_mosaic_ui_client_TabLayoutPanel$1_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'TabLayoutPanel$1'), Lorg_gwt_mosaic_ui_client_ToolBar_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'ToolBar'), Lorg_jboss_bpm_console_client_common_HeaderLabel_2_classLit = createForClass('org.jboss.bpm.console.client.common.', 'HeaderLabel'), Lorg_jboss_bpm_console_client_common_IFrameWindowPanel_2_classLit = createForClass('org.jboss.bpm.console.client.common.', 'IFrameWindowPanel'), Lorg_jboss_bpm_console_client_common_IFrameWindowPanel$1_2_classLit = createForClass('org.jboss.bpm.console.client.common.', 'IFrameWindowPanel$1'), Lorg_jboss_bpm_console_client_common_IFrameWindowPanel$2_2_classLit = createForClass('org.jboss.bpm.console.client.common.', 'IFrameWindowPanel$2'), Lorg_jboss_bpm_console_client_common_ModelCommands_2_classLit = createForEnum('org.jboss.bpm.console.client.common.', 'ModelCommands', values_22), _3Lorg_jboss_bpm_console_client_common_ModelCommands_2_classLit = createForArray('[Lorg.jboss.bpm.console.client.common.', 'ModelCommands;', Lorg_jboss_bpm_console_client_common_ModelCommands_2_classLit), Lorg_jboss_bpm_console_client_common_ModelParts_2_classLit = createForEnum('org.jboss.bpm.console.client.common.', 'ModelParts', values_23), _3Lorg_jboss_bpm_console_client_common_ModelParts_2_classLit = createForArray('[Lorg.jboss.bpm.console.client.common.', 'ModelParts;', Lorg_jboss_bpm_console_client_common_ModelParts_2_classLit), Lorg_jboss_bpm_console_client_common_PagingPanel_2_classLit = createForClass('org.jboss.bpm.console.client.common.', 'PagingPanel'), Lorg_jboss_bpm_console_client_common_PagingPanel$1_2_classLit = createForClass('org.jboss.bpm.console.client.common.', 'PagingPanel$1'), Lorg_jboss_bpm_console_client_common_PagingPanel$2_2_classLit = createForClass('org.jboss.bpm.console.client.common.', 'PagingPanel$2'), Lorg_jboss_bpm_console_client_common_PropertyGrid_2_classLit = createForClass('org.jboss.bpm.console.client.common.', 'PropertyGrid'), Lorg_jboss_bpm_console_client_model_ParticipantRef_2_classLit = createForClass('org.jboss.bpm.console.client.model.', 'ParticipantRef'), Lorg_jboss_bpm_console_client_model_ProcessDefinitionRef_2_classLit = createForClass('org.jboss.bpm.console.client.model.', 'ProcessDefinitionRef'), Lorg_jboss_bpm_console_client_model_TaskRef_2_classLit = createForClass('org.jboss.bpm.console.client.model.', 'TaskRef'), Lorg_jboss_bpm_console_client_model_TaskRef$STATE_2_classLit = createForEnum('org.jboss.bpm.console.client.model.', 'TaskRef$STATE', values_26), _3Lorg_jboss_bpm_console_client_model_TaskRef$STATE_2_classLit = createForArray('[Lorg.jboss.bpm.console.client.model.', 'TaskRef$STATE;', Lorg_jboss_bpm_console_client_model_TaskRef$STATE_2_classLit), Lorg_jboss_bpm_console_client_task_events_AssignEvent_2_classLit = createForClass('org.jboss.bpm.console.client.task.events.', 'AssignEvent'), Lorg_jboss_bpm_console_client_task_events_DetailViewEvent_2_classLit = createForClass('org.jboss.bpm.console.client.task.events.', 'DetailViewEvent'), Lorg_jboss_bpm_console_client_task_events_TaskIdentityEvent_2_classLit = createForClass('org.jboss.bpm.console.client.task.events.', 'TaskIdentityEvent'), Lorg_jboss_bpm_console_client_task_AbstractTaskList_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'AbstractTaskList'), Lorg_jboss_bpm_console_client_task_AssignTaskAction_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'AssignTaskAction'), Lorg_jboss_bpm_console_client_task_AssignedTasksView_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'AssignedTasksView'), Lorg_jboss_bpm_console_client_task_AssignedTasksView$1_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'AssignedTasksView$1'), Lorg_jboss_bpm_console_client_task_AssignedTasksView$2_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'AssignedTasksView$2'), Lorg_jboss_bpm_console_client_task_AssignedTasksView$3_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'AssignedTasksView$3'), Lorg_jboss_bpm_console_client_task_AssignedTasksView$4_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'AssignedTasksView$4'), Lorg_jboss_bpm_console_client_task_AssignedTasksView$4$1_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'AssignedTasksView$4$1'), Lorg_jboss_bpm_console_client_task_AssignedTasksView$5_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'AssignedTasksView$5'), Lorg_jboss_bpm_console_client_task_AssignedTasksView$6_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'AssignedTasksView$6'), Lorg_jboss_bpm_console_client_task_AssignedTasksView$7_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'AssignedTasksView$7'), Lorg_jboss_bpm_console_client_task_AssignedTasksView$8_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'AssignedTasksView$8'), Lorg_jboss_bpm_console_client_task_AssignedTasksView$9_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'AssignedTasksView$9'), Lorg_jboss_bpm_console_client_task_ClaimTaskAction_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'ClaimTaskAction'), Lorg_jboss_bpm_console_client_task_LoadTasksAction_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'LoadTasksAction'), Lorg_jboss_bpm_console_client_task_LoadTasksParticipationAction_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'LoadTasksParticipationAction'), Lorg_jboss_bpm_console_client_task_OpenTasksView_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'OpenTasksView'), Lorg_jboss_bpm_console_client_task_OpenTasksView$1_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'OpenTasksView$1'), Lorg_jboss_bpm_console_client_task_OpenTasksView$2_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'OpenTasksView$2'), Lorg_jboss_bpm_console_client_task_OpenTasksView$3_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'OpenTasksView$3'), Lorg_jboss_bpm_console_client_task_OpenTasksView$4_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'OpenTasksView$4'), Lorg_jboss_bpm_console_client_task_OpenTasksView$5_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'OpenTasksView$5'), Lorg_jboss_bpm_console_client_task_OpenTasksView$6_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'OpenTasksView$6'), Lorg_jboss_bpm_console_client_task_OpenTasksView$7_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'OpenTasksView$7'), Lorg_jboss_bpm_console_client_task_OpenTasksView$8_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'OpenTasksView$8'), Lorg_jboss_bpm_console_client_task_ParticipantPanel_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'ParticipantPanel'), Lorg_jboss_bpm_console_client_task_ParticipantPanel$1_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'ParticipantPanel$1'), Lorg_jboss_bpm_console_client_task_ParticipantPanel$2_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'ParticipantPanel$2'), Lorg_jboss_bpm_console_client_task_ReleaseTaskAction_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'ReleaseTaskAction'), Lorg_jboss_bpm_console_client_task_ReloadAllTaskListsAction_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'ReloadAllTaskListsAction'), Lorg_jboss_bpm_console_client_task_SkipTaskAction_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'SkipTaskAction'), Lorg_jboss_bpm_console_client_task_TaskDetailView_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'TaskDetailView'), Lorg_jboss_bpm_console_client_task_TaskDetailView$1_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'TaskDetailView$1'), Lorg_jboss_bpm_console_client_task_UpdateDetailsAction_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'UpdateDetailsAction'), Lorg_jboss_bpm_console_client_util_regex_Pattern_2_classLit = createForClass('org.jboss.bpm.console.client.util.regex.', 'Pattern'), Lorg_jboss_bpm_console_client_util_DateLocale_2_classLit = createForClass('org.jboss.bpm.console.client.util.', 'DateLocale'), Lorg_jboss_bpm_console_client_util_SimpleDateFormat_2_classLit = createForClass('org.jboss.bpm.console.client.util.', 'SimpleDateFormat'), _3_3Ljava_lang_String_2_classLit = createForArray('[[Ljava.lang.', 'String;', _3Ljava_lang_String_2_classLit), Lorg_jboss_bpm_console_client_util_SimpleDateParser_2_classLit = createForClass('org.jboss.bpm.console.client.util.', 'SimpleDateParser'), Lorg_jboss_bpm_console_client_util_WindowUtil$1_2_classLit = createForClass('org.jboss.bpm.console.client.util.', 'WindowUtil$1'), Lorg_jboss_bpm_console_client_util_WindowUtil$2_2_classLit = createForClass('org.jboss.bpm.console.client.util.', 'WindowUtil$2'), Lorg_jboss_bpm_console_client_util_WindowUtil$3_2_classLit = createForClass('org.jboss.bpm.console.client.util.', 'WindowUtil$3'), _3Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForArray('[Lcom.google.gwt.core.client.', 'JavaScriptObject$;', Lcom_google_gwt_core_client_JavaScriptObject_2_classLit);
browserLoaderLeftoversFragmentHasLoaded();
