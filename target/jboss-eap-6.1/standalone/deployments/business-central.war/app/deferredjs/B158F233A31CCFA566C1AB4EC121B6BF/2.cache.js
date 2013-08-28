function getClass_141(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_141;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader2_2_classLit;
}

function onLoad_0(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onLoad_0;
  $location_0[stackIndex] = 'AsyncLoader2.java:' + '21' , loaded_1 = true;
  instance_3 = ($location_0[stackIndex] = 'AsyncLoader2.java:' + '5' , $clinit_264() , ($location_0[stackIndex] = 'AsyncLoader2.java:' + '22' , new AsyncLoader2));
  $location_0[stackIndex] = 'AsyncLoader2.java:' + '23' , $fragmentHasLoaded(($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '335' , $clinit_60() , BROWSER_LOADER), 2);
  !!$stats && ($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '231' , $stats(($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '238' , $createStatsEvent('runCallbacks2', 'begin', null, null))));
  $location_0[stackIndex] = 'AsyncLoader2.java:' + '25' , instance_3.runCallbacks();
  !!$stats && ($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '231' , $stats(($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '238' , $createStatsEvent('runCallbacks2', 'end', null, null))));
  $stackDepth_0 = stackIndex - 1;
}

function runCallbacks_2(){
  var $e0, e, handler, next, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = runCallbacks_2;
  while (callbacksHead_0) {
    $location_0[stackIndex] = 'AsyncLoader2.java:' + '55' , handler = sUncaughtExceptionHandler;
    $location_0[stackIndex] = 'AsyncLoader2.java:' + '56' , next = callbacksHead_0;
    $location_0[stackIndex] = 'AsyncLoader2.java:' + '57' , callbacksHead_0 = callbacksHead_0.next;
    !callbacksHead_0 && ($location_0[stackIndex] = 'AsyncLoader2.java:' + '59' , callbacksTail_0 = null);
    if (!handler) {
      !instance_12 && (instance_12 = ($location_0[stackIndex] = 'PreferencesModule.java:' + '49' , new PreferencesView));
      $location_0[stackIndex] = 'PreferencesModule.java:' + '51' , $provideWidget(instance_12, next.callback.val$callback);
    }
     else {
      try {
        !instance_12 && (instance_12 = ($location_0[stackIndex] = 'PreferencesModule.java:' + '49' , new PreferencesView));
        $location_0[stackIndex] = 'PreferencesModule.java:' + '51' , $provideWidget(instance_12, next.callback.val$callback);
      }
       catch ($e0) {
        $e0 = ($location_0[stackIndex] = 'AsyncLoader2.java:' + '66' , caught_0($e0));
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

function AsyncLoader2(){
}

_ = AsyncLoader2.prototype = new AsyncLoader2__Super;
_.getClass$ = getClass_141;
_.runCallbacks = runCallbacks_2;
_.typeId$ = 0;
function $ListBox(this$static){
  var select, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ListBox;
  $location_0[stackIndex] = 'ListBox.java:' + '77' , $clinit_406();
  $location_0[stackIndex] = 'ListBox.java:' + '88' , $FocusWidget(this$static, ($location_0[stackIndex] = 'DOMImpl.java:' + '65' , select = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , ($location_0[stackIndex] = 'Document.java:' + '921' , $clinit_81() , $doc).createElement('select')) , select));
  $location_0[stackIndex] = 'Element.java:' + '688' , this$static.element['className'] = 'gwt-ListBox';
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $setItemSelected(this$static, index, selected){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setItemSelected;
  $location_0[stackIndex] = 'ListBox.java:' + '296' , $checkIndex(this$static, index);
  $location_0[stackIndex] = 'OptionElement.java:' + '146' , ($location_0[stackIndex] = 'SelectElement.java:' + '112' , $clinit_81() , this$static.element).options[index].selected = selected;
  $stackDepth_0 = stackIndex - 1;
}

var instance_12 = null;
function $provideWidget(this$static, callback){
  var layout, multiBox, prefEditor, toolsets, ts, ts$iterator, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $provideWidget;
  this$static.panel = $MosaicPanel_0(($location_0[stackIndex] = 'PreferencesView.java:' + '65' , new MosaicPanel), ($location_0[stackIndex] = 'PreferencesView.java:' + '65' , $BoxLayout_1(new BoxLayout, ($location_0[stackIndex] = 'BoxLayout.java:' + '170' , $clinit_796() , VERTICAL))));
  dynamicCast(($location_0[stackIndex] = 'PreferencesView.java:' + '67' , get_16(Lorg_jboss_bpm_console_client_ApplicationContext_2_classLit)), 225);
  $add_26(this$static.panel, $HeaderLabel(($location_0[stackIndex] = 'PreferencesView.java:' + '68' , new HeaderLabel), 'User Preferences'), ($location_0[stackIndex] = 'PreferencesView.java:' + '68' , $BoxLayoutData_4(new BoxLayoutData, ($location_0[stackIndex] = 'BoxLayoutData.java:' + '30' , $clinit_798() , HORIZONTAL_0))));
  layout = $MosaicPanel_0(($location_0[stackIndex] = 'PreferencesView.java:' + '70' , new MosaicPanel), $GridLayout(new GridLayout, 2, 1));
  $location_0[stackIndex] = 'PreferencesView.java:' + '71' , $add_25(layout, $HTML_0(($location_0[stackIndex] = 'PreferencesView.java:' + '72' , new HTML), '<b>Default Tool<\/b><br>Select the tool that should be loaded upon login.'));
  $location_0[stackIndex] = 'PreferencesView.java:' + '76' , toolsets = ($location_0[stackIndex] = 'PreferencesView.java:' + '77' , $clinit_1228() , ($location_0[stackIndex] = 'Workspace.java:' + '61' , $clinit_1228()) , toolSets_0);
  multiBox = $ListBox(($location_0[stackIndex] = 'PreferencesView.java:' + '78' , new ListBox));
  $location_0[stackIndex] = 'SelectElement.java:' + '229' , multiBox.element.size = 5;
  $location_0[stackIndex] = 'LayoutPanel.java:' + '391' , $insert_0(layout, multiBox, layout.children.size_0);
  $location_0[stackIndex] = 'PreferencesView.java:' + '84' , prefEditor = ($location_0[stackIndex] = 'CookiePreferences.java:' + '39' , getCookie('workspace.default.tool'));
  for ($location_0[stackIndex] = 'PreferencesView.java:' + '85' , ts$iterator = $AbstractList$IteratorImpl(($location_0[stackIndex] = 'AbstractList.java:' + '278' , new AbstractList$IteratorImpl), toolsets); ts$iterator.i < ($location_0[stackIndex] = 'AbstractList.java:' + '38' , ts$iterator.this$0.size_1());) {
    ts = dynamicCast(($location_0[stackIndex] = 'PreferencesView.java:' + '85' , $next_6(ts$iterator)), 228);
    $addItem(multiBox, ($location_0[stackIndex] = 'PreferencesView.java:' + '87' , ts.getToolSetName()));
    $equals_4(($location_0[stackIndex] = 'PreferencesView.java:' + '88' , ts.getToolSetName()), prefEditor) && ($location_0[stackIndex] = 'PreferencesView.java:' + '89' , $setItemSelected(multiBox, ($location_0[stackIndex] = 'SelectElement.java:' + '112' , $clinit_81() , multiBox.element).options.length - 1, true));
  }
  $location_0[stackIndex] = 'FocusWidget.java:' + '91' , $addDomHandler(multiBox, $PreferencesView$1(($location_0[stackIndex] = 'PreferencesView.java:' + '93' , new PreferencesView$1), multiBox, toolsets), ($location_0[stackIndex] = 'FocusWidget.java:' + '91' , $clinit_131() , ($location_0[stackIndex] = 'ClickEvent.java:' + '27' , $clinit_131()) , TYPE_1));
  $add_26(this$static.panel, layout, $BoxLayoutData_4(($location_0[stackIndex] = 'PreferencesView.java:' + '109' , new BoxLayoutData), HORIZONTAL_0));
  $location_0[stackIndex] = 'PreferencesView.java:' + '111' , callback.onSuccess(this$static.panel);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_616(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_616;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_PreferencesView_2_classLit;
}

function setController_0(controller){
}

_ = PreferencesView.prototype;
_.getClass$ = getClass_616;
_.setController = setController_0;
function $PreferencesView$1(this$static, val$multiBox, val$toolsets){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $PreferencesView$1;
  $location_0[stackIndex] = 'PreferencesView.java:' + '93' , this$static.val$multiBox = val$multiBox;
  this$static.val$toolsets = val$toolsets;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_617(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_617;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_PreferencesView$1_2_classLit;
}

function onClick_12(clickEvent){
  var title, ts, ts$iterator, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClick_12;
  title = ($location_0[stackIndex] = 'PreferencesView.java:' + '97' , $getItemText(this.val$multiBox, this.val$multiBox.element.selectedIndex));
  for ($location_0[stackIndex] = 'PreferencesView.java:' + '98' , ts$iterator = $AbstractList$IteratorImpl(($location_0[stackIndex] = 'AbstractList.java:' + '278' , new AbstractList$IteratorImpl), this.val$toolsets); ts$iterator.i < ($location_0[stackIndex] = 'AbstractList.java:' + '38' , ts$iterator.this$0.size_1());) {
    ts = dynamicCast(($location_0[stackIndex] = 'PreferencesView.java:' + '98' , $next_6(ts$iterator)), 228);
    $equals_4(($location_0[stackIndex] = 'PreferencesView.java:' + '100' , ts.getToolSetName()), title) && $set_4('workspace.default.tool', ($location_0[stackIndex] = 'PreferencesView.java:' + '102' , ts.getToolSetName()));
  }
  $stackDepth_0 = stackIndex - 1;
}

function PreferencesView$1(){
}

_ = PreferencesView$1.prototype = new Object_0;
_.getClass$ = getClass_617;
_.onClick = onClick_12;
_.typeId$ = 402;
_.val$multiBox = null;
_.val$toolsets = null;
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader2_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader2'), Lorg_jboss_bpm_console_client_PreferencesView_2_classLit = createForClass('org.jboss.bpm.console.client.', 'PreferencesView'), Lorg_jboss_bpm_console_client_PreferencesView$1_2_classLit = createForClass('org.jboss.bpm.console.client.', 'PreferencesView$1');
onLoad_0();
