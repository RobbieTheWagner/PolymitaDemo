function getClass_149(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_149;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_lang_asyncloaders_AsyncLoader4_2_classLit;
}

function onLoad_2(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onLoad_2;
  $location_0[stackIndex] = 'AsyncLoader4.java:' + '21' , loaded_3 = true;
  instance_5 = ($location_0[stackIndex] = 'AsyncLoader4.java:' + '5' , $clinit_272() , ($location_0[stackIndex] = 'AsyncLoader4.java:' + '22' , new AsyncLoader4));
  $location_0[stackIndex] = 'AsyncLoader4.java:' + '23' , $fragmentHasLoaded(($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '335' , $clinit_60() , BROWSER_LOADER), 4);
  !!$stats && ($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '231' , $stats(($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '238' , $createStatsEvent('runCallbacks4', 'begin', null, null))));
  $location_0[stackIndex] = 'AsyncLoader4.java:' + '25' , instance_5.runCallbacks();
  !!$stats && ($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '231' , $stats(($location_0[stackIndex] = 'AsyncFragmentLoader.java:' + '238' , $createStatsEvent('runCallbacks4', 'end', null, null))));
  $stackDepth_0 = stackIndex - 1;
}

function runCallbacks_6(){
  var $e0, e, handler, next, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = runCallbacks_6;
  while (callbacksHead_2) {
    $location_0[stackIndex] = 'AsyncLoader4.java:' + '55' , handler = sUncaughtExceptionHandler;
    $location_0[stackIndex] = 'AsyncLoader4.java:' + '56' , next = callbacksHead_2;
    $location_0[stackIndex] = 'AsyncLoader4.java:' + '57' , callbacksHead_2 = callbacksHead_2.next;
    !callbacksHead_2 && ($location_0[stackIndex] = 'AsyncLoader4.java:' + '59' , callbacksTail_2 = null);
    if (!handler) {
      !instance_15 && (instance_15 = ($location_0[stackIndex] = 'ProcessModule.java:' + '56' , new MergedProcessView));
      $location_0[stackIndex] = 'ProcessModule.java:' + '58' , $provideWidget_3(instance_15, next.callback.val$callback);
    }
     else {
      try {
        !instance_15 && (instance_15 = ($location_0[stackIndex] = 'ProcessModule.java:' + '56' , new MergedProcessView));
        $location_0[stackIndex] = 'ProcessModule.java:' + '58' , $provideWidget_3(instance_15, next.callback.val$callback);
      }
       catch ($e0) {
        $e0 = ($location_0[stackIndex] = 'AsyncLoader4.java:' + '66' , caught_0($e0));
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

function AsyncLoader4(){
}

_ = AsyncLoader4.prototype = new AsyncLoader4__Super;
_.getClass$ = getClass_149;
_.runCallbacks = runCallbacks_6;
_.typeId$ = 0;
function $DOMException(this$static, message){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $DOMException;
  $location_0[stackIndex] = 'StackTraceCreator.java:' + '366' , $fillInStackTrace_1(this$static);
  $location_0[stackIndex] = 'Throwable.java:' + '53' , this$static.detailMessage = message;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_278(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_278;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_xml_client_DOMException_2_classLit;
}

function DOMException(){
}

_ = DOMException.prototype = new RuntimeException;
_.getClass$ = getClass_278;
_.typeId$ = 159;
function $clinit_489(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_489;
  $location_0[stackIndex] = 'XMLParser.java:' + '26' , $clinit_489 = nullMethod;
  $location_0[stackIndex] = 'XMLParser.java:' + '28' , impl_2 = ($location_0[stackIndex] = 'XMLParser.java:' + '28' , $clinit_504() , ($location_0[stackIndex] = 'XMLParserImpl.java:' + '29' , $clinit_504()) , impl_3);
  $stackDepth_0 = stackIndex - 1;
}

var impl_2;
function equals_8(o){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = equals_8;
  if (o != null && ($location_0[stackIndex] = 'Cast.java:' + '76' , canCast(o.typeId$, 164))) {
    returnTemp = this.jsObject == ($location_0[stackIndex] = 'DOMItem.java:' + '41' , dynamicCast(o, 164)).jsObject;
    $stackDepth_0 = stackIndex - 1;
    return returnTemp;
  }
  $stackDepth_0 = stackIndex - 1;
  return false;
}

function getClass_279(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_279;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_xml_client_impl_DOMItem_2_classLit;
}

function getJsObject(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getJsObject;
  $stackDepth_0 = stackIndex - 1;
  return this.jsObject;
}

function hashCode_10(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = hashCode_10;
  returnTemp = ($location_0[stackIndex] = 'JavaScriptObject.java:' + '140' , getHashCode(this.jsObject));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function DOMItem(){
}

_ = DOMItem.prototype = new Object_0;
_.equals$ = equals_8;
_.getClass$ = getClass_279;
_.getJsObject = getJsObject;
_.hashCode$ = hashCode_10;
_.typeId$ = 160;
_.jsObject = null;
function $NodeImpl(this$static, jso){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $NodeImpl;
  $location_0[stackIndex] = 'DOMItem.java:' + '28' , this$static.jsObject = jso;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function build(node){
  var nodeType, out, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = build;
  if (!node) {
    $stackDepth_0 = stackIndex - 1;
    return null;
  }
  $location_0[stackIndex] = 'NodeImpl.java:' + '41' , nodeType = ($location_0[stackIndex] = 'XMLParserImpl.java:' + '141' , $clinit_504() , ($location_0[stackIndex] = 'XMLParserImpl.java:' + '142' , out = node.nodeType) , out == null?-1:out);
  switch (nodeType) {
    case 2:
      returnTemp = $AttrImpl(($location_0[stackIndex] = 'NodeImpl.java:' + '44' , new AttrImpl), node);
      $stackDepth_0 = stackIndex - 1;
      return returnTemp;
    case 4:
      returnTemp = $CDATASectionImpl(($location_0[stackIndex] = 'NodeImpl.java:' + '46' , new CDATASectionImpl), node);
      $stackDepth_0 = stackIndex - 1;
      return returnTemp;
    case 8:
      returnTemp = $CommentImpl(($location_0[stackIndex] = 'NodeImpl.java:' + '48' , new CommentImpl), node);
      $stackDepth_0 = stackIndex - 1;
      return returnTemp;
    case 11:
      returnTemp = $DocumentFragmentImpl(($location_0[stackIndex] = 'NodeImpl.java:' + '50' , new DocumentFragmentImpl), node);
      $stackDepth_0 = stackIndex - 1;
      return returnTemp;
    case 9:
      returnTemp = $DocumentImpl(($location_0[stackIndex] = 'NodeImpl.java:' + '52' , new DocumentImpl), node);
      $stackDepth_0 = stackIndex - 1;
      return returnTemp;
    case 1:
      returnTemp = $ElementImpl(($location_0[stackIndex] = 'NodeImpl.java:' + '54' , new ElementImpl), node);
      $stackDepth_0 = stackIndex - 1;
      return returnTemp;
    case 7:
      returnTemp = $ProcessingInstructionImpl(($location_0[stackIndex] = 'NodeImpl.java:' + '56' , new ProcessingInstructionImpl), node);
      $stackDepth_0 = stackIndex - 1;
      return returnTemp;
    case 3:
      returnTemp = $TextImpl(($location_0[stackIndex] = 'NodeImpl.java:' + '58' , new TextImpl), node);
      $stackDepth_0 = stackIndex - 1;
      return returnTemp;
    default:returnTemp = $NodeImpl(($location_0[stackIndex] = 'NodeImpl.java:' + '60' , new NodeImpl), node);
      $stackDepth_0 = stackIndex - 1;
      return returnTemp;
  }
  $stackDepth_0 = stackIndex - 1;
}

function getAttributes(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getAttributes;
  returnTemp = ($location_0[stackIndex] = 'NodeImpl.java:' + '97' , $NamedNodeMapImpl(($location_0[stackIndex] = 'NodeImpl.java:' + '97' , new NamedNodeMapImpl), ($location_0[stackIndex] = 'XMLParserImpl.java:' + '92' , $clinit_504() , this.jsObject.attributes)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getChildNodes(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getChildNodes;
  returnTemp = ($location_0[stackIndex] = 'NodeImpl.java:' + '101' , $NodeListImpl(($location_0[stackIndex] = 'NodeImpl.java:' + '101' , new NodeListImpl), ($location_0[stackIndex] = 'XMLParserImpl.java:' + '96' , $clinit_504() , this.jsObject.childNodes)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getClass_280(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_280;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_xml_client_impl_NodeImpl_2_classLit;
}

function getFirstChild_0(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getFirstChild_0;
  returnTemp = ($location_0[stackIndex] = 'NodeImpl.java:' + '105' , ($location_0[stackIndex] = 'NodeImpl.java:' + '101' , $NodeListImpl(($location_0[stackIndex] = 'NodeImpl.java:' + '101' , new NodeListImpl), ($location_0[stackIndex] = 'XMLParserImpl.java:' + '96' , $clinit_504() , this.jsObject.childNodes))).item_1(0));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function hasChildNodes(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = hasChildNodes;
  returnTemp = ($location_0[stackIndex] = 'XMLParserImpl.java:' + '186' , $clinit_504() , ($location_0[stackIndex] = 'XMLParserImpl.java:' + '187' , this.jsObject.hasChildNodes()));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function toString_21(){
  var jsNode, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = toString_21;
  returnTemp = ($location_0[stackIndex] = 'NodeImpl.java:' + '246' , $clinit_504() , jsNode = ($location_0[stackIndex] = 'XMLParserImplStandard.java:' + '82' , this.getJsObject()) , ($location_0[stackIndex] = 'XMLParserImplStandard.java:' + '83' , new XMLSerializer).serializeToString(jsNode));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function NodeImpl(){
}

_ = NodeImpl.prototype = new DOMItem;
_.getAttributes = getAttributes;
_.getChildNodes = getChildNodes;
_.getClass$ = getClass_280;
_.getFirstChild = getFirstChild_0;
_.hasChildNodes_0 = hasChildNodes;
_.toString$ = toString_21;
_.typeId$ = 161;
function $AttrImpl(this$static, o){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $AttrImpl;
  $location_0[stackIndex] = 'DOMItem.java:' + '28' , this$static.jsObject = o;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_281(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_281;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_xml_client_impl_AttrImpl_2_classLit;
}

function AttrImpl(){
}

_ = AttrImpl.prototype = new NodeImpl;
_.getClass$ = getClass_281;
_.typeId$ = 162;
function getClass_282(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_282;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_xml_client_impl_CharacterDataImpl_2_classLit;
}

function CharacterDataImpl(){
}

_ = CharacterDataImpl.prototype = new NodeImpl;
_.getClass$ = getClass_282;
_.typeId$ = 163;
function $TextImpl(this$static, o){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $TextImpl;
  $location_0[stackIndex] = 'DOMItem.java:' + '28' , this$static.jsObject = o;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_283(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_283;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_xml_client_impl_TextImpl_2_classLit;
}

function toString_22(){
  var b, i, x, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = toString_22;
  b = $StringBuffer(($location_0[stackIndex] = 'TextImpl.java:' + '47' , new StringBuffer));
  x = ($location_0[stackIndex] = 'TextImpl.java:' + '48' , $split(($location_0[stackIndex] = 'XMLParserImpl.java:' + '100' , $clinit_504() , this.jsObject.data), '(?=[;&<>\'"])', -1));
  for ($location_0[stackIndex] = 'TextImpl.java:' + '49' , i = 0; i < x.length; $location_0[stackIndex] = 'TextImpl.java:' + '49' , ++i) {
    if (($location_0[stackIndex] = 'String.java:' + '497' , ($location_0[stackIndex] = 'TextImpl.java:' + '50' , x[i]).indexOf(';')) == 0) {
      $location_0[stackIndex] = 'StringBufferImplAppend.java:' + '52' , b.impl.string += '&semi;';
      $location_0[stackIndex] = 'TextImpl.java:' + '52' , $append_5(b, ($location_0[stackIndex] = 'String.java:' + '714' , ($location_0[stackIndex] = 'TextImpl.java:' + '52' , x[i]).substr(1, x[i].length - 1)));
    }
     else if (($location_0[stackIndex] = 'String.java:' + '497' , ($location_0[stackIndex] = 'TextImpl.java:' + '53' , x[i]).indexOf('&')) == 0) {
      $location_0[stackIndex] = 'StringBufferImplAppend.java:' + '52' , b.impl.string += '&amp;';
      $location_0[stackIndex] = 'TextImpl.java:' + '55' , $append_5(b, ($location_0[stackIndex] = 'String.java:' + '714' , ($location_0[stackIndex] = 'TextImpl.java:' + '55' , x[i]).substr(1, x[i].length - 1)));
    }
     else if (($location_0[stackIndex] = 'String.java:' + '497' , ($location_0[stackIndex] = 'TextImpl.java:' + '56' , x[i]).indexOf('"')) == 0) {
      $location_0[stackIndex] = 'StringBufferImplAppend.java:' + '52' , b.impl.string += '&quot;';
      $location_0[stackIndex] = 'TextImpl.java:' + '58' , $append_5(b, ($location_0[stackIndex] = 'String.java:' + '714' , ($location_0[stackIndex] = 'TextImpl.java:' + '58' , x[i]).substr(1, x[i].length - 1)));
    }
     else if (($location_0[stackIndex] = 'String.java:' + '497' , ($location_0[stackIndex] = 'TextImpl.java:' + '59' , x[i]).indexOf("'")) == 0) {
      $location_0[stackIndex] = 'StringBufferImplAppend.java:' + '52' , b.impl.string += '&apos;';
      $location_0[stackIndex] = 'TextImpl.java:' + '61' , $append_5(b, ($location_0[stackIndex] = 'String.java:' + '714' , ($location_0[stackIndex] = 'TextImpl.java:' + '61' , x[i]).substr(1, x[i].length - 1)));
    }
     else if (($location_0[stackIndex] = 'String.java:' + '497' , ($location_0[stackIndex] = 'TextImpl.java:' + '62' , x[i]).indexOf('<')) == 0) {
      $location_0[stackIndex] = 'StringBufferImplAppend.java:' + '52' , b.impl.string += '&lt;';
      $location_0[stackIndex] = 'TextImpl.java:' + '64' , $append_5(b, ($location_0[stackIndex] = 'String.java:' + '714' , ($location_0[stackIndex] = 'TextImpl.java:' + '64' , x[i]).substr(1, x[i].length - 1)));
    }
     else if (($location_0[stackIndex] = 'String.java:' + '497' , ($location_0[stackIndex] = 'TextImpl.java:' + '65' , x[i]).indexOf('>')) == 0) {
      $location_0[stackIndex] = 'StringBufferImplAppend.java:' + '52' , b.impl.string += '&gt;';
      $location_0[stackIndex] = 'TextImpl.java:' + '67' , $append_5(b, ($location_0[stackIndex] = 'String.java:' + '714' , ($location_0[stackIndex] = 'TextImpl.java:' + '67' , x[i]).substr(1, x[i].length - 1)));
    }
     else {
      $location_0[stackIndex] = 'StringBufferImplAppend.java:' + '52' , b.impl.string += ($location_0[stackIndex] = 'TextImpl.java:' + '69' , x[i]);
    }
  }
  returnTemp = b.impl.string;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function TextImpl(){
}

_ = TextImpl.prototype = new CharacterDataImpl;
_.getClass$ = getClass_283;
_.toString$ = toString_22;
_.typeId$ = 164;
function $CDATASectionImpl(this$static, o){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $CDATASectionImpl;
  $location_0[stackIndex] = 'DOMItem.java:' + '28' , this$static.jsObject = o;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_284(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_284;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_xml_client_impl_CDATASectionImpl_2_classLit;
}

function toString_23(){
  var b, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = toString_23;
  b = $StringBuffer_1(($location_0[stackIndex] = 'CDATASectionImpl.java:' + '38' , new StringBuffer), '<![CDATA[');
  $location_0[stackIndex] = 'CDATASectionImpl.java:' + '39' , $append_5(b, ($location_0[stackIndex] = 'XMLParserImpl.java:' + '100' , $clinit_504() , this.jsObject.data));
  $location_0[stackIndex] = 'StringBufferImplAppend.java:' + '52' , b.impl.string += ']]>';
  returnTemp = b.impl.string;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function CDATASectionImpl(){
}

_ = CDATASectionImpl.prototype = new TextImpl;
_.getClass$ = getClass_284;
_.toString$ = toString_23;
_.typeId$ = 165;
function $CommentImpl(this$static, o){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $CommentImpl;
  $location_0[stackIndex] = 'DOMItem.java:' + '28' , this$static.jsObject = o;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_285(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_285;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_xml_client_impl_CommentImpl_2_classLit;
}

function toString_24(){
  var b, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = toString_24;
  b = $StringBuffer_1(($location_0[stackIndex] = 'CommentImpl.java:' + '37' , new StringBuffer), '<!--');
  $location_0[stackIndex] = 'CommentImpl.java:' + '38' , $append_5(b, ($location_0[stackIndex] = 'XMLParserImpl.java:' + '100' , $clinit_504() , this.jsObject.data));
  $location_0[stackIndex] = 'StringBufferImplAppend.java:' + '52' , b.impl.string += '-->';
  returnTemp = b.impl.string;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function CommentImpl(){
}

_ = CommentImpl.prototype = new CharacterDataImpl;
_.getClass$ = getClass_285;
_.toString$ = toString_24;
_.typeId$ = 166;
function $DOMParseException(this$static, contents, e){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $DOMParseException;
  $location_0[stackIndex] = 'DOMParseException.java:' + '46' , $DOMException(this$static, 'Failed to parse: ' + ($location_0[stackIndex] = 'String.java:' + '718' , contents.substr(0, ($location_0[stackIndex] = 'DOMParseException.java:' + '31' , min_1(contents.length, 128)) - 0)));
  $location_0[stackIndex] = 'DOMParseException.java:' + '47' , $initCause(this$static, e);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_286(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_286;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_xml_client_impl_DOMParseException_2_classLit;
}

function DOMParseException(){
}

_ = DOMParseException.prototype = new DOMException;
_.getClass$ = getClass_286;
_.typeId$ = 167;
function $DocumentFragmentImpl(this$static, o){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $DocumentFragmentImpl;
  $location_0[stackIndex] = 'DOMItem.java:' + '28' , this$static.jsObject = o;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_287(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_287;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_xml_client_impl_DocumentFragmentImpl_2_classLit;
}

function DocumentFragmentImpl(){
}

_ = DocumentFragmentImpl.prototype = new NodeImpl;
_.getClass$ = getClass_287;
_.typeId$ = 168;
function $DocumentImpl(this$static, o){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $DocumentImpl;
  $location_0[stackIndex] = 'DOMItem.java:' + '28' , this$static.jsObject = o;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_288(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_288;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_xml_client_impl_DocumentImpl_2_classLit;
}

function DocumentImpl(){
}

_ = DocumentImpl.prototype = new NodeImpl;
_.getClass$ = getClass_288;
_.typeId$ = 169;
function $ElementImpl(this$static, o){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ElementImpl;
  $location_0[stackIndex] = 'DOMItem.java:' + '28' , this$static.jsObject = o;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_289(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_289;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_xml_client_impl_ElementImpl_2_classLit;
}

function ElementImpl(){
}

_ = ElementImpl.prototype = new NodeImpl;
_.getClass$ = getClass_289;
_.typeId$ = 170;
function $NodeListImpl(this$static, o){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $NodeListImpl;
  $location_0[stackIndex] = 'DOMItem.java:' + '28' , this$static.jsObject = o;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_290(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_290;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_xml_client_impl_NodeListImpl_2_classLit;
}

function getLength(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getLength;
  returnTemp = ($location_0[stackIndex] = 'XMLParserImpl.java:' + '117' , $clinit_504() , this.jsObject.length);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function item_0(index){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = item_0;
  returnTemp = build(($location_0[stackIndex] = 'NodeListImpl.java:' + '44' , item_2(this.jsObject, index)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function toString_25(){
  var b, i, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = toString_25;
  b = $StringBuffer(($location_0[stackIndex] = 'NodeListImpl.java:' + '49' , new StringBuffer));
  for ($location_0[stackIndex] = 'NodeListImpl.java:' + '50' , i = 0; i < ($location_0[stackIndex] = 'NodeListImpl.java:' + '50' , this.getLength()); $location_0[stackIndex] = 'NodeListImpl.java:' + '50' , ++i) {
    $append_5(b, ($location_0[stackIndex] = 'NodeListImpl.java:' + '51' , this.item_1(i)).toString$());
  }
  returnTemp = b.impl.string;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function NodeListImpl(){
}

_ = NodeListImpl.prototype = new DOMItem;
_.getClass$ = getClass_290;
_.getLength = getLength;
_.item_1 = item_0;
_.toString$ = toString_25;
_.typeId$ = 171;
function $NamedNodeMapImpl(this$static, o){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $NamedNodeMapImpl;
  $location_0[stackIndex] = 'DOMItem.java:' + '28' , this$static.jsObject = o;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_291(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_291;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_xml_client_impl_NamedNodeMapImpl_2_classLit;
}

function getLength_0(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getLength_0;
  returnTemp = ($location_0[stackIndex] = 'XMLParserImpl.java:' + '117' , $clinit_504() , this.jsObject.length);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function item_1(index){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = item_1;
  returnTemp = build(($location_0[stackIndex] = 'NodeListImpl.java:' + '44' , item_2(this.jsObject, index)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function NamedNodeMapImpl(){
}

_ = NamedNodeMapImpl.prototype = new NodeListImpl;
_.getClass$ = getClass_291;
_.getLength = getLength_0;
_.item_1 = item_1;
_.typeId$ = 172;
function $ProcessingInstructionImpl(this$static, o){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ProcessingInstructionImpl;
  $location_0[stackIndex] = 'DOMItem.java:' + '28' , this$static.jsObject = o;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_292(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_292;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_xml_client_impl_ProcessingInstructionImpl_2_classLit;
}

function toString_26(){
  var jsNode, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = toString_26;
  returnTemp = ($location_0[stackIndex] = 'ProcessingInstructionImpl.java:' + '63' , $clinit_504() , jsNode = ($location_0[stackIndex] = 'XMLParserImplStandard.java:' + '82' , this.getJsObject()) , ($location_0[stackIndex] = 'XMLParserImplStandard.java:' + '83' , new XMLSerializer).serializeToString(jsNode));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function ProcessingInstructionImpl(){
}

_ = ProcessingInstructionImpl.prototype = new NodeImpl;
_.getClass$ = getClass_292;
_.toString$ = toString_26;
_.typeId$ = 173;
function $clinit_504(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_504;
  $location_0[stackIndex] = 'XMLParserImpl.java:' + '27' , $clinit_504 = nullMethod;
  impl_3 = $XMLParserImplStandard(($location_0[stackIndex] = 'XMLParserImpl.java:' + '29' , new XMLParserImplStandard));
  $stackDepth_0 = stackIndex - 1;
}

function $parse(this$static, contents){
  var $e0, e, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $parse;
  try {
    returnTemp = dynamicCast(build(($location_0[stackIndex] = 'XMLParserImpl.java:' + '278' , $parseImpl(this$static, contents))), 165);
    $stackDepth_0 = stackIndex - 1;
    return returnTemp;
  }
   catch ($e0) {
    $e0 = ($location_0[stackIndex] = 'XMLParserImpl.java:' + '279' , caught_0($e0));
    $stackDepth_0 = stackIndex;
    if (instanceOf($e0, 136)) {
      e = $e0;
      throw $DOMParseException(($location_0[stackIndex] = 'XMLParserImpl.java:' + '280' , new DOMParseException), contents, e);
    }
     else 
      throw $e0;
  }
  $stackDepth_0 = stackIndex - 1;
}

function getClass_293(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_293;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_xml_client_impl_XMLParserImpl_2_classLit;
}

function item_2(t, index){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = item_2;
  $location_0[stackIndex] = 'XMLParserImpl.java:' + '205' , $clinit_504();
  if (index >= t.length) {
    $stackDepth_0 = stackIndex - 1;
    return null;
  }
  returnTemp = ($location_0[stackIndex] = 'XMLParserImpl.java:' + '209' , t.item(index));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function XMLParserImpl(){
}

_ = XMLParserImpl.prototype = new Object_0;
_.getClass$ = getClass_293;
_.typeId$ = 0;
var impl_3;
function $clinit_505(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_505;
  $location_0[stackIndex] = 'XMLParserImplStandard.java:' + '24' , $clinit_505 = nullMethod;
  $clinit_504();
  $stackDepth_0 = stackIndex - 1;
}

function $XMLParserImplStandard(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $XMLParserImplStandard;
  $location_0[stackIndex] = 'XMLParserImplStandard.java:' + '24' , $clinit_505();
  $location_0[stackIndex] = 'XMLParserImplStandard.java:' + '30' , this$static.domParser = ($location_0[stackIndex] = 'XMLParserImplStandard.java:' + '27' , new DOMParser);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $parseImpl(this$static, contents){
  var domParser = this$static.domParser, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $parseImpl;
  var result = ($location_0[stackIndex] = 'XMLParserImplStandard.java:' + '67' , domParser.parseFromString(contents, 'text/xml'));
  var roottag = result.documentElement;
  if (roottag.tagName == 'parsererror' && roottag.namespaceURI == 'http://www.mozilla.org/newlayout/xml/parsererror.xml') {
    throw $location_0[stackIndex] = 'XMLParserImplStandard.java:' + '72' , new Error(roottag.firstChild.data);
  }
  $stackDepth_0 = stackIndex - 1;
  return result;
}

function getClass_294(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_294;
  $stackDepth_0 = stackIndex - 1;
  return Lcom_google_gwt_xml_client_impl_XMLParserImplStandard_2_classLit;
}

function XMLParserImplStandard(){
}

_ = XMLParserImplStandard.prototype = new XMLParserImpl;
_.getClass$ = getClass_294;
_.typeId$ = 0;
function $replaceFirst(this$static, regex, replace){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $replaceFirst;
  replace = ($location_0[stackIndex] = 'String.java:' + '620' , __translateReplaceString(replace));
  returnTemp = this$static.replace(($location_0[stackIndex] = 'String.java:' + '621' , RegExp(regex)), replace);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $StringTokenizer(this$static, string, delimiters){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $StringTokenizer;
  $location_0[stackIndex] = 'StringTokenizer.java:' + '69' , $StringTokenizer_0(this$static, string, delimiters, false);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $StringTokenizer_0(this$static, string, delimiters, returnDelimiters){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $StringTokenizer_0;
  if (string != null) {
    $location_0[stackIndex] = 'StringTokenizer.java:' + '86' , this$static.string = string;
    $location_0[stackIndex] = 'StringTokenizer.java:' + '87' , this$static.delimiters = delimiters;
    $location_0[stackIndex] = 'StringTokenizer.java:' + '88' , this$static.returnDelimiters = returnDelimiters;
    $location_0[stackIndex] = 'StringTokenizer.java:' + '89' , this$static.position_0 = 0;
  }
   else 
    throw $NullPointerException(($location_0[stackIndex] = 'StringTokenizer.java:' + '91' , new NullPointerException));
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $hasMoreTokens(this$static){
  var i, length_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $hasMoreTokens;
  $location_0[stackIndex] = 'StringTokenizer.java:' + '135' , length_0 = this$static.string.length;
  if (this$static.position_0 < length_0) {
    if (this$static.returnDelimiters) {
      $stackDepth_0 = stackIndex - 1;
      return true;
    }
    for ($location_0[stackIndex] = 'StringTokenizer.java:' + '142' , i = this$static.position_0; i < length_0; $location_0[stackIndex] = 'StringTokenizer.java:' + '142' , ++i)
      if (($location_0[stackIndex] = 'String.java:' + '501' , this$static.delimiters.indexOf(($location_0[stackIndex] = 'String.java:' + '493' , fromCodePoint(($location_0[stackIndex] = 'String.java:' + '419' , this$static.string.charCodeAt(i)))), 0)) == -1) {
        $stackDepth_0 = stackIndex - 1;
        return true;
      }
  }
  $stackDepth_0 = stackIndex - 1;
  return false;
}

function $nextToken(this$static){
  var i, length_0, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $nextToken;
  $location_0[stackIndex] = 'StringTokenizer.java:' + '168' , i = this$static.position_0;
  $location_0[stackIndex] = 'StringTokenizer.java:' + '169' , length_0 = this$static.string.length;
  if (i < length_0) {
    if (this$static.returnDelimiters) {
      if (($location_0[stackIndex] = 'String.java:' + '501' , this$static.delimiters.indexOf(($location_0[stackIndex] = 'String.java:' + '493' , fromCodePoint(($location_0[stackIndex] = 'String.java:' + '419' , this$static.string.charCodeAt(this$static.position_0)))), 0)) >= 0) {
        returnTemp = ($location_0[stackIndex] = 'String.java:' + '185' , String.fromCharCode(($location_0[stackIndex] = 'String.java:' + '419' , this$static.string.charCodeAt(($location_0[stackIndex] = 'StringTokenizer.java:' + '174' , this$static.position_0++)))));
        $stackDepth_0 = stackIndex - 1;
        return returnTemp;
      }
      for ($location_0[stackIndex] = 'StringTokenizer.java:' + '175' , ++this$static.position_0; this$static.position_0 < length_0; $location_0[stackIndex] = 'StringTokenizer.java:' + '175' , ++this$static.position_0)
        if (($location_0[stackIndex] = 'String.java:' + '501' , this$static.delimiters.indexOf(($location_0[stackIndex] = 'String.java:' + '493' , fromCodePoint(($location_0[stackIndex] = 'String.java:' + '419' , this$static.string.charCodeAt(this$static.position_0)))), 0)) >= 0) {
          returnTemp = ($location_0[stackIndex] = 'StringTokenizer.java:' + '177' , $substring_0(this$static.string, i, this$static.position_0));
          $stackDepth_0 = stackIndex - 1;
          return returnTemp;
        }
      returnTemp = ($location_0[stackIndex] = 'StringTokenizer.java:' + '178' , $substring(this$static.string, i));
      $stackDepth_0 = stackIndex - 1;
      return returnTemp;
    }
    while (i < length_0 && ($location_0[stackIndex] = 'String.java:' + '501' , this$static.delimiters.indexOf(($location_0[stackIndex] = 'String.java:' + '493' , fromCodePoint(($location_0[stackIndex] = 'String.java:' + '419' , this$static.string.charCodeAt(i)))), 0)) >= 0)
      $location_0[stackIndex] = 'StringTokenizer.java:' + '182' , ++i;
    $location_0[stackIndex] = 'StringTokenizer.java:' + '183' , this$static.position_0 = i;
    if (i < length_0) {
      for ($location_0[stackIndex] = 'StringTokenizer.java:' + '185' , ++this$static.position_0; this$static.position_0 < length_0; $location_0[stackIndex] = 'StringTokenizer.java:' + '185' , ++this$static.position_0)
        if (($location_0[stackIndex] = 'String.java:' + '501' , this$static.delimiters.indexOf(($location_0[stackIndex] = 'String.java:' + '493' , fromCodePoint(($location_0[stackIndex] = 'String.java:' + '419' , this$static.string.charCodeAt(this$static.position_0)))), 0)) >= 0) {
          returnTemp = ($location_0[stackIndex] = 'StringTokenizer.java:' + '187' , $substring_0(this$static.string, i, this$static.position_0));
          $stackDepth_0 = stackIndex - 1;
          return returnTemp;
        }
      returnTemp = ($location_0[stackIndex] = 'StringTokenizer.java:' + '188' , $substring(this$static.string, i));
      $stackDepth_0 = stackIndex - 1;
      return returnTemp;
    }
  }
  throw $NoSuchElementException(($location_0[stackIndex] = 'StringTokenizer.java:' + '191' , new NoSuchElementException));
}

function getClass_357(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_357;
  $stackDepth_0 = stackIndex - 1;
  return Ljava_util_StringTokenizer_2_classLit;
}

function StringTokenizer(){
}

_ = StringTokenizer.prototype = new Object_0;
_.getClass$ = getClass_357;
_.typeId$ = 0;
_.delimiters = null;
_.position_0 = 0;
_.returnDelimiters = false;
_.string = null;
function $add_21(this$static, w, tabText){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $add_21;
  $location_0[stackIndex] = 'TabLayoutPanel.java:' + '330' , $insert_5(this$static, w, tabText, false, ($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(this$static.deck.widget, 183)).children.size_0);
  $stackDepth_0 = stackIndex - 1;
}

function $DecoratedTabLayoutPanel_0(this$static, decorateBody){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $DecoratedTabLayoutPanel_0;
  $location_0[stackIndex] = 'DecoratedTabLayoutPanel.java:' + '39' , $TabLayoutPanel(this$static, ($location_0[stackIndex] = 'TabLayoutPanel.java:' + '65' , $clinit_727() , TOP), true, decorateBody);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $setItemSelected_0(this$static, index, selected){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setItemSelected_0;
  $location_0[stackIndex] = 'ListBox.java:' + '787' , $checkIndex_0(this$static, index);
  selected?($location_0[stackIndex] = 'ListBox.java:' + '789' , $selectRow(this$static.dataTable, index, false)):($location_0[stackIndex] = 'SelectionGrid.java:' + '265' , $deselectRow(this$static.dataTable, index, true));
  $stackDepth_0 = stackIndex - 1;
}

function $ToolBarSeparator(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ToolBarSeparator;
  $location_0[stackIndex] = 'UIObject.java:' + '799' , this$static.element = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , ($location_0[stackIndex] = 'Document.java:' + '930' , $clinit_81() , $doc).createElement('span'));
  $location_0[stackIndex] = 'Element.java:' + '688' , this$static.element['className'] = 'mosaic-ToolBarSeparator';
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_465(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_465;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_ToolBarSeparator_2_classLit;
}

function ToolBarSeparator(){
}

_ = ToolBarSeparator.prototype = new Widget;
_.getClass$ = getClass_465;
_.typeId$ = 315;
function $ColumnLayout(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ColumnLayout;
  $location_0[stackIndex] = 'ColumnLayout.java:' + '33' , $BaseLayout(this$static);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $getLayoutData_1(child){
  var layoutDataObject, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getLayoutData_1;
  $location_0[stackIndex] = 'ColumnLayout.java:' + '249' , layoutDataObject = child.layoutData;
  if (layoutDataObject == null || !(layoutDataObject != null && ($location_0[stackIndex] = 'Cast.java:' + '76' , canCast(layoutDataObject.typeId$, 206)))) {
    layoutDataObject = $ColumnLayoutData(($location_0[stackIndex] = 'ColumnLayout.java:' + '252' , new ColumnLayoutData));
    $location_0[stackIndex] = 'Widget.java:' + '141' , child.layoutData = layoutDataObject;
  }
  returnTemp = ($location_0[stackIndex] = 'ColumnLayout.java:' + '255' , dynamicCast(layoutDataObject, 206));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $init_9(this$static, layoutPanel){
  var iter, widget, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $init_9;
  if (this$static.initialized) {
    $stackDepth_0 = stackIndex - 1;
    return true;
  }
  $location_0[stackIndex] = 'ColumnLayout.java:' + '264' , $init_7(this$static, layoutPanel);
  for ($location_0[stackIndex] = 'ColumnLayout.java:' + '266' , iter = $AbstractList$IteratorImpl(($location_0[stackIndex] = 'AbstractList.java:' + '278' , new AbstractList$IteratorImpl), this$static.visibleChildList); iter.i < ($location_0[stackIndex] = 'AbstractList.java:' + '38' , iter.this$0.size_1());) {
    widget = dynamicCast(($location_0[stackIndex] = 'ColumnLayout.java:' + '267' , $next_6(iter)), 2);
    if (widget != null && ($location_0[stackIndex] = 'Cast.java:' + '76' , canCast(widget.typeId$, 207))) {
      $location_0[stackIndex] = 'ColumnLayout.java:' + '270' , $remove_16(iter);
      continue;
    }
  }
  returnTemp = ($location_0[stackIndex] = 'ColumnLayout.java:' + '276' , this$static.initialized = true);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getClass_521(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_521;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_layout_ColumnLayout_2_classLit;
}

function getPreferredSize_7(layoutPanel){
  var $e0, borderSizes, child, child$iterator, decPanel, decPanelFrameSize, e, h, height, maxHeight, parent_0, result, size, spacing, width, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getPreferredSize_7;
  result = $Dimension(($location_0[stackIndex] = 'ColumnLayout.java:' + '41' , new Dimension));
  try {
    if (!layoutPanel || !($location_0[stackIndex] = 'ColumnLayout.java:' + '43' , $init_9(this, layoutPanel))) {
      $stackDepth_0 = stackIndex - 1;
      return result;
    }
    $location_0[stackIndex] = 'ColumnLayout.java:' + '47' , width = ($location_0[stackIndex] = 'BaseLayout.java:' + '546' , $getMarginSize_0(this.marginLeftMeasure.cache, layoutPanel)).left_0 + ($location_0[stackIndex] = 'BaseLayout.java:' + '518' , $getMarginSize_0(this.marginRightMeasure.cache, layoutPanel)).right + ($location_0[stackIndex] = 'BaseLayout.java:' + '604' , $getBorderSize_0(this.borderLeftMeasure.cache, layoutPanel)).left_0 + ($location_0[stackIndex] = 'BaseLayout.java:' + '576' , $getBorderSize_0(this.borderRightMeasure.cache, layoutPanel)).right + ($location_0[stackIndex] = 'BaseLayout.java:' + '620' , $getPaddingSize_0(this.paddingLeftMeasure.cache, layoutPanel)).top_0 + $getPaddingSize_0(this.paddingRightMeasure.cache, layoutPanel).top_0;
    $location_0[stackIndex] = 'ColumnLayout.java:' + '54' , height = ($location_0[stackIndex] = 'BaseLayout.java:' + '504' , $getMarginSize_0(this.marginTopMeasure.cache, layoutPanel)).top_0 + ($location_0[stackIndex] = 'BaseLayout.java:' + '532' , $getMarginSize_0(this.marginBottomMeasure.cache, layoutPanel)).bottom + ($location_0[stackIndex] = 'BaseLayout.java:' + '562' , $getBorderSize_0(this.borderTopMeasure.cache, layoutPanel)).top_0 + ($location_0[stackIndex] = 'BaseLayout.java:' + '590' , $getBorderSize_0(this.borderBottomMeasure.cache, layoutPanel)).bottom + ($location_0[stackIndex] = 'BaseLayout.java:' + '620' , $getPaddingSize_0(this.paddingTopMeasure.cache, layoutPanel)).top_0 + $getPaddingSize_0(this.paddingBottomMeasure.cache, layoutPanel).top_0;
    $location_0[stackIndex] = 'ColumnLayout.java:' + '61' , size = this.visibleChildList.size_0;
    if (size == 0) {
      $location_0[stackIndex] = 'ColumnLayout.java:' + '63' , result.width_0 = width;
      $location_0[stackIndex] = 'ColumnLayout.java:' + '64' , result.height_0 = height;
      $stackDepth_0 = stackIndex - 1;
      return result;
    }
    $location_0[stackIndex] = 'ColumnLayout.java:' + '68' , spacing = layoutPanel.widgetSpacing;
    $location_0[stackIndex] = 'ColumnLayout.java:' + '69' , width += (size - 1) * spacing;
    $location_0[stackIndex] = 'ColumnLayout.java:' + '71' , decPanelFrameSize = null;
    $location_0[stackIndex] = 'ColumnLayout.java:' + '73' , maxHeight = 0;
    for ($location_0[stackIndex] = 'ColumnLayout.java:' + '75' , child$iterator = $AbstractList$IteratorImpl(($location_0[stackIndex] = 'AbstractList.java:' + '278' , new AbstractList$IteratorImpl), this.visibleChildList); child$iterator.i < ($location_0[stackIndex] = 'AbstractList.java:' + '38' , child$iterator.this$0.size_1());) {
      child = dynamicCast(($location_0[stackIndex] = 'ColumnLayout.java:' + '75' , $next_6(child$iterator)), 2);
      child != null && ($location_0[stackIndex] = 'Cast.java:' + '76' , canCast(child.typeId$, 202)) && (child = ($location_0[stackIndex] = 'ColumnLayout.java:' + '77' , dynamicCast(child, 202)).widget_0);
      $location_0[stackIndex] = 'ColumnLayout.java:' + '80' , parent_0 = child.parent_0;
      if (parent_0 != null && ($location_0[stackIndex] = 'Cast.java:' + '76' , canCast(parent_0.typeId$, 202))) {
        decPanel = ($location_0[stackIndex] = 'ColumnLayout.java:' + '82' , dynamicCast(parent_0, 202));
        borderSizes = ($location_0[stackIndex] = 'ColumnLayout.java:' + '83' , $getBorderSizes(decPanel));
        decPanelFrameSize = ($location_0[stackIndex] = 'ColumnLayout.java:' + '84' , $Dimension_1(($location_0[stackIndex] = 'ColumnLayout.java:' + '84' , new Dimension), borderSizes[1] + borderSizes[3], ($location_0[stackIndex] = 'ColumnLayout.java:' + '85' , borderSizes[0]) + borderSizes[0]));
      }
      $location_0[stackIndex] = 'ColumnLayout.java:' + '88' , width += ($location_0[stackIndex] = 'BaseLayout.java:' + '463' , $getPreferredSize_1(this.preferredWidthMeasure.cache, child)).width_0;
      $location_0[stackIndex] = 'ColumnLayout.java:' + '89' , h = ($location_0[stackIndex] = 'BaseLayout.java:' + '477' , $getPreferredSize_1(this.preferredHeightMeasure.cache, child)).height_0;
      if (parent_0 != null && ($location_0[stackIndex] = 'Cast.java:' + '76' , canCast(parent_0.typeId$, 202))) {
        $location_0[stackIndex] = 'ColumnLayout.java:' + '92' , width += decPanelFrameSize.width_0;
        $location_0[stackIndex] = 'ColumnLayout.java:' + '93' , h += decPanelFrameSize.height_0;
      }
      $location_0[stackIndex] = 'ColumnLayout.java:' + '96' , maxHeight = maxHeight > h?maxHeight:h;
    }
    $location_0[stackIndex] = 'ColumnLayout.java:' + '99' , result.width_0 = width;
    $location_0[stackIndex] = 'ColumnLayout.java:' + '100' , result.height_0 = height + maxHeight;
  }
   catch ($e0) {
    $e0 = ($location_0[stackIndex] = 'ColumnLayout.java:' + '102' , caught_0($e0));
    $stackDepth_0 = stackIndex;
    if (instanceOf($e0, 8)) {
      e = $e0;
      $location_0[stackIndex] = 'ColumnLayout.java:' + '103' , e.getMessage();
      $location_0[stackIndex] = 'Window.java:' + '600' , $wnd.alert(Lorg_gwt_mosaic_ui_client_layout_ColumnLayout_2_classLit.typeName + '.getPreferredSize() : ' + ($location_0[stackIndex] = 'ColumnLayout.java:' + '105' , e.getMessage()));
    }
     else 
      throw $e0;
  }
  $stackDepth_0 = stackIndex - 1;
  return result;
}

function layoutPanel_6(layoutPanel){
  var $e0, borderSizes, box, child, child$iterator, decPanel, decPanelFrameSize, e, fh, fillWidth, fillingWidth, fw, h, height, i, layoutData, left, n, parent_0, size, spacing, top_0, w, width, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = layoutPanel_6;
  try {
    if (!layoutPanel || !($location_0[stackIndex] = 'ColumnLayout.java:' + '119' , $init_9(this, layoutPanel))) {
      $stackDepth_0 = stackIndex - 1;
      return;
    }
    $location_0[stackIndex] = 'ColumnLayout.java:' + '123' , size = this.visibleChildList.size_0;
    if (size == 0) {
      $stackDepth_0 = stackIndex - 1;
      return;
    }
    box = ($location_0[stackIndex] = 'ColumnLayout.java:' + '128' , getClientSize(layoutPanel.element));
    $location_0[stackIndex] = 'ColumnLayout.java:' + '129' , spacing = layoutPanel.widgetSpacing;
    $location_0[stackIndex] = 'ColumnLayout.java:' + '131' , left = ($location_0[stackIndex] = 'BaseLayout.java:' + '620' , $getPaddingSize_0(this.paddingLeftMeasure.cache, layoutPanel)).top_0;
    $location_0[stackIndex] = 'ColumnLayout.java:' + '132' , top_0 = ($location_0[stackIndex] = 'BaseLayout.java:' + '620' , $getPaddingSize_0(this.paddingTopMeasure.cache, layoutPanel)).top_0;
    $location_0[stackIndex] = 'ColumnLayout.java:' + '133' , width = box.width_0 - (left + ($location_0[stackIndex] = 'BaseLayout.java:' + '620' , $getPaddingSize_0(this.paddingRightMeasure.cache, layoutPanel)).top_0);
    $location_0[stackIndex] = 'ColumnLayout.java:' + '135' , height = box.height_0 - (top_0 + ($location_0[stackIndex] = 'BaseLayout.java:' + '620' , $getPaddingSize_0(this.paddingBottomMeasure.cache, layoutPanel)).top_0);
    $location_0[stackIndex] = 'ColumnLayout.java:' + '138' , fillWidth = width;
    $location_0[stackIndex] = 'ColumnLayout.java:' + '140' , fillWidth -= (size - 1) * spacing;
    $location_0[stackIndex] = 'ColumnLayout.java:' + '142' , fillingWidth = 0;
    $location_0[stackIndex] = 'ColumnLayout.java:' + '144' , decPanelFrameSize = null;
    for ($location_0[stackIndex] = 'ColumnLayout.java:' + '147' , child$iterator = $AbstractList$IteratorImpl(($location_0[stackIndex] = 'AbstractList.java:' + '278' , new AbstractList$IteratorImpl), this.visibleChildList); child$iterator.i < ($location_0[stackIndex] = 'AbstractList.java:' + '38' , child$iterator.this$0.size_1());) {
      child = dynamicCast(($location_0[stackIndex] = 'ColumnLayout.java:' + '147' , $next_6(child$iterator)), 2);
      child != null && ($location_0[stackIndex] = 'Cast.java:' + '76' , canCast(child.typeId$, 202)) && (child = ($location_0[stackIndex] = 'ColumnLayout.java:' + '149' , dynamicCast(child, 202)).widget_0);
      layoutData = ($location_0[stackIndex] = 'ColumnLayout.java:' + '152' , $getLayoutData_1(child));
      $location_0[stackIndex] = 'ColumnLayout.java:' + '154' , parent_0 = child.parent_0;
      if (parent_0 != null && ($location_0[stackIndex] = 'Cast.java:' + '76' , canCast(parent_0.typeId$, 202))) {
        decPanel = ($location_0[stackIndex] = 'ColumnLayout.java:' + '156' , dynamicCast(parent_0, 202));
        borderSizes = ($location_0[stackIndex] = 'ColumnLayout.java:' + '157' , $getBorderSizes(decPanel));
        decPanelFrameSize = ($location_0[stackIndex] = 'ColumnLayout.java:' + '158' , $Dimension_1(($location_0[stackIndex] = 'ColumnLayout.java:' + '158' , new Dimension), borderSizes[1] + borderSizes[3], ($location_0[stackIndex] = 'ColumnLayout.java:' + '159' , borderSizes[0]) + borderSizes[0]));
      }
      if (!layoutData.preferredWidth) {
        $location_0[stackIndex] = 'ColumnLayout.java:' + '163' , fillingWidth += layoutData.flexibility;
      }
       else {
        $location_0[stackIndex] = 'ColumnLayout.java:' + '165' , layoutData.calcWidth = ($location_0[stackIndex] = 'BaseLayout.java:' + '463' , $getPreferredSize_1(this.preferredWidthMeasure.cache, child)).width_0;
        parent_0 != null && ($location_0[stackIndex] = 'Cast.java:' + '76' , canCast(parent_0.typeId$, 202)) && ($location_0[stackIndex] = 'ColumnLayout.java:' + '167' , layoutData.calcWidth += decPanelFrameSize.width_0);
        $location_0[stackIndex] = 'ColumnLayout.java:' + '169' , fillWidth -= layoutData.calcWidth;
      }
    }
    for ($location_0[stackIndex] = 'ColumnLayout.java:' + '174' , i = 0 , n = this.visibleChildList.size_0; i < n; $location_0[stackIndex] = 'ColumnLayout.java:' + '174' , ++i) {
      child = dynamicCast(($location_0[stackIndex] = 'ColumnLayout.java:' + '175' , $get_5(this.visibleChildList, i)), 2);
      child != null && ($location_0[stackIndex] = 'Cast.java:' + '76' , canCast(child.typeId$, 202)) && (child = ($location_0[stackIndex] = 'ColumnLayout.java:' + '178' , dynamicCast(child, 202)).widget_0);
      layoutData = ($location_0[stackIndex] = 'ColumnLayout.java:' + '181' , dynamicCast(child.layoutData, 206));
      $location_0[stackIndex] = 'ColumnLayout.java:' + '183' , w = layoutData.calcWidth;
      $location_0[stackIndex] = 'ColumnLayout.java:' + '184' , h = height;
      !layoutData.preferredWidth && ($location_0[stackIndex] = 'ColumnLayout.java:' + '187' , w = ~~Math.max(($location_0[stackIndex] = 'Cast.java:' + '185' , Math.min(fillWidth * (layoutData.flexibility / fillingWidth), 2147483647)), -2147483648));
      $location_0[stackIndex] = 'ColumnLayout.java:' + '190' , fw = w;
      $location_0[stackIndex] = 'ColumnLayout.java:' + '191' , fh = h;
      $location_0[stackIndex] = 'ColumnLayout.java:' + '193' , parent_0 = child.parent_0;
      if (parent_0 != null && ($location_0[stackIndex] = 'Cast.java:' + '76' , canCast(parent_0.typeId$, 202))) {
        $location_0[stackIndex] = 'ColumnLayout.java:' + '195' , dynamicCast(parent_0, 202);
        $location_0[stackIndex] = 'ColumnLayout.java:' + '196' , fw -= decPanelFrameSize.width_0;
        $location_0[stackIndex] = 'ColumnLayout.java:' + '197' , fh -= decPanelFrameSize.height_0;
      }
      $location_0[stackIndex] = 'ColumnLayout.java:' + '200' , top_0 = 0 > top_0?0:top_0;
      $location_0[stackIndex] = 'ColumnLayout.java:' + '202' , layoutData.targetLeft = left;
      $location_0[stackIndex] = 'ColumnLayout.java:' + '203' , layoutData.targetTop = top_0;
      $location_0[stackIndex] = 'ColumnLayout.java:' + '204' , layoutData.targetWidth = fw;
      $location_0[stackIndex] = 'ColumnLayout.java:' + '205' , layoutData.targetHeight = fh;
      if (i < n - 1) {
        if (!layoutData.splitBar || layoutPanel != layoutData.splitBar.dragController.boundaryPanel) {
          layoutData.splitBar = ($location_0[stackIndex] = 'ColumnLayout.java:' + '210' , $ColumnLayoutSplitBar(($location_0[stackIndex] = 'ColumnLayout.java:' + '210' , new ColumnLayoutSplitBar), layoutPanel, child, dynamicCast(($location_0[stackIndex] = 'ColumnLayout.java:' + '211' , $get_5(this.visibleChildList, i + 1)), 2)));
          $location_0[stackIndex] = 'ColumnLayout.java:' + '212' , $add_25(layoutPanel, layoutData.splitBar);
        }
        !layoutData.splitBar.attached && ($location_0[stackIndex] = 'ColumnLayout.java:' + '216' , $add_25(layoutPanel, layoutData.splitBar));
        layoutData.splitBar.widgetR = dynamicCast(($location_0[stackIndex] = 'ColumnLayout.java:' + '220' , $get_5(this.visibleChildList, i + 1)), 2);
        $location_0[stackIndex] = 'ColumnLayout.java:' + '222' , setBounds(layoutPanel, layoutData.splitBar, left + w, top_0, spacing, height);
      }
      $location_0[stackIndex] = 'ColumnLayout.java:' + '226' , left += w + spacing;
      if (layoutPanel.animationEnabled) {
        $location_0[stackIndex] = 'ColumnLayout.java:' + '229' , $setSourceLeft(layoutData, $getAbsoluteLeft_0(($location_0[stackIndex] = 'Element.java:' + '150' , $clinit_81() , child.element)) - $getAbsoluteLeft_0(layoutPanel.element) - ($location_0[stackIndex] = 'BaseLayout.java:' + '620' , $getPaddingSize_0(this.paddingLeftMeasure.cache, layoutPanel)).top_0);
        $location_0[stackIndex] = 'ColumnLayout.java:' + '232' , $setSourceTop(layoutData, ($location_0[stackIndex] = 'Element.java:' + '166' , $getAbsoluteTop_0(child.element)) - $getAbsoluteTop_0(layoutPanel.element) - ($location_0[stackIndex] = 'BaseLayout.java:' + '620' , $getPaddingSize_0(this.paddingTopMeasure.cache, layoutPanel)).top_0);
        $setSourceWidth(layoutData, ($location_0[stackIndex] = 'ColumnLayout.java:' + '235' , child.getOffsetWidth()));
        $setSourceHeight(layoutData, ($location_0[stackIndex] = 'ColumnLayout.java:' + '236' , child.getOffsetHeight()));
      }
    }
    $location_0[stackIndex] = 'ColumnLayout.java:' + '240' , $layoutPanel(this, layoutPanel);
  }
   catch ($e0) {
    $e0 = ($location_0[stackIndex] = 'ColumnLayout.java:' + '242' , caught_0($e0));
    $stackDepth_0 = stackIndex;
    if (instanceOf($e0, 8)) {
      e = $e0;
      $location_0[stackIndex] = 'ColumnLayout.java:' + '243' , e.getMessage();
      $location_0[stackIndex] = 'Window.java:' + '600' , $wnd.alert(Lorg_gwt_mosaic_ui_client_layout_ColumnLayout_2_classLit.typeName + '.layoutPanel() : ' + ($location_0[stackIndex] = 'ColumnLayout.java:' + '244' , e.getMessage()));
    }
     else 
      throw $e0;
  }
  $stackDepth_0 = stackIndex - 1;
}

function ColumnLayout(){
}

_ = ColumnLayout.prototype = new BaseLayout;
_.getClass$ = getClass_521;
_.getPreferredSize_0 = getPreferredSize_7;
_.layoutPanel_0 = layoutPanel_6;
_.typeId$ = 0;
function $ColumnLayoutData(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ColumnLayoutData;
  $location_0[stackIndex] = 'LayoutData.java:' + '40' , this$static.decorate = false;
  $location_0[stackIndex] = 'ColumnLayoutData.java:' + '44' , $setFlexibility(this$static, 1);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $ColumnLayoutData_0(this$static, preferredWidth){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ColumnLayoutData_0;
  $location_0[stackIndex] = 'LayoutData.java:' + '40' , this$static.decorate = false;
  $location_0[stackIndex] = 'ColumnLayoutData.java:' + '53' , $setPreferredWidth(this$static, preferredWidth);
  $location_0[stackIndex] = 'ColumnLayoutData.java:' + '54' , $setFlexibility(this$static, 1);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $setFlexibility(this$static, flexibility){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setFlexibility;
  if (flexibility < 1) {
    throw $IllegalArgumentException_0(($location_0[stackIndex] = 'ColumnLayoutData.java:' + '69' , new IllegalArgumentException), "flexibility can't be < 1 (" + flexibility + ')');
  }
  $location_0[stackIndex] = 'ColumnLayoutData.java:' + '72' , this$static.flexibility = flexibility;
  $stackDepth_0 = stackIndex - 1;
}

function getClass_522(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_522;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_layout_ColumnLayoutData_2_classLit;
}

function ColumnLayoutData(){
}

_ = ColumnLayoutData.prototype = new LayoutData;
_.getClass$ = getClass_522;
_.typeId$ = 347;
_.calcWidth = 0;
_.flexibility = 0;
_.splitBar = null;
function $ColumnLayoutSplitBar(this$static, boundaryPanel, widgetL, widgetR){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ColumnLayoutSplitBar;
  $location_0[stackIndex] = 'UIObject.java:' + '799' , this$static.element = ($location_0[stackIndex] = 'DOMImpl.java:' + '35' , ($location_0[stackIndex] = 'Document.java:' + '930' , $clinit_81() , $doc).createElement('span'));
  $location_0[stackIndex] = 'Element.java:' + '688' , this$static.element['className'] = 'SplitBar';
  $location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '155' , this$static.widgetL = widgetL;
  $location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '156' , this$static.widgetR = widgetR;
  this$static.dragController = $ColumnLayoutSplitBar$SplitBarDragController(($location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '158' , new ColumnLayoutSplitBar$SplitBarDragController), boundaryPanel, this$static);
  $location_0[stackIndex] = 'AbstractDragController.java:' + '256' , this$static.dragController.constrainedToBoundaryPanel = true;
  $location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '161' , $setBehaviorMultipleSelection(this$static.dragController, false);
  $location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '163' , $makeDraggable(this$static.dragController, this$static);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function addMouseDownHandler_7(handler){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = addMouseDownHandler_7;
  returnTemp = ($location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '167' , $addDomHandler(this, handler, ($location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '167' , $clinit_170() , ($location_0[stackIndex] = 'MouseDownEvent.java:' + '27' , $clinit_170()) , TYPE_7)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function addMouseMoveHandler_7(handler){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = addMouseMoveHandler_7;
  returnTemp = ($location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '171' , $addDomHandler(this, handler, ($location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '171' , $clinit_172() , ($location_0[stackIndex] = 'MouseMoveEvent.java:' + '27' , $clinit_172()) , TYPE_8)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function addMouseOutHandler_7(handler){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = addMouseOutHandler_7;
  returnTemp = ($location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '175' , $addDomHandler(this, handler, ($location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '175' , $clinit_174() , ($location_0[stackIndex] = 'MouseOutEvent.java:' + '29' , $clinit_174()) , TYPE_9)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function addMouseUpHandler_7(handler){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = addMouseUpHandler_7;
  returnTemp = ($location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '183' , $addDomHandler(this, handler, ($location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '183' , $clinit_178() , ($location_0[stackIndex] = 'MouseUpEvent.java:' + '27' , $clinit_178()) , TYPE_11)));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getClass_523(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_523;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_layout_ColumnLayoutSplitBar_2_classLit;
}

function ColumnLayoutSplitBar(){
}

_ = ColumnLayoutSplitBar.prototype = new Widget;
_.addMouseDownHandler = addMouseDownHandler_7;
_.addMouseMoveHandler = addMouseMoveHandler_7;
_.addMouseOutHandler = addMouseOutHandler_7;
_.addMouseUpHandler = addMouseUpHandler_7;
_.getClass$ = getClass_523;
_.typeId$ = 348;
_.dragController = null;
_.widgetL = null;
_.widgetR = null;
var glassPanel_1 = null;
function $clinit_803(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_803;
  $location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '58' , $clinit_803 = nullMethod;
  $clinit_0();
  $stackDepth_0 = stackIndex - 1;
}

function $ColumnLayoutSplitBar$SplitBarDragController(this$static, boundaryPanel, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ColumnLayoutSplitBar$SplitBarDragController;
  $location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '66' , $clinit_803();
  this$static.this$0 = this$0;
  $location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '67' , $AbstractDragController(this$static, boundaryPanel);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function dragEnd_3(){
  var delta, layoutDataL, sizeL, sizeR, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = dragEnd_3;
  $location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '109' , delta = $getAbsoluteLeft_0(($location_0[stackIndex] = 'Element.java:' + '150' , $clinit_81() , this.context.draggable.element)) - this.draggableOldAbsoluteLeft;
  sizeL = ($location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '112' , this.this$0.widgetL.getOffsetWidth()) + delta;
  if (sizeL < 24) {
    $location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '114' , sizeL = 24;
    delta = sizeL - ($location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '115' , this.this$0.widgetL.getOffsetWidth());
  }
  sizeR = ($location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '118' , this.this$0.widgetR.getOffsetWidth()) - delta;
  if (sizeR < 24) {
    $location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '120' , sizeR = 24;
    delta = ($location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '121' , this.this$0.widgetR.getOffsetWidth()) - sizeR;
    sizeL = ($location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '122' , this.this$0.widgetL.getOffsetWidth()) + delta;
  }
  layoutDataL = ($location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '125' , dynamicCast(this.this$0.widgetL.layoutData, 206));
  $location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '128' , $setPreferredWidth(layoutDataL, sizeL + 'px');
  $location_0[stackIndex] = 'AbstractDragController.java:' + '123' , $removeStyleName(this.context.draggable, (!css_0 && (css_0 = ($location_0[stackIndex] = 'com_allen_sauer_gwt_dnd_client_util_DragClientBundle_default_InlineClientBundleGenerator.java:' + '9' , new com_allen_sauer_gwt_dnd_client_util_DragClientBundle_default_InlineClientBundleGenerator$1)) , 'dragdrop-dragging'));
  $location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '133' , $removeFromParent(glassPanel_1);
  $location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '135' , invalidate_6(this.context.boundaryPanel);
  $location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '136' , layout_10(this.context.boundaryPanel);
  $location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '138' , $removeStyleName(this.movablePanel, ($location_0[stackIndex] = 'UIObject.java:' + '552' , getStylePrimaryName(this.this$0.element)) + '-Movable');
  $stackDepth_0 = stackIndex - 1;
}

function dragMove_2(){
  var desiredLeft, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = dragMove_2;
  $location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '100' , desiredLeft = this.context.desiredDraggableX - this.boundaryOffsetX;
  desiredLeft = max(0, ($location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '101' , min_1(desiredLeft, this.dropTargetClientWidth - ($location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '102' , this.context.draggable.getOffsetWidth()))));
  $location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '103' , fastSetElementPosition(this.movablePanel.element, desiredLeft, $getAbsoluteTop_0(($location_0[stackIndex] = 'Element.java:' + '166' , $clinit_81() , this.context.draggable.element)) - this.boundaryOffsetY);
  $stackDepth_0 = stackIndex - 1;
}

function dragStart_3(){
  var border, box, currentDraggableLocation, widgetLocation, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = dragStart_3;
  if (!glassPanel_1) {
    glassPanel_1 = $GlassPanel(($location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '73' , new GlassPanel), false);
    setStyleName(($location_0[stackIndex] = 'UIObject.java:' + '449' , glassPanel_1.getStyleElement()), 'mosaic-GlassPanel-invisible', true);
  }
  $location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '76' , $add_2(($location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '76' , $clinit_431() , ($location_0[stackIndex] = 'RootPanel.java:' + '151' , get_1(null))), glassPanel_1, 0, 0);
  $location_0[stackIndex] = 'AbstractDragController.java:' + '147' , $addStyleName(this.context.draggable, (!css_0 && (css_0 = ($location_0[stackIndex] = 'com_allen_sauer_gwt_dnd_client_util_DragClientBundle_default_InlineClientBundleGenerator.java:' + '9' , new com_allen_sauer_gwt_dnd_client_util_DragClientBundle_default_InlineClientBundleGenerator$1)) , 'dragdrop-dragging'));
  currentDraggableLocation = $WidgetLocation(($location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '80' , new WidgetLocation), this.context.draggable, this.context.boundaryPanel);
  $location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '82' , this.movablePanel = this.context.draggable;
  $location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '83' , $add_2(this.context.boundaryPanel, this.movablePanel, currentDraggableLocation.left_0, currentDraggableLocation.top_0);
  $location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '85' , $addStyleName(this.movablePanel, ($location_0[stackIndex] = 'UIObject.java:' + '552' , getStylePrimaryName(this.this$0.element)) + '-Movable');
  widgetLocation = $WidgetLocation(($location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '89' , new WidgetLocation), this.context.boundaryPanel, null);
  border = ($location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '90' , getBorderSizes(this.context.boundaryPanel.element));
  this.boundaryOffsetX = widgetLocation.left_0 + ($location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '91' , border[3]);
  this.boundaryOffsetY = widgetLocation.top_0 + ($location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '92' , border[0]);
  box = ($location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '93' , getClientSize(this.context.boundaryPanel.element));
  $location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '94' , this.dropTargetClientWidth = box.width_0;
  $location_0[stackIndex] = 'ColumnLayoutSplitBar.java:' + '96' , this.draggableOldAbsoluteLeft = $getAbsoluteLeft_0(($location_0[stackIndex] = 'Element.java:' + '150' , $clinit_81() , this.context.draggable.element));
  $stackDepth_0 = stackIndex - 1;
}

function getClass_524(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_524;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_gwt_mosaic_ui_client_layout_ColumnLayoutSplitBar$SplitBarDragController_2_classLit;
}

function ColumnLayoutSplitBar$SplitBarDragController(){
}

_ = ColumnLayoutSplitBar$SplitBarDragController.prototype = new AbstractDragController;
_.dragEnd = dragEnd_3;
_.dragMove = dragMove_2;
_.dragStart = dragStart_3;
_.getClass$ = getClass_524;
_.typeId$ = 0;
_.boundaryOffsetX = 0;
_.boundaryOffsetY = 0;
_.draggableOldAbsoluteLeft = 0;
_.dropTargetClientWidth = 0;
_.movablePanel = null;
_.this$0 = null;
function $setColumnResizePolicy_0(this$static, columnResizePolicy){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setColumnResizePolicy_0;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1581' , this$static.columnResizePolicy = columnResizePolicy;
  $location_0[stackIndex] = 'AbstractScrollTable.java:' + '1582' , $updateFillWidthImage(this$static);
  $stackDepth_0 = stackIndex - 1;
}

function $setMinimumColumnWidth(this$static, column, minWidth){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setMinimumColumnWidth;
  $location_0[stackIndex] = 'ScrollTable.java:' + '215' , minWidth = minWidth > 1?minWidth:1;
  $location_0[stackIndex] = 'ColumnResizer.java:' + '153' , $getColumnWidthInfo_1(this$static, column).minWidth = minWidth;
  $stackDepth_0 = stackIndex - 1;
}

function $getActiveNodeInfoURL(instanceId){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getActiveNodeInfoURL;
  returnTemp = ($location_0[stackIndex] = 'URLBuilder.java:' + '104' , $getConsoleServerUrl(config_0)) + '/rs/process/instance/' + instanceId + '/activeNodeInfo';
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $getActivityImage(processId, instanceId){
  var encodedId, versionNo, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getActivityImage;
  $location_0[stackIndex] = 'URLBuilder.java:' + '110' , encodedId = ($location_0[stackIndex] = 'URL.java:' + '113' , throwIfNull('decodedURL', processId) , ($location_0[stackIndex] = 'URL.java:' + '222' , encodeURI(processId)));
  $location_0[stackIndex] = 'URLBuilder.java:' + '112' , versionNo = '' + toString_18(fromDouble(($location_0[stackIndex] = 'Date.java:' + '199' , $getTime0($Date(($location_0[stackIndex] = 'URLBuilder.java:' + '112' , new Date_1))))));
  returnTemp = ($location_0[stackIndex] = 'URLBuilder.java:' + '113' , $getConsoleServerUrl(config_0)) + '/rs/process/definition/' + encodedId + '/image/' + instanceId + '?v=' + versionNo;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $getExecutionSignalUrl(tok, signal){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getExecutionSignalUrl;
  returnTemp = ($location_0[stackIndex] = 'URLBuilder.java:' + '181' , $getConsoleServerUrl(config_0)) + '/rs/process/tokens/' + tok.id_0 + '/transition?signal=' + signal;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $getInstanceDataURL(instanceId){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getInstanceDataURL;
  returnTemp = ($location_0[stackIndex] = 'URLBuilder.java:' + '134' , $getConsoleServerUrl(config_0)) + '/rs/process/instance/' + instanceId + '/dataset';
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $getInstanceDeleteURL(instanceId){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getInstanceDeleteURL;
  returnTemp = ($location_0[stackIndex] = 'URLBuilder.java:' + '129' , $getConsoleServerUrl(config_0)) + '/rs/process/instance/' + instanceId + '/delete';
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $getInstanceEndURL(instanceId, result){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getInstanceEndURL;
  returnTemp = ($location_0[stackIndex] = 'URLBuilder.java:' + '124' , $getConsoleServerUrl(config_0)) + '/rs/process/instance/' + instanceId + '/end/' + result;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $getProcessHistoryEventsURL(instanceId){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getProcessHistoryEventsURL;
  returnTemp = ($location_0[stackIndex] = 'URLBuilder.java:' + '271' , $getConsoleServerUrl(config_0)) + '/rs/history/instance/' + instanceId + '/events';
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $getProcessImageURL(processId){
  var encodedId, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getProcessImageURL;
  $location_0[stackIndex] = 'URLBuilder.java:' + '98' , encodedId = ($location_0[stackIndex] = 'URL.java:' + '113' , throwIfNull('decodedURL', processId) , ($location_0[stackIndex] = 'URL.java:' + '222' , encodeURI(processId)));
  returnTemp = ($location_0[stackIndex] = 'URLBuilder.java:' + '99' , $getConsoleServerUrl(config_0)) + '/rs/process/definition/' + encodedId + '/image';
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $getProcessInstancesURL(processId){
  var encodedId, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getProcessInstancesURL;
  $location_0[stackIndex] = 'URLBuilder.java:' + '66' , encodedId = ($location_0[stackIndex] = 'URL.java:' + '113' , throwIfNull('decodedURL', processId) , ($location_0[stackIndex] = 'URL.java:' + '222' , encodeURI(processId)));
  returnTemp = ($location_0[stackIndex] = 'URLBuilder.java:' + '69' , $getConsoleServerUrl(config_0)) + '/rs/process/definition/' + encodedId + '/instances';
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $getRemoveDefinitionURL(processId){
  var encodedId, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getRemoveDefinitionURL;
  $location_0[stackIndex] = 'URLBuilder.java:' + '92' , encodedId = ($location_0[stackIndex] = 'URL.java:' + '113' , throwIfNull('decodedURL', processId) , ($location_0[stackIndex] = 'URL.java:' + '222' , encodeURI(processId)));
  returnTemp = ($location_0[stackIndex] = 'URLBuilder.java:' + '93' , $getConsoleServerUrl(config_0)) + '/rs/process/definition/' + encodedId + '/remove';
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $getStartNewInstanceURL(processId){
  var encodedID, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getStartNewInstanceURL;
  $location_0[stackIndex] = 'URLBuilder.java:' + '139' , encodedID = ($location_0[stackIndex] = 'URL.java:' + '113' , throwIfNull('decodedURL', processId) , ($location_0[stackIndex] = 'URL.java:' + '222' , encodeURI(processId)));
  returnTemp = ($location_0[stackIndex] = 'URLBuilder.java:' + '140' , $getConsoleServerUrl(config_0)) + '/rs/process/definition/' + encodedID + '/new_instance';
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $getStateChangeURL(instanceId, state){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $getStateChangeURL;
  returnTemp = ($location_0[stackIndex] = 'URLBuilder.java:' + '119' , $getConsoleServerUrl(config_0)) + '/rs/process/instance/' + instanceId + '/state/' + state;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $WidgetWindowPanel(this$static, title, widget, overlay){
  var height, width, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $WidgetWindowPanel;
  this$static.window_0 = $WindowPanel_0(($location_0[stackIndex] = 'WidgetWindowPanel.java:' + '47' , new WindowPanel), title);
  $location_0[stackIndex] = 'PopupPanel.java:' + '744' , this$static.window_0.isAnimationEnabled = true;
  $location_0[stackIndex] = 'WidgetWindowPanel.java:' + '49' , this$static.window_0.setWidget(widget);
  $location_0[stackIndex] = 'WidgetWindowPanel.java:' + '51' , addMaximizeButton(this$static.window_0, ($location_0[stackIndex] = 'Caption.java:' + '61' , $clinit_649() , RIGHT));
  $location_0[stackIndex] = 'WidgetWindowPanel.java:' + '52' , addMinimizeButton(this$static.window_0, RIGHT);
  $location_0[stackIndex] = 'WidgetWindowPanel.java:' + '54' , $pack(this$static.window_0);
  if (overlay) {
    $location_0[stackIndex] = 'WidgetWindowPanel.java:' + '58' , width = ($location_0[stackIndex] = 'Window.java:' + '643' , $getClientWidth_1($doc)) - 120;
    $location_0[stackIndex] = 'WidgetWindowPanel.java:' + '59' , height = ($location_0[stackIndex] = 'Window.java:' + '633' , $getClientHeight_1($doc)) - 80;
    $setContentSize_1(this$static.window_0, $Dimension_1(($location_0[stackIndex] = 'WidgetWindowPanel.java:' + '61' , new Dimension), width, height));
    $location_0[stackIndex] = 'WidgetWindowPanel.java:' + '62' , $setPopupPosition_0(this$static.window_0, 60, 40);
    $location_0[stackIndex] = 'WidgetWindowPanel.java:' + '64' , $show_1(this$static.window_0);
  }
   else {
    $location_0[stackIndex] = 'WidgetWindowPanel.java:' + '68' , $center_0(this$static.window_0);
  }
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_634(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_634;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_common_WidgetWindowPanel_2_classLit;
}

function WidgetWindowPanel(){
}

_ = WidgetWindowPanel.prototype = new Object_0;
_.getClass$ = getClass_634;
_.typeId$ = 0;
_.window_0 = null;
var greenIcon = null;
function $ActiveNodeInfo(this$static, activeNode){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ActiveNodeInfo;
  $location_0[stackIndex] = 'ActiveNodeInfo.java:' + '47' , this$static.activeNode = activeNode;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_635(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_635;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_model_ActiveNodeInfo_2_classLit;
}

function ActiveNodeInfo(){
}

_ = ActiveNodeInfo.prototype = new Object_0;
_.getClass$ = getClass_635;
_.typeId$ = 415;
_.activeNode = null;
function parseActiveNodeInfo(json){
  var activeNode, activeNodeInfos, array, i, root, walk, wrapper, x, y, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = parseActiveNodeInfo;
  $location_0[stackIndex] = 'ConsoleLog.java:' + '53' , $clinit_24();
  $location_0[stackIndex] = 'Log.java:' + '150' , $debug(impl, 'Parse: ' + json, null);
  activeNodeInfos = $ArrayList(($location_0[stackIndex] = 'DTOParser.java:' + '347' , new ArrayList));
  root = ($location_0[stackIndex] = 'DTOParser.java:' + '348' , parse(json));
  if (root != null && ($location_0[stackIndex] = 'Cast.java:' + '76' , canCast(root.typeId$, 139))) {
    array = ($location_0[stackIndex] = 'DTOParser.java:' + '353' , dynamicCast(root, 139));
    for ($location_0[stackIndex] = 'DTOParser.java:' + '355' , i = 0; i < array.jsArray.length; $location_0[stackIndex] = 'DTOParser.java:' + '355' , ++i) {
      $location_0[stackIndex] = 'DTOParser.java:' + '356' , walk = ($location_0[stackIndex] = 'JSONWalk.java:' + '48' , $JSONWalk(($location_0[stackIndex] = 'JSONWalk.java:' + '48' , new JSONWalk), ($location_0[stackIndex] = 'DTOParser.java:' + '356' , $get_2(array, i))));
      wrapper = ($location_0[stackIndex] = 'DTOParser.java:' + '357' , $next_11(walk, 'activeNode'));
      activeNode = ($location_0[stackIndex] = 'DTOParser.java:' + '358' , $asObject(wrapper));
      x = $asInt(($location_0[stackIndex] = 'DTOParser.java:' + '360' , $next_11($JSONWalk(($location_0[stackIndex] = 'JSONWalk.java:' + '48' , new JSONWalk), activeNode), 'x')));
      y = $asInt(($location_0[stackIndex] = 'DTOParser.java:' + '361' , $next_11($JSONWalk(($location_0[stackIndex] = 'JSONWalk.java:' + '48' , new JSONWalk), activeNode), 'y')));
      $asInt(($location_0[stackIndex] = 'DTOParser.java:' + '363' , $next_11($JSONWalk(($location_0[stackIndex] = 'JSONWalk.java:' + '48' , new JSONWalk), activeNode), 'width')));
      $asInt(($location_0[stackIndex] = 'DTOParser.java:' + '364' , $next_11($JSONWalk(($location_0[stackIndex] = 'JSONWalk.java:' + '48' , new JSONWalk), activeNode), 'height')));
      $asString(($location_0[stackIndex] = 'DTOParser.java:' + '365' , $next_11($JSONWalk(($location_0[stackIndex] = 'JSONWalk.java:' + '48' , new JSONWalk), activeNode), 'name')));
      $location_0[stackIndex] = 'DTOParser.java:' + '367' , $add_7(activeNodeInfos, ($location_0[stackIndex] = 'DTOParser.java:' + '368' , $ActiveNodeInfo(($location_0[stackIndex] = 'DTOParser.java:' + '368' , new ActiveNodeInfo), $DiagramNodeInfo(($location_0[stackIndex] = 'DTOParser.java:' + '370' , new DiagramNodeInfo), x, y))));
      wrapper = ($location_0[stackIndex] = 'DTOParser.java:' + '373' , $next_11(walk, 'activeNode'));
    }
  }
  $stackDepth_0 = stackIndex - 1;
  return activeNodeInfos;
}

function $DiagramNodeInfo(this$static, x, y){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $DiagramNodeInfo;
  $location_0[stackIndex] = 'DiagramNodeInfo.java:' + '50' , this$static.x = x;
  $location_0[stackIndex] = 'DiagramNodeInfo.java:' + '51' , this$static.y = y;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_636(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_636;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_model_DiagramNodeInfo_2_classLit;
}

function DiagramNodeInfo(){
}

_ = DiagramNodeInfo.prototype = new Object_0;
_.getClass$ = getClass_636;
_.typeId$ = 0;
_.x = 0;
_.y = 0;
function $getDate_0(this$static, key){
  var df, result, value, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $getDate_0;
  $location_0[stackIndex] = 'JSOModel.java:' + '130' , result = null;
  $location_0[stackIndex] = 'JSOModel.java:' + '131' , value = '' + ($location_0[stackIndex] = 'JSOModel.java:' + '96' , this$static[key]);
  if (!(value != null && ($location_0[stackIndex] = 'JSOModel.java:' + '149' , $equals_4('null', value)) || $equals_4('undefined', value))) {
    df = $SimpleDateFormat(($location_0[stackIndex] = 'JSOModel.java:' + '134' , new SimpleDateFormat));
    $location_0[stackIndex] = 'JSOModel.java:' + '135' , result = ($location_0[stackIndex] = 'SimpleDateFormat.java:' + '187' , parse_0(value, df.format));
  }
  $stackDepth_0 = stackIndex - 1;
  return result;
}

function parseProcessInstance(root){
  var definitionId, end, id, processInstance, rootToken, rootTokenJson, start, suspended, date, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = parseProcessInstance;
  $location_0[stackIndex] = 'JSOParser.java:' + '84' , id = '' + ($location_0[stackIndex] = 'JSOModel.java:' + '96' , root['id']);
  $location_0[stackIndex] = 'JSOParser.java:' + '85' , definitionId = '' + ($location_0[stackIndex] = 'JSOModel.java:' + '96' , root['definitionId']);
  start = ($location_0[stackIndex] = 'JSOParser.java:' + '86' , $getDate_0(root, 'startDate'));
  $location_0[stackIndex] = 'JSOParser.java:' + '87' , end = (date = ($location_0[stackIndex] = 'JSOModel.java:' + '143' , $getDate_0(root, 'endDate')) , date?date:null);
  $location_0[stackIndex] = 'JSOParser.java:' + '88' , suspended = ($location_0[stackIndex] = 'JSOModel.java:' + '112' , $clinit_515() , ($location_0[stackIndex] = 'Boolean.java:' + '35' , $equalsIgnoreCase('true', '' + ($location_0[stackIndex] = 'JSOModel.java:' + '96' , root['suspended']))));
  processInstance = $ProcessInstanceRef(($location_0[stackIndex] = 'JSOParser.java:' + '90' , new ProcessInstanceRef), id, definitionId, start, end, suspended);
  $location_0[stackIndex] = 'JSOParser.java:' + '96' , rootTokenJson = ($location_0[stackIndex] = 'JSOModel.java:' + '116' , root['rootToken']);
  if (rootTokenJson) {
    rootToken = ($location_0[stackIndex] = 'JSOParser.java:' + '99' , parseTokenReference(rootTokenJson));
    $location_0[stackIndex] = 'ProcessInstanceRef.java:' + '284' , processInstance.rootToken = rootToken;
  }
  $stackDepth_0 = stackIndex - 1;
  return processInstance;
}

function parseProcessInstances(json){
  var i, instances, results, rootModel, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = parseProcessInstances;
  results = $ArrayList(($location_0[stackIndex] = 'JSOParser.java:' + '71' , new ArrayList));
  $location_0[stackIndex] = 'JSOParser.java:' + '72' , rootModel = ($location_0[stackIndex] = 'JSOModel.java:' + '61' , eval('(' + json + ')'));
  $location_0[stackIndex] = 'JSOParser.java:' + '74' , instances = ($location_0[stackIndex] = 'JSOModel.java:' + '120' , rootModel['instances'])?rootModel['instances']:new Array;
  for ($location_0[stackIndex] = 'JSOParser.java:' + '75' , i = 0; i < instances.length; $location_0[stackIndex] = 'JSOParser.java:' + '75' , ++i) {
    $add_7(results, ($location_0[stackIndex] = 'JSOParser.java:' + '77' , parseProcessInstance(($location_0[stackIndex] = 'JsArray.java:' + '49' , instances[i]))));
  }
  $stackDepth_0 = stackIndex - 1;
  return results;
}

function parseStringRef(json){
  var entry, i, ref, refs, rootModel, values, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = parseStringRef;
  refs = $LinkedList(($location_0[stackIndex] = 'JSOParser.java:' + '212' , new LinkedList));
  $location_0[stackIndex] = 'JSOParser.java:' + '214' , rootModel = ($location_0[stackIndex] = 'JSOModel.java:' + '61' , eval('(' + json + ')'));
  $location_0[stackIndex] = 'JSOParser.java:' + '215' , values = ($location_0[stackIndex] = 'JSOModel.java:' + '120' , rootModel['values'])?rootModel['values']:new Array;
  for ($location_0[stackIndex] = 'JSOParser.java:' + '217' , i = 0; i < values.length; $location_0[stackIndex] = 'JSOParser.java:' + '217' , ++i) {
    $location_0[stackIndex] = 'JSOParser.java:' + '218' , entry = ($location_0[stackIndex] = 'JsArray.java:' + '49' , values[i]);
    ref = ($location_0[stackIndex] = 'JSOParser.java:' + '219' , $StringRef(($location_0[stackIndex] = 'JSOParser.java:' + '219' , new StringRef), '' + ($location_0[stackIndex] = 'JSOModel.java:' + '96' , entry['value'])));
    $LinkedList$Node_0(($location_0[stackIndex] = 'LinkedList.java:' + '215' , new LinkedList$Node), ref, refs.header);
    $location_0[stackIndex] = 'LinkedList.java:' + '216' , ++refs.size_0;
  }
  $stackDepth_0 = stackIndex - 1;
  return refs;
}

function parseTokenReference(rootToken){
  var availableSignals, children, i, tokenChildrenJson, tokenReference, tokenSignalsJson, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = parseTokenReference;
  tokenReference = $TokenReference(($location_0[stackIndex] = 'JSOParser.java:' + '116' , new TokenReference));
  $location_0[stackIndex] = 'TokenReference.java:' + '57' , tokenReference.id_0 = '' + ($location_0[stackIndex] = 'JSOModel.java:' + '96' , rootToken['id']);
  $location_0[stackIndex] = 'TokenReference.java:' + '67' , tokenReference.currentNodeName = '' + ($location_0[stackIndex] = 'JSOModel.java:' + '96' , rootToken['currentNodeName']);
  $location_0[stackIndex] = 'TokenReference.java:' + '112' , tokenReference.canBeSignaled = ($location_0[stackIndex] = 'JSOModel.java:' + '112' , $clinit_515() , ($location_0[stackIndex] = 'Boolean.java:' + '35' , $equalsIgnoreCase('true', '' + ($location_0[stackIndex] = 'JSOModel.java:' + '96' , rootToken['canBeSignaled']))));
  ($location_0[stackIndex] = 'JSOModel.java:' + '76' , rootToken['name']) != undefined && ($location_0[stackIndex] = 'TokenReference.java:' + '62' , tokenReference.name_0 = '' + ($location_0[stackIndex] = 'JSOModel.java:' + '96' , rootToken['name']) , undefined);
  $location_0[stackIndex] = 'JSOParser.java:' + '125' , tokenChildrenJson = ($location_0[stackIndex] = 'JSOModel.java:' + '120' , rootToken['children'])?rootToken['children']:new Array;
  if (tokenChildrenJson) {
    children = $ArrayList(($location_0[stackIndex] = 'JSOParser.java:' + '128' , new ArrayList));
    for ($location_0[stackIndex] = 'JSOParser.java:' + '130' , i = 0; i < tokenChildrenJson.length; $location_0[stackIndex] = 'JSOParser.java:' + '130' , ++i) {
      $add_7(children, ($location_0[stackIndex] = 'JSOParser.java:' + '131' , parseTokenReference(($location_0[stackIndex] = 'JsArray.java:' + '49' , tokenChildrenJson[i]))));
    }
    $location_0[stackIndex] = 'TokenReference.java:' + '72' , tokenReference.children = children;
  }
  $location_0[stackIndex] = 'JSOParser.java:' + '137' , tokenSignalsJson = ($location_0[stackIndex] = 'JSOModel.java:' + '120' , rootToken['availableSignals'])?rootToken['availableSignals']:new Array;
  if (tokenSignalsJson) {
    availableSignals = $ArrayList(($location_0[stackIndex] = 'JSOParser.java:' + '141' , new ArrayList));
    for ($location_0[stackIndex] = 'JSOParser.java:' + '142' , i = 0; i < tokenSignalsJson.length; $location_0[stackIndex] = 'JSOParser.java:' + '142' , ++i) {
      $location_0[stackIndex] = 'JSOParser.java:' + '143' , $add_7(availableSignals, ($location_0[stackIndex] = 'JsArray.java:' + '49' , tokenSignalsJson[i]).toString?($location_0[stackIndex] = 'JavaScriptObject.java:' + '56' , tokenSignalsJson[i].toString()):'[JavaScriptObject]');
    }
  }
  $stackDepth_0 = stackIndex - 1;
  return tokenReference;
}

function $ProcessInstanceRef(this$static, id, processDefinitionId, startDate, endDate, suspended){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ProcessInstanceRef;
  if (!startDate)
    throw $IllegalArgumentException_0(($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '71' , new IllegalArgumentException), 'An instance requires a start date');
  if (!!endDate && suspended)
    throw $IllegalArgumentException_0(($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '74' , new IllegalArgumentException), 'An instance cannot be ended and suspended at the same time');
  $location_0[stackIndex] = 'ProcessInstanceRef.java:' + '76' , this$static.id_0 = id;
  $location_0[stackIndex] = 'ProcessInstanceRef.java:' + '77' , this$static.definitionId = processDefinitionId;
  $location_0[stackIndex] = 'ProcessInstanceRef.java:' + '78' , this$static.startDate = startDate;
  $location_0[stackIndex] = 'ProcessInstanceRef.java:' + '79' , this$static.endDate = endDate;
  $location_0[stackIndex] = 'ProcessInstanceRef.java:' + '80' , this$static.suspended = suspended;
  !!this$static.startDate && !!this$static.endDate?(this$static.lifecycle = ($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '90' , $ProcessInstanceRef$Lifecycle(($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '90' , new ProcessInstanceRef$Lifecycle), this$static, ($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '45' , $clinit_950() , ENDED), this$static))):!this$static.endDate && this$static.suspended?(this$static.lifecycle = ($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '92' , $ProcessInstanceRef$Lifecycle(($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '92' , new ProcessInstanceRef$Lifecycle), this$static, ($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '45' , $clinit_950() , SUSPENDED), this$static))):(this$static.lifecycle = ($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '94' , $ProcessInstanceRef$Lifecycle(($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '94' , new ProcessInstanceRef$Lifecycle), this$static, ($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '45' , $clinit_950() , RUNNING), this$static)));
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $setEndResult(this$static, endResult){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setEndResult;
  if (this$static.lifecycle.current != ($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '45' , $clinit_950() , ENDED))
    throw $IllegalArgumentException_0(($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '302' , new IllegalArgumentException), 'Cannot set end result in state ' + this$static.lifecycle.current);
  $location_0[stackIndex] = 'ProcessInstanceRef.java:' + '304' , this$static.endResult = endResult;
  $stackDepth_0 = stackIndex - 1;
}

function $setState_3(this$static, nextState){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $setState_3;
  this$static.lifecycle = ($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '143' , $transitionTo(this$static.lifecycle, nextState));
  $stackDepth_0 = stackIndex - 1;
}

function equals_35(o){
  var that, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = equals_35;
  if (this === (o == null?null:o)) {
    $stackDepth_0 = stackIndex - 1;
    return true;
  }
  if (o == null || Lorg_jboss_bpm_console_client_model_ProcessInstanceRef_2_classLit != (o.typeMarker$ == nullMethod || o.typeId$ == 2?($location_0[stackIndex] = 'JavaScriptObject.java:' + '28' , o.getClass$()):Lcom_google_gwt_core_client_JavaScriptObject_2_classLit)) {
    $stackDepth_0 = stackIndex - 1;
    return false;
  }
  that = ($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '312' , dynamicCast(o, 232));
  if (this.definitionId != null?!($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '314' , $equals_4(this.definitionId, that.definitionId)):that.definitionId != null) {
    $stackDepth_0 = stackIndex - 1;
    return false;
  }
  if (this.id_0 != null?!($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '315' , $equals_4(this.id_0, that.id_0)):that.id_0 != null) {
    $stackDepth_0 = stackIndex - 1;
    return false;
  }
  $stackDepth_0 = stackIndex - 1;
  return true;
}

function getClass_642(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_642;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_model_ProcessInstanceRef_2_classLit;
}

function hashCode_36(){
  var result, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = hashCode_36;
  $location_0[stackIndex] = 'ProcessInstanceRef.java:' + '324' , result = this.id_0 != null?($location_0[stackIndex] = 'String.java:' + '485' , getHashCode_0(this.id_0)):0;
  $location_0[stackIndex] = 'ProcessInstanceRef.java:' + '325' , result = 31 * result + (this.definitionId != null?($location_0[stackIndex] = 'String.java:' + '485' , getHashCode_0(this.definitionId)):0);
  $location_0[stackIndex] = 'ProcessInstanceRef.java:' + '326' , result = 31 * result;
  $stackDepth_0 = stackIndex - 1;
  return result;
}

function ProcessInstanceRef(){
}

_ = ProcessInstanceRef.prototype = new Object_0;
_.equals$ = equals_35;
_.getClass$ = getClass_642;
_.hashCode$ = hashCode_36;
_.typeId$ = 421;
_.definitionId = null;
_.endDate = null;
_.endResult = null;
_.id_0 = null;
_.lifecycle = null;
_.rootToken = null;
_.startDate = null;
_.suspended = false;
function $ProcessInstanceRef$IllegalTransitionException(this$static, current, next){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ProcessInstanceRef$IllegalTransitionException;
  $location_0[stackIndex] = 'StackTraceCreator.java:' + '366' , $fillInStackTrace_1(this$static);
  $location_0[stackIndex] = 'Throwable.java:' + '53' , this$static.detailMessage = 'Illegal transition current ' + current + ' next ' + next;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_643(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_643;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_model_ProcessInstanceRef$IllegalTransitionException_2_classLit;
}

function ProcessInstanceRef$IllegalTransitionException(){
}

_ = ProcessInstanceRef$IllegalTransitionException.prototype = new IllegalArgumentException;
_.getClass$ = getClass_643;
_.typeId$ = 422;
function $ProcessInstanceRef$Lifecycle(this$static, instance, current, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ProcessInstanceRef$Lifecycle;
  $location_0[stackIndex] = 'ProcessInstanceRef.java:' + '189' , this$static.this$0 = this$0;
  $location_0[stackIndex] = 'ProcessInstanceRef.java:' + '191' , this$static.instance = instance;
  $location_0[stackIndex] = 'ProcessInstanceRef.java:' + '192' , this$static.current = current;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $transitionTo(this$static, next){
  var nextLifecycle, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $transitionTo;
  $location_0[stackIndex] = 'ProcessInstanceRef.java:' + '197' , nextLifecycle = null;
  switch (next.ordinal) {
    case 1:
      if (($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '45' , $clinit_950() , RUNNING) == this$static.current) {
        nextLifecycle = $ProcessInstanceRef$Lifecycle(($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '204' , new ProcessInstanceRef$Lifecycle), this$static.instance, next, this$static.this$0);
        $location_0[stackIndex] = 'ProcessInstanceRef.java:' + '205' , this$static.instance.suspended = true;
        break;
      }
       else {
        throw $ProcessInstanceRef$IllegalTransitionException(($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '210' , new ProcessInstanceRef$IllegalTransitionException), this$static.current, next);
      }

    case 2:
      if (($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '45' , $clinit_950() , RUNNING) == this$static.current || SUSPENDED == this$static.current) {
        nextLifecycle = $ProcessInstanceRef$Lifecycle(($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '215' , new ProcessInstanceRef$Lifecycle), this$static.instance, next, this$static.this$0);
        $location_0[stackIndex] = 'ProcessInstanceRef.java:' + '216' , this$static.instance.suspended = false;
        this$static.instance.endDate = $Date(($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '217' , new Date_1));
        break;
      }
       else {
        throw $ProcessInstanceRef$IllegalTransitionException(($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '222' , new ProcessInstanceRef$IllegalTransitionException), this$static.current, next);
      }

    case 0:
      if (($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '45' , $clinit_950() , SUSPENDED) == this$static.current) {
        nextLifecycle = $ProcessInstanceRef$Lifecycle(($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '227' , new ProcessInstanceRef$Lifecycle), this$static.instance, next, this$static.this$0);
        $location_0[stackIndex] = 'ProcessInstanceRef.java:' + '228' , this$static.instance.suspended = false;
        break;
      }
       else {
        throw $ProcessInstanceRef$IllegalTransitionException(($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '233' , new ProcessInstanceRef$IllegalTransitionException), this$static.current, next);
      }

    default:throw $ProcessInstanceRef$IllegalTransitionException(($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '236' , new ProcessInstanceRef$IllegalTransitionException), this$static.current, next);
  }
  $stackDepth_0 = stackIndex - 1;
  return nextLifecycle;
}

function equals_36(o){
  var lifecycle, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = equals_36;
  if (this === (o == null?null:o)) {
    $stackDepth_0 = stackIndex - 1;
    return true;
  }
  if (o == null || Lorg_jboss_bpm_console_client_model_ProcessInstanceRef$Lifecycle_2_classLit != (o.typeMarker$ == nullMethod || o.typeId$ == 2?($location_0[stackIndex] = 'JavaScriptObject.java:' + '28' , o.getClass$()):Lcom_google_gwt_core_client_JavaScriptObject_2_classLit)) {
    $stackDepth_0 = stackIndex - 1;
    return false;
  }
  lifecycle = ($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '253' , dynamicCast(o, 233));
  if (this.current != lifecycle.current) {
    $stackDepth_0 = stackIndex - 1;
    return false;
  }
  $stackDepth_0 = stackIndex - 1;
  return true;
}

function getClass_644(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_644;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_model_ProcessInstanceRef$Lifecycle_2_classLit;
}

function hashCode_37(){
  var result, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = hashCode_37;
  $location_0[stackIndex] = 'ProcessInstanceRef.java:' + '263' , result = this.current?($location_0[stackIndex] = 'Object.java:' + '67' , getHashCode(this.current)):0;
  $stackDepth_0 = stackIndex - 1;
  return result;
}

function ProcessInstanceRef$Lifecycle(){
}

_ = ProcessInstanceRef$Lifecycle.prototype = new Object_0;
_.equals$ = equals_36;
_.getClass$ = getClass_644;
_.hashCode$ = hashCode_37;
_.typeId$ = 423;
_.current = null;
_.instance = null;
_.this$0 = null;
function $clinit_949(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_949;
  $location_0[stackIndex] = 'ProcessInstanceRef.java:' + '50' , $clinit_949 = nullMethod;
  $location_0[stackIndex] = 'ProcessInstanceRef.java:' + '50' , COMPLETED = $ProcessInstanceRef$RESULT(($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '1' , new ProcessInstanceRef$RESULT), 'COMPLETED', 0);
  $location_0[stackIndex] = 'ProcessInstanceRef.java:' + '50' , FAILED = $ProcessInstanceRef$RESULT(($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '1' , new ProcessInstanceRef$RESULT), 'FAILED', 1);
  $location_0[stackIndex] = 'ProcessInstanceRef.java:' + '50' , ERROR_0 = $ProcessInstanceRef$RESULT(($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '1' , new ProcessInstanceRef$RESULT), 'ERROR', 2);
  $location_0[stackIndex] = 'ProcessInstanceRef.java:' + '50' , EXITED = $ProcessInstanceRef$RESULT(($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '1' , new ProcessInstanceRef$RESULT), 'EXITED', 3);
  $location_0[stackIndex] = 'ProcessInstanceRef.java:' + '50' , OBSOLETE = $ProcessInstanceRef$RESULT(($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '1' , new ProcessInstanceRef$RESULT), 'OBSOLETE', 4);
  $stackDepth_0 = stackIndex - 1;
}

function $ProcessInstanceRef$RESULT(this$static, enum$name, enum$ordinal){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ProcessInstanceRef$RESULT;
  $location_0[stackIndex] = 'ProcessInstanceRef.java:' + '50' , $clinit_949();
  $location_0[stackIndex] = 'Enum.java:' + '76' , this$static.name_0 = enum$name;
  $location_0[stackIndex] = 'Enum.java:' + '77' , this$static.ordinal = enum$ordinal;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_645(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_645;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_model_ProcessInstanceRef$RESULT_2_classLit;
}

function values_25(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = values_25;
  $location_0[stackIndex] = 'ProcessInstanceRef.java:' + '50' , $clinit_949();
  returnTemp = initValues(_3Lorg_jboss_bpm_console_client_model_ProcessInstanceRef$RESULT_2_classLit, 715, 109, [COMPLETED, FAILED, ERROR_0, EXITED, OBSOLETE]);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function ProcessInstanceRef$RESULT(){
}

_ = ProcessInstanceRef$RESULT.prototype = new Enum;
_.getClass$ = getClass_645;
_.typeId$ = 424;
var COMPLETED, ERROR_0, EXITED, FAILED, OBSOLETE;
function $clinit_950(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_950;
  $location_0[stackIndex] = 'ProcessInstanceRef.java:' + '45' , $clinit_950 = nullMethod;
  $location_0[stackIndex] = 'ProcessInstanceRef.java:' + '45' , RUNNING = $ProcessInstanceRef$STATE(($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '1' , new ProcessInstanceRef$STATE), 'RUNNING', 0);
  $location_0[stackIndex] = 'ProcessInstanceRef.java:' + '45' , SUSPENDED = $ProcessInstanceRef$STATE(($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '1' , new ProcessInstanceRef$STATE), 'SUSPENDED', 1);
  $location_0[stackIndex] = 'ProcessInstanceRef.java:' + '45' , ENDED = $ProcessInstanceRef$STATE(($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '1' , new ProcessInstanceRef$STATE), 'ENDED', 2);
  $stackDepth_0 = stackIndex - 1;
}

function $ProcessInstanceRef$STATE(this$static, enum$name, enum$ordinal){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ProcessInstanceRef$STATE;
  $location_0[stackIndex] = 'ProcessInstanceRef.java:' + '45' , $clinit_950();
  $location_0[stackIndex] = 'Enum.java:' + '76' , this$static.name_0 = enum$name;
  $location_0[stackIndex] = 'Enum.java:' + '77' , this$static.ordinal = enum$ordinal;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_646(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_646;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_model_ProcessInstanceRef$STATE_2_classLit;
}

function values_26(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = values_26;
  $location_0[stackIndex] = 'ProcessInstanceRef.java:' + '45' , $clinit_950();
  returnTemp = initValues(_3Lorg_jboss_bpm_console_client_model_ProcessInstanceRef$STATE_2_classLit, 716, 110, [RUNNING, SUSPENDED, ENDED]);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function ProcessInstanceRef$STATE(){
}

_ = ProcessInstanceRef$STATE.prototype = new Enum;
_.getClass$ = getClass_646;
_.typeId$ = 425;
var ENDED, RUNNING, SUSPENDED;
function $StringRef(this$static, value){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $StringRef;
  $location_0[stackIndex] = 'StringRef.java:' + '17' , this$static.value_0 = value;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_648(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_648;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_model_StringRef_2_classLit;
}

function StringRef(){
}

_ = StringRef.prototype = new Object_0;
_.getClass$ = getClass_648;
_.typeId$ = 426;
_.value_0 = null;
function $TokenReference(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $TokenReference;
  this$static.children = $ArrayList(($location_0[stackIndex] = 'TokenReference.java:' + '39' , new ArrayList));
  (new ArrayList).array = ($location_0[stackIndex] = 'ArrayList.java:' + '64' , initDim(_3Ljava_lang_Object_2_classLit, 689, 0, 0, 0));
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_651(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_651;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_model_TokenReference_2_classLit;
}

function TokenReference(){
}

_ = TokenReference.prototype = new Object_0;
_.getClass$ = getClass_651;
_.typeId$ = 429;
_.canBeSignaled = false;
_.currentNodeName = null;
_.id_0 = null;
_.name_0 = null;
function $clinit_956(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_956;
  $location_0[stackIndex] = 'ActivityDiagramView.java:' + '39' , $clinit_956 = nullMethod;
  $location_0[stackIndex] = 'ActivityDiagramView.java:' + '43' , ID_2 = Lorg_jboss_bpm_console_client_process_ActivityDiagramView_2_classLit.typeName;
  $stackDepth_0 = stackIndex - 1;
}

function $ActivityDiagramView(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ActivityDiagramView;
  $location_0[stackIndex] = 'ActivityDiagramView.java:' + '51' , $clinit_956();
  $ScrollLayoutPanel_0(this$static, ($location_0[stackIndex] = 'ScrollLayoutPanel.java:' + '52' , $BoxLayout_1(($location_0[stackIndex] = 'ScrollLayoutPanel.java:' + '52' , new BoxLayout), ($location_0[stackIndex] = 'BoxLayout.java:' + '170' , $clinit_796() , VERTICAL))));
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $update_2(this$static, event_0){
  var activeNodeInfo, activeNodeInfo$iterator, activeNodeInfos, html, imageUrl, imageUrlNoCache, s, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $update_2;
  $location_0[stackIndex] = 'ActivityDiagramView.java:' + '65' , activeNodeInfos = event_0.activeNodeInfo;
  $location_0[stackIndex] = 'ActivityDiagramView.java:' + '66' , imageUrl = event_0.imageUrl;
  $location_0[stackIndex] = 'ActivityDiagramView.java:' + '67' , imageUrlNoCache = imageUrl + '?' + toString_18(($location_0[stackIndex] = 'System.java:' + '93' , fromDouble(($location_0[stackIndex] = 'System.java:' + '126' , new Date).getTime())));
  $location_0[stackIndex] = 'ConsoleLog.java:' + '53' , $clinit_24();
  $location_0[stackIndex] = 'Log.java:' + '150' , $debug(impl, 'Getting image from ' + imageUrlNoCache, null);
  $location_0[stackIndex] = 'ActivityDiagramView.java:' + '71' , $clear_1(this$static);
  $location_0[stackIndex] = 'ActivityDiagramView.java:' + '73' , s = '<div style=\'width:1024px; height:768px; background-color:#ffffff;\'><div id="imageContainer" style="position:relative;top:-1;left:-1;"><img src="' + imageUrlNoCache + '" style="position:absolute;top:0;left:0" />';
  for ($location_0[stackIndex] = 'ActivityDiagramView.java:' + '77' , activeNodeInfo$iterator = $AbstractList$IteratorImpl(($location_0[stackIndex] = 'AbstractList.java:' + '278' , new AbstractList$IteratorImpl), activeNodeInfos); activeNodeInfo$iterator.i < ($location_0[stackIndex] = 'AbstractList.java:' + '38' , activeNodeInfo$iterator.this$0.size_1());) {
    activeNodeInfo = dynamicCast(($location_0[stackIndex] = 'ActivityDiagramView.java:' + '77' , $next_6(activeNodeInfo$iterator)), 234);
    $location_0[stackIndex] = 'ActivityDiagramView.java:' + '79' , s += '<div class="bpm-graphView-activityImage" style="position:absolute;top:' + (activeNodeInfo.activeNode.y - 8) + 'px;left:' + (activeNodeInfo.activeNode.x - 8) + 'px;width:50px;height:50px; z-index:1000;background-image: url(images/icons/play_red_big.png);background-repeat:no-repeat;"><\/div>';
  }
  $location_0[stackIndex] = 'ActivityDiagramView.java:' + '81' , s += '<\/div><\/div>';
  html = $HTML_0(($location_0[stackIndex] = 'ActivityDiagramView.java:' + '84' , new HTML), s);
  $location_0[stackIndex] = 'LayoutPanel.java:' + '391' , $insert_0(this$static, html, this$static.children.size_0);
  $location_0[stackIndex] = 'LayoutPanel.java:' + '600' , $invalidate_1(this$static, null);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_652(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_652;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_ActivityDiagramView_2_classLit;
}

function setController_2(controller){
}

function ActivityDiagramView(){
}

_ = ActivityDiagramView.prototype = new ScrollLayoutPanel;
_.getClass$ = getClass_652;
_.setController = setController_2;
_.typeId$ = 430;
var ID_2;
function $clinit_957(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_957;
  $location_0[stackIndex] = 'ClearInstancesAction.java:' + '30' , $clinit_957 = nullMethod;
  $location_0[stackIndex] = 'ClearInstancesAction.java:' + '32' , ID_3 = Lorg_jboss_bpm_console_client_process_ClearInstancesAction_2_classLit.typeName;
  $stackDepth_0 = stackIndex - 1;
}

function execute_33(controller, o){
  var view, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = execute_33;
  view = ($location_0[stackIndex] = 'ClearInstancesAction.java:' + '36' , dynamicCast(dynamicCast(($location_0[stackIndex] = 'Controller.java:' + '67' , $get_7(controller.views, ($location_0[stackIndex] = 'InstanceListView.java:' + '75' , $clinit_979() , ID_10))), 168), 235));
  $location_0[stackIndex] = 'InstanceListView.java:' + '462' , view.currentDefinition = null;
  view.cachedInstances = $ArrayList(($location_0[stackIndex] = 'InstanceListView.java:' + '463' , new ArrayList));
  $location_0[stackIndex] = 'InstanceListView.java:' + '464' , $renderUpdate(view);
  $location_0[stackIndex] = 'Element.java:' + '638' , view.startBtn.element['disabled'] = !false;
  view.terminateBtn.element['disabled'] = !false;
  view.deleteBtn.element['disabled'] = !false;
  view.signalBtn.element['disabled'] = !false;
  view.refreshBtn.element['disabled'] = !false;
  $stackDepth_0 = stackIndex - 1;
}

function getClass_653(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_653;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_ClearInstancesAction_2_classLit;
}

function ClearInstancesAction(){
}

_ = ClearInstancesAction.prototype = new Object_0;
_.execute_2 = execute_33;
_.getClass$ = getClass_653;
_.typeId$ = 431;
var ID_3;
function $clinit_958(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_958;
  $location_0[stackIndex] = 'DefinitionListView.java:' + '61' , $clinit_958 = nullMethod;
  $location_0[stackIndex] = 'DefinitionListView.java:' + '63' , ID_4 = Lorg_jboss_bpm_console_client_process_DefinitionListView_2_classLit.typeName;
  $stackDepth_0 = stackIndex - 1;
}

function $initialize(this$static){
  var clickHandler, dropBox, filterPanel, toolBar, toolBox, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $initialize;
  if (!this$static.isInitialized) {
    this$static.definitionList = $MosaicPanel_0(($location_0[stackIndex] = 'DefinitionListView.java:' + '129' , new MosaicPanel), ($location_0[stackIndex] = 'DefinitionListView.java:' + '129' , $BoxLayout_1(new BoxLayout, ($location_0[stackIndex] = 'BoxLayout.java:' + '170' , $clinit_796() , VERTICAL))));
    $location_0[stackIndex] = 'LayoutPanel.java:' + '289' , setStyleAttribute_0(this$static.definitionList.element, 'padding', '0px');
    $location_0[stackIndex] = 'LayoutPanel.java:' + '297' , this$static.definitionList.widgetSpacing = 0;
    toolBox = $MosaicPanel(($location_0[stackIndex] = 'DefinitionListView.java:' + '135' , new MosaicPanel));
    $location_0[stackIndex] = 'LayoutPanel.java:' + '289' , setStyleAttribute_0(toolBox.element, 'padding', '0px');
    $location_0[stackIndex] = 'LayoutPanel.java:' + '297' , toolBox.widgetSpacing = 0;
    $setLayout_0(toolBox, $BoxLayout_1(($location_0[stackIndex] = 'DefinitionListView.java:' + '138' , new BoxLayout), HORIZONTAL));
    toolBar = $ToolBar(($location_0[stackIndex] = 'DefinitionListView.java:' + '141' , new ToolBar));
    clickHandler = $DefinitionListView$2(($location_0[stackIndex] = 'DefinitionListView.java:' + '142' , new DefinitionListView$2), this$static);
    $location_0[stackIndex] = 'DefinitionListView.java:' + '150' , $add_28(toolBar, $Button_2(($location_0[stackIndex] = 'DefinitionListView.java:' + '151' , new Button), 'Refresh', clickHandler));
    $add_26(toolBox, toolBar, ($location_0[stackIndex] = 'DefinitionListView.java:' + '155' , $BoxLayoutData_4(($location_0[stackIndex] = 'DefinitionListView.java:' + '155' , new BoxLayoutData), ($location_0[stackIndex] = 'BoxLayoutData.java:' + '30' , $clinit_798() , HORIZONTAL_0))));
    filterPanel = $MosaicPanel_0(($location_0[stackIndex] = 'DefinitionListView.java:' + '158' , new MosaicPanel), $BoxLayout_1(new BoxLayout, VERTICAL));
    $location_0[stackIndex] = 'Element.java:' + '688' , filterPanel.element['className'] = 'mosaic-ToolBar';
    dropBox = $ListBox_0(($location_0[stackIndex] = 'DefinitionListView.java:' + '160' , new ListBox), false);
    $location_0[stackIndex] = 'Element.java:' + '688' , dropBox.element['className'] = 'bpm-operation-ui';
    $location_0[stackIndex] = 'ListBox.java:' + '215' , $insertItem(dropBox, 'All', 'All', -1);
    $insertItem(dropBox, 'Active', 'Active', -1);
    $insertItem(dropBox, 'Retired', 'Retired', -1);
    $location_0[stackIndex] = 'ListBox.java:' + '104' , $addDomHandler(dropBox, $DefinitionListView$3(($location_0[stackIndex] = 'DefinitionListView.java:' + '166' , new DefinitionListView$3), this$static, dropBox), ($location_0[stackIndex] = 'ListBox.java:' + '104' , $clinit_129() , ($location_0[stackIndex] = 'ChangeEvent.java:' + '27' , $clinit_129()) , TYPE_0));
    $location_0[stackIndex] = 'LayoutPanel.java:' + '391' , $insert_0(filterPanel, dropBox, filterPanel.children.size_0);
    $add_26(toolBox, filterPanel, $BoxLayoutData_4(($location_0[stackIndex] = 'DefinitionListView.java:' + '190' , new BoxLayoutData), VERTICAL_0));
    $add_26(this$static.definitionList, toolBox, $BoxLayoutData_4(($location_0[stackIndex] = 'DefinitionListView.java:' + '192' , new BoxLayoutData), HORIZONTAL_0));
    $add_26(this$static.definitionList, this$static.listBox, $BoxLayoutData_4(($location_0[stackIndex] = 'DefinitionListView.java:' + '193' , new BoxLayoutData), BOTH));
    this$static.pagingPanel = ($location_0[stackIndex] = 'DefinitionListView.java:' + '194' , $PagingPanel(($location_0[stackIndex] = 'DefinitionListView.java:' + '194' , new PagingPanel), $DefinitionListView$4(($location_0[stackIndex] = 'DefinitionListView.java:' + '195' , new DefinitionListView$4), this$static)));
    $add_26(this$static.definitionList, this$static.pagingPanel, $BoxLayoutData_4(($location_0[stackIndex] = 'DefinitionListView.java:' + '208' , new BoxLayoutData), HORIZONTAL_0));
    $location_0[stackIndex] = 'DefinitionListView.java:' + '222' , $add_25(this$static.panel, this$static.definitionList);
    $location_0[stackIndex] = 'DefinitionListView.java:' + '225' , $clinit_1091();
    $location_0[stackIndex] = 'DefinitionListView.java:' + '225' , $subscribe(bus_0, 'appContext.model.listener', $DefinitionListView$5(($location_0[stackIndex] = 'DefinitionListView.java:' + '226' , new DefinitionListView$5), this$static));
    $location_0[stackIndex] = 'DefinitionListView.java:' + '240' , this$static.isInitialized = true;
  }
  $stackDepth_0 = stackIndex - 1;
}

function $provideWidget_1(this$static, callback){
  var controller, t, listBox, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $provideWidget_1;
  this$static.panel = $MosaicPanel(($location_0[stackIndex] = 'DefinitionListView.java:' + '86' , new MosaicPanel));
  $location_0[stackIndex] = 'LayoutPanel.java:' + '297' , this$static.panel.widgetSpacing = 0;
  $location_0[stackIndex] = 'LayoutPanel.java:' + '289' , setStyleAttribute_0(this$static.panel.element, 'padding', '0px');
  $location_0[stackIndex] = 'DefinitionListView.java:' + '90' , this$static.listBox = ($location_0[stackIndex] = 'DefinitionListView.java:' + '266' , listBox = ($location_0[stackIndex] = 'DefinitionListView.java:' + '267' , $ListBox_1(($location_0[stackIndex] = 'DefinitionListView.java:' + '267' , new ListBox_0), ($location_0[stackIndex] = 'DefinitionListView.java:' + '268' , initValues(_3Ljava_lang_String_2_classLit, 692, 1, ['<b>Process<\/b>', 'v.'])))) , ($location_0[stackIndex] = 'Element.java:' + '134' , listBox.element.focus()) , ($location_0[stackIndex] = 'ListBox.java:' + '716' , listBox.cellRenderer = ($location_0[stackIndex] = 'DefinitionListView.java:' + '275' , new DefinitionListView$7)) , ($location_0[stackIndex] = 'ListBox.java:' + '812' , $setMinimumColumnWidth(listBox.scrollTable, 0, 190)) , ($location_0[stackIndex] = 'ListBox.java:' + '725' , $setColumnResizePolicy_0(listBox.scrollTable, ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '823' , $clinit_830() , MULTI_CELL))) , ($location_0[stackIndex] = 'SelectionGrid.java:' + '248' , $addHandler_1(listBox.scrollTable.dataTable, $DefinitionListView$8(($location_0[stackIndex] = 'DefinitionListView.java:' + '306' , new DefinitionListView$8), this$static, listBox), (!TYPE_24 && (TYPE_24 = $GwtEvent$Type(($location_0[stackIndex] = 'RowSelectionEvent.java:' + '81' , new GwtEvent$Type))) , TYPE_24))) , listBox);
  controller = dynamicCast(($location_0[stackIndex] = 'DefinitionListView.java:' + '91' , get_16(Lcom_mvc4g_client_Controller_2_classLit)), 167);
  $location_0[stackIndex] = 'DefinitionListView.java:' + '92' , $addView(controller, ID_4, this$static);
  $location_0[stackIndex] = 'Controller.java:' + '106' , $put_0(controller.actions, ($location_0[stackIndex] = 'UpdateInstancesAction.java:' + '47' , $clinit_1010() , ID_19), $UpdateInstancesAction(($location_0[stackIndex] = 'DefinitionListView.java:' + '94' , new UpdateInstancesAction)));
  $location_0[stackIndex] = 'Controller.java:' + '106' , $put_0(controller.actions, ($location_0[stackIndex] = 'StartNewInstanceAction.java:' + '40' , $clinit_1005() , ID_14), $StartNewInstanceAction(($location_0[stackIndex] = 'DefinitionListView.java:' + '95' , new StartNewInstanceAction)));
  $location_0[stackIndex] = 'Controller.java:' + '106' , $put_0(controller.actions, ($location_0[stackIndex] = 'StateChangeAction.java:' + '44' , $clinit_1006() , ID_15), $StateChangeAction(($location_0[stackIndex] = 'DefinitionListView.java:' + '96' , new StateChangeAction)));
  $location_0[stackIndex] = 'Controller.java:' + '106' , $put_0(controller.actions, ($location_0[stackIndex] = 'DeleteDefinitionAction.java:' + '37' , $clinit_967() , ID_5), $DeleteDefinitionAction(($location_0[stackIndex] = 'DefinitionListView.java:' + '97' , new DeleteDefinitionAction)));
  $location_0[stackIndex] = 'Controller.java:' + '106' , $put_0(controller.actions, ($location_0[stackIndex] = 'DeleteInstanceAction.java:' + '42' , $clinit_968() , ID_6), $DeleteInstanceAction(($location_0[stackIndex] = 'DefinitionListView.java:' + '98' , new DeleteInstanceAction)));
  $location_0[stackIndex] = 'Controller.java:' + '106' , $put_0(controller.actions, ($location_0[stackIndex] = 'UpdateDefinitionsAction.java:' + '48' , $clinit_1007() , ID_16), $UpdateDefinitionsAction(($location_0[stackIndex] = 'DefinitionListView.java:' + '99' , new UpdateDefinitionsAction)));
  $location_0[stackIndex] = 'DefinitionListView.java:' + '101' , $initialize(this$static);
  t = $DefinitionListView$1(($location_0[stackIndex] = 'DefinitionListView.java:' + '103' , new DefinitionListView$1), controller);
  $location_0[stackIndex] = 'DefinitionListView.java:' + '114' , $schedule(t, 500);
  $location_0[stackIndex] = 'DefinitionListView.java:' + '116' , callback.onSuccess(this$static.panel);
  $stackDepth_0 = stackIndex - 1;
}

function $renderFiltered(this$static){
  var def, def$iterator, model, showSuspended, tmp, model_0, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $renderFiltered;
  if (this$static.definitions) {
    $location_0[stackIndex] = 'DefinitionListView.java:' + '345' , model_0 = ($location_0[stackIndex] = 'DefinitionListView.java:' + '346' , $getModel(this$static.listBox));
    $location_0[stackIndex] = 'DefaultListModel.java:' + '61' , $clear_5(model_0.list);
    $handleEvent(this$static.controller, ($location_0[stackIndex] = 'DefinitionListView.java:' + '351' , $Event(($location_0[stackIndex] = 'DefinitionListView.java:' + '351' , new Event_0), ($location_0[stackIndex] = 'ClearInstancesAction.java:' + '32' , $clinit_957() , ID_3), null)));
    $location_0[stackIndex] = 'DefinitionListView.java:' + '378' , model = ($location_0[stackIndex] = 'DefinitionListView.java:' + '379' , $getModel(this$static.listBox));
    tmp = $ArrayList(($location_0[stackIndex] = 'DefinitionListView.java:' + '381' , new ArrayList));
    for (def$iterator = ($location_0[stackIndex] = 'DefinitionListView.java:' + '382' , this$static.definitions.iterator_0()); $location_0[stackIndex] = 'DefinitionListView.java:' + '382' , def$iterator.hasNext();) {
      def = dynamicCast(def$iterator.next_0(), 231);
      if (10 == this$static.currentFilter) {
        setCheck(tmp.array, ($location_0[stackIndex] = 'ArrayList.java:' + '95' , tmp.size_0++), def);
      }
       else {
        $location_0[stackIndex] = 'DefinitionListView.java:' + '390' , showSuspended = 30 == this$static.currentFilter;
        def.suspended == showSuspended && setCheck(tmp.array, ($location_0[stackIndex] = 'ArrayList.java:' + '95' , tmp.size_0++), def);
      }
    }
    for (def$iterator = ($location_0[stackIndex] = 'DefinitionListView.java:' + '396' , $trim_0(this$static.pagingPanel, tmp)).iterator_0(); $location_0[stackIndex] = 'DefinitionListView.java:' + '396' , def$iterator.hasNext();) {
      def = dynamicCast(def$iterator.next_0(), 231);
      $location_0[stackIndex] = 'DefaultListModel.java:' + '45' , $add_6(model.list, def);
    }
    ($location_0[stackIndex] = 'DefinitionListView.java:' + '399' , $getSelectedIndex_0(this$static.listBox)) != -1 && $setItemSelected_0(this$static.listBox, ($location_0[stackIndex] = 'DefinitionListView.java:' + '400' , $getSelectedIndex_0(this$static.listBox)), false);
  }
  $stackDepth_0 = stackIndex - 1;
}

function $update_4(this$static, data){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $update_4;
  this$static.definitions = dynamicCast(($location_0[stackIndex] = 'DefinitionListView.java:' + '362' , data[0]), 171);
  $location_0[stackIndex] = 'DefinitionListView.java:' + '363' , $reset(this$static.pagingPanel);
  $location_0[stackIndex] = 'DefinitionListView.java:' + '364' , $renderFiltered(this$static);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_654(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_654;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_DefinitionListView_2_classLit;
}

function setController_3(controller){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = setController_3;
  $location_0[stackIndex] = 'DefinitionListView.java:' + '340' , this.controller = controller;
  $stackDepth_0 = stackIndex - 1;
}

function setLoading(isLoading){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = setLoading;
  $location_0[stackIndex] = 'DefinitionListView.java:' + '369' , on(this.panel, isLoading);
  $stackDepth_0 = stackIndex - 1;
}

_ = DefinitionListView.prototype;
_.getClass$ = getClass_654;
_.setController = setController_3;
_.setLoading = setLoading;
var ID_4;
function $clinit_959(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_959;
  $location_0[stackIndex] = 'DefinitionListView.java:' + '103' , $clinit_959 = nullMethod;
  $clinit_43();
  $stackDepth_0 = stackIndex - 1;
}

function $DefinitionListView$1(this$static, val$controller){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $DefinitionListView$1;
  $location_0[stackIndex] = 'DefinitionListView.java:' + '103' , $clinit_959();
  this$static.val$controller = val$controller;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_655(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_655;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_DefinitionListView$1_2_classLit;
}

function run_18(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = run_18;
  $location_0[stackIndex] = 'DefinitionListView.java:' + '108' , $handleEvent(this.val$controller, ($location_0[stackIndex] = 'DefinitionListView.java:' + '109' , $Event(($location_0[stackIndex] = 'DefinitionListView.java:' + '109' , new Event_0), ($location_0[stackIndex] = 'UpdateDefinitionsAction.java:' + '48' , $clinit_1007() , ID_16), null)));
  $stackDepth_0 = stackIndex - 1;
}

function DefinitionListView$1(){
}

_ = DefinitionListView$1.prototype = new Timer;
_.getClass$ = getClass_655;
_.run = run_18;
_.typeId$ = 433;
_.val$controller = null;
function $DefinitionListView$2(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $DefinitionListView$2;
  $location_0[stackIndex] = 'DefinitionListView.java:' + '142' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_656(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_656;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_DefinitionListView$2_2_classLit;
}

function onClick_15(clickEvent){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClick_15;
  $location_0[stackIndex] = 'DefinitionListView.java:' + '246' , addCommand($DefinitionListView$6(($location_0[stackIndex] = 'DefinitionListView.java:' + '247' , new DefinitionListView$6), this.this$0));
  $stackDepth_0 = stackIndex - 1;
}

function DefinitionListView$2(){
}

_ = DefinitionListView$2.prototype = new Object_0;
_.getClass$ = getClass_656;
_.onClick = onClick_15;
_.typeId$ = 434;
_.this$0 = null;
function $DefinitionListView$3(this$static, this$0, val$dropBox){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $DefinitionListView$3;
  $location_0[stackIndex] = 'DefinitionListView.java:' + '166' , this$static.this$0 = this$0;
  this$static.val$dropBox = val$dropBox;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_657(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_657;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_DefinitionListView$3_2_classLit;
}

function onChange_0(changeEvent){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onChange_0;
  switch (this.val$dropBox.element.selectedIndex) {
    case 0:
      $location_0[stackIndex] = 'DefinitionListView.java:' + '173' , this.this$0.currentFilter = 10;
      break;
    case 1:
      $location_0[stackIndex] = 'DefinitionListView.java:' + '176' , this.this$0.currentFilter = 20;
      break;
    case 2:
      $location_0[stackIndex] = 'DefinitionListView.java:' + '179' , this.this$0.currentFilter = 30;
      break;
    default:throw $IllegalArgumentException_0(($location_0[stackIndex] = 'DefinitionListView.java:' + '182' , new IllegalArgumentException), 'No such index');
  }
  $location_0[stackIndex] = 'DefinitionListView.java:' + '185' , $renderFiltered(this.this$0);
  $stackDepth_0 = stackIndex - 1;
}

function DefinitionListView$3(){
}

_ = DefinitionListView$3.prototype = new Object_0;
_.getClass$ = getClass_657;
_.onChange = onChange_0;
_.typeId$ = 435;
_.this$0 = null;
_.val$dropBox = null;
function $DefinitionListView$4(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $DefinitionListView$4;
  $location_0[stackIndex] = 'DefinitionListView.java:' + '195' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function ffw(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = ffw;
  $location_0[stackIndex] = 'DefinitionListView.java:' + '204' , $renderFiltered(this.this$0);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_658(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_658;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_DefinitionListView$4_2_classLit;
}

function rev(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = rev;
  $location_0[stackIndex] = 'DefinitionListView.java:' + '199' , $renderFiltered(this.this$0);
  $stackDepth_0 = stackIndex - 1;
}

function DefinitionListView$4(){
}

_ = DefinitionListView$4.prototype = new Object_0;
_.ffw = ffw;
_.getClass$ = getClass_658;
_.rev = rev;
_.typeId$ = 0;
_.this$0 = null;
function $DefinitionListView$5(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $DefinitionListView$5;
  $location_0[stackIndex] = 'DefinitionListView.java:' + '226' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function callback_1(message){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = callback_1;
  ($location_0[stackIndex] = 'ModelCommands.java:' + '24' , $clinit_927() , ($location_0[stackIndex] = 'ModelCommands.java:' + '24' , valueOf_0(enum$map, ($location_0[stackIndex] = 'DefinitionListView.java:' + '230' , message.getCommandType())))).ordinal == 1 && $equals_4(dynamicCast(($location_0[stackIndex] = 'DefinitionListView.java:' + '233' , message.get_2(Ljava_lang_String_2_classLit, ($location_0[stackIndex] = 'ModelParts.java:' + '27' , $clinit_928() , CLASS))), 1), 'deploymentModel') && ($location_0[stackIndex] = 'DefinitionListView.java:' + '246' , addCommand($DefinitionListView$6(($location_0[stackIndex] = 'DefinitionListView.java:' + '247' , new DefinitionListView$6), this.this$0)));
  $stackDepth_0 = stackIndex - 1;
}

function getClass_659(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_659;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_DefinitionListView$5_2_classLit;
}

function DefinitionListView$5(){
}

_ = DefinitionListView$5.prototype = new Object_0;
_.callback_0 = callback_1;
_.getClass$ = getClass_659;
_.typeId$ = 436;
_.this$0 = null;
function $DefinitionListView$6(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $DefinitionListView$6;
  $location_0[stackIndex] = 'DefinitionListView.java:' + '247' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function execute_34(){
  var model, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = execute_34;
  $location_0[stackIndex] = 'DefinitionListView.java:' + '251' , model = ($location_0[stackIndex] = 'DefinitionListView.java:' + '252' , $getModel(this.this$0.listBox));
  $location_0[stackIndex] = 'DefaultListModel.java:' + '61' , $clear_5(model.list);
  $location_0[stackIndex] = 'DefinitionListView.java:' + '256' , $handleEvent(this.this$0.controller, ($location_0[stackIndex] = 'DefinitionListView.java:' + '257' , $Event(($location_0[stackIndex] = 'DefinitionListView.java:' + '257' , new Event_0), ($location_0[stackIndex] = 'UpdateDefinitionsAction.java:' + '48' , $clinit_1007() , ID_16), null)));
  $stackDepth_0 = stackIndex - 1;
}

function getClass_660(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_660;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_DefinitionListView$6_2_classLit;
}

function DefinitionListView$6(){
}

_ = DefinitionListView$6.prototype = new Object_0;
_.execute = execute_34;
_.getClass$ = getClass_660;
_.typeId$ = 437;
_.this$0 = null;
function $renderCell(listBox, row, column, item){
  var color, name_0, s, text, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $renderCell;
  switch (column) {
    case 0:
      $location_0[stackIndex] = 'DefinitionListView.java:' + '281' , name_0 = item.name_0;
      $location_0[stackIndex] = 'DefinitionListView.java:' + '282' , s = ($location_0[stackIndex] = 'String.java:' + '497' , name_0.indexOf('}')) > 0?($location_0[stackIndex] = 'DefinitionListView.java:' + '283' , $substring_0(name_0, ($location_0[stackIndex] = 'String.java:' + '521' , name_0.lastIndexOf('}')) + 1, name_0.length)):name_0;
      $location_0[stackIndex] = 'DefinitionListView.java:' + '285' , color = item.suspended?'#CCCCCC':'#000000';
      $location_0[stackIndex] = 'DefinitionListView.java:' + '286' , text = '<div style="color:' + color + '">' + s + '<\/div>';
      $setWidget_5(listBox, row, column, $HTML_0(($location_0[stackIndex] = 'DefinitionListView.java:' + '288' , new HTML), text));
      break;
    case 1:
      $location_0[stackIndex] = 'DefinitionListView.java:' + '291' , $setText_5(listBox, row, column, '' + ($location_0[stackIndex] = 'ProcessDefinitionRef.java:' + '81' , toString_18(item.version)));
      break;
    case 2:
      $location_0[stackIndex] = 'DefinitionListView.java:' + '294' , $setText_5(listBox, row, column, '' + item.suspended);
      break;
    default:throw $RuntimeException(($location_0[stackIndex] = 'DefinitionListView.java:' + '297' , new RuntimeException), 'Unexpected column size');
  }
  $stackDepth_0 = stackIndex - 1;
}

function getClass_661(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_661;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_DefinitionListView$7_2_classLit;
}

function renderCell_0(p0, p1, p2, p3){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = renderCell_0;
  $renderCell(p0, p1, p2, ($location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , dynamicCast(p3, 231)));
  $stackDepth_0 = stackIndex - 1;
}

function DefinitionListView$7(){
}

_ = DefinitionListView$7.prototype = new Object_0;
_.getClass$ = getClass_661;
_.renderCell = renderCell_0;
_.typeId$ = 0;
function $DefinitionListView$8(this$static, this$0, val$listBox){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $DefinitionListView$8;
  $location_0[stackIndex] = 'DefinitionListView.java:' + '306' , this$static.this$0 = this$0;
  this$static.val$listBox = val$listBox;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_662(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_662;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_DefinitionListView$8_2_classLit;
}

function onRowSelection(rowSelectionEvent){
  var index, item, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onRowSelection;
  index = ($location_0[stackIndex] = 'DefinitionListView.java:' + '310' , $getSelectedIndex_0(this.val$listBox));
  if (index != -1) {
    item = dynamicCast(($location_0[stackIndex] = 'DefinitionListView.java:' + '313' , $getItem_0(this.val$listBox, index)), 231);
    $location_0[stackIndex] = 'DefinitionListView.java:' + '322' , $handleEvent(this.this$0.controller, ($location_0[stackIndex] = 'DefinitionListView.java:' + '323' , $Event(($location_0[stackIndex] = 'DefinitionListView.java:' + '323' , new Event_0), ($location_0[stackIndex] = 'UpdateInstancesAction.java:' + '47' , $clinit_1010() , ID_19), item)));
  }
  $stackDepth_0 = stackIndex - 1;
}

function DefinitionListView$8(){
}

_ = DefinitionListView$8.prototype = new Object_0;
_.getClass$ = getClass_662;
_.onRowSelection = onRowSelection;
_.typeId$ = 438;
_.this$0 = null;
_.val$listBox = null;
function $clinit_967(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_967;
  $location_0[stackIndex] = 'DeleteDefinitionAction.java:' + '35' , $clinit_967 = nullMethod;
  $location_0[stackIndex] = 'DeleteDefinitionAction.java:' + '37' , ID_5 = Lorg_jboss_bpm_console_client_process_DeleteDefinitionAction_2_classLit.typeName;
  $stackDepth_0 = stackIndex - 1;
}

function $DeleteDefinitionAction(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $DeleteDefinitionAction;
  $location_0[stackIndex] = 'DeleteDefinitionAction.java:' + '35' , $clinit_967();
  dynamicCast(($location_0[stackIndex] = 'AbstractRESTAction.java:' + '44' , get_16(Lorg_jboss_bpm_console_client_ApplicationContext_2_classLit)), 225);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_663(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_663;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_DeleteDefinitionAction_2_classLit;
}

function getId_0(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getId_0;
  $stackDepth_0 = stackIndex - 1;
  return ID_5;
}

function getRequestMethod_0(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getRequestMethod_0;
  returnTemp = ($location_0[stackIndex] = 'RequestBuilder.java:' + '70' , $clinit_213() , POST);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getUrl_2(event_0){
  var procRef, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getUrl_2;
  procRef = ($location_0[stackIndex] = 'DeleteDefinitionAction.java:' + '46' , dynamicCast(event_0, 231));
  returnTemp = $getRemoveDefinitionURL(($location_0[stackIndex] = 'DeleteDefinitionAction.java:' + '47' , getInstance_2() , procRef.id_0));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function handleSuccessfulResponse_0(controller, event_0, response){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = handleSuccessfulResponse_0;
  $location_0[stackIndex] = 'DeleteDefinitionAction.java:' + '58' , $handleEvent(controller, ($location_0[stackIndex] = 'DeleteDefinitionAction.java:' + '59' , $Event(($location_0[stackIndex] = 'DeleteDefinitionAction.java:' + '59' , new Event_0), ($location_0[stackIndex] = 'UpdateDefinitionsAction.java:' + '48' , $clinit_1007() , ID_16), null)));
  $stackDepth_0 = stackIndex - 1;
}

function DeleteDefinitionAction(){
}

_ = DeleteDefinitionAction.prototype = new AbstractRESTAction;
_.getClass$ = getClass_663;
_.getId = getId_0;
_.getRequestMethod = getRequestMethod_0;
_.getUrl_0 = getUrl_2;
_.handleSuccessfulResponse = handleSuccessfulResponse_0;
_.typeId$ = 439;
var ID_5;
function $clinit_968(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_968;
  $location_0[stackIndex] = 'DeleteInstanceAction.java:' + '39' , $clinit_968 = nullMethod;
  $location_0[stackIndex] = 'DeleteInstanceAction.java:' + '42' , ID_6 = Lorg_jboss_bpm_console_client_process_DeleteInstanceAction_2_classLit.typeName;
  $stackDepth_0 = stackIndex - 1;
}

function $DeleteInstanceAction(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $DeleteInstanceAction;
  $location_0[stackIndex] = 'DeleteInstanceAction.java:' + '39' , $clinit_968();
  dynamicCast(($location_0[stackIndex] = 'AbstractRESTAction.java:' + '44' , get_16(Lorg_jboss_bpm_console_client_ApplicationContext_2_classLit)), 225);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_664(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_664;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_DeleteInstanceAction_2_classLit;
}

function getId_1(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getId_1;
  $stackDepth_0 = stackIndex - 1;
  return ID_6;
}

function getRequestMethod_1(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getRequestMethod_1;
  returnTemp = ($location_0[stackIndex] = 'RequestBuilder.java:' + '70' , $clinit_213() , POST);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getUrl_3(event_0){
  var instance, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getUrl_3;
  instance = ($location_0[stackIndex] = 'DeleteInstanceAction.java:' + '51' , dynamicCast(event_0, 232));
  returnTemp = $getInstanceDeleteURL(($location_0[stackIndex] = 'DeleteInstanceAction.java:' + '52' , getInstance_2() , instance.id_0));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function handleError_0(url, t){
  var message, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = handleError_0;
  message = ($location_0[stackIndex] = 'DeleteInstanceAction.java:' + '76' , t.getMessage());
  message = ($location_0[stackIndex] = 'DeleteInstanceAction.java:' + '78' , $replaceFirst(message, 'HTTP \\d*: ', ''));
  $location_0[stackIndex] = 'ConsoleLog.java:' + '41' , $clinit_24();
  $location_0[stackIndex] = 'Log.java:' + '651' , $warn(impl, 'Server reported following warning: ' + message + ' for url ' + url, null);
  $location_0[stackIndex] = 'DeleteInstanceAction.java:' + '81' , $clinit_684();
  $location_0[stackIndex] = 'MessageBox.java:' + '111' , alert_2(($location_0[stackIndex] = 'MessageBox.java:' + '60' , $clinit_693() , ALERT), 'Status information', message);
  $stackDepth_0 = stackIndex - 1;
}

function handlePostError_0(controller, event_0){
  var def, view, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = handlePostError_0;
  view = ($location_0[stackIndex] = 'DeleteInstanceAction.java:' + '86' , dynamicCast(dynamicCast(($location_0[stackIndex] = 'Controller.java:' + '67' , $get_7(controller.views, ($location_0[stackIndex] = 'InstanceListView.java:' + '75' , $clinit_979() , ID_10))), 168), 235));
  $location_0[stackIndex] = 'DeleteInstanceAction.java:' + '87' , def = view.currentDefinition;
  $handleEvent(controller, ($location_0[stackIndex] = 'DeleteInstanceAction.java:' + '90' , $Event(($location_0[stackIndex] = 'DeleteInstanceAction.java:' + '90' , new Event_0), ($location_0[stackIndex] = 'UpdateInstancesAction.java:' + '47' , $clinit_1010() , ID_19), def)));
  $stackDepth_0 = stackIndex - 1;
}

function handleSuccessfulResponse_1(controller, event_0, response){
  var def, view, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = handleSuccessfulResponse_1;
  view = ($location_0[stackIndex] = 'DeleteInstanceAction.java:' + '62' , dynamicCast(dynamicCast(($location_0[stackIndex] = 'Controller.java:' + '67' , $get_7(controller.views, ($location_0[stackIndex] = 'InstanceListView.java:' + '75' , $clinit_979() , ID_10))), 168), 235));
  $location_0[stackIndex] = 'DeleteInstanceAction.java:' + '63' , def = view.currentDefinition;
  $location_0[stackIndex] = 'DeleteInstanceAction.java:' + '66' , $handleEvent(controller, ($location_0[stackIndex] = 'DeleteInstanceAction.java:' + '67' , $Event(($location_0[stackIndex] = 'DeleteInstanceAction.java:' + '67' , new Event_0), ($location_0[stackIndex] = 'UpdateInstancesAction.java:' + '47' , $clinit_1010() , ID_19), def)));
  $stackDepth_0 = stackIndex - 1;
}

function DeleteInstanceAction(){
}

_ = DeleteInstanceAction.prototype = new AbstractRESTAction;
_.getClass$ = getClass_664;
_.getId = getId_1;
_.getRequestMethod = getRequestMethod_1;
_.getUrl_0 = getUrl_3;
_.handleError = handleError_0;
_.handlePostError = handlePostError_0;
_.handleSuccessfulResponse = handleSuccessfulResponse_1;
_.typeId$ = 440;
var ID_6;
function $clinit_969(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_969;
  $location_0[stackIndex] = 'GetProcessInstanceEventsAction.java:' + '17' , $clinit_969 = nullMethod;
  $location_0[stackIndex] = 'GetProcessInstanceEventsAction.java:' + '19' , ID_7 = Lorg_jboss_bpm_console_client_process_GetProcessInstanceEventsAction_2_classLit.typeName;
  $stackDepth_0 = stackIndex - 1;
}

function $GetProcessInstanceEventsAction(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $GetProcessInstanceEventsAction;
  $location_0[stackIndex] = 'GetProcessInstanceEventsAction.java:' + '17' , $clinit_969();
  dynamicCast(($location_0[stackIndex] = 'AbstractRESTAction.java:' + '44' , get_16(Lorg_jboss_bpm_console_client_ApplicationContext_2_classLit)), 225);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_665(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_665;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_GetProcessInstanceEventsAction_2_classLit;
}

function getId_2(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getId_2;
  $stackDepth_0 = stackIndex - 1;
  return ID_7;
}

function getRequestMethod_2(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getRequestMethod_2;
  returnTemp = ($location_0[stackIndex] = 'RequestBuilder.java:' + '60' , $clinit_213() , GET);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getUrl_4(event_0){
  var instanceId, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getUrl_4;
  instanceId = ($location_0[stackIndex] = 'GetProcessInstanceEventsAction.java:' + '28' , dynamicCast(event_0, 1));
  returnTemp = $getProcessHistoryEventsURL(($location_0[stackIndex] = 'GetProcessInstanceEventsAction.java:' + '29' , getInstance_2() , instanceId));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function handleSuccessfulResponse_2(controller, event_0, response){
  var refs, view, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = handleSuccessfulResponse_2;
  view = ($location_0[stackIndex] = 'GetProcessInstanceEventsAction.java:' + '40' , dynamicCast(dynamicCast(($location_0[stackIndex] = 'Controller.java:' + '67' , $get_7(controller.views, ($location_0[stackIndex] = 'InstanceDetailView.java:' + '58' , $clinit_973() , ID_9))), 168), 236));
  refs = ($location_0[stackIndex] = 'GetProcessInstanceEventsAction.java:' + '41' , parseStringRef(response.val$xmlHttpRequest.responseText));
  $location_0[stackIndex] = 'GetProcessInstanceEventsAction.java:' + '43' , $populateProcessInstanceEvents(view, refs);
  $stackDepth_0 = stackIndex - 1;
}

function GetProcessInstanceEventsAction(){
}

_ = GetProcessInstanceEventsAction.prototype = new AbstractRESTAction;
_.getClass$ = getClass_665;
_.getId = getId_2;
_.getRequestMethod = getRequestMethod_2;
_.getUrl_0 = getUrl_4;
_.handleSuccessfulResponse = handleSuccessfulResponse_2;
_.typeId$ = 441;
var ID_7;
function $clinit_970(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_970;
  $location_0[stackIndex] = 'InstanceDataView.java:' + '46' , $clinit_970 = nullMethod;
  $location_0[stackIndex] = 'InstanceDataView.java:' + '48' , ID_8 = Lorg_jboss_bpm_console_client_process_InstanceDataView_2_classLit.typeName;
  $stackDepth_0 = stackIndex - 1;
}

function $InstanceDataView(this$static){
  var appContext, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $InstanceDataView;
  $location_0[stackIndex] = 'InstanceDataView.java:' + '60' , $clinit_970();
  $location_0[stackIndex] = 'InstanceDataView.java:' + '61' , $MosaicPanel(this$static);
  $location_0[stackIndex] = 'LayoutPanel.java:' + '289' , setStyleAttribute_0(this$static.element, 'padding', '5px');
  appContext = dynamicCast(($location_0[stackIndex] = 'InstanceDataView.java:' + '63' , get_16(Lorg_jboss_bpm_console_client_ApplicationContext_2_classLit)), 225);
  this$static.isRiftsawInstance = ($location_0[stackIndex] = 'InstanceDataView.java:' + '64' , $equals_4(appContext.val$config.profileName, 'BPEL Console'));
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $bindData(this$static, data){
  var d, d$iterator, model, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $bindData;
  $location_0[stackIndex] = 'InstanceDataView.java:' + '176' , $initialize_0(this$static);
  model = ($location_0[stackIndex] = 'InstanceDataView.java:' + '178' , $getModel(this$static.listBox));
  $location_0[stackIndex] = 'DefaultListModel.java:' + '61' , $clear_5(model.list);
  for (d$iterator = ($location_0[stackIndex] = 'InstanceDataView.java:' + '182' , data.iterator_0()); $location_0[stackIndex] = 'InstanceDataView.java:' + '182' , d$iterator.hasNext();) {
    d = dynamicCast(d$iterator.next_0(), 238);
    $location_0[stackIndex] = 'DefaultListModel.java:' + '45' , $add_6(model.list, d);
  }
  $location_0[stackIndex] = 'InstanceDataView.java:' + '187' , $layout_3(this$static);
  $stackDepth_0 = stackIndex - 1;
}

function $initialize_0(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $initialize_0;
  if (!this$static.isInitialized) {
    this$static.listBox = $ListBox_1(($location_0[stackIndex] = 'InstanceDataView.java:' + '74' , new ListBox_0), initValues(_3Ljava_lang_String_2_classLit, 692, 1, ['Key', 'XSD Type', 'Java Type', 'Value']));
    $location_0[stackIndex] = 'ListBox.java:' + '725' , $setColumnResizePolicy_0(this$static.listBox.scrollTable, ($location_0[stackIndex] = 'AbstractScrollTable.java:' + '823' , $clinit_830() , MULTI_CELL));
    $location_0[stackIndex] = 'ListBox.java:' + '716' , this$static.listBox.cellRenderer = $InstanceDataView$1(($location_0[stackIndex] = 'InstanceDataView.java:' + '79' , new InstanceDataView$1), this$static);
    $location_0[stackIndex] = 'InstanceDataView.java:' + '106' , $add_25(this$static, this$static.listBox);
    $location_0[stackIndex] = 'InstanceDataView.java:' + '108' , this$static.isInitialized = true;
  }
  $stackDepth_0 = stackIndex - 1;
}

function $parseMessage(this$static, messageDom){
  var $e0, dataEntry, dataNode, dataNode$iterator, dataNodeAttributes, dataSetNode, dataSetNodeChildren, e, results, valueChildElements, valueNode, valueNodeAttributes, out, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $parseMessage;
  try {
    dataSetNode = ($location_0[stackIndex] = 'InstanceDataView.java:' + '130' , ($location_0[stackIndex] = 'DocumentImpl.java:' + '140' , $NodeListImpl(($location_0[stackIndex] = 'DocumentImpl.java:' + '140' , new NodeListImpl), ($clinit_504() , ($location_0[stackIndex] = 'XMLParserImplStandard.java:' + '46' , messageDom.jsObject.getElementsByTagNameNS('*', 'dataset'))))).item_1(0));
    dataSetNodeChildren = ($location_0[stackIndex] = 'InstanceDataView.java:' + '132' , getChildElements($NodeListImpl(($location_0[stackIndex] = 'NodeImpl.java:' + '101' , new NodeListImpl), dataSetNode.jsObject.childNodes)));
    results = $ArrayList(($location_0[stackIndex] = 'InstanceDataView.java:' + '134' , new ArrayList));
    for ($location_0[stackIndex] = 'InstanceDataView.java:' + '136' , dataNode$iterator = $AbstractList$IteratorImpl(($location_0[stackIndex] = 'AbstractList.java:' + '278' , new AbstractList$IteratorImpl), dataSetNodeChildren); dataNode$iterator.i < ($location_0[stackIndex] = 'AbstractList.java:' + '38' , dataNode$iterator.this$0.size_1());) {
      dataNode = dynamicCast(($location_0[stackIndex] = 'InstanceDataView.java:' + '136' , $next_6(dataNode$iterator)), 237);
      dataEntry = ($location_0[stackIndex] = 'InstanceDataView.java:' + '137' , new InstanceDataView$DataEntry);
      dataNodeAttributes = ($location_0[stackIndex] = 'InstanceDataView.java:' + '138' , dataNode.getAttributes());
      valueNode = dynamicCast($get_5(($location_0[stackIndex] = 'InstanceDataView.java:' + '140' , getChildElements(($location_0[stackIndex] = 'InstanceDataView.java:' + '141' , dataNode.getChildNodes()))), 0), 237);
      valueNodeAttributes = ($location_0[stackIndex] = 'InstanceDataView.java:' + '143' , valueNode.getAttributes());
      $location_0[stackIndex] = 'InstanceDataView.java:' + '145' , dataEntry.key = ($location_0[stackIndex] = 'NamedNodeMapImpl.java:' + '51' , build(($location_0[stackIndex] = 'XMLParserImpl.java:' + '126' , dataNodeAttributes.jsObject.getNamedItem('key')))).jsObject.nodeValue;
      $location_0[stackIndex] = 'InstanceDataView.java:' + '147' , dataEntry.java_0 = ($location_0[stackIndex] = 'NamedNodeMapImpl.java:' + '51' , build(($location_0[stackIndex] = 'XMLParserImpl.java:' + '126' , dataNodeAttributes.jsObject.getNamedItem('javaType')))).jsObject.nodeValue;
      $location_0[stackIndex] = 'InstanceDataView.java:' + '149' , dataEntry.xsd = ($location_0[stackIndex] = 'NamedNodeMapImpl.java:' + '51' , build(($location_0[stackIndex] = 'XMLParserImpl.java:' + '126' , valueNodeAttributes.jsObject.getNamedItem('xsi:type')))).jsObject.nodeValue;
      valueChildElements = ($location_0[stackIndex] = 'InstanceDataView.java:' + '152' , getChildElements(($location_0[stackIndex] = 'InstanceDataView.java:' + '153' , valueNode.getChildNodes())));
      valueChildElements.size_0 == 0 && ($location_0[stackIndex] = 'InstanceDataView.java:' + '156' , valueNode.hasChildNodes_0()) && 3 == ($location_0[stackIndex] = 'XMLParserImpl.java:' + '142' , out = ($location_0[stackIndex] = 'InstanceDataView.java:' + '157' , valueNode.getChildNodes()).item_1(0).jsObject.nodeType , out == null?-1:out)?(dataEntry.value_0 = ($location_0[stackIndex] = 'InstanceDataView.java:' + '159' , valueNode.getFirstChild()).jsObject.nodeValue):($location_0[stackIndex] = 'InstanceDataView.java:' + '162' , dataEntry.value_0 = 'n/a');
      setCheck(results.array, ($location_0[stackIndex] = 'ArrayList.java:' + '95' , results.size_0++), dataEntry);
    }
    $location_0[stackIndex] = 'InstanceDataView.java:' + '168' , $bindData(this$static, results);
  }
   catch ($e0) {
    $e0 = ($location_0[stackIndex] = 'InstanceDataView.java:' + '169' , caught_0($e0));
    $stackDepth_0 = stackIndex;
    if (instanceOf($e0, 12)) {
      e = $e0;
      $location_0[stackIndex] = 'ConsoleLog.java:' + '65' , $clinit_24();
      $location_0[stackIndex] = 'Log.java:' + '224' , $error(impl, 'Failed to parse XML document', e);
    }
     else 
      throw $e0;
  }
  $stackDepth_0 = stackIndex - 1;
}

function clear_11(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = clear_11;
  $location_0[stackIndex] = 'InstanceDataView.java:' + '69' , $bindData(this, ($location_0[stackIndex] = 'Collections.java:' + '513' , $clinit_570() , EMPTY_LIST));
  $stackDepth_0 = stackIndex - 1;
}

function getClass_666(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_666;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_InstanceDataView_2_classLit;
}

function setController_4(controller){
}

function InstanceDataView(){
}

_ = InstanceDataView.prototype = new MosaicPanel;
_.clear = clear_11;
_.getClass$ = getClass_666;
_.setController = setController_4;
_.typeId$ = 442;
_.isInitialized = false;
_.isRiftsawInstance = false;
_.listBox = null;
var ID_8;
function $InstanceDataView$1(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $InstanceDataView$1;
  $location_0[stackIndex] = 'InstanceDataView.java:' + '79' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $renderCell_0(this$static, listBox, row, column, item){
  var tree, trElem, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $renderCell_0;
  switch (column) {
    case 0:
      $location_0[stackIndex] = 'InstanceDataView.java:' + '84' , $setText_5(listBox, row, column, item.key);
      break;
    case 1:
      $location_0[stackIndex] = 'InstanceDataView.java:' + '87' , $setText_5(listBox, row, column, item.xsd);
      break;
    case 2:
      $location_0[stackIndex] = 'InstanceDataView.java:' + '90' , $setText_5(listBox, row, column, item.java_0);
      break;
    case 3:
      if (this$static.this$0.isRiftsawInstance) {
        tree = $JSONTree(($location_0[stackIndex] = 'InstanceDataView.java:' + '94' , new JSONTree), item.value_0);
        $location_0[stackIndex] = 'ListBox.java:' + '921' , $setWidget_9(listBox.dataTable, (trElem = dynamicCastJso(($location_0[stackIndex] = 'ListBox.java:' + '925' , $get_5(listBox.rowsInModelOrder, row))) , trElem.sectionRowIndex - 1), column, tree);
      }
       else {
        $location_0[stackIndex] = 'InstanceDataView.java:' + '97' , $setText_5(listBox, row, column, item.value_0);
      }

      break;
    default:throw $RuntimeException(($location_0[stackIndex] = 'InstanceDataView.java:' + '101' , new RuntimeException), 'Unexpected column size');
  }
  $stackDepth_0 = stackIndex - 1;
}

function getClass_667(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_667;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_InstanceDataView$1_2_classLit;
}

function renderCell_1(p0, p1, p2, p3){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = renderCell_1;
  $renderCell_0(this, p0, p1, p2, ($location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , dynamicCast(p3, 238)));
  $stackDepth_0 = stackIndex - 1;
}

function InstanceDataView$1(){
}

_ = InstanceDataView$1.prototype = new Object_0;
_.getClass$ = getClass_667;
_.renderCell = renderCell_1;
_.typeId$ = 0;
_.this$0 = null;
function getClass_668(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_668;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_InstanceDataView$DataEntry_2_classLit;
}

function InstanceDataView$DataEntry(){
}

_ = InstanceDataView$DataEntry.prototype = new Object_0;
_.getClass$ = getClass_668;
_.typeId$ = 443;
_.java_0 = null;
_.key = null;
_.value_0 = null;
_.xsd = null;
function $clinit_973(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_973;
  $location_0[stackIndex] = 'InstanceDetailView.java:' + '56' , $clinit_973 = nullMethod;
  $location_0[stackIndex] = 'InstanceDetailView.java:' + '58' , ID_9 = Lorg_jboss_bpm_console_client_process_InstanceDetailView_2_classLit.typeName;
  $stackDepth_0 = stackIndex - 1;
}

function $InstanceDetailView(this$static){
  var buttonPanel, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $InstanceDetailView;
  $location_0[stackIndex] = 'InstanceDetailView.java:' + '90' , $clinit_973();
  $location_0[stackIndex] = 'CaptionLayoutPanel.java:' + '57' , $CaptionLayoutPanel_0(this$static, 'Execution details', false);
  this$static.dateFormat = $SimpleDateFormat(($location_0[stackIndex] = 'InstanceDetailView.java:' + '82' , new SimpleDateFormat));
  this$static.appContext = dynamicCast(($location_0[stackIndex] = 'InstanceDetailView.java:' + '94' , get_16(Lorg_jboss_bpm_console_client_ApplicationContext_2_classLit)), 225);
  this$static.isRiftsawInstance = ($location_0[stackIndex] = 'InstanceDetailView.java:' + '95' , $equals_4(this$static.appContext.val$config.profileName, 'BPEL Console'));
  this$static.isjBPMInstance = ($location_0[stackIndex] = 'InstanceDetailView.java:' + '96' , $equals_4(this$static.appContext.val$config.profileName, 'jBPM Console'));
  if (this$static.isRiftsawInstance) {
    this$static.controller = dynamicCast(($location_0[stackIndex] = 'InstanceDetailView.java:' + '100' , get_16(Lcom_mvc4g_client_Controller_2_classLit)), 167);
    $location_0[stackIndex] = 'InstanceDetailView.java:' + '101' , $addView(this$static.controller, ID_9, this$static);
    $location_0[stackIndex] = 'Controller.java:' + '106' , $put_0(this$static.controller.actions, ($location_0[stackIndex] = 'GetProcessInstanceEventsAction.java:' + '19' , $clinit_969() , ID_7), $GetProcessInstanceEventsAction(($location_0[stackIndex] = 'InstanceDetailView.java:' + '102' , new GetProcessInstanceEventsAction)));
  }
  $location_0[stackIndex] = 'Element.java:' + '688' , this$static.element['className'] = 'bpm-detail-panel';
  $location_0[stackIndex] = 'CaptionLayoutPanel.java:' + '230' , $setLayout_0(this$static.body_0, ($location_0[stackIndex] = 'InstanceDetailView.java:' + '106' , $BoxLayout_1(($location_0[stackIndex] = 'InstanceDetailView.java:' + '106' , new BoxLayout), ($location_0[stackIndex] = 'BoxLayout.java:' + '170' , $clinit_796() , HORIZONTAL))));
  this$static.grid = ($location_0[stackIndex] = 'InstanceDetailView.java:' + '108' , $PropertyGrid(($location_0[stackIndex] = 'InstanceDetailView.java:' + '108' , new PropertyGrid), ($location_0[stackIndex] = 'InstanceDetailView.java:' + '109' , initValues(_3Ljava_lang_String_2_classLit, 692, 1, ['Process:', 'Instance ID:', 'State', 'Start Date:', 'Activity:']))));
  $location_0[stackIndex] = 'CaptionLayoutPanel.java:' + '91' , $add_26(this$static.body_0, this$static.grid, ($location_0[stackIndex] = 'InstanceDetailView.java:' + '112' , $BoxLayoutData_4(($location_0[stackIndex] = 'InstanceDetailView.java:' + '112' , new BoxLayoutData), ($location_0[stackIndex] = 'BoxLayoutData.java:' + '30' , $clinit_798() , BOTH))));
  buttonPanel = $MosaicPanel_0(($location_0[stackIndex] = 'InstanceDetailView.java:' + '114' , new MosaicPanel), $BoxLayout_1(new BoxLayout, VERTICAL));
  if (this$static.isRiftsawInstance) {
    this$static.diagramBtn = ($location_0[stackIndex] = 'InstanceDetailView.java:' + '117' , $Button_2(($location_0[stackIndex] = 'InstanceDetailView.java:' + '117' , new Button), 'Execution Path', $InstanceDetailView$1(($location_0[stackIndex] = 'InstanceDetailView.java:' + '118' , new InstanceDetailView$1), this$static)));
  }
   else if (this$static.isjBPMInstance) {
    this$static.diagramBtn = ($location_0[stackIndex] = 'InstanceDetailView.java:' + '150' , $Button_2(($location_0[stackIndex] = 'InstanceDetailView.java:' + '150' , new Button), 'Diagram', $InstanceDetailView$2(($location_0[stackIndex] = 'InstanceDetailView.java:' + '151' , new InstanceDetailView$2), this$static)));
    $location_0[stackIndex] = 'UIObject.java:' + '214' , this$static.diagramBtn.element.style.display = !this$static.isRiftsawInstance?'':'none';
  }
  $location_0[stackIndex] = 'Element.java:' + '638' , this$static.diagramBtn.element['disabled'] = !false;
  $add_26(buttonPanel, this$static.diagramBtn, $BoxLayoutData_4(($location_0[stackIndex] = 'InstanceDetailView.java:' + '187' , new BoxLayoutData), HORIZONTAL_0));
  this$static.instanceDataBtn = ($location_0[stackIndex] = 'InstanceDetailView.java:' + '188' , $Button_2(($location_0[stackIndex] = 'InstanceDetailView.java:' + '188' , new Button), 'Instance Data', $InstanceDetailView$3(($location_0[stackIndex] = 'InstanceDetailView.java:' + '189' , new InstanceDetailView$3), this$static)));
  $location_0[stackIndex] = 'Element.java:' + '638' , this$static.instanceDataBtn.element['disabled'] = !false;
  $add_26(buttonPanel, this$static.instanceDataBtn, $BoxLayoutData_4(($location_0[stackIndex] = 'InstanceDetailView.java:' + '205' , new BoxLayoutData), HORIZONTAL_0));
  $location_0[stackIndex] = 'CaptionLayoutPanel.java:' + '81' , $add_25(this$static.body_0, buttonPanel);
  $location_0[stackIndex] = 'InstanceDetailView.java:' + '209' , this$static.hasDiagramPlugin = ($location_0[stackIndex] = 'InstanceDetailView.java:' + '210' , has('org.jboss.bpm.console.server.plugin.GraphViewerPlugin'));
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $createDataWindow(this$static, inst){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $createDataWindow;
  $location_0[stackIndex] = 'InstanceDataView.java:' + '69' , $bindData(this$static.instanceDataView, ($location_0[stackIndex] = 'Collections.java:' + '513' , $clinit_570() , EMPTY_LIST));
  $WidgetWindowPanel(($location_0[stackIndex] = 'InstanceDetailView.java:' + '314' , new WidgetWindowPanel), 'Process Instance Data: ' + inst.id_0, this$static.instanceDataView, true);
  $stackDepth_0 = stackIndex - 1;
}

function $createDiagramWindow(this$static, inst){
  var diaViewLayout, header, layout, sourcePanel, tabPanel, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $createDiagramWindow;
  if (this$static.isRiftsawInstance) {
    layout = $ScrollLayoutPanel(($location_0[stackIndex] = 'InstanceDetailView.java:' + '221' , new ScrollLayoutPanel));
    $location_0[stackIndex] = 'Element.java:' + '688' , layout.element['className'] = 'bpm-window-layout';
    $location_0[stackIndex] = 'LayoutPanel.java:' + '289' , setStyleAttribute_0(layout.element, 'padding', '5px');
    header = $Label_0(($location_0[stackIndex] = 'InstanceDetailView.java:' + '225' , new Label), 'Instance: ' + inst.id_0);
    $location_0[stackIndex] = 'Element.java:' + '688' , header.element['className'] = 'bpm-label-header';
    $add_26(layout, header, ($location_0[stackIndex] = 'InstanceDetailView.java:' + '227' , $BoxLayoutData_4(($location_0[stackIndex] = 'InstanceDetailView.java:' + '227' , new BoxLayoutData), ($location_0[stackIndex] = 'BoxLayoutData.java:' + '30' , $clinit_798() , HORIZONTAL_0))));
    tabPanel = $DecoratedTabLayoutPanel_0(($location_0[stackIndex] = 'InstanceDetailView.java:' + '229' , new DecoratedTabLayoutPanel), false);
    $location_0[stackIndex] = 'LayoutPanel.java:' + '289' , setStyleAttribute_0(($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(tabPanel.deck.widget, 183)).element, 'padding', '5px');
    diaViewLayout = $MosaicPanel(($location_0[stackIndex] = 'InstanceDetailView.java:' + '232' , new MosaicPanel));
    $add_26(diaViewLayout, this$static.diagramView, $BoxLayoutData_4(($location_0[stackIndex] = 'InstanceDetailView.java:' + '233' , new BoxLayoutData), HORIZONTAL_0));
    $location_0[stackIndex] = 'InstanceDetailView.java:' + '235' , $add_21(tabPanel, this$static.diagramView, 'View');
    this$static.processEvents = $ListBox_1(($location_0[stackIndex] = 'InstanceDetailView.java:' + '237' , new ListBox_0), initValues(_3Ljava_lang_String_2_classLit, 692, 1, ['Process Events']));
    $location_0[stackIndex] = 'ListBox.java:' + '716' , this$static.processEvents.cellRenderer = ($location_0[stackIndex] = 'InstanceDetailView.java:' + '238' , new InstanceDetailView$4);
    sourcePanel = $MosaicPanel(($location_0[stackIndex] = 'InstanceDetailView.java:' + '253' , new MosaicPanel));
    $add_26(sourcePanel, this$static.processEvents, $BoxLayoutData_4(($location_0[stackIndex] = 'InstanceDetailView.java:' + '254' , new BoxLayoutData), VERTICAL_0));
    $location_0[stackIndex] = 'TabLayoutPanel.java:' + '330' , $insert_5(tabPanel, sourcePanel, 'Source', false, ($location_0[stackIndex] = 'LayoutComposite.java:' + '89' , dynamicCast(tabPanel.deck.widget, 183)).children.size_0);
    $location_0[stackIndex] = 'ScrollTabBar.java:' + '477' , $selectTab(tabPanel.tabBar.tabBar, 0);
    $add_26(layout, tabPanel, $BoxLayoutData_4(($location_0[stackIndex] = 'InstanceDetailView.java:' + '259' , new BoxLayoutData), BOTH));
    $WidgetWindowPanel(($location_0[stackIndex] = 'InstanceDetailView.java:' + '261' , new WidgetWindowPanel), 'Process Instance Activity', layout, true);
    $handleEvent(this$static.controller, ($location_0[stackIndex] = 'InstanceDetailView.java:' + '266' , $Event(($location_0[stackIndex] = 'InstanceDetailView.java:' + '266' , new Event_0), ($location_0[stackIndex] = 'GetProcessInstanceEventsAction.java:' + '19' , $clinit_969() , ID_7), inst.id_0)));
  }
   else if (this$static.isjBPMInstance) {
    layout = $MosaicPanel_0(($location_0[stackIndex] = 'InstanceDetailView.java:' + '268' , new MosaicPanel), ($location_0[stackIndex] = 'InstanceDetailView.java:' + '268' , $BoxLayout_1(new BoxLayout, ($location_0[stackIndex] = 'BoxLayout.java:' + '170' , $clinit_796() , VERTICAL))));
    $location_0[stackIndex] = 'Element.java:' + '688' , layout.element['className'] = 'bpm-window-layout';
    $location_0[stackIndex] = 'LayoutPanel.java:' + '289' , setStyleAttribute_0(layout.element, 'padding', '5px');
    header = $Label_0(($location_0[stackIndex] = 'InstanceDetailView.java:' + '272' , new Label), 'Instance: ' + inst.id_0);
    $location_0[stackIndex] = 'Element.java:' + '688' , header.element['className'] = 'bpm-label-header';
    $add_26(layout, header, ($location_0[stackIndex] = 'InstanceDetailView.java:' + '274' , $BoxLayoutData_4(($location_0[stackIndex] = 'InstanceDetailView.java:' + '274' , new BoxLayoutData), ($location_0[stackIndex] = 'BoxLayoutData.java:' + '30' , $clinit_798() , HORIZONTAL_0))));
    $add_26(layout, this$static.diagramView, $BoxLayoutData_4(($location_0[stackIndex] = 'InstanceDetailView.java:' + '276' , new BoxLayoutData), BOTH));
    $WidgetWindowPanel(($location_0[stackIndex] = 'InstanceDetailView.java:' + '278' , new WidgetWindowPanel), 'Process Instance Activity', layout, true);
  }
  $stackDepth_0 = stackIndex - 1;
}

function $formatResult(value){
  var sbuffer, st, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $formatResult;
  sbuffer = $StringBuffer(($location_0[stackIndex] = 'InstanceDetailView.java:' + '295' , new StringBuffer));
  st = $StringTokenizer(($location_0[stackIndex] = 'InstanceDetailView.java:' + '296' , new StringTokenizer), value, '~');
  $append_5(sbuffer, ($location_0[stackIndex] = 'InstanceDetailView.java:' + '297' , $nextToken(st)) + ' : ');
  while ($location_0[stackIndex] = 'InstanceDetailView.java:' + '299' , $hasMoreTokens(st)) {
    $location_0[stackIndex] = 'StringBufferImplAppend.java:' + '52' , sbuffer.impl.string += '<br/>';
    $append_5(sbuffer, ($location_0[stackIndex] = 'InstanceDetailView.java:' + '301' , $nextToken(st)));
  }
  returnTemp = sbuffer.impl.string;
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function $populateProcessInstanceEvents(this$static, refs){
  var model, value, value$iterator, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $populateProcessInstanceEvents;
  model = ($location_0[stackIndex] = 'InstanceDetailView.java:' + '287' , $getModel(this$static.processEvents));
  $location_0[stackIndex] = 'DefaultListModel.java:' + '61' , $clear_5(model.list);
  for ($location_0[stackIndex] = 'InstanceDetailView.java:' + '289' , value$iterator = ($location_0[stackIndex] = 'AbstractList.java:' + '291' , $listIterator(refs, 0)); value$iterator.currentNode != value$iterator.this$0.header;) {
    value = dynamicCast(($location_0[stackIndex] = 'InstanceDetailView.java:' + '289' , $next_9(value$iterator)), 239);
    $location_0[stackIndex] = 'DefaultListModel.java:' + '45' , $add_6(model.list, ($location_0[stackIndex] = 'InstanceDetailView.java:' + '290' , $formatResult(value.value_0)));
  }
  $stackDepth_0 = stackIndex - 1;
}

function $update_5(this$static, def, instance){
  var currentNodeName, values, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $update_5;
  $location_0[stackIndex] = 'InstanceDetailView.java:' + '338' , this$static.currentDefintion = def;
  $location_0[stackIndex] = 'InstanceDetailView.java:' + '339' , this$static.currentInstance = instance;
  $location_0[stackIndex] = 'InstanceDetailView.java:' + '341' , currentNodeName = instance.rootToken?instance.rootToken.currentNodeName:'n/a';
  values = ($location_0[stackIndex] = 'InstanceDetailView.java:' + '344' , initValues(_3Ljava_lang_String_2_classLit, 692, 1, [def.name_0, instance.id_0, '' + instance.lifecycle.current, ($location_0[stackIndex] = 'InstanceDetailView.java:' + '348' , $format_2(this$static.dateFormat, instance.startDate)), currentNodeName]));
  $location_0[stackIndex] = 'InstanceDetailView.java:' + '352' , $update_1(this$static.grid, values);
  this$static.hasDiagramPlugin && ($location_0[stackIndex] = 'Element.java:' + '638' , this$static.diagramBtn.element['disabled'] = !true , undefined);
  this$static.instanceDataBtn.element['disabled'] = !true;
  $stackDepth_0 = stackIndex - 1;
}

function getClass_669(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_669;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_InstanceDetailView_2_classLit;
}

function setController_5(controller){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = setController_5;
  $location_0[stackIndex] = 'InstanceDetailView.java:' + '322' , this.controller = controller;
  this.diagramView = $ActivityDiagramView(($location_0[stackIndex] = 'InstanceDetailView.java:' + '324' , new ActivityDiagramView));
  this.instanceDataView = $InstanceDataView(($location_0[stackIndex] = 'InstanceDetailView.java:' + '325' , new InstanceDataView));
  $location_0[stackIndex] = 'InstanceDetailView.java:' + '327' , $addView(controller, ($location_0[stackIndex] = 'ActivityDiagramView.java:' + '43' , $clinit_956() , ID_2), this.diagramView);
  $location_0[stackIndex] = 'InstanceDetailView.java:' + '328' , $addView(controller, ($location_0[stackIndex] = 'InstanceDataView.java:' + '48' , $clinit_970() , ID_8), this.instanceDataView);
  $location_0[stackIndex] = 'Controller.java:' + '106' , $put_0(controller.actions, ($location_0[stackIndex] = 'LoadActivityDiagramAction.java:' + '45' , $clinit_996() , ID_11), $LoadActivityDiagramAction(($location_0[stackIndex] = 'InstanceDetailView.java:' + '329' , new LoadActivityDiagramAction)));
  this.isRiftsawInstance && ($location_0[stackIndex] = 'Controller.java:' + '106' , $put_0(controller.actions, Lorg_jboss_bpm_console_client_process_LoadInstanceActivityImage_2_classLit.typeName, $LoadInstanceActivityImage(($location_0[stackIndex] = 'InstanceDetailView.java:' + '331' , new LoadInstanceActivityImage))) , undefined);
  $location_0[stackIndex] = 'Controller.java:' + '106' , $put_0(controller.actions, ($location_0[stackIndex] = 'UpdateInstanceDataAction.java:' + '44' , $clinit_1008() , ID_17), $UpdateInstanceDataAction(($location_0[stackIndex] = 'InstanceDetailView.java:' + '333' , new UpdateInstanceDataAction)));
  $stackDepth_0 = stackIndex - 1;
}

function InstanceDetailView(){
}

_ = InstanceDetailView.prototype = new CaptionLayoutPanel;
_.getClass$ = getClass_669;
_.setController = setController_5;
_.typeId$ = 444;
_.appContext = null;
_.controller = null;
_.currentDefintion = null;
_.currentInstance = null;
_.diagramBtn = null;
_.diagramView = null;
_.grid = null;
_.hasDiagramPlugin = false;
_.instanceDataBtn = null;
_.instanceDataView = null;
_.isRiftsawInstance = false;
_.isjBPMInstance = false;
_.processEvents = null;
var ID_9;
function $InstanceDetailView$1(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $InstanceDetailView$1;
  $location_0[stackIndex] = 'InstanceDetailView.java:' + '118' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_670(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_670;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_InstanceDetailView$1_2_classLit;
}

function onClick_16(clickEvent){
  var diagramUrl, selection, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClick_16;
  $location_0[stackIndex] = 'InstanceDetailView.java:' + '122' , diagramUrl = this.this$0.currentDefintion.diagramUrl;
  if (diagramUrl != null && !($location_0[stackIndex] = 'InstanceDetailView.java:' + '123' , $equals_4(diagramUrl, ''))) {
    $location_0[stackIndex] = 'InstanceDetailView.java:' + '125' , selection = this.this$0.currentInstance;
    if (selection) {
      $location_0[stackIndex] = 'InstanceDetailView.java:' + '128' , $createDiagramWindow(this.this$0, selection);
      addCommand($InstanceDetailView$1$1(($location_0[stackIndex] = 'InstanceDetailView.java:' + '130' , new InstanceDetailView$1$1), this, selection));
    }
  }
   else {
    $location_0[stackIndex] = 'InstanceDetailView.java:' + '144' , $clinit_684();
    $location_0[stackIndex] = 'MessageBox.java:' + '111' , alert_2(($location_0[stackIndex] = 'MessageBox.java:' + '60' , $clinit_693() , ALERT), 'Incomplete deployment', 'No diagram associated with process');
  }
  $stackDepth_0 = stackIndex - 1;
}

function InstanceDetailView$1(){
}

_ = InstanceDetailView$1.prototype = new Object_0;
_.getClass$ = getClass_670;
_.onClick = onClick_16;
_.typeId$ = 445;
_.this$0 = null;
function $InstanceDetailView$1$1(this$static, this$1, val$selection){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $InstanceDetailView$1$1;
  $location_0[stackIndex] = 'InstanceDetailView.java:' + '130' , this$static.this$1 = this$1;
  this$static.val$selection = val$selection;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function execute_35(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = execute_35;
  $location_0[stackIndex] = 'InstanceDetailView.java:' + '133' , $handleEvent(this.this$1.this$0.controller, $Event(($location_0[stackIndex] = 'InstanceDetailView.java:' + '134' , new Event_0), Lorg_jboss_bpm_console_client_process_LoadInstanceActivityImage_2_classLit.typeName, this.val$selection));
  $stackDepth_0 = stackIndex - 1;
}

function getClass_671(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_671;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_InstanceDetailView$1$1_2_classLit;
}

function InstanceDetailView$1$1(){
}

_ = InstanceDetailView$1$1.prototype = new Object_0;
_.execute = execute_35;
_.getClass$ = getClass_671;
_.typeId$ = 446;
_.this$1 = null;
_.val$selection = null;
function $InstanceDetailView$2(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $InstanceDetailView$2;
  $location_0[stackIndex] = 'InstanceDetailView.java:' + '151' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_672(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_672;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_InstanceDetailView$2_2_classLit;
}

function onClick_17(clickEvent){
  var diagramUrl, selection, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClick_17;
  $location_0[stackIndex] = 'InstanceDetailView.java:' + '155' , diagramUrl = this.this$0.currentDefintion.diagramUrl;
  if (diagramUrl != null && !($location_0[stackIndex] = 'InstanceDetailView.java:' + '156' , $equals_4(diagramUrl, ''))) {
    $location_0[stackIndex] = 'InstanceDetailView.java:' + '158' , selection = this.this$0.currentInstance;
    if (selection) {
      if (selection.lifecycle.current == ($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '45' , $clinit_950() , ENDED)) {
        $location_0[stackIndex] = 'InstanceDetailView.java:' + '162' , $clinit_684();
        $location_0[stackIndex] = 'MessageBox.java:' + '111' , alert_2(($location_0[stackIndex] = 'MessageBox.java:' + '60' , $clinit_693() , ALERT), 'Info', 'Process is already completed');
        $location_0[stackIndex] = 'InstanceDetailView.java:' + '163' , $handleEvent(this.this$0.controller, ($location_0[stackIndex] = 'InstanceDetailView.java:' + '164' , $Event(($location_0[stackIndex] = 'InstanceDetailView.java:' + '164' , new Event_0), ($location_0[stackIndex] = 'UpdateInstancesAction.java:' + '47' , $clinit_1010() , ID_19), this.this$0.currentDefintion)));
      }
       else {
        $location_0[stackIndex] = 'InstanceDetailView.java:' + '171' , $handleEvent(this.this$0.controller, ($location_0[stackIndex] = 'InstanceDetailView.java:' + '172' , $Event(($location_0[stackIndex] = 'InstanceDetailView.java:' + '172' , new Event_0), ($location_0[stackIndex] = 'LoadActivityDiagramAction.java:' + '45' , $clinit_996() , ID_11), selection)));
      }
    }
  }
   else {
    $location_0[stackIndex] = 'InstanceDetailView.java:' + '179' , $clinit_684();
    $location_0[stackIndex] = 'MessageBox.java:' + '111' , alert_2(($location_0[stackIndex] = 'MessageBox.java:' + '60' , $clinit_693() , ALERT), 'Incomplete deployment', 'No diagram associated with process');
  }
  $stackDepth_0 = stackIndex - 1;
}

function InstanceDetailView$2(){
}

_ = InstanceDetailView$2.prototype = new Object_0;
_.getClass$ = getClass_672;
_.onClick = onClick_17;
_.typeId$ = 447;
_.this$0 = null;
function $InstanceDetailView$3(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $InstanceDetailView$3;
  $location_0[stackIndex] = 'InstanceDetailView.java:' + '189' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_673(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_673;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_InstanceDetailView$3_2_classLit;
}

function onClick_18(clickEvent){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClick_18;
  !!this.this$0.currentInstance && ($location_0[stackIndex] = 'InstanceDetailView.java:' + '196' , $handleEvent(this.this$0.controller, ($location_0[stackIndex] = 'InstanceDetailView.java:' + '197' , $Event(($location_0[stackIndex] = 'InstanceDetailView.java:' + '197' , new Event_0), ($location_0[stackIndex] = 'UpdateInstanceDataAction.java:' + '44' , $clinit_1008() , ID_17), this.this$0.currentInstance.id_0))));
  $stackDepth_0 = stackIndex - 1;
}

function InstanceDetailView$3(){
}

_ = InstanceDetailView$3.prototype = new Object_0;
_.getClass$ = getClass_673;
_.onClick = onClick_18;
_.typeId$ = 448;
_.this$0 = null;
function $renderCell_1(listBox, row, column, item){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $renderCell_1;
  switch (column) {
    case 0:
      $setWidget_5(listBox, row, column, $HTML_0(($location_0[stackIndex] = 'InstanceDetailView.java:' + '245' , new HTML), item));
      break;
    default:throw $RuntimeException(($location_0[stackIndex] = 'InstanceDetailView.java:' + '248' , new RuntimeException), 'Should not happen!');
  }
  $stackDepth_0 = stackIndex - 1;
}

function getClass_674(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_674;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_InstanceDetailView$4_2_classLit;
}

function renderCell_2(p0, p1, p2, p3){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = renderCell_2;
  $renderCell_1(p0, p1, p2, ($location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , dynamicCast(p3, 1)));
  $stackDepth_0 = stackIndex - 1;
}

function InstanceDetailView$4(){
}

_ = InstanceDetailView$4.prototype = new Object_0;
_.getClass$ = getClass_674;
_.renderCell = renderCell_2;
_.typeId$ = 0;
function $clinit_979(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_979;
  $location_0[stackIndex] = 'InstanceListView.java:' + '73' , $clinit_979 = nullMethod;
  $location_0[stackIndex] = 'InstanceListView.java:' + '75' , ID_10 = Lorg_jboss_bpm_console_client_process_InstanceListView_2_classLit.typeName;
  $stackDepth_0 = stackIndex - 1;
}

function $InstanceListView(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $InstanceListView;
  $location_0[stackIndex] = 'InstanceListView.java:' + '73' , $clinit_979();
  this$static.dateFormat = $SimpleDateFormat(($location_0[stackIndex] = 'InstanceListView.java:' + '89' , new SimpleDateFormat));
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $bindData_0(this$static, instances){
  var inst, inst$iterator, list, model, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $bindData_0;
  $location_0[stackIndex] = 'InstanceListView.java:' + '509' , model = ($location_0[stackIndex] = 'InstanceListView.java:' + '510' , $getModel(this$static.listBox));
  $location_0[stackIndex] = 'DefaultListModel.java:' + '61' , $clear_5(model.list);
  $location_0[stackIndex] = 'InstanceListView.java:' + '513' , list = instances;
  for (inst$iterator = ($location_0[stackIndex] = 'InstanceListView.java:' + '514' , list.iterator_0()); $location_0[stackIndex] = 'InstanceListView.java:' + '514' , inst$iterator.hasNext();) {
    inst = dynamicCast(inst$iterator.next_0(), 232);
    $location_0[stackIndex] = 'DefaultListModel.java:' + '45' , $add_6(model.list, inst);
  }
  $location_0[stackIndex] = 'LayoutPanel.java:' + '600' , $invalidate_1(this$static.panel, null);
  $stackDepth_0 = stackIndex - 1;
}

function $collectSignalableTokens(this$static, tokenParent, tokensToSignal){
  var token, token$iterator, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $collectSignalableTokens;
  if (tokenParent.children) {
    for ($location_0[stackIndex] = 'InstanceListView.java:' + '545' , token$iterator = $AbstractList$IteratorImpl(($location_0[stackIndex] = 'AbstractList.java:' + '278' , new AbstractList$IteratorImpl), tokenParent.children); token$iterator.i < ($location_0[stackIndex] = 'AbstractList.java:' + '38' , token$iterator.this$0.size_1());) {
      token = dynamicCast(($location_0[stackIndex] = 'InstanceListView.java:' + '545' , $next_6(token$iterator)), 240);
      token.canBeSignaled && ($location_0[stackIndex] = 'InstanceListView.java:' + '547' , tokensToSignal.add_0(token));
      $location_0[stackIndex] = 'InstanceListView.java:' + '550' , $collectSignalableTokens(this$static, token, tokensToSignal);
    }
  }
  $stackDepth_0 = stackIndex - 1;
}

function $createSignalWindow(this$static){
  var header, headerSignalRef, headerSignals, layout, toolBar, toolBox, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $createSignalWindow;
  (new ArrayList).array = ($location_0[stackIndex] = 'ArrayList.java:' + '64' , initDim(_3Ljava_lang_Object_2_classLit, 689, 0, 0, 0));
  layout = $MosaicPanel_0(($location_0[stackIndex] = 'InstanceListView.java:' + '559' , new MosaicPanel), ($location_0[stackIndex] = 'InstanceListView.java:' + '559' , $BoxLayout_1(new BoxLayout, ($location_0[stackIndex] = 'BoxLayout.java:' + '170' , $clinit_796() , VERTICAL))));
  $location_0[stackIndex] = 'Element.java:' + '688' , layout.element['className'] = 'bpm-window-layout';
  $location_0[stackIndex] = 'LayoutPanel.java:' + '289' , setStyleAttribute_0(layout.element, 'padding', '5px');
  toolBox = $MosaicPanel(($location_0[stackIndex] = 'InstanceListView.java:' + '563' , new MosaicPanel));
  $location_0[stackIndex] = 'LayoutPanel.java:' + '289' , setStyleAttribute_0(toolBox.element, 'padding', '0px');
  $location_0[stackIndex] = 'LayoutPanel.java:' + '297' , toolBox.widgetSpacing = 5;
  $setLayout_0(toolBox, $BoxLayout_1(($location_0[stackIndex] = 'InstanceListView.java:' + '567' , new BoxLayout), HORIZONTAL));
  toolBar = $ToolBar(($location_0[stackIndex] = 'InstanceListView.java:' + '569' , new ToolBar));
  $location_0[stackIndex] = 'InstanceListView.java:' + '570' , $add_28(toolBar, $Button_2(($location_0[stackIndex] = 'InstanceListView.java:' + '571' , new Button), 'Signal', $InstanceListView$8(new InstanceListView$8, this$static)));
  $location_0[stackIndex] = 'InstanceListView.java:' + '619' , $add_28(toolBar, $Button_2(($location_0[stackIndex] = 'InstanceListView.java:' + '620' , new Button), 'Close', $InstanceListView$9(new InstanceListView$9, this$static)));
  $add_26(toolBox, toolBar, ($location_0[stackIndex] = 'InstanceListView.java:' + '634' , $BoxLayoutData_4(($location_0[stackIndex] = 'InstanceListView.java:' + '634' , new BoxLayoutData), ($location_0[stackIndex] = 'BoxLayoutData.java:' + '30' , $clinit_798() , HORIZONTAL_0))));
  $add_26(layout, toolBox, $BoxLayoutData_4(($location_0[stackIndex] = 'InstanceListView.java:' + '636' , new BoxLayoutData), HORIZONTAL_0));
  header = $Label_0(($location_0[stackIndex] = 'InstanceListView.java:' + '638' , new Label), 'Known active nodes to signal: ');
  $location_0[stackIndex] = 'Element.java:' + '688' , header.element['className'] = 'bpm-label-header';
  $add_26(layout, header, $BoxLayoutData_4(($location_0[stackIndex] = 'InstanceListView.java:' + '640' , new BoxLayoutData), HORIZONTAL_0));
  this$static.listBoxTokens = $ListBox_1(($location_0[stackIndex] = 'InstanceListView.java:' + '642' , new ListBox_0), initValues(_3Ljava_lang_String_2_classLit, 692, 1, ['Node name', 'Signal ref']));
  $location_0[stackIndex] = 'ListBox.java:' + '716' , this$static.listBoxTokens.cellRenderer = ($location_0[stackIndex] = 'InstanceListView.java:' + '644' , new InstanceListView$10);
  $location_0[stackIndex] = 'InstanceListView.java:' + '661' , $renderSignalListBox(this$static, -1);
  $add_26(layout, this$static.listBoxTokens, $BoxLayoutData_4(($location_0[stackIndex] = 'InstanceListView.java:' + '662' , new BoxLayoutData), BOTH));
  headerSignalRef = $Label_0(($location_0[stackIndex] = 'InstanceListView.java:' + '664' , new Label), 'Signal ref');
  $location_0[stackIndex] = 'Element.java:' + '688' , headerSignalRef.element['className'] = 'bpm-label-header';
  $add_26(layout, headerSignalRef, $BoxLayoutData_4(($location_0[stackIndex] = 'InstanceListView.java:' + '666' , new BoxLayoutData), HORIZONTAL_0));
  this$static.signalRef = $TextBox(($location_0[stackIndex] = 'InstanceListView.java:' + '668' , new TextBox));
  $location_0[stackIndex] = 'FocusWidget.java:' + '103' , $addDomHandler(this$static.signalRef, $InstanceListView$11(($location_0[stackIndex] = 'InstanceListView.java:' + '669' , new InstanceListView$11), this$static), ($location_0[stackIndex] = 'FocusWidget.java:' + '103' , $clinit_137() , ($location_0[stackIndex] = 'FocusEvent.java:' + '27' , $clinit_137()) , TYPE_3));
  $add_26(layout, this$static.signalRef, $BoxLayoutData_4(($location_0[stackIndex] = 'InstanceListView.java:' + '679' , new BoxLayoutData), BOTH));
  headerSignals = $Label_0(($location_0[stackIndex] = 'InstanceListView.java:' + '681' , new Label), 'Event data');
  $location_0[stackIndex] = 'Element.java:' + '688' , headerSignals.element['className'] = 'bpm-label-header';
  $add_26(layout, headerSignals, $BoxLayoutData_4(($location_0[stackIndex] = 'InstanceListView.java:' + '683' , new BoxLayoutData), HORIZONTAL_0));
  this$static.eventData = $TextBox(($location_0[stackIndex] = 'InstanceListView.java:' + '685' , new TextBox));
  $add_26(layout, this$static.eventData, $BoxLayoutData_4(($location_0[stackIndex] = 'InstanceListView.java:' + '687' , new BoxLayoutData), BOTH));
  this$static.signalWindowPanel = $WidgetWindowPanel(($location_0[stackIndex] = 'InstanceListView.java:' + '689' , new WidgetWindowPanel), 'Signal process', layout, false);
  $location_0[stackIndex] = 'WidgetWindowPanel.java:' + '79' , $setContentSize_1(this$static.signalWindowPanel.window_0, $Dimension_1(($location_0[stackIndex] = 'InstanceListView.java:' + '693' , new Dimension), 500, 400));
  $stackDepth_0 = stackIndex - 1;
}

function $getSelection(this$static){
  var selection, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $getSelection;
  $location_0[stackIndex] = 'InstanceListView.java:' + '444' , selection = null;
  ($location_0[stackIndex] = 'InstanceListView.java:' + '445' , $getSelectedIndex_0(this$static.listBox)) != -1 && (selection = dynamicCast($getItem_0(this$static.listBox, ($location_0[stackIndex] = 'InstanceListView.java:' + '446' , $getSelectedIndex_0(this$static.listBox))), 232));
  $stackDepth_0 = stackIndex - 1;
  return selection;
}

function $initialize_1(this$static){
  var detailsView, layout, toolBar, toolBox, separator, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $initialize_1;
  if (!this$static.isInitialized) {
    this$static.instanceList = $MosaicPanel_0(($location_0[stackIndex] = 'InstanceListView.java:' + '146' , new MosaicPanel), ($location_0[stackIndex] = 'InstanceListView.java:' + '146' , $BoxLayout_1(new BoxLayout, ($location_0[stackIndex] = 'BoxLayout.java:' + '170' , $clinit_796() , VERTICAL))));
    $location_0[stackIndex] = 'LayoutPanel.java:' + '289' , setStyleAttribute_0(this$static.instanceList.element, 'padding', '0px');
    $location_0[stackIndex] = 'LayoutPanel.java:' + '297' , this$static.instanceList.widgetSpacing = 0;
    $location_0[stackIndex] = 'InstanceListView.java:' + '150' , this$static.listBox = ($location_0[stackIndex] = 'InstanceListView.java:' + '151' , $ListBox_1(($location_0[stackIndex] = 'InstanceListView.java:' + '151' , new ListBox_0), ($location_0[stackIndex] = 'InstanceListView.java:' + '152' , initValues(_3Ljava_lang_String_2_classLit, 692, 1, ['<b>Instance<\/b>', 'State', 'Start Date']))));
    $location_0[stackIndex] = 'ListBox.java:' + '716' , this$static.listBox.cellRenderer = $InstanceListView$1(($location_0[stackIndex] = 'InstanceListView.java:' + '156' , new InstanceListView$1), this$static);
    $location_0[stackIndex] = 'SelectionGrid.java:' + '248' , $addHandler_1(this$static.listBox.scrollTable.dataTable, $InstanceListView$2(($location_0[stackIndex] = 'InstanceListView.java:' + '177' , new InstanceListView$2), this$static), (!TYPE_24 && (TYPE_24 = $GwtEvent$Type(($location_0[stackIndex] = 'RowSelectionEvent.java:' + '81' , new GwtEvent$Type))) , TYPE_24));
    toolBox = $MosaicPanel(($location_0[stackIndex] = 'InstanceListView.java:' + '207' , new MosaicPanel));
    $location_0[stackIndex] = 'LayoutPanel.java:' + '289' , setStyleAttribute_0(toolBox.element, 'padding', '0px');
    $location_0[stackIndex] = 'LayoutPanel.java:' + '297' , toolBox.widgetSpacing = 5;
    toolBar = $ToolBar(($location_0[stackIndex] = 'InstanceListView.java:' + '212' , new ToolBar));
    this$static.refreshBtn = $Button_2(($location_0[stackIndex] = 'InstanceListView.java:' + '213' , new Button), 'Refresh', $InstanceListView$3(new InstanceListView$3, this$static));
    $location_0[stackIndex] = 'InstanceListView.java:' + '225' , $add_28(toolBar, this$static.refreshBtn);
    $location_0[stackIndex] = 'Element.java:' + '638' , this$static.refreshBtn.element['disabled'] = !false;
    separator = $ToolBarSeparator(($location_0[stackIndex] = 'ToolBar.java:' + '124' , new ToolBarSeparator));
    $location_0[stackIndex] = 'ToolBar.java:' + '125' , $add_28(toolBar, separator);
    this$static.startBtn = $Button_2(($location_0[stackIndex] = 'InstanceListView.java:' + '229' , new Button), 'Start', $InstanceListView$4(new InstanceListView$4, this$static));
    this$static.terminateBtn = $Button_2(($location_0[stackIndex] = 'InstanceListView.java:' + '283' , new Button), 'Terminate', $InstanceListView$5(new InstanceListView$5, this$static));
    this$static.deleteBtn = $Button_2(($location_0[stackIndex] = 'InstanceListView.java:' + '321' , new Button), 'Delete', $InstanceListView$6(new InstanceListView$6, this$static));
    this$static.signalBtn = $Button_2(($location_0[stackIndex] = 'InstanceListView.java:' + '364' , new Button), 'Signal', $InstanceListView$7(new InstanceListView$7, this$static));
    if (!this$static.isRiftsawInstance) {
      $location_0[stackIndex] = 'InstanceListView.java:' + '383' , $add_28(toolBar, this$static.startBtn);
      $location_0[stackIndex] = 'InstanceListView.java:' + '384' , $add_28(toolBar, this$static.signalBtn);
      $location_0[stackIndex] = 'InstanceListView.java:' + '385' , $add_28(toolBar, this$static.deleteBtn);
      $location_0[stackIndex] = 'Element.java:' + '638' , this$static.startBtn.element['disabled'] = !false;
      this$static.deleteBtn.element['disabled'] = !false;
      this$static.signalBtn.element['disabled'] = !false;
    }
    $location_0[stackIndex] = 'InstanceListView.java:' + '393' , $add_28(toolBar, this$static.terminateBtn);
    $location_0[stackIndex] = 'Element.java:' + '638' , this$static.terminateBtn.element['disabled'] = !false;
    $add_26(toolBox, toolBar, ($location_0[stackIndex] = 'InstanceListView.java:' + '396' , $BoxLayoutData_4(($location_0[stackIndex] = 'InstanceListView.java:' + '396' , new BoxLayoutData), ($location_0[stackIndex] = 'BoxLayoutData.java:' + '30' , $clinit_798() , HORIZONTAL_0))));
    $add_26(this$static.instanceList, toolBox, $BoxLayoutData_4(($location_0[stackIndex] = 'InstanceListView.java:' + '399' , new BoxLayoutData), HORIZONTAL_0));
    $add_26(this$static.instanceList, this$static.listBox, $BoxLayoutData_4(($location_0[stackIndex] = 'InstanceListView.java:' + '400' , new BoxLayoutData), BOTH));
    !!this$static.cachedInstances && ($location_0[stackIndex] = 'InstanceListView.java:' + '420' , $bindData_0(this$static, this$static.cachedInstances));
    layout = $MosaicPanel_0(($location_0[stackIndex] = 'InstanceListView.java:' + '423' , new MosaicPanel), $BorderLayout(new BorderLayout));
    $location_0[stackIndex] = 'LayoutPanel.java:' + '289' , setStyleAttribute_0(layout.element, 'padding', '0px');
    $add_26(layout, this$static.instanceList, ($location_0[stackIndex] = 'InstanceListView.java:' + '425' , $BorderLayoutData_1(($location_0[stackIndex] = 'InstanceListView.java:' + '425' , new BorderLayoutData), ($location_0[stackIndex] = 'BorderLayout.java:' + '199' , $clinit_789() , CENTER_1))));
    detailsView = $InstanceDetailView(($location_0[stackIndex] = 'InstanceListView.java:' + '428' , new InstanceDetailView));
    $location_0[stackIndex] = 'InstanceListView.java:' + '429' , $addView(this$static.controller, ($location_0[stackIndex] = 'InstanceDetailView.java:' + '58' , $clinit_973() , ID_9), detailsView);
    $location_0[stackIndex] = 'Controller.java:' + '106' , $put_0(this$static.controller.actions, ($location_0[stackIndex] = 'UpdateInstanceDetailAction.java:' + '33' , $clinit_1009() , ID_18), ($location_0[stackIndex] = 'InstanceListView.java:' + '430' , new UpdateInstanceDetailAction));
    $location_0[stackIndex] = 'Controller.java:' + '106' , $put_0(this$static.controller.actions, ($location_0[stackIndex] = 'ClearInstancesAction.java:' + '32' , $clinit_957() , ID_3), ($location_0[stackIndex] = 'InstanceListView.java:' + '431' , new ClearInstancesAction));
    $location_0[stackIndex] = 'Controller.java:' + '106' , $put_0(this$static.controller.actions, ($location_0[stackIndex] = 'SignalExecutionAction.java:' + '42' , $clinit_1003() , ID_13), $SignalExecutionAction(($location_0[stackIndex] = 'InstanceListView.java:' + '432' , new SignalExecutionAction)));
    $add_26(layout, detailsView, $BorderLayoutData_5(($location_0[stackIndex] = 'InstanceListView.java:' + '433' , new BorderLayoutData), SOUTH_0, 10, 200));
    $location_0[stackIndex] = 'InstanceListView.java:' + '435' , $add_25(this$static.panel, layout);
    $location_0[stackIndex] = 'InstanceListView.java:' + '437' , this$static.isInitialized = true;
  }
  $stackDepth_0 = stackIndex - 1;
}

function $isSignalable(this$static, processInstance){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $isSignalable;
  this$static.tokensToSignal = $ArrayList(($location_0[stackIndex] = 'InstanceListView.java:' + '525' , new ArrayList));
  !!processInstance.rootToken && processInstance.rootToken.canBeSignaled?($location_0[stackIndex] = 'InstanceListView.java:' + '529' , $add_7(this$static.tokensToSignal, processInstance.rootToken)):!!processInstance.rootToken && !!processInstance.rootToken.children && ($location_0[stackIndex] = 'InstanceListView.java:' + '533' , $collectSignalableTokens(this$static, processInstance.rootToken, this$static.tokensToSignal));
  if (this$static.tokensToSignal.size_0 > 0) {
    $stackDepth_0 = stackIndex - 1;
    return true;
  }
   else {
    $stackDepth_0 = stackIndex - 1;
    return false;
  }
  $stackDepth_0 = stackIndex - 1;
}

function $provideWidget_2(this$static, callback){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $provideWidget_2;
  this$static.appContext = dynamicCast(($location_0[stackIndex] = 'InstanceListView.java:' + '121' , get_16(Lorg_jboss_bpm_console_client_ApplicationContext_2_classLit)), 225);
  this$static.isRiftsawInstance = ($location_0[stackIndex] = 'InstanceListView.java:' + '123' , $equals_4(this$static.appContext.val$config.profileName, 'BPEL Console'));
  this$static.panel = $MosaicPanel(($location_0[stackIndex] = 'InstanceListView.java:' + '125' , new MosaicPanel));
  $location_0[stackIndex] = 'LayoutPanel.java:' + '289' , setStyleAttribute_0(this$static.panel.element, 'padding', '0px');
  $addView(dynamicCast(($location_0[stackIndex] = 'InstanceListView.java:' + '128' , get_16(Lcom_mvc4g_client_Controller_2_classLit)), 167), ID_10, this$static);
  $location_0[stackIndex] = 'InstanceListView.java:' + '129' , $initialize_1(this$static);
  !greenIcon && (greenIcon = $ImageResourcePrototype(($location_0[stackIndex] = 'org_jboss_bpm_console_client_icons_ConsoleIconBundle_default_InlineClientBundleGenerator.java:' + '99' , new ImageResourcePrototype), 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAA8ElEQVR42m2QvwsBYRzG33/hXQwmZWC6RZkYdGeQiC5xq92NftQtXImBySKLMohF4iWJ2c6ubBb/wpfn2ylX3vp0T8/nqffuhPBOepG2jKWhPpCHQid+T2qe6hR2Bapda9R79RhkdHA8SkwTVnadpda9Re7T9YEODhsRn8RV9VIl5+H8BQ4boY00qpwrVD6VubRvNoOMDg4bERlEKL/NU3KWpNg45gMdHDYi1A2pzCpDuU2O9IWOl2eQ0cFhI4LtoBUdRqm4L5J5MPn5m+Gw4S8POIFOuB/mq0rHEoOMDs73L2VTWrIulWxIYpA/3de/AXHBvNNvoVQDAAAAAElFTkSuQmCC', 0, 0, 10, 10));
  $location_0[stackIndex] = 'InstanceListView.java:' + '134' , callback.onSuccess(this$static.panel);
  $stackDepth_0 = stackIndex - 1;
}

function $renderSignalListBox(this$static, i){
  var token, token$iterator, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $renderSignalListBox;
  i > -1 && ($location_0[stackIndex] = 'InstanceListView.java:' + '700' , $remove_7(this$static.tokensToSignal, i));
  $location_0[stackIndex] = 'DefaultListModel.java:' + '61' , $clear_5(($location_0[stackIndex] = 'InstanceListView.java:' + '703' , $getModel(this$static.listBoxTokens)).list);
  if (this$static.tokensToSignal.size_0 != 0) {
    for ($location_0[stackIndex] = 'InstanceListView.java:' + '707' , token$iterator = $AbstractList$IteratorImpl(($location_0[stackIndex] = 'AbstractList.java:' + '278' , new AbstractList$IteratorImpl), this$static.tokensToSignal); token$iterator.i < ($location_0[stackIndex] = 'AbstractList.java:' + '38' , token$iterator.this$0.size_1());) {
      token = dynamicCast(($location_0[stackIndex] = 'InstanceListView.java:' + '707' , $next_6(token$iterator)), 240);
      $location_0[stackIndex] = 'DefaultListModel.java:' + '45' , $add_6(($location_0[stackIndex] = 'InstanceListView.java:' + '708' , $getModel(this$static.listBoxTokens)).list, token);
    }
  }
  !!this$static.signalRef && ($location_0[stackIndex] = 'Element.java:' + '688' , this$static.signalRef.element['value'] = '' , undefined);
  !!this$static.eventData && (this$static.eventData.element['value'] = '' , undefined);
  $stackDepth_0 = stackIndex - 1;
}

function $renderUpdate(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $renderUpdate;
  if (this$static.isInitialized) {
    $location_0[stackIndex] = 'InstanceListView.java:' + '491' , $bindData_0(this$static, this$static.cachedInstances);
    $location_0[stackIndex] = 'InstanceListView.java:' + '494' , $handleEvent(this$static.controller, ($location_0[stackIndex] = 'InstanceListView.java:' + '495' , $Event(($location_0[stackIndex] = 'InstanceListView.java:' + '495' , new Event_0), ($location_0[stackIndex] = 'UpdateInstanceDetailAction.java:' + '33' , $clinit_1009() , ID_18), $InstanceEvent(($location_0[stackIndex] = 'InstanceListView.java:' + '496' , new InstanceEvent), this$static.currentDefinition, null))));
    $location_0[stackIndex] = 'Element.java:' + '638' , this$static.startBtn.element['disabled'] = !true;
    this$static.deleteBtn.element['disabled'] = !true;
    this$static.refreshBtn.element['disabled'] = !true;
    this$static.signalBtn.element['disabled'] = !false;
  }
  $stackDepth_0 = stackIndex - 1;
}

function $update_6(this$static, data){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $update_6;
  this$static.currentDefinition = dynamicCast(($location_0[stackIndex] = 'InstanceListView.java:' + '475' , data[0]), 231);
  this$static.cachedInstances = dynamicCast(($location_0[stackIndex] = 'InstanceListView.java:' + '476' , data[1]), 171);
  $location_0[stackIndex] = 'InstanceListView.java:' + '479' , $renderUpdate(this$static);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_675(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_675;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_InstanceListView_2_classLit;
}

function setController_6(controller){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = setController_6;
  $location_0[stackIndex] = 'InstanceListView.java:' + '457' , this.controller = controller;
  $stackDepth_0 = stackIndex - 1;
}

function setLoading_0(isLoading){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = setLoading_0;
  $location_0[stackIndex] = 'InstanceListView.java:' + '484' , on(this.instanceList, isLoading);
  $stackDepth_0 = stackIndex - 1;
}

_ = InstanceListView.prototype;
_.getClass$ = getClass_675;
_.setController = setController_6;
_.setLoading = setLoading_0;
var ID_10;
function $InstanceListView$1(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $InstanceListView$1;
  $location_0[stackIndex] = 'InstanceListView.java:' + '156' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $renderCell_2(this$static, listBox, row, column, item){
  var d, trElem, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $renderCell_2;
  switch (column) {
    case 0:
      $location_0[stackIndex] = 'InstanceListView.java:' + '161' , $setText_5(listBox, row, column, item.id_0);
      break;
    case 1:
      $location_0[stackIndex] = 'InstanceListView.java:' + '164' , $setText_5(listBox, row, column, item.lifecycle.current.name_0);
      break;
    case 2:
      d = item.startDate?($location_0[stackIndex] = 'InstanceListView.java:' + '167' , $format_2(this$static.this$0.dateFormat, item.startDate)):'';
      $location_0[stackIndex] = 'ListBox.java:' + '913' , $setText_6(listBox.dataTable, (trElem = dynamicCastJso(($location_0[stackIndex] = 'ListBox.java:' + '925' , $get_5(listBox.rowsInModelOrder, row))) , trElem.sectionRowIndex - 1), column, d);
      break;
    default:throw $RuntimeException(($location_0[stackIndex] = 'InstanceListView.java:' + '171' , new RuntimeException), 'Unexpected column size');
  }
  $stackDepth_0 = stackIndex - 1;
}

function getClass_676(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_676;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_InstanceListView$1_2_classLit;
}

function renderCell_3(p0, p1, p2, p3){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = renderCell_3;
  $renderCell_2(this, p0, p1, p2, ($location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , dynamicCast(p3, 232)));
  $stackDepth_0 = stackIndex - 1;
}

function InstanceListView$1(){
}

_ = InstanceListView$1.prototype = new Object_0;
_.getClass$ = getClass_676;
_.renderCell = renderCell_3;
_.typeId$ = 0;
_.this$0 = null;
function $renderCell_3(listBox, row, column, item){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $renderCell_3;
  switch (column) {
    case 0:
      $location_0[stackIndex] = 'InstanceListView.java:' + '649' , $setText_5(listBox, row, column, item.currentNodeName);
      break;
    case 1:
      $location_0[stackIndex] = 'InstanceListView.java:' + '652' , $setText_5(listBox, row, column, item.name_0);
      break;
    default:throw $RuntimeException(($location_0[stackIndex] = 'InstanceListView.java:' + '655' , new RuntimeException), 'Unexpected column size');
  }
  $stackDepth_0 = stackIndex - 1;
}

function getClass_677(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_677;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_InstanceListView$10_2_classLit;
}

function renderCell_4(p0, p1, p2, p3){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = renderCell_4;
  $renderCell_3(p0, p1, p2, ($location_0[stackIndex] = 'com.google.gwt.dev.jjs.impl.GenerateJavaAST:' + '0' , dynamicCast(p3, 240)));
  $stackDepth_0 = stackIndex - 1;
}

function InstanceListView$10(){
}

_ = InstanceListView$10.prototype = new Object_0;
_.getClass$ = getClass_677;
_.renderCell = renderCell_4;
_.typeId$ = 0;
function $InstanceListView$11(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $InstanceListView$11;
  $location_0[stackIndex] = 'InstanceListView.java:' + '669' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_678(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_678;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_InstanceListView$11_2_classLit;
}

function onFocus_0(event_0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onFocus_0;
  ($location_0[stackIndex] = 'InstanceListView.java:' + '673' , $getSelectedIndex_0(this.this$0.listBox)) != -1 && $setItemSelected_0(this.this$0.listBoxTokens, ($location_0[stackIndex] = 'InstanceListView.java:' + '674' , $getSelectedIndex_0(this.this$0.listBox)), false);
  $stackDepth_0 = stackIndex - 1;
}

function InstanceListView$11(){
}

_ = InstanceListView$11.prototype = new Object_0;
_.getClass$ = getClass_678;
_.onFocus = onFocus_0;
_.typeId$ = 450;
_.this$0 = null;
function $InstanceListView$2(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $InstanceListView$2;
  $location_0[stackIndex] = 'InstanceListView.java:' + '177' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_679(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_679;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_InstanceListView$2_2_classLit;
}

function onRowSelection_0(rowSelectionEvent){
  var index, item, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onRowSelection_0;
  index = ($location_0[stackIndex] = 'InstanceListView.java:' + '181' , $getSelectedIndex_0(this.this$0.listBox));
  if (index != -1) {
    item = dynamicCast(($location_0[stackIndex] = 'InstanceListView.java:' + '184' , $getItem_0(this.this$0.listBox, index)), 232);
    ($location_0[stackIndex] = 'InstanceListView.java:' + '187' , $isSignalable(this.this$0, item))?($location_0[stackIndex] = 'Element.java:' + '638' , this.this$0.signalBtn.element['disabled'] = !true , undefined):(this.this$0.signalBtn.element['disabled'] = !false , undefined);
    this.this$0.terminateBtn.element['disabled'] = !true;
    $location_0[stackIndex] = 'InstanceListView.java:' + '196' , $handleEvent(this.this$0.controller, ($location_0[stackIndex] = 'InstanceListView.java:' + '197' , $Event(($location_0[stackIndex] = 'InstanceListView.java:' + '197' , new Event_0), ($location_0[stackIndex] = 'UpdateInstanceDetailAction.java:' + '33' , $clinit_1009() , ID_18), $InstanceEvent(($location_0[stackIndex] = 'InstanceListView.java:' + '198' , new InstanceEvent), this.this$0.currentDefinition, item))));
  }
  $stackDepth_0 = stackIndex - 1;
}

function InstanceListView$2(){
}

_ = InstanceListView$2.prototype = new Object_0;
_.getClass$ = getClass_679;
_.onRowSelection = onRowSelection_0;
_.typeId$ = 451;
_.this$0 = null;
function $InstanceListView$3(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $InstanceListView$3;
  $location_0[stackIndex] = 'InstanceListView.java:' + '213' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_680(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_680;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_InstanceListView$3_2_classLit;
}

function onClick_19(clickEvent){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClick_19;
  $location_0[stackIndex] = 'InstanceListView.java:' + '216' , $handleEvent(this.this$0.controller, ($location_0[stackIndex] = 'InstanceListView.java:' + '217' , $Event(($location_0[stackIndex] = 'InstanceListView.java:' + '217' , new Event_0), ($location_0[stackIndex] = 'UpdateInstancesAction.java:' + '47' , $clinit_1010() , ID_19), this.this$0.currentDefinition)));
  $stackDepth_0 = stackIndex - 1;
}

function InstanceListView$3(){
}

_ = InstanceListView$3.prototype = new Object_0;
_.getClass$ = getClass_680;
_.onClick = onClick_19;
_.typeId$ = 452;
_.this$0 = null;
function $InstanceListView$4(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $InstanceListView$4;
  $location_0[stackIndex] = 'InstanceListView.java:' + '229' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_681(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_681;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_InstanceListView$4_2_classLit;
}

function onClick_20(clickEvent){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClick_20;
  $location_0[stackIndex] = 'InstanceListView.java:' + '233' , confirm_1('Start new execution', 'Do you want to start a new execution of this process?', $InstanceListView$4$1(($location_0[stackIndex] = 'InstanceListView.java:' + '235' , new InstanceListView$4$1), this));
  $stackDepth_0 = stackIndex - 1;
}

function InstanceListView$4(){
}

_ = InstanceListView$4.prototype = new Object_0;
_.getClass$ = getClass_681;
_.onClick = onClick_20;
_.typeId$ = 453;
_.this$0 = null;
function $InstanceListView$4$1(this$static, this$1){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $InstanceListView$4$1;
  $location_0[stackIndex] = 'InstanceListView.java:' + '235' , this$static.this$1 = this$1;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_682(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_682;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_InstanceListView$4$1_2_classLit;
}

function onResult_0(doIt){
  var definition, hasForm, url, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onResult_0;
  if (doIt) {
    $location_0[stackIndex] = 'InstanceListView.java:' + '241' , url = this.this$1.this$0.currentDefinition.formUrl;
    hasForm = url != null && !($location_0[stackIndex] = 'InstanceListView.java:' + '242' , $equals_4(url, ''));
    if (hasForm) {
      $location_0[stackIndex] = 'InstanceListView.java:' + '245' , definition = this.this$1.this$0.currentDefinition;
      this.this$1.this$0.iframeWindow = $IFrameWindowPanel(($location_0[stackIndex] = 'InstanceListView.java:' + '246' , new IFrameWindowPanel), definition.formUrl, 'New Process Instance: ' + definition.id_0);
      $location_0[stackIndex] = 'IFrameWindowPanel.java:' + '181' , this.this$1.this$0.iframeWindow.callback = $InstanceListView$4$1$1(($location_0[stackIndex] = 'InstanceListView.java:' + '251' , new InstanceListView$4$1$1), this);
      $location_0[stackIndex] = 'IFrameWindowPanel.java:' + '205' , $createWindow(this.this$1.this$0.iframeWindow);
    }
     else {
      $location_0[stackIndex] = 'InstanceListView.java:' + '266' , $handleEvent(this.this$1.this$0.controller, ($location_0[stackIndex] = 'InstanceListView.java:' + '267' , $Event(($location_0[stackIndex] = 'InstanceListView.java:' + '267' , new Event_0), ($location_0[stackIndex] = 'StartNewInstanceAction.java:' + '40' , $clinit_1005() , ID_14), this.this$1.this$0.currentDefinition)));
    }
  }
  $stackDepth_0 = stackIndex - 1;
}

function InstanceListView$4$1(){
}

_ = InstanceListView$4$1.prototype = new Object_0;
_.getClass$ = getClass_682;
_.onResult = onResult_0;
_.typeId$ = 0;
_.this$1 = null;
function $InstanceListView$4$1$1(this$static, this$2){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $InstanceListView$4$1$1;
  $location_0[stackIndex] = 'InstanceListView.java:' + '251' , this$static.this$2 = this$2;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_683(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_683;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_InstanceListView$4$1$1_2_classLit;
}

function onWindowClosed(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onWindowClosed;
  $location_0[stackIndex] = 'InstanceListView.java:' + '255' , $handleEvent(this.this$2.this$1.this$0.controller, ($location_0[stackIndex] = 'InstanceListView.java:' + '256' , $Event(($location_0[stackIndex] = 'InstanceListView.java:' + '256' , new Event_0), ($location_0[stackIndex] = 'UpdateInstancesAction.java:' + '47' , $clinit_1010() , ID_19), this.this$2.this$1.this$0.currentDefinition)));
  $stackDepth_0 = stackIndex - 1;
}

function InstanceListView$4$1$1(){
}

_ = InstanceListView$4$1$1.prototype = new Object_0;
_.getClass$ = getClass_683;
_.onWindowClosed = onWindowClosed;
_.typeId$ = 0;
_.this$2 = null;
function $InstanceListView$5(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $InstanceListView$5;
  $location_0[stackIndex] = 'InstanceListView.java:' + '283' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_684(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_684;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_InstanceListView$5_2_classLit;
}

function onClick_21(clickEvent){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClick_21;
  if ($location_0[stackIndex] = 'InstanceListView.java:' + '287' , $getSelection(this.this$0)) {
    $location_0[stackIndex] = 'InstanceListView.java:' + '290' , confirm_1('Terminate instance', 'Terminating this instance will stop further execution.', $InstanceListView$5$1(($location_0[stackIndex] = 'InstanceListView.java:' + '292' , new InstanceListView$5$1), this));
  }
   else {
    $location_0[stackIndex] = 'InstanceListView.java:' + '314' , $clinit_684();
    $location_0[stackIndex] = 'MessageBox.java:' + '111' , alert_2(($location_0[stackIndex] = 'MessageBox.java:' + '60' , $clinit_693() , ALERT), 'Missing selection', 'Please select an instance');
  }
  $stackDepth_0 = stackIndex - 1;
}

function InstanceListView$5(){
}

_ = InstanceListView$5.prototype = new Object_0;
_.getClass$ = getClass_684;
_.onClick = onClick_21;
_.typeId$ = 454;
_.this$0 = null;
function $InstanceListView$5$1(this$static, this$1){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $InstanceListView$5$1;
  $location_0[stackIndex] = 'InstanceListView.java:' + '292' , this$static.this$1 = this$1;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_685(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_685;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_InstanceListView$5$1_2_classLit;
}

function onResult_1(doIt){
  var selection, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onResult_1;
  if (doIt) {
    selection = ($location_0[stackIndex] = 'InstanceListView.java:' + '298' , $getSelection(this.this$1.this$0));
    $location_0[stackIndex] = 'InstanceListView.java:' + '299' , $setState_3(selection, ($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '45' , $clinit_950() , ENDED));
    $location_0[stackIndex] = 'InstanceListView.java:' + '300' , $setEndResult(selection, ($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '50' , $clinit_949() , OBSOLETE));
    $location_0[stackIndex] = 'InstanceListView.java:' + '301' , $handleEvent(this.this$1.this$0.controller, ($location_0[stackIndex] = 'InstanceListView.java:' + '302' , $Event(($location_0[stackIndex] = 'InstanceListView.java:' + '302' , new Event_0), ($location_0[stackIndex] = 'StateChangeAction.java:' + '44' , $clinit_1006() , ID_15), selection)));
  }
  $stackDepth_0 = stackIndex - 1;
}

function InstanceListView$5$1(){
}

_ = InstanceListView$5$1.prototype = new Object_0;
_.getClass$ = getClass_685;
_.onResult = onResult_1;
_.typeId$ = 0;
_.this$1 = null;
function $InstanceListView$6(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $InstanceListView$6;
  $location_0[stackIndex] = 'InstanceListView.java:' + '321' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_686(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_686;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_InstanceListView$6_2_classLit;
}

function onClick_22(clickEvent){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClick_22;
  if ($location_0[stackIndex] = 'InstanceListView.java:' + '325' , $getSelection(this.this$0)) {
    $location_0[stackIndex] = 'InstanceListView.java:' + '327' , confirm_1('Delete instance', 'Deleting this instance will remove any history information and associated tasks as well.', $InstanceListView$6$1(($location_0[stackIndex] = 'InstanceListView.java:' + '329' , new InstanceListView$6$1), this));
  }
   else {
    $location_0[stackIndex] = 'InstanceListView.java:' + '358' , $clinit_684();
    $location_0[stackIndex] = 'MessageBox.java:' + '111' , alert_2(($location_0[stackIndex] = 'MessageBox.java:' + '60' , $clinit_693() , ALERT), 'Missing selection', 'Please select an instance');
  }
  $stackDepth_0 = stackIndex - 1;
}

function InstanceListView$6(){
}

_ = InstanceListView$6.prototype = new Object_0;
_.getClass$ = getClass_686;
_.onClick = onClick_22;
_.typeId$ = 455;
_.this$0 = null;
function $InstanceListView$6$1(this$static, this$1){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $InstanceListView$6$1;
  $location_0[stackIndex] = 'InstanceListView.java:' + '329' , this$static.this$1 = this$1;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_687(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_687;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_InstanceListView$6$1_2_classLit;
}

function onResult_2(doIt){
  var $e0, e, selection, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onResult_2;
  if (doIt) {
    try {
      selection = ($location_0[stackIndex] = 'InstanceListView.java:' + '337' , $getSelection(this.this$1.this$0));
      $location_0[stackIndex] = 'InstanceListView.java:' + '339' , $setState_3(selection, ($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '45' , $clinit_950() , ENDED));
      $location_0[stackIndex] = 'InstanceListView.java:' + '341' , $handleEvent(this.this$1.this$0.controller, ($location_0[stackIndex] = 'InstanceListView.java:' + '342' , $Event(($location_0[stackIndex] = 'InstanceListView.java:' + '342' , new Event_0), ($location_0[stackIndex] = 'DeleteInstanceAction.java:' + '42' , $clinit_968() , ID_6), selection)));
    }
     catch ($e0) {
      $e0 = ($location_0[stackIndex] = 'InstanceListView.java:' + '348' , caught_0($e0));
      $stackDepth_0 = stackIndex;
      if (instanceOf($e0, 8)) {
        e = $e0;
        $location_0[stackIndex] = 'MessageBox.java:' + '110' , $clinit_684();
        $location_0[stackIndex] = 'MessageBox.java:' + '111' , alert_2(($location_0[stackIndex] = 'MessageBox.java:' + '60' , $clinit_693() , ALERT), 'Warning', ($location_0[stackIndex] = 'InstanceListView.java:' + '349' , e.getMessage()));
      }
       else 
        throw $e0;
    }
  }
  $stackDepth_0 = stackIndex - 1;
}

function InstanceListView$6$1(){
}

_ = InstanceListView$6$1.prototype = new Object_0;
_.getClass$ = getClass_687;
_.onResult = onResult_2;
_.typeId$ = 0;
_.this$1 = null;
function $InstanceListView$7(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $InstanceListView$7;
  $location_0[stackIndex] = 'InstanceListView.java:' + '364' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_688(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_688;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_InstanceListView$7_2_classLit;
}

function onClick_23(clickEvent){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClick_23;
  if ($location_0[stackIndex] = 'InstanceListView.java:' + '369' , $getSelection(this.this$0)) {
    $location_0[stackIndex] = 'InstanceListView.java:' + '371' , $createSignalWindow(this.this$0);
  }
   else {
    $location_0[stackIndex] = 'InstanceListView.java:' + '375' , $clinit_684();
    $location_0[stackIndex] = 'MessageBox.java:' + '111' , alert_2(($location_0[stackIndex] = 'MessageBox.java:' + '60' , $clinit_693() , ALERT), 'Missing selection', 'Please select an instance');
  }
  $stackDepth_0 = stackIndex - 1;
}

function InstanceListView$7(){
}

_ = InstanceListView$7.prototype = new Object_0;
_.getClass$ = getClass_688;
_.onClick = onClick_23;
_.typeId$ = 456;
_.this$0 = null;
function $InstanceListView$8(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $InstanceListView$8;
  $location_0[stackIndex] = 'InstanceListView.java:' + '571' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_689(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_689;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_InstanceListView$8_2_classLit;
}

function onClick_24(clickEvent){
  var foundMatch, index, ref, ref$iterator, selectedToken, token, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClick_24;
  selectedToken = ($location_0[stackIndex] = 'InstanceListView.java:' + '575' , $getSelectedIndex_0(this.this$0.listBoxTokens));
  if (selectedToken != -1 && ($location_0[stackIndex] = 'DOM.java:' + '760' , $getPropertyString(this.this$0.signalRef.element, 'value')).length > 0) {
    $location_0[stackIndex] = 'InstanceListView.java:' + '579' , $clinit_684();
    $location_0[stackIndex] = 'MessageBox.java:' + '111' , alert_2(($location_0[stackIndex] = 'MessageBox.java:' + '60' , $clinit_693() , ALERT), 'Multi selection', 'Known active nodes and signal ref (text box) is given, please choose only one of them');
  }
   else if (selectedToken != -1) {
    $location_0[stackIndex] = 'InstanceListView.java:' + '584' , $handleEvent(this.this$0.controller, ($location_0[stackIndex] = 'InstanceListView.java:' + '585' , $Event(($location_0[stackIndex] = 'InstanceListView.java:' + '585' , new Event_0), ($location_0[stackIndex] = 'SignalExecutionAction.java:' + '42' , $clinit_1003() , ID_13), ($location_0[stackIndex] = 'InstanceListView.java:' + '586' , $SignalInstanceEvent(($location_0[stackIndex] = 'InstanceListView.java:' + '586' , new SignalInstanceEvent), this.this$0.currentDefinition, $getSelection(this.this$0), dynamicCast($getItem_0(this.this$0.listBoxTokens, selectedToken), 240), ($location_0[stackIndex] = 'DOM.java:' + '760' , $getPropertyString(this.this$0.eventData.element, 'value')), selectedToken)))));
  }
   else if (($location_0[stackIndex] = 'DOM.java:' + '760' , $getPropertyString(this.this$0.signalRef.element, 'value')).length > 0) {
    token = $TokenReference(($location_0[stackIndex] = 'InstanceListView.java:' + '590' , new TokenReference));
    $location_0[stackIndex] = 'TokenReference.java:' + '57' , token.id_0 = ($location_0[stackIndex] = 'InstanceListView.java:' + '591' , $getSelection(this.this$0)).id_0;
    $location_0[stackIndex] = 'TokenReference.java:' + '62' , token.name_0 = ($location_0[stackIndex] = 'DOM.java:' + '760' , $getPropertyString(this.this$0.signalRef.element, 'value'));
    $location_0[stackIndex] = 'InstanceListView.java:' + '593' , foundMatch = -1;
    $location_0[stackIndex] = 'InstanceListView.java:' + '594' , index = 0;
    for ($location_0[stackIndex] = 'InstanceListView.java:' + '596' , ref$iterator = $AbstractList$IteratorImpl(($location_0[stackIndex] = 'AbstractList.java:' + '278' , new AbstractList$IteratorImpl), this.this$0.tokensToSignal); ref$iterator.i < ($location_0[stackIndex] = 'AbstractList.java:' + '38' , ref$iterator.this$0.size_1());) {
      ref = dynamicCast(($location_0[stackIndex] = 'InstanceListView.java:' + '596' , $next_6(ref$iterator)), 240);
      if ($location_0[stackIndex] = 'InstanceListView.java:' + '598' , $equals_4(ref.name_0, token.name_0)) {
        $location_0[stackIndex] = 'InstanceListView.java:' + '599' , foundMatch = index;
        break;
      }
      $location_0[stackIndex] = 'InstanceListView.java:' + '602' , ++index;
    }
    $location_0[stackIndex] = 'InstanceListView.java:' + '605' , $handleEvent(this.this$0.controller, ($location_0[stackIndex] = 'InstanceListView.java:' + '606' , $Event(($location_0[stackIndex] = 'InstanceListView.java:' + '606' , new Event_0), ($location_0[stackIndex] = 'SignalExecutionAction.java:' + '42' , $clinit_1003() , ID_13), ($location_0[stackIndex] = 'InstanceListView.java:' + '607' , $SignalInstanceEvent(($location_0[stackIndex] = 'InstanceListView.java:' + '607' , new SignalInstanceEvent), this.this$0.currentDefinition, $getSelection(this.this$0), token, ($location_0[stackIndex] = 'DOM.java:' + '760' , $getPropertyString(this.this$0.eventData.element, 'value')), foundMatch)))));
  }
   else {
    $location_0[stackIndex] = 'InstanceListView.java:' + '610' , $clinit_684();
    $location_0[stackIndex] = 'MessageBox.java:' + '111' , alert_2(($location_0[stackIndex] = 'MessageBox.java:' + '60' , $clinit_693() , ALERT), 'Incomplete selection', 'Please select element you want to signal');
  }
  $stackDepth_0 = stackIndex - 1;
}

function InstanceListView$8(){
}

_ = InstanceListView$8.prototype = new Object_0;
_.getClass$ = getClass_689;
_.onClick = onClick_24;
_.typeId$ = 457;
_.this$0 = null;
function $InstanceListView$9(this$static, this$0){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $InstanceListView$9;
  $location_0[stackIndex] = 'InstanceListView.java:' + '620' , this$static.this$0 = this$0;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_690(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_690;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_InstanceListView$9_2_classLit;
}

function onClick_25(clickEvent){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onClick_25;
  $location_0[stackIndex] = 'PopupPanel.java:' + '571' , $hide_2(this.this$0.signalWindowPanel.window_0);
  $handleEvent(this.this$0.controller, ($location_0[stackIndex] = 'InstanceListView.java:' + '626' , $Event(($location_0[stackIndex] = 'InstanceListView.java:' + '626' , new Event_0), ($location_0[stackIndex] = 'UpdateInstancesAction.java:' + '47' , $clinit_1010() , ID_19), this.this$0.currentDefinition)));
  $stackDepth_0 = stackIndex - 1;
}

function InstanceListView$9(){
}

_ = InstanceListView$9.prototype = new Object_0;
_.getClass$ = getClass_690;
_.onClick = onClick_25;
_.typeId$ = 458;
_.this$0 = null;
function $JSONTree(this$static, json){
  var root, tree, ret, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $JSONTree;
  $location_0[stackIndex] = 'JSONTree.java:' + '36' , $ScrollPanel(this$static);
  tree = $Tree(($location_0[stackIndex] = 'JSONTree.java:' + '40' , new Tree));
  $location_0[stackIndex] = 'JSONTree.java:' + '41' , root = (ret = $TreeItem_0(($location_0[stackIndex] = 'Tree.java:' + '327' , new TreeItem), 'message') , ($location_0[stackIndex] = 'Tree.java:' + '339' , $addItem_3(tree.root, ret)) , ret);
  $parseObject(this$static, root, ($location_0[stackIndex] = 'JSONTree.java:' + '43' , parse(json)));
  $location_0[stackIndex] = 'JSONTree.java:' + '45' , $add_3(this$static, tree);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function $parseObject(this$static, root, topLevel){
  var innerKey, innerKey$iterator, jsonValue, rootJSO, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $parseObject;
  rootJSO = ($location_0[stackIndex] = 'JSONTree.java:' + '79' , topLevel.isObject());
  if (!rootJSO)
    throw $IllegalArgumentException_0(($location_0[stackIndex] = 'JSONTree.java:' + '81' , new IllegalArgumentException), 'Not a JSON object: ' + topLevel);
  for ($location_0[stackIndex] = 'JSONTree.java:' + '83' , innerKey$iterator = ($location_0[stackIndex] = 'AbstractList.java:' + '278' , $AbstractList$IteratorImpl(($location_0[stackIndex] = 'AbstractList.java:' + '278' , new AbstractList$IteratorImpl), ($location_0[stackIndex] = 'Arrays.java:' + '99' , $Arrays$ArrayList(($location_0[stackIndex] = 'Arrays.java:' + '99' , new Arrays$ArrayList), ($location_0[stackIndex] = 'JSONTree.java:' + '83' , $keySet_0(rootJSO)).val$keys)))); innerKey$iterator.i < ($location_0[stackIndex] = 'AbstractList.java:' + '38' , innerKey$iterator.this$0.size_1());) {
    innerKey = dynamicCast(($location_0[stackIndex] = 'JSONTree.java:' + '83' , $next_6(innerKey$iterator)), 1);
    jsonValue = ($location_0[stackIndex] = 'JSONTree.java:' + '85' , $get_3(rootJSO, innerKey));
    ($location_0[stackIndex] = 'JSONTree.java:' + '86' , jsonValue.isObject())?($location_0[stackIndex] = 'JSONTree.java:' + '88' , $parseObject(this$static, root, jsonValue)):!!($location_0[stackIndex] = 'JSONTree.java:' + '90' , jsonValue.isArray()) || ($location_0[stackIndex] = 'JSONTree.java:' + '96' , $parseValue(root, innerKey, jsonValue));
  }
  $stackDepth_0 = stackIndex - 1;
}

function $parseValue(root, key, jsonValue){
  var fastTreeItem, treeItem, ret, ret_0, ret_1, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $parseValue;
  if ($location_0[stackIndex] = 'JSONTree.java:' + '50' , jsonValue.isBoolean()) {
    $location_0[stackIndex] = 'JSONTree.java:' + '52' , treeItem = (ret = $TreeItem_0(($location_0[stackIndex] = 'TreeItem.java:' + '296' , new TreeItem), key) , ($location_0[stackIndex] = 'TreeItem.java:' + '297' , root.addItem(ret)) , ret);
    $addItem_2(treeItem, ($location_0[stackIndex] = 'JSONBoolean.java:' + '83' , $clinit_515() , '' + ($location_0[stackIndex] = 'JSONTree.java:' + '53' , jsonValue.isBoolean()).value_0));
  }
   else if ($location_0[stackIndex] = 'JSONTree.java:' + '55' , jsonValue.isNumber()) {
    $location_0[stackIndex] = 'JSONTree.java:' + '57' , fastTreeItem = (ret_0 = $TreeItem_0(($location_0[stackIndex] = 'TreeItem.java:' + '296' , new TreeItem), key) , ($location_0[stackIndex] = 'TreeItem.java:' + '297' , root.addItem(ret_0)) , ret_0);
    $addItem_2(fastTreeItem, ($location_0[stackIndex] = 'JSONTree.java:' + '58' , jsonValue.isNumber()).value_0 + '');
  }
   else if ($location_0[stackIndex] = 'JSONTree.java:' + '60' , jsonValue.isString()) {
    $location_0[stackIndex] = 'JSONTree.java:' + '62' , treeItem = (ret_1 = $TreeItem_0(($location_0[stackIndex] = 'TreeItem.java:' + '296' , new TreeItem), key) , ($location_0[stackIndex] = 'TreeItem.java:' + '297' , root.addItem(ret_1)) , ret_1);
    $location_0[stackIndex] = 'JSONTree.java:' + '63' , $addItem_2(treeItem, ($location_0[stackIndex] = 'JSONString.java:' + '84' , escapeValue(($location_0[stackIndex] = 'JSONTree.java:' + '63' , jsonValue.isString()).value_0)));
  }
   else {
    $location_0[stackIndex] = 'ConsoleLog.java:' + '41' , $clinit_24();
    $location_0[stackIndex] = 'Log.java:' + '651' , $warn(impl, 'Unexpected JSON value: ' + jsonValue, null);
  }
  $stackDepth_0 = stackIndex - 1;
}

function getClass_691(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_691;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_JSONTree_2_classLit;
}

function JSONTree(){
}

_ = JSONTree.prototype = new ScrollPanel;
_.getClass$ = getClass_691;
_.typeId$ = 459;
function $clinit_996(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_996;
  $location_0[stackIndex] = 'LoadActivityDiagramAction.java:' + '43' , $clinit_996 = nullMethod;
  $location_0[stackIndex] = 'LoadActivityDiagramAction.java:' + '45' , ID_11 = Lorg_jboss_bpm_console_client_process_LoadActivityDiagramAction_2_classLit.typeName;
  $stackDepth_0 = stackIndex - 1;
}

function $LoadActivityDiagramAction(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $LoadActivityDiagramAction;
  $location_0[stackIndex] = 'LoadActivityDiagramAction.java:' + '43' , $clinit_996();
  dynamicCast(($location_0[stackIndex] = 'AbstractRESTAction.java:' + '44' , get_16(Lorg_jboss_bpm_console_client_ApplicationContext_2_classLit)), 225);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_692(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_692;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_LoadActivityDiagramAction_2_classLit;
}

function getId_3(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getId_3;
  $stackDepth_0 = stackIndex - 1;
  return ID_11;
}

function getRequestMethod_3(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getRequestMethod_3;
  returnTemp = ($location_0[stackIndex] = 'RequestBuilder.java:' + '60' , $clinit_213() , GET);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getUrl_5(event_0){
  var inst, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getUrl_5;
  inst = ($location_0[stackIndex] = 'LoadActivityDiagramAction.java:' + '54' , dynamicCast(event_0, 232));
  returnTemp = $getActiveNodeInfoURL(($location_0[stackIndex] = 'LoadActivityDiagramAction.java:' + '55' , getInstance_2() , inst.id_0));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function handleSuccessfulResponse_3(controller, event_0, response){
  var activeNodeInfos, def, inst, view, viewData, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = handleSuccessfulResponse_3;
  inst = ($location_0[stackIndex] = 'LoadActivityDiagramAction.java:' + '68' , dynamicCast(event_0, 232));
  if (inst.lifecycle.current == ($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '45' , $clinit_950() , ENDED) || response.val$xmlHttpRequest.responseText.length == 0) {
    $location_0[stackIndex] = 'LoadActivityDiagramAction.java:' + '70' , $clinit_684();
    $location_0[stackIndex] = 'MessageBox.java:' + '111' , alert_2(($location_0[stackIndex] = 'MessageBox.java:' + '60' , $clinit_693() , ALERT), 'Info', 'Process is already completed');
    view = ($location_0[stackIndex] = 'LoadActivityDiagramAction.java:' + '72' , dynamicCast(dynamicCast(($location_0[stackIndex] = 'Controller.java:' + '67' , $get_7(controller.views, ($location_0[stackIndex] = 'InstanceListView.java:' + '75' , $clinit_979() , ID_10))), 168), 235));
    $location_0[stackIndex] = 'LoadActivityDiagramAction.java:' + '73' , def = view.currentDefinition;
    $handleEvent(controller, ($location_0[stackIndex] = 'LoadActivityDiagramAction.java:' + '76' , $Event(($location_0[stackIndex] = 'LoadActivityDiagramAction.java:' + '76' , new Event_0), ($location_0[stackIndex] = 'UpdateInstancesAction.java:' + '47' , $clinit_1010() , ID_19), def)));
  }
   else {
    viewData = ($location_0[stackIndex] = 'LoadActivityDiagramAction.java:' + '78' , dynamicCast(dynamicCast(($location_0[stackIndex] = 'Controller.java:' + '67' , $get_7(controller.views, ($location_0[stackIndex] = 'InstanceDetailView.java:' + '58' , $clinit_973() , ID_9))), 168), 236));
    $location_0[stackIndex] = 'InstanceDetailView.java:' + '215' , $createDiagramWindow(viewData, viewData.currentInstance);
    activeNodeInfos = ($location_0[stackIndex] = 'LoadActivityDiagramAction.java:' + '81' , parseActiveNodeInfo(response.val$xmlHttpRequest.responseText));
    view = ($location_0[stackIndex] = 'LoadActivityDiagramAction.java:' + '83' , dynamicCast(dynamicCast(($location_0[stackIndex] = 'Controller.java:' + '67' , $get_7(controller.views, ($location_0[stackIndex] = 'ActivityDiagramView.java:' + '43' , $clinit_956() , ID_2))), 168), 241));
    $update_2(view, $ActivityDiagramResultEvent(($location_0[stackIndex] = 'LoadActivityDiagramAction.java:' + '84' , new ActivityDiagramResultEvent), $getProcessImageURL((getInstance_2() , inst.definitionId)), activeNodeInfos));
  }
  $stackDepth_0 = stackIndex - 1;
}

function LoadActivityDiagramAction(){
}

_ = LoadActivityDiagramAction.prototype = new AbstractRESTAction;
_.getClass$ = getClass_692;
_.getId = getId_3;
_.getRequestMethod = getRequestMethod_3;
_.getUrl_0 = getUrl_5;
_.handleSuccessfulResponse = handleSuccessfulResponse_3;
_.typeId$ = 460;
var ID_11;
function $clinit_997(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_997;
  $location_0[stackIndex] = 'LoadInstanceActivityImage.java:' + '28' , $clinit_997 = nullMethod;
  $location_0[stackIndex] = 'LoadInstanceActivityImage.java:' + '30' , ID_12 = Lorg_jboss_bpm_console_client_process_LoadActivityDiagramAction_2_classLit.typeName;
  $stackDepth_0 = stackIndex - 1;
}

function $LoadInstanceActivityImage(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $LoadInstanceActivityImage;
  $location_0[stackIndex] = 'LoadInstanceActivityImage.java:' + '28' , $clinit_997();
  dynamicCast(($location_0[stackIndex] = 'AbstractRESTAction.java:' + '44' , get_16(Lorg_jboss_bpm_console_client_ApplicationContext_2_classLit)), 225);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_693(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_693;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_LoadInstanceActivityImage_2_classLit;
}

function getId_4(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getId_4;
  $stackDepth_0 = stackIndex - 1;
  return ID_12;
}

function getRequestMethod_4(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getRequestMethod_4;
  returnTemp = ($location_0[stackIndex] = 'RequestBuilder.java:' + '60' , $clinit_213() , GET);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getUrl_6(event_0){
  var inst, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getUrl_6;
  inst = ($location_0[stackIndex] = 'LoadInstanceActivityImage.java:' + '39' , dynamicCast(event_0, 232));
  returnTemp = $getActivityImage(($location_0[stackIndex] = 'LoadInstanceActivityImage.java:' + '40' , getInstance_2() , inst.definitionId), inst.id_0);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function handleSuccessfulResponse_4(controller, event_0, response){
  var inst, url, view, html, imageUrlNoCache, s, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = handleSuccessfulResponse_4;
  inst = ($location_0[stackIndex] = 'LoadInstanceActivityImage.java:' + '51' , dynamicCast(event_0, 232));
  view = ($location_0[stackIndex] = 'LoadInstanceActivityImage.java:' + '54' , dynamicCast(dynamicCast(($location_0[stackIndex] = 'Controller.java:' + '67' , $get_7(controller.views, ($location_0[stackIndex] = 'ActivityDiagramView.java:' + '43' , $clinit_956() , ID_2))), 168), 241));
  url = $getActivityImage(($location_0[stackIndex] = 'LoadInstanceActivityImage.java:' + '55' , getInstance_2() , inst.definitionId), inst.id_0);
  $location_0[stackIndex] = 'ActivityDiagramView.java:' + '97' , $clear_1(view);
  $location_0[stackIndex] = 'ActivityDiagramView.java:' + '98' , imageUrlNoCache = url + '?' + toString_18(($location_0[stackIndex] = 'System.java:' + '93' , fromDouble(($location_0[stackIndex] = 'System.java:' + '126' , new Date).getTime())));
  $location_0[stackIndex] = 'ConsoleLog.java:' + '53' , $clinit_24();
  $location_0[stackIndex] = 'Log.java:' + '150' , $debug(impl, 'Getting image from ' + imageUrlNoCache, null);
  $location_0[stackIndex] = 'ActivityDiagramView.java:' + '100' , s = '<div style=\'width:1024px; height:768px; background-color:#ffffff;\'><div id="imageContainer" style="position:relative;top:-1;left:-1;"><img src="' + imageUrlNoCache + '" style="position:absolute;top:0;left:0" />';
  $location_0[stackIndex] = 'ActivityDiagramView.java:' + '104' , s += '<\/div><\/div>';
  html = $HTML_0(($location_0[stackIndex] = 'ActivityDiagramView.java:' + '107' , new HTML), s);
  $location_0[stackIndex] = 'LayoutPanel.java:' + '391' , $insert_0(view, html, view.children.size_0);
  $location_0[stackIndex] = 'LayoutPanel.java:' + '600' , $invalidate_1(view, null);
  $stackDepth_0 = stackIndex - 1;
}

function LoadInstanceActivityImage(){
}

_ = LoadInstanceActivityImage.prototype = new AbstractRESTAction;
_.getClass$ = getClass_693;
_.getId = getId_4;
_.getRequestMethod = getRequestMethod_4;
_.getUrl_0 = getUrl_6;
_.handleSuccessfulResponse = handleSuccessfulResponse_4;
_.typeId$ = 461;
var ID_12;
function $provideWidget_3(this$static, callback){
  var splitPanel, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $provideWidget_3;
  dynamicCast(($location_0[stackIndex] = 'MergedProcessView.java:' + '44' , get_16(Lcom_mvc4g_client_Controller_2_classLit)), 167);
  this$static.panel = $MosaicPanel(($location_0[stackIndex] = 'MergedProcessView.java:' + '46' , new MosaicPanel));
  $location_0[stackIndex] = 'LayoutPanel.java:' + '289' , setStyleAttribute_0(this$static.panel.element, 'padding', '0px');
  this$static.definitionView = ($location_0[stackIndex] = 'DefinitionListView.java:' + '61' , $clinit_958() , ($location_0[stackIndex] = 'MergedProcessView.java:' + '49' , new DefinitionListView));
  this$static.instanceView = $InstanceListView(($location_0[stackIndex] = 'MergedProcessView.java:' + '50' , new InstanceListView));
  splitPanel = $MosaicPanel_0(($location_0[stackIndex] = 'MergedProcessView.java:' + '52' , new MosaicPanel), $ColumnLayout(new ColumnLayout));
  $location_0[stackIndex] = 'LayoutPanel.java:' + '289' , setStyleAttribute_0(splitPanel.element, 'padding', '0px');
  $provideWidget_1(this$static.definitionView, $MergedProcessView$1(($location_0[stackIndex] = 'MergedProcessView.java:' + '55' , new MergedProcessView$1), splitPanel));
  $location_0[stackIndex] = 'MergedProcessView.java:' + '68' , $provideWidget_2(this$static.instanceView, $MergedProcessView$2(($location_0[stackIndex] = 'MergedProcessView.java:' + '69' , new MergedProcessView$2), splitPanel));
  $location_0[stackIndex] = 'MergedProcessView.java:' + '83' , $add_25(this$static.panel, splitPanel);
  $location_0[stackIndex] = 'MergedProcessView.java:' + '85' , callback.onSuccess(this$static.panel);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_694(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_694;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_MergedProcessView_2_classLit;
}

_ = MergedProcessView.prototype;
_.getClass$ = getClass_694;
function $MergedProcessView$1(this$static, val$splitPanel){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $MergedProcessView$1;
  $location_0[stackIndex] = 'MergedProcessView.java:' + '55' , this$static.val$splitPanel = val$splitPanel;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_695(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_695;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_MergedProcessView$1_2_classLit;
}

function onSuccess(instance){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onSuccess;
  $add_26(this.val$splitPanel, instance, $ColumnLayoutData_0(($location_0[stackIndex] = 'MergedProcessView.java:' + '59' , new ColumnLayoutData), '250 px'));
  $stackDepth_0 = stackIndex - 1;
}

function MergedProcessView$1(){
}

_ = MergedProcessView$1.prototype = new Object_0;
_.getClass$ = getClass_695;
_.onSuccess = onSuccess;
_.typeId$ = 0;
_.val$splitPanel = null;
function $MergedProcessView$2(this$static, val$splitPanel){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $MergedProcessView$2;
  $location_0[stackIndex] = 'MergedProcessView.java:' + '69' , this$static.val$splitPanel = val$splitPanel;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_696(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_696;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_MergedProcessView$2_2_classLit;
}

function onSuccess_0(instance){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = onSuccess_0;
  $location_0[stackIndex] = 'MergedProcessView.java:' + '73' , $add_25(this.val$splitPanel, instance);
  $stackDepth_0 = stackIndex - 1;
}

function MergedProcessView$2(){
}

_ = MergedProcessView$2.prototype = new Object_0;
_.getClass$ = getClass_696;
_.onSuccess = onSuccess_0;
_.typeId$ = 0;
_.val$splitPanel = null;
var instance_15 = null;
function $clinit_1003(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1003;
  $location_0[stackIndex] = 'SignalExecutionAction.java:' + '40' , $clinit_1003 = nullMethod;
  $location_0[stackIndex] = 'SignalExecutionAction.java:' + '42' , ID_13 = Lorg_jboss_bpm_console_client_process_SignalExecutionAction_2_classLit.typeName;
  $stackDepth_0 = stackIndex - 1;
}

function $SignalExecutionAction(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $SignalExecutionAction;
  $location_0[stackIndex] = 'SignalExecutionAction.java:' + '40' , $clinit_1003();
  dynamicCast(($location_0[stackIndex] = 'AbstractRESTAction.java:' + '44' , get_16(Lorg_jboss_bpm_console_client_ApplicationContext_2_classLit)), 225);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_699(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_699;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_SignalExecutionAction_2_classLit;
}

function getId_5(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getId_5;
  $stackDepth_0 = stackIndex - 1;
  return ID_13;
}

function getRequestMethod_5(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getRequestMethod_5;
  returnTemp = ($location_0[stackIndex] = 'RequestBuilder.java:' + '70' , $clinit_213() , POST);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getUrl_7(event_0){
  var data, def, eventData, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getUrl_7;
  def = ($location_0[stackIndex] = 'SignalExecutionAction.java:' + '51' , dynamicCast(event_0, 242));
  $location_0[stackIndex] = 'SignalExecutionAction.java:' + '52' , data = def.token.name_0;
  $location_0[stackIndex] = 'SignalExecutionAction.java:' + '54' , eventData = def.signalName;
  eventData != null && !$equalsIgnoreCase(($location_0[stackIndex] = 'SignalExecutionAction.java:' + '55' , $trim(eventData)), '') && ($location_0[stackIndex] = 'SignalExecutionAction.java:' + '56' , data += '^' + eventData);
  returnTemp = $getExecutionSignalUrl(($location_0[stackIndex] = 'SignalExecutionAction.java:' + '59' , getInstance_2() , def.token), data);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function handleSuccessfulResponse_5(controller, event_0, response){
  var def, t, view, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = handleSuccessfulResponse_5;
  def = ($location_0[stackIndex] = 'SignalExecutionAction.java:' + '70' , dynamicCast(event_0, 242));
  view = ($location_0[stackIndex] = 'SignalExecutionAction.java:' + '71' , dynamicCast(dynamicCast(($location_0[stackIndex] = 'Controller.java:' + '67' , $get_7(controller.views, ($location_0[stackIndex] = 'InstanceListView.java:' + '75' , $clinit_979() , ID_10))), 168), 235));
  !!view && ($location_0[stackIndex] = 'SignalExecutionAction.java:' + '72' , $renderSignalListBox(view, def.index_0));
  t = $SignalExecutionAction$1(($location_0[stackIndex] = 'SignalExecutionAction.java:' + '76' , new SignalExecutionAction$1), controller, def);
  $location_0[stackIndex] = 'SignalExecutionAction.java:' + '88' , $schedule(t, 500);
  $stackDepth_0 = stackIndex - 1;
}

function SignalExecutionAction(){
}

_ = SignalExecutionAction.prototype = new AbstractRESTAction;
_.getClass$ = getClass_699;
_.getId = getId_5;
_.getRequestMethod = getRequestMethod_5;
_.getUrl_0 = getUrl_7;
_.handleSuccessfulResponse = handleSuccessfulResponse_5;
_.typeId$ = 464;
var ID_13;
function $clinit_1004(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1004;
  $location_0[stackIndex] = 'SignalExecutionAction.java:' + '76' , $clinit_1004 = nullMethod;
  $clinit_43();
  $stackDepth_0 = stackIndex - 1;
}

function $SignalExecutionAction$1(this$static, val$controller, val$def){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $SignalExecutionAction$1;
  $location_0[stackIndex] = 'SignalExecutionAction.java:' + '76' , $clinit_1004();
  this$static.val$controller = val$controller;
  this$static.val$def = val$def;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_700(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_700;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_SignalExecutionAction$1_2_classLit;
}

function run_19(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = run_19;
  $location_0[stackIndex] = 'SignalExecutionAction.java:' + '82' , $handleEvent(this.val$controller, ($location_0[stackIndex] = 'SignalExecutionAction.java:' + '83' , $Event(($location_0[stackIndex] = 'SignalExecutionAction.java:' + '83' , new Event_0), ($location_0[stackIndex] = 'UpdateInstancesAction.java:' + '47' , $clinit_1010() , ID_19), this.val$def.definition)));
  $stackDepth_0 = stackIndex - 1;
}

function SignalExecutionAction$1(){
}

_ = SignalExecutionAction$1.prototype = new Timer;
_.getClass$ = getClass_700;
_.run = run_19;
_.typeId$ = 465;
_.val$controller = null;
_.val$def = null;
function $clinit_1005(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1005;
  $location_0[stackIndex] = 'StartNewInstanceAction.java:' + '38' , $clinit_1005 = nullMethod;
  $location_0[stackIndex] = 'StartNewInstanceAction.java:' + '40' , ID_14 = Lorg_jboss_bpm_console_client_process_StartNewInstanceAction_2_classLit.typeName;
  $stackDepth_0 = stackIndex - 1;
}

function $StartNewInstanceAction(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $StartNewInstanceAction;
  $location_0[stackIndex] = 'StartNewInstanceAction.java:' + '38' , $clinit_1005();
  dynamicCast(($location_0[stackIndex] = 'AbstractRESTAction.java:' + '44' , get_16(Lorg_jboss_bpm_console_client_ApplicationContext_2_classLit)), 225);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_701(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_701;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_StartNewInstanceAction_2_classLit;
}

function getId_6(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getId_6;
  $stackDepth_0 = stackIndex - 1;
  return ID_14;
}

function getRequestMethod_6(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getRequestMethod_6;
  returnTemp = ($location_0[stackIndex] = 'RequestBuilder.java:' + '70' , $clinit_213() , POST);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getUrl_8(event_0){
  var def, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getUrl_8;
  def = ($location_0[stackIndex] = 'StartNewInstanceAction.java:' + '49' , dynamicCast(event_0, 231));
  returnTemp = $getStartNewInstanceURL(($location_0[stackIndex] = 'StartNewInstanceAction.java:' + '50' , getInstance_2() , def.id_0));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function handleSuccessfulResponse_6(controller, event_0, response){
  var def, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = handleSuccessfulResponse_6;
  def = ($location_0[stackIndex] = 'StartNewInstanceAction.java:' + '60' , dynamicCast(event_0, 231));
  $location_0[stackIndex] = 'StartNewInstanceAction.java:' + '63' , $handleEvent(controller, ($location_0[stackIndex] = 'StartNewInstanceAction.java:' + '64' , $Event(($location_0[stackIndex] = 'StartNewInstanceAction.java:' + '64' , new Event_0), ($location_0[stackIndex] = 'UpdateInstancesAction.java:' + '47' , $clinit_1010() , ID_19), def)));
  $stackDepth_0 = stackIndex - 1;
}

function StartNewInstanceAction(){
}

_ = StartNewInstanceAction.prototype = new AbstractRESTAction;
_.getClass$ = getClass_701;
_.getId = getId_6;
_.getRequestMethod = getRequestMethod_6;
_.getUrl_0 = getUrl_8;
_.handleSuccessfulResponse = handleSuccessfulResponse_6;
_.typeId$ = 466;
var ID_14;
function $clinit_1006(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1006;
  $location_0[stackIndex] = 'StateChangeAction.java:' + '42' , $clinit_1006 = nullMethod;
  $location_0[stackIndex] = 'StateChangeAction.java:' + '44' , ID_15 = Lorg_jboss_bpm_console_client_process_StateChangeAction_2_classLit.typeName;
  $stackDepth_0 = stackIndex - 1;
}

function $StateChangeAction(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $StateChangeAction;
  $location_0[stackIndex] = 'StateChangeAction.java:' + '42' , $clinit_1006();
  dynamicCast(($location_0[stackIndex] = 'AbstractRESTAction.java:' + '44' , get_16(Lorg_jboss_bpm_console_client_ApplicationContext_2_classLit)), 225);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_702(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_702;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_StateChangeAction_2_classLit;
}

function getId_7(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getId_7;
  $stackDepth_0 = stackIndex - 1;
  return ID_15;
}

function getRequestMethod_7(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getRequestMethod_7;
  returnTemp = ($location_0[stackIndex] = 'RequestBuilder.java:' + '70' , $clinit_213() , POST);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getUrl_9(event_0){
  var inst, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getUrl_9;
  inst = ($location_0[stackIndex] = 'StateChangeAction.java:' + '53' , dynamicCast(event_0, 232));
  if (($location_0[stackIndex] = 'ProcessInstanceRef.java:' + '45' , $clinit_950() , ENDED) == inst.lifecycle.current) {
    returnTemp = $getInstanceEndURL(($location_0[stackIndex] = 'StateChangeAction.java:' + '55' , getInstance_2() , inst.id_0), inst.endResult);
    $stackDepth_0 = stackIndex - 1;
    return returnTemp;
  }
   else {
    returnTemp = $getStateChangeURL(($location_0[stackIndex] = 'StateChangeAction.java:' + '57' , getInstance_2() , inst.id_0), inst.lifecycle.current);
    $stackDepth_0 = stackIndex - 1;
    return returnTemp;
  }
  $stackDepth_0 = stackIndex - 1;
}

function handleError_1(url, t){
  var message, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = handleError_1;
  message = ($location_0[stackIndex] = 'StateChangeAction.java:' + '76' , t.getMessage());
  message = ($location_0[stackIndex] = 'StateChangeAction.java:' + '78' , $replaceFirst(message, 'HTTP \\d*: ', ''));
  $location_0[stackIndex] = 'ConsoleLog.java:' + '41' , $clinit_24();
  $location_0[stackIndex] = 'Log.java:' + '651' , $warn(impl, 'Server reported following warning: ' + message + ' for url ' + url, null);
  $location_0[stackIndex] = 'StateChangeAction.java:' + '81' , $clinit_684();
  $location_0[stackIndex] = 'MessageBox.java:' + '111' , alert_2(($location_0[stackIndex] = 'MessageBox.java:' + '60' , $clinit_693() , ALERT), 'Status information', message);
  $stackDepth_0 = stackIndex - 1;
}

function handlePostError_1(controller, event_0){
  var def, view, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = handlePostError_1;
  view = ($location_0[stackIndex] = 'StateChangeAction.java:' + '86' , dynamicCast(dynamicCast(($location_0[stackIndex] = 'Controller.java:' + '67' , $get_7(controller.views, ($location_0[stackIndex] = 'InstanceListView.java:' + '75' , $clinit_979() , ID_10))), 168), 235));
  $location_0[stackIndex] = 'StateChangeAction.java:' + '87' , def = view.currentDefinition;
  $handleEvent(controller, ($location_0[stackIndex] = 'StateChangeAction.java:' + '90' , $Event(($location_0[stackIndex] = 'StateChangeAction.java:' + '90' , new Event_0), ($location_0[stackIndex] = 'UpdateInstancesAction.java:' + '47' , $clinit_1010() , ID_19), def)));
  $stackDepth_0 = stackIndex - 1;
}

function handleSuccessfulResponse_7(controller, event_0, response){
  var def, view, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = handleSuccessfulResponse_7;
  view = ($location_0[stackIndex] = 'StateChangeAction.java:' + '67' , dynamicCast(dynamicCast(($location_0[stackIndex] = 'Controller.java:' + '67' , $get_7(controller.views, ($location_0[stackIndex] = 'InstanceListView.java:' + '75' , $clinit_979() , ID_10))), 168), 235));
  $location_0[stackIndex] = 'StateChangeAction.java:' + '68' , def = view.currentDefinition;
  $handleEvent(controller, ($location_0[stackIndex] = 'StateChangeAction.java:' + '71' , $Event(($location_0[stackIndex] = 'StateChangeAction.java:' + '71' , new Event_0), ($location_0[stackIndex] = 'UpdateInstancesAction.java:' + '47' , $clinit_1010() , ID_19), def)));
  $stackDepth_0 = stackIndex - 1;
}

function StateChangeAction(){
}

_ = StateChangeAction.prototype = new AbstractRESTAction;
_.getClass$ = getClass_702;
_.getId = getId_7;
_.getRequestMethod = getRequestMethod_7;
_.getUrl_0 = getUrl_9;
_.handleError = handleError_1;
_.handlePostError = handlePostError_1;
_.handleSuccessfulResponse = handleSuccessfulResponse_7;
_.typeId$ = 467;
var ID_15;
function $clinit_1007(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1007;
  $location_0[stackIndex] = 'UpdateDefinitionsAction.java:' + '46' , $clinit_1007 = nullMethod;
  $location_0[stackIndex] = 'UpdateDefinitionsAction.java:' + '48' , ID_16 = Lorg_jboss_bpm_console_client_process_UpdateDefinitionsAction_2_classLit.typeName;
  $stackDepth_0 = stackIndex - 1;
}

function $UpdateDefinitionsAction(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $UpdateDefinitionsAction;
  $location_0[stackIndex] = 'UpdateDefinitionsAction.java:' + '46' , $clinit_1007();
  dynamicCast(($location_0[stackIndex] = 'AbstractRESTAction.java:' + '44' , get_16(Lorg_jboss_bpm_console_client_ApplicationContext_2_classLit)), 225);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_703(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_703;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_UpdateDefinitionsAction_2_classLit;
}

function getDataDriven_0(controller){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getDataDriven_0;
  returnTemp = ($location_0[stackIndex] = 'UpdateDefinitionsAction.java:' + '69' , dynamicCast(dynamicCast(($location_0[stackIndex] = 'Controller.java:' + '67' , $get_7(controller.views, ($location_0[stackIndex] = 'DefinitionListView.java:' + '63' , $clinit_958() , ID_4))), 168), 243));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getId_8(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getId_8;
  $stackDepth_0 = stackIndex - 1;
  return ID_16;
}

function getRequestMethod_8(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getRequestMethod_8;
  returnTemp = ($location_0[stackIndex] = 'RequestBuilder.java:' + '60' , $clinit_213() , GET);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getUrl_10(event_0){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getUrl_10;
  returnTemp = ($location_0[stackIndex] = 'UpdateDefinitionsAction.java:' + '58' , getInstance_2() , ($location_0[stackIndex] = 'URLBuilder.java:' + '61' , $getConsoleServerUrl(config_0)) + '/rs/process/definitions');
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function handleSuccessfulResponse_8(controller, event_0, response){
  var definitions, isjBPMInstance, start, view, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = handleSuccessfulResponse_8;
  this.appContext = dynamicCast(($location_0[stackIndex] = 'UpdateDefinitionsAction.java:' + '74' , get_16(Lorg_jboss_bpm_console_client_ApplicationContext_2_classLit)), 225);
  isjBPMInstance = ($location_0[stackIndex] = 'UpdateDefinitionsAction.java:' + '75' , $equals_4(this.appContext.val$config.profileName, 'jBPM Console'));
  $location_0[stackIndex] = 'UpdateDefinitionsAction.java:' + '76' , start = ($location_0[stackIndex] = 'System.java:' + '93' , fromDouble(($location_0[stackIndex] = 'System.java:' + '126' , new Date).getTime()));
  if (isjBPMInstance) {
    view = ($location_0[stackIndex] = 'UpdateDefinitionsAction.java:' + '78' , dynamicCast(dynamicCast(($location_0[stackIndex] = 'Controller.java:' + '67' , $get_7(controller.views, ($location_0[stackIndex] = 'DefinitionListView.java:' + '63' , $clinit_958() , ID_4))), 168), 243));
    if (view) {
      $location_0[stackIndex] = 'UpdateDefinitionsAction.java:' + '81' , definitions = ($location_0[stackIndex] = 'UpdateDefinitionsAction.java:' + '82' , parseProcessDefinitions(response.val$xmlHttpRequest.responseText));
      $update_4(view, ($location_0[stackIndex] = 'UpdateDefinitionsAction.java:' + '83' , initValues(_3Ljava_lang_Object_2_classLit, 689, 0, [definitions])));
      $location_0[stackIndex] = 'Log.java:' + '354' , $clinit_24();
      $location_0[stackIndex] = 'Log.java:' + '403' , $info(impl, 'Loaded ' + definitions.size_0 + ' process definitions in ' + toString_18(($location_0[stackIndex] = 'UpdateDefinitionsAction.java:' + '84' , sub(($location_0[stackIndex] = 'System.java:' + '93' , fromDouble(($location_0[stackIndex] = 'System.java:' + '126' , new Date).getTime())), start))) + ' ms', null);
    }
  }
   else {
    $location_0[stackIndex] = 'UpdateDefinitionsAction.java:' + '87' , throwClassCastExceptionUnlessNull(dynamicCast(($location_0[stackIndex] = 'Controller.java:' + '67' , $get_7(controller.views, Lorg_jboss_bpm_console_client_process_v2_Explorer_2_classLit.typeName)), 168));
  }
  $stackDepth_0 = stackIndex - 1;
}

function UpdateDefinitionsAction(){
}

_ = UpdateDefinitionsAction.prototype = new AbstractRESTAction;
_.getClass$ = getClass_703;
_.getDataDriven = getDataDriven_0;
_.getId = getId_8;
_.getRequestMethod = getRequestMethod_8;
_.getUrl_0 = getUrl_10;
_.handleSuccessfulResponse = handleSuccessfulResponse_8;
_.typeId$ = 468;
_.appContext = null;
var ID_16;
function $clinit_1008(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1008;
  $location_0[stackIndex] = 'UpdateInstanceDataAction.java:' + '41' , $clinit_1008 = nullMethod;
  $location_0[stackIndex] = 'UpdateInstanceDataAction.java:' + '44' , ID_17 = Lorg_jboss_bpm_console_client_process_UpdateInstanceDataAction_2_classLit.typeName;
  $stackDepth_0 = stackIndex - 1;
}

function $UpdateInstanceDataAction(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $UpdateInstanceDataAction;
  $location_0[stackIndex] = 'UpdateInstanceDataAction.java:' + '41' , $clinit_1008();
  dynamicCast(($location_0[stackIndex] = 'AbstractRESTAction.java:' + '44' , get_16(Lorg_jboss_bpm_console_client_ApplicationContext_2_classLit)), 225);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_704(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_704;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_UpdateInstanceDataAction_2_classLit;
}

function getId_9(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getId_9;
  $stackDepth_0 = stackIndex - 1;
  return ID_17;
}

function getRequestMethod_9(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getRequestMethod_9;
  returnTemp = ($location_0[stackIndex] = 'RequestBuilder.java:' + '60' , $clinit_213() , GET);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getUrl_11(event_0){
  var id, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getUrl_11;
  id = ($location_0[stackIndex] = 'UpdateInstanceDataAction.java:' + '53' , dynamicCast(event_0, 1));
  returnTemp = $getInstanceDataURL(($location_0[stackIndex] = 'UpdateInstanceDataAction.java:' + '54' , getInstance_2() , id));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function handleError_2(url, t){
  var message, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = handleError_2;
  message = ($location_0[stackIndex] = 'UpdateInstanceDataAction.java:' + '76' , t.getMessage());
  message = ($location_0[stackIndex] = 'UpdateInstanceDataAction.java:' + '78' , $replaceFirst(message, 'HTTP \\d*: ', ''));
  $location_0[stackIndex] = 'ConsoleLog.java:' + '41' , $clinit_24();
  $location_0[stackIndex] = 'Log.java:' + '651' , $warn(impl, 'Server reported following warning: ' + message + ' for url ' + url, null);
  $location_0[stackIndex] = 'UpdateInstanceDataAction.java:' + '81' , $clinit_684();
  $location_0[stackIndex] = 'MessageBox.java:' + '111' , alert_2(($location_0[stackIndex] = 'MessageBox.java:' + '60' , $clinit_693() , ALERT), 'Status information', message);
  $stackDepth_0 = stackIndex - 1;
}

function handlePostError_2(controller, event_0){
  var def, view, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = handlePostError_2;
  view = ($location_0[stackIndex] = 'UpdateInstanceDataAction.java:' + '87' , dynamicCast(dynamicCast(($location_0[stackIndex] = 'Controller.java:' + '67' , $get_7(controller.views, ($location_0[stackIndex] = 'InstanceListView.java:' + '75' , $clinit_979() , ID_10))), 168), 235));
  $location_0[stackIndex] = 'UpdateInstanceDataAction.java:' + '88' , def = view.currentDefinition;
  $handleEvent(controller, ($location_0[stackIndex] = 'UpdateInstanceDataAction.java:' + '91' , $Event(($location_0[stackIndex] = 'UpdateInstanceDataAction.java:' + '91' , new Event_0), ($location_0[stackIndex] = 'UpdateInstancesAction.java:' + '47' , $clinit_1010() , ID_19), def)));
  $stackDepth_0 = stackIndex - 1;
}

function handleSuccessfulResponse_9(controller, event_0, response){
  var messageDom, view, viewData, xml, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = handleSuccessfulResponse_9;
  viewData = ($location_0[stackIndex] = 'UpdateInstanceDataAction.java:' + '64' , dynamicCast(dynamicCast(($location_0[stackIndex] = 'Controller.java:' + '67' , $get_7(controller.views, ($location_0[stackIndex] = 'InstanceDetailView.java:' + '58' , $clinit_973() , ID_9))), 168), 236));
  $location_0[stackIndex] = 'InstanceDetailView.java:' + '308' , $createDataWindow(viewData, viewData.currentInstance);
  $location_0[stackIndex] = 'UpdateInstanceDataAction.java:' + '67' , dynamicCast(event_0, 1);
  $location_0[stackIndex] = 'UpdateInstanceDataAction.java:' + '68' , xml = response.val$xmlHttpRequest.responseText;
  $location_0[stackIndex] = 'UpdateInstanceDataAction.java:' + '69' , messageDom = ($location_0[stackIndex] = 'UpdateInstanceDataAction.java:' + '69' , $clinit_489() , ($location_0[stackIndex] = 'XMLParser.java:' + '47' , $parse(impl_2, xml)));
  view = ($location_0[stackIndex] = 'UpdateInstanceDataAction.java:' + '70' , dynamicCast(dynamicCast(($location_0[stackIndex] = 'Controller.java:' + '67' , $get_7(controller.views, ($location_0[stackIndex] = 'InstanceDataView.java:' + '48' , $clinit_970() , ID_8))), 168), 244));
  $location_0[stackIndex] = 'InstanceDataView.java:' + '122' , $parseMessage(view, messageDom);
  $stackDepth_0 = stackIndex - 1;
}

function UpdateInstanceDataAction(){
}

_ = UpdateInstanceDataAction.prototype = new AbstractRESTAction;
_.getClass$ = getClass_704;
_.getId = getId_9;
_.getRequestMethod = getRequestMethod_9;
_.getUrl_0 = getUrl_11;
_.handleError = handleError_2;
_.handlePostError = handlePostError_2;
_.handleSuccessfulResponse = handleSuccessfulResponse_9;
_.typeId$ = 469;
var ID_17;
function $clinit_1009(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1009;
  $location_0[stackIndex] = 'UpdateInstanceDetailAction.java:' + '31' , $clinit_1009 = nullMethod;
  $location_0[stackIndex] = 'UpdateInstanceDetailAction.java:' + '33' , ID_18 = Lorg_jboss_bpm_console_client_process_UpdateInstanceDetailAction_2_classLit.typeName;
  $stackDepth_0 = stackIndex - 1;
}

function execute_36(controller, object){
  var event_0, view, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = execute_36;
  event_0 = ($location_0[stackIndex] = 'UpdateInstanceDetailAction.java:' + '37' , dynamicCast(object, 245));
  view = ($location_0[stackIndex] = 'UpdateInstanceDetailAction.java:' + '39' , dynamicCast(dynamicCast(($location_0[stackIndex] = 'Controller.java:' + '67' , $get_7(controller.views, ($location_0[stackIndex] = 'InstanceDetailView.java:' + '58' , $clinit_973() , ID_9))), 168), 236));
  event_0.instance?($location_0[stackIndex] = 'UpdateInstanceDetailAction.java:' + '42' , $update_5(view, event_0.definition, event_0.instance)):($location_0[stackIndex] = 'PropertyGrid.java:' + '79' , $initReset(view.grid) , ($location_0[stackIndex] = 'InstanceDetailView.java:' + '363' , view.currentDefintion = null) , ($location_0[stackIndex] = 'InstanceDetailView.java:' + '364' , view.currentInstance = null) , ($location_0[stackIndex] = 'Element.java:' + '638' , view.diagramBtn.element['disabled'] = !false) , view.instanceDataBtn.element['disabled'] = !false , undefined);
  $stackDepth_0 = stackIndex - 1;
}

function getClass_705(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_705;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_UpdateInstanceDetailAction_2_classLit;
}

function UpdateInstanceDetailAction(){
}

_ = UpdateInstanceDetailAction.prototype = new Object_0;
_.execute_2 = execute_36;
_.getClass$ = getClass_705;
_.typeId$ = 470;
var ID_18;
function $clinit_1010(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $clinit_1010;
  $location_0[stackIndex] = 'UpdateInstancesAction.java:' + '45' , $clinit_1010 = nullMethod;
  $location_0[stackIndex] = 'UpdateInstancesAction.java:' + '47' , ID_19 = Lorg_jboss_bpm_console_client_process_UpdateInstancesAction_2_classLit.typeName;
  $stackDepth_0 = stackIndex - 1;
}

function $UpdateInstancesAction(this$static){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $UpdateInstancesAction;
  $location_0[stackIndex] = 'UpdateInstancesAction.java:' + '45' , $clinit_1010();
  dynamicCast(($location_0[stackIndex] = 'AbstractRESTAction.java:' + '44' , get_16(Lorg_jboss_bpm_console_client_ApplicationContext_2_classLit)), 225);
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_706(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_706;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_UpdateInstancesAction_2_classLit;
}

function getDataDriven_1(controller){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getDataDriven_1;
  returnTemp = ($location_0[stackIndex] = 'UpdateInstancesAction.java:' + '68' , dynamicCast(dynamicCast(($location_0[stackIndex] = 'Controller.java:' + '67' , $get_7(controller.views, ($location_0[stackIndex] = 'InstanceListView.java:' + '75' , $clinit_979() , ID_10))), 168), 235));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getId_10(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getId_10;
  $stackDepth_0 = stackIndex - 1;
  return ID_19;
}

function getRequestMethod_10(){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getRequestMethod_10;
  returnTemp = ($location_0[stackIndex] = 'RequestBuilder.java:' + '60' , $clinit_213() , GET);
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function getUrl_12(event_0){
  var def, stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = getUrl_12;
  def = ($location_0[stackIndex] = 'UpdateInstancesAction.java:' + '56' , dynamicCast(event_0, 231));
  returnTemp = $getProcessInstancesURL(($location_0[stackIndex] = 'UpdateInstancesAction.java:' + '57' , getInstance_2() , def.id_0));
  $stackDepth_0 = stackIndex - 1;
  return returnTemp;
}

function handleSuccessfulResponse_10(controller, event_0, response){
  var def, instances, start, view, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = handleSuccessfulResponse_10;
  $location_0[stackIndex] = 'UpdateInstancesAction.java:' + '73' , start = ($location_0[stackIndex] = 'System.java:' + '93' , fromDouble(($location_0[stackIndex] = 'System.java:' + '126' , new Date).getTime()));
  def = ($location_0[stackIndex] = 'UpdateInstancesAction.java:' + '75' , dynamicCast(event_0, 231));
  instances = ($location_0[stackIndex] = 'UpdateInstancesAction.java:' + '76' , parseProcessInstances(response.val$xmlHttpRequest.responseText));
  view = ($location_0[stackIndex] = 'UpdateInstancesAction.java:' + '77' , dynamicCast(dynamicCast(($location_0[stackIndex] = 'Controller.java:' + '67' , $get_7(controller.views, ($location_0[stackIndex] = 'InstanceListView.java:' + '75' , $clinit_979() , ID_10))), 168), 235));
  !!view && $update_6(view, ($location_0[stackIndex] = 'UpdateInstancesAction.java:' + '78' , initValues(_3Ljava_lang_Object_2_classLit, 689, 0, [def, instances])));
  $location_0[stackIndex] = 'Log.java:' + '354' , $clinit_24();
  $location_0[stackIndex] = 'Log.java:' + '403' , $info(impl, 'Loaded ' + instances.size_0 + ' process instance(s) in ' + toString_18(($location_0[stackIndex] = 'UpdateInstancesAction.java:' + '80' , sub(($location_0[stackIndex] = 'System.java:' + '93' , fromDouble(($location_0[stackIndex] = 'System.java:' + '126' , new Date).getTime())), start))) + ' ms', null);
  $stackDepth_0 = stackIndex - 1;
}

function UpdateInstancesAction(){
}

_ = UpdateInstancesAction.prototype = new AbstractRESTAction;
_.getClass$ = getClass_706;
_.getDataDriven = getDataDriven_1;
_.getId = getId_10;
_.getRequestMethod = getRequestMethod_10;
_.getUrl_0 = getUrl_12;
_.handleSuccessfulResponse = handleSuccessfulResponse_10;
_.typeId$ = 471;
var ID_19;
function $ActivityDiagramResultEvent(this$static, imageUrl, activeNodeInfo){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $ActivityDiagramResultEvent;
  $location_0[stackIndex] = 'ActivityDiagramResultEvent.java:' + '42' , this$static.imageUrl = imageUrl;
  $location_0[stackIndex] = 'ActivityDiagramResultEvent.java:' + '43' , this$static.activeNodeInfo = activeNodeInfo;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_707(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_707;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_events_ActivityDiagramResultEvent_2_classLit;
}

function ActivityDiagramResultEvent(){
}

_ = ActivityDiagramResultEvent.prototype = new Object_0;
_.getClass$ = getClass_707;
_.typeId$ = 0;
_.activeNodeInfo = null;
_.imageUrl = null;
function $InstanceEvent(this$static, definition, instance){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $InstanceEvent;
  $location_0[stackIndex] = 'InstanceEvent.java:' + '37' , this$static.definition = definition;
  $location_0[stackIndex] = 'InstanceEvent.java:' + '38' , this$static.instance = instance;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_708(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_708;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_events_InstanceEvent_2_classLit;
}

function InstanceEvent(){
}

_ = InstanceEvent.prototype = new Object_0;
_.getClass$ = getClass_708;
_.typeId$ = 472;
_.definition = null;
_.instance = null;
function $SignalInstanceEvent(this$static, definition, instance, token, signalName, index){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = $SignalInstanceEvent;
  $location_0[stackIndex] = 'InstanceEvent.java:' + '37' , this$static.definition = definition;
  $location_0[stackIndex] = 'InstanceEvent.java:' + '38' , this$static.instance = instance;
  $location_0[stackIndex] = 'SignalInstanceEvent.java:' + '51' , this$static.signalName = signalName;
  $location_0[stackIndex] = 'SignalInstanceEvent.java:' + '52' , this$static.token = token;
  $location_0[stackIndex] = 'SignalInstanceEvent.java:' + '53' , this$static.index_0 = index;
  $stackDepth_0 = stackIndex - 1;
  return this$static;
}

function getClass_709(){
  var stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getClass_709;
  $stackDepth_0 = stackIndex - 1;
  return Lorg_jboss_bpm_console_client_process_events_SignalInstanceEvent_2_classLit;
}

function SignalInstanceEvent(){
}

_ = SignalInstanceEvent.prototype = new InstanceEvent;
_.getClass$ = getClass_709;
_.typeId$ = 473;
_.index_0 = 0;
_.signalName = null;
_.token = null;
function getChildElements(childNodes){
  var i, n, result, out, stackIndex;
  $stack_0[stackIndex = ++$stackDepth_0] = getChildElements;
  result = $ArrayList(($location_0[stackIndex] = 'DOMUtil.java:' + '37' , new ArrayList));
  for ($location_0[stackIndex] = 'DOMUtil.java:' + '39' , i = 0; i < ($location_0[stackIndex] = 'DOMUtil.java:' + '39' , childNodes.getLength()); $location_0[stackIndex] = 'DOMUtil.java:' + '39' , ++i) {
    n = ($location_0[stackIndex] = 'DOMUtil.java:' + '41' , childNodes.item_1(i));
    if (($location_0[stackIndex] = 'XMLParserImpl.java:' + '141' , $clinit_504() , ($location_0[stackIndex] = 'XMLParserImpl.java:' + '142' , out = n.jsObject.nodeType) , out == null?-1:out) != 1)
      continue;
    else 
      setCheck(result.array, ($location_0[stackIndex] = 'ArrayList.java:' + '95' , result.size_0++), n);
  }
  $stackDepth_0 = stackIndex - 1;
  return result;
}

function $asObject(this$static){
  var stackIndex, returnTemp;
  $stack_0[stackIndex = ++$stackDepth_0] = $asObject;
  if ($location_0[stackIndex] = 'JSONWalk.java:' + '176' , this$static.value_0.isObject()) {
    returnTemp = ($location_0[stackIndex] = 'JSONWalk.java:' + '178' , this$static.value_0.isObject());
    $stackDepth_0 = stackIndex - 1;
    return returnTemp;
  }
   else {
    throw $IllegalArgumentException_0(($location_0[stackIndex] = 'JSONWalk.java:' + '182' , new IllegalArgumentException), 'Not an object: ' + this$static.value_0);
  }
  $stackDepth_0 = stackIndex - 1;
}

var Lcom_google_gwt_lang_asyncloaders_AsyncLoader4_2_classLit = createForClass('com.google.gwt.lang.asyncloaders.', 'AsyncLoader4'), Lcom_google_gwt_xml_client_impl_DOMItem_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'DOMItem'), Lcom_google_gwt_xml_client_impl_NodeImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'NodeImpl'), Lcom_google_gwt_xml_client_impl_AttrImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'AttrImpl'), Lcom_google_gwt_xml_client_impl_CharacterDataImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'CharacterDataImpl'), Lcom_google_gwt_xml_client_impl_TextImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'TextImpl'), Lcom_google_gwt_xml_client_impl_CDATASectionImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'CDATASectionImpl'), Lcom_google_gwt_xml_client_impl_CommentImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'CommentImpl'), Lcom_google_gwt_xml_client_DOMException_2_classLit = createForClass('com.google.gwt.xml.client.', 'DOMException'), Lcom_google_gwt_xml_client_impl_DOMParseException_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'DOMParseException'), Lcom_google_gwt_xml_client_impl_DocumentFragmentImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'DocumentFragmentImpl'), Lcom_google_gwt_xml_client_impl_DocumentImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'DocumentImpl'), Lcom_google_gwt_xml_client_impl_ElementImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'ElementImpl'), Lcom_google_gwt_xml_client_impl_NodeListImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'NodeListImpl'), Lcom_google_gwt_xml_client_impl_NamedNodeMapImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'NamedNodeMapImpl'), Lcom_google_gwt_xml_client_impl_ProcessingInstructionImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'ProcessingInstructionImpl'), Lcom_google_gwt_xml_client_impl_XMLParserImpl_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'XMLParserImpl'), Lcom_google_gwt_xml_client_impl_XMLParserImplStandard_2_classLit = createForClass('com.google.gwt.xml.client.impl.', 'XMLParserImplStandard'), Ljava_util_StringTokenizer_2_classLit = createForClass('java.util.', 'StringTokenizer'), Lorg_gwt_mosaic_ui_client_layout_ColumnLayout_2_classLit = createForClass('org.gwt.mosaic.ui.client.layout.', 'ColumnLayout'), Lorg_gwt_mosaic_ui_client_layout_ColumnLayoutData_2_classLit = createForClass('org.gwt.mosaic.ui.client.layout.', 'ColumnLayoutData'), Lorg_gwt_mosaic_ui_client_layout_ColumnLayoutSplitBar_2_classLit = createForClass('org.gwt.mosaic.ui.client.layout.', 'ColumnLayoutSplitBar'), Lorg_gwt_mosaic_ui_client_layout_ColumnLayoutSplitBar$SplitBarDragController_2_classLit = createForClass('org.gwt.mosaic.ui.client.layout.', 'ColumnLayoutSplitBar$SplitBarDragController'), Lorg_gwt_mosaic_ui_client_ToolBarSeparator_2_classLit = createForClass('org.gwt.mosaic.ui.client.', 'ToolBarSeparator'), Lorg_jboss_bpm_console_client_common_WidgetWindowPanel_2_classLit = createForClass('org.jboss.bpm.console.client.common.', 'WidgetWindowPanel'), Lorg_jboss_bpm_console_client_model_ActiveNodeInfo_2_classLit = createForClass('org.jboss.bpm.console.client.model.', 'ActiveNodeInfo'), Lorg_jboss_bpm_console_client_model_DiagramNodeInfo_2_classLit = createForClass('org.jboss.bpm.console.client.model.', 'DiagramNodeInfo'), Lorg_jboss_bpm_console_client_model_ProcessInstanceRef_2_classLit = createForClass('org.jboss.bpm.console.client.model.', 'ProcessInstanceRef'), Lorg_jboss_bpm_console_client_model_ProcessInstanceRef$STATE_2_classLit = createForEnum('org.jboss.bpm.console.client.model.', 'ProcessInstanceRef$STATE', values_26), _3Lorg_jboss_bpm_console_client_model_ProcessInstanceRef$STATE_2_classLit = createForArray('[Lorg.jboss.bpm.console.client.model.', 'ProcessInstanceRef$STATE;', Lorg_jboss_bpm_console_client_model_ProcessInstanceRef$STATE_2_classLit), Lorg_jboss_bpm_console_client_model_ProcessInstanceRef$RESULT_2_classLit = createForEnum('org.jboss.bpm.console.client.model.', 'ProcessInstanceRef$RESULT', values_25), _3Lorg_jboss_bpm_console_client_model_ProcessInstanceRef$RESULT_2_classLit = createForArray('[Lorg.jboss.bpm.console.client.model.', 'ProcessInstanceRef$RESULT;', Lorg_jboss_bpm_console_client_model_ProcessInstanceRef$RESULT_2_classLit), Lorg_jboss_bpm_console_client_model_ProcessInstanceRef$Lifecycle_2_classLit = createForClass('org.jboss.bpm.console.client.model.', 'ProcessInstanceRef$Lifecycle'), Lorg_jboss_bpm_console_client_model_ProcessInstanceRef$IllegalTransitionException_2_classLit = createForClass('org.jboss.bpm.console.client.model.', 'ProcessInstanceRef$IllegalTransitionException'), Lorg_jboss_bpm_console_client_model_StringRef_2_classLit = createForClass('org.jboss.bpm.console.client.model.', 'StringRef'), Lorg_jboss_bpm_console_client_model_TokenReference_2_classLit = createForClass('org.jboss.bpm.console.client.model.', 'TokenReference'), Lorg_jboss_bpm_console_client_process_events_ActivityDiagramResultEvent_2_classLit = createForClass('org.jboss.bpm.console.client.process.events.', 'ActivityDiagramResultEvent'), Lorg_jboss_bpm_console_client_process_events_InstanceEvent_2_classLit = createForClass('org.jboss.bpm.console.client.process.events.', 'InstanceEvent'), Lorg_jboss_bpm_console_client_process_events_SignalInstanceEvent_2_classLit = createForClass('org.jboss.bpm.console.client.process.events.', 'SignalInstanceEvent'), Lorg_jboss_bpm_console_client_process_v2_Explorer_2_classLit = createForClass('org.jboss.bpm.console.client.process.v2.', 'Explorer'), Lorg_jboss_bpm_console_client_process_ActivityDiagramView_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'ActivityDiagramView'), Lorg_jboss_bpm_console_client_process_ClearInstancesAction_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'ClearInstancesAction'), Lorg_jboss_bpm_console_client_process_DefinitionListView_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'DefinitionListView'), Lorg_jboss_bpm_console_client_process_DefinitionListView$1_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'DefinitionListView$1'), Lorg_jboss_bpm_console_client_process_DefinitionListView$2_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'DefinitionListView$2'), Lorg_jboss_bpm_console_client_process_DefinitionListView$3_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'DefinitionListView$3'), Lorg_jboss_bpm_console_client_process_DefinitionListView$4_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'DefinitionListView$4'), Lorg_jboss_bpm_console_client_process_DefinitionListView$5_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'DefinitionListView$5'), Lorg_jboss_bpm_console_client_process_DefinitionListView$6_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'DefinitionListView$6'), Lorg_jboss_bpm_console_client_process_DefinitionListView$7_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'DefinitionListView$7'), Lorg_jboss_bpm_console_client_process_DefinitionListView$8_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'DefinitionListView$8'), Lorg_jboss_bpm_console_client_process_DeleteDefinitionAction_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'DeleteDefinitionAction'), Lorg_jboss_bpm_console_client_process_DeleteInstanceAction_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'DeleteInstanceAction'), Lorg_jboss_bpm_console_client_process_GetProcessInstanceEventsAction_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'GetProcessInstanceEventsAction'), Lorg_jboss_bpm_console_client_process_InstanceDataView_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'InstanceDataView'), Lorg_jboss_bpm_console_client_process_InstanceDataView$DataEntry_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'InstanceDataView$DataEntry'), Lorg_jboss_bpm_console_client_process_InstanceDataView$1_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'InstanceDataView$1'), Lorg_jboss_bpm_console_client_process_InstanceDetailView_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'InstanceDetailView'), Lorg_jboss_bpm_console_client_process_LoadInstanceActivityImage_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'LoadInstanceActivityImage'), Lorg_jboss_bpm_console_client_process_InstanceDetailView$1_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'InstanceDetailView$1'), Lorg_jboss_bpm_console_client_process_InstanceDetailView$1$1_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'InstanceDetailView$1$1'), Lorg_jboss_bpm_console_client_process_InstanceDetailView$2_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'InstanceDetailView$2'), Lorg_jboss_bpm_console_client_process_InstanceDetailView$3_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'InstanceDetailView$3'), Lorg_jboss_bpm_console_client_process_InstanceDetailView$4_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'InstanceDetailView$4'), Lorg_jboss_bpm_console_client_process_InstanceListView_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'InstanceListView'), Lorg_jboss_bpm_console_client_process_InstanceListView$1_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'InstanceListView$1'), Lorg_jboss_bpm_console_client_process_InstanceListView$2_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'InstanceListView$2'), Lorg_jboss_bpm_console_client_process_InstanceListView$3_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'InstanceListView$3'), Lorg_jboss_bpm_console_client_process_InstanceListView$4_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'InstanceListView$4'), Lorg_jboss_bpm_console_client_process_InstanceListView$4$1_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'InstanceListView$4$1'), Lorg_jboss_bpm_console_client_process_InstanceListView$4$1$1_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'InstanceListView$4$1$1'), Lorg_jboss_bpm_console_client_process_InstanceListView$5_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'InstanceListView$5'), Lorg_jboss_bpm_console_client_process_InstanceListView$5$1_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'InstanceListView$5$1'), Lorg_jboss_bpm_console_client_process_InstanceListView$6_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'InstanceListView$6'), Lorg_jboss_bpm_console_client_process_InstanceListView$6$1_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'InstanceListView$6$1'), Lorg_jboss_bpm_console_client_process_InstanceListView$7_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'InstanceListView$7'), Lorg_jboss_bpm_console_client_process_InstanceListView$8_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'InstanceListView$8'), Lorg_jboss_bpm_console_client_process_InstanceListView$9_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'InstanceListView$9'), Lorg_jboss_bpm_console_client_process_InstanceListView$10_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'InstanceListView$10'), Lorg_jboss_bpm_console_client_process_InstanceListView$11_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'InstanceListView$11'), Lorg_jboss_bpm_console_client_process_JSONTree_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'JSONTree'), Lorg_jboss_bpm_console_client_process_LoadActivityDiagramAction_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'LoadActivityDiagramAction'), Lorg_jboss_bpm_console_client_process_MergedProcessView_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'MergedProcessView'), Lorg_jboss_bpm_console_client_process_MergedProcessView$1_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'MergedProcessView$1'), Lorg_jboss_bpm_console_client_process_MergedProcessView$2_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'MergedProcessView$2'), Lorg_jboss_bpm_console_client_process_SignalExecutionAction_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'SignalExecutionAction'), Lorg_jboss_bpm_console_client_process_SignalExecutionAction$1_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'SignalExecutionAction$1'), Lorg_jboss_bpm_console_client_process_StartNewInstanceAction_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'StartNewInstanceAction'), Lorg_jboss_bpm_console_client_process_StateChangeAction_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'StateChangeAction'), Lorg_jboss_bpm_console_client_process_UpdateDefinitionsAction_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'UpdateDefinitionsAction'), Lorg_jboss_bpm_console_client_process_UpdateInstanceDataAction_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'UpdateInstanceDataAction'), Lorg_jboss_bpm_console_client_process_UpdateInstanceDetailAction_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'UpdateInstanceDetailAction'), Lorg_jboss_bpm_console_client_process_UpdateInstancesAction_2_classLit = createForClass('org.jboss.bpm.console.client.process.', 'UpdateInstancesAction');
onLoad_2();
