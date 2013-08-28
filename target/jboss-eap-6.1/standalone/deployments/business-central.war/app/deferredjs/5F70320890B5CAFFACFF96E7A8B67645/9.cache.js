function $setCurrentLogLevel(this$static, level){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $setCurrentLogLevel;
  level = ($location_0[stackIndex] = 'LogImplBase.java:' + '281' , $setCurrentLogLevelLoggers(this$static, level));
  if (level != this$static.currentLogLevel) {
    $location_0[stackIndex] = 'LogImplBase.java:' + '147' , $log(this$static, 2147483647, "Temporarily setting the current (runtime) log level filter to '" + ($location_0[stackIndex] = 'LogImplBase.java:' + '285' , levelToString(level)) + "'", null);
    $location_0[stackIndex] = 'LogImplBase.java:' + '286' , this$static.currentLogLevel = level;
  }
  returnTemp = this$static.currentLogLevel;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $enableScrolling(this$static, enable){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $enableScrolling;
  $location_0[stackIndex] = 'Style.java:' + '1449' , (($location_0[stackIndex] = 'Document.java:' + '1331' , $equals_4(this$static.compatMode, 'CSS1Compat'))?this$static.documentElement:this$static.body).style['overflow'] = enable?'auto':'hidden';
  $stackDepth_0 = stackIndex - 1;
}

function runAsync_0(callback){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = runAsync_0;
  $location_0[stackIndex] = 'AsyncLoader2.java:' + '28' , $clinit_262();
  var newCallback;
  newCallback = ($location_0[stackIndex] = 'AsyncLoader2.java:' + '29' , new AsyncLoader2__Callback);
  $location_0[stackIndex] = 'AsyncLoader2.java:' + '30' , newCallback.callback = callback;
  !!callbacksTail_0 && ($location_0[stackIndex] = 'AsyncLoader2.java:' + '32' , callbacksTail_0.next = newCallback);
  $location_0[stackIndex] = 'AsyncLoader2.java:' + '34' , callbacksTail_0 = newCallback;
  !callbacksHead_0 && ($location_0[stackIndex] = 'AsyncLoader2.java:' + '36' , callbacksHead_0 = newCallback);
  if (loaded_1) {
    $location_0[stackIndex] = 'AsyncLoader2.java:' + '39' , instance_3.runCallbacks();
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  if (!loading_1) {
    $location_0[stackIndex] = 'AsyncLoader2.java:' + '43' , loading_1 = true;
    $location_0[stackIndex] = 'AsyncLoader2.java:' + '44' , $inject(($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '335' , $clinit_61() , BROWSER_LOADER), 2, ($location_0[stackIndex] = 'AsyncLoader2.java:' + '45' , new AsyncLoader2$1));
  }
  $stackDepth_0 = stackIndex - 1;
}

function runCallbackOnFailures_0(e){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = runCallbackOnFailures_0;
  $location_0[stackIndex] = 'AsyncLoader2.java:' + '72' , $clinit_262();
  while (callbacksHead_0) {
    $location_0[stackIndex] = 'ConsoleLog.java:' + '65' , $clinit_24();
    $location_0[stackIndex] = 'Log.java:' + '224' , $error(impl, 'Failed to load tool', e);
    $location_0[stackIndex] = 'AsyncLoader2.java:' + '75' , callbacksHead_0 = callbacksHead_0.next;
  }
  $location_0[stackIndex] = 'AsyncLoader2.java:' + '77' , callbacksTail_0 = null;
  $stackDepth_0 = stackIndex - 1;
}

var loading_1 = false;
function getClass_134(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_134;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader2$1_2_classLit;
}

function loadFailed_2(reason){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = loadFailed_2;
  $location_0[stackIndex] = 'AsyncLoader2.java:' + '9' , $clinit_262();
  $location_0[stackIndex] = 'AsyncLoader2.java:' + '47' , loading_1 = false;
  $location_0[stackIndex] = 'AsyncLoader2.java:' + '48' , runCallbackOnFailures_0(reason);
  $stackDepth_0 = stackIndex - 1;
}

function AsyncLoader2$1(){
}

_ = AsyncLoader2$1.prototype = new Object_0;
_.getClass$ = getClass_134;
_.loadFailed = loadFailed_2;
_.typeId$ = 68;
function getClass_135(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_135;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader2_1_1Callback_2_classLit;
}

function AsyncLoader2__Callback(){
}

_ = AsyncLoader2__Callback.prototype = new Object_0;
_.getClass$ = getClass_135;
_.typeId$ = 0;
_.callback = null;
_.next = null;
function runAsync_1(callback){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = runAsync_1;
  $location_0[stackIndex] = 'AsyncLoader3.java:' + '28' , $clinit_266();
  var newCallback;
  newCallback = ($location_0[stackIndex] = 'AsyncLoader3.java:' + '29' , new AsyncLoader3__Callback);
  $location_0[stackIndex] = 'AsyncLoader3.java:' + '30' , newCallback.callback = callback;
  !!callbacksTail_1 && ($location_0[stackIndex] = 'AsyncLoader3.java:' + '32' , callbacksTail_1.next = newCallback);
  $location_0[stackIndex] = 'AsyncLoader3.java:' + '34' , callbacksTail_1 = newCallback;
  !callbacksHead_1 && ($location_0[stackIndex] = 'AsyncLoader3.java:' + '36' , callbacksHead_1 = newCallback);
  if (loaded_2) {
    $location_0[stackIndex] = 'AsyncLoader3.java:' + '39' , instance_4.runCallbacks();
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  if (!loading_2) {
    $location_0[stackIndex] = 'AsyncLoader3.java:' + '43' , loading_2 = true;
    $location_0[stackIndex] = 'AsyncLoader3.java:' + '44' , $inject(($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '335' , $clinit_61() , BROWSER_LOADER), 3, ($location_0[stackIndex] = 'AsyncLoader3.java:' + '45' , new AsyncLoader3$1));
  }
  $stackDepth_0 = stackIndex - 1;
}

function runCallbackOnFailures_1(e){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = runCallbackOnFailures_1;
  $location_0[stackIndex] = 'AsyncLoader3.java:' + '72' , $clinit_266();
  while (callbacksHead_1) {
    $location_0[stackIndex] = 'ConsoleLog.java:' + '65' , $clinit_24();
    $location_0[stackIndex] = 'Log.java:' + '224' , $error(impl, 'Failed to load tool', e);
    $location_0[stackIndex] = 'AsyncLoader3.java:' + '75' , callbacksHead_1 = callbacksHead_1.next;
  }
  $location_0[stackIndex] = 'AsyncLoader3.java:' + '77' , callbacksTail_1 = null;
  $stackDepth_0 = stackIndex - 1;
}

var loading_2 = false;
function getClass_138(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_138;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader3$1_2_classLit;
}

function loadFailed_3(reason){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = loadFailed_3;
  $location_0[stackIndex] = 'AsyncLoader3.java:' + '9' , $clinit_266();
  $location_0[stackIndex] = 'AsyncLoader3.java:' + '47' , loading_2 = false;
  $location_0[stackIndex] = 'AsyncLoader3.java:' + '48' , runCallbackOnFailures_1(reason);
  $stackDepth_0 = stackIndex - 1;
}

function AsyncLoader3$1(){
}

_ = AsyncLoader3$1.prototype = new Object_0;
_.getClass$ = getClass_138;
_.loadFailed = loadFailed_3;
_.typeId$ = 69;
function getClass_139(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_139;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader3_1_1Callback_2_classLit;
}

function AsyncLoader3__Callback(){
}

_ = AsyncLoader3__Callback.prototype = new Object_0;
_.getClass$ = getClass_139;
_.typeId$ = 0;
_.callback = null;
_.next = null;
function runAsync_2(callback){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = runAsync_2;
  $location_0[stackIndex] = 'AsyncLoader4.java:' + '28' , $clinit_270();
  var newCallback;
  newCallback = ($location_0[stackIndex] = 'AsyncLoader4.java:' + '29' , new AsyncLoader4__Callback);
  $location_0[stackIndex] = 'AsyncLoader4.java:' + '30' , newCallback.callback = callback;
  !!callbacksTail_2 && ($location_0[stackIndex] = 'AsyncLoader4.java:' + '32' , callbacksTail_2.next = newCallback);
  $location_0[stackIndex] = 'AsyncLoader4.java:' + '34' , callbacksTail_2 = newCallback;
  !callbacksHead_2 && ($location_0[stackIndex] = 'AsyncLoader4.java:' + '36' , callbacksHead_2 = newCallback);
  if (loaded_3) {
    $location_0[stackIndex] = 'AsyncLoader4.java:' + '39' , instance_5.runCallbacks();
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  if (!loading_3) {
    $location_0[stackIndex] = 'AsyncLoader4.java:' + '43' , loading_3 = true;
    $location_0[stackIndex] = 'AsyncLoader4.java:' + '44' , $inject(($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '335' , $clinit_61() , BROWSER_LOADER), 4, ($location_0[stackIndex] = 'AsyncLoader4.java:' + '45' , new AsyncLoader4$1));
  }
  $stackDepth_0 = stackIndex - 1;
}

function runCallbackOnFailures_2(e){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = runCallbackOnFailures_2;
  $location_0[stackIndex] = 'AsyncLoader4.java:' + '72' , $clinit_270();
  while (callbacksHead_2) {
    $location_0[stackIndex] = 'ConsoleLog.java:' + '65' , $clinit_24();
    $location_0[stackIndex] = 'Log.java:' + '224' , $error(impl, 'Failed to load tool', e);
    $location_0[stackIndex] = 'AsyncLoader4.java:' + '75' , callbacksHead_2 = callbacksHead_2.next;
  }
  $location_0[stackIndex] = 'AsyncLoader4.java:' + '77' , callbacksTail_2 = null;
  $stackDepth_0 = stackIndex - 1;
}

var loading_3 = false;
function getClass_142(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_142;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader4$1_2_classLit;
}

function loadFailed_4(reason){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = loadFailed_4;
  $location_0[stackIndex] = 'AsyncLoader4.java:' + '9' , $clinit_270();
  $location_0[stackIndex] = 'AsyncLoader4.java:' + '47' , loading_3 = false;
  $location_0[stackIndex] = 'AsyncLoader4.java:' + '48' , runCallbackOnFailures_2(reason);
  $stackDepth_0 = stackIndex - 1;
}

function AsyncLoader4$1(){
}

_ = AsyncLoader4$1.prototype = new Object_0;
_.getClass$ = getClass_142;
_.loadFailed = loadFailed_4;
_.typeId$ = 70;
function getClass_143(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_143;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader4_1_1Callback_2_classLit;
}

function AsyncLoader4__Callback(){
}

_ = AsyncLoader4__Callback.prototype = new Object_0;
_.getClass$ = getClass_143;
_.typeId$ = 0;
_.callback = null;
_.next = null;
function runAsync_3(callback){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = runAsync_3;
  $location_0[stackIndex] = 'AsyncLoader5.java:' + '28' , $clinit_274();
  var newCallback;
  newCallback = ($location_0[stackIndex] = 'AsyncLoader5.java:' + '29' , new AsyncLoader5__Callback);
  $location_0[stackIndex] = 'AsyncLoader5.java:' + '30' , newCallback.callback = callback;
  !!callbacksTail_3 && ($location_0[stackIndex] = 'AsyncLoader5.java:' + '32' , callbacksTail_3.next = newCallback);
  $location_0[stackIndex] = 'AsyncLoader5.java:' + '34' , callbacksTail_3 = newCallback;
  !callbacksHead_3 && ($location_0[stackIndex] = 'AsyncLoader5.java:' + '36' , callbacksHead_3 = newCallback);
  if (loaded_4) {
    $location_0[stackIndex] = 'AsyncLoader5.java:' + '39' , instance_6.runCallbacks();
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  if (!loading_4) {
    $location_0[stackIndex] = 'AsyncLoader5.java:' + '43' , loading_4 = true;
    $location_0[stackIndex] = 'AsyncLoader5.java:' + '44' , $inject(($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '335' , $clinit_61() , BROWSER_LOADER), 5, ($location_0[stackIndex] = 'AsyncLoader5.java:' + '45' , new AsyncLoader5$1));
  }
  $stackDepth_0 = stackIndex - 1;
}

function runCallbackOnFailures_3(e){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = runCallbackOnFailures_3;
  $location_0[stackIndex] = 'AsyncLoader5.java:' + '72' , $clinit_274();
  while (callbacksHead_3) {
    $location_0[stackIndex] = 'ConsoleLog.java:' + '65' , $clinit_24();
    $location_0[stackIndex] = 'Log.java:' + '224' , $error(impl, 'Failed to load tool', e);
    $location_0[stackIndex] = 'AsyncLoader5.java:' + '75' , callbacksHead_3 = callbacksHead_3.next;
  }
  $location_0[stackIndex] = 'AsyncLoader5.java:' + '77' , callbacksTail_3 = null;
  $stackDepth_0 = stackIndex - 1;
}

var loading_4 = false;
function getClass_146(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_146;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader5$1_2_classLit;
}

function loadFailed_5(reason){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = loadFailed_5;
  $location_0[stackIndex] = 'AsyncLoader5.java:' + '9' , $clinit_274();
  $location_0[stackIndex] = 'AsyncLoader5.java:' + '47' , loading_4 = false;
  $location_0[stackIndex] = 'AsyncLoader5.java:' + '48' , runCallbackOnFailures_3(reason);
  $stackDepth_0 = stackIndex - 1;
}

function AsyncLoader5$1(){
}

_ = AsyncLoader5$1.prototype = new Object_0;
_.getClass$ = getClass_146;
_.loadFailed = loadFailed_5;
_.typeId$ = 71;
function getClass_147(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_147;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader5_1_1Callback_2_classLit;
}

function AsyncLoader5__Callback(){
}

_ = AsyncLoader5__Callback.prototype = new Object_0;
_.getClass$ = getClass_147;
_.typeId$ = 0;
_.callback = null;
_.next = null;
function runAsync_4(callback){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = runAsync_4;
  $location_0[stackIndex] = 'AsyncLoader6.java:' + '28' , $clinit_278();
  var newCallback;
  newCallback = ($location_0[stackIndex] = 'AsyncLoader6.java:' + '29' , new AsyncLoader6__Callback);
  $location_0[stackIndex] = 'AsyncLoader6.java:' + '30' , newCallback.callback = callback;
  !!callbacksTail_4 && ($location_0[stackIndex] = 'AsyncLoader6.java:' + '32' , callbacksTail_4.next = newCallback);
  $location_0[stackIndex] = 'AsyncLoader6.java:' + '34' , callbacksTail_4 = newCallback;
  !callbacksHead_4 && ($location_0[stackIndex] = 'AsyncLoader6.java:' + '36' , callbacksHead_4 = newCallback);
  if (loaded_5) {
    $location_0[stackIndex] = 'AsyncLoader6.java:' + '39' , instance_7.runCallbacks();
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  if (!loading_5) {
    $location_0[stackIndex] = 'AsyncLoader6.java:' + '43' , loading_5 = true;
    $location_0[stackIndex] = 'AsyncLoader6.java:' + '44' , $inject(($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '335' , $clinit_61() , BROWSER_LOADER), 6, ($location_0[stackIndex] = 'AsyncLoader6.java:' + '45' , new AsyncLoader6$1));
  }
  $stackDepth_0 = stackIndex - 1;
}

function runCallbackOnFailures_4(e){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = runCallbackOnFailures_4;
  $location_0[stackIndex] = 'AsyncLoader6.java:' + '72' , $clinit_278();
  while (callbacksHead_4) {
    $location_0[stackIndex] = 'ConsoleLog.java:' + '65' , $clinit_24();
    $location_0[stackIndex] = 'Log.java:' + '224' , $error(impl, 'Failed to load tool', e);
    $location_0[stackIndex] = 'AsyncLoader6.java:' + '75' , callbacksHead_4 = callbacksHead_4.next;
  }
  $location_0[stackIndex] = 'AsyncLoader6.java:' + '77' , callbacksTail_4 = null;
  $stackDepth_0 = stackIndex - 1;
}

var loading_5 = false;
function getClass_150(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_150;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader6$1_2_classLit;
}

function loadFailed_6(reason){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = loadFailed_6;
  $location_0[stackIndex] = 'AsyncLoader6.java:' + '9' , $clinit_278();
  $location_0[stackIndex] = 'AsyncLoader6.java:' + '47' , loading_5 = false;
  $location_0[stackIndex] = 'AsyncLoader6.java:' + '48' , runCallbackOnFailures_4(reason);
  $stackDepth_0 = stackIndex - 1;
}

function AsyncLoader6$1(){
}

_ = AsyncLoader6$1.prototype = new Object_0;
_.getClass$ = getClass_150;
_.loadFailed = loadFailed_6;
_.typeId$ = 72;
function getClass_151(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_151;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader6_1_1Callback_2_classLit;
}

function AsyncLoader6__Callback(){
}

_ = AsyncLoader6__Callback.prototype = new Object_0;
_.getClass$ = getClass_151;
_.typeId$ = 0;
_.callback = null;
_.next = null;
function runAsync_5(callback){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = runAsync_5;
  $location_0[stackIndex] = 'AsyncLoader7.java:' + '28' , $clinit_282();
  var newCallback;
  newCallback = ($location_0[stackIndex] = 'AsyncLoader7.java:' + '29' , new AsyncLoader7__Callback);
  $location_0[stackIndex] = 'AsyncLoader7.java:' + '30' , newCallback.callback = callback;
  !!callbacksTail_5 && ($location_0[stackIndex] = 'AsyncLoader7.java:' + '32' , callbacksTail_5.next = newCallback);
  $location_0[stackIndex] = 'AsyncLoader7.java:' + '34' , callbacksTail_5 = newCallback;
  !callbacksHead_5 && ($location_0[stackIndex] = 'AsyncLoader7.java:' + '36' , callbacksHead_5 = newCallback);
  if (loaded_6) {
    $location_0[stackIndex] = 'AsyncLoader7.java:' + '39' , instance_8.runCallbacks();
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  if (!loading_6) {
    $location_0[stackIndex] = 'AsyncLoader7.java:' + '43' , loading_6 = true;
    $location_0[stackIndex] = 'AsyncLoader7.java:' + '44' , $inject(($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '335' , $clinit_61() , BROWSER_LOADER), 7, ($location_0[stackIndex] = 'AsyncLoader7.java:' + '45' , new AsyncLoader7$1));
  }
  $stackDepth_0 = stackIndex - 1;
}

function runCallbackOnFailures_5(e){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = runCallbackOnFailures_5;
  $location_0[stackIndex] = 'AsyncLoader7.java:' + '72' , $clinit_282();
  while (callbacksHead_5) {
    $location_0[stackIndex] = 'ConsoleLog.java:' + '65' , $clinit_24();
    $location_0[stackIndex] = 'Log.java:' + '224' , $error(impl, 'Failed to load tool', e);
    $location_0[stackIndex] = 'AsyncLoader7.java:' + '75' , callbacksHead_5 = callbacksHead_5.next;
  }
  $location_0[stackIndex] = 'AsyncLoader7.java:' + '77' , callbacksTail_5 = null;
  $stackDepth_0 = stackIndex - 1;
}

var loading_6 = false;
function getClass_154(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_154;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader7$1_2_classLit;
}

function loadFailed_7(reason){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = loadFailed_7;
  $location_0[stackIndex] = 'AsyncLoader7.java:' + '9' , $clinit_282();
  $location_0[stackIndex] = 'AsyncLoader7.java:' + '47' , loading_6 = false;
  $location_0[stackIndex] = 'AsyncLoader7.java:' + '48' , runCallbackOnFailures_5(reason);
  $stackDepth_0 = stackIndex - 1;
}

function AsyncLoader7$1(){
}

_ = AsyncLoader7$1.prototype = new Object_0;
_.getClass$ = getClass_154;
_.loadFailed = loadFailed_7;
_.typeId$ = 73;
function getClass_155(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_155;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader7_1_1Callback_2_classLit;
}

function AsyncLoader7__Callback(){
}

_ = AsyncLoader7__Callback.prototype = new Object_0;
_.getClass$ = getClass_155;
_.typeId$ = 0;
_.callback = null;
_.next = null;
function getClass_159(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_159;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader9_2_classLit;
}

function onLoad_7(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onLoad_7;
  $location_0[stackIndex] = 'AsyncLoader9.java:' + '21' , loaded_7 = true;
  instance_10 = ($location_0[stackIndex] = 'AsyncLoader9.java:' + '5' , $clinit_288() , ($location_0[stackIndex] = 'AsyncLoader9.java:' + '22' , new AsyncLoader9));
  $location_0[stackIndex] = 'AsyncLoader9.java:' + '23' , $fragmentHasLoaded(($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '335' , $clinit_61() , BROWSER_LOADER), 9);
  !!$stats && ($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '231' , $stats(($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '238' , $createStatsEvent('runCallbacks9', 'begin', null, null))));
  $location_0[stackIndex] = 'AsyncLoader9.java:' + '25' , instance_10.runCallbacks();
  !!$stats && ($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '231' , $stats(($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '238' , $createStatsEvent('runCallbacks9', 'end', null, null))));
  $stackDepth_0 = stackIndex - 1;
}

function runCallbacks_16(){
  var $e0, e, handler, next, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = runCallbacks_16;
  while (callbacksHead_6) {
    $location_0[stackIndex] = 'AsyncLoader9.java:' + '55' , handler = sUncaughtExceptionHandler;
    $location_0[stackIndex] = 'AsyncLoader9.java:' + '56' , next = callbacksHead_6;
    $location_0[stackIndex] = 'AsyncLoader9.java:' + '57' , callbacksHead_6 = callbacksHead_6.next;
    !callbacksHead_6 && ($location_0[stackIndex] = 'AsyncLoader9.java:' + '59' , callbacksTail_6 = null);
    if (!handler) {
      $location_0[stackIndex] = 'Application.java:' + '166' , $initializeUI(next.callback.this$2.this$1.this$0);
    }
     else {
      try {
        $initializeUI(next.callback.this$2.this$1.this$0);
      }
       catch ($e0) {
        $e0 = ($location_0[stackIndex] = 'AsyncLoader9.java:' + '66' , caught_0($e0));
        $stackDepth_0 = stackIndex;
        if (instanceOf($e0, 12)) {
          e = $e0;
          $location_0[stackIndex] = 'LogImplBase.java:' + '295' , $clinit_24();
          $location_0[stackIndex] = 'Log.java:' + '285' , $fatal(impl, 'Uncaught Exception:', e);
        }
         else 
          throw $e0;
      }
    }
  }
  $stackDepth_0 = stackIndex - 1;
}

function AsyncLoader9(){
}

_ = AsyncLoader9.prototype = new AsyncLoader9__Super;
_.getClass$ = getClass_159;
_.runCallbacks = runCallbacks_16;
_.typeId$ = 0;
function $newItem(this$static, historyToken, issueEvent){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $newItem;
  $location_0[stackIndex] = 'HistoryImpl.java:' + '113' , historyToken = historyToken == null?'':historyToken;
  if (!($location_0[stackIndex] = 'HistoryImpl.java:' + '114' , $equals_4(historyToken, $wnd.__gwt_historyToken || ''))) {
    $location_0[stackIndex] = 'HistoryImpl.java:' + '57' , $wnd.__gwt_historyToken = historyToken;
    $wnd.location.hash = ($location_0[stackIndex] = 'HistoryImpl.java:' + '147' , this$static.encodeFragment(historyToken));
    issueEvent && ($location_0[stackIndex] = 'HistoryImpl.java:' + '81' , fire_5(this$static, historyToken));
  }
  $stackDepth_0 = stackIndex - 1;
}

function encodeFragment(fragment){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = encodeFragment;
  returnTemp = ($location_0[stackIndex] = 'HistoryImpl.java:' + '139' , encodeURI(fragment)).replace('#', '%23');
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

_ = HistoryImpl.prototype;
_.encodeFragment = encodeFragment;
function $Label_1(this$static, text, wordWrap){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $Label_1;
  $location_0[stackIndex] = 'UIObject.java:' + '799' , this$static.element = $createElement(($location_0[stackIndex] = 'Document.java:' + '252' , $clinit_82() , $doc), 'div');
  $location_0[stackIndex] = 'Element.java:' + '688' , this$static.element['className'] = 'gwt-Label';
  $location_0[stackIndex] = 'DOMImplTrident.java:' + '260' , this$static.element.innerText = text || '';
  $location_0[stackIndex] = 'Style.java:' + '1449' , this$static.element.style['whiteSpace'] = wordWrap?'normal':'nowrap';
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $getWidget_5(this$static, index){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getWidget_5;
  returnTemp = ($location_0[stackIndex] = 'LayoutPanel.java:' + '490' , $getUnDecoratedWidget(($location_0[stackIndex] = 'ComplexPanel.java:' + '36' , $get_7(($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.widget, 182)).children_0, index))));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $add_22(this$static, w, tabText, asHTML){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $add_22;
  $location_0[stackIndex] = 'TabLayoutPanel.java:' + '211' , $insert_5(this$static, w, tabText, asHTML, ($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.deck.widget, 182)).children_0.size_0);
  $stackDepth_0 = stackIndex - 1;
}

function $DecoratedTabLayoutPanel(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $DecoratedTabLayoutPanel;
  $location_0[stackIndex] = 'DecoratedTabLayoutPanel.java:' + '39' , $TabLayoutPanel(this$static, ($location_0[stackIndex] = 'TabLayoutPanel.java:' + '65' , $clinit_728() , TOP), true, false);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $setHorizontalAlignment_0(this$static, align){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setHorizontalAlignment_0;
  $setHorizontalAlignment_1(($location_0[stackIndex] = 'ImageButton.java:' + '84' , dynamicCast(this$static.widget, 189)), align);
  $stackDepth_0 = stackIndex - 1;
}

function $setVerticalAlignment_0(this$static, align){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setVerticalAlignment_0;
  $setVerticalAlignment_1(($location_0[stackIndex] = 'ImageButton.java:' + '92' , dynamicCast(this$static.widget, 189)), align);
  $stackDepth_0 = stackIndex - 1;
}

function $isCollapsed(this$static, widget){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $isCollapsed;
  if ($location_0[stackIndex] = 'LayoutPanel.java:' + '738' , instanceOf(this$static.layout, 214)) {
    returnTemp = ($location_0[stackIndex] = 'BorderLayout.java:' + '688' , dynamicCast(($location_0[stackIndex] = 'LayoutPanel.java:' + '739' , dynamicCast(this$static.layout, 214) , widget).layoutData, 203)).collapsed;
    $stackDepth_0 = stackIndex - 1;
    return returnTemp;
  }
  $stackDepth_0 = stackIndex - 1;
  return false;
}

function $setCollapsed_0(this$static, widget, collapse){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setCollapsed_0;
  if ($location_0[stackIndex] = 'LayoutPanel.java:' + '745' , instanceOf(this$static.layout, 214)) {
    if (collapse != ($location_0[stackIndex] = 'LayoutPanel.java:' + '746' , $isCollapsed(this$static, widget))) {
      $setCollapsed_2(($location_0[stackIndex] = 'LayoutPanel.java:' + '747' , dynamicCast(this$static.layout, 214)), this$static, widget, collapse);
      $location_0[stackIndex] = 'LayoutPanel.java:' + '749' , $invalidate_1(this$static, widget);
    }
  }
  $stackDepth_0 = stackIndex - 1;
}

function $StackLayoutPanel(this$static){
  var layoutPanel, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $StackLayoutPanel;
  $initWidget(this$static, ($location_0[stackIndex] = 'LayoutComposite.java:' + '66' , $LayoutPanel_1(($location_0[stackIndex] = 'LayoutComposite.java:' + '66' , new LayoutPanel), ($location_0[stackIndex] = 'StackLayoutPanel.java:' + '86' , $BoxLayout_1(($location_0[stackIndex] = 'StackLayoutPanel.java:' + '86' , new BoxLayout), ($location_0[stackIndex] = 'BoxLayout.java:' + '170' , $clinit_796() , VERTICAL))))));
  this$static.panels = $HashMap(($location_0[stackIndex] = 'StackLayoutPanel.java:' + '72' , new HashMap));
  this$static.clickHandler = $StackLayoutPanel$1(($location_0[stackIndex] = 'StackLayoutPanel.java:' + '74' , new StackLayoutPanel$1), this$static);
  $location_0[stackIndex] = 'StackLayoutPanel.java:' + '87' , layoutPanel = ($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.widget, 182));
  $location_0[stackIndex] = 'LayoutPanel.java:' + '297' , layoutPanel.widgetSpacing = 0;
  $location_0[stackIndex] = 'LayoutPanel.java:' + '244' , layoutPanel.animationCallback = $StackLayoutPanel$2(($location_0[stackIndex] = 'StackLayoutPanel.java:' + '89' , new StackLayoutPanel$2), this$static);
  $location_0[stackIndex] = 'Element.java:' + '688' , this$static.element['className'] = 'mosaic-StackLayoutPanel';
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $add_27(this$static, w, stackText, asHTML){
  var caption, content, layoutPanel, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $add_27;
  caption = $Caption(($location_0[stackIndex] = 'StackLayoutPanel.java:' + '120' , new Caption), stackText, asHTML);
  content = $LayoutPanel(($location_0[stackIndex] = 'StackLayoutPanel.java:' + '121' , new LayoutPanel));
  $location_0[stackIndex] = 'StackLayoutPanel.java:' + '122' , layoutPanel = ($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.widget, 182));
  $location_0[stackIndex] = 'UIObject.java:' + '449' , setStyleName(caption.element, 'mosaic-StackLayoutPanelItem', true);
  $location_0[stackIndex] = 'Caption.java:' + '133' , $addDomHandler(caption, this$static.clickHandler, ($location_0[stackIndex] = 'Caption.java:' + '133' , $clinit_129() , ($location_0[stackIndex] = 'ClickEvent.java:' + '27' , $clinit_129()) , TYPE_1));
  $location_0[stackIndex] = 'UIObject.java:' + '449' , setStyleName(content.element, 'mosaic-StackLayoutPanelContent', true);
  $location_0[stackIndex] = 'LayoutPanel.java:' + '391' , $insert_0(content, w, content.children_0.size_0);
  $location_0[stackIndex] = 'StackLayoutPanel.java:' + '127' , $put_0(this$static.panels, w, content);
  $add_26(layoutPanel, caption, ($location_0[stackIndex] = 'StackLayoutPanel.java:' + '128' , $BoxLayoutData_4(($location_0[stackIndex] = 'StackLayoutPanel.java:' + '128' , new BoxLayoutData), ($location_0[stackIndex] = 'BoxLayoutData.java:' + '30' , $clinit_798() , HORIZONTAL_0))));
  $add_26(layoutPanel, content, $BoxLayoutData_4(($location_0[stackIndex] = 'StackLayoutPanel.java:' + '129' , new BoxLayoutData), BOTH));
  if (this$static.visibleStack == -1) {
    $location_0[stackIndex] = 'StackLayoutPanel.java:' + '131' , $showStack(this$static, 0);
  }
   else {
    $location_0[stackIndex] = 'StackLayoutPanel.java:' + '133' , $setStackVisible(this$static, this$static.visibleStack, false);
    $location_0[stackIndex] = 'StackLayoutPanel.java:' + '134' , this$static.visibleStack = ($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.widget, 182)).children_0.size_0 - 2;
    $location_0[stackIndex] = 'StackLayoutPanel.java:' + '135' , $setStackVisible(this$static, this$static.visibleStack, true);
  }
  $stackDepth_0 = stackIndex - 1;
}

function $layout_5(this$static){
  var i, n, w, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $layout_5;
  for ($location_0[stackIndex] = 'StackLayoutPanel.java:' + '237' , i = 0 , ($location_0[stackIndex] = 'StackLayoutPanel.java:' + '237' , n = ($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.widget, 182)).children_0.size_0); i < n; $location_0[stackIndex] = 'StackLayoutPanel.java:' + '237' , ++i) {
    $location_0[stackIndex] = 'StackLayoutPanel.java:' + '238' , w = ($location_0[stackIndex] = 'LayoutPanel.java:' + '490' , $getUnDecoratedWidget(($location_0[stackIndex] = 'ComplexPanel.java:' + '36' , $get_7(($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.widget, 182)).children_0, i))));
    w != null && ($location_0[stackIndex] = 'Cast.java:' + '76' , canCast(w.typeId$, 193)) && ($location_0[stackIndex] = 'Style.java:' + '1449' , w.element.style['zIndex'] = '1' , undefined);
  }
  $location_0[stackIndex] = 'LayoutComposite.java:' + '125' , ($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.widget, 182)).layout_0();
  $stackDepth_0 = stackIndex - 1;
}

function $setStackVisible(this$static, index, visible){
  var caption, content, layoutData, layoutDataObject, oldIndex, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setStackVisible;
  $location_0[stackIndex] = 'StackLayoutPanel.java:' + '171' , oldIndex = this$static.visibleStack;
  $location_0[stackIndex] = 'StackLayoutPanel.java:' + '173' , this$static.visibleStack = index;
  caption = ($location_0[stackIndex] = 'StackLayoutPanel.java:' + '175' , dynamicCast(($location_0[stackIndex] = 'LayoutPanel.java:' + '490' , $getUnDecoratedWidget(($location_0[stackIndex] = 'ComplexPanel.java:' + '36' , $get_7(($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.widget, 182)).children_0, index)))), 193));
  content = ($location_0[stackIndex] = 'StackLayoutPanel.java:' + '176' , dynamicCast(($location_0[stackIndex] = 'LayoutPanel.java:' + '490' , $getUnDecoratedWidget(($location_0[stackIndex] = 'ComplexPanel.java:' + '36' , $get_7(($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.widget, 182)).children_0, index + 1)))), 182));
  visible?($location_0[stackIndex] = 'UIObject.java:' + '449' , setStyleName(caption.element, 'mosaic-StackLayoutPanelItem-selected', true)):($location_0[stackIndex] = 'UIObject.java:' + '595' , setStyleName(caption.element, 'mosaic-StackLayoutPanelItem-selected', false));
  $location_0[stackIndex] = 'UIObject.java:' + '214' , content.element.style.display = visible?'':'none';
  if (visible && oldIndex >= 0) {
    $location_0[stackIndex] = 'StackLayoutPanel.java:' + '188' , layoutDataObject = content.layoutData;
    if (layoutDataObject != null && ($location_0[stackIndex] = 'Cast.java:' + '76' , canCast(layoutDataObject.typeId$, 194))) {
      layoutData = ($location_0[stackIndex] = 'StackLayoutPanel.java:' + '190' , dynamicCast(layoutDataObject, 194));
      index > oldIndex?($location_0[stackIndex] = 'StackLayoutPanel.java:' + '192' , $setSourceTop(layoutData, parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , content.element['offsetHeight'])) || 0)):($location_0[stackIndex] = 'StackLayoutPanel.java:' + '194' , $setSourceTop(layoutData, -(parseInt(($location_0[stackIndex] = 'Element.java:' + '349' , content.element['offsetHeight'])) || 0)));
    }
  }
  $stackDepth_0 = stackIndex - 1;
}

function $showStack(this$static, index){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $showStack;
  $location_0[stackIndex] = 'StackLayoutPanel.java:' + '214' , index <<= 1;
  if (index >= ($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.widget, 182)).children_0.size_0 || index < 0 || index == this$static.visibleStack) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  this$static.visibleStack >= 0 && ($location_0[stackIndex] = 'StackLayoutPanel.java:' + '221' , $setStackVisible(this$static, this$static.visibleStack, false));
  $location_0[stackIndex] = 'StackLayoutPanel.java:' + '224' , $setStackVisible(this$static, index, true);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_450(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_450;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_StackLayoutPanel_2_classLit;
}

function layout_8(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = layout_8;
  $location_0[stackIndex] = 'StackLayoutPanel.java:' + '236' , $layout_5(this);
  $stackDepth_0 = stackIndex - 1;
}

function StackLayoutPanel(){
}

_ = StackLayoutPanel.prototype = new LayoutComposite;
_.getClass$ = getClass_450;
_.layout_0 = layout_8;
_.typeId$ = 305;
_.visibleStack = -1;
function $StackLayoutPanel$1(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $StackLayoutPanel$1;
  $location_0[stackIndex] = 'StackLayoutPanel.java:' + '74' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_451(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_451;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_StackLayoutPanel$1_2_classLit;
}

function onClick_7(event_0){
  var w, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClick_7;
  w = ($location_0[stackIndex] = 'StackLayoutPanel.java:' + '76' , dynamicCast(event_0.source_0, 2));
  if (w != null && ($location_0[stackIndex] = 'Cast.java:' + '76' , canCast(w.typeId$, 193))) {
    $location_0[stackIndex] = 'StackLayoutPanel.java:' + '78' , $showStack(this.this$0, ($location_0[stackIndex] = 'ComplexPanel.java:' + '44' , $indexOf_1(($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this.this$0.widget, 182)).children_0, ($location_0[stackIndex] = 'LayoutPanel.java:' + '500' , $getDecoratorWidget(w)))) >> 1);
    $location_0[stackIndex] = 'LayoutComposite.java:' + '116' , $invalidate_1(($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this.this$0.widget, 182)), null);
    $location_0[stackIndex] = 'StackLayoutPanel.java:' + '80' , $layout_5(this.this$0);
  }
  $stackDepth_0 = stackIndex - 1;
}

function StackLayoutPanel$1(){
}

_ = StackLayoutPanel$1.prototype = new Object_0;
_.getClass$ = getClass_451;
_.onClick = onClick_7;
_.typeId$ = 306;
_.this$0 = null;
function $StackLayoutPanel$2(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $StackLayoutPanel$2;
  $location_0[stackIndex] = 'StackLayoutPanel.java:' + '89' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $onAnimationComplete(this$static){
  var i, n, w, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $onAnimationComplete;
  for ($location_0[stackIndex] = 'StackLayoutPanel.java:' + '91' , i = 0 , ($location_0[stackIndex] = 'StackLayoutPanel.java:' + '91' , n = ($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.this$0.widget, 182)).children_0.size_0); i < n; $location_0[stackIndex] = 'StackLayoutPanel.java:' + '91' , ++i) {
    $location_0[stackIndex] = 'StackLayoutPanel.java:' + '92' , w = ($location_0[stackIndex] = 'LayoutPanel.java:' + '490' , $getUnDecoratedWidget(($location_0[stackIndex] = 'ComplexPanel.java:' + '36' , $get_7(($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.this$0.widget, 182)).children_0, i))));
    w != null && ($location_0[stackIndex] = 'Cast.java:' + '76' , canCast(w.typeId$, 193)) && ($location_0[stackIndex] = 'Style.java:' + '1449' , w.element.style['zIndex'] = '0' , undefined);
  }
  $stackDepth_0 = stackIndex - 1;
}

function getClass_452(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_452;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_StackLayoutPanel$2_2_classLit;
}

function onAnimationComplete(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onAnimationComplete;
  $location_0[stackIndex] = 'StackLayoutPanel.java:' + '90' , $onAnimationComplete(this);
  $stackDepth_0 = stackIndex - 1;
}

function StackLayoutPanel$2(){
}

_ = StackLayoutPanel$2.prototype = new Object_0;
_.getClass$ = getClass_452;
_.onAnimationComplete = onAnimationComplete;
_.typeId$ = 0;
_.this$0 = null;
function $Viewport(this$static, layout){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $Viewport;
  $initWidget(this$static, $LayoutPanel_1(($location_0[stackIndex] = 'LayoutComposite.java:' + '66' , new LayoutPanel), layout));
  this$static.resizeTimer = $Viewport$1(($location_0[stackIndex] = 'Viewport.java:' + '42' , new Viewport$1), this$static);
  $location_0[stackIndex] = 'Viewport.java:' + '68' , this$static.resizeHandlerRegistration = ($location_0[stackIndex] = 'Window.java:' + '529' , maybeInitializeCloseHandlers() , ($location_0[stackIndex] = 'Window.java:' + '530' , maybeInitializeResizeHandlers()) , addHandler(($location_0[stackIndex] = 'Window.java:' + '531' , getType_10()), this$static));
  this$static.closeHandlerRegistration = addCloseHandler($Viewport$2(($location_0[stackIndex] = 'Viewport.java:' + '69' , new Viewport$2), this$static));
  $location_0[stackIndex] = 'Window.java:' + '623' , $enableScrolling($doc, false);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $setBounds_0(this$static, x, y, width, height){
  var elem, margins, elem_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setBounds_0;
  $location_0[stackIndex] = 'Viewport.java:' + '115' , $clinit_433();
  $location_0[stackIndex] = 'Viewport.java:' + '115' , $setWidgetPosition(($location_0[stackIndex] = 'RootPanel.java:' + '151' , get_1(null)), this$static, x, y);
  $location_0[stackIndex] = 'Viewport.java:' + '117' , elem = this$static.element;
  margins = ($location_0[stackIndex] = 'Viewport.java:' + '118' , getMarginSizes(elem));
  $location_0[stackIndex] = 'WidgetHelper.java:' + '327' , elem_0 = this$static.element;
  $location_0[stackIndex] = 'WidgetHelper.java:' + '328' , setSize_1(this$static, width - (($location_0[stackIndex] = 'Viewport.java:' + '120' , margins[1]) + margins[3]), height - (($location_0[stackIndex] = 'Viewport.java:' + '121' , margins[0]) + margins[2]), ($location_0[stackIndex] = 'WidgetHelper.java:' + '328' , getMarginSizes(elem_0)), ($location_0[stackIndex] = 'WidgetHelper.java:' + '329' , getBorderSizes(elem_0)), getPaddingSizes(elem_0));
  $stackDepth_0 = stackIndex - 1;
}

function getClass_457(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_457;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_Viewport_2_classLit;
}

function getLayoutPanel_0(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getLayoutPanel_0;
  returnTemp = ($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this.widget, 182));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function onLoad_17(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onLoad_17;
  $location_0[stackIndex] = 'Viewport.java:' + '97' , $schedule(this.resizeTimer, 1);
  $stackDepth_0 = stackIndex - 1;
}

function onResize_10(event_0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onResize_10;
  ($location_0[stackIndex] = 'Viewport.java:' + '109' , $isAttached_0(this)) && ($location_0[stackIndex] = 'Viewport.java:' + '110' , $schedule(this.resizeTimer, 333));
  $stackDepth_0 = stackIndex - 1;
}

function Viewport(){
}

_ = Viewport.prototype = new LayoutComposite;
_.getClass$ = getClass_457;
_.getLayoutPanel = getLayoutPanel_0;
_.onLoad = onLoad_17;
_.onResize = onResize_10;
_.typeId$ = 310;
_.closeHandlerRegistration = null;
_.resizeHandlerRegistration = null;
function $clinit_732(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_732;
  $location_0[stackIndex] = 'Viewport.java:' + '42' , $clinit_732 = nullMethod;
  $clinit_43();
  $stackDepth_0 = stackIndex - 1;
}

function $Viewport$1(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $Viewport$1;
  $location_0[stackIndex] = 'Viewport.java:' + '42' , $clinit_732();
  this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_458(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_458;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_Viewport$1_2_classLit;
}

function run_8(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = run_8;
  $location_0[stackIndex] = 'Viewport.java:' + '45' , $setBounds_0(this.this$0, 0, 0, ($location_0[stackIndex] = 'Window.java:' + '643' , $getClientWidth_1($doc)), ($location_0[stackIndex] = 'Window.java:' + '633' , $getClientHeight_1($doc)));
  $location_0[stackIndex] = 'LayoutComposite.java:' + '125' , ($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this.this$0.widget, 182)).layout_0();
  $stackDepth_0 = stackIndex - 1;
}

function Viewport$1(){
}

_ = Viewport$1.prototype = new Timer;
_.getClass$ = getClass_458;
_.run = run_8;
_.typeId$ = 311;
_.this$0 = null;
function $Viewport$2(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $Viewport$2;
  $location_0[stackIndex] = 'Viewport.java:' + '69' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_459(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_459;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_Viewport$2_2_classLit;
}

function onClose_7(event_0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClose_7;
  !!this.this$0.resizeHandlerRegistration && ($location_0[stackIndex] = 'Viewport.java:' + '72' , $removeHandler(this.this$0.resizeHandlerRegistration));
  !!this.this$0.closeHandlerRegistration && ($location_0[stackIndex] = 'Viewport.java:' + '75' , $removeHandler(this.this$0.closeHandlerRegistration));
  $stackDepth_0 = stackIndex - 1;
}

function Viewport$2(){
}

_ = Viewport$2.prototype = new Object_0;
_.getClass$ = getClass_459;
_.onClose = onClose_7;
_.typeId$ = 312;
_.this$0 = null;
function $setAlignment_0(this$static, grid){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setAlignment_0;
  $location_0[stackIndex] = 'WidgetWrapper.java:' + '89' , $setAlignment(grid.cellFormatter, 0, 0, this$static.alignLeft, this$static.alignTop);
  $stackDepth_0 = stackIndex - 1;
}

function $setHorizontalAlignment_1(this$static, align){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setHorizontalAlignment_1;
  $location_0[stackIndex] = 'WidgetWrapper.java:' + '75' , this$static.alignLeft = align;
  $location_0[stackIndex] = 'WidgetWrapper.java:' + '76' , $setAlignment_0(this$static, ($location_0[stackIndex] = 'WidgetWrapper.java:' + '67' , dynamicCast(this$static.widget, 190)));
  $stackDepth_0 = stackIndex - 1;
}

function $setVerticalAlignment_1(this$static, align){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setVerticalAlignment_1;
  $location_0[stackIndex] = 'WidgetWrapper.java:' + '84' , this$static.alignTop = align;
  $location_0[stackIndex] = 'WidgetWrapper.java:' + '85' , $setAlignment_0(this$static, ($location_0[stackIndex] = 'WidgetWrapper.java:' + '67' , dynamicCast(this$static.widget, 190)));
  $stackDepth_0 = stackIndex - 1;
}

function $setCollapsed_2(this$static, layoutPanel, widget, collapse){
  var imgBtn, layoutData, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setCollapsed_2;
  $location_0[stackIndex] = 'BorderLayout.java:' + '695' , $init_8(this$static, layoutPanel);
  layoutData = ($location_0[stackIndex] = 'BorderLayout.java:' + '697' , dynamicCast(widget.layoutData, 203));
  if (collapse) {
    if (widget == this$static.west || widget == this$static.east || widget == this$static.north || widget == this$static.south) {
      if (!layoutData.collapsedStateWidget) {
        $location_0[stackIndex] = 'BorderLayout.java:' + '703' , imgBtn = null;
        if (layoutData.region == ($location_0[stackIndex] = 'BorderLayout.java:' + '199' , $clinit_789() , NORTH_0)) {
          imgBtn = ($location_0[stackIndex] = 'BorderLayout.java:' + '705' , $ImageButton(($location_0[stackIndex] = 'BorderLayout.java:' + '705' , new ImageButton), ($clinit_649() , ($location_0[stackIndex] = 'CaptionImages_generatedBundle.java:' + '29' , $clinit_651()) , toolCollapseDown_SINGLETON)));
          $location_0[stackIndex] = 'UIObject.java:' + '449' , setStyleName(imgBtn.element, 'NorthCollapsedImageButton', true);
          $location_0[stackIndex] = 'BorderLayout.java:' + '707' , $setHorizontalAlignment_0(imgBtn, ($location_0[stackIndex] = 'HasHorizontalAlignment.java:' + '74' , $clinit_388() , ALIGN_RIGHT));
        }
         else if (layoutData.region == EAST_0) {
          imgBtn = ($location_0[stackIndex] = 'BorderLayout.java:' + '709' , $ImageButton(($location_0[stackIndex] = 'BorderLayout.java:' + '709' , new ImageButton), ($clinit_649() , ($location_0[stackIndex] = 'CaptionImages_generatedBundle.java:' + '33' , $clinit_651()) , toolCollapseLeft_SINGLETON)));
          $location_0[stackIndex] = 'UIObject.java:' + '449' , setStyleName(imgBtn.element, 'EastCollapsedImageButton', true);
          $location_0[stackIndex] = 'BorderLayout.java:' + '711' , $setVerticalAlignment_0(imgBtn, ($location_0[stackIndex] = 'HasVerticalAlignment.java:' + '73' , $clinit_393() , ALIGN_TOP));
        }
         else if (layoutData.region == SOUTH_0) {
          imgBtn = ($location_0[stackIndex] = 'BorderLayout.java:' + '713' , $ImageButton(($location_0[stackIndex] = 'BorderLayout.java:' + '713' , new ImageButton), ($clinit_649() , ($location_0[stackIndex] = 'CaptionImages_generatedBundle.java:' + '41' , $clinit_651()) , toolCollapseUp_SINGLETON)));
          $location_0[stackIndex] = 'UIObject.java:' + '449' , setStyleName(imgBtn.element, 'SouthCollapsedImageButton', true);
          $location_0[stackIndex] = 'BorderLayout.java:' + '715' , $setHorizontalAlignment_0(imgBtn, ($location_0[stackIndex] = 'HasHorizontalAlignment.java:' + '74' , $clinit_388() , ALIGN_RIGHT));
        }
         else if (layoutData.region == WEST_0) {
          imgBtn = ($location_0[stackIndex] = 'BorderLayout.java:' + '717' , $ImageButton(($location_0[stackIndex] = 'BorderLayout.java:' + '717' , new ImageButton), ($clinit_649() , ($location_0[stackIndex] = 'CaptionImages_generatedBundle.java:' + '37' , $clinit_651()) , toolCollapseRight_SINGLETON)));
          $location_0[stackIndex] = 'UIObject.java:' + '449' , setStyleName(imgBtn.element, 'WestCollapsedImageButton', true);
          $location_0[stackIndex] = 'BorderLayout.java:' + '719' , $setVerticalAlignment_0(imgBtn, ($location_0[stackIndex] = 'HasVerticalAlignment.java:' + '73' , $clinit_393() , ALIGN_TOP));
        }
        if (!imgBtn) {
          $stackDepth_0 = stackIndex - 1;
          return;
        }
        $location_0[stackIndex] = 'ImageButton.java:' + '58' , $addDomHandler(imgBtn, $BorderLayout$1(($location_0[stackIndex] = 'BorderLayout.java:' + '724' , new BorderLayout$1), layoutPanel, widget), ($location_0[stackIndex] = 'ImageButton.java:' + '58' , $clinit_129() , ($location_0[stackIndex] = 'ClickEvent.java:' + '27' , $clinit_129()) , TYPE_1));
        $location_0[stackIndex] = 'BorderLayout.java:' + '731' , layoutData.collapsedStateWidget = imgBtn;
      }
      $location_0[stackIndex] = 'BorderLayout.java:' + '733' , layoutData.collapsed = collapse;
      $location_0[stackIndex] = 'BorderLayout.java:' + '734' , widget.setVisible(false);
      $location_0[stackIndex] = 'BorderLayout.java:' + '735' , $syncDecoratorVisibility(widget);
      $location_0[stackIndex] = 'UIObject.java:' + '214' , layoutData.collapsedStateWidget.element.style.display = '';
      !($location_0[stackIndex] = 'BorderLayout.java:' + '737' , $isAttached_0(layoutData.collapsedStateWidget)) && ($location_0[stackIndex] = 'BorderLayout.java:' + '738' , $add_26(layoutPanel, layoutData.collapsedStateWidget, $BorderLayoutData_1(($location_0[stackIndex] = 'BorderLayout.java:' + '739' , new BorderLayoutData), layoutData.region)));
    }
  }
   else if (layoutData.collapsed) {
    $location_0[stackIndex] = 'BorderLayout.java:' + '744' , layoutData.collapsed = collapse;
    $location_0[stackIndex] = 'UIObject.java:' + '214' , layoutData.collapsedStateWidget.element.style.display = 'none';
    $location_0[stackIndex] = 'BorderLayout.java:' + '746' , widget.setVisible(true);
    $location_0[stackIndex] = 'BorderLayout.java:' + '747' , $syncDecoratorVisibility(widget);
  }
  $stackDepth_0 = stackIndex - 1;
}

function $BorderLayout$1(this$static, val$layoutPanel, val$widget){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $BorderLayout$1;
  $location_0[stackIndex] = 'BorderLayout.java:' + '724' , this$static.val$layoutPanel = val$layoutPanel;
  this$static.val$widget = val$widget;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_503(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_503;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_layout_BorderLayout$1_2_classLit;
}

function onClick_10(event_0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClick_10;
  $location_0[stackIndex] = 'BorderLayout.java:' + '726' , $setCollapsed_0(this.val$layoutPanel, this.val$widget, false);
  $location_0[stackIndex] = 'BorderLayout.java:' + '727' , $invalidate_1(this.val$layoutPanel, this.val$widget);
  $location_0[stackIndex] = 'BorderLayout.java:' + '728' , this.val$layoutPanel.layout_0();
  $stackDepth_0 = stackIndex - 1;
}

function BorderLayout$1(){
}

_ = BorderLayout$1.prototype = new Object_0;
_.getClass$ = getClass_503;
_.onClick = onClick_10;
_.typeId$ = 331;
_.val$layoutPanel = null;
_.val$widget = null;
function $BorderLayoutData_3(this$static, region, preferredSize){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $BorderLayoutData_3;
  $location_0[stackIndex] = 'BorderLayoutData.java:' + '140' , $BorderLayoutData_4(this$static, region, preferredSize, false);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $BorderLayoutData_4(this$static, region, preferredSize, decorate){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $BorderLayoutData_4;
  $location_0[stackIndex] = 'LayoutData.java:' + '40' , this$static.decorate = decorate;
  $location_0[stackIndex] = 'BorderLayoutData.java:' + '431' , this$static.region = region;
  if (region == ($location_0[stackIndex] = 'BorderLayout.java:' + '199' , $clinit_789() , NORTH_0) || region == SOUTH_0) {
    $location_0[stackIndex] = 'BorderLayoutData.java:' + '199' , $setPreferredHeight(this$static, preferredSize);
    $location_0[stackIndex] = 'BorderLayoutData.java:' + '200' , $setPreferredWidth(this$static, '0px');
  }
   else if (region == WEST_0 || region == EAST_0) {
    $location_0[stackIndex] = 'BorderLayoutData.java:' + '202' , $setPreferredWidth(this$static, preferredSize);
    $location_0[stackIndex] = 'BorderLayoutData.java:' + '203' , $setPreferredHeight(this$static, '0px');
  }
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $BorderLayoutData_7(this$static, region, preferredSize, minSize, maxSize, decorate){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $BorderLayoutData_7;
  $location_0[stackIndex] = 'LayoutData.java:' + '40' , this$static.decorate = decorate;
  $location_0[stackIndex] = 'BorderLayoutData.java:' + '431' , this$static.region = region;
  if (region == ($location_0[stackIndex] = 'BorderLayout.java:' + '199' , $clinit_789() , NORTH_0) || region == SOUTH_0) {
    $location_0[stackIndex] = 'BorderLayoutData.java:' + '407' , $setPreferredHeight(this$static, preferredSize);
    $location_0[stackIndex] = 'BorderLayoutData.java:' + '408' , $setPreferredWidth(this$static, '0px');
  }
   else if (region == WEST_0 || region == EAST_0) {
    $location_0[stackIndex] = 'BorderLayoutData.java:' + '410' , $setPreferredWidth(this$static, preferredSize);
    $location_0[stackIndex] = 'BorderLayoutData.java:' + '411' , $setPreferredHeight(this$static, '0px');
  }
  $location_0[stackIndex] = 'BorderLayoutData.java:' + '465' , this$static.minSize = minSize;
  $location_0[stackIndex] = 'BorderLayoutData.java:' + '479' , this$static.maxSize = maxSize;
  minSize != null && maxSize != null && ($location_0[stackIndex] = 'BorderLayoutData.java:' + '493' , this$static.resizable = true);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_607(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_607;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_PreferencesModule_2_classLit;
}

function provideWidget(callback){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = provideWidget;
  $location_0[stackIndex] = 'PreferencesModule.java:' + '38' , runAsync_0($PreferencesModule$1(($location_0[stackIndex] = 'PreferencesModule.java:' + '39' , new PreferencesModule$1), callback));
  $stackDepth_0 = stackIndex - 1;
}

function PreferencesModule(){
}

_ = PreferencesModule.prototype = new Object_0;
_.getClass$ = getClass_607;
_.provideWidget = provideWidget;
_.typeId$ = 394;
function $PreferencesModule$1(this$static, val$callback){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $PreferencesModule$1;
  $location_0[stackIndex] = 'PreferencesModule.java:' + '39' , this$static.val$callback = val$callback;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_608(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_608;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_PreferencesModule$1_2_classLit;
}

function PreferencesModule$1(){
}

_ = PreferencesModule$1.prototype = new Object_0;
_.getClass$ = getClass_608;
_.typeId$ = 0;
_.val$callback = null;
function provideWidget_0(callback){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = provideWidget_0;
  $location_0[stackIndex] = 'PreferencesView.java:' + '63' , $provideWidget(this, callback);
  $stackDepth_0 = stackIndex - 1;
}

_ = PreferencesView.prototype;
_.provideWidget = provideWidget_0;
function getClass_611(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_611;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_ServerStatusModule_2_classLit;
}

function provideWidget_1(callback){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = provideWidget_1;
  $location_0[stackIndex] = 'ServerStatusModule.java:' + '38' , runAsync_1($ServerStatusModule$1(($location_0[stackIndex] = 'ServerStatusModule.java:' + '39' , new ServerStatusModule$1), callback));
  $stackDepth_0 = stackIndex - 1;
}

function ServerStatusModule(){
}

_ = ServerStatusModule.prototype = new Object_0;
_.getClass$ = getClass_611;
_.provideWidget = provideWidget_1;
_.typeId$ = 397;
function $ServerStatusModule$1(this$static, val$callback){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ServerStatusModule$1;
  $location_0[stackIndex] = 'ServerStatusModule.java:' + '39' , this$static.val$callback = val$callback;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_612(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_612;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_ServerStatusModule$1_2_classLit;
}

function ServerStatusModule$1(){
}

_ = ServerStatusModule$1.prototype = new Object_0;
_.getClass$ = getClass_612;
_.typeId$ = 0;
_.val$callback = null;
function provideWidget_2(callback){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = provideWidget_2;
  $location_0[stackIndex] = 'ServerStatusView.java:' + '66' , $provideWidget_0(this, callback);
  $stackDepth_0 = stackIndex - 1;
}

_ = ServerStatusView.prototype;
_.provideWidget = provideWidget_2;
function $processIcon(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $processIcon;
  !processIcon && (processIcon = $ImageResourcePrototype(($location_0[stackIndex] = 'org_jboss_bpm_console_client_icons_ConsoleIconBundle_default_InlineClientBundleGenerator.java:' + '179' , new ImageResourcePrototype), 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABmUlEQVR42oWTbcsBQRSG99dK4QcgNSk+KYWSKPKBvJWiiLL5QJQPQuTtt5xnrxPb7COZunPtfe4zOzNmHefLqFQqxpO8ZJxfo1wuG0+u9SzP51MFW75LNtBcLBZNqVSS7XYrrVZLptOp8uPxkPv9roxHDSZLjz9BoVBwV6uVvu1yuQg8Ho+VEYwHk4HpCayi0WjI6XSS6/Uq5/NZf1kBsj0yZD/OYDAYyGKxkOPxKLfbTZrNpoRCIRWMR40MWb8xk8mYbDYrs9lMOp2Ovom9xmIxf4kwHjUyZOmh10mn07qvw+Eg6/Va3xSPxz+WiEeNDFl66HVSqZQsl0tfhJj9/wR41OwsvU4ikTDM3uv1pFqtyn6/l8lkEjhlGI8aGbL00GtfJGm32zoze53P5+9bqIxHjYx9sfzBfkajkWw2Gz3p3W7n30QYjxoZ3bs9OOV6va7h4XAocD6fV0YwHkwGtv8lJxqNmkgkIrVaTZLJpORyOeV+v6+C8ajBZOkJrCIcDhtPrvUs3W5XBVu+S/bn1+ndQPO+ifC33B8qjQ4+ZtK3dQAAAABJRU5ErkJggg==', 0, 0, 16, 16));
  $stackDepth_0 = stackIndex - 1;
  return processIcon;
}

var databaseIcon = null, deploymentIcon = null, docIcon = null, historySearchIcon = null, jobsIcon = null, processIcon = null, reportIcon = null, runtimeIcon = null, taskIcon = null, userIcon = null;
function provideWidget_3(callback){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = provideWidget_3;
  $location_0[stackIndex] = 'DefinitionListView.java:' + '83' , $provideWidget_1(this, callback);
  $stackDepth_0 = stackIndex - 1;
}

_ = DefinitionListView.prototype;
_.provideWidget = provideWidget_3;
function provideWidget_4(callback){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = provideWidget_4;
  $location_0[stackIndex] = 'InstanceListView.java:' + '118' , $provideWidget_2(this, callback);
  $stackDepth_0 = stackIndex - 1;
}

_ = InstanceListView.prototype;
_.provideWidget = provideWidget_4;
function provideWidget_5(callback){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = provideWidget_5;
  $location_0[stackIndex] = 'MergedProcessView.java:' + '42' , $provideWidget_3(this, callback);
  $stackDepth_0 = stackIndex - 1;
}

_ = MergedProcessView.prototype;
_.provideWidget = provideWidget_5;
function getClass_690(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_690;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_ProcessModule_2_classLit;
}

function provideWidget_6(callback){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = provideWidget_6;
  $location_0[stackIndex] = 'ProcessModule.java:' + '45' , runAsync_2($ProcessModule$1(($location_0[stackIndex] = 'ProcessModule.java:' + '46' , new ProcessModule$1), callback));
  $stackDepth_0 = stackIndex - 1;
}

function ProcessModule(){
}

_ = ProcessModule.prototype = new Object_0;
_.getClass$ = getClass_690;
_.provideWidget = provideWidget_6;
_.typeId$ = 457;
function $ProcessModule$1(this$static, val$callback){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ProcessModule$1;
  $location_0[stackIndex] = 'ProcessModule.java:' + '46' , this$static.val$callback = val$callback;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_691(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_691;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_ProcessModule$1_2_classLit;
}

function ProcessModule$1(){
}

_ = ProcessModule$1.prototype = new Object_0;
_.getClass$ = getClass_691;
_.typeId$ = 0;
_.val$callback = null;
function getClass_711(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_711;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_report_ReportModule_2_classLit;
}

function provideWidget_7(callback){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = provideWidget_7;
  $location_0[stackIndex] = 'ReportModule.java:' + '38' , runAsync_3($ReportModule$1(($location_0[stackIndex] = 'ReportModule.java:' + '39' , new ReportModule$1), this, callback));
  $stackDepth_0 = stackIndex - 1;
}

function ReportModule(){
}

_ = ReportModule.prototype = new Object_0;
_.getClass$ = getClass_711;
_.provideWidget = provideWidget_7;
_.typeId$ = 474;
_.instance = null;
function $ReportModule$1(this$static, this$0, val$callback){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ReportModule$1;
  $location_0[stackIndex] = 'ReportModule.java:' + '39' , this$static.this$0 = this$0;
  this$static.val$callback = val$callback;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_712(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_712;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_report_ReportModule$1_2_classLit;
}

function ReportModule$1(){
}

_ = ReportModule$1.prototype = new Object_0;
_.getClass$ = getClass_712;
_.typeId$ = 0;
_.this$0 = null;
_.val$callback = null;
function provideWidget_8(callback){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = provideWidget_8;
  $location_0[stackIndex] = 'ReportView.java:' + '52' , $provideWidget_4(this, callback);
  $stackDepth_0 = stackIndex - 1;
}

_ = ReportView.prototype;
_.provideWidget = provideWidget_8;
function getClass_723(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_723;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_AssignedTasksModule_2_classLit;
}

function provideWidget_9(callback){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = provideWidget_9;
  $location_0[stackIndex] = 'AssignedTasksModule.java:' + '38' , runAsync_4($AssignedTasksModule$1(($location_0[stackIndex] = 'AssignedTasksModule.java:' + '39' , new AssignedTasksModule$1), callback));
  $stackDepth_0 = stackIndex - 1;
}

function AssignedTasksModule(){
}

_ = AssignedTasksModule.prototype = new Object_0;
_.getClass$ = getClass_723;
_.provideWidget = provideWidget_9;
_.typeId$ = 485;
function $AssignedTasksModule$1(this$static, val$callback){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $AssignedTasksModule$1;
  $location_0[stackIndex] = 'AssignedTasksModule.java:' + '39' , this$static.val$callback = val$callback;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_724(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_724;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_AssignedTasksModule$1_2_classLit;
}

function AssignedTasksModule$1(){
}

_ = AssignedTasksModule$1.prototype = new Object_0;
_.getClass$ = getClass_724;
_.typeId$ = 0;
_.val$callback = null;
function provideWidget_10(callback){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = provideWidget_10;
  $location_0[stackIndex] = 'AssignedTasksView.java:' + '84' , $provideWidget_5(this, callback);
  $stackDepth_0 = stackIndex - 1;
}

_ = AssignedTasksView.prototype;
_.provideWidget = provideWidget_10;
function getClass_739(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_739;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_OpenTasksModule_2_classLit;
}

function provideWidget_11(callback){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = provideWidget_11;
  $location_0[stackIndex] = 'OpenTasksModule.java:' + '38' , runAsync_5($OpenTasksModule$1(($location_0[stackIndex] = 'OpenTasksModule.java:' + '39' , new OpenTasksModule$1), callback));
  $stackDepth_0 = stackIndex - 1;
}

function OpenTasksModule(){
}

_ = OpenTasksModule.prototype = new Object_0;
_.getClass$ = getClass_739;
_.provideWidget = provideWidget_11;
_.typeId$ = 497;
function $OpenTasksModule$1(this$static, val$callback){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $OpenTasksModule$1;
  $location_0[stackIndex] = 'OpenTasksModule.java:' + '39' , this$static.val$callback = val$callback;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_740(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_740;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_OpenTasksModule$1_2_classLit;
}

function OpenTasksModule$1(){
}

_ = OpenTasksModule$1.prototype = new Object_0;
_.getClass$ = getClass_740;
_.typeId$ = 0;
_.val$callback = null;
function provideWidget_12(callback){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = provideWidget_12;
  $location_0[stackIndex] = 'OpenTasksView.java:' + '95' , $provideWidget_6(this, callback);
  $stackDepth_0 = stackIndex - 1;
}

_ = OpenTasksView.prototype;
_.provideWidget = provideWidget_12;
function $WSLaunchButton(this$static, resource, name_0){
  var html, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $WSLaunchButton;
  $LayoutPanel_1(this$static, ($location_0[stackIndex] = 'WSLaunchButton.java:' + '45' , $BoxLayout_1(($location_0[stackIndex] = 'WSLaunchButton.java:' + '45' , new BoxLayout), ($location_0[stackIndex] = 'BoxLayout.java:' + '170' , $clinit_796() , VERTICAL))));
  $location_0[stackIndex] = 'WSLaunchButton.java:' + '48' , this$static.name_0 = name_0;
  $location_0[stackIndex] = 'WSLaunchButton.java:' + '50' , $sinkEvents(this$static, 124);
  html = $HTML_0(($location_0[stackIndex] = 'WSLaunchButton.java:' + '52' , new HTML), '&nbsp;&nbsp;' + ($location_0[stackIndex] = 'WSLaunchButton.java:' + '52' , $getHTML_0($ClippedImagePrototype(($location_0[stackIndex] = 'AbstractImagePrototype.java:' + '73' , new ClippedImagePrototype), resource.url, resource.left_0, resource.top_0, resource.width_0, resource.height_0))) + '&nbsp;<span class="WSLaunchButton-contents"> ' + this$static.name_0 + '<\/span>');
  $add_26(this$static, html, ($location_0[stackIndex] = 'WSLaunchButton.java:' + '53' , $BoxLayoutData_4(($location_0[stackIndex] = 'WSLaunchButton.java:' + '53' , new BoxLayoutData), ($location_0[stackIndex] = 'BoxLayoutData.java:' + '30' , $clinit_798() , VERTICAL_0))));
  $location_0[stackIndex] = 'UIObject.java:' + '659' , setStylePrimaryName(this$static.element, 'WSLaunchButton');
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $addClickListener(this$static, handler){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $addClickListener;
  !this$static.clickHandlers && (this$static.clickHandlers = $ArrayList(($location_0[stackIndex] = 'WSLaunchButton.java:' + '101' , new ArrayList)));
  $location_0[stackIndex] = 'WSLaunchButton.java:' + '102' , $add_7(this$static.clickHandlers, handler);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_855(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_855;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_errai_widgets_client_WSLaunchButton_2_classLit;
}

function onBrowserEvent_16(event_0){
  var listen, listen$iterator, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onBrowserEvent_16;
  if (!this.attached) {
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  switch ($location_0[stackIndex] = 'DOMImpl.java:' + '61' , $eventGetTypeInt(($location_0[stackIndex] = 'NativeEvent.java:' + '209' , $clinit_82() , event_0).type)) {
    case 16:
      $location_0[stackIndex] = 'UIObject.java:' + '364' , $addStyleName(this, ($location_0[stackIndex] = 'UIObject.java:' + '552' , getStylePrimaryName(this.element)) + '-hover');
      break;
    case 4096:
    case 8192:
    case 32:
      $location_0[stackIndex] = 'UIObject.java:' + '583' , $removeStyleName(this, ($location_0[stackIndex] = 'UIObject.java:' + '552' , getStylePrimaryName(this.element)) + '-hover');
      $location_0[stackIndex] = 'UIObject.java:' + '583' , $removeStyleName(this, ($location_0[stackIndex] = 'UIObject.java:' + '552' , getStylePrimaryName(this.element)) + '-down');
      break;
    case 4:
      $location_0[stackIndex] = 'UIObject.java:' + '364' , $addStyleName(this, ($location_0[stackIndex] = 'UIObject.java:' + '552' , getStylePrimaryName(this.element)) + '-down');
      break;
    case 8:
      if (this.clickHandlers) {
        for ($location_0[stackIndex] = 'WSLaunchButton.java:' + '82' , listen$iterator = $AbstractList$IteratorImpl(($location_0[stackIndex] = 'AbstractList.java:' + '278' , new AbstractList$IteratorImpl), this.clickHandlers); listen$iterator.i < ($location_0[stackIndex] = 'AbstractList.java:' + '38' , listen$iterator.this$0.size_1());) {
          listen = dynamicCast(($location_0[stackIndex] = 'WSLaunchButton.java:' + '82' , $next_6(listen$iterator)), 18);
          $location_0[stackIndex] = 'WSLaunchButton.java:' + '83' , listen.onClick(null);
        }
      }

      $location_0[stackIndex] = 'Element.java:' + '688' , this.element['className'] = 'WSLaunchButton';
  }
  $stackDepth_0 = stackIndex - 1;
}

function WSLaunchButton(){
}

_ = WSLaunchButton.prototype = new LayoutPanel;
_.getClass$ = getClass_855;
_.onBrowserEvent = onBrowserEvent_16;
_.typeId$ = 581;
_.clickHandlers = null;
_.name_0 = null;
function $createLogPanel(parent_0){
  var collapseBtn, logger, messagePanel, widget, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $createLogPanel;
  messagePanel = $CaptionLayoutPanel(($location_0[stackIndex] = 'Application.java:' + '285' , new CaptionLayoutPanel), 'Messages');
  $location_0[stackIndex] = 'LayoutPanel.java:' + '289' , setStyleAttribute_0(messagePanel.body_0.element, 'padding', '0px');
  logger = ($location_0[stackIndex] = 'Application.java:' + '290' , $WorkspaceLogger(($location_0[stackIndex] = 'Application.java:' + '290' , new WorkspaceLogger), $Application$5(($location_0[stackIndex] = 'Application.java:' + '291' , new Application$5), parent_0, messagePanel)));
  $location_0[stackIndex] = 'Application.java:' + '313' , widget = logger.logDockPanel;
  $location_0[stackIndex] = 'UIObject.java:' + '214' , widget.element.style.display = '';
  $location_0[stackIndex] = 'Application.java:' + '315' , $clinit_24();
  $location_0[stackIndex] = 'Log.java:' + '80' , $addLogger(impl, logger);
  $location_0[stackIndex] = 'CaptionLayoutPanel.java:' + '81' , $add_25(messagePanel.body_0, widget);
  collapseBtn = ($location_0[stackIndex] = 'Application.java:' + '319' , $ImageButton(($location_0[stackIndex] = 'Application.java:' + '319' , new ImageButton), ($clinit_649() , ($location_0[stackIndex] = 'CaptionImages_generatedBundle.java:' + '29' , $clinit_651()) , toolCollapseDown_SINGLETON)));
  $location_0[stackIndex] = 'Application.java:' + '320' , $add_17(messagePanel.caption, collapseBtn, ($location_0[stackIndex] = 'Caption.java:' + '61' , $clinit_650() , RIGHT));
  $location_0[stackIndex] = 'ImageButton.java:' + '58' , $addDomHandler(collapseBtn, $Application$6(($location_0[stackIndex] = 'Application.java:' + '322' , new Application$6), parent_0, messagePanel), ($location_0[stackIndex] = 'ImageButton.java:' + '58' , $clinit_129() , ($location_0[stackIndex] = 'ClickEvent.java:' + '27' , $clinit_129()) , TYPE_1));
  $stackDepth_0 = stackIndex - 1;
  return messagePanel;
}

function $initializeUI(this$static){
  var inj10, inj11, inj12, inj13, inj14, inj9, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $initializeUI;
  if (this$static.isInitialized) {
    $IllegalArgumentException_0(($location_0[stackIndex] = 'Application.java:' + '192' , new IllegalArgumentException), 'Received init call on already bootstrapped workspace');
    $stackDepth_0 = stackIndex - 1;
    return;
  }
  this$static.viewport = $Viewport_0(($location_0[stackIndex] = 'Application.java:' + '196' , new Viewport_0));
  this$static.mainLayout = $WSLayoutPanel(($location_0[stackIndex] = 'Application.java:' + '198' , new WSLayoutPanel), $BorderLayout(new BorderLayout));
  this$static.menu = $Menu(($location_0[stackIndex] = 'Application.java:' + '200' , new Menu));
  this$static.workspace = ($location_0[stackIndex] = 'Application.java:' + '201' , createInstance(this$static.menu));
  $add_26(this$static.mainLayout, this$static.menu, ($location_0[stackIndex] = 'Application.java:' + '203' , $BorderLayoutData_4(($location_0[stackIndex] = 'Application.java:' + '203' , new BorderLayoutData), ($location_0[stackIndex] = 'BorderLayout.java:' + '199' , $clinit_789() , WEST_0), '180 px', false)));
  $add_26(this$static.mainLayout, this$static.header, $BorderLayoutData_3(($location_0[stackIndex] = 'Application.java:' + '204' , new BorderLayoutData), NORTH_0, '50 px'));
  $add_26(this$static.mainLayout, this$static.workspace, $BorderLayoutData_2(($location_0[stackIndex] = 'Application.java:' + '205' , new BorderLayoutData), CENTER_1, false));
  this$static.logPanel = ($location_0[stackIndex] = 'Application.java:' + '207' , $createLogPanel(this$static.mainLayout));
  $add_26(this$static.mainLayout, this$static.logPanel, $BorderLayoutData_7(($location_0[stackIndex] = 'Application.java:' + '208' , new BorderLayoutData), SOUTH_0, '210 px', '210 px', '600 px', true));
  $location_0[stackIndex] = 'Application.java:' + '209' , $setCollapsed_0(this$static.mainLayout, this$static.logPanel, true);
  $location_0[stackIndex] = 'WorkspaceBuilder.java:' + '40' , $clinit_1248();
  inj9 = ($location_0[stackIndex] = 'WorkspaceConfigImpl.java:' + '10' , new ProcessModule);
  $location_0[stackIndex] = 'WorkspaceConfigImpl.java:' + '11' , $addTool('Processes', 'Process Overview', inj9);
  inj10 = ($location_0[stackIndex] = 'WorkspaceConfigImpl.java:' + '12' , new ReportModule);
  $location_0[stackIndex] = 'WorkspaceConfigImpl.java:' + '13' , $addTool('Reporting', 'Report Templates', inj10);
  inj11 = ($location_0[stackIndex] = 'WorkspaceConfigImpl.java:' + '14' , new AssignedTasksModule);
  $location_0[stackIndex] = 'WorkspaceConfigImpl.java:' + '15' , $addTool('Tasks', 'Personal Tasks', inj11);
  inj12 = ($location_0[stackIndex] = 'WorkspaceConfigImpl.java:' + '16' , new OpenTasksModule);
  $location_0[stackIndex] = 'WorkspaceConfigImpl.java:' + '17' , $addTool('Tasks', 'Group Tasks', inj12);
  inj13 = ($location_0[stackIndex] = 'WorkspaceConfigImpl.java:' + '18' , new ServerStatusModule);
  $location_0[stackIndex] = 'WorkspaceConfigImpl.java:' + '19' , $addTool('Settings', 'System', inj13);
  inj14 = ($location_0[stackIndex] = 'WorkspaceConfigImpl.java:' + '20' , new PreferencesModule);
  $location_0[stackIndex] = 'WorkspaceConfigImpl.java:' + '21' , $addTool('Settings', 'Preferences', inj14);
  $location_0[stackIndex] = 'WorkspaceBuilder.java:' + '55' , $addAll_0(preferredGroupOrdering, ($location_0[stackIndex] = 'Arrays.java:' + '99' , $Arrays$ArrayList(($location_0[stackIndex] = 'Arrays.java:' + '99' , new Arrays$ArrayList), ($location_0[stackIndex] = 'WorkspaceConfigImpl.java:' + '22' , initValues(_3Ljava_lang_String_2_classLit, 685, 1, ['Tasks', 'Processes', 'Reporting', 'Runtime', 'Settings'])))));
  $location_0[stackIndex] = 'Application.java:' + '216' , $build(this$static.workspace);
  $location_0[stackIndex] = 'Application.java:' + '219' , $add_25(($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.viewport.widget, 182)), this$static.mainLayout);
  $location_0[stackIndex] = 'Application.java:' + '220' , $clinit_433();
  $location_0[stackIndex] = 'Application.java:' + '220' , $add_1(($location_0[stackIndex] = 'RootPanel.java:' + '151' , get_1(null)), this$static.viewport);
  $location_0[stackIndex] = 'Application.java:' + '223' , addCommand($Application$4(($location_0[stackIndex] = 'Application.java:' + '224' , new Application$4), this$static));
  $location_0[stackIndex] = 'Application.java:' + '280' , this$static.isInitialized = true;
  $stackDepth_0 = stackIndex - 1;
}

function $Application$4(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $Application$4;
  $location_0[stackIndex] = 'Application.java:' + '224' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function execute_43(){
  var initialTool, initialToolSet, preferedTool, token, toolSets, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = execute_43;
  $location_0[stackIndex] = 'Application.java:' + '228' , initialToolSet = null;
  $location_0[stackIndex] = 'Application.java:' + '229' , initialTool = null;
  if (deferredToken != null && ($location_0[stackIndex] = 'String.java:' + '497' , deferredToken.indexOf('errai_')) == 0) {
    token = ($location_0[stackIndex] = 'Application.java:' + '234' , splitHistoryToken(deferredToken));
    initialToolSet = ($location_0[stackIndex] = 'Application.java:' + '236' , token[0]);
    initialTool = $equals_4(($location_0[stackIndex] = 'Application.java:' + '237' , token[1]), 'none')?null:token[1];
  }
  if (null == initialToolSet) {
    $location_0[stackIndex] = 'Application.java:' + '244' , preferedTool = ($location_0[stackIndex] = 'CookiePreferences.java:' + '39' , getCookie('workspace.default.tool')) != null?($location_0[stackIndex] = 'Application.java:' + '245' , $clinit_1228() , 'ToolSet_' + ($location_0[stackIndex] = 'Workspace.java:' + '266' , $replace_0(($location_0[stackIndex] = 'CookiePreferences.java:' + '39' , getCookie('workspace.default.tool')), ' ', '_'))):null;
    if (preferedTool != null && !!($location_0[stackIndex] = 'Workspace.java:' + '158' , $findToolSet(this.this$0.workspace, preferedTool))) {
      $location_0[stackIndex] = 'Application.java:' + '249' , initialToolSet = preferedTool;
    }
     else {
      $location_0[stackIndex] = 'Application.java:' + '254' , toolSets = ($location_0[stackIndex] = 'Workspace.java:' + '61' , $clinit_1228() , toolSets_0);
      toolSets.size_0 > 0 && ($location_0[stackIndex] = 'Application.java:' + '257' , initialToolSet = 'ToolSet_' + ($location_0[stackIndex] = 'Workspace.java:' + '266' , $replace_0(($location_0[stackIndex] = 'Application.java:' + '257' , dynamicCast(($location_0[stackIndex] = 'ArrayList.java:' + '157' , checkIndex(0, toolSets.size_0) , ($location_0[stackIndex] = 'ArrayList.java:' + '158' , toolSets.array[0])), 227)).getToolSetName(), ' ', '_')));
    }
  }
  initialToolSet != null && ($location_0[stackIndex] = 'AbstractMessageBuilder.java:' + '59' , $sendNowWith($with_0(($location_0[stackIndex] = 'Application.java:' + '265' , $with_0(($location_0[stackIndex] = 'Application.java:' + '265' , $command_0(($location_0[stackIndex] = 'Application.java:' + '265' , $toSubject_0($start(($location_0[stackIndex] = 'MessageBuilder.java:' + '40' , $AbstractMessageBuilder(($location_0[stackIndex] = 'MessageBuilder.java:' + '40' , new AbstractMessageBuilder), $JSONMessage(($location_0[stackIndex] = 'JSONMessage.java:' + '105' , new JSONMessage))))), 'Workspace')), ($location_0[stackIndex] = 'LayoutCommands.java:' + '28' , $clinit_1267() , ActivateTool))), ($location_0[stackIndex] = 'LayoutParts.java:' + '22' , $clinit_1268() , TOOLSET), initialToolSet)), TOOL, initialTool).val$sendable.this$0.message_0, ($location_0[stackIndex] = 'Application.java:' + '271' , $clinit_1091() , ($location_0[stackIndex] = 'ErraiBus.java:' + '30' , $clinit_1091()) , bus_0)) , undefined);
  $location_0[stackIndex] = 'Application.java:' + '339' , ($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this.this$0.viewport.widget, 182)).layout_0();
  $stackDepth_0 = stackIndex - 1;
}

function getClass_863(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_863;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_errai_workspaces_client_Application$4_2_classLit;
}

function Application$4(){
}

_ = Application$4.prototype = new Object_0;
_.execute = execute_43;
_.getClass$ = getClass_863;
_.typeId$ = 586;
_.this$0 = null;
function $Application$5(this$static, val$parent, val$messagePanel){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $Application$5;
  $location_0[stackIndex] = 'Application.java:' + '291' , this$static.val$parent = val$parent;
  this$static.val$messagePanel = val$messagePanel;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $onLogLevel(this$static, level){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $onLogLevel;
  level >= 40000 && ($location_0[stackIndex] = 'Application.java:' + '298' , addCommand($Application$5$1(($location_0[stackIndex] = 'Application.java:' + '299' , new Application$5$1), this$static.val$parent, this$static.val$messagePanel)));
  $stackDepth_0 = stackIndex - 1;
}

function getClass_864(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_864;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_errai_workspaces_client_Application$5_2_classLit;
}

function Application$5(){
}

_ = Application$5.prototype = new Object_0;
_.getClass$ = getClass_864;
_.typeId$ = 0;
_.val$messagePanel = null;
_.val$parent = null;
function $Application$5$1(this$static, val$parent, val$messagePanel){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $Application$5$1;
  $location_0[stackIndex] = 'Application.java:' + '299' , this$static.val$parent = val$parent;
  this$static.val$messagePanel = val$messagePanel;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function execute_44(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = execute_44;
  $location_0[stackIndex] = 'Application.java:' + '303' , $setCollapsed_0(this.val$parent, this.val$messagePanel, false);
  $location_0[stackIndex] = 'LayoutPanel.java:' + '600' , $invalidate_1(this.val$parent, null);
  $location_0[stackIndex] = 'Application.java:' + '305' , $layout_3(this.val$parent);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_865(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_865;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_errai_workspaces_client_Application$5$1_2_classLit;
}

function Application$5$1(){
}

_ = Application$5$1.prototype = new Object_0;
_.execute = execute_44;
_.getClass$ = getClass_865;
_.typeId$ = 587;
_.val$messagePanel = null;
_.val$parent = null;
function $Application$6(this$static, val$parent, val$messagePanel){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $Application$6;
  $location_0[stackIndex] = 'Application.java:' + '322' , this$static.val$parent = val$parent;
  this$static.val$messagePanel = val$messagePanel;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_866(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_866;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_errai_workspaces_client_Application$6_2_classLit;
}

function onClick_39(event_0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClick_39;
  $location_0[stackIndex] = 'Application.java:' + '324' , $setCollapsed_0(this.val$parent, this.val$messagePanel, true);
  $location_0[stackIndex] = 'LayoutPanel.java:' + '600' , $invalidate_1(this.val$parent, null);
  $location_0[stackIndex] = 'Application.java:' + '326' , $layout_3(this.val$parent);
  $stackDepth_0 = stackIndex - 1;
}

function Application$6(){
}

_ = Application$6.prototype = new Object_0;
_.getClass$ = getClass_866;
_.onClick = onClick_39;
_.typeId$ = 588;
_.val$messagePanel = null;
_.val$parent = null;
function $Menu(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $Menu;
  $LayoutPanel_1(this$static, ($location_0[stackIndex] = 'Menu.java:' + '40' , $BoxLayout_1(($location_0[stackIndex] = 'Menu.java:' + '40' , new BoxLayout), ($location_0[stackIndex] = 'BoxLayout.java:' + '170' , $clinit_796() , VERTICAL))));
  this$static.toolsetIndex = $HashMap(($location_0[stackIndex] = 'Menu.java:' + '36' , new HashMap));
  this$static.stack = $StackLayoutPanel(($location_0[stackIndex] = 'Menu.java:' + '42' , new StackLayoutPanel));
  $location_0[stackIndex] = 'Element.java:' + '688' , ($location_0[stackIndex] = 'UIObject.java:' + '648' , this$static.stack.getStyleElement())['className'] = '';
  $location_0[stackIndex] = 'LayoutPanel.java:' + '216' , dynamicCast(this$static.stack.widget, 182).animationEnabled = false;
  $add_26(this$static, this$static.stack, ($location_0[stackIndex] = 'Menu.java:' + '46' , $BoxLayoutData_5(($location_0[stackIndex] = 'Menu.java:' + '46' , new BoxLayoutData), ($location_0[stackIndex] = 'BoxLayoutData.java:' + '30' , $clinit_798() , BOTH), true)));
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $addLauncher(this$static, widget, toolsetName){
  var regex, replacement, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $addLauncher;
  $put_0(this$static.toolsetIndex, ($location_0[stackIndex] = 'Menu.java:' + '51' , $clinit_1228() , 'ToolSet_' + (regex = ($location_0[stackIndex] = 'String.java:' + '590' , $replaceAll(' ', '([/\\\\\\.\\*\\+\\?\\|\\(\\)\\[\\]\\{\\}$^])', '\\\\$1')) , replacement = $replaceAll(($location_0[stackIndex] = 'String.java:' + '593' , $replaceAll('_', '\\\\', '\\\\\\\\')), '\\$', '\\\\$') , ($location_0[stackIndex] = 'String.java:' + '595' , $replaceAll(toolsetName, regex, replacement)))), ($location_0[stackIndex] = 'Menu.java:' + '51' , valueOf_4(this$static.toolsetIndex.size_0)));
  $location_0[stackIndex] = 'StackLayoutPanel.java:' + '108' , $add_27(this$static.stack, widget, toolsetName, false);
  $stackDepth_0 = stackIndex - 1;
}

function $toggle(this$static, id){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $toggle;
  $showStack(this$static.stack, dynamicCast(($location_0[stackIndex] = 'Menu.java:' + '66' , $get_8(this$static.toolsetIndex, id)), 82).value_0);
  $location_0[stackIndex] = 'LayoutComposite.java:' + '116' , $invalidate_1(($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.stack.widget, 182)), null);
  $location_0[stackIndex] = 'Menu.java:' + '68' , $layout_5(this$static.stack);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_871(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_871;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_errai_workspaces_client_Menu_2_classLit;
}

function Menu(){
}

_ = Menu.prototype = new LayoutPanel;
_.getClass$ = getClass_871;
_.typeId$ = 593;
_.stack = null;
function $Viewport_0(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $Viewport_0;
  $Viewport(this$static, $FillLayout(($location_0[stackIndex] = 'Viewport.java:' + '57' , new FillLayout)));
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_872(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_872;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_errai_workspaces_client_Viewport_2_classLit;
}

function onResize_12(event_0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onResize_12;
  ($location_0[stackIndex] = 'Viewport.java:' + '109' , $isAttached_0(this)) && ($location_0[stackIndex] = 'Viewport.java:' + '110' , $schedule(this.resizeTimer, 333));
  $location_0[stackIndex] = 'Viewport.java:' + '30' , addCommand($Viewport$1_0(($location_0[stackIndex] = 'Viewport.java:' + '31' , new Viewport$1_0), this));
  $stackDepth_0 = stackIndex - 1;
}

function Viewport_0(){
}

_ = Viewport_0.prototype = new Viewport;
_.getClass$ = getClass_872;
_.onResize = onResize_12;
_.typeId$ = 594;
function $Viewport$1_0(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $Viewport$1_0;
  $location_0[stackIndex] = 'Viewport.java:' + '31' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function execute_45(){
  var layoutHintDelay, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = execute_45;
  layoutHintDelay = $Viewport$1$1(($location_0[stackIndex] = 'Viewport.java:' + '42' , new Viewport$1$1), this);
  $location_0[stackIndex] = 'Viewport.java:' + '49' , $schedule(layoutHintDelay, 500);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_873(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_873;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_errai_workspaces_client_Viewport$1_2_classLit;
}

function Viewport$1_0(){
}

_ = Viewport$1_0.prototype = new Object_0;
_.execute = execute_45;
_.getClass$ = getClass_873;
_.typeId$ = 595;
_.this$0 = null;
function $clinit_1227(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1227;
  $location_0[stackIndex] = 'Viewport.java:' + '42' , $clinit_1227 = nullMethod;
  $clinit_43();
  $stackDepth_0 = stackIndex - 1;
}

function $Viewport$1$1(this$static, this$1){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $Viewport$1$1;
  $location_0[stackIndex] = 'Viewport.java:' + '42' , $clinit_1227();
  this$static.this$1 = this$1;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_874(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_874;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_errai_workspaces_client_Viewport$1$1_2_classLit;
}

function run_29(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = run_29;
  $location_0[stackIndex] = 'Viewport.java:' + '45' , layoutHints(($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this.this$1.this$0.widget, 182)));
  $stackDepth_0 = stackIndex - 1;
}

function Viewport$1$1(){
}

_ = Viewport$1$1.prototype = new Timer;
_.getClass$ = getClass_874;
_.run = run_29;
_.typeId$ = 596;
_.this$1 = null;
function $Workspace(this$static, menu){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $Workspace;
  $location_0[stackIndex] = 'Workspace.java:' + '76' , $clinit_1228();
  $location_0[stackIndex] = 'Workspace.java:' + '77' , $DeckLayoutPanel(this$static);
  $location_0[stackIndex] = 'Workspace.java:' + '79' , this$static.menu = menu;
  $location_0[stackIndex] = 'LayoutPanel.java:' + '289' , setStyleAttribute_0(($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.widget, 182)).element, 'padding', '5px');
  $location_0[stackIndex] = 'Workspace.java:' + '82' , $clinit_1091();
  $location_0[stackIndex] = 'Workspace.java:' + '82' , $subscribe(bus_0, 'Workspace', $Workspace$1(($location_0[stackIndex] = 'Workspace.java:' + '84' , new Workspace$1), this$static));
  $location_0[stackIndex] = 'Workspace.java:' + '103' , addValueChangeHandler($Workspace$2(($location_0[stackIndex] = 'Workspace.java:' + '104' , new Workspace$2), this$static));
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $addToolSet(this$static, toolSet){
  var deck, toolSetId, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $addToolSet;
  $location_0[stackIndex] = 'Workspace.java:' + '144' , $add_7(toolSets_0, toolSet);
  $location_0[stackIndex] = 'Workspace.java:' + '145' , toolSetId = 'ToolSet_' + ($location_0[stackIndex] = 'Workspace.java:' + '266' , $replace_0(($location_0[stackIndex] = 'Workspace.java:' + '145' , toolSet.getToolSetName()), ' ', '_'));
  $addLauncher(this$static.menu, $WSToolSetLauncher(($location_0[stackIndex] = 'Workspace.java:' + '148' , new WSToolSetLauncher), toolSetId, toolSet), toolSet.getToolSetName());
  $location_0[stackIndex] = 'Workspace.java:' + '149' , $layout_5(this$static.menu.stack);
  deck = $Workspace$ToolSetDeck(($location_0[stackIndex] = 'Workspace.java:' + '152' , new Workspace$ToolSetDeck), toolSetId, toolSet);
  $location_0[stackIndex] = 'Workspace.java:' + '153' , deck.index_0 = ($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.widget, 182)).children_0.size_0;
  $location_0[stackIndex] = 'UIObject.java:' + '214' , deck.element.style.display = 'none';
  $location_0[stackIndex] = 'DeckLayoutPanel.java:' + '58' , $add_25(($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.widget, 182)), deck);
  $stackDepth_0 = stackIndex - 1;
}

function $findToolSet(this$static, id){
  var deck, i, match, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $findToolSet;
  $location_0[stackIndex] = 'Workspace.java:' + '241' , match = null;
  for ($location_0[stackIndex] = 'Workspace.java:' + '242' , i = 0; i < ($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.widget, 182)).children_0.size_0; $location_0[stackIndex] = 'Workspace.java:' + '242' , ++i) {
    deck = ($location_0[stackIndex] = 'Workspace.java:' + '243' , dynamicCast(($location_0[stackIndex] = 'LayoutPanel.java:' + '490' , $getUnDecoratedWidget(($location_0[stackIndex] = 'ComplexPanel.java:' + '36' , $get_7(($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.widget, 182)).children_0, i)))), 284));
    if ($location_0[stackIndex] = 'Workspace.java:' + '244' , $equals_4(id, deck.toolSetId)) {
      $location_0[stackIndex] = 'Workspace.java:' + '245' , match = deck;
      break;
    }
  }
  $stackDepth_0 = stackIndex - 1;
  return match;
}

function $recordHistory(toolsetId, toolId){
  var historyToken, toolToken, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $recordHistory;
  $location_0[stackIndex] = 'Workspace.java:' + '130' , toolToken = toolId != null?toolId:'none';
  $location_0[stackIndex] = 'Workspace.java:' + '131' , historyToken = 'errai_' + toolsetId + ';' + toolToken;
  $location_0[stackIndex] = 'History.java:' + '171' , $clinit_316();
  !!impl_0 && ($location_0[stackIndex] = 'History.java:' + '173' , $newItem(impl_0, historyToken, false));
  $stackDepth_0 = stackIndex - 1;
}

function $showToolSet(this$static, toolSetId, toolId){
  var availableTools, deck, i, isOpen, panelTool, resource, resourceFactory, selectedTool, selectedToolSet, t, t$array, t$index, t$max, toolTab, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $showToolSet;
  deck = ($location_0[stackIndex] = 'Workspace.java:' + '166' , $findToolSet(this$static, toolSetId));
  if (!deck)
    throw $IllegalArgumentException_0(($location_0[stackIndex] = 'Workspace.java:' + '168' , new IllegalArgumentException), 'No such toolSet: ' + toolSetId);
  $location_0[stackIndex] = 'Workspace.java:' + '171' , selectedToolSet = deck.toolSet;
  $location_0[stackIndex] = 'Workspace.java:' + '172' , selectedTool = null;
  if (toolId != null) {
    for (t$array = ($location_0[stackIndex] = 'Workspace.java:' + '175' , selectedToolSet.getAllProvidedTools()) , t$index = 0 , t$max = t$array.length; t$index < t$max; $location_0[stackIndex] = 'Workspace.java:' + '175' , ++t$index) {
      t = t$array[t$index];
      if ($location_0[stackIndex] = 'Workspace.java:' + '176' , $equals_4(toolId, t.id_0)) {
        $location_0[stackIndex] = 'Workspace.java:' + '177' , selectedTool = t;
        break;
      }
    }
  }
   else {
    availableTools = ($location_0[stackIndex] = 'Workspace.java:' + '183' , selectedToolSet.getAllProvidedTools());
    if (availableTools == null || availableTools.length == 0)
      throw $IllegalArgumentException_0(($location_0[stackIndex] = 'Workspace.java:' + '185' , new IllegalArgumentException), 'Empty toolset: ' + toolSetId);
    selectedTool = ($location_0[stackIndex] = 'Workspace.java:' + '187' , availableTools[0]);
  }
  $location_0[stackIndex] = 'Workspace.java:' + '191' , isOpen = false;
  for ($location_0[stackIndex] = 'Workspace.java:' + '192' , i = 0; i < ($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(deck.tabLayout.deck.widget, 182)).children_0.size_0; $location_0[stackIndex] = 'Workspace.java:' + '192' , ++i) {
    toolTab = ($location_0[stackIndex] = 'Workspace.java:' + '193' , dynamicCast(($location_0[stackIndex] = 'TabLayoutPanel.java:' + '300' , $getWidget_5(deck.tabLayout.deck, i)), 283));
    if ($location_0[stackIndex] = 'Workspace.java:' + '194' , $equals_4(toolTab.toolId, selectedTool.id_0)) {
      $location_0[stackIndex] = 'Workspace.java:' + '195' , isOpen = true;
      $location_0[stackIndex] = 'ScrollTabBar.java:' + '477' , $selectTab(deck.tabLayout.tabBar.tabBar, i);
    }
  }
  if (!isOpen) {
    panelTool = $Workspace$ToolTabPanel(($location_0[stackIndex] = 'Workspace.java:' + '202' , new Workspace$ToolTabPanel), toolSetId, selectedTool);
    $location_0[stackIndex] = 'LayoutPanel.java:' + '600' , $invalidate_1(panelTool, null);
    resourceFactory = $ResourceFactoryImpl(($location_0[stackIndex] = 'Workspace.java:' + '205' , new ResourceFactoryImpl));
    $location_0[stackIndex] = 'Workspace.java:' + '207' , resource = dynamicCast(($location_0[stackIndex] = 'ResourceFactoryImpl.java:' + '27' , $get_8(resourceFactory.mapping, selectedTool.name_0)), 285)?dynamicCast($get_8(resourceFactory.mapping, selectedTool.name_0), 285):($location_0[stackIndex] = 'Workspace.java:' + '208' , $application());
    $location_0[stackIndex] = 'Workspace.java:' + '210' , $add_22(deck.tabLayout, panelTool, ($location_0[stackIndex] = 'Workspace.java:' + '212' , $getHTML_0($ClippedImagePrototype(($location_0[stackIndex] = 'AbstractImagePrototype.java:' + '73' , new ClippedImagePrototype), resource.url, resource.left_0, resource.top_0, resource.width_0, resource.height_0))) + '&nbsp;' + selectedTool.name_0, true);
    $location_0[stackIndex] = 'ScrollTabBar.java:' + '477' , $selectTab(deck.tabLayout.tabBar.tabBar, ($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(deck.tabLayout.deck.widget, 182)).children_0.size_0 - 1);
    addCommand($Workspace$3(($location_0[stackIndex] = 'Workspace.java:' + '221' , new Workspace$3), panelTool));
  }
  $location_0[stackIndex] = 'Workspace.java:' + '230' , $showWidget(this$static, deck.index_0);
  $location_0[stackIndex] = 'LayoutComposite.java:' + '125' , ($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.widget, 182)).layout_0();
  addCommand($Workspace$4(($location_0[stackIndex] = 'Workspace.java:' + '233' , new Workspace$4), this$static, toolSetId));
  $stackDepth_0 = stackIndex - 1;
}

function createInstance(menu){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = createInstance;
  $location_0[stackIndex] = 'Workspace.java:' + '65' , $clinit_1228();
  !instance_18 && (instance_18 = $Workspace(($location_0[stackIndex] = 'Workspace.java:' + '67' , new Workspace), menu));
  $stackDepth_0 = stackIndex - 1;
  return instance_18;
}

function getClass_875(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_875;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_errai_workspaces_client_Workspace_2_classLit;
}

function onResize_13(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onResize_13;
  $location_0[stackIndex] = 'Workspace.java:' + '335' , layoutHints(this);
  $stackDepth_0 = stackIndex - 1;
}

function splitHistoryToken(tokenString){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = splitHistoryToken;
  $location_0[stackIndex] = 'Workspace.java:' + '135' , $clinit_1228();
  var s, token;
  $location_0[stackIndex] = 'Workspace.java:' + '136' , s = ($location_0[stackIndex] = 'String.java:' + '718' , tokenString.substr(6, tokenString.length - 6));
  $location_0[stackIndex] = 'Workspace.java:' + '137' , token = ($location_0[stackIndex] = 'String.java:' + '631' , $split(s, ';', 0));
  $stackDepth_0 = stackIndex - 1;
  return token;
}

function Workspace(){
}

_ = Workspace.prototype = new DeckLayoutPanel;
_.getClass$ = getClass_875;
_.onResize_0 = onResize_13;
_.typeId$ = 597;
_.menu = null;
var instance_18 = null;
function $Workspace$1(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $Workspace$1;
  $location_0[stackIndex] = 'Workspace.java:' + '84' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function callback_13(message){
  var toolId, toolsetId, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = callback_13;
  switch (($location_0[stackIndex] = 'LayoutCommands.java:' + '20' , $clinit_1267() , ($location_0[stackIndex] = 'LayoutCommands.java:' + '20' , valueOf_0(enum$map_6, ($location_0[stackIndex] = 'Workspace.java:' + '86' , message.getCommandType())))).ordinal) {
    case 7:
      toolsetId = dynamicCast(($location_0[stackIndex] = 'Workspace.java:' + '88' , message.get_2(Ljava_lang_String_2_classLit, ($location_0[stackIndex] = 'LayoutParts.java:' + '22' , $clinit_1268() , TOOLSET))), 1);
      toolId = dynamicCast(($location_0[stackIndex] = 'Workspace.java:' + '89' , message.get_2(Ljava_lang_String_2_classLit, TOOL)), 1);
      $location_0[stackIndex] = 'Workspace.java:' + '91' , $showToolSet(this.this$0, toolsetId, toolId);
      $location_0[stackIndex] = 'Workspace.java:' + '94' , $recordHistory(toolsetId, toolId);
  }
  $stackDepth_0 = stackIndex - 1;
}

function getClass_876(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_876;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_errai_workspaces_client_Workspace$1_2_classLit;
}

function Workspace$1(){
}

_ = Workspace$1.prototype = new Object_0;
_.callback_0 = callback_13;
_.getClass$ = getClass_876;
_.typeId$ = 598;
_.this$0 = null;
function $Workspace$2(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $Workspace$2;
  $location_0[stackIndex] = 'Workspace.java:' + '104' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_877(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_877;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_errai_workspaces_client_Workspace$2_2_classLit;
}

function onValueChange_0(event_0){
  var tokenString, tokens, toolId, toolsetId, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onValueChange_0;
  $location_0[stackIndex] = 'Workspace.java:' + '109' , tokenString = event_0.value_0;
  if (($location_0[stackIndex] = 'String.java:' + '497' , tokenString.indexOf('errai_')) == 0) {
    tokens = ($location_0[stackIndex] = 'Workspace.java:' + '111' , splitHistoryToken(tokenString));
    toolsetId = ($location_0[stackIndex] = 'Workspace.java:' + '113' , tokens[0]);
    toolId = $equals_4(($location_0[stackIndex] = 'Workspace.java:' + '114' , tokens[1]), 'none')?null:tokens[1];
    $location_0[stackIndex] = 'Workspace.java:' + '116' , $showToolSet(this.this$0, toolsetId, toolId);
  }
  $stackDepth_0 = stackIndex - 1;
}

function Workspace$2(){
}

_ = Workspace$2.prototype = new Object_0;
_.getClass$ = getClass_877;
_.onValueChange = onValueChange_0;
_.typeId$ = 599;
_.this$0 = null;
function $Workspace$3(this$static, val$panelTool){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $Workspace$3;
  $location_0[stackIndex] = 'Workspace.java:' + '221' , this$static.val$panelTool = val$panelTool;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function execute_46(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = execute_46;
  $location_0[stackIndex] = 'Workspace.java:' + '224' , $onResize_1(this.val$panelTool);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_878(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_878;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_errai_workspaces_client_Workspace$3_2_classLit;
}

function Workspace$3(){
}

_ = Workspace$3.prototype = new Object_0;
_.execute = execute_46;
_.getClass$ = getClass_878;
_.typeId$ = 600;
_.val$panelTool = null;
function $Workspace$4(this$static, this$0, val$toolSetId){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $Workspace$4;
  $location_0[stackIndex] = 'Workspace.java:' + '233' , this$static.this$0 = this$0;
  this$static.val$toolSetId = val$toolSetId;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function execute_47(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = execute_47;
  $location_0[stackIndex] = 'Workspace.java:' + '235' , $toggle(this.this$0.menu, this.val$toolSetId);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_879(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_879;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_errai_workspaces_client_Workspace$4_2_classLit;
}

function Workspace$4(){
}

_ = Workspace$4.prototype = new Object_0;
_.execute = execute_47;
_.getClass$ = getClass_879;
_.typeId$ = 601;
_.this$0 = null;
_.val$toolSetId = null;
function $Workspace$ToolSetDeck(this$static, toolSetId, toolSet){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $Workspace$ToolSetDeck;
  $LayoutPanel_1(this$static, $FillLayout(($location_0[stackIndex] = 'LayoutPanel.java:' + '101' , new FillLayout)));
  $location_0[stackIndex] = 'Workspace.java:' + '282' , this$static.toolSet = toolSet;
  $location_0[stackIndex] = 'Workspace.java:' + '283' , this$static.toolSetId = toolSetId;
  this$static.tabLayout = $DecoratedTabLayoutPanel(($location_0[stackIndex] = 'Workspace.java:' + '284' , new DecoratedTabLayoutPanel));
  $addHandler_1(this$static.tabLayout, $Workspace$ToolSetDeck$1(($location_0[stackIndex] = 'Workspace.java:' + '286' , new Workspace$ToolSetDeck$1), this$static), ($location_0[stackIndex] = 'TabLayoutPanel.java:' + '252' , getType_11()));
  $location_0[stackIndex] = 'Workspace.java:' + '293' , $add_25(this$static, this$static.tabLayout);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_880(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_880;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_errai_workspaces_client_Workspace$ToolSetDeck_2_classLit;
}

function onResize_14(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onResize_14;
  $setPixelSize(this, ($location_0[stackIndex] = 'Workspace.java:' + '297' , this.parent_0.getOffsetWidth()), this.parent_0.getOffsetHeight());
  $location_0[stackIndex] = 'Workspace.java:' + '298' , layoutHints(this.tabLayout);
  $stackDepth_0 = stackIndex - 1;
}

function Workspace$ToolSetDeck(){
}

_ = Workspace$ToolSetDeck.prototype = new LayoutPanel;
_.getClass$ = getClass_880;
_.onResize_0 = onResize_14;
_.typeId$ = 602;
_.index_0 = 0;
_.tabLayout = null;
_.toolSet = null;
_.toolSetId = null;
function $Workspace$ToolSetDeck$1(this$static, this$1){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $Workspace$ToolSetDeck$1;
  $location_0[stackIndex] = 'Workspace.java:' + '286' , this$static.this$1 = this$1;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_881(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_881;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_errai_workspaces_client_Workspace$ToolSetDeck$1_2_classLit;
}

function onSelection_4(selectionEvent){
  var toolTab, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onSelection_4;
  toolTab = ($location_0[stackIndex] = 'Workspace.java:' + '288' , dynamicCast(($location_0[stackIndex] = 'TabLayoutPanel.java:' + '300' , $getWidget_5(this.this$1.tabLayout.deck, ($location_0[stackIndex] = 'Workspace.java:' + '288' , dynamicCast(selectionEvent.selectedItem, 82)).value_0)), 283));
  $location_0[stackIndex] = 'Workspace.java:' + '289' , $recordHistory(toolTab.toolsetId, toolTab.toolId);
  $stackDepth_0 = stackIndex - 1;
}

function Workspace$ToolSetDeck$1(){
}

_ = Workspace$ToolSetDeck$1.prototype = new Object_0;
_.getClass$ = getClass_881;
_.onSelection = onSelection_4;
_.typeId$ = 603;
_.this$1 = null;
function $Workspace$ToolTabPanel(this$static, toolsetId, tool){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $Workspace$ToolTabPanel;
  $LayoutPanel_1(this$static, $FillLayout(($location_0[stackIndex] = 'LayoutPanel.java:' + '101' , new FillLayout)));
  $location_0[stackIndex] = 'Workspace.java:' + '311' , this$static.toolsetId = toolsetId;
  $location_0[stackIndex] = 'Workspace.java:' + '312' , this$static.toolId = tool.id_0;
  $location_0[stackIndex] = 'ToolImpl.java:' + '57' , tool.component.provideWidget($Workspace$ToolTabPanel$1(($location_0[stackIndex] = 'Workspace.java:' + '313' , new Workspace$ToolTabPanel$1), this$static, toolsetId));
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $onResize_1(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $onResize_1;
  $setPixelSize(this$static, ($location_0[stackIndex] = 'Workspace.java:' + '329' , this$static.parent_0.getOffsetWidth()), this$static.parent_0.getOffsetHeight());
  $location_0[stackIndex] = 'Workspace.java:' + '330' , layoutHints(this$static);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_882(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_882;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_errai_workspaces_client_Workspace$ToolTabPanel_2_classLit;
}

function onResize_15(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onResize_15;
  $setPixelSize(this, ($location_0[stackIndex] = 'Workspace.java:' + '329' , this.parent_0.getOffsetWidth()), this.parent_0.getOffsetHeight());
  $location_0[stackIndex] = 'Workspace.java:' + '330' , layoutHints(this);
  $stackDepth_0 = stackIndex - 1;
}

function Workspace$ToolTabPanel(){
}

_ = Workspace$ToolTabPanel.prototype = new LayoutPanel;
_.getClass$ = getClass_882;
_.onResize_0 = onResize_15;
_.typeId$ = 604;
_.toolId = null;
_.toolsetId = null;
function $Workspace$ToolTabPanel$1(this$static, this$1, val$toolsetId){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $Workspace$ToolTabPanel$1;
  $location_0[stackIndex] = 'Workspace.java:' + '313' , this$static.this$1 = this$1;
  this$static.val$toolsetId = val$toolsetId;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_883(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_883;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_errai_workspaces_client_Workspace$ToolTabPanel$1_2_classLit;
}

function onSuccess_1(instance){
  var baseRef, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onSuccess_1;
  $location_0[stackIndex] = 'Workspace.java:' + '315' , baseRef = this.val$toolsetId + ';' + this.this$1.toolId;
  $location_0[stackIndex] = 'Element.java:' + '576' , instance.element.setAttribute('baseRef', baseRef);
  $location_0[stackIndex] = 'Workspace.java:' + '317' , $add_25(this.this$1, instance);
  $location_0[stackIndex] = 'Workspace.java:' + '318' , invalidate_6(instance);
  $location_0[stackIndex] = 'Workspace.java:' + '319' , $layout_3(this.this$1);
  $stackDepth_0 = stackIndex - 1;
}

function Workspace$ToolTabPanel$1(){
}

_ = Workspace$ToolTabPanel$1.prototype = new Object_0;
_.getClass$ = getClass_883;
_.onSuccess = onSuccess_1;
_.typeId$ = 0;
_.this$1 = null;
_.val$toolsetId = null;
function $ResourceFactoryImpl(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ResourceFactoryImpl;
  this$static.mapping = $HashMap(($location_0[stackIndex] = 'ResourceFactoryImpl.java:' + '10' , new HashMap));
  $location_0[stackIndex] = 'ResourceFactoryImpl.java:' + '14' , $put_0(this$static.mapping, 'Group Tasks', (!taskIcon && (taskIcon = $ImageResourcePrototype(($location_0[stackIndex] = 'org_jboss_bpm_console_client_icons_ConsoleIconBundle_default_InlineClientBundleGenerator.java:' + '259' , new ImageResourcePrototype), 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABuklEQVR42n2S3ytDcRjG9z+JlAsuKC5cuHDjQimEiZo0ta2trOgUUVgbUxbaD23Lmq1OmrLa0ik/Qp1Em0YtNUSLyGPPqX1z47v61Nv7fp6ns7OZTP98QqGQKxwOg3A2yT6abyhz6h/H5fY09D0XjiJryOfzqFQqBpy5440OXWZEwYlnEHjQDB4yXng8HpRKJVitVgPO3PFW95gRBbmVARwng1AURVB//Dp/b3SZEQXZ5X44nU5omgZd11EsFlEul8VX4Mwdb3ToMiMKjhb6sDzngMPhQDweRzKZRDqdhqqqBpy5440OXWZEgTrfi7uEgtX8F75/IIUOXWZEQcrdg6fcNpaOq/j4hhQ6dJkRBfuubuMNK4cvePuEFDp0mREFUVsnCqlFzB7UXlwVUujQZUYUhK3tuIm7YY/do/wOKXToMiMKdiytuA7aMB28QekVUujQZUYUbE204CJgwWTgCoVnSKFDlxlRsGlurv2/zRjzn+G2Ail06DIjCtZHGqF5hzHs1WAJnMMd1bGmFhDIPhpw5o43OnSZEQW+oYbMxmiT8Vi7U22IzHQgZu9CovZTEc7c8UaHLjPM/gKyH6o/6wPkGgAAAABJRU5ErkJggg==', 0, 0, 16, 16)) , taskIcon));
  $location_0[stackIndex] = 'ResourceFactoryImpl.java:' + '15' , $put_0(this$static.mapping, 'Jobs', (!jobsIcon && (jobsIcon = $ImageResourcePrototype(($location_0[stackIndex] = 'org_jboss_bpm_console_client_icons_ConsoleIconBundle_default_InlineClientBundleGenerator.java:' + '149' , new ImageResourcePrototype), 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABU0lEQVR42q2TO0vDUBiG+3vyv5JmKSIWjEOXA5JinLokRegiGry0akYRUaSbZpMopfQi5TiIFikWlfqaN+ihaUOnHnjgy/dehuQkl1v28TxPq1arIiaMwR+cBbWFYdd19VqtJpvNJqSU+D+cuaNGT2a4Uqnovu+j2+tj8oNMqNFD72xYcz1Ptrs9fE2guI8eE6Z39NDLjCpwHEecX1xi/I0UjdMgYXZPLzOqwLbtsNV5wugTKeonQcLsnl5mVIEQAsMx5ihvbSdkacyoglKphJcPzGEYRoqDRqA0ZlSBZVlhGHXxPILCrwep52noZUYVFItFsX90hsE7EvaOAzVnQS8zqqBQKGjr1oa8uXtAf4iF0EMvM6m7EC90sVnG1W2EzhsyoUYPvZm30TRNfWV1Te7sHuI6bKH9igTO3FGjZ+H/kM/ntfiNi5hw6gtwFtSW/vf+AotdJ+elebyxAAAAAElFTkSuQmCC', 0, 0, 16, 16)) , jobsIcon));
  $location_0[stackIndex] = 'ResourceFactoryImpl.java:' + '16' , $put_0(this$static.mapping, 'Personal Tasks', (!userIcon && (userIcon = $ImageResourcePrototype(($location_0[stackIndex] = 'org_jboss_bpm_console_client_icons_ConsoleIconBundle_default_InlineClientBundleGenerator.java:' + '269' , new ImageResourcePrototype), 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABTklEQVR42pWRy0rDQBSG5w18BRe+QfoAoS+RJ2gQN3YjuBDMTlDQhdcsRCjdiAtBuqqUiHjDBhSEbmxRi22iYCheujDK7/xTEqiiZgY++uec850MqRC/nELB8GzbAGEWOseyxjwJvpF9ST4/ggS4dpozybmcMA1DgLjy+kCkfvnM3r8LfDk8EIMh+C3Yy7SA1wZaw8hapgVuHU5v3kLcrkjxSsHMGnt/yz7QeQZsGa6n8lL2FcyssceZH+LyaWyunsU4v/8Ez9rBI5y9jroyYWaNhzOcpZMuWDrse7fRB2Lpk4dXoNocvI0ws5b0OUsnXTBXfcLbO7Sgo+TZ3WB0cT9E1IcWdOiK6Z0bc6XWRfACLejQFcVyo1g6DnHXgxZ06IqJzQunfBKiFUELOnTF+Hrd5H9MJrcuMbPdwEKliY1aG6WjroKZNfY4k8zT/QJlrD+hVXIcgQAAAABJRU5ErkJggg==', 0, 0, 16, 16)) , userIcon));
  $location_0[stackIndex] = 'ResourceFactoryImpl.java:' + '17' , $put_0(this$static.mapping, 'History Query', (!historySearchIcon && (historySearchIcon = $ImageResourcePrototype(($location_0[stackIndex] = 'org_jboss_bpm_console_client_icons_ConsoleIconBundle_default_InlineClientBundleGenerator.java:' + '119' , new ImageResourcePrototype), 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABPElEQVR42s2Sv2qDUBTGfSf7GH0BH8AbyJTFoSAkJFAhi1NAXTo5pHRKcCilBB2Cg9ClDgUztBBwyiaaof3qd01CoZgGpx744HC+c3/33D+KcgjHcTTP8wLXdUExZ025JGaz2Xg+nyPLMhyDOWv0zi62bVvzfR9lWWL98QU3AYQL3DxA1uixpxUwnU6DNE2xfv/E0+Y0AO7CBkKPPa2AyWSCqqrkzqNlI05wnIIee1oBpmmiKAoJ+KnhArh9hPTY0wowDCOI4xjhZo/7VyDZNvJfgOe3PeixpxUwGAw0y7KQ5znCrDpNwJw1euw5+xL9fn/Mc0ZRhN1uJ8WcNQb/xZ9/odfrabquB0IIUMxZY54kiYSourdSugQhw8VWShUXTPMrVH11XT8LAbyfjpD6aPXq/wXpBjhApK7E6BvWTld5JJSpqQAAAABJRU5ErkJggg==', 0, 0, 16, 16)) , historySearchIcon));
  $location_0[stackIndex] = 'ResourceFactoryImpl.java:' + '18' , $put_0(this$static.mapping, 'Preferences', (!runtimeIcon && (runtimeIcon = $ImageResourcePrototype(($location_0[stackIndex] = 'org_jboss_bpm_console_client_icons_ConsoleIconBundle_default_InlineClientBundleGenerator.java:' + '239' , new ImageResourcePrototype), 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABkUlEQVR42q2Tv0tCYRiF+6taIigImlpaIogggqKhCAquOIgkkUYYIgZKSOIgKrloEEkY4mBgggaCSIjgoGCujSefC340aCQkHHh5z3PO/eH95ub+45dMJt2ZTEa5XE75fF7FYlHlclmVSsUWMzs8GFgypiCRSGg4HM4kMqYgHo9rMBhox5vR4nFca+6stq6L2gtXbDGzw4OBJWMKotGoer2e5g9uNeJ/FQwsGVMQDofV7Xa1cBTTxdOnAqWvicKDgSVjCoLBoNrttpZPEzq8e9d+5E1W6kNnDz1bzOzwYGDJmAK/369Wq6VV5722AyWtWKmJwoOBJWMKvF6vGo2G/aJ2b161eVWYKDwYWDKmwOPxqF6va/380bz5aYKBJWMKXC6XqtWqTiIv2rh8tq/GX8ctI2Z2eDCwZEyB0+m0v7haraZms6lOp6N+v28+GmZ2eDCwZEyBw+Fw0+jz+RQKhRSLxZROp5XNZm0xs8ODgSUz9WyMzCXLssxZYGb3p4P1Mzx+hJlLRnCB2x0/AjO7Sew3txsrW3OvJu8AAAAASUVORK5CYII=', 0, 0, 16, 16)) , runtimeIcon));
  $put_0(this$static.mapping, 'Manage Instances', ($location_0[stackIndex] = 'ResourceFactoryImpl.java:' + '19' , $processIcon()));
  $put_0(this$static.mapping, 'Process Overview', ($location_0[stackIndex] = 'ResourceFactoryImpl.java:' + '20' , $processIcon()));
  $location_0[stackIndex] = 'ResourceFactoryImpl.java:' + '21' , $put_0(this$static.mapping, 'Report Templates', (!reportIcon && (reportIcon = $ImageResourcePrototype(($location_0[stackIndex] = 'org_jboss_bpm_console_client_icons_ConsoleIconBundle_default_InlineClientBundleGenerator.java:' + '219' , new ImageResourcePrototype), 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABx0lEQVR42qWTT0gUcRiGf8cuHoS8eEm8CB0k8A+IBUsMdIguxhKCqBW7JiRGgzO7ycoQbuwKrtCKrDVSS1ssA0EEgSAyEhgIG0F1EMyTBdFBgi4Fwdu8b+txD6sDD/PwfPP7mMOMMSe9giBAM88nHtXC5GoNhG6q1WpTC26u7CA6K+imUqk0tWC8+A4rO38F3ZTL5YYLrMAKI1AnZBtZeouH278F3fi+33BB7EUMucOcoLNdW9jE4tYvQTelUqnhgsHyIOZ/zAs621B2HbmNQ0E3xWJRAySsEEkLIvH/dfse92Hu65ygs13xXuP+m++CbgqFggZ/Rs8DQU7Q2bqXu+F8cQSd7dK9l8i8OhB0k8/nNfg5dA5YmxV0tq7FLkx/nhZ0toszVbjBvqCbbDarwTerE1i4JehsHQ86MPF+QtDZLtx5hrvPdwXdeJ6nwV7/aWDmqqCztXvtGNseE3S2gdtPMPX0k6CbTCajwcezp4AbMUFna5ttw3A4LOhs/ZM+Jv0Pgm7S6bQGtU4DxHsEna3VbUV8Iy7obD3JVRz9C3Tjum4YgeOiD8ZxnBbbts9E994oXo7u11OplB3h1bHZ6rPe+rMtPPsPFheR8/axSdgAAAAASUVORK5CYII=', 0, 0, 16, 16)) , reportIcon));
  $location_0[stackIndex] = 'ResourceFactoryImpl.java:' + '22' , $put_0(this$static.mapping, 'Deployments', (!deploymentIcon && (deploymentIcon = $ImageResourcePrototype(($location_0[stackIndex] = 'org_jboss_bpm_console_client_icons_ConsoleIconBundle_default_InlineClientBundleGenerator.java:' + '59' , new ImageResourcePrototype), 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABP0lEQVR42qWTPUvDUBSGz89xcygIFUQo4iCKo4uT0ILUglSkShFE6iJUUVxSLC1+UaJgMdghDgE/toAiKEopBYuCf8DF4bXvAcGSgOF64SGHc94n3NwkIiHLLyU930qhh25Poqzz1QnvxSkCb34P7HH25w2sVEwFXn/z0wvd7l05jYf9LJ5qeTTPCmg3iuhc7uLdsxTW7HHGDLN09LGutqYD240KXT4zvtq3RtCVg/khfD67ATqNfrRsUViHZejqoZXTcRwuJHCSH4ezPgV3cwbX2wKgpbBmjzNmmKWjh3qxNomPm2oAd6MPdk4U1mEZulJfGcOru2MEXbFzI2jWC0bQlaPsMB6Pl4ygK9XMIO4rGSPoyt7sAAI/TkToSikZ81hU5uL6XmuLCZwuj+oBOd0PhbBmjzNmmKVDV/67vgHYp3UjzSRCkAAAAABJRU5ErkJggg==', 0, 0, 16, 16)) , deploymentIcon));
  $location_0[stackIndex] = 'ResourceFactoryImpl.java:' + '23' , $put_0(this$static.mapping, 'System', (!docIcon && (docIcon = $ImageResourcePrototype(($location_0[stackIndex] = 'org_jboss_bpm_console_client_icons_ConsoleIconBundle_default_InlineClientBundleGenerator.java:' + '69' , new ImageResourcePrototype), 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABbUlEQVR42q2TvUvDUBTF7/9UcRBBBCcXQXBxcZAGStFBBRERRFQcdFCkkNJBBxVKUREEpUOFtkPhFRcXhVKKiIPFT4ofVI85j76QpOmkgcM79573u7mURuQ/Hssux22FvCO0lLfLiJucPpiT0WE0qXLzhzXcv8F96As197L2wZwMWeftSl/6/gHSWYWsqkBVHnXtHG7GHjPeYc0+WRlPlJAoNfHZRJvMgLCMDFkZ2ypis/COxpd/A9ZmAL13A9ZkyMroxgXWc694/kCbzICwjAxZGVnLYvW8jnrDvwFrM4DeuwFrMmRlaOkUiyd3+pcNygwIy8iQlcGFY8xlqrh98W/A2gyg927AmgxZGZhNY3r/GtUntMkMCMvIkJW+qT1M7l7py2HigLA+GbLSM7GDWOoSy0c3+jQ+ox7cAfTBnCdZ6Y6lMLxyhv6ZA9BT9Ozxn0Z1yuklEk3muix7O2LZvebjoW/1QHXMHfbPX/IvM3nAI0ZfV7MAAAAASUVORK5CYII=', 0, 0, 16, 16)) , docIcon));
  $location_0[stackIndex] = 'ResourceFactoryImpl.java:' + '24' , $put_0(this$static.mapping, 'Execution History', (!databaseIcon && (databaseIcon = $ImageResourcePrototype(($location_0[stackIndex] = 'org_jboss_bpm_console_client_icons_ConsoleIconBundle_default_InlineClientBundleGenerator.java:' + '49' , new ImageResourcePrototype), 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABDUlEQVR42q2TQUsCQRiG91d5797v8BKEUAeRihDDEAQh8FRX/0AdhQ3BIIqMBBWEFGVrsYVdGHV1d3Zf+eYwJNMus9AHL8zhex+GhxnD+M+pNO6gk8Sy7iiQq8Yt2HoL3RuYzx+gjgKgCXkkzgt3iZntov30LtJ9G6I3nGA0/U4GUNabALbjoT+e4/FlgNZDB/fmKwafX5hYjoAogMtaU1xNF0C71JGA8+ubzA6oIwHFcl064FGMTcDhMT/VAXUUAGUbhGArH1PrJ9XBHuDkrCod6ABolzoSUChVMjugjgQcnV5IB1EcCw8rP0h1QB0FQKGHFHIOx2OpDvYANPnjojaAdv/8ULmDQ+jkd2cHb2l3oYUwirIAAAAASUVORK5CYII=', 0, 0, 16, 16)) , databaseIcon));
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_884(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_884;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_errai_workspaces_client_api_ResourceFactoryImpl_2_classLit;
}

function ResourceFactoryImpl(){
}

_ = ResourceFactoryImpl.prototype = new Object_0;
_.getClass$ = getClass_884;
_.typeId$ = 0;
function $ToolImpl(this$static, name_0, id, component){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ToolImpl;
  $location_0[stackIndex] = 'ToolImpl.java:' + '33' , this$static.name_0 = name_0;
  $location_0[stackIndex] = 'ToolImpl.java:' + '34' , this$static.id_0 = id;
  $location_0[stackIndex] = 'ToolImpl.java:' + '37' , this$static.component = component;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_886(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_886;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_errai_workspaces_client_framework_ToolImpl_2_classLit;
}

function provideWidget_13(callback){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = provideWidget_13;
  $location_0[stackIndex] = 'ToolImpl.java:' + '57' , this.component.provideWidget(callback);
  $stackDepth_0 = stackIndex - 1;
}

function ToolImpl(){
}

_ = ToolImpl.prototype = new Object_0;
_.getClass$ = getClass_886;
_.provideWidget = provideWidget_13;
_.typeId$ = 605;
_.component = null;
_.id_0 = null;
_.name_0 = null;
function $clinit_1248(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1248;
  $location_0[stackIndex] = 'WorkspaceBuilder.java:' + '40' , $clinit_1248 = nullMethod;
  toBeLoaded = $ArrayList(($location_0[stackIndex] = 'WorkspaceBuilder.java:' + '44' , new ArrayList));
  toBeLoadedGroups = $HashMap(($location_0[stackIndex] = 'WorkspaceBuilder.java:' + '45' , new HashMap));
  preferredGroupOrdering = $ArrayList(($location_0[stackIndex] = 'WorkspaceBuilder.java:' + '46' , new ArrayList));
  $stackDepth_0 = stackIndex - 1;
}

function $addTool(group, name_0, component){
  var provider, toolId, toolImpl, img, imgres, resourceFactory, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $addTool;
  !($location_0[stackIndex] = 'WorkspaceBuilder.java:' + '64' , $containsKey_0(toBeLoadedGroups, group)) && $put_0(toBeLoadedGroups, group, $ArrayList(new ArrayList));
  $location_0[stackIndex] = 'WorkspaceBuilder.java:' + '66' , toolId = ($location_0[stackIndex] = 'WorkspaceBuilder.java:' + '80' , $replaceAll(name_0, ' ', '_')) + '.' + toolCounter++;
  resourceFactory = $ResourceFactoryImpl(($location_0[stackIndex] = 'WorkspaceBuilder.java:' + '85' , new ResourceFactoryImpl));
  $location_0[stackIndex] = 'WorkspaceBuilder.java:' + '88' , imgres = dynamicCast(($location_0[stackIndex] = 'ResourceFactoryImpl.java:' + '27' , $get_8(resourceFactory.mapping, name_0)), 285);
  imgres?(img = $Image_0(($location_0[stackIndex] = 'WorkspaceBuilder.java:' + '91' , new Image_0), imgres)):(img = $Image_0(($location_0[stackIndex] = 'WorkspaceBuilder.java:' + '93' , new Image_0), $application()));
  toolImpl = $ToolImpl(($location_0[stackIndex] = 'WorkspaceBuilder.java:' + '69' , new ToolImpl), name_0, toolId, component);
  provider = $WorkspaceBuilder$1(($location_0[stackIndex] = 'WorkspaceBuilder.java:' + '70' , new WorkspaceBuilder$1), toolImpl);
  dynamicCast(($location_0[stackIndex] = 'WorkspaceBuilder.java:' + '76' , $get_8(toBeLoadedGroups, group)), 170).add_0(provider);
  $stackDepth_0 = stackIndex - 1;
}

function $build(workspace){
  var group, group$iterator, loaded, provider, provider$iterator, t, toBeRendered, ts, ts$iterator, old, old_0, outerIter, entry, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $build;
  loaded = $HashSet(($location_0[stackIndex] = 'WorkspaceBuilder.java:' + '148' , new HashSet));
  if (preferredGroupOrdering.size_0 != 0) {
    for ($location_0[stackIndex] = 'WorkspaceBuilder.java:' + '150' , group$iterator = $AbstractList$IteratorImpl(($location_0[stackIndex] = 'AbstractList.java:' + '278' , new AbstractList$IteratorImpl), preferredGroupOrdering); group$iterator.i < ($location_0[stackIndex] = 'AbstractList.java:' + '38' , group$iterator.this$0.size_1());) {
      group = dynamicCast(($location_0[stackIndex] = 'WorkspaceBuilder.java:' + '150' , $next_6(group$iterator)), 1);
      if ($location_0[stackIndex] = 'HashSet.java:' + '83' , $containsKey_0(loaded.map, group))
        continue;
      for ($location_0[stackIndex] = 'WorkspaceBuilder.java:' + '153' , ts$iterator = $AbstractList$IteratorImpl(($location_0[stackIndex] = 'AbstractList.java:' + '278' , new AbstractList$IteratorImpl), toBeLoaded); ts$iterator.i < ($location_0[stackIndex] = 'AbstractList.java:' + '38' , ts$iterator.this$0.size_1());) {
        ts = dynamicCast(($location_0[stackIndex] = 'WorkspaceBuilder.java:' + '153' , $next_6(ts$iterator)), 227);
        if ($equals_4(($location_0[stackIndex] = 'WorkspaceBuilder.java:' + '154' , ts.getToolSetName()), group)) {
          old = ($location_0[stackIndex] = 'HashSet.java:' + '68' , $put_0(loaded.map, group, loaded));
          $location_0[stackIndex] = 'WorkspaceBuilder.java:' + '156' , $addToolSet(workspace, ts);
        }
      }
      if ($location_0[stackIndex] = 'HashSet.java:' + '83' , $containsKey_0(loaded.map, group))
        continue;
      if ($location_0[stackIndex] = 'WorkspaceBuilder.java:' + '162' , $containsKey_0(toBeLoadedGroups, group)) {
        old_0 = ($location_0[stackIndex] = 'HashSet.java:' + '68' , $put_0(loaded.map, group, loaded));
        toBeRendered = $ArrayList(($location_0[stackIndex] = 'WorkspaceBuilder.java:' + '165' , new ArrayList));
        for (provider$iterator = dynamicCast(($location_0[stackIndex] = 'WorkspaceBuilder.java:' + '166' , $get_8(toBeLoadedGroups, group)), 170).iterator_0(); $location_0[stackIndex] = 'WorkspaceBuilder.java:' + '166' , provider$iterator.hasNext();) {
          provider = dynamicCast(provider$iterator.next_0(), 286);
          $location_0[stackIndex] = 'WorkspaceBuilder.java:' + '167' , t = provider.val$toolImpl;
          !!t && setCheck(toBeRendered.array, ($location_0[stackIndex] = 'ArrayList.java:' + '95' , toBeRendered.size_0++), t);
        }
        if (toBeRendered.size_0 != 0) {
          ts = $WorkspaceBuilder$3(($location_0[stackIndex] = 'WorkspaceBuilder.java:' + '174' , new WorkspaceBuilder$3), toBeRendered, group);
          $location_0[stackIndex] = 'WorkspaceBuilder.java:' + '190' , $addToolSet(workspace, ts);
        }
      }
    }
  }
  for ($location_0[stackIndex] = 'WorkspaceBuilder.java:' + '196' , ts$iterator = $AbstractList$IteratorImpl(($location_0[stackIndex] = 'AbstractList.java:' + '278' , new AbstractList$IteratorImpl), toBeLoaded); ts$iterator.i < ($location_0[stackIndex] = 'AbstractList.java:' + '38' , ts$iterator.this$0.size_1());) {
    ts = dynamicCast(($location_0[stackIndex] = 'WorkspaceBuilder.java:' + '196' , $next_6(ts$iterator)), 227);
    if ($location_0[stackIndex] = 'HashSet.java:' + '83' , $containsKey_0(loaded.map, ($location_0[stackIndex] = 'WorkspaceBuilder.java:' + '197' , ts.getToolSetName())))
      continue;
    $location_0[stackIndex] = 'WorkspaceBuilder.java:' + '198' , $addToolSet(workspace, ts);
  }
  for ($location_0[stackIndex] = 'WorkspaceBuilder.java:' + '201' , group$iterator = (outerIter = ($location_0[stackIndex] = 'AbstractMap.java:' + '107' , ($location_0[stackIndex] = 'WorkspaceBuilder.java:' + '201' , $keySet_1(toBeLoadedGroups)).val$entrySet.iterator_0()) , $AbstractMap$1$1(($location_0[stackIndex] = 'AbstractMap.java:' + '108' , new AbstractMap$1$1), outerIter)); $location_0[stackIndex] = 'AbstractMap.java:' + '110' , group$iterator.val$outerIter.hasNext();) {
    group = ($location_0[stackIndex] = 'WorkspaceBuilder.java:' + '201' , dynamicCast((entry = dynamicCast(($location_0[stackIndex] = 'AbstractMap.java:' + '114' , group$iterator.val$outerIter.next_0()), 87) , ($location_0[stackIndex] = 'AbstractMap.java:' + '115' , entry.getKey())), 1));
    if ($location_0[stackIndex] = 'HashSet.java:' + '83' , $containsKey_0(loaded.map, group))
      continue;
    toBeRendered = $ArrayList(($location_0[stackIndex] = 'WorkspaceBuilder.java:' + '204' , new ArrayList));
    for (provider$iterator = dynamicCast(($location_0[stackIndex] = 'WorkspaceBuilder.java:' + '205' , $get_8(toBeLoadedGroups, group)), 170).iterator_0(); $location_0[stackIndex] = 'WorkspaceBuilder.java:' + '205' , provider$iterator.hasNext();) {
      provider = dynamicCast(provider$iterator.next_0(), 286);
      $location_0[stackIndex] = 'WorkspaceBuilder.java:' + '206' , t = provider.val$toolImpl;
      !!t && setCheck(toBeRendered.array, ($location_0[stackIndex] = 'ArrayList.java:' + '95' , toBeRendered.size_0++), t);
    }
    if (toBeRendered.size_0 != 0) {
      ts = $WorkspaceBuilder$4(($location_0[stackIndex] = 'WorkspaceBuilder.java:' + '214' , new WorkspaceBuilder$4), toBeRendered, group);
      $location_0[stackIndex] = 'WorkspaceBuilder.java:' + '230' , $addToolSet(workspace, ts);
    }
  }
  $stackDepth_0 = stackIndex - 1;
}

var preferredGroupOrdering, toBeLoaded, toBeLoadedGroups, toolCounter = 0;
function $WorkspaceBuilder$1(this$static, val$toolImpl){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $WorkspaceBuilder$1;
  $location_0[stackIndex] = 'WorkspaceBuilder.java:' + '70' , this$static.val$toolImpl = val$toolImpl;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_887(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_887;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_errai_workspaces_client_framework_WorkspaceBuilder$1_2_classLit;
}

function WorkspaceBuilder$1(){
}

_ = WorkspaceBuilder$1.prototype = new Object_0;
_.getClass$ = getClass_887;
_.typeId$ = 606;
_.val$toolImpl = null;
function $WorkspaceBuilder$3(this$static, val$toBeRendered, val$group){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $WorkspaceBuilder$3;
  $location_0[stackIndex] = 'WorkspaceBuilder.java:' + '174' , this$static.val$toBeRendered = val$toBeRendered;
  this$static.val$group = val$group;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getAllProvidedTools(){
  var toolArray, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getAllProvidedTools;
  toolArray = ($location_0[stackIndex] = 'WorkspaceBuilder.java:' + '176' , initDim(_3Lorg_jboss_errai_workspaces_client_api_Tool_2_classLit, 720, 120, this.val$toBeRendered.size_0, 0));
  $location_0[stackIndex] = 'WorkspaceBuilder.java:' + '177' , $toArray_1(this.val$toBeRendered, toolArray);
  $stackDepth_0 = stackIndex - 1;
  return toolArray;
}

function getClass_888(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_888;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_errai_workspaces_client_framework_WorkspaceBuilder$3_2_classLit;
}

function getToolSetName(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getToolSetName;
  $stackDepth_0 = stackIndex - 1;
  return this.val$group;
}

function getWidget_5(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getWidget_5;
  $stackDepth_0 = stackIndex - 1;
  return null;
}

function WorkspaceBuilder$3(){
}

_ = WorkspaceBuilder$3.prototype = new Object_0;
_.getAllProvidedTools = getAllProvidedTools;
_.getClass$ = getClass_888;
_.getToolSetName = getToolSetName;
_.getWidget = getWidget_5;
_.typeId$ = 607;
_.val$group = null;
_.val$toBeRendered = null;
function $WorkspaceBuilder$4(this$static, val$toBeRendered, val$group){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $WorkspaceBuilder$4;
  $location_0[stackIndex] = 'WorkspaceBuilder.java:' + '214' , this$static.val$toBeRendered = val$toBeRendered;
  this$static.val$group = val$group;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getAllProvidedTools_0(){
  var toolArray, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getAllProvidedTools_0;
  toolArray = ($location_0[stackIndex] = 'WorkspaceBuilder.java:' + '216' , initDim(_3Lorg_jboss_errai_workspaces_client_api_Tool_2_classLit, 720, 120, this.val$toBeRendered.size_0, 0));
  $location_0[stackIndex] = 'WorkspaceBuilder.java:' + '217' , $toArray_1(this.val$toBeRendered, toolArray);
  $stackDepth_0 = stackIndex - 1;
  return toolArray;
}

function getClass_889(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_889;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_errai_workspaces_client_framework_WorkspaceBuilder$4_2_classLit;
}

function getToolSetName_0(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getToolSetName_0;
  $stackDepth_0 = stackIndex - 1;
  return this.val$group;
}

function getWidget_6(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getWidget_6;
  $stackDepth_0 = stackIndex - 1;
  return null;
}

function WorkspaceBuilder$4(){
}

_ = WorkspaceBuilder$4.prototype = new Object_0;
_.getAllProvidedTools = getAllProvidedTools_0;
_.getClass$ = getClass_889;
_.getToolSetName = getToolSetName_0;
_.getWidget = getWidget_6;
_.typeId$ = 608;
_.val$group = null;
_.val$toBeRendered = null;
function $application(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $application;
  !application && (application = $ImageResourcePrototype(($location_0[stackIndex] = 'org_jboss_errai_workspaces_client_icons_ErraiImageBundle_default_InlineClientBundleGenerator.java:' + '9' , new ImageResourcePrototype), 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABp0lEQVR42s3S70tTURgH8P2Lo7AhoUYRgqPNjQnbQggZCpGESKJUiElxa0WTQqYUir3QjKJIqHS+ChzT2rx39+e5d9+e55x7x9623vTA983lnM99znNOLPavFU9rY3cqtXbxyREKjymrP5Bf+YaJ5QPkHn5F9sEXZJY+Ib34Eal7+0jO76Gw9K7N+yRQKteCuWodf5vU3e1AAvznfnL99hYkUFg9RD91dfqNAvKPvssPrvDhUGxXoG0L6LaHlunil2Gj0bRwcmriZ8PA8Yku14+UNkKABsblBQE835eQ5QmYjoLOLYHfbQenOkEtG/UzS64furWuAJ42l0+AYITiEmQTZHI3BBnckSnQNDyc6Y5cf3nytQL4qiTQ6UggglyK46sjRZAeQlyDN9cUkL3/uQtEET3dOIwJAZuOxUdjiCtReKmA1MIHBVCCHkhQvBCJYlNHllDAxVxZATfm33evphMiQU83UbwwPB+uC9mnCkjO7fb1DuIZTQHxcU0bnd2RL+vazFtcKW1ieKpKU34lB5UoVnAp/wIDE8+p7Wf0Zw20h6PF/ov6A2ewqEbquTsEAAAAAElFTkSuQmCC', 0, 0, 16, 16));
  $stackDepth_0 = stackIndex - 1;
  return application;
}

var application = null;
function $WSLayoutPanel(this$static, layout){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $WSLayoutPanel;
  $location_0[stackIndex] = 'WSLayoutPanel.java:' + '26' , $LayoutPanel_1(this$static, layout);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_890(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_890;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_errai_workspaces_client_layout_WSLayoutPanel_2_classLit;
}

function onResize_16(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onResize_16;
  $location_0[stackIndex] = 'WSLayoutPanel.java:' + '30' , layoutHints(this);
  $stackDepth_0 = stackIndex - 1;
}

function WSLayoutPanel(){
}

_ = WSLayoutPanel.prototype = new LayoutPanel;
_.getClass$ = getClass_890;
_.onResize_0 = onResize_16;
_.typeId$ = 609;
function $clinit_1268(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1268;
  $location_0[stackIndex] = 'LayoutParts.java:' + '20' , $clinit_1268 = nullMethod;
  $location_0[stackIndex] = 'LayoutParts.java:' + '21' , CommandType_0 = $LayoutParts(($location_0[stackIndex] = 'LayoutParts.java:' + '1' , new LayoutParts), 'CommandType', 0);
  $location_0[stackIndex] = 'LayoutParts.java:' + '21' , ComponentID = $LayoutParts(($location_0[stackIndex] = 'LayoutParts.java:' + '1' , new LayoutParts), 'ComponentID', 1);
  $location_0[stackIndex] = 'LayoutParts.java:' + '21' , InstanceID = $LayoutParts(($location_0[stackIndex] = 'LayoutParts.java:' + '1' , new LayoutParts), 'InstanceID', 2);
  $location_0[stackIndex] = 'LayoutParts.java:' + '21' , Name_1 = $LayoutParts(($location_0[stackIndex] = 'LayoutParts.java:' + '1' , new LayoutParts), 'Name', 3);
  $location_0[stackIndex] = 'LayoutParts.java:' + '21' , MultipleInstances = $LayoutParts(($location_0[stackIndex] = 'LayoutParts.java:' + '1' , new LayoutParts), 'MultipleInstances', 4);
  $location_0[stackIndex] = 'LayoutParts.java:' + '21' , IconURI = $LayoutParts(($location_0[stackIndex] = 'LayoutParts.java:' + '1' , new LayoutParts), 'IconURI', 5);
  $location_0[stackIndex] = 'LayoutParts.java:' + '21' , Subject_0 = $LayoutParts(($location_0[stackIndex] = 'LayoutParts.java:' + '1' , new LayoutParts), 'Subject', 6);
  $location_0[stackIndex] = 'LayoutParts.java:' + '21' , DOMID = $LayoutParts(($location_0[stackIndex] = 'LayoutParts.java:' + '1' , new LayoutParts), 'DOMID', 7);
  $location_0[stackIndex] = 'LayoutParts.java:' + '21' , RespondWithCommand = $LayoutParts(($location_0[stackIndex] = 'LayoutParts.java:' + '1' , new LayoutParts), 'RespondWithCommand', 8);
  $location_0[stackIndex] = 'LayoutParts.java:' + '22' , NestedData = $LayoutParts(($location_0[stackIndex] = 'LayoutParts.java:' + '1' , new LayoutParts), 'NestedData', 9);
  $location_0[stackIndex] = 'LayoutParts.java:' + '22' , Width = $LayoutParts(($location_0[stackIndex] = 'LayoutParts.java:' + '1' , new LayoutParts), 'Width', 10);
  $location_0[stackIndex] = 'LayoutParts.java:' + '22' , Height = $LayoutParts(($location_0[stackIndex] = 'LayoutParts.java:' + '1' , new LayoutParts), 'Height', 11);
  $location_0[stackIndex] = 'LayoutParts.java:' + '22' , SizeHintsSubject = $LayoutParts(($location_0[stackIndex] = 'LayoutParts.java:' + '1' , new LayoutParts), 'SizeHintsSubject', 12);
  $location_0[stackIndex] = 'LayoutParts.java:' + '22' , InitSubject = $LayoutParts(($location_0[stackIndex] = 'LayoutParts.java:' + '1' , new LayoutParts), 'InitSubject', 13);
  $location_0[stackIndex] = 'LayoutParts.java:' + '22' , TOOLSET = $LayoutParts(($location_0[stackIndex] = 'LayoutParts.java:' + '1' , new LayoutParts), 'TOOLSET', 14);
  $location_0[stackIndex] = 'LayoutParts.java:' + '22' , TOOL = $LayoutParts(($location_0[stackIndex] = 'LayoutParts.java:' + '1' , new LayoutParts), 'TOOL', 15);
  $stackDepth_0 = stackIndex - 1;
}

function $LayoutParts(this$static, enum$name, enum$ordinal){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $LayoutParts;
  $location_0[stackIndex] = 'LayoutParts.java:' + '20' , $clinit_1268();
  $location_0[stackIndex] = 'Enum.java:' + '76' , this$static.name_0 = enum$name;
  $location_0[stackIndex] = 'Enum.java:' + '77' , this$static.ordinal = enum$ordinal;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_902(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_902;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_errai_workspaces_client_protocols_LayoutParts_2_classLit;
}

function values_36(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = values_36;
  $location_0[stackIndex] = 'LayoutParts.java:' + '20' , $clinit_1268();
  returnTemp = initValues(_3Lorg_jboss_errai_workspaces_client_protocols_LayoutParts_2_classLit, 723, 123, [CommandType_0, ComponentID, InstanceID, Name_1, MultipleInstances, IconURI, Subject_0, DOMID, RespondWithCommand, NestedData, Width, Height, SizeHintsSubject, InitSubject, TOOLSET, TOOL]);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function LayoutParts(){
}

_ = LayoutParts.prototype = new Enum;
_.getClass$ = getClass_902;
_.typeId$ = 619;
var CommandType_0, ComponentID, DOMID, Height, IconURI, InitSubject, InstanceID, MultipleInstances, Name_1, NestedData, RespondWithCommand, SizeHintsSubject, Subject_0, TOOL, TOOLSET, Width;
function layoutHints(widgets){
  var w, w$iterator, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = layoutHints;
  for (w$iterator = ($location_0[stackIndex] = 'LayoutUtil.java:' + '24' , widgets.iterator_0()); $location_0[stackIndex] = 'LayoutUtil.java:' + '24' , w$iterator.hasNext();) {
    w = dynamicCast(w$iterator.next_0(), 2);
    w != null && ($location_0[stackIndex] = 'Cast.java:' + '76' , canCast(w.typeId$, 158)) && ($location_0[stackIndex] = 'LayoutUtil.java:' + '26' , dynamicCast(w, 158)).onResize_0();
  }
  $stackDepth_0 = stackIndex - 1;
}

function $clinit_1270(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1270;
  $location_0[stackIndex] = 'WorkspaceLogger.java:' + '44' , $clinit_1270 = nullMethod;
  levels = ($location_0[stackIndex] = 'WorkspaceLogger.java:' + '48' , initValues(_3I_classLit, 670, -1, [5000, 10000, 20000, 30000, 40000, 50000, 2147483647]));
  $stackDepth_0 = stackIndex - 1;
}

function $WorkspaceLogger(this$static, notification){
  var headerPanel, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $WorkspaceLogger;
  $location_0[stackIndex] = 'WorkspaceLogger.java:' + '77' , $clinit_1270();
  $location_0[stackIndex] = 'WorkspaceLogger.java:' + '58' , this$static.logDockPanel = $LayoutPanel_1(($location_0[stackIndex] = 'WorkspaceLogger.java:' + '59' , new LayoutPanel), $BorderLayout(new BorderLayout));
  this$static.logTextArea = $HTML(($location_0[stackIndex] = 'WorkspaceLogger.java:' + '62' , new HTML));
  this$static.scrollPanel = $ScrollLayoutPanel(($location_0[stackIndex] = 'WorkspaceLogger.java:' + '64' , new ScrollLayoutPanel));
  $location_0[stackIndex] = 'WorkspaceLogger.java:' + '79' , this$static.notification = notification;
  $location_0[stackIndex] = 'WorkspaceLogger.java:' + '81' , $addStyleName(this$static.logDockPanel, (!css_1 && (css_1 = ($location_0[stackIndex] = 'com_allen_sauer_gwt_log_client_impl_LogClientBundle_default_InlineClientBundleGenerator.java:' + '9' , new com_allen_sauer_gwt_log_client_impl_LogClientBundle_default_InlineClientBundleGenerator$1)) , 'log-panel'));
  $location_0[stackIndex] = 'WorkspaceLogger.java:' + '82' , $addStyleName(this$static.logTextArea, (!css_1 && (css_1 = ($location_0[stackIndex] = 'com_allen_sauer_gwt_log_client_impl_LogClientBundle_default_InlineClientBundleGenerator.java:' + '9' , new com_allen_sauer_gwt_log_client_impl_LogClientBundle_default_InlineClientBundleGenerator$1)) , 'Gtuw1jkDB'));
  $location_0[stackIndex] = 'WorkspaceLogger.java:' + '83' , $addStyleName(this$static.scrollPanel, (!css_1 && (css_1 = ($location_0[stackIndex] = 'com_allen_sauer_gwt_log_client_impl_LogClientBundle_default_InlineClientBundleGenerator.java:' + '9' , new com_allen_sauer_gwt_log_client_impl_LogClientBundle_default_InlineClientBundleGenerator$1)) , 'Gtuw1jkBB'));
  headerPanel = ($location_0[stackIndex] = 'WorkspaceLogger.java:' + '87' , $makeHeader(this$static));
  $add_26(this$static.logDockPanel, headerPanel, ($location_0[stackIndex] = 'WorkspaceLogger.java:' + '89' , $BorderLayoutData_4(($location_0[stackIndex] = 'WorkspaceLogger.java:' + '89' , new BorderLayoutData), ($location_0[stackIndex] = 'BorderLayout.java:' + '199' , $clinit_789() , NORTH_0), '30 px', false)));
  $add_26(this$static.logDockPanel, this$static.scrollPanel, $BorderLayoutData_1(($location_0[stackIndex] = 'WorkspaceLogger.java:' + '90' , new BorderLayoutData), CENTER_1));
  $location_0[stackIndex] = 'WorkspaceLogger.java:' + '92' , $add_25(this$static.scrollPanel, this$static.logTextArea);
  this$static.timer = $WorkspaceLogger$1(($location_0[stackIndex] = 'WorkspaceLogger.java:' + '96' , new WorkspaceLogger$1), this$static);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $addLogText(this$static, logTest){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $addLogText;
  $location_0[stackIndex] = 'WorkspaceLogger.java:' + '190' , this$static.logText += logTest;
  if (!this$static.dirty) {
    $location_0[stackIndex] = 'WorkspaceLogger.java:' + '192' , this$static.dirty = true;
    $location_0[stackIndex] = 'WorkspaceLogger.java:' + '193' , $schedule(this$static.timer, 500);
  }
  $stackDepth_0 = stackIndex - 1;
}

function $getColor(logLevel){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $getColor;
  if (logLevel == 2147483647) {
    $stackDepth_0 = stackIndex - 1;
    return '#000';
  }
  if (logLevel >= 50000) {
    $stackDepth_0 = stackIndex - 1;
    return '#CC0000';
  }
  if (logLevel >= 40000) {
    $stackDepth_0 = stackIndex - 1;
    return '#990000';
  }
  if (logLevel >= 30000) {
    $stackDepth_0 = stackIndex - 1;
    return '#CC9900';
  }
  if (logLevel >= 20000) {
    $stackDepth_0 = stackIndex - 1;
    return '#336699';
  }
  if (logLevel >= 10000) {
    $stackDepth_0 = stackIndex - 1;
    return '#336633';
  }
  $stackDepth_0 = stackIndex - 1;
  return '#F0F';
}

function $makeHeader(this$static){
  var buttonPanel, clearButton, i, level, masterPanel, titleLabel, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $makeHeader;
  masterPanel = $ToolBar(($location_0[stackIndex] = 'WorkspaceLogger.java:' + '225' , new ToolBar));
  titleLabel = $Label_1(($location_0[stackIndex] = 'WorkspaceLogger.java:' + '229' , new Label), 'System Messages', false);
  $location_0[stackIndex] = 'WorkspaceLogger.java:' + '230' , $setStylePrimaryName(titleLabel, (!css_1 && (css_1 = ($location_0[stackIndex] = 'com_allen_sauer_gwt_log_client_impl_LogClientBundle_default_InlineClientBundleGenerator.java:' + '9' , new com_allen_sauer_gwt_log_client_impl_LogClientBundle_default_InlineClientBundleGenerator$1)) , 'Gtuw1jkEB'));
  buttonPanel = $HorizontalPanel(($location_0[stackIndex] = 'WorkspaceLogger.java:' + '232' , new HorizontalPanel));
  this$static.levelButtons = ($location_0[stackIndex] = 'WorkspaceLogger.java:' + '233' , initDim(_3Lcom_google_gwt_user_client_ui_Button_2_classLit, 656, 62, levels.length, 0));
  for ($location_0[stackIndex] = 'WorkspaceLogger.java:' + '234' , i = 0; i < levels.length; $location_0[stackIndex] = 'WorkspaceLogger.java:' + '234' , ++i) {
    level = ($location_0[stackIndex] = 'WorkspaceLogger.java:' + '235' , levels[i]);
    this$static.levelButtons[i] = $Button(($location_0[stackIndex] = 'WorkspaceLogger.java:' + '236' , new Button), levelToString(level));
    $add_5(buttonPanel, ($location_0[stackIndex] = 'WorkspaceLogger.java:' + '237' , this$static.levelButtons[i]));
    $location_0[stackIndex] = 'FocusWidget.java:' + '91' , $addDomHandler(($location_0[stackIndex] = 'WorkspaceLogger.java:' + '238' , this$static.levelButtons[i]), $WorkspaceLogger$2(new WorkspaceLogger$2, level), ($location_0[stackIndex] = 'FocusWidget.java:' + '91' , $clinit_129() , ($location_0[stackIndex] = 'ClickEvent.java:' + '27' , $clinit_129()) , TYPE_1));
  }
  clearButton = $Button(($location_0[stackIndex] = 'WorkspaceLogger.java:' + '246' , new Button), 'Clear');
  $location_0[stackIndex] = 'WorkspaceLogger.java:' + '247' , $addStyleName(clearButton, (!css_1 && (css_1 = ($location_0[stackIndex] = 'com_allen_sauer_gwt_log_client_impl_LogClientBundle_default_InlineClientBundleGenerator.java:' + '9' , new com_allen_sauer_gwt_log_client_impl_LogClientBundle_default_InlineClientBundleGenerator$1)) , 'Gtuw1jkM'));
  $location_0[stackIndex] = 'Style.java:' + '1449' , clearButton.element.style['color'] = '#00c';
  $location_0[stackIndex] = 'FocusWidget.java:' + '91' , $addDomHandler(clearButton, ($location_0[stackIndex] = 'WorkspaceLogger.java:' + '249' , new WorkspaceLogger$3), ($location_0[stackIndex] = 'FocusWidget.java:' + '91' , $clinit_129() , ($location_0[stackIndex] = 'ClickEvent.java:' + '27' , $clinit_129()) , TYPE_1));
  $location_0[stackIndex] = 'WorkspaceLogger.java:' + '255' , $add_5(buttonPanel, clearButton);
  $location_0[stackIndex] = 'WorkspaceLogger.java:' + '258' , $add_28(masterPanel, buttonPanel);
  $stackDepth_0 = stackIndex - 1;
  return masterPanel;
}

function clear_12(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = clear_12;
  $location_0[stackIndex] = 'Element.java:' + '614' , this.logTextArea.element.innerHTML = '';
  $stackDepth_0 = stackIndex - 1;
}

function getClass_903(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_903;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_errai_workspaces_client_util_WorkspaceLogger_2_classLit;
}

function isSupported_3(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = isSupported_3;
  $stackDepth_0 = stackIndex - 1;
  return true;
}

function log_4(record){
  var element, element$array, element$index, element$max, stackTraceElements, text, throwable, title, message, throwable_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = log_4;
  text = $replaceAll(($location_0[stackIndex] = 'WorkspaceLogger.java:' + '131' , $replaceAll(record.level == 2147483647?record.message_0:$format(($location_0[stackIndex] = 'LogRecord.java:' + '42' , levelToString(record.level)), record.message_0), '<', '&lt;')), '>', '&gt;');
  $location_0[stackIndex] = 'WorkspaceLogger.java:' + '132' , title = ($location_0[stackIndex] = 'WorkspaceLogger.java:' + '264' , message = record.level == 2147483647?record.message_0:$format(($location_0[stackIndex] = 'LogRecord.java:' + '42' , levelToString(record.level)), record.message_0) , ($location_0[stackIndex] = 'WorkspaceLogger.java:' + '265' , throwable_0 = record.throwable?record.throwable:($location_0[stackIndex] = 'LogRecord.java:' + '64' , getInstanceOrNull(record.wrappedClientThrowable))) , !!throwable_0 && (($location_0[stackIndex] = 'WorkspaceLogger.java:' + '267' , throwable_0.getMessage()) == null?(message = ($location_0[stackIndex] = 'WorkspaceLogger.java:' + '268' , throwable_0.getClass$()).typeName):(message = ($location_0[stackIndex] = 'WorkspaceLogger.java:' + '270' , $replaceAll(($location_0[stackIndex] = 'WorkspaceLogger.java:' + '270' , throwable_0.getMessage()), $replaceAll(($location_0[stackIndex] = 'WorkspaceLogger.java:' + '271' , throwable_0.getClass$()).typeName, '^(.+\\.).+$', '$1'), '')))) , $replaceAll($replaceAll(($location_0[stackIndex] = 'WorkspaceLogger.java:' + '274' , $replaceAll(($location_0[stackIndex] = 'DOMUtilImplIE6.java:' + '24' , $replaceAll(message, '\r\n|\r|\n', '\n')), '<', '&lt;')), '>', '&gt;'), "'", '"'));
  $location_0[stackIndex] = 'WorkspaceLogger.java:' + '133' , throwable = record.throwable?record.throwable:($location_0[stackIndex] = 'LogRecord.java:' + '64' , getInstanceOrNull(record.wrappedClientThrowable));
  if (throwable) {
    while (throwable) {
      text += ($location_0[stackIndex] = 'WorkspaceLogger.java:' + '136' , throwable.getClass$()).typeName + ':<br><b>' + throwable.getMessage() + '<\/b>';
      stackTraceElements = ($location_0[stackIndex] = 'WorkspaceLogger.java:' + '137' , $getStackTrace(throwable));
      if (stackTraceElements.length > 0) {
        $location_0[stackIndex] = 'WorkspaceLogger.java:' + '139' , text += "<div class='log-stacktrace'>";
        for ($location_0[stackIndex] = 'WorkspaceLogger.java:' + '140' , element$array = stackTraceElements , element$index = 0 , element$max = element$array.length; element$index < element$max; $location_0[stackIndex] = 'WorkspaceLogger.java:' + '140' , ++element$index) {
          element = element$array[element$index];
          $location_0[stackIndex] = 'WorkspaceLogger.java:' + '141' , text += '&nbsp;&nbsp;&nbsp;&nbsp;at&nbsp;' + element + '<br>';
        }
        $location_0[stackIndex] = 'WorkspaceLogger.java:' + '143' , text += '<\/div>';
      }
      throwable = ($location_0[stackIndex] = 'WorkspaceLogger.java:' + '145' , throwable.getCause());
      !!throwable && ($location_0[stackIndex] = 'WorkspaceLogger.java:' + '147' , text += 'Caused by: ');
    }
  }
  text = ($location_0[stackIndex] = 'WorkspaceLogger.java:' + '151' , $replaceAll(text, '\r\n|\r|\n', '<BR>'));
  $location_0[stackIndex] = 'WorkspaceLogger.java:' + '152' , $addLogText(this, "<div class='" + (!css_1 && (css_1 = ($location_0[stackIndex] = 'com_allen_sauer_gwt_log_client_impl_LogClientBundle_default_InlineClientBundleGenerator.java:' + '9' , new com_allen_sauer_gwt_log_client_impl_LogClientBundle_default_InlineClientBundleGenerator$1)) , 'Gtuw1jkN') + "' onmouseover='className+=\" log-message-hover\"' onmouseout='className=className.replace(/ log-message-hover/g,\"\")' style='color: " + ($location_0[stackIndex] = 'WorkspaceLogger.java:' + '155' , $getColor(record.level)) + "' title='" + title + "'>" + text + '<\/div>');
  $location_0[stackIndex] = 'WorkspaceLogger.java:' + '158' , $onLogLevel(this.notification, record.level);
  $stackDepth_0 = stackIndex - 1;
}

function setCurrentLogLevel_4(level){
  var active, current, i, levelText, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = setCurrentLogLevel_4;
  for ($location_0[stackIndex] = 'WorkspaceLogger.java:' + '166' , i = 0; i < levels.length; $location_0[stackIndex] = 'WorkspaceLogger.java:' + '166' , ++i) {
    if (($location_0[stackIndex] = 'WorkspaceLogger.java:' + '167' , levels[i]) < ($clinit_24() , 10000)) {
      $location_0[stackIndex] = 'Element.java:' + '638' , ($location_0[stackIndex] = 'WorkspaceLogger.java:' + '168' , this.levelButtons[i]).element['disabled'] = !false;
    }
     else {
      levelText = levelToString(($location_0[stackIndex] = 'WorkspaceLogger.java:' + '170' , levels[i]));
      current = level == ($location_0[stackIndex] = 'WorkspaceLogger.java:' + '171' , levels[i]);
      $setTitle(($location_0[stackIndex] = 'WorkspaceLogger.java:' + '172' , this.levelButtons[i]), current?"Current (runtime) log level is already '" + levelText + "'":"Set current (runtime) log level to '" + levelText + "'");
      active = level <= ($location_0[stackIndex] = 'WorkspaceLogger.java:' + '174' , levels[i]);
      $location_0[stackIndex] = 'Style.java:' + '1449' , ($location_0[stackIndex] = 'WorkspaceLogger.java:' + '175' , this.levelButtons[i]).element.style['color'] = active?$getColor(levels[i]):'#ccc';
    }
  }
  $stackDepth_0 = stackIndex - 1;
}

function WorkspaceLogger(){
}

_ = WorkspaceLogger.prototype = new Object_0;
_.clear = clear_12;
_.getClass$ = getClass_903;
_.isSupported = isSupported_3;
_.log_0 = log_4;
_.setCurrentLogLevel = setCurrentLogLevel_4;
_.typeId$ = 620;
_.dirty = false;
_.levelButtons = null;
_.logText = '';
_.notification = null;
_.timer = null;
var levels;
function $clinit_1271(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1271;
  $location_0[stackIndex] = 'WorkspaceLogger.java:' + '96' , $clinit_1271 = nullMethod;
  $clinit_43();
  $stackDepth_0 = stackIndex - 1;
}

function $WorkspaceLogger$1(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $WorkspaceLogger$1;
  $location_0[stackIndex] = 'WorkspaceLogger.java:' + '96' , $clinit_1271();
  this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_904(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_904;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_errai_workspaces_client_util_WorkspaceLogger$1_2_classLit;
}

function run_31(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = run_31;
  $location_0[stackIndex] = 'WorkspaceLogger.java:' + '99' , this.this$0.dirty = false;
  $location_0[stackIndex] = 'WorkspaceLogger.java:' + '100' , $setHTML(this.this$0.logTextArea, ($location_0[stackIndex] = 'Element.java:' + '259' , $clinit_82() , this.this$0.logTextArea.element).innerHTML + this.this$0.logText);
  $location_0[stackIndex] = 'WorkspaceLogger.java:' + '101' , this.this$0.logText = '';
  $location_0[stackIndex] = 'WorkspaceLogger.java:' + '102' , addCommand($WorkspaceLogger$1$1(($location_0[stackIndex] = 'WorkspaceLogger.java:' + '103' , new WorkspaceLogger$1$1), this));
  $stackDepth_0 = stackIndex - 1;
}

function WorkspaceLogger$1(){
}

_ = WorkspaceLogger$1.prototype = new Timer;
_.getClass$ = getClass_904;
_.run = run_31;
_.typeId$ = 621;
_.this$0 = null;
function $WorkspaceLogger$1$1(this$static, this$1){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $WorkspaceLogger$1$1;
  $location_0[stackIndex] = 'WorkspaceLogger.java:' + '103' , this$static.this$1 = this$1;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function execute_49(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = execute_49;
  $location_0[stackIndex] = 'Element.java:' + '658' , this.this$1.this$0.scrollPanel.element['scrollTop'] = 107374182;
  $stackDepth_0 = stackIndex - 1;
}

function getClass_905(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_905;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_errai_workspaces_client_util_WorkspaceLogger$1$1_2_classLit;
}

function WorkspaceLogger$1$1(){
}

_ = WorkspaceLogger$1$1.prototype = new Object_0;
_.execute = execute_49;
_.getClass$ = getClass_905;
_.typeId$ = 622;
_.this$1 = null;
function $WorkspaceLogger$2(this$static, val$level){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $WorkspaceLogger$2;
  $location_0[stackIndex] = 'WorkspaceLogger.java:' + '238' , this$static.val$level = val$level;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_906(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_906;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_errai_workspaces_client_util_WorkspaceLogger$2_2_classLit;
}

function onClick_44(event_0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClick_44;
  $setFocus(($location_0[stackIndex] = 'WorkspaceLogger.java:' + '240' , dynamicCast(event_0.source_0, 62)), false);
  $location_0[stackIndex] = 'Log.java:' + '518' , $clinit_24();
  $location_0[stackIndex] = 'Log.java:' + '519' , $setCurrentLogLevel(impl, this.val$level);
  $stackDepth_0 = stackIndex - 1;
}

function WorkspaceLogger$2(){
}

_ = WorkspaceLogger$2.prototype = new Object_0;
_.getClass$ = getClass_906;
_.onClick = onClick_44;
_.typeId$ = 623;
_.val$level = 0;
function getClass_907(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_907;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_errai_workspaces_client_util_WorkspaceLogger$3_2_classLit;
}

function onClick_45(event_0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClick_45;
  $setFocus(($location_0[stackIndex] = 'WorkspaceLogger.java:' + '251' , dynamicCast(event_0.source_0, 62)), false);
  $location_0[stackIndex] = 'WorkspaceLogger.java:' + '252' , $clinit_24();
  $location_0[stackIndex] = 'Log.java:' + '89' , $clear(impl);
  $stackDepth_0 = stackIndex - 1;
}

function WorkspaceLogger$3(){
}

_ = WorkspaceLogger$3.prototype = new Object_0;
_.getClass$ = getClass_907;
_.onClick = onClick_45;
_.typeId$ = 624;
function $WSToolSetLauncher(this$static, id, toolSet){
  var t, t$array, t$index, t$max, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $WSToolSetLauncher;
  $LayoutPanel_1(this$static, ($location_0[stackIndex] = 'WSToolSetLauncher.java:' + '52' , $BoxLayout_1(($location_0[stackIndex] = 'WSToolSetLauncher.java:' + '52' , new BoxLayout), ($location_0[stackIndex] = 'BoxLayout.java:' + '170' , $clinit_796() , VERTICAL))));
  $location_0[stackIndex] = 'LayoutPanel.java:' + '289' , setStyleAttribute_0(this$static.element, 'padding', '3px');
  $location_0[stackIndex] = 'WSToolSetLauncher.java:' + '57' , toolSet.getWidget();
  $location_0[stackIndex] = 'WSToolSetLauncher.java:' + '58' , this$static.toolSetId = id;
  for (t$array = ($location_0[stackIndex] = 'WSToolSetLauncher.java:' + '67' , toolSet.getAllProvidedTools()) , t$index = 0 , t$max = t$array.length; t$index < t$max; $location_0[stackIndex] = 'WSToolSetLauncher.java:' + '67' , ++t$index) {
    t = t$array[t$index];
    $location_0[stackIndex] = 'WSToolSetLauncher.java:' + '68' , $addLink(this$static, t.name_0, t);
  }
  $location_0[stackIndex] = 'Element.java:' + '607' , this$static.element.id = this$static.toolSetId;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $addLink(this$static, name_0, tool){
  var button, resource, resourceFactory, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $addLink;
  resourceFactory = $ResourceFactoryImpl(($location_0[stackIndex] = 'WSToolSetLauncher.java:' + '77' , new ResourceFactoryImpl));
  $location_0[stackIndex] = 'WSToolSetLauncher.java:' + '79' , resource = dynamicCast(($location_0[stackIndex] = 'ResourceFactoryImpl.java:' + '27' , $get_8(resourceFactory.mapping, tool.name_0)), 285)?dynamicCast($get_8(resourceFactory.mapping, tool.name_0), 285):($location_0[stackIndex] = 'WSToolSetLauncher.java:' + '80' , $application());
  button = $WSLaunchButton(($location_0[stackIndex] = 'WSToolSetLauncher.java:' + '82' , new WSLaunchButton), resource, name_0);
  $location_0[stackIndex] = 'WSToolSetLauncher.java:' + '83' , $addClickListener(button, $WSToolSetLauncher$1(($location_0[stackIndex] = 'WSToolSetLauncher.java:' + '84' , new WSToolSetLauncher$1), this$static, tool));
  $add_26(this$static, button, ($location_0[stackIndex] = 'WSToolSetLauncher.java:' + '100' , $BoxLayoutData_4(($location_0[stackIndex] = 'WSToolSetLauncher.java:' + '100' , new BoxLayoutData), ($location_0[stackIndex] = 'BoxLayoutData.java:' + '30' , $clinit_798() , HORIZONTAL_0))));
  $stackDepth_0 = stackIndex - 1;
}

function getClass_908(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_908;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_errai_workspaces_client_widgets_WSToolSetLauncher_2_classLit;
}

function WSToolSetLauncher(){
}

_ = WSToolSetLauncher.prototype = new LayoutPanel;
_.getClass$ = getClass_908;
_.typeId$ = 625;
_.toolSetId = null;
function $WSToolSetLauncher$1(this$static, this$0, val$tool){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $WSToolSetLauncher$1;
  $location_0[stackIndex] = 'WSToolSetLauncher.java:' + '84' , this$static.this$0 = this$0;
  this$static.val$tool = val$tool;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_909(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_909;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_errai_workspaces_client_widgets_WSToolSetLauncher$1_2_classLit;
}

function onClick_46(clickEvent){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClick_46;
  $location_0[stackIndex] = 'Log.java:' + '101' , $clinit_24();
  $location_0[stackIndex] = 'Log.java:' + '150' , $debug(impl, 'ToolID: ' + this.val$tool.id_0, null);
  $location_0[stackIndex] = 'AbstractMessageBuilder.java:' + '59' , $sendNowWith($with_0(($location_0[stackIndex] = 'WSToolSetLauncher.java:' + '90' , $with_0(($location_0[stackIndex] = 'WSToolSetLauncher.java:' + '90' , $command_0(($location_0[stackIndex] = 'WSToolSetLauncher.java:' + '90' , $toSubject_0($start(($location_0[stackIndex] = 'MessageBuilder.java:' + '40' , $AbstractMessageBuilder(($location_0[stackIndex] = 'MessageBuilder.java:' + '40' , new AbstractMessageBuilder), $JSONMessage(($location_0[stackIndex] = 'JSONMessage.java:' + '105' , new JSONMessage))))), 'Workspace')), ($location_0[stackIndex] = 'LayoutCommands.java:' + '28' , $clinit_1267() , ActivateTool))), ($location_0[stackIndex] = 'LayoutParts.java:' + '22' , $clinit_1268() , TOOL), this.val$tool.id_0)), TOOLSET, this.this$0.toolSetId).val$sendable.this$0.message_0, ($location_0[stackIndex] = 'WSToolSetLauncher.java:' + '96' , $clinit_1091() , ($location_0[stackIndex] = 'ErraiBus.java:' + '30' , $clinit_1091()) , bus_0));
  $stackDepth_0 = stackIndex - 1;
}

function WSToolSetLauncher$1(){
}

_ = WSToolSetLauncher$1.prototype = new Object_0;
_.getClass$ = getClass_909;
_.onClick = onClick_46;
_.typeId$ = 626;
_.this$0 = null;
_.val$tool = null;
var _3Lcom_google_gwt_user_client_ui_Button_2_classLit = createForArray('[Lcom.google.gwt.user.client.ui.', 'Button;', Lcom_google_gwt_user_client_ui_Button_2_classLit), Lcom_google_gwt_lang_asyncloaders_AsyncLoader2$1_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader2$1'), Lcom_google_gwt_lang_asyncloaders_AsyncLoader2_1_1Callback_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader2__Callback'), Lcom_google_gwt_lang_asyncloaders_AsyncLoader3$1_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader3$1'), Lcom_google_gwt_lang_asyncloaders_AsyncLoader3_1_1Callback_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader3__Callback'), Lcom_google_gwt_lang_asyncloaders_AsyncLoader4$1_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader4$1'), Lcom_google_gwt_lang_asyncloaders_AsyncLoader4_1_1Callback_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader4__Callback'), Lcom_google_gwt_lang_asyncloaders_AsyncLoader5$1_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader5$1'), Lcom_google_gwt_lang_asyncloaders_AsyncLoader5_1_1Callback_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader5__Callback'), Lcom_google_gwt_lang_asyncloaders_AsyncLoader6$1_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader6$1'), Lcom_google_gwt_lang_asyncloaders_AsyncLoader6_1_1Callback_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader6__Callback'), Lcom_google_gwt_lang_asyncloaders_AsyncLoader7$1_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader7$1'), Lcom_google_gwt_lang_asyncloaders_AsyncLoader7_1_1Callback_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader7__Callback'), Lcom_google_gwt_lang_asyncloaders_AsyncLoader9_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader9'), Lorg_gwt_mosaic_ui_client_layout_BorderLayout$1_2_classLit = createForClass('org.gwt.mosaic.ui.client.layout.', 'BorderLayout$1'), Lorg_gwt_mosaic_ui_client_StackLayoutPanel_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'StackLayoutPanel'), Lorg_gwt_mosaic_ui_client_StackLayoutPanel$1_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'StackLayoutPanel$1'), Lorg_gwt_mosaic_ui_client_StackLayoutPanel$2_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'StackLayoutPanel$2'), Lorg_gwt_mosaic_ui_client_Viewport_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'Viewport'), Lorg_gwt_mosaic_ui_client_Viewport$1_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'Viewport$1'), Lorg_gwt_mosaic_ui_client_Viewport$2_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'Viewport$2'), Lorg_jboss_bpm_console_client_process_ProcessModule_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'ProcessModule'), Lorg_jboss_bpm_console_client_process_ProcessModule$1_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'ProcessModule$1'), Lorg_jboss_bpm_console_client_report_ReportModule_2_classLit = createForClass('org.jboss.bpm.console.client.report.', 'ReportModule'), Lorg_jboss_bpm_console_client_report_ReportModule$1_2_classLit = createForClass('org.jboss.bpm.console.client.report.', 'ReportModule$1'), Lorg_jboss_bpm_console_client_task_AssignedTasksModule_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'AssignedTasksModule'), Lorg_jboss_bpm_console_client_task_AssignedTasksModule$1_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'AssignedTasksModule$1'), Lorg_jboss_bpm_console_client_task_OpenTasksModule_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'OpenTasksModule'), Lorg_jboss_bpm_console_client_task_OpenTasksModule$1_2_classLit = createForClass('org.jboss.bpm.console.client.task.', 'OpenTasksModule$1'), Lorg_jboss_bpm_console_client_PreferencesModule_2_classLit = createForClass('org.jboss.bpm.console.client.', 'PreferencesModule'), Lorg_jboss_bpm_console_client_PreferencesModule$1_2_classLit = createForClass('org.jboss.bpm.console.client.', 'PreferencesModule$1'), Lorg_jboss_bpm_console_client_ServerStatusModule_2_classLit = createForClass('org.jboss.bpm.console.client.', 'ServerStatusModule'), Lorg_jboss_bpm_console_client_ServerStatusModule$1_2_classLit = createForClass('org.jboss.bpm.console.client.', 'ServerStatusModule$1'), Lorg_jboss_errai_widgets_client_WSLaunchButton_2_classLit = createForClass('org.jboss.errai.widgets.client.', 'WSLaunchButton'), Lorg_jboss_errai_workspaces_client_api_ResourceFactoryImpl_2_classLit = createForClass('org.jboss.errai.workspaces.client.api.', 'ResourceFactoryImpl'), Lorg_jboss_errai_workspaces_client_framework_ToolImpl_2_classLit = createForClass('org.jboss.errai.workspaces.client.framework.', 'ToolImpl'), Lorg_jboss_errai_workspaces_client_framework_WorkspaceBuilder$1_2_classLit = createForClass('org.jboss.errai.workspaces.client.framework.', 'WorkspaceBuilder$1'), Lorg_jboss_errai_workspaces_client_api_Tool_2_classLit = createForInterface('org.jboss.errai.workspaces.client.api.', 'Tool'), _3Lorg_jboss_errai_workspaces_client_api_Tool_2_classLit = createForArray('[Lorg.jboss.errai.workspaces.client.api.', 'Tool;', Lorg_jboss_errai_workspaces_client_api_Tool_2_classLit), Lorg_jboss_errai_workspaces_client_framework_WorkspaceBuilder$3_2_classLit = createForClass('org.jboss.errai.workspaces.client.framework.', 'WorkspaceBuilder$3'), Lorg_jboss_errai_workspaces_client_framework_WorkspaceBuilder$4_2_classLit = createForClass('org.jboss.errai.workspaces.client.framework.', 'WorkspaceBuilder$4'), Lorg_jboss_errai_workspaces_client_layout_WSLayoutPanel_2_classLit = createForClass('org.jboss.errai.workspaces.client.layout.', 'WSLayoutPanel'), Lorg_jboss_errai_workspaces_client_protocols_LayoutParts_2_classLit = createForEnum('org.jboss.errai.workspaces.client.protocols.', 'LayoutParts', values_36), _3Lorg_jboss_errai_workspaces_client_protocols_LayoutParts_2_classLit = createForArray('[Lorg.jboss.errai.workspaces.client.protocols.', 'LayoutParts;', Lorg_jboss_errai_workspaces_client_protocols_LayoutParts_2_classLit), Lorg_jboss_errai_workspaces_client_util_WorkspaceLogger_2_classLit = createForClass('org.jboss.errai.workspaces.client.util.', 'WorkspaceLogger'), Lorg_jboss_errai_workspaces_client_util_WorkspaceLogger$1_2_classLit = createForClass('org.jboss.errai.workspaces.client.util.', 'WorkspaceLogger$1'), Lorg_jboss_errai_workspaces_client_util_WorkspaceLogger$1$1_2_classLit = createForClass('org.jboss.errai.workspaces.client.util.', 'WorkspaceLogger$1$1'), Lorg_jboss_errai_workspaces_client_util_WorkspaceLogger$2_2_classLit = createForClass('org.jboss.errai.workspaces.client.util.', 'WorkspaceLogger$2'), Lorg_jboss_errai_workspaces_client_util_WorkspaceLogger$3_2_classLit = createForClass('org.jboss.errai.workspaces.client.util.', 'WorkspaceLogger$3'), Lorg_jboss_errai_workspaces_client_widgets_WSToolSetLauncher_2_classLit = createForClass('org.jboss.errai.workspaces.client.widgets.', 'WSToolSetLauncher'), Lorg_jboss_errai_workspaces_client_widgets_WSToolSetLauncher$1_2_classLit = createForClass('org.jboss.errai.workspaces.client.widgets.', 'WSToolSetLauncher$1'), Lorg_jboss_errai_workspaces_client_Application$4_2_classLit = createForClass('org.jboss.errai.workspaces.client.', 'Application$4'), Lorg_jboss_errai_workspaces_client_Application$5_2_classLit = createForClass('org.jboss.errai.workspaces.client.', 'Application$5'), Lorg_jboss_errai_workspaces_client_Application$5$1_2_classLit = createForClass('org.jboss.errai.workspaces.client.', 'Application$5$1'), Lorg_jboss_errai_workspaces_client_Application$6_2_classLit = createForClass('org.jboss.errai.workspaces.client.', 'Application$6'), Lorg_jboss_errai_workspaces_client_Menu_2_classLit = createForClass('org.jboss.errai.workspaces.client.', 'Menu'), Lorg_jboss_errai_workspaces_client_Viewport_2_classLit = createForClass('org.jboss.errai.workspaces.client.', 'Viewport'), Lorg_jboss_errai_workspaces_client_Viewport$1_2_classLit = createForClass('org.jboss.errai.workspaces.client.', 'Viewport$1'), Lorg_jboss_errai_workspaces_client_Viewport$1$1_2_classLit = createForClass('org.jboss.errai.workspaces.client.', 'Viewport$1$1'), Lorg_jboss_errai_workspaces_client_Workspace_2_classLit = createForClass('org.jboss.errai.workspaces.client.', 'Workspace'), Lorg_jboss_errai_workspaces_client_Workspace$ToolSetDeck_2_classLit = createForClass('org.jboss.errai.workspaces.client.', 'Workspace$ToolSetDeck'), Lorg_jboss_errai_workspaces_client_Workspace$ToolSetDeck$1_2_classLit = createForClass('org.jboss.errai.workspaces.client.', 'Workspace$ToolSetDeck$1'), Lorg_jboss_errai_workspaces_client_Workspace$ToolTabPanel_2_classLit = createForClass('org.jboss.errai.workspaces.client.', 'Workspace$ToolTabPanel'), Lorg_jboss_errai_workspaces_client_Workspace$ToolTabPanel$1_2_classLit = createForClass('org.jboss.errai.workspaces.client.', 'Workspace$ToolTabPanel$1'), Lorg_jboss_errai_workspaces_client_Workspace$1_2_classLit = createForClass('org.jboss.errai.workspaces.client.', 'Workspace$1'), Lorg_jboss_errai_workspaces_client_Workspace$2_2_classLit = createForClass('org.jboss.errai.workspaces.client.', 'Workspace$2'), Lorg_jboss_errai_workspaces_client_Workspace$3_2_classLit = createForClass('org.jboss.errai.workspaces.client.', 'Workspace$3'), Lorg_jboss_errai_workspaces_client_Workspace$4_2_classLit = createForClass('org.jboss.errai.workspaces.client.', 'Workspace$4');
onLoad_7();
