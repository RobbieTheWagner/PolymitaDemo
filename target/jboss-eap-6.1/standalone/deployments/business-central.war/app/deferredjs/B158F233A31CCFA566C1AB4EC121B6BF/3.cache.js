function getClass_145(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_145;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader3_2_classLit;
}

function onLoad_1(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onLoad_1;
  $location_0[stackIndex] = 'AsyncLoader3.java:' + '21' , loaded_2 = true;
  instance_4 = ($location_0[stackIndex] = 'AsyncLoader3.java:' + '5' , $clinit_268() , ($location_0[stackIndex] = 'AsyncLoader3.java:' + '22' , new AsyncLoader3));
  $location_0[stackIndex] = 'AsyncLoader3.java:' + '23' , $fragmentHasLoaded(($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '335' , $clinit_60() , BROWSER_LOADER), 3);
  !!$stats && ($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '231' , $stats(($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '238' , $createStatsEvent('runCallbacks3', 'begin', null, null))));
  $location_0[stackIndex] = 'AsyncLoader3.java:' + '25' , instance_4.runCallbacks();
  !!$stats && ($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '231' , $stats(($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '238' , $createStatsEvent('runCallbacks3', 'end', null, null))));
  $stackDepth_0 = stackIndex - 1;
}

function runCallbacks_4(){
  var $e0, e, handler, next, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = runCallbacks_4;
  while (callbacksHead_1) {
    $location_0[stackIndex] = 'AsyncLoader3.java:' + '55' , handler = sUncaughtExceptionHandler;
    $location_0[stackIndex] = 'AsyncLoader3.java:' + '56' , next = callbacksHead_1;
    $location_0[stackIndex] = 'AsyncLoader3.java:' + '57' , callbacksHead_1 = callbacksHead_1.next;
    !callbacksHead_1 && ($location_0[stackIndex] = 'AsyncLoader3.java:' + '59' , callbacksTail_1 = null);
    if (!handler) {
      $location_0[stackIndex] = 'AsyncLoader3.java:' + '62' , $onSuccess_1(next.callback);
    }
     else {
      try {
        $location_0[stackIndex] = 'AsyncLoader3.java:' + '65' , $onSuccess_1(next.callback);
      }
       catch ($e0) {
        $e0 = ($location_0[stackIndex] = 'AsyncLoader3.java:' + '66' , caught_0($e0));
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

function AsyncLoader3(){
}

_ = AsyncLoader3.prototype = new AsyncLoader3__Super;
_.getClass$ = getClass_145;
_.runCallbacks = runCallbacks_4;
_.typeId$ = 0;
var instance_13 = null;
function $onSuccess_1(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $onSuccess_1;
  !instance_13 && (instance_13 = $ServerStatusView(($location_0[stackIndex] = 'ServerStatusModule.java:' + '49' , new ServerStatusView)));
  $location_0[stackIndex] = 'ServerStatusModule.java:' + '51' , $provideWidget_0(instance_13, this$static.val$callback);
  $stackDepth_0 = stackIndex - 1;
}

function $clinit_916(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_916;
  $location_0[stackIndex] = 'ServerStatusView.java:' + '44' , $clinit_916 = nullMethod;
  $location_0[stackIndex] = 'ServerStatusView.java:' + '48' , ID_1 = Lorg_jboss_bpm_console_client_ServerStatusView_2_classLit.typeName;
  $stackDepth_0 = stackIndex - 1;
}

function $ServerStatusView(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ServerStatusView;
  $location_0[stackIndex] = 'ServerStatusView.java:' + '59' , $clinit_916();
  dynamicCast(($location_0[stackIndex] = 'ServerStatusView.java:' + '61' , get_16(Lorg_jboss_bpm_console_client_ApplicationContext_2_classLit)), 225);
  this$static.controller = dynamicCast(($location_0[stackIndex] = 'ServerStatusView.java:' + '62' , get_16(Lcom_mvc4g_client_Controller_2_classLit)), 167);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $provideWidget_0(this$static, callback){
  var console, layout1, layout2, server, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $provideWidget_0;
  this$static.layoutPanel = $MosaicPanel_0(($location_0[stackIndex] = 'ServerStatusView.java:' + '68' , new MosaicPanel), ($location_0[stackIndex] = 'ServerStatusView.java:' + '68' , $BoxLayout_1(new BoxLayout, ($location_0[stackIndex] = 'BoxLayout.java:' + '170' , $clinit_796() , VERTICAL))));
  console = $HeaderLabel(($location_0[stackIndex] = 'ServerStatusView.java:' + '71' , new HeaderLabel), 'Console Info');
  $add_26(this$static.layoutPanel, console, ($location_0[stackIndex] = 'ServerStatusView.java:' + '72' , $BoxLayoutData_4(($location_0[stackIndex] = 'ServerStatusView.java:' + '72' , new BoxLayoutData), ($location_0[stackIndex] = 'BoxLayoutData.java:' + '30' , $clinit_798() , HORIZONTAL_0))));
  layout1 = $MosaicPanel_0(($location_0[stackIndex] = 'ServerStatusView.java:' + '74' , new MosaicPanel), $GridLayout(new GridLayout, 2, 1));
  $add_25(layout1, $HTML_0(($location_0[stackIndex] = 'ServerStatusView.java:' + '75' , new HTML), 'Version:'));
  $add_25(layout1, $HTML_0(($location_0[stackIndex] = 'ServerStatusView.java:' + '76' , new HTML), '2.3.8.Final'));
  $add_26(this$static.layoutPanel, layout1, $BoxLayoutData_4(($location_0[stackIndex] = 'ServerStatusView.java:' + '78' , new BoxLayoutData), HORIZONTAL_0));
  server = $HeaderLabel(($location_0[stackIndex] = 'ServerStatusView.java:' + '81' , new HeaderLabel), 'Server Info');
  $add_26(this$static.layoutPanel, server, $BoxLayoutData_4(($location_0[stackIndex] = 'ServerStatusView.java:' + '82' , new BoxLayoutData), HORIZONTAL_0));
  layout2 = $MosaicPanel_0(($location_0[stackIndex] = 'ServerStatusView.java:' + '84' , new MosaicPanel), $GridLayout(new GridLayout, 2, 2));
  $add_25(layout2, $HTML_0(($location_0[stackIndex] = 'ServerStatusView.java:' + '85' , new HTML), 'Host:'));
  $add_25(layout2, $HTML_0(($location_0[stackIndex] = 'ServerStatusView.java:' + '86' , new HTML), $getConsoleServerUrl(dynamicCast(get_16(Lorg_jboss_bpm_console_client_ApplicationContext_2_classLit), 225).val$config)));
  this$static.pluginPanel = $MosaicPanel(($location_0[stackIndex] = 'ServerStatusView.java:' + '88' , new MosaicPanel));
  $add_25(layout2, $Label_0(($location_0[stackIndex] = 'ServerStatusView.java:' + '89' , new Label), 'Plugins:'));
  $location_0[stackIndex] = 'ServerStatusView.java:' + '90' , $add_25(layout2, this$static.pluginPanel);
  $add_26(this$static.layoutPanel, layout2, $BoxLayoutData_4(($location_0[stackIndex] = 'ServerStatusView.java:' + '92' , new BoxLayoutData), HORIZONTAL_0));
  $location_0[stackIndex] = 'ServerStatusView.java:' + '96' , $addView(this$static.controller, ID_1, this$static);
  $location_0[stackIndex] = 'ServerStatusView.java:' + '98' , $update_0(this$static, status_1);
  $location_0[stackIndex] = 'ServerStatusView.java:' + '100' , callback.onSuccess(this$static.layoutPanel);
  $stackDepth_0 = stackIndex - 1;
}

function $update_0(this$static, status_0){
  var g, img, p, row, type, td, td_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $update_0;
  $location_0[stackIndex] = 'ServerStatusView.java:' + '125' , this$static.pluginPanel.clear();
  g = $Grid_0(($location_0[stackIndex] = 'ServerStatusView.java:' + '127' , new Grid), status_0.plugins.size_0, 2);
  $location_0[stackIndex] = 'Style.java:' + '1449' , g.element.style['width'] = '100%';
  for ($location_0[stackIndex] = 'ServerStatusView.java:' + '130' , row = 0; row < status_0.plugins.size_0; $location_0[stackIndex] = 'ServerStatusView.java:' + '130' , ++row) {
    p = dynamicCast(($location_0[stackIndex] = 'ServerStatusView.java:' + '132' , $get_5(status_0.plugins, row)), 229);
    type = ($location_0[stackIndex] = 'ServerStatusView.java:' + '133' , $substring_0(p.type_0, ($location_0[stackIndex] = 'String.java:' + '521' , p.type_0.lastIndexOf('.')) + 1, p.type_0.length));
    $location_0[stackIndex] = 'HTMLTable.java:' + '1030' , $prepareCell(g, row, 0);
    $location_0[stackIndex] = 'HTMLTable.java:' + '1032' , td = ($location_0[stackIndex] = 'HTMLTable.java:' + '1379' , td_0 = ($location_0[stackIndex] = 'HTMLTable.java:' + '361' , g.cellFormatter.this$0.bodyElem.rows[row]).cells[0] , ($location_0[stackIndex] = 'HTMLTable.java:' + '1380' , $internalClearCell(g, td_0, type == null)) , td_0);
    type != null && ($location_0[stackIndex] = 'DOMImplMozilla.java:' + '115' , ($location_0[stackIndex] = 'Element.java:' + '621' , $clinit_81() , td).textContent = type || '' , undefined);
    $location_0[stackIndex] = 'ServerStatusView.java:' + '139' , img = p.available?$Image_1(($location_0[stackIndex] = 'ServerStatusView.java:' + '140' , new Image_0), 'images/icons/confirm_small.png'):$Image_1(($location_0[stackIndex] = 'ServerStatusView.java:' + '141' , new Image_0), 'images/icons/deny_small.png');
    $location_0[stackIndex] = 'ServerStatusView.java:' + '143' , $setWidget_2(g, row, 1, img);
  }
  $location_0[stackIndex] = 'ServerStatusView.java:' + '146' , $add_25(this$static.pluginPanel, g);
  $location_0[stackIndex] = 'ServerStatusView.java:' + '148' , $layout_3(this$static.pluginPanel);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_620(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_620;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_ServerStatusView_2_classLit;
}

function setController_1(controller){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = setController_1;
  $location_0[stackIndex] = 'ServerStatusView.java:' + '105' , this.controller = controller;
  $stackDepth_0 = stackIndex - 1;
}

_ = ServerStatusView.prototype;
_.getClass$ = getClass_620;
_.setController = setController_1;
var ID_1;
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader3_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader3'), Lorg_jboss_bpm_console_client_ServerStatusView_2_classLit = createForClass('org.jboss.bpm.console.client.', 'ServerStatusView');
onLoad_1();
