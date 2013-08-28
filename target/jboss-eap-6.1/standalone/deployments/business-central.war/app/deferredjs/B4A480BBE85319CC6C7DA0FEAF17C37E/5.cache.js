function getClass_148(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_148;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader5_2_classLit;
}

function onLoad_3(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onLoad_3;
  $location_0[stackIndex] = 'AsyncLoader5.java:' + '21' , loaded_4 = true;
  instance_6 = ($location_0[stackIndex] = 'AsyncLoader5.java:' + '5' , $clinit_272() , ($location_0[stackIndex] = 'AsyncLoader5.java:' + '22' , new AsyncLoader5));
  $location_0[stackIndex] = 'AsyncLoader5.java:' + '23' , $fragmentHasLoaded(($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '335' , $clinit_61() , BROWSER_LOADER), 5);
  !!$stats && ($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '231' , $stats(($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '238' , $createStatsEvent('runCallbacks5', 'begin', null, null))));
  $location_0[stackIndex] = 'AsyncLoader5.java:' + '25' , instance_6.runCallbacks();
  !!$stats && ($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '231' , $stats(($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '238' , $createStatsEvent('runCallbacks5', 'end', null, null))));
  $stackDepth_0 = stackIndex - 1;
}

function runCallbacks_8(){
  var $e0, e, handler, next, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = runCallbacks_8;
  while (callbacksHead_3) {
    $location_0[stackIndex] = 'AsyncLoader5.java:' + '55' , handler = sUncaughtExceptionHandler;
    $location_0[stackIndex] = 'AsyncLoader5.java:' + '56' , next = callbacksHead_3;
    $location_0[stackIndex] = 'AsyncLoader5.java:' + '57' , callbacksHead_3 = callbacksHead_3.next;
    !callbacksHead_3 && ($location_0[stackIndex] = 'AsyncLoader5.java:' + '59' , callbacksTail_3 = null);
    if (!handler) {
      $location_0[stackIndex] = 'AsyncLoader5.java:' + '62' , $onSuccess_3(next.callback);
    }
     else {
      try {
        $location_0[stackIndex] = 'AsyncLoader5.java:' + '65' , $onSuccess_3(next.callback);
      }
       catch ($e0) {
        $e0 = ($location_0[stackIndex] = 'AsyncLoader5.java:' + '66' , caught_0($e0));
        $stackDepth_0 = stackIndex;
        if (instanceOf($e0, 12)) {
          e = $e0;
          $location_0[stackIndex] = 'LogImplBase.java:' + '295' , $clinit_25();
          $location_0[stackIndex] = 'Log.java:' + '285' , $fatal(impl, 'Uncaught Exception:', e);
        }
         else 
          throw $e0;
      }
    }
  }
  $stackDepth_0 = stackIndex - 1;
}

function AsyncLoader5(){
}

_ = AsyncLoader5.prototype = new AsyncLoader5__Super;
_.getClass$ = getClass_148;
_.runCallbacks = runCallbacks_8;
_.typeId$ = 0;
function $Frame(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $Frame;
  $location_0[stackIndex] = 'UIObject.java:' + '799' , this$static.element = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , ($location_0[stackIndex] = 'Document.java:' + '408' , $clinit_82() , $doc).createElement('iframe'));
  $location_0[stackIndex] = 'Element.java:' + '688' , this$static.element['className'] = 'gwt-Frame';
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $BoxLayoutData_1(this$static, width, height){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $BoxLayoutData_1;
  $location_0[stackIndex] = 'LayoutData.java:' + '40' , this$static.decorate = false;
  $location_0[stackIndex] = 'LayoutData.java:' + '118' , $setPreferredWidth(this$static, width);
  $location_0[stackIndex] = 'LayoutData.java:' + '119' , $setPreferredHeight(this$static, height);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $GridLayoutData_0(this$static, horizontalAlignment, verticalAlignment){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $GridLayoutData_0;
  $location_0[stackIndex] = 'GridLayoutData.java:' + '54' , $GridLayoutData_2(this$static, 1, 1, horizontalAlignment, verticalAlignment);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $GridLayoutData_2(this$static, colSpan, rowSpan, horizontalAlignment, verticalAlignment){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $GridLayoutData_2;
  $location_0[stackIndex] = 'LayoutData.java:' + '40' , this$static.decorate = false;
  $location_0[stackIndex] = 'GridLayoutData.java:' + '153' , this$static.colspan = 1 > colSpan?1:colSpan;
  $location_0[stackIndex] = 'GridLayoutData.java:' + '165' , this$static.rowspan = 1 > rowSpan?1:rowSpan;
  $location_0[stackIndex] = 'GridLayoutData.java:' + '109' , this$static.horizontalAlignment = horizontalAlignment;
  $location_0[stackIndex] = 'GridLayoutData.java:' + '145' , this$static.verticalAlignment = verticalAlignment;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $getReportURL(templateName){
  var reportFileName, url, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $getReportURL;
  $location_0[stackIndex] = 'URLBuilder.java:' + '201' , reportFileName = ($location_0[stackIndex] = 'URL.java:' + '113' , throwIfNull('decodedURL', templateName) , ($location_0[stackIndex] = 'URL.java:' + '222' , encodeURI(templateName)));
  url = ($location_0[stackIndex] = 'URLBuilder.java:' + '202' , $getConsoleServerUrl(config_0)) + '/rs/report/render/' + reportFileName;
  $stackDepth_0 = stackIndex - 1;
  return url;
}

function parseReportConfig(json){
  var dataType, description, i, name_0, p, params, pmd, reportCfg, reportFile, reportRef, results, rootModel, title, type, x, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = parseReportConfig;
  results = $ArrayList(($location_0[stackIndex] = 'JSOParser.java:' + '154' , new ArrayList));
  $location_0[stackIndex] = 'JSOParser.java:' + '155' , rootModel = ($location_0[stackIndex] = 'JSOModel.java:' + '72' , eval('(' + json + ')'));
  for ($location_0[stackIndex] = 'JSOParser.java:' + '157' , i = 0; i < rootModel.length; $location_0[stackIndex] = 'JSOParser.java:' + '157' , ++i) {
    $location_0[stackIndex] = 'JSOParser.java:' + '160' , reportCfg = ($location_0[stackIndex] = 'JsArray.java:' + '49' , rootModel[i]);
    $location_0[stackIndex] = 'JSOParser.java:' + '161' , title = '' + ($location_0[stackIndex] = 'JSOModel.java:' + '96' , reportCfg['title']);
    $location_0[stackIndex] = 'JSOParser.java:' + '162' , description = ($location_0[stackIndex] = 'JSOModel.java:' + '100' , reportCfg['description'])?'' + reportCfg['description']:'';
    $location_0[stackIndex] = 'JSOParser.java:' + '163' , reportFile = '' + ($location_0[stackIndex] = 'JSOModel.java:' + '96' , reportCfg['reportFileName']);
    reportRef = $ReportReference(($location_0[stackIndex] = 'JSOParser.java:' + '165' , new ReportReference), reportFile);
    $location_0[stackIndex] = 'ReportReference.java:' + '43' , reportRef.title = title;
    $location_0[stackIndex] = 'ReportReference.java:' + '48' , reportRef.description = description;
    $location_0[stackIndex] = 'JSOParser.java:' + '170' , params = ($location_0[stackIndex] = 'JSOModel.java:' + '120' , reportCfg['parameterMetaData'])?reportCfg['parameterMetaData']:new Array;
    for ($location_0[stackIndex] = 'JSOParser.java:' + '171' , x = 0; x < params.length; $location_0[stackIndex] = 'JSOParser.java:' + '171' , ++x) {
      $location_0[stackIndex] = 'JSOParser.java:' + '173' , p = ($location_0[stackIndex] = 'JsArray.java:' + '49' , params[x]);
      $location_0[stackIndex] = 'JSOParser.java:' + '174' , name_0 = '' + ($location_0[stackIndex] = 'JSOModel.java:' + '96' , p['name']);
      $location_0[stackIndex] = 'JSOParser.java:' + '175' , type = '' + ($location_0[stackIndex] = 'JSOModel.java:' + '96' , p['type']);
      $location_0[stackIndex] = 'JSOParser.java:' + '176' , dataType = '' + ($location_0[stackIndex] = 'JSOModel.java:' + '96' , p['dataType']);
      pmd = ($location_0[stackIndex] = 'JSOParser.java:' + '178' , $ReportParameter(($location_0[stackIndex] = 'JSOParser.java:' + '178' , new ReportParameter), name_0, ($clinit_1084() , dynamicCast(($location_0[stackIndex] = 'ReportParameter.java:' + '29' , valueOf_0(enum$map_1, type)), 112))));
      $location_0[stackIndex] = 'ReportParameter.java:' + '82' , pmd.dataType = ($location_0[stackIndex] = 'JSOParser.java:' + '179' , $clinit_1083() , dynamicCast(($location_0[stackIndex] = 'ReportParameter.java:' + '30' , valueOf_0(enum$map_0, dataType)), 111));
      $location_0[stackIndex] = 'ReportParameter.java:' + '62' , pmd.helptext = ($location_0[stackIndex] = 'JSOModel.java:' + '100' , p['helptext'])?'' + p['helptext']:'';
      $location_0[stackIndex] = 'ReportParameter.java:' + '72' , pmd.promptText = ($location_0[stackIndex] = 'JSOModel.java:' + '100' , p['promptText'])?'' + p['promptText']:'';
      $location_0[stackIndex] = 'JSOParser.java:' + '185' , $add_12(reportRef.parameterMetaData, pmd);
    }
    setCheck(results.array, ($location_0[stackIndex] = 'ArrayList.java:' + '95' , results.size_0++), reportRef);
  }
  $stackDepth_0 = stackIndex - 1;
  return results;
}

function $RenderDispatchEvent(this$static, dispatchUrl){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $RenderDispatchEvent;
  $location_0[stackIndex] = 'RenderDispatchEvent.java:' + '36' , this$static.dispatchUrl = dispatchUrl;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_706(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_706;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_report_RenderDispatchEvent_2_classLit;
}

function RenderDispatchEvent(){
}

_ = RenderDispatchEvent.prototype = new Object_0;
_.getClass$ = getClass_706;
_.typeId$ = 468;
_.dispatchUrl = null;
_.parameters = 'None';
function $clinit_1010(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1010;
  $location_0[stackIndex] = 'RenderReportAction.java:' + '41' , $clinit_1010 = nullMethod;
  $location_0[stackIndex] = 'RenderReportAction.java:' + '44' , ID_20 = Lorg_jboss_bpm_console_client_report_RenderReportAction_2_classLit.typeName;
  $stackDepth_0 = stackIndex - 1;
}

function $RenderReportAction(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $RenderReportAction;
  $location_0[stackIndex] = 'RenderReportAction.java:' + '48' , $clinit_1010();
  dynamicCast(($location_0[stackIndex] = 'RenderReportAction.java:' + '50' , get_16(Lorg_jboss_bpm_console_client_ApplicationContext_2_classLit)), 224);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $handleError(controller, url, t){
  var out, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $handleError;
  $location_0[stackIndex] = 'RenderReportAction.java:' + '143' , out = "<ul><li>URL: '" + url + "'\n<li>Action: '" + ID_20 + "'\n<li>Exception: '" + ($location_0[stackIndex] = 'RenderReportAction.java:' + '147' , t.getClass$()) + "'<\/ul>\n\n" + ($location_0[stackIndex] = 'RenderReportAction.java:' + '149' , t.getMessage());
  $location_0[stackIndex] = 'ConsoleLog.java:' + '65' , $clinit_25();
  $location_0[stackIndex] = 'Log.java:' + '224' , $error(impl, out, t);
  $location_0[stackIndex] = 'RenderReportAction.java:' + '152' , $displayMessage(out, true);
  $location_0[stackIndex] = 'RenderReportAction.java:' + '154' , $handleEvent(controller, ($location_0[stackIndex] = 'LoadingStatusAction.java:' + '37' , $clinit_892() , OFF));
  $stackDepth_0 = stackIndex - 1;
}

function execute_36(controller, object){
  var $e0, builder, e, event_0, parameters, request, t, url, view, url_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = execute_36;
  event_0 = ($location_0[stackIndex] = 'RenderReportAction.java:' + '55' , dynamicCast(object, 245));
  $location_0[stackIndex] = 'RenderReportAction.java:' + '57' , url = event_0.dispatchUrl;
  builder = ($location_0[stackIndex] = 'RenderReportAction.java:' + '58' , $RequestBuilder(($location_0[stackIndex] = 'RenderReportAction.java:' + '58' , new RequestBuilder), ($location_0[stackIndex] = 'RequestBuilder.java:' + '70' , $clinit_209() , POST), url));
  $location_0[stackIndex] = 'Log.java:' + '101' , $clinit_25();
  $location_0[stackIndex] = 'Log.java:' + '150' , $debug(impl, POST + ': ' + url, null);
  view = ($location_0[stackIndex] = 'RenderReportAction.java:' + '61' , dynamicCast(dynamicCast(($location_0[stackIndex] = 'Controller.java:' + '67' , $get_7(controller.views, ($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '59' , $clinit_1014() , ID_21))), 167), 246));
  $location_0[stackIndex] = 'ReportLaunchPadView.java:' + '197' , url_0 = $moduleBase + 'blank.html';
  $location_0[stackIndex] = 'ReportLaunchPadView.java:' + '192' , $setFrameUrl(view.reportFrame, url_0);
  $location_0[stackIndex] = 'ReportLaunchPadView.java:' + '211' , on(view.reportFrame, true);
  try {
    $location_0[stackIndex] = 'RenderReportAction.java:' + '68' , $handleEvent(controller, ($location_0[stackIndex] = 'LoadingStatusAction.java:' + '36' , $clinit_892() , ON));
    $location_0[stackIndex] = 'RenderReportAction.java:' + '71' , parameters = event_0.parameters;
    request = ($location_0[stackIndex] = 'RenderReportAction.java:' + '72' , $sendRequest(builder, parameters, $RenderReportAction$1(($location_0[stackIndex] = 'RenderReportAction.java:' + '73' , new RenderReportAction$1), controller, url, view, event_0)));
    t = $RenderReportAction$2(($location_0[stackIndex] = 'RenderReportAction.java:' + '113' , new RenderReportAction$2), request, controller, url);
    $location_0[stackIndex] = 'RenderReportAction.java:' + '129' , $schedule(t, 20000);
  }
   catch ($e0) {
    $e0 = ($location_0[stackIndex] = 'RenderReportAction.java:' + '133' , caught_0($e0));
    $stackDepth_0 = stackIndex;
    if (instanceOf($e0, 12)) {
      e = $e0;
      $location_0[stackIndex] = 'RenderReportAction.java:' + '135' , $handleEvent(controller, ($location_0[stackIndex] = 'LoadingStatusAction.java:' + '37' , $clinit_892() , OFF));
      $location_0[stackIndex] = 'RenderReportAction.java:' + '136' , $handleError(controller, url, e);
      $location_0[stackIndex] = 'ReportLaunchPadView.java:' + '211' , on(view.reportFrame, false);
    }
     else 
      throw $e0;
  }
  $stackDepth_0 = stackIndex - 1;
}

function getClass_707(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_707;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_report_RenderReportAction_2_classLit;
}

function RenderReportAction(){
}

_ = RenderReportAction.prototype = new Object_0;
_.execute_2 = execute_36;
_.getClass$ = getClass_707;
_.typeId$ = 469;
var ID_20;
function $RenderReportAction$1(this$static, val$controller, val$url, val$view, val$event){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $RenderReportAction$1;
  $location_0[stackIndex] = 'RenderReportAction.java:' + '73' , this$static.val$controller = val$controller;
  this$static.val$url = val$url;
  this$static.val$view = val$view;
  this$static.val$event = val$event;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_708(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_708;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_report_RenderReportAction$1_2_classLit;
}

function onError_6(request, exception){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onError_6;
  $location_0[stackIndex] = 'RenderReportAction.java:' + '77' , $handleError(this.val$controller, this.val$url, exception);
  $location_0[stackIndex] = 'RenderReportAction.java:' + '78' , $handleEvent(this.val$controller, ($location_0[stackIndex] = 'LoadingStatusAction.java:' + '37' , $clinit_892() , OFF));
  $stackDepth_0 = stackIndex - 1;
}

function onResponseReceived_6(request, response){
  var msg, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onResponseReceived_6;
  try {
    if (($location_0[stackIndex] = 'String.java:' + '497' , response.val$xmlHttpRequest.responseText.indexOf('HTTP 401')) != -1) {
      $location_0[stackIndex] = 'Authentication.java:' + '285' , confirm_1('Session expired', 'Please login again', ($location_0[stackIndex] = 'Authentication.java:' + '286' , $Authentication$5(($location_0[stackIndex] = 'Authentication.java:' + '286' , new Authentication$5), dynamicCast(($location_0[stackIndex] = 'ErraiApplication.java:' + '129' , get_16(Lorg_jboss_bpm_console_client_Authentication_2_classLit)), 229))));
    }
     else if (200 == response.val$xmlHttpRequest.status) {
      $location_0[stackIndex] = 'ReportLaunchPadView.java:' + '192' , $setFrameUrl(this.val$view.reportFrame, this.val$event.dispatchUrl);
    }
     else {
      msg = ($location_0[stackIndex] = 'RenderReportAction.java:' + '95' , $equals_4(response.val$xmlHttpRequest.responseText, ''))?'Unknown error':response.val$xmlHttpRequest.responseText;
      $location_0[stackIndex] = 'RenderReportAction.java:' + '96' , $handleError(this.val$controller, this.val$url, $RequestException(($location_0[stackIndex] = 'RenderReportAction.java:' + '99' , new RequestException), 'HTTP ' + response.val$xmlHttpRequest.status + ': ' + msg));
    }
  }
   catch (e) {
    e = ($location_0[stackIndex] = 'RenderReportAction.java:' + '82' , caught_0(e));
    $stackDepth_0 = stackIndex;
    throw e;
  }
   finally {
    $location_0[stackIndex] = 'RenderReportAction.java:' + '105' , $handleEvent(this.val$controller, ($location_0[stackIndex] = 'LoadingStatusAction.java:' + '37' , $clinit_892() , OFF));
    $location_0[stackIndex] = 'ReportLaunchPadView.java:' + '211' , on(this.val$view.reportFrame, false);
  }
  $stackDepth_0 = stackIndex - 1;
}

function RenderReportAction$1(){
}

_ = RenderReportAction$1.prototype = new Object_0;
_.getClass$ = getClass_708;
_.onError = onError_6;
_.onResponseReceived = onResponseReceived_6;
_.typeId$ = 0;
_.val$controller = null;
_.val$event = null;
_.val$url = null;
_.val$view = null;
function $clinit_1012(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1012;
  $location_0[stackIndex] = 'RenderReportAction.java:' + '113' , $clinit_1012 = nullMethod;
  $clinit_44();
  $stackDepth_0 = stackIndex - 1;
}

function $RenderReportAction$2(this$static, val$request, val$controller, val$url){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $RenderReportAction$2;
  $location_0[stackIndex] = 'RenderReportAction.java:' + '113' , $clinit_1012();
  this$static.val$request = val$request;
  this$static.val$controller = val$controller;
  this$static.val$url = val$url;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_709(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_709;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_report_RenderReportAction$2_2_classLit;
}

function run_20(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = run_20;
  if ($location_0[stackIndex] = 'RenderReportAction.java:' + '117' , $isPending(this.val$request)) {
    $location_0[stackIndex] = 'RenderReportAction.java:' + '119' , $cancel_1(this.val$request);
    $location_0[stackIndex] = 'RenderReportAction.java:' + '120' , $handleError(this.val$controller, this.val$url, $IOException(($location_0[stackIndex] = 'RenderReportAction.java:' + '123' , new IOException), 'Request timeout'));
  }
  $stackDepth_0 = stackIndex - 1;
}

function RenderReportAction$2(){
}

_ = RenderReportAction$2.prototype = new Timer;
_.getClass$ = getClass_709;
_.run = run_20;
_.typeId$ = 470;
_.val$controller = null;
_.val$request = null;
_.val$url = null;
function $ReportFrame(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ReportFrame;
  $location_0[stackIndex] = 'ReportFrame.java:' + '42' , $MosaicPanel(this$static);
  $location_0[stackIndex] = 'LayoutPanel.java:' + '289' , setStyleAttribute_0(this$static.element, 'padding', '0px');
  this$static.frame = $Frame(($location_0[stackIndex] = 'ReportFrame.java:' + '46' , new Frame));
  $location_0[stackIndex] = 'Style.java:' + '1449' , this$static.frame.element.style['border'] = '1px solid #E8E8E8';
  this$static.frame.element.style['backgroundColor'] = '#ffffff';
  $location_0[stackIndex] = 'ReportFrame.java:' + '49' , $add_25(this$static, this$static.frame);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $setFrameUrl(this$static, url){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setFrameUrl;
  $location_0[stackIndex] = 'Element.java:' + '607' , this$static.frame.element.id = '' + toString_18(fromDouble(($location_0[stackIndex] = 'Date.java:' + '199' , $getTime0($Date(($location_0[stackIndex] = 'ReportFrame.java:' + '56' , new Date_1))))));
  $location_0[stackIndex] = 'FrameElement.java:' + '190' , this$static.frame.element.src = url;
  $stackDepth_0 = stackIndex - 1;
}

function getClass_710(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_710;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_report_ReportFrame_2_classLit;
}

function ReportFrame(){
}

_ = ReportFrame.prototype = new MosaicPanel;
_.getClass$ = getClass_710;
_.typeId$ = 471;
_.frame = null;
function $clinit_1014(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1014;
  $location_0[stackIndex] = 'ReportLaunchPadView.java:' + '57' , $clinit_1014 = nullMethod;
  $location_0[stackIndex] = 'ReportLaunchPadView.java:' + '59' , ID_21 = Lorg_jboss_bpm_console_client_report_ReportLaunchPadView_2_classLit.typeName;
  $stackDepth_0 = stackIndex - 1;
}

function $ReportLaunchPadView(this$static){
  var header, templatePanel, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ReportLaunchPadView;
  $location_0[stackIndex] = 'ReportLaunchPadView.java:' + '73' , $clinit_1014();
  $MosaicPanel_0(this$static, ($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '75' , $BoxLayout_1(($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '75' , new BoxLayout), ($location_0[stackIndex] = 'BoxLayout.java:' + '170' , $clinit_791() , VERTICAL))));
  this$static.forms = $HashMap(($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '71' , new HashMap));
  $location_0[stackIndex] = 'LayoutPanel.java:' + '289' , setStyleAttribute_0(this$static.element, 'padding', '5px');
  header = $CaptionLayoutPanel(($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '78' , new CaptionLayoutPanel), 'Report configuration');
  $location_0[stackIndex] = 'Element.java:' + '688' , header.element['className'] = 'bpm-detail-panel';
  $location_0[stackIndex] = 'CaptionLayoutPanel.java:' + '230' , $setLayout_0(header.body_0, $BoxLayout_1(($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '81' , new BoxLayout), HORIZONTAL));
  templatePanel = $MosaicPanel_0(($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '83' , new MosaicPanel), $BoxLayout_1(new BoxLayout, VERTICAL));
  this$static.description = $HTML(($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '84' , new HTML));
  this$static.dropBox = $ListBox_0(($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '86' , new ListBox), false);
  $location_0[stackIndex] = 'ListBox.java:' + '104' , $addDomHandler(this$static.dropBox, $ReportLaunchPadView$1(($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '87' , new ReportLaunchPadView$1), this$static), ($location_0[stackIndex] = 'ListBox.java:' + '104' , $clinit_125() , ($location_0[stackIndex] = 'ChangeEvent.java:' + '27' , $clinit_125()) , TYPE_0));
  $add_26(templatePanel, this$static.dropBox, ($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '96' , $BoxLayoutData_4(($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '96' , new BoxLayoutData), ($location_0[stackIndex] = 'BoxLayoutData.java:' + '30' , $clinit_793() , HORIZONTAL_0))));
  $add_26(templatePanel, this$static.description, $BoxLayoutData_4(($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '97' , new BoxLayoutData), BOTH));
  this$static.inputPanel = $MosaicPanel(($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '100' , new MosaicPanel));
  $location_0[stackIndex] = 'CaptionLayoutPanel.java:' + '91' , $add_26(header.body_0, templatePanel, $BoxLayoutData_1(($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '104' , new BoxLayoutData), '250 px', '100 px'));
  $location_0[stackIndex] = 'CaptionLayoutPanel.java:' + '91' , $add_26(header.body_0, this$static.inputPanel, $BoxLayoutData_4(($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '105' , new BoxLayoutData), BOTH));
  this$static.reportFrame = $ReportFrame(($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '109' , new ReportFrame));
  $add_26(this$static, header, $BoxLayoutData_4(($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '111' , new BoxLayoutData), HORIZONTAL_0));
  $add_26(this$static, this$static.reportFrame, $BoxLayoutData_4(($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '112' , new BoxLayoutData), BOTH));
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $getCurrentSelection(this$static){
  var r, r$iterator, template, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $getCurrentSelection;
  template = ($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '151' , $getItemText(this$static.dropBox, this$static.dropBox.element.selectedIndex));
  for ($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '152' , r$iterator = $AbstractList$IteratorImpl(($location_0[stackIndex] = 'AbstractList.java:' + '278' , new AbstractList$IteratorImpl), this$static.reportTemplates); r$iterator.i < ($location_0[stackIndex] = 'AbstractList.java:' + '38' , r$iterator.this$0.size_1());) {
    r = dynamicCast(($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '152' , $next_6(r$iterator)), 247);
    if ($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '154' , $equals_4(r.title, template)) {
      $stackDepth_0 = stackIndex - 1;
      return r;
    }
  }
  $stackDepth_0 = stackIndex - 1;
  return null;
}

function $selectForm(this$static, reportTitle){
  var current, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $selectForm;
  $location_0[stackIndex] = 'ReportLaunchPadView.java:' + '183' , this$static.inputPanel.clear();
  current = ($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '184' , $getCurrentSelection(this$static));
  $setInnerText_0(($location_0[stackIndex] = 'Element.java:' + '621' , $clinit_82() , this$static.description.element), current.description);
  $add_25(this$static.inputPanel, dynamicCast(($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '186' , $get_7(this$static.forms, reportTitle)), 2));
  $location_0[stackIndex] = 'ReportLaunchPadView.java:' + '187' , $layout_3(this$static);
  $stackDepth_0 = stackIndex - 1;
}

function $update_7(this$static, reports){
  var report, report$iterator, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $update_7;
  $location_0[stackIndex] = 'ReportLaunchPadView.java:' + '163' , this$static.reportTemplates = reports;
  $location_0[stackIndex] = 'AbstractHashMap.java:' + '210' , $clearImpl(this$static.forms);
  for ($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '166' , report$iterator = $AbstractList$IteratorImpl(($location_0[stackIndex] = 'AbstractList.java:' + '278' , new AbstractList$IteratorImpl), reports); report$iterator.i < ($location_0[stackIndex] = 'AbstractList.java:' + '38' , report$iterator.this$0.size_1());) {
    report = dynamicCast(($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '166' , $next_6(report$iterator)), 247);
    $location_0[stackIndex] = 'ReportLaunchPadView.java:' + '168' , $addItem(this$static.dropBox, report.title);
    $location_0[stackIndex] = 'ReportLaunchPadView.java:' + '170' , $put_0(this$static.forms, report.title, ($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '119' , $ReportParameterForm(($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '119' , new ReportParameterForm), report, $ReportLaunchPadView$2(($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '120' , new ReportLaunchPadView$2), this$static, report))));
  }
  $location_0[stackIndex] = 'SelectElement.java:' + '220' , this$static.dropBox.element.selectedIndex = 0;
  $selectForm(this$static, ($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '176' , $getItemText(this$static.dropBox, 0)));
  dynamicCast(($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '178' , get_16(Lorg_jboss_bpm_console_client_ApplicationContext_2_classLit)), 224);
  $stackDepth_0 = stackIndex - 1;
}

function fieldValues2PostParams(values){
  var entrySet, outerIter, entry, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = fieldValues2PostParams;
  $location_0[stackIndex] = 'ReportLaunchPadView.java:' + '214' , $clinit_1014();
  var key, keys, sb;
  sb = $StringBuffer(($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '216' , new StringBuffer));
  $location_0[stackIndex] = 'ReportLaunchPadView.java:' + '217' , keys = (outerIter = ($location_0[stackIndex] = 'AbstractMap.java:' + '107' , (entrySet = ($location_0[stackIndex] = 'AbstractMap.java:' + '98' , values.entrySet_0()) , $AbstractMap$1(($location_0[stackIndex] = 'AbstractMap.java:' + '99' , new AbstractMap$1), values, entrySet)).val$entrySet.iterator_0()) , $AbstractMap$1$1(($location_0[stackIndex] = 'AbstractMap.java:' + '108' , new AbstractMap$1$1), outerIter));
  while ($location_0[stackIndex] = 'AbstractMap.java:' + '110' , keys.val$outerIter.hasNext()) {
    key = ($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '220' , dynamicCast((entry = dynamicCast(($location_0[stackIndex] = 'AbstractMap.java:' + '114' , keys.val$outerIter.next_0()), 87) , ($location_0[stackIndex] = 'AbstractMap.java:' + '115' , entry.getKey())), 1));
    $append_5(($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '221' , $append_5(($location_0[stackIndex] = 'StringBufferImplAppend.java:' + '52' , sb.impl.string += key , sb), '=')), ($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '221' , dynamicCast(key == null?values.nullSlot:key != null?($location_0[stackIndex] = 'AbstractHashMap.java:' + '382' , values.stringMap[':' + key]):($location_0[stackIndex] = 'AbstractHashMap.java:' + '240' , $getHashValue(values, key, ~~($location_0[stackIndex] = 'String.java:' + '485' , getHashCode_0(key)))), 1)));
    $location_0[stackIndex] = 'StringBufferImplAppend.java:' + '52' , sb.impl.string += ';';
  }
  returnTemp = sb.impl.string;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getClass_711(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_711;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_report_ReportLaunchPadView_2_classLit;
}

function setController_7(controller){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = setController_7;
  $location_0[stackIndex] = 'ReportLaunchPadView.java:' + '231' , this.controller = controller;
  $stackDepth_0 = stackIndex - 1;
}

function setLoading_1(isLoading){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = setLoading_1;
  $location_0[stackIndex] = 'ReportLaunchPadView.java:' + '211' , on(this.reportFrame, isLoading);
  $stackDepth_0 = stackIndex - 1;
}

function ReportLaunchPadView(){
}

_ = ReportLaunchPadView.prototype = new MosaicPanel;
_.getClass$ = getClass_711;
_.setController = setController_7;
_.setLoading = setLoading_1;
_.typeId$ = 472;
_.controller = null;
_.description = null;
_.dropBox = null;
_.inputPanel = null;
_.reportFrame = null;
_.reportTemplates = null;
var ID_21;
function $ReportLaunchPadView$1(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ReportLaunchPadView$1;
  $location_0[stackIndex] = 'ReportLaunchPadView.java:' + '87' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_712(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_712;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_report_ReportLaunchPadView$1_2_classLit;
}

function onChange_1(changeEvent){
  var reportTitle, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onChange_1;
  reportTitle = ($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '91' , $getItemText(this.this$0.dropBox, this.this$0.dropBox.element.selectedIndex));
  $location_0[stackIndex] = 'ReportLaunchPadView.java:' + '92' , $selectForm(this.this$0, reportTitle);
  $stackDepth_0 = stackIndex - 1;
}

function ReportLaunchPadView$1(){
}

_ = ReportLaunchPadView$1.prototype = new Object_0;
_.getClass$ = getClass_712;
_.onChange = onChange_1;
_.typeId$ = 473;
_.this$0 = null;
function $ReportLaunchPadView$2(this$static, this$0, val$reportRef){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ReportLaunchPadView$2;
  $location_0[stackIndex] = 'ReportLaunchPadView.java:' + '120' , this$static.this$0 = this$0;
  this$static.val$reportRef = val$reportRef;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $onSumbit(this$static, paramValues){
  var eventPayload, key, key$iterator, s, url, valid, entrySet, outerIter, entry, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $onSumbit;
  $location_0[stackIndex] = 'ReportLaunchPadView.java:' + '124' , valid = true;
  for ($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '125' , key$iterator = (outerIter = ($location_0[stackIndex] = 'AbstractMap.java:' + '107' , (entrySet = ($location_0[stackIndex] = 'AbstractMap.java:' + '98' , paramValues.entrySet_0()) , $AbstractMap$1(($location_0[stackIndex] = 'AbstractMap.java:' + '99' , new AbstractMap$1), paramValues, entrySet)).val$entrySet.iterator_0()) , $AbstractMap$1$1(($location_0[stackIndex] = 'AbstractMap.java:' + '108' , new AbstractMap$1$1), outerIter)); $location_0[stackIndex] = 'AbstractMap.java:' + '110' , key$iterator.val$outerIter.hasNext();) {
    key = ($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '125' , dynamicCast((entry = dynamicCast(($location_0[stackIndex] = 'AbstractMap.java:' + '114' , key$iterator.val$outerIter.next_0()), 87) , ($location_0[stackIndex] = 'AbstractMap.java:' + '115' , entry.getKey())), 1));
    s = ($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '127' , dynamicCast(key == null?paramValues.nullSlot:key != null?($location_0[stackIndex] = 'AbstractHashMap.java:' + '382' , paramValues.stringMap[':' + key]):($location_0[stackIndex] = 'AbstractHashMap.java:' + '240' , $getHashValue(paramValues, key, ~~($location_0[stackIndex] = 'String.java:' + '485' , getHashCode_0(key)))), 1));
    (s == null || ($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '128' , $equals_4(s, ''))) && ($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '129' , valid = false);
  }
  if (valid) {
    url = $getReportURL(($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '134' , getInstance_2() , this$static.val$reportRef.reportFileName));
    eventPayload = $RenderDispatchEvent(($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '135' , new RenderDispatchEvent), url);
    $location_0[stackIndex] = 'RenderDispatchEvent.java:' + '51' , eventPayload.parameters = ($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '136' , fieldValues2PostParams(paramValues));
    $handleEvent(this$static.this$0.controller, ($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '137' , $Event(($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '137' , new Event_0), ($location_0[stackIndex] = 'RenderReportAction.java:' + '44' , $clinit_1010() , ID_20), eventPayload)));
  }
   else {
    $location_0[stackIndex] = 'ReportLaunchPadView.java:' + '141' , $clinit_679();
    $location_0[stackIndex] = 'MessageBox.java:' + '111' , alert_2(($location_0[stackIndex] = 'MessageBox.java:' + '60' , $clinit_688() , ALERT), 'Report Parameters', 'Please provide the required input parameters');
  }
  $stackDepth_0 = stackIndex - 1;
}

function getClass_713(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_713;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_report_ReportLaunchPadView$2_2_classLit;
}

function ReportLaunchPadView$2(){
}

_ = ReportLaunchPadView$2.prototype = new Object_0;
_.getClass$ = getClass_713;
_.typeId$ = 0;
_.this$0 = null;
_.val$reportRef = null;
function $onSuccess_3(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $onSuccess_3;
  !this$static.this$0.instance && (this$static.this$0.instance = ($location_0[stackIndex] = 'ReportView.java:' + '42' , $clinit_1024() , ($location_0[stackIndex] = 'ReportModule.java:' + '49' , new ReportView)));
  $location_0[stackIndex] = 'ReportModule.java:' + '51' , $provideWidget_4(this$static.this$0.instance, this$static.val$callback);
  $stackDepth_0 = stackIndex - 1;
}

function $ReportParameterForm(this$static, reportReference, callback){
  var p, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ReportParameterForm;
  $location_0[stackIndex] = 'ReportParameterForm.java:' + '50' , $MosaicPanel(this$static);
  this$static.fields = $ArrayList(($location_0[stackIndex] = 'ReportParameterForm.java:' + '47' , new ArrayList));
  $location_0[stackIndex] = 'ReportParameterForm.java:' + '53' , $add_25(this$static, (p = $MosaicPanel(($location_0[stackIndex] = 'ReportParameterForm.java:' + '58' , new MosaicPanel)) , ($location_0[stackIndex] = 'LayoutPanel.java:' + '289' , setStyleAttribute_0(p.element, 'padding', '5px')) , $add_25(p, ($location_0[stackIndex] = 'ReportParameterForm.java:' + '60' , $createForm_0(this$static, reportReference, callback))) , p));
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $createForm_0(this$static, reportRef, callback){
  var createBtn, field, form, hasParameters, helpText, numRows, prefValue, preferenceValues, promptText, reportParam, reportParam$iterator, textBox, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $createForm_0;
  $location_0[stackIndex] = 'ReportParameterForm.java:' + '66' , hasParameters = reportRef.parameterMetaData.size_0 > 0;
  $location_0[stackIndex] = 'ReportParameterForm.java:' + '67' , numRows = hasParameters?reportRef.parameterMetaData.size_0 + 1:2;
  form = $MosaicPanel_0(($location_0[stackIndex] = 'ReportParameterForm.java:' + '70' , new MosaicPanel), $GridLayout(new GridLayout, 2, numRows));
  createBtn = ($location_0[stackIndex] = 'ReportParameterForm.java:' + '72' , $Button_2(($location_0[stackIndex] = 'ReportParameterForm.java:' + '72' , new Button), 'Create Report', $ReportParameterForm$1(($location_0[stackIndex] = 'ReportParameterForm.java:' + '73' , new ReportParameterForm$1), this$static, reportRef, callback)));
  preferenceValues = ($location_0[stackIndex] = 'ReportParameterForm.java:' + '92' , $readPrefs(reportRef));
  for ($location_0[stackIndex] = 'ReportParameterForm.java:' + '94' , reportParam$iterator = ($location_0[stackIndex] = 'AbstractList.java:' + '291' , $listIterator(reportRef.parameterMetaData, 0)); reportParam$iterator.currentNode != reportParam$iterator.this$0.header;) {
    reportParam = dynamicCast(($location_0[stackIndex] = 'ReportParameterForm.java:' + '94' , $next_9(reportParam$iterator)), 248);
    $location_0[stackIndex] = 'ReportParameterForm.java:' + '96' , promptText = reportParam.promptText != null?reportParam.promptText:reportParam.name_0;
    $location_0[stackIndex] = 'ReportParameterForm.java:' + '97' , helpText = reportParam.helptext != null?reportParam.helptext:'';
    textBox = $TextBox(($location_0[stackIndex] = 'ReportParameterForm.java:' + '99' , new TextBox));
    prefValue = dynamicCast(($location_0[stackIndex] = 'ReportParameterForm.java:' + '100' , $get_7(preferenceValues, reportParam.name_0)), 1);
    prefValue != null && ($location_0[stackIndex] = 'Element.java:' + '688' , textBox.element['value'] = prefValue != null?prefValue:'' , undefined);
    field = $ReportParameterForm$2(($location_0[stackIndex] = 'ReportParameterForm.java:' + '105' , new ReportParameterForm$2), textBox, reportParam);
    $location_0[stackIndex] = 'ReportParameterForm.java:' + '119' , $add_7(this$static.fields, field);
    $add_25(form, $HTML_0(($location_0[stackIndex] = 'ReportParameterForm.java:' + '121' , new HTML), '<b>' + promptText + '<\/b><br/>' + helpText));
    $location_0[stackIndex] = 'LayoutPanel.java:' + '391' , $insert_0(form, textBox, form.children_0.size_0);
  }
  !hasParameters && ($location_0[stackIndex] = 'ReportParameterForm.java:' + '128' , $add_26(form, $HTML_0(($location_0[stackIndex] = 'ReportParameterForm.java:' + '128' , new HTML), "This report doesn't require any paramters."), ($location_0[stackIndex] = 'ReportParameterForm.java:' + '129' , $GridLayoutData_2(($location_0[stackIndex] = 'ReportParameterForm.java:' + '129' , new GridLayoutData), 2, 1, ($location_0[stackIndex] = 'HasHorizontalAlignment.java:' + '62' , $clinit_381() , ALIGN_CENTER), ($location_0[stackIndex] = 'HasVerticalAlignment.java:' + '73' , $clinit_386() , ALIGN_TOP)))));
  $add_25(form, $HTML_0(($location_0[stackIndex] = 'ReportParameterForm.java:' + '133' , new HTML), ''));
  $add_26(form, createBtn, ($location_0[stackIndex] = 'ReportParameterForm.java:' + '134' , $GridLayoutData_0(($location_0[stackIndex] = 'ReportParameterForm.java:' + '134' , new GridLayoutData), ($location_0[stackIndex] = 'HasHorizontalAlignment.java:' + '74' , $clinit_381() , ALIGN_RIGHT), ($location_0[stackIndex] = 'HasVerticalAlignment.java:' + '61' , $clinit_386() , ALIGN_BOTTOM))));
  $stackDepth_0 = stackIndex - 1;
  return form;
}

function $readPrefs(reportRef){
  var i, name_0, prefKey, prefValue, tokens, tuple, values, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $readPrefs;
  values = $HashMap(($location_0[stackIndex] = 'ReportParameterForm.java:' + '159' , new HashMap));
  name_0 = ($location_0[stackIndex] = 'ReportParameterForm.java:' + '160' , $replaceAll(reportRef.title, ' ', '_'));
  $location_0[stackIndex] = 'ReportParameterForm.java:' + '161' , prefKey = 'bpm-form-' + name_0;
  if (($location_0[stackIndex] = 'CookiePreferences.java:' + '39' , getCookie(prefKey)) != null) {
    $location_0[stackIndex] = 'ReportParameterForm.java:' + '165' , prefValue = getCookie(prefKey);
    $location_0[stackIndex] = 'ReportParameterForm.java:' + '166' , tokens = ($location_0[stackIndex] = 'String.java:' + '631' , $split(prefValue, ',', 0));
    for ($location_0[stackIndex] = 'ReportParameterForm.java:' + '167' , i = 0; i < tokens.length; $location_0[stackIndex] = 'ReportParameterForm.java:' + '167' , ++i) {
      $location_0[stackIndex] = 'ReportParameterForm.java:' + '169' , tuple = ($location_0[stackIndex] = 'String.java:' + '631' , $split(($location_0[stackIndex] = 'ReportParameterForm.java:' + '169' , tokens[i]), '=', 0));
      $put_0(values, ($location_0[stackIndex] = 'ReportParameterForm.java:' + '170' , tuple[0]), tuple[1]);
    }
  }
  $stackDepth_0 = stackIndex - 1;
  return values;
}

function $writePrefs(values, reportRef){
  var i, key, key$iterator, name_0, prefKey, sb, entrySet, outerIter, entry, entrySet_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $writePrefs;
  name_0 = ($location_0[stackIndex] = 'ReportParameterForm.java:' + '141' , $replaceAll(reportRef.title, ' ', '_'));
  $location_0[stackIndex] = 'ReportParameterForm.java:' + '142' , prefKey = 'bpm-form-' + name_0;
  sb = $StringBuffer(($location_0[stackIndex] = 'ReportParameterForm.java:' + '143' , new StringBuffer));
  $location_0[stackIndex] = 'ReportParameterForm.java:' + '144' , i = 1;
  for ($location_0[stackIndex] = 'ReportParameterForm.java:' + '145' , key$iterator = (outerIter = ($location_0[stackIndex] = 'AbstractMap.java:' + '107' , (entrySet = ($location_0[stackIndex] = 'AbstractMap.java:' + '98' , values.entrySet_0()) , $AbstractMap$1(($location_0[stackIndex] = 'AbstractMap.java:' + '99' , new AbstractMap$1), values, entrySet)).val$entrySet.iterator_0()) , $AbstractMap$1$1(($location_0[stackIndex] = 'AbstractMap.java:' + '108' , new AbstractMap$1$1), outerIter)); $location_0[stackIndex] = 'AbstractMap.java:' + '110' , key$iterator.val$outerIter.hasNext();) {
    key = ($location_0[stackIndex] = 'ReportParameterForm.java:' + '145' , dynamicCast((entry = dynamicCast(($location_0[stackIndex] = 'AbstractMap.java:' + '114' , key$iterator.val$outerIter.next_0()), 87) , ($location_0[stackIndex] = 'AbstractMap.java:' + '115' , entry.getKey())), 1));
    $append_5(($location_0[stackIndex] = 'ReportParameterForm.java:' + '147' , $append_5(($location_0[stackIndex] = 'StringBufferImplAppend.java:' + '52' , sb.impl.string += key , sb), '=')), ($location_0[stackIndex] = 'ReportParameterForm.java:' + '147' , dynamicCast(key == null?values.nullSlot:key != null?($location_0[stackIndex] = 'AbstractHashMap.java:' + '382' , values.stringMap[':' + key]):($location_0[stackIndex] = 'AbstractHashMap.java:' + '240' , $getHashValue(values, key, ~~($location_0[stackIndex] = 'String.java:' + '485' , getHashCode_0(key)))), 1)));
    i < ($location_0[stackIndex] = 'AbstractMap.java:' + '126' , (entrySet_0 = ($location_0[stackIndex] = 'AbstractMap.java:' + '98' , values.entrySet_0()) , $AbstractMap$1(($location_0[stackIndex] = 'AbstractMap.java:' + '99' , new AbstractMap$1), values, entrySet_0)).val$entrySet.size_1()) && ($location_0[stackIndex] = 'StringBufferImplAppend.java:' + '52' , sb.impl.string += ',' , undefined);
    $location_0[stackIndex] = 'ReportParameterForm.java:' + '150' , ++i;
  }
  $location_0[stackIndex] = 'ReportParameterForm.java:' + '154' , $set_4(prefKey, sb.impl.string);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_716(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_716;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_report_ReportParameterForm_2_classLit;
}

function ReportParameterForm(){
}

_ = ReportParameterForm.prototype = new MosaicPanel;
_.getClass$ = getClass_716;
_.typeId$ = 475;
function $ReportParameterForm$1(this$static, this$0, val$reportRef, val$callback){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ReportParameterForm$1;
  $location_0[stackIndex] = 'ReportParameterForm.java:' + '73' , this$static.this$0 = this$0;
  this$static.val$reportRef = val$reportRef;
  this$static.val$callback = val$callback;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_717(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_717;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_report_ReportParameterForm$1_2_classLit;
}

function onClick_26(clickEvent){
  var field, field$iterator, values, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClick_26;
  values = $HashMap(($location_0[stackIndex] = 'ReportParameterForm.java:' + '77' , new HashMap));
  for ($location_0[stackIndex] = 'ReportParameterForm.java:' + '78' , field$iterator = $AbstractList$IteratorImpl(($location_0[stackIndex] = 'AbstractList.java:' + '278' , new AbstractList$IteratorImpl), this.this$0.fields); field$iterator.i < ($location_0[stackIndex] = 'AbstractList.java:' + '38' , field$iterator.this$0.size_1());) {
    field = dynamicCast(($location_0[stackIndex] = 'ReportParameterForm.java:' + '78' , $next_6(field$iterator)), 249);
    $put_0(values, field.id_0, ($location_0[stackIndex] = 'ReportParameterForm.java:' + '80' , field.getValue_0()));
  }
  values.size_0 != 0 && ($location_0[stackIndex] = 'ReportParameterForm.java:' + '85' , $writePrefs(values, this.val$reportRef));
  $location_0[stackIndex] = 'ReportParameterForm.java:' + '88' , $onSumbit(this.val$callback, values);
  $stackDepth_0 = stackIndex - 1;
}

function ReportParameterForm$1(){
}

_ = ReportParameterForm$1.prototype = new Object_0;
_.getClass$ = getClass_717;
_.onClick = onClick_26;
_.typeId$ = 476;
_.this$0 = null;
_.val$callback = null;
_.val$reportRef = null;
function getClass_718(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_718;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_report_ReportParameterForm$InputField_2_classLit;
}

function getValue_4(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getValue_4;
  throw $IllegalArgumentException_0(($location_0[stackIndex] = 'ReportParameterForm.java:' + '184' , new IllegalArgumentException), 'Override this method');
}

function ReportParameterForm$InputField(){
}

_ = ReportParameterForm$InputField.prototype = new Object_0;
_.getClass$ = getClass_718;
_.getValue_0 = getValue_4;
_.typeId$ = 477;
_.id_0 = null;
function $ReportParameterForm$2(this$static, val$textBox, val$reportParam){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ReportParameterForm$2;
  $location_0[stackIndex] = 'ReportParameterForm.java:' + '105' , this$static.val$textBox = val$textBox;
  this$static.val$reportParam = val$reportParam;
  $location_0[stackIndex] = 'ReportParameterForm.java:' + '114' , this$static.id_0 = this$static.val$reportParam.name_0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_719(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_719;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_report_ReportParameterForm$2_2_classLit;
}

function getValue_5(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getValue_5;
  returnTemp = ($location_0[stackIndex] = 'DOM.java:' + '760' , $getPropertyString(this.val$textBox.element, 'value'));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function ReportParameterForm$2(){
}

_ = ReportParameterForm$2.prototype = new ReportParameterForm$InputField;
_.getClass$ = getClass_719;
_.getValue_0 = getValue_5;
_.typeId$ = 478;
_.val$reportParam = null;
_.val$textBox = null;
function $clinit_1024(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1024;
  $location_0[stackIndex] = 'ReportView.java:' + '42' , $clinit_1024 = nullMethod;
  $location_0[stackIndex] = 'ReportView.java:' + '44' , ID_22 = Lorg_jboss_bpm_console_client_report_ReportView_2_classLit.typeName;
  $stackDepth_0 = stackIndex - 1;
}

function $initialize_2(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $initialize_2;
  if (!this$static.isInitialized) {
    this$static.coverpanel = $ReportLaunchPadView(($location_0[stackIndex] = 'ReportView.java:' + '89' , new ReportLaunchPadView));
    $location_0[stackIndex] = 'ReportView.java:' + '90' , $add_25(this$static.panel, this$static.coverpanel);
    $location_0[stackIndex] = 'ReportView.java:' + '93' , $addView(this$static.controller, ($location_0[stackIndex] = 'ReportLaunchPadView.java:' + '59' , $clinit_1014() , ID_21), this$static.coverpanel);
    $location_0[stackIndex] = 'Controller.java:' + '106' , $put_0(this$static.controller.actions, ($location_0[stackIndex] = 'UpdateSearchDefinitionsAction.java:' + '43' , $clinit_1027() , ID_24), $UpdateSearchDefinitionsAction(($location_0[stackIndex] = 'ReportView.java:' + '95' , new UpdateSearchDefinitionsAction)));
    $location_0[stackIndex] = 'Controller.java:' + '106' , $put_0(this$static.controller.actions, ($location_0[stackIndex] = 'RenderReportAction.java:' + '44' , $clinit_1010() , ID_20), $RenderReportAction(($location_0[stackIndex] = 'ReportView.java:' + '96' , new RenderReportAction)));
    $location_0[stackIndex] = 'ReportView.java:' + '98' , this$static.isInitialized = true;
  }
  $stackDepth_0 = stackIndex - 1;
}

function $provideWidget_4(this$static, callback){
  var t, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $provideWidget_4;
  this$static.panel = $MosaicPanel_0(($location_0[stackIndex] = 'ReportView.java:' + '54' , new MosaicPanel), $FillLayout(new FillLayout));
  $location_0[stackIndex] = 'LayoutPanel.java:' + '289' , setStyleAttribute_0(this$static.panel.element, 'padding', '0px');
  this$static.controller = dynamicCast(($location_0[stackIndex] = 'ReportView.java:' + '56' , get_16(Lcom_mvc4g_client_Controller_2_classLit)), 166);
  $location_0[stackIndex] = 'ReportView.java:' + '58' , $initialize_2(this$static);
  $location_0[stackIndex] = 'ReportView.java:' + '60' , $addView(this$static.controller, ID_22, this$static);
  $location_0[stackIndex] = 'Controller.java:' + '106' , $put_0(this$static.controller.actions, ($location_0[stackIndex] = 'UpdateReportConfigAction.java:' + '48' , $clinit_1026() , ID_23), $UpdateReportConfigAction(($location_0[stackIndex] = 'ReportView.java:' + '61' , new UpdateReportConfigAction)));
  t = $ReportView$1(($location_0[stackIndex] = 'ReportView.java:' + '65' , new ReportView$1), this$static);
  $location_0[stackIndex] = 'ReportView.java:' + '74' , $schedule(t, 500);
  $location_0[stackIndex] = 'ReportView.java:' + '76' , callback.onSuccess(this$static.panel);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_720(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_720;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_report_ReportView_2_classLit;
}

function setController_8(controller){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = setController_8;
  $location_0[stackIndex] = 'ReportView.java:' + '104' , this.controller = controller;
  $stackDepth_0 = stackIndex - 1;
}

_ = ReportView.prototype;
_.getClass$ = getClass_720;
_.setController = setController_8;
var ID_22;
function $clinit_1025(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1025;
  $location_0[stackIndex] = 'ReportView.java:' + '65' , $clinit_1025 = nullMethod;
  $clinit_44();
  $stackDepth_0 = stackIndex - 1;
}

function $ReportView$1(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ReportView$1;
  $location_0[stackIndex] = 'ReportView.java:' + '65' , $clinit_1025();
  this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_721(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_721;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_report_ReportView$1_2_classLit;
}

function run_21(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = run_21;
  $handleEvent(this.this$0.controller, ($location_0[stackIndex] = 'ReportView.java:' + '70' , $Event(($location_0[stackIndex] = 'ReportView.java:' + '70' , new Event_0), ($location_0[stackIndex] = 'UpdateReportConfigAction.java:' + '48' , $clinit_1026() , ID_23), null)));
  $stackDepth_0 = stackIndex - 1;
}

function ReportView$1(){
}

_ = ReportView$1.prototype = new Timer;
_.getClass$ = getClass_721;
_.run = run_21;
_.typeId$ = 480;
_.this$0 = null;
function $clinit_1026(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1026;
  $location_0[stackIndex] = 'UpdateReportConfigAction.java:' + '45' , $clinit_1026 = nullMethod;
  $location_0[stackIndex] = 'UpdateReportConfigAction.java:' + '48' , ID_23 = Lorg_jboss_bpm_console_client_report_UpdateReportConfigAction_2_classLit.typeName;
  $stackDepth_0 = stackIndex - 1;
}

function $UpdateReportConfigAction(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $UpdateReportConfigAction;
  $location_0[stackIndex] = 'UpdateReportConfigAction.java:' + '51' , $clinit_1026();
  dynamicCast(($location_0[stackIndex] = 'AbstractRESTAction.java:' + '44' , get_16(Lorg_jboss_bpm_console_client_ApplicationContext_2_classLit)), 224);
  this$static.appContext = dynamicCast(($location_0[stackIndex] = 'UpdateReportConfigAction.java:' + '53' , get_16(Lorg_jboss_bpm_console_client_ApplicationContext_2_classLit)), 224);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_722(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_722;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_report_UpdateReportConfigAction_2_classLit;
}

function getId_11(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getId_11;
  $stackDepth_0 = stackIndex - 1;
  return ID_23;
}

function getRequestMethod_11(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getRequestMethod_11;
  returnTemp = ($location_0[stackIndex] = 'RequestBuilder.java:' + '60' , $clinit_209() , GET);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getUrl_13(event_0){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getUrl_13;
  returnTemp = ($location_0[stackIndex] = 'UpdateReportConfigAction.java:' + '63' , $getConsoleServerUrl(this.appContext.val$config)) + '/rs/report/config';
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function handleError_3(url, t){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = handleError_3;
  $location_0[stackIndex] = 'ConsoleLog.java:' + '41' , $clinit_25();
  $location_0[stackIndex] = 'Log.java:' + '651' , $warn(impl, 'Reporting Engine does not seem to be running. Please make sure it is running before creating reports. Consult the jBPM Installer chapter in the documentation to learn how to set up the Reporting Engine.', null);
  $location_0[stackIndex] = 'UpdateReportConfigAction.java:' + '87' , $displayMessage('Reporting Engine does not seem to be running. Please make sure it is running before creating reports. Consult the jBPM Installer chapter in the documentation to learn how to set up the Reporting Engine.', false);
  $stackDepth_0 = stackIndex - 1;
}

function handleSuccessfulResponse_11(controller, event_0, response){
  var json, reports, view, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = handleSuccessfulResponse_11;
  $location_0[stackIndex] = 'UpdateReportConfigAction.java:' + '74' , json = response.val$xmlHttpRequest.responseText;
  reports = ($location_0[stackIndex] = 'UpdateReportConfigAction.java:' + '75' , parseReportConfig(json));
  view = ($location_0[stackIndex] = 'UpdateReportConfigAction.java:' + '76' , dynamicCast(dynamicCast(($location_0[stackIndex] = 'Controller.java:' + '67' , $get_7(controller.views, ($location_0[stackIndex] = 'ReportView.java:' + '44' , $clinit_1024() , ID_22))), 167), 250));
  $location_0[stackIndex] = 'ReportView.java:' + '110' , $update_7(view.coverpanel, reports);
  $stackDepth_0 = stackIndex - 1;
}

function UpdateReportConfigAction(){
}

_ = UpdateReportConfigAction.prototype = new AbstractRESTAction;
_.getClass$ = getClass_722;
_.getId = getId_11;
_.getRequestMethod = getRequestMethod_11;
_.getUrl_0 = getUrl_13;
_.handleError = handleError_3;
_.handleSuccessfulResponse = handleSuccessfulResponse_11;
_.typeId$ = 481;
_.appContext = null;
var ID_23;
function $clinit_1027(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1027;
  $location_0[stackIndex] = 'UpdateSearchDefinitionsAction.java:' + '41' , $clinit_1027 = nullMethod;
  $location_0[stackIndex] = 'UpdateSearchDefinitionsAction.java:' + '43' , ID_24 = Lorg_jboss_bpm_console_client_search_UpdateSearchDefinitionsAction_2_classLit.typeName;
  $stackDepth_0 = stackIndex - 1;
}

function $UpdateSearchDefinitionsAction(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $UpdateSearchDefinitionsAction;
  $location_0[stackIndex] = 'UpdateSearchDefinitionsAction.java:' + '41' , $clinit_1027();
  dynamicCast(($location_0[stackIndex] = 'AbstractRESTAction.java:' + '44' , get_16(Lorg_jboss_bpm_console_client_ApplicationContext_2_classLit)), 224);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_723(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_723;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_search_UpdateSearchDefinitionsAction_2_classLit;
}

function getId_12(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getId_12;
  $stackDepth_0 = stackIndex - 1;
  return ID_24;
}

function getRequestMethod_12(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getRequestMethod_12;
  returnTemp = ($location_0[stackIndex] = 'RequestBuilder.java:' + '60' , $clinit_209() , GET);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getUrl_14(event_0){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getUrl_14;
  returnTemp = ($location_0[stackIndex] = 'UpdateSearchDefinitionsAction.java:' + '52' , getInstance_2() , ($location_0[stackIndex] = 'URLBuilder.java:' + '61' , $getConsoleServerUrl(config_0)) + '/rs/process/definitions');
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function handleSuccessfulResponse_12(controller, event_0, response){
  var definitions, target, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = handleSuccessfulResponse_12;
  target = ($location_0[stackIndex] = 'UpdateSearchDefinitionsAction.java:' + '62' , dynamicCast(event_0, 1));
  definitions = ($location_0[stackIndex] = 'UpdateSearchDefinitionsAction.java:' + '64' , parseProcessDefinitions(response.val$xmlHttpRequest.responseText));
  $location_0[stackIndex] = 'UpdateSearchDefinitionsAction.java:' + '65' , throwClassCastExceptionUnlessNull(dynamicCast(($location_0[stackIndex] = 'Controller.java:' + '67' , $get_7(controller.views, target)), 167));
  $location_0[stackIndex] = 'UpdateSearchDefinitionsAction.java:' + '66' , null.nullMethod();
  $location_0[stackIndex] = 'Log.java:' + '354' , $clinit_25();
  $location_0[stackIndex] = 'Log.java:' + '403' , $info(impl, 'Loaded ' + definitions.size_0 + ' process definitions', null);
  $stackDepth_0 = stackIndex - 1;
}

function UpdateSearchDefinitionsAction(){
}

_ = UpdateSearchDefinitionsAction.prototype = new AbstractRESTAction;
_.getClass$ = getClass_723;
_.getId = getId_12;
_.getRequestMethod = getRequestMethod_12;
_.getUrl_0 = getUrl_14;
_.handleSuccessfulResponse = handleSuccessfulResponse_12;
_.typeId$ = 482;
var ID_24;
function $ReportParameter(this$static, name_0, type){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ReportParameter;
  $location_0[stackIndex] = 'ReportParameter.java:' + '37' , this$static.dataType = ($location_0[stackIndex] = 'ReportParameter.java:' + '30' , $clinit_1083() , STRING);
  $location_0[stackIndex] = 'ReportParameter.java:' + '41' , this$static.name_0 = name_0;
  $location_0[stackIndex] = 'ReportParameter.java:' + '42' , this$static.type_0 = type;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function equals_37(o){
  var that, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = equals_37;
  if (this === (o == null?null:o)) {
    $stackDepth_0 = stackIndex - 1;
    return true;
  }
  if (o == null || Lorg_jboss_bpm_report_model_ReportParameter_2_classLit != (o.typeMarker$ == nullMethod || o.typeId$ == 2?($location_0[stackIndex] = 'JavaScriptObject.java:' + '28' , o.getClass$()):Lcom_google_gwt_core_client_JavaScriptObject_2_classLit)) {
    $stackDepth_0 = stackIndex - 1;
    return false;
  }
  that = ($location_0[stackIndex] = 'ReportParameter.java:' + '91' , dynamicCast(o, 248));
  if (this.dataType != that.dataType) {
    $stackDepth_0 = stackIndex - 1;
    return false;
  }
  if (this.name_0 != null?!($location_0[stackIndex] = 'ReportParameter.java:' + '94' , $equals_4(this.name_0, that.name_0)):that.name_0 != null) {
    $stackDepth_0 = stackIndex - 1;
    return false;
  }
  if (this.type_0 != that.type_0) {
    $stackDepth_0 = stackIndex - 1;
    return false;
  }
  $stackDepth_0 = stackIndex - 1;
  return true;
}

function getClass_774(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_774;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_report_model_ReportParameter_2_classLit;
}

function hashCode_38(){
  var result, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = hashCode_38;
  $location_0[stackIndex] = 'ReportParameter.java:' + '103' , result = this.name_0 != null?($location_0[stackIndex] = 'String.java:' + '485' , getHashCode_0(this.name_0)):0;
  $location_0[stackIndex] = 'ReportParameter.java:' + '104' , result = 31 * result + (this.type_0?($location_0[stackIndex] = 'Object.java:' + '67' , getHashCode(this.type_0)):0);
  $location_0[stackIndex] = 'ReportParameter.java:' + '105' , result = 31 * result + (this.dataType?($location_0[stackIndex] = 'Object.java:' + '67' , getHashCode(this.dataType)):0);
  $stackDepth_0 = stackIndex - 1;
  return result;
}

function ReportParameter(){
}

_ = ReportParameter.prototype = new Object_0;
_.equals$ = equals_37;
_.getClass$ = getClass_774;
_.hashCode$ = hashCode_38;
_.typeId$ = 520;
_.helptext = null;
_.name_0 = null;
_.promptText = null;
_.type_0 = null;
function $clinit_1083(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1083;
  $location_0[stackIndex] = 'ReportParameter.java:' + '30' , $clinit_1083 = nullMethod;
  $location_0[stackIndex] = 'ReportParameter.java:' + '30' , STRING = $ReportParameter$DataType(($location_0[stackIndex] = 'ReportParameter.java:' + '1' , new ReportParameter$DataType), 'STRING', 0);
  $location_0[stackIndex] = 'ReportParameter.java:' + '30' , NUMBER = $ReportParameter$DataType(($location_0[stackIndex] = 'ReportParameter.java:' + '1' , new ReportParameter$DataType), 'NUMBER', 1);
  $location_0[stackIndex] = 'ReportParameter.java:' + '30' , DATETIME = $ReportParameter$DataType(($location_0[stackIndex] = 'ReportParameter.java:' + '1' , new ReportParameter$DataType), 'DATETIME', 2);
  $location_0[stackIndex] = 'ReportParameter.java:' + '30' , BOOLEAN = $ReportParameter$DataType(($location_0[stackIndex] = 'ReportParameter.java:' + '1' , new ReportParameter$DataType), 'BOOLEAN', 3);
  $location_0[stackIndex] = 'ReportParameter.java:' + '30' , ANY = $ReportParameter$DataType(($location_0[stackIndex] = 'ReportParameter.java:' + '1' , new ReportParameter$DataType), 'ANY', 4);
  enum$map_0 = {_STRING:STRING, _NUMBER:NUMBER, _DATETIME:DATETIME, _BOOLEAN:BOOLEAN, _ANY:ANY};
  $stackDepth_0 = stackIndex - 1;
}

function $ReportParameter$DataType(this$static, enum$name, enum$ordinal){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ReportParameter$DataType;
  $location_0[stackIndex] = 'ReportParameter.java:' + '30' , $clinit_1083();
  $location_0[stackIndex] = 'Enum.java:' + '76' , this$static.name_0 = enum$name;
  $location_0[stackIndex] = 'Enum.java:' + '77' , this$static.ordinal = enum$ordinal;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_775(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_775;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_report_model_ReportParameter$DataType_2_classLit;
}

function values_27(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = values_27;
  $location_0[stackIndex] = 'ReportParameter.java:' + '30' , $clinit_1083();
  returnTemp = initValues(_3Lorg_jboss_bpm_report_model_ReportParameter$DataType_2_classLit, 711, 111, [STRING, NUMBER, DATETIME, BOOLEAN, ANY]);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function ReportParameter$DataType(){
}

_ = ReportParameter$DataType.prototype = new Enum;
_.getClass$ = getClass_775;
_.typeId$ = 521;
var ANY, BOOLEAN, DATETIME, NUMBER, STRING, enum$map_0 = null;
function $clinit_1084(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1084;
  $location_0[stackIndex] = 'ReportParameter.java:' + '29' , $clinit_1084 = nullMethod;
  $location_0[stackIndex] = 'ReportParameter.java:' + '29' , LISTBOX = $ReportParameter$Type(($location_0[stackIndex] = 'ReportParameter.java:' + '1' , new ReportParameter$Type), 'LISTBOX', 0);
  $location_0[stackIndex] = 'ReportParameter.java:' + '29' , TEXTBOX = $ReportParameter$Type(($location_0[stackIndex] = 'ReportParameter.java:' + '1' , new ReportParameter$Type), 'TEXTBOX', 1);
  $location_0[stackIndex] = 'ReportParameter.java:' + '29' , CHECKBOX_0 = $ReportParameter$Type(($location_0[stackIndex] = 'ReportParameter.java:' + '1' , new ReportParameter$Type), 'CHECKBOX', 2);
  $location_0[stackIndex] = 'ReportParameter.java:' + '29' , RADIO_BUTTON = $ReportParameter$Type(($location_0[stackIndex] = 'ReportParameter.java:' + '1' , new ReportParameter$Type), 'RADIO_BUTTON', 3);
  enum$map_1 = {_LISTBOX:LISTBOX, _TEXTBOX:TEXTBOX, _CHECKBOX:CHECKBOX_0, _RADIO_BUTTON:RADIO_BUTTON};
  $stackDepth_0 = stackIndex - 1;
}

function $ReportParameter$Type(this$static, enum$name, enum$ordinal){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ReportParameter$Type;
  $location_0[stackIndex] = 'ReportParameter.java:' + '29' , $clinit_1084();
  $location_0[stackIndex] = 'Enum.java:' + '76' , this$static.name_0 = enum$name;
  $location_0[stackIndex] = 'Enum.java:' + '77' , this$static.ordinal = enum$ordinal;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_776(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_776;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_report_model_ReportParameter$Type_2_classLit;
}

function values_28(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = values_28;
  $location_0[stackIndex] = 'ReportParameter.java:' + '29' , $clinit_1084();
  returnTemp = initValues(_3Lorg_jboss_bpm_report_model_ReportParameter$Type_2_classLit, 712, 112, [LISTBOX, TEXTBOX, CHECKBOX_0, RADIO_BUTTON]);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function ReportParameter$Type(){
}

_ = ReportParameter$Type.prototype = new Enum;
_.getClass$ = getClass_776;
_.typeId$ = 522;
var CHECKBOX_0, LISTBOX, RADIO_BUTTON, TEXTBOX, enum$map_1 = null;
function $ReportReference(this$static, reportFileName){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ReportReference;
  this$static.parameterMetaData = $LinkedList(($location_0[stackIndex] = 'ReportReference.java:' + '34' , new LinkedList));
  $location_0[stackIndex] = 'ReportReference.java:' + '38' , this$static.reportFileName = reportFileName;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function equals_38(o){
  var that, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = equals_38;
  if (this === (o == null?null:o)) {
    $stackDepth_0 = stackIndex - 1;
    return true;
  }
  if (o == null || Lorg_jboss_bpm_report_model_ReportReference_2_classLit != (o.typeMarker$ == nullMethod || o.typeId$ == 2?($location_0[stackIndex] = 'JavaScriptObject.java:' + '28' , o.getClass$()):Lcom_google_gwt_core_client_JavaScriptObject_2_classLit)) {
    $stackDepth_0 = stackIndex - 1;
    return false;
  }
  that = ($location_0[stackIndex] = 'ReportReference.java:' + '91' , dynamicCast(o, 247));
  if (this.parameterMetaData?!($location_0[stackIndex] = 'ReportReference.java:' + '93' , $equals_3(this.parameterMetaData, that.parameterMetaData)):!!that.parameterMetaData) {
    $stackDepth_0 = stackIndex - 1;
    return false;
  }
  if (this.reportFileName != null?!($location_0[stackIndex] = 'ReportReference.java:' + '95' , $equals_4(this.reportFileName, that.reportFileName)):that.reportFileName != null) {
    $stackDepth_0 = stackIndex - 1;
    return false;
  }
  if (this.title != null?!($location_0[stackIndex] = 'ReportReference.java:' + '97' , $equals_4(this.title, that.title)):that.title != null) {
    $stackDepth_0 = stackIndex - 1;
    return false;
  }
  $stackDepth_0 = stackIndex - 1;
  return true;
}

function getClass_777(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_777;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_report_model_ReportReference_2_classLit;
}

function hashCode_39(){
  var result, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = hashCode_39;
  $location_0[stackIndex] = 'ReportReference.java:' + '105' , result = this.title != null?($location_0[stackIndex] = 'String.java:' + '485' , getHashCode_0(this.title)):0;
  $location_0[stackIndex] = 'ReportReference.java:' + '106' , result = 31 * result + (this.reportFileName != null?($location_0[stackIndex] = 'String.java:' + '485' , getHashCode_0(this.reportFileName)):0);
  result = 31 * result + (this.parameterMetaData?($location_0[stackIndex] = 'ReportReference.java:' + '107' , $hashCode_2(this.parameterMetaData)):0);
  $stackDepth_0 = stackIndex - 1;
  return result;
}

function ReportReference(){
}

_ = ReportReference.prototype = new Object_0;
_.equals$ = equals_38;
_.getClass$ = getClass_777;
_.hashCode$ = hashCode_39;
_.typeId$ = 523;
_.description = null;
_.reportFileName = null;
_.title = null;
var Lcom_google_gwt_lang_asyncloaders_AsyncLoader5_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader5'), Lorg_jboss_bpm_console_client_report_RenderDispatchEvent_2_classLit = createForClass('org.jboss.bpm.console.client.report.', 'RenderDispatchEvent'), Lorg_jboss_bpm_console_client_report_RenderReportAction_2_classLit = createForClass('org.jboss.bpm.console.client.report.', 'RenderReportAction'), Lorg_jboss_bpm_console_client_report_RenderReportAction$1_2_classLit = createForClass('org.jboss.bpm.console.client.report.', 'RenderReportAction$1'), Lorg_jboss_bpm_console_client_report_RenderReportAction$2_2_classLit = createForClass('org.jboss.bpm.console.client.report.', 'RenderReportAction$2'), Lorg_jboss_bpm_console_client_report_ReportFrame_2_classLit = createForClass('org.jboss.bpm.console.client.report.', 'ReportFrame'), Lorg_jboss_bpm_console_client_report_ReportLaunchPadView_2_classLit = createForClass('org.jboss.bpm.console.client.report.', 'ReportLaunchPadView'), Lorg_jboss_bpm_console_client_report_ReportLaunchPadView$1_2_classLit = createForClass('org.jboss.bpm.console.client.report.', 'ReportLaunchPadView$1'), Lorg_jboss_bpm_console_client_report_ReportLaunchPadView$2_2_classLit = createForClass('org.jboss.bpm.console.client.report.', 'ReportLaunchPadView$2'), Lorg_jboss_bpm_console_client_report_ReportParameterForm_2_classLit = createForClass('org.jboss.bpm.console.client.report.', 'ReportParameterForm'), Lorg_jboss_bpm_console_client_report_ReportParameterForm$InputField_2_classLit = createForClass('org.jboss.bpm.console.client.report.', 'ReportParameterForm$InputField'), Lorg_jboss_bpm_console_client_report_ReportParameterForm$1_2_classLit = createForClass('org.jboss.bpm.console.client.report.', 'ReportParameterForm$1'), Lorg_jboss_bpm_console_client_report_ReportParameterForm$2_2_classLit = createForClass('org.jboss.bpm.console.client.report.', 'ReportParameterForm$2'), Lorg_jboss_bpm_console_client_report_ReportView_2_classLit = createForClass('org.jboss.bpm.console.client.report.', 'ReportView'), Lorg_jboss_bpm_console_client_report_ReportView$1_2_classLit = createForClass('org.jboss.bpm.console.client.report.', 'ReportView$1'), Lorg_jboss_bpm_console_client_report_UpdateReportConfigAction_2_classLit = createForClass('org.jboss.bpm.console.client.report.', 'UpdateReportConfigAction'), Lorg_jboss_bpm_console_client_search_UpdateSearchDefinitionsAction_2_classLit = createForClass('org.jboss.bpm.console.client.search.', 'UpdateSearchDefinitionsAction'), Lorg_jboss_bpm_report_model_ReportParameter_2_classLit = createForClass('org.jboss.bpm.report.model.', 'ReportParameter'), Lorg_jboss_bpm_report_model_ReportParameter$Type_2_classLit = createForEnum('org.jboss.bpm.report.model.', 'ReportParameter$Type', values_28), _3Lorg_jboss_bpm_report_model_ReportParameter$Type_2_classLit = createForArray('[Lorg.jboss.bpm.report.model.', 'ReportParameter$Type;', Lorg_jboss_bpm_report_model_ReportParameter$Type_2_classLit), Lorg_jboss_bpm_report_model_ReportParameter$DataType_2_classLit = createForEnum('org.jboss.bpm.report.model.', 'ReportParameter$DataType', values_27), _3Lorg_jboss_bpm_report_model_ReportParameter$DataType_2_classLit = createForArray('[Lorg.jboss.bpm.report.model.', 'ReportParameter$DataType;', Lorg_jboss_bpm_report_model_ReportParameter$DataType_2_classLit), Lorg_jboss_bpm_report_model_ReportReference_2_classLit = createForClass('org.jboss.bpm.report.model.', 'ReportReference');
onLoad_3();
