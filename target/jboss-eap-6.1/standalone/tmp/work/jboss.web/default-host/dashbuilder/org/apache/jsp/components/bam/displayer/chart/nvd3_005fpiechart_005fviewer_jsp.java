package org.apache.jsp.components.bam.displayer.chart;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.jsp.*;
import org.jboss.dashboard.factory.Factory;
import org.jboss.dashboard.ui.UIServices;
import org.jboss.dashboard.ui.components.chart.NVD3ChartViewer;
import org.jboss.dashboard.displayer.chart.AbstractChartDisplayer;
import org.jboss.dashboard.factory.Factory;
import org.jboss.dashboard.ui.components.chart.NVD3ChartViewer;
import org.jboss.dashboard.displayer.chart.AbstractChartDisplayer;
import org.jboss.dashboard.displayer.chart.AbstractXAxisDisplayer;
import org.jboss.dashboard.ui.components.AbstractChartDisplayerEditor;
import org.jboss.dashboard.dataset.DataSet;
import org.jboss.dashboard.domain.Interval;
import org.jboss.dashboard.provider.DataProperty;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.text.DecimalFormat;
import org.jboss.dashboard.LocaleManager;
import org.jboss.dashboard.commons.text.StringUtil;

public final class nvd3_005fpiechart_005fviewer_jsp extends org.apache.jasper.runtime.HttpJspBase
    implements org.apache.jasper.runtime.JspSourceDependent {

  private static final JspFactory _jspxFactory = JspFactory.getDefaultFactory();

  private static java.util.List _jspx_dependants;

  static {
    _jspx_dependants = new java.util.ArrayList(3);
    _jspx_dependants.add("/components/bam/displayer/chart/nvd3_chart_common.jspi");
    _jspx_dependants.add("/components/bam/displayer/chart/nvd3_chart_wrapper.jspi");
    _jspx_dependants.add("/components/bam/displayer/chart/nvd3_piechart_script.jspi");
  }

  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005ffactory_005fformUrl_0026_005ffriendly_005fnobody;
  private org.apache.jasper.runtime.TagHandlerPool _005fjspx_005ftagPool_005ffactory_005fhandler_0026_005fbean_005faction_005fnobody;

  private javax.el.ExpressionFactory _el_expressionfactory;
  private org.apache.tomcat.InstanceManager _jsp_instancemanager;

  public Object getDependants() {
    return _jspx_dependants;
  }

  public void _jspInit() {
    _005fjspx_005ftagPool_005ffactory_005fformUrl_0026_005ffriendly_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _005fjspx_005ftagPool_005ffactory_005fhandler_0026_005fbean_005faction_005fnobody = org.apache.jasper.runtime.TagHandlerPool.getTagHandlerPool(getServletConfig());
    _el_expressionfactory = _jspxFactory.getJspApplicationContext(getServletConfig().getServletContext()).getExpressionFactory();
    _jsp_instancemanager = org.apache.jasper.runtime.InstanceManagerFactory.getInstanceManager(getServletConfig());
  }

  public void _jspDestroy() {
    _005fjspx_005ftagPool_005ffactory_005fformUrl_0026_005ffriendly_005fnobody.release();
    _005fjspx_005ftagPool_005ffactory_005fhandler_0026_005fbean_005faction_005fnobody.release();
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

    NVD3ChartViewer viewer = (NVD3ChartViewer) Factory.lookup("org.jboss.dashboard.ui.components.PieChartViewer_nvd3");

    AbstractChartDisplayer displayer = (AbstractChartDisplayer) viewer.getDataDisplayer();

      out.write('\n');
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
      out.write("\n");


    DataSet xyDataSet = null;
    if( displayer != null ) {
        xyDataSet = displayer.buildXYDataSet();
    }

    AbstractChartDisplayerEditor editor = (AbstractChartDisplayerEditor) request.getAttribute("editor");
    boolean animateChart = (editor == null);
    boolean enableDrillDown = (editor == null);
    boolean enableTooltips  = (editor == null);

    if (xyDataSet == null) {

      out.write("\n");
      out.write("<span class=\"skn-error\">The data cannot be displayed due to an unexpected problem.</span>\n");

       return;
    }

    DataProperty domainProperty = displayer.getDomainProperty();
    DataProperty rangeProperty = displayer.getRangeProperty();
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
    int suffix = viewer.hashCode();
    if (suffix < 0) suffix *= -1;
    String chartId = viewer.getComponentAlias() + suffix;

    String selectedColor = displayer.getColor();
    if (selectedColor == null || selectedColor.equals(displayer.getBackgroundColor())) {
       selectedColor = "#0000FF"; // Default blue if not changed
    }

      out.write('\n');
      out.write('\n');
      out.write('\n');
      out.write('\n');
 if( editor != null ) {
    // Use session to pass parameters to JSP
    session.setAttribute("chartId_iframe_viewer"+chartId, viewer);

    String basehref = UIServices.lookup().getUrlMarkupGenerator().getBaseHref(request);

      out.write("\n");
      out.write("     <iframe\n");
      out.write("          width=\"");
      out.print( displayer.getWidth() +50 );
      out.write("\"\n");
      out.write("          style=\"border:0px;overflow-y: hidden;overflow-x: hidden; height:400px;\"\n");
      out.write("          scrolling=\"no\"\n");
      out.write("          src=\"");
      out.print(basehref );
      out.write("components/bam/displayer/chart/nvd3_piechart_viewer_iframe.jsp?chartId=");
      out.print(chartId);
      out.write("\">\n");
      out.write("     </iframe>\n");
 } // End of preview mode
   else {
     //

      out.write('\n');
 if( enableDrillDown ) { 
      out.write("\n");
      out.write("<!-- Form for drill down action -->\n");
      out.write("<form method=\"post\" action='");
      if (_jspx_meth_factory_005fformUrl_005f0(_jspx_page_context))
        return;
      out.write("' id='");
      out.print("form"+chartId);
      out.write("'>\n");
      out.write("  ");
      //  factory:handler
      org.jboss.dashboard.ui.taglib.factory.HandlerTag _jspx_th_factory_005fhandler_005f0 = (org.jboss.dashboard.ui.taglib.factory.HandlerTag) _005fjspx_005ftagPool_005ffactory_005fhandler_0026_005fbean_005faction_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.HandlerTag.class);
      _jspx_th_factory_005fhandler_005f0.setPageContext(_jspx_page_context);
      _jspx_th_factory_005fhandler_005f0.setParent(null);
      // /components/bam/displayer/chart/nvd3_piechart_viewer.jsp(49,2) name = bean type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_factory_005fhandler_005f0.setBean(viewer.getComponentName());
      // /components/bam/displayer/chart/nvd3_piechart_viewer.jsp(49,2) name = action type = null reqTime = true required = true fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
      _jspx_th_factory_005fhandler_005f0.setAction( NVD3ChartViewer.PARAM_ACTION );
      int _jspx_eval_factory_005fhandler_005f0 = _jspx_th_factory_005fhandler_005f0.doStartTag();
      if (_jspx_th_factory_005fhandler_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
        _005fjspx_005ftagPool_005ffactory_005fhandler_0026_005fbean_005faction_005fnobody.reuse(_jspx_th_factory_005fhandler_005f0);
        return;
      }
      _005fjspx_005ftagPool_005ffactory_005fhandler_0026_005fbean_005faction_005fnobody.reuse(_jspx_th_factory_005fhandler_005f0);
      out.write("\n");
      out.write("  <input type=\"hidden\" name=\"");
      out.print( NVD3ChartViewer.PARAM_NSERIE );
      out.write("\" value=\"0\" />\n");
      out.write("</form>\n");
      out.write("<script defer=\"true\">\n");
      out.write("    setAjax('");
      out.print("form"+chartId);
      out.write("');\n");
      out.write("</script>\n");
 } 
      out.write('\n');
      out.write("\n");
      out.write("<!-- Chart wrapper begin -->\n");
      out.write("<table class=\"skn-chart-table\" width=\"100%\" >\n");
      out.write("    <tbody>\n");
      out.write("    <tr>\n");
      out.write("        <td height=\"");
      out.print( displayer.getHeight() );
      out.write("\" align=\"");
      out.print(displayer.getGraphicAlign());
      out.write('"');
      out.write('>');
      out.write('\n');
 if( displayer.isShowTitle() && displayer.getTitle() != null) { 
      out.write("\n");
      out.write("            <div id=\"title");
      out.print(chartId);
      out.write("\"   class=\"skn-chart-title\">");
      out.print(displayer.getTitle());
      out.write("</div>\n");
 } 
      out.write("\n");
      out.write("            <div id=\"tooltip");
      out.print(chartId);
      out.write("\" class=\"skn-chart-tooltip\"></div>\n");
      out.write("            <div class=\"skn-chart-wrapper\" style=\"width:");
      out.print( displayer.getWidth() );
      out.write("px;height:");
      out.print( displayer.getHeight() );
      out.write("px\" id=\"");
      out.print( chartId );
      out.write("\">\n");
      out.write("                <svg></svg>\n");
      out.write("            </div>\n");
      out.write("        </td>\n");
      out.write("    </tr>\n");
      out.write("    </tbody>\n");
      out.write("</table>\n");
      out.write("<!-- Chart wrapper end -->");
      out.write('\n');
      out.write("\n");
      out.write("<script type=\"text/javascript\" defer=\"defer\">\n");
      out.write("    chartData");
      out.print(chartId);
      out.write(" = [\n");
      out.write("        {\n");
      out.write("            key: \"");
      out.print( displayer.getTitle() );
      out.write("\",\n");
      out.write("            values: [\n");
      out.write("                ");
 for(int i=0; i < xvalues.size(); i++) { if( i != 0 ) out.print(", "); 
      out.write("\n");
      out.write("                {\n");
      out.write("                    \"label\" : \"");
      out.print( xvalues.get(i) );
      out.write("\" ,\n");
      out.write("                    \"value\" : ");
      out.print( yvalues.get(i) );
      out.write("\n");
      out.write("                }\n");
      out.write("                ");
 } 
      out.write("\n");
      out.write("            ]\n");
      out.write("        }\n");
      out.write("    ];\n");
      out.write("\n");
      out.write("    nv.addGraph({\n");
      out.write("      generate: function() {\n");
      out.write("            var chart = nv.models.pieChart();\n");
      out.write("\n");
      out.write("             chart  .x(function(d) { return d.label })\n");
      out.write("                    .y(function(d) { return d.value })\n");
      out.write("                    .width(");
      out.print( displayer.getWidth() );
      out.write(")\n");
      out.write("                    .height(");
      out.print( displayer.getHeight() );
      out.write(")\n");
      out.write("                    .showLegend(");
      out.print(displayer.isShowLegend() );
      out.write(")\n");
      out.write("                    .showLabels(");
      out.print(displayer.isShowLabelsXAxis() );
      out.write(")\n");
      out.write("                    .margin({top: ");
      out.print(displayer.getMarginTop());
      out.write(", right: ");
      out.print(displayer.getMarginRight());
      out.write(", bottom: ");
      out.print(displayer.getMarginBottom());
      out.write(", left: ");
      out.print(displayer.getMarginLeft());
      out.write("});\n");
      out.write("\n");
      out.write("               d3.select('#");
      out.print( chartId );
      out.write(" svg')\n");
      out.write("                    .datum(chartData");
      out.print(chartId);
      out.write(')');
      out.write('\n');
 if(animateChart) { 
      out.write(" .transition().duration(1200) ");
 } 
      out.write("\n");
      out.write("                    .call(chart);\n");
      out.write("\n");
      out.write("               nv.utils.windowResize(chart.update);\n");
      out.write("\n");
      out.write("            return chart;\n");
      out.write("\n");
      out.write("      },\n");
      out.write("      callback: function(graph) {\n");
      out.write("       ");
 if( enableDrillDown ) {
      out.write("\n");
      out.write("          graph.pie.dispatch.on('elementClick', function(e) {\n");
      out.write("          form = document.getElementById('");
      out.print("form"+chartId);
      out.write("');\n");
      out.write("          form.");
      out.print( NVD3ChartViewer.PARAM_NSERIE );
      out.write(".value = e.index;\n");
      out.write("          submitAjaxForm(form);\n");
      out.write("          });\n");
      out.write("       ");
 } 
      out.write("\n");
      out.write("\n");
      out.write("        graph.dispatch.on('tooltipShow', function(e, offsetElement) {\n");
      out.write("        ");
 if(enableTooltips) { 
      out.write("\n");
      out.write("              content = e.label + \" : \" + e.value;\n");
      out.write("              document.getElementById(\"tooltip");
      out.print(chartId);
      out.write("\").innerHTML=content;\n");
      out.write("        ");
 } 
      out.write("\n");
      out.write("          });\n");
      out.write("      }\n");
      out.write("  });\n");
      out.write("</script>\n");
      out.write('\n');

   } // END of regular mode

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

  private boolean _jspx_meth_factory_005fformUrl_005f0(PageContext _jspx_page_context)
          throws Throwable {
    PageContext pageContext = _jspx_page_context;
    JspWriter out = _jspx_page_context.getOut();
    //  factory:formUrl
    org.jboss.dashboard.ui.taglib.factory.FormURLTag _jspx_th_factory_005fformUrl_005f0 = (org.jboss.dashboard.ui.taglib.factory.FormURLTag) _005fjspx_005ftagPool_005ffactory_005fformUrl_0026_005ffriendly_005fnobody.get(org.jboss.dashboard.ui.taglib.factory.FormURLTag.class);
    _jspx_th_factory_005fformUrl_005f0.setPageContext(_jspx_page_context);
    _jspx_th_factory_005fformUrl_005f0.setParent(null);
    // /components/bam/displayer/chart/nvd3_piechart_viewer.jsp(48,28) name = friendly type = null reqTime = true required = false fragment = false deferredValue = false deferredMethod = false expectedTypeName = null methodSignature = null 
    _jspx_th_factory_005fformUrl_005f0.setFriendly(false);
    int _jspx_eval_factory_005fformUrl_005f0 = _jspx_th_factory_005fformUrl_005f0.doStartTag();
    if (_jspx_th_factory_005fformUrl_005f0.doEndTag() == javax.servlet.jsp.tagext.Tag.SKIP_PAGE) {
      _005fjspx_005ftagPool_005ffactory_005fformUrl_0026_005ffriendly_005fnobody.reuse(_jspx_th_factory_005fformUrl_005f0);
      return true;
    }
    _005fjspx_005ftagPool_005ffactory_005fformUrl_0026_005ffriendly_005fnobody.reuse(_jspx_th_factory_005fformUrl_005f0);
    return false;
  }
}
