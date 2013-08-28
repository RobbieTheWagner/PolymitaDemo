function getClass_149(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_149;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader6_2_classLit;
}

function onLoad_4(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onLoad_4;
  $location_0[stackIndex] = 'AsyncLoader6.java:' + '21' , loaded_5 = true;
  instance_7 = ($location_0[stackIndex] = 'AsyncLoader6.java:' + '5' , $clinit_279() , ($location_0[stackIndex] = 'AsyncLoader6.java:' + '22' , new AsyncLoader6));
  $location_0[stackIndex] = 'AsyncLoader6.java:' + '23' , $fragmentHasLoaded(($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '335' , $clinit_61() , BROWSER_LOADER), 6);
  !!$stats && ($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '231' , $stats(($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '238' , $createStatsEvent('runCallbacks6', 'begin', null, null))));
  $location_0[stackIndex] = 'AsyncLoader6.java:' + '25' , instance_7.runCallbacks();
  !!$stats && ($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '231' , $stats(($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '238' , $createStatsEvent('runCallbacks6', 'end', null, null))));
  $stackDepth_0 = stackIndex - 1;
}

function runCallbacks_10(){
  var $e0, e, handler, next, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = runCallbacks_10;
  while (callbacksHead_4) {
    $location_0[stackIndex] = 'AsyncLoader6.java:' + '55' , handler = sUncaughtExceptionHandler;
    $location_0[stackIndex] = 'AsyncLoader6.java:' + '56' , next = callbacksHead_4;
    $location_0[stackIndex] = 'AsyncLoader6.java:' + '57' , callbacksHead_4 = callbacksHead_4.next;
    !callbacksHead_4 && ($location_0[stackIndex] = 'AsyncLoader6.java:' + '59' , callbacksTail_4 = null);
    if (!handler) {
      $location_0[stackIndex] = 'AsyncLoader6.java:' + '62' , $onSuccess_4(next.callback);
    }
     else {
      try {
        $location_0[stackIndex] = 'AsyncLoader6.java:' + '65' , $onSuccess_4(next.callback);
      }
       catch ($e0) {
        $e0 = ($location_0[stackIndex] = 'AsyncLoader6.java:' + '66' , caught_0($e0));
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

function AsyncLoader6(){
}

_ = AsyncLoader6.prototype = new AsyncLoader6__Super;
_.getClass$ = getClass_149;
_.runCallbacks = runCallbacks_10;
_.typeId$ = 0;
var instance_16 = null;
function $onSuccess_4(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $onSuccess_4;
  !instance_16 && (instance_16 = $AssignedTasksView(($location_0[stackIndex] = 'AssignedTasksModule.java:' + '49' , new AssignedTasksView)));
  $location_0[stackIndex] = 'AssignedTasksModule.java:' + '51' , $provideWidget_5(instance_16, this$static.val$callback);
  $stackDepth_0 = stackIndex - 1;
}

function $AssignedTasksView(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $AssignedTasksView;
  $location_0[stackIndex] = 'AssignedTasksView.java:' + '78' , $clinit_1043();
  this$static.dateFormat = $SimpleDateFormat(($location_0[stackIndex] = 'AssignedTasksView.java:' + '68' , new SimpleDateFormat));
  this$static.controller_0 = dynamicCast(($location_0[stackIndex] = 'AssignedTasksView.java:' + '80' , get_16(Lcom_mvc4g_client_Controller_2_classLit)), 166);
  dynamicCast(($location_0[stackIndex] = 'AssignedTasksView.java:' + '81' , get_16(Lorg_jboss_bpm_console_client_ApplicationContext_2_classLit)), 224);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $provideWidget_5(this$static, callback){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $provideWidget_5;
  this$static.panel = $MosaicPanel_0(($location_0[stackIndex] = 'AssignedTasksView.java:' + '86' , new MosaicPanel), $BorderLayout(new BorderLayout));
  $location_0[stackIndex] = 'AssignedTasksView.java:' + '88' , $initialize_3(this$static);
  $add_26(this$static.panel, this$static.taskList, ($location_0[stackIndex] = 'AssignedTasksView.java:' + '90' , $BorderLayoutData_1(($location_0[stackIndex] = 'AssignedTasksView.java:' + '90' , new BorderLayoutData), ($location_0[stackIndex] = 'BorderLayout.java:' + '199' , $clinit_795() , CENTER_1))));
  $add_26(this$static.panel, this$static.detailsView, $BorderLayoutData_5(($location_0[stackIndex] = 'AssignedTasksView.java:' + '91' , new BorderLayoutData), SOUTH_0, 10, 200));
  $location_0[stackIndex] = 'AssignedTasksView.java:' + '93' , $addView(this$static.controller_0, ID_26, this$static);
  $location_0[stackIndex] = 'AssignedTasksView.java:' + '95' , callback.onSuccess(this$static.panel);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_728(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_728;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_task_AssignedTasksView_2_classLit;
}

function setLoading_2(isLoading){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = setLoading_2;
  this.panel.element.style.display != 'none' && ($location_0[stackIndex] = 'AssignedTasksView.java:' + '369' , on(this.taskList, isLoading));
  $stackDepth_0 = stackIndex - 1;
}

_ = AssignedTasksView.prototype;
_.getClass$ = getClass_728;
_.setLoading = setLoading_2;
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader6_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader6');
onLoad_4();
