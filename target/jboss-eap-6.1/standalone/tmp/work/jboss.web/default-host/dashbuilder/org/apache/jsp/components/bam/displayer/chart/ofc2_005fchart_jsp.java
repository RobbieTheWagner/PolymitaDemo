package org.apache.jsp.components.bam.displayer.chart;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import org.jboss.dashboard.displayer.chart.AbstractChartDisplayer;
import org.jboss.dashboard.displayer.chart.PieChartDisplayer;
import org.jboss.dashboard.displayer.chart.BarChartDisplayer;
import org.jboss.dashboard.displayer.chart.LineChartDisplayer;
import org.jboss.dashboard.LocaleManager;
import org.apache.commons.lang.StringUtils;
import java.util.*;
import java.text.DecimalFormat;
import org.jboss.dashboard.dataset.DataSet;
import org.jboss.dashboard.domain.Interval;
import org.jboss.dashboard.ui.components.AbstractChartDisplayerEditor;
import org.jboss.dashboard.ui.components.chart.OFC2ChartViewer;
import org.jboss.dashboard.commons.text.StringUtil;

public final class ofc2_005fchart_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List _jspx_dependants;

  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005ffactory_005fformUrl_0026_005ffriendly_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005ffactory_005fhandler_0026_005fbean_005faction_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public Object getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005ffactory_005fformUrl_0026_005ffriendly_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005ffactory_005fhandler_0026_005fbean_005faction_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.release();
    _005fjspx_005ftagPool_005ffactory_005fformUrl_0026_005ffriendly_005fnobody.release();
    _005fjspx_005ftagPool_005ffactory_005fhandler_0026_005fbean_005faction_005fnobody.release();
    _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody.release();
  }

  public void _jspService(HttpServletRequest request, HttpServletResponse response)
        throws java.io.IOException, ServletException {

    PageContext pageContext = null;
    HttpSession session = null;
    ServletContext application = null;
    ServletConfig config = null;
    JspWriter out = null;
    Object page = this;
    JspWriter _jspx_out = null;
    PageContext _jspx_page_context = null;


    try {
      response.setContentType("text/html");
      response.addHeader("X-Powered-By", "JSP/2.2");
      pageContext = _jspxFactory.getPageContext(this, request, response,
      			null, true, 8192, true);
      _jspx_page_context = pageContext;
      application = pageContext.getServletContext();
      config = pageContext.getServletConfig();
      session = pageContext.getSession();
      out = pageContext.getOut();
      _jspx_out = out;

      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");
      out.write("\n");

    AbstractChartDisplayerEditor editor = (AbstractChartDisplayerEditor) request.getAttribute("editor");
    OFC2ChartViewer viewer = (OFC2ChartViewer) request.getAttribute("viewer");
    boolean animateChart = (editor == null);
    AbstractChartDisplayer displayer = (AbstractChartDisplayer) viewer.getDataDisplayer();
    DataSet xyDataSet = displayer.buildXYDataSet();
    if (xyDataSet == null) {

      out.write("\n");
      out.write("  <span class=\"skn-error\">The data cannot be displayed due to an unexpected problem.</span>\n");

  }

  Locale locale = LocaleManager.currentLocale();
  DecimalFormat numberFormat = (DecimalFormat) DecimalFormat.getInstance(Locale.US);
  numberFormat.setGroupingUsed(false);
  List<String> xvalues = new ArrayList<String>();
  List<String> yvalues = new ArrayList<String>();
  double minDsValue = -1;
  double maxDsValue = -1;

  for (int i=0; i< xyDataSet.getRowCount(); i++) {
    String xvalue = ((Interval) xyDataSet.getValueAt(i, 0)).getDescription(locale);
    double yvalue = ((Number) xyDataSet.getValueAt(i, 1)).doubleValue();

    xvalues.add(StringUtil.escapeQuotes(xvalue));
    yvalues.add(numberFormat.format(yvalue));

    // Get the minimum and the maximum value of the dataset.
    if ((minDsValue == -1) || (yvalue < minDsValue)) minDsValue = yvalue;
    if ((maxDsValue == -1) || (yvalue > maxDsValue)) maxDsValue = yvalue;
  }

  // Every chart must have a different identifier so as to do not merge tooltips.
  // Chart identifier is composed by producerId and this suffix.
  int suffix = viewer.hashCode();
  if (suffix < 0) suffix *= -1;
  String chartId = viewer.getComponentAlias() + suffix;

  String barColor = displayer.getColor();
  if (barColor == null || barColor.equals(displayer.getBackgroundColor())) {
    barColor = "#0000FF"; // Default blue if not changed
  }

  String userAgent = request.getHeader("user-agent");
  boolean isIE = userAgent != null && userAgent.indexOf("MSIE") != -1;

  double minRange = minDsValue < 0 ? minDsValue : 0;
  int ySteps = (int) ((maxDsValue - minRange) / 10.0);
  String yStepStr = numberFormat.format(ySteps);
  String minRangeStr = numberFormat.format(minRange);
  String maxDsValueStr = numberFormat.format(maxDsValue);

  // Format the display values according to the representation format defined.
  String unitPattern = displayer.getUnit(locale);
  String valuePattern = StringUtils.replace(unitPattern, "{value}", "#val#");
  String totalPattern = StringUtils.replace(unitPattern, "{value}",  "#total#");

      out.write("\n");
      out.write("<script type=\"text/javascript\" defer=\"defer\">\n");
      out.write("\n");
      out.write("  function get_data_");
      out.print(chartId);
      out.write("() {\n");
      out.write("\n");
      out.write("  ");
 if (displayer instanceof PieChartDisplayer) { 
      out.write("\n");
      out.write("\n");
      out.write("    var data_");
      out.print(chartId);
      out.write(" =\n");
      out.write("        '{ \"elements\": [ '\n");
      out.write("            + '{ \"type\": \"pie\", \"alpha\": 0.5 ");
 if (false) { 
      out.write(", \"animate\": [ { \"type\": \"fade\" }, { \"type\": \"bounce\", \"distance\": 5 } ]");
 } 
      out.write(", \"start-angle\": 0, \"tip\": \"#label#<br>");
      out.print(valuePattern);
      out.write(' ');
      out.write('/');
      out.write(' ');
      out.print(totalPattern);
      out.write("<br>#percent#\", '\n");
      out.write("            + '\"colours\": [ \"#FF9E11\", \"#DF5511\", \"#DF0011\", \"#C2008F\", \"#9E00D5\", \"#7000B8\", \"#4500B8\", \"#00A70D\", \"#9BDC00\"], '\n");
      out.write("            + '\"values\": [ ");
 for(int i=0; i < xvalues.size(); i++) { if( i != 0 ) out.print(", "); 
      out.write("{ \"value\": ");
      out.print(yvalues.get(i));
      out.write(", \"label\": \"");
      out.print(xvalues.get(i));
      out.write("\", \"on-click\":\"click_");
      out.print(chartId);
      out.write('(');
      out.print( i );
      out.write(")\" }");
 } 
      out.write(" ] } ], '\n");
      out.write("            + '\"title\": { \"text\": \"");
      out.print( displayer.isShowTitle() ? (StringUtil.escapeQuotes(displayer.getTitle()) + "<br>")  : "" );
      out.write("\", \"style\": \"color: #000000;  font-size: 20px\" }, '\n");
      out.write("            + '\"num_decimals\": ");
      out.print(displayer.isAxisInteger() ? 0 : 2);
      out.write(", \"is_fixed_num_decimals_forced\": true, \"is_decimal_separator_comma\": false, \"is_thousand_separator_disabled\": false,'\n");
      out.write("            + '\"bg_colour\": \"");
      out.print( displayer.getBackgroundColor() );
      out.write("\" }';\n");
      out.write("\n");
      out.write("  ");

      } else if (displayer instanceof BarChartDisplayer) {
          BarChartDisplayer barDisplayer  = (BarChartDisplayer) displayer;
  
      out.write("\n");
      out.write("\n");
      out.write("    var data_");
      out.print(chartId);
      out.write(" = '{ \"elements\": [ { \"type\": \"");
      out.print(displayer.getType());
      out.write("\", '\n");
      out.write("        + '\"values\": [ '\n");
      out.write("        + '");
 for(int i=0; i < xvalues.size(); i++) { if( i != 0 ) out.print(", "); 
      out.write("{ \"top\": \"");
      out.print(yvalues.get(i));
      out.write("\", \"bottom\": 0, \"tip\":\"");
      out.print(xvalues.get(i) );
      out.write("<br>");
      out.print(valuePattern);
      out.write("\", \"on-click\": \"click_");
      out.print(chartId);
      out.write('(');
      out.print( i );
      out.write(")\" }");
 } 
      out.write("'\n");
      out.write("        + '], \"colour\": \"");
      out.print( barColor );
      out.write('"');
      out.write(' ');
 if (animateChart) { 
      out.write(" , \"on-show\":{\"type\":\"grow-up\",\"pop-up\":1,\"delay\":0.1,\"cascade\":1} ");
 } 
      out.write(" } ], \"title\": { \"text\": \"");
      out.print( displayer.isShowTitle() ? (StringUtil.escapeQuotes(displayer.getTitle()) + "<br>") : "" );
      out.write("\", \"style\": \"color: #000000;  font-size: 20px\"  }, '\n");
      out.write("        + '\"num_decimals\": ");
      out.print(displayer.isAxisInteger() ? 0 : 2);
      out.write(", \"is_fixed_num_decimals_forced\": true, \"is_decimal_separator_comma\": false, \"is_thousand_separator_disabled\": false, \"bg_colour\": \"");
      out.print( displayer.getBackgroundColor() );
      out.write("\", '\n");
      out.write("        + '\"y_axis\": { \"min\": \"");
      out.print(minRangeStr);
      out.write("\", \"max\": \"");
      out.print(maxDsValueStr);
      out.write("\" , \"steps\": ");
      out.print(yStepStr);
      out.write("}, '\n");
      out.write("        + '\"x_axis\": { \"labels\": { \"rotate\": ");
      out.print(barDisplayer.getLabelAngleXAxis());
      out.write(", \"labels\": [ ");
 for(int i=0; i < xvalues.size(); i++) { if( i != 0 ) out.print(", "); out.print("\"" + (barDisplayer.isShowLabelsXAxis() ? xvalues.get(i) : "") + "\""); } 
      out.write(" '\n");
      out.write("        + '] } } }';\n");
      out.write("  ");

      } else if (displayer instanceof LineChartDisplayer) {
          LineChartDisplayer lineDisplayer  = (LineChartDisplayer) displayer;
  
      out.write("\n");
      out.write("\n");
      out.write("    var data_");
      out.print(chartId);
      out.write(" = '{\"elements\": [ { \"type\": \"");
      out.print(displayer.getType());
      out.write("\", \"dot-size\":3,'\n");
      out.write("        + '\"values\": [ '\n");
      out.write("        + '");
 for(int i=0; i < xvalues.size(); i++) { if( i != 0 ) out.print(", "); 
      out.write("{ \"y\":\"");
      out.print(yvalues.get(i));
      out.write("\", \"tip\":\"");
      out.print(xvalues.get(i) );
      out.write("<br>");
      out.print(valuePattern);
      out.write("\", \"on-click\":\"click_");
      out.print(chartId);
      out.write('(');
      out.print( i );
      out.write(")\" }");
 } 
      out.write("'\n");
      out.write("        + '], \"colour\": \"");
      out.print( barColor );
      out.write('"');
      out.write(' ');
 if (animateChart) { 
      out.write(" , \"on-show\":{\"type\":\"grow-up\",\"pop-up\":1,\"delay\":0.1,\"cascade\":1} ");
 } 
      out.write(" } ], \"title\": { \"text\": \"");
      out.print( displayer.isShowTitle() ? (StringUtil.escapeQuotes(displayer.getTitle()) + "<br>") : "" );
      out.write("\", \"style\": \"color: #000000;  font-size: 20px\"  }, '\n");
      out.write("        + '\"num_decimals\": ");
      out.print(displayer.isAxisInteger() ? 0 : 2);
      out.write(", \"is_fixed_num_decimals_forced\": true, \"is_decimal_separator_comma\": false, \"is_thousand_separator_disabled\": false, \"bg_colour\": \"");
      out.print( displayer.getBackgroundColor() );
      out.write("\", '\n");
      out.write("        + '\"y_axis\": { \"min\": \"");
      out.print(minRangeStr);
      out.write("\", \"max\": \"");
      out.print(maxDsValueStr);
      out.write("\" , \"steps\": ");
      out.print(yStepStr);
      out.write("}, '\n");
      out.write("        + '\"x_axis\": { \"labels\": { \"rotate\": ");
      out.print(lineDisplayer.getLabelAngleXAxis());
      out.write(", \"labels\": [ ");
 for(int i=0; i < xvalues.size(); i++) { if( i != 0 ) out.print(", "); out.print("\"" + (lineDisplayer.isShowLabelsXAxis() ? xvalues.get(i) : "") +"\""); } 
      out.write(" '\n");
      out.write("        + '] } } }';\n");
      out.write("  ");
 } 
      out.write("\n");
      out.write("    return data_");
      out.print(chartId);
      out.write(";\n");
      out.write("  }\n");
      out.write("\n");
      out.write("  function click_");
      out.print(chartId);
      out.write("(index) {\n");
      out.write("    form = document.getElementById('");
      if (_jspx_meth_panel_005fencode_005f0(_jspx_page_context))
        return;
      out.write("');\n");
      out.write("    form.");
      out.print( OFC2ChartViewer.PARAM_NSERIE );
      out.write(".value = index;\n");
      out.write("    submitAjaxForm(form);\n");
      out.write("  }\n");
      out.write("\n");
      out.write("  setAjax('");
      if (_jspx_meth_panel_005fencode_005f1(_jspx_page_context))
        return;
      out.write("');\n");
      out.write("</script>\n");
      out.write("<form method=\"post\" action='");
      if (_jspx_meth_factory_005fformUrl_005f0(_jspx_page_context))
        return;
      out.write("' id='");
      if (_jspx_meth_panel_005fencode_005f2(_jspx_page_context))
        return;
      out.write("'>\n");
      out.write("  ");
      //  factory:handler
      org.jboss.dashboard.ui.taglib.factory.HandlerTag _jspx_th_factory_005fhandler_005f0 = (org.jboss.dashboard.ui.taglib.factory.HandlerTag) _005fjspx_005ftagPool_005ffactory_005fhandler_0026_005fbean_005faction_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.HandlerTag.class);
      _jspx_th_factory_005fhandler_005f0.setPageContext(_jspx_page_context);
      _jspx_th_factory_005fhandler_005f0.setParent(null);
      // /components/bam/displayer/chart/ofc2_chart.jsp(146,2) name = bean type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_factory_005fhandler_005f0.setBean(viewer.getComponentName());
      // /components/bam/displayer/chart/ofc2_chart.jsp(146,2) name = action type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_factory_005fhandler_005f0.setAction( OFC2ChartViewer.PARAM_ACTION );
      int _jspx_eval_factory_005fhandler_005f0 = _jspx_th_factory_005fhandler_005f0.doStartTag();
      if (_jspx_th_factory_005fhandler_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        _005fjspx_005ftagPool_005ffactory_005fhandler_0026_005fbean_005faction_005fnobody.reuse(_jspx_th_factory_005fhandler_005f0);
        return;
      }
      _005fjspx_005ftagPool_005ffactory_005fhandler_0026_005fbean_005faction_005fnobody.reuse(_jspx_th_factory_005fhandler_005f0);
      out.write("\n");
      out.write("  <input type=\"hidden\" name=\"");
      out.print( OFC2ChartViewer.PARAM_NSERIE );
      out.write("\" value=\"0\" />\n");
      out.write("</form>\n");
      out.write("<table class=\"chartTable\" border=\"0\" cellpadding=\"10\" cellspacing=\"0\" width=\"100%\">\n");
      out.write("  <tbody>\n");
      out.write("  <tr>\n");
      out.write("    <td height=\"");
      out.print( displayer.getHeight() );
      out.write("\" align=\"");
      out.print(displayer.getGraphicAlign());
      out.write("\">\n");
      out.write("      <div style=\"width:");
      out.print( displayer.getWidth() );
      out.write("px\">\n");
      out.write("        ");
 if (isIE) { 
      out.write("\n");
      out.write("        <OBJECT style=\"VISIBILITY: visible\" id=\"div_chart_");
      out.print(chartId);
      out.write("\"\n");
      out.write("                classid=clsid:D27CDB6E-AE6D-11cf-96B8-444553540000 width=\"");
      out.print( displayer.getWidth() );
      out.write("\"\n");
      out.write("                height=\"");
      out.print( displayer.getHeight() );
      out.write("\">\n");
      out.write("          <PARAM NAME=\"FlashVars\" value=\"get-data=get_data_");
      out.print(chartId);
      out.write("\">\n");
      out.write("          <PARAM NAME=\"Movie\" VALUE=\"");
      if (_jspx_meth_mvc_005fcontext_005f0(_jspx_page_context))
        return;
      out.write("\" >\n");
      out.write("          <PARAM NAME=\"Src\" VALUE=\"");
      if (_jspx_meth_mvc_005fcontext_005f1(_jspx_page_context))
        return;
      out.write("\" >\n");
      out.write("          <param NAME=\"wmode\" VALUE=\"transparent\">\n");
      out.write("        </OBJECT>\n");
      out.write("        ");
 } else { 
      out.write("\n");
      out.write("        <object height=\"");
      out.print( displayer.getHeight() );
      out.write("\" width=\"");
      out.print( displayer.getWidth() );
      out.write("\"\n");
      out.write("                type=\"application/x-shockwave-flash\"\n");
      out.write("                data=\"");
      if (_jspx_meth_mvc_005fcontext_005f2(_jspx_page_context))
        return;
      out.write("\"\n");
      out.write("                id=\"div_chart_");
      out.print(chartId);
      out.write("\"\n");
      out.write("                style=\"visibility: visible;\">\n");
      out.write("          <param name=\"flashvars\" value=\"get-data=get_data_");
      out.print(chartId);
      out.write("\">\n");
      out.write("          <param name=\"wmode\" value=\"transparent\">\n");
      out.write("        </object>\n");
      out.write("        ");
 } 
      out.write("\n");
      out.write("      </div>\n");
      out.write("    </td>\n");
      out.write("  </tr>\n");
      out.write("  </tbody>\n");
      out.write("</table>");
    } catch (Throwable t) {
      if (!(t instanceof SkipPageException)){
        out = _jspx_out;
        if (out != null && out.getBufferSize() != 0)
          try { out.clearBuffer(); } catch (java.io.IOException e) {}
        if (_jspx_page_context != null) _jspx_page_context.handlePageException(t);
      }
    } finally {
      _jspxFactory.releasePageContext(_jspx_page_context);
    }
  }

  private boolean _jspx_meth_panel_005fencode_005f0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f0 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f0.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f0.setParent(null);
    // /components/bam/displayer/chart/ofc2_chart.jsp(138,36) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f0.setName("chartForm");
    int _jspx_eval_panel_005fencode_005f0 = _jspx_th_panel_005fencode_005f0.doStartTag();
    if (_jspx_th_panel_005fencode_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f0);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f1(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f1 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f1.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f1.setParent(null);
    // /components/bam/displayer/chart/ofc2_chart.jsp(143,11) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f1.setName("chartForm");
    int _jspx_eval_panel_005fencode_005f1 = _jspx_th_panel_005fencode_005f1.doStartTag();
    if (_jspx_th_panel_005fencode_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f1);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f1);
    return false;
  }

  private boolean _jspx_meth_factory_005fformUrl_005f0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:formUrl
    org.jboss.dashboard.ui.taglib.factory.FormURLTag _jspx_th_factory_005fformUrl_005f0 = (org.jboss.dashboard.ui.taglib.factory.FormURLTag) _005fjspx_005ftagPool_005ffactory_005fformUrl_0026_005ffriendly_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.FormURLTag.class);
    _jspx_th_factory_005fformUrl_005f0.setPageContext(_jspx_page_context);
    _jspx_th_factory_005fformUrl_005f0.setParent(null);
    // /components/bam/displayer/chart/ofc2_chart.jsp(145,28) name = friendly type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fformUrl_005f0.setFriendly(false);
    int _jspx_eval_factory_005fformUrl_005f0 = _jspx_th_factory_005fformUrl_005f0.doStartTag();
    if (_jspx_th_factory_005fformUrl_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005fformUrl_0026_005ffriendly_005fnobody.reuse(_jspx_th_factory_005fformUrl_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005fformUrl_0026_005ffriendly_005fnobody.reuse(_jspx_th_factory_005fformUrl_005f0);
    return false;
  }

  private boolean _jspx_meth_panel_005fencode_005f2(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  panel:encode
    org.jboss.dashboard.ui.taglib.EncodeTag _jspx_th_panel_005fencode_005f2 = (org.jboss.dashboard.ui.taglib.EncodeTag) _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.get(org.jboss.dashboard.ui.taglib.EncodeTag.class);
    _jspx_th_panel_005fencode_005f2.setPageContext(_jspx_page_context);
    _jspx_th_panel_005fencode_005f2.setParent(null);
    // /components/bam/displayer/chart/ofc2_chart.jsp(145,69) name = name type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_panel_005fencode_005f2.setName("chartForm");
    int _jspx_eval_panel_005fencode_005f2 = _jspx_th_panel_005fencode_005f2.doStartTag();
    if (_jspx_th_panel_005fencode_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f2);
      return true;
    }
    _005fjspx_005ftagPool_005fpanel_005fencode_0026_005fname_005fnobody.reuse(_jspx_th_panel_005fencode_005f2);
    return false;
  }

  private boolean _jspx_meth_mvc_005fcontext_005f0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:context
    org.jboss.dashboard.ui.taglib.ContextTag _jspx_th_mvc_005fcontext_005f0 = (org.jboss.dashboard.ui.taglib.ContextTag) _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody.get(org.jboss.dashboard.ui.taglib.ContextTag.class);
    _jspx_th_mvc_005fcontext_005f0.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005fcontext_005f0.setParent(null);
    // /components/bam/displayer/chart/ofc2_chart.jsp(159,37) name = uri type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005fcontext_005f0.setUri("/components/bam/displayer/chart/open-flash-chart.swf");
    int _jspx_eval_mvc_005fcontext_005f0 = _jspx_th_mvc_005fcontext_005f0.doStartTag();
    if (_jspx_th_mvc_005fcontext_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody.reuse(_jspx_th_mvc_005fcontext_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody.reuse(_jspx_th_mvc_005fcontext_005f0);
    return false;
  }

  private boolean _jspx_meth_mvc_005fcontext_005f1(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:context
    org.jboss.dashboard.ui.taglib.ContextTag _jspx_th_mvc_005fcontext_005f1 = (org.jboss.dashboard.ui.taglib.ContextTag) _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody.get(org.jboss.dashboard.ui.taglib.ContextTag.class);
    _jspx_th_mvc_005fcontext_005f1.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005fcontext_005f1.setParent(null);
    // /components/bam/displayer/chart/ofc2_chart.jsp(160,35) name = uri type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005fcontext_005f1.setUri("/components/bam/displayer/chart/open-flash-chart.swf");
    int _jspx_eval_mvc_005fcontext_005f1 = _jspx_th_mvc_005fcontext_005f1.doStartTag();
    if (_jspx_th_mvc_005fcontext_005f1.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody.reuse(_jspx_th_mvc_005fcontext_005f1);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody.reuse(_jspx_th_mvc_005fcontext_005f1);
    return false;
  }

  private boolean _jspx_meth_mvc_005fcontext_005f2(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  mvc:context
    org.jboss.dashboard.ui.taglib.ContextTag _jspx_th_mvc_005fcontext_005f2 = (org.jboss.dashboard.ui.taglib.ContextTag) _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody.get(org.jboss.dashboard.ui.taglib.ContextTag.class);
    _jspx_th_mvc_005fcontext_005f2.setPageContext(_jspx_page_context);
    _jspx_th_mvc_005fcontext_005f2.setParent(null);
    // /components/bam/displayer/chart/ofc2_chart.jsp(166,22) name = uri type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_mvc_005fcontext_005f2.setUri("/components/bam/displayer/chart/open-flash-chart.swf");
    int _jspx_eval_mvc_005fcontext_005f2 = _jspx_th_mvc_005fcontext_005f2.doStartTag();
    if (_jspx_th_mvc_005fcontext_005f2.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody.reuse(_jspx_th_mvc_005fcontext_005f2);
      return true;
    }
    _005fjspx_005ftagPool_005fmvc_005fcontext_0026_005furi_005fnobody.reuse(_jspx_th_mvc_005fcontext_005f2);
    return false;
  }
}
