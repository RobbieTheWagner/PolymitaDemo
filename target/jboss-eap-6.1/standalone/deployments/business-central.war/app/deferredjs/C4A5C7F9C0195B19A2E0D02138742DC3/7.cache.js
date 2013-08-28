function getClass_156(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_156;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader7_2_classLit;
}

function onLoad_5(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onLoad_5;
  $location_0[stackIndex] = 'AsyncLoader7.java:' + '21' , loaded_6 = true;
  instance_8 = ($location_0[stackIndex] = 'AsyncLoader7.java:' + '5' , $clinit_279() , ($location_0[stackIndex] = 'AsyncLoader7.java:' + '22' , new AsyncLoader7));
  $location_0[stackIndex] = 'AsyncLoader7.java:' + '23' , $fragmentHasLoaded(($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '335' , $clinit_60() , BROWSER_LOADER), 7);
  !!$stats && ($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '231' , $stats(($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '238' , $createStatsEvent('runCallbacks7', 'begin', null, null))));
  $location_0[stackIndex] = 'AsyncLoader7.java:' + '25' , instance_8.runCallbacks();
  !!$stats && ($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '231' , $stats(($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '238' , $createStatsEvent('runCallbacks7', 'end', null, null))));
  $stackDepth_0 = stackIndex - 1;
}

function runCallbacks_12(){
  var $e0, e, handler, next, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = runCallbacks_12;
  while (callbacksHead_5) {
    $location_0[stackIndex] = 'AsyncLoader7.java:' + '55' , handler = sUncaughtExceptionHandler;
    $location_0[stackIndex] = 'AsyncLoader7.java:' + '56' , next = callbacksHead_5;
    $location_0[stackIndex] = 'AsyncLoader7.java:' + '57' , callbacksHead_5 = callbacksHead_5.next;
    !callbacksHead_5 && ($location_0[stackIndex] = 'AsyncLoader7.java:' + '59' , callbacksTail_5 = null);
    if (!handler) {
      $location_0[stackIndex] = 'AsyncLoader7.java:' + '62' , $onSuccess_5(next.callback);
    }
     else {
      try {
        $location_0[stackIndex] = 'AsyncLoader7.java:' + '65' , $onSuccess_5(next.callback);
      }
       catch ($e0) {
        $e0 = ($location_0[stackIndex] = 'AsyncLoader7.java:' + '66' , caught_0($e0));
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

function AsyncLoader7(){
}

_ = AsyncLoader7.prototype = new AsyncLoader7__Super;
_.getClass$ = getClass_156;
_.runCallbacks = runCallbacks_12;
_.typeId$ = 0;
var instance_17 = null;
function $onSuccess_5(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $onSuccess_5;
  !instance_17 && (instance_17 = $OpenTasksView(($location_0[stackIndex] = 'OpenTasksModule.java:' + '49' , new OpenTasksView)));
  $location_0[stackIndex] = 'OpenTasksModule.java:' + '51' , $provideWidget_6(instance_17, this$static.val$callback);
  $stackDepth_0 = stackIndex - 1;
}

function $OpenTasksView(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $OpenTasksView;
  $location_0[stackIndex] = 'OpenTasksView.java:' + '56' , $clinit_1044();
  this$static.dateFormat = $SimpleDateFormat(($location_0[stackIndex] = 'OpenTasksView.java:' + '65' , new SimpleDateFormat));
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $provideWidget_6(this$static, callback){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $provideWidget_6;
  this$static.panel = $MosaicPanel_0(($location_0[stackIndex] = 'OpenTasksView.java:' + '97' , new MosaicPanel), $BorderLayout(new BorderLayout));
  this$static.controller = dynamicCast(($location_0[stackIndex] = 'OpenTasksView.java:' + '99' , get_16(Lcom_mvc4g_client_Controller_2_classLit)), 166);
  dynamicCast(($location_0[stackIndex] = 'OpenTasksView.java:' + '100' , get_16(Lorg_jboss_bpm_console_client_ApplicationContext_2_classLit)), 224);
  $location_0[stackIndex] = 'OpenTasksView.java:' + '102' , $initialize_4(this$static);
  $location_0[stackIndex] = 'OpenTasksView.java:' + '104' , registerCommonActions(this$static.controller);
  $location_0[stackIndex] = 'OpenTasksView.java:' + '113' , $addView(this$static.controller, ID_30, this$static);
  $add_26(this$static.panel, this$static.taskList, ($location_0[stackIndex] = 'OpenTasksView.java:' + '117' , $BorderLayoutData_1(($location_0[stackIndex] = 'OpenTasksView.java:' + '117' , new BorderLayoutData), ($location_0[stackIndex] = 'BorderLayout.java:' + '199' , $clinit_780() , CENTER_1))));
  $add_26(this$static.panel, this$static.detailsView, $BorderLayoutData_5(($location_0[stackIndex] = 'OpenTasksView.java:' + '118' , new BorderLayoutData), SOUTH_0, 10, 200));
  $location_0[stackIndex] = 'OpenTasksView.java:' + '120' , callback.onSuccess(this$static.panel);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_740(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_740;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_OpenTasksView_2_classLit;
}

function setLoading_3(isLoading){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = setLoading_3;
  this.panel.element.style.display != 'none' && ($location_0[stackIndex] = 'OpenTasksView.java:' + '348' , on(this.taskList, isLoading));
  $stackDepth_0 = stackIndex - 1;
}

_ = OpenTasksView.prototype;
_.getClass$ = getClass_740;
_.setLoading = setLoading_3;
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader7_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader7');
onLoad_5();
